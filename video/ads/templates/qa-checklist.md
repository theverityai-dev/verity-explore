# <ID> QA checklist

Run on the delivered MP4, not the source. Record results in the reel's `REPORT.md`.

## Message
- [ ] Cold viewer can answer all four questions within 3 s (sell, for whom, why care, next step)
- [ ] Hook is in the first 2 s and is readable with sound off
- [ ] CTA names a deliverable; no "Learn more" / "Contact us"
- [ ] Every claim and figure is approved; sample data is marked in the brief

## Brand
- [ ] Verity tokens only, one theme throughout, Inter only, accent used for state/data/CTA only
- [ ] Real Verity UI; no stock imagery, no faked photography
- [ ] Wordmark is the lowercase logo, not typed text

## Motion (verity-reel gates)
- [ ] `scripts/audit-render.sh`: no undeclared hold over 1.0 s, no undeclared jump
- [ ] Every seam has a carrier object and a ledger row
- [ ] No instant text/number swaps; no idle wobble loops
- [ ] Frames sampled at every block, viewed at full size, defect list written

## Meta format
- [ ] 1080 x 1920, hook/offer/CTA inside safe band (top 250, bottom 420 free)
- [ ] Captions burned in, readable, match the VO word for word
- [ ] Nothing under 16 px on screen; checked on a phone

## Audio
- [ ] VO clean, no clipping, no room noise
- [ ] Integrated loudness about -14 LUFS, true peak at or below -1 dBTP (measured)
- [ ] Music under VO and ducked

## Delivery
- [ ] Render versioned (`-v1`), never overwritten
- [ ] Brief, script, shot plan and report sit next to the render
- [ ] Sign-off on offer wording and price (founder / sales)
- [ ] Status and `test-matrix.md` row updated
