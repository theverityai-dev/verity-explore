export default {
  slug: 'bakeries',
  status: 'published',
  plural: 'bakeries',
  subject: 'bakery',

  seo: {
    title: 'AI business management software for bakeries | Verity',
    description:
      'Verity connects overnight production planning, same-day shelf life, wholesale accounts, custom cake orders and ingredient costing into one system.',
    keywords: [
      'AI software for bakeries',
      'bakery management software',
      'bakery production planning software',
      'wholesale bakery order and delivery tracking',
      'custom cake order management',
    ],
  },

  hero: {
    eyebrow: 'Verity for bakeries',
    headline: 'You decide tonight what tomorrow will sell, and you find out at seven in the evening whether you were right.',
    lede:
      'A bakery commits its production before it has any demand signal, and everything unsold expires the same day. Verity turns that guess into a calculation from what the same day actually sold.',
    note: 'Runs alongside your existing billing and accounting.',
    panel: {
      title: 'Production',
      meta: 'Tomorrow’s plan · Tonight',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Planned units', value: '1,840', note: 'across 42 lines' },
        { label: 'Wholesale committed', value: '1,120', note: '9 accounts' },
        { label: 'Yesterday unsold', value: '11.4%', note: 'against 6% target' },
        { label: 'Custom orders due', value: '14', note: '3 for tomorrow' },
      ],
      rows: [
        { name: 'Three lines over-produced four days running', meta: 'Averaging 26% unsold', active: true },
        { name: 'Wholesale account order not confirmed for tomorrow', meta: '340 units · usual cut-off passed', active: true },
        { name: 'Custom cake for Saturday without design confirmed', meta: 'Advance taken 6 days ago', active: true },
        { name: 'Butter cost up 14% since the last price review', meta: 'Affects most of the viennoiserie range', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own production in this shape.',
    },
  },

  overview: {
    heading: 'A bakery is a manufacturer that has to guess demand before it makes anything.',
    paragraphs: [
      'Almost every food business buys stock and sells it. A bakery converts raw ingredients into finished goods overnight, on a production decision taken before there is any information about the day ahead, and everything unsold at close is a total loss rather than tomorrow’s stock. The production plan is the business.',
      'That plan is usually made from habit and from the head baker’s sense of the season. It can be made from evidence instead — what this weekday sold across the last several weeks, what the weather did, what the wholesale accounts have committed to — but only if yesterday’s sales and yesterday’s unsold quantities were both recorded, and in most bakeries only the first is.',
      'The second complication is that a bakery usually runs two businesses at once. The counter sells to walk-ins in unpredictable quantities. Wholesale accounts — cafés, hotels, offices, retailers — commit to standing orders with cut-off times, delivery windows and credit terms. Those two demand streams compete for the same oven capacity and the same overnight shift, and they are usually planned separately.',
      'The third is custom orders. Cakes for occasions carry advances, designs, dates that cannot move, and a production requirement that has to fit around everything else. A design not confirmed in time is a problem that becomes visible on the morning it needed to be baked.',
      'Verity holds the production plan, the sales history that should inform it, the wholesale commitments, the custom orders and the ingredient costs as one set of records.',
    ],
  },

  terminology: [
    ['Ingredients, doughs, finished lines', 'Inventory'],
    ['Production runs, batches, bakes', 'Work'],
    ['Counter sales, wholesale orders, custom orders', 'Orders'],
    ['Wholesale accounts, regulars, occasion customers', 'Relationships'],
    ['Bakers, counter staff, delivery riders', 'People'],
    ['Cut-offs, advances, approvals', 'Workflows'],
    ['Bakery, counter, delivery routes', 'Locations'],
  ],

  challengesHeading: 'Everything is decided before the day begins.',
  challengesLede:
    'A bakery’s problems all come from committing production ahead of demand, with no record of how the last commitment went.',
  challenges: [
    {
      problem: 'The production plan is habit, not history',
      detail:
        'The same quantities are made each weekday regardless of what the equivalent day actually sold, and the difference is thrown away every evening.',
      outcome:
        'Sales and unsold quantities are both recorded by line and day, so tomorrow’s plan is calculated from the last several equivalent days.',
    },
    {
      problem: 'Unsold stock is not measured by line',
      detail:
        'The bakery knows roughly how much went in the bin. It does not know that three specific lines account for most of it, four days running.',
      outcome:
        'Unsold quantity is recorded per line at close, so persistent over-production is visible as a specific list.',
    },
    {
      problem: 'Wholesale and counter demand are planned separately',
      detail:
        'Standing orders and walk-in demand compete for the same oven time and the same shift, and are usually reconciled in the baker’s head at midnight.',
      outcome:
        'Wholesale commitments and forecast counter demand feed one production plan against capacity.',
    },
    {
      problem: 'Wholesale cut-offs are missed',
      detail:
        'An account has not confirmed its order and the cut-off has passed, which is discovered when the delivery is short or the production was wasted.',
      outcome:
        'Cut-offs are dates on the account, so an unconfirmed order surfaces before the plan is committed.',
    },
    {
      problem: 'Custom orders stall on unconfirmed details',
      detail:
        'An advance is taken for an occasion cake and the design, flavour or inscription is never confirmed, which becomes urgent on the morning of the bake.',
      outcome:
        'A custom order carries its advance, specification, required date and state, so an unconfirmed detail ages visibly.',
    },
    {
      problem: 'Ingredient costs move faster than prices',
      detail:
        'Butter, flour and cream move several times a year against a price list that changes annually, on a margin that cannot absorb it.',
      outcome:
        'Cost sits on the ingredient and lines carry their components, so a rise is mapped to the products it affects.',
    },
  ],

  modulesLede:
    'One system across production, sales, wholesale and custom orders.',
  modules: [
    {
      id: 'work',
      title: 'Production runs and batches',
      line:
        'Production is work with a planned quantity per line, an owner, a shift, the ingredients it consumes and the finished goods it produces.',
      why:
        'The production plan is the bakery’s central decision, and it is currently made without a record of how the last one performed.',
      example:
        'Tomorrow’s eighteen hundred and forty units across forty-two lines, planned against what the last four equivalent weekdays sold.',
    },
    {
      id: 'inventory',
      title: 'Ingredients, doughs and finished lines',
      line:
        'Stock is held with supplier, cost, batch and shelf life, consumed by production runs and depleted by sales or written off at close.',
      why:
        'A bakery holds two very different stocks — ingredients that keep and finished goods that do not — and conflating them hides where the loss is.',
      example:
        'Eleven point four percent of finished production unsold, by line, alongside the ingredient cost it consumed.',
    },
    {
      id: 'orders',
      title: 'Counter, wholesale and custom orders',
      line:
        'Counter transactions, standing wholesale orders and one-off custom orders are all records with quantities, dates and states.',
      why:
        'These three demand streams compete for the same capacity and are usually tracked in three different places.',
      example:
        'Eleven hundred and twenty units committed to wholesale before a single counter sale is forecast.',
    },
    {
      id: 'relationships',
      title: 'Wholesale accounts and occasion customers',
      line:
        'Accounts are records with their standing orders, cut-offs, delivery windows, credit terms, order history and balances.',
      why:
        'Wholesale revenue is predictable and contractual, which makes it the most plannable part of a bakery and the most damaging to under-serve.',
      example:
        'An account whose order has not been confirmed past its cut-off, surfaced before the plan is committed.',
    },
    {
      id: 'suppliers',
      title: 'Ingredient suppliers',
      line:
        'Suppliers are relationships with their orders, delivery days, price movement, reliability and balances.',
      why:
        'Bakery margins are decided by a small number of ingredients whose prices move frequently.',
      example:
        'Butter up fourteen percent since the last price review, mapped to the range it affects.',
    },
    {
      id: 'people',
      title: 'Bakers, counter staff and riders',
      line:
        'Staff are modelled once, and every production run, delivery, sale and wastage record carries who handled it.',
      why:
        'A bakery runs an overnight shift and a day shift that rarely overlap, which makes recorded handover essential rather than optional.',
      example:
        'Production completed against plan by shift, visible to the counter staff who open.',
    },
    {
      id: 'records',
      title: 'Recipes, specifications and designs',
      line:
        'Recipes with their components, custom order specifications and design references attach to the line or order they belong to.',
      why:
        'Costing and custom fulfilment both depend on specifications that are usually held informally by whoever has been there longest.',
      example:
        'A repeat custom order made against the specification used the last time rather than re-discussed.',
    },
    {
      id: 'workflows',
      title: 'Cut-offs, advances and approvals',
      line:
        'Wholesale cut-offs, custom order advances, price changes and write-offs move through defined steps with recorded decisions.',
      why:
        'The commitments in a bakery are time-bound, and a missed cut-off wastes either production or a customer.',
      example:
        'An advance taken with no design confirmed ages as an exception rather than surfacing on the day of the bake.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from production and sales',
      line:
        'Sell-through by line and day, unsold percentage, wholesale performance, custom order throughput and ingredient cost movement come from the records.',
      why:
        'The single number a bakery most needs — unsold by line against what was made — does not exist unless both sides are recorded.',
      example:
        'Three lines averaging twenty-six percent unsold over four days, which no daily takings figure would show.',
    },
    {
      id: 'ai',
      title: 'Ask the bakery a question',
      line:
        'Verity AI answers from your own production, sales, account and supplier records, respects permissions, and can create assigned follow-ups.',
      why:
        'The plan is set late at night by someone tired, and the questions that improve it need answering then.',
      example:
        '"Which lines have been over-produced this week?" returns three, with the plan adjustment task raised.',
    },
    {
      id: 'locations',
      title: 'Bakery, counter and delivery routes',
      line:
        'Locations roll into the business, with stock, production and reporting following the same structure.',
      why:
        'A bakery supplying its own outlets and wholesale accounts is running a small distribution operation.',
      example:
        'Production allocated between counter and delivery routes, with each reconciled separately.',
    },
    {
      id: 'communication',
      title: 'Handover between shifts',
      line:
        'Notes, notifications and activity attach to the production run, order or account they concern.',
      why:
        'The overnight shift and the counter staff barely meet, so anything not on a record does not transfer.',
      example:
        'A note that a batch underproved sits on the run, visible to whoever sells it.',
    },
    {
      id: 'control',
      title: 'Who can change prices and write off',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Write-offs are daily and large in a bakery, which makes attribution and thresholds worth having.',
      example:
        'Every write-off carries the line, the quantity, the reason and the person.',
    },
  ],

  workflowsHeading: 'The night decides the day.',
  workflowsLede:
    'These already happen. Recorded, the plan stops being a guess repeated.',
  workflows: [
    {
      name: 'Production planning',
      steps: [
        'Sales for the same weekday pulled across recent weeks',
        'Unsold quantities for those days pulled by line',
        'Wholesale commitments confirmed against cut-offs',
        'Custom orders for the date added to the requirement',
        'Plan set per line against oven and shift capacity',
        'Plan issued to the overnight shift as work',
      ],
      note:
        'The plan is the bakery’s main decision, and this is the loop that makes it improve rather than repeat.',
    },
    {
      name: 'Overnight production',
      steps: [
        'Production run started against the plan',
        'Ingredients consumed and recorded against the run',
        'Quantities produced recorded per line',
        'Shortfalls or overruns against plan noted with reasons',
        'Finished goods allocated to counter, wholesale and custom',
      ],
      note:
        'Recording produced against planned is what makes tomorrow’s plan trustworthy.',
    },
    {
      name: 'Wholesale order and delivery',
      steps: [
        'Standing order confirmed against the account’s cut-off',
        'Requirement added to the production plan',
        'Goods allocated and dispatched on the delivery route',
        'Delivery confirmed and any shortfall recorded',
        'Invoice raised and the account balance updated',
      ],
      note:
        'A cut-off that passes unconfirmed is either wasted production or a short delivery, and both are avoidable.',
    },
    {
      name: 'Custom order',
      steps: [
        'Order taken with advance, date and specification',
        'Design and flavour confirmation tracked as a stage',
        'Requirement scheduled into the production plan for the date',
        'Production completed and quality checked',
        'Collection or delivery completed and balance collected',
      ],
      note:
        'The date cannot move, so an unconfirmed detail has to surface days ahead rather than on the morning.',
    },
    {
      name: 'Close of day',
      steps: [
        'Counter sales recorded by line',
        'Unsold quantity recorded per line',
        'Write-off or discount decision applied and recorded',
        'Sell-through calculated against production',
        'Result added to the history informing the next plan',
      ],
      note:
        'Unsold by line is the number the whole business turns on, and it exists only if someone records it.',
    },
    {
      name: 'Ingredient cost review',
      steps: [
        'Delivery received with cost recorded against the ingredient',
        'Movement compared against previous purchases',
        'Affected lines identified from their recipes',
        'Margin recalculated per line',
        'Price review raised where margin falls below threshold',
      ],
      note:
        'A butter increase affects most of the range at once, which is why it deserves a specific trigger.',
    },
  ],

  ai: {
    heading: 'Ask what to make tomorrow.',
    lede:
      'Verity AI reads the same production, sales, account and supplier records the bakery creates as it works. It answers from your own bakery, only shows what the person asking can see, and can turn the answer into plan adjustments and follow-ups.',
    panelMeta: 'Grounded in your production records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which lines have been over-produced this week, and by how much?',
      'What did this weekday sell across the last four weeks, by line?',
      'Which wholesale accounts have not confirmed against their cut-off?',
      'Which custom orders for this week have unconfirmed specifications?',
      'Which ingredient costs have moved since the last price review?',
      'What is sell-through by line against what was produced?',
      'Which wholesale accounts are outstanding beyond terms?',
      'Which lines consistently sell out before midday?',
      'Summarise unsold percentage and wholesale performance this week.',
    ],
  },

  automationHeading: 'The commitments that have to be checked before the ovens start.',
  automationLede:
    'Each runs from the production and account records at the point the condition is met.',
  automations: [
    {
      trigger: 'A wholesale cut-off approaches without confirmation',
      steps: [
        'Account flagged with its usual order for reference',
        'Confirmation task assigned before the plan is committed',
        'Requirement added or removed from the plan accordingly',
      ],
    },
    {
      trigger: 'A line exceeds its unsold tolerance',
      steps: [
        'Line flagged with produced against sold over recent days',
        'Plan adjustment task assigned to the head baker',
        'Adjusted quantity recorded for the next equivalent day',
      ],
    },
    {
      trigger: 'A custom order lacks a confirmed specification',
      steps: [
        'Order flagged with its date and advance',
        'Follow-up assigned to whoever took it',
        'Escalated as the required bake date approaches',
      ],
    },
    {
      trigger: 'An ingredient cost rises',
      steps: [
        'Movement recorded against the ingredient',
        'Affected lines identified from their recipes',
        'Price review raised where margin falls below threshold',
      ],
    },
    {
      trigger: 'A line sells out before a defined time',
      steps: [
        'Stockout recorded with the hour',
        'Plan increase considered for the next equivalent day',
        'Pattern surfaced if it repeats',
      ],
    },
    {
      trigger: 'A wholesale balance passes its terms',
      steps: [
        'Balance aged on the account record',
        'Collection follow-up assigned',
        'Escalated with the delivery history attached',
      ],
    },
  ],

  intelligenceHeading: 'What the head baker and the owner can see.',
  intelligenceLede:
    'Production against sales, which is the only comparison that matters here.',
  intelligence: [
    {
      area: 'Production',
      points: [
        'Planned against produced by line and day',
        'Unsold percentage by line',
        'Lines selling out and at what time',
        'Capacity used against available',
      ],
    },
    {
      area: 'Sales',
      points: [
        'Counter sales by line, day and hour',
        'Comparison against the same weekday historically',
        'Wholesale against counter revenue split',
        'Custom order revenue by period',
      ],
    },
    {
      area: 'Wholesale',
      points: [
        'Order confirmation against cut-offs',
        'Delivery completion and shortfalls',
        'Revenue and volume by account',
        'Outstanding balances with ageing',
      ],
    },
    {
      area: 'Custom orders',
      points: [
        'Orders by date and state',
        'Specifications unconfirmed against required date',
        'Advances held against undelivered orders',
        'Throughput and on-time completion',
      ],
    },
    {
      area: 'Cost',
      points: [
        'Ingredient cost movement over time',
        'Margin per line against current costs',
        'Ingredient consumption against production',
        'Write-off value by line and reason',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the plan, the production and the unsold quantity, which is one additional record at close.',

  rolesHeading: 'Two shifts, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Are we making the right quantities?',
      focus: 'Unsold by line, sell-through, wholesale revenue, ingredient cost movement, margin per line.',
    },
    {
      role: 'Head baker',
      question: 'What am I making tonight?',
      focus: 'Plan by line against history, wholesale commitments, custom orders due, capacity and shift.',
    },
    {
      role: 'Counter staff',
      question: 'What do we have and what is promised?',
      focus: 'Finished goods available, custom orders for collection, lines sold out, unsold to record at close.',
    },
    {
      role: 'Accounts',
      question: 'What is owed by which account?',
      focus: 'Wholesale balances and ageing, advances held, supplier payables, write-offs approved.',
    },
  ],

  useCasesHeading: 'What bakeries use Verity for',
  useCases: [
    {
      name: 'Production planning from history',
      body: 'Sales and unsold quantities recorded by line and day, so tomorrow’s plan is calculated from the last several equivalent days rather than repeated from habit.',
    },
    {
      name: 'Unsold measurement by line',
      body: 'Wastage recorded per line at close, so persistent over-production shows as a specific list rather than a general sense that too much goes in the bin.',
    },
    {
      name: 'Wholesale cut-off management',
      body: 'Standing orders, cut-offs and delivery windows on the account, so unconfirmed orders surface before the plan is committed.',
    },
    {
      name: 'Custom order tracking',
      body: 'Advance, specification, required date and state on one record, so an unconfirmed design ages visibly instead of surfacing on the morning of the bake.',
    },
    {
      name: 'Ingredient cost impact',
      body: 'Recipes with components, so a butter or flour rise is mapped to every line it affects and margin is recalculated per line.',
    },
    {
      name: 'Shift handover',
      body: 'Production against plan and any issues recorded on the run, so the counter opens knowing what the overnight shift actually made.',
    },
    {
      name: 'Capacity planning',
      body: 'Wholesale commitments and forecast counter demand feeding one plan against oven and shift capacity.',
    },
    {
      name: 'Asking the plan questions',
      body: 'Plain-language questions across production, sales, accounts and costs, with plan adjustments raised in the same step.',
    },
  ],

  migration:
    'Your billing setup, the wholesale order book and the recipe sheets are mapped during implementation. Accounts, recipes, suppliers and open custom orders are brought across, and Verity is configured around the production routine the bakery already runs.',

  faqHeading: 'Questions bakers ask',
  faqs: [
    [
      'What can AI software do for a bakery?',
      'Verity AI answers questions from your own production, sales, account and supplier records: which lines have been over-produced this week, what this weekday sold across the last four weeks by line, which wholesale accounts have not confirmed against their cut-off, which custom orders lack a confirmed specification. Each answer can become a plan adjustment or a follow-up.',
    ],
    [
      'Can Verity help set the production plan?',
      'Yes, and that is the main reason to use it here. Because sales and unsold quantities are both recorded by line and day, tomorrow’s plan can be calculated from what the last several equivalent weekdays actually sold rather than repeated from habit.',
    ],
    [
      'Does it track what goes unsold?',
      'Unsold quantity is recorded per line at close and compared against what was produced, so persistent over-production appears as a specific list of lines rather than a general figure.',
    ],
    [
      'Can it handle wholesale accounts?',
      'Wholesale accounts are records with standing orders, cut-off times, delivery windows, credit terms and balances, so an order not confirmed before its cut-off surfaces while the production plan can still change.',
    ],
    [
      'Does it manage custom cake orders?',
      'A custom order carries its advance, specification, required date and state, and its requirement is scheduled into the production plan for that date. An unconfirmed design ages as an exception rather than becoming urgent on the morning of the bake.',
    ],
    [
      'Can it show the effect of ingredient price rises?',
      'Lines are records with their recipe components, so a rise in butter or flour is mapped to every product that uses it and margin is recalculated per line rather than estimated across the range.',
    ],
    [
      'Does Verity replace our billing software?',
      'No. Billing continues and is mapped during implementation. Verity holds production, stock, wholesale, custom orders, suppliers and the reporting across them.',
    ],
    [
      'Is it suitable for a bakery with one outlet?',
      'Yes. The production plan, unsold measurement and ingredient costing are all single-site problems. Additional outlets and delivery routes use the same structure.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the bakery plans and produces, configuration, migration of recipes, accounts and suppliers, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with what goes unsold.',
  ctaLede:
    'It is the number that decides a bakery’s year and the one almost no bakery records by line. Tell us how you plan production today.',

  related: ['cafes', 'restaurants', 'cloud-kitchens', 'catering-businesses', 'food-manufacturers', 'grocery-stores'],
};
