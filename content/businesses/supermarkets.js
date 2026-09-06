export default {
  slug: 'supermarkets',
  status: 'published',
  plural: 'supermarkets',
  subject: 'supermarket',

  seo: {
    title: 'AI business management software for supermarkets | Verity',
    description:
      'Verity connects perishable stock, shrinkage, category performance, supplier schemes, shift cover and multi-store rollup into one operational system.',
    keywords: [
      'AI software for supermarkets',
      'supermarket management software',
      'perishable inventory and shrinkage control',
      'category management software',
      'supermarket chain operations software',
    ],
  },

  hero: {
    eyebrow: 'Verity for supermarkets',
    headline: 'Thousands of lines, single-digit margin, and a third of it perishes.',
    lede:
      'A supermarket is decided by shrinkage, availability and category mix, and all three are invisible in a system that only records the sale. Verity records the movement.',
    note: 'Runs alongside your existing billing and weighing setup.',
    panel: {
      title: 'Store',
      meta: 'Store 1 · This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales this week', value: '₹38.4 L', note: '9,140 baskets' },
        { label: 'Shrinkage', value: '2.1%', note: 'against 1.4% target' },
        { label: 'Availability', value: '94.2%', note: 'of listed lines on shelf' },
        { label: 'Near expiry', value: '₹1.9 L', note: 'under 5 days' },
      ],
      rows: [
        { name: 'Dairy shrinkage double the store average', meta: 'Four weeks running · cold chain query', active: true },
        { name: '186 listed lines not on shelf', meta: '31 are top-100 sellers', active: true },
        { name: '₹1.9 L expiring within five days', meta: 'No markdown applied yet', active: true },
        { name: 'Scheme claim unfiled against a principal', meta: '₹2.4 L · window closes Friday', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'A supermarket is a shrinkage problem with a checkout attached.',
    paragraphs: [
      'Supermarkets run thousands of lines at single-digit margins, and a meaningful share of what they buy is perishable. The three numbers that decide the year are shrinkage, on-shelf availability and category mix. None of them are visible in a system that records only the sale — because all three are about what happened to stock between the delivery bay and the till.',
      'Shrinkage is the clearest example. Goods leave without being sold: damage, spoilage, short delivery, miscounted receipt, theft, weighing error, giveaway. Each has a different cause and a different fix, and in most stores they arrive as a single unexplained figure at stocktake — by which point the cause is months old and untraceable.',
      'Availability is the second. A listed line that is not on the shelf is a sale the store already paid to be able to make: the space, the listing, the promotion. Stores rarely count these, because an absent item leaves no transaction.',
      'The third is that supermarket economics run on the supply side. Scheme support, damage allowances and promotional funding from principals are a real part of margin, and they are claimed from documents and transactions that must be matched. Unclaimed support is money the store has already earned and does not collect.',
      'Verity records the movement rather than only the sale, holds the principal agreements alongside the transactions they apply to, and puts stores, staff and categories on one structure so the group view is the same records.',
    ],
  },

  terminology: [
    ['Lines, categories, planograms', 'Inventory'],
    ['Baskets, transactions, returns', 'Orders'],
    ['Principals, distributors, schemes', 'Suppliers'],
    ['Shrinkage, markdown, write-off', 'Workflows'],
    ['Shift staff, section leads, cashiers', 'People'],
    ['Loyalty customers, account holders', 'Relationships'],
    ['Stores, cold rooms, back-of-house', 'Locations'],
  ],

  challengesHeading: 'Small percentages on large volumes.',
  challengesLede:
    'A supermarket does not lose money in single events. It loses it in fractions of a percent, repeated across thousands of lines.',
  challenges: [
    {
      problem: 'Shrinkage arrives as one unexplained number',
      detail:
        'Stocktake produces a figure. It does not say how much was spoilage, how much was short delivery and how much walked out, so nothing specific can be fixed.',
      outcome:
        'Every loss is a recorded movement with a reason and a location, so shrinkage decomposes into causes that can each be acted on.',
    },
    {
      problem: 'Out-of-shelf is never counted',
      detail:
        'A listed line missing from the shelf makes no transaction, so the lost sale leaves no trace anywhere in the system.',
      outcome:
        'Listed lines are checked against stock on hand, so availability becomes a measured percentage rather than an assumption.',
    },
    {
      problem: 'Perishables are marked down too late',
      detail:
        'Short-dated stock is noticed on the day it expires, when the only remaining option is to throw it away at full cost.',
      outcome:
        'Expiry sits on the batch, so near-dated stock surfaces by value and location while markdown can still recover most of the cost.',
    },
    {
      problem: 'Scheme support goes unclaimed',
      detail:
        'Promotional funding, damage allowances and slab-based support are reconstructed from memory at the end of a window and partially claimed.',
      outcome:
        'Scheme terms are recorded against the purchases they apply to, so the claim is assembled from records before the window closes.',
    },
    {
      problem: 'Category performance is guessed',
      detail:
        'Shelf space is allocated by habit and by whichever supplier pushed hardest, not by return per unit of space.',
      outcome:
        'Sales, margin and turnover by category come from the same records, so space decisions have numbers behind them.',
    },
    {
      problem: 'Every store counts differently',
      detail:
        'Each site reports shrinkage, availability and wastage in its own format, so the chain view is a monthly reconciliation exercise.',
      outcome:
        'Stores are locations rolling into the business, so comparison is the same records rather than five submissions.',
    },
  ],

  modulesLede:
    'One system across stock movement, supply, staff and reporting. These are the parts a supermarket works with.',
  modules: [
    {
      id: 'inventory',
      title: 'Movement, not just stock on hand',
      line:
        'Stock is held with batch, expiry, cost, category and location, and every movement — receipt, sale, markdown, damage, spoilage, transfer, write-off — is recorded with its reason.',
      why:
        'The stock figure matters less than the movement behind it. Shrinkage, availability and wastage are all questions about movement.',
      example:
        'Dairy shrinkage running at double the store average for four weeks points at a cold chain problem, which a single stocktake figure never would.',
    },
    {
      id: 'suppliers',
      title: 'Principals, schemes and claims',
      line:
        'Suppliers are relationships with their purchase orders, delivery performance, scheme terms, claims and outstanding balances.',
      why:
        'A significant share of supermarket margin arrives from the supply side, and it is claimed rather than earned automatically.',
      example:
        'A scheme worth two and a half lakh is assembled from the purchases it applies to, before the claim window closes on Friday.',
    },
    {
      id: 'orders',
      title: 'Baskets, returns and replenishment orders',
      line:
        'Transactions record their lines, the till, the staff member and the stock they moved; purchase orders record what was asked for against what arrived.',
      why:
        'Matching what was ordered to what was received is where short deliveries stop being absorbed as shrinkage.',
      example:
        'A delivery two cases short is recorded against the order rather than discovered as an unexplained variance at count.',
    },
    {
      id: 'workflows',
      title: 'Markdown, write-off and adjustment',
      line:
        'Markdowns, write-offs, stock adjustments and returns to supplier move through defined approval steps with a reason on the record.',
      why:
        'These are the routine decisions that decide shrinkage, and they are the ones most often made without any record of why.',
      example:
        'A markdown on near-dated stock is an approval with the expiry and value attached, so the recovery can be compared with the alternative.',
    },
    {
      id: 'people',
      title: 'Shift staff, section leads and cashiers',
      line:
        'Staff are modelled once, and every adjustment, markdown, void and count carries the person who made it.',
      why:
        'Attribution is not about blame. It is the only way to tell a training problem from a process problem from a genuine loss.',
      example:
        'Voids and price overrides by till and operator, from the transactions themselves.',
    },
    {
      id: 'workforce',
      title: 'Shift cover against trading pattern',
      line:
        'Assignment, attendance and availability stay connected to the shifts and sections they covered.',
      why:
        'A supermarket’s labour cost is fixed against a trading pattern that is not, and cover gaps show up as queues and unfilled shelves.',
      example:
        'Hours worked against baskets processed by hour, so staffing is set against what the same day actually did.',
    },
    {
      id: 'records',
      title: 'Agreements, certificates and delivery documents',
      line:
        'Documents attach to the supplier, batch or transaction they belong to, with the same permissions as every other record.',
      why:
        'Scheme circulars, cold chain records and delivery notes are the evidence behind claims and compliance, and they are needed after the fact.',
      example:
        'A claim disputed by a principal resolves to the circular it was raised under and the deliveries it covers.',
    },
    {
      id: 'locations',
      title: 'Stores, cold rooms and back-of-house',
      line:
        'Locations roll into the business, with stock, permissions and reporting following the same structure.',
      why:
        'Loss frequently happens between locations — bay to back-of-house, back-of-house to shelf — and is invisible unless those are distinct.',
      example:
        'Stock recorded into the cold room and not onto the shelf is a movement gap with a location attached.',
    },
    {
      id: 'intelligence',
      title: 'Category and loss reporting',
      line:
        'Shrinkage by cause and category, availability, wastage, margin, scheme recovery and store comparison come from the operational records.',
      why:
        'These are weekly decisions taken against monthly information in most chains, which is the wrong cadence entirely.',
      example:
        'Shrinkage decomposed by cause and category, current, rather than a single figure at the next stocktake.',
    },
    {
      id: 'ai',
      title: 'Ask the store a question',
      line:
        'Verity AI answers from your own stock movement, supplier and transaction records, respects permissions, and can create assigned follow-ups.',
      why:
        'The useful questions cross movement, category and supplier at once, which is exactly what no single report covers.',
      example:
        '"Which categories have shrinkage above target, and what is the biggest cause in each?" returns three, with the follow-ups assigned to section leads.',
    },
    {
      id: 'control',
      title: 'Who can adjust, void and mark down',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'The ability to change a price or adjust stock is distributed across a large shift workforce, which is exactly why it needs a trail.',
      example:
        'Every adjustment carries the person, the reason and the time, and thresholds route the larger ones for approval.',
    },
    {
      id: 'relationships',
      title: 'Loyalty customers and accounts',
      line:
        'Customers are records with their purchase history, basket composition and any credit position.',
      why:
        'Basket behaviour is what tells a supermarket which categories are pulling the trip and which are riding along.',
      example:
        'Customers whose weekly shop stopped after a category went out of stock repeatedly are a measurable group.',
    },
  ],

  workflowsHeading: 'The movements that decide the margin.',
  workflowsLede:
    'These already happen in your store. Recorded as states rather than as events nobody logs, they become the numbers that matter.',
  workflows: [
    {
      name: 'Delivery to shelf',
      steps: [
        'Purchase order raised against the principal or distributor',
        'Delivery received and counted against the order',
        'Short or damaged quantity recorded against the supplier',
        'Stock taken in with batch, expiry and cost',
        'Movement to back-of-house and then to shelf recorded',
        'Scheme terms attached to the purchase',
      ],
      note:
        'Recording short delivery at the bay stops it becoming an unexplained variance at stocktake.',
    },
    {
      name: 'Near-expiry and markdown',
      steps: [
        'Batches inside the expiry window flagged by value and location',
        'Markdown proposed against the remaining shelf life',
        'Approval applied where the markdown exceeds the threshold',
        'Price change recorded against the batch',
        'Recovery compared against the write-off it avoided',
      ],
      note:
        'Markdown becomes a recovery decision taken early rather than a disposal decision taken late.',
    },
    {
      name: 'Shrinkage investigation',
      steps: [
        'Count variance raised against a category or location',
        'Recorded movements for the period reviewed by reason',
        'Unexplained portion isolated from known loss',
        'Cause investigated with the location and shift attached',
        'Action raised against the process or the training gap',
      ],
      note:
        'The point is separating what is explained from what is not. Only the second needs investigating.',
    },
    {
      name: 'Availability check',
      steps: [
        'Listed lines compared against stock on hand',
        'Gaps ranked by sales rank and category',
        'Replenishment raised for lines held in back-of-house',
        'Purchase raised for lines genuinely out of stock',
        'Availability recorded as a measured percentage',
      ],
      note:
        'A top-100 line missing from the shelf is a different problem from a slow line missing, and ranking makes that visible.',
    },
    {
      name: 'Scheme claim',
      steps: [
        'Scheme terms recorded against the principal at purchase',
        'Qualifying purchases and sales matched to the terms',
        'Claim assembled with the supporting documents attached',
        'Approval routed and the claim filed before the window',
        'Settlement recorded against the principal balance',
      ],
      note:
        'The claim is built from records that already exist rather than reconstructed at the deadline.',
    },
    {
      name: 'Category review',
      steps: [
        'Sales, margin and turnover pulled by category',
        'Shrinkage and wastage compared across categories',
        'Return per unit of shelf space calculated',
        'Space and range decisions raised with owners',
        'Decisions recorded against the categories',
      ],
      note:
        'Shelf space stops being allocated by habit and by supplier pressure.',
    },
  ],

  ai: {
    heading: 'Ask where the percentage went.',
    lede:
      'Verity AI reads the same movement, supplier and transaction records the store runs on. It answers from your own stores rather than from generic knowledge, and it can turn the answer into work assigned to the section that owns it.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which categories have shrinkage above target, and what is the largest cause in each?',
      'Which listed lines are not on shelf, and how many are top-100 sellers?',
      'What is expiring within five days, and where?',
      'Which principals have unclaimed scheme support this window?',
      'Which suppliers delivered short this month?',
      'How does this store compare with the others on wastage?',
      'Which categories return the most per unit of shelf space?',
      'How did labour hours track against baskets by hour on Saturday?',
      'Summarise this week’s loss and availability position.',
    ],
  },

  automationHeading: 'The checks that have to happen daily.',
  automationLede:
    'Each runs from the movement records at the point the condition is met.',
  automations: [
    {
      trigger: 'A batch enters its expiry window',
      steps: [
        'Batch flagged with value, location and remaining shelf life',
        'Markdown task raised for the section lead',
        'Approval routed where the markdown exceeds threshold',
        'Outcome recorded against the batch',
      ],
    },
    {
      trigger: 'A delivery is received short or damaged',
      steps: [
        'Variance recorded against the purchase order',
        'Claim or return raised against the supplier',
        'Supplier delivery record updated',
      ],
    },
    {
      trigger: 'A listed line has no stock on hand',
      steps: [
        'Availability gap flagged with the line’s sales rank',
        'Replenishment task raised if stock is in back-of-house',
        'Purchase raised if it is genuinely out',
      ],
    },
    {
      trigger: 'Category shrinkage passes its threshold',
      steps: [
        'Exception raised with the recorded causes attached',
        'Investigation assigned to the section lead',
        'Action recorded against the category',
      ],
    },
    {
      trigger: 'A scheme window approaches its close',
      steps: [
        'Qualifying purchases matched against the terms',
        'Claim assembled with documents attached',
        'Filing task assigned with the deadline',
      ],
    },
    {
      trigger: 'An adjustment exceeds the threshold',
      steps: [
        'Adjustment held at the approval step',
        'Routed with the reason and the person attached',
        'Decision recorded against the stock record',
      ],
    },
  ],

  intelligenceHeading: 'What the chain can actually see.',
  intelligenceLede:
    'Loss, availability and category performance drawn from recorded movement.',
  intelligence: [
    {
      area: 'Loss',
      points: [
        'Shrinkage by category, cause and location',
        'Wastage and expiry write-off by value',
        'Short and damaged deliveries by supplier',
        'Unexplained variance against recorded loss',
      ],
    },
    {
      area: 'Availability',
      points: [
        'On-shelf availability against listed range',
        'Gaps weighted by sales rank',
        'Replenishment lag from back-of-house to shelf',
        'Out-of-stock frequency by line',
      ],
    },
    {
      area: 'Category',
      points: [
        'Sales, margin and turnover by category',
        'Return per unit of shelf space',
        'Range performance against space allocated',
        'Basket composition and attachment',
      ],
    },
    {
      area: 'Supply',
      points: [
        'Delivery reliability and fill rate by supplier',
        'Cost movement on repeat purchases',
        'Scheme support earned, claimed and settled',
        'Outstanding payable by principal',
      ],
    },
    {
      area: 'People',
      points: [
        'Hours worked against baskets by hour',
        'Voids, overrides and adjustments by operator',
        'Attendance against shift plan',
        'Section coverage during peak periods',
      ],
    },
    {
      area: 'Stores',
      points: [
        'Store comparison on shrinkage and availability',
        'Sales per square foot by store',
        'Transfers between stores',
        'Exceptions raised and time to close',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from movements the store already makes. The difference is that the movement carries a reason and a location.',

  rolesHeading: 'One store, five different urgencies.',
  rolesLede:
    'Everyone works from the same records, and each role opens on the question they need answered.',
  roles: [
    {
      role: 'Owner or chain head',
      question: 'Where is the percentage going?',
      focus: 'Shrinkage by store and category, availability, margin, scheme recovery, store comparison.',
    },
    {
      role: 'Store manager',
      question: 'What is wrong on the floor today?',
      focus: 'Availability gaps by sales rank, near-expiry stock, shift cover, approvals pending.',
    },
    {
      role: 'Section lead',
      question: 'What is my category losing?',
      focus: 'Shrinkage and wastage in section, markdowns due, replenishment outstanding, delivery variances.',
    },
    {
      role: 'Buyer',
      question: 'What am I earning from the supply side?',
      focus: 'Cost movement, fill rate by supplier, scheme terms and claims, range performance.',
    },
    {
      role: 'Accounts',
      question: 'What is owed and what is claimable?',
      focus: 'Supplier payables, scheme claims outstanding, write-offs approved, daily takings.',
    },
  ],

  useCasesHeading: 'What supermarkets use Verity for',
  useCases: [
    {
      name: 'Shrinkage decomposition',
      body: 'Every loss recorded as a movement with a reason and a location, so the stocktake figure separates into causes that can each be fixed.',
    },
    {
      name: 'Perishable and expiry management',
      body: 'Expiry on the batch, so near-dated stock surfaces by value and location while markdown can still recover most of the cost.',
    },
    {
      name: 'On-shelf availability',
      body: 'Listed range checked against stock on hand, with gaps weighted by sales rank, turning an invisible lost sale into a measured percentage.',
    },
    {
      name: 'Delivery variance control',
      body: 'Short and damaged deliveries recorded against the purchase order at the bay rather than absorbed as unexplained shrinkage.',
    },
    {
      name: 'Scheme and claim recovery',
      body: 'Scheme terms recorded against qualifying purchases, so the claim is assembled from records before the window closes.',
    },
    {
      name: 'Category and space decisions',
      body: 'Sales, margin, turnover and loss by category, so shelf space is allocated on return rather than on supplier pressure.',
    },
    {
      name: 'Shift cover against trading pattern',
      body: 'Hours worked set against baskets processed by hour, so staffing follows what the day actually does.',
    },
    {
      name: 'Adjustment and override control',
      body: 'Price overrides, voids and stock adjustments carried as approvals with reasons and attribution.',
    },
    {
      name: 'Multi-store comparison',
      body: 'Stores as locations rolling into the chain, so shrinkage and availability are directly comparable without reformatting.',
    },
  ],

  migration:
    'Your billing, weighing and accounting setup is mapped during implementation and continues to run. Stock, batches, suppliers, scheme terms and open balances are brought across, and Verity is introduced as the movement and operational layer over them.',

  faqHeading: 'Questions supermarket operators ask',
  faqs: [
    [
      'What can AI software do for a supermarket?',
      'Verity AI answers questions from your own movement, supplier and transaction records: which categories have shrinkage above target and what is causing it, which listed lines are not on shelf, what is expiring within five days and where, which principals have unclaimed scheme support. Each answer can become work assigned to the section that owns it.',
    ],
    [
      'Can Verity help reduce shrinkage?',
      'It makes shrinkage explainable, which is the precondition for reducing it. Every loss is a recorded movement with a reason and a location — spoilage, damage, short delivery, adjustment — so the stocktake figure separates into causes rather than arriving as one unexplained number.',
    ],
    [
      'Does it handle perishables and expiry?',
      'Yes. Expiry sits on the batch, so stock inside its expiry window surfaces by value and location with the remaining shelf life. Markdown becomes a recovery decision taken early rather than a disposal taken on the day.',
    ],
    [
      'Can it measure on-shelf availability?',
      'Listed lines are compared against stock on hand and the gaps are weighted by sales rank, so a top-100 line missing from the shelf is distinguishable from a slow line missing. An absent item makes no transaction, which is why it otherwise goes uncounted.',
    ],
    [
      'Does Verity handle supplier schemes and claims?',
      'Scheme terms are recorded against the purchases they apply to, with the supporting circular attached, so a claim is assembled from records before the window closes rather than reconstructed from memory afterwards.',
    ],
    [
      'Does it replace our billing or weighing systems?',
      'No. Those are mapped during implementation and continue to run. Verity is the operational layer over them — stock movement, suppliers, approvals, staffing and the reporting across all of it.',
    ],
    [
      'Can it work across a chain of stores?',
      'Yes. Stores, cold rooms and back-of-house are locations rolling into the business, with permissions and reporting following the same structure, so shrinkage and availability are directly comparable across sites.',
    ],
    [
      'How does it help with staffing?',
      'Shifts and attendance are records connected to the periods they covered, so hours worked can be set against baskets processed by hour rather than against a fixed template.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the store actually runs, configuration, migration of stock, suppliers and scheme terms, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the shrinkage you cannot explain.',
  ctaLede:
    'Most stores can say what the figure is and not what caused it. Tell us how yours is counted today and we will show you what explaining it looks like.',

  related: ['grocery-stores', 'retail-stores', 'convenience-stores', 'department-stores', 'distributors', 'wholesalers'],
};
