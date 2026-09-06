export default {
  slug: 'sports-stores',
  status: 'published',
  plural: 'sports stores',
  subject: 'sports retail business',

  seo: {
    title: 'AI business management software for sports stores | Verity',
    description:
      'Verity connects sport-by-sport seasonality, size and specification stock, club and team bulk orders, equipment servicing and supplier terms into one system.',
    keywords: [
      'AI software for sports stores',
      'sports retail management software',
      'team and club bulk order management',
      'equipment servicing and seasonal stock software',
    ],
  },

  hero: {
    eyebrow: 'Verity for sports retail',
    headline: 'Six sports, six seasons, and one stockroom.',
    lede:
      'Every sport peaks at a different time and needs different stock, and team orders arrive in bursts with fixed dates. Verity plans each season separately and holds the team orders to their deadlines.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Store',
      meta: 'This quarter',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹24 L', note: 'across 6 sport categories' },
        { label: 'Team orders open', value: '14', note: '₹8.6 L · fixed dates' },
        { label: 'Off-season stock', value: '₹11 L', note: 'held to next season' },
        { label: 'Servicing jobs', value: '38', note: '9 past promised date' },
      ],
      rows: [
        { name: '14 team orders with fixed season-start dates', meta: 'Three unconfirmed on sizes and numbers', active: true },
        { name: '9 servicing jobs past their promised date', meta: 'Players need equipment for fixtures', active: true },
        { name: 'Peak sport stocked out during its opening weeks', meta: 'Ordered against the annual pattern', active: true },
        { name: '₹11 L of off-season stock held', meta: 'Financing cost across the gap', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'Every sport is a separate season sharing one shop.',
    paragraphs: [
      'A sports store carries several categories whose demand peaks at completely different times of year. Each one has its own season start, its own buying lead time and its own dead period, and managing them against a single annual pattern guarantees stockouts in one category and dead stock in another.',
      'The second characteristic is team and club business. Schools, clubs and corporate teams order in bulk against fixed season-start dates, usually with names, numbers and size breakdowns that arrive late. Fourteen open team orders with three unconfirmed is a production and delivery risk against dates that will not move.',
      'The third is specification. Sports equipment is bought on fit and spec — size, weight, grip, flex — and a customer who cannot get their specification buys nothing rather than something close.',
      'The fourth is servicing. Restringing, repairs and fitting are promised against fixtures, and a racket that is not ready for Saturday is worse than useless.',
      'The fifth is that off-season stock is held across a long gap with a real financing cost that nobody attributes to the category holding it.',
      'Verity manages each sport as its own season, holds team orders to their dates, and tracks servicing promises.',
    ],
  },

  terminology: [
    ['Sports, categories, seasons', 'Records'],
    ['Sizes, specifications, variants', 'Inventory'],
    ['Team orders, individual sales, returns', 'Orders'],
    ['Clubs, schools, teams, individuals', 'Relationships'],
    ['Restringing, fitting, repairs', 'Work'],
    ['Brands, distributors', 'Suppliers'],
    ['Store, stockroom, workshop', 'Locations'],
  ],

  challengesHeading: 'Several seasons, one shop, fixed dates.',
  challengesLede:
    'Sports retail difficulties come from managing distinct seasonal businesses as one and from team orders that arrive late against dates that do not move.',
  challenges: [
    { problem: 'One annual pattern across several seasons', detail: 'Each sport peaks at a different time and is ordered against a general reorder discipline, producing stockouts and dead stock simultaneously.', outcome: 'Each sport carries its own season calendar, lead times and thresholds.' },
    { problem: 'Team orders confirm late against fixed dates', detail: 'Names, numbers and size breakdowns arrive close to the season start, compressing production.', outcome: 'Confirmation is tracked against the production lead time rather than the delivery date.' },
    { problem: 'Specification stockouts lose the whole sale', detail: 'A customer needing a particular size, weight or grip buys nothing rather than something approximate.', outcome: 'Stock is held at specification level, so availability reflects what customers actually ask for.' },
    { problem: 'Servicing promises tie to fixtures', detail: 'Restringing and repairs are promised for a match date and tracked on a tag.', outcome: 'Servicing is work with a promised date, an owner and a state.' },
    { problem: 'Off-season holding cost is unattributed', detail: 'Stock held across a long gap costs financing that is treated as general expense.', outcome: 'Holding period and cost attach to the category holding them.' },
    { problem: 'Team relationships are personal', detail: 'Club and school business depends on a relationship with one coach or administrator and leaves when they do.', outcome: 'Clubs are records with their order history, sizes and contacts held by the business.' },
  ],

  modulesLede: 'One system across seasons, specifications, team orders and servicing.',
  modules: [
    { id: 'records', title: 'Sports, seasons and calendars', line: 'Each sport carries its season dates, buying lead times, historical demand pattern and category thresholds.', why: 'Managing six seasons as one annual cycle is the format’s characteristic mistake.', example: 'A sport stocked out in its opening weeks because it was ordered on the store’s general pattern.' },
    { id: 'inventory', title: 'Stock by size and specification', line: 'Stock is held per item, size and specification with cost, season, holding period and location.', why: 'Sports purchases are specification-driven, and an approximate match is not a sale.', example: 'Availability at specification level rather than at product level.' },
    { id: 'orders', title: 'Team orders and individual sales', line: 'Team orders carry their club, size breakdown, personalisation, delivery date and confirmation state; sales record specification and customer.', why: 'Team orders are a different order type with fixed dates and late-arriving detail.', example: 'Three team orders unconfirmed inside the production lead time.' },
    { id: 'relationships', title: 'Clubs, schools and individuals', line: 'Clubs carry their contacts, order history, size profiles and season timing; individuals carry their specifications and purchases.', why: 'Team business repeats annually and should not depend on one relationship.', example: 'Last season’s size breakdown for a club, used to prompt this season’s order.' },
    { id: 'work', title: 'Restringing, fitting and repairs', line: 'Servicing is work with a customer, an item, a promised date, an owner and a state.', why: 'Equipment is promised against a fixture, which is a hard date.', example: 'Nine servicing jobs past their promised date with fixtures approaching.' },
    { id: 'suppliers', title: 'Brands and distributors', line: 'Suppliers carry lead times against season starts, minimum orders, delivery reliability and balances.', why: 'A supplier delivering to its own lead time misses a season start entirely.', example: 'Delivery measured against season start rather than against a general lead time.' },
    { id: 'intelligence', title: 'Season, specification and holding reporting', line: 'Sell-through by sport and season, specification-level availability, team order performance, servicing turnaround and holding cost come from the records.', why: 'Six seasons need six sets of numbers, not one.', example: 'Holding cost by category across the off-season gap.' },
    { id: 'ai', title: 'Ask the store a question', line: 'Verity AI answers from your own stock, order, club and servicing records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about approaching season starts and unconfirmed team orders.', example: '"Which team orders are unconfirmed inside lead time?" returns three with chases assigned.' },
    { id: 'workflows', title: 'Confirmations, deposits and approvals', line: 'Team order confirmation, deposits, discounts and returns move through defined steps with recorded decisions.', why: 'Bulk orders carry deposits and personalisation that cannot be reversed.', example: 'Personalisation held until the size breakdown is confirmed.' },
    { id: 'people', title: 'Store staff and workshop', line: 'Staff are modelled once, and every sale, team order and servicing job carries who owns it.', why: 'Specification advice and servicing turnaround both vary by person.', example: 'Servicing turnaround by workshop staff member.' },
    { id: 'locations', title: 'Store, stockroom and workshop', line: 'Locations roll into the business with stock, work and reporting following the same structure.', why: 'The workshop queue is a real constraint during a season start.', example: 'Workshop queue against promised fixture dates.' },
    { id: 'control', title: 'Who can discount and commit', line: 'One permission model and one audit trail across every record.', why: 'Team order pricing is negotiated and personalisation is irreversible.', example: 'A team order discount recorded as an approval with the order value.' },
  ],

  workflowsHeading: 'Six seasons and a workshop.',
  workflowsLede: 'These already happen. Recorded per sport, each season gets its own plan.',
  workflows: [
    { name: 'Season preparation', steps: ['Season start and historical pattern pulled per sport', 'Buying lead times applied backwards from it', 'Orders placed against the season start', 'Stock received and specification availability checked', 'Peak weeks staffed against the pattern'], note: 'Each sport needs its own backward plan; a single annual cycle serves none of them well.' },
    { name: 'Team order', steps: ['Enquiry recorded with club, quantity and season start', 'Production lead time calculated backwards', 'Size breakdown and personalisation confirmation tracked', 'Deposit taken and production released', 'Delivery completed against the season start', 'Balance collected and order closed'], note: 'Tracking confirmation against lead time rather than delivery date is what makes the date achievable.' },
    { name: 'Specification sale', steps: ['Customer requirement recorded with specification', 'Availability checked at specification level', 'Alternative or order raised where unavailable', 'Sale recorded against the customer with their spec', 'Specification retained for future prompts'], note: 'Recording the specification is what makes a future arrival worth a call.' },
    { name: 'Servicing job', steps: ['Item received with specification and fixture date', 'Job assigned with a promised date', 'Workshop queue position tracked', 'Completion recorded and customer notified', 'Turnaround measured against promise'], note: 'A fixture date is a hard deadline; the queue has to respect it.' },
    { name: 'Off-season holding', steps: ['Stock at season end identified by sport', 'Holding period and cost calculated across the gap', 'Clearance against hold decision taken with the cost visible', 'Decision recorded against the category', 'Next season buy adjusted accordingly'], note: 'Holding for eight months is a decision with a cost, and it is usually taken by default.' },
  ],

  ai: {
    heading: 'Ask season by season.',
    lede: 'Verity AI reads the same stock, order, club and servicing records the store creates as it trades. It answers per sport, respects permissions, and can turn an answer into ordering and chasing.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which team orders are unconfirmed inside their production lead time?',
      'Which sports have season starts approaching and what did they sell last year?',
      'Which servicing jobs are past their promised date?',
      'What specifications are we most often out of?',
      'What is off-season holding cost by category?',
      'Which clubs ordered last season and have not yet this season?',
      'Which suppliers deliver late against season starts?',
      'What is sell-through by sport and season?',
      'Summarise readiness across the coming season starts.',
    ],
  },

  automationHeading: 'Season starts and fixture dates.',
  automationLede: 'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A season start approaches', steps: ['Last year’s pattern surfaced for the sport', 'Supplier orders checked against the start date', 'Clubs from last season prompted'] },
    { trigger: 'A team order is unconfirmed inside lead time', steps: ['Flagged with production time remaining', 'Confirmation chase assigned', 'Date risk communicated to the club'] },
    { trigger: 'A servicing job approaches its promised date', steps: ['Flagged with queue position and fixture', 'Escalated to the workshop owner', 'Customer update raised if late'] },
    { trigger: 'A specification is repeatedly unavailable', steps: ['Recorded against the item and spec', 'Stocking review assigned', 'Decision recorded for the next buy'] },
    { trigger: 'A season ends with stock held', steps: ['Holding cost calculated across the gap', 'Clearance or hold decision raised', 'Outcome recorded against the category'] },
  ],

  intelligenceHeading: 'What the owner can see per sport.',
  intelligenceLede: 'Six seasons measured separately, from the store’s own records.',
  intelligence: [
    { area: 'Seasons', points: ['Sell-through by sport and season', 'Stockouts during season starts', 'Buying lead times met against start dates', 'Year-on-year comparison by sport'] },
    { area: 'Team business', points: ['Orders by club with confirmation timing', 'Delivery against season starts', 'Repeat clubs and lapsed ones', 'Deposits held and balances due'] },
    { area: 'Specification', points: ['Availability at specification level', 'Requests unavailable and their specs', 'Substitution and lost sales', 'Specification profile of the customer base'] },
    { area: 'Servicing', points: ['Jobs by state and promised date', 'Turnaround by workshop staff', 'Late jobs and their causes', 'Servicing revenue by sport'] },
    { area: 'Capital', points: ['Off-season holding value and cost by category', 'Clearance recovery against holding', 'Stock ageing across seasons', 'Supplier reliability against start dates'] },
  ],
  intelligenceNote: 'All of it comes from recording sales, team orders and servicing against the sport and season they belong to.',

  rolesHeading: 'One shop, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Is each season planned properly?', focus: 'Sell-through by sport, holding cost by category, team order performance, supplier reliability against start dates.' },
    { role: 'Store staff', question: 'Do we have their specification?', focus: 'Availability at spec level, customer specifications and history, alternatives, servicing status.' },
    { role: 'Workshop', question: 'What is due before which fixture?', focus: 'Servicing queue by promised date, specifications, completion to record, turnaround.' },
  ],

  useCasesHeading: 'What sports retailers use Verity for',
  useCases: [
    { name: 'Season-by-season planning', body: 'Each sport carrying its own calendar, lead times and thresholds rather than sharing one annual cycle.' },
    { name: 'Team order lead times', body: 'Size and personalisation confirmation tracked against production lead time rather than the season start date.' },
    { name: 'Specification-level availability', body: 'Stock held by size, weight and grip, since a customer needing a specification buys nothing rather than something close.' },
    { name: 'Servicing against fixtures', body: 'Restringing and repairs as work with promised dates tied to matches, visible before the fixture.' },
    { name: 'Off-season holding cost', body: 'Financing across the seasonal gap attributed to the category holding the stock, so the hold-or-clear decision has a number.' },
    { name: 'Club relationship continuity', body: 'Clubs as records with their size breakdowns and history, so annual business does not depend on one coach.' },
    { name: 'Asking per season', body: 'Plain-language questions across sports, team orders, specifications and servicing, with actions raised in the same step.' },
  ],

  migration: 'Your billing setup continues and is mapped during implementation. Stock at specification level, clubs with their history, suppliers and open team orders are brought across, and Verity is configured around the store’s season calendar.',

  faqHeading: 'Questions sports retailers ask',
  faqs: [
    ['What can AI software do for a sports store?', 'Verity AI answers questions from your own stock, order, club and servicing records: which team orders are unconfirmed inside lead time, which season starts are approaching and what they sold last year, which servicing jobs are late, what specifications you are most often out of. Each answer can become an order or a chase.'],
    ['Why manage each sport separately?', 'Because each has its own season start, buying lead time and dead period. Managing six seasonal businesses against one annual pattern produces stockouts in the sport that is starting and dead stock in the one that has finished, simultaneously.'],
    ['How does it help with team orders?', 'Team orders carry a fixed season-start date and the size breakdown and personalisation details usually arrive late. Confirmation is tracked against the production lead time calculated backwards, so the compression is visible while it can still be managed.'],
    ['Why track specification rather than product?', 'Because sports purchases are specification-driven. A customer who needs a particular size, weight or grip buys nothing rather than something approximate, so availability at product level overstates what you can actually sell.'],
    ['Does it handle servicing?', 'Restringing, fitting and repairs are work with a customer, an item, a promised date tied to a fixture and a workshop queue position, so a job at risk is visible before the match rather than on the day.'],
    ['Can it show off-season holding cost?', 'Holding period and financing cost attach to the category holding the stock, so the decision to hold across an eight-month gap is compared against clearing now rather than taken by default.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds the seasons, specification stock, team orders, servicing and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the season calendar and team order process, configuration, migration of stock, clubs and open orders, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the season that is about to begin.',
  ctaLede: 'You know the date and you have last year’s numbers. Tell us how each sport is planned today.',

  related: ['shoe-stores', 'fashion-stores', 'retail-stores', 'gyms', 'fitness-studios', 'schools'],
};
