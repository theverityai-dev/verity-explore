# Verity — 9:16 SaaS Trailer (Social Reel)

**STATUS: handoff to next session.** Motion MCP path was tried and abandoned (0 credits,
would cost money). Confirmed direction: build it free/local with **Remotion**, using the
real Verity UI as source material. Nothing has been scaffolded yet — this is the brief for
whoever/whatever picks this up next.

## Decision log (read this before doing anything else)

1. Explored Motion MCP (`mcp__claude_ai_Motion__create_video`) as Pass 1. Prompted it, it
   queued a job (`71cca1a4-c965-4fe8-9409-e65f377e0609`), then stalled at
   `insufficient_credits` (balance: 0). **Nothing rendered. No MP4 exists from this attempt.**
   Cheapest fix would've been a $5/200-credit top-up, but the user does not want to pay for
   this — **do not retry Motion, do not suggest paying, unless the user explicitly asks
   again.**
2. User was shown three arguments (pasted from an external source) for building this with
   **Remotion + real Verity UI + FFmpeg** instead — free, deterministic, on-brand, no AI
   hallucinated dashboards. User agreed. **This is the confirmed path.**
3. The creative direction was upgraded during that discussion, from "screenshot slideshow
   with camera pushes" to a **choreographed data-flow simulation**: the video should look
   like business activity actually flowing through the product, not a slideshow of static
   screens. See "Confirmed creative direction" below — this supersedes the earlier
   screenshot-zoom storyboard further down this doc (kept for reference/fallback only).
4. Mid-thread, the user redirected to unrelated site UI fixes first (accent color → gold,
   dark theme neutrals, a nav sizing/shape saga, a hero button icon fix). Those are done and
   committed/pushed as of this session (see "Site state" below) — **the video should reflect
   the current site, not an older screenshot.**
5. This session's context ran out before Remotion was actually scaffolded. **That's the
   next step.**

## Confirmed creative direction (this is the brief — build to this, not the fallback below)

Not a slideshow. A simulated live Verity session where one action triggers the next, so the
viewer watches business activity flow through the product rather than watching cuts between
screenshots.

**Motion language:** fragment → connect → transform → drill down → surface → reorganize →
converge.

**Narrative chain** (illustrative — adapt to what's actually easy to build from the real
Verity DOM/CSS, don't force a literal 1:1):
```
CRM record selected
      ↓
opportunity created
      ↓
order placed
      ↓
operations task generated
      ↓
dashboard metric updates
      ↓
analytics responds
      ↓
camera pulls back — it's all one Verity environment
```

**26-second beat sheet:**
- **0–4s** — Dozens of disconnected business objects (Lead, Invoice, Customer, Order, Task,
  Employee, Project, Payment) appear independently, moving out of sync. Feels fragmented.
- **4–7s** — A cursor/selection interaction picks one. Connections start forming — lines or
  data relationships appear between objects.
- **7–11s** — Camera dives into the selected customer. Customer → opportunity → order. The
  UI *transforms* (morphs/reflows), not cuts.
- **11–16s** — Order becomes an operations workflow. Cards move through stages, status
  changes, metrics update live.
- **16–20s** — Camera pulls out. Reveal: all of that was happening inside one Verity
  environment.
- **20–23s** — Modules orbit/arrange around a central point, then collapse into one
  interface.
- **23–26s** — Settle. "ONE OPERATING SYSTEM." / "VERITY."

**Quality bar:**
| Element | Target |
|---|---|
| UI fidelity | 100% real Verity (current site, current tokens) |
| Typography | Editorial / premium, Inter, the site's actual type scale |
| Motion | Smooth, physically believable (springs, not linear eases) |
| Transitions | Minimal, intentional — one thing moving beautifully beats 15 simultaneous effects |
| Effects | Subtle — no neon, no particles, no fake 3D, no lens flares |
| Color | Current Verity brand: gold accent `#D4A017` ramp, warm-neutral dark theme |
| Sound | Premium product-film, minimal percussion, optional sparse VO |
| Cost | $0 — Remotion + FFmpeg, no paid generation |

Restraint over spectacle. "Someone built an extremely polished business product," not "an AI
generated a SaaS commercial."

## Site state as of this handoff (so the video matches reality)

- Accent: **gold**, `#D4A017` (500), full ramp `--accent-50..900` in `css/verity.css`.
  `--accent-ink` is dark (`#241a02`) — gold is too bright for white text, verified via WCAG
  contrast math (white: 2.37:1 fail, dark: 8.84:1 pass).
- Dark theme neutrals are **warm near-black**, not blue-slate: `--base:#121110`,
  `--base-alt:#17140f`, `--surface:#1c1917`. (An earlier blue-tinted slate-gray version was
  explicitly rejected as clashing with gold — don't revert to it.)
- Nav: full-width flush glass bar (not an inset capsule — that was tried and reverted per
  explicit instruction), `backdrop-filter: blur(24px) saturate(180%)`, deepens on scroll.
- Cache-busting: `SITE.assetVersion` in `lib/render.js` is at **`'75'`** as of this handoff.
  If you change any CSS/JS, bump it (and the 12 matching `?v=NN` strings in `index.html`,
  which is hand-authored and not covered by the version constant) and run
  `node scripts/build.mjs`, or browsers will serve stale assets. This bit us repeatedly this
  session — don't skip it.
- One known minor cosmetic bug, deprioritized, not blocking: the hero's primary "Book a
  demo" button renders 5px shorter (43px vs 48px) than every other identical button on the
  page, for reasons not identified (checked padding, line-height, box-sizing, reveal-
  animation timing, whitespace — all identical to the working instances).

## Asset pack — already captured, in `video-assets/` at repo root

```
video-assets/
    dashboard.png        light theme, command-centre panel
    dashboard-dark.png   dark theme, same panel — CAPTURED BEFORE the warm-neutral dark
                         theme fix above, still shows the old blue-slate tone. Recapture
                         before using, or treat as reference-only for layout.
    crm.png              role-tabs panel (Operations Lead view) — CRM/ops-style content
    operations.png       "Work in motion" schedule panel (dark theme)
    projects.png         "Workforce" panel (dark theme)
    analytics.png        "Sites, regions, rollup" locations panel (dark theme)
    explore.png          /explore/ catalogue hero (light theme)
    logo.svg             hourglass mark, gold (#d4a017) baked in
    wordmark.svg         hourglass + "verity" wordmark, Inter
    verity.css           current tokens (refreshed at handoff time — matches v75)
    hero.css             hero section styles (refreshed at handoff time)
    dash.css             dashboard-replica component styles (refreshed at handoff time)
```

`operations.png`, `projects.png`, `analytics.png`, `crm.png`, `dashboard-dark.png` were
captured in dark theme **before** the warm-neutral fix, so their backgrounds show the old
blue-slate tone even though the CSS files alongside them are current. For the
"choreographed data flow" direction above, you'll likely want to re-render these live from
the DOM (or re-screenshot) rather than rely on the static PNGs anyway, since the brief now
calls for simulated interaction, not static frames.

## Tools/skills inventory (for reference, mostly not the chosen path)

- **Motion MCP** — tried, abandoned (credits). Don't reuse unless asked.
- **HyperFrames MCP** (`mcp__claude_ai_HyperFrames_by_HeyGen__*`) — hosted HTML/GSAP
  composition + cloud render. Viable fallback if Remotion stalls, but costs/hosts on
  HeyGen's side; Remotion is the confirmed preference (local, free).
- **`promo-creator-skills`** (`.agents/skills/promo-creator-skills/`) — installed, Snyk
  flagged Med Risk, never used. Lowest priority.
- **DaVinci Resolve** — no bridge available. Not usable from here.
- **Remotion** — not installed yet. This is the next step: `npm create video@latest` (or
  equivalent) inside a new `video/` directory in this repo, pull in the assets above, build
  the composition per "Confirmed creative direction," render with the built-in FFmpeg
  pipeline to 1080×1920 MP4.

## Fallback storyboard (screenshot-driven, simpler — only if the data-flow simulation proves too heavy for the first pass)

Spec: 1080×1920, 9:16, 30fps, ~26s. Core message: fragmented tools → one operating system.

```text
0.00-2.50 — Fast flashes of fragmented business info: CRM, SALES, INVENTORY, PROJECTS,
FINANCE, CUSTOMERS, each out of sync. Text: "Too many tools."
2.50-5.50 — Fragments multiply, UI cards overlap. Text: "Too much fragmentation."
5.50-7.50 — Hard reset. Verity logo mark, then wordmark.
7.50-11.50 — Real dashboard reveal, camera pushes in. Text: "One operating system."
11.50-17.00 — Rapid sequence of real product screens (dashboard, ops/CRM panel). Elegant
zooms and layered transitions, no random UI morphing.
17.00-21.00 — Multiple interfaces converge into one environment. Text: "Everything
connected."
21.00-24.00 — Hero dashboard fills frame, subtle live-data motion. Text: "Built for growing
businesses."
24.00-26.00 — Brand outro: VERITY / "Your business, operating as one." / theverityai.xyz
```

Text-only variant (no VO, likely stronger for social): "Too many tools." → "Too much
fragmentation." → "One operating system." → "Verity." → "Your business, operating as one."

## Next step for whoever picks this up

1. Read this whole file first — don't re-derive the decision history above.
2. Scaffold a Remotion project (e.g. `video/` directory in this repo).
3. Build the **confirmed creative direction** (data-flow simulation), not the fallback,
   unless the user says otherwise.
4. Pull design tokens live from `css/verity.css` (gold accent, warm-neutral dark, Inter) —
   don't hardcode a palette that could drift from the real site.
5. Render a first draft, get it in front of the user before polishing further — this brief
   has been re-scoped several times already; confirm before investing in another full pass.
