# IND10 Security & Housekeeping: build report

Status: audit passed (v2). 9:16, 1080 x 1920, 30 fps, 62.0 s. Dark world, light objects, English on-screen text, no subtitles.
Voice: `vo/picked/IND10-founder-take1.mp3` (the facility recording); word timings `vo/words.json`; check `vo-check.md`.
Code: `video/src/ads/IND10/` (`Film.tsx`, `props.tsx`), composition `Ad-IND10-Facility-9x16`, `npm run render:ad-ind10`.
Files: `video/renders/ads/IND/verity-meta-IND10-9x16-v2.mp4` (voice only) and `...-v2-bgm.mp4` (with the music bed). v1 is replaced by v2.

## Story

Quick question? > Guards. Housekeeping. Verified? (a site roster fills with 20 guards, a head-office register ticks to 18, two lines
left open in accent, a "VERIFIED?" stamp that never lands) > the phone thread: 20 deployed, only 18 present, overtime added, then
the pile-up to 99+ > who was actually on duty? (five tools in fast cuts: register, roster, supervisor chat, overtime sheet, salary
notebook, then a drawn cross) > it isn't only your staff > the gap between the ground and the records (scattered fragments become
Sites, Deployment, Attendance, Overtime, Salary, joined by one accent line) > hard cut, the Verity mark draws > we understand your
business first (four cards: sites, deployment, attendance, salary) > then we build around it (the workspace with Workforce,
Schedule, Locations, Records, Reports and analytics) > Limited time offer, struck ₹5,000, FREE under "Verity Business Analysis &
Blueprint" (F3) > "Our specialised product managers from IIMs and IITs" (F4) over the traced analysis sheet > the Blueprint steps >
end card.

## Measured

| Check | Result |
|---|---|
| Stability of settled text and cards | 0.03 to 0.07 max frame difference; the residue is the drifting background light (R09 reads the same). A real wobble reads 0.3 or more |
| Frozen frames | 34 % (about 21 s), settled headlines under the voice; no hard cut except the declared phone arrival at 8.8 s |
| Loudness | voice -21.0 LUFS, true peak -4.0 dBTP; with the bed -21.1 LUFS, -4.0 dBTP |
| Music | Timeless (Instrumental) delayed 4.24 s so its drop (25.02 s in the track) lands at 29.26 s, the Verity mark; verified on the stem |

## Not verified

Audio measured, not heard. The film was sampled (29 stills, 6 frames of the delivered file), not watched through.

## Open points

- The recording is quiet (-21 LUFS) against the -14 target; left as recorded.
- The reel runs 62 s, longer than the 51 to 55 s target (D-5), because the opening runs to 29.26 s.
- Content is built standalone from R09's structure. The shared-engine refactor in `02-build-plan.md` is not done: IND02, IND06 and IND09
  would copy this file the same way until it is. Worth doing before the next reel.
- The attendance language ("verified from head office", 20 against 18, overtime added) is as scripted and approved (F2).