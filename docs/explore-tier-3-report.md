# Verity Explore — Tier 3 completion and full registry report

All 123 business domains across the nine industry categories are now written,
built and published. This report records what the final wave covered, how the
pages were kept genuinely different from one another, and what remains open.

## Scope completed

| Tier | Pages | State |
| --- | --- | --- |
| Tier 1 | 55 | Published |
| Tier 2 | 37 | Published |
| Tier 3 | 31 | Published |
| **Total** | **123** | **Published** |

Tier 3 was delivered in four industry waves:

- **Real estate and construction (5)** — architects, interior design firms, home
  builders, facility management, building material suppliers.
- **Manufacturing and B2B (8)** — furniture, chemical, pharmaceutical and food
  manufacturers, packaging companies, importers, exporters, industrial suppliers.
- **Personal and local services (10)** — fitness studios, yoga studios, car
  rentals, car washes, auto repair shops, cleaning services, laundry services,
  repair services, printing businesses, tailors.
- **Digital and technology (8)** — online marketplaces, app developers, web
  development agencies, cybersecurity companies, data companies, AI companies,
  gaming studios, creator businesses.

## How differentiation was maintained at 123 pages

The risk at this scale is noun substitution: the same page with a different
business name in it. Every page was written from the specific thing that
constrains or exposes that business, and the module set, workflows, panel
figures, questions and FAQs follow from that constraint rather than from a
template.

Some examples from Tier 3 where two adjacent domains had to be separated
deliberately:

- **Architects against architecture firms.** The firm page is about fees staged
  differently from effort. The architect page is about personal capacity: the
  registered signature cannot be delegated, so the review queue is the practice's
  real throughput limit.
- **Interior design firms against interior designers.** The designer page is
  about procurement lead times. The firm page is about studio economics, where a
  design fee quietly funds sourcing and site hours across many concurrent
  projects.
- **Packaging companies against printing businesses.** Packaging is setup cost
  recovered over a run length, with customer-owned tooling. Printing is many
  small jobs against short promises where the approved proof decides who pays
  for a reprint.
- **Fitness studios against gyms and yoga studios.** Gyms are a subscription
  retention problem, fitness studios are perishable class capacity and no-shows,
  and yoga studios are small classes where the teacher pay basis rather than the
  attendance decides which classes pay.
- **AI companies against SaaS companies.** SaaS is a business measured less well
  than its own product. AI adds a variable cost per request against a fixed
  price per seat, plus model versions that drift in production.

## Measured differentiation across the whole set

Computed over the rendered pages using the same six-gram shingle comparison the
quality gate applies:

| Measure | Whole page | Main content only |
| --- | --- | --- |
| Pages compared | 123 | 123 |
| Pairs compared | 7,503 | 7,503 |
| Highest overlap | 16.1% (fashion stores / shoe stores) | 14.4% |
| Median overlap | 8.0% | 6.0% |
| Mean overlap | 7.9% | 6.0% |
| Pairs above 20% | 0 | 0 |

The gate warns at 28% and fails at 40%. No pair in the published set reaches
even 20%, and the highest pair is two adjacent retail domains that genuinely
share a great deal of operational shape.

Length across the 123 pages runs from 2,460 to 4,352 words with a median of
2,746, all above the 1,800-word thin-content threshold.

## Quality gate

`node scripts/build.mjs && node scripts/qa.mjs` passes with no failures and no
warnings across 134 pages (123 business pages, 9 industry hubs, the Explore
index and the supporting files). The gate covers, per page: unique title and
meta description within length limits, canonical accuracy, a single `h1`,
indexability, Open Graph and Twitter tags, a primary call to action,
breadcrumbs, valid JSON-LD with FAQ markup matching visible content, absence of
forbidden capability claims, word count, dead internal links, missing assets,
sitemap inclusion, and cross-page phrasing overlap. It also enforces the
positioning rule: any page that uses a wedge capability must cover at least five
of the eight primitives.

## Positioning

Every Tier 3 page follows the general operational-layer positioning. Inventory
and logistics appear where the business genuinely has them — building material
suppliers, furniture manufacturers, importers — and are absent where it does
not, as in architects, cybersecurity companies or creator businesses. No page
claims a capability outside the verified registry.

## Open items

These carry forward unchanged from Phase 1 and are not blocked by content:

- No Open Graph images exist; pages reference the favicon only.
- `vercel.json` host rewrites and redirects have not been verified against a
  real deployment.
- `SITE.assetVersion` in `lib/render.js` and the hand-written `index.html`
  cache-busting query string must be bumped together when assets change.
