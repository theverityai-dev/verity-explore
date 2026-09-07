export default {
  slug: 'pharmaceutical-manufacturers',
  status: 'published',
  plural: 'pharmaceutical manufacturers',
  subject: 'pharmaceutical manufacturer',

  seo: {
    title: 'AI business software for pharmaceutical manufacturers | Verity',
    description:
      'Verity gives pharmaceutical manufacturers one system for batch record completeness, deviations and corrective actions, release status, stability and recall traceability.',
    keywords: [
      'AI software for pharmaceutical manufacturers',
      'pharmaceutical manufacturing management software',
      'batch record and deviation tracking software',
      'pharma release and recall traceability',
    ],
  },

  hero: {
    eyebrow: 'Verity for pharmaceutical manufacturers',
    headline: 'The batch is made. Until the record is complete, it does not exist.',
    lede:
      'In pharmaceutical manufacturing the documentation is not evidence of the product, it is a condition of it. Verity keeps the record complete as the batch is made.',
    note: 'Verity runs the operation around your validated systems. Regulated process equipment stays where it is.',
    panel: {
      title: 'Site',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Batches awaiting release', value: '23', note: '9 on documentation' },
        { label: 'Open deviations', value: '17', note: '6 past target closure' },
        { label: 'Corrective actions overdue', value: '8', note: 'across 5 deviations' },
        { label: 'Stability protocols active', value: '31', note: '4 pulls due this month' },
      ],
      rows: [
        { name: '9 batches held on incomplete documentation', meta: 'Product made, value unrealisable', active: true },
        { name: '6 deviations past target closure', meta: 'Ageing without owner escalation', active: true },
        { name: '8 corrective actions overdue', meta: 'Effectiveness not yet verified', active: true },
        { name: '4 stability pulls due this month', meta: 'Protocol schedule', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own site in this shape.',
    },
  },

  overview: {
    heading: 'The record is the product, and an incomplete one is unsaleable inventory.',
    paragraphs: [
      'Pharmaceutical manufacturing has a characteristic no other manufacturing shares: a physically perfect batch with an incomplete record cannot be released. Nine batches held on documentation is finished value that cannot be invoiced, and the cause is almost never the product. It is a missing signature, an unattached result, an unclosed line clearance.',
      'The second characteristic is deviations. Anything that departs from the approved procedure has to be recorded, investigated, assessed for impact and closed, and six deviations past their target closure is regulatory exposure accumulating quietly alongside held product.',
      'The third is that corrective actions have to be shown to have worked. Eight overdue corrective actions is a commitment made to a regulator or an auditor that has not been discharged, and effectiveness verification is the part most often missed.',
      'The fourth is stability. Products are on protocols with scheduled pulls, and a missed pull invalidates a data set that cannot be reconstructed.',
      'The fifth is traceability in both directions: from a finished pack back to its raw material lots, and from a raw material lot forward to every batch and customer it reached.',
      'Verity keeps the batch record complete as work happens, ages deviations and corrective actions against owners, and holds traceability in both directions.',
    ],
  },

  terminology: [
    ['Products, strengths, presentations', 'Work'],
    ['Batches, stages, line clearance', 'Workflows'],
    ['Deviations, investigations, corrective actions', 'Records'],
    ['Active ingredients, excipients, packaging', 'Inventory'],
    ['Release, quarantine, rejection', 'Control'],
    ['Distributors, institutions, markets', 'Relationships'],
    ['Operators, analysts, quality staff', 'People'],
  ],

  challengesHeading: 'Complete documentation is the release condition.',
  challengesLede:
    'Pharmaceutical difficulties come from a product whose record is part of the product.',
  challenges: [
    { problem: 'Batches wait on documentation, not on product', detail: 'Manufacturing is complete and release is blocked by missing entries or signatures.', outcome: 'Record completeness is visible per batch as it is made, so gaps are closed at the stage.' },
    { problem: 'Deviations age without escalation', detail: 'Investigations run past target closure with no owner being pressed.', outcome: 'Deviations carry owner, target date and ageing, with escalation at threshold.' },
    { problem: 'Corrective action effectiveness is never verified', detail: 'The action is completed and whether it worked is not assessed.', outcome: 'Effectiveness verification is a scheduled step with its own owner and evidence.' },
    { problem: 'Stability pulls are missed', detail: 'A scheduled pull passes and the data point cannot be recovered.', outcome: 'Protocols generate scheduled pulls with owners and completion evidence.' },
    { problem: 'Traceability is reconstructed under pressure', detail: 'A recall question requires assembling lot genealogy from several systems.', outcome: 'Forward and backward traceability is a query against the records, not a project.' },
    { problem: 'Training and authorisation lapse silently', detail: 'A person performs a step they are no longer qualified for.', outcome: 'Authorisation and training currency sit against the person and the step.' },
  ],

  modulesLede: 'One system across batches, quality events, release and traceability.',
  modules: [
    { id: 'workflows', title: 'Batches, stages and record completeness', line: 'Each batch carries its stages, line clearance, in-process checks, entries, signatures and current completeness against the required record.', why: 'Completeness at the stage is what prevents a held batch at release.', example: 'Nine batches held on incomplete documentation.' },
    { id: 'records', title: 'Deviations, investigations and corrective actions', line: 'Quality events carry classification, impact assessment, investigation, owner, target closure, actions and effectiveness verification.', why: 'Ageing quality events are regulatory exposure and held product at the same time.', example: 'Six deviations past target closure with eight overdue actions.' },
    { id: 'control', title: 'Release, quarantine and authority', line: 'One permission model and one audit trail, with quarantine, release and rejection as controlled states carried by authorised people.', why: 'Release authority is personal and auditable, and the state of every batch must be unambiguous.', example: 'Twenty-three batches awaiting release by state and blocker.' },
    { id: 'inventory', title: 'Actives, excipients, packaging and lots', line: 'Materials are held by lot with supplier, analysis, retest date, quarantine state and consumption per batch.', why: 'Traceability starts at the material lot and its release status.', example: 'Material lots consumed by batch with release status.' },
    { id: 'intelligence', title: 'Release, quality event and traceability reporting', line: 'Held batches by cause, deviation ageing, action closure, stability adherence and traceability queries come from the records.', why: 'Site performance is measured in release cycle time and quality event closure.', example: 'Release cycle time by product and blocker type.' },
    { id: 'work', title: 'Products, strengths and presentations', line: 'Each product carries its specification, required batch record structure, stability protocols and market authorisations.', why: 'What a batch record must contain is a property of the product and its markets.', example: 'Required record structure by product and market.' },
    { id: 'people', title: 'Operators, analysts and quality staff', line: 'Staff carry training currency, authorisations per step, and the batches and analyses they performed.', why: 'A step performed without current authorisation is a deviation by itself.', example: 'Authorisation currency against steps performed.' },
    { id: 'ai', title: 'Ask the site a question', line: 'Verity AI answers from your own batch, quality event, material and release records, respects permissions, and can create assigned follow-ups.', why: 'The questions that matter are about what is held and what is ageing.', example: '"Which batches are held and on what?" returns twenty-three by blocker.' },
    { id: 'locations', title: 'Sites, lines, rooms and stores', line: 'Locations carry classification, line clearance status, equipment and current batch occupancy.', why: 'Line clearance is a record with a place and a time attached.', example: 'Line clearance status by room and line.' },
    { id: 'suppliers', title: 'Material suppliers and qualification', line: 'Suppliers carry qualification status, audit history, lot performance and change notifications.', why: 'A supplier change is a regulatory event, not only a commercial one.', example: 'Supplier qualification status against materials in use.' },
    { id: 'logistics', title: 'Dispatch, distribution and recall reach', line: 'Dispatch records connect released batches to distributors, institutions and markets.', why: 'Recall reach is only as good as the record of where the batch went.', example: 'Forward traceability from a lot to every customer reached.' },
    { id: 'communication', title: 'Regulatory and customer correspondence', line: 'Queries, notifications and commitments attach to the batch, product or event they concern.', why: 'A commitment made in correspondence has to become a tracked obligation.', example: 'Regulatory commitments recorded against the events they arose from.' },
  ],

  workflowsHeading: 'Dispense, manufacture, test, review, release.',
  workflowsLede: 'These already happen. Recorded as they happen, release stops waiting on paperwork.',
  workflows: [
    { name: 'Batch manufacture', steps: ['Line clearance recorded before start', 'Materials dispensed from released lots', 'Stage entries and in-process checks captured as performed', 'Deviations raised at the point they occur', 'Record completeness confirmed at stage close'], note: 'Capturing entries as they are performed is what prevents reconstruction at review.' },
    { name: 'Deviation and investigation', steps: ['Event recorded with classification and immediate action', 'Impact assessed on batches and products', 'Investigation assigned with target closure', 'Corrective actions defined with owners', 'Effectiveness verified and event closed'], note: 'Effectiveness verification is the step most often left undone.' },
    { name: 'Batch review and release', steps: ['Record completeness checked against requirement', 'Analytical results attached and reviewed', 'Open deviations affecting the batch assessed', 'Release decision made by authorised person', 'State recorded and stock made available'], note: 'A batch cannot be released while an affecting deviation is open.' },
    { name: 'Stability programme', steps: ['Protocol defined per product and presentation', 'Pulls scheduled with owners', 'Samples pulled and tested on schedule', 'Results recorded against the protocol', 'Trends reviewed and reported'], note: 'A missed pull creates a gap that cannot be filled later.' },
    { name: 'Traceability and recall', steps: ['Material lot or finished batch identified', 'Backward genealogy assembled to source lots', 'Forward reach assembled to customers and markets', 'Affected quantity determined', 'Notification and retrieval tracked'], note: 'Both directions have to be answerable within hours, not days.' },
  ],

  ai: {
    heading: 'Ask about held batches and open events.',
    lede: 'Verity AI reads the same batch, quality event, material and release records the site creates as it operates. It answers from your own site, respects permissions, and can turn an answer into an assigned investigation or closure task.',
    panelMeta: 'Grounded in your site records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which batches are held and on what blocker?',
      'Which deviations are past target closure and who owns them?',
      'Which corrective actions are overdue on effectiveness verification?',
      'Which stability pulls are due or missed?',
      'Which batches used this material lot?',
      'Which customers received batches from this lot?',
      'What is release cycle time by product?',
      'Which staff performed steps outside current authorisation?',
      'Summarise release and quality event position.',
    ],
  },

  automationHeading: 'Completeness, ageing and schedules.',
  automationLede: 'Each runs from the site’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A batch stage closes with incomplete entries', steps: ['Gaps listed against the stage', 'Owner assigned before progression', 'Completeness updated on entry'] },
    { trigger: 'A deviation approaches target closure', steps: ['Escalated to the owner and quality', 'Affected batches listed', 'Extension or closure recorded'] },
    { trigger: 'A corrective action passes its due date', steps: ['Flagged with the originating event', 'Escalation raised', 'Effectiveness verification scheduled on completion'] },
    { trigger: 'A stability pull becomes due', steps: ['Task raised with protocol and owner', 'Sample and test recorded', 'Result attached to the protocol'] },
    { trigger: 'A person’s authorisation lapses', steps: ['Affected steps and schedules flagged', 'Retraining assigned', 'Authorisation restored on completion'] },
  ],

  intelligenceHeading: 'What the site can see.',
  intelligenceLede: 'Release, quality events and traceability from operating records.',
  intelligence: [
    { area: 'Release', points: ['Batches by state and blocker', 'Release cycle time by product', 'Documentation gaps by stage', 'Value held awaiting release'] },
    { area: 'Quality events', points: ['Deviations by classification and age', 'Investigation closure performance', 'Corrective action completion and effectiveness', 'Recurring event patterns'] },
    { area: 'Materials', points: ['Lot release status and retest dates', 'Supplier qualification currency', 'Lot performance in manufacture', 'Quarantined stock by value'] },
    { area: 'Traceability', points: ['Backward genealogy per batch', 'Forward reach per lot', 'Stability protocol adherence', 'Market and authorisation coverage'] },
  ],
  intelligenceNote: 'Verity records the site’s operations around your validated systems. Regulated process equipment continues as it is.',

  rolesHeading: 'One site, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Site head', question: 'What is held and why?', focus: 'Batches awaiting release by blocker, value held, deviation ageing, release cycle time.' },
    { role: 'Production', question: 'Is the record complete as we go?', focus: 'Stage entries, line clearance, in-process checks, deviations raised at source.' },
    { role: 'Quality assurance', question: 'What can be released?', focus: 'Record review, open deviations affecting batches, release decisions, authorisation currency.' },
    { role: 'Regulatory', question: 'Are commitments discharged?', focus: 'Corrective action closure and effectiveness, stability adherence, traceability readiness, correspondence commitments.' },
  ],

  useCasesHeading: 'What pharmaceutical manufacturers use Verity for',
  useCases: [
    { name: 'Keeping the batch record complete as it is made', body: 'Entries, checks and signatures captured at the stage with completeness visible, so release is not blocked by documentation on a physically finished batch.' },
    { name: 'Ageing deviations against owners', body: 'Quality events carrying classification, impact, owner and target closure with escalation at threshold, so investigations do not drift past their dates.' },
    { name: 'Verifying corrective action effectiveness', body: 'Effectiveness verification scheduled as its own step with evidence, closing the part of the cycle most often left open.' },
    { name: 'Stability protocol adherence', body: 'Pulls generated on schedule with owners and results attached, because a missed pull is a gap that cannot be filled later.' },
    { name: 'Traceability in both directions', body: 'Backward genealogy from a batch to its source lots and forward reach from a lot to every customer, answerable as a query.' },
    { name: 'Authorisation currency', body: 'Training and step authorisation held against people, so a step performed without current qualification is prevented rather than found.' },
    { name: 'Asking about the site', body: 'Plain-language questions across held batches, quality events, materials and traceability, with investigations assigned in the same step.' },
  ],

  migration: 'Validated process and analytical systems continue and are mapped during implementation. Products and record structures, material lots with release status, batch history, open deviations and corrective actions, stability protocols and distribution records are brought across.',

  faqHeading: 'Questions pharmaceutical manufacturers ask',
  faqs: [
    ['What can AI software do for a pharmaceutical manufacturer?', 'Verity AI answers questions from your own batch, quality event, material and release records: which batches are held and on what blocker, which deviations are past target closure, which corrective actions are overdue on effectiveness verification, which customers received batches from a given lot. Each answer can become an assigned investigation or closure task.'],
    ['Why treat documentation as the constraint?', 'Because a physically perfect batch with an incomplete record cannot be released. The value is already spent and unrealisable, and the cause is usually a missing entry or signature rather than anything about the product.'],
    ['How does it handle deviations?', 'Every event carries its classification, immediate action, impact assessment, investigation owner, target closure, corrective actions and effectiveness verification, with ageing visible and escalation at threshold.'],
    ['What about corrective action effectiveness?', 'Effectiveness verification is scheduled as its own step with an owner and evidence, which is the part of the cycle most often completed on paper and not in practice.'],
    ['Can it answer a recall question quickly?', 'Traceability runs both ways: backward from a finished batch to every source material lot, and forward from a lot to every batch, distributor and market it reached. Both are queries against the records rather than reconstruction projects.'],
    ['Does it manage stability programmes?', 'Protocols generate scheduled pulls with owners, and results are recorded against the protocol, so adherence is visible and a missed pull is caught rather than discovered at review.'],
    ['Does it replace validated systems?', 'No. Validated process and analytical systems continue as they are and are mapped during implementation. Verity holds the operation around them — batches, records, quality events, release states, materials and traceability.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of products, batch record structures, quality event processes and stability protocols, configuration, migration, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the batches held on documentation.',
  ctaLede: 'They are finished product you cannot invoice. Tell us what blocks release most often today.',

  related: ['chemical-manufacturers', 'medical-distributors', 'manufacturers', 'pharmacies', 'diagnostic-labs', 'exporters'],
};
