export default {
  slug: 'music-schools',
  status: 'published',
  plural: 'music schools',
  subject: 'music school',

  seo: {
    title: 'AI business management software for music schools | Verity',
    description:
      'Verity connects individual lesson scheduling, teacher and room resources, grade examination pathways, instrument hire and recital planning into one system.',
    keywords: [
      'AI software for music schools',
      'music school management software',
      'lesson scheduling and teacher allocation',
      'grade exam pathway and instrument hire tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for music schools',
    headline: 'A student who misses the grade exam window waits another six months.',
    lede:
      'Music teaching runs on individual lessons toward examination windows that do not move. Verity manages the schedule, the pathway and the instruments that support both.',
    note: 'Sized for a school where the principal also teaches.',
    panel: {
      title: 'School',
      meta: 'This term',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Students', value: '186', note: 'across 9 teachers' },
        { label: 'Grade entries due', value: '38', note: 'window closes in 3 weeks' },
        { label: 'Lessons owed', value: '46', note: 'make-ups outstanding' },
        { label: 'Instruments on hire', value: '31', note: '6 overdue for return' },
      ],
      rows: [
        { name: '38 grade entries due with the window closing in 3 weeks', meta: '11 students not yet confirmed as ready', active: true },
        { name: '46 make-up lessons owed, oldest 7 weeks', meta: 'Parents track these precisely', active: true },
        { name: '6 hired instruments overdue for return', meta: 'Unavailable to new students', active: true },
        { name: 'Recital programme not confirmed', meta: 'Venue booked, running order open', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own school in this shape.',
    },
  },

  overview: {
    heading: 'Individual teaching toward fixed examination windows.',
    paragraphs: [
      'A music school teaches one student at a time, usually on a weekly slot with a specific teacher, working toward graded examinations that occur in windows set by an external board. Those windows do not move, and a student who is not entered in time waits months for the next one.',
      'That makes entry readiness a scheduling and teaching question with a hard deadline. Thirty-eight entries due with eleven students not yet confirmed ready, three weeks from the window closing, is a decision that has to be made now.',
      'The second characteristic is make-up lessons. Individual teaching produces cancellations from both sides, and every cancellation by the school creates an owed lesson that parents track precisely. Forty-six owed lessons, the oldest seven weeks, is a delivery obligation and a reputational one.',
      'The third is instruments. Schools hire instruments to students, and an instrument that does not come back is unavailable to the next student and usually unrecorded as missing.',
      'The fourth is performance. Recitals and concerts are a real part of the school’s value and require programme, venue and preparation coordination.',
      'Verity manages lesson delivery and make-ups, tracks the examination pathway and holds the instrument hire.',
    ],
  },

  terminology: [
    ['Lessons, make-ups, terms', 'Work'],
    ['Students, parents, families', 'Relationships'],
    ['Teachers, rooms, availability', 'Workforce'],
    ['Grades, entries, examination windows', 'Workflows'],
    ['Instruments, hire, accessories', 'Inventory'],
    ['Recitals, concerts, programmes', 'Work'],
    ['Studios, rooms, venues', 'Locations'],
  ],

  challengesHeading: 'Fixed windows, owed lessons, hired instruments.',
  challengesLede:
    'Music school difficulties come from individual delivery against external deadlines with equipment on loan.',
  challenges: [
    { problem: 'Examination windows close on unready students', detail: 'Entry decisions are made late and a student who misses the window waits months.', outcome: 'Entry deadlines and readiness assessments are records with owners, raised well before the window closes.' },
    { problem: 'Make-up lessons accumulate', detail: 'Every school cancellation creates an owed lesson, and parents track them exactly while the school does not.', outcome: 'Make-ups are records with an age, scheduled against teacher availability.' },
    { problem: 'Hired instruments do not return', detail: 'An instrument on loan is unavailable to the next student and rarely recorded as overdue.', outcome: 'Hire records carry return dates and condition, so overdue instruments are visible.' },
    { problem: 'Teacher and room availability constrain scheduling', detail: 'Individual lessons need a specific teacher and a room, and matching is done by memory.', outcome: 'Teacher and room availability are recorded, so scheduling and make-ups are matched rather than remembered.' },
    { problem: 'Progress is discussed without a record', detail: 'A parent asks how their child is progressing and the answer depends on which teacher is asked.', outcome: 'Lesson notes and grade progress sit on the student record.' },
    { problem: 'Recital coordination is manual', detail: 'Programme, running order, venue and preparation are coordinated by message close to the date.', outcome: 'Recitals are work with participants, programme, requirements and owners.' },
  ],

  modulesLede: 'One system across lessons, grades, instruments and performance.',
  modules: [
    { id: 'work', title: 'Lessons, make-ups and terms', line: 'Each lesson is work with a student, teacher, room, slot and delivery state; school cancellations create make-up obligations.', why: 'The lesson is the product and the make-up is the debt it creates.', example: 'Forty-six make-ups owed with the oldest seven weeks.' },
    { id: 'workflows', title: 'Grades, entries and examination windows', line: 'Examination windows, entry deadlines, readiness assessments and results are steps with owners and dates.', why: 'The window is external and does not move.', example: 'Thirty-eight entries due with eleven readiness assessments outstanding.' },
    { id: 'workforce', title: 'Teachers, rooms and availability', line: 'Teacher and room availability, specialisms and current load are recorded against lessons.', why: 'An individual lesson needs a specific teacher and a room at the same time.', example: 'Make-ups matched to teacher and room availability rather than negotiated.' },
    { id: 'inventory', title: 'Instruments, hire and accessories', line: 'Instruments carry condition, hire state, student, return date and service history.', why: 'A hired instrument is an asset outside the school and often uncounted.', example: 'Six instruments overdue for return and unavailable to new students.' },
    { id: 'relationships', title: 'Students, parents and families', line: 'Students carry their lessons, teacher, grade pathway, progress notes, instrument hire and fee position under the family record.', why: 'A family with two students is one relationship and one account.', example: 'Siblings under one family with one balance.' },
    { id: 'records', title: 'Lesson notes and progress', line: 'Notes on what was covered and grade progress attach to the student.', why: 'The parent conversation about progress is the school’s main retention tool.', example: 'A parent question answered from the last six lessons.' },
    { id: 'people', title: 'Teachers and administration', line: 'Staff are modelled once, with lessons, make-ups, entries and recital roles attributed.', why: 'Retention and grade success both vary by teacher.', example: 'Grade pass rate and retention by teacher.' },
    { id: 'intelligence', title: 'Delivery, pathway and hire reporting', line: 'Lessons delivered against scheduled, make-ups owed, entry and pass rates, instrument utilisation and fee position come from the records.', why: 'The school’s obligations and its educational outcomes are both recordable.', example: 'Delivered against scheduled lessons by teacher and term.' },
    { id: 'ai', title: 'Ask the school a question', line: 'Verity AI answers from your own lesson, student, grade and instrument records, respects permissions, and can create assigned follow-ups.', why: 'The principal teaches most of the day and needs an answer rather than a report.', example: '"Which students need entry decisions before the window closes?" returns eleven.' },
    { id: 'communication', title: 'Parent contact recorded', line: 'Reschedules, progress conversations and entry decisions attach to the student or family.', why: 'Scheduling and progress conversations happen over messages and are the only version of the truth.', example: 'A reschedule agreed with a parent, recorded on the lesson.' },
    { id: 'locations', title: 'Studios, rooms and venues', line: 'Rooms and external venues are locations with availability and requirements.', why: 'Room availability constrains lessons and venues constrain recitals.', example: 'Room occupancy against lesson demand by hour.' },
    { id: 'orders', title: 'Fees, terms and hire charges', line: 'Term fees, lesson adjustments and instrument hire charges are recorded against the family.', why: 'Fees adjusted for undelivered lessons need a visible calculation.', example: 'Term fee raised against lessons actually delivered.' },
  ],

  workflowsHeading: 'Lessons, grades and instruments.',
  workflowsLede: 'These already happen. Recorded, the obligations and the deadlines both become visible.',
  workflows: [
    { name: 'Lesson delivery and make-up', steps: ['Lesson delivered and attendance recorded', 'Notes on what was covered added', 'Cancellation recorded with who cancelled', 'Make-up obligation created where the school cancelled', 'Make-up scheduled against teacher and room availability'], note: 'Parents track owed lessons precisely; the school should be able to as well.' },
    { name: 'Grade entry pathway', steps: ['Examination windows and entry deadlines recorded', 'Readiness assessed ahead of the deadline', 'Entry decision made and recorded', 'Entry submitted and confirmed', 'Result recorded against the student pathway'], note: 'A missed window costs months, which makes the readiness decision urgent well before the deadline.' },
    { name: 'Instrument hire', steps: ['Instrument issued with condition and return date recorded', 'Hire charge applied to the family account', 'Return date monitored with reminders', 'Return received and condition checked', 'Service or repair raised where required'], note: 'An instrument out beyond its return date is unavailable to a new student.' },
    { name: 'Term scheduling', steps: ['Student requirements and teacher availability matched', 'Slots assigned for the term', 'Room availability confirmed', 'Schedule published to families', 'Changes recorded against the lesson'], note: 'Individual scheduling with room and teacher constraints is genuinely hard to hold in memory.' },
    { name: 'Recital and performance', steps: ['Event recorded with venue, date and participants', 'Programme and running order built', 'Preparation lessons and requirements assigned', 'Equipment and room needs confirmed', 'Event delivered and outcomes recorded'], note: 'Performance is part of the school’s value and is usually coordinated by message.' },
  ],

  ai: {
    heading: 'Ask about windows and owed lessons.',
    lede: 'Verity AI reads the same lesson, student, grade and instrument records the school creates as it teaches. It answers from your own school, respects permissions, and can turn an answer into scheduling and decisions.',
    panelMeta: 'Grounded in your school records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which students need entry decisions before the window closes?',
      'Which make-up lessons are owed and unscheduled?',
      'Which hired instruments are overdue for return?',
      'What is delivered against scheduled by teacher this term?',
      'Which students have not progressed a grade in over a year?',
      'What is teacher and room utilisation by hour?',
      'Which families have fees outstanding against delivered lessons?',
      'Which students are confirmed for the recital programme?',
      'Summarise delivery, entries and hire.',
    ],
  },

  automationHeading: 'Deadlines and obligations.',
  automationLede: 'Each runs from the school’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An examination entry deadline approaches', steps: ['Students on the pathway flagged', 'Readiness assessment assigned to the teacher', 'Entry decision recorded before the deadline'] },
    { trigger: 'The school cancels a lesson', steps: ['Make-up obligation created', 'Scheduling task raised with availability attached', 'Ageing tracked until delivered'] },
    { trigger: 'A hired instrument passes its return date', steps: ['Flagged with student and condition', 'Return chase assigned', 'Availability updated on return'] },
    { trigger: 'A term fee falls due', steps: ['Lessons delivered counted for the period', 'Adjustment applied for undelivered lessons', 'Fee raised with the calculation shown'] },
    { trigger: 'A recital date approaches', steps: ['Participants and programme confirmed', 'Preparation requirements assigned', 'Venue and equipment needs checked'] },
  ],

  intelligenceHeading: 'What the principal can see.',
  intelligenceLede: 'Delivery, pathway and assets from lessons already taught.',
  intelligence: [
    { area: 'Delivery', points: ['Lessons scheduled against delivered', 'Cancellations by originator', 'Make-ups owed and their age', 'Delivery rate by teacher'] },
    { area: 'Pathway', points: ['Grade entries and outcomes by student', 'Progression rate and time between grades', 'Entry deadlines met', 'Pass rate by teacher and grade'] },
    { area: 'Instruments', points: ['Hire status and return dates', 'Overdue instruments', 'Condition and service history', 'Utilisation of the hire stock'] },
    { area: 'Capacity', points: ['Teacher availability against demand', 'Room utilisation by hour', 'Waiting students by instrument', 'Term slot fill'] },
    { area: 'Commercial', points: ['Fees against lessons delivered', 'Hire charges and balances', 'Retention across terms', 'Family accounts and siblings'] },
  ],
  intelligenceNote: 'All of it comes from recording the lesson, the entry and the instrument, which the school does anyway.',

  rolesHeading: 'A small school, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Principal', question: 'Are we delivering and progressing students?', focus: 'Delivered against scheduled, make-ups owed, grade progression, retention across terms.' },
    { role: 'Teacher', question: 'Who am I seeing and where are they?', focus: 'Today’s lessons, student progress notes, grade readiness, make-ups assigned.' },
    { role: 'Administration', question: 'What is owed and what is due?', focus: 'Make-ups to schedule, entry deadlines, instruments overdue, fees outstanding.' },
  ],

  useCasesHeading: 'What music schools use Verity for',
  useCases: [
    { name: 'Examination pathway', body: 'Entry deadlines and readiness assessments as dated records, since a missed window costs the student months.' },
    { name: 'Make-up obligations', body: 'School cancellations creating owed lessons with an age, tracked as precisely as parents track them.' },
    { name: 'Instrument hire', body: 'Hire with return dates and condition, so instruments come back and are available to the next student.' },
    { name: 'Teacher and room matching', body: 'Availability recorded so lessons and make-ups are scheduled against real constraints rather than memory.' },
    { name: 'Progress records', body: 'Lesson notes and grade history on the student, so the parent conversation is specific.' },
    { name: 'Fee from delivery', body: 'Term fees raised against lessons actually delivered with the calculation visible.' },
    { name: 'Recital coordination', body: 'Events as work with participants, programme and requirements rather than message threads.' },
  ],

  migration: 'Your scheduling book, fee register and examination records are mapped during implementation. Students and families, teachers, term schedules, instrument hire and grade pathways are brought across.',

  faqHeading: 'Questions music schools ask',
  faqs: [
    ['What can AI software do for a music school?', 'Verity AI answers questions from your own lesson, student, grade and instrument records: which students need entry decisions before the window closes, which make-ups are owed, which instruments are overdue, what delivery looks like by teacher. Each answer can become scheduling or a decision.'],
    ['Why do examination windows matter so much?', 'Because they are set externally and do not move. A student not entered in time waits months for the next window, which makes the readiness decision urgent weeks before the deadline rather than at it.'],
    ['Does it track make-up lessons?', 'Cancellations by the school create an owed lesson with an age, scheduled against teacher and room availability. Parents track these precisely, and the school usually cannot.'],
    ['Can it manage instrument hire?', 'Instruments carry condition, hire state, student and return date, so an instrument out beyond its date is visible and available stock is accurate for new students.'],
    ['Does it help with scheduling?', 'Teacher availability, specialism and room availability are recorded, so individual lesson scheduling and make-up matching are proposed against real constraints rather than held in memory.'],
    ['Can parents get a proper progress answer?', 'Lesson notes and grade history sit on the student record, so the answer is specific and consistent regardless of which teacher is asked.'],
    ['Does it need an administrator?', 'No. The records come from marking the lesson delivered, noting what was covered and issuing an instrument, which the school does anyway.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of scheduling, grade pathways and hire practice, configuration, migration of students, teachers and instruments, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the entry window.',
  ctaLede: 'It closes on a date you already know. Tell us how readiness and entries are tracked today.',

  related: ['dance-academies', 'tuition-centres', 'coaching-institutes', 'language-institutes', 'schools', 'skill-training-institutes'],
};
