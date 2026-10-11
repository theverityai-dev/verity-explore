# IND06 Manufacturing: build report

Status: audit passed (v1). 9:16, 1080 x 1920, 30 fps, 56.0 s. Dark world, light objects, English on-screen text, no subtitles.
Voice: `video/voiceovers/Manufactuing.mp3` (copy in `vo/picked/`), word timings `vo/words.json`. It matches the approved script line for line.
Code: `video/src/ads/series/` (`engine.tsx` shared opening skeleton and short tail, `worlds.tsx` this reel's world, `reels.tsx` its config
and anchors), composition `Ad-IND06-Factory-9x16`, `npm run render:ad-ind06`.
Files: `video/renders/ads/IND/verity-meta-IND06-9x16-v1.mp4` (voice only) and `...-v1-bgm.mp4` (with the music bed).

## What is its own

- **World and signature animation:** a production line (Cut, Make, QC, Pack) with job cards riding the conveyor, one stalling at QC with the station dashed in accent, a dispatch truck waiting, and a raw-material gauge falling to Low.
- **Pain thread:** three messages plus the pile-up, in this business's words.
- **Three tool cards:** sales orders, production tracker, inventory register.
- **Reframe list:** Sales, Production, Inventory, Dispatch.
- **Workspace modules (real capability names):** Orders, Work, Inventory, Logistics, Reports and analytics.

The tail is the shared short ending: Verity mark, the four-card map, the workspace, the offer under "Verity Business Analysis & Blueprint",
"Our specialised product managers from IIMs and IITs", the Blueprint steps, the end card (decisions F1, F3, F4).

## Measured

| Check | Result |
|---|---|
| Stability of settled text | 0.05 to 0.07 max frame difference (the drifting background light; a real wobble reads 0.3 or more) |
| Frozen frames | 35 % of the runtime, settled headlines under the voice |
| Jumps | only the declared phone arrival |
| Loudness | -20.5 LUFS voice, -20.6 with the bed; the bed does not raise it |
| Music | Timeless (Instrumental), music delayed 4.5 s so its drop lands on the reveal; drop verified on the stem at video t = 29.52 s |

## Notes

The recording is long (52.5 s) and its closing "Limited time offer." sits at 51.3 to 52.3 s, which the first transcription pass missed; found by re-transcribing the last seconds.

## Not verified

Audio measured, not heard. Sampled with 27 stills of the build and the delivered file, not watched through.