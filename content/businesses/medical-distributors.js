export default {
  slug: 'medical-distributors',
  status: 'published',
  plural: 'medical distributors',
  subject: 'medical distribution business',

  seo: {
    title: 'AI business management software for medical distributors | Verity',
    description:
      'Verity connects batch and expiry, cold chain conditions, institutional rate contracts, tender commitments and hospital credit into one operational system.',
    keywords: [
      'AI software for medical distributors',
      'medical distribution management software',
      'batch expiry and cold chain tracking',
      'rate contract and institutional credit software',
    ],
  },

  hero: {
    eyebrow: 'Verity for medical distribution',
    headline: 'Every unit has a batch, a date and a temperature it must not have exceeded.',
    lede:
      'Medical distribution carries traceability obligations most distributors do not, on credit to institutions that pay slowly. Verity tracks the batch, the chain and the contract.',
    note: 'Runs alongside your existing accounting and regulatory arrangements.',
    panel: {
      title: 'Distribution',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Stock value', value: '₹4.8 Cr', note: 'across 2 warehouses' },
        { label: 'Expiring 90 days', value: '₹42 L', note: 'return windows on part' },
        { label: 'Institutional credit', value: '₹3.6 Cr', note: '₹1.1 Cr beyond 90 days' },
        { label: 'Rate contracts', value: '38', note: '9 expiring this quarter' },
      ],
      rows: [
        { name: '₹42 L expiring within 90 days', meta: 'Supplier return windows open on part of it', active: true },
        { name: '₹1.1 Cr outstanding beyond 90 days from institutions', meta: 'Supplies continuing meanwhile', active: true },
        { name: '9 rate contracts expiring this quarter', meta: 'Renewal or renegotiation not started', active: true },
        { name: 'Cold chain excursion recorded without disposition', meta: '2 consignments · stock still saleable in system', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own distribution in this shape.',
    },
  },

  overview: {
    heading: 'Distribution with traceability obligations and institutional customers.',
    paragraphs: [
      'A medical distributor moves product like any other distributor, with three differences that change everything. Every unit carries a batch and an expiry that must be traceable from supplier to the institution that received it. Much of the stock has storage conditions that, if breached, make it unsaleable regardless of its date. And the customers are hospitals and institutions that buy on rate contracts and pay slowly.',
      'Batch traceability is not administrative overhead here; it is the ability to answer which institutions received a batch when a supplier issues a recall. Without it, a recall becomes an exercise in guessing.',
      'The second is cold chain. An excursion recorded without a disposition decision leaves stock in the system as saleable when it may not be, which is the most consequential possible record-keeping gap.',
      'The third is institutional credit. Three point six crore outstanding with over a crore beyond ninety days, while supplies continue, is working capital committed to customers who are effectively certain to pay eventually and in no hurry to.',
      'The fourth is rate contracts, which fix prices for a period and expire. Nine expiring this quarter with no renewal started is either a lapse in supply or a renegotiation done under pressure.',
      'Verity tracks batch and chain, manages contract expiry and ages institutional credit.',
    ],
  },

  terminology: [
    ['Products, batches, expiry, storage class', 'Inventory'],
    ['Orders, dispatches, returns, recalls', 'Orders'],
    ['Hospitals, institutions, retailers', 'Relationships'],
    ['Principals, manufacturers, importers', 'Suppliers'],
    ['Rate contracts, tenders, approvals', 'Workflows'],
    ['Cold chain, excursions, dispositions', 'Control'],
    ['Warehouses, cold rooms, vehicles', 'Locations'],
  ],

  challengesHeading: 'Traceability, temperature and slow institutional payment.',
  challengesLede:
    'Medical distribution difficulties come from obligations ordinary distribution does not carry and customers who pay on their own schedule.',
  challenges: [
    { problem: 'Batch traceability is partial', detail: 'Which institution received which batch is reconstructable in principle and slow in practice, which is unacceptable during a recall.', outcome: 'Batch is recorded through receipt, storage, dispatch and delivery, so a recall resolves to a list of recipients.' },
    { problem: 'Cold chain excursions lack dispositions', detail: 'A temperature breach is recorded and the affected stock remains saleable in the system until someone decides.', outcome: 'An excursion quarantines the affected batch until a disposition is recorded.' },
    { problem: 'Institutional credit ages while supply continues', detail: 'Hospitals pay slowly, orders keep arriving, and exposure grows without a decision point.', outcome: 'Exposure and ageing sit on the institution and are checked when the next order is taken.' },
    { problem: 'Rate contracts expire unnoticed', detail: 'Contracts fix prices for a period, and expiry arrives without renewal started.', outcome: 'Contract expiry dates sit on the institution with renewal raised ahead of them.' },
    { problem: 'Expiry recovery windows close', detail: 'Short-dated stock is returnable to suppliers within terms that close before the expiry date.', outcome: 'Return eligibility sits on the batch, so recovery happens while it is possible.' },
    { problem: 'Tender commitments are made without stock planning', detail: 'A tender is won committing supply that stock and lead times may not support.', outcome: 'Tender commitments are recorded against supply capability before they are made.' },
  ],

  modulesLede: 'One system across batch, chain, contract and credit.',
  modules: [
    { id: 'inventory', title: 'Products, batches and storage class', line: 'Stock is held by batch with expiry, storage class, supplier, return eligibility, location and condition history.', why: 'Batch and condition together determine whether stock is saleable, not date alone.', example: 'Forty-two lakh expiring in ninety days with return windows open on part of it.' },
    { id: 'control', title: 'Cold chain, excursions and dispositions', line: 'Storage conditions, excursions and disposition decisions are recorded with one audit trail.', why: 'Stock that experienced an excursion must not remain saleable by default.', example: 'An excursion quarantining the batch until a disposition is recorded.' },
    { id: 'orders', title: 'Orders, dispatches and recalls', line: 'Orders record institution, batches dispatched, delivery confirmation and any recall action.', why: 'Recall response is a batch-to-recipient lookup that must be immediate.', example: 'A recall resolved to the institutions that received the batch.' },
    { id: 'relationships', title: 'Hospitals, institutions and retailers', line: 'Customers carry their rate contracts, credit limits, balances, ageing, order history and delivery requirements.', why: 'Institutional customers combine reliability with slowness, which is its own risk profile.', example: 'One point one crore beyond ninety days while supplies continue.' },
    { id: 'workflows', title: 'Rate contracts, tenders and approvals', line: 'Rate contracts, tender commitments, credit extensions and returns move through defined steps with recorded decisions.', why: 'Contracts and tenders commit price and supply ahead of both.', example: 'Nine rate contracts expiring this quarter with renewal raised.' },
    { id: 'suppliers', title: 'Principals, manufacturers and importers', line: 'Suppliers carry terms, return windows, batch supply, recall notices and balances.', why: 'Return terms and recall notices both arrive from suppliers and are time-bound.', example: 'Return eligibility by supplier against short-dated stock.' },
    { id: 'locations', title: 'Warehouses, cold rooms and vehicles', line: 'Locations carry storage class, condition monitoring, stock and movement.', why: 'Storage conditions are a property of the location and must travel with the stock.', example: 'Condition history by cold room and vehicle.' },
    { id: 'logistics', title: 'Dispatch and delivery', line: 'Dispatch records batches, vehicles, conditions and delivery confirmation.', why: 'The chain has to be unbroken from warehouse to institution.', example: 'Delivery confirmed with condition recorded at receipt.' },
    { id: 'intelligence', title: 'Expiry, credit and contract reporting', line: 'Expiry exposure and return eligibility, credit ageing by institution, contract expiry, excursion frequency and recall readiness come from the records.', why: 'The distributor’s obligations and its working capital are both dated.', example: 'Credit ageing by institution against active rate contracts.' },
    { id: 'ai', title: 'Ask distribution a question', line: 'Verity AI answers from your own batch, order, contract and credit records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about dates and about who received what.', example: '"Which institutions received this batch?" returns the list immediately.' },
    { id: 'people', title: 'Warehouse, sales and compliance staff', line: 'Staff are modelled once, with receipts, dispatches, dispositions and credit decisions attributed.', why: 'Disposition and credit decisions both need attribution.', example: 'Every disposition carrying the person and the basis.' },
    { id: 'communication', title: 'Institution and supplier correspondence', line: 'Orders, recalls, contract correspondence and credit discussions attach to the party they concern.', why: 'A recall notice and its acknowledgements are records that must be produced.', example: 'Recall notifications and acknowledgements recorded per institution.' },
  ],

  workflowsHeading: 'Batch in, chain intact, contract current, credit controlled.',
  workflowsLede: 'These already happen. Recorded at batch level, the obligations become answerable.',
  workflows: [
    { name: 'Receipt to storage', steps: ['Consignment received with batches and expiry recorded', 'Condition on arrival verified against storage class', 'Excursion recorded and disposition raised if breached', 'Stock placed in the appropriate location', 'Return eligibility calculated from supplier terms'], note: 'Verifying condition at receipt is what prevents a compromised batch entering saleable stock.' },
    { name: 'Order to delivery', steps: ['Order taken against the institution and rate contract', 'Credit position checked against limit and ageing', 'Batches allocated with expiry considered', 'Dispatch recorded with vehicle and conditions', 'Delivery confirmed with condition at receipt'], note: 'Allocating with expiry in mind moves short-dated stock first.' },
    { name: 'Recall response', steps: ['Supplier recall notice recorded against the batch', 'Institutions that received the batch identified', 'Notifications issued and acknowledgements tracked', 'Stock recovered and quarantined', 'Return to supplier and credit recorded'], note: 'This is the process the entire traceability discipline exists to support.' },
    { name: 'Rate contract cycle', steps: ['Contract recorded with rates, period and expiry', 'Orders priced against the active contract', 'Renewal raised ahead of expiry', 'Renegotiation or extension recorded', 'New rates applied from the effective date'], note: 'A contract that lapses becomes a renegotiation under supply pressure.' },
    { name: 'Institutional credit', steps: ['Limit and terms recorded per institution', 'Exposure checked when orders are taken', 'Balances aged from invoice date', 'Follow-up assigned with order history attached', 'Escalation applied consistently'], note: 'Institutions pay eventually and slowly, which makes exposure a planning matter rather than a doubt.' },
    { name: 'Expiry recovery', steps: ['Batches approaching return windows identified', 'Movement and demand reviewed', 'Return, redistribution or markdown decided', 'Return dispatched and credit tracked', 'Remaining exposure reported'], note: 'The window closes before the date, as it does throughout medical supply.' },
  ],

  ai: {
    heading: 'Ask who received what and when it expires.',
    lede: 'Verity AI reads the same batch, order, contract and credit records the business creates as it operates. It answers from your own distribution, respects permissions, and can turn an answer into recalls and follow-ups.',
    panelMeta: 'Grounded in your distribution records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which institutions received a given batch?',
      'What stock is expiring within ninety days and still returnable?',
      'Which institutions are beyond ninety days while still ordering?',
      'Which rate contracts expire this quarter?',
      'Which consignments recorded excursions without a disposition?',
      'What is credit exposure by institution against limits?',
      'Which suppliers issue recalls most often?',
      'What is stock cover by product against institutional demand?',
      'Summarise expiry exposure and credit position.',
    ],
  },

  automationHeading: 'Dates, conditions and exposure.',
  automationLede: 'Each runs from the distribution records at the point the condition is met.',
  automations: [
    { trigger: 'A condition excursion is recorded', steps: ['Affected batch quarantined immediately', 'Disposition decision assigned', 'Stock released or written off with the basis recorded'] },
    { trigger: 'A supplier recall notice is received', steps: ['Batch identified and recipients listed', 'Notifications issued with acknowledgement tracking', 'Recovery and supplier credit recorded'] },
    { trigger: 'A batch approaches its return window', steps: ['Flagged with value and supplier terms', 'Return, redistribution or markdown decision assigned', 'Credit tracked on return'] },
    { trigger: 'An institution approaches its credit limit', steps: ['Order held at the approval step', 'Exposure and ageing attached', 'Decision recorded'] },
    { trigger: 'A rate contract approaches expiry', steps: ['Renewal task raised ahead of the date', 'Current volumes and margins attached', 'Outcome recorded and new rates applied'] },
  ],

  intelligenceHeading: 'What the distributor can see.',
  intelligenceLede: 'Traceability, condition, contracts and credit from the same records.',
  intelligence: [
    { area: 'Traceability', points: ['Batch from receipt to recipient', 'Recall readiness and response times', 'Acknowledgements received', 'Stock recovered on recall'] },
    { area: 'Condition', points: ['Excursions by location and vehicle', 'Dispositions recorded and their basis', 'Stock quarantined and released', 'Condition compliance by route'] },
    { area: 'Expiry', points: ['Exposure by product, batch and value', 'Return eligibility remaining', 'Recovery achieved against exposure', 'Write-offs by cause'] },
    { area: 'Credit', points: ['Exposure by institution against limits', 'Ageing bands and beyond-terms balances', 'Orders taken while overdue', 'Collection outcomes'] },
    { area: 'Contracts', points: ['Rate contracts active and expiring', 'Volumes and margin by contract', 'Tender commitments against supply', 'Renewal outcomes'] },
  ],
  intelligenceNote: 'Verity records the distribution operation. Regulatory filings and supplier systems continue as they are.',

  rolesHeading: 'One operation, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where is my working capital and what is at risk?', focus: 'Credit exposure and ageing, expiry exposure, contract expiry, recall readiness.' },
    { role: 'Warehouse and compliance', question: 'Is the chain intact?', focus: 'Condition monitoring, excursions and dispositions, batch traceability, quarantined stock.' },
    { role: 'Sales', question: 'What can I supply and to whom?', focus: 'Stock by batch and expiry, institution credit position, active rate contracts, delivery requirements.' },
    { role: 'Accounts', question: 'Who owes and for how long?', focus: 'Ageing by institution, orders while overdue, supplier credits from returns and recalls.' },
  ],

  useCasesHeading: 'What medical distributors use Verity for',
  useCases: [
    { name: 'Batch traceability', body: 'Batch recorded from receipt through storage and dispatch to the institution, so a recall is a lookup rather than a reconstruction.' },
    { name: 'Cold chain dispositions', body: 'An excursion quarantining the affected batch until a disposition is recorded, rather than leaving it saleable by default.' },
    { name: 'Expiry recovery', body: 'Return eligibility on the batch against supplier terms, so short-dated stock is recovered while the window is open.' },
    { name: 'Institutional credit control', body: 'Exposure and ageing checked when the next order is taken, since institutions pay eventually and slowly.' },
    { name: 'Rate contract renewal', body: 'Contract expiry dates with renewal raised ahead, avoiding renegotiation under supply pressure.' },
    { name: 'Recall response', body: 'Recipients of a batch listed immediately with notifications and acknowledgements tracked.' },
    { name: 'Asking about batches', body: 'Plain-language questions across batch, condition, contract and credit, with actions raised in the same step.' },
  ],

  migration: 'Your accounting and regulatory arrangements continue and are mapped during implementation. Stock by batch with expiry and storage class, institutions with contracts and balances, and suppliers are brought across.',

  faqHeading: 'Questions medical distributors ask',
  faqs: [
    ['What can AI software do for a medical distributor?', 'Verity AI answers questions from your own batch, order, contract and credit records: which institutions received a batch, what is expiring and still returnable, which institutions are beyond ninety days while ordering, which contracts expire this quarter. Each answer can become a recall action or a follow-up.'],
    ['How does batch traceability work?', 'Batch is recorded at receipt and carried through storage, dispatch and delivery to the institution, so a supplier recall resolves immediately to a list of recipients rather than to an exercise in reconstruction.'],
    ['What happens on a cold chain excursion?', 'The affected batch is quarantined automatically until a disposition is recorded with its basis. Leaving compromised stock saleable by default is the most consequential record-keeping gap available in this business.'],
    ['Can it manage institutional credit?', 'Exposure, ageing and limits sit on the institution and are checked when the next order is taken. Hospitals pay eventually and slowly, which makes exposure a planning matter rather than a doubt about recovery.'],
    ['Does it handle rate contracts?', 'Contracts carry their rates, period and expiry, orders are priced against the active contract, and renewal is raised ahead of expiry so a lapse does not become a renegotiation under supply pressure.'],
    ['How does expiry recovery work?', 'Return eligibility sits on the batch against each supplier’s terms, so short-dated stock is returned, redistributed or marked down while the window is still open — it closes before the expiry date.'],
    ['Does Verity replace our regulatory filings?', 'No. Regulatory arrangements and supplier systems continue and are mapped during implementation. Verity holds the batch records, condition history, contracts, credit and operational reporting.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of storage classes, contract structures and credit practice, configuration, migration of stock by batch and institutions, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with traceability or with credit.',
  ctaLede: 'One is an obligation and the other is your working capital. Tell us which is less answerable today.',

  related: ['distributors', 'pharmacies', 'hospitals', 'diagnostic-labs', 'wholesalers', 'industrial-suppliers'],
};
