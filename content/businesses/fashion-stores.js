export default {
  slug: 'fashion-stores',
  status: 'published',
  plural: 'fashion stores',
  subject: 'fashion retail business',

  seo: {
    title: 'AI business management software for fashion stores | Verity',
    description:
      'Verity connects size and colour stock, season buying, markdown, returns, customer history and store performance into one operational system.',
    keywords: [
      'AI software for fashion stores',
      'fashion retail management software',
      'apparel inventory size colour matrix',
      'markdown and season buying software',
      'clothing store management system',
    ],
  },

  hero: {
    eyebrow: 'Verity for fashion retail',
    headline: 'You did not sell out of the dress. You sold out of the sizes people wear.',
    lede:
      'A fashion line is a matrix of sizes and colours, and it dies unevenly. Verity tracks stock at the level the sale actually happens, so broken size runs surface while the season can still be bought into.',
    note: 'Runs alongside your existing billing. Nothing switches off on day one.',
    panel: {
      title: 'Store',
      meta: 'All stores · Current season',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Season sell-through', value: '58%', note: 'week 7 of 12' },
        { label: 'Broken size runs', value: '84', note: 'styles missing core sizes' },
        { label: 'Return rate', value: '11.4%', note: 'up from 8.9% last season' },
        { label: 'Ageing stock', value: '₹34 L', note: 'from prior seasons' },
      ],
      rows: [
        { name: '84 styles missing M and L while stocked in XS', meta: 'Selling well; unsellable as displayed', active: true },
        { name: 'Return rate on one supplier double the store average', meta: 'Fit complaints recorded on 3 styles', active: true },
        { name: 'Prior-season stock at ₹34 L with no markdown applied', meta: 'Week 7 · discount window closing', active: true },
        { name: 'Store 3 holds sizes Store 1 is short of', meta: '26 styles · no transfer raised', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own stock in this shape.',
    },
  },

  overview: {
    heading: 'Fashion is retail where the unit of stock is not the unit of decision.',
    paragraphs: [
      'A style is not a line. It is a grid: sizes across, colours down, with wildly different velocity in each cell. A style that shows sixty percent sell-through can be entirely unsellable, because what remains is XS and XXL in the colour nobody wanted. The aggregate number says the buy worked. The matrix says it did not.',
      'That gap is the defining problem of fashion retail, and it drives the two decisions that determine the season. The first is buying: how deep to go on sizes, which colours to repeat, which suppliers to back. The second is markdown: when to discount, by how much, and on what. Both are made against a calendar that does not wait, and both are usually made on aggregate figures because the matrix is too laborious to look at manually.',
      'Returns are the third factor and the one most often absorbed. Fashion carries a return rate no other retail category tolerates, and returns are not evenly distributed — they cluster by supplier, by style and by reason. A supplier whose garments run small produces returns that look like customer indecision unless the reason is recorded.',
      'The fourth is that stock sits in the wrong store. Fashion inventory is small, transportable and highly location-sensitive: the medium that is dead at one branch is the size another branch keeps turning customers away from.',
      'Verity holds stock at size and colour level, records returns with their reason, and puts every store on one structure so the matrix, the markdown decision and the transfer are all visible from the same records.',
    ],
  },

  terminology: [
    ['Styles, sizes, colours, seasons', 'Inventory'],
    ['Sales, returns, exchanges, alterations', 'Orders'],
    ['Customers, regulars, size profiles', 'Relationships'],
    ['Brands, vendors, agents', 'Suppliers'],
    ['Floor staff, stylists, store managers', 'People'],
    ['Markdown, transfer, return authorisation', 'Workflows'],
    ['Stores, stockrooms, warehouse', 'Locations'],
  ],

  challengesHeading: 'The aggregate always looks better than the matrix.',
  challengesLede:
    'Fashion retail difficulties come from decisions taken on style-level numbers when the business runs at size and colour level.',
  challenges: [
    {
      problem: 'Sell-through hides broken size runs',
      detail:
        'A style at sixty percent looks healthy. What is left is the sizes nobody wears, and it will not sell at any price short of clearance.',
      outcome:
        'Stock is held per size and colour, so a broken run is visible as a specific gap while a repeat order can still fix it.',
    },
    {
      problem: 'Markdown timing is guessed',
      detail:
        'Discounting starts when the season feels over rather than when the sell-through curve says the remaining stock will not clear at full price.',
      outcome:
        'Sell-through against week of season is a measured curve per style, so markdown becomes a timed decision with a number behind it.',
    },
    {
      problem: 'Returns are absorbed rather than attributed',
      detail:
        'A return goes back on the rail. The reason — fit, quality, colour, changed mind — is not recorded, so a supplier whose sizing runs small looks the same as customer indecision.',
      outcome:
        'Returns carry a reason and attach to the style and supplier, so return rate becomes a supplier and style metric.',
    },
    {
      problem: 'Stock is in the wrong store',
      detail:
        'One branch turns away a customer for a medium that another branch is holding and will eventually mark down.',
      outcome:
        'Availability across stores is one view at size level, and transfers are recorded movement rather than informal favours.',
    },
    {
      problem: 'Buying repeats last season’s mistakes',
      detail:
        'Next season is bought against a general sense of what did well, because size-level performance by supplier was never assembled.',
      outcome:
        'Sell-through, markdown taken and return rate by style, colour and supplier come from the same records the season produced.',
    },
    {
      problem: 'Prior-season stock accumulates quietly',
      detail:
        'What did not clear moves to the back of the store and stops appearing in any conversation until it is a large number.',
      outcome:
        'Ageing by season is a query, so carryover is visible by value while it is still worth clearing.',
    },
  ],

  modulesLede:
    'One system across stock, buying, returns and stores. These are the parts a fashion business works with.',
  modules: [
    {
      id: 'inventory',
      title: 'Stock at size and colour',
      line:
        'Stock is held per style, size, colour, season, cost and location, and moves as it is received, sold, returned, transferred or marked down.',
      why:
        'The sale happens at size and colour level, so every decision downstream of it — repeat, transfer, markdown, clearance — has to be made there too.',
      example:
        'A style at fifty-eight percent sell-through that is out of M and L in three stores is a repeat order, not a success.',
    },
    {
      id: 'orders',
      title: 'Sales, returns and exchanges',
      line:
        'Transactions record their lines at size level, the customer, the staff member, the discount applied and the reason on any return.',
      why:
        'The return reason is the single most valuable and least recorded piece of information in fashion retail.',
      example:
        'Eleven percent return rate, of which four points are fit complaints concentrated on one supplier’s styles.',
    },
    {
      id: 'suppliers',
      title: 'Brands, vendors and agents',
      line:
        'Suppliers are relationships with their orders, delivery performance, sell-through, markdown taken, return rate and outstanding balances.',
      why:
        'Fashion buying is a series of bets on suppliers, and the evidence for the next bet is the last season’s numbers by supplier.',
      example:
        'A supplier whose styles sell well but return at twice the average is a different commercial proposition from the headline sell-through.',
    },
    {
      id: 'relationships',
      title: 'Customers and their sizes',
      line:
        'Customers are records with their purchases, sizes, preferences, returns and interaction history.',
      why:
        'Fashion has genuine repeat custom driven by fit, and knowing a customer’s size profile is what makes a call about new stock worth making.',
      example:
        'A new arrival in a customer’s size and preferred category is a specific reason to contact them rather than a broadcast.',
    },
    {
      id: 'workflows',
      title: 'Markdown, transfer and return authorisation',
      line:
        'Markdowns, inter-store transfers, returns beyond policy and write-offs move through defined approval steps with a recorded reason.',
      why:
        'Markdown is the largest discretionary decision in fashion retail and is frequently taken without any record of the reasoning.',
      example:
        'A markdown at week seven is an approval carrying the sell-through curve that justified it.',
    },
    {
      id: 'locations',
      title: 'Stores, stockrooms and warehouse',
      line:
        'Locations roll into the business, with size-level stock, permissions and reporting following the same structure.',
      why:
        'Fashion stock is highly location-sensitive, and the same size sells out at one branch while ageing at another.',
      example:
        'Twenty-six styles where one store holds what another is short of, surfaced as transfer candidates.',
    },
    {
      id: 'people',
      title: 'Floor staff and store managers',
      line:
        'Staff are modelled once, and every sale, return, discount and transfer carries who handled it.',
      why:
        'Conversion and average basket vary sharply by individual in a business built on assisted selling.',
      example:
        'Units per transaction and return rate by staff member, from the transactions themselves.',
    },
    {
      id: 'records',
      title: 'Style information, images and supplier terms',
      line:
        'Style details, images, care information and supplier agreements attach to the record they belong to.',
      why:
        'Buying, transferring and marking down all require knowing what the style actually is, months after the person who bought it moved on.',
      example:
        'A carryover style being considered for clearance carries its original cost, its images and its supplier terms.',
    },
    {
      id: 'intelligence',
      title: 'Season reporting from live records',
      line:
        'Sell-through by style, size and colour, markdown taken, return rate by reason and supplier, ageing by season and store comparison come from the operational records.',
      why:
        'Fashion decisions are weekly and the season is short. Monthly reporting arrives after the decision window has closed.',
      example:
        'Sell-through against week of season per style, current, rather than compiled after the season ended.',
    },
    {
      id: 'ai',
      title: 'Ask the season a question',
      line:
        'Verity AI answers from your own stock, sales, return and supplier records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions that matter cross the size matrix, the calendar and the supplier at once, which is why they are rarely asked.',
      example:
        '"Which styles are selling well but out of core sizes?" returns eighty-four, and one instruction raises the repeat orders.',
    },
    {
      id: 'control',
      title: 'Who can discount and transfer',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Markdown authority and transfer authority are where a fashion business’s margin is decided, often at branch level.',
      example:
        'Cost and margin visible to buyers and owners; floor staff see availability, size profiles and customer history.',
    },
    {
      id: 'communication',
      title: 'Fit and quality notes on the style',
      line:
        'Comments, notifications and activity attach to the style, supplier or customer they concern.',
      why:
        'The knowledge that a supplier’s garments run a size small exists on the shop floor and never reaches the buyer.',
      example:
        'Fit complaints recorded against a style are visible at the next buying decision rather than remembered by one manager.',
    },
  ],

  workflowsHeading: 'The season, recorded as it runs.',
  workflowsLede:
    'These already happen. Recorded at size level, they become the numbers the next buy is made on.',
  workflows: [
    {
      name: 'Season intake',
      steps: [
        'Purchase order raised against the supplier by style, size and colour',
        'Delivery received and checked against the order at size level',
        'Stock taken in with season, cost and location',
        'Allocation across stores recorded as movement',
        'Sell-through tracking begins against week of season',
      ],
      note:
        'Checking receipt at size level is what makes the sell-through curve trustworthy later.',
    },
    {
      name: 'Broken size run',
      steps: [
        'Style identified as selling with core sizes exhausted',
        'Availability checked across other stores at size level',
        'Transfer raised where stock exists elsewhere',
        'Repeat order raised against the supplier where it does not',
        'Outcome recorded against the style',
      ],
      note:
        'The window for a repeat order closes long before the season does, which is why aggregate sell-through misses it.',
    },
    {
      name: 'Markdown decision',
      steps: [
        'Sell-through compared against week of season per style',
        'Remaining stock profiled by size and colour',
        'Markdown proposed with the projected clearance',
        'Approval routed above the discretion threshold',
        'Price change recorded against the style',
        'Result compared with the original cost',
      ],
      note:
        'Markdown becomes a decision with a curve behind it rather than a reaction to a slow week.',
    },
    {
      name: 'Return and reason',
      steps: [
        'Return recorded against the original transaction and size',
        'Reason captured — fit, quality, colour, changed mind',
        'Stock restored or written off depending on condition',
        'Reason aggregated against style and supplier',
        'Buying flagged where a supplier exceeds return thresholds',
      ],
      note:
        'Without the reason a return is noise. With it, it is the earliest signal about a supplier.',
    },
    {
      name: 'Inter-store transfer',
      steps: [
        'Size-level shortfall identified at one store',
        'Holding location identified from availability',
        'Transfer raised and approved',
        'Stock dispatched and received',
        'Both locations updated at size level',
      ],
      note:
        'Transfers stop being informal favours between managers and become recorded movement.',
    },
    {
      name: 'Season review and next buy',
      steps: [
        'Sell-through, markdown and return rate pulled by style and supplier',
        'Size curve performance reviewed against what was bought',
        'Carryover value by season and category assessed',
        'Buying decisions raised against the evidence',
        'Decisions recorded against suppliers and categories',
      ],
      note:
        'The next season is bought against the last season’s matrix rather than its headline.',
    },
  ],

  ai: {
    heading: 'Ask the matrix, not the total.',
    lede:
      'Verity AI reads the same size-level stock, sales, return and supplier records the business runs on. It answers from your own stores, only shows what the person asking can see, and can turn the answer into work assigned to the buyer or the store.',
    panelMeta: 'Grounded in your season records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which styles are selling well but out of core sizes?',
      'What is sell-through by style against week of season?',
      'Which suppliers have return rates above the store average, and for what reason?',
      'Which stores hold sizes that other stores are short of?',
      'How much prior-season stock is still held, and at what value?',
      'Which colours underperformed across the season?',
      'What markdown has been taken by category so far?',
      'Which customers bought in a size and category we have just received?',
      'Summarise where the season stands.',
    ],
  },

  automationHeading: 'The signals that arrive too late to act on.',
  automationLede:
    'Each runs from the size-level records at the point the condition is met.',
  automations: [
    {
      trigger: 'A style sells out of its core sizes',
      steps: [
        'Broken run flagged with the sizes affected',
        'Availability checked across other stores',
        'Transfer or repeat order raised for the buyer',
        'Outcome recorded against the style',
      ],
    },
    {
      trigger: 'Sell-through falls behind the curve for its week of season',
      steps: [
        'Style flagged with its sell-through against plan',
        'Markdown review task assigned to the buyer',
        'Decision recorded with the projected clearance',
      ],
    },
    {
      trigger: 'A return is recorded with a fit or quality reason',
      steps: [
        'Reason attached to the style and supplier',
        'Rate recalculated against the store average',
        'Buying flagged where the supplier exceeds threshold',
      ],
    },
    {
      trigger: 'One store is short of a size another holds',
      steps: [
        'Transfer candidate surfaced with both locations',
        'Transfer raised for approval',
        'Movement recorded on completion',
      ],
    },
    {
      trigger: 'Stock passes into carryover',
      steps: [
        'Style flagged with season, value and remaining size profile',
        'Clearance review assigned',
        'Decision recorded against the style',
      ],
    },
    {
      trigger: 'A discount exceeds the threshold',
      steps: [
        'Transaction held at the approval step',
        'Routed with the reason attached',
        'Decision recorded against the sale',
      ],
    },
  ],

  intelligenceHeading: 'What the buyer and the owner can see.',
  intelligenceLede:
    'Season performance drawn from records created at the size the sale happens.',
  intelligence: [
    {
      area: 'Season',
      points: [
        'Sell-through by style against week of season',
        'Performance by colour and by size curve',
        'Carryover value by season and category',
        'Markdown taken against original cost',
      ],
    },
    {
      area: 'Stock',
      points: [
        'Availability at size and colour across stores',
        'Broken size runs on selling styles',
        'Stock ageing by season',
        'Transfers raised and completed',
      ],
    },
    {
      area: 'Returns',
      points: [
        'Return rate by style, supplier and store',
        'Reasons recorded and their distribution',
        'Returns that could not be restored to stock',
        'Return behaviour by customer',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Sell-through and markdown by supplier',
        'Return rate and fit complaints by supplier',
        'Delivery reliability against ordered dates',
        'Cost movement across repeat buys',
      ],
    },
    {
      area: 'Customers',
      points: [
        'Purchase frequency and size profile',
        'Category and colour preference',
        'Customers who have stopped buying',
        'Average basket and units per transaction',
      ],
    },
    {
      area: 'Stores',
      points: [
        'Sales and conversion by store',
        'Units per transaction by staff member',
        'Discount rate against approval thresholds',
        'Store comparison on sell-through and carryover',
      ],
    },
  ],
  intelligenceNote:
    'All of it comes from recording sales, receipts and returns at size and colour, which is the level the business already trades at.',

  rolesHeading: 'One season, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Is the season working?',
      focus: 'Sell-through against plan, markdown taken, carryover value, return rate, store comparison.',
    },
    {
      role: 'Buyer',
      question: 'What should I repeat and what should I mark down?',
      focus: 'Size-level sell-through, broken runs, supplier performance and return rate, ageing by season.',
    },
    {
      role: 'Store manager',
      question: 'What is on the floor and what is missing?',
      focus: 'Availability by size, transfer candidates, returns to process, approvals pending.',
    },
    {
      role: 'Floor staff',
      question: 'Do we have this in her size?',
      focus: 'Availability across stores at size level, customer size profile and history, alterations outstanding.',
    },
    {
      role: 'Accounts',
      question: 'What is owed and what was written down?',
      focus: 'Supplier payables, markdown and write-off approved, daily takings, return credits.',
    },
  ],

  useCasesHeading: 'What fashion retailers use Verity for',
  useCases: [
    {
      name: 'Size and colour level stock',
      body: 'Stock tracked at the level the sale happens, so a broken size run on a selling style is visible while a repeat order can still fix it.',
    },
    {
      name: 'Markdown timing',
      body: 'Sell-through measured against week of season per style, so discounting is a timed decision with a curve behind it.',
    },
    {
      name: 'Return reason capture',
      body: 'Returns carrying fit, quality, colour or changed-mind reasons attached to the style and supplier, turning noise into the earliest supplier signal.',
    },
    {
      name: 'Inter-store transfers',
      body: 'One size-level view of availability across stores, with transfers as recorded movement rather than informal favours.',
    },
    {
      name: 'Season buying evidence',
      body: 'Sell-through, markdown and return rate by supplier and colour, so the next buy is made against the last season’s matrix.',
    },
    {
      name: 'Carryover control',
      body: 'Ageing by season with remaining size profile, so prior-season stock is cleared while it is still worth clearing.',
    },
    {
      name: 'Customer size profiles',
      body: 'Purchases, sizes and preferences on the customer record, so a new arrival is a specific reason to call rather than a broadcast.',
    },
    {
      name: 'Discount and transfer control',
      body: 'Markdown and transfer authority as approvals with reasons and attribution.',
    },
    {
      name: 'Asking the season questions',
      body: 'Plain-language questions across the size matrix, calendar and supplier at once, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your billing software and the season buying sheets are mapped during implementation. Stock is brought across at size and colour, along with suppliers, customers and open balances, and Verity is introduced as the operational layer while the season continues.',

  faqHeading: 'Questions fashion retailers ask',
  faqs: [
    [
      'What can AI software do for a fashion store?',
      'Verity AI answers questions from your own size-level stock, sales, return and supplier records: which styles are selling but out of core sizes, what sell-through looks like against week of season, which suppliers have above-average return rates and why, which stores hold sizes others are short of. Each answer can become a repeat order, a transfer or a markdown review assigned to the buyer.',
    ],
    [
      'Does Verity track stock by size and colour?',
      'Yes, and that is the point. Stock is held per style, size, colour and season, because the sale happens there and so does every decision downstream of it. Style-level totals hide broken size runs, which is the characteristic way fashion stock dies.',
    ],
    [
      'Can it help decide when to mark down?',
      'Sell-through is measured per style against week of season, with the remaining stock profiled by size and colour, so a markdown is proposed with a projected clearance rather than started when the season feels over.',
    ],
    [
      'Does it record why items are returned?',
      'Returns carry a reason — fit, quality, colour, changed mind — and attach to the style and the supplier. That converts a return rate into a supplier signal rather than an unexplained cost of doing business.',
    ],
    [
      'Can we move stock between stores?',
      'Availability across every store is one view at size level, and transfers are raised, approved and recorded as movement. A size that is dead at one branch and short at another surfaces as a transfer candidate.',
    ],
    [
      'Does Verity replace our billing software?',
      'No. Your billing setup is mapped during implementation and continues to run. Verity is the operational layer over it — stock at size level, buying, returns, transfers, markdown approvals and the reporting across them.',
    ],
    [
      'Can it help with next season’s buying?',
      'Sell-through, markdown taken and return rate by style, colour and supplier come from the records the season produced, so the next buy is made against the matrix rather than against a general sense of what did well.',
    ],
    [
      'Is it suitable for a single store?',
      'A single store still has a size matrix, a markdown calendar, a return rate and carryover stock. Those are the parts Verity handles. Additional stores add the transfer view without further setup.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the business buys and trades, configuration, migration of stock at size and colour, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the styles that are selling and unbuyable.',
  ctaLede:
    'Broken size runs on good sellers are the fastest money in fashion retail and the hardest thing to see in a style-level report. Tell us how you track stock today.',

  related: ['clothing-boutiques', 'shoe-stores', 'retail-stores', 'cosmetics-stores', 'jewellery-stores', 'garment-manufacturers'],
};
