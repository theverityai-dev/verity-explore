export default {
  slug: 'clothing-boutiques',
  status: 'published',
  plural: 'clothing boutiques',
  subject: 'boutique',

  seo: {
    title: 'AI business management software for clothing boutiques | Verity',
    description:
      'Verity connects small-batch stock, personal clientele, alterations, custom orders and takings into one system sized for an owner-run boutique.',
    keywords: [
      'AI software for clothing boutiques',
      'boutique management software',
      'boutique clientele and alteration tracking',
      'small batch apparel inventory software',
    ],
  },

  hero: {
    eyebrow: 'Verity for boutiques',
    headline: 'You buy six of a piece. Which six customers should hear about it?',
    lede:
      'A boutique competes on knowing its customers, not on stock depth. Verity keeps the clientele, the pieces, the alterations and the custom orders on one record so that knowledge outlives whoever holds it.',
    note: 'Built for a shop the owner runs personally. No administrator required.',
    panel: {
      title: 'Boutique',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Takings', value: '₹6.4 L', note: '84 sales' },
        { label: 'Clientele', value: '312', note: '46 bought this month' },
        { label: 'Alterations open', value: '11', note: '3 past promised date' },
        { label: 'Unsold past 90d', value: '₹3.2 L', note: '68 pieces' },
      ],
      rows: [
        { name: '3 alterations past their promised date', meta: 'Two for the same customer', active: true },
        { name: 'New arrivals match 22 clients’ recorded preferences', meta: 'No one contacted yet', active: true },
        { name: '68 pieces unsold beyond 90 days', meta: 'Concentrated in two buys', active: true },
        { name: 'Custom order advance taken, fabric not confirmed', meta: '9 days since advance', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own boutique in this shape.',
    },
  },

  overview: {
    heading: 'A boutique’s inventory is small. Its customer knowledge is the asset.',
    paragraphs: [
      'A boutique buys narrow and deep in taste rather than in quantity — six of a piece, sometimes one. It cannot compete on price or availability, so it competes on knowing exactly who will want what. That knowledge is real, valuable and almost always held in the owner’s head: this client wears this cut, that one buys twice a year before a wedding season, another will take anything in a particular colour.',
      'Because the knowledge is personal it does not survive absence, staff turnover or growth. A boutique that opens a second location or hires a second salesperson discovers that its main competitive advantage does not transfer.',
      'The operational work is smaller than a fashion chain’s but no less consequential. Alterations are promised verbally against dates that matter, because the garment is usually for an occasion. Custom orders take advances and involve tailors. Pieces bought in ones and twos either sell or sit, and with a small buy budget, capital tied up in a bad buy is felt immediately.',
      'Verity holds the client, their preferences and purchase history, the pieces, the alterations and the custom orders as connected records. The boutique keeps operating exactly as it does; the knowledge stops being personal.',
    ],
  },

  terminology: [
    ['Pieces, buys, collections', 'Inventory'],
    ['Sales, custom orders, alterations', 'Work'],
    ['Clients, clientele, referrals', 'Relationships'],
    ['Designers, tailors, fabric suppliers', 'Suppliers'],
    ['Owner, salespeople', 'People'],
    ['Advances, promised dates, approvals', 'Workflows'],
    ['Shop, studio, tailor', 'Locations'],
  ],

  challengesHeading: 'Small scale does not mean small consequences.',
  challengesLede:
    'A boutique carries a narrow buy budget and a promise-based service, which makes every failure expensive relative to the size of the business.',
  challenges: [
    {
      problem: 'The clientele lives in the owner’s head',
      detail:
        'Who wears what, who buys before which occasion, who will take a colour nobody else will — none of it is written down, so none of it survives absence or transfers to staff.',
      outcome:
        'Preferences, sizes and purchase history sit on the client record, so any salesperson can make the call the owner would have made.',
    },
    {
      problem: 'New arrivals are announced to everyone or to nobody',
      detail:
        'A piece arrives that three specific clients would buy. Contacting them requires remembering who they are, so it usually becomes a broadcast or nothing.',
      outcome:
        'New stock is matched against recorded preferences and sizes, so the list of people worth calling is produced rather than recalled.',
    },
    {
      problem: 'Alterations are promised and missed',
      detail:
        'A garment is promised for a date that matters because it is for an occasion, and the promise lives on a tag and in a conversation.',
      outcome:
        'An alteration is work with a client, a promised date, an owner and a state, so it is visibly at risk before the date arrives.',
    },
    {
      problem: 'Custom orders drift',
      detail:
        'An advance is taken, fabric is discussed, a tailor is briefed, and the next update happens when the client calls.',
      outcome:
        'A custom order carries its advance, specification, assigned tailor and promised date as a record with states.',
    },
    {
      problem: 'A bad buy ties up the budget',
      detail:
        'With a small buying budget, pieces that do not move are felt immediately, and they are noticed only when the next buy has to be funded.',
      outcome:
        'Ageing by buy and by designer is a query, so a buy that is not working is visible while it can still be cleared.',
    },
  ],

  modulesLede:
    'One system, sized for an owner-run shop. These are the parts a boutique works with.',
  modules: [
    {
      id: 'relationships',
      title: 'Clients, sizes and preferences',
      line:
        'Each client is a record with their purchases, sizes, fit notes, colour and cut preferences, occasions, alterations and spend.',
      why:
        'This is the boutique’s actual competitive advantage, and it is the one thing that exists only in someone’s memory.',
      example:
        'Twenty-two clients whose recorded preferences match this week’s arrivals, produced as a list rather than recalled by the owner.',
    },
    {
      id: 'inventory',
      title: 'Pieces, buys and collections',
      line:
        'Stock is held per piece with designer, buy, size, colour, cost and location, and moves as it sells, is held, altered or cleared.',
      why:
        'Buying in ones and twos means a piece is an individual decision, and its performance is a signal about the designer rather than about a category.',
      example:
        'Sixty-eight pieces unsold past ninety days, concentrated in two buys, is a buying conversation with evidence.',
    },
    {
      id: 'work',
      title: 'Alterations and custom orders',
      line:
        'Each is work with a client, a specification, an assigned tailor, a promised date and a state.',
      why:
        'A boutique’s service promise is a date, and the garment is usually for a fixed occasion that will not move.',
      example:
        'Three alterations past their promised date, two for the same client, visible before that client calls.',
    },
    {
      id: 'suppliers',
      title: 'Designers, tailors and fabric suppliers',
      line:
        'Suppliers are relationships with their pieces, sell-through, delivery reliability, alteration turnaround and outstanding balances.',
      why:
        'The buy is a bet on a designer, and the tailor is the service promise. Both deserve a performance record.',
      example:
        'A tailor whose alterations run three days over on average against one who does not.',
    },
    {
      id: 'people',
      title: 'Owner and salespeople',
      line:
        'Staff are modelled once, and every sale, alteration, custom order and client note carries who handled it.',
      why:
        'Boutique selling is personal, and a client usually has a preferred salesperson whose relationship should be visible to the business.',
      example:
        'Sales and client relationships attributed, so a departure is a reassignment rather than a loss.',
    },
    {
      id: 'workflows',
      title: 'Advances, discounts and approvals',
      line:
        'Custom order advances, discounts beyond a threshold and returns move through defined steps with a recorded decision.',
      why:
        'Discretionary decisions at boutique margins matter, and they are made in a relationship context that makes them harder to refuse.',
      example:
        'A discount for a long-standing client is a recorded decision rather than an inconsistency across staff.',
    },
    {
      id: 'records',
      title: 'Fit notes, images and specifications',
      line:
        'Images, measurements, fabric details and specifications attach to the client, piece or order they belong to.',
      why:
        'A repeat custom order or a second alteration needs the measurements taken the first time, months earlier.',
      example:
        'A client returning for a second piece has their measurements and fit notes on record.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from the shop’s own records',
      line:
        'Takings, sell-through by buy and designer, client return rate, alteration turnaround and ageing come from the transactions themselves.',
      why:
        'A boutique owner typically knows the month’s takings and very little about which buys and which clients produced them.',
      example:
        'Sell-through by designer across the last three buys, current rather than felt.',
    },
    {
      id: 'ai',
      title: 'Ask the boutique a question',
      line:
        'Verity AI answers from your own client, stock and order records, respects permissions, and can create assigned follow-ups.',
      why:
        'The owner’s questions are about specific people and specific pieces, which is exactly what a general tool cannot answer.',
      example:
        '"Which clients would want this week’s arrivals?" returns twenty-two, and one instruction assigns the calls.',
    },
    {
      id: 'communication',
      title: 'What the client said, on the client',
      line:
        'Notes, reminders and activity attach to the client, piece or order they concern.',
      why:
        'A boutique conversation contains the next sale, and it currently lives in one person’s memory or one phone.',
      example:
        'A client mentioning a wedding in November is a note with a date, not a remark that will be forgotten by August.',
    },
    {
      id: 'control',
      title: 'Who can discount and see cost',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Even a two-person shop needs cost visibility and discount authority to be deliberate.',
      example:
        'Cost and margin visible to the owner; salespeople see availability, client history and preferences.',
    },
  ],

  workflowsHeading: 'The service promise, recorded.',
  workflowsLede:
    'These are what the boutique already does. As records they stop depending on the person who made the promise.',
  workflows: [
    {
      name: 'New arrival to client call',
      steps: [
        'Pieces received and recorded with designer, size and colour',
        'Arrivals matched against recorded client preferences and sizes',
        'Call list produced and assigned to salespeople',
        'Outcome recorded against each client',
        'Interest noted against the piece for future buys',
      ],
      note:
        'The list is produced from records rather than assembled from memory, which is what makes it happen at all.',
    },
    {
      name: 'Alteration',
      steps: [
        'Garment received with measurements and images',
        'Promised date agreed and set on the record',
        'Tailor assigned and work state tracked',
        'Reminder raised as the date approaches',
        'Client notified on completion and collection recorded',
      ],
      note:
        'The date is the promise, and a promise with an owner and a state is one that can be kept.',
    },
    {
      name: 'Custom order',
      steps: [
        'Specification agreed and advance recorded against the client',
        'Fabric sourced and confirmed against the order',
        'Tailor assigned and stages tracked',
        'Fitting scheduled and outcome recorded',
        'Balance collected and the order delivered',
        'Piece and measurements joined to the client history',
      ],
      note:
        'An advance taken without fabric confirmed is visible as an ageing exception rather than as an awkward call later.',
    },
    {
      name: 'Buy review',
      steps: [
        'Sell-through pulled by buy and by designer',
        'Unsold pieces profiled by size, colour and age',
        'Clearance or hold decision raised',
        'Next buy planned against the evidence',
        'Decision recorded against the designer',
      ],
      note:
        'With a narrow budget, the previous buy is the only data that matters for the next one.',
    },
    {
      name: 'Client gone quiet',
      steps: [
        'Clients past their usual purchase interval identified',
        'History and preferences reviewed',
        'Follow-up assigned, ideally to their usual salesperson',
        'Outcome recorded on the client record',
      ],
      note:
        'A boutique with three hundred clients cannot afford to lose the twenty who buy most.',
    },
  ],

  ai: {
    heading: 'Ask who would want this.',
    lede:
      'Verity AI reads the same client, stock and order records the boutique creates as it works. It answers from your own shop, only shows what the person asking can see, and can turn the answer into calls assigned to the right salesperson.',
    panelMeta: 'Grounded in your boutique records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which clients would want this week’s arrivals, based on their sizes and preferences?',
      'Which alterations are due or past their promised date?',
      'Which clients have not bought in the last six months?',
      'Which buys have the weakest sell-through?',
      'Which custom orders have advances but no confirmed fabric?',
      'Which designers sell through fastest?',
      'What is tied up in pieces unsold beyond ninety days?',
      'Which clients usually buy before the wedding season?',
      'Summarise the month’s takings and client activity.',
    ],
  },

  automationHeading: 'The promises and the follow-ups.',
  automationLede:
    'Each runs from the boutique’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'New stock is received',
      steps: [
        'Pieces matched against recorded client preferences and sizes',
        'Call list produced and assigned',
        'Outcomes recorded against clients and pieces',
      ],
    },
    {
      trigger: 'An alteration approaches its promised date',
      steps: [
        'Reminder raised to the assigned tailor and owner',
        'Escalated if the state has not advanced',
        'Client notified on completion',
      ],
    },
    {
      trigger: 'A custom order advance ages without fabric confirmed',
      steps: [
        'Order flagged with its age and advance',
        'Follow-up assigned to the owner',
        'Decision recorded against the order',
      ],
    },
    {
      trigger: 'A client passes their usual purchase interval',
      steps: [
        'Client flagged with history and preferences attached',
        'Follow-up assigned to their usual salesperson',
        'Outcome recorded on the client record',
      ],
    },
    {
      trigger: 'A piece passes its ageing threshold',
      steps: [
        'Piece flagged with buy, cost and days held',
        'Clearance review assigned',
        'Decision recorded against the buy',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see about a small business.',
  intelligenceLede:
    'Drawn from sales, alterations and client conversations the boutique already has.',
  intelligence: [
    {
      area: 'Clients',
      points: [
        'Purchase frequency and spend per client',
        'Clients past their usual interval',
        'Preferences, sizes and occasions recorded',
        'Relationship held by each salesperson',
      ],
    },
    {
      area: 'Stock',
      points: [
        'Sell-through by buy and designer',
        'Pieces unsold by age and value',
        'Size and colour performance across buys',
        'Capital tied in current stock',
      ],
    },
    {
      area: 'Service',
      points: [
        'Alterations open, completed and late',
        'Turnaround time by tailor',
        'Custom orders by stage and age',
        'Advances held against undelivered orders',
      ],
    },
    {
      area: 'Commercial',
      points: [
        'Takings by month against last year',
        'Average sale value',
        'Discounting against thresholds',
        'Margin by designer',
      ],
    },
  ],
  intelligenceNote:
    'The shop does not gain an administrator. Recording the sale, the alteration and the client conversation produces all of this.',

  rolesHeading: 'Two or three people, still different views.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Which buys and which clients are carrying the shop?',
      focus: 'Sell-through by designer, ageing, client spend and frequency, takings against last year.',
    },
    {
      role: 'Salesperson',
      question: 'Who should I be calling?',
      focus: 'Client preferences and sizes against new arrivals, clients gone quiet, alterations to notify.',
    },
    {
      role: 'Whoever manages alterations',
      question: 'What is promised and when?',
      focus: 'Alterations and custom orders by state and date, tailor assignments, fittings scheduled.',
    },
  ],

  useCasesHeading: 'What boutiques use Verity for',
  useCases: [
    {
      name: 'Clientele as a business record',
      body: 'Preferences, sizes, fit notes, occasions and purchase history on the client record, so the boutique’s main advantage stops being personal.',
    },
    {
      name: 'Matching arrivals to clients',
      body: 'New stock matched against recorded preferences and sizes, producing a call list instead of a broadcast.',
    },
    {
      name: 'Alteration promises',
      body: 'Alterations as work with a client, a promised date, an assigned tailor and a state, visible as at-risk before the date.',
    },
    {
      name: 'Custom order tracking',
      body: 'Advance, specification, fabric, tailor and fitting on one record, so an order that has drifted is visible.',
    },
    {
      name: 'Buy performance',
      body: 'Sell-through by buy and designer with unsold pieces profiled, so a narrow budget is spent against evidence.',
    },
    {
      name: 'Client retention',
      body: 'Purchase intervals per client, so the twenty clients who carry the shop are not lost quietly.',
    },
    {
      name: 'Tailor performance',
      body: 'Turnaround time recorded per tailor, so the service promise rests on someone measurable.',
    },
    {
      name: 'Asking the boutique questions',
      body: 'Plain-language questions about specific clients and specific pieces, with calls assigned in the same step.',
    },
  ],

  migration:
    'The client book, the buy sheets and whatever billing you use are mapped during implementation. Client history, preferences and current stock are brought across, and Verity is configured to fit how the boutique already works.',

  faqHeading: 'Questions boutique owners ask',
  faqs: [
    [
      'What can AI software do for a boutique?',
      'Verity AI answers questions from your own client and stock records: which clients would want this week’s arrivals based on their sizes and preferences, which alterations are past their promised date, which clients have not bought in six months, which buys have the weakest sell-through. Each answer can become a call assigned to the right salesperson.',
    ],
    [
      'Can Verity hold client preferences and sizes?',
      'Yes, and for a boutique that is the main reason to use it. Sizes, fit notes, colour and cut preferences, occasions and full purchase history sit on the client record, so the knowledge that currently lives in the owner’s head becomes something staff can use and the business keeps.',
    ],
    [
      'Does it track alterations and custom orders?',
      'Both are work with a client, a specification, an assigned tailor, a promised date and a state, so a garment promised for an occasion is visibly at risk before the date arrives rather than when the client calls.',
    ],
    [
      'Do we need someone to run the system?',
      'No. The records that produce the reporting come from recording the sale, the alteration and the client conversation, which the boutique does anyway. It is sized for an owner-run shop.',
    ],
    [
      'Can it tell us which buys worked?',
      'Sell-through by buy and by designer, with unsold pieces profiled by size, colour and age, so the next buy is made against evidence rather than impression — which matters most when the budget is narrow.',
    ],
    [
      'Does Verity replace our billing software?',
      'No. It is introduced as the operational layer over what you already run. Billing continues; Verity holds the clientele, the stock, the alterations, the custom orders and the reporting across them.',
    ],
    [
      'What happens if a salesperson leaves?',
      'Client relationships are recorded against the business with the salesperson attributed, so a departure is a reassignment with the history intact rather than the loss of the relationships they held.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the boutique works, configuration, migration of client history and stock, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the client book.',
  ctaLede:
    'It is the boutique’s real asset and the one thing that does not survive a bad week or a departure. Tell us how yours is kept today.',

  related: ['fashion-stores', 'shoe-stores', 'jewellery-stores', 'tailors', 'gift-shops', 'cosmetics-stores'],
};
