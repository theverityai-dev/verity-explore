export default {
  slug: 'financial-advisors',
  status: 'published',
  plural: 'financial advisory firms',
  subject: 'financial advisory business',

  seo: {
    title: 'AI business management software for financial advisors | Verity',
    description:
      'Verity connects client review cycles, suitability records, trail income reconciliation, document completeness and life-event follow-up into one operational system.',
    keywords: [
      'AI software for financial advisors',
      'financial advisory practice management software',
      'client review cycle and suitability records',
      'trail income reconciliation software',
    ],
  },

  hero: {
    eyebrow: 'Verity for financial advisors',
    headline: 'The review was due in March. It is September and the file says nothing.',
    lede:
      'Advisory practices run on review cycles and the records that evidence them, and both slip quietly. Verity holds the cycle, the basis and the income you are owed.',
    note: 'Verity runs the practice. Platforms and portfolio systems stay where they are.',
    panel: {
      title: 'Practice',
      meta: 'This quarter',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Clients', value: '412', note: '₹6.4 Cr recurring income' },
        { label: 'Reviews overdue', value: '86', note: 'past their cycle date' },
        { label: 'Trail unreconciled', value: '₹11 L', note: '6 providers' },
        { label: 'Files incomplete', value: '47', note: 'missing suitability basis' },
      ],
      rows: [
        { name: '86 clients past their review cycle date', meta: 'Recurring income against unserviced clients', active: true },
        { name: '₹11 L of trail income unreconciled', meta: 'Six providers, three quarters', active: true },
        { name: '47 files without a recorded suitability basis', meta: 'Advice given, basis not evidenced', active: true },
        { name: 'Life events noted in conversation and not actioned', meta: '19 clients this year', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'You are paid recurring income for a service delivered on a cycle.',
    paragraphs: [
      'An advisory practice earns ongoing income for ongoing service, and the service is a review cycle: contact, assessment, recommendation and record. When the cycle slips, the income continues and the service does not, which is uncomfortable commercially and worse than uncomfortable if it is ever examined.',
      'Eighty-six clients past their review date is not an administrative backlog. It is recurring income being taken against a service that has not been delivered, and every month it persists it becomes harder to explain.',
      'The second characteristic is evidence. What was recommended, on what basis, against what circumstances is a record needed years later by people who were not in the room. Forty-seven files without a recorded basis is forty-seven pieces of advice that exist only as an outcome.',
      'The third is trail income, which arrives from providers in statements that need reconciling against the business the practice actually placed. Eleven lakh unreconciled is money earned and unverified.',
      'The fourth is life events. A client mentions a change — a sale, an inheritance, a retirement, a bereavement — in passing, and it is the single most valuable trigger the practice will get.',
      'Verity runs the review cycle, holds the evidence, reconciles the income and captures the events.',
    ],
  },

  terminology: [
    ['Clients, households, dependants', 'Relationships'],
    ['Reviews, recommendations, plans', 'Work'],
    ['Suitability, disclosures, fact-finds', 'Records'],
    ['Providers, platforms, product houses', 'Suppliers'],
    ['Advisors, paraplanners, administrators', 'People'],
    ['Approvals, file checks, sign-off', 'Control'],
    ['Offices, teams', 'Locations'],
  ],

  challengesHeading: 'A cycle that slips and evidence that is not made.',
  challengesLede:
    'Advisory difficulties come from ongoing income against a service delivered on a cycle nobody tracks.',
  challenges: [
    { problem: 'Review cycles slip while income continues', detail: 'Reviews are scheduled loosely and slip, and the recurring income does not.', outcome: 'Review cycles are dated per client with an owner, so overdue reviews are a worked list.' },
    { problem: 'The basis for advice is not recorded', detail: 'The recommendation exists; the circumstances and reasoning behind it exist in a conversation.', outcome: 'Basis and circumstances are recorded with the recommendation at the time it is made.' },
    { problem: 'Trail income is accepted rather than reconciled', detail: 'Provider statements arrive net of adjustments and are not matched against placed business.', outcome: 'Expected income per client and product is matched against statements, with variances raised.' },
    { problem: 'Life events are heard and not actioned', detail: 'A client mentions a change in passing and it becomes a note nobody follows up.', outcome: 'Life events are recorded as triggers with an owner and a follow-up.' },
    { problem: 'File completeness is discovered at review', detail: 'Missing documents and disclosures surface when a file is examined rather than when they were needed.', outcome: 'File completeness is a state, reportable across the client base.' },
    { problem: 'Households are advised as individuals', detail: 'Members of a household hold separate records, so the overall position is assembled by hand.', outcome: 'Households group clients, so the total position and cross-dependencies are visible.' },
  ],

  modulesLede: 'One system across the cycle, the evidence and the income.',
  modules: [
    { id: 'work', title: 'Reviews, recommendations and plans', line: 'Reviews are work with a client, a cycle date, an owner, preparation steps and an outcome recorded.', why: 'The review is the service the recurring income pays for.', example: 'Eighty-six clients past their review cycle date with owners assigned.' },
    { id: 'records', title: 'Suitability, disclosures and fact-finds', line: 'Circumstances, objectives, recommendations, basis and disclosures attach to the client with versions retained.', why: 'The record is needed years later by people who were not in the conversation.', example: 'Forty-seven files without a recorded suitability basis.' },
    { id: 'relationships', title: 'Clients, households and dependants', line: 'Clients are records grouped into households with their holdings, objectives, events, contact history and income basis.', why: 'Advice is given to a household and recorded against individuals in most practices.', example: 'Household position assembled rather than reconstructed per review.' },
    { id: 'suppliers', title: 'Providers, platforms and product houses', line: 'Providers carry the business placed, income basis, statement cycles, settlement reliability and balances.', why: 'Recurring income arrives in statements that need matching against placed business.', example: 'Eleven lakh unreconciled across six providers.' },
    { id: 'control', title: 'File checks, sign-off and audit', line: 'One permission model and one audit trail, with file checks and sign-off recorded.', why: 'Evidence of process matters as much as evidence of advice.', example: 'File completeness reportable across the client base rather than sampled.' },
    { id: 'people', title: 'Advisors, paraplanners and administrators', line: 'Staff are modelled once, with reviews, recommendations and file work attributed.', why: 'Review discipline and file quality both vary by advisor.', example: 'Overdue reviews and file completeness by advisor.' },
    { id: 'workflows', title: 'Life events, triggers and follow-ups', line: 'Life events, client requests and triggers become work with owners and dates.', why: 'A mentioned life event is the most valuable trigger a practice receives.', example: 'Nineteen life events recorded this year, actioned rather than noted.' },
    { id: 'intelligence', title: 'Cycle, evidence and income reporting', line: 'Review cycle adherence, file completeness, income expected against received, event follow-through and household coverage come from the records.', why: 'Ongoing income against undelivered service is the risk the practice most needs to see.', example: 'Review adherence by advisor and month.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own client, review, file and income records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about cycles slipping and evidence missing.', example: '"Which clients are past their review date?" returns eighty-six with reviews assigned.' },
    { id: 'communication', title: 'Client contact on the record', line: 'Meetings, calls and correspondence attach to the client and household.', why: 'A review conversation is better for knowing what was last discussed and agreed.', example: 'The last review’s agreed actions, visible at the next one.' },
    { id: 'orders', title: 'Fees, income and reconciliation', line: 'Fees, initial and recurring income are recorded against clients and providers with reconciliation.', why: 'Income is the practice’s product and it arrives from third parties.', example: 'Expected against received income by provider and client.' },
    { id: 'locations', title: 'Offices and teams', line: 'Units roll into the practice with clients, reviews and reporting following the same structure.', why: 'Review discipline and file quality vary by office as well as by advisor.', example: 'Cycle adherence and file completeness by office.' },
  ],

  workflowsHeading: 'A cycle, evidenced.',
  workflowsLede: 'These already happen. Recorded, the service matches the income.',
  workflows: [
    { name: 'Review cycle', steps: ['Cycle date set per client at onboarding or last review', 'Preparation assigned ahead of the date', 'Client contacted and review conducted', 'Circumstances, objectives and outcome recorded', 'Next cycle date set and file completeness confirmed'], note: 'Setting the next date at the end of the review is what stops the cycle drifting.' },
    { name: 'Recommendation and basis', steps: ['Circumstances and objectives recorded', 'Options considered and recommendation made', 'Basis and reasoning recorded with the recommendation', 'Disclosures made and stored', 'File checked and signed off'], note: 'The basis takes a moment at the time and is the whole record years later.' },
    { name: 'Income reconciliation', steps: ['Expected income recorded per client and provider at placement', 'Provider statement received', 'Matched against expected income', 'Variances raised with the provider', 'Settlement recorded'], note: 'Statements arrive net and are accepted far more often than they are checked.' },
    { name: 'Life event follow-up', steps: ['Event recorded when mentioned, with source and date', 'Owner assigned and follow-up scheduled', 'Implications assessed against the client’s plan', 'Action taken and outcome recorded', 'Household position updated'], note: 'The most valuable triggers a practice receives arrive as passing remarks.' },
    { name: 'File completeness review', steps: ['Required records defined per client type', 'Completeness assessed across the client base', 'Gaps raised as exceptions with owners', 'Documents obtained and recorded', 'Completeness state updated and reported'], note: 'Reportable completeness is the difference between knowing and sampling.' },
  ],

  ai: {
    heading: 'Ask what is overdue and what is unevidenced.',
    lede: 'Verity AI reads the same client, review, file and income records the practice creates as it works. It answers across your client base, respects permissions, and can turn an answer into reviews and queries.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide financial advice.',
    questions: [
      'Which clients are past their review cycle date?',
      'Which files have no recorded suitability basis?',
      'What income is unreconciled and with which providers?',
      'Which life events were recorded and never actioned?',
      'What is review adherence by advisor and office?',
      'Which households have members reviewed at different times?',
      'Which clients generate income without a delivered review this year?',
      'Which providers settle income least reliably?',
      'Summarise cycle adherence and file completeness.',
    ],
  },

  automationHeading: 'The cycle and the evidence.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A review cycle date approaches', steps: ['Review raised with the client history attached', 'Preparation assigned to the paraplanner', 'Escalated if the date passes'] },
    { trigger: 'A recommendation is recorded', steps: ['Basis required before completion', 'Disclosures checked', 'File check scheduled'] },
    { trigger: 'A provider statement is received', steps: ['Matched against expected income', 'Variances raised with the provider', 'Settlement recorded'] },
    { trigger: 'A life event is recorded', steps: ['Owner assigned with a follow-up date', 'Implications review scheduled', 'Outcome recorded against the household'] },
    { trigger: 'A file is found incomplete', steps: ['Exception raised with the missing item', 'Owner assigned', 'Completeness state updated on receipt'] },
  ],

  intelligenceHeading: 'What the principal can see.',
  intelligenceLede: 'Service delivery against recurring income, evidenced.',
  intelligence: [
    { area: 'Service', points: ['Review cycle adherence by client and advisor', 'Reviews overdue and by how long', 'Clients with income and no review delivered', 'Review outcomes recorded'] },
    { area: 'Evidence', points: ['Files with recorded suitability basis', 'Disclosure completeness', 'File check outcomes and sign-off', 'Completeness reportable across the base'] },
    { area: 'Income', points: ['Expected against received by provider', 'Unreconciled variances and their age', 'Income per client and household', 'Provider settlement reliability'] },
    { area: 'Clients', points: ['Household grouping and total position', 'Life events recorded and actioned', 'Contact history and review outcomes', 'Client retention and attrition'] },
  ],
  intelligenceNote: 'Verity records the practice. Platforms, portfolio systems and statutory reporting continue as they are, and Verity does not provide advice.',

  rolesHeading: 'One practice, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Principal', question: 'Are we delivering what the income pays for?', focus: 'Review adherence, file completeness, income reconciliation, adviser-level variance.' },
    { role: 'Advisor', question: 'Who is due and what do I need?', focus: 'Reviews due with history, life events to action, file gaps, client household position.' },
    { role: 'Paraplanner', question: 'What preparation is outstanding?', focus: 'Review preparation, file completeness, documents to obtain, recommendations to draft.' },
    { role: 'Administrator', question: 'What is unreconciled and unowned?', focus: 'Income variances by provider, overdue reviews without owners, documents outstanding.' },
  ],

  useCasesHeading: 'What advisory practices use Verity for',
  useCases: [
    { name: 'Review cycle discipline', body: 'Dated cycles per client with owners, so recurring income is not taken against a service that has quietly stopped.' },
    { name: 'Suitability evidence', body: 'Circumstances, reasoning and basis recorded with the recommendation, which is the record needed years later.' },
    { name: 'Income reconciliation', body: 'Expected income matched against provider statements, so variances are raised rather than accepted.' },
    { name: 'Life event capture', body: 'Passing mentions recorded as triggers with owners, since they are the most valuable signals a practice receives.' },
    { name: 'File completeness reporting', body: 'Completeness as a reportable state across the client base rather than a sampling exercise.' },
    { name: 'Household view', body: 'Clients grouped into households, so the overall position is a record rather than a reconstruction.' },
    { name: 'Asking about the cycle', body: 'Plain-language questions across reviews, files, income and events, with work assigned in the same step.' },
  ],

  migration: 'Platforms, portfolio systems and statutory reporting continue and are mapped during implementation. Clients and households, review cycles, files, income bases and provider arrangements are brought across.',

  faqHeading: 'Questions advisory practices ask',
  faqs: [
    ['Does Verity give financial advice?', 'No. Advice, portfolio construction and statutory reporting remain entirely with the practice and its existing systems. Verity records the practice around them — review cycles, evidence, income reconciliation, events and file completeness.'],
    ['What can AI software do for an advisory practice?', 'Verity AI answers questions from your own client, review, file and income records: which clients are past their review date, which files lack a recorded basis, what income is unreconciled, which life events were never actioned. Each answer can become a review or a query.'],
    ['Why does the review cycle matter so much?', 'Because recurring income pays for ongoing service. When the cycle slips the income continues and the service does not, which is uncomfortable commercially and considerably worse if it is ever examined.'],
    ['What does recording the basis achieve?', 'The recommendation is usually recorded; the circumstances and reasoning behind it often are not. That basis is the record needed years later by people who were not in the conversation, and it takes a moment to capture at the time.'],
    ['Can it reconcile trail income?', 'Expected income is recorded per client and provider at placement and matched against statements, so adjustments and shortfalls are raised as variances rather than accepted because the statement arrived net.'],
    ['Why record life events?', 'A sale, a retirement, an inheritance or a bereavement mentioned in passing is the single most valuable trigger a practice receives, and it usually becomes a note nobody follows up.'],
    ['Can we report file completeness?', 'Completeness is a state per client rather than something discovered when a file is examined, so it is reportable across the whole client base rather than sampled.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of review cycles, file standards and income bases, configuration, migration of clients, households and cycles, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the reviews that are overdue.',
  ctaLede: 'The income has continued and the service has not. Tell us how cycles are tracked today.',

  related: ['insurance-agencies', 'accounting-firms', 'ca-firms', 'law-firms', 'consulting-firms', 'saas-companies'],
};
