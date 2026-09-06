export default {
  slug: 'skill-training-institutes',
  status: 'published',
  plural: 'skill training institutes',
  subject: 'skill training institute',

  seo: {
    title: 'AI business management software for skill training institutes | Verity',
    description:
      'Verity connects placement outcomes, employer relationships, batch and lab capacity, certification body requirements and funding scheme compliance into one system.',
    keywords: [
      'AI software for skill training institutes',
      'skill development institute management software',
      'placement outcome and employer relationship tracking',
      'batch capacity and certification compliance software',
    ],
  },

  hero: {
    eyebrow: 'Verity for skill training',
    headline: 'You are selling a job, and the placement rate is the only thing that proves it.',
    lede:
      'Skill training is bought for an outcome and measured on placement. Verity tracks the outcome, the employers who provide it and the batch economics behind both.',
    note: 'Verity runs the institute. Training content and assessment platforms stay where they are.',
    panel: {
      title: 'Institute',
      meta: 'Current cycle',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Trainees enrolled', value: '840', note: 'across 26 batches' },
        { label: 'Placement rate', value: '58%', note: 'within 90 days of completion' },
        { label: 'Employers engaged', value: '46', note: '14 inactive this cycle' },
        { label: 'Batches below viable', value: '5', note: 'lab and trainer committed' },
      ],
      rows: [
        { name: '14 employers who hired last cycle have not this cycle', meta: 'The placement pipeline narrowing', active: true },
        { name: '5 batches below viable size', meta: 'Lab slots and trainer committed', active: true },
        { name: 'Placement outcomes unverified for 86 completions', meta: 'Claimed rate not evidenced', active: true },
        { name: 'Certification body requirements not fully documented', meta: '2 programmes · audit due', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own institute in this shape.',
    },
  },

  overview: {
    heading: 'The product is a job, and the proof is a placement you can evidence.',
    paragraphs: [
      'A skill training institute sells an outcome. Trainees enrol because they expect employment, employers engage because they need candidates, and funders support programmes on the basis of placement rates. All three depend on a placement figure that has to be verifiable, and eighty-six completions with unverified outcomes is a claimed rate rather than an evidenced one.',
      'The second characteristic is the employer relationship, which is the actual supply of placements. Fourteen employers who hired last cycle and have not this cycle is the placement pipeline narrowing before the placement rate falls.',
      'The third is batch and lab economics. Practical training needs equipment and lab slots as well as a trainer, which makes an under-filled batch more expensive than in classroom-only teaching.',
      'The fourth is certification. Programmes are accredited by bodies with documentation requirements that are audited, and evidence has to exist as records made during delivery.',
      'The fifth is funding compliance, where schemes attach conditions to enrolment, attendance and outcomes.',
      'Verity tracks placement with evidence, holds the employer relationships that supply it, and manages batch and lab economics.',
    ],
  },

  terminology: [
    ['Programmes, batches, modules', 'Work'],
    ['Trainees, alumni, candidates', 'Relationships'],
    ['Employers, recruiters, partners', 'Relationships'],
    ['Placements, outcomes, verification', 'Workflows'],
    ['Labs, equipment, consumables', 'Inventory'],
    ['Trainers, assessors, placement staff', 'People'],
    ['Certification, funding, audit evidence', 'Control'],
  ],

  challengesHeading: 'An outcome you must evidence and a pipeline you must maintain.',
  challengesLede:
    'Skill training difficulties come from selling employment and depending on employers to supply it.',
  challenges: [
    { problem: 'Placement outcomes are claimed rather than evidenced', detail: 'A placement rate is reported from what trainees said, and verification is partial.', outcome: 'Placements carry employer, role, start date and verification state, so the rate is evidenced.' },
    { problem: 'The employer pipeline narrows quietly', detail: 'Employers who hired previously stop, and it becomes visible when placement falls.', outcome: 'Employer engagement is tracked per cycle, so a narrowing pipeline is visible early.' },
    { problem: 'Batches run below viability against lab cost', detail: 'Practical training commits lab slots and equipment as well as a trainer.', outcome: 'Viability includes lab and equipment cost, so under-filled batches are a decision before the cycle.' },
    { problem: 'Certification evidence is assembled at audit', detail: 'Accreditation bodies require documentation that should have been created during delivery.', outcome: 'Evidence requirements are checklist items completed as the programme runs.' },
    { problem: 'Funding conditions attach to attendance and outcomes', detail: 'Scheme funding depends on enrolment, attendance and placement conditions tracked separately.', outcome: 'Funding conditions are recorded against the programme with compliance reportable.' },
    { problem: 'Alumni are not maintained as a placement asset', detail: 'Placed alumni are the institute’s best route to more employers and are rarely contacted.', outcome: 'Alumni are records with employer, role and progression, usable for future placement.' },
  ],

  modulesLede: 'One system across delivery, placement, employers and compliance.',
  modules: [
    { id: 'work', title: 'Programmes, batches and modules', line: 'Each batch is work with a programme, trainer, lab requirement, schedule, enrolment and viability threshold including equipment cost.', why: 'Practical training commits more than a trainer, which changes the viability calculation.', example: 'Five batches below viable size with lab slots and trainer committed.' },
    { id: 'workflows', title: 'Placements, outcomes and verification', line: 'Placements carry employer, role, salary band, start date, verification state and retention at intervals.', why: 'The placement rate is the product and has to be evidenced rather than claimed.', example: 'Eighty-six completions with unverified outcomes.' },
    { id: 'relationships', title: 'Employers, trainees and alumni', line: 'Employers carry their hiring history, requirements and engagement per cycle; trainees carry their programme, attendance, assessment and placement.', why: 'Employers supply the outcome and alumni open the next employer.', example: 'Fourteen employers who hired last cycle and have not this one.' },
    { id: 'inventory', title: 'Labs, equipment and consumables', line: 'Lab capacity, equipment condition and consumables per trainee are recorded against batches.', why: 'Practical training consumes materials per trainee and equipment hours per batch.', example: 'Consumable cost per trainee by programme.' },
    { id: 'control', title: 'Certification, funding and audit evidence', line: 'One permission model and one audit trail, with certification requirements and funding conditions as reportable states.', why: 'Accreditation and funding both audit records made during delivery.', example: 'Certification evidence completeness by programme ahead of audit.' },
    { id: 'people', title: 'Trainers, assessors and placement staff', line: 'Staff are modelled once, with batches, assessments and placements attributed.', why: 'Placement outcomes vary by trainer and by placement officer.', example: 'Placement rate by trainer cohort and placement officer.' },
    { id: 'intelligence', title: 'Placement, viability and compliance reporting', line: 'Verified placement rates, employer engagement, batch viability, consumable cost and certification completeness come from the records.', why: 'The institute is judged on placement and funded on compliance, and both are recordable.', example: 'Verified placement rate by programme and cohort.' },
    { id: 'ai', title: 'Ask the institute a question', line: 'Verity AI answers from your own trainee, batch, employer and placement records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about employers and verification.', example: '"Which employers hired last cycle and not this one?" returns fourteen with contact assigned.' },
    { id: 'communication', title: 'Employer and trainee contact', line: 'Employer engagement, trainee follow-up and verification contact attach to the record they concern.', why: 'Verification and employer engagement are both contact activities.', example: 'A placement verification call recorded against the trainee and employer.' },
    { id: 'records', title: 'Assessments and certification documents', line: 'Assessments, certificates and required documentation attach to the trainee and programme.', why: 'Certification bodies audit documentation created during delivery.', example: 'Assessment records complete per trainee before certification.' },
    { id: 'locations', title: 'Centres, labs and classrooms', line: 'Locations carry lab capacity, equipment and batch allocation.', why: 'Lab capacity constrains how many practical batches can run.', example: 'Lab utilisation against practical batch demand.' },
    { id: 'orders', title: 'Fees, funding and instalments', line: 'Trainee fees, scheme funding and instalments are recorded against trainees and programmes.', why: 'Funded and self-paid trainees follow different rules in the same batch.', example: 'Funded and self-paid trainees tracked separately within one batch.' },
  ],

  workflowsHeading: 'Enrol, train, assess, place, verify.',
  workflowsLede: 'These already happen. Recorded, the placement rate becomes evidence.',
  workflows: [
    { name: 'Batch formation', steps: ['Programme scheduled with trainer and lab requirement', 'Viability calculated including equipment and consumables', 'Enrolment tracked against the threshold', 'Merge, defer or proceed decided before the cycle', 'Funding eligibility confirmed per trainee'], note: 'Practical training viability must include lab and consumable cost, not just trainer cost.' },
    { name: 'Delivery and assessment', steps: ['Attendance recorded against funding conditions', 'Modules delivered with consumables recorded', 'Assessments conducted and documented', 'Certification requirements completed as they arise', 'Completion recorded with evidence'], note: 'Creating evidence during delivery is the difference between an audit and a reconstruction.' },
    { name: 'Placement', steps: ['Employer requirements captured', 'Candidates matched from completing cohorts', 'Interviews arranged and outcomes recorded', 'Offer and start date recorded', 'Verification obtained from the employer or trainee'], note: 'Verification is what turns a claimed rate into an evidenced one.' },
    { name: 'Employer engagement', steps: ['Employer hiring history reviewed by cycle', 'Employers who have not engaged this cycle identified', 'Contact assigned with previous hires attached', 'Requirements captured for the coming cohort', 'Outcome recorded'], note: 'The pipeline narrows before the placement rate falls, and only the record shows it.' },
    { name: 'Compliance and audit', steps: ['Certification and funding requirements mapped', 'Evidence created during delivery', 'Completeness reported per programme', 'Gaps raised as exceptions with owners', 'Audit submission assembled from records'], note: 'Funding and accreditation both audit what was recorded at the time.' },
  ],

  ai: {
    heading: 'Ask about placement and employers.',
    lede: 'Verity AI reads the same trainee, batch, employer and placement records the institute creates as it works. It answers from your own institute, respects permissions, and can turn an answer into contact and decisions.',
    panelMeta: 'Grounded in your institute records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which employers hired last cycle and have not this cycle?',
      'Which placements are unverified?',
      'Which batches are below viable size including lab cost?',
      'What is verified placement rate by programme and cohort?',
      'Which certification evidence is missing ahead of audit?',
      'What is consumable cost per trainee by programme?',
      'Which funding conditions are at risk on attendance?',
      'Which alumni are placed with employers we could re-engage?',
      'Summarise placement and compliance position.',
    ],
  },

  automationHeading: 'Pipeline and evidence.',
  automationLede: 'Each runs from the institute’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An employer does not engage in a cycle', steps: ['Flagged with previous hiring history', 'Contact assigned to the placement team', 'Requirements captured or outcome recorded'] },
    { trigger: 'A trainee completes without verified placement', steps: ['Verification task raised', 'Employer or trainee contacted', 'Outcome and evidence recorded'] },
    { trigger: 'Batch enrolment stays below viability', steps: ['Flagged with trainer, lab and consumable cost', 'Merge or defer decision raised', 'Outcome recorded'] },
    { trigger: 'Attendance falls below a funding condition', steps: ['Trainee and programme flagged', 'Intervention assigned', 'Compliance position updated'] },
    { trigger: 'Certification evidence is incomplete', steps: ['Exception raised against the programme', 'Owner assigned', 'Completeness updated on receipt'] },
  ],

  intelligenceHeading: 'What the institute can see.',
  intelligenceLede: 'Outcome, pipeline and compliance from delivery records.',
  intelligence: [
    { area: 'Placement', points: ['Verified placement rate by programme and cohort', 'Time to placement after completion', 'Salary bands and role types', 'Retention at intervals after placement'] },
    { area: 'Employers', points: ['Hiring by employer and cycle', 'Employers engaged and lapsed', 'Requirements by employer', 'Conversion from interview to offer'] },
    { area: 'Delivery', points: ['Batch viability including lab cost', 'Attendance against funding conditions', 'Assessment completion', 'Consumable cost per trainee'] },
    { area: 'Compliance', points: ['Certification evidence completeness', 'Funding condition adherence', 'Audit exceptions and closure', 'Documentation by programme'] },
  ],
  intelligenceNote: 'Verity records the institute’s operations. Training content and assessment platforms continue as they are.',

  rolesHeading: 'One institute, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Director', question: 'Is the placement outcome real and holding?', focus: 'Verified placement rate, employer engagement, batch viability, compliance readiness.' },
    { role: 'Placement officer', question: 'Which employers and which candidates?', focus: 'Employer requirements and engagement, candidates completing, interviews and offers, verification outstanding.' },
    { role: 'Trainer', question: 'Is my batch on track?', focus: 'Attendance and funding conditions, assessments, consumables, completion evidence.' },
    { role: 'Compliance', question: 'Are we audit-ready?', focus: 'Certification evidence completeness, funding conditions, exceptions and closure, documentation gaps.' },
  ],

  useCasesHeading: 'What skill training institutes use Verity for',
  useCases: [
    { name: 'Verified placement rates', body: 'Placements carrying employer, role, start date and verification, so the rate the institute markets is evidenced rather than claimed.' },
    { name: 'Employer pipeline maintenance', body: 'Engagement tracked per cycle, so a narrowing pipeline is visible before the placement rate falls.' },
    { name: 'Batch viability with lab cost', body: 'Viability calculated including equipment and consumables, since practical training commits more than a trainer.' },
    { name: 'Compliance evidence during delivery', body: 'Certification and funding requirements completed as the programme runs rather than reconstructed at audit.' },
    { name: 'Consumable cost per trainee', body: 'Materials recorded against batches, making practical programme economics visible.' },
    { name: 'Alumni as a placement asset', body: 'Placed alumni with employer and role, usable to open further employer relationships.' },
    { name: 'Asking about outcomes', body: 'Plain-language questions across placement, employers, batches and compliance, with contact raised in the same step.' },
  ],

  migration: 'Training content and assessment platforms continue and are mapped during implementation. Trainees, batches, employers with hiring history, placements and compliance requirements are brought across.',

  faqHeading: 'Questions skill training institutes ask',
  faqs: [
    ['What can AI software do for a skill training institute?', 'Verity AI answers questions from your own trainee, batch, employer and placement records: which employers hired last cycle and not this one, which placements are unverified, which batches are below viable size including lab cost, which certification evidence is missing. Each answer can become contact or a decision.'],
    ['Why does verification matter so much?', 'Because the placement rate is the product. Trainees enrol for it, employers judge on it and funders support programmes on the basis of it — and a rate reported from what trainees said is a claim rather than evidence.'],
    ['How does employer tracking help?', 'Employers supply the placements. Engagement recorded per cycle shows the pipeline narrowing before the placement rate falls, which is months of warning rather than a surprise at the end of a cohort.'],
    ['Why include lab cost in viability?', 'Because practical training commits equipment hours and consumables per trainee as well as a trainer. A batch that would be viable in a classroom can be loss-making in a lab.'],
    ['Can it help with certification audits?', 'Certification and funding requirements are checklist items completed during delivery with completeness reportable, so an audit is a submission from records rather than a reconstruction.'],
    ['Does it track funding conditions?', 'Scheme conditions on enrolment, attendance and outcomes are recorded against the programme with compliance reportable and at-risk trainees flagged during delivery.'],
    ['Can alumni help with placement?', 'Placed alumni are records with employer, role and progression, which makes them a route to further employer relationships rather than a list nobody maintains.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of programmes, viability, certification and funding requirements, configuration, migration of trainees, employers and placements, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the employers who stopped hiring.',
  ctaLede: 'They are the placement rate falling before it falls. Tell us how employer engagement is tracked today.',

  related: ['vocational-training-centres', 'coaching-institutes', 'recruitment-agencies', 'colleges', 'edtech-companies', 'language-institutes'],
};
