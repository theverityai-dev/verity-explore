export default {
  slug: 'construction-companies',
  status: 'published',
  plural: 'construction companies',
  subject: 'construction company',

  seo: {
    title: 'AI business management software for construction companies | Verity',
    description:
      'Verity connects bill of quantities, subcontractor packages, material at site, progress billing, retention, labour and safety records into one operational system.',
    keywords: [
      'AI software for construction companies',
      'construction project management software',
      'BOQ and progress billing tracking',
      'subcontractor and material at site management',
    ],
  },

  hero: {
    eyebrow: 'Verity for construction',
    headline: 'The project was profitable at tender and is not now, and the difference happened in fifty small pieces.',
    lede:
      'Variations done without instruction, material issued and unaccounted, subcontractor claims agreed on site. Verity records each piece where it happens, so the margin does not disappear silently.',
    note: 'Runs alongside your existing accounting and design tools.',
    panel: {
      title: 'Projects',
      meta: 'All sites · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active projects', value: '9', note: '₹184 Cr contract value' },
        { label: 'Unbilled progress', value: '₹9.4 Cr', note: 'work done, not certified' },
        { label: 'Variations unapproved', value: '38', note: '₹4.1 Cr executed' },
        { label: 'Retention held', value: '₹12.6 Cr', note: '₹2.2 Cr past release date' },
      ],
      rows: [
        { name: '38 variations executed without written instruction', meta: '₹4.1 Cr · recovery at risk', active: true },
        { name: '₹2.2 Cr retention past its release date', meta: 'No release request raised', active: true },
        { name: 'Material issued at Site 3 exceeds consumption by 8%', meta: 'Unreconciled for six weeks', active: true },
        { name: 'Subcontractor claim above certified quantity', meta: '₹64 L · measurement disputed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own projects in this shape.',
    },
  },

  overview: {
    heading: 'Construction margin is lost in small pieces, on site, over months.',
    paragraphs: [
      'A project is tendered against a bill of quantities with a calculated margin. What arrives at the end is a different number, and the difference is almost never one large event. It is fifty small ones: a variation executed on a verbal instruction and never approved, material issued to site and not reconciled against consumption, a subcontractor claim agreed by a site engineer above the certified quantity, retention that nobody requested at the release date.',
      'Each of those is recoverable at the moment it happens and largely irrecoverable afterwards. A variation without written instruction is disputed months later when the client’s representative has changed. Material unaccounted for six weeks is untraceable. Retention past its release date has to be chased against a client who has moved on.',
      'The second structural problem is that construction data lives on site and reporting lives in an office. Progress, measurement, material and labour are recorded on paper at the site and reach the office as a monthly summary, which is far too slow for a business where the cost accrues daily.',
      'The third is that progress billing depends on measurement. Work done and not certified is money earned and unbilled, and it sits on the balance sheet as a project asset while the company funds it.',
      'Verity records the variation, the measurement, the material movement, the subcontractor package and the retention as they happen, at the site, against the project.',
    ],
  },

  terminology: [
    ['Projects, packages, bill of quantities', 'Records'],
    ['Activities, milestones, progress', 'Work'],
    ['Materials at site, consumption, wastage', 'Inventory'],
    ['Subcontractors, suppliers, plant hire', 'Suppliers'],
    ['Site engineers, supervisors, labour', 'People'],
    ['Variations, certifications, retention', 'Workflows'],
    ['Sites, blocks, stores', 'Locations'],
  ],

  challengesHeading: 'The losses are small, frequent and site-level.',
  challengesLede:
    'Construction difficulties come from decisions made on site with commercial consequences recorded nowhere.',
  challenges: [
    {
      problem: 'Variations are executed without instruction',
      detail:
        'The client’s representative asks for a change on site, the work is done, and no written instruction is raised. Recovery depends on a conversation nobody recorded.',
      outcome:
        'A variation is a workflow step raised at the point of instruction, with the cost attached before the work proceeds.',
    },
    {
      problem: 'Material at site is not reconciled',
      detail:
        'Material is issued to a site and consumed by work, and the two are compared at project end when the difference is untraceable.',
      outcome:
        'Issue and consumption are recorded against activities, so the gap is visible weekly rather than at closure.',
    },
    {
      problem: 'Work done is not certified',
      detail:
        'Progress is achieved and measurement lags, so completed work sits unbilled while the company funds it.',
      outcome:
        'Measurement and certification are steps against the bill of quantities, so unbilled progress is a current number.',
    },
    {
      problem: 'Subcontractor claims exceed certified quantities',
      detail:
        'A claim is agreed on site against a measurement nobody has verified, and the difference is discovered at payment.',
      outcome:
        'Subcontractor packages carry certified quantities, so a claim above them is an exception rather than a payment.',
    },
    {
      problem: 'Retention is never requested',
      detail:
        'Retention passes its release date and nobody raises the request, so the money sits with the client indefinitely.',
      outcome:
        'Retention release dates sit on the project record, so the request is raised on the date rather than remembered.',
    },
    {
      problem: 'Site information reaches the office monthly',
      detail:
        'Progress, labour, material and safety records are kept on site and summarised for the office, by which point the month is fixed.',
      outcome:
        'Site records are the same records the office reads, so cost and progress are current rather than reported.',
    },
  ],

  modulesLede:
    'One system across the bill of quantities, the site and the commercial position.',
  modules: [
    {
      id: 'records',
      title: 'Projects, packages and bill of quantities',
      line:
        'Each project is a record with its contract, bill of quantities, packages, rates, milestones, retention terms and drawings.',
      why:
        'The bill of quantities is the commercial spine of the project, and everything measured or claimed refers to it.',
      example:
        'Certified quantities against the bill, with unbilled progress calculable at any point.',
    },
    {
      id: 'work',
      title: 'Activities, milestones and progress',
      line:
        'Site work is recorded against activities and packages with quantities, dates, owners and states.',
      why:
        'Progress is the basis of billing and the measure of schedule, and it belongs on the same record as the quantities.',
      example:
        'Nine point four crore of work done and not yet certified, visible weekly.',
    },
    {
      id: 'workflows',
      title: 'Variations, certification and retention',
      line:
        'Variations, measurements, certifications, subcontractor claims and retention release move through defined steps with recorded decisions.',
      why:
        'These are the commercial events, and every one of them is currently a conversation on a site.',
      example:
        'Thirty-eight variations executed without written instruction, quantified before recovery becomes impossible.',
    },
    {
      id: 'inventory',
      title: 'Material at site and consumption',
      line:
        'Material is held by site with cost and supplier, issued against activities and reconciled against consumption and wastage.',
      why:
        'Material is the largest controllable cost and the easiest to lose track of once it leaves the store.',
      example:
        'Issue exceeding consumption by eight percent at one site, surfaced at six weeks rather than at closure.',
    },
    {
      id: 'suppliers',
      title: 'Subcontractors, suppliers and plant hire',
      line:
        'Each is a relationship with its packages, rates, certified quantities, claims, performance and balances.',
      why:
        'Subcontract packages are where most project cost sits, and the claim process is where it escapes.',
      example:
        'A claim above certified quantity held as an exception rather than paid and disputed later.',
    },
    {
      id: 'people',
      title: 'Site engineers, supervisors and labour',
      line:
        'Staff and labour are modelled once, with attendance and deployment recorded against sites and activities.',
      why:
        'Labour is a daily cost that accrues on site and reaches the office late.',
      example:
        'Labour deployed by activity against the progress it produced.',
    },
    {
      id: 'locations',
      title: 'Sites, blocks and stores',
      line:
        'Sites, blocks and site stores are locations, with material, work and reporting following the same structure.',
      why:
        'Everything in construction is site-specific, and comparison across sites requires identical recording.',
      example:
        'Material reconciliation and progress by site, comparable across the company.',
    },
    {
      id: 'intelligence',
      title: 'Cost, progress and commercial reporting',
      line:
        'Progress against programme, cost against budget, unbilled and uncertified work, variation recovery, material reconciliation and retention position come from the operational records.',
      why:
        'A construction company that reports monthly is managing a business whose cost accrues daily.',
      example:
        'Cost against budget by package, current rather than compiled after month end.',
    },
    {
      id: 'ai',
      title: 'Ask the project a question',
      line:
        'Verity AI answers from your own project, measurement, material and subcontractor records, respects permissions, and can create assigned follow-ups.',
      why:
        'The commercially valuable questions are about things executed and not documented.',
      example:
        '"Which variations were executed without written instruction?" returns thirty-eight with their value.',
    },
    {
      id: 'control',
      title: 'Approvals, certification authority and audit',
      line:
        'One permission model and one audit trail, with certification and approval authority set by role and value.',
      why:
        'Site staff make commitments on the company’s behalf, and authority needs to be explicit.',
      example:
        'Certification beyond a site engineer’s authority routed to the project manager and recorded.',
    },
    {
      id: 'communication',
      title: 'Instructions and site correspondence',
      line:
        'Instructions, notices and correspondence attach to the project, package or variation they concern.',
      why:
        'Construction disputes are won and lost on contemporaneous records of what was instructed.',
      example:
        'A client instruction recorded on the variation at the time it was given.',
    },
  ],

  workflowsHeading: 'Commercial events, recorded where they happen.',
  workflowsLede:
    'These already occur on your sites. Recorded at the moment, they stay recoverable.',
  workflows: [
    {
      name: 'Variation from instruction to recovery',
      steps: [
        'Instruction received on site and recorded against the project',
        'Scope and cost impact assessed against the bill of quantities',
        'Written instruction requested and tracked',
        'Approval obtained before or alongside execution',
        'Work executed and measured',
        'Variation certified and billed',
      ],
      note:
        'The written instruction is the entire difference between a variation and a dispute.',
    },
    {
      name: 'Measurement and progress billing',
      steps: [
        'Work completed and recorded against bill items',
        'Joint measurement conducted and recorded',
        'Certification raised against certified quantities',
        'Progress bill submitted with supporting measurement',
        'Certification received and payment tracked',
        'Retention withheld and recorded with its release date',
      ],
      note:
        'Uncertified completed work is the company funding the client, and it is usually not measured as such.',
    },
    {
      name: 'Material at site',
      steps: [
        'Material ordered and received at the site store',
        'Issue to activities recorded with quantities',
        'Consumption derived from measured progress',
        'Issue against consumption reconciled at intervals',
        'Variance investigated with the activity and supervisor named',
      ],
      note:
        'Reconciling weekly is what makes a variance investigable rather than merely regrettable.',
    },
    {
      name: 'Subcontractor package',
      steps: [
        'Package awarded with scope, rates and terms recorded',
        'Work measured and certified against the package',
        'Claims received and checked against certified quantities',
        'Exceptions raised where a claim exceeds certification',
        'Payment released with retention withheld',
        'Performance recorded against the package',
      ],
      note:
        'Checking the claim against certification before payment is the control the process usually lacks.',
    },
    {
      name: 'Retention release',
      steps: [
        'Retention terms and release dates recorded at award',
        'Defect liability obligations tracked',
        'Release request raised on the date',
        'Client or subcontractor position tracked to settlement',
        'Release recorded against the project',
      ],
      note:
        'Retention is money already earned that sits uncollected because nobody raised the request.',
    },
    {
      name: 'Project cost review',
      steps: [
        'Cost to date pulled by package against budget',
        'Variations approved, executed and unapproved reviewed',
        'Material reconciliation variances reviewed',
        'Forecast cost to complete assembled',
        'Actions assigned against the divergences',
      ],
      note:
        'The tender margin can still be defended in month three and not in month eleven.',
    },
  ],

  ai: {
    heading: 'Ask what was done and not documented.',
    lede:
      'Verity AI reads the same project, measurement, material and subcontractor records the sites create as they build. It answers from your own projects, respects permissions, and can turn an answer into instructions and claims.',
    panelMeta: 'Grounded in your project records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which variations were executed without a written instruction?',
      'How much completed work is uncertified and unbilled?',
      'Where does material issued exceed consumption, and by how much?',
      'Which retention amounts are past their release date?',
      'Which subcontractor claims exceed certified quantities?',
      'What is cost against budget by package and project?',
      'Which activities are behind programme, and what is blocking them?',
      'Which suppliers deliver late to which sites?',
      'Summarise the commercial position across active projects.',
    ],
  },

  automationHeading: 'The events that must be captured on the day.',
  automationLede:
    'Each runs from the project and site records at the point the condition is met.',
  automations: [
    {
      trigger: 'A variation is recorded on site',
      steps: [
        'Cost impact assessed against the bill of quantities',
        'Written instruction request raised and tracked',
        'Approval routed before execution where possible',
        'Escalated if work proceeds without instruction',
      ],
    },
    {
      trigger: 'Completed work remains uncertified',
      steps: [
        'Uncertified value aged against the project',
        'Measurement task assigned',
        'Escalated to the commercial manager past threshold',
      ],
    },
    {
      trigger: 'Material issue diverges from consumption',
      steps: [
        'Variance calculated by site and activity',
        'Investigation assigned to the site supervisor',
        'Outcome recorded against the activity',
      ],
    },
    {
      trigger: 'Retention reaches its release date',
      steps: [
        'Release request raised against the client or subcontractor',
        'Defect liability obligations checked',
        'Settlement tracked and recorded',
      ],
    },
    {
      trigger: 'A subcontractor claim exceeds certified quantity',
      steps: [
        'Claim held as an exception with the certification attached',
        'Measurement review assigned',
        'Decision recorded before payment',
      ],
    },
    {
      trigger: 'An activity falls behind programme',
      steps: [
        'Activity flagged with its dependencies',
        'Cause recorded — material, labour, instruction or access',
        'Recovery action assigned with an owner',
      ],
    },
  ],

  intelligenceHeading: 'What the commercial manager can actually see.',
  intelligenceLede:
    'Cost and progress from site records rather than from a monthly summary.',
  intelligence: [
    {
      area: 'Commercial',
      points: [
        'Cost against budget by package and project',
        'Uncertified and unbilled work by age',
        'Variations approved, executed and unapproved',
        'Retention held and past release date',
      ],
    },
    {
      area: 'Progress',
      points: [
        'Progress against programme by activity',
        'Milestones achieved and at risk',
        'Causes of delay recorded',
        'Forecast completion by project',
      ],
    },
    {
      area: 'Material',
      points: [
        'Issue against derived consumption by site',
        'Variance and its investigation outcomes',
        'Wastage recorded by activity',
        'Supplier delivery reliability by site',
      ],
    },
    {
      area: 'Subcontractors',
      points: [
        'Certified quantity against claims',
        'Package cost against award value',
        'Performance and rework by subcontractor',
        'Retention withheld and released',
      ],
    },
    {
      area: 'Labour',
      points: [
        'Deployment by site and activity',
        'Attendance against deployment plan',
        'Output against labour deployed',
        'Cost by activity and package',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds project, site and commercial records. Design, drawing management and accounting continue in your existing systems.',

  rolesHeading: 'One project, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Managing director',
      question: 'Are the projects still profitable?',
      focus: 'Cost against budget by project, variation recovery, uncertified work, retention position.',
    },
    {
      role: 'Commercial manager',
      question: 'What is at risk of not being recovered?',
      focus: 'Variations without instruction, uncertified progress, subcontractor claims above certification, retention past release.',
    },
    {
      role: 'Project manager',
      question: 'Is the site on programme?',
      focus: 'Activities against programme, blockers and causes, labour and material at site, instructions outstanding.',
    },
    {
      role: 'Site engineer',
      question: 'What am I recording today?',
      focus: 'Work completed and measured, material issued, instructions received, labour deployed.',
    },
    {
      role: 'Procurement',
      question: 'What is required and who is late?',
      focus: 'Material requirements from programme, supplier delivery reliability, orders outstanding, site stock.',
    },
  ],

  useCasesHeading: 'What construction companies use Verity for',
  useCases: [
    {
      name: 'Variation capture',
      body: 'Instructions recorded on site with a written instruction requested and tracked, which is the entire difference between a recoverable variation and a dispute.',
    },
    {
      name: 'Uncertified work visibility',
      body: 'Completed work measured against the bill of quantities, so money earned and unbilled is a current number rather than a year-end surprise.',
    },
    {
      name: 'Material reconciliation',
      body: 'Issue against derived consumption reconciled at intervals, so a variance is investigable while the activity is still fresh.',
    },
    {
      name: 'Subcontractor claim control',
      body: 'Claims checked against certified quantities before payment rather than disputed after it.',
    },
    {
      name: 'Retention recovery',
      body: 'Release dates on the project record with requests raised on the date, recovering money that otherwise sits with the client.',
    },
    {
      name: 'Site records as office records',
      body: 'Progress, labour, material and instructions recorded once at the site and read directly by the office, replacing a monthly summary.',
    },
    {
      name: 'Certification authority',
      body: 'Approval and certification limits by role and value, so commitments made on site are within authority and attributable.',
    },
    {
      name: 'Asking about the commercial position',
      body: 'Plain-language questions across variations, measurement, material and claims, with actions assigned in the same step.',
    },
  ],

  migration:
    'Design, drawing management and accounting continue to run and are mapped during implementation. Projects, bills of quantities, packages, subcontractors, site stores and open variations are brought across, and Verity is introduced as the site and commercial layer.',

  faqHeading: 'Questions construction companies ask',
  faqs: [
    [
      'What can AI software do for a construction company?',
      'Verity AI answers questions from your own project, measurement, material and subcontractor records: which variations were executed without written instruction, how much completed work is uncertified, where material issued exceeds consumption, which retention is past its release date. Each answer can become an instruction request or a claim.',
    ],
    [
      'Does Verity replace our accounting or design software?',
      'No. Accounting, design and drawing management continue and are mapped during implementation. Verity holds the project, site and commercial records — bill of quantities, progress, measurement, variations, material, subcontract packages and retention.',
    ],
    [
      'How does it help with variations?',
      'An instruction received on site is recorded against the project with its cost impact assessed, and a written instruction is requested and tracked before or alongside execution. A variation without a contemporaneous record is the most common recoverable loss in construction.',
    ],
    [
      'Can it show uncertified work?',
      'Completed work is recorded against bill items and measurement is a tracked step, so work done and not yet certified is a current figure — which is the company funding the client and is rarely measured as such.',
    ],
    [
      'Does it reconcile material at site?',
      'Material is issued to activities and consumption is derived from measured progress, so issue against consumption is reconciled at intervals rather than at project closure when a variance is untraceable.',
    ],
    [
      'Can it control subcontractor claims?',
      'Packages carry certified quantities, so a claim exceeding certification is held as an exception for measurement review before payment rather than paid and disputed afterwards.',
    ],
    [
      'Does it track retention?',
      'Retention terms and release dates are recorded at award and the release request is raised on the date, recovering money that otherwise remains with the client because nobody asked.',
    ],
    [
      'Can site staff use it?',
      'Site records are the same records the office reads — progress, measurement, material issue, instructions and labour — which removes the monthly summary and the lag that goes with it.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how projects are run and measured, configuration of bills of quantities and authority limits, migration of active projects and packages, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the variations nobody instructed in writing.',
  ctaLede:
    'They are recoverable now and will not be in six months. Tell us how instructions are recorded on site today.',

  related: ['contractors', 'real-estate-developers', 'building-material-suppliers', 'architects', 'property-management', 'manufacturers'],
};
