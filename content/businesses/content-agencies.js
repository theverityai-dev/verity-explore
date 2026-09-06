export default {
  slug: 'content-agencies',
  status: 'published',
  plural: 'content agencies',
  subject: 'content agency',

  seo: {
    title: 'AI business management software for content agencies | Verity',
    description:
      'Verity connects the production pipeline, creator capacity, revision rounds against allowance, publishing calendar commitments and client approvals into one system.',
    keywords: [
      'AI software for content agencies',
      'content agency production management',
      'editorial calendar and revision round tracking',
      'freelance creator capacity and cost software',
    ],
  },

  hero: {
    eyebrow: 'Verity for content agencies',
    headline: 'You sold twelve pieces a month at two revisions each. You are delivering four.',
    lede:
      'Content agencies are throughput businesses, and revision rounds are where the throughput goes. Verity counts the rounds against what was contracted.',
    note: 'Verity runs the agency. Publishing platforms stay where they are.',
    panel: {
      title: 'Production',
      meta: 'All clients · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Pieces committed', value: '186', note: 'across 14 clients' },
        { label: 'Delivered on calendar', value: '71%', note: 'against publish dates' },
        { label: 'Rounds over allowance', value: '48 pieces', note: 'unbilled revision effort' },
        { label: 'Awaiting client input', value: '39', note: 'briefs and approvals' },
      ],
      rows: [
        { name: '48 pieces past their agreed revision allowance', meta: 'Roughly 190 unbilled hours', active: true },
        { name: '39 pieces blocked on client brief or approval', meta: 'Publish dates in 11 days', active: true },
        { name: 'Two freelancers at capacity while three are unassigned', meta: 'Same skill, different availability', active: true },
        { name: 'Client calendar committed beyond production capacity', meta: 'Next month · 24 pieces over', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own production in this shape.',
    },
  },

  overview: {
    heading: 'Content is a throughput business measured in pieces and destroyed by rounds.',
    paragraphs: [
      'A content agency commits to a volume — pieces per month, a publishing calendar, a set of formats — at a price that assumes a certain amount of work per piece. The commercial model works if pieces move through the pipeline at roughly the assumed effort. It fails when they do not, and the usual reason is revision rounds.',
      'Contracts specify a revision allowance and nobody counts. A fourth round happens because the client asked and the piece needs to publish, and the effort is absorbed. Forty-eight pieces past allowance is roughly a hundred and ninety unbilled hours, which on a content agency’s margin is most of a month.',
      'The second problem is client dependency. Content cannot be produced without a brief and cannot publish without approval, so a large share of the pipeline sits blocked on the client while the publish date approaches and the agency is blamed for the delay.',
      'The third is creator capacity. Agencies use a mix of staff and freelancers with different skills and availability, and assignment is done by whoever the editor thinks of. Two freelancers at capacity while three with the same skill are unassigned is a matching failure that looks like a capacity shortage.',
      'The fourth is that publishing calendars get committed in a sales conversation without checking whether the pipeline can produce them.',
      'Verity records the piece, its rounds, its blockers, its creator and the calendar it belongs to.',
    ],
  },

  terminology: [
    ['Pieces, formats, campaigns', 'Work'],
    ['Clients, editors, stakeholders', 'Relationships'],
    ['Briefs, drafts, revisions, approvals', 'Workflows'],
    ['Writers, editors, designers, freelancers', 'People'],
    ['Publishing calendars, deadlines', 'Records'],
    ['Freelancers, production partners', 'Suppliers'],
    ['Teams, practices, clients', 'Locations'],
  ],

  challengesHeading: 'Throughput lost to rounds and to waiting.',
  challengesLede:
    'Content agency difficulties come from unbounded revisions and a pipeline that stalls on the client.',
  challenges: [
    {
      problem: 'Revision rounds exceed allowance uncounted',
      detail:
        'The contract allows two rounds. A fourth happens because the piece must publish, and the effort is absorbed silently.',
      outcome:
        'Rounds are counted against the agreed allowance per piece, so exceeding it raises a decision rather than a cost.',
    },
    {
      problem: 'The pipeline stalls on the client',
      detail:
        'Briefs and approvals sit with the client while the publish date approaches, and the delay is attributed to the agency.',
      outcome:
        'Client-side steps are tracked with an age, so blocked pieces are visible and chaseable with the date attached.',
    },
    {
      problem: 'Creator assignment is by recall',
      detail:
        'Editors assign to the writers they think of, so some are overloaded while equally capable people are idle.',
      outcome:
        'Creators carry skills, availability and current load, so assignment is matched rather than remembered.',
    },
    {
      problem: 'Calendars are committed beyond capacity',
      detail:
        'A publishing calendar is agreed in a sales conversation without checking whether production can deliver it.',
      outcome:
        'Committed pieces are aggregated against production capacity by period, so overcommitment surfaces before it is agreed.',
    },
    {
      problem: 'Freelance cost is not attributed to the client',
      detail:
        'External creators are paid per piece and the cost is absorbed into a general production budget.',
      outcome:
        'Freelance cost is recorded against the piece and client, so true delivery cost per account is known.',
    },
    {
      problem: 'Quality feedback is not connected to creators',
      detail:
        'Heavy editing and repeated revision are experienced by editors and never recorded against the creator producing them.',
      outcome:
        'Rounds and editing effort attach to the creator, so briefing or matching problems become visible.',
    },
  ],

  modulesLede:
    'One system across the pipeline, the calendar, creators and clients.',
  modules: [
    {
      id: 'work',
      title: 'Pieces, formats and campaigns',
      line:
        'Each piece is work with a client, format, brief, assigned creator, publish date, revision rounds and a state.',
      why:
        'The piece is the unit of throughput and the unit of cost, and rounds are what change the second.',
      example:
        'Forty-eight pieces past their revision allowance, quantified in unbilled hours.',
    },
    {
      id: 'workflows',
      title: 'Briefs, drafts, revisions and approvals',
      line:
        'Each stage is a defined step with an owner — internal or client — an age and a state, with rounds counted against allowance.',
      why:
        'Both of the agency’s throughput problems live here: uncounted rounds and unchased client steps.',
      example:
        'Thirty-nine pieces blocked on client input with publish dates inside eleven days.',
    },
    {
      id: 'people',
      title: 'Writers, editors, designers and freelancers',
      line:
        'Creators are records with their formats, skills, availability, current load, cost and quality history.',
      why:
        'Capacity is the constraint and assignment is usually done from memory rather than from availability.',
      example:
        'Two freelancers at capacity while three with the same skill are unassigned.',
    },
    {
      id: 'records',
      title: 'Publishing calendars and deadlines',
      line:
        'Calendars are records with committed pieces, formats, publish dates and their production state.',
      why:
        'The calendar is the client’s expectation, and it is usually a spreadsheet nobody reconciles with production.',
      example:
        'Next month committed twenty-four pieces beyond production capacity.',
    },
    {
      id: 'relationships',
      title: 'Clients, editors and stakeholders',
      line:
        'Clients are records with their contracts, revision allowances, calendars, approval behaviour and balances.',
      why:
        'Approval speed and revision behaviour are the two client facts that most affect agency margin.',
      example:
        'A client averaging four rounds against a two-round allowance, visible before renewal.',
    },
    {
      id: 'suppliers',
      title: 'Freelancers and production partners',
      line:
        'External creators are relationships with their rates, assignments, delivery reliability and quality history.',
      why:
        'Freelance cost is a direct per-piece cost that should be attributable to the client it served.',
      example:
        'Freelance cost per piece by client, so account profitability includes it.',
    },
    {
      id: 'intelligence',
      title: 'Throughput, rounds and margin reporting',
      line:
        'Pieces delivered against committed, revision rounds against allowance, client blocking time, creator load and cost per piece come from the operational records.',
      why:
        'A throughput business needs throughput reporting, and content agencies usually report revenue and publish dates.',
      example:
        'Cost per piece by client after rounds and freelance cost, which reorders account profitability.',
    },
    {
      id: 'ai',
      title: 'Ask the pipeline a question',
      line:
        'Verity AI answers from your own piece, round, creator and calendar records, respects permissions, and can create assigned follow-ups.',
      why:
        'The valuable questions are about rounds consumed and pieces waiting on someone else.',
      example:
        '"Which pieces are past their revision allowance?" returns forty-eight with the effort quantified.',
    },
    {
      id: 'communication',
      title: 'Feedback attached to the piece',
      line:
        'Briefs, comments, feedback and approvals attach to the piece they concern.',
      why:
        'Feedback scattered across email and documents is the reason a fourth round happens.',
      example:
        'All feedback on a piece in one place, so the revision addresses it once.',
    },
    {
      id: 'control',
      title: 'Allowance, rates and approvals',
      line:
        'One permission model and one audit trail, with additional rounds, rate exceptions and absorbed effort recorded.',
      why:
        'The decision to absorb an extra round is the one that decides agency margin, and it is made by editors under deadline.',
      example:
        'An additional round approved with its cost recorded against the client.',
    },
    {
      id: 'locations',
      title: 'Teams and practices',
      line:
        'Teams roll into the agency, with pieces, creators and reporting following the same structure.',
      why:
        'Throughput and round consumption vary by team and format.',
      example:
        'Rounds per piece by team and format.',
    },
  ],

  workflowsHeading: 'Brief, draft, revise, publish.',
  workflowsLede:
    'These already happen. Counted, they stop consuming the margin invisibly.',
  workflows: [
    {
      name: 'Calendar commitment',
      steps: [
        'Client calendar agreed with pieces, formats and publish dates',
        'Production capacity checked for the period',
        'Creator availability matched to formats',
        'Commitment confirmed or renegotiated before signing',
        'Pieces created against the calendar',
      ],
      note:
        'Checking capacity before agreeing a calendar is the step that prevents a quarter of chronic lateness.',
    },
    {
      name: 'Brief to first draft',
      steps: [
        'Brief requested from the client with a due date',
        'Brief received and recorded against the piece',
        'Creator assigned by format, skill and availability',
        'Draft produced and submitted for internal review',
        'Internal edit completed before client submission',
      ],
      note:
        'Internal review before client submission is what keeps the first client round from becoming the third.',
    },
    {
      name: 'Revision rounds',
      steps: [
        'Piece submitted to the client with the round counted',
        'Feedback received and attached to the piece',
        'Revision produced and resubmitted',
        'Round count compared against the agreed allowance',
        'Additional rounds raised as a decision — charged or absorbed',
      ],
      note:
        'Counting the round is the entire mechanism. Everything else follows from having the number.',
    },
    {
      name: 'Client blocking',
      steps: [
        'Client-side steps identified — brief, feedback, approval',
        'Age tracked against the publish date',
        'Reminder issued and recorded',
        'Publish date risk communicated with the blocker named',
        'Date revised or escalated with the record attached',
      ],
      note:
        'Naming the blocker before the date passes is what stops the agency absorbing the reputation cost.',
    },
    {
      name: 'Creator assignment and cost',
      steps: [
        'Creator matched by format, skill and current load',
        'Rate and expected effort recorded',
        'Delivery and rounds recorded against the creator',
        'Freelance cost attributed to the piece and client',
        'Quality and reliability history updated',
      ],
      note:
        'Attributing freelance cost to the client is what makes account profitability real.',
    },
    {
      name: 'Account review',
      steps: [
        'Pieces delivered against committed for the period',
        'Rounds consumed against allowance',
        'Client blocking time aggregated',
        'Cost per piece calculated including freelance cost',
        'Renewal or scope conversation prepared with the evidence',
      ],
      note:
        'A client averaging twice their allowance is a renewal conversation, not a service failure.',
    },
  ],

  ai: {
    heading: 'Ask where the throughput went.',
    lede:
      'Verity AI reads the same piece, round, creator and calendar records the agency creates as it produces. It answers from your own pipeline, respects permissions, and can turn an answer into chases and reassignments.',
    panelMeta: 'Grounded in your production records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which pieces are past their agreed revision allowance?',
      'Which pieces are blocked on client brief or approval?',
      'Is next month’s calendar within production capacity?',
      'Which creators are at capacity and which are unassigned?',
      'What is cost per piece by client including freelance cost?',
      'Which clients consume the most revision rounds?',
      'How much of our delay time is client-side?',
      'Which formats take the most rounds to approve?',
      'Summarise throughput against commitments.',
    ],
  },

  automationHeading: 'The rounds and the waiting.',
  automationLede:
    'Each runs from the production records at the point the condition is met.',
  automations: [
    {
      trigger: 'A revision round is submitted',
      steps: [
        'Round counted against the client’s allowance',
        'Overage flagged with effort quantified',
        'Charge or absorb decision raised',
      ],
    },
    {
      trigger: 'A piece waits on client input',
      steps: [
        'Age tracked against the publish date',
        'Reminder issued and recorded',
        'Publish risk communicated with the blocker named',
      ],
    },
    {
      trigger: 'A calendar is committed',
      steps: [
        'Committed pieces aggregated against capacity for the period',
        'Overcommitment flagged before signing',
        'Capacity or scope decision raised',
      ],
    },
    {
      trigger: 'A piece needs assignment',
      steps: [
        'Creators matched by format, skill and current load',
        'Assignment proposed rather than recalled',
        'Load updated on acceptance',
      ],
    },
    {
      trigger: 'A publish date approaches with the piece unapproved',
      steps: [
        'Piece flagged with its current state and blocker',
        'Escalation raised to the account owner',
        'Outcome recorded against the calendar',
      ],
    },
    {
      trigger: 'A period closes',
      steps: [
        'Delivered against committed calculated per client',
        'Rounds and freelance cost aggregated',
        'Account review prepared with the evidence',
      ],
    },
  ],

  intelligenceHeading: 'What the agency can actually see.',
  intelligenceLede:
    'Throughput and its consumption, from the pipeline records themselves.',
  intelligence: [
    {
      area: 'Throughput',
      points: [
        'Pieces delivered against committed by client',
        'On-calendar delivery rate',
        'Cycle time from brief to publish',
        'Throughput by team and format',
      ],
    },
    {
      area: 'Rounds',
      points: [
        'Rounds per piece against allowance',
        'Overage effort by client and format',
        'Rounds charged against absorbed',
        'Rounds by creator and by editor',
      ],
    },
    {
      area: 'Client dependency',
      points: [
        'Time waiting on briefs, feedback and approvals',
        'Blocked pieces against publish dates',
        'Client approval speed by account',
        'Delay attribution between agency and client',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Creator load and availability by format',
        'Committed calendar against capacity',
        'Unassigned capacity alongside overloaded creators',
        'Freelance dependency by client',
      ],
    },
    {
      area: 'Margin',
      points: [
        'Cost per piece including freelance and revision effort',
        'Account profitability after rounds',
        'Rate realisation by format',
        'Effect of absorbed rounds on margin',
      ],
    },
  ],
  intelligenceNote:
    'Verity records production and commercial data. Publishing platforms, content tools and analytics continue as they are.',

  rolesHeading: 'One pipeline, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Founder',
      question: 'Which accounts are actually profitable?',
      focus: 'Cost per piece including rounds and freelance, rounds against allowance by client, throughput against commitments.',
    },
    {
      role: 'Editorial lead',
      question: 'What is stuck and who is free?',
      focus: 'Pieces blocked on client input, rounds over allowance, creator load and availability, publish dates at risk.',
    },
    {
      role: 'Account manager',
      question: 'Are we delivering what we sold?',
      focus: 'Delivered against committed, client blocking time, rounds consumed, renewal evidence.',
    },
    {
      role: 'Creator',
      question: 'What am I writing and what is the brief?',
      focus: 'Assigned pieces with briefs and deadlines, feedback to address, round count, submissions due.',
    },
  ],

  useCasesHeading: 'What content agencies use Verity for',
  useCases: [
    {
      name: 'Revision round counting',
      body: 'Rounds counted against the contracted allowance per piece, so exceeding it raises a decision rather than silently consuming the margin.',
    },
    {
      name: 'Client blocking visibility',
      body: 'Briefs, feedback and approvals tracked with an age against the publish date, so the agency is not blamed for a delay it did not cause.',
    },
    {
      name: 'Capacity-checked calendars',
      body: 'Committed pieces aggregated against production capacity, so a calendar is agreed against what can be produced.',
    },
    {
      name: 'Creator matching',
      body: 'Skills, availability and current load recorded, so assignment is matched rather than recalled and idle capacity is used.',
    },
    {
      name: 'Freelance cost attribution',
      body: 'External creator cost recorded against the piece and client, making account profitability real.',
    },
    {
      name: 'Feedback in one place',
      body: 'All feedback attached to the piece, so a revision addresses it once rather than generating another round.',
    },
    {
      name: 'Account evidence for renewal',
      body: 'Delivered against committed, rounds consumed and blocking time, which turns a difficult renewal into a conversation with numbers.',
    },
    {
      name: 'Asking about the pipeline',
      body: 'Plain-language questions across pieces, rounds, capacity and clients, with chases assigned in the same step.',
    },
  ],

  migration:
    'Publishing platforms, content tools and analytics continue to run and are mapped during implementation. Clients, calendars, contracted allowances, creators and pieces in progress are brought across, and Verity is introduced as the production and commercial layer.',

  faqHeading: 'Questions content agencies ask',
  faqs: [
    [
      'What can AI software do for a content agency?',
      'Verity AI answers questions from your own piece, round, creator and calendar records: which pieces are past their revision allowance, which are blocked on client input, whether next month’s calendar is within capacity, which creators are at capacity while others are unassigned. Each answer can become a chase or a reassignment.',
    ],
    [
      'Why count revision rounds?',
      'Rounds are where content agency margin goes. A contract allows two and a fourth happens because the piece must publish, and the effort is absorbed. Counting the round against the allowance turns a silent cost into a decision — charge it or absorb it deliberately.',
    ],
    [
      'How does it help when the client causes the delay?',
      'Client-side steps — brief, feedback, approval — are tracked with an age against the publish date, so a piece blocked for eleven days is visible with the blocker named. Without that record the agency absorbs the reputation cost for a delay it did not cause.',
    ],
    [
      'Can it prevent overcommitted calendars?',
      'Committed pieces are aggregated against production capacity for the period, so a calendar agreed in a sales conversation is checked against what the pipeline can actually produce before it is signed.',
    ],
    [
      'Does it help with creator assignment?',
      'Creators carry their formats, skills, availability and current load, so assignment is matched rather than done from memory — which is why some writers are overloaded while equally capable ones are idle.',
    ],
    [
      'Can it show account profitability?',
      'Cost per piece includes freelance cost and revision effort attributed to the client that consumed them, which frequently reorders which accounts are worth keeping.',
    ],
    [
      'Does Verity replace our publishing tools?',
      'No. Publishing platforms, content tools and analytics continue and are mapped during implementation. Verity holds the pipeline, the rounds, the capacity, the calendars and the commercial reporting.',
    ],
    [
      'Is it suitable for a small agency using freelancers?',
      'A small agency is more exposed to both problems: an absorbed extra round is a larger share of its margin, and freelance cost is most of its delivery cost.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the production pipeline and contract terms, configuration of formats and allowances, migration of clients, calendars and pieces in progress, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start by counting the rounds.',
  ctaLede:
    'It is where content agency margin goes and almost nobody has the number. Tell us how production is tracked today.',

  related: ['marketing-agencies', 'design-agencies', 'pr-agencies', 'software-agencies', 'photographers', 'saas-companies'],
};
