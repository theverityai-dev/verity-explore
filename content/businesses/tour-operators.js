export default {
  slug: 'tour-operators',
  status: 'published',
  plural: 'tour operators',
  subject: 'tour operating business',

  seo: {
    title: 'AI business management software for tour operators | Verity',
    description:
      'Verity connects departure viability, supplier commitments made before sales, guide and vehicle allocation, itinerary logistics and cancellation exposure into one system.',
    keywords: [
      'AI software for tour operators',
      'tour operator management software',
      'departure viability and minimum group tracking',
      'guide vehicle allocation and supplier commitment',
    ],
  },

  hero: {
    eyebrow: 'Verity for tour operators',
    headline: 'You commit hotels and vehicles in March for a departure that may not fill by August.',
    lede:
      'A fixed departure is a set of supplier commitments made before the guests exist. Verity tracks viability against those commitments while the decision can still be taken.',
    note: 'Runs alongside your existing booking and accounting systems.',
    panel: {
      title: 'Departures',
      meta: 'Next 6 months',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Departures scheduled', value: '38', note: '₹4.6 Cr potential' },
        { label: 'Below minimum', value: '9', note: 'inside cancellation window' },
        { label: 'Committed to suppliers', value: '₹1.8 Cr', note: 'against 62% sold' },
        { label: 'Guides unassigned', value: '7', note: 'departures within 45 days' },
      ],
      rows: [
        { name: '9 departures below minimum group size', meta: 'Supplier cancellation windows closing', active: true },
        { name: '7 departures within 45 days with no guide assigned', meta: 'Same guide double-booked on two', active: true },
        { name: '₹1.8 Cr committed against 62% sold', meta: 'Exposure if departures do not fill', active: true },
        { name: 'Itinerary change not communicated to all suppliers', meta: '3 components affected', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own departures in this shape.',
    },
  },

  overview: {
    heading: 'The commitments come before the customers.',
    paragraphs: [
      'A fixed-departure tour operator publishes dates, commits hotels, vehicles and guides against them, and then sells seats. That order is the defining commercial risk: the cost base is contracted months before the revenue exists, and the operator carries the difference until the departure either fills or is cancelled.',
      'Each departure therefore has a viability point — a minimum number of travellers below which it loses money — and a cancellation window before which it can be cancelled cheaply and after which it cannot. Nine departures below minimum inside their cancellation windows is a decision that has to be taken now and is usually taken late.',
      'The second characteristic is allocation. Guides, vehicles and specialist equipment are shared across departures, and a guide double-booked across two dates is discovered when both are confirmed.',
      'The third is that an itinerary change touches several suppliers, and communicating it to all of them is a manual task where one is always missed.',
      'The fourth is that supplier commitments have their own deposit and cancellation terms, none aligned with when travellers pay.',
      'Verity tracks viability against commitments, allocates guides and vehicles across departures, and propagates itinerary changes to every affected supplier.',
    ],
  },

  terminology: [
    ['Departures, itineraries, components', 'Work'],
    ['Travellers, agents, groups', 'Relationships'],
    ['Hotels, transport, guides, activities', 'Suppliers'],
    ['Guides, vehicles, equipment', 'People'],
    ['Minimums, cancellation windows, deposits', 'Workflows'],
    ['Destinations, routes', 'Locations'],
    ['Bookings, payments, refunds', 'Orders'],
  ],

  challengesHeading: 'Cost committed before revenue exists.',
  challengesLede:
    'Tour operating difficulties come from contracting a cost base against departures that may not fill.',
  challenges: [
    { problem: 'Viability decisions are taken late', detail: 'A departure below its minimum can be cancelled cheaply before a window and expensively after it, and the review usually happens after.', outcome: 'Viability and cancellation windows sit on the departure, so the decision is prompted while it is still cheap.' },
    { problem: 'Commitment exposure is not sized', detail: 'Supplier commitments accumulate across departures and the total exposure against seats sold is rarely assembled.', outcome: 'Committed cost and seats sold are recorded per departure, so exposure is a current number.' },
    { problem: 'Guides and vehicles are double-booked', detail: 'Shared resources are allocated per departure and the conflict appears when both confirm.', outcome: 'Allocation is recorded against dates, so a conflict is visible when the second commitment is made.' },
    { problem: 'Itinerary changes miss a supplier', detail: 'A change is communicated to most affected suppliers and one is missed, producing a failure on the ground.', outcome: 'Components are linked to the itinerary, so a change surfaces every supplier it touches.' },
    { problem: 'Deposit schedules do not align with sales', detail: 'Supplier deposits fall due on their terms regardless of how the departure is selling.', outcome: 'Deposit dates and sales progress sit together, so funding decisions are informed.' },
    { problem: 'Agent bookings arrive with incomplete details', detail: 'Travel agents book seats and traveller details, documents and requirements arrive late.', outcome: 'Required details are checklist items per traveller with an age against departure.' },
  ],

  modulesLede: 'One system across departures, commitments, allocation and travellers.',
  modules: [
    { id: 'work', title: 'Departures and itineraries', line: 'Each departure is work with its itinerary, components, minimum viable size, seats sold, committed cost, cancellation window and state.', why: 'The departure is where committed cost and uncertain revenue meet.', example: 'Nine departures below minimum with cancellation windows closing.' },
    { id: 'suppliers', title: 'Hotels, transport and activity providers', line: 'Suppliers carry their commitments per departure, deposit and cancellation terms, reliability and balances.', why: 'The cost base is contracted before it is sold, on terms the operator does not set.', example: 'One point eight crore committed against sixty-two percent sold.' },
    { id: 'people', title: 'Guides, drivers and vehicles', line: 'Guides, vehicles and equipment are resources with availability, qualifications and allocation across departures.', why: 'Shared resources across fixed dates produce conflicts that surface late.', example: 'One guide allocated to two departures on overlapping dates.' },
    { id: 'workflows', title: 'Minimums, windows and deposits', line: 'Viability review, cancellation decisions, deposit payments and itinerary changes move through defined steps with recorded outcomes.', why: 'The cancellation decision has a date after which it becomes much more expensive.', example: 'A viability review prompted before the cancellation window rather than after.' },
    { id: 'relationships', title: 'Travellers, agents and groups', line: 'Travellers and agents carry their bookings, documents, requirements, payments and history.', why: 'Agent bookings arrive with details missing, and departure readiness depends on them.', example: 'Traveller details outstanding against a departure inside thirty days.' },
    { id: 'orders', title: 'Bookings, payments and refunds', line: 'Bookings record seats, price, payment schedule and cancellation terms per traveller.', why: 'Seats sold against minimum is the single number the departure turns on.', example: 'Seats sold against minimum viable size per departure.' },
    { id: 'locations', title: 'Destinations and routes', line: 'Destinations carry their suppliers, requirements, seasonal factors and historical performance.', why: 'Destination-specific requirements repeat across departures.', example: 'Permit requirements from the last departure to the same destination.' },
    { id: 'intelligence', title: 'Viability, exposure and allocation reporting', line: 'Seats against minimums, committed exposure, allocation conflicts, departure margin and supplier reliability come from the records.', why: 'The operator’s core risk is quantifiable and usually is not quantified.', example: 'Committed exposure against seats sold across the season.' },
    { id: 'ai', title: 'Ask the departure board a question', line: 'Verity AI answers from your own departure, supplier, allocation and booking records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about decisions with a closing window.', example: '"Which departures are below minimum inside their cancellation window?" returns nine.' },
    { id: 'records', title: 'Itineraries, permits and documents', line: 'Itineraries, permits, traveller documents and supplier confirmations attach to the departure.', why: 'Ground failures are usually a document or permit nobody checked.', example: 'Permits required for a route, checked before departure rather than at it.' },
    { id: 'communication', title: 'Change propagation', line: 'Changes and confirmations attach to the itinerary component and the supplier they affect.', why: 'An itinerary change missed by one supplier becomes a failure on the ground.', example: 'A revised arrival time propagated to every affected component.' },
    { id: 'control', title: 'Who can commit and cancel', line: 'One permission model and one audit trail across every record.', why: 'Committing supplier cost against an unsold departure is the operator’s central risk decision.', example: 'Commitments above threshold requiring approval against current sales.' },
  ],

  workflowsHeading: 'Commit, sell, decide, operate.',
  workflowsLede: 'These already happen. Recorded per departure, the risk decision is taken on time.',
  workflows: [
    { name: 'Departure setup', steps: ['Itinerary defined with components and destinations', 'Suppliers committed with terms and deposit dates', 'Minimum viable group size calculated from committed cost', 'Cancellation window recorded from supplier terms', 'Departure published for sale'], note: 'Calculating the minimum from committed cost rather than from habit is what makes the later decision possible.' },
    { name: 'Sales against viability', steps: ['Bookings recorded against the departure', 'Seats sold tracked against minimum', 'Viability reviewed as the cancellation window approaches', 'Proceed, promote or cancel decision taken', 'Decision recorded with the exposure at the time'], note: 'Nine departures below minimum inside their windows is a decision that gets more expensive daily.' },
    { name: 'Resource allocation', steps: ['Guides, vehicles and equipment recorded with availability', 'Allocation made per departure', 'Conflicts flagged when a second commitment overlaps', 'Substitutions arranged and recorded', 'Allocation confirmed before departure'], note: 'A double-booked guide is discovered when both departures confirm, which is far too late.' },
    { name: 'Itinerary change', steps: ['Change recorded against the itinerary', 'Affected components and suppliers identified', 'Each supplier notified and confirmation tracked', 'Cost impact assessed and approved', 'Travellers informed and the change recorded'], note: 'Propagating to every affected supplier is exactly the step where one is always missed.' },
    { name: 'Departure readiness', steps: ['Traveller details and documents checked against requirements', 'Permits and supplier confirmations verified', 'Guide and vehicle allocation confirmed', 'Gaps escalated against the departure date', 'Readiness confirmed before travel'], note: 'Ground failures are usually a document or a permit rather than an operational surprise.' },
  ],

  ai: {
    heading: 'Ask what is committed and what is sold.',
    lede: 'Verity AI reads the same departure, supplier, allocation and booking records the operator creates as it works. It answers across departures, respects permissions, and can turn an answer into decisions and chases.',
    panelMeta: 'Grounded in your departure records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which departures are below minimum inside their cancellation window?',
      'What is committed supplier cost against seats sold?',
      'Where are guides or vehicles allocated to overlapping departures?',
      'Which departures have travellers with documents outstanding?',
      'Which suppliers have deposits due before the departure is viable?',
      'Which itinerary changes have unconfirmed suppliers?',
      'What is margin by departure and destination?',
      'Which agents book but supply details late?',
      'Summarise viability and exposure across the season.',
    ],
  },

  automationHeading: 'The decisions with closing windows.',
  automationLede: 'Each runs from the departure records at the point the condition is met.',
  automations: [
    { trigger: 'A cancellation window approaches on an under-sold departure', steps: ['Viability flagged with seats against minimum', 'Exposure calculated at current commitment', 'Proceed, promote or cancel decision assigned'] },
    { trigger: 'A resource is allocated to overlapping departures', steps: ['Conflict flagged with both dates', 'Substitution task assigned', 'Outcome recorded'] },
    { trigger: 'An itinerary change is recorded', steps: ['Affected components and suppliers identified', 'Notification tasks raised per supplier', 'Confirmation tracked and travellers informed'] },
    { trigger: 'A supplier deposit falls due', steps: ['Current sales position attached', 'Payment or renegotiation decision raised', 'Outcome recorded against the departure'] },
    { trigger: 'Traveller documents remain outstanding', steps: ['Aged against the departure date', 'Agent or traveller chased', 'Escalated inside the risk window'] },
  ],

  intelligenceHeading: 'What the operator can see.',
  intelligenceLede: 'Commitment against sales, per departure.',
  intelligence: [
    { area: 'Viability', points: ['Seats sold against minimum by departure', 'Cancellation windows approaching', 'Decisions taken and their timing', 'Departures cancelled and their cost'] },
    { area: 'Exposure', points: ['Committed supplier cost by departure', 'Exposure against seats sold', 'Deposits paid and due', 'Recovery on cancelled departures'] },
    { area: 'Resources', points: ['Guide and vehicle allocation by date', 'Conflicts and substitutions', 'Utilisation across the season', 'Qualification coverage by route'] },
    { area: 'Readiness', points: ['Traveller documents against requirements', 'Permits and confirmations verified', 'Gaps by departure and age', 'Ground issues recorded'] },
    { area: 'Commercial', points: ['Margin by departure and destination', 'Agent contribution and detail quality', 'Supplier reliability and cost', 'Repeat travellers and referrals'] },
  ],
  intelligenceNote: 'All of it comes from recording commitments, bookings and allocation against the departure they belong to.',

  rolesHeading: 'One departure board, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'What have we committed and what have we sold?', focus: 'Viability against minimums, committed exposure, margin by departure, cancellation decisions.' },
    { role: 'Operations', question: 'Is this departure ready?', focus: 'Allocation and conflicts, supplier confirmations, permits and documents, itinerary changes.' },
    { role: 'Sales and reservations', question: 'What needs filling and what is missing?', focus: 'Seats against minimum, agent bookings, traveller details outstanding, payment schedules.' },
  ],

  useCasesHeading: 'What tour operators use Verity for',
  useCases: [
    { name: 'Viability against cancellation windows', body: 'Minimums calculated from committed cost with the window on the departure, so the decision is taken while it is still cheap.' },
    { name: 'Commitment exposure', body: 'Contracted supplier cost recorded against seats sold, making the operator’s central risk a current number.' },
    { name: 'Resource allocation', body: 'Guides, vehicles and equipment allocated across dates, so conflicts surface at the second commitment.' },
    { name: 'Itinerary change propagation', body: 'Components linked to suppliers, so a change reaches every one it affects rather than most of them.' },
    { name: 'Departure readiness', body: 'Documents, permits and confirmations as checklist items aged against the departure date.' },
    { name: 'Agent detail management', body: 'Required traveller details tracked per booking, since agent bookings arrive incomplete.' },
    { name: 'Asking about departures', body: 'Plain-language questions across viability, exposure, allocation and readiness, with decisions raised in the same step.' },
  ],

  migration: 'Your booking and accounting systems continue and are mapped during implementation. Departures with itineraries, supplier commitments and terms, resources and live bookings are brought across.',

  faqHeading: 'Questions tour operators ask',
  faqs: [
    ['What can AI software do for a tour operator?', 'Verity AI answers questions from your own departure, supplier, allocation and booking records: which departures are below minimum inside their cancellation window, what is committed against seats sold, where guides are double-booked, which travellers have documents outstanding. Each answer can become a decision or a chase.'],
    ['Why is viability the central problem?', 'Because the cost base is contracted before the revenue exists. A departure below its minimum can be cancelled cheaply before a supplier window and expensively after it, so the decision has a date — and it is usually reviewed after that date rather than before.'],
    ['Can it size our exposure?', 'Committed supplier cost is recorded per departure against seats sold, so total exposure across the season is a current number rather than something assembled when a departure fails to fill.'],
    ['How does it prevent double-booking guides?', 'Guides, vehicles and equipment are resources with availability allocated against dates, so a conflict is flagged when the second commitment is made rather than when both departures confirm.'],
    ['What happens when an itinerary changes?', 'Components are linked to the suppliers that deliver them, so a change surfaces every affected supplier with a notification task and confirmation tracking — which is exactly the step where one supplier is normally missed.'],
    ['Does it help with agent bookings?', 'Required traveller details and documents are checklist items per booking with an age against the departure date, so incomplete agent bookings are chased rather than discovered at check-in.'],
    ['Does Verity replace our booking system?', 'No. Booking and accounting systems continue and are mapped during implementation. Verity holds departures, commitments, allocation, readiness and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of departure structure and supplier terms, configuration of minimums and windows, migration of departures and bookings, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the departures below minimum.',
  ctaLede: 'Each one has a date after which the decision costs far more. Tell us how viability is reviewed today.',

  related: ['travel-agencies', 'resorts', 'hotels', 'event-venues', 'hostels', 'guest-houses'],
};
