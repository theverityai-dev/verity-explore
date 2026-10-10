# Verity Explore — Phase 0 Audit

Date: 2026-09-05. Scope: `explore.theverityai.xyz`, the Verity landing page repo,
and the product reference mock in this repository.

---

## 1. Current architecture

There is no framework, no router, no build step and no package manifest. The
repository is served to Vercel as raw static files.

| Concern | Reality |
|---|---|
| Framework | None. Hand-authored HTML. |
| Routing | None. A single `index.html` of 93 KB using in-page anchors (`#platform`, `#primitives`, `#intelligence`, `#roles`, `#implementation`). |
| Styling | Nine hand-written stylesheets under `css/`, 4,425 lines, cache-busted with `?v=64`. Tokens live in `css/verity.css` with a bridge layer in `css/sections.css`. |
| JavaScript | 509 lines across three files: `js/ui.js` (nav, theme toggle, schedule progress, locations toggle), `js/motion.js` (reveal system), `js/hero-assemble.js` (hero scroll scrub). One vendored dependency, `js/vendor/lenis.min.js`. |
| Data architecture | None. Every string is inline in the HTML. The only structured data in the codebase is a six-item `LOCATIONS` array in `js/ui.js`. |
| Fonts | Inter from Google Fonts, weights 200–600. |
| Theme | `data-theme` on `<html>`, light default, dark opt-in, persisted to `localStorage` under `verity-theme`, committed before first paint by an inline script. |

**The most consequential finding:** `www.theverityai.xyz` and
`explore.theverityai.xyz` currently serve byte-identical responses. Explore is not
a separate property — it is a second domain pointing at this same deployment.
Anything added to this repository appears on both hostnames, which would create
duplicate content across two domains from day one.

## 2. Existing page and component audit

`index.html` contains fourteen sections in this order: hero, fragmentation
(`#how-it-works`), platform (`#platform`), command centre (`#command`),
intelligence (`#intelligence`), roles (`#roles`), primitives (`#primitives`),
schedule (`#schedule`), workforce (`#workforce`), locations (`#locations`),
migration (`#migration`), implementation (`#implementation`), closing CTA
(`#cta`), footer.

There is no component layer. Every product surface is hand-authored DOM. The
design system is documented rigorously in `design-system.md` and `bar.md`, both of
which read as an enforceable contract rather than a mood board — token-only
colour, one entrance motion, three section tones, one panel material, weight 300
headings, hairline band separation. That contract is the single greatest asset
for this project: it means Explore pages can be generated and still look
hand-made, provided the generator emits markup that obeys it.

`verity-overview.html` is a standalone reference mock of the actual product UI.
It does not share the site's stylesheets; it defines its own token block and uses
the older accent `#00D1B2` (since moved to `#0A84FF`, now also in the mock).

## 3. Actual Verity capability inventory

Two sources disagree about what Verity is, and the disagreement must be resolved
before a single business page is written.

**Source A — the product mock** (`verity-overview.html`). Its sidebar is the most
concrete evidence available of the shipping application:

> Overview · Inventory · Orders · Logistics · Suppliers · Reports · Analytics ·
> Workflows · Settings

The user context is "John Carter, Operations Admin, All Warehouses". The Overview
page shows Orders, Stock overview, Reorders and Logistics. This is a
supply-chain and inventory operations product.

**Source B — the live landing page.** It positions Verity as an abstract
operational layer built on eight primitives: People, Work, Relationships,
Records, Workflows, Communication, Intelligence, Control. On top of those it
claims a Command centre, Verity AI (grounded, permission-aware, actionable,
traceable — ask, understand, act), four role experiences (Operations Lead, Sales
Manager, Finance Controller, HR Manager), a Schedule timeline, Workforce
assignment and attendance, multi-site Locations with regional rollup, Migration
from existing systems, and a four-week Implementation engagement.

**Resolution.** Source B is Verity's own published claim set, so repeating it is
not invention. Source A is proof that the record-level machinery exists. The
canonical registry should therefore be the union, tagged by evidence strength,
and business pages should express business nouns in terms of the eight primitives
rather than inventing a module per business.

**Explicitly not evidenced anywhere — must never be claimed:** point of sale,
payroll processing, statutory accounting or GST filing, appointment booking,
marketing campaign sending, an e-commerce storefront, WhatsApp as a product
integration, or any named third-party integration. The only systems named
anywhere are migration sources: Excel, Google Sheets, legacy ERP, CRM.

**Conversion reality.** There is no application, no signup and no trial. The only
CTAs in the entire site are a WhatsApp link and two `mailto:` links. Explore
pages must convert to a conversation, not to a product that does not exist yet.

## 4. SEO audit

The site has effectively no technical SEO. Counting occurrences in `index.html`:

| Element | Present |
|---|---|
| `<title>`, `<meta name="description">` | Yes, one of each, sitewide |
| Canonical | No |
| Open Graph | No |
| Twitter/X card | No |
| JSON-LD structured data | No |
| `robots.txt` | No — returns 404 |
| `sitemap.xml` | No — returns 404 |
| Analytics | No |
| Breadcrumbs | No |
| Indexable URLs | One |

Heading structure is sound: exactly one `<h1>`, section headings are `<h2>`, and
every section carries `aria-labelledby` pointing at its own heading. Accessibility
is genuinely good — skip link, real buttons, `aria-pressed`, `aria-selected`,
`role="img"` labels, and a `prefers-reduced-motion` block.

So the starting position is one indexable URL with strong on-page quality and
zero discovery infrastructure. Everything in section 40 of the brief has to be
built from nothing, which is easier than correcting bad implementations.

## 5. Recommended URL architecture

```
https://explore.theverityai.xyz/                      Explore hub
https://explore.theverityai.xyz/industries/           Industry index
https://explore.theverityai.xyz/industries/<slug>/    9 industry hubs
https://explore.theverityai.xyz/businesses/<slug>/    123 business pages
https://explore.theverityai.xyz/capabilities/<slug>/  Capability pages (later phase)
```

Business pages sit flat under `/businesses/` rather than nested under their
industry. Nesting would bake the taxonomy into the URL, and a business that moves
category later would need a redirect. The industry relationship is carried by
breadcrumbs, internal links and structured data instead, which is where Google
reads hierarchy anyway.

Trailing slashes, lowercase, hyphens, no IDs, one canonical per page. The
sub-page expansion in section 62 of the brief (`/businesses/restaurants/inventory`)
stays available because the business path is a directory.

**Hostname split.** `vercel.json` should rewrite the Explore host's root to the
Explore hub and redirect the Explore paths on `www` to the Explore host, so each
page has exactly one reachable URL. Canonicals are absolute and always point at
the Explore host; the landing page canonical points at `www`.

## 6. Recommended content architecture

```
content/capabilities.js     Canonical Verity capability registry, evidence-tagged
content/industries.js       9 industry hubs
content/businesses/*.js     One file per business domain
```

A business file carries only what is specific to that business: its terminology,
its hero, its overview, its problems, per-capability overrides, workflows, AI
questions, automations, roles, KPI examples, FAQs, related businesses, metadata
and a publication status of `draft`, `review` or `published`. Only `published`
pages are built and enter the sitemap.

Capability descriptions come from the registry by default and are overridden per
business, so a jewellery page says "pieces, collections and stock movement" where
a restaurant page says "ingredients, consumables and stock movement" — same
capability, business-specific sentence, one place to correct a product claim.

## 7. Recommended component architecture

A Node build script renders the content model to static HTML at author time and
commits the output. This keeps the deployment exactly as it is today — pure
static files, no server, no hydration, no JavaScript shipped per page beyond the
three files already in use — while making a new business page a data change.

Section renderers mirror the existing page's vocabulary so generated pages and
the hand-built landing page share one material: `section`, `panel`, `label`,
`metric strip`, `list rows with state dots`, `reveal`. One new stylesheet,
`css/explore.css`, adds only what the existing nine do not already provide.

## 8. Priority analysis

The brief's tiers are sound on search demand, but product fit should reorder the
first wave. Verity's evidenced strengths are records, inventory, orders,
suppliers, logistics, workflows, multi-site rollup, workforce assignment and
grounded AI over operational data. Businesses that exercise the most of that
machinery make the most honest and the most convincing pages.

Recommended first ten, chosen to span every industry group and to stress the
template with genuinely different shapes:

1. Jewellery Stores — high-value records, inventory valuation, repeat customers
2. Restaurants — orders, ingredients, daily operations, peak periods
3. Real Estate Agencies — pipeline, leads, site visits, agents
4. Manufacturers — production work, suppliers, QC, plants
5. Distributors — orders, logistics, suppliers, multi-warehouse
6. Clinics — appointments as work, patient records, staff rosters
7. Schools — people-heavy, admin workflows, no inventory
8. Law Firms — matters as work, documents, no inventory, no logistics
9. Salons — small, service-only, staff and repeat customers
10. Marketing Agencies — projects, clients, utilisation, deliverables

Items 7–10 are deliberately weak-inventory businesses. If the template still
reads well when Inventory and Logistics are absent, the architecture is honest.
If it does not, the template is doing noun substitution and must be fixed before
scaling — which is exactly the test section 57 of the brief asks for.

## 9. Implementation plan

- **Phase 0** — capability registry, content model, generator, SEO system,
  `robots.txt`, `sitemap.xml`, `vercel.json`, QA script, `css/explore.css`.
- **Phase 1** — the ten representative businesses above, plus the nine industry
  hubs and the Explore hub.
- **Phase 2** — review the ten against the quality bar, refactor the template.
- **Phase 3** — remaining Tier 1. **Phase 4** — Tier 2. **Phase 5** — Tier 3.
- **Phase 6** — global QA, crawl, duplication check, performance pass.

## 10. Risks and contradictions

1. **Two hostnames, one deployment.** Duplicate content across `www` and
   `explore` unless the hostname split lands with Phase 0.
2. **The product mock and the landing page describe different products.** The
   registry resolves this by tagging evidence, but the positioning question is
   the user's to settle: is Verity a supply-chain operations product that also
   handles people and finance, or a general operational layer that happens to
   ship inventory first?
3. **No product to convert into.** Every CTA is WhatsApp or email. Pages that
   imply a signup would be lying.
4. **Rupee-denominated, India-centric examples.** The landing page uses ₹, Indian
   cities and Indian approval thresholds. Explore pages should stay consistent
   with that unless the target market is wider.
5. **`?v=64` cache busting is manual.** 123 pages referencing nine stylesheets by
   hand-edited version string will drift. The generator must own that string.
6. **Content volume is the real cost.** Ten pages at 2,500–5,000 words of
   genuinely differentiated, product-accurate prose is the bulk of the work, and
   it cannot be templated without becoming the noun substitution the brief
   forbids.
