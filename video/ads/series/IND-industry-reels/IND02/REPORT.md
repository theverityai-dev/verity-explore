# IND02 Food & Hospitality: build report

Status: audit passed (v1). 9:16, 1080 x 1920, 30 fps, 51.5 s. Dark world, light objects, English on-screen text, no subtitles.
Voice: `video/voiceovers/restaurants.mp3` (copy in `vo/picked/`), word timings `vo/words.json`. It matches the approved script line for line.
Code: `video/src/ads/series/` (`engine.tsx` shared opening skeleton and short tail, `worlds.tsx` this reel's world, `reels.tsx` its config
and anchors), composition `Ad-IND02-Restaurant-9x16`, `npm run render:ad-ind02`.
Files: `video/renders/ads/IND/verity-meta-IND02-9x16-v1.mp4` (voice only) and `...-v1-bgm.mp4` (with the music bed).

## What is its own

- **World and signature animation:** a kitchen ticket rail (seven tickets, each with a slow timer arc that never finishes before the next ticket lands) above billing slips, the last slip with no table number, drawn open in accent.
- **Pain thread:** three messages plus the pile-up, in this business's words.
- **Three tool cards:** kitchen orders, ingredient stock, day-end accounts.
- **Reframe list:** Orders, Inventory, Accounts.
- **Workspace modules (real capability names):** Orders, Inventory, Suppliers, Workforce, Reports and analytics.

The tail is the shared short ending: Verity mark, the four-card map, the workspace, the offer under "Verity Business Analysis & Blueprint",
"Our specialised product managers from IIMs and IITs", the Blueprint steps, the end card (decisions F1, F3, F4).

## Measured

| Check | Result |
|---|---|
| Stability of settled text | 0.05 to 0.07 max frame difference (the drifting background light; a real wobble reads 0.3 or more) |
| Frozen frames | 29 % of the runtime, settled headlines under the voice |
| Jumps | only the declared phone arrival |
| Loudness | -20.7 LUFS voice, -20.8 with the bed; the bed does not raise it |
| Music | Timeless (Instrumental), music starts 0.04 s into the track; drop verified on the stem at video t = 24.98 s |

## Notes

The recording is the shortest of the set (47.9 s) and ends on its own "Limited time offer." line (46.7 to 47.7 s).

## Not verified

Audio measured, not heard. Sampled with 27 stills of the build and the delivered file, not watched through.