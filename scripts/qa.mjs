/* Automated quality gate for the Explore layer.

   Runs against the built HTML, not against the content model, so it catches
   template regressions as well as content mistakes. Exits non-zero on failure
   so it can gate a commit or a deploy. */

import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FORBIDDEN_CLAIMS } from '../content/capabilities.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const warnings = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

/* ------------------------------------------------------------ collect --- */

async function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    if ((await stat(full)).isDirectory()) await walk(full, acc);
    else if (entry === 'index.html') acc.push(full);
  }
  return acc;
}

const pages = [
  ...(await walk(join(root, 'businesses'))),
  ...(await walk(join(root, 'industries'))),
  ...(await walk(join(root, 'explore'))),
];

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
const robots = await readFile(join(root, 'robots.txt'), 'utf8');

if (!/Sitemap:\s*https:\/\//.test(robots)) fail('robots.txt', 'no Sitemap directive');
if (/Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt', 'blocks the whole site');

const texts = new Map();
const titles = new Map();
const descriptions = new Map();
const hrefs = new Map();

/* -------------------------------------------------------- per-page QA --- */

for (const file of pages) {
  const page = file.replace(root + '/', '');
  const html = await readFile(file, 'utf8');
  const canonicalPath =
    '/' + page.replace(/index\.html$/, '').replace(/^explore\/$/, '');

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const h1s = html.match(/<h1\b/g) || [];

  if (!title) fail(page, 'missing <title>');
  else if (title.length > 70) warn(page, `title is ${title.length} characters`);
  if (!desc) fail(page, 'missing meta description');
  else if (desc.length > 175) warn(page, `description is ${desc.length} characters`);
  if (!canonical) fail(page, 'missing canonical');
  else if (!canonical.endsWith(canonicalPath)) fail(page, `canonical ${canonical} does not match ${canonicalPath}`);
  if (h1s.length !== 1) fail(page, `${h1s.length} <h1> elements, expected exactly 1`);
  if (/noindex/.test(html)) fail(page, 'carries a noindex directive');
  if (!/property="og:title"/.test(html)) fail(page, 'missing Open Graph title');
  if (!/name="twitter:card"/.test(html)) fail(page, 'missing Twitter card');
  if (!/class="btn btn--primary"/.test(html)) fail(page, 'no primary CTA');

  /* Breadcrumb — the hub is the root of the trail and does not carry one. */
  if (!page.startsWith('explore/') && !/class="xb"/.test(html)) fail(page, 'missing breadcrumb');

  /* JSON-LD must parse. */
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) fail(page, 'no JSON-LD');
  for (const [, body] of blocks) {
    try {
      const parsed = JSON.parse(body);
      if (!parsed['@context'] || !parsed['@type']) fail(page, 'JSON-LD block missing @context or @type');
      /* FAQPage may only mark up questions that are on the page. */
      if (parsed['@type'] === 'FAQPage') {
        for (const q of parsed.mainEntity) {
          const needle = q.name.replace(/&/g, '&amp;').slice(0, 40);
          if (!html.includes(needle.slice(0, 30))) fail(page, `FAQ "${q.name.slice(0, 40)}" is in JSON-LD but not visible on the page`);
        }
      }
    } catch (e) {
      fail(page, `invalid JSON-LD: ${e.message}`);
    }
  }

  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();

  for (const claim of FORBIDDEN_CLAIMS) {
    if (text.includes(claim.toLowerCase())) fail(page, `mentions unsupported capability "${claim}"`);
  }

  const words = text.split(' ').length;
  if (page.startsWith('businesses/') && words < 1800) {
    warn(page, `${words} words — thin for a business page`);
  }

  if (titles.has(title)) fail(page, `duplicate title, shared with ${titles.get(title)}`);
  titles.set(title, page);
  if (descriptions.has(desc)) fail(page, `duplicate meta description, shared with ${descriptions.get(desc)}`);
  descriptions.set(desc, page);

  texts.set(page, text);
  hrefs.set(page, [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]));
}

/* -------------------------------------------------- links and sitemap --- */

for (const [page, links] of hrefs) {
  for (const href of new Set(links)) {
    if (href.startsWith('/css/') || href.startsWith('/js/')) {
      if (!existsSync(join(root, href.slice(1)))) fail(page, `asset not found: ${href}`);
      continue;
    }
    if (href === '/') continue; /* rewritten to the hub by vercel.json */
    const target = join(root, href.slice(1), 'index.html');
    if (!existsSync(target)) fail(page, `dead internal link: ${href}`);
  }
  const canonicalPath = '/' + page.replace(/index\.html$/, '').replace(/^explore\/$/, '');
  if (!sitemap.includes(`<loc>https://explore.theverityai.xyz${canonicalPath}</loc>`)) {
    fail(page, `not in sitemap.xml (expected ${canonicalPath})`);
  }
}

/* ------------------------------------------------------- duplication --- */

const shingles = (t) => {
  const w = t.split(' ');
  const s = new Set();
  for (let i = 0; i + 6 <= w.length; i += 1) s.add(w.slice(i, i + 6).join(' '));
  return s;
};
const cache = new Map();
const grams = (p) => {
  if (!cache.has(p)) cache.set(p, shingles(texts.get(p)));
  return cache.get(p);
};

const business = [...texts.keys()].filter((p) => p.startsWith('businesses/'));
for (let i = 0; i < business.length; i += 1) {
  for (let j = i + 1; j < business.length; j += 1) {
    const a = grams(business[i]);
    const b = grams(business[j]);
    let shared = 0;
    for (const g of a) if (b.has(g)) shared += 1;
    const overlap = shared / Math.min(a.size, b.size);
    if (overlap > 0.4) fail(`${business[i]} / ${business[j]}`, `${Math.round(overlap * 100)}% shared phrasing — the pages are too similar`);
    else if (overlap > 0.28) warn(`${business[i]} / ${business[j]}`, `${Math.round(overlap * 100)}% shared phrasing`);
  }
}

/* ------------------------------------------------------------ report --- */

console.log(`\n  ${pages.length} pages checked`);
if (warnings.length) {
  console.log(`\n  ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`    · ${w}`));
}
if (failures.length) {
  console.log(`\n  ${failures.length} failure(s):`);
  failures.forEach((f) => console.log(`    ✗ ${f}`));
  process.exit(1);
}
console.log('\n  all checks passed\n');
