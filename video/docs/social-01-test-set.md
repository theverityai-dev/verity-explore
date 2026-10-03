# Social test set 01

Built with `.claude/skills/verity-social-design`. Code: `src/social/` (`kit.tsx`, `Creatives.tsx`). Render any one with
`npx remotion still src/index.ts <id> renders/social/<id>.png`. Outputs: `renders/social/`.

| Creative | Composition id | Archetype | Content source |
|---|---|---|---|
| Static problem post | `Social-Post01-Problem` | A, editorial statement plus the broken record line | `index.html` hero sub; retail context in `content/industries.js` |
| Carousel, Food & Hospitality (6 slides) | `Social-Carousel01-S1`…`S6` | H: hook, problem, insight, solution, example, CTA on one wide canvas | `content/businesses/restaurants.js` (hero, overview, panel) |
| Meta ad, pain-led | `Social-Ad01-PainLed` | B, UI hero bleed | `index.html` hero; panel from `content/businesses/retail-stores.js` |

## Ad copy (outside the image)

- Primary text (hook within 125 characters): "Orders in one app, stock in a sheet, approvals on WhatsApp. Verity puts the
  records behind your business on one system."
- Headline (up to 40 characters): "Run the business as one"
- Description (up to 30 characters): "Works alongside your setup"

## Quality gate

| Check | Post 01 | Carousel 01 | Ad 01 |
|---|---|---|---|
| One focal point | The statement | One statement per slide; the panel on slide 5 | Hero, then panel |
| Text anchors named in code | Cap line y 200; record line 120 above the bottom margin | Same cap line on every slide; the record line crosses the seams | Support 40 under the hero; CTA and panel on the hero's left edge |
| Hero size and breaks | 88px, written breaks | 96px, written breaks | 96px, written breaks |
| Nothing under 24px | Yes | Yes (UI text 22-28px at 1.5x) | Yes (UI at 1.4x) |
| Brand | Dark world, Inter 300 two-tone, accent only on the logomark | Accent only on connected state, the focus row and the CTA underline | Accent pill, live state and the focus row |
| Static quality | Passes | Passes | Passes |

Fixed during the gate:

- The slide 5 panel bled into the CTA slide; it now ends on the 5/6 seam.
- The slide counter sat under the bleeding panel; it moved to the top-right furniture position.

Not yet checked: on-device view in the Instagram app, and a 9:16 story variant of the ad.
