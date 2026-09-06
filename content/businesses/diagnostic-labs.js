export default {
  slug: 'diagnostic-labs',
  status: 'published',
  plural: 'diagnostic labs',
  subject: 'diagnostic lab',

  seo: {
    title: 'AI business management software for diagnostic labs | Verity',
    description:
      'Verity connects sample lifecycle and turnaround time, reagent stock and expiry, referring doctors, home collection and report delivery into one system.',
    keywords: [
      'AI software for diagnostic labs',
      'pathology lab management software',
      'sample turnaround time tracking',
      'reagent inventory and expiry software',
      'referring doctor and collection centre management',
    ],
  },

  hero: {
    eyebrow: 'Verity for diagnostic labs',
    headline: 'A sample is a clock that starts when it is drawn and ends when the report is read.',
    lede:
      'Everything a lab is judged on happens between those two moments. Verity records each transition, so a delayed report has a traceable cause instead of an apology.',
    note: 'Verity runs lab operations. It is not an analyser interface or a reporting system.',
    panel: {
      title: 'Lab',
      meta: 'All centres · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Samples today', value: '1,240', note: 'across 6 collection points' },
        { label: 'Median turnaround', value: '6h 20m', note: 'against 5h target' },
        { label: 'Pending beyond TAT', value: '48', note: '11 are urgent' },
        { label: 'Reagents low', value: '7', note: 'against tomorrow’s load' },
      ],
      rows: [
        { name: '11 urgent samples past their turnaround target', meta: 'Nine waiting on the same analyser', active: true },
        { name: '7 reagents short against tomorrow’s expected load', meta: 'Supplier lead time 2 days', active: true },
        { name: 'Home collection route running 90 minutes late', meta: '14 samples · stability window at risk', active: true },
        { name: 'Referring doctor volume down 40% this quarter', meta: 'No contact recorded since June', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own lab in this shape.',
    },
  },

  overview: {
    heading: 'A lab is a logistics business with a clinical output.',
    paragraphs: [
      'A sample is collected, transported, received, accessioned, processed, verified and reported. Every one of those is a handoff, usually between different people at different locations, and the entire commercial and clinical value of the lab depends on that chain completing inside a time window. Turnaround time is the product.',
      'When those transitions are not recorded, the lab can tell a patient that a report is delayed but cannot tell them why, and cannot tell itself where the delay repeatedly occurs. The delay is almost never in the analytical step everyone focuses on. It is in transport, in accessioning, in a sample that arrived without adequate identification, or in a verification queue waiting on one pathologist.',
      'The second operational pressure is reagents. Tests cannot run without them, they have expiry dates and storage requirements, and consumption is proportional to a test volume that varies daily. A reagent shortage discovered on the morning of a heavy load stops revenue and breaks turnaround for every sample in the queue.',
      'The third is that a lab’s demand comes from referring doctors and collection points rather than from patients directly. A referrer whose volume has halved is a commercial event, and it is usually noticed a quarter late because nobody counts referrals per referrer.',
      'Verity records the sample lifecycle, the reagent position and the referrer relationship as connected records. It does not interface with analysers or generate clinical reports.',
    ],
  },

  terminology: [
    ['Samples, accessions, batches', 'Records'],
    ['Collection, processing, verification, reporting', 'Work'],
    ['Reagents, consumables, controls', 'Inventory'],
    ['Referring doctors, collection centres, corporates', 'Relationships'],
    ['Phlebotomists, technicians, pathologists', 'People'],
    ['Rejections, repeats, escalations', 'Workflows'],
    ['Centres, routes, processing labs', 'Locations'],
  ],

  challengesHeading: 'The delay is never where everyone is looking.',
  challengesLede:
    'Lab problems are handoff problems, and handoffs are exactly what an analyser-focused view does not record.',
  challenges: [
    {
      problem: 'Turnaround is reported as an average with no causes',
      detail:
        'The lab knows its median. It does not know that transport from one collection point adds ninety minutes on three days a week.',
      outcome:
        'Every transition carries a timestamp and a location, so turnaround decomposes into stages that can each be addressed.',
    },
    {
      problem: 'Samples are rejected after transport',
      detail:
        'A sample arrives haemolysed, insufficient or unlabelled, and the patient has to be recalled — which nobody attributes to the collection point that caused it.',
      outcome:
        'Rejections are recorded with reason, collection point and phlebotomist, so recurring causes become addressable.',
    },
    {
      problem: 'Reagent shortages stop a whole morning',
      detail:
        'Consumption is not compared with test volume, so a shortage is discovered when the run is due rather than when it could still be ordered.',
      outcome:
        'Reagent stock is checked against forecast test load and supplier lead time, not against a shelf.',
    },
    {
      problem: 'Verification is a single-person queue',
      detail:
        'Completed results wait on one pathologist, and the queue is invisible until reports are late.',
      outcome:
        'Verification is a workflow step with an owner and an age, so the constraint is measurable.',
    },
    {
      problem: 'Home collection routes break stability windows',
      detail:
        'A late route means samples arrive outside their stability window and must be recollected, at the lab’s cost and the patient’s inconvenience.',
      outcome:
        'Routes are tracked against collection times and stability requirements, so a late route is flagged while it can be redirected.',
    },
    {
      problem: 'Referrer decline is noticed a quarter late',
      detail:
        'A doctor who sent forty samples a month sends twelve, and nobody sees it because referrals are not counted per referrer.',
      outcome:
        'Referrers are records with their volume and history, so a decline surfaces while it can still be discussed.',
    },
  ],

  modulesLede:
    'One system across the sample lifecycle, reagents and referrers.',
  modules: [
    {
      id: 'records',
      title: 'Samples, accessions and batches',
      line:
        'Every sample is a record with its patient reference, tests requested, collection point, timestamps at each transition, state and result release.',
      why:
        'The sample is the unit of work, and the lab’s entire performance is the history of its transitions.',
      example:
        'Forty-eight samples past turnaround, each showing the stage where the time was lost.',
    },
    {
      id: 'work',
      title: 'Collection, processing and verification',
      line:
        'Each stage is work with an owner, a location, a timestamp and a state, from draw through to report release.',
      why:
        'Turnaround is made of stages, and only stage-level records tell you which one to fix.',
      example:
        'Nine urgent samples queued at the same step, visible before the reports are late rather than after.',
    },
    {
      id: 'inventory',
      title: 'Reagents, consumables and controls',
      line:
        'Stock is held with batch, expiry, storage location, supplier and cost, consumed by the tests that use it.',
      why:
        'A reagent shortage is not an inconvenience; it stops revenue and breaks turnaround for everything queued behind it.',
      example:
        'Seven reagents short against tomorrow’s forecast load, flagged while a two-day lead time can still be met.',
    },
    {
      id: 'relationships',
      title: 'Referring doctors, centres and corporates',
      line:
        'Referrers are records with their referral volume, test mix, report delivery preferences, outstanding balances and contact history.',
      why:
        'Referral volume is the lab’s demand, and it moves for reasons that are discussable if noticed in time.',
      example:
        'A referrer whose volume fell forty percent with no contact recorded since June.',
    },
    {
      id: 'people',
      title: 'Phlebotomists, technicians and pathologists',
      line:
        'The team is modelled once, and every collection, process step, verification and rejection carries who performed it.',
      why:
        'Rejection rates and verification queues are both individual-level facts that only exist with attribution.',
      example:
        'Rejection rate by phlebotomist and collection point, from the rejections themselves.',
    },
    {
      id: 'workflows',
      title: 'Rejections, repeats and escalations',
      line:
        'Sample rejection, repeat testing, critical value escalation and report amendment move through defined steps with recorded reasons.',
      why:
        'These are the exceptions that determine both cost and clinical safety, and they are usually handled verbally.',
      example:
        'A rejection recorded with reason and collection point rather than a phone call asking for another sample.',
    },
    {
      id: 'locations',
      title: 'Collection centres, routes and processing labs',
      line:
        'Locations roll into the business, with samples, stock and reporting following the same structure, including routes as transit locations.',
      why:
        'Most lost turnaround time is between locations, which is invisible unless transit is modelled.',
      example:
        'Transit time by route and collection point, which is where the delay usually is.',
    },
    {
      id: 'intelligence',
      title: 'Turnaround and operations reporting',
      line:
        'Turnaround by stage and test, rejection rates by cause and centre, reagent consumption against volume, referrer trends and verification queues come from the operational records.',
      why:
        'Labs report turnaround averages to clients and rarely decompose them for themselves.',
      example:
        'Turnaround split into transit, accessioning, processing and verification, per centre.',
    },
    {
      id: 'ai',
      title: 'Ask the lab a question',
      line:
        'Verity AI answers from your own sample, stock and referrer records, respects permissions, and can create assigned follow-ups.',
      why:
        'The useful questions cross stage, location and time, which is exactly what a queue view cannot answer.',
      example:
        '"Where is turnaround time being lost this week?" returns the stage and the centre, with actions assigned.',
    },
    {
      id: 'control',
      title: 'Access, release and audit',
      line:
        'One permission model and one audit trail, with result release and amendment as recorded steps.',
      why:
        'Diagnostic results carry access obligations and amendments carry clinical consequence.',
      example:
        'Every release and amendment carries the person, the time and the reason.',
    },
    {
      id: 'communication',
      title: 'Updates on the sample and the referrer',
      line:
        'Notes, notifications and activity attach to the sample, route or referrer they concern.',
      why:
        'A delayed report generates calls, and the person answering should be able to see the cause.',
      example:
        'A transport delay recorded against the route, visible to whoever answers the referrer’s call.',
    },
  ],

  workflowsHeading: 'From draw to report, with a timestamp at each handoff.',
  workflowsLede:
    'These already happen. Recorded as transitions, they turn a turnaround average into a fixable list.',
  workflows: [
    {
      name: 'Collection to accessioning',
      steps: [
        'Sample collected and recorded with patient reference and tests',
        'Collection point, phlebotomist and time captured',
        'Sample assigned to a transport route',
        'Receipt at the lab recorded with time',
        'Accessioning completed and the sample released to processing',
      ],
      note:
        'The gap between collection and accessioning is where most unexplained turnaround time sits.',
    },
    {
      name: 'Processing to report',
      steps: [
        'Sample allocated to the processing step',
        'Reagent and control consumption recorded',
        'Results entered and queued for verification',
        'Verification completed by the pathologist',
        'Report released and delivery recorded',
      ],
      note:
        'The verification queue is a single-person constraint in most labs and is rarely measured.',
    },
    {
      name: 'Rejection and recollection',
      steps: [
        'Rejection recorded with reason at receipt or processing',
        'Collection point and phlebotomist attributed',
        'Recollection task raised with the patient contacted',
        'New sample linked to the original request',
        'Rejection cause aggregated by centre and person',
      ],
      note:
        'Attribution is what turns a recurring rejection cause into a training or process fix.',
    },
    {
      name: 'Reagent replenishment',
      steps: [
        'Forecast test volume derived from recent history',
        'Reagent requirement calculated against that volume',
        'Shortfalls compared with supplier lead times',
        'Order raised and approved',
        'Receipt recorded with batch, expiry and storage location',
      ],
      note:
        'Ordering against forecast load rather than against a shelf check is what prevents a stopped morning.',
    },
    {
      name: 'Home collection route',
      steps: [
        'Route planned with appointments and stability requirements',
        'Collections recorded with times as the route runs',
        'Delay against the route plan flagged',
        'Samples at risk of stability breach identified',
        'Redirection or recollection decided and recorded',
      ],
      note:
        'A stability breach discovered at the lab is a recollection; discovered on the route it is a redirection.',
    },
    {
      name: 'Referrer review',
      steps: [
        'Referral volume and test mix pulled per referrer',
        'Declines against previous periods identified',
        'Turnaround and rejection experience for that referrer reviewed',
        'Follow-up assigned with the history attached',
        'Outcome recorded on the referrer record',
      ],
      note:
        'A referrer usually leaves for a service reason the lab could have seen in its own records.',
    },
  ],

  ai: {
    heading: 'Ask where the time is going.',
    lede:
      'Verity AI reads the same sample, stock and referrer records the lab creates as it operates. It answers from your own lab, respects permissions, and can turn an answer into work assigned to a centre or a shift.',
    panelMeta: 'Grounded in your lab records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not interpret results.',
    questions: [
      'Where is turnaround time being lost this week, by stage and centre?',
      'Which urgent samples are past their turnaround target?',
      'Which collection points have the highest rejection rates, and for what reason?',
      'Which reagents fall short against tomorrow’s forecast load?',
      'What is sitting in the verification queue, and with whom?',
      'Which referring doctors have reduced their volume this quarter?',
      'Which home collection routes are running late against stability windows?',
      'Which reagent batches expire within thirty days?',
      'Summarise turnaround and rejection performance this week.',
    ],
  },

  automationHeading: 'The clocks that need watching.',
  automationLede:
    'Each runs from the sample and stock records at the point the condition is met.',
  automations: [
    {
      trigger: 'A sample approaches its turnaround target',
      steps: [
        'Sample flagged with its current stage and owner',
        'Escalated to the stage owner with time remaining',
        'Cause recorded at release if the target is missed',
      ],
    },
    {
      trigger: 'A sample is rejected',
      steps: [
        'Reason, collection point and phlebotomist recorded',
        'Recollection task raised with patient contact',
        'Rejection rate updated for the centre and person',
      ],
    },
    {
      trigger: 'Reagent stock falls below forecast requirement',
      steps: [
        'Shortfall calculated against expected test volume',
        'Order raised against the supplier with lead time considered',
        'Receipt recorded with batch and expiry',
      ],
    },
    {
      trigger: 'Verification queue exceeds threshold',
      steps: [
        'Queue flagged with age and pathologist',
        'Escalation or reallocation task raised',
        'Queue reported by person',
      ],
    },
    {
      trigger: 'A collection route runs late',
      steps: [
        'Samples at stability risk identified',
        'Redirection decision raised with the route',
        'Outcome recorded against the affected samples',
      ],
    },
    {
      trigger: 'A referrer’s volume falls below their pattern',
      steps: [
        'Referrer flagged with their volume history',
        'Service experience for that referrer attached',
        'Follow-up assigned to the relationship owner',
      ],
    },
  ],

  intelligenceHeading: 'What the lab director can actually see.',
  intelligenceLede:
    'Turnaround decomposed and demand attributed, from the lab’s own transitions.',
  intelligence: [
    {
      area: 'Turnaround',
      points: [
        'Median and outlier turnaround by test and centre',
        'Time split across transit, accessioning, processing and verification',
        'Urgent sample performance against targets',
        'Trend by centre and route over time',
      ],
    },
    {
      area: 'Quality',
      points: [
        'Rejection rate by cause, centre and phlebotomist',
        'Repeat testing volume and its causes',
        'Amendments issued and their reasons',
        'Critical value escalation timeliness',
      ],
    },
    {
      area: 'Reagents',
      points: [
        'Consumption against test volume',
        'Stock cover in days against forecast load',
        'Expiry exposure by batch and value',
        'Supplier lead time and delivery reliability',
      ],
    },
    {
      area: 'Demand',
      points: [
        'Referral volume by doctor, centre and corporate',
        'Test mix by referrer',
        'Referrers whose volume has declined',
        'Outstanding balances by account',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Sample volume by hour and centre',
        'Verification queue by pathologist',
        'Staffing against collection and processing load',
        'Route timing and utilisation',
      ],
    },
  ],
  intelligenceNote:
    'Verity records the operational lifecycle. Analysers, result generation and clinical interpretation remain with your existing systems and staff.',

  rolesHeading: 'One lab, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Lab director',
      question: 'Where are we losing turnaround and demand?',
      focus: 'Turnaround by stage and centre, rejection rates, referrer volume trends, reagent cost and expiry.',
    },
    {
      role: 'Lab manager',
      question: 'What is stuck right now?',
      focus: 'Samples past target, verification queue, reagent shortfalls, routes running late.',
    },
    {
      role: 'Pathologist',
      question: 'What needs verification?',
      focus: 'Results queued by urgency and age, critical values to escalate, amendments pending.',
    },
    {
      role: 'Collection supervisor',
      question: 'How are the centres and routes performing?',
      focus: 'Rejection rates by centre and phlebotomist, route timing, collection volumes, recollections raised.',
    },
    {
      role: 'Accounts and relationships',
      question: 'Which referrers are we losing?',
      focus: 'Referral volume trends, service experience by referrer, outstanding balances, contact history.',
    },
  ],

  useCasesHeading: 'What diagnostic labs use Verity for',
  useCases: [
    {
      name: 'Turnaround decomposition',
      body: 'Timestamps at every transition, so an average becomes transit, accessioning, processing and verification — each separately fixable.',
    },
    {
      name: 'Rejection attribution',
      body: 'Rejections recorded with reason, centre and phlebotomist, turning recurring recollections into an addressable cause.',
    },
    {
      name: 'Reagent forecasting',
      body: 'Stock checked against forecast test volume and supplier lead time rather than against a shelf, so a shortage does not stop a morning.',
    },
    {
      name: 'Verification queue visibility',
      body: 'Verification as a workflow step with an owner and an age, exposing the single-person constraint most labs have.',
    },
    {
      name: 'Route and stability management',
      body: 'Routes as transit locations tracked against collection times and stability windows, so a late route is redirected rather than recollected.',
    },
    {
      name: 'Referrer relationship management',
      body: 'Referral volume and service experience per referring doctor, so a decline is discussed rather than discovered a quarter late.',
    },
    {
      name: 'Batch and expiry control',
      body: 'Reagent batches with expiry and storage location, so expiring stock is used or replaced rather than discarded.',
    },
    {
      name: 'Asking the lab questions',
      body: 'Plain-language questions across samples, stages, stock and referrers, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your analysers, result generation and reporting systems continue to run and are mapped during implementation. Collection centres, routes, referrers, reagent stock and open samples are brought across, and Verity is introduced as the operational layer around them.',

  faqHeading: 'Questions labs ask',
  faqs: [
    [
      'Does Verity connect to analysers or generate reports?',
      'No. Analysers, result generation and clinical reporting continue in your existing systems and are mapped during implementation. Verity records the operational lifecycle around them — collection, transit, accessioning, queues, reagents, rejections, referrers and turnaround.',
    ],
    [
      'What can AI software do for a diagnostic lab?',
      'Verity AI answers questions from your own sample, stock and referrer records: where turnaround is being lost by stage and centre, which urgent samples are past target, which collection points have the highest rejection rates and why, which reagents fall short against tomorrow’s load. Each answer can become work assigned to a centre or shift.',
    ],
    [
      'How does it help with turnaround time?',
      'Every transition carries a timestamp and a location, so a turnaround average decomposes into transit, accessioning, processing and verification. The delay is usually not in the analytical step, which is why an average alone never fixes it.',
    ],
    [
      'Can it reduce sample rejections?',
      'Rejections are recorded with their reason, collection point and phlebotomist, so recurring causes become attributable and addressable rather than absorbed as recollections.',
    ],
    [
      'Does it manage reagent stock?',
      'Reagents are held with batch, expiry, storage location and supplier, and requirements are calculated against forecast test volume and supplier lead time — so a shortage is ordered against rather than discovered when the run is due.',
    ],
    [
      'Can it track home collection routes?',
      'Routes are treated as transit locations with collection times recorded, so a route running late against stability windows is flagged while samples can still be redirected rather than recollected.',
    ],
    [
      'Does it track referring doctors?',
      'Referrers are records with their referral volume, test mix and service experience, so a doctor whose volume has halved surfaces while the reason can still be discussed.',
    ],
    [
      'How is access to results controlled?',
      'Verity has one permission model and one audit trail, and result release and amendment are recorded steps with the person, time and reason attached.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the sample lifecycle, configuration of stages and targets, migration of centres, referrers and stock, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with where turnaround is actually lost.',
  ctaLede:
    'In most labs it is transit and accessioning rather than processing, and almost nobody can prove it. Tell us how the lifecycle is tracked today.',

  related: ['pharmacies', 'clinics', 'hospitals', 'dental-clinics', 'medical-distributors', 'physiotherapy-clinics'],
};
