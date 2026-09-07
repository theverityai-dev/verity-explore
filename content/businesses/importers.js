export default {
  slug: 'importers',
  status: 'published',
  plural: 'importers',
  subject: 'importer',

  seo: {
    title: 'AI business management software for importers | Verity',
    description:
      'Verity gives importers one system for shipments in transit, landed cost, clearance and demurrage exposure, supplier lead times and arrival quality.',
    keywords: [
      'AI software for importers',
      'import business management software',
      'landed cost and shipment tracking software',
      'customs clearance and demurrage management',
    ],
  },

  hero: {
    eyebrow: 'Verity for importers',
    headline: 'You paid for it in March. You will know what it cost in July.',
    lede:
      'Importing commits money months before the goods exist as sellable stock. Verity tracks every shipment from order to clearance with landed cost building as it moves.',
    note: 'Verity runs the import business. Customs filing and accounting continue where they are.',
    panel: {
      title: 'Pipeline',
      meta: 'In transit and clearing',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Shipments in transit', value: '23', note: '9 suppliers' },
        { label: 'Value committed', value: '₹6.4 Cr', note: 'not yet sellable' },
        { label: 'Days at port', value: '7.2 avg', note: 'free period 5 days' },
        { label: 'Landed cost variance', value: '+4.9%', note: 'against estimate' },
      ],
      rows: [
        { name: '3 containers past the free period', meta: 'Demurrage accruing daily', active: true },
        { name: 'Landed cost 4.9% above estimate', meta: 'Freight and exchange movement', active: true },
        { name: '2 shipments short-landed against invoice', meta: 'Claim window open', active: true },
        { name: '1 supplier consistently late by 11 days', meta: 'Lead time assumption wrong', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own pipeline in this shape.',
    },
  },

  overview: {
    heading: 'Money leaves early, goods arrive late, and cost is only known at the end.',
    paragraphs: [
      'An importer commits working capital at order and receives sellable stock months later. Six point four crore in transit is money that is neither cash nor inventory, and the business runs on the accuracy of a pipeline it can only see through documents.',
      'The second characteristic is that cost accumulates along the journey. The invoice price is the beginning; freight, insurance, duty, clearing charges, transport and exchange movement all land afterwards, and landed cost four point nine per cent above estimate is a margin already sold at the wrong price if goods were quoted on the estimate.',
      'The third is the port clock. Free periods expire and demurrage accrues daily, and three containers past the free period is a cost with no revenue attached that grows while documentation is chased.',
      'The fourth is that quality is discovered on arrival, when recourse is weakest. Short-landing, damage and specification variance have claim windows that expire while the goods are being unpacked.',
      'The fifth is supplier lead time. A supplier consistently eleven days late is not a series of delays but a wrong planning assumption, and it is only visible when promised and actual dates are both recorded.',
      'Verity tracks shipments through every stage, builds landed cost as costs arrive, and holds supplier reliability against the plan.',
    ],
  },

  terminology: [
    ['Shipments, containers, consignments', 'Logistics'],
    ['Purchase orders and proforma invoices', 'Orders'],
    ['Overseas suppliers and agents', 'Suppliers'],
    ['Duty, freight, clearing, landed cost', 'Records'],
    ['Bonded stores, warehouses, yards', 'Locations'],
    ['Customers, distributors, retailers', 'Relationships'],
    ['Documentation, permits, compliance', 'Control'],
  ],

  challengesHeading: 'A long pipeline, an accumulating cost, and a clock at the port.',
  challengesLede:
    'Import difficulties come from committing money before the goods and the cost both exist.',
  challenges: [
    { problem: 'The pipeline is only visible through documents', detail: 'Shipments sit in email threads with agents and suppliers rather than in one view.', outcome: 'Every shipment is a record with stage, dates, documents and value committed.' },
    { problem: 'Landed cost is known too late to price with', detail: 'Goods are quoted on estimated cost and the real cost lands after the sale.', outcome: 'Landed cost builds as each charge arrives, with variance against estimate visible.' },
    { problem: 'Demurrage accrues while documents are chased', detail: 'A container sits past its free period because one document is missing.', outcome: 'The free period is a tracked clock with document readiness against it.' },
    { problem: 'Claims expire before the goods are checked', detail: 'Short-landing and damage are found after the window to claim has closed.', outcome: 'Arrival checks are scheduled against claim windows with findings recorded.' },
    { problem: 'Supplier lead times are assumed, not measured', detail: 'Planning uses quoted lead times while actual performance differs consistently.', outcome: 'Promised against actual dates are held per supplier, correcting the planning assumption.' },
    { problem: 'Exchange movement is absorbed silently', detail: 'The rate moves between order and payment and margin changes without anyone deciding.', outcome: 'Rate at order and at settlement are both recorded against the shipment cost.' },
  ],

  modulesLede: 'One system across shipments, cost, clearance and stock.',
  modules: [
    { id: 'logistics', title: 'Shipments, containers and transit', line: 'Each shipment carries its supplier, contents, dates promised and actual, vessel or flight, documents, port stage and free period.', why: 'The pipeline is the business, and it is only manageable as records rather than correspondence.', example: 'Twenty-three shipments in transit across nine suppliers.' },
    { id: 'records', title: 'Duty, freight, clearing and landed cost', line: 'Every charge attaches to the shipment as it arrives, building landed cost per line and per unit against the estimate.', why: 'Pricing on estimated cost is only safe when the variance is measured.', example: 'Landed cost 4.9% above estimate.' },
    { id: 'suppliers', title: 'Overseas suppliers and agents', line: 'Suppliers carry quoted against actual lead times, quality on arrival, documentation accuracy and payment terms.', why: 'A consistently late supplier is a planning correction, not a series of incidents.', example: 'A supplier consistently eleven days late.' },
    { id: 'orders', title: 'Purchase orders and commitments', line: 'Orders carry quantities, prices, currency, payment terms, expected arrival and the value committed.', why: 'Committed value that is not yet stock is the working capital position.', example: 'Value committed in transit against available credit.' },
    { id: 'control', title: 'Documentation, permits and compliance', line: 'One permission model and one audit trail, with document readiness and regulatory requirements tracked per shipment.', why: 'A missing document is what turns a free period into demurrage.', example: 'Document readiness against free period expiry.' },
    { id: 'inventory', title: 'Arrival, inspection and stock', line: 'Arrival quantities, condition, specification variance and put-away are recorded against the shipment lines.', why: 'What arrived is often not what was invoiced, and the difference has a claim window.', example: 'Two shipments short-landed against invoice.' },
    { id: 'locations', title: 'Ports, bonded stores and warehouses', line: 'Locations carry the shipments held, clearance state and storage cost accruing.', why: 'Goods at a port are costing money in a way goods in a warehouse are not.', example: 'Three containers past the free period.' },
    { id: 'intelligence', title: 'Pipeline, cost and supplier reporting', line: 'Committed value, landed cost variance, demurrage exposure, supplier reliability and arrival quality come from the records.', why: 'The importer’s margin is decided by cost accuracy and pipeline discipline.', example: 'Landed cost variance by supplier and route.' },
    { id: 'ai', title: 'Ask the pipeline a question', line: 'Verity AI answers from your own shipment, cost, supplier and arrival records, respects permissions, and can create assigned follow-ups.', why: 'The questions that matter are about what is stuck and what it really cost.', example: '"Which containers are past their free period?" returns three with the missing documents.' },
    { id: 'relationships', title: 'Customers and forward commitments', line: 'Customer orders and commitments are held against expected arrivals.', why: 'Selling stock that is still on water requires the arrival date to be honest.', example: 'Customer commitments matched to shipments in transit.' },
    { id: 'communication', title: 'Supplier and agent correspondence', line: 'Correspondence with suppliers, agents and clearing houses attaches to the shipment it concerns.', why: 'A shipment’s history is mostly conversation, and it belongs on the record.', example: 'Clearing correspondence attached to the shipment.' },
    { id: 'workflows', title: 'Clearance and claim handling', line: 'Clearance steps and claims run as tracked sequences with owners and deadlines.', why: 'Both are time-bound processes where a missed step costs money directly.', example: 'Claims raised within the window against short-landed shipments.' },
  ],

  workflowsHeading: 'Order, ship, clear, receive, cost.',
  workflowsLede: 'These already happen. Recorded, the pipeline and the cost both become visible.',
  workflows: [
    { name: 'Order and commitment', steps: ['Order placed with price, currency and terms', 'Expected shipping and arrival dates recorded', 'Value committed tracked against working capital', 'Payment milestones scheduled', 'Rate at order recorded'], note: 'Recording the rate at order is what makes exchange movement measurable later.' },
    { name: 'Transit tracking', steps: ['Shipment created with contents and documents', 'Departure confirmed against the promise', 'Transit stages updated', 'Arrival date projected', 'Customer commitments updated'], note: 'A projected arrival that moves should move the customer commitment with it.' },
    { name: 'Clearance', steps: ['Document readiness checked before arrival', 'Free period clock started at arrival', 'Duty and charges recorded as assessed', 'Clearance completed and release obtained', 'Transport to warehouse arranged'], note: 'Document readiness before arrival is the only reliable defence against demurrage.' },
    { name: 'Arrival and claim', steps: ['Quantities counted against invoice and packing list', 'Condition and specification checked', 'Variances recorded with evidence', 'Claim raised within the window', 'Outcome recorded against the supplier'], note: 'The claim window is short and starts before unpacking finishes.' },
    { name: 'Landed cost close', steps: ['All charges attached to the shipment', 'Landed cost allocated per line and unit', 'Variance against estimate calculated', 'Selling prices reviewed', 'Estimate basis corrected for the next order'], note: 'Correcting the estimate basis is what stops the same variance repeating.' },
  ],

  ai: {
    heading: 'Ask about the pipeline and real cost.',
    lede: 'Verity AI reads the same shipment, cost, supplier and arrival records the business creates as it trades. It answers from your own pipeline, respects permissions, and can turn an answer into a chase or a pricing correction.',
    panelMeta: 'Grounded in your pipeline records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which containers are past their free period and what is missing?',
      'What is landed cost variance against estimate by supplier?',
      'Which suppliers are consistently late against quoted lead times?',
      'What value is committed in transit and arriving when?',
      'Which shipments arrived short or damaged and are claims raised?',
      'What has exchange movement cost between order and settlement?',
      'Which customer commitments depend on shipments still at sea?',
      'What is demurrage exposure this month?',
      'Summarise pipeline value and landed cost position.',
    ],
  },

  automationHeading: 'The clock, the cost and the claim.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A shipment approaches arrival', steps: ['Document readiness checked', 'Missing documents chased with owners', 'Clearing agent briefed'] },
    { trigger: 'A container approaches its free period expiry', steps: ['Escalated with the blocking item', 'Daily demurrage exposure calculated', 'Resolution recorded'] },
    { trigger: 'A charge is recorded against a shipment', steps: ['Landed cost recalculated per line', 'Variance against estimate surfaced', 'Pricing review raised where material'] },
    { trigger: 'Arrival quantity differs from invoice', steps: ['Variance recorded with evidence', 'Claim raised within the window', 'Supplier performance updated on outcome'] },
    { trigger: 'A supplier misses a promised shipping date', steps: ['Actual against promised recorded', 'Arrival projection updated', 'Affected customer commitments flagged'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Pipeline, cost and supplier reliability from trading records.',
  intelligence: [
    { area: 'Pipeline', points: ['Value committed by stage', 'Shipments in transit and arriving', 'Projected against promised arrival', 'Customer commitments dependent on transit'] },
    { area: 'Cost', points: ['Landed cost per line and unit', 'Variance against estimate by supplier and route', 'Duty, freight and clearing components', 'Exchange movement between order and settlement'] },
    { area: 'Port', points: ['Days at port by shipment', 'Free period adherence', 'Demurrage incurred and its causes', 'Document readiness performance'] },
    { area: 'Suppliers', points: ['Quoted against actual lead time', 'Arrival quality and short-landing', 'Documentation accuracy', 'Claim outcomes'] },
  ],
  intelligenceNote: 'Verity records the import operation. Customs filing and accounting continue where they are.',

  rolesHeading: 'One business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where is my money and what will it cost?', focus: 'Value committed in transit, landed cost variance, demurrage exposure, supplier reliability.' },
    { role: 'Import coordinator', question: 'What arrives when and is it ready?', focus: 'Shipment stages, document readiness, free period clocks, clearing progress.' },
    { role: 'Warehouse', question: 'What is arriving and does it match?', focus: 'Expected arrivals, count against invoice, condition and variance, put-away.' },
    { role: 'Sales', question: 'What can I promise?', focus: 'Projected arrivals, committed stock, landed cost for pricing, customer commitments.' },
  ],

  useCasesHeading: 'What importers use Verity for',
  useCases: [
    { name: 'Seeing the pipeline as records', body: 'Every shipment with its stage, dates, documents and committed value in one view rather than reconstructed from correspondence with agents and suppliers.' },
    { name: 'Building landed cost as it happens', body: 'Freight, duty, clearing and transport attaching to the shipment as they arrive, with variance against estimate visible before the stock is priced.' },
    { name: 'Avoiding demurrage', body: 'Free period clocks with document readiness against them, so a container sitting at a port has a named blocking item and an owner.' },
    { name: 'Claiming within the window', body: 'Arrival checks scheduled against claim deadlines, with quantity and condition variances recorded as evidence.' },
    { name: 'Correcting lead time assumptions', body: 'Promised against actual dates per supplier, turning consistent lateness into a planning correction rather than a repeated surprise.' },
    { name: 'Measuring exchange movement', body: 'Rate at order and at settlement recorded against the shipment, so currency movement is a visible component of cost.' },
    { name: 'Asking about the pipeline', body: 'Plain-language questions across shipments, cost, suppliers and arrivals, with chases and pricing reviews raised in the same step.' },
  ],

  migration: 'Customs filing and accounting continue where they are and are mapped during implementation. Suppliers with lead time history, open orders, shipments in transit, landed cost structures, document requirements and arrival history are brought across.',

  faqHeading: 'Questions importers ask',
  faqs: [
    ['What can AI software do for an importer?', 'Verity AI answers questions from your own shipment, cost, supplier and arrival records: which containers are past their free period and what is missing, what landed cost variance is by supplier, which suppliers are consistently late, what value is committed in transit. Each answer can become a chase or a pricing correction.'],
    ['How does landed cost work?', 'Each charge — freight, insurance, duty, clearing, transport — attaches to the shipment as it arrives and is allocated across lines and units, with variance against the original estimate visible. That is what makes pricing safe before every cost has landed.'],
    ['Can it help avoid demurrage?', 'Free periods are tracked as clocks from arrival with document readiness measured against them, so a shipment about to incur demurrage has a named missing item and an owner rather than a general sense that something is delayed.'],
    ['How does it handle short-landing and damage?', 'Arrival checks are scheduled against claim windows and quantity, condition and specification variances are recorded with evidence, so claims are raised while there is still recourse.'],
    ['Does it measure supplier reliability?', 'Promised and actual dates are both recorded per shipment, which converts a supplier who is consistently late into a corrected planning assumption instead of a recurring delay.'],
    ['What about currency movement?', 'The rate at order and the rate at settlement are recorded against the shipment, so exchange movement appears as a component of landed cost rather than a difference absorbed in accounts.'],
    ['Does it replace customs filing?', 'No. Customs filing and accounting continue where they are and are mapped during implementation. Verity holds the import operation — shipments, documents, cost build-up, arrivals and supplier performance.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of shipment stages, cost structures, document requirements and supplier terms, configuration, migration of open orders and shipments, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the containers at the port.',
  ctaLede: 'They are costing money daily for a document reason. Tell us how shipments are tracked today.',

  related: ['exporters', 'wholesalers', 'distributors', 'industrial-suppliers', 'building-material-suppliers', 'ecommerce-businesses'],
};
