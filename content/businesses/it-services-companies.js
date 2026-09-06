export default {
  slug: 'it-services-companies',
  status: 'published',
  plural: 'IT services companies',
  subject: 'IT services company',

  seo: {
    title: 'AI business management software for IT services companies | Verity',
    description:
      'Verity connects support tickets and SLAs, contracted scope, engineer allocation across accounts, client assets and billing models into one operational system.',
    keywords: [
      'AI software for IT services companies',
      'managed services provider software',
      'SLA and ticket tracking software',
      'IT services resource allocation and contract management',
    ],
  },

  hero: {
    eyebrow: 'Verity for IT services',
    headline: 'The contract says four hours. The engineer who knows that client is on another site.',
    lede:
      'An IT services business sells response commitments and delivers them with shared engineers. Verity connects the contract, the ticket, the asset and the person, so an SLA breach is predictable rather than reported.',
    note: 'Verity runs the services business. Your monitoring and toolset stay where they are.',
    panel: {
      title: 'Service desk',
      meta: 'All accounts · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Open tickets', value: '142', note: 'across 38 accounts' },
        { label: 'At SLA risk', value: '11', note: 'inside 2 hours of breach' },
        { label: 'Out of contract', value: '23', note: 'billable, unbilled' },
        { label: 'Engineer coverage', value: '3 accounts', note: 'single-engineer dependency' },
      ],
      rows: [
        { name: '11 tickets within two hours of SLA breach', meta: 'Four need the same engineer', active: true },
        { name: '23 tickets outside contracted scope, none billed', meta: '₹3.4 L of effort this month', active: true },
        { name: 'Three accounts depend on one engineer', meta: 'No documented handover', active: true },
        { name: 'Client assets out of support with no renewal raised', meta: '46 devices · warranty expired', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own service desk in this shape.',
    },
  },

  overview: {
    heading: 'You sell a response time and deliver it from a shared pool of people.',
    paragraphs: [
      'A managed services business makes a commitment per account — response within a defined time, a scope of covered work, an agreed number of hours or devices — and then delivers all of those commitments from one team of engineers who are shared across every account. The tension between contracted commitments and shared capacity is the entire operational problem.',
      'The commitment is measurable, which makes IT services unusual among professional businesses: an SLA either was or was not met, per ticket. What is usually not measurable is why. A breach happens because the engineer who knows that client’s environment was at another site, or because a ticket was misrouted, or because nobody escalated. Those causes are recorded nowhere, so the same breach repeats.',
      'The second characteristic loss is out-of-scope work. Clients ask for things outside the contract, engineers do them because refusing is awkward and the request is small, and the effort is never billed. Twenty-three tickets a month outside contracted scope is a meaningful sum in a business with thin service margins, and most providers can only estimate it.',
      'The third is key-person dependency. Three accounts depending on one engineer is a commercial risk that is entirely invisible until that person takes leave or resigns, because environment knowledge lives in their head rather than in documentation attached to the account.',
      'Verity holds the contract, the ticket, the SLA clock, the asset, the engineer and the billing position as one set of records.',
    ],
  },

  terminology: [
    ['Tickets, incidents, requests, changes', 'Work'],
    ['Contracts, SLAs, covered scope', 'Records'],
    ['Clients, sites, end users', 'Relationships'],
    ['Engineers, on-call rota, escalation tiers', 'People'],
    ['Client devices, licences, warranties', 'Inventory'],
    ['Escalations, approvals, change control', 'Workflows'],
    ['Accounts, sites, regions', 'Locations'],
  ],

  challengesHeading: 'A measurable commitment delivered from a shared pool.',
  challengesLede:
    'IT services difficulties come from contracts that are specific and capacity that is not.',
  challenges: [
    {
      problem: 'SLA breaches are reported, not predicted',
      detail:
        'The monthly report says how many were missed. Nothing said which were about to be missed while there was still time to act.',
      outcome:
        'The SLA clock runs on the ticket against the account’s contract, so tickets approaching breach surface with time remaining.',
    },
    {
      problem: 'Out-of-scope work is done and never billed',
      detail:
        'A client asks for something outside the contract, an engineer obliges, and the effort disappears into the service margin.',
      outcome:
        'Tickets are checked against contracted scope, so out-of-scope work is flagged as billable or as a recorded decision to absorb it.',
    },
    {
      problem: 'Key-person dependency is invisible',
      detail:
        'Certain accounts only run because one engineer knows the environment, and this is discovered when they are unavailable.',
      outcome:
        'Ticket ownership by account and engineer is recorded, so concentration surfaces as a measured risk with documentation gaps named.',
    },
    {
      problem: 'Breach causes are never recorded',
      detail:
        'A missed SLA is counted but its cause — misrouting, availability, waiting on the client, waiting on a vendor — is not, so the same breach recurs.',
      outcome:
        'Cause is recorded at resolution, so recurring causes become a list rather than a monthly number.',
    },
    {
      problem: 'Client assets fall out of support unnoticed',
      detail:
        'Devices go out of warranty and licences lapse, and it becomes visible when something fails and cannot be replaced.',
      outcome:
        'Client assets are records with warranty and licence dates, so renewals are raised ahead of expiry.',
    },
    {
      problem: 'Account profitability is unknown',
      detail:
        'A fixed monthly fee against unmeasured effort means some accounts are subsidised by others and nobody can say which.',
      outcome:
        'Effort recorded against the account produces cost against contracted fee, so loss-making accounts are identified.',
    },
  ],

  modulesLede:
    'One system across contracts, tickets, engineers, assets and billing.',
  modules: [
    {
      id: 'work',
      title: 'Tickets, incidents, requests and changes',
      line:
        'Every ticket is work with an account, a category, a priority, an owner, an SLA clock, recorded effort and a resolution with a cause.',
      why:
        'The ticket is where the contractual commitment, the engineer’s time and the client’s experience all meet.',
      example:
        'Eleven tickets within two hours of breach, four of them needing the same engineer.',
    },
    {
      id: 'records',
      title: 'Contracts, SLAs and covered scope',
      line:
        'Each account carries its contract terms, response and resolution targets, covered scope, included hours and renewal dates.',
      why:
        'Scope is what separates billable work from absorbed work, and it has to be checkable at the moment a ticket is logged.',
      example:
        'Twenty-three tickets outside contracted scope this month, quantified as effort.',
    },
    {
      id: 'people',
      title: 'Engineers, tiers and on-call rota',
      line:
        'The team is modelled once with skills, account familiarity, availability and on-call assignment, and every ticket shows who owns it.',
      why:
        'Delivery capacity is shared across accounts with specific commitments, and matching the two is the daily job.',
      example:
        'Three accounts with a single-engineer dependency, surfaced with the documentation gaps named.',
    },
    {
      id: 'inventory',
      title: 'Client devices, licences and warranties',
      line:
        'Client assets are records with their site, configuration, warranty and licence dates, and the tickets raised against them.',
      why:
        'An asset’s ticket history is the difference between another repair and a replacement recommendation.',
      example:
        'Forty-six devices out of warranty with no renewal raised, alongside the tickets they have generated.',
    },
    {
      id: 'relationships',
      title: 'Clients, sites and end users',
      line:
        'Clients are records with their contracts, sites, users, ticket history, escalations, satisfaction and balances.',
      why:
        'Renewal decisions are made on service experience, and the evidence for that experience is the ticket history.',
      example:
        'An account approaching renewal with its breach history and escalation record in one view.',
    },
    {
      id: 'workflows',
      title: 'Escalation, change control and approvals',
      line:
        'Escalation tiers, change approvals, out-of-scope authorisation and after-hours work move through defined steps with recorded decisions.',
      why:
        'Escalation that depends on someone deciding to escalate is escalation that happens too late.',
      example:
        'A ticket approaching breach escalates automatically to the tier that can resolve it.',
    },
    {
      id: 'intelligence',
      title: 'SLA, scope and account reporting',
      line:
        'SLA attainment and breach causes, out-of-scope effort, account cost against fee, asset lifecycle and engineer load come from the operational records.',
      why:
        'Providers report SLA attainment to clients and rarely report account profitability to themselves.',
      example:
        'Cost against contracted fee per account, which usually identifies two or three that should be repriced.',
    },
    {
      id: 'ai',
      title: 'Ask the service desk a question',
      line:
        'Verity AI answers from your own ticket, contract, asset and engineer records, respects permissions, and can create assigned follow-ups.',
      why:
        'The useful questions cross contract, capacity and history at once, which is exactly what a ticket queue view cannot do.',
      example:
        '"Which tickets are at SLA risk and who can actually resolve them?" returns eleven with reassignments proposed.',
    },
    {
      id: 'communication',
      title: 'Client updates on the ticket',
      line:
        'Notes, updates and activity attach to the ticket, asset or account they concern.',
      why:
        'Most client dissatisfaction in managed services is about not being updated rather than about resolution time.',
      example:
        'An update recorded on the ticket, so the next engineer and the client see the same history.',
    },
    {
      id: 'control',
      title: 'Access, change approval and audit',
      line:
        'One permission model and one audit trail across every record, with change approvals recorded.',
      why:
        'A services provider holds administrative access to client environments, which makes attribution a professional obligation.',
      example:
        'Every change carries the approver, the engineer and the time.',
    },
    {
      id: 'locations',
      title: 'Accounts, sites and regions',
      line:
        'Client sites and internal regions are locations, with tickets, assets and reporting following the same structure.',
      why:
        'On-site work has travel time and coverage constraints that only appear if sites are modelled.',
      example:
        'Engineer coverage by region against the accounts committed there.',
    },
  ],

  workflowsHeading: 'From logged to resolved, with the clock running.',
  workflowsLede:
    'These already run. As records with contract terms attached, the commitment becomes manageable rather than reportable.',
  workflows: [
    {
      name: 'Ticket intake to assignment',
      steps: [
        'Ticket logged against the account, site and asset',
        'Contract terms applied and the SLA clock started',
        'Scope checked against the contract',
        'Priority set and owner assigned by skill and availability',
        'Out-of-scope work flagged for authorisation before it starts',
      ],
      note:
        'Checking scope at intake is what turns absorbed work into either billable work or a deliberate decision.',
    },
    {
      name: 'SLA management',
      steps: [
        'Clock tracked against response and resolution targets',
        'Tickets approaching breach surfaced with time remaining',
        'Escalation to the next tier triggered automatically',
        'Client updated and the update recorded',
        'Breach cause recorded at resolution',
      ],
      note:
        'The difference between predicting a breach and reporting one is roughly two hours, which is usually enough.',
    },
    {
      name: 'Out-of-scope request',
      steps: [
        'Request identified as outside contracted scope',
        'Effort estimated and authorisation raised',
        'Client approval recorded, or a decision to absorb recorded',
        'Work performed with effort recorded against the ticket',
        'Billable effort released for invoicing',
      ],
      note:
        'Making absorption a recorded decision is what stops it being the default.',
    },
    {
      name: 'Asset lifecycle',
      steps: [
        'Client assets recorded with warranty and licence dates',
        'Ticket history accumulated against each asset',
        'Renewal or replacement flagged ahead of expiry',
        'Recommendation raised to the account with the history attached',
        'Decision and any procurement recorded',
      ],
      note:
        'An asset with a ticket history is a replacement conversation with evidence rather than an upsell.',
    },
    {
      name: 'Account review and renewal',
      steps: [
        'Ticket volume, SLA attainment and breach causes pulled by account',
        'Effort against contracted fee calculated',
        'Out-of-scope work and absorption reviewed',
        'Repricing or scope change prepared for renewal',
        'Decision recorded against the contract',
      ],
      note:
        'Renewal is the only moment a mispriced account can be fixed, and it needs the effort data to be a conversation.',
    },
    {
      name: 'Key-person risk reduction',
      steps: [
        'Ticket ownership concentration measured by account and engineer',
        'Accounts with single-engineer dependency identified',
        'Documentation gaps named against the account',
        'Secondary engineer assigned and shadowing scheduled',
        'Concentration re-measured after the period',
      ],
      note:
        'This is a commercial risk that is invisible until it is a crisis, and entirely measurable before then.',
    },
  ],

  ai: {
    heading: 'Ask before the clock runs out.',
    lede:
      'Verity AI reads the same ticket, contract, asset and engineer records the desk runs on. It answers from your own accounts, respects permissions, and can turn an answer into reassignments and escalations.',
    panelMeta: 'Grounded in your service records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which tickets are at SLA risk, and who can actually resolve them?',
      'How much out-of-scope work was done this month, and for which accounts?',
      'Which accounts depend on a single engineer?',
      'What are the recurring causes of SLA breaches?',
      'Which accounts cost more to serve than their contracted fee?',
      'Which client assets are out of warranty with open tickets?',
      'Which accounts have the worst escalation history before renewal?',
      'What is engineer load by account and region?',
      'Summarise SLA attainment and scope leakage this month.',
    ],
  },

  automationHeading: 'The escalations that should not wait for a decision.',
  automationLede:
    'Each runs from the ticket and contract records at the point the condition is met.',
  automations: [
    {
      trigger: 'A ticket approaches its SLA target',
      steps: [
        'Ticket flagged with time remaining and current owner',
        'Escalated to the next tier automatically',
        'Client update task raised',
        'Cause recorded at resolution',
      ],
    },
    {
      trigger: 'A request falls outside contracted scope',
      steps: [
        'Ticket flagged as out of scope with estimated effort',
        'Authorisation raised to the account owner',
        'Billable effort released or absorption recorded',
      ],
    },
    {
      trigger: 'An asset approaches warranty or licence expiry',
      steps: [
        'Asset flagged with its ticket history',
        'Renewal or replacement recommendation raised',
        'Decision recorded against the account',
      ],
    },
    {
      trigger: 'Ticket ownership concentrates on one engineer',
      steps: [
        'Dependency flagged by account',
        'Documentation gaps identified',
        'Secondary engineer assignment task raised',
      ],
    },
    {
      trigger: 'Effort on an account exceeds its contracted fee',
      steps: [
        'Account flagged with effort against fee',
        'Review assigned ahead of renewal',
        'Repricing or scope decision recorded',
      ],
    },
    {
      trigger: 'A change is requested on a client environment',
      steps: [
        'Change held at the approval step',
        'Routed with the affected assets attached',
        'Approval, execution and outcome recorded',
      ],
    },
  ],

  intelligenceHeading: 'What the services director can actually see.',
  intelligenceLede:
    'Commitment attainment and account economics from the same records.',
  intelligence: [
    {
      area: 'Service',
      points: [
        'SLA attainment by account, priority and period',
        'Tickets at risk and time remaining',
        'Breach causes and their frequency',
        'First-time resolution and reopen rates',
      ],
    },
    {
      area: 'Scope',
      points: [
        'Out-of-scope effort by account',
        'Authorised against absorbed work',
        'Billable effort released for invoicing',
        'Scope disputes and their outcomes',
      ],
    },
    {
      area: 'Accounts',
      points: [
        'Effort at cost against contracted fee',
        'Ticket volume trend by account',
        'Escalation history ahead of renewal',
        'Outstanding balances and ageing',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Engineer load by account and region',
        'Single-engineer dependency by account',
        'On-call and after-hours load',
        'Utilisation against contracted commitments',
      ],
    },
    {
      area: 'Assets',
      points: [
        'Client assets by site, age and support status',
        'Assets out of warranty or licence',
        'Ticket volume by asset and model',
        'Replacement recommendations and outcomes',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds the service and commercial records. Monitoring, remote management and security tooling continue to do their own jobs.',

  rolesHeading: 'One desk, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Services director',
      question: 'Which accounts are we losing money on?',
      focus: 'Effort against contracted fee, out-of-scope leakage, SLA attainment, renewal risk.',
    },
    {
      role: 'Service desk manager',
      question: 'What is about to breach?',
      focus: 'Tickets at SLA risk, engineer availability, escalations open, reassignments needed.',
    },
    {
      role: 'Engineer',
      question: 'What is mine and what is urgent?',
      focus: 'Assigned tickets by SLA remaining, asset history, change approvals, updates due.',
    },
    {
      role: 'Account manager',
      question: 'How is my client actually being served?',
      focus: 'SLA history, escalations, out-of-scope work, asset lifecycle, renewal position.',
    },
    {
      role: 'Accounts',
      question: 'What is billable and what is owed?',
      focus: 'Billable out-of-scope effort, contract invoicing, balances ageing, absorption recorded.',
    },
  ],

  useCasesHeading: 'What IT services companies use Verity for',
  useCases: [
    {
      name: 'SLA risk prediction',
      body: 'The clock running on the ticket against the account’s contract, so tickets approaching breach surface with time remaining rather than in a monthly report.',
    },
    {
      name: 'Scope leakage control',
      body: 'Tickets checked against contracted scope at intake, so out-of-scope work becomes billable or a recorded decision to absorb it.',
    },
    {
      name: 'Breach cause analysis',
      body: 'Cause recorded at resolution, so recurring failures become an addressable list rather than a monthly count.',
    },
    {
      name: 'Key-person dependency',
      body: 'Ticket ownership concentration by account, exposing a commercial risk that is otherwise invisible until someone resigns.',
    },
    {
      name: 'Account profitability',
      body: 'Effort at cost against contracted fee, identifying the accounts subsidised by the rest before renewal rather than after.',
    },
    {
      name: 'Client asset lifecycle',
      body: 'Assets with warranty, licence dates and ticket history, so renewal and replacement conversations carry evidence.',
    },
    {
      name: 'Automatic escalation',
      body: 'Escalation triggered by the clock rather than by someone deciding to escalate, which is usually too late.',
    },
    {
      name: 'Asking the desk questions',
      body: 'Plain-language questions across contracts, tickets, capacity and assets, with reassignments raised in the same step.',
    },
  ],

  migration:
    'Your monitoring, remote management and security tooling continue to run and are mapped during implementation. Accounts, contracts, SLAs, client assets and open tickets are brought across, and Verity is introduced as the service and commercial layer over them.',

  faqHeading: 'Questions IT services providers ask',
  faqs: [
    [
      'What can AI software do for an IT services company?',
      'Verity AI answers questions from your own ticket, contract, asset and engineer records: which tickets are at SLA risk and who can actually resolve them, how much out-of-scope work was done and for which accounts, which accounts depend on a single engineer, which cost more to serve than their fee. Each answer can become a reassignment or an escalation.',
    ],
    [
      'Does Verity replace our monitoring or RMM tooling?',
      'No. Those continue to do their own jobs and are mapped during implementation. Verity is the service and commercial layer — contracts, tickets and SLAs, engineer allocation, client assets, scope control, account economics and reporting.',
    ],
    [
      'How does it help with SLA attainment?',
      'The clock runs on the ticket against the account’s contracted targets, so tickets approaching breach surface with time remaining and escalate automatically. Cause is recorded at resolution, so recurring failures become addressable.',
    ],
    [
      'Can it stop out-of-scope work being given away?',
      'Scope is checked at intake against the contract, so a request outside it is flagged with estimated effort and raised for authorisation. The work becomes billable, or absorbing it becomes a recorded decision rather than the default.',
    ],
    [
      'Can we see which accounts are profitable?',
      'Effort recorded against tickets is costed and compared with the contracted fee per account, which usually identifies two or three accounts being subsidised by the rest — in time to reprice them at renewal.',
    ],
    [
      'Does it track client assets?',
      'Client devices and licences are records with their site, configuration, warranty and licence dates and their ticket history, so renewals are raised ahead of expiry and replacement recommendations carry evidence.',
    ],
    [
      'Can it surface key-person risk?',
      'Ticket ownership concentration is measured by account and engineer, so accounts running on one person’s knowledge are identified with their documentation gaps named, rather than discovered when that person is unavailable.',
    ],
    [
      'How is access to client environments controlled?',
      'Verity has one permission model and one audit trail, and changes to client environments move through recorded approval steps with the engineer, approver and time attached.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of contracts, SLAs and the service desk, configuration, migration of accounts, assets and open tickets, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with scope leakage or SLA risk.',
  ctaLede:
    'One is margin you are giving away and the other is the renewal conversation you will have next year. Tell us which matters more right now.',

  related: ['software-agencies', 'consulting-firms', 'saas-companies', 'recruitment-agencies', 'cybersecurity-companies', 'startups'],
};
