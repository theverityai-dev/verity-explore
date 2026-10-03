---
name: verity-design-language
description: The locked Verity visual language for ALL new videos (reels, films, trailers, ads, motion graphics, end cards). Bright daylight world, white architecture, frosted-glass product UI, ultra-light Inter with a blue payoff phrase, the hourglass mark. Use before designing, writing, or reviewing any new Verity video or motion piece. It takes precedence over verity-motion-design (legacy dark world) and over any generic design advice.
---

# verity-design-language

Locked from five approved reference creatives (`references/ref-1…5`). Numbers below were measured from them and
checked by rendering `video/src/brand/proof.tsx` against refs 2 and 3. Every new Verity video is built in this
language. **It supersedes the dark-world rules in `verity-motion-design` and `verity-social-design`** for video; those
describe the legacy films (Film 01 Retail, Film 02 Food, the Adapt reel) and stay valid only for maintaining them.

Code: tokens and primitives in `video/src/brand/` (`language.ts`, `kit.tsx`). Import them; do not re-type colours,
sizes or the glass recipe.

One sentence of the look: **a calm, sunlit, white room; one glass product object; type so light it almost floats; one
blue phrase that carries the meaning.**

## 1. What the references share (the invariants)

| | Locked |
|---|---|
| World | Daylight, high-key. White plaster architecture, hard diagonal sun-shadows, pale-blue sky, sea and mountains in haze, travertine stone. Or pure paper-white with nothing in it. Never dark, never night, never neon. |
| Type | Inter, weight **200 to 300**, tracking about -0.045em, line-height 0.94 to 1.1, ink `#0f1115`. Huge. Never bold. |
| Two-tone headline | Setup in ink, the **payoff phrase in accent blue** (`#0a84ff`), always the last line or last words. One blue phrase per frame. |
| Subline | Small, weight 300, **very wide tracking (about 0.2em)**, fragments with full stops ("Customers. Operations. Inventory."), its own payoff words in blue. |
| Rule | A short hairline (about 3% of width, 1.5px, ink) between headline and subline, centred layouts only. |
| Mark | The hourglass mark + lowercase "verity" wordmark. Black on photographic plates, blue on white, large and alone on the end card. |
| Product | Verity UI in the light theme, shown on a device on a ledge, or as frosted glass planes. Frosted glass cards float around it. |
| Connection | Thin 1px arcs with small dots linking cards to the device. "All connected" is drawn, not said. |
| Accent | One blue. It is the headline payoff, the workflow path, selected state, the logo on white. Tiny green/red appear only inside KPI sparklines. |
| Space | Generous. At least 40% of any frame is empty plaster, sky or paper. |

## 2. Palette (measured from the references)

| Token | Value | Source |
|---|---|---|
| `paper` | `#fefefc` | page white of ref 3 and ref 2 (`#fdfdfd`) |
| `plasterLit` | `#f0ece8` | sunlit wall, ref 1 and ref 4 |
| `plasterShade` | `#b9b9bd` | shaded wall, cool grey |
| `skyTop` / `skyHorizon` | `#b5d8f9` / `#eff6fc` | ref 1, ref 4, ref 5 |
| `ink` | `#0f1115` | headline, subline, black mark |
| `inkMuted` | `#6b7078` | labels, UI secondary |
| `accent` | `#0a84ff` (`--accent`) | headline payoff, path, logo on white. The mark samples `#026cfe`, the path `#0a81fc`: one family, **use the single token** |
| `shadow` | `rgba(60,90,130,0.14)` | daylight shadows are cool and soft, never black |

## 3. Typography (ratio-agnostic: sizes are % of canvas width `W`)

Measured on the references; scale with `u = W / 100`.

| Role | Size | Weight | Tracking | Line-height | Notes |
|---|---|---|---|---|---|
| Headline, 3 to 4 short lines | 10 to 11 u | 300 | -0.045em | 1.0 | The fewer the words, the bigger. Ref 1 and 5. |
| Headline, 4 lines on a square | 6.5 to 7 u | 300 | -0.04em | 0.96 | Ref 4. |
| Headline, left-aligned minimal | 9.4 u | 200 | -0.045em | 1.1 | Ref 2. Thinnest of all. "is already running." spans 69% of the width. |
| Subline | 1.8 to 2.4 u | 300 | **+0.18 to +0.25em** | 1.3 | Centred or left to match headline. Payoff words blue. |
| UI label under icon tiles | 1.6 u | 400 | 0 | 1.25 | Two lines max, centred. |
| Step labels (UNDERSTAND, CONFIGURE) | 1.5 u | 400 | +0.22em | 1 | Uppercase. |
| Data in glass cards | 3 to 4 u | 400, tabular | -0.02em | 1 | "+32%", "248". |

- Left-aligned for diagram layouts, centred for hero and diorama layouts. Never centre multi-line body copy.
- Break lines at phrase boundaries ("Everything / your business / in one place."). The blue words are their own line
  whenever possible.
- Phone legibility: headline at least 6 u, subline at least 1.7 u (18px on 1080).

## 4. Logo

- Mark: two rounded triangles apex to apex (an hourglass), `public/logo.svg` geometry, viewBox 24 x 30 (w:h = 0.8).
- Wordmark: lowercase "verity", Inter weight 300 (200 on the big end-card lockup), tracking -0.03em, **font-size = 0.95 x mark height**, gap between mark
  and word = 0.4 x mark width, vertically centred on the mark.
- Colour: black (`ink`) on photographic plates, `accent` on paper, white only on the rare dark inset.
- Placement: top-centre on hero layouts (about 9% down), bottom-left on diagram layouts, huge and centred alone on the
  end card (mark height about 13.5% of W). Clear space: the mark's own width on all sides.

## 5. Glass (daylight recipe)

Everything translucent is frosted glass over a bright plate. It has to have real content behind it to read.

- Fill `rgba(255,255,255,0.66)`, backdrop blur 20px, saturate 140%.
- Rim: 1px `rgba(255,255,255,0.85)`. Inner top highlight `inset 0 1px 0 rgba(255,255,255,0.9)`.
- Shadow: `0 18px 40px rgba(60,90,130,0.14)` plus a contact `0 2px 6px rgba(60,90,130,0.10)`. Cool, soft.
- Radius 2 u on cards, 24% of side on icon tiles (rounded squares about 6.5 u).
- **Icon tiles:** white glass squares, 2px line icon in ink, label below, thin vertical hairlines between tiles.
- **Data cards:** blue filled circle chip with a white glyph (primary) or outline glyph (others), small muted label, the
  number big, a sparkline or bars below running light-blue to saturated blue.
- **Connectors:** 1px arcs, white with a faint blue tint, a 5px dot at each end (white with a blue core). They draw on.
- No sheen sweeps on type, no glow, no gradient text.

## 6. Worlds, and how plates are made

- **Photographic world** (refs 1, 4, 5): a real-looking plate of daylight minimalist architecture. Shallow depth of
  field, foreground olive foliage out of focus in a corner, long diagonal sun-shadows on plaster, sea and mountains in
  haze, travertine ledge or plinth for the hero object. Eye-level or slightly low, verticals true.
- **Paper world** (refs 2, 3): `#fefefc` field, nothing in it but the subject. Subject is isometric glass planes along
  one diagonal path with a single blue line and node. This is **fully codeable in Remotion** and is the default when no
  plate exists.
- **Plates are never faked with CSS gradients.** A plate is a photographic still (supplied, photographed or generated
  outside Remotion) at 2x the target size so it can drift. Remotion composites type, glass UI, connectors, count-ups
  and the camera move on top. Without a plate, use the paper world.

## 7. Layout templates (zones are % of height, so they hold on 4:5, 8:9, 9:16 and 1:1)

**A. Hero, centred** (ref 1, 5): logo 9%; headline 14-45%; rule; subline 48-58%; icon row or nothing 60-70%; hero object
(device or sculpture) with floating cards 62-96%. Text block never overlaps the object. Platform-safe: nothing
important in the top 12% or bottom 17% of 9:16.

**B. Diagram, left-aligned** (ref 2): headline top-left at 8% margin, y 15-33%; subline under it; the glass-plane path
sweeps diagonally from lower-left to right, bleeding off the right edge; logo bottom-left. 60% of the frame is paper.

**C. Lockup end card** (ref 3): paper field, blue mark + wordmark centred, nothing else; optional single line of
support copy at 61% in subline style. Hold at least 1.2s.

**D. Process diorama** (ref 4): headline 21-47%, rule, subline, then three glass objects on a round pedestal with arrows
between and uppercase tracked step labels under each (UNDERSTAND, CONFIGURE, DEMONSTRATE). Objects go
document, then blue cubes, then dashboard.

For 16:9: text left half, hero object right half, same type ratios on height.

## 8. Motion (how the language moves)

Calm, slow, expensive. Daylight moves; nothing flashes.

- **Camera:** slow push toward the hero object (1.00 to 1.10 over 6 to 8s), with 2.5D parallax between foreground
  foliage (fast, blurred), the plate (medium), sky and mountains (slow). No handheld shake, no whip pans.
- **Light:** sun-shadow edges on plaster creep 20 to 40px over a shot. Never pulse.
- **Type:** masked line rise with blur clearing, 0.9s, `cubic-bezier(0.22,1,0.36,1)`. Setup lines first, the blue
  payoff 0.3s after. The rule draws left to right in 0.6s. The subline fades in while its tracking settles from
  +0.26em to +0.2em. Type is still once it lands.
- **Glass cards:** float 6px with a 6 to 8s period, staggered, never in sync. Enter by depth (scale 0.96 to 1, blur
  8px to 0), not by sliding in.
- **Connectors:** arcs draw on (stroke dash) in 0.8s, dots light blue as the line reaches them.
- **Data:** numbers count up over 1.2s with tabular figures, sparklines draw left to right.
- **Workflow path (paper world):** the blue line travels through the glass planes; each plane brightens as it passes.
- **Transitions:** transform, do not cut. A glass card becomes the next scene's panel; the paper field blooms from the
  light source. A hard cut at most once per film.
- **Ending:** every video ends on the blue lockup on paper with at least 1.2s of hold. Template C (lockup alone) when the
  piece has no tagline; when the script has one (the Adapt reel), the end card is the centred layout: lockup, then the
  two-tone tagline, rule, tracked subline, URL, all settled with 1.2s to spare.
- Easing: `glide` `bezier(0.22,1,0.36,1)` for arrivals, `smooth` `bezier(0.45,0,0.15,1)` for moves. No bounce, no spring
  overshoot.

## 9. Copy voice

- Short declarative sentences. The headline sets up in ink and pays off in blue.
  "Everything your business **in one place.**" · "Your business is already running." · "Before you implement it,
  **see it built around you.**" · "Run your business **your way.**"
- Sublines are fragments: "Customers. Operations. Inventory. Finance. Teams. **All connected.**"
- Plain words. No marketing adjectives, no exclamation marks, no emoji, no jargon.
- Numbers in UI cards ("+32%", "248", "128 orders") are **illustrative**. Never present them as results or customers.
  Claims such as "No implementation fee" are used only where the business has confirmed them.
- **Canonical tagline: "Run your business in your way."** (confirmed). Ref 5's "Run business your way." is a typo in the
  source image. Set it as "Run your business" in ink, "in your way." in blue.

## 10. Never

Dark or night worlds · neon or glow · gradient text · weights above 300 on headlines · more than one blue phrase per
frame · stock photos of people at laptops · emoji · icon grids on dark · black drop shadows · CSS fakes of
architecture · a second blue · generic SaaS isometrics in colour · bounce.

## 11. Pre-render audit (mandatory, record in the film's doc)

1. Pause on five random frames. Each must look like one of the five references' siblings.
2. Headline weight at most 300, tracking tight, blue only on the payoff, at most one blue phrase.
3. Subline tracking about 0.2em, fragments, payoff words blue.
4. At least 40% empty space; one hero object; text zone and object zone do not overlap.
5. Glass has real content behind it, daylight recipe, cool shadows, rim visible.
6. Mark correct for the background (black on plate, blue on paper), ratio 0.95 / 0.4 respected.
7. A real plate is used, or the paper world. No gradient architecture.
8. Phone check: headline at least 6 u, subline at least 18px at 1080, nothing in the platform UI zones.
9. Ends on the lockup with at least 1.2s hold.
10. No invented metric, customer or claim.
