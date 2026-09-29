# Verity industry reels — screenplays

Nine 9:16 reels, one per Explore industry. This file supersedes the shared beat sheet in
`content-plan.md`: **no two reels share a structure.** Each has its own hook, hero device, camera
language and edit rhythm. What they share is a brand shell, not a template.

Every problem line and every reel spine below comes from the real page copy in
`content/industries.js` (the headline and the four "challenges" per industry), so the reels say the
same thing as the page they link to. Numbers and labels on screen come from the site content (see
"Data source of truth" below), which the site itself labels "illustrative figures", so reels carry the
same disclosure. Any figure written directly in a per-reel table below (for example "SHELF 24, SHEET 19")
is a placeholder to be **replaced by the real page data in the map**.

## Series shell (the only things that repeat)

- 1080x1920, 30fps, **30s**. Light theme, accent `#0A84FF`, Inter, tokens live from `css/verity.css`.
- Accent is for state and data only. No neon, particles, fake 3D, lens flares, stock footage.
- First frame is the hook, from the business's own world. No logo intro. Verity appears as the
  transformation at about 0:06–0:10 (see "Series bible v2" below).
- Text-only by default (social, sound-off). Each script lists a sparse music/SFX direction and an
  optional VO line set, so both cuts come from the same script.
- Closing, always 0:25–0:30: the breadth reveal, then the end card (Verity mark, "{N} business types.
  One Verity.", `theverityai.xyz`). This **replaces** the per-reel "End card" rows in the tables below.
- Safe zones: keep text inside x 72–1008, y 220–1560 (platform UI covers the top 220 and bottom 360).
- Motion: springs and expo-out for arrivals, inOut for camera. Never linear. One hero move at a time.
- Copy rule: sentences, not slogans. Captions under 32 characters per line.

Timecodes are `m:ss`. SFX are soft UI-scale sounds (tick, thock, paper, breath), not whooshes.

---

## 1. Retail & Commerce — "Two numbers"

Page truth: *Retail runs on stock, and stock runs on records.* Pain: stock truth in two places,
reordering is a memory exercise, customer history stops at the till.

- **Concept.** Two numbers for the same product disagree. The whole reel is the numbers becoming one.
- **Design.** A dense, calm SKU grid (tiles 3 columns x 8) like a shelf seen from above. Tiles are white
  cards on `--base`, hairline borders, tabular numerals. One scan line (accent, 2px, no glow) sweeps the
  grid. Macro camera: slow vertical push, no rotation.
- **Signature move.** The scan line "reads" tiles and each tile's number locks (tick and a tiny blue check).
- **Music.** Minimal pulse, 96 BPM, soft kick only on scans. **Cut rhythm:** slow and deliberate, six cuts.

| Time | Visual | On-screen text | SFX / VO (optional) |
|---|---|---|---|
| 0:00–0:02 | Split cards, left "SHELF 24", right "SHEET 19", same product "Oat Milk 1L". They vibrate out of sync. | "Which one is true?" | Two mismatched ticks. VO: "Which one is true?" |
| 0:02–0:05 | Cards slide apart; more mismatches cascade down: Supplier PO, Invoice, Returns, each with its own number, none agreeing. | "Stock truth lives in two places." | Ticks multiply, then silence. |
| 0:05–0:08 | Hard reset to white. The SKU grid assembles tile by tile (24 tiles, staggered springs). | — | Soft thock per tile. |
| 0:08–0:12 | Scan line sweeps top to bottom; each tile's number settles and a check appears. The two-number card returns and both become **24**, merging into one. | "One record. One number." | Scan tone, resolve chord. VO: "One record. One number." |
| 0:12–0:16 | A sale: customer chip "Aarav M." drops a basket into one tile; it ticks 24 to 23 and a small sales ticker rises. Camera pushes in. | "Every sale moves stock." | Tick. |
| 0:16–0:20 | The tile hits its low-stock threshold and pulses once. A purchase order auto-drafts beside it, addressed to FreshCo, and slides right. | "Reordering isn't a memory exercise." | Soft chime. VO: "Reordering stops being a memory exercise." |
| 0:20–0:24 | Zoom to the customer chip: history unrolls (38 orders, Gold tier). When the customer goes quiet, a follow-up nudge card appears. | "Customer history doesn't stop at the till." | Paper slide. |
| 0:24–0:27 | Pull back: grid, PO, customer and the day's takings sit in one frame. A "Today" total ticks up live. | "Performance is daily, not monthly." | Rising pad. |
| 0:27–0:30 | End card. | "Retail on one record." | Logo tone. |

---

## 2. Food & Hospitality — "Service clock"

Page truth: *The day is the unit of work, and it does not wait.* Pain: consumption invisible until a
shortage, rosters unrelated to revenue, suppliers by phone, multi-outlet reporting by hand.

- **Concept.** A dinner service seen as a clock. Everything on screen is arranged around time.
- **Design.** A large radial dial (5pm–11pm) in the middle third: thin ring, tick marks, a moving accent
  hand. Order tickets are small white cards on a horizontal rail across the top. Ingredient bars live along
  the bottom. Tighter pacing than Retail.
- **Signature move.** The clock hand advances continuously; every event snaps to a tick on the ring.
- **Music.** Low walking-bass loop, brushed percussion, 108 BPM, ticks lock to the beat. **Cut rhythm:** the
  hand's motion is the edit; one hard cut only at the 20:47 alert.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:02 | Dial fades in at 17:00, hand starts moving. Text sits over the ring centre. | "Service starts at 5." | One clock tick. |
| 0:02–0:07 | Orders drop onto the rail as tickets (Table 4, Delivery, Table 9). The ring fills with small accent arcs for covers per half hour. | "Everything that matters happens in a few hours." | Ticket "thock"s. VO: "Everything that matters happens in a few hours." |
| 0:07–0:12 | Bottom bars: Tomatoes, Mozzarella, Stock, Milk. Each ticket drains its ingredients in real time; bars sag smoothly. Camera drifts down. | "Consumption is invisible until it's a shortage." | Soft drain sound. |
| 0:12–0:16 | Roster arc appears on the outer ring: staff dots (Chef, Line, Floor) on shift. A demand curve overlays. A gap glows at 20:00. | "Rosters and revenue are one picture." | Rising tone. |
| 0:16–0:20 | Hand reaches 20:47. The Mozzarella bar hits threshold and pulses. A supplier card slides in: "Mozzarella · 12kg · draft PO", and sends itself. | "Suppliers stop being a phone call." | Alert tick, soft send sound. VO: "Suppliers stop being a phone call." |
| 0:20–0:24 | Camera pulls back; the dial becomes one of three small dials (Outlet A, B, C), ticking in sync. | "One day, every outlet." | Layered ticks. |
| 0:24–0:27 | Hand sweeps to 23:00. One line lands: "Today made money." with the day's net figure. | "Did today make money? Now you know." | Closing chord. |
| 0:27–0:30 | End card. | "Hospitality on one record." | Logo tone. |

---

## 3. Professional Services — "One thread"

Page truth: *The product is work, and the work is people's time.* Pain: engagement health discovered
late, documents outlive their systems, deadlines tracked personally, capacity is a feeling.

- **Concept.** A single thread runs through a matter. Email, document, timesheet and invoice are beads on it.
- **Design.** Editorial and quiet, the most typographic of the nine. Large weight-300 headlines, generous
  margins. A vertical thread (2px accent line) runs down the centre; cards clip to it like index cards on
  a string. The camera follows the thread downward in one long tracking shot.
- **Signature move.** The thread draws itself as time passes; a running timer sits at its head.
- **Music.** Solo piano, sparse, 72 BPM. **Cut rhythm:** almost no cuts, one long descending move.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:03 | Blank white. A single thread draws downward from the top. A card clips on: "Client · Halden & Co". | "Every engagement is a thread." | Piano note. |
| 0:03–0:08 | Beads attach: an email, a signed document, a 2.5h timesheet entry, each with a small timestamp. Camera tracks down with them. | "Documents outlive the systems holding them." | Paper slide. VO: "Documents outlive the systems that hold them." |
| 0:08–0:13 | The thread splits into three matters. Two show a solid blue dot; one shows a hollow ring (at risk) that pulses. | "Engagement health, found early." | Soft ping. |
| 0:13–0:18 | Deadline marks appear along the right margin. "Filing · 14 Oct" becomes a shared calendar row with an owner. | "Deadlines aren't tracked personally." | Tick tick. VO: "Deadlines stop living in one person's head." |
| 0:18–0:23 | Camera lifts to a team strip: five people as thin bars over the next four weeks. One bar is over-full; a task drags to a free bar and it balances. | "Capacity is measured, not felt." | Drag click, resolve. |
| 0:23–0:27 | All threads gather into one clean ledger; the invoice bead at the bottom flips to "Sent". | "Work to invoice, one thread." | Piano chord. |
| 0:27–0:30 | End card. | "Professional services on one record." | Logo tone. |

---

## 4. Healthcare — "Quiet operations"

Page truth: *Care is delivered by an operation, and the operation is usually invisible.* Pain: rosters
and demand set separately, consumables run out mid-week, follow-ups depend on memory, multi-site
reporting reassembled monthly.

- **Concept.** Make the invisible operation visible without ever making it clinical. Calm, not urgent.
- **Design.** The softest reel: slowest motion, largest whitespace, low-contrast hairlines, breathing
  dots. No red, no heart-rate motifs, no medical imagery, no clinical claims. Synthetic, unnamed patients
  ("Patient 0142"). Curves and soft area fills carry the visual language.
- **Signature move.** Two curves, demand and staffing, drift into alignment and lock.
- **Music.** Warm pad, no percussion, 60 BPM. **Cut rhythm:** crossfades only, no hard cuts.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:03 | Empty white, a soft breathing dot. Text fades in slowly. | "Care has an operation behind it." | Pad swell. VO: "Behind every appointment is an operation." |
| 0:03–0:09 | Two curves: expected appointments (accent, solid) and staffed hours (grey line). They don't match; the gap fills faintly. | "Rosters and demand are set separately." | Low tone. |
| 0:09–0:14 | The staffed line eases up to meet demand; the curves lock together. | "Set together." | Soft chime. VO: "Rostered to what's actually coming." |
| 0:14–0:19 | Rows of consumable levels (gloves, syringes, dressings) as thin horizontal meters; one dips toward its line and quietly gets a reorder mark. | "Consumables don't run out mid-week." | Gentle tick. |
| 0:19–0:24 | A patient list; one row gets a small "follow-up due" marker and a task creates itself with an owner. | "Follow-ups don't depend on memory." | Soft bell. VO: "Nothing depends on someone remembering." |
| 0:24–0:27 | Three site tiles fade in and share one report card. | "Every site. One report." | Pad resolves. |
| 0:27–0:30 | End card. | "Healthcare on one record." | Logo tone. |

Compliance: no diagnosis, outcome or treatment claims; no real names; no cross-patient data shown.

---

## 5. Education — "One student"

Page truth: *An institution is an operation with a very long memory.* Pain: the same person in several
systems, awkward fee follow-up, uneven staff workload, annual compliance scramble.

- **Concept.** One student appears five times, then becomes one.
- **Design.** Playful but precise, the most "product demo" of the set. Five mini app windows labelled
  Admissions, Fees, Attendance, Exams, Library, each with the same student spelled slightly differently
  ("Riya Sharma", "R. Sharma", "Riya Sharmaa"). Windows are small and arranged in a loose fan.
- **Signature move.** The five windows slide together and fold into a single profile card; the name corrects.
- **Music.** Light acoustic pluck, 100 BPM, skippy but tidy. **Cut rhythm:** medium, one satisfying merge.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:03 | Five windows pop in, each with the same student, differently spelled. | "Same student. Five records." | Five plucks. VO: "Same student. Five systems." |
| 0:03–0:07 | The differences are ringed. A search for "Riya" returns five results, none complete. | "The same person exists in several systems." | Soft error tone. |
| 0:07–0:12 | Windows slide together and fold into one profile: name corrected, timeline of admission, fee, attendance, exam. | "One person. One record." | Merge sound. VO: "One person. One record." |
| 0:12–0:17 | Fees: a "Fee due" chip for a family; a polite reminder message drafts, sends, and the chip flips to "Paid". | "Fee follow-up, without the awkward call." | Message pop. |
| 0:17–0:22 | Teacher workload bars, uneven, then a class reassigns and they even out. | "Workload measured, then balanced." | Bar settle. |
| 0:22–0:27 | A file titled "Annual compliance" assembles itself from the records; progress bar completes in one click. | "Compliance isn't a scramble." | Success chime. VO: "Compliance stops being an annual scramble." |
| 0:27–0:30 | End card. | "Education on one record." | Logo tone. |

---

## 6. Real Estate & Construction — "Site to sheet"

Page truth: *The work is distributed, and so is everyone who knows about it.* Pain: pipeline in agents'
phones, site status as narrative, approvals stall invisibly, costs reconciled after the fact.

- **Concept.** Messy narrative from the field becomes structured truth.
- **Design.** A faint blueprint grid (`--grid-line`) behind everything, thin construction lines, site
  pins. Left half of frame: chat bubbles (informal site messages). Right half: the structured milestone
  board. The camera pans horizontally as text converts. Isometric hints only as 2D line art.
- **Signature move.** A chat message "pours" into a structured field (text becomes a milestone bar filled
  to a percentage).
- **Music.** Steady mid-tempo, 92 BPM, soft snare like footsteps. **Cut rhythm:** medium, horizontal wipes.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:03 | Chat bubbles pop over a blueprint grid: "Slab poured, some delay", "Waiting on approval", "Need more cement". | "Site status arrives as narrative." | Message pops. VO: "Site status arrives as a message." |
| 0:03–0:08 | Bubbles drift toward a board; "Slab poured" converts into a milestone bar "Foundation 80%"; "Waiting on approval" becomes an approval card. | "Structured, as it happens." | Pour, click. |
| 0:08–0:13 | Pin map of three sites; tapping one opens its milestone list. An overall progress ring fills. | "Every site, one view." | Map ping. |
| 0:13–0:18 | An approval card sits stalled: a clock face ticks and a highlighted hand-off shows who it waits on. The card unblocks and slides on. | "Approvals stall visibly, then clear." | Tick, release. VO: "Approvals stop stalling invisibly." |
| 0:18–0:23 | Enquiries from an agent's phone become pipeline cards in columns (Lead, Visit, Booking). | "The pipeline stops living in phones." | Card settle. |
| 0:23–0:27 | Material and contractor cost lines tick up beside the milestone; a running total stays reconciled to budget. | "Cost, reconciled as you build." | Counter tick. |
| 0:27–0:30 | End card. | "Real estate and construction on one record." | Logo tone. |

---

## 7. Manufacturing & B2B — "Trace the delay"

Page truth: *Everything that stops a shipment starts somewhere upstream.* Pain: late orders with
untraceable causes, raw and finished stock counted separately, informal quality holds, anecdotal
supplier reliability.

- **Concept.** A late order is investigated in seconds by rewinding upstream through the production line.
- **Design.** The most cinematic of the nine. A horizontal conveyor of stage nodes (Supplier, Raw, Batch,
  QC, Pack, Dispatch) as clean cards linked by a line. The camera rides along it. Cool grey palette with
  the accent as "the trace". Slightly higher contrast, sharper motion.
- **Signature move.** The reverse trace: the camera reverses along the line while the accent trace lights
  each upstream node until it stops on the cause.
- **Music.** Driving tension pulse, 118 BPM, riser then release. **Cut rhythm:** fast and punctuated.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:02 | The Dispatch node flashes: "Order #2210 · LATE · 2 days". | "Why is it late?" | Sharp alert. VO: "Why is this order late?" |
| 0:02–0:06 | Camera rides backwards along the line, the trace lighting each node: Pack, QC, Batch, Raw, Supplier. | "Everything starts upstream." | Reverse riser. |
| 0:06–0:10 | The trace stops at QC: a quality hold on Batch 77, with owner and timestamp. Cause found. | "A quality hold. Found in seconds." | Lock click. VO: "A quality hold, found in seconds." |
| 0:10–0:15 | Zoom to two stock counters: Raw 4,200kg and Finished 860 units, previously separate, now sharing one balance. | "Raw and finished, one count." | Merge tick. |
| 0:15–0:20 | The Supplier node opens: a reliability score builds from delivery history (on-time bars). | "Supplier reliability isn't anecdotal." | Bars tick in. |
| 0:20–0:25 | The hold is released; the trace flows forward, nodes turn blue one by one to Dispatch; status "On time". | "Released, and moving." | Release and flow. VO: "Released. And moving." |
| 0:25–0:27 | An OTIF figure ticks up. | — | Chord. |
| 0:27–0:30 | End card. | "Manufacturing on one record." | Logo tone. |

---

## 8. Personal & Local Services — "The owner is the system"

Page truth: *Small operations still have an operation.* Pain: repeat custom not measured, staff time
booked but not analysed, retail stock a side business nobody runs, the owner is the system.

- **Concept.** The owner steps away, and the business keeps running.
- **Design.** Warmest and most human. Rendered as a phone-native day view (one tall, glanceable column),
  large tap-sized pills, a friendly avatar for the owner at the top. Soft shadows, round corners from the
  token scale. Feels like an app on the owner's phone, not a dashboard.
- **Signature move.** The owner avatar slowly slides out of the top of the frame while appointments keep
  filling the day.
- **Music.** Light guitar/piano, 104 BPM, easy groove. **Cut rhythm:** relaxed, three gentle dissolves.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:03 | Owner avatar "Meera" at the top, buried under a stack of notifications, notes and calls. | "The owner is the system." | Pings pile up. VO: "Right now, you are the system." |
| 0:03–0:08 | Notifications collapse into a clean day column: 9:00 Haircut, 10:30 Facial, 12:00 Package session, each pill owned by a staff member. | "One clear day." | Soft snaps. |
| 0:08–0:13 | A loop ring around client "Nisha": visits 4 of 6, next-due badge; a reminder sends itself. | "Repeat custom, measured." | Message pop. VO: "Repeat custom, finally measured." |
| 0:13–0:18 | Staff bars: booked vs. used time, gaps highlighted; one gap fills with a new booking. | "Staff time, analysed." | Fill click. |
| 0:18–0:22 | A small retail shelf: shampoo stock ticks down with a sale and a reorder note appears. | "The side business, finally run." | Tick. |
| 0:22–0:27 | The owner avatar slowly slides out of frame. The day keeps filling and pills confirm on their own. | "Step away. It keeps running." | Warm swell. VO: "Step away. It keeps running." |
| 0:27–0:30 | End card. | "Local services on one record." | Logo tone. |

---

## 9. Digital & Technology — "Command"

Page truth: *The product is engineered. The business around it usually is not.* Pain: delivery and
commercial data never meet, capacity committed before checked, client context scattered, reporting built
ad hoc.

- **Concept.** A command palette answers a question that used to take three tools.
- **Design.** The most "product" of the set: a centred Cmd+K palette, mono labels for metadata, split panes
  for delivery (sprint) and commercial (contract, MRR). Crisp, dense, keyboard-native. Uses the site's
  `.label` style heavily. The AI capability from the page's capability list is the hero.
- **Signature move.** The user types a question; answer cards resolve inside the palette with live data.
- **Music.** Minimal electronic, 124 BPM, dry clicks on keystrokes. **Cut rhythm:** fast, keystroke-driven.

| Time | Visual | On-screen text | SFX / VO |
|---|---|---|---|
| 0:00–0:03 | Split screen: left a sprint board, right a contract sheet. They don't reference each other. | "Delivery and commercial never meet." | Two clicks. VO: "Delivery and commercial never meet." |
| 0:03–0:07 | Cmd+K opens a palette. Typed: "Can we commit 3 engineers to Acme in March?" | — | Key clicks. |
| 0:07–0:12 | The palette resolves: March capacity (bars), current commitments and Acme's contract value side by side. Verdict: "Short by 1 engineer". | "Capacity, checked before committed." | Answer ping. VO: "Checked before it's committed." |
| 0:12–0:17 | Follow-up: "Who's free?" Two names surface with availability; one is dragged into the plan and the bar balances. | "Fix it in place." | Drag click, resolve. |
| 0:17–0:22 | Client context: Acme's record opens with contracts, tickets, notes and last delivery in one view. | "Client context, in one place." | Panel slide. VO: "Everything about the client, in one place." |
| 0:22–0:27 | Type "monthly report": a formatted operational report generates from live data and exports. | "Reports built once, not ad hoc." | Export chime. |
| 0:27–0:30 | End card. | "Digital and technology on one record." | Logo tone. |

---

## Data source of truth

Everything the reels need already exists in the repo, so reels are **generated from content, not
hand-typed**:

- `content/industries.js`: per industry, the headline, lede, context and the four challenges.
- `content/businesses/<slug>.js`: per business type, `hero.headline`, `hero.lede`, and `hero.panel`
  (a real product-panel spec: title, meta, four metrics with notes, four "needs attention" rows with
  meta lines), plus overview, terminology and more.
- `content/capabilities.js`: capability names and summaries for module labels.
- Build wiring: `video/src/data.ts` imports the chosen flagship business file(s) and maps `hero.panel`
  into the reel's on-screen panel, so a wording or figure change on the site flows into the video.

Flagship business per reel (tier 1, chosen because its own headline already is the reel's concept):

| # | Reel | Flagship page | Real hook line (its `hero.headline`) | Metrics to show (label = value) | "Needs attention" rows to animate |
|---|---|---|---|---|---|
| 1 | Retail & Commerce | `retail-stores` | "The shelf says one thing. The sheet says another. The reorder is due today." | Sales today = ₹4.86 L; Stock value = ₹1.4 Cr; Not moved 90d = ₹22 L; Below reorder = 37 | Store 2 count differs from system by 34 units; 12 fast-moving lines below reorder point; ₹22 L in stock not moved in 90 days; Supplier price increase not reflected in retail |
| 2 | Food & Hospitality | `restaurants` | "Service ends at eleven. The numbers should not arrive next month." | Revenue today = ₹2.14 L; Average order = ₹1,150; Prep stock = 4 low; On shift = 17 | Prawns below par for tomorrow's covers; Two starters ran out before 20:00; Section 3 running two servers short; Wastage not logged for lunch service |
| 3 | Professional Services | `law-firms` | "A matter that has quietly consumed twice its budget looks exactly like a healthy one." | Active matters = 148; Deadlines in 14 days = 31; Unbilled work = ₹62 L; Fees outstanding = ₹1.1 Cr | 4 statutory deadlines in 14 days with no owner; Matter consumed 210% of estimated effort; ₹62 L unbilled beyond 60 days; Engagement letter unsigned on active matter |
| 4 | Healthcare | `clinics` | "The clinical work is the easy part to see. The practice around it is not." | Consultations = 486; Follow-ups due = 73; Consumables low = 9; Staff coverage = 92% | 18 follow-ups overdue past their review date; Consumable stock short for Thursday's list; Friday evening slot uncovered; Consent documentation incomplete |
| 5 | Education | `schools` | "The same child exists in five systems, and none of them agree." | Students = 1,284; Fees outstanding = ₹41.6 L; Admissions in progress = 92; Staff records incomplete = 14 | 31 admissions stalled on missing documents; 58 families past the second fee reminder; Two sections without an assigned class teacher; Transport route change not communicated |
| 6 | Real Estate & Construction | `real-estate-developers` | "The milestone was achieved in March. The demand went out in June." | Units sold = 412 of 640; Demands unraised = 68; Collections overdue = ₹22 Cr; Handovers pending = 46 | 68 demands unraised against achieved milestones; 142 customers overdue, 38 beyond 90 days; 11 handovers past their committed date; Channel partner commission unreconciled |
| 7 | Manufacturing & B2B | `manufacturers` | "The order is late. The reason is four steps upstream." | Orders in flight = 318; Past committed date = 14 (₹1.1 Cr); Awaiting QC = 17; Material coverage = 11 days | 17 orders awaiting QC since 09:20; Batch 214 held on second inspection; Raw material below cover for Line 3; Vendor payment above approval threshold |
| 8 | Personal & Local Services | `salons` | "You know your regulars by face. The business does not know them at all." | Takings today = ₹64,200; Chair utilisation = 71%; Clients gone quiet = 112; Retail low = 6 | 112 regular clients have not visited in 90 days; Two stylists at 40% utilisation while two are fully booked; Colour stock short for weekend bookings; Retail products sold without being deducted |
| 9 | Digital & Technology | `software-agencies` | "The estimate was wrong in a specific, repeatable way, and nobody wrote it down." | Active projects = 14 (₹3.8 Cr); Over estimate = 5; Milestones unaccepted = 9 (blocks ₹64 L); In warranty = 11 | 5 projects past estimate with no change request (640 hours); 9 delivered milestones awaiting client acceptance; Warranty work consuming a developer full time; Two developers committed to overlapping sprints |

How this changes the scripts:

- **Hook lines** use the real headline above wherever it fits the first two seconds (shortened, never
  reworded into something the page does not say).
- **Replace placeholder figures** in the per-reel tables with the metrics and row text above. For example
  Reel 1's "SHELF 24 / SHEET 19" becomes "Store 2 count differs from system by 34 units", Reel 3's "Halden &
  Co" becomes matter-level rows, Reel 7's "Order #2210" becomes "17 orders awaiting QC since 09:20".
- **The hero devices already match:** Retail (shelf vs sheet), Education (same child in five systems),
  Manufacturing (late order, upstream cause), Real Estate (milestone vs demand), Salons (regulars known
  by face). Reels 2, 3, 4 and 9 keep their device but take their content from the rows above.
- **Breadth reveal** names come from `content/businesses/registry.js`; counts come from the same file, so
  they cannot drift from the site.
- **Rupee formats** follow the site (`₹4.86 L`, `₹1.4 Cr`, `₹64,200`).

## Series bible v2 (merged from an external review)

Kept from the review, because it improves the series:

1. **World before UI.** Roughly 70% business world, 30% product UI. Each reel opens inside a
   recognisable moment of that business (a receipt, a kitchen ticket, a site message), drawn as clean
   vector/UI-styled scenes, never stock footage. The viewer recognises their own business first.
2. **One operational story, one continuous camera.** Inside the product, the camera travels between
   modules along the chain of a single job (order, stock, purchase, customer, team). No screen, fade,
   screen slideshows.
3. **Transformation beat.** At about 0:06–0:10 the scattered world collapses to a point and the Verity
   workspace emerges. Verity's mark appears here for the first time, small, then the domain chip:
   "One platform. For {Domain}."
4. **Breadth reveal, count as payoff.** The count is not the hero. At 0:25–0:28 real business-type names
   from the registry populate the frame, then land on "{N} business types. One Verity."
5. **Match-cut chain.** Each reel's last frame is an object that becomes the next reel's first frame, so
   the series plays as one universe (table below).
6. **Indian MSME texture.** Rupee amounts and local phrasing where natural ("Sir stock aa gaya?" for
   Retail). Use Indian-context names and units in every reel's synthetic data.
7. **Retail is Reel 01**, because it has the broadest environment to set the visual language.

Deliberately not adopted:

- **AI-generated video footage layer.** It costs money and the earlier decision (see
  `saas-trailer-9x16.md`) is free/local only. It is also the source of the generic look the series must
  avoid. Business-world scenes are built as motion graphics in Remotion instead.
- **Same skeleton for every reel.** Sameness is what makes industry videos boring. The series shares the
  opener chip, closing reveal and match-cuts only; hook, hero device and pacing stay per reel (above).

### Per-reel v2 fields

Order is the release order. `Real UI` is captured from the actual site DOM/CSS via Playwright where a
screen exists (dashboard, panels); otherwise rebuilt from `css/verity.css` tokens.

| # | Reel | Opening world (0:00–0:06) | Match-cut out (last frame) | Match-cut in (first frame) | Breadth names (0:25–0:28) |
|---|---|---|---|---|---|
| 1 | Retail & Commerce | POS receipt prints "₹4,850", a WhatsApp "Sir stock aa gaya?", a stock sheet, all speeding up | Barcode | (series open: black) | Retail Stores, Supermarkets, Grocery Stores, Convenience Stores, Department Stores, Fashion Stores |
| 2 | Food & Hospitality | Kitchen pass at 8pm: printer spits tickets, WhatsApp supplier voice-note, whiteboard roster | Order ticket | Barcode becomes the ticket's barcode strip | Restaurants, Cafés, Bakeries, Cloud Kitchens, Fast Food Businesses, Catering Businesses |
| 3 | Professional Services | A desk: contract PDF, email thread, timesheet in a spreadsheet, a calendar with a missed deadline | Document page | Ticket unfolds into a document page | Law Firms, Accounting Firms, CA Firms, Consulting Firms, Marketing Agencies, Advertising Agencies |
| 4 | Healthcare | A clinic front desk: paper register, token slip, appointment diary | Token slip | Document page becomes a token slip | Hospitals, Clinics, Dental Clinics, Dermatology Clinics, Physiotherapy Clinics, Diagnostic Labs |
| 5 | Education | An admissions office: enquiry register, fee receipt, attendance sheet | Student ID card | Token becomes an ID card | Schools, Colleges, Universities, Coaching Institutes, Tuition Centres, Test Preparation Centres |
| 6 | Real Estate & Construction | A site: WhatsApp photos, a hand-drawn progress note, a pinned plan | Project ID plate | ID card becomes a site plate | Real Estate Developers, Property Dealers, Property Management, Construction Companies, Contractors, Architects |
| 7 | Manufacturing & B2B | Factory floor: a late-order call, a whiteboard of batches, a QC tag | Batch tag | Plate becomes a batch tag | Manufacturers, Textile Manufacturers, Garment Manufacturers, Furniture Manufacturers, Chemical Manufacturers, Pharmaceutical Manufacturers |
| 8 | Personal & Local Services | A salon counter: appointment diary, UPI ping, a customer waiting | Appointment card | Batch tag becomes an appointment card | Salons, Spas, Gyms, Fitness Studios, Yoga Studios, Wedding Planners |
| 9 | Digital & Technology | A laptop-and-sticky-note desk: sprint board, invoice draft, Slack thread | Bracket cursor "⌘" | Appointment card becomes a command palette cursor | SaaS Companies, Software Agencies, Startups, E-commerce Businesses, Online Marketplaces, App Developers |

Loop point: Reel 9's cursor resolves to a barcode, which is Reel 1's first frame, so the nine can autoplay
as a continuous film.

Breadth counts for the closing line (from the registry): Retail 20, Food 14, Professional 15,
Healthcare 11, Education 12, Real Estate 10, Manufacturing 13, Personal 15, Digital 13, total 123.

### Timing changes this implies

- The per-reel tables above stay valid for **0:06–0:25**; treat their first rows as the "opening world"
  (0:00–0:06) using the concrete scene in this table, and treat their last two rows (0:24–0:30) as
  replaced by: 0:25–0:28 breadth reveal, 0:28–0:30 "{N} business types. One Verity." plus the match-cut
  object.
- Transformation beat (0:06–0:10) is new and consumes the second hook row's time in each reel; the
  hero device then runs from 0:10.
- Shrink each reel's hero-device runtime by about 3s accordingly, without adding cuts.

## Production notes

- **Build path.** Remotion, one composition per reel. Because structures differ, each reel gets its own
  scene file (`video/src/reels/<slug>.tsx`) sharing only the atoms (`Pill`, `Avatar`, tokens, end card),
  not the 2x2-panel choreography, which stays with the earlier general trailer.
- **Differentiation checklist** (each reel must pass): different hero device, layout grid, camera move,
  pacing and music tempo. If two reels look alike, redo one.
- **Review gates.** Healthcare gets a claims and patient-data review. All reels: synthetic data only.
- **Suggested build order.** Manufacturing (strongest hook, proves the reverse trace), Retail, Digital &
  Technology, Food & Hospitality, Real Estate, Education, Personal & Local, Professional, Healthcare.
- **Open decisions.** VO yes or no (scripts include lines either way); music licensing; whether the end
  card uses the site's weight-300 headline exactly.
