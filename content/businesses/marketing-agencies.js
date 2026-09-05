export default {
  slug: 'marketing-agencies',
  status: 'published',
  plural: 'marketing agencies',
  subject: 'marketing agency',

  seo: {
    title: 'AI business management software for marketing agencies | Verity',
    description:
      'Verity connects clients, retainers, project delivery, team capacity, approvals and billing into one system, so account profitability stops being a guess.',
    keywords: [
      'AI software for marketing agencies',
      'agency management software',
      'agency resource and capacity planning',
      'client retainer and project management software',
      'creative agency operations software',
    ],
  },

  hero: {
    eyebrow: 'Verity for marketing agencies',
    headline: 'The account looks fine. It is consuming twice the delivery it pays for.',
    lede:
      'Agencies measure revenue and almost never measure what earning it cost. Verity connects the client, the retainer, the work delivered against it and the people who did it, on one record.',
    note: 'Verity runs agency operations. It is not a campaign or advertising platform.',
    panel: {
      title: 'Agency',
      meta: 'All accounts · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active accounts', value: '24', note: '17 on retainer' },
        { label: 'Committed capacity', value: '118%', note: 'against next month' },
        { label: 'Over-servicing', value: '6 accounts', note: 'beyond retainer scope' },
        { label: 'Unbilled work', value: '₹28 L', note: 'across 9 projects' },
      ],
      rows: [
        { name: 'Account consuming 210% of its retainer hours', meta: 'No scope variation recorded · 4 months running', active: true },
        { name: 'Next month committed at 118% of capacity', meta: 'Two pitches still outstanding', active: true },
        { name: '5 deliverables awaiting client approval past due', meta: 'Blocking three dependent tasks', active: true },
        { name: 'Project closed but not billed', meta: '₹6.4 L · completed 31 days ago', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own agency in this shape.',
    },
  },

  overview: {
    heading: 'Agencies instrument their clients’ businesses and not their own.',
    paragraphs: [
      'A marketing agency sells the output of its people. It signs retainers and projects, delivers work against them, and either makes a margin or does not. The commercial question — which accounts are profitable and which are quietly subsidised — depends entirely on knowing what each account actually consumed, and most agencies do not know.',
      'The reason is structural. Delivery work sits in a project tool, the client relationship in a spreadsheet or a CRM, the contract in a drive, the invoice in an accounting package, and capacity in nobody’s system at all. Each of those is fine on its own; none of them can answer whether the account that pays a comfortable monthly retainer is consuming forty percent more delivery than it did a year ago.',
      'Over-servicing is the characteristic agency failure, and it never happens deliberately. A client asks for one more round. A revision becomes a rewrite. Something outside the scope is done because saying no felt disproportionate. Individually each is reasonable, and collectively they are the difference between a good year and a flat one.',
      'The second failure is capacity. Work is sold against availability that nobody has calculated, so a team is committed at a hundred and eighteen percent of its month before two outstanding pitches are counted.',
      'Verity holds the client, the retainer, the work delivered against it, the people who delivered it, the approvals and the billing position as one set of records. The commercial and the delivery sides stop being separate conversations.',
    ],
  },

  terminology: [
    ['Clients, accounts, retainers', 'Relationships'],
    ['Projects, campaigns, deliverables', 'Work'],
    ['Briefs, assets, contracts, decks', 'Records'],
    ['Strategists, creatives, account managers', 'People'],
    ['Client approvals, sign-offs, revisions', 'Workflows'],
    ['Freelancers, production partners, vendors', 'Suppliers'],
    ['Teams, studios, offices', 'Locations'],
  ],

  challengesHeading: 'The commercial problems present as delivery problems.',
  challengesLede:
    'An overloaded team, a slipping deadline and a difficult client are usually the same underlying fact: nobody measured what the account consumes.',
  challenges: [
    {
      problem: 'Account profitability is a guess',
      detail:
        'Revenue per account is known precisely. Delivery effort against it is known approximately, if at all, so margin is inferred rather than measured.',
      outcome:
        'Work is recorded against the account that requested it, so consumption against retainer is a number rather than an impression.',
    },
    {
      problem: 'Over-servicing accumulates invisibly',
      detail:
        'Extra rounds, out-of-scope requests and goodwill work are absorbed one at a time and never add up anywhere.',
      outcome:
        'Out-of-scope work is raised as a variation against the account, so it is either agreed and charged or recorded as a decision not to.',
    },
    {
      problem: 'Capacity is committed before it is checked',
      detail:
        'New work is sold against a team’s availability that nobody has actually calculated, and the overload appears three weeks later as missed deadlines.',
      outcome:
        'Assigned work per person and per period is a record, so the commitment is made against real remaining capacity.',
    },
    {
      problem: 'Client approvals stall the whole chain',
      detail:
        'A deliverable waits on a client sign-off that nobody is tracking, and the dependent work sits idle while the deadline stays fixed.',
      outcome:
        'Approvals are workflow steps with an owner and an age, so a stalled sign-off is visible and chaseable.',
    },
    {
      problem: 'Client context is scattered',
      detail:
        'The history of an account lives across a chat tool, an inbox, a drive and the account manager who has been there longest.',
      outcome:
        'Briefs, decisions, assets and correspondence attach to the account and the project they concern.',
    },
    {
      problem: 'Work finishes and is billed late',
      detail:
        'A project completes, everyone moves on, and the invoice is raised a month later because it was nobody’s specific task.',
      outcome:
        'Completed and unbilled work is aged against the account, so it surfaces as an exception rather than in a quarterly review.',
    },
  ],

  modulesLede:
    'Verity runs the agency’s operation. Campaign delivery platforms stay where they are.',
  modules: [
    {
      id: 'work',
      title: 'Projects, campaigns and deliverables',
      line:
        'Work is held with its account, scope, owner, state, dependencies and the effort recorded against it.',
      why:
        'The delivery record is what connects a client’s payment to what the agency actually spent producing the output.',
      example:
        'A campaign with eleven deliverables shows which are done, which are waiting on client approval and what each has consumed.',
    },
    {
      id: 'relationships',
      title: 'Clients, accounts and retainers',
      line:
        'Each account is a record with its contract terms, retainer scope, projects, contacts, approvals and billing position.',
      why:
        'The account is the commercial unit. Held as a record, it can be assessed; held across four tools, it cannot.',
      example:
        'An account’s retainer scope sits next to the work delivered against it, which is the only way over-servicing becomes visible.',
    },
    {
      id: 'people',
      title: 'Strategists, creatives and account managers',
      line:
        'The team is modelled once, and every project, task and deliverable shows who owns it and who worked on it.',
      why:
        'An agency’s entire cost base is its people, and allocating them well requires knowing what each is already carrying.',
      example:
        'Assigned work per person for the coming month, so a new project is committed against real availability.',
    },
    {
      id: 'workflows',
      title: 'Approvals, revisions and sign-offs',
      line:
        'Client approvals, internal reviews, scope variations and revision rounds are defined steps with owners and recorded decisions.',
      why:
        'Revision rounds are where agency margin is consumed, and they are almost never counted against what the contract allows.',
      example:
        'A fourth revision round on a two-round scope raises a variation rather than being absorbed silently.',
    },
    {
      id: 'records',
      title: 'Briefs, contracts and assets',
      line:
        'Documents attach to the account or project they belong to, with version history, permissions and retention.',
      why:
        'The brief that was agreed and the contract that defines scope are the two documents everyone needs and nobody can find during a disagreement.',
      example:
        'The signed statement of work sits on the account record, so a scope discussion starts from the document rather than from memory.',
    },
    {
      id: 'communication',
      title: 'Decisions attached to the work',
      line:
        'Comments, notifications and activity attach to the project or deliverable they concern.',
      why:
        'Agency context lives in chat threads, which means it is unavailable to anyone who joins the account later.',
      example:
        'The client’s decision to change direction is recorded against the deliverable, not buried in a channel.',
    },
    {
      id: 'intelligence',
      title: 'Agency reporting from live records',
      line:
        'Account consumption against retainer, capacity commitment, delivery against deadline, unbilled ageing and utilisation come from the operational records.',
      why:
        'Agencies report revenue monthly and effort never, which is why the profitable accounts and the subsidised ones look identical.',
      example:
        'Consumption against retainer by account, current, rather than reconstructed at contract renewal.',
    },
    {
      id: 'ai',
      title: 'Ask the agency a question',
      line:
        'Verity AI answers from your own account, project, capacity and billing records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking span delivery and commerce at once, which is exactly why they are asked at a leadership meeting and rarely answered.',
      example:
        '"Which accounts are consuming more than their retainer?" returns six, and one instruction assigns scope reviews to the account leads.',
    },
    {
      id: 'suppliers',
      title: 'Freelancers and production partners',
      line:
        'External contributors are relationships with their engagements, costs, deliverables and outstanding balances, connected to the projects they support.',
      why:
        'Agencies pass a meaningful share of delivery to freelancers and rarely attribute that cost back to the account that caused it.',
      example:
        'Freelance cost recorded against the project makes the true delivery cost of an account visible.',
    },
    {
      id: 'control',
      title: 'Access across accounts',
      line:
        'One permission model and one audit trail, with account access set deliberately.',
      why:
        'Agencies frequently hold competing clients, and access boundaries need to be enforced rather than assumed.',
      example:
        'Competing accounts can be restricted to their own teams, with every access recorded.',
    },
    {
      id: 'commandCentre',
      title: 'The agency as it is running',
      line:
        'One live view of what is moving, what is blocked, who owns it and what needs attention.',
      why:
        'Weekly status meetings exist because no such view exists, and most of that meeting is establishing facts.',
      example:
        'Deliverables due, approvals stalled, accounts over retainer and capacity committed, in one picture.',
    },
    {
      id: 'locations',
      title: 'Teams, studios and offices',
      line:
        'Organisational units roll into the agency, with permissions and reporting following the same structure.',
      why:
        'A multi-office or multi-discipline agency cannot compare utilisation or margin unless work is recorded identically.',
      example:
        'Utilisation and account margin by team, from the same records rather than from separate reports.',
    },
  ],

  workflowsHeading: 'From brief to billing, recorded at each step.',
  workflowsLede:
    'These already happen in your agency. In Verity each step is a state, so the ones that stall are visible before they cost margin.',
  workflows: [
    {
      name: 'New business to signed account',
      steps: [
        'Opportunity recorded against a prospective client record',
        'Scope and commercial terms drafted',
        'Capacity checked against the delivery period',
        'Proposal issued and its state tracked',
        'Statement of work signed and attached to the account',
        'Account opened with retainer scope and team assigned',
      ],
      note:
        'Checking capacity before committing is the step most often skipped and most expensive to skip.',
    },
    {
      name: 'Project delivery',
      steps: [
        'Project created against the account with its deliverables',
        'Work assigned with owners and due dates',
        'Effort recorded against each deliverable',
        'Internal review completed before client submission',
        'Client approval tracked as a workflow step',
        'Revisions recorded against the agreed round allowance',
        'Project completed and marked ready to bill',
      ],
      note:
        'Revision rounds are counted against the contract rather than absorbed.',
    },
    {
      name: 'Scope variation',
      steps: [
        'Request identified as outside the agreed scope',
        'Variation raised with the effort and commercial basis',
        'Approval routed to the account lead',
        'Client agreement recorded against the account',
        'Retainer or project scope updated, or a decision not to charge recorded',
      ],
      note:
        'Over-servicing becomes either recoverable revenue or an explicit, visible choice.',
    },
    {
      name: 'Capacity planning',
      steps: [
        'Committed work aggregated by person and period',
        'Outstanding proposals weighted against the same period',
        'Overcommitment flagged before it is sold',
        'Freelance or reallocation decisions raised',
        'Assignments adjusted and recorded',
      ],
      note:
        'The number that stops an agency overselling is the one it currently does not calculate.',
    },
    {
      name: 'Client approval chasing',
      steps: [
        'Deliverable submitted and approval step opened',
        'Age tracked against the approval',
        'Reminder raised to the client contact',
        'Dependent work flagged as blocked',
        'Approval recorded and the chain released',
      ],
      note:
        'A stalled client sign-off becomes visible with the work it is blocking, which changes the conversation.',
    },
    {
      name: 'Billing and recovery',
      steps: [
        'Completed and unbilled work aged against the account',
        'Invoice prepared and routed for review',
        'Issued and recorded against the account',
        'Payment applied and ageing updated',
        'Collection follow-up assigned where terms are exceeded',
      ],
      note:
        'Ageing begins when work completes rather than when someone remembers to invoice.',
    },
  ],

  ai: {
    heading: 'Ask what the agency actually costs to run.',
    lede:
      'Verity AI reads the same account, project, capacity and billing records the agency works in. It answers from your own operation, respects account access boundaries, and can turn an answer into work assigned to the right lead.',
    panelMeta: 'Grounded in your agency records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which accounts are consuming more delivery than their retainer covers?',
      'How committed is the team for next month?',
      'Which deliverables are stalled on client approval, and for how long?',
      'How much completed work is unbilled, and on which accounts?',
      'Which accounts have exceeded their agreed revision rounds?',
      'What is utilisation by person this month?',
      'Which projects are past their deadline, and what is blocking them?',
      'What did freelance cost add to each account this quarter?',
      'Summarise account health across the agency.',
    ],
  },

  automationHeading: 'The checks that protect margin.',
  automationLede:
    'These run from the agency’s own records at the point the condition occurs.',
  automations: [
    {
      trigger: 'An account passes its retainer scope',
      steps: [
        'Account flagged as over-serviced with the consumption attached',
        'Review task assigned to the account lead',
        'Scope variation raised or a decision recorded',
      ],
    },
    {
      trigger: 'A deliverable is submitted for client approval',
      steps: [
        'Approval step opened with an age against it',
        'Reminder raised as it passes the threshold',
        'Dependent work flagged as blocked',
      ],
    },
    {
      trigger: 'Committed work exceeds available capacity',
      steps: [
        'Overcommitment flagged for the period',
        'Reallocation or freelance task created',
        'Outstanding proposals surfaced against the same period',
      ],
    },
    {
      trigger: 'A revision round exceeds the agreed allowance',
      steps: [
        'Round recorded against the deliverable',
        'Variation raised against the account',
        'Decision recorded — charged or absorbed',
      ],
    },
    {
      trigger: 'A project completes',
      steps: [
        'Unbilled position aged against the account',
        'Billing task assigned to the account lead',
        'Escalated if it passes the second threshold',
      ],
    },
    {
      trigger: 'An account balance passes its payment terms',
      steps: [
        'Balance aged on the account record',
        'Collection follow-up assigned to the account lead',
        'Escalated with the delivery history attached',
      ],
    },
  ],

  intelligenceHeading: 'What agency leadership can actually see.',
  intelligenceLede:
    'Commercial and delivery performance from the same records, which is the point.',
  intelligence: [
    {
      area: 'Accounts',
      points: [
        'Consumption against retainer scope',
        'Accounts over-serviced and by how much',
        'Revenue and delivery cost per account',
        'Scope variations raised, agreed and absorbed',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Committed work per person and period',
        'Utilisation against available hours',
        'Overcommitment ahead of the period',
        'Freelance dependency by account and team',
      ],
    },
    {
      area: 'Delivery',
      points: [
        'Deliverables due, completed and late',
        'Approvals stalled and the work they block',
        'Revision rounds against allowance',
        'Cycle time from brief to sign-off',
      ],
    },
    {
      area: 'Commercial',
      points: [
        'Unbilled work aged by account',
        'Outstanding balances with ageing bands',
        'Revenue by account, team and period',
        'New business won against capacity committed',
      ],
    },
    {
      area: 'People',
      points: [
        'Assigned work per person',
        'Effort recorded by account and project',
        'Distribution of load across the team',
        'Accounts dependent on a single individual',
      ],
    },
    {
      area: 'Operations',
      points: [
        'Exceptions raised and time to close',
        'Approvals awaiting a decision',
        'Documents and sign-offs outstanding',
        'Team or office comparison',
      ],
    },
  ],
  intelligenceNote:
    'These come from the delivery records the agency creates as it works. Campaign performance stays in whatever platforms you use for it.',

  rolesHeading: 'One agency, five different questions.',
  rolesLede:
    'Everyone works from the same records, with account access set deliberately.',
  roles: [
    {
      role: 'Founder',
      question: 'Which accounts are actually making money?',
      focus: 'Consumption against retainer, delivery cost per account, utilisation, unbilled ageing, capacity committed.',
    },
    {
      role: 'Account lead',
      question: 'Is my account healthy?',
      focus: 'Scope consumed, variations outstanding, approvals stalled, deliverables late, account balance.',
    },
    {
      role: 'Delivery lead',
      question: 'Can we actually do this?',
      focus: 'Committed work by person and period, overcommitment, freelance requirements, deadlines at risk.',
    },
    {
      role: 'Creative or strategist',
      question: 'What do I owe and by when?',
      focus: 'Assigned deliverables, review states, revision rounds, briefs and assets on the project.',
    },
    {
      role: 'Operations',
      question: 'What is stalled and what is unbilled?',
      focus: 'Approvals past due, unbilled ageing, outstanding sign-offs, exceptions awaiting resolution.',
    },
  ],

  useCasesHeading: 'What agencies use Verity for',
  useCases: [
    {
      name: 'Account profitability',
      body: 'Delivery effort recorded against the account that caused it, so retainer consumption and true account margin become numbers rather than impressions.',
    },
    {
      name: 'Over-servicing control',
      body: 'Out-of-scope work raised as a variation with an approval, so goodwill is either recovered or is an explicit decision.',
    },
    {
      name: 'Capacity planning',
      body: 'Committed work aggregated by person and period, so new business is sold against availability that has actually been calculated.',
    },
    {
      name: 'Client approval tracking',
      body: 'Sign-offs as workflow steps with an age and the dependent work they block, so a stalled client becomes a visible, chaseable fact.',
    },
    {
      name: 'Revision round control',
      body: 'Rounds counted against the agreed allowance, which is where a large share of agency margin is currently consumed.',
    },
    {
      name: 'Brief, contract and asset management',
      body: 'Statements of work, briefs and assets attached to the account and project with versions and permissions.',
    },
    {
      name: 'Freelance and production cost',
      body: 'External delivery cost recorded against the project, so the true cost of servicing an account includes what was passed outside.',
    },
    {
      name: 'Unbilled and collection management',
      body: 'Completed work aged from the moment it finishes, so invoicing does not depend on someone remembering.',
    },
    {
      name: 'Asking the agency questions',
      body: 'Plain-language questions across accounts, delivery, capacity and billing at once, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'The project tool, the client spreadsheet, the contracts drive and the accounting package are mapped during implementation. Accounts, active projects and open balances are brought across, and Verity is introduced as the operational layer over them while delivery continues.',

  faqHeading: 'Questions agencies ask',
  faqs: [
    [
      'Is Verity a campaign or advertising platform?',
      'No. Verity runs the agency’s own operation — accounts, retainers, projects, deliverables, capacity, approvals, documents and billing position. Campaign delivery and media platforms stay where they are.',
    ],
    [
      'What can AI software do for a marketing agency?',
      'Verity AI answers questions from your own account, project, capacity and billing records: which accounts are consuming more than their retainer covers, how committed the team is next month, which deliverables are stalled on client approval, how much completed work is unbilled. Each answer can become work assigned to the right lead.',
    ],
    [
      'Can Verity show which accounts are profitable?',
      'It shows delivery effort recorded against each account alongside the retainer or project value and any freelance cost attributed to it. That makes consumption against scope visible, which is the part agencies usually cannot see.',
    ],
    [
      'How does it help with over-servicing?',
      'Work outside the agreed scope is raised as a variation with an approval, so it is either agreed with the client and charged, or recorded as a deliberate decision to absorb it. Either way it stops being invisible.',
    ],
    [
      'Can it help us plan capacity?',
      'Committed work is aggregated by person and period, so the team’s real availability is a number before new work is sold against it, rather than an overload discovered three weeks later.',
    ],
    [
      'Does it track client approvals?',
      'Approvals are workflow steps with an owner and an age, and the work depending on them is flagged as blocked. A sign-off sitting with a client for eleven days is visible alongside the deadline it is endangering.',
    ],
    [
      'How is access handled when we hold competing clients?',
      'Verity has one permission model and one audit trail, and account access is set deliberately rather than by default, so competing accounts can be restricted to their own teams with every access recorded.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Verity holds the operational and commercial record — accounts, scope, delivery, unbilled ageing and collection follow-up — and is introduced alongside your accounting arrangements rather than in place of them.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the agency actually delivers, configuration, migration of accounts and active projects, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the account you suspect is subsidised.',
  ctaLede:
    'Every agency has one. Tell us how you deliver today and we will show you what measuring it looks like in Verity.',

  related: ['advertising-agencies', 'design-agencies', 'pr-agencies', 'content-agencies', 'consulting-firms', 'software-agencies'],
};
