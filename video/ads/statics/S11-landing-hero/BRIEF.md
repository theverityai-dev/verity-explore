# S11 Landing hero

Status: approved for review   Theme: light (the site's own)   Canvas: 1080 x 1350 (Feed 4:5)
Engine: an HTML page that loads the landing page's own stylesheets (`css/*.css`) and reuses its classes and markup,
screenshotted by Remotion's headless Chrome. Source `ad.html`; render `video/renders/ads/S11/verity-meta-S11-4x5-v2.png`.

Why this engine: the brief is "feel like part of the landing page". Built from the page's own CSS, the ad cannot drift
from the site, and the click lands on the same nav, wash, headline and product the viewer just saw.

## Proposition (4-question test)

Selling: business software configured around how you work. For: owners whose software forces them to change.
Why care: the software changes for the business, not the other way round. Next step: Get your Business Blueprint.

## Copy (all from index.html, plus the approved offer)

- Eyebrow: "Business software configured around how you work" (site hero eyebrow)
- Headline: "Your business won't change for the software. / The software changes for your business." (site hero H1,
  breaks written by hand so the two tones split on a line)
- Offer: "Verity Business Blueprint™ · ₹5,000 value · Free until Diwali" (`offer-and-claims.md` D1, campaign variable)
- CTA: "Get your Business Blueprint" (site `btn--fill` pill). One CTA: the nav's "Book a demo" is hidden in the ad.

## Visual

- Site nav (logo, Platform, Modules, Implementation), enlarged 1.5x as one object.
- Site hero wash held at a resting value of its scroll progress.
- The site's hero workspace markup, copied verbatim, enlarged 1.6x so UI labels read (about 22 px), anchored on the left
  margin and cropped on the trailing right and bottom edges.
- Sample data in the workspace (1, 3, 14, 94 orders; 134 items) is the site's own illustrative mock-up data, not a client result.

## Gate (verity-social-design section 9)

- Composition: one focal point (headline), centred like the site hero; the product bleeds from the bottom. Pass.
- Typography: hero 80 px weight 300, two-tone, hand-broken; smallest text about 22 px (UI labels). Pass. (Hero is 80,
  under the paid 88 px guide; kept so the site's four-line break fits the 920 px measure. Reads first at 360 px.)
- Brand: recognisably Verity and recognisably the website in one second. Light theme by brief (the site's default),
  deviating from the skill's dark social world on purpose. Pass.
- Ad readability at 360 px: idea, value and CTA understood at a glance. Pass.
- Subtraction: second CTA removed; nothing else to remove.

## Variants to consider

- 9:16 Story version (keep type out of y 0-250 and y 1580-1920).
- Copy variant B: site H2 "Your business isn't broken. Your systems are fragmented." with the same offer and CTA.
