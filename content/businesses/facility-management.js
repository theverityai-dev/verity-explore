export default {
  slug: 'facility-management',
  status: 'published',
  plural: 'facility management companies',
  subject: 'facility management company',

  seo: {
    title: 'AI business management software for facility management companies | Verity',
    description:
      'Verity gives facility management companies one system for service level response times, planned and reactive maintenance, deployed staff across sites, assets and contract profitability.',
    keywords: [
      'AI software for facility management companies',
      'facility management software',
      'service level and response time tracking',
      'planned preventive maintenance software',
    ],
  },

  hero: {
    eyebrow: 'Verity for facility management',
    headline: 'The contract is written in response times, and nobody is counting them until the review.',
    lede:
      'Facility management is paid against service levels and eroded by reactive work. Verity counts the response clock and shows what planned maintenance would have prevented.',
    note: 'Verity runs the company. Building systems and access control stay where they are.',
    panel: {
      title: 'Portfolio',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sites under contract', value: '34', note: '11 clients' },
        { label: 'Response within target', value: '89%', note: 'contract target 95%' },
        { label: 'Reactive share of work', value: '61%', note: 'planned 39%' },
        { label: 'Contracts below margin', value: '4', note: 'reactive-heavy' },
      ],
      rows: [
        { name: '2 clients below contracted response target', meta: 'Review due next month', active: true },
        { name: '61% of work reactive', meta: 'Planned maintenance slipping', active: true },
        { name: '4 contracts below target margin', meta: 'Callout volume the cause', active: true },
        { name: '19 assets past service interval', meta: 'Failure risk on 7 sites', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own portfolio in this shape.',
    },
  },

  overview: {
    heading: 'You are paid for availability and judged on how fast you answer.',
    paragraphs: [
      'A facility management company operates buildings it does not own, under contracts written as service levels. Response time, resolution time and uptime are the deliverable, which makes the clock on every request a contractual instrument rather than an internal courtesy. Eighty-nine per cent response against a ninety-five per cent target is a contract in breach, and it is usually discovered at a quarterly review rather than in the week it started slipping.',
      'The second characteristic is the balance between planned and reactive work. Sixty-one per cent reactive means planned preventive maintenance is being displaced by callouts, and displaced planned maintenance produces more callouts next month. It is a cycle that shows in the margin before it shows anywhere else.',
      'The third is a deployed workforce. Staff are stationed or mobile across many client sites, and the company’s cost is people it cannot see, working in buildings it does not control.',
      'The fourth is assets. Every site has equipment with service intervals, warranties and failure histories, and nineteen assets past their service interval is a list of the next month’s emergencies.',
      'The fifth is contract profitability. Four contracts below target margin because of callout volume is a renegotiation the company can only make with the evidence.',
      'Verity holds the response clock, the planned-against-reactive balance, deployed staff and asset condition against contract profitability.',
    ],
  },

  terminology: [
    ['Contracts, sites, service levels', 'Work'],
    ['Requests, callouts, work orders', 'Workflows'],
    ['Clients, tenants, occupiers', 'Relationships'],
    ['Assets, plant, equipment', 'Records'],
    ['Technicians, stationed staff, supervisors', 'People'],
    ['Spares, consumables, tooling', 'Inventory'],
    ['Compliance, permits, audit', 'Control'],
  ],

  challengesHeading: 'A clock on every request and a margin eroded by callouts.',
  challengesLede:
    'Facility management difficulties come from being measured on speed and paid a fixed fee.',
  challenges: [
    { problem: 'Service level performance is known too late', detail: 'Response and resolution are counted at the review rather than as they happen.', outcome: 'The clock runs on every request against its contract target, visible live.' },
    { problem: 'Planned maintenance is displaced by callouts', detail: 'Reactive work consumes the day and the preventive schedule slips, producing more reactive work.', outcome: 'Planned and reactive work are measured against each other per contract and per technician.' },
    { problem: 'Deployed staff are hard to see', detail: 'Technicians work across client sites and their day is only visible if they report it.', outcome: 'Work orders carry site, time and outcome, so deployment is visible from the work itself.' },
    { problem: 'Assets fail without warning that existed', detail: 'Service intervals pass, failure histories are not consulted, and breakdowns look unpredictable.', outcome: 'Assets carry intervals, warranties and failure history, with overdue service surfaced.' },
    { problem: 'Contract margin erodes invisibly', detail: 'A fixed fee against rising callout volume loses money quietly across a whole contract term.', outcome: 'Cost to serve per contract is attributed from work orders, so margin is current.' },
    { problem: 'Compliance work is assumed rather than evidenced', detail: 'Statutory inspections and permits are required per site and hard to prove at audit.', outcome: 'Compliance tasks are scheduled, completed and evidenced against the site.' },
  ],

  modulesLede: 'One system across contracts, work orders, staff and assets.',
  modules: [
    { id: 'workflows', title: 'Requests, work orders and the response clock', line: 'Every request carries its site, contract target, response and resolution clock, assignment and outcome.', why: 'The service level is the product and it is only manageable while the clock is running.', example: 'Eighty-nine per cent response against a ninety-five per cent target.' },
    { id: 'work', title: 'Contracts, sites and service levels', line: 'Each contract carries its sites, scope, service level targets, planned maintenance schedule and commercial terms.', why: 'Different clients buy different targets, and the same request has different urgency by contract.', example: 'Two clients below contracted response target.' },
    { id: 'records', title: 'Assets, plant and service history', line: 'Assets carry location, service interval, warranty, failure history and current condition.', why: 'Assets past their service interval are the next month’s emergency callouts.', example: 'Nineteen assets past service interval across seven sites.' },
    { id: 'people', title: 'Technicians, stationed staff and deployment', line: 'Staff carry site assignment, skills, certifications, availability and work completed.', why: 'A deployed workforce is only visible through the work it records.', example: 'Planned against reactive hours per technician.' },
    { id: 'relationships', title: 'Clients, tenants and occupiers', line: 'Clients carry their contracts, service level performance, requests raised and commercial position.', why: 'The person raising a request is often not the person holding the contract.', example: 'Requests by tenant against contract performance by client.' },
    { id: 'inventory', title: 'Spares, consumables and tooling', line: 'Spares held centrally and at sites are recorded against assets and work orders.', why: 'A callout that fails for a missing part is a second callout and a second cost.', example: 'Spares consumption by asset type and site.' },
    { id: 'control', title: 'Compliance, permits and audit evidence', line: 'One permission model and one audit trail, with statutory inspections and permits carried as scheduled obligations.', why: 'Operating someone else’s building carries obligations that must be evidenced.', example: 'Statutory inspection completion by site.' },
    { id: 'intelligence', title: 'Service level, cost and asset reporting', line: 'Response and resolution performance, planned against reactive balance, cost to serve, asset failure rates and compliance completeness come from the records.', why: 'The company is judged on service levels and paid a fixed fee, so both need measuring together.', example: 'Cost to serve per contract against fee.' },
    { id: 'ai', title: 'Ask the portfolio a question', line: 'Verity AI answers from your own contract, work order, asset and staff records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about which contracts are slipping and why.', example: '"Which contracts are below their response target?" returns two with the callout causes.' },
    { id: 'communication', title: 'Client and occupier contact', line: 'Request updates, escalations and client reporting attach to the work order and contract.', why: 'A client who is told is a client who does not escalate.', example: 'An escalation recorded against the work order and contract.' },
    { id: 'locations', title: 'Sites, buildings and zones', line: 'Sites carry their buildings, zones, assets, stationed staff and access requirements.', why: 'Work is located and access-constrained, and both affect response time.', example: 'Response performance by site and zone.' },
    { id: 'orders', title: 'Contract billing, extras and recovery', line: 'Contract fees, chargeable extras and out-of-scope work carry a billing state.', why: 'Work outside scope is the recoverable part of a reactive-heavy month.', example: 'Out-of-scope work performed against work billed.' },
  ],

  workflowsHeading: 'Receive, dispatch, resolve, evidence, report.',
  workflowsLede: 'These already happen. Recorded, service levels and margin stop being a quarterly surprise.',
  workflows: [
    { name: 'Request to resolution', steps: ['Request received against site and contract', 'Response clock started against the contract target', 'Assigned by skill, location and availability', 'Attended with outcome and parts recorded', 'Resolution recorded and clock closed'], note: 'Starting the clock at receipt rather than at assignment is what makes the measure honest.' },
    { name: 'Planned maintenance', steps: ['Schedule generated from asset intervals and contract scope', 'Tasks allocated across technicians and sites', 'Completion recorded with readings and evidence', 'Findings converted into follow-up work', 'Schedule adherence reported'], note: 'Planned maintenance displaced by reactive work is the leading indicator of next month’s callouts.' },
    { name: 'Asset lifecycle', steps: ['Asset registered with location, interval and warranty', 'Service history recorded against it', 'Failures logged with cause', 'Replacement or overhaul recommended from history', 'Client decision recorded'], note: 'Failure history is the evidence for a replacement conversation with the client.' },
    { name: 'Compliance cycle', steps: ['Statutory obligations mapped per site', 'Inspections scheduled with owners', 'Completion evidenced with documents', 'Non-conformities raised and closed', 'Position reportable per site and client'], note: 'Compliance evidence has to exist per site, not per company.' },
    { name: 'Contract review', steps: ['Service level performance compiled', 'Planned against reactive balance reviewed', 'Cost to serve compared with fee', 'Out-of-scope work identified for recovery', 'Renewal or renegotiation position prepared'], note: 'A renegotiation is only winnable with the callout evidence behind it.' },
  ],

  ai: {
    heading: 'Ask about service levels and cost to serve.',
    lede: 'Verity AI reads the same contract, work order, asset and staff records the company creates as it operates. It answers from your own portfolio, respects permissions, and can turn an answer into a dispatch or a client conversation.',
    panelMeta: 'Grounded in your portfolio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which contracts are below their response target this month?',
      'What is the planned against reactive balance by contract?',
      'Which assets are past their service interval?',
      'Which contracts are below target margin and why?',
      'Which sites generate the most callouts?',
      'What out-of-scope work has been done and not billed?',
      'Which statutory inspections are outstanding?',
      'Which assets have failed more than twice this year?',
      'Summarise service level and margin position by client.',
    ],
  },

  automationHeading: 'The clock, the schedule and the asset.',
  automationLede: 'Each runs from the company’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A request approaches its response target', steps: ['Escalated with site and contract', 'Reassignment options surfaced', 'Client update recorded'] },
    { trigger: 'Planned maintenance slips its scheduled window', steps: ['Flagged against contract and asset', 'Rescheduling assigned', 'Adherence position updated'] },
    { trigger: 'An asset passes its service interval', steps: ['Flagged with failure history', 'Work order raised', 'Completion recorded against the asset'] },
    { trigger: 'An asset fails repeatedly', steps: ['Failure pattern surfaced with cost', 'Replacement recommendation raised', 'Client decision recorded'] },
    { trigger: 'Out-of-scope work is recorded', steps: ['Chargeable state assigned', 'Client approval raised', 'Billing position updated'] },
  ],

  intelligenceHeading: 'What the company can see.',
  intelligenceLede: 'Service levels, cost and asset condition from operational records.',
  intelligence: [
    { area: 'Service levels', points: ['Response and resolution against target', 'Performance by client, site and request type', 'Breaches and their causes', 'Trend across the contract term'] },
    { area: 'Work balance', points: ['Planned against reactive by contract', 'Schedule adherence', 'Callout volume by site', 'Technician hours by work type'] },
    { area: 'Assets', points: ['Service interval compliance', 'Failure rates by asset type', 'Repeat failures and cost', 'Warranty and replacement position'] },
    { area: 'Commercial', points: ['Cost to serve against contract fee', 'Margin by contract', 'Out-of-scope work performed and recovered', 'Renewal risk indicators'] },
  ],
  intelligenceNote: 'Verity records the company’s operations. Building management systems and access control continue as they are.',

  rolesHeading: 'One company, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Managing director', question: 'Which contracts are healthy?', focus: 'Service level performance, cost to serve against fee, margin by contract, renewal risk.' },
    { role: 'Operations manager', question: 'Is today’s work covered?', focus: 'Open requests against clocks, technician deployment, planned maintenance due, escalations.' },
    { role: 'Technician', question: 'What am I attending and with what?', focus: 'Assigned work orders, site access, asset history, spares required.' },
    { role: 'Account manager', question: 'What do I take to the client review?', focus: 'Service level evidence, callout patterns, asset recommendations, out-of-scope recovery.' },
  ],

  useCasesHeading: 'What facility management companies use Verity for',
  useCases: [
    { name: 'Live service level performance', body: 'Response and resolution clocks running per request against each contract’s target, so a slipping contract is visible in the week rather than at the quarterly review.' },
    { name: 'Protecting planned maintenance', body: 'Planned and reactive work measured against each other, so displacement of the preventive schedule is caught before it produces the next wave of callouts.' },
    { name: 'Seeing a deployed workforce', body: 'Work orders carrying site, time, outcome and parts, so a mobile and stationed workforce is visible through the work it records.' },
    { name: 'Asset condition and failure history', body: 'Service intervals, warranties and failure records per asset, turning breakdowns into a schedule and a replacement case.' },
    { name: 'Contract profitability', body: 'Cost to serve attributed from work orders against contract fee, so renegotiation is backed by callout evidence.' },
    { name: 'Compliance evidence per site', body: 'Statutory inspections and permits scheduled, completed and evidenced against the site they belong to.' },
    { name: 'Asking about the portfolio', body: 'Plain-language questions across contracts, work orders, assets and margin, with dispatch and escalation raised in the same step.' },
  ],

  migration: 'Building management systems and access control continue and are mapped during implementation. Contracts and service levels, sites, asset registers with service history, staff and certifications, open work orders and compliance schedules are brought across.',

  faqHeading: 'Questions facility management companies ask',
  faqs: [
    ['What can AI software do for a facility management company?', 'Verity AI answers questions from your own contract, work order, asset and staff records: which contracts are below their response target, what the planned against reactive balance is, which assets are past service interval, which contracts are below margin and why. Each answer can become a dispatch or a client conversation.'],
    ['How does it help with service level agreements?', 'Every request carries its contract’s response and resolution targets with a clock running from receipt, so performance is a live number rather than a figure compiled for a review after the breaches have happened.'],
    ['Why does the planned to reactive ratio matter?', 'Because they feed each other. Reactive work consumes the day, planned maintenance slips, and the equipment that was not serviced generates the next month’s callouts. Measuring the balance is what breaks the cycle.'],
    ['Can it track staff across many client sites?', 'Deployment is visible through the work itself: every work order carries the site, the person, the time and the outcome, which gives the company a picture of a workforce it cannot physically see.'],
    ['Does it manage asset maintenance?', 'Assets carry location, service interval, warranty and failure history, with overdue services surfaced as work orders and repeat failures raised as replacement recommendations.'],
    ['How does it show contract profitability?', 'Cost to serve is attributed from the work orders actually performed and compared with the contract fee, which makes a reactive-heavy contract visible while there is still term left to renegotiate.'],
    ['Does it replace building management systems?', 'No. Building systems and access control continue as they are. Verity holds the company around them — contracts, requests, work orders, staff, assets and commercial position.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of contracts, service level targets, asset registers and compliance obligations, configuration, migration, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the response clock.',
  ctaLede: 'It is what the contract is written in. Tell us how requests are received and timed today.',

  related: ['property-management', 'cleaning-services', 'repair-services', 'construction-companies', 'contractors', 'building-material-suppliers'],
};
