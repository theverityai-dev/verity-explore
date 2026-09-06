export default {
  slug: 'wholesalers',
  status: 'published',
  plural: 'wholesalers',
  subject: 'wholesale business',

  seo: {
    title: 'AI business management software for wholesalers | Verity',
    description:
      'Verity connects buying decisions and price exposure, customer credit, rate slabs, stock holding cost and market movement into one operational system.',
    keywords: [
      'AI software for wholesalers',
      'wholesale trading management software',
      'stock holding and price exposure tracking',
      'buyer credit and rate slab management',
    ],
  },

  hero: {
    eyebrow: 'Verity for wholesale',
    headline: 'You did not make money on the sale. You made it on the buy, four weeks earlier.',
    lede:
      'Wholesale margin is decided when stock is purchased and held, not when it is sold. Verity records the buy, the holding, the price movement and the credit against it.',
    note: 'Runs alongside your existing accounting arrangement.',
    panel: {
      title: 'Trading',
      meta: 'All lines · This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Stock value', value: '₹3.6 Cr', note: 'across 640 lines' },
        { label: 'Held over 60 days', value: '₹84 L', note: 'price exposure' },
        { label: 'Credit outstanding', value: '₹2.2 Cr', note: '186 buyers' },
        { label: 'Below cost', value: '38 lines', note: 'market moved against us' },
      ],
      rows: [
        { name: '38 lines where market rate is below our holding cost', meta: '₹46 L · decision needed', active: true },
        { name: '₹84 L held beyond 60 days', meta: 'Financing cost accruing daily', active: true },
        { name: '24 buyers past credit terms with open orders', meta: '₹38 L exposure', active: true },
        { name: 'Rate slab applied below the agreed floor', meta: '9 invoices this week', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own trading in this shape.',
    },
  },

  overview: {
    heading: 'Wholesale is a position-taking business that reports itself as a sales business.',
    paragraphs: [
      'A wholesaler buys in bulk, holds stock, and sells to retailers and smaller traders. The margin is the difference between what was paid and what the market will bear when the stock actually moves — which means the commercially decisive act is the purchase, and the risk is the holding period between it and the sale.',
      'Most wholesalers report on sales. They know what they sold and at what rate, and much less about what the stock cost to hold, how long it has been held, and whether the market has moved against it since. Eighty-four lakh held beyond sixty days is financing cost accruing daily on a position nobody has reviewed.',
      'The second problem is that price is not a list. Different buyers get different rates by volume, relationship and negotiation, and rate slabs are applied at the counter under pressure. Nine invoices below the agreed floor in a week is margin given away by people acting reasonably.',
      'The third is credit. Wholesale runs almost entirely on credit to buyers who are themselves small businesses, and exposure grows on thin margins where a single default can wipe out a quarter of trading profit.',
      'The fourth is that fast and slow lines are not distinguished at purchase. Buying is done on relationships and availability rather than on what actually turns.',
      'Verity records the buy, the holding cost, the market position, the rate applied and the credit exposure against each line and each buyer.',
    ],
  },

  terminology: [
    ['Lines, lots, grades, packs', 'Inventory'],
    ['Purchases, sales, returns', 'Orders'],
    ['Buyers, retailers, traders', 'Relationships'],
    ['Suppliers, mills, importers', 'Suppliers'],
    ['Rate slabs, credit limits, approvals', 'Workflows'],
    ['Godowns, markets, transit', 'Locations'],
    ['Holding cost, price movement, exposure', 'Intelligence'],
  ],

  challengesHeading: 'The risk is in the holding, and the holding is not measured.',
  challengesLede:
    'Wholesale difficulties come from a business that takes positions and reports transactions.',
  challenges: [
    {
      problem: 'Holding cost is not attributed to the line',
      detail:
        'Stock sits for weeks while financing accrues, and the cost is a general expense rather than a charge against the line holding it.',
      outcome:
        'Holding period and cost are recorded per lot, so slow stock carries its own financing cost in the margin calculation.',
    },
    {
      problem: 'Market movement against held stock is discovered at sale',
      detail:
        'A line was bought at one rate and the market has since moved below it, which becomes apparent when a buyer quotes the current rate.',
      outcome:
        'Current market rate against holding cost is tracked per line, so a losing position is a decision rather than a discovery.',
    },
    {
      problem: 'Rate slabs are applied inconsistently',
      detail:
        'Different buyers get different rates by volume and relationship, and the floor is breached at the counter without anyone seeing the pattern.',
      outcome:
        'Rate slabs and floors are recorded, so a rate below the floor is an approval rather than a habit.',
    },
    {
      problem: 'Credit exposure concentrates without review',
      detail:
        'Buyers who are themselves small businesses accumulate balances, and concentration is visible only when one of them fails.',
      outcome:
        'Exposure per buyer is aged against limits, so concentration and overdue positions are current.',
    },
    {
      problem: 'Buying repeats what is comfortable rather than what turns',
      detail:
        'Purchase decisions follow supplier relationships and availability rather than which lines actually moved and at what margin.',
      outcome:
        'Turnover and realised margin per line are recorded, so buying starts from what the business actually sold.',
    },
    {
      problem: 'Returns and quality claims are absorbed',
      detail:
        'Buyers return goods or claim on quality, and the cost lands on the trading margin without being attributed to a supplier or a lot.',
      outcome:
        'Returns and claims are recorded against the lot and its supplier, so quality cost is attributable.',
    },
  ],

  modulesLede:
    'One system across buying, holding, pricing and credit.',
  modules: [
    {
      id: 'inventory',
      title: 'Lines, lots and holding position',
      line:
        'Stock is held by lot with purchase rate, date, quantity, godown, holding period and accrued holding cost.',
      why:
        'The holding period is the risk, and it only exists as a number if the lot carries its own purchase date and rate.',
      example:
        'Eighty-four lakh held beyond sixty days, with financing accruing against each lot.',
    },
    {
      id: 'orders',
      title: 'Purchases, sales and returns',
      line:
        'Transactions record their lots, rates, buyers, credit terms, quantities and any return or claim.',
      why:
        'Selling from a specific lot is what connects the sale price to the buying decision that produced it.',
      example:
        'Realised margin per lot rather than an average across the line.',
    },
    {
      id: 'relationships',
      title: 'Buyers, retailers and traders',
      line:
        'Buyers are records with their rate slab, credit limit, outstanding balance, ageing, order history and payment behaviour.',
      why:
        'Wholesale runs on credit to small businesses, so the buyer’s payment behaviour is as important as their volume.',
      example:
        'Twenty-four buyers past terms with open orders, quantified as exposure.',
    },
    {
      id: 'suppliers',
      title: 'Suppliers, mills and importers',
      line:
        'Suppliers are relationships with their purchases, rates, quality history, delivery reliability and balances.',
      why:
        'Buying well is the entire business, and supplier rate history is the evidence for the next purchase.',
      example:
        'Rate movement by supplier across purchases, informing the next buying decision.',
    },
    {
      id: 'workflows',
      title: 'Rate slabs, credit limits and approvals',
      line:
        'Rate floors, slab application, credit limits, extended terms and write-offs move through defined steps with recorded decisions.',
      why:
        'Both of the daily decisions that destroy wholesale margin — the rate and the credit — happen at the counter.',
      example:
        'A rate below the agreed floor held for approval rather than applied and noticed later.',
    },
    {
      id: 'locations',
      title: 'Godowns, markets and transit',
      line:
        'Locations roll into the business, with stock, holding and reporting following the same structure.',
      why:
        'Stock in transit and stock across godowns are different positions with different availability.',
      example:
        'Availability and holding by godown, with transfers as recorded movement.',
    },
    {
      id: 'people',
      title: 'Sales staff and godown teams',
      line:
        'Staff are modelled once, and every sale, rate applied, credit decision and stock movement carries who made it.',
      why:
        'Rate discipline and credit discipline both vary by person and are invisible without attribution.',
      example:
        'Rate realisation and credit exposure by sales person.',
    },
    {
      id: 'intelligence',
      title: 'Position, margin and exposure reporting',
      line:
        'Holding period and cost, market rate against holding cost, realised margin by line and lot, rate realisation against slabs, credit exposure and turnover come from the operational records.',
      why:
        'A position-taking business needs position reporting, and wholesale reporting is almost always transactional.',
      example:
        'Thirty-eight lines where the market rate is below holding cost, as a decision list.',
    },
    {
      id: 'ai',
      title: 'Ask the position a question',
      line:
        'Verity AI answers from your own stock, purchase, sale and buyer records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking are about positions and exposure, which no sales report answers.',
      example:
        '"Which lines are below holding cost at current market rates?" returns thirty-eight with their value.',
    },
    {
      id: 'records',
      title: 'Rate agreements and quality terms',
      line:
        'Rate agreements, credit terms and quality conditions attach to the buyer or supplier they concern.',
      why:
        'Claims and rate disputes are settled by what was agreed, which is usually verbal.',
      example:
        'A buyer’s agreed slab and credit terms, referenced at every invoice.',
    },
    {
      id: 'control',
      title: 'Who can price and extend credit',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'The two decisions that decide the year are made at the counter by people under pressure.',
      example:
        'Every rate below floor and every credit extension carries the person and the approval.',
    },
    {
      id: 'communication',
      title: 'What was agreed with the buyer',
      line:
        'Rate discussions, credit commitments and claim conversations attach to the buyer they concern.',
      why:
        'Wholesale relationships run on verbal agreements that are recalled differently at settlement.',
      example:
        'A commitment to a rate for a period, recorded rather than remembered.',
    },
  ],

  workflowsHeading: 'Buy, hold, price, collect.',
  workflowsLede:
    'These already happen. As records they turn a sales business back into the position business it is.',
  workflows: [
    {
      name: 'Purchase decision',
      steps: [
        'Turnover and realised margin by line reviewed',
        'Current stock position and holding age assessed',
        'Supplier rate history compared',
        'Purchase raised with quantity and rate',
        'Lot recorded with purchase rate, date and godown',
      ],
      note:
        'Buying against what actually turned, rather than against availability, is the whole of wholesale skill.',
    },
    {
      name: 'Holding review',
      steps: [
        'Holding period and accrued cost calculated per lot',
        'Current market rate compared against holding cost',
        'Lines below cost identified',
        'Hold, discount or clear decision raised',
        'Decision recorded against the lot',
      ],
      note:
        'A losing position held without a decision is the most expensive thing in wholesale.',
    },
    {
      name: 'Sale with rate and credit',
      steps: [
        'Buyer identified with their slab and credit position',
        'Rate applied from the slab, or approval raised below floor',
        'Credit exposure checked against the limit',
        'Sale recorded against a specific lot',
        'Realised margin calculated against holding cost',
      ],
      note:
        'Both checks happen at the counter, which is the only place they can prevent anything.',
    },
    {
      name: 'Collection',
      steps: [
        'Balances aged by buyer from the invoice date',
        'Exposure compared against limits',
        'Follow-up assigned with the history attached',
        'Payment applied and the position updated',
        'Payment behaviour recorded against the buyer',
      ],
      note:
        'On wholesale margins, one default costs the profit on a great deal of trading.',
    },
    {
      name: 'Return and quality claim',
      steps: [
        'Return or claim recorded against the sale and lot',
        'Cause assessed against the supplier and lot',
        'Credit note approved and issued',
        'Stock returned to position or written off',
        'Claim raised against the supplier where terms allow',
      ],
      note:
        'Attributing quality cost to a lot and supplier is what makes it a buying decision.',
    },
    {
      name: 'Line review',
      steps: [
        'Turnover, realised margin and holding period pulled per line',
        'Fast and slow lines separated',
        'Rate realisation against slab reviewed',
        'Buying and range decisions raised',
        'Decisions recorded for the next purchase cycle',
      ],
      note:
        'Wholesale range decisions are usually habitual, and this is the evidence that changes them.',
    },
  ],

  ai: {
    heading: 'Ask about the position, not the sales.',
    lede:
      'Verity AI reads the same stock, purchase, sale and buyer records the business creates as it trades. It answers from your own position, respects permissions, and can turn an answer into decisions and follow-ups.',
    panelMeta: 'Grounded in your trading records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which lines are below holding cost at current market rates?',
      'What stock has been held beyond sixty days, and what is it costing?',
      'Which buyers are past terms with open orders?',
      'Where has the rate floor been breached, and by whom?',
      'Which lines turn fastest and at what realised margin?',
      'What is credit exposure by buyer against limits?',
      'Which suppliers have moved rates most this quarter?',
      'What did returns and quality claims cost by supplier?',
      'Summarise position, exposure and realised margin.',
    ],
  },

  automationHeading: 'The two decisions at the counter.',
  automationLede:
    'Each runs from the stock and buyer records at the point the condition is met.',
  automations: [
    {
      trigger: 'A rate below the agreed floor is applied',
      steps: [
        'Sale held at the approval step',
        'Slab, floor and buyer history attached',
        'Decision recorded against the sale and the salesperson',
      ],
    },
    {
      trigger: 'A buyer would exceed their credit limit',
      steps: [
        'Order held at the approval step',
        'Exposure and ageing attached to the request',
        'Decision recorded against the buyer',
      ],
    },
    {
      trigger: 'Stock passes a holding threshold',
      steps: [
        'Lot flagged with holding period and accrued cost',
        'Market rate compared against holding cost',
        'Hold, discount or clear decision raised',
      ],
    },
    {
      trigger: 'Market rate falls below holding cost on a line',
      steps: [
        'Position flagged with quantity and exposure',
        'Decision assigned to the buying owner',
        'Outcome recorded against the lot',
      ],
    },
    {
      trigger: 'A buyer balance passes its terms',
      steps: [
        'Balance aged with exposure attached',
        'Follow-up assigned with the history',
        'Escalated past the second threshold',
      ],
    },
    {
      trigger: 'A quality claim is raised',
      steps: [
        'Claim recorded against the sale, lot and supplier',
        'Credit note approved and issued',
        'Supplier claim raised where terms allow',
      ],
    },
  ],

  intelligenceHeading: 'What the trader can actually see.',
  intelligenceLede:
    'Position and exposure from the buying and selling records themselves.',
  intelligence: [
    {
      area: 'Position',
      points: [
        'Stock value by line, lot and godown',
        'Holding period and accrued holding cost',
        'Market rate against holding cost',
        'Lines below cost and their exposure',
      ],
    },
    {
      area: 'Margin',
      points: [
        'Realised margin by line and lot',
        'Margin after holding cost',
        'Rate realisation against slab and floor',
        'Effect of discounting by salesperson',
      ],
    },
    {
      area: 'Credit',
      points: [
        'Exposure by buyer against limits',
        'Ageing bands and overdue positions',
        'Payment behaviour by buyer',
        'Concentration across the buyer base',
      ],
    },
    {
      area: 'Turnover',
      points: [
        'Turns by line and category',
        'Fast and slow lines separated',
        'Seasonal movement from history',
        'Range performance against space and capital',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Rate movement across purchases',
        'Quality claims by supplier and lot',
        'Delivery reliability',
        'Outstanding payable',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the purchase with its rate and date and the sale against a specific lot.',

  rolesHeading: 'One business, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What is my position worth and what is it costing?',
      focus: 'Holding period and cost, market rate against cost, realised margin, credit exposure.',
    },
    {
      role: 'Buying',
      question: 'What should I buy and at what rate?',
      focus: 'Turns and realised margin by line, current holding, supplier rate history, slow lines.',
    },
    {
      role: 'Sales',
      question: 'What can I offer this buyer?',
      focus: 'Buyer slab and floor, credit position and limit, availability by lot, outstanding balance.',
    },
    {
      role: 'Accounts',
      question: 'Who owes and who is over?',
      focus: 'Ageing by buyer, exposure against limits, credit notes issued, supplier payables.',
    },
  ],

  useCasesHeading: 'What wholesalers use Verity for',
  useCases: [
    {
      name: 'Holding cost attribution',
      body: 'Purchase date and rate on the lot with financing accruing against it, so slow stock carries its own cost into the margin calculation.',
    },
    {
      name: 'Position against market',
      body: 'Current market rate compared with holding cost per line, so a losing position becomes a decision rather than a discovery at sale.',
    },
    {
      name: 'Rate floor discipline',
      body: 'Slabs and floors recorded, so a rate below the floor is an approval at the counter rather than a pattern noticed at month end.',
    },
    {
      name: 'Credit exposure control',
      body: 'Exposure per buyer aged against limits, on margins where a single default costs the profit of considerable trading.',
    },
    {
      name: 'Buying from turnover evidence',
      body: 'Turns and realised margin per line, so purchase decisions follow what moved rather than what was available.',
    },
    {
      name: 'Lot-level margin',
      body: 'Sales recorded against specific lots, so realised margin reflects the buying decision that produced it.',
    },
    {
      name: 'Quality claim attribution',
      body: 'Returns and claims recorded against lot and supplier, turning absorbed cost into a buying signal.',
    },
    {
      name: 'Asking about position',
      body: 'Plain-language questions across stock, holding, rates and credit, with decisions raised in the same step.',
    },
  ],

  migration:
    'Your accounting arrangement continues to run and is mapped during implementation. Stock by lot with purchase rates, buyers with slabs and credit positions, suppliers and open balances are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions wholesalers ask',
  faqs: [
    [
      'What can AI software do for a wholesale business?',
      'Verity AI answers questions from your own stock, purchase, sale and buyer records: which lines are below holding cost at current market rates, what has been held beyond sixty days and what it is costing, which buyers are past terms with open orders, where the rate floor has been breached. Each answer can become a decision or a follow-up.',
    ],
    [
      'How is this different from software for distributors?',
      'A distributor sells a principal’s products on agreed terms through territories and beats. A wholesaler takes positions: it buys, holds and sells at market rates, and its margin is decided at purchase and eroded by holding. Verity records the holding period, the accrued cost and the market position, which is the part a sales-oriented system does not.',
    ],
    [
      'Can it show holding cost per line?',
      'Each lot carries its purchase rate and date, so holding period and accrued financing cost attach to the stock holding it — which is what turns realised margin into a number that reflects the actual buying decision.',
    ],
    [
      'Does it help with rate discipline?',
      'Buyer rate slabs and floors are recorded, so a rate below the floor is held for approval at the counter with the buyer history attached, rather than becoming a pattern that only appears in the monthly margin.',
    ],
    [
      'Can it manage credit exposure?',
      'Exposure per buyer is aged against agreed limits with payment behaviour recorded, and an order that would take a buyer past their limit is held for approval — which matters on margins where a single default costs a great deal of trading profit.',
    ],
    [
      'Does it help with buying decisions?',
      'Turns and realised margin per line come from the sales records, so the next purchase can be made against what actually moved and at what margin rather than against supplier availability and habit.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Accounting continues and is mapped during implementation. Verity holds the stock positions, buyers, suppliers, rates, credit and the operational reporting across them.',
    ],
    [
      'Does it work across several godowns?',
      'Godowns, markets and transit are locations rolling into the business, so position, availability and holding are visible per location with transfers recorded as movement.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how buying, pricing and credit actually work, configuration of slabs and limits, migration of stock by lot and buyer balances, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the stock that has stopped earning.',
  ctaLede:
    'Held stock costs money every day and most wholesalers cannot say how much. Tell us how positions are tracked today.',

  related: ['distributors', 'manufacturers', 'industrial-suppliers', 'importers', 'retail-stores', 'textile-manufacturers'],
};
