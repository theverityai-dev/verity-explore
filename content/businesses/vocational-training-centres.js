export default {
  slug: 'vocational-training-centres',
  status: 'published',
  plural: 'vocational training centres',
  subject: 'vocational training centre',

  seo: {
    title: 'AI business software for vocational training centres | Verity',
    description:
      'Verity connects practical assessment records, equipment and consumable cost per trainee, trainer and assessor coverage, and funding audit evidence into one system.',
    keywords: [
      'AI software for vocational training centres',
      'vocational training centre management software',
      'practical assessment and workshop management',
      'trade training equipment and consumables software',
    ],
  },

  hero: {
    eyebrow: 'Verity for vocational training',
    headline: 'A trade is taught on equipment, and the equipment decides how many you can teach.',
    lede:
      'Vocational training is limited by workshop capacity, assessor availability and consumable cost per trainee. Verity holds all three against the trainee record.',
    note: 'Verity runs the centre. Trade curricula and awarding-body portals stay where they are.',
    panel: {
      title: 'Centre',
      meta: 'Current term',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Trainees in trades', value: '410', note: 'across 9 trades' },
        { label: 'Workshop utilisation', value: '64%', note: 'against practical demand' },
        { label: 'Assessments overdue', value: '73', note: 'practical, not written' },
        { label: 'Assessors qualified', value: '11', note: '3 lapsing this term' },
      ],
      rows: [
        { name: '73 practical assessments overdue', meta: 'Assessor availability the constraint', active: true },
        { name: '3 assessor qualifications lapsing', meta: 'Trades affected: 4', active: true },
        { name: 'Welding workshop at capacity, carpentry at 31%', meta: 'Intake mix not matching equipment', active: true },
        { name: 'Consumable spend above budget in 2 trades', meta: 'Per-trainee cost unmeasured', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own centre in this shape.',
    },
  },

  overview: {
    heading: 'The constraint is the workshop, and the bottleneck is the assessor.',
    paragraphs: [
      'A vocational training centre teaches trades on equipment. Capacity is not the number of seats in a classroom but the number of welding bays, machines or vehicle lifts, and an intake mix that does not match the equipment produces one workshop at capacity and another at thirty-one per cent in the same term.',
      'The second characteristic is practical assessment. Competence in a trade is demonstrated by doing the task in front of a qualified assessor, which makes assessment a scheduling problem constrained by assessor availability rather than a marking task. Seventy-three overdue practical assessments is usually assessor capacity, not trainee readiness.',
      'The third is assessor qualification itself. Assessors hold credentials that expire, and three lapsing at once removes assessment capacity across four trades at the same time.',
      'The fourth is consumables. A trade trainee consumes material — metal, wood, wiring, vehicle parts — and consumable spend above budget without per-trainee measurement is a cost the centre cannot attribute or price.',
      'The fifth is funding audit. Vocational programmes are frequently funded, and funders audit attendance, assessment evidence and completion.',
      'Verity holds workshop capacity, assessor qualification and availability, consumable cost per trainee and audit evidence in one place.',
    ],
  },

  terminology: [
    ['Trades, units, practical tasks', 'Work'],
    ['Trainees, apprentices, cohorts', 'Relationships'],
    ['Workshops, bays, machines', 'Locations'],
    ['Consumables, materials, tooling', 'Inventory'],
    ['Trainers, assessors, verifiers', 'People'],
    ['Assessment, evidence, sign-off', 'Workflows'],
    ['Awarding body, funding, audit', 'Control'],
  ],

  challengesHeading: 'Capacity is physical and assessment is a queue.',
  challengesLede:
    'Vocational difficulties come from teaching on equipment and certifying by observation.',
  challenges: [
    { problem: 'Intake mix does not match workshop capacity', detail: 'One trade is oversubscribed while another workshop sits idle.', outcome: 'Intake is planned against workshop capacity per trade, so the mix is a decision.' },
    { problem: 'Practical assessments queue behind assessors', detail: 'Trainees are ready and the assessor is not available, and completion slips.', outcome: 'Assessment demand and assessor availability are visible together, so the queue is managed.' },
    { problem: 'Assessor qualifications lapse without warning', detail: 'Credentials expire and assessment capacity disappears across several trades at once.', outcome: 'Assessor credentials carry expiry with renewal raised in advance.' },
    { problem: 'Consumable cost per trainee is unknown', detail: 'Materials are bought centrally and spent by trade without attribution.', outcome: 'Consumables are recorded against trades and cohorts, giving cost per trainee.' },
    { problem: 'Equipment downtime is unplanned', detail: 'A machine out of service removes practical capacity mid-term.', outcome: 'Equipment condition and servicing are tracked against workshop capacity.' },
    { problem: 'Funding audits require evidence made months earlier', detail: 'Attendance, assessment and completion evidence is assembled after the fact.', outcome: 'Audit requirements are completed during delivery and reportable at any point.' },
  ],

  modulesLede: 'One system across workshops, assessment, materials and funding.',
  modules: [
    { id: 'locations', title: 'Workshops, bays and machines', line: 'Each workshop carries its bays, machines, safe capacity and servicing state, with practical sessions booked against it.', why: 'Capacity in a trade is physical, and it is what limits intake.', example: 'Welding at capacity while carpentry runs at thirty-one per cent.' },
    { id: 'workflows', title: 'Practical assessment and sign-off', line: 'Assessment demand, assessor allocation, observation records, evidence and sign-off run as one tracked sequence.', why: 'Competence is certified by observation, which makes assessment a scheduling constraint.', example: 'Seventy-three practical assessments overdue on assessor availability.' },
    { id: 'people', title: 'Trainers, assessors and verifiers', line: 'Staff carry trade coverage, assessor credentials with expiry, and availability against assessment demand.', why: 'Assessment capacity is a credentialled subset of staff, not all staff.', example: 'Three assessor credentials lapsing, affecting four trades.' },
    { id: 'inventory', title: 'Consumables, materials and tooling', line: 'Materials are recorded against trades, cohorts and practical tasks, with cost attributed per trainee.', why: 'Trade training consumes material, and unattributed spend cannot be priced.', example: 'Consumable spend above budget in two trades.' },
    { id: 'work', title: 'Trades, units and practical tasks', line: 'Each trade is structured into units and practical tasks with equipment, material and assessment requirements attached.', why: 'A unit that needs a machine and an assessor is a different planning object from a lecture.', example: 'Practical task demand by workshop for the coming term.' },
    { id: 'control', title: 'Awarding body, funding and audit evidence', line: 'One permission model and one audit trail, with awarding-body and funding requirements as reportable states.', why: 'Funded vocational delivery is audited on records made at the time.', example: 'Audit evidence completeness by funded programme.' },
    { id: 'relationships', title: 'Trainees, employers and apprenticeships', line: 'Trainees carry attendance, units completed, assessments and employer placement where apprenticeships apply.', why: 'Apprenticeship trainees have an employer as well as a centre.', example: 'Apprentices with employer sign-off outstanding.' },
    { id: 'intelligence', title: 'Capacity, assessment and cost reporting', line: 'Workshop utilisation, assessment queues, assessor coverage, consumable cost per trainee and audit completeness come from the records.', why: 'The centre is constrained by capacity and cost, and both are recordable.', example: 'Consumable cost per trainee by trade.' },
    { id: 'ai', title: 'Ask the centre a question', line: 'Verity AI answers from your own trainee, workshop, assessment and materials records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about capacity and the assessment queue.', example: '"Which assessments are waiting on which assessors?" returns the queue by trade.' },
    { id: 'records', title: 'Evidence, observation records and certificates', line: 'Observation records, photographs of practical work, evidence and certificates attach to the trainee and unit.', why: 'Practical competence is evidenced by what the assessor recorded.', example: 'Evidence complete per unit before certification.' },
    { id: 'communication', title: 'Trainee and employer contact', line: 'Attendance follow-up, assessment scheduling and employer contact attach to the record they concern.', why: 'Scheduling assessment is a contact activity with a deadline.', example: 'Assessment slot offers recorded against trainees.' },
  ],

  workflowsHeading: 'Plan intake, run practicals, assess, evidence, certify.',
  workflowsLede: 'These already happen. Recorded, capacity and cost become manageable.',
  workflows: [
    { name: 'Intake planning against capacity', steps: ['Workshop capacity established per trade', 'Practical demand per trainee calculated', 'Intake targets set by trade against capacity', 'Enrolment tracked against the target', 'Mix adjusted before the term starts'], note: 'The intake mix, not total intake, is what leaves one workshop idle.' },
    { name: 'Practical delivery', steps: ['Sessions booked against workshop and machines', 'Consumables recorded against the session', 'Attendance captured against funding conditions', 'Equipment issues raised as they occur', 'Progress recorded per unit'], note: 'Recording materials at the session is what produces cost per trainee.' },
    { name: 'Assessment scheduling', steps: ['Trainees ready for assessment identified per unit', 'Assessor availability matched by trade and credential', 'Slots allocated and trainees notified', 'Observation conducted and evidence recorded', 'Sign-off completed'], note: 'The queue is assessor-limited, so it is managed by matching credential to demand.' },
    { name: 'Assessor credential management', steps: ['Credentials recorded with expiry and trade scope', 'Renewals raised in advance of lapse', 'Assessment capacity projected by trade', 'Cover arranged where capacity would fall', 'Updated credentials recorded'], note: 'Several lapses at once is how a centre loses assessment capacity without noticing.' },
    { name: 'Funding and awarding-body audit', steps: ['Requirements mapped per programme', 'Attendance, evidence and completion recorded during delivery', 'Completeness reported', 'Gaps raised with owners', 'Submission assembled from records'], note: 'Funders audit records made at the time, not summaries made afterwards.' },
  ],

  ai: {
    heading: 'Ask about capacity and the assessment queue.',
    lede: 'Verity AI reads the same trainee, workshop, assessment and materials records the centre creates as it works. It answers from your own centre, respects permissions, and can turn an answer into a schedule or a task.',
    panelMeta: 'Grounded in your centre records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which assessments are overdue and which assessor are they waiting on?',
      'Which assessor credentials lapse this term and which trades do they cover?',
      'What is workshop utilisation by trade?',
      'What is consumable cost per trainee by trade?',
      'Which trainees are ready for assessment but unscheduled?',
      'Which equipment is out of service and what capacity does that remove?',
      'Which funded trainees are at risk on attendance conditions?',
      'Which apprentices have employer sign-off outstanding?',
      'Summarise capacity, assessment and audit position.',
    ],
  },

  automationHeading: 'Capacity, credentials and evidence.',
  automationLede: 'Each runs from the centre’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An assessor credential approaches expiry', steps: ['Flagged with trades and assessment demand affected', 'Renewal assigned', 'Capacity projection updated'] },
    { trigger: 'A trainee becomes ready for practical assessment', steps: ['Added to the queue for the unit', 'Matched to a credentialled assessor', 'Slot offered and recorded'] },
    { trigger: 'Consumable use exceeds the trade budget', steps: ['Flagged with cost per trainee', 'Owner assigned for review', 'Outcome recorded against the trade'] },
    { trigger: 'Equipment goes out of service', steps: ['Workshop capacity reduced', 'Affected sessions flagged', 'Servicing task assigned'] },
    { trigger: 'Attendance falls below a funding condition', steps: ['Trainee and programme flagged', 'Intervention assigned', 'Compliance position updated'] },
  ],

  intelligenceHeading: 'What the centre can see.',
  intelligenceLede: 'Capacity, queue and cost from delivery records.',
  intelligence: [
    { area: 'Capacity', points: ['Workshop utilisation by trade', 'Practical demand against bays and machines', 'Equipment availability and servicing', 'Intake mix against capacity'] },
    { area: 'Assessment', points: ['Assessment queue by unit and trade', 'Assessor coverage and credential expiry', 'Time from readiness to assessment', 'Sign-off and evidence completeness'] },
    { area: 'Cost', points: ['Consumable cost per trainee by trade', 'Material spend against budget', 'Tooling and equipment cost by workshop', 'Cost per completion'] },
    { area: 'Compliance', points: ['Attendance against funding conditions', 'Audit evidence completeness', 'Awarding-body requirements by programme', 'Exceptions and closure'] },
  ],
  intelligenceNote: 'Verity records the centre’s operations. Trade curricula and awarding-body portals continue as they are.',

  rolesHeading: 'One centre, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Centre head', question: 'Is capacity matched to intake?', focus: 'Workshop utilisation by trade, assessment queue, assessor coverage, cost per completion.' },
    { role: 'Workshop supervisor', question: 'Can I run this term’s practicals?', focus: 'Bay and machine availability, equipment servicing, consumables, session bookings.' },
    { role: 'Assessor', question: 'Who am I assessing and against what?', focus: 'Assessment queue by unit, evidence requirements, observation records, sign-off outstanding.' },
    { role: 'Compliance', question: 'Are we audit-ready?', focus: 'Attendance against funding conditions, evidence completeness, awarding-body requirements, exceptions.' },
  ],

  useCasesHeading: 'What vocational training centres use Verity for',
  useCases: [
    { name: 'Intake matched to workshop capacity', body: 'Practical capacity established per trade so the intake mix is planned rather than discovered when one workshop sits idle.' },
    { name: 'Managing the assessment queue', body: 'Assessment demand and credentialled assessor availability held together, so overdue assessments are scheduled rather than accumulated.' },
    { name: 'Assessor credential tracking', body: 'Credentials with expiry and trade scope, with renewals raised before assessment capacity disappears.' },
    { name: 'Consumable cost per trainee', body: 'Materials recorded against trades and cohorts, making the real cost of a trade place visible.' },
    { name: 'Equipment availability as capacity', body: 'Machine condition and servicing tracked against the practical sessions that depend on them.' },
    { name: 'Funding audit evidence', body: 'Attendance, assessment and completion evidence created during delivery and reportable at any point.' },
    { name: 'Asking about the constraint', body: 'Plain-language questions across capacity, assessment, cost and compliance, with tasks raised in the same step.' },
  ],

  migration: 'Trade curricula and awarding-body portals continue and are mapped during implementation. Trainees, units, workshop and equipment records, assessor credentials, assessment history and funding requirements are brought across.',

  faqHeading: 'Questions vocational training centres ask',
  faqs: [
    ['What can AI software do for a vocational training centre?', 'Verity AI answers questions from your own trainee, workshop, assessment and materials records: which assessments are overdue and on which assessor, which credentials lapse this term, what workshop utilisation is by trade, what consumables cost per trainee. Each answer can become a schedule or an assigned task.'],
    ['Why is workshop capacity treated as the constraint?', 'Because a trade is taught on equipment. The number of bays, machines or lifts sets how many trainees can be trained, and an intake mix that ignores it leaves one workshop oversubscribed and another idle in the same term.'],
    ['How does assessment scheduling work?', 'Trainees ready for assessment form a queue per unit, and assessors are matched by credential and trade. Holding demand and credentialled availability together is what turns an overdue list into a schedule.'],
    ['Why track assessor credentials?', 'Assessment capacity comes from credentialled staff, not all staff. Several credentials lapsing at once removes capacity across multiple trades simultaneously, which is why expiry is tracked with renewal raised in advance.'],
    ['Can it measure consumable cost per trainee?', 'Materials are recorded against trades, cohorts and practical tasks as they are used, which produces cost per trainee and cost per completion by trade.'],
    ['Does it handle funding audits?', 'Attendance, assessment evidence and completion are recorded during delivery against the conditions each funded programme carries, with completeness reportable at any point.'],
    ['What about apprentices with employers?', 'Apprentice trainees carry the employer alongside the centre record, with employer sign-off tracked as part of completion.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of trades, workshop capacity, assessor credentials and funding requirements, configuration, migration, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the assessment queue.',
  ctaLede: 'It is usually assessor capacity, not trainee readiness. Tell us how assessment is scheduled today.',

  related: ['skill-training-institutes', 'coaching-institutes', 'colleges', 'manufacturers', 'contractors', 'universities'],
};
