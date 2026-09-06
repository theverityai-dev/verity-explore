export default {
  slug: 'colleges',
  status: 'published',
  plural: 'colleges',
  subject: 'college',

  seo: {
    title: 'AI business management software for colleges | Verity',
    description:
      'Verity connects semester registration, faculty workload norms, affiliation and accreditation reporting, hostel and transport, and placement activity into one system.',
    keywords: [
      'AI software for colleges',
      'college administration software',
      'faculty workload and course registration system',
      'accreditation reporting and placement tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for colleges',
    headline: 'The accreditation data exists. It just takes three months to assemble.',
    lede:
      'A college already holds everything a regulator or an accreditor asks for, spread across departments in incompatible formats. Verity holds it once, as records the institution uses anyway.',
    note: 'Verity handles administration. Teaching, assessment and academic delivery stay where they are.',
    panel: {
      title: 'Institution',
      meta: 'Current semester',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Students', value: '3,240', note: 'across 7 departments' },
        { label: 'Registrations pending', value: '186', note: 'electives unconfirmed' },
        { label: 'Faculty above norm', value: '14', note: 'workload beyond threshold' },
        { label: 'Fees outstanding', value: '₹1.4 Cr', note: '412 students' },
      ],
      rows: [
        { name: '186 students without confirmed elective registration', meta: 'Semester starts in 9 days', active: true },
        { name: '14 faculty carrying load above the norm', meta: 'While four are below it', active: true },
        { name: 'Accreditation data request outstanding', meta: 'Six departments, six formats', active: true },
        { name: 'Hostel allotment unresolved for 38 students', meta: 'Rooms available, allocation not run', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own institution in this shape.',
    },
  },

  overview: {
    heading: 'A college is a large administrative machine that reassembles its own data on request.',
    paragraphs: [
      'A college runs departments, semesters, course and elective registration, faculty allocation against workload norms, examinations, hostel and transport, fee collection across categories, and reporting to affiliating bodies and accreditors. Every one of those functions holds real, accurate data. Almost none of them share a structure.',
      'That is why an accreditation or affiliation data request takes months. The information exists — student numbers by programme, faculty qualifications and workload, infrastructure, placement outcomes — but it lives in seven departmental formats and has to be reconciled by people rather than queried.',
      'The second recurring failure is registration. Semester course and elective registration must complete before teaching starts, and it stalls on students who have not chosen, prerequisites unmet, or capacity limits reached. A hundred and eighty-six unconfirmed registrations nine days before the semester is a timetable problem that becomes an academic one.',
      'The third is faculty workload. Norms exist, they are checked when someone complains, and distribution is uneven in ways nobody has assembled — fourteen above the norm while four are below it is both an equity problem and a compliance one.',
      'The fourth is that placements are the outcome the institution is judged on and are usually tracked by a placement cell in isolation from the student records that would make them analysable.',
      'Verity holds people, programmes, work, records and control on one model, so the data an accreditor asks for is the data the institution already runs on.',
    ],
  },

  terminology: [
    ['Programmes, courses, electives, semesters', 'Records'],
    ['Registration, examinations, evaluation', 'Work'],
    ['Students, parents, alumni, recruiters', 'Relationships'],
    ['Faculty, departments, workload norms', 'People'],
    ['Fee categories, scholarships, concessions', 'Workflows'],
    ['Campuses, departments, hostels', 'Locations'],
    ['Affiliation, accreditation, audit', 'Control'],
  ],

  challengesHeading: 'Everything is known and nothing is queryable.',
  challengesLede:
    'A college’s administrative difficulties come from departmental data that never shares a structure.',
  challenges: [
    {
      problem: 'Accreditation data takes months to assemble',
      detail:
        'Every department holds its own version of student, faculty and infrastructure data, and a request becomes a reconciliation project.',
      outcome:
        'The institution runs on one record model, so a data request is an extract rather than a project.',
    },
    {
      problem: 'Semester registration stalls before teaching starts',
      detail:
        'Electives unchosen, prerequisites unmet and capacity limits reached leave registrations incomplete days before the semester begins.',
      outcome:
        'Registration is work per student with a state, so incomplete registrations surface with the reason and an owner.',
    },
    {
      problem: 'Faculty workload is uneven and unmeasured',
      detail:
        'Norms exist and distribution is set by departmental habit, so some faculty carry far more than others and nobody has the aggregate.',
      outcome:
        'Allocations are records against faculty, so load against norm is visible before the semester rather than after a complaint.',
    },
    {
      problem: 'Fee categories multiply and collection follows habit',
      detail:
        'Government quota, management quota, scholarship and hostel fees have different structures, and follow-up is inconsistent across them.',
      outcome:
        'Fee plans sit on the student record with automatic ageing, so collection is a worked list across categories.',
    },
    {
      problem: 'Placement outcomes are tracked apart from student records',
      detail:
        'The placement cell keeps its own list, so outcomes cannot be analysed against academic performance, department or intake.',
      outcome:
        'Placement activity attaches to the student record, so outcomes are analysable and reportable.',
    },
    {
      problem: 'Hostel and transport are administered separately',
      detail:
        'Allotment, occupancy and fees are handled by different offices from the academic record, so the same student exists again.',
      outcome:
        'Hostel and transport allocations are records against the same student, with their own fee components.',
    },
  ],

  modulesLede:
    'One record model across departments. These are the parts a college works with.',
  modules: [
    {
      id: 'people',
      title: 'Students, faculty and departments',
      line:
        'Every person is one record with their programme or department, role, allocations and history, referenced by every function.',
      why:
        'The duplicate person record across departments is the root of nearly every administrative inefficiency in a college.',
      example:
        'A student who exists once across academics, hostel, transport and fees rather than four times.',
    },
    {
      id: 'records',
      title: 'Programmes, courses, electives and semesters',
      line:
        'The academic structure is held as records with prerequisites, capacity, credits and the semesters they run in.',
      why:
        'Registration, workload and accreditation reporting all depend on the structure being data rather than a handbook.',
      example:
        'Elective capacity and prerequisites applied automatically during registration.',
    },
    {
      id: 'work',
      title: 'Registration, examinations and administrative processes',
      line:
        'Each is work with an owner, a deadline, a state and the students or staff it concerns.',
      why:
        'College processes fail by stalling, and stalling is only visible when the process is a record.',
      example:
        'One hundred and eighty-six registrations incomplete nine days before the semester, each with its reason.',
    },
    {
      id: 'workforce',
      title: 'Faculty allocation and workload',
      line:
        'Teaching and administrative allocations are records against faculty, measured against workload norms.',
      why:
        'Workload norms are a compliance requirement and an equity issue, and both need the aggregate.',
      example:
        'Fourteen faculty above the norm while four are below it, visible before allocation is finalised.',
    },
    {
      id: 'workflows',
      title: 'Fee categories, scholarships and approvals',
      line:
        'Fee structures by category, scholarships, concessions, refunds and exceptions move through defined steps with recorded decisions.',
      why:
        'Colleges run several fee structures at once, and exceptions across them are where collection quietly weakens.',
      example:
        'A concession recorded against the student with its category and approver.',
    },
    {
      id: 'relationships',
      title: 'Parents, alumni and recruiters',
      line:
        'Families, alumni and recruiting organisations are records with their history, communications and outcomes.',
      why:
        'Placement and alumni relationships are institutional assets usually held by individuals.',
      example:
        'A recruiter’s hiring history across years and departments, on one record.',
    },
    {
      id: 'control',
      title: 'Affiliation, accreditation and audit',
      line:
        'One permission model and one audit trail, with documentation completeness held as a state.',
      why:
        'Regulatory reporting requires evidence, and evidence requires records that were kept as the work happened.',
      example:
        'Documentation completeness by record type, reportable rather than reconstructed.',
    },
    {
      id: 'locations',
      title: 'Campuses, departments and hostels',
      line:
        'Locations and organisational units roll into the institution, with people, work and reporting following the same structure.',
      why:
        'Hostel and transport are locations with occupancy and fees, and treating them as separate systems duplicates the student.',
      example:
        'Hostel occupancy and allotment against the same student record as academics.',
    },
    {
      id: 'intelligence',
      title: 'Institutional reporting from live records',
      line:
        'Enrolment by programme, registration completion, faculty load against norms, fee collection by category, hostel occupancy and placement outcomes come from the operational records.',
      why:
        'The reports an accreditor wants are the reports the institution should be running for itself.',
      example:
        'Accreditation data assembled as an extract rather than as a three-month project.',
    },
    {
      id: 'ai',
      title: 'Ask the institution a question',
      line:
        'Verity AI answers from the college’s own administrative records, respects permissions, and can create assigned follow-ups.',
      why:
        'Cross-departmental questions are exactly what departmental systems cannot answer.',
      example:
        '"Which students have incomplete registration and why?" returns the list with owners assigned.',
    },
    {
      id: 'communication',
      title: 'Notices and student contact recorded',
      line:
        'Circulars, notices and contact attach to the student, department or process they concern.',
      why:
        'A large institution communicating from several offices produces both duplicates and gaps.',
      example:
        'A fee reminder recorded against the student, so the hostel office does not send a second one.',
    },
  ],

  workflowsHeading: 'The semester, as records.',
  workflowsLede:
    'These already run in your departments. On one model they become queryable.',
  workflows: [
    {
      name: 'Semester registration',
      steps: [
        'Courses and electives published with capacity and prerequisites',
        'Student registration opened with a deadline',
        'Prerequisites and capacity applied automatically',
        'Incomplete registrations flagged with their reason and an owner',
        'Registration closed and timetabling confirmed',
      ],
      note:
        'Registration completing before teaching starts is the precondition for everything else in the semester.',
    },
    {
      name: 'Faculty allocation',
      steps: [
        'Teaching requirement derived from registered courses',
        'Allocations proposed against faculty availability and qualification',
        'Load measured against workload norms',
        'Imbalances flagged before allocation is finalised',
        'Administrative responsibilities allocated and recorded',
      ],
      note:
        'Measuring against the norm before finalising is what turns a complaint into a plan.',
    },
    {
      name: 'Fee cycle by category',
      steps: [
        'Fee plans generated by student category and components',
        'Scholarships and concessions applied with approvals',
        'Instalments aged automatically',
        'Follow-up assigned with contact history attached',
        'Collection reported by category and department',
      ],
      note:
        'Several fee structures running at once is why collection needs one aged list rather than several.',
    },
    {
      name: 'Hostel and transport allocation',
      steps: [
        'Applications recorded against the student record',
        'Allocation run against available capacity',
        'Allotment recorded with its fee component',
        'Occupancy maintained through the term',
        'Vacancies and changes recorded',
      ],
      note:
        'Allocating against the same student record is what stops the student existing twice.',
    },
    {
      name: 'Placement activity',
      steps: [
        'Recruiter and drive recorded with eligibility criteria',
        'Eligible students identified from academic records',
        'Applications, interviews and offers recorded per student',
        'Outcomes attached to the student record',
        'Placement statistics assembled by department and programme',
      ],
      note:
        'Attaching outcomes to the student is what makes placement analysable rather than merely reportable.',
    },
    {
      name: 'Accreditation data request',
      steps: [
        'Requirement mapped against existing record types',
        'Data extracted from live records',
        'Gaps identified as exceptions with owners',
        'Documentation completeness confirmed',
        'Submission assembled and recorded',
      ],
      note:
        'This is the test of whether an institution’s administration is data or paper.',
    },
  ],

  ai: {
    heading: 'Ask across departments.',
    lede:
      'Verity AI reads the same student, faculty, course and fee records the institution runs on. It answers from your own college, respects permissions, and can turn an answer into assigned administrative work.',
    panelMeta: 'Grounded in your institutional records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which students have incomplete registration, and for what reason?',
      'Which faculty are above or below the workload norm?',
      'What is fee collection by category and department?',
      'Which students are allotted hostel places and which applications are unresolved?',
      'What are placement outcomes by department and programme?',
      'Which records are missing documentation required for accreditation?',
      'How does enrolment compare with capacity by programme?',
      'Which electives are over or under subscribed?',
      'Summarise the institution’s administrative position this semester.',
    ],
  },

  automationHeading: 'The deadlines a semester runs on.',
  automationLede:
    'Each runs from the institution’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'Registration remains incomplete as the deadline approaches',
      steps: [
        'Student flagged with the reason — elective, prerequisite or capacity',
        'Follow-up assigned to the department coordinator',
        'Escalated as the semester start approaches',
      ],
    },
    {
      trigger: 'Faculty load exceeds the workload norm',
      steps: [
        'Allocation flagged with the load against the norm',
        'Rebalancing task assigned to the department head',
        'Decision recorded against the allocation',
      ],
    },
    {
      trigger: 'A fee instalment passes its due date',
      steps: [
        'Balance aged on the student record by category',
        'Follow-up assigned with contact history attached',
        'Escalated past the second threshold',
      ],
    },
    {
      trigger: 'A hostel application is unresolved',
      steps: [
        'Application flagged against available capacity',
        'Allocation task assigned to the hostel office',
        'Allotment and fee component recorded',
      ],
    },
    {
      trigger: 'A record is missing accreditation documentation',
      steps: [
        'Exception raised with the missing item named',
        'Task assigned to the record owner',
        'Completeness state updated once satisfied',
      ],
    },
    {
      trigger: 'A placement drive is scheduled',
      steps: [
        'Eligible students identified from academic records',
        'Notification recorded against each student',
        'Applications and outcomes tracked to the offer',
      ],
    },
  ],

  intelligenceHeading: 'What the administration can actually see.',
  intelligenceLede:
    'Institutional performance from records the college creates as it runs.',
  intelligence: [
    {
      area: 'Academic administration',
      points: [
        'Enrolment by programme against capacity',
        'Registration completion and its blockers',
        'Elective subscription and capacity use',
        'Semester progression by cohort',
      ],
    },
    {
      area: 'Faculty',
      points: [
        'Workload against norms by faculty and department',
        'Qualification and allocation records',
        'Administrative responsibilities distributed',
        'Vacancies and unallocated requirements',
      ],
    },
    {
      area: 'Finance',
      points: [
        'Collection by fee category and department',
        'Outstanding with ageing bands',
        'Scholarships and concessions granted',
        'Hostel and transport fee components',
      ],
    },
    {
      area: 'Facilities',
      points: [
        'Hostel occupancy and allotment status',
        'Transport allocation and route use',
        'Infrastructure records for reporting',
        'Capacity against enrolment',
      ],
    },
    {
      area: 'Outcomes',
      points: [
        'Placement participation and offers by department',
        'Recruiter history across years',
        'Outcomes against academic performance',
        'Alumni records and engagement',
      ],
    },
    {
      area: 'Compliance',
      points: [
        'Documentation completeness by record type',
        'Accreditation data readiness',
        'Exceptions raised and time to close',
        'Access and change history',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds administrative records. Teaching, assessment and academic content stay in your existing academic systems.',

  rolesHeading: 'One institution, five different offices.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Principal or director',
      question: 'Is the institution running and reportable?',
      focus: 'Enrolment against capacity, registration completion, faculty load, collection, placement outcomes, accreditation readiness.',
    },
    {
      role: 'Head of department',
      question: 'Is my department staffed and registered?',
      focus: 'Registration blockers, faculty load against norms, elective subscription, allocations outstanding.',
    },
    {
      role: 'Administrator',
      question: 'What is stalled today?',
      focus: 'Incomplete registrations, documentation exceptions, hostel allotments, follow-ups due.',
    },
    {
      role: 'Accounts',
      question: 'What is collected across categories?',
      focus: 'Collection by fee category, ageing by student, scholarships approved, hostel and transport components.',
    },
    {
      role: 'Placement cell',
      question: 'Who is eligible and what happened?',
      focus: 'Drives scheduled, eligibility from academic records, applications and offers, recruiter history.',
    },
  ],

  useCasesHeading: 'What colleges use Verity for',
  useCases: [
    {
      name: 'One person record across departments',
      body: 'Students and faculty existing once rather than separately in academics, hostel, transport and fees.',
    },
    {
      name: 'Semester registration',
      body: 'Registration as work per student with prerequisites and capacity applied, so incomplete registrations surface with a reason before teaching starts.',
    },
    {
      name: 'Faculty workload against norms',
      body: 'Allocations measured against workload norms before they are finalised, addressing both the equity and the compliance question.',
    },
    {
      name: 'Fee collection across categories',
      body: 'Several fee structures aged on one student record, so collection is a single worked list rather than several inconsistent ones.',
    },
    {
      name: 'Hostel and transport allocation',
      body: 'Allotment and fee components recorded against the same student record as academics.',
    },
    {
      name: 'Placement outcome analysis',
      body: 'Applications, interviews and offers attached to the student, so outcomes are analysable against department, programme and performance.',
    },
    {
      name: 'Accreditation readiness',
      body: 'Documentation completeness as a reportable state, so a data request is an extract rather than a three-month reconciliation.',
    },
    {
      name: 'Asking across departments',
      body: 'Plain-language questions spanning registration, faculty, fees, facilities and outcomes, with work assigned in the same step.',
    },
  ],

  migration:
    'Academic delivery, assessment and examination systems continue to run and are mapped during implementation. Students, faculty, programmes, fee structures, hostel allocations and placement records are brought across, and Verity is introduced as the administrative layer.',

  faqHeading: 'Questions colleges ask',
  faqs: [
    [
      'Does Verity handle teaching or assessment?',
      'No. Academic delivery, assessment and examination systems stay where they are and are mapped during implementation. Verity handles administration — people, programmes, registration, faculty allocation, fees, facilities, placements and the reporting across them.',
    ],
    [
      'What can AI software do for a college?',
      'Verity AI answers questions from your own administrative records: which students have incomplete registration and why, which faculty are above the workload norm, what collection looks like by fee category, what placement outcomes look like by department. Each answer can become administrative work assigned to the right office.',
    ],
    [
      'How does it help with accreditation reporting?',
      'The data an accreditor asks for is the data the institution already runs on, held once on a single record model. That turns a request from a months-long reconciliation across departmental formats into an extract with documentation completeness reportable alongside it.',
    ],
    [
      'Can it manage semester registration?',
      'Registration is work per student with prerequisites and capacity applied automatically, so incomplete registrations surface with their reason and an owner before teaching starts rather than during the first week.',
    ],
    [
      'Does it track faculty workload?',
      'Teaching and administrative allocations are records against faculty measured against workload norms, so imbalance is visible before allocation is finalised rather than after someone raises it.',
    ],
    [
      'Can it handle several fee categories?',
      'Fee plans are generated by student category with their components, scholarships and concessions applied as approvals, and all of them age on one student record so collection is a single worked list.',
    ],
    [
      'Does it cover hostel and transport?',
      'Hostel and transport are locations with capacity, allotment and fee components recorded against the same student record as academics, which stops the student existing separately in each office.',
    ],
    [
      'Can placement outcomes be analysed?',
      'Applications, interviews and offers attach to the student record, so outcomes can be examined against department, programme and academic performance rather than existing only as a placement cell list.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the institution’s administrative structure, configuration of programmes and fee categories, migration of students, faculty and allocations, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with registration or with accreditation data.',
  ctaLede:
    'One decides whether the semester begins cleanly and the other consumes months. Tell us which is costing you more.',

  related: ['schools', 'universities', 'coaching-institutes', 'test-preparation-centres', 'skill-training-institutes', 'vocational-training-centres'],
};
