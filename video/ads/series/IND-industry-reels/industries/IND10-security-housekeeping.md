# IND10 Security & Housekeeping Services

Status: brief   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: dark world, light objects   Voice: Founder (D-7)
Hub: `personal-local-services` (`/industries/personal-local-services/`)   Lead business type: `cleaning-services`   Variants: facility-management (hub real-estate-construction; same story, with asset and compliance panels), car-washes
System reveal source of truth: `content/businesses/cleaning-services.js`.

**Who should feel understood:** A security or housekeeping contractor who cannot prove, from the head office, who actually stood on which site.

The shared parts (ending, brand laws, audio rule) are in `01-format-and-timing.md`; this reel owns its opening world, its
signature animation and its system reveal. Nothing here is a template: change the world if a better one is found, as long as
it passes the keyframe gate.

## VO: the opening (unique to this reel)

Delivery tags are directions for the speaker, not words (D-9).

> [thoughtful] Ek baat batao?  
> Aapke security guards aur housekeeping staff ki attendance… head office se verify ho paati hai?  
> [sighs] Ya phir…  
> "Sir, site pe 20 guards deployed hain."  
> "Par attendance mein 18 hi kyun hain?"  
> "Sir, overtime bhi add hua hai."  
> [short pause]  
> Aur actual mein kitne log duty pe the… verify karna mushkil?  
> [thoughtful] Problem sirf staff ki nahi hai. Problem hai ground pe jo ho raha hai, aur office ke records mein jo dikh raha hai… unke beech ka gap.

The recording continues into the master tail, which starts at "Verity mein hum pehle aapka business samajhte hain."
(`03-vo-recording-sheet.md`).

**Tail variation.** Tail line T2 for this reel: "Aapke sites, staff deployment, attendance aur salary workflows." This reel's tail names its own four nouns (sites, staff deployment, attendance, salary) in place of the default "workflows, teams, requirements". The tail is otherwise identical.

## Creative direction

**World.** A site gate seen from the front: a post with a sign-in board, a row of numbered shift slots along a roster strip above it, and, on the right, the head-office attendance register as a stack of paper sheets. Two worlds, one ground and one office, drawn as light objects on the dark room.

**Hook, first 2 s.** Headline (draft, English, oversized): "Guards. Housekeeping." / "Verified?". The empty roster strip with its numbered slots and the blank register page. Headline upper left; no phone yet.

**Signature animation.** The ground-versus-records gap, measured. A row of 20 guard markers fills the roster strip while the register beside it ticks up to 18. The two counts land on a pair of large numerals, 20 against 18, and a thin gap bar between them is the only accent. Overtime hours then stack up on the register side with nothing on the ground side to match. The "verified" stamp keeps hovering and never lands.

**Pain beat.** The phone thread, kept light, with the roster strip and the register dimmed behind it. After "Sir?" the counts 20 and 18 stay faintly legible behind the thread.

| Sender | Message (English, on screen) | Attachment chip |
|---|---|---|
| Site supervisor | Sir, 20 guards are deployed at the site. | Roster.pdf |
| HR | But the attendance shows only 18. | Attendance sheet |
| Payroll | Sir, overtime has been added too. | OT sheet |

Followed by three short ones ("Sir?", "Urgent", "Please reply") and a 99+ badge. Chat list rows: Site supervisor "Roster sent", HR "Attendance mismatch", Payroll "Overtime added", Client site "Guard absent?", Zone manager "Cover needed", Housekeeping lead "Shift change".

**Montage (the scattered tools, about 5 fast cuts, drawn as industry objects).** Paper attendance register; Roster spreadsheet; Supervisor chat; Overtime sheet; Salary notebook.

**Problem reveal.** The chaos freezes on "Business system?" with a drawn cross, held still. Then two headlines, A: "It isn't only your staff."  B: "The gap between the ground" / "and the records."
Ground and records are two surfaces with a visible gap; the five fragments become an ordered list (Sites, Deployment, Attendance, Overtime, Salary) and the gap bar closes onto one surface.

**Verity system reveal (tailored; the rest of the tail is shared).** The mapped business turns into the real Verity interface for this industry, built module by module:
- Panel "Operations": Sites serviced, Shifts uncovered, Supplies cost variance, Contracts below margin
- Attention row: "7 shifts short this morning" (illustrative figure, as in the product content)
- Workflow shown: "Shift delivery"
- Workspace modules (real capability names, `content/capabilities.js`): Workforce, Schedule, Locations, Records, Reports and analytics
- Analysis sheet bottom dimension: "Deployment to salary"

## Props and truth

- Site names and guard counts (20, 18) are invented and labelled sample data
- Overtime figures are sample data
- Panel figures come from `content/businesses/cleaning-services.js` (Shift delivery and Cover management are its real workflows); the facility-management panel is the alternate
- Every figure and name on screen is a labelled sample prop or comes from the product content; no metrics, customers or testimonials.

## Risks and checks

- The claims are as scripted (decision F2): attendance verified from head office, 20 deployed against 18 in attendance, overtime added. No disclaimer is added to the creative.
- The headline stays "the gap" between the ground and the records, not an accusation of named staff.
- The tail middle line is longer than the default (four nouns); confirm the animation timing absorbs it (`01-format-and-timing.md`).
- Offer, name, credibility wording and URL: `00-decisions.md` F1, F3, F4 and D-4.
## Keyframes to score before animating (8 or above, `verity-reel` gate)

1. Hook frame (0.9 s)  2. Pain frame with the thread  3. Montage frame (one of the five)  4. Freeze "Business system?"
5. Reframe frame with fragments or islands joining  6. System reveal, panel built  7. Offer frame (shared, check the strike)
8. End card (shared)

A frame that scores under 8 is redesigned before any motion is written.



