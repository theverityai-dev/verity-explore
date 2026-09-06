export default {
  slug: 'laundry-services',
  status: 'published',
  plural: 'laundry services',
  subject: 'laundry service',

  seo: {
    title: 'AI business management software for laundry services | Verity',
    description:
      'Verity gives laundry services one system for item-level tracking through every process stage, turnaround promises, loss and damage claims, and institutional contract volumes.',
    keywords: [
      'AI software for laundry services',
      'laundry management software',
      'garment tracking and turnaround software',
      'laundry loss and damage claim tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for laundry services',
    headline: 'One missing shirt costs more than the hundred you cleaned perfectly.',
    lede:
      'A laundry takes custody of other people’s belongings and returns them on a promise. Verity tracks every item through every stage, with the promise attached.',
    note: 'Verity runs the business. Machinery and payment tools stay where they are.',
    panel: {
      title: 'Plant',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Items in process', value: '4,860', note: '312 orders' },
        { label: 'Orders past promised date', value: '23', note: 'customer not informed' },
        { label: 'Items unaccounted', value: '19', note: 'across 14 orders' },
        { label: 'Damage claims open', value: '7', note: 'oldest 11 days' },
      ],
      rows: [
        { name: '19 items unaccounted at sorting', meta: 'Last recorded stage known', active: true },
        { name: '23 orders past promise, customers uninformed', meta: 'Complaint before collection', active: true },
        { name: '7 damage claims open', meta: 'Liability and goodwill undecided', active: true },
        { name: 'Institutional volumes 22% above contract', meta: 'Additional volume unbilled', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own plant in this shape.',
    },
  },

  overview: {
    heading: 'You are holding someone else’s property and promising a date.',
    paragraphs: [
      'A laundry’s core obligation is custody. Thousands of items belonging to other people move through washing, drying, pressing, sorting and packing, and the business’s reputation is decided by the small number that go missing or come back damaged. Nineteen unaccounted items is a small percentage and a large problem, because each one belongs to a specific customer who will remember it.',
      'The second characteristic is the turnaround promise. Every order carries a date, and twenty-three orders past their promise with customers uninformed is a set of complaints that will arrive at the counter rather than being managed in advance.',
      'The third is that item-level tracking is what makes both solvable. Knowing the last stage at which an item was recorded turns a search of the whole plant into a search of one process step.',
      'The fourth is claims. Loss and damage require an assessment, a liability decision and a resolution, and seven claims open for days is goodwill decaying while nobody decides.',
      'The fifth is institutional work. Hotels, hospitals and restaurants send contracted volumes, and twenty-two per cent above contract is either revenue to bill or capacity being given away.',
      'Verity tracks items through every stage, holds the promised date against progress, and manages claims and contract volumes.',
    ],
  },

  terminology: [
    ['Orders, items, lots', 'Work'],
    ['Washing, drying, pressing, packing', 'Workflows'],
    ['Customers, institutions, accounts', 'Relationships'],
    ['Turnaround, promises, delivery', 'Logistics'],
    ['Loss, damage, claims', 'Records'],
    ['Machines, plant, capacity', 'Locations'],
    ['Sorters, pressers, drivers', 'People'],
  ],

  challengesHeading: 'Custody, a promised date, and thousands of small items.',
  challengesLede:
    'Laundry difficulties come from handling other people’s property at volume.',
  challenges: [
    { problem: 'Items go missing with no last known stage', detail: 'An item is not in the pack and the search covers the whole plant.', outcome: 'Every item is recorded at each stage, so a search starts from the last scan.' },
    { problem: 'Late orders are discovered at collection', detail: 'The promised date passes and the customer finds out when they arrive.', outcome: 'Progress is tracked against the promise with contact raised before the date.' },
    { problem: 'Claims sit undecided', detail: 'Loss and damage wait for a liability decision while the customer waits.', outcome: 'Claims carry assessment, owner, decision and resolution with ageing.' },
    { problem: 'Institutional volumes drift from contract', detail: 'Actual volumes exceed contracted quantities and are not billed.', outcome: 'Volumes are recorded per contract with variance visible for billing.' },
    { problem: 'Rewash and reprocess cost is invisible', detail: 'Items returned to a stage consume capacity that nobody counts.', outcome: 'Reprocessing is recorded with cause, stage and cost.' },
    { problem: 'Special handling instructions are lost', detail: 'A garment needing particular treatment is processed normally.', outcome: 'Handling instructions travel with the item through every stage.' },
  ],

  modulesLede: 'One system across items, stages, promises and claims.',
  modules: [
    { id: 'work', title: 'Orders, items and lots', line: 'Each order carries its items with individual identification, service type, handling instructions, promised date and current stage.', why: 'The unit of custody is the item, not the order.', example: 'Nineteen unaccounted items with their last recorded stage.' },
    { id: 'workflows', title: 'Washing, drying, pressing and packing', line: 'Items are recorded at each process stage with machine, batch, operator and time.', why: 'Stage-level records turn a missing item into a bounded search.', example: 'Last recorded stage for every unaccounted item.' },
    { id: 'logistics', title: 'Turnaround, collection and delivery', line: 'Promised dates, progress against them, collection and delivery are held per order.', why: 'The promise is the service, and it needs managing before it is broken.', example: 'Twenty-three orders past promise with customers uninformed.' },
    { id: 'records', title: 'Loss, damage and claims', line: 'Claims carry the item, its stage history, assessment, liability decision, resolution and cost.', why: 'A claim decided quickly costs less than one decided slowly.', example: 'Seven claims open with the oldest at eleven days.' },
    { id: 'relationships', title: 'Customers, institutions and accounts', line: 'Customers carry order history, preferences, claims and payment; institutions carry contracts and volumes.', why: 'Retail and institutional customers have different obligations on the same plant.', example: 'Institutional volumes against contracted quantities.' },
    { id: 'locations', title: 'Machines, plant and capacity', line: 'Machines carry capacity, batch loads, service state and throughput.', why: 'Plant capacity decides how much promise the business can make.', example: 'Capacity used against orders promised for tomorrow.' },
    { id: 'people', title: 'Sorters, pressers and drivers', line: 'Staff carry stage assignments, throughput, reprocessing and claim involvement.', why: 'Loss and damage concentrate at particular stages and shifts.', example: 'Reprocessing and loss by stage and shift.' },
    { id: 'intelligence', title: 'Turnaround, loss and volume reporting', line: 'Promise adherence, loss and damage rates by stage, reprocessing cost, plant throughput and contract volumes come from the records.', why: 'Reputation is decided by the exceptions, so the exceptions must be measured.', example: 'Loss rate by process stage.' },
    { id: 'ai', title: 'Ask the plant a question', line: 'Verity AI answers from your own order, item, stage and claim records, respects permissions, and can create assigned follow-ups.', why: 'The urgent question is always where a specific item is.', example: '"Where was this item last recorded?" returns the stage, machine and time.' },
    { id: 'orders', title: 'Pricing, contracts and billing', line: 'Retail pricing, institutional contracts, volume variance and additional services carry a billing state.', why: 'Volume above contract is either revenue or a giveaway.', example: 'Volumes twenty-two per cent above contract unbilled.' },
    { id: 'communication', title: 'Customer contact', line: 'Delay notifications, claim conversations and collection reminders attach to the order and item.', why: 'Telling a customer before the promised date passes changes the conversation entirely.', example: 'Delay notification recorded against the order.' },
    { id: 'control', title: 'Liability, goodwill and approvals', line: 'One permission model and one audit trail covering claim decisions, goodwill and write-offs.', why: 'Goodwill given inconsistently becomes an expectation.', example: 'Claim settlements recorded with approver and basis.' },
  ],

  workflowsHeading: 'Receive, tag, process, pack, deliver.',
  workflowsLede: 'These already happen. Recorded at item level, custody becomes provable.',
  workflows: [
    { name: 'Intake and tagging', steps: ['Order received with items counted', 'Each item identified and tagged', 'Condition and special handling recorded', 'Service type and promised date set', 'Customer receipt issued'], note: 'Recording condition at intake is what settles a damage claim later.' },
    { name: 'Processing', steps: ['Items batched by service and handling requirement', 'Recorded at each stage with machine and operator', 'Special handling applied and confirmed', 'Quality checked before packing', 'Reprocessing raised where needed with cause'], note: 'Every stage record narrows a future search to one step.' },
    { name: 'Promise management', steps: ['Progress compared with the promised date', 'At-risk orders identified before the date', 'Priority adjusted or customer informed', 'Revised promise recorded', 'Delivery completed'], note: 'Informing before the date is the difference between a message and a complaint.' },
    { name: 'Missing item search', steps: ['Item reported missing at packing or by customer', 'Last recorded stage retrieved', 'Search bounded to that stage and batch', 'Outcome recorded', 'Claim opened if not found'], note: 'A bounded search finds items that a general search does not.' },
    { name: 'Claim resolution', steps: ['Claim opened with item and stage history', 'Assessment performed', 'Liability decision made within authority', 'Resolution agreed with the customer', 'Cost and cause recorded'], note: 'The cause recorded is what prevents the same claim next month.' },
  ],

  ai: {
    heading: 'Ask about items and promises.',
    lede: 'Verity AI reads the same order, item, stage and claim records the plant creates as it processes. It answers from your own plant, respects permissions, and can turn an answer into a search, a notification or a claim decision.',
    panelMeta: 'Grounded in your plant records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Where was this item last recorded?',
      'Which orders will miss their promised date?',
      'What is the loss rate by process stage?',
      'Which claims are open and how old are they?',
      'Which institutional volumes exceed their contract?',
      'What did reprocessing cost this month and why?',
      'Which customers have had repeat problems?',
      'What is plant throughput against promises made?',
      'Summarise turnaround and loss position.',
    ],
  },

  automationHeading: 'Promises, items and claims.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An order is at risk of missing its promised date', steps: ['Flagged with current stage', 'Priority or notification decision raised', 'Revised promise recorded'] },
    { trigger: 'An item is missing at packing', steps: ['Last recorded stage retrieved', 'Bounded search assigned', 'Claim opened if unresolved'] },
    { trigger: 'A claim ages without a decision', steps: ['Escalated with assessment and history', 'Decision authority applied', 'Resolution recorded'] },
    { trigger: 'Institutional volume exceeds contract', steps: ['Variance flagged with the contract', 'Billing decision raised', 'Position updated'] },
    { trigger: 'Reprocessing is recorded at a stage', steps: ['Cause captured', 'Cost attributed', 'Stage pattern surfaced'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Custody, turnaround and cost from process records.',
  intelligence: [
    { area: 'Custody', points: ['Loss rate by stage and shift', 'Items unaccounted and their last stage', 'Damage rate by service type', 'Claim outcomes and cost'] },
    { area: 'Turnaround', points: ['Promise adherence by service type', 'Orders at risk before the date', 'Stage cycle times', 'Delivery performance'] },
    { area: 'Capacity', points: ['Throughput by machine and stage', 'Load against capacity', 'Reprocessing volume and cost', 'Promises made against available capacity'] },
    { area: 'Commercial', points: ['Contract volumes against actual', 'Additional services billed', 'Retail against institutional mix', 'Claim and goodwill cost by customer'] },
  ],
  intelligenceNote: 'Verity records the business’s operations. Machinery and payment tools continue as they are.',

  rolesHeading: 'One business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where are we losing?', focus: 'Loss rate by stage, claim cost, promise adherence, contract volume variance.' },
    { role: 'Plant supervisor', question: 'What is moving and what is stuck?', focus: 'Items by stage, machine load, reprocessing, orders at risk.' },
    { role: 'Counter staff', question: 'What do I tell this customer?', focus: 'Order progress, promised dates, item history, claim status.' },
    { role: 'Accounts', question: 'What is billable?', focus: 'Contract volumes and variance, additional services, claim settlements, outstanding payment.' },
  ],

  useCasesHeading: 'What laundry services use Verity for',
  useCases: [
    { name: 'Item-level custody', body: 'Every item recorded at every stage, so a missing garment has a last known location and a bounded search rather than a plant-wide hunt.' },
    { name: 'Managing the turnaround promise', body: 'Progress compared with the promised date and at-risk orders identified early, so the customer is told before they arrive to collect.' },
    { name: 'Deciding claims quickly', body: 'Claims carrying the item’s stage history, assessment, liability decision and resolution, with ageing visible so goodwill is not lost to delay.' },
    { name: 'Institutional contract volumes', body: 'Actual volumes recorded against contracted quantities, so work above contract becomes a billing decision rather than a giveaway.' },
    { name: 'Finding where loss happens', body: 'Loss and damage attributed to process stages and shifts, which is what makes the rate reducible.' },
    { name: 'Special handling that travels', body: 'Handling instructions attached to the item through every stage, so a garment needing particular treatment receives it.' },
    { name: 'Asking about the plant', body: 'Plain-language questions across items, orders, stages and claims, with searches and notifications raised in the same step.' },
  ],

  migration: 'Machinery and payment tools continue and are mapped during implementation. Customers and institutional contracts, service types and pricing, open orders with items, claim history and plant capacity records are brought across.',

  faqHeading: 'Questions laundry services ask',
  faqs: [
    ['What can AI software do for a laundry service?', 'Verity AI answers questions from your own order, item, stage and claim records: where an item was last recorded, which orders will miss their promised date, what the loss rate is by process stage, which claims are open and ageing. Each answer can become a search, a notification or a claim decision.'],
    ['Why track individual items?', 'Because the business’s reputation is decided by the few items that go missing or come back damaged, not by the thousands processed correctly. Item-level records turn a plant-wide search into a search of one stage and one batch.'],
    ['How does it help with turnaround?', 'Each order carries a promised date and its progress is compared against it, so orders at risk are identified before the date passes and the customer is contacted rather than discovering the delay at collection.'],
    ['What does it do about claims?', 'Claims carry the item, its recorded stage history, the assessment, the liability decision and the resolution, with ageing visible. A claim settled quickly costs less in goodwill than the same claim settled slowly.'],
    ['Can it handle institutional contracts?', 'Volumes are recorded per contract with variance against contracted quantities visible, so work delivered above contract becomes a billing conversation instead of unbilled capacity.'],
    ['Does it track reprocessing?', 'Items returned to a stage are recorded with cause and cost, which makes the capacity consumed by rework visible and attributable to specific stages.'],
    ['Does it replace our machinery?', 'No. Machinery and payment tools continue as they are. Verity holds the business around them — orders, items, stages, promises, claims and contracts.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of service types, process stages, tagging method and contract structures, configuration, migration of customers and contracts, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the items you cannot find.',
  ctaLede: 'A last recorded stage makes them findable. Tell us how items are tracked today.',

  related: ['cleaning-services', 'repair-services', 'tailors', 'hotels', 'car-washes', 'hospitals'],
};
