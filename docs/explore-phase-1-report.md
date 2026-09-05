# Verity Explore — Phase 0 and Phase 1 report

## Completed

**Phase 0 — architecture.** A content model, a canonical capability registry, a
static-site generator, the full SEO layer, a hostname split and an automated
quality gate. The deployment remains pure static files; the generator runs at
author time and its output is committed, so Vercel needs no build step.

**Phase 1 — the first ten business pages, the nine industry hubs and the Explore
hub.** Twenty-one pages, all passing the quality gate.

## Files added

| Path | What it is |
|---|---|
| `content/capabilities.js` | Canonical Verity capability registry — 19 capabilities, each tagged with the evidence that supports it, plus the list of claims no page may make |
| `content/industries.js` | The nine industry hubs, with their own context, challenges and capability selection |
| `content/businesses/registry.js` | All 123 business domains with slug, name, industry and rollout tier |
| `content/businesses/*.js` | One file per written business. Ten so far |
| `lib/render.js` | Shared chrome: head, nav, breadcrumb, panel, metric strip, rows, CTA, footer, JSON-LD builders |
| `lib/business-page.js` | The master business page template |
| `lib/industry-page.js` | The industry hub template |
| `lib/hub-page.js` | The Explore hub and the industries index |
| `scripts/build.mjs` | Renders content to static HTML, writes `sitemap.xml` and `robots.txt`, prunes unpublished pages |
| `scripts/qa.mjs` | The automated quality gate |
| `css/explore.css` | The only new stylesheet. Zero hex literals; every colour resolves through an existing token |
| `vercel.json` | Hostname split and trailing-slash canonicalisation |
| `docs/explore-audit.md` | The Phase 0 audit |

## Architecture

**Data-driven pages.** Adding a business requires one content file and nothing
else. There is no per-business layout code, and the template contains no
sentence about any business or any claim about Verity — all of that comes from
content or from the capability registry.

**Publication gating.** A business page is built only when a content file exists
and its `status` is `published`. Everything else stays out of the build and out
of the sitemap, so the `draft` / `review` / `published` states are enforced by
the build rather than by discipline. Unpublished businesses still appear on the
hub as plain text, not as dead links.

**Capability registry as the single source of truth.** Every capability carries
an `evidence` field recording whether it is seen in the product reference, in
the live site, or both. Business pages reference capabilities by id and supply
their own business-specific sentence for each, so a product claim is corrected
in one place. `FORBIDDEN_CLAIMS` lists capabilities that are not evidenced
anywhere, and the quality gate fails the build if a page mentions one — it
caught two during authoring.

**Internal linking.** Related businesses are authored as intent, then filtered
to what actually exists and topped up from the same industry, so every business
page carries six live related links from the first ten pages onward rather than
an empty section that fills in later.

**Design system.** Generated pages emit the same class vocabulary as the
hand-built landing page — `.section`, `.panel`, `.label`, `.rows`,
`.metric-row`, `.btn--primary` — and use the existing site-wide `[data-reveal]`
entrance. `css/explore.css` adds only what the existing nine stylesheets do not
provide, with no hex literals and no second entrance motion.

## SEO

Every generated page carries a unique title and meta description, an absolute
canonical, robots directives, Open Graph and Twitter metadata, exactly one
`<h1>`, a visible breadcrumb with matching `BreadcrumbList` structured data,
`SoftwareApplication` markup and — where a visible FAQ exists — `FAQPage`
markup. `sitemap.xml` and `robots.txt` are generated from the published set;
both previously returned 404.

The hostname split in `vercel.json` resolves the duplicate-content problem
identified in the audit: `www` and `explore` were serving byte-identical
responses from one deployment. The Explore host's root now rewrites to the hub,
Explore paths on `www` redirect to the Explore host, and every canonical is
absolute to `explore.theverityai.xyz`.

## Businesses completed

Jewellery Stores, Restaurants, Real Estate Agencies, Manufacturers,
Distributors, Clinics, Schools, Law Firms, Salons, Marketing Agencies.

These span all nine industries and were chosen to stress the template. Four of
them — Schools, Law Firms, Salons and Marketing Agencies — have little or no
inventory and no logistics, which was the deliberate test: if the template still
reads well when the strongest capabilities are absent, the architecture is
honest rather than performing noun substitution.

Each page runs 2,700–3,900 words across hero, business context, terminology
mapping, challenges, twelve capability mappings, six workflows, an AI section
with nine business-specific questions, six automations, six intelligence areas,
five roles, nine use cases, migration and nine FAQs.

## Businesses remaining

113. Tier 1 has 45 left, Tier 2 has 37, Tier 3 has 31. The full scope and its
tier assignment is in `content/businesses/registry.js`; the priority reasoning,
including where it departs from the brief, is in section 8 of the audit.

## Quality gate

`node scripts/qa.mjs` checks every built page for title, description, canonical
match, single `<h1>`, absence of noindex, Open Graph, Twitter card, primary CTA,
breadcrumb, valid JSON-LD, FAQ markup that matches visible content, forbidden
capability claims, thin content, duplicate titles and descriptions, dead
internal links, missing assets, sitemap inclusion, and cross-page duplication
using six-word shingles. It exits non-zero on failure. All 21 pages pass with no
warnings, and the highest phrasing overlap between any two business pages is
well below the warning threshold.

## Issues

1. **The positioning contradiction is unresolved and is the user's to settle.**
   The product reference (`verity-overview.html`) shows a supply-chain product —
   Inventory, Orders, Logistics, Suppliers, Reports, Analytics, Workflows. The
   live landing page positions Verity as a general operational layer with eight
   primitives, four role experiences including Finance and HR, workforce
   attendance and multi-site rollup. The registry resolves this conservatively
   by tagging evidence and using the union, but the strategic question — is
   Verity a supply-chain product that also handles people and finance, or a
   general operational layer that shipped inventory first — affects which
   businesses deserve the deepest treatment.
2. **There is no product to convert into.** Every CTA on the site is WhatsApp or
   email, so Explore pages convert to a conversation. If a trial or signup ever
   exists, the CTA layer in `lib/render.js` is the single place to change.
3. **`vercel.json` is new and unverified in production.** The rewrite and the
   redirects behave correctly by inspection but have not been observed on a real
   deployment. Worth checking both hostnames immediately after the first deploy.
4. **Asset version string.** `SITE.assetVersion` in `lib/render.js` owns the
   `?v=` cache-busting parameter for generated pages. The hand-written
   `index.html` still carries its own copy at `?v=64`; the two must be bumped
   together when a stylesheet changes.
5. **No OG images.** Pages declare Open Graph metadata but no image. A dynamic
   OG image service is not possible on a purely static deployment; the practical
   options are a committed generated set or a small set of per-industry images.

## Recommended next phase

**Phase 2 — review before scaling**, exactly as the brief specifies. The ten
pages exist; the question is whether they read as ten different businesses or as
one page with the nouns changed. Read Schools and Law Firms against Jewellery
Stores and Manufacturers, since those pairs use the least common capability set.
Anything that needs to change in the template is cheapest to change now.

Two specific improvements worth making in Phase 2 before volume authoring
begins: a per-industry OG image set, and a decision on the positioning question
above, since it determines whether the remaining Tier 1 list should be reordered
toward inventory-heavy businesses.

**Phase 3** then completes Tier 1 at roughly the same depth. Authoring is the
real cost from here — the architecture makes a new page a content file, but the
content itself cannot be templated without becoming the noun substitution the
brief forbids.
