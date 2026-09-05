export default {
  slug: 'clinics',
  status: 'published',
  plural: 'clinics',
  subject: 'clinic',

  seo: {
    title: 'AI business management software for clinics | Verity',
    description:
      'Verity runs the practice around the care: rosters, consumables, patient records, follow-ups, documentation and multi-branch reporting in one operational system.',
    keywords: [
      'AI software for clinics',
      'clinic management software',
      'practice management software',
      'multi branch clinic operations software',
      'clinic reporting and staff rostering',
    ],
  },

  hero: {
    eyebrow: 'Verity for clinics',
    headline: 'The clinical work is the easy part to see. The practice around it is not.',
    lede:
      'Rosters, consumables, follow-ups, documentation and reporting decide whether a clinic runs well, and none of them are clinical decisions. Verity holds that operational layer on one record model.',
    note: 'Verity is not a clinical or diagnostic system. It runs the practice around the care.',
    panel: {
      title: 'Practice',
      meta: 'All branches · This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Consultations', value: '486', note: 'across 3 branches' },
        { label: 'Follow-ups due', value: '73', note: '18 already overdue' },
        { label: 'Consumables low', value: '9', note: 'against next week’s load' },
        { label: 'Staff coverage', value: '92%', note: 'of planned roster hours' },
      ],
      rows: [
        { name: '18 follow-ups overdue past their review date', meta: 'Oldest 22 days · 2 branches', active: true },
        { name: 'Consumable stock short for Thursday’s list', meta: 'Branch 2 · supplier lead time 3 days', active: true },
        { name: 'Friday evening slot uncovered', meta: 'One clinician on leave · no replacement assigned', active: true },
        { name: 'Consent documentation incomplete', meta: '6 records · flagged at review', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'A clinic is a small operation carrying a large compliance load.',
    paragraphs: [
      'The clinical side of a practice is well defined: a patient arrives, is seen, is treated, and either returns or does not. Around it sits an operation that is far less defined and consumes most of the administrative effort. Clinicians and support staff must be rostered across sessions. Consumables, reagents and disposables must be in stock before the list that needs them. Records must be retained, retrievable and complete. Follow-ups must actually happen. Each of those has a compliance dimension, and each is usually managed on paper or in a spreadsheet.',
      'The most expensive failure in a clinic is the one nobody notices: the patient who should have returned in six weeks and did not. In most practices that is tracked in a diary or not at all, so the clinical outcome and the commercial outcome are both quietly lost.',
      'The second is coverage. A session with no clinician assigned, or a support role uncovered on a busy afternoon, is discovered on the day. Staffing is planned from a template rather than from what the equivalent session actually saw last month.',
      'Verity holds the people, the work, the records, the consumable stock, the workflows and the permissions on one model. It is not a clinical system and does not attempt to be — it manages the practice around the clinic so the clinical side can function.',
    ],
  },

  terminology: [
    ['Patients, families, referrers', 'Relationships'],
    ['Consultations, procedures, follow-ups', 'Work'],
    ['Case notes, consents, reports', 'Records'],
    ['Clinicians, nurses, front desk', 'People'],
    ['Consumables, reagents, disposables', 'Inventory'],
    ['Sessions, rosters, leave', 'Workforce'],
    ['Branches, rooms, chairs', 'Locations'],
  ],

  challengesHeading: 'The operational failures look clinical from outside.',
  challengesLede:
    'A patient who was not followed up and a session that ran short-staffed both present as a quality problem. Both are record-keeping problems.',
  challenges: [
    {
      problem: 'Follow-ups depend on someone remembering',
      detail:
        'The patient who should return in six weeks is noted in a diary. If nobody works the diary, the return never happens and nobody knows it did not.',
      outcome:
        'A follow-up is work with a due date and an owner, so overdue reviews appear as a list rather than as an absence.',
    },
    {
      problem: 'Consumables run out mid-week',
      detail:
        'Stock is checked by eye and reordered reactively, so a shortage is discovered on the morning of the list that needs it.',
      outcome:
        'Consumables are stock with levels and lead times, checked against the coming week’s load rather than against a shelf.',
    },
    {
      problem: 'Rosters are planned on a template',
      detail:
        'Sessions are staffed the way they were last month, regardless of what the equivalent session actually saw in volume.',
      outcome:
        'Attendance and session records connect staffing to the load it covered, so rostering can be planned against history.',
    },
    {
      problem: 'Documentation gaps surface at audit',
      detail:
        'Consents, reports and retention requirements are complete for most records and incomplete for a few, and which few is unknown until someone checks.',
      outcome:
        'Documentation is attached to the record it belongs to with completeness as a state, so gaps surface as exceptions rather than at review.',
    },
    {
      problem: 'Branches report differently',
      detail:
        'Each site counts consultations, no-shows and revenue in its own way, and the group picture is assembled monthly by hand.',
      outcome:
        'Branches are locations rolling into the practice, so comparison is the same records rather than a reconciliation.',
    },
    {
      problem: 'Referral relationships are not tracked',
      detail:
        'Referrers who send patients regularly are appreciated informally, and a referrer who stops is noticed a year later.',
      outcome:
        'Referrers are relationships with their referral history, so a drop is visible while it can still be discussed.',
    },
  ],

  modulesLede:
    'Verity manages the practice, not the clinical decision. These are the parts a clinic works with.',
  modules: [
    {
      id: 'work',
      title: 'Consultations, procedures and follow-ups',
      line:
        'Each is work with an owner, a due date and a state, connected to the patient record and the session it belongs to.',
      why:
        'The follow-up is the single most valuable and most frequently lost item in a practice, and it is only reliable if it is work with an owner.',
      example:
        'Seventy-three follow-ups due this week, eighteen already overdue, each showing the clinician responsible for the review.',
    },
    {
      id: 'records',
      title: 'Case records, consents and reports',
      line:
        'Documents attach to the record they belong to, with the same permission model and history as everything else, and completeness held as a state.',
      why:
        'Retention and retrievability are obligations, and the moment a record is needed is never the moment anyone has time to look for it.',
      example:
        'A patient returns after two years. The history, the consents and the reports are on one record rather than across a folder, a drive and a filing cabinet.',
    },
    {
      id: 'people',
      title: 'Clinicians, nurses and front desk',
      line:
        'Teams, roles and responsibilities are modelled once, and every record shows who owns it and who last acted on it.',
      why:
        'In a practice where several people touch the same patient, the useful question is always who owns the next action.',
      example:
        'An overdue follow-up shows the clinician responsible and escalates if it is not actioned.',
    },
    {
      id: 'workforce',
      title: 'Sessions, rosters and leave',
      line:
        'Assignment, attendance and availability stay connected to the sessions they cover.',
      why:
        'Coverage failures are the operational problem patients actually experience, and they are almost always discovered on the day.',
      example:
        'A Friday evening session with no clinician assigned is an exception on Tuesday rather than a problem on Friday.',
    },
    {
      id: 'inventory',
      title: 'Consumables, disposables and supplies',
      line:
        'Stock held with supplier, cost, batch, expiry and location, moving as it is received and consumed.',
      why:
        'Clinical consumables have lead times and expiry dates, and both matter more than the quantity on the shelf.',
      example:
        'Nine items short against next week’s expected load, flagged while the supplier’s three-day lead time can still be met.',
    },
    {
      id: 'relationships',
      title: 'Patients and referrers',
      line:
        'Patients and referring practitioners are records with their history, appointments, outstanding balances and interactions.',
      why:
        'The commercial health of a clinic is mostly the health of its return rate and its referral sources, and neither is visible without records.',
      example:
        'A referrer who sent eight patients a quarter and none since March is on a list rather than an eventual realisation.',
    },
    {
      id: 'workflows',
      title: 'Approvals, escalations and review steps',
      line:
        'Documentation checks, refunds, write-offs and escalations move through defined steps with an owner and a recorded decision.',
      why:
        'Practices run on exceptions handled informally, which is exactly what makes them invisible when they recur.',
      example:
        'A billing write-off above the practice manager’s threshold becomes an approval with a reason attached.',
    },
    {
      id: 'control',
      title: 'Permissions and audit trail',
      line:
        'One permission model and one audit trail across every record in the practice.',
      why:
        'Health-adjacent records carry access obligations, and "who saw this and when" should never be an unanswerable question.',
      example:
        'Front desk sees scheduling and balances; clinical staff see the records they are entitled to; every access is on the trail.',
    },
    {
      id: 'locations',
      title: 'Branches, rooms and chairs',
      line:
        'Locations roll into the practice, with permissions, reporting and exceptions following the same structure.',
      why:
        'Multi-site practices cannot compare performance unless every site records the same things the same way.',
      example:
        'Consultation volume, no-show rate and follow-up compliance by branch, from one set of records.',
    },
    {
      id: 'intelligence',
      title: 'Practice reporting from live records',
      line:
        'Volume, no-show rates, follow-up compliance, consumable consumption, staffing against load and referral sources come from the operational records.',
      why:
        'A practice usually knows its revenue and very little else, because everything else would require assembling.',
      example:
        'Follow-up compliance by clinician and branch, current rather than compiled at the end of a quarter.',
    },
    {
      id: 'ai',
      title: 'Ask the practice a question',
      line:
        'Verity AI answers from your own operational records, only shows what the person asking is permitted to see, and can create assigned follow-ups.',
      why:
        'The questions that matter to a practice manager span scheduling, stock, staffing and follow-up at once.',
      example:
        '"Which follow-ups are overdue, and who owns them?" returns eighteen, and one instruction assigns the reviews.',
    },
    {
      id: 'communication',
      title: 'Notes and notifications on the record',
      line:
        'Comments, notifications and activity attach to the record they concern rather than circulating separately.',
      why:
        'Practice context passed verbally between sessions is lost the moment someone is on leave.',
      example:
        'The note about a patient’s scheduling constraint sits on their record, where the front desk will actually see it.',
    },
  ],

  workflowsHeading: 'The practice, recorded as it runs.',
  workflowsLede:
    'These sequences already happen. In Verity each step is a state on a record, so the ones that do not happen are visible.',
  workflows: [
    {
      name: 'Consultation to follow-up',
      steps: [
        'Consultation recorded against the patient and the session',
        'Documentation and consents attached to the record',
        'Follow-up created with a review date and an owning clinician',
        'Reminder raised as the review date approaches',
        'Follow-up completed, or escalated if overdue',
        'Outcome recorded on the patient history',
      ],
      note:
        'The follow-up exists as work with an owner rather than as an intention written in a diary.',
    },
    {
      name: 'Session coverage',
      steps: [
        'Sessions planned against expected load for the period',
        'Clinicians and support staff assigned',
        'Leave and unavailability applied against the roster',
        'Uncovered sessions flagged before the day',
        'Attendance recorded and the session closed against what actually worked',
      ],
      note:
        'Coverage gaps surface days ahead rather than on the morning they occur.',
    },
    {
      name: 'Consumable replenishment',
      steps: [
        'Stock level falls below the threshold for an item',
        'Requirement checked against the coming week’s scheduled load',
        'Purchase raised against the supplier with the shortest lead time',
        'Approval applied where the value requires it',
        'Delivery received, checked and recorded with batch and expiry',
      ],
      note:
        'Replenishment is driven by upcoming load rather than by someone noticing an empty shelf.',
    },
    {
      name: 'Documentation completeness review',
      steps: [
        'Records checked against their required documentation',
        'Gaps flagged as exceptions with the owning clinician',
        'Missing items completed and attached',
        'Record state updated to complete',
        'Recurring gap types surfaced for process review',
      ],
      note:
        'Completeness is a state that can be reported on, not a discovery made during an audit.',
    },
    {
      name: 'New patient intake',
      steps: [
        'Patient record created with contact and referral source',
        'Consents and intake documentation attached',
        'First appointment scheduled against a session',
        'Referrer record updated with the referral',
        'Care and follow-up work created from the consultation',
      ],
      note:
        'Recording the referral source at intake is what makes referrer performance measurable later.',
    },
    {
      name: 'Branch performance review',
      steps: [
        'Consultation volume and no-show rates pulled by branch',
        'Follow-up compliance compared across sites',
        'Consumable consumption compared against volume',
        'Staffing hours compared against load',
        'Actions raised against the differences with owners',
      ],
      note:
        'Comparison works because every branch records the same things in the same structure.',
    },
  ],

  ai: {
    heading: 'Ask the practice manager’s questions.',
    lede:
      'Verity AI reads the same operational records the practice runs on — work, people, stock, documentation and relationships. It answers from your own data, respects each user’s permissions, and can turn an answer into assigned work.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice.',
    questions: [
      'Which follow-ups are overdue, and which clinician owns each one?',
      'Which sessions next week have no clinician assigned?',
      'Which consumables fall short against next week’s scheduled load?',
      'What is the no-show rate by branch this month?',
      'Which referrers have stopped sending patients?',
      'Which records are missing required documentation?',
      'How did staffing hours compare with consultation volume last month?',
      'Which patients have not returned since their last recommended review?',
      'Summarise this month’s practice performance.',
    ],
  },

  automationHeading: 'The reminders that should not depend on a diary.',
  automationLede:
    'These run from the practice records at the moment the condition occurs.',
  automations: [
    {
      trigger: 'A consultation creates a follow-up',
      steps: [
        'Follow-up work created with a review date and owner',
        'Reminder raised before the date',
        'Escalated to the practice manager if it passes overdue',
        'Outcome recorded against the patient history',
      ],
    },
    {
      trigger: 'A session has no clinician assigned',
      steps: [
        'Gap flagged ahead of the session date',
        'Reassignment task created for the roster owner',
        'Escalated as the date approaches',
      ],
    },
    {
      trigger: 'Consumable stock falls below its threshold',
      steps: [
        'Requirement checked against scheduled load',
        'Purchase raised against the supplier with the shortest lead time',
        'Approval routed where required',
        'Receipt checked and recorded with batch and expiry',
      ],
    },
    {
      trigger: 'A record is missing required documentation',
      steps: [
        'Exception raised against the record',
        'Task assigned to the owning clinician',
        'Record state updated once complete',
      ],
    },
    {
      trigger: 'A patient misses a scheduled appointment',
      steps: [
        'No-show recorded against the patient and the session',
        'Rebooking task created for the front desk',
        'Repeat no-shows surfaced in the branch review',
      ],
    },
    {
      trigger: 'Stock passes its expiry window',
      steps: [
        'Batch flagged with location and value',
        'Disposal or return task created',
        'Consumption pattern surfaced for the next purchase review',
      ],
    },
  ],

  intelligenceHeading: 'What the practice can actually see.',
  intelligenceLede:
    'Operational performance drawn from the records the practice creates as it works.',
  intelligence: [
    {
      area: 'Activity',
      points: [
        'Consultation and procedure volume by branch and clinician',
        'No-show and cancellation rates',
        'Session utilisation against capacity',
        'New versus returning patients',
      ],
    },
    {
      area: 'Follow-up',
      points: [
        'Follow-ups due, completed and overdue',
        'Compliance by clinician and by branch',
        'Time from due date to completion',
        'Patients who did not return after a recommended review',
      ],
    },
    {
      area: 'People',
      points: [
        'Roster coverage against planned sessions',
        'Attendance and leave against the plan',
        'Staffing hours against consultation volume',
        'Uncovered sessions and how they were resolved',
      ],
    },
    {
      area: 'Consumables',
      points: [
        'Stock levels against scheduled load',
        'Consumption per consultation type',
        'Expiry and write-off by value',
        'Supplier lead times and delivery reliability',
      ],
    },
    {
      area: 'Referrals',
      points: [
        'Referral volume by source',
        'Referrers whose volume has dropped',
        'Conversion from referral to first consultation',
        'Referral mix by branch',
      ],
    },
    {
      area: 'Compliance',
      points: [
        'Documentation completeness by record type',
        'Exceptions raised and time to close',
        'Access and change history on records',
        'Approvals awaiting a decision',
      ],
    },
  ],
  intelligenceNote:
    'These come from the operational records the practice already creates. Verity does not hold or interpret clinical decisions.',

  rolesHeading: 'One practice, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they actually need.',
  roles: [
    {
      role: 'Practice owner',
      question: 'Is the practice running well and growing?',
      focus: 'Volume and utilisation by branch, follow-up compliance, referral sources, staffing against load.',
    },
    {
      role: 'Practice manager',
      question: 'What has to be fixed this week?',
      focus: 'Uncovered sessions, overdue follow-ups, consumables short, documentation exceptions.',
    },
    {
      role: 'Clinician',
      question: 'What do I need to know about this patient?',
      focus: 'History, prior consultations, documents, outstanding follow-ups and reviews owned.',
    },
    {
      role: 'Front desk',
      question: 'Who is coming and what is outstanding?',
      focus: 'Session schedule, no-shows to rebook, patient balances, intake documentation.',
    },
    {
      role: 'Accounts',
      question: 'What is billed and what is owed?',
      focus: 'Patient balances, write-offs awaiting approval, supplier payables, branch revenue.',
    },
  ],

  useCasesHeading: 'What clinics use Verity for',
  useCases: [
    {
      name: 'Follow-up management',
      body: 'Reviews as work with a due date and an owning clinician, so overdue follow-ups appear as a list rather than as patients who quietly did not return.',
    },
    {
      name: 'Roster and session coverage',
      body: 'Sessions planned, staffed and reconciled against what actually worked, with uncovered slots flagged before the day.',
    },
    {
      name: 'Consumable stock control',
      body: 'Levels, batches, expiry and supplier lead times checked against the coming week’s load rather than against a shelf.',
    },
    {
      name: 'Record and document completeness',
      body: 'Consents, reports and retention requirements attached to the record with completeness as a reportable state.',
    },
    {
      name: 'Referral source tracking',
      body: 'Referrers as relationships with their referral history, so a source that has gone quiet is visible while it can be discussed.',
    },
    {
      name: 'Multi-branch comparison',
      body: 'Branches as locations rolling into the practice, so volume, no-shows and compliance are comparable without reformatting.',
    },
    {
      name: 'Permissions and access history',
      body: 'One permission model with a single audit trail, so who accessed or changed a record is always answerable.',
    },
    {
      name: 'Approvals and exceptions',
      body: 'Write-offs, refunds and escalations as approval steps with reasons on the record instead of informal decisions.',
    },
    {
      name: 'Asking the practice questions',
      body: 'Plain-language questions across scheduling, stock, staffing and follow-up, with work created and assigned in the same step.',
    },
  ],

  migration:
    'Whatever the practice runs today — an appointment book, a spreadsheet roster, a stock register, a document drive — is mapped during implementation. The records that matter are migrated and Verity is introduced around the clinical work rather than in place of it.',

  faqHeading: 'Questions practices ask',
  faqs: [
    [
      'Is Verity a clinical system?',
      'No. Verity manages the practice around the care: rosters and sessions, consumable stock, follow-up work, documentation completeness, referral relationships, permissions and reporting. It does not make clinical decisions, hold diagnostic logic or provide medical advice.',
    ],
    [
      'What can AI software do for a clinic?',
      'Verity AI answers operational questions from your own records — which follow-ups are overdue and who owns them, which sessions next week are uncovered, which consumables fall short against the coming load, which referrers have gone quiet — and can turn those answers into work assigned to the right person.',
    ],
    [
      'Can Verity track patient follow-ups?',
      'Yes. A follow-up is work with a review date and an owning clinician, so it can be reminded, escalated and reported on. Overdue reviews become a list rather than an absence nobody notices.',
    ],
    [
      'Does it manage consumables and supplies?',
      'Yes. Consumables are held as stock with supplier, cost, batch, expiry and location, and replenishment is driven against the coming week’s scheduled load rather than against a visual check.',
    ],
    [
      'Can we control who sees which records?',
      'Verity has one permission model and one audit trail across every record, so access can be set by role and every access or change is recorded.',
    ],
    [
      'Does it work across multiple branches?',
      'Yes. Branches are locations that roll into the practice, with permissions, reporting and exceptions following the same structure, so volume, no-show rates and follow-up compliance are comparable across sites.',
    ],
    [
      'Can Verity help with staffing decisions?',
      'Rosters, attendance and sessions are connected records, so staffing hours can be compared with the consultation volume they actually covered, and uncovered sessions are flagged before the day rather than on it.',
    ],
    [
      'Is it suitable for a single-clinician practice?',
      'A single-clinician practice still has follow-ups to track, consumables to reorder, documentation to keep complete and referrers to maintain. Those are the parts Verity handles, and additional branches use the same structure.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the practice actually runs, configuration, migration of the operational records, then an ongoing operations partnership rather than a handover.',
    ],
  ],

  ctaHeading: 'Start with the follow-ups you are already losing.',
  ctaLede:
    'In most practices that is the fastest measurable improvement. Tell us how yours runs and we will show you what it looks like in Verity.',

  related: ['dental-clinics', 'hospitals', 'diagnostic-labs', 'pharmacies', 'physiotherapy-clinics', 'veterinary-clinics'],
};
