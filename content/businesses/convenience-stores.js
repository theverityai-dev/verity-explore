export default {
  slug: 'convenience-stores',
  status: 'published',
  plural: 'convenience stores',
  subject: 'convenience store',

  seo: {
    title: 'AI business management software for convenience stores | Verity',
    description:
      'Verity connects space productivity per facing, extended-hours staffing, thin-margin ordering and shrink into one operational system for convenience retail.',
    keywords: [
      'AI software for convenience stores',
      'convenience store management software',
      'space productivity and facing analysis',
      'extended hours staffing and shrink control',
    ],
  },

  hero: {
    eyebrow: 'Verity for convenience retail',
    headline: 'Six hundred square feet. Every facing has to earn its space.',
    lede:
      'A convenience store cannot carry range. It can only carry what turns, and it has to be open when nobody else is. Verity measures both.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Store',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales today', value: '₹96,400', note: '684 transactions' },
        { label: 'Average basket', value: '₹141', note: '2.3 items' },
        { label: 'Lines not sold 30d', value: '148', note: 'occupying facings' },
        { label: 'Night-hour margin', value: '9.1%', note: 'against 14% day' },
      ],
      rows: [
        { name: '148 lines with no sale in 30 days occupying facings', meta: 'Space that could carry a faster line', active: true },
        { name: 'Top 40 lines out of stock 11 times this week', meta: 'Highest-frequency items', active: true },
        { name: 'Night hours running below break-even margin', meta: 'Staffing cost against takings', active: true },
        { name: 'Shrink concentrated on two categories', meta: 'Small, high-value, near the door', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'The constraint is space, and the product is being open.',
    paragraphs: [
      'A convenience store operates in a footprint that cannot hold range. Every facing is a decision to carry one line instead of another, and a line that does not sell is not merely slow stock — it is occupying the only scarce resource the business has. A hundred and forty-eight lines with no sale in a month is a hundred and forty-eight facings producing nothing.',
      'The second fact is that customers come for immediacy, not for choice. A convenience shopper buys two or three things they need now, which means the store’s entire proposition rests on the top lines being in stock at the moment someone walks in. An out-of-stock on a top-forty line is a lost basket, not a lost item.',
      'The third is extended hours. Being open late is the differentiator and it is also where margin goes: staffing cost is constant while takings are not, and most convenience operators cannot say which hours actually pay for themselves.',
      'The fourth is shrink, which in convenience concentrates predictably — small, high-value items near the door — and is usually absorbed as a single stocktake figure.',
      'Verity records movement per facing, availability on the lines that matter, hourly takings against staffing cost, and loss with a reason.',
    ],
  },

  terminology: [
    ['Lines, facings, planogram space', 'Inventory'],
    ['Baskets, transactions, returns', 'Orders'],
    ['Regulars, account customers', 'Relationships'],
    ['Distributors, cash-and-carry, direct suppliers', 'Suppliers'],
    ['Shift staff, night cover', 'People'],
    ['Write-offs, discounts, adjustments', 'Workflows'],
    ['Store, backroom, chiller', 'Locations'],
  ],

  challengesHeading: 'Space, availability and hours.',
  challengesLede:
    'Convenience difficulties come from a footprint that cannot hold mistakes and hours that cost more than they always earn.',
  challenges: [
    {
      problem: 'Dead lines occupy the only scarce resource',
      detail:
        'Slow stock in a large store is capital. In a convenience store it is space, and space is the whole constraint.',
      outcome:
        'Movement per line is recorded, so lines producing nothing per facing are identifiable against faster candidates.',
    },
    {
      problem: 'Out-of-stock on top lines loses whole baskets',
      detail:
        'A customer buying three things who cannot get one of them often buys none of them, and the loss leaves no transaction.',
      outcome:
        'Availability is tracked on the highest-frequency lines specifically, rather than across the whole range equally.',
    },
    {
      problem: 'Extended hours are not costed',
      detail:
        'Late hours are the differentiator and the margin drain, and takings by hour are rarely set against staffing cost.',
      outcome:
        'Transactions carry their hour and the roster carries its cost, so hourly contribution is a number.',
    },
    {
      problem: 'Shrink concentrates and is reported in total',
      detail:
        'Loss is predictable by category and location within the store, and a single stocktake figure hides all of it.',
      outcome:
        'Losses are recorded with reason and location, so the concentration is addressable.',
    },
    {
      problem: 'Ordering is frequent, small and unexamined',
      detail:
        'Deliveries arrive several times a week from several sources, and price and short-delivery drift through unnoticed.',
      outcome:
        'Cost and delivery are recorded against each supplier, so movement and shortfall are visible on thin margins.',
    },
  ],

  modulesLede:
    'One system across space, availability, hours and loss.',
  modules: [
    {
      id: 'inventory',
      title: 'Lines, facings and movement',
      line:
        'Stock is held per line with supplier, cost, facings allocated, movement rate and days since last sale.',
      why:
        'In a footprint this small, movement per facing is the only meaningful measure of whether a line deserves to exist.',
      example:
        'A hundred and forty-eight lines with no sale in thirty days, ranked against faster candidates for the same space.',
    },
    {
      id: 'orders',
      title: 'Baskets and availability',
      line:
        'Transactions record their items, hour, staff member and the stock moved; unfulfilled requests are recorded where noticed.',
      why:
        'Basket composition tells a convenience store which lines pull the visit and which merely ride along.',
      example:
        'Top-forty lines out of stock eleven times in a week, measured as lost baskets rather than lost items.',
    },
    {
      id: 'workforce',
      title: 'Shifts and hourly cost',
      line:
        'Rostering and attendance stay connected to the hours they covered.',
      why:
        'Extended hours are the proposition and the cost, and only hourly contribution shows whether they pay.',
      example:
        'Night hours at nine percent margin against fourteen percent during the day.',
    },
    {
      id: 'suppliers',
      title: 'Distributors and direct suppliers',
      line:
        'Suppliers carry their delivery days, prices, short deliveries and balances.',
      why:
        'Convenience buying is frequent and fragmented, and price creep is invisible on a thin margin.',
      example:
        'Cost movement by line against selling price, per supplier.',
    },
    {
      id: 'workflows',
      title: 'Write-offs, discounts and adjustments',
      line:
        'Expiry write-offs, markdowns and stock adjustments move through approval steps with recorded reasons.',
      why:
        'Small frequent losses are the category’s characteristic leak.',
      example:
        'Write-offs by category, location and reason rather than one stocktake number.',
    },
    {
      id: 'people',
      title: 'Shift staff and night cover',
      line:
        'Staff are modelled once, and every sale, adjustment and write-off carries who made it.',
      why:
        'Single-staffed shifts need attribution more than large teams do, not less.',
      example:
        'Adjustments and voids by shift and person.',
    },
    {
      id: 'intelligence',
      title: 'Space, hour and loss reporting',
      line:
        'Movement per facing, availability on top lines, contribution by hour, shrink by category and supplier cost movement come from the transactions.',
      why:
        'The three convenience questions — what to carry, when to open, where the loss is — are all answerable from the day’s records.',
      example:
        'Contribution by hour, which decides opening hours more reliably than habit.',
    },
    {
      id: 'ai',
      title: 'Ask the store a question',
      line:
        'Verity AI answers from your own stock, sales, staffing and supplier records, respects permissions, and can create assigned follow-ups.',
      why:
        'The operator is behind the counter and needs an answer rather than a report to build.',
      example:
        '"Which lines have not sold in thirty days?" returns a hundred and forty-eight with replacement candidates.',
    },
    {
      id: 'records',
      title: 'Product and supplier information',
      line:
        'Product details, prices and supplier terms attach to the line they belong to.',
      why:
        'A store with several supply routes needs one place where the terms for a line actually live.',
      example:
        'Which supplier a line should be ordered from and at what price, on the line itself.',
    },
    {
      id: 'control',
      title: 'Who can adjust and discount',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Long hours and thin staffing mean most decisions are made alone.',
      example:
        'Every adjustment carrying the person, reason and time.',
    },
    {
      id: 'relationships',
      title: 'Regulars and account customers',
      line:
        'Repeat customers and any credit accounts are records with their purchases and balances.',
      why:
        'Convenience revenue is frequency, and a regular who stops is worth more than a passing customer.',
      example:
        'Account balances aged rather than tracked in a book.',
    },
    {
      id: 'locations',
      title: 'Store, backroom and chiller',
      line:
        'Locations roll into the business, with stock and reporting following the same structure.',
      why:
        'A small backroom is a real constraint on how much can be ordered at once.',
      example:
        'Stock held front and back, so ordering respects the space available.',
    },
  ],

  workflowsHeading: 'Small store, frequent decisions.',
  workflowsLede:
    'These already happen several times a day. Recorded, they add up to a range and an opening decision.',
  workflows: [
    {
      name: 'Facing review',
      steps: [
        'Movement per line pulled for the period',
        'Lines with no sale past the threshold identified',
        'Contribution per facing compared across candidates',
        'Delist or replace decision taken',
        'Planogram space reallocated and recorded',
      ],
      note: 'This is the single most valuable routine in convenience retail and the least often run.',
    },
    {
      name: 'Top-line availability',
      steps: [
        'Highest-frequency lines identified from sales',
        'Availability checked against them specifically',
        'Reorder raised against the supplier delivering soonest',
        'Out-of-stock incidents recorded with the hour',
        'Repeat offenders escalated in ordering',
      ],
      note: 'Availability on forty lines matters more than availability across six hundred.',
    },
    {
      name: 'Hourly contribution',
      steps: [
        'Transactions aggregated by hour',
        'Staffing cost applied per hour worked',
        'Contribution by hour calculated',
        'Opening hours or staffing adjusted',
        'Decision recorded against the period',
      ],
      note: 'Being open is the proposition, but not every hour of it pays for itself.',
    },
    {
      name: 'Delivery and cost check',
      steps: [
        'Delivery received and checked against the order',
        'Short delivery recorded against the supplier',
        'Cost movement compared with selling price',
        'Price review raised where margin falls',
        'Stock placed to front or backroom',
      ],
      note: 'On these margins an unnoticed cost increase removes the line’s contribution entirely.',
    },
    {
      name: 'Loss recording',
      steps: [
        'Expiry, damage or unexplained loss recorded with reason',
        'Location within the store noted',
        'Write-off approved above threshold',
        'Concentration reviewed by category and position',
        'Action taken on layout or process',
      ],
      note: 'Convenience shrink is predictable, which makes it addressable once it is recorded.',
    },
  ],

  ai: {
    heading: 'Ask what the space is earning.',
    lede:
      'Verity AI reads the same stock, sales, staffing and supplier records the store creates as it trades. It answers from your own store, respects permissions, and can turn an answer into ordering and range decisions.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which lines have not sold in thirty days?',
      'Which top-selling lines went out of stock this week?',
      'What is contribution by hour against staffing cost?',
      'Where is shrink concentrated by category and position?',
      'Which supplier costs moved without a price change on our side?',
      'What is average basket by hour?',
      'Which lines should replace the slowest facings?',
      'Which regulars have stopped coming?',
      'Summarise space productivity and hourly contribution.',
    ],
  },

  automationHeading: 'The checks a single-staffed store cannot make.',
  automationLede:
    'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A top line falls below reorder',
      steps: ['Flagged with its sales frequency', 'Order raised against the next delivery', 'Out-of-stock recorded if it occurs'],
    },
    {
      trigger: 'A line passes its no-sale threshold',
      steps: ['Line flagged with facings occupied', 'Replacement candidates surfaced', 'Delist decision recorded'],
    },
    {
      trigger: 'Supplier cost rises on a line',
      steps: ['Movement recorded against the line', 'Margin recalculated', 'Price review raised'],
    },
    {
      trigger: 'Hourly contribution falls below threshold',
      steps: ['Hour band flagged with takings and cost', 'Staffing or hours review raised', 'Decision recorded'],
    },
    {
      trigger: 'Loss is recorded in a category repeatedly',
      steps: ['Concentration flagged with position in store', 'Layout or process action assigned', 'Outcome recorded'],
    },
  ],

  intelligenceHeading: 'What the operator can see from the counter.',
  intelligenceLede: 'Space, availability, hours and loss from the day’s transactions.',
  intelligence: [
    { area: 'Space', points: ['Movement per line and per facing', 'Lines with no sale past threshold', 'Contribution per facing', 'Range changes and their effect'] },
    { area: 'Availability', points: ['Out-of-stock incidents on top lines', 'Lost baskets attributable to stockouts', 'Cover in days by line', 'Reorder performance'] },
    { area: 'Hours', points: ['Takings and baskets by hour', 'Staffing cost by hour', 'Contribution by hour band', 'Night trading performance'] },
    { area: 'Loss', points: ['Shrink by category and position', 'Expiry write-offs', 'Adjustments by person and shift', 'Short deliveries by supplier'] },
    { area: 'Supply', points: ['Cost movement by line', 'Delivery reliability', 'Margin by line and category', 'Outstanding payable'] },
  ],
  intelligenceNote: 'All of it comes from recording the sale and the delivery, which the store does anyway.',

  rolesHeading: 'A small store, two views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'What should I carry and when should I open?', focus: 'Movement per facing, contribution by hour, shrink concentration, supplier cost movement.' },
    { role: 'Shift staff', question: 'What is short and what needs recording?', focus: 'Top lines below reorder, deliveries to check, losses to record, account balances.' },
  ],

  useCasesHeading: 'What convenience stores use Verity for',
  useCases: [
    { name: 'Space productivity', body: 'Movement per facing rather than per line, since space is the only scarce resource in the format.' },
    { name: 'Top-line availability', body: 'Availability tracked on the highest-frequency lines specifically, because those stockouts lose whole baskets.' },
    { name: 'Hourly contribution', body: 'Takings by hour against staffing cost, so extended hours are a decision rather than a habit.' },
    { name: 'Shrink concentration', body: 'Losses recorded with reason and position, so the predictable concentration in the format is addressable.' },
    { name: 'Cost drift on thin margins', body: 'Supplier cost movement against selling price per line, where a small unnoticed rise removes the contribution.' },
    { name: 'Range replacement', body: 'Dead lines surfaced with faster candidates for the same facing.' },
    { name: 'Asking from the counter', body: 'Plain-language questions across stock, hours, loss and suppliers, with ordering raised in the same step.' },
  ],

  migration:
    'Your billing setup continues to run and is mapped during implementation. Stock, suppliers and any credit accounts are brought across, and Verity is configured around the way the store already trades.',

  faqHeading: 'Questions convenience operators ask',
  faqs: [
    ['What can AI software do for a convenience store?', 'Verity AI answers questions from your own stock, sales, staffing and supplier records: which lines have not sold in thirty days, which top lines went out of stock, what contribution looks like by hour, where shrink concentrates. Each answer can become an ordering or range decision.'],
    ['Why measure movement per facing?', 'Because space is the constraint. In a large store a slow line ties up capital; in six hundred square feet it occupies the only scarce resource you have, and the relevant comparison is against the line that could take its place.'],
    ['How does it help with availability?', 'Availability is tracked on the highest-frequency lines specifically. A convenience customer buying three items who cannot get one often buys none, so a stockout on a top line is a lost basket rather than a lost item — and it leaves no transaction behind.'],
    ['Can it tell us whether late hours pay?', 'Transactions carry their hour and the roster carries its cost, so contribution by hour band is a number rather than an assumption. Being open late is the proposition, but not every hour of it covers its staffing.'],
    ['Does it help with shrink?', 'Losses are recorded with a reason and a position in the store rather than arriving as one stocktake figure, which matters because convenience shrink concentrates predictably in small high-value items near the door.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity is the operational layer over it — stock movement, ordering, staffing cost, loss and reporting.'],
    ['Is it too much for a single-staffed store?', 'The records come from ringing the sale and checking the delivery. There is no separate data-entry job, and single-staffed stores need attribution more than large ones do.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of how the store trades, configuration, migration of stock and suppliers, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the facings earning nothing.',
  ctaLede: 'In a small footprint they are the most expensive thing in the store. Tell us how movement is tracked today.',

  related: ['grocery-stores', 'supermarkets', 'retail-stores', 'bakeries', 'gift-shops', 'pet-stores'],
};
