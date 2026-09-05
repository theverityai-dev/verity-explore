export default {
  slug: 'distributors',
  status: 'published',
  plural: 'distributors',
  subject: 'distribution business',

  seo: {
    title: 'AI business management software for distributors | Verity',
    description:
      'Verity connects multi-warehouse stock, retailer orders, credit exposure, salesperson beats, dispatch and returns into one operational system you can ask questions of.',
    keywords: [
      'AI software for distributors',
      'distribution management software',
      'multi warehouse inventory software',
      'retailer order and credit management',
      'FMCG distributor software',
    ],
  },

  hero: {
    eyebrow: 'Verity for distributors',
    headline: 'You do not sell products. You sell availability, on credit, on time.',
    lede:
      'A distributor wins on stock being in the right godown and the right retailer paying on schedule. Verity holds the stock, the orders, the credit exposure and the field team on one record.',
    note: 'Runs alongside your existing accounting. Nothing switches off on day one.',
    panel: {
      title: 'Distribution',
      meta: 'North region · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders today', value: '212', note: 'across 4 godowns' },
        { label: 'Credit outstanding', value: '₹1.84 Cr', note: '₹42 L beyond 30 days' },
        { label: 'Lines out of stock', value: '19', note: 'ordered but unfulfillable' },
        { label: 'Returns pending', value: '34', note: 'awaiting credit note' },
      ],
      rows: [
        { name: '11 retailers past credit limit with open orders', meta: 'Combined ₹28 L · orders held', active: true },
        { name: '19 order lines cannot be fulfilled from any godown', meta: 'Fast-moving SKUs · 3 principals', active: true },
        { name: 'Beat 4 not covered for two consecutive days', meta: 'Salesperson unavailable · 46 outlets', active: true },
        { name: 'Near-expiry stock in Godown 2', meta: '₹6.2 L · under 45 days', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own distribution in this shape.',
    },
  },

  overview: {
    heading: 'Distribution is a working-capital business disguised as a logistics one.',
    paragraphs: [
      'A distributor buys stock from principals, holds it across godowns, sells it to a large number of small retailers, delivers it, and waits to be paid. The margin is thin and the volume is high, which means the business is decided by two things: whether the right stock was in the right place when a retailer ordered it, and whether the money came back before the next purchase had to be funded.',
      'Both of those are information problems. Stock spread across four godowns is only useful if you know what is where; a fast-moving line sitting in the wrong warehouse is an out-of-stock at the counter. Credit is only safe if the exposure per retailer is current at the moment an order is taken, not at month end when the ledger is reviewed.',
      'Then there is the field. Salespeople work beats, take orders at outlets, and are the only people who know why a retailer stopped ordering. That knowledge is almost never captured, so a slow decline in an outlet looks identical to a good month until someone notices the annual number.',
      'Verity holds the stock across locations, the retailer orders, the credit position, the field activity, the dispatch and the returns as connected records. The order taken at a counter can be checked against the stock that exists and the credit the retailer has, at the point it is taken rather than at the point it fails.',
    ],
  },

  terminology: [
    ['SKUs, cases, batches', 'Inventory'],
    ['Retailer orders, indents, returns', 'Orders'],
    ['Retailers, outlets, key accounts', 'Relationships'],
    ['Principals, brands, suppliers', 'Suppliers'],
    ['Salespeople, beats, delivery crews', 'People'],
    ['Godowns, warehouses, vans', 'Locations'],
    ['Credit limits, schemes, approvals', 'Workflows'],
  ],

  challengesHeading: 'Thin margins hide expensive gaps.',
  challengesLede:
    'Distribution problems are small individually and large in aggregate, which is exactly why they go unaddressed.',
  challenges: [
    {
      problem: 'Stock exists, but not where the order is',
      detail:
        'The company holds the SKU. It is in the wrong godown, so the order goes unfulfilled and the retailer buys from a competitor that week.',
      outcome:
        'Stock is held by location with availability visible across all of them, so a shortfall in one godown is answerable from another before the order is lost.',
    },
    {
      problem: 'Credit exposure is known at month end',
      detail:
        'Orders are accepted from retailers who are already past their limit, and it is discovered when the ledger is reviewed weeks later.',
      outcome:
        'Outstanding balance and ageing sit on the retailer record, so an order from a retailer past their limit is held at the point it is taken.',
    },
    {
      problem: 'Out-of-stock is never counted',
      detail:
        'An order line that could not be supplied simply disappears. The lost sale leaves no trace and never appears in any report.',
      outcome:
        'Unfulfillable lines are recorded against the order, so the cost of stocking decisions is visible rather than invisible.',
    },
    {
      problem: 'Field activity is invisible',
      detail:
        'Whether a beat was covered, which outlets were visited and which ordered is known only to the salesperson.',
      outcome:
        'Beat coverage and outlet visits are recorded work, so a route going uncovered for two days is something the business sees.',
    },
    {
      problem: 'Returns and expiry are handled informally',
      detail:
        'Damaged goods, near-expiry stock and retailer returns accumulate in a corner of the godown and are settled in a rush at quarter end.',
      outcome:
        'Returns are recorded movements against the retailer and the batch, with credit notes as workflow rather than negotiation.',
    },
    {
      problem: 'Principal claims are lost',
      detail:
        'Scheme discounts, damage claims and promotional support owed by principals are reconstructed from memory and partially claimed.',
      outcome:
        'Schemes and claims are recorded against the principal and the transactions they apply to, so what is owed is a number rather than an estimate.',
    },
  ],

  modulesLede:
    'One system across stock, orders, credit and the field. These are the parts a distribution business uses.',
  modules: [
    {
      id: 'inventory',
      title: 'Stock across every godown',
      line:
        'SKUs held with batch, expiry, cost, location and state, with availability visible across all warehouses at once.',
      why:
        'Multi-location stock is the distributor’s core asset and its most common failure. Knowing the total is useless; knowing where it is is the whole job.',
      example:
        'A fast-moving line is out in Godown 1 and sitting in Godown 3. That is a transfer, not a lost order — provided someone can see it.',
    },
    {
      id: 'orders',
      title: 'Retailer orders and fulfilment',
      line:
        'Orders are records with their lines, the retailer, the credit position at the time of order, the fulfilment state and what could not be supplied.',
      why:
        'The order is where stock, credit and the customer relationship meet. Recording the lines that could not be filled is what makes stocking decisions measurable.',
      example:
        'Two hundred and twelve orders today, nineteen lines unfulfillable. Those nineteen are the number that should drive next week’s purchase.',
    },
    {
      id: 'relationships',
      title: 'Retailers, outlets and key accounts',
      line:
        'Each outlet is a record with its order history, credit limit, outstanding balance, ageing, returns and visit history.',
      why:
        'A distributor’s customer base is wide and shallow. Decline in an individual outlet is invisible without a record, and it is where growth quietly leaks.',
      example:
        'An outlet that ordered every week until August and twice since is a list entry rather than something nobody happened to notice.',
    },
    {
      id: 'suppliers',
      title: 'Principals, brands and purchase',
      line:
        'Principals are relationships with their purchase orders, schemes, claims, delivery performance and outstanding balances.',
      why:
        'The supply side of a distribution business carries most of its working capital and most of its unclaimed money.',
      example:
        'Scheme support owed by a principal is recorded against the transactions it applies to, so the claim is assembled from records.',
    },
    {
      id: 'logistics',
      title: 'Dispatch, vans and delivery',
      line:
        'Dispatch is tracked against the orders it fulfils, with vehicles, routes, delivery confirmation and returns on the record.',
      why:
        'Delivery is where a distributor’s promise is either kept or quietly broken, and where undocumented returns begin.',
      example:
        'A van loaded against fourteen orders returns with three partial deliveries and two returns, all reconciled against the same records.',
    },
    {
      id: 'workflows',
      title: 'Credit limits, schemes and approvals',
      line:
        'Credit limits, discount schemes, returns and credit notes move through defined approval steps with a recorded decision.',
      why:
        'Every commercially dangerous decision in distribution is a small one taken quickly — an extra week of credit, a discount to hold an account.',
      example:
        'An order from a retailer past their limit is held for approval rather than accepted and regretted.',
    },
    {
      id: 'people',
      title: 'Salespeople, beats and delivery crews',
      line:
        'Field and warehouse teams are modelled once, and every order, visit and delivery shows who owns it.',
      why:
        'The field team is the only part of the business that meets the customer, and its activity is the least recorded.',
      example:
        'Outlets visited, orders taken and conversion by salesperson, from the records they create as they work.',
    },
    {
      id: 'workforce',
      title: 'Beat coverage and attendance',
      line:
        'Assignment, attendance and availability stay connected to the routes and outlets they cover.',
      why:
        'An uncovered beat costs a week of orders from every outlet on it, and it is usually noticed only in the monthly number.',
      example:
        'Beat 4 uncovered for two consecutive days is an exception on the day, not a discovery at month end.',
    },
    {
      id: 'locations',
      title: 'Godowns, regions and vans',
      line:
        'Locations roll into regions and into the business, with permissions, stock and reporting following the same structure.',
      why:
        'A distributor without location structure cannot answer the only question that matters about stock: where is it.',
      example:
        'Stock, orders and out-of-stock lines by godown, with transfers between them as recorded movement.',
    },
    {
      id: 'intelligence',
      title: 'Reports from the transaction records',
      line:
        'Stock coverage, fill rate, credit ageing, outlet activity, return rates and principal claims come from the operational records themselves.',
      why:
        'The distributor’s critical numbers change daily. Monthly reporting is not slow, it is useless.',
      example:
        'Fill rate by SKU and by godown, current, rather than compiled at the end of the month.',
    },
    {
      id: 'ai',
      title: 'Ask the distribution business a question',
      line:
        'Verity AI answers from your own stock, order, credit and field records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions that matter here cross stock, credit and field activity at once, which is exactly why they normally go unanswered.',
      example:
        '"Which retailers are past their credit limit with open orders?" returns eleven, and one instruction assigns collection follow-ups to the salespeople who cover them.',
    },
    {
      id: 'control',
      title: 'Who can approve what',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Credit and discount decisions are the ones worth controlling, and they are made at the edges of the business by people under pressure.',
      example:
        'A salesperson can take an order; extending credit beyond limit requires an approval that leaves a record.',
    },
  ],

  workflowsHeading: 'Order, stock, credit and delivery in one sequence.',
  workflowsLede:
    'These already happen daily. In Verity each step is a state change, so the failure points are visible where they occur.',
  workflows: [
    {
      name: 'Order taken at an outlet',
      steps: [
        'Salesperson records the order against the retailer',
        'Stock availability checked across godowns',
        'Credit position and ageing checked against the retailer record',
        'Order accepted, or held for approval if it exceeds the limit',
        'Unfulfillable lines recorded against the order',
        'Order released to the godown for picking',
      ],
      note:
        'Both checks happen at the counter rather than at month end, which is the difference between a decision and a discovery.',
    },
    {
      name: 'Picking to delivery',
      steps: [
        'Order picked at the assigned godown',
        'Loaded to a van against a route',
        'Delivered and confirmed at the outlet',
        'Partial delivery or return recorded against the order',
        'Vehicle reconciled at the end of the route',
      ],
      note:
        'Returns are recorded at the point of delivery rather than reconstructed when the van gets back.',
    },
    {
      name: 'Stock transfer between godowns',
      steps: [
        'Shortfall identified in one location against demand',
        'Availability located in another godown',
        'Transfer raised and approved',
        'Stock dispatched and received at the destination',
        'Both locations updated as the movement completes',
      ],
      note:
        'The transfer is what turns an out-of-stock into a delayed delivery rather than a lost order.',
    },
    {
      name: 'Purchase from a principal',
      steps: [
        'Coverage reviewed against recent movement and open orders',
        'Purchase order raised against the principal',
        'Goods received, checked and taken into the godown with batch and expiry',
        'Scheme terms recorded against the purchase',
        'Principal balance and delivery performance updated',
      ],
      note:
        'Recording scheme terms at purchase is what makes the claim assemblable later.',
    },
    {
      name: 'Collection and credit control',
      steps: [
        'Outstanding balances aged against each retailer',
        'Accounts past terms flagged with their open orders',
        'Collection follow-up assigned to the covering salesperson',
        'Payment received and applied against invoices',
        'Credit position updated across open and future orders',
      ],
      note:
        'Collection becomes a worked list rather than a monthly reconciliation exercise.',
    },
    {
      name: 'Returns and expiry',
      steps: [
        'Return received against the retailer and batch',
        'Reason recorded — damage, expiry or non-movement',
        'Credit note raised and approved',
        'Stock either returned to saleable or written off',
        'Claim raised against the principal where terms allow',
      ],
      note:
        'Near-expiry stock is visible while it can still be moved rather than after it cannot.',
    },
  ],

  ai: {
    heading: 'Ask across stock, credit and the field at once.',
    lede:
      'Verity AI reads the same stock, order, retailer and field records the business runs on. It answers from your own data, only shows what the person asking can see, and can turn an answer into follow-ups assigned to the right salespeople.',
    panelMeta: 'Grounded in your distribution records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which retailers are past their credit limit with open orders?',
      'Which SKUs could not be fulfilled this week, and from which godowns?',
      'Which outlets have stopped ordering in the last sixty days?',
      'What stock is within forty-five days of expiry, and where?',
      'Which beats were not covered this week?',
      'What is outstanding beyond thirty days, and against whom?',
      'Which principal claims are unfiled against recorded schemes?',
      'Which SKUs are overstocked in one godown and short in another?',
      'Summarise this month’s fill rate and credit position.',
    ],
  },

  automationHeading: 'The checks that have to happen at the counter.',
  automationLede:
    'These run from the stock, order and retailer records at the moment the condition occurs.',
  automations: [
    {
      trigger: 'An order is taken from a retailer past their credit limit',
      steps: [
        'Order held at the approval step',
        'Outstanding balance and ageing attached to the request',
        'Routed to the credit approver',
        'Decision recorded against the order',
      ],
    },
    {
      trigger: 'An order line cannot be fulfilled from the serving godown',
      steps: [
        'Availability checked across other locations',
        'Transfer proposed where stock exists elsewhere',
        'Unfulfillable line recorded against the order if it does not',
        'SKU flagged for the next purchase review',
      ],
    },
    {
      trigger: 'Stock coverage falls below the threshold for a SKU',
      steps: [
        'Reorder flagged against the principal who supplies it',
        'Purchase raised for approval',
        'Receipt checked against the order on arrival',
      ],
    },
    {
      trigger: 'A retailer’s balance passes its payment terms',
      steps: [
        'Account flagged with its ageing and open orders',
        'Collection follow-up assigned to the covering salesperson',
        'Escalated to the credit owner past the second threshold',
      ],
    },
    {
      trigger: 'A beat goes uncovered',
      steps: [
        'Coverage gap flagged against the route and its outlets',
        'Reassignment task created for the field manager',
        'Affected outlets surfaced for follow-up',
      ],
    },
    {
      trigger: 'Stock approaches its expiry window',
      steps: [
        'Near-expiry batch flagged with its location and value',
        'Task created to move or return it',
        'Principal claim raised where the terms allow',
      ],
    },
  ],

  intelligenceHeading: 'What the distributor can actually see.',
  intelligenceLede:
    'Stock, credit, field and commercial performance drawn from the day’s transactions.',
  intelligence: [
    {
      area: 'Stock',
      points: [
        'Availability by SKU and by godown',
        'Coverage in days against recent movement',
        'Overstock in one location against shortage in another',
        'Near-expiry and non-moving stock by value',
      ],
    },
    {
      area: 'Fulfilment',
      points: [
        'Fill rate by SKU, godown and period',
        'Order lines unfulfilled and their value',
        'Delivery completion and partial deliveries',
        'Return rates by reason',
      ],
    },
    {
      area: 'Credit',
      points: [
        'Outstanding by retailer with ageing bands',
        'Exposure against limits across the base',
        'Collection performance by salesperson and route',
        'Orders held on credit approval',
      ],
    },
    {
      area: 'Outlets',
      points: [
        'Ordering frequency and value by outlet',
        'Outlets declining or gone quiet',
        'New outlets added and their first-order value',
        'Product range per outlet against potential',
      ],
    },
    {
      area: 'Field',
      points: [
        'Beat coverage and outlet visits',
        'Orders taken per visit',
        'Attendance against route plan',
        'Performance by salesperson and territory',
      ],
    },
    {
      area: 'Principals',
      points: [
        'Purchase value and outstanding payable by principal',
        'Delivery performance against ordered dates',
        'Scheme claims raised and settled',
        'Margin by brand and by category',
      ],
    },
  ],
  intelligenceNote:
    'Every one of these comes from the transactions the business already records as orders are taken, picked, delivered and paid.',

  rolesHeading: 'One business, five different urgencies.',
  rolesLede:
    'Everyone works from the same records, and each role opens on the question they need answered.',
  roles: [
    {
      role: 'Owner',
      question: 'Where is the working capital sitting?',
      focus: 'Credit outstanding and ageing, stock value and coverage, fill rate, margin by principal.',
    },
    {
      role: 'Sales manager',
      question: 'What is the field actually doing?',
      focus: 'Beat coverage, orders per visit, outlets gone quiet, salesperson performance by territory.',
    },
    {
      role: 'Warehouse manager',
      question: 'What has to move today?',
      focus: 'Orders to pick, transfers due, near-expiry stock, returns awaiting processing.',
    },
    {
      role: 'Credit control',
      question: 'Who is over and who is late?',
      focus: 'Exposure against limits, ageing bands, orders held on approval, collection follow-ups.',
    },
    {
      role: 'Purchasing',
      question: 'What has to be bought and what is owed to us?',
      focus: 'Coverage by SKU, open purchase orders, principal delivery performance, scheme claims outstanding.',
    },
  ],

  useCasesHeading: 'What distributors use Verity for',
  useCases: [
    {
      name: 'Multi-godown stock visibility',
      body: 'Availability by location across every warehouse, so a shortfall in one place is answered from another instead of becoming a lost order.',
    },
    {
      name: 'Order and credit checking at the counter',
      body: 'Stock availability and credit exposure checked at the moment an order is taken rather than discovered at month end.',
    },
    {
      name: 'Out-of-stock measurement',
      body: 'Order lines that could not be supplied recorded against the order, so the cost of stocking decisions is visible.',
    },
    {
      name: 'Retailer and outlet management',
      body: 'Order history, credit limit, ageing, returns and visit history on each outlet record, so decline is visible early.',
    },
    {
      name: 'Beat and field coverage',
      body: 'Routes, visits and orders taken as recorded work, so an uncovered beat is an exception on the day.',
    },
    {
      name: 'Collections and credit control',
      body: 'Ageing by retailer with collection follow-ups assigned to the salesperson who covers them.',
    },
    {
      name: 'Returns, damage and expiry',
      body: 'Returns as recorded movements with reasons, credit notes as approvals, and near-expiry stock visible while it can still move.',
    },
    {
      name: 'Principal schemes and claims',
      body: 'Scheme terms recorded against the purchases they apply to, so claims are assembled from records rather than from memory.',
    },
    {
      name: 'Asking across stock, credit and field',
      body: 'Plain-language questions spanning all three at once, with follow-ups created and assigned in the same step.',
    },
  ],

  migration:
    'Your accounting software and whatever order-taking arrangement the field currently uses are mapped during implementation. Stock, outlets, credit positions and open orders are brought across, and Verity is introduced as the operational layer over them while the business continues to trade.',

  faqHeading: 'Questions distributors ask',
  faqs: [
    [
      'What can AI software do for a distribution business?',
      'Verity AI answers questions from your own stock, order, retailer and field records. You can ask which retailers are past their credit limit with open orders, which SKUs could not be fulfilled this week, which outlets have stopped ordering, or what stock is near expiry and where — and turn the answer into follow-ups assigned to the salespeople who cover those accounts.',
    ],
    [
      'Can Verity handle stock across several godowns?',
      'Yes. Stock is held by location with batch and expiry, and availability is visible across every warehouse at once, so a shortfall in one godown can be answered by a transfer from another rather than becoming an unfulfilled order.',
    ],
    [
      'Does it check credit before accepting an order?',
      'The retailer record carries the credit limit, outstanding balance and ageing, so an order that would take an account past its limit is held at the approval step at the point it is taken rather than discovered when the ledger is reviewed.',
    ],
    [
      'Can we see which sales we lost to being out of stock?',
      'Yes. Order lines that could not be fulfilled are recorded against the order rather than disappearing, so the volume and value of unmet demand becomes a number that can inform purchasing.',
    ],
    [
      'Does Verity track the field team?',
      'Beats, outlet visits and orders taken are recorded work with owners, so coverage gaps and per-visit conversion are visible. It records what the field does as part of the ordering process rather than as separate reporting.',
    ],
    [
      'Can it manage returns and expiry?',
      'Returns are recorded movements against the retailer and the batch, with reasons and credit notes as approval steps. Near-expiry stock is visible by location and value while there is still time to move it.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Verity is the operational layer over what you already run. Your accounting arrangements continue; Verity holds the stock, orders, credit positions, field activity and the reporting across them.',
    ],
    [
      'Is it suitable for a distributor with a single godown?',
      'Yes. A single-godown distributor still faces the credit, out-of-stock and outlet-decline problems, which is most of the value. Additional locations use the same structure without further setup.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the business actually runs, configuration, migration of stock, outlets and open balances, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with credit or with fill rate.',
  ctaLede:
    'Those two decide most of a distributor’s year. Tell us which one is costing you more and we will show you what it looks like in Verity.',

  related: ['wholesalers', 'manufacturers', 'medical-distributors', 'industrial-suppliers', 'supermarkets', 'retail-stores'],
};
