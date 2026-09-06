export default {
  slug: 'language-institutes',
  status: 'published',
  plural: 'language institutes',
  subject: 'language institute',

  seo: {
    title: 'AI business management software for language institutes | Verity',
    description:
      'Verity connects level-based class formation, teacher supply by language, certification exam pathways, corporate contracts and learner progression into one system.',
    keywords: [
      'AI software for language institutes',
      'language school management software',
      'level based class formation and progression',
      'certification exam and corporate contract tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for language institutes',
    headline: 'A class only forms if enough students reach the same level at the same time.',
    lede:
      'Language teaching is level-based, and level-based classes only exist when enrolment and progression line up. Verity tracks progression, forms classes and holds the exam pathway.',
    note: 'Verity runs the institute. Teaching materials and platforms stay where they are.',
    panel: {
      title: 'Institute',
      meta: 'Current cycle',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active learners', value: '640', note: 'across 4 languages' },
        { label: 'Classes below viable size', value: '6', note: 'levels with thin enrolment' },
        { label: 'Learners between levels', value: '84', note: 'completed, not re-enrolled' },
        { label: 'Exam entries due', value: '52', note: 'window in 4 weeks' },
      ],
      rows: [
        { name: '84 learners completed a level and not re-enrolled', meta: 'The cheapest enrolment the institute can get', active: true },
        { name: '6 classes below viable size', meta: 'Teacher committed for the cycle', active: true },
        { name: '52 certification entries due with the window in 4 weeks', meta: '17 without confirmed readiness', active: true },
        { name: 'One language dependent on a single teacher', meta: 'Three levels at risk', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own institute in this shape.',
    },
  },

  overview: {
    heading: 'Progression creates the demand and the demand has to arrive together.',
    paragraphs: [
      'A language institute teaches in levels. A learner finishes one level and needs the next, and the next class only runs if enough learners reach that level at roughly the same time with a teacher available for that language. Enrolment, progression and teacher supply have to align, and when they do not the learner stops.',
      'Eighty-four learners who completed a level and did not re-enrol is the institute’s single largest and cheapest opportunity. They have already demonstrated interest, already paid once, and are waiting for a class that may not have been formed.',
      'The second characteristic is teacher supply by language. A language with one qualified teacher has three levels resting on one person’s availability, which is a commercial risk that is invisible until they are unavailable.',
      'The third is certification. Many learners study toward external examinations with fixed entry windows, which makes readiness assessment a dated decision.',
      'The fourth is corporate contracts, which deliver groups on their own schedule with their own reporting requirements.',
      'Verity tracks progression to form classes, manages exam entry windows and holds corporate contracts.',
    ],
  },

  terminology: [
    ['Languages, levels, classes', 'Work'],
    ['Learners, corporate accounts, groups', 'Relationships'],
    ['Teachers, qualifications, availability', 'Workforce'],
    ['Progression, assessments, certifications', 'Workflows'],
    ['Materials, licences, resources', 'Records'],
    ['Centres, classrooms, online', 'Locations'],
    ['Fees, contracts, corporate terms', 'Control'],
  ],

  challengesHeading: 'Levels that must line up.',
  challengesLede:
    'Language institute difficulties come from progression, enrolment and teacher supply having to coincide.',
  challenges: [
    { problem: 'Learners complete a level and disappear', detail: 'The next class has not formed, and the learner who was ready to continue moves on.', outcome: 'Progression is a tracked state, so learners between levels are visible and contactable while the next class forms.' },
    { problem: 'Classes form below viable size', detail: 'A level runs with too few learners against a teacher committed for the cycle.', outcome: 'Enrolment against viability threshold is visible before the cycle starts, so merge, defer or proceed is a decision.' },
    { problem: 'Teacher supply constrains languages', detail: 'A language with one qualified teacher has every level resting on their availability.', outcome: 'Teacher qualification by language and level is recorded, so concentration is a measured risk.' },
    { problem: 'Certification windows close', detail: 'External examination entries have fixed deadlines and readiness is assessed late.', outcome: 'Entry deadlines and readiness assessments are dated records with owners.' },
    { problem: 'Corporate contracts run on their own terms', detail: 'Group programmes have schedules, reporting requirements and renewal dates handled ad hoc.', outcome: 'Contracts carry their schedule, deliverables, reporting and renewal dates.' },
    { problem: 'Progression is assessed inconsistently', detail: 'Whether a learner is ready for the next level depends on which teacher assesses them.', outcome: 'Assessments are recorded against the learner and level with consistent criteria.' },
  ],

  modulesLede: 'One system across levels, progression, teachers and contracts.',
  modules: [
    { id: 'work', title: 'Languages, levels and classes', line: 'Each class is work with a language, level, schedule, teacher, enrolment and viability threshold.', why: 'The class only exists if progression and teacher supply align.', example: 'Six classes below viable size against committed teacher cost.' },
    { id: 'workflows', title: 'Progression, assessment and certification', line: 'Level completion, progression assessment, exam entry and results are steps with owners and dates.', why: 'Progression creates the next enrolment and certification has fixed windows.', example: 'Fifty-two entries due with seventeen readiness assessments outstanding.' },
    { id: 'relationships', title: 'Learners, corporate accounts and groups', line: 'Learners carry their language, level history, progression state, fees and contact history; corporate accounts carry contracts and cohorts.', why: 'A learner between levels is the cheapest enrolment available.', example: 'Eighty-four learners completed and not re-enrolled.' },
    { id: 'workforce', title: 'Teachers, qualifications and availability', line: 'Teachers carry languages, levels they can teach, availability and current load.', why: 'Class formation is constrained by qualified teacher supply.', example: 'One language with three levels resting on a single teacher.' },
    { id: 'people', title: 'Teachers and administration', line: 'Staff are modelled once, with classes, assessments and entries attributed.', why: 'Progression and retention vary by teacher.', example: 'Progression rate by teacher and level.' },
    { id: 'records', title: 'Materials, licences and resources', line: 'Course materials, licences and resources attach to the level and class using them.', why: 'Material licences carry cost and scope that repeat each cycle.', example: 'Material licence cost per learner and level.' },
    { id: 'control', title: 'Fees, contracts and corporate terms', line: 'One permission model and one audit trail, with fee plans, discounts and corporate terms recorded.', why: 'Corporate and individual pricing differ and are negotiated separately.', example: 'Corporate rates recorded against the contract rather than remembered.' },
    { id: 'intelligence', title: 'Progression, formation and certification reporting', line: 'Progression and re-enrolment rates, class viability, teacher concentration, certification pass rates and corporate delivery come from the records.', why: 'The institute’s growth is progression, and progression is measurable.', example: 'Re-enrolment rate between levels by language and teacher.' },
    { id: 'ai', title: 'Ask the institute a question', line: 'Verity AI answers from your own learner, class, teacher and contract records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about learners between levels and classes that will not form.', example: '"Which learners completed a level and have not re-enrolled?" returns eighty-four.' },
    { id: 'communication', title: 'Learner and corporate contact', line: 'Progression conversations, entry decisions and corporate reporting attach to the learner or account.', why: 'A learner between levels needs a specific conversation about the next class.', example: 'A re-enrolment conversation recorded with the class being formed.' },
    { id: 'locations', title: 'Centres, classrooms and online', line: 'Locations and online delivery carry availability, capacity and class allocation.', why: 'Online delivery changes which classes can form across locations.', example: 'A level viable online across centres where it is not viable at one.' },
    { id: 'orders', title: 'Fees, instalments and corporate invoicing', line: 'Fees, instalments and corporate invoices are recorded against learners and accounts.', why: 'Individual and corporate billing follow different rhythms.', example: 'Corporate cohort invoicing against delivery milestones.' },
  ],

  workflowsHeading: 'Progress, form, teach, certify.',
  workflowsLede: 'These already happen. Recorded, progression stops leaking between levels.',
  workflows: [
    { name: 'Level completion to re-enrolment', steps: ['Level completion recorded with assessment', 'Learner marked as between levels', 'Next class formation status checked', 'Re-enrolment conversation assigned', 'Outcome recorded — enrolled, waiting or lost'], note: 'This is the cheapest enrolment the institute can get and the one most often lost by default.' },
    { name: 'Class formation', steps: ['Learners at a level aggregated across centres and online', 'Teacher qualified for that language and level identified', 'Enrolment tracked against the viability threshold', 'Merge, defer or proceed decision taken before the cycle', 'Class published and learners confirmed'], note: 'The decision can only be taken before the cycle starts.' },
    { name: 'Certification entry', steps: ['Examination window and entry deadline recorded', 'Readiness assessed against criteria', 'Entry decision made and recorded', 'Entry submitted and confirmed', 'Result recorded against the learner pathway'], note: 'A missed window delays the learner and often ends their engagement.' },
    { name: 'Corporate programme', steps: ['Contract recorded with cohort, schedule and reporting requirements', 'Cohort enrolled and levels assessed', 'Delivery tracked against the schedule', 'Progress reporting issued to the client', 'Renewal raised ahead of contract end'], note: 'Corporate reporting is part of the deliverable rather than an afterthought.' },
    { name: 'Teacher supply review', steps: ['Qualification coverage by language and level assessed', 'Concentration risk identified', 'Recruitment or training decisions raised', 'Availability planned against the coming cycle', 'Decisions recorded'], note: 'A language resting on one teacher is a risk that is only visible when measured.' },
  ],

  ai: {
    heading: 'Ask who is between levels.',
    lede: 'Verity AI reads the same learner, class, teacher and contract records the institute creates as it teaches. It answers from your own centres, respects permissions, and can turn an answer into conversations and class decisions.',
    panelMeta: 'Grounded in your institute records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which learners completed a level and have not re-enrolled?',
      'Which classes are below their viable size for the coming cycle?',
      'Which certification entries are due and which learners are unassessed?',
      'Which languages and levels depend on a single teacher?',
      'What is re-enrolment rate between levels by teacher?',
      'Which corporate contracts are due for renewal?',
      'Which levels would be viable if online and centre learners were combined?',
      'What is certification pass rate by level and teacher?',
      'Summarise progression and class formation.',
    ],
  },

  automationHeading: 'Progression and formation.',
  automationLede: 'Each runs from the institute’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A learner completes a level', steps: ['Marked as between levels', 'Next class formation status checked', 'Re-enrolment conversation assigned'] },
    { trigger: 'Class enrolment stays below viability', steps: ['Flagged with committed teacher cost', 'Merge, defer or proceed decision raised', 'Learners informed of the outcome'] },
    { trigger: 'A certification deadline approaches', steps: ['Learners on the pathway flagged', 'Readiness assessment assigned', 'Entry decision recorded before the deadline'] },
    { trigger: 'Teacher concentration exceeds threshold', steps: ['Language and levels at risk flagged', 'Recruitment or cross-training raised', 'Decision recorded'] },
    { trigger: 'A corporate contract approaches renewal', steps: ['Delivery and progress summarised', 'Renewal conversation assigned', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the institute can see.',
  intelligenceLede: 'Progression, formation and certification from the institute’s own records.',
  intelligence: [
    { area: 'Progression', points: ['Level completion and re-enrolment rates', 'Learners between levels and their age', 'Progression by teacher and language', 'Drop points in the level sequence'] },
    { area: 'Formation', points: ['Enrolment against viability by class', 'Classes merged, deferred or run below size', 'Combined viability across centres and online', 'Committed teacher cost against enrolment'] },
    { area: 'Certification', points: ['Entries against pathway learners', 'Readiness assessment completion', 'Pass rates by level and teacher', 'Windows met and missed'] },
    { area: 'Teachers', points: ['Qualification coverage by language and level', 'Concentration risk', 'Load and availability', 'Progression outcomes by teacher'] },
    { area: 'Corporate', points: ['Contracts, cohorts and schedules', 'Delivery against contracted sessions', 'Reporting issued', 'Renewal pipeline'] },
  ],
  intelligenceNote: 'Verity records the institute’s operations. Teaching materials and learning platforms continue as they are.',

  rolesHeading: 'One institute, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Director', question: 'Are learners progressing and classes forming?', focus: 'Re-enrolment rates, class viability, teacher concentration, corporate renewals.' },
    { role: 'Academic coordinator', question: 'Which classes can we run?', focus: 'Learners between levels, teacher qualification and availability, viability thresholds, certification entries.' },
    { role: 'Teacher', question: 'Where is this learner in the sequence?', focus: 'Level history and assessments, readiness for certification, class roster, progression notes.' },
    { role: 'Administration', question: 'Who needs contacting?', focus: 'Learners between levels, entry deadlines, corporate reporting, fees outstanding.' },
  ],

  useCasesHeading: 'What language institutes use Verity for',
  useCases: [
    { name: 'Between-level retention', body: 'Learners who completed a level tracked as a state, so the cheapest enrolment available is worked rather than lost by default.' },
    { name: 'Class formation decisions', body: 'Enrolment against viability with committed teacher cost, so merge or defer is decided before the cycle starts.' },
    { name: 'Combined viability', body: 'Learners aggregated across centres and online, so a level viable in combination is not cancelled at each site.' },
    { name: 'Certification pathways', body: 'Entry deadlines and readiness assessments as dated records, since a missed window often ends the engagement.' },
    { name: 'Teacher concentration risk', body: 'Qualification coverage by language and level, exposing dependencies before they become crises.' },
    { name: 'Corporate contract delivery', body: 'Schedules, reporting and renewal dates on the contract rather than handled ad hoc.' },
    { name: 'Asking about progression', body: 'Plain-language questions across learners, levels, teachers and contracts, with conversations assigned in the same step.' },
  ],

  migration: 'Teaching materials and learning platforms continue and are mapped during implementation. Learners with level history, teachers with qualifications, classes and corporate contracts are brought across.',

  faqHeading: 'Questions language institutes ask',
  faqs: [
    ['What can AI software do for a language institute?', 'Verity AI answers questions from your own learner, class, teacher and contract records: which learners completed a level and have not re-enrolled, which classes are below viable size, which certification entries are due, which languages depend on one teacher. Each answer can become a conversation or a class decision.'],
    ['Why is between-level retention so important?', 'Because a learner who finished a level has already demonstrated interest and already paid once. They are the cheapest enrolment the institute can get, and they are usually lost because the next class had not formed when they were ready.'],
    ['How does class formation work?', 'Learners at a level are aggregated across centres and online, matched against qualified teacher availability, and tracked against a viability threshold based on committed teacher cost — so merge, defer or proceed is decided before the cycle starts.'],
    ['Can it handle certification pathways?', 'External examination windows and entry deadlines are recorded with readiness assessments assigned ahead of them, so entry decisions are made in time rather than after the window closes.'],
    ['Does it surface teacher risk?', 'Qualification coverage by language and level is recorded, so a language with three levels resting on a single teacher is a measured risk rather than something discovered when they are unavailable.'],
    ['Can it manage corporate contracts?', 'Contracts carry cohorts, schedules, delivery, reporting requirements and renewal dates, so corporate reporting is part of the deliverable rather than assembled when asked.'],
    ['Does Verity replace teaching materials?', 'No. Materials and learning platforms continue and are mapped during implementation. Verity holds learners, levels, classes, teachers, certification and contracts.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of level structures, viability thresholds and certification pathways, configuration, migration of learners and teachers, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the learners between levels.',
  ctaLede: 'They already want the next class. Tell us how progression is tracked today.',

  related: ['coaching-institutes', 'skill-training-institutes', 'music-schools', 'tuition-centres', 'edtech-companies', 'schools'],
};
