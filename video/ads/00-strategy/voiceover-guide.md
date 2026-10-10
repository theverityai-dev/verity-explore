# Voiceover guide

Team voices, not synthetic voices. A real voice reads founder to owner.

## Who records what

| Voice | Best for | Default assignment |
|---|---|---|
| Founder | Why Verity exists, philosophy, strong opinion hooks | R01 Core USP, R03 Differentiation |
| Product Manager | Business Blueprint, how implementation works, workflow mapping | R02 Blueprint, R05 Pre-sale implementation |
| Sales | The offer, objections, "is this for my business?", CTA | R04 Pain, R06 Offer |

Vary the voice across concepts so the account does not sound like one ad repeated. Assignments confirmed under D7 in
`offer-and-claims.md`.

## Recording spec

- Quiet room, soft furnishings, phone or USB mic 15-20 cm from the mouth, pop filter or a hand-width off-axis.
- Record WAV (or lossless m4a), 48 kHz, mono. No noise reduction, no compression on the raw take.
- Peaks around -12 dB, never clipping. Record 10 s of room tone at the start of each session.
- Read from the script in `SCRIPT.md`, one block per take, 2-3 takes per block. Clap once at the start of each take.
- Hinglish: read as spoken, not as written. Keep English product words (Verity, Business Blueprint, ₹5,000) crisp.
- Hook lines get extra takes with different energy; the hook decides the ad.
- File names: `R01-H2_block1_take3.wav`. Put raw in `reels/<id>/vo/raw/`, picked in `vo/picked/`.

## After recording

1. Pick takes; fill `templates/vo-recording-sheet.md` (kept as `vo/vo-sheet.md`).
2. Clean: high-pass 80 Hz, light de-ess, gentle compression, normalise to about -16 LUFS for VO alone.
3. Get word timings (Resolve `transcribe_audio` or a Whisper pass) and save as `vo/words.json`; captions and the build read it.
4. Never change a script line after recording without re-recording that block.

## Mix targets

VO leads. Music bed at most 18 dB under VO and ducked. Final delivered file measured at about -14 LUFS integrated, true peak
at or below -1 dBTP.
