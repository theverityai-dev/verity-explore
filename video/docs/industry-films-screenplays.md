# Verity industry films: master prompt and screenplays (all 9)

This is the build document for the nine 16:9 industry films. It contains:

- one master prompt that applies to every film,
- a paste-ready prompt for each film,
- the screenplay (time, shot, camera, on-screen text and visual),
- every word of on-screen text.

It supersedes `series-scripts.md`, which was written for the old 9:16 reels.

**Status**

| # | Film | Status |
|---|---|---|
| 01 | Retail & Commerce | Built and accepted. **Do not touch.** It is documented here only so the others continue from it. |
| 02 | Food & Hospitality | The previous version was rejected outright. The screenplay below is new; nothing from the old film is reused. |
| 03–09 | All other industries | Not built yet. |

**Source of truth**

- Every product word, number, panel row and workflow step comes from `content/industries.js` and
  `content/businesses/<slug>.js`.
- Business-type counts come from `content/businesses/registry.js` (123 types in total, as of 2026-10-02).
- Props (tickets, folders, tags, diaries) are invented set dressing. They must never show a product number that
  contradicts the panel.
- All figures are illustrative, as they are on the site.

---

## Part 1: Master prompt (applies to every film)

> Build Verity industry film NN as a Remotion composition: 1920x1080, 60fps, 35 seconds. Add it to `src/Root.tsx` as
> `Film-NN-<Industry>-16x9` and give it a render script in `package.json`.
>
> Use the shared film system as is: `src/film/engine.tsx` (camera, `Grade`, `FilmAudio`), `src/film/layout.ts` (`SAFE`,
> `TEXT`, `UI`, `TYPE`, `DK`, `GLASS_LIGHT`, `CARD_LIGHT`, `CREAM`, `PAPER_INK`) and `src/film/props.tsx`. Pull every
> product word through `src/reels/content.ts`; extend it for the new industry if needed.
>
> Load the `verity-motion-design` skill before writing any scene and follow it. Before rendering, run its audit on
> stills taken at the midpoint of every shot.
>
> The world is deep dark. The Verity UI is always the light theme, on light glass. The accent `#0A84FF` is used only for
> state and data.
>
> Say each concept once. There are five statements per film and at most one support line. Every text block has a named
> anchor written in a code comment. Line breaks are written exactly as given in this document (`\n` marks a break).
>
> The industry metaphor is physical and specific to this industry. Never reuse another film's props or animation.
>
> Transitions transform one object into the next. Use at most one hard cut per film.
>
> A frame must look intentionally designed with all animation paused. Do not use effects to compensate for weak
> composition. Once the film passes its audit, stop.

### Shared beat structure (35s)

Each film is cut to the same grid. This gives the series one rhythm while every metaphor stays different.

| Time | Beat | Rule |
|---|---|---|
| 0:00–1:30 | Handoff in | The previous film's last object becomes this film's first object. No text. |
| 1:30–7:00 | Problem | Environmental shot of the industry world. Statement 1. |
| 7:00–11:00 | Tension | The camera finds the specific failure inside the world. Statement 2. |
| 11:00–14:00 | Transformation | One prop becomes one row of the Verity panel. **No text.** This is the film's signature shot. |
| 14:00–19:00 | Product | Hero shot: the panel arrives in depth, tilted 7° and settling to 3°, at context scale. Statement 3, plus the optional support line. |
| 19:00–26:00 | Workflow | Push-in to 1.24x, with the panel settling flat and bleeding off the right and bottom edges. The real workflow steps complete one by one. Statement 4 sits on the workflow title's cap line. |
| 26:00–28:00 | Resolution | The prop from the problem shot returns, now resolved. No text. |
| 28:00–30:00 | Scale | The business types appear *as part of the industry's world*, never as a plain list. Statement 5. |
| 30:00–33:30 | Brand | A centred lockup: mark, `verity`, the industry name, `theverityai.xyz`. This is the only centred frame. |
| 33:30–35:00 | Handoff out | One object, carried into the next film. No text. |

### Shared type and placement

| Element | Spec | Anchor |
|---|---|---|
| Statements 1–2 | 72px, weight 300, line-height 1.06, tracking -0.035em, at most 3 lines and about 18 characters per line | Bottom of the text column, on the baseline the hero prop sits on (y 984) |
| Statement 3 and support | Same, plus a 30px support line in muted, 28px below the statement | The panel's bottom edge (y 984) |
| Statement 4 | Same | Its cap line on the pushed-in workflow title's cap line |
| Statement 5 | Same, one line | The baseline of the scale object |
| Brand | Mark 80, wordmark 92/600, industry 52/300, URL 22 | Frame centre |

### Shared sound

A continuous drone, soft paper or object sounds in the prop world, a glass tone when the panel arrives, one soft tick per
workflow step, a sub hit under the brand, and a whoosh on each handoff. Files are in `public/film/`. No music bed.

### Banned in every film

Particles, light streaks, lens flares, neon or blue glow, gradient text, bounce or spring overshoot, slide-ins from
off-frame, per-letter text animation, floating-card collages, stock photos, real third-party logos, plain-text lists of
business types, and a repeated "one record" line.

---

## Part 2: The nine films

### Film 01 — Retail & Commerce (built, accepted, do not touch)

- **Page:** `retail-stores.js`
- **Business types:** 20
- **World:** a dark shop. A receipt, a message, a stock sheet and a shelf tag hang in depth.
- **Metaphor:** the shelf and the sheet disagree (378 against 412). They collapse into one number.
- **Handoff out:** a scan line leaves a full-frame barcode.

The on-screen text as built (see `film-01-retail.md`):

1. "The shelf says one thing. The sheet says another."
2. "34 UNITS APART"
3. "ONE RECORD" / "Retail operations, connected."
4. UI: Below reorder 37 · 12 fast-moving lines below reorder point · the stations Low stock, Purchase order, Goods
   received, Stock recorded
5. "ONE NUMBER. ONE RECORD."
6. "20 RETAIL BUSINESS TYPES. ONE VERITY."
7. VERITY / Retail on one record. / theverityai.xyz

Film 01 predates the motion skill and is accepted as it is. Films 02–09 follow the skill, so they say each concept once
and use sentence case.

---

### Film 02 — Food & Hospitality: "The tub and the ticket"

- **Page:** `restaurants.js`
- **Business types:** 14

**World.** A restaurant kitchen at 21:40, seen at the prep shelf.

- Steel prep tubs with handwritten masking-tape labels.
- An order rail of tickets, out of focus behind them.
- A wall clock reading 21:40.

The light is warm and low, from above the pass.

**Metaphor.** Ingredients leave stock without leaving a record. The prawn tub empties while the clipboard stock sheet
beside it still ticks "Prawns".

**Props**

- Steel tubs with tape labels: "PRAWNS", "PANEER", "CHICKEN", "DAL".
- A clipboard stock sheet with ticked rows.
- A ticket rail.
- A wall clock.

**Handoff in.** Film 01's full-frame barcode recedes in depth and becomes the barcode on a supplier delivery label taped
to the prawn tub.

**Handoff out.** The cream supplier delivery note lifts off the clipboard and fills the frame. It is the first frame of
Film 03.

**Paste-ready prompt**

> Film 02 Food & Hospitality, using the master prompt. Open on Film 01's barcode, receding to become a delivery label on a
> steel prawn tub in a dark kitchen at 21:40, with tickets out of focus on a rail behind it. Over the problem and tension
> shots the tub's level drops in three visible steps, each on a ticket-print sound, while a clipboard stock sheet beside
> it keeps its tick against "Prawns".
>
> Transformation: the tub's masking-tape label peels off, flattens, turns white and becomes the focused attention row
> "Prawns below par for tomorrow's covers" on the light glass Service panel. Push in on the "A shortage before it happens"
> workflow. Resolution: the tub refills and the clipboard tick now matches.
>
> Scale: the camera tracks laterally along a shelf of 14 tubs whose tape labels read the 14 business types; near labels
> are sharp and far ones soft. Centred lockup. Handoff out: the cream delivery note fills the frame.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Depth pull-back from the barcode | — | The full-frame barcode shrinks into a delivery label on the prawn tub |
| 1:30–7:00 | Problem: the prep shelf | Slow 40px lateral move | **Service ends\nat eleven.** | The tub fills the right two-thirds, cropped by the frame bottom. The clock reads 21:40. Tickets are soft behind. |
| 7:00–11:00 | Tension: the tub empties | Push-in, 1.0 to 1.15 | **Ingredients leave\nstock without\nleaving a record.** | The tub level drops in three steps. The clipboard beside it still ticks "Prawns". |
| 11:00–14:00 | Transformation | Macro on the label | — | The tape label peels, flattens and turns white. It becomes the active row with its accent dot. |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **The day,\nunderstood while\nit is still running.** Support: *Orders, stock, people and money on one record.* | The Service panel. The prawns row is focused. |
| 19:00–26:00 | Workflow | Push-in to 1.24x, settling flat | **A shortage,\ncaught before\nit happens.** | The title "Prawns below par for tomorrow's covers" with meta "Supplier cut-off in 40 minutes". The five steps check in turn on one progress line. |
| 26:00–28:00 | Resolution | Pull-back; the panel dissolves | — | The prawn tub refills to the top. The clipboard tick now matches. |
| 28:00–30:00 | Scale | Lateral move along the shelf | **14 business types.** | 14 tubs, with tape labels reading the business types |
| 30:00–33:30 | Brand | Static | verity / Food & Hospitality / theverityai.xyz | Centred lockup on dark |
| 33:30–35:00 | Handoff out | Push into the page | — | The cream delivery note rises and fills the frame |

**UI text (exact)**

- Chrome: `VERITY / SERVICE · KITCHEN · TODAY, 21:40` · Live
- Metrics:
  - Revenue today ₹2.14 L (186 covers)
  - Average order ₹1,150 (up 6% on last Friday)
  - Prep stock 4 low (against tomorrow's forecast)
  - On shift 17 (of 19 rostered)
- Label: NEEDS ATTENTION
- Rows:
  - Prawns below par for tomorrow's covers · Supplier cut-off in 40 minutes *(focus)*
  - Two starters ran out before 20:00 · Third time this week
  - Section 3 running two servers short · Since 19:30 · one no-show
  - Wastage not logged for lunch service · Kitchen · yesterday and today
- Workflow steps:
  1. Stock level falls below the par set for the item
  2. Shortfall flagged against tomorrow's expected covers
  3. Purchase raised against the supplier who last delivered it
  4. Approval applied if it exceeds the purchasing threshold
  5. Delivery checked in and stock restored
- Shelf labels: Restaurants, Cafés, Bakeries, Cloud Kitchens, Fast Food Businesses, Catering Businesses, Bars & Lounges,
  Hotels, Resorts, Hostels, Guest Houses, Travel Agencies, Tour Operators, Event Venues

**Avoid:** the old pass or voice-note composition, a roster scene, and a plain list of types.

---

### Film 03 — Professional Services: "Two folders"

- **Page:** `law-firms.js`
- **Business types:** 15

**World.** A partner's desk at night. A green-shaded lamp makes one pool of light, and two identical matter folders lie
side by side. Behind them is a wall calendar and a filing drawer, out of focus.

**Metaphor.** A matter that has quietly consumed twice its budget looks exactly like a healthy one. The two folders are
identical on the outside. When one is opened, its timesheet pages run on and on.

**Props**

- Two manila matter folders with typed tabs, "MATTER 0412" and "MATTER 0417".
- Ruled timesheet pages.
- A wall calendar with one date circled.
- A filing drawer.

**Handoff in.** Film 02's cream delivery note settles and becomes the top page in a matter folder, which closes.

**Handoff out.** The circled calendar date fills the frame as a single square of paper. It opens Film 04.

**Paste-ready prompt**

> Film 03 Professional Services, using the master prompt. Film 02's page becomes the top page of a manila folder that
> closes. The scene is a dark desk under one green-shaded lamp, with two identical folders, MATTER 0412 and 0417.
>
> Tension: the camera orbits 6° to the right folder, which opens; its timesheet pages fan across the desk and off the
> frame edge, much further than the other folder would. That is the overrun, shown without numbers. Transformation: the
> folder's tab lifts and becomes the focused row "Matter consumed 210% of estimated effort" on the light Practice panel.
>
> Push in on the "Scope variation" workflow. Resolution: the fanned pages fold back, and a single signed variation sheet
> rests on top. Scale: a filing drawer slides toward camera and its 15 folder tabs read the business types. Lockup.
> Handoff out: the circled calendar date.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Settle | — | The page drops into the folder; the folder closes |
| 1:30–7:00 | Problem | Slow push over the desk | **Two matters.\nThey look\nthe same.** | Two closed folders in the lamp pool |
| 7:00–11:00 | Tension | Orbit 6° to the right folder | **One has used\ntwice its budget.** | The right folder opens. Its timesheet pages fan off the frame edge. |
| 11:00–14:00 | Transformation | Macro on the tab | — | The tab lifts and becomes a white row with an accent dot |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **Every matter,\nmeasured while\nit is open.** Support: *Clients, work, documents and approvals, connected.* | The Practice panel. The 210% row is focused. |
| 19:00–26:00 | Workflow | Push-in to 1.24x | **Out-of-scope work,\nraised and agreed.** | "Scope variation": the five steps complete |
| 26:00–28:00 | Resolution | Pull-back | — | The pages fold back into the folder. A signed variation sheet sits on top. |
| 28:00–30:00 | Scale | The drawer slides toward camera | **15 business types.** | 15 folder tabs, with the business types typed on them |
| 30:00–33:30 | Brand | Static | verity / Professional Services / theverityai.xyz | Centred lockup |
| 33:30–35:00 | Handoff out | Push into the calendar | — | The circled date becomes a full-frame paper square |

**UI text (exact)**

- Chrome: `VERITY / PRACTICE · ALL MATTERS · THIS MONTH`
- Metrics:
  - Active matters 148 (across 6 practice areas)
  - Deadlines in 14 days 31 (4 without an owner)
  - Unbilled work ₹62 L (older than 60 days)
  - Fees outstanding ₹1.1 Cr (₹34 L beyond 90 days)
- Rows:
  - Matter consumed 210% of estimated effort · Corporate · no scope variation recorded *(focus)*
  - 4 statutory deadlines in 14 days with no owner · Two filings · two responses
  - ₹62 L of work unbilled beyond 60 days · 11 matters · 4 partners
  - Engagement letter unsigned on active matter · Work started 18 days ago
- Workflow steps:
  1. Additional work identified as outside the agreed scope
  2. Variation raised with the effort and basis attached
  3. Approval routed to the responsible partner
  4. Client agreement recorded against the matter
  5. Scope and estimate updated, or a decision not to charge recorded
- Drawer tabs: Law Firms, Accounting Firms, CA Firms, Consulting Firms, Marketing Agencies, Advertising Agencies, PR
  Agencies, Design Agencies, Architecture Firms, Interior Designers, Real Estate Agencies, Recruitment Agencies, Insurance
  Agencies, Financial Advisors, IT Services Companies

---

### Film 04 — Healthcare: "The diary"

- **Page:** `clinics.js`
- **Business types:** 11

**World.** A clinic front desk after the last patient has left. A paper follow-up diary lies open, and a supply cabinet
sits behind it with its door ajar. The light is cool and soft from a frosted window; the warm key is kept low. This is a
calm, quiet operation.

**Metaphor.** The follow-up that should happen in six weeks lives in a diary. Each page turn moves the review date
further into the past.

**Props**

- A ring-bound diary with handwritten initials only, such as "R.K. — review 6 wks". **No full patient names.**
- A supply cabinet with plain, unbranded consumable boxes.
- A pen.

**Handoff in.** Film 03's calendar-date square becomes a page of the diary.

**Handoff out.** The diary closes into a cream admission form, the first frame of Film 05.

**Paste-ready prompt**

> Film 04 Healthcare, using the master prompt. Film 03's date square becomes a diary page on a clinic desk after hours.
> The scene is quiet, cool and soft.
>
> Tension: the diary pages turn past a handwritten entry "R.K. — review 6 wks" and keep turning; the entry is never
> crossed off. Transformation: that handwritten line lifts off the paper and becomes the focused row "18 follow-ups
> overdue past their review date" on the light Practice panel.
>
> Push in on "Consultation to follow-up". Resolution: the diary entry gets a neat tick. Scale: the supply cabinet opens and
> its shelf-edge labels read the 11 business types. Use initials only; never show patient names, diagnoses or anything
> resembling a medical record. Lockup. Handoff out: the diary closes into a cream form.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Settle | — | The date square lands as a diary page |
| 1:30–7:00 | Problem | Slow lateral move across the desk | **Care is the part\neveryone sees.** | An empty consult chair in soft focus; the diary in the foreground |
| 7:00–11:00 | Tension | Macro on the diary | **The follow-up\nlives in a diary.** | Pages turn past the "R.K. — review 6 wks" entry, unticked |
| 11:00–14:00 | Transformation | Macro | — | The handwritten line lifts off the page and becomes a row |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **The practice\naround care,\non one system.** | The Practice panel. The overdue row is focused. |
| 19:00–26:00 | Workflow | Push-in to 1.24x | **Every review date\nhas an owner.** | "Consultation to follow-up": the six steps complete |
| 26:00–28:00 | Resolution | Pull-back | — | The diary entry gets a neat ink tick |
| 28:00–30:00 | Scale | The cabinet door swings open, 6° orbit | **11 business types.** | Shelf-edge labels read the business types |
| 30:00–33:30 | Brand | Static | verity / Healthcare / theverityai.xyz | Centred lockup |
| 33:30–35:00 | Handoff out | Push | — | The diary closes into a cream form |

**UI text (exact)**

- Chrome: `VERITY / PRACTICE · ALL BRANCHES · THIS WEEK`
- Metrics:
  - Consultations 486 (across 3 branches)
  - Follow-ups due 73 (18 already overdue)
  - Consumables low 9 (against next week's load)
  - Staff coverage 92% (of planned roster hours)
- Rows:
  - 18 follow-ups overdue past their review date · Oldest 22 days · 2 branches *(focus)*
  - Consumable stock short for Thursday's list · Branch 2 · supplier lead time 3 days
  - Friday evening slot uncovered · One clinician on leave · no replacement assigned
  - Consent documentation incomplete · 6 records · flagged at review
- Workflow steps:
  1. Consultation recorded against the patient and the session
  2. Documentation and consents attached to the record
  3. Follow-up created with a review date and an owning clinician
  4. Reminder raised as the review date approaches
  5. Follow-up completed, or escalated if overdue
  6. Outcome recorded on the patient history
- Shelf labels: Hospitals, Clinics, Dental Clinics, Dermatology Clinics, Physiotherapy Clinics, Diagnostic Labs,
  Pharmacies, Optical Stores, Veterinary Clinics, Mental Wellness Practices, Medical Distributors

---

### Film 05 — Education: "Five records, one child"

- **Page:** `schools.js`
- **Business types:** 12

**World.** A school office counter in the morning. Five documents about the same student are spread across it:

- an admission form,
- a fee receipt,
- a report card,
- a transport list,
- an ID card.

The light is warm daylight from one side.

**Metaphor.** The same child exists in five systems, and none of them agree. The name is spelt three ways: "Aarav
Sharma", "A. Sharma" and "Aarav S.". These are invented prop names.

**Props**

- The five documents.
- A rubber stamp.
- A timetable grid pinned behind the counter.

**Handoff in.** Film 04's cream form becomes the admission form on the counter.

**Handoff out.** The timetable grid fills the frame. Its lines become the grid of a building drawing in Film 06.

**Paste-ready prompt**

> Film 05 Education, using the master prompt. Film 04's form becomes an admission form on a school office counter. Four
> more documents about the same student slide in beside it: fee receipt, report card, transport list and ID card. The
> name is spelt three different ways across them.
>
> Tension: a macro rack-focus across the three spellings. Transformation: the five documents slide together, square up
> into one stack, and the stack becomes the light Administration panel, with "31 admissions stalled on missing
> documents" focused.
>
> Push in on "Admission enquiry to enrolment". Resolution: one ID card with a single, correct name. Scale: the timetable
> grid's period cells read the 12 business types. Lockup. Handoff out: the timetable grid fills the frame.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Settle | — | The form lands on the counter |
| 1:30–7:00 | Problem | Overhead, slow rotate 4° | **One student.** | The five documents spread out; the camera holds |
| 7:00–11:00 | Tension | Macro rack-focus across the names | **Five records.\nNone of them\nagree.** | "Aarav Sharma" / "A. Sharma" / "Aarav S." |
| 11:00–14:00 | Transformation | Overhead | — | The papers slide and square into one stack, which becomes the panel |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **Students, fees,\nstaff, admissions.\nIn one place.** | The Administration panel. The admissions row is focused. |
| 19:00–26:00 | Workflow | Push-in to 1.24x | **Stalled admissions\nget an owner.** | "Admission enquiry to enrolment": the seven steps complete |
| 26:00–28:00 | Resolution | Pull-back | — | One ID card, with one correct name |
| 28:00–30:00 | Scale | Lateral move across the timetable | **12 business types.** | The timetable's period cells hold the business types |
| 30:00–33:30 | Brand | Static | verity / Education / theverityai.xyz | Centred lockup |
| 33:30–35:00 | Handoff out | Push into the grid | — | The timetable grid fills the frame |

**UI text (exact)**

- Chrome: `VERITY / ADMINISTRATION · CURRENT TERM`
- Metrics:
  - Students 1,284 (across 34 sections)
  - Fees outstanding ₹41.6 L (186 families)
  - Admissions in progress 92 (31 awaiting documents)
  - Staff records incomplete 14 (flagged at review)
- Rows:
  - 31 admissions stalled on missing documents · Oldest 24 days · no owner assigned *(focus)*
  - 58 families past the second fee reminder · ₹18.4 L · no follow-up recorded
  - Two sections without an assigned class teacher · Since the start of term
  - Transport route change not communicated · 46 families affected
- Workflow steps:
  1. Enquiry recorded against a family record
  2. Application created as work with an owner
  3. Required documents listed and their receipt tracked
  4. Verification completed and exceptions raised for gaps
  5. Admission decision routed for approval
  6. Student record created and linked to the family
  7. Section assigned and enrolment completed
- Timetable cells: Schools, Colleges, Universities, Coaching Institutes, Tuition Centres, Test Preparation Centres, EdTech
  Companies, Language Institutes, Skill Training Institutes, Music Schools, Dance Academies, Vocational Training Centres

---

### Film 06 — Real Estate & Construction: "Fifty small pieces"

- **Page:** `construction-companies.js`
- **Business types:** 10

**World.** A site office at dusk. A large building drawing is pinned flat on a table, with a measurement book and a hard
hat beside it. Concrete-grey light comes from a site lamp outside the window.

**Metaphor.** The project was profitable at tender and is not now, and the difference happened in fifty small pieces.
Small paper slips (site instructions) collect on the drawing, one at a time.

**Props**

- A drawing sheet with a title block.
- Small cream instruction slips, handwritten: "Shift opening 300mm", "Extra lintel", "Change tile spec".
- A measurement book.
- A hard hat.

**Handoff in.** Film 05's timetable grid becomes the drawing's structural grid lines.

**Handoff out.** One structural grid line is pulled taut and becomes a single horizontal line across the dark frame. It
becomes Film 07's conveyor rail.

**Paste-ready prompt**

> Film 06 Real Estate & Construction, using the master prompt. Film 05's grid becomes the structural grid on a building
> drawing in a dusk site office. Problem: the drawing, clean, under a lamp.
>
> Tension: small handwritten instruction slips land on the drawing one after another, faster each time, until it is
> covered with them. Transformation: the slips sweep together into one stack, which becomes the focused row "38
> variations executed without written instruction · ₹4.1 Cr · recovery at risk" on the light Projects panel.
>
> Push in on "Variation from instruction to recovery". Resolution: one slip is stamped APPROVED and pinned to the drawing
> before the work. Scale: the drawing's title block lists the 10 business types as revision lines. Lockup. Handoff out: a
> grid line pulls taut into one horizontal line.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Settle | — | The timetable grid becomes the drawing grid |
| 1:30–7:00 | Problem | Slow push over the drawing | **Profitable\nat tender.** | A clean drawing under a lamp |
| 7:00–11:00 | Tension | Hold, slight tilt | **Not now.\nIt went in fifty\nsmall pieces.** | Slips land one by one, accelerating, until the drawing is covered |
| 11:00–14:00 | Transformation | Overhead | — | The slips sweep into one stack, which becomes the variation row |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **Sites, approvals\nand money\non one record.** | The Projects panel. The variations row is focused. |
| 19:00–26:00 | Workflow | Push-in to 1.24x | **Every variation,\napproved before\nit is built.** | "Variation from instruction to recovery": the six steps complete |
| 26:00–28:00 | Resolution | Pull-back | — | One slip is stamped APPROVED and pinned to the drawing |
| 28:00–30:00 | Scale | Macro move across the title block | **10 business types.** | Revision rows in the title block read the business types |
| 30:00–33:30 | Brand | Static | verity / Real Estate & Construction / theverityai.xyz | Centred lockup |
| 33:30–35:00 | Handoff out | Pull | — | A grid line pulls taut into one horizontal line |

**UI text (exact)**

- Chrome: `VERITY / PROJECTS · ALL SITES · THIS MONTH`
- Metrics:
  - Active projects 9 (₹184 Cr contract value)
  - Unbilled progress ₹9.4 Cr (work done, not certified)
  - Variations unapproved 38 (₹4.1 Cr executed)
  - Retention held ₹12.6 Cr (₹2.2 Cr past release date)
- Rows:
  - 38 variations executed without written instruction · ₹4.1 Cr · recovery at risk *(focus)*
  - ₹2.2 Cr retention past its release date · No release request raised
  - Material issued at Site 3 exceeds consumption by 8% · Unreconciled for six weeks
  - Subcontractor claim above certified quantity · ₹64 L · measurement disputed
- Workflow steps:
  1. Instruction received on site and recorded against the project
  2. Scope and cost impact assessed against the bill of quantities
  3. Written instruction requested and tracked
  4. Approval obtained before or alongside execution
  5. Work executed and measured
  6. Variation certified and billed
- Title block: Real Estate Developers, Property Dealers, Property Management, Construction Companies, Contractors,
  Architects, Interior Design Firms, Home Builders, Facility Management, Building Material Suppliers

---

### Film 07 — Manufacturing & B2B: "Four steps upstream"

- **Page:** `manufacturers.js`
- **Business types:** 13

**World.** Plant 2, Shift A. A production line seen side-on, with stations spaced along it, ending at a dispatch dock and
a truck with its shutter open. The light is industrial: warm overhead pools between dark gaps.

**Metaphor.** The order is late, and the reason is four steps upstream. The camera starts at the dock and tracks backwards
along the line to find the cause.

**Props**

- Station signs: "DISPATCH", "PACK", "QC", "LINE 3".
- Crates with batch tags.
- One red-bordered tag, "BATCH 214 · HOLD".
- A truck at the dock.

**Handoff in.** Film 06's single line becomes the conveyor rail.

**Handoff out.** The truck's roller shutter comes down and its horizontal slats fill the frame. They become the salon's
shopfront shutter in Film 08.

**Paste-ready prompt**

> Film 07 Manufacturing & B2B, using the master prompt. Film 06's line becomes a conveyor rail. Problem: at the dispatch
> dock, an empty truck and an order tag reading "Committed: today".
>
> Tension: one continuous lateral track left, upstream past DISPATCH, PACK and QC, stopping on a crate tagged "BATCH 214 ·
> HOLD". That is four stations, counted by the camera. Transformation: the hold tag flips over and becomes the focused row
> "17 orders awaiting QC since 09:20" on the light Plant panel.
>
> Push in on "Quality hold and release". Resolution: the tag turns to RELEASED and the camera tracks back downstream to the
> dock as the crate is loaded. Scale: crate labels on a pallet stack read the 13 business types. Lockup. Handoff out: the
> roller shutter comes down.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Settle | — | The line becomes the conveyor rail |
| 1:30–7:00 | Problem | Static at the dock | **The order\nis late.** | An empty truck and the order tag "Committed: today" |
| 7:00–11:00 | Tension | Lateral track upstream, 4 stations | **The reason is\nfour steps\nupstream.** | Past DISPATCH, PACK and QC to BATCH 214 · HOLD |
| 11:00–14:00 | Transformation | Macro on the tag | — | The hold tag flips and becomes the QC row |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **The cause,\nvisible where\nit happens.** | The Plant panel. The QC row is focused. |
| 19:00–26:00 | Workflow | Push-in to 1.24x | **Dispatch knows\nbefore the truck\nis loading.** | "Quality hold and release": the six steps complete |
| 26:00–28:00 | Resolution | Lateral track downstream | — | The tag reads RELEASED; the crate is loaded onto the truck |
| 28:00–30:00 | Scale | Slow orbit around a pallet stack | **13 business types.** | Stencilled crate labels read the business types |
| 30:00–33:30 | Brand | Static | verity / Manufacturing & B2B / theverityai.xyz | Centred lockup |
| 33:30–35:00 | Handoff out | Static | — | The roller shutter drops; its slats fill the frame |

**UI text (exact)**

- Chrome: `VERITY / PLANT · PLANT 2 · SHIFT A · TODAY`
- Metrics:
  - Orders in flight 318 (across 4 lines)
  - Past committed date 14 (₹1.1 Cr order value)
  - Awaiting QC 17 (blocking dispatch)
  - Material coverage 11 days (against confirmed orders)
- Rows:
  - 17 orders awaiting QC since 09:20 · Plant 2 · blocking three dispatches *(focus)*
  - Batch 214 held on second inspection · Open since Monday · Project Orion
  - Raw material below cover for Line 3 · Supplier last delivered 4 days late
  - Vendor payment above approval threshold · ₹3,80,000 · not yet routed
- Workflow steps:
  1. Inspection records a failure against the batch
  2. Batch state moves to held; dependent orders show as blocked
  3. Deviation or rework decision routed for approval
  4. Rework completed and re-inspected
  5. Batch released or scrapped, with the outcome recorded
  6. Dependent orders unblocked and dispatch resumes
- Crate labels: Manufacturers, Textile Manufacturers, Garment Manufacturers, Furniture Manufacturers, Chemical
  Manufacturers, Pharmaceutical Manufacturers, Food Manufacturers, Packaging Companies, Importers, Exporters, Wholesalers,
  Distributors, Industrial Suppliers

---

### Film 08 — Personal & Local Services: "Gone quiet"

- **Page:** `salons.js`
- **Business types:** 15

**World.** A small salon at opening time. The shutter rises on a counter holding a paper appointment book, with one chair
and a retail shelf beyond. The light is warm morning light through the opening shutter.

**Metaphor.** You know your regulars by face, but the business does not know them at all. In the appointment book, one
client's name recurs every six weeks, then stops.

**Props**

- A paper appointment book, with invented first names such as "Meera — colour".
- A styling chair.
- A shelf of unbranded product bottles.

**Handoff in.** Film 07's shutter slats rise and become the salon's shopfront shutter opening.

**Handoff out.** The appointment book closes and its ruled lines fill the frame. They become the chart gridlines of Film 09.

**Paste-ready prompt**

> Film 08 Personal & Local Services, using the master prompt. Film 07's shutter becomes a salon shutter rising at opening
> time, revealing a counter with a paper appointment book.
>
> Tension: the book's pages flip and the same name, "Meera — colour", appears every six weeks; then the pages keep turning
> with no Meera. Transformation: the last "Meera" entry lifts off the page and becomes the focused row "112 regular
> clients have not visited in 90 days" on the light Salon panel.
>
> Push in on "Lapsed client follow-up". Resolution: a new page with "Meera — colour" written in again. Scale: the
> product-shelf price tags read the 15 business types. Lockup. Handoff out: the book closes into ruled lines.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Tilt up with the shutter | — | The shutter rises; morning light enters |
| 1:30–7:00 | Problem | Slow push to the counter | **You know your\nregulars by face.** | The chair, the counter and the open book |
| 7:00–11:00 | Tension | Macro on the pages | **The business\ndoes not know\nthem at all.** | Pages flip; "Meera — colour" recurs, then stops |
| 11:00–14:00 | Transformation | Macro | — | The last entry lifts off the page and becomes a row |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **Small operations\nstill have\nan operation.** | The Salon panel. The lapsed-clients row is focused. |
| 19:00–26:00 | Workflow | Push-in to 1.24x | **Quiet regulars\nget a follow-up.** | "Lapsed client follow-up": the five steps complete |
| 26:00–28:00 | Resolution | Pull-back | — | A new page: "Meera — colour" is written in again |
| 28:00–30:00 | Scale | Lateral move along the shelf | **15 business types.** | Shelf price tags read the business types |
| 30:00–33:30 | Brand | Static | verity / Personal & Local Services / theverityai.xyz | Centred lockup |
| 33:30–35:00 | Handoff out | Push | — | The book closes and its ruled lines fill the frame |

**UI text (exact)**

- Chrome: `VERITY / SALON · TODAY`
- Metrics:
  - Takings today ₹64,200 (38 services)
  - Chair utilisation 71% (of staffed hours)
  - Clients gone quiet 112 (no visit in 90 days)
  - Retail low 6 (lines below reorder)
- Rows:
  - 112 regular clients have not visited in 90 days · Previously visiting every 5–7 weeks *(focus)*
  - Two stylists at 40% utilisation this week · While two others are fully booked
  - Colour stock short for weekend bookings · Two shades · supplier delivers Thursday
  - Retail products sold without being deducted · 9 items · count mismatch
- Workflow steps:
  1. Clients past their usual visit interval identified
  2. Grouped by the stylist who usually sees them
  3. Follow-up assigned with the client's history attached
  4. Outcome recorded — rebooked, declined or unreachable
  5. Interval reset once they return
- Shelf tags: Salons, Spas, Gyms, Fitness Studios, Yoga Studios, Wedding Planners, Photographers, Car Rentals, Car Washes,
  Auto Repair Shops, Cleaning Services, Laundry Services, Repair Services, Printing Businesses, Tailors

---

### Film 09 — Digital & Technology: "Four tools" (series finale)

- **Page:** `saas-companies.js`
- **Business types:** 13

**World.** A dark studio desk with one large monitor. The product analytics chart on it is clean, instrumented and softly
lit. When the camera pulls back, four mismatched tool windows surround the monitor. The light is cool monitor spill on a
dark desk.

**Metaphor.** You instrument the product beautifully and run the company on four disconnected tools. The product side is
precise; the business side is scattered across windows.

**Props**

- Four unbranded wireframe windows, labelled only "CRM", "Chat", "Inbox" and "Drive", each showing a fragment of the same
  account name.
- No real logos.

**Handoff in.** Film 08's ruled lines become the gridlines of the analytics chart.

**Handoff out.** This is the end of the series. The panel pulls back and becomes one of nine glass tiles, one per
industry. They resolve into the final series card.

**Paste-ready prompt**

> Film 09 Digital & Technology, the series finale, using the master prompt. Film 08's lines become the gridlines of a
> clean product analytics chart on a monitor.
>
> Tension: the camera pulls back to reveal four unbranded tool windows (CRM, Chat, Inbox, Drive) around it. Each holds a
> fragment of the same account, and none of them line up. Transformation: the four windows slide together, align and
> become the light Accounts panel, with "9 renewals at risk inside 90 days" focused.
>
> Push in on "Renewal risk". Scale: the 13 business types appear as tab titles in one window's tab bar. Series close: the
> panel pulls back into a 3x3 grid of nine glass tiles, one per industry, each showing its panel title. Then the series
> card: a centred lockup with no industry line, held longest of all nine films.

**Screenplay**

| Time | Shot | Camera | On-screen text | Visual |
|---|---|---|---|---|
| 0:00–1:30 | Handoff in | Settle | — | The ruled lines become chart gridlines |
| 1:30–7:00 | Problem | Slow push on the chart | **The product is\nengineered.** | A clean analytics chart, softly lit |
| 7:00–11:00 | Tension | Pull-back to a wide shot | **The business\naround it\nusually is not.** | Four tool windows around the monitor, each with an account fragment |
| 11:00–14:00 | Transformation | Static | — | The windows slide, align and become the panel |
| 14:00–19:00 | Product | Hero, panel 7° to 3° | **Clients, delivery,\ncapacity, revenue.\nConnected.** | The Accounts panel. The renewals row is focused. |
| 19:00–25:00 | Workflow | Push-in to 1.24x | **Renewal risk,\nseen by signal,\nnot by date.** | "Renewal risk": the five steps complete |
| 25:00–27:30 | Scale | Pull-back | **13 business types.** | One window's tab bar shows the 13 types as tab titles |
| 27:30–30:30 | Series scale | Pull-back into a 3x3 grid | **Nine industries.\n123 business types.** | Nine glass tiles, one per industry, each showing its panel title |
| 30:30–35:00 | Series brand | Static, held | verity / theverityai.xyz | A centred lockup with no industry line; the longest hold in the series |

Film 09 has no resolution prop. Its resolution is the series grid.

**UI text (exact)**

- Chrome: `VERITY / ACCOUNTS · ALL CUSTOMERS · THIS MONTH`
- Metrics:
  - Active accounts 186 (₹14.2 Cr ARR)
  - Renewals in 90 days 38 (9 flagged at risk)
  - Onboarding overdue 11 (past target go-live)
  - Support above plan 14 accounts (cost exceeds fee)
- Rows:
  - 9 renewals at risk inside 90 days · Low onboarding completion and high ticket volume *(focus)*
  - 11 accounts past their target go-live date · Strongest predictor of first-year churn
  - 14 accounts where support cost exceeds their fee · Concentrated in one plan tier
  - Expansion opportunities unworked · 23 accounts at usage limits
- Workflow steps:
  1. Risk signals aggregated — onboarding completion, support volume, sentiment, sponsor change
  2. Accounts scored ahead of their renewal date
  3. Intervention assigned by risk rather than by date
  4. Outcome recorded with the reason either way
  5. Churn reasons aggregated for the product and go-to-market teams
- Tab titles: SaaS Companies, Software Agencies, Startups, E-commerce Businesses, Online Marketplaces, App Developers, Web
  Development Agencies, Cybersecurity Companies, Data Companies, AI Companies, Gaming Studios, Content Agencies, Creator
  Businesses
- Series tiles: Retail · Store, Food & Hospitality · Service, Professional Services · Practice, Healthcare · Practice,
  Education · Administration, Real Estate & Construction · Projects, Manufacturing & B2B · Plant, Personal & Local
  Services · Salon, Digital & Technology · Accounts
- Total: 20 + 14 + 15 + 11 + 12 + 10 + 13 + 15 + 13 = 123 business types (registry, 2026-10-02). Recount before rendering.

---

## Part 3: Handoff chain (one object carried across the whole series)

| From | Object | To |
|---|---|---|
| 01 Retail | Full-frame barcode | 02: a delivery label on a prawn tub |
| 02 Food | Cream delivery note | 03: the top page of a matter folder |
| 03 Professional | A circled calendar date | 04: a diary page |
| 04 Healthcare | The diary closes into a form | 05: an admission form |
| 05 Education | Timetable grid | 06: the grid on a building drawing |
| 06 Construction | A grid line pulled taut | 07: the conveyor rail |
| 07 Manufacturing | The truck's roller shutter | 08: the salon's shopfront shutter |
| 08 Local services | Appointment-book ruled lines | 09: analytics chart gridlines |
| 09 Digital | Nine industry tiles | The series end card |

## Part 4: Per-film audit (record in each film's doc before the final render)

For each film, take stills at the midpoint of every shot and check:

- one focal point per frame;
- every statement on its named anchor;
- no repeated concept, and no statement that repeats the UI's words;
- no text under 16px on screen;
- the transformation shot reads with no text at all;
- the business types appear inside the industry world, never as a list;
- dark world, light UI, accent only for state.

When it passes, render once and stop.
