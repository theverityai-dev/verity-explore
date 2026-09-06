export default {
  slug: 'real-estate-developers',
  status: 'published',
  plural: 'real estate developers',
  subject: 'real estate development business',

  seo: {
    title: 'AI business management software for real estate developers | Verity',
    description:
      'Verity connects unit inventory, booking pipeline, construction-linked payment demands, collections, approvals and handover into one operational system.',
    keywords: [
      'AI software for real estate developers',
      'real estate development management software',
      'construction linked payment and demand tracking',
      'project unit inventory and booking software',
    ],
  },

  hero: {
    eyebrow: 'Verity for developers',
    headline: 'The milestone was achieved in March. The demand went out in June.',
    lede:
      'Construction-linked collections are a developer’s cash flow, and they depend on a demand being raised when a stage completes. Verity connects the site to the demand to the collection.',
    note: 'Runs alongside your existing accounting and approval processes.',
    panel: {
      title: 'Projects',
      meta: 'All projects · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Units sold', value: '412 of 640', note: 'across 3 projects' },
        { label: 'Demands unraised', value: '68', note: 'milestones already achieved' },
        { label: 'Collections overdue', value: '₹22 Cr', note: '142 customers' },
        { label: 'Handovers pending', value: '46', note: '11 past committed date' },
      ],
      rows: [
        { name: '68 demands unraised against achieved milestones', meta: '₹31 Cr of collectible cash', active: true },
        { name: '142 customers overdue, 38 beyond 90 days', meta: 'No follow-up recorded on 51', active: true },
        { name: '11 handovers past their committed date', meta: 'Snag lists incomplete', active: true },
        { name: 'Channel partner commission unreconciled', meta: '₹1.8 Cr across 9 partners', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own projects in this shape.',
    },
  },

  overview: {
    heading: 'A developer’s cash flow depends on a connection between a site and a demand letter.',
    paragraphs: [
      'Residential development is funded largely by construction-linked payments: a customer pays instalments as stages of the building are completed. The mechanism only works if the achievement of a stage triggers a demand, and the demand triggers a collection. In most developers those three live in three places — the site records progress, the sales office holds the customer, and accounts raise the demand — with a manual step between each.',
      'That gap is expensive in the most direct way possible. Sixty-eight demands unraised against milestones already achieved is thirty-one crore of collectible cash the business has earned and not asked for, while it borrows to fund the same construction.',
      'The second issue is inventory. A developer’s stock is a fixed set of units with a price list that changes over the project, and it is sold through direct sales and channel partners simultaneously. Double bookings, unrecorded holds and stale availability are routine, and every one of them is a customer conversation that goes badly.',
      'The third is collection follow-up. A customer overdue on a construction-linked instalment is not a normal debtor: the relationship continues for years and ends with a handover, so the chase has to be persistent and recorded rather than aggressive and forgotten.',
      'The fourth is handover, where the snag list is the difference between a satisfied customer and a dispute.',
      'Verity connects the project, the unit, the customer, the milestone, the demand, the collection and the handover as one chain.',
    ],
  },

  terminology: [
    ['Projects, towers, units, inventory', 'Records'],
    ['Bookings, allotments, agreements', 'Orders'],
    ['Customers, channel partners, investors', 'Relationships'],
    ['Milestones, demands, collections', 'Workflows'],
    ['Construction progress, snags, handover', 'Work'],
    ['Contractors, consultants, vendors', 'Suppliers'],
    ['Projects, towers, floors', 'Locations'],
  ],

  challengesHeading: 'Cash earned and not asked for.',
  challengesLede:
    'Developer difficulties come from a break between construction progress and the commercial process that depends on it.',
  challenges: [
    {
      problem: 'Demands lag milestone achievement',
      detail:
        'A construction stage completes and the demand is raised weeks later, because nothing connects the site record to the commercial one.',
      outcome:
        'Milestone achievement raises demands automatically against every unit on that stage.',
    },
    {
      problem: 'Availability is stale and double bookings happen',
      detail:
        'Units are held, released and sold through direct sales and channel partners at once, and the availability list is a shared document.',
      outcome:
        'Unit state is a record — available, held, booked, agreement executed — so availability is live for everyone selling.',
    },
    {
      problem: 'Collection follow-up is inconsistent',
      detail:
        'Overdue instalments are chased by whoever remembers, on a relationship that continues for years.',
      outcome:
        'Balances age on the customer record with contact history, so follow-up is persistent and defensible.',
    },
    {
      problem: 'Channel partner commissions are reconciled late',
      detail:
        'Commissions are agreed per booking and settled from memory across many partners and slabs.',
      outcome:
        'Commission terms are recorded against the booking, so what is due is calculable rather than negotiated.',
    },
    {
      problem: 'Handover is a snag list nobody owns',
      detail:
        'A unit is ready, snags are raised verbally at inspection, and handover slips past its committed date.',
      outcome:
        'Snags are work with owners and dates against the unit, so handover is a tracked process.',
    },
    {
      problem: 'Approvals and compliance documents are scattered',
      detail:
        'Statutory approvals, sanctions and their conditions live with different consultants and are needed together.',
      outcome:
        'Approvals attach to the project record with their conditions and validity dates.',
    },
  ],

  modulesLede:
    'One system connecting construction, sales and collections.',
  modules: [
    {
      id: 'records',
      title: 'Projects, towers and unit inventory',
      line:
        'Every unit is a record with its project, tower, floor, configuration, price, current state and the customer holding it.',
      why:
        'The unit is the stock, and stale availability is the most common cause of a bad customer conversation.',
      example:
        'Four hundred and twelve of six hundred and forty units sold, with live state per unit.',
    },
    {
      id: 'workflows',
      title: 'Milestones, demands and collections',
      line:
        'Construction milestones, payment demands, receipts and interest on delay are defined steps linked to the unit and the customer.',
      why:
        'This chain is the developer’s cash flow, and it currently has manual joins at every link.',
      example:
        'Sixty-eight demands raised automatically from achieved milestones rather than assembled by hand.',
    },
    {
      id: 'orders',
      title: 'Bookings, allotments and agreements',
      line:
        'Bookings carry their unit, customer, price, payment plan, channel partner, agreement status and documentation.',
      why:
        'The booking is where the price, the plan and the commission are fixed, and disputes return to it.',
      example:
        'A booking with its agreed payment plan and commission terms, referenced at every later demand.',
    },
    {
      id: 'relationships',
      title: 'Customers, channel partners and investors',
      line:
        'Customers and partners are records with their bookings, payment history, communications, commissions and balances.',
      why:
        'A developer’s customer relationship runs for years and ends with a handover, so its history matters throughout.',
      example:
        'A customer’s full demand and payment history, visible before a collection call.',
    },
    {
      id: 'work',
      title: 'Construction progress, snags and handover',
      line:
        'Progress, inspections, snags and handover steps are work with owners, dates and states against units and towers.',
      why:
        'Handover is the last impression and the most common source of dispute, and it is a process rather than an event.',
      example:
        'Eleven handovers past their committed date, each showing the outstanding snags.',
    },
    {
      id: 'suppliers',
      title: 'Contractors, consultants and vendors',
      line:
        'Suppliers are relationships with their packages, progress, certification, payments and performance.',
      why:
        'Construction progress determines demands, so contractor performance is a cash-flow variable.',
      example:
        'A contractor behind on a stage, alongside the demands that depend on it.',
    },
    {
      id: 'people',
      title: 'Sales teams, engineers and CRM staff',
      line:
        'Staff are modelled once, and every booking, demand, collection call and snag shows who owns it.',
      why:
        'Collections and handover both depend on someone specific following through.',
      example:
        'Collection follow-ups by owner with outcomes recorded.',
    },
    {
      id: 'intelligence',
      title: 'Sales, collection and progress reporting',
      line:
        'Inventory and sales velocity, demand raised against achieved, collection ageing, channel partner performance, construction progress and handover status come from the operational records.',
      why:
        'A developer’s two questions — what is sold and what is collected — are answered from three systems today.',
      example:
        'Collectible cash against milestones achieved, current rather than compiled.',
    },
    {
      id: 'ai',
      title: 'Ask the project a question',
      line:
        'Verity AI answers from your own unit, booking, milestone and collection records, respects permissions, and can create assigned follow-ups.',
      why:
        'The most valuable question — what have we earned and not asked for — spans construction and finance.',
      example:
        '"Which demands are unraised against achieved milestones?" returns sixty-eight with their value.',
    },
    {
      id: 'control',
      title: 'Discounts, holds and approvals',
      line:
        'One permission model and one audit trail, with price exceptions, unit holds and cancellations as approvals.',
      why:
        'Discounting and holds are where a price list quietly stops meaning anything.',
      example:
        'A price exception recorded against the booking with the approver.',
    },
    {
      id: 'communication',
      title: 'Customer contact on the booking',
      line:
        'Demands, reminders, responses and complaints attach to the booking or unit they concern.',
      why:
        'A relationship lasting several years produces correspondence that must be findable at handover.',
      example:
        'Every demand and reminder sent, visible when a customer disputes an interest charge.',
    },
    {
      id: 'locations',
      title: 'Projects, towers and floors',
      line:
        'Locations roll into the business, with units, progress and reporting following the same structure.',
      why:
        'Milestones are achieved per tower, and demands follow that structure.',
      example:
        'Milestone achievement by tower, driving demands for the units within it.',
    },
  ],

  workflowsHeading: 'From stage completion to cash.',
  workflowsLede:
    'These already happen across three departments. As one chain they stop losing weeks at each join.',
  workflows: [
    {
      name: 'Milestone to demand to collection',
      steps: [
        'Construction milestone recorded as achieved for a tower',
        'Demands generated for every unit on that stage',
        'Demand issued to the customer and recorded',
        'Payment received and applied to the booking',
        'Overdue balances aged with interest terms applied',
        'Follow-up assigned with the demand history attached',
      ],
      note:
        'This is the developer’s cash flow, and every manual join in it costs weeks of collection.',
    },
    {
      name: 'Enquiry to booking',
      steps: [
        'Enquiry recorded with source and channel partner',
        'Unit held with an expiry on the hold',
        'Price and payment plan agreed with approvals for exceptions',
        'Booking recorded and the unit state updated',
        'Agreement executed and documentation completed',
        'Commission terms recorded against the booking',
      ],
      note:
        'A hold with an expiry is what stops inventory being blocked indefinitely by optimistic sales.',
    },
    {
      name: 'Collection follow-up',
      steps: [
        'Overdue demands aged by customer and project',
        'Contact history reviewed before calling',
        'Follow-up assigned with the outstanding schedule attached',
        'Outcome and commitment recorded',
        'Escalation raised where commitments are missed',
      ],
      note:
        'The relationship continues to handover, so the chase must be persistent and recorded rather than aggressive.',
    },
    {
      name: 'Channel partner commission',
      steps: [
        'Partner and slab recorded against the booking',
        'Commission accrued at the agreed trigger',
        'Claim received and checked against the terms',
        'Approval routed and payment released',
        'Partner performance recorded against bookings produced',
      ],
      note:
        'Recording terms at booking is what makes settlement a calculation rather than a negotiation.',
    },
    {
      name: 'Handover',
      steps: [
        'Unit marked ready with completion evidence',
        'Customer inspection scheduled and conducted',
        'Snags recorded as work with owners and dates',
        'Rectification tracked to completion and re-inspection',
        'Handover completed with documentation issued',
        'Outstanding dues settled before possession',
      ],
      note:
        'Handover is the last impression and the most common source of dispute, and it is a process rather than a date.',
    },
    {
      name: 'Approvals and compliance',
      steps: [
        'Statutory approvals recorded against the project',
        'Conditions and validity dates held on the record',
        'Renewal and condition deadlines tracked',
        'Documents attached and completeness reported',
        'Exceptions raised where a condition is unmet',
      ],
      note:
        'Approvals with conditions are obligations, and they are usually held by whichever consultant obtained them.',
    },
  ],

  ai: {
    heading: 'Ask what has been earned and not asked for.',
    lede:
      'Verity AI reads the same unit, booking, milestone and collection records the business runs on. It answers from your own projects, respects permissions, and can turn an answer into demands and follow-ups.',
    panelMeta: 'Grounded in your project records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which demands are unraised against achieved milestones, and what are they worth?',
      'Which customers are overdue beyond ninety days with no follow-up recorded?',
      'What is live availability by project, tower and configuration?',
      'Which units are held past their hold expiry?',
      'Which channel partners have unreconciled commissions?',
      'Which handovers are past their committed date, and what snags remain?',
      'Which contractors are behind on stages that demands depend on?',
      'What is sales velocity by configuration and price band?',
      'Summarise collectible cash and collection ageing.',
    ],
  },

  automationHeading: 'The joins that lose weeks.',
  automationLede:
    'Each runs from the project and booking records at the point the condition is met.',
  automations: [
    {
      trigger: 'A construction milestone is recorded as achieved',
      steps: [
        'Demands generated for every unit on that stage',
        'Issue task assigned with customer details attached',
        'Collectible value updated on the project',
      ],
    },
    {
      trigger: 'A demand passes its due date',
      steps: [
        'Balance aged with interest terms applied',
        'Follow-up assigned with demand and contact history',
        'Escalated past the second threshold',
      ],
    },
    {
      trigger: 'A unit hold reaches its expiry',
      steps: [
        'Hold flagged with the sales owner',
        'Release or extension decision raised',
        'Availability updated for all sales channels',
      ],
    },
    {
      trigger: 'A unit is marked ready for handover',
      steps: [
        'Inspection scheduled with the customer',
        'Snags recorded as work with owners',
        'Outstanding dues checked before possession',
      ],
    },
    {
      trigger: 'A booking is executed',
      steps: [
        'Payment plan and demand schedule created',
        'Commission terms recorded against the partner',
        'Documentation checklist opened',
      ],
    },
    {
      trigger: 'An approval condition approaches its deadline',
      steps: [
        'Condition flagged against the project',
        'Owner assigned with the document attached',
        'Escalated as the date approaches',
      ],
    },
  ],

  intelligenceHeading: 'What the developer can actually see.',
  intelligenceLede:
    'Sales, cash and construction from one chain of records.',
  intelligence: [
    {
      area: 'Cash',
      points: [
        'Demands raised against milestones achieved',
        'Collectible value not yet demanded',
        'Collection ageing by customer and project',
        'Interest accrued on delayed payments',
      ],
    },
    {
      area: 'Sales',
      points: [
        'Inventory by state, configuration and tower',
        'Sales velocity and price realisation',
        'Holds and their expiry',
        'Direct against channel partner contribution',
      ],
    },
    {
      area: 'Construction',
      points: [
        'Progress against programme by tower',
        'Milestones achieved and their demand impact',
        'Contractor performance against packages',
        'Delays and their recorded causes',
      ],
    },
    {
      area: 'Handover',
      points: [
        'Units ready, inspected and handed over',
        'Snags open by unit and trade',
        'Handovers past committed date',
        'Dues outstanding at possession',
      ],
    },
    {
      area: 'Partners',
      points: [
        'Bookings by channel partner',
        'Commission accrued, claimed and settled',
        'Conversion quality by partner',
        'Outstanding partner balances',
      ],
    },
  ],
  intelligenceNote:
    'Verity connects construction, sales and collection records. Accounting and statutory filing continue in your existing systems.',

  rolesHeading: 'One project, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Promoter',
      question: 'What have we earned and what have we collected?',
      focus: 'Collectible value against demands raised, collection ageing, sales velocity, construction progress.',
    },
    {
      role: 'CRM head',
      question: 'Who is overdue and what have we said to them?',
      focus: 'Ageing by customer, contact history, commitments made, escalations due.',
    },
    {
      role: 'Sales head',
      question: 'What can we actually sell?',
      focus: 'Live availability, holds and expiry, price realisation, channel partner performance.',
    },
    {
      role: 'Project head',
      question: 'Which stages are late and what do they hold up?',
      focus: 'Progress against programme, contractor performance, milestones pending, demands blocked.',
    },
    {
      role: 'Handover team',
      question: 'Which units are ready and what remains?',
      focus: 'Inspections due, snags open by trade, rectification progress, dues outstanding.',
    },
  ],

  useCasesHeading: 'What developers use Verity for',
  useCases: [
    {
      name: 'Milestone-linked demand generation',
      body: 'Stage achievement generating demands for every unit on it, closing the manual join that costs weeks of collection.',
    },
    {
      name: 'Live unit availability',
      body: 'Unit state as a record shared across direct sales and channel partners, ending stale availability lists and double bookings.',
    },
    {
      name: 'Collection follow-up',
      body: 'Balances aged with contact history, so a years-long relationship is chased persistently and defensibly.',
    },
    {
      name: 'Hold expiry',
      body: 'Holds with expiry dates, so optimistic sales cannot block inventory indefinitely.',
    },
    {
      name: 'Channel partner commission',
      body: 'Terms recorded at booking, so settlement is a calculation rather than a negotiation across slabs and partners.',
    },
    {
      name: 'Handover and snags',
      body: 'Snags as work with owners and dates, so handover is a tracked process rather than a date that slips.',
    },
    {
      name: 'Approval conditions',
      body: 'Statutory approvals with their conditions and validity dates on the project record rather than with the consultant who obtained them.',
    },
    {
      name: 'Asking across sales and site',
      body: 'Plain-language questions spanning construction, bookings, demands and collections, with actions assigned in the same step.',
    },
  ],

  migration:
    'Your accounting, statutory filing and design systems continue to run and are mapped during implementation. Projects, unit inventory, bookings, payment plans, partners and open demands are brought across, and Verity is introduced as the connecting operational layer.',

  faqHeading: 'Questions developers ask',
  faqs: [
    [
      'What can AI software do for a real estate developer?',
      'Verity AI answers questions from your own unit, booking, milestone and collection records: which demands are unraised against achieved milestones and what they are worth, which customers are overdue with no follow-up recorded, what live availability looks like, which handovers are past their committed date. Each answer can become a demand or a follow-up.',
    ],
    [
      'How does it improve collections?',
      'Construction milestone achievement generates demands for every unit on that stage, closing the manual join between the site and the commercial process. Demands unraised against achieved milestones are cash the business has earned and not asked for, usually while borrowing to fund the same construction.',
    ],
    [
      'Can it prevent double bookings?',
      'Unit state — available, held, booked, agreement executed — is a live record shared across direct sales and channel partners, with holds carrying expiry dates, so availability is current for everyone selling rather than a shared document that drifts.',
    ],
    [
      'Does it handle channel partner commissions?',
      'Commission terms and slabs are recorded against the booking at the point it is made, so what is due is a calculation from records rather than a negotiation reconstructed across many partners.',
    ],
    [
      'Can it manage handover?',
      'Handover is a process — readiness, inspection, snags as work with owners and dates, rectification, re-inspection, documentation and dues settlement — rather than a committed date that slips with nobody owning the outstanding items.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Accounting and statutory filing continue and are mapped during implementation. Verity connects the construction, sales, demand, collection and handover records that sit around them.',
    ],
    [
      'Can it track approval conditions?',
      'Statutory approvals attach to the project with their conditions and validity dates, so obligations and renewals are tracked rather than held by whichever consultant obtained them.',
    ],
    [
      'Is it suitable for a single-project developer?',
      'A single project still runs the same chain from milestone to demand to collection to handover, and a break in that chain is proportionally more damaging to a smaller balance sheet.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the payment plans and construction stages, configuration of projects and unit inventory, migration of bookings and open demands, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the demands you have not raised.',
  ctaLede:
    'It is cash you have already earned, sitting behind a manual step. Tell us how milestones reach your CRM today.',

  related: ['construction-companies', 'property-dealers', 'real-estate-agencies', 'property-management', 'contractors', 'architects'],
};
