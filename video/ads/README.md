# Verity Meta Ads: production system

Performance ads for Meta (Reels, Stories, Feed). Same Verity visual language as the brand films, but built to sell one
thing: the **Verity Business Blueprint™** lead magnet.

> Brand films make Verity feel premium. Performance ads make a cold prospect understand what we sell, who it is for, why
> they should care, and what to do next, in the first 3 seconds.

Fast information, slow visual sophistication. New information every 1-2 s, motion stays elegant. No "17 cuts in 12 s".

## Layout

```text
video/ads/
  README.md                     this file
  00-strategy/                  decisions that apply to every ad (read before briefing any ad)
    offer-and-claims.md         the offer, approved claims and figures, OPEN decisions that block publishing
    audience-and-funnel.md      who we target, funnel from ad to client, content tiers
    messaging-bank.md           proposition, hooks, USP, CTAs, banned words
    ad-formula.md               the 0-27 s performance structure and the scene library
    brand-rules.md              Verity identity for ads: theme, type, safe areas, outro, engine choice
    voiceover-guide.md          who records what, recording spec, caption rules
    reference/                  visual references (the first static)
  01-plan/
    test-matrix.md              6 reels x 3 hooks, status tracker, results log
    statics-plan.md             10 static concepts, first test batch
  templates/                    copy these, never edit in place
    ad-brief.md  ad-script.md  vo-recording-sheet.md  static-brief.md  qa-checklist.md
  reels/                        one folder per video concept (R01..R06), hook variants live inside it
  statics/                      one folder per static concept (S01..S10), created when started
  series/                      multi-reel campaigns; IND-industry-reels = ten industry reels in the R09 format (brief stage)
```

Related, outside this folder:

| What | Where |
|---|---|
| Shot plan template and vector ledger | `.claude/skills/verity-reel/templates/shot-plan.md` |
| Motion law, gates, audit script | `.claude/skills/verity-reel/` |
| Remotion code for ads (create when the first ad is built) | `video/src/ads/` (shared `kit/`, one folder per reel) |
| Finished MP4s and stills | `video/renders/ads/<ad-id>/` |
| Scratch frames and contact sheets | `video/out/` (git-ignored) |
| Site tokens | `css/verity.css`, `design-system.md` |

## One ad, start to finish

Each reel folder holds the paperwork. Create files from `templates/` as the ad reaches that stage.

```text
reels/R01-change-business-for-software/
  BRIEF.md        stage 1  pre-filled; claim, hooks, theme, engine, approved figures
  SCRIPT.md       stage 2  VO per hook variant with timings, on-screen text, captions
  SHOTPLAN.md     stage 3  frame-level spec + vector ledger (skill template)
  vo/             stage 4  raw takes, picked takes, word-timing JSON
  assets/         stage 5  anything not in the repo (screens, music, SFX)
  REPORT.md       stage 7  audit output, defect list, what to fix next
```

| Stage | Status value | Gate to move on |
|---|---|---|
| 1 Brief | `brief` | Passes the 4-question test (sell what, for whom, why care, next step); claims all on the approved list |
| 2 Script | `script` | Read aloud by a teammate; fits the length; hook is in the first 2 s |
| 3 Shot plan | `shotplan` | Every beat has keyframes; every seam has a ledger row |
| 4 Voice | `vo` | Picked takes recorded; loudness and noise checked (`voiceover-guide.md`) |
| 5 Build | `build` | Composition renders; typecheck passes |
| 6 Audit | `audit` | `audit-render.sh` clean; frames viewed full size; `templates/qa-checklist.md` ticked |
| 7 Approved | `approved` | Founder/sales sign-off on offer wording and price |
| 8 Live | `live` | Uploaded to Meta; ad IDs logged in `test-matrix.md` |
| 9 Learned | `learned` | Results written into the results log; next hook decided |

Update the status in the folder's `BRIEF.md` header and the row in `01-plan/test-matrix.md` together.

## Pipeline v2: art direction before motion (from 2026-10-07)

R01 proved the motion system but read as template motion graphics (text, card, icon, line, dashboard, CTA). Every ad
from R07 on is an art-directed product film, built in this order:

1. **Creative concept**: one visual idea and one metaphor (`TREATMENT.md`).
2. **Visual treatment**: world, materials, lighting, lens, typography, then shot-level direction per shot (`templates/treatment.md`).
3. **Keyframe stills**: the payload frame of every shot, rendered as Remotion stills (`Board-<ID>-S<n>`), no animation.
4. **Art-direction gate**: score each still 1-10 on composition, typography, depth, material and lighting, brand,
   product integration, originality and still-frame quality. **Anything under 8 is not animated.**
5. **Motion design**: animate between the approved keyframes; the camera moves through a designed world more than
   objects move across the canvas.
6. **VO and sound**: the recorded voice sets every timing. Restrained sound design comes after the retime.
7. **Performance audit**: the 4-question test, offer visibility, CTA.
8. **Technical QA**: `audit-render.sh`, safe areas, captions, loudness, `templates/qa-checklist.md`.

**3D owns the world. Remotion owns the information. Resolve finishes.**

- 3D (`@remotion/three`, physical materials): the studio, glass and acrylic objects, light, shadow, camera, depth.
  Architectural model-making glass, not a glossy hologram. The environment stays nearly static; camera and objects move.
- Remotion: typography, drafting film, blueprint lines, workflow diagrams, modules, UI, labels, offer type, captions,
  timing against `vo/words.json`, campaign variables, ad variants.
- DaVinci Resolve (Resolve MCP): VO edit, sound design, grade, final compositing, captions, loudness, 9:16 and 4:5 exports.

Do not add 3D because it looks impressive. Add it only where a shot fails the gate on material or depth (R07: CSS glass
scored 6-7, real glass 8).

Production prompts follow the same split: "plan the film first, do not build" (treatment, reviewed), then "execute the
approved treatment", then "audit the finished film against the creative, brand, motion, audio, Meta and performance gates".
A human art director reviews before anything ships.

## Naming

- Concept: `R01`..`R06` reels, `S01`..`S10` statics.
- Hook variant: `H1`, `H2`, `H3` (video) or `A`, `B`, `C` (static copy variant).
- Ad ID: `R01-H2`. Version: `-v1`, `-v2`; never overwrite a render.
- Render file: `verity-meta-R01-H2-9x16-v1.mp4`, in `video/renders/ads/R01/`.
- Remotion composition id: `Ad-R01-H2-9x16`. npm script: `render:ad-r01-h2`.

## Engine choice (decided per ad, recorded in BRIEF.md)

See `00-strategy/brand-rules.md` section 6. Short version: Remotion for the templated variant system (swap hook, copy
and VO via data), HyperFrames for a bespoke voice-led hero cut, DaVinci Resolve for final mix, captions and delivery when
the audio needs real finishing.

## Rules that never bend

1. Verity theme, light by default; dark only if the brief says so. Never off-brand, never stock.
2. Nothing goes live with an unapproved claim, price or deadline (`offer-and-claims.md` open decisions).
3. Every ad passes the 4-question test and has a real CTA, never "Learn more" or "Contact us".
4. Props may be invented; numbers on screen are either approved or marked illustrative in the brief.
5. Verify the delivered MP4, not the source.

