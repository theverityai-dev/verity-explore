export default {
  slug: 'cloud-kitchens',
  status: 'published',
  plural: 'cloud kitchens',
  subject: 'cloud kitchen',

  seo: {
    title: 'AI business management software for cloud kitchens | Verity',
    description:
      'Verity connects multi-brand production, per-brand contribution, packaging cost, dispatch times and shared kitchen capacity into one operational system.',
    keywords: [
      'AI software for cloud kitchens',
      'cloud kitchen management software',
      'multi brand kitchen operations software',
      'delivery kitchen cost and contribution tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for cloud kitchens',
    headline: 'Five brands, one kitchen, one set of costs — and no idea which brand is carrying which.',
    lede:
      'A cloud kitchen shares staff, stock and equipment across brands that report revenue separately. Verity attributes the shared cost so per-brand contribution stops being an estimate.',
    note: 'Verity manages kitchen operations. Aggregator platforms stay where they are.',
    panel: {
      title: 'Kitchen',
      meta: 'All brands · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders today', value: '412', note: 'across 5 brands' },
        { label: 'Median dispatch', value: '11m 40s', note: 'against 9m target' },
        { label: 'Items unavailable', value: '17', note: 'live on platforms' },
        { label: 'Packaging cost', value: '₹9.40', note: 'per order, up ₹1.20' },
      ],
      rows: [
        { name: 'Brand 3 dispatch time 40% above the kitchen average', meta: 'Same three items each time', active: true },
        { name: '17 items still listed but unavailable', meta: 'Cancellations and rating risk', active: true },
        { name: 'Two brands compete for the same station at peak', meta: '19:30–21:00 · both slowing', active: true },
        { name: 'Packaging cost up with no menu price change', meta: 'Affects every order', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own kitchen in this shape.',
    },
  },

  overview: {
    heading: 'A cloud kitchen is a shared-cost problem pretending to be several restaurants.',
    paragraphs: [
      'Several brands run out of one kitchen using the same staff, the same stock, the same equipment and the same rent. Each brand reports its own revenue through the platforms it sells on. Almost nothing reports its own cost, because the cost is shared. So the fundamental question — which brands are actually contributing and which are being carried — is answered by allocating overheads on a percentage somebody chose.',
      'The second structural difference from a restaurant is that there is no dining room, which means there is no direct customer relationship and no recovery from a bad experience. The entire quality signal is dispatch time and item availability, both of which are operational facts the kitchen controls and neither of which is usually measured against the brand or the item that caused them.',
      'The third is packaging. A cloud kitchen ships every order in packaging that costs real money per order, and that cost moves. In a business where the platform takes a commission on the gross, a rupee of packaging is a meaningful share of what is left.',
      'The fourth is capacity. Brands compete for the same stations at the same peak, and a menu decision taken for one brand slows the others. That interaction is invisible unless production is recorded against station and time.',
      'Verity records the order with its brand, items, station, dispatch time and packaging, and attributes shared stock and labour to the brand that consumed them.',
    ],
  },

  terminology: [
    ['Brands, menus, listed items', 'Records'],
    ['Platform orders, cancellations, refunds', 'Orders'],
    ['Ingredients, packaging, consumables', 'Inventory'],
    ['Prep, cooking, dispatch', 'Work'],
    ['Kitchen staff, station leads, shift managers', 'People'],
    ['Aggregators, suppliers, packaging vendors', 'Suppliers'],
    ['Kitchens, stations, delivery zones', 'Locations'],
  ],

  challengesHeading: 'Shared costs, separate revenues, no attribution.',
  challengesLede:
    'Every cloud kitchen difficulty comes from a cost base that is pooled and a revenue line that is not.',
  challenges: [
    {
      problem: 'Per-brand contribution is an allocation, not a measurement',
      detail:
        'Stock, labour and packaging are shared, so brand profitability is calculated by splitting overheads on a percentage rather than on what each brand consumed.',
      outcome:
        'Consumption is recorded against the order that caused it, so contribution per brand is built from actual usage.',
    },
    {
      problem: 'Dispatch time is the only quality signal and nobody attributes it',
      detail:
        'A slow order damages the brand’s platform rating, and the kitchen knows the average without knowing which brand or which item is causing it.',
      outcome:
        'Dispatch time is recorded per order with its brand, items and station, so the cause is identifiable.',
    },
    {
      problem: 'Items stay listed when they cannot be made',
      detail:
        'An item runs out and remains live on the platform, producing cancellations that cost both the order and the rating.',
      outcome:
        'Stock availability is connected to the items it supports, so unavailable items surface immediately rather than at the next cancellation.',
    },
    {
      problem: 'Brands collide at peak',
      detail:
        'Two brands need the same station between half past seven and nine, and both slow down without anyone attributing the interference.',
      outcome:
        'Production is recorded against station and time, so capacity conflicts are visible in the same view as the delays they cause.',
    },
    {
      problem: 'Packaging cost is treated as overhead',
      detail:
        'Packaging is a per-order cost that moves with supplier prices, and it is usually absorbed into a general expense line.',
      outcome:
        'Packaging is stock consumed per order, so its cost per order and its movement are visible.',
    },
    {
      problem: 'Commission is netted before anyone sees the gross',
      detail:
        'Platform revenue arrives net of commission and adjustments, and reconciling what was ordered against what was received is a monthly chore.',
      outcome:
        'Orders are recorded as they occur, so platform settlements can be reconciled against the kitchen’s own record.',
    },
  ],

  modulesLede:
    'One system across brands, production, cost attribution and dispatch.',
  modules: [
    {
      id: 'orders',
      title: 'Orders by brand, item and dispatch time',
      line:
        'Every order records its brand, platform, items, station, preparation and dispatch times, packaging used and any cancellation or refund.',
      why:
        'The order is the only place brand revenue and kitchen cost meet, which makes it the only place contribution can be measured.',
      example:
        'Four hundred and twelve orders across five brands with a median dispatch time, and the outliers attributable to specific items.',
    },
    {
      id: 'inventory',
      title: 'Ingredients, packaging and consumables',
      line:
        'Stock is held with supplier and cost and is consumed by the orders that use it, including packaging per order.',
      why:
        'Shared stock is exactly what makes brand contribution unmeasurable, and recording consumption per order is what fixes it.',
      example:
        'Packaging at nine rupees forty an order, up one rupee twenty, applied to every order rather than buried in overhead.',
    },
    {
      id: 'work',
      title: 'Prep, cooking and dispatch',
      line:
        'Production is work with a station, an owner, a timestamp and the order it belongs to.',
      why:
        'Dispatch time is the product in a cloud kitchen, and it is made of recorded steps rather than of a single number.',
      example:
        'A brand running forty percent above the kitchen’s median, traced to three items at one station.',
    },
    {
      id: 'records',
      title: 'Brands, menus and recipes',
      line:
        'Brands, listed items and their recipes are records with components, so each item connects to the stock it consumes.',
      why:
        'Several brands frequently share ingredients, and only the recipe link makes shared consumption attributable.',
      example:
        'Two brands drawing on the same base preparation, with consumption attributed to each by orders sold.',
    },
    {
      id: 'people',
      title: 'Kitchen staff and station leads',
      line:
        'Staff are modelled once, and every production step, dispatch and wastage record carries who handled it.',
      why:
        'Labour is the largest shared cost, and attributing it to stations and periods is what makes brand contribution honest.',
      example:
        'Hours worked by station against orders produced at that station.',
    },
    {
      id: 'workforce',
      title: 'Shifts against order volume',
      line:
        'Assignment, attendance and availability stay connected to the periods and stations they covered.',
      why:
        'Cloud kitchen demand is sharply peaked and entirely predictable from history, which makes understaffing avoidable.',
      example:
        'Staffing set against orders per fifteen-minute interval rather than against a flat shift.',
    },
    {
      id: 'suppliers',
      title: 'Aggregators, ingredient and packaging vendors',
      line:
        'Suppliers and platforms are relationships with their terms, commissions, settlements, delivery reliability and balances.',
      why:
        'A platform is a supplier of demand with commercial terms, and its settlements need reconciling like any other account.',
      example:
        'Platform settlement reconciled against the kitchen’s own order records for the period.',
    },
    {
      id: 'workflows',
      title: 'Availability, refunds and write-offs',
      line:
        'Item availability changes, refunds, comps and write-offs move through defined steps with recorded reasons.',
      why:
        'Taking an item down is a commercial decision with a rating consequence, and it should be recorded rather than shouted across a kitchen.',
      example:
        'An item marked unavailable carries the stock reason and the time it was taken down.',
    },
    {
      id: 'intelligence',
      title: 'Per-brand contribution and dispatch reporting',
      line:
        'Contribution by brand, dispatch time by brand and item, cancellation rate, packaging cost per order and station utilisation come from the operational records.',
      why:
        'These are the numbers a cloud kitchen operator actually needs and the ones no platform dashboard provides.',
      example:
        'Contribution per brand after attributed stock, labour and packaging, rather than after a percentage allocation.',
    },
    {
      id: 'ai',
      title: 'Ask the kitchen a question',
      line:
        'Verity AI answers from your own order, production, stock and platform records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking cross brand, item, station and time at once, which is exactly what separate platform dashboards cannot do.',
      example:
        '"Which items drive dispatch time above target?" returns three, with a prep review assigned to the station lead.',
    },
    {
      id: 'locations',
      title: 'Kitchens, stations and zones',
      line:
        'Locations roll into the business, with stock, production and reporting following the same structure.',
      why:
        'Operators run several kitchens with different brand mixes, and comparison requires identical recording.',
      example:
        'Dispatch time and contribution by kitchen and by brand within it.',
    },
    {
      id: 'communication',
      title: 'What happened on the order',
      line:
        'Notes, notifications and activity attach to the order, item or brand they concern.',
      why:
        'There is no dining room, so the only record of what went wrong is what the kitchen writes down.',
      example:
        'A delay caused by a late ingredient delivery recorded on the orders it affected.',
    },
    {
      id: 'control',
      title: 'Who can change availability and refund',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Taking items down and issuing refunds both have direct revenue and rating consequences.',
      example:
        'Every availability change and refund carries the person, the reason and the time.',
    },
  ],

  workflowsHeading: 'One kitchen, several brands, recorded separately.',
  workflowsLede:
    'These already happen. Recorded per order and per station, they produce the attribution the business is missing.',
  workflows: [
    {
      name: 'Order to dispatch',
      steps: [
        'Order received against a brand and platform',
        'Items routed to stations with timestamps',
        'Preparation completed and recorded',
        'Packaging consumed and recorded against the order',
        'Order dispatched with the handoff time captured',
        'Total dispatch time recorded against brand and items',
      ],
      note:
        'Dispatch time is the product. Recording its steps is what makes it improvable.',
    },
    {
      name: 'Availability management',
      steps: [
        'Stock level falls below what listed items require',
        'Affected items across all brands identified from recipes',
        'Items taken down with the reason recorded',
        'Replenishment or prep task raised',
        'Items restored and the downtime recorded',
      ],
      note:
        'An item live on a platform that the kitchen cannot make is the most expensive failure available.',
    },
    {
      name: 'Brand contribution',
      steps: [
        'Orders recorded per brand with items and packaging',
        'Ingredient consumption attributed via recipes',
        'Labour attributed by station and period',
        'Platform commission applied from the settlement terms',
        'Contribution per brand assembled from the above',
      ],
      note:
        'This replaces a percentage allocation with a measurement, which frequently changes which brand looks worth keeping.',
    },
    {
      name: 'Peak capacity planning',
      steps: [
        'Order volume by fifteen-minute interval pulled by history',
        'Station demand by brand modelled against that volume',
        'Staffing and station assignment set against the peak',
        'Conflicts between brands flagged before service',
        'Actual dispatch times compared against the plan',
      ],
      note:
        'Two brands needing one station at the same time is a planning problem, not a staffing failure.',
    },
    {
      name: 'Platform settlement reconciliation',
      steps: [
        'Orders recorded as they occur with gross value',
        'Platform settlement received for the period',
        'Commission, adjustments and refunds matched to orders',
        'Discrepancies raised as exceptions',
        'Net position recorded against the platform account',
      ],
      note:
        'Reconciling against the kitchen’s own records is the only way to catch adjustments you did not agree to.',
    },
    {
      name: 'Packaging cost review',
      steps: [
        'Packaging received with cost recorded per unit',
        'Consumption recorded per order',
        'Cost per order calculated and tracked over time',
        'Menu pricing review raised where it moves materially',
      ],
      note:
        'Packaging is a per-order cost, not an overhead, and treating it as one hides real erosion.',
    },
  ],

  ai: {
    heading: 'Ask which brand is actually working.',
    lede:
      'Verity AI reads the same order, production, stock and platform records the kitchen creates as it runs. It answers from your own operation, only shows what the person asking can see, and can turn the answer into work assigned to a station lead.',
    panelMeta: 'Grounded in your kitchen records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is contribution per brand after attributed stock, labour and packaging?',
      'Which items drive dispatch time above target, and at which station?',
      'Which items are listed but currently unavailable?',
      'Where do two brands compete for the same station at peak?',
      'How has packaging cost per order moved this quarter?',
      'Which brands have the highest cancellation rate, and why?',
      'How does this kitchen compare with the others on dispatch time?',
      'Does the platform settlement match our own order records?',
      'Summarise today’s dispatch and availability performance.',
    ],
  },

  automationHeading: 'The failures that cost a rating.',
  automationLede:
    'Each runs from the order and stock records at the point the condition is met.',
  automations: [
    {
      trigger: 'Stock falls below what a listed item requires',
      steps: [
        'Affected items across all brands identified from recipes',
        'Availability change task raised immediately',
        'Replenishment or prep task assigned',
        'Downtime recorded once the item is restored',
      ],
    },
    {
      trigger: 'Dispatch time exceeds target on an item',
      steps: [
        'Item flagged with its station and recent timings',
        'Prep or process review assigned to the station lead',
        'Outcome recorded against the item',
      ],
    },
    {
      trigger: 'Order volume is forecast above staffed capacity',
      steps: [
        'Peak interval flagged with expected volume by brand',
        'Staffing and station assignment task raised',
        'Actual against forecast recorded after service',
      ],
    },
    {
      trigger: 'A platform settlement is received',
      steps: [
        'Settlement matched against recorded orders for the period',
        'Discrepancies raised as exceptions with the order references',
        'Net position recorded against the platform account',
      ],
    },
    {
      trigger: 'Packaging cost per order moves beyond tolerance',
      steps: [
        'Movement recorded against the packaging item',
        'Effect per order calculated',
        'Menu pricing review raised',
      ],
    },
    {
      trigger: 'A refund or comp exceeds the threshold',
      steps: [
        'Transaction held at the approval step',
        'Routed with the order and reason attached',
        'Decision recorded against the brand',
      ],
    },
  ],

  intelligenceHeading: 'What the operator can actually see.',
  intelligenceLede:
    'Attribution across brands from records created per order.',
  intelligence: [
    {
      area: 'Contribution',
      points: [
        'Contribution per brand after attributed cost',
        'Ingredient cost per order by brand',
        'Packaging cost per order and its movement',
        'Commission and adjustments by platform',
      ],
    },
    {
      area: 'Dispatch',
      points: [
        'Median and outlier dispatch times by brand and item',
        'Time by station and by preparation step',
        'Performance by interval across the peak',
        'Comparison across kitchens',
      ],
    },
    {
      area: 'Availability',
      points: [
        'Items unavailable and for how long',
        'Cancellations attributable to availability',
        'Stockouts by ingredient and their downstream items',
        'Downtime by brand',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Orders per interval against staffed capacity',
        'Station utilisation by brand',
        'Conflicts between brands at peak',
        'Labour cost against orders produced',
      ],
    },
    {
      area: 'Platforms',
      points: [
        'Volume and revenue by platform and brand',
        'Settlement against recorded orders',
        'Refunds and adjustments by cause',
        'Cancellation rate by platform',
      ],
    },
  ],
  intelligenceNote:
    'Platform dashboards report each brand’s revenue. This is the cost side, attributed to the brand that caused it.',

  rolesHeading: 'One kitchen, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Operator',
      question: 'Which brands are worth running?',
      focus: 'Contribution per brand after attributed cost, packaging movement, commission, kitchen comparison.',
    },
    {
      role: 'Kitchen manager',
      question: 'What is slowing us down?',
      focus: 'Dispatch times by item and station, availability, peak conflicts, staffing against volume.',
    },
    {
      role: 'Station lead',
      question: 'What is on my station and what is short?',
      focus: 'Orders queued by station, prep outstanding, stock supporting listed items, wastage to record.',
    },
    {
      role: 'Accounts',
      question: 'Does the settlement match what we made?',
      focus: 'Platform settlements against recorded orders, refunds and adjustments, supplier payables.',
    },
  ],

  useCasesHeading: 'What cloud kitchens use Verity for',
  useCases: [
    {
      name: 'Per-brand contribution',
      body: 'Stock, labour and packaging attributed to the orders that consumed them, replacing a percentage allocation with a measurement.',
    },
    {
      name: 'Dispatch time attribution',
      body: 'Preparation and dispatch recorded per order with brand, item and station, so the cause of a slow median is identifiable.',
    },
    {
      name: 'Item availability control',
      body: 'Stock connected through recipes to listed items, so an item the kitchen cannot make comes down before it produces cancellations.',
    },
    {
      name: 'Peak capacity planning',
      body: 'Order volume by interval against station demand by brand, so conflicts are planned around rather than discovered during service.',
    },
    {
      name: 'Packaging as a per-order cost',
      body: 'Packaging consumed and costed per order rather than absorbed into overhead, where its movement is invisible.',
    },
    {
      name: 'Platform settlement reconciliation',
      body: 'Settlements matched against the kitchen’s own order records, so commission and adjustments are checkable.',
    },
    {
      name: 'Multi-kitchen comparison',
      body: 'Kitchens as locations recording identically, so dispatch time and contribution are comparable across sites.',
    },
    {
      name: 'Asking the kitchen questions',
      body: 'Plain-language questions across brand, item, station and time at once, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your aggregator arrangements and billing continue as they are and are mapped during implementation. Menus, recipes, suppliers and packaging costs are brought across, and Verity is introduced as the operational and cost-attribution layer over them.',

  faqHeading: 'Questions cloud kitchen operators ask',
  faqs: [
    [
      'What can AI software do for a cloud kitchen?',
      'Verity AI answers questions from your own order, production, stock and platform records: contribution per brand after attributed cost, which items drive dispatch time above target and at which station, which listed items are currently unavailable, where two brands compete for one station at peak. Each answer can become work assigned to a station lead.',
    ],
    [
      'Can Verity show which brand is actually profitable?',
      'It attributes shared cost rather than allocating it. Ingredient consumption is attributed through recipes to the orders that used it, packaging is costed per order, and labour is attributed by station and period, so contribution per brand is built from measurement rather than from a chosen percentage.',
    ],
    [
      'Does it replace the aggregator platforms?',
      'No. The platforms remain where the orders come from and are mapped during implementation. Verity is the kitchen-side operational layer — production, stock, dispatch times, availability, cost attribution and reconciliation against platform settlements.',
    ],
    [
      'Can it help with dispatch times?',
      'Preparation and dispatch are recorded per order with the brand, items and station, so a slow median resolves to specific items at specific stations rather than remaining a kitchen-wide average.',
    ],
    [
      'Does it manage item availability?',
      'Stock is connected through recipes to the items each brand lists, so when an ingredient falls short every affected item across every brand is identified and an availability change is raised before cancellations start.',
    ],
    [
      'Can we reconcile platform settlements?',
      'Orders are recorded as they occur with gross value, so a settlement can be matched against the kitchen’s own records and commission, refunds and adjustments become checkable rather than accepted.',
    ],
    [
      'Does it handle several kitchens?',
      'Kitchens and stations are locations rolling into the business, so dispatch time, contribution and availability are directly comparable across sites with different brand mixes.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the kitchen runs its brands, configuration, migration of menus, recipes and suppliers, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with contribution per brand.',
  ctaLede:
    'Most operators are carrying at least one brand and cannot prove which. Tell us how costs are split today and we will show you what measuring them looks like.',

  related: ['restaurants', 'fast-food-businesses', 'cafes', 'bakeries', 'catering-businesses', 'ecommerce-businesses'],
};
