export default {
  slug: 'hospitals',
  status: 'published',
  plural: 'hospitals',
  subject: 'hospital',

  seo: {
    title: 'AI business management software for hospitals | Verity',
    description:
      'Verity connects bed and theatre utilisation, discharge delays, consumable charge capture, insurance claim cycles, equipment maintenance and departmental staffing.',
    keywords: [
      'AI software for hospitals',
      'hospital operations management software',
      'bed and theatre utilisation tracking',
      'charge capture and claim cycle software',
      'hospital equipment maintenance and staffing',
    ],
  },

  hero: {
    eyebrow: 'Verity for hospitals',
    headline: 'The bed was free at eleven. It was occupied again at six.',
    lede:
      'Seven hours of the hospital’s scarcest resource, lost to a discharge process nobody owned. Verity records the operational chain — beds, theatres, consumables, claims — so the losses have causes.',
    note: 'Verity runs hospital operations. Clinical systems and records stay where they are.',
    panel: {
      title: 'Operations',
      meta: 'All departments · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Beds occupied', value: '184 of 220', note: '84% occupancy' },
        { label: 'Discharges pending', value: '17', note: 'clinically cleared' },
        { label: 'Theatre utilisation', value: '61%', note: 'of scheduled hours' },
        { label: 'Claims in query', value: '46', note: '₹38 L with insurers' },
      ],
      rows: [
        { name: '17 clinically cleared patients awaiting discharge', meta: 'Median wait 5h 40m · beds unavailable', active: true },
        { name: '46 claims in query, 12 for missing documentation', meta: 'Documents exist but were not attached', active: true },
        { name: 'Theatre list overran by 90 minutes, two cases deferred', meta: 'Third time this month', active: true },
        { name: 'Consumables used in three procedures not charged', meta: '₹2.4 L this month', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own hospital in this shape.',
    },
  },

  overview: {
    heading: 'A hospital’s scarcest resources are lost to process, not to demand.',
    paragraphs: [
      'A bed, a theatre hour and a specialist’s time are the three things a hospital cannot make more of. Almost none of the loss in any of them is clinical. A bed sits empty because a discharge summary was not written, a pharmacy account was not settled, or transport was not arranged. A theatre list overruns because the previous case started late, and two scheduled cases are deferred. In both, the resource was available and the process was not.',
      'The second structural loss is charge capture. Consumables, implants and services used during care are recorded clinically and then have to be transferred to a bill. Anything that does not make that transfer is care the hospital delivered and did not charge for, and in most hospitals nobody can quantify it because the two records are separate.',
      'The third is the claim cycle. A large share of revenue arrives through insurers and third-party administrators, on a cycle of submission, query and settlement that turns on documentation. Queries are frequently for documents that exist somewhere in the hospital and were never attached — a records problem masquerading as a revenue problem.',
      'The fourth is that departments hold their own information. Housekeeping knows the bed is not cleaned, pharmacy knows the account is open, the ward knows the patient is clinically ready, and nobody holds all three.',
      'Verity is not a clinical system. It records the operational chain around care so these losses become visible with their causes.',
    ],
  },

  terminology: [
    ['Beds, wards, theatres, equipment', 'Records'],
    ['Admissions, procedures, discharges', 'Work'],
    ['Patients, attendants, corporate accounts', 'Relationships'],
    ['Consumables, implants, pharmacy stock', 'Inventory'],
    ['Insurers, TPAs, empanelments, claims', 'Workflows'],
    ['Doctors, nurses, technicians, support staff', 'People'],
    ['Departments, floors, theatres, stores', 'Locations'],
  ],

  challengesHeading: 'Capacity lost to steps nobody owns.',
  challengesLede:
    'Hospital operational losses are handoffs — between clinical and administrative, between departments, between care and billing.',
  challenges: [
    {
      problem: 'Discharge takes hours after clinical clearance',
      detail:
        'A patient is medically ready in the morning and leaves in the evening, and the bed is unavailable for the whole of it. No single person owns the sequence.',
      outcome:
        'Discharge is work with parallel steps and owners, so the step holding the bed is visible while it can be cleared.',
    },
    {
      problem: 'Theatre time is lost to sequencing, not surgery',
      detail:
        'A list starts late or overruns, later cases are deferred, and the cause is attributed to the operation rather than to the turnaround.',
      outcome:
        'Each stage of theatre use is timed, so overrun separates into start delay, procedure time and turnaround.',
    },
    {
      problem: 'Charges are captured clinically and lost commercially',
      detail:
        'Consumables and implants used during a procedure appear in the clinical record and not on the bill, and nobody quantifies the gap.',
      outcome:
        'Stock issued to a patient or procedure is a recorded movement, so items used and not charged are a reconciliation rather than a guess.',
    },
    {
      problem: 'Claims are queried for documents that exist',
      detail:
        'An insurer queries a claim for a report that is in the hospital, because nobody attached it at submission.',
      outcome:
        'Documentation requirements per payer are a checklist on the claim, so submissions are complete the first time.',
    },
    {
      problem: 'Equipment fails without warning',
      detail:
        'Preventive servicing is deferred whenever something urgent happens, and a failure cancels a list.',
      outcome:
        'Service schedules are work with due dates, so deferral is a recorded decision rather than the default.',
    },
    {
      problem: 'Departmental consumption is unattributable',
      detail:
        'Stores issue continuously to wards, theatres and departments, and consumption is reconciled monthly if at all.',
      outcome:
        'Issues are recorded against the department, procedure or patient, so cost is attributable as it occurs.',
    },
  ],

  modulesLede:
    'One system for the operational chain around care. Clinical systems stay where they are.',
  modules: [
    {
      id: 'records',
      title: 'Beds, theatres and equipment',
      line:
        'Beds, theatres and equipment are records with their state, location, service history and the work against them.',
      why:
        'These are the constrained resources, and managing them requires them to be records rather than a whiteboard.',
      example:
        'Beds by state — occupied, cleared for discharge, awaiting cleaning, ready — rather than simply occupied or free.',
    },
    {
      id: 'work',
      title: 'Admissions, procedures and discharges',
      line:
        'Each is work with an owner, parallel steps, timestamps and a state, connected to the patient, bed and theatre involved.',
      why:
        'Discharge in particular is a sequence of parallel administrative steps, and it fails because none of them is owned.',
      example:
        'Seventeen cleared patients waiting, each showing the specific step holding their bed.',
    },
    {
      id: 'inventory',
      title: 'Consumables, implants and pharmacy stock',
      line:
        'Stock is held with batch, expiry, cost and location, and issued against a patient, a procedure or a department.',
      why:
        'Issuing against a patient or procedure is what makes both charge capture and departmental cost possible.',
      example:
        'Two point four lakh of consumables issued to procedures and not charged, identified by reconciliation.',
    },
    {
      id: 'workflows',
      title: 'Claims, approvals and pre-authorisation',
      line:
        'Pre-authorisation, claim submission, query response and settlement are defined steps with payer-specific documentation checklists.',
      why:
        'The claim cycle is a documentation process, and most queries are avoidable at submission.',
      example:
        'Twelve claims queried for documents that were already in the hospital.',
    },
    {
      id: 'people',
      title: 'Doctors, nurses, technicians and support staff',
      line:
        'Staff are modelled once with department and shift, and every work item, issue and check carries who performed it.',
      why:
        'Hospital work crosses departments constantly, and ownership is the only thing that makes a handoff complete.',
      example:
        'Discharge steps by owner and department, showing where the sequence stalls.',
    },
    {
      id: 'workforce',
      title: 'Rosters against occupancy and lists',
      line:
        'Assignment, attendance and availability stay connected to the wards, theatres and shifts they covered.',
      why:
        'Nursing and support cover is derivable from occupancy and theatre schedules, and staffing to a template guarantees gaps.',
      example:
        'Ward cover against occupancy by shift rather than against a fixed establishment.',
    },
    {
      id: 'relationships',
      title: 'Patients, attendants and corporate accounts',
      line:
        'Patients and corporate accounts are records with their admissions, balances, claim history, documents and interactions.',
      why:
        'A patient’s administrative history — approvals, balances, documents — is what determines how smoothly the next episode runs.',
      example:
        'A corporate account with its empanelment terms, claim history and outstanding position.',
    },
    {
      id: 'locations',
      title: 'Departments, floors, theatres and stores',
      line:
        'Locations roll into the hospital and hospitals into the group, with work, stock and reporting following the same structure.',
      why:
        'Departmental cost and utilisation are meaningless unless every department records identically.',
      example:
        'Consumption and utilisation by department, comparable across the hospital and the group.',
    },
    {
      id: 'intelligence',
      title: 'Utilisation, capture and claim reporting',
      line:
        'Bed turnaround and discharge delay, theatre utilisation and its causes, charge capture gaps, claim cycle times and denial reasons, and departmental consumption come from the operational records.',
      why:
        'Hospitals have strong clinical and financial reporting and weak operational reporting, which is where the recoverable capacity is.',
      example:
        'Discharge delay decomposed by step, which is the single largest recoverable capacity number in most hospitals.',
    },
    {
      id: 'ai',
      title: 'Ask the hospital a question',
      line:
        'Verity AI answers from your own operational, stock and claim records, respects permissions, and can create assigned follow-ups.',
      why:
        'The useful questions cross departments, which is precisely what departmental records prevent.',
      example:
        '"Which discharges are held, and by which step?" returns seventeen with the owners named.',
    },
    {
      id: 'control',
      title: 'Access, approvals and audit',
      line:
        'One permission model and one audit trail across every record and department.',
      why:
        'Patient-linked records carry access obligations and stock issues carry value, so both need attribution.',
      example:
        'Every stock issue and every claim submission carries the person and the time.',
    },
    {
      id: 'communication',
      title: 'Handover across departments and shifts',
      line:
        'Notes, notifications and activity attach to the patient episode, bed, claim or asset they concern.',
      why:
        'A hospital runs continuous shifts across many departments, so verbal handover does not survive.',
      example:
        'The reason a discharge is held, visible to the ward, to billing and to housekeeping at once.',
    },
  ],

  workflowsHeading: 'The chain around the care.',
  workflowsLede:
    'These already run. As records with owners and timestamps, the capacity losses acquire causes.',
  workflows: [
    {
      name: 'Discharge',
      steps: [
        'Clinical clearance recorded with a timestamp',
        'Parallel steps opened — summary, pharmacy, billing, approvals, transport',
        'Each step assigned to a department owner',
        'Blocking step visible with the bed it is holding',
        'Patient discharged and the bed released for turnaround',
        'Total delay recorded and attributed by step',
      ],
      note:
        'Running the steps in parallel with named owners is what turns a seven-hour discharge into a two-hour one.',
    },
    {
      name: 'Bed turnaround',
      steps: [
        'Bed released and queued for cleaning',
        'Housekeeping job assigned with a target time',
        'Cleaning completed and the bed inspected',
        'Faults raised as maintenance work rather than passed verbally',
        'Bed marked ready and the turnaround time recorded',
      ],
      note:
        'The bed is not available when the patient leaves; it is available when it is ready, and only one of those is usually measured.',
    },
    {
      name: 'Theatre list',
      steps: [
        'List scheduled with cases, teams and expected durations',
        'Start time recorded against the scheduled time',
        'Procedure and turnaround times captured per case',
        'Consumables and implants issued against the case',
        'Overrun and deferrals recorded with causes',
        'Utilisation calculated against scheduled hours',
      ],
      note:
        'Separating start delay from procedure time from turnaround is what makes an overrun fixable.',
    },
    {
      name: 'Charge capture reconciliation',
      steps: [
        'Consumables and implants issued against patient or procedure',
        'Issued items reconciled against items billed',
        'Gaps raised as exceptions with the episode named',
        'Charges added or a write-off recorded with a reason',
        'Recurring gap patterns surfaced by department and item',
      ],
      note:
        'This reconciliation typically recovers a meaningful sum and is rarely run because the two records are separate.',
    },
    {
      name: 'Insurance claim cycle',
      steps: [
        'Pre-authorisation raised and tracked against the payer',
        'Documentation checklist applied for that payer',
        'Claim submitted with the checklist complete',
        'Queries received, mapped to the missing item and answered',
        'Settlement recorded and any shortfall analysed',
        'Denial reasons aggregated by payer and cause',
      ],
      note:
        'Most queries are avoidable at submission, which makes the checklist the highest-value part of the cycle.',
    },
    {
      name: 'Equipment maintenance',
      steps: [
        'Service schedules held against equipment',
        'Jobs raised automatically as they fall due',
        'Scheduling balanced against theatre and ward demand',
        'Completion recorded against the asset history',
        'Deferrals recorded as decisions with reasons',
      ],
      note:
        'A failure that cancels a theatre list costs far more than the service that was deferred.',
    },
  ],

  ai: {
    heading: 'Ask across departments.',
    lede:
      'Verity AI reads the same operational, stock and claim records the hospital creates as it runs. It answers from your own site, respects permissions, and can turn an answer into work assigned to the department that owns it.',
    panelMeta: 'Grounded in your operational records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice.',
    questions: [
      'Which discharges are held, and by which step and department?',
      'What is median discharge delay this month, and where is the time going?',
      'What is theatre utilisation, and how much is lost to start delay versus turnaround?',
      'Which consumables were issued to procedures and not charged?',
      'Which claims are in query, and for what reason?',
      'Which payers deny most often, and on what grounds?',
      'Which equipment is overdue for service?',
      'Is ward cover matched to occupancy this shift?',
      'Summarise capacity losses across the hospital today.',
    ],
  },

  automationHeading: 'The steps that hold a bed.',
  automationLede:
    'Each runs from the operational records at the point the condition is met.',
  automations: [
    {
      trigger: 'A patient is clinically cleared for discharge',
      steps: [
        'Parallel discharge steps opened with department owners',
        'Blocking step surfaced with the bed it is holding',
        'Escalated as the delay passes threshold',
        'Total delay attributed by step on completion',
      ],
    },
    {
      trigger: 'A bed is released',
      steps: [
        'Housekeeping turnaround job created with a target',
        'Faults raised as maintenance work if found',
        'Bed marked ready and turnaround time recorded',
      ],
    },
    {
      trigger: 'Consumables are issued against a procedure',
      steps: [
        'Issue recorded against the patient or case',
        'Reconciliation raised against billed items',
        'Gap flagged for charge addition or recorded write-off',
      ],
    },
    {
      trigger: 'A claim is prepared for submission',
      steps: [
        'Payer documentation checklist applied',
        'Missing items flagged before submission',
        'Submission recorded once the checklist is complete',
      ],
    },
    {
      trigger: 'A claim query is received',
      steps: [
        'Query mapped to the missing document or information',
        'Response task assigned with the deadline',
        'Reason aggregated by payer for the denial review',
      ],
    },
    {
      trigger: 'Equipment service falls due',
      steps: [
        'Job raised against the asset',
        'Scheduled against theatre and ward demand',
        'Deferral recorded as a decision if postponed',
      ],
    },
  ],

  intelligenceHeading: 'What the administrator can actually see.',
  intelligenceLede:
    'Capacity, capture and claim performance from operational records.',
  intelligence: [
    {
      area: 'Capacity',
      points: [
        'Occupancy and bed turnaround time',
        'Discharge delay decomposed by step and department',
        'Theatre utilisation against scheduled hours',
        'Start delay, procedure time and turnaround separately',
      ],
    },
    {
      area: 'Revenue capture',
      points: [
        'Items issued against items billed',
        'Charge capture gaps by department and item',
        'Write-offs recorded with reasons',
        'Recurring capture failures by procedure type',
      ],
    },
    {
      area: 'Claims',
      points: [
        'Claim cycle time from submission to settlement',
        'Queries by reason and by payer',
        'Denial rates and grounds',
        'Outstanding claim value by age',
      ],
    },
    {
      area: 'Staffing',
      points: [
        'Ward and theatre cover against occupancy and lists',
        'Attendance against roster',
        'Work completed per person by department',
        'Overtime and coverage gaps',
      ],
    },
    {
      area: 'Assets and stock',
      points: [
        'Equipment service compliance and deferrals',
        'Failures and their operational impact',
        'Consumable consumption by department and procedure',
        'Expiry exposure in stores and pharmacy',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds the operational records. Clinical systems, patient records and diagnostic reporting remain in your existing platforms.',

  rolesHeading: 'Many departments, one set of records.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Hospital administrator',
      question: 'Where are we losing capacity and revenue?',
      focus: 'Discharge delay by step, theatre utilisation, charge capture gaps, claim denial rates.',
    },
    {
      role: 'Nursing superintendent',
      question: 'Are wards covered and are discharges moving?',
      focus: 'Cover against occupancy, discharge steps outstanding, bed turnaround, faults raised.',
    },
    {
      role: 'Theatre manager',
      question: 'Why did the list overrun?',
      focus: 'Start delay, procedure and turnaround times, deferrals, equipment readiness, consumables issued.',
    },
    {
      role: 'Billing and claims',
      question: 'What is unbilled and what is queried?',
      focus: 'Charge capture gaps, claims in query by reason, documentation checklists, outstanding claim value.',
    },
    {
      role: 'Stores and biomedical',
      question: 'What is consumed and what is due for service?',
      focus: 'Issues by department and procedure, expiry exposure, service schedules due, equipment failures.',
    },
  ],

  useCasesHeading: 'What hospitals use Verity for',
  useCases: [
    {
      name: 'Discharge process control',
      body: 'Parallel discharge steps with department owners, so the step holding a bed is visible and attributable rather than diffuse.',
    },
    {
      name: 'Bed turnaround',
      body: 'Beds tracked through released, cleaning, inspected and ready, so availability is measured from readiness rather than from departure.',
    },
    {
      name: 'Theatre utilisation analysis',
      body: 'Start delay, procedure time and turnaround timed separately, so an overrun resolves into a cause rather than into blame.',
    },
    {
      name: 'Charge capture reconciliation',
      body: 'Stock issued against a patient or procedure reconciled with what was billed, recovering care delivered and not charged.',
    },
    {
      name: 'Claim documentation checklists',
      body: 'Payer-specific requirements applied before submission, removing the queries raised for documents the hospital already holds.',
    },
    {
      name: 'Denial analysis',
      body: 'Query and denial reasons aggregated by payer and cause, so the same rejection stops recurring.',
    },
    {
      name: 'Equipment service compliance',
      body: 'Service schedules as work with due dates and recorded deferrals, so a failure that cancels a list is a choice rather than a surprise.',
    },
    {
      name: 'Departmental cost attribution',
      body: 'Stores issues recorded against department, procedure or patient, so consumption is attributable as it happens.',
    },
    {
      name: 'Asking across departments',
      body: 'Plain-language questions spanning beds, theatres, stock, claims and staffing, with work assigned in the same step.',
    },
  ],

  migration:
    'Clinical systems, patient records and diagnostic platforms continue to run and are mapped during implementation. Beds, theatres, equipment and service schedules, stores, payers and open claims are brought across, and Verity is introduced as the operational layer around care.',

  faqHeading: 'Questions hospitals ask',
  faqs: [
    [
      'Does Verity replace our hospital information or clinical system?',
      'No. Clinical records, orders, results and diagnostic reporting stay in your existing systems and are mapped during implementation. Verity holds the operational chain around care — beds and theatres, discharge, stores and charge capture, claims, equipment and departmental staffing.',
    ],
    [
      'What can AI software do for a hospital?',
      'Verity AI answers questions from your own operational, stock and claim records: which discharges are held and by which step, where theatre time is being lost, which consumables were issued and not charged, which claims are queried and why. Each answer can become work assigned to the department that owns it.',
    ],
    [
      'How does it reduce discharge delay?',
      'Discharge becomes work with parallel steps and named department owners, so the specific step holding a bed is visible while it can still be cleared. Total delay is then attributed by step, which is what makes the process improvable rather than merely lamented.',
    ],
    [
      'Can it help with theatre utilisation?',
      'Start time against scheduled time, procedure duration and turnaround are timed separately, so an overrun separates into causes. Most lost theatre time is sequencing rather than surgery, and only stage-level timing shows that.',
    ],
    [
      'What is charge capture and how does Verity help?',
      'Consumables and implants used in care are recorded clinically and must transfer to a bill. Verity records stock issued against a patient or procedure, then reconciles it against what was billed, so items used and not charged become an exception rather than an unmeasured loss.',
    ],
    [
      'Does it help with insurance claims?',
      'Payer-specific documentation checklists are applied before submission, queries are mapped to the item that was missing, and denial reasons are aggregated by payer — which removes the large share of queries raised for documents the hospital already holds.',
    ],
    [
      'Can it manage equipment maintenance?',
      'Service schedules are work with due dates against each asset, scheduled around theatre and ward demand, and deferrals are recorded as decisions rather than happening by default.',
    ],
    [
      'Does it work across a group of hospitals?',
      'Departments, floors, theatres and stores roll into a hospital and hospitals into the group, all recording identically, so utilisation, capture and claim performance are comparable across sites.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the operational chain, configuration of departments, payers and schedules, migration of assets, stores and open claims, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with discharge delay.',
  ctaLede:
    'It is usually the largest recoverable capacity in a hospital and it belongs to no single department. Tell us how the process runs today.',

  related: ['clinics', 'diagnostic-labs', 'dental-clinics', 'pharmacies', 'medical-distributors', 'facility-management'],
};
