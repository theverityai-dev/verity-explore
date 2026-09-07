export default {
  slug: 'yoga-studios',
  status: 'published',
  plural: 'yoga studios',
  subject: 'yoga studio',

  seo: {
    title: 'AI business management software for yoga studios | Verity',
    description:
      'Verity gives yoga studios one system for teacher pay against class income, practitioner notes, workshops and teacher training programmes.',
    keywords: [
      'AI software for yoga studios',
      'yoga studio management software',
      'teacher pay and class economics software',
      'yoga workshop and teacher training management',
    ],
  },

  hero: {
    eyebrow: 'Verity for yoga studios',
    headline: 'The teacher is paid the same whether five come or twenty-five.',
    lede:
      'A yoga studio runs small classes where the pay basis decides which ones make money. Verity holds teacher terms, class income and practitioner history together.',
    note: 'Verity runs the studio. Music, video and payment tools stay where they are.',
    panel: {
      title: 'Studio',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Classes held', value: '196', note: '14 teachers' },
        { label: 'Average attendance', value: '9.4', note: 'room capacity 24' },
        { label: 'Classes paying their teacher', value: '63%', note: 'on fixed-fee terms' },
        { label: 'Workshop places unsold', value: '41', note: 'across 5 workshops' },
      ],
      rows: [
        { name: '37% of classes cost more than they earn', meta: 'Fixed teacher fee, low attendance', active: true },
        { name: '41 workshop places unsold', meta: 'Committed teacher and room', active: true },
        { name: '9 practitioners with injury notes not carried forward', meta: 'Cover teachers unaware', active: true },
        { name: 'Studio hire slots unbooked on 6 evenings', meta: 'Room idle, cost fixed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own studio in this shape.',
    },
  },

  overview: {
    heading: 'Small classes, fixed teacher terms, and a room that costs the same either way.',
    paragraphs: [
      'A yoga studio runs classes that are deliberately small. Nine attending in a room that holds twenty-four is normal practice rather than failure, which means the studio’s economics are decided by how the teacher is paid rather than by how full the room looks. On a fixed fee, thirty-seven per cent of classes costing more than they earn is a pay structure question, not an attendance question.',
      'The second characteristic is that teacher terms vary. Some teachers are paid per class, some per head, some on a share, and a studio that does not hold the terms against the class income cannot say which arrangement is working.',
      'The third is practice continuity. Practitioners carry injuries, limitations and progressions that the regular teacher knows and a covering teacher does not. Nine practitioners with notes that do not travel is a safety matter before it is an administrative one.',
      'The fourth is that the schedule is only part of the income. Workshops, teacher training programmes and studio hire fill the hours regular classes do not, and forty-one unsold workshop places is committed teacher time and room time already spent.',
      'Verity holds teacher terms against class income, carries practitioner notes to whoever is teaching, and manages workshops, courses and hire alongside the regular timetable.',
    ],
  },

  terminology: [
    ['Classes, styles, levels', 'Work'],
    ['Practitioners, students, members', 'Relationships'],
    ['Teachers, cover, trainees', 'People'],
    ['Passes, memberships, drop-ins', 'Orders'],
    ['Workshops, courses, teacher training', 'Work'],
    ['Practice notes, injuries, modifications', 'Records'],
    ['Rooms, hire, timetable', 'Locations'],
  ],

  challengesHeading: 'The pay basis, not the attendance, decides the margin.',
  challengesLede:
    'Yoga studio difficulties come from small classes with fixed costs and varied teacher terms.',
  challenges: [
    { problem: 'Class economics are hidden by the pay structure', detail: 'Fixed teacher fees make low-attendance classes lose money invisibly.', outcome: 'Teacher terms sit against class income, so each class shows its real contribution.' },
    { problem: 'Practice notes stay with one teacher', detail: 'Injuries and modifications are known to the regular teacher and not to cover.', outcome: 'Practitioner notes travel with the person to whoever is teaching.' },
    { problem: 'Workshops commit cost before they sell', detail: 'A teacher and room are booked and places do not fill.', outcome: 'Workshop enrolment is tracked against a viability threshold with a decision point.' },
    { problem: 'Teacher training programmes lose their thread', detail: 'Multi-month programmes have attendance, assessment and practice hour requirements tracked loosely.', outcome: 'Programmes carry requirements, hours and completion per trainee.' },
    { problem: 'Idle room hours are not sold', detail: 'The space sits empty at hours regular classes do not use.', outcome: 'Hire slots sit on the same timetable as classes with utilisation visible.' },
    { problem: 'Pass usage patterns are not read', detail: 'A practitioner slows down and the studio notices when the pass expires.', outcome: 'Usage frequency is tracked so drift is visible while it is reversible.' },
  ],

  modulesLede: 'One system across timetable, teachers, practitioners and programmes.',
  modules: [
    { id: 'work', title: 'Classes, styles and levels', line: 'Each class carries its style, level, teacher, room, income and the teacher cost under that teacher’s terms.', why: 'Contribution depends on the pay basis, so it has to be calculated per class.', example: 'Thirty-seven per cent of classes costing more than they earn.' },
    { id: 'people', title: 'Teachers, terms and cover', line: 'Teachers carry their pay basis, classes taught, attendance drawn, availability and cover arrangements.', why: 'Different terms produce different economics for the same attendance.', example: 'Contribution by teacher and pay basis.' },
    { id: 'records', title: 'Practice notes, injuries and modifications', line: 'Practitioners carry injuries, limitations, modifications and progression, visible to whoever teaches them.', why: 'A covering teacher needs the same knowledge the regular teacher has.', example: 'Nine practitioners whose notes did not reach a cover teacher.' },
    { id: 'relationships', title: 'Practitioners, members and drop-ins', line: 'Each practitioner carries attendance history, preferred styles and teachers, passes and progression.', why: 'Practice is personal, and the record is what makes it continuous.', example: 'Attendance frequency and style preference per practitioner.' },
    { id: 'orders', title: 'Passes, memberships and course fees', line: 'Passes, memberships, workshop fees and programme instalments carry usage, expiry and outstanding balances.', why: 'Studios sell in blocks, and unused blocks are both liability and signal.', example: 'Pass usage frequency against expiry.' },
    { id: 'workflows', title: 'Workshops, courses and teacher training', line: 'Programmes carry enrolment, viability, session attendance, practice hours, assessment and completion.', why: 'A teacher training programme is a long commitment with requirements to evidence.', example: 'Forty-one unsold workshop places against committed cost.' },
    { id: 'locations', title: 'Rooms, hire and timetable', line: 'Rooms carry capacity, class allocation, hire bookings and utilisation across the day.', why: 'The room costs the same whether it is used or not.', example: 'Hire slots unbooked on six evenings.' },
    { id: 'intelligence', title: 'Contribution, attendance and programme reporting', line: 'Contribution per class and teacher, attendance patterns, pass usage, workshop viability and room utilisation come from the records.', why: 'Small-class economics only work when they are measured class by class.', example: 'Contribution by class under each pay basis.' },
    { id: 'ai', title: 'Ask the studio a question', line: 'Verity AI answers from your own class, teacher, practitioner and programme records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about which classes pay and who has stopped practising.', example: '"Which classes do not cover their teacher fee?" returns them by teacher and time.' },
    { id: 'communication', title: 'Practitioner contact', line: 'Absence follow-up, workshop offers and programme communication attach to the practitioner.', why: 'A practitioner who has drifted responds to contact that knows their practice.', example: 'Contact referencing preferred style and last attendance.' },
    { id: 'control', title: 'Pricing, concessions and approvals', line: 'One permission model and one audit trail covering concessions, extensions and refunds.', why: 'Concessions given informally are margin given away untracked.', example: 'Concessions recorded with approver and reason.' },
    { id: 'schedule', title: 'Timetable and teacher availability', line: 'The timetable is built against room capacity, teacher availability and demand by hour and style.', why: 'A style at the wrong hour reads as an unpopular style.', example: 'Attendance by style and hour across the week.' },
  ],

  workflowsHeading: 'Schedule, teach, record, follow up, review.',
  workflowsLede: 'These already happen. Recorded, small classes stop being financially invisible.',
  workflows: [
    { name: 'Class contribution review', steps: ['Attendance and income recorded per class', 'Teacher cost applied under their terms', 'Contribution calculated', 'Persistently negative classes identified', 'Time, style, teacher or terms changed'], note: 'Changing the pay basis is often the fix rather than removing the class.' },
    { name: 'Cover and practice continuity', steps: ['Teacher absence recorded', 'Cover assigned from availability', 'Practitioner notes made available to the cover teacher', 'Class taught and attendance recorded', 'Notes updated after the class'], note: 'Notes reaching the cover teacher is a safety requirement, not a courtesy.' },
    { name: 'Workshop and course viability', steps: ['Workshop scheduled with teacher and room committed', 'Viability threshold set', 'Enrolment tracked against it', 'Run, reschedule or cancel decided at the threshold date', 'Outcome recorded'], note: 'The decision point has to be before the cost is irrecoverable.' },
    { name: 'Teacher training programme', steps: ['Trainees enrolled with fee instalments', 'Session attendance recorded', 'Practice hours logged', 'Assessments completed', 'Certification recorded on completion'], note: 'Practice hours and attendance are the requirements a programme is judged on.' },
    { name: 'Practitioner follow-up', steps: ['Attendance frequency monitored', 'Drift or pass under-use surfaced', 'Contact assigned with practice context', 'Response recorded', 'Return or lapse noted'], note: 'A practitioner who has stopped is reachable for a short window.' },
  ],

  ai: {
    heading: 'Ask about contribution and practice.',
    lede: 'Verity AI reads the same class, teacher, practitioner and programme records the studio creates as it runs. It answers from your own studio, respects permissions, and can turn an answer into contact or a timetable change.',
    panelMeta: 'Grounded in your studio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which classes do not cover their teacher fee?',
      'What is contribution by teacher and pay basis?',
      'Which practitioners have stopped attending this month?',
      'Which workshops are below their viability threshold?',
      'Which practitioners have practice notes a cover teacher would need?',
      'What is attendance by style and hour?',
      'Which passes are under-used against their expiry?',
      'Which teacher training requirements are outstanding by trainee?',
      'Summarise contribution and attendance for the month.',
    ],
  },

  automationHeading: 'Contribution, cover and continuity.',
  automationLede: 'Each runs from the studio’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A class runs below its contribution threshold repeatedly', steps: ['Flagged with teacher, style and hour', 'Review raised with pay basis options', 'Change and effect recorded'] },
    { trigger: 'Cover is assigned to a class', steps: ['Practitioner notes made available to the covering teacher', 'Practitioners notified', 'Attendance recorded against the cover'] },
    { trigger: 'A workshop reaches its decision date below threshold', steps: ['Enrolment and committed cost surfaced', 'Run, reschedule or cancel decided', 'Participants notified'] },
    { trigger: 'A practitioner’s attendance frequency drops', steps: ['Flagged with practice history', 'Contact assigned', 'Outcome recorded'] },
    { trigger: 'A teacher training requirement falls behind', steps: ['Trainee and outstanding hours flagged', 'Catch-up assigned', 'Completion updated'] },
  ],

  intelligenceHeading: 'What the studio can see.',
  intelligenceLede: 'Contribution, attendance and programmes from studio records.',
  intelligence: [
    { area: 'Economics', points: ['Contribution per class by pay basis', 'Teacher cost against class income', 'Workshop and course profitability', 'Room hire income against idle hours'] },
    { area: 'Attendance', points: ['Attendance by style, level and hour', 'Practitioner frequency and drift', 'Pass usage against expiry', 'Teacher attendance draw'] },
    { area: 'Practice', points: ['Notes and modifications by practitioner', 'Progression over time', 'Continuity across teachers', 'Injury records and adjustments'] },
    { area: 'Programmes', points: ['Workshop viability and enrolment', 'Teacher training attendance and hours', 'Assessment completion', 'Fee instalments outstanding'] },
  ],
  intelligenceNote: 'Verity records the studio’s operations. Music, video and payment tools continue as they are.',

  rolesHeading: 'One studio, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Which classes and terms work?', focus: 'Contribution by class and pay basis, workshop viability, room utilisation, pass liability.' },
    { role: 'Studio manager', question: 'Is the week covered?', focus: 'Timetable, teacher availability, cover assignments, hire bookings.' },
    { role: 'Teacher', question: 'Who is practising with me?', focus: 'Class rosters, practitioner notes and modifications, attendance, progression.' },
    { role: 'Front desk', question: 'Who needs contact?', focus: 'Expiring passes, absent practitioners, workshop places, programme instalments.' },
  ],

  useCasesHeading: 'What yoga studios use Verity for',
  useCases: [
    { name: 'Class contribution by pay basis', body: 'Teacher terms applied against class income so a small class that loses money is visible, and the fix — terms, time or style — can be chosen deliberately.' },
    { name: 'Practice notes that travel', body: 'Injuries, limitations and modifications held with the practitioner and available to whoever teaches them, including cover.' },
    { name: 'Workshop viability decisions', body: 'Enrolment tracked against a threshold with a decision date, so committed teacher and room cost is not spent on an under-sold workshop.' },
    { name: 'Running teacher training', body: 'Attendance, practice hours, assessments and fee instalments held per trainee, which is what a long programme is judged on.' },
    { name: 'Selling idle room hours', body: 'Hire bookings on the same timetable as classes, so the hours regular classes do not use are visible and sellable.' },
    { name: 'Reading practice drift', body: 'Attendance frequency and pass usage tracked so a practitioner slowing down is contacted rather than noticed at expiry.' },
    { name: 'Asking about the studio', body: 'Plain-language questions across classes, teachers, practitioners and programmes, with contact and timetable changes raised in the same step.' },
  ],

  migration: 'Music, video and payment tools continue and are mapped during implementation. Practitioners with practice notes, passes and remaining credits, timetable and attendance history, teacher terms and programme records are brought across.',

  faqHeading: 'Questions yoga studios ask',
  faqs: [
    ['What can AI software do for a yoga studio?', 'Verity AI answers questions from your own class, teacher, practitioner and programme records: which classes do not cover their teacher fee, what contribution is by pay basis, which practitioners have stopped attending, which workshops are below viability. Each answer can become contact or a timetable change.'],
    ['Why focus on teacher pay basis rather than attendance?', 'Because yoga classes are deliberately small. Nine people in a room for twenty-four is a normal class, so what decides whether it pays is how the teacher is paid — fixed fee, per head or share — held against the income that class actually produced.'],
    ['How do practice notes work?', 'Injuries, limitations, modifications and progression are held against the practitioner rather than in a teacher’s memory, and are available to whoever is teaching them, which matters most when someone is covering.'],
    ['Can it help with workshops?', 'Workshops carry a viability threshold and a decision date, so enrolment is tracked against committed teacher and room cost while cancelling or rescheduling is still possible.'],
    ['Does it handle teacher training programmes?', 'Programmes carry enrolment, session attendance, logged practice hours, assessments and fee instalments per trainee, with completion recorded against the requirements.'],
    ['What about studio hire?', 'Hire bookings sit on the same timetable as classes, so utilisation across the day is one picture and idle hours are visible as sellable capacity.'],
    ['Does it replace our payment tools?', 'No. Payment, music and video tools continue as they are. Verity holds the studio around them — timetable, teachers and terms, practitioners, passes and programmes.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of class styles, teacher terms, pass structures and programme requirements, configuration, migration of practitioners and history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the classes that do not cover their teacher.',
  ctaLede: 'The fix is usually the terms, not the class. Tell us how teachers are paid today.',

  related: ['fitness-studios', 'dance-academies', 'gyms', 'spas', 'music-schools', 'coaching-institutes'],
};
