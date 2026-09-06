export default {
  slug: 'tuition-centres',
  status: 'published',
  plural: 'tuition centres',
  subject: 'tuition centre',

  seo: {
    title: 'AI business management software for tuition centres | Verity',
    description:
      'Verity connects tutor availability, session delivery and make-ups, per-student schedules, hourly capacity and fee collection into one system for tuition centres.',
    keywords: [
      'AI software for tuition centres',
      'tuition centre management software',
      'tutor scheduling and session tracking',
      'per student tuition fee and attendance software',
    ],
  },

  hero: {
    eyebrow: 'Verity for tuition centres',
    headline: 'A missed session is a promise you still owe and an hour you cannot resell.',
    lede:
      'Tuition runs on hours matched between a tutor and a student, and every cancellation creates a debt. Verity tracks delivery, make-ups and capacity so the ledger of owed sessions is real.',
    note: 'Sized for a centre run by the people who also teach in it.',
    panel: {
      title: 'Centre',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sessions delivered', value: '486', note: 'of 540 scheduled' },
        { label: 'Make-ups owed', value: '38', note: 'across 22 students' },
        { label: 'Tutor utilisation', value: '72%', note: 'of available hours' },
        { label: 'Fees outstanding', value: '₹2.9 L', note: '34 students' },
      ],
      rows: [
        { name: '38 make-up sessions owed, oldest 6 weeks', meta: 'Unscheduled · parents will ask', active: true },
        { name: 'Two tutors below 50% utilisation', meta: 'While three students wait for their subject', active: true },
        { name: '9 students absent three sessions running', meta: 'No contact recorded with parents', active: true },
        { name: 'Fees unpaid for the current month', meta: '34 students · sessions continuing', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own centre in this shape.',
    },
  },

  overview: {
    heading: 'The product is an hour, matched between two specific people.',
    paragraphs: [
      'A tuition centre does not run batches on a fixed timetable in the way a coaching institute does. It matches individual students to individual tutors in specific subjects at specific times, and the whole operation is the maintenance of that matching against constant disruption — a student has an exam, a tutor is unwell, a session is cancelled at short notice.',
      'Every cancellation creates a make-up session: an hour the centre owes and has not delivered. Those accumulate, they are usually tracked in a notebook or not at all, and the parent remembers them precisely. A centre carrying thirty-eight owed sessions has a delivery obligation and a reputational exposure it has not quantified.',
      'The second problem is capacity in a very literal sense. Tutor hours are the entire supply, they cannot be stored, and an unfilled hour is gone. Two tutors at half utilisation while three students wait for a subject is a matching failure, not a demand failure, and it is invisible without recording both sides.',
      'The third is that fees are usually monthly and sessions continue regardless. Fee follow-up is uncomfortable in a small centre where the owner teaches the child, so it slips, and the arrears grow while delivery continues.',
      'The fourth is that absence is the earliest warning of a student leaving, and it is noticed by the tutor and recorded nowhere.',
      'Verity records the scheduled session, the delivered session, the make-up owed, the tutor’s available hours and the fee position, without requiring an administrator.',
    ],
  },

  terminology: [
    ['Sessions, subjects, make-ups', 'Work'],
    ['Students, parents, siblings', 'Relationships'],
    ['Tutors, availability, subjects taught', 'People'],
    ['Monthly fees, packages, adjustments', 'Workflows'],
    ['Progress notes, session records', 'Records'],
    ['Rooms, slots, centres', 'Locations'],
    ['Attendance, delivery, utilisation', 'Intelligence'],
  ],

  challengesHeading: 'Small operations with precise obligations.',
  challengesLede:
    'Tuition problems come from hours owed, hours wasted and conversations nobody wants to have.',
  challenges: [
    {
      problem: 'Make-up sessions accumulate untracked',
      detail:
        'A cancelled session becomes an hour the centre owes. The parent remembers it exactly; the centre tracks it in a notebook or in someone’s head.',
      outcome:
        'A cancellation creates a make-up record with a student, a subject and an age, so the obligation is visible and schedulable.',
    },
    {
      problem: 'Tutor hours are wasted while students wait',
      detail:
        'One tutor is under-booked while students wait for a subject someone else teaches, and nobody sees both sides at once.',
      outcome:
        'Tutor availability and unmet student demand are recorded together, so matching failures surface as a list.',
    },
    {
      problem: 'Absence is the last thing anyone records',
      detail:
        'A student misses three sessions in a row. The tutor notices and mentions it. Nothing happens, and the student does not return.',
      outcome:
        'Attendance is recorded per session, so consecutive absence raises a contact task with the parent.',
    },
    {
      problem: 'Fees slip because the conversation is personal',
      detail:
        'The owner teaches the child and finds it hard to chase the parent, so arrears grow while sessions continue.',
      outcome:
        'Fee position ages on the student record with contact history, so the conversation is factual and timely rather than awkward and late.',
    },
    {
      problem: 'Scheduling changes are made by message',
      detail:
        'Reschedules are agreed over messages between a parent, a tutor and the owner, and the three end up with different versions.',
      outcome:
        'The session is the record, so a reschedule updates one place and everyone reads the same schedule.',
    },
    {
      problem: 'Progress is discussed without a record',
      detail:
        'A parent asks how their child is doing and the answer depends on which tutor is asked and what they remember.',
      outcome:
        'Session notes attach to the student, so the answer is consistent and specific.',
    },
  ],

  modulesLede:
    'One system, sized for a centre without an office. These are the parts it works with.',
  modules: [
    {
      id: 'work',
      title: 'Sessions, subjects and make-ups',
      line:
        'Each session is work with a student, a tutor, a subject, a slot, a delivered state and — where cancelled — a make-up obligation.',
      why:
        'The session is the product, and the difference between scheduled and delivered is the centre’s real liability.',
      example:
        'Thirty-eight make-up sessions owed across twenty-two students, the oldest six weeks.',
    },
    {
      id: 'people',
      title: 'Tutors, availability and subjects',
      line:
        'Tutors are records with their subjects, available hours, committed sessions and delivery history.',
      why:
        'Tutor hours are the entire supply of the business, and they cannot be stored.',
      example:
        'Two tutors below half utilisation while three students wait for a subject.',
    },
    {
      id: 'relationships',
      title: 'Students, parents and siblings',
      line:
        'Students are records with their subjects, tutors, schedule, attendance, session notes, fee position and parent contact history.',
      why:
        'A tuition relationship is with a household, and siblings and referrals are how these centres grow.',
      example:
        'A family with two children, one fee position and one contact history.',
    },
    {
      id: 'workflows',
      title: 'Fees, adjustments and make-up scheduling',
      line:
        'Monthly fees, adjustments for undelivered sessions, discounts and make-up scheduling move through defined steps with recorded decisions.',
      why:
        'Adjusting a fee for sessions not delivered is the fairest and most frequently mishandled decision in tuition.',
      example:
        'An adjustment applied for undelivered sessions, recorded rather than negotiated afresh each month.',
    },
    {
      id: 'records',
      title: 'Session notes and progress',
      line:
        'Notes from each session attach to the student, building a record of what was covered.',
      why:
        'The parent conversation about progress is the centre’s main retention tool, and it needs specifics.',
      example:
        'A parent asks how their child is doing; the answer comes from the last six sessions rather than from memory.',
    },
    {
      id: 'intelligence',
      title: 'Delivery, utilisation and retention reporting',
      line:
        'Sessions scheduled against delivered, make-ups owed, tutor utilisation, attendance patterns, fee ageing and retention come from the operational records.',
      why:
        'A tuition centre owner usually knows the month’s fees and nothing about delivery or utilisation.',
      example:
        'Delivered against scheduled sessions by tutor and by month.',
    },
    {
      id: 'ai',
      title: 'Ask the centre a question',
      line:
        'Verity AI answers from your own session, tutor, student and fee records, respects permissions, and can create assigned follow-ups.',
      why:
        'The owner is teaching most of the day and needs an answer rather than a report to prepare.',
      example:
        '"Which make-ups are owed and unscheduled?" returns thirty-eight, with scheduling tasks raised.',
    },
    {
      id: 'communication',
      title: 'Parent contact on the record',
      line:
        'Messages, reminders and notes attach to the student or session they concern.',
      why:
        'Reschedules and fee conversations happen over messages, and those messages are the only version of the truth.',
      example:
        'A reschedule agreed with a parent recorded on the session rather than in one person’s chat.',
    },
    {
      id: 'locations',
      title: 'Rooms, slots and centres',
      line:
        'Rooms and slots are locations, so capacity is a real constraint rather than an assumption.',
      why:
        'A centre can be tutor-constrained or room-constrained, and the two have different fixes.',
      example:
        'Slot occupancy by room and hour, alongside tutor availability.',
    },
    {
      id: 'control',
      title: 'Who can adjust fees and reschedule',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Fee adjustments in a small centre are made informally and add up.',
      example:
        'Every fee adjustment carries the reason and the person who applied it.',
    },
  ],

  workflowsHeading: 'Hours promised and hours delivered.',
  workflowsLede:
    'These already happen. As records, the difference between the two stops being a memory.',
  workflows: [
    {
      name: 'Enrolment and matching',
      steps: [
        'Student recorded with subjects required and availability',
        'Tutor matched by subject and available hours',
        'Schedule agreed and sessions created',
        'Fee plan agreed and recorded',
        'Unmet subject demand recorded where no tutor is available',
      ],
      note:
        'Recording demand that could not be matched is what tells the centre which tutor to hire next.',
    },
    {
      name: 'Session delivery',
      steps: [
        'Session delivered and marked with attendance',
        'Notes on what was covered recorded against the student',
        'Cancellation recorded with who cancelled and why',
        'Make-up obligation created where the centre cancelled',
        'Delivered count updated against the fee period',
      ],
      note:
        'Distinguishing who cancelled is what determines whether a make-up is owed.',
    },
    {
      name: 'Make-up scheduling',
      steps: [
        'Owed sessions listed by student and age',
        'Tutor availability matched against the obligation',
        'Make-up scheduled and confirmed with the parent',
        'Delivery recorded and the obligation cleared',
        'Ageing reported on outstanding make-ups',
      ],
      note:
        'An owed hour that is never scheduled becomes a fee dispute at the end of the term.',
    },
    {
      name: 'Absence follow-up',
      steps: [
        'Consecutive absences detected from session records',
        'Contact task assigned with the student’s history',
        'Reason recorded — illness, exams, disengagement, moved',
        'Schedule adjusted or withdrawal recorded',
        'Fee position updated accordingly',
      ],
      note:
        'Three absences in a row is the clearest early signal a centre gets, and it is usually only noticed by the tutor.',
    },
    {
      name: 'Monthly fee cycle',
      steps: [
        'Sessions delivered counted for the period',
        'Adjustment applied for undelivered sessions',
        'Fee raised against the student with the calculation shown',
        'Payment recorded and the balance aged',
        'Follow-up assigned with contact history attached',
      ],
      note:
        'Showing the calculation is what prevents the monthly negotiation about what was actually delivered.',
    },
    {
      name: 'Capacity review',
      steps: [
        'Tutor available hours compared with committed sessions',
        'Unmet subject demand reviewed',
        'Room and slot occupancy reviewed',
        'Hiring or scheduling decisions raised',
        'Decisions recorded against the period',
      ],
      note:
        'Idle tutors and waiting students in the same week is a matching failure with a specific fix.',
    },
  ],

  ai: {
    heading: 'Ask what is owed and what is idle.',
    lede:
      'Verity AI reads the same session, tutor, student and fee records the centre creates as it teaches. It answers from your own centre, respects permissions, and can turn an answer into scheduling and contact tasks.',
    panelMeta: 'Grounded in your centre records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which make-up sessions are owed and unscheduled?',
      'Which tutors are below their available hours this month?',
      'Which students have missed three or more sessions in a row?',
      'What subjects do students want that we cannot currently staff?',
      'How many sessions were delivered against scheduled this month?',
      'Which students have fees outstanding while sessions continue?',
      'Which slots and rooms are unused?',
      'Which students have not returned after their exams?',
      'Summarise delivery and utilisation this month.',
    ],
  },

  automationHeading: 'The obligations a busy centre forgets.',
  automationLede:
    'Each runs from the centre’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'The centre cancels a session',
      steps: [
        'Make-up obligation created against the student',
        'Scheduling task raised with tutor availability attached',
        'Ageing tracked until the make-up is delivered',
      ],
    },
    {
      trigger: 'A student misses consecutive sessions',
      steps: [
        'Contact task assigned with the student’s history',
        'Reason recorded on the student record',
        'Schedule or fee position adjusted accordingly',
      ],
    },
    {
      trigger: 'A tutor has unfilled available hours',
      steps: [
        'Availability surfaced against unmet subject demand',
        'Matching task assigned',
        'Outcome recorded against the period',
      ],
    },
    {
      trigger: 'A monthly fee falls due',
      steps: [
        'Delivered sessions counted for the period',
        'Adjustment applied for undelivered sessions',
        'Fee raised with the calculation shown to the parent',
      ],
    },
    {
      trigger: 'A fee balance passes its terms',
      steps: [
        'Balance aged on the student record',
        'Follow-up assigned with contact history attached',
        'Escalated to the owner past the second threshold',
      ],
    },
    {
      trigger: 'A make-up remains unscheduled past threshold',
      steps: [
        'Obligation flagged with its age',
        'Scheduling escalated to the owner',
        'Outcome recorded against the student',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see between sessions.',
  intelligenceLede:
    'Delivery, capacity and retention from records created by teaching.',
  intelligence: [
    {
      area: 'Delivery',
      points: [
        'Sessions scheduled against delivered',
        'Cancellations by originator and reason',
        'Make-ups owed, scheduled and delivered',
        'Delivery rate by tutor',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Tutor utilisation against available hours',
        'Unmet subject demand',
        'Room and slot occupancy',
        'Waiting students by subject',
      ],
    },
    {
      area: 'Students',
      points: [
        'Attendance patterns and consecutive absences',
        'Retention across terms',
        'Withdrawals and their recorded reasons',
        'Siblings and referral sources',
      ],
    },
    {
      area: 'Fees',
      points: [
        'Fees raised against sessions delivered',
        'Adjustments applied and their reasons',
        'Balances outstanding with ageing',
        'Contact history and collection outcomes',
      ],
    },
  ],
  intelligenceNote:
    'The centre does not gain an administrator. Marking a session delivered and noting what was covered produces all of this.',

  rolesHeading: 'A small team, three different views.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What do we owe and what are we wasting?',
      focus: 'Make-ups owed, tutor utilisation, unmet demand, fee ageing, retention across terms.',
    },
    {
      role: 'Coordinator',
      question: 'What has to be scheduled?',
      focus: 'Make-ups outstanding, tutor availability, absences to follow up, reschedules requested.',
    },
    {
      role: 'Tutor',
      question: 'Who am I seeing and where did we get to?',
      focus: 'Today’s sessions, student history and notes, make-ups assigned, attendance to record.',
    },
  ],

  useCasesHeading: 'What tuition centres use Verity for',
  useCases: [
    {
      name: 'Make-up session tracking',
      body: 'Cancellations by the centre creating an owed session with an age, so the obligation parents remember precisely is one the centre can see.',
    },
    {
      name: 'Tutor utilisation and matching',
      body: 'Available hours recorded alongside unmet subject demand, so idle tutors and waiting students surface as a matching problem with a fix.',
    },
    {
      name: 'Absence follow-up',
      body: 'Consecutive absences raising a contact task, catching the clearest early signal that a student is leaving.',
    },
    {
      name: 'Fee calculation from delivery',
      body: 'Monthly fees raised against sessions actually delivered with adjustments shown, ending the monthly negotiation about what happened.',
    },
    {
      name: 'Session notes',
      body: 'What was covered recorded against the student, so the parent conversation about progress is specific and consistent.',
    },
    {
      name: 'Reschedule as one record',
      body: 'Changes updating the session itself rather than living in three separate message threads with different versions.',
    },
    {
      name: 'Capacity planning',
      body: 'Tutor hours, room slots and unmet demand together, so hiring decisions follow evidence.',
    },
    {
      name: 'Asking the centre questions',
      body: 'Plain-language questions across sessions, tutors, students and fees, with scheduling tasks raised in the same step.',
    },
  ],

  migration:
    'The schedule book, the fee register and whatever messaging you use with parents are mapped during implementation. Students, tutors, schedules, outstanding make-ups and fee positions are brought across, and Verity is configured around how the centre already runs its week.',

  faqHeading: 'Questions tuition centres ask',
  faqs: [
    [
      'What can AI software do for a tuition centre?',
      'Verity AI answers questions from your own session, tutor, student and fee records: which make-ups are owed and unscheduled, which tutors are below their available hours, which students have missed three sessions in a row, which subjects students want that you cannot staff. Each answer can become a scheduling or contact task.',
    ],
    [
      'Does it track make-up sessions?',
      'Yes, and for most centres that is the main reason to use it. A cancellation by the centre creates a make-up obligation against the student with an age, so the hours you owe are visible and schedulable rather than held in a notebook while the parent tracks them precisely.',
    ],
    [
      'Can it help with tutor utilisation?',
      'Tutor available hours and committed sessions are recorded alongside unmet subject demand, so a tutor at half utilisation while students wait for another subject surfaces as a matching failure with a specific fix.',
    ],
    [
      'Does it need an administrator to run?',
      'No. The records come from marking a session delivered and noting what was covered, which the tutor does anyway. There is no separate data-entry job.',
    ],
    [
      'How does it handle fees?',
      'Monthly fees are raised against sessions actually delivered with adjustments for undelivered ones shown, so the calculation is visible to the parent and the monthly negotiation about what happened does not arise.',
    ],
    [
      'Can it warn us when a student is about to leave?',
      'Consecutive absences raise a contact task with the student’s history attached. That pattern is the clearest early signal a centre gets and is usually noticed only by the tutor.',
    ],
    [
      'Does it replace our messaging with parents?',
      'No. Verity records the reschedule, the fee position and the contact history against the session and student, so everyone reads the same schedule regardless of which thread the conversation happened in.',
    ],
    [
      'Is it suitable for a centre with three tutors?',
      'That is the size it is written for. Owed make-ups, idle tutor hours and slipping fees are all more damaging in a small centre and less likely to be noticed.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the centre schedules and charges, configuration, migration of students, tutors and outstanding make-ups, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the hours you owe.',
  ctaLede:
    'Parents track them exactly and most centres cannot. Tell us how sessions and make-ups are recorded today.',

  related: ['coaching-institutes', 'test-preparation-centres', 'schools', 'music-schools', 'language-institutes', 'dance-academies'],
};
