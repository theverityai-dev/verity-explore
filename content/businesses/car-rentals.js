export default {
  slug: 'car-rentals',
  status: 'published',
  plural: 'car rental businesses',
  subject: 'car rental business',

  seo: {
    title: 'AI business management software for car rental businesses | Verity',
    description:
      'Verity gives car rental businesses one system for fleet utilisation and idle gaps, condition evidence and damage recovery, document and service expiry, and per-vehicle earnings.',
    keywords: [
      'AI software for car rental businesses',
      'car rental fleet management software',
      'vehicle utilisation and damage recovery software',
      'rental booking and fleet document tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for car rentals',
    headline: 'A car earns on the days it is out. Everything else is the same cost.',
    lede:
      'Rental margin is decided by idle days, unrecovered damage and paperwork nobody was watching. Verity holds all three against each vehicle.',
    note: 'Verity runs the rental business. Telematics and payment tools stay where they are.',
    panel: {
      title: 'Fleet',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Vehicles in fleet', value: '68', note: '5 categories' },
        { label: 'Utilisation', value: '61%', note: 'days on rent' },
        { label: 'Damage unrecovered', value: '₹3.4 L', note: '19 incidents' },
        { label: 'Documents expiring', value: '11', note: 'within 30 days' },
      ],
      rows: [
        { name: '19 damage incidents with no recovery decision', meta: 'Condition evidence incomplete', active: true },
        { name: '11 vehicle documents expiring in 30 days', meta: 'Vehicle cannot be rented if lapsed', active: true },
        { name: '9 vehicles idle more than 12 days', meta: 'Category oversupplied', active: true },
        { name: '4 services overdue by mileage', meta: 'Warranty and breakdown risk', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own fleet in this shape.',
    },
  },

  overview: {
    heading: 'Every vehicle is either earning or costing, and the paperwork decides which.',
    paragraphs: [
      'A rental business owns depreciating assets whose only income comes from days on hire. Sixty-one per cent utilisation means thirty-nine per cent of the fleet’s life is being consumed without revenue, and nine vehicles idle for more than twelve days is usually a category oversupplied rather than a demand problem across the fleet.',
      'The second characteristic is damage recovery, which depends entirely on evidence. Nineteen incidents with no recovery decision is money the business will absorb, because a claim against a customer requires a documented condition at handover and at return. Without both, the conversation is unwinnable.',
      'The third is documents. Insurance, permits, fitness and registration all expire, and a vehicle with a lapsed document is not a vehicle that can be rented. Eleven expiring within thirty days is eleven potential removals from earning capacity.',
      'The fourth is service. Mileage-based service intervals pass during a hire, and a missed service is a breakdown, a stranded customer and a recovery cost.',
      'The fifth is that a booking, a vehicle and a customer are only connected during the hire, while the money question — what did this vehicle earn this year against what it cost — spans all of them.',
      'Verity holds utilisation and idle time per vehicle, condition evidence at both ends of a hire, and document and service expiry against earning availability.',
    ],
  },

  terminology: [
    ['Vehicles, categories, fleet', 'Inventory'],
    ['Bookings, hires, extensions', 'Orders'],
    ['Customers, corporate accounts, drivers', 'Relationships'],
    ['Handover, return, condition', 'Workflows'],
    ['Insurance, permits, fitness, service', 'Control'],
    ['Branches, yards, delivery points', 'Locations'],
    ['Drivers, cleaners, counter staff', 'People'],
  ],

  challengesHeading: 'Idle days, unprovable damage and expiring paper.',
  challengesLede:
    'Rental difficulties come from owning assets whose income depends on being out.',
  challenges: [
    { problem: 'Idle days are not attributed to a cause', detail: 'A vehicle sits and nobody records whether it was demand, damage, service or documents.', outcome: 'Idle days carry a reason, so oversupply is separated from downtime.' },
    { problem: 'Damage cannot be recovered without evidence', detail: 'Condition at handover and return is not documented consistently.', outcome: 'Condition evidence is captured at both ends of every hire and attached to the booking.' },
    { problem: 'Documents lapse and remove earning capacity', detail: 'Insurance, permits and fitness expire while the vehicle is on hire or idle.', outcome: 'Every document carries expiry with renewal raised in advance.' },
    { problem: 'Service intervals pass during a hire', detail: 'Mileage crosses the interval mid-rental and the service is skipped.', outcome: 'Service due is projected from mileage and booking length before dispatch.' },
    { problem: 'Per-vehicle economics are unknown', detail: 'Revenue is measured across the fleet and cost sits in general expenses.', outcome: 'Revenue, damage, service and downtime are attributed per vehicle.' },
    { problem: 'Extensions and overdue returns are handled informally', detail: 'A vehicle promised to the next customer is still out.', outcome: 'Extensions and overdue returns are tracked against forward bookings.' },
  ],

  modulesLede: 'One system across fleet, bookings, condition and compliance.',
  modules: [
    { id: 'inventory', title: 'Vehicles, categories and availability', line: 'Each vehicle carries its category, status, mileage, location, current hire and forward bookings.', why: 'Availability is the product and it changes hour by hour.', example: 'Nine vehicles idle beyond twelve days.' },
    { id: 'orders', title: 'Bookings, hires and extensions', line: 'Bookings carry customer, vehicle or category, period, rate, deposit, extensions and return state.', why: 'An extension changes the availability of a vehicle already promised.', example: 'Extensions against forward bookings for the same vehicle.' },
    { id: 'workflows', title: 'Handover, return and condition evidence', line: 'Condition, fuel, mileage and photographs are recorded at handover and return against the booking.', why: 'Damage recovery is only possible with evidence at both ends.', example: 'Nineteen incidents without complete condition evidence.' },
    { id: 'control', title: 'Insurance, permits, fitness and service', line: 'One permission model and one audit trail, with document expiry, service intervals and compliance state carried per vehicle.', why: 'A lapsed document removes the vehicle from earning capacity entirely.', example: 'Eleven documents expiring within thirty days.' },
    { id: 'relationships', title: 'Customers, corporate accounts and drivers', line: 'Customers carry hire history, damage record, payment behaviour and account terms.', why: 'A customer with a damage history is a pricing and deposit decision.', example: 'Damage incidents by customer across hires.' },
    { id: 'locations', title: 'Branches, yards and delivery points', line: 'Vehicles are located across branches with movement, delivery and collection recorded.', why: 'A vehicle in the wrong city is idle regardless of demand.', example: 'Idle vehicles by branch against demand by branch.' },
    { id: 'intelligence', title: 'Utilisation, damage and vehicle reporting', line: 'Utilisation and idle reasons, revenue per vehicle, damage recovery rate, downtime causes and category mix come from the records.', why: 'The fleet is a set of individual assets and should be measured that way.', example: 'Revenue and cost per vehicle for the year.' },
    { id: 'ai', title: 'Ask the fleet a question', line: 'Verity AI answers from your own vehicle, booking, condition and document records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about idle assets and unrecovered damage.', example: '"Which vehicles have been idle longest and why?" returns nine with reasons.' },
    { id: 'people', title: 'Drivers, cleaners and counter staff', line: 'Staff carry deliveries, collections, handovers performed and condition records completed.', why: 'Evidence quality varies by who performed the handover.', example: 'Condition evidence completeness by staff member.' },
    { id: 'logistics', title: 'Delivery, collection and movement', line: 'Vehicle movements between branches, customers and workshops are recorded with cost.', why: 'Repositioning is a real cost that fleet reports usually omit.', example: 'Repositioning movements and their cost per vehicle.' },
    { id: 'communication', title: 'Customer contact and claims', line: 'Booking confirmations, extension conversations and damage claims attach to the booking and customer.', why: 'A damage claim is a conversation that needs its evidence attached.', example: 'Claim correspondence attached to the condition record.' },
    { id: 'records', title: 'Damage, repair and recovery', line: 'Incidents carry evidence, assessment, repair cost, recovery decision and outcome.', why: 'Unrecovered damage is a decision, and it should be a recorded one.', example: 'Recovery rate on assessed damage.' },
  ],

  workflowsHeading: 'Book, hand over, monitor, return, recover.',
  workflowsLede: 'These already happen. Recorded, idle days and damage stop being absorbed.',
  workflows: [
    { name: 'Booking and allocation', steps: ['Booking taken with category and period', 'Vehicle allocated against forward commitments', 'Document and service validity checked to the end of the hire', 'Deposit and terms recorded', 'Vehicle prepared for handover'], note: 'Checking document validity to the end of the hire prevents a mid-rental lapse.' },
    { name: 'Handover', steps: ['Condition recorded with photographs', 'Fuel and mileage captured', 'Customer acknowledgement obtained', 'Vehicle released with the booking', 'Return expectation set'], note: 'The handover record is the half of the evidence most often missing.' },
    { name: 'Return and assessment', steps: ['Condition recorded against handover', 'Fuel and mileage compared', 'Differences identified with evidence', 'Charges assessed', 'Deposit released or applied'], note: 'Comparison against the handover record is what makes a charge defensible.' },
    { name: 'Damage recovery', steps: ['Incident created with both condition records', 'Repair assessed and costed', 'Recovery decision made and recorded', 'Customer contacted with evidence', 'Outcome recorded against the customer'], note: 'A recovery decision recorded, even a decision not to pursue, is better than silence.' },
    { name: 'Compliance and service', steps: ['Document expiry and service intervals tracked per vehicle', 'Renewals and services scheduled in low-demand windows', 'Vehicle marked unavailable for the period', 'Completion recorded', 'Availability restored'], note: 'Scheduling downtime into low-demand windows is how utilisation is protected.' },
  ],

  ai: {
    heading: 'Ask about utilisation and recovery.',
    lede: 'Verity AI reads the same vehicle, booking, condition and document records the business creates as it operates. It answers from your own fleet, respects permissions, and can turn an answer into a claim or a repositioning decision.',
    panelMeta: 'Grounded in your fleet records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which vehicles have been idle longest and for what reason?',
      'Which damage incidents have no recovery decision?',
      'Which documents and services fall due in the next month?',
      'What is revenue and cost per vehicle this year?',
      'Which categories are oversupplied against demand?',
      'Which customers have repeated damage incidents?',
      'Which hires are overdue against forward bookings?',
      'What did repositioning cost by branch?',
      'Summarise utilisation and recovery position.',
    ],
  },

  automationHeading: 'Idle time, expiry and evidence.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A vehicle passes an idle threshold', steps: ['Reason recorded', 'Repositioning or pricing option surfaced', 'Decision recorded'] },
    { trigger: 'A document or service falls due', steps: ['Vehicle flagged with the earning impact', 'Renewal or service scheduled in a low-demand window', 'Availability updated on completion'] },
    { trigger: 'A return shows condition differences', steps: ['Incident created with both condition records', 'Assessment assigned', 'Recovery decision recorded'] },
    { trigger: 'A hire runs past its return date', steps: ['Forward bookings for the vehicle flagged', 'Customer contacted', 'Extension or reallocation recorded'] },
    { trigger: 'A booking would extend beyond document validity', steps: ['Blocked with the expiring document named', 'Alternative vehicle offered', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Utilisation, recovery and compliance from fleet records.',
  intelligence: [
    { area: 'Utilisation', points: ['Days on hire by vehicle and category', 'Idle days by reason', 'Demand against supply by category and branch', 'Repositioning movements and cost'] },
    { area: 'Vehicle economics', points: ['Revenue per vehicle', 'Damage and repair cost per vehicle', 'Downtime cost', 'Contribution by category'] },
    { area: 'Damage', points: ['Incidents by customer and vehicle', 'Evidence completeness at handover and return', 'Recovery rate on assessed damage', 'Repair turnaround'] },
    { area: 'Compliance', points: ['Document expiry across the fleet', 'Service adherence against mileage', 'Vehicles unavailable for compliance reasons', 'Renewal lead times'] },
  ],
  intelligenceNote: 'Verity records the rental operation. Telematics and payment tools continue as they are.',

  rolesHeading: 'One fleet, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Which vehicles earn?', focus: 'Revenue and cost per vehicle, utilisation by category, damage recovery, downtime causes.' },
    { role: 'Fleet manager', question: 'What is available and compliant?', focus: 'Vehicle status, document and service due dates, repositioning, workshop time.' },
    { role: 'Counter and delivery staff', question: 'What am I handing over?', focus: 'Booking details, condition capture, fuel and mileage, customer acknowledgement.' },
    { role: 'Accounts', question: 'What is recoverable?', focus: 'Damage assessments, deposits, outstanding charges, customer payment behaviour.' },
  ],

  useCasesHeading: 'What car rental businesses use Verity for',
  useCases: [
    { name: 'Attributing idle days', body: 'Every idle day carrying a reason — demand, damage, service or documents — so oversupply in a category is separated from downtime on a vehicle.' },
    { name: 'Making damage recoverable', body: 'Condition, fuel and mileage evidence captured at handover and return against the booking, which is what makes a charge defensible.' },
    { name: 'Protecting earning availability', body: 'Document expiry and service intervals tracked per vehicle with downtime scheduled into low-demand windows.' },
    { name: 'Per-vehicle economics', body: 'Revenue, damage, repair and downtime attributed to individual vehicles rather than pooled across the fleet.' },
    { name: 'Managing extensions against commitments', body: 'Overdue and extended hires checked against forward bookings for the same vehicle, so a promise is not broken silently.' },
    { name: 'Customer damage history', body: 'Incidents held against customers across hires, informing deposit and pricing decisions on the next booking.' },
    { name: 'Asking about the fleet', body: 'Plain-language questions across vehicles, bookings, damage and compliance, with claims and repositioning raised in the same step.' },
  ],

  migration: 'Telematics and payment tools continue and are mapped during implementation. Vehicles with documents and service history, customers, forward bookings, rate structures and damage history are brought across.',

  faqHeading: 'Questions car rental businesses ask',
  faqs: [
    ['What can AI software do for a car rental business?', 'Verity AI answers questions from your own vehicle, booking, condition and document records: which vehicles have been idle longest and why, which damage incidents have no recovery decision, which documents fall due next month, what revenue and cost each vehicle produced. Each answer can become a claim or a repositioning decision.'],
    ['Why record a reason for idle days?', 'Because idle time has different fixes. A vehicle idle through oversupply in its category needs a pricing or repositioning decision; one idle through an expired document or an overdue service needs an administrative one. Without the reason, both look like weak demand.'],
    ['How does it help recover damage?', 'Condition, fuel and mileage are recorded with photographs at handover and again at return, both attached to the booking. A charge supported by evidence at both ends is defensible, and one supported by evidence at only one end usually is not.'],
    ['Can it prevent documents lapsing?', 'Every vehicle carries its insurance, permit, fitness and registration expiry, with renewals raised in advance and bookings blocked from extending beyond validity, because a lapsed document removes the vehicle from earning entirely.'],
    ['Does it track service by mileage?', 'Service intervals are projected from current mileage and the length of the booking, so a service that would fall due mid-hire is dealt with before dispatch rather than skipped.'],
    ['Can it show per-vehicle profitability?', 'Revenue, damage, repair, repositioning and downtime are attributed to individual vehicles, which is what makes fleet composition and replacement decisions possible.'],
    ['Does it replace telematics?', 'No. Telematics and payment tools continue as they are. Verity holds the rental business around them — fleet, bookings, condition evidence, compliance and per-vehicle economics.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of categories, rate structures, condition process and document types, configuration, migration of fleet, customers and bookings, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the damage you did not recover.',
  ctaLede: 'It is usually an evidence problem, not a customer problem. Tell us how condition is recorded today.',

  related: ['auto-repair-shops', 'car-washes', 'travel-agencies', 'tour-operators', 'auto-parts-stores', 'facility-management'],
};
