export default {
  slug: 'grocery-stores',
  status: 'published',
  plural: 'grocery stores',
  subject: 'grocery store',

  seo: {
    title: 'AI business management software for grocery stores | Verity',
    description:
      'Verity connects daily stock, customer credit, home delivery, local suppliers and takings into one system built for a shop the owner runs personally.',
    keywords: [
      'AI software for grocery stores',
      'grocery store management software',
      'kirana store billing and khata software',
      'customer credit tracking for shops',
      'local grocery inventory software',
    ],
  },

  hero: {
    eyebrow: 'Verity for grocery stores',
    headline: 'The khata is the most important record in the shop and the least protected.',
    lede:
      'Credit to regulars, daily deliveries, loose stock and local suppliers all run on memory and a notebook. Verity holds them as records without asking anyone to become an administrator.',
    note: 'Sized for a shop the owner runs personally, not for a chain.',
    panel: {
      title: 'Shop',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Takings today', value: '₹48,600', note: '164 bills' },
        { label: 'Credit outstanding', value: '₹2.14 L', note: 'across 78 households' },
        { label: 'Beyond 30 days', value: '₹64,000', note: '19 households' },
        { label: 'Delivery orders', value: '23', note: '6 not yet dispatched' },
      ],
      rows: [
        { name: '19 households past 30 days on credit', meta: 'Oldest ₹8,400 · since July', active: true },
        { name: '6 delivery orders still undispatched', meta: 'Two promised before 12:00', active: true },
        { name: 'Staples below reorder before the weekend', meta: '9 lines · local supplier delivers Friday', active: true },
        { name: 'Loose stock variance on two items', meta: 'Since last weighing check', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own shop in this shape.',
    },
  },

  overview: {
    heading: 'A grocery store runs on trust, and trust is not a record.',
    paragraphs: [
      'The economics of a neighbourhood grocery are simple and unforgiving. Margins are thin, volumes are steady, and the business depends almost entirely on households that come back every week. What makes it different from larger retail is that a substantial part of the trade is on credit, extended personally, tracked in a notebook, and settled monthly on the basis of what both sides remember.',
      'That credit book is the single most valuable and most fragile asset in the shop. It represents real money owed by people the owner knows personally, which is exactly what makes chasing it uncomfortable and inconsistent. A household that has quietly drifted from settling monthly to settling every third month is usually noticed long after the exposure has grown.',
      'The second difference is loose stock. Grains, pulses, oils and produce are bought in bulk and sold by weight, so the relationship between what was purchased and what was sold is never exact. Some of the gap is legitimate and some is not, and without recorded movement there is no way to tell which.',
      'The third is delivery. Home delivery is now a routine part of a neighbourhood shop and is coordinated entirely by phone. Orders taken verbally, dispatched by whoever is free, and confirmed by nobody.',
      'Verity holds the household, the credit position, the stock, the delivery and the supplier as records created in the ordinary course of the day. The shop does not acquire an administrator; the day it already works produces the picture.',
    ],
  },

  terminology: [
    ['Staples, loose stock, packaged goods', 'Inventory'],
    ['Bills, delivery orders, returns', 'Orders'],
    ['Households, regulars, credit customers', 'Relationships'],
    ['Local suppliers, mandi, distributors', 'Suppliers'],
    ['Shop staff, delivery boys', 'People'],
    ['Credit limits, settlements, write-offs', 'Workflows'],
    ['Shop floor, godown, delivery route', 'Locations'],
  ],

  challengesHeading: 'The problems are personal, which is why they persist.',
  challengesLede:
    'Almost every difficulty in a grocery store involves someone the owner knows, which makes it easier to postpone than to address.',
  challenges: [
    {
      problem: 'The credit book is memory with a notebook attached',
      detail:
        'What a household owes, how long it has been owed and what was already said about it live in one book and one head.',
      outcome:
        'Credit sits on the household record with automatic ageing and the history of every conversation, so settlement follows the record rather than the recollection.',
    },
    {
      problem: 'Exposure grows without anyone deciding it should',
      detail:
        'A household that settled monthly begins settling quarterly. Nobody made a decision to extend more credit; it simply happened.',
      outcome:
        'Balances are aged against terms, so a household drifting past its usual settlement pattern surfaces while the amount is still small.',
    },
    {
      problem: 'Loose stock never reconciles',
      detail:
        'Bulk purchases sold by weight produce a gap between what was bought and what was billed, and no way to separate legitimate loss from the rest.',
      outcome:
        'Purchase, sale and recorded wastage are all movements against the item, so the unexplained portion is isolated rather than assumed.',
    },
    {
      problem: 'Delivery orders are taken and lost',
      detail:
        'An order phoned in during a rush is remembered by one person, dispatched by another, and confirmed by nobody.',
      outcome:
        'A delivery is work with a household, a promised time, an owner and a state, so an undispatched order is visible before the promise is broken.',
    },
    {
      problem: 'Reordering happens after the shortage',
      detail:
        'Staples run out on a Saturday because the local supplier delivers on Friday and nobody checked on Thursday.',
      outcome:
        'Reorder points are checked against movement and against supplier delivery days, so the check happens when it can still change the outcome.',
    },
    {
      problem: 'Nobody is available to maintain a system',
      detail:
        'The owner is behind the counter. Any software that requires separate data entry will be abandoned within a month.',
      outcome:
        'The records that produce the reporting are created by billing the sale and receiving the delivery, which the shop does anyway.',
    },
  ],

  modulesLede:
    'One system, sized for a shop without an office. These are the parts a grocery store works with.',
  modules: [
    {
      id: 'relationships',
      title: 'Households and their credit',
      line:
        'Each household is a record with its purchase history, credit balance, ageing, settlement pattern and the history of every conversation about it.',
      why:
        'The credit book is the shop’s largest asset and its most informal record. Making it a record is the single highest-value change available.',
      example:
        'A household that settled on the first of every month until June and has now reached two lakh across three months is visible as a pattern, not as a shock.',
    },
    {
      id: 'inventory',
      title: 'Packaged and loose stock',
      line:
        'Stock is held with supplier, cost and reorder point, and moves as it is received, sold, weighed out, returned or written off.',
      why:
        'Loose stock is where a grocery store’s unexplained loss lives, and it is only separable from legitimate wastage if both are recorded.',
      example:
        'Fifty kilos received, forty-six billed, two recorded as spillage. The remaining two kilos are the number worth looking at.',
    },
    {
      id: 'orders',
      title: 'Bills, delivery orders and returns',
      line:
        'Transactions record their lines, the household, the staff member and the stock they moved; delivery orders carry a promised time and a state.',
      why:
        'Delivery is now routine and is the part of a grocery business most often coordinated entirely by memory.',
      example:
        'Twenty-three delivery orders today, six undispatched, two of them promised before noon and visible as such.',
    },
    {
      id: 'work',
      title: 'Deliveries, follow-ups and daily tasks',
      line:
        'Deliveries, credit follow-ups and opening or closing checks are work with an owner, a due time and a state.',
      why:
        'The things that go wrong in a small shop are things that did not happen, and nothing that is not a record can be seen not to have happened.',
      example:
        'A credit follow-up assigned rather than intended is the difference between a settled account and an awkward conversation next quarter.',
    },
    {
      id: 'suppliers',
      title: 'Local suppliers and distributors',
      line:
        'Suppliers are relationships with their delivery days, orders, price movement and outstanding balances.',
      why:
        'Grocery purchasing is frequent, informal and unexamined, so price creep on staples passes through to a thin margin unnoticed.',
      example:
        'A staple whose cost has moved three times this year, against a retail price that has moved once.',
    },
    {
      id: 'people',
      title: 'Shop staff and delivery riders',
      line:
        'Staff are modelled once, and every bill, delivery, credit entry and stock adjustment carries who made it.',
      why:
        'A small team still needs attribution, particularly on credit entries and stock adjustments.',
      example:
        'Deliveries completed and credit collected by person, from the day’s own records.',
    },
    {
      id: 'workflows',
      title: 'Credit limits, settlements and write-offs',
      line:
        'Extending credit beyond a limit, writing off a balance and adjusting stock move through approval steps with a recorded reason.',
      why:
        'These are decisions the owner makes under social pressure at the counter, and a record protects the decision rather than second-guessing it.',
      example:
        'Credit beyond a household’s usual limit becomes a deliberate, recorded decision rather than a drift.',
    },
    {
      id: 'records',
      title: 'Bills, agreements and settlement history',
      line:
        'Documents and settlement history attach to the household or supplier they concern.',
      why:
        'A disputed balance is settled by what was billed and what was paid, not by two memories of the same month.',
      example:
        'A household queries a figure. The bills and the payments against them are on one record.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from the day’s own records',
      line:
        'Takings, credit ageing, stock movement, delivery completion and supplier cost movement come from the transactions themselves.',
      why:
        'A grocery owner usually knows the day’s takings and the rough size of the credit book, and nothing more precise.',
      example:
        'Credit outstanding by ageing band, current, rather than estimated at the end of a bad month.',
    },
    {
      id: 'ai',
      title: 'Ask the shop a question',
      line:
        'Verity AI answers from your own household, stock, delivery and supplier records, only shows what the person asking can see, and can create assigned follow-ups.',
      why:
        'The owner’s real questions are asked while the shop is open, and need an answer rather than a report to prepare.',
      example:
        '"Which households are past thirty days and by how much?" returns nineteen, and one instruction assigns the follow-ups.',
    },
    {
      id: 'communication',
      title: 'What was said about a balance',
      line:
        'Notes, reminders and activity attach to the household or order they concern.',
      why:
        'Credit conversations are the ones most easily forgotten and most awkward to repeat unnecessarily.',
      example:
        'A note that a household asked for time until the tenth sits on their record, so nobody chases them on the fifth.',
    },
    {
      id: 'control',
      title: 'Who can extend credit and adjust stock',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Credit entries and stock adjustments are the two places a small shop loses money quietly.',
      example:
        'Staff can bill and record deliveries; extending credit past a limit requires the owner, and the record shows it.',
    },
  ],

  workflowsHeading: 'The day the shop already works.',
  workflowsLede:
    'None of these ask for extra data entry. They are what billing, delivering and receiving already produce.',
  workflows: [
    {
      name: 'Sale on credit',
      steps: [
        'Bill recorded against the household',
        'Stock deducted as the sale completes',
        'Balance added to the household’s credit position',
        'Approval raised if the balance passes the agreed limit',
        'Ageing updated automatically from the bill date',
      ],
      note:
        'Credit becomes a position with an age rather than a line in a notebook.',
    },
    {
      name: 'Monthly settlement',
      steps: [
        'Households due for settlement identified by pattern',
        'Statement assembled from the bills of the period',
        'Follow-up assigned with the previous conversation attached',
        'Payment received and applied against the bills',
        'Remaining balance and ageing updated',
      ],
      note:
        'Chasing works from a record of what was already said, which makes the conversation shorter and less awkward.',
    },
    {
      name: 'Home delivery',
      steps: [
        'Order taken and recorded against the household',
        'Promised time set on the order',
        'Items picked and stock deducted',
        'Delivery assigned to a rider',
        'Completion or failure recorded against the order',
        'Payment or credit applied to the household',
      ],
      note:
        'An order with a promised time and an owner cannot be quietly forgotten in a rush.',
    },
    {
      name: 'Loose stock reconciliation',
      steps: [
        'Bulk purchase recorded with weight and cost',
        'Sales by weight deducted as they are billed',
        'Spillage and wastage recorded as movement with a reason',
        'Remaining gap isolated as unexplained',
        'Pattern by item reviewed over time',
      ],
      note:
        'Legitimate loss and unexplained loss stop being the same number.',
    },
    {
      name: 'Replenishment against delivery days',
      steps: [
        'Reorder points checked against recent movement',
        'Shortfalls matched to each supplier’s delivery day',
        'Order placed in time for the next delivery',
        'Receipt checked against the order',
        'Cost movement compared with current selling price',
      ],
      note:
        'Checking on Thursday for a Friday delivery is what prevents a Saturday shortage.',
    },
    {
      name: 'Household gone quiet',
      steps: [
        'Households whose purchase frequency has dropped identified',
        'Purchase history and any credit dispute reviewed',
        'Follow-up assigned',
        'Outcome recorded on the household record',
      ],
      note:
        'A regular household lost to a competitor is expensive and rarely noticed at the time.',
    },
  ],

  ai: {
    heading: 'Ask the shop, not the notebook.',
    lede:
      'Verity AI reads the same household, stock, delivery and supplier records the day produces. It answers from your own shop, only shows what the person asking can see, and can turn the answer into follow-ups.',
    panelMeta: 'Grounded in your shop records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which households are past thirty days, and by how much?',
      'How much credit is outstanding in total, and how is it ageing?',
      'Which households have changed from monthly to quarterly settlement?',
      'Which delivery orders are still undispatched?',
      'Which staples will run out before the next supplier delivery?',
      'Which loose items have the largest unexplained gap this month?',
      'Which regular households have stopped buying?',
      'Which supplier costs have risen without a price change on our side?',
      'Summarise today’s takings and credit position.',
    ],
  },

  automationHeading: 'The follow-ups nobody enjoys making.',
  automationLede:
    'Each runs from the shop’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A household balance passes its usual settlement period',
      steps: [
        'Balance aged on the household record',
        'Follow-up assigned with the previous conversation attached',
        'Escalated to the owner past the second threshold',
      ],
    },
    {
      trigger: 'Credit would exceed the agreed limit',
      steps: [
        'Sale held at the approval step',
        'Owner notified with the balance and ageing attached',
        'Decision recorded against the household',
      ],
    },
    {
      trigger: 'A delivery order passes its promised time',
      steps: [
        'Order flagged as overdue',
        'Assignment task raised for whoever is free',
        'Outcome recorded against the order',
      ],
    },
    {
      trigger: 'A staple falls below reorder before a delivery day',
      steps: [
        'Shortfall flagged against the supplier’s next delivery',
        'Order raised in time to be included',
        'Receipt checked against the order',
      ],
    },
    {
      trigger: 'Loose stock variance passes tolerance',
      steps: [
        'Gap isolated from recorded wastage',
        'Check task raised against the item',
        'Pattern surfaced if it repeats',
      ],
    },
    {
      trigger: 'A regular household goes quiet',
      steps: [
        'Household flagged after a defined period without a bill',
        'Follow-up assigned',
        'Outcome recorded on the record',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see without leaving the counter.',
  intelligenceLede:
    'All of it comes from billing, delivering and receiving, which the shop does anyway.',
  intelligence: [
    {
      area: 'Credit',
      points: [
        'Outstanding by household with ageing bands',
        'Households drifting past their settlement pattern',
        'Exposure against agreed limits',
        'Collection outcomes and write-offs',
      ],
    },
    {
      area: 'Takings',
      points: [
        'Daily and weekly takings',
        'Cash against credit sales',
        'Average bill value',
        'Comparison against the same period historically',
      ],
    },
    {
      area: 'Stock',
      points: [
        'Lines below reorder against supplier delivery days',
        'Loose stock gap between purchase, sale and wastage',
        'Slow-moving packaged goods',
        'Cost movement on staples',
      ],
    },
    {
      area: 'Households',
      points: [
        'Purchase frequency and basket value',
        'Regulars whose frequency has dropped',
        'Credit versus cash behaviour',
        'Delivery usage by household',
      ],
    },
    {
      area: 'Delivery',
      points: [
        'Orders taken, dispatched and completed',
        'Orders past their promised time',
        'Delivery volume by rider',
        'Failed deliveries and their reasons',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Cost movement on repeat purchases',
        'Delivery reliability against expected days',
        'Short deliveries and returns',
        'Outstanding payable',
      ],
    },
  ],
  intelligenceNote:
    'The shop does not acquire an administrator. Recording the bill and the delivery is what produces all of this.',

  rolesHeading: 'A small shop still has different jobs.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they actually need.',
  roles: [
    {
      role: 'Owner',
      question: 'How much is out, and with whom?',
      focus: 'Credit outstanding and ageing, takings, stock below reorder, supplier costs, households gone quiet.',
    },
    {
      role: 'Counter staff',
      question: 'What does this household owe?',
      focus: 'Household balance and limit, purchase history, open delivery orders, availability.',
    },
    {
      role: 'Delivery rider',
      question: 'What am I taking out and to whom?',
      focus: 'Assigned delivery orders, promised times, payment or credit to collect, completion to record.',
    },
    {
      role: 'Whoever orders stock',
      question: 'What has to go on the next order?',
      focus: 'Reorder shortfalls against delivery days, movement by line, supplier prices and reliability.',
    },
  ],

  useCasesHeading: 'What grocery stores use Verity for',
  useCases: [
    {
      name: 'Credit book as a record',
      body: 'Household balances with automatic ageing and the history of every conversation, so settlement follows the record rather than two memories.',
    },
    {
      name: 'Exposure control',
      body: 'Credit aged against each household’s usual settlement pattern, so drift surfaces while the amount is still small.',
    },
    {
      name: 'Loose stock reconciliation',
      body: 'Purchase, sale by weight and recorded wastage as movements, so the unexplained gap is isolated rather than assumed.',
    },
    {
      name: 'Home delivery coordination',
      body: 'Delivery orders as work with a household, a promised time, an owner and a state, so nothing is lost in a rush.',
    },
    {
      name: 'Replenishment against delivery days',
      body: 'Reorder checks timed to each supplier’s delivery day, so the shortage is prevented rather than discovered.',
    },
    {
      name: 'Household retention',
      body: 'Purchase frequency on the household record, so a regular who has stopped coming is visible while it is still recoverable.',
    },
    {
      name: 'Margin on staples',
      body: 'Supplier cost movement compared against selling price per line, on a margin too thin to absorb an unnoticed increase.',
    },
    {
      name: 'Credit and adjustment control',
      body: 'Extending credit beyond a limit and adjusting stock as approvals with reasons and attribution.',
    },
    {
      name: 'Asking the shop questions',
      body: 'Plain-language questions across credit, stock, delivery and suppliers, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'The billing software, the credit notebook and the supplier list are mapped during implementation. Household balances, stock and supplier terms are brought across, and Verity is set up to fit the way the shop already runs its day rather than requiring a new routine.',

  faqHeading: 'Questions shop owners ask',
  faqs: [
    [
      'What can AI software do for a grocery store?',
      'Verity AI answers questions from your own records: which households are past thirty days and by how much, which staples will run out before the next supplier delivery, which delivery orders are still undispatched, which regulars have stopped buying. Each answer can become a follow-up assigned to someone.',
    ],
    [
      'Can Verity replace the credit notebook?',
      'That is the main thing it does here. Credit sits on the household record with automatic ageing and the history of every conversation about it, so a disputed balance resolves to the bills and the payments rather than to two recollections of the same month.',
    ],
    [
      'Do we need someone to maintain it?',
      'No, and the shop should not need one. The records that produce the reporting are created by billing the sale, receiving the delivery and dispatching the order — which the shop does anyway. There is no separate data-entry job.',
    ],
    [
      'Can it handle loose stock sold by weight?',
      'Yes. Bulk purchase, sale by weight and recorded spillage are all movements against the item, so the gap between what was bought and what was billed separates into legitimate wastage and an unexplained remainder you can actually investigate.',
    ],
    [
      'Does it manage home delivery?',
      'Delivery orders are work with a household, a promised time, an assigned rider and a state, so an order taken during a rush is visible until it is completed rather than remembered by one person.',
    ],
    [
      'Does Verity replace our billing software?',
      'No. Your billing setup is mapped during implementation and continues to work. Verity is the operational layer over it — credit, stock movement, deliveries, suppliers and the reporting across them.',
    ],
    [
      'Can we control who extends credit?',
      'Yes. Verity has one permission model across every record, so staff can bill and record deliveries while extending credit past an agreed limit requires the owner, and the decision is on the record.',
    ],
    [
      'Is this only for larger shops?',
      'No. The credit book, the loose stock gap and the delivery coordination are problems a single-counter shop has as acutely as a large one, and with less capacity to absorb them.',
    ],
    [
      'How long does it take to set up?',
      'About four weeks: discovery and mapping of how the shop actually runs, configuration, migration of household balances, stock and suppliers, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the credit book.',
  ctaLede:
    'It is the largest amount of money in the shop and the least protected record in it. Tell us how yours is kept today and we will show you what it looks like in Verity.',

  related: ['supermarkets', 'convenience-stores', 'retail-stores', 'bakeries', 'pet-stores', 'hardware-stores'],
};
