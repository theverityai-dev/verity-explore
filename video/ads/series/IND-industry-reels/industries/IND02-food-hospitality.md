# IND02 Food & Hospitality

Status: brief   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: dark world, light objects   Voice: Founder (D-7)
Hub: `food-hospitality` (`/industries/food-hospitality/`)   Lead business type: `restaurants`   Variants: cloud-kitchens, cafes, bakeries, catering-businesses
System reveal source of truth: `content/businesses/restaurants.js`.

**Who should feel understood:** A restaurant or cafe owner whose kitchen, billing and stock all run, but not together.

The shared parts (ending, brand laws, audio rule) are in `01-format-and-timing.md`; this reel owns its opening world, its
signature animation and its system reveal. Nothing here is a template: change the world if a better one is found, as long as
it passes the keyframe gate.

## VO: the opening (unique to this reel)

Delivery tags are directions for the speaker, not words (D-9).

> [thoughtful] Ek baat batao?  
> Aapke restaurant mein kitchen, staff aur billing… sab perfectly coordinated chalta hai?  
> [sighs] Ya phir…  
> "Bhaiya, woh order bana?"  
> "Table ka bill kahan hai?"  
> "Aaj itna wastage kaise ho gaya?"  
> [chuckles] Ek taraf orders, doosri taraf inventory, aur teesri taraf accounts!  
> [thoughtful] Problem staff ki nahi hai. Operations ko manage karne ka proper system hi nahi hai.

The recording continues into the master tail, which starts at "Verity mein hum pehle aapka business samajhte hain."
(`03-vo-recording-sheet.md`).

## Creative direction

**World.** The pass: a stainless counter edge with a ticket rail above it, a stack of bill slips, a small stock shelf on the left and a waste bin on the right, all drawn as light objects on the dark room.

**Hook, first 2 s.** Headline (draft, English, oversized): "Kitchen. Staff." / "Billing." / "In sync?". The empty ticket rail, then the first order slip lands on it. Headline upper left.

**Signature animation.** Order tickets slide onto the rail one at a time, each with a thin timer arc that sweeps. The tickets pile up faster than the arcs finish; a bill slip waits beside the rail with no table number.

**Pain beat.** The ticket rail itself carries the three messages as order slips; the phone appears only for the final "99+" overload.

| Sender | Message (English, on screen) | Attachment chip |
|---|---|---|
| Kitchen | Has the order been made? | Ticket 41 |
| Waiter | Where is the table's bill? | Table 7 |
| Manager | How did we waste this much today? | Wastage log |

Followed by three short ones ("Sir?", "Urgent", "Please reply") and a 99+ badge. Chat list rows: Kitchen "Order delayed", Waiters "Table 7 bill?", Stores "Stock running low", Accounts "Day-end not matching", Vendor "Invoice sent again", Manager "Wastage report?".

**Montage (the scattered tools, about 5 fast cuts, drawn as industry objects).** Order ticket slips; Ingredient stock sheet; Bill book; Staff group chat; Wastage notebook.

**Problem reveal.** The chaos freezes on "Business system?" with a drawn cross, held still. Then two headlines, A: "It isn't your staff."  B: "No system runs" / "the operation."
Rail, stock shelf and till become three stations; thin lines join them and the tickets begin to carry what they consumed.

**Verity system reveal (tailored; the rest of the tail is shared).** The mapped business turns into the real Verity interface for this industry, built module by module:
- Panel "Service": Revenue today, Average order, Prep stock, On shift
- Attention row: "Prawns below par for tomorrow's covers" (illustrative figure, as in the product content)
- Workflow shown: "A shortage before it happens"
- Workspace modules (real capability names, `content/capabilities.js`): Orders, Inventory, Suppliers, Workforce, Reports and analytics
- Analysis sheet bottom dimension: "Order to table"

## Props and truth

- Menu items and table numbers are invented
- Ticket numbers and times are sample data
- Panel figures come from `content/businesses/restaurants.js`
- Every figure and name on screen is a labelled sample prop or comes from the product content; no metrics, customers or testimonials.

## Risks and checks

- No wastage percentages or savings claims on screen
- Keep the restaurant generic: no cuisine-specific brand
- Offer, name, strike-through, credibility wording and URL: `00-decisions.md` F1, F3, F4 and D-4.

## Keyframes to score before animating (8 or above, `verity-reel` gate)

1. Hook frame (0.9 s)  2. Pain frame with the thread  3. Montage frame (one of the five)  4. Freeze "Business system?"
5. Reframe frame with fragments or islands joining  6. System reveal, panel built  7. Offer frame (shared, check the strike)
8. End card (shared)

A frame that scores under 8 is redesigned before any motion is written.


