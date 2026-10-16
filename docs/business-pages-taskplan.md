# Business pages rebuild: task plan

> **CURRENT PLAN (2026-10-16, supersedes section 4 and 5 below).** The user said: "forget multiple parallel agents, plan out all 123 phase wise and do it linearly". No subagents. One session does the work, one business at a time, in the phases below. Run `node scripts/check-content.mjs --all | grep -c '^ok'` to see progress (target 123).
>
> **How pages are produced now.** Every page is generated from its markdown draft: `docs/drafts/<slug>.md` (researched, human-readable, has a Research log) then `node scripts/draft-to-js.mjs <slug>` writes `content/businesses/<slug>.js`, then `node scripts/check-content.mjs <slug>` must print `ok`. Draft format = `docs/drafts/cafes.md` (exact headings: SEO, Hero, How it runs today, Pains, Facts, Screens with ```json blocks, Day before and after, How we work, Verity AI examples, Automations, Rules and paperwork, Roles, Alongside, FAQ, Related and CTA; bullets use the `key: value` and `a | b` forms the parser reads). Fix problems in the DRAFT and re-run the converter; do not hand-edit generated JS.
>
> **Phase 0, tooling: DONE.** Renderer, CSS, JS playback, validator, exporter, converter (`scripts/draft-to-js.mjs`, roundtrip-tested with `--roundtrip`).
> **Phase 1, drafts for businesses that had none: 111 of 123 DONE** (drafts exist for all but the 11 below; exported drafts for pages first written as JS).
> **Phase 2, convert researched drafts to JS: DONE** (59 converted, 2026-10-16, commit 629c57e). 111 pages pass check-content, site build and QA pass.
> **Phase 3 PROGRESS (update this): done = all except data-companies, gaming-studios, creator-businesses (remaining).**
> **Phase 3, the last 11 businesses, one at a time (research, write draft, convert, check, commit every 2 or 3):**
> exporters, vocational-training-centres, repair-services, printing-businesses, tailors, saas-companies, startups, cybersecurity-companies, data-companies, gaming-studios, creator-businesses. Per business: 3 or more WebSearch queries (India context: pain points, sourced stats, laws and recent changes), verify figures by WebFetch, write the draft with a Research log, convert, check.
> **Phase 4, review pass over all 123:** (a) read the "Assumptions and unverified" section of each draft and remove or soften anything marked unverified from the page text (known items: marketing-agencies pain 8 "48% delivery dissatisfaction" non-Indian survey; software-agencies pain 2 Enterprise DNA sentence; financial-advisors pain 6 source line "details not verified here"; insurance-agencies related slug travel-agencies check; hostels is written for private and PG hostels); (b) spot-check source URLs; (c) jargon and phrase-overlap warnings from `node scripts/qa.mjs`; (d) browser check at 1440 and 390 widths; (e) confirm process hour estimates (8 to 14 owner hours) with the Verity team; (f) the advertising-agencies "vendors" screen has no pain pointing to it (warning only).
> **Phase 5, motion and video (user rule: every site and page gets motion graphics):** per-industry Remotion videos from page data plus optional scroll-driven demos; see section 8.
> **Commit often** (user: "keep commiting"): `git add businesses industries content css docs explore index.html js lib scripts sitemap.xml robots.txt` then commit; never add the unrelated `video/` and `RAW CLIPS/` changes. If `.git/index.lock` is stale, remove it.


Single source of truth so any session can finish this work. Last updated 2026-10-16.

## 1. Why this exists

User complaint (2026-10-15): all 123 pages under `businesses/*` were full of jargon ("Relationships", "Work", "People" modules) and random statements. They could not be shared with a client and understood. The user's requirements, in their words:

- "each page must cover all business specific pain points each and every type and communicate it clearly"
- "explain our way of working our proposed solutions mock uis clearly"
- "do complete online research for each this is a detailed work and make sure every page is optimized for the clients understanding properly"
- "remember to create and use motion graphic videos for all our websites and webpages this repo and all repos" (standing rule, memory file `feedback_motion-video-all-sites.md`)
- Videos: "each business page animated mock uis and each industry video not hard rule ... think creatively and out of the box ... apple like scroll effects or maybe product demo videos"
- Process (2026-10-16): "agents must first draft md files for each business means 123 md files must be there first, and instead of parallel running all agents run in batch of 3"
- Scope: all 123 business types. The user approved subagents.

## 2. What is built (done, verified)

- `lib/business-page-v2.js`: renderer for schema 2 pages. `lib/business-page.js` dispatches to it when `biz.schema === 2`; old schema 1 pages still render (they are the jargon pages being replaced).
- `css/explore.css`: `.bz-*` (page) and `.xs-*` (mock UI) classes appended, tokens only, light and dark. `js/screens.js`: tags flip state when a mock screen scrolls into view. `lib/render.js` `tail()` loads it; `SITE.assetVersion` is `79`.
- Mock UI block types: kpis, title, table, list, bars, board, record, checks, alert, ask. Tag tones: flag, late, info, ok, muted. A tag `[text, tone, flipText, flipTone]` animates.
- `scripts/check-content.mjs`: read-only validator, parallel safe. `node scripts/check-content.mjs <slug>... | --all`. Enforces counts (12 to 16 pains, 4 facts with source URLs, 5 to 7 screens, 6 day rows, 4 phases, 3 AI examples, 6 automations, 3 to 5 rules, 5 roles, 8 to 10 FAQs, 6 related), forbidden phrases, SEO lengths (title 70, description 175), table shapes, tone values, em dash and jargon warnings.
- `scripts/export-draft.mjs`: exports finished JS to a markdown draft. `node scripts/export-draft.mjs <slug>...`. Never overwrites existing drafts without `--force`.
- `scripts/qa.mjs` reads `biz.uses` for schema 2. Site QA (`node scripts/build.mjs && node scripts/qa.mjs`) fails if two pages share more than 40% of 6-word phrases, so pages must be specific.
- Authoring rules for agents: `docs/business-page-authoring.md`. Exemplar page: `content/businesses/salons.js`. Draft format exemplar: `docs/drafts/cafes.md`.

## 3. Rules that must hold (also in the authoring guide)

- Plain words, no jargon, no em or en dashes. Indian context, rupees, unless the type implies otherwise.
- Verity records, assigns tasks, reports, approvals, AI Q&A, multi-location. It does NOT run billing or a counter, take bookings or orders, send messages, run payroll, file returns, give legal or medical advice, host a storefront, or integrate with named products. Substrings that fail QA: `point of sale`, `payroll processing`, `GST filing`, `tax filing`, `appointment booking`, `email campaign`, `free trial`, `sign up free`, `storefront`.
- Never invent a statistic, URL, law or date. Every fact has a name, URL and year (if shown). Vendor sources are labelled in `factsNote`. Unverifiable numbers become a labelled "Example arithmetic".
- Pricing is never stated; FAQs say it depends and invite a message.
- GateGuard hook: the first Write or Edit of any file is denied once. State callers, affected API, data fields and the user's instruction, then retry. Trick for big files: write a tiny placeholder first, retry once, then write the full file.

## 4. Process (current)

Two phases, and the second only starts when the first is complete for a business.

1. **Phase A, draft.** One markdown file per business in `docs/drafts/<slug>.md`, same structure as `docs/drafts/cafes.md`, plus a `## Research log` (queries, and for each source: name | URL | year | verified yes/no | what it says), front matter `status: researched`. All research is here.
2. **Phase B, convert.** Read the draft, write `content/businesses/<slug>.js`, run `node scripts/check-content.mjs <slug>` until `ok`, set draft `status: converted`.
3. **Concurrency: at most 3 agents at a time.** Launch the next batch of 3 only after the previous batch has finished. About 6 slugs per agent. An earlier run launched 12 at once and hit the session rate limit; do not repeat that. If an agent hits a limit, resume it with SendMessage after the reset.
4. All 123 drafts must exist before the final build. The 51 pages already finished as JS have exported drafts (`status: converted`).

## 5. Status ledger (update as work lands)

Check live state with:
- Drafts: `ls docs/drafts | wc -l` (target 123)
- Converted pages: `node scripts/check-content.mjs --all | grep -c "^ok"` (target 123)
- Remaining: `node scripts/check-content.mjs --all | grep "^FAIL"`

Snapshot 2026-10-16: 51 JS pages ok, each with an exported draft. 72 remaining. A partial file exists for `contractors` (invalid, will be overwritten). The 51 ok pages came from the earlier parallel run and need the quality review in section 7.

### Remaining 72, in agent groups of 6 and waves of 3 agents

Wave 1 (Phase A drafts):
- G1 retail: department-stores, fashion-stores, clothing-boutiques, shoe-stores, jewellery-stores, electronics-stores
- G2 retail: sports-stores, bookstores, gift-shops, pet-stores, hardware-stores, auto-parts-stores
- G3 hospitality: bars-and-lounges, catering-businesses, guest-houses, hostels, hotels, resorts

Wave 2:
- G4 professional: law-firms, accounting-firms, ca-firms, consulting-firms, financial-advisors, insurance-agencies
- G5 agencies and IT: marketing-agencies, advertising-agencies, pr-agencies, it-services-companies, content-agencies, software-agencies
- G6 healthcare: hospitals, clinics, medical-distributors, mental-wellness-practices, optical-stores, veterinary-clinics

Wave 3:
- G7 education: schools, colleges, language-institutes, music-schools, dance-academies, skill-training-institutes
- G8 real estate: architects, building-material-suppliers, contractors, facility-management, home-builders, interior-design-firms
- G9 manufacturing: chemical-manufacturers, food-manufacturers, furniture-manufacturers, packaging-companies, pharmaceutical-manufacturers, importers

Wave 4:
- G10 local services: fitness-studios, gyms, yoga-studios, wedding-planners, photographers, car-rentals
- G11 mixed: printing-businesses, repair-services, tailors, saas-companies, startups, gaming-studios
- G12 mixed: ai-companies, creator-businesses, cybersecurity-companies, data-companies, exporters, vocational-training-centres

Then Phase B (convert drafts to JS) for the same 72 in the same grouping, again 3 agents per wave.

Progress: Wave 1 (G1, G2, G3, Phase A) launched 2026-10-16. (Update this line as waves complete.)

## 6. Agent prompt template (Phase A)

"You are drafting client-facing business pages for Verity (repo D:\Code\verity-explore). Read docs/business-page-authoring.md fully, then docs/drafts/cafes.md (structure) and content/businesses/salons.js (quality bar). Load WebSearch and WebFetch via ToolSearch (select:WebSearch,WebFetch). Slugs, in order: <six slugs>. For each, do Phase A only: research online in India context, then write docs/drafts/<slug>.md in the cafes.md structure with a Research log and status: researched. Do not write JS, do not run build or qa, do not edit other files, no git. Make each page specific to that business type. Final reply: one line per slug, plus assumptions and unverified items."

Phase B prompt: same, but "convert docs/drafts/<slug>.md to content/businesses/<slug>.js, run node scripts/check-content.mjs <slug> until ok, set draft status: converted, no new research."

## 7. After all 123 are converted

1. `node scripts/check-content.mjs --all` all ok. `node scripts/build.mjs && node scripts/qa.mjs` passes (fix duplicate phrasing across pages, thin pages, description lengths).
2. Quality review of a sample from every industry, especially the 48 pages from the first parallel run: unsupported claims about Verity, invented statistics, unverified URLs (spot-check links), jargon, repeated wording across pages. Fix or cut.
3. Browser check desktop 1440 and mobile 390: no horizontal overflow, mock UIs animate, tables scroll.
4. Confirm with the Verity team: process hour estimates (8 to 14 owner hours), the claim list, and that pricing stays unstated.
5. Industry pages, hub and `index.html` Explore section are generated by `build.mjs`; check their wording still fits.
6. Do not commit or push unless the user asks. The working tree is also carrying unrelated video changes (`video/`, `RAW CLIPS/`).

## 8. Video and motion plan (not started; user wants it)

- Per business page: the animated mock UIs are already live (row rise, bars draw, tags flip).
- Per industry (9 industries): one short motion video each, built with Remotion in `video/` from the same page data. Use skills product-ui-motion, scroll-storyline, motion-safety-qa. Light theme, no audio, lazy-loaded with a poster, respects reduced motion.
- Creative options the user invited: Apple-style pinned scroll sequences on the hero screen, short product-demo clips of one real workflow per industry (for example lapsed-client win-back, recipe versus reality). Decide after the pages land; budget rule from `~/.claude/CLAUDE.md`: real product UI in motion about 70%, stills about 20%, AI video at most 10%.
- Existing reference: `video/src/film/retail`, `video/src/reels/retail`, composition registration in `video/src/Root.tsx`.

## 9. Environment notes

- Local preview: a small static server script (any static server on port 8123 from the repo root works; pages use root-absolute asset paths).
- Memory files for this project: `C:\Users\divyo\.claude\projects\d--Code-verity-explore\memory\` (see `project_business-pages-v2.md`).
- Git shows about 143 changed files because the build rewrites all pages with new asset links; only schema 2 pages changed in content.
