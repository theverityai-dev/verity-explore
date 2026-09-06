export default {
  slug: 'spas',
  status: 'published',
  plural: 'spas',
  subject: 'spa',

  seo: {
    title: 'AI business management software for spas | Verity',
    description:
      'Verity connects room and therapist capacity, package liabilities, product consumption per treatment, membership renewals and client history into one system.',
    keywords: [
      'AI software for spas',
      'spa management software',
      'treatment room and therapist utilisation',
      'spa package liability and product consumption tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for spas',
    headline: 'You sold ninety treatments in advance. You have delivered forty.',
    lede:
      'Prepaid packages are a spa’s cash flow and its unbilled obligation at the same time. Verity tracks the liability, the room capacity that has to absorb it, and the product each treatment consumes.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Spa',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Treatments delivered', value: '486', note: 'across 6 rooms' },
        { label: 'Room utilisation', value: '58%', note: 'of available hours' },
        { label: 'Package liability', value: '₹22 L', note: '1,240 treatments owed' },
        { label: 'Product cost', value: '₹184', note: 'per treatment, up ₹31' },
      ],
      rows: [
        { name: '1,240 prepaid treatments owed, 310 expiring in 90 days', meta: 'Clients not booked · refund and reputation risk', active: true },
        { name: 'Room utilisation at 58% while weekends are fully booked', meta: 'Weekday capacity unused', active: true },
        { name: 'Product cost per treatment up 20% with no price change', meta: 'Consumption above standard on three treatments', active: true },
        { name: '96 members have not visited in 60 days', meta: 'Renewals due within the quarter', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own spa in this shape.',
    },
  },

  overview: {
    heading: 'A spa sells time in advance and delivers it against a fixed capacity.',
    paragraphs: [
      'Spas take money before they do the work. Packages, memberships and prepaid courses are the standard commercial model, and they produce cash today against an obligation to deliver treatments later. That obligation is real, it accumulates, and most spas do not know its size.',
      'The obligation matters because capacity is fixed. A spa has a set number of rooms and therapist hours, and prepaid treatments have to be delivered inside them alongside walk-in and new business. A large unredeemed package balance concentrated in a short window is a capacity problem the business has already been paid for and may not be able to honour.',
      'The second difference from a salon is product consumption. Treatments consume oils, creams and disposables against a standard quantity, and consumption above standard is invisible unless it is measured per treatment. On a rising product cost, twenty percent above standard is a margin line disappearing quietly.',
      'The third is that utilisation is uneven rather than low. Weekends full and weekdays empty is not a demand problem — it is a scheduling and offer problem, and it looks the same as low demand in a monthly average.',
      'The fourth is that spa clients are relationship-driven and lapse silently, particularly members who have stopped visiting well before their renewal.',
      'Verity records the package liability, the room and therapist capacity, the consumption per treatment and the client’s visit pattern.',
    ],
  },

  terminology: [
    ['Treatments, courses, packages', 'Work'],
    ['Clients, members, gift recipients', 'Relationships'],
    ['Therapists, rooms, shifts', 'Workforce'],
    ['Oils, creams, disposables, retail', 'Inventory'],
    ['Package liability, expiry, refunds', 'Workflows'],
    ['Rooms, floors, locations', 'Locations'],
    ['Consumption, utilisation, retention', 'Intelligence'],
  ],

  challengesHeading: 'Money taken in advance against capacity that is fixed.',
  challengesLede:
    'Spa difficulties come from a prepaid model measured as revenue rather than as obligation.',
  challenges: [
    {
      problem: 'Package liability is unmeasured',
      detail:
        'Treatments are sold in advance and redeemed over months, and the total owed is known only when someone adds it up.',
      outcome:
        'Every package carries its remaining balance and expiry, so the obligation and its concentration are current numbers.',
    },
    {
      problem: 'Packages expire unredeemed and become disputes',
      detail:
        'A client with treatments remaining reaches expiry without being booked, and the conversation that follows costs the relationship.',
      outcome:
        'Balances approaching expiry raise booking prompts well before the date.',
    },
    {
      problem: 'Capacity is uneven rather than short',
      detail:
        'Weekends are fully booked and weekdays are half empty, which appears in a monthly average as moderate utilisation.',
      outcome:
        'Utilisation is measured by room, therapist and time band, so the imbalance is visible and addressable.',
    },
    {
      problem: 'Product consumption exceeds standard',
      detail:
        'Treatments consume more product than the standard quantity, and on rising costs the margin erodes without any decision being made.',
      outcome:
        'Consumption is recorded per treatment against standard, so divergence is a specific number by treatment and therapist.',
    },
    {
      problem: 'Members lapse before their renewal',
      detail:
        'A member stops visiting months before the renewal date and is contacted when the decision is already made.',
      outcome:
        'Visit patterns raise a signal with the renewal date attached, while re-engagement is still possible.',
    },
    {
      problem: 'Therapist skills constrain scheduling invisibly',
      detail:
        'Not every therapist delivers every treatment, so an apparently free slot cannot actually take the booking requested.',
      outcome:
        'Therapist qualifications are recorded against treatments, so availability reflects what can actually be delivered.',
    },
  ],

  modulesLede:
    'One system across packages, capacity, consumption and clients.',
  modules: [
    {
      id: 'work',
      title: 'Treatments, courses and packages',
      line:
        'Each treatment is work with a client, therapist, room, duration, products consumed and the package it redeems against.',
      why:
        'The treatment is where capacity, product cost and package liability all meet.',
      example:
        'Four hundred and eighty-six treatments delivered against a liability of twelve hundred and forty still owed.',
    },
    {
      id: 'workflows',
      title: 'Package liability, expiry and refunds',
      line:
        'Package sale, redemption, expiry, extension and refund move through defined steps with recorded decisions.',
      why:
        'Prepaid balances are an obligation, and expiry decisions carry both a financial and a reputational cost.',
      example:
        'Three hundred and ten treatments expiring within ninety days, with booking prompts raised.',
    },
    {
      id: 'workforce',
      title: 'Rooms, therapists and utilisation',
      line:
        'Room and therapist availability is recorded with qualifications, bookings and delivered time.',
      why:
        'Capacity is fixed and skill-constrained, so a free room is not always a bookable slot.',
      example:
        'Fifty-eight percent utilisation concealing full weekends and empty weekdays.',
    },
    {
      id: 'inventory',
      title: 'Oils, creams, disposables and retail',
      line:
        'Stock is held with supplier, cost and standard consumption per treatment, deducted as treatments are delivered.',
      why:
        'Product is a real per-treatment cost that moves with supplier prices and with therapist practice.',
      example:
        'Product cost per treatment up twenty percent, traced to three treatments consuming above standard.',
    },
    {
      id: 'relationships',
      title: 'Clients, members and gift recipients',
      line:
        'Clients are records with their treatment history, preferences, sensitivities, package balances, membership and visit pattern.',
      why:
        'Spa business is repeat and referral-driven, and a lapsing client is the most recoverable loss available.',
      example:
        'Ninety-six members who have not visited in sixty days with renewals due this quarter.',
    },
    {
      id: 'people',
      title: 'Therapists and front desk',
      line:
        'Staff are modelled once with qualifications, and every treatment, product use and sale carries who delivered it.',
      why:
        'Retention, rebooking and product consumption all vary by therapist.',
      example:
        'Rebooking rate and product consumption against standard by therapist.',
    },
    {
      id: 'records',
      title: 'Treatment protocols and client notes',
      line:
        'Protocols, standard quantities, contraindications and client notes attach to the treatment or client they concern.',
      why:
        'Sensitivities and preferences must be visible to whoever delivers the next treatment.',
      example:
        'A recorded contraindication visible to the therapist before the treatment begins.',
    },
    {
      id: 'intelligence',
      title: 'Liability, utilisation and consumption reporting',
      line:
        'Package liability and expiry profile, utilisation by room, therapist and time band, consumption against standard, retention and membership renewal come from the operational records.',
      why:
        'A prepaid business needs liability reporting, and most spas report revenue instead.',
      example:
        'Liability by expiry month against the capacity available to deliver it.',
    },
    {
      id: 'ai',
      title: 'Ask the spa a question',
      line:
        'Verity AI answers from your own treatment, package, stock and client records, respects permissions, and can create assigned follow-ups.',
      why:
        'The important questions are about obligations coming due and clients quietly lapsing.',
      example:
        '"Which package balances expire within ninety days?" returns three hundred and ten with booking calls assigned.',
    },
    {
      id: 'communication',
      title: 'Client notes and contact recorded',
      line:
        'Notes, reminders and contact attach to the client or package they concern.',
      why:
        'A booking prompt is only useful if the last conversation is visible.',
      example:
        'A client who deferred until after travel, so the reminder is timed accordingly.',
    },
    {
      id: 'control',
      title: 'Who can discount, extend and refund',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Package extensions and refunds are the decisions that determine whether liability closes cleanly.',
      example:
        'An extension recorded as an approval with its effect on the liability.',
    },
    {
      id: 'locations',
      title: 'Rooms, floors and sites',
      line:
        'Locations roll into the business, with rooms, stock and reporting following the same structure.',
      why:
        'Room-level utilisation is the capacity constraint, and multi-site spas need it comparable.',
      example:
        'Utilisation and liability by site and by room.',
    },
  ],

  workflowsHeading: 'Sold in advance, delivered against capacity.',
  workflowsLede:
    'These already happen. As records, the obligation stops being invisible.',
  workflows: [
    {
      name: 'Package sale and liability',
      steps: [
        'Package sold with treatments, value and expiry recorded',
        'Liability added against the client and the business',
        'First appointments booked while the client is still at the desk',
        'Balance tracked as treatments are redeemed',
        'Expiry approach raises booking prompts',
      ],
      note:
        'Booking the first appointments while the client is still present is the strongest predictor of a package being redeemed.',
    },
    {
      name: 'Treatment delivery',
      steps: [
        'Booking made against room, therapist qualification and time',
        'Client notes and contraindications surfaced to the therapist',
        'Treatment delivered and recorded',
        'Product consumption recorded against standard',
        'Package balance reduced or payment taken',
        'Rebooking offered and recorded',
      ],
      note:
        'Recording consumption at delivery is what makes product cost per treatment a manageable number.',
    },
    {
      name: 'Capacity balancing',
      steps: [
        'Utilisation pulled by room, therapist and time band',
        'Imbalance between peak and off-peak identified',
        'Package holders with expiring balances matched to off-peak capacity',
        'Offers or prompts issued for those slots',
        'Result measured against the previous period',
      ],
      note:
        'Redeeming expiring packages into empty weekday capacity solves two problems with one action.',
    },
    {
      name: 'Consumption review',
      steps: [
        'Product consumed compared against standard per treatment',
        'Divergence by treatment and therapist identified',
        'Cost movement from purchases applied',
        'Price or protocol review raised where margin falls',
        'Outcome recorded against the treatment',
      ],
      note:
        'Consumption above standard is a training question before it is a pricing question.',
    },
    {
      name: 'Member and client retention',
      steps: [
        'Visit patterns compared against each client’s norm',
        'Lapsing clients and members identified with renewal dates',
        'Contact assigned with history attached',
        'Outcome recorded and re-engagement tracked',
        'Renewal conversation prioritised by risk',
      ],
      note:
        'A member who lapsed two months ago is far more recoverable than one contacted at renewal.',
    },
    {
      name: 'Expiry and refund decisions',
      steps: [
        'Balances approaching expiry identified with client history',
        'Booking prompts issued before the date',
        'Extension or refund requested where treatments remain',
        'Decision approved and recorded',
        'Liability adjusted accordingly',
      ],
      note:
        'An expiry handled before the date is a booking; handled after it, it is a dispute.',
    },
  ],

  ai: {
    heading: 'Ask what you owe and when.',
    lede:
      'Verity AI reads the same treatment, package, stock and client records the spa creates as it works. It answers from your own business, respects permissions, and can turn an answer into booking calls.',
    panelMeta: 'Grounded in your spa records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is our total package liability and when does it expire?',
      'Which clients have balances expiring within ninety days and no bookings?',
      'What is utilisation by room, therapist and time band?',
      'Where is product consumption above standard?',
      'Which members have not visited in sixty days with renewals due?',
      'What is product cost per treatment and how has it moved?',
      'Which therapists have the highest rebooking rate?',
      'Which treatments are most profitable after product cost?',
      'Summarise liability against available capacity.',
    ],
  },

  automationHeading: 'The obligations coming due.',
  automationLede:
    'Each runs from the spa’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A package balance approaches expiry',
      steps: [
        'Client flagged with remaining treatments and history',
        'Booking prompt assigned with off-peak availability attached',
        'Extension or refund decision raised if unbooked',
      ],
    },
    {
      trigger: 'A package is sold',
      steps: [
        'Liability recorded with expiry',
        'First appointments booked while the client is still at the desk',
        'Redemption tracked against the balance',
      ],
    },
    {
      trigger: 'Product consumption exceeds standard',
      steps: [
        'Divergence flagged by treatment and therapist',
        'Review assigned to the spa manager',
        'Outcome recorded against the treatment protocol',
      ],
    },
    {
      trigger: 'A client passes their usual visit interval',
      steps: [
        'Client flagged with pattern and any membership renewal date',
        'Contact assigned with history attached',
        'Outcome recorded on the client record',
      ],
    },
    {
      trigger: 'Off-peak capacity is unused',
      steps: [
        'Available slots surfaced against expiring package balances',
        'Prompts issued to matched clients',
        'Result recorded against the period',
      ],
    },
    {
      trigger: 'A refund or extension is requested',
      steps: [
        'Request held at the approval step with liability effect attached',
        'Decision recorded against the package',
        'Liability adjusted accordingly',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can actually see.',
  intelligenceLede:
    'Obligation, capacity and cost from the treatments the spa delivers.',
  intelligence: [
    {
      area: 'Liability',
      points: [
        'Total package liability by value and treatments',
        'Expiry profile by month',
        'Redemption rate against sales',
        'Extensions and refunds granted',
      ],
    },
    {
      area: 'Capacity',
      points: [
        'Utilisation by room, therapist and time band',
        'Peak against off-peak imbalance',
        'Bookings constrained by therapist qualification',
        'Liability against capacity available to deliver it',
      ],
    },
    {
      area: 'Cost',
      points: [
        'Product consumption against standard per treatment',
        'Product cost per treatment over time',
        'Margin by treatment after product cost',
        'Retail sales and attachment',
      ],
    },
    {
      area: 'Clients',
      points: [
        'Visit frequency and lapsing clients',
        'Membership renewal risk from visit patterns',
        'Rebooking rate by therapist',
        'Referral and gift recipient conversion',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from recording the treatment, its products and the package it redeems against.',

  rolesHeading: 'One spa, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What do we owe and can we deliver it?',
      focus: 'Package liability and expiry profile, capacity against it, product cost per treatment, retention.',
    },
    {
      role: 'Spa manager',
      question: 'What needs booking this week?',
      focus: 'Expiring balances, off-peak capacity, lapsing clients, consumption divergence.',
    },
    {
      role: 'Therapist',
      question: 'Who am I seeing and what do they need?',
      focus: 'Bookings, client notes and contraindications, package balances, products to record.',
    },
    {
      role: 'Reception',
      question: 'Who should be rebooked?',
      focus: 'Clients due, package balances remaining, memberships approaching renewal, availability.',
    },
  ],

  useCasesHeading: 'What spas use Verity for',
  useCases: [
    {
      name: 'Package liability tracking',
      body: 'Prepaid treatments as a measured obligation with an expiry profile, rather than as revenue already recognised and forgotten.',
    },
    {
      name: 'Expiry-driven booking',
      body: 'Balances approaching expiry raising booking prompts before the date, when the outcome is an appointment rather than a dispute.',
    },
    {
      name: 'Room and therapist utilisation',
      body: 'Utilisation by room, therapist and time band, exposing peak-and-empty imbalance that a monthly average hides.',
    },
    {
      name: 'Product consumption against standard',
      body: 'Consumption recorded per treatment, so cost per treatment is manageable and divergence is attributable.',
    },
    {
      name: 'Qualification-aware scheduling',
      body: 'Therapist qualifications recorded against treatments, so an available room is genuinely a bookable slot.',
    },
    {
      name: 'Member retention',
      body: 'Visit patterns raising signals ahead of renewal, when a lapsing member is still recoverable.',
    },
    {
      name: 'Off-peak redemption',
      body: 'Expiring package balances matched to unused weekday capacity, solving the obligation and the utilisation together.',
    },
    {
      name: 'Asking about liability',
      body: 'Plain-language questions across packages, capacity, consumption and clients, with bookings assigned in the same step.',
    },
  ],

  migration:
    'Your billing setup continues to run and is mapped during implementation. Clients, package balances and expiries, memberships, treatment protocols and stock are brought across, and Verity is configured around how the spa already runs its day.',

  faqHeading: 'Questions spa owners ask',
  faqs: [
    [
      'What can AI software do for a spa?',
      'Verity AI answers questions from your own treatment, package, stock and client records: what your total package liability is and when it expires, which clients have balances expiring without bookings, what utilisation looks like by room and time band, where product consumption is above standard. Each answer can become a booking call.',
    ],
    [
      'How does it handle prepaid packages?',
      'A package is recorded with its treatments, value and expiry, and the remaining balance is tracked as treatments are redeemed. That makes the obligation a measured number rather than revenue that was recognised at sale and then forgotten.',
    ],
    [
      'Why does expiry matter so much?',
      'A client with treatments remaining who reaches expiry unbooked becomes a dispute that costs the relationship. Handled before the date it is simply an appointment — often into the off-peak capacity the spa is trying to fill anyway.',
    ],
    [
      'Can it measure utilisation properly?',
      'Utilisation is measured by room, therapist and time band rather than as a monthly average, which is how full weekends and empty weekdays appear as moderate utilisation and get treated as a demand problem.',
    ],
    [
      'Does it track product consumption?',
      'Products are consumed against a standard quantity per treatment and recorded at delivery, so cost per treatment is visible and divergence is attributable to a treatment and a therapist rather than absorbed into general expense.',
    ],
    [
      'Does it account for therapist qualifications?',
      'Qualifications are recorded against treatments, so availability reflects what can actually be delivered rather than which rooms happen to be free.',
    ],
    [
      'Does Verity replace our billing software?',
      'No. Billing continues and is mapped during implementation. Verity holds packages and liability, capacity, consumption, clients and the reporting across them.',
    ],
    [
      'Can it help with membership retention?',
      'Visit patterns raise a signal with the renewal date attached, so a member who lapsed two months ago is contacted while they are still recoverable rather than at renewal, when the decision has been made.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of treatments, packages and capacity, configuration of protocols and standards, migration of clients and package balances, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with what you have already been paid for.',
  ctaLede:
    'Most spas are surprised by the size of their package liability and by how much of it expires soon. Tell us how balances are tracked today.',

  related: ['salons', 'gyms', 'yoga-studios', 'fitness-studios', 'hotels', 'cosmetics-stores'],
};
