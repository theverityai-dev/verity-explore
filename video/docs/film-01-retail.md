# Film 01 — Retail & Commerce (16:9)

Supersedes the 9:16 Retail reel and the Retail section of `series-scripts.md`.
Composition `Film-01-Retail-16x9`, 1920x1080, 60fps, 35s. Code: `src/film/` (engine, props) and `src/film/retail/RetailFilm.tsx`.
Render: `npm run render:film-01`. Output: `renders/films/01-retail-commerce-16x9.mp4`.

**Metaphor:** fragmented retail data becomes one record.
**Look:** dark cinematic world (the site's dark theme tokens), cream paper props lit by a warm key, Verity UI as lit glass
slabs, blue `#0A84FF` only for state and data. No neon, no gradients, no stock imagery.
**Content:** every number and sentence comes from `content/businesses/retail-stores.js` and `registry.js` (via
`src/reels/content.ts`). Figures are illustrative, as on the site. The props (receipt total, message, shelf and sheet
numbers 378 / 412) are staged to match the page's own row, "Store 2 count differs from system by 34 units".

## Motion system (reusable for the other eight films)

- **Camera:** a CSS-3D rig (`Stage`) with dolly, pan, tilt and roll, driven by keyframes. Rack-focus blur from depth (`dof`).
- **Environment:** lit floor with a light pool, drifting dust, vignette, warm key light and film grain.
- **Physical motion:** props are pulled to a point on accelerating curves with 3D spin and velocity-based motion blur.
- **Type:** headlines, numbers and brand are flat 2D overlays so they stay crisp. Typography: Inter, weight 200-300.
- **Sound:** generated drone, risers, whooshes and sub hits (ffmpeg), plus a few bundled CC0 interface sounds. No music bed.

## Screenplay

| Time | Beat | What happens | Sound |
|---|---|---|---|
| 0:00-2:10 | Problem | A dark retail space. A POS receipt (₹4,850), a message ("Sir stock aa gaya?"), a stock sheet (412) and a shelf tag (378) hang as lit layers in depth. Slow dolly, parallax, dust. | Drone, three paper slides |
| 2:10-4:15 | Headline | "The shelf says one thing. The sheet says another." rises over a dark scrim. | Riser builds |
| 4:15-5:00 | Punchline | The camera pushes between 412 and 378. The room dims. **34** UNITS APART. | Sub hit, tick |
| 5:00-7:10 | Collapse | Every object is pulled to a point, spinning in 3D with motion blur. Streaks converge. Implosion bloom. | Whoosh, riser, big sub hit |
| 7:30-9:00 | One record | Silence in the visuals. The Verity mark draws itself. **ONE RECORD.** / Retail operations, connected. | Glass tone, sub hit |
| 9:00-13:00 | Reveal | The interface appears as a lit glass slab. The camera finds "Below reorder 37" and "12 fast-moving lines below reorder point". Everything else dims. | Reverse whoosh, glass hit, click |
| 13:00-21:00 | Purchase to shelf | The row becomes a glowing packet, "12 lines", riding a rail through four stations that use the real workflow steps: Low stock, Purchase order, Goods received, Stock recorded. Below reorder counts 37 to 25 at the end. | Whoosh, glass hit and tick per station |
| 21:00-26:00 | Reconciliation | Dark field. 378 vs 412. A "+34" arcs across, 378 rolls up to 412, the two merge into one. **ONE NUMBER. ONE RECORD.** | Whoosh, click, merge sub hit |
| 26:00-30:00 | Retail scale | The camera pulls back over a tilted map. The 20 business types from the registry emerge from fog on two orbits around a hub. **20 RETAIL BUSINESS TYPES. ONE VERITY.** | Reverse whoosh, riser, sub hit |
| 30:00-33:30 | Brand close | The map collapses into the mark. VERITY / Retail on one record. / theverityai.xyz. A held beat. | Whoosh, bell and sub hit |
| 33:30-35:00 | Transition | A scan line sweeps right, leaving a barcode that fills the frame. This is the hand-off into Film 02. | Whoosh, three beeps |

## Honest notes

- The workflow stations use the real "Purchase to shelf" steps from the page. "Supplier confirmed" was in the brief but is not a step in
  the source content, so it is not shown. The supplier appears only as the real row meta, "Two suppliers · both deliver Thursday".
- The 37 to 25 count and "+34" arc are illustrative visuals of the real 37 and 34 figures.
- No licensed music is used.
