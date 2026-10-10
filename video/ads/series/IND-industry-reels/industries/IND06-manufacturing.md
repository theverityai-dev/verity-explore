# IND06 Manufacturing

Status: brief   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: dark world, light objects   Voice: Founder (D-7)
Hub: `manufacturing-b2b` (`/industries/manufacturing-b2b/`)   Lead business type: `manufacturers`   Variants: garment-manufacturers, furniture-manufacturers, food-manufacturers, packaging-companies
System reveal source of truth: `content/businesses/manufacturers.js`.

**Who should feel understood:** A factory owner who cannot see which order is where, who did what, and what material is left.

The shared parts (ending, brand laws, audio rule) are in `01-format-and-timing.md`; this reel owns its opening world, its
signature animation and its system reveal. Nothing here is a template: change the world if a better one is found, as long as
it passes the keyframe gate.

## VO: the opening (unique to this reel)

Delivery tags are directions for the speaker, not words (D-9).

> [thoughtful] Ek baat batao?  
> Aapki factory mein kaunsa order production ki kis stage mein hai, kis worker ne kaam kiya hai, raw material kitna bacha hai, aur dispatch kab hoga… sab clear hai?  
> [sighs] Ya phir…  
> "Sir, material aaya?"  
> "Production complete hua?"  
> "Order dispatch kyun nahi hua?"  
> [chuckles] Sales ne order le liya, par production aur inventory ka coordination alag hi chal raha hai!  
> [thoughtful] Problem sirf production ki nahi hai. Departments ke beech proper system hona chahiye.

The recording continues into the master tail, which starts at "Verity mein hum pehle aapka business samajhte hain."
(`03-vo-recording-sheet.md`).

## Creative direction

**World.** A production line in side view: a conveyor with job cards riding it through four stations (Cut, Make, QC, Pack), a raw-material level gauge at the left and a dispatch bay with a truck outline at the right.

**Hook, first 2 s.** Headline (draft, English, oversized): "Every order." / "Every stage." / "Clear?". The empty conveyor line with its four stations labelled. Headline upper left.

**Signature animation.** Job cards travel the conveyor at a steady pace through the stations. One card stalls at QC while the dispatch truck outline waits, and the material gauge falls toward empty.

**Pain beat.** The phone thread over the dimmed line, with the stalled card still visible.

| Sender | Message (English, on screen) | Attachment chip |
|---|---|---|
| Production | Sir, did the material arrive? | Material slip |
| Supervisor | Is production complete? | Batch 214 |
| Dispatch | Why wasn't the order dispatched? | Order 3302 |

Followed by three short ones ("Sir?", "Urgent", "Please reply") and a 99+ badge. Chat list rows: Shop floor "Material not arrived", Purchase "PO status?", Dispatch "Truck waiting", Sales "Customer asking", Stores "Stock count?", Accounts "Invoice pending".

**Montage (the scattered tools, about 5 fast cuts, drawn as industry objects).** Shop-floor chat; Production tracking sheet; Raw-material notebook; Dispatch call log; Job cards.

**Problem reveal.** The chaos freezes on "Business system?" with a drawn cross, held still. Then two headlines, A: "It isn't production."  B: "Departments need" / "one proper system."
Sales, production, inventory and dispatch are four islands; the card finally rides one continuous line from order to truck.

**Verity system reveal (tailored; the rest of the tail is shared).** The mapped business turns into the real Verity interface for this industry, built module by module:
- Panel "Plant": Orders in flight, Past committed date, Awaiting QC, Material coverage
- Attention row: "17 orders awaiting QC since 09:20" (illustrative figure, as in the product content)
- Workflow shown: "Customer order to dispatch"
- Workspace modules (real capability names, `content/capabilities.js`): Orders, Work, Inventory, Logistics, Reports and analytics
- Analysis sheet bottom dimension: "Order to dispatch"

## Props and truth

- Order and batch numbers are invented
- Station names are generic
- Panel figures come from `content/businesses/manufacturers.js`
- Every figure and name on screen is a labelled sample prop or comes from the product content; no metrics, customers or testimonials.

## Risks and checks

- Longest opening of the set: the music trim goes negative if it runs past 25.0 s (see `01-format-and-timing.md`)
- Offer, name, strike-through, credibility wording and URL: `00-decisions.md` F1, F3, F4 and D-4.

## Keyframes to score before animating (8 or above, `verity-reel` gate)

1. Hook frame (0.9 s)  2. Pain frame with the thread  3. Montage frame (one of the five)  4. Freeze "Business system?"
5. Reframe frame with fragments or islands joining  6. System reveal, panel built  7. Offer frame (shared, check the strike)
8. End card (shared)

A frame that scores under 8 is redesigned before any motion is written.


