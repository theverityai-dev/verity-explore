export default {
  slug: 'cafes',
  status: 'published',
  plural: 'cafés',
  subject: 'café',

  seo: {
    title: 'AI business management software for cafés | Verity',
    description:
      'Verity connects hourly throughput, prepared-item wastage, part-time rosters, regulars and supplier costs into one system built for a small-ticket, high-volume business.',
    keywords: [
      'AI software for cafes',
      'cafe management software',
      'coffee shop inventory and wastage tracking',
      'cafe staffing and throughput software',
    ],
  },

  hero: {
    eyebrow: 'Verity for cafés',
    headline: 'Four hundred transactions at a hundred and twenty rupees. Everything is decided in fractions.',
    lede:
      'A café lives on throughput per hour, wastage at close and the cost of a cup. None of the three are visible in a daily total. Verity records them where they happen.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Café',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Takings today', value: '₹52,400', note: '418 transactions' },
        { label: 'Average ticket', value: '₹125', note: 'down ₹9 on last month' },
        { label: 'Close wastage', value: '₹3,100', note: 'prepared items' },
        { label: 'Peak cover', value: '2 of 3', note: 'staff on at 09:00' },
      ],
      rows: [
        { name: 'Morning peak understaffed for the third time this week', meta: '08:30–10:00 · queue abandonment likely', active: true },
        { name: 'Prepared food wastage above tolerance at close', meta: 'Same three items each day', active: true },
        { name: 'Milk cost up 11% with no menu price change', meta: 'Affects 60% of drinks sold', active: true },
        { name: 'Loyalty regulars down 14% this month', meta: '38 customers stopped visiting', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own café in this shape.',
    },
  },

  overview: {
    heading: 'A café is a volume business, so nothing matters except at the margin.',
    paragraphs: [
      'A café does four hundred transactions a day at a small average ticket. Nothing about that business is decided by a single event. It is decided by whether the morning peak was staffed to meet it, by how much prepared food went in the bin at close, by whether the cost of milk moved without the menu moving, and by whether the regulars who come four times a week are still coming.',
      'All four are invisible in a daily takings figure, which is what most cafés actually manage against. The day made money or it did not, and the reasons are inferred afterwards.',
      'Throughput is the first. A café’s revenue is concentrated in a small number of hours, and being one person short during those hours does not just slow service — it loses the customers at the back of the queue, who do not appear in any report because they never transacted.',
      'Prepared-item wastage is the second, and it is uniquely a café problem: sandwiches, pastries and cut fruit are made ahead against a forecast, and everything unsold at close is a total loss. The forecast is usually a habit rather than a calculation from what the same weekday actually sold.',
      'Verity records the transaction with its hour, staff and items, the stock those items consumed, the wastage at close and the regular who bought it, so the four things that decide the year become measurable rather than felt.',
    ],
  },

  terminology: [
    ['Drinks, prepared items, retail packs', 'Records'],
    ['Transactions, tickets, refunds', 'Orders'],
    ['Regulars, loyalty customers, office accounts', 'Relationships'],
    ['Beans, milk, packaging, bakery supply', 'Inventory'],
    ['Baristas, part-time staff, shift leads', 'People'],
    ['Prep, opening and closing checks', 'Work'],
    ['Counter, kitchen, outlets', 'Locations'],
  ],

  challengesHeading: 'The margin is thin and the causes are hourly.',
  challengesLede:
    'Café problems are all about timing — which hour, which day, which prep decision — and daily totals average every one of them away.',
  challenges: [
    {
      problem: 'The peak is understaffed and nobody sees the cost',
      detail:
        'Being one short between half past eight and ten does not show up as a loss. The customers who left the queue never transacted.',
      outcome:
        'Transactions carry their hour and the roster carries who was on, so throughput per staffed hour is comparable across days.',
    },
    {
      problem: 'Prepared items are made on habit',
      detail:
        'The same quantity is prepped every day regardless of what the equivalent weekday actually sold, and the difference goes in the bin.',
      outcome:
        'Wastage is recorded by item at close against what sold, so prep quantities can be set from the same weekday’s history.',
    },
    {
      problem: 'Ingredient cost moves and the menu does not',
      detail:
        'Milk, beans and packaging costs move several times a year on a menu price that moves once, and on café margins that is the whole difference.',
      outcome:
        'Purchase cost sits on the ingredient, so cost movement against the drinks it feeds is visible per item.',
    },
    {
      problem: 'Regulars leave quietly',
      detail:
        'A café’s revenue is built on customers who come several times a week, and one who stops is worth more than a dozen one-off visits — but nothing counts them.',
      outcome:
        'Repeat customers are records with visit frequency, so a drop in the regular base surfaces as a number.',
    },
    {
      problem: 'Part-time rosters are a scheduling puzzle nobody has data for',
      detail:
        'Availability, shift swaps and no-shows are managed by message, and the roster is built without reference to what each hour actually needs.',
      outcome:
        'Attendance and shifts are records connected to the hours they covered, so staffing follows demand rather than a template.',
    },
    {
      problem: 'A second outlet is not comparable',
      detail:
        'Two cafés with two prep habits and two rosters produce two sets of numbers that cannot be set against each other.',
      outcome:
        'Outlets are locations rolling into the business, so throughput, wastage and ticket are directly comparable.',
    },
  ],

  modulesLede:
    'One system across transactions, stock, prep and staffing. These are the parts a café works with.',
  modules: [
    {
      id: 'orders',
      title: 'Transactions by hour and item',
      line:
        'Every transaction records its items, its hour, the staff member and the stock it consumed.',
      why:
        'A café’s only meaningful revenue analysis is by hour and by item. A daily total cannot tell you the morning peak failed.',
      example:
        'Four hundred and eighteen transactions concentrated in three hours, against a roster that treated the day as flat.',
    },
    {
      id: 'inventory',
      title: 'Beans, milk, packaging and bakery supply',
      line:
        'Stock is held with supplier, cost and reorder point, and moves as it is received, consumed by drinks and items, or written off at close.',
      why:
        'Consumption per drink is the entire cost side of a café, and a cost movement in milk affects most of the menu at once.',
      example:
        'An eleven percent rise in milk cost, mapped to the sixty percent of drinks that use it.',
    },
    {
      id: 'work',
      title: 'Prep, opening and closing checks',
      line:
        'The day’s fixed tasks are work with an owner, a due time and a state, including the prep quantities set for the day.',
      why:
        'A café day is a sequence of timed tasks, and the failures are tasks that did not happen before the peak arrived.',
      example:
        'Prep completed and recorded at 07:40 with the quantities used, which is what makes tomorrow’s forecast better than today’s.',
    },
    {
      id: 'workforce',
      title: 'Shifts, availability and attendance',
      line:
        'Assignment, availability and attendance stay connected to the hours they covered.',
      why:
        'Part-time rostering is a café’s hardest recurring administrative job and its biggest controllable cost.',
      example:
        'Two staff on at nine when the same weekday historically needs three, flagged the day before rather than during the queue.',
    },
    {
      id: 'people',
      title: 'Baristas and shift leads',
      line:
        'Staff are modelled once, and every transaction, prep task, wastage record and refund carries who handled it.',
      why:
        'Throughput per person during peak, and attachment of food to drinks, both vary by individual.',
      example:
        'Transactions per staffed hour by person, from the transactions themselves.',
    },
    {
      id: 'relationships',
      title: 'Regulars and office accounts',
      line:
        'Repeat customers and corporate accounts are records with their visit frequency, spend and any credit position.',
      why:
        'A café’s economics rest on frequency rather than on ticket size, and frequency is only measurable if the customer is identified.',
      example:
        'Thirty-eight regulars who visited four times a week until this month and have not returned.',
    },
    {
      id: 'suppliers',
      title: 'Roasters, dairies and bakery suppliers',
      line:
        'Suppliers are relationships with their orders, delivery reliability, price movement and balances.',
      why:
        'Café purchasing is frequent, small and unexamined, and price creep passes straight through a thin margin.',
      example:
        'Three price movements from one supplier this year against one menu change on the café’s side.',
    },
    {
      id: 'intelligence',
      title: 'Reporting by hour, item and day',
      line:
        'Throughput per staffed hour, item mix, wastage, cost movement, regular retention and outlet comparison come from the transactions.',
      why:
        'Daily totals hide every café-relevant variable. Hourly and item-level records are the only useful resolution.',
      example:
        'This Tuesday’s morning peak set against the last six Tuesdays, in the same shape.',
    },
    {
      id: 'workflows',
      title: 'Refunds, comps and write-offs',
      line:
        'Refunds, comped items, wastage write-offs and price overrides move through defined steps with a recorded reason.',
      why:
        'At a hundred-and-twenty-rupee ticket, a handful of unrecorded comps a day is a real number by month end.',
      example:
        'A comp above the shift lead’s threshold becomes an approval rather than a decision at the counter.',
    },
    {
      id: 'ai',
      title: 'Ask the café a question',
      line:
        'Verity AI answers from your own transaction, stock, roster and customer records, respects permissions, and can create assigned follow-ups.',
      why:
        'The owner’s questions are about hours and items and need answering at close, not at month end.',
      example:
        '"Which hours were understaffed against their usual throughput this week?" returns the pattern with the roster task raised.',
    },
    {
      id: 'records',
      title: 'Recipes and prep quantities',
      line:
        'Drinks and prepared items are records with their components and standard quantities.',
      why:
        'Consumption per item is what turns a milk price rise into a specific margin number rather than a general worry.',
      example:
        'A drink’s recorded components make the effect of a supplier increase calculable rather than estimated.',
    },
    {
      id: 'locations',
      title: 'Counter, kitchen and outlets',
      line:
        'Locations roll into the business, with stock, staffing and reporting following the same structure.',
      why:
        'Two cafés only teach you anything if they are recorded identically.',
      example:
        'Throughput per staffed hour and wastage rate, comparable across outlets.',
    },
    {
      id: 'communication',
      title: 'Handover between shifts',
      line:
        'Notes, notifications and activity attach to the record they concern.',
      why:
        'Café knowledge is handed over verbally between part-time shifts and is lost within a day.',
      example:
        'The note that a supplier substituted a product sits on the delivery, where the closing shift will see it.',
    },
  ],

  workflowsHeading: 'The day, hour by hour.',
  workflowsLede:
    'These are what a café already does. Recorded with their hour, they become the numbers that set tomorrow.',
  workflows: [
    {
      name: 'Prep against forecast',
      steps: [
        'Same weekday’s sales pulled for prepared items',
        'Prep quantities set against that history',
        'Prep completed and recorded with quantities used',
        'Sales tracked against prepped quantity through the day',
        'Wastage recorded by item at close',
        'Result feeds the next equivalent day’s forecast',
      ],
      note:
        'This single loop is the difference between prepping on habit and prepping on evidence.',
    },
    {
      name: 'Peak staffing',
      steps: [
        'Throughput by hour pulled for the equivalent day',
        'Roster built against the hourly pattern',
        'Availability and swaps recorded against shifts',
        'Attendance confirmed at the start of the shift',
        'Gaps flagged before the peak rather than during it',
        'Throughput per staffed hour recorded for comparison',
      ],
      note:
        'The cost of a short peak is invisible in takings, which is why it repeats.',
    },
    {
      name: 'Cost movement to menu review',
      steps: [
        'Delivery received with cost recorded against the ingredient',
        'Movement compared against previous purchases',
        'Affected drinks and items identified from their components',
        'Margin recalculated per item',
        'Menu review raised where margin falls below threshold',
      ],
      note:
        'On café margins an ingredient move that goes unnoticed for a quarter is a meaningful loss.',
    },
    {
      name: 'Regular retention',
      steps: [
        'Repeat customers identified by visit frequency',
        'Customers whose frequency has dropped flagged',
        'Follow-up or offer assigned',
        'Outcome recorded on the customer record',
      ],
      note:
        'A café regular is worth many times a one-off visit and is the least tracked customer in hospitality.',
    },
    {
      name: 'Close of day',
      steps: [
        'Takings, transactions and item mix recorded',
        'Wastage recorded by item and reason',
        'Stock consumed reconciled against sales',
        'Exceptions raised where the gap exceeds tolerance',
        'Closing checks completed against their owners',
      ],
      note:
        'Recording wastage at close is what makes the next forecast possible.',
    },
  ],

  ai: {
    heading: 'Ask about hours, not days.',
    lede:
      'Verity AI reads the same transaction, stock, roster and customer records the café creates as it trades. It answers from your own café, only shows what the person asking can see, and can turn the answer into work assigned to a shift lead.',
    panelMeta: 'Grounded in your café records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which hours were understaffed against their usual throughput this week?',
      'What was wasted at close this week, and which items repeat?',
      'How does this Tuesday’s morning peak compare with the last six?',
      'Which ingredient costs have moved without a menu change?',
      'Which regulars have stopped visiting this month?',
      'What is the item mix by hour?',
      'What is throughput per staffed hour by person?',
      'Which prepared items are consistently over-prepped?',
      'Summarise this week against the same week last month.',
    ],
  },

  automationHeading: 'The small checks a busy counter cannot make.',
  automationLede:
    'Each runs from the café’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'Wastage on an item exceeds tolerance',
      steps: [
        'Item flagged with the quantity prepped against sold',
        'Prep quantity review task assigned to the shift lead',
        'Adjusted quantity recorded for the next equivalent day',
      ],
    },
    {
      trigger: 'A shift is short against the hourly pattern',
      steps: [
        'Gap flagged the day before with the expected throughput',
        'Cover task assigned to the roster owner',
        'Outcome recorded against the shift',
      ],
    },
    {
      trigger: 'An ingredient cost rises',
      steps: [
        'Movement recorded against the ingredient',
        'Affected drinks and items identified from components',
        'Menu review raised where margin falls below threshold',
      ],
    },
    {
      trigger: 'Stock falls below reorder before a delivery day',
      steps: [
        'Shortfall flagged against the supplier’s next delivery',
        'Order raised in time to be included',
        'Receipt checked against the order',
      ],
    },
    {
      trigger: 'A regular’s visit frequency drops',
      steps: [
        'Customer flagged with their previous pattern',
        'Follow-up or offer assigned',
        'Outcome recorded on the record',
      ],
    },
    {
      trigger: 'A comp or refund exceeds the threshold',
      steps: [
        'Transaction held at the approval step',
        'Routed with the reason attached',
        'Decision recorded against the transaction',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see at the resolution that matters.',
  intelligenceLede:
    'Throughput, wastage and cost from the transactions themselves.',
  intelligence: [
    {
      area: 'Throughput',
      points: [
        'Transactions and revenue by hour',
        'Throughput per staffed hour',
        'Comparison against the same weekday historically',
        'Peak performance by outlet',
      ],
    },
    {
      area: 'Items',
      points: [
        'Item mix by hour and day',
        'Food attachment to drink sales',
        'Margin per item against current ingredient cost',
        'Items consistently over- or under-prepped',
      ],
    },
    {
      area: 'Wastage',
      points: [
        'Prepared-item wastage by item and day',
        'Wastage against quantity prepped',
        'Reasons recorded and their distribution',
        'Cost of wastage against takings',
      ],
    },
    {
      area: 'Staffing',
      points: [
        'Hours worked against transactions by hour',
        'Attendance, swaps and no-shows',
        'Throughput per person during peak',
        'Labour cost against revenue by day',
      ],
    },
    {
      area: 'Customers',
      points: [
        'Visit frequency of repeat customers',
        'Regulars whose frequency has dropped',
        'Office and corporate account activity',
        'Average ticket by customer type',
      ],
    },
    {
      area: 'Supply',
      points: [
        'Ingredient cost movement over time',
        'Delivery reliability by supplier',
        'Consumption against sales',
        'Outstanding payable',
      ],
    },
  ],
  intelligenceNote:
    'All of this follows from recording the transaction with its hour and the wastage at close, which takes no additional effort during service.',

  rolesHeading: 'A small team, three different views.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Where is the margin going?',
      focus: 'Throughput per staffed hour, wastage cost, ingredient cost movement, regular retention, outlet comparison.',
    },
    {
      role: 'Café manager',
      question: 'Is tomorrow set up properly?',
      focus: 'Roster against the hourly pattern, prep quantities, stock before delivery day, approvals pending.',
    },
    {
      role: 'Shift lead',
      question: 'What has to happen this shift?',
      focus: 'Opening and prep tasks, stock on hand, staff on, wastage to record at close.',
    },
  ],

  useCasesHeading: 'What cafés use Verity for',
  useCases: [
    {
      name: 'Throughput by hour',
      body: 'Transactions recorded with their hour against who was rostered, so a short peak becomes a measured cost rather than an invisible one.',
    },
    {
      name: 'Prep forecasting',
      body: 'Wastage at close recorded by item against what sold, so prep quantities are set from the same weekday’s history rather than from habit.',
    },
    {
      name: 'Ingredient cost impact',
      body: 'Cost movement mapped through recorded components to the drinks and items it affects, so a milk rise is a per-item margin number.',
    },
    {
      name: 'Regular retention',
      body: 'Visit frequency on the customer record, so the four-times-a-week regulars who stop are visible as a number.',
    },
    {
      name: 'Part-time rostering',
      body: 'Availability, swaps and attendance as records connected to the hours covered, so the roster follows demand.',
    },
    {
      name: 'Close-of-day reconciliation',
      body: 'Stock consumed reconciled against sales with wastage recorded separately, so the unexplained gap is isolated.',
    },
    {
      name: 'Comp and refund control',
      body: 'Discretionary counter decisions as approvals with reasons, which matter at a small average ticket.',
    },
    {
      name: 'Outlet comparison',
      body: 'Throughput, wastage and ticket comparable across cafés because every outlet records the same things the same way.',
    },
  ],

  migration:
    'Your billing setup and supplier arrangements are mapped during implementation and continue to run. Stock, suppliers, recipes and customers are brought across, and Verity is configured around the way the café already works its day.',

  faqHeading: 'Questions café owners ask',
  faqs: [
    [
      'What can AI software do for a café?',
      'Verity AI answers questions from your own transaction, stock, roster and customer records: which hours were understaffed against their usual throughput, what was wasted at close and which items repeat, which ingredient costs moved without a menu change, which regulars have stopped visiting. Each answer can become a roster or prep task assigned to a shift lead.',
    ],
    [
      'Does Verity replace our billing system?',
      'No. Billing continues and is mapped during implementation. Verity is the operational layer over it — stock, prep, wastage, rostering, suppliers and the reporting across them.',
    ],
    [
      'Can it help decide how much to prep?',
      'Wastage is recorded by item at close against what actually sold, so prep quantities can be set from the same weekday’s history. That loop is the main difference between prepping on habit and prepping on evidence.',
    ],
    [
      'How does it help with staffing?',
      'Transactions carry their hour and the roster records who was on, so throughput per staffed hour is comparable across days and a shift that will be short can be flagged the day before rather than discovered during the queue.',
    ],
    [
      'Can it show the effect of an ingredient price rise?',
      'Drinks and prepared items are records with their components, so a cost movement in milk or beans is mapped to every item that uses them and margin is recalculated per item rather than estimated.',
    ],
    [
      'Does it track regular customers?',
      'Repeat customers and office accounts are records with visit frequency and spend, so a drop in the regular base — which is where a café’s revenue actually comes from — is a number rather than a feeling.',
    ],
    [
      'Is it useful for a single café?',
      'Yes. Throughput, wastage, cost movement and regular retention are all single-site problems. Additional outlets simply make them comparable.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the café runs its day, configuration, migration of stock, recipes and suppliers, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the morning peak or the bin at close.',
  ctaLede:
    'Those two decide most of a café’s year and neither shows up in a daily total. Tell us which one worries you more.',

  related: ['restaurants', 'bakeries', 'fast-food-businesses', 'cloud-kitchens', 'hotels', 'catering-businesses'],
};
