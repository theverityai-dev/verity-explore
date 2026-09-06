export default {
  slug: 'coaching-institutes',
  status: 'published',
  plural: 'coaching institutes',
  subject: 'coaching institute',

  seo: {
    title: 'AI business management software for coaching institutes | Verity',
    description:
      'Verity connects batch fill rates and viability, faculty cost per batch, mid-course dropouts, instalment collection and enquiry conversion into one system.',
    keywords: [
      'AI software for coaching institutes',
      'coaching institute management software',
      'batch and faculty scheduling software',
      'student enrolment and fee instalment tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for coaching institutes',
    headline: 'A batch of eleven costs the same to run as a batch of forty.',
    lede:
      'Coaching economics are decided at enrolment and then fixed for the whole course. Verity makes batch viability, dropout and collection visible while the term can still respond.',
    note: 'Verity runs the institute. Teaching content and assessment stay where they are.',
    panel: {
      title: 'Institute',
      meta: 'Current session',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active batches', value: '24', note: '1,180 students' },
        { label: 'Below viability', value: '5', note: 'under 60% fill' },
        { label: 'Dropped mid-course', value: '46', note: '₹18 L exposure' },
        { label: 'Instalments overdue', value: '132', note: '₹24 L outstanding' },
      ],
      rows: [
        { name: '5 batches running below viable fill', meta: 'Faculty cost fixed · ₹9 L annualised', active: true },
        { name: '46 students stopped attending without formal withdrawal', meta: 'Fee position unresolved', active: true },
        { name: '132 instalments overdue past due date', meta: 'No follow-up recorded on 61', active: true },
        { name: 'Enquiries from the last campaign not contacted', meta: '84 enquiries · 9 days old', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own institute in this shape.',
    },
  },

  overview: {
    heading: 'The batch is the unit of economics, and it is fixed on the day it starts.',
    paragraphs: [
      'A coaching institute sells a course delivered to a batch over a fixed period. The faculty cost, the room and the schedule are essentially the same whether that batch has eleven students or forty, which means the entire profitability of the business is decided by fill rate at the moment enrolment closes — and cannot be changed afterwards.',
      'Most institutes therefore run some batches at a loss for a full session without ever quantifying it, because fill rate is tracked as a total enrolment figure rather than per batch against a viability threshold. Five under-filled batches carrying full faculty cost is a large annual number that nobody has calculated.',
      'The second characteristic loss is the silent dropout. A student stops attending and does not formally withdraw. Nobody records it, the fee position stays ambiguous, and the institute neither recovers the outstanding instalments nor releases the seat. In a business where the seat cannot be resold mid-course, the loss is the remaining instalments.',
      'The third is collection. Coaching fees are paid in instalments across a session, and the follow-up is manual, uncomfortable and inconsistent. Overdue instalments accumulate quietly against a cost base that is already committed.',
      'The fourth is enquiry conversion. Admission campaigns generate enquiries with a short window, and an enquiry not contacted within days is usually enrolled somewhere else.',
      'Verity holds the batch, its fill and viability, the student, the attendance signal, the instalment position and the enquiry as one set of records.',
    ],
  },

  terminology: [
    ['Courses, batches, sessions', 'Work'],
    ['Students, parents, enquiries', 'Relationships'],
    ['Faculty, coordinators, counsellors', 'People'],
    ['Fee plans, instalments, concessions', 'Workflows'],
    ['Enrolment forms, documents, agreements', 'Records'],
    ['Centres, classrooms, batches', 'Locations'],
    ['Attendance, tests, progress', 'Intelligence'],
  ],

  challengesHeading: 'The decisions are made early and the costs run all year.',
  challengesLede:
    'Coaching problems come from economics fixed at enrolment and from students who leave without saying so.',
  challenges: [
    {
      problem: 'Batch viability is never calculated',
      detail:
        'Enrolment is tracked as a total. A batch of eleven carrying full faculty and room cost is invisible inside a healthy overall number.',
      outcome:
        'Each batch carries its fill, its faculty cost and its viability threshold, so under-filled batches surface before the session starts.',
    },
    {
      problem: 'Students leave without withdrawing',
      detail:
        'Attendance stops, no withdrawal is recorded, and the outstanding instalments sit in an ambiguous state for the rest of the session.',
      outcome:
        'Attendance patterns raise a disengagement signal, so a student who has stopped is contacted while the position is recoverable.',
    },
    {
      problem: 'Instalment follow-up is inconsistent',
      detail:
        'Overdue instalments are chased by whoever remembers, with no record of what was already said to whom.',
      outcome:
        'Instalments age on the student record with contact history, so collection is a worked list rather than a repeated awkward call.',
    },
    {
      problem: 'Enquiries go cold in days',
      detail:
        'Campaign enquiries have a short window and are contacted when someone gets to them, by which point the student has enrolled elsewhere.',
      outcome:
        'Enquiries are records with an owner and an age, so contact happens within the window rather than after it.',
    },
    {
      problem: 'Faculty scheduling collides across batches',
      detail:
        'A faculty member is scheduled across batches and centres, and conflicts are discovered when a class has no teacher.',
      outcome:
        'Faculty commitments are records against batches, so conflicts surface when the schedule is built.',
    },
    {
      problem: 'Concessions are given without a pattern being visible',
      detail:
        'Scholarships and fee concessions are negotiated individually and their total effect on batch economics is never assembled.',
      outcome:
        'Concessions are approvals recorded against the student and batch, so realised fee per batch is known.',
    },
  ],

  modulesLede:
    'One system across batches, students, faculty and fees.',
  modules: [
    {
      id: 'work',
      title: 'Courses, batches and sessions',
      line:
        'A batch is work with a course, a schedule, a faculty allocation, a fill count, a viability threshold and a state.',
      why:
        'The batch is where cost and revenue meet, and it is the only level at which coaching economics make sense.',
      example:
        'Five batches below viable fill, each showing its committed faculty cost for the session.',
    },
    {
      id: 'relationships',
      title: 'Students, parents and enquiries',
      line:
        'Students are records with their batch, fee plan, instalments, attendance signal, contact history and parent details; enquiries carry a source, an owner and an age.',
      why:
        'The enquiry and the enrolled student are the same relationship at different stages, and treating them separately loses both.',
      example:
        'Eighty-four enquiries nine days old with no contact recorded, which is the window in which they enrol elsewhere.',
    },
    {
      id: 'people',
      title: 'Faculty, coordinators and counsellors',
      line:
        'Staff are modelled once with their subject, availability and batch commitments, and every class, enquiry and follow-up shows who owns it.',
      why:
        'Faculty is the fixed cost that determines batch viability and the constraint that determines the timetable.',
      example:
        'Faculty commitments across batches and centres, with conflicts visible when the schedule is built.',
    },
    {
      id: 'workflows',
      title: 'Fee plans, instalments and concessions',
      line:
        'Fee plans, instalment schedules, concessions, refunds and withdrawals move through defined steps with recorded decisions.',
      why:
        'Fee decisions are made under parental pressure at admission and determine the batch’s realised revenue.',
      example:
        'A concession beyond threshold recorded as an approval, so realised fee per batch is knowable.',
    },
    {
      id: 'records',
      title: 'Enrolment forms, documents and agreements',
      line:
        'Enrolment documents, agreements and communications attach to the student record.',
      why:
        'Refund and withdrawal disputes turn on what was agreed at admission.',
      example:
        'The fee agreement and refund terms on the student record when a mid-course withdrawal is requested.',
    },
    {
      id: 'intelligence',
      title: 'Batch, collection and conversion reporting',
      line:
        'Fill and viability by batch, realised fee after concessions, dropout and disengagement, instalment ageing, enquiry conversion and faculty load come from the operational records.',
      why:
        'The numbers that decide a coaching year are all knowable at enrolment and rarely assembled until after it.',
      example:
        'Realised revenue per batch against committed faculty cost, before the session starts.',
    },
    {
      id: 'communication',
      title: 'Parent contact on the record',
      line:
        'Calls, reminders and responses attach to the student and enquiry they concern.',
      why:
        'Fee and attendance conversations with parents repeat, and repeating one without knowing the last is damaging.',
      example:
        'A note that a parent asked for time until the tenth, so the next reminder is timed accordingly.',
    },
    {
      id: 'control',
      title: 'Who can concede, refund and withdraw',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Concessions and refunds are where realised fee quietly falls below the published fee.',
      example:
        'Every concession carries the approver, the reason and its effect on the batch.',
    },
    {
      id: 'ai',
      title: 'Ask the institute a question',
      line:
        'Verity AI answers from your own batch, student, fee and enquiry records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking are about batches running at a loss and students who have quietly gone.',
      example:
        '"Which students have stopped attending without withdrawing?" returns forty-six, with calls assigned.',
    },
    {
      id: 'locations',
      title: 'Centres, classrooms and batches',
      line:
        'Locations roll into the institute, with batches, faculty and reporting following the same structure.',
      why:
        'Multi-centre institutes share faculty and compete for the same enquiries.',
      example:
        'Fill rate and realised fee by centre, comparable across the institute.',
    },
  ],

  workflowsHeading: 'Enrolment decides the year.',
  workflowsLede:
    'These already happen. As records they make the economics visible while they can still change.',
  workflows: [
    {
      name: 'Enquiry to enrolment',
      steps: [
        'Enquiry recorded with source, course interest and owner',
        'First contact task created with a short window',
        'Counselling recorded with outcome and objections',
        'Fee plan agreed with any concession approved',
        'Enrolment completed and the student added to a batch',
        'Batch fill and realised fee updated',
      ],
      note:
        'Contact within the window is the single largest determinant of conversion, and it depends on the enquiry having an owner.',
    },
    {
      name: 'Batch formation and viability',
      steps: [
        'Batch created with course, schedule and faculty allocation',
        'Committed cost calculated for the session',
        'Viability threshold set against that cost',
        'Fill tracked against the threshold as enrolment runs',
        'Merge, defer or proceed decision taken before the start date',
      ],
      note:
        'This decision can only be taken before the session starts, which is why fill has to be visible per batch.',
    },
    {
      name: 'Instalment collection',
      steps: [
        'Instalment schedule created against the student’s fee plan',
        'Due instalments aged automatically',
        'Follow-up assigned with contact history attached',
        'Payment recorded and the position updated',
        'Escalation raised where instalments remain outstanding',
      ],
      note:
        'Working from a record of what was already said makes the call shorter and less awkward.',
    },
    {
      name: 'Disengagement and withdrawal',
      steps: [
        'Attendance pattern raises a disengagement signal',
        'Contact assigned to the counsellor or coordinator',
        'Reason recorded — academic, financial, moved, other',
        'Withdrawal formalised with refund terms applied',
        'Fee position and batch fill updated',
      ],
      note:
        'A student who has stopped attending is recoverable for a short period, and only if someone knows.',
    },
    {
      name: 'Faculty scheduling',
      steps: [
        'Faculty availability and subject recorded',
        'Batch schedules built against availability',
        'Conflicts across batches and centres flagged',
        'Substitutions recorded against the class they cover',
        'Load per faculty member reported',
      ],
      note:
        'A class without a teacher is the most visible failure an institute can have with parents.',
    },
    {
      name: 'Session review',
      steps: [
        'Fill, realised fee and cost pulled per batch',
        'Dropout and its recorded reasons reviewed',
        'Collection performance against the fee plan assessed',
        'Enquiry conversion by source and counsellor reviewed',
        'Decisions recorded for the next enrolment cycle',
      ],
      note:
        'The next cycle is the only opportunity to change what this one fixed.',
    },
  ],

  ai: {
    heading: 'Ask before the session starts.',
    lede:
      'Verity AI reads the same batch, student, fee and enquiry records the institute creates as it runs. It answers from your own centres, respects permissions, and can turn an answer into calls and follow-ups.',
    panelMeta: 'Grounded in your institute records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which batches are below their viability threshold?',
      'Which students have stopped attending without formally withdrawing?',
      'What is outstanding on instalments, and which have no follow-up recorded?',
      'Which enquiries have not been contacted within the window?',
      'What is realised fee per batch after concessions?',
      'Which counsellors convert enquiries best, and from which sources?',
      'Where do faculty commitments conflict across batches?',
      'What were the recorded reasons for withdrawal this session?',
      'Summarise batch economics for the current session.',
    ],
  },

  automationHeading: 'The windows that close.',
  automationLede:
    'Each runs from the institute’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'An enquiry is recorded',
      steps: [
        'Owner assigned by course and centre',
        'First contact task created with a short window',
        'Escalated if contact does not happen',
        'Outcome recorded against the enquiry',
      ],
    },
    {
      trigger: 'Batch fill remains below viability as the start date approaches',
      steps: [
        'Batch flagged with committed cost and current fill',
        'Merge, defer or proceed decision raised',
        'Decision recorded against the batch',
      ],
    },
    {
      trigger: 'A student’s attendance pattern indicates disengagement',
      steps: [
        'Student flagged with their fee position attached',
        'Contact assigned to the coordinator',
        'Reason and outcome recorded',
      ],
    },
    {
      trigger: 'An instalment passes its due date',
      steps: [
        'Instalment aged on the student record',
        'Follow-up assigned with contact history attached',
        'Escalated past the second threshold',
      ],
    },
    {
      trigger: 'A faculty conflict is created in the schedule',
      steps: [
        'Conflict flagged with both batches named',
        'Resolution task assigned to the coordinator',
        'Outcome recorded against the schedule',
      ],
    },
    {
      trigger: 'A concession beyond threshold is requested',
      steps: [
        'Request held at the approval step',
        'Effect on batch realised fee attached',
        'Decision recorded against the student and batch',
      ],
    },
  ],

  intelligenceHeading: 'What the director can actually see.',
  intelligenceLede:
    'Batch economics and conversion, from records created during enrolment and delivery.',
  intelligence: [
    {
      area: 'Batches',
      points: [
        'Fill against viability threshold per batch',
        'Committed faculty and room cost',
        'Realised fee after concessions',
        'Contribution per batch and per centre',
      ],
    },
    {
      area: 'Students',
      points: [
        'Disengagement signals from attendance',
        'Dropouts and their recorded reasons',
        'Fee position and instalment adherence',
        'Retention across sessions',
      ],
    },
    {
      area: 'Collection',
      points: [
        'Instalments due, collected and overdue',
        'Ageing by student and batch',
        'Follow-up contact history and outcomes',
        'Concessions and refunds granted',
      ],
    },
    {
      area: 'Admissions',
      points: [
        'Enquiries by source and campaign',
        'Time from enquiry to first contact',
        'Conversion by counsellor and source',
        'Objections recorded on lost enquiries',
      ],
    },
    {
      area: 'Faculty',
      points: [
        'Load per faculty member across batches',
        'Scheduling conflicts and substitutions',
        'Cost allocated per batch',
        'Attendance and class delivery',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds the operational and commercial records. Teaching content, question banks and assessment stay in your existing systems.',

  rolesHeading: 'One institute, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Director',
      question: 'Which batches make money?',
      focus: 'Fill against viability, realised fee after concessions, contribution per batch and centre, dropout exposure.',
    },
    {
      role: 'Centre head',
      question: 'What needs attention this week?',
      focus: 'Under-filled batches, disengaged students, faculty conflicts, overdue instalments.',
    },
    {
      role: 'Counsellor',
      question: 'Who do I need to call?',
      focus: 'Enquiries within the contact window, objections recorded, students disengaging, follow-ups due.',
    },
    {
      role: 'Accounts',
      question: 'What is collected and what is owed?',
      focus: 'Instalment ageing by student and batch, concessions approved, refunds due, collection outcomes.',
    },
  ],

  useCasesHeading: 'What coaching institutes use Verity for',
  useCases: [
    {
      name: 'Batch viability',
      body: 'Fill measured per batch against its committed cost, so an under-filled batch is a decision before the session rather than a loss after it.',
    },
    {
      name: 'Disengagement detection',
      body: 'Attendance patterns raising a signal, so a student who has quietly stopped is contacted while the position is still recoverable.',
    },
    {
      name: 'Instalment collection',
      body: 'Instalments aged on the student record with contact history, turning an awkward repeated call into a worked list.',
    },
    {
      name: 'Enquiry response time',
      body: 'Enquiries with owners and a short contact window, because conversion falls sharply with every day of delay.',
    },
    {
      name: 'Realised fee tracking',
      body: 'Concessions recorded as approvals, so the batch’s actual revenue is known rather than assumed from the published fee.',
    },
    {
      name: 'Faculty scheduling',
      body: 'Commitments recorded against batches and centres, so conflicts surface when the timetable is built rather than when a class has no teacher.',
    },
    {
      name: 'Withdrawal and refund control',
      body: 'Withdrawal reasons and refund terms applied from the recorded agreement, so disputes resolve to what was agreed at admission.',
    },
    {
      name: 'Asking about the session',
      body: 'Plain-language questions across batches, students, fees and enquiries, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your teaching content, test platforms and billing arrangement continue to run and are mapped during implementation. Students, batches, fee plans, outstanding instalments and open enquiries are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions institutes ask',
  faqs: [
    [
      'What can AI software do for a coaching institute?',
      'Verity AI answers questions from your own batch, student, fee and enquiry records: which batches are below viability, which students have stopped attending without withdrawing, what is outstanding on instalments with no follow-up recorded, which enquiries were not contacted within the window. Each answer can become a call assigned to a counsellor.',
    ],
    [
      'Does Verity provide teaching content or tests?',
      'No. Teaching content, question banks and assessment platforms stay where they are and are mapped during implementation. Verity runs the operational and commercial side — batches, enrolment, fees, attendance signals, faculty scheduling and reporting.',
    ],
    [
      'How does it help with batch profitability?',
      'Each batch carries its committed faculty and room cost and a viability threshold, and fill is tracked against that threshold as enrolment runs — so a batch that will run at a loss is a decision to merge or defer before the session rather than a loss discovered after it.',
    ],
    [
      'Can it detect students who have dropped out?',
      'Attendance patterns raise a disengagement signal against the student with their fee position attached, so a student who has stopped attending without formally withdrawing is contacted while the situation is still recoverable.',
    ],
    [
      'Does it manage fee instalments?',
      'Instalment schedules sit on the student record with automatic ageing and the history of every reminder, so collection is a worked list with context rather than an inconsistent, uncomfortable chase.',
    ],
    [
      'Can it improve enquiry conversion?',
      'Enquiries are records with a source, an owner and an age, and a first-contact task with a short window. Conversion falls sharply with delay, and the delay is usually because no one owned the enquiry.',
    ],
    [
      'Does it handle multiple centres?',
      'Centres and classrooms are locations rolling into the institute, sharing faculty and enquiry flow, so fill, realised fee and conversion are comparable across them.',
    ],
    [
      'Can we see what concessions are costing us?',
      'Concessions are approvals recorded against the student and batch, so realised fee per batch is known rather than assumed from the published fee.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how enrolment and delivery work, configuration of courses, batches and fee plans, migration of students and outstanding instalments, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start before the next session begins.',
  ctaLede:
    'Batch economics can only be changed before the start date. Tell us how fill and cost are tracked today.',

  related: ['test-preparation-centres', 'tuition-centres', 'schools', 'colleges', 'skill-training-institutes', 'language-institutes'],
};
