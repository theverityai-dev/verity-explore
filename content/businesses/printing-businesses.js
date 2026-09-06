export default {
  slug: 'printing-businesses',
  status: 'published',
  plural: 'printing businesses',
  subject: 'printing business',

  seo: {
    title: 'AI business management software for printing businesses | Verity',
    description:
      'Verity gives printing businesses one system for many small jobs at once, proof approval before print, reprint cost and cause, turnaround promises and corporate account work.',
    keywords: [
      'AI software for printing businesses',
      'print shop management software',
      'proof approval and reprint tracking software',
      'print job turnaround and costing software',
    ],
  },

  hero: {
    eyebrow: 'Verity for printing businesses',
    headline: 'Ninety live jobs, four machines, and one customer who says they approved it.',
    lede:
      'A print business runs many small jobs against short promises. Verity keeps every job, its approved proof and its due date in one place.',
    note: 'Verity runs the shop. Design software and machines stay where they are.',
    panel: {
      title: 'Shop',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Live jobs', value: '92', note: '4 machines' },
        { label: 'Jobs due today', value: '27', note: '6 not started' },
        { label: 'Reprints this month', value: '31', note: '₹58,000 absorbed' },
        { label: 'Proofs awaiting approval', value: '18', note: 'average age 1.9 days' },
      ],
      rows: [
        { name: '18 proofs unapproved with due dates approaching', meta: 'Promise made, clock running', active: true },
        { name: '31 reprints this month', meta: '19 from unapproved changes', active: true },
        { name: '6 jobs due today not started', meta: 'Machine time not reserved', active: true },
        { name: '4 corporate accounts past payment terms', meta: 'Repeat work continuing', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own shop in this shape.',
    },
  },

  overview: {
    heading: 'Many small jobs, short promises, and a proof that decides who pays for the mistake.',
    paragraphs: [
      'A printing business runs a large number of low-value jobs simultaneously against short turnarounds. Ninety-two live jobs on four machines is a scheduling problem where the constraint is not capacity in total but which job can be on which machine at which hour, and twenty-seven due today with six not started is how a promise gets broken.',
      'The second characteristic is the proof. A printed job is produced from a file the customer supplied and approved, and thirty-one reprints in a month — nineteen of them from changes that were never approved in writing — is the cost of an approval process that lives in conversation rather than in a record.',
      'The third is that reprints are absorbed rather than charged. Fifty-eight thousand in a month is machine time, substrate and labour spent twice on work billed once, and its cause distribution is what makes it reducible.',
      'The fourth is the turnaround promise. Small print work is bought on speed, and eighteen proofs sitting unapproved while their due dates approach means the shop will be late for reasons that originated with the customer but will be blamed on the shop.',
      'The fifth is corporate repeat work, which is the profitable half of most print shops and carries account terms, repeat specifications and payment behaviour.',
      'Verity holds every job with its approved proof, its machine and its due date, and records reprints with their cause.',
    ],
  },

  terminology: [
    ['Jobs, orders, repeats', 'Work'],
    ['Proofs, approvals, files', 'Records'],
    ['Machines, presses, finishing', 'Locations'],
    ['Paper, ink, finishing materials', 'Inventory'],
    ['Walk-in customers, corporate accounts', 'Relationships'],
    ['Due dates, turnaround, collection', 'Workflows'],
    ['Operators, designers, counter staff', 'People'],
  ],

  challengesHeading: 'Many jobs, short promises, and disputed approvals.',
  challengesLede:
    'Printing difficulties come from volume of small work against fixed machine hours.',
  challenges: [
    { problem: 'Approval lives in conversation', detail: 'A customer says they approved a change and there is nothing showing what was approved.', outcome: 'Proofs carry versions, approver and date, and the job is bound to the approved one.' },
    { problem: 'Reprints are absorbed without a cause', detail: 'Work is redone free and the reason is never aggregated.', outcome: 'Reprints carry cause, cost and responsibility, so the pattern is addressable.' },
    { problem: 'Due dates are promised without machine time', detail: 'A turnaround is agreed at the counter without checking the schedule.', outcome: 'Promises are made against machine availability, so the date is real.' },
    { problem: 'Jobs stall on customer approval', detail: 'A proof waits while the due date approaches and the shop takes the blame.', outcome: 'Proof age is tracked against the due date with the customer chased.' },
    { problem: 'Small job costing is guessed', detail: 'Setup, material and finishing on a low-value job are estimated by habit.', outcome: 'Actual consumption is recorded so job types can be priced from real cost.' },
    { problem: 'Corporate repeat work is re-specified each time', detail: 'A recurring job is quoted and set up again from scratch.', outcome: 'Repeat specifications and previous actuals sit against the account.' },
  ],

  modulesLede: 'One system across jobs, proofs, machines and accounts.',
  modules: [
    { id: 'work', title: 'Jobs, orders and repeats', line: 'Each job carries its specification, quantity, material, finishing, machine, due date, approved proof and cost.', why: 'A print shop is a set of many small jobs and each needs a complete record.', example: 'Ninety-two live jobs across four machines.' },
    { id: 'records', title: 'Proofs, approvals and files', line: 'Proofs carry version, issue, approver, approval date and the job bound to them.', why: 'The approved proof is what settles who pays for a reprint.', example: 'Nineteen reprints from changes never approved in writing.' },
    { id: 'workflows', title: 'Due dates, scheduling and collection', line: 'Jobs are scheduled to machines with due dates, progress and collection tracked.', why: 'Turnaround is what small print work is bought on.', example: 'Twenty-seven jobs due today with six not started.' },
    { id: 'locations', title: 'Machines, presses and finishing', line: 'Each machine carries its capabilities, capacity, current queue and service state.', why: 'A promise is only real if a machine can take the job in time.', example: 'Machine queue against jobs due tomorrow.' },
    { id: 'inventory', title: 'Paper, ink and finishing materials', line: 'Materials are held by type and size, consumed against jobs, with wastage recorded.', why: 'Material consumed on small jobs is the cost most often guessed.', example: 'Actual material consumption per job type.' },
    { id: 'relationships', title: 'Walk-in customers and corporate accounts', line: 'Accounts carry repeat specifications, previous jobs, pricing, terms and payment behaviour.', why: 'Repeat corporate work is the profitable half and should not be re-specified.', example: 'Four corporate accounts past payment terms with work continuing.' },
    { id: 'intelligence', title: 'Turnaround, reprint and margin reporting', line: 'Due date adherence, reprint rate by cause, machine utilisation, material consumption and job margin come from the records.', why: 'The shop’s losses are reprints and unpriced small jobs, and both are measurable.', example: 'Reprint cost by cause and responsibility.' },
    { id: 'ai', title: 'Ask the shop a question', line: 'Verity AI answers from your own job, proof, machine and account records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about what is due, what is unapproved and what is being reprinted.', example: '"Which proofs are unapproved with due dates this week?" returns them with customers.' },
    { id: 'people', title: 'Operators, designers and counter staff', line: 'Staff carry jobs handled, proofs issued, reprints attributed and throughput.', why: 'Reprint causes attribute to people as well as processes.', example: 'Reprint rate by operator and job type.' },
    { id: 'communication', title: 'Customer contact and proof chasing', line: 'Proof issue, approval chasing and collection notices attach to the job and customer.', why: 'An unapproved proof needs chasing before it costs a due date.', example: 'Proof chase recorded against the job.' },
    { id: 'orders', title: 'Quotations, pricing and invoicing', line: 'Quotations carry specification and price, with actual cost compared at close.', why: 'Small jobs priced by habit lose money invisibly.', example: 'Quoted against actual cost by job type.' },
    { id: 'control', title: 'Reprints, discounts and authority', line: 'One permission model and one audit trail covering reprint acceptance, discounts and write-offs.', why: 'A free reprint is a commercial decision and should be a recorded one.', example: 'Reprints authorised with reason and cost.' },
  ],

  workflowsHeading: 'Quote, proof, approve, print, deliver.',
  workflowsLede: 'These already happen. Recorded, reprints and late jobs both fall.',
  workflows: [
    { name: 'Order and promise', steps: ['Specification and quantity captured', 'Material and machine identified', 'Machine availability checked', 'Due date promised against the schedule', 'Job created with its proof requirement'], note: 'Promising against machine availability is what makes the date keepable.' },
    { name: 'Proof and approval', steps: ['Proof produced and issued to the customer', 'Approval requested with a deadline', 'Age tracked against the due date', 'Approval recorded with person and date', 'Job bound to the approved version'], note: 'Binding the job to the approved version is what settles a later dispute.' },
    { name: 'Production', steps: ['Job scheduled to a machine', 'Material issued and consumed', 'Output and wastage recorded', 'Finishing completed', 'Job checked against the approved proof'], note: 'Checking against the approved proof before delivery prevents the expensive reprint.' },
    { name: 'Reprint handling', steps: ['Reprint raised against the original job', 'Cause identified and recorded', 'Responsibility assigned', 'Cost captured', 'Authority applied where absorbed'], note: 'The recorded cause is the only route to reducing the rate.' },
    { name: 'Corporate repeat', steps: ['Previous specification retrieved from the account', 'Quantity and any changes confirmed', 'Previous actual cost applied to pricing', 'Job scheduled', 'Account terms and payment position checked'], note: 'Pricing a repeat from previous actuals is more accurate than re-estimating it.' },
  ],

  ai: {
    heading: 'Ask about due dates and reprints.',
    lede: 'Verity AI reads the same job, proof, machine and account records the shop creates as it works. It answers from your own shop, respects permissions, and can turn an answer into a chase or a schedule change.',
    panelMeta: 'Grounded in your shop records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which proofs are unapproved with due dates this week?',
      'Which jobs due today have not started?',
      'What did reprints cost this month and why?',
      'What is machine utilisation against jobs promised?',
      'Which job types are quoted below their actual cost?',
      'Which corporate accounts are past payment terms?',
      'Which operators have the highest reprint rate?',
      'What is due date adherence by job type?',
      'Summarise the shop’s load and reprint position.',
    ],
  },

  automationHeading: 'Proofs, promises and reprints.',
  automationLede: 'Each runs from the shop’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A proof is unapproved as its due date approaches', steps: ['Customer chased with the proof attached', 'Due date risk flagged', 'Revised promise recorded if needed'] },
    { trigger: 'A job due today has not started', steps: ['Machine queue checked', 'Priority or reschedule decided', 'Customer informed where the date will move'] },
    { trigger: 'A reprint is raised', steps: ['Original job linked', 'Cause and responsibility recorded', 'Cost attributed and pattern updated'] },
    { trigger: 'Actual job cost exceeds the quotation', steps: ['Variance recorded by job type', 'Pricing basis flagged', 'Future quoting updated'] },
    { trigger: 'A corporate account passes payment terms', steps: ['Flagged with work in progress', 'Decision on continuing work raised', 'Collection contact assigned'] },
  ],

  intelligenceHeading: 'What the shop can see.',
  intelligenceLede: 'Turnaround, reprints and margin from job records.',
  intelligence: [
    { area: 'Turnaround', points: ['Due date adherence by job type', 'Jobs at risk before the date', 'Proof approval times by customer', 'Collection and delivery performance'] },
    { area: 'Quality', points: ['Reprint rate by cause', 'Reprints by operator and job type', 'Cost absorbed against recharged', 'Approval disputes'] },
    { area: 'Capacity', points: ['Machine utilisation and queue', 'Jobs promised against available hours', 'Finishing bottlenecks', 'Setup time by job type'] },
    { area: 'Commercial', points: ['Quoted against actual cost', 'Margin by job type and account', 'Corporate repeat volumes', 'Payment behaviour by account'] },
  ],
  intelligenceNote: 'Verity records the shop’s operations. Design software and machines continue as they are.',

  rolesHeading: 'One shop, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'What are reprints costing?', focus: 'Reprint rate and causes, margin by job type, machine utilisation, account payment behaviour.' },
    { role: 'Production controller', question: 'What runs on which machine?', focus: 'Machine queues, jobs due, approved proofs, material availability.' },
    { role: 'Counter staff', question: 'What can I promise?', focus: 'Machine availability, due dates, proof status, customer history.' },
    { role: 'Operator', question: 'What am I printing?', focus: 'Job queue, approved proof, material issued, output and wastage.' },
  ],

  useCasesHeading: 'What printing businesses use Verity for',
  useCases: [
    { name: 'Binding jobs to approved proofs', body: 'Proof versions with approver and date attached to the job, which is what settles a reprint dispute instead of a conversation nobody can evidence.' },
    { name: 'Reducing reprints', body: 'Every reprint carrying its cause, cost and responsibility, turning an absorbed monthly total into a specific and reducible pattern.' },
    { name: 'Promising real dates', body: 'Turnaround agreed against machine availability rather than at the counter, so the date the customer is given is one the shop can meet.' },
    { name: 'Chasing proofs before they cost a date', body: 'Proof age tracked against the due date with the customer chased, so a delay that originated with the customer does not become the shop’s failure.' },
    { name: 'Costing small jobs properly', body: 'Actual material, setup and finishing recorded per job, so job types can be priced from real cost rather than habit.' },
    { name: 'Serving corporate repeats', body: 'Previous specifications and actual costs held against the account, so a recurring job is priced and set up from what it really took.' },
    { name: 'Asking about the shop', body: 'Plain-language questions across jobs, proofs, machines and accounts, with chases and schedule changes raised in the same step.' },
  ],

  migration: 'Design software and machines continue and are mapped during implementation. Customers and corporate accounts with repeat specifications, live jobs, proof and approval history, material stock and pricing are brought across.',

  faqHeading: 'Questions printing businesses ask',
  faqs: [
    ['What can AI software do for a printing business?', 'Verity AI answers questions from your own job, proof, machine and account records: which proofs are unapproved with due dates this week, which jobs due today have not started, what reprints cost and why, which job types are quoted below actual cost. Each answer can become a chase or a schedule change.'],
    ['How does it help with proof approvals?', 'Proofs carry versions, the person who approved and the date, and the job is bound to the approved version. That converts an approval that lived in conversation into a record that settles who pays when something is wrong.'],
    ['Why record reprint causes?', 'Because a monthly reprint total is not actionable. Cause, responsibility and cost per reprint show whether the problem is unapproved changes, setup errors, material or a particular job type, and each has a different fix.'],
    ['Can it make due dates realistic?', 'Promises are made against machine availability rather than at the counter, and jobs due that have not started are surfaced while there is still time to reprioritise or inform the customer.'],
    ['How does it cost small jobs?', 'Actual material, setup, run and finishing are recorded per job, so job types accumulate real cost data and can be priced from it instead of from habit.'],
    ['Does it handle repeat corporate work?', 'Accounts carry previous specifications and the actual cost of previous runs, so a repeat is set up and priced from what it really took rather than re-estimated each time.'],
    ['Does it replace our design software?', 'No. Design software and machines continue as they are. Verity holds the shop around them — jobs, proofs, schedules, materials, reprints and accounts.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of job types, machine capabilities, proof process and account structures, configuration, migration of accounts and live jobs, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the reprints.',
  ctaLede: 'Most of them trace to an approval nobody recorded. Tell us how proofs are approved today.',

  related: ['packaging-companies', 'design-agencies', 'advertising-agencies', 'content-agencies', 'repair-services', 'tailors'],
};
