export default {
  slug: 'consulting-firms',
  status: 'published',
  plural: 'consulting firms',
  subject: 'consulting firm',

  seo: {
    title: 'AI business management software for consulting firms | Verity',
    description:
      'Verity connects pursuits, engagement staffing, utilisation, deliverables, expenses and realisation into one operational system for consultancies.',
    keywords: [
      'AI software for consulting firms',
      'consulting firm management software',
      'engagement staffing and utilisation software',
      'professional services delivery and realisation tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for consulting firms',
    headline: 'You won the work in March and staffed it with whoever was free in April.',
    lede:
      'A consultancy sells specific expertise and delivers with available people. Verity connects the pursuit, the staffing commitment and the delivery record so the gap between them stops being invisible.',
    note: 'Runs alongside your existing accounting and document tools.',
    panel: {
      title: 'Engagements',
      meta: 'All active · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active engagements', value: '27', note: '₹6.4 Cr contracted' },
        { label: 'Utilisation', value: '68%', note: 'against 75% target' },
        { label: 'Over budget', value: '6', note: 'no variation raised' },
        { label: 'Unbilled', value: '₹34 L', note: 'beyond 45 days' },
      ],
      rows: [
        { name: '6 engagements past budget without a variation', meta: 'Combined overrun ₹52 L', active: true },
        { name: 'Three consultants below 40% utilisation this month', meta: 'While two engagements are short-staffed', active: true },
        { name: 'Deliverable overdue on a milestone-billed engagement', meta: 'Billing blocked · ₹18 L', active: true },
        { name: 'Pursuit resourced against people already committed', meta: 'Start date in 3 weeks', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own engagements in this shape.',
    },
  },

  overview: {
    heading: 'A consultancy sells named expertise and delivers with whoever is available.',
    paragraphs: [
      'The proposal names people. The delivery uses whoever is free when the work actually starts, because the pursuit closed later than expected or another engagement overran. That substitution is normal and usually fine, but it is also where margin, quality and client satisfaction all quietly move — and almost no firm records it well enough to see the pattern.',
      'Utilisation is the number every consultancy watches and the one that hides the most. A firm at sixty-eight percent against a seventy-five percent target sounds mildly under-utilised. The reality is usually that three people are at forty percent while two engagements are short-staffed, which is a scheduling failure rather than a demand failure and has a completely different fix.',
      'Budget overrun is the third. Consulting engagements are scoped against an assumed effort, and additional analysis, extra workshops and an expanded stakeholder group are absorbed because raising a variation feels like a commercial confrontation. Six engagements past budget with no variation raised is not six mistakes; it is a firm-level habit.',
      'The fourth is that milestone billing depends on deliverables, so a deliverable running late blocks cash that has already been earned in effort.',
      'Verity holds the pursuit, the engagement, the staffing commitment, the deliverables, the effort and the billing position as one set of records.',
    ],
  },

  terminology: [
    ['Pursuits, proposals, engagements', 'Work'],
    ['Deliverables, milestones, workshops', 'Records'],
    ['Clients, sponsors, stakeholders', 'Relationships'],
    ['Partners, principals, consultants, analysts', 'People'],
    ['Variations, approvals, sign-offs', 'Workflows'],
    ['Practices, sectors, offices', 'Locations'],
    ['Rates, budgets, realisation', 'Control'],
  ],

  challengesHeading: 'The commercial problems present as scheduling problems.',
  challengesLede:
    'Consulting difficulties come from a gap between what was sold, who was promised and who actually delivered.',
  challenges: [
    {
      problem: 'Staffing does not match what was sold',
      detail:
        'The proposal named a senior team. Delivery used whoever was available, and the client noticed before the firm did.',
      outcome:
        'Proposed staffing and actual staffing are both recorded against the engagement, so substitution is visible and can be discussed rather than discovered.',
    },
    {
      problem: 'Utilisation hides distribution',
      detail:
        'A firm-level figure conceals that some people are idle while engagements are short, which is a scheduling problem wearing a demand problem’s clothes.',
      outcome:
        'Committed and actual hours per person are records, so idle capacity and short engagements appear in the same view.',
    },
    {
      problem: 'Budget overruns without variations',
      detail:
        'Extra analysis and additional stakeholders are absorbed because raising a variation is uncomfortable, and the pattern repeats across engagements.',
      outcome:
        'Effort against budget is visible per engagement, so an overrun raises a variation decision rather than an absorbed cost.',
    },
    {
      problem: 'Pursuits are resourced against people already committed',
      detail:
        'A proposal promises a team whose time is already sold, and the conflict surfaces at the start date.',
      outcome:
        'Pursuits carry provisional resourcing against the same capacity model, so a conflict is visible at proposal rather than at kickoff.',
    },
    {
      problem: 'Deliverables slip and block billing',
      detail:
        'A milestone-billed engagement cannot invoice because a deliverable is late, and cash earned in effort sits unbilled.',
      outcome:
        'Deliverables are records with owners and dates linked to billing milestones, so a slip is visible with its cash consequence.',
    },
    {
      problem: 'Realisation by client is unknown',
      detail:
        'Rate cards are discounted per engagement and effort is not compared against the fee, so nobody knows which clients are genuinely profitable.',
      outcome:
        'Effort at cost against fee produces realisation per engagement, client and practice.',
    },
  ],

  modulesLede:
    'One system across pursuits, staffing, delivery and realisation.',
  modules: [
    {
      id: 'work',
      title: 'Pursuits, engagements and workstreams',
      line:
        'Each is work with a client, a scope, a budget, a team, deliverables, a state and the effort recorded against it.',
      why:
        'The engagement is the commercial and delivery unit at once, and holding it as a record is what connects the two.',
      example:
        'Twenty-seven active engagements with six past budget and no variation raised.',
    },
    {
      id: 'people',
      title: 'Partners, consultants and analysts',
      line:
        'The team is modelled once with grades, rates, skills and availability, and every engagement records who was proposed and who delivered.',
      why:
        'People are the entire cost base and the entire product, and a consultancy that cannot see their commitments cannot schedule.',
      example:
        'Three consultants below forty percent while two engagements are short-staffed, in the same view.',
    },
    {
      id: 'records',
      title: 'Deliverables, milestones and documents',
      line:
        'Deliverables are records with owners, dates, review steps and the billing milestone they unlock.',
      why:
        'In milestone-billed work, a deliverable is a cash event as much as a delivery event.',
      example:
        'An overdue deliverable blocking eighteen lakh of billing, visible with its owner.',
    },
    {
      id: 'relationships',
      title: 'Clients, sponsors and stakeholders',
      line:
        'Clients are records with their engagements, sponsors, rate agreements, history and balances.',
      why:
        'Consulting revenue is repeat and sponsor-driven, and a sponsor changing roles is the most common cause of a pipeline drying up.',
      example:
        'A client with four engagements across two practices, with realisation measured across all of them.',
    },
    {
      id: 'workflows',
      title: 'Variations, approvals and sign-offs',
      line:
        'Scope variations, rate exceptions, write-offs and deliverable sign-offs move through defined steps with recorded decisions.',
      why:
        'The variation conversation is the one consultancies avoid, and making it a step rather than a confrontation is what makes it happen.',
      example:
        'An engagement passing budget raises a variation with the effort attached rather than absorbing it.',
    },
    {
      id: 'intelligence',
      title: 'Utilisation, realisation and pipeline reporting',
      line:
        'Utilisation by person and grade, realisation by engagement and client, budget performance, deliverable timeliness and pipeline against capacity come from the operational records.',
      why:
        'Consultancies report revenue and utilisation, and rarely realisation, which is where the profitability actually is.',
      example:
        'Realisation by client after discounts and overruns, which frequently reorders which clients are worth pursuing.',
    },
    {
      id: 'communication',
      title: 'Decisions attached to the engagement',
      line:
        'Notes, notifications and activity attach to the engagement, deliverable or client they concern.',
      why:
        'A scope decision taken verbally in a steering meeting is the one that causes the dispute at closure.',
      example:
        'A client’s agreement to reduce a workstream, recorded on the engagement rather than in an inbox.',
    },
    {
      id: 'control',
      title: 'Rates, budgets and access',
      line:
        'One permission model and one audit trail, with rate and budget changes as recorded decisions.',
      why:
        'Rate discounting is where consulting margin is given away, and it should be visible rather than negotiated privately.',
      example:
        'Rate exceptions recorded against the engagement with the approver and the reason.',
    },
    {
      id: 'ai',
      title: 'Ask the firm a question',
      line:
        'Verity AI answers from your own engagement, staffing, effort and billing records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking cross delivery, scheduling and commerce, which is why they are usually asked at a partners’ meeting.',
      example:
        '"Which engagements are past budget without a variation?" returns six, with reviews assigned to engagement leads.',
    },
    {
      id: 'locations',
      title: 'Practices, sectors and offices',
      line:
        'Organisational units roll into the firm, with permissions and reporting following the same structure.',
      why:
        'Multi-practice firms share people across sectors, and only identical recording makes utilisation and realisation comparable.',
      example:
        'Utilisation and realisation by practice, from one set of records.',
    },
  ],

  workflowsHeading: 'From pursuit to realisation.',
  workflowsLede:
    'These already run. As connected records, the gap between what was sold and what was delivered becomes visible.',
  workflows: [
    {
      name: 'Pursuit to signed engagement',
      steps: [
        'Opportunity recorded against the client and sponsor',
        'Scope, deliverables and fee basis drafted',
        'Proposed team checked against existing commitments',
        'Proposal issued and its state tracked',
        'Engagement signed with budget, team and milestones recorded',
        'Provisional resourcing converted to commitments',
      ],
      note:
        'Checking the proposed team against commitments at proposal time is what prevents a kickoff conflict.',
    },
    {
      name: 'Staffing and substitution',
      steps: [
        'Engagement staffed against the commitments made',
        'Substitutions recorded where the proposed person is unavailable',
        'Client informed where the substitution is material',
        'Actual staffing tracked against proposed',
        'Pattern reviewed across engagements',
      ],
      note:
        'Substitution is normal; a firm that cannot see how often it happens cannot manage its consequences.',
    },
    {
      name: 'Delivery and deliverables',
      steps: [
        'Workstreams and deliverables created with owners and dates',
        'Effort recorded against workstreams',
        'Internal review completed before client submission',
        'Client sign-off tracked as a step',
        'Milestone released for billing on acceptance',
      ],
      note:
        'Tying the billing milestone to the deliverable is what makes a slip visible as a cash event.',
    },
    {
      name: 'Budget and variation',
      steps: [
        'Effort compared against budget as the engagement runs',
        'Threshold breach flagged with the remaining scope',
        'Variation raised with the additional effort quantified',
        'Client agreement recorded, or a decision to absorb recorded',
        'Budget updated and realisation recalculated',
      ],
      note:
        'The point is that absorbing an overrun becomes an explicit decision rather than a default.',
    },
    {
      name: 'Capacity and pipeline planning',
      steps: [
        'Committed hours aggregated by person and period',
        'Weighted pipeline added against the same periods',
        'Gaps and overcommitment identified ahead',
        'Recruitment, subcontracting or pursuit decisions raised',
        'Decisions recorded against the plan',
      ],
      note:
        'Idle people and short engagements in the same month is a scheduling failure, and it only appears if both are in one view.',
    },
    {
      name: 'Billing and realisation',
      steps: [
        'Milestones or time-based fees raised as due',
        'Unbilled effort aged against the engagement',
        'Invoice prepared and routed for partner review',
        'Write-offs above threshold routed for approval',
        'Realisation calculated against effort at cost',
      ],
      note:
        'Realisation, not revenue, is the number that tells a consultancy which work to do more of.',
    },
  ],

  ai: {
    heading: 'Ask what the utilisation number is hiding.',
    lede:
      'Verity AI reads the same engagement, staffing, effort and billing records the firm runs on. It answers from your own practice, respects permissions, and can turn an answer into reviews and resourcing decisions.',
    panelMeta: 'Grounded in your engagement records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which engagements are past budget without a variation raised?',
      'Who is below target utilisation while engagements are short-staffed?',
      'Which deliverables are overdue and blocking a billing milestone?',
      'What is realisation by client after discounts and overruns?',
      'Which pursuits are resourced against people already committed?',
      'How often are proposed teams substituted at delivery?',
      'How much work is unbilled beyond forty-five days?',
      'What is committed capacity against weighted pipeline next quarter?',
      'Summarise engagement health across the firm.',
    ],
  },

  automationHeading: 'The conversations that get postponed.',
  automationLede:
    'Each runs from the engagement records at the point the condition is met.',
  automations: [
    {
      trigger: 'Effort passes a share of the engagement budget',
      steps: [
        'Engagement flagged with effort against budget and remaining scope',
        'Variation review assigned to the engagement lead',
        'Decision recorded — variation raised or absorption agreed',
      ],
    },
    {
      trigger: 'A deliverable passes its due date',
      steps: [
        'Deliverable flagged with the milestone it blocks',
        'Owner notified with the billing consequence attached',
        'Escalated to the engagement lead',
      ],
    },
    {
      trigger: 'A proposal names people already committed',
      steps: [
        'Conflict flagged against the pursuit and the period',
        'Resourcing decision raised before submission',
        'Outcome recorded against the pursuit',
      ],
    },
    {
      trigger: 'A consultant falls below utilisation threshold',
      steps: [
        'Availability surfaced against short-staffed engagements',
        'Reallocation task assigned to the resourcing owner',
        'Outcome recorded against the period',
      ],
    },
    {
      trigger: 'Work remains unbilled beyond threshold',
      steps: [
        'Unbilled position aged against the engagement',
        'Billing task assigned to the responsible partner',
        'Escalated past the second threshold',
      ],
    },
    {
      trigger: 'A rate exception is requested',
      steps: [
        'Request held at the approval step with realisation impact',
        'Routed to the partner with the client history attached',
        'Decision recorded against the engagement',
      ],
    },
  ],

  intelligenceHeading: 'What the partners can actually see.',
  intelligenceLede:
    'Delivery and commercial performance from the same records.',
  intelligence: [
    {
      area: 'Engagements',
      points: [
        'Active engagements by state, value and practice',
        'Effort against budget and remaining scope',
        'Engagements over budget without variations',
        'Deliverable timeliness and sign-off status',
      ],
    },
    {
      area: 'People',
      points: [
        'Utilisation by person, grade and practice',
        'Committed hours against availability',
        'Proposed against actual staffing',
        'Idle capacity alongside short-staffed engagements',
      ],
    },
    {
      area: 'Commercial',
      points: [
        'Realisation by engagement, client and practice',
        'Rate exceptions and discounts granted',
        'Unbilled effort by age',
        'Write-offs and their approvals',
      ],
    },
    {
      area: 'Pipeline',
      points: [
        'Weighted pipeline against capacity by period',
        'Pursuits with resourcing conflicts',
        'Win rate by client, sector and pursuit type',
        'Conversion time from proposal to signature',
      ],
    },
    {
      area: 'Clients',
      points: [
        'Engagement history and total value per client',
        'Realisation across all their engagements',
        'Sponsor changes and their pipeline effect',
        'Outstanding balances and ageing',
      ],
    },
  ],
  intelligenceNote:
    'Verity holds the engagement records. Your accounting and document tools continue to hold the accounts and the work product.',

  rolesHeading: 'One firm, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Managing partner',
      question: 'Is the firm profitable and deliverable?',
      focus: 'Realisation by client and practice, utilisation distribution, engagements over budget, pipeline against capacity.',
    },
    {
      role: 'Practice lead',
      question: 'What is at risk in my practice?',
      focus: 'Engagements over budget, deliverables overdue, staffing gaps, pursuits with conflicts.',
    },
    {
      role: 'Engagement lead',
      question: 'Is this engagement on track?',
      focus: 'Effort against budget, deliverables and sign-offs, team allocation, variations outstanding.',
    },
    {
      role: 'Resourcing manager',
      question: 'Who is free and who is needed?',
      focus: 'Committed hours by person and period, short-staffed engagements, pursuit resourcing conflicts.',
    },
    {
      role: 'Consultant',
      question: 'What am I on and what do I owe?',
      focus: 'Assigned workstreams and deliverables, effort to record, review points, upcoming allocation.',
    },
  ],

  useCasesHeading: 'What consultancies use Verity for',
  useCases: [
    {
      name: 'Proposed against actual staffing',
      body: 'Both recorded on the engagement, so substitution is visible as a pattern rather than noticed by the client first.',
    },
    {
      name: 'Utilisation distribution',
      body: 'Committed and actual hours per person, so idle capacity and short-staffed engagements appear in one view rather than behind a firm-level average.',
    },
    {
      name: 'Budget and variation discipline',
      body: 'Effort against budget per engagement, so passing it raises a variation decision rather than an absorbed cost.',
    },
    {
      name: 'Deliverable-linked billing',
      body: 'Deliverables tied to the milestones they unlock, so a slip is visible with its cash consequence.',
    },
    {
      name: 'Pursuit resourcing',
      body: 'Provisional resourcing on pursuits against the same capacity model, so conflicts surface at proposal rather than kickoff.',
    },
    {
      name: 'Realisation by client',
      body: 'Effort at cost against fee after discounts and overruns, which frequently reorders which clients are worth pursuing.',
    },
    {
      name: 'Rate exception control',
      body: 'Discounts recorded as approvals with their realisation impact, rather than negotiated privately per engagement.',
    },
    {
      name: 'Asking the firm questions',
      body: 'Plain-language questions across delivery, scheduling and commerce, with reviews assigned in the same step.',
    },
  ],

  migration:
    'Your accounting, document and collaboration tools continue to run and are mapped during implementation. Clients, active engagements, teams, rates and open pursuits are brought across, and Verity is introduced as the engagement and resourcing layer.',

  faqHeading: 'Questions consultancies ask',
  faqs: [
    [
      'What can AI software do for a consulting firm?',
      'Verity AI answers questions from your own engagement, staffing, effort and billing records: which engagements are past budget without a variation, who is below utilisation while engagements are short-staffed, which deliverables are blocking a billing milestone, what realisation looks like by client. Each answer can become a review or a resourcing decision.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Accounting continues and is mapped during implementation. Verity holds the operational and commercial record — pursuits, engagements, staffing, deliverables, effort, variations, unbilled ageing and realisation.',
    ],
    [
      'How does it help with utilisation?',
      'Committed and actual hours are held per person, so the firm-level figure resolves into distribution. Three people at forty percent while two engagements are short-staffed is a scheduling failure with a different fix from a demand shortfall, and only the distribution shows it.',
    ],
    [
      'Can it show which clients are actually profitable?',
      'Effort at cost is compared against the fee after discounts and overruns, producing realisation by engagement, client and practice — which is a different ranking from revenue and usually a more useful one.',
    ],
    [
      'Does it help with scope variations?',
      'Effort against budget is visible as the engagement runs, so passing a threshold raises a variation decision with the additional effort quantified. Absorbing an overrun becomes an explicit, recorded choice rather than the default.',
    ],
    [
      'Can it prevent resourcing conflicts on new work?',
      'Pursuits carry provisional resourcing against the same capacity model as delivered engagements, so a proposal naming people whose time is already sold surfaces as a conflict before submission rather than at kickoff.',
    ],
    [
      'Does it track deliverables?',
      'Deliverables are records with owners, dates, review steps and the billing milestone they unlock, so a late deliverable is visible alongside the cash it is blocking.',
    ],
    [
      'Is it suitable for a small consultancy?',
      'A ten-person firm has the same substitution, overrun and unbilled problems, and a single overrunning engagement is a larger share of its year.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the firm pursues and delivers, configuration of grades, rates and stages, migration of clients and active engagements, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the engagements past budget.',
  ctaLede:
    'Most firms have several and have raised variations on none of them. Tell us how effort is tracked today and we will show you what visibility changes.',

  related: ['marketing-agencies', 'accounting-firms', 'law-firms', 'it-services-companies', 'recruitment-agencies', 'design-agencies'],
};
