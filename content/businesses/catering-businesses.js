export default {
  slug: 'catering-businesses',
  status: 'published',
  plural: 'catering businesses',
  subject: 'catering business',

  seo: {
    title: 'AI business management software for catering businesses | Verity',
    description:
      'Verity connects event quotations, headcount changes, off-site staffing, equipment mobilisation and per-event costing into one operational system.',
    keywords: [
      'AI software for catering businesses',
      'catering management software',
      'event catering costing and staffing software',
      'banquet and event operations software',
    ],
  },

  hero: {
    eyebrow: 'Verity for catering',
    headline: 'The headcount changed on Thursday. Everything downstream of it did not.',
    lede:
      'A catering business commits food, staff and equipment against a number the client keeps revising. Verity makes the event the record, so a change propagates instead of being remembered.',
    note: 'Runs alongside your existing billing and accounting.',
    panel: {
      title: 'Events',
      meta: 'Next 14 days',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Events confirmed', value: '18', note: '₹64 L contracted' },
        { label: 'Headcount changes', value: '7', note: 'in the last week' },
        { label: 'Staff shortfall', value: '2 events', note: 'against required crew' },
        { label: 'Deposits held', value: '₹19 L', note: 'against undelivered events' },
      ],
      rows: [
        { name: 'Saturday event headcount up 80 with no revised order', meta: 'Client confirmed Thursday · food not adjusted', active: true },
        { name: 'Two events short of crew against requirement', meta: 'Both on the same date', active: true },
        { name: 'Equipment double-booked across two events', meta: 'Same chafing sets · overlapping dates', active: true },
        { name: 'Final balance unbilled on delivered event', meta: '₹4.2 L · 19 days ago', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own events in this shape.',
    },
  },

  overview: {
    heading: 'Catering is a project business where the specification changes until the last week.',
    paragraphs: [
      'A catering business does not have a menu and a dining room. It has events: each one a project with a date that cannot move, a headcount that keeps moving, a menu agreed weeks earlier, a crew that has to be mobilised to a location, equipment that has to travel and come back, and a client who will judge the whole thing on one evening.',
      'The defining problem is propagation. A headcount that changes on Thursday should change the food order, the crew requirement, the equipment list, the transport and the invoice. In most catering businesses it changes one of those — usually the food — and the rest are adjusted from memory if at all, which is why events run short of staff or over on cost.',
      'The second is that everything happens off-site and simultaneously. Two events on the same Saturday compete for the same crew and the same chafing sets, and the conflict is usually discovered when the van is being loaded.',
      'The third is per-event costing. A catering business only learns anything if it knows what an event actually cost — food, crew hours, transport, equipment, breakages — against what was quoted. Most know the revenue and estimate the rest, which means the loss-making event types are never identified.',
      'Verity makes the event the record. Headcount, menu, crew, equipment, transport, costs and billing all hang off it, so a change on Thursday moves everything it should.',
    ],
  },

  terminology: [
    ['Events, functions, banquets', 'Work'],
    ['Quotations, confirmations, final bills', 'Orders'],
    ['Clients, planners, venues', 'Relationships'],
    ['Ingredients, disposables, equipment', 'Inventory'],
    ['Chefs, service crew, supervisors', 'People'],
    ['Deposits, revisions, approvals', 'Workflows'],
    ['Kitchen, stores, event sites', 'Locations'],
  ],

  challengesHeading: 'One change, six consequences, one of them recorded.',
  challengesLede:
    'Catering failures are almost always a revision that did not reach everything it should have.',
  challenges: [
    {
      problem: 'A headcount change does not propagate',
      detail:
        'The client adds eighty guests. The food order is revised; the crew requirement, equipment list and invoice are not.',
      outcome:
        'The event is one record, so a headcount change recalculates food, crew, equipment and billing together.',
    },
    {
      problem: 'Crew and equipment are double-booked',
      detail:
        'Two events on the same date draw on the same people and the same equipment, and the clash is found while loading.',
      outcome:
        'Crew and equipment are committed against events, so a conflict is visible when the second event is confirmed.',
    },
    {
      problem: 'Event cost is estimated, not measured',
      detail:
        'Revenue is known precisely and cost approximately, so which event types actually make money is a matter of belief.',
      outcome:
        'Food consumed, crew hours, transport, equipment and breakages are recorded against the event, so cost against quote is measured.',
    },
    {
      problem: 'Equipment does not come back',
      detail:
        'Chafing sets, linen and serving equipment go out and return incompletely, and the loss is absorbed as a general expense.',
      outcome:
        'Equipment issued to an event is recorded movement, so shortfalls are attributable to a specific event and crew.',
    },
    {
      problem: 'Final billing lags delivery',
      detail:
        'The event is done, everyone moves on, and the final balance against the deposit is raised weeks later.',
      outcome:
        'Delivery closes the event and raises the billing task, so the balance is aged from the event date.',
    },
    {
      problem: 'Quotations are built from scratch each time',
      detail:
        'Similar events are quoted from memory, so pricing is inconsistent and the margin varies without anyone deciding it should.',
      outcome:
        'Past events with their actual costs are records, so a quotation starts from what a comparable event really cost.',
    },
  ],

  modulesLede:
    'One system where the event is the record and everything hangs off it.',
  modules: [
    {
      id: 'work',
      title: 'Events, from enquiry to delivery',
      line:
        'An event is work with a client, a date, a venue, a headcount, a menu, a crew requirement, an equipment list and a state.',
      why:
        'Everything in a catering business is downstream of the event, which is why the event has to be the record rather than a folder.',
      example:
        'Eighteen confirmed events in fourteen days, each showing its headcount, crew position and outstanding balance.',
    },
    {
      id: 'orders',
      title: 'Quotations, confirmations and final bills',
      line:
        'Quotations, revisions, deposits and final bills are records against the event, with the version that was agreed retained.',
      why:
        'Catering disputes are about what was agreed and when it changed, and both need to be on the record months later.',
      example:
        'A revised quotation after a headcount change, with the previous version retained and the difference visible.',
    },
    {
      id: 'inventory',
      title: 'Ingredients, disposables and equipment',
      line:
        'Stock and equipment are held with cost and location, issued against events and reconciled on return.',
      why:
        'Catering stock leaves the building for every job, which makes issue and return the point at which loss happens.',
      example:
        'Chafing sets issued to Saturday’s event and reconciled on return, rather than counted next month.',
    },
    {
      id: 'people',
      title: 'Chefs, service crew and supervisors',
      line:
        'Staff and casual crew are modelled once, with skills, availability and the events they are committed to.',
      why:
        'Catering runs on a partly casual workforce committed across simultaneous events, which is exactly where double-booking happens.',
      example:
        'Two events on one date, both short against their crew requirement, visible when the second was confirmed.',
    },
    {
      id: 'workforce',
      title: 'Mobilisation, attendance and hours',
      line:
        'Assignment, attendance and hours worked stay connected to the event they served.',
      why:
        'Crew hours are the second-largest event cost and the least recorded, which is why per-event costing usually fails.',
      example:
        'Hours actually worked at an event against the hours quoted for it.',
    },
    {
      id: 'relationships',
      title: 'Clients, planners and venues',
      line:
        'Clients, event planners and venues are records with their events, preferences, requirements, terms and history.',
      why:
        'Repeat catering business comes through planners and venues, and those relationships are worth more than any single client.',
      example:
        'A planner who brought nine events this year is a relationship with a record rather than a familiar name.',
    },
    {
      id: 'workflows',
      title: 'Revisions, deposits and approvals',
      line:
        'Headcount revisions, menu changes, discounts and deposit terms move through defined steps with recorded decisions.',
      why:
        'A revision is a commercial event, and treating it as a phone call is how catering businesses absorb cost changes.',
      example:
        'A headcount increase inside the cut-off raises a revision with the cost difference attached.',
    },
    {
      id: 'suppliers',
      title: 'Ingredient suppliers and hired equipment',
      line:
        'Suppliers are relationships with their orders, delivery reliability against event dates, hire terms and balances.',
      why:
        'An event date cannot move, so a supplier delivering late is a different category of failure here.',
      example:
        'Delivery reliability measured against event dates rather than against ordinary lead times.',
    },
    {
      id: 'records',
      title: 'Menus, specifications and site notes',
      line:
        'Menus, dietary requirements, floor plans and site access notes attach to the event they belong to.',
      why:
        'The crew arriving at a venue needs what was agreed and what the site requires, and both are usually in someone’s phone.',
      example:
        'Site access notes from the last event at the same venue, on the record for the next one.',
    },
    {
      id: 'intelligence',
      title: 'Per-event costing and pipeline reporting',
      line:
        'Cost against quote per event, crew hours against quoted, equipment loss, event type profitability and pipeline value come from the operational records.',
      why:
        'A catering business cannot price well until it knows what comparable events actually cost.',
      example:
        'Margin by event type, so the categories that lose money are identified rather than suspected.',
    },
    {
      id: 'ai',
      title: 'Ask the event book a question',
      line:
        'Verity AI answers from your own event, crew, stock and client records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions that matter are about conflicts and revisions in the next fortnight, which is exactly when nobody has time to look.',
      example:
        '"Which events in the next two weeks are short of crew?" returns two, with the mobilisation tasks assigned.',
    },
    {
      id: 'locations',
      title: 'Kitchen, stores and event sites',
      line:
        'Locations roll into the business, including event sites as temporary locations for stock and equipment.',
      why:
        'Treating an event site as a location is what makes issue and return reconcilable.',
      example:
        'Equipment at three simultaneous sites, each reconciled against what was issued.',
    },
    {
      id: 'communication',
      title: 'What the client changed and when',
      line:
        'Notes, notifications and activity attach to the event or client they concern.',
      why:
        'Catering runs on last-minute conversations, and the one nobody wrote down is the one that causes the failure.',
      example:
        'A dietary requirement mentioned on a call, recorded against the event where the chef will see it.',
    },
    {
      id: 'control',
      title: 'Who can revise and discount',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Revisions close to the date carry real cost, and agreeing them should be a recorded decision.',
      example:
        'A late headcount change accepted without a price revision becomes a visible, attributed decision.',
    },
  ],

  workflowsHeading: 'The event is the record.',
  workflowsLede:
    'These already happen. Hung off one event record, a change in any of them reaches the rest.',
  workflows: [
    {
      name: 'Enquiry to confirmed event',
      steps: [
        'Enquiry recorded against the client or planner',
        'Date, venue and headcount captured',
        'Menu and service level agreed',
        'Quotation built against comparable past events and their actual costs',
        'Deposit terms agreed and recorded',
        'Event confirmed and crew, equipment and stock provisionally committed',
      ],
      note:
        'Quoting from what comparable events actually cost is the single largest pricing improvement available.',
    },
    {
      name: 'Headcount revision',
      steps: [
        'Client confirms a change to the headcount',
        'Food requirement recalculated from the menu',
        'Crew requirement recalculated against service ratios',
        'Equipment and transport requirements updated',
        'Price revision raised and approved',
        'Client informed and the revised agreement recorded',
      ],
      note:
        'This is the sequence that most often breaks, and the reason events run short of staff.',
    },
    {
      name: 'Mobilisation',
      steps: [
        'Crew assigned against the requirement and their availability',
        'Equipment issued to the event as a location',
        'Stock issued and transport arranged',
        'Site notes and dietary requirements attached for the crew',
        'Attendance recorded on site',
      ],
      note:
        'Committing crew and equipment against the event is what makes double-booking visible in advance.',
    },
    {
      name: 'Delivery and return',
      steps: [
        'Service delivered and hours worked recorded',
        'Equipment returned and reconciled against what was issued',
        'Breakages and shortfalls recorded against the event',
        'Leftover stock returned or written off',
        'Event closed and the billing task raised',
      ],
      note:
        'Reconciling equipment on return is where a recurring, unattributed loss becomes a specific one.',
    },
    {
      name: 'Event costing',
      steps: [
        'Food consumed valued against the event',
        'Crew hours costed from attendance',
        'Transport, equipment and breakages attributed',
        'Total cost compared against the quotation',
        'Margin recorded against the event type for future quoting',
      ],
      note:
        'This closes the loop that lets the next quotation be better than the last.',
    },
    {
      name: 'Billing and collection',
      steps: [
        'Final bill raised against the confirmed agreement',
        'Deposit applied and balance calculated',
        'Balance aged from the event date',
        'Collection follow-up assigned as terms fall due',
        'Payment recorded against the client',
      ],
      note:
        'Ageing from the event date rather than from the invoice date is what stops billing drift.',
    },
  ],

  ai: {
    heading: 'Ask what the next fortnight cannot cover.',
    lede:
      'Verity AI reads the same event, crew, stock and client records the business creates as it works. It answers from your own event book, only shows what the person asking can see, and can turn the answer into mobilisation and follow-up tasks.',
    panelMeta: 'Grounded in your event records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which events in the next two weeks are short of crew?',
      'Where is equipment committed to two events on the same date?',
      'Which events had a headcount change without a price revision?',
      'What did comparable events actually cost against what we quoted?',
      'Which event types have the weakest margin?',
      'How much is held in deposits against undelivered events?',
      'Which delivered events are still unbilled?',
      'Which planners and venues brought the most business this year?',
      'Summarise the next fortnight’s events and their readiness.',
    ],
  },

  automationHeading: 'The consequences of a change.',
  automationLede:
    'Each runs from the event record at the point the condition is met.',
  automations: [
    {
      trigger: 'A headcount is revised',
      steps: [
        'Food, crew, equipment and transport requirements recalculated',
        'Price revision raised for approval',
        'Client communication task created',
        'Revised agreement recorded against the event',
      ],
    },
    {
      trigger: 'Crew or equipment is committed to overlapping events',
      steps: [
        'Conflict flagged with both events named',
        'Resolution task assigned to the operations owner',
        'Outcome recorded against both events',
      ],
    },
    {
      trigger: 'An event is short against its crew requirement',
      steps: [
        'Shortfall flagged with the date and requirement',
        'Mobilisation task assigned',
        'Escalated as the event date approaches',
      ],
    },
    {
      trigger: 'An event is delivered',
      steps: [
        'Equipment return reconciliation task raised',
        'Crew hours confirmed against attendance',
        'Costing assembled against the quotation',
        'Final billing task assigned',
      ],
    },
    {
      trigger: 'Equipment does not return in full',
      steps: [
        'Shortfall recorded against the event and crew',
        'Replacement or recovery task raised',
        'Pattern surfaced if it repeats',
      ],
    },
    {
      trigger: 'A balance passes its terms',
      steps: [
        'Balance aged on the client record from the event date',
        'Collection follow-up assigned',
        'Escalated with the event history attached',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see per event.',
  intelligenceLede:
    'Cost against quote, from records created before, during and after each event.',
  intelligence: [
    {
      area: 'Events',
      points: [
        'Confirmed events by date and value',
        'Readiness against crew, equipment and stock',
        'Headcount revisions and their price impact',
        'Cancellations and their recorded reasons',
      ],
    },
    {
      area: 'Cost',
      points: [
        'Cost against quotation per event',
        'Food consumed against planned',
        'Crew hours against quoted hours',
        'Transport, equipment and breakage cost',
      ],
    },
    {
      area: 'Margin',
      points: [
        'Margin by event type and size',
        'Margin by venue and by planner',
        'Effect of late revisions on margin',
        'Discounting against thresholds',
      ],
    },
    {
      area: 'Resources',
      points: [
        'Crew commitment and availability by date',
        'Equipment utilisation and conflicts',
        'Equipment loss by event and crew',
        'Supplier delivery reliability against event dates',
      ],
    },
    {
      area: 'Commercial',
      points: [
        'Pipeline value by month',
        'Deposits held against undelivered events',
        'Unbilled delivered events',
        'Business by client, planner and venue',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the event, the mobilisation and the return, which the business already does informally.',

  rolesHeading: 'One event book, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Which events actually make money?',
      focus: 'Cost against quote by event type, margin by venue and planner, pipeline, deposits held.',
    },
    {
      role: 'Operations manager',
      question: 'Can we deliver the next fortnight?',
      focus: 'Crew and equipment commitments, conflicts, shortfalls, mobilisation tasks outstanding.',
    },
    {
      role: 'Head chef',
      question: 'What am I producing and for how many?',
      focus: 'Confirmed headcounts, menus and dietary requirements, stock issued, revisions since confirmation.',
    },
    {
      role: 'Accounts',
      question: 'What is held and what is owed?',
      focus: 'Deposits against undelivered events, unbilled delivered events, balances ageing, supplier payables.',
    },
  ],

  useCasesHeading: 'What caterers use Verity for',
  useCases: [
    {
      name: 'Headcount revision propagation',
      body: 'One event record, so a change to the headcount recalculates food, crew, equipment, transport and billing together.',
    },
    {
      name: 'Crew and equipment conflicts',
      body: 'Resources committed against events, so a double-booking on the same date is visible at confirmation rather than at loading.',
    },
    {
      name: 'Per-event costing',
      body: 'Food, crew hours, transport, equipment and breakages recorded against the event, so cost against quote is measured rather than believed.',
    },
    {
      name: 'Equipment issue and return',
      body: 'Event sites as locations, so what went out and what came back reconciles and shortfalls are attributable.',
    },
    {
      name: 'Quotation from actuals',
      body: 'Past events with their real costs as records, so a new quotation starts from what comparable work actually cost.',
    },
    {
      name: 'Planner and venue relationships',
      body: 'Planners and venues as records with their event history, since that is where repeat catering business comes from.',
    },
    {
      name: 'Deposit and balance control',
      body: 'Deposits held against undelivered events and balances aged from the event date rather than from a late invoice.',
    },
    {
      name: 'Asking the event book questions',
      body: 'Plain-language questions across events, crew, equipment and billing, with mobilisation tasks assigned in the same step.',
    },
  ],

  migration:
    'The event diary, the quotation templates and your billing arrangement are mapped during implementation. Clients, planners, venues, confirmed events and equipment lists are brought across, and Verity is introduced around the way the business already runs its calendar.',

  faqHeading: 'Questions caterers ask',
  faqs: [
    [
      'What can AI software do for a catering business?',
      'Verity AI answers questions from your own event, crew, stock and client records: which events in the next two weeks are short of crew, where equipment is committed to two events on the same date, which events had a headcount change without a price revision, what comparable events actually cost against what you quoted. Each answer can become a mobilisation or billing task.',
    ],
    [
      'Can Verity handle headcount changes?',
      'That is the main reason to use it here. The event is one record, so a revision recalculates the food requirement, the crew requirement, the equipment list, the transport and the price together rather than changing one of them and leaving the rest to memory.',
    ],
    [
      'Does it prevent double-booking crew and equipment?',
      'Crew and equipment are committed against events, so a conflict between two events on the same date is visible when the second is confirmed rather than when the van is being loaded.',
    ],
    [
      'Can it tell us what an event actually cost?',
      'Food consumed, crew hours from attendance, transport, equipment and breakages are all recorded against the event, so cost against quotation is measured. That is what makes the next quotation better than the last.',
    ],
    [
      'Does it track equipment that goes out to sites?',
      'Event sites are treated as locations, so equipment issued to an event and returned from it reconciles, and shortfalls are attributable to a specific event and crew rather than absorbed as a general expense.',
    ],
    [
      'Can it manage deposits and final billing?',
      'Deposits are recorded against the event, delivery raises the final billing task, and the balance is aged from the event date rather than from whenever the invoice was eventually raised.',
    ],
    [
      'Does Verity replace our accounting software?',
      'No. Accounting continues and is mapped during implementation. Verity holds the events, the resources, the costing and the operational reporting across them.',
    ],
    [
      'Is it suitable for a small catering operation?',
      'A small caterer running two events on one Saturday has the same conflict, revision and costing problems as a large one, with less capacity to absorb them.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how events are quoted and delivered, configuration, migration of clients, venues and confirmed events, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with what your events actually cost.',
  ctaLede:
    'Most caterers know their revenue precisely and their cost approximately, which is why some event types quietly lose money. Tell us how you quote today.',

  related: ['restaurants', 'event-venues', 'wedding-planners', 'hotels', 'cloud-kitchens', 'bakeries'],
};
