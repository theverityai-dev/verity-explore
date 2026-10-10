# Brand rules for ads

Ads use the same system as the landing page and the films. The full token and type spec lives in
`.claude/skills/verity-reel/references/verity-look.md` and `css/verity.css`; this file is the ad-specific
summary. If they disagree, the CSS and the site win.

## 1. Theme

Light by default (site tokens). Dark only when the brief says so, using the dark column of `verity-look.md`. Pick once per
ad in `BRIEF.md`; never mix inside one ad. Variants of one concept share a theme so the test measures the hook, not the
colour.

## 2. Identity

- Wordmark: lowercase `verity` with the hourglass mark (`video/public/logo.svg`, `video-assets/wordmark.svg`). Never typed capitals.
- Accent `#0A84FF` marks state and data only: live dot, selected row, approval, the CTA button, the word being completed in a
  two-tone headline. Never a glow.
- Type: Inter only. Hero 72-96 px at 1080 wide, support 28-40, nothing under 16 px on screen. Two-tone headline: ink for the
  statement, accent (or muted) for its completion, as in the reference static.
- Material: soft glass cards, hairline borders, one soft shadow. Real Verity UI from the repo's components. No CSS imitation of
  photography, no stock imagery, no handshake, no neon.
- Tagline for small corner use: OPERATE. OPTIMIZE. OUTPERFORM. (as in the reference static; use sparingly)
- Offer treatment: struck-through ₹5,000, then FREE in accent, with "Limited time" micro label. Wording gated by `offer-and-claims.md` D1.

Visual reference: `reference/static-reference-blueprint-offer.png` (light theme, hero statement with accent completion, Before
and After glass panels, Verity UI on a laptop, offer card bottom with CTA button). Keep its structure and discipline, not its
photoreal laptop and paper stack as a literal asset requirement.

## 3. Canvases

| Format | Canvas | Use |
|---|---|---|
| Reels / Stories | 1080 x 1920, 30 fps for Meta (60 fps allowed in Remotion if render budget allows) | Primary |
| Feed 4:5 | 1080 x 1350 | Cut-down versions and statics |
| Square 1:1 | 1080 x 1080 | Statics fallback |

Design each aspect separately. Margins and safe areas: see `ad-formula.md`.

## 4. Sound

Real team voice leads. Restrained bed of music at most 18 dB under VO, light UI-click SFX on state changes, no whooshes on
every cut. Loudness around -14 LUFS integrated, true peak at or below -1 dBTP, measured on the delivered file.

## 5. Captions

**No subtitles or captions on any video until the founder specifically asks for them (decision 2026-10-10).** The R08 and R09
reels and the IND series carry none; headlines carry the key line for sound-off viewers. If captions are ever requested:
Roman-script Hinglish matching the VO word for word, >= 44 px at 1080 wide, two lines max, inside the safe band, accent only on the key word.
Skill: `verity-reel` (references/talking-head.md) / `captions-overlay`.

## 6. Engine choice

| Situation | Engine |
|---|---|
| Template variant of the shared ad kit (swap hook, copy, VO) | **Remotion**, `video/src/ads/` |
| Bespoke voice-led hero cut, word-locked sync, many morphs and cursor beats | **HyperFrames** |
| Final mix, loudness, caption export, delivery encodes, or editing recorded footage with the team on camera | **DaVinci Resolve** (Resolve MCP available) |
| Ad stills | Remotion stills (`src/social`) |

One engine per ad for the visual build; Resolve may finish any of them. Record the decision as one line in `BRIEF.md`.
Never port an ad between engines mid-build.

## 7. Outro

Ads end on the CTA card, not the brand-film outro. The mark and the CTA are the only elements; hold >= 1.5 s. Do not use
the "Run your business. Clearly." outro copy in performance ads.

