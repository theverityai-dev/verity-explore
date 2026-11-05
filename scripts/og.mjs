/* Renders the 1200x630 link-preview image for every page into og/.

   WhatsApp, LinkedIn, X and search results show this card when a page is
   shared. Each card carries the page's own headline, so a garment owner who is
   sent the garment page sees the garment problem, not a generic logo.

   Run after `node scripts/build.mjs`:
     PLAYWRIGHT_PATH=<path to a playwright package> node scripts/og.mjs
   Playwright is not a dependency of this static site, so its location is
   given explicitly. The images are committed; Vercel serves them as files. */

import { readFile, readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { ogKey } from '../lib/render.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pw = process.env.PLAYWRIGHT_PATH;
if (!pw || !existsSync(pw)) {
  console.error('Set PLAYWRIGHT_PATH to an installed playwright package directory.');
  process.exit(1);
}
const { chromium } = createRequire(import.meta.url)(pw);

async function pages() {
  const list = [['index.html', '/']];
  for (const dir of ['explore', 'industries', 'demo']) {
    if (existsSync(join(root, dir, 'index.html'))) list.push([`${dir}/index.html`, `/${dir}/`]);
  }
  for (const ind of await readdir(join(root, 'industries'))) {
    if (existsSync(join(root, 'industries', ind, 'index.html'))) list.push([`industries/${ind}/index.html`, `/industries/${ind}/`]);
  }
  for (const biz of await readdir(join(root, 'businesses'))) list.push([`businesses/${biz}/index.html`, `/businesses/${biz}/`]);
  return list;
}

const text = (s) => s.replace(/<[^>]+>/g, '').replace(/&rsquo;/g, '’').replace(/&amp;/g, '&').replace(/&middot;/g, '·').replace(/\s+/g, ' ').trim();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function card({ label, headline }) {
  const size = headline.length > 90 ? 50 : headline.length > 60 ? 58 : 68;
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; font-family: Inter, sans-serif; color: #0f1115; background: #f7f8fa; overflow: hidden; position: relative; }
  .bg { position: absolute; inset: 0;
    background:
      radial-gradient(520px 420px at 1080px 80px, rgba(10,132,255,0.22), transparent 70%),
      radial-gradient(420px 360px at 940px 600px, rgba(10,132,255,0.12), transparent 70%),
      linear-gradient(rgba(15,17,21,0.045) 1px, transparent 1px) 0 0 / 40px 40px,
      linear-gradient(90deg, rgba(15,17,21,0.045) 1px, transparent 1px) 0 0 / 40px 40px; }
  .wrap { position: relative; height: 100%; padding: 64px 72px; display: flex; flex-direction: column; }
  .brand { display: flex; align-items: center; gap: 12px; font-size: 30px; letter-spacing: -0.02em; }
  .label { margin-top: 52px; font-size: 18px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #0050a8; }
  h1 { margin-top: 18px; max-width: 980px; font-size: ${size}px; line-height: 1.08; font-weight: 300; letter-spacing: -0.035em;
       display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; }
  .chip { padding: 14px 22px; border-radius: 12px; background: #0a84ff; color: #fff; font-size: 21px; font-weight: 500;
          box-shadow: 0 1px 2px rgba(10,60,140,0.25), 0 14px 30px -12px rgba(10,132,255,0.7); }
  .url { font-size: 21px; color: #6b7078; }
</style></head><body><div class="bg"></div><div class="wrap">
  <div class="brand"><svg width="26" height="32" viewBox="0 0 24 30"><path d="M2.6 1.6h18.8a1.6 1.6 0 011.2 2.7L13.2 14a1.6 1.6 0 01-2.4 0L1.4 4.3A1.6 1.6 0 012.6 1.6z" fill="#0A84FF"/><path d="M10.8 16a1.6 1.6 0 012.4 0l9.4 9.7a1.6 1.6 0 01-1.2 2.7H2.6a1.6 1.6 0 01-1.2-2.7z" fill="#0A84FF"/></svg>verity</div>
  <p class="label">${esc(label)}</p>
  <h1>${esc(headline)}</h1>
  <div class="foot"><span class="chip">Free demo on your own data, in 7 days</span><span class="url">verity.plotarmour.in</span></div>
</div></body></html>`;
}

await mkdir(join(root, 'og'), { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
let n = 0;
for (const [file, canonical] of await pages()) {
  const html = await readFile(join(root, file), 'utf8');
  const h1 = text((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, 'Business software set up around how you already work.'])[1]);
  const biz = canonical.startsWith('/businesses/') || canonical.startsWith('/industries/')
    ? text((html.match(/<p class="label"[^>]*>([^<]*)<\/p>/) || [, ''])[1])
    : '';
  const label =
    canonical === '/' ? 'Business software for Indian businesses'
    : canonical === '/demo/' ? 'Free demo'
    : canonical === '/explore/' ? '123 business types'
    : biz || 'Verity';
  await page.setContent(card({ label, headline: h1 }), { waitUntil: 'networkidle' });
  await page.screenshot({ path: join(root, 'og', `${ogKey(canonical)}.png`) });
  n++;
}
await browser.close();
console.log(`  ${n} preview images written to og/`);
