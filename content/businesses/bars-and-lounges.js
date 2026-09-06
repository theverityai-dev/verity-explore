export default {
  slug: 'bars-and-lounges',
  status: 'published',
  plural: 'bars and lounges',
  subject: 'bar',

  seo: {
    title: 'AI business management software for bars and lounges | Verity',
    description:
      'Verity connects pour variance, wet and dry mix, open tabs, peak-night staffing, entertainment cost and licence-hour compliance into one operational system.',
    keywords: [
      'AI software for bars and lounges',
      'bar management software',
      'pour cost and liquor variance tracking',
      'nightlife staffing and tab management',
    ],
  },

  hero: {
    eyebrow: 'Verity for bars and lounges',
    headline: 'The bottle poured thirty-one measures. It should have poured thirty-eight.',
    lede:
      'Pour variance is the single largest controllable cost in a bar and the least measured. Verity reconciles what was poured against what was sold, bottle by bottle.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Bar',
      meta: 'Last week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Takings', value: '₹14.6 L', note: '4 nights' },
        { label: 'Pour variance', value: '8.2%', note: 'against 3% tolerance' },
        { label: 'Open tabs unsettled', value: '11', note: '₹64,000' },
        { label: 'Peak staffing', value: '2 nights short', note: 'service times doubled' },
      ],
      rows: [
        { name: 'Pour variance at 8.2% on spirits', meta: 'Roughly ₹1.1 L a month at current volume', active: true },
        { name: '11 tabs left open at close', meta: '₹64,000 · two nights running', active: true },
        { name: 'Two peak nights understaffed at the bar', meta: 'Service time doubled after 22:00', active: true },
        { name: 'Entertainment cost not compared with the night it drove', meta: '4 events this month', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own bar in this shape.',
    },
  },

  overview: {
    heading: 'Almost everything a bar loses, it loses by the measure.',
    paragraphs: [
      'A bar buys liquor by the bottle and sells it by the measure, and the difference between what a bottle should yield and what it actually produces is the category’s defining cost. Over-pouring, spillage, unrecorded staff drinks and outright loss all appear in the same gap, and at eight percent variance on spirits it is a larger number than most bar owners expect.',
      'That variance is only visible if consumption is reconciled against sales at the level of the bottle and the measure. A stock take produces a figure; it does not say which spirits, which shifts or which bartenders.',
      'The second characteristic is tabs. Open tabs are credit extended in a loud room at speed, and tabs left unsettled at close are the most avoidable loss in the format.',
      'The third is that trade is concentrated into a few hours on a few nights, and being short behind the bar during them doubles service time and costs an entire round from every waiting customer.',
      'The fourth is entertainment. Music, events and promotions cost real money and are meant to drive specific nights, and the comparison between the cost and the night it produced is rarely made.',
      'Verity reconciles pour against sales, tracks tabs to settlement, staffs against the actual peak and compares entertainment cost with the night it drove.',
    ],
  },

  terminology: [
    ['Bottles, measures, kegs, wet stock', 'Inventory'],
    ['Tabs, orders, rounds, comps', 'Orders'],
    ['Guests, regulars, table bookings', 'Relationships'],
    ['Bartenders, servers, security', 'People'],
    ['Distributors, breweries, suppliers', 'Suppliers'],
    ['Comps, voids, write-offs, licence hours', 'Workflows'],
    ['Bar, floor, terrace, store', 'Locations'],
  ],

  challengesHeading: 'Loss by the measure, credit at the bar.',
  challengesLede:
    'Bar difficulties come from a product sold in fractions of the unit it is bought in, at speed, in a loud room.',
  challenges: [
    { problem: 'Pour variance is a single stocktake figure', detail: 'The gap between expected and actual yield arrives monthly with no attribution to spirit, shift or bartender.', outcome: 'Consumption is reconciled against sales by bottle and measure, so variance is attributable.' },
    { problem: 'Tabs are left open at close', detail: 'Credit extended in a busy room is settled by memory, and some of it is not settled at all.', outcome: 'Tabs are records with an owner and a state, so unsettled tabs are visible at close rather than after it.' },
    { problem: 'Peak staffing is planned as an average', detail: 'Trade concentrates into a few hours and being one short behind the bar costs a round from everyone waiting.', outcome: 'Staffing is planned against the actual hourly pattern for that night of the week.' },
    { problem: 'Entertainment cost is not compared with the night', detail: 'Events and music cost real money to drive specific nights, and the comparison is never made.', outcome: 'Entertainment cost attaches to the night it was booked for, alongside that night’s takings.' },
    { problem: 'Comps and voids accumulate', detail: 'Discretionary drinks are given at the bar under pressure and add up across a month.', outcome: 'Comps and voids are approvals with reasons and attribution.' },
    { problem: 'Wet and dry mix is not managed', detail: 'Food margin differs sharply from drinks and the mix drifts without anyone deciding.', outcome: 'Mix and margin by category are recorded, so menu and pricing decisions follow evidence.' },
  ],

  modulesLede: 'One system across pour, tabs, staffing and events.',
  modules: [
    { id: 'inventory', title: 'Bottles, measures and kegs', line: 'Stock is held by bottle and keg with expected yield in measures, cost, location and recorded wastage.', why: 'A product bought by the bottle and sold by the measure needs an explicit yield to be reconcilable.', example: 'A bottle yielding thirty-one measures against an expected thirty-eight.' },
    { id: 'orders', title: 'Tabs, rounds and comps', line: 'Orders and tabs record their items, measures, server, table and settlement state.', why: 'The tab is credit, and credit in a bar needs a state rather than a memory.', example: 'Eleven tabs open at close across two nights.' },
    { id: 'workforce', title: 'Staffing against the hourly peak', line: 'Rostering and attendance connect to the hours and stations they covered.', why: 'Bar trade is extremely peaked and staffing to an average guarantees a bad peak.', example: 'Two nights short behind the bar with service times doubled after ten.' },
    { id: 'work', title: 'Events, entertainment and setup', line: 'Events are work with a date, cost, requirements and the night they were booked to drive.', why: 'Entertainment is an investment in a specific night and should be measured against it.', example: 'Event cost compared with the takings of the night it was booked for.' },
    { id: 'workflows', title: 'Comps, voids and write-offs', line: 'Comps, voids, wastage and write-offs move through approval steps with reasons and attribution.', why: 'Discretionary decisions at a busy bar are the second-largest controllable cost after pour.', example: 'Comps by server and shift, against thresholds.' },
    { id: 'people', title: 'Bartenders, servers and security', line: 'Staff are modelled once, and every sale, comp, void and stock movement carries who made it.', why: 'Pour variance and comp behaviour are both individual-level facts.', example: 'Variance by bartender and shift.' },
    { id: 'suppliers', title: 'Distributors and breweries', line: 'Suppliers carry orders, prices, delivery reliability and balances.', why: 'Wet stock cost movement changes drink margin immediately.', example: 'Cost per measure by spirit after supplier price movement.' },
    { id: 'intelligence', title: 'Variance, mix and night reporting', line: 'Pour variance by spirit and shift, wet and dry mix, takings by hour and night, event return, comp rates and tab settlement come from the records.', why: 'A bar’s controllable costs are all measurable and almost none are measured.', example: 'Variance quantified in rupees per month at current volume.' },
    { id: 'ai', title: 'Ask the bar a question', line: 'Verity AI answers from your own stock, sales, staffing and event records, respects permissions, and can create assigned follow-ups.', why: 'The owner is on the floor at night and needs the answer, not a report.', example: '"Where is pour variance highest?" returns the spirits and shifts with reviews assigned.' },
    { id: 'relationships', title: 'Regulars and table bookings', line: 'Regulars and bookings carry their history, spend and preferences.', why: 'Bar revenue concentrates in regulars and booked tables, both of which are trackable.', example: 'Regulars whose visits have stopped since a change of night.' },
    { id: 'control', title: 'Who can comp, void and adjust', line: 'One permission model and one audit trail across every record.', why: 'A busy bar distributes discretion widely and needs thresholds rather than trust.', example: 'Comps above threshold routed for approval.' },
    { id: 'locations', title: 'Bar, floor, terrace and store', line: 'Locations roll into the business, with stock and takings following the same structure.', why: 'Multiple service points hold their own stock and produce their own variance.', example: 'Variance and takings by service point.' },
  ],

  workflowsHeading: 'The night, measured.',
  workflowsLede: 'These already happen. Recorded, the largest controllable costs become visible.',
  workflows: [
    { name: 'Pour reconciliation', steps: ['Opening stock recorded by bottle and keg', 'Sales converted to measures poured', 'Wastage and staff drinks recorded separately', 'Closing stock recorded', 'Variance calculated and attributed by spirit and shift'], note: 'Recording wastage separately is what makes the remaining variance meaningful.' },
    { name: 'Tab lifecycle', steps: ['Tab opened against a guest or table with a server', 'Items added through the night', 'Limits applied where set', 'Settlement taken at close', 'Unsettled tabs escalated before the shift ends'], note: 'A tab is credit, and closing the shift with it open is where the loss becomes permanent.' },
    { name: 'Peak staffing', steps: ['Takings by hour pulled for the same night historically', 'Bar and floor staffing set against the pattern', 'Attendance confirmed before the peak', 'Service times observed during it', 'Result compared for the next equivalent night'], note: 'Being one short behind a bar at the peak costs a round from everyone waiting.' },
    { name: 'Event return', steps: ['Event booked with cost and the night it targets', 'Takings for that night recorded', 'Comparison made against equivalent nights without an event', 'Return recorded against the event type', 'Future booking decisions informed'], note: 'Entertainment is an investment in a night, and the comparison is easy once both are records.' },
    { name: 'Comp and void control', steps: ['Comp or void requested at the bar', 'Threshold applied and approval routed where needed', 'Reason and attribution recorded', 'Rates reported by server and shift', 'Pattern reviewed against policy'], note: 'Small discretionary decisions at speed are the second-largest controllable cost after pour.' },
  ],

  ai: {
    heading: 'Ask where the measures went.',
    lede: 'Verity AI reads the same stock, sales, staffing and event records the bar creates each night. It answers from your own venue, respects permissions, and can turn an answer into reviews and rosters.',
    panelMeta: 'Grounded in your bar records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Where is pour variance highest, by spirit and shift?',
      'Which tabs were left open at close?',
      'Which nights were understaffed against their usual pattern?',
      'What did the last event return against comparable nights?',
      'What is comp and void rate by server?',
      'What is wet against dry margin this month?',
      'Which spirits have moved in cost without a price change?',
      'Which regulars have stopped coming?',
      'Summarise variance and night performance.',
    ],
  },

  automationHeading: 'The checks at close.',
  automationLede: 'Each runs from the bar’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Pour variance exceeds tolerance', steps: ['Flagged by spirit and shift with value', 'Review assigned to the bar manager', 'Outcome recorded'] },
    { trigger: 'A tab remains open at close', steps: ['Flagged with server and value', 'Settlement task raised before shift end', 'Escalated if unsettled'] },
    { trigger: 'Forecast trade exceeds staffed capacity', steps: ['Night flagged with the historical hourly pattern', 'Cover task assigned', 'Result recorded after the night'] },
    { trigger: 'An event completes', steps: ['Takings compared with equivalent nights', 'Return recorded against event type', 'Booking decision informed'] },
    { trigger: 'Comps exceed threshold on a shift', steps: ['Pattern flagged with attribution', 'Review assigned', 'Decision recorded'] },
  ],

  intelligenceHeading: 'What the owner can see.',
  intelligenceLede: 'Variance, mix and night performance from the bar’s own records.',
  intelligence: [
    { area: 'Variance', points: ['Pour variance by spirit, shift and bartender', 'Wastage recorded against unexplained gap', 'Variance value at current volume', 'Trend across periods'] },
    { area: 'Trade', points: ['Takings by hour and night', 'Wet and dry mix and margin', 'Average spend per guest and per table', 'Comparison against equivalent nights'] },
    { area: 'Credit', points: ['Tabs opened, settled and outstanding', 'Unsettled tabs by server and night', 'Tab limits applied', 'Recovery outcomes'] },
    { area: 'Staffing', points: ['Cover against the hourly pattern', 'Service times during peak', 'Attendance against roster', 'Labour cost against takings by night'] },
    { area: 'Events', points: ['Cost by event and type', 'Takings on event nights against comparable ones', 'Return by event type', 'Repeat performance of formats'] },
  ],
  intelligenceNote: 'All of it comes from recording the pour, the tab and the roster, which the night already produces.',

  rolesHeading: 'One venue, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where is the money going?', focus: 'Pour variance by spirit and shift, comp rates, event return, wet and dry margin.' },
    { role: 'Bar manager', question: 'Is tonight set up?', focus: 'Staffing against the pattern, stock behind the bar, tabs open, comps against threshold.' },
    { role: 'Bartender', question: 'What is on this tab?', focus: 'Open tabs and their items, stock available, comps requiring approval, wastage to record.' },
  ],

  useCasesHeading: 'What bars use Verity for',
  useCases: [
    { name: 'Pour variance', body: 'Consumption reconciled against sales by bottle and measure, so the largest controllable cost in the format becomes attributable.' },
    { name: 'Tab settlement', body: 'Tabs as records with an owner and a state, so an unsettled tab is caught at close rather than written off after it.' },
    { name: 'Peak staffing', body: 'Cover planned from the actual hourly pattern for that night, since being one short at the peak costs a round from everyone waiting.' },
    { name: 'Event return', body: 'Entertainment cost compared with the takings of the night it was booked to drive.' },
    { name: 'Comp and void control', body: 'Discretionary decisions at the bar carried as approvals with reasons and attribution.' },
    { name: 'Wet and dry mix', body: 'Margin by category recorded, so menu and pricing decisions follow the mix rather than drift with it.' },
    { name: 'Asking about the night', body: 'Plain-language questions across pour, tabs, staffing and events, with reviews raised in the same step.' },
  ],

  migration: 'Your billing setup continues and is mapped during implementation. Stock with yields, suppliers, staff and any regular accounts are brought across, and Verity is configured around how the venue trades.',

  faqHeading: 'Questions bar operators ask',
  faqs: [
    ['What can AI software do for a bar?', 'Verity AI answers questions from your own stock, sales, staffing and event records: where pour variance is highest by spirit and shift, which tabs were left open, which nights were understaffed, what the last event returned. Each answer can become a review or a roster change.'],
    ['How does pour variance work?', 'Stock is held with an expected yield in measures per bottle, sales are converted to measures poured, and wastage and staff drinks are recorded separately. The remaining gap is the variance, attributable to a spirit, a shift and a bartender rather than arriving as one stocktake figure.'],
    ['Why does the tab matter so much?', 'A tab is credit extended in a loud room at speed. Closing a shift with tabs open is where that credit becomes a loss, and it is entirely preventable if the tab has a state and an owner.'],
    ['Can it help with staffing?', 'Takings by hour for the same night of the week drive the roster, so cover matches an extremely peaked pattern rather than an average. Being one short behind the bar during the peak costs a round from everyone waiting.'],
    ['Does it measure event return?', 'Entertainment cost attaches to the night it was booked to drive, and takings for that night are compared with equivalent nights without an event — which is an easy comparison once both are records.'],
    ['Can it control comps?', 'Comps and voids move through thresholds with reasons and attribution, which matters because they are given at speed under pressure and accumulate across a month.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds the stock and yields, tabs, staffing, events and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the bar’s stock, yields and service pattern, configuration, migration of stock and suppliers, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with pour variance.',
  ctaLede: 'It is usually a larger number than expected and entirely measurable. Tell us how stock is counted today.',

  related: ['restaurants', 'hotels', 'event-venues', 'cafes', 'resorts', 'catering-businesses'],
};
