export default {
  slug: 'ai-companies',
  status: 'published',
  plural: 'AI companies',
  subject: 'AI company',

  seo: {
    title: 'AI business management software for AI companies | Verity',
    description:
      'Verity gives AI companies one system for inference cost per account, model versions in production, evaluation runs, annotation work and pilot decisions.',
    keywords: [
      'AI software for AI companies',
      'AI company operations management software',
      'inference cost per customer tracking',
      'model evaluation and deployment management',
    ],
  },

  hero: {
    eyebrow: 'Verity for AI companies',
    headline: 'Three accounts cost more to serve than they pay, and nobody can name them.',
    lede:
      'AI businesses have a variable cost per request and a fixed price per seat. Verity attributes cost to accounts and tracks what is actually running in production.',
    note: 'Verity runs the company. Training infrastructure and model tooling stay where they are.',
    panel: {
      title: 'Company',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Production accounts', value: '64', note: '9 in pilot' },
        { label: 'Gross margin', value: '48%', note: 'inference and serving cost' },
        { label: 'Accounts below cost', value: '3', note: 'usage above plan assumptions' },
        { label: 'Pilots past their window', value: '5', note: 'no deployment decision' },
      ],
      rows: [
        { name: '3 accounts costing more to serve than they pay', meta: 'Heavy usage on flat pricing', active: true },
        { name: '5 pilots past their evaluation window', meta: 'No decision recorded either way', active: true },
        { name: '2 model versions live that nobody chose', meta: 'Deployed for a test, never reverted', active: true },
        { name: 'Annotation backlog affecting 3 evaluations', meta: 'Labelling capacity the constraint', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own company in this shape.',
    },
  },

  overview: {
    heading: 'A variable cost to serve, a fixed price to charge, and models that change under you.',
    paragraphs: [
      'An AI company has a cost structure most software businesses do not: every request costs money. When pricing is per seat or per month and cost is per token, per image or per hour of compute, three accounts costing more to serve than they pay is not unusual — it is the default outcome unless cost is attributed per account.',
      'The second characteristic is that what is running in production drifts. Two model versions live that nobody deliberately chose, deployed for a test and never reverted, is a common and consequential state, because behaviour customers depend on has changed without a decision.',
      'The third is evaluation. Model changes need evidence before deployment, and evaluation depends on annotated data, which depends on labelling capacity. An annotation backlog is a deployment blocker one step removed.',
      'The fourth is the pilot-to-production gap. Five pilots past their evaluation window with no recorded decision is the most expensive state in the business — engineering attention and serving cost with no commercial outcome either way.',
      'The fifth is that customers ask what changed. A behaviour difference needs an answer that connects the account, the version it was served and when the change happened.',
      'Verity attributes serving cost to accounts, records what is deployed and why, and tracks evaluations, annotation work and pilot decisions.',
    ],
  },

  terminology: [
    ['Models, versions, deployments', 'Work'],
    ['Evaluations, benchmarks, results', 'Records'],
    ['Annotation, labelling, review', 'Workflows'],
    ['Accounts, pilots, deployments', 'Relationships'],
    ['Inference, compute, serving cost', 'Control'],
    ['Researchers, engineers, annotators', 'People'],
    ['Plans, usage, pricing', 'Orders'],
  ],

  challengesHeading: 'Cost per request against price per seat.',
  challengesLede:
    'AI company difficulties come from variable delivery cost and changing model behaviour.',
  challenges: [
    { problem: 'Serving cost is not attributed to accounts', detail: 'Compute and inference spend is a single line and unit economics are unknown.', outcome: 'Cost is attributed per account and per feature against the price they pay.' },
    { problem: 'Production model versions drift', detail: 'Deployments made for tests remain live and nobody chose them.', outcome: 'Deployed versions carry the decision, evaluation and date behind them.' },
    { problem: 'Evaluations wait on annotation', detail: 'A model change cannot be evidenced because labelled data is not ready.', outcome: 'Annotation work is tracked as capacity against the evaluations depending on it.' },
    { problem: 'Pilots have no decision point', detail: 'An evaluation window passes and the pilot continues without a commercial outcome.', outcome: 'Pilots carry a decision date, criteria and an owner.' },
    { problem: 'Behaviour change questions cannot be answered', detail: 'A customer reports different results and nobody can say what changed.', outcome: 'Accounts, versions served and change dates are linked.' },
    { problem: 'Heavy users are not identified early', detail: 'Usage grows past plan assumptions and margin erodes silently.', outcome: 'Usage against plan assumptions is monitored per account.' },
  ],

  modulesLede: 'One system across cost, deployments, evaluations and accounts.',
  modules: [
    { id: 'control', title: 'Inference, compute and serving cost', line: 'One permission model and one audit trail, with serving cost attributed per account, feature and model version against the revenue each produces.', why: 'Variable cost against fixed price is the defining economic risk of the business.', example: 'Three accounts costing more to serve than they pay.' },
    { id: 'work', title: 'Models, versions and deployments', line: 'Each deployment carries its model version, the accounts it serves, the evaluation behind it, the person who approved it and the date.', why: 'What is running should be a decision with evidence attached.', example: 'Two live versions nobody deliberately chose.' },
    { id: 'records', title: 'Evaluations, benchmarks and results', line: 'Evaluation runs carry datasets, metrics, comparison against the incumbent and the decision they supported.', why: 'A deployment without an evaluation is a change without evidence.', example: 'Evaluation results linked to the deployment they justified.' },
    { id: 'workflows', title: 'Annotation, labelling and review', line: 'Annotation work carries datasets, annotators, throughput, quality checks and the evaluations waiting on it.', why: 'Labelling capacity is an upstream constraint on shipping model changes.', example: 'Annotation backlog blocking three evaluations.' },
    { id: 'relationships', title: 'Accounts, pilots and deployments', line: 'Accounts carry their plan, usage, serving cost, model versions, pilot state and decision dates.', why: 'A pilot without a decision date does not end.', example: 'Five pilots past their evaluation window.' },
    { id: 'orders', title: 'Plans, usage and pricing', line: 'Plans carry their usage assumptions, actual consumption and margin per account.', why: 'Pricing assumptions have to be compared with real usage.', example: 'Usage against plan assumptions by account.' },
    { id: 'people', title: 'Researchers, engineers and annotators', line: 'Staff carry assignments, evaluation ownership, deployment approvals and annotation throughput.', why: 'Deployment approval is a named responsibility.', example: 'Deployments by approver with evaluation attached.' },
    { id: 'intelligence', title: 'Margin, deployment and evaluation reporting', line: 'Cost per account and feature, gross margin, deployment history, evaluation outcomes and pilot conversion come from the records.', why: 'Unit economics and model governance are both measurable.', example: 'Gross margin by account and by feature.' },
    { id: 'ai', title: 'Ask the company a question', line: 'Verity AI answers from your own account, cost, deployment and evaluation records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about which accounts lose money and what is deployed.', example: '"Which accounts cost more than they pay?" returns three with usage patterns.' },
    { id: 'communication', title: 'Customer contact and change notices', line: 'Pilot reviews, change notifications and usage conversations attach to the account.', why: 'A behaviour change customers notice needs to be a notification, not a discovery.', example: 'Change notice recorded against the accounts affected.' },
    { id: 'schedule', title: 'Evaluation and deployment planning', line: 'Evaluations, annotation capacity and deployment windows are planned together.', why: 'A deployment date is only real if the evaluation and its data are ready.', example: 'Deployment windows planned against annotation capacity.' },
    { id: 'suppliers', title: 'Compute providers and data vendors', line: 'Providers carry cost, commitments, capacity and reliability.', why: 'Compute commitments are a large fixed obligation against variable demand.', example: 'Committed compute against actual consumption.' },
  ],

  workflowsHeading: 'Evaluate, deploy, serve, measure, decide.',
  workflowsLede: 'These already happen. Recorded, unit economics and model governance both become visible.',
  workflows: [
    { name: 'Evaluation and deployment', steps: ['Change proposed with an evaluation plan', 'Annotated data confirmed available', 'Evaluation run against the incumbent', 'Deployment approved by a named person with results attached', 'Deployment recorded with accounts affected'], note: 'Attaching the evaluation to the deployment is what makes the change reversible with reason.' },
    { name: 'Cost attribution', steps: ['Serving cost captured per request class', 'Attributed to account and feature', 'Compared with the revenue from that account', 'Accounts below cost surfaced', 'Pricing or usage conversation raised'], note: 'Attribution per account is the only way flat pricing survives variable cost.' },
    { name: 'Annotation pipeline', steps: ['Dataset requirement defined by the evaluation', 'Annotation assigned with quality criteria', 'Throughput and quality tracked', 'Dataset released for evaluation', 'Evaluations unblocked'], note: 'Labelling is a capacity constraint on shipping, not a background task.' },
    { name: 'Pilot to decision', steps: ['Pilot opened with criteria and a decision date', 'Usage and cost tracked during the pilot', 'Results assessed against the criteria', 'Decision recorded either way', 'Conversion or closure completed'], note: 'A recorded decision to stop is worth more than an indefinite pilot.' },
    { name: 'Change communication', steps: ['Deployment identified as behaviour-affecting', 'Accounts served by the change listed', 'Notification issued', 'Customer responses recorded', 'Rollback decision made if required'], note: 'Knowing which accounts were served which version is what makes the answer possible.' },
  ],

  ai: {
    heading: 'Ask about margin and deployments.',
    lede: 'Verity AI reads the same account, cost, deployment and evaluation records the company creates as it operates. It answers from your own company, respects permissions, and can turn an answer into a pricing conversation or a deployment review.',
    panelMeta: 'Grounded in your company records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which accounts cost more to serve than they pay?',
      'What is gross margin by account and by feature?',
      'Which model versions are live and what evaluation justified them?',
      'Which pilots are past their decision date?',
      'Which evaluations are blocked on annotation?',
      'Which accounts have usage far above their plan assumptions?',
      'Which accounts were served the version that changed last week?',
      'What is committed compute against actual consumption?',
      'Summarise unit economics and deployment position.',
    ],
  },

  automationHeading: 'Cost, deployments and decisions.',
  automationLede: 'Each runs from the company’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An account’s serving cost approaches its revenue', steps: ['Flagged with usage pattern', 'Pricing or usage conversation raised', 'Outcome recorded'] },
    { trigger: 'A deployment is made without an attached evaluation', steps: ['Flagged with the accounts affected', 'Evaluation or rollback assigned', 'Decision recorded'] },
    { trigger: 'A pilot passes its decision date', steps: ['Criteria and results surfaced', 'Decision assigned to an owner', 'Conversion or closure recorded'] },
    { trigger: 'An evaluation is blocked on annotation', steps: ['Annotation requirement surfaced with capacity', 'Priority decision raised', 'Evaluation unblocked on release'] },
    { trigger: 'Usage exceeds plan assumptions', steps: ['Account flagged with cost impact', 'Plan review raised', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the company can see.',
  intelligenceLede: 'Unit economics, deployments and evaluations from operating records.',
  intelligence: [
    { area: 'Economics', points: ['Serving cost by account and feature', 'Gross margin per account', 'Usage against plan assumptions', 'Committed compute against consumption'] },
    { area: 'Deployments', points: ['Live versions and their approvals', 'Deployment history by account', 'Evaluations behind each change', 'Rollbacks and their causes'] },
    { area: 'Evaluation', points: ['Evaluation outcomes against incumbent', 'Annotation throughput and quality', 'Datasets available and blocked', 'Time from evaluation to deployment'] },
    { area: 'Commercial', points: ['Pilot conversion and duration', 'Pilots without decisions', 'Account expansion and churn', 'Pricing against real cost'] },
  ],
  intelligenceNote: 'Verity records the company’s operations. Training infrastructure and model tooling continue as they are.',

  rolesHeading: 'One company, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'Do the unit economics work?', focus: 'Cost per account, gross margin, accounts below cost, pilot conversion.' },
    { role: 'Engineering lead', question: 'What is deployed and why?', focus: 'Live versions and approvals, evaluations attached, rollback position, annotation capacity.' },
    { role: 'Research lead', question: 'What can we evaluate?', focus: 'Evaluation queue, dataset availability, annotation throughput, results against incumbent.' },
    { role: 'Account manager', question: 'Where does this customer stand?', focus: 'Usage against plan, cost to serve, pilot decision date, version and change history.' },
  ],

  useCasesHeading: 'What AI companies use Verity for',
  useCases: [
    { name: 'Attributing serving cost to accounts', body: 'Inference and compute cost held per account and feature against the revenue each produces, which is the only way flat pricing survives a variable cost to serve.' },
    { name: 'Knowing what is deployed', body: 'Live model versions carrying the evaluation, the approver and the date, so production reflects decisions rather than leftover tests.' },
    { name: 'Unblocking evaluations', body: 'Annotation tracked as capacity against the evaluations that depend on it, making labelling a visible constraint on shipping.' },
    { name: 'Ending pilots deliberately', body: 'Pilots carrying criteria, a decision date and an owner, so an evaluation converts or closes instead of continuing indefinitely.' },
    { name: 'Answering what changed', body: 'Accounts linked to the versions they were served and the dates they changed, so a customer reporting different behaviour gets a real answer.' },
    { name: 'Catching heavy usage early', body: 'Consumption compared with plan assumptions per account, surfacing margin erosion before it becomes a renewal problem.' },
    { name: 'Asking about the company', body: 'Plain-language questions across cost, deployments, evaluations and accounts, with pricing and review actions raised in the same step.' },
  ],

  migration: 'Training infrastructure and model tooling continue and are mapped during implementation. Accounts with plans and usage, cost attribution structures, deployment and evaluation history, annotation records and compute commitments are brought across.',

  faqHeading: 'Questions AI companies ask',
  faqs: [
    ['What can AI software do for an AI company?', 'Verity AI answers questions from your own account, cost, deployment and evaluation records: which accounts cost more to serve than they pay, what gross margin is by feature, which model versions are live and what justified them, which pilots are past their decision date. Each answer can become a pricing conversation or a deployment review.'],
    ['Why attribute serving cost per account?', 'Because the cost is variable per request and the price is usually fixed per seat or per month. Without attribution the company knows its total compute spend and not which customers are profitable, and heavy users erode margin invisibly.'],
    ['How does it help with model governance?', 'Every deployment carries the model version, the evaluation that justified it, the person who approved it and the accounts it affects, so what is running in production is a recorded decision rather than an accumulated state.'],
    ['Does it track annotation work?', 'Annotation carries datasets, annotators, throughput and quality, with the evaluations waiting on it linked, so labelling capacity is visible as the upstream constraint on shipping model changes.'],
    ['What about pilots?', 'Pilots carry criteria, a decision date and an owner, and a decision is recorded either way. An indefinite pilot consumes engineering attention and serving cost with no commercial outcome, which is the most expensive state in the business.'],
    ['Can it answer customer questions about behaviour changes?', 'Accounts are linked to the model versions they were served and the dates those changed, so a customer reporting different results receives a specific answer rather than an investigation.'],
    ['Does it replace our training infrastructure?', 'No. Training infrastructure, experiment tracking and model tooling continue as they are. Verity holds the company around them — accounts, cost, deployments, evaluations, annotation and pilots.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of cost attribution, deployment process, evaluation practice and plan structures, configuration, migration of accounts and history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with cost per account.',
  ctaLede: 'A few accounts usually carry the margin problem. Tell us how serving cost is attributed today.',

  related: ['saas-companies', 'data-companies', 'startups', 'software-agencies', 'cybersecurity-companies', 'online-marketplaces'],
};
