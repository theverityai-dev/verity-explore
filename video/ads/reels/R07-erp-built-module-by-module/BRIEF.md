# R07 Built around your business (ERP search)

Status: audit (v4 passes the motion and loudness gates; finishing in Resolve and the offer-line re-record pending, see REPORT.md)
Tier: 1 Performance   Length: 43.5 s (VO 40.8 s + end-card hold)   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: light
Engine: hybrid. 3D world in `@remotion/three` (studio, physical glass, light, camera), information in Remotion HTML,
finishing in DaVinci Resolve. Composition `Ad-R07-ERP-9x16`, `npm run render:ad-r07` (needs `--gl=angle`).
Voice: Founder, recorded (`vo/picked/R07-founder-take1.wav`, -22 LUFS raw; normalised copy `video/public/ads/R07/vo.wav` at -16 LUFS)
VO language: Hinglish. Captions: burned in, chunked from `vo/words.json`.

## Proposition

1. Selling: a business system built module by module around how your business works.
2. For: owners already searching for an ERP.
3. Why care: most ERPs are one fixed system; Verity's product managers study your business first.
4. Next step: Get your Business Blueprint (Meta Learn More button, then a call).

One claim: software should be built around your business, not the other way around.
Offer: Verity Business Blueprint™, ₹5,000 value, free until Diwali (campaign variable `CAMPAIGN` in `video/src/ads/R07/boards.tsx`).

## Documents

- `TREATMENT.md` concept, world, shot-level direction
- `BOARDS.md` keyframes, gate scores, freeze, carry-overs
- `R07-boards-frozen.png` the ten frozen keyframes
- `vo/words.json` word timings; `video/src/ads/R07/words.ts` generated from it
- `REPORT.md` audit and defect list (after render)

## Before live

- Re-record the offer line ("Verity Business Blueprint", not "Business Analysis Blueprint")
- Sales/PM confirm "from scratch" and the IIM/IIT claim (`offer-and-claims.md`)
- Retire or update when the Diwali offer ends
