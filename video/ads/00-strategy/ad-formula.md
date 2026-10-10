# Performance ad formula

Target length 24-28 s for Tier 1. Cut to 15 s by dropping Differentiator and merging Offer + CTA.

| Block | Time | Job | VO example | On screen |
|---|---|---|---|---|
| 1 Hook | 0-2 s | Pattern interrupt on a pain | "Why are you changing your business to fit your software?" | Large statement, small Verity mark |
| 2 Product | 2-5 s | Name what it is | "Verity is a business platform built around how your business actually works." | Verity wordmark + one-line descriptor |
| 3 Mechanism | 5-12 s | Show how, visually proving the VO | (VO narrates each step) | `Your workflows → Your requirements → Verity blueprint → Your system` |
| 4 Differentiator | 12-18 s | Why different | "We understand your business first. Then configure the system around it. You see it working before you commit." | Blueprint resolves into real Verity UI. Last sentence only if D4/R05 claim confirmed |
| 5 Offer | 18-23 s | The deliverable and price | "We're currently offering our ₹5,000 Business Blueprint completely free." | `₹5,000 → FREE` (wording per D1), Business Blueprint™ card |
| 6 CTA | 23-27 s | One action | "Tell us how your business works. We'll show you what your system could look like." | `GET YOUR FREE BUSINESS BLUEPRINT →` end card, held |

Pace: a new fact every 1-2 s, but every move eases and completes. The viewer reads the hook, product and offer even with
sound off, so every block's key line is also on screen and in the caption.

## Scene library (Remotion components, built once, reused by every reel)

| Component | Block | Does |
|---|---|---|
| `HookScene` | 1 | Statement text, two-tone, hook swapped via props |
| `ProductReveal` | 2 | Wordmark + descriptor, carrier object starts here |
| `WorkflowAnimation` | 3 | Business -> workflows -> teams -> approvals -> requirements chain |
| `BlueprintScene` | 3-4 | Chain collapses into the blueprint document |
| `DashboardScene` | 4 | Blueprint becomes a real Verity interface (real components, sample data marked) |
| `OfferCard` | 5 | Business Blueprint™, value, FREE, limited time |
| `CTAScene` | 6 | End card with button and the locked mark; holds >= 1.5 s |
| `Captions` | all | Burned-in captions from word timings |

Variants swap props only: hook text, VO file, accent line, offer wording. A new hook must not require a new scene.

## Beat budget exception

The motion law says average beat 5-8 s. Performance ads deliberately run 6 blocks in about 27 s. To keep this honest:
one idea per block, every seam has a carrier object (the Verity mark or the blueprint card moves through the cut), and
holds are declared in the shot plan. Do not add a seventh block to a 27 s ad.

## Safe areas (Meta Reels/Stories, 9:16)

Keep the hook, offer and CTA inside the middle band: top 250 px and bottom 420 px of 1080 x 1920 are covered by Meta UI.
The CTA button sits above y 1500. Feed 4:5 crops: keep critical content in y 135-1215.
