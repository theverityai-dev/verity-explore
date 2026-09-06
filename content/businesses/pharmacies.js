export default {
  slug: 'pharmacies',
  status: 'published',
  plural: 'pharmacies',
  subject: 'pharmacy',

  seo: {
    title: 'AI business management software for pharmacies | Verity',
    description:
      'Verity connects batch and expiry control, substitution, near-expiry returns, refill patterns, credit accounts and supplier schemes into one operational system.',
    keywords: [
      'AI software for pharmacies',
      'pharmacy management software',
      'batch expiry and returns tracking',
      'pharmacy inventory and refill software',
      'chemist shop billing and credit software',
    ],
  },

  hero: {
    eyebrow: 'Verity for pharmacies',
    headline: 'Thousands of batches, each with a date, and a return window that closes before it.',
    lede:
      'A pharmacy’s margin is decided by what it returns in time and what it stocks against actual demand. Verity tracks both at batch level, alongside the refill patterns nobody counts.',
    note: 'Verity runs the shop. Prescription validity and dispensing remain your pharmacist’s responsibility.',
    panel: {
      title: 'Pharmacy',
      meta: 'All counters · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹18.4 L', note: '4,120 bills' },
        { label: 'Expiring 90 days', value: '₹2.8 L', note: '640 units' },
        { label: 'Returnable now', value: '₹1.9 L', note: 'inside supplier windows' },
        { label: 'Credit outstanding', value: '₹4.6 L', note: '82 accounts' },
      ],
      rows: [
        { name: '₹1.9 L returnable with windows closing in 30 days', meta: 'Four distributors', active: true },
        { name: '38 chronic patients past their expected refill date', meta: 'Regular monthly buyers', active: true },
        { name: 'Fast-moving items out of stock at two counters', meta: 'Substituted or lost', active: true },
        { name: 'Scheme claim unfiled against a distributor', meta: '₹64,000 · window closes Friday', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own pharmacy in this shape.',
    },
  },

  overview: {
    heading: 'A pharmacy sells thousands of items whose value expires on a date.',
    paragraphs: [
      'The stock problem in a pharmacy is unlike other retail. Items are identified by batch, each batch carries an expiry date, and a batch that passes its date is a total loss. The only thing that makes carrying that breadth affordable is that most of it can be returned to the distributor within a window — and that window closes well before the expiry date. A pharmacy that discovers short-dated stock at expiry has already lost the money it could have recovered.',
      'The second distinctive pressure is that much of the demand is chronic and therefore predictable. A patient on long-term medication buys the same items on roughly the same cycle. That makes them the most forecastable customers in retail and the least tracked: a chronic patient who has not returned is either well, gone elsewhere, or has stopped taking their medication, and the pharmacy knows none of the three because nobody counts refills.',
      'The third is substitution. When an item is out of stock, the sale is either substituted or lost, and neither outcome leaves a record of the original demand. So the stocking decision that caused it never gets corrected.',
      'The fourth is credit. Pharmacies extend credit to households and to institutions, and the exposure grows quietly against thin margins.',
      'Verity holds the batch, its expiry and return eligibility, the refill pattern, the substitution and the credit position as one set of records.',
    ],
  },

  terminology: [
    ['Items, batches, expiry, schedules', 'Inventory'],
    ['Bills, returns, substitutions', 'Orders'],
    ['Patients, households, institutions', 'Relationships'],
    ['Distributors, schemes, return windows', 'Suppliers'],
    ['Pharmacists, counter staff', 'People'],
    ['Credit limits, returns approval, write-offs', 'Workflows'],
    ['Counters, stores, branches', 'Locations'],
  ],

  challengesHeading: 'The money is lost on dates.',
  challengesLede:
    'Almost every pharmacy loss is a date that passed — a return window, an expiry, a refill, a credit term.',
  challenges: [
    {
      problem: 'Return windows close before anyone looks',
      detail:
        'Stock is returnable to the distributor for a limited period that varies by supplier, and it is tracked in one person’s memory across dozens of them.',
      outcome:
        'Return eligibility sits on the batch against the distributor’s terms, so returnable value and closing windows are current.',
    },
    {
      problem: 'Expiry is discovered at the shelf',
      detail:
        'Short-dated stock is found during a manual check, usually after the return window has already closed.',
      outcome:
        'Expiry sits on the batch, so exposure surfaces by value and counter while a return is still possible.',
    },
    {
      problem: 'Chronic patients stop returning and nobody notices',
      detail:
        'A patient buying the same medication monthly for two years stops, and the pharmacy has no way of knowing.',
      outcome:
        'Refill cycles are derived from purchase history, so patients past their expected refill become a list.',
    },
    {
      problem: 'Out-of-stock demand leaves no record',
      detail:
        'An item is unavailable, the sale is substituted or lost, and the original demand never informs the next order.',
      outcome:
        'Unfulfilled requests and substitutions are recorded, so stocking decisions are corrected by evidence.',
    },
    {
      problem: 'Credit grows quietly against thin margins',
      detail:
        'Household and institutional credit accumulates without ageing, and the exposure is sized only when cash is short.',
      outcome:
        'Balances age automatically on the account with the contact history attached.',
    },
    {
      problem: 'Scheme support is left unclaimed',
      detail:
        'Distributor schemes and margins are claimed from purchases within windows nobody assembles in time.',
      outcome:
        'Scheme terms are recorded against the purchases they apply to, so claims are built from records.',
    },
  ],

  modulesLede:
    'One system across batches, expiry, refills, credit and distributors.',
  modules: [
    {
      id: 'inventory',
      title: 'Items, batches and expiry',
      line:
        'Stock is held per batch with expiry, distributor, cost, schedule classification, counter and return eligibility.',
      why:
        'The batch is the unit that expires and the unit that can be returned, so it is the only useful unit of stock here.',
      example:
        'One point nine lakh of returnable stock with windows closing inside thirty days, by distributor.',
    },
    {
      id: 'orders',
      title: 'Bills, substitutions and returns',
      line:
        'Transactions record their items and batches, the customer, the counter, any substitution made and any request that could not be filled.',
      why:
        'Recording what could not be supplied is the only way an out-of-stock ever improves the next order.',
      example:
        'Fast-moving items out of stock at two counters, with the substitutions and lost requests counted.',
    },
    {
      id: 'relationships',
      title: 'Patients, households and institutions',
      line:
        'Customers are records with their purchase history, derived refill cycles, credit position and contact history.',
      why:
        'Chronic demand is the most predictable revenue in retail pharmacy and the least managed.',
      example:
        'Thirty-eight regular monthly buyers past their expected refill date.',
    },
    {
      id: 'suppliers',
      title: 'Distributors, schemes and return terms',
      line:
        'Suppliers are relationships with their orders, delivery reliability, return windows, scheme terms, claims and balances.',
      why:
        'Return terms and scheme support are where pharmacy margin is actually decided.',
      example:
        'A scheme worth sixty-four thousand assembled from qualifying purchases before Friday.',
    },
    {
      id: 'workflows',
      title: 'Credit, returns and write-offs',
      line:
        'Credit beyond limit, returns to distributor, expiry write-offs and adjustments move through approval steps with recorded reasons.',
      why:
        'These are frequent, time-bound decisions taken at a busy counter, and they decide the year.',
      example:
        'A return raised against a distributor inside its window, approved and matched to the credit note received.',
    },
    {
      id: 'people',
      title: 'Pharmacists and counter staff',
      line:
        'Staff are modelled once, and every bill, substitution, credit entry and adjustment carries who made it.',
      why:
        'Substitution decisions and credit entries both need attribution in a business with regulated stock.',
      example:
        'Substitutions by item and staff member, from the transactions themselves.',
    },
    {
      id: 'records',
      title: 'Purchase documents and scheme circulars',
      line:
        'Invoices, scheme circulars, credit notes and distributor agreements attach to the supplier or transaction they belong to.',
      why:
        'Claims and returns are settled by documents that must be produced within a window.',
      example:
        'A disputed claim resolved by the circular it was raised under and the purchases it covers.',
    },
    {
      id: 'intelligence',
      title: 'Expiry, refill and margin reporting',
      line:
        'Expiry exposure and returnable value, refill adherence, substitution rates, scheme recovery, credit ageing and counter comparison come from the operational records.',
      why:
        'Every important pharmacy number is date-bound, and monthly reporting arrives after the dates have passed.',
      example:
        'Returnable value with closing windows, current rather than reconstructed at a stock check.',
    },
    {
      id: 'ai',
      title: 'Ask the pharmacy a question',
      line:
        'Verity AI answers from your own batch, sales, customer and distributor records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking are about dates and about specific customers, both laborious to look up manually.',
      example:
        '"What is returnable with windows closing this month?" returns the list by distributor, with returns raised.',
    },
    {
      id: 'control',
      title: 'Who can adjust, discount and extend credit',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Regulated stock and extended credit both need attribution on every movement.',
      example:
        'Every stock adjustment and credit extension carries the person, the reason and the time.',
    },
    {
      id: 'locations',
      title: 'Counters, stores and branches',
      line:
        'Locations roll into the business, with batch-level stock, permissions and reporting following the same structure.',
      why:
        'Branches hold different batches with different expiry, and transfers between them are how near-expiry stock gets used.',
      example:
        'Near-expiry stock at one branch matched against demand at another.',
    },
    {
      id: 'communication',
      title: 'Refill reminders and account notes',
      line:
        'Notes, reminders and activity attach to the customer or account they concern.',
      why:
        'A refill conversation is useful only if the pharmacy knows what was already said and when.',
      example:
        'A note that a patient changed medication, so no reminder is sent for the old one.',
    },
  ],

  workflowsHeading: 'Dates, batches and the people who come back.',
  workflowsLede:
    'These already happen. Recorded at batch level, the recoverable money becomes visible in time.',
  workflows: [
    {
      name: 'Purchase to shelf',
      steps: [
        'Order raised against the distributor',
        'Delivery received and checked item by item',
        'Each batch recorded with expiry, cost and counter',
        'Scheme and return terms attached to the purchase',
        'Return eligibility window calculated per batch',
      ],
      note:
        'Capturing expiry and return terms at receipt is what makes recovery possible months later.',
    },
    {
      name: 'Near-expiry return',
      steps: [
        'Batches approaching their return window identified by distributor',
        'Movement history reviewed to decide return or transfer',
        'Return raised and approved against the distributor terms',
        'Stock dispatched and the return recorded',
        'Credit note received and applied to the balance',
      ],
      note:
        'The window closes before the expiry date, which is why late discovery costs full value.',
    },
    {
      name: 'Refill follow-up',
      steps: [
        'Refill cycle derived from a customer’s purchase history',
        'Customers past their expected refill identified',
        'Contact history checked to avoid duplicate reminders',
        'Follow-up assigned to the counter that serves them',
        'Outcome recorded on the customer record',
      ],
      note:
        'Chronic buyers are the most predictable revenue a pharmacy has, and the least followed up.',
    },
    {
      name: 'Out-of-stock and substitution',
      steps: [
        'Requested item found unavailable',
        'Substitution offered and recorded, or the request logged as unfilled',
        'Availability checked at other branches',
        'Demand recorded against the original item',
        'Reorder informed by unfilled demand rather than by sales alone',
      ],
      note:
        'Sales data alone systematically understates demand for items you keep running out of.',
    },
    {
      name: 'Credit and collection',
      steps: [
        'Credit sale recorded against the household or institution',
        'Approval raised where it exceeds the agreed limit',
        'Balance aged automatically from the bill date',
        'Collection follow-up assigned as terms pass',
        'Payment applied and the position updated',
      ],
      note:
        'Ageing from the bill date is what stops institutional credit growing unnoticed.',
    },
    {
      name: 'Scheme claim',
      steps: [
        'Scheme terms recorded against purchases at receipt',
        'Qualifying purchases matched to the terms',
        'Claim assembled with the circular attached',
        'Approval routed and the claim filed before the window',
        'Settlement recorded against the distributor',
      ],
      note:
        'The records exist; assembling them by hand at the deadline is what loses the claim.',
    },
  ],

  ai: {
    heading: 'Ask about dates and about people.',
    lede:
      'Verity AI reads the same batch, sales, customer and distributor records the pharmacy creates as it trades. It answers from your own shop, respects permissions, and can turn an answer into returns and follow-ups.',
    panelMeta: 'Grounded in your pharmacy records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical or dispensing advice.',
    questions: [
      'What is returnable now, and which windows close within thirty days?',
      'What is expiring within ninety days, and at which counter?',
      'Which regular customers are past their expected refill date?',
      'Which items were requested and could not be supplied this month?',
      'Which distributors have unclaimed scheme support?',
      'What is outstanding on credit accounts, and for how long?',
      'Which near-expiry batches could be transferred to a branch that will use them?',
      'Which items are we substituting most often?',
      'Summarise expiry exposure and returnable value.',
    ],
  },

  automationHeading: 'The windows that close quietly.',
  automationLede:
    'Each runs from the batch and customer records at the point the condition is met.',
  automations: [
    {
      trigger: 'A batch approaches its return window',
      steps: [
        'Batch flagged with value, counter and closing date',
        'Return or transfer decision assigned',
        'Return raised, dispatched and the credit tracked',
      ],
    },
    {
      trigger: 'A batch approaches expiry with no return eligibility',
      steps: [
        'Batch flagged with value and remaining life',
        'Transfer or write-off decision raised',
        'Outcome recorded against the batch',
      ],
    },
    {
      trigger: 'A customer passes their expected refill date',
      steps: [
        'Customer flagged with their purchase pattern',
        'Contact history checked for prior reminders',
        'Follow-up assigned to the serving counter',
      ],
    },
    {
      trigger: 'A requested item cannot be supplied',
      steps: [
        'Unfilled request recorded against the item',
        'Availability checked at other branches',
        'Reorder informed by the recorded demand',
      ],
    },
    {
      trigger: 'A credit balance passes its terms',
      steps: [
        'Balance aged on the account record',
        'Collection follow-up assigned',
        'Escalated to the owner past the second threshold',
      ],
    },
    {
      trigger: 'A scheme window approaches its close',
      steps: [
        'Qualifying purchases matched to the terms',
        'Claim assembled with the circular attached',
        'Filing task assigned with the deadline',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see about dates and demand.',
  intelligenceLede:
    'Drawn from batch-level records the pharmacy creates as it trades.',
  intelligence: [
    {
      area: 'Expiry',
      points: [
        'Value expiring in thirty, sixty and ninety days',
        'Returnable value with closing windows by distributor',
        'Write-offs taken and their value',
        'Expiry concentration by category and counter',
      ],
    },
    {
      area: 'Demand',
      points: [
        'Items requested and not supplied',
        'Substitution rate by item',
        'Movement by item and category',
        'Cover in days against recent movement',
      ],
    },
    {
      area: 'Customers',
      points: [
        'Refill cycles and adherence to them',
        'Customers past their expected refill',
        'Purchase value by household and institution',
        'Credit position and ageing',
      ],
    },
    {
      area: 'Distributors',
      points: [
        'Scheme support earned, claimed and settled',
        'Return volume and credit notes received',
        'Delivery reliability and fill rate',
        'Outstanding payable',
      ],
    },
    {
      area: 'Counters',
      points: [
        'Sales and margin by counter and branch',
        'Substitutions and adjustments by staff member',
        'Near-expiry stock by location',
        'Transfers between branches',
      ],
    },
  ],
  intelligenceNote:
    'Verity records the commercial and stock operation. Prescription validity, dispensing decisions and clinical judgement remain with the pharmacist.',

  rolesHeading: 'One pharmacy, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What am I about to lose to a date?',
      focus: 'Returnable value and closing windows, expiry exposure, scheme recovery, credit ageing.',
    },
    {
      role: 'Pharmacist in charge',
      question: 'What is short and what is expiring?',
      focus: 'Items below cover, unfilled requests, near-expiry batches, transfers available.',
    },
    {
      role: 'Counter staff',
      question: 'What does this customer usually buy?',
      focus: 'Purchase history and refill pattern, credit position, availability and substitutes.',
    },
    {
      role: 'Accounts',
      question: 'What is owed and what is claimable?',
      focus: 'Credit balances and ageing, distributor payables, scheme claims outstanding, credit notes received.',
    },
  ],

  useCasesHeading: 'What pharmacies use Verity for',
  useCases: [
    {
      name: 'Return window tracking',
      body: 'Return eligibility on the batch against each distributor’s terms, so returnable value and closing dates are current rather than held in memory.',
    },
    {
      name: 'Expiry exposure',
      body: 'Expiry on the batch with value by counter, so short-dated stock surfaces while a return or transfer is still possible.',
    },
    {
      name: 'Refill follow-up',
      body: 'Refill cycles derived from purchase history, so regular customers who stop returning become a worked list.',
    },
    {
      name: 'Unfilled demand capture',
      body: 'Requests that could not be supplied recorded against the item, so stocking is corrected by demand rather than by sales alone.',
    },
    {
      name: 'Credit ageing',
      body: 'Household and institutional balances aged from the bill date with contact history, so exposure does not grow unnoticed.',
    },
    {
      name: 'Scheme claim recovery',
      body: 'Distributor scheme terms recorded against qualifying purchases, so claims are assembled before their windows close.',
    },
    {
      name: 'Branch transfers',
      body: 'Near-expiry stock at one branch matched against demand at another, so it is used rather than written off.',
    },
    {
      name: 'Asking about dates',
      body: 'Plain-language questions across batches, expiry, refills and credit, with returns and follow-ups raised in the same step.',
    },
  ],

  migration:
    'Your billing software and distributor arrangements continue to run and are mapped during implementation. Stock is brought across at batch level with expiry where records allow, along with customers, credit balances and scheme terms.',

  faqHeading: 'Questions pharmacy owners ask',
  faqs: [
    [
      'Does Verity handle dispensing or prescription validity?',
      'No. Dispensing decisions, prescription validity and clinical judgement remain with your pharmacist and your existing systems. Verity runs the commercial and stock operation — batches, expiry, returns, refills, credit, distributors and reporting.',
    ],
    [
      'What can AI software do for a pharmacy?',
      'Verity AI answers questions from your own batch, sales, customer and distributor records: what is returnable now and which windows close within thirty days, what is expiring and where, which regular customers are past their expected refill, which items could not be supplied. Each answer can become a return or a follow-up.',
    ],
    [
      'Can Verity track batches and expiry?',
      'Yes, and that is the foundation. Stock is held per batch with expiry, distributor, cost and return eligibility, because the batch is the unit that expires and the unit that can be returned.',
    ],
    [
      'How does it help with returns to distributors?',
      'Return eligibility sits on the batch against each distributor’s terms, so returnable value and closing windows are current. The window generally closes well before the expiry date, which is why discovering short-dated stock at a shelf check costs the full value.',
    ],
    [
      'Can it help with chronic patients?',
      'Refill cycles are derived from purchase history, so customers past their expected refill become a list with contact history attached — which is the most predictable revenue in retail pharmacy and the least followed up.',
    ],
    [
      'Does it record demand we could not fill?',
      'Requests that could not be supplied and substitutions made are both recorded against the original item, so reordering is corrected by actual demand rather than by sales data that systematically understates items you keep running out of.',
    ],
    [
      'Can it manage credit accounts?',
      'Household and institutional balances age automatically from the bill date with contact history recorded, and credit beyond an agreed limit is an approval rather than a decision taken at a busy counter.',
    ],
    [
      'Does it work across branches?',
      'Counters, stores and branches are locations holding their own batches, so near-expiry stock at one can be matched against demand at another and transferred rather than written off.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the pharmacy trades, configuration of distributor return and scheme terms, migration of stock at batch level, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with what is still returnable.',
  ctaLede:
    'In most pharmacies it is a larger number than expected and some of it stops being returnable this month. Tell us how batches are tracked today.',

  related: ['medical-distributors', 'diagnostic-labs', 'clinics', 'hospitals', 'cosmetics-stores', 'grocery-stores'],
};
