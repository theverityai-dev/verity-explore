export default {
  slug: 'data-companies',
  status: 'published',
  plural: 'data companies',
  subject: 'data company',

  seo: {
    title: 'AI business management software for data companies | Verity',
    description:
      'Verity gives data companies one system for delivery freshness, source licence terms, quality incidents, lineage questions and customer entitlement.',
    keywords: [
      'AI software for data companies',
      'data business management software',
      'data delivery freshness and quality tracking',
      'data source licensing and usage management',
    ],
  },

  hero: {
    eyebrow: 'Verity for data companies',
    headline: 'The feed has been stale for nine days and the customer noticed first.',
    lede:
      'A data business sells freshness and correctness, and both fail silently. Verity tracks every delivery, source and incident against what the customer was promised.',
    note: 'Verity runs the company. Pipelines, warehouses and processing stay where they are.',
    panel: {
      title: 'Delivery',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Customer deliveries', value: '184', note: '52 customers' },
        { label: 'Deliveries behind commitment', value: '17', note: 'freshness breach' },
        { label: 'Sources under licence', value: '38', note: '6 renewing this quarter' },
        { label: 'Quality incidents open', value: '11', note: 'customer-reported: 7' },
      ],
      rows: [
        { name: '17 deliveries behind their freshness commitment', meta: 'Customers not notified', active: true },
        { name: '7 of 11 quality incidents reported by customers', meta: 'Detected outside the business', active: true },
        { name: '6 source licences renewing this quarter', meta: 'Terms affect what can be resold', active: true },
        { name: '3 customers using data outside licence terms', meta: 'Contractual exposure', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own delivery in this shape.',
    },
  },

  overview: {
    heading: 'You sell freshness and correctness, and both fail without an error message.',
    paragraphs: [
      'A data company’s product is a delivery that is current and right. Both failure modes are silent: a stale feed still returns data and a wrong field still parses. Seventeen deliveries behind their freshness commitment with customers uninformed is a set of contractual breaches the business has not noticed, and seven of eleven quality incidents being customer-reported means the customer is the monitoring system.',
      'The second characteristic is that the inputs are licensed. Sources come with terms about what may be resold, to whom, in what form and for how long, and six licences renewing in a quarter is six sets of terms that could change what the company is allowed to sell.',
      'The third is lineage. When a customer asks where a number came from, the answer has to trace through sources, transformations and deliveries, and it has to be produceable quickly.',
      'The fourth is usage against entitlement. Three customers using data outside licence terms is contractual exposure in both directions — toward the source that licensed it and toward the customer who exceeded their entitlement.',
      'The fifth is that commitments differ per customer. The same feed carries different freshness and coverage promises to different accounts, which makes breach a per-contract question rather than a system-wide one.',
      'Verity holds delivery commitments, source terms, quality incidents and usage entitlement against every customer.',
    ],
  },

  terminology: [
    ['Datasets, feeds, deliveries', 'Work'],
    ['Sources, licences, terms', 'Suppliers'],
    ['Customers, entitlements, usage', 'Relationships'],
    ['Freshness, coverage, commitments', 'Control'],
    ['Quality incidents and corrections', 'Records'],
    ['Lineage and transformations', 'Workflows'],
    ['Engineers, analysts, account staff', 'People'],
  ],

  challengesHeading: 'Silent failures against per-customer promises.',
  challengesLede:
    'Data company difficulties come from selling something whose failure produces no error.',
  challenges: [
    { problem: 'Staleness is discovered by the customer', detail: 'A feed stops updating and continues returning data.', outcome: 'Freshness is measured per delivery against each customer’s commitment.' },
    { problem: 'Quality incidents arrive from outside', detail: 'Customers report problems the business did not detect.', outcome: 'Incidents carry detection source, so the internal detection rate is measurable.' },
    { problem: 'Source licence terms are not attached to products', detail: 'What may be resold and to whom lives in contracts nobody consults.', outcome: 'Licence terms attach to sources and flow through to the products built on them.' },
    { problem: 'Lineage questions take days', detail: 'A customer asks where a value came from and the answer is reconstructed.', outcome: 'Sources, transformations and deliveries are linked, making lineage answerable.' },
    { problem: 'Usage exceeds entitlement unnoticed', detail: 'A customer uses more, or differently, than their contract allows.', outcome: 'Usage is measured against entitlement with exceptions surfaced.' },
    { problem: 'Commitments differ by customer and are treated as one', detail: 'A single delivery serves accounts with different promises.', outcome: 'Commitments are held per customer contract, so breach is assessed correctly.' },
  ],

  modulesLede: 'One system across deliveries, sources, customers and incidents.',
  modules: [
    { id: 'work', title: 'Datasets, feeds and deliveries', line: 'Each delivery carries its dataset, customer, schedule, last successful run, freshness and coverage against commitment.', why: 'The delivery, not the pipeline, is what the customer bought.', example: 'Seventeen deliveries behind their freshness commitment.' },
    { id: 'control', title: 'Freshness, coverage and commitments', line: 'One permission model and one audit trail, with per-contract freshness, coverage and availability commitments held and measured.', why: 'The same feed carries different promises to different customers.', example: 'Breach assessed per contract rather than per feed.' },
    { id: 'suppliers', title: 'Sources, licences and terms', line: 'Sources carry licence terms, permitted uses, resale rights, cost, renewal dates and reliability.', why: 'What the company may sell is determined by what it was licensed to receive.', example: 'Six source licences renewing this quarter.' },
    { id: 'records', title: 'Quality incidents and corrections', line: 'Incidents carry dataset, detection source, impact, affected customers, correction and communication.', why: 'Who detected the problem is as important as the problem.', example: 'Seven of eleven incidents reported by customers.' },
    { id: 'workflows', title: 'Lineage and transformations', line: 'Sources, transformations and outputs are linked so any delivered value traces backwards.', why: 'Lineage questions arrive from customers and regulators and need fast answers.', example: 'Lineage from a delivered field back to its sources.' },
    { id: 'relationships', title: 'Customers, entitlements and usage', line: 'Customers carry contracted datasets, entitlements, usage, commitments and incident history.', why: 'Entitlement is contractual and usage should be measured against it.', example: 'Three customers using data outside licence terms.' },
    { id: 'people', title: 'Engineers, analysts and account staff', line: 'Staff carry dataset ownership, incident handling, customer responsibility and availability.', why: 'A dataset without an owner has nobody watching its freshness.', example: 'Datasets with named owners and coverage.' },
    { id: 'intelligence', title: 'Delivery, quality and licence reporting', line: 'Freshness adherence, incident detection rates, source reliability, usage against entitlement and dataset profitability come from the records.', why: 'Both the product promise and the licence position are measurable.', example: 'Internal detection rate against customer-reported incidents.' },
    { id: 'ai', title: 'Ask delivery a question', line: 'Verity AI answers from your own delivery, source, customer and incident records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about breaches and lineage.', example: '"Which deliveries are behind commitment?" returns them with customers.' },
    { id: 'communication', title: 'Customer notification and incident contact', line: 'Breach notifications, incident communication and correction notices attach to the delivery and customer.', why: 'Telling the customer first changes an incident into a service event.', example: 'Breach notification recorded against the delivery.' },
    { id: 'orders', title: 'Contracts, pricing and renewals', line: 'Customer contracts carry datasets, commitments, pricing, term and renewal.', why: 'Commitments and price sit in the same contract and should sit in the same record.', example: 'Contract commitments alongside pricing per customer.' },
    { id: 'locations', title: 'Environments and delivery endpoints', line: 'Delivery destinations and environments are recorded per customer.', why: 'A delivery that succeeded to the wrong destination has still failed.', example: 'Delivery endpoints confirmed per customer contract.' },
  ],

  workflowsHeading: 'Ingest, transform, deliver, detect, correct.',
  workflowsLede: 'These already happen. Recorded, silent failures stop being silent.',
  workflows: [
    { name: 'Delivery monitoring', steps: ['Scheduled delivery expected per customer', 'Completion and freshness recorded', 'Commitment compared per contract', 'Breach flagged with the affected customers', 'Notification issued and recorded'], note: 'Comparing per contract rather than per feed is what makes breach assessment correct.' },
    { name: 'Quality incident', steps: ['Issue detected internally or reported by a customer', 'Detection source recorded', 'Impact and affected customers identified', 'Correction produced and delivered', 'Communication recorded and incident closed'], note: 'Recording detection source is what improves internal detection over time.' },
    { name: 'Source licence management', steps: ['Source recorded with licence terms and permitted uses', 'Products built on it linked', 'Renewal raised in advance', 'Term changes assessed against affected products', 'Position updated'], note: 'A licence change can invalidate a product the company already sells.' },
    { name: 'Lineage request', steps: ['Customer question received about a value or field', 'Delivery identified', 'Transformations traced back to sources', 'Answer produced with the chain', 'Response recorded against the customer'], note: 'A lineage answer produced in hours is a different service from one produced in days.' },
    { name: 'Entitlement review', steps: ['Contracted entitlements recorded per customer', 'Actual usage measured', 'Exceptions surfaced', 'Commercial or contractual conversation raised', 'Outcome recorded'], note: 'Exposure runs both ways, toward the source and toward the customer.' },
  ],

  ai: {
    heading: 'Ask about freshness and lineage.',
    lede: 'Verity AI reads the same delivery, source, customer and incident records the company creates as it operates. It answers from your own delivery, respects permissions, and can turn an answer into a notification or a licence review.',
    panelMeta: 'Grounded in your delivery records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which deliveries are behind their freshness commitment?',
      'Which incidents were reported by customers rather than detected?',
      'Which products depend on sources renewing this quarter?',
      'Where did this delivered field come from?',
      'Which customers are using data outside their entitlement?',
      'Which sources have the worst reliability?',
      'What is internal detection rate against customer-reported issues?',
      'Which datasets have no named owner?',
      'Summarise delivery and incident position by customer.',
    ],
  },

  automationHeading: 'Freshness, incidents and licences.',
  automationLede: 'Each runs from the company’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A delivery misses its freshness commitment', steps: ['Affected customers identified per contract', 'Notification raised with the owner', 'Breach and resolution recorded'] },
    { trigger: 'A quality incident is opened', steps: ['Detection source recorded', 'Affected customers and deliveries identified', 'Correction and communication tracked to close'] },
    { trigger: 'A source licence approaches renewal', steps: ['Products built on the source listed', 'Term changes assessed', 'Renewal decision recorded'] },
    { trigger: 'Customer usage exceeds entitlement', steps: ['Exception surfaced with contract terms', 'Commercial conversation assigned', 'Outcome recorded'] },
    { trigger: 'A dataset has no owner', steps: ['Flagged with its deliveries and customers', 'Owner assigned', 'Monitoring responsibility recorded'] },
  ],

  intelligenceHeading: 'What the company can see.',
  intelligenceLede: 'Delivery, quality and licence position from operating records.',
  intelligence: [
    { area: 'Delivery', points: ['Freshness against commitment by customer', 'Delivery success and failure', 'Coverage against contracted scope', 'Breach frequency and notification'] },
    { area: 'Quality', points: ['Incidents by dataset and cause', 'Internal against customer detection', 'Time to correction', 'Repeat incident patterns'] },
    { area: 'Sources', points: ['Licence terms and permitted uses', 'Renewal calendar', 'Source reliability and cost', 'Products dependent on each source'] },
    { area: 'Customers', points: ['Entitlement against usage', 'Contract commitments and pricing', 'Incident exposure by account', 'Renewal position'] },
  ],
  intelligenceNote: 'Verity records the company’s operations. Pipelines, warehouses and processing continue as they are.',

  rolesHeading: 'One company, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'Are we keeping our promises?', focus: 'Freshness adherence, incident detection rate, licence exposure, dataset profitability.' },
    { role: 'Data engineering lead', question: 'What is broken or stale?', focus: 'Delivery status, dataset ownership, incident queue, source reliability.' },
    { role: 'Account manager', question: 'What does this customer need to know?', focus: 'Commitments and breaches, incident history, entitlement and usage, renewal position.' },
    { role: 'Legal and commercial', question: 'What are we licensed to sell?', focus: 'Source terms and renewals, products dependent on them, customer entitlements, exceptions.' },
  ],

  useCasesHeading: 'What data companies use Verity for',
  useCases: [
    { name: 'Detecting staleness before the customer', body: 'Freshness measured per delivery against each customer’s contracted commitment, so a silent failure surfaces internally rather than through a complaint.' },
    { name: 'Improving internal detection', body: 'Incidents carrying their detection source, which makes the ratio of internally found to customer-reported problems a measurable target.' },
    { name: 'Connecting licences to products', body: 'Source terms and permitted uses attached to the products built on them, so a licence change is assessed against what the company sells.' },
    { name: 'Answering lineage questions quickly', body: 'Sources, transformations and deliveries linked, so tracing a delivered value backwards is a query rather than an investigation.' },
    { name: 'Managing entitlement', body: 'Contracted entitlements measured against actual usage, with exceptions raised before they become a dispute in either direction.' },
    { name: 'Per-customer commitments', body: 'Freshness and coverage promises held per contract, so breach is assessed against what that customer was actually promised.' },
    { name: 'Asking about delivery', body: 'Plain-language questions across deliveries, sources, incidents and customers, with notifications and reviews raised in the same step.' },
  ],

  migration: 'Pipelines, warehouses and processing continue and are mapped during implementation. Datasets and deliveries, customer contracts with commitments and entitlements, source licences and terms, and incident history are brought across.',

  faqHeading: 'Questions data companies ask',
  faqs: [
    ['What can AI software do for a data company?', 'Verity AI answers questions from your own delivery, source, customer and incident records: which deliveries are behind their freshness commitment, which incidents were customer-reported, which products depend on sources renewing this quarter, where a delivered field came from. Each answer can become a notification or a licence review.'],
    ['Why is freshness measured per customer?', 'Because the same feed carries different contractual promises to different accounts. A delay that breaches one contract may be inside tolerance for another, so breach has to be assessed against the specific commitment.'],
    ['How does it improve incident detection?', 'Every incident records whether it was found internally or reported by a customer. That ratio is the honest measure of monitoring quality and it becomes a target rather than an impression.'],
    ['Does it manage source licences?', 'Sources carry their licence terms, permitted uses and resale rights, and the products built on them are linked, so a renewal or term change is assessed against exactly what the company would no longer be permitted to sell.'],
    ['Can it answer lineage questions?', 'Sources, transformations and deliveries are linked, so a customer question about where a value came from is traced through the chain rather than reconstructed by an engineer from memory and code.'],
    ['What about customers exceeding entitlement?', 'Usage is measured against contracted entitlement with exceptions surfaced, which matters in both directions: toward the customer who exceeded their contract and toward the source whose licence governs resale.'],
    ['Does it replace our pipelines?', 'No. Pipelines, warehouses and processing continue as they are. Verity holds the business around them — deliveries, commitments, sources, licences, incidents and customers.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of datasets, delivery commitments, source terms and incident processes, configuration, migration of contracts and sources, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the deliveries behind commitment.',
  ctaLede: 'The customer usually knows before you do. Tell us how freshness is monitored today.',

  related: ['ai-companies', 'saas-companies', 'cybersecurity-companies', 'online-marketplaces', 'it-services-companies', 'consulting-firms'],
};
