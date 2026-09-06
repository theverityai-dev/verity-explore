export default {
  slug: 'ecommerce-businesses',
  status: 'published',
  plural: 'e-commerce businesses',
  subject: 'e-commerce business',

  seo: {
    title: 'AI business management software for e-commerce businesses | Verity',
    description:
      'Verity connects multi-channel inventory, returns and RTO economics, fulfilment commitments, marketplace settlements and customer service load into one system.',
    keywords: [
      'AI software for ecommerce businesses',
      'ecommerce operations management software',
      'multi channel inventory and returns tracking',
      'marketplace settlement reconciliation software',
    ],
  },

  hero: {
    eyebrow: 'Verity for e-commerce',
    headline: 'The order was profitable. The return, the RTO and the settlement deduction were not.',
    lede:
      'E-commerce margin survives or dies after the order. Verity records the return, the failed delivery and the marketplace deduction against the order that produced them.',
    note: 'Verity runs operations. Your online store and marketplaces stay where they are.',
    panel: {
      title: 'Operations',
      meta: 'All channels · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders shipped', value: '9,840', note: 'across 4 channels' },
        { label: 'Return and RTO rate', value: '14.2%', note: 'up from 11.1%' },
        { label: 'Settlement variance', value: '₹4.6 L', note: 'unreconciled deductions' },
        { label: 'Stock out of sync', value: '86 SKUs', note: 'across channels' },
      ],
      rows: [
        { name: '₹4.6 L of marketplace deductions unreconciled', meta: 'Three settlement cycles', active: true },
        { name: 'Return rate on one category at 31%', meta: 'Size and description mismatch recorded', active: true },
        { name: '86 SKUs with channel stock out of sync', meta: 'Oversell and cancellation risk', active: true },
        { name: 'RTO concentrated on one payment mode and region', meta: '₹2.1 L of shipping absorbed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own operations in this shape.',
    },
  },

  overview: {
    heading: 'The order is the easy part. Everything after it decides the margin.',
    paragraphs: [
      'An e-commerce business sells across its own site and several marketplaces, each with its own inventory feed, its own fulfilment expectations, its own return rules and its own settlement arithmetic. The order is captured cleanly. What happens afterwards — returns, failed deliveries, marketplace deductions, customer service — is where the margin actually goes, and it is recorded in as many places as there are channels.',
      'Returns and return-to-origin are the largest of these. A return costs the outbound shipping, the return shipping, the handling and often the saleability of the item, and it is concentrated: particular categories, particular sizes, particular descriptions, particular regions and payment modes. A business that records returns as a total cannot see the concentration and therefore cannot act on it.',
      'Marketplace settlements are the second. Payouts arrive net of commissions, shipping, penalties and adjustments, and reconciling them against the orders they cover is a monthly chore that most businesses do partially. Four point six lakh of unreconciled deductions across three cycles is money that was possibly deducted incorrectly and will never be recovered.',
      'The third is inventory across channels. Stock sold on one channel must reduce availability on the others, and a lag produces oversells, cancellations and marketplace penalties.',
      'Verity records the order, its returns, its shipping outcomes and its settlement against one set of stock and one customer.',
    ],
  },

  terminology: [
    ['SKUs, variants, channel listings', 'Inventory'],
    ['Orders, returns, exchanges, RTO', 'Orders'],
    ['Customers, repeat buyers, accounts', 'Relationships'],
    ['Marketplaces, couriers, suppliers', 'Suppliers'],
    ['Picking, packing, dispatch', 'Work'],
    ['Settlements, deductions, claims', 'Workflows'],
    ['Warehouses, channels, regions', 'Locations'],
  ],

  challengesHeading: 'The costs arrive after the revenue does.',
  challengesLede:
    'E-commerce difficulties are all downstream of the order, in returns, delivery failures and settlements.',
  challenges: [
    {
      problem: 'Returns are recorded as a rate, not a cause',
      detail:
        'Return rate is known in total, so the concentration by category, size, description or region that would let you fix it is invisible.',
      outcome:
        'Returns carry reasons and attach to the SKU, listing, region and payment mode, so concentration is visible.',
    },
    {
      problem: 'Settlement deductions go unreconciled',
      detail:
        'Payouts arrive net of commissions, shipping and penalties, and matching them to orders is partial at best.',
      outcome:
        'Settlements reconcile against recorded orders, so unexplained deductions become claims rather than losses.',
    },
    {
      problem: 'Channel stock drifts and produces oversells',
      detail:
        'A sale on one channel must reduce availability on the others, and lag causes cancellations and marketplace penalties.',
      outcome:
        'One stock position across channels, with allocation and sync state visible per SKU.',
    },
    {
      problem: 'RTO cost is absorbed as shipping',
      detail:
        'Failed deliveries cost outbound and return freight and are recorded as a general shipping expense rather than against the pattern that caused them.',
      outcome:
        'RTO is recorded against the order, region, payment mode and courier, so the concentration is addressable.',
    },
    {
      problem: 'Customer service load is unattributed',
      detail:
        'Tickets are handled without being connected to the orders, SKUs or listings that generate them.',
      outcome:
        'Service contacts attach to the order and SKU, so the products creating the load are identifiable.',
    },
    {
      problem: 'Fulfilment commitments differ by channel and are managed as one',
      detail:
        'Each marketplace has its own dispatch expectations and penalties, and the warehouse works one queue.',
      outcome:
        'Channel commitments are on the order, so the queue is worked by deadline rather than by arrival.',
    },
  ],

  modulesLede:
    'One system across channels, stock, fulfilment and settlements.',
  modules: [
    {
      id: 'orders',
      title: 'Orders, returns, exchanges and RTO',
      line:
        'Each order records its channel, items, customer, payment mode, fulfilment commitment, shipping outcome and any return with its reason.',
      why:
        'The order is where revenue and every downstream cost meet, and the downstream costs are usually recorded elsewhere.',
      example:
        'Return rate at thirty-one percent on one category, with the recorded reasons naming the cause.',
    },
    {
      id: 'inventory',
      title: 'SKUs, variants and channel availability',
      line:
        'Stock is held once with allocation across channel listings, reservation on order and sync state per channel.',
      why:
        'Overselling is a stock-synchronisation failure, and it costs cancellations and marketplace standing.',
      example:
        'Eighty-six SKUs out of sync across channels, flagged before they cause cancellations.',
    },
    {
      id: 'work',
      title: 'Picking, packing and dispatch',
      line:
        'Fulfilment is work with a deadline derived from the channel commitment, an owner and a state.',
      why:
        'Each channel penalises late dispatch differently, so the queue should be worked by deadline rather than by order of arrival.',
      example:
        'The dispatch queue ordered by channel deadline rather than by when the order came in.',
    },
    {
      id: 'suppliers',
      title: 'Marketplaces, couriers and suppliers',
      line:
        'Channels, couriers and suppliers are relationships with their terms, performance, deductions, penalties and balances.',
      why:
        'A marketplace is a supplier of demand with commercial terms, and a courier’s failure rate is a direct margin cost.',
      example:
        'RTO rate by courier and region, which changes routing decisions.',
    },
    {
      id: 'workflows',
      title: 'Settlements, deductions and claims',
      line:
        'Settlement reconciliation, deduction disputes, penalty claims and refunds move through defined steps with recorded outcomes.',
      why:
        'Deductions are frequent, individually small and collectively significant, and they expire if unclaimed.',
      example:
        'Four point six lakh of unexplained deductions raised as claims rather than absorbed.',
    },
    {
      id: 'relationships',
      title: 'Customers and repeat buyers',
      line:
        'Customers are records with their orders, returns, service contacts and lifetime value across channels.',
      why:
        'The same customer buys across channels, and return behaviour and service load are customer-level facts.',
      example:
        'Customer lifetime value net of returns, which is a different ranking from gross revenue.',
    },
    {
      id: 'communication',
      title: 'Service contacts on the order',
      line:
        'Customer contacts, complaints and resolutions attach to the order and SKU they concern.',
      why:
        'Service load is generated by specific products and listings, and connecting the two is how it reduces.',
      example:
        'Contacts concentrated on one listing whose description is misleading.',
    },
    {
      id: 'locations',
      title: 'Warehouses, channels and regions',
      line:
        'Locations and channels roll into the business, with stock, fulfilment and reporting following the same structure.',
      why:
        'Regional patterns in RTO and delivery failure are among the most actionable facts in e-commerce.',
      example:
        'RTO concentrated in one region and payment mode, quantified as absorbed shipping.',
    },
    {
      id: 'intelligence',
      title: 'Contribution, returns and settlement reporting',
      line:
        'Contribution after returns, shipping and deductions; return concentration by cause; settlement variance; fulfilment against commitments; and service load by SKU come from the operational records.',
      why:
        'Gross revenue by channel is easy and misleading. Contribution after everything downstream is the real number.',
      example:
        'Contribution by SKU after returns, RTO and settlement deductions.',
    },
    {
      id: 'ai',
      title: 'Ask operations a question',
      line:
        'Verity AI answers from your own order, stock, return and settlement records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions that matter cross channel, product, region and courier at once.',
      example:
        '"Where are returns concentrated and why?" returns the categories and reasons with actions assigned.',
    },
    {
      id: 'people',
      title: 'Warehouse and service teams',
      line:
        'Staff are modelled once, and every pick, pack, dispatch and service contact carries who handled it.',
      why:
        'Picking accuracy is a direct driver of returns, and it is a per-person number.',
      example:
        'Returns attributable to picking errors, by person and shift.',
    },
    {
      id: 'control',
      title: 'Refunds, write-offs and price changes',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Refunds and goodwill credits are issued under service pressure and add up.',
      example:
        'Refunds beyond policy recorded as approvals with the order history attached.',
    },
  ],

  workflowsHeading: 'Order, fulfil, return, settle.',
  workflowsLede:
    'These already happen across channels. On one record the downstream costs become attributable.',
  workflows: [
    {
      name: 'Order to dispatch',
      steps: [
        'Order received from a channel with its fulfilment commitment',
        'Stock reserved against the single stock position',
        'Channel availability updated across listings',
        'Picking and packing assigned by deadline',
        'Dispatch recorded with courier and tracking',
      ],
      note:
        'Working the queue by channel deadline rather than by arrival order is what avoids penalties.',
    },
    {
      name: 'Return and exchange',
      steps: [
        'Return requested and reason recorded',
        'Return authorised per channel and policy',
        'Item received, inspected and graded',
        'Stock restored or written off with the reason',
        'Refund or exchange processed and recorded',
        'Reason aggregated against SKU, listing and region',
      ],
      note:
        'The reason is what turns a return rate into an addressable cause.',
    },
    {
      name: 'Failed delivery and RTO',
      steps: [
        'Delivery failure recorded with courier reason',
        'Reattempt or RTO decision taken',
        'Shipping cost both ways recorded against the order',
        'Pattern aggregated by region, payment mode and courier',
        'Routing or payment policy decision raised',
      ],
      note:
        'RTO concentration by region and payment mode is one of the most actionable patterns in e-commerce.',
    },
    {
      name: 'Settlement reconciliation',
      steps: [
        'Settlement received from the channel for a period',
        'Matched against recorded orders and returns',
        'Commission, shipping and penalties verified against terms',
        'Unexplained deductions raised as claims',
        'Net position recorded against the channel',
      ],
      note:
        'Deductions are small individually and material together, and they are only recoverable within a window.',
    },
    {
      name: 'Channel stock synchronisation',
      steps: [
        'Single stock position maintained across listings',
        'Allocation and reservation applied per channel',
        'Sync state monitored per SKU',
        'Out-of-sync SKUs flagged before oversell',
        'Cancellations and penalties recorded where they occur',
      ],
      note:
        'An oversell costs a cancellation, a penalty and marketplace standing, all avoidable.',
    },
    {
      name: 'Service load review',
      steps: [
        'Service contacts attached to orders and SKUs',
        'Volume aggregated by product and listing',
        'Causes reviewed — description, sizing, packaging, delivery',
        'Listing or product action assigned',
        'Effect measured in subsequent periods',
      ],
      note:
        'Service load is generated by a small number of products, and fixing the listing is cheaper than answering the tickets.',
    },
  ],

  ai: {
    heading: 'Ask what happened after the order.',
    lede:
      'Verity AI reads the same order, stock, return and settlement records the business creates as it trades. It answers from your own channels, respects permissions, and can turn an answer into claims and actions.',
    panelMeta: 'Grounded in your operations records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Where are returns concentrated, and what reasons were recorded?',
      'Which marketplace deductions are unexplained against our orders?',
      'Which SKUs are out of sync across channels?',
      'Where is RTO concentrated by region, payment mode and courier?',
      'What is contribution by SKU after returns, shipping and deductions?',
      'Which listings generate the most customer service contacts?',
      'Which orders missed their channel dispatch commitment?',
      'What is customer lifetime value net of returns?',
      'Summarise contribution and downstream cost this month.',
    ],
  },

  automationHeading: 'The costs that arrive quietly.',
  automationLede:
    'Each runs from the order and stock records at the point the condition is met.',
  automations: [
    {
      trigger: 'A settlement is received',
      steps: [
        'Matched against recorded orders and returns',
        'Deductions verified against channel terms',
        'Unexplained items raised as claims with references',
      ],
    },
    {
      trigger: 'A return is recorded',
      steps: [
        'Reason captured and attached to SKU and listing',
        'Stock restored or written off with grading',
        'Concentration recalculated by category and region',
      ],
    },
    {
      trigger: 'A delivery fails',
      steps: [
        'Courier reason recorded against the order',
        'Reattempt or RTO decision raised',
        'Pattern updated by region, payment mode and courier',
      ],
    },
    {
      trigger: 'Channel stock drifts out of sync',
      steps: [
        'SKU flagged before oversell occurs',
        'Correction task assigned',
        'Cancellations avoided or recorded if they occur',
      ],
    },
    {
      trigger: 'An order approaches its channel dispatch deadline',
      steps: [
        'Order prioritised in the fulfilment queue',
        'Escalated if it will miss the commitment',
        'Penalty recorded if incurred',
      ],
    },
    {
      trigger: 'Service contacts concentrate on a listing',
      steps: [
        'Listing flagged with the contact reasons',
        'Review assigned to the catalogue owner',
        'Effect measured after the change',
      ],
    },
  ],

  intelligenceHeading: 'What the operator can actually see.',
  intelligenceLede:
    'Contribution after everything that happens downstream of the order.',
  intelligence: [
    {
      area: 'Contribution',
      points: [
        'Contribution by SKU, category and channel after returns and deductions',
        'Shipping and RTO cost per order',
        'Commission and penalty cost by channel',
        'Customer lifetime value net of returns',
      ],
    },
    {
      area: 'Returns',
      points: [
        'Return and RTO rate by SKU, category and region',
        'Reasons recorded and their distribution',
        'Restorable against written-off returns',
        'Returns attributable to picking errors',
      ],
    },
    {
      area: 'Settlements',
      points: [
        'Settlement matched against recorded orders',
        'Unexplained deductions and claims raised',
        'Recovery against claims filed',
        'Net realisation by channel',
      ],
    },
    {
      area: 'Fulfilment',
      points: [
        'Dispatch against channel commitments',
        'Picking accuracy and its downstream returns',
        'Courier performance and failure rates',
        'Stock sync state and oversell incidents',
      ],
    },
    {
      area: 'Service',
      points: [
        'Contact volume by SKU and listing',
        'Reasons and resolutions',
        'Refunds and goodwill credits issued',
        'Effect of listing changes on contact volume',
      ],
    },
  ],
  intelligenceNote:
    'Verity records operations. Your online store, marketplace integrations and payment processing continue as they are.',

  rolesHeading: 'One operation, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Founder',
      question: 'What is actually profitable?',
      focus: 'Contribution by SKU and channel after returns and deductions, RTO concentration, settlement realisation.',
    },
    {
      role: 'Operations manager',
      question: 'What is at risk today?',
      focus: 'Orders against dispatch deadlines, stock sync, returns to process, courier failures.',
    },
    {
      role: 'Finance',
      question: 'Are the settlements right?',
      focus: 'Settlement reconciliation, unexplained deductions, claims raised and recovered, refunds issued.',
    },
    {
      role: 'Catalogue and service',
      question: 'Which products are causing the load?',
      focus: 'Contact volume and return reasons by listing, description and sizing issues, actions taken.',
    },
  ],

  useCasesHeading: 'What e-commerce businesses use Verity for',
  useCases: [
    {
      name: 'Return cause analysis',
      body: 'Reasons recorded against SKU, listing and region, so a return rate becomes a concentration you can act on.',
    },
    {
      name: 'Settlement reconciliation',
      body: 'Payouts matched against recorded orders with deductions verified against terms, so unexplained amounts become claims rather than losses.',
    },
    {
      name: 'Cross-channel stock',
      body: 'One stock position with allocation and sync state per channel, preventing the oversells that cost cancellations and standing.',
    },
    {
      name: 'RTO concentration',
      body: 'Failed deliveries recorded by region, payment mode and courier, exposing one of the most actionable patterns in the category.',
    },
    {
      name: 'Deadline-driven fulfilment',
      body: 'The dispatch queue worked by channel commitment rather than by order arrival, avoiding penalties.',
    },
    {
      name: 'True contribution',
      body: 'Contribution by SKU after returns, shipping and deductions, which is a different ranking from gross revenue.',
    },
    {
      name: 'Service load attribution',
      body: 'Contacts attached to orders and SKUs, so the small number of listings generating most of the load can be fixed.',
    },
    {
      name: 'Asking about downstream cost',
      body: 'Plain-language questions across returns, settlements, stock and couriers, with claims and actions raised in the same step.',
    },
  ],

  migration:
    'Your online store, marketplace integrations and payment processing continue to run and are mapped during implementation. SKUs, channel listings, stock, open orders, returns and settlement history are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions e-commerce operators ask',
  faqs: [
    [
      'What can AI software do for an e-commerce business?',
      'Verity AI answers questions from your own order, stock, return and settlement records: where returns are concentrated and why, which marketplace deductions are unexplained, which SKUs are out of sync across channels, where RTO concentrates by region and payment mode. Each answer can become a claim or an action.',
    ],
    [
      'Does Verity replace our online store or marketplace integrations?',
      'No. Your online store, marketplace connections and payment processing continue and are mapped during implementation. Verity records operations — stock across channels, fulfilment, returns, RTO, settlements and service load.',
    ],
    [
      'How does it help with returns?',
      'Returns carry a recorded reason and attach to the SKU, listing, region and payment mode, so a return rate resolves into concentrations — a category, a size, a misleading description — that can actually be fixed.',
    ],
    [
      'Can it reconcile marketplace settlements?',
      'Settlements are matched against your recorded orders and returns with commissions, shipping and penalties verified against channel terms, so unexplained deductions become claims raised inside the window rather than money quietly absorbed.',
    ],
    [
      'Does it prevent overselling?',
      'Stock is held once with allocation and reservation across channel listings and sync state monitored per SKU, so drift is flagged before it produces a cancellation and a marketplace penalty.',
    ],
    [
      'Can it show true product profitability?',
      'Contribution is calculated by SKU after returns, shipping, RTO and settlement deductions, which frequently produces a very different ranking from gross revenue by product.',
    ],
    [
      'Does it help with customer service load?',
      'Service contacts attach to the order and SKU, so the small number of listings generating most contacts is identifiable — and fixing the listing is considerably cheaper than answering the tickets.',
    ],
    [
      'Does it handle multi-warehouse fulfilment?',
      'Warehouses, channels and regions are locations rolling into the business, so allocation, dispatch performance and delivery outcomes are visible per location.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of channels, fulfilment commitments and settlement terms, configuration, migration of SKUs, stock and open orders, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with returns or with settlements.',
  ctaLede:
    'Both are margin already lost that most operators cannot break down. Tell us which is bigger for you.',

  related: ['retail-stores', 'distributors', 'saas-companies', 'online-marketplaces', 'content-agencies', 'wholesalers'],
};
