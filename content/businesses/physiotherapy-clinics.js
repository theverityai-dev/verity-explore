export default {
  slug: 'physiotherapy-clinics',
  status: 'published',
  plural: 'physiotherapy clinics',
  subject: 'physiotherapy practice',

  seo: {
    title: 'AI business management software for physiotherapy clinics | Verity',
    description:
      'Verity connects courses of treatment, attendance adherence, third-party funding approvals, room and equipment utilisation and outcome recording into one system.',
    keywords: [
      'AI software for physiotherapy clinics',
      'physiotherapy practice management software',
      'course of treatment and attendance tracking',
      'insurance approval and utilisation software',
    ],
  },

  hero: {
    eyebrow: 'Verity for physiotherapy practices',
    headline: 'A course of eight sessions delivered as five is not a discount. It is an outcome that did not happen.',
    lede:
      'Physiotherapy works over a course, and courses stop early. Verity tracks adherence, the funding approvals behind it and the capacity it consumes.',
    note: 'Verity runs the practice. Clinical notes stay in your existing system.',
    panel: {
      title: 'Practice',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sessions delivered', value: '820', note: 'across 4 therapists' },
        { label: 'Courses incomplete', value: '64', note: 'stopped before plan' },
        { label: 'Approvals pending', value: '19', note: 'third-party funded' },
        { label: 'Room utilisation', value: '68%', note: 'of available hours' },
      ],
      rows: [
        { name: '64 courses stopped before the planned session count', meta: 'Outcome and revenue both incomplete', active: true },
        { name: '19 funded patients awaiting approval', meta: 'Treatment delayed or delivered at risk', active: true },
        { name: 'Two therapists below 55% utilisation', meta: 'While the waitlist runs two weeks', active: true },
        { name: 'Cancellations concentrated in one slot pattern', meta: 'Early morning · repeatedly unfilled', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'The unit is a course, not an appointment.',
    paragraphs: [
      'Physiotherapy works through a planned course of sessions, and both the clinical outcome and the revenue depend on the patient completing it. A course planned at eight sessions and delivered as five is not a smaller sale — it is an outcome that did not happen and a patient who may conclude that physiotherapy did not work.',
      'Sixty-four incomplete courses is therefore the most important number in the practice, and it is invisible in an appointment diary that shows only what was booked.',
      'The second characteristic is third-party funding. Insurance, employer and scheme funding require approval before or during treatment, and nineteen patients awaiting approval means treatment either delayed or delivered at the practice’s risk.',
      'The third is utilisation. Rooms and therapists are the capacity, and two therapists below fifty-five percent while the waitlist runs two weeks is a scheduling failure rather than a demand shortfall.',
      'The fourth is cancellation patterns. Slots that repeatedly cancel and go unfilled are a schedulable problem once they are visible as a pattern rather than as individual events.',
      'Verity tracks courses against plan, approvals against treatment, and utilisation against the waitlist.',
    ],
  },

  terminology: [
    ['Courses, sessions, treatment plans', 'Work'],
    ['Patients, referrers, funders', 'Relationships'],
    ['Approvals, authorisations, claims', 'Workflows'],
    ['Therapists, rooms, equipment', 'Workforce'],
    ['Assessments, outcomes, notes', 'Records'],
    ['Clinics, rooms, gym area', 'Locations'],
    ['Session fees, packages, funded rates', 'Control'],
  ],

  challengesHeading: 'Courses that stop and capacity that idles.',
  challengesLede:
    'Physiotherapy difficulties come from treatment delivered over time to patients who stop coming.',
  challenges: [
    { problem: 'Courses stop before their planned end', detail: 'A patient feels better, or gets busy, and stops attending; the outcome and the remaining revenue both disappear.', outcome: 'Courses carry a planned session count and an adherence state, so early stopping is visible and contactable.' },
    { problem: 'Funding approvals lag treatment', detail: 'Treatment is delayed waiting for authorisation, or delivered before it and at risk of non-payment.', outcome: 'Approvals are tracked as steps against the course with their state and age.' },
    { problem: 'Capacity idles beside a waitlist', detail: 'Some therapists are under-utilised while patients wait, because scheduling is per therapist rather than per practice.', outcome: 'Utilisation and waitlist sit in one view, so unfilled capacity is matched to waiting patients.' },
    { problem: 'Cancellations cluster in patterns', detail: 'Particular slots cancel repeatedly and go unfilled, and each is treated as an individual event.', outcome: 'Cancellations are recorded with slot and reason, so patterns become schedulable.' },
    { problem: 'Outcomes are not recorded against courses', detail: 'Whether a course achieved what it planned is a clinical judgement that never becomes practice data.', outcome: 'Outcome measures attach to the course, so completion and result can be compared.' },
    { problem: 'Equipment and room use is unmanaged', detail: 'Treatment requiring specific equipment competes for it without a booking view.', outcome: 'Rooms and equipment are bookable resources with utilisation recorded.' },
  ],

  modulesLede: 'One system across courses, approvals, capacity and outcomes.',
  modules: [
    { id: 'work', title: 'Courses, sessions and plans', line: 'A course is work with a patient, a planned session count, a therapist, attendance and a completion state.', why: 'The course is the unit of both outcome and revenue.', example: 'Sixty-four courses stopped before their planned session count.' },
    { id: 'workflows', title: 'Approvals, authorisations and claims', line: 'Funder approvals, extensions and claims move through defined steps with states and ages.', why: 'Treatment delivered without approval is treatment at the practice’s risk.', example: 'Nineteen funded patients awaiting approval with treatment pending.' },
    { id: 'workforce', title: 'Therapists, rooms and equipment', line: 'Therapist, room and equipment availability is recorded against sessions and utilisation measured.', why: 'Capacity is the constraint and it idles unevenly.', example: 'Two therapists below fifty-five percent while the waitlist runs two weeks.' },
    { id: 'relationships', title: 'Patients, referrers and funders', line: 'Patients carry their courses, attendance, funders, referrer and contact history; referrers carry their volume.', why: 'Referrer relationships supply the practice and are rarely tracked.', example: 'Referral volume by source and its conversion into courses.' },
    { id: 'records', title: 'Assessments and outcome measures', line: 'Initial assessment, outcome measures and discharge attach to the course.', why: 'Course completion and outcome together are what the practice can actually demonstrate.', example: 'Outcome measures compared between completed and incomplete courses.' },
    { id: 'people', title: 'Therapists and reception', line: 'Staff are modelled once, with sessions, courses and outcomes attributed.', why: 'Adherence and completion vary by therapist and are worth understanding.', example: 'Course completion rate by therapist.' },
    { id: 'intelligence', title: 'Adherence, utilisation and funding reporting', line: 'Course completion, attendance adherence, approval turnaround, utilisation against waitlist and cancellation patterns come from the records.', why: 'The practice’s clinical and commercial questions are the same question: did the course complete.', example: 'Completion rate by condition, therapist and funder.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own course, appointment, approval and capacity records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about courses stopping and capacity idling.', example: '"Which courses stopped early?" returns sixty-four with contact assigned.' },
    { id: 'communication', title: 'Patient contact recorded', line: 'Reminders, follow-ups and funder correspondence attach to the course or patient.', why: 'A patient who stopped attending is contactable for a short window.', example: 'A follow-up recorded, so the next call knows what was said.' },
    { id: 'control', title: 'Who can discount and extend', line: 'One permission model and one audit trail across every record.', why: 'Session discounting and course extension are both commercial decisions made clinically.', example: 'A course extension recorded with its funding basis.' },
    { id: 'locations', title: 'Clinics, rooms and gym area', line: 'Locations carry their own capacity, equipment and utilisation.', why: 'Rehabilitation space is a shared resource with its own constraints.', example: 'Gym area utilisation against session types requiring it.' },
    { id: 'orders', title: 'Session fees, packages and funded rates', line: 'Fees, packages and funded rates are recorded against the course and patient.', why: 'A course part-delivered is part-billed and part-unearned.', example: 'Package balances against sessions delivered.' },
  ],

  workflowsHeading: 'Assess, plan, deliver, complete.',
  workflowsLede: 'These already happen. Recorded as a course, early stopping becomes visible.',
  workflows: [
    { name: 'Assessment to course plan', steps: ['Assessment recorded with condition and objectives', 'Course planned with session count and interval', 'Funder identified and approval requirements checked', 'Sessions scheduled against therapist and room', 'Plan agreed with the patient and recorded'], note: 'A planned session count is what makes non-completion measurable.' },
    { name: 'Attendance and adherence', steps: ['Sessions delivered and attendance recorded', 'Missed sessions flagged against the plan', 'Contact assigned when attendance lapses', 'Reason recorded — improvement, cost, time, dissatisfaction', 'Plan adjusted or discharge recorded'], note: 'A patient who stopped is reachable briefly, and only if someone knows they stopped.' },
    { name: 'Funding approval', steps: ['Funder and scheme recorded at assessment', 'Authorisation requested with clinical justification', 'Approval state tracked with an age', 'Treatment released or risk accepted deliberately', 'Claim submitted and settlement tracked'], note: 'Delivering ahead of approval should be a recorded decision rather than an assumption.' },
    { name: 'Capacity and waitlist', steps: ['Utilisation measured by therapist, room and slot', 'Waitlist maintained with requirements', 'Unfilled capacity matched to waiting patients', 'Cancellations offered to the waitlist', 'Pattern reviewed for recurring unfilled slots'], note: 'Idle capacity beside a waitlist is a scheduling problem with an immediate fix.' },
    { name: 'Discharge and outcome', steps: ['Course completion assessed against plan', 'Outcome measures recorded', 'Discharge or extension decided', 'Referrer informed where appropriate', 'Completion and outcome aggregated for reporting'], note: 'Completion and outcome together are the practice’s actual product.' },
  ],

  ai: {
    heading: 'Ask which courses stopped.',
    lede: 'Verity AI reads the same course, appointment, approval and capacity records the practice creates as it works. It answers from your own practice, respects permissions, and can turn an answer into contact and scheduling.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice.',
    questions: [
      'Which courses stopped before their planned session count?',
      'Which funded patients are awaiting approval?',
      'Which therapists are under-utilised while the waitlist grows?',
      'Which slots cancel repeatedly and go unfilled?',
      'What is course completion rate by condition and therapist?',
      'Which referrers send the most patients and how do their courses complete?',
      'What is room and equipment utilisation?',
      'Which packages have unused sessions?',
      'Summarise adherence and capacity.',
    ],
  },

  automationHeading: 'Courses and capacity.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A patient misses sessions against the plan', steps: ['Course flagged with sessions remaining', 'Contact assigned with history attached', 'Reason and outcome recorded'] },
    { trigger: 'A funding approval is outstanding', steps: ['Aged against the treatment start', 'Chase assigned to administration', 'Risk decision raised if treatment proceeds'] },
    { trigger: 'A session is cancelled', steps: ['Slot offered to the waitlist', 'Reason recorded', 'Pattern surfaced if the slot repeats'] },
    { trigger: 'Utilisation falls below threshold', steps: ['Therapist and slot flagged', 'Waitlist matched to the availability', 'Outcome recorded'] },
    { trigger: 'A course completes or is discharged', steps: ['Outcome measures recorded', 'Referrer informed where appropriate', 'Completion aggregated for reporting'] },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Adherence, funding and capacity from the practice’s own records.',
  intelligence: [
    { area: 'Adherence', points: ['Courses completed against planned sessions', 'Early stopping and recorded reasons', 'Attendance by patient and therapist', 'Re-engagement outcomes'] },
    { area: 'Funding', points: ['Approvals pending and their age', 'Treatment delivered ahead of approval', 'Claims submitted and settled', 'Funder mix and rates'] },
    { area: 'Capacity', points: ['Utilisation by therapist, room and slot', 'Waitlist length and matching', 'Cancellation patterns by slot', 'Unfilled capacity by period'] },
    { area: 'Outcomes', points: ['Outcome measures by condition', 'Completion against outcome', 'Discharge reasons', 'Referrer feedback'] },
  ],
  intelligenceNote: 'Verity records the practice around treatment. Clinical notes and assessments remain in your existing clinical system.',

  rolesHeading: 'One practice, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Practice owner', question: 'Are courses completing?', focus: 'Completion rate by therapist and condition, early stopping reasons, utilisation against waitlist, funder mix.' },
    { role: 'Therapist', question: 'Where is this patient in their course?', focus: 'Course plan and sessions remaining, attendance, outcome measures, approvals in place.' },
    { role: 'Reception and administration', question: 'What needs chasing or filling?', focus: 'Lapsed attendance, approvals pending, cancelled slots and waitlist, package balances.' },
  ],

  useCasesHeading: 'What physiotherapy practices use Verity for',
  useCases: [
    { name: 'Course completion', body: 'Planned session counts with adherence states, so a course that stopped early is visible while the patient is still reachable.' },
    { name: 'Funding approval tracking', body: 'Authorisations as steps with an age, so treatment is not delayed unnecessarily or delivered unknowingly at risk.' },
    { name: 'Capacity against waitlist', body: 'Utilisation and waitlist in one view, so idle therapist time is matched to patients already waiting.' },
    { name: 'Cancellation patterns', body: 'Cancellations recorded with slot and reason, turning repeated individual events into a schedulable pattern.' },
    { name: 'Outcome recording', body: 'Outcome measures attached to the course, so completion and result can be compared and demonstrated.' },
    { name: 'Referrer relationships', body: 'Referral sources with volume and course completion, since referrers supply the practice.' },
    { name: 'Asking about courses', body: 'Plain-language questions across adherence, approvals, capacity and outcomes, with contact assigned in the same step.' },
  ],

  migration: 'Clinical notes and assessment systems continue and are mapped during implementation. Patients, active courses with plans, funders, therapists and the waitlist are brought across.',

  faqHeading: 'Questions physiotherapy practices ask',
  faqs: [
    ['Does Verity hold clinical notes?', 'No. Clinical notes and assessments remain in your existing system and are mapped during implementation. Verity runs the practice around them — courses, adherence, approvals, capacity and outcomes.'],
    ['What can AI software do for a physiotherapy practice?', 'Verity AI answers questions from your own course, appointment, approval and capacity records: which courses stopped early, which funded patients await approval, which therapists are idle while the waitlist grows, which slots cancel repeatedly. Each answer can become contact or scheduling.'],
    ['Why treat the course as the unit?', 'Because both the clinical outcome and the revenue depend on completion. An eight-session course delivered as five is an outcome that did not happen, and an appointment diary shows only what was booked.'],
    ['How does it help with funding approvals?', 'Authorisations are steps with a state and an age against the course, so treatment is neither delayed unnecessarily nor delivered at the practice’s risk without that being a recorded decision.'],
    ['Can it improve utilisation?', 'Utilisation and the waitlist sit in one view, so under-used therapist and room time is matched against patients already waiting rather than existing beside them unnoticed.'],
    ['Does it record outcomes?', 'Outcome measures attach to the course alongside completion, so the practice can compare results and demonstrate them to referrers and funders.'],
    ['Can it track referrers?', 'Referral sources carry their volume and the completion rates of the courses they generate, which is more useful than volume alone.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of course structures, funder requirements and capacity, configuration, migration of patients and active courses, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the courses that stopped.',
  ctaLede: 'They are outcomes that did not happen and patients still reachable. Tell us how courses are tracked today.',

  related: ['clinics', 'dermatology-clinics', 'mental-wellness-practices', 'gyms', 'fitness-studios', 'dental-clinics'],
};
