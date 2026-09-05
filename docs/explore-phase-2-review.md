# Verity Explore — Phase 2 review

The question Phase 2 exists to answer, from section 57 of the brief: *if these
pages feel like the same page with the nouns swapped, the architecture is not
good enough.* The four pages compared are Schools and Law Firms — which use none
of Verity's inventory or logistics capability — against Jewellery Stores and
Manufacturers, which use most of it.

A second question was added by the positioning decision taken before this
review: Verity is a **general operational layer**, with inventory and logistics
as its initial wedge and strongest shipped capability, but not as the definition
of the category. The review therefore also asks whether the pages describe an
operational layer or a supply-chain tool.

## Verdict

**The architecture passes the differentiation test, and failed the positioning
test in three specific places, which have been fixed.**

## Differentiation — measured

Six-word phrase overlap across the four pages, computed on the content model
rather than the rendered HTML so shared chrome does not flatter the result:

| Pair | Overlap |
|---|---|
| Schools / Law Firms | 2.9% |
| Schools / Jewellery Stores | 2.1% |
| Schools / Manufacturers | 3.0% |
| Law Firms / Jewellery Stores | 1.3% |
| Law Firms / Manufacturers | 2.5% |
| Jewellery Stores / Manufacturers | 2.2% |

The quality gate warns at 28% and fails at 40%. Nothing is close.

Section by section, the highest overlap between any two of the four pages is 5%
(modules) and 4% (FAQs). Overview, challenges, workflows, roles, intelligence
and automations all sit at 0–1%.

The one apparent exception is the AI section at 11% between Schools and Law
Firms. Isolating it shows the cause is not the content:

- AI questions alone: **0.0% overlap on every pair.**
- The overlap comes entirely from the four product-claim bullets — grounded,
  permission-aware, actionable, traceable — which are template constants
  describing Verity rather than the business, plus two sentences of scaffolding
  in the section lede.

Product claims *should* be identical across pages; that is what makes them
claims rather than copy. This is the correct behaviour, not a defect.

## Differentiation — read

The measurements say the words differ. The relevant question is whether the
*thinking* differs, which only reading answers.

| | Schools | Law Firms | Jewellery Stores | Manufacturers |
|---|---|---|---|---|
| Central problem | The same person exists in five registers | Engagement health is invisible until review | Capital is sitting somewhere untracked | The delay is visible; the cause is not |
| Unit of work | An admission | A matter | A custom order | A work order against a batch |
| Characteristic failure | An application stalls on an unowned document | Work goes unbilled and scope uncharged | A piece leaves on approval and is not chased | A quality hold blocks three dispatches silently |
| Roles | Principal, Administrator, Accounts, Admissions, Coordinator | Managing partner, Practice head, Responsible partner, Associate, Practice manager | Owner, Showroom manager, Sales staff, Workshop supervisor, Accounts | Plant head, Production supervisor, Quality, Purchasing, Dispatch |
| Wedge vocabulary density | 0 per 1,000 words | 0 per 1,000 words | 12.3 | 22.6 |

The roles are the clearest evidence. A template performing noun substitution
produces the same five roles with different labels. These are five genuinely
different sets of people asking five genuinely different questions, and the
questions follow from the business rather than from the section heading.

The zero wedge-vocabulary density on Schools and Law Firms is the other
important number: the template does not force inventory language onto
businesses that have no inventory. It was able to describe both without
reaching for the capability the product is strongest at.

## Positioning — three failures found

The differentiation held. The positioning did not, in the places where the wedge
is real.

**1. Manufacturers described a supply-chain product, not Verity.** The page used
all four wedge capabilities and only four of the eight primitives, omitting
relationships, records, communication and control. That is a page about
inventory, orders, suppliers and logistics — which is precisely the framing the
positioning decision rejects. A manufacturer has customers behind its orders,
specifications and test reports behind its batches, shop-floor context behind
its exceptions, and traceability obligations that make audit a primitive rather
than a feature. All four are now on the page, taking it to 8/8 primitives
alongside 4/4 wedge — which makes it the strongest demonstration in the set that
Verity is an operational layer whose wedge happens to run deepest here.

**2. Three industry hubs led with the wedge.** Retail & Commerce covered three
primitives, Manufacturing & B2B three, and Food & Hospitality just one. Their
capability sets have been rebalanced to lead with primitives and follow with the
wedge. The Manufacturing hub now opens on Work, Records and Workflows rather
than on Inventory and Orders.

**3. Two business pages sat at the floor.** Restaurants omitted people and work
while carrying inventory; Distributors omitted records and communication while
carrying all four wedge capabilities. Both have been corrected. Every published
page now covers seven or eight of the eight primitives.

## What changed

- `content/capabilities.js` — capabilities reordered so the eight primitives
  come first and the wedge follows, with the positioning decision recorded in
  the file header. New exports: `PRIMITIVES`, `WEDGE`,
  `MIN_PRIMITIVES_WITH_WEDGE`.
- `scripts/qa.mjs` — a positioning guard. Any business page or industry hub that
  uses a wedge capability must cover at least five primitives, or the build
  fails. It also warns when a page omits Verity AI or reporting, and fails when
  a content file's slug is not in the registry.
- `content/businesses/manufacturers.js` — added relationships, records, control
  and communication. Now 16 modules.
- `content/businesses/restaurants.js` — added people and work. Now 14 modules.
- `content/businesses/distributors.js` — added records and communication. Now 14.
- `content/industries.js` — rebalanced capability sets for Retail & Commerce,
  Food & Hospitality and Manufacturing & B2B; added a `lower` field so
  "Manufacturing & B2B" no longer renders as "manufacturing & b2b" in prose.

The guard is the durable part. It caught all four positioning failures on its
first run, and it will catch the same mistake on each of the remaining 113 pages
without anyone having to remember the decision.

## Primitive coverage after the fixes

| Page | Primitives | Wedge | Modules |
|---|---|---|---|
| Schools | 8/8 | 0/4 | 12 |
| Law Firms | 8/8 | 0/4 | 11 |
| Marketing Agencies | 8/8 | 1/4 | 12 |
| Clinics | 8/8 | 1/4 | 12 |
| Real Estate Agencies | 8/8 | 1/4 | 12 |
| Manufacturers | 8/8 | 4/4 | 16 |
| Jewellery Stores | 7/8 | 3/4 | 12 |
| Restaurants | 7/8 | 3/4 | 14 |
| Salons | 7/8 | 2/4 | 12 |
| Distributors | 7/8 | 4/4 | 14 |

## Judgement calls left standing

**The Jewellery Stores hero — "A jewellery store is an inventory problem wearing
a retail costume" — stays.** It is the sharpest instance of wedge-as-definition
in the set, and it survives review because it defines the *business*, not
Verity. A jewellery store genuinely is an inventory problem. The sentence would
be wrong if it said Verity is an inventory product; it does not.

**Structural uniformity is a real weakness, and is being addressed by relaxing
the rule rather than by retrofitting.** Before this review every page had
exactly twelve modules, six workflows, nine FAQs, five roles and nine AI
questions. That uniformity is slot-filling: the template was dictating shape
rather than the business dictating depth, which section 35 of the brief warns
against. It has not produced duplication — overlap is 1–3% — so the content is
real, but the counts should follow the business. Law Firms already ran at
eleven modules, and Manufacturers, Restaurants and Distributors now run at
sixteen and fourteen. For the remaining pages the section counts are a range,
not a target: a specialised business with a narrow operation should produce a
shorter page, and that is a correct outcome rather than a thin one.

## Scaling from here

The architecture is confirmed. Adding a business remains one content file, and
the two systems that keep the content honest are both mechanical rather than
discretionary:

1. **Evidence-first claims.** Every capability carries the evidence that
   supports it; `FORBIDDEN_CLAIMS` lists what is not evidenced anywhere; the
   gate fails the build on a violation. It caught two during the first ten.
2. **The positioning guard.** Wedge use requires primitive coverage. It caught
   four on its first run.

Rollout order stands as published in `content/businesses/registry.js` — 45 Tier 1
remaining, 37 Tier 2, 31 Tier 3. Per the positioning decision, the order is
**not** being reordered toward inventory-heavy businesses: verticals with no
inventory are first-class cases, and Schools and Law Firms are the evidence that
they produce good pages.

Two items from the Phase 1 report remain open and are unaffected by this review:
no Open Graph images, and `vercel.json` unverified against a real deployment.
