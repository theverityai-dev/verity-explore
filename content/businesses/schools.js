export default {
  slug: 'schools',
  status: 'published',
  plural: 'schools',
  subject: 'school',

  seo: {
    title: 'AI business management software for schools | Verity',
    description:
      'Verity connects admissions, student and staff records, fee follow-up, administrative workflows, documentation and reporting into one system for schools.',
    keywords: [
      'AI software for schools',
      'school management software',
      'school administration system',
      'admissions and fee management software',
      'school reporting and record management',
    ],
  },

  hero: {
    eyebrow: 'Verity for schools',
    headline: 'The same child exists in five systems, and none of them agree.',
    lede:
      'Admissions, academic records, fees, transport and communication each acquire their own register, and no two share a person. Verity holds the people, the work and the records on one model with one history.',
    note: 'Verity manages school administration. It is not a teaching or assessment platform.',
    panel: {
      title: 'Administration',
      meta: 'Current term',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Students', value: '1,284', note: 'across 34 sections' },
        { label: 'Fees outstanding', value: '₹41.6 L', note: '186 families' },
        { label: 'Admissions in progress', value: '92', note: '31 awaiting documents' },
        { label: 'Staff records incomplete', value: '14', note: 'flagged at review' },
      ],
      rows: [
        { name: '31 admissions stalled on missing documents', meta: 'Oldest 24 days · no owner assigned', active: true },
        { name: '58 families past the second fee reminder', meta: '₹18.4 L · no follow-up recorded', active: true },
        { name: 'Two sections without an assigned class teacher', meta: 'Since the start of term', active: true },
        { name: 'Transport route change not communicated', meta: '46 families affected', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own administration in this shape.',
    },
  },

  overview: {
    heading: 'A school is several parallel operations that never share a record.',
    paragraphs: [
      'A school runs admissions, staffing and timetabling, fee collection, record-keeping, parent communication and reporting to boards or regulators — all at once, all year, and all about the same population of people. Each of those functions tends to acquire its own system or register, and almost none of them share a single person record.',
      'The result is that a student exists in the admissions file, again in the fee ledger, again in the academic register and again in the transport list, and any question that spans two of them is answered by a member of staff with a spreadsheet and an afternoon. The same is true of parents, who are contacted from three different systems and asked for the same document twice.',
      'The recurring administrative failures follow from this. Admissions stall on a missing document that nobody owns. Fee follow-up depends on someone maintaining a list. Staff workload is distributed by habit rather than by what the records show. Compliance reporting becomes an annual project because the data was never held in one place to begin with.',
      'Verity holds people, work, records, workflows, communication and control on one model. A student, their family, their fee position, their documentation and the administrative work around them are connected records with one permission layer and one history — which is what makes the cross-cutting question answerable without a spreadsheet.',
    ],
  },

  terminology: [
    ['Students, parents, alumni', 'Relationships'],
    ['Teachers, administrators, support staff', 'People'],
    ['Admissions, transfers, document checks', 'Work'],
    ['Records, certificates, consents', 'Records'],
    ['Approvals, escalations, verification', 'Workflows'],
    ['Circulars, notices, parent updates', 'Communication'],
    ['Campuses, blocks, sections', 'Locations'],
  ],

  challengesHeading: 'The administrative load is where the time goes.',
  challengesLede:
    'None of these are teaching problems. All of them consume the staff who could otherwise be supporting teaching.',
  challenges: [
    {
      problem: 'The same person exists several times',
      detail:
        'A student in admissions, in the fee ledger and in the academic register is three records that never reconcile, so nothing can be asked across them.',
      outcome:
        'One person record referenced by every function, so the fee position, the documents and the administrative history are the same record.',
    },
    {
      problem: 'Admissions stall on documents nobody owns',
      detail:
        'An application waits on a missing certificate. It is not anyone’s task, so it sits until a parent calls.',
      outcome:
        'Each admission is work with a state and an owner, and a missing document is an exception with a person responsible for chasing it.',
    },
    {
      problem: 'Fee follow-up is manual and uncomfortable',
      detail:
        'Chasing outstanding fees depends on someone maintaining a list, working through it and remembering who was already contacted.',
      outcome:
        'Outstanding balances sit on the family record with ageing and the history of contact, so follow-up is a worked list rather than a reconstruction.',
    },
    {
      problem: 'Staff workload is uneven and unmeasured',
      detail:
        'Teaching and administrative responsibilities accumulate by habit, and nobody can say who is carrying too much until they say so themselves.',
      outcome:
        'Responsibilities and assigned work are records against people, so distribution is visible rather than assumed.',
    },
    {
      problem: 'Parent communication goes out from three places',
      detail:
        'Circulars, fee reminders and transport notices originate in different systems, so families receive duplicates and staff have no record of what was sent.',
      outcome:
        'Communication attaches to the record it concerns, so what was sent, to whom and when is part of the history.',
    },
    {
      problem: 'Compliance reporting is an annual scramble',
      detail:
        'Data that should be a query becomes a project, because it was assembled from registers that were never designed to be queried.',
      outcome:
        'Reports are drawn from live records, so the annual submission is an extract rather than an exercise.',
    },
  ],

  modulesLede:
    'Verity handles school administration. These are the parts a school works with; teaching and assessment stay where they are.',
  modules: [
    {
      id: 'people',
      title: 'Students, staff and families',
      line:
        'Every person is one record with their role, relationships, responsibilities and history, referenced by every other part of the system.',
      why:
        'The duplicate person record is the root cause of almost every administrative inefficiency in a school.',
      example:
        'A student, their two guardians and their sibling are connected records, so a fee reminder goes to the family rather than three times to the same household.',
    },
    {
      id: 'work',
      title: 'Admissions, transfers and administrative tasks',
      line:
        'Each is work with an owner, a state and a due date, connected to the person and documents it concerns.',
      why:
        'Administrative work in a school fails by stalling rather than by going wrong, and stalling is only visible if the work is a record.',
      example:
        'Ninety-two admissions in progress, thirty-one waiting on documents, each with the person responsible for the next step.',
    },
    {
      id: 'records',
      title: 'Certificates, consents and documentation',
      line:
        'Documents attach to the person or process they belong to, with completeness held as a state and retention following the same permission model.',
      why:
        'Schools carry long retention obligations for records about minors, and retrieval is always urgent when it happens.',
      example:
        'A transfer certificate request for a student who left four years ago is a lookup rather than a search of a store room.',
    },
    {
      id: 'relationships',
      title: 'Families, guardians and alumni',
      line:
        'Families are records with their students, contact history, fee position and the communications they have received.',
      why:
        'The school’s relationship is with a household, not with a row in a register, and most friction with parents comes from the school not behaving as though it knows that.',
      example:
        'A family with two children is one record, so their combined fee position and their contact history are in one place.',
    },
    {
      id: 'workflows',
      title: 'Approvals, verification and escalation',
      line:
        'Admission decisions, fee concessions, document verification and exceptions move through defined steps with a recorded decision.',
      why:
        'Concessions and exceptions in schools are frequent, discretionary and rarely documented, which is what makes them contentious later.',
      example:
        'A fee concession is an approval with a requester, a reason and a decision on the record rather than an understanding between two people.',
    },
    {
      id: 'communication',
      title: 'Circulars, notices and parent contact',
      line:
        'Comments, notifications and activity attach to the record they concern, so the history of contact is part of the record.',
      why:
        'Parent communication that leaves no trace produces the two most common complaints in school administration: not being told, and being told repeatedly.',
      example:
        'A transport route change is recorded against the affected families, so who was notified and when is answerable.',
    },
    {
      id: 'control',
      title: 'Permissions and audit trail',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Records about minors carry access obligations, and a school has a large number of staff with varying entitlements.',
      example:
        'Class teachers see their sections, the accounts office sees fee positions, the principal sees everything, and every access is recorded.',
    },
    {
      id: 'locations',
      title: 'Campuses, blocks and sections',
      line:
        'Locations and organisational units roll into the institution, with permissions, reporting and exceptions following the same structure.',
      why:
        'A group of schools or a multi-campus institution cannot compare anything unless every campus records it identically.',
      example:
        'Admissions, fee collection and staffing by campus, from one set of records rather than three submissions.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from live records',
      line:
        'Admissions progress, fee collection and ageing, staff distribution, documentation completeness and campus comparison come from the operational records themselves.',
      why:
        'School reporting is usually retrospective and manual, which is why it is done annually rather than when it would be useful.',
      example:
        'Fee collection against the term’s expectation, current, rather than at the point the shortfall becomes a problem.',
    },
    {
      id: 'ai',
      title: 'Ask the administration a question',
      line:
        'Verity AI answers from the school’s own operational records, only shows what the person asking is permitted to see, and can create assigned follow-ups.',
      why:
        'The useful questions in a school span admissions, fees, staffing and documentation at once, which is exactly what no single register can answer.',
      example:
        '"Which admissions are stalled on documents, and for how long?" returns thirty-one, and one instruction assigns the chasing.',
    },
    {
      id: 'commandCentre',
      title: 'The term as it is running',
      line:
        'One live view of what is moving, what is blocked, who owns it and what needs attention.',
      why:
        'Most school administration problems are visible only when someone complains, which is far too late to act cheaply.',
      example:
        'Admissions stalled, fees overdue, sections without a teacher and documentation exceptions in one view.',
    },
    {
      id: 'workforce',
      title: 'Staff assignment and availability',
      line:
        'Assignment, attendance and availability stay connected to the responsibilities they cover.',
      why:
        'A section without a class teacher, or a substitution that never happened, is an operational failure with immediate consequences.',
      example:
        'Two sections without an assigned class teacher, flagged at the start of term rather than noticed in week four.',
    },
  ],

  workflowsHeading: 'The administrative year, recorded as it runs.',
  workflowsLede:
    'These already happen in your school. In Verity each step has an owner and a state, so the ones that stall are visible.',
  workflows: [
    {
      name: 'Admission enquiry to enrolment',
      steps: [
        'Enquiry recorded against a family record',
        'Application created as work with an owner',
        'Required documents listed and their receipt tracked',
        'Verification completed and exceptions raised for gaps',
        'Admission decision routed for approval',
        'Student record created and linked to the family',
        'Section assigned and enrolment completed',
      ],
      note:
        'A stalled application has an owner and an age, which is the difference between a delay and a loss.',
    },
    {
      name: 'Fee cycle and follow-up',
      steps: [
        'Fee expectation raised against each family for the term',
        'Payments recorded and applied to the family balance',
        'Outstanding balances aged automatically',
        'Reminders recorded against the family with what was sent',
        'Follow-up assigned where balances pass the threshold',
        'Concessions and adjustments routed for approval',
      ],
      note:
        'Follow-up works from the record of what was already sent, so families are not chased twice or missed entirely.',
    },
    {
      name: 'Staff assignment for a term',
      steps: [
        'Sections and responsibilities listed for the term',
        'Staff assigned against each with the load recorded',
        'Unassigned responsibilities flagged as exceptions',
        'Leave and unavailability applied',
        'Substitutions recorded against the responsibility they cover',
      ],
      note:
        'Distribution of load becomes visible before the term rather than after a staff member raises it.',
    },
    {
      name: 'Document verification and retention',
      steps: [
        'Required documents defined per record type',
        'Receipt and verification recorded against each',
        'Gaps raised as exceptions with an owner',
        'Completeness state updated once satisfied',
        'Retention and retrieval handled through the same record',
      ],
      note:
        'Completeness becomes reportable, which is what turns an audit into an extract.',
    },
    {
      name: 'Parent communication',
      steps: [
        'Audience identified from the records — a section, a route, a year group',
        'Communication recorded against each family it went to',
        'Responses and queries attached to the same records',
        'Follow-up created where a response is required',
      ],
      note:
        'The record of what was sent to whom is what prevents both duplicate notices and missed ones.',
    },
    {
      name: 'Term-end reporting',
      steps: [
        'Enrolment, admissions and withdrawals pulled from records',
        'Fee collection and outstanding aged by family',
        'Staff assignment and load compiled',
        'Documentation completeness reported by record type',
        'Actions raised against the exceptions with owners',
      ],
      note:
        'The report is an extract from live records rather than a compilation exercise across registers.',
    },
  ],

  ai: {
    heading: 'Ask across admissions, fees and staffing at once.',
    lede:
      'Verity AI reads the same person, work, record and communication data the administration runs on. It answers from the school’s own records, respects each user’s permissions, and can turn an answer into work assigned to the right person.',
    panelMeta: 'Grounded in your administrative records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which admissions are stalled on documents, and for how long?',
      'Which families are past the second fee reminder with no follow-up recorded?',
      'How much of this term’s fee expectation has been collected?',
      'Which sections have no assigned class teacher?',
      'Which student records are missing required documentation?',
      'Which staff members are carrying the most assigned responsibilities?',
      'How does admission conversion compare with last year at this point?',
      'Which families were notified about the transport change?',
      'Summarise this term’s administrative position.',
    ],
  },

  automationHeading: 'The chasing that fills the office day.',
  automationLede:
    'These run from the administrative records at the moment the condition occurs.',
  automations: [
    {
      trigger: 'An admission is waiting on a document',
      steps: [
        'Exception raised against the application with the missing item',
        'Follow-up assigned to the admissions owner',
        'Family contacted and the contact recorded',
        'Escalated if the application ages past the threshold',
      ],
    },
    {
      trigger: 'A family balance passes its due date',
      steps: [
        'Balance aged on the family record',
        'Reminder recorded against the family',
        'Follow-up assigned once the second threshold passes',
        'Concession requests routed for approval',
      ],
    },
    {
      trigger: 'A responsibility has no staff member assigned',
      steps: [
        'Gap flagged against the section or duty',
        'Assignment task created for the coordinator',
        'Escalated as the term start approaches',
      ],
    },
    {
      trigger: 'A record is missing required documentation',
      steps: [
        'Exception raised with the missing items listed',
        'Task assigned to the record owner',
        'Completeness state updated once satisfied',
      ],
    },
    {
      trigger: 'A staff member records leave',
      steps: [
        'Affected responsibilities identified',
        'Substitution task created for each',
        'Coverage confirmed before the date',
      ],
    },
    {
      trigger: 'A student withdrawal is recorded',
      steps: [
        'Exit checklist created with document and clearance steps',
        'Fee position reconciled and settled',
        'Transfer documentation issued and recorded',
      ],
    },
  ],

  intelligenceHeading: 'What the principal and the office can see.',
  intelligenceLede:
    'Administrative performance drawn from the records the school creates as it works.',
  intelligence: [
    {
      area: 'Admissions',
      points: [
        'Applications by stage and by age',
        'Applications stalled and the reason',
        'Conversion from enquiry to enrolment',
        'Comparison against the same point last year',
      ],
    },
    {
      area: 'Fees',
      points: [
        'Collection against expectation for the term',
        'Outstanding by family with ageing bands',
        'Follow-up contact history and outcomes',
        'Concessions granted and their approval trail',
      ],
    },
    {
      area: 'Enrolment',
      points: [
        'Students by section, year and campus',
        'Withdrawals and their recorded reasons',
        'Sibling and family relationships',
        'Capacity against enrolment',
      ],
    },
    {
      area: 'Staff',
      points: [
        'Responsibilities assigned per person',
        'Unassigned duties and sections',
        'Leave, substitution and coverage',
        'Distribution of administrative load',
      ],
    },
    {
      area: 'Records',
      points: [
        'Documentation completeness by record type',
        'Exceptions raised and time to close',
        'Access and change history',
        'Retention status on archived records',
      ],
    },
    {
      area: 'Communication',
      points: [
        'What was sent, to which families and when',
        'Responses and queries received',
        'Follow-ups outstanding from communications',
        'Families with repeated unresolved queries',
      ],
    },
  ],
  intelligenceNote:
    'These are administrative records. Verity does not hold academic assessment or teaching content.',

  rolesHeading: 'One institution, five different offices.',
  rolesLede:
    'Everyone works from the same records, and each role opens on the question they need answered.',
  roles: [
    {
      role: 'Principal',
      question: 'Is the institution running as it should?',
      focus: 'Enrolment against capacity, admissions progress, fee collection, staff load, exceptions outstanding.',
    },
    {
      role: 'Administrator',
      question: 'What is stalled today?',
      focus: 'Admissions waiting on documents, unassigned responsibilities, documentation exceptions, follow-ups due.',
    },
    {
      role: 'Accounts',
      question: 'What has been collected and what is owed?',
      focus: 'Fee collection against expectation, ageing by family, follow-up history, concessions awaiting approval.',
    },
    {
      role: 'Admissions',
      question: 'Where is each application?',
      focus: 'Applications by stage and age, missing documents, verification steps, conversion against last year.',
    },
    {
      role: 'Coordinator',
      question: 'Is every section and duty covered?',
      focus: 'Staff assignment, leave and substitution, unassigned responsibilities, load distribution.',
    },
  ],

  useCasesHeading: 'What schools use Verity for',
  useCases: [
    {
      name: 'One person record',
      body: 'Students, guardians, siblings and staff as single records referenced by every function, ending the duplicate-register problem.',
    },
    {
      name: 'Admissions pipeline',
      body: 'Applications as work with owners, states and document checklists, so a stalled application is visible with its age and its reason.',
    },
    {
      name: 'Fee follow-up',
      body: 'Balances aged on the family record with the history of what was already sent, so chasing is a worked list rather than a reconstruction.',
    },
    {
      name: 'Document and certificate management',
      body: 'Documentation attached to the person it belongs to with completeness as a reportable state and retrieval as a lookup.',
    },
    {
      name: 'Staff assignment and coverage',
      body: 'Responsibilities, leave and substitution as records, so unassigned sections and uneven load are visible before they become complaints.',
    },
    {
      name: 'Parent communication history',
      body: 'What was sent, to which families and when, recorded against the family so notices are neither duplicated nor missed.',
    },
    {
      name: 'Approvals and concessions',
      body: 'Fee concessions, admission decisions and exceptions as approval steps with reasons on the record.',
    },
    {
      name: 'Multi-campus reporting',
      body: 'Campuses as locations rolling into the institution, so comparison is one set of records rather than three submissions.',
    },
    {
      name: 'Asking the administration questions',
      body: 'Plain-language questions spanning admissions, fees, staffing and records at once, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'The admissions file, the fee register, the staff list and the document store are mapped during implementation, the records that matter are migrated, and Verity is introduced alongside whatever academic or assessment tools the school already uses.',

  faqHeading: 'Questions schools ask',
  faqs: [
    [
      'Is Verity a teaching or assessment platform?',
      'No. Verity handles school administration — the people, the admissions, the fees, the documentation, the staff assignment, the communication history and the reporting across them. Teaching, assessment and academic content stay in whatever the school already uses.',
    ],
    [
      'What can AI software do for a school?',
      'Verity AI answers administrative questions from the school’s own records: which admissions are stalled and why, which families are past reminders with no follow-up recorded, which sections have no assigned teacher, which records are missing documents. It can turn each answer into work assigned to the right member of staff.',
    ],
    [
      'Can Verity manage fee follow-up?',
      'Yes. Fee expectations and payments sit on the family record with automatic ageing and the history of every reminder sent, so follow-up is a worked list with context rather than a spreadsheet someone maintains by hand.',
    ],
    [
      'Does it handle admissions?',
      'Applications are work with an owner, a state and a document checklist, so an application waiting on a certificate is visible with its age and the person responsible for chasing it, rather than sitting until a parent calls.',
    ],
    [
      'Can we control who sees student records?',
      'Verity has one permission model and one audit trail across every record. Access is set by role — class teachers to their sections, accounts to fee positions, the principal to everything — and every access or change is recorded.',
    ],
    [
      'Does it work for a group with several campuses?',
      'Yes. Campuses are locations that roll into the institution with permissions and reporting following the same structure, so admissions, collection and staffing are comparable across sites without separate submissions.',
    ],
    [
      'Can Verity track parent communication?',
      'Communications are recorded against the family they were sent to, so what went out, to whom and when is part of the record. That is what prevents both duplicate notices and families who were never told.',
    ],
    [
      'Will this replace our existing school software?',
      'Not necessarily. Verity is introduced as the administrative layer over what already runs. Existing systems are mapped during implementation and can continue while Verity takes over the operational side.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the school actually operates, configuration, migration of student, family and staff records, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with admissions or with fees.',
  ctaLede:
    'Those two consume most of a school office’s year. Tell us which is costing you more time and we will show you what it looks like in Verity.',

  related: ['colleges', 'coaching-institutes', 'tuition-centres', 'test-preparation-centres', 'universities', 'skill-training-institutes'],
};
