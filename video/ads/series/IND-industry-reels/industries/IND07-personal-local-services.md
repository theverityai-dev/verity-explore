# IND07 Personal & Local Services

Status: brief   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: dark world, light objects   Voice: Founder (D-7)
Hub: `personal-local-services` (`/industries/personal-local-services/`)   Lead business type: `repair-services`   Variants: salons, car-washes, laundry-services
System reveal source of truth: `content/businesses/repair-services.js`.

**Who should feel understood:** A service business owner who spends half the day on the phone locating staff and chasing payments.

The shared parts (ending, brand laws, audio rule) are in `01-format-and-timing.md`; this reel owns its opening world, its
signature animation and its system reveal. Nothing here is a template: change the world if a better one is found, as long as
it passes the keyframe gate.

## VO: the opening (unique to this reel)

Delivery tags are directions for the speaker, not words (D-9).

> [thoughtful] Ek baat batao?  
> Aapki service team kahan hai, kaunsa kaam complete hua, aur kis customer ka payment pending hai… sab pata rehta hai?  
> [sighs] Ya phir…  
> "Bhaiya, banda pahuncha?"  
> "Sir, kaam complete hua?"  
> "Customer se payment le li?"  
> [chuckles] Din ka aadha time customers aur staff ko call karne mein nikal jaata hai!  
> [thoughtful] Problem employees ki nahi hai. Service operations ko track karne ka proper system nahi hai.

The recording continues into the master tail, which starts at "Verity mein hum pehle aapka business samajhte hain."
(`03-vo-recording-sheet.md`).

## Creative direction

**World.** A simple route map: street lines, a handful of job locations as pins, and three technician markers. Drafting-film materials on the dark room, with a job list card standing at the right.

**Hook, first 2 s.** Headline (draft, English, oversized): "Where is your team?" / "Which job is done?" / "Who has paid?". The route map with job pins lit and technician markers parked. Headline upper left.

**Signature animation.** Technician markers travel along route lines to job pins at an even speed; each job chip changes status through a tween. One marker stops mid-route and one finished job still shows "payment pending".

**Pain beat.** The phone thread over the dimmed map.

| Sender | Message (English, on screen) | Attachment chip |
|---|---|---|
| Dispatcher | Has the technician reached? | Job 118 |
| Customer | Sir, is the job complete? | Photo |
| Accounts | Did you collect the customer's payment? | Pending |

Followed by three short ones ("Sir?", "Urgent", "Please reply") and a 99+ badge. Chat list rows: Technician "Reached site", Customer "Where are you?", Dispatcher "Slot clash", Accounts "Payment pending", Staff "Leave tomorrow", Customer "Job incomplete".

**Montage (the scattered tools, about 5 fast cuts, drawn as industry objects).** Customer chat; Job schedule sheet; Staff call log; Collections notebook; Payment screenshots.

**Problem reveal.** The chaos freezes on "Business system?" with a drawn cross, held still. Then two headlines, A: "It isn't your people."  B: "No proper system" / "tracks the work."
Map, job list and payment slip are three separate things; markers, jobs and payments are drawn onto one board.

**Verity system reveal (tailored; the rest of the tail is shared).** The mapped business turns into the real Verity interface for this industry, built module by module:
- Panel "Service": Jobs attended, First-visit fix, Warranty claims unfiled, Van stock unreconciled
- Attention row: "36% of jobs need a second visit" (illustrative figure, as in the product content)
- Workflow shown: "Dispatch and van stock"
- Workspace modules (real capability names, `content/capabilities.js`): Relationships, Workforce, Work, Communication, Reports and analytics
- Analysis sheet bottom dimension: "Job to payment"

## Props and truth

- Street and job names are invented
- Statuses are sample data
- Panel figures come from `content/businesses/repair-services.js`; the salon variant (chair utilisation, lapsed clients) is a drop-in if wanted
- Every figure and name on screen is a labelled sample prop or comes from the product content; no metrics, customers or testimonials.

## Risks and checks

- The script says "staff location"; Verity shows who is assigned and job status, not live tracking. Do not imply GPS tracking on screen
- Check whether the lead type should be salons or repair-services before the first keyframes
- Cleaning and security-style workforces have their own reel (IND10)
- Offer, name, strike-through, credibility wording and URL: `00-decisions.md` F1, F3, F4 and D-4.

## Keyframes to score before animating (8 or above, `verity-reel` gate)

1. Hook frame (0.9 s)  2. Pain frame with the thread  3. Montage frame (one of the five)  4. Freeze "Business system?"
5. Reframe frame with fragments or islands joining  6. System reveal, panel built  7. Offer frame (shared, check the strike)
8. End card (shared)

A frame that scores under 8 is redesigned before any motion is written.


