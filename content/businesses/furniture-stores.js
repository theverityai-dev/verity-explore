export default {
  slug: 'furniture-stores',
  status: 'published',
  plural: 'furniture stores',
  subject: 'furniture retail business',

  seo: {
    title: 'AI business management software for furniture stores | Verity',
    description:
      'Verity connects long-lead orders, made-to-order production, delivery and assembly scheduling, showroom stock and customer promises into one system.',
    keywords: [
      'AI software for furniture stores',
      'furniture retail management software',
      'made to order furniture tracking',
      'furniture delivery and assembly scheduling software',
    ],
  },

  hero: {
    eyebrow: 'Verity for furniture retail',
    headline: 'You sold it in March. You deliver it in June. Everything in between is the business.',
    lede:
      'Furniture retail is a promise with a long gap in the middle — production, transit, delivery and assembly. Verity holds the order, the stages and the customer promise on one record.',
    note: 'Runs alongside your existing billing and accounting.',
    panel: {
      title: 'Orders',
      meta: 'All orders · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Open orders', value: '146', note: '₹1.9 Cr committed' },
        { label: 'Past promised date', value: '18', note: 'customer already told' },
        { label: 'Awaiting delivery slot', value: '24', note: 'produced, not scheduled' },
        { label: 'Advances held', value: '₹38 L', note: 'against undelivered orders' },
      ],
      rows: [
        { name: '18 orders past the date the customer was given', meta: 'No revised date communicated', active: true },
        { name: '24 items ready with no delivery slot booked', meta: 'Warehouse space filling', active: true },
        { name: 'Fabric selection unconfirmed on 6 made-to-order items', meta: 'Production cannot start', active: true },
        { name: 'Transit damage claim unfiled with the transporter', meta: '₹2.1 L · window closing', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own orders in this shape.',
    },
  },

  overview: {
    heading: 'Furniture is retail where the sale and the fulfilment are months apart.',
    paragraphs: [
      'A customer chooses in a showroom, pays an advance, and receives the item weeks or months later. In between sit fabric and finish selections, a production run at a manufacturer or an in-house workshop, transit, a delivery slot the customer has to be home for, and assembly. Each of those is a place the promise can break, and the customer only experiences the last one.',
      'That gap is what makes furniture retail an operational business rather than a stock business. The showroom holds display pieces; the money is committed to orders that do not exist yet. Advances are held against undelivered goods, which is a liability the store carries for months.',
      'The characteristic failure is silence. An order stalls because a fabric selection was never confirmed, or because production slipped, and nobody tells the customer until the promised date passes. The store then absorbs both the delay and the loss of trust, and often a discount as well.',
      'The second is bulk. Furniture is large, expensive to store and easy to damage in transit. Warehouse space fills with produced items waiting for delivery slots, and transit damage claims against transporters and manufacturers go unfiled because the evidence was never captured at the point of receipt.',
      'Verity holds the order, its stages, the selections, the production, the delivery slot, the assembly and the customer promise as one chain of records with owners and dates.',
    ],
  },

  terminology: [
    ['Display pieces, stock items, made-to-order', 'Inventory'],
    ['Customer orders, advances, deliveries', 'Orders'],
    ['Production, delivery, assembly, service', 'Work'],
    ['Customers, interior designers, referrers', 'Relationships'],
    ['Manufacturers, workshops, transporters', 'Suppliers'],
    ['Selections, approvals, revised dates', 'Workflows'],
    ['Showroom, warehouse, workshop', 'Locations'],
  ],

  challengesHeading: 'The failure is always in the gap.',
  challengesLede:
    'Furniture retail problems happen in the months between the sale and the delivery, where nobody is watching.',
  challenges: [
    {
      problem: 'Orders stall on unconfirmed selections',
      detail:
        'A fabric or finish was never confirmed, so production never started, and the promised date arrives with nothing made.',
      outcome:
        'Selections are a stage on the order with an owner and an age, so an order that cannot start is visible within days.',
    },
    {
      problem: 'The customer finds out late',
      detail:
        'A delay is known internally weeks before the customer is told, because telling them is nobody’s specific task.',
      outcome:
        'A slipped stage raises a customer communication task, so a revised date is given before the original one passes.',
    },
    {
      problem: 'Produced stock waits for a delivery slot',
      detail:
        'Items are finished and occupy warehouse space while nobody has booked a slot with the customer.',
      outcome:
        'Readiness triggers scheduling work, so warehouse dwell time is a measured number rather than an accumulating cost.',
    },
    {
      problem: 'Transit damage is absorbed',
      detail:
        'An item arrives damaged, is repaired or replaced at the store’s cost, and the claim against the transporter or manufacturer is never filed.',
      outcome:
        'Condition is recorded at receipt against the consignment, so a claim is raised from evidence inside the window.',
    },
    {
      problem: 'Advances are a liability nobody sizes',
      detail:
        'Money is held against goods not yet delivered, and the total is known only when someone adds it up.',
      outcome:
        'Advances sit on the order record, so the liability against undelivered goods is current.',
    },
    {
      problem: 'Assembly is treated as an afterthought',
      detail:
        'Delivery is scheduled and assembly is assumed, so a two-person job arrives with one person and a missing part.',
      outcome:
        'Assembly is work with its own requirements and owner, scheduled with the delivery rather than after it.',
    },
  ],

  modulesLede:
    'One system across orders, production, delivery and the customer promise.',
  modules: [
    {
      id: 'orders',
      title: 'Customer orders and their stages',
      line:
        'Orders are records with their items, selections, advance, promised date, production state, delivery slot and assembly requirement.',
      why:
        'The order, not the stock item, is the unit of a furniture business, because it exists for months before the goods do.',
      example:
        'One hundred and forty-six open orders, eighteen past the date the customer was given, each showing the stage it stalled at.',
    },
    {
      id: 'work',
      title: 'Production, delivery and assembly',
      line:
        'Each stage is work with an owner, a due date and a state, connected to the order it serves.',
      why:
        'A furniture promise is a chain of dependent jobs, and a break at any one of them surfaces at the customer’s door.',
      example:
        'Twenty-four items produced with no delivery slot booked is a scheduling backlog visible before it becomes a warehouse problem.',
    },
    {
      id: 'inventory',
      title: 'Display, stock and produced items',
      line:
        'Stock is held per item with model, finish, cost, condition, location and state — display, in production, produced, in transit, delivered.',
      why:
        'The states matter more than the count. An item produced and awaiting a slot is a different cost from an item on display.',
      example:
        'Warehouse dwell time by item, which is the cost nobody measures and everybody pays.',
    },
    {
      id: 'relationships',
      title: 'Customers, designers and referrers',
      line:
        'Customers are records with their orders, selections, delivery history, advances and every interaction.',
      why:
        'Furniture buying is episodic and referral-driven, and interior designers in particular bring repeat volume worth tracking.',
      example:
        'A designer who brought eleven orders this year is a relationship with a record rather than a familiar name.',
    },
    {
      id: 'suppliers',
      title: 'Manufacturers, workshops and transporters',
      line:
        'Suppliers are relationships with their orders, lead times, delivery reliability, damage rates and outstanding balances.',
      why:
        'The promised date given to a customer is only as good as the manufacturer’s lead time, and that should be measured rather than assumed.',
      example:
        'A manufacturer whose actual lead time runs three weeks over its quoted one changes what the showroom should promise.',
    },
    {
      id: 'workflows',
      title: 'Selections, revised dates and claims',
      line:
        'Selection confirmations, date revisions, damage claims, discounts and cancellations move through defined steps with recorded decisions.',
      why:
        'A revised date given to a customer is a commitment, and it should be a recorded decision rather than a phone call somebody made.',
      example:
        'A transit damage claim raised from the condition recorded at receipt, inside the transporter’s window.',
    },
    {
      id: 'records',
      title: 'Specifications, images and delivery proof',
      line:
        'Selections, drawings, images, condition photographs and delivery confirmations attach to the order and item.',
      why:
        'Disputes in furniture retail are about what was chosen and what arrived, and both need evidence months later.',
      example:
        'A customer disputes a finish. The confirmed selection and the images are on the order.',
    },
    {
      id: 'people',
      title: 'Showroom staff, delivery and assembly crews',
      line:
        'Staff and crews are modelled once, and every order, delivery and assembly carries who owns it.',
      why:
        'The person who made the promise and the person who has to keep it are usually different, which is exactly why ownership must be explicit.',
      example:
        'Orders sold by each salesperson alongside how many were delivered on the date promised.',
    },
    {
      id: 'locations',
      title: 'Showroom, warehouse and workshop',
      line:
        'Locations roll into the business, with item state, permissions and reporting following the same structure.',
      why:
        'Bulky stock makes location a real cost, and items move between three of them before delivery.',
      example:
        'Warehouse occupancy by order age, so the cost of scheduling delay is visible.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from order records',
      line:
        'On-time delivery, stage duration, supplier lead time, warehouse dwell, advance liability and damage rates come from the operational records.',
      why:
        'A furniture business is judged on delivery dates, and delivery performance is not measurable without stage-level records.',
      example:
        'On-time delivery against the date originally promised, per supplier and per category.',
    },
    {
      id: 'ai',
      title: 'Ask the order book a question',
      line:
        'Verity AI answers from your own order, production, supplier and customer records, respects permissions, and can create assigned follow-ups.',
      why:
        'The important questions are about which orders are quietly stuck and which customers have not been told.',
      example:
        '"Which orders are past their promised date without a revised date communicated?" returns eighteen, with the calls assigned.',
    },
    {
      id: 'communication',
      title: 'What the customer was told',
      line:
        'Notes, notifications and activity attach to the order or customer they concern.',
      why:
        'The single most damaging thing in furniture retail is a customer who was told two different things by two people.',
      example:
        'The revised date given on the phone is on the order, so the next person says the same thing.',
    },
    {
      id: 'control',
      title: 'Who can discount, revise and cancel',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Discounts given to compensate for delays are a real cost and are usually granted at the counter under pressure.',
      example:
        'A goodwill discount is an approval carrying the delay that prompted it, so the true cost of late delivery is visible.',
    },
  ],

  workflowsHeading: 'The months between the sale and the door.',
  workflowsLede:
    'These already happen. As records with owners and dates, the gaps stop being invisible.',
  workflows: [
    {
      name: 'Order to production start',
      steps: [
        'Order recorded with items, advance and promised date',
        'Selections captured — fabric, finish, dimensions',
        'Selection confirmation tracked as a stage with an owner',
        'Purchase or work order raised with the manufacturer or workshop',
        'Production start confirmed against the order',
      ],
      note:
        'An order sitting on an unconfirmed selection is the most common and most preventable delay in the category.',
    },
    {
      name: 'Production to warehouse',
      steps: [
        'Production progress tracked against the promised date',
        'Slippage raises a revised-date decision',
        'Item dispatched by the manufacturer and tracked in transit',
        'Condition recorded at receipt with photographs',
        'Damage claim raised where condition requires it',
        'Item taken into warehouse with its order reference',
      ],
      note:
        'Recording condition at receipt is what makes a transit claim possible at all.',
    },
    {
      name: 'Delivery and assembly',
      steps: [
        'Readiness triggers a scheduling task',
        'Slot agreed with the customer and recorded',
        'Delivery crew and assembly requirement assigned',
        'Delivery completed and confirmation captured',
        'Assembly completed and any shortfall recorded',
        'Balance collected and the order closed',
      ],
      note:
        'Assembly scheduled with the delivery rather than assumed after it is what prevents a second visit.',
    },
    {
      name: 'Delay and customer communication',
      steps: [
        'Stage slippage detected against the promised date',
        'Revised date proposed with the reason',
        'Approval applied where compensation is involved',
        'Customer informed and the communication recorded',
        'New date tracked as the commitment',
      ],
      note:
        'The point is that the customer hears before the original date passes.',
    },
    {
      name: 'Transit or manufacturing damage claim',
      steps: [
        'Condition recorded at receipt with photographs',
        'Claim raised against transporter or manufacturer',
        'Replacement or repair work created against the order',
        'Customer impact assessed and communicated',
        'Settlement recorded against the supplier balance',
      ],
      note:
        'Claims are lost to missing evidence and closed windows, both of which are record-keeping problems.',
    },
    {
      name: 'Supplier lead time review',
      steps: [
        'Quoted lead times compared with actual across orders',
        'On-time delivery calculated per supplier and category',
        'Showroom promise guidance updated against reality',
        'Sourcing decisions raised where variance is persistent',
      ],
      note:
        'The date the showroom promises should come from measured lead times rather than from the manufacturer’s brochure.',
    },
  ],

  ai: {
    heading: 'Ask which promises are at risk.',
    lede:
      'Verity AI reads the same order, production, supplier and customer records the business runs on. It answers from your own order book, only shows what the person asking can see, and can turn the answer into calls and scheduling assigned to the right person.',
    panelMeta: 'Grounded in your order records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which orders are past their promised date without a revised date communicated?',
      'Which orders are stalled on an unconfirmed selection?',
      'Which produced items have no delivery slot booked, and for how long?',
      'Which manufacturers run longest against their quoted lead time?',
      'How much is held in advances against undelivered orders?',
      'Which orders had transit damage this quarter, and were claims filed?',
      'What is on-time delivery against the date originally promised?',
      'Which designers brought the most orders this year?',
      'Summarise the state of the order book.',
    ],
  },

  automationHeading: 'The silence that costs customers.',
  automationLede:
    'Each runs from the order records at the point the condition is met.',
  automations: [
    {
      trigger: 'A selection remains unconfirmed past its threshold',
      steps: [
        'Order flagged with the outstanding selection and its age',
        'Follow-up assigned to the salesperson who sold it',
        'Escalated if production cannot start in time',
      ],
    },
    {
      trigger: 'A production stage slips against the promised date',
      steps: [
        'Order flagged with the projected new date',
        'Revised-date decision routed for approval',
        'Customer communication task raised before the original date',
      ],
    },
    {
      trigger: 'An item is marked produced',
      steps: [
        'Scheduling task created to agree a delivery slot',
        'Assembly requirement checked and crew reserved',
        'Warehouse dwell time tracked from readiness',
      ],
    },
    {
      trigger: 'Damage is recorded at receipt',
      steps: [
        'Claim raised against transporter or manufacturer with photographs',
        'Replacement or repair work created against the order',
        'Customer impact assessed and communication raised',
      ],
    },
    {
      trigger: 'An order passes its promised date',
      steps: [
        'Order flagged with the stage it is stuck at',
        'Owner of that stage notified',
        'Escalated to the manager with the customer history attached',
      ],
    },
    {
      trigger: 'A goodwill discount is requested',
      steps: [
        'Request held at the approval step with the delay attached',
        'Decision recorded against the order',
        'Cost of delay aggregated for the supplier review',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can actually see.',
  intelligenceLede:
    'Delivery performance and its causes, from the order records themselves.',
  intelligence: [
    {
      area: 'Delivery',
      points: [
        'On-time delivery against the date originally promised',
        'Orders past date, with the stage blocking each',
        'Average time from order to delivery by category',
        'Revised dates issued and their causes',
      ],
    },
    {
      area: 'Orders',
      points: [
        'Open order value and count by stage',
        'Orders stalled on selections',
        'Advances held against undelivered goods',
        'Cancellations and their recorded reasons',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Quoted lead time against actual',
        'Damage rate by manufacturer and transporter',
        'Claims raised and settled',
        'Outstanding payable by supplier',
      ],
    },
    {
      area: 'Warehouse',
      points: [
        'Dwell time from readiness to delivery',
        'Occupancy by order age',
        'Items awaiting a delivery slot',
        'Damage occurring in storage',
      ],
    },
    {
      area: 'Commercial',
      points: [
        'Sales by category, salesperson and store',
        'Goodwill discounts and their causes',
        'Orders introduced by designers and referrers',
        'Margin after delay costs',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the order stages the business already moves through.',

  rolesHeading: 'One order book, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Are we keeping the promises we sell on?',
      focus: 'On-time delivery, orders past date, supplier lead time variance, advance liability, goodwill cost.',
    },
    {
      role: 'Operations manager',
      question: 'What is stuck and who owns it?',
      focus: 'Orders by stage, stalled selections, delivery slots to book, warehouse dwell, claims open.',
    },
    {
      role: 'Showroom staff',
      question: 'What can I promise this customer?',
      focus: 'Measured lead times by supplier, availability, the customer’s open orders and their state.',
    },
    {
      role: 'Delivery coordinator',
      question: 'What is going out and with whom?',
      focus: 'Items ready, slots agreed, crews and assembly requirements, confirmations outstanding.',
    },
    {
      role: 'Accounts',
      question: 'What is held and what is owed?',
      focus: 'Advances against undelivered orders, balances due on delivery, supplier payables, claims settled.',
    },
  ],

  useCasesHeading: 'What furniture retailers use Verity for',
  useCases: [
    {
      name: 'Order stage tracking',
      body: 'The months between sale and delivery as stages with owners and dates, so a stalled order is visible rather than silent.',
    },
    {
      name: 'Selection confirmation',
      body: 'Fabric and finish confirmation as a tracked stage, closing the most common preventable delay in the category.',
    },
    {
      name: 'Proactive delay communication',
      body: 'Slippage raising a customer communication task before the original promised date passes.',
    },
    {
      name: 'Delivery and assembly scheduling',
      body: 'Readiness triggering slot booking with the assembly requirement assigned, so one visit completes the job.',
    },
    {
      name: 'Transit and manufacturing damage claims',
      body: 'Condition recorded with photographs at receipt, so claims are raised from evidence inside the window.',
    },
    {
      name: 'Supplier lead-time reality',
      body: 'Quoted lead time measured against actual, so the showroom promises dates the business can keep.',
    },
    {
      name: 'Warehouse dwell cost',
      body: 'Time from produced to delivered measured per item, exposing a cost most stores carry without sizing.',
    },
    {
      name: 'Advance liability',
      body: 'Money held against undelivered goods visible on the order records rather than added up occasionally.',
    },
    {
      name: 'Asking the order book questions',
      body: 'Plain-language questions across orders, production, suppliers and customers, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'The order book, the delivery diary and your billing and accounting arrangements are mapped during implementation. Open orders, advances, suppliers and customers are brought across, and Verity is introduced as the operational layer over them while the order book keeps moving.',

  faqHeading: 'Questions furniture retailers ask',
  faqs: [
    [
      'What can AI software do for a furniture store?',
      'Verity AI answers questions from your own order, production, supplier and customer records: which orders are past their promised date without a revised date communicated, which are stalled on unconfirmed selections, which produced items have no delivery slot, which manufacturers run longest against quoted lead times. Each answer can become a call or a scheduling task assigned to the right person.',
    ],
    [
      'Can Verity track made-to-order items?',
      'Yes. An order carries its items, selections, advance, promised date, production state, delivery slot and assembly requirement as one record with stages, so an order that exists for months before the goods do is visible throughout.',
    ],
    [
      'Does it help with delivery scheduling?',
      'Readiness triggers a scheduling task, the slot agreed with the customer is recorded, and the crew and assembly requirement are assigned with it. Warehouse dwell time from readiness to delivery becomes a measured cost.',
    ],
    [
      'Can it tell us which manufacturers are actually reliable?',
      'Quoted lead times are compared against actual across orders, along with damage rates, so the date your showroom promises can be based on measured performance rather than on a brochure.',
    ],
    [
      'Does it handle transit damage claims?',
      'Condition is recorded with photographs at receipt against the consignment, so a claim against the transporter or manufacturer is raised from evidence inside the window rather than absorbed as a cost.',
    ],
    [
      'How does it help with customer communication?',
      'Slippage at any stage raises a communication task before the original promised date passes, and what was said is recorded on the order, so the next person to speak to the customer says the same thing.',
    ],
    [
      'Does Verity replace our billing or accounting software?',
      'No. Those continue and are mapped during implementation. Verity holds the orders, the stages, the suppliers, the deliveries and the reporting across them.',
    ],
    [
      'Can we see how much we hold in advances?',
      'Advances sit on the order record, so the liability against undelivered goods is current rather than something that has to be added up.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the order book actually moves, configuration, migration of open orders and suppliers, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the orders that are past their date.',
  ctaLede:
    'They are the most expensive thing in a furniture business and the least visible. Tell us how your order book is tracked today.',

  related: ['home-decor-stores', 'retail-stores', 'interior-designers', 'furniture-manufacturers', 'electronics-stores', 'construction-companies'],
};
