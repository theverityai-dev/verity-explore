# Verity industry video series — content plan

One 9:16 video per Explore industry category (9 videos, covering all 123 business types).
Each reuses the confirmed "data-flow simulation" format from `saas-trailer-9x16.md`:
fragment, connect, transform, drill down, surface, reorganize, converge.

## Shared spec

- 1080x1920, 30fps, 26s, light theme, accent `#0A84FF` (tokens live from `css/verity.css`).
- Remotion comp in `video/src/Trailer.tsx`. Make it data-driven: one config object per video
  (objects, chain cards, kanban columns, KPIs, captions), so each video is a config, not a rewrite.
- Beat sheet is fixed, only the content changes:
  - 0-4s: eight scattered industry objects, out of sync ("Right now, your X is scattered").
  - 4-7s: cursor selects the anchor record, connections draw.
  - 7-11s: drill into the record, chain of three cards (anchor, money, fulfilment).
  - 11-16s: fulfilment becomes an operations workflow, task moves through stages.
  - 16-20s: pull-back, KPI and chart update live.
  - 20-23s: panels orbit into one interface.
  - 23-26s: "One operating system for {industry}." / VERITY / theverityai.xyz.
- All data is synthetic. No real names, no medical or legal claims, no fake testimonials.
- Post caption + link to the matching `/industries/{slug}/` page. First frame must be the scattered-objects hook.

## The nine videos

| # | Industry (types) | Slug | Hook line | Scattered objects (0-4s) | Chain: anchor, money, fulfilment | Ops board columns | KPIs that update |
|---|---|---|---|---|---|---|---|
| 1 | Retail & Commerce (20) | `retail-commerce` | "Your store is scattered." | SKU, Order, Customer, Stock, Supplier, Invoice, Loyalty, Return | Customer, basket $, order #1042 | Picking, Packed, Dispatched | Sales, Orders, Stock-outs |
| 2 | Food & Hospitality (14) | `food-hospitality` | "Your kitchen is scattered." | Reservation, Table, Order, Recipe, Ingredient, Shift, Bill, Supplier | Guest, table booking, kitchen order | Received, Cooking, Served | Covers, Food cost %, Table turns |
| 3 | Professional Services (15) | `professional-services` | "Your practice is scattered." | Client, Matter, Timesheet, Invoice, Document, Deadline, Partner, Payment | Client, engagement fee, matter | To do, In review, Filed | Billable hours, Realisation %, Collections |
| 4 | Healthcare (11) | `healthcare` | "Your clinic is scattered." | Patient, Appointment, Consultation, Prescription, Lab test, Bill, Doctor, Bed | Patient, appointment, lab order | Registered, In consult, Discharged | Footfall, Wait time, Occupancy |
| 5 | Education (12) | `education` | "Your institute is scattered." | Student, Enquiry, Class, Attendance, Fee, Exam, Teacher, Timetable | Enquiry, admission fee, enrolment | Applied, Admitted, Enrolled | Admissions, Attendance %, Fees collected |
| 6 | Real Estate & Construction (10) | `real-estate-construction` | "Your projects are scattered." | Lead, Unit, Site visit, Booking, Contractor, Milestone, Payment, Approval | Lead, booking amount, unit allotment | Planned, Under construction, Handed over | Bookings, Collections, Milestone % |
| 7 | Manufacturing & B2B (13) | `manufacturing-b2b` | "Your plant is scattered." | RFQ, Quote, Work order, BOM, Batch, Machine, Dispatch, Invoice | Buyer, quote value, work order | Queued, In production, Dispatched | Output, OTIF %, Scrap % |
| 8 | Personal & Local Services (15) | `personal-local-services` | "Your appointments are scattered." | Member, Booking, Package, Stylist/Trainer, Payment, Renewal, Review, Slot | Member, package sold, booking | Booked, In service, Completed | Bookings, Retention %, Revenue/day |
| 9 | Digital & Technology (13) | `digital-technology` | "Your pipeline is scattered." | Lead, Trial, Subscription, Ticket, Sprint, Invoice, Client, Repo | Lead, contract value, project | Backlog, In progress, Shipped | MRR, Churn %, Tickets closed |

Type counts sum to 123, matching the published business pages.

## Per-video captions (in order, one per beat)

Pattern: `Right now` / `Select one` / `{Anchor}. {Money}. {Fulfilment}.` / `Operations` / `Live` / `Together` / outro.
Copy per video swaps only the nouns from the table. Keep each caption under 32 characters so it fits one line at 58px.

## Production order and cadence

1. Retail & Commerce (largest catalogue, broadest appeal, doubles as the template proof).
2. Food & Hospitality.
3. Professional Services.
4. Healthcare (extra review: synthetic data only, no outcomes claims).
5. Real Estate & Construction.
6. Manufacturing & B2B.
7. Education.
8. Personal & Local Services.
9. Digital & Technology.

Suggested cadence: build the config-driven template once, then each video is about one config
plus a render. Post 2-3 per week. Each post links to its `/industries/{slug}/` page.

## Later extension (not in scope now)

The 123 business-type pages (e.g. `/businesses/cafes/`) could each get a 12-15s cut from the same
template by swapping the config. Do this only after the nine category videos prove the format.

## Open decisions for the user

- Voiceover or text-only (default: text-only, no audio, per the trailer brief).
- Whether to add a sparse music bed.
- Contrast note: white text on `#0A84FF` is 3.6:1, which passes only for large or bold text. If
  small button labels matter for accessibility, switch `--accent-ink` to dark (`#0f1115`, about 5:1).
