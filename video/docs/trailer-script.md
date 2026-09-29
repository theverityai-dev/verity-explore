# Verity main trailer — script

The flagship film. Generic on purpose: it speaks to any owner of any business, and it is the
"Reel 00" that the nine industry reels (`series-scripts.md`) hang off.

- **Format:** 16:9, 1920x1080, 60fps, **44s**, light theme, accent `#0A84FF`, Inter, tokens from `css/verity.css`.
- **Composition:** `MainTrailer` (`src/trailer/`). Render: `npm run render:trailer` to `renders/trailer/verity-main-trailer-16x9.mp4`.
- **Idea:** one sentence, shown not told. *A business is scattered across a dozen tools. Verity makes it one record.*
- **Tone:** calm, editorial, precise. Restraint over spectacle. Sentences, not slogans. No fake 3D, particles, neon,
  stock footage or floating dashboards. Accent is for state and data only.
- **Data:** capability names and blurbs are from `content/capabilities.js`. The four "needs attention" rows are real
  strings from four different business pages (retail, school, manufacturer, law firm), so the product scene quietly
  proves breadth. Figures are illustrative, as on the site.
- **Audio:** none rendered. Direction below is for the optional sound pass (music, UI SFX, VO).

## Visual language

| Element | Rule |
|---|---|
| Type | Headings weight 300, tracking -0.03em, masked word-by-word rise. Numerals tabular. Labels 20px / 500 / 0.16em uppercase. |
| Surfaces | White cards, 16px radius, 1px `--line`, `--elev-mid/high` shadows. Real DOM styling, never images. |
| Motion | Expo-out for arrivals, in-out for camera, springs for pops. One hero move at a time. Everything is a pure function of time, so 60fps is exact. |
| Camera | Static for scenes 1-3. One deliberate push (scene 4) into the list where the action happens, then a pull-back. |
| Grid | A faint 72px hairline grid under everything, drifting slowly, masked to the centre. |

## Screenplay

Music direction: sparse and modern, 96 BPM, soft pulse under scene 1, one clean resolve when the mark lands,
building gently through scene 4, single held chord on the end card. UI SFX are tiny (tick, thock, soft chime), no whooshes.

### 1. Scatter — 0:00–0:06
- **Visual:** white field. Fourteen cards pop in one by one and drift out of sync: Spreadsheet `stock_final_v3`, Group chat
  `42 unread`, Notebook `Credit page 12`, Invoice PDF `Unpaid`, Calendar `Missed`, Email thread `18 replies`, Payroll sheet
  `Row 61`, Stock register `Out of date`, Order slip `Handwritten`, Supplier call `Voice note`, Customer list `Old copy`,
  Bank export `CSV`, Task list `Sticky note`, Contract `Unsigned`. Their status dots flicker independently.
- **Text:** "Your business runs on everything." (0:00.3) then "Nothing agrees. Nothing connects." (0:03.5)
- **VO:** "Your business runs on everything. Nothing agrees. Nothing connects."
- **SFX:** a soft tick per card as it appears; ticks fall out of time with each other.

### 2. Collapse and mark — 0:06–0:11
- **Visual:** every card spirals into one point, shrinking as it goes, one after another. A single ring pulses out from
  the point. The Verity hourglass then draws itself, stroke first, then fills solid blue. It holds large and centred.
- **Text:** "One record." (0:09.8)
- **VO:** "One record."
- **SFX:** cards resolve into a rising tone; ring pulse is one clean note; the mark lands on the resolve.

### 3. The record model — 0:11–0:21
- **Visual:** the mark shrinks into a white hub disc with slow breathing rings. Eight capability cards grow out on
  hairline spokes: People, Work, Relationships, Records, Workflows, Communication, Analytics, Control, each with its real
  one-line description. A blue pulse travels hub-to-card down each spoke and the card lights as it lands.
  Then a chain of pills draws along the bottom, ticking off in order: Order received, Stock reserved, Task assigned,
  Invoice raised. Cards collapse back into the hub as the product scene begins.
- **Text:** "Everything a business is made of." (0:11.7) then "One job. Touched by everyone. Recorded once." (0:17.0)
- **VO:** "Everything a business is made of, on one model. One job, touched by everyone, recorded once."
- **SFX:** a soft thock per card; a small chime as each pulse lands; a check-tick per chain step.

### 4. The product — 0:21–0:32
- **Visual:** the Verity command centre rises into frame (chrome bar "VERITY / COMMAND CENTRE", Live dot breathing).
  Four metric cards count up: Orders today 312, Revenue ₹4.86 L, On-time 98.4%, Open tasks 37. A sales line draws across
  the chart against a dashed last week. The "Needs attention" list slides in row by row. The camera pushes to the list.
  A cursor moves to "17 orders awaiting QC since 09:20" and clicks. The row becomes a resolution: Assigned to Priya S.,
  Due today 17:00, Logged to the order record, each with a check. A toast lands: "Recorded once. Visible everywhere."
  Camera pulls back and the app lifts away.
- **Text:** "See the day while it is still running." (0:21.5). The toast is the closing line of the scene.
- **VO:** "See the day while it is still running. Act on it, and it is recorded once. Visible everywhere."
- **SFX:** number ticks on the count-up; keyboard-soft click on the cursor press; success chime on the toast.

### 5. Every business — 0:32–0:38
- **Visual:** two rows of the nine industry names scroll in opposite directions in large light type, separated by blue
  dots. Between them a number counts 0 to 123 in blue, then "business types." and "One Verity."
- **Names:** Retail & Commerce, Food & Hospitality, Professional Services, Healthcare, Education, Real Estate &
  Construction, Manufacturing & B2B, Personal & Local Services, Digital & Technology.
- **Text:** "123 business types. One Verity."
- **VO:** "Nine industries. A hundred and twenty-three kinds of business. One Verity."
- **SFX:** fast soft ticks with the count, easing to silence on 123.

### 6. End card — 0:38–0:44
- **Visual:** the mark draws in, "verity" slides in beside it. "Your business, on one record." rises word by word.
  A `theverityai.xyz` pill, then a solid blue "Book a demo" button. A very slow 1% push holds to the end.
- **Text:** "Your business, on one record." / theverityai.xyz / Book a demo
- **VO:** "Verity. Your business, on one record."
- **SFX:** single warm held chord, no tail effects.

## Timing sheet (seconds)

| Scene | In | Out | Key beats |
|---|---|---|---|
| Scatter | 0.0 | 5.9 | headline 0.3, cards 0.35+, sub-line 3.5 |
| Collapse | 5.9 | 8.2 | spiral 5.9-7.8, ring 8.0 |
| Mark | 8.2 | 11.0 | draw 8.2-9.4, fill 9.2-9.9, "One record." 9.8 |
| Record model | 11.0 | 21.4 | hub 11.6, nodes 12.5, pulses 13.6-16.9, job chain 17.7-20.3 |
| Product | 20.8 | 32.2 | metrics 21.9, chart 22.7, list 23.7, push 25.0-26.6, click 27.3, resolve 28.3, toast 30.1 |
| Every business | 31.6 | 38.2 | rows 31.7, count 32.6-35.0, "One Verity." 35.6 |
| End card | 38.0 | 44.0 | mark 38.4, tagline 40.2, url 41.5, CTA 41.8 |

## Relationship to the series

- This trailer is the entry point and the brand statement. The nine industry reels (`series-scripts.md`) go deep on one
  domain each, with their own hooks, hero devices and pacing. They open with the same "One platform" beat and close with
  the same breadth line, so the set feels like one universe.
- The 9:16 reels stay in `renders/reels/`. This landscape film lives in `renders/trailer/`.
