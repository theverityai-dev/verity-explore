export default {
  slug: 'accounting-firms',
  status: 'published',
  plural: 'accounting firms',
  subject: 'accounting firm',

  seo: {
    title: 'AI business management software for accounting firms | Verity',
    description:
      'Verity connects the recurring compliance calendar, client document chasing, job capacity and recovery into one operational system for accounting practices.',
    keywords: [
      'AI software for accounting firms',
      'accounting practice management software',
      'client document chasing and job tracking',
      'bookkeeping workflow and capacity software',
    ],
  },

  hero: {
    eyebrow: 'Verity for accounting firms',
    headline: 'The work is predictable. The clients are not, and that is the whole problem.',
    lede:
      'An accounting practice knows every deadline a year ahead. What it cannot predict is when each client will send the records. Verity makes the chase a tracked, owned process rather than a personal one.',
    note: 'Verity runs the practice. Your accounting and filing software stays where it is.',
    panel: {
      title: 'Practice',
      meta: 'All jobs · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Jobs in progress', value: '184', note: 'across 96 clients' },
        { label: 'Awaiting client records', value: '61', note: '18 over two weeks' },
        { label: 'Deadlines in 30 days', value: '43', note: '9 not started' },
        { label: 'Unbilled work', value: '₹24 L', note: 'older than 45 days' },
      ],
      rows: [
        { name: '18 jobs waiting on client records for over two weeks', meta: 'Nine have deadlines inside 30 days', active: true },
        { name: '9 jobs with deadlines in 30 days not yet started', meta: 'Capacity already committed elsewhere', active: true },
        { name: 'Recurring job recovered at 40% of standard', meta: 'Fourth consecutive period', active: true },
        { name: 'Client onboarded without engagement letter', meta: 'Work started 3 weeks ago', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'An accounting practice is a capacity problem with a fixed calendar.',
    paragraphs: [
      'Unlike most professional firms, an accounting practice knows its entire year in advance. Every client has a set of recurring obligations with fixed dates, and the total work is calculable months ahead. That should make it the easiest professional business to plan.',
      'It is not, because the work cannot start until the client sends their records, and clients send them late, incompletely, and in a rush at the end. So a firm with a perfectly predictable calendar experiences it as a series of crises, with capacity idle in one month and overwhelmed in the next.',
      'The chase is therefore the practice’s core operational activity, and in most firms it is entirely personal. A junior emails a client, gets nothing, mentions it to a manager, emails again. There is no record of how many times, no visibility of which clients are chronically late, and no way to see that a job with a deadline in three weeks has not started.',
      'The second problem is recovery. Recurring compliance work is usually quoted as a fixed fee against an assumed volume of effort, and when a client’s records are disorganised the actual effort is several times the assumption. Firms know this happens and generally cannot say which clients it happens to, because effort is not recorded against the recurring job.',
      'Verity holds the client, their recurring obligations, the records outstanding, the effort spent and the recovery achieved as one set of records — so both the chase and the capacity plan work from evidence.',
    ],
  },

  terminology: [
    ['Recurring jobs, one-off assignments', 'Work'],
    ['Clients, groups, engagement letters', 'Relationships'],
    ['Records requested, workpapers, filings', 'Records'],
    ['Deadlines, reviews, sign-offs', 'Workflows'],
    ['Partners, managers, associates', 'People'],
    ['Fee quotes, write-offs, approvals', 'Control'],
    ['Offices, teams, service lines', 'Locations'],
  ],

  challengesHeading: 'A predictable year experienced as a permanent rush.',
  challengesLede:
    'Accounting practice problems come from work that cannot start on time and effort that is never measured against the fee.',
  challenges: [
    {
      problem: 'The chase for records is personal and untracked',
      detail:
        'Someone emails a client. Nothing comes. They email again. There is no record of how often, so no one can say which clients are chronically late.',
      outcome:
        'Outstanding records are items on the job with an owner and an age, so the chase is a worked list and lateness becomes a client attribute.',
    },
    {
      problem: 'Jobs with near deadlines have not started',
      detail:
        'A filing is due in three weeks and the job has not begun, which is only discovered when someone looks at the deadline list.',
      outcome:
        'Every recurring obligation is a job with a start-by date derived from its deadline, so not-started work surfaces while it is still recoverable.',
    },
    {
      problem: 'Recovery on fixed-fee work is unknown',
      detail:
        'Effort is not recorded against recurring jobs, so a client whose disorganised records consume three times the assumed hours is billed the same as one who does not.',
      outcome:
        'Effort recorded against the job makes recovery per client measurable, which is the basis for repricing or resigning.',
    },
    {
      problem: 'Capacity is planned by feeling',
      detail:
        'The firm knows the calendar and does not model it, so it discovers overload during the peak rather than three months before.',
      outcome:
        'Recurring obligations across all clients produce a forward workload against team capacity by period.',
    },
    {
      problem: 'Review bottlenecks are invisible',
      detail:
        'Work sits completed and unreviewed because the reviewing partner is the constraint, and nobody measures the queue.',
      outcome:
        'Review is a workflow step with an owner and an age, so the bottleneck is measurable rather than felt.',
    },
    {
      problem: 'Scope creep is absorbed silently',
      detail:
        'Additional advice and cleanup work is done inside a compliance fee because it seemed small at the time.',
      outcome:
        'Out-of-scope work is raised as a variation, so it is either billed or is a recorded decision not to.',
    },
  ],

  modulesLede:
    'One system across the calendar, the chase, capacity and recovery.',
  modules: [
    {
      id: 'work',
      title: 'Recurring jobs and one-off assignments',
      line:
        'Every obligation is a job with a client, a deadline, a derived start-by date, an owner, a state and the effort recorded against it.',
      why:
        'A practice’s entire workload is knowable in advance, and it only becomes plannable when each obligation is a record rather than a line in a calendar.',
      example:
        'Forty-three deadlines inside thirty days with nine jobs not started, ranked by the effort each usually takes.',
    },
    {
      id: 'records',
      title: 'Records requested, received and outstanding',
      line:
        'Each job carries the specific records it needs, their state and their age, with documents attached as they arrive.',
      why:
        'The outstanding-records list is the operational heart of an accounting practice and is usually held in an inbox.',
      example:
        'Sixty-one jobs awaiting client records, eighteen of them for more than a fortnight, ranked by deadline proximity.',
    },
    {
      id: 'relationships',
      title: 'Clients, groups and engagement terms',
      line:
        'Clients are records with their entities, obligations, engagement terms, fee basis, responsiveness history and balances.',
      why:
        'The commercially relevant fact about a client is often not their fee but how much effort they cost to serve.',
      example:
        'A client whose records arrive an average of nineteen days late, alongside the recovery achieved on their jobs.',
    },
    {
      id: 'workflows',
      title: 'Deadlines, reviews and sign-offs',
      line:
        'Deadlines, review steps, partner sign-off and filing confirmation are defined steps with owners and escalation.',
      why:
        'A missed statutory deadline is the failure a practice cannot absorb, and review queues are the most common cause of near-misses.',
      example:
        'Work completed and waiting on review, aged by reviewer, which is the queue nobody currently measures.',
    },
    {
      id: 'people',
      title: 'Partners, managers and associates',
      line:
        'The team is modelled once, and every job, review and record request shows who owns it.',
      why:
        'Capacity planning is impossible without knowing who is carrying what across a calendar that is already known.',
      example:
        'Committed job hours per person by month against the known calendar.',
    },
    {
      id: 'intelligence',
      title: 'Capacity and recovery reporting',
      line:
        'Forward workload against capacity, recovery by client and job type, records lateness, review queues and deadline compliance come from the operational records.',
      why:
        'The two questions that decide an accounting firm’s year — can we deliver it and are we recovering — are both calculable from the calendar and the effort.',
      example:
        'Recovery by client on recurring work, which frequently identifies the clients that should be repriced.',
    },
    {
      id: 'communication',
      title: 'Chasing, recorded',
      line:
        'Requests, reminders and responses attach to the job and client they concern.',
      why:
        'A chase with no record is a chase that gets repeated, forgotten or denied.',
      example:
        'Three reminders sent on a job, visible to the manager without asking the associate.',
    },
    {
      id: 'control',
      title: 'Fee approvals, write-offs and access',
      line:
        'One permission model and one audit trail, with fee variations and write-offs as approval steps.',
      why:
        'Client financial data requires deliberate access control, and write-offs are where recovery quietly disappears.',
      example:
        'A write-off above the manager’s threshold becomes an approval with the recovery position attached.',
    },
    {
      id: 'ai',
      title: 'Ask the practice a question',
      line:
        'Verity AI answers from your own job, client, record and effort data, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking cross the calendar, the chase and recovery at once.',
      example:
        '"Which jobs with deadlines inside thirty days have not started?" returns nine, with chases and assignments raised.',
    },
    {
      id: 'locations',
      title: 'Offices, teams and service lines',
      line:
        'Organisational units roll into the firm, with permissions and reporting following the same structure.',
      why:
        'Multi-office practices cannot compare recovery or capacity unless work is recorded identically.',
      example:
        'Recovery and deadline compliance by service line and office.',
    },
  ],

  workflowsHeading: 'The year, as a set of records.',
  workflowsLede:
    'The calendar is already known. These make it plannable.',
  workflows: [
    {
      name: 'Recurring obligation cycle',
      steps: [
        'Obligation generated for the period against the client',
        'Start-by date derived from the deadline and expected effort',
        'Record request issued with the specific items needed',
        'Receipt tracked and outstanding items aged',
        'Work performed with effort recorded against the job',
        'Review, sign-off and filing completed',
        'Recovery compared against the fee',
      ],
      note:
        'The start-by date is what turns a deadline into something that can be missed early enough to fix.',
    },
    {
      name: 'Chasing client records',
      steps: [
        'Outstanding items listed against the job',
        'Reminder issued and recorded',
        'Escalation to the manager as the start-by date approaches',
        'Deadline risk flagged to the partner where receipt is still outstanding',
        'Client responsiveness recorded against their record',
      ],
      note:
        'Recording the chase is what turns chronic lateness from an impression into a client attribute you can act on.',
    },
    {
      name: 'Capacity planning',
      steps: [
        'Forward obligations pulled across all clients by period',
        'Expected effort applied from historical actuals',
        'Committed workload compared against team capacity',
        'Overload periods identified months ahead',
        'Resourcing or scheduling decisions raised',
      ],
      note:
        'The calendar is known a year ahead. Modelling it is the difference between a plan and a peak.',
    },
    {
      name: 'Review and sign-off',
      steps: [
        'Work completed and submitted for review',
        'Review queue aged by reviewer',
        'Review completed with points raised',
        'Points cleared and partner sign-off recorded',
        'Filing confirmed and recorded against the obligation',
      ],
      note:
        'The review queue is usually the firm’s real constraint and the one nobody measures.',
    },
    {
      name: 'Recovery review',
      steps: [
        'Effort recorded against each recurring job',
        'Recovery calculated against the agreed fee',
        'Clients below threshold identified across periods',
        'Repricing or scope conversation raised with the partner',
        'Decision recorded against the client',
      ],
      note:
        'A client recovering at forty percent for four consecutive periods is a commercial decision, not an accident.',
    },
    {
      name: 'Client onboarding',
      steps: [
        'Client and entities recorded with their obligations',
        'Engagement letter issued and tracked to signature',
        'Fee basis and scope recorded',
        'Recurring obligations generated into the calendar',
        'Opening records requested and tracked',
      ],
      note:
        'Work beginning before an engagement letter is signed becomes a visible exception.',
    },
  ],

  ai: {
    heading: 'Ask what the calendar cannot absorb.',
    lede:
      'Verity AI reads the same job, client, record and effort data the practice runs on. It answers from your own firm, respects each user’s permissions, and can turn an answer into chases and assignments.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which jobs with deadlines inside thirty days have not started?',
      'Which clients have records outstanding for more than two weeks?',
      'Which clients recover worst on recurring work?',
      'What is committed workload against capacity for the next quarter?',
      'What is sitting in review, and with whom?',
      'Which clients are consistently late with records?',
      'How much work is unbilled beyond forty-five days?',
      'Which active clients have no signed engagement letter?',
      'Summarise deadline risk for the next month.',
    ],
  },

  automationHeading: 'The chase, without anyone having to remember.',
  automationLede:
    'Each runs from the job and client records at the point the condition is met.',
  automations: [
    {
      trigger: 'A recurring obligation falls due to start',
      steps: [
        'Job created with its deadline and start-by date',
        'Record request issued to the client with the items needed',
        'Owner assigned from the client’s team',
        'Escalated if the job has not started by its date',
      ],
    },
    {
      trigger: 'Records remain outstanding past threshold',
      steps: [
        'Reminder issued and recorded against the job',
        'Escalated to the manager as the deadline approaches',
        'Client responsiveness updated on their record',
      ],
    },
    {
      trigger: 'Work sits in review beyond its threshold',
      steps: [
        'Review flagged with its age and reviewer',
        'Escalated to the partner',
        'Queue reported by reviewer',
      ],
    },
    {
      trigger: 'Effort on a job exceeds its expected hours',
      steps: [
        'Job flagged with effort against the fee',
        'Scope variation or write-off decision raised',
        'Recovery recorded against the client',
      ],
    },
    {
      trigger: 'A deadline approaches with work incomplete',
      steps: [
        'Risk flagged with the outstanding step named',
        'Partner notified with the client history attached',
        'Resourcing decision raised',
      ],
    },
    {
      trigger: 'Work remains unbilled beyond threshold',
      steps: [
        'Unbilled position aged against the client',
        'Billing task assigned to the responsible partner',
        'Escalated past the second threshold',
      ],
    },
  ],

  intelligenceHeading: 'What the partners can actually see.',
  intelligenceLede:
    'Capacity, delivery and recovery from the practice’s own records.',
  intelligence: [
    {
      area: 'Calendar',
      points: [
        'Obligations by period and deadline',
        'Jobs not started against their start-by date',
        'Deadline compliance historically',
        'Filing confirmations recorded',
      ],
    },
    {
      area: 'Records',
      points: [
        'Outstanding items by job and age',
        'Client responsiveness and average lateness',
        'Chases issued per job',
        'Jobs blocked on records against their deadline',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Forward workload against team capacity by period',
        'Committed hours per person',
        'Overload periods identified ahead',
        'Utilisation by team and service line',
      ],
    },
    {
      area: 'Recovery',
      points: [
        'Effort against fee by client and job type',
        'Clients below recovery threshold across periods',
        'Write-offs and their approvals',
        'Scope variations raised and agreed',
      ],
    },
    {
      area: 'Delivery',
      points: [
        'Review queue by reviewer and age',
        'Cycle time from records received to filing',
        'Rework arising from review points',
        'Deadline near-misses and their causes',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds the practice records. Your accounting, tax and filing software continues to hold the accounting itself.',

  rolesHeading: 'One practice, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Partner',
      question: 'Can we deliver the calendar, and are we recovering?',
      focus: 'Forward workload against capacity, recovery by client, deadline risk, unbilled ageing.',
    },
    {
      role: 'Manager',
      question: 'What is blocked and what is late?',
      focus: 'Jobs not started, records outstanding, review queue, effort against expected hours.',
    },
    {
      role: 'Associate',
      question: 'What do I owe this week?',
      focus: 'Assigned jobs by deadline, records received, review points to clear, effort to record.',
    },
    {
      role: 'Practice administrator',
      question: 'Who has not sent what?',
      focus: 'Outstanding record requests by client and age, chases due, engagement letters outstanding.',
    },
  ],

  useCasesHeading: 'What accounting firms use Verity for',
  useCases: [
    {
      name: 'Recurring obligation calendar',
      body: 'Every client obligation as a job with a deadline and a derived start-by date, so not-started work surfaces while it is still recoverable.',
    },
    {
      name: 'Records chasing as a process',
      body: 'Outstanding items on the job with an owner, an age and a recorded chase history, replacing a personal email thread.',
    },
    {
      name: 'Client responsiveness',
      body: 'Average lateness and chase count per client, turning chronic non-responsiveness into a fact that can be priced or acted on.',
    },
    {
      name: 'Capacity modelling',
      body: 'Forward obligations against team capacity by period, so overload is identified months ahead rather than during the peak.',
    },
    {
      name: 'Recovery on fixed fees',
      body: 'Effort recorded against recurring jobs, so clients consuming several times the assumed hours are identified rather than suspected.',
    },
    {
      name: 'Review queue management',
      body: 'Review as a workflow step aged by reviewer, exposing the constraint that causes most deadline near-misses.',
    },
    {
      name: 'Scope variation control',
      body: 'Out-of-scope advice raised as a variation, so it is either billed or is a recorded decision.',
    },
    {
      name: 'Asking the practice questions',
      body: 'Plain-language questions across calendar, chase, capacity and recovery, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your accounting, tax and filing software continues to run and is mapped during implementation. Clients, entities, recurring obligations, engagement terms and open jobs are brought across, and Verity is introduced as the practice layer over them.',

  faqHeading: 'Questions accounting firms ask',
  faqs: [
    [
      'Does Verity do the accounting?',
      'No. Your accounting, tax and filing software continues to do that and is mapped during implementation. Verity runs the practice around it — the obligation calendar, record chasing, job ownership, capacity, review queues, recovery and reporting.',
    ],
    [
      'What can AI software do for an accounting firm?',
      'Verity AI answers questions from your own job, client, record and effort data: which jobs with deadlines inside thirty days have not started, which clients have records outstanding beyond two weeks, which clients recover worst on recurring work, what committed workload looks like against capacity next quarter. Each answer can become a chase or an assignment.',
    ],
    [
      'Can it manage chasing clients for records?',
      'Outstanding items sit on the job with an owner and an age, reminders are recorded, and escalation follows the start-by date rather than the deadline. The chase becomes a worked list, and chronic lateness becomes a recorded client attribute.',
    ],
    [
      'Does it help with capacity planning?',
      'Because every recurring obligation is a record with a deadline and historical effort, forward workload can be compared against team capacity by period, so overload periods are identified months ahead rather than experienced.',
    ],
    [
      'Can it show recovery on fixed-fee work?',
      'Effort recorded against each recurring job is compared with the agreed fee, so clients whose disorganised records consume several times the assumed hours become identifiable — which is the basis for repricing rather than absorbing.',
    ],
    [
      'How does it handle review bottlenecks?',
      'Review is a workflow step with an owner, so completed work waiting on a reviewer is aged and reported. That queue is usually the practice’s real constraint and the least measured part of it.',
    ],
    [
      'Can we control who sees client financial data?',
      'Verity has one permission model and one audit trail, so client access is set deliberately by team and every access is recorded.',
    ],
    [
      'Is it suitable for a small practice?',
      'A three-person practice has the same calendar, the same chasing problem and the same recovery blind spot, with less capacity to absorb any of them.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the practice actually works, configuration of the obligation calendar, migration of clients and open jobs, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the jobs that have not started.',
  ctaLede:
    'Every practice has a list of them and no reliable way to produce it. Tell us how your calendar is tracked today.',

  related: ['ca-firms', 'consulting-firms', 'law-firms', 'financial-advisors', 'it-services-companies', 'recruitment-agencies'],
};
