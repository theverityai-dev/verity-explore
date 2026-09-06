export default {
  slug: 'recruitment-agencies',
  status: 'published',
  plural: 'recruitment agencies',
  subject: 'recruitment agency',

  seo: {
    title: 'AI business management software for recruitment agencies | Verity',
    description:
      'Verity connects mandates, candidate pipelines, submission and interview stages, placements, guarantee periods and consultant performance into one system.',
    keywords: [
      'AI software for recruitment agencies',
      'recruitment agency management software',
      'candidate pipeline and submission tracking',
      'staffing agency placement and guarantee tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for recruitment',
    headline: 'You are not short of candidates. You are short of candidates for the four roles that will actually close.',
    lede:
      'A recruitment agency wins on mandate selection and submission speed, and loses to roles that were never fillable. Verity tracks the pipeline at stage level so effort follows the mandates worth working.',
    note: 'Runs alongside your existing job boards and sourcing tools.',
    panel: {
      title: 'Desk',
      meta: 'All consultants · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Open mandates', value: '64', note: 'across 22 clients' },
        { label: 'Submissions', value: '186', note: '31 awaiting client feedback' },
        { label: 'Placements', value: '11', note: '₹42 L billed' },
        { label: 'In guarantee', value: '19', note: '3 at risk' },
      ],
      rows: [
        { name: '31 submissions with no client feedback in 10 days', meta: 'Candidates going cold · 6 clients', active: true },
        { name: '14 mandates with no submission in 3 weeks', meta: 'Consultant time spent, nothing shipped', active: true },
        { name: '3 placements inside guarantee showing risk signals', meta: 'Refund exposure ₹6.8 L', active: true },
        { name: 'Client owes on two placements past terms', meta: '₹9.4 L · 62 days', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own desk in this shape.',
    },
  },

  overview: {
    heading: 'Recruitment is a business where most of the work produces nothing, deliberately.',
    paragraphs: [
      'An agency works many mandates and gets paid on a few. That is not inefficiency — it is the model. What makes an agency profitable is not working harder but working the right mandates, and identifying which ones those are early enough to redirect effort.',
      'Most agencies cannot do that, because the pipeline is held per consultant rather than per mandate and stage. A consultant knows their own roles and candidates. The agency knows the placements. Nobody can see that fourteen mandates have absorbed three weeks of consultant time without a single submission, which is the clearest possible signal that those roles were never fillable at that price.',
      'The second characteristic loss is client silence. A submission sitting ten days without feedback is a candidate going cold, and candidates who go cold take the agency’s only real asset with them. Chasing feedback is nobody’s scheduled task, so it happens when a consultant remembers.',
      'The third is the guarantee period. A placement that falls within its guarantee is a refund, and the early signals — a candidate who did not start, a client who has gone quiet, a first month that went badly — exist and are not tracked. Refund exposure is usually discovered when the client asks for the money back.',
      'Verity holds the mandate, the candidates against it, the submission and interview stages, the placement and its guarantee as one chain of records with owners and ages.',
    ],
  },

  terminology: [
    ['Mandates, roles, requisitions', 'Work'],
    ['Candidates, applicants, placements', 'Relationships'],
    ['Submissions, interviews, offers', 'Workflows'],
    ['CVs, notes, contracts', 'Records'],
    ['Consultants, researchers, account managers', 'People'],
    ['Clients, hiring managers, panels', 'Relationships'],
    ['Desks, teams, offices', 'Locations'],
  ],

  challengesHeading: 'Effort goes where it is comfortable, not where it converts.',
  challengesLede:
    'Recruitment problems come from a pipeline held personally and from silence nobody chases.',
  challenges: [
    {
      problem: 'Unfillable mandates absorb the desk',
      detail:
        'A role that will never close at that salary keeps consuming consultant hours because nobody measures effort against submissions per mandate.',
      outcome:
        'Mandates carry their age, effort and stage progress, so roles producing nothing surface as a list rather than as a vague sense.',
    },
    {
      problem: 'Submissions go silent and candidates go cold',
      detail:
        'A CV sits with a client for ten days. The candidate accepts something else. The agency finds out when it calls to arrange the interview.',
      outcome:
        'Submissions are workflow steps with an age, so silence is chased on a schedule rather than when someone remembers.',
    },
    {
      problem: 'The pipeline leaves with the consultant',
      detail:
        'Candidates, relationships and mandate context are held personally, so a departure removes a working desk.',
      outcome:
        'Candidates, mandates and history are agency records assigned to a consultant, so a departure is a reassignment.',
    },
    {
      problem: 'Guarantee exposure is unmanaged',
      detail:
        'Placements inside their guarantee period are a refund liability, and the early warning signs are noticed by the consultant and recorded nowhere.',
      outcome:
        'Placements carry their guarantee end date and check-in schedule, so risk is visible while it can still be addressed.',
    },
    {
      problem: 'Consultant performance is judged on placements alone',
      detail:
        'The only visible number is fees billed, which says nothing about whether a consultant is working a thin desk well or a rich one badly.',
      outcome:
        'Submissions per mandate, interview conversion and time-to-submit are recorded, so performance is readable at the stage where it differs.',
    },
    {
      problem: 'Client quality is never assessed',
      detail:
        'Some clients interview slowly, brief badly and rarely hire, and the agency keeps working their roles because the relationship is old.',
      outcome:
        'Feedback times, interview-to-offer rates and fill rates are recorded per client, so mandate acceptance becomes a decision.',
    },
  ],

  modulesLede:
    'One system across mandates, candidates, stages and placements.',
  modules: [
    {
      id: 'work',
      title: 'Mandates and the work against them',
      line:
        'Each mandate is work with a client, a specification, a fee basis, an owner, a stage, an age and the effort recorded against it.',
      why:
        'The mandate is the unit that either converts or does not, and effort against it is the only way to tell which is which.',
      example:
        'Fourteen mandates with no submission in three weeks, ranked by the consultant hours they have consumed.',
    },
    {
      id: 'relationships',
      title: 'Candidates, clients and hiring managers',
      line:
        'Candidates and clients are records with their history, submissions, interviews, feedback, placements and preferences.',
      why:
        'The candidate database is the agency’s asset, and it is worthless if it is personal to a consultant.',
      example:
        'A candidate submitted for three roles across two years, with every piece of feedback on their record.',
    },
    {
      id: 'workflows',
      title: 'Submissions, interviews and offers',
      line:
        'Each stage is a defined step with an owner, a date and an age, from submission through interview rounds to offer and acceptance.',
      why:
        'Recruitment is a stage business, and every loss happens at a specific stage that can be measured.',
      example:
        'Thirty-one submissions with no client feedback in ten days, chased on a schedule.',
    },
    {
      id: 'people',
      title: 'Consultants, researchers and account managers',
      line:
        'The team is modelled once, and every mandate, submission and placement shows who owns it.',
      why:
        'A desk is a person, and the agency needs to see what each desk is carrying and converting.',
      example:
        'Submissions per mandate and interview-to-offer conversion by consultant.',
    },
    {
      id: 'records',
      title: 'CVs, notes, contracts and terms',
      line:
        'Documents and interview notes attach to the candidate, mandate or placement they belong to.',
      why:
        'Terms of business and fee agreements decide what is billable, and they surface in disputes months later.',
      example:
        'The signed terms and the agreed fee percentage on the client record, referenced at invoicing.',
    },
    {
      id: 'communication',
      title: 'Feedback and candidate contact',
      line:
        'Notes, reminders and activity attach to the candidate, mandate or submission they concern.',
      why:
        'A candidate’s reason for declining is the most useful information the agency will get that week, and it usually stays in a phone.',
      example:
        'A candidate’s salary expectation recorded on their record, visible for the next relevant role.',
    },
    {
      id: 'intelligence',
      title: 'Pipeline and conversion reporting',
      line:
        'Mandate conversion, time-to-submit, submission-to-interview and interview-to-offer rates, client feedback speed, guarantee exposure and consultant performance come from the operational records.',
      why:
        'Agencies measure placements and almost nothing else, which means they cannot tell a bad month from a bad mandate mix.',
      example:
        'Fill rate by client, which frequently changes which mandates the agency should accept.',
    },
    {
      id: 'ai',
      title: 'Ask the desk a question',
      line:
        'Verity AI answers from your own mandate, candidate, submission and placement records, respects permissions, and can create assigned follow-ups.',
      why:
        'The valuable questions are about silence and about effort with nothing to show for it.',
      example:
        '"Which submissions have had no feedback in ten days?" returns thirty-one, with chases assigned by client.',
    },
    {
      id: 'control',
      title: 'Who can see which candidates',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Candidate data is personal information and consultants compete internally, so access needs to be deliberate.',
      example:
        'Consultants see their own desks and the shared candidate pool; every access is on the trail.',
    },
    {
      id: 'locations',
      title: 'Desks, teams and offices',
      line:
        'Organisational units roll into the agency, with permissions and reporting following the same structure.',
      why:
        'Multi-desk agencies only learn from comparison if every desk records the same stages.',
      example:
        'Conversion by stage across desks and offices.',
    },
  ],

  workflowsHeading: 'Stage by stage, with an age on every one.',
  workflowsLede:
    'These already run. As records with ages, the silences become visible.',
  workflows: [
    {
      name: 'Mandate intake and qualification',
      steps: [
        'Requirement recorded against the client with specification and fee basis',
        'Terms of business confirmed and attached',
        'Fillability assessed against comparable past mandates',
        'Owner assigned and target submission date set',
        'Mandate accepted or declined with the reason recorded',
      ],
      note:
        'Declining a mandate with a recorded reason is how an agency learns which clients and roles are worth working.',
    },
    {
      name: 'Sourcing to submission',
      steps: [
        'Candidates identified and matched against the specification',
        'Screening completed and notes recorded',
        'Candidate consent and availability confirmed',
        'Submission made and the stage opened with a date',
        'Time from mandate to first submission recorded',
      ],
      note:
        'Time-to-first-submission is the earliest reliable predictor of whether a mandate will close.',
    },
    {
      name: 'Client feedback chase',
      steps: [
        'Submission age tracked from the date sent',
        'Reminder issued to the hiring manager at the threshold',
        'Escalated to the account owner if silence continues',
        'Candidate kept warm with a recorded contact',
        'Feedback recorded against candidate and mandate',
      ],
      note:
        'This is the cheapest thing an agency can fix and the one most often left to memory.',
    },
    {
      name: 'Interview to offer',
      steps: [
        'Interview scheduled and confirmed with both sides',
        'Outcome and feedback recorded after each round',
        'Offer prepared with the agreed fee basis',
        'Acceptance or decline recorded with the reason',
        'Start date confirmed and the placement created',
      ],
      note:
        'Recording decline reasons is what turns a lost placement into a usable signal.',
    },
    {
      name: 'Placement and guarantee',
      steps: [
        'Placement recorded with fee, start date and guarantee period',
        'Invoice raised against the agreed terms',
        'Check-ins scheduled through the guarantee period',
        'Risk signals recorded from candidate or client contact',
        'Guarantee end recorded and exposure released',
      ],
      note:
        'Refund exposure is manageable only if the guarantee period is a tracked window rather than a date in a contract.',
    },
    {
      name: 'Desk review',
      steps: [
        'Mandates by age and effort pulled per consultant',
        'Conversion by stage compared across the desk',
        'Mandates producing nothing identified for release',
        'Client fill rates and feedback speed reviewed',
        'Effort redirected with decisions recorded',
      ],
      note:
        'Redirecting effort is the entire management job in recruitment, and it needs stage data to do at all.',
    },
  ],

  ai: {
    heading: 'Ask where the effort is going.',
    lede:
      'Verity AI reads the same mandate, candidate, submission and placement records the agency runs on. It answers from your own desks, respects permissions, and can turn an answer into chases and reassignments.',
    panelMeta: 'Grounded in your pipeline records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which submissions have had no client feedback in ten days?',
      'Which mandates have consumed effort without producing a submission?',
      'Which placements inside guarantee are showing risk signals?',
      'What is interview-to-offer conversion by consultant?',
      'Which clients give feedback slowest, and what are their fill rates?',
      'Which candidates were declined for salary in the last quarter?',
      'What is time-to-first-submission by mandate type?',
      'Which placements are unbilled or outstanding past terms?',
      'Summarise pipeline movement and guarantee exposure.',
    ],
  },

  automationHeading: 'The silences that lose candidates.',
  automationLede:
    'Each runs from the pipeline records at the point the condition is met.',
  automations: [
    {
      trigger: 'A submission passes its feedback threshold',
      steps: [
        'Submission flagged with its age and client',
        'Chase assigned to the account owner',
        'Candidate keep-warm contact task raised',
      ],
    },
    {
      trigger: 'A mandate ages without a submission',
      steps: [
        'Mandate flagged with effort recorded against it',
        'Review assigned to the desk manager',
        'Release or reprioritisation recorded',
      ],
    },
    {
      trigger: 'A placement enters its guarantee period',
      steps: [
        'Check-in schedule created across the period',
        'Risk signals recorded from each contact',
        'Exposure reported until the guarantee ends',
      ],
    },
    {
      trigger: 'A candidate declines an offer',
      steps: [
        'Reason recorded against the candidate and mandate',
        'Mandate returned to active sourcing',
        'Pattern surfaced if the reason repeats for a client',
      ],
    },
    {
      trigger: 'A placement invoice passes its terms',
      steps: [
        'Balance aged on the client record',
        'Collection follow-up assigned to the account owner',
        'Escalated with the placement history attached',
      ],
    },
    {
      trigger: 'A consultant leaves or is reassigned',
      steps: [
        'Their mandates and candidates identified',
        'Reassignment made with full history intact',
        'Active submissions flagged for continuity',
      ],
    },
  ],

  intelligenceHeading: 'What the agency owner can actually see.',
  intelligenceLede:
    'Conversion at each stage, from the records consultants create as they work.',
  intelligence: [
    {
      area: 'Pipeline',
      points: [
        'Open mandates by age, stage and consultant',
        'Submissions awaiting feedback by age',
        'Interviews and offers in progress',
        'Weighted expected fees by stage',
      ],
    },
    {
      area: 'Conversion',
      points: [
        'Time from mandate to first submission',
        'Submission-to-interview and interview-to-offer rates',
        'Offer acceptance and decline reasons',
        'Fill rate by mandate type',
      ],
    },
    {
      area: 'Clients',
      points: [
        'Feedback speed by client and hiring manager',
        'Fill rate and time to fill by client',
        'Mandates accepted against mandates filled',
        'Outstanding balances and ageing',
      ],
    },
    {
      area: 'Consultants',
      points: [
        'Mandates held and effort per mandate',
        'Submissions per mandate',
        'Conversion at each stage',
        'Placements and fees by period',
      ],
    },
    {
      area: 'Placements',
      points: [
        'Placements by period, client and consultant',
        'Guarantee exposure and end dates',
        'Falls within guarantee and their causes',
        'Fees billed, collected and outstanding',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the mandate, the submission and the stage outcome, which the desk already does informally.',

  rolesHeading: 'One agency, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Agency owner',
      question: 'Where is effort going and what is it converting?',
      focus: 'Mandate conversion, effort per mandate, guarantee exposure, client fill rates, fees against pipeline.',
    },
    {
      role: 'Desk manager',
      question: 'What needs redirecting this week?',
      focus: 'Mandates producing nothing, submissions awaiting feedback, stage conversion by consultant.',
    },
    {
      role: 'Consultant',
      question: 'Who do I need to move today?',
      focus: 'Own mandates by stage, submissions to chase, interviews scheduled, candidates to keep warm.',
    },
    {
      role: 'Accounts',
      question: 'What is billed and what is at risk?',
      focus: 'Placement invoices, balances ageing, guarantee exposure, refunds issued.',
    },
  ],

  useCasesHeading: 'What recruitment agencies use Verity for',
  useCases: [
    {
      name: 'Mandate qualification',
      body: 'Effort and stage progress recorded per mandate, so roles that were never fillable are identified before they absorb a month of desk time.',
    },
    {
      name: 'Feedback chasing',
      body: 'Submissions aged from the date sent, with chases scheduled rather than remembered, which is the cheapest loss an agency can fix.',
    },
    {
      name: 'Pipeline continuity',
      body: 'Candidates and mandates as agency records assigned to a consultant, so a departure is a reassignment rather than a lost desk.',
    },
    {
      name: 'Guarantee exposure',
      body: 'Placements carrying guarantee end dates and check-in schedules, so refund risk is visible while it can still be addressed.',
    },
    {
      name: 'Stage conversion',
      body: 'Submission-to-interview and interview-to-offer rates by consultant and client, so performance is readable where it actually differs.',
    },
    {
      name: 'Client quality assessment',
      body: 'Feedback speed, fill rate and time to fill per client, so accepting a mandate becomes a decision rather than a reflex.',
    },
    {
      name: 'Decline reason capture',
      body: 'Reasons recorded against candidate and mandate, turning a lost placement into a signal about salary, brief or process.',
    },
    {
      name: 'Asking the desk questions',
      body: 'Plain-language questions across mandates, submissions, stages and placements, with chases assigned in the same step.',
    },
  ],

  migration:
    'Job boards, sourcing tools and your billing arrangement continue to run and are mapped during implementation. Clients, candidates, open mandates and active submissions are brought across, and Verity is introduced as the pipeline and operations layer.',

  faqHeading: 'Questions agencies ask',
  faqs: [
    [
      'What can AI software do for a recruitment agency?',
      'Verity AI answers questions from your own mandate, candidate, submission and placement records: which submissions have had no client feedback in ten days, which mandates have consumed effort without producing a submission, which placements inside guarantee show risk signals, what interview-to-offer conversion looks like by consultant. Each answer can become a chase or a reassignment.',
    ],
    [
      'Is Verity an applicant tracking system?',
      'It covers what an agency needs from one — candidates, mandates, submissions, interview stages, placements and their history — and holds the commercial side alongside it: effort per mandate, fee terms, guarantee exposure and collections. Job boards and sourcing tools continue to run and are mapped during implementation.',
    ],
    [
      'What happens to a desk when a consultant leaves?',
      'Candidates, mandates and their full history are agency records assigned to a consultant rather than personal contact lists, so a departure is a reassignment with continuity rather than the loss of a working desk.',
    ],
    [
      'Can it help us decide which mandates to work?',
      'Effort, age and stage progress are recorded per mandate, and fill rate, feedback speed and time to fill are recorded per client. Together those make mandate acceptance a decision based on evidence rather than on the age of the relationship.',
    ],
    [
      'Does it track guarantee periods?',
      'A placement carries its guarantee end date with a check-in schedule across the period, and risk signals from candidate or client contact are recorded, so refund exposure is visible while something can still be done about it.',
    ],
    [
      'Can we measure consultant performance fairly?',
      'Submissions per mandate, time to first submission and conversion at each stage are all recorded, so a consultant working a thin desk well is distinguishable from one working a rich desk badly.',
    ],
    [
      'How is candidate data protected?',
      'Verity has one permission model and one audit trail. Access to candidates and desks is set deliberately, and every access is recorded.',
    ],
    [
      'Is it suitable for a small agency?',
      'A four-consultant agency has the same silent losses — unfillable mandates, unchased submissions, unmanaged guarantees — with less capacity to notice them.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the desks work, configuration of stages and fee terms, migration of clients, candidates and open mandates, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the submissions nobody has answered.',
  ctaLede:
    'Those are candidates going cold on roles you have already worked. Tell us how your pipeline is tracked today.',

  related: ['it-services-companies', 'consulting-firms', 'marketing-agencies', 'accounting-firms', 'law-firms', 'startups'],
};
