# IND10 voiceover check (facility.mp3)

Source: `video/voiceovers/facility.mp3`, copied to `vo/picked/IND10-founder-take1.mp3`. Word timings: `vo/words.json`
(faster-whisper medium; Devanagari text, use the timestamps not the spelling; the 40-45 s offer section was recovered by a second pass).

## Verdict: usable as the IND10 recording

| Check | Result |
|---|---|
| Script match | Matches the approved IND10 script line for line: hook question, the three quoted lines (20 guards, 18 in attendance, overtime), the pause, "verify karna mushkil", the gap line, the tail with its own T2 nouns, the offer, the contact line, the credentials line and "Limited time offer." No missing or extra sentence |
| Length | 58.36 s mono, 44.1 kHz |
| Loudness | -21.0 LUFS integrated, **true peak -1.0 dBTP**, LRA 4.8 LU |
| Pauses | 20 gaps of 0.35-0.85 s; the scripted "[short pause]" after the overtime line is there (16.9-17.4 s); the pause before the contact line is only about 0.4 s |
| Clipping | Peak sits at -1.0 dB. Not clipped, but it leaves no headroom for the music mix |

## Things to know before building

1. **The opening is long: the tail starts at 29.26 s.** The planned openings were 20 to 24 s. Reel length is about 58.4 s of voice
   plus the end-card hold, roughly 62 s. Allowed (decision D-5 is about 51 to 55 s, so this is the longest reel); the cut-down
   covers it later.
2. **The music cannot be trimmed to land the drop.** The track's drop is at 25.02 s, so for it to hit the Verity reveal at 29.26 s the
   music must start 4.24 s into the reel (delay it, not trim it). That is the "negative trim" case already noted in
   `01-format-and-timing.md`; the mix script needs a delay option before IND10 (or IND06) is mixed.
3. **Headroom:** the voice peaks at -1.0 dBTP. Mixing a bed under it will engage the limiter. Pull the voice down about 2 dB before
   the mix (the music is ducked and sits 12 dB under, so the voice level is unchanged in relation).
4. **The tail is slower than R09's.** Its beats come from this recording, not from fixed offsets (see the correction in
   `01-format-and-timing.md`).

## Anchors for `V` (seconds, start of the word)

| Key | t | Words |
|---|---|---|
| q | 0.00 | "Ek baat batao?" |
| hook | 1.80 | "Aapke security guards aur housekeeping staff ki attendance..." |
| yaPhir | 7.94 | "Ya phir?" |
| d1 | 9.52 | "Sir, site pe bees guards deployed hain" |
| d2 | 12.52 | "par attendance mein atharah hi kyun hain?" |
| d3 | 15.14 | "Sir, overtime bhi add hua hai" |
| pause | 16.94 | the scripted short pause (0.5 s) |
| actual | 17.44 | "Aur actual mein kitne log duty pe the... verify karna mushkil?" (ends 21.24) |
| problem | 21.38 | "Problem sirf staff ki nahi hai." |
| problemB | 23.26 | "Problem hai ground pe jo ho raha hai, aur office ke records mein jo dikh raha hai..." |
| gap | 28.68 | "unke beech ka gap." |
| tail | 29.26 | "Verity mein hum pehle aapka business samajhte hain." (T1) |
| t2 | 32.76 | "Aapke sites, staff deployment, attendance aur salary workflows." |
| t3 | 37.06 | "Phir aapke business ke hisaab se system build karte hain." |
| offer | 40.96 | "Aur abhi... ₹5,000 ka business analysis blueprint, FREE!" ("5,000" at 41.64, "free" at 44.52 to 45.2) |
| t5 | 45.14 | "Aap business ko systemise karne ka soch rahe hain... toh contact kijiye." |
| t6 | 49.60 | "Humare IITs aur IIMs se selected professionals..." (credentials on screen at about 49.6 per F4) |
| limited | 57.24 | "Limited time offer." |
| end | 58.36 | voice ends; end card holds about 3.8 s after |

## Other recordings now in `video/voiceovers/`

`restaurants.mp3` (IND02), `Manufactuing.mp3` (IND06), `Wholesale & Distribution.mp3` (IND09) are present and not yet checked.
`convo 1.mp3`, `genz.mp3`, `modern biz.mp3` are older, unused files.
