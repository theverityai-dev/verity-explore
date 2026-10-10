# IND01 Retail & Commerce

Status: brief   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: dark world, light objects   Voice: Founder (D-7)
Hub: `retail-commerce` (`/industries/retail-commerce/`)   Lead business type: `retail-stores`   Variants: grocery-stores, electronics-stores, pharmacies, clothing-boutiques
System reveal source of truth: `content/businesses/retail-stores.js`.

**Who should feel understood:** A shop or store owner who knows the stock is somewhere, the sales are somewhere else, and the dues are in a notebook.

The shared parts (ending, brand laws, audio rule) are in `01-format-and-timing.md`; this reel owns its opening world, its
signature animation and its system reveal. Nothing here is a template: change the world if a better one is found, as long as
it passes the keyframe gate.

## VO: the opening (unique to this reel)

Delivery tags are directions for the speaker, not words (D-9).

> [thoughtful] Ek baat batao?  
> Aapki shop pe kitna stock hai, kya bik raha hai, aur kya reorder karna hai… sab ek jagah pata chal jaata hai?  
> [sighs] Ya phir…  
> "Bhaiya, woh stock check karna."  
> "Sir, iska payment hua?"  
> "Kal ki sales kitni thi?"  
> [chuckles] Aur phir register, Excel aur WhatsApp pe alag-alag hisaab?  
> [thoughtful] Problem aapki shop ki nahi hai. Business ka system ek jagah connected hi nahi hai.

The recording continues into the master tail, which starts at "Verity mein hum pehle aapka business samajhte hain."
(`03-vo-recording-sheet.md`).

## Creative direction

**World.** A single shelf bay seen straight on, lit against the dark room: boxes on three shelves, a stock tag on every shelf edge, a till with a receipt roll to the right. The room is the shop, drawn as objects, never as photography.

**Hook, first 2 s.** Headline (draft, English, oversized): "Stock. Sales." / "Reorders." / "One place?". The bare shelf bay with its tags already ticking. Headline sits in the upper-left negative space; no logo and no phone yet.

**Signature animation.** A barcode scan line sweeps the shelf left to right. Each box it passes registers a number on its tag (a tween, never a swap). One tag counts down to 0 while the till beside it keeps printing: the two are not connected.

**Pain beat.** The phone thread stays as the campaign's recognisable device, kept light, with the shelf bay dimmed behind it.

| Sender | Message (English, on screen) | Attachment chip |
|---|---|---|
| Store manager | Please check the stock. | Stock.xlsx |
| Accounts | Sir, was this payment made? | Screenshot.png |
| Counter | How much were yesterday's sales? | Voice note 0:42 |

Followed by three short ones ("Sir?", "Urgent", "Please reply") and a 99+ badge. Chat list rows: Store manager "Stock check pending", Supplier "Confirm the reorder?", Accounts "Yesterday's sales?", Counter "Payment not showing", Warehouse "Stock mismatch", Online orders "3 orders unpacked".

**Montage (the scattered tools, about 5 fast cuts, drawn as industry objects).** Counter register slip (billing ledger); Stock spreadsheet (SKUs, quantity, reorder level); Supplier chat; Notebook of customer dues; Printed receipt.

**Problem reveal.** The chaos freezes on "Business system?" with a drawn cross, held still. Then two headlines, A: "It isn't your shop."  B: "Nothing is connected" / "in one place."
Shelf, till and notebook sit as three separate islands; the five fragments become an ordered list (Sales, Stock, Orders, Dues, Payments) and thin lines join the islands.

**Verity system reveal (tailored; the rest of the tail is shared).** The mapped business turns into the real Verity interface for this industry, built module by module:
- Panel "Store": Sales today, Stock value, Not moved 90d, Below reorder
- Attention row: "12 fast-moving lines below reorder point" (illustrative figure, as in the product content)
- Workflow shown: "Purchase to shelf"
- Workspace modules (real capability names, `content/capabilities.js`): Orders, Inventory, Suppliers, Locations, Reports and analytics
- Analysis sheet bottom dimension: "Stock to sale"

## Props and truth

- Product and SKU names are invented (generic: rice, soap, cables), no brands
- Counts on tags are sample data
- Panel figures come from `content/businesses/retail-stores.js` and are marked illustrative there
- Every figure and name on screen is a labelled sample prop or comes from the product content; no metrics, customers or testimonials.

## Risks and checks

- No brand names on boxes
- Do not imply Verity does billing or POS unless a module covers it; the system reveal shows stock, orders, suppliers and reports only
- Offer, name, strike-through, credibility wording and URL: `00-decisions.md` F1, F3, F4 and D-4.

## Keyframes to score before animating (8 or above, `verity-reel` gate)

1. Hook frame (0.9 s)  2. Pain frame with the thread  3. Montage frame (one of the five)  4. Freeze "Business system?"
5. Reframe frame with fragments or islands joining  6. System reveal, panel built  7. Offer frame (shared, check the strike)
8. End card (shared)

A frame that scores under 8 is redesigned before any motion is written.


