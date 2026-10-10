# R07 keyframe boards and art-direction gate

Stills: Remotion `Board-R07-<shot>` (`video/src/ads/R07/boards.tsx`, world kit `world.tsx`). Rendered to `video/out/r07/`.
Two passes: pass 1 found S1, S2a, S2b, S4b and S7 weak (small objects, crowded planes, UI too small to be the
environment, floating offer sheet, caption orphans). Pass 2 fixed those. Scores below are for pass 2.

Scale 1-10. "n/a" where a criterion does not apply to the shot (no product in the hook). Gate: 8 or more on every scored line.

| Shot | Composition | Typography | Depth | Material / lighting | Brand | Product | Originality | Still | Gate |
|---|---|---|---|---|---|---|---|---|---|
| S1 hook | 8 | 8 | 7 | 7 | 8 | n/a | 7 | 7 | not yet |
| S2a fixed system | 8 | 8 | 7 | 7 | 8 | n/a | 7 | 7 | not yet |
| S2b every business | 7 | 8 | 8 | 7 | 8 | n/a | 8 | 7 | not yet |
| S3 the study | 8 | 8 | 8 | 8 | 9 | 8 | 9 | 8 | pass |
| S4a the map | 9 | 8 | 9 | 8 | 9 | 8 | 9 | 9 | pass |
| S4b module by module | 8 | 8 | 8 | 8 | 8 | 9 | 7 | 8 | not yet (originality) |
| S5 the process | 8 | 9 | 7 | 7 | 8 | 7 | 8 | 8 | not yet |
| S6 the offer | 9 | 9 | 8 | 8 | 9 | 8 | 8 | 9 | pass |
| S7 who should act | 8 | 8 | 7 | 8 | 8 | 7 | 7 | 8 | not yet |
| S8 end card | 8 | 8 | 6 | 7 | 9 | 7 | 6 | 8 | not yet |

## Pass 3: option B, real 3D for the object shots (2026-10-07)

S1, S2a, S2b and S8 rebuilt in `@remotion/three` (`video/src/ads/R07/studio3d.tsx`): physical acrylic
(MeshPhysicalMaterial, transmission, IOR 1.49, light frost, slight cool attenuation so edges show thickness), a pale
studio room, RoomEnvironment reflections, a soft key from the upper right casting long soft shadows, a warm light pool on
the wall for the glass to bend. Type, captions and lockup stay HTML on top. Render with `--gl=angle` (GPU).
Lighting took three passes (flat and blue, then blown out, then balanced). A blank glass plane in front of a plain wall
is invisible, so bare planes carry an etched empty template grid: "a system not yet defined", which also sets up the
lattice in S2a.

| Shot | Composition | Typography | Depth | Material / lighting | Brand | Product | Originality | Still | Gate |
|---|---|---|---|---|---|---|---|---|---|
| S1 hook (3D, etched glass) | 8 | 8 | 8 | 8 | 8 | n/a | 8 | 8 | pass |
| S2a fixed system (3D lattice) | 8 | 8 | 8 | 8 | 8 | n/a | 8 | 8 | pass |
| S2b every business (3D) | 8 | 8 | 9 | 8 | 8 | n/a | 8 | 8 | pass |
| S8 end card (3D etched portal) | 8 | 8 | 7 | 8 | 9 | n/a | 7 | 8 | not yet |

S8 is the one object shot still under: the portal is clean but clinical, and it does not carry the film's object. Next
fix: let the Blueprint (or the built workspace) rest in the studio between the two planes, so the end card is the
resolution of the story, not a separate brand card.

Still open from pass 2 (Remotion shots): S4b originality, S5 background, S7 depth. See below.

## Pass 4: hybrid shots and freeze (2026-10-07)

- S4b: the workspace now stands on its own blueprint (drafting grid on the studio floor, module footprints traced, built
  ones solid, pending ones dashed), etched glass planes behind. No longer "a dashboard in perspective".
- S5: the business's traced system (glass plane, Verity-blue path) stands in soft focus below the process type.
- S7: the Blueprint sheet stands beside the traced system it describes; title block dropped at this scale (micro text
  would fall under 16 px).
- S8: the Blueprint object rests between the two etched glass planes, under the CTA. The end card resolves the story.

| Shot | Composition | Typography | Depth | Material / lighting | Brand | Product | Originality | Still | Gate |
|---|---|---|---|---|---|---|---|---|---|
| S1 hook | 8 | 8 | 8 | 8 | 8 | n/a | 8 | 8 | pass |
| S2a fixed system | 8 | 8 | 8 | 8 | 8 | n/a | 8 | 8 | pass |
| S2b every business | 8 | 8 | 9 | 8 | 8 | n/a | 8 | 8 | pass |
| S3 the study | 8 | 8 | 8 | 8 | 9 | 8 | 9 | 8 | pass |
| S4a the map | 9 | 8 | 9 | 8 | 9 | 8 | 9 | 9 | pass |
| S4b module by module | 8 | 8 | 8 | 8 | 8 | 9 | 8 | 8 | pass |
| S5 the process | 8 | 9 | 8 | 8 | 8 | 8 | 8 | 8 | pass |
| S6 the offer | 9 | 9 | 8 | 8 | 9 | 8 | 8 | 9 | pass |
| S7 who should act | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 8 | pass |
| S8 end card | 8 | 8 | 8 | 8 | 9 | 8 | 8 | 8 | pass |

**FROZEN.** Contact sheet: `R07-boards-frozen.png`. Motion is built between these frames against `vo/words.json`.
Changes to a frozen board go back through the gate.

Carry into motion:
1. Continuity: S3, S4a and S6 sit on the brighter CSS studio; the 3D shots sit on the slightly greyer 3D room. Put the
   CSS shots over the 3D studio background (empty `Studio3D`) so the room never changes tone between cuts.
2. Re-record the offer line ("Verity Business Blueprint", not "Business Analysis Blueprint"), then re-run `words.json`
   for that segment; S6's caption follows.
3. Confirm "from scratch" with Sales/PM before the S4b headline is final.

## What holds the rest back (pass 2 analysis, CSS)

One root cause: **material and depth**. CSS-drawn acrylic in a white studio reads as matte white boards. There is no
real translucency, refraction, reflection or light catching an edge, because there is nothing behind the planes for the
glass to bend (the liquid-glass skill's own rule: refraction only shows against a varied backdrop). Composition,
typography and the Blueprint metaphor are working; the drafting-film shots (S3, S4a, S6) pass because paper is honest
in CSS and glass is not.

Smaller items:
- S4b originality: still recognisably "SaaS dashboard in perspective". Fix by showing the next module being drawn on
  the blueprint grid inside the workspace (the drafting tile is the start of this).
- S5: the receding workspace reads as a smudge. Either make it a recognisable soft shape or remove it and let the type
  stand alone on the studio.
- S8: flat. Add the Blueprint sheet resting in the studio behind the lockup so the end card carries the film's object.

## Decision needed before motion

- **A. Push the CSS world one more pass.** Layered backdrop-filter translucency, an edge highlight where the shaft hits,
  floor reflections. Cheap, likely +1 on material. Keeps everything in one Remotion composition.
- **B. Hybrid, as the art-direction note recommends.** Render the studio and the glass planes (S1, S2a, S2b, S8
  environment) as real 3D (Blender, or `@remotion/three` with transmission materials), composite UI, drafting film and
  type in Remotion, finish in Resolve. Real glass and light; more setup, and a new dependency for the Remotion route.

Recommendation: B for the four object shots, keep S3-S7 in Remotion where drafting film and UI already pass.
