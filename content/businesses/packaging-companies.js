export default {
  slug: 'packaging-companies',
  status: 'published',
  plural: 'packaging companies',
  subject: 'packaging company',

  seo: {
    title: 'AI business management software for packaging companies | Verity',
    description:
      'Verity gives packaging companies one system for artwork versions and approvals, tooling and dies, make-ready waste, short-run economics and substrate consumption.',
    keywords: [
      'AI software for packaging companies',
      'packaging manufacturer management software',
      'artwork approval and version control software',
      'print job costing and make-ready waste software',
    ],
  },

  hero: {
    eyebrow: 'Verity for packaging companies',
    headline: 'You printed forty thousand of the version the customer replaced on Tuesday.',
    lede:
      'Packaging is made to a customer’s artwork, on a customer’s tooling, at a setup cost the run has to absorb. Verity holds all three against the job.',
    note: 'Verity runs the plant and the order book. Prepress and press controls stay where they are.',
    panel: {
      title: 'Plant',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Jobs run', value: '218', note: '74 customers' },
        { label: 'Make-ready waste', value: '6.8%', note: 'of substrate consumed' },
        { label: 'Jobs below viable run', value: '41', note: 'setup not recovered' },
        { label: 'Artwork versions in use', value: '3', note: 'on one product' },
      ],
      rows: [
        { name: '3 artwork versions live on one product', meta: 'Approval chain unclear', active: true },
        { name: '41 jobs below viable run length', meta: 'Setup cost exceeds margin', active: true },
        { name: 'Make-ready waste 6.8% against 4% target', meta: 'Concentrated on two presses', active: true },
        { name: '7 tools past service or unlocated', meta: 'Customer-owned dies', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own plant in this shape.',
    },
  },

  overview: {
    heading: 'Every job is a setup, and the setup is where the money goes.',
    paragraphs: [
      'A packaging company converts substrate into a customer’s specific product, which means every job carries a setup: plates or dies mounted, colours matched, registration achieved, and substrate wasted before the first good unit. Six point eight per cent make-ready waste against a four per cent target is material bought and destroyed, and it concentrates on specific presses and specific job types rather than spreading evenly.',
      'The second characteristic is that setup cost is fixed per job and recovered per unit. Forty-one jobs below viable run length is a set of orders accepted at prices that never covered their own setup, and that only becomes visible when setup is costed against the run rather than absorbed as overhead.',
      'The third is artwork. The product is defined by a customer file that changes, and three live versions on one product is the condition in which a large run gets printed to a superseded design. Which version was approved, by whom and when is the difference between a reprint the customer pays for and one the company absorbs.',
      'The fourth is tooling. Dies, plates and cylinders are often customer-owned, have a life, and need to be located before a job can run. Seven tools past service or unlocated is seven jobs that cannot start on time.',
      'Verity holds artwork versions and approvals, tooling location and life, and setup against run economics on the job record.',
    ],
  },

  terminology: [
    ['Jobs, runs, repeats', 'Work'],
    ['Artwork, versions, approvals', 'Records'],
    ['Dies, plates, cylinders, tooling', 'Inventory'],
    ['Substrate, ink, adhesive', 'Inventory'],
    ['Make-ready, setup, changeover', 'Workflows'],
    ['Brand owners, converters, traders', 'Relationships'],
    ['Press operators, prepress, finishing', 'People'],
  ],

  challengesHeading: 'Fixed setup, variable runs, and artwork that keeps moving.',
  challengesLede:
    'Packaging difficulties come from making a customer’s design on a customer’s tooling.',
  challenges: [
    { problem: 'Superseded artwork gets printed', detail: 'A version changes and the job runs on the file already at the press.', outcome: 'Artwork carries versions and approvals, with the approved version bound to the job.' },
    { problem: 'Setup cost is absorbed rather than costed', detail: 'Short runs are priced on material and per-unit rate with make-ready treated as overhead.', outcome: 'Setup is costed against the job, so viable run length is known before acceptance.' },
    { problem: 'Make-ready waste has no owner', detail: 'Waste is measured in total and not attributed to press, operator or job type.', outcome: 'Waste is recorded per job with press, operator and cause.' },
    { problem: 'Tooling cannot be found or is out of life', detail: 'Customer-owned dies and plates are stored, borrowed and worn without a location record.', outcome: 'Tooling carries location, ownership, impressions run and service state.' },
    { problem: 'Repeat jobs are re-estimated from scratch', detail: 'A job that ran last year is quoted again without reference to what it actually consumed.', outcome: 'Actual consumption and waste from previous runs sit against the repeat.' },
    { problem: 'Colour matching consumes unrecorded time', detail: 'Achieving an approved match takes press time nobody bills or measures.', outcome: 'Colour approval time is recorded against the job as part of setup.' },
  ],

  modulesLede: 'One system across jobs, artwork, tooling and consumption.',
  modules: [
    { id: 'work', title: 'Jobs, runs and repeats', line: 'Each job carries its artwork version, tooling, substrate, run length, setup cost, actual consumption and margin, linked to previous runs of the same product.', why: 'A repeat job’s best estimate is what the last one actually consumed.', example: 'Forty-one jobs below viable run length.' },
    { id: 'records', title: 'Artwork, versions and approvals', line: 'Artwork carries version, approver, approval date and the jobs bound to it, with superseded versions marked.', why: 'Printing a superseded version is the most expensive error in the business.', example: 'Three artwork versions live on one product.' },
    { id: 'inventory', title: 'Tooling, dies, plates and cylinders', line: 'Tools carry ownership, location, impressions run, service state and the jobs that need them.', why: 'Customer-owned tooling has to be findable and fit before a job can be scheduled.', example: 'Seven tools past service or unlocated.' },
    { id: 'workflows', title: 'Make-ready, setup and changeover', line: 'Setup time, colour approval, waste before first good unit and changeover are recorded per job and press.', why: 'The setup is the cost that decides whether a run was worth taking.', example: 'Make-ready waste concentrated on two presses.' },
    { id: 'orders', title: 'Estimates, orders and job costing', line: 'Estimates carry setup, substrate, run rate and margin, compared with actual consumption at job close.', why: 'The gap between estimate and actual is the pricing correction.', example: 'Estimated against actual consumption per job.' },
    { id: 'relationships', title: 'Brand owners, converters and traders', line: 'Customers carry their products, artwork, tooling, run patterns and approval contacts.', why: 'Approval authority sits with a specific person on the customer’s side.', example: 'Approval chain by customer and product.' },
    { id: 'people', title: 'Prepress, press operators and finishing', line: 'Staff carry shift, press assignment, jobs run, setup times and waste.', why: 'Make-ready performance varies by operator and is improvable once measured.', example: 'Setup time and waste by operator and press.' },
    { id: 'intelligence', title: 'Waste, setup and margin reporting', line: 'Waste by press and job type, setup recovery, viable run length, tooling utilisation and repeat accuracy come from the records.', why: 'The business is a setup-cost business and needs to measure setup.', example: 'Setup recovery by customer and run length.' },
    { id: 'ai', title: 'Ask the plant a question', line: 'Verity AI answers from your own job, artwork, tooling and consumption records, respects permissions, and can create assigned follow-ups.', why: 'The questions that matter are about which jobs lose money and which artwork is live.', example: '"Which jobs ran below viable length?" returns forty-one with customers and setup cost.' },
    { id: 'suppliers', title: 'Substrate, ink and consumable suppliers', line: 'Suppliers carry substrate specifications, lot behaviour on press, lead times and pricing.', why: 'Substrate that runs badly costs more than its price difference in waste.', example: 'Waste rate by substrate lot and supplier.' },
    { id: 'control', title: 'Approvals, specification and authority', line: 'One permission model and one audit trail covering artwork release, specification change and job start authority.', why: 'A job started without a bound approved version is an avoidable liability.', example: 'Job start blocked without an approved artwork version.' },
    { id: 'logistics', title: 'Dispatch, pallets and delivery', line: 'Dispatch records carry pallet configuration, quantities, date and customer receipt.', why: 'Packaging is delivered in configurations that customers’ lines depend on.', example: 'Delivered configuration recorded against the order.' },
  ],

  workflowsHeading: 'Estimate, approve, mount, run, close.',
  workflowsLede: 'These already happen. Recorded, setup stops being invisible.',
  workflows: [
    { name: 'Estimating a job', steps: ['Specification and run length captured', 'Tooling availability and condition checked', 'Setup, substrate and run rate costed', 'Viable run length compared with the enquiry', 'Estimate issued with margin position'], note: 'Comparing enquiry length with viable length before quoting is what prevents an unrecoverable job.' },
    { name: 'Artwork approval', steps: ['Version received from the customer', 'Proof produced and issued to the approver', 'Approval recorded with person and date', 'Version bound to the job', 'Prior versions marked superseded'], note: 'Binding the approved version to the job is what stops a superseded print run.' },
    { name: 'Setup and make-ready', steps: ['Tooling located and mounted', 'Colour matched and approved', 'Waste before first good unit recorded', 'Setup time captured', 'Run released'], note: 'Recording waste before the first good unit is where the improvable number lives.' },
    { name: 'Production run', steps: ['Substrate issued by lot', 'Output and in-run waste recorded', 'Quality checks captured', 'Finishing and packing completed', 'Actual consumption reconciled against estimate'], note: 'The reconciliation at close is what corrects the next estimate.' },
    { name: 'Tooling lifecycle', steps: ['Tool registered with ownership and location', 'Impressions recorded per run', 'Service or replacement raised at threshold', 'Customer informed where tooling is theirs', 'Location updated on movement'], note: 'Customer-owned tooling is an obligation as well as an asset.' },
  ],

  ai: {
    heading: 'Ask about setup and artwork.',
    lede: 'Verity AI reads the same job, artwork, tooling and consumption records the plant creates as it runs. It answers from your own plant, respects permissions, and can turn an answer into a pricing or scheduling decision.',
    panelMeta: 'Grounded in your plant records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which jobs ran below viable run length?',
      'Which products have more than one live artwork version?',
      'What is make-ready waste by press and operator?',
      'Which tools are past service or unlocated?',
      'How did actual consumption compare with estimate by job?',
      'Which substrate lots produced the most waste?',
      'What is setup recovery by customer?',
      'Which repeat jobs are quoted below what they last consumed?',
      'Summarise waste, setup and margin position.',
    ],
  },

  automationHeading: 'Artwork, viability and waste.',
  automationLede: 'Each runs from the plant’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A job is scheduled without an approved artwork version', steps: ['Job start blocked', 'Approval chased with the customer contact', 'Version bound on approval'] },
    { trigger: 'An enquiry falls below viable run length', steps: ['Flagged with setup cost and margin', 'Minimum quantity or price surfaced', 'Decision recorded on the estimate'] },
    { trigger: 'Make-ready waste exceeds target on a job', steps: ['Recorded against press, operator and substrate', 'Cause captured', 'Pattern surfaced across recent jobs'] },
    { trigger: 'A tool reaches its impression threshold', steps: ['Service or replacement raised', 'Owner notified where customer-owned', 'Jobs needing it flagged'] },
    { trigger: 'Actual consumption exceeds estimate', steps: ['Variance recorded at job close', 'Estimate basis flagged for revision', 'Repeat pricing updated'] },
  ],

  intelligenceHeading: 'What the plant can see.',
  intelligenceLede: 'Setup, waste and margin from job records.',
  intelligence: [
    { area: 'Setup', points: ['Setup time by press and job type', 'Make-ready waste against target', 'Colour approval time', 'Setup recovery by run length'] },
    { area: 'Jobs', points: ['Estimated against actual consumption', 'Margin by job and customer', 'Jobs below viable run length', 'Repeat accuracy'] },
    { area: 'Artwork', points: ['Live versions by product', 'Approval turnaround by customer', 'Jobs bound to approved versions', 'Reprints caused by version error'] },
    { area: 'Tooling', points: ['Location and ownership', 'Impressions and service state', 'Utilisation by tool', 'Jobs delayed by tooling'] },
  ],
  intelligenceNote: 'Verity records the plant’s operations. Prepress and press control systems continue as they are.',

  rolesHeading: 'One plant, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Managing director', question: 'Which jobs are worth running?', focus: 'Setup recovery, margin by job and customer, waste against target, viable run lengths.' },
    { role: 'Production planner', question: 'What can I schedule?', focus: 'Approved artwork, tooling availability, press capacity, changeover sequence.' },
    { role: 'Prepress', question: 'Which version is approved?', focus: 'Artwork versions, approval chain, proofs issued, jobs bound to versions.' },
    { role: 'Estimator', question: 'What should this job cost?', focus: 'Setup and run rates, previous actual consumption, substrate pricing, viable quantity.' },
  ],

  useCasesHeading: 'What packaging companies use Verity for',
  useCases: [
    { name: 'Binding jobs to approved artwork', body: 'Versions with approver and date, bound to the job before it starts, so a large run cannot be printed to a superseded design.' },
    { name: 'Costing setup against the run', body: 'Make-ready costed per job rather than absorbed as overhead, which makes viable run length a number the estimator can use.' },
    { name: 'Attributing make-ready waste', body: 'Waste before the first good unit recorded with press, operator, substrate and cause, so improvement has a target.' },
    { name: 'Tracking customer-owned tooling', body: 'Dies, plates and cylinders with ownership, location, impressions and service state, so a job is not delayed looking for a tool.' },
    { name: 'Pricing repeats from actuals', body: 'Previous consumption and waste attached to the product, so a repeat job is quoted from what it really used.' },
    { name: 'Substrate performance on press', body: 'Waste rates recorded by substrate lot and supplier, because material that runs badly costs more than its price advantage.' },
    { name: 'Asking about the plant', body: 'Plain-language questions across jobs, artwork, tooling and waste, with pricing and scheduling decisions raised in the same step.' },
  ],

  migration: 'Prepress and press control systems continue and are mapped during implementation. Customers and products, artwork versions and approval history, tooling registers, job history with actual consumption, substrate records and estimates are brought across.',

  faqHeading: 'Questions packaging companies ask',
  faqs: [
    ['What can AI software do for a packaging company?', 'Verity AI answers questions from your own job, artwork, tooling and consumption records: which jobs ran below viable run length, which products have more than one live artwork version, what make-ready waste is by press and operator, which tools are past service. Each answer can become a pricing or scheduling decision.'],
    ['How does it prevent printing the wrong artwork version?', 'Artwork carries versions with the approver and approval date, and the approved version is bound to the job. A job scheduled without a bound approved version is blocked, and superseded versions are marked when a new one is approved.'],
    ['Why cost setup per job?', 'Because setup is fixed per job and recovered per unit. Treating make-ready as overhead hides the fact that short runs can be accepted at prices that never covered their own setup, which is only visible when the cost sits on the job.'],
    ['How is make-ready waste improved?', 'Waste before the first good unit is recorded per job with the press, operator, substrate and cause, which turns a plant-wide percentage into a specific and addressable pattern.'],
    ['Can it manage customer-owned tooling?', 'Tools carry ownership, location, impressions run and service state, with the jobs that need them attached, so tooling is findable and fit before a job is scheduled.'],
    ['Does it help with repeat pricing?', 'Actual consumption, waste and setup time from previous runs sit against the product, so a repeat is estimated from what it really used rather than re-estimated from assumptions.'],
    ['Does it replace prepress software?', 'No. Prepress and press control systems continue as they are. Verity holds the plant and the order book around them — jobs, artwork versions, tooling, setup, consumption and margin.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of job types, setup structures, artwork approval chains and tooling registers, configuration, migration of job and artwork history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the jobs below viable run length.',
  ctaLede: 'They are the ones the setup ate. Tell us how setup is costed today.',

  related: ['manufacturers', 'printing-businesses', 'food-manufacturers', 'furniture-manufacturers', 'industrial-suppliers', 'exporters'],
};
