export default {
  slug: 'dance-academies',
  status: 'published',
  plural: 'dance academies',
  subject: 'dance academy',

  seo: {
    title: 'AI business management software for dance academies | Verity',
    description:
      'Verity connects batch classes by level and age, studio utilisation, showcase production, costume procurement and student retention into one operational system.',
    keywords: [
      'AI software for dance academies',
      'dance studio management software',
      'batch class and studio utilisation tracking',
      'showcase production and costume management',
    ],
  },

  hero: {
    eyebrow: 'Verity for dance academies',
    headline: 'The showcase is the year. It is also the largest unbudgeted project in the academy.',
    lede:
      'Annual productions consume months of studio time, costume budget and coordination that nobody costs. Verity runs the classes and the production on the same records.',
    note: 'Sized for an academy where the principal also teaches.',
    panel: {
      title: 'Academy',
      meta: 'Current term',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Students', value: '420', note: 'across 28 batches' },
        { label: 'Studio utilisation', value: '64%', note: 'of available hours' },
        { label: 'Showcase costs', value: '₹6.4 L', note: 'committed, partly unbudgeted' },
        { label: 'Attendance decline', value: '58 students', note: 'over four weeks' },
      ],
      rows: [
        { name: '58 students with declining attendance', meta: 'The clearest signal before they stop entirely', active: true },
        { name: '₹6.4 L committed to the showcase', meta: 'Costumes and venue · contributions not fully collected', active: true },
        { name: 'Rehearsals displacing regular classes', meta: 'Studio hours reallocated without a plan', active: true },
        { name: 'Six batches below viable size', meta: 'Teacher committed for the term', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own academy in this shape.',
    },
  },

  overview: {
    heading: 'Regular classes fund the year and the showcase consumes it.',
    paragraphs: [
      'A dance academy runs batches by style, level and age group through a term, and stages an annual showcase that is both the emotional centre of the year and its largest uncontrolled project. Rehearsals displace regular classes, costumes are procured against a budget nobody set precisely, and contributions from families are collected inconsistently.',
      'Six point four lakh committed to a showcase with contributions partly uncollected is the academy funding a production out of its teaching income.',
      'The second characteristic is studio utilisation. Studio hours are the capacity, they cannot be stored, and rehearsals reallocate them from paying classes without the trade being measured.',
      'The third is attendance. Dance students stop gradually rather than suddenly, and declining attendance over a few weeks is the clearest signal available before a student leaves entirely.',
      'The fourth is batch viability. A batch with too few students runs against a committed teacher for the whole term, exactly as in any batch-based teaching business.',
      'Verity runs the batches, measures studio use, costs the production and catches the attendance decline.',
    ],
  },

  terminology: [
    ['Styles, levels, age groups, batches', 'Work'],
    ['Students, parents, families', 'Relationships'],
    ['Teachers, studios, availability', 'Workforce'],
    ['Showcases, rehearsals, productions', 'Work'],
    ['Costumes, props, equipment', 'Inventory'],
    ['Fees, contributions, approvals', 'Workflows'],
    ['Studios, venues', 'Locations'],
  ],

  challengesHeading: 'Classes fund it, productions consume it.',
  challengesLede:
    'Dance academy difficulties come from a production that displaces teaching and attendance that declines before it stops.',
  challenges: [
    { problem: 'Showcase cost is committed without a budget', detail: 'Costumes, venue and production are committed as decisions arise and totalled afterwards.', outcome: 'The showcase is a project with a budget, committed cost and contribution tracking.' },
    { problem: 'Rehearsals displace paying classes', detail: 'Studio hours move from regular teaching to rehearsal without the trade being measured.', outcome: 'Studio allocation is recorded, so displaced teaching hours are visible against production benefit.' },
    { problem: 'Attendance declines before students leave', detail: 'A student attends less and less over weeks and then stops, and nobody notices until they are gone.', outcome: 'Attendance patterns raise a signal while the student is still attending occasionally.' },
    { problem: 'Costume procurement is untracked', detail: 'Costumes are ordered per production against sizes and numbers that change, and leftovers accumulate.', outcome: 'Costumes are stock with sizes, allocation and reuse recorded across productions.' },
    { problem: 'Contributions are collected inconsistently', detail: 'Family contributions toward the showcase are chased informally and partly not collected.', outcome: 'Contributions sit on the family record with the production and age like any other balance.' },
    { problem: 'Batches run below viability', detail: 'A batch of six against a committed teacher runs for the whole term.', outcome: 'Enrolment against viability is visible before the term, so merge or defer is a decision.' },
  ],

  modulesLede: 'One system across batches, studios, productions and families.',
  modules: [
    { id: 'work', title: 'Batches, classes and rehearsals', line: 'Each batch is work with a style, level, age group, schedule, teacher, studio and enrolment; rehearsals are work competing for the same studios.', why: 'Regular teaching and rehearsal draw on the same finite studio hours.', example: 'Rehearsals displacing regular classes without a recorded plan.' },
    { id: 'workforce', title: 'Teachers, studios and availability', line: 'Teacher and studio availability is recorded against classes and rehearsals with utilisation measured.', why: 'Studio hours are the capacity and cannot be stored.', example: 'Sixty-four percent utilisation with rehearsal displacement unmeasured.' },
    { id: 'relationships', title: 'Students, parents and families', line: 'Students carry their batches, attendance, level progression, production roles, costume sizes and fee position under a family record.', why: 'Siblings and one family account are the norm.', example: 'A family with two students, one balance and one showcase contribution.' },
    { id: 'inventory', title: 'Costumes, props and equipment', line: 'Costumes carry sizes, condition, allocation, production history and reuse.', why: 'Costume spend repeats each year and reuse is rarely tracked.', example: 'Costumes reused across productions rather than reordered.' },
    { id: 'workflows', title: 'Fees, contributions and approvals', line: 'Term fees, showcase contributions, discounts and production spend approvals move through defined steps.', why: 'Production commitments are the academy’s largest discretionary spend.', example: 'Showcase spend approved against a budget rather than committed and totalled.' },
    { id: 'people', title: 'Teachers and coordinators', line: 'Staff are modelled once, with classes, rehearsals, attendance and production roles attributed.', why: 'Retention varies by teacher and production load falls unevenly.', example: 'Retention by teacher across terms.' },
    { id: 'locations', title: 'Studios and venues', line: 'Studios and external venues carry availability, capacity and booking.', why: 'Studio hours are the constraint and venue hire is a production cost.', example: 'Studio allocation between classes and rehearsals.' },
    { id: 'intelligence', title: 'Attendance, utilisation and production reporting', line: 'Attendance trends, batch viability, studio utilisation, production cost against contribution and retention come from the records.', why: 'The year is funded by classes and consumed by the production, and both are measurable.', example: 'Production cost against contributions collected.' },
    { id: 'ai', title: 'Ask the academy a question', line: 'Verity AI answers from your own student, batch, studio and production records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about attendance decline and production cost.', example: '"Which students have declining attendance?" returns fifty-eight with contact assigned.' },
    { id: 'records', title: 'Progression and production records', line: 'Level progression, assessments and production participation attach to the student.', why: 'Parents ask about progress and production roles are a retention factor.', example: 'A student’s progression and past production roles on one record.' },
    { id: 'communication', title: 'Parent contact recorded', line: 'Reminders, production information and fee conversations attach to the family.', why: 'Production communication is high volume and repeated.', example: 'Costume and rehearsal information recorded against the family.' },
    { id: 'control', title: 'Who can commit production spend', line: 'One permission model and one audit trail across every record.', why: 'Production spend accumulates through many small enthusiastic decisions.', example: 'Costume and venue commitments recorded against the production budget.' },
  ],

  workflowsHeading: 'Term teaching and an annual production.',
  workflowsLede: 'These already happen. Recorded together, the trade between them becomes visible.',
  workflows: [
    { name: 'Batch formation', steps: ['Students grouped by style, level and age', 'Teacher and studio allocated', 'Enrolment tracked against viability', 'Merge or defer decided before the term', 'Schedule published to families'], note: 'A batch below viability runs against a committed teacher for the whole term.' },
    { name: 'Attendance and retention', steps: ['Attendance recorded per class', 'Declining patterns identified over weeks', 'Contact assigned to the teacher or coordinator', 'Reason recorded — schedule, cost, interest, injury', 'Outcome tracked'], note: 'Dance students fade rather than stop, which gives weeks of warning if anyone is watching.' },
    { name: 'Showcase planning', steps: ['Production created with budget and date', 'Participation confirmed by batch and student', 'Costume requirements and sizes collected', 'Venue, costume and production costs committed against budget', 'Contributions raised against families'], note: 'Setting a budget before committing is the difference between a production and an overrun.' },
    { name: 'Rehearsal scheduling', steps: ['Rehearsal requirements derived from the programme', 'Studio hours allocated against class schedule', 'Displaced classes identified and communicated', 'Rehearsal attendance recorded', 'Displacement cost reviewed after the production'], note: 'Rehearsal hours come out of teaching hours, and the trade should be deliberate.' },
    { name: 'Costume lifecycle', steps: ['Requirements derived from participation and sizes', 'Existing costumes checked for reuse', 'New costumes ordered against the shortfall', 'Allocation recorded per student', 'Return and storage recorded for future reuse'], note: 'Checking reuse before ordering is the simplest saving available.' },
  ],

  ai: {
    heading: 'Ask about attendance and the production.',
    lede: 'Verity AI reads the same student, batch, studio and production records the academy creates as it teaches. It answers from your own academy, respects permissions, and can turn an answer into contact and decisions.',
    panelMeta: 'Grounded in your academy records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which students have declining attendance over recent weeks?',
      'What is committed to the showcase against contributions collected?',
      'How many teaching hours have rehearsals displaced?',
      'Which batches are below viable size?',
      'Which costumes can be reused for this production?',
      'What is studio utilisation by hour and day?',
      'Which families have fees or contributions outstanding?',
      'What is retention by teacher and batch across terms?',
      'Summarise attendance, utilisation and production cost.',
    ],
  },

  automationHeading: 'Attendance and production spend.',
  automationLede: 'Each runs from the academy’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A student’s attendance declines', steps: ['Pattern flagged with batch and history', 'Contact assigned to the teacher', 'Reason and outcome recorded'] },
    { trigger: 'Production spend approaches budget', steps: ['Committed cost compared with budget', 'Approval raised before further commitment', 'Contribution position attached'] },
    { trigger: 'Rehearsals are scheduled', steps: ['Displaced classes identified', 'Families informed', 'Displacement hours recorded'] },
    { trigger: 'Costume requirements are collected', steps: ['Existing stock checked for reuse by size', 'Shortfall ordered', 'Allocation recorded per student'] },
    { trigger: 'A batch stays below viability', steps: ['Flagged with committed teacher cost', 'Merge or defer decision raised', 'Families informed of the outcome'] },
  ],

  intelligenceHeading: 'What the principal can see.',
  intelligenceLede: 'Teaching, capacity and production on one set of records.',
  intelligence: [
    { area: 'Attendance', points: ['Attendance by student, batch and term', 'Declining patterns and outcomes', 'Retention across terms', 'Reasons recorded on departure'] },
    { area: 'Capacity', points: ['Studio utilisation by hour and day', 'Class against rehearsal allocation', 'Teaching hours displaced by production', 'Batch viability and size'] },
    { area: 'Production', points: ['Budget against committed and actual cost', 'Contributions raised and collected', 'Costume reuse against new purchase', 'Participation by batch and student'] },
    { area: 'Commercial', points: ['Fees against classes delivered', 'Family balances including contributions', 'Revenue by style and level', 'Cost of displaced teaching'] },
  ],
  intelligenceNote: 'All of it comes from recording attendance, studio allocation and production commitments, which the academy does anyway.',

  rolesHeading: 'A small academy, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Principal', question: 'Is the year funding itself?', focus: 'Batch viability, studio utilisation, production cost against contributions, retention.' },
    { role: 'Teacher', question: 'Who is fading and who is ready?', focus: 'Attendance patterns, progression, production roles, rehearsal schedule.' },
    { role: 'Coordinator', question: 'What does the production need?', focus: 'Participation and sizes, costume reuse and orders, rehearsal scheduling, contributions outstanding.' },
  ],

  useCasesHeading: 'What dance academies use Verity for',
  useCases: [
    { name: 'Attendance decline detection', body: 'Declining patterns surfaced over weeks, since dance students fade rather than stop and the warning is real.' },
    { name: 'Production as a budgeted project', body: 'Showcase costs committed against a budget with contributions tracked, rather than totalled after the event.' },
    { name: 'Rehearsal displacement', body: 'Studio hours moved from teaching to rehearsal recorded, so the trade is deliberate rather than absorbed.' },
    { name: 'Costume reuse', body: 'Costume stock with sizes and history checked before ordering, which is the simplest saving in the format.' },
    { name: 'Batch viability', body: 'Enrolment against committed teacher cost visible before the term starts.' },
    { name: 'Family accounts', body: 'Siblings, fees and production contributions on one family record.' },
    { name: 'Asking about the year', body: 'Plain-language questions across attendance, studios, production and fees, with contact assigned in the same step.' },
  ],

  migration: 'Your scheduling and fee arrangements are mapped during implementation. Students and families, batches, teachers, studio schedules and costume stock are brought across.',

  faqHeading: 'Questions dance academies ask',
  faqs: [
    ['What can AI software do for a dance academy?', 'Verity AI answers questions from your own student, batch, studio and production records: which students have declining attendance, what is committed to the showcase against contributions collected, how many teaching hours rehearsals displaced, which batches are below viable size. Each answer can become contact or a decision.'],
    ['Why treat the showcase as a project?', 'Because it is the academy’s largest discretionary spend and consumes months of studio time. Setting a budget and tracking committed cost and contributions against it is the difference between a production and an overrun funded from teaching income.'],
    ['How does attendance help with retention?', 'Dance students fade rather than stop. Declining attendance over a few weeks is the clearest warning available, and it is entirely visible in records the academy already creates by marking attendance.'],
    ['Can it manage costumes?', 'Costumes are stock with sizes, condition, allocation and production history, so reuse is checked before ordering — which is usually the simplest saving available in the annual cycle.'],
    ['Does it show rehearsal displacement?', 'Studio allocation between classes and rehearsals is recorded, so teaching hours given up to the production are visible and the trade can be made deliberately.'],
    ['Can it handle batch viability?', 'Enrolment is tracked against a viability threshold based on committed teacher cost, so merge or defer is decided before the term rather than absorbed across it.'],
    ['Does it need an administrator?', 'No. The records come from marking attendance, allocating studios and recording production commitments, which the academy does anyway.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of batch structures, studio scheduling and production practice, configuration, migration of students, batches and costumes, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the students who are fading.',
  ctaLede: 'They are still attending occasionally, which means they are still reachable. Tell us how attendance is used today.',

  related: ['music-schools', 'yoga-studios', 'fitness-studios', 'tuition-centres', 'coaching-institutes', 'event-venues'],
};
