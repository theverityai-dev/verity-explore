/* Converts a researched markdown draft (docs/drafts/<slug>.md) into the schema 2
   content file (content/businesses/<slug>.js).

   Usage: node scripts/draft-to-js.mjs <slug>...        write the JS file(s)
          node scripts/draft-to-js.mjs --roundtrip <slug>...
              parse the draft and compare the rendered page with the existing
              JS file, to prove the parser reads the draft format faithfully.

   The draft format is the one scripts/export-draft.mjs writes and
   docs/drafts/cafes.md shows. Anything the draft does not carry fails loudly
   here instead of producing a half-empty page. After writing, run
   node scripts/check-content.mjs <slug>. */

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderBusinessPageV2 } from '../lib/business-page-v2.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function sections(text) {
  const body = text.replace(/^---[\s\S]*?---\r?\n/, '').replace(/\r\n/g, '\n');
  const out = {};
  for (const part of body.split(/^## /m).slice(1)) {
    const nl = part.indexOf('\n');
    out[part.slice(0, nl).trim()] = part.slice(nl + 1);
  }
  return out;
}

const need = (v, what) => {
  if (v == null || v === '') throw new Error(`draft is missing ${what}`);
  return v;
};
const line = (sec, re, what) => need(sec.match(re)?.[1]?.trim(), what);
const field = (sec, key, what = key) => line(sec, new RegExp(`^- ${key}:[ \\t]*(.*)$`, 'm'), what);
const optField = (sec, key) => sec.match(new RegExp(`^- ${key}:[ \\t]*(.*)$`, 'm'))?.[1]?.trim() || '';
const heading = (sec) => line(sec, /^Heading:[ \t]*(.*)$/m, 'Heading');
const lede = (sec) => line(sec, /^Lede:[ \t]*(.*)$/m, 'Lede');
const note = (sec) => line(sec, /^Note:[ \t]*(.*)$/m, 'Note');
const list = (v, sep = '; ') => v.split(sep).map((s) => s.trim()).filter(Boolean);
const bullets = (sec) => sec.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2));

/* "text (Name, year: https://url)" -> { text, source }. Names may hold one
   level of parentheses. A value with no trailing source returns source null. */
function splitSource(str) {
  const s = str.trim();
  const at = s.lastIndexOf(': http');
  if (!s.endsWith(')') || at < 0) return { text: s, source: null };
  const url = s.slice(at + 2, -1).trim();
  let j = at - 1;
  let depth = 0;
  for (; j >= 0; j -= 1) {
    if (s[j] === ')') depth += 1;
    else if (s[j] === '(') {
      if (depth === 0) break;
      depth -= 1;
    }
  }
  if (j < 0) return { text: s, source: null };
  return { text: s.slice(0, j).trim(), source: { name: s.slice(j + 1, at).trim(), url } };
}

export function parseDraft(md) {
  const fm = md.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || '';
  const fmv = (k) => fm.match(new RegExp(`^${k}:[ \\t]*(.*)$`, 'm'))?.[1]?.trim();
  const S = sections(md);
  const sec = (n) => need(S[n], `section "${n}"`);

  const seo = sec('SEO');
  const hero = sec('Hero');
  const today = sec('How it runs today');
  const pains = sec('Pains');
  const facts = sec('Facts');
  const screens = sec('Screens');
  const day = sec('Day, before and after');
  const how = sec('How we work');
  const ai = sec('Verity AI examples');
  const auto = sec('Automations');
  const rules = sec('Rules and paperwork');
  const roles = sec('Roles');
  const along = sec('Alongside');
  const faq = sec('FAQ');
  const rel = sec('Related and CTA');

  const todayBullets = bullets(today);
  const howParts = how.split(/^### /m);

  return {
    schema: 2,
    slug: need(fmv('slug'), 'front matter slug'),
    status: 'published',
    plural: field(seo, 'plural'),
    subject: field(seo, 'subject'),
    checked: need(fmv('checked'), 'front matter checked'),
    seo: {
      title: field(seo, 'title'),
      description: field(seo, 'description'),
      keywords: list(optField(seo, 'keywords')),
    },
    uses: list(field(seo, 'uses'), ','),
    hero: {
      eyebrow: field(hero, 'eyebrow'),
      headline: field(hero, 'headline'),
      lede: field(hero, 'lede'),
      oneLine: field(hero, 'one line'),
      note: field(hero, 'note'),
      screen: field(hero, 'hero screen id'),
      screenNote: optField(hero, 'screen note'),
    },
    today: {
      heading: line(today, /^\*\*(.*)\*\*\s*$/m, 'today heading'),
      paragraphs: todayBullets.filter((b) => !/^(runs on|stack note):/.test(b)),
      stack: list(field(today, 'runs on')),
      stackNote: field(today, 'stack note'),
    },
    painsHeading: heading(pains),
    painsLede: lede(pains),
    pains: pains.split(/^### /m).slice(1).map((p) => {
      const title = p.split('\n')[0].replace(/^\d+\.\s*/, '').trim();
      const src = optField(p, 'source');
      const out = {
        area: field(p, 'area'),
        title,
        scene: field(p, 'scene'),
        cost: field(p, 'cost'),
        fix: field(p, 'fix'),
        screen: field(p, 'screen'),
      };
      if (src) {
        const { source } = splitSource(src);
        if (source) out.source = source;
      }
      return out;
    }),
    factsHeading: heading(facts),
    factsLede: lede(facts),
    factsNote: note(facts),
    facts: bullets(facts).map((b) => {
      const m = b.match(/^\*\*(.+?)\*\*:\s*(.*)$/);
      if (!m) throw new Error(`bad fact line: ${b.slice(0, 60)}`);
      const { text, source } = splitSource(m[2]);
      if (!source) throw new Error(`fact without source: ${b.slice(0, 60)}`);
      return { figure: m[1], text, source };
    }),
    screensHeading: heading(screens),
    screensLede: lede(screens),
    screens: screens.split(/^### /m).slice(1).map((s) => {
      const first = s.split('\n')[0];
      const cut = first.indexOf(': ');
      const json = s.match(/```json\n([\s\S]*?)\n```/)?.[1];
      return {
        id: first.slice(0, cut).trim(),
        title: field(s, 'panel title'),
        meta: optField(s, 'meta'),
        heading: first.slice(cut + 2).trim(),
        caption: field(s, 'caption'),
        blocks: JSON.parse(need(json, `JSON blocks for screen ${first}`)),
      };
    }),
    dayHeading: heading(day),
    dayLede: lede(day),
    day: bullets(day).map((b) => {
      const m = b.match(/^(.+?): before: (.*?) \| after: (.*)$/);
      if (!m) throw new Error(`bad day line: ${b.slice(0, 60)}`);
      return { time: m[1], before: m[2], after: m[3] };
    }),
    approach: {
      heading: heading(how),
      lede: lede(how),
      phases: howParts.slice(1).map((p) => {
        const first = p.split('\n')[0];
        const cut = first.indexOf(': ');
        return {
          when: first.slice(0, cut).trim(),
          name: first.slice(cut + 2).trim(),
          we: field(p, 'we'),
          you: field(p, 'you'),
          get: field(p, 'get'),
        };
      }),
      bring: list(field(howParts[howParts.length - 1], 'bring')),
      time: field(howParts[howParts.length - 1], 'time'),
      after: field(howParts[howParts.length - 1], 'after'),
    },
    ai: {
      heading: heading(ai),
      lede: lede(ai),
      examples: bullets(ai).map((b) => {
        const parts = b.split(' | ');
        const get = (p) => parts.find((x) => x.startsWith(p))?.slice(p.length).trim();
        const ex = { q: need(get('Q: '), 'AI question'), a: need(get('A: '), 'AI answer') };
        const rows = get('rows: ');
        if (rows) ex.rows = list(rows).map((r) => r.split(' = ').map((x) => x.trim()));
        const action = get('action: ');
        if (action) ex.action = action;
        return ex;
      }),
    },
    automationHeading: heading(auto),
    automationLede: lede(auto),
    automations: bullets(auto).map((b) => {
      const m = b.match(/^when (.+?): (.*)$/);
      if (!m) throw new Error(`bad automation line: ${b.slice(0, 60)}`);
      return { when: m[1], then: list(m[2]) };
    }),
    rules: {
      heading: heading(rules),
      lede: lede(rules),
      note: note(rules),
      items: bullets(rules).map((b) => {
        const m = b.match(/^\*\*(.+?)\*\*:\s*what:\s*(.*)$/);
        if (!m) throw new Error(`bad rule line: ${b.slice(0, 60)}`);
        const { text, source } = splitSource(m[2]);
        const [what, how2] = text.split(' | how: ');
        const item = { name: m[1], what: need(what, 'rule what'), how: need(how2, 'rule how') };
        if (source) item.source = source;
        return item;
      }),
    },
    rolesHeading: heading(roles),
    rolesLede: lede(roles),
    roles: bullets(roles).map((b) => {
      const cut = b.indexOf(': ');
      const [question, sees] = b.slice(cut + 2).split(' | ');
      return { role: b.slice(0, cut), question: need(question, 'role question'), sees: need(sees, 'role sees') };
    }),
    alongside: {
      heading: heading(along),
      keep: list(field(along, 'keep')),
      not: list(field(along, 'not')),
      migration: field(along, 'migration'),
    },
    faqHeading: heading(faq),
    faqs: bullets(faq).map((b) => {
      const m = b.match(/^\*\*(.+?)\*\*\s+(.*)$/);
      if (!m) throw new Error(`bad faq line: ${b.slice(0, 60)}`);
      return [m[1], m[2]];
    }),
    related: list(field(rel, 'related'), ','),
    ctaHeading: field(rel, 'cta heading'),
    ctaLede: field(rel, 'cta lede'),
  };
}

const args = process.argv.slice(2);
const round = args.includes('--roundtrip');
const slugs = args.filter((a) => !a.startsWith('--'));
if (!slugs.length) {
  console.error('usage: node scripts/draft-to-js.mjs [--roundtrip] <slug>...');
  process.exit(2);
}

let bad = 0;
for (const slug of slugs) {
  try {
    const biz = parseDraft(await readFile(join(root, 'docs/drafts', `${slug}.md`), 'utf8'));
    if (round) {
      const orig = (await import(pathToFileURL(join(root, 'content/businesses', `${slug}.js`)).href + `?t=${Date.now()}`)).default;
      const a = renderBusinessPageV2(biz);
      const b = renderBusinessPageV2(orig);
      if (a === b) console.log(`same ${slug}`);
      else {
        bad += 1;
        let i = 0;
        while (a[i] === b[i]) i += 1;
        console.log(`DIFF ${slug} at ${i}: parsed ...${a.slice(Math.max(0, i - 40), i + 80)} | original ...${b.slice(Math.max(0, i - 40), i + 80)}`);
      }
    } else {
      const body = `export default ${JSON.stringify(biz, null, 2)};\n`;
      await writeFile(join(root, 'content/businesses', `${slug}.js`), body, 'utf8');
      console.log(`wrote ${slug}`);
    }
  } catch (e) {
    bad += 1;
    console.log(`FAIL ${slug}: ${e.message}`);
  }
}
process.exit(bad ? 1 : 0);
