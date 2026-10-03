# Reel: "Software ko adapt karna chahiye" (45s, 8:9, 1080x1215, 60fps)

Composition `Reel-Adapt-9x16` (id kept from the first build), code in `src/reels/adapt/`.
Sample frames: regenerate with `bash scripts-still.sh <seconds>` (writes to `out/`).

## Idea

One continuous camera world. The dark world is the business as it really runs (ledger, spreadsheet, chat, stamped
slips). A cold, generic ERP squeezes it into rigid tiles, then lets go. Underneath is **one light Verity glass surface**
that stays on screen for the whole film: it starts blank, is mapped to the business, takes on the business's own
words, is approved, goes live, and finally collapses into the logo tile. The old world stays behind the glass, blurred,
which is why the glass reads as glass.

## Shot list

| t | Scene | Focal point | On-screen copy | Transition out |
|---|---|---|---|---|
| 0-5 | Every business is different | 7 analogue props, camera dollies through them | none | props converge on the surface position |
| 5-9 | The usual way | Generic ERP, identical tiles | Pre-built software. / Pre-built workflow. | tiles release in a ripple, outer ring first |
| 9-14 | Where we begin | Blank glass surface, caret, old world frosted behind | none | surface stays; body crossfades |
| 14-20 | Pre-sale implementation | People > Process > Approvals > Data > Operations, two named cursors | none | nodes dissolve into modules |
| 20-26 | Then we build | Module chips, terminology rolling into the company's words, the real order workflow | none | surface recedes |
| 26-31 | The pricing difference | Generic stack fades; analysis > requirements > Your Verity | none | "Your Verity" becomes the proposal title |
| 31-36 | Approval before commitment | Proposal, owner cursor, APPROVE, rows activate, Draft > Live | none (the APPROVE button is the copy) | surface tilts |
| 36-41 | The analogy | Same surface, macro push, one specular sweep, corner marks | none | surface collapses to the logo tile |
| 41-45 | Brand | Logo tile + wordmark, tagline, support, URL | Run your business in your way. | end |

## Content sources (nothing invented in the product UI)

- Terminology rolls and the order workflow come from `content/businesses/distributors.js` (`terminology`, `workflows[0]`).
  The distributor is used purely as a worked example of "the business's own language".
- Props (register, spreadsheet, chat, PO slip, bill) are illustrative and carry no product claims.
- The generic ERP is a stand-in; it deliberately uses no Verity tokens.

## Material

- Dark world: `DK` tokens (`#080b11` base), one warm key top-left, vignette, grain.
- Surface: light theme, ~95% white glass, 30px backdrop blur + saturation, 1px rim, inset specular, one diagonal sheen.
- Accent `#0a84ff` only for state: live dot, checks, selected row, cursor, approve.
- Fonts bundled in `public/fonts` (Inter, Caveat for the handwritten props), copied from `@fontsource` by
  `copy-fonts.mjs` on `npm install`, so renders work offline.

## Decisions (confirmed)

- Aspect 8:9 (1080x1215). The surface is designed on a 900x1020 panel and fitted to the frame with one group transform
  (`PS`, `GROUP_CY` in `Adapt.tsx`); the props, ghosts and end card are laid out natively for the frame.
- No on-screen Hinglish statements. The only copy before the end card is the script's own "Pre-built software. /
  Pre-built workflow.", plus UI text inside the product surface.

## Still open

- End card follows the script (`Run your business in your way.`, `verity.plotarmour.in`), which differs from the locked
  `VerityOutro` (`Run your business. Clearly.`, `theverityai.xyz`). Not yet confirmed.
- VO is not generated; the music bed is the bundled one.

## Render

```bash
npm install                       # postinstall copies the fonts into public/fonts
npm run render:reel-adapt        # needs Google Fonts reachable (main Root imports other films)
npx remotion render src/adapt-entry.tsx Reel-Adapt-9x16 renders/reels/adapt-software-9x16.mp4 --crf=16   # standalone, offline
```
