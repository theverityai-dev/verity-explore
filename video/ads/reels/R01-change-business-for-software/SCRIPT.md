# R01 script

Voice: Founder   Language: natural Hinglish VO, English on-screen headlines, Hinglish captions   Target length: about 27 s
Source of truth for timing: `video/src/ads/tokens.ts` (`T`). Copy in code: `video/src/ads/copy.ts` (`R01_H1`).

**Order of work: voice first, then word timings, then retime the animation.** Never squeeze the voice into the animation.
Every time below is provisional until the founder has recorded and `vo/words.json` exists.

## Variant H1 (tightened script)

| # | Provisional time | Spoken (VO) | On-screen headline | Visual (carrier: the four cards, then the glass frame) |
|---|---|---|---|---|
| 1 | 0-3 | Aapka business software ke hisaab se kyun chale? | Stop changing / your business / **to fit your software.** (one line at a time) | Clean frame, headline only |
| 2 | 3-7 | Har business ka apna way of working hota hai. | Every business has its own way of working. | Four different cards enter at different angles |
| 3 | 7-11 | Lekin most business software ek fixed system deta hai. | Most software gives you one fixed system. | Cards snap into a rigid template, brackets show them being forced to fit |
| 4 | 11-15 | Verity pehle aapka business samajhta hai. | Verity starts by **understanding yours.** | Cards release into one chain, an accent path is read along it |
| 5 | 15-19 | Workflows, teams, approvals aur actual requirements. | We map how your **business actually works.** | Glass frame builds around the chain; each row takes the attention tint as it is named, then shows "Mapped" |
| 6 | 19-22 | Phir uske around system configure hota hai. | Then it configures the **system around it.** | Rows tick one by one; "Proposed system blueprint" footer |
| 7 | 22-25 | Isi process se banta hai aapka Business Blueprint. | none (the offer frame carries its own label) | The frame moves up and becomes the offer: VERITY BUSINESS BLUEPRINT™ / ₹5,000 value / Currently complimentary / Limited-time offer |
| 8 | 25-27 | **Get your free Business Blueprint.** | none | Accent CTA pill, held about 2 s |

The ₹5,000 value is shown, not spoken. Offer signal: from about 6 s a small chip reads "Business Blueprint™ · ₹5,000 value ·
Currently complimentary" and stays until the full offer frame, so a cold viewer meets the proposition twice before the CTA.
Wording per `00-strategy/offer-and-claims.md` D1, D2 and D3. Captions are burned in for lines 1-7; none on line 8 because the
CTA pill carries the same words in the caption position.

## Direction for the founder (read this before recording)

Calm, confident, conversational Hinglish. You are explaining something you have noticed about businesses, not selling a
SaaS product. No radio voice, no exaggerated enthusiasm, no artificial pauses, no "startup founder" performance. Speak
slightly faster than normal conversation, but let the important phrases breathe. Do not rush line 1 to fit two seconds;
the delivery decides the length.

## After recording

1. Pick takes, fill `vo/vo-sheet.md`, clean per `00-strategy/voiceover-guide.md`.
2. Produce `vo/words.json` (word-level timings).
3. Retime `T` in `tokens.ts` from the phrase starts, replace the evenly spread caption reveal with real word timings.
4. Re-render as the next version and re-run the audit.
5. Only then sound design (restrained: soft UI clicks, one or two confirmation sounds, understated music, no whooshes), final mix and QA.

## Variants

H2 "Your business isn't standard. So why is your software?" needs its own Hinglish line and caption before it is built.
H3 is not written. Both swap only `copy.ts`; no scene changes.

## Locked

- [ ] Read aloud by a teammate other than the author
- [ ] Every product word and number is approved (offer wording per `offer-and-claims.md` D1/D2/D3)
- [ ] No block changes after recording without a re-record
