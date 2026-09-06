export default {
  slug: 'ca-firms',
  status: 'published',
  plural: 'CA firms',
  subject: 'CA firm',

  seo: {
    title: 'AI business management software for CA firms | Verity',
    description:
      'Verity tracks statutory obligations per registration, audit fieldwork, notice and assessment deadlines, and article allocation across a CA firm’s client base.',
    keywords: [
      'AI software for CA firms',
      'chartered accountant practice management software',
      'statutory compliance tracking for CA firms',
      'audit engagement and article allocation software',
    ],
  },

  hero: {
    eyebrow: 'Verity for CA firms',
    headline: 'Ninety clients, four hundred registrations, and a penalty attached to every date.',
    lede:
      'A CA firm’s exposure is not one calendar but one per registration per client. Verity tracks obligations at that level, alongside the audits and the notices that arrive without warning.',
    note: 'Verity runs the practice. Filing and audit software stays where it is.',
    panel: {
      title: 'Compliance',
      meta: 'All clients · Next 30 days',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Obligations due', value: '212', note: 'across 96 clients' },
        { label: 'Not started', value: '38', note: 'inside 15 days' },
        { label: 'Open notices', value: '14', note: '3 with hearing dates' },
        { label: 'Audits in fieldwork', value: '9', note: '2 behind schedule' },
      ],
      rows: [
        { name: '38 obligations due within 15 days not started', meta: 'Records outstanding on 21 of them', active: true },
        { name: '3 notices with hearing dates and no owner assigned', meta: 'Earliest in 9 days', active: true },
        { name: 'Two audits behind fieldwork schedule', meta: 'Articles allocated elsewhere', active: true },
        { name: 'Registration added for a client, not in the calendar', meta: 'First obligation already due', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'The unit of risk is the registration, not the client.',
    paragraphs: [
      'A CA firm does not have ninety compliance calendars for ninety clients. It has one per registration per client — and a single client group can carry several entities, each with several registrations, each generating its own periodic obligations with its own dates and its own penalties for missing them. The firm’s real exposure is the total of those, and most practices track it in a spreadsheet that one person maintains.',
      'That structure creates a specific and dangerous failure. A client adds a registration, or an entity, or crosses a threshold that creates a new obligation, and it never enters the calendar. Nothing is late until suddenly something is, and the firm carries the consequence alongside the client.',
      'The second distinctive pressure is that not all work is scheduled. Notices, queries and assessments arrive without warning, carry their own hard dates, and demand senior attention immediately — pulling exactly the people the scheduled work depends on. A firm planning only its known calendar is planning about seventy percent of its year.',
      'The third is audit. An audit engagement is fieldwork with a team, a location, a timetable and a completion date, and it competes for the same articles and managers as the compliance work. Allocation decisions made for one silently damage the other.',
      'Verity tracks obligations at registration level, treats notices as work with their own dates, and holds audit allocation against the same people, so the whole exposure is in one place.',
    ],
  },

  terminology: [
    ['Entities, registrations, obligations', 'Records'],
    ['Filings, audits, certifications', 'Work'],
    ['Notices, queries, assessments', 'Workflows'],
    ['Clients, groups, promoters', 'Relationships'],
    ['Partners, managers, articles', 'People'],
    ['Fieldwork sites, client premises', 'Locations'],
    ['Sign-off, UDIN, review', 'Control'],
  ],

  challengesHeading: 'The exposure is bigger than the client list suggests.',
  challengesLede:
    'A CA firm’s difficulties come from tracking obligations at the wrong level and from work that arrives unscheduled.',
  challenges: [
    {
      problem: 'Obligations are tracked per client, not per registration',
      detail:
        'A client with three entities and eleven registrations appears as one row, so an obligation belonging to one registration can be missed entirely.',
      outcome:
        'Obligations are generated per registration, so the firm’s exposure is counted at the level the penalty applies.',
    },
    {
      problem: 'New registrations never enter the calendar',
      detail:
        'A client registers for something new or crosses a threshold, and the resulting obligation exists in law before it exists in the firm’s spreadsheet.',
      outcome:
        'Registrations are records on the entity, and adding one generates its obligations into the calendar automatically.',
    },
    {
      problem: 'Notices consume the people the calendar depends on',
      detail:
        'An assessment notice arrives with a hard date and pulls a partner and a manager off scheduled work for a fortnight, which nobody planned for.',
      outcome:
        'Notices are work with dates and owners, visible in the same capacity view as the scheduled calendar.',
    },
    {
      problem: 'Audit allocation collides with compliance peaks',
      detail:
        'Articles are allocated to fieldwork during a period when filing obligations peak, and both slip.',
      outcome:
        'Audit fieldwork and compliance obligations draw on one modelled capacity, so the conflict is visible before it is made.',
    },
    {
      problem: 'Client records arrive too late to work with',
      detail:
        'The work cannot start until the client provides records, and the request is chased personally with no visibility of how long it has been outstanding.',
      outcome:
        'Outstanding records are items on the obligation with an age, escalating against the start-by date rather than the due date.',
    },
    {
      problem: 'Sign-off and review are the hidden bottleneck',
      detail:
        'Completed work waits on partner review during exactly the period the partner is handling notices.',
      outcome:
        'Review and sign-off are workflow steps with owners and ageing, so the constraint is measurable.',
    },
  ],

  modulesLede:
    'One system across registrations, obligations, audits, notices and the people who deliver them.',
  modules: [
    {
      id: 'records',
      title: 'Clients, entities and registrations',
      line:
        'Each client carries its entities, and each entity its registrations, with the obligations that follow from them.',
      why:
        'This hierarchy is the firm’s actual risk model, and it is usually collapsed into a single client row.',
      example:
        'Ninety-six clients producing four hundred registrations, each generating obligations on its own cycle.',
    },
    {
      id: 'work',
      title: 'Filings, audits and certifications',
      line:
        'Every obligation and engagement is work with a deadline, a start-by date, an owner, a state and recorded effort.',
      why:
        'Scheduled and unscheduled work compete for the same people, and only one of them is usually in a system.',
      example:
        'Two hundred and twelve obligations due in thirty days alongside nine audits in fieldwork.',
    },
    {
      id: 'workflows',
      title: 'Notices, queries and assessments',
      line:
        'Unscheduled matters are workflow with their own dates, owners, escalation and document trail.',
      why:
        'Notices carry hard dates and senior time, and a firm that does not plan them is planning most of its year.',
      example:
        'Three notices with hearing dates and no owner, surfaced nine days ahead rather than the week before.',
    },
    {
      id: 'people',
      title: 'Partners, managers and articles',
      line:
        'The team is modelled once with availability, and every obligation, audit and notice shows who owns it.',
      why:
        'Articles are a constrained, rotating resource and their allocation determines whether both audit and compliance land.',
      example:
        'Article allocation across fieldwork and compliance, so a conflict is visible before it is committed.',
    },
    {
      id: 'relationships',
      title: 'Clients, groups and promoters',
      line:
        'Clients are records with their entities, obligations, responsiveness, fee basis, notices and balances.',
      why:
        'A group is one commercial relationship and many compliance exposures, and both views are needed.',
      example:
        'A group whose entities collectively generate forty obligations a year, with recovery measured across them.',
    },
    {
      id: 'control',
      title: 'Review, sign-off and access',
      line:
        'One permission model and one audit trail, with review and sign-off as recorded steps.',
      why:
        'Professional sign-off carries personal liability, and it should be a record rather than a signature at the end of a rush.',
      example:
        'Every sign-off carries the reviewer, the working papers referenced and the time.',
    },
    {
      id: 'intelligence',
      title: 'Exposure, capacity and recovery reporting',
      line:
        'Obligation coverage, deadline compliance, notice load, audit progress, capacity against calendar and recovery come from the operational records.',
      why:
        'The number a CA firm most needs — total obligations against capacity in the coming quarter — cannot be produced from a client list.',
      example:
        'Committed obligation hours against team availability, including expected notice load.',
    },
    {
      id: 'ai',
      title: 'Ask the practice a question',
      line:
        'Verity AI answers from your own registration, obligation, audit and notice records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking cross registration, date and person at once, which no spreadsheet answers quickly.',
      example:
        '"Which obligations due inside fifteen days have not started?" returns thirty-eight, with records chases raised.',
    },
    {
      id: 'communication',
      title: 'Client correspondence on the obligation',
      line:
        'Requests, reminders, responses and notice correspondence attach to the obligation or matter they concern.',
      why:
        'Correspondence with a client about a specific registration is evidence, and it should not live in one person’s inbox.',
      example:
        'The client’s response about a registration change, on the obligation it affects.',
    },
    {
      id: 'locations',
      title: 'Offices and fieldwork sites',
      line:
        'Offices and client premises are locations, with work, allocation and reporting following the same structure.',
      why:
        'Audit fieldwork happens away from the office and consumes the same people the office needs.',
      example:
        'Articles allocated to fieldwork sites, visible against the office’s compliance load.',
    },
  ],

  workflowsHeading: 'Scheduled and unscheduled work, in one view.',
  workflowsLede:
    'These already run. As records at registration level, the firm’s real exposure becomes visible.',
  workflows: [
    {
      name: 'Registration to obligation calendar',
      steps: [
        'Entity and registration recorded against the client',
        'Applicable obligations and their cycles generated',
        'Owners assigned from the client team',
        'Start-by dates derived from deadlines and expected effort',
        'Calendar exposure updated across the firm',
      ],
      note:
        'This closes the most dangerous gap in a CA practice: an obligation that exists in law and not in the calendar.',
    },
    {
      name: 'Periodic filing',
      steps: [
        'Obligation becomes due to start',
        'Records requested from the client with specific items',
        'Outstanding items aged against the start-by date',
        'Work performed and effort recorded',
        'Review and sign-off completed',
        'Filing confirmed and recorded against the registration',
      ],
      note:
        'Escalating against the start-by date rather than the due date is what prevents the last-week rush.',
    },
    {
      name: 'Notice or assessment',
      steps: [
        'Notice recorded against the client and registration',
        'Response deadline and any hearing date set',
        'Owner assigned and capacity impact noted',
        'Documents assembled and response prepared',
        'Submission or appearance recorded',
        'Outcome recorded against the client and registration',
      ],
      note:
        'Notices are the unscheduled load that breaks the schedule, and treating them as work is what makes them plannable.',
    },
    {
      name: 'Audit engagement',
      steps: [
        'Engagement recorded with scope, timetable and team',
        'Fieldwork scheduled against article and manager availability',
        'Working papers and queries tracked through fieldwork',
        'Review points raised and cleared',
        'Sign-off recorded and the report issued',
        'Effort compared against the fee',
      ],
      note:
        'Audit and compliance draw on the same people, which is why they belong in one capacity model.',
    },
    {
      name: 'Capacity against the quarter',
      steps: [
        'Obligations for the period pulled across all registrations',
        'Audit fieldwork commitments added',
        'Historical notice load applied as an expected allowance',
        'Total compared against team availability',
        'Resourcing or scheduling decisions raised ahead of the peak',
      ],
      note:
        'A firm planning only its known calendar is planning about seventy percent of its year.',
    },
    {
      name: 'Recovery and fee review',
      steps: [
        'Effort recorded against obligations and engagements',
        'Recovery calculated against agreed fees per client group',
        'Groups below threshold identified',
        'Repricing or scope conversation raised with the partner',
        'Decision recorded against the client',
      ],
      note:
        'Groups with many registrations and one negotiated fee are where recovery quietly fails.',
    },
  ],

  ai: {
    heading: 'Ask about exposure, not about clients.',
    lede:
      'Verity AI reads the same registration, obligation, audit and notice records the practice runs on. It answers from your own firm, respects permissions, and can turn an answer into chases and assignments.',
    panelMeta: 'Grounded in your compliance records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which obligations due inside fifteen days have not started?',
      'Which registrations have obligations with no owner assigned?',
      'Which notices have hearing dates in the next month?',
      'What is committed workload against capacity for the next quarter?',
      'Which clients have records outstanding past their start-by date?',
      'Which audits are behind their fieldwork schedule?',
      'Which client groups recover worst across all their registrations?',
      'Which registrations were added this year and are they in the calendar?',
      'Summarise deadline and notice exposure for the coming month.',
    ],
  },

  automationHeading: 'The dates that carry penalties.',
  automationLede:
    'Each runs from the registration and obligation records at the point the condition is met.',
  automations: [
    {
      trigger: 'A registration is added to an entity',
      steps: [
        'Applicable obligations generated with their cycles',
        'Owner assigned from the client team',
        'First deadline confirmed and the calendar updated',
      ],
    },
    {
      trigger: 'An obligation reaches its start-by date',
      steps: [
        'Job opened with records requested from the client',
        'Owner notified with the deadline attached',
        'Escalated if the job has not started',
      ],
    },
    {
      trigger: 'A notice is recorded',
      steps: [
        'Response and hearing dates set as workflow steps',
        'Owner assigned and capacity impact flagged',
        'Escalated to the partner as the date approaches',
      ],
    },
    {
      trigger: 'Records remain outstanding past the start-by date',
      steps: [
        'Reminder issued and recorded against the obligation',
        'Deadline risk flagged to the partner',
        'Client responsiveness updated on their record',
      ],
    },
    {
      trigger: 'Audit fieldwork falls behind schedule',
      steps: [
        'Engagement flagged with the stage and days behind',
        'Allocation conflict with compliance work surfaced',
        'Resourcing decision raised',
      ],
    },
    {
      trigger: 'Work waits on review or sign-off past threshold',
      steps: [
        'Review flagged with its age and reviewer',
        'Escalated with the deadline attached',
        'Queue reported by reviewer',
      ],
    },
  ],

  intelligenceHeading: 'What the partners can actually see.',
  intelligenceLede:
    'Exposure, capacity and recovery at registration level.',
  intelligence: [
    {
      area: 'Exposure',
      points: [
        'Obligations by registration, entity and period',
        'Obligations without an owner',
        'Registrations added and their calendar coverage',
        'Deadline compliance historically',
      ],
    },
    {
      area: 'Unscheduled work',
      points: [
        'Open notices, queries and assessments',
        'Hearing and response dates approaching',
        'Senior time consumed by unscheduled work',
        'Outcomes by type and client',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Obligation and audit hours against availability',
        'Article allocation across fieldwork and compliance',
        'Overload periods identified ahead',
        'Expected notice load from history',
      ],
    },
    {
      area: 'Delivery',
      points: [
        'Jobs not started against start-by dates',
        'Records outstanding by client and age',
        'Review and sign-off queues',
        'Audit progress against timetable',
      ],
    },
    {
      area: 'Recovery',
      points: [
        'Effort against fee by client group',
        'Recovery across registrations within a group',
        'Write-offs and their approvals',
        'Unbilled work by age',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds the practice records. Filing portals, audit tools and accounting software continue to hold the technical work.',

  rolesHeading: 'One firm, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Partner',
      question: 'What is our exposure and can we cover it?',
      focus: 'Obligations by period against capacity, notices with hard dates, audit progress, recovery by group.',
    },
    {
      role: 'Manager',
      question: 'What is not started and what is blocked?',
      focus: 'Obligations past start-by dates, records outstanding, review queue, fieldwork progress.',
    },
    {
      role: 'Article',
      question: 'What am I on this week?',
      focus: 'Assigned obligations and fieldwork, records received, review points to clear, effort to record.',
    },
    {
      role: 'Administrator',
      question: 'Is every registration in the calendar?',
      focus: 'Registrations against generated obligations, owners assigned, chases outstanding, filing confirmations.',
    },
  ],

  useCasesHeading: 'What CA firms use Verity for',
  useCases: [
    {
      name: 'Registration-level obligation tracking',
      body: 'Obligations generated per registration rather than per client, so exposure is counted at the level the penalty applies.',
    },
    {
      name: 'New registration coverage',
      body: 'Adding a registration generates its obligations into the calendar, closing the gap between a legal obligation and a tracked one.',
    },
    {
      name: 'Notice and assessment management',
      body: 'Unscheduled matters as work with response and hearing dates, visible in the same capacity view as the scheduled calendar.',
    },
    {
      name: 'Article allocation',
      body: 'Fieldwork and compliance drawing on one modelled capacity, so an allocation conflict is visible before it is committed.',
    },
    {
      name: 'Start-by escalation',
      body: 'Escalation against the date work should have begun rather than the date it is due, which is what prevents the last-week rush.',
    },
    {
      name: 'Audit engagement tracking',
      body: 'Scope, timetable, team, working papers, review points and sign-off on one engagement record.',
    },
    {
      name: 'Group recovery',
      body: 'Effort against fee measured across all registrations in a group, where a single negotiated fee usually hides poor recovery.',
    },
    {
      name: 'Asking about exposure',
      body: 'Plain-language questions across registrations, deadlines, notices and capacity, with chases assigned in the same step.',
    },
  ],

  migration:
    'Filing portals, audit tools and accounting software continue to run and are mapped during implementation. Clients, entities, registrations, recurring obligations and open matters are brought across, and Verity is introduced as the practice layer over them.',

  faqHeading: 'Questions CA firms ask',
  faqs: [
    [
      'Does Verity file returns or perform audits?',
      'No. Filing portals, audit tools and accounting software continue to do that and are mapped during implementation. Verity runs the practice around them — obligation tracking at registration level, record chasing, notice management, article allocation, review, capacity and recovery.',
    ],
    [
      'Why track obligations per registration rather than per client?',
      'Because that is where the exposure sits. A client group with several entities and many registrations appears as one row on a client list, and an obligation belonging to a single registration can be missed entirely. Verity generates obligations at registration level so the firm’s real exposure is counted.',
    ],
    [
      'What happens when a client adds a registration?',
      'Registrations are records on the entity, and adding one generates its applicable obligations into the calendar with an owner. That closes the most dangerous gap in a CA practice — an obligation that exists in law before it exists in the firm’s spreadsheet.',
    ],
    [
      'Can it handle notices and assessments?',
      'Notices are work with response deadlines, hearing dates, owners, documents and escalation, and they appear in the same capacity view as scheduled work — which matters because they consume exactly the senior time the calendar depends on.',
    ],
    [
      'Does it help with article allocation?',
      'Audit fieldwork and compliance obligations draw on one modelled capacity, so allocating articles to fieldwork during a filing peak surfaces as a conflict before it is committed rather than as two things slipping.',
    ],
    [
      'What can AI software do for a CA firm?',
      'Verity AI answers questions from your own registration, obligation, audit and notice records: which obligations due inside fifteen days have not started, which registrations have no owner, which notices have hearing dates next month, what committed workload looks like against capacity. Each answer can become a chase or an assignment.',
    ],
    [
      'Can we see recovery across a client group?',
      'Effort is recorded against every obligation and engagement, so recovery can be measured across all registrations in a group — which is where a single negotiated fee usually hides poor recovery.',
    ],
    [
      'Is it suitable for a small firm?',
      'A two-partner firm with ninety clients still carries several hundred registration-level obligations plus unscheduled notices, and has less capacity to absorb a miss.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the firm’s obligation structure, configuration of the registration-level calendar, migration of clients, entities and open matters, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the registrations that are not in the calendar.',
  ctaLede:
    'Most firms have some, and they are found the way nobody wants to find them. Tell us how obligations are tracked today.',

  related: ['accounting-firms', 'consulting-firms', 'law-firms', 'financial-advisors', 'insurance-agencies', 'it-services-companies'],
};
