export default {
  slug: 'auto-repair-shops',
  status: 'published',
  plural: 'auto repair shops',
  subject: 'auto repair shop',

  seo: {
    title: 'AI business management software for auto repair shops | Verity',
    description:
      'Verity gives auto repair shops one system for bay occupancy, estimate approval delays, parts availability, labour hours sold against worked and comeback rates.',
    keywords: [
      'AI software for auto repair shops',
      'auto repair shop management software',
      'garage bay and job card software',
      'vehicle service estimate and parts tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for auto repair shops',
    headline: 'The bay is occupied by a car nobody is working on.',
    lede:
      'A workshop earns on labour hours, and loses them to cars waiting for approval or parts. Verity shows which bays are producing and which are storage.',
    note: 'Verity runs the workshop. Diagnostic equipment stays where it is.',
    panel: {
      title: 'Workshop',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Bays occupied', value: '9 of 10', note: '4 not being worked on' },
        { label: 'Labour hours sold', value: '68%', note: 'of available technician hours' },
        { label: 'Estimates awaiting approval', value: '12', note: 'average age 2.4 days' },
        { label: 'Comebacks this month', value: '14', note: 'work redone free' },
      ],
      rows: [
        { name: '4 bays holding vehicles with no active work', meta: 'Awaiting approval or parts', active: true },
        { name: '12 estimates unapproved, oldest 6 days', meta: 'Customer not chased', active: true },
        { name: '14 comebacks this month', meta: 'Labour spent twice, billed once', active: true },
        { name: '3 jobs waiting on the same back-ordered part', meta: 'Alternative not sourced', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own workshop in this shape.',
    },
  },

  overview: {
    heading: 'Capacity is bays and technician hours, and both are lost to waiting.',
    paragraphs: [
      'An auto repair shop sells labour hours performed in a limited number of bays. Nine bays occupied sounds like a full workshop until four of them hold vehicles nobody is working on — cars waiting for a customer to approve an estimate or for a part to arrive. Those bays are storage, and the workshop cannot take the next job.',
      'The second characteristic is the approval gap. A vehicle is inspected, an estimate is produced, and then the job stops until the customer agrees. Twelve estimates unapproved at an average of two and a half days is capacity held hostage by a conversation nobody owns.',
      'The third is parts. Repair work needs specific parts, and three jobs waiting on the same back-ordered item is one sourcing decision affecting three bays.',
      'The fourth is the difference between hours sold and hours worked. A job estimated at three hours that takes five is margin gone, and the pattern by job type and technician is where the estimating standard should be corrected.',
      'The fifth is comebacks. Work redone under warranty consumes labour that was already paid for once, and fourteen in a month is both a cost and a quality signal.',
      'Verity holds bay state with the reason for waiting, ages estimates against owners, connects parts to the jobs they block, and compares hours sold with hours worked.',
    ],
  },

  terminology: [
    ['Job cards, repairs, services', 'Work'],
    ['Bays, lifts, workshop floor', 'Locations'],
    ['Estimates, approvals, invoices', 'Orders'],
    ['Parts, consumables, oils', 'Inventory'],
    ['Customers, vehicles, fleet accounts', 'Relationships'],
    ['Technicians, service advisors', 'People'],
    ['Warranty, comebacks, quality', 'Records'],
  ],

  challengesHeading: 'Occupied bays that are not producing hours.',
  challengesLede:
    'Workshop difficulties come from capacity being consumed by waiting rather than working.',
  challenges: [
    { problem: 'Bays hold vehicles that are not being worked on', detail: 'Cars awaiting approval or parts occupy the capacity the next job needs.', outcome: 'Bay state carries the reason for waiting, so blocked capacity is visible.' },
    { problem: 'Estimates sit unapproved without an owner', detail: 'The customer has not answered and nobody is chasing.', outcome: 'Estimates age against an owner with follow-up raised automatically.' },
    { problem: 'Parts availability is discovered mid-job', detail: 'A repair starts and stops when a part turns out to be unavailable.', outcome: 'Parts are checked and reserved against the job before work begins.' },
    { problem: 'Hours sold do not match hours worked', detail: 'Estimating standards drift from reality and margin is lost job by job.', outcome: 'Estimated against actual hours is measured by job type and technician.' },
    { problem: 'Comebacks are absorbed without a pattern', detail: 'Redone work is treated as goodwill and its cause is never aggregated.', outcome: 'Comebacks carry the original job, cause and technician, so patterns emerge.' },
    { problem: 'Service history is not attached to the vehicle', detail: 'A returning vehicle is diagnosed without what was done to it previously.', outcome: 'Every job attaches to the vehicle, giving full history at the next visit.' },
  ],

  modulesLede: 'One system across bays, jobs, parts and quality.',
  modules: [
    { id: 'work', title: 'Job cards, repairs and services', line: 'Each job carries vehicle, complaint, diagnosis, estimated hours, parts required, assigned technician, actual hours and state.', why: 'The job is where hours, parts and margin all meet.', example: 'Estimated against actual hours by job type.' },
    { id: 'locations', title: 'Bays, lifts and workshop floor', line: 'Each bay carries its current vehicle, job, active state and the reason it is occupied without work.', why: 'A bay holding a waiting car is lost capacity that looks like a busy workshop.', example: 'Four bays occupied with no active work.' },
    { id: 'orders', title: 'Estimates, approvals and invoicing', line: 'Estimates carry the customer, contents, age, owner, approval state and conversion to invoice.', why: 'The approval gap is where workshop capacity is quietly consumed.', example: 'Twelve estimates unapproved, oldest six days.' },
    { id: 'inventory', title: 'Parts, consumables and reservations', line: 'Parts are reserved against jobs, with availability, back-orders and alternatives visible.', why: 'One unavailable part can block several bays at once.', example: 'Three jobs waiting on the same back-ordered part.' },
    { id: 'people', title: 'Technicians and service advisors', line: 'Staff carry skills, assigned jobs, hours worked against sold, and comeback rate.', why: 'Productivity and quality are both person-level facts.', example: 'Hours sold against worked by technician.' },
    { id: 'relationships', title: 'Customers, vehicles and fleet accounts', line: 'Vehicles carry full service history, and customers carry their vehicles, approvals and payment behaviour.', why: 'A vehicle’s history is the fastest route to an accurate diagnosis.', example: 'Full service history surfaced at the next visit.' },
    { id: 'records', title: 'Warranty, comebacks and quality', line: 'Comebacks carry the original job, cause, cost of rework and responsible technician.', why: 'Redone work is labour paid for twice and billed once.', example: 'Fourteen comebacks with causes by job type.' },
    { id: 'intelligence', title: 'Capacity, productivity and quality reporting', line: 'Bay productivity, labour hours sold against available, estimate ageing, parts blocking and comeback rates come from the records.', why: 'The workshop is a capacity business and its losses are all measurable.', example: 'Labour hours sold as a share of available technician hours.' },
    { id: 'ai', title: 'Ask the workshop a question', line: 'Verity AI answers from your own job, bay, parts and customer records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about what is blocked and why.', example: '"Which bays are occupied without active work?" returns four with the blocking reason.' },
    { id: 'communication', title: 'Customer approval and updates', line: 'Estimate approvals, progress updates and collection notices attach to the job and vehicle.', why: 'An approval is a conversation with a capacity cost attached.', example: 'Approval chase recorded against the estimate.' },
    { id: 'control', title: 'Discounts, goodwill and authority', line: 'One permission model and one audit trail covering discounts, goodwill work and warranty acceptance.', why: 'Goodwill given informally is unmeasured cost.', example: 'Goodwill work recorded with approver and reason.' },
    { id: 'suppliers', title: 'Parts suppliers and sourcing', line: 'Suppliers carry availability, lead times, pricing and alternatives for the parts they supply.', why: 'A blocked job needs a real alternative and a real date.', example: 'Alternative sourcing options for a back-ordered part.' },
  ],

  workflowsHeading: 'Receive, diagnose, approve, repair, deliver.',
  workflowsLede: 'These already happen. Recorded, waiting stops consuming capacity silently.',
  workflows: [
    { name: 'Reception and diagnosis', steps: ['Vehicle received with complaint recorded', 'Service history surfaced', 'Diagnosis performed and recorded', 'Parts and hours estimated', 'Estimate issued to the customer'], note: 'Surfacing history at reception shortens diagnosis and prevents repeat work.' },
    { name: 'Approval', steps: ['Estimate issued with an owner and expected response', 'Age tracked from issue', 'Follow-up raised at threshold', 'Approval or revision recorded', 'Job released or vehicle moved out of the bay'], note: 'Moving an unapproved vehicle out of a bay is what recovers the capacity.' },
    { name: 'Parts and job release', steps: ['Parts checked against the job', 'Available parts reserved', 'Unavailable parts sourced with a date or alternative', 'Job scheduled to a bay and technician when complete', 'Work started'], note: 'Releasing a job only when parts are secured stops half-finished cars occupying bays.' },
    { name: 'Repair and handover', steps: ['Work performed with hours recorded', 'Additional work found raised as a supplementary estimate', 'Quality check completed', 'Invoice raised against approved contents', 'Vehicle handed over with the work recorded to the vehicle history'], note: 'Additional work needs its own approval or it becomes a dispute at handover.' },
    { name: 'Comeback handling', steps: ['Return linked to the original job', 'Cause diagnosed and recorded', 'Rework performed with hours captured', 'Cost attributed', 'Pattern reviewed by job type and technician'], note: 'Linking the comeback to the original job is what makes the pattern readable.' },
  ],

  ai: {
    heading: 'Ask about blocked capacity.',
    lede: 'Verity AI reads the same job, bay, parts and customer records the workshop creates as it works. It answers from your own workshop, respects permissions, and can turn an answer into a chase or a sourcing decision.',
    panelMeta: 'Grounded in your workshop records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which bays are occupied without active work and why?',
      'Which estimates are unapproved and how old are they?',
      'Which jobs are blocked on parts and which parts?',
      'What is hours sold against hours worked by job type?',
      'Which technicians have the highest comeback rate?',
      'What share of available technician hours was sold this week?',
      'Which vehicles have returned for the same complaint?',
      'What did goodwill and warranty work cost this month?',
      'Summarise capacity and productivity for the week.',
    ],
  },

  automationHeading: 'Approvals, parts and comebacks.',
  automationLede: 'Each runs from the workshop’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An estimate ages without approval', steps: ['Owner assigned to chase', 'Bay impact surfaced', 'Approval, revision or vehicle release recorded'] },
    { trigger: 'A job is blocked on an unavailable part', steps: ['Blocked jobs grouped by part', 'Alternative sourcing surfaced', 'Bay released where the wait is long'] },
    { trigger: 'Actual hours exceed estimated hours', steps: ['Variance recorded against job type', 'Estimating standard flagged for review', 'Pattern surfaced by technician'] },
    { trigger: 'A vehicle returns for the same complaint', steps: ['Linked to the original job', 'Cause recorded', 'Comeback pattern updated'] },
    { trigger: 'Additional work is found mid-job', steps: ['Supplementary estimate raised', 'Customer approval requested', 'Work released on approval only'] },
  ],

  intelligenceHeading: 'What the workshop can see.',
  intelligenceLede: 'Capacity, productivity and quality from job records.',
  intelligence: [
    { area: 'Capacity', points: ['Bay occupancy against active work', 'Reasons for idle occupancy', 'Estimate ageing and approval times', 'Jobs blocked on parts'] },
    { area: 'Productivity', points: ['Labour hours sold against available', 'Estimated against actual hours', 'Throughput by technician and job type', 'Supplementary work conversion'] },
    { area: 'Quality', points: ['Comeback rate by technician and job type', 'Rework cost', 'Repeat complaints by vehicle', 'Warranty and goodwill cost'] },
    { area: 'Parts', points: ['Availability at job release', 'Back-orders blocking bays', 'Supplier lead times', 'Parts margin by job'] },
  ],
  intelligenceNote: 'Verity records the workshop’s operations. Diagnostic equipment continues as it is.',

  rolesHeading: 'One workshop, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Are we selling our hours?', focus: 'Hours sold against available, bay productivity, comeback cost, estimate conversion.' },
    { role: 'Service advisor', question: 'What is waiting on the customer?', focus: 'Estimates by age, approvals outstanding, supplementary work, collection.' },
    { role: 'Workshop controller', question: 'What can I release?', focus: 'Bay state, parts reserved, technician availability, blocked jobs.' },
    { role: 'Technician', question: 'What am I working on?', focus: 'Assigned jobs, vehicle history, parts at the bay, hours recorded.' },
  ],

  useCasesHeading: 'What auto repair shops use Verity for',
  useCases: [
    { name: 'Seeing bays that are not producing', body: 'Bay state carrying the reason for idle occupancy, so a full-looking workshop that is half storage becomes visible and correctable.' },
    { name: 'Closing the approval gap', body: 'Estimates ageing against an owner with follow-up raised, because an unapproved estimate holds a bay as well as a decision.' },
    { name: 'Releasing jobs only when parts are secured', body: 'Parts reserved against the job before work starts, so a repair does not stop halfway and occupy a lift for days.' },
    { name: 'Correcting estimating standards', body: 'Estimated against actual hours by job type and technician, which is where systematic under-estimation shows up.' },
    { name: 'Reading comebacks as a pattern', body: 'Returns linked to their original job with cause and technician, turning absorbed rework into an addressable quality signal.' },
    { name: 'Vehicle history at reception', body: 'Every job attached to the vehicle, so a returning car is diagnosed with what was previously done to it.' },
    { name: 'Asking about the workshop', body: 'Plain-language questions across bays, jobs, parts and quality, with chases and sourcing raised in the same step.' },
  ],

  migration: 'Diagnostic equipment continues and is mapped during implementation. Customers and vehicles with service history, open job cards and estimates, parts stock and suppliers, and technician records are brought across.',

  faqHeading: 'Questions auto repair shops ask',
  faqs: [
    ['What can AI software do for an auto repair shop?', 'Verity AI answers questions from your own job, bay, parts and customer records: which bays are occupied without active work and why, which estimates are unapproved and how old they are, which jobs are blocked on which parts, how hours sold compare with hours worked. Each answer can become a chase or a sourcing decision.'],
    ['Why focus on bay occupancy rather than job count?', 'Because a bay holding a vehicle that nobody is working on is lost capacity that looks like a busy workshop. Recording why a bay is occupied separates production from storage.'],
    ['How does it help with unapproved estimates?', 'Estimates carry an owner and age from the moment they are issued, with follow-up raised at a threshold, and the bay impact is visible so a long wait can trigger moving the vehicle out rather than holding capacity.'],
    ['Can it stop jobs stalling on parts?', 'Parts are checked and reserved against the job before it is released to a bay, and jobs blocked on the same unavailable part are grouped so one sourcing decision unblocks several.'],
    ['How does it improve estimating?', 'Estimated hours and actual hours are both recorded per job, so systematic differences by job type and technician become visible and the standard can be corrected rather than absorbed.'],
    ['What does it do about comebacks?', 'Returns are linked to their original job with cause, rework hours and responsible technician recorded, which turns individually forgiven rework into a measurable quality pattern.'],
    ['Does it replace diagnostic equipment?', 'No. Diagnostic tools continue as they are. Verity holds the workshop around them — job cards, bays, estimates, parts, technicians and vehicle history.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of job types, labour standards, parts process and approval flow, configuration, migration of customers, vehicles and open jobs, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the bays that are not working.',
  ctaLede: 'They are usually waiting on an approval nobody owns. Tell us how estimates are chased today.',

  related: ['auto-parts-stores', 'car-rentals', 'car-washes', 'repair-services', 'industrial-suppliers', 'facility-management'],
};
