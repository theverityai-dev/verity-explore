# IND04 Healthcare

Status: brief   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: dark world, light objects   Voice: Founder (D-7)
Hub: `healthcare` (`/industries/healthcare/`)   Lead business type: `clinics`   Variants: dental-clinics, diagnostic-labs, physiotherapy-clinics
System reveal source of truth: `content/businesses/clinics.js`.

**Who should feel understood:** A clinic owner or doctor whose day disappears into calls, registers and messages.

The shared parts (ending, brand laws, audio rule) are in `01-format-and-timing.md`; this reel owns its opening world, its
signature animation and its system reveal. Nothing here is a template: change the world if a better one is found, as long as
it passes the keyframe gate.

## VO: the opening (unique to this reel)

Delivery tags are directions for the speaker, not words (D-9).

> [thoughtful] Ek baat batao?  
> Aapke clinic mein appointments, billing aur staff coordination smoothly chalta hai?  
> [sighs] Ya phir…  
> "Patient ki appointment confirm hui?"  
> "Sir, payment pending hai."  
> "Next appointment kab schedule karni hai?"  
> [chuckles] Calls, registers aur messages ke beech poora din nikal jaata hai.  
> [thoughtful] Problem sirf workload ki nahi hai. Clinic operations ko manage karne ka proper system chahiye.

The recording continues into the master tail, which starts at "Verity mein hum pehle aapka business samajhte hain."
(`03-vo-recording-sheet.md`).

## Creative direction

**World.** A reception desk edge and a day-view appointment grid standing behind it, with a small queue-token display to the right. Clean, calm, light objects on the dark room.

**Hook, first 2 s.** Headline (draft, English, oversized): "Appointments." / "Billing. Staff." / "Running smoothly?". The appointment grid, empty. Slots start to fill. Headline upper left.

**Signature animation.** Appointment chips drop into the day grid one by one with a smooth ease. One chip stays pale and unconfirmed while the grid fills around it, and a payment tag sits beside the last slot.

**Pain beat.** The phone thread over the dimmed grid.

| Sender | Message (English, on screen) | Attachment chip |
|---|---|---|
| Reception | Is the patient's appointment confirmed? | Slot 4:00 pm |
| Billing | Sir, payment is pending. | Bill 0418 |
| Doctor | When should the next appointment be scheduled? | Follow-up due |

Followed by three short ones ("Sir?", "Urgent", "Please reply") and a 99+ badge. Chat list rows: Reception "Confirm the 4 pm slot", Billing "Payment pending", Doctor "Reschedule?", Patient "Next visit?", Pharmacy "Stock low", Lab "Report ready".

**Montage (the scattered tools, about 5 fast cuts, drawn as industry objects).** Appointment register; Patient chat; Call log of confirmations; Billing slip; Notebook of follow-ups.

**Problem reveal.** The chaos freezes on "Business system?" with a drawn cross, held still. Then two headlines, A: "It isn't the workload."  B: "The clinic needs" / "a proper system."
Register, calls and messages become one appointment line; the five fragments become an ordered list (Patients, Appointments, Billing, Follow-ups, Staff).

**Verity system reveal (tailored; the rest of the tail is shared).** The mapped business turns into the real Verity interface for this industry, built module by module:
- Panel "Practice": Consultations, Follow-ups due, Consumables low, Staff coverage
- Attention row: "18 follow-ups overdue past their review date" (illustrative figure, as in the product content)
- Workflow shown: "Consultation to follow-up"
- Workspace modules (real capability names, `content/capabilities.js`): People, Work, Records, Inventory, Reports and analytics
- Analysis sheet bottom dimension: "Appointment to bill"

## Props and truth

- Patient names, if any, are obviously generic (initials only)
- Slot times are sample data
- Panel figures come from `content/businesses/clinics.js`
- Every figure and name on screen is a labelled sample prop or comes from the product content; no metrics, customers or testimonials.

## Risks and checks

- Synthetic data only (D-8); no diagnoses, treatments, outcomes or patient detail
- No clinical claims; no results
- Offer, name, strike-through, credibility wording and URL: `00-decisions.md` F1, F3, F4 and D-4.

## Keyframes to score before animating (8 or above, `verity-reel` gate)

1. Hook frame (0.9 s)  2. Pain frame with the thread  3. Montage frame (one of the five)  4. Freeze "Business system?"
5. Reframe frame with fragments or islands joining  6. System reveal, panel built  7. Offer frame (shared, check the strike)
8. End card (shared)

A frame that scores under 8 is redesigned before any motion is written.


