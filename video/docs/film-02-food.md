# Film 02 — Food & Hospitality (16:9)

Composition `Film-02-Food-16x9`, 1920x1080, 60fps, 35s. Code: `src/film/food/FoodFilm.tsx` on the shared film system
(`src/film/engine.tsx`, `props.tsx`, `layout.ts`). Render: `npm run render:film-02`.
Output: `renders/films/02-food-hospitality-16x9.mp4`. Content: `content/businesses/restaurants.js` via `src/reels/content.ts`.

**Metaphor:** a night of service, where the paper tickets on the pass become one live view.
**Brief for this film:** composition over animation. One message per shot, one focal point per scene, no repeated phrases.

## The Verity visual system (locked for the whole series, see `layout.ts`)

- **Dark world, light product.** The environment is deep dark. The Verity UI is always the light theme, on a light glass panel.
- **Glass:** translucent white, soft blur, thin rim, specular top edge, soft contact shadow. No glow, no neon borders.
- **Grid:** safe margins 120 left/right and 96 top/bottom. Text sits in a left column (x 120, width 620) bottom-anchored on the
  text baseline. The UI panel always occupies x 840-1800, y 96-984, so its bottom edge is the text baseline. Nothing is centred
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
| 7:00-12:30 | The surface | "The day, understood while it is still running." / Orders, stock, people and money on one record. | The tickets fall away and a light glass panel rises: Revenue today ₹2.14 L, Average order ₹1,150, Prep stock 4 low, On shift 17, and the four attention rows |
| 12:30-19:30 | A shortage | "A shortage, caught before it happens." | "Prawns below par for tomorrow's covers" opens into the real five-step workflow, completing one step at a time on a single progress line |
| 19:30-25:30 | The roster | "Labour, compared with covers and revenue." | "Section 3 running two servers short" opens: 17 of 19 rostered as dots, then the first three real roster steps |
| 25:30-30:30 | Breadth | "14 business types." / From restaurants to resorts. | The panel leaves. The 14 types from the registry appear as plain type on the UI grid line |
| 30:30-33:30 | Close | verity / Food & Hospitality / theverityai.xyz | Left column only |
| 33:20-35:00 | Hand-off | none | A cream ticket rises and opens into a full document page, the first frame of Film 03 |

## Content discipline

- Every number, row, workflow step and type name is the page's own text. No metrics or capabilities were added.
- Ticket contents (dish names, table numbers) are props, not product data. The voice note is a prop.
- "One record" appears once, in the support line of the surface shot.
