# IND: ten industry reels, one campaign

Ten 9:16 Verity Meta reels, one per industry, all in the format of the accepted R09 reel
(`video/renders/ads/R09/verity-meta-R09-9x16-v1-bgm.mp4`). Each opens on a pain a specific business owner recognises
("yeh toh mere business ki baat ho rahi hai"), turns on "the problem isn't the X, it's the missing system", then runs the
**identical** ending: Verity understands first and builds around the business, ₹5,000 Business Analysis Blueprint FREE,
IIT/IIM-selected professionals, "Limited time offer.", one call to action.

Status of the series: **brief**. No reel is built. Decisions are settled in `00-decisions.md`.

## The ten

| ID | Industry | Verity hub (`content/industries.js`) | Owner who should feel understood | Brief |
|---|---|---|---|---|
| IND01 | Retail & Commerce | `retail-commerce` | Shop and store owners juggling stock, sales, reorders | `industries/IND01-retail-commerce.md` |
| IND02 | Food & Hospitality | `food-hospitality` | Restaurant and cafe owners: kitchen, staff, billing, wastage | `industries/IND02-food-hospitality.md` |
| IND03 | Professional Services | `professional-services` | Firms chasing client status, deadlines and invoices | `industries/IND03-professional-services.md` |
| IND04 | Healthcare | `healthcare` | Clinics: appointments, billing, staff coordination | `industries/IND04-healthcare.md` |
| IND05 | Real Estate | `real-estate-construction` | Firms with leads, site visits and broker follow-ups | `industries/IND05-real-estate.md` |
| IND06 | Manufacturing | `manufacturing-b2b` | Factories: stage, material, workers, dispatch | `industries/IND06-manufacturing.md` |
| IND07 | Personal & Local Services | `personal-local-services` | Service teams: staff location, job status, collections | `industries/IND07-personal-local-services.md` |
| IND08 | Digital & Technology | `digital-technology` | Agencies and software teams: projects, deadlines, capacity | `industries/IND08-digital-technology.md` |
| IND09 | Wholesale & Distribution | `manufacturing-b2b` (types: distributors, wholesalers, medical-distributors) | Dealers' orders, outstanding, dispatch | `industries/IND09-wholesale-distribution.md` |
| IND10 | Security & Housekeeping Services | `personal-local-services` (type: `cleaning-services`) | Contractors who cannot prove from head office who stood on which site | `industries/IND10-security-housekeeping.md` |

Education (a Verity hub) has no reel; see decision D-1. IND10 was added from a tenth script (guards and housekeeping).

## Same campaign, not the same reel

The opening is shared in *structure* (a question, the pain, the freeze, "it isn't the X", then the shared tail) but not in
*content or look*. Each reel gets its own domain world and its own signature animation (a scanning shelf, a ticket rail, a
conveyor line, a route map, a 20-versus-18 headcount gap, and so on), drawn from that business's real objects. The shared
parts are only the dark stage, the type, the phone thread device, the Verity reveal, the offer, the credibility and the end card.
That makes the creatives comparable on hook while each owner still sees their own business.

## Documents

| File | What it holds |
|---|---|
| `00-decisions.md` | Settled decisions: the founder's answers and the defaults chosen |
| `01-format-and-timing.md` | Shared vs unique parts, the timed master tail, audio plan, length math |
| `02-build-plan.md` | The shared engine plus per-reel scenes, exact code changes, per-reel checklist, order |
| `03-vo-recording-sheet.md` | The ten opening scripts, the master tail, recording notes |
| `industries/IND0N-*.md` | One brief per reel: VO, on-screen plan, props, modules, risks |

## Folder per reel

When a reel starts, create `video/ads/series/IND-industry-reels/IND0N/` for `vo/` (raw, picked, `words.json`) and its
`REPORT.md` (audit and defect list). The briefs in `industries/` stay as the spec.

## Naming

Ad ID `IND01`..`IND10` (hook variants `-H2`). Render `verity-meta-IND01-9x16-v1.mp4` in `video/renders/ads/IND/`; never
overwrite a version. Composition `Ad-IND01-Retail-9x16`, script `render:ad-ind01`. Status values as `video/ads/README.md`.

## Rules that carry over from R09

Dark world, light objects. English on-screen text, Hinglish voice, no subtitles. Text lands once and stays still (measured
with `region-stability.sh`). The offer frame is the cleanest in the film. Props are invented and labelled sample data; there
are no metrics, customer names or testimonials. The music drop lands on the Verity reveal.



