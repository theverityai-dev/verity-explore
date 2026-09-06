export default {
  slug: 'electronics-stores',
  status: 'published',
  plural: 'electronics stores',
  subject: 'electronics retail business',

  seo: {
    title: 'AI business management software for electronics stores | Verity',
    description:
      'Verity connects serial-tracked stock, warranty and service jobs, brand schemes, price protection and customer history into one operational system.',
    keywords: [
      'AI software for electronics stores',
      'electronics retail management software',
      'serial number and warranty tracking software',
      'consumer electronics inventory and service software',
    ],
  },

  hero: {
    eyebrow: 'Verity for electronics retail',
    headline: 'Every unit has a serial number, and that number is the whole relationship.',
    lede:
      'Warranty, service, price protection and brand claims all resolve to a specific unit sold to a specific customer on a specific date. Verity holds that link, and everything that hangs off it.',
    note: 'Runs alongside your existing billing and finance arrangements.',
    panel: {
      title: 'Store',
      meta: 'All stores · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹92 L', note: '486 units' },
        { label: 'Service jobs open', value: '38', note: '9 past promised date' },
        { label: 'Ageing stock', value: '₹41 L', note: 'models over 90 days' },
        { label: 'Brand claims open', value: '₹6.8 L', note: 'price protection and schemes' },
      ],
      rows: [
        { name: '9 service jobs past their promised date', meta: 'Four awaiting brand service centre', active: true },
        { name: 'Price drop announced on stock we hold', meta: '31 units · protection claim not raised', active: true },
        { name: 'Ageing models tying up ₹41 L', meta: 'Superseded by newer versions', active: true },
        { name: 'Demo unit unaccounted at Store 2', meta: 'Since last count', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own stores in this shape.',
    },
  },

  overview: {
    heading: 'Electronics retail is the one category where stock is individually identified — and that changes everything.',
    paragraphs: [
      'A television is not a unit of a line. It is a specific unit with a serial number, sold on a date, to a customer, under a warranty that runs from that date, possibly on finance, possibly with an extended plan, and possibly returning for service two years later. Almost every commercially significant event in the business resolves to that serial number.',
      'That makes the record-keeping requirement unusually precise and unusually valuable. A store that can produce the unit, the customer, the invoice and the warranty position in one lookup handles a service claim in minutes. A store that cannot spends an afternoon on it, and sometimes absorbs a cost that the brand should have carried.',
      'The second defining pressure is obsolescence and price movement. Models are superseded, prices drop, and stock bought at the old cost is suddenly worth less. Brands offer price protection and scheme support against exactly this, but those are claimed against specific units held on specific dates. Unclaimed protection is money already earned and not collected.',
      'The third is service. Repair and warranty work sits between the customer, the store and the brand’s service centre, and it is the part of the business most likely to be tracked on a docket book. A job with no promised date and no owner produces exactly the customer experience the category is known for.',
      'Verity holds the unit, the customer, the warranty, the service job, the brand agreement and the claim as connected records with one history.',
    ],
  },

  terminology: [
    ['Units, models, serial numbers, demo stock', 'Inventory'],
    ['Sales, exchanges, returns, finance', 'Orders'],
    ['Customers, warranty holders', 'Relationships'],
    ['Brands, distributors, service centres', 'Suppliers'],
    ['Service jobs, installations, demos', 'Work'],
    ['Price protection, schemes, claims', 'Workflows'],
    ['Stores, service desk, warehouse', 'Locations'],
  ],

  challengesHeading: 'The unit is the record, and the unit is usually untracked.',
  challengesLede:
    'Most electronics retail problems come from stock being counted by model when the business runs by serial number.',
  challenges: [
    {
      problem: 'The serial number is not linked to the customer',
      detail:
        'A warranty claim arrives and the store searches invoices by date and name to establish what was sold and when.',
      outcome:
        'The unit, the invoice, the customer and the warranty start date are one record, so a claim resolves in a lookup.',
    },
    {
      problem: 'Price protection is not claimed',
      detail:
        'A brand announces a price drop on stock the store holds. The claim requires the units held on that date, which nobody assembles in time.',
      outcome:
        'Units held are known by serial and date, so a protection claim is assembled from records within the window.',
    },
    {
      problem: 'Service jobs have no owner or date',
      detail:
        'A repair is taken in on a docket, sent to a brand service centre, and its status is known only by whoever calls to ask.',
      outcome:
        'A service job is work with a customer, a unit, an owner, a promised date and a state, including time spent at the brand centre.',
    },
    {
      problem: 'Ageing stock is discovered after supersession',
      detail:
        'A model is superseded and the remaining units become hard to move at any margin, which is noticed when the new model arrives.',
      outcome:
        'Ageing by model and value is a query, so slow stock surfaces while protection or clearance can still recover most of it.',
    },
    {
      problem: 'Demo and display units go unaccounted',
      detail:
        'Units opened for display sit outside normal stock discipline and drift out of the count.',
      outcome:
        'Demo units are a stock state with a location and an owner, so they remain counted and their eventual sale is recorded.',
    },
    {
      problem: 'Extended plans and finance are recorded elsewhere',
      detail:
        'Finance arrangements and extended warranty plans sit with the financier and the insurer, so the store cannot answer a customer question about its own sale.',
      outcome:
        'The plan and the finance arrangement attach to the sale record, so the store can answer without a phone call.',
    },
  ],

  modulesLede:
    'One system across serial-tracked stock, service, brand claims and customers.',
  modules: [
    {
      id: 'inventory',
      title: 'Units, serial numbers and demo stock',
      line:
        'Stock is held per unit with model, serial number, cost, brand, location and state — including demo, reserved, sold and returned.',
      why:
        'Serial-level tracking is what makes warranty, service, protection claims and recall handling answerable at all.',
      example:
        'Thirty-one units of a model held on the date a price drop was announced, identified by serial for the protection claim.',
    },
    {
      id: 'relationships',
      title: 'Customers and warranty holders',
      line:
        'Customers are records with their purchases by serial, warranty positions, service history, finance arrangements and interactions.',
      why:
        'An electronics customer returns for service, for accessories and for the next upgrade, and each of those is easier if the first sale is on record.',
      example:
        'A customer arrives with a two-year-old unit. The invoice, warranty position and prior service visits are on one record.',
    },
    {
      id: 'work',
      title: 'Service jobs, installations and demos',
      line:
        'Each is work with a customer, a unit, an owner, a promised date and a state, including time spent with a brand service centre.',
      why:
        'Service is where the store’s reputation is made and where its costs escape, and it is usually the least recorded part of the business.',
      example:
        'Nine jobs past their promised date, four of them waiting at a brand centre, visible as such rather than as customer complaints.',
    },
    {
      id: 'suppliers',
      title: 'Brands, distributors and service centres',
      line:
        'Suppliers are relationships with their orders, scheme terms, price protection agreements, claims, service turnaround and balances.',
      why:
        'A meaningful part of electronics retail margin arrives from the brand side and is claimed rather than earned automatically.',
      example:
        'Brand service turnaround measured against promises, alongside claims raised and settled.',
    },
    {
      id: 'workflows',
      title: 'Claims, protection and approvals',
      line:
        'Price protection claims, scheme claims, warranty escalations, discounts and returns move through defined steps with recorded decisions.',
      why:
        'These are time-bound. A claim window that closes is money permanently lost, and nothing else in the store announces it.',
      example:
        'A price drop raises a protection claim against the units held, routed for approval before the window closes.',
    },
    {
      id: 'records',
      title: 'Invoices, warranties and plans',
      line:
        'Invoices, warranty terms, extended plans, finance documents and service reports attach to the unit and customer they concern.',
      why:
        'Every one of these is needed months or years later, urgently, at a counter.',
      example:
        'An extended plan sold three years ago is on the sale record, so the store answers without calling the insurer.',
    },
    {
      id: 'people',
      title: 'Sales staff and service desk',
      line:
        'Staff are modelled once, and every sale, service job, demo and discount carries who handled it.',
      why:
        'Attachment rate on accessories and plans varies enormously by salesperson, and so does service throughput.',
      example:
        'Plan and accessory attachment by salesperson, from the transactions themselves.',
    },
    {
      id: 'locations',
      title: 'Stores, service desk and warehouse',
      line:
        'Locations roll into the business, with unit-level stock, permissions and reporting following the same structure.',
      why:
        'A unit at the service desk, a unit on display and a unit in the warehouse are in different states, and treating them as one pool is where counts break.',
      example:
        'Units by state and location, so demo stock and service holdings remain visible rather than drifting.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from unit-level records',
      line:
        'Ageing by model, margin against brand support, service turnaround, claim recovery, attachment rate and store comparison come from the operational records.',
      why:
        'Electronics margins depend on brand support and on not being caught holding superseded stock, and both are timing questions.',
      example:
        'Claim recovery against claims available, current rather than reviewed after the windows have closed.',
    },
    {
      id: 'ai',
      title: 'Ask the store a question',
      line:
        'Verity AI answers from your own unit, customer, service and brand records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking cross stock, brand agreements and service at once.',
      example:
        '"Which units do we hold that qualify for the announced price protection?" returns thirty-one, and one instruction raises the claim.',
    },
    {
      id: 'control',
      title: 'Who can discount, adjust and write off',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'High unit values mean a single unrecorded adjustment is material.',
      example:
        'Every stock state change on a unit carries the person and the time, and cost is visible only to those entitled to it.',
    },
    {
      id: 'communication',
      title: 'Service updates on the job',
      line:
        'Notes, notifications and activity attach to the service job, unit or customer they concern.',
      why:
        'Most customer frustration in electronics service is the absence of an update that someone did have.',
      example:
        'The brand centre’s estimate sits on the job, so anyone at the counter can answer the customer’s call.',
    },
  ],

  workflowsHeading: 'Everything resolves to the unit.',
  workflowsLede:
    'These sequences already run. Recorded against the serial number, they connect to each other.',
  workflows: [
    {
      name: 'Purchase to sale',
      steps: [
        'Purchase order raised against the brand or distributor',
        'Delivery received and each unit recorded by serial',
        'Scheme and protection terms attached to the purchase',
        'Unit allocated to a store, display or warehouse state',
        'Sale recorded against the customer with the serial',
        'Warranty start date set from the invoice',
      ],
      note:
        'Recording the serial at receipt is what makes every later claim and service event resolvable.',
    },
    {
      name: 'Service job',
      steps: [
        'Unit received against the customer and its original sale',
        'Warranty position determined from the invoice date',
        'Job assigned with a promised date, in-house or to a brand centre',
        'Progress and brand centre time recorded on the job',
        'Customer notified on completion',
        'Cost recovered from the brand where warranty applies',
      ],
      note:
        'Warranty recovery only happens if the original sale and the job are the same chain of records.',
    },
    {
      name: 'Price protection claim',
      steps: [
        'Brand announces a price reduction with an effective date',
        'Units held on that date identified by serial',
        'Claim assembled with the purchase records attached',
        'Approval routed and the claim filed inside the window',
        'Settlement recorded against the brand balance',
      ],
      note:
        'This is a timing problem. The records exist; assembling them by hand is what misses the window.',
    },
    {
      name: 'Ageing and supersession',
      steps: [
        'Models with no movement past the threshold identified',
        'Supersession and remaining brand support checked',
        'Clearance or protection decision raised',
        'Markdown applied and recorded against the units',
        'Recovery compared against original cost',
      ],
      note:
        'Superseded stock loses value fastest in the first weeks, which is exactly when it is least visible.',
    },
    {
      name: 'Demo unit lifecycle',
      steps: [
        'Unit moved to demo state with a location and an owner',
        'Condition and accessories recorded',
        'Demo period tracked against policy',
        'Unit sold as demo, returned to stock or written down',
        'Outcome recorded against the unit',
      ],
      note:
        'Demo stock stays counted rather than falling outside stock discipline.',
    },
    {
      name: 'Upgrade follow-up',
      steps: [
        'Customers with units past a defined age identified',
        'Warranty and service history reviewed',
        'Follow-up assigned to the salesperson who sold the unit',
        'Outcome recorded on the customer record',
      ],
      note:
        'The best-qualified buyer for a new unit is the person who bought the last one, and only the record knows who that is.',
    },
  ],

  ai: {
    heading: 'Ask about the units, not the models.',
    lede:
      'Verity AI reads the same unit, customer, service and brand records the store runs on. It answers from your own business, only shows what the person asking can see, and can turn the answer into work assigned to the counter or the service desk.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which units do we hold that qualify for the announced price protection?',
      'Which service jobs are past their promised date, and where are they?',
      'Which brand service centres run longest against their promised turnaround?',
      'Which models have not moved in ninety days, and what are they worth?',
      'Which customers bought units now past three years old?',
      'What brand support is claimable and unclaimed this quarter?',
      'What is the plan and accessory attachment rate by salesperson?',
      'Which demo units are unaccounted for?',
      'Summarise this month’s sales, service and claim position.',
    ],
  },

  automationHeading: 'The windows that close quietly.',
  automationLede:
    'Each runs from the unit and brand records at the point the condition is met.',
  automations: [
    {
      trigger: 'A brand announces a price reduction',
      steps: [
        'Units held on the effective date identified by serial',
        'Protection claim assembled with purchase records',
        'Approval routed and filing task assigned with the deadline',
      ],
    },
    {
      trigger: 'A service job passes its promised date',
      steps: [
        'Job flagged with its current state and location',
        'Owner notified, including brand centre delay where applicable',
        'Customer update task raised',
      ],
    },
    {
      trigger: 'A unit is received',
      steps: [
        'Serial recorded against the purchase and brand',
        'Scheme and protection terms attached',
        'Stock state and location set',
      ],
    },
    {
      trigger: 'A model passes its ageing threshold',
      steps: [
        'Units flagged with value and days held',
        'Brand support checked for remaining protection',
        'Clearance review assigned',
      ],
    },
    {
      trigger: 'A warranty is approaching expiry',
      steps: [
        'Customer and unit identified from the sale record',
        'Extended plan follow-up assigned to the salesperson',
        'Outcome recorded on the customer record',
      ],
    },
    {
      trigger: 'A demo unit exceeds its policy period',
      steps: [
        'Unit flagged with condition and days on display',
        'Sale or write-down decision raised',
        'Outcome recorded against the unit',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see at unit level.',
  intelligenceLede:
    'Drawn from serial-level records the store creates as it trades.',
  intelligence: [
    {
      area: 'Stock',
      points: [
        'Units by model, state and location',
        'Ageing by model against supersession',
        'Demo and service holdings',
        'Value tied in superseded stock',
      ],
    },
    {
      area: 'Service',
      points: [
        'Jobs open, completed and past promised date',
        'Turnaround in-house against brand service centres',
        'Warranty cost recovered from brands',
        'Repeat failures by model',
      ],
    },
    {
      area: 'Brand support',
      points: [
        'Scheme and protection claims raised and settled',
        'Claim windows approaching close',
        'Support earned against support collected',
        'Margin by brand after support',
      ],
    },
    {
      area: 'Customers',
      points: [
        'Purchases by serial and warranty position',
        'Units approaching upgrade age',
        'Service history and repeat visits',
        'Plan and accessory attachment',
      ],
    },
    {
      area: 'Sales',
      points: [
        'Revenue and units by model, brand and store',
        'Attachment rate by salesperson',
        'Discounting against approval thresholds',
        'Finance-assisted sales share',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the serial at receipt and at sale, which the category already requires.',

  rolesHeading: 'One store, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What is my stock worth and what am I not claiming?',
      focus: 'Ageing against supersession, brand support earned versus collected, margin by brand, store comparison.',
    },
    {
      role: 'Store manager',
      question: 'What is stuck today?',
      focus: 'Service jobs past date, demo units unaccounted, approvals pending, availability across stores.',
    },
    {
      role: 'Service desk',
      question: 'Where is this customer’s unit?',
      focus: 'Job state and location, warranty position from the original sale, brand centre turnaround, updates due.',
    },
    {
      role: 'Sales staff',
      question: 'What did this customer buy and when?',
      focus: 'Purchases by serial, warranty status, extended plans, units due for upgrade.',
    },
  ],

  useCasesHeading: 'What electronics retailers use Verity for',
  useCases: [
    {
      name: 'Serial-level stock',
      body: 'Every unit tracked by serial with model, cost, brand, state and location, which is what makes warranty, service and claims resolvable.',
    },
    {
      name: 'Warranty and service jobs',
      body: 'Service as work with a customer, a unit, a promised date and a state, including time spent at a brand service centre.',
    },
    {
      name: 'Price protection claims',
      body: 'Units held on the effective date identified by serial, so the claim is assembled from records inside the window.',
    },
    {
      name: 'Brand scheme recovery',
      body: 'Scheme terms recorded against qualifying purchases, so support earned is support collected.',
    },
    {
      name: 'Ageing against supersession',
      body: 'Models with no movement surfaced with remaining brand support, while clearance can still recover most of the cost.',
    },
    {
      name: 'Demo unit control',
      body: 'Display stock as a state with a location and an owner, so it stays counted rather than drifting out of the record.',
    },
    {
      name: 'Upgrade follow-up',
      body: 'Customers with units past a defined age identified from their original purchase, assigned to the salesperson who sold it.',
    },
    {
      name: 'Plan and accessory attachment',
      body: 'Attachment rate measured per salesperson, from the transactions rather than from a monthly total.',
    },
    {
      name: 'Asking the store questions',
      body: 'Plain-language questions across units, service, brands and customers at once, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your billing software, service docket book and brand claim records are mapped during implementation. Stock is brought across at serial level where records allow, along with customers, warranties and open service jobs, and Verity is introduced as the operational layer over what continues to run.',

  faqHeading: 'Questions electronics retailers ask',
  faqs: [
    [
      'What can AI software do for an electronics store?',
      'Verity AI answers questions from your own unit, customer, service and brand records: which units you hold that qualify for an announced price protection, which service jobs are past their promised date and where they are, which models have not moved in ninety days, which customers own units now due for upgrade. Each answer can become work assigned to the counter or the service desk.',
    ],
    [
      'Does Verity track serial numbers?',
      'Yes, and that is the foundation of the page. Stock is held per unit with its serial, so the sale, the customer, the warranty start date, later service jobs and any brand claim all resolve to the same record.',
    ],
    [
      'Can it handle warranty and service jobs?',
      'A service job is work with a customer, a unit, an owner, a promised date and a state, including time spent at a brand service centre. Because it links to the original sale, the warranty position is known and the recoverable cost is claimable.',
    ],
    [
      'Does it help with price protection claims?',
      'When a brand announces a reduction, the units held on the effective date are identified by serial and the claim is assembled from the purchase records — which is a timing problem rather than a data problem, and timing is what usually loses the claim.',
    ],
    [
      'Can Verity track brand schemes?',
      'Scheme terms are recorded against the purchases they apply to, so support earned can be compared with support actually collected and claims can be filed before their windows close.',
    ],
    [
      'Does it replace our billing or finance arrangements?',
      'No. Billing and any finance or insurance arrangements continue as they are and are mapped during implementation. Verity holds the units, the customers, the service, the claims and the reporting across them.',
    ],
    [
      'Can it manage demo and display units?',
      'Demo is a stock state with a location, an owner and a policy period, so display units stay counted and their eventual sale or write-down is recorded rather than drifting out of the count.',
    ],
    [
      'Is it suitable for a single store?',
      'A single store still has serials, warranties, service jobs and brand claims. Those are the parts Verity handles. Multiple stores and a separate service desk use the same structure.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the store trades and services, configuration, migration of stock, customers and open jobs, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with service, or with what you are not claiming.',
  ctaLede:
    'Those two carry most of the recoverable money in electronics retail. Tell us which is costing you more and we will show you what it looks like in Verity.',

  related: ['retail-stores', 'auto-parts-stores', 'hardware-stores', 'furniture-stores', 'repair-services', 'distributors'],
};
