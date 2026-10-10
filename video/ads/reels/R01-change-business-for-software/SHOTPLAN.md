# SHOT PLAN: R01 "Stop changing your business to fit your software"

Engine: Remotion (reason: templated performance-ad kit that R02-R06 reuse; composition `Ad-R01-H1-9x16`)
Aspect and canvas: 9:16, 1080 x 1920, 30 fps   Length: 27 s (provisional until VO)   Theme: light   Voice: founder, recorded after this plan
One claim: software should be built around your business, not the other way around.
Signature move: four cards are scattered, forced into a fixed template, re-flowed into your own chain, then become the Verity panel and finally the offer frame.
Current (dominant seam direction): UP (headline lines rise in and out; the frame moves up into the offer)
Carrier(s): the four cards (Workflows, Teams, Approvals, Requirements), then the glass frame
Approved figures: ₹5,000 value, "Currently complimentary", "Limited-time offer" (`offer-and-claims.md` D1-D3). Row statuses "Mapped / Captured" and initials A R S M K are props.

This plan was extracted from the built code (`video/src/ads/R01/Chips.tsx`, `Frame.tsx`, `kit.tsx`, `tokens.ts`). It is the shape
R02-R06 inherit. Times are the provisional block starts in `T`; coordinates are canvas px (center x, center y, w x h).

## Layout constants

Margins 80 sides. Safe band y 250-1500. Lockup at (80, 272). Headline cap line y 380, 72-80 px, light weight, accent completion.
Visual zone y 690-1340. Captions y 1384-1492, 44 px. Offer chip top right, y 263-315. CTA pill y 1316-1428.

## Beats

### B1 Hook  0-3 s
- Purpose: pattern interrupt on the pain.
- VO: "Aapka business software ke hisaab se kyun chale?"
- Focal point: the headline. Nothing else competes.
- Route (sustained motion): staged reveal, three lines rise in one at a time (0.6 s apart, 0.8 s ease out).
- Text: "Stop changing / your business / to fit your software." 80 px, hand-broken, anchored to cap line y 380; last line accent.
- Declared holds: under 1 s after the last line settles (about 2.1 s to 3.0 s).
- Seam out: S1. Sound: none yet.

### B2 Problem  3-7 s
- Purpose: every business is different.
- VO: "Har business ka apna way of working hota hai."
- Carrier: four cards enter from 140 px below, staggered 0.28 s, rotated and unequal in size.
- Keyframes (scatter): Workflows (300, 810, 400x210, -5 deg); Teams (740, 940, 370x194, +4); Approvals (330, 1090, 420x220, +3); Requirements (720, 1230, 390x204, -4)
- Route: staged entry, then sequenced UI life: workflow links draw, one approval ticks, one team member is picked, requirement bars grow.
- Text: "Every business has / its own way of working." 72 px, cap line 380.
- Seam out: S2.

### B3 Fixed system  7-11 s
- Purpose: fixed software forces one shape.
- VO: "Lekin most business software ek fixed system deta hai."
- Keyframes (rigid 2 x 2): (318, 908), (762, 908), (318, 1152), (762, 1152), each 420 x 220, rotation 0. Template outline 888 x 512 at (96, 774), label "One fixed template" at (96, 724).
- Route: snap in 0.75 s ease out (staggered 0.08 s), then corner brackets appear one card at a time (0.4 s apart), then the outline darkens and the cards compress 1.5 %.
- Text: "Most software gives you / one fixed system." 72 px.
- Seam out: S3.

### B4 Understanding  11-15 s
- Purpose: Verity starts from your business.
- VO: "Verity pehle aapka business samajhta hai."
- Keyframes (chain): rows 800 x 96 at x 540, y 824 / 952 / 1080 / 1208. Cards morph size and crossfade full face to a compact row. Accent connector at x 191 draws down the gaps.
- Route: reflow staggered 0.14 s, then the path draws, then each row's dot lights and takes the attention tint in turn.
- Text: "Verity starts by / understanding yours." accent on the second line.
- Offer signal: chip enters at 6 s (earlier than this beat) and persists through B6.
- Seam out: S4.

### B5 Mapping  15-19 s
- Purpose: show what is mapped.
- VO: "Workflows, teams, approvals aur actual requirements."
- Keyframes: glass frame (90, 690, 900 x 640) builds around the chain (0.9 s ease out, scale 0.97 to 1); chrome "Verity / Your business", live dot.
- Route: each row takes the attention tint and its status ("Mapped", "Captured") as the VO names it, 0.7 s apart.
- Text: "We map how your / business actually works."
- Seam out: S5.

### B6 Configure  19-22 s
- Purpose: the system is configured from the map.
- VO: "Phir uske around system configure hota hai."
- Route: rows tick in turn (accent check), footer "Proposed system blueprint" fades in at about 20.9 s.
- Text: "Then it configures the / system around it."
- Seam out: S6.

### B7 Offer  22-25 s
- Purpose: state the offer. VO: "Isi process se banta hai aapka Business Blueprint."
- Keyframes: the same frame moves from top 690 to 560 and grows to 700 high (0.9 s, in-out). Cards and connector lift 130 px and fade; chrome fades; offer content rises in staggered: label, ₹5,000 value, "Currently complimentary", divider, "Limited-time offer", scope line.
- Text: no headline. Offer content left edge x 140 (matches chain row left edge).
- Seam out: S7.

### B8 CTA  25-27 s
- VO: "Get your free Business Blueprint."
- Keyframes: accent pill (80, 1316, 920 x 112) rises 60 px and fades in over 0.7 s.
- Declared holds: the CTA stays about 1.3 s after it settles (end card).
- Camera: one slow push, scale 1.00 to 1.06 across the whole film, origin (540, 1030), applied to the visual group only.

## Vector ledger

| # | Cut time | Exit vector | Entry vector | Carrier | Technique | Duration | Blur | Cause |
|---|---|---|---|---|---|---|---|---|
| S1 | 3.0 | headline lines rise out | cards rise in from below | cards | headline exit overlaps card entry | 0.45 s | none | the cards are the "way of working" |
| S2 | 7.0 | cards drift into scatter rest | cards slide into grid | the four cards | position morph, power ease out | 0.75 s | none | forced to fit |
| S3 | 11.0 | grid releases | cards slide into one column | the four cards | position and size morph | 1.1 s | none | reflow from your process |
| S4 | 15.0 | chain at rest | glass frame builds around it | cards (persist) | frame scales up behind the cards | 0.9 s | none | the system appears around your business |
| S5 | 19.0 | statuses done | ticks begin | cards | state change on the same objects | 0.55 s | none | configuration confirmed |
| S6 | 22.0 | frame at rest | frame moves up and becomes offer | the glass frame | position and height morph | 0.9 s | none | the process becomes the Blueprint |
| S7 | 25.0 | offer at rest | CTA pill rises | frame stays | pill rises into the space below | 0.7 s | none | one action |

## Checks before build (done, see REPORT.md)

- [x] Every beat has keyframes; every seam has a ledger row
- [x] Every hold is declared; audit v5: 1 hold at 0.97 s, no jumps
- [x] Every text block is anchored; nothing under 16 px (smallest UI text 22 px)
- [x] Every number is on the approved list or marked as a prop
- [x] Theme, aspect and engine recorded
- [ ] Re-check every time after the VO retime
