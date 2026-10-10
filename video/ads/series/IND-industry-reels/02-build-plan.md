# Build plan: ten reels, one engine, ten different worlds

Not started. This is the plan to build from, written against the real R09 code
(`video/src/ads/R09/Film.tsx`, `props.tsx`; shared `video/src/ads/stage.tsx`, `R08/props.tsx`, `R07/world.tsx`).
Read first: skill `verity-reel`, its `references/build-recipe.md` and `references/audio.md`.

## Principle

The reels must not all look the same. `video/ads/00-strategy/ad-formula.md` says "variants swap props only", but that is
for hook variants of one concept; here each industry is its own concept. So the split is:

| Shared (built once) | Per reel (built for each) |
|---|---|
| Dark stage, type, `Layer`, `Light` (`stage.tsx`) | **World scene**: the industry's own objects (shelf bay, ticket rail, conveyor, route map, godown, roster and register) |
| Phone and chat thread device | **Signature animation**: the one domain-apt motion (scan line, ticket arcs, job cards on a line, markers on a route, the 20-versus-18 gap) |
| Verity mark, Business map, Blueprint steps, offer, credibility, end card (the tail) | **Montage cards**: the five tools drawn as that business's objects |
| Music mix, audit, stability checks | **System reveal**: the real Verity panel and modules for that industry |

Today R09 hard-codes its industry content (WhatsApp chat rows, four tool cards, five fragments, `MODULES`, the "Order to dispatch"
label). Lift that into data where it is genuinely just text, and give each reel its own scene file where it is motion.

## Target structure

```text
video/src/ads/series/
  tail.tsx              the shared tail (T1-T5), takes `t0` and the reel's T2 nouns; identical otherwise
  config.ts             type IndustryConfig and the ten configs (text, sample data, modules, V timings)
  IndustryReel.tsx      the shared skeleton: hook, thread, montage slot, freeze, reframe, then <Tail/>
  worlds/IND01.tsx ... IND10.tsx   one world + signature animation per reel (the part that differs)
  cards.tsx             montage tool cards (chat, sheet, calls, notes, ledger, ticket, appointments, tasks, register)
video/public/ads/IND/   IND01/vo.mp3 ... IND10/vo.mp3 and the master tail
video/renders/ads/IND/  verity-meta-IND01-9x16-v1.mp4 ...
```

R09 itself stays as it is, as the reference build and for regression comparison; the series copies from it, it does not
modify it.

## The config (one object per reel)

```ts
type IndustryConfig = {
  id: 'IND01'; slug: 'retail-commerce'; label: string;           // hub slug from content/industries.js
  vo: string;                                                    // public/ads/IND01/vo.mp3 (opening + master tail)
  V: {q: number; yaPhir: number; d1: number; d2: number; d3: number; chuckle: number; problem: number; problemB: number; tail: number};
  hook: string[];                                                // 2-3 lines, oversized, first 2 s
  chatList: {name: string; preview: string; unread: number}[];  // 6 rows on the phone's list screen
  thread: {who: string; text: string; attach?: string}[];       // 3 quoted messages, then 3 short ones
  tools: {kind: ToolKind; title: string; rows: string[][]}[];    // 4 cards for the montage (the 5th cut repeats the first)
  reframe: {a: string[]; b: string[]};                           // two headlines
  fragments: {glyph: GlyphKind; label: string; role: string}[];  // 5, morph into an ordered list
  modules: string[];                                             // 5 real capability names for the workspace
  flowLabel: string;                                             // bottom dimension of the analysis sheet
  offer: {strike: boolean};                                      // F1: the strike is one flag, default true
};
```

All text is English. Every value in `industries/IND0N-*.md` is a draft of these fields.

## Changes needed in existing code (small, listed so none is a surprise)

1. `R07/world.tsx` `Workspace`: it reads a module-level `MODULES` constant. Add an optional `modules` prop (default the
   current constant) so R07, R08 and R09 are unaffected.
2. `R09/props.tsx`: `ChatListScreen`, `ThreadScreen` and the four tool cards take their rows as props instead of constants.
3. New tool-card kinds: `ledger` (counter or dealer register), `ticket` (order slip), `appointments` (register), `tasks`
   (tracker). Drawn like the existing cards: light object, 20 px minimum on canvas, sample data.
4. New glyphs: `ledger`, `ticket`, `calendar`. Existing: chat, receipt, voice, sheet, notes, flow, team, list, loop.
5. `Film.tsx` beats read from `V` and `config`; the tail takes `t0 = V.tail`. The R09 tail timings become offsets
   (see `01-format-and-timing.md`).
6. `mix-bgm.sh` (skill): allow a negative trim (delay the music) for openings longer than 25.0 s.
7. `Root.tsx`: one `Composition` per reel, `id="Ad-IND0N-<Name>-9x16"`, `durationInFrames` from the recorded VO length.
   `package.json`: one `render:ad-ind0n` script each (`--crf=16`). Alias any clashing imports.

## Per-reel checklist

- [ ] Opening recorded; master tail spliced; join listened to; word timings transcribed
- [ ] `V` filled; config reviewed against the industry brief (nouns, sample data, modules)
- [ ] `tsc --noEmit` clean
- [ ] Stills sweep (24 stills, +/- 0.2 s at every transition) scored 8 or above; ghost-overlap and text-collision check
- [ ] `region-stability.sh` under 0.05 on the hook, "Business system?", both reframe headlines, the offer and the end card
- [ ] `audit-render.sh`: holds are declared (settled text under voice, offer, end card); no undeclared jump
- [ ] Music: drop on the tail start, mix loudness equal to the voice-only file
- [ ] Offer, claims and name checked against `00-decisions.md` (F1, F3, F4, D-4, D-8)
- [ ] Versioned render in `video/renders/ads/IND/`; report written in the reel's folder

## Order

1. **IND01 Retail** first as the proof: it forces every refactor above and proves the shared skeleton and the first world. Judge it against R09 side by side, frame by frame.
2. IND02 Food, IND03 Professional services: same skeleton, new worlds; these two confirm the engine really carries the variation and that the reels stay distinct.
3. IND04 Healthcare: synthetic data only (D-8), so no extra gate.
4. IND05 to IND10 in any order; each is a config, a world scene, its recording and the checklist. IND10 (guards and housekeeping) needs the headcount-gap animation and its T2 tail line.

A reel counts as done when it passes its checklist and reads as the same campaign as R09 and its siblings. Do not polish a
reel that has passed; spend the time on the next one.

## Testing as a campaign

One campaign, ten entry points: the tail is identical so the creatives compare on the opening alone. Log each ad as
`IND01` to `IND10` in `video/ads/01-plan/test-matrix.md` (section added), with hook variants `-H2` later if one industry wins.





