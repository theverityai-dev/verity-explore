export default {
  slug: 'photographers',
  status: 'published',
  plural: 'photography businesses',
  subject: 'photography business',

  seo: {
    title: 'AI business management software for photographers | Verity',
    description:
      'Verity connects shoot bookings, post-production backlog, delivery commitments, album production, equipment and advance-to-balance collection into one system.',
    keywords: [
      'AI software for photographers',
      'photography business management software',
      'post production backlog and delivery tracking',
      'shoot booking and album production software',
    ],
  },

  hero: {
    eyebrow: 'Verity for photographers',
    headline: 'The shoot was the easy part. The backlog behind it is the business.',
    lede:
      'Photography revenue is booked at the shoot and released at delivery, and everything between is an editing queue nobody measures. Verity tracks the queue, the promise and the balance.',
    note: 'Sized for a studio where the owner also shoots.',
    panel: {
      title: 'Studio',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Shoots completed', value: '18', note: '₹14 L booked' },
        { label: 'In post-production', value: '31', note: '9 past promised date' },
        { label: 'Albums in production', value: '12', note: '4 awaiting client selection' },
        { label: 'Balances due', value: '₹9.4 L', note: 'on delivered work' },
      ],
      rows: [
        { name: '9 deliveries past their promised date', meta: 'Clients already following up', active: true },
        { name: '4 albums stalled on client selection', meta: 'Oldest 6 weeks · production blocked', active: true },
        { name: 'Editing backlog exceeds capacity for the next 3 weeks', meta: 'Two more shoots booked', active: true },
        { name: 'Balances unpaid on delivered galleries', meta: '₹9.4 L · access already given', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own studio in this shape.',
    },
  },

  overview: {
    heading: 'The work is sold on the day and delivered weeks later.',
    paragraphs: [
      'A photography business books a shoot, takes an advance, does the shoot, and then owes weeks of post-production before the client sees anything. Almost all of the delivery risk, the reputational risk and the cash risk lives in that gap, and almost no studio measures it.',
      'The editing queue is the business. Shoots accumulate faster than editing capacity when bookings are good, which means a strong month creates a delivery crisis six weeks later. A studio taking two more bookings while the backlog already exceeds three weeks of capacity is producing its own next problem.',
      'The second is that album and print production depends on the client. A gallery is delivered, the client must select images, and production waits — sometimes for weeks. Four albums stalled on selection is revenue that cannot be recognised, capital tied in a job that cannot close, and a promise date quietly passing.',
      'The third is that the balance is usually due at delivery, and once a gallery has been shared the leverage is gone. Nine point four lakh outstanding on delivered work is money that gets progressively harder to collect.',
      'The fourth is equipment, which is both a capital asset and a single point of failure on a date that cannot be rescheduled.',
      'Verity tracks the shoot, the editing queue against capacity, the client selection, the album production and the balance.',
    ],
  },

  terminology: [
    ['Shoots, sessions, events', 'Work'],
    ['Clients, couples, corporate accounts', 'Relationships'],
    ['Editing, selection, album production', 'Work'],
    ['Galleries, deliverables, licences', 'Records'],
    ['Photographers, editors, assistants', 'People'],
    ['Cameras, lenses, lighting', 'Inventory'],
    ['Advances, balances, usage rights', 'Workflows'],
  ],

  challengesHeading: 'Everything hard happens after the shoot.',
  challengesLede:
    'Photography difficulties are queue problems, client-dependency problems and collection problems, all after the camera is packed away.',
  challenges: [
    {
      problem: 'The editing backlog is not measured against capacity',
      detail:
        'Bookings are taken on availability to shoot rather than on capacity to edit, so a good month becomes a delivery crisis.',
      outcome:
        'Post-production is work with estimated hours, so backlog against editing capacity is visible before more bookings are taken.',
    },
    {
      problem: 'Delivery promises slip without warning',
      detail:
        'A promised date passes and the client follows up, which is the first time anyone looks at the queue.',
      outcome:
        'Each deliverable carries a promised date and a state, so slippage surfaces before the client notices.',
    },
    {
      problem: 'Albums stall on client selection',
      detail:
        'Production cannot start until the client selects images, and the request goes unanswered for weeks with nobody chasing.',
      outcome:
        'Selection is a tracked step with an age and reminders, so a stalled album is chased rather than forgotten.',
    },
    {
      problem: 'Balances go unpaid after delivery',
      detail:
        'The gallery is shared and the balance is chased afterwards, when the client has what they wanted.',
      outcome:
        'Balance position sits on the job with delivery gated by policy, applied consistently rather than case by case.',
    },
    {
      problem: 'Usage rights are agreed verbally',
      detail:
        'Commercial clients use images beyond what was agreed, and what was agreed was never written down.',
      outcome:
        'Licence terms are recorded on the job, so usage questions resolve to the agreement.',
    },
    {
      problem: 'Equipment failure threatens an unmovable date',
      detail:
        'Gear is maintained reactively and a failure on a wedding date cannot be rescheduled.',
      outcome:
        'Equipment carries service history and pre-shoot checks as work, so failures are anticipated rather than survived.',
    },
  ],

  modulesLede:
    'One system across shoots, the editing queue, delivery and collection.',
  modules: [
    {
      id: 'work',
      title: 'Shoots, editing and album production',
      line:
        'Each stage is work with a client, an owner, estimated hours, a promised date and a state, from booking through delivery.',
      why:
        'The business is a queue, and a queue is only manageable when each item has an estimate and an owner.',
      example:
        'Thirty-one jobs in post-production with nine past their promised date.',
    },
    {
      id: 'relationships',
      title: 'Clients, couples and corporate accounts',
      line:
        'Clients are records with their shoots, deliverables, selections, licence terms, balances and communications.',
      why:
        'Photography is referral-driven and repeat for corporate accounts, and delivery experience determines both.',
      example:
        'A corporate account’s licence terms and past deliverables, visible when they book again.',
    },
    {
      id: 'records',
      title: 'Galleries, deliverables and licences',
      line:
        'Deliverables are records with their scope, format, quantity, promised date, delivery state and usage rights.',
      why:
        'What was promised is the contract, and it is usually a line in a proposal nobody re-reads.',
      example:
        'Licence terms on the job, referenced when a client asks about additional usage.',
    },
    {
      id: 'people',
      title: 'Photographers, editors and assistants',
      line:
        'The team is modelled once with editing capacity, and every shoot, edit and album carries who owns it.',
      why:
        'Editing capacity is the real constraint, and it is a per-person number.',
      example:
        'Backlog against editing capacity per editor for the coming weeks.',
    },
    {
      id: 'workflows',
      title: 'Advances, selections, balances and rights',
      line:
        'Advance collection, client selection, balance collection, delivery release and licence grants move through defined steps.',
      why:
        'These are the gates, and every one of them currently depends on somebody remembering.',
      example:
        'Delivery gated on balance by policy, applied consistently rather than case by case.',
    },
    {
      id: 'inventory',
      title: 'Cameras, lenses and lighting',
      line:
        'Equipment is a record with its service history, pre-shoot checks, assignments and failures.',
      why:
        'A failure on an unmovable date is the most damaging operational event this business has.',
      example:
        'Pre-shoot equipment checks as work against the shoot they serve.',
    },
    {
      id: 'intelligence',
      title: 'Queue, delivery and margin reporting',
      line:
        'Backlog against capacity, delivery against promised dates, selection stall time, album turnaround, balance ageing and margin by job type come from the operational records.',
      why:
        'A studio usually knows what it booked and very little about what it owes and when it can deliver.',
      example:
        'Backlog in weeks against editing capacity, which should decide whether the next booking is taken.',
    },
    {
      id: 'ai',
      title: 'Ask the studio a question',
      line:
        'Verity AI answers from your own shoot, editing, delivery and client records, respects permissions, and can create assigned follow-ups.',
      why:
        'The owner is shooting or editing most of the time and needs the queue answered rather than reviewed.',
      example:
        '"Which deliveries are past their promised date?" returns nine with client updates assigned.',
    },
    {
      id: 'communication',
      title: 'Client updates and selection chasing',
      line:
        'Requests, reminders and responses attach to the job or deliverable they concern.',
      why:
        'Most client dissatisfaction in photography is silence during the gap rather than the eventual delivery.',
      example:
        'A selection reminder recorded, so the next one is timed rather than repeated.',
    },
    {
      id: 'control',
      title: 'Delivery policy and discounting',
      line:
        'One permission model and one audit trail, with delivery release and discounting as recorded decisions.',
      why:
        'Releasing before payment is a decision that should be deliberate rather than habitual.',
      example:
        'A delivery released with an outstanding balance, recorded with the reason.',
    },
    {
      id: 'locations',
      title: 'Studio, venues and shoot locations',
      line:
        'Locations carry their access constraints, past shoots and equipment requirements.',
      why:
        'Venue constraints repeat, and the last shoot at the same venue is the best preparation for the next.',
      example:
        'Lighting and access notes from a previous shoot at the same venue.',
    },
  ],

  workflowsHeading: 'From booking to balance.',
  workflowsLede:
    'These already happen. As records they make the gap between shoot and delivery manageable.',
  workflows: [
    {
      name: 'Booking and advance',
      steps: [
        'Enquiry recorded with date, scope and deliverables',
        'Editing capacity checked for the delivery window',
        'Proposal issued with promised delivery dates',
        'Advance collected and the booking confirmed',
        'Equipment and team assigned to the date',
      ],
      note:
        'Checking editing capacity before promising a delivery date is what prevents a good month becoming a crisis.',
    },
    {
      name: 'Shoot',
      steps: [
        'Pre-shoot equipment check completed and recorded',
        'Team and equipment assigned and confirmed',
        'Shoot delivered and coverage recorded',
        'Material ingested and logged against the job',
        'Post-production queued with estimated hours',
      ],
      note:
        'Estimating post-production hours at ingest is what turns a queue into a plan.',
    },
    {
      name: 'Post-production and delivery',
      steps: [
        'Editing assigned against editor capacity',
        'Progress tracked against the promised date',
        'Slippage flagged before the date passes',
        'Gallery prepared and balance position checked',
        'Delivery released per policy and recorded',
      ],
      note:
        'Flagging slippage before the date is the difference between an update and a complaint.',
    },
    {
      name: 'Client selection and album',
      steps: [
        'Selection requested with a due date',
        'Reminders issued and recorded as it ages',
        'Selection received and album production started',
        'Proofs shared and approval tracked',
        'Album produced, delivered and recorded',
      ],
      note:
        'An album stalled on selection is capital and capacity tied to a job that cannot close.',
    },
    {
      name: 'Balance collection',
      steps: [
        'Balance position checked before delivery release',
        'Delivery gated or released per policy',
        'Balance aged from the delivery date',
        'Follow-up assigned with the job history',
        'Payment applied and the job closed',
      ],
      note:
        'Leverage exists before delivery and not after, which is why the policy has to be consistent.',
    },
    {
      name: 'Capacity planning',
      steps: [
        'Backlog aggregated in estimated hours by editor',
        'Upcoming bookings added to the queue',
        'Capacity compared against promised dates',
        'Booking, outsourcing or date decisions raised',
        'Decision recorded against the period',
      ],
      note:
        'Bookings should be taken against editing capacity, not against shooting availability.',
    },
  ],

  ai: {
    heading: 'Ask what the queue can actually deliver.',
    lede:
      'Verity AI reads the same shoot, editing, delivery and client records the studio creates as it works. It answers from your own jobs, respects permissions, and can turn an answer into client updates and chases.',
    panelMeta: 'Grounded in your studio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which deliveries are past their promised date?',
      'What is the editing backlog in weeks against capacity?',
      'Which albums are stalled on client selection, and for how long?',
      'Which balances are outstanding on delivered work?',
      'Can we take a booking for this date and deliver on time?',
      'Which job types take longest in post-production?',
      'Which clients have licence terms that limit their usage?',
      'What is margin by job type after editing hours?',
      'Summarise the queue and delivery risk.',
    ],
  },

  automationHeading: 'The queue and the promises.',
  automationLede:
    'Each runs from the studio’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A shoot is completed',
      steps: [
        'Post-production queued with estimated hours',
        'Assigned against editor capacity',
        'Delivery date confirmed or flagged as at risk',
      ],
    },
    {
      trigger: 'A deliverable approaches its promised date',
      steps: [
        'Progress checked against the estimate',
        'Client update task raised if it will slip',
        'Escalated to the owner',
      ],
    },
    {
      trigger: 'A client selection is outstanding',
      steps: [
        'Selection aged against the request date',
        'Reminder issued and recorded',
        'Escalated as the album promise date approaches',
      ],
    },
    {
      trigger: 'A delivery is prepared',
      steps: [
        'Balance position checked against policy',
        'Release gated or approved with the reason recorded',
        'Balance aged from the delivery date',
      ],
    },
    {
      trigger: 'Backlog exceeds capacity for the coming period',
      steps: [
        'Queue flagged with weeks of work against capacity',
        'Booking, outsourcing or date decision raised',
        'Decision recorded against the period',
      ],
    },
    {
      trigger: 'Equipment service falls due',
      steps: [
        'Check raised against the equipment record',
        'Scheduled around booked shoots',
        'Failure history updated',
      ],
    },
  ],

  intelligenceHeading: 'What the studio owner can actually see.',
  intelligenceLede:
    'Queue, delivery and cash from the jobs the studio is already doing.',
  intelligence: [
    {
      area: 'Queue',
      points: [
        'Backlog in estimated hours by editor',
        'Backlog in weeks against capacity',
        'Jobs by stage and age',
        'Post-production time by job type',
      ],
    },
    {
      area: 'Delivery',
      points: [
        'Delivery against promised dates',
        'Slippage and its causes',
        'Selection stall time by client',
        'Album turnaround from selection to delivery',
      ],
    },
    {
      area: 'Cash',
      points: [
        'Advances collected against bookings',
        'Balances outstanding on delivered work',
        'Ageing from delivery date',
        'Deliveries released with balances outstanding',
      ],
    },
    {
      area: 'Commercial',
      points: [
        'Margin by job type after editing hours',
        'Revenue by client and account',
        'Licence terms and additional usage sold',
        'Referral sources and repeat bookings',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the shoot, the editing estimate and the delivery, which the studio already tracks informally.',

  rolesHeading: 'A small studio, three different views.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Can we deliver what we have sold?',
      focus: 'Backlog against capacity, deliveries past date, balances outstanding, margin by job type.',
    },
    {
      role: 'Studio coordinator',
      question: 'What needs chasing?',
      focus: 'Selections outstanding, deliveries at risk, client updates due, balances before release.',
    },
    {
      role: 'Editor',
      question: 'What is mine and by when?',
      focus: 'Assigned jobs with estimates and promised dates, material logged, proofs awaiting approval.',
    },
  ],

  useCasesHeading: 'What photography businesses use Verity for',
  useCases: [
    {
      name: 'Editing backlog against capacity',
      body: 'Post-production as work with estimated hours, so bookings are taken against capacity to deliver rather than availability to shoot.',
    },
    {
      name: 'Delivery promise tracking',
      body: 'Each deliverable carrying a promised date and a state, so slippage produces an update rather than a complaint.',
    },
    {
      name: 'Client selection chasing',
      body: 'Selection as a tracked step with age and reminders, so albums do not stall for weeks with capital tied up.',
    },
    {
      name: 'Balance before delivery',
      body: 'Balance position checked at release with policy applied consistently, since leverage exists before delivery and not after.',
    },
    {
      name: 'Licence terms on the job',
      body: 'Usage rights recorded with the deliverable, so commercial usage questions resolve to what was agreed.',
    },
    {
      name: 'Equipment readiness',
      body: 'Service history and pre-shoot checks as work, on dates that cannot be rescheduled.',
    },
    {
      name: 'Job-type profitability',
      body: 'Editing hours recorded against job type, so pricing reflects the post-production a job actually consumes.',
    },
    {
      name: 'Asking about the queue',
      body: 'Plain-language questions across backlog, deliveries, selections and balances, with chases assigned in the same step.',
    },
  ],

  migration:
    'Your editing tools, storage and delivery platforms continue to run and are mapped during implementation. Clients, booked shoots, jobs in progress, promised dates and outstanding balances are brought across, and Verity is configured around how the studio already works.',

  faqHeading: 'Questions photographers ask',
  faqs: [
    [
      'What can AI software do for a photography business?',
      'Verity AI answers questions from your own shoot, editing, delivery and client records: which deliveries are past their promised date, what the editing backlog is in weeks against capacity, which albums are stalled on client selection, which balances are outstanding on delivered work. Each answer can become a client update or a chase.',
    ],
    [
      'Does Verity replace our editing or gallery tools?',
      'No. Editing software, storage and delivery platforms continue and are mapped during implementation. Verity holds the jobs, the queue, the promised dates, the selections, the balances and the reporting across them.',
    ],
    [
      'How does it help with the editing backlog?',
      'Post-production is work with estimated hours assigned against editor capacity, so backlog is measurable in weeks. That lets bookings be taken against the capacity to deliver rather than the availability to shoot, which is what turns a good month into a delivery crisis six weeks later.',
    ],
    [
      'Can it chase client selections?',
      'Selection is a tracked step with a due date, an age and recorded reminders, so an album stalled for six weeks is chased rather than forgotten — which matters because it is capital and capacity tied to a job that cannot close.',
    ],
    [
      'Does it help with collecting balances?',
      'Balance position is checked before delivery release with the studio’s policy applied consistently, and any release with an outstanding balance is a recorded decision. Leverage exists before the gallery is shared, not after.',
    ],
    [
      'Can it record usage rights?',
      'Licence terms are recorded on the deliverable, so questions about additional or extended commercial usage resolve to what was actually agreed rather than to a recollection.',
    ],
    [
      'Does it track equipment?',
      'Equipment carries service history and pre-shoot checks as work against the shoot it serves, which matters on dates that cannot be rescheduled.',
    ],
    [
      'Is it suitable for a one-person studio?',
      'A single photographer is also the editor, which makes the capacity constraint sharper and the backlog more damaging. The queue is the business at any size.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the booking-to-delivery process, configuration of job types and estimates, migration of clients and jobs in progress, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the backlog.',
  ctaLede:
    'It decides what you can honestly promise the next client. Tell us how the queue is tracked today.',

  related: ['wedding-planners', 'content-agencies', 'design-agencies', 'event-venues', 'marketing-agencies', 'printing-businesses'],
};
