# Verity Explore — Tier 1 complete

55 of 55 Tier 1 business pages written, plus the nine industry hubs and the
Explore hub. 66 pages total, all passing the quality gate.

## Coverage

| Industry | Tier 1 pages |
|---|---|
| Retail & Commerce | 10 |
| Food & Hospitality | 7 |
| Professional Services | 8 |
| Healthcare | 5 |
| Education | 5 |
| Real Estate & Construction | 6 |
| Manufacturing & B2B | 6 |
| Personal & Local Services | 5 |
| Digital & Technology | 5 |

## Differentiation

Across 1,485 page pairs, computed on the content model rather than rendered
HTML so shared chrome does not flatter the result:

- Highest overlap: **6.8%** (cosmetics stores / pharmacies — both batch-and-expiry
  businesses, and the closest pair in the set)
- Top five: 6.8%, 6.5%, 6.5%, 6.2%, 6.1%
- Median: **2.5%**
- Quality gate warns at 28% and fails at 40%

Page length ranges 2,900 to 4,300 words, modules 10 to 16 per page. Both follow
the business rather than filling a fixed template, which was the Phase 2
correction.

## Positioning

Every page covers at least six of the eight primitives; the lowest is
supermarkets at 6/8. The positioning guard — any page using a wedge capability
must cover at least five primitives — held throughout without a single failure
after the Phase 2 fixes.

## Quality gate

`node scripts/qa.mjs` checks title, description, canonical match, single `<h1>`,
robots, Open Graph, Twitter card, CTA, breadcrumb, JSON-LD validity, FAQ markup
against visible content, forbidden claims, primitive coverage, registry
membership, related-slug validity, thin content, duplicate metadata, dead links,
missing assets, sitemap inclusion and cross-page duplication.

It caught four unsupported claims across the build. Two were genuine
(`point of sale` in an early salons draft, and again in spas); two were honest
disclaimers tripping the deliberately blunt substring match (`appointment
booking`, `storefront`). The trade-off is documented in `content/capabilities.js`:
a false positive costs one rewording, a false negative ships a false statement
about the product.

It also caught a `related` slug typo that was silently shrinking the internal
link graph, which is why that check was added.

## Remaining

68 businesses: **Tier 2** 37, **Tier 3** 31. The registry in
`content/businesses/registry.js` is the scope of record.

## Open items

Unchanged from Phase 1:

1. **No Open Graph images.** Pages declare the metadata but carry no image. A
   dynamic service is not possible on a static deployment; the options are a
   committed generated set or one image per industry.
2. **`vercel.json` unverified in production.** The hostname split behaves
   correctly by inspection but has not been observed on a real deployment. Worth
   checking both hostnames immediately after the first deploy.
3. **Asset version string.** `SITE.assetVersion` in `lib/render.js` owns the `?v=`
   parameter for generated pages; the hand-written `index.html` carries its own
   copy. Both must be bumped together when a stylesheet changes.
