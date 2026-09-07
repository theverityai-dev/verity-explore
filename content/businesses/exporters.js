export default {
  slug: 'exporters',
  status: 'published',
  plural: 'exporters',
  subject: 'exporter',

  seo: {
    title: 'AI business management software for exporters | Verity',
    description:
      'Verity gives exporters one system for document sets and deadlines, inspections and certificates, shipment windows, incentive claims and realisation.',
    keywords: [
      'AI software for exporters',
      'export business management software',
      'export documentation and compliance software',
      'shipment booking and payment realisation tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for exporters',
    headline: 'The goods shipped on time. The payment is late because a date on one document is wrong.',
    lede:
      'Exporting is paid against documents, not against goods. Verity holds every document set, deadline and certificate against the shipment it belongs to.',
    note: 'Verity runs the export business. Statutory filing and banking continue where they are.',
    panel: {
      title: 'Export desk',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Shipments in progress', value: '31', note: '17 buyers' },
        { label: 'Document sets incomplete', value: '9', note: '4 with deadlines this week' },
        { label: 'Payments outstanding', value: '₹4.8 Cr', note: '6 past due date' },
        { label: 'Incentive claims pending', value: '22', note: 'oldest 94 days' },
      ],
      rows: [
        { name: '4 document sets due this week and incomplete', meta: 'Certificates outstanding', active: true },
        { name: '2 sets returned for discrepancy', meta: 'Payment held by the bank', active: true },
        { name: '22 incentive claims unfiled', meta: 'Oldest 94 days, windows closing', active: true },
        { name: '1 buyer inspection unscheduled', meta: 'Shipment window in 9 days', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own export desk in this shape.',
    },
  },

  overview: {
    heading: 'The shipment is the easy part. The paperwork is the transaction.',
    paragraphs: [
      'An exporter is paid on documents. The goods can be perfect and shipped on schedule, and payment still waits because a description does not match, a date is inconsistent, or a certificate is missing. Two document sets returned for discrepancy is working capital held by a mismatch rather than by anything about the product.',
      'The second characteristic is that each destination and each buyer imposes its own requirements. Certificates of origin, inspection certificates, phytosanitary or conformity documents, and buyer-specific packing and labelling all differ, and the set required for one buyer is not the set required for the next.',
      'The third is deadlines that are not negotiable. Presentation periods, shipment windows and inspection bookings each have a date, and a document set incomplete four days before its deadline is a payment delay that has already happened.',
      'The fourth is incentive and refund claims, which have their own filing windows. Twenty-two unfiled claims with the oldest at ninety-four days is money the business has earned and may lose to a closing window.',
      'The fifth is payment realisation, which is measured from shipment to money received rather than from invoice to due date.',
      'Verity holds document sets and their deadlines per buyer, tracks inspections and certificates, and follows claims and realisation to their close.',
    ],
  },

  terminology: [
    ['Shipments, consignments, containers', 'Logistics'],
    ['Buyer orders and contracts', 'Orders'],
    ['Document sets, certificates, declarations', 'Records'],
    ['Buyers, agents, banks', 'Relationships'],
    ['Inspections, testing, certification', 'Workflows'],
    ['Incentive claims and realisation', 'Control'],
    ['Documentation staff, merchandisers, logistics', 'People'],
  ],

  challengesHeading: 'Payment follows documents, and documents follow deadlines.',
  challengesLede:
    'Export difficulties come from being paid on paperwork that has to be exactly right.',
  challenges: [
    { problem: 'Discrepancies hold payment after the goods have gone', detail: 'A mismatch between documents delays payment on a shipment already delivered.', outcome: 'Document sets are checked for internal consistency before presentation.' },
    { problem: 'Requirements differ by buyer and destination', detail: 'The set required is remembered rather than defined, and something is missed on a new market.', outcome: 'Required documents are defined per buyer and destination and generated as a checklist.' },
    { problem: 'Deadlines are tracked separately from work', detail: 'Presentation periods, shipment windows and booking dates live in different places.', outcome: 'Every deadline sits on the shipment with the items outstanding against it.' },
    { problem: 'Inspections are scheduled late', detail: 'A required inspection is arranged close to the shipment window and delays departure.', outcome: 'Inspection requirements are raised from the order with lead time built in.' },
    { problem: 'Incentive claims lapse', detail: 'Claims are filed in batches and some pass their window unfiled.', outcome: 'Claims are raised at shipment with their window as a deadline and an owner.' },
    { problem: 'Realisation is measured after the fact', detail: 'Time from shipment to money received is not tracked, so persistent slowness by buyer is invisible.', outcome: 'Realisation is measured per shipment and per buyer from despatch to receipt.' },
  ],

  modulesLede: 'One system across orders, documents, shipments and realisation.',
  modules: [
    { id: 'records', title: 'Document sets, certificates and declarations', line: 'Each shipment carries its required document set, the state of each item, internal consistency checks and presentation deadline.', why: 'Payment follows the documents, so their completeness and consistency are the transaction.', example: 'Nine incomplete document sets, four due this week.' },
    { id: 'relationships', title: 'Buyers, agents and banks', line: 'Buyers carry their document requirements, inspection conditions, packing and labelling rules, payment terms and realisation history.', why: 'The required set is a property of the buyer and the destination, not of the product.', example: 'Required documents by buyer and destination.' },
    { id: 'workflows', title: 'Inspections, testing and certification', line: 'Inspection and certification requirements are raised from the order with lead times, bookings and results recorded.', why: 'A missed inspection stops a shipment that is otherwise ready.', example: 'A buyer inspection unscheduled with nine days to the window.' },
    { id: 'logistics', title: 'Bookings, shipments and despatch', line: 'Bookings, containers, vessel or flight, despatch dates and delivery terms sit on the shipment.', why: 'The shipment window is a hard date that the document work has to precede.', example: 'Shipment windows against document readiness.' },
    { id: 'orders', title: 'Buyer orders and contracts', line: 'Orders carry quantities, specifications, prices, currency, delivery terms and shipment windows.', why: 'The contract terms decide what the document set must say.', example: 'Contract terms driving required documentation.' },
    { id: 'control', title: 'Incentive claims and realisation', line: 'One permission model and one audit trail, with claims carrying filing windows, owners and outcomes, and realisation tracked to receipt.', why: 'Both are money the business has earned and can still lose to a deadline.', example: 'Twenty-two claims pending with the oldest at ninety-four days.' },
    { id: 'inventory', title: 'Stock, packing and marking', line: 'Goods allocated to shipments carry their packing configuration, marking and buyer-specific labelling.', why: 'Packing and marking requirements are part of the contract and are checked at destination.', example: 'Packing specification recorded against the shipment.' },
    { id: 'intelligence', title: 'Document, deadline and realisation reporting', line: 'Document set completeness, discrepancy rates, deadline adherence, claim status and realisation days come from the records.', why: 'The export desk is measured in days from despatch to money.', example: 'Realisation days by buyer.' },
    { id: 'ai', title: 'Ask the export desk a question', line: 'Verity AI answers from your own shipment, document, buyer and claim records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about what is incomplete against a deadline.', example: '"Which document sets are due this week and incomplete?" returns four with the missing items.' },
    { id: 'people', title: 'Documentation staff, merchandisers and logistics', line: 'Staff carry the shipments and document sets they own, with workload and deadlines visible.', why: 'Document work is deadline work and needs owners per set.', example: 'Document sets by owner against deadline.' },
    { id: 'communication', title: 'Buyer and bank correspondence', line: 'Correspondence with buyers, agents, inspectors and banks attaches to the shipment and document set.', why: 'A discrepancy conversation belongs with the set it concerns.', example: 'Discrepancy correspondence attached to the returned set.' },
    { id: 'suppliers', title: 'Manufacturers and supporting vendors', line: 'Supplying units and vendors carry their commitments against export shipment windows.', why: 'The shipment window has to be met upstream before it can be met at the port.', example: 'Supplier readiness against shipment windows.' },
  ],

  workflowsHeading: 'Contract, produce, inspect, document, realise.',
  workflowsLede: 'These already happen. Recorded, the deadlines stop arriving unannounced.',
  workflows: [
    { name: 'Order to shipment plan', steps: ['Contract terms and shipment window captured', 'Required document set generated for buyer and destination', 'Inspection and certification requirements raised with lead times', 'Production or procurement scheduled to the window', 'Booking made against the window'], note: 'Generating the document set at order is what gives the certificates enough lead time.' },
    { name: 'Inspection and certification', steps: ['Requirement identified from the buyer and destination', 'Booking made with lead time', 'Inspection conducted and result recorded', 'Certificate obtained and attached', 'Shipment released against the requirement'], note: 'A certificate is a lead-time item, not a formality at the end.' },
    { name: 'Document preparation', steps: ['Set assembled against the requirement checklist', 'Internal consistency checked across documents', 'Owner review completed', 'Presented within the period', 'Acceptance or discrepancy recorded'], note: 'Consistency checking across the set is what prevents a discrepancy return.' },
    { name: 'Discrepancy handling', steps: ['Discrepancy recorded with the specific item', 'Correction assigned with a deadline', 'Corrected set represented', 'Payment position updated', 'Cause recorded to prevent repetition'], note: 'Recording the cause is how the same discrepancy stops recurring.' },
    { name: 'Claims and realisation', steps: ['Claim raised at shipment with its filing window', 'Supporting documents attached', 'Filed and acknowledgement recorded', 'Payment realisation tracked from despatch', 'Outcome recorded against buyer and claim'], note: 'Raising the claim at shipment is what stops it lapsing months later.' },
  ],

  ai: {
    heading: 'Ask about documents and deadlines.',
    lede: 'Verity AI reads the same shipment, document, buyer and claim records the export desk creates as it works. It answers from your own business, respects permissions, and can turn an answer into an assigned correction or booking.',
    panelMeta: 'Grounded in your export records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which document sets are due this week and incomplete?',
      'Which sets were returned for discrepancy and why?',
      'Which incentive claims are approaching their filing window?',
      'What are realisation days by buyer?',
      'Which shipments need an inspection that is unscheduled?',
      'Which payments are outstanding past their due date?',
      'Which buyers most often cause document discrepancies?',
      'Which shipment windows are at risk from upstream readiness?',
      'Summarise document and realisation position.',
    ],
  },

  automationHeading: 'Deadlines, discrepancies and claims.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A document set approaches its presentation deadline', steps: ['Outstanding items listed with owners', 'Escalation raised', 'Completion recorded'] },
    { trigger: 'An order is confirmed', steps: ['Required document set generated for buyer and destination', 'Inspection and certification tasks raised with lead times', 'Owners assigned'] },
    { trigger: 'A set is returned for discrepancy', steps: ['Specific item and cause recorded', 'Correction assigned with a deadline', 'Buyer pattern updated'] },
    { trigger: 'A claim window approaches', steps: ['Claim flagged with supporting documents outstanding', 'Owner escalated', 'Filing recorded'] },
    { trigger: 'A payment passes its due date', steps: ['Realisation flagged against the buyer', 'Follow-up assigned with the shipment attached', 'Receipt recorded on settlement'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Documents, deadlines and realisation from export records.',
  intelligence: [
    { area: 'Documents', points: ['Set completeness by shipment', 'Discrepancy rate and causes', 'Deadline adherence', 'Workload by documentation owner'] },
    { area: 'Shipments', points: ['Window adherence', 'Inspection and certification lead times', 'Booking and despatch performance', 'Upstream readiness against windows'] },
    { area: 'Money', points: ['Realisation days from despatch', 'Outstanding by buyer and age', 'Claims filed, pending and lapsed', 'Value held by discrepancy'] },
    { area: 'Buyers', points: ['Requirements by buyer and destination', 'Discrepancy patterns', 'Payment behaviour', 'Order and shipment history'] },
  ],
  intelligenceNote: 'Verity records the export operation. Statutory filing and banking continue where they are.',

  rolesHeading: 'One export desk, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where is the money held?', focus: 'Realisation days, outstanding by buyer, discrepancy value, claims pending.' },
    { role: 'Documentation', question: 'What is due and what is missing?', focus: 'Document sets by deadline, outstanding items, consistency checks, discrepancy corrections.' },
    { role: 'Merchandiser', question: 'Will we make the window?', focus: 'Upstream readiness, inspection bookings, packing and marking, shipment plan.' },
    { role: 'Logistics', question: 'What is booked and despatched?', focus: 'Bookings, containers, despatch dates, delivery terms, carrier performance.' },
  ],

  useCasesHeading: 'What exporters use Verity for',
  useCases: [
    { name: 'Generating the right document set', body: 'Requirements defined per buyer and destination and produced as a checklist at order, so a new market does not reveal a missing certificate at the deadline.' },
    { name: 'Preventing discrepancy returns', body: 'Internal consistency checked across the set before presentation, because payment is held by a mismatch rather than by anything about the goods.' },
    { name: 'Giving certificates lead time', body: 'Inspection and certification requirements raised from the order with their lead times, so they precede the shipment window rather than delaying it.' },
    { name: 'Not losing incentive claims', body: 'Claims raised at shipment with their filing window, owner and supporting documents, so earned money is not lost to a closing window.' },
    { name: 'Measuring realisation', body: 'Days from despatch to money received per shipment and buyer, which is the measure the export desk is actually judged on.' },
    { name: 'Deadline ownership', body: 'Every document set with an owner and a date, so deadline work has a person rather than a queue.' },
    { name: 'Asking about the desk', body: 'Plain-language questions across documents, deadlines, claims and realisation, with corrections and bookings raised in the same step.' },
  ],

  migration: 'Statutory filing and banking continue where they are and are mapped during implementation. Buyers with document and inspection requirements, open orders and shipment windows, document templates and history, claims and realisation records are brought across.',

  faqHeading: 'Questions exporters ask',
  faqs: [
    ['What can AI software do for an exporter?', 'Verity AI answers questions from your own shipment, document, buyer and claim records: which document sets are due this week and incomplete, which were returned for discrepancy and why, which claims are approaching their filing window, what realisation days are by buyer. Each answer can become an assigned correction or booking.'],
    ['Why focus on documents rather than shipping?', 'Because payment follows documents. A shipment can be produced and despatched perfectly and still not be paid because a description or a date is inconsistent across the set, which makes document completeness and consistency the actual transaction.'],
    ['How does it handle different buyer requirements?', 'The required set is defined per buyer and destination, so confirming an order generates the specific checklist for that combination rather than relying on someone remembering what a market needs.'],
    ['Can it reduce discrepancies?', 'Sets are checked for internal consistency before presentation, and when a discrepancy does occur the specific item and cause are recorded against the buyer, so patterns become visible and stop repeating.'],
    ['What about inspections and certificates?', 'They are raised as tasks from the order with their lead times, so a required inspection is booked early enough rather than becoming the reason a ready shipment misses its window.'],
    ['Does it track incentive claims?', 'Claims are raised at shipment with their filing window, owner and supporting documents, and their state is tracked to filing and outcome so none lapses unfiled.'],
    ['Does it replace statutory filing or banking?', 'No. Filing and banking continue where they are and are mapped during implementation. Verity holds the export operation — orders, document sets, inspections, shipments, claims and realisation.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of buyers, document requirements, inspection processes and claim types, configuration, migration of open orders and document templates, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the sets due this week.',
  ctaLede: 'Incomplete four days out is a payment already delayed. Tell us how document sets are tracked today.',

  related: ['importers', 'garment-manufacturers', 'textile-manufacturers', 'manufacturers', 'wholesalers', 'pharmaceutical-manufacturers'],
};
