export default {
  slug: 'building-material-suppliers',
  status: 'published',
  plural: 'building material suppliers',
  subject: 'building material supplier',

  seo: {
    title: 'AI business management software for building material suppliers | Verity',
    description:
      'Verity gives building material suppliers one system for site delivery scheduling, vehicle and load planning, contractor credit exposure, volatile input prices and yard stock.',
    keywords: [
      'AI software for building material suppliers',
      'building material supplier software',
      'site delivery and load planning software',
      'contractor credit exposure management',
    ],
  },

  hero: {
    eyebrow: 'Verity for building material suppliers',
    headline: 'The load is worth less than the credit you extended to receive it back.',
    lede:
      'Building materials are heavy, price-volatile and sold on credit to contractors who are themselves waiting to be paid. Verity holds delivery, price and exposure together.',
    note: 'Verity runs the supply business. Accounting continues where it is.',
    panel: {
      title: 'Yard',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Deliveries scheduled', value: '38', note: '9 vehicles' },
        { label: 'Credit outstanding', value: '₹2.1 Cr', note: '64 accounts' },
        { label: 'Beyond credit terms', value: '₹47 L', note: '18 accounts' },
        { label: 'Loads returned or refused', value: '4', note: 'this week' },
      ],
      rows: [
        { name: '3 accounts over limit with orders pending', meta: 'Release decision needed today', active: true },
        { name: '4 loads refused at site this week', meta: 'Access and timing, not product', active: true },
        { name: 'Cement landed cost up, price list unchanged', meta: 'Margin eroding on quoted orders', active: true },
        { name: '2 vehicles under-loaded on the same route', meta: 'Trips not consolidated', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own yard in this shape.',
    },
  },

  overview: {
    heading: 'Heavy goods, thin margins, and money that comes back slowly.',
    paragraphs: [
      'A building material supplier sells bulk goods — cement, steel, aggregate, blocks, timber — where the value per vehicle is low relative to the cost of moving it. That makes the delivery, not the sale, the operationally expensive event, and two under-loaded vehicles on the same route is a margin decision made by accident.',
      'The second characteristic is that the delivery point is a construction site, which has access restrictions, timing windows and someone who must be present to receive. Four loads refused this week for access and timing rather than product is a cost the supplier absorbs entirely.',
      'The third is credit. Contractors buy on account and pay when their own client pays, which makes the supplier a lender in a chain it cannot see. Forty-seven lakh beyond terms across eighteen accounts is working capital sitting on other people’s sites, and three accounts over limit with orders pending is a decision somebody has to make before a vehicle leaves.',
      'The fourth is input price volatility. Cement and steel prices move, and a price list that has not moved with landed cost means margin is being given away on every quoted order until someone notices.',
      'Verity holds delivery scheduling and load planning, credit exposure per account, landed cost against price, and yard stock in one place.',
    ],
  },

  terminology: [
    ['Materials, grades, brands', 'Inventory'],
    ['Orders, quotations, rate contracts', 'Orders'],
    ['Contractors, builders, retailers', 'Relationships'],
    ['Deliveries, loads, vehicles', 'Logistics'],
    ['Yards, godowns, stockyards', 'Locations'],
    ['Credit limits, ageing, collections', 'Control'],
    ['Drivers, loaders, sales staff', 'People'],
  ],

  challengesHeading: 'The delivery costs more than the margin, and the money comes back late.',
  challengesLede:
    'Building supply difficulties come from moving heavy goods on credit to sites.',
  challenges: [
    { problem: 'Vehicles run under-loaded and unconsolidated', detail: 'Orders on the same route go out separately because nobody sees them together.', outcome: 'Deliveries are planned by route and load, so consolidation is a visible option.' },
    { problem: 'Loads are refused at site', detail: 'Access, timing or an absent receiver turns a delivery into a return trip.', outcome: 'Site access constraints and receiving windows sit on the delivery record.' },
    { problem: 'Credit decisions are made at the gate', detail: 'An order is loaded and someone realises the account is over limit.', outcome: 'Exposure and terms are checked at order rather than at dispatch.' },
    { problem: 'Price lists lag landed cost', detail: 'Input prices move and quoted orders continue at the old margin.', outcome: 'Landed cost is held against the price list with margin erosion surfaced.' },
    { problem: 'Stock across yards is not seen together', detail: 'One yard is short while another holds surplus of the same grade.', outcome: 'Stock is visible across yards with transfer as a decision.' },
    { problem: 'Collections follow the invoice, not the project', detail: 'Contractors pay when their client pays and the supplier chases without knowing why.', outcome: 'Accounts carry project context and payment behaviour alongside ageing.' },
  ],

  modulesLede: 'One system across stock, delivery, credit and price.',
  modules: [
    { id: 'logistics', title: 'Deliveries, loads and vehicles', line: 'Deliveries carry site, access constraints, receiving window, vehicle, load utilisation and route.', why: 'Moving the goods is the expensive part and load utilisation is where the margin sits.', example: 'Two vehicles under-loaded on the same route.' },
    { id: 'inventory', title: 'Materials, grades and yard stock', line: 'Stock is held by grade, brand and yard, with movement, transfer and reservation against orders.', why: 'Grade and brand substitution is not free, and shortage at one yard is often surplus at another.', example: 'Stock by grade across yards with transfer options.' },
    { id: 'control', title: 'Credit limits, exposure and release', line: 'Each account carries its limit, current exposure, ageing and a release decision on new orders.', why: 'The supplier is a lender, and the decision has to happen before the vehicle is loaded.', example: 'Three accounts over limit with orders pending.' },
    { id: 'orders', title: 'Orders, quotations and rate contracts', line: 'Orders carry the agreed rate, the landed cost at the time, delivery requirements and margin.', why: 'A rate agreed last month against a cost that moved this month is a loss unless it is visible.', example: 'Cement landed cost up against an unchanged price list.' },
    { id: 'relationships', title: 'Contractors, builders and retailers', line: 'Accounts carry their projects, order history, payment behaviour, disputes and credit position.', why: 'Payment behaviour is a property of the contractor and their project, not just the invoice.', example: 'Ageing by account with project context attached.' },
    { id: 'locations', title: 'Yards, godowns and stockyards', line: 'Each location carries stock, vehicles, loading capacity and staff.', why: 'Multiple yards only reduce delivery cost if they are planned as one network.', example: 'Loading capacity against scheduled dispatches per yard.' },
    { id: 'people', title: 'Drivers, loaders and sales staff', line: 'Staff carry assignments, deliveries completed, returns and account responsibility.', why: 'Refused loads and collection performance both attach to people.', example: 'Refused deliveries by route and driver.' },
    { id: 'intelligence', title: 'Margin, exposure and delivery reporting', line: 'Load utilisation, delivery cost per order, margin against landed cost, credit exposure and ageing come from the records.', why: 'The business is thin-margin and credit-heavy, and both need continuous measurement.', example: 'Margin by material against current landed cost.' },
    { id: 'ai', title: 'Ask the yard a question', line: 'Verity AI answers from your own stock, order, delivery and account records, respects permissions, and can create assigned follow-ups.', why: 'The questions that matter are about exposure and which deliveries can be combined.', example: '"Which accounts are over limit with orders pending?" returns three with exposure and ageing.' },
    { id: 'suppliers', title: 'Manufacturers, depots and landed cost', line: 'Purchases, freight and handling are recorded to give landed cost per material and batch.', why: 'Selling price is only meaningful against the cost of the stock actually being sold.', example: 'Landed cost per tonne by supplier and batch.' },
    { id: 'communication', title: 'Site coordination and collections', line: 'Delivery coordination with sites and collection conversations attach to the order and account.', why: 'Most refused loads and late payments are preventable with a recorded conversation.', example: 'A receiving window confirmed against the delivery record.' },
  ],

  workflowsHeading: 'Quote, release, load, deliver, collect.',
  workflowsLede: 'These already happen. Recorded, the vehicle and the credit both stop leaking.',
  workflows: [
    { name: 'Order and credit release', steps: ['Order taken against agreed rate', 'Landed cost and margin checked', 'Credit exposure and ageing checked against limit', 'Release decision recorded with approver', 'Order confirmed for scheduling'], note: 'Checking exposure at order rather than at dispatch avoids a loaded vehicle waiting at the gate.' },
    { name: 'Delivery planning', steps: ['Confirmed orders grouped by route and date', 'Site access and receiving windows checked', 'Loads built against vehicle capacity', 'Driver assigned and dispatched', 'Delivery confirmed or refusal recorded with cause'], note: 'Grouping by route before building loads is what recovers under-utilised trips.' },
    { name: 'Stock and transfer', steps: ['Stock levels reviewed by grade and yard', 'Reservations applied against confirmed orders', 'Shortages matched against surplus elsewhere', 'Transfer raised or purchase initiated', 'Receipt recorded with landed cost'], note: 'A transfer is usually cheaper than an emergency purchase, if the surplus is visible.' },
    { name: 'Price and margin review', steps: ['Landed cost updated on receipt', 'Price list compared against current cost', 'Open quotations and rate contracts flagged', 'Price revision decided', 'Customers notified within terms'], note: 'Open quotations at old rates are the exposure a price change has to account for.' },
    { name: 'Collections', steps: ['Ageing reviewed by account and project', 'Payment behaviour and disputes checked', 'Contact assigned with order history attached', 'Commitment recorded', 'Credit position updated'], note: 'Knowing the project a contractor is waiting to be paid on changes the collection conversation.' },
  ],

  ai: {
    heading: 'Ask about exposure and loads.',
    lede: 'Verity AI reads the same stock, order, delivery and account records the business creates as it trades. It answers from your own yard, respects permissions, and can turn an answer into a release decision or a consolidated load.',
    panelMeta: 'Grounded in your yard records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which accounts are over limit with orders pending?',
      'Which deliveries tomorrow are on the same route?',
      'What is credit outstanding beyond terms by account?',
      'Which materials have landed cost above the current price list?',
      'Which loads were refused this month and why?',
      'Where is stock short against reservations and where is it surplus?',
      'What is average load utilisation by route?',
      'Which accounts have slowed their payment behaviour?',
      'Summarise exposure and margin position.',
    ],
  },

  automationHeading: 'Exposure, loads and price.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An order would take an account over its credit limit', steps: ['Flagged with exposure and ageing', 'Release decision routed to the approver', 'Outcome recorded against the order'] },
    { trigger: 'Confirmed orders share a route and date', steps: ['Consolidation surfaced with load utilisation', 'Combined load proposed', 'Dispatch plan updated'] },
    { trigger: 'Landed cost rises above the price list', steps: ['Affected materials flagged with margin impact', 'Open quotations listed', 'Price revision decision recorded'] },
    { trigger: 'A delivery is refused at site', steps: ['Cause recorded against site and account', 'Return cost attributed', 'Receiving requirements updated on the site record'] },
    { trigger: 'An account passes its payment terms', steps: ['Ageing flagged with project context', 'Collection contact assigned', 'Credit position updated on commitment'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Margin, exposure and delivery efficiency from trading records.',
  intelligence: [
    { area: 'Delivery', points: ['Load utilisation by route and vehicle', 'Delivery cost per order and per tonne', 'Refused loads and their causes', 'Site receiving performance'] },
    { area: 'Credit', points: ['Exposure by account and project', 'Ageing beyond terms', 'Payment behaviour trends', 'Orders held on credit decision'] },
    { area: 'Margin', points: ['Landed cost by material and batch', 'Margin against current cost', 'Price list lag by material', 'Open quotations at superseded rates'] },
    { area: 'Stock', points: ['Stock by grade, brand and yard', 'Reservations against confirmed orders', 'Transfers and emergency purchases', 'Slow-moving grades'] },
  ],
  intelligenceNote: 'Verity records the supply business. Accounting continues where it is and is mapped during implementation.',

  rolesHeading: 'One business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where is the money and the margin?', focus: 'Credit exposure and ageing, margin against landed cost, load utilisation, stock position.' },
    { role: 'Dispatch in-charge', question: 'What goes out today and on which vehicle?', focus: 'Confirmed orders by route, load building, site windows, driver assignment.' },
    { role: 'Sales', question: 'Can I take this order?', focus: 'Account exposure and limit, current rates against cost, stock availability, delivery lead time.' },
    { role: 'Accounts', question: 'Who owes what and why is it late?', focus: 'Ageing by account, project context, disputes, collection commitments.' },
  ],

  useCasesHeading: 'What building material suppliers use Verity for',
  useCases: [
    { name: 'Consolidating deliveries', body: 'Confirmed orders grouped by route and date before loads are built, so under-utilised trips become a visible choice rather than an accident.' },
    { name: 'Credit decisions before dispatch', body: 'Exposure, ageing and limit checked at order, so an over-limit account is a decision made in the office rather than at the gate with a loaded vehicle waiting.' },
    { name: 'Reducing refused loads', body: 'Site access constraints, receiving windows and contacts held on the delivery record, so return trips caused by timing and access stop repeating.' },
    { name: 'Margin against moving input cost', body: 'Landed cost held against the price list and open quotations, so a cost rise triggers a price decision instead of silent erosion.' },
    { name: 'Stock across yards', body: 'Grade and brand visibility across every yard, so a shortage in one place is met by a transfer rather than an emergency purchase.' },
    { name: 'Collections with project context', body: 'Ageing alongside the project and payment behaviour of each contractor account, which changes what the collection conversation can ask for.' },
    { name: 'Asking about the business', body: 'Plain-language questions across exposure, deliveries, stock and margin, with release decisions and collection contact raised in the same step.' },
  ],

  migration: 'Accounting continues where it is and is mapped during implementation. Materials and grades, yard stock, customer accounts with credit limits and ageing, order history, rate contracts, vehicles and delivery history are brought across.',

  faqHeading: 'Questions building material suppliers ask',
  faqs: [
    ['What can AI software do for a building material supplier?', 'Verity AI answers questions from your own stock, order, delivery and account records: which accounts are over limit with orders pending, which deliveries tomorrow share a route, which materials have landed cost above the price list, which loads were refused and why. Each answer can become a release decision or a consolidated load.'],
    ['Why treat delivery as the main cost?', 'Because bulk materials have low value per vehicle relative to the cost of moving them. The margin on a load is decided by how full the vehicle is and whether it has to come back, not by the price on the invoice.'],
    ['How does it help with credit exposure?', 'Every account carries its limit, current exposure and ageing, and the release check happens when the order is taken. That moves the decision from the loading gate, where refusing it is expensive, to the office, where it is not.'],
    ['Can it reduce refused deliveries?', 'Site access constraints, receiving windows and the person who must be present are held on the delivery record, and refusals are recorded with their cause so the same site does not produce the same return trip repeatedly.'],
    ['How does it protect margin when input prices move?', 'Landed cost is recorded on receipt and held against the price list, so materials selling below current cost are flagged along with the open quotations and rate contracts that are still exposed to the old price.'],
    ['Does it handle multiple yards?', 'Stock is held by grade, brand and yard with reservations against confirmed orders, so a shortage in one yard can be met by a transfer from surplus in another rather than an emergency purchase.'],
    ['Does it replace our accounting system?', 'No. Accounting continues where it is and is mapped during implementation. Verity holds the trading operation — stock, orders, deliveries, credit exposure and margin.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of materials, yards, credit terms and delivery patterns, configuration, migration of stock, accounts and open orders, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the accounts over limit.',
  ctaLede: 'They are the orders you are about to load. Tell us how credit is checked today.',

  related: ['distributors', 'wholesalers', 'hardware-stores', 'construction-companies', 'contractors', 'home-builders'],
};
