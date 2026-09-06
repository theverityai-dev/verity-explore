export default {
  slug: 'saas-companies',
  status: 'published',
  plural: 'SaaS companies',
  subject: 'SaaS business',

  seo: {
    title: 'AI business management software for SaaS companies | Verity',
    description:
      'Verity connects onboarding, support load against plan, renewal risk, expansion, contract terms and collections into one operational system for SaaS businesses.',
    keywords: [
      'AI software for SaaS companies',
      'SaaS operations management software',
      'customer onboarding and renewal risk tracking',
      'support load and account profitability software',
    ],
  },

  hero: {
    eyebrow: 'Verity for SaaS',
    headline: 'You instrument the product beautifully and run the company on four disconnected tools.',
    lede:
      'Onboarding, support load, renewal risk, contract terms and collections all live apart. Verity puts the customer’s whole commercial and operational history on one record.',
    note: 'Verity runs the company around the product. Your product analytics stay where they are.',
    panel: {
      title: 'Accounts',
      meta: 'All customers · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active accounts', value: '186', note: '₹14.2 Cr ARR' },
        { label: 'Renewals in 90 days', value: '38', note: '9 flagged at risk' },
        { label: 'Onboarding overdue', value: '11', note: 'past target go-live' },
        { label: 'Support above plan', value: '14 accounts', note: 'cost exceeds fee' },
      ],
      rows: [
        { name: '9 renewals at risk inside 90 days', meta: 'Low onboarding completion and high ticket volume', active: true },
        { name: '11 accounts past their target go-live date', meta: 'Strongest predictor of first-year churn', active: true },
        { name: '14 accounts where support cost exceeds their fee', meta: 'Concentrated in one plan tier', active: true },
        { name: 'Expansion opportunities unworked', meta: '23 accounts at usage limits', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own accounts in this shape.',
    },
  },

  overview: {
    heading: 'The product is measured continuously. The business around it is not.',
    paragraphs: [
      'A SaaS company knows more about its product than almost any other kind of business knows about anything. Events, funnels, cohorts and feature adoption are instrumented carefully. What is usually not instrumented is the company: how long onboarding actually takes, which accounts consume support far beyond their fee, which renewals are at risk and why, and what was actually promised in the contract that sales closed.',
      'Onboarding is the clearest example. Time to first value is the strongest predictor of first-year retention, and it is delivered as a project by a team using a checklist in a document. Eleven accounts past their target go-live is eleven renewals already compromised, and the renewal conversation is eleven months away.',
      'Support load is the second. Every SaaS business has accounts that consume several times the support their plan assumes, and the cost is absorbed into a general support budget rather than attributed to the account. Fourteen accounts costing more to serve than they pay is a pricing decision that cannot be made without the number.',
      'The third is that renewal risk is knowable from operational signals — onboarding completion, support volume and sentiment, sponsor changes, unworked expansion — and those signals live in four different tools.',
      'The fourth is that contract terms and what sales actually promised diverge, and the difference surfaces during a renewal negotiation.',
      'Verity holds the account, its contract, its onboarding, its support history and its renewal position on one record.',
    ],
  },

  terminology: [
    ['Accounts, subscriptions, plans', 'Records'],
    ['Onboarding, implementation, training', 'Work'],
    ['Customers, sponsors, users', 'Relationships'],
    ['Support tickets, escalations, requests', 'Workflows'],
    ['Customer success, support, implementation', 'People'],
    ['Renewals, expansion, churn', 'Intelligence'],
    ['Regions, segments, tiers', 'Locations'],
  ],

  challengesHeading: 'Operational signals that predict revenue, sitting in separate tools.',
  challengesLede:
    'SaaS difficulties come from company operations being far less instrumented than the product.',
  challenges: [
    {
      problem: 'Onboarding runs long and nobody owns the date',
      detail:
        'Implementation is delivered from a checklist, target go-live dates slip, and the connection to first-year churn is understood in principle and not tracked in practice.',
      outcome:
        'Onboarding is work with milestones, owners and a target date, so overdue accounts surface while intervention is possible.',
    },
    {
      problem: 'Support cost is not attributed to accounts',
      detail:
        'Ticket volume is measured in aggregate, so accounts consuming several times their plan’s assumption are invisible.',
      outcome:
        'Support effort is recorded against the account, so cost to serve against fee is a number per account.',
    },
    {
      problem: 'Renewal risk is assessed at renewal',
      detail:
        'The signals that predict churn exist months earlier, in onboarding completion, support volume and sponsor changes, and are reviewed at the renewal date.',
      outcome:
        'Risk indicators aggregate on the account continuously, so renewals are worked by risk rather than by date.',
    },
    {
      problem: 'Expansion opportunities go unworked',
      detail:
        'Accounts at usage limits or with adjacent needs are identified by product data and never turned into assigned work.',
      outcome:
        'Expansion signals become tasks assigned to an owner with the account history attached.',
    },
    {
      problem: 'What sales promised is not what the contract says',
      detail:
        'Commitments made during a sales process are honoured by delivery and never recorded, and they resurface at renewal.',
      outcome:
        'Contract terms and any commitments made are recorded on the account and visible to whoever delivers.',
    },
    {
      problem: 'Collections are chased inconsistently',
      detail:
        'Subscription invoices go unpaid while service continues, and follow-up depends on who notices.',
      outcome:
        'Balances age on the account with contact history and a consistent policy applied.',
    },
  ],

  modulesLede:
    'One system for the company around the product.',
  modules: [
    {
      id: 'records',
      title: 'Accounts, subscriptions and contract terms',
      line:
        'Each account is a record with its plan, contract terms, commitments made, renewal date, value and history.',
      why:
        'The contract and the commitments around it are the only definition of what the company owes the customer.',
      example:
        'A commitment made during the sales process, recorded and visible to the implementation team.',
    },
    {
      id: 'work',
      title: 'Onboarding, implementation and training',
      line:
        'Onboarding is work with milestones, owners, a target go-live date, dependencies and a state.',
      why:
        'Time to first value is the strongest retention lever a SaaS business has, and it is usually run from a document.',
      example:
        'Eleven accounts past target go-live, each showing the milestone it is stuck at and who owns it.',
    },
    {
      id: 'workflows',
      title: 'Support tickets, escalations and requests',
      line:
        'Support is workflow with priority, effort, owner and resolution, recorded against the account.',
      why:
        'Support effort per account is the missing half of account profitability.',
      example:
        'Fourteen accounts where recorded support effort costs more than the account pays.',
    },
    {
      id: 'relationships',
      title: 'Customers, sponsors and users',
      line:
        'Accounts carry their sponsors, contacts, sentiment, escalation history and communications.',
      why:
        'A sponsor leaving is one of the strongest churn predictors and is usually noticed at renewal.',
      example:
        'A sponsor change recorded against the account, raising a relationship task immediately.',
    },
    {
      id: 'people',
      title: 'Customer success, support and implementation',
      line:
        'The team is modelled once, and every onboarding milestone, ticket and renewal carries who owns it.',
      why:
        'Retention outcomes vary by the person delivering onboarding and by support responsiveness.',
      example:
        'Retention among accounts onboarded by each implementation owner.',
    },
    {
      id: 'intelligence',
      title: 'Retention, cost-to-serve and renewal reporting',
      line:
        'Onboarding time to value, support cost per account, renewal risk, expansion signals, churn reasons and collections come from the operational records.',
      why:
        'Product analytics tell you what users do. This tells you what the company earns and spends serving them.',
      example:
        'Cost to serve against fee by plan tier, which frequently changes pricing.',
    },
    {
      id: 'ai',
      title: 'Ask the account base a question',
      line:
        'Verity AI answers from your own account, onboarding, support and renewal records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking cross onboarding, support and commerce, which is exactly what separate tools prevent.',
      example:
        '"Which renewals inside ninety days are at risk and why?" returns nine with the signals named.',
    },
    {
      id: 'communication',
      title: 'Account history in one place',
      line:
        'Escalations, commitments, updates and reviews attach to the account they concern.',
      why:
        'A renewal negotiation is conducted against a year of history that currently lives in several inboxes.',
      example:
        'Every escalation and its resolution, visible before the renewal conversation.',
    },
    {
      id: 'control',
      title: 'Discounts, terms and access',
      line:
        'One permission model and one audit trail, with discounts, term exceptions and credits recorded.',
      why:
        'Discounting to close and crediting to retain both erode realised revenue quietly.',
      example:
        'A retention credit recorded as an approval with the account’s support history attached.',
    },
    {
      id: 'locations',
      title: 'Regions, segments and tiers',
      line:
        'Segments and regions roll into the business, with accounts and reporting following the same structure.',
      why:
        'Cost to serve and retention vary sharply by segment, and only identical recording makes them comparable.',
      example:
        'Retention and cost to serve by plan tier and segment.',
    },
  ],

  workflowsHeading: 'The customer lifecycle as records.',
  workflowsLede:
    'These already happen across several tools. On one record they become a lifecycle.',
  workflows: [
    {
      name: 'Close to onboarding',
      steps: [
        'Account created with plan, contract terms and commitments made',
        'Onboarding project opened with milestones and a target go-live',
        'Owner assigned and dependencies on the customer identified',
        'Progress tracked against the target date',
        'Go-live recorded and time to value measured',
      ],
      note:
        'Recording what sales committed is what stops delivery discovering it at the first review.',
    },
    {
      name: 'Support and cost to serve',
      steps: [
        'Tickets recorded against the account with effort',
        'Escalations raised and resolved with causes recorded',
        'Effort aggregated as cost to serve',
        'Accounts above their plan assumption flagged',
        'Pricing or scope conversation raised at renewal',
      ],
      note:
        'Support effort per account is the number that turns account profitability from a guess into a decision.',
    },
    {
      name: 'Renewal risk',
      steps: [
        'Risk signals aggregated — onboarding completion, support volume, sentiment, sponsor change',
        'Accounts scored ahead of their renewal date',
        'Intervention assigned by risk rather than by date',
        'Outcome recorded with the reason either way',
        'Churn reasons aggregated for the product and go-to-market teams',
      ],
      note:
        'Working renewals by risk rather than by date order is what makes the same effort retain more revenue.',
    },
    {
      name: 'Expansion',
      steps: [
        'Usage or need signal identified against the account',
        'Opportunity created with an owner',
        'Account history and support position attached',
        'Conversation held and outcome recorded',
        'Contract updated where expansion closes',
      ],
      note:
        'An expansion signal that does not become assigned work is a report nobody acts on.',
    },
    {
      name: 'Sponsor change',
      steps: [
        'Sponsor change recorded against the account',
        'Relationship task raised immediately',
        'New sponsor briefed with the account history',
        'Risk position updated',
        'Outcome recorded ahead of renewal',
      ],
      note:
        'A sponsor leaving is one of the strongest churn predictors and is usually discovered too late.',
    },
    {
      name: 'Collections',
      steps: [
        'Subscription invoices raised on the contract schedule',
        'Balances aged from the due date',
        'Follow-up assigned with account history attached',
        'Policy applied consistently at thresholds',
        'Payment recorded and the position updated',
      ],
      note:
        'Consistent policy is easier to apply and easier to defend than case-by-case decisions.',
    },
  ],

  ai: {
    heading: 'Ask what the product data cannot tell you.',
    lede:
      'Verity AI reads the same account, onboarding, support and renewal records the company creates as it operates. It answers from your own business, respects permissions, and can turn an answer into assigned work.',
    panelMeta: 'Grounded in your account records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which renewals inside ninety days are at risk, and on what signals?',
      'Which accounts are past their target go-live date?',
      'Which accounts cost more to serve than they pay?',
      'Where have sponsors changed without a relationship task raised?',
      'Which expansion signals are unworked?',
      'What is time to first value by segment and implementation owner?',
      'What reasons were recorded for churn this year?',
      'Which balances are outstanding while service continues?',
      'Summarise renewal risk and cost to serve.',
    ],
  },

  automationHeading: 'The signals that predict revenue.',
  automationLede:
    'Each runs from the account records at the point the condition is met.',
  automations: [
    {
      trigger: 'An onboarding milestone passes its date',
      steps: [
        'Account flagged with the milestone and dependency',
        'Owner notified with the target go-live attached',
        'Escalated as the go-live date approaches',
      ],
    },
    {
      trigger: 'Support effort on an account exceeds its plan assumption',
      steps: [
        'Cost to serve calculated against the fee',
        'Account flagged for review ahead of renewal',
        'Pricing or scope decision recorded',
      ],
    },
    {
      trigger: 'A renewal approaches',
      steps: [
        'Risk signals aggregated on the account',
        'Priority set by risk rather than date',
        'Intervention assigned with the account history attached',
      ],
    },
    {
      trigger: 'A sponsor change is recorded',
      steps: [
        'Relationship task raised immediately',
        'Account history prepared for the new sponsor',
        'Risk position updated ahead of renewal',
      ],
    },
    {
      trigger: 'An expansion signal is identified',
      steps: [
        'Opportunity created with an owner',
        'Account support and onboarding history attached',
        'Outcome recorded against the account',
      ],
    },
    {
      trigger: 'A subscription balance passes its terms',
      steps: [
        'Balance aged with account history attached',
        'Follow-up assigned',
        'Policy applied consistently at the threshold',
      ],
    },
  ],

  intelligenceHeading: 'What the leadership team can actually see.',
  intelligenceLede:
    'The company’s own operations, instrumented like the product already is.',
  intelligence: [
    {
      area: 'Onboarding',
      points: [
        'Time to first value by segment and owner',
        'Accounts past target go-live',
        'Milestone completion and blockers',
        'Correlation between onboarding and first-year retention',
      ],
    },
    {
      area: 'Cost to serve',
      points: [
        'Support effort per account and per plan tier',
        'Accounts costing more than they pay',
        'Escalation volume and causes',
        'Cost to serve by segment',
      ],
    },
    {
      area: 'Retention',
      points: [
        'Renewal risk by account with signals',
        'Renewal and churn rates by cohort',
        'Churn reasons recorded',
        'Sponsor changes and their outcomes',
      ],
    },
    {
      area: 'Growth',
      points: [
        'Expansion signals and their conversion',
        'Contract value movement by account',
        'Commitments made during sales',
        'Discounting and its effect on realised revenue',
      ],
    },
    {
      area: 'Cash',
      points: [
        'Invoices raised against contract schedules',
        'Balances outstanding with ageing',
        'Credits issued and their reasons',
        'Collection outcomes by account',
      ],
    },
  ],
  intelligenceNote:
    'Verity records the company’s operations. Product analytics, usage instrumentation and the application itself stay where they are.',

  rolesHeading: 'One account base, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Founder or CEO',
      question: 'Which revenue is at risk and which accounts cost too much?',
      focus: 'Renewal risk, cost to serve by tier, churn reasons, expansion conversion, realised revenue after discounts.',
    },
    {
      role: 'Customer success lead',
      question: 'Who needs intervention now?',
      focus: 'Risk signals by account, onboarding overdue, sponsor changes, escalations open.',
    },
    {
      role: 'Implementation',
      question: 'Which onboardings are behind?',
      focus: 'Milestones by account, customer dependencies, target go-live dates, blockers.',
    },
    {
      role: 'Support lead',
      question: 'Where is the load coming from?',
      focus: 'Ticket volume and effort by account, escalation causes, accounts above plan assumption.',
    },
    {
      role: 'Finance',
      question: 'What is billed and what is collected?',
      focus: 'Contract schedules, balances ageing, credits issued, realised revenue against contracted.',
    },
  ],

  useCasesHeading: 'What SaaS companies use Verity for',
  useCases: [
    {
      name: 'Onboarding as tracked work',
      body: 'Implementation with milestones, owners and target go-live dates, since time to first value is the strongest retention lever and is usually run from a document.',
    },
    {
      name: 'Cost to serve per account',
      body: 'Support effort recorded against the account, producing the missing half of account profitability and the basis for tier pricing.',
    },
    {
      name: 'Risk-based renewal management',
      body: 'Churn signals aggregating on the account continuously, so renewals are worked by risk rather than by date order.',
    },
    {
      name: 'Sponsor change response',
      body: 'A sponsor departure raising an immediate relationship task rather than being discovered during the renewal.',
    },
    {
      name: 'Expansion as assigned work',
      body: 'Usage and need signals becoming owned opportunities with account history attached rather than a report nobody acts on.',
    },
    {
      name: 'Sales commitments on the record',
      body: 'What was promised during the sales process recorded on the account, so delivery does not discover it at the first review.',
    },
    {
      name: 'Consistent collections',
      body: 'Subscription balances aged with a policy applied consistently rather than case by case while service continues.',
    },
    {
      name: 'Asking about the account base',
      body: 'Plain-language questions across onboarding, support, renewal and cash, with interventions assigned in the same step.',
    },
  ],

  migration:
    'Your product analytics, application, billing and support tooling continue to run and are mapped during implementation. Accounts, contracts, renewal dates, onboarding projects and open balances are brought across, and Verity is introduced as the operational layer around the product.',

  faqHeading: 'Questions SaaS teams ask',
  faqs: [
    [
      'Does Verity replace our product analytics or support tooling?',
      'No. Product analytics, your application and your support desk continue and are mapped during implementation. Verity records the company around the product — accounts, contracts, onboarding, cost to serve, renewal risk, expansion and collections.',
    ],
    [
      'What can AI software do for a SaaS company?',
      'Verity AI answers questions from your own account, onboarding, support and renewal records: which renewals inside ninety days are at risk and why, which accounts are past target go-live, which cost more to serve than they pay, where sponsors changed without anyone responding. Each answer can become assigned work.',
    ],
    [
      'Why treat onboarding as a project?',
      'Time to first value is the strongest predictor of first-year retention, and onboarding is usually delivered from a checklist in a document. As work with milestones, owners and a target go-live, an account running late is visible while intervention still changes the outcome — eleven months before the renewal.',
    ],
    [
      'How does it measure cost to serve?',
      'Support effort is recorded against the account rather than only in aggregate, so accounts consuming several times their plan’s assumption are identified with the cost quantified — which is the basis for a pricing or scope conversation at renewal.',
    ],
    [
      'Can it predict renewal risk?',
      'It aggregates the operational signals that already predict churn — onboarding completion, support volume and escalations, sentiment, sponsor changes, unworked expansion — onto the account continuously, so renewals can be prioritised by risk rather than worked in date order.',
    ],
    [
      'Does it capture what sales promised?',
      'Commitments made during the sales process are recorded on the account alongside the contract terms, so the implementation and success teams see them before the customer raises them.',
    ],
    [
      'Can it handle collections?',
      'Subscription balances age from the due date with account history attached and a consistent policy applied at thresholds, rather than follow-up depending on who happens to notice.',
    ],
    [
      'Is it useful for an early-stage company?',
      'A twenty-account company has the same onboarding, support-load and renewal-signal problems and less capacity to run four separate tools around them.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the customer lifecycle, configuration of plans and onboarding milestones, migration of accounts, contracts and renewal dates, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with onboarding or cost to serve.',
  ctaLede:
    'One decides next year’s retention and the other decides whether your pricing works. Tell us which you can measure today.',

  related: ['software-agencies', 'startups', 'it-services-companies', 'ecommerce-businesses', 'data-companies', 'consulting-firms'],
};
