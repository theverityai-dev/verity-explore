export default {
  slug: 'repair-services',
  status: 'published',
  plural: 'repair services',
  subject: 'repair service',

  seo: {
    title: 'AI business management software for repair services | Verity',
    description:
      'Verity gives repair services one system for first-visit fix rates, spare parts on the van, warranty claim recovery, technician routing and device history.',
    keywords: [
      'AI software for repair services',
      'repair service management software',
      'field service first visit fix rate software',
      'warranty claim and spare parts tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for repair services',
    headline: 'The second visit costs what the first one earned.',
    lede:
      'Field repair is decided by whether the technician arrives with the right part. Verity connects the fault, the part and the visit before the van leaves.',
    note: 'Verity runs the service business. Manufacturer portals stay where they are.',
    panel: {
      title: 'Service',
      meta: 'This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Jobs attended', value: '384', note: '11 technicians' },
        { label: 'First-visit fix', value: '64%', note: 'target 85%' },
        { label: 'Warranty claims unfiled', value: '58', note: 'value recoverable' },
        { label: 'Van stock unreconciled', value: '9 vans', note: 'parts unaccounted' },
      ],
      rows: [
        { name: '36% of jobs need a second visit', meta: 'Part not carried', active: true },
        { name: '58 warranty claims unfiled', meta: 'Recovery windows closing', active: true },
        { name: '9 vans with unreconciled parts', meta: 'Stock issued, not consumed or returned', active: true },
        { name: '4 devices returned three times', meta: 'Fault not resolved', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own service business in this shape.',
    },
  },

  overview: {
    heading: 'The economics of a repair are decided before the technician arrives.',
    paragraphs: [
      'A repair service earns on a visit and loses on the next one. Sixty-four per cent first-visit fix against a target of eighty-five means a third of jobs are attended twice, and the second visit costs travel, technician time and a customer’s patience while producing no additional revenue. The cause is almost always that the technician did not have the part.',
      'The second characteristic is that diagnosis happens away from stock. The fault is understood at the customer’s premises, and whether it can be fixed there depends on what was loaded into the van that morning against what the job was likely to need.',
      'The third is warranty recovery. Much repair work is claimable against manufacturers, and fifty-eight unfiled claims is money already earned that is being lost to a filing window and a documentation requirement.',
      'The fourth is van stock. Parts issued to technicians and neither consumed nor returned is inventory that has left the business without a transaction, and nine unreconciled vans is a persistent leak.',
      'The fifth is device history. A device returning three times is a fault that was never actually diagnosed, and only a record against the device rather than the job shows the repetition.',
      'Verity connects fault patterns to parts carried, tracks warranty claims to filing, and reconciles van stock against jobs.',
    ],
  },

  terminology: [
    ['Jobs, visits, repairs', 'Work'],
    ['Devices, appliances, serial numbers', 'Records'],
    ['Spare parts, van stock, returns', 'Inventory'],
    ['Technicians, routes, territories', 'People'],
    ['Customers, warranty holders, contracts', 'Relationships'],
    ['Warranty claims and recovery', 'Control'],
    ['Manufacturers, distributors, principals', 'Suppliers'],
  ],

  challengesHeading: 'A visit without the part is a visit wasted.',
  challengesLede:
    'Repair difficulties come from diagnosing in one place and stocking in another.',
  challenges: [
    { problem: 'The technician arrives without the part', detail: 'The fault needs a component that was not carried and a second visit is scheduled.', outcome: 'Reported fault patterns inform van stock, and likely parts are checked before dispatch.' },
    { problem: 'Warranty claims go unfiled', detail: 'Work is done under warranty and the claim is never submitted within its window.', outcome: 'Claims are raised at job close with documentation and a filing deadline.' },
    { problem: 'Van stock is not reconciled', detail: 'Parts issued to technicians are neither consumed on jobs nor returned.', outcome: 'Van stock is reconciled against jobs, with unaccounted parts surfaced.' },
    { problem: 'Repeat faults are not recognised', detail: 'The same device returns and each visit is treated as a new job.', outcome: 'Jobs attach to the device, so repetition and the previous diagnosis are visible.' },
    { problem: 'Routing ignores parts and skills', detail: 'Jobs are allocated geographically without regard to who carries what.', outcome: 'Allocation considers technician skill, van stock and route together.' },
    { problem: 'Chargeable and warranty work are confused', detail: 'Work outside warranty is done free because the boundary was not checked.', outcome: 'Warranty status is confirmed against the device before work is authorised.' },
  ],

  modulesLede: 'One system across jobs, parts, technicians and claims.',
  modules: [
    { id: 'work', title: 'Jobs, visits and repairs', line: 'Each job carries the device, reported fault, diagnosis, parts used, visit count, outcome and chargeable or warranty status.', why: 'The visit count is the measure the business lives on.', example: 'Thirty-six per cent of jobs requiring a second visit.' },
    { id: 'inventory', title: 'Spare parts, van stock and returns', line: 'Parts are held centrally and on vans, issued to technicians, consumed against jobs and reconciled.', why: 'Parts on a van are inventory outside the building and need the same discipline.', example: 'Nine vans with unreconciled parts.' },
    { id: 'records', title: 'Devices, serial numbers and history', line: 'Every device carries its model, serial, warranty state and complete repair history.', why: 'A repeat fault is only visible against the device, not the job.', example: 'Four devices returned three times.' },
    { id: 'control', title: 'Warranty claims and recovery', line: 'One permission model and one audit trail, with claims carrying documentation, filing windows, submission and settlement.', why: 'Unfiled claims are earned money lost to a deadline.', example: 'Fifty-eight claims unfiled with windows closing.' },
    { id: 'people', title: 'Technicians, skills and routes', line: 'Technicians carry skills, territories, van stock, jobs completed, first-visit fix rate and repeat rate.', why: 'Fix rate varies by technician and by what they carry.', example: 'First-visit fix rate by technician.' },
    { id: 'relationships', title: 'Customers, warranty holders and contracts', line: 'Customers carry their devices, warranty entitlements, service contracts and history.', why: 'The warranty boundary decides who pays before work begins.', example: 'Warranty status confirmed before authorisation.' },
    { id: 'logistics', title: 'Routing, dispatch and travel', line: 'Jobs are allocated across technicians by skill, location, van stock and route.', why: 'Routing that ignores parts produces efficient travel and wasted visits.', example: 'Allocation considering carried parts alongside location.' },
    { id: 'intelligence', title: 'Fix rate, recovery and stock reporting', line: 'First-visit fix rates, repeat visits by cause, claim recovery, van stock variance and fault patterns by model come from the records.', why: 'Every major cost in the business is a measurable pattern.', example: 'Fault patterns by model informing van stock.' },
    { id: 'ai', title: 'Ask the service a question', line: 'Verity AI answers from your own job, device, parts and claim records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about why second visits happen and which claims are unfiled.', example: '"Which parts most often cause a second visit?" returns them by model.' },
    { id: 'suppliers', title: 'Manufacturers and parts supply', line: 'Suppliers carry parts availability, lead times, warranty terms and claim processes.', why: 'Claim rules and parts lead times both come from the manufacturer.', example: 'Claim windows and documentation by manufacturer.' },
    { id: 'communication', title: 'Customer contact and scheduling', line: 'Visit confirmations, delay notifications and outcome communication attach to the job and device.', why: 'A second visit needs to be arranged, not assumed.', example: 'Second visit arranged and recorded against the job.' },
    { id: 'orders', title: 'Chargeable work, quotations and invoicing', line: 'Chargeable repairs carry quotations, approvals and invoicing separately from warranty work.', why: 'Mixing chargeable and warranty work loses revenue on both sides.', example: 'Chargeable work approved before parts are fitted.' },
  ],

  workflowsHeading: 'Log, diagnose, dispatch, fix, claim.',
  workflowsLede: 'These already happen. Recorded, second visits and unfiled claims both fall.',
  workflows: [
    { name: 'Job intake and triage', steps: ['Device and reported fault captured', 'Warranty status confirmed', 'Device history reviewed', 'Likely parts identified from fault patterns', 'Job scheduled with a suitable technician'], note: 'Matching the reported fault to historical parts usage is what raises first-visit fix.' },
    { name: 'Dispatch and van stock', steps: ['Technician assigned by skill, route and stock', 'Required parts confirmed on the van or issued', 'Van stock updated on issue', 'Visit performed', 'Parts consumed recorded against the job'], note: 'Confirming the part is on the van is the difference between one visit and two.' },
    { name: 'Repair and outcome', steps: ['Diagnosis recorded against the device', 'Repair completed or reason for incompletion captured', 'Chargeable work quoted and approved before fitting', 'Customer acknowledgement recorded', 'Second visit scheduled where needed'], note: 'Recording the reason for incompletion is what makes the pattern fixable.' },
    { name: 'Warranty claim', steps: ['Claim raised at job close with the device and parts', 'Documentation attached against manufacturer requirements', 'Filing deadline tracked with an owner', 'Submitted and acknowledgement recorded', 'Settlement recorded against the claim'], note: 'Raising at job close is what stops the claim being lost to its window.' },
    { name: 'Van reconciliation', steps: ['Issued stock compared with consumption on jobs', 'Returns recorded', 'Unaccounted parts surfaced per technician', 'Explanation or adjustment recorded', 'Van stock levels adjusted to fault patterns'], note: 'Reconciling regularly keeps van stock a working tool rather than a leak.' },
  ],

  ai: {
    heading: 'Ask about fix rates and claims.',
    lede: 'Verity AI reads the same job, device, parts and claim records the business creates as it works. It answers from your own service business, respects permissions, and can turn an answer into a stocking change or a claim filing.',
    panelMeta: 'Grounded in your service records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which parts most often cause a second visit?',
      'What is first-visit fix rate by technician and model?',
      'Which warranty claims are unfiled and approaching their window?',
      'Which vans have unaccounted parts?',
      'Which devices have returned more than twice?',
      'Which models generate the most repeat faults?',
      'What is recovery value from warranty claims this quarter?',
      'Which jobs were done free that were outside warranty?',
      'Summarise fix rate and claim recovery.',
    ],
  },

  automationHeading: 'Visits, claims and stock.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A job is closed without completion', steps: ['Reason captured', 'Required part identified', 'Second visit scheduled with the part secured'] },
    { trigger: 'Warranty work is completed', steps: ['Claim raised with documentation requirements', 'Filing deadline set with an owner', 'Submission and settlement recorded'] },
    { trigger: 'A claim approaches its filing window', steps: ['Escalated with outstanding documentation', 'Owner assigned', 'Filing recorded'] },
    { trigger: 'Van stock is unreconciled', steps: ['Variance surfaced per technician', 'Explanation requested', 'Adjustment recorded'] },
    { trigger: 'A device returns for the same fault', steps: ['Previous diagnosis surfaced', 'Escalation to a senior technician raised', 'Root cause recorded'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Fix rates, recovery and stock from service records.',
  intelligence: [
    { area: 'Service', points: ['First-visit fix rate by technician and model', 'Second visits by cause', 'Repeat devices and faults', 'Jobs per technician per day'] },
    { area: 'Parts', points: ['Parts causing second visits', 'Van stock against fault patterns', 'Unaccounted parts by technician', 'Supplier lead times'] },
    { area: 'Recovery', points: ['Claims raised, filed and settled', 'Value recovered against work performed', 'Claims lost to windows', 'Documentation completeness'] },
    { area: 'Commercial', points: ['Chargeable against warranty mix', 'Work done free outside warranty', 'Contract service coverage', 'Cost per completed repair'] },
  ],
  intelligenceNote: 'Verity records the service operation. Manufacturer portals continue as they are.',

  rolesHeading: 'One service business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Are we fixing on the first visit?', focus: 'Fix rate by technician and model, second visit causes, claim recovery, cost per repair.' },
    { role: 'Dispatcher', question: 'Who goes where with what?', focus: 'Job queue, technician skills and routes, van stock, parts required.' },
    { role: 'Technician', question: 'What am I attending and is it under warranty?', focus: 'Assigned jobs, device history, warranty status, parts on the van.' },
    { role: 'Claims administrator', question: 'What is recoverable?', focus: 'Claims raised, documentation outstanding, filing deadlines, settlements.' },
  ],

  useCasesHeading: 'What repair services use Verity for',
  useCases: [
    { name: 'Raising first-visit fix rates', body: 'Reported faults matched against historical parts usage by model, so the likely part is confirmed on the van before the technician is dispatched.' },
    { name: 'Recovering warranty value', body: 'Claims raised at job close with documentation and a filing deadline, so earned recovery is not lost to a closing window.' },
    { name: 'Reconciling van stock', body: 'Parts issued to technicians compared with consumption on jobs and returns, surfacing inventory that has left the business without a transaction.' },
    { name: 'Recognising repeat faults', body: 'Jobs attached to the device rather than to a ticket, so a third return is escalated instead of being diagnosed again from scratch.' },
    { name: 'Routing with stock in mind', body: 'Allocation considering skill, location and carried parts together, because efficient travel to a job you cannot complete is not efficient.' },
    { name: 'Protecting the warranty boundary', body: 'Entitlement confirmed against the device before authorisation, so chargeable work is quoted rather than absorbed.' },
    { name: 'Asking about the service', body: 'Plain-language questions across jobs, devices, parts and claims, with stocking changes and claim filing raised in the same step.' },
  ],

  migration: 'Manufacturer portals continue and are mapped during implementation. Customers and devices with warranty status and repair history, parts catalogue and van stock, technician records and open claims are brought across.',

  faqHeading: 'Questions repair services ask',
  faqs: [
    ['What can AI software do for a repair service?', 'Verity AI answers questions from your own job, device, parts and claim records: which parts most often cause a second visit, what first-visit fix rate is by technician and model, which warranty claims are unfiled and approaching their window, which vans have unaccounted parts. Each answer can become a stocking change or a claim filing.'],
    ['Why is the first-visit fix rate the central measure?', 'Because a second visit consumes travel and technician time while producing no additional revenue. The cause is nearly always a missing part, which makes van stock and fault-pattern matching the levers that move the number.'],
    ['How does it improve warranty recovery?', 'Claims are raised at job close with the device, parts and manufacturer documentation requirements attached, and their filing deadline is tracked with an owner, so claims reach submission rather than expiring.'],
    ['Can it control van stock?', 'Parts issued to technicians are reconciled against consumption on jobs and returns, so unaccounted stock is surfaced per van rather than absorbed into a general inventory difference.'],
    ['How does it spot repeat faults?', 'Every job attaches to the device by serial number, so a device returning a third time surfaces its previous diagnoses and can be escalated rather than re-diagnosed from the beginning.'],
    ['Does it help with routing?', 'Allocation considers technician skill, territory and the parts actually on the van together, because sending the nearest technician without the required part still produces a second visit.'],
    ['Does it replace manufacturer portals?', 'No. Manufacturer portals continue as they are. Verity holds the service operation around them — jobs, devices, parts, technicians, claims and chargeable work.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of device types, fault categories, warranty terms and van stock practice, configuration, migration of customers, devices and open jobs, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with your second visits.',
  ctaLede: 'They are usually one part. Tell us how van stock is decided today.',

  related: ['auto-repair-shops', 'electronics-stores', 'facility-management', 'cleaning-services', 'industrial-suppliers', 'laundry-services'],
};
