export default {
  slug: 'creator-businesses',
  status: 'published',
  plural: 'creator businesses',
  subject: 'creator business',

  seo: {
    title: 'AI business management software for creator businesses | Verity',
    description:
      'Verity gives creator businesses one system for brand deal deliverables and usage rights, income across many platforms and sponsors, the content calendar and rights expiry.',
    keywords: [
      'AI software for creator businesses',
      'creator business management software',
      'brand deal deliverable and usage rights tracking',
      'creator income and payout reconciliation',
    ],
  },

  hero: {
    eyebrow: 'Verity for creator businesses',
    headline: 'Eleven income sources, four sponsors, and no single place that says what you owe whom.',
    lede:
      'A creator business is a set of contractual obligations paid from many directions. Verity holds deliverables, rights and income in one record.',
    note: 'Verity runs the business. Platforms, editing tools and publishing stay where they are.',
    panel: {
      title: 'Business',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active brand deals', value: '7', note: '23 deliverables' },
        { label: 'Deliverables overdue', value: '4', note: 'contracted dates passed' },
        { label: 'Income sources', value: '11', note: 'platforms and sponsors' },
        { label: 'Payments outstanding', value: '₹6.4 L', note: 'oldest 74 days' },
      ],
      rows: [
        { name: '4 contracted deliverables past their date', meta: 'Payment conditional on delivery', active: true },
        { name: '₹6.4 L outstanding, oldest 74 days', meta: 'Across 3 sponsors', active: true },
        { name: '2 usage rights expiring this month', meta: 'Content must come down or be renewed', active: true },
        { name: 'Exclusivity clause overlaps a new enquiry', meta: 'Category conflict', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own business in this shape.',
    },
  },

  overview: {
    heading: 'Creative work sold as contracts, paid from everywhere.',
    paragraphs: [
      'A creator business looks like content and operates like a set of contracts. Seven brand deals carrying twenty-three deliverables, each with a date, a format, a platform and usage terms, is a delivery obligation that has nothing to do with creative capacity and everything to do with tracking.',
      'The second characteristic is that income arrives from many directions with different timing and different terms. Eleven sources — platform payouts, sponsors, affiliate arrangements, direct sales — with six lakh outstanding and the oldest at seventy-four days, is a receivables problem that most creator businesses discover only when cash is short.',
      'The third is usage rights. Brands buy the right to use content for a period, in defined places, and two rights expiring this month means content that has to come down or be renegotiated. A missed expiry is a contractual breach nobody intended.',
      'The fourth is exclusivity. Category exclusivity clauses restrict which brands can be worked with and for how long, and an enquiry that conflicts with an existing clause is a decision to make before a conversation, not after.',
      'The fifth is that the content calendar has to serve both the audience and the contracted deliverables, which pull in different directions.',
      'Verity holds deliverables with their dates and terms, income across every source, and rights and exclusivity with their expiry.',
    ],
  },

  terminology: [
    ['Brand deals, campaigns, deliverables', 'Work'],
    ['Usage rights, exclusivity, terms', 'Control'],
    ['Sponsors, agencies, platforms', 'Relationships'],
    ['Payouts, invoices, receivables', 'Orders'],
    ['Content calendar and publishing', 'Schedule'],
    ['Editors, managers, collaborators', 'People'],
    ['Assets, footage, archives', 'Records'],
  ],

  challengesHeading: 'Contracts behind the content and money from everywhere.',
  challengesLede:
    'Creator business difficulties come from obligations and income that live outside the creative work.',
  challenges: [
    { problem: 'Deliverables lose their dates', detail: 'Contracted posts and formats slip because they are tracked in messages.', outcome: 'Every deliverable carries its deal, format, platform, date and state.' },
    { problem: 'Income is not reconciled across sources', detail: 'Platform payouts and sponsor invoices arrive separately and nothing totals them.', outcome: 'All income sources are recorded with expected against received amounts.' },
    { problem: 'Usage rights expire unnoticed', detail: 'Content stays up beyond the licensed period.', outcome: 'Rights carry duration, territory and expiry with action raised in advance.' },
    { problem: 'Exclusivity conflicts are found late', detail: 'A new enquiry conflicts with a clause in an existing contract.', outcome: 'Exclusivity terms are held per deal and checked against new enquiries.' },
    { problem: 'Receivables age without follow-up', detail: 'Sponsor payments are late and nobody is chasing them.', outcome: 'Receivables age with owners and follow-up against each deal.' },
    { problem: 'The calendar serves either audience or sponsors', detail: 'Contracted content and audience content compete without a plan.', outcome: 'The calendar holds both with deliverable dates visible against it.' },
  ],

  modulesLede: 'One system across deals, deliverables, rights and income.',
  modules: [
    { id: 'work', title: 'Brand deals, campaigns and deliverables', line: 'Each deal carries its deliverables with format, platform, date, approval requirement and delivery state.', why: 'Payment is usually conditional on delivery of specific items by specific dates.', example: 'Four contracted deliverables past their date.' },
    { id: 'control', title: 'Usage rights, exclusivity and terms', line: 'One permission model and one audit trail, with usage duration, territory, exclusivity and renewal terms held per deal.', why: 'Rights and exclusivity are contractual obligations that expire and restrict.', example: 'Two usage rights expiring this month.' },
    { id: 'orders', title: 'Payouts, invoices and receivables', line: 'Every income source carries expected amounts, received amounts, timing and outstanding balance.', why: 'Income arriving from many directions is only manageable when it is totalled.', example: 'Six lakh outstanding with the oldest at seventy-four days.' },
    { id: 'relationships', title: 'Sponsors, agencies and platforms', line: 'Each carries their deals, deliverable history, payment behaviour, contacts and terms.', why: 'Payment behaviour by sponsor is what should inform the next deal’s terms.', example: 'Outstanding balances by sponsor and age.' },
    { id: 'schedule', title: 'Content calendar and publishing', line: 'The calendar holds planned content alongside contracted deliverable dates and rights expiry.', why: 'Sponsored and audience content compete for the same schedule.', example: 'Deliverable dates visible on the publishing calendar.' },
    { id: 'records', title: 'Assets, footage and archives', line: 'Produced assets, raw material and approved versions attach to the deliverable and deal.', why: 'A rights renewal or reuse question needs the asset and its terms together.', example: 'Approved versions retained against each deliverable.' },
    { id: 'people', title: 'Editors, managers and collaborators', line: 'Collaborators carry assignments, deadlines, rates and payments due.', why: 'Production is a small team with obligations in both directions.', example: 'Editor assignments against deliverable dates.' },
    { id: 'intelligence', title: 'Delivery, income and rights reporting', line: 'Deliverable adherence, income by source, receivables ageing, rights expiry and deal profitability come from the records.', why: 'The business is contractual and every part of it is measurable.', example: 'Income by source and month with outstanding balances.' },
    { id: 'ai', title: 'Ask the business a question', line: 'Verity AI answers from your own deal, deliverable, income and rights records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about what is owed and what is due.', example: '"What deliverables are overdue?" returns four with their deals and payment terms.' },
    { id: 'communication', title: 'Sponsor contact and approvals', line: 'Briefs, approvals, revision requests and payment chasing attach to the deal and deliverable.', why: 'Approval history is what settles a dispute about what was agreed.', example: 'Approval recorded against the delivered version.' },
    { id: 'workflows', title: 'Production and approval cycles', line: 'Concept, production, sponsor approval, revision and publication run as tracked stages.', why: 'Sponsor approval sits between production and publication and moves dates.', example: 'Deliverables awaiting sponsor approval before their date.' },
    { id: 'locations', title: 'Platforms and channels', line: 'Each platform carries its content, performance, payout terms and account details.', why: 'Obligations and income are both platform-specific.', example: 'Payout terms and balances by platform.' },
  ],

  workflowsHeading: 'Agree, produce, approve, publish, collect.',
  workflowsLede: 'These already happen. Recorded, the contracts behind the content become manageable.',
  workflows: [
    { name: 'Deal setup', steps: ['Deal recorded with deliverables, formats and dates', 'Usage rights and territory captured', 'Exclusivity terms recorded', 'Payment terms and milestones set', 'Deliverables added to the calendar'], note: 'Capturing exclusivity at signature is what prevents a conflict later.' },
    { name: 'Deliverable production', steps: ['Concept agreed against the brief', 'Produced with collaborators assigned', 'Submitted for sponsor approval', 'Revisions recorded', 'Published and delivery confirmed'], note: 'Sponsor approval is a dependency with a date attached.' },
    { name: 'Income reconciliation', steps: ['Expected amounts recorded per source', 'Received payments matched', 'Differences investigated', 'Outstanding balances aged', 'Follow-up assigned'], note: 'Matching expected against received is what surfaces missing payouts.' },
    { name: 'Rights management', steps: ['Usage duration and territory recorded per deal', 'Expiry surfaced in advance', 'Renewal, removal or renegotiation decided', 'Action completed and recorded', 'Asset state updated'], note: 'Content left up past its licence is a breach nobody intended.' },
    { name: 'Enquiry screening', steps: ['New enquiry received with category', 'Existing exclusivity clauses checked', 'Conflict identified or cleared', 'Terms proposed', 'Decision recorded'], note: 'Checking exclusivity before a conversation avoids withdrawing from one.' },
  ],

  ai: {
    heading: 'Ask about deliverables and money.',
    lede: 'Verity AI reads the same deal, deliverable, income and rights records the business creates as it works. It answers from your own business, respects permissions, and can turn an answer into a chase or a calendar change.',
    panelMeta: 'Grounded in your business records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which deliverables are overdue and on which deals?',
      'What income is outstanding and from whom?',
      'Which usage rights expire in the next month?',
      'Does this enquiry conflict with an exclusivity clause?',
      'What did each source pay this quarter?',
      'Which sponsors pay slowest?',
      'Which deliverables are waiting on sponsor approval?',
      'What is profitability by deal after production cost?',
      'Summarise obligations and receivables.',
    ],
  },

  automationHeading: 'Dates, rights and payment.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A deliverable date approaches', steps: ['Production and approval state checked', 'Owner and collaborator reminded', 'Sponsor informed if the date will move'] },
    { trigger: 'A usage right approaches expiry', steps: ['Content and asset identified', 'Renewal, removal or renegotiation decision raised', 'Action recorded'] },
    { trigger: 'A payment passes its terms', steps: ['Aged against the sponsor', 'Follow-up assigned with the deal attached', 'Receipt recorded'] },
    { trigger: 'An enquiry arrives in a restricted category', steps: ['Exclusivity clauses checked', 'Conflict surfaced with the deal and dates', 'Decision recorded'] },
    { trigger: 'A deliverable waits on sponsor approval', steps: ['Approval chased with the version attached', 'Date risk flagged', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Obligations, income and rights from working records.',
  intelligence: [
    { area: 'Obligations', points: ['Deliverables by deal and date', 'Adherence to contracted dates', 'Approval turnaround by sponsor', 'Revision rounds per deliverable'] },
    { area: 'Income', points: ['Amounts by source and month', 'Expected against received', 'Receivables ageing by sponsor', 'Payment behaviour patterns'] },
    { area: 'Rights', points: ['Usage duration and territory by deal', 'Expiry calendar', 'Exclusivity clauses in force', 'Renewals and renegotiations'] },
    { area: 'Production', points: ['Collaborator assignments and cost', 'Deal profitability after production', 'Calendar balance between sponsored and audience content', 'Platform performance'] },
  ],
  intelligenceNote: 'Verity records the business. Platforms, editing tools and publishing continue as they are.',

  rolesHeading: 'One business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Creator', question: 'What do I owe and to whom?', focus: 'Deliverables by date, approvals outstanding, rights expiring, calendar balance.' },
    { role: 'Manager', question: 'What is agreed and what is at risk?', focus: 'Deal terms, exclusivity, deliverable adherence, sponsor relationships.' },
    { role: 'Producer or editor', question: 'What am I making and by when?', focus: 'Assignments, briefs, deadlines, revision requests, asset versions.' },
    { role: 'Finance', question: 'What has been paid?', focus: 'Income by source, outstanding balances and ageing, collaborator payments, deal profitability.' },
  ],

  useCasesHeading: 'What creator businesses use Verity for',
  useCases: [
    { name: 'Tracking contracted deliverables', body: 'Every deliverable with its deal, format, platform, date and approval state, because payment is usually conditional on specific items by specific dates.' },
    { name: 'Totalling income from everywhere', body: 'Platform payouts, sponsor invoices and other sources recorded with expected against received amounts, so missing money is visible.' },
    { name: 'Managing usage rights', body: 'Duration, territory and expiry held per deal with action raised in advance, so content does not stay up past its licence.' },
    { name: 'Screening enquiries against exclusivity', body: 'Category exclusivity clauses checked before a conversation begins rather than after terms have been discussed.' },
    { name: 'Chasing receivables', body: 'Outstanding amounts aged by sponsor with follow-up assigned, since late payment is normal and unchased payment is common.' },
    { name: 'Balancing the calendar', body: 'Contracted deliverable dates visible alongside audience content, so both obligations are planned rather than competing.' },
    { name: 'Asking about the business', body: 'Plain-language questions across deals, deliverables, rights and income, with chases and decisions raised in the same step.' },
  ],

  migration: 'Platforms, editing tools and publishing continue and are mapped during implementation. Deals with deliverables and terms, usage rights and exclusivity clauses, income sources and outstanding balances, and collaborator arrangements are brought across.',

  faqHeading: 'Questions creator businesses ask',
  faqs: [
    ['What can AI software do for a creator business?', 'Verity AI answers questions from your own deal, deliverable, income and rights records: which deliverables are overdue, what income is outstanding and from whom, which usage rights expire next month, whether an enquiry conflicts with an exclusivity clause. Each answer can become a chase or a calendar change.'],
    ['Why treat a creator business as contracts?', 'Because the money follows contracts. Brand deals commit specific deliverables in specific formats on specific dates with defined usage terms, and payment is usually conditional on all of it, which makes tracking a commercial function rather than an administrative one.'],
    ['How does it handle income from many sources?', 'Every source — platform payouts, sponsors, affiliate arrangements, direct sales — is recorded with expected against received amounts and outstanding balances, so the total position exists in one place instead of across statements.'],
    ['What about usage rights?', 'Duration, territory and renewal terms are held per deal with expiry surfaced in advance, so content that must come down or be renegotiated is dealt with before the licence lapses.'],
    ['Can it check exclusivity?', 'Exclusivity clauses are recorded per deal with their categories and dates, and new enquiries are checked against them, so a conflict is found before terms are discussed rather than after.'],
    ['Does it help with late payments?', 'Outstanding amounts are aged by sponsor with follow-up assigned and the deal attached, which is what turns a known problem into a chased one.'],
    ['Does it replace publishing tools?', 'No. Platforms, editing tools and publishing continue as they are. Verity holds the business around them — deals, deliverables, rights, calendar, income and collaborators.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of deal structures, deliverable types, rights terms and income sources, configuration, migration of deals and balances, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the overdue deliverables.',
  ctaLede: 'Payment usually depends on them. Tell us how deals and dates are tracked today.',

  related: ['content-agencies', 'marketing-agencies', 'photographers', 'gaming-studios', 'design-agencies', 'advertising-agencies'],
};
