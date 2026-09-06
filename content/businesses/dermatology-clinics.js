export default {
  slug: 'dermatology-clinics',
  status: 'published',
  plural: 'dermatology clinics',
  subject: 'dermatology practice',

  seo: {
    title: 'AI business management software for dermatology clinics | Verity',
    description:
      'Verity connects high-value consumable batches, course packages, procedure documentation, retail skincare and practitioner capacity into one operational system.',
    keywords: [
      'AI software for dermatology clinics',
      'dermatology and aesthetics practice management',
      'injectable batch and expiry tracking',
      'treatment course package and documentation software',
    ],
  },

  hero: {
    eyebrow: 'Verity for dermatology practices',
    headline: 'A vial costs more than the consultation and expires whether or not you use it.',
    lede:
      'Dermatology consumables are high value, batch-dated and consumed in fractions. Verity tracks the vial, the course sold against it and the documentation the procedure requires.',
    note: 'Verity runs the practice. Clinical records and imaging stay where they are.',
    panel: {
      title: 'Practice',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Procedures', value: '412', note: 'across 3 practitioners' },
        { label: 'Consumable value', value: '₹9.4 L', note: 'held in stock' },
        { label: 'Expiring 60 days', value: '₹1.8 L', note: 'high-value batches' },
        { label: 'Course sessions owed', value: '640', note: 'prepaid' },
      ],
      rows: [
        { name: '₹1.8 L of high-value stock expiring within 60 days', meta: 'Consumed in fractions · usage plan needed', active: true },
        { name: '640 prepaid course sessions owed', meta: 'Against capacity that must absorb them', active: true },
        { name: 'Procedure documentation incomplete on 22 cases', meta: 'Consent and before-after records', active: true },
        { name: 'Retail skincare not attached to procedures', meta: 'Recommended, not sold', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'The consumable is expensive, dated and used in fractions.',
    paragraphs: [
      'Dermatology and aesthetic practices consume products that cost more per unit than the consultation that prescribes them, arrive in batches with expiry dates, and are used a fraction at a time. That combination is unusual: a vial partly used and then expiring is a loss of the remainder, and one point eight lakh expiring within sixty days needs a usage plan rather than a stock count.',
      'The second characteristic is course packages. Treatments are sold as courses paid up front and delivered over months, which produces cash today and a delivery obligation against capacity later. Six hundred and forty prepaid sessions is an obligation the practice has already been paid for.',
      'The third is documentation. Procedures require consent, before-and-after records and product batch traceability, and incomplete documentation is discovered at exactly the wrong moment.',
      'The fourth is retail. Skincare recommended during a consultation is genuine margin and is frequently recommended without being sold.',
      'The fifth is capacity, which has to absorb both new consultations and the prepaid course sessions already owed.',
      'Verity tracks consumable batches and fractional use, course liability against capacity, documentation completeness and retail attachment.',
    ],
  },

  terminology: [
    ['Products, vials, batches, devices', 'Inventory'],
    ['Consultations, procedures, courses', 'Work'],
    ['Patients, courses, packages', 'Relationships'],
    ['Consent, before-and-after, batch records', 'Records'],
    ['Practitioners, rooms, devices', 'Workforce'],
    ['Suppliers, distributors', 'Suppliers'],
    ['Clinic, treatment rooms, storage', 'Locations'],
  ],

  challengesHeading: 'Expensive consumables, prepaid obligations, required records.',
  challengesLede:
    'Dermatology difficulties come from high-value dated stock used in fractions and courses sold before they are delivered.',
  challenges: [
    { problem: 'Partly used vials expire', detail: 'A product is opened for one patient and the remainder expires before another suitable case appears.', outcome: 'Batch, opening date and remaining quantity are recorded, so usage is planned against expiry rather than discovered.' },
    { problem: 'Course liability is unmeasured', detail: 'Courses are sold up front and delivered over months, and the outstanding obligation is rarely totalled.', outcome: 'Course balances and expiry sit on the patient record, so liability and capacity impact are current.' },
    { problem: 'Documentation is incomplete', detail: 'Consent, before-and-after records and batch traceability are completed inconsistently and needed later.', outcome: 'Documentation is a checklist against the procedure with completeness as a state.' },
    { problem: 'Retail is recommended and not sold', detail: 'Skincare advised during a consultation is real margin that walks out unpurchased.', outcome: 'Recommendations are recorded against the consultation with attachment measured.' },
    { problem: 'Capacity must absorb prepaid sessions', detail: 'New consultations and owed course sessions compete for the same practitioner and room time.', outcome: 'Owed sessions are visible against capacity, so scheduling reflects the obligation.' },
    { problem: 'Batch traceability is manual', detail: 'Which batch was used on which patient is recorded on paper if at all.', outcome: 'Batch is recorded against the procedure automatically as stock is consumed.' },
  ],

  modulesLede: 'One system across consumables, courses, documentation and capacity.',
  modules: [
    { id: 'inventory', title: 'Products, vials and batches', line: 'Stock is held by batch with expiry, cost, storage requirement, opening date and remaining quantity.', why: 'High-value products used in fractions need remaining quantity and an opening date, not just a count.', example: 'One point eight lakh expiring within sixty days with a usage plan against it.' },
    { id: 'work', title: 'Consultations, procedures and courses', line: 'Each is work with a patient, practitioner, room, device, consumables used and documentation state.', why: 'The procedure is where consumable, capacity and record all meet.', example: 'Batch recorded against the procedure as stock is consumed.' },
    { id: 'relationships', title: 'Patients, courses and packages', line: 'Patients carry their procedures, course balances, expiry, skin history, recommendations and spend.', why: 'A prepaid course is an obligation to a specific patient with a date.', example: 'Six hundred and forty prepaid sessions owed across the patient base.' },
    { id: 'records', title: 'Consent, imaging references and batch records', line: 'Consent, before-and-after references and batch traceability attach to the procedure with completeness as a state.', why: 'Documentation is required and is discovered incomplete at the worst possible time.', example: 'Twenty-two procedures with incomplete documentation, surfaced as exceptions.' },
    { id: 'workforce', title: 'Practitioners, rooms and devices', line: 'Practitioner, room and device availability is recorded against procedures with utilisation measured.', why: 'Devices are capital with their own capacity and maintenance.', example: 'Device utilisation against the procedures requiring it.' },
    { id: 'suppliers', title: 'Suppliers and distributors', line: 'Suppliers carry batch supply, cold chain requirements, return terms, prices and balances.', why: 'High-value dated stock has return terms worth using.', example: 'Return eligibility on short-dated batches by supplier.' },
    { id: 'people', title: 'Practitioners and clinic staff', line: 'Staff are modelled once, with procedures, consumable use, documentation and retail attributed.', why: 'Consumable efficiency and retail attachment both vary by practitioner.', example: 'Consumable use per procedure by practitioner.' },
    { id: 'intelligence', title: 'Consumable, course and attachment reporting', line: 'Consumable use against procedures, expiry exposure, course liability against capacity, documentation completeness and retail attachment come from the records.', why: 'The practice’s largest costs and largest obligations are both measurable.', example: 'Course liability against available capacity by month.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own stock, procedure, course and patient records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about expiry, obligation and documentation.', example: '"What is expiring within sixty days and which patients could use it?" returns a usage plan.' },
    { id: 'workflows', title: 'Consent, approvals and write-offs', line: 'Consent, treatment approval, course extensions and write-offs move through defined steps with recorded decisions.', why: 'Course extensions and write-offs are frequent and consequential.', example: 'A course extension recorded with its effect on liability.' },
    { id: 'communication', title: 'Patient contact and recommendations', line: 'Recommendations, follow-ups and reminders attach to the patient or course they concern.', why: 'Retail and course completion both depend on a follow-up that gets made.', example: 'A skincare recommendation recorded and followed up.' },
    { id: 'control', title: 'Who can discount and write off', line: 'One permission model and one audit trail across every record.', why: 'High-value consumables and prepaid courses both need attribution.', example: 'Write-offs of expired product recorded with batch and reason.' },
  ],

  workflowsHeading: 'Vial, procedure, course, record.',
  workflowsLede: 'These already happen. Recorded at batch level, the expensive parts stop leaking.',
  workflows: [
    { name: 'Consumable use and traceability', steps: ['Batch received with expiry and storage recorded', 'Vial opened with date and remaining quantity tracked', 'Consumption recorded against the procedure and patient', 'Remaining quantity monitored against expiry', 'Usage planned to consume opened stock first'], note: 'An opened vial has a much shorter effective life than its expiry date suggests.' },
    { name: 'Course sale and delivery', steps: ['Course sold with sessions, value and expiry recorded', 'Liability added against the practice', 'Sessions scheduled against capacity', 'Balance reduced as sessions are delivered', 'Expiry approach raises booking prompts'], note: 'Prepaid sessions are capacity already committed and cash already taken.' },
    { name: 'Procedure documentation', steps: ['Consent recorded before the procedure', 'Before-and-after references captured', 'Batch and quantity recorded against the case', 'Documentation completeness checked', 'Exceptions raised and assigned'], note: 'Documentation is discovered incomplete at exactly the moment it is needed.' },
    { name: 'Retail attachment', steps: ['Recommendation recorded during the consultation', 'Product availability checked', 'Sale recorded against the consultation', 'Attachment rate reported by practitioner', 'Follow-up assigned where recommended and not purchased'], note: 'Retail recommended and not sold is margin that walks out of the room.' },
    { name: 'Expiry management', steps: ['Batches approaching expiry identified by value', 'Return eligibility checked against supplier terms', 'Usage plan built against upcoming procedures', 'Return, use-first or write-off decided', 'Outcome recorded against the batch'], note: 'With high unit values, a usage plan is worth more than a stock count.' },
  ],

  ai: {
    heading: 'Ask about vials, courses and records.',
    lede: 'Verity AI reads the same stock, procedure, course and patient records the practice creates as it works. It answers from your own clinic, respects permissions, and can turn an answer into scheduling and orders.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice.',
    questions: [
      'What is expiring within sixty days and which upcoming procedures could use it?',
      'How many prepaid course sessions are owed and when do they expire?',
      'Which procedures have incomplete documentation?',
      'What is consumable use per procedure by practitioner?',
      'What is retail attachment by practitioner and procedure type?',
      'Which opened vials have remaining quantity at risk?',
      'Is capacity sufficient for the course sessions owed?',
      'Which batches were used on which patients?',
      'Summarise expiry exposure and course liability.',
    ],
  },

  automationHeading: 'Expiry, obligation and documentation.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A batch approaches expiry', steps: ['Flagged with value and remaining quantity', 'Usage plan built against upcoming procedures', 'Return or write-off decision assigned'] },
    { trigger: 'A vial is opened', steps: ['Opening date and remaining quantity recorded', 'Effective life applied', 'Usage prioritised against unopened stock'] },
    { trigger: 'A course is sold', steps: ['Liability recorded with sessions and expiry', 'Sessions scheduled against capacity', 'Booking prompts raised as expiry approaches'] },
    { trigger: 'Procedure documentation is incomplete', steps: ['Exception raised against the case', 'Owner assigned', 'Completeness state updated on receipt'] },
    { trigger: 'A product is recommended and not purchased', steps: ['Recorded against the consultation', 'Follow-up assigned', 'Attachment rate updated by practitioner'] },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Consumables, obligations and records from the practice’s own procedures.',
  intelligence: [
    { area: 'Consumables', points: ['Batch expiry exposure by value', 'Opened vials and remaining quantity', 'Consumable use per procedure and practitioner', 'Write-offs by batch and reason'] },
    { area: 'Courses', points: ['Sessions owed and their expiry profile', 'Liability against available capacity', 'Redemption rate against sales', 'Extensions and refunds'] },
    { area: 'Documentation', points: ['Completeness by procedure type', 'Consent and reference capture', 'Batch traceability coverage', 'Exceptions and time to close'] },
    { area: 'Commercial', points: ['Retail attachment by practitioner', 'Revenue per procedure after consumables', 'Device utilisation', 'Patient return rate'] },
  ],
  intelligenceNote: 'Verity records the practice around treatment. Clinical records and imaging remain in your existing clinical systems.',

  rolesHeading: 'One practice, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Practice owner', question: 'What am I about to write off and what do I owe?', focus: 'Expiry exposure by value, course liability against capacity, consumable use per procedure, retail attachment.' },
    { role: 'Practitioner', question: 'What is this patient’s history and course position?', focus: 'Procedure history, course balance, documentation required, consumables and batches.' },
    { role: 'Clinic manager', question: 'What needs scheduling or ordering?', focus: 'Course sessions owed, expiring batches with usage plans, documentation exceptions, device availability.' },
  ],

  useCasesHeading: 'What dermatology practices use Verity for',
  useCases: [
    { name: 'Batch and fractional use', body: 'Opening dates and remaining quantities on high-value vials, so partly used stock is consumed before it expires.' },
    { name: 'Course liability', body: 'Prepaid sessions recorded with expiry and set against capacity, since the cash is taken and the obligation remains.' },
    { name: 'Documentation completeness', body: 'Consent, references and batch traceability as checklist items with completeness reportable rather than discovered.' },
    { name: 'Retail attachment', body: 'Recommendations recorded against consultations with attachment measured, since advised-and-unsold is margin lost in the room.' },
    { name: 'Expiry usage planning', body: 'Short-dated high-value stock matched against upcoming procedures rather than counted and written off.' },
    { name: 'Consumable efficiency', body: 'Use per procedure measured by practitioner, where unit costs make small differences material.' },
    { name: 'Asking about exposure', body: 'Plain-language questions across stock, courses, documentation and capacity, with scheduling raised in the same step.' },
  ],

  migration: 'Clinical records and imaging systems continue and are mapped during implementation. Stock by batch with expiry, patients with course balances, suppliers and devices are brought across.',

  faqHeading: 'Questions dermatology practices ask',
  faqs: [
    ['Does Verity hold clinical records or imaging?', 'No. Clinical records and imaging remain in your existing systems and are mapped during implementation. Verity records the practice around them — consumables and batches, courses, documentation completeness, capacity and retail.'],
    ['What can AI software do for a dermatology practice?', 'Verity AI answers questions from your own stock, procedure, course and patient records: what is expiring and which upcoming procedures could use it, how many prepaid sessions are owed, which procedures have incomplete documentation, what consumable use looks like by practitioner. Each answer can become scheduling or an order.'],
    ['Why track opening dates on vials?', 'Because an opened vial has a much shorter effective life than its printed expiry and is used in fractions. Recording the opening date and remaining quantity is what allows opened stock to be consumed before it is lost.'],
    ['How does it handle prepaid courses?', 'A course is recorded with its sessions, value and expiry, so the outstanding obligation is a current number and the capacity it will consume is visible against scheduling.'],
    ['Can it help with documentation?', 'Consent, before-and-after references and batch traceability are checklist items against the procedure with completeness as a reportable state, rather than something discovered incomplete when it matters.'],
    ['Does it measure retail attachment?', 'Recommendations made during consultations are recorded, so products advised and not purchased are visible and attachment rate is measurable by practitioner.'],
    ['Can it plan usage against expiry?', 'Short-dated high-value batches are matched against upcoming scheduled procedures, so a usage plan replaces a count — which matters when a single vial can be worth more than the consultation.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of consumables, course structures and documentation requirements, configuration, migration of stock and patients, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with what is about to expire.',
  ctaLede: 'At these unit values it is worth planning rather than counting. Tell us how batches are tracked today.',

  related: ['clinics', 'salons', 'spas', 'cosmetics-stores', 'physiotherapy-clinics', 'dental-clinics'],
};
