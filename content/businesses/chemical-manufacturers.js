export default {
  slug: 'chemical-manufacturers',
  status: 'published',
  plural: 'chemical manufacturers',
  subject: 'chemical manufacturer',

  seo: {
    title: 'AI business management software for chemical manufacturers | Verity',
    description:
      'Verity gives chemical manufacturers one system for batch yield variance, hazard classification and storage segregation, shelf life, packing formats and licence obligations.',
    keywords: [
      'AI software for chemical manufacturers',
      'chemical manufacturing management software',
      'batch yield and reconciliation software',
      'hazardous material storage and compliance software',
    ],
  },

  hero: {
    eyebrow: 'Verity for chemical manufacturers',
    headline: 'The formula says 94%. The reactor gave 87%, and nobody can say which input caused it.',
    lede:
      'Chemical production is a yield problem with a safety obligation attached. Verity records every batch against its inputs, its conditions and its output.',
    note: 'Verity runs the plant and the business. Process control systems stay where they are.',
    panel: {
      title: 'Plant',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Batches produced', value: '184', note: '22 products' },
        { label: 'Average yield', value: '89.4%', note: 'formula basis 94%' },
        { label: 'Off-specification batches', value: '11', note: '4 reprocessed' },
        { label: 'Stock past shelf life', value: '3.2 T', note: '2 products' },
      ],
      rows: [
        { name: 'Yield 4.6 points below formula basis', meta: 'Variance not attributed to inputs', active: true },
        { name: '11 off-specification batches this month', meta: 'Disposition pending on 7', active: true },
        { name: 'Incompatible materials stored in one bay', meta: 'Segregation rule breached', active: true },
        { name: '3.2 tonnes past shelf life', meta: 'Disposal cost and record required', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own plant in this shape.',
    },
  },

  overview: {
    heading: 'Yield is the margin, and the record is the licence.',
    paragraphs: [
      'A chemical manufacturer converts inputs into outputs at a rate that never quite matches the formula. Four and a half points of yield below the theoretical basis across a month of production is a large amount of money, and it is only recoverable if each batch carries the specific raw material lots, quantities, conditions and operator that produced it. A yield average with no attribution is a number, not a cause.',
      'The second characteristic is that off-specification output is not scrap by default. Eleven off-specification batches with dispositions pending are inventory in an undecided state — reprocess, downgrade, blend or dispose — and each disposition has a different cost and a different record requirement.',
      'The third is hazard. Materials carry classifications that govern how they are stored, what they may be stored next to, how they are transported and who may handle them. Incompatible materials in one bay is a safety failure that a storage record would have prevented.',
      'The fourth is shelf life. Chemical stock degrades, and three tonnes past its life is both a write-off and a disposal obligation with its own documentation.',
      'The fifth is licensing. Production, storage and handling operate under permissions with quantity limits and reporting duties.',
      'Verity records batches against their inputs and conditions, holds hazard classification against storage, and keeps the licence obligations reportable.',
    ],
  },

  terminology: [
    ['Products, grades, formulations', 'Work'],
    ['Batches, charges, reactions', 'Workflows'],
    ['Raw materials, solvents, catalysts', 'Inventory'],
    ['Hazard class, segregation, handling', 'Control'],
    ['Drums, carboys, tankers, bulk', 'Logistics'],
    ['Customers, traders, formulators', 'Relationships'],
    ['Operators, shift chemists, safety officers', 'People'],
  ],

  challengesHeading: 'Variable yield, hazardous stock, and a licence to keep.',
  challengesLede:
    'Chemical manufacturing difficulties come from converting materials under conditions that vary.',
  challenges: [
    { problem: 'Yield variance has no attributable cause', detail: 'Batches differ and the difference is averaged rather than traced to inputs or conditions.', outcome: 'Each batch carries its lots, quantities, conditions and operator, so variance is attributable.' },
    { problem: 'Off-specification material sits undecided', detail: 'Batches outside specification wait for a disposition while occupying storage.', outcome: 'Off-specification batches carry a disposition state, an owner and a deadline.' },
    { problem: 'Incompatible materials are stored together', detail: 'Segregation rules exist on paper and storage decisions are made at the bay.', outcome: 'Hazard classification and segregation rules sit on the material and the location.' },
    { problem: 'Shelf life expires unnoticed', detail: 'Stock degrades past use and becomes a disposal cost rather than a sale.', outcome: 'Shelf life is tracked per batch with expiry surfaced ahead of the date.' },
    { problem: 'Licence quantities and returns are managed separately', detail: 'Permitted quantities and periodic returns are reconciled outside the production record.', outcome: 'Licence limits and reporting obligations are held against the material and site.' },
    { problem: 'Packing format changes the economics invisibly', detail: 'The same product in drums, carboys or tankers has different cost and different handling.', outcome: 'Packing format is part of the order and the cost, not an afterthought at dispatch.' },
  ],

  modulesLede: 'One system across batches, materials, hazard and dispatch.',
  modules: [
    { id: 'workflows', title: 'Batches, charges and reconciliation', line: 'Every batch records its charge quantities, lots, process conditions, duration, operator and output, with yield reconciled at close.', why: 'Yield is the margin and it is only improvable when variance has a cause.', example: 'Average yield 89.4% against a 94% formula basis.' },
    { id: 'inventory', title: 'Raw materials, solvents and finished stock', line: 'Materials are held by lot with hazard class, shelf life, assay and location.', why: 'A lot’s assay and age change what the batch will yield.', example: 'Three point two tonnes past shelf life.' },
    { id: 'control', title: 'Hazard class, segregation and licences', line: 'One permission model and one audit trail, with hazard classification, segregation rules, permitted quantities and reporting obligations carried on materials and locations.', why: 'Storage and handling are governed, and a breach is a safety event before it is a compliance one.', example: 'Incompatible materials stored in one bay.' },
    { id: 'records', title: 'Specifications, analysis and dispositions', line: 'Specifications, analysis results and off-specification dispositions attach to the batch.', why: 'What was tested and what was decided is the batch’s history.', example: 'Eleven off-specification batches with dispositions pending on seven.' },
    { id: 'locations', title: 'Plants, bays, tanks and stores', line: 'Locations carry capacity, permitted hazard classes, current holding and segregation state.', why: 'Where something can be stored is a property of both the material and the place.', example: 'Permitted quantity against current holding by bay.' },
    { id: 'logistics', title: 'Packing, drums, tankers and dispatch', line: 'Dispatch carries packing format, transport classification, documentation and carrier.', why: 'Transporting classified material has documentation that has to match the load.', example: 'Dispatch documentation matched to hazard classification.' },
    { id: 'work', title: 'Products, grades and formulations', line: 'Each product carries its formulation, theoretical yield, specification and permitted variants.', why: 'The formula is the baseline that actual yield is measured against.', example: 'Yield by product against formulation basis.' },
    { id: 'people', title: 'Operators, shift chemists and safety officers', line: 'Staff carry training, authorisations for hazard classes, shift assignment and batches run.', why: 'Handling authorisation is person-specific and auditable.', example: 'Yield variance by shift and operator group.' },
    { id: 'intelligence', title: 'Yield, disposition and compliance reporting', line: 'Yield by product, batch, lot and shift, disposition ageing, shelf life exposure and licence positions come from the records.', why: 'Both the margin and the licence depend on the same batch records.', example: 'Yield variance attributed to input lots.' },
    { id: 'ai', title: 'Ask the plant a question', line: 'Verity AI answers from your own batch, material, storage and dispatch records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about where yield went and what is undecided.', example: '"Which input lots correlate with low yield?" returns the batches and lots involved.' },
    { id: 'suppliers', title: 'Raw material suppliers and lot quality', line: 'Suppliers carry assay history, lot performance in production, lead times and pricing.', why: 'A cheaper lot that yields less is not cheaper.', example: 'Yield achieved by raw material supplier and lot.' },
    { id: 'orders', title: 'Customer orders, grades and packing', line: 'Orders carry grade, packing format, documentation requirements and delivery terms.', why: 'The same product sold in different formats is a different fulfilment problem.', example: 'Orders by grade and packing format against available batches.' },
  ],

  workflowsHeading: 'Charge, run, test, dispose, dispatch.',
  workflowsLede: 'These already happen. Recorded, yield becomes attributable and the licence stays evidenced.',
  workflows: [
    { name: 'Batch production', steps: ['Charge quantities issued from specific lots', 'Process conditions recorded during the run', 'Output weighed and recorded', 'Yield reconciled against the formulation', 'Variance attributed to lots, conditions or shift'], note: 'Attribution at close is the only point where the cause is still knowable.' },
    { name: 'Analysis and disposition', steps: ['Sample drawn and analysed against specification', 'Result recorded on the batch', 'Off-specification batches assigned a disposition owner', 'Reprocess, downgrade, blend or dispose decided', 'Outcome and cost recorded'], note: 'An undecided disposition is stock consuming space with no state.' },
    { name: 'Storage and segregation', steps: ['Material classified on receipt', 'Permitted locations identified from segregation rules', 'Put-away recorded against the bay', 'Quantity checked against licence limits', 'Breaches raised immediately'], note: 'Checking permitted location at put-away is what prevents the segregation breach.' },
    { name: 'Shelf life management', steps: ['Shelf life recorded per batch on production or receipt', 'Approaching expiry surfaced in advance', 'Sale, reprocess or disposal decided', 'Disposal documented where required', 'Write-off recorded'], note: 'Deciding before expiry is what converts a write-off into a downgraded sale.' },
    { name: 'Dispatch of classified goods', steps: ['Order matched to a released batch and grade', 'Packing format prepared', 'Transport classification and documentation generated', 'Carrier and vehicle checked for suitability', 'Dispatch recorded with documentation'], note: 'Documentation must describe the load actually leaving, not the order as written.' },
  ],

  ai: {
    heading: 'Ask about yield and dispositions.',
    lede: 'Verity AI reads the same batch, material, storage and dispatch records the plant creates as it runs. It answers from your own plant, respects permissions, and can turn an answer into a disposition or a purchasing decision.',
    panelMeta: 'Grounded in your plant records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which input lots correlate with low yield?',
      'What is yield by product, shift and operator group?',
      'Which off-specification batches have no disposition?',
      'What stock is approaching shelf life expiry?',
      'Which bays hold materials that should be segregated?',
      'What are we holding against licence quantity limits?',
      'Which suppliers give the best yield rather than the best price?',
      'What did reprocessing cost this quarter?',
      'Summarise yield and disposition position.',
    ],
  },

  automationHeading: 'Yield, disposition and segregation.',
  automationLede: 'Each runs from the plant’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Batch yield falls below a threshold', steps: ['Flagged with lots, conditions and shift', 'Investigation assigned', 'Cause and corrective action recorded'] },
    { trigger: 'A batch is off specification', steps: ['Disposition owner assigned with a deadline', 'Options surfaced with cost', 'Decision and outcome recorded'] },
    { trigger: 'Put-away would breach a segregation rule', steps: ['Blocked with the conflicting material named', 'Alternative locations surfaced', 'Placement recorded'] },
    { trigger: 'Stock approaches shelf life expiry', steps: ['Flagged with quantity and value', 'Sale, reprocess or disposal decision raised', 'Outcome recorded'] },
    { trigger: 'Holding approaches a licence quantity limit', steps: ['Flagged against the site and material', 'Receipt or production adjusted', 'Position updated'] },
  ],

  intelligenceHeading: 'What the plant can see.',
  intelligenceLede: 'Yield, disposition and compliance from batch records.',
  intelligence: [
    { area: 'Yield', points: ['Yield by product, batch and lot', 'Variance against formulation basis', 'Yield by shift and operator group', 'Cost of yield loss by product'] },
    { area: 'Quality', points: ['Off-specification rate by product', 'Disposition ageing and outcomes', 'Reprocessing cost and success', 'Analysis results against specification'] },
    { area: 'Materials', points: ['Supplier lot performance in production', 'Assay against yield achieved', 'Shelf life exposure by value', 'Consumption against charge specification'] },
    { area: 'Compliance', points: ['Segregation state by location', 'Licence quantities against holding', 'Handling authorisations by person', 'Dispatch documentation completeness'] },
  ],
  intelligenceNote: 'Verity records the plant’s operations. Process control and instrumentation continue as they are.',

  rolesHeading: 'One plant, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Managing director', question: 'Where is yield going?', focus: 'Yield against formulation, cost of loss, disposition ageing, supplier lot performance.' },
    { role: 'Production manager', question: 'What runs today and with which lots?', focus: 'Scheduled batches, material availability by lot, equipment status, shift assignment.' },
    { role: 'Quality', question: 'What is released and what is not?', focus: 'Analysis results, off-specification batches, dispositions outstanding, specification compliance.' },
    { role: 'Safety and compliance', question: 'Are we within our permissions?', focus: 'Segregation state, licence quantities, handling authorisations, dispatch documentation.' },
  ],

  useCasesHeading: 'What chemical manufacturers use Verity for',
  useCases: [
    { name: 'Attributing yield variance', body: 'Every batch carrying its input lots, quantities, conditions, duration and operator, so a yield shortfall has a cause rather than an average.' },
    { name: 'Deciding off-specification material', body: 'Batches outside specification carrying a disposition owner and deadline, so undecided stock does not accumulate in storage.' },
    { name: 'Enforcing segregation at put-away', body: 'Hazard classification on the material and permitted classes on the location, so incompatible storage is blocked when it is proposed.' },
    { name: 'Managing shelf life', body: 'Expiry tracked per batch and surfaced in advance, turning a write-off into a decision about downgrade or sale.' },
    { name: 'Supplier lots judged on yield', body: 'Raw material performance measured by what it produced rather than by what it cost.' },
    { name: 'Licence quantities and returns', body: 'Permitted quantities and reporting obligations held against material and site, reportable from the same records production creates.' },
    { name: 'Asking about the plant', body: 'Plain-language questions across yield, dispositions, storage and compliance, with investigations and decisions raised in the same step.' },
  ],

  migration: 'Process control and instrumentation continue and are mapped during implementation. Products and formulations, material lots with assay and shelf life, batch history, hazard classifications, storage locations and licence obligations are brought across.',

  faqHeading: 'Questions chemical manufacturers ask',
  faqs: [
    ['What can AI software do for a chemical manufacturer?', 'Verity AI answers questions from your own batch, material, storage and dispatch records: which input lots correlate with low yield, which off-specification batches have no disposition, what stock is approaching expiry, what is held against licence limits. Each answer can become an investigation or a disposition decision.'],
    ['How does it help with yield?', 'Yield is reconciled at batch close against the formulation basis, and the batch carries the specific lots, charge quantities, process conditions, duration and shift that produced it. That makes variance attributable to a cause instead of averaged across a month.'],
    ['What happens to off-specification batches?', 'They carry a disposition state with an owner and a deadline, and the options — reprocess, downgrade, blend or dispose — are recorded with their cost and outcome, so undecided material does not sit in storage indefinitely.'],
    ['Does it handle hazard classification?', 'Materials carry their classification and locations carry the classes they may hold, so a put-away that would breach a segregation rule is blocked at the point it is proposed rather than discovered during an inspection.'],
    ['Can it track shelf life?', 'Shelf life is held per batch with approaching expiry surfaced in advance, which is what allows a downgraded sale or reprocessing decision before the material becomes a disposal cost.'],
    ['Does it support licence obligations?', 'Permitted quantities and periodic reporting duties are held against the material and the site and are reportable from the production and storage records themselves.'],
    ['Does it replace process control systems?', 'No. Process control and instrumentation continue as they are. Verity holds the plant and the business around them — batches, materials, yield, dispositions, storage, dispatch and compliance.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of formulations, batch records, hazard classifications and licence obligations, configuration, migration of materials and batch history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with yield variance.',
  ctaLede: 'It is money, and it has a cause. Tell us what a batch record captures today.',

  related: ['manufacturers', 'pharmaceutical-manufacturers', 'food-manufacturers', 'industrial-suppliers', 'packaging-companies', 'exporters'],
};
