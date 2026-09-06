export default {
  slug: 'advertising-agencies',
  status: 'published',
  plural: 'advertising agencies',
  subject: 'advertising agency',

  seo: {
    title: 'AI business management software for advertising agencies | Verity',
    description:
      'Verity connects media commitments and reconciliation, pass-through production cost, campaign delivery, pitch investment and client billing into one system.',
    keywords: [
      'AI software for advertising agencies',
      'advertising agency management software',
      'media commitment and billing reconciliation',
      'production pass-through cost tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for advertising agencies',
    headline: 'You are billing millions of somebody else’s money and earning a percentage of it.',
    lede:
      'Media and production pass through the agency at scale while the agency’s own income is a thin slice. Verity tracks the pass-through, the commitments and the slice separately.',
    note: 'Verity runs the agency. Media planning and buying platforms stay where they are.',
    panel: {
      title: 'Accounts',
      meta: 'This quarter',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Billings', value: '₹22 Cr', note: 'media and production' },
        { label: 'Agency income', value: '₹2.4 Cr', note: '11% of billings' },
        { label: 'Unreconciled media', value: '₹64 L', note: 'plan against invoice' },
        { label: 'Production unbilled', value: '₹38 L', note: 'passed through, not recovered' },
      ],
      rows: [
        { name: '₹64 L of media unreconciled between plan and invoice', meta: 'Three vendors, two months', active: true },
        { name: '₹38 L of production cost passed through and unbilled', meta: 'Agency funding client production', active: true },
        { name: 'Two campaigns over their production estimate', meta: 'No change approval recorded', active: true },
        { name: 'Pitch cost not attributed to the pitches', meta: '4 pitches this quarter', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own accounts in this shape.',
    },
  },

  overview: {
    heading: 'Most of the money is not yours, and the part that is depends on tracking the rest.',
    paragraphs: [
      'An advertising agency handles billings far larger than its income. Media is planned, committed and invoiced through the agency; production is commissioned from third parties and passed through. The agency earns a percentage or a fee on top, which means the entire commercial risk sits in the accuracy of the pass-through rather than in the size of it.',
      'Media reconciliation is the clearest case. What was planned, what actually ran and what the vendor invoiced are three different numbers, and reconciling them is a monthly chore usually done partially. Sixty-four lakh unreconciled is a discrepancy that becomes the agency’s problem by default.',
      'The second is production. Third-party production cost is incurred on the client’s behalf and recovered afterwards. Thirty-eight lakh passed through and unbilled is the agency financing client production out of its own working capital.',
      'The third is scope on production estimates. A campaign that runs over its production estimate without an approved change is a cost the agency absorbs while billing the original figure.',
      'The fourth is pitching, which consumes real senior time and is almost never costed against the business it wins.',
      'Verity separates pass-through from income, reconciles media, recovers production and costs the pitch.',
    ],
  },

  terminology: [
    ['Campaigns, media plans, production jobs', 'Work'],
    ['Clients, brands, procurement', 'Relationships'],
    ['Media vendors, production houses, freelancers', 'Suppliers'],
    ['Commitments, insertion orders, estimates', 'Workflows'],
    ['Creative, account, planning, production staff', 'People'],
    ['Billings, income, pass-through', 'Control'],
    ['Offices, practices', 'Locations'],
  ],

  challengesHeading: 'Large pass-through, thin income.',
  challengesLede:
    'Advertising agency difficulties come from handling money that is not theirs and earning a slice that depends on handling it accurately.',
  challenges: [
    { problem: 'Plan, delivery and invoice do not match', detail: 'What was planned, what ran and what was invoiced are three numbers reconciled partially and late.', outcome: 'Plans, delivery records and invoices are matched per line, so discrepancies are raised as queries rather than absorbed.' },
    { problem: 'Production cost is passed through and not recovered', detail: 'Third-party production is commissioned on the client’s behalf and billed later, if at all.', outcome: 'Pass-through cost is recorded against the client and the campaign, with recovery tracked and aged.' },
    { problem: 'Production estimates are exceeded without approval', detail: 'A shoot or build runs over and the agency absorbs it while billing the original estimate.', outcome: 'Estimates carry a threshold, and exceeding it raises a change approval before the cost is committed.' },
    { problem: 'Agency income is not separated from billings', detail: 'A large billings number conceals a thin income number, and profitability is assessed on the wrong one.', outcome: 'Income and pass-through are separate records, so account profitability is measured on income.' },
    { problem: 'Pitch cost is invisible', detail: 'Senior time and production cost go into pitches that are never costed against the business won.', outcome: 'Pitches are work with recorded effort and cost, compared against the accounts they win.' },
    { problem: 'Media commitments are made before client approval', detail: 'Space is committed to secure a rate and the client approval follows, sometimes not at all.', outcome: 'Commitments carry their approval state, so exposure before approval is visible.' },
  ],

  modulesLede: 'One system separating pass-through from income.',
  modules: [
    { id: 'work', title: 'Campaigns, media plans and production jobs', line: 'Each is work with a client, budget, commitments, delivery records, cost and state.', why: 'The campaign is where media, production and agency income meet.', example: 'Two campaigns over production estimate with no approved change.' },
    { id: 'workflows', title: 'Commitments, insertion orders and estimates', line: 'Media commitments, insertion orders, production estimates and change approvals move through defined steps with recorded decisions.', why: 'A commitment made before client approval is agency exposure.', example: 'Commitments carrying their approval state and exposure.' },
    { id: 'suppliers', title: 'Media vendors and production houses', line: 'Vendors carry their orders, delivery records, invoices, rates and balances.', why: 'Reconciliation is only possible if the plan, the delivery and the invoice are on one record.', example: 'Sixty-four lakh unreconciled across three vendors.' },
    { id: 'relationships', title: 'Clients, brands and procurement', line: 'Clients carry their campaigns, budgets, income basis, pass-through balances and approvals.', why: 'Account profitability is measured on income rather than on billings.', example: 'Income against billings by account, which reorders which clients matter.' },
    { id: 'control', title: 'Billings, income and pass-through', line: 'One permission model and one audit trail, with income and pass-through recorded separately.', why: 'Confusing billings with income is the category’s characteristic accounting mistake.', example: 'Twenty-two crore of billings against two point four crore of income.' },
    { id: 'people', title: 'Creative, account, planning and production', line: 'Staff are modelled once, with effort recorded against campaigns and pitches.', why: 'Agency income pays for people, and pitching consumes them invisibly.', example: 'Senior effort on pitches against the accounts they won.' },
    { id: 'orders', title: 'Client billing and recovery', line: 'Client invoices for media, production and fees are recorded against the campaign with ageing.', why: 'Pass-through recovery is working capital, and it ages.', example: 'Thirty-eight lakh of production passed through and unbilled.' },
    { id: 'intelligence', title: 'Reconciliation, income and pitch reporting', line: 'Plan against delivery against invoice, income against billings, pass-through recovery, production estimate variance and pitch cost come from the records.', why: 'The agency’s risk is in the pass-through and its income is a slice; both need separate visibility.', example: 'Income per account after production absorbed.' },
    { id: 'ai', title: 'Ask the agency a question', line: 'Verity AI answers from your own campaign, vendor, billing and pitch records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about reconciliation gaps and unrecovered cost.', example: '"What media is unreconciled between plan and invoice?" returns sixty-four lakh by vendor.' },
    { id: 'records', title: 'Plans, estimates and approvals', line: 'Media plans, production estimates, client approvals and change records attach to the campaign.', why: 'A disputed cost is settled by the approved estimate.', example: 'The approved production estimate on the campaign, referenced at billing.' },
    { id: 'communication', title: 'Client approvals on the record', line: 'Approvals, briefs and change instructions attach to the campaign they concern.', why: 'An approval given verbally before a commitment is the agency’s only protection.', example: 'A commitment approval recorded before the insertion order is placed.' },
    { id: 'locations', title: 'Offices and practices', line: 'Units roll into the agency with campaigns, income and reporting following the same structure.', why: 'Media and creative practices have very different income structures.', example: 'Income and pass-through by practice.' },
  ],

  workflowsHeading: 'Plan, commit, deliver, reconcile, recover.',
  workflowsLede: 'These already happen. Recorded, the pass-through stops becoming the agency’s risk.',
  workflows: [
    { name: 'Media plan to commitment', steps: ['Plan built with vendors, rates and schedule', 'Client approval obtained and recorded', 'Insertion orders raised against approved lines', 'Commitment exposure recorded until approval', 'Schedule confirmed with vendors'], note: 'Committing before approval is common and should at least be a visible exposure.' },
    { name: 'Delivery and reconciliation', steps: ['Delivery records collected against the plan', 'Vendor invoices received', 'Plan, delivery and invoice matched per line', 'Discrepancies raised as queries with the vendor', 'Reconciled position billed to the client'], note: 'Three numbers that should match and usually do not, reconciled per line rather than in total.' },
    { name: 'Production estimate and change', steps: ['Estimate prepared and approved by the client', 'Third-party costs committed against it', 'Actual cost tracked against the estimate', 'Change approval raised before exceeding it', 'Final cost billed with the approvals attached'], note: 'Exceeding an estimate without an approval is the agency absorbing someone else’s production.' },
    { name: 'Pass-through recovery', steps: ['Third-party cost recorded against client and campaign', 'Client invoice raised on the agreed basis', 'Recovery aged from the cost date', 'Follow-up assigned where recovery lags', 'Working capital position reported'], note: 'Pass-through unrecovered is the agency lending its clients money at no interest.' },
    { name: 'Pitch costing', steps: ['Pitch recorded with team, effort and third-party cost', 'Outcome recorded — won, lost, no decision', 'Cost compared against income won', 'Pattern reviewed by pitch type and client', 'Participation decisions informed'], note: 'Pitching is the largest uncosted activity in most agencies.' },
  ],

  ai: {
    heading: 'Ask what is yours and what is passing through.',
    lede: 'Verity AI reads the same campaign, vendor, billing and pitch records the agency creates as it works. It answers across accounts, respects permissions, and can turn an answer into queries and recovery.',
    panelMeta: 'Grounded in your agency records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What media is unreconciled between plan, delivery and invoice?',
      'How much production cost is passed through and unbilled?',
      'Which campaigns exceeded their production estimate without approval?',
      'What is agency income against billings by account?',
      'What did pitching cost this quarter against what it won?',
      'Which media commitments were made before client approval?',
      'Which vendors invoice differently from what they delivered?',
      'Which accounts are least profitable on income rather than billings?',
      'Summarise reconciliation and recovery position.',
    ],
  },

  automationHeading: 'Reconciliation and recovery.',
  automationLede: 'Each runs from the agency’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A vendor invoice is received', steps: ['Matched against plan and delivery records', 'Discrepancies raised as queries', 'Reconciled position released for client billing'] },
    { trigger: 'Third-party cost is committed', steps: ['Recorded against client and campaign', 'Client billing basis applied', 'Recovery aged from the cost date'] },
    { trigger: 'Production cost approaches the estimate', steps: ['Flagged with remaining scope', 'Change approval raised before exceeding', 'Decision recorded'] },
    { trigger: 'A commitment is made before approval', steps: ['Exposure recorded against the client', 'Approval chased', 'Escalated if the schedule starts unapproved'] },
    { trigger: 'A pitch concludes', steps: ['Effort and cost totalled', 'Outcome recorded', 'Cost compared against income won'] },
  ],

  intelligenceHeading: 'What the management can see.',
  intelligenceLede: 'Income separated from billings, and pass-through tracked.',
  intelligence: [
    { area: 'Reconciliation', points: ['Plan against delivery against invoice by vendor', 'Discrepancies raised and resolved', 'Reconciliation age by month', 'Vendor accuracy over time'] },
    { area: 'Pass-through', points: ['Cost incurred against recovered', 'Recovery ageing by client', 'Working capital committed to pass-through', 'Absorbed cost by cause'] },
    { area: 'Income', points: ['Income against billings by account', 'Income per head and per practice', 'Fee against commission mix', 'Account profitability on income'] },
    { area: 'Production', points: ['Actual against estimate by campaign', 'Change approvals raised and granted', 'Third-party supplier cost and reliability', 'Absorbed overruns'] },
    { area: 'New business', points: ['Pitch cost by pitch and type', 'Win rate and income won', 'Cost against income won', 'Senior time consumed by pitching'] },
  ],
  intelligenceNote: 'Verity records the agency’s commercial and delivery data. Media planning and buying platforms continue as they are.',

  rolesHeading: 'One agency, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Managing director', question: 'What is our income and where is it leaking?', focus: 'Income against billings, pass-through recovery, absorbed production, pitch cost against wins.' },
    { role: 'Account lead', question: 'Is my account reconciled and recovered?', focus: 'Media reconciliation, production estimates and changes, billing and recovery ageing.' },
    { role: 'Media', question: 'Does the invoice match the plan?', focus: 'Plan against delivery against invoice, vendor queries, commitments and approvals.' },
    { role: 'Finance', question: 'What are we funding?', focus: 'Pass-through committed and recovered, ageing by client, commitments before approval.' },
  ],

  useCasesHeading: 'What advertising agencies use Verity for',
  useCases: [
    { name: 'Media reconciliation', body: 'Plan, delivery and invoice matched per line, so discrepancies become vendor queries rather than the agency’s absorbed cost.' },
    { name: 'Pass-through recovery', body: 'Third-party cost recorded against client and campaign with recovery aged, so the agency stops funding client production.' },
    { name: 'Production estimate control', body: 'Change approval raised before an estimate is exceeded rather than absorbed and billed at the original figure.' },
    { name: 'Income separated from billings', body: 'Account profitability measured on income rather than on the much larger number that passes through.' },
    { name: 'Commitment exposure', body: 'Media committed before client approval recorded as exposure rather than assumed to be safe.' },
    { name: 'Pitch costing', body: 'Effort and third-party cost recorded per pitch against the income won, costing the agency’s largest uncosted activity.' },
    { name: 'Asking about the pass-through', body: 'Plain-language questions across reconciliation, recovery and income, with queries raised in the same step.' },
  ],

  migration: 'Media planning and buying platforms and your accounting continue and are mapped during implementation. Clients, live campaigns, commitments, vendors and outstanding recovery are brought across.',

  faqHeading: 'Questions agencies ask',
  faqs: [
    ['What can AI software do for an advertising agency?', 'Verity AI answers questions from your own campaign, vendor, billing and pitch records: what media is unreconciled between plan and invoice, how much production is passed through and unbilled, which campaigns exceeded their estimate without approval, what income looks like against billings. Each answer can become a query or a recovery task.'],
    ['Why separate income from billings?', 'Because the agency handles far more money than it earns. Assessing an account on billings makes a large media client look important when its income contribution may be small, and it hides where the agency is absorbing cost.'],
    ['How does media reconciliation work?', 'What was planned, what actually ran and what the vendor invoiced are matched per line rather than in total, so a discrepancy is a vendor query raised in time rather than a difference the agency absorbs by default.'],
    ['What is the risk with pass-through?', 'Third-party production is commissioned on the client’s behalf and recovered afterwards. Unrecovered pass-through is the agency lending its clients working capital at no interest, and it ages quietly.'],
    ['Can it control production estimates?', 'Estimates carry a threshold, and approaching it raises a change approval before the additional cost is committed — rather than absorbing an overrun while billing the original figure.'],
    ['Does it cost pitching?', 'Pitches are work with recorded effort and third-party cost, compared against the income actually won. It is usually the largest uncosted activity in an agency and consumes the most senior time.'],
    ['Does Verity replace media planning tools?', 'No. Planning and buying platforms continue and are mapped during implementation. Verity holds commitments, reconciliation, pass-through, income and the commercial reporting.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of income bases and reconciliation practice, configuration, migration of clients, campaigns and vendors, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with what has not been reconciled.',
  ctaLede: 'It becomes yours by default. Tell us how plan, delivery and invoice are matched today.',

  related: ['marketing-agencies', 'pr-agencies', 'design-agencies', 'content-agencies', 'consulting-firms', 'saas-companies'],
};
