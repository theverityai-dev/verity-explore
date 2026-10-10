# Decisions for the IND series (settled 2026-10-10)

Founder answers are marked **Founder**; everything else was decided by Claude from the existing ad rules and is marked
**Default**. Change a Default by editing this file and the one place it names. Nothing here blocks building.

## Founder decisions

| # | Decision | Where it lands |
|---|---|---|
| F1 | **Strike through ₹5,000: yes.** Struck ₹5,000, then FREE, as in R09. This overrides D1 and the "no strikethrough" default in `video/ads/00-strategy/offer-and-claims.md` for this series | Offer frame and end card (`offer.strike` stays a config flag, default true) |
| F2 | **Guard attendance claim: do not object, do not hedge.** IND10 says what the script says: attendance verified from head office, 20 deployed against 18 in attendance, overtime added. No caution text, no "not live tracking" disclaimer in the creative or the briefs | `industries/IND10-security-housekeeping.md` |
| F3 | **Offer name on screen: "Verity Business Analysis & Blueprint".** Replaces "Verity Business Blueprint™" and "Business analysis blueprint" in this series. The spoken line stays as recorded ("Business Analysis Blueprint") | Offer frame, end card, Blueprint steps header |
| F4 | **Credibility wording on screen: "Our specialised product managers from IIMs and IITs".** Replaces "IIT & IIM selected professionals". The spoken line stays as recorded ("IITs aur IIMs se selected professionals") | Analysis sheet, credibility headline |
| F5 | **No subtitles or captions in any reel until specifically asked for.** This also overrides `video/ads/00-strategy/brand-rules.md` §5 for every ad, not only this series | All reels; the skill and brand rules are updated |
| F6 | **Everything else: Claude decides** | Below |

## Defaults decided by Claude

| # | Question | Decision | Why |
|---|---|---|---|
| D-1 | Education is a Verity hub with no reel | Parked as `IND11`, not built. The ten cover eight hubs | Not requested; keep scope |
| D-2 | Wholesale has no hub of its own | IND09 maps to `manufacturing-b2b`; tag leads `wholesale-distribution` so reporting separates it from IND06 | Two reels share one landing page |
| D-3 | Limited time | "Limited time offer", no date, no countdown | D3 stands |
| D-4 | URL and button on the end card | Keep as R09: "Tell us about your business" button and `verity.plotarmour.in` | The accepted reel; remove the URL line only if marketing prefers an Instant Form only |
| D-5 | Length | Full cut, about 51 to 55 s. A 30 s cut-down (hook, problem, offer, CTA) follows once one reel has results | Accepted R09 length |
| D-6 | The shared tail | Record one master tail once, keeping R09's middle sentence for the four-card visual; line T2 is the one slot that names the reel's own nouns | Keeps the offer identical and the visual intact |
| D-7 | Who records | Founder voice for all ten | One campaign, comparable creatives |
| D-8 | Healthcare data | Synthetic data only; no diagnoses, outcomes or real-looking names | Patient-data sensitivity; no cost to the creative |
| D-9 | Delivery tags in the scripts (`[thoughtful]`, `[sighs]` and so on) | Directions for the speaker, never read aloud | Standard practice |
| D-10 | Script typos | Fixed in `03-vo-recording-sheet.md` ("banda pahuncha", stray space) | The recording follows the sheet |
| D-11 | Variety within one campaign | Each reel owns a world and a signature animation; the tail, offer and end card are identical | Your request: reels need not be identical |
| D-12 | Music | `Timeless (Instrumental)`, drop synced to the Verity reveal in every reel (`01-format-and-timing.md`) | The accepted R09 mix |

## Still worth a check before upload (not blocking)

- Marketing review of the struck price against Meta's ad policy (F1 is decided; policy review is theirs).
- Confirm the founder wants "Verity Business Analysis & Blueprint" on the lead form and landing copy too, so the name matches
  the ad everywhere.
- R09 as delivered still shows "Business analysis blueprint" and "IIT & IIM selected professionals". It is the quality reference, not part of
  this series, so it was not re-rendered; say if you want it updated to F3 and F4.

## What does not need a decision

- The ten opening problems, the three-line dialogue and the "problem is the system, not the X" turn are taken verbatim.
- Offer, credibility and CTA are identical in every reel by design; they are not tailored per industry.
- No product metrics, customer names or testimonials appear on screen. Props are labelled sample data in the config.
