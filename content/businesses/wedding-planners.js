export default {
  slug: 'wedding-planners',
  status: 'published',
  plural: 'wedding planners',
  subject: 'wedding planning business',

  seo: {
    title: 'AI business management software for wedding planners | Verity',
    description:
      'Verity connects client budgets against actuals, vendor bookings and payment milestones, scope changes and run-of-day coordination into one operational system.',
    keywords: [
      'AI software for wedding planners',
      'wedding planning management software',
      'event vendor coordination and payment tracking',
      'client budget versus actual tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for wedding planners',
    headline: 'Twenty vendors, one date, and a budget that has been agreed four times.',
    lede:
      'A planner’s product is coordination and a budget kept. Verity holds the vendor bookings, the payment milestones and every change to the budget against the event.',
    note: 'Runs alongside your existing accounting arrangement.',
    panel: {
      title: 'Events',
      meta: 'Next 90 days',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Events booked', value: '14', note: '₹9.6 Cr client budgets' },
        { label: 'Vendor payments due', value: '₹1.4 Cr', note: '31 milestones in 30 days' },
        { label: 'Budget variance', value: '4 events', note: 'above agreed budget' },
        { label: 'Unconfirmed vendors', value: '18', note: 'against booked dates' },
      ],
      rows: [
        { name: '18 vendors unconfirmed against events inside 60 days', meta: 'Four are on the same date', active: true },
        { name: '4 events running above the agreed client budget', meta: 'No change order signed on three', active: true },
        { name: '31 vendor payment milestones due within 30 days', meta: '₹1.4 Cr · client funds not all received', active: true },
        { name: 'Scope added by client without cost impact recorded', meta: '9 changes across 3 events', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own events in this shape.',
    },
  },

  overview: {
    heading: 'A planner is judged on a date they do not control and a budget they did not set.',
    paragraphs: [
      'Wedding planning is coordination as a product. The planner does not usually own the venue, the catering, the décor, the photography or the music — they book, sequence and pay a set of independent vendors so that everything arrives on one day that cannot move. The value is that the client does not have to hold twenty relationships and a hundred dependencies.',
      'The commercial risk is that the planner sits between the client’s money and the vendors’ payment schedules. Vendors want advances and milestone payments on their own terms; the client pays on theirs. A planner with one point four crore of vendor milestones due in a month and client funds not fully received is carrying a timing risk that nobody has quantified.',
      'The second is scope. Weddings change constantly, and every change is emotionally charged, verbal and rarely costed at the moment it is agreed. Nine changes across three events with no recorded cost impact is a budget conversation that will happen later, badly.',
      'The third is confirmation. A vendor who is verbally booked and not confirmed is not booked, and eighteen unconfirmed vendors against events inside sixty days is the planner’s real risk profile.',
      'The fourth is that the day itself is a sequence with dependencies, and the run of day exists as a document rather than as a set of owned steps.',
      'Verity holds the event, its budget, its vendors, its payment milestones and its changes as one record.',
    ],
  },

  terminology: [
    ['Events, functions, ceremonies', 'Work'],
    ['Clients, families, guests', 'Relationships'],
    ['Vendors, venues, artists', 'Suppliers'],
    ['Budgets, change orders, approvals', 'Workflows'],
    ['Contracts, moodboards, run sheets', 'Records'],
    ['Planners, coordinators, day staff', 'People'],
    ['Venues, sites, cities', 'Locations'],
  ],

  challengesHeading: 'Coordination fails where nobody wrote it down.',
  challengesLede:
    'Planning problems come from verbal agreements, unconfirmed vendors and a budget that moves without being restated.',
  challenges: [
    {
      problem: 'Vendors are verbally booked and not confirmed',
      detail:
        'A vendor is discussed, agreed and assumed. Whether they are actually contracted for the date is known only when someone checks.',
      outcome:
        'Vendor booking is a workflow with a confirmation state, so unconfirmed vendors against a date are visible as risk.',
    },
    {
      problem: 'Scope changes are agreed emotionally and costed later',
      detail:
        'A client adds an element in a conversation, the planner accommodates it, and the cost surfaces in a budget review weeks later.',
      outcome:
        'Changes are raised as change orders with cost impact at the moment they are agreed.',
    },
    {
      problem: 'Vendor payments and client receipts are unsynchronised',
      detail:
        'Vendors demand milestone payments on their schedule and clients pay on theirs, and the planner absorbs the timing gap.',
      outcome:
        'Both schedules sit on the event, so a funding gap is visible before it becomes the planner’s money.',
    },
    {
      problem: 'The budget is agreed several times',
      detail:
        'The original budget, the revised budget and the current spend exist in different documents and different conversations.',
      outcome:
        'One budget record with a change history, so what was agreed and when is unambiguous.',
    },
    {
      problem: 'Run of day exists as a document',
      detail:
        'The sequence for the day is a document that everyone has a different version of, with no owners against steps.',
      outcome:
        'The run of day is work with owners, times and dependencies, so a slip is visible as it happens.',
    },
    {
      problem: 'Vendor performance is never recorded',
      detail:
        'Planners recommend vendors from experience, and the experience is anecdotal rather than recorded across events.',
      outcome:
        'Vendors carry their delivery, punctuality and issue history across events.',
    },
  ],

  modulesLede:
    'One system across events, budgets, vendors and the day itself.',
  modules: [
    {
      id: 'work',
      title: 'Events, functions and the run of day',
      line:
        'Each event is work with a client, date, venue, functions, budget, vendor set, timeline and state.',
      why:
        'Everything the planner does hangs off the event, and it currently hangs off a folder.',
      example:
        'Fourteen events in ninety days with their vendor confirmation and budget position visible together.',
    },
    {
      id: 'workflows',
      title: 'Budgets, change orders and approvals',
      line:
        'The agreed budget, changes to it, vendor payment milestones and client receipts are defined steps with recorded decisions.',
      why:
        'Costing a change when it is agreed is the difference between a planner’s margin and a difficult conversation.',
      example:
        'Nine changes across three events with cost impact recorded and signed rather than absorbed.',
    },
    {
      id: 'suppliers',
      title: 'Vendors, venues and artists',
      line:
        'Vendors are relationships with their bookings, contracts, payment terms, delivery history, punctuality and issue record.',
      why:
        'The planner’s product is the vendor set, so vendor reliability is the product’s quality.',
      example:
        'Eighteen vendors unconfirmed against dates inside sixty days, four on the same day.',
    },
    {
      id: 'relationships',
      title: 'Clients and families',
      line:
        'Clients are records with their event, budget, preferences, decisions, communications and payment position.',
      why:
        'Weddings involve several decision-makers, and what was agreed with whom matters enormously.',
      example:
        'A decision recorded against the client with who agreed it and when.',
    },
    {
      id: 'records',
      title: 'Contracts, moodboards and run sheets',
      line:
        'Vendor contracts, design references and run sheets attach to the event they belong to with versions retained.',
      why:
        'Disputes on the day are settled by what the contract and the run sheet actually said.',
      example:
        'The signed vendor contract on the event record, referenced when delivery differs.',
    },
    {
      id: 'people',
      title: 'Planners, coordinators and day staff',
      line:
        'The team is modelled once, and every vendor booking, change order and run-of-day step shows who owns it.',
      why:
        'On the day, ownership of each step is the entire mechanism of coordination.',
      example:
        'Run-of-day steps with named owners rather than a document everyone has read differently.',
    },
    {
      id: 'intelligence',
      title: 'Budget, margin and vendor reporting',
      line:
        'Budget against actual per event, change order recovery, vendor payment against client receipts, vendor reliability and event margin come from the operational records.',
      why:
        'A planner needs to know which events made money and which vendor sets worked, and both are usually impressions.',
      example:
        'Margin by event type and size, so pricing reflects what events actually cost to deliver.',
    },
    {
      id: 'ai',
      title: 'Ask the event book a question',
      line:
        'Verity AI answers from your own event, vendor, budget and payment records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking are about confirmations missing and money moving in the wrong order.',
      example:
        '"Which vendors are unconfirmed against events inside sixty days?" returns eighteen with follow-ups assigned.',
    },
    {
      id: 'communication',
      title: 'What the client agreed and when',
      line:
        'Decisions, approvals and correspondence attach to the event or change they concern.',
      why:
        'Wedding decisions are made in conversations across several family members, and the record is the only version.',
      example:
        'A change agreed on a call, recorded with the person who agreed it.',
    },
    {
      id: 'control',
      title: 'Who can commit and approve spend',
      line:
        'One permission model and one audit trail, with vendor commitments and budget changes as recorded decisions.',
      why:
        'Coordinators commit client money to vendors, and that authority should be explicit.',
      example:
        'A vendor booking above threshold routed to the lead planner and recorded.',
    },
    {
      id: 'locations',
      title: 'Venues, sites and cities',
      line:
        'Venues and sites are locations with their own constraints, contacts and history.',
      why:
        'Venue constraints repeat across events, and the last event at the same venue is the best briefing for the next.',
      example:
        'Access and timing constraints from the previous event at the same venue.',
    },
  ],

  workflowsHeading: 'One date, twenty vendors, everything recorded.',
  workflowsLede:
    'These already happen. As records they stop depending on the planner’s memory on the day.',
  workflows: [
    {
      name: 'Brief to signed budget',
      steps: [
        'Client brief recorded with date, venue, scale and expectations',
        'Budget prepared against comparable past events and their actual costs',
        'Vendor set proposed with indicative costs',
        'Budget agreed and signed with the version retained',
        'Payment schedule agreed on both sides',
      ],
      note:
        'Quoting from what comparable events actually cost is the largest available improvement in planner margin.',
    },
    {
      name: 'Vendor booking and confirmation',
      steps: [
        'Vendor selected against the budget line and past performance',
        'Terms agreed and contract issued',
        'Confirmation tracked to signature and advance',
        'Unconfirmed vendors flagged against the event date',
        'Payment milestones created from the contract',
      ],
      note:
        'A verbally agreed vendor is not a booked vendor, and the difference is only visible if confirmation is a state.',
    },
    {
      name: 'Change order',
      steps: [
        'Change requested by the client and recorded with who asked',
        'Cost and feasibility impact assessed immediately',
        'Change order raised with the revised budget',
        'Client approval recorded',
        'Vendor instructions issued and the budget updated',
      ],
      note:
        'Costing at the moment of agreement is what prevents the budget being renegotiated at the end.',
    },
    {
      name: 'Payment synchronisation',
      steps: [
        'Vendor milestones and client receipts both scheduled on the event',
        'Funding position projected forward',
        'Gaps flagged before the planner has to bridge them',
        'Client reminders issued ahead of vendor deadlines',
        'Payments made and recorded against milestones',
      ],
      note:
        'The planner sits between two payment schedules, and only a projection shows when that becomes their problem.',
    },
    {
      name: 'Run of day',
      steps: [
        'Sequence built with times, dependencies and owners',
        'Vendor arrival and setup windows confirmed',
        'Steps marked as they complete on the day',
        'Slips flagged against dependent steps',
        'Issues recorded against vendors for later review',
      ],
      note:
        'A step with an owner and a time is coordination; a document everyone has read is hope.',
    },
    {
      name: 'Event closure and review',
      steps: [
        'Final costs reconciled against the budget',
        'Change order recovery reviewed',
        'Vendor performance and issues recorded',
        'Margin calculated for the event',
        'Learnings recorded against venue and vendor records',
      ],
      note:
        'The next event is priced and staffed from this record rather than from memory.',
    },
  ],

  ai: {
    heading: 'Ask what is unconfirmed and what is unfunded.',
    lede:
      'Verity AI reads the same event, vendor, budget and payment records the business creates as it plans. It answers from your own event book, respects permissions, and can turn an answer into follow-ups.',
    panelMeta: 'Grounded in your event records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which vendors are unconfirmed against events inside sixty days?',
      'Which events are running above their agreed budget?',
      'Which vendor payment milestones fall due before the client funds arrive?',
      'Which changes were agreed without a recorded cost impact?',
      'What did comparable past events actually cost against what we quoted?',
      'Which vendors have the most recorded issues across events?',
      'Where do two events share a vendor on the same date?',
      'What is margin by event type and size?',
      'Summarise risk across the next ninety days.',
    ],
  },

  automationHeading: 'The confirmations and the cash.',
  automationLede:
    'Each runs from the event and vendor records at the point the condition is met.',
  automations: [
    {
      trigger: 'A vendor remains unconfirmed as the event approaches',
      steps: [
        'Vendor flagged against the event date and budget line',
        'Confirmation follow-up assigned',
        'Escalated to the lead planner as the date nears',
      ],
    },
    {
      trigger: 'A client requests a change',
      steps: [
        'Change recorded with who requested it',
        'Cost impact assessed and change order raised',
        'Approval tracked before vendor instructions are issued',
      ],
    },
    {
      trigger: 'A vendor milestone falls due before client funds arrive',
      steps: [
        'Funding gap flagged on the event',
        'Client reminder issued ahead of the vendor deadline',
        'Escalated if the gap remains',
      ],
    },
    {
      trigger: 'Event spend passes the agreed budget',
      steps: [
        'Event flagged with variance and its causes',
        'Change order or absorption decision raised',
        'Decision recorded against the event',
      ],
    },
    {
      trigger: 'A vendor is committed to overlapping events',
      steps: [
        'Conflict flagged with both events named',
        'Resolution assigned to the lead planner',
        'Outcome recorded against both events',
      ],
    },
    {
      trigger: 'An event completes',
      steps: [
        'Cost reconciliation task raised against the budget',
        'Vendor performance review assigned',
        'Margin recorded for future pricing',
      ],
    },
  ],

  intelligenceHeading: 'What the planner can actually see.',
  intelligenceLede:
    'Budget, confirmation and vendor performance from the event records themselves.',
  intelligence: [
    {
      area: 'Budget',
      points: [
        'Agreed budget against current commitment and spend',
        'Change orders raised, approved and absorbed',
        'Variance by category and event',
        'Margin by event type and size',
      ],
    },
    {
      area: 'Vendors',
      points: [
        'Confirmation status against event dates',
        'Delivery, punctuality and issues across events',
        'Payment milestones due and paid',
        'Conflicts across simultaneous events',
      ],
    },
    {
      area: 'Cash',
      points: [
        'Client receipts against schedule',
        'Vendor milestones against receipts',
        'Funding gaps projected forward',
        'Outstanding balances at event completion',
      ],
    },
    {
      area: 'Delivery',
      points: [
        'Run-of-day completion and slips',
        'Issues recorded on the day by vendor',
        'Venue constraints and history',
        'Client satisfaction and complaints recorded',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from records the planner creates while planning — bookings, changes, payments and the run of day.',

  rolesHeading: 'One event book, three different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Principal planner',
      question: 'What is at risk and what is it making?',
      focus: 'Unconfirmed vendors, budget variance, funding gaps, margin by event type.',
    },
    {
      role: 'Event coordinator',
      question: 'What is unconfirmed on my events?',
      focus: 'Vendor confirmations, change orders outstanding, payment milestones, run-of-day preparation.',
    },
    {
      role: 'Accounts',
      question: 'What is due and what has come in?',
      focus: 'Client receipts against schedule, vendor milestones due, funding gaps, balances at closure.',
    },
  ],

  useCasesHeading: 'What wedding planners use Verity for',
  useCases: [
    {
      name: 'Vendor confirmation tracking',
      body: 'Booking as a workflow with a confirmation state, so a verbally agreed vendor is visibly different from a contracted one.',
    },
    {
      name: 'Change orders at the moment of agreement',
      body: 'Client changes costed and raised when they are agreed rather than surfacing in a budget review weeks later.',
    },
    {
      name: 'Payment synchronisation',
      body: 'Vendor milestones and client receipts both on the event, so a funding gap is visible before it becomes the planner’s money.',
    },
    {
      name: 'One budget with a change history',
      body: 'The agreed budget, its revisions and current commitment on one record, so what was agreed and when is unambiguous.',
    },
    {
      name: 'Run of day with owners',
      body: 'The sequence as work with times, dependencies and named owners rather than a document with several versions.',
    },
    {
      name: 'Vendor performance across events',
      body: 'Delivery, punctuality and issues recorded per vendor, so recommendations rest on history rather than impression.',
    },
    {
      name: 'Event margin',
      body: 'Cost reconciled against budget per event, so pricing reflects what comparable events actually cost to deliver.',
    },
    {
      name: 'Asking about risk',
      body: 'Plain-language questions across confirmations, budgets, payments and conflicts, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your accounting arrangement continues to run and is mapped during implementation. Clients, booked events, vendors and their terms, budgets and payment schedules are brought across, and Verity is configured around how the business already plans.',

  faqHeading: 'Questions planners ask',
  faqs: [
    [
      'What can AI software do for a wedding planning business?',
      'Verity AI answers questions from your own event, vendor, budget and payment records: which vendors are unconfirmed against events inside sixty days, which events are above budget, which vendor milestones fall due before client funds arrive, which changes were agreed without a cost impact. Each answer can become a follow-up.',
    ],
    [
      'How is this different from event software for caterers?',
      'A caterer delivers with its own crew, stock and equipment. A planner coordinates other people’s vendors and manages a client’s budget, so the record has to be the vendor set, the confirmation state, the payment schedules on both sides and every change to the budget.',
    ],
    [
      'How does it handle scope changes?',
      'A change is recorded with who requested it, costed immediately, and raised as a change order with the revised budget for client approval — which is what prevents the whole budget being renegotiated after the event.',
    ],
    [
      'Can it show funding gaps?',
      'Vendor payment milestones and client receipt schedules both sit on the event, so the position is projected forward and a gap is visible before the planner has to bridge it out of their own funds.',
    ],
    [
      'Does it track vendor reliability?',
      'Vendors carry their delivery, punctuality and issue history across every event, so recommendations and selection rest on a record rather than on the most recent memorable experience.',
    ],
    [
      'Can it manage the run of day?',
      'The sequence is work with times, dependencies and named owners, and steps are marked as they complete, so a slip is visible against the steps that depend on it rather than discovered downstream.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Accounting continues and is mapped during implementation. Verity holds the events, budgets, vendors, confirmations, payment schedules and the reporting across them.',
    ],
    [
      'Is it suitable for a small planning business?',
      'A planner running fourteen events a year still coordinates hundreds of vendor commitments and payment milestones, and carries the timing risk between two payment schedules on every one.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how events are quoted and coordinated, configuration of budget categories and vendor terms, migration of booked events and vendors, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with what is unconfirmed.',
  ctaLede:
    'Verbally booked vendors on dates inside two months are the planner’s real risk. Tell us how confirmations are tracked today.',

  related: ['catering-businesses', 'event-venues', 'photographers', 'hotels', 'marketing-agencies', 'travel-agencies'],
};
