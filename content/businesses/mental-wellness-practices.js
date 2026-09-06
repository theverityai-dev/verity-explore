export default {
  slug: 'mental-wellness-practices',
  status: 'published',
  plural: 'mental wellness practices',
  subject: 'mental wellness practice',

  seo: {
    title: 'AI business management software for mental wellness practices | Verity',
    description:
      'Verity connects session continuity, cancellation and waitlist matching, practitioner capacity and strict access control into one operational system.',
    keywords: [
      'AI software for mental wellness practices',
      'therapy practice management software',
      'session continuity and waitlist management',
      'practitioner capacity and confidentiality controls',
    ],
  },

  hero: {
    eyebrow: 'Verity for mental wellness practices',
    headline: 'A cancelled slot cannot be resold on the day, and the person who needed it is on a waitlist.',
    lede:
      'Therapy runs on continuity and fixed slots, and both are lost to cancellation. Verity manages the slot, the waitlist and the continuity, with access controlled tightly.',
    note: 'Verity runs the practice. Clinical notes stay in your existing secure system.',
    panel: {
      title: 'Practice',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sessions delivered', value: '486', note: 'across 7 practitioners' },
        { label: 'Cancellations', value: '14%', note: '68 slots, 41 unfilled' },
        { label: 'Waitlist', value: '54 people', note: 'average wait 19 days' },
        { label: 'Clients lapsed', value: '31', note: 'no session in 6 weeks' },
      ],
      rows: [
        { name: '41 cancelled slots went unfilled', meta: 'While 54 people wait an average of 19 days', active: true },
        { name: '31 clients with no session in six weeks', meta: 'No recorded contact or discharge', active: true },
        { name: 'Two practitioners near capacity, two below half', meta: 'Waitlist not matched to availability', active: true },
        { name: 'Record access not restricted per practitioner', meta: 'Confidentiality control gap', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'Continuity is the treatment and the slot is the inventory.',
    paragraphs: [
      'Therapeutic work depends on continuity — the same practitioner, at a regular interval, over time. That makes the recurring slot both the clinical mechanism and the practice’s inventory, and a cancelled slot is unusually costly: it cannot be resold that day, and it interrupts a course of work that depends on rhythm.',
      'Forty-one unfilled cancellations beside a waitlist of fifty-four people waiting nineteen days is the practice’s central operational failure. The capacity existed and the demand existed, and they were not matched.',
      'The second characteristic is silent lapse. A client stops attending without discharge or contact, and in this field that is both a clinical concern and a revenue loss. Thirty-one clients with no session in six weeks and no recorded contact is a list that should not exist.',
      'The third is practitioner matching. Practitioners have different specialisms and availability, and matching a waiting client to the right one is a genuine constraint rather than a scheduling formality.',
      'The fourth is access. Practice records in this field require tighter control than most, and access has to be deliberate rather than default.',
      'Verity manages slots, waitlist matching and continuity while keeping access tightly controlled. Clinical notes stay in your secure clinical system.',
    ],
  },

  terminology: [
    ['Sessions, courses, intervals', 'Work'],
    ['Clients, referrers, funders', 'Relationships'],
    ['Practitioners, specialisms, availability', 'Workforce'],
    ['Waitlist, matching, allocation', 'Workflows'],
    ['Consent, agreements, correspondence', 'Records'],
    ['Rooms, online, locations', 'Locations'],
    ['Access, confidentiality, audit', 'Control'],
  ],

  challengesHeading: 'Fixed slots, fragile continuity, tight confidentiality.',
  challengesLede:
    'Mental wellness practice difficulties come from an inventory that cannot be resold and continuity that breaks quietly.',
  challenges: [
    {
      problem: 'Cancelled slots go unfilled beside a waitlist',
      detail: 'A cancellation cannot be resold on the day and the waitlist is not matched to it in time.',
      outcome: 'Cancellations release the slot to matched waitlist candidates immediately.',
    },
    {
      problem: 'Clients lapse without contact or discharge',
      detail: 'Attendance stops and nothing is recorded, which is a clinical concern as much as a commercial one.',
      outcome: 'Lapse against the expected interval raises a contact task with an owner.',
    },
    {
      problem: 'Waitlist matching is manual and slow',
      detail: 'Matching a waiting person to the right practitioner with the right availability is done by hand.',
      outcome: 'Practitioner specialisms and availability are recorded, so matching is proposed rather than assembled.',
    },
    {
      problem: 'Capacity is uneven across practitioners',
      detail: 'Some practitioners are full while others are below half, and the waitlist grows regardless.',
      outcome: 'Capacity and waitlist sit in one view with matching criteria applied.',
    },
    {
      problem: 'Access is broader than it should be',
      detail: 'Practice records are visible to more people than confidentiality warrants.',
      outcome: 'Access is set deliberately per record and per practitioner, with every access on the trail.',
    },
    {
      problem: 'Funding and agreements are handled ad hoc',
      detail: 'Third-party funding, sliding scales and agreements are applied inconsistently.',
      outcome: 'Agreements and funding bases are recorded per client and applied consistently.',
    },
  ],

  modulesLede: 'One system across slots, continuity, waitlist and access.',
  modules: [
    {
      id: 'work',
      title: 'Sessions, courses and intervals',
      line: 'Sessions are work with a client, practitioner, slot, interval and attendance state, grouped into courses of work.',
      why: 'Continuity is the treatment, and continuity is a pattern of sessions.',
      example: 'Thirty-one clients with no session in six weeks and no contact recorded.',
    },
    {
      id: 'workforce',
      title: 'Practitioners, specialisms and availability',
      line: 'Practitioners carry specialisms, availability, current load and the clients they hold.',
      why: 'Matching is a genuine constraint rather than a scheduling formality.',
      example: 'Two practitioners near capacity and two below half, with the waitlist unmatched.',
    },
    {
      id: 'workflows',
      title: 'Waitlist, matching and allocation',
      line: 'The waitlist carries requirements, priority and matching criteria; cancellations release slots to it.',
      why: 'Unfilled cancellations beside a waitlist is the practice’s central failure.',
      example: 'Forty-one cancelled slots unfilled while fifty-four people wait.',
    },
    {
      id: 'relationships',
      title: 'Clients, referrers and funders',
      line: 'Clients carry their sessions, intervals, agreements, funding and contact history under controlled access.',
      why: 'The client relationship is the practice, and it is confidential.',
      example: 'Contact history available to the practitioner who holds the client and nobody else.',
    },
    {
      id: 'control',
      title: 'Access, confidentiality and audit',
      line: 'One permission model and one audit trail, with access set deliberately per record and practitioner.',
      why: 'This field requires tighter access control than most, and it must be demonstrable.',
      example: 'Every access to a client record on the trail with the person and time.',
    },
    {
      id: 'records',
      title: 'Consent, agreements and correspondence',
      line: 'Consent, working agreements, funding arrangements and correspondence attach to the client under access control.',
      why: 'Agreements govern cancellation policy, fees and scope, and are referenced later.',
      example: 'A cancellation policy applied from the recorded agreement rather than negotiated.',
    },
    {
      id: 'locations',
      title: 'Rooms and online delivery',
      line: 'Rooms and online sessions are locations with availability and utilisation.',
      why: 'Room availability constrains in-person work and online expands practitioner reach.',
      example: 'Room utilisation against in-person demand.',
    },
    {
      id: 'intelligence',
      title: 'Continuity, capacity and waitlist reporting',
      line: 'Attendance continuity, lapse rates, cancellation fill rates, waitlist wait times and practitioner utilisation come from the records.',
      why: 'The practice’s clinical and commercial health are the same measure: are people continuing.',
      example: 'Cancellation fill rate against waitlist wait time.',
    },
    {
      id: 'ai',
      title: 'Ask the practice a question',
      line: 'Verity AI answers from your own session, waitlist and capacity records, respects permissions strictly, and can create assigned follow-ups.',
      why: 'The valuable questions are about lapse and matching, and both are permission-sensitive.',
      example: '"Which clients have lapsed without contact?" returns thirty-one to the practitioners who hold them.',
    },
    {
      id: 'communication',
      title: 'Contact recorded under access control',
      line: 'Reminders, follow-ups and correspondence attach to the client with the same access restrictions.',
      why: 'Contact history is sensitive and necessary at once.',
      example: 'A follow-up recorded and visible only to the holding practitioner.',
    },
    {
      id: 'people',
      title: 'Practitioners and administration',
      line: 'Staff are modelled once with roles and access levels, and every session and contact carries who performed it.',
      why: 'Administration needs scheduling access without access to client detail.',
      example: 'Reception sees availability and attendance; practitioners see their own clients.',
    },
    {
      id: 'orders',
      title: 'Fees, funding and agreements',
      line: 'Session fees, sliding scales, funded rates and balances are recorded against the client.',
      why: 'Fee arrangements are varied and personal, and consistency matters.',
      example: 'A sliding-scale rate recorded and applied rather than remembered.',
    },
  ],

  workflowsHeading: 'Slots, continuity and the waitlist.',
  workflowsLede: 'These already happen. Recorded, capacity and demand stop missing each other.',
  workflows: [
    {
      name: 'Referral to allocation',
      steps: [
        'Enquiry recorded with requirements and priority',
        'Added to the waitlist with matching criteria',
        'Practitioner specialism and availability matched',
        'Allocation proposed and confirmed',
        'Initial session scheduled and agreement recorded',
      ],
      note: 'Matching by specialism and availability together is what makes an allocation both appropriate and actually schedulable.',
    },
    {
      name: 'Continuity',
      steps: [
        'Recurring slot established at the agreed interval',
        'Attendance recorded per session',
        'Lapse against the interval flagged',
        'Contact assigned to the holding practitioner',
        'Outcome recorded — resumed, discharged or referred on',
      ],
      note: 'A client who stops without contact is a clinical concern before it is a commercial one.',
    },
    {
      name: 'Cancellation and fill',
      steps: [
        'Cancellation recorded with notice and reason',
        'Policy applied from the recorded agreement',
        'Slot released to matched waitlist candidates',
        'Offer made and outcome recorded',
        'Fill rate reported by slot and notice period',
      ],
      note: 'A slot released immediately to a matched candidate is the only way it gets filled at all.',
    },
    {
      name: 'Capacity review',
      steps: [
        'Load and availability pulled per practitioner',
        'Waitlist requirements compared against availability',
        'Mismatches identified by specialism',
        'Allocation or recruitment decisions raised',
        'Wait times reported',
      ],
      note: 'A waitlist growing beside idle capacity is a matching failure, not a demand problem.',
    },
    {
      name: 'Access management',
      steps: [
        'Access set per record and practitioner at allocation',
        'Administrative access limited to scheduling and billing',
        'Every access recorded on the trail',
        'Access reviewed on reallocation or departure',
        'Exceptions approved and recorded',
      ],
      note: 'Access should be deliberate at allocation rather than assumed by role.',
    },
  ],

  ai: {
    heading: 'Ask about continuity and matching.',
    lede:
      'Verity AI reads the same session, waitlist and capacity records the practice creates as it works, under the same access restrictions. It answers within permissions and can turn an answer into contact and allocation.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice and does not access clinical notes.',
    questions: [
      'Which clients have lapsed without contact or discharge?',
      'How many cancelled slots went unfilled this month?',
      'Which waitlist requirements match currently available capacity?',
      'What is average wait time by specialism?',
      'Which practitioners are near capacity and which are below?',
      'What is cancellation rate by notice period and slot?',
      'Which clients have funding or agreements expiring?',
      'What is attendance continuity by practitioner?',
      'Summarise capacity, waitlist and continuity.',
    ],
  },

  automationHeading: 'Slots and continuity.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met, within access restrictions.',
  automations: [
    {
      trigger: 'A session is cancelled',
      steps: ['Policy applied from the agreement', 'Slot released to matched waitlist candidates', 'Offer and outcome recorded'],
    },
    {
      trigger: 'A client lapses against their interval',
      steps: ['Flagged to the holding practitioner', 'Contact assigned with history attached', 'Outcome recorded — resumed, discharged or referred'],
    },
    {
      trigger: 'Capacity becomes available',
      steps: ['Waitlist matched by specialism and availability', 'Allocation proposed', 'Wait time recorded on placement'],
    },
    {
      trigger: 'A funding arrangement approaches expiry',
      steps: ['Flagged against the client', 'Renewal or review assigned', 'Outcome recorded'],
    },
    {
      trigger: 'A client is reallocated or a practitioner leaves',
      steps: ['Access reviewed and adjusted', 'Handover recorded within permissions', 'Continuity tracked afterwards'],
    },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Continuity, capacity and waitlist, within access controls.',
  intelligence: [
    {
      area: 'Continuity',
      points: [
        'Attendance against agreed intervals',
        'Lapse rates and recorded outcomes',
        'Course length and discharge reasons',
        'Re-engagement after lapse',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Load and availability by practitioner and specialism',
        'Utilisation against available slots',
        'Room and online mix',
        'Recruitment need by specialism',
      ],
    },
    {
      area: 'Waitlist',
      points: [
        'Wait time by specialism and priority',
        'Matching success and time to allocation',
        'Waitlist attrition',
        'Referral sources',
      ],
    },
    {
      area: 'Slots',
      points: [
        'Cancellation rate by notice and slot',
        'Fill rate from waitlist',
        'Unfilled slot cost',
        'Policy applied and exceptions',
      ],
    },
    {
      area: 'Access',
      points: [
        'Access set per record',
        'Access events on the trail',
        'Reviews on reallocation and departure',
        'Exceptions approved',
      ],
    },
  ],
  intelligenceNote:
    'Verity records practice operations only. Clinical notes remain in your secure clinical system and Verity does not access them.',

  rolesHeading: 'One practice, three views, tightly separated.',
  rolesLede: 'Access is deliberate rather than assumed by role.',
  roles: [
    {
      role: 'Practice lead',
      question: 'Is capacity meeting demand?',
      focus: 'Utilisation by practitioner and specialism, waitlist wait times, cancellation fill rates, lapse patterns.',
    },
    {
      role: 'Practitioner',
      question: 'How are my clients continuing?',
      focus: 'Own clients only — attendance and intervals, lapses to contact, agreements and funding, availability.',
    },
    {
      role: 'Administration',
      question: 'What can be scheduled and billed?',
      focus: 'Availability and bookings, cancellations to fill, waitlist matching, fees and balances, without client detail.',
    },
  ],

  useCasesHeading: 'What mental wellness practices use Verity for',
  useCases: [
    {
      name: 'Cancellation fill',
      body: 'Cancelled slots released immediately to matched waitlist candidates, since a slot cannot be resold on the day otherwise.',
    },
    {
      name: 'Continuity monitoring',
      body: 'Lapse against the agreed interval raising contact with the holding practitioner, which is a clinical concern before a commercial one.',
    },
    {
      name: 'Waitlist matching',
      body: 'Practitioner specialism and availability recorded, so matching is proposed rather than assembled by hand.',
    },
    {
      name: 'Capacity balancing',
      body: 'Load and waitlist in one view, so demand and idle capacity stop coexisting.',
    },
    {
      name: 'Deliberate access control',
      body: 'Access set per record and practitioner with every access on the trail, rather than assumed by role.',
    },
    {
      name: 'Consistent policy application',
      body: 'Cancellation policy, sliding scales and funding applied from recorded agreements.',
    },
    {
      name: 'Asking within permissions',
      body: 'Plain-language questions that return only what the person asking is entitled to see.',
    },
  ],

  migration:
    'Your secure clinical notes system continues and is mapped during implementation; Verity does not hold or access clinical notes. Clients, sessions, intervals, agreements, practitioners and the waitlist are brought across under access control.',

  faqHeading: 'Questions practices ask',
  faqs: [
    [
      'Does Verity hold clinical notes?',
      'No. Clinical notes remain in your secure clinical system and Verity does not access them. Verity records practice operations — sessions, intervals, attendance, waitlist, capacity, agreements and fees — under strict access control.',
    ],
    [
      'What can AI software do for a mental wellness practice?',
      'Verity AI answers operational questions from records the asker is entitled to see: which clients have lapsed without contact, how many cancelled slots went unfilled, which waitlist requirements match available capacity, what wait times look like by specialism. It does not access clinical notes and does not provide clinical advice.',
    ],
    [
      'Why is an unfilled cancellation so costly?',
      'Because the slot cannot be resold on the day and someone on the waitlist needed it. Forty-one unfilled cancellations beside fifty-four people waiting is capacity and demand failing to meet, which is entirely fixable.',
    ],
    [
      'How does it help with continuity?',
      'Attendance is recorded against the agreed interval, so a client who has stopped is flagged to the practitioner who holds them while contact is still appropriate and useful.',
    ],
    [
      'Can it manage the waitlist?',
      'The waitlist carries requirements and priority, and practitioner specialism and availability are recorded, so matching is proposed rather than assembled by hand — and cancellations release slots directly to matched candidates.',
    ],
    [
      'How is confidentiality handled?',
      'Access is set deliberately per record and practitioner rather than assumed by role, administration is limited to scheduling and billing, and every access is recorded on the audit trail.',
    ],
    [
      'Does it apply cancellation policy consistently?',
      'Policy comes from the recorded working agreement rather than being decided case by case, which is both fairer and easier to hold to.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of scheduling, agreements and access requirements, configuration, migration of clients, practitioners and the waitlist, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the slots that went unfilled.',
  ctaLede: 'Someone on your waitlist needed each one. Tell us how cancellations are handled today.',

  related: ['clinics', 'physiotherapy-clinics', 'dermatology-clinics', 'yoga-studios', 'coaching-institutes', 'dental-clinics'],
};
