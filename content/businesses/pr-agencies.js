export default {
  slug: 'pr-agencies',
  status: 'published',
  plural: 'PR agencies',
  subject: 'PR agency',

  seo: {
    title: 'AI business management software for PR agencies | Verity',
    description:
      'Verity connects retainer scope against effort, journalist relationships, coverage records, crisis capacity and client reporting into one operational system.',
    keywords: [
      'AI software for PR agencies',
      'public relations agency management software',
      'retainer scope and effort tracking',
      'media relationship and coverage record software',
    ],
  },

  hero: {
    eyebrow: 'Verity for PR agencies',
    headline: 'The retainer buys a month. Nobody counts what the month cost.',
    lede:
      'PR work expands to fill whatever the client asks for, and the retainer does not. Verity records effort against retainer scope and holds the media relationships that produce the results.',
    note: 'Verity runs the agency. Media monitoring tools stay where they are.',
    panel: {
      title: 'Accounts',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Retained accounts', value: '19', note: '₹1.8 Cr annualised' },
        { label: 'Over retainer', value: '7', note: 'effort beyond scope' },
        { label: 'Coverage recorded', value: '146', note: 'across 14 accounts' },
        { label: 'Crisis capacity used', value: '2 accounts', note: 'consuming senior time' },
      ],
      rows: [
        { name: '7 accounts consuming more effort than their retainer covers', meta: 'Combined 340 hours over', active: true },
        { name: 'Two crises consuming senior time across other accounts', meta: 'Retained work slipping', active: true },
        { name: 'Journalist relationships held by one consultant', meta: '3 key accounts depend on them', active: true },
        { name: 'Coverage not recorded against the effort that produced it', meta: 'Reporting rebuilt monthly', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own accounts in this shape.',
    },
  },

  overview: {
    heading: 'The work has no natural boundary and the fee does.',
    paragraphs: [
      'A PR retainer buys a month of attention. What that month contains is negotiated continuously — a press release becomes a media tour, a comment request becomes a thought leadership programme, a bad news cycle becomes three weeks of crisis work. The fee does not move and the effort does, and seven accounts over their retainer is the agency’s margin being redistributed to clients who ask for more.',
      'The second characteristic is that the deliverable is coverage, which the agency does not control. It can control the pitching, the relationships and the responsiveness that produce coverage, and those are recordable even though the outcome is not guaranteed.',
      'The third is that relationships with journalists are the agency’s actual asset and are held entirely by individuals. Three key accounts depending on one consultant’s relationships is a commercial risk nobody has sized.',
      'The fourth is crisis. Crisis work is unplanned, senior-heavy and consumes the capacity that retained work depends on. Two crises can quietly damage every other account in the agency.',
      'The fifth is reporting, which clients expect monthly and which is rebuilt by hand because coverage and effort live apart.',
      'Verity records effort against retainer scope, holds media relationships as agency records, and connects coverage to the work that produced it.',
    ],
  },

  terminology: [
    ['Retainers, projects, campaigns', 'Work'],
    ['Clients, spokespeople, stakeholders', 'Relationships'],
    ['Journalists, publications, outlets', 'Relationships'],
    ['Pitches, releases, coverage', 'Records'],
    ['Consultants, account leads, senior counsel', 'People'],
    ['Scope, approvals, crisis protocols', 'Workflows'],
    ['Practices, sectors, offices', 'Locations'],
  ],

  challengesHeading: 'Unbounded work against a fixed fee.',
  challengesLede:
    'PR difficulties come from an expanding definition of the month and relationships held by individuals.',
  challenges: [
    { problem: 'Retainer scope expands without a conversation', detail: 'Additional work is absorbed because the relationship matters and the individual request is small.', outcome: 'Effort is recorded against retainer scope, so expansion raises a decision rather than a habit.' },
    { problem: 'Journalist relationships are personal', detail: 'The agency’s asset is a set of relationships held entirely by individual consultants.', outcome: 'Media contacts and interaction history are agency records, so a departure is a handover.' },
    { problem: 'Crisis work consumes retained capacity', detail: 'Unplanned crisis work draws senior time from every other account without being visible as the cause.', outcome: 'Crisis work is recorded with its effort, so its effect on retained delivery is attributable.' },
    { problem: 'Coverage is not connected to the effort', detail: 'Coverage is monitored separately from the pitching that produced it, so nothing is learned about what works.', outcome: 'Coverage attaches to the pitch, the journalist and the account.' },
    { problem: 'Reporting is rebuilt every month', detail: 'Client reports are assembled by hand from monitoring tools and memory.', outcome: 'Reporting is an extract from the records the work already created.' },
    { problem: 'Account profitability is unknown', detail: 'Retainer fee is known and effort is not, so nobody can say which accounts are worth keeping.', outcome: 'Effort at cost against fee produces profitability per account.' },
  ],

  modulesLede: 'One system across retainers, relationships, coverage and crisis.',
  modules: [
    { id: 'work', title: 'Retainers, projects and campaigns', line: 'Each is work with a client, scope, recorded effort, activities and state.', why: 'The retainer is a fee against a scope that has to be recorded to be defended.', example: 'Seven accounts over retainer by three hundred and forty hours.' },
    { id: 'relationships', title: 'Journalists, outlets and clients', line: 'Media contacts and clients are records with interaction history, interests, coverage produced and preferences.', why: 'The agency’s asset is relationships, and personal relationships are not agency assets.', example: 'Three accounts depending on one consultant’s media relationships.' },
    { id: 'records', title: 'Pitches, releases and coverage', line: 'Pitches, materials and resulting coverage attach to the account, campaign and journalist.', why: 'Connecting coverage to the pitch is the only way the agency learns what works.', example: 'Coverage recorded against the pitch and journalist that produced it.' },
    { id: 'workflows', title: 'Scope, approvals and crisis protocols', line: 'Scope changes, approvals, crisis activation and escalation move through defined steps with recorded decisions.', why: 'Crisis activation and scope expansion are the two decisions that reshape a month.', example: 'A crisis activated with its capacity impact recorded.' },
    { id: 'people', title: 'Consultants and senior counsel', line: 'Staff are modelled once, with effort recorded against accounts and crises.', why: 'Senior counsel is the constrained resource and crisis consumes it.', example: 'Senior effort consumed by crisis against retained accounts.' },
    { id: 'intelligence', title: 'Scope, capacity and coverage reporting', line: 'Effort against retainer scope, account profitability, capacity consumed by crisis, coverage by pitch and journalist, and relationship concentration come from the records.', why: 'PR agencies measure coverage and rarely measure what it cost to produce.', example: 'Profitability by account after effort at cost.' },
    { id: 'ai', title: 'Ask the agency a question', line: 'Verity AI answers from your own account, effort, media and coverage records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about scope creep and relationship concentration.', example: '"Which accounts are over retainer?" returns seven with scope reviews assigned.' },
    { id: 'communication', title: 'Interactions on the record', line: 'Pitches, conversations and client approvals attach to the account or contact they concern.', why: 'A journalist relationship is a history of interactions, not a phone number.', example: 'A journalist’s interests and past coverage, available to any consultant.' },
    { id: 'control', title: 'Who can commit scope and activate crisis', line: 'One permission model and one audit trail across every record.', why: 'Absorbing scope is a margin decision made by account leads under relationship pressure.', example: 'Scope beyond retainer requiring an explicit decision.' },
    { id: 'locations', title: 'Practices, sectors and offices', line: 'Units roll into the agency with accounts, effort and reporting following the same structure.', why: 'Sector practices have different coverage dynamics and profitability.', example: 'Profitability and scope creep by sector practice.' },
    { id: 'orders', title: 'Retainer billing and project fees', line: 'Retainer invoices, project fees and pass-through costs are recorded against the account.', why: 'Pass-through costs in PR are smaller than in advertising but still leak.', example: 'Event and monitoring costs recovered against the accounts that incurred them.' },
    { id: 'suppliers', title: 'Monitoring, distribution and freelancers', line: 'Suppliers carry their costs, terms and the accounts they serve.', why: 'Monitoring and distribution costs attach to accounts and are often absorbed.', example: 'Monitoring cost attributed to the accounts it covers.' },
  ],

  workflowsHeading: 'A month, recorded.',
  workflowsLede: 'These already happen. Recorded against scope, the month stops expanding for free.',
  workflows: [
    { name: 'Retainer month', steps: ['Scope agreed for the retainer period', 'Activities planned against it', 'Effort recorded as work is done', 'Effort compared against scope through the month', 'Overrun raises a scope conversation rather than an absorption'], note: 'The comparison mid-month is what makes the conversation possible before the month is gone.' },
    { name: 'Pitch to coverage', steps: ['Pitch recorded against account, journalist and angle', 'Interaction and response recorded', 'Coverage linked to the pitch when it appears', 'Outcome aggregated by journalist, outlet and angle', 'Learning applied to future pitching'], note: 'Coverage disconnected from the pitch teaches the agency nothing.' },
    { name: 'Crisis activation', steps: ['Crisis recorded with client, scope and severity', 'Senior team assigned with capacity impact noted', 'Effort recorded against the crisis', 'Retained accounts affected identified', 'Fee basis agreed and recorded'], note: 'Crisis work draws capacity from every other account and should be visible as the cause.' },
    { name: 'Relationship continuity', steps: ['Media contacts recorded as agency records', 'Interactions and coverage logged against them', 'Concentration by consultant measured', 'Introductions and handovers planned', 'Coverage continuity tracked after a change'], note: 'Three accounts resting on one person’s relationships is a risk that can be reduced deliberately.' },
    { name: 'Client reporting', steps: ['Coverage, activity and effort pulled for the period', 'Report assembled from the records', 'Issued and recorded against the account', 'Client feedback recorded', 'Next period’s plan agreed against scope'], note: 'A report that is an extract rather than a construction takes minutes rather than a day.' },
  ],

  ai: {
    heading: 'Ask what the month actually cost.',
    lede: 'Verity AI reads the same account, effort, media and coverage records the agency creates as it works. It answers across accounts, respects permissions, and can turn an answer into scope conversations.',
    panelMeta: 'Grounded in your agency records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which accounts are over their retainer scope?',
      'How much senior capacity did crisis work consume this month?',
      'Which accounts depend on a single consultant’s relationships?',
      'Which pitches and journalists produced coverage this quarter?',
      'What is profitability by account after effort at cost?',
      'Which retained accounts slipped while crises ran?',
      'Which outlets have we not engaged for a defined period?',
      'What monitoring and distribution cost sits with which accounts?',
      'Summarise scope, capacity and coverage.',
    ],
  },

  automationHeading: 'Scope and capacity.',
  automationLede: 'Each runs from the agency’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Effort passes retainer scope', steps: ['Account flagged with effort against scope', 'Scope conversation assigned to the account lead', 'Decision recorded — charged or absorbed'] },
    { trigger: 'A crisis is activated', steps: ['Senior capacity impact calculated', 'Affected retained accounts flagged', 'Fee basis agreed and recorded'] },
    { trigger: 'Coverage appears', steps: ['Linked to the pitch and journalist', 'Aggregated by angle and outlet', 'Added to the account’s reporting record'] },
    { trigger: 'Relationship concentration exceeds threshold', steps: ['Accounts dependent on one consultant flagged', 'Introduction or handover plan assigned', 'Continuity tracked afterwards'] },
    { trigger: 'A reporting period closes', steps: ['Coverage, activity and effort assembled', 'Report generated from records', 'Issued and recorded against the account'] },
  ],

  intelligenceHeading: 'What the agency can see.',
  intelligenceLede: 'Scope, capacity and coverage from the work itself.',
  intelligence: [
    { area: 'Scope', points: ['Effort against retainer scope by account', 'Scope conversations raised against absorbed', 'Additional projects converted', 'Account profitability after effort'] },
    { area: 'Capacity', points: ['Senior time by account and crisis', 'Crisis impact on retained delivery', 'Utilisation by consultant', 'Accounts at risk from capacity draw'] },
    { area: 'Media', points: ['Interactions by journalist and outlet', 'Coverage by pitch, angle and outlet', 'Relationship concentration by consultant', 'Outlets not engaged recently'] },
    { area: 'Clients', points: ['Coverage and activity by account', 'Reporting issued and feedback', 'Retention and renewal', 'Pass-through cost by account'] },
  ],
  intelligenceNote: 'Verity records the agency’s work and relationships. Media monitoring tools continue as they are.',

  rolesHeading: 'One agency, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Managing partner', question: 'Which accounts are profitable and which are at risk?', focus: 'Effort against scope, profitability by account, capacity consumed by crisis, relationship concentration.' },
    { role: 'Account lead', question: 'Is my account within scope?', focus: 'Effort against retainer, coverage produced, client reporting, scope conversations due.' },
    { role: 'Consultant', question: 'Who am I pitching and what do they cover?', focus: 'Journalist history and interests, pitches outstanding, coverage recorded, effort to log.' },
  ],

  useCasesHeading: 'What PR agencies use Verity for',
  useCases: [
    { name: 'Retainer scope control', body: 'Effort recorded against agreed scope, so expansion raises a conversation mid-month rather than an absorption at the end of it.' },
    { name: 'Relationships as agency assets', body: 'Journalist contacts and interaction history held by the agency rather than by individuals, so a departure is a handover.' },
    { name: 'Crisis capacity visibility', body: 'Crisis effort recorded with its draw on senior time, making its effect on retained accounts attributable.' },
    { name: 'Coverage connected to pitching', body: 'Coverage linked to the pitch, journalist and angle that produced it, so the agency learns what works.' },
    { name: 'Reporting as an extract', body: 'Client reports generated from records rather than rebuilt monthly from monitoring tools and memory.' },
    { name: 'Account profitability', body: 'Effort at cost against fee, so the agency knows which accounts are worth keeping.' },
    { name: 'Asking about the month', body: 'Plain-language questions across scope, capacity, coverage and relationships, with conversations assigned in the same step.' },
  ],

  migration: 'Media monitoring and distribution tools continue and are mapped during implementation. Clients, retainers and scopes, media contacts with history, and live campaigns are brought across.',

  faqHeading: 'Questions PR agencies ask',
  faqs: [
    ['What can AI software do for a PR agency?', 'Verity AI answers questions from your own account, effort, media and coverage records: which accounts are over retainer scope, how much senior capacity crisis work consumed, which accounts depend on one consultant’s relationships, which pitches produced coverage. Each answer can become a scope conversation.'],
    ['Does Verity measure PR outcomes?', 'It records what the agency controls — pitching, interactions, responsiveness and effort — and links coverage to the work that produced it when it appears. It does not claim to measure the value of coverage, which is a judgement rather than a record.'],
    ['Why record effort against scope?', 'Because PR work expands to fill what a client asks for and the fee does not. Comparing effort against agreed scope mid-month is what makes the conversation possible while the month can still be shaped.'],
    ['How does it protect media relationships?', 'Journalists are agency records with interests, interaction history and coverage produced, so relationships are institutional rather than personal — which matters because three key accounts often rest on one consultant.'],
    ['Can it show what crisis work costs?', 'Crisis work is recorded with its effort and its draw on senior capacity, so the effect on retained accounts is attributable rather than experienced as everything slipping at once.'],
    ['Does it help with client reporting?', 'Coverage, activity and effort are already records, so a monthly report is an extract that takes minutes rather than a construction that takes a day.'],
    ['Does Verity replace monitoring tools?', 'No. Monitoring and distribution continue and are mapped during implementation. Verity holds the accounts, scope, effort, relationships and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of retainer scopes and media relationships, configuration, migration of accounts and contacts, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the accounts over scope.',
  ctaLede: 'They are usually the clients you like most. Tell us how effort is recorded today.',

  related: ['marketing-agencies', 'advertising-agencies', 'content-agencies', 'design-agencies', 'consulting-firms', 'startups'],
};
