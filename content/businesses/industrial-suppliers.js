export default {
  slug: 'industrial-suppliers',
  status: 'published',
  plural: 'industrial suppliers',
  subject: 'industrial supplier',

  seo: {
    title: 'AI business management software for industrial suppliers | Verity',
    description:
      'Verity gives industrial suppliers one system for a large slow-moving part catalogue, technical specification matching, breakdown urgency, rate contracts and plant customer accounts.',
    keywords: [
      'AI software for industrial suppliers',
      'industrial supplies management software',
      'spare parts catalogue and specification software',
      'MRO supply and rate contract software',
    ],
  },

  hero: {
    eyebrow: 'Verity for industrial suppliers',
    headline: 'Forty thousand part numbers, and the one that matters is the one a plant is stopped for.',
    lede:
      'Industrial supply is a large, slow-moving catalogue answering urgent, specific questions. Verity makes "do you have this exact part" a fast and accurate answer.',
    note: 'Verity runs the supply business. Accounting continues where it is.',
    panel: {
      title: 'Counter',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active part numbers', value: '41,200', note: '68% moved once this year' },
        { label: 'Enquiries today', value: '186', note: '31 marked breakdown' },
        { label: 'Quoted not converted', value: '44%', note: 'no reason recorded' },
        { label: 'Stock value idle', value: '₹1.7 Cr', note: 'no movement in 18 months' },
      ],
      rows: [
        { name: '31 breakdown enquiries today', meta: 'Plant stopped, answer needed in minutes', active: true },
        { name: '₹1.7 Cr in parts unmoved for 18 months', meta: 'Bought for a customer who stopped ordering', active: true },
        { name: '44% of quotations not converted', meta: 'Lost on price, stock or response time unknown', active: true },
        { name: '6 rate contracts expiring this quarter', meta: 'Plant accounts at renewal', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own counter in this shape.',
    },
  },

  overview: {
    heading: 'A slow catalogue serving urgent demand.',
    paragraphs: [
      'An industrial supplier holds tens of thousands of part numbers of which most move rarely. Sixty-eight per cent moving once in a year is not poor management — it is the nature of maintenance supply, where the value is being able to answer a specific technical question quickly rather than turning stock over fast.',
      'The second characteristic is that a large share of demand is urgent. Thirty-one breakdown enquiries in a day are plants that have stopped, where the answer needed is whether the exact part exists, where it is and how fast it can arrive. Response time, not price, decides most of these.',
      'The third is specification. Parts are identified by manufacturer number, equipment fit, dimension and material, and an equivalent is only an equivalent if someone can prove it. Matching by specification rather than description is what makes the catalogue usable.',
      'The fourth is that dead stock has a history. One point seven crore unmoved for eighteen months was usually bought for a customer who has since stopped ordering, and knowing which customer it was is the route to clearing it.',
      'The fifth is rate contracts with plant customers, which fix prices and terms for a period and come up for renewal on a date somebody has to notice.',
      'Verity holds the catalogue by specification, prioritises breakdown demand, and connects stock to the customers and contracts behind it.',
    ],
  },

  terminology: [
    ['Parts, equivalents, specifications', 'Inventory'],
    ['Enquiries, quotations, orders', 'Orders'],
    ['Plants, maintenance teams, purchase departments', 'Relationships'],
    ['Rate contracts, approved vendor status', 'Control'],
    ['Manufacturers, importers, principals', 'Suppliers'],
    ['Counter staff, field sales, stores', 'People'],
    ['Delivery, urgency, breakdown response', 'Logistics'],
  ],

  challengesHeading: 'A catalogue too large to know and demand too urgent to research.',
  challengesLede:
    'Industrial supply difficulties come from breadth of range meeting urgency of need.',
  challenges: [
    { problem: 'Finding the exact part takes too long', detail: 'The catalogue is searched by description and the correct match depends on who is at the counter.', outcome: 'Parts are held with manufacturer numbers, specifications, equipment fit and equivalents.' },
    { problem: 'Breakdown enquiries are handled like ordinary ones', detail: 'An urgent enquiry sits in the same queue as a routine quotation.', outcome: 'Urgency is a property of the enquiry, so breakdown demand is prioritised and measured.' },
    { problem: 'Lost quotations have no recorded reason', detail: 'Nearly half of quotations do not convert and nobody knows whether it was price, stock or speed.', outcome: 'Quotation outcomes carry a reason, making the loss pattern addressable.' },
    { problem: 'Dead stock is disconnected from its cause', detail: 'Parts bought for a customer sit unmoved with no record of who they were for.', outcome: 'Stock carries the customer and order it was bought against.' },
    { problem: 'Rate contracts expire unnoticed', detail: 'Contracted prices and approved vendor status lapse and orders move elsewhere.', outcome: 'Contracts carry expiry with renewal raised in advance.' },
    { problem: 'Equivalents cannot be justified', detail: 'An alternative part is offered and the customer’s engineer cannot verify the fit.', outcome: 'Equivalence is recorded with the specification basis that supports it.' },
  ],

  modulesLede: 'One system across catalogue, enquiries, contracts and stock.',
  modules: [
    { id: 'inventory', title: 'Parts, specifications and equivalents', line: 'Every part carries manufacturer numbers, technical specification, equipment fit, recorded equivalents, location and movement history.', why: 'The catalogue is the product, and it is only useful if it can be searched by specification.', example: 'Forty-one thousand parts searchable by specification and fit.' },
    { id: 'orders', title: 'Enquiries, quotations and conversion', line: 'Enquiries carry urgency, requested specification, quotation, outcome and reason for loss.', why: 'Nearly half of quotations fail, and the reason is the improvable part.', example: 'Forty-four per cent unconverted with no recorded reason.' },
    { id: 'relationships', title: 'Plants, maintenance teams and buyers', line: 'Customers carry their equipment, previously supplied parts, rate contracts, approved status and ordering patterns.', why: 'Knowing a plant’s equipment is what makes the next enquiry answerable in seconds.', example: 'Parts previously supplied by plant and equipment.' },
    { id: 'logistics', title: 'Breakdown response and delivery', line: 'Urgent enquiries carry availability, source, delivery route and response time against the plant’s stoppage.', why: 'For a stopped plant, response time is the entire proposition.', example: 'Thirty-one breakdown enquiries with response time measured.' },
    { id: 'control', title: 'Rate contracts and approved status', line: 'One permission model and one audit trail, with contracted prices, validity, approved vendor status and renewal dates held per customer.', why: 'A lapsed contract quietly diverts a plant’s ordering elsewhere.', example: 'Six rate contracts expiring this quarter.' },
    { id: 'suppliers', title: 'Manufacturers, principals and sourcing', line: 'Suppliers carry lead times, pricing, availability and reliability against the parts they supply.', why: 'What is not in stock still has to be answered with a real date.', example: 'Sourcing lead time by supplier for non-stock parts.' },
    { id: 'intelligence', title: 'Catalogue, conversion and stock reporting', line: 'Movement profile, conversion by reason, breakdown response times, dead stock by cause and contract coverage come from the records.', why: 'The business is judged on availability and answer speed, both measurable.', example: 'Dead stock by originating customer and order.' },
    { id: 'ai', title: 'Ask the counter a question', line: 'Verity AI answers from your own catalogue, enquiry, customer and stock records, respects permissions, and can create assigned follow-ups.', why: 'The core question is whether a specific part exists and where.', example: '"Which unmoved stock was bought for customers who stopped ordering?" returns the list by value.' },
    { id: 'locations', title: 'Stores, racks and branch stock', line: 'Stock is located precisely across stores and branches with transfer visibility.', why: 'A part that exists but cannot be found quickly has not been supplied.', example: 'Exact location by rack and branch.' },
    { id: 'people', title: 'Counter staff, field sales and stores', line: 'Staff carry enquiries handled, conversion, response times and customer responsibility.', why: 'Answer quality at the counter varies by person and is improvable once measured.', example: 'Conversion and response time by counter staff.' },
    { id: 'records', title: 'Technical documents and equivalence basis', line: 'Drawings, datasheets and equivalence justifications attach to the part.', why: 'A customer engineer accepts an equivalent when the basis is shown.', example: 'Equivalence basis attached to the alternative offered.' },
    { id: 'communication', title: 'Customer enquiry correspondence', line: 'Enquiry conversation, quotations and follow-ups attach to the customer and part.', why: 'Most industrial supply is repeat business built on previous conversations.', example: 'Previous enquiries surfaced when the same plant asks again.' },
  ],

  workflowsHeading: 'Enquire, identify, quote, supply, follow up.',
  workflowsLede: 'These already happen. Recorded, the catalogue starts answering faster.',
  workflows: [
    { name: 'Breakdown enquiry', steps: ['Enquiry received and marked urgent with the plant and equipment', 'Part identified by specification or previous supply', 'Availability checked across stores and branches', 'Equivalent offered with basis if needed', 'Delivery committed with response time recorded'], note: 'Response time is the measure, so it starts at receipt rather than at quotation.' },
    { name: 'Part identification', steps: ['Requested specification or manufacturer number captured', 'Catalogue searched by specification and equipment fit', 'Previous supply to the same plant checked', 'Equivalents evaluated with documented basis', 'Selection confirmed with the customer'], note: 'Checking previous supply to the same plant is usually the fastest identification route.' },
    { name: 'Quotation and outcome', steps: ['Quotation issued with availability and lead time', 'Contract price applied where one exists', 'Follow-up assigned', 'Outcome recorded as won or lost', 'Reason captured on loss'], note: 'The recorded reason is what makes the conversion rate improvable.' },
    { name: 'Non-stock sourcing', steps: ['Requirement identified as non-stock', 'Suppliers checked for availability and lead time', 'Customer given a real date', 'Purchase raised against the customer order', 'Receipt and supply recorded'], note: 'Recording the customer against the purchase is what prevents future dead stock without a cause.' },
    { name: 'Contract renewal', steps: ['Expiring contracts surfaced in advance', 'Volume and pricing performance reviewed', 'Renewal terms proposed', 'Approved vendor status confirmed', 'New contract recorded with validity'], note: 'A lapsed approved status removes the supplier from the plant’s system entirely.' },
  ],

  ai: {
    heading: 'Ask about parts, plants and stock.',
    lede: 'Verity AI reads the same catalogue, enquiry, customer and stock records the business creates as it trades. It answers from your own counter, respects permissions, and can turn an answer into a quotation or a clearance decision.',
    panelMeta: 'Grounded in your counter records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Do we hold this specification and where is it?',
      'What have we supplied to this plant before for this equipment?',
      'Which unmoved stock was bought for customers who stopped ordering?',
      'What is our response time on breakdown enquiries?',
      'Why are quotations being lost this month?',
      'Which rate contracts expire in the next quarter?',
      'Which parts do we quote often and never stock?',
      'Which suppliers give the shortest lead time for non-stock items?',
      'Summarise conversion and stock position.',
    ],
  },

  automationHeading: 'Urgency, contracts and dead stock.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An enquiry is marked as a breakdown', steps: ['Prioritised with plant and equipment attached', 'Availability checked across locations', 'Response time measured from receipt'] },
    { trigger: 'A quotation is not converted', steps: ['Follow-up assigned', 'Outcome and reason recorded', 'Loss pattern updated by reason'] },
    { trigger: 'A part is quoted repeatedly and never stocked', steps: ['Demand pattern surfaced', 'Stocking decision raised', 'Outcome recorded'] },
    { trigger: 'Stock passes a no-movement threshold', steps: ['Originating customer and order surfaced', 'Clearance or return option raised', 'Decision recorded'] },
    { trigger: 'A rate contract approaches expiry', steps: ['Flagged with volume and pricing history', 'Renewal assigned', 'New terms recorded'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Availability, conversion and stock health from trading records.',
  intelligence: [
    { area: 'Service', points: ['Breakdown response time', 'Availability at first enquiry', 'Fill rate by customer and part class', 'Non-stock sourcing lead times'] },
    { area: 'Conversion', points: ['Quotation conversion by reason', 'Loss to price, stock or speed', 'Conversion by counter staff', 'Repeat quoting without stocking'] },
    { area: 'Stock', points: ['Movement profile across the catalogue', 'Dead stock by value and originating customer', 'Location accuracy', 'Stocking decisions against demand'] },
    { area: 'Customers', points: ['Equipment and supply history by plant', 'Rate contract coverage and expiry', 'Approved vendor status', 'Order patterns and lapses'] },
  ],
  intelligenceNote: 'Verity records the supply business. Accounting continues where it is and is mapped during implementation.',

  rolesHeading: 'One business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Is the catalogue earning?', focus: 'Conversion by reason, dead stock by cause, contract coverage, breakdown response performance.' },
    { role: 'Counter', question: 'Do we have this part?', focus: 'Specification search, location, equivalents with basis, previous supply to the plant.' },
    { role: 'Purchase', question: 'What should we stock and source?', focus: 'Repeat quoted non-stock items, supplier lead times, dead stock, contract obligations.' },
    { role: 'Field sales', question: 'What does this plant need next?', focus: 'Equipment and supply history, contract expiry, lapsed ordering, open quotations.' },
  ],

  useCasesHeading: 'What industrial suppliers use Verity for',
  useCases: [
    { name: 'Searching by specification', body: 'Parts held with manufacturer numbers, technical specification and equipment fit, so the correct match does not depend on who is at the counter.' },
    { name: 'Prioritising breakdown demand', body: 'Urgency held on the enquiry with response time measured from receipt, because a stopped plant buys speed rather than price.' },
    { name: 'Understanding lost quotations', body: 'Outcomes recorded with reasons, turning a conversion percentage into a specific problem of price, availability or response.' },
    { name: 'Clearing dead stock with its cause', body: 'Unmoved stock carrying the customer and order it was bought against, which is the route to returning or reselling it.' },
    { name: 'Justifying equivalents', body: 'Equivalence recorded with the specification basis and documents, so a customer engineer can accept an alternative.' },
    { name: 'Holding rate contracts', body: 'Contracted prices, approved vendor status and expiry dates with renewal raised in advance, so a plant’s ordering does not quietly move elsewhere.' },
    { name: 'Asking about the counter', body: 'Plain-language questions across catalogue, enquiries, customers and stock, with quotations and stocking decisions raised in the same step.' },
  ],

  migration: 'Accounting continues where it is and is mapped during implementation. The part catalogue with specifications and equivalents, stock and locations, customer records with equipment and supply history, rate contracts and quotation history are brought across.',

  faqHeading: 'Questions industrial suppliers ask',
  faqs: [
    ['What can AI software do for an industrial supplier?', 'Verity AI answers questions from your own catalogue, enquiry, customer and stock records: whether a specification is held and where, what has been supplied to a plant before for a given piece of equipment, which unmoved stock was bought for customers who stopped ordering, why quotations are being lost. Each answer can become a quotation or a stocking decision.'],
    ['How does it handle a very large catalogue?', 'Parts are held with manufacturer numbers, technical specification, equipment fit and recorded equivalents rather than descriptions alone, which makes the catalogue searchable by what the customer actually asks for.'],
    ['Why treat breakdown enquiries differently?', 'Because the customer is a stopped plant and the proposition is response time rather than price. Marking urgency on the enquiry lets it be prioritised and lets response time be measured from receipt rather than from quotation.'],
    ['Can it explain lost quotations?', 'Outcomes are recorded with a reason — price, availability or response time — which converts a conversion rate into a specific and fixable pattern.'],
    ['How does it help with dead stock?', 'Stock carries the customer and order it was bought against, so unmoved parts have a traceable cause and a route to clearance, return or a conversation with the plant that ordered them.'],
    ['Does it support equivalents?', 'Equivalence is recorded with the specification basis and supporting documents, which is what allows a customer’s engineer to accept an alternative part rather than refuse it.'],
    ['Does it manage rate contracts?', 'Contracted prices, validity, approved vendor status and renewal dates are held per customer with renewal raised in advance, because a lapsed contract removes the supplier from a plant’s ordering system.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the catalogue structure, specification fields, customer equipment records and contract terms, configuration, migration of catalogue, stock and history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the enquiries you cannot answer fast.',
  ctaLede: 'They are the ones a plant is stopped for. Tell us how parts are identified today.',

  related: ['distributors', 'wholesalers', 'hardware-stores', 'auto-parts-stores', 'manufacturers', 'importers'],
};
