# IND09 Wholesale & Distribution: build report

Status: audit passed (v1). 9:16, 1080 x 1920, 30 fps, 56.0 s. Dark world, light objects, English on-screen text, no subtitles.
Voice: `video/voiceovers/Wholesale & Distribution.mp3` (copy in `vo/picked/`), word timings `vo/words.json`. It matches the approved script line for line.
Code: `video/src/ads/series/` (`engine.tsx` shared opening skeleton and short tail, `worlds.tsx` this reel's world, `reels.tsx` its config
and anchors), composition `Ad-IND09-Wholesale-9x16`, `npm run render:ad-ind09`.
Files: `video/renders/ads/IND/verity-meta-IND09-9x16-v1.mp4` (voice only) and `...-v1-bgm.mp4` (with the music bed).

## What is its own

- **World and signature animation:** a godown of cartons with a dispatch bay (three cartons slide toward the truck and wait) beside a dealer ledger whose rows grow while an outstanding total climbs in accent; the two never meet.
- **Pain thread:** three messages plus the pile-up, in this business's words.
- **Three tool cards:** dealer orders chat, godown stock, payment register.
- **Reframe list:** Sales, Inventory, Accounts.
- **Workspace modules (real capability names):** Orders, Inventory, Suppliers, Logistics, Reports and analytics.

The tail is the shared short ending: Verity mark, the four-card map, the workspace, the offer under "Verity Business Analysis & Blueprint",
"Our specialised product managers from IIMs and IITs", the Blueprint steps, the end card (decisions F1, F3, F4).

## Measured

| Check | Result |
|---|---|
| Stability of settled text | 0.05 to 0.07 max frame difference (the drifting background light; a real wobble reads 0.3 or more) |
| Frozen frames | 36 % of the runtime, settled headlines under the voice |
| Jumps | only the declared phone arrival |
| Loudness | -20.8 LUFS voice, -20.9 with the bed; the bed does not raise it |
| Music | Timeless (Instrumental), music delayed 4.46 s so its drop lands on the reveal; drop verified on the stem at video t = 29.48 s |

## Notes

The recording peaks at -0.6 dBTP at source (-3.6 in the render); closing "Limited time offer." at 51.3 to 52.2 s, found by re-transcribing the tail. The last headline ("Your business. Understood first.") is dropped because the voice ends too soon after "prepare karenge".

## Not verified

Audio measured, not heard. Sampled with 27 stills of the build and the delivered file, not watched through.