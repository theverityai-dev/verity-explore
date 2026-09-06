export default {
  slug: 'hotels',
  status: 'published',
  plural: 'hotels',
  subject: 'hotel',

  seo: {
    title: 'AI business management software for hotels | Verity',
    description:
      'Verity connects housekeeping, maintenance, food and beverage, procurement, departmental staffing and guest history into one operational system.',
    keywords: [
      'AI software for hotels',
      'hotel operations management software',
      'housekeeping and maintenance tracking software',
      'hotel departmental reporting and procurement',
    ],
  },

  hero: {
    eyebrow: 'Verity for hotels',
    headline: 'The guest experiences one hotel. The hotel runs as six departments that barely speak.',
    lede:
      'Housekeeping, maintenance, food and beverage, front office, stores and finance each keep their own records. Verity puts the work, the assets, the stock and the guest on one model.',
    note: 'Verity runs hotel operations. It does not replace your reservation system.',
    panel: {
      title: 'Operations',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Rooms occupied', value: '118 of 140', note: '84% occupancy' },
        { label: 'Rooms out of order', value: '6', note: 'maintenance, 2 over 7 days' },
        { label: 'Open work orders', value: '47', note: '11 past due' },
        { label: 'F&B covers', value: '312', note: 'across 3 outlets' },
      ],
      rows: [
        { name: '2 rooms out of order for more than a week', meta: 'Awaiting a part · revenue lost daily', active: true },
        { name: '11 maintenance jobs past their due date', meta: 'Four in occupied rooms', active: true },
        { name: 'Housekeeping short two staff against occupancy', meta: 'Checkout peak · late room readiness likely', active: true },
        { name: 'Banquet stock issued and not reconciled', meta: 'Function completed 3 days ago', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own property in this shape.',
    },
  },

  overview: {
    heading: 'A hotel is several different businesses sharing a building and a guest.',
    paragraphs: [
      'Front office sells and manages rooms. Housekeeping turns them around. Maintenance keeps them sellable. Food and beverage runs what are effectively independent restaurants. Stores and procurement supply all of them. Finance reconciles everything afterwards. Each department has its own rhythm, its own staff and — almost always — its own records, usually on paper or in a spreadsheet.',
      'The guest experiences none of that separation. They experience a room that was not ready, a shower that was reported broken two weeks ago, or a banquet that ran out of something. Every one of those is a handoff between departments that had no shared record.',
      'The most expensive version is a room out of order. An unsellable room loses revenue every night it stays that way, and the reason is usually a maintenance job waiting on a part that nobody escalated. The reservation system knows the room is blocked; it does not know why or who owns the fix.',
      'The second is that departmental cost is rarely attributable. Stores issue to housekeeping, to the kitchen, to maintenance and to banquets, and the consumption is reconciled monthly if at all, so nobody can say what a department actually spent against what it produced.',
      'Verity is not a reservation system and does not try to be. It holds the work, the assets, the stock, the staff and the guest history that sit underneath the room night.',
    ],
  },

  terminology: [
    ['Rooms, assets, equipment', 'Records'],
    ['Housekeeping, maintenance, banquet jobs', 'Work'],
    ['Guests, corporate accounts, travel agents', 'Relationships'],
    ['Linen, amenities, food, engineering spares', 'Inventory'],
    ['Departments, shifts, duty rosters', 'People'],
    ['Vendors, contractors, suppliers', 'Suppliers'],
    ['Floors, outlets, banquet halls, stores', 'Locations'],
  ],

  challengesHeading: 'Every failure is a handoff between departments.',
  challengesLede:
    'Hotel problems are rarely departmental. They happen where one department’s work becomes another’s dependency.',
  challenges: [
    {
      problem: 'Rooms stay out of order longer than anyone realises',
      detail:
        'A room is blocked for maintenance and the job waits on a part. The revenue loss accumulates nightly and nobody owns the escalation.',
      outcome:
        'Out-of-order rooms carry their job, its owner and its age, so the cost of the delay is visible alongside the delay.',
    },
    {
      problem: 'Guest complaints do not become work',
      detail:
        'A guest reports a fault at the desk. It is passed verbally to maintenance and either happens or does not.',
      outcome:
        'A reported fault becomes work with an owner and a due time, attached to the room and the guest who reported it.',
    },
    {
      problem: 'Housekeeping is staffed against a template',
      detail:
        'Room readiness at the checkout peak depends on staffing that was planned without reference to the day’s actual arrivals and departures.',
      outcome:
        'Housekeeping load is derived from occupancy and turnover, so shortfalls are visible before the peak.',
    },
    {
      problem: 'Departmental consumption is not attributable',
      detail:
        'Stores issue to every department and reconcile monthly, so what housekeeping or the kitchen actually consumed is unknown until long after.',
      outcome:
        'Issues are recorded against the department and the job, so consumption is attributable as it happens.',
    },
    {
      problem: 'Banquet stock disappears into general cost',
      detail:
        'A function draws food, beverage, linen and equipment, and reconciling what was issued against what was used happens rarely.',
      outcome:
        'A function is a job with issued stock and a reconciliation on completion, so its true cost is known.',
    },
    {
      problem: 'Preventive maintenance slips behind reactive work',
      detail:
        'Scheduled servicing is postponed whenever something breaks, which guarantees more things break.',
      outcome:
        'Preventive schedules are work with due dates, so deferral is a visible decision rather than a default.',
    },
  ],

  modulesLede:
    'One system underneath the room night. The reservation system stays where it is.',
  modules: [
    {
      id: 'work',
      title: 'Housekeeping, maintenance and banquet jobs',
      line:
        'Every job is work with an owner, a due time, a location, a state and the room, asset or function it concerns.',
      why:
        'Almost everything a guest experiences is the output of a job that either happened on time or did not.',
      example:
        'Forty-seven open jobs with eleven past due, four of them in occupied rooms.',
    },
    {
      id: 'records',
      title: 'Rooms, assets and equipment',
      line:
        'Rooms, plant and equipment are records with their history, service schedules, faults and current state.',
      why:
        'An asset’s fault history is what distinguishes a one-off problem from a room that should be refurbished.',
      example:
        'A room with four maintenance jobs in six months is a capital decision rather than another repair.',
    },
    {
      id: 'inventory',
      title: 'Linen, amenities, food and spares',
      line:
        'Stock is held with supplier, cost and location, and issued to departments and jobs rather than into a general pool.',
      why:
        'Issuing to a department or a job is what makes hotel consumption attributable at all.',
      example:
        'Banquet stock issued to a function and reconciled on completion rather than absorbed into monthly food cost.',
    },
    {
      id: 'people',
      title: 'Departments, shifts and duty rosters',
      line:
        'Staff are modelled once with their department, and every job, issue and check carries who performed it.',
      why:
        'A hotel is a multi-department workforce on rotating shifts, and work only moves if ownership is explicit.',
      example:
        'Jobs completed per housekeeper against rooms assigned, from the jobs themselves.',
    },
    {
      id: 'workforce',
      title: 'Staffing against occupancy and turnover',
      line:
        'Assignment, attendance and availability stay connected to the shifts and the occupancy they covered.',
      why:
        'Housekeeping and F&B load are both derivable from occupancy, and staffing to a flat template is why room readiness slips.',
      example:
        'Housekeeping short two staff against today’s checkout volume, flagged before the peak.',
    },
    {
      id: 'relationships',
      title: 'Guests, corporate accounts and agents',
      line:
        'Guests, corporate accounts and travel agents are records with their stay history, preferences, complaints, resolutions and balances.',
      why:
        'Repeat and corporate business is a hotel’s most valuable revenue, and complaint history is the best predictor of losing it.',
      example:
        'A corporate account whose room nights have halved since a service failure, visible as a pattern.',
    },
    {
      id: 'suppliers',
      title: 'Vendors, contractors and suppliers',
      line:
        'Suppliers and contractors are relationships with their orders, response times, rate agreements, reliability and balances.',
      why:
        'A room out of order for a week is usually a contractor or a part, and both should be measurable.',
      example:
        'Contractor response time against the rooms it kept out of order.',
    },
    {
      id: 'workflows',
      title: 'Approvals, escalations and permits',
      line:
        'Purchase approvals, rate exceptions, write-offs, out-of-order authorisations and escalations move through defined steps with recorded decisions.',
      why:
        'A hotel makes many small discretionary decisions across departments, and the ones with revenue impact deserve records.',
      example:
        'Taking a room out of order becomes an authorised decision with an expected return date.',
    },
    {
      id: 'locations',
      title: 'Floors, outlets, halls and stores',
      line:
        'Locations roll into the property and properties into the group, with work, stock and reporting following the same structure.',
      why:
        'Hotel work is intensely location-specific, and a group only learns from comparison if every property records identically.',
      example:
        'Job completion, out-of-order duration and consumption by floor, outlet and property.',
    },
    {
      id: 'intelligence',
      title: 'Departmental reporting from live records',
      line:
        'Job completion and ageing, out-of-order duration and cost, departmental consumption, staffing against occupancy and guest complaint patterns come from the operational records.',
      why:
        'Hotels typically have excellent revenue reporting and very little operational reporting, which is where the controllable cost is.',
      example:
        'Revenue lost to out-of-order rooms, calculated from duration rather than estimated.',
    },
    {
      id: 'ai',
      title: 'Ask the property a question',
      line:
        'Verity AI answers from your own work, asset, stock and guest records, respects permissions, and can create assigned follow-ups.',
      why:
        'The useful questions cross departments, which is exactly what departmental records prevent.',
      example:
        '"Which rooms have been out of order longest and why?" returns the list with the escalations assigned.',
    },
    {
      id: 'communication',
      title: 'Handover across shifts and departments',
      line:
        'Notes, notifications and activity attach to the room, job, guest or function they concern.',
      why:
        'A hotel runs three shifts across six departments, so anything communicated verbally is lost within a day.',
      example:
        'A guest’s recorded preference visible to housekeeping without front office having to pass it on.',
    },
    {
      id: 'control',
      title: 'Who can approve, issue and write off',
      line:
        'One permission model and one audit trail across every record and department.',
      why:
        'Stores issue value continuously across departments, and attribution is what makes it controllable.',
      example:
        'Every stock issue carries the department, the job and the person who requested it.',
    },
  ],

  workflowsHeading: 'Where one department hands to another.',
  workflowsLede:
    'These already happen. As records with owners they stop depending on a verbal handover.',
  workflows: [
    {
      name: 'Departure to room ready',
      steps: [
        'Departure recorded and the room queued for turnaround',
        'Housekeeping job assigned against the day’s load',
        'Cleaning completed and the room inspected',
        'Any fault raised as a maintenance job rather than passed verbally',
        'Room released as ready and the time recorded',
      ],
      note:
        'Room readiness at the checkout peak is the most visible operational measure a hotel has.',
    },
    {
      name: 'Fault to resolution',
      steps: [
        'Fault reported by a guest or found on inspection',
        'Job created against the room or asset with an owner and priority',
        'Parts or contractor requirement identified',
        'Room taken out of order only where necessary, with an expected return date',
        'Work completed, inspected and the room returned to sale',
        'Duration and revenue impact recorded',
      ],
      note:
        'Attaching the revenue impact to the duration is what gets a stalled job escalated.',
    },
    {
      name: 'Preventive maintenance',
      steps: [
        'Service schedules held against assets',
        'Jobs raised automatically as they fall due',
        'Scheduling balanced against occupancy',
        'Completion recorded against the asset history',
        'Deferrals recorded as decisions with reasons',
      ],
      note:
        'Preventive work loses to reactive work by default, and recording deferral is what makes that a choice.',
    },
    {
      name: 'Stores issue and departmental cost',
      steps: [
        'Requisition raised by a department against a job or function',
        'Approval applied where the value requires it',
        'Stock issued and recorded against the department',
        'Consumption compared against activity for the period',
        'Variances raised as exceptions',
      ],
      note:
        'Issuing to a department rather than into a general pool is what makes cost attributable.',
    },
    {
      name: 'Banquet or function',
      steps: [
        'Function recorded with its date, covers and requirements',
        'Stock, equipment and staff issued against it',
        'Service delivered and hours recorded',
        'Returns and leftovers reconciled against issues',
        'Function cost assembled against its revenue',
      ],
      note:
        'A function is a small event business inside the hotel and deserves its own costing.',
    },
    {
      name: 'Guest complaint',
      steps: [
        'Complaint recorded against the guest and the room or outlet',
        'Corrective work raised with an owner',
        'Resolution recorded and communicated',
        'Compensation approved and recorded where offered',
        'Pattern reviewed by room, outlet and cause',
      ],
      note:
        'A complaint that becomes work is resolved. A complaint that stays a conversation is repeated.',
    },
  ],

  ai: {
    heading: 'Ask across departments.',
    lede:
      'Verity AI reads the same work, asset, stock and guest records the property creates as it operates. It answers from your own hotel, only shows what the person asking can see, and can turn the answer into jobs assigned to the right department.',
    panelMeta: 'Grounded in your property records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which rooms have been out of order longest, and what is each waiting on?',
      'What revenue have out-of-order rooms cost this month?',
      'Which maintenance jobs are past due in occupied rooms?',
      'Is housekeeping staffed against today’s checkout volume?',
      'Which assets have the most repeat faults?',
      'What did each department consume from stores this month?',
      'Which corporate accounts have reduced their room nights?',
      'Which contractors respond slowest against their agreements?',
      'Summarise today’s operational position across departments.',
    ],
  },

  automationHeading: 'The handoffs that fail silently.',
  automationLede:
    'Each runs from the property’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A room is taken out of order',
      steps: [
        'Job created with an owner and expected return date',
        'Revenue impact accrued against the duration',
        'Escalated as it passes the expected date',
        'Room returned to sale on completion and inspection',
      ],
    },
    {
      trigger: 'A guest reports a fault',
      steps: [
        'Job created against the room and the guest',
        'Priority set by occupancy and severity',
        'Owner notified with a due time',
        'Resolution recorded and the guest informed',
      ],
    },
    {
      trigger: 'Occupancy exceeds staffed housekeeping capacity',
      steps: [
        'Shortfall flagged against the day’s checkout volume',
        'Cover task assigned to the department head',
        'Room readiness tracked against the peak',
      ],
    },
    {
      trigger: 'A preventive service falls due',
      steps: [
        'Job raised against the asset',
        'Scheduled against occupancy',
        'Deferral recorded as a decision if postponed',
      ],
    },
    {
      trigger: 'A function is completed',
      steps: [
        'Reconciliation task raised for issued stock and equipment',
        'Hours confirmed against attendance',
        'Function costing assembled against revenue',
      ],
    },
    {
      trigger: 'An asset records repeat faults',
      steps: [
        'Pattern flagged with the fault history',
        'Replacement or refurbishment review assigned',
        'Decision recorded against the asset',
      ],
    },
  ],

  intelligenceHeading: 'What the general manager can actually see.',
  intelligenceLede:
    'Operational performance beneath the revenue numbers, from departmental records.',
  intelligence: [
    {
      area: 'Rooms',
      points: [
        'Out-of-order duration and revenue impact',
        'Room readiness against the checkout peak',
        'Fault frequency by room and floor',
        'Turnaround time by housekeeper',
      ],
    },
    {
      area: 'Maintenance',
      points: [
        'Open jobs by age, priority and department',
        'Preventive against reactive work',
        'Repeat faults by asset',
        'Contractor response and completion times',
      ],
    },
    {
      area: 'Consumption',
      points: [
        'Stores issues by department and job',
        'Consumption against occupancy and covers',
        'Linen and amenity cost per occupied room',
        'Variances raised on reconciliation',
      ],
    },
    {
      area: 'Staffing',
      points: [
        'Hours worked against occupancy by department',
        'Attendance against roster',
        'Jobs completed per person',
        'Coverage at peak periods',
      ],
    },
    {
      area: 'Food and beverage',
      points: [
        'Covers and consumption by outlet',
        'Function cost against function revenue',
        'Stock issued to outlets and reconciled',
        'Wastage by outlet',
      ],
    },
    {
      area: 'Guests',
      points: [
        'Complaints by cause, room and outlet',
        'Resolution time and compensation given',
        'Repeat and corporate room nights',
        'Accounts whose volume has fallen',
      ],
    },
  ],
  intelligenceNote:
    'Verity does not hold reservations or rates. It holds the operational records beneath them, which is where controllable cost and most guest experience actually sit.',

  rolesHeading: 'Six departments, one set of records.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'General manager',
      question: 'What is costing us rooms and guests?',
      focus: 'Out-of-order duration and revenue impact, complaint patterns, departmental consumption, staffing against occupancy.',
    },
    {
      role: 'Front office',
      question: 'Which rooms are actually ready?',
      focus: 'Room states and readiness, faults reported, guest preferences and history, jobs affecting occupied rooms.',
    },
    {
      role: 'Housekeeping',
      question: 'What is my load today?',
      focus: 'Rooms to turn against arrivals and departures, staff assigned, linen and amenity stock, faults to raise.',
    },
    {
      role: 'Maintenance',
      question: 'What is open and what is blocking a room?',
      focus: 'Jobs by priority and age, out-of-order rooms, parts and contractors awaited, preventive schedules due.',
    },
    {
      role: 'Stores and purchasing',
      question: 'Who consumed what, and what needs ordering?',
      focus: 'Issues by department and job, stock levels against occupancy, supplier reliability, approvals pending.',
    },
  ],

  useCasesHeading: 'What hotels use Verity for',
  useCases: [
    {
      name: 'Out-of-order room control',
      body: 'Blocked rooms carrying their job, owner, expected return date and accruing revenue impact, so a stalled repair gets escalated.',
    },
    {
      name: 'Fault to work order',
      body: 'Guest-reported faults becoming work with an owner and a due time, attached to the room and the guest, rather than passed verbally.',
    },
    {
      name: 'Housekeeping load planning',
      body: 'Turnaround load derived from arrivals and departures, so staffing follows the day rather than a flat template.',
    },
    {
      name: 'Preventive maintenance discipline',
      body: 'Service schedules as work with due dates, so deferring them is a recorded decision rather than the default.',
    },
    {
      name: 'Departmental cost attribution',
      body: 'Stores issued to a department and a job, so consumption is attributable as it happens rather than reconciled monthly.',
    },
    {
      name: 'Function and banquet costing',
      body: 'Functions as jobs with issued stock, equipment and hours reconciled on completion, giving true cost against revenue.',
    },
    {
      name: 'Asset fault history',
      body: 'Repeat faults by room and asset, distinguishing another repair from a refurbishment decision.',
    },
    {
      name: 'Complaint patterns',
      body: 'Complaints recorded against room, outlet and cause with resolution and compensation, so patterns are visible rather than anecdotal.',
    },
    {
      name: 'Asking across departments',
      body: 'Plain-language questions spanning rooms, jobs, stock, staffing and guests, with work assigned in the same step.',
    },
  ],

  migration:
    'Your reservation system, billing and accounting continue as they are and are mapped during implementation. Rooms, assets, service schedules, stock, suppliers and corporate accounts are brought across, and Verity is introduced as the operational layer beneath the room night.',

  faqHeading: 'Questions hoteliers ask',
  faqs: [
    [
      'Does Verity replace our reservation system?',
      'No. Reservations, rates and room inventory stay in your property management system, which is mapped during implementation. Verity holds the operational layer beneath it — housekeeping and maintenance work, assets, stores, departmental staffing, functions and guest service history.',
    ],
    [
      'What can AI software do for a hotel?',
      'Verity AI answers questions from your own work, asset, stock and guest records: which rooms have been out of order longest and what each is waiting on, what that has cost in revenue, whether housekeeping is staffed against today’s checkout volume, which assets have repeat faults. Each answer can become a job assigned to the right department.',
    ],
    [
      'How does it help with out-of-order rooms?',
      'A blocked room carries its job, its owner and an expected return date, with revenue impact accruing against the duration, so a repair waiting on a part is escalated rather than quietly costing a room night every day.',
    ],
    [
      'Can it manage housekeeping?',
      'Turnaround load is derived from arrivals and departures, jobs are assigned against it, room readiness is timed, and faults found during cleaning become maintenance work rather than a verbal handover.',
    ],
    [
      'Does it attribute cost to departments?',
      'Stores issues are recorded against the requesting department and the job or function they serve, so consumption is attributable as it happens rather than reconciled at month end.',
    ],
    [
      'Can it cost banquets and functions?',
      'A function is a job with stock, equipment and staff issued against it and reconciled on completion, so its true cost can be set against its revenue rather than absorbed into general food and beverage cost.',
    ],
    [
      'Does it work across a group of properties?',
      'Floors, outlets and stores roll into a property and properties into the group, all recording identically, so job completion, out-of-order duration and consumption are comparable across hotels.',
    ],
    [
      'Can guest complaints be tracked?',
      'A complaint is recorded against the guest and the room or outlet, becomes corrective work with an owner, and its resolution and any compensation are recorded — so patterns by cause and location become visible rather than anecdotal.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the departments actually operate, configuration, migration of rooms, assets, schedules and stock, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the rooms you cannot sell.',
  ctaLede:
    'Out-of-order duration is usually the largest recoverable number in a hotel and the least owned. Tell us how maintenance is tracked today.',

  related: ['restaurants', 'resorts', 'event-venues', 'catering-businesses', 'facility-management', 'travel-agencies'],
};
