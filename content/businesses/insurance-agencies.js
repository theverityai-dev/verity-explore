export default {
  slug: 'insurance-agencies',
  status: 'published',
  plural: 'insurance agencies',
  subject: 'insurance agency',

  seo: {
    title: 'AI business management software for insurance agencies | Verity',
    description:
      'Verity connects renewal pipelines, policy documentation, claims support, insurer commission recovery and suitability records into one operational system.',
    keywords: [
      'AI software for insurance agencies',
      'insurance agency management software',
      'policy renewal and lapse tracking',
      'commission recovery and claims support software',
    ],
  },

  hero: {
    eyebrow: 'Verity for insurance agencies',
    headline: 'A policy that lapses is a client you already had.',
    lede:
      'Renewals are the whole business and they run on dates. Verity tracks the renewal pipeline, the documentation behind each policy and the commission you are owed for it.',
    note: 'Verity runs the agency. Insurer systems stay where they are.',
    panel: {
      title: 'Book',
      meta: 'Next 90 days',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Policies in force', value: '2,140', note: '₹6.4 Cr premium' },
        { label: 'Renewals in 90 days', value: '384', note: '96 not yet contacted' },
        { label: 'Commission unreconciled', value: '₹8.2 L', note: '5 insurers' },
        { label: 'Claims in progress', value: '46', note: '11 awaiting documents' },
      ],
      rows: [
        { name: '96 renewals inside 90 days with no contact recorded', meta: 'Lapse risk on existing clients', active: true },
        { name: '₹8.2 L of commission unreconciled', meta: 'Across five insurers and three months', active: true },
        { name: '11 claims stalled on client documents', meta: 'Client experience at the moment it matters most', active: true },
        { name: 'Policies without recorded suitability basis', meta: '38 · sold over 12 months', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own book in this shape.',
    },
  },

  overview: {
    heading: 'The book renews or it shrinks.',
    paragraphs: [
      'An insurance agency’s value is its book, and a book is a set of dated renewals. Every policy has a date on which it either renews or lapses, and a lapse is not a lost sale — it is the loss of a client the agency already had, already knew and had already paid to acquire.',
      'Renewals therefore need to be worked as a pipeline rather than processed as they arrive. Ninety-six renewals inside ninety days with no contact recorded is a lapse rate forming, and it is entirely visible in advance.',
      'The second fact is commission. Insurers pay commission on premium and it arrives in statements that have to be reconciled against the policies the agency actually placed. Eight point two lakh unreconciled across five insurers is money earned and not verified.',
      'The third is claims. A client experiences the agency almost entirely at claim time, and claims stall on documents the client has not sent. Eleven stalled claims is eleven clients forming an opinion at the worst possible moment.',
      'The fourth is documentation. What was recommended and on what basis is a record the agency needs years later.',
      'Verity works the renewal pipeline, reconciles commission, supports claims and keeps the documentation.',
    ],
  },

  terminology: [
    ['Policies, covers, endorsements', 'Records'],
    ['Renewals, new business, lapses', 'Work'],
    ['Clients, households, corporate accounts', 'Relationships'],
    ['Insurers, underwriters, surveyors', 'Suppliers'],
    ['Claims, documents, settlements', 'Workflows'],
    ['Advisors, support staff', 'People'],
    ['Branches, territories', 'Locations'],
  ],

  challengesHeading: 'Dates, documents and money owed.',
  challengesLede:
    'Insurance agency difficulties come from a book that renews on dates and income that arrives in statements.',
  challenges: [
    { problem: 'Renewals are processed rather than worked', detail: 'Renewal notices arrive and are handled as they come, so policies lapse that a conversation would have kept.', outcome: 'Renewals are a dated pipeline with owners and contact history, worked ahead of the date.' },
    { problem: 'Commission statements are not reconciled', detail: 'Insurer statements arrive net of adjustments and are accepted rather than matched against placed policies.', outcome: 'Commission is expected per policy and reconciled against statements, with variances raised.' },
    { problem: 'Claims stall on client documents', detail: 'A claim waits for paperwork the client has not sent, at the moment the client is judging the agency most harshly.', outcome: 'Claim document requirements are checklist items with an age and an owner.' },
    { problem: 'The suitability basis is not recorded', detail: 'What was recommended and why exists in a conversation, and is needed years later.', outcome: 'Recommendation and basis are recorded against the policy at the point the policy is sold.' },
    { problem: 'Client households are fragmented across policies', detail: 'The same household holds several policies recorded separately, so cross-sell and total value are invisible.', outcome: 'Policies attach to a client or household record, so the whole relationship is visible.' },
    { problem: 'Lapse reasons are never captured', detail: 'A policy lapses and nobody records whether it was price, service or a competitor.', outcome: 'Lapse reasons are recorded, so the pattern is addressable.' },
  ],

  modulesLede: 'One system across the book, renewals, claims and commission.',
  modules: [
    { id: 'records', title: 'Policies, covers and endorsements', line: 'Each policy carries its insurer, cover, premium, renewal date, documents, commission basis and recommendation record.', why: 'The policy is the unit of the book and of the income.', example: 'Two thousand one hundred and forty policies with their renewal dates as a pipeline.' },
    { id: 'work', title: 'Renewals, new business and lapses', line: 'Renewals are work with a date, an owner, contact history and an outcome; lapses record a reason.', why: 'A renewal worked ahead of its date is a different outcome from one processed at it.', example: 'Ninety-six renewals inside ninety days with no contact recorded.' },
    { id: 'workflows', title: 'Claims, documents and settlements', line: 'Claims move through defined steps with document checklists, insurer interaction and settlement recorded.', why: 'Claims are where the client forms their opinion of the agency.', example: 'Eleven claims stalled on client documents, chased with an age.' },
    { id: 'relationships', title: 'Clients, households and corporate accounts', line: 'Clients carry their policies, household members, renewal dates, claims, contact history and total premium.', why: 'A household with five policies is one relationship and five separate records in most agencies.', example: 'Total premium and cover gaps visible per household.' },
    { id: 'suppliers', title: 'Insurers and underwriters', line: 'Insurers carry their products, commission bases, statement cycles, settlement reliability and balances.', why: 'Commission is earned from insurers and arrives in statements that need matching.', example: 'Eight point two lakh unreconciled across five insurers.' },
    { id: 'people', title: 'Advisors and support staff', line: 'Staff are modelled once, and every policy, renewal, claim and recommendation carries who owns it.', why: 'Renewal and retention rates vary by advisor and are worth knowing.', example: 'Retention rate by advisor across their book.' },
    { id: 'control', title: 'Suitability, disclosure and audit', line: 'One permission model and one audit trail, with recommendation basis and disclosures recorded at sale.', why: 'The record of what was recommended and why is needed long after the conversation.', example: 'Thirty-eight policies without a recorded suitability basis.' },
    { id: 'intelligence', title: 'Retention, commission and claims reporting', line: 'Renewal and lapse rates, lapse reasons, commission expected against received, claim cycle times and household coverage come from the records.', why: 'The book’s value is its retention rate, and retention is measurable in advance.', example: 'Renewals contacted against renewals due, by advisor and month.' },
    { id: 'ai', title: 'Ask the book a question', line: 'Verity AI answers from your own policy, renewal, claim and commission records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about dates approaching and money owed.', example: '"Which renewals inside ninety days have no contact?" returns ninety-six with calls assigned.' },
    { id: 'communication', title: 'Client contact on the policy', line: 'Calls, notices and correspondence attach to the policy, claim or client they concern.', why: 'A renewal conversation is better for knowing what was last discussed.', example: 'The last renewal conversation visible before this one.' },
    { id: 'orders', title: 'Premium, collection and refunds', line: 'Premium collection, instalments and refunds are recorded against the policy and client.', why: 'Premium not collected is cover at risk and commission not earned.', example: 'Instalments outstanding against policies still in force.' },
    { id: 'locations', title: 'Branches and territories', line: 'Branches roll into the agency with books, advisors and reporting following the same structure.', why: 'Retention and mix vary by territory and advisor.', example: 'Retention and product mix by branch.' },
  ],

  workflowsHeading: 'A book worked ahead of its dates.',
  workflowsLede: 'These already happen. Worked as a pipeline, the book stops shrinking quietly.',
  workflows: [
    { name: 'Renewal pipeline', steps: ['Renewals due identified by date', 'Owner assigned per renewal', 'Client contacted ahead of the date with history attached', 'Cover reviewed and alternatives quoted where relevant', 'Renewal completed or lapse recorded with a reason'], note: 'A renewal worked three weeks ahead is a conversation; worked on the day it is an administrative event.' },
    { name: 'New business and suitability', steps: ['Client requirement and circumstances recorded', 'Options considered and recommendation made', 'Basis for the recommendation recorded', 'Policy placed with the insurer', 'Documents issued and stored against the policy'], note: 'The basis is the record that matters years later, and it takes a moment at the time.' },
    { name: 'Claim support', steps: ['Claim recorded against the policy and client', 'Document requirements listed with owners', 'Client documents chased with an age', 'Insurer interaction recorded', 'Settlement recorded and client informed'], note: 'A claim stalled on documents is the agency’s reputation being decided.' },
    { name: 'Commission reconciliation', steps: ['Expected commission recorded per policy at placement', 'Insurer statement received', 'Matched against expected commission by policy', 'Variances raised with the insurer', 'Settlement recorded against the insurer'], note: 'Statements are accepted far more often than they are checked.' },
    { name: 'Household review', steps: ['Policies grouped by client and household', 'Total premium and cover assembled', 'Gaps and overlaps identified', 'Review conversation assigned', 'Outcome recorded against the household'], note: 'Cross-sell to an existing household is the cheapest new business an agency can write.' },
  ],

  ai: {
    heading: 'Ask what is renewing and what is owed.',
    lede: 'Verity AI reads the same policy, renewal, claim and commission records the agency creates as it works. It answers across your book, respects permissions, and can turn an answer into calls and queries.',
    panelMeta: 'Grounded in your book records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which renewals inside ninety days have no contact recorded?',
      'What commission is unreconciled and with which insurers?',
      'Which claims are stalled on client documents?',
      'What is our lapse rate and what reasons were recorded?',
      'Which households have cover gaps across their policies?',
      'Which policies have no recorded suitability basis?',
      'What is retention by advisor and branch?',
      'Which insurers settle commission least reliably?',
      'Summarise the renewal pipeline and commission position.',
    ],
  },

  automationHeading: 'Dates and statements.',
  automationLede: 'Each runs from the agency’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A renewal date approaches', steps: ['Renewal raised with owner and client history', 'Contact task created ahead of the date', 'Escalated if uncontacted as the date nears'] },
    { trigger: 'A commission statement is received', steps: ['Matched against expected commission by policy', 'Variances raised with the insurer', 'Settlement recorded'] },
    { trigger: 'A claim document remains outstanding', steps: ['Aged against the claim', 'Client chased and the contact recorded', 'Escalated to the advisor'] },
    { trigger: 'A policy lapses', steps: ['Reason recorded', 'Win-back task assigned', 'Pattern aggregated by reason and advisor'] },
    { trigger: 'A policy is placed', steps: ['Expected commission recorded', 'Suitability basis required before completion', 'Documents stored against the policy'] },
  ],

  intelligenceHeading: 'What the principal can see.',
  intelligenceLede: 'Retention, commission and claims from the book’s own records.',
  intelligence: [
    { area: 'Retention', points: ['Renewal rate by product, advisor and branch', 'Renewals contacted against due', 'Lapse reasons recorded', 'Win-back outcomes'] },
    { area: 'Commission', points: ['Expected against received by insurer', 'Unreconciled variances and their age', 'Settlement reliability by insurer', 'Commission per advisor and product'] },
    { area: 'Claims', points: ['Claims by stage and age', 'Documents outstanding and their owners', 'Cycle time to settlement', 'Client experience at claim'] },
    { area: 'Clients', points: ['Premium and policies per household', 'Cover gaps and overlaps', 'Cross-sell conversion', 'Contact history and review cycles'] },
    { area: 'Compliance', points: ['Suitability basis recorded per policy', 'Disclosures made and stored', 'Documents complete by policy', 'Access and change history'] },
  ],
  intelligenceNote: 'Verity records the agency’s book and process. Insurer systems and statutory filings continue as they are.',

  rolesHeading: 'One book, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Principal', question: 'Is the book growing or shrinking?', focus: 'Renewal and lapse rates, lapse reasons, commission reconciliation, retention by advisor.' },
    { role: 'Advisor', question: 'Who am I calling this week?', focus: 'Renewals due with history, claims in progress, household gaps, contact outstanding.' },
    { role: 'Claims support', question: 'What is stalled?', focus: 'Claims by stage, documents outstanding, insurer responses, client updates due.' },
    { role: 'Accounts', question: 'What are we owed?', focus: 'Expected against received commission, variances by insurer, premium collection, refunds.' },
  ],

  useCasesHeading: 'What insurance agencies use Verity for',
  useCases: [
    { name: 'Renewal pipeline', body: 'Renewals worked as a dated pipeline with owners and contact history rather than processed as notices arrive.' },
    { name: 'Commission reconciliation', body: 'Expected commission recorded at placement and matched against insurer statements, so variances are raised rather than accepted.' },
    { name: 'Claim document chasing', body: 'Claim requirements as checklist items with an age, at the moment the client is judging the agency most.' },
    { name: 'Suitability records', body: 'Recommendation and basis recorded at sale, available years later when it is needed.' },
    { name: 'Household view', body: 'Policies grouped by household, making cover gaps and cross-sell visible.' },
    { name: 'Lapse reason capture', body: 'Reasons recorded at lapse, turning attrition into an addressable pattern.' },
    { name: 'Asking about the book', body: 'Plain-language questions across renewals, claims, commission and households, with calls assigned in the same step.' },
  ],

  migration: 'Insurer portals and statutory arrangements continue and are mapped during implementation. Clients, policies with renewal dates, commission bases, open claims and documents are brought across.',

  faqHeading: 'Questions agencies ask',
  faqs: [
    ['What can AI software do for an insurance agency?', 'Verity AI answers questions from your own policy, renewal, claim and commission records: which renewals inside ninety days have no contact, what commission is unreconciled, which claims are stalled on documents, what your lapse reasons are. Each answer can become a call or a query.'],
    ['Why work renewals as a pipeline?', 'Because a lapse is the loss of a client you already had and already paid to acquire. A renewal worked three weeks ahead is a conversation; the same renewal handled on the date is an administrative event with a much worse outcome.'],
    ['Can it reconcile commission?', 'Expected commission is recorded per policy at placement and matched against insurer statements, so adjustments and shortfalls are raised as variances rather than accepted because the statement arrived net.'],
    ['How does it help with claims?', 'Claims carry document checklists with owners and ages, so paperwork the client has not sent is chased rather than waited for — which matters because the claim is when the client forms their view of the agency.'],
    ['Does it keep suitability records?', 'The recommendation and the basis for it are recorded against the policy at the point the policy is sold, which takes a moment then and is the record that matters years later.'],
    ['Can we see whole households?', 'Policies attach to a client and household record, so total premium, cover gaps and overlaps are visible — and cross-sell to an existing household is the cheapest business an agency writes.'],
    ['Does Verity replace insurer systems?', 'No. Insurer portals and statutory arrangements continue and are mapped during implementation. Verity holds the book, the renewal pipeline, claims support, commission reconciliation and the records behind them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the book and commission arrangements, configuration, migration of clients, policies and renewal dates, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the renewals nobody has called.',
  ctaLede: 'Every one of them is a client you already have. Tell us how renewals are worked today.',

  related: ['financial-advisors', 'accounting-firms', 'ca-firms', 'law-firms', 'real-estate-agencies', 'consulting-firms'],
};
