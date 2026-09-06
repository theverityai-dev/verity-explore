export default {
  slug: 'hardware-stores',
  status: 'published',
  plural: 'hardware stores',
  subject: 'hardware store',

  seo: {
    title: 'AI business management software for hardware stores | Verity',
    description:
      'Verity connects a very large SKU count, trade credit accounts, break-bulk selling, low-value line management and supplier terms into one operational system.',
    keywords: [
      'AI software for hardware stores',
      'hardware store management software',
      'trade credit and counter account tracking',
      'large SKU count inventory software',
    ],
  },

  hero: {
    eyebrow: 'Verity for hardware retail',
    headline: 'Eleven thousand lines, most of them worth twenty rupees, and the ones that matter are always out.',
    lede:
      'A hardware store carries enormous range at low value and lives on trade customers who buy on credit. Verity manages the range that matters and the accounts that fund it.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Store',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Lines carried', value: '11,400', note: '₹68 L at cost' },
        { label: 'Trade credit', value: '₹22 L', note: '96 accounts' },
        { label: 'No sale 180d', value: '3,140 lines', note: '₹14 L held' },
        { label: 'Top-line stockouts', value: '38', note: 'this week' },
      ],
      rows: [
        { name: '38 fast-moving lines out of stock this week', meta: 'Trade customers go elsewhere for the whole list', active: true },
        { name: '₹22 L on trade credit, ₹6 L beyond 60 days', meta: 'Contractors with ongoing purchases', active: true },
        { name: '3,140 lines with no sale in six months', meta: 'Range carried out of habit', active: true },
        { name: 'Break-bulk sales not deducting from bulk stock', meta: 'Count drift on 9 categories', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'The range is enormous, the values are small, and the customers buy lists.',
    paragraphs: [
      'A hardware store carries thousands of lines that individually are worth very little and collectively are the reason customers come. Nobody visits for one washer; they visit because the store has the washer, the bracket and the sealant. That makes range the proposition and stockouts unusually expensive — a trade customer who cannot complete their list at your counter completes it at someone else’s, including the items you did have.',
      'The second fact is that the range cannot be managed uniformly. Three thousand lines with no sale in six months are carried out of habit, and among eleven thousand lines nobody can tell habit from deliberate service range without movement data.',
      'The third is trade credit. Contractors and tradespeople buy repeatedly on account, and the exposure grows quietly while purchases continue. Six lakh beyond sixty days across accounts that are still buying is a risk nobody has priced.',
      'The fourth is break-bulk. Product bought in bulk and sold by length, weight or unit produces a gap between purchase and sale that never reconciles unless both are recorded in the same units.',
      'Verity manages the range that moves, the accounts that fund the store, and the break-bulk lines that drift.',
    ],
  },

  terminology: [
    ['Lines, SKUs, bulk and break-bulk', 'Inventory'],
    ['Counter sales, trade orders, returns', 'Orders'],
    ['Trade accounts, contractors, retail customers', 'Relationships'],
    ['Distributors, manufacturers, agents', 'Suppliers'],
    ['Counter staff, storekeepers', 'People'],
    ['Credit limits, approvals, write-offs', 'Workflows'],
    ['Shop, godown, racks', 'Locations'],
  ],

  challengesHeading: 'Range, credit and drift.',
  challengesLede:
    'Hardware difficulties come from managing eleven thousand lines with one discipline and extending credit without a limit anyone checks.',
  challenges: [
    { problem: 'A stockout loses the whole list', detail: 'A trade customer unable to complete their purchase goes elsewhere for all of it, including what you had.', outcome: 'Availability is tracked specifically on the fast-moving lines that appear in most lists.' },
    { problem: 'Habit range is indistinguishable from service range', detail: 'Some slow lines exist to complete a customer’s list; others are simply never reviewed.', outcome: 'Movement and basket association are recorded, so a line carried for service is distinguishable from one carried by inertia.' },
    { problem: 'Trade credit grows while purchases continue', detail: 'A contractor keeps buying while their balance ages, and nobody checks at the counter.', outcome: 'Exposure and ageing sit on the account, checked when the next purchase is made.' },
    { problem: 'Break-bulk never reconciles', detail: 'Bulk purchased in one unit and sold in another produces drift that becomes an unexplained stocktake variance.', outcome: 'Purchase and sale units are recorded against the same line, so conversion is explicit and the gap is isolated.' },
    { problem: 'Low-value lines absorb high-cost attention', detail: 'Ordering, counting and pricing effort is spread evenly across lines worth twenty rupees and lines worth two thousand.', outcome: 'Review effort is directed by movement and value rather than applied uniformly.' },
    { problem: 'Supplier terms differ by line and are forgotten', detail: 'Different distributors supply overlapping ranges on different terms, and orders go to whoever is called first.', outcome: 'Terms sit on the line, so ordering follows the best available source rather than habit.' },
  ],

  modulesLede: 'One system across a very large range, trade credit and bulk conversion.',
  modules: [
    { id: 'inventory', title: 'Lines, bulk and break-bulk', line: 'Stock is held per line with purchase and sale units, conversion, cost, movement rate and location.', why: 'Selling in different units from those purchased is where hardware stock quietly drifts.', example: 'Bulk purchased by length and sold by metre, reconciled through a recorded conversion.' },
    { id: 'relationships', title: 'Trade accounts and contractors', line: 'Accounts carry their credit limit, balance, ageing, purchase history and contact record.', why: 'Trade credit is the store’s largest exposure and its most valuable customer relationship at once.', example: 'Six lakh beyond sixty days across accounts still purchasing weekly.' },
    { id: 'orders', title: 'Counter sales and trade orders', line: 'Transactions record their lines, units, customer, account and staff member, including items requested and not available.', why: 'Recording an unfilled request is the only way a stockout appears anywhere.', example: 'Thirty-eight fast lines out of stock, measured as incomplete lists rather than missing items.' },
    { id: 'suppliers', title: 'Distributors and manufacturers', line: 'Suppliers carry the lines they supply, terms, prices, delivery reliability and balances.', why: 'Overlapping ranges from several sources mean the best source is a per-line fact.', example: 'The preferred supplier and price for a line, on the line itself.' },
    { id: 'workflows', title: 'Credit limits, approvals and write-offs', line: 'Credit beyond limit, price exceptions and write-offs move through approval steps with recorded reasons.', why: 'The decisive decisions happen at a busy counter under relationship pressure.', example: 'A sale that would take an account past its limit held for approval.' },
    { id: 'people', title: 'Counter staff and storekeepers', line: 'Staff are modelled once, and every sale, credit entry and adjustment carries who made it.', why: 'Credit extension and pricing discretion both sit at the counter.', example: 'Credit extended and discounts given by staff member.' },
    { id: 'intelligence', title: 'Range, credit and drift reporting', line: 'Movement by line, basket association for slow lines, credit exposure and ageing, break-bulk variance and supplier price movement come from the records.', why: 'With eleven thousand lines, judgement has to be directed by data rather than applied evenly.', example: 'Slow lines separated into those that complete baskets and those that do not.' },
    { id: 'ai', title: 'Ask the counter a question', line: 'Verity AI answers from your own stock, account and supplier records, respects permissions, and can create assigned follow-ups.', why: 'Nobody can hold eleven thousand lines and ninety-six accounts in their head.', example: '"Which fast lines are out of stock?" returns thirty-eight with orders raised.' },
    { id: 'locations', title: 'Shop, godown and racks', line: 'Locations roll into the business with stock and reporting following the same structure.', why: 'Finding stock in a large range is a real operational cost.', example: 'Rack location on the line, so counter staff can find it.' },
    { id: 'control', title: 'Who can extend credit and adjust', line: 'One permission model and one audit trail across every record.', why: 'Credit and stock adjustment are where a hardware store loses money quietly.', example: 'Every credit extension and adjustment carrying the person and reason.' },
    { id: 'records', title: 'Specifications and substitutes', line: 'Line specifications, equivalents and substitutes attach to the line.', why: 'Hardware customers accept substitutes if staff know what is equivalent.', example: 'An equivalent line surfaced when the requested one is out of stock.' },
    { id: 'communication', title: 'What was promised to a trade account', line: 'Notes, commitments and contact attach to the account they concern.', why: 'Trade relationships run on informal commitments about price and availability.', example: 'A price agreed for a contractor’s project, recorded on their account.' },
  ],

  workflowsHeading: 'Range, credit and the counter.',
  workflowsLede: 'These already happen. Recorded, eleven thousand lines become manageable.',
  workflows: [
    { name: 'Fast-line availability', steps: ['Lines ranked by frequency of appearance in transactions', 'Availability checked on the top ranks specifically', 'Reorder raised against the best source', 'Unfilled requests recorded where noticed', 'Repeat stockouts escalated in ordering discipline'], note: 'A stockout on a frequently requested line costs the whole basket, not the item.' },
    { name: 'Range review', steps: ['Movement pulled across all lines', 'Slow lines checked for basket association', 'Service range separated from habit range', 'Delist decisions taken on the remainder', 'Space and capital released'], note: 'Some slow lines earn their place by completing baskets; most do not, and only the data separates them.' },
    { name: 'Trade credit at the counter', steps: ['Account identified when the sale is rung up', 'Balance and ageing checked against the limit', 'Sale released or held for approval', 'Balance updated and aged from the bill', 'Follow-up assigned as terms pass'], note: 'Checking at the counter is the only place the decision can prevent anything.' },
    { name: 'Break-bulk conversion', steps: ['Bulk purchased and recorded in its purchase unit', 'Conversion to sale unit recorded on the line', 'Sales deducted in sale units through the conversion', 'Variance isolated against recorded wastage', 'Pattern reviewed by line'], note: 'Without an explicit conversion, break-bulk drift is indistinguishable from theft.' },
    { name: 'Sourcing decision', steps: ['Lines with several possible suppliers identified', 'Prices and delivery reliability compared', 'Preferred source recorded on the line', 'Orders placed against it', 'Terms reviewed periodically'], note: 'Ordering from whoever is called first is how price advantage is lost across a large range.' },
  ],

  ai: {
    heading: 'Ask across eleven thousand lines.',
    lede: 'Verity AI reads the same stock, account and supplier records the store creates as it trades. It answers from your own range, respects permissions, and can turn an answer into ordering and collection.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which frequently requested lines are out of stock?',
      'Which slow lines complete baskets and which do not?',
      'Which trade accounts are past terms and still purchasing?',
      'Where is break-bulk variance largest?',
      'Which lines could be sourced cheaper from another supplier?',
      'What is credit exposure by account against limits?',
      'Which lines have not sold in six months?',
      'Which equivalents can we offer for lines that are out?',
      'Summarise range productivity and credit exposure.',
    ],
  },

  automationHeading: 'The checks at a busy counter.',
  automationLede: 'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A frequently requested line falls below reorder', steps: ['Flagged with request frequency', 'Order raised against the preferred source', 'Unfilled requests recorded meanwhile'] },
    { trigger: 'A trade account would exceed its limit', steps: ['Sale held at the approval step', 'Balance and ageing attached', 'Decision recorded against the account'] },
    { trigger: 'A balance passes its terms', steps: ['Aged on the account with purchase history', 'Follow-up assigned', 'Escalated while purchases continue'] },
    { trigger: 'Break-bulk variance exceeds tolerance', steps: ['Line flagged with conversion and recorded wastage', 'Check assigned', 'Pattern surfaced if it repeats'] },
    { trigger: 'A line passes its no-sale threshold', steps: ['Basket association checked', 'Delist or retain decision raised', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the owner can see across the range.',
  intelligenceLede: 'Movement, credit and conversion from the counter’s own transactions.',
  intelligence: [
    { area: 'Range', points: ['Movement and request frequency by line', 'Slow lines with and without basket association', 'Capital held in non-moving range', 'Delist outcomes'] },
    { area: 'Availability', points: ['Stockouts on frequently requested lines', 'Unfilled requests recorded', 'Cover in days by line rank', 'Substitutes offered and accepted'] },
    { area: 'Credit', points: ['Exposure by account against limits', 'Ageing bands', 'Accounts purchasing while overdue', 'Collection outcomes'] },
    { area: 'Stock accuracy', points: ['Break-bulk variance by line', 'Recorded wastage against unexplained gap', 'Adjustments by person', 'Count variance by category'] },
    { area: 'Supply', points: ['Price by line across suppliers', 'Delivery reliability', 'Margin by line and category', 'Outstanding payable'] },
  ],
  intelligenceNote: 'All of it comes from recording the sale, the account and the delivery, which the counter does anyway.',

  rolesHeading: 'A busy counter, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'What is the range earning and who owes me?', focus: 'Movement across lines, capital in dead range, credit exposure and ageing, supplier prices.' },
    { role: 'Counter staff', question: 'Do we have it and can they take it on account?', focus: 'Availability and rack location, equivalents, account balance and limit.' },
    { role: 'Storekeeper', question: 'What needs ordering and where does it go?', focus: 'Fast lines below reorder, deliveries to check, break-bulk conversions, rack locations.' },
  ],

  useCasesHeading: 'What hardware stores use Verity for',
  useCases: [
    { name: 'Fast-line availability', body: 'Availability tracked on the lines that appear most often in baskets, because a stockout there loses the entire list.' },
    { name: 'Range rationalisation', body: 'Slow lines separated into those that complete baskets and those carried by habit, across a range too large to review by judgement.' },
    { name: 'Trade credit at the counter', body: 'Balance and ageing checked when the next purchase is made rather than at month end.' },
    { name: 'Break-bulk conversion', body: 'Purchase and sale units recorded with an explicit conversion, so drift is isolated from theft.' },
    { name: 'Per-line sourcing', body: 'Preferred supplier and price recorded on the line, so ordering follows the best source rather than the first call.' },
    { name: 'Substitutes at the counter', body: 'Equivalent lines surfaced when the requested one is unavailable, keeping the basket.' },
    { name: 'Asking across the range', body: 'Plain-language questions across stock, accounts and suppliers, with orders and follow-ups raised in the same step.' },
  ],

  migration: 'Your billing setup continues and is mapped during implementation. Lines, conversions, trade accounts with balances and supplier terms are brought across, and Verity is configured around the way the counter already works.',

  faqHeading: 'Questions hardware retailers ask',
  faqs: [
    ['What can AI software do for a hardware store?', 'Verity AI answers questions from your own stock, account and supplier records: which frequently requested lines are out of stock, which slow lines complete baskets, which trade accounts are past terms and still purchasing, where break-bulk variance is largest. Each answer can become an order or a collection follow-up.'],
    ['How do you manage eleven thousand lines?', 'By directing attention rather than spreading it. Movement and request frequency rank the range, so availability discipline concentrates on the lines that appear in most baskets and review effort concentrates on the capital sitting still.'],
    ['Why does a stockout cost more here?', 'Because customers buy lists. A trade customer who cannot complete their purchase goes elsewhere for all of it, including the items you did have, and that loss leaves no transaction behind.'],
    ['Can it control trade credit?', 'Account balance, ageing and limit are checked at the counter when the next purchase is made, so a sale that would take an account past its limit is held for approval rather than discovered when the ledger is reviewed.'],
    ['What is break-bulk drift?', 'Stock purchased in one unit and sold in another — by length, weight or piece — produces a gap unless the conversion is recorded explicitly. Without it the variance is indistinguishable from theft and nothing can be done about either.'],
    ['Does it help with sourcing?', 'Preferred supplier, price and delivery reliability sit on the line, so ordering across overlapping ranges follows the best available source rather than whoever was called first.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds the range, the accounts, the conversions, the suppliers and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the range and credit practice, configuration of units and conversions, migration of lines and account balances, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the fast lines that keep going out.',
  ctaLede: 'Each one costs a whole basket. Tell us how availability is tracked today.',

  related: ['auto-parts-stores', 'building-material-suppliers', 'retail-stores', 'industrial-suppliers', 'convenience-stores', 'contractors'],
};
