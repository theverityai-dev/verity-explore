export default {
  slug: 'resorts',
  status: 'published',
  plural: 'resorts',
  subject: 'resort',

  seo: {
    title: 'AI business management software for resorts | Verity',
    description:
      'Verity connects multi-night guest journeys, activity and facility scheduling, remote supply logistics, seasonal staffing and departmental cost into one system.',
    keywords: [
      'AI software for resorts',
      'resort operations management software',
      'activity scheduling and guest journey tracking',
      'remote supply and seasonal staffing software',
    ],
  },

  hero: {
    eyebrow: 'Verity for resorts',
    headline: 'The guest stays four nights and touches nine departments.',
    lede:
      'A resort is judged on a whole stay rather than a transaction, and supplied from a long way away. Verity connects the guest journey, the activity schedule and the supply chain that feeds them.',
    note: 'Verity runs resort operations. Your reservation system stays where it is.',
    panel: {
      title: 'Operations',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Occupancy', value: '78%', note: '94 of 120 keys' },
        { label: 'Activities booked', value: '212', note: '18 without capacity confirmed' },
        { label: 'Stock cover', value: '6 days', note: 'against a 4-day supply run' },
        { label: 'Open maintenance', value: '54', note: '12 in guest areas' },
      ],
      rows: [
        { name: '18 activity bookings without confirmed capacity', meta: 'Guides and equipment not allocated', active: true },
        { name: 'Perishable stock cover below the supply run interval', meta: 'Next delivery in 4 days', active: true },
        { name: '12 maintenance jobs open in guest areas', meta: 'Four in occupied villas', active: true },
        { name: 'Guest complaints not linked to the department that caused them', meta: 'Repeat issues unattributed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own resort in this shape.',
    },
  },

  overview: {
    heading: 'A resort sells a stay, not a room night.',
    paragraphs: [
      'A hotel guest experiences a room and perhaps a restaurant. A resort guest experiences four days of accommodation, food, activities, facilities and staff interactions, and forms a single judgement about all of it. That makes the guest journey — rather than any individual department — the unit the business is actually assessed on, and it is exactly the thing no departmental system records.',
      'The second defining fact is remoteness. Resorts are supplied at intervals rather than continuously, which turns stock cover into a hard constraint. Six days of perishable cover against a four-day supply run is fine; four days of cover is a menu that changes without warning.',
      'The third is activities. Guest experiences depend on guides, equipment and capacity that are booked ahead and allocated by hand, and an activity confirmed to a guest without capacity is the most visible failure a resort can have.',
      'The fourth is seasonality with staff who often live on site, which makes staffing a housing and rostering problem at once.',
      'The fifth is that departmental cost is genuinely hard to attribute when one guest consumes across nine departments on a single rate.',
      'Verity records the guest journey across departments, the activity schedule against capacity, and the supply cover against the delivery interval.',
    ],
  },

  terminology: [
    ['Keys, villas, facilities', 'Records'],
    ['Stays, activities, services', 'Work'],
    ['Guests, groups, agents', 'Relationships'],
    ['Provisions, supplies, spares', 'Inventory'],
    ['Guides, housekeeping, kitchen, maintenance', 'People'],
    ['Suppliers, transport, contractors', 'Suppliers'],
    ['Departments, zones, sites', 'Locations'],
  ],

  challengesHeading: 'A whole stay, supplied from a distance.',
  challengesLede:
    'Resort difficulties come from a guest experience spanning departments and a supply chain that arrives on an interval.',
  challenges: [
    { problem: 'The guest journey is not recorded anywhere', detail: 'Each department records its own service and the guest forms one judgement about all of them.', outcome: 'The stay is a record with every department’s interactions on it, so the journey is visible.' },
    { problem: 'Activities are confirmed without capacity', detail: 'A guest is promised an activity that has no guide or equipment allocated, and it is discovered on the morning.', outcome: 'Activities carry capacity, guides and equipment, so a booking without allocation is an exception.' },
    { problem: 'Stock cover is measured against days rather than the supply run', detail: 'Cover looks adequate until it is compared with the interval between deliveries.', outcome: 'Cover is calculated against the delivery interval and expected occupancy rather than in absolute days.' },
    { problem: 'Maintenance in guest areas competes with back-of-house', detail: 'A fault in an occupied villa and a fault in a store room sit in the same queue.', outcome: 'Jobs carry guest impact, so guest-area work is prioritised explicitly.' },
    { problem: 'Complaints are not attributed to a department', detail: 'A guest complains at checkout about something that happened on day two in another department.', outcome: 'Complaints attach to the stay, the department and the service, so repeat causes are identifiable.' },
    { problem: 'Departmental cost is diluted by a single rate', detail: 'One guest consumes across nine departments on an inclusive rate, and cost by department is estimated.', outcome: 'Consumption is recorded against the stay and the department, so contribution is attributable.' },
  ],

  modulesLede: 'One system across the stay, activities, supply and departments.',
  modules: [
    { id: 'work', title: 'Stays, activities and services', line: 'The stay is work spanning departments, with activities, services, housekeeping and maintenance recorded against it.', why: 'The guest judges the stay, and the stay is the only record that spans the departments producing it.', example: 'A four-night stay with every department interaction on one record.' },
    { id: 'records', title: 'Keys, villas and facilities', line: 'Accommodation and facilities are records with condition, maintenance history, capacity and availability.', why: 'A villa with a recurring fault is a capital decision rather than another repair.', example: 'Fault history by villa across seasons.' },
    { id: 'inventory', title: 'Provisions, supplies and spares', line: 'Stock is held with cover measured against the supply interval and expected occupancy.', why: 'Remote supply makes cover a function of the delivery run rather than of days.', example: 'Perishable cover below the four-day supply interval.' },
    { id: 'people', title: 'Guides, housekeeping, kitchen and maintenance', line: 'Staff are modelled once with departments, skills and — where applicable — on-site accommodation.', why: 'Seasonal staffing at a remote resort is a rostering and housing problem together.', example: 'Guide availability against booked activities.' },
    { id: 'workforce', title: 'Rostering against occupancy and activities', line: 'Assignment and attendance connect to occupancy, activity bookings and the departments they covered.', why: 'Load is derived from occupancy and the activity schedule, both known in advance.', example: 'Housekeeping and guide cover derived from tomorrow’s occupancy and bookings.' },
    { id: 'relationships', title: 'Guests, groups and agents', line: 'Guests carry their stays, preferences, activities, complaints and spend; agents carry their bookings and terms.', why: 'Resort revenue is repeat and referral driven, and preferences are the currency.', example: 'A returning guest’s recorded preferences available to every department.' },
    { id: 'suppliers', title: 'Suppliers, transport and contractors', line: 'Suppliers carry delivery intervals, reliability, lead times and balances.', why: 'A missed supply run at a remote site changes the menu and the guest experience.', example: 'Supplier reliability measured against the delivery run rather than a lead time.' },
    { id: 'locations', title: 'Departments, zones and sites', line: 'Departments and zones are locations with their own stock, work, staff and reporting.', why: 'Attribution across nine departments requires them to be distinct records.', example: 'Consumption and labour by department against the stays they served.' },
    { id: 'intelligence', title: 'Journey, cover and department reporting', line: 'Guest journey and complaint attribution, activity fulfilment, stock cover against supply runs, departmental cost and maintenance impact come from the records.', why: 'A resort’s reputation is a whole-stay outcome and its cost is departmental.', example: 'Complaint causes attributed to a department and a day of the stay.' },
    { id: 'ai', title: 'Ask the resort a question', line: 'Verity AI answers from your own stay, activity, stock and maintenance records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions cross departments and days of a stay.', example: '"Which activities are booked without capacity confirmed?" returns eighteen with allocation raised.' },
    { id: 'workflows', title: 'Approvals, escalations and guest recovery', line: 'Purchase approvals, complaint escalation, compensation and activity cancellation move through defined steps.', why: 'Guest recovery decisions are made under pressure and should be recorded.', example: 'Compensation recorded against the stay and the cause.' },
    { id: 'communication', title: 'Handover across departments', line: 'Notes, preferences and issues attach to the stay, villa or activity they concern.', why: 'A guest preference mentioned at check-in should reach the restaurant and the guide.', example: 'A dietary requirement visible to the kitchen without front office relaying it.' },
  ],

  workflowsHeading: 'One stay, many departments.',
  workflowsLede: 'These already happen. Recorded against the stay, the journey becomes visible.',
  workflows: [
    { name: 'Arrival to departure', steps: ['Stay opened with guest, villa, preferences and dates', 'Departmental interactions recorded against the stay', 'Activities booked with capacity confirmed', 'Issues raised and resolved against the stay', 'Departure recorded with feedback and outstanding items'], note: 'The stay record is the only place the guest’s actual experience is assembled.' },
    { name: 'Activity scheduling', steps: ['Activity capacity defined with guides and equipment', 'Bookings taken against confirmed capacity', 'Allocation made and confirmed', 'Weather or condition changes handled with alternatives', 'Delivery and guest feedback recorded'], note: 'Confirming capacity at booking is what prevents the most visible failure a resort can have.' },
    { name: 'Supply run planning', steps: ['Expected occupancy and activity load projected to the next run', 'Consumption rates applied per department', 'Requirements assembled across departments', 'Order placed against the run', 'Receipt checked and cover recalculated'], note: 'Cover has to be measured against the interval, not in absolute days.' },
    { name: 'Maintenance with guest impact', steps: ['Fault recorded with location and guest impact', 'Priority set by occupancy and visibility', 'Job assigned with parts availability checked', 'Completion verified and villa returned to service', 'Recurring faults surfaced for capital decisions'], note: 'A fault in an occupied villa is a different priority from one in a store room.' },
    { name: 'Complaint attribution', steps: ['Complaint recorded against the stay with day and department', 'Cause identified and corrective work raised', 'Recovery offered and recorded', 'Cause aggregated by department and service', 'Action assigned where causes repeat'], note: 'A complaint at checkout usually concerns something that happened on day two in another department.' },
  ],

  ai: {
    heading: 'Ask about the stay, not the department.',
    lede: 'Verity AI reads the same stay, activity, stock and maintenance records the resort creates as it operates. It answers across departments, respects permissions, and can turn an answer into allocation and repairs.',
    panelMeta: 'Grounded in your resort records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which activities are booked without confirmed capacity?',
      'Is stock cover adequate against the next supply run?',
      'Which maintenance jobs affect occupied villas?',
      'Where do guest complaints originate by department and day of stay?',
      'What is departmental consumption against the stays served?',
      'Which villas have recurring faults across seasons?',
      'Is staffing matched to tomorrow’s occupancy and activity bookings?',
      'Which returning guests have recorded preferences?',
      'Summarise operational readiness for the coming week.',
    ],
  },

  automationHeading: 'The gaps a remote operation cannot absorb.',
  automationLede: 'Each runs from the resort’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An activity is booked without allocated capacity', steps: ['Booking flagged with the activity and date', 'Allocation task assigned', 'Alternative offered if capacity cannot be found'] },
    { trigger: 'Stock cover falls below the supply interval', steps: ['Shortfall calculated against projected occupancy', 'Requirement added to the next run', 'Menu or service adjustment flagged if it cannot be met'] },
    { trigger: 'A fault is reported in an occupied villa', steps: ['Priority raised by guest impact', 'Job assigned with parts checked', 'Guest informed and recovery considered'] },
    { trigger: 'A complaint is recorded', steps: ['Attributed to department, day and service', 'Corrective work raised', 'Cause aggregated for the department review'] },
    { trigger: 'Occupancy is projected above staffed capacity', steps: ['Gap flagged by department and day', 'Roster task assigned', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the general manager can see.',
  intelligenceLede: 'The whole stay and the supply that made it possible.',
  intelligence: [
    { area: 'Guest journey', points: ['Interactions per stay across departments', 'Complaints by department and day of stay', 'Recovery offered and its cost', 'Repeat and referral guests'] },
    { area: 'Activities', points: ['Bookings against capacity', 'Fulfilment and cancellations by reason', 'Guide and equipment utilisation', 'Activity revenue per stay'] },
    { area: 'Supply', points: ['Cover against supply run intervals', 'Consumption by department against occupancy', 'Supplier reliability against runs', 'Wastage and shortfalls'] },
    { area: 'Facilities', points: ['Maintenance jobs by location and guest impact', 'Out-of-service keys and duration', 'Recurring faults by villa', 'Preventive compliance'] },
    { area: 'Departments', points: ['Consumption and labour by department', 'Contribution against stays served', 'Staffing against occupancy and activity load', 'Cross-department handovers'] },
  ],
  intelligenceNote: 'Verity records operations. Reservations, rates and channel management continue in your existing systems.',

  rolesHeading: 'Many departments, one guest.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'General manager', question: 'What is the guest actually experiencing?', focus: 'Complaint attribution by department and day, activity fulfilment, out-of-service keys, departmental contribution.' },
    { role: 'Operations manager', question: 'Are we set up for the week?', focus: 'Stock cover against the supply run, staffing against occupancy, activity allocation, maintenance in guest areas.' },
    { role: 'Activities lead', question: 'What is booked and can we deliver it?', focus: 'Bookings against capacity, guide and equipment allocation, conditions and alternatives.' },
    { role: 'Front office', question: 'What does this guest need?', focus: 'Stay record and preferences, activities booked, issues raised, villa status.' },
  ],

  useCasesHeading: 'What resorts use Verity for',
  useCases: [
    { name: 'The stay as a record', body: 'Every department’s interaction assembled on one stay, since the guest forms a single judgement about all of them.' },
    { name: 'Activity capacity confirmation', body: 'Bookings confirmed against allocated guides and equipment, preventing the most visible failure a resort can have.' },
    { name: 'Cover against the supply run', body: 'Stock cover measured against the delivery interval and projected occupancy rather than in absolute days.' },
    { name: 'Guest-impact maintenance priority', body: 'Faults carrying guest impact so occupied-villa work is prioritised explicitly rather than queued with back-of-house.' },
    { name: 'Complaint attribution', body: 'Complaints attached to the department and day that caused them, so repeat causes become addressable.' },
    { name: 'Departmental contribution', body: 'Consumption and labour recorded against the stays served, so an inclusive rate can still be attributed.' },
    { name: 'Asking across the stay', body: 'Plain-language questions spanning departments, days and supply, with allocation and repairs raised in the same step.' },
  ],

  migration: 'Your reservation and channel systems continue and are mapped during implementation. Villas and facilities, activities and capacities, suppliers with run intervals, staff and current stays are brought across.',

  faqHeading: 'Questions resorts ask',
  faqs: [
    ['Does Verity replace our reservation system?', 'No. Reservations, rates and channel management stay where they are and are mapped during implementation. Verity records the operational layer — the stay across departments, activities, supply, maintenance and departmental cost.'],
    ['What can AI software do for a resort?', 'Verity AI answers questions from your own stay, activity, stock and maintenance records: which activities lack confirmed capacity, whether cover is adequate against the next supply run, which maintenance affects occupied villas, where complaints originate. Each answer can become allocation or a repair.'],
    ['Why record the whole stay?', 'Because the guest forms one judgement about four days spanning nine departments, and no departmental system holds that. A complaint at checkout usually concerns something that happened on day two somewhere else.'],
    ['How does remote supply change stock management?', 'Cover has to be measured against the delivery interval and projected occupancy rather than in absolute days. Six days of cover against a four-day run is comfortable; four days against the same run is a menu changing without warning.'],
    ['Can it manage activities?', 'Activities carry capacity, guides and equipment, and a booking without confirmed allocation is an exception rather than a discovery on the morning — which is the most visible failure available to a resort.'],
    ['Does it attribute complaints?', 'Complaints attach to the stay with the day and the department, so causes aggregate and repeat problems become identifiable rather than remaining anecdotal.'],
    ['Can it help with seasonal staffing?', 'Staffing load is derived from occupancy and the activity schedule, both known in advance, and staff records include on-site accommodation where relevant.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of departments, activities and supply runs, configuration, migration of facilities, suppliers and staff, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the guest journey.',
  ctaLede: 'Nine departments, one judgement, no record. Tell us how a stay is tracked today.',

  related: ['hotels', 'event-venues', 'tour-operators', 'travel-agencies', 'guest-houses', 'restaurants'],
};
