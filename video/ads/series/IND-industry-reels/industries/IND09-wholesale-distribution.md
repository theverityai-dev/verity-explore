# IND09 Wholesale & Distribution

Status: brief   Aspect: 9:16 (1080 x 1920, 30 fps)   Theme: dark world, light objects   Voice: Founder (D-7)
Hub: `manufacturing-b2b` (`/industries/manufacturing-b2b/`)   Lead business type: `distributors`   Variants: wholesalers, medical-distributors
System reveal source of truth: `content/businesses/distributors.js`.

**Who should feel understood:** A distributor or wholesaler who cannot say, on the spot, what each dealer owes and what has gone out.

The shared parts (ending, brand laws, audio rule) are in `01-format-and-timing.md`; this reel owns its opening world, its
signature animation and its system reveal. Nothing here is a template: change the world if a better one is found, as long as
it passes the keyframe gate.

## VO: the opening (unique to this reel)

Delivery tags are directions for the speaker, not words (D-9).

> [thoughtful] Ek baat batao?  
> Aapko turant pata chal jaata hai kis dealer ka kitna outstanding hai, kaunsa order dispatch hona hai, aur kis stock ki kami hai?  
> [sighs] Ya phir…  
> "Sir, party ka payment aaya?"  
> "Woh maal dispatch hua?"  
> "Dealer ka purana balance kitna hai?"  
> [chuckles] Orders WhatsApp pe, stock godown mein, aur payment ka hisaab alag register mein!  
> [thoughtful] Problem business ke volume ki nahi hai. Sales, inventory aur accounts ko connect karne wala proper system chahiye.

The recording continues into the master tail, which starts at "Verity mein hum pehle aapka business samajhte hain."
(`03-vo-recording-sheet.md`).

## Creative direction

**World.** A godown bay: racks of stacked cartons on the left, a dealer ledger book open on a table in the middle, and a truck outline with a dispatch manifest card at the right.

**Hook, first 2 s.** Headline (draft, English, oversized): "Every dealer." / "Every order." / "Every balance.". The godown racks and the open ledger. Headline upper left.

**Signature animation.** Dealer balances stack as ledger rows, a running outstanding total climbing at the foot of the page, while cartons lift off the racks and slide toward the truck on a separate beat. The two never meet.

**Pain beat.** The phone thread over the dimmed godown.

| Sender | Message (English, on screen) | Attachment chip |
|---|---|---|
| Accounts | Sir, has the party's payment come? | Ledger page |
| Godown | Has that stock been dispatched? | Manifest |
| Sales | What is the dealer's old balance? | Statement |

Followed by three short ones ("Sir?", "Urgent", "Please reply") and a 99+ badge. Chat list rows: Dealer "Order confirmed?", Godown "Stock short", Accounts "Payment awaited", Transport "Truck ready", Sales "Rate change", Dealer "Old balance?".

**Montage (the scattered tools, about 5 fast cuts, drawn as industry objects).** Dealer chat (orders); Godown stock sheet; Outstanding ledger; Payment follow-up call log; Dispatch note.

**Problem reveal.** The chaos freezes on "Business system?" with a drawn cross, held still. Then two headlines, A: "It isn't your volume."  B: "Sales, stock, accounts" / "need one system."
Orders, godown and ledger are three islands; the ledger rows, the cartons and the manifest are drawn onto one order line.

**Verity system reveal (tailored; the rest of the tail is shared).** The mapped business turns into the real Verity interface for this industry, built module by module:
- Panel "Distribution": Orders today, Credit outstanding, Lines out of stock, Returns pending
- Attention row: "11 retailers past credit limit with open orders" (illustrative figure, as in the product content)
- Workflow shown: "Collection and credit control"
- Workspace modules (real capability names, `content/capabilities.js`): Orders, Inventory, Suppliers, Logistics, Reports and analytics
- Analysis sheet bottom dimension: "Order to payment"

## Props and truth

- Dealer names are invented and generic
- Balances are sample data
- Panel figures come from `content/businesses/distributors.js` (the `wholesalers` and `medical-distributors` panels are alternates)
- Every figure and name on screen is a labelled sample prop or comes from the product content; no metrics, customers or testimonials.

## Risks and checks

- Not a Verity hub: it sits under Manufacturing & B2B (D-1, D-2)
- No medical or cold-chain references unless the medical-distributors variant is chosen
- Offer, name, strike-through, credibility wording and URL: `00-decisions.md` F1, F3, F4 and D-4.

## Keyframes to score before animating (8 or above, `verity-reel` gate)

1. Hook frame (0.9 s)  2. Pain frame with the thread  3. Montage frame (one of the five)  4. Freeze "Business system?"
5. Reframe frame with fragments or islands joining  6. System reveal, panel built  7. Offer frame (shared, check the strike)
8. End card (shared)

A frame that scores under 8 is redesigned before any motion is written.



