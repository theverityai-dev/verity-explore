export default {
  slug: 'car-washes',
  status: 'published',
  plural: 'car washes',
  subject: 'car wash',

  seo: {
    title: 'AI business management software for car washes | Verity',
    description:
      'Verity gives car washes one system for throughput per bay, consumable and water cost per wash, weather-driven demand, staffing to the hour and plan member behaviour.',
    keywords: [
      'AI software for car washes',
      'car wash management software',
      'bay throughput and consumable cost software',
      'car wash membership and staffing software',
    ],
  },

  hero: {
    eyebrow: 'Verity for car washes',
    headline: 'Six vehicles an hour or eleven. Same staff, same bay, very different business.',
    lede:
      'A car wash is a throughput business with a consumable cost per vehicle. Verity measures both, hour by hour, against the staff you rostered.',
    note: 'Verity runs the site. Wash equipment and payment terminals stay where they are.',
    panel: {
      title: 'Site',
      meta: 'This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Vehicles washed', value: '2,140', note: '3 bays' },
        { label: 'Peak throughput', value: '11.2/hour', note: 'off-peak 4.1' },
        { label: 'Consumable cost', value: '₹34/wash', note: 'target ₹27' },
        { label: 'Plan members inactive', value: '86', note: 'paying, not visiting' },
      ],
      rows: [
        { name: 'Consumable cost ₹7 above target per wash', meta: 'Concentrated on one bay', active: true },
        { name: 'Staffed for peak on 3 low-demand days', meta: 'Labour above requirement', active: true },
        { name: '86 plan members not visiting', meta: 'Cancellation risk building', active: true },
        { name: '2 machines overdue for service', meta: 'Throughput falling on bay 3', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own site in this shape.',
    },
  },

  overview: {
    heading: 'Small ticket, high volume, and every input measured per vehicle.',
    paragraphs: [
      'A car wash earns a small amount many times. That makes throughput the primary variable: eleven vehicles an hour at peak and four off-peak is the same site running as two different businesses, and the labour rostered against those hours decides whether either is profitable.',
      'The second characteristic is consumable cost per vehicle. Chemicals, water, cloth and power are consumed per wash, and seven rupees above target across two thousand washes is a real monthly amount — usually concentrated on one bay, one shift or one wash type rather than spread evenly.',
      'The third is that demand is weather-driven and highly uneven. Staffing to an average produces overstaffed slow days and queues on busy ones, and the pattern is knowable from the site’s own history.',
      'The fourth is that unlimited plans change the economics. A member who does not visit is profit and a member who visits daily is a cost, and eighty-six inactive members is both current margin and imminent cancellation.',
      'The fifth is machine condition, which shows up as falling throughput before it shows up as a breakdown.',
      'Verity measures throughput and consumable cost per bay and per hour, holds plan member behaviour, and connects staffing to demand.',
    ],
  },

  terminology: [
    ['Wash types, packages, add-ons', 'Work'],
    ['Bays, tunnels, machines', 'Locations'],
    ['Chemicals, water, cloth, power', 'Inventory'],
    ['Plan members, walk-ins, fleet accounts', 'Relationships'],
    ['Throughput, queue, cycle time', 'Workflows'],
    ['Attendants, shifts, rosters', 'People'],
    ['Pricing, discounts, approvals', 'Control'],
  ],

  challengesHeading: 'Throughput, consumables and a demand curve nobody plans against.',
  challengesLede:
    'Car wash difficulties come from small margins multiplied by volume.',
  challenges: [
    { problem: 'Throughput is not measured by bay and hour', detail: 'Volume is known daily and the hourly capacity picture is not.', outcome: 'Cycle time and throughput are recorded per bay and hour.' },
    { problem: 'Consumable cost per wash is unknown', detail: 'Chemicals are bought in bulk and consumed without attribution.', outcome: 'Consumption is recorded against washes, giving cost per vehicle by bay and type.' },
    { problem: 'Staffing does not follow demand', detail: 'Rosters are built on habit rather than on the site’s own hourly pattern.', outcome: 'Demand by hour and day informs the roster, with labour cost per wash visible.' },
    { problem: 'Plan members are not watched', detail: 'Unlimited plans are sold and usage behaviour is never examined.', outcome: 'Visit frequency per member is tracked, showing both cost and cancellation risk.' },
    { problem: 'Machine decline is seen as demand decline', detail: 'Throughput falls because a machine is slowing and it looks like fewer customers.', outcome: 'Cycle time per bay is monitored, so equipment decline is separated from demand.' },
    { problem: 'Add-on sales are inconsistent', detail: 'Higher-margin add-ons depend on which attendant is working.', outcome: 'Attachment rate is measured by attendant and shift.' },
  ],

  modulesLede: 'One system across bays, consumables, staffing and members.',
  modules: [
    { id: 'workflows', title: 'Throughput, cycle time and queue', line: 'Each wash records its bay, type, start and finish, attendant and add-ons, producing throughput and cycle time by hour.', why: 'Throughput is the business, and it is only manageable at the hour and bay level.', example: 'Eleven vehicles an hour at peak against four off-peak.' },
    { id: 'inventory', title: 'Chemicals, water and consumables', line: 'Consumption is recorded against washes and bays, giving cost per vehicle by wash type.', why: 'A few rupees per wash is a large monthly number at volume.', example: 'Consumable cost seven rupees above target per wash.' },
    { id: 'locations', title: 'Bays, machines and site layout', line: 'Bays carry equipment, service state, cycle time and throughput history.', why: 'Machine decline shows as slower cycles before it shows as failure.', example: 'Falling throughput on one bay ahead of a service.' },
    { id: 'people', title: 'Attendants, shifts and rosters', line: 'Staff carry shifts, washes handled, cycle times and add-on attachment.', why: 'Labour is the largest controllable cost and it is rostered by hour.', example: 'Labour cost per wash by shift.' },
    { id: 'relationships', title: 'Plan members, walk-ins and fleet accounts', line: 'Members carry plan type, visit frequency, cost to serve and lapse risk; fleet accounts carry vehicles and terms.', why: 'An unlimited plan is only profitable at certain usage levels.', example: 'Eighty-six plan members not visiting.' },
    { id: 'work', title: 'Wash types, packages and add-ons', line: 'Each wash type carries its price, expected cycle time, consumable profile and margin.', why: 'Different wash types have very different margins at the same price point.', example: 'Margin by wash type after consumables and labour.' },
    { id: 'intelligence', title: 'Throughput, cost and member reporting', line: 'Throughput by hour and bay, consumable and labour cost per wash, member usage, add-on attachment and machine performance come from the records.', why: 'At small margins, per-vehicle measurement is the only useful measurement.', example: 'Cost per wash by bay, shift and type.' },
    { id: 'ai', title: 'Ask the site a question', line: 'Verity AI answers from your own wash, consumable, staffing and member records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about cost per wash and demand by hour.', example: '"Which hours are overstaffed against demand?" returns the pattern by day.' },
    { id: 'schedule', title: 'Demand patterns and rostering', line: 'Historical demand by hour, day and season informs rosters and opening decisions.', why: 'Demand is uneven and predictable from the site’s own record.', example: 'Roster built against demand by hour rather than an average.' },
    { id: 'orders', title: 'Plans, packages and prepaid washes', line: 'Plans, prepaid packages and fleet billing carry usage, balance and renewal.', why: 'Prepaid balances are liability and usage is the margin.', example: 'Prepaid wash balances outstanding by customer.' },
    { id: 'control', title: 'Pricing, discounts and approvals', line: 'One permission model and one audit trail covering pricing, discounts and rewashes.', why: 'Free rewashes given informally are unrecorded cost.', example: 'Rewashes recorded with reason and attendant.' },
    { id: 'communication', title: 'Member contact', line: 'Inactivity follow-up, plan renewals and fleet account contact attach to the customer.', why: 'An inactive member cancels unless something reaches them.', example: 'Contact raised for members who have not visited in a month.' },
  ],

  workflowsHeading: 'Arrive, wash, record, restock, review.',
  workflowsLede: 'These already happen. Recorded, the per-vehicle economics become visible.',
  workflows: [
    { name: 'Wash cycle', steps: ['Vehicle received with wash type and add-ons', 'Bay and attendant assigned', 'Start and finish recorded', 'Consumables attributed', 'Payment or plan usage recorded'], note: 'Start and finish times are what produce cycle time and throughput.' },
    { name: 'Consumable control', steps: ['Stock issued to bays', 'Consumption attributed to washes', 'Cost per wash calculated by type and bay', 'Variance against target reviewed', 'Dilution or process corrected'], note: 'Concentration of overuse on one bay usually points to dilution settings.' },
    { name: 'Rostering to demand', steps: ['Demand by hour and day compiled from history', 'Roster built to match the curve', 'Actual throughput compared with staffing', 'Labour cost per wash reviewed', 'Roster adjusted'], note: 'Staffing to an average guarantees being wrong in both directions.' },
    { name: 'Plan member review', steps: ['Visit frequency compiled per member', 'High-usage and inactive members identified', 'Cost to serve compared with plan price', 'Contact raised for inactivity', 'Plan structure reviewed'], note: 'Inactive members are the cancellations that have not happened yet.' },
    { name: 'Machine condition', steps: ['Cycle time monitored per bay', 'Decline compared with service history', 'Service scheduled before failure', 'Throughput after service compared', 'Maintenance record updated'], note: 'Slowing cycle time is the earliest available failure warning.' },
  ],

  ai: {
    heading: 'Ask about cost per wash and demand.',
    lede: 'Verity AI reads the same wash, consumable, staffing and member records the site creates as it operates. It answers from your own site, respects permissions, and can turn an answer into a roster change or a member contact.',
    panelMeta: 'Grounded in your site records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is consumable cost per wash by bay and type?',
      'Which hours are overstaffed against actual demand?',
      'Which plan members have not visited this month?',
      'Which plan members visit often enough to be loss-making?',
      'Which bay has the slowest cycle time and is it worsening?',
      'What is add-on attachment by attendant?',
      'What is throughput by hour and day of week?',
      'What did rewashes cost this month?',
      'Summarise throughput and cost per wash.',
    ],
  },

  automationHeading: 'Cost, demand and members.',
  automationLede: 'Each runs from the site’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Consumable cost per wash exceeds target', steps: ['Flagged by bay, shift and wash type', 'Dilution or process check assigned', 'Cost position updated'] },
    { trigger: 'Cycle time on a bay slows against its history', steps: ['Flagged with throughput impact', 'Service scheduled', 'Performance compared after service'] },
    { trigger: 'A plan member stops visiting', steps: ['Inactivity flagged with plan value', 'Contact assigned', 'Outcome recorded'] },
    { trigger: 'Staffing exceeds demand for a period', steps: ['Labour cost per wash surfaced', 'Roster adjustment proposed', 'Change recorded'] },
    { trigger: 'A rewash is given', steps: ['Reason and attendant recorded', 'Cost attributed', 'Pattern surfaced by cause'] },
  ],

  intelligenceHeading: 'What the site can see.',
  intelligenceLede: 'Throughput, cost and member behaviour from wash records.',
  intelligence: [
    { area: 'Throughput', points: ['Vehicles per hour by bay', 'Cycle time and its trend', 'Queue and peak behaviour', 'Capacity used against available hours'] },
    { area: 'Cost', points: ['Consumable cost per wash by type and bay', 'Labour cost per wash by shift', 'Rewash cost and causes', 'Margin by wash type'] },
    { area: 'Demand', points: ['Volume by hour, day and season', 'Staffing against demand', 'Walk-in against plan mix', 'Add-on attachment by attendant'] },
    { area: 'Members', points: ['Visit frequency per member', 'Cost to serve against plan price', 'Inactive members and lapse risk', 'Fleet account volumes'] },
  ],
  intelligenceNote: 'Verity records the site’s operations. Wash equipment and payment terminals continue as they are.',

  rolesHeading: 'One site, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'What does a wash cost and earn?', focus: 'Cost per wash, throughput by bay, member economics, machine performance.' },
    { role: 'Site manager', question: 'Is today staffed correctly?', focus: 'Demand by hour, roster against the curve, bay availability, queue.' },
    { role: 'Attendant', question: 'What is queued and what does it need?', focus: 'Wash types in progress, add-ons, consumables at the bay, rewashes.' },
    { role: 'Accounts', question: 'What is plan revenue really worth?', focus: 'Plan usage against price, prepaid balances, fleet billing, discounts.' },
  ],

  useCasesHeading: 'What car washes use Verity for',
  useCases: [
    { name: 'Measuring throughput by hour and bay', body: 'Cycle times and volumes recorded per bay and hour, so peak and off-peak are managed as the different businesses they are.' },
    { name: 'Cost per wash', body: 'Chemicals, water and consumables attributed to washes, giving a per-vehicle cost by bay and wash type rather than a bulk purchase figure.' },
    { name: 'Rostering to the demand curve', body: 'Historical demand by hour and day driving the roster, with labour cost per wash visible against it.' },
    { name: 'Plan member economics', body: 'Visit frequency per member showing both loss-making heavy users and inactive members about to cancel.' },
    { name: 'Catching machine decline early', body: 'Cycle time monitored per bay, so slowing equipment is separated from falling demand and serviced before it fails.' },
    { name: 'Add-on attachment', body: 'Higher-margin add-ons measured by attendant and shift, making inconsistency addressable.' },
    { name: 'Asking about the site', body: 'Plain-language questions across throughput, cost, staffing and members, with roster changes and contact raised in the same step.' },
  ],

  migration: 'Wash equipment and payment terminals continue and are mapped during implementation. Wash types and pricing, plan members with usage history, fleet accounts, consumable records and staffing patterns are brought across.',

  faqHeading: 'Questions car washes ask',
  faqs: [
    ['What can AI software do for a car wash?', 'Verity AI answers questions from your own wash, consumable, staffing and member records: what consumable cost per wash is by bay and type, which hours are overstaffed against demand, which plan members have stopped visiting, which bay is slowing. Each answer can become a roster change or a member contact.'],
    ['Why measure throughput by bay and hour?', 'Because a site running at eleven vehicles an hour at peak and four off-peak is two different businesses sharing a location. Staffing, queueing and margin all differ, and only hourly measurement makes either half manageable.'],
    ['How is consumable cost per wash calculated?', 'Consumption is attributed to washes by bay and type rather than treated as a bulk purchase, which is what shows that overuse is usually concentrated on one bay, shift or wash type.'],
    ['Can it help with staffing?', 'Demand by hour, day and season is compiled from the site’s own history and used to build rosters, with labour cost per wash measured against the result rather than assumed.'],
    ['How does it handle unlimited plans?', 'Visit frequency is tracked per member, which shows both the heavy users whose cost to serve exceeds the plan price and the inactive members who are about to cancel.'],
    ['Does it help with equipment?', 'Cycle time is monitored per bay, so gradual slowing is visible as an equipment signal rather than being misread as weakening demand, and service is scheduled before a failure.'],
    ['Does it replace payment terminals?', 'No. Payment terminals and wash equipment continue as they are. Verity holds the site around them — washes, throughput, consumables, staffing and members.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of wash types, bays, consumable profiles and plan structures, configuration, migration of members and history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with cost per wash.',
  ctaLede: 'The overage is usually on one bay. Tell us how consumables are tracked today.',

  related: ['car-rentals', 'auto-repair-shops', 'auto-parts-stores', 'cleaning-services', 'laundry-services', 'repair-services'],
};
