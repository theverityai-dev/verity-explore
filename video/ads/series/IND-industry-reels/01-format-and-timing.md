# Format and timing: what is shared, what changes

The ten reels are one campaign with ten different openings: the structure repeats, the world and animation do not. The format is the accepted R09 reel
(`video/renders/ads/R09/verity-meta-R09-9x16-v1-bgm.mp4`, code `video/src/ads/R09/`): dark world, light objects, English
on-screen text, no subtitles, still text, a music bed whose drop lands on the Verity reveal. Build rules: skill
`verity-reel` (`.claude/skills/verity-reel/`).

```text
 UNIQUE PER INDUSTRY (about 20-24 s)                      SHARED, identical in all ten (about 31 s)
 ----------------------------------------------------     ------------------------------------------------------------
 O1 hook     O2 pain      O3 montage    O4 problem     |  T1 Verity   T2 offer    T3 credibility  T4 payoff   T5 end card
 question    3 messages   tools,        "problem is    |  maps the    ₹5,000 to   analysis sheet  Blueprint   lockup, line,
 on a phone  stack up     freeze        the system"    |  business    FREE        traced          steps       offer, CTA
```

## Unique part: four beats

| Beat | VO (from `03-vo-recording-sheet.md`) | On screen | R09 equivalent |
|---|---|---|---|
| **O1 Hook** | "Ek baat batao?" and the industry question | Oversized industry headline in the first 2 s, no logo. A small phone with the industry's chat list filling with unread rows | "Quick question?" and "Still running your business on WhatsApp?" |
| **O2 Pain** | "Ya phir…" and the three quoted lines | Camera pushes the phone to fill the frame; the thread stacks one message per quoted line, with attachments, then a short "Sir?" run and a 99+ badge | 5-11 s |
| **O3 Montage** | The chuckle line (the scattered tools) | Four industry tool cards in fast cuts, then a drawn cross and "Business system?" held still | 11-15 s |
| **O4 Problem** | "Problem X ki nahi hai. Problem proper system ki hai." | Two headlines (A: "It isn't your X.", B: the missing system). Five tool fragments morph into an ordered list of roles | 15-21 s |

The tail begins on the word "Verity" ("Verity mein hum pehle aapka business samajhte hain."), exactly where R09's tail begins
at 20.9 s, and the Verity mark draws itself on a hard cut.

## Shared tail: the master tail, timed from R09's recording

> **Correction (2026-10-10):** the offsets below are *indicative only*. The real IND10 recording (IND10/vo-check.md) has its tail at 29.26 s with beats at +3.5, +7.8, +11.7, +15.9, +20.3 and +28.0 s, slower than R09's, because its T2 line is longer and the pauses differ. Each reel's tail beats must therefore be read from its own word timings (V keys `tail`, `t2`, `t3`, `offer`, `t5`, `t6`, `limited`), never computed from this table.

The tail is identical except the one-line T2 (rel. 2.9 s), which names the reel's own nouns; the default is the line below and IND10 uses "Aapke sites, staff deployment, attendance aur salary workflows." The four-card Business map takes its four card titles from the reel's config, so IND10's cards read Sites, Deployment, Attendance, Salary.

R09's recording already contains the fixed ending. Times below are seconds from the start of the tail (R09 absolute time
minus 20.9). The same offsets drive the same animation in all ten reels; only the tail start moves.

| Rel. time | VO | Visual (R09 component) |
|---|---|---|
| 0.0 | "Verity mein hum pehle aapka business samajhte hain." | Mark draws on a hard cut; "We understand your business first." |
| 2.9 | "Aapke workflows, teams aur actual requirements ko map karke" | Business map: four cards (workflows, team, requirements, way of working) around "Your business" |
| 6.2 | "Phir aapke business ke hisaab se system build karte hain." | Business > Understanding > System chips; the workspace builds module by module |
| 9.9 | "Aur abhi ₹5,000 ka Business Analysis Blueprint, FREE!" | Offer frame: "Verity Business Analysis & Blueprint" (F3), Limited time offer, struck ₹5,000, FREE (the cleanest frame) |
| 14.3 | "Aap business ko systemise karne ka soch rahe hain, toh contact kijiye." | Analysis sheet traced, callouts |
| 18.7 | "Humare IITs aur IIMs se selected professionals" | "Our specialised product managers from IIMs and IITs" (F4) |
| 21.9 | "aapke business ko analyse karke aapka Business Blueprint prepare karenge." | Blueprint steps (header "Verity Business Analysis & Blueprint"): current workflow, requirements, proposed system, ticked |
| about 26.5 | "Limited time offer." (new, not in R09's audio) | End card enters with the line: lockup, "Business software configured around how you work.", struck ₹5,000 and FREE, button, URL |

Tail length: 26.2 s of speech, about 1.4 s for "Limited time offer.", then the end card holds about 3.8 s.
**Total per reel is the opening length plus about 31.4 s**, so an opening of 20 to 24 s gives a 51 to 55 s reel. Final lengths
come from the recordings.

## Audio

- **One master tail.** Record it once (see the recording sheet) and splice it behind each opening. R09's tail is a usable
  fallback but lacks the closing line and may not match the new openings' tone; listen to one join before committing.
  If a join is audible, re-record the tail once, not ten times.
- **One music bed, one rule.** `Timeless (Instrumental).mp3`, drop locked to the tail start: the groove arrives with the
  Verity mark in every reel. Trim offset = 25.02 minus tail start (use `find-drop.py`). **If an opening runs past 25.0 s the
  offset goes negative**: the mix script must then delay the music instead of trimming it (a small change, listed in
  `02-build-plan.md`).
- **Level and loudness** as `references/audio.md` in the skill: bed about 12 dB under the voice, ducked, mix loudness equal
  to the voice-only file. The founder's raw VO measures quiet (R09: -20.8 LUFS); lift the whole VO once at the source if the
  campaign needs -14 LUFS.

## Per-reel timing anchors

When the opening is recorded, transcribe it (`verity-reel` `scripts/transcribe.py`) and write one `V` object per reel. All
keys are seconds of the word's start:

`q` the industry question, `yaPhir`, `d1` `d2` `d3` the three quoted lines, `chuckle`, `problem`, `problemB`, `tail`.

The tail beats are then `tail + rel time` from the table above and never edited by hand.

## Sound-off check

Every spoken idea also appears once on screen: the hook headline, the three messages, "Business system?", the two reframe
headlines, then the shared tail headlines. There are No captions or subtitles (F5).





