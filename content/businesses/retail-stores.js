export default {
  slug: 'retail-stores',
  status: 'published',
  plural: 'retail stores',
  subject: 'retail business',

  seo: {
    title: 'AI business management software for retail stores | Verity',
    description:
      'Verity connects stock, suppliers, customers, staff and store performance into one operational system you can ask questions of in plain language.',
    keywords: [
      'AI software for retail stores',
      'retail management software',
      'retail inventory management software',
      'multi store retail operations software',
      'business software for retailers',
    ],
  },

  hero: {
    eyebrow: 'Verity for retail',
    headline: 'The shelf says one thing. The sheet says another. The reorder is due today.',
    lede:
      'A shop is a stock position, a customer list and a day’s takings, and in most stores those three live in three places. Verity puts them on one record model with one history.',
    note: 'Runs alongside your existing billing. Nothing switches off on day one.',
    panel: {
      title: 'Store',
      meta: 'All stores · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales today', value: '₹4.86 L', note: '312 transactions' },
        { label: 'Stock value', value: '₹1.4 Cr', note: 'across 3 stores' },
        { label: 'Not moved 90d', value: '₹22 L', note: '410 lines' },
        { label: 'Below reorder', value: '37', note: 'lines, 12 fast-moving' },
      ],
      rows: [
        { name: '12 fast-moving lines below reorder point', meta: 'Two suppliers · both deliver Thursday', active: true },
        { name: '₹22 L in stock that has not moved in 90 days', meta: 'Concentrated in two categories', active: true },
        { name: 'Store 2 count differs from system by 34 units', meta: 'Since last cycle count', active: true },
        { name: 'Supplier price increase not reflected in retail', meta: '9 lines · margin down', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own stores in this shape.',
    },
  },

  overview: {
    heading: 'Retail is unusual: the thing being managed is physically present and constantly moving.',
    paragraphs: [
      'Stock arrives from suppliers, sits, sells, gets returned, gets damaged, gets written off, and has to be reordered before it runs out — usually while the person who understands the pattern is serving a customer. That is the whole business, and the difficulty is not that retailers lack data. It is that the sale, the stock movement, the purchase order and the customer’s history are recorded in four systems that do not know about each other.',
      'So the questions that decide a retail year go unanswered. Which lines are tying up money without moving. Which categories are actually carrying the store. Whether the margin on a range survived the supplier’s last price increase. Whether the customers who used to come in every fortnight still do. Each of those is answerable from records the store already creates; none of them are answerable from four disconnected systems.',
      'The second structural problem is that retail decisions are made at the counter under time pressure. A discount is given, a return is accepted, stock is moved between stores, an order is placed with whoever picks up the phone. Individually each is small. Collectively they are where a thin-margin business loses its margin, and none of them leave a record anyone reviews.',
      'Verity holds the stock, the suppliers, the customers, the staff and the transactions as connected records with one permission model and one history. The store’s own activity produces the picture, so nobody has to assemble one.',
    ],
  },

  terminology: [
    ['Lines, SKUs, categories, ranges', 'Inventory'],
    ['Sales, returns, exchanges', 'Orders'],
    ['Customers, regulars, account holders', 'Relationships'],
    ['Vendors, brands, distributors', 'Suppliers'],
    ['Floor staff, cashiers, store managers', 'People'],
    ['Discounts, returns, write-offs', 'Workflows'],
    ['Stores, stockrooms, transfers', 'Locations'],
  ],

  challengesHeading: 'The same four problems, in every store, at every size.',
  challengesLede:
    'Retail difficulties are remarkably consistent. They come from stock, price and customer information living apart from each other.',
  challenges: [
    {
      problem: 'Stock truth lives in two places',
      detail:
        'The shelf says one thing and the system says another, and nobody trusts either at the moment a reorder decision has to be made.',
      outcome:
        'Every movement — sale, return, transfer, damage, write-off — is recorded against the line, so the count and the record diverge visibly rather than silently.',
    },
    {
      problem: 'Reordering is a memory exercise',
      detail:
        'Purchasing depends on whoever has been there longest noticing that something is running low, which fails on their day off.',
      outcome:
        'Reorder points sit on the line and are checked against actual movement, so replenishment starts from a record rather than from an observation.',
    },
    {
      problem: 'Slow stock is found when the cash is needed',
      detail:
        'Capital sits in lines that stopped selling two seasons ago, and it becomes obvious only when the next buying decision has to be funded.',
      outcome:
        'Ageing is a query rather than an audit. What has not moved in sixty, ninety or a hundred and twenty days is visible while it can still be cleared.',
    },
    {
      problem: 'Margin erodes quietly',
      detail:
        'A supplier raises cost, retail price stays where it was, and the line keeps selling at a margin nobody recalculated.',
      outcome:
        'Purchase cost is recorded against the line, so cost movement against selling price is visible per line rather than discovered in the annual accounts.',
    },
    {
      problem: 'Customer history stops at the till',
      detail:
        'A repeat customer is recognised by face, not by record, so nothing happens when they stop coming in.',
      outcome:
        'Purchases attach to the customer record, so the regulars who have gone quiet become a list rather than an absence.',
    },
    {
      problem: 'A second store doubles the confusion',
      detail:
        'Two stores mean two counts, two ordering habits and no comparable numbers, and stock sits in one while the other loses the sale.',
      outcome:
        'Stores are locations rolling into the business, so availability across all of them is one view and transfers are recorded movement.',
    },
  ],

  modulesLede:
    'One system across stock, purchase, customers and staff. These are the parts a retail business works with.',
  modules: [
    {
      id: 'inventory',
      title: 'Every line, wherever it is',
      line:
        'Stock is held with supplier, cost, category, location, reorder point and state, and moves as it is received, sold, transferred, returned or written off.',
      why:
        'Inventory is where a retailer’s capital sits and where its margin is decided. Everything else in the store is downstream of knowing what is on hand.',
      example:
        'Availability across three stores in one view turns an out-of-stock at Store 1 into a transfer from Store 3 rather than a lost sale.',
    },
    {
      id: 'orders',
      title: 'Sales, returns and exchanges',
      line:
        'Transactions are records with their lines, the customer, the staff member, the discount applied and the stock they moved.',
      why:
        'The sale is the event that touches stock, margin, staff performance and customer history at once. Recorded properly, it answers all four.',
      example:
        'A return recorded against the original sale restores the stock, adjusts the day’s takings and stays on the customer’s history.',
    },
    {
      id: 'suppliers',
      title: 'Vendors, purchase and price',
      line:
        'Suppliers are relationships with their orders, deliveries, cost movement, delivery reliability and outstanding balances.',
      why:
        'Retail purchasing is frequent and rarely examined, so price creep and late delivery both pass through unnoticed.',
      example:
        'A supplier whose costs have risen nine percent over four months is visible from the purchase records, before the margin report says so.',
    },
    {
      id: 'relationships',
      title: 'Customers and regulars',
      line:
        'Customers are records with their purchases, returns, preferences, credit position and interaction history.',
      why:
        'Repeat custom is the cheapest revenue a store has and the least likely to be recorded anywhere the owner can query.',
      example:
        'Customers who bought monthly until June and not since are a list you ask for, not a pattern you happen to notice.',
    },
    {
      id: 'people',
      title: 'Floor staff, cashiers and managers',
      line:
        'Staff are modelled once, and every sale, discount, transfer and stock adjustment shows who made it.',
      why:
        'Retail performance varies sharply by individual, and so does discounting behaviour. Both need attribution before they can be discussed.',
      example:
        'Sales value, transaction count and discount rate by staff member, from the transactions themselves.',
    },
    {
      id: 'workflows',
      title: 'Discounts, returns and write-offs',
      line:
        'Discounts above a threshold, returns beyond policy, transfers and stock write-offs move through defined approval steps with a recorded reason.',
      why:
        'The decisions that cost a retailer money are made quickly at the counter, which is exactly why they need a record rather than a conversation.',
      example:
        'A discount beyond the manager’s threshold is an approval with a reason, not a judgement call nobody sees.',
    },
    {
      id: 'records',
      title: 'Product information and documents',
      line:
        'Product details, warranties, supplier agreements and invoices attach to the line or transaction they belong to.',
      why:
        'The paperwork that matters in retail is needed at the counter, months later, by whoever is on shift.',
      example:
        'A customer returns with a purchase from last year. The invoice and the warranty terms are on the same record as the sale.',
    },
    {
      id: 'locations',
      title: 'Stores, stockrooms and transfers',
      line:
        'Locations roll into the business, with stock, permissions and reporting following the same structure, and movement between them recorded.',
      why:
        'Even a single shop has a floor and a stockroom. A second store multiplies the problem without changing its shape.',
      example:
        'Sales, stock and ageing by store from one set of records rather than three spreadsheets in three formats.',
    },
    {
      id: 'intelligence',
      title: 'Reports from the day’s transactions',
      line:
        'Category performance, ageing, margin against cost movement, staff conversion and customer return rate come from the operational records.',
      why:
        'Retail reporting is usually monthly, which is far too slow for a business whose stock position changes every hour.',
      example:
        'Turnover by category against stock held, current, rather than compiled after the quarter that produced it.',
    },
    {
      id: 'ai',
      title: 'Ask the store a question',
      line:
        'Verity AI answers from your own stock, sales, supplier and customer records, only shows what the person asking can see, and can turn an answer into assigned follow-ups.',
      why:
        'A retailer’s real questions are about absence — what is not moving, who is not returning — and absence is exactly what nobody notices.',
      example:
        '"Which lines have not sold in ninety days and what are they worth?" returns four hundred and ten, and one instruction raises the clearance decision.',
    },
    {
      id: 'control',
      title: 'Who can discount, transfer and adjust',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Retail gives a lot of people the ability to move stock and change prices. Who did what should never be unanswerable.',
      example:
        'Cost price is visible to the owner and not to floor staff, and every stock adjustment carries the person and the time.',
    },
    {
      id: 'communication',
      title: 'Notes that survive the shift',
      line:
        'Comments, notifications and activity attach to the record they concern rather than living in a group chat.',
      why:
        'Store context is handed over verbally and lost the moment someone is off for two days.',
      example:
        'The note that a delivery arrived short sits on the purchase order, where whoever reconciles it will find it.',
    },
  ],

  workflowsHeading: 'What the store does anyway, recorded as it happens.',
  workflowsLede:
    'These sequences already run. In Verity each step is a state change, so the failures are visible where they occur.',
  workflows: [
    {
      name: 'Purchase to shelf',
      steps: [
        'Reorder flagged against the line from actual movement',
        'Purchase order raised against the supplier',
        'Goods received and checked against the order',
        'Stock recorded with cost, category and location',
        'Cost movement compared against current retail price',
        'Supplier delivery performance updated',
      ],
      note:
        'Checking cost against price at intake is what stops margin eroding one delivery at a time.',
    },
    {
      name: 'Sale and return',
      steps: [
        'Transaction recorded with its lines, staff member and customer',
        'Stock deducted as the sale completes',
        'Discount above threshold routed for approval',
        'Return recorded against the original transaction',
        'Stock restored or written off depending on condition',
        'Customer history updated either way',
      ],
      note:
        'A return tied to its original sale is what makes return rate measurable by line, staff member and reason.',
    },
    {
      name: 'Stock transfer between stores',
      steps: [
        'Shortfall identified at one location against demand',
        'Availability located at another store',
        'Transfer raised and approved',
        'Stock dispatched and received',
        'Both locations updated as the movement completes',
      ],
      note:
        'The transfer turns an out-of-stock into a delayed sale rather than a lost one.',
    },
    {
      name: 'Cycle count and adjustment',
      steps: [
        'Count scheduled against a category or location',
        'Physical count recorded against the system position',
        'Variances raised as exceptions with a reason',
        'Adjustments above threshold routed for approval',
        'Recurring variance patterns surfaced by line and location',
      ],
      note:
        'Counting becomes a check on the record rather than a replacement for it.',
    },
    {
      name: 'Ageing and clearance',
      steps: [
        'Lines with no movement past the threshold identified',
        'Value and category concentration reviewed',
        'Clearance or markdown decision raised for approval',
        'Markdown applied and recorded against the line',
        'Result compared against the original cost',
      ],
      note:
        'Clearing stock becomes a decision with numbers behind it rather than a reaction to a cash shortage.',
    },
    {
      name: 'Buying review',
      steps: [
        'Category performance pulled for the period',
        'Ageing and turnover compared across categories',
        'Supplier cost movement and reliability reviewed',
        'Purchase decisions raised against the gaps',
        'Decisions recorded against the lines and suppliers',
      ],
      note:
        'Buying is planned against what actually moved rather than against what felt busy.',
    },
  ],

  ai: {
    heading: 'Ask the store what it is holding.',
    lede:
      'Verity AI reads the same stock, sales, supplier and customer records the store runs on. It answers from your own business rather than from generic knowledge, and it can turn the answer into work assigned to the person who owns it.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which lines have not sold in ninety days, and what are they worth?',
      'Which fast-moving lines are below their reorder point?',
      'Which categories turned over fastest this quarter?',
      'Which supplier costs have risen without a price change on our side?',
      'Which customers bought regularly until this year and have stopped?',
      'What is the return rate by line and by reason?',
      'Which stores hold stock that another store is short of?',
      'What discount rate is each staff member running at?',
      'Summarise this month’s store performance.',
    ],
  },

  automationHeading: 'The checks that only fail when someone is busy.',
  automationLede:
    'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A line falls below its reorder point',
      steps: [
        'Reorder flagged with recent movement attached',
        'Purchase raised against the supplier who last delivered it',
        'Approval routed where the value requires it',
        'Delivery checked against the order on receipt',
      ],
    },
    {
      trigger: 'Supplier cost rises on a line',
      steps: [
        'Cost change recorded against the line',
        'Current margin recalculated against retail price',
        'Pricing review task raised where margin falls below threshold',
      ],
    },
    {
      trigger: 'A discount exceeds the threshold',
      steps: [
        'Transaction held at the approval step',
        'Routed to the manager with the reason attached',
        'Decision recorded against the sale',
      ],
    },
    {
      trigger: 'A line passes its ageing threshold',
      steps: [
        'Line flagged with its value and days without movement',
        'Clearance review task assigned to the buyer',
        'Decision recorded against the line',
      ],
    },
    {
      trigger: 'A cycle count records a variance',
      steps: [
        'Exception raised against the line and location',
        'Adjustment routed for approval above threshold',
        'Recurring variances surfaced in the next review',
      ],
    },
    {
      trigger: 'A regular customer goes quiet',
      steps: [
        'Customer flagged after a defined period without a purchase',
        'Follow-up assigned to the store that serves them',
        'Outcome recorded on the customer record',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see without compiling anything.',
  intelligenceLede:
    'All of it comes from transactions the store creates in the ordinary course of trading.',
  intelligence: [
    {
      area: 'Sales',
      points: [
        'Revenue by day, store, category and line',
        'Average transaction value and basket size',
        'Comparison against the same period historically',
        'Performance by staff member',
      ],
    },
    {
      area: 'Stock',
      points: [
        'Value held by category and location',
        'Ageing at sixty, ninety and a hundred and twenty days',
        'Turnover by category across periods',
        'Lines below reorder point',
      ],
    },
    {
      area: 'Margin',
      points: [
        'Cost movement against retail price by line',
        'Margin by category and by supplier',
        'Discounting against approval thresholds',
        'Markdown taken on cleared stock',
      ],
    },
    {
      area: 'Customers',
      points: [
        'Repeat purchase rate and frequency',
        'Regulars who have stopped buying',
        'Highest-value customers by spend',
        'Return rate by customer and by reason',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Delivery reliability against ordered dates',
        'Cost movement on repeat purchases',
        'Short and rejected deliveries',
        'Outstanding payable by supplier',
      ],
    },
    {
      area: 'Operations',
      points: [
        'Count variances by line and location',
        'Transfers between stores',
        'Approvals awaiting a decision',
        'Store comparison across the business',
      ],
    },
  ],
  intelligenceNote:
    'None of this requires separate data entry. It comes from recording the sale and the delivery, which the store does anyway.',

  rolesHeading: 'One business, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they actually need.',
  roles: [
    {
      role: 'Owner',
      question: 'Where is my money and what is it doing?',
      focus: 'Stock value and ageing, margin by category, sales against last year, store comparison.',
    },
    {
      role: 'Store manager',
      question: 'What needs fixing today?',
      focus: 'Lines below reorder, count variances, approvals pending, staff on floor, transfers due.',
    },
    {
      role: 'Buyer',
      question: 'What should I be ordering?',
      focus: 'Turnover by category, ageing, supplier cost movement and reliability, open purchase orders.',
    },
    {
      role: 'Floor staff',
      question: 'What do we have and what does this customer want?',
      focus: 'Availability across stores, customer purchase history, warranties, open returns.',
    },
    {
      role: 'Accounts',
      question: 'What came in and what is owed?',
      focus: 'Daily takings, supplier payables, customer credit, write-offs and discounts approved.',
    },
  ],

  useCasesHeading: 'What retailers use Verity for',
  useCases: [
    {
      name: 'Stock accuracy and movement',
      body: 'Every sale, return, transfer, damage and write-off recorded against the line, so the count and the record diverge visibly instead of silently.',
    },
    {
      name: 'Replenishment',
      body: 'Reorder points checked against actual movement, so purchasing starts from a record rather than from someone noticing an empty shelf.',
    },
    {
      name: 'Stock ageing and clearance',
      body: 'What has not moved in sixty, ninety or a hundred and twenty days, by value and category, while it can still be cleared profitably.',
    },
    {
      name: 'Margin protection',
      body: 'Purchase cost recorded against the line, so supplier price movement against retail price is visible per line rather than in the annual accounts.',
    },
    {
      name: 'Multi-store availability and transfers',
      body: 'One view of stock across every store, with transfers as recorded movement, so a shortfall at one becomes a sale rather than a loss.',
    },
    {
      name: 'Customer retention',
      body: 'Purchase history on the customer record, so regulars who have stopped coming are a worked list.',
    },
    {
      name: 'Discount and return control',
      body: 'Decisions taken at the counter carried as approvals with reasons, so the small things that cost margin are visible.',
    },
    {
      name: 'Staff performance',
      body: 'Sales value, transactions and discount rate attributed to the person who made them.',
    },
    {
      name: 'Asking the store questions',
      body: 'Plain-language questions across stock, sales, suppliers and customers at once, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your billing software, the stock sheet and whatever accounting you run are mapped during implementation. Stock, suppliers, customers and open balances are brought across, and Verity is introduced as the operational layer over them while the store keeps trading.',

  faqHeading: 'Questions retailers ask',
  faqs: [
    [
      'What can AI software do for a retail store?',
      'Verity AI answers questions from your own stock, sales, supplier and customer records. You can ask which lines have not sold in ninety days and what they are worth, which fast-moving lines are below reorder, which supplier costs have risen without a price change on your side, or which regulars have stopped buying — and turn the answer into work assigned to the person who owns it.',
    ],
    [
      'Does Verity replace our billing software?',
      'No. Verity is introduced as an operational layer over what you already run. Your billing setup is mapped during implementation and continues to work while Verity takes over stock, purchasing, customers, approvals and the reporting across them.',
    ],
    [
      'Can it track stock across several stores?',
      'Yes. Stores and stockrooms are locations that roll into the business, so availability across all of them is one view and transfers between them are recorded movement. A shortfall at one store can be answered from another rather than becoming a lost sale.',
    ],
    [
      'How does it help with slow-moving stock?',
      'Movement is recorded against every line, so ageing is a query rather than an audit. What has not moved in sixty, ninety or a hundred and twenty days is visible by value and category while there is still time to clear it profitably.',
    ],
    [
      'Can Verity show whether margin is holding?',
      'Purchase cost is recorded against each line, so cost movement can be compared with the current retail price per line. A supplier increase that was never reflected in your pricing shows up as a margin exception rather than in the annual accounts.',
    ],
    [
      'Does it track customers?',
      'Purchases, returns, preferences and credit position sit on the customer record, so repeat rate is measurable and regulars who have gone quiet become a list you can ask for rather than a pattern someone happens to notice.',
    ],
    [
      'Can we control who sees cost and margin?',
      'Verity has one permission model across every record, so cost and margin can be visible to the owner and accounts while floor staff see availability, customer history and product information.',
    ],
    [
      'Is Verity suitable for a single shop?',
      'A single shop already has a floor and a stockroom, a supplier list, a customer base and discount decisions taken at the counter. Those are the parts Verity handles. Additional stores use the same structure without further setup.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the store actually runs, configuration, migration of stock, suppliers and customers, then an ongoing operations partnership rather than a handover.',
    ],
  ],

  ctaHeading: 'Start with the stock that stopped moving.',
  ctaLede:
    'It is usually the fastest money in a retail business and the hardest thing to see today. Tell us how your store runs and we will show you.',

  related: ['supermarkets', 'fashion-stores', 'electronics-stores', 'jewellery-stores', 'furniture-stores', 'cosmetics-stores'],
};
