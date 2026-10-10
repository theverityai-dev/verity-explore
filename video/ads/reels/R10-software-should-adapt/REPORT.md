# R10 Software should adapt (16:9 motion graphic)

Status: audit passed (v2). Source: the presenter's reel `alvina reel.mp4` (audio only, her voice is the master). Landscape 1920 x 1080,
30 fps, 70.0 s. Dark world, light objects, English on-screen text, no subtitles (R09 style, landscape grid).
Code `video/src/ads/R10/` (`Film.tsx`, `parts.tsx`), composition `Ad-R10-Adapt-16x9`, `npm run render:ad-r10`.
Files: `video/renders/ads/R10/verity-meta-R10-16x9-v2.mp4` (voice only) and `...-v2-bgm.mp4` (with the music bed). v1 kept.

## Story (beats keyed to the transcript, `V` in Film.tsx)

One thing is clear > every business has its own way of working (four different workflow shapes) > processes, approvals, teams,
decisions, none defined in a day > a system takes years to form > software asks your business to adapt (a rigid template, the
business forced into it) > hard cut, the Verity mark draws > "Verity's approach is different", "we don't start with software" >
we understand your business first (a four-card map) > configured on that understanding, nothing extra (the workspace builds, three
unused extras struck and slid away, every needed module ticked) > pricing follows understanding > requirement, proposed solution,
your approval, then implementation > software should not decide your framework, your business should not change for software >
software should be built around how you work (a soft container forms around the business's own shape) > end card.

## Measured

| Check | Result |
|---|---|
| Stability of settled text and cards | 0.0005 to 0.013 max frame difference (target under 0.05); the end-card tagline 0.058 is the drifting background light |
| Frozen frames | 46 % (about 32 s): settled headlines and diagrams under the voice, no undeclared hard jump; the one 3.3 s dead stretch (16.7 to 20 s) was fixed in v2 with a pressing movement |
| Jumps | none above the 0.18 scene threshold (the cut at 22.3 is dark to dark) |
| Loudness | voice -18.2 LUFS, true peak -1.3 dBTP; with the bed -18.3 LUFS, -1.3 dBTP (the bed does not raise it) |
| Music | Timeless (Instrumental), starts 2.72 s into the track; the drop lands at 22.3 s, the moment the Verity mark draws (verified on the stem) |

## Not verified

Audio was measured, not heard. The film was sampled at 26 stills plus six frames of the delivered file, not watched through.

## Open points

- **Pricing line is new.** "Pricing is decided after that understanding" is in her script but not in the approved claims
  (`offer-and-claims.md`). It is on screen as a two-card beat (47.3 to 50.3 s). Cut `Pricing` and its headline in Film.tsx if it is not approved.
- No offer or struck price: her script has none. The end card carries the button and URL only.
- Her audio is at -18.2 LUFS, quieter than the -14 target; left untouched.
- Hook (0 to 4 s) is a mostly empty sheet with figures drawing in; a stronger first beat is possible if wanted.