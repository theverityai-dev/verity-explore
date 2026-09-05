/* Renders the Explore layer to static HTML.

   Output is committed to the repository so the deployment stays a pure static
   site with no build step on Vercel. Run `node scripts/build.mjs` after any
   content change. */

import { writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE } from '../lib/render.js';
import { renderBusinessPage } from '../lib/business-page.js';
import { renderIndustryPage } from '../lib/industry-page.js';
import { renderHub, renderIndustriesIndex } from '../lib/hub-page.js';
import { INDUSTRIES } from '../content/industries.js';
import { BY_SLUG } from '../content/businesses/registry.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = (p) => join(root, p);

async function write(path, html) {
  await mkdir(dirname(out(path)), { recursive: true });
  await writeFile(out(path), html.trimStart() + '\n', 'utf8');
  return path;
}

/* ------------------------------------------------ load published content --- */

const contentDir = join(root, 'content/businesses');
const files = (await readdir(contentDir)).filter((f) => f.endsWith('.js') && f !== 'registry.js');

const businesses = [];
for (const file of files) {
  const mod = await import(join(contentDir, file));
  const biz = mod.default;
  if (!BY_SLUG[biz.slug]) throw new Error(`${file}: slug "${biz.slug}" is not in the registry`);
  if (biz.status !== 'published') {
    console.log(`  skip  ${biz.slug} (status: ${biz.status})`);
    continue;
  }
  businesses.push(biz);
}
const publishedSlugs = new Set(businesses.map((b) => b.slug));

/* Related links must never point at an unwritten page, and a business page
   must never end with an empty related section. The authored list is the
   intent; it is filtered to what exists and topped up from the same industry,
   then from the rest of the published set, so the internal-link graph is dense
   from the first ten pages onward. */
const RELATED_TARGET = 6;
for (const biz of businesses) {
  const authored = biz.related.filter((s) => publishedSlugs.has(s));
  const resolved = [...authored];
  const industryOf = (s) => BY_SLUG[s].industry;
  const pool = [
    ...businesses.filter((b) => industryOf(b.slug) === industryOf(biz.slug)),
    ...businesses,
  ];
  for (const candidate of pool) {
    if (resolved.length >= RELATED_TARGET) break;
    if (candidate.slug === biz.slug || resolved.includes(candidate.slug)) continue;
    resolved.push(candidate.slug);
  }
  if (authored.length < biz.related.length) {
    console.log(
      `  note  ${biz.slug}: ${biz.related.length - authored.length} authored related link(s) not yet written, topped up from published set`
    );
  }
  biz.related = resolved;
}

/* ---------------------------------------------------------------- render --- */

const written = [];

/* The hub lives at /explore/index.html and is rewritten to the Explore host's
   root by vercel.json. Its canonical is the root, so the physical path never
   competes with it. */
written.push(await write('explore/index.html', renderHub(publishedSlugs)));
written.push(await write('industries/index.html', renderIndustriesIndex(publishedSlugs)));

for (const slug of Object.keys(INDUSTRIES)) {
  written.push(await write(`industries/${slug}/index.html`, renderIndustryPage(slug, publishedSlugs)));
}

for (const biz of businesses) {
  written.push(await write(`businesses/${biz.slug}/index.html`, renderBusinessPage(biz)));
}

/* Remove business directories whose content file was unpublished or deleted. */
const bizDir = join(root, 'businesses');
if (existsSync(bizDir)) {
  for (const dir of await readdir(bizDir)) {
    if (!publishedSlugs.has(dir)) {
      await rm(join(bizDir, dir), { recursive: true, force: true });
      console.log(`  prune businesses/${dir}/`);
    }
  }
}

/* ------------------------------------------------------- sitemap + robots --- */

const urls = [
  { loc: '/', priority: '1.0' },
  { loc: '/industries/', priority: '0.8' },
  ...Object.keys(INDUSTRIES).map((s) => ({ loc: `/industries/${s}/`, priority: '0.8' })),
  ...businesses.map((b) => ({ loc: `/businesses/${b.slug}/`, priority: '0.7' })),
];
const today = new Date().toISOString().slice(0, 10);

await write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE.origin}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`
);

await write(
  'robots.txt',
  `User-agent: *
Allow: /

Sitemap: ${SITE.origin}/sitemap.xml`
);

console.log(`\n  ${written.length} pages · ${urls.length} sitemap entries · ${businesses.length} businesses published`);
