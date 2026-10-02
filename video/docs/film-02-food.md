# Film 02 — Food & Hospitality (16:9)

Composition `Film-02-Food-16x9`, 1920x1080, 60fps, 35s. Code: `src/film/food/FoodFilm.tsx` on the shared film system
(`src/film/engine.tsx`, `props.tsx`, `layout.ts`). Render: `npm run render:film-02`.
Output: `renders/films/02-food-hospitality-16x9.mp4`. Content: `content/businesses/restaurants.js` via `src/reels/content.ts`.

**Metaphor:** a night of service, where the paper tickets on the pass become one live view.
**Brief for this film:** composition over animation. One message per shot, one focal point per scene, no repeated phrases.

Art direction: `.claude/skills/verity-motion-design` (composition, type, motion, camera, material rules and the
pre-render audit). Applied to this film as a polish pass on 2026-10-02.

## The Verity visual system (locked for the whole series, see `layout.ts`)

- **Dark world, light product.** The environment is deep dark. The Verity UI is always the light theme, on a light glass panel.
- **Glass:** translucent white, soft blur, thin rim, specular top edge, soft contact shadow. No glow, no neon borders.
- **Grid:** safe margins 120 left/right and 96 top/bottom. Text sits in a left column (x 120, width 620), anchored to a named element
  (text baseline, a UI cap line, or a prop edge). The UI panel always occupies x 840-1800, y 96-984, so its bottom edge is the text baseline. Nothing is centred
  by default, and nothing but full-bleed backgrounds crosses the margins.
- **Type:** Inter. One statement (72px, weight 300), one support line (30px, muted), then UI text. Each shot has one statement.
- **Motion:** expo-out glides for arrivals, in-out for exits, opacity and small translate only. No camera shake, particles or bloom.
- **Sound:** generated drone, soft hits and whooshes, a few CC0 interface ticks. No music bed.

## Screenplay

| Time | Shot | Statement (left column) | On screen (right) |
|---|---|---|---|
| 0:00-1:30 | Match-cut in | none | Film 01's cream barcode contracts into the barcode strip of an order ticket |
| 1:30-4:00 | The pass | "Service ends at eleven." | Three paper order tickets on a rail, a supplier voice note. Slow drift. |
| 4:00-7:00 | The problem | "The numbers should not arrive next month." | Same shot, nothing added |
| 7:00-12:30 | The surface | "The day, understood while it is still running." / Orders, stock, people and money on one record. | The pass recedes into blur as the light glass panel arrives from behind, tilted 7° and settling to 3°: Revenue today ₹2.14 L, Average order ₹1,150, Prep stock 4 low, On shift 17, and the four attention rows |
| 13:00-19:30 | A shortage | "A shortage, caught before it happens." (cap line on the workflow title) | The camera pushes in to 1.24x and the panel settles flat, bleeding off the right and bottom edges. "Prawns below par for tomorrow's covers" opens into the real five-step workflow |
| 19:30-25:30 | The roster | "Labour, compared with covers and revenue." (same anchor) | Still pushed in. "Section 3 running two servers short": 17 of 19 rostered as dots, then the first three real roster steps |
| 25:30-30:30 | Breadth | "14 business types." | The panel pulls back and dissolves. The 14 types sit in two columns whose last row shares the statement's baseline |
| 30:30-33:30 | Close | verity / Food & Hospitality / theverityai.xyz | Centred lockup, the only centred frame in the film |
| 33:20-35:00 | Hand-off | none | A cream ticket rises and opens into a full document page, the first frame of Film 03 |

## Content discipline

- Every number, row, workflow step and type name is the page's own text. No metrics or capabilities were added.
- Ticket contents (dish names, table numbers) are props, not product data. The voice note is a prop.
- "One record" appears once, in the support line of the surface shot.

## Audit (verity-motion-design, 2026-10-02)

Changes in the polish pass:

- Text anchors are named in code. The pass lines sit on the voice note's bottom edge, the overview on the panel's
  baseline, the workflows on the title's cap line, and the breadth list on the statement's baseline. Line breaks are written.
- The panel is now a camera subject. It arrives by depth reveal with a tilt, pushes in to reading scale (workflow text
  about 31px on screen), and leaves by pull-back. It no longer slides in and out 1000px.
- The pass now exits in depth (scale and blur) instead of sliding sideways.
- Removed redundant text: the workflow-name labels duplicated the statements, and "From restaurants to resorts" duplicated
  the list.
- Micro text is now 17-19px. The "Live" label fades before the push crops the right edge.
- Roster dot pitch went from 46 to 40, so the two empty seats stay inside the frame when pushed in.
- The close is a centred lockup.

Known limits: the opening barcode is still slightly darkened by the vignette. Pending workflow steps are light grey by
design. Film 01 has not been polished against this skill.
