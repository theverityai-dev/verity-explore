export default {
  slug: 'salons',
  status: 'published',
  plural: 'salons',
  subject: 'salon',

  seo: {
    title: 'AI business management software for salons | Verity',
    description:
      'Verity connects clients, stylists, service history, retail stock and daily takings into one system, so repeat business and staff time stop being invisible.',
    keywords: [
      'AI software for salons',
      'salon management software',
      'salon client and stylist management',
      'beauty salon business software',
      'salon retail stock and reporting',
    ],
  },

  hero: {
    eyebrow: 'Verity for salons',
    headline: 'You know your regulars by face. The business does not know them at all.',
    lede:
      'A salon lives on repeat custom and staff time, and neither is recorded anywhere the owner can look at. Verity keeps clients, stylists, services and retail stock on one system that does not need an administrator.',
    note: 'Built to run without anyone whose job is maintaining a system.',
    panel: {
      title: 'Salon',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Takings today', value: '₹64,200', note: '38 services' },
        { label: 'Chair utilisation', value: '71%', note: 'of staffed hours' },
        { label: 'Clients gone quiet', value: '112', note: 'no visit in 90 days' },
        { label: 'Retail low', value: '6', note: 'lines below reorder' },
      ],
      rows: [
        { name: '112 regular clients have not visited in 90 days', meta: 'Previously visiting every 5–7 weeks', active: true },
        { name: 'Two stylists at 40% utilisation this week', meta: 'While two others are fully booked', active: true },
        { name: 'Colour stock short for weekend bookings', meta: 'Two shades · supplier delivers Thursday', active: true },
        { name: 'Retail products sold without being deducted', meta: '9 items · count mismatch', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own salon in this shape.',
    },
  },

  overview: {
    heading: 'The economics are simple. The record-keeping is what fails.',
    paragraphs: [
      'A salon makes money in two ways: filling staffed hours with services, and selling retail products alongside them. Both depend on clients coming back. A client who visited every six weeks and has not been in for three months is a real, measurable loss, and in most salons nobody knows it happened because the client history is in a diary and a set of memories.',
      'The second economic fact is that an unfilled hour is gone permanently. Two stylists at forty percent utilisation while two others are fully booked is a scheduling problem worth real money, and it is invisible unless someone is recording who did what and when.',
      'The third is retail. Products sold alongside services are a genuinely profitable line that almost no salon manages properly, because counting them is nobody’s job. Stock is checked when something runs out, sold without being deducted, and reordered late.',
      'What a salon almost never has is a person whose job is to maintain a system. That is the constraint any software here has to respect. Verity holds clients, staff, services, stock and takings as connected records created in the ordinary course of the day, so the owner gets a picture without anyone having to keep one.',
    ],
  },

  terminology: [
    ['Clients, regulars, walk-ins', 'Relationships'],
    ['Services, treatments, packages', 'Work'],
    ['Stylists, therapists, assistants', 'People'],
    ['Colour, consumables, retail products', 'Inventory'],
    ['Chairs, rooms, shifts', 'Workforce'],
    ['Product suppliers, brand distributors', 'Suppliers'],
    ['Branches, floors, stations', 'Locations'],
  ],

  challengesHeading: 'Everything that leaks, leaks quietly.',
  challengesLede:
    'A salon rarely has a crisis. It has a slow drift in retention, utilisation and stock that nobody measures.',
  challenges: [
    {
      problem: 'Repeat custom is not measured',
      detail:
        'The business knows its regulars by face and does not know when one stops coming. A client lost in March is noticed, if at all, in September.',
      outcome:
        'Visit history sits on the client record, so clients whose interval has lapsed become a list rather than a gradual absence.',
    },
    {
      problem: 'Staff time is booked, not analysed',
      detail:
        'Utilisation, no-shows and idle hours are absorbed as part of the day rather than recorded as a number.',
      outcome:
        'Services are work recorded against a stylist and a period, so utilisation is comparable across staff and across weeks.',
    },
    {
      problem: 'Retail stock is a side business nobody runs',
      detail:
        'Products sell without being deducted, are counted only when something runs out, and are reordered too late to matter.',
      outcome:
        'Retail and consumables are stock with levels and reorder points, deducted as they are sold or used.',
    },
    {
      problem: 'Client preferences live in a stylist’s head',
      detail:
        'The colour formula, the sensitivity, the way they like it finished — all known by one person, and lost when that person is off or leaves.',
      outcome:
        'Preferences and service history are on the client record, so any stylist picking up the appointment has the context.',
    },
    {
      problem: 'The owner is the system',
      detail:
        'Everything operational depends on one person noticing things — stock, bookings, staff, follow-ups — and that person is usually also working the floor.',
      outcome:
        'Records created in the ordinary course of the day produce the picture, so it does not depend on the owner’s attention.',
    },
    {
      problem: 'A second branch doubles the confusion',
      detail:
        'Two locations with two diaries and two stock cupboards mean no comparable numbers and no shared client history.',
      outcome:
        'Branches are locations rolling into the business, so clients, stock and performance are the same records across both.',
    },
  ],

  modulesLede:
    'One system, sized for a business without an administrator. These are the parts a salon works with.',
  modules: [
    {
      id: 'relationships',
      title: 'Clients and their history',
      line:
        'Each client is a record with their visit history, services taken, stylist preference, formulas, sensitivities and spend.',
      why:
        'Repeat custom is the whole business, and it is the thing least likely to be written down anywhere the owner can query.',
      example:
        'A client who came every five weeks for two years and has not been in since June is on a list, with the stylist who usually sees them.',
    },
    {
      id: 'work',
      title: 'Services and treatments',
      line:
        'Each service is work with a client, a stylist, a duration and a value, recorded as it is delivered.',
      why:
        'The service record is what connects the client, the staff member, the time and the money. Without it, none of those can be analysed.',
      example:
        'Thirty-eight services today, by stylist and by type, is the same data that produces both utilisation and client history.',
    },
    {
      id: 'people',
      title: 'Stylists, therapists and assistants',
      line:
        'Staff are modelled once, and every service, sale and client interaction shows who delivered it.',
      why:
        'Salon performance varies enormously by individual, and rewarding or supporting people fairly requires knowing what each actually did.',
      example:
        'Services delivered, retail sold and rebooking rate by stylist, from the records created during the day.',
    },
    {
      id: 'workforce',
      title: 'Shifts, chairs and utilisation',
      line:
        'Assignment, attendance and availability stay connected to the services they covered.',
      why:
        'An unfilled staffed hour is the salon’s most common loss and its least visible one.',
      example:
        'Two stylists at forty percent while two are fully booked is a scheduling decision waiting to be made.',
    },
    {
      id: 'inventory',
      title: 'Colour, consumables and retail',
      line:
        'Stock is held with supplier, cost and reorder point, deducted as it is used in services or sold to clients.',
      why:
        'Consumables determine whether the weekend’s bookings can be delivered, and retail is margin that is currently leaking.',
      example:
        'Two colour shades short against Saturday’s bookings, flagged while Thursday’s delivery can still cover it.',
    },
    {
      id: 'suppliers',
      title: 'Product suppliers and brands',
      line:
        'Suppliers are relationships with their orders, prices, delivery history and outstanding balances.',
      why:
        'Salon purchasing is small, frequent and unexamined, and price movement passes through unnoticed.',
      example:
        'The distributor’s prices on a core line have moved twice this year, visible from the purchase records.',
    },
    {
      id: 'intelligence',
      title: 'Reports from the day itself',
      line:
        'Takings, utilisation, retention, retail attachment, stock consumption and staff performance come from the service records.',
      why:
        'A salon owner usually knows the day’s takings and nothing else, because everything else would need someone to compile it.',
      example:
        'Rebooking rate by stylist, current, without anyone running a report.',
    },
    {
      id: 'ai',
      title: 'Ask the salon a question',
      line:
        'Verity AI answers from your own client, service, staff and stock records, respects permissions, and can create assigned follow-ups.',
      why:
        'The owner’s real questions are asked at the end of a long day and need an answer rather than a report to build.',
      example:
        '"Which regulars have not been in for ninety days?" returns a hundred and twelve, and one instruction assigns follow-ups to the stylists who usually see them.',
    },
    {
      id: 'communication',
      title: 'Notes that stay with the client',
      line:
        'Notes, notifications and activity attach to the client or service they concern.',
      why:
        'Salon context is passed verbally and lost the moment the stylist who holds it is unavailable.',
      example:
        'A note about a client’s reaction to a product is on their record, where the next stylist will see it.',
    },
    {
      id: 'workflows',
      title: 'Discounts, packages and write-offs',
      line:
        'Discounts beyond a threshold, package redemptions and stock write-offs move through defined steps with a recorded decision.',
      why:
        'Small discretionary decisions made at the counter are where a thin-margin business loses its margin.',
      example:
        'A discount above the manager’s threshold is an approval with a reason rather than a decision nobody sees.',
    },
    {
      id: 'locations',
      title: 'Branches and stations',
      line:
        'Locations roll into the business, with stock, permissions and reporting following the same structure.',
      why:
        'A second branch is where salon record-keeping usually collapses, because nothing is comparable.',
      example:
        'Takings, utilisation and retention by branch, from the same records rather than two diaries.',
    },
    {
      id: 'records',
      title: 'Service history and formulas',
      line:
        'Service details, formulas and product used attach to the client record with the same permissions as everything else.',
      why:
        'The formula is the salon’s intellectual property about that client, and it currently lives on a card or in a memory.',
      example:
        'A client returning after eight months has their last formula on record, available to whoever takes the appointment.',
    },
  ],

  workflowsHeading: 'The day, recorded as it is worked.',
  workflowsLede:
    'None of these ask anyone to do extra data entry. They are the records the day already produces.',
  workflows: [
    {
      name: 'Client visit',
      steps: [
        'Client identified or created at arrival',
        'Service recorded against the client and the stylist',
        'Products used deducted from consumable stock',
        'Retail sale recorded and deducted from retail stock',
        'Payment recorded and the visit closed',
        'Visit joins the client history and updates their interval',
      ],
      note:
        'One sequence produces the client record, the utilisation number, the stock movement and the day’s takings.',
    },
    {
      name: 'Lapsed client follow-up',
      steps: [
        'Clients past their usual visit interval identified',
        'Grouped by the stylist who usually sees them',
        'Follow-up assigned with the client’s history attached',
        'Outcome recorded — rebooked, declined or unreachable',
        'Interval reset once they return',
      ],
      note:
        'This is the single highest-value list a salon can work, and almost none can produce it today.',
    },
    {
      name: 'Consumable replenishment',
      steps: [
        'Stock falls below reorder point through recorded usage',
        'Requirement checked against the coming week’s bookings',
        'Order raised against the supplier',
        'Delivery received and stock updated',
      ],
      note:
        'Reordering follows usage rather than following someone noticing an empty tube.',
    },
    {
      name: 'Retail sale and stock',
      steps: [
        'Product sold alongside a service and recorded against the client',
        'Stock deducted as the product leaves the shelf',
        'Attachment rate recorded against the stylist',
        'Reorder raised when the line falls below its point',
      ],
      note:
        'Retail stops being an untracked side business and becomes a measurable margin line.',
    },
    {
      name: 'Roster and utilisation review',
      steps: [
        'Staffed hours compared with services delivered',
        'Utilisation compared across stylists and days',
        'Gaps identified against demand patterns',
        'Roster adjusted for the coming period',
      ],
      note:
        'Scheduling becomes a decision informed by the same weekday last month rather than by habit.',
    },
    {
      name: 'Package sale and redemption',
      steps: [
        'Package sold and recorded against the client with its balance',
        'Redemptions deducted as services are delivered',
        'Expiry and unused balance visible on the record',
        'Follow-up assigned where a package is going unused',
      ],
      note:
        'Prepaid packages become a tracked liability rather than an argument at the counter.',
    },
  ],

  ai: {
    heading: 'Ask at the end of the day, not at the end of the year.',
    lede:
      'Verity AI reads the same client, service, staff and stock records the salon creates as it works. It answers from your own salon, only shows what the person asking can see, and can turn an answer into follow-ups assigned to the right stylist.',
    panelMeta: 'Grounded in your salon records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which regular clients have not visited in ninety days?',
      'What was chair utilisation by stylist this week?',
      'Which stylists have the highest rebooking rate?',
      'Which retail lines are below reorder point?',
      'Which consumables fall short against this weekend’s bookings?',
      'How did this month’s takings compare with the same month last year?',
      'Which clients have unused package balances?',
      'What is the retail attachment rate by stylist?',
      'Summarise the salon’s performance this month.',
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede:
    'These run from the salon’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A client passes their usual visit interval',
      steps: [
        'Client flagged as lapsed with their history attached',
        'Follow-up assigned to the stylist who usually sees them',
        'Outcome recorded against the client',
      ],
    },
    {
      trigger: 'A service is completed',
      steps: [
        'Consumables used deducted from stock',
        'Service recorded against client and stylist',
        'Client history and visit interval updated',
      ],
    },
    {
      trigger: 'Stock falls below its reorder point',
      steps: [
        'Requirement checked against upcoming bookings',
        'Order raised against the supplier',
        'Delivery checked and stock updated on receipt',
      ],
    },
    {
      trigger: 'A discount exceeds the threshold',
      steps: [
        'Transaction held at the approval step',
        'Routed to the manager with the reason attached',
        'Decision recorded against the service',
      ],
    },
    {
      trigger: 'A package goes unused past a defined period',
      steps: [
        'Balance flagged against the client',
        'Follow-up assigned to rebook',
        'Expiry recorded if it lapses',
      ],
    },
    {
      trigger: 'A stylist’s utilisation falls below the threshold',
      steps: [
        'Gap flagged against the roster period',
        'Roster review task created for the manager',
        'Adjustment recorded for the next period',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see without compiling anything.',
  intelligenceLede:
    'All of it comes from the records the day already produces.',
  intelligence: [
    {
      area: 'Revenue',
      points: [
        'Takings by day, week and branch',
        'Service revenue against retail revenue',
        'Average spend per client visit',
        'Comparison against the same period last year',
      ],
    },
    {
      area: 'Clients',
      points: [
        'Visit frequency and interval per client',
        'Clients lapsed past their usual interval',
        'New clients and their return rate',
        'Highest-value clients by spend',
      ],
    },
    {
      area: 'Staff',
      points: [
        'Utilisation against staffed hours',
        'Services delivered by type and stylist',
        'Rebooking rate per stylist',
        'Retail attachment rate per stylist',
      ],
    },
    {
      area: 'Stock',
      points: [
        'Consumable usage against services delivered',
        'Retail stock levels and movement',
        'Lines below reorder point',
        'Supplier price movement over time',
      ],
    },
    {
      area: 'Services',
      points: [
        'Volume and revenue by service type',
        'Service duration against booked time',
        'Discounting patterns by service',
        'Package sales and redemption',
      ],
    },
    {
      area: 'Operations',
      points: [
        'No-shows and cancellations',
        'Approvals awaiting a decision',
        'Stock count mismatches',
        'Branch comparison across the business',
      ],
    },
  ],
  intelligenceNote:
    'None of this requires separate data entry. It comes from recording the visit, which the salon does anyway.',

  rolesHeading: 'A small team still needs different views.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they actually need.',
  roles: [
    {
      role: 'Owner',
      question: 'Is the salon growing or drifting?',
      focus: 'Takings against last year, client retention, utilisation, retail attachment, branch comparison.',
    },
    {
      role: 'Salon manager',
      question: 'What needs sorting this week?',
      focus: 'Roster gaps, consumables short, lapsed clients to follow up, approvals pending.',
    },
    {
      role: 'Stylist',
      question: 'What do I need to know about this client?',
      focus: 'Visit history, formulas and preferences, packages held, their usual interval.',
    },
    {
      role: 'Reception',
      question: 'Who is coming and what is outstanding?',
      focus: 'Today’s bookings, clients due a rebook, package balances, payments outstanding.',
    },
    {
      role: 'Accounts',
      question: 'What came in and what is owed?',
      focus: 'Daily takings, supplier payables, discounts and write-offs, package liability.',
    },
  ],

  useCasesHeading: 'What salons use Verity for',
  useCases: [
    {
      name: 'Client retention',
      body: 'Visit intervals held per client, so a regular who has stopped coming becomes a worked list rather than a gradual absence.',
    },
    {
      name: 'Chair and staff utilisation',
      body: 'Services recorded against staffed hours, so the unfilled time that quietly costs the most becomes a number.',
    },
    {
      name: 'Consumable and colour stock',
      body: 'Usage deducted as services are delivered, with reorder driven by the coming week’s bookings rather than by an empty shelf.',
    },
    {
      name: 'Retail as a managed line',
      body: 'Products deducted at sale with attachment rate by stylist, turning retail from an untracked sideline into measurable margin.',
    },
    {
      name: 'Formulas and preferences',
      body: 'Service history, formulas and sensitivities on the client record, available to whoever takes the appointment.',
    },
    {
      name: 'Package tracking',
      body: 'Prepaid packages with balances, redemptions and expiry on the client record instead of on a card.',
    },
    {
      name: 'Discount control',
      body: 'Discounts beyond a threshold as approvals with reasons, so margin decisions at the counter are visible.',
    },
    {
      name: 'Multi-branch comparison',
      body: 'Branches as locations with shared client records, so performance is comparable and a client is the same person at either site.',
    },
    {
      name: 'Asking the salon questions',
      body: 'Plain-language questions across clients, staff, stock and takings, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'The appointment book, the client cards, the stock cupboard list and whatever billing you use today are mapped during implementation. Client history and stock are brought across, and Verity is set up to fit the way the salon already runs its day.',

  faqHeading: 'Questions salon owners ask',
  faqs: [
    [
      'What can AI software do for a salon?',
      'Verity AI answers questions from your own client, service, staff and stock records. You can ask which regulars have not visited in ninety days, what utilisation looked like by stylist this week, which retail lines are below reorder, or which clients have unused packages — and turn the answer into follow-ups assigned to the right stylist.',
    ],
    [
      'Can Verity track client visit history?',
      'Yes. Each client is a record with their visits, services, stylist preference, formulas, sensitivities and spend, and their usual interval is derived from the history. That is what makes a lapsed regular a list entry rather than an eventual realisation.',
    ],
    [
      'Does it handle retail and colour stock?',
      'Consumables and retail products are stock with supplier, cost and reorder point, deducted as they are used in services or sold to clients. Replenishment can be checked against the coming week’s bookings rather than against a visual check.',
    ],
    [
      'Do we need someone to maintain the system?',
      'No, and that is a deliberate design point. The records that produce the reporting are created by recording the visit — client, service, stylist, products, payment — which the salon does anyway. There is no separate data-entry job.',
    ],
    [
      'Can it show which stylists are performing?',
      'Services delivered, utilisation against staffed hours, rebooking rate and retail attachment are all recorded per stylist, so performance can be discussed against numbers rather than impressions.',
    ],
    [
      'Does Verity book client appointments?',
      'Verity records services as work against clients and stylists and shows the day’s schedule and utilisation. It is not a client-facing booking tool. If you run one, it is mapped during implementation and continues to work alongside Verity.',
    ],
    [
      'Does it work across two or three branches?',
      'Yes. Branches are locations that roll into the business with shared client records, so a client is the same person at either site and takings, utilisation and retention are directly comparable.',
    ],
    [
      'Is it suitable for a small salon with four chairs?',
      'A four-chair salon has the same three leaks — lapsed clients, unfilled hours and untracked retail — and less capacity to notice them. That is exactly the case Verity is sized for.',
    ],
    [
      'How long does it take to set up?',
      'About four weeks: discovery and mapping of how the salon actually runs its day, configuration, migration of client history and stock, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the regulars who stopped coming.',
  ctaLede:
    'It is usually the fastest money in a salon, and almost no salon can produce the list today. Tell us how yours runs and we will show you.',

  related: ['spas', 'gyms', 'fitness-studios', 'yoga-studios', 'beauty-stores', 'cosmetics-stores'],
};
