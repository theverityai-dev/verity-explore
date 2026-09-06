export default {
  slug: 'property-management',
  status: 'published',
  plural: 'property management businesses',
  subject: 'property management business',

  seo: {
    title: 'AI business management software for property management | Verity',
    description:
      'Verity connects leases and renewals, rent collection, maintenance requests, vendor performance, deposits and common-area costs into one operational system.',
    keywords: [
      'AI software for property management',
      'property management software',
      'lease renewal and rent collection tracking',
      'maintenance request and vendor management software',
    ],
  },

  hero: {
    eyebrow: 'Verity for property management',
    headline: 'A lease that lapses without notice costs more than a month of rent.',
    lede:
      'Renewals, arrears, maintenance and deposits all run on dates, and every one of them is currently a reminder in somebody’s calendar. Verity makes them records with owners.',
    note: 'Runs alongside your existing accounting arrangements.',
    panel: {
      title: 'Portfolio',
      meta: 'All properties · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Units managed', value: '412', note: 'across 34 properties' },
        { label: 'Renewals in 90 days', value: '58', note: '19 not yet initiated' },
        { label: 'Rent overdue', value: '₹18.6 L', note: '64 tenants' },
        { label: 'Open maintenance', value: '87', note: '23 past target' },
      ],
      rows: [
        { name: '19 leases expiring within 90 days with no renewal initiated', meta: 'Notice periods already running', active: true },
        { name: '23 maintenance requests past their response target', meta: 'Nine escalated by tenants', active: true },
        { name: '₹18.6 L rent overdue, 21 accounts beyond 60 days', meta: 'No follow-up recorded on 14', active: true },
        { name: 'Deposit deductions unresolved on 6 vacated units', meta: 'Oldest 42 days · dispute risk', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own portfolio in this shape.',
    },
  },

  overview: {
    heading: 'Property management is a business made entirely of dates and obligations.',
    paragraphs: [
      'A managed portfolio is a set of leases, each with a start, an end, a notice period, an escalation date and a deposit. Around them sit rent due dates, maintenance response commitments, vendor contracts and statutory obligations. Almost nothing in the business is discretionary; almost everything is a date that either was or was not met.',
      'That should make it easy to run, and it is difficult for one reason: the dates live in different places. Leases are documents in a folder, rent is in an accounting system, maintenance is in a message thread, and deposits are in a spreadsheet that only reconciles at vacancy. Nobody holds the full obligation set for a single unit, let alone for the portfolio.',
      'The most expensive failure is a renewal that lapses. A lease with a notice period running and no renewal conversation started is a vacancy being created by inattention, and the cost is not one month of rent — it is the vacancy, the re-letting effort and often a lower rent.',
      'The second is maintenance. Tenants judge a managing agent almost entirely on response, and a request that becomes a message rather than a job with an owner and a target is a complaint waiting to happen.',
      'The third is deposits. Deductions at vacancy are the most common source of dispute, and they are decided from a condition record that was usually never made.',
      'Verity holds the unit, the lease, the tenant, the rent position, the maintenance job, the vendor and the deposit as connected records with dates and owners.',
    ],
  },

  terminology: [
    ['Properties, units, common areas', 'Records'],
    ['Leases, renewals, notices, deposits', 'Workflows'],
    ['Tenants, owners, guarantors', 'Relationships'],
    ['Maintenance requests, inspections, works', 'Work'],
    ['Vendors, contractors, service providers', 'Suppliers'],
    ['Managers, supervisors, site staff', 'People'],
    ['Buildings, floors, sites', 'Locations'],
  ],

  challengesHeading: 'Every failure is a date that passed.',
  challengesLede:
    'Property management difficulties come from obligations spread across documents, threads and spreadsheets.',
  challenges: [
    {
      problem: 'Renewals lapse while notice periods run',
      detail:
        'A lease is expiring, the notice period has started, and nobody has begun the renewal conversation because the date lives in a document.',
      outcome:
        'Lease dates are on the record, so renewals initiate against the notice period rather than against the expiry.',
    },
    {
      problem: 'Maintenance requests become message threads',
      detail:
        'A tenant reports a fault by message. It is forwarded to a vendor. Whether it was done is known only when the tenant complains again.',
      outcome:
        'A request is work with a target, an owner and a state, so response is measurable and escalation automatic.',
    },
    {
      problem: 'Arrears grow without a worked list',
      detail:
        'Rent overdue accumulates across tenants and follow-up depends on who remembers, with no record of what was already said.',
      outcome:
        'Rent ages on the tenant record with contact history, so collection is a list rather than a memory.',
    },
    {
      problem: 'Deposits are disputed at vacancy',
      detail:
        'Deductions are proposed from a condition assessment that was never documented at move-in, and the dispute is unwinnable either way.',
      outcome:
        'Condition is recorded with evidence at move-in and move-out, so deductions rest on a record.',
    },
    {
      problem: 'Vendor performance is never measured',
      detail:
        'The same contractors are used repeatedly with no record of response times, rework or cost against quote.',
      outcome:
        'Vendors are relationships with response, completion and cost history against the jobs they did.',
    },
    {
      problem: 'Owner reporting is assembled by hand',
      detail:
        'Property owners want to know income, expenses, occupancy and outstanding issues, and it is compiled per owner each period.',
      outcome:
        'Owner reporting is an extract from the same records the portfolio runs on.',
    },
  ],

  modulesLede:
    'One system across leases, tenants, maintenance and vendors.',
  modules: [
    {
      id: 'records',
      title: 'Properties, units and leases',
      line:
        'Each unit is a record with its property, specification, current lease, rent, escalation terms, notice period, deposit and condition history.',
      why:
        'The unit is where every obligation in the business attaches, and it is usually the only thing without a record.',
      example:
        'Fifty-eight leases expiring within ninety days, nineteen with no renewal initiated.',
    },
    {
      id: 'workflows',
      title: 'Leases, renewals, notices and deposits',
      line:
        'Lease events are defined steps with dates and owners — renewal initiation, notice, escalation, deposit collection and refund.',
      why:
        'These are the dated obligations that decide occupancy and disputes, and they are the ones held in documents.',
      example:
        'Renewal initiated automatically against the notice period rather than remembered at expiry.',
    },
    {
      id: 'relationships',
      title: 'Tenants, owners and guarantors',
      line:
        'Tenants and owners are records with their leases, rent history, maintenance requests, communications and balances.',
      why:
        'A managing agent has two clients per unit — the owner and the tenant — with different information needs.',
      example:
        'A tenant’s full history of requests and payments, visible when a renewal is negotiated.',
    },
    {
      id: 'work',
      title: 'Maintenance requests, inspections and works',
      line:
        'Each is work with a unit, a tenant, a priority, a response target, an assigned vendor or staff member and a state.',
      why:
        'Response is what a managing agent is judged on, and it can only be managed if requests are jobs rather than messages.',
      example:
        'Twenty-three requests past their response target, nine already escalated by tenants.',
    },
    {
      id: 'suppliers',
      title: 'Vendors and contractors',
      line:
        'Vendors are relationships with their trades, rate agreements, response times, completion rates, rework and balances.',
      why:
        'Maintenance quality and cost are entirely a function of vendor selection, which is usually habitual.',
      example:
        'A vendor whose average response is three days against another’s same-day, from the jobs themselves.',
    },
    {
      id: 'people',
      title: 'Managers, supervisors and site staff',
      line:
        'Staff are modelled once, and every lease event, request and inspection shows who owns it.',
      why:
        'Portfolios are managed by people carrying many units, and ownership is what stops obligations falling between them.',
      example:
        'Renewals and overdue requests by property manager, from the records themselves.',
    },
    {
      id: 'locations',
      title: 'Buildings, floors and sites',
      line:
        'Properties, buildings and common areas are locations with their own assets, costs and maintenance.',
      why:
        'Common-area costs and works belong to the property rather than to a unit, and both need to be attributable.',
      example:
        'Common-area maintenance cost per property, allocable to owners.',
    },
    {
      id: 'intelligence',
      title: 'Occupancy, arrears and response reporting',
      line:
        'Occupancy and renewal pipeline, arrears ageing, maintenance response and completion, vendor performance and cost per unit come from the operational records.',
      why:
        'Owner reporting and internal management need the same numbers, and both are usually compiled by hand.',
      example:
        'Occupancy, income, expenses and open issues per owner, as an extract.',
    },
    {
      id: 'ai',
      title: 'Ask the portfolio a question',
      line:
        'Verity AI answers from your own lease, tenant, maintenance and vendor records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking are about dates approaching across a large portfolio.',
      example:
        '"Which leases expire in ninety days with no renewal initiated?" returns nineteen, with conversations assigned.',
    },
    {
      id: 'communication',
      title: 'Tenant and owner contact recorded',
      line:
        'Requests, updates and correspondence attach to the unit, lease or job they concern.',
      why:
        'Disputes about what was reported and when are resolved by the record of the conversation.',
      example:
        'A tenant’s original report and every update on it, on the job record.',
    },
    {
      id: 'control',
      title: 'Who can approve spend and release deposits',
      line:
        'One permission model and one audit trail, with spend approvals and deposit deductions recorded.',
      why:
        'Managing agents spend owners’ money, and every rupee of it should be attributable.',
      example:
        'A repair above threshold approved by the owner, with the quote and approval on the job.',
    },
  ],

  workflowsHeading: 'Obligations with dates and owners.',
  workflowsLede:
    'These already exist in your leases. As records they stop depending on a reminder someone set.',
  workflows: [
    {
      name: 'Lease renewal',
      steps: [
        'Expiry and notice period held on the lease record',
        'Renewal initiation task raised against the notice period',
        'Market position and tenant history reviewed',
        'Terms proposed and negotiation recorded',
        'Renewal executed or notice served',
        'New terms and dates recorded on the unit',
      ],
      note:
        'Initiating against the notice period rather than the expiry is the whole difference between a renewal and a vacancy.',
    },
    {
      name: 'Maintenance request',
      steps: [
        'Request recorded against the unit and tenant with a priority',
        'Response target applied from the service standard',
        'Vendor or staff member assigned',
        'Quote obtained and approval raised where required',
        'Work completed, verified and recorded',
        'Tenant informed and the response time recorded',
      ],
      note:
        'Response time is the number tenants judge a managing agent on and the one most agents cannot produce.',
    },
    {
      name: 'Rent collection',
      steps: [
        'Rent raised against the lease on its due date',
        'Payment recorded and the balance updated',
        'Arrears aged automatically with escalation terms applied',
        'Follow-up assigned with contact history attached',
        'Formal notice raised where arrears pass threshold',
      ],
      note:
        'Working from the record of what was already said is what makes escalation defensible.',
    },
    {
      name: 'Move-in and move-out',
      steps: [
        'Condition recorded with evidence at move-in',
        'Deposit collected and held against the lease',
        'Condition recorded again at move-out',
        'Deductions proposed against the documented difference',
        'Refund approved and released with the calculation recorded',
      ],
      note:
        'Deposit disputes are decided by whether a condition record exists, which is a decision made at move-in.',
    },
    {
      name: 'Vendor management',
      steps: [
        'Vendor engaged with trade, rates and terms recorded',
        'Jobs assigned and response times tracked',
        'Completion and quality verified',
        'Rework recorded against the original job',
        'Performance and cost reviewed against alternatives',
      ],
      note:
        'Vendor choice is the main lever on maintenance cost and tenant satisfaction, and it is usually habitual.',
    },
    {
      name: 'Owner reporting',
      steps: [
        'Income, expenses and occupancy pulled per property',
        'Open maintenance and arrears summarised',
        'Approvals and spend against budget included',
        'Report issued and the issue recorded',
        'Owner queries recorded against the property',
      ],
      note:
        'Owner reporting is the agent’s product as much as the management itself.',
    },
  ],

  ai: {
    heading: 'Ask what is coming due.',
    lede:
      'Verity AI reads the same lease, tenant, maintenance and vendor records the portfolio runs on. It answers from your own properties, respects permissions, and can turn an answer into renewal conversations and job assignments.',
    panelMeta: 'Grounded in your portfolio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which leases expire within ninety days with no renewal initiated?',
      'Which maintenance requests are past their response target?',
      'What rent is overdue, and which accounts have no follow-up recorded?',
      'Which vendors respond slowest and have the most rework?',
      'Which deposits are unresolved on vacated units?',
      'What is occupancy by property and by owner?',
      'Which units have the highest maintenance cost this year?',
      'Which tenants have reported the same fault more than once?',
      'Summarise renewals, arrears and open maintenance.',
    ],
  },

  automationHeading: 'The dates that decide occupancy.',
  automationLede:
    'Each runs from the lease and job records at the point the condition is met.',
  automations: [
    {
      trigger: 'A lease reaches its renewal initiation date',
      steps: [
        'Renewal task raised against the notice period',
        'Tenant history and rent position attached',
        'Escalated if the conversation has not started',
      ],
    },
    {
      trigger: 'A maintenance request passes its response target',
      steps: [
        'Job flagged with the vendor and elapsed time',
        'Escalated to the property manager',
        'Tenant update task raised',
      ],
    },
    {
      trigger: 'Rent passes its due date',
      steps: [
        'Arrears aged on the tenant record',
        'Follow-up assigned with contact history attached',
        'Formal notice raised past the escalation threshold',
      ],
    },
    {
      trigger: 'A unit is vacated',
      steps: [
        'Move-out condition record raised against the move-in record',
        'Deduction proposal task assigned',
        'Deposit refund approved and released with the calculation recorded',
      ],
    },
    {
      trigger: 'Repair cost exceeds the owner approval threshold',
      steps: [
        'Job held at the approval step with the quote attached',
        'Owner approval requested and recorded',
        'Work released on approval',
      ],
    },
    {
      trigger: 'A fault is reported repeatedly on the same unit',
      steps: [
        'Pattern flagged with the prior jobs attached',
        'Root cause review assigned',
        'Decision recorded against the unit',
      ],
    },
  ],

  intelligenceHeading: 'What the agent and the owner can see.',
  intelligenceLede:
    'Occupancy, obligations and service, from the portfolio’s own records.',
  intelligence: [
    {
      area: 'Occupancy',
      points: [
        'Occupancy by property and portfolio',
        'Renewal pipeline against expiry dates',
        'Vacancy duration and re-letting time',
        'Rent achieved against previous terms',
      ],
    },
    {
      area: 'Collection',
      points: [
        'Arrears by tenant with ageing bands',
        'Collection performance by property manager',
        'Escalations and notices issued',
        'Deposits held and refunded',
      ],
    },
    {
      area: 'Maintenance',
      points: [
        'Requests by priority, response and completion time',
        'Requests past target and escalations',
        'Cost per unit and per property',
        'Repeat faults by unit and asset',
      ],
    },
    {
      area: 'Vendors',
      points: [
        'Response and completion times by vendor',
        'Rework rate and quality verification',
        'Cost against quote and against alternatives',
        'Outstanding payable',
      ],
    },
    {
      area: 'Owners',
      points: [
        'Income and expense per property',
        'Approvals raised and granted',
        'Open issues and their age',
        'Reporting issued and queries received',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from records the business creates in the course of managing — leases, jobs, payments and inspections.',

  rolesHeading: 'One portfolio, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Business owner',
      question: 'Is the portfolio occupied and collecting?',
      focus: 'Occupancy and renewal pipeline, arrears ageing, maintenance cost per unit, vendor performance.',
    },
    {
      role: 'Property manager',
      question: 'What is due on my properties?',
      focus: 'Renewals to initiate, requests past target, arrears to follow up, inspections due.',
    },
    {
      role: 'Maintenance coordinator',
      question: 'What is open and with whom?',
      focus: 'Jobs by priority and age, vendor assignments, approvals pending, repeat faults.',
    },
    {
      role: 'Accounts',
      question: 'What is collected and what is held?',
      focus: 'Rent collection and ageing, deposits held and refunded, vendor payables, owner remittances.',
    },
  ],

  useCasesHeading: 'What property managers use Verity for',
  useCases: [
    {
      name: 'Renewal pipeline',
      body: 'Lease dates on the record with renewal initiated against the notice period, so a lapse becomes a decision rather than an oversight.',
    },
    {
      name: 'Maintenance response',
      body: 'Requests as work with targets, owners and escalation, so response time — the thing tenants judge you on — becomes measurable.',
    },
    {
      name: 'Arrears management',
      body: 'Rent aged on the tenant record with contact history, so escalation is timely and defensible.',
    },
    {
      name: 'Deposit and condition evidence',
      body: 'Condition recorded with evidence at move-in and move-out, so deductions rest on a record rather than on an argument.',
    },
    {
      name: 'Vendor performance',
      body: 'Response, completion, rework and cost recorded per vendor, so selection is evidence-based rather than habitual.',
    },
    {
      name: 'Repeat fault detection',
      body: 'Faults recurring on a unit surfaced with prior jobs, turning repeated repairs into a root-cause decision.',
    },
    {
      name: 'Owner reporting',
      body: 'Income, expenses, occupancy and open issues per owner as an extract from the same records the portfolio runs on.',
    },
    {
      name: 'Asking about dates',
      body: 'Plain-language questions across leases, arrears, maintenance and vendors, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your accounting arrangements continue to run and are mapped during implementation. Properties, units, leases, tenants, deposits, vendors and open maintenance are brought across, and Verity is introduced as the operational layer over them.',

  faqHeading: 'Questions managing agents ask',
  faqs: [
    [
      'What can AI software do for a property management business?',
      'Verity AI answers questions from your own lease, tenant, maintenance and vendor records: which leases expire within ninety days with no renewal initiated, which requests are past their response target, what rent is overdue with no follow-up recorded, which vendors respond slowest. Each answer can become a renewal conversation or a job assignment.',
    ],
    [
      'How does it prevent leases lapsing?',
      'Expiry and notice period sit on the lease record, and renewal is initiated against the notice period rather than the expiry date — which is the difference between a negotiated renewal and a vacancy created by inattention.',
    ],
    [
      'Can it manage maintenance requests?',
      'A request is work with a unit, a tenant, a priority, a response target, an assigned vendor and a state, with escalation when the target passes. That turns response time into something measurable rather than something tenants complain about.',
    ],
    [
      'Does it help with deposit disputes?',
      'Condition is recorded with evidence at move-in and again at move-out, so deductions rest on a documented difference. Most deposit disputes are actually decided at move-in, by whether a record was made.',
    ],
    [
      'Can we measure vendor performance?',
      'Response times, completion, rework and cost against quote are recorded per vendor from the jobs themselves, so vendor selection can be based on evidence rather than on who has always been used.',
    ],
    [
      'Does it produce owner reports?',
      'Income, expenses, occupancy, open issues and approvals per property come from the same records the portfolio runs on, so owner reporting is an extract rather than a per-period compilation.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Accounting continues and is mapped during implementation. Verity holds the leases, tenants, maintenance, vendors, deposits and the operational reporting across them.',
    ],
    [
      'Is it suitable for a small portfolio?',
      'A manager carrying eighty units already has more dated obligations than a calendar reliably holds. The structure is the same at four hundred.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the portfolio and service standards, configuration, migration of properties, leases, tenants and open jobs, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the renewals already inside their notice period.',
  ctaLede:
    'Those are vacancies being created right now by inattention. Tell us how lease dates are tracked today.',

  related: ['real-estate-agencies', 'property-dealers', 'facility-management', 'real-estate-developers', 'construction-companies', 'hotels'],
};
