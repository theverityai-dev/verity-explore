export default {
  slug: 'bookstores',
  status: 'published',
  plural: 'bookstores',
  subject: 'bookstore',

  seo: {
    title: 'AI business management software for bookstores | Verity',
    description:
      'Verity connects long-tail stock, publisher returns, special orders, institutional accounts and events into one operational system for bookshops.',
    keywords: [
      'AI software for bookstores',
      'bookstore management software',
      'bookshop inventory and returns software',
      'special order and institutional account tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for bookstores',
    headline: 'Most of your stock sells once a year. That is not a mistake — it is the shop.',
    lede:
      'A bookshop holds thousands of titles that each sell rarely, funded partly by publisher returns. Verity tracks the tail, the returns window and the special orders that hold the relationship together.',
    note: 'Sized for an independent shop, not a chain warehouse.',
    panel: {
      title: 'Shop',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹7.8 L', note: '1,840 units' },
        { label: 'Titles held', value: '11,400', note: '₹34 L at cost' },
        { label: 'Returnable now', value: '₹2.6 L', note: 'inside publisher windows' },
        { label: 'Special orders open', value: '38', note: '9 past promised date' },
      ],
      rows: [
        { name: '9 special orders past the date the customer was given', meta: 'Four awaiting publisher dispatch', active: true },
        { name: '₹2.6 L returnable, windows closing within 30 days', meta: 'Three publishers', active: true },
        { name: 'School account order due for term start', meta: '640 units · not yet confirmed', active: true },
        { name: 'Event stock unreconciled from last reading', meta: '52 units out', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own shop in this shape.',
    },
  },

  overview: {
    heading: 'A bookshop is a long tail funded by a returns window.',
    paragraphs: [
      'Most retail categories make money by turning stock over. A bookshop cannot: it holds thousands of titles, the majority of which will sell once or twice a year, because the breadth is the reason customers come. The economics only work because a large part of that stock is returnable to the publisher within a window, so unsold breadth is recoverable rather than a write-off.',
      'That makes the returns window the single most important date in the business, and it is almost always tracked informally. Stock that passes it stops being recoverable and becomes dead capital in a business that does not have much capital to spare.',
      'The second thing holding a bookshop together is the special order. A customer asks for something not in stock, the shop orders it, and the customer comes back for it. That transaction is the whole relationship in miniature — and it is usually recorded on a slip of paper, with a promised date nobody tracks and a publisher lead time nobody measures.',
      'The third is institutional business. School, college and library accounts order in bulk against term dates, on credit, with lists that arrive late and change. That revenue is lumpy, predictable in timing and easy to under-serve.',
      'Verity holds the title, the returns window, the special order, the institutional account and the event stock as connected records, so a shop with two people can run breadth without losing track of it.',
    ],
  },

  terminology: [
    ['Titles, editions, categories', 'Inventory'],
    ['Sales, special orders, returns', 'Orders'],
    ['Customers, members, institutions', 'Relationships'],
    ['Publishers, distributors, reps', 'Suppliers'],
    ['Events, readings, stock takes', 'Work'],
    ['Returns windows, credit terms, approvals', 'Workflows'],
    ['Shop floor, store, event stock', 'Locations'],
  ],

  challengesHeading: 'Breadth is the product, and breadth is hard to hold.',
  challengesLede:
    'A bookshop’s problems come from carrying thousands of slow-moving lines with a small team and thin working capital.',
  challenges: [
    {
      problem: 'Returns windows close unnoticed',
      detail:
        'Unsold stock is returnable to the publisher for a limited period, and the period is tracked in someone’s head across dozens of publishers with different terms.',
      outcome:
        'Return eligibility sits on the stock with the publisher’s terms, so returnable value and closing windows are a current number.',
    },
    {
      problem: 'Special orders are slips of paper',
      detail:
        'A customer’s order is written down, placed with a distributor, and its status is known only when the customer calls to ask.',
      outcome:
        'A special order is work with a customer, a title, a supplier, a promised date and a state.',
    },
    {
      problem: 'The tail is unmanaged rather than deliberate',
      detail:
        'Slow stock is the point of the shop, but there is no way to tell deliberate breadth from stock that simply never sold and never went back.',
      outcome:
        'Ageing by category and by publisher, alongside return eligibility, separates chosen breadth from accumulated dead stock.',
    },
    {
      problem: 'Institutional orders arrive as a scramble',
      detail:
        'A school list arrives close to term start, changes twice, and is fulfilled under time pressure on credit with no record of what was agreed.',
      outcome:
        'Institutional accounts are records with their lists, order history, credit terms and term timing.',
    },
    {
      problem: 'Event stock does not come back',
      detail:
        'Stock taken to a reading or a fair is reconciled loosely, and the difference disappears into general shrinkage.',
      outcome:
        'Event stock is a location, so what went out, what sold and what returned reconciles against records.',
    },
  ],

  modulesLede:
    'One system across titles, returns, special orders and accounts. Sized for a small team.',
  modules: [
    {
      id: 'inventory',
      title: 'Titles, editions and return eligibility',
      line:
        'Stock is held per title and edition with publisher, cost, category, location, age and return eligibility against the supplier’s terms.',
      why:
        'The returns window is the mechanism that makes carrying breadth affordable, and it only works if it is attached to the stock.',
      example:
        'Two point six lakh of returnable stock with windows closing inside thirty days, by publisher.',
    },
    {
      id: 'orders',
      title: 'Sales, special orders and returns',
      line:
        'Transactions record their titles, the customer and the staff member; special orders carry a supplier, a promised date and a state; returns record what went back to which publisher.',
      why:
        'The special order is the highest-value transaction in a bookshop because it is the one the customer remembers.',
      example:
        'Thirty-eight special orders open, nine past the date the customer was given, four of them waiting on a publisher.',
    },
    {
      id: 'suppliers',
      title: 'Publishers and distributors',
      line:
        'Suppliers are relationships with their terms, return windows, lead times, delivery reliability, credit notes and balances.',
      why:
        'Publisher terms differ substantially, and the difference between them is most of a bookshop’s working capital position.',
      example:
        'A distributor whose special orders take three weeks against another’s ten days changes what the counter should promise.',
    },
    {
      id: 'relationships',
      title: 'Customers, members and institutions',
      line:
        'Customers are records with their purchases, interests, special orders, credit position and history; institutions carry their lists and term timing.',
      why:
        'A bookshop’s regulars have identifiable interests, and its institutional accounts have predictable, dateable demand.',
      example:
        'A school account that orders before every term start is a planned conversation rather than an annual scramble.',
    },
    {
      id: 'work',
      title: 'Events, readings and stock takes',
      line:
        'Events and periodic stock work are records with owners, dates, stock allocations and outcomes.',
      why:
        'Events are a real revenue line and the place stock most reliably goes missing.',
      example:
        'Fifty-two units out at a reading, reconciled against sales and returns rather than absorbed.',
    },
    {
      id: 'workflows',
      title: 'Returns, credit terms and approvals',
      line:
        'Publisher returns, institutional credit, discounts and write-offs move through defined steps with recorded decisions.',
      why:
        'Returns and institutional credit are the two decisions that most affect a bookshop’s cash position.',
      example:
        'A return raised against a publisher inside its window, approved and recorded against the credit note received.',
    },
    {
      id: 'people',
      title: 'Booksellers and the owner',
      line:
        'Staff are modelled once, and every sale, special order, return and event carries who handled it.',
      why:
        'In a two- or three-person shop, ownership of a promised special order is the whole difference between kept and forgotten.',
      example:
        'Special orders by owner and their on-time rate.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from the shop’s records',
      line:
        'Category performance, ageing against return eligibility, special order turnaround, institutional revenue and event outcomes come from the transactions.',
      why:
        'A bookshop owner usually knows the month’s takings and cannot easily see the returnable position, which matters more.',
      example:
        'Returnable value by publisher with closing dates, current rather than reconstructed.',
    },
    {
      id: 'ai',
      title: 'Ask the shop a question',
      line:
        'Verity AI answers from your own stock, order, publisher and customer records, respects permissions, and can create assigned follow-ups.',
      why:
        'The important questions are about dates and about specific customers, both of which are laborious to look up manually.',
      example:
        '"What is returnable with windows closing this month?" returns the list by publisher, with the returns raised.',
    },
    {
      id: 'records',
      title: 'Institutional lists and publisher terms',
      line:
        'Lists, terms, credit agreements and correspondence attach to the account or supplier they belong to.',
      why:
        'A disputed institutional order is settled by the list that was agreed, which is usually an email nobody kept.',
      example:
        'A school’s term list and the order placed against it are on the same account record.',
    },
    {
      id: 'communication',
      title: 'What the customer asked for',
      line:
        'Notes, reminders and activity attach to the customer or order they concern.',
      why:
        'A customer’s stated interest is the best possible reason to contact them when something arrives.',
      example:
        'A recorded interest in a subject area surfaces when a relevant title comes in.',
    },
    {
      id: 'control',
      title: 'Who can discount and write off',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'On bookshop margins, discretionary discounting and unrecorded write-offs are material.',
      example:
        'Institutional discounts beyond terms become approvals with the account history attached.',
    },
  ],

  workflowsHeading: 'The sequences that keep a bookshop solvent.',
  workflowsLede:
    'These already happen. As records they stop depending on one person’s memory of dozens of publisher terms.',
  workflows: [
    {
      name: 'Special order',
      steps: [
        'Customer request recorded against their record with the title',
        'Supplier chosen against measured lead times',
        'Order placed and promised date set from that lead time',
        'Progress tracked and the customer updated on slippage',
        'Arrival recorded and the customer notified',
        'Collection completed or the title returned to stock',
      ],
      note:
        'A promised date based on a measured lead time is one the shop can keep.',
    },
    {
      name: 'Publisher return',
      steps: [
        'Stock inside its return window identified by publisher',
        'Sell-through and category value reviewed',
        'Return raised and approved against the publisher’s terms',
        'Stock dispatched and the return recorded',
        'Credit note received and applied to the balance',
      ],
      note:
        'This is the mechanism that makes breadth affordable, and it is entirely a matter of dates.',
    },
    {
      name: 'Institutional order',
      steps: [
        'List received and attached to the account record',
        'Availability checked and shortfalls ordered',
        'Order confirmed with the account against agreed terms',
        'Fulfilment tracked against the term date',
        'Invoice raised and credit position updated',
        'Collection follow-up assigned as terms fall due',
      ],
      note:
        'Term dates are known a year ahead, which makes this the most plannable revenue in the shop.',
    },
    {
      name: 'Event stock',
      steps: [
        'Stock allocated to the event as a location',
        'Sales at the event recorded against that location',
        'Returned stock received back and reconciled',
        'Difference recorded with a reason',
        'Event outcome compared against the stock committed',
      ],
      note:
        'Events stop contributing an unexplained figure to shrinkage.',
    },
    {
      name: 'Category and tail review',
      steps: [
        'Ageing pulled by category and publisher',
        'Return eligibility checked against the ageing',
        'Deliberate breadth separated from dead stock',
        'Returns raised where eligible, clearance where not',
        'Buying adjusted against the evidence',
      ],
      note:
        'Breadth should be a choice. This is what makes it one.',
    },
  ],

  ai: {
    heading: 'Ask about dates and about people.',
    lede:
      'Verity AI reads the same stock, order, publisher and customer records the shop creates as it trades. It answers from your own bookshop, only shows what the person asking can see, and can turn the answer into work assigned to whoever is on.',
    panelMeta: 'Grounded in your shop records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is returnable now, and which windows close within thirty days?',
      'Which special orders are past the date the customer was given?',
      'Which distributors have the longest actual lead times?',
      'Which categories have the most stock past return eligibility?',
      'Which institutional accounts order before term start, and when is the next one?',
      'What is outstanding on institutional credit, and for how long?',
      'Which customers have recorded interests matching this week’s arrivals?',
      'How did the last event perform against the stock committed to it?',
      'Summarise the returnable position and open special orders.',
    ],
  },

  automationHeading: 'The dates a small team cannot hold in their heads.',
  automationLede:
    'Each runs from the shop’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A return window approaches its close',
      steps: [
        'Eligible stock flagged by publisher with value and closing date',
        'Return review assigned',
        'Return raised, dispatched and the credit tracked',
      ],
    },
    {
      trigger: 'A special order passes its promised date',
      steps: [
        'Order flagged with its supplier and state',
        'Customer update task assigned',
        'Escalated where the supplier is the delay',
      ],
    },
    {
      trigger: 'A term start approaches for an institutional account',
      steps: [
        'Account flagged with last year’s order for reference',
        'Follow-up assigned to confirm this year’s list',
        'Availability checked and shortfalls ordered',
      ],
    },
    {
      trigger: 'Stock passes its return eligibility',
      steps: [
        'Title flagged as no longer returnable with its value',
        'Clearance decision raised',
        'Buying pattern noted for the category review',
      ],
    },
    {
      trigger: 'An institutional balance passes its terms',
      steps: [
        'Balance aged on the account record',
        'Collection follow-up assigned',
        'Escalated with the order history attached',
      ],
    },
    {
      trigger: 'Event stock is not reconciled',
      steps: [
        'Outstanding allocation flagged against the event',
        'Reconciliation task assigned',
        'Difference recorded with a reason',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see about a long tail.',
  intelligenceLede:
    'Drawn from sales, returns and orders the shop already records.',
  intelligence: [
    {
      area: 'Stock',
      points: [
        'Titles and value held by category and publisher',
        'Ageing against return eligibility',
        'Returnable value with closing windows',
        'Stock past eligibility and its value',
      ],
    },
    {
      area: 'Special orders',
      points: [
        'Open orders by state and age',
        'On-time rate against promised dates',
        'Supplier lead times, quoted against actual',
        'Uncollected arrivals',
      ],
    },
    {
      area: 'Accounts',
      points: [
        'Institutional revenue by account and term',
        'Outstanding credit with ageing',
        'List fulfilment against what was agreed',
        'Repeat ordering patterns by term',
      ],
    },
    {
      area: 'Sales',
      points: [
        'Revenue by category and period',
        'Average basket and units per sale',
        'Customer repeat rate',
        'Event revenue against stock committed',
      ],
    },
    {
      area: 'Publishers',
      points: [
        'Sell-through by publisher',
        'Return volume and credit received',
        'Delivery reliability on special orders',
        'Outstanding payable',
      ],
    },
  ],
  intelligenceNote:
    'The shop does not gain an administrator. Recording the sale, the special order and the return produces all of this.',

  rolesHeading: 'A small shop, three real jobs.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What is returnable and what is dead?',
      focus: 'Returnable value and closing windows, ageing past eligibility, category performance, institutional revenue.',
    },
    {
      role: 'Bookseller',
      question: 'What did this customer ask for?',
      focus: 'Special orders by state, customer interests and history, arrivals to notify, availability.',
    },
    {
      role: 'Whoever handles accounts',
      question: 'What is owed and by which institution?',
      focus: 'Institutional balances and ageing, credit notes from publishers, supplier payables.',
    },
  ],

  useCasesHeading: 'What bookshops use Verity for',
  useCases: [
    {
      name: 'Return window tracking',
      body: 'Return eligibility on the stock against each publisher’s terms, so returnable value and closing windows are a current number rather than a memory.',
    },
    {
      name: 'Special order management',
      body: 'Customer requests as work with a supplier, a promised date and a state, replacing the slip of paper the relationship currently rests on.',
    },
    {
      name: 'Managing the long tail deliberately',
      body: 'Ageing by category and publisher alongside return eligibility, separating chosen breadth from stock that simply never went back.',
    },
    {
      name: 'Institutional accounts',
      body: 'Lists, order history, credit terms and term timing on the account, turning an annual scramble into a planned conversation.',
    },
    {
      name: 'Supplier lead times',
      body: 'Quoted lead times measured against actual, so the promised date given at the counter is one the shop can keep.',
    },
    {
      name: 'Event stock reconciliation',
      body: 'Events as locations, so what went out, what sold and what came back reconciles rather than joining general shrinkage.',
    },
    {
      name: 'Customer interests',
      body: 'Recorded interests matched against arrivals, giving a specific reason to contact a regular.',
    },
    {
      name: 'Asking the shop questions',
      body: 'Plain-language questions across returns, orders, accounts and customers, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'The stock list, the special order book, the publisher terms and your billing arrangement are mapped during implementation. Titles, accounts and open special orders are brought across, and Verity is configured to fit how the shop already works.',

  faqHeading: 'Questions booksellers ask',
  faqs: [
    [
      'What can AI software do for a bookshop?',
      'Verity AI answers questions from your own stock, order, publisher and customer records: what is returnable now and which windows close within thirty days, which special orders are past the date the customer was given, which distributors have the longest actual lead times, which institutional accounts are due before term start. Each answer can become work assigned to whoever is on.',
    ],
    [
      'Can Verity track publisher return windows?',
      'Yes, and for a bookshop that is usually the highest-value part. Return eligibility sits on the stock against each publisher’s terms, so returnable value and closing dates are current rather than held across dozens of different agreements in someone’s memory.',
    ],
    [
      'Does it handle special orders?',
      'A special order is work with a customer, a title, a supplier, a promised date and a state, so its status is known without the customer having to call and ask.',
    ],
    [
      'Can it help with institutional and school accounts?',
      'Institutions are records with their lists, order history, credit terms and term timing, so ordering before a term start becomes a planned conversation rather than a scramble, and outstanding credit is aged against agreed terms.',
    ],
    [
      'Does it work for a shop with two people?',
      'That is the size it is written for. The records come from recording the sale, the special order and the return, so there is no separate data-entry job and no administrator required.',
    ],
    [
      'Does Verity replace our billing software?',
      'No. Billing continues and is mapped during implementation. Verity holds the stock, return eligibility, special orders, accounts, events and the reporting across them.',
    ],
    [
      'Can it reconcile event stock?',
      'An event is a location, so stock allocated to it, sold at it and returned from it reconciles against records rather than contributing an unexplained figure to shrinkage.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the shop trades and returns, configuration, migration of stock and accounts, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with what is still returnable.',
  ctaLede:
    'In most bookshops it is a larger number than expected, and some of it is about to stop being returnable. Tell us how you track it today.',

  related: ['gift-shops', 'retail-stores', 'schools', 'colleges', 'clothing-boutiques', 'coaching-institutes'],
};
