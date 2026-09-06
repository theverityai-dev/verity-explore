export default {
  slug: 'software-agencies',
  status: 'published',
  plural: 'software agencies',
  subject: 'software agency',

  seo: {
    title: 'AI business management software for software agencies | Verity',
    description:
      'Verity connects estimates against actuals, change requests, developer allocation, milestone acceptance and post-delivery warranty into one operational system.',
    keywords: [
      'AI software for software agencies',
      'software development agency management',
      'estimate versus actual and change request tracking',
      'developer allocation and milestone acceptance software',
    ],
  },

  hero: {
    eyebrow: 'Verity for software agencies',
    headline: 'The estimate was wrong in a specific, repeatable way, and nobody wrote it down.',
    lede:
      'Agencies quote fixed prices against estimates and learn nothing from how wrong they were. Verity records estimate against actual per work type, so the next quote is better than the last.',
    note: 'Verity runs the agency. Your issue tracker and repositories stay where they are.',
    panel: {
      title: 'Projects',
      meta: 'All projects · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active projects', value: '14', note: '₹3.8 Cr contracted' },
        { label: 'Over estimate', value: '5', note: 'no change request raised' },
        { label: 'Milestones unaccepted', value: '9', note: 'blocking ₹64 L billing' },
        { label: 'In warranty', value: '11', note: 'unbudgeted support' },
      ],
      rows: [
        { name: '5 projects past estimate with no change request', meta: 'Combined overrun 640 hours', active: true },
        { name: '9 delivered milestones awaiting client acceptance', meta: 'Billing blocked · oldest 31 days', active: true },
        { name: 'Warranty work consuming a developer full time', meta: 'Across 11 delivered projects', active: true },
        { name: 'Two developers committed to overlapping sprints', meta: 'Both projects assume full availability', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own projects in this shape.',
    },
  },

  overview: {
    heading: 'An agency quotes against estimates and never audits them.',
    paragraphs: [
      'A software agency sells fixed-price projects, time-and-materials work, or something between. Fixed price is quoted from an estimate, and the entire commercial outcome depends on whether that estimate was right. Most agencies do not record actual effort against estimate at a granularity that teaches them anything, so the same category of work is under-quoted repeatedly.',
      'The second characteristic loss is the unraised change request. Clients ask for things outside the agreed scope, developers build them because refusing feels disproportionate, and the effort is absorbed. Five projects past estimate with no change request raised is not five mistakes; it is a firm-level habit that eliminates the margin the estimate was supposed to protect.',
      'The third is acceptance. Milestone-billed work cannot be invoiced until the client accepts, and acceptance requests sit unanswered while the agency continues to fund the next phase. Nine delivered milestones blocking sixty-four lakh is a cash position, not a delivery problem.',
      'The fourth is warranty. Post-delivery bug fixing is contractually owed, unbudgeted and delivered by the same developers who are supposed to be on new work. It is the most reliably underestimated cost an agency carries.',
      'The fifth is allocation: two developers promised to overlapping sprints because each project assumed full availability.',
      'Verity records estimate against actual, change requests, acceptance and warranty against the projects that generate them.',
    ],
  },

  terminology: [
    ['Projects, phases, sprints, milestones', 'Work'],
    ['Clients, product owners, stakeholders', 'Relationships'],
    ['Estimates, change requests, acceptance', 'Workflows'],
    ['Developers, designers, QA, leads', 'People'],
    ['Specifications, contracts, acceptance criteria', 'Records'],
    ['Teams, practices, offices', 'Locations'],
    ['Warranty, support, maintenance', 'Control'],
  ],

  challengesHeading: 'The estimate is the product and nobody grades it.',
  challengesLede:
    'Agency difficulties come from quoting against estimates that are never compared with what actually happened.',
  challenges: [
    {
      problem: 'Estimates are never compared with actuals',
      detail:
        'Effort is tracked loosely, so the agency cannot say which categories of work it systematically under-quotes.',
      outcome:
        'Actual effort is recorded against the estimate at the level it was made, so estimating improves from evidence.',
    },
    {
      problem: 'Change requests are not raised',
      detail:
        'Out-of-scope work is built because the request seemed small, and the effort disappears into the fixed price.',
      outcome:
        'Out-of-scope work is identified against the specification and raised as a change request with effort attached.',
    },
    {
      problem: 'Acceptance blocks billing indefinitely',
      detail:
        'Delivered milestones await client sign-off with nobody chasing, while the agency funds the following phase.',
      outcome:
        'Acceptance is a workflow step with an age and an owner, so unaccepted milestones are chased as a cash matter.',
    },
    {
      problem: 'Warranty work is unbudgeted and invisible',
      detail:
        'Post-delivery fixes are owed under contract and delivered by developers who were allocated to new work.',
      outcome:
        'Warranty work is recorded against the delivered project, so its true cost and its effect on capacity are visible.',
    },
    {
      problem: 'Developers are committed twice',
      detail:
        'Two projects plan against the same person’s full availability, and the conflict surfaces at sprint start.',
      outcome:
        'Allocation is recorded against people and periods, so overlap is visible when the second commitment is made.',
    },
    {
      problem: 'Acceptance criteria are informal',
      detail:
        'What "done" means is agreed in conversation, so acceptance becomes a negotiation rather than a check.',
      outcome:
        'Acceptance criteria are recorded with the milestone, so acceptance is a verification against something written.',
    },
  ],

  modulesLede:
    'One system across estimates, delivery, change and warranty.',
  modules: [
    {
      id: 'work',
      title: 'Projects, phases, sprints and milestones',
      line:
        'Each is work with a client, an estimate, allocated people, acceptance criteria, actual effort and a state.',
      why:
        'The estimate and the actual have to sit on the same record or the comparison never happens.',
      example:
        'Five projects past estimate by six hundred and forty hours with no change request raised.',
    },
    {
      id: 'workflows',
      title: 'Estimates, change requests and acceptance',
      line:
        'Estimation, scope change, milestone delivery, acceptance and warranty claims move through defined steps with recorded decisions.',
      why:
        'These are the commercial gates, and the two that matter most — change and acceptance — are usually conversations.',
      example:
        'A change request raised with effort attached rather than absorbed into the fixed price.',
    },
    {
      id: 'people',
      title: 'Developers, designers, QA and leads',
      line:
        'The team is modelled once with skills and availability, and every allocation, task and warranty fix shows who owns it.',
      why:
        'Allocation is the constraint, and warranty work silently consumes it.',
      example:
        'A developer effectively full time on warranty across eleven delivered projects.',
    },
    {
      id: 'relationships',
      title: 'Clients, product owners and stakeholders',
      line:
        'Clients are records with their projects, contracts, acceptance behaviour, change history and balances.',
      why:
        'Client acceptance speed and change behaviour are the two facts that most affect agency cash and margin.',
      example:
        'A client whose acceptance averages thirty-one days, visible before the next fixed-price quote.',
    },
    {
      id: 'records',
      title: 'Specifications, contracts and acceptance criteria',
      line:
        'Specifications, contracts and acceptance criteria attach to the project and milestone with versions retained.',
      why:
        'Scope disputes and acceptance disputes both resolve to what was written down.',
      example:
        'The acceptance criteria for a milestone, referenced when the client raises a new expectation.',
    },
    {
      id: 'control',
      title: 'Warranty, support and post-delivery obligation',
      line:
        'Warranty periods, obligations and the work delivered under them are recorded against the project, with one audit trail.',
      why:
        'Warranty is a contractual obligation that behaves like an unbudgeted support contract.',
      example:
        'Warranty effort recorded against the delivered project rather than absorbed into general capacity.',
    },
    {
      id: 'intelligence',
      title: 'Estimation, margin and capacity reporting',
      line:
        'Estimate against actual by work type, change request recovery, acceptance lead times, warranty cost, allocation conflicts and project margin come from the operational records.',
      why:
        'An agency that cannot grade its estimates cannot improve the single number its business depends on.',
      example:
        'Estimate accuracy by work type, which is the most valuable report a fixed-price agency can have.',
    },
    {
      id: 'ai',
      title: 'Ask the delivery book a question',
      line:
        'Verity AI answers from your own project, effort, change and acceptance records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking are about overruns without change requests and cash blocked on acceptance.',
      example:
        '"Which projects are past estimate with no change request?" returns five with reviews assigned.',
    },
    {
      id: 'communication',
      title: 'Client decisions on the project',
      line:
        'Requests, approvals and clarifications attach to the project or milestone they concern.',
      why:
        'A scope decision taken in a call is the one disputed at acceptance.',
      example:
        'A client’s agreement to defer a feature, recorded on the milestone.',
    },
    {
      id: 'locations',
      title: 'Teams, practices and offices',
      line:
        'Organisational units roll into the agency, with allocation and reporting following the same structure.',
      why:
        'Estimation accuracy and margin vary by team, and only identical recording makes them comparable.',
      example:
        'Estimate accuracy and margin by team and practice.',
    },
  ],

  workflowsHeading: 'Estimate, build, change, accept.',
  workflowsLede:
    'These already happen. Recorded together, the estimate finally gets graded.',
  workflows: [
    {
      name: 'Estimate to signed project',
      steps: [
        'Requirement recorded with the client',
        'Estimate prepared by work type against historical actuals',
        'Team availability checked for the delivery window',
        'Proposal issued with milestones and acceptance criteria',
        'Contract signed with warranty terms recorded',
        'Allocation committed against the plan',
      ],
      note:
        'Estimating from historical actuals by work type is the difference between an estimate and a hope.',
    },
    {
      name: 'Delivery and effort',
      steps: [
        'Work allocated to people against the estimate',
        'Effort recorded against the estimated items',
        'Variance surfaced as it accumulates',
        'Estimate accuracy captured at completion by work type',
        'Learnings fed into the estimation baseline',
      ],
      note:
        'The comparison has to be at the level the estimate was made, or it teaches nothing.',
    },
    {
      name: 'Change request',
      steps: [
        'Request identified as outside the specification',
        'Effort estimated and impact on the schedule assessed',
        'Change request raised with cost and time',
        'Client approval recorded, or a decision to absorb recorded',
        'Estimate and schedule updated accordingly',
      ],
      note:
        'Absorbing scope becomes a recorded decision rather than the default behaviour of a helpful team.',
    },
    {
      name: 'Milestone acceptance',
      steps: [
        'Milestone delivered against its acceptance criteria',
        'Acceptance requested with the criteria attached',
        'Age tracked against the client’s acceptance behaviour',
        'Reminders and escalation issued',
        'Acceptance recorded and billing released',
      ],
      note:
        'Unaccepted milestones are a cash problem, and they are usually treated as a delivery detail.',
    },
    {
      name: 'Warranty period',
      steps: [
        'Warranty period recorded at delivery with its obligations',
        'Defects raised and classified as warranty or new work',
        'Warranty effort recorded against the delivered project',
        'New work identified and quoted separately',
        'Warranty cost reported per project and per client',
      ],
      note:
        'Classifying a defect as warranty or new work at the point it is raised is what keeps warranty bounded.',
    },
    {
      name: 'Capacity and allocation',
      steps: [
        'Committed allocation aggregated by person and period',
        'Warranty and support load included',
        'New project plans checked against remaining availability',
        'Conflicts flagged before commitment',
        'Decisions recorded against the plan',
      ],
      note:
        'Warranty is real allocation, and excluding it from capacity planning is why sprints start short.',
    },
  ],

  ai: {
    heading: 'Ask how wrong the estimate was.',
    lede:
      'Verity AI reads the same project, effort, change and acceptance records the agency creates as it delivers. It answers from your own delivery book, respects permissions, and can turn an answer into reviews and chases.',
    panelMeta: 'Grounded in your project records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which projects are past estimate with no change request raised?',
      'What is estimate accuracy by work type?',
      'Which milestones are delivered and unaccepted, and for how long?',
      'How much developer time is going to warranty work?',
      'Where are developers committed to overlapping periods?',
      'Which clients accept slowest and request the most changes?',
      'What is margin by project and by team?',
      'Which change requests were absorbed rather than charged?',
      'Summarise delivery risk and blocked billing.',
    ],
  },

  automationHeading: 'The conversations that get avoided.',
  automationLede:
    'Each runs from the project records at the point the condition is met.',
  automations: [
    {
      trigger: 'Effort passes a share of the estimate',
      steps: [
        'Project flagged with effort against estimate and remaining scope',
        'Change request review assigned to the delivery lead',
        'Decision recorded — raised or absorbed',
      ],
    },
    {
      trigger: 'A milestone is delivered',
      steps: [
        'Acceptance requested with criteria attached',
        'Age tracked against the client’s acceptance history',
        'Escalation raised with the blocked billing named',
      ],
    },
    {
      trigger: 'A defect is raised after delivery',
      steps: [
        'Classified as warranty or new work against the specification',
        'Warranty effort recorded against the project',
        'New work quoted separately',
      ],
    },
    {
      trigger: 'A new project plan uses committed people',
      steps: [
        'Conflict flagged with both commitments named',
        'Allocation decision raised before signing',
        'Outcome recorded against the plan',
      ],
    },
    {
      trigger: 'A project completes',
      steps: [
        'Estimate accuracy captured by work type',
        'Margin calculated against contracted value',
        'Learnings recorded into the estimation baseline',
      ],
    },
    {
      trigger: 'Warranty load exceeds its allowance',
      steps: [
        'Load flagged by project and client',
        'Support contract or scope conversation raised',
        'Capacity plan updated to include it',
      ],
    },
  ],

  intelligenceHeading: 'What the agency can actually see.',
  intelligenceLede:
    'Estimation quality and delivery economics from the projects themselves.',
  intelligence: [
    {
      area: 'Estimation',
      points: [
        'Estimate against actual by work type',
        'Systematic under-estimation by category',
        'Estimate accuracy by team and estimator',
        'Baseline improvement over time',
      ],
    },
    {
      area: 'Scope',
      points: [
        'Change requests raised, approved and absorbed',
        'Out-of-scope effort by project and client',
        'Scope disputes and their resolution',
        'Recovery rate on change requests',
      ],
    },
    {
      area: 'Cash',
      points: [
        'Milestones delivered and unaccepted',
        'Acceptance lead time by client',
        'Billing blocked by acceptance',
        'Balances outstanding with ageing',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Allocation by person and period',
        'Warranty load against new work',
        'Conflicts and overcommitment',
        'Utilisation by team and practice',
      ],
    },
    {
      area: 'Margin',
      points: [
        'Project margin against contracted value',
        'Margin by work type and team',
        'Warranty cost by project and client',
        'Client profitability across projects',
      ],
    },
  ],
  intelligenceNote:
    'Verity records delivery and commercial data. Your issue tracker, repositories and deployment tooling continue as they are.',

  rolesHeading: 'One agency, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Founder',
      question: 'Are we estimating and pricing correctly?',
      focus: 'Estimate accuracy by work type, project margin, change request recovery, warranty cost.',
    },
    {
      role: 'Delivery lead',
      question: 'What is running over and why?',
      focus: 'Effort against estimate, out-of-scope work, milestones unaccepted, allocation conflicts.',
    },
    {
      role: 'Project manager',
      question: 'Is this project on plan?',
      focus: 'Effort against estimate, change requests outstanding, acceptance criteria, team allocation.',
    },
    {
      role: 'Developer',
      question: 'What am I on and what is in scope?',
      focus: 'Assigned work with estimates, specification and acceptance criteria, warranty items, effort to record.',
    },
    {
      role: 'Finance',
      question: 'What can we bill?',
      focus: 'Milestones accepted and unaccepted, change requests approved, balances ageing, warranty cost.',
    },
  ],

  useCasesHeading: 'What software agencies use Verity for',
  useCases: [
    {
      name: 'Estimate against actual',
      body: 'Effort recorded at the level the estimate was made, so the agency learns which work types it systematically under-quotes.',
    },
    {
      name: 'Change request discipline',
      body: 'Out-of-scope work raised as a change request with effort attached, so absorbing scope is a decision rather than a habit.',
    },
    {
      name: 'Acceptance as a cash process',
      body: 'Delivered milestones aged against acceptance with escalation, since unaccepted work is blocked billing rather than a delivery detail.',
    },
    {
      name: 'Warranty cost visibility',
      body: 'Post-delivery fixes recorded against the project that owes them, exposing the agency’s most reliably underestimated cost.',
    },
    {
      name: 'Allocation conflicts',
      body: 'Commitments recorded by person and period including warranty load, so overlap surfaces before a sprint starts short.',
    },
    {
      name: 'Acceptance criteria on the record',
      body: 'What "done" means written against the milestone, so acceptance is a verification rather than a negotiation.',
    },
    {
      name: 'Client behaviour',
      body: 'Acceptance speed and change frequency recorded per client, informing the next fixed-price quote.',
    },
    {
      name: 'Asking about delivery',
      body: 'Plain-language questions across estimates, scope, acceptance and warranty, with reviews assigned in the same step.',
    },
  ],

  migration:
    'Your issue tracker, repositories and deployment tooling continue to run and are mapped during implementation. Clients, active projects, estimates, milestones and warranty obligations are brought across, and Verity is introduced as the delivery and commercial layer.',

  faqHeading: 'Questions agencies ask',
  faqs: [
    [
      'Does Verity replace our issue tracker?',
      'No. Your issue tracker, repositories and deployment tooling continue and are mapped during implementation. Verity holds the commercial and delivery record — estimates, actual effort, change requests, milestone acceptance, warranty obligations and allocation.',
    ],
    [
      'What can AI software do for a software agency?',
      'Verity AI answers questions from your own project, effort, change and acceptance records: which projects are past estimate with no change request, what estimate accuracy looks like by work type, which milestones are delivered and unaccepted, how much developer time is going to warranty. Each answer can become a review or a chase.',
    ],
    [
      'How does it improve estimating?',
      'Actual effort is recorded against the estimate at the level it was made, so the agency can see which categories of work it systematically under-quotes. For a fixed-price business that comparison is the single most valuable report available, and almost no agency produces it.',
    ],
    [
      'Can it help with scope creep?',
      'Out-of-scope work is identified against the recorded specification and raised as a change request with effort and schedule impact, so absorbing it becomes a deliberate, visible decision rather than the default behaviour of a helpful team.',
    ],
    [
      'Why treat acceptance as a cash process?',
      'Milestone-billed work cannot be invoiced until it is accepted, so unaccepted milestones are blocked cash while the agency funds the next phase. Ageing acceptance with escalation treats it as what it is.',
    ],
    [
      'Does it track warranty work?',
      'Warranty periods and obligations are recorded at delivery, defects are classified as warranty or new work when raised, and warranty effort is recorded against the project that owes it — which makes visible a cost most agencies carry without measuring.',
    ],
    [
      'Can it prevent allocation conflicts?',
      'Commitments are recorded by person and period, including warranty and support load, so a new project plan using already-committed people surfaces as a conflict before signing rather than at sprint start.',
    ],
    [
      'Is it suitable for a small agency?',
      'A ten-person agency carries the same estimation blind spot and the same warranty load, and a single overrunning fixed-price project is a much larger share of its year.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how work is estimated and delivered, configuration of work types and milestones, migration of clients and active projects, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start by grading your estimates.',
  ctaLede:
    'It is the number your business depends on and the one almost no agency measures. Tell us how effort is tracked today.',

  related: ['it-services-companies', 'saas-companies', 'marketing-agencies', 'consulting-firms', 'startups', 'web-development-agencies'],
};
