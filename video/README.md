# Verity video

Remotion project for Verity's promo films. Design tokens are imported live from `../css/verity.css`
(light theme, accent `#0A84FF`), so the videos cannot drift from the site.

## Layout

```text
video/
  README.md
  package.json            npm scripts (render:*, studio, typecheck)
  docs/
    trailer-script.md     screenplay for the main trailer (16:9)
    series-scripts.md     screenplays for the nine industry reels (9:16)
    series-plan.md        industry list and production order
  src/
    index.ts              entry: imports site CSS, sets light theme, registers Root
    Root.tsx              every composition is registered here
    shared/timeline.ts    easing, seg/track/lerp, spring helpers used by all videos
    trailer/              MainTrailer, 1920x1080 @ 60fps, 44s
      data.ts             content and timing constants (copy from content/*)
      ui.tsx              atoms: Words, Card, Mark, Check, Label
      Scatter.tsx  Record.tsx  Product.tsx  Industries.tsx  Outro.tsx   one file per scene
      MainTrailer.tsx     assembles the scenes on a shared clock
    reels/
      general-9x16/       first 9:16 explainer (Reel.tsx + configs.ts, data-driven)
  public/logo.svg         the mark, blue
  renders/                finished videos, tracked in git
    trailer/              verity-main-trailer-16x9.mp4
    reels/                verity-general-9x16.mp4, retail-commerce-9x16.mp4
    archive/              superseded drafts
  out/                    scratch stills and sheets, git-ignored
```

## Commands

```bash
npm run studio             # live preview
npm run render:trailer     # renders/trailer/verity-main-trailer-16x9.mp4
npm run render:reel-general
npm run render:reel-retail
npm run typecheck
```

## Rules

- **Design language:** every new video follows `.claude/skills/verity-design-language/SKILL.md` (daylight world,
  ultra-light Inter, blue payoff phrase, daylight glass, hourglass lockup). Tokens and primitives are in `src/brand/`
  (`language.ts`, `kit.tsx`); import them. `src/brand/proof.tsx` rebuilds reference templates B and C as a check.
  Film 01, Film 02 and the Adapt reel are legacy (dark world) and are not re-skinned unless asked.
- Light theme and blue accent only. Never hard-code a colour, use the CSS variables.
- Every scene is a pure function of time `t` (seconds), so any frame renders identically.
- New industry reels get their own folder under `src/reels/<slug>-9x16/` and their own composition id
  in `Root.tsx`. Screenplays live in `docs/`. Finished MP4s go in `renders/`.
