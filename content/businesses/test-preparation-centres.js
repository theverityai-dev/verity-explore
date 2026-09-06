export default {
  slug: 'test-preparation-centres',
  status: 'published',
  plural: 'test preparation centres',
  subject: 'test preparation centre',

  seo: {
    title: 'AI business management software for test preparation centres | Verity',
    description:
      'Verity connects test series operations, cohort performance tracking, scholarship-based fee structures, counselling conversion and student progression into one system.',
    keywords: [
      'AI software for test preparation centres',
      'test series operations software',
      'cohort performance and student progression tracking',
      'scholarship and fee structure management',
    ],
  },

  hero: {
    eyebrow: 'Verity for test preparation',
    headline: 'You market last year’s results and manage this year’s cohort blind.',
    lede:
      'Everything a test prep centre sells rests on outcomes, and outcomes are built from a cohort’s trajectory across a year of tests. Verity records that trajectory while it can still be changed.',
    note: 'Verity runs the centre. Question banks and evaluation platforms stay where they are.',
    panel: {
      title: 'Cohort',
      meta: 'Current year · All batches',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Students enrolled', value: '860', note: 'across 4 programmes' },
        { label: 'Declining trajectory', value: '94', note: 'across last 3 tests' },
        { label: 'Test series delivery', value: '11 of 14', note: 'conducted on schedule' },
        { label: 'Scholarship value', value: '₹42 L', note: 'against published fees' },
      ],
      rows: [
        { name: '94 students declining across the last three tests', meta: 'No counselling recorded for 71 of them', active: true },
        { name: 'Two test papers behind schedule for next week', meta: 'Setting not complete', active: true },
        { name: 'Results release running four days late', meta: 'Evaluation backlog · students waiting', active: true },
        { name: 'Scholarship awards concentrated in one batch', meta: 'Realised fee 38% below published', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own cohort in this shape.',
    },
  },

  overview: {
    heading: 'The product is an outcome a year away, built from a series of measurable steps.',
    paragraphs: [
      'A test preparation centre sells results. Its entire marketing is last year’s selections, and its entire operational job is producing this year’s. Between those two sits a cohort moving through a year of teaching and a series of tests, and the trajectory of each student in that cohort is knowable long before the outcome.',
      'Most centres do not use it. Test scores are produced, ranks are published, and the data goes into a results sheet rather than into a signal. A student whose percentile has fallen across three consecutive tests is the clearest possible indication that intervention is needed, and in most centres that student is noticed when they stop attending or when the final result arrives.',
      'The second distinctive operation is the test series itself. Papers must be set, moderated, printed, conducted, evaluated and released on a schedule that runs alongside teaching. Each step has an owner and a deadline, and a delay at any one of them shows up as students waiting for results — which is the most visible service failure this kind of centre has.',
      'The third is that fees are effectively negotiated through scholarships based on entrance performance. Published fees and realised fees diverge substantially, and the divergence concentrates in ways that are rarely assembled.',
      'Verity records the test series as work, the cohort trajectory as a pattern, the counselling as an intervention and the realised fee as a number.',
    ],
  },

  terminology: [
    ['Programmes, batches, cohorts', 'Work'],
    ['Test series, papers, evaluations', 'Records'],
    ['Students, parents, aspirants', 'Relationships'],
    ['Faculty, evaluators, counsellors', 'People'],
    ['Scholarships, fee slabs, instalments', 'Workflows'],
    ['Centres, exam halls, batches', 'Locations'],
    ['Scores, percentiles, trajectory', 'Intelligence'],
  ],

  challengesHeading: 'The signals exist and nobody acts on them.',
  challengesLede:
    'Test prep centres generate more performance data than almost any other education business and use the least of it operationally.',
  challenges: [
    {
      problem: 'Declining students are found too late',
      detail:
        'A student’s percentile falls across three tests. The data exists in three results sheets and nobody joins them until the outcome is fixed.',
      outcome:
        'Trajectory is derived across the test series, so declining students surface as a list with the counselling still worth doing.',
    },
    {
      problem: 'Test series delivery slips step by step',
      detail:
        'Paper setting, moderation, printing, conduct and evaluation each slip slightly, and students wait for results while nobody owns the chain.',
      outcome:
        'Each step is work with an owner and a deadline, so the step causing the delay is visible before the release date.',
    },
    {
      problem: 'Counselling is unrecorded and unrepeatable',
      detail:
        'A counsellor speaks to a struggling student. What was discussed and agreed exists only in that conversation.',
      outcome:
        'Counselling is an intervention recorded against the student with an outcome, so the next conversation continues rather than restarts.',
    },
    {
      problem: 'Realised fee diverges from published fee',
      detail:
        'Scholarships based on entrance performance vary widely, and the total effect on a batch’s revenue is never assembled.',
      outcome:
        'Scholarship awards are approvals recorded against student and batch, so realised fee per batch is a number.',
    },
    {
      problem: 'Attendance and performance are tracked separately',
      detail:
        'Attendance sits with the batch coordinator and scores sit with the academic team, so the connection between them is never made.',
      outcome:
        'Both attach to the student record, so a decline accompanied by falling attendance is a different intervention from one that is not.',
    },
    {
      problem: 'Outcomes are not attributed to anything',
      detail:
        'Final results are published as a marketing number without connecting them to entry performance, batch, faculty or intervention.',
      outcome:
        'Outcomes attach to the cohort record, so the centre can tell which of its own practices actually correlate with results.',
    },
  ],

  modulesLede:
    'One system across cohorts, test series, counselling and fees.',
  modules: [
    {
      id: 'work',
      title: 'Programmes, batches and the test calendar',
      line:
        'Programmes and batches are work with a schedule, a cohort, a faculty allocation and a test calendar running through them.',
      why:
        'The year is a sequence of scheduled events, and the centre’s delivery is whether each one happened on time.',
      example:
        'Eleven of fourteen scheduled tests conducted on schedule, with the three delays traced to a step.',
    },
    {
      id: 'records',
      title: 'Test series, papers and evaluations',
      line:
        'Each test is a record with its paper setting, moderation, printing, conduct, evaluation and release, each an owned step with a deadline.',
      why:
        'Results delay is the most visible service failure in test prep and is always a chain of small slips.',
      example:
        'Two papers behind on setting for next week’s test, visible while it can still be recovered.',
    },
    {
      id: 'relationships',
      title: 'Students, parents and aspirants',
      line:
        'Students are records with their scores across the series, trajectory, attendance, counselling history, fee position and parent contact.',
      why:
        'The student’s trajectory is the product being built, and it is only visible if the scores live on the student rather than in sheets.',
      example:
        'Ninety-four students declining across three tests, seventy-one with no counselling recorded.',
    },
    {
      id: 'people',
      title: 'Faculty, evaluators and counsellors',
      line:
        'Staff are modelled once, and every teaching allocation, evaluation step and counselling intervention shows who owned it.',
      why:
        'Evaluation capacity determines results turnaround, and counselling coverage determines whether declines get addressed.',
      example:
        'Evaluation backlog by evaluator against the release date.',
    },
    {
      id: 'workflows',
      title: 'Scholarships, fee slabs and instalments',
      line:
        'Scholarship awards, fee slabs, instalments and refunds move through defined steps with recorded decisions.',
      why:
        'The scholarship is the pricing mechanism, and its aggregate effect is the centre’s actual revenue.',
      example:
        'Scholarship concentration in one batch taking realised fee thirty-eight percent below published.',
    },
    {
      id: 'intelligence',
      title: 'Cohort, delivery and revenue reporting',
      line:
        'Trajectory across the series, intervention outcomes, test delivery timeliness, evaluation turnaround, realised fee and outcome correlation come from the operational records.',
      why:
        'A centre that markets outcomes should be able to say which of its own practices produce them.',
      example:
        'Outcome correlation against entry score, attendance and intervention, by batch and faculty.',
    },
    {
      id: 'ai',
      title: 'Ask the cohort a question',
      line:
        'Verity AI answers from your own student, test, attendance and fee records, respects permissions, and can create assigned interventions.',
      why:
        'The valuable questions are about which students need attention now, which is exactly what a results sheet cannot answer.',
      example:
        '"Which students are declining and have not been counselled?" returns seventy-one, with sessions assigned.',
    },
    {
      id: 'communication',
      title: 'Counselling and parent contact recorded',
      line:
        'Interventions, notes and parent conversations attach to the student they concern.',
      why:
        'A counselling conversation is only useful if the next one builds on it.',
      example:
        'What was agreed with a student in September, visible to whoever counsels them in November.',
    },
    {
      id: 'control',
      title: 'Who can award scholarships and see scores',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Scholarship awards are pricing decisions and student performance is sensitive.',
      example:
        'Every scholarship award carries the approver, the basis and its effect on realised fee.',
    },
    {
      id: 'locations',
      title: 'Centres, halls and batches',
      line:
        'Locations roll into the institute, with test conduct, batches and reporting following the same structure.',
      why:
        'Multi-centre test prep must conduct the same test on the same day under the same conditions.',
      example:
        'Test conduct and evaluation turnaround by centre, comparable across the institute.',
    },
  ],

  workflowsHeading: 'The year is a sequence, and so is the failure.',
  workflowsLede:
    'These already run. As records they turn performance data into intervention.',
  workflows: [
    {
      name: 'Test series delivery',
      steps: [
        'Test scheduled in the series calendar',
        'Paper setting assigned with a deadline',
        'Moderation completed and recorded',
        'Printing and logistics prepared per centre',
        'Test conducted and attendance recorded',
        'Evaluation completed and results released',
      ],
      note:
        'Each step has an owner, so a delayed release resolves to the step that caused it rather than to the academic team generally.',
    },
    {
      name: 'Trajectory monitoring',
      steps: [
        'Scores recorded against the student for each test',
        'Trajectory derived across the series',
        'Declining students flagged with attendance alongside',
        'Counselling assigned by batch and severity',
        'Intervention outcome recorded against the student',
      ],
      note:
        'A decline caught after three tests can still be changed; one caught at the final result cannot.',
    },
    {
      name: 'Counselling intervention',
      steps: [
        'Student identified from trajectory or attendance',
        'Prior counselling history reviewed',
        'Session held and the agreement recorded',
        'Follow-up scheduled with a review date',
        'Change in trajectory tracked after the intervention',
      ],
      note:
        'Tracking what happened after an intervention is how a centre learns which interventions work.',
    },
    {
      name: 'Admission and scholarship',
      steps: [
        'Entrance performance recorded against the applicant',
        'Scholarship slab applied from the published structure',
        'Exception routed for approval where it departs from the slab',
        'Fee plan and instalments created',
        'Realised fee updated for the batch',
      ],
      note:
        'Scholarship is the pricing mechanism, so its aggregate effect belongs in the batch economics.',
    },
    {
      name: 'Attendance and engagement',
      steps: [
        'Attendance recorded per class and per test',
        'Patterns compared against performance trajectory',
        'Contact assigned where both are declining',
        'Reason recorded from the conversation',
        'Support or schedule adjustment recorded',
      ],
      note:
        'A falling score with falling attendance is a different problem from a falling score alone.',
    },
    {
      name: 'Outcome review',
      steps: [
        'Final outcomes recorded against the cohort',
        'Correlation against entry score, attendance and interventions reviewed',
        'Faculty and batch differences examined',
        'Practices that correlate with outcomes identified',
        'Decisions recorded for the next cohort',
      ],
      note:
        'A centre that sells outcomes should know which of its own practices produce them.',
    },
  ],

  ai: {
    heading: 'Ask who needs attention now.',
    lede:
      'Verity AI reads the same student, test, attendance and fee records the centre creates as it teaches. It answers from your own cohort, respects permissions, and can turn an answer into counselling sessions and follow-ups.',
    panelMeta: 'Grounded in your cohort records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which students are declining across the last three tests?',
      'Which declining students have had no counselling recorded?',
      'Which test series steps are behind schedule?',
      'What is evaluation turnaround by centre and evaluator?',
      'What is realised fee per batch after scholarships?',
      'Which students have falling attendance alongside falling scores?',
      'Which interventions were followed by an improvement in trajectory?',
      'How does this cohort compare with last year at the same point?',
      'Summarise cohort health and test delivery.',
    ],
  },

  automationHeading: 'The signals that are already in the data.',
  automationLede:
    'Each runs from the centre’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A student declines across consecutive tests',
      steps: [
        'Student flagged with trajectory and attendance attached',
        'Counselling assigned by batch and severity',
        'Intervention outcome recorded and trajectory tracked afterwards',
      ],
    },
    {
      trigger: 'A test series step approaches its deadline',
      steps: [
        'Step flagged with its owner and the release date it affects',
        'Escalated if incomplete',
        'Delay cause recorded against the test',
      ],
    },
    {
      trigger: 'Evaluation backlog threatens the release date',
      steps: [
        'Backlog flagged by evaluator and centre',
        'Reallocation task raised',
        'Release date risk communicated',
      ],
    },
    {
      trigger: 'Attendance falls below threshold',
      steps: [
        'Student flagged with performance trajectory alongside',
        'Contact assigned with parent details attached',
        'Reason and outcome recorded',
      ],
    },
    {
      trigger: 'A scholarship departs from the published slab',
      steps: [
        'Award held at the approval step',
        'Effect on batch realised fee attached',
        'Decision recorded against the student and batch',
      ],
    },
    {
      trigger: 'An instalment passes its due date',
      steps: [
        'Balance aged on the student record',
        'Follow-up assigned with contact history',
        'Escalated past the second threshold',
      ],
    },
  ],

  intelligenceHeading: 'What the academic head can actually see.',
  intelligenceLede:
    'Cohort trajectory and delivery, from records the centre already produces.',
  intelligence: [
    {
      area: 'Cohort',
      points: [
        'Trajectory across the test series by student and batch',
        'Students declining consecutively',
        'Distribution against entry performance',
        'Comparison against previous cohorts at the same point',
      ],
    },
    {
      area: 'Intervention',
      points: [
        'Counselling coverage of declining students',
        'Interventions by counsellor and outcome',
        'Trajectory change following intervention',
        'Students flagged and not contacted',
      ],
    },
    {
      area: 'Delivery',
      points: [
        'Test series conducted against schedule',
        'Step-level delays and their owners',
        'Evaluation turnaround by evaluator and centre',
        'Results release against promised dates',
      ],
    },
    {
      area: 'Revenue',
      points: [
        'Realised fee against published fee per batch',
        'Scholarship distribution by slab and batch',
        'Instalment collection and ageing',
        'Withdrawals and refunds',
      ],
    },
    {
      area: 'Outcomes',
      points: [
        'Final outcomes against entry performance',
        'Outcome variation by batch and faculty',
        'Correlation with attendance and intervention',
        'Year-on-year cohort comparison',
      ],
    },
  ],
  intelligenceNote:
    'Verity records operational and performance data. Question banks, paper generation and evaluation platforms stay where they are.',

  rolesHeading: 'One cohort, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Director',
      question: 'Is this cohort tracking towards outcomes?',
      focus: 'Cohort trajectory against previous years, intervention coverage, realised fee, outcome correlation.',
    },
    {
      role: 'Academic head',
      question: 'Who is falling behind and is anyone helping them?',
      focus: 'Declining students, counselling coverage, attendance alongside performance, batch differences.',
    },
    {
      role: 'Test series coordinator',
      question: 'Will the results release on time?',
      focus: 'Setting, moderation, printing, conduct and evaluation steps, backlogs, release dates.',
    },
    {
      role: 'Counsellor',
      question: 'Who am I seeing and what did we agree last time?',
      focus: 'Assigned students, trajectory and attendance, prior counselling history, follow-ups due.',
    },
  ],

  useCasesHeading: 'What test preparation centres use Verity for',
  useCases: [
    {
      name: 'Trajectory monitoring',
      body: 'Scores held on the student across the series, so a decline across three tests is a list rather than three separate results sheets.',
    },
    {
      name: 'Intervention coverage',
      body: 'Counselling recorded against the student with outcomes, so declining students who have had no contact are visible.',
    },
    {
      name: 'Test series delivery',
      body: 'Setting, moderation, printing, conduct and evaluation as owned steps, so a late results release resolves to the step that caused it.',
    },
    {
      name: 'Evaluation turnaround',
      body: 'Backlog measured by evaluator and centre against the release date, which is the most visible service failure in test prep.',
    },
    {
      name: 'Realised fee after scholarships',
      body: 'Scholarship awards as approvals recorded against student and batch, so the pricing mechanism appears in the batch economics.',
    },
    {
      name: 'Attendance and performance together',
      body: 'Both on the student record, so a decline with falling attendance is treated differently from one without.',
    },
    {
      name: 'Outcome attribution',
      body: 'Final results connected to entry performance, batch, faculty and intervention, so the centre knows which of its practices work.',
    },
    {
      name: 'Asking about the cohort',
      body: 'Plain-language questions across performance, attendance, delivery and fees, with interventions assigned in the same step.',
    },
  ],

  migration:
    'Your question banks, paper generation and evaluation platforms continue to run and are mapped during implementation. Students, batches, test calendars, historic scores and fee positions are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions test prep centres ask',
  faqs: [
    [
      'What can AI software do for a test preparation centre?',
      'Verity AI answers questions from your own student, test, attendance and fee records: which students are declining across the last three tests, which of them have had no counselling, which test series steps are behind schedule, what realised fee looks like per batch. Each answer can become a counselling session assigned to a counsellor.',
    ],
    [
      'Does Verity generate papers or evaluate tests?',
      'No. Question banks, paper generation and evaluation platforms stay where they are and are mapped during implementation. Verity records the operational chain — scheduling, setting, moderation, conduct, evaluation turnaround, release — and the student trajectory that comes out of it.',
    ],
    [
      'How does it help with student outcomes?',
      'Scores are held on the student across the series rather than in per-test sheets, so trajectory is derivable. A student declining across three tests can still be helped; the same decline seen at the final result cannot.',
    ],
    [
      'Can it track counselling?',
      'Counselling is an intervention recorded against the student with what was agreed and a review date, so the next conversation continues rather than restarts, and the centre can see whether interventions changed the trajectory.',
    ],
    [
      'Does it manage the test series?',
      'Each test is a record whose setting, moderation, printing, conduct, evaluation and release are owned steps with deadlines, so a late results release resolves to a specific step rather than to the academic team in general.',
    ],
    [
      'Can it show what scholarships cost us?',
      'Scholarship awards are recorded against the student and batch, so realised fee per batch is a number rather than an assumption from the published fee — and concentration in particular batches becomes visible.',
    ],
    [
      'Does it work across multiple centres?',
      'Centres and exam halls are locations rolling into the institute, so test conduct, evaluation turnaround and cohort performance are directly comparable across them.',
    ],
    [
      'Can it tell us which of our practices work?',
      'Outcomes attach to the cohort with entry performance, attendance, batch, faculty and interventions alongside, so correlation can be examined rather than assumed.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the academic year and test calendar, configuration, migration of students, batches and historic scores, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the students who are slipping.',
  ctaLede:
    'The data already exists in your test results and almost never becomes an intervention. Tell us how scores are held today.',

  related: ['coaching-institutes', 'tuition-centres', 'schools', 'colleges', 'skill-training-institutes', 'edtech-companies'],
};
