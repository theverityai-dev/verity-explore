# Reel: "Software ko adapt karna chahiye" (45s, 60fps) in the daylight language

Built to `.claude/skills/verity-design-language`. Three ratios from one codebase (`src/reels/adapt/Adapt.tsx`, a layout
table per aspect): **8:9** `Reel-Adapt-8x9` (1080x1215, encodes as 1214), **9:16** `Reel-Adapt-9x16` (1080x1920),
**16:9** `Reel-Adapt-16x9` (1920x1080). The old dark version is in git history (commit 7628c84).

## Idea

A white paper world, daylight, nothing dark. The business as it really runs sits on it as physical objects (ledger,
spreadsheet, chat, stamped slips) with soft cool shadows. A cold, generic ERP squeezes them into rigid tiles, then lets
go. Underneath is **one light Verity glass surface** that stays on screen for the whole film: it starts blank, is mapped
to the business, takes on the business's own words, is approved, goes live, and collapses into the Verity mark. The old
world stays behind the glass, blurred, which is why the glass reads as glass.

## Shot list

| t | Scene | Focal point | On-screen copy |
|---|---|---|---|
| 0-5 | Every business is different | 7 analogue props, camera dollies through them | none |
| 5-9 | The usual way | Generic ERP, identical tiles | Pre-built software. / Pre-built workflow. (both ink) |
| 9-14 | Where we begin | Blank glass surface, caret, old world frosted behind | none |
| 14-20 | Pre-sale implementation | People > Process > Approvals > Data > Operations, two named cursors | none |
| 20-26 | Then we build | Module chips, terminology rolling into the company's words, the real order workflow | none |
| 26-31 | The pricing difference | Generic stack fades; analysis > requirements > Your Verity | none |
| 31-36 | Approval before commitment | Proposal, owner cursor, APPROVE, rows activate, Draft > Live | none (the APPROVE button is the copy) |
| 36-40 | The analogy | Same surface, macro push, one specular sweep, corner marks | none |
| 40-45 | Brand | Panel collapses to the blue mark; wordmark; "Run your business / **in your way.**"; rule; subline; URL | tagline, subline, URL |

The end card holds about 1.1s fully settled (script length is fixed at 45s).

## Layout per ratio

- **8:9**: surface scaled 0.86, centred at y 672; the headline sits in the 233px band above it.
- **9:16**: surface 1.0, centred at y 1000; headline above it; bottom 340px kept clear of the surface.
- **16:9**: surface 0.9 on the right (x 1250), the old world fills the left half, headline in the left column.
- The end card is centred on every canvas; its sizes are absolute (designed for a 1080px short side).

## Content sources (nothing invented in the product UI)

- Terminology rolls and the order workflow come from `content/businesses/distributors.js` (`terminology`, `workflows[0]`).
- Props (register, spreadsheet, chat, PO slip, bill) are illustrative and carry no product claims.
- The generic ERP is a stand-in; it deliberately uses no Verity tokens.

## Material (daylight)

- Paper `#fefefc` with a whisper of corner falloff so white glass can read; warm sun wash top-left; fine grain.
- Surface: ~86% white glass, 26px backdrop blur, 1px hairline, cool soft shadows `rgba(60,90,130,..)`, one sheen.
- Accent `#0a84ff` only for state, the tagline payoff and the mark. Fonts bundled in `public/fonts`.

## Decisions

- Tagline: "Run your business in your way." (confirmed). No on-screen Hinglish statements. VO not generated; the music
  bed is the bundled one.

## Render

```bash
npm install                      # postinstall copies the fonts into public/fonts
npm run render:reel-adapt-8x9    # also -9x16 and -16x9; standalone entry, renders offline
COMP=Reel-Adapt-9x16 bash scripts-still.sh 25    # a single still into out/
```
