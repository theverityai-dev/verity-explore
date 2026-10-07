# Film: Implementation philosophy (4:3, dark, Remotion)

Engine: Remotion (named in the brief; shares fonts, Mark and tokens with the other films).
Canvas: 1440 x 1080, 60 fps, about 116.5 s. Theme: dark (explicit in the brief; accent #6F8FFF as briefed, UI cards use the real Verity light UI with #0A84FF).
Voice: existing Hindi-English VO, not in the repo. Timings below are estimated from the script at about 2.4 words/s plus paragraph pauses. All beat times live in `src/film/implementation/tokens.ts` (`T`), so retiming is a number edit.
One claim: the business does not adapt to the software; the software adapts to the business.
Signature move: one workflow that never moves, while everything else forms, breaks or grows around it.
Current (seam direction): content travels LEFT (the camera travels right along the workflow).
Carrier: the workflow graph. It persists from the first morph (paper becomes nodes) to the last shot.

## Deviations from the brief, and why
- 24 scenes become 16 beats (about 7 s each). The brief's 24 scenes in 116 s leave 4 s per idea, which our audits showed does not land. Every scene's content is kept as an event inside its beat.
- Scene 1's physical objects are drawn (flat editorial vector with depth and focus layers), not CSS photoreal paper. Faked photography reads as slop.
- Scene 6 to 7 uses a deliberate hard cut to black (the brief asks for it). It is the only cut, declared.
- Scene 14 and scene 16 overlap strongly in the brief (workflow node to UI component). Scene 14 is the build-around centerpiece; scene 16 is the one-to-one pairing after reduction.

## Timing (seconds)
| Beat | Time | Scenes | VO |
|---|---|---|---|
| B1 Business | 0-6.5 | 1 | Mere dad ke business... |
| B2 Way of working | 6.5-13.5 | 2, 3 | Har business ka apna... |
| B3 Evolution | 13.5-23 | 4 | Processes, approvals... |
| B4 Rigid software | 23-33.5 | 5, 6 | Problem tab aati hai... |
| B5 Verity arrives | 33.7-42 | 7, 8 | Verity ka approach... / Yahan hum... |
| B6 Understand | 42-49.5 | 9, 10 | Pehle business ko samajhte hain... |
| B7 Improve | 49.5-55.5 | 11, 12 | kya improve... / actual requirement |
| B8 Configure | 55.5-65 | 13, 14 | Us understanding ke basis par... |
| B9 Only what is needed | 65-76.5 | 15, 16 | Isliye aapko... / Jo business ko chahiye... |
| B10 Pricing after | 76.5-81.8 | 17 | Aur pricing bhi... |
| B11 Proposal, approval | 81.8-89 | 18, 19 | Pehle requirement... |
| B12 Implementation | 89-93 | 20 | (pause) |
| B13 Rigid fails | 93-98 | 21 | Because software... |
| B14 Business stays | 98-104 | 22 | Business ko apna tareeka... |
| B15 Software adapts | 104-109.5 | 23 | Software ko us tareeke ke around... |
| B16 Final | 109.5-116.5 | 24 + end card | That is what Verity does. |

## Approved text (everything else is shapes)
Node labels (18 px caps, beat 2 only): REQUEST, REVIEW, DECISION, APPROVAL, EXECUTION.
Punctuation words: UNDERSTAND, PROCESS, PEOPLE, DECISIONS, RULES, CONFIGURE, BUSINESS, UNDERSTANDING, REQUIREMENTS, PROPOSED SYSTEM, APPROVED, VERITY, RUN BUSINESS YOUR WAY.
UI card words come from the product: Workflows, Records, Approvals, Permissions, Control. No currency, no pricing, no counters.
