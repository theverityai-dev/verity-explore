export default {
  slug: 'jewellery-stores',
  status: 'published',
  plural: 'jewellery stores',
  subject: 'jewellery store',

  seo: {
    title: 'AI business management software for jewellery stores | Verity',
    description:
      'Verity connects jewellery stock, custom orders, karigar work, suppliers and high-value customers into one operational system you can ask questions of.',
    keywords: [
      'AI software for jewellery stores',
      'jewellery store management software',
      'jewellery inventory management software',
      'CRM for jewellery stores',
      'business software for jewellers',
      'jewellery shop billing and stock software',
    ],
  },

  hero: {
    eyebrow: 'Verity for jewellery stores',
    headline: 'A jewellery store is an inventory problem wearing a retail costume.',
    lede:
      'Most of your capital is sitting in a display case, a safe or a karigar’s workshop. Verity keeps every piece, every custom order, every supplier and every customer on one record, so you can see where the money is and what it is doing.',
    note: 'Runs alongside what you already use. Nothing has to be replaced on day one.',
    panel: {
      title: 'Store',
      meta: 'Main showroom · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Stock value', value: '₹3.8 Cr', note: 'across 2,140 pieces' },
        { label: 'Custom orders', value: '34', note: 'in the workshop' },
        { label: 'Slow-moving', value: '₹62 L', note: 'no movement in 120 days' },
        { label: 'Outstanding', value: '₹18.4 L', note: 'against 23 customers' },
      ],
      rows: [
        { name: 'Bridal set BR-2214 promised for Thursday', meta: 'Karigar Ashok · polishing pending', active: true },
        { name: 'Advance taken, design not confirmed', meta: '3 orders · oldest 11 days', active: true },
        { name: 'Diamond ring stock below reorder point', meta: '0.5ct solitaire band · 2 left', active: true },
        { name: 'Repair collected but not billed', meta: '6 jobs · since last week', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own records in this shape.',
    },
  },

  overview: {
    heading: 'Running a jewellery store means managing more than sales.',
    paragraphs: [
      'A jewellery business holds more value per square foot than almost any other kind of shop, and almost none of it is standardised. A piece has a design, a weight, a purity, a set of stones, a making charge, a supplier, a location and a history — and two pieces that look identical in a photograph can differ by forty thousand rupees. That is why generic retail software fails here: it was built for products with SKUs and fixed prices, and a jewellery store deals in individual items with individual stories.',
      'Then there is the work that never touches the display case. Custom orders go out to karigars and come back weeks later. Old gold is exchanged and re-melted. Repairs, polishing and re-sizing arrive with a promise date attached and no paperwork. Approval sales go out on trust. Every one of those is inventory that has left the building without being sold, and in most stores the only record of it is a notebook entry and someone’s memory.',
      'Customers behave differently too. A jewellery customer buys rarely and spends heavily, often for an occasion that was known about months in advance. The value of knowing that a family bought a bridal set in 2023 is not sentimental — it is that they have a younger daughter, and someone should be calling them. In most stores nobody does, because the purchase history is on a bill book.',
      'Verity treats all of this as one operation. The piece, the custom order, the karigar, the supplier, the customer and the payment are records in the same system with one permission model and one history. Nothing has to be reconciled between systems, because there is only one.',
    ],
  },

  terminology: [
    ['Pieces, sets, collections', 'Records'],
    ['Custom orders, repairs, polishing', 'Work'],
    ['Customers, families, referrals', 'Relationships'],
    ['Karigars, sales staff, showroom teams', 'People'],
    ['Wholesalers, stone dealers, refiners', 'Suppliers'],
    ['Approvals, advances, delivery promises', 'Workflows'],
    ['Showroom, safe, workshop, exhibition', 'Locations'],
  ],

  challengesHeading: 'The problems are not sales problems.',
  challengesLede:
    'Almost every difficulty in a jewellery store comes back to the same thing: high-value items whose location, state and ownership are recorded informally, if at all.',
  challenges: [
    {
      problem: 'Stock is counted, not tracked',
      detail:
        'The annual or quarterly physical count tells you what you have. It does not tell you what moved, what has been sitting untouched for eight months, or which pieces have been out on approval since Diwali.',
      outcome:
        'Every piece is a record with a state and a location. Movement between showroom, safe, workshop and approval is a change on that record, not a note in a register.',
    },
    {
      problem: 'Custom orders live in a notebook',
      detail:
        'An advance is taken, a design is discussed, a karigar is briefed, a date is promised. None of that is in a system, so the only person who can answer "where is the Mehta order" is the person who took it.',
      outcome:
        'A custom order is work with an owner, a state and a promise date. Anyone in the store can see which stage it is at, and the order shows up as overdue before the customer notices.',
    },
    {
      problem: 'Slow-moving stock is discovered too late',
      detail:
        'Capital sits in designs that stopped selling two seasons ago, and it becomes obvious only when cash is needed for the wedding season and there is none.',
      outcome:
        'Movement is recorded, so ageing is a query rather than an audit. You can see what has not moved in ninety or a hundred and twenty days while there is still time to act on it.',
    },
    {
      problem: 'The customer list is a bill book',
      detail:
        'You know your regulars by face and by family. What you cannot do is find every customer who bought a bridal set three years ago, or everyone who has not returned since 2024.',
      outcome:
        'Purchase history sits on the customer record. The list of people worth calling before the wedding season is something you ask for, not something you reconstruct.',
    },
    {
      problem: 'Two staff members give two different answers',
      detail:
        'Whether a piece is available, whether an advance was taken, whether a repair is ready — the answer depends on who you ask and what they remember.',
      outcome:
        'One record, one state, one history. Everyone in the store reads the same answer, and the record shows who changed it and when.',
    },
    {
      problem: 'Performance is known only at the end of the year',
      detail:
        'Which categories are actually profitable, which staff member is closing high-value sales, whether making charges are holding — these become clear at audit time, long after the decisions were needed.',
      outcome:
        'Reports draw from live records rather than from a compiled export, so the picture is available on a Tuesday in March instead of the following January.',
    },
  ],

  modulesLede:
    'Verity is one system, not a bundle of tools. These are the parts of it a jewellery store actually uses, described in the terms your store already uses.',
  modules: [
    {
      id: 'inventory',
      title: 'Every piece, wherever it currently is',
      line:
        'Stock is held as individual records — design, weight, purity, stones, making charge, supplier and cost — with a state and a location that change as the piece moves.',
      why:
        'Your inventory is not interchangeable units. A jewellery store needs to know about <em>this</em> piece: where it is, what it cost, how long it has been there and whether it is committed to someone.',
      example:
        'A solitaire band moves from the safe to the showroom for a viewing, goes out on approval, comes back, and is finally sold. Four state changes on one record, each with a timestamp and a person against it.',
    },
    {
      id: 'orders',
      title: 'Custom orders, repairs and approvals',
      line:
        'Orders are records with a customer, an advance, a specification, an owner and a promised date, moving through states from confirmation to delivery.',
      why:
        'The custom side of a jewellery store is where the reputation is won and lost. A missed date on a bridal order costs more than the margin on the piece.',
      example:
        'A bridal set is confirmed with a forty percent advance. The order shows the design brief, the karigar it went to, the stones issued against it and the date it was promised — and flags when polishing has not started with three days left.',
    },
    {
      id: 'relationships',
      title: 'Customers who buy rarely and spend heavily',
      line:
        'Each customer is a record with their purchases, preferences, sizes, repairs, advances outstanding and every interaction the store has had with them.',
      why:
        'A jewellery customer is a household, not a transaction. The value of the record is in the second and third purchase, which may be years away and will be triggered by an occasion you can anticipate.',
      example:
        'Before the wedding season, you ask for every customer who bought bridal jewellery three or more years ago and has not been contacted since. The list is a query against records you already have.',
    },
    {
      id: 'suppliers',
      title: 'Wholesalers, karigars and stone dealers',
      line:
        'Suppliers are relationships with their own orders, deliveries, outstanding balances and history, connected to the stock and custom work they feed.',
      why:
        'Your supply side is a mix of large wholesalers and individual craftspeople, and the material you issue to a karigar is inventory that has left the building.',
      example:
        'Gold issued to a karigar against an order is recorded as movement, not as a favour. What went out, what came back and what is still with them is visible without a phone call.',
    },
    {
      id: 'records',
      title: 'Certificates, valuations and documents',
      line:
        'Documents attach to the record they belong to — a certificate to a piece, an invoice to a sale, a specification to an order — with the same permissions as everything else.',
      why:
        'High-value jewellery comes with paperwork that must be produced years later, usually at exactly the moment nobody can find it.',
      example:
        'A customer returns with a five-year-old diamond piece. The certificate, the original invoice and the two service visits since are on the same record as the piece.',
    },
    {
      id: 'people',
      title: 'Showroom staff and workshop teams',
      line:
        'Staff, roles and responsibilities are modelled once, and every record shows who owns it and who last touched it.',
      why:
        'In a store where a single sale can be several lakhs, knowing which staff member is actually converting high-value walk-ins is a commercial question, not an HR one.',
      example:
        'Sales are attributed to the person who made them, so the difference between footfall performance and closing performance is visible.',
    },
    {
      id: 'workflows',
      title: 'Advances, approvals and delivery promises',
      line:
        'Discounts beyond a threshold, goods going out on approval and old gold exchanges move through defined approval steps rather than through a conversation.',
      why:
        'The transactions that need control in a jewellery store are the informal ones — the approval sale, the extra discount, the exchange valuation — precisely because they are the ones done on trust.',
      example:
        'A discount above the owner’s threshold cannot be applied silently. It becomes an approval with a requester, a reason and a decision on the record.',
    },
    {
      id: 'intelligence',
      title: 'Reports drawn from live records',
      line:
        'Category performance, stock ageing, staff conversion, custom order throughput and outstanding balances come from the operational records themselves.',
      why:
        'A jewellery store’s most expensive mistake is buying more of what is not selling, and that is only avoidable if movement data is current.',
      example:
        'Ageing by category shows that light-weight daily wear turned over four times this year while a heavy traditional range has not moved since the last festive season.',
    },
    {
      id: 'ai',
      title: 'Ask the store a question',
      line:
        'Verity AI answers from your own records and workflows, only shows what the person asking is allowed to see, and can turn the answer into assigned follow-ups.',
      why:
        'The questions a jeweller wants answered are specific and awkward to query — which customers went quiet, which pieces are stuck, which orders are about to be late.',
      example:
        '"Which custom orders are due in the next ten days and have not started polishing?" returns three, and one instruction creates follow-ups for the staff who own them.',
    },
    {
      id: 'locations',
      title: 'Showroom, safe, workshop, exhibition',
      line:
        'Locations roll into the business, and permissions, reporting and exceptions follow the same structure.',
      why:
        'Even a single-store jeweller has stock in four places. A second branch or an exhibition stall multiplies the problem without changing its shape.',
      example:
        'Stock at an exhibition is a location like any other, so what went, what sold and what came back reconciles against records rather than against a packing list.',
    },
    {
      id: 'control',
      title: 'Who can see and change what',
      line:
        'One permission model and one audit trail across every record in the business.',
      why:
        'A jewellery store gives a lot of people access to a lot of value. The question of who changed a weight, a price or a stock state should never be unanswerable.',
      example:
        'A piece’s cost price is visible to the owner and not to showroom staff, and every change to a stock record carries the person and the time.',
    },
    {
      id: 'communication',
      title: 'The conversation stays with the record',
      line:
        'Comments, notifications and activity attach to the order, the piece or the customer they concern.',
      why:
        'Most jewellery-store context currently lives in WhatsApp threads that only two people can see.',
      example:
        'The customer’s change of mind about the setting is a note on the order, visible to the karigar’s supervisor, rather than a message on one salesperson’s phone.',
    },
  ],

  workflowsHeading: 'What actually happens, recorded as it happens.',
  workflowsLede:
    'These are the sequences a jewellery store runs every week. In Verity each step is a state change on a record, so the next person picks up where the last one left off.',
  workflows: [
    {
      name: 'Custom bridal order',
      steps: [
        'Customer confirms a design and pays an advance',
        'Order record created with specification, advance and promised date',
        'Gold and stones issued against the order, recorded as stock movement',
        'Karigar assigned; order state moves to in-workshop',
        'Piece returns, is weighed and checked against the specification',
        'Polishing, hallmarking and final quality check completed',
        'Balance collected, order state moves to delivered',
        'Purchase joins the customer’s history for future occasions',
      ],
      note:
        'Every step has an owner, so a delay in the workshop is visible in the showroom before the promised date arrives.',
    },
    {
      name: 'Piece out on approval',
      steps: [
        'Piece issued against a customer record, state moves to on-approval',
        'Return-by date set; the piece is no longer available for sale',
        'Reminder raised as the date approaches',
        'Piece is either sold and invoiced, or returned to stock',
        'Return closes the movement and restores availability',
      ],
      note:
        'Approval stock stops being an informal arrangement and becomes inventory with a state and a deadline.',
    },
    {
      name: 'Old gold exchange',
      steps: [
        'Old gold received against a customer record with weight and purity',
        'Valuation recorded; approval raised if it exceeds the set threshold',
        'Exchange value applied to the new purchase',
        'Old gold moves to the refining or melt location',
        'Recovered material returns to stock as a new record',
      ],
      note:
        'The exchange is the transaction most often done on judgement alone. Here it carries a valuation, an approver and a trail.',
    },
    {
      name: 'Repair and service job',
      steps: [
        'Item received with a description, photograph and promised date',
        'Job assigned to a karigar or sent to an external workshop',
        'Work completed and checked',
        'Customer notified; item collected and billed',
        'Service joins the piece and customer history',
      ],
      note:
        'Repairs are the work most likely to be delivered without ever being billed. As records, they are counted.',
    },
    {
      name: 'Purchase and stock intake',
      steps: [
        'Purchase order raised against a wholesaler',
        'Goods received and checked against the order',
        'Each piece created as a record with weight, purity, stones and cost',
        'Pieces assigned to a location — showroom, safe or branch',
        'Supplier balance and delivery performance updated',
      ],
      note:
        'Intake is where stock accuracy is won. Recording it once at the door removes the reconciliation later.',
    },
    {
      name: 'Festive season preparation',
      steps: [
        'Ageing report identifies stock that has not moved in 120 days',
        'Category performance from last season reviewed against current stock',
        'Purchase decisions raised against the gaps rather than against habit',
        'Customer list built from purchase history and occasion timing',
        'Follow-ups assigned to showroom staff with owners and dates',
      ],
      note:
        'The season is planned against records instead of against the general sense that traditional sets did well last year.',
    },
  ],

  ai: {
    heading: 'Ask the store what is going on.',
    lede:
      'Verity AI answers from the records your store already owns. It is not a chatbot bolted onto a catalogue — it reads the same stock, orders, customers and workflows the rest of the system runs on, and it can act on what it finds.',
    panelMeta: 'Grounded in your records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which pieces have not moved in the last 120 days, and what are they worth?',
      'Which custom orders are due in the next ten days?',
      'Which customers bought bridal jewellery three or more years ago and have not returned?',
      'What is still with karigars against issued material?',
      'Which categories sold best this festive season compared with last?',
      'How much is outstanding against customers, and for how long?',
      'Which staff member closed the highest value of sales this month?',
      'Which pieces are out on approval past their return date?',
      'Summarise this month’s store performance.',
    ],
  },

  automationHeading: 'The chasing is the job. Verity does that part.',
  automationLede:
    'These run from the records themselves, so nobody has to remember to start them.',
  automations: [
    {
      trigger: 'A custom order is confirmed with an advance',
      steps: [
        'Order record created with specification and promised date',
        'Material issue recorded against the order',
        'Karigar assigned and notified',
        'Follow-up raised if the next stage has not started by its due date',
      ],
    },
    {
      trigger: 'A piece goes out on approval',
      steps: [
        'Stock state moves to on-approval against the customer',
        'Return-by date set on the record',
        'Reminder raised before the date',
        'Escalation to the owner if the piece is not back or sold',
      ],
    },
    {
      trigger: 'Stock of a line falls below its reorder point',
      steps: [
        'Reorder flagged against the supplier who last delivered it',
        'Purchase raised for approval',
        'Delivery checked against the order on receipt',
      ],
    },
    {
      trigger: 'A discount exceeds the approval threshold',
      steps: [
        'Sale held at the approval step',
        'Request routed to the owner with the reason attached',
        'Decision recorded against the transaction',
      ],
    },
    {
      trigger: 'A repair is marked ready',
      steps: [
        'Customer notified that the item can be collected',
        'Billing task created so the job is not delivered unbilled',
        'Service recorded against the piece and the customer',
      ],
    },
    {
      trigger: 'A customer’s balance passes thirty days',
      steps: [
        'Outstanding flagged on the customer record',
        'Follow-up assigned to the staff member who made the sale',
        'Owner notified if it passes sixty days',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can actually see.',
  intelligenceLede:
    'Not a dashboard of vanity numbers. These are the questions a jewellery business runs on, answered from live records.',
  intelligence: [
    {
      area: 'Stock and capital',
      points: [
        'Value held, by category and by location',
        'Ageing — what has not moved in 60, 90 or 120 days',
        'Turnover by category across seasons',
        'Material issued to karigars and not yet returned',
        'Stock committed to orders versus stock available to sell',
      ],
    },
    {
      area: 'Customers',
      points: [
        'Highest-value customers and households',
        'Customers who have not purchased in a defined period',
        'Purchase history by occasion and by category',
        'Outstanding balances and their ageing',
        'Repairs and services against each customer',
      ],
    },
    {
      area: 'Custom orders',
      points: [
        'Orders in the workshop, by stage and by karigar',
        'Orders approaching or past their promised date',
        'Time taken from confirmation to delivery',
        'Advances held against undelivered orders',
      ],
    },
    {
      area: 'Sales',
      points: [
        'Revenue by category, by period and by branch',
        'Average transaction value',
        'Conversion by staff member',
        'Discounting patterns against approval thresholds',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Outstanding payable by supplier',
        'Delivery reliability against ordered dates',
        'Cost movement on repeat purchases',
        'Karigar throughput and rework',
      ],
    },
    {
      area: 'Operations',
      points: [
        'Approval stock out past its return date',
        'Repairs delivered but not billed',
        'Approvals waiting on a decision',
        'Exceptions raised and how quickly they closed',
      ],
    },
  ],
  intelligenceNote:
    'Every one of these is drawn from records the store creates in the course of ordinary work. None of it requires separate data entry.',

  rolesHeading: 'The store is shared. The view is not.',
  rolesLede:
    'Everyone works from the same records, and each role opens on the question they actually need answered.',
  roles: [
    {
      role: 'Owner',
      question: 'Where is my capital and what is it doing?',
      focus: 'Stock value and ageing, category performance, outstanding balances, approvals above threshold.',
    },
    {
      role: 'Showroom manager',
      question: 'What is happening in the store today?',
      focus: 'Orders due, approval stock out, repairs ready, staff on floor, pieces committed against sales.',
    },
    {
      role: 'Sales staff',
      question: 'What do I need to know about this customer?',
      focus: 'Purchase history, sizes and preferences, outstanding balance, open orders and repairs.',
    },
    {
      role: 'Workshop supervisor',
      question: 'What is in the workshop and what is late?',
      focus: 'Orders by stage and karigar, material issued and returned, promised dates at risk.',
    },
    {
      role: 'Accounts',
      question: 'What is owed, and by whom?',
      focus: 'Customer outstanding, supplier payable, advances held, approvals awaiting a decision.',
    },
  ],

  useCasesHeading: 'What jewellers use Verity for',
  useCases: [
    {
      name: 'Piece-level inventory',
      body: 'Individual pieces with weight, purity, stones, cost, location and state — rather than SKU counts that do not describe what is actually in the case.',
    },
    {
      name: 'Custom order management',
      body: 'Confirmation, advance, specification, karigar assignment, material issue and delivery date on one record that anyone in the store can read.',
    },
    {
      name: 'High-value customer management',
      body: 'Household purchase history, preferences and occasions, so the second and third sale are anticipated rather than hoped for.',
    },
    {
      name: 'Approval and exchange control',
      body: 'The informal transactions — goods on approval, old gold exchange, discounts beyond threshold — carried out as approvals with a record.',
    },
    {
      name: 'Stock ageing and capital review',
      body: 'What has not moved, what it is worth and which categories are actually turning over, available before the buying decision rather than after it.',
    },
    {
      name: 'Karigar and supplier tracking',
      body: 'Material issued and returned, orders outstanding, delivery reliability and payable balances against each supplier and craftsperson.',
    },
    {
      name: 'Repair and service jobs',
      body: 'Received, assigned, completed, notified, collected and billed — as work with an owner rather than as a tag in a drawer.',
    },
    {
      name: 'Multi-location and exhibition stock',
      body: 'Showroom, safe, workshop, branch and exhibition as locations, with movement between them recorded and reconciled.',
    },
    {
      name: 'Store performance reporting',
      body: 'Category, staff, season and branch performance drawn from live records instead of assembled at audit time.',
    },
  ],

  migration:
    'You do not have to replace your billing software or your tally on day one. Verity maps what you already run — the stock sheet, the customer book, the order register, the existing accounting system — brings across the records that matter, and introduces the operational layer alongside what already works.',

  faqHeading: 'Questions jewellers ask',
  faqs: [
    [
      'What can AI software actually do for a jewellery store?',
      'Verity AI answers questions from your own stock, order and customer records rather than from general knowledge. You can ask which pieces have not moved in four months, which custom orders are due next week, or which customers have not returned since a given year, and get an answer drawn from the store’s own records — and then turn that answer into follow-ups assigned to your staff.',
    ],
    [
      'Can Verity track jewellery inventory at the level of individual pieces?',
      'Yes. Stock is held as individual records rather than as SKU counts, so a piece carries its own design, weight, purity, stones, cost, supplier, location and state. Movement between showroom, safe, workshop, approval and sale is a change on that record with a person and a timestamp against it.',
    ],
    [
      'Can it manage custom orders and karigar work?',
      'Yes. A custom order is a work record with a customer, an advance, a specification, an assigned karigar, issued material and a promised date. Material issued against the order is recorded as stock movement, so what is currently with a craftsperson is visible without a phone call.',
    ],
    [
      'Does Verity handle customers who buy only once every few years?',
      'That is the customer profile it suits best. Purchase history, preferences, sizes, repairs and outstanding balances sit on the customer record permanently, so the store can find every household that bought for a particular occasion several years ago rather than relying on memory.',
    ],
    [
      'Can Verity work alongside our existing billing or accounting software?',
      'Yes. Verity is introduced as an operational layer over what you already run. Existing systems are mapped during implementation, the records that matter are migrated, and the rest of your setup continues to work while the new layer takes over the operational side.',
    ],
    [
      'Is Verity suitable for a single-store jeweller, or only for chains?',
      'A single store already has stock in a showroom, a safe and a workshop, plus pieces out on approval. That is a multi-location problem in one building, and it is the problem Verity is built for. Multiple branches or exhibition stalls use the same structure without additional setup.',
    ],
    [
      'Does Verity value stock or track gold rates?',
      'Verity holds the cost, weight and purity you record against each piece and reports on the stock value that follows from them. It does not price stock from a live rate feed, and it does not perform statutory valuation — those remain with your existing accounting arrangements.',
    ],
    [
      'How long does it take to get running?',
      'Implementation is about four weeks: discovery and mapping of how your store actually works, configuration to match it, migration of your existing records, and then an ongoing operations partnership rather than a handover and a manual.',
    ],
    [
      'Who in the store can see cost prices and margins?',
      'That is set by the permission model. Verity has one permission layer across every record, so cost and margin can be visible to the owner and accounts while showroom staff see availability, customer history and order status.',
    ],
  ],

  ctaHeading: 'Start with the part of the store that hurts most.',
  ctaLede:
    'For most jewellers that is either the custom order book or the stock that has stopped moving. Tell us which one, and we will show you what it looks like in Verity.',

  related: ['fashion-stores', 'gift-shops', 'cosmetics-stores', 'electronics-stores', 'retail-stores', 'furniture-stores'],
};
