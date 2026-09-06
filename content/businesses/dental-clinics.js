export default {
  slug: 'dental-clinics',
  status: 'published',
  plural: 'dental clinics',
  subject: 'dental clinic',

  seo: {
    title: 'AI business management software for dental clinics | Verity',
    description:
      'Verity connects multi-visit treatment plans, external lab work, chair utilisation, consumables and recall visits into one operational system.',
    keywords: [
      'AI software for dental clinics',
      'dental practice management software',
      'dental lab work tracking software',
      'treatment plan and recall management',
    ],
  },

  hero: {
    eyebrow: 'Verity for dental clinics',
    headline: 'The treatment was accepted in March. Three appointments in, it stopped.',
    lede:
      'Dental revenue lives in multi-visit plans and in the lab work that has to come back on time. Verity tracks both, so an abandoned plan and a late crown are visible before the patient chair is empty.',
    note: 'Verity runs the practice. Clinical records and imaging stay where they are.',
    panel: {
      title: 'Practice',
      meta: 'All chairs · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Chair utilisation', value: '64%', note: 'of clinical hours' },
        { label: 'Plans in progress', value: '78', note: '₹31 L accepted value' },
        { label: 'Stalled plans', value: '22', note: 'no visit in 60 days' },
        { label: 'Lab work out', value: '19', note: '4 past promised date' },
      ],
      rows: [
        { name: '22 accepted treatment plans stalled beyond 60 days', meta: '₹9.4 L of accepted work not delivered', active: true },
        { name: '4 lab cases past their promised return date', meta: 'Two have appointments booked', active: true },
        { name: 'Chair 2 at 41% utilisation this month', meta: 'While the waiting list is at three weeks', active: true },
        { name: '110 patients past their recall date', meta: 'No contact recorded', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'Dentistry sells plans, not appointments.',
    paragraphs: [
      'A dental practice’s revenue is not a series of visits. It is a set of treatment plans, each accepted at a point in time, each requiring several appointments over weeks or months to complete. The commercially significant event is acceptance; the commercially significant risk is that an accepted plan quietly stops halfway.',
      'That risk is almost never managed, because the practice sees appointments rather than plans. The diary shows tomorrow. It does not show that twenty-two accepted plans worth nine lakh have had no visit in two months, which is treatment the patient agreed to, the practice planned for, and neither will now get.',
      'The second distinctive feature is external lab work. Crowns, bridges, dentures and aligners go out to a laboratory and must come back before an appointment that is already booked. A case that will not arrive in time means a wasted chair slot, a returning patient with nothing to do and a relationship that takes a knock. Tracking that is almost always a whiteboard.',
      'The third is chair utilisation. A chair is the practice’s capacity, and an empty slot cannot be recovered. Sixty-four percent utilisation alongside a three-week waiting list is a scheduling failure, not a demand problem.',
      'The fourth is recall. Hygiene and review visits are predictable, low-effort revenue that depends entirely on someone working a list.',
      'Verity holds the plan, the lab case, the chair and the recall as connected records. Clinical notes and imaging stay in your existing systems.',
    ],
  },

  terminology: [
    ['Treatment plans, procedures, phases', 'Work'],
    ['Appointments, chairs, sessions', 'Workforce'],
    ['Patients, families, referrers', 'Relationships'],
    ['Lab cases, crowns, aligners', 'Orders'],
    ['Materials, consumables, implants', 'Inventory'],
    ['Dentists, hygienists, assistants', 'People'],
    ['Consents, estimates, records', 'Records'],
  ],

  challengesHeading: 'The revenue is agreed and then quietly lost.',
  challengesLede:
    'Dental practice problems come from plans that stall, cases that arrive late and chairs that sit empty.',
  challenges: [
    {
      problem: 'Accepted plans stall unnoticed',
      detail:
        'A patient accepts a plan, attends twice, and stops. The diary shows no appointment, which looks identical to a completed plan.',
      outcome:
        'Plans are records with phases and a state, so accepted-but-stalled work surfaces by value and by patient.',
    },
    {
      problem: 'Lab cases are tracked on a whiteboard',
      detail:
        'A crown is due back before Thursday’s appointment, and whether it will arrive is known only by whoever phones the lab.',
      outcome:
        'Lab cases are orders with a laboratory, a promised date, a linked appointment and a state.',
    },
    {
      problem: 'Chair time is lost and unrecoverable',
      detail:
        'Cancellations, no-shows and gaps leave chairs empty while a waiting list exists, and nobody measures the loss.',
      outcome:
        'Utilisation is measured against clinical hours per chair and dentist, so gaps are visible and fillable.',
    },
    {
      problem: 'Recalls depend on someone working a list',
      detail:
        'Hygiene and review visits are predictable revenue, and they happen only if a person maintains and works the recall list.',
      outcome:
        'Recall dates sit on the patient record, so patients past their date become a worked list with contact history.',
    },
    {
      problem: 'Material and implant stock is checked by eye',
      detail:
        'Consumables and implant components are ordered reactively, and a missing component cancels a booked procedure.',
      outcome:
        'Stock is held with expiry and reorder points, checked against the coming schedule rather than a cupboard.',
    },
    {
      problem: 'Estimates and consents are hard to produce later',
      detail:
        'What was quoted and what was agreed become contested when a plan runs long or changes.',
      outcome:
        'Estimates, consents and plan revisions attach to the plan with their versions retained.',
    },
  ],

  modulesLede:
    'One system across plans, lab work, chairs and recalls.',
  modules: [
    {
      id: 'work',
      title: 'Treatment plans and their phases',
      line:
        'A plan is work with a patient, accepted value, phases, appointments required, a state and its progress through them.',
      why:
        'The plan is the unit of revenue, and the practice cannot see stalled revenue while it looks at appointments.',
      example:
        'Twenty-two plans worth nine lakh with no visit in sixty days, each showing the phase it stopped at.',
    },
    {
      id: 'orders',
      title: 'Lab cases sent and returned',
      line:
        'Each case is an order with a laboratory, a specification, a promised return date, the appointment it serves and a state.',
      why:
        'A late case wastes a booked chair slot and a patient visit, which is the most avoidable failure in the practice.',
      example:
        'Four cases past their promised date, two with appointments already booked.',
    },
    {
      id: 'workforce',
      title: 'Chairs, sessions and utilisation',
      line:
        'Chair and dentist sessions are records with their booked and delivered time, cancellations and gaps.',
      why:
        'Chair time is the practice’s capacity and is entirely unrecoverable once it passes.',
      example:
        'A chair at forty-one percent utilisation while the waiting list runs three weeks.',
    },
    {
      id: 'relationships',
      title: 'Patients, families and referrers',
      line:
        'Patients are records with their plans, appointment history, recall dates, balances, preferences and referral source.',
      why:
        'Dental practices grow through recall and referral, and both are patterns rather than events.',
      example:
        'A hundred and ten patients past their recall date with no contact recorded.',
    },
    {
      id: 'inventory',
      title: 'Materials, consumables and implants',
      line:
        'Stock is held with batch, expiry, supplier and reorder point, checked against scheduled procedures.',
      why:
        'A missing implant component cancels a procedure that took weeks to schedule.',
      example:
        'Components short against next week’s scheduled surgical cases, flagged with lead time in hand.',
    },
    {
      id: 'people',
      title: 'Dentists, hygienists and assistants',
      line:
        'The team is modelled once, and every plan, appointment, lab case and recall carries who owns it.',
      why:
        'Plan acceptance and completion rates vary by clinician and are worth knowing rather than assuming.',
      example:
        'Plan acceptance and completion rate by dentist, from the plans themselves.',
    },
    {
      id: 'records',
      title: 'Estimates, consents and plan versions',
      line:
        'Estimates, consents and revisions attach to the plan with versions retained.',
      why:
        'Disputes are about what was quoted and agreed, and both are needed months later.',
      example:
        'A plan revised after a change of scope, with the original estimate retained.',
    },
    {
      id: 'workflows',
      title: 'Acceptance, revisions and approvals',
      line:
        'Plan acceptance, revisions, discounts and write-offs move through defined steps with recorded decisions.',
      why:
        'Discounting to close a plan is a commercial decision that should be visible rather than habitual.',
      example:
        'A discount beyond threshold recorded as an approval with the plan value attached.',
    },
    {
      id: 'intelligence',
      title: 'Plan, chair and recall reporting',
      line:
        'Plan acceptance and completion rates, stalled value, chair utilisation, lab turnaround, recall adherence and material consumption come from the operational records.',
      why:
        'The practice’s two biggest levers — completing accepted plans and filling chairs — are both invisible in an appointment book.',
      example:
        'Accepted value against delivered value by dentist and by month.',
    },
    {
      id: 'ai',
      title: 'Ask the practice a question',
      line:
        'Verity AI answers from your own plan, appointment, lab and patient records, respects permissions, and can create assigned follow-ups.',
      why:
        'The valuable questions are about work that agreed to happen and then did not.',
      example:
        '"Which accepted plans have stalled?" returns twenty-two, with recall calls assigned.',
    },
    {
      id: 'control',
      title: 'Access and audit',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Patient records carry access obligations and the practice has a mixed clinical and administrative team.',
      example:
        'Reception sees scheduling and balances; clinicians see the records they are entitled to.',
    },
    {
      id: 'communication',
      title: 'What the patient was told',
      line:
        'Notes, reminders and activity attach to the patient, plan or lab case they concern.',
      why:
        'Recall and plan conversations repeat, and repeating one badly is worse than not having it.',
      example:
        'A note that a patient deferred treatment until after a move, so the recall is timed accordingly.',
    },
  ],

  workflowsHeading: 'Plans, cases and chairs.',
  workflowsLede:
    'These already happen. As records they stop depending on a whiteboard and a diary.',
  workflows: [
    {
      name: 'Consultation to accepted plan',
      steps: [
        'Assessment recorded against the patient',
        'Treatment plan created with phases and estimated value',
        'Estimate issued and consent captured',
        'Acceptance recorded with the version agreed',
        'First appointments scheduled against the plan',
      ],
      note:
        'Acceptance is the commercial event, and recording it is what makes non-completion visible later.',
    },
    {
      name: 'Plan progression',
      steps: [
        'Each appointment linked to a plan phase',
        'Completion recorded against the phase',
        'Next appointment scheduled before the patient leaves',
        'Gap flagged if no appointment is booked',
        'Stalled plans surfaced by value and age',
      ],
      note:
        'Booking the next visit before the patient leaves is the single strongest predictor of plan completion.',
    },
    {
      name: 'Lab case',
      steps: [
        'Case sent with specification, shade and impressions',
        'Laboratory, promised date and linked appointment recorded',
        'Progress tracked against the promised date',
        'Case received and checked before the appointment',
        'Appointment rescheduled proactively if the case will be late',
      ],
      note:
        'Rescheduling before the patient arrives is the difference between an inconvenience and a lost visit.',
    },
    {
      name: 'Chair scheduling',
      steps: [
        'Sessions defined per chair and clinician',
        'Appointments booked against sessions',
        'Cancellations and no-shows recorded with reasons',
        'Gaps offered to the waiting list',
        'Utilisation measured against clinical hours',
      ],
      note:
        'A gap filled from a waiting list is revenue that would otherwise have been permanently lost.',
    },
    {
      name: 'Recall cycle',
      steps: [
        'Recall date set at the end of a course of treatment',
        'Patients past their date identified',
        'Contact history checked before reminding',
        'Reminder issued and recorded',
        'Appointment booked or outcome recorded',
      ],
      note:
        'Recall is the most predictable revenue in dentistry and depends entirely on the list being worked.',
    },
    {
      name: 'Material readiness',
      steps: [
        'Scheduled procedures for the coming period listed',
        'Material and component requirements derived',
        'Stock checked against requirements and expiry',
        'Order raised with lead time considered',
        'Receipt recorded with batch and expiry',
      ],
      note:
        'Checking against the schedule rather than the cupboard is what stops a cancelled surgical case.',
    },
  ],

  ai: {
    heading: 'Ask about work that stopped.',
    lede:
      'Verity AI reads the same plan, appointment, lab and patient records the practice creates as it works. It answers from your own clinic, respects permissions, and can turn an answer into calls and rescheduling.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice.',
    questions: [
      'Which accepted treatment plans have stalled, and what are they worth?',
      'Which lab cases are past their promised date with appointments booked?',
      'What is chair utilisation by chair and clinician this month?',
      'Which patients are past their recall date with no contact recorded?',
      'Which materials fall short against next week’s scheduled procedures?',
      'What is plan acceptance rate by dentist?',
      'Which appointments were cancelled and not rebooked?',
      'Which laboratories run longest against their promised dates?',
      'Summarise accepted value against delivered value this quarter.',
    ],
  },

  automationHeading: 'The follow-ups that hold the revenue.',
  automationLede:
    'Each runs from the practice records at the point the condition is met.',
  automations: [
    {
      trigger: 'A plan has no scheduled next appointment',
      steps: [
        'Plan flagged with the phase it stopped at and its remaining value',
        'Follow-up assigned to the treating clinician’s coordinator',
        'Outcome recorded on the plan',
      ],
    },
    {
      trigger: 'A lab case approaches its promised date',
      steps: [
        'Case flagged with the appointment it serves',
        'Laboratory chased and the response recorded',
        'Appointment rescheduled proactively if the case will be late',
      ],
    },
    {
      trigger: 'An appointment is cancelled',
      steps: [
        'Gap released and offered to the waiting list',
        'Rebooking task raised for the patient',
        'Reason recorded for utilisation reporting',
      ],
    },
    {
      trigger: 'A patient passes their recall date',
      steps: [
        'Patient flagged with contact history checked',
        'Reminder issued and recorded',
        'Outcome recorded on the patient record',
      ],
    },
    {
      trigger: 'Materials fall short against the schedule',
      steps: [
        'Requirement calculated from scheduled procedures',
        'Order raised with lead time considered',
        'Procedure flagged if the component will not arrive in time',
      ],
    },
    {
      trigger: 'A discount beyond threshold is applied to a plan',
      steps: [
        'Approval raised with the plan value attached',
        'Decision recorded against the plan',
        'Discounting pattern reported by clinician',
      ],
    },
  ],

  intelligenceHeading: 'What the principal can actually see.',
  intelligenceLede:
    'Plan economics and capacity from the practice’s own records.',
  intelligence: [
    {
      area: 'Plans',
      points: [
        'Accepted value against delivered value',
        'Plans stalled by age and value',
        'Acceptance rate by clinician',
        'Completion rate and time to complete',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Chair utilisation by chair and clinician',
        'Cancellations, no-shows and gaps',
        'Waiting list against available slots',
        'Session delivery against session plan',
      ],
    },
    {
      area: 'Lab work',
      points: [
        'Cases out by laboratory and age',
        'Turnaround against promised dates',
        'Cases late against booked appointments',
        'Remakes and their causes',
      ],
    },
    {
      area: 'Patients',
      points: [
        'Recall adherence and overdue recalls',
        'New patients and their referral source',
        'Balances outstanding and ageing',
        'Patients who stopped mid-plan',
      ],
    },
    {
      area: 'Materials',
      points: [
        'Consumption against procedures performed',
        'Stock against the coming schedule',
        'Expiry exposure by value',
        'Supplier lead time and reliability',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds the practice records. Clinical notes, charting and imaging remain in your existing clinical systems.',

  rolesHeading: 'One practice, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Principal',
      question: 'Are we delivering the work patients accepted?',
      focus: 'Accepted against delivered value, stalled plans, chair utilisation, recall adherence.',
    },
    {
      role: 'Practice manager',
      question: 'What needs chasing this week?',
      focus: 'Stalled plans, lab cases at risk, gaps to fill from the waiting list, recalls overdue.',
    },
    {
      role: 'Clinician',
      question: 'Where is this patient in their plan?',
      focus: 'Plan phases and progress, lab cases due, materials required, consents and estimates.',
    },
    {
      role: 'Reception',
      question: 'Who needs booking and who is due?',
      focus: 'Next appointments to book, recalls due, cancellations to refill, balances outstanding.',
    },
  ],

  useCasesHeading: 'What dental practices use Verity for',
  useCases: [
    {
      name: 'Treatment plan tracking',
      body: 'Plans as records with phases and states, so accepted work that stalled halfway is visible by value rather than indistinguishable from completed work.',
    },
    {
      name: 'Lab case management',
      body: 'Cases as orders with a laboratory, a promised date and the appointment they serve, so a late crown means a proactive reschedule rather than a wasted visit.',
    },
    {
      name: 'Chair utilisation',
      body: 'Booked against delivered time per chair and clinician, with gaps offered to the waiting list rather than lost.',
    },
    {
      name: 'Recall management',
      body: 'Recall dates on the patient record with contact history, so the most predictable revenue in the practice depends on a list rather than a person.',
    },
    {
      name: 'Material readiness',
      body: 'Requirements derived from the coming schedule, so a missing component is ordered rather than discovered on the day.',
    },
    {
      name: 'Estimate and consent versions',
      body: 'Plan versions, estimates and consents retained, so what was quoted and agreed is answerable months later.',
    },
    {
      name: 'Clinician performance',
      body: 'Acceptance and completion rates by clinician, from the plans themselves rather than from revenue alone.',
    },
    {
      name: 'Asking the practice questions',
      body: 'Plain-language questions across plans, chairs, lab work and recalls, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Clinical notes, charting and imaging stay in your existing systems and are mapped during implementation. Patients, active treatment plans, recall dates, laboratories and stock are brought across, and Verity is introduced as the practice layer around the clinical work.',

  faqHeading: 'Questions dental practices ask',
  faqs: [
    [
      'Does Verity hold clinical records or imaging?',
      'No. Clinical notes, charting and imaging remain in your existing clinical systems and are mapped during implementation. Verity runs the practice around them — treatment plans, lab cases, chair utilisation, recalls, materials and reporting.',
    ],
    [
      'What can AI software do for a dental clinic?',
      'Verity AI answers questions from your own plan, appointment, lab and patient records: which accepted plans have stalled and what they are worth, which lab cases are late against booked appointments, what chair utilisation looks like, which patients are past their recall. Each answer can become a call or a reschedule.',
    ],
    [
      'How does it help with treatment plans?',
      'A plan is a record with phases, accepted value and a state, so a plan that stopped after two visits is visible with its remaining value — which an appointment diary cannot show, because no appointment looks the same as a finished plan.',
    ],
    [
      'Can it track lab work?',
      'Lab cases are orders with the laboratory, specification, promised return date and the appointment they serve, so a case that will not arrive in time triggers a proactive reschedule rather than a wasted chair slot and a returning patient.',
    ],
    [
      'Does it measure chair utilisation?',
      'Booked and delivered time is recorded per chair and clinician with cancellations and gaps, so utilisation is measurable and gaps can be offered to the waiting list rather than lost permanently.',
    ],
    [
      'Can it manage recalls?',
      'Recall dates sit on the patient record with contact history, so patients past their date become a worked list — and the practice does not remind someone who deferred for a reason it already knows.',
    ],
    [
      'Does it handle materials and implant components?',
      'Stock is held with batch, expiry and reorder points, and requirements are derived from the coming schedule rather than from a cupboard check, so a missing component does not cancel a procedure.',
    ],
    [
      'Is it suitable for a single-chair practice?',
      'A single-chair practice has the same stalled plans, late lab cases and unworked recall list, and less administrative capacity to catch them.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the practice plans and delivers, configuration, migration of patients, plans and recall dates, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the plans that stopped.',
  ctaLede:
    'It is work patients already agreed to and the practice already planned for. Tell us how plans are tracked today.',

  related: ['clinics', 'dermatology-clinics', 'physiotherapy-clinics', 'diagnostic-labs', 'optical-stores', 'hospitals'],
};
