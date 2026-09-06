export default {
  slug: 'hostels',
  status: 'published',
  plural: 'hostels',
  subject: 'hostel',

  seo: {
    title: 'AI business management software for hostels | Verity',
    description:
      'Verity connects bed-level inventory, mixed stay lengths, group bookings, communal facility upkeep and high guest turnover into one operational system.',
    keywords: [
      'AI software for hostels',
      'hostel management software',
      'bed level inventory and dorm allocation',
      'group booking and communal facility management',
    ],
  },

  hero: {
    eyebrow: 'Verity for hostels',
    headline: 'You do not sell rooms. You sell beds, one at a time, to people staying different lengths.',
    lede:
      'Bed-level inventory across mixed stay lengths is a genuinely harder allocation problem than rooms. Verity manages the beds, the groups and the communal spaces that decide the reviews.',
    note: 'Verity runs hostel operations. Your booking channels stay where they are.',
    panel: {
      title: 'Hostel',
      meta: 'Next 14 days',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Bed occupancy', value: '81%', note: '162 of 200 beds' },
        { label: 'Unsellable gaps', value: '38 bed-nights', note: 'stranded by allocation' },
        { label: 'Group enquiry held', value: '3', note: '46 beds · unconfirmed' },
        { label: 'Facility jobs open', value: '19', note: '7 in bathrooms' },
      ],
      rows: [
        { name: '38 bed-nights stranded between bookings', meta: 'Sellable if allocation is reshuffled', active: true },
        { name: '3 group holds blocking 46 beds', meta: 'Unconfirmed past their hold period', active: true },
        { name: '7 open jobs in shared bathrooms', meta: 'The most commonly reviewed facility', active: true },
        { name: 'Long-stay guests mixed into short-stay dorms', meta: 'Turnover disruption both ways', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own hostel in this shape.',
    },
  },

  overview: {
    heading: 'Bed-level allocation is a harder problem than room-level allocation.',
    paragraphs: [
      'A hotel sells a room for a set of nights. A hostel sells individual beds within dorms to guests staying wildly different lengths, and the allocation choices made on Monday determine how many bed-nights are sellable on Thursday. Thirty-eight bed-nights stranded between bookings is inventory lost not to demand but to arithmetic.',
      'The second characteristic is mixed stay lengths. A long-stay guest in a high-turnover dorm disrupts both — the long-stayer is disturbed nightly and the dorm cannot be allocated cleanly — and the mix is usually managed by whoever is on reception.',
      'The third is groups. A group enquiry blocks many beds at once, and an unconfirmed group hold past its period is a large amount of inventory withdrawn from sale by nobody deciding anything.',
      'The fourth is that hostels are judged publicly and almost entirely on communal facilities: bathrooms, kitchen and common areas. Seven open jobs in shared bathrooms is a review score forming.',
      'The fifth is turnover — of guests, who arrive and leave daily, and of staff, who are often short-tenure, which makes handover records more important rather than less.',
      'Verity manages bed-level allocation, group holds, facility upkeep and the handover that a high-turnover team needs.',
    ],
  },

  terminology: [
    ['Beds, dorms, private rooms', 'Inventory'],
    ['Bookings, groups, extensions', 'Orders'],
    ['Guests, groups, long-stayers', 'Relationships'],
    ['Cleaning, laundry, facility jobs', 'Work'],
    ['Reception, housekeeping, night staff', 'People'],
    ['Deposits, holds, house rules', 'Workflows'],
    ['Dorms, bathrooms, common areas', 'Locations'],
  ],

  challengesHeading: 'Beds, groups and shared spaces.',
  challengesLede:
    'Hostel difficulties come from allocating individual beds across mixed stays and being reviewed on communal facilities.',
  challenges: [
    { problem: 'Allocation strands bed-nights', detail: 'Beds allocated without regard to stay length leave unsellable gaps between bookings.', outcome: 'Allocation considers stay length, so gaps are minimised and stranded bed-nights are visible as recoverable inventory.' },
    { problem: 'Group holds block inventory indefinitely', detail: 'A group enquiry holds many beds and the hold is not enforced, blocking other bookings.', outcome: 'Group holds carry an expiry and an owner, released unless renewed deliberately.' },
    { problem: 'Mixed stay lengths disrupt both sides', detail: 'Long-stay guests in high-turnover dorms are disturbed and disrupt allocation at once.', outcome: 'Stay length is an allocation attribute, so dorms are organised by turnover pattern.' },
    { problem: 'Communal facilities decide the reviews', detail: 'Bathrooms and kitchens are what guests write about, and their upkeep competes with everything else.', outcome: 'Facility jobs carry review impact and are prioritised accordingly.' },
    { problem: 'Handover fails with high staff turnover', detail: 'Short-tenure reception and housekeeping staff pass information verbally and it does not survive.', outcome: 'Guest notes, jobs and issues are records rather than verbal handovers.' },
    { problem: 'Extensions and no-shows are handled ad hoc', detail: 'A guest extends or fails to arrive and the bed is either double-sold or left empty.', outcome: 'Extensions and no-shows are recorded states that update availability immediately.' },
  ],

  modulesLede: 'One system across beds, groups, facilities and staff.',
  modules: [
    { id: 'inventory', title: 'Beds, dorms and private rooms', line: 'Availability is held per bed and night with dorm type, gender policy, stay-length pattern and allocation state.', why: 'The bed-night is the unit of inventory, and gaps between them are the format’s characteristic loss.', example: 'Thirty-eight stranded bed-nights recoverable by reallocation.' },
    { id: 'orders', title: 'Bookings, groups and extensions', line: 'Bookings record beds, dates, stay length, group membership, deposits and state including extensions and no-shows.', why: 'A group is a different order type that blocks inventory at scale.', example: 'Three group holds blocking forty-six beds past their hold period.' },
    { id: 'work', title: 'Cleaning, laundry and facility jobs', line: 'Turnover cleaning, laundry and facility maintenance are work with owners, targets and states.', why: 'Communal facility condition is what the hostel is reviewed on.', example: 'Seven open jobs in shared bathrooms, prioritised by review impact.' },
    { id: 'locations', title: 'Dorms, bathrooms and common areas', line: 'Locations carry their own beds, jobs, condition history and usage.', why: 'Shared spaces are the product as much as the beds are.', example: 'Job history by bathroom, showing recurring problems.' },
    { id: 'relationships', title: 'Guests, groups and long-stayers', line: 'Guests carry their stays, preferences, incidents and payment position; groups carry their leader, terms and rooming.', why: 'Long-stayers and repeat guests are a distinct and valuable segment.', example: 'Long-stay guests identified and allocated to appropriate dorms.' },
    { id: 'people', title: 'Reception, housekeeping and night staff', line: 'Staff are modelled once, and every allocation, job and incident carries who handled it.', why: 'High turnover makes attribution and recorded handover essential rather than optional.', example: 'Handover notes on the record rather than passed verbally between short-tenure staff.' },
    { id: 'workflows', title: 'Deposits, holds and house rules', line: 'Group holds, deposits, incident handling and house-rule enforcement move through defined steps.', why: 'Group holds and incidents are the two decisions that need consistency across changing staff.', example: 'A group hold released automatically at expiry unless renewed.' },
    { id: 'intelligence', title: 'Occupancy, gap and facility reporting', line: 'Bed-night occupancy, stranded inventory, group conversion, facility job completion and review-linked issues come from the records.', why: 'Bed-level occupancy and stranded gaps are the format’s real performance measures.', example: 'Stranded bed-nights per week, which most hostels never quantify.' },
    { id: 'ai', title: 'Ask the hostel a question', line: 'Verity AI answers from your own bed, booking, job and guest records, respects permissions, and can create assigned follow-ups.', why: 'Allocation and facility questions both cross days and locations.', example: '"Which bed-nights are stranded and recoverable?" returns thirty-eight with reallocation options.' },
    { id: 'communication', title: 'Guest notes and incidents', line: 'Notes, incidents and requests attach to the guest, bed or facility they concern.', why: 'Incidents in shared accommodation need a record that survives a shift change.', example: 'An incident recorded against a guest, visible to night staff.' },
    { id: 'control', title: 'Who can discount, hold and waive', line: 'One permission model and one audit trail across every record.', why: 'Reception staff make pricing and hold decisions with high turnover in the role.', example: 'Group holds beyond the standard period requiring approval.' },
    { id: 'suppliers', title: 'Laundry, supplies and contractors', line: 'Suppliers carry their terms, reliability and balances.', why: 'Linen and cleaning supply reliability directly affects turnover capacity.', example: 'Laundry turnaround measured against daily bed turnover.' },
  ],

  workflowsHeading: 'Beds, groups and shared spaces.',
  workflowsLede: 'These already happen. Recorded at bed-night level, the inventory stops leaking.',
  workflows: [
    { name: 'Bed allocation', steps: ['Booking received with dates and stay length', 'Bed allocated considering stay-length pattern', 'Gaps between bookings identified', 'Reallocation proposed to recover stranded nights', 'Allocation confirmed and communicated'], note: 'Allocation is arithmetic, and doing it badly loses inventory that demand would have taken.' },
    { name: 'Group booking', steps: ['Group enquiry recorded with beds, dates and leader', 'Hold placed with an expiry', 'Deposit and rooming requirements agreed', 'Hold released or converted at expiry', 'Rooming allocated and confirmed'], note: 'A group hold blocks a lot of inventory, which makes enforcing its expiry unusually valuable.' },
    { name: 'Turnover and cleaning', steps: ['Departures identified for the day', 'Cleaning assigned per bed and dorm', 'Linen requirement checked against laundry return', 'Beds released as ready', 'Turnaround time recorded'], note: 'Laundry turnaround is a hard constraint on how quickly beds can be re-sold.' },
    { name: 'Facility upkeep', steps: ['Facility condition checked on a schedule', 'Jobs raised with review impact and priority', 'Assigned and completed with verification', 'Recurring issues surfaced by location', 'Guest feedback linked to the facility'], note: 'Bathrooms and kitchens are what hostels are publicly reviewed on.' },
    { name: 'Incident handling', steps: ['Incident recorded against guests and location', 'House rules applied consistently', 'Action taken and recorded', 'Escalation where required', 'Record available to the next shift'], note: 'Consistency across changing staff is only possible if the rules and the history are records.' },
  ],

  ai: {
    heading: 'Ask about beds and bathrooms.',
    lede: 'Verity AI reads the same bed, booking, job and guest records the hostel creates daily. It answers from your own property, respects permissions, and can turn an answer into reallocation and jobs.',
    panelMeta: 'Grounded in your hostel records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which bed-nights are stranded and could be recovered by reallocation?',
      'Which group holds are past their expiry?',
      'Which facility jobs are open in the most-reviewed areas?',
      'Where are long-stay guests allocated into high-turnover dorms?',
      'What is bed-night occupancy against available?',
      'Which dorms have recurring facility problems?',
      'Is laundry turnaround keeping up with bed turnover?',
      'Which guests have open incidents or balances?',
      'Summarise occupancy and facility condition.',
    ],
  },

  automationHeading: 'Allocation and upkeep.',
  automationLede: 'Each runs from the hostel’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Allocation creates an unsellable gap', steps: ['Stranded bed-nights flagged', 'Reallocation option proposed', 'Outcome recorded'] },
    { trigger: 'A group hold reaches expiry', steps: ['Owner notified before expiry', 'Renewal justified or hold released', 'Beds returned to availability'] },
    { trigger: 'A facility job is raised in a reviewed area', steps: ['Priority set by review impact', 'Assigned with a target', 'Recurring issues surfaced by location'] },
    { trigger: 'A guest extends or fails to arrive', steps: ['Availability updated immediately', 'Allocation adjusted', 'Payment position updated'] },
    { trigger: 'Laundry turnaround threatens bed release', steps: ['Shortfall flagged against departures', 'Priority cleaning assigned', 'Release times recorded'] },
  ],

  intelligenceHeading: 'What the operator can see.',
  intelligenceLede: 'Bed-level occupancy and facility condition from daily records.',
  intelligence: [
    { area: 'Inventory', points: ['Bed-night occupancy against available', 'Stranded bed-nights by week', 'Allocation efficiency by dorm', 'Group holds and their conversion'] },
    { area: 'Guests', points: ['Stay length mix', 'Long-stay and repeat guests', 'Incidents by guest and location', 'Balances outstanding'] },
    { area: 'Facilities', points: ['Job completion in shared spaces', 'Recurring issues by facility', 'Condition checks against schedule', 'Feedback linked to facilities'] },
    { area: 'Operations', points: ['Turnover cleaning times', 'Laundry turnaround against demand', 'Staffing against arrivals and departures', 'Handover completeness'] },
  ],
  intelligenceNote: 'Verity records operations. Booking channels and payment processing continue as they are.',

  rolesHeading: 'A small team, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Are we selling every bed we could?', focus: 'Bed-night occupancy, stranded inventory, group conversion, facility condition and feedback.' },
    { role: 'Reception', question: 'What is available and who is arriving?', focus: 'Bed availability by night, allocation, group holds, guest notes and balances.' },
    { role: 'Housekeeping', question: 'What has to be turned over?', focus: 'Departures and cleaning assignments, linen availability, facility jobs, beds to release.' },
  ],

  useCasesHeading: 'What hostels use Verity for',
  useCases: [
    { name: 'Bed-night allocation', body: 'Allocation that considers stay length, recovering bed-nights stranded by arithmetic rather than lost to demand.' },
    { name: 'Group hold enforcement', body: 'Holds with expiry and owners, since a group hold blocks a large amount of inventory at once.' },
    { name: 'Stay-length mixing', body: 'Long-stay and short-stay guests allocated to appropriate dorms, reducing disruption in both directions.' },
    { name: 'Facility upkeep by review impact', body: 'Jobs in bathrooms and kitchens prioritised explicitly, because those are what guests write about.' },
    { name: 'Handover for high turnover', body: 'Guest notes, incidents and jobs as records, since short-tenure staff cannot carry verbal handover.' },
    { name: 'Turnover and laundry', body: 'Linen return measured against departures, since laundry is a hard constraint on re-selling beds.' },
    { name: 'Asking about beds', body: 'Plain-language questions across allocation, holds, facilities and guests, with reallocation raised in the same step.' },
  ],

  migration: 'Your booking channels and payment processing continue and are mapped during implementation. Beds and dorms, current bookings, groups, facilities and suppliers are brought across.',

  faqHeading: 'Questions hostels ask',
  faqs: [
    ['What can AI software do for a hostel?', 'Verity AI answers questions from your own bed, booking, job and guest records: which bed-nights are stranded and recoverable, which group holds are past expiry, which facility jobs sit in the most-reviewed areas, where long-stayers are in high-turnover dorms. Each answer can become reallocation or a job.'],
    ['Why is bed allocation harder than room allocation?', 'Because guests stay wildly different lengths in the same dorm. Allocating without regard to stay length leaves gaps that cannot be sold — inventory lost to arithmetic rather than to demand.'],
    ['How do group holds cause problems?', 'A group enquiry blocks many beds at once. If the hold is not enforced, a large amount of inventory is withdrawn from sale by nobody deciding anything, which is much more damaging than a single-bed hold.'],
    ['Why prioritise communal facilities?', 'Because hostels are reviewed publicly and almost entirely on bathrooms, kitchens and common areas. Jobs there carry a review consequence that back-of-house work does not.'],
    ['Does it help with staff turnover?', 'Guest notes, incidents and jobs are records rather than verbal handovers, which matters more in a format where reception and housekeeping roles are often short-tenure.'],
    ['Can it handle extensions and no-shows?', 'Both are recorded states that update availability immediately, so a bed is neither double-sold nor left empty because a change was known to one person.'],
    ['Does Verity replace our booking channels?', 'No. Channels and payment processing continue and are mapped during implementation. Verity holds bed-level inventory, allocation, groups, facilities and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of dorm structure and allocation practice, configuration, migration of bookings and facilities, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the bed-nights you are stranding.',
  ctaLede: 'They are inventory you already have and demand would already take. Tell us how allocation works today.',

  related: ['guest-houses', 'hotels', 'resorts', 'travel-agencies', 'tour-operators', 'event-venues'],
};
