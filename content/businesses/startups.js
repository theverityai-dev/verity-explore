export default {
  slug: 'startups',
  status: 'published',
  plural: 'startups',
  subject: 'startup',

  seo: {
    title: 'AI business management software for startups | Verity',
    description:
      'Verity connects runway and commitments, hiring, board reporting, customer promises and decisions into one operational record as a startup outgrows its founders.',
    keywords: [
      'AI software for startups',
      'startup operations management software',
      'runway commitment and hiring tracking',
      'investor reporting and decision record software',
    ],
  },

  hero: {
    eyebrow: 'Verity for startups',
    headline: 'Everything works because three people remember everything.',
    lede:
      'That stops working somewhere around person fifteen, usually without warning. Verity gives a company its first operating record before the memory model fails.',
    note: 'Deliberately light. A startup should not be running enterprise process.',
    panel: {
      title: 'Company',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Runway', value: '14 months', note: 'at current burn' },
        { label: 'Committed spend', value: '₹1.9 Cr', note: 'not yet in burn' },
        { label: 'Open roles', value: '7', note: '3 past target start date' },
        { label: 'Board commitments', value: '11', note: '4 without an owner' },
      ],
      rows: [
        { name: '4 commitments made to the board with no owner', meta: 'Next meeting in 3 weeks', active: true },
        { name: '₹1.9 Cr committed but not reflected in runway', meta: 'Contracts signed, spend not started', active: true },
        { name: '3 roles past target start date', meta: 'Plan assumes them filled', active: true },
        { name: 'Customer commitments made in sales calls', meta: '9 recorded nowhere but the call', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own company in this shape.',
    },
  },

  overview: {
    heading: 'A startup runs on memory until memory stops scaling.',
    paragraphs: [
      'Early on, a company works because a small number of people hold everything: what was promised to a customer, what was said to an investor, what the plan assumes about hiring, why a decision was taken and what was ruled out. That model is genuinely efficient at five people and genuinely dangerous at twenty-five, and the transition happens without an announcement.',
      'The failure is not dramatic. A commitment made in a sales call is delivered by someone who did not know about it. A board asked for something and nobody owned it. A hire that the plan depended on is two months late and the plan was never revised. A decision is re-litigated because the reasoning behind the original one exists only in the founders’ recollection.',
      'The most consequential version is runway. A startup’s runway is not its burn — it is its burn plus everything committed and not yet spent. Contracts signed, offers accepted, tools committed and vendors engaged all consume runway before they appear in a bank balance. One point nine crore committed and not reflected is a materially shorter runway than the board was told.',
      'The second is hiring. Plans assume roles are filled by a date. Roles slip, and the plan is rarely revised to match, so the company operates against a capacity it does not have.',
      'Verity gives a startup a light operating record — commitments, decisions, hires, promises and runway — before the memory model fails, without imposing process it does not need.',
    ],
  },

  terminology: [
    ['Commitments, decisions, plans', 'Records'],
    ['Hiring, onboarding, roles', 'Work'],
    ['Customers, investors, advisors', 'Relationships'],
    ['Vendors, contracts, tools', 'Suppliers'],
    ['Team, founders, functions', 'People'],
    ['Approvals, spend authority', 'Control'],
    ['Runway, burn, committed spend', 'Intelligence'],
  ],

  challengesHeading: 'The memory model fails quietly.',
  challengesLede:
    'Startup difficulties come from a company outgrowing the small number of people who hold everything.',
  challenges: [
    {
      problem: 'Runway ignores what is committed',
      detail:
        'Burn is measured from spend, and contracts signed, offers accepted and vendors engaged consume runway before any money moves.',
      outcome:
        'Commitments are records against runway, so the number the board hears includes what has already been promised.',
    },
    {
      problem: 'Commitments to customers exist only in the call',
      detail:
        'Something is promised during a sales conversation, delivery finds out later, and the company either absorbs it or disappoints.',
      outcome:
        'Commitments are recorded against the customer at the moment they are made, visible to whoever will deliver.',
    },
    {
      problem: 'Board and investor asks have no owner',
      detail:
        'A board meeting produces eleven things to do and four of them have no name against them by the next meeting.',
      outcome:
        'Every commitment leaving a board or investor conversation is work with an owner and a date.',
    },
    {
      problem: 'Hiring slips and the plan does not move',
      detail:
        'The plan assumes roles are filled by a date, roles run late, and the company operates against capacity it does not have.',
      outcome:
        'Roles are work with target start dates, and slippage raises a plan revision rather than an assumption.',
    },
    {
      problem: 'Decisions are re-litigated',
      detail:
        'A decision was taken for reasons that exist in a conversation, so it is reopened whenever someone new joins.',
      outcome:
        'Decisions are recorded with their reasoning and what was ruled out, so they can be revisited deliberately rather than accidentally.',
    },
    {
      problem: 'Spend authority is undefined',
      detail:
        'Everyone commits money because everyone is trusted, and nobody can say what has been committed in total.',
      outcome:
        'Spend authority is set by role and value, with commitments recorded regardless of who made them.',
    },
  ],

  modulesLede:
    'A deliberately light operating record. Enough structure to survive growth, not enough to slow it down.',
  modules: [
    {
      id: 'records',
      title: 'Commitments, decisions and plans',
      line:
        'Commitments made, decisions taken with their reasoning, and the operating plan are records with owners and dates.',
      why:
        'These are the things a startup holds in memory, and they are the first things to break as it grows.',
      example:
        'A decision recorded with what was ruled out and why, so a new hire can read it rather than reopen it.',
    },
    {
      id: 'work',
      title: 'Hiring, onboarding and initiatives',
      line:
        'Roles, hires, onboarding and cross-functional initiatives are work with owners, target dates and states.',
      why:
        'Hiring is the plan’s main dependency, and initiatives fail when everyone assumes someone else owns them.',
      example:
        'Three roles past target start date, with the plan assumptions that depend on them flagged.',
    },
    {
      id: 'relationships',
      title: 'Customers, investors and advisors',
      line:
        'Each is a record with its history, commitments made and received, communications and next steps.',
      why:
        'A startup’s most important relationships are held personally by founders and do not transfer without records.',
      example:
        'Commitments made to an investor across three conversations, in one place before the next board meeting.',
    },
    {
      id: 'suppliers',
      title: 'Vendors, contracts and tools',
      line:
        'Vendors are relationships with their contracts, commitments, renewal dates and spend.',
      why:
        'Tool and vendor commitments accumulate invisibly and auto-renew into a burn nobody reviewed.',
      example:
        'Contracts signed and not yet spending, included in the runway calculation.',
    },
    {
      id: 'people',
      title: 'Team, founders and functions',
      line:
        'People are modelled once with their function, responsibilities and the commitments they own.',
      why:
        'The transition from everyone doing everything to defined responsibility is exactly where startups struggle.',
      example:
        'Commitments by owner, so it is visible when one person is carrying most of them.',
    },
    {
      id: 'control',
      title: 'Spend authority and approvals',
      line:
        'One permission model and one audit trail, with spend authority set by role and value.',
      why:
        'Trust is not a control, and a company that cannot total its commitments cannot manage its runway.',
      example:
        'Commitments above a threshold recorded with an approver, whoever made them.',
    },
    {
      id: 'intelligence',
      title: 'Runway, hiring and commitment reporting',
      line:
        'Runway including committed spend, hiring against plan, commitments by owner and status, and customer promises come from the operational records.',
      why:
        'The board number and the internal number should be the same number, and they usually are not.',
      example:
        'Runway including one point nine crore committed and not yet spent.',
    },
    {
      id: 'ai',
      title: 'Ask the company a question',
      line:
        'Verity AI answers from your own commitment, hiring, vendor and relationship records, respects permissions, and can create assigned follow-ups.',
      why:
        'Founders are doing several jobs and need an answer rather than a report to prepare.',
      example:
        '"What did we commit to at the last board meeting and who owns each?" returns eleven, four unowned.',
    },
    {
      id: 'workflows',
      title: 'Approvals and the few processes worth having',
      line:
        'A small number of defined steps — spend approval, offer approval, customer commitment — with recorded decisions.',
      why:
        'A startup needs very few processes, and the ones it needs are the ones that consume runway or create obligation.',
      example:
        'A customer commitment beyond the standard offering recorded as a decision rather than absorbed by delivery.',
    },
    {
      id: 'communication',
      title: 'Context that survives a departure',
      line:
        'Notes, decisions and correspondence attach to the customer, investor or initiative they concern.',
      why:
        'When a founder or an early employee leaves, the context leaves with them unless it was written down.',
      example:
        'The reasoning behind a pricing decision, readable by whoever inherits it.',
    },
    {
      id: 'locations',
      title: 'Functions and teams',
      line:
        'Functions roll into the company, with people, work and reporting following the same structure.',
      why:
        'The first organisational structure is worth recording before it is imposed.',
      example:
        'Commitments and initiatives by function as the company starts to have them.',
    },
  ],

  workflowsHeading: 'The handful of things worth recording.',
  workflowsLede:
    'Not process for its own sake. These are the ones that fail expensively when memory stops scaling.',
  workflows: [
    {
      name: 'Commitment capture',
      steps: [
        'Commitment made to a customer, investor or the board',
        'Recorded against the relationship with what was promised',
        'Owner assigned and a date set',
        'Delivery tracked and completion recorded',
        'Outstanding commitments reviewed before the next conversation',
      ],
      note:
        'This single habit prevents most of the failures that come from a company outgrowing its memory.',
    },
    {
      name: 'Runway with commitments',
      steps: [
        'Spend recorded as it occurs',
        'Signed contracts and accepted offers recorded as committed',
        'Runway calculated on burn plus committed',
        'Variances against plan reviewed',
        'Board reporting drawn from the same number',
      ],
      note:
        'The board number and the internal number being the same number is worth more than either being precise.',
    },
    {
      name: 'Hiring against plan',
      steps: [
        'Role opened with target start date and the plan assumption it supports',
        'Pipeline and offers tracked',
        'Slippage flagged against the dependent assumption',
        'Plan revised or the assumption re-examined',
        'Onboarding tracked to productive contribution',
      ],
      note:
        'A late hire that does not revise the plan means the company is operating against capacity it does not have.',
    },
    {
      name: 'Decision record',
      steps: [
        'Decision taken with the options considered',
        'Reasoning and what was ruled out recorded',
        'Owner and review point set where relevant',
        'Decision referenced when the question returns',
        'Deliberate revisit rather than accidental re-litigation',
      ],
      note:
        'The cheapest thing a growing company can do is write down why, not just what.',
    },
    {
      name: 'Vendor and tool commitment',
      steps: [
        'Contract recorded with value, term and renewal date',
        'Committed spend added to the runway calculation',
        'Renewal reviewed ahead of the date',
        'Cancellation or renegotiation decided deliberately',
        'Outcome recorded against the vendor',
      ],
      note:
        'Auto-renewals are the quietest way a startup’s burn grows.',
    },
    {
      name: 'Board preparation',
      steps: [
        'Commitments from the last meeting reviewed with owners',
        'Runway and hiring position drawn from records',
        'Outstanding items and their reasons assembled',
        'New commitments recorded as they are made',
        'Owners assigned before the meeting ends',
      ],
      note:
        'Assigning owners before the meeting ends is the difference between a board pack and a set of intentions.',
    },
  ],

  ai: {
    heading: 'Ask the company what it has promised.',
    lede:
      'Verity AI answers from your own commitment, hiring, vendor and relationship records. It answers from your own company, respects permissions, and can turn an answer into owned work.',
    panelMeta: 'Grounded in your company records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What did we commit to at the last board meeting, and who owns each item?',
      'What is runway including committed but unspent contracts?',
      'Which roles are past their target start date, and what assumes them filled?',
      'What have we promised customers beyond the standard offering?',
      'Which vendor contracts renew in the next quarter?',
      'Which commitments are overdue and unowned?',
      'What decisions have we recorded on this question before?',
      'Who is carrying the most open commitments?',
      'Summarise commitments, runway and hiring against plan.',
    ],
  },

  automationHeading: 'A very small number of automations.',
  automationLede:
    'A startup needs few of these. These are the ones that pay for themselves immediately.',
  automations: [
    {
      trigger: 'A commitment is recorded',
      steps: [
        'Owner assigned and a date set',
        'Reminder raised before the date',
        'Escalated if it passes without completion',
      ],
    },
    {
      trigger: 'A contract or offer is signed',
      steps: [
        'Committed spend recorded against runway',
        'Renewal or start date set',
        'Runway recalculated on burn plus committed',
      ],
    },
    {
      trigger: 'A role passes its target start date',
      steps: [
        'Dependent plan assumptions flagged',
        'Plan revision task raised',
        'Decision recorded against the plan',
      ],
    },
    {
      trigger: 'A vendor contract approaches renewal',
      steps: [
        'Contract flagged with value and term',
        'Review assigned before auto-renewal',
        'Decision recorded against the vendor',
      ],
    },
    {
      trigger: 'A customer commitment beyond the standard offering is made',
      steps: [
        'Commitment recorded against the customer',
        'Delivery owner notified',
        'Cost or scope decision raised',
      ],
    },
    {
      trigger: 'A board meeting concludes',
      steps: [
        'Commitments captured with owners and dates',
        'Unowned items flagged before the meeting closes',
        'Review scheduled ahead of the next meeting',
      ],
    },
  ],

  intelligenceHeading: 'What the founders can actually see.',
  intelligenceLede:
    'A small number of numbers that should never be uncertain.',
  intelligence: [
    {
      area: 'Runway',
      points: [
        'Burn against plan',
        'Committed but unspent contracts and offers',
        'Runway including commitments',
        'Variance against the board’s number',
      ],
    },
    {
      area: 'Commitments',
      points: [
        'Open commitments by owner and counterpart',
        'Overdue and unowned items',
        'Commitments made to customers beyond standard',
        'Board and investor asks and their status',
      ],
    },
    {
      area: 'Hiring',
      points: [
        'Roles open against target start dates',
        'Slippage and the plan assumptions affected',
        'Onboarding to productive contribution',
        'Team growth against plan',
      ],
    },
    {
      area: 'Vendors',
      points: [
        'Contracts, values and renewal dates',
        'Committed spend by vendor',
        'Renewals reviewed against auto-renewed',
        'Tool and vendor cost growth',
      ],
    },
    {
      area: 'Decisions',
      points: [
        'Decisions recorded with reasoning',
        'Options ruled out and why',
        'Review points reached',
        'Questions reopened and their outcomes',
      ],
    },
  ],
  intelligenceNote:
    'This is deliberately a short list. A startup benefits from a few reliable numbers rather than from comprehensive reporting.',

  rolesHeading: 'A small team, three views.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Founder',
      question: 'What have we promised and how long do we have?',
      focus: 'Runway including commitments, board and investor asks, hiring against plan, decisions taken.',
    },
    {
      role: 'Operations or chief of staff',
      question: 'What is unowned or overdue?',
      focus: 'Commitments without owners, overdue items, vendor renewals, hiring slippage.',
    },
    {
      role: 'Team lead',
      question: 'What did we agree and who is doing it?',
      focus: 'Commitments in their area, initiatives and owners, decisions recorded, dependencies on hiring.',
    },
  ],

  useCasesHeading: 'What startups use Verity for',
  useCases: [
    {
      name: 'Runway including commitments',
      body: 'Signed contracts and accepted offers counted against runway before the money moves, so the internal number and the board number match.',
    },
    {
      name: 'Commitment capture',
      body: 'What was promised to customers, investors and the board recorded with an owner at the moment it is made.',
    },
    {
      name: 'Board follow-through',
      body: 'Every ask leaving a board conversation as work with a name and a date, rather than eleven intentions and four orphans.',
    },
    {
      name: 'Hiring against plan assumptions',
      body: 'Roles with target start dates linked to the plan assumptions that depend on them, so slippage revises the plan.',
    },
    {
      name: 'Decision records',
      body: 'Decisions written down with their reasoning and what was ruled out, so they are revisited deliberately rather than re-litigated.',
    },
    {
      name: 'Vendor renewal control',
      body: 'Contracts with renewal dates reviewed before they auto-renew, which is the quietest way a startup’s burn grows.',
    },
    {
      name: 'Context that survives departures',
      body: 'Relationship and decision history recorded, so an early employee leaving does not take the company’s memory with them.',
    },
    {
      name: 'Asking the company questions',
      body: 'Plain-language questions across commitments, runway, hiring and vendors, with owners assigned in the same step.',
    },
  ],

  migration:
    'Whatever you use today — a spreadsheet, a document, a chat channel — is mapped during implementation. Commitments, contracts, open roles and key relationships are brought across, and Verity is deliberately configured light: enough record to survive growth, not enough process to slow it down.',

  faqHeading: 'Questions founders ask',
  faqs: [
    [
      'Is this not too much process for a startup?',
      'It is deliberately configured light. A startup needs very few processes, and the ones worth having are the ones that consume runway or create obligation: commitments, spend, hiring against plan and decisions. Everything else can stay informal until it needs not to be.',
    ],
    [
      'What can AI software do for a startup?',
      'Verity AI answers questions from your own commitment, hiring, vendor and relationship records: what was committed at the last board meeting and who owns each item, what runway looks like including unspent contracts, which roles are past target start date and what depends on them. Each answer can become owned work.',
    ],
    [
      'Why include commitments in runway?',
      'A startup’s runway is its burn plus everything already promised — contracts signed, offers accepted, vendors engaged — because those consume runway before any money moves. A company reporting burn alone is reporting a longer runway than it has.',
    ],
    [
      'How does it help with board follow-through?',
      'Commitments made in a board or investor conversation are captured with an owner and a date before the meeting closes, so the next meeting starts from a status rather than from a reconstruction.',
    ],
    [
      'Why record decisions?',
      'Because the reasoning is what disappears. A decision without its reasoning gets reopened every time someone new joins, and the company spends its scarcest resource re-arguing something it already settled.',
    ],
    [
      'When is the right time to start?',
      'Before the memory model fails, which is usually somewhere between fifteen and twenty-five people and happens without warning. Retrofitting a record after the fact is much harder than keeping one.',
    ],
    [
      'Does it replace our existing tools?',
      'No. Whatever you use for product, code, accounting and communication continues and is mapped during implementation. Verity holds the commitments, decisions, hiring, vendors and runway that currently live in founders’ heads.',
    ],
    [
      'What happens when an early employee leaves?',
      'Relationship history, commitments and decision reasoning are company records rather than personal knowledge, so a departure is a handover rather than a loss of context.',
    ],
    [
      'How long does implementation take?',
      'About four weeks, and deliberately lighter than for a larger business: discovery of what actually needs recording, minimal configuration, migration of commitments and contracts, then an ongoing operations partnership as the company grows.',
    ],
  ],

  ctaHeading: 'Start before the memory model fails.',
  ctaLede:
    'It is much cheaper to keep a record than to reconstruct one. Tell us where your company is and we will show you the light version.',

  related: ['saas-companies', 'software-agencies', 'it-services-companies', 'consulting-firms', 'ecommerce-businesses', 'marketing-agencies'],
};
