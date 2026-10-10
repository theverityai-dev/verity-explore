# R01 H1 report (silent draft)

Delivered file: `video/renders/ads/R01/verity-meta-R01-H1-9x16-v5.mp4` (1080 x 1920, 30 fps, 27.0 s, 4.7 MB, no audio yet)
Latest audit (v5): 1 hold at 0.97 s, 4% frozen, no jumps. Sections below describe v1-v3; the v4 and v5 rows in the table cover the retime.
Engine: Remotion. Composition `Ad-R01-H1-9x16`. Theme: light (site tokens).

## Versions

| Version | Result |
|---|---|
| v1 | Audit failed: 26% of runtime frozen, three holds over 1.0 s (8.6 s, 12.2 s, 16.7 s). Camera push too faint to register; dot and tick changes too small to count as motion |
| v2 | Audit passed: 2% frozen, one 0.67 s hold, no jumps. Layout defect: footer cramped against the last row and the frame bottom |
| v3 | Audit passed (same numbers). Chain moved up 14 px, footer given room |
| v4 | Retimed to the tightened script (hook 0-3 s, new blocks), offer chip moved from 10.4 s to 6 s with the full D1 wording. Audit: a 1.2 s hold in the hook, and two headlines still showed old copy because one edit had not applied. Caught from sampled frames |
| v5 | Headlines reveal one line at a time; headline copy corrected (B5 "We map how your business actually works", B6 "Then it configures the system around it"). Audit: one hold at 0.97 s, 4% frozen, no jumps. Current draft |

## Audit (v3, `audit-render.sh`)

- Holds at or over 0.6 s: one, at 4.23 s for 0.67 s (cards finishing their entry, under the 1.0 s limit). The CTA hold at the end is declared (25.0-27.0 s).
- Jumps over 0.18: none. No cuts; every seam is carried by the four cards, then the glass frame.
- Loudness: not measured, no audio yet.

## What changed between versions

- Row attention tint moves down the chain in three sweeps (reading the path, status, approval) so no window stays still.
- Rigid beat: the template outline darkens and the cards compress 1.5% while brackets mark them being forced to fit.
- Camera push 2% to 6% over the film; glass frame narrowed to 900 px so the push cannot crowd the canvas edge.
- Connector aligned to the dots (x 191); offer scope text broken by hand; footer timing and spacing.

## Frames viewed at full size

1.5, 4.5, 7.5, 9.5, 11, 13, 16.5, 20, 23.5, 26 s (v1 pass) and 9.0, 12.8, 21.5, 26.0 s (v2), 14.0 and 21.5 s (v3). Safe areas hold (hook, offer and CTA inside y 250-1500; CTA y 1316-1428). The rupee sign renders in Inter.

## Open defects and what to fix next

1. **No voiceover.** Captions reveal evenly across each line. Replace with real word timings (`vo/words.json`) after the founder records, then retime `T` in `tokens.ts`. The hook line probably runs past 2 s.
2. **Offer is early only as a chip.** The full offer frame lands at 22 s; the chip is on screen from 10.4 s. If lead data or a cold read says that is too late, move the chip to about 6 s.
3. **Hook frame is intentionally empty** below the headline (y 650-1380). Check on a phone that it reads as clean and not unfinished. If not, bring the first card in earlier.
4. **Footer spacing is still tight** (about 12 px above it). Acceptable, but move the chain up another 8 px if it looks cramped on device.
5. **Captions duplicate the headline in another language.** Check on a phone for text overload with sound off.
6. **Sound design not started.** Music bed, UI clicks on the ticks and the snap in the rigid beat.
7. **Not yet run:** the full `templates/qa-checklist.md`, the 4:5 cut, captions SRT, poster still, and a phone viewing.
8. **Not done:** formal shot plan (`SHOTPLAN.md`). The build followed the keyframes in `Chips.tsx` and `Frame.tsx`; write the plan from the code before building R02.
