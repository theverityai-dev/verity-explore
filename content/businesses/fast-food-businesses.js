export default {
  slug: 'fast-food-businesses',
  status: 'published',
  plural: 'fast food businesses',
  subject: 'fast food business',

  seo: {
    title: 'AI business management software for fast food businesses | Verity',
    description:
      'Verity connects service speed, portion control, multi-outlet consistency, peak staffing and promotion performance into one operational system.',
    keywords: [
      'AI software for fast food businesses',
      'quick service restaurant management software',
      'multi outlet QSR operations software',
      'portion control and service speed tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for fast food',
    headline: 'Twelve outlets doing the same thing differently is twelve businesses.',
    lede:
      'Fast food is a standardisation business: same product, same time, same cost, everywhere. Verity records the operation identically at every outlet so the variance becomes visible instead of averaged.',
    note: 'Runs alongside your existing billing at each outlet.',
    panel: {
      title: 'Network',
      meta: 'All outlets · This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders', value: '18,420', note: 'across 12 outlets' },
        { label: 'Median service time', value: '3m 20s', note: 'range 2m 10s to 6m 40s' },
        { label: 'Portion variance', value: '4 outlets', note: 'above tolerance' },
        { label: 'Peak understaffed', value: '9 shifts', note: 'this week' },
      ],
      rows: [
        { name: 'Outlet 7 service time double the network median', meta: 'Four weeks running · peak hours', active: true },
        { name: 'Portion variance above tolerance at four outlets', meta: 'Same two items · cost impact ₹1.8 L annualised', active: true },
        { name: 'Promotion running with stock short at three outlets', meta: 'Advertised item unavailable', active: true },
        { name: 'Opening checks not completed at two outlets', meta: 'Three days this week', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own network in this shape.',
    },
  },

  overview: {
    heading: 'Fast food is not a food business. It is a consistency business.',
    paragraphs: [
      'The proposition is that the product is the same everywhere, made the same way, in the same time, at the same cost. Everything a fast food operator does is in service of that, and every problem is a departure from it at one outlet that the network average hides.',
      'Service speed is the first. Customers choose fast food for time, so speed is the product. A network median of three minutes twenty is meaningless if it spans two minutes ten at one outlet and six minutes forty at another — and the second outlet is losing customers who will not come back and will not say why.',
      'Portion control is the second, and it is the quietest cost in the category. An outlet running consistently over on portions is giving away margin on every order. At volume, a small variance on two items is a large annual number, and it is invisible unless consumption is compared against what was sold.',
      'The third is that promotions are run centrally and executed locally. A campaign advertising an item that three outlets do not have in stock produces exactly the wrong customer experience at the moment of maximum attention.',
      'The fourth is that outlets are staffed against templates rather than against their own demand curve, which differs by location, day and season.',
      'Verity records service time, consumption, staffing and execution identically at every outlet, so the network can see where it is not the same business.',
    ],
  },

  terminology: [
    ['Menu items, combos, promotions', 'Records'],
    ['Orders, tickets, refunds', 'Orders'],
    ['Ingredients, packaging, consumables', 'Inventory'],
    ['Prep, service, cleaning, opening checks', 'Work'],
    ['Crew, shift managers, area managers', 'People'],
    ['Suppliers, commissary, distributors', 'Suppliers'],
    ['Outlets, regions, franchise groups', 'Locations'],
  ],

  challengesHeading: 'The network average hides the outlet that is failing.',
  challengesLede:
    'Fast food problems are outlet-level departures from a standard, and aggregate reporting is designed to hide exactly that.',
  challenges: [
    {
      problem: 'Service speed varies by outlet and nobody attributes it',
      detail:
        'A network median looks acceptable while one outlet runs at double it, losing customers who never complain.',
      outcome:
        'Service time is recorded per order and per outlet, so variance is visible against the standard rather than averaged into it.',
    },
    {
      problem: 'Portion variance is invisible margin loss',
      detail:
        'Consumption is not compared with what was sold, so an outlet giving away extra on two items loses margin on every order for years.',
      outcome:
        'Stock consumed is reconciled against items sold per outlet, so variance surfaces as a specific cost.',
    },
    {
      problem: 'Promotions run without checking local stock',
      detail:
        'A central campaign advertises an item that some outlets cannot serve, producing the worst possible impression at the busiest moment.',
      outcome:
        'Promotion requirements are checked against outlet stock before launch, so shortfalls are ordered rather than discovered.',
    },
    {
      problem: 'Staffing follows a template rather than the outlet',
      detail:
        'Each outlet has its own demand curve by day and hour, and rostering to a network template guarantees some are short at peak.',
      outcome:
        'Orders by interval are recorded per outlet, so staffing follows each site’s own pattern.',
    },
    {
      problem: 'Standards are checked by visit',
      detail:
        'Opening checks, cleaning and food safety routines are verified when an area manager happens to be there.',
      outcome:
        'Routine checks are work with owners, due times and states, so completion is visible without a visit.',
    },
    {
      problem: 'Franchisees report in their own formats',
      detail:
        'Each operator sends numbers in a different shape, so the network view is assembled monthly by hand and is never quite comparable.',
      outcome:
        'Outlets record the same things the same way, so network comparison is the same records rather than a reconciliation.',
    },
  ],

  modulesLede:
    'One system across outlets, so the network is comparable rather than averaged.',
  modules: [
    {
      id: 'orders',
      title: 'Orders, tickets and service time',
      line:
        'Every order records its items, its outlet, its interval, the crew and the time from order to handover.',
      why:
        'Speed is the product. It has to be measured per order and per outlet or it cannot be managed.',
      example:
        'A median of three minutes twenty spanning two minutes ten to six minutes forty across outlets, with the outliers named.',
    },
    {
      id: 'inventory',
      title: 'Ingredients, packaging and consumables',
      line:
        'Stock is held with supplier and cost per outlet, and consumption is reconciled against items sold.',
      why:
        'Portion variance is the category’s quietest cost, and it only appears when consumption and sales are compared.',
      example:
        'Four outlets over tolerance on the same two items, quantified as an annualised cost.',
    },
    {
      id: 'work',
      title: 'Prep, opening checks and cleaning routines',
      line:
        'Standard routines are work with an owner, a due time and a state at each outlet.',
      why:
        'Consistency is a set of tasks that either happened or did not, and verification by visit only samples a fraction of them.',
      example:
        'Opening checks not completed at two outlets on three days, visible centrally rather than at the next audit.',
    },
    {
      id: 'records',
      title: 'Menu items, combos and promotions',
      line:
        'Items and promotions are records with components, standard portions, pricing and the period they run.',
      why:
        'The standard portion is the reference point that makes variance measurable, and it must live in the system rather than in a manual.',
      example:
        'A promotion’s components checked against every outlet’s stock before it goes live.',
    },
    {
      id: 'people',
      title: 'Crew, shift managers and area managers',
      line:
        'Staff are modelled once, and every order, check, refund and stock adjustment carries who handled it.',
      why:
        'Throughput and standards compliance both vary by shift and by manager, and neither is visible without attribution.',
      example:
        'Service time by shift manager across the same outlet and interval.',
    },
    {
      id: 'workforce',
      title: 'Rosters against each outlet’s demand curve',
      line:
        'Assignment, attendance and availability stay connected to the intervals and outlets they covered.',
      why:
        'Every outlet peaks differently, and rostering to a network template is the most common cause of slow service.',
      example:
        'Nine shifts understaffed this week against each outlet’s own historical volume by interval.',
    },
    {
      id: 'locations',
      title: 'Outlets, regions and franchise groups',
      line:
        'Locations roll into regions and into the network, with stock, staffing, standards and reporting following the same structure.',
      why:
        'A fast food business is a network, and the only useful unit of analysis is the outlet against the standard.',
      example:
        'Service time, portion variance and check completion by outlet, directly comparable.',
    },
    {
      id: 'suppliers',
      title: 'Commissary, suppliers and distributors',
      line:
        'Suppliers are relationships with their orders, delivery reliability by outlet, cost movement and balances.',
      why:
        'Supply failures show up as local stockouts during a national promotion, which is the most expensive way to find out.',
      example:
        'Delivery reliability by outlet, so a chronically under-served site is identified rather than blamed.',
    },
    {
      id: 'workflows',
      title: 'Refunds, waste and standards escalation',
      line:
        'Refunds, comps, wastage and failed standard checks move through defined steps with recorded reasons and escalation.',
      why:
        'At volume, discretionary decisions and failed checks need thresholds rather than judgement at each site.',
      example:
        'A failed food safety check escalates to the area manager automatically rather than waiting for a report.',
    },
    {
      id: 'intelligence',
      title: 'Network reporting from identical records',
      line:
        'Service time, portion variance, check completion, promotion performance, staffing against volume and outlet comparison come from the operational records.',
      why:
        'A network only learns anything if every outlet records the same things the same way.',
      example:
        'Outlet ranked against the standard on every operational measure, current rather than compiled monthly.',
    },
    {
      id: 'ai',
      title: 'Ask the network a question',
      line:
        'Verity AI answers from your own order, stock, staffing and standards records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions that matter are comparisons across outlets, which are laborious to assemble and easy to ask.',
      example:
        '"Which outlets run above target service time at peak?" returns three, with reviews assigned to area managers.',
    },
    {
      id: 'communication',
      title: 'Escalation that reaches the area manager',
      line:
        'Notes, notifications and activity attach to the outlet, order or check they concern.',
      why:
        'Outlet-level problems are communicated by phone and are invisible above the shift manager.',
      example:
        'An equipment failure recorded against the outlet, visible alongside the service times it caused.',
    },
    {
      id: 'control',
      title: 'Who can refund, adjust and override',
      line:
        'One permission model and one audit trail across every outlet.',
      why:
        'A distributed crew workforce with till and stock access needs thresholds and attribution rather than trust.',
      example:
        'Refunds and stock adjustments by crew member and outlet, against thresholds.',
    },
  ],

  workflowsHeading: 'The same operation, everywhere, recorded the same way.',
  workflowsLede:
    'These already run at every outlet. Recorded identically, they make the network comparable.',
  workflows: [
    {
      name: 'Order to handover',
      steps: [
        'Order recorded with items, outlet and interval',
        'Preparation steps completed and timed',
        'Order handed over and the total service time recorded',
        'Outliers flagged against the outlet’s target',
        'Service time aggregated by outlet, interval and shift',
      ],
      note:
        'Speed is only manageable if it is recorded per order rather than sampled.',
    },
    {
      name: 'Portion variance check',
      steps: [
        'Items sold pulled for the period per outlet',
        'Expected consumption calculated from standard portions',
        'Actual stock consumption reconciled against expected',
        'Variance above tolerance raised as an exception',
        'Coaching or process action assigned to the shift manager',
      ],
      note:
        'This single reconciliation is usually the largest recoverable cost in a fast food network.',
    },
    {
      name: 'Promotion launch',
      steps: [
        'Promotion defined with its component requirements and period',
        'Stock checked against requirements at every outlet',
        'Shortfalls ordered before launch',
        'Performance tracked by outlet through the period',
        'Result recorded against the promotion for future planning',
      ],
      note:
        'Advertising an item an outlet cannot serve is the most avoidable failure in the category.',
    },
    {
      name: 'Peak staffing',
      steps: [
        'Order volume by interval pulled per outlet from history',
        'Roster built against that outlet’s own curve',
        'Attendance confirmed at shift start',
        'Gaps flagged before the peak',
        'Service time compared against staffing after the shift',
      ],
      note:
        'Every outlet peaks differently, which is why a network template guarantees failures.',
    },
    {
      name: 'Daily standards',
      steps: [
        'Opening, food safety and cleaning checks issued as work',
        'Completion recorded with the person and time',
        'Failures raised as exceptions with photographs where relevant',
        'Escalation to the area manager on repeat failure',
        'Completion rates reported by outlet',
      ],
      note:
        'Verification stops depending on an area manager being physically present.',
    },
    {
      name: 'Outlet performance review',
      steps: [
        'Service time, portion variance and check completion pulled by outlet',
        'Outlets ranked against the standard rather than against each other',
        'Causes reviewed with the local records attached',
        'Actions assigned with owners and dates',
        'Follow-up tracked to completion',
      ],
      note:
        'Ranking against a standard rather than an average is what makes the review actionable.',
    },
  ],

  ai: {
    heading: 'Ask which outlet is not the same business.',
    lede:
      'Verity AI reads the same order, stock, staffing and standards records every outlet creates. It answers across the network, only shows what the person asking can see, and can turn the answer into actions assigned to area managers.',
    panelMeta: 'Grounded in your network records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which outlets run above target service time at peak?',
      'Where is portion variance above tolerance, and on which items?',
      'Which outlets are short of stock for the current promotion?',
      'Which outlets were understaffed against their own demand curve this week?',
      'Where are opening or food safety checks being missed?',
      'How did the last promotion perform by outlet?',
      'Which suppliers deliver least reliably to which outlets?',
      'What is refund and waste rate by outlet and crew?',
      'Summarise network performance against standard this week.',
    ],
  },

  automationHeading: 'The variances that repeat until someone notices.',
  automationLede:
    'Each runs from outlet records at the point the condition is met.',
  automations: [
    {
      trigger: 'Service time exceeds target for an interval',
      steps: [
        'Outlet and interval flagged with the orders affected',
        'Review assigned to the shift manager',
        'Escalated to the area manager on repeat',
      ],
    },
    {
      trigger: 'Portion variance exceeds tolerance',
      steps: [
        'Variance calculated per item with its cost impact',
        'Exception raised against the outlet',
        'Coaching or process action assigned',
      ],
    },
    {
      trigger: 'A promotion is scheduled',
      steps: [
        'Component requirements checked against every outlet’s stock',
        'Shortfalls raised as orders before launch',
        'Readiness confirmed per outlet',
      ],
    },
    {
      trigger: 'A standard check is missed or failed',
      steps: [
        'Exception raised with the check, outlet and time',
        'Action assigned to the shift manager',
        'Escalated to the area manager on repeat failure',
      ],
    },
    {
      trigger: 'Forecast volume exceeds staffed capacity',
      steps: [
        'Interval flagged with the outlet’s own historical volume',
        'Cover task assigned to the roster owner',
        'Outcome recorded against the shift',
      ],
    },
    {
      trigger: 'Refunds or waste exceed threshold at an outlet',
      steps: [
        'Pattern flagged with crew attribution',
        'Review assigned to the shift manager',
        'Decision recorded against the outlet',
      ],
    },
  ],

  intelligenceHeading: 'What the network can actually see.',
  intelligenceLede:
    'Outlet-level performance against a standard, from identical records.',
  intelligence: [
    {
      area: 'Speed',
      points: [
        'Service time by outlet, interval and shift',
        'Variance against the network standard',
        'Outliers by item and preparation step',
        'Trend by outlet over time',
      ],
    },
    {
      area: 'Cost control',
      points: [
        'Portion variance by outlet and item',
        'Waste by outlet, item and reason',
        'Refunds and comps against thresholds',
        'Cost per order by outlet',
      ],
    },
    {
      area: 'Standards',
      points: [
        'Check completion by outlet and type',
        'Failures and time to resolution',
        'Repeat failures by outlet',
        'Escalations raised and closed',
      ],
    },
    {
      area: 'Staffing',
      points: [
        'Orders per interval against staffed hours by outlet',
        'Attendance and no-shows',
        'Service time against staffing level',
        'Labour cost against revenue by outlet',
      ],
    },
    {
      area: 'Promotions',
      points: [
        'Uplift by outlet during the period',
        'Stock readiness at launch',
        'Item mix shift during the promotion',
        'Performance against previous campaigns',
      ],
    },
    {
      area: 'Supply',
      points: [
        'Delivery reliability by supplier and outlet',
        'Stockouts by item and outlet',
        'Cost movement across the network',
        'Outstanding payable',
      ],
    },
  ],
  intelligenceNote:
    'The value here is comparability. Every outlet records the same things the same way, so a difference is a fact rather than a formatting artefact.',

  rolesHeading: 'A network, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Network owner',
      question: 'Which outlets are not the same business?',
      focus: 'Service time and portion variance by outlet, standards completion, promotion performance, cost per order.',
    },
    {
      role: 'Area manager',
      question: 'What needs attention across my outlets?',
      focus: 'Exceptions and repeat failures, understaffed shifts, stock readiness, actions outstanding.',
    },
    {
      role: 'Shift manager',
      question: 'Is this shift set up to run?',
      focus: 'Staffing against the interval curve, opening checks, stock for the promotion, service time so far.',
    },
    {
      role: 'Supply and purchasing',
      question: 'Is every outlet stocked for what we are advertising?',
      focus: 'Promotion requirements against outlet stock, delivery reliability, cost movement, payables.',
    },
  ],

  useCasesHeading: 'What fast food operators use Verity for',
  useCases: [
    {
      name: 'Service speed by outlet',
      body: 'Time from order to handover recorded per order, so the outlet running at double the median is named rather than averaged away.',
    },
    {
      name: 'Portion variance control',
      body: 'Consumption reconciled against items sold per outlet, turning the category’s quietest margin loss into a specific cost.',
    },
    {
      name: 'Promotion readiness',
      body: 'Campaign component requirements checked against every outlet’s stock before launch, so nothing is advertised that cannot be served.',
    },
    {
      name: 'Outlet-specific rostering',
      body: 'Orders by interval recorded per outlet, so staffing follows each site’s own demand curve rather than a network template.',
    },
    {
      name: 'Standards without a visit',
      body: 'Opening, safety and cleaning checks as work with owners and states, so completion and failure are visible centrally.',
    },
    {
      name: 'Network comparability',
      body: 'Every outlet recording the same things the same way, so comparison is the records themselves rather than a monthly reconciliation.',
    },
    {
      name: 'Supply reliability by outlet',
      body: 'Delivery performance measured per outlet, identifying chronically under-served sites rather than blaming them.',
    },
    {
      name: 'Asking the network questions',
      body: 'Plain-language comparisons across outlets, intervals and items, with actions assigned to area managers in the same step.',
    },
  ],

  migration:
    'Billing at each outlet continues and is mapped during implementation. Menus, standard portions, suppliers and outlet structure are brought across, and Verity is introduced as the operational layer that records every outlet identically.',

  faqHeading: 'Questions fast food operators ask',
  faqs: [
    [
      'What can AI software do for a fast food business?',
      'Verity AI answers questions from your own order, stock, staffing and standards records: which outlets run above target service time at peak, where portion variance is above tolerance and on which items, which outlets are short of stock for the current promotion, where checks are being missed. Each answer can become an action assigned to an area manager.',
    ],
    [
      'Can Verity measure service speed?',
      'Time from order to handover is recorded per order with the outlet, interval and crew, so speed is managed at the outlet level against a standard rather than reported as a network median that hides the outliers.',
    ],
    [
      'How does it help with portion control?',
      'Stock consumption is reconciled against items sold using the standard portions held on each item, so an outlet running consistently over is identified with the cost quantified rather than absorbed into general food cost.',
    ],
    [
      'Does it help with promotions?',
      'A promotion’s component requirements are checked against every outlet’s stock before launch, so shortfalls are ordered rather than discovered by customers during the campaign.',
    ],
    [
      'Can it work across franchised outlets?',
      'Outlets roll into regions and into the network with the same structure and permissions, so franchise groups can see their own sites while the network sees comparable records rather than differently formatted submissions.',
    ],
    [
      'Does it replace the billing system at each outlet?',
      'No. Billing continues and is mapped during implementation. Verity is the operational layer over it — service times, stock and portion reconciliation, staffing, standards and network reporting.',
    ],
    [
      'How does it help with staffing?',
      'Order volume by interval is recorded per outlet, so each site is rostered against its own demand curve rather than a network template, and shifts that will be short are flagged before the peak.',
    ],
    [
      'Can standards be checked without visiting?',
      'Opening, food safety and cleaning routines are work with owners, due times and states, so completion and failure are visible centrally and repeat failures escalate automatically.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the network operates, configuration, migration of menus, portions, suppliers and outlet structure, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the outlet that is slowest.',
  ctaLede:
    'In most networks it has been slowest for months and nobody can say why. Tell us how outlets report today and we will show you what comparability looks like.',

  related: ['restaurants', 'cafes', 'cloud-kitchens', 'catering-businesses', 'retail-stores', 'hotels'],
};
