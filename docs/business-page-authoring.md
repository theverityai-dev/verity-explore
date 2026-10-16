# Business page authoring guide (schema 2)

Read this fully before writing. It is the contract for every `content/businesses/<slug>.js` file.

## Goal and reader

The reader is the owner of this type of business, in India unless the business type clearly implies otherwise. The page must be something the Verity team can send to that owner so they understand, without a call:

- what is going wrong in a business like theirs (every real pain point, not a sample),
- what each costs,
- how Verity fixes each, shown on mock screens,
- how we work with them over four weeks,
- what an ordinary day looks like before and after.

Write plain words and short sentences. No jargon: never use "operational layer", "primitives", "ecosystem", "leverage", "seamless", "holistic", "robust", "unlock", "empower". No em dashes or en dashes. Use the business's own nouns (a school says students, fees, timetable; a law firm says matters, hearings, billing).

## Two phases: markdown draft first, then JS

Every business type gets a markdown draft in `docs/drafts/<slug>.md` BEFORE any JS is written. 123 drafts must exist.

- **Phase A, draft (research happens here).** For each assigned slug, write `docs/drafts/<slug>.md` using exactly the structure of `docs/drafts/cafes.md` (front matter, SEO, Hero, How it runs today, Pains, Facts, Screens with JSON blocks, Day, How we work, Verity AI examples, Automations, Rules and paperwork, Roles, Alongside, FAQ, Related and CTA, Assumptions and unverified). Put `status: researched` in the front matter and add a `## Research log` section after the front matter listing every query run and, for each source used: `name | URL | year | verified yes/no | what it says`. All WebSearch and WebFetch work belongs in this phase. Do not write the JS file in Phase A.
- **Phase B, convert.** Read the draft only (no new research except to repair a flagged item), write `content/businesses/<slug>.js` in schema 2 from it, run `node scripts/check-content.mjs <slug>` until `ok`, then set the draft's front matter to `status: converted`.
- Finished pages that were written straight to JS already have an exported draft with `status: converted`. Do not touch them unless asked.
- Concurrency: at most 3 agents run at any time. Launch the next batch of 3 only after the previous batch has reported. Give each agent about 6 slugs.

## Exemplars

`content/businesses/salons.js` is the reference. `restaurants.js` and `pharmacies.js` follow it. Copy the SHAPE and the quality bar, never the sentences. The site QA fails any two pages that share more than 40% of 6-word phrases, so every sentence must be specific to your business type. In particular, do not reuse the exemplars' wording for approach phases, FAQ answers, automation lines, the "alongside" lists or day rows beyond what is truly generic, and vary the generic ones.

## Required content and counts (enforced by the checker)

- `pains`: 12 to 16. Cover every real pain point for the type, across customers or clients, operations, stock or delivery, suppliers, people and staff, money and cash, compliance, owner visibility and multiple locations (only where they apply). Think in sub-segments too (a school has fee collection, attendance, transport, exams, parents; a hospital has OPD, IPD, billing, pharmacy, insurance). Each pain has `area`, `title`, `scene` (a concrete recognisable situation), `cost` (what it costs; use labelled "Example arithmetic" with round numbers, or a sourced figure), `fix` (what Verity does, matching something visible on a screen), `screen` (id of a screen that shows it), optional `source {name,url}`.
- `facts`: exactly 4, each with `figure`, `text`, `source {name, url, year?}`.
- `screens`: 5 to 7, each a different job. `hero.screen` is the owner's overview screen. Each pain's `screen` must be a real id and every screen should be referenced by some pain.
- `day`: 6 rows (time or period, before, after).
- `approach`: heading, lede, 4 `phases` (keep the fixed names and order: Week 1 Discovery and mapping; Weeks 2 to 3 Configuration; Weeks 3 to 4 Migration and training; After go-live Operations partnership), each with `we`, `you`, `get` written for this business; `bring` (4 to 6 items); `time` (owner hours, between 8 and 14, plus other roles); `after`.
- `ai`: 3 `examples`, each `{q, a, rows?, action?}` with illustrative numbers.
- `automations`: 6 `{when, then[3]}`.
- `rules`: 3 to 5 items `{name, what, how, source?}` for the laws, licences, registers or standards that apply, plus `lede` and `note` (not legal advice; Verity does not file anything).
- `roles`: 5 `{role, question, sees}`.
- `alongside`: `heading`, `keep[4]` (tools they keep using), `not[4]` (honest things Verity does not do), `migration`.
- `faqs`: 8 to 10 `[question, answer]`, specific to this type. Always include one on price that says it depends and invites a message (never invent prices) and one on who can see data.
- `related`: exactly 6 slugs from `content/businesses/registry.js`, not itself.
- `seo.title` max 70 characters, `seo.description` max 175, both unique. `checked: '15 October 2026'`. `uses`: capability ids from `content/capabilities.js` (include at least 5 primitives: people, work, relationships, records, workflows, communication, intelligence, control).

Copy the field names, headings keys (`painsHeading`, `painsLede`, `factsHeading`, `factsLede`, `factsNote`, `screensHeading`, `screensLede`, `dayHeading`, `dayLede`, `automationHeading`, `automationLede`, `rolesHeading`, `rolesLede`, `faqHeading`, `ctaHeading`, `ctaLede`, `today{heading,paragraphs[3],stack[4+],stackNote}`, `hero{eyebrow,headline,lede,oneLine,note,screen,screenNote}`) exactly from `salons.js`.

## Mock screens

Each screen: `{id, title, meta, heading, caption, blocks[]}`. Block types: `kpis {items:[{label,value,note}]}`, `title {text}`, `table {cols, rows}` (every row has one cell per column; max 6 columns, 3 to 5 rows), `list {items:[{name,meta,tag}]}`, `bars {items:[{label,value 0-100,display,tone?}]}`, `board {columns:[{name,cards:[{title,meta,tag}]}]}`, `record {title,sub,fields:[[k,v]],timeline:[[when,text]]}`, `checks {items:[{text,meta,done}]}`, `alert {text,action}`, `ask`. Two to four blocks per screen. A cell or tag is `text`, `[text, tone]` or `[text, tone, flipText, flipTone]` where the tone is one of `flag`, `late`, `info`, `ok`, `muted`. Use the 4-item flip form on a few tags per screen so the screen shows work being resolved (for example `['Overdue','late','Booked','ok']`). Use realistic sample data with Indian names, ₹ and lakh or crore formatting where it fits. Screens show exactly what the pain's fix claims, no more.

## What Verity is, and is not (never claim beyond this)

Verity records customers, clients, vendors and partners with full history; tasks, jobs, projects and orders with an owner and a state; documents, products, assets and transactions as records with permissions and history; approvals, states and automations; comments and notifications attached to the record; reports and dashboards from live records; one permission model and audit trail; inventory, orders, suppliers and logistics; locations that roll up; assignment, attendance and availability; a schedule; and Verity AI, which answers plain-language questions from the business's own records, respects permissions, and can create tasks. Implementation is the fixed four-week engagement above. Migration comes from Excel, Google Sheets, legacy ERP or CRM.

Verity does NOT: run a billing or point-of-sale counter, take online bookings or orders, send emails, WhatsApp or SMS campaigns or messages on its own (staff send; Verity assigns the task and records the outcome), run payroll, file tax or GST returns, give legal or medical advice, host a storefront, or integrate with named third-party products (say "we agree how data reaches Verity during setup"). Do not claim a mobile app, offline mode, API, hardware or barcode support, security certifications, uptime, export formats, prices, customer counts or case studies. Do not state results ("saves 30%"); only describe the mechanism and label any number as an example.

These substrings fail the site QA anywhere on the page: `point of sale`, `payroll processing`, `GST filing`, `tax filing`, `appointment booking`, `email campaign`, `free trial`, `sign up free`, `storefront`. Rephrase around them ("does not run payroll", "your accountant prepares returns").

## Research protocol (this is required, not optional)

For each business type, before writing:

1. Run at least 3 WebSearch queries: owner pain points and challenges in India; sourced statistics; the laws, licences or standards that apply and any 2025 or 2026 changes.
2. Verify every figure you intend to use with WebFetch of the page, or use the exact wording from search results. Record source name, URL and year (year only if the page shows it).
3. Prefer government, regulator, industry-body, listed-company and reputable press sources. Vendor blogs are allowed but must be named as vendors and covered in `factsNote`. Old figures must show their year.
4. Never invent a statistic, URL, regulation, date or quote. If you cannot verify it, leave it out and use a labelled "Example arithmetic" instead. A shorter true page beats a longer false one.
5. Rules and thresholds change; state them with hedges ("generally", "from <date>") and always add the note to confirm with an adviser.

## Process and checks

- Only edit your assigned `content/businesses/<slug>.js` files. Do not edit any other file. Do not run `scripts/build.mjs` or `scripts/qa.mjs` (they write shared files). Do not run any git command.
- Before overwriting a slug file, Read its first lines (it holds old jargon content, which you may read for context but must not copy).
- The repo has a first-write hook (GateGuard). The first Write or Edit of each file is denied once and asks for facts. State briefly: callers (`scripts/build.mjs`, `scripts/qa.mjs`, `scripts/check-content.mjs`), affected API (the default export, schema 2, rendered by `lib/business-page-v2.js`), data fields (same as `salons.js`), and the user's instruction ("yes go ahead do all 113", pages must cover every pain point, our way of working, solutions, mock UIs, with online research), then retry. To avoid sending a large file twice, do a tiny placeholder Write first (for example `export default { slug: '<slug>', status: 'draft' };`), retry it once after the denial, then write the full file.
- After writing each file run `node scripts/check-content.mjs <slug>` and fix every `x` error until it prints `ok`. Fix warnings too (dashes, jargon, thin pages).
- Do each business fully (research, write, check) before starting the next.

## Final report

Return one line per slug: `<slug>: ok`, then a short list of assumptions, figures you could not verify, and any pain points you were unsure Verity can address. Be brief.
