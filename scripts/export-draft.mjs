/* Exports finished schema 2 content to a readable markdown draft.

   Usage: node scripts/export-draft.mjs <slug>... | --all

   Writes docs/drafts/<slug>.md. Existing drafts are never overwritten unless
   --force is given, so a researched draft written by hand is safe. This is how
   pages that were written straight to JS get their markdown draft, so every one
   of the 123 business types has a draft in docs/drafts/. */

import { readdir, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { BY_SLUG } from '../content/businesses/registry.js';
import { INDUSTRIES } from '../content/industries.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'content/businesses');
const out = join(root, 'docs/drafts');
await mkdir(out, { recursive: true });

const args = process.argv.slice(2);
const force = args.includes('--force');
let slugs = args.filter((a) => !a.startsWith('--'));
if (args.includes('--all')) {
  slugs = (await readdir(dir)).filter((f) => f.endsWith('.js') && f !== 'registry.js').map((f) => f.replace(/\.js$/, ''));
}

const src = (s) => (s ? ` (${s.name}${s.year ? `, ${s.year}` : ''}: ${s.url})` : '');

function md(biz) {
  const reg = BY_SLUG[biz.slug];
  const L = [];
  const h = (t) => L.push('', `## ${t}`, '');
  L.push('---', `slug: ${biz.slug}`, `name: ${reg.name}`, `industry: ${INDUSTRIES[reg.industry].name}`, 'status: converted', `checked: ${biz.checked}`, '---', '', `# ${reg.name}`);

  h('SEO');
  L.push(`- title: ${biz.seo.title}`, `- description: ${biz.seo.description}`, `- keywords: ${(biz.seo.keywords || []).join('; ')}`, `- plural: ${biz.plural}`, `- subject: ${biz.subject}`, `- uses: ${(biz.uses || []).join(', ')}`);

  h('Hero');
  L.push(`- eyebrow: ${biz.hero.eyebrow}`, `- headline: ${biz.hero.headline}`, `- lede: ${biz.hero.lede}`, `- one line: ${biz.hero.oneLine}`, `- note: ${biz.hero.note}`, `- hero screen id: ${biz.hero.screen}`, `- screen note: ${biz.hero.screenNote || ''}`);

  h('How it runs today');
  L.push(`**${biz.today.heading}**`, '', ...biz.today.paragraphs.map((p) => `- ${p}`), `- runs on: ${biz.today.stack.join('; ')}`, `- stack note: ${biz.today.stackNote}`);

  h('Pains');
  L.push(`Heading: ${biz.painsHeading}`, `Lede: ${biz.painsLede}`, '');
  biz.pains.forEach((p, i) => {
    L.push(`### ${i + 1}. ${p.title}`, `- area: ${p.area}`, `- scene: ${p.scene}`, `- cost: ${p.cost}`, `- fix: ${p.fix}`, `- screen: ${p.screen}`);
    if (p.source) L.push(`- source:${src(p.source)}`);
    L.push('');
  });

  h('Facts');
  L.push(`Heading: ${biz.factsHeading}`, `Lede: ${biz.factsLede}`, `Note: ${biz.factsNote}`, '');
  biz.facts.forEach((f) => L.push(`- **${f.figure}**: ${f.text}${src(f.source)}`));

  h('Screens');
  L.push(`Heading: ${biz.screensHeading}`, `Lede: ${biz.screensLede}`, '');
  biz.screens.forEach((s) => {
    L.push(`### ${s.id}: ${s.heading}`, `- panel title: ${s.title}`, `- meta: ${s.meta || ''}`, `- caption: ${s.caption}`, '', '```json', JSON.stringify(s.blocks, null, 1), '```', '');
  });

  h('Day, before and after');
  L.push(`Heading: ${biz.dayHeading}`, `Lede: ${biz.dayLede}`, '');
  biz.day.forEach((d) => L.push(`- ${d.time}: before: ${d.before} | after: ${d.after}`));

  h('How we work');
  L.push(`Heading: ${biz.approach.heading}`, `Lede: ${biz.approach.lede}`, '');
  biz.approach.phases.forEach((p) => L.push(`### ${p.when}: ${p.name}`, `- we: ${p.we}`, `- you: ${p.you}`, `- get: ${p.get}`, ''));
  L.push(`- bring: ${biz.approach.bring.join('; ')}`, `- time: ${biz.approach.time}`, `- after: ${biz.approach.after}`);

  h('Verity AI examples');
  L.push(`Heading: ${biz.ai.heading}`, `Lede: ${biz.ai.lede}`, '');
  biz.ai.examples.forEach((e) => L.push(`- Q: ${e.q} | A: ${e.a}${e.rows ? ` | rows: ${e.rows.map((r) => r.join(' = ')).join('; ')}` : ''}${e.action ? ` | action: ${e.action}` : ''}`));

  h('Automations');
  L.push(`Heading: ${biz.automationHeading}`, `Lede: ${biz.automationLede}`, '');
  biz.automations.forEach((a) => L.push(`- when ${a.when}: ${a.then.join('; ')}`));

  h('Rules and paperwork');
  L.push(`Heading: ${biz.rules.heading}`, `Lede: ${biz.rules.lede}`, `Note: ${biz.rules.note}`, '');
  biz.rules.items.forEach((r) => L.push(`- **${r.name}**: what: ${r.what} | how: ${r.how}${src(r.source)}`));

  h('Roles');
  L.push(`Heading: ${biz.rolesHeading}`, `Lede: ${biz.rolesLede}`, '');
  biz.roles.forEach((r) => L.push(`- ${r.role}: ${r.question} | ${r.sees}`));

  h('Alongside');
  L.push(`Heading: ${biz.alongside.heading}`, `- keep: ${biz.alongside.keep.join('; ')}`, `- not: ${biz.alongside.not.join('; ')}`, `- migration: ${biz.alongside.migration}`);

  h('FAQ');
  L.push(`Heading: ${biz.faqHeading}`, '');
  biz.faqs.forEach(([q, a]) => L.push(`- **${q}** ${a}`));

  h('Related and CTA');
  L.push(`- related: ${biz.related.join(', ')}`, `- cta heading: ${biz.ctaHeading}`, `- cta lede: ${biz.ctaLede}`);

  h('Assumptions and unverified');
  L.push('- Exported from the finished JS. Process hours and sample figures are drafted assumptions to confirm with the Verity team.');
  return L.join('\n') + '\n';
}

let n = 0;
for (const slug of slugs) {
  const target = join(out, `${slug}.md`);
  if (existsSync(target) && !force) continue;
  const biz = (await import(pathToFileURL(join(dir, `${slug}.js`)).href + `?t=${Date.now()}`)).default;
  if (biz.schema !== 2) { console.log(`skip ${slug}: not schema 2`); continue; }
  await writeFile(target, md(biz), 'utf8');
  n += 1;
}
console.log(`exported ${n} draft(s) to docs/drafts/`);
