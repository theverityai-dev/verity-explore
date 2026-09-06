export default {
  slug: 'garment-manufacturers',
  status: 'published',
  plural: 'garment manufacturers',
  subject: 'garment manufacturing business',

  seo: {
    title: 'AI business management software for garment manufacturers | Verity',
    description:
      'Verity connects buyer orders and size ratios, sampling approvals, fabric consumption, cutting and stitching lines, and shipment deadlines into one system.',
    keywords: [
      'AI software for garment manufacturers',
      'apparel manufacturing management software',
      'cut make trim and line output tracking',
      'buyer order and shipment deadline software',
    ],
  },

  hero: {
    eyebrow: 'Verity for garment manufacturing',
    headline: 'The shipment date is fixed. Everything upstream of it is not.',
    lede:
      'Sampling approvals slip, fabric arrives short, lines run behind, and the buyer’s date does not move. Verity records the chain so the slip is visible while it can still be recovered.',
    note: 'Runs alongside your existing accounting and machine systems.',
    panel: {
      title: 'Orders',
      meta: 'All lines · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders in production', value: '31', note: '182,000 pieces' },
        { label: 'Shipments at risk', value: '6', note: 'against buyer dates' },
        { label: 'Sampling pending', value: '9', note: 'approval blocking cutting' },
        { label: 'Fabric shortfall', value: '4 orders', note: 'against consumption plan' },
      ],
      rows: [
        { name: '6 shipments at risk against fixed buyer dates', meta: 'Air freight exposure if they slip', active: true },
        { name: '9 samples awaiting buyer approval', meta: 'Cutting cannot start · 3 past their date', active: true },
        { name: 'Fabric consumption running 6% above plan', meta: 'Four orders will fall short', active: true },
        { name: 'Line 3 output 22% below target for a week', meta: 'No recorded cause', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own orders in this shape.',
    },
  },

  overview: {
    heading: 'A garment order is a fixed date with a chain of variable steps in front of it.',
    paragraphs: [
      'An export or bulk garment order arrives with a shipment date that does not move. Between the order and that date sit sampling and buyer approval, fabric and trim procurement, cutting against a size ratio, stitching across lines, finishing, packing and inspection. Every one of those steps can slip, and the only step that cannot is the last one.',
      'The most common cause of a missed shipment is not the sewing line. It is an approval — a sample, a fabric, a trim — that took longer than planned and compressed everything after it. Cutting cannot start until the sample is approved, and the days lost at the front of the chain are paid for at the end, usually in air freight or in a discount.',
      'The second is fabric consumption. Cutting against a size ratio consumes fabric at a rate that is planned and rarely measured against actual, so an order discovers it is short when it is already cut, at which point the options are expensive.',
      'The third is line output. Lines have targets, they miss them for reasons that are known on the floor and recorded nowhere, and the shortfall appears as a shipment risk two weeks later.',
      'The fourth is that buyers audit. Compliance, capacity and documentation are inspected, and the evidence has to exist as records rather than as practice.',
      'Verity records the chain from order to shipment, with the fixed date visible against every step in front of it.',
    ],
  },

  terminology: [
    ['Styles, size ratios, colourways', 'Records'],
    ['Sampling, cutting, stitching, finishing', 'Work'],
    ['Buyer orders, shipments, deadlines', 'Orders'],
    ['Fabric, trims, packaging', 'Inventory'],
    ['Fabric mills, trim suppliers, job units', 'Suppliers'],
    ['Lines, operators, supervisors', 'People'],
    ['Units, floors, lines, warehouses', 'Locations'],
  ],

  challengesHeading: 'The date is fixed and the slippage is upstream.',
  challengesLede:
    'Garment manufacturing failures are compressed schedules caused by steps that ran late where nobody was measuring.',
  challenges: [
    {
      problem: 'Approvals compress the production window',
      detail:
        'A sample or fabric approval takes three weeks instead of one, cutting starts late, and the entire remaining schedule absorbs the loss.',
      outcome:
        'Approvals are workflow steps with dates against the shipment, so a delay is visible as schedule compression when it happens.',
    },
    {
      problem: 'Fabric consumption exceeds plan and is found after cutting',
      detail:
        'Actual consumption runs above the plan, and the shortfall appears when the order is already cut.',
      outcome:
        'Consumption is recorded against cutting as it happens, so a divergence surfaces while more fabric can still be sourced.',
    },
    {
      problem: 'Line shortfalls are explained after the fact',
      detail:
        'A line misses target for a week and the reason is known on the floor and recorded nowhere, so it repeats.',
      outcome:
        'Output and downtime causes are recorded per line and shift, so the shortfall has an addressable reason.',
    },
    {
      problem: 'Shipment risk is discovered too late to fix cheaply',
      detail:
        'A slip becomes visible near the date, when the only remedies are air freight or a discount.',
      outcome:
        'Progress is measured against the shipment date at every stage, so risk is visible while sea freight is still possible.',
    },
    {
      problem: 'Trims arrive after the fabric',
      detail:
        'Fabric is planned carefully and trims are ordered late, so cut pieces wait for buttons.',
      outcome:
        'Trim requirements are derived from the order and scheduled against the cutting date rather than the shipment date.',
    },
    {
      problem: 'Audit evidence is assembled for the audit',
      detail:
        'Buyer compliance and capacity audits require records that were supposed to be kept as the work happened.',
      outcome:
        'Compliance and production records are created in the ordinary course, so an audit is an extract.',
    },
  ],

  modulesLede:
    'One system from buyer order to shipment.',
  modules: [
    {
      id: 'orders',
      title: 'Buyer orders, size ratios and shipments',
      line:
        'Orders carry their styles, quantities by size and colour, prices, shipment dates, terms and current production state.',
      why:
        'The shipment date is the fixed point, and everything is scheduled backwards from it.',
      example:
        'Six shipments at risk against fixed buyer dates, each showing the step that caused the compression.',
    },
    {
      id: 'work',
      title: 'Sampling, cutting, stitching and finishing',
      line:
        'Each stage is work with an order, a line or unit, quantities, an owner, timestamps and a state.',
      why:
        'The chain is where the schedule is lost, and only stage records show which link.',
      example:
        'Nine samples awaiting approval with cutting blocked, three already past their planned date.',
    },
    {
      id: 'records',
      title: 'Styles, specifications and approvals',
      line:
        'Styles carry their specifications, size ratios, consumption plans, approved samples and buyer comments.',
      why:
        'The approved sample is the contract, and consumption planning is the basis of fabric procurement.',
      example:
        'Consumption plan per style, against which actual cutting consumption is measured.',
    },
    {
      id: 'inventory',
      title: 'Fabric, trims and packaging',
      line:
        'Stock is held by lot with supplier, quantity, allocation to orders, and consumption recorded against cutting.',
      why:
        'Fabric is most of the cost and trims are most of the delays, and both are allocated to specific orders.',
      example:
        'Consumption six percent above plan across four orders, surfaced during cutting rather than after.',
    },
    {
      id: 'suppliers',
      title: 'Fabric mills, trim suppliers and job units',
      line:
        'Suppliers are relationships with their orders, delivery reliability against required dates, quality and balances.',
      why:
        'A supplier delivering to its own lead time rather than to your cutting date is the most common upstream failure.',
      example:
        'Trim delivery measured against the cutting date rather than the shipment date.',
    },
    {
      id: 'people',
      title: 'Lines, operators and supervisors',
      line:
        'Lines and staff are modelled once, and every output record, downtime entry and quality check carries who owned it.',
      why:
        'Output varies by line and supervisor, and improvement requires attribution.',
      example:
        'Line output against target by shift, with recorded causes for shortfall.',
    },
    {
      id: 'workflows',
      title: 'Approvals, inspections and shipment release',
      line:
        'Sample approval, fabric approval, in-line and final inspection and shipment release are defined steps with owners and dates.',
      why:
        'These are the gates, and a gate that opens late compresses everything behind it.',
      example:
        'An approval running past its planned date, flagged as schedule compression on the order.',
    },
    {
      id: 'locations',
      title: 'Units, floors, lines and warehouses',
      line:
        'Locations roll into the business, with production, stock and reporting following the same structure.',
      why:
        'Orders are split across lines and units, and comparison requires identical recording.',
      example:
        'Output and quality by line and unit, comparable across the business.',
    },
    {
      id: 'intelligence',
      title: 'Schedule, consumption and output reporting',
      line:
        'Progress against shipment dates, approval lead times, fabric consumption against plan, line efficiency, defect rates and supplier reliability come from the operational records.',
      why:
        'The most valuable number — days of compression caused by each upstream step — does not exist without stage records.',
      example:
        'Approval lead time against plan by buyer, which is where most compression originates.',
    },
    {
      id: 'ai',
      title: 'Ask the order book a question',
      line:
        'Verity AI answers from your own order, production, consumption and supplier records, respects permissions, and can create assigned follow-ups.',
      why:
        'The valuable questions are about which shipments are at risk and why, days before it is expensive.',
      example:
        '"Which shipments are at risk and what caused the compression?" returns six with the step named.',
    },
    {
      id: 'control',
      title: 'Approvals, authority and audit',
      line:
        'One permission model and one audit trail, with quality acceptance and shipment release recorded.',
      why:
        'Buyer audits require evidence of process, and evidence has to be a record made at the time.',
      example:
        'Inspection outcomes and release decisions with the person and time attached.',
    },
    {
      id: 'communication',
      title: 'Buyer correspondence on the order',
      line:
        'Comments, approvals and instructions attach to the order or style they concern.',
      why:
        'A buyer comment on a sample changes production, and it must reach the floor rather than an inbox.',
      example:
        'A buyer’s approval comment recorded on the style, visible at cutting.',
    },
  ],

  workflowsHeading: 'Backwards from a date that does not move.',
  workflowsLede:
    'These already happen. Scheduled against the shipment date, compression becomes visible early.',
  workflows: [
    {
      name: 'Order to production plan',
      steps: [
        'Buyer order recorded with styles, size ratio and shipment date',
        'Schedule built backwards from the shipment date',
        'Sampling, fabric and trim dates derived from it',
        'Line capacity allocated against the plan',
        'Plan issued with owners against each gate',
      ],
      note:
        'Scheduling backwards from the fixed date is what makes upstream slippage measurable as compression.',
    },
    {
      name: 'Sampling and approval',
      steps: [
        'Sample produced against the specification',
        'Submitted to the buyer with a planned approval date',
        'Comments recorded and revisions tracked',
        'Approval received and recorded against the style',
        'Compression against the plan calculated and flagged',
      ],
      note:
        'Approval delay is the most common cause of a missed shipment and the least attributed.',
    },
    {
      name: 'Fabric and trim procurement',
      steps: [
        'Requirements derived from the consumption plan and size ratio',
        'Orders placed against required dates, not supplier lead times',
        'Deliveries received and checked against the order',
        'Allocation to the production order recorded',
        'Shortfall flagged against the cutting date',
      ],
      note:
        'Trims ordered against the shipment date rather than the cutting date is why cut pieces wait.',
    },
    {
      name: 'Cutting and consumption',
      steps: [
        'Cutting scheduled against the approved sample and ratio',
        'Fabric issued and consumption recorded per lay',
        'Actual consumption compared against plan',
        'Divergence flagged while more fabric can be sourced',
        'Cut pieces recorded and issued to lines',
      ],
      note:
        'Measuring consumption during cutting rather than after is the difference between a purchase and a crisis.',
    },
    {
      name: 'Line production',
      steps: [
        'Order allocated to lines with targets',
        'Output recorded by line, shift and hour',
        'Downtime and its causes recorded',
        'Quality checks and defects recorded in line',
        'Progress compared against the shipment schedule',
      ],
      note:
        'A recorded cause is what stops the same shortfall recurring next week.',
    },
    {
      name: 'Finishing to shipment',
      steps: [
        'Finishing and packing completed against the order',
        'Final inspection conducted and recorded',
        'Shipment released with documentation',
        'Dispatch recorded against the buyer date',
        'Performance and any freight escalation recorded',
      ],
      note:
        'Recording air freight against the step that caused it is what makes the cost of compression visible.',
    },
  ],

  ai: {
    heading: 'Ask what will miss the date.',
    lede:
      'Verity AI reads the same order, production, consumption and supplier records the unit creates as it works. It answers from your own orders, respects permissions, and can turn an answer into follow-ups.',
    panelMeta: 'Grounded in your production records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which shipments are at risk against buyer dates, and what caused the compression?',
      'Which approvals are past their planned date and blocking cutting?',
      'Where is fabric consumption running above plan?',
      'Which orders will fall short on fabric?',
      'What is line output against target by shift, and what caused shortfalls?',
      'Which suppliers deliver late against required dates rather than lead times?',
      'What did air freight cost this quarter, and which step caused it?',
      'What are defect rates by line and style?',
      'Summarise shipment risk across the order book.',
    ],
  },

  automationHeading: 'The compression nobody notices until it is expensive.',
  automationLede:
    'Each runs from the order and production records at the point the condition is met.',
  automations: [
    {
      trigger: 'An approval passes its planned date',
      steps: [
        'Compression calculated against the shipment schedule',
        'Order flagged with the remaining window',
        'Escalation raised to merchandising and the buyer',
      ],
    },
    {
      trigger: 'Fabric consumption diverges from plan',
      steps: [
        'Divergence calculated per order during cutting',
        'Shortfall projected against the full order quantity',
        'Procurement task raised while sourcing is still possible',
      ],
    },
    {
      trigger: 'Line output falls below target',
      steps: [
        'Shortfall flagged with line, shift and cause',
        'Recovery plan assigned to the supervisor',
        'Schedule impact recalculated against the shipment date',
      ],
    },
    {
      trigger: 'A trim delivery is late against the cutting date',
      steps: [
        'Order flagged with the affected cut quantity',
        'Supplier chased and the response recorded',
        'Schedule impact assessed and escalated',
      ],
    },
    {
      trigger: 'A shipment is projected to miss its date',
      steps: [
        'Risk flagged with the causing step named',
        'Freight or discussion decision raised early',
        'Outcome and cost recorded against the cause',
      ],
    },
    {
      trigger: 'Defect rate exceeds threshold on a line',
      steps: [
        'Pattern flagged with style and operation',
        'Review assigned to the line supervisor',
        'Outcome recorded against the line and style',
      ],
    },
  ],

  intelligenceHeading: 'What the unit can actually see.',
  intelligenceLede:
    'Schedule, consumption and output measured against a fixed date.',
  intelligence: [
    {
      area: 'Schedule',
      points: [
        'Progress against shipment dates by order',
        'Compression by causing step',
        'Approval lead times against plan by buyer',
        'Air freight and its attributed causes',
      ],
    },
    {
      area: 'Consumption',
      points: [
        'Actual against planned fabric consumption',
        'Shortfall projections by order',
        'Wastage by style and lay',
        'Trim availability against cutting dates',
      ],
    },
    {
      area: 'Production',
      points: [
        'Line output against target by shift',
        'Downtime and recorded causes',
        'Efficiency by line, unit and style',
        'Rework and defect rates',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Delivery against required dates',
        'Quality at receipt',
        'Shortfall on delivery',
        'Outstanding payable',
      ],
    },
    {
      area: 'Buyers',
      points: [
        'Order volume and value by buyer',
        'Approval responsiveness by buyer',
        'Delivery performance against their dates',
        'Claims and discounts recorded',
      ],
    },
  ],
  intelligenceNote:
    'Verity records the operational chain. Machine systems, design and accounting continue as they are.',

  rolesHeading: 'One order book, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Which shipments will slip and what will it cost?',
      focus: 'Shipment risk and its causes, freight exposure, buyer delivery performance, line efficiency.',
    },
    {
      role: 'Merchandiser',
      question: 'Where is the schedule compressing?',
      focus: 'Approval status against plan, fabric and trim readiness, order progress against shipment dates.',
    },
    {
      role: 'Production manager',
      question: 'Are the lines on target?',
      focus: 'Output by line and shift, downtime causes, cut pieces available, quality in line.',
    },
    {
      role: 'Cutting and stores',
      question: 'What is consumption doing?',
      focus: 'Fabric issued and consumed against plan, shortfall projections, trim availability, allocation by order.',
    },
    {
      role: 'Quality',
      question: 'What is failing and where?',
      focus: 'In-line and final inspection outcomes, defect rates by line and style, rework, release decisions.',
    },
  ],

  useCasesHeading: 'What garment manufacturers use Verity for',
  useCases: [
    {
      name: 'Backward scheduling from the shipment date',
      body: 'Every upstream step dated against the fixed shipment, so a late approval registers as measurable compression rather than as an untraceable delay.',
    },
    {
      name: 'Approval lead time tracking',
      body: 'Sampling and fabric approvals as steps with planned dates, exposing the most common cause of a missed shipment.',
    },
    {
      name: 'Live consumption against plan',
      body: 'Fabric consumption recorded during cutting, so a shortfall is projected while more fabric can still be sourced.',
    },
    {
      name: 'Trim scheduling against cutting',
      body: 'Trim requirements ordered against the cutting date rather than the shipment date, so cut pieces do not wait.',
    },
    {
      name: 'Line output with causes',
      body: 'Output and downtime recorded by line and shift with reasons, so a shortfall is addressable rather than repeated.',
    },
    {
      name: 'Shipment risk warning',
      body: 'Progress measured against the buyer date at every stage, so risk surfaces while sea freight is still possible.',
    },
    {
      name: 'Audit-ready records',
      body: 'Compliance and production records created in the ordinary course of work, so a buyer audit is an extract rather than a preparation exercise.',
    },
    {
      name: 'Asking about the order book',
      body: 'Plain-language questions across schedule, consumption, output and suppliers, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Machine systems, design tools and accounting continue to run and are mapped during implementation. Buyers, styles, open orders, fabric and trim stock and supplier terms are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions garment units ask',
  faqs: [
    [
      'What can AI software do for a garment manufacturer?',
      'Verity AI answers questions from your own order, production, consumption and supplier records: which shipments are at risk and what caused the compression, which approvals are blocking cutting, where fabric consumption is running above plan, what line output looks like against target. Each answer can become a follow-up.',
    ],
    [
      'How does it help with shipment dates?',
      'The schedule is built backwards from the fixed shipment date, so every upstream step carries a planned date. When an approval or a delivery runs late, the compression it causes is calculated immediately rather than appearing as risk two weeks before shipment when the only remedies are expensive.',
    ],
    [
      'Can it track fabric consumption?',
      'Consumption is recorded against cutting as it happens and compared with the consumption plan, so a divergence is projected across the full order while more fabric can still be sourced — rather than discovered when the order is already cut.',
    ],
    [
      'Does it help with trims?',
      'Trim requirements are derived from the order and scheduled against the cutting date rather than the shipment date, which is the usual reason cut pieces sit waiting for components.',
    ],
    [
      'Can it explain line shortfalls?',
      'Output and downtime are recorded per line, shift and hour with causes, so a line missing target for a week has an addressable reason rather than an explanation offered after the shipment slipped.',
    ],
    [
      'Does it help with buyer audits?',
      'Compliance and production records are created in the ordinary course of the work, so an audit becomes an extract from records that already exist rather than an exercise in assembling evidence.',
    ],
    [
      'Does Verity replace our accounting or machine systems?',
      'No. Those continue and are mapped during implementation. Verity holds the orders, the production chain, the consumption, the suppliers and the reporting across them.',
    ],
    [
      'Can it show what compression actually costs?',
      'Air freight and discounts can be recorded against the step that caused them, so the cost of a late approval or a late trim delivery is attributable rather than absorbed into general expense.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the order-to-ship chain, configuration of styles and consumption plans, migration of open orders and stock, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the approvals that compress your schedule.',
  ctaLede:
    'They cause most missed shipments and are almost never measured. Tell us how the chain is tracked today.',

  related: ['textile-manufacturers', 'manufacturers', 'fashion-stores', 'clothing-boutiques', 'exporters', 'packaging-companies'],
};
