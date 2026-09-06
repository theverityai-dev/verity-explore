export default {
  slug: 'architects',
  status: 'published',
  plural: 'architects',
  subject: 'architect',

  seo: {
    title: 'AI business management software for architects | Verity',
    description:
      'Verity gives architects one system for project stages, drawing issue and revision, statutory submissions, consultant coordination and the personal capacity that limits the practice.',
    keywords: [
      'AI software for architects',
      'architect practice management software',
      'drawing issue and revision tracking',
      'architect project and submission software',
    ],
  },

  hero: {
    eyebrow: 'Verity for architects',
    headline: 'Every drawing that leaves needs your name on it, and there is one of you.',
    lede:
      'An architect’s capacity is the licensed signature, not the studio. Verity shows what is queued against it, what is issued, and what is still waiting on someone else.',
    note: 'Verity runs the practice. Drawing tools stay where they are.',
    panel: {
      title: 'Practice',
      meta: 'This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Live projects', value: '14', note: 'across 6 stages' },
        { label: 'Awaiting your review', value: '23', note: 'drawings and submissions' },
        { label: 'Waiting on others', value: '9', note: 'clients, consultants, authority' },
        { label: 'Superseded drawings in use', value: '4', note: 'issued before revision' },
      ],
      rows: [
        { name: '23 items queued on one signature', meta: 'Review, seal and issue', active: true },
        { name: '4 superseded drawings still on site', meta: 'Revision issued, not acknowledged', active: true },
        { name: '9 projects paused on someone else’s decision', meta: 'Clock still running on fee', active: true },
        { name: 'Consultant inputs outstanding on 3 submissions', meta: 'Structural and services', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'The constraint is one person, and everything queues behind them.',
    paragraphs: [
      'An architect practising alone or with a small studio has a capacity problem that does not look like other capacity problems. Drafting can be delegated and coordination can be delegated, but review, seal and issue cannot: every drawing and every statutory submission carries one registered name, and twenty-three items queued against that name is the practice’s actual throughput limit regardless of how many people are drawing.',
      'The second characteristic is revision control with consequences. A drawing issued and then superseded does not stop existing — it is on a site, in a contractor’s folder, being built from. Four superseded drawings still in use is not an administrative untidiness, it is work being built to the wrong information.',
      'The third is dependency on other people. Architectural projects pause on client decisions, consultant inputs and authority responses, and while they are paused the architect is still carrying the project without progressing it. Nine paused projects is nine open commitments producing nothing.',
      'The fourth is that the architect is legally exposed by what was issued and when. Correspondence, instructions and issue history are the record that matters years later.',
      'Verity holds the review queue, the issue and revision history, the dependencies on others, and the correspondence that evidences them.',
    ],
  },

  terminology: [
    ['Projects, stages, packages', 'Work'],
    ['Drawings, revisions, issue sheets', 'Records'],
    ['Review, seal, issue', 'Workflows'],
    ['Clients, consultants, authorities', 'Relationships'],
    ['Architect, assistants, draughtspersons', 'People'],
    ['Instructions and correspondence', 'Communication'],
    ['Registration, liability, approvals', 'Control'],
  ],

  challengesHeading: 'One signature, many drawings, and a long liability tail.',
  challengesLede:
    'The difficulties of practising as an architect come from personal responsibility that cannot be delegated.',
  challenges: [
    { problem: 'Everything queues behind one reviewer', detail: 'Drafting scales, review does not, and the queue is invisible until something is late.', outcome: 'The review queue is a visible list with age and project, so the constraint is managed.' },
    { problem: 'Superseded drawings stay in circulation', detail: 'A revision is issued and the old sheet is still on site being built from.', outcome: 'Issue and acknowledgement are recorded per recipient, so superseded sheets in use are visible.' },
    { problem: 'Projects pause on other people', detail: 'Client decisions, consultant inputs and authority responses stall work with no owner chasing them.', outcome: 'Every dependency has a holder, an age and a chase, so paused work is not silent.' },
    { problem: 'Verbal instructions become disputes', detail: 'A change agreed on site is built and later contested with nothing written.', outcome: 'Instructions are recorded against the project and confirmed in writing from the same record.' },
    { problem: 'Small variations are absorbed unbilled', detail: 'Additional drawings and revisions requested outside scope are done and never invoiced.', outcome: 'Additional work is captured against the project as it is requested, with a fee position.' },
    { problem: 'Old projects have to be reconstructed', detail: 'A query years later requires finding what was issued, when, and to whom.', outcome: 'Issue history, correspondence and approvals stay attached to the project permanently.' },
  ],

  modulesLede: 'One system across review, issue, dependency and correspondence.',
  modules: [
    { id: 'workflows', title: 'Review, seal and issue', line: 'Items requiring the architect’s review form one queue with project, stage, age and urgency, and issue is a recorded step.', why: 'Review is the practice’s actual capacity and it needs to be visible as a queue.', example: 'Twenty-three items queued on one signature this week.' },
    { id: 'records', title: 'Drawings, revisions and issue history', line: 'Each drawing carries its revision, issue date, recipients and acknowledgement, with superseded versions marked.', why: 'What was issued, when and to whom is the record that matters during construction and afterwards.', example: 'Four superseded drawings still in use on site.' },
    { id: 'work', title: 'Projects, stages and packages', line: 'Each project is structured by stage with the drawings, approvals and fee position attached.', why: 'An architect’s work is staged and the practice needs to know which stage each project actually sits in.', example: 'Fourteen live projects across six stages.' },
    { id: 'relationships', title: 'Clients, consultants and authorities', line: 'Each party carries the projects they touch, what is outstanding from them and how long it has been outstanding.', why: 'Most paused work is waiting on someone outside the practice.', example: 'Consultant inputs outstanding on three submissions.' },
    { id: 'communication', title: 'Instructions and correspondence', line: 'Instructions, confirmations and project conversation attach to the project and the drawing they concern.', why: 'A verbal change becomes a written record from the same place it was discussed.', example: 'A site instruction confirmed in writing against the drawing it changed.' },
    { id: 'people', title: 'Architect, assistants and draughtspersons', line: 'Studio capacity is modelled separately from review capacity, with work attributed to both.', why: 'Adding a draughtsperson increases drawing output and not review output.', example: 'Drafting capacity against review throughput.' },
    { id: 'orders', title: 'Fees, additional work and invoicing', line: 'Fee stages, additional drawings and revisions outside scope carry a fee position and an invoicing state.', why: 'Additional work absorbed unbilled is the most common loss in a small practice.', example: 'Additional revisions requested against fee recorded.' },
    { id: 'intelligence', title: 'Queue, dependency and fee reporting', line: 'Review queue age, dependency ageing, issue history, additional work and fee recovery come from the records.', why: 'The practice is limited by one queue and leaks through unbilled work, and both are measurable.', example: 'Average age of items in the review queue.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own project, drawing, issue and correspondence records, respects permissions, and can create assigned follow-ups.', why: 'The questions that matter are about what is queued and what is waiting on someone else.', example: '"What is waiting on consultants?" returns the list with age and chase assigned.' },
    { id: 'control', title: 'Approvals, registration and liability record', line: 'One permission model and one audit trail, with approvals and submissions carried as reportable states.', why: 'Personal registration means personal liability, and the record is the defence.', example: 'Submission and approval history retained per project.' },
    { id: 'locations', title: 'Sites and studio', line: 'Site visits, observations and photographs attach to the project and the drawing they relate to.', why: 'What was observed on site is evidence tied to a date.', example: 'Site visit observations recorded against the drawing revision current at the time.' },
  ],

  workflowsHeading: 'Draw, review, issue, chase, confirm.',
  workflowsLede: 'These already happen. Recorded, the queue and the liability record manage themselves.',
  workflows: [
    { name: 'Review and issue', steps: ['Drawing prepared and submitted for review', 'Reviewed, marked up or approved', 'Revision assigned and sealed', 'Issued to named recipients', 'Acknowledgement recorded and prior revision superseded'], note: 'Recording recipients is what makes a superseded drawing in use detectable.' },
    { name: 'Chasing a dependency', steps: ['Outstanding item recorded against the holder', 'Age tracked from the date it was requested', 'Chase raised with the project attached', 'Response recorded', 'Project state updated'], note: 'A paused project with no owner chasing it stays paused.' },
    { name: 'Statutory submission', steps: ['Submission requirements listed', 'Consultant inputs requested and tracked', 'Package assembled and checked', 'Submitted with date recorded', 'Authority response and conditions recorded'], note: 'Conditions attached to an approval are obligations that need to travel forward.' },
    { name: 'Instruction and variation', steps: ['Instruction received on site or in conversation', 'Recorded against project and drawing', 'Fee implication assessed', 'Confirmation issued in writing', 'Additional work tracked to invoice'], note: 'The written confirmation is generated from the same record as the instruction.' },
    { name: 'Project close and archive', steps: ['Final issue completed', 'Approvals and conditions recorded', 'Correspondence and issue history retained', 'Fee position closed', 'Project archived and searchable'], note: 'A query years later is answered from the archive rather than reconstructed.' },
  ],

  ai: {
    heading: 'Ask about the queue and the dependencies.',
    lede: 'Verity AI reads the same project, drawing, issue and correspondence records the practice creates as it works. It answers from your own practice, respects permissions, and can turn an answer into a chase or a confirmation.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is waiting on my review and how old is it?',
      'Which superseded drawings are still with recipients?',
      'What is outstanding from consultants and for how long?',
      'Which projects are paused on a client decision?',
      'What additional work has been done outside fee this quarter?',
      'What was issued on this project and when?',
      'Which submissions have conditions still to be satisfied?',
      'Which projects have had no activity for a month?',
      'Summarise the practice position by project stage.',
    ],
  },

  automationHeading: 'The queue and the chase.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An item sits in the review queue beyond a threshold', steps: ['Flagged with project and stage', 'Priority raised against deadlines', 'Position updated when reviewed'] },
    { trigger: 'A revision is issued', steps: ['Prior revision marked superseded', 'Recipients of the prior revision listed', 'Acknowledgement chased and recorded'] },
    { trigger: 'A dependency ages past a threshold', steps: ['Holder identified with the outstanding item', 'Chase assigned with the project attached', 'Response recorded'] },
    { trigger: 'An instruction is recorded outside scope', steps: ['Fee implication flagged', 'Written confirmation drafted from the record', 'Additional work tracked to invoicing'] },
    { trigger: 'An approval carries conditions', steps: ['Conditions recorded as obligations', 'Owners assigned per condition', 'Satisfaction recorded before close'] },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Throughput, dependency and fee recovery from working records.',
  intelligence: [
    { area: 'Throughput', points: ['Review queue size and age', 'Items issued per period', 'Drafting output against review capacity', 'Turnaround from submission to issue'] },
    { area: 'Dependency', points: ['Outstanding items by holder', 'Ageing of client and consultant responses', 'Authority response times', 'Projects paused and for how long'] },
    { area: 'Issue record', points: ['Revisions by project', 'Recipients and acknowledgement', 'Superseded drawings still in circulation', 'Issue history retained per project'] },
    { area: 'Fee', points: ['Stage fees invoiced and outstanding', 'Additional work performed and billed', 'Recovery rate on variations', 'Fee position by project'] },
  ],
  intelligenceNote: 'Verity records the practice’s operations. Drawing and modelling tools continue as they are.',

  rolesHeading: 'One practice, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Architect', question: 'What needs me, and what is waiting on someone else?', focus: 'Review queue by age, dependencies outstanding, submissions and conditions, fee position.' },
    { role: 'Project assistant', question: 'What is moving and what is stuck?', focus: 'Drawing status, issue and acknowledgement, chases outstanding, project stages.' },
    { role: 'Draughtsperson', question: 'What am I drawing and to which revision?', focus: 'Assigned drawings, current revisions, markups from review, issue deadlines.' },
    { role: 'Practice administration', question: 'What can be invoiced?', focus: 'Stage completion, additional work recorded, invoices raised and outstanding, project archive.' },
  ],

  useCasesHeading: 'What architects use Verity for',
  useCases: [
    { name: 'Managing the review queue', body: 'Everything requiring the registered signature in one list with age and project, so the practice’s real constraint is visible rather than discovered at a deadline.' },
    { name: 'Controlling drawing issue', body: 'Revisions with recipients and acknowledgement, so a superseded sheet still being built from is detectable rather than assumed away.' },
    { name: 'Chasing what others owe', body: 'Client decisions, consultant inputs and authority responses with holders and ageing, so paused projects are chased rather than forgotten.' },
    { name: 'Recording instructions', body: 'Site and verbal instructions captured against the project and confirmed in writing from the same record.' },
    { name: 'Recovering additional work', body: 'Revisions and drawings requested outside scope recorded as they happen with a fee position attached.' },
    { name: 'A permanent project record', body: 'Issue history, correspondence, approvals and conditions retained against the project for queries years later.' },
    { name: 'Asking about the practice', body: 'Plain-language questions across projects, drawings, dependencies and fees, with chases raised in the same step.' },
  ],

  migration: 'Drawing and modelling tools continue and are mapped during implementation. Projects, stages, drawing registers with revision and issue history, clients, consultants, correspondence and fee positions are brought across.',

  faqHeading: 'Questions architects ask',
  faqs: [
    ['What can AI software do for an architect?', 'Verity AI answers questions from your own project, drawing, issue and correspondence records: what is queued on your review and how old it is, which superseded drawings are still with recipients, what is outstanding from consultants, which projects are paused on a client. Each answer can become a chase or a written confirmation.'],
    ['Does Verity replace my drawing software?', 'No. Drawing and modelling tools continue as they are. Verity holds the practice around them — projects, stages, drawing registers, issue history, dependencies, correspondence and fees.'],
    ['Why treat review as the constraint?', 'Because drafting can be delegated and the registered signature cannot. Adding drawing capacity increases what arrives for review without increasing what leaves the practice, so the queue against that signature is the throughput limit.'],
    ['How does it help with superseded drawings?', 'Issue records who received which revision and whether they acknowledged it. When a revision is issued the prior one is marked superseded and its recipients are listed, so a sheet still in use on site is visible rather than assumed replaced.'],
    ['Can it track what clients and consultants owe me?', 'Outstanding items are recorded against the holder with the date they were requested, so ageing is visible and chases are assigned rather than remembered.'],
    ['Will it help me bill for extra work?', 'Additional drawings and revisions outside scope are recorded against the project as they are requested, with a fee position, which is what makes them invoiceable rather than absorbed.'],
    ['Is old project information retained?', 'Issue history, correspondence, approvals and conditions stay attached to the project after it closes and remain searchable, which is what a query years later actually needs.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of stages, drawing register conventions and fee structure, configuration, migration of live projects and archives, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the review queue.',
  ctaLede: 'It is the practice’s real capacity. Tell us how work reaches you for review today.',

  related: ['architecture-firms', 'interior-design-firms', 'home-builders', 'construction-companies', 'contractors', 'real-estate-developers'],
};
