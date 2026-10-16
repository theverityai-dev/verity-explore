/* Validates schema 2 business content files without writing anything.

   Usage: node scripts/check-content.mjs <slug> [<slug> ...]
          node scripts/check-content.mjs --all

   Safe to run in parallel from several workers: it only reads, and renders each
   page in memory to catch template errors. scripts/build.mjs and scripts/qa.mjs
   remain the site-wide gates and are run once by the coordinator. */

import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { FORBIDDEN_CLAIMS, PRIMITIVES, WEDGE, MIN_PRIMITIVES_WITH_WEDGE, CAPABILITIES } from '../content/capabilities.js';
import { BY_SLUG } from '../content/businesses/registry.js';
import { renderBusinessPageV2 } from '../lib/business-page-v2.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'content/businesses');
const BLOCKS = ['kpis', 'title', 'table', 'list', 'bars', 'board', 'record', 'checks', 'alert', 'ask'];
const TONES = ['flag', 'late', 'info', 'ok', 'muted'];

let slugs = process.argv.slice(2);
if (slugs[0] === '--all') {
  slugs = (await readdir(dir)).filter((f) => f.endsWith('.js') && f !== 'registry.js').map((f) => f.replace(/\.js$/, ''));
}
if (!slugs.length) {
  console.error('usage: node scripts/check-content.mjs <slug>... | --all');
  process.exit(2);
}

let bad = 0;

for (const slug of slugs) {
  const errs = [];
  const warns = [];
  const err = (m) => errs.push(m);
  const warn = (m) => warns.push(m);

  let biz;
  try {
    biz = (await import(pathToFileURL(join(dir, `${slug}.js`)).href + `?t=${Date.now()}`)).default;
  } catch (e) {
    console.log(`FAIL ${slug}: cannot load: ${e.message}`);
    bad += 1;
    continue;
  }

  if (!BY_SLUG[slug]) err('slug not in registry');
  if (biz.slug !== slug) err(`slug field "${biz.slug}" does not match file name`);
  if (biz.schema !== 2) err('schema is not 2 (file still holds old or placeholder content)');
  if (biz.status !== 'published') err('status is not "published"');

  if (biz.schema === 2) {
    const need = (obj, keys, where) => keys.forEach((k) => {
      if (obj?.[k] == null || obj[k] === '') err(`missing ${where}.${k}`);
    });
    need(biz, ['plural', 'subject', 'checked', 'seo', 'uses', 'hero', 'today', 'painsHeading', 'painsLede', 'pains', 'factsHeading', 'factsLede', 'facts', 'factsNote', 'screensHeading', 'screensLede', 'screens', 'dayHeading', 'dayLede', 'day', 'approach', 'ai', 'automationHeading', 'automationLede', 'automations', 'rules', 'rolesHeading', 'rolesLede', 'roles', 'alongside', 'faqHeading', 'faqs', 'related', 'ctaHeading', 'ctaLede'], 'biz');
    if (biz.seo) {
      need(biz.seo, ['title', 'description'], 'seo');
      if (biz.seo.title?.length > 70) err(`seo.title is ${biz.seo.title.length} chars, max 70`);
      if (biz.seo.description?.length > 175) err(`seo.description is ${biz.seo.description.length} chars, max 175`);
    }
    if (biz.hero) need(biz.hero, ['eyebrow', 'headline', 'lede', 'oneLine', 'note', 'screen'], 'hero');
    if (biz.today) {
      need(biz.today, ['heading', 'paragraphs', 'stack', 'stackNote'], 'today');
      if (biz.today.paragraphs?.length < 3) err('today.paragraphs needs at least 3');
      if (biz.today.stack?.length < 4) err('today.stack needs at least 4 items');
    }

    const screenIds = new Set((biz.screens || []).map((s) => s.id));
    if (biz.hero && !screenIds.has(biz.hero.screen)) err(`hero.screen "${biz.hero.screen}" is not a screen id`);

    const count = (arr, min, max, name) => {
      if (!Array.isArray(arr)) return err(`${name} is not an array`);
      if (arr.length < min || arr.length > max) err(`${name} has ${arr.length} items, expected ${min} to ${max}`);
    };
    count(biz.pains, 12, 16, 'pains');
    count(biz.facts, 4, 4, 'facts');
    count(biz.screens, 5, 7, 'screens');
    count(biz.day, 6, 6, 'day');
    count(biz.approach?.phases, 4, 4, 'approach.phases');
    count(biz.ai?.examples, 3, 3, 'ai.examples');
    count(biz.automations, 6, 6, 'automations');
    count(biz.rules?.items, 3, 5, 'rules.items');
    count(biz.roles, 5, 5, 'roles');
    count(biz.faqs, 8, 10, 'faqs');
    count(biz.related, 6, 6, 'related');

    const usedScreens = new Set();
    (biz.pains || []).forEach((p, i) => {
      need(p, ['area', 'title', 'scene', 'cost', 'fix', 'screen'], `pains[${i}]`);
      if (p.screen && !screenIds.has(p.screen)) err(`pains[${i}].screen "${p.screen}" is not a screen id`);
      usedScreens.add(p.screen);
      if (p.source && !/^https?:\/\//.test(p.source.url || '')) err(`pains[${i}].source.url invalid`);
    });
    screenIds.forEach((id) => { if (!usedScreens.has(id)) warn(`screen "${id}" is not referenced by any pain`); });

    (biz.facts || []).forEach((f, i) => {
      need(f, ['figure', 'text'], `facts[${i}]`);
      if (!/^https?:\/\//.test(f.source?.url || '')) err(`facts[${i}].source.url missing or invalid`);
      if (!f.source?.name) err(`facts[${i}].source.name missing`);
    });
    (biz.rules?.items || []).forEach((r, i) => need(r, ['name', 'what', 'how'], `rules.items[${i}]`));
    (biz.related || []).forEach((r) => { if (!BY_SLUG[r]) err(`related slug "${r}" not in registry`); if (r === slug) err('related includes itself'); });

    const checkTag = (t, where) => {
      if (t == null || t === '') return;
      if (!Array.isArray(t)) return;
      if (!TONES.includes(t[1])) err(`${where}: tone "${t[1]}" not in ${TONES.join('/')}`);
      if (t.length === 4 && !TONES.includes(t[3])) err(`${where}: flip tone "${t[3]}" invalid`);
      if (t.length === 3) err(`${where}: tag needs 2 or 4 items`);
    };
    (biz.screens || []).forEach((s, si) => {
      need(s, ['id', 'title', 'heading', 'caption', 'blocks'], `screens[${si}]`);
      (s.blocks || []).forEach((b, bi) => {
        const w = `screens[${si}].blocks[${bi}]`;
        if (!BLOCKS.includes(b.type)) return err(`${w}: unknown block type "${b.type}"`);
        if (b.type === 'table') {
          b.rows.forEach((r, ri) => {
            if (r.length !== b.cols.length) err(`${w}.rows[${ri}] has ${r.length} cells for ${b.cols.length} columns`);
            r.forEach((c) => checkTag(c, `${w}.rows[${ri}]`));
          });
        }
        if (b.type === 'list') b.items.forEach((r) => checkTag(r.tag, w));
        if (b.type === 'board') b.columns.forEach((c) => c.cards.forEach((k) => checkTag(k.tag, w)));
        if (b.type === 'record') b.fields.forEach(([, v]) => checkTag(v, w));
        if (b.type === 'bars') b.items.forEach((r) => { if (!(r.value >= 0 && r.value <= 100)) err(`${w}: bar value ${r.value} not 0 to 100`); });
      });
    });

    const ids = biz.uses || [];
    ids.forEach((id) => { if (!CAPABILITIES[id]) err(`uses: unknown capability "${id}"`); });
    const wedge = ids.filter((i) => WEDGE.includes(i));
    const prims = ids.filter((i) => PRIMITIVES.includes(i));
    if (wedge.length && prims.length < MIN_PRIMITIVES_WITH_WEDGE) err(`uses has wedge capabilities but only ${prims.length} primitives`);

    const flat = JSON.stringify(biz).toLowerCase();
    FORBIDDEN_CLAIMS.forEach((c) => { if (flat.includes(c.toLowerCase())) err(`contains forbidden phrase "${c}"`); });
    if (/[—–]/.test(JSON.stringify(biz))) warn('contains an em or en dash; use commas, colons or full stops');
    if (/\b(leverage|seamless|holistic|robust|cutting-edge|synergy|unlock|empower|game-chang)/i.test(JSON.stringify(biz))) warn('contains marketing jargon; use plain words');

    if (!errs.length) {
      try {
        const html = renderBusinessPageV2(biz);
        const words = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
        if (words < 3000) warn(`only ${words} words rendered; thin`);
      } catch (e) {
        err(`render failed: ${e.message}`);
      }
    }
  }

  if (errs.length) {
    bad += 1;
    console.log(`FAIL ${slug}`);
    errs.forEach((m) => console.log(`  x ${m}`));
  } else {
    console.log(`ok   ${slug}`);
  }
  warns.forEach((m) => console.log(`  . ${m}`));
}

process.exit(bad ? 1 : 0);
