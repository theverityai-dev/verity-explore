export default {
  slug: 'home-decor-stores',
  status: 'published',
  plural: 'home decor stores',
  subject: 'home decor business',

  seo: {
    title: 'AI business management software for home decor stores | Verity',
    description:
      'Verity connects display-led stock, slow-turn capital, handling damage, delivery and installation, and interior designer accounts into one operational system.',
    keywords: [
      'AI software for home decor stores',
      'home decor retail management software',
      'display stock and slow turn capital tracking',
      'delivery installation and designer account software',
    ],
  },

  hero: {
    eyebrow: 'Verity for home decor',
    headline: 'Most of your capital is on display and turning twice a year.',
    lede:
      'Decor sells slowly, needs to be seen to sell, and gets damaged being handled. Verity measures what the display is earning and what the handling is costing.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Store',
      meta: 'This quarter',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Stock value', value: '₹64 L', note: '71% on display' },
        { label: 'Turn rate', value: '2.1x', note: 'annualised' },
        { label: 'Damage write-off', value: '₹2.8 L', note: 'handling and transit' },
        { label: 'Designer accounts', value: '18', note: '34% of revenue' },
      ],
      rows: [
        { name: '₹18 L of display stock with no sale in 12 months', meta: 'Occupying the best floor positions', active: true },
        { name: 'Damage concentrated on two fragile categories', meta: 'Handling and packing at fault', active: true },
        { name: '6 deliveries pending with no installation slot', meta: 'Customers waiting', active: true },
        { name: 'Designer account balances past terms', meta: '₹6.4 L · projects continuing', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'Display is inventory, and slow turn is the model rather than a failure.',
    paragraphs: [
      'Home decor turns slowly by nature. A piece may sit for months before the right customer sees it, and it has to be displayed to be sold — which means the majority of the store’s capital is not in a stockroom but on a floor, being handled, in the light. Slow turn is not a problem to be fixed; it is the model, and the question is which pieces earn their position.',
      'Eighteen lakh of display stock with no sale in a year is not merely slow. It is occupying the best positions in the store, which is the only thing that makes anything else sell.',
      'The second characteristic is damage. Decor is fragile, handled repeatedly by customers and staff, and moved for delivery. Damage concentrates in specific categories and specific handling steps, and is usually recorded as a general write-off.',
      'The third is fulfilment. Larger pieces need delivery and often installation, on slots the customer has to be present for, and the promise is made at the counter and coordinated by phone.',
      'The fourth is that interior designers are a significant share of revenue, buying on account against projects with their own timelines.',
      'Verity measures the display position, the damage by handling step, the delivery promise and the designer account.',
    ],
  },

  terminology: [
    ['Pieces, collections, display stock', 'Inventory'],
    ['Sales, orders, deliveries', 'Orders'],
    ['Customers, interior designers, trade accounts', 'Relationships'],
    ['Delivery, installation, assembly', 'Work'],
    ['Suppliers, importers, artisans', 'Suppliers'],
    ['Damage, write-off, markdown', 'Workflows'],
    ['Showroom, warehouse, display positions', 'Locations'],
  ],

  challengesHeading: 'Slow capital, fragile stock and promised deliveries.',
  challengesLede:
    'Decor difficulties come from capital sitting on display, damage nobody attributes, and fulfilment promised at a counter.',
  challenges: [
    { problem: 'Display position is not measured', detail: 'The best positions in the store carry pieces that have not sold in a year, because nobody measures return by position.', outcome: 'Display positions are recorded, so what each earns is comparable against candidates for the same space.' },
    { problem: 'Slow turn is not distinguished from dead stock', detail: 'In a category where two turns a year is normal, a piece that will never sell looks the same as one that will.', outcome: 'Turn expectations are set by category, so genuinely dead stock is separable from normal slowness.' },
    { problem: 'Damage is recorded as a general write-off', detail: 'Fragile pieces are damaged in handling, display and transit, and the loss arrives as one number.', outcome: 'Damage is recorded with the step and category, so concentration is addressable.' },
    { problem: 'Delivery and installation are coordinated by phone', detail: 'A slot is agreed at the counter, the crew is arranged separately, and the customer waits.', outcome: 'Delivery and installation are work with slots, crews and states against the order.' },
    { problem: 'Designer accounts run on project timelines', detail: 'Trade customers buy against projects with their own delays, and balances age while purchasing continues.', outcome: 'Account balances age with project context, checked at the next order.' },
    { problem: 'Buying repeats what looked good', detail: 'Decor buying is aesthetic and rarely checked against what actually turned at what margin.', outcome: 'Turn and margin by collection and supplier are recorded, so the next buy has evidence alongside judgement.' },
  ],

  modulesLede: 'One system across display, damage, delivery and trade accounts.',
  modules: [
    { id: 'inventory', title: 'Pieces, collections and display stock', line: 'Stock is held per piece with cost, collection, condition, display position, days held and turn expectation by category.', why: 'Most decor capital is on display, and display position is the store’s scarcest asset.', example: 'Eighteen lakh of display stock with no sale in a year, ranked by the position it occupies.' },
    { id: 'locations', title: 'Showroom, positions and warehouse', line: 'Display positions are locations with their own footfall exposure, stock and performance.', why: 'A position is what makes a piece sell, and comparing positions is how a floor is merchandised.', example: 'Return by display position, so prime space carries what earns it.' },
    { id: 'work', title: 'Delivery, installation and assembly', line: 'Each is work with a customer, a slot, a crew, requirements and a state.', why: 'Larger pieces need a slot the customer must be present for, which is a promise like any other.', example: 'Six deliveries pending with no installation slot booked.' },
    { id: 'workflows', title: 'Damage, write-off and markdown', line: 'Damage, write-off and markdown move through defined steps with a recorded cause and handling step.', why: 'Damage concentration is only visible when the cause is recorded.', example: 'Damage concentrated in two fragile categories at the packing step.' },
    { id: 'relationships', title: 'Customers and interior designers', line: 'Customers and trade accounts carry their purchases, projects, credit terms, balances and preferences.', why: 'Designers are a large revenue share buying against project timelines.', example: 'A designer account past terms while a project continues.' },
    { id: 'suppliers', title: 'Suppliers, importers and artisans', line: 'Suppliers carry lead times, transit damage rates, prices, minimums and balances.', why: 'Long lead times and fragile goods make supplier choice a damage and cash decision.', example: 'Transit damage rate by supplier alongside lead time.' },
    { id: 'orders', title: 'Sales and customer orders', line: 'Transactions and orders record the piece, customer, delivery requirement and any damage claim.', why: 'A decor sale often begins a fulfilment process rather than ending a transaction.', example: 'An order recorded with its delivery and installation requirement as the sale is made.' },
    { id: 'people', title: 'Floor staff and delivery crews', line: 'Staff and crews are modelled once, and every sale, delivery and damage record carries who handled it.', why: 'Handling damage and delivery success both vary by crew.', example: 'Damage by handling step and crew.' },
    { id: 'intelligence', title: 'Position, damage and turn reporting', line: 'Return by display position, turn against category expectation, damage by cause and step, delivery performance and designer account activity come from the records.', why: 'The two decor questions — what should be on display and what is handling costing — are both records questions.', example: 'Turn by collection against the category’s normal expectation.' },
    { id: 'ai', title: 'Ask the floor a question', line: 'Verity AI answers from your own stock, position, delivery and account records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about capital sitting still in the best positions.', example: '"Which display pieces have not sold in a year?" returns the list ranked by position.' },
    { id: 'records', title: 'Piece details, images and care information', line: 'Dimensions, materials, care and images attach to the piece.', why: 'Decor sales depend on detail the customer asks for and staff cannot always recall.', example: 'Dimensions and material on the piece record, available at the counter.' },
    { id: 'control', title: 'Who can discount and write off', line: 'One permission model and one audit trail across every record.', why: 'Markdown on slow decor and write-off on damage are both frequent and consequential.', example: 'A markdown carrying the days held and position occupied.' },
  ],

  workflowsHeading: 'Display, damage and delivery.',
  workflowsLede: 'These already happen. Recorded, the floor becomes something you can merchandise on evidence.',
  workflows: [
    { name: 'Display review', steps: ['Days held and sales pulled by piece and position', 'Return by position calculated', 'Category turn expectations applied', 'Pieces failing their position identified', 'Floor reset and decisions recorded'], note: 'Slow turn is normal in decor; failing to earn a prime position is not.' },
    { name: 'Damage capture', steps: ['Damage recorded with piece, cause and handling step', 'Repair, markdown or write-off decided', 'Supplier claim raised where transit damage', 'Concentration reviewed by category and step', 'Packing or handling action assigned'], note: 'Recording the step is what turns an accepted cost into a fixable process.' },
    { name: 'Delivery and installation', steps: ['Requirement captured at the sale', 'Slot agreed with the customer and recorded', 'Crew and installation needs assigned', 'Delivery completed and condition confirmed', 'Any damage or shortfall recorded against the order'], note: 'Confirming condition at delivery is what separates transit damage from a later claim.' },
    { name: 'Designer account', steps: ['Project and account terms recorded', 'Orders placed against the project', 'Balance aged with project context', 'Credit checked at the next order', 'Collection follow-up assigned as terms pass'], note: 'Designer balances age against project timelines rather than ordinary retail terms.' },
    { name: 'Buying review', steps: ['Turn and margin pulled by collection and supplier', 'Damage rate by supplier applied', 'Lead times and minimums considered', 'Buying decisions raised with evidence', 'Decisions recorded against suppliers'], note: 'Aesthetic judgement is the buyer’s job; the numbers should be alongside it, not instead of it.' },
  ],

  ai: {
    heading: 'Ask what the floor is earning.',
    lede: 'Verity AI reads the same stock, position, delivery and account records the store creates as it trades. It answers from your own floor, respects permissions, and can turn an answer into merchandising and claims.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which display pieces have not sold in twelve months?',
      'What is return by display position?',
      'Where is damage concentrated by category and handling step?',
      'Which deliveries have no installation slot booked?',
      'Which designer accounts are past terms while projects continue?',
      'Which collections turn fastest against category expectations?',
      'Which suppliers have the highest transit damage rates?',
      'What is capital held in stock over twelve months old?',
      'Summarise floor productivity and damage cost.',
    ],
  },

  automationHeading: 'The capital and the handling.',
  automationLede: 'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A piece exceeds its category turn expectation', steps: ['Flagged with days held and position', 'Reposition or markdown review assigned', 'Decision recorded'] },
    { trigger: 'Damage is recorded', steps: ['Cause and handling step captured', 'Supplier claim raised if transit', 'Concentration recalculated by category'] },
    { trigger: 'An order requires delivery', steps: ['Slot agreement task raised', 'Crew and installation needs assigned', 'Condition confirmation required at delivery'] },
    { trigger: 'A designer balance passes terms', steps: ['Aged with project context attached', 'Follow-up assigned', 'Credit checked at the next order'] },
    { trigger: 'A supplier exceeds its damage threshold', steps: ['Rate flagged against the supplier', 'Packing or sourcing review assigned', 'Decision recorded'] },
  ],

  intelligenceHeading: 'What the owner can see.',
  intelligenceLede: 'Display, damage and fulfilment from the store’s own records.',
  intelligence: [
    { area: 'Display', points: ['Return by display position', 'Days held by piece and collection', 'Turn against category expectation', 'Capital on display against in warehouse'] },
    { area: 'Damage', points: ['Damage by category, cause and handling step', 'Transit damage by supplier', 'Repair, markdown and write-off outcomes', 'Claims raised and recovered'] },
    { area: 'Fulfilment', points: ['Deliveries scheduled and completed', 'Installation requirements met', 'Condition confirmed at delivery', 'Delivery-related claims'] },
    { area: 'Trade', points: ['Designer account activity and balances', 'Project-linked purchasing', 'Trade against retail revenue mix', 'Ageing with project context'] },
    { area: 'Buying', points: ['Turn and margin by collection and supplier', 'Lead times against demand', 'Damage rate by supplier', 'Capital in stock over a year old'] },
  ],
  intelligenceNote: 'All of it comes from recording the piece, its position, its handling and its delivery.',

  rolesHeading: 'One showroom, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Is the floor earning its capital?', focus: 'Return by position, turn against expectation, damage cost, designer account mix.' },
    { role: 'Store manager', question: 'What needs moving or fixing?', focus: 'Pieces failing their position, damage concentration, deliveries to schedule, approvals pending.' },
    { role: 'Delivery and warehouse', question: 'What is going out and in what condition?', focus: 'Delivery slots and crews, installation needs, condition confirmation, damage to record.' },
  ],

  useCasesHeading: 'What home decor retailers use Verity for',
  useCases: [
    { name: 'Return by display position', body: 'Positions as locations with their own performance, so prime floor space carries pieces that earn it.' },
    { name: 'Category turn expectations', body: 'Slow turn treated as normal for the category, so genuinely dead stock is separable from ordinary decor slowness.' },
    { name: 'Damage attribution', body: 'Damage recorded with cause and handling step, turning an accepted cost into an addressable process.' },
    { name: 'Delivery and installation', body: 'Slots, crews and installation requirements as work against the order rather than coordinated by phone.' },
    { name: 'Designer accounts', body: 'Trade balances aged with project context and checked at the next order.' },
    { name: 'Buying with evidence', body: 'Turn, margin and supplier damage rates alongside aesthetic judgement rather than instead of it.' },
    { name: 'Asking about the floor', body: 'Plain-language questions across stock, positions, damage and deliveries, with actions raised in the same step.' },
  ],

  migration: 'Your billing setup continues and is mapped during implementation. Stock with positions, suppliers, designer accounts and open deliveries are brought across, and Verity is configured around how the showroom works.',

  faqHeading: 'Questions decor retailers ask',
  faqs: [
    ['What can AI software do for a home decor store?', 'Verity AI answers questions from your own stock, position, delivery and account records: which display pieces have not sold in a year, what return by display position looks like, where damage concentrates, which deliveries lack an installation slot. Each answer can become a merchandising or claim action.'],
    ['Is slow turn a problem?', 'Not in itself — two turns a year can be normal for decor. The question is whether a piece earns the position it occupies, because display space is what makes anything sell. Verity measures return by position rather than treating slowness as failure.'],
    ['How does it help with damage?', 'Damage is recorded with its cause and the handling step where it occurred — display, packing, transit, installation — so concentration by category and step becomes addressable rather than arriving as a general write-off.'],
    ['Can it manage delivery and installation?', 'Delivery is work with a slot the customer agreed, an assigned crew, installation requirements and condition confirmation on completion, rather than a promise made at the counter and coordinated separately by phone.'],
    ['Does it handle interior designer accounts?', 'Designers are trade accounts with credit terms, project context and balances that age against project timelines rather than ordinary retail terms, checked when the next order is placed.'],
    ['Can it help with buying?', 'Turn and margin by collection and supplier, and transit damage rate by supplier, sit alongside the aesthetic judgement that drives decor buying rather than replacing it.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds stock and positions, damage, deliveries, trade accounts and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the showroom, delivery process and trade terms, configuration, migration of stock and accounts, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the best positions in the store.',
  ctaLede: 'They are usually carrying the oldest stock. Tell us how the floor is reviewed today.',

  related: ['furniture-stores', 'interior-designers', 'gift-shops', 'retail-stores', 'department-stores', 'interior-design-firms'],
};
