# Brag Plan: Verity

Brag cut for the Verity website. Creative direction follows the `/brag` workflow (inspect, plan, storyboard,
share copy). **Renderer: Remotion**, not Hyperframes, so the cut shares tokens, components and look with the main
trailer. Composition: `Brag-Verity-16x9` in `src/brag/`. Render: `npm run render:brag`.

## What is this app?
Verity is an operations system that puts a business's people, work, stock and records on one record model, so the
shelf, the sheet and the supplier all agree.

## The angle
The shelf says one thing, the sheet says another, and the reorder is due today. That line is the real hero headline
of the retail-stores page, so the cut is specific to Verity and not any SaaS. The trailer explains the whole
platform. This cut proves one thing in 25 seconds: a disagreement becomes a finished reorder.

## Hook (first 2-3 seconds)
Two white cards side by side, vibrating slightly out of agreement: **SHELF 378** and **SHEET 412**, over the line
"The shelf says one thing. The sheet says another."

## Key moments (the middle)
- The two cards collapse and the hourglass mark draws itself: "One record."
- The working app: the real retail panel (Sales today, Stock value, Not moved 90d, Below reorder 37).
- A cursor clicks "12 fast-moving lines below reorder point". A reorder drafts, approves and sends in three
  checked steps. Below reorder counts 37 to 25.

## Outro / punchline
"The reorder is due today. It's done." Then the end card: Verity, "Your business, on one record.", theverityai.xyz.

## User flow worth showing
Entry: the attention list on the retail panel. Key action: click "12 fast-moving lines below reorder point" and
raise the reorder. Result: three steps checked, the metric drops 37 to 25, toast "Reorder sent. Recorded once."

## Tone
- Preset: polished
- Creative direction: quiet premium product film, restraint over spectacle
- Interpretation: four scenes, long holds, soft transitions, no jokes. The product does the talking.

## Format: landscape, 1920x1080
## Duration: 25 seconds, 60fps

## Visual identity (from the project)
- Background: `#F7F8FA` (`--base`)
- Accent: `#0A84FF` (`--accent`)
- Text: `#0F1115` (`--ink`)
- Display font: Inter, weight 300 headings (site rule)
- Body font: Inter
- Strongest visual element: the white command-centre panel with the blue hourglass mark
- Source of truth: tokens imported live from `css/verity.css`; copy and figures from
  `content/businesses/retail-stores.js` (illustrative figures, as on the site).

## Share copy (draft)
The shelf says 378. The sheet says 412. Verity makes it one number and finishes the reorder. theverityai.xyz

## Audio direction
- Role: warm bed with sparse professional accents
- Music: bundled `happy-beats-business-moves-vol-1` (ende.app), 120 BPM, beat 0.5s
- Music treatment: starts at 0:00 under the hook at low volume (0.38), fade-in over 1s, steady, 2s fade-out at the end
- Music cue guidance: preset read. Beat grid at 3.02 + 0.5k. Strong cues: 17.02, 17.52, 20.02, 23.02. Scenes land on
  beats: reveal 5.03, app 10.02, outro 20.02. Checks land on 1s beats at 14.02, 15.02, 16.02. Toast on the 17.52 cue.
  Outro mark on 20.02, URL on the 23.02 cue.
- Audio-reactive treatment: none. Polished tone, no pulsing.
- SFX posture: sparse, motion-matched, low high-frequency risk
- Audio-coupled moments: card drops, mark landing, cursor click, three step checks, toast, end-card bell
- Restraint rule: no whooshes, no stings, bell used once at the logo payoff

## Storyboard

### Scene 1 — Hook — 5s
Two cards enter and hover, SHELF 378 and SHEET 412, with a small "34 units apart" tag from the real retail row
"Store 2 count differs from system by 34 units". Headline "The shelf says one thing. The sheet says another."
(about 9 words, held about 3s settled).
Sequential/interaction: yes, card one drops, then card two on the next beat (0.5s apart, accents not text).
Audio intent: quiet unease, two soft drops
Audio-coupled idea: soft drop per card
Music: warm bed fades in
Transition mood: soft crossfade → Scene 2

### Scene 2 — Reveal — 5s
Cards slide together and dissolve into the hourglass mark, which draws then fills. "One record." rises in beside it,
then the small wordmark.
Sequential/interaction: none
Audio intent: relief, a resolve
Audio-coupled idea: soft impact as the mark fills
Transition mood: slide → Scene 3

### Scene 3 — The flow — 10s
The command-centre panel rises with the retail metrics: Sales today ₹4.86 L, Stock value ₹1.4 Cr, Not moved 90d ₹22 L,
Below reorder 37. The attention list slides in. A cursor clicks "12 fast-moving lines below reorder point". Three
steps check off one per second: Draft PO · 12 lines, Approved, Sent · delivers Thursday. Below reorder counts 37 to 25.
Toast: "Reorder sent. Recorded once."
Sequential/interaction: yes, simulated click, three sequential steps each held 1s settled (labels are 2-4 words),
count-down.
Audio intent: quiet competence
Audio-coupled idea: click on the press, one tick per check, a soft accent on the toast
Transition mood: soft crossfade → Scene 4

### Scene 4 — Outro — 5s
"The reorder is due today. It's done." Then the mark and "verity", "Your business, on one record.",
theverityai.xyz. Silence in the last half second after the music fades.
Sequential/interaction: none
Audio intent: confident close
Audio-coupled idea: single bell on the mark landing
Transition mood: none (end)

**Music mood for this video:** warm, quiet corporate bed
**Audio summary:** a low bed under two soft drops, a resolve on the mark, one click and three ticks in the flow, a
single bell on the logo, fading to silence.

## Open notes
- The bundled music's licence terms are not documented in the brag repo. Fine for drafts, verify before publishing.
- Hyperframes is not used. If a Hyperframes version is wanted later, this plan is the brief.
