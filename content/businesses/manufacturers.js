export default {
  slug: 'manufacturers',
  status: 'published',
  plural: 'manufacturers',
  subject: 'manufacturing business',

  seo: {
    title: 'AI business management software for manufacturers | Verity',
    description:
      'Verity connects raw materials, production work, quality checks, suppliers, finished stock and dispatch into one operational system, so a late order has a traceable cause.',
    keywords: [
      'AI software for manufacturers',
      'manufacturing management software',
      'production planning and inventory software',
      'ERP alternative for manufacturers',
      'quality and dispatch tracking software',
    ],
  },

  hero: {
    eyebrow: 'Verity for manufacturers',
    headline: 'The order is late. The reason is four steps upstream.',
    lede:
      'Materials, production, quality, stock and dispatch are one dependent chain, and most factories can see the delay at the end without seeing the cause in the middle. Verity records every transition on one system.',
    note: 'Introduced alongside your existing systems. No cutover weekend.',
    panel: {
      title: 'Plant',
      meta: 'Plant 2 · Shift A · Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders in flight', value: '318', note: 'across 4 lines' },
        { label: 'Past committed date', value: '14', note: '₹1.1 Cr order value' },
        { label: 'Awaiting QC', value: '17', note: 'blocking dispatch' },
        { label: 'Material coverage', value: '11 days', note: 'against confirmed orders' },
      ],
      rows: [
        { name: '17 orders awaiting QC since 09:20', meta: 'Plant 2 · blocking three dispatches', active: true },
        { name: 'Batch 214 held on second inspection', meta: 'Open since Monday · Project Orion', active: true },
        { name: 'Raw material below cover for Line 3', meta: 'Supplier last delivered 4 days late', active: true },
        { name: 'Vendor payment above approval threshold', meta: '₹3,80,000 · not yet routed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own plant in this shape.',
    },
  },

  overview: {
    heading: 'A factory is a chain, and the chain is only as visible as its worst-recorded link.',
    paragraphs: [
      'Manufacturing is a sequence of dependent transitions. Raw material arrives against a purchase order, is inspected and taken into stock, is issued to production, becomes work in progress, passes or fails quality, becomes finished goods, is committed to a customer order and leaves through dispatch. Every one of those transitions changes the state of something valuable, and every one of them is a place where the record can be lost.',
      'When those transitions live in different systems — or in different registers, which is more common — the plant can see that an order is late but cannot see why. The customer service team knows the shipment did not go. Dispatch knows it did not have the goods. Production knows the batch was held. Quality knows it failed a second inspection. Purchasing knows the substitute material arrived four days late. Nobody has all five facts at once, which is why the daily production meeting exists.',
      'The second cost is planning. Committing to a delivery date requires knowing what material is actually available, what is already committed to other orders, and what the line can produce in the intervening time. In most factories that calculation is done from memory and optimism, which is why commitments slip.',
      'Verity is built on exactly this shape. Materials, work, suppliers, quality states, locations and dispatch are records in one system with one history, so the QC hold that is blocking three dispatches appears in the same view as the dispatches it is blocking.',
    ],
  },

  terminology: [
    ['Raw material, components, consumables', 'Inventory'],
    ['Work orders, batches, job cards', 'Work'],
    ['Customer orders, dispatches, deliveries', 'Orders'],
    ['Vendors, job workers, transporters', 'Suppliers'],
    ['Operators, supervisors, shifts', 'People'],
    ['Inspections, holds, approvals', 'Workflows'],
    ['Plants, lines, stores, warehouses', 'Locations'],
  ],

  challengesHeading: 'Every delay has a cause. Most causes are unrecorded.',
  challengesLede:
    'The problems in a factory are not mysterious. They are simply not written down at the point they occur, so they surface later as something else.',
  challenges: [
    {
      problem: 'Late orders have untraceable causes',
      detail:
        'The delay is visible at dispatch. The cause was a quality hold, a material shortage or a machine stoppage several days earlier, and connecting the two takes a meeting.',
      outcome:
        'Each transition is a state change on a record, so a delayed order carries the chain of states that produced it.',
    },
    {
      problem: 'Material availability is not the same as material stock',
      detail:
        'A store shows six tonnes. Four are already committed to confirmed orders, and nobody knows that until production stops.',
      outcome:
        'Stock committed to orders is distinguished from stock available, so a delivery commitment is made against what is genuinely free.',
    },
    {
      problem: 'Quality holds are communicated informally',
      detail:
        'A batch is held on the shop floor and dispatch finds out when the truck is loading.',
      outcome:
        'A hold is a state on the batch record, and the orders depending on that batch show as blocked at the moment it is applied.',
    },
    {
      problem: 'Work issued to job workers disappears',
      detail:
        'Material sent out for plating, machining or finishing leaves the plant and exists only in a challan book until it comes back.',
      outcome:
        'Material issued to a job worker is recorded movement against that supplier, so what is outside the plant is visible and ageing.',
    },
    {
      problem: 'Supplier reliability is anecdotal',
      detail:
        'Everyone knows which vendors are difficult. Nobody can say by how much, or what it has cost in delayed orders.',
      outcome:
        'Ordered dates against received dates are recorded on every purchase, so reliability is a number attached to a supplier.',
    },
    {
      problem: 'The daily meeting is the reporting system',
      detail:
        'Production status is assembled verbally each morning because there is no view that assembles itself.',
      outcome:
        'A live operational picture removes the need to reconstruct yesterday before the day can start.',
    },
  ],

  modulesLede:
    'This is the operation Verity’s record model was shaped around. These are the parts a manufacturer works with.',
  modules: [
    {
      id: 'inventory',
      title: 'Raw material, work in progress and finished goods',
      line:
        'Stock is held with its supplier, cost, batch, location and state, and distinguishes what is available from what is already committed.',
      why:
        'A factory has at least three inventories that most systems treat as one. Committing a delivery date against the wrong one is how promises break.',
      example:
        'Six tonnes in the store, four committed to confirmed orders, two genuinely available. The delivery commitment is made against the two.',
    },
    {
      id: 'work',
      title: 'Work orders, batches and job cards',
      line:
        'Production work is held as records with an owner, a line, a state and a history, connected to the material it consumes and the order it fulfils.',
      why:
        'The work order is the link between a customer commitment and the material that will satisfy it. Without it, planning is guesswork.',
      example:
        'Batch 214 is a record connecting the raw material issued, the line that ran it, the inspection it is held on and the three dispatches waiting on it.',
    },
    {
      id: 'workflows',
      title: 'Inspections, holds and approvals',
      line:
        'Quality checks, holds, deviations, purchase approvals and dispatch clearances move through defined steps with an owner and a recorded decision.',
      why:
        'Quality is the step most likely to be handled by conversation, and it is the step that most often blocks everything downstream.',
      example:
        'A second inspection failure holds the batch and immediately marks the dependent orders as blocked, with the reason attached.',
    },
    {
      id: 'orders',
      title: 'Customer orders and commitments',
      line:
        'Orders are records with their items, quantities, committed dates, production state and dispatch history.',
      why:
        'The committed date is the promise the whole factory is organised around, and it should be visible against the work that will meet it.',
      example:
        'Fourteen orders past their committed date, each showing the step it is stuck at rather than just the number of days lost.',
    },
    {
      id: 'suppliers',
      title: 'Vendors, job workers and transporters',
      line:
        'Suppliers are relationships with purchase orders, delivery performance, material issued to them and outstanding balances.',
      why:
        'Inbound reliability determines outbound reliability. A factory that cannot measure its suppliers is absorbing their variance.',
      example:
        'A vendor’s average delay of four days is visible against the orders it affected, which changes the conversation at the next negotiation.',
    },
    {
      id: 'logistics',
      title: 'Dispatch, vehicles and delivery',
      line:
        'Dispatch is tracked against the orders it fulfils, with vehicles, routes and delivery confirmation on the record.',
      why:
        'A dispatch that leaves without documentation, or a delivery nobody confirmed, becomes a receivables problem two months later.',
      example:
        'Three vehicles queued at the loading bay, each against specific orders, with the goods either cleared or held.',
    },
    {
      id: 'locations',
      title: 'Plants, lines, stores and warehouses',
      line:
        'Locations roll into organisations and organisations into the business, with permissions, reporting and exceptions following the same structure.',
      why:
        'Multi-plant manufacturers cannot compare anything unless every plant records it the same way.',
      example:
        'Throughput, exceptions and on-time performance by plant, from the same records rather than from four differently formatted reports.',
    },
    {
      id: 'people',
      title: 'Operators, supervisors and shifts',
      line:
        'Teams, roles and responsibilities are modelled once, and every work record shows who owns it and who last acted on it.',
      why:
        'When a step stalls, the useful question is who owns the next action. That should not require asking around.',
      example:
        'A held batch shows the supervisor responsible for the next decision, and the escalation path if it is not taken.',
    },
    {
      id: 'workforce',
      title: 'Assignment, attendance and availability',
      line:
        'Who is assigned, who is present and what they completed stay connected to the work they support.',
      why:
        'A line short two operators produces less, and that connection should be visible in the production numbers rather than inferred.',
      example:
        'Attendance against shift plan on Line 3 sits alongside the output that shift actually produced.',
    },
    {
      id: 'commandCentre',
      title: 'The plant as it is running',
      line:
        'One live view of what is moving, what is blocked, who owns it and what needs attention today.',
      why:
        'The morning production meeting exists because no such view exists. Most of that meeting is reconstruction rather than decision.',
      example:
        'Orders in flight, orders past date, batches held, material coverage and approvals pending, in one picture that assembles itself.',
    },
    {
      id: 'intelligence',
      title: 'Reports from the production records',
      line:
        'Throughput, on-time delivery, rejection rates, material consumption, supplier reliability and order ageing come from the operational records themselves.',
      why:
        'Manufacturing reporting is usually a monthly compilation, which is far too slow for decisions taken daily.',
      example:
        'Rolling seven-day throughput and exception closure rates, current rather than compiled.',
    },
    {
      id: 'ai',
      title: 'Ask the plant a question',
      line:
        'Verity AI answers from your own production, material and order records, respects permissions, and can create assigned follow-ups from what it finds.',
      why:
        'The questions worth asking cross four functions at once, which is exactly what makes them hard to answer any other way.',
      example:
        '"Which orders are at risk this month, and why?" returns three with their blocking step named, and one instruction creates follow-ups for the owners.',
    },
  ],

  workflowsHeading: 'The chain, recorded transition by transition.',
  workflowsLede:
    'These sequences already run in your plant. In Verity each step is a state change on a record, so a break in the chain is visible where it happens.',
  workflows: [
    {
      name: 'Purchase to material availability',
      steps: [
        'Purchase order raised against a supplier with a required-by date',
        'Goods received and recorded against the order',
        'Incoming inspection completed, accepted or rejected',
        'Accepted material taken into stock with batch and location',
        'Supplier delivery performance updated on the record',
        'Material availability recalculated against committed orders',
      ],
      note:
        'Rejection at incoming inspection is recorded against the supplier, not absorbed as an ordinary shortage.',
    },
    {
      name: 'Customer order to dispatch',
      steps: [
        'Order confirmed with quantities and a committed date',
        'Material availability checked against existing commitments',
        'Work order raised and assigned to a line',
        'Production completed and moved to inspection',
        'Quality passed and goods taken into finished stock',
        'Order picked, documented and dispatched',
        'Delivery confirmed and the order closed',
      ],
      note:
        'Every stage carries a timestamp, so cycle time is measured rather than estimated.',
    },
    {
      name: 'Quality hold and release',
      steps: [
        'Inspection records a failure against the batch',
        'Batch state moves to held; dependent orders show as blocked',
        'Deviation or rework decision routed for approval',
        'Rework completed and re-inspected',
        'Batch released or scrapped, with the outcome recorded',
        'Dependent orders unblocked and dispatch resumes',
      ],
      note:
        'The three dispatches waiting on a held batch know they are waiting the moment the hold is applied.',
    },
    {
      name: 'Job work sent outside the plant',
      steps: [
        'Material issued to the job worker and recorded as movement',
        'Expected return date set on the record',
        'Ageing tracked while the material is outside the plant',
        'Returned quantity received and reconciled against what was issued',
        'Losses or shortfalls recorded against the job worker',
      ],
      note:
        'Material outside the plant stops being a challan in a book and becomes stock with a location and an age.',
    },
    {
      name: 'Shortage and expediting',
      steps: [
        'Material coverage falls below the horizon for confirmed orders',
        'Shortage flagged against the orders it will affect',
        'Purchase raised or expedited with the supplier',
        'Approval applied where the price or urgency requires it',
        'Affected order commitments reviewed and communicated',
      ],
      note:
        'The shortage is connected to the customer orders it endangers, so the commercial consequence is visible with the operational one.',
    },
    {
      name: 'Monthly performance review',
      steps: [
        'On-time delivery pulled against committed dates',
        'Rejection and rework rates pulled by line and product',
        'Supplier delivery performance compiled from purchase records',
        'Exception causes grouped by type and frequency',
        'Actions raised against the recurring causes with owners',
      ],
      note:
        'The review works from records rather than from a compilation exercise that takes three days to prepare.',
    },
  ],

  ai: {
    heading: 'Ask why, not just what.',
    lede:
      'Verity AI reads the same order, material, work and quality records the plant runs on. It answers from your production data, only shows what the person asking can see, and can turn the answer into follow-ups assigned to the people who own the blocking steps.',
    panelMeta: 'Grounded in your production records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which orders are at risk this month, and what is blocking each one?',
      'What is currently held at quality, and what is waiting on it?',
      'Which materials fall short of cover against confirmed orders?',
      'Which suppliers delivered late this quarter, and by how much?',
      'What material is currently with job workers, and how long has it been out?',
      'Which line has the highest rejection rate this month?',
      'How did on-time delivery compare with last quarter?',
      'Which approvals are pending above threshold?',
      'Summarise this week’s production performance.',
    ],
  },

  automationHeading: 'The escalations that should not need a meeting.',
  automationLede:
    'Each runs from the production records at the moment the condition occurs.',
  automations: [
    {
      trigger: 'A batch is placed on quality hold',
      steps: [
        'Batch state updated and dependent orders marked blocked',
        'Supervisor and dispatch notified with the reason attached',
        'Rework or deviation approval routed',
        'Affected order commitments flagged for review',
      ],
    },
    {
      trigger: 'Material coverage falls below the planning horizon',
      steps: [
        'Shortage flagged against the orders it affects',
        'Purchase raised against the supplier with the best delivery record',
        'Approval routed where the value exceeds threshold',
        'Receipt checked against the order on arrival',
      ],
    },
    {
      trigger: 'An order passes its committed date',
      steps: [
        'Order flagged with the step it is stuck at',
        'Owner of that step notified',
        'Escalated to the plant lead after a defined period',
        'Cause recorded against the order for the monthly review',
      ],
    },
    {
      trigger: 'A supplier delivers late or short',
      steps: [
        'Receipt recorded against the ordered quantity and date',
        'Supplier performance record updated',
        'Affected work orders flagged',
      ],
    },
    {
      trigger: 'Material has been with a job worker beyond its return date',
      steps: [
        'Ageing flagged against the job worker record',
        'Follow-up assigned to the purchasing owner',
        'Escalated if it passes the second threshold',
      ],
    },
    {
      trigger: 'A payment or purchase exceeds the approval threshold',
      steps: [
        'Transaction held at the approval step',
        'Routed to the approver with the supporting records attached',
        'Decision recorded against the transaction',
      ],
    },
  ],

  intelligenceHeading: 'What the plant head can actually see.',
  intelligenceLede:
    'Drawn from the transitions the factory records as it works, rather than from a monthly compilation.',
  intelligence: [
    {
      area: 'Delivery',
      points: [
        'On-time delivery against committed dates',
        'Orders past date, with the step blocking each one',
        'Cycle time from order confirmation to dispatch',
        'Order ageing by customer and product',
      ],
    },
    {
      area: 'Production',
      points: [
        'Throughput by line, shift and plant',
        'Work in progress and where it is held',
        'Downtime and stoppage causes',
        'Output against shift attendance',
      ],
    },
    {
      area: 'Quality',
      points: [
        'Rejection and rework rates by line and product',
        'Batches held, and how long holds take to resolve',
        'Recurring failure causes',
        'Incoming rejection by supplier',
      ],
    },
    {
      area: 'Material',
      points: [
        'Stock available against stock committed',
        'Coverage in days against confirmed orders',
        'Consumption against planned consumption',
        'Material outside the plant with job workers',
      ],
    },
    {
      area: 'Suppliers',
      points: [
        'Delivery performance against ordered dates',
        'Incoming quality by vendor',
        'Price movement on repeat purchases',
        'Outstanding payable and approvals pending',
      ],
    },
    {
      area: 'Operations',
      points: [
        'Exceptions raised and time to close',
        'Approvals waiting on a decision',
        'Plant comparison across the group',
        'Recurring causes behind delayed orders',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from the transitions the plant already records. None of it requires a separate reporting exercise.',

  rolesHeading: 'One plant, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on the question they need answered.',
  roles: [
    {
      role: 'Plant head',
      question: 'What is going to be late, and why?',
      focus: 'Orders past and approaching committed dates with their blocking steps, throughput, exceptions, plant comparison.',
    },
    {
      role: 'Production supervisor',
      question: 'What is running and what is stuck?',
      focus: 'Work orders by line and state, material issued, held batches, shift attendance against plan.',
    },
    {
      role: 'Quality',
      question: 'What is held and what caused it?',
      focus: 'Inspections due, batches on hold, rejection and rework rates, recurring failure causes.',
    },
    {
      role: 'Purchasing',
      question: 'What is short and who is late?',
      focus: 'Material coverage, open purchase orders, supplier delivery and quality performance, approvals pending.',
    },
    {
      role: 'Dispatch',
      question: 'What can actually ship today?',
      focus: 'Orders cleared for dispatch, goods blocked at quality, vehicles queued, delivery confirmations outstanding.',
    },
  ],

  useCasesHeading: 'What manufacturers use Verity for',
  useCases: [
    {
      name: 'Material availability planning',
      body: 'Stock distinguished between available and committed, so delivery dates are promised against material that is genuinely free.',
    },
    {
      name: 'Work order and batch tracking',
      body: 'Production work as records connecting material issued, line, state and the customer order it fulfils.',
    },
    {
      name: 'Quality holds and release',
      body: 'Inspection outcomes as states that immediately mark dependent orders as blocked, with the reason on the record.',
    },
    {
      name: 'Job work tracking',
      body: 'Material issued outside the plant recorded as movement with an expected return date and visible ageing.',
    },
    {
      name: 'Supplier performance',
      body: 'Ordered dates against received dates and incoming rejection by vendor, so reliability is measured rather than remembered.',
    },
    {
      name: 'Dispatch and delivery',
      body: 'Dispatch tracked against the orders it fulfils, with documentation and delivery confirmation on the record.',
    },
    {
      name: 'Multi-plant rollup',
      body: 'Plants and stores as locations rolling into the business, so throughput and on-time performance are comparable across sites.',
    },
    {
      name: 'Order ageing and escalation',
      body: 'Orders past their committed date carrying the step they are stuck at, escalating to the owner of that step.',
    },
    {
      name: 'Asking the plant questions',
      body: 'Plain-language questions across production, material, quality and orders at once, with follow-ups created in the same step.',
    },
  ],

  migration:
    'Most factories are running some combination of a legacy ERP, a set of registers and a large number of spreadsheets. Those are mapped during implementation, the records that matter are migrated, and Verity is introduced as the operational layer over them rather than as a cutover that stops production for a weekend.',

  faqHeading: 'Questions manufacturers ask',
  faqs: [
    [
      'What can AI software do for a manufacturing business?',
      'Verity AI answers questions from your own production, material, quality and order records. You can ask which orders are at risk and what is blocking each one, what is held at quality, which materials fall short of cover, or which suppliers delivered late — and turn the answer into follow-ups assigned to the people who own the blocking steps.',
    ],
    [
      'Is Verity an ERP?',
      'Verity is an operational layer rather than a replacement for statutory accounting. It holds the material, production, quality, supplier, dispatch and order records that run the plant, and it is introduced alongside an existing ERP rather than requiring it to be switched off.',
    ],
    [
      'Can Verity track material issued to job workers?',
      'Yes. Material issued outside the plant is recorded as movement against that job worker with an expected return date, so what is out, how long it has been out and what came back is visible without a challan book.',
    ],
    [
      'Does it distinguish available stock from committed stock?',
      'Yes, and that distinction is the point. Stock committed to confirmed orders is separated from stock genuinely available, so delivery commitments are made against material that is actually free.',
    ],
    [
      'How does it handle quality holds?',
      'A hold is a state on the batch record. The moment it is applied, the customer orders depending on that batch show as blocked with the reason attached, so dispatch and customer service know at the same time as the shop floor.',
    ],
    [
      'Can it work across multiple plants?',
      'Yes. Plants, lines, stores and warehouses are locations that roll into organisations and into the business, with permissions and reporting following the same structure, so throughput and on-time performance are comparable across sites.',
    ],
    [
      'Can we measure supplier reliability?',
      'Ordered dates against received dates and incoming inspection outcomes are recorded on every purchase, so delivery performance and incoming quality become numbers attached to each supplier rather than reputations.',
    ],
    [
      'Will this replace our daily production meeting?',
      'It replaces the reconstruction part of it. The live operational picture assembles what is moving, what is blocked and who owns it, so the meeting can be about decisions rather than about establishing yesterday’s facts.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the plant actually runs, configuration, migration of your existing records, then an ongoing operations partnership rather than a handover and a manual.',
    ],
  ],

  ctaHeading: 'Start with the orders that are already late.',
  ctaLede:
    'For most factories the fastest return is making the blocking step visible on every delayed order. Tell us how your plant runs and we will show you what that looks like in Verity.',

  related: ['textile-manufacturers', 'garment-manufacturers', 'distributors', 'wholesalers', 'construction-companies', 'contractors'],
};
