export default {
  slug: 'guest-houses',
  status: 'published',
  plural: 'guest houses',
  subject: 'guest house',

  seo: {
    title: 'AI business management software for guest houses | Verity',
    description:
      'Verity connects direct and channel bookings, commission cost, arrival coordination without a front desk, breakfast and supply planning, and repeat guests into one system.',
    keywords: [
      'AI software for guest houses',
      'guest house management software',
      'direct versus channel booking cost',
      'small property arrival and supply planning',
    ],
  },

  hero: {
    eyebrow: 'Verity for guest houses',
    headline: 'Six rooms, no front desk, and a commission bill you have never added up.',
    lede:
      'A small property lives on direct bookings and repeat guests, and loses margin to channel commission it does not measure. Verity measures both and coordinates arrivals without a desk.',
    note: 'Sized for a property the owner runs personally.',
    panel: {
      title: 'Property',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Occupancy', value: '74%', note: '6 rooms' },
        { label: 'Channel commission', value: '₹64,000', note: '18% of channel revenue' },
        { label: 'Direct share', value: '31%', note: 'of nights sold' },
        { label: 'Repeat guests', value: '22%', note: 'of arrivals' },
      ],
      rows: [
        { name: '₹64,000 of commission this month', meta: 'On bookings that could have come direct', active: true },
        { name: 'Three arrivals with no key handover arranged', meta: 'Late arrivals, nobody on site', active: true },
        { name: 'Breakfast supplies short against tomorrow’s occupancy', meta: 'Shop run needed today', active: true },
        { name: 'Repeat guests not offered direct rates', meta: 'Rebooking through channels', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own property in this shape.',
    },
  },

  overview: {
    heading: 'A very small property with the same problems as a large one and none of the staff.',
    paragraphs: [
      'A guest house has a handful of rooms, no front desk, and usually one or two people running everything. It nevertheless has to manage availability across booking channels, coordinate arrivals when nobody is on site, plan supplies against occupancy and remember what each returning guest prefers.',
      'The largest financial fact is commission. Channel bookings carry a commission that is real money, and a property with thirty-one percent direct share is paying commission on the rest — including on guests who have stayed before and would book direct if asked. Sixty-four thousand a month is a meaningful share of a six-room property’s profit.',
      'The second is arrivals. Without a front desk, every arrival needs a key handover arranged in advance, and three arrivals without one is three guests standing outside.',
      'The third is supply. Breakfast and consumables are bought against occupancy, and a shop run today or not today is the difference between service and apology.',
      'The fourth is that repeat guests are the property’s best economics and are almost never captured directly.',
      'Verity records the commission cost, coordinates arrivals, plans supply against occupancy and holds the repeat guest relationship.',
    ],
  },

  terminology: [
    ['Rooms, nights, availability', 'Inventory'],
    ['Bookings, direct and channel, extensions', 'Orders'],
    ['Guests, repeat guests', 'Relationships'],
    ['Arrivals, cleaning, breakfast', 'Work'],
    ['Channels, suppliers, cleaners', 'Suppliers'],
    ['Deposits, cancellations, house rules', 'Workflows'],
    ['Rooms, common areas', 'Locations'],
  ],

  challengesHeading: 'Small scale, same obligations.',
  challengesLede:
    'Guest house difficulties come from running a property with no staff and no measurement of the costs that matter.',
  challenges: [
    { problem: 'Commission is paid and never measured', detail: 'Channel commission is deducted at settlement and treated as an unavoidable cost rather than a number to reduce.', outcome: 'Commission is recorded per booking and channel, so direct share and its value are visible.' },
    { problem: 'Arrivals happen without anyone present', detail: 'Key handover is arranged by message and occasionally not arranged at all.', outcome: 'Arrival coordination is work with an owner and a state for every booking.' },
    { problem: 'Supply is bought on guesswork', detail: 'Breakfast and consumables are bought against a rough sense of occupancy rather than the actual arrivals.', outcome: 'Requirements are derived from confirmed occupancy, so the shop run happens when it is needed.' },
    { problem: 'Repeat guests rebook through channels', detail: 'A returning guest books through the same channel and the property pays commission on a relationship it already has.', outcome: 'Repeat guests are records with contact history, so direct rebooking can be offered.' },
    { problem: 'Availability drifts across channels', detail: 'A direct booking is not reflected on channels quickly and a double booking follows.', outcome: 'One availability position with channel state visible per room-night.' },
    { problem: 'Preferences are not remembered', detail: 'A returning guest’s room preference and requirements are asked again each visit.', outcome: 'Preferences sit on the guest record and are available before arrival.' },
  ],

  modulesLede: 'One system, sized for a property with no staff.',
  modules: [
    { id: 'inventory', title: 'Rooms and availability', line: 'Availability is held per room and night with channel state and booking source.', why: 'Overselling a six-room property is a much larger proportional failure than in a hotel.', example: 'One availability position with channel sync state visible per night.' },
    { id: 'orders', title: 'Bookings, direct and channel', line: 'Bookings record source, rate, commission, deposit, arrival details and state.', why: 'Commission recorded per booking is what turns an unavoidable cost into a measurable one.', example: 'Sixty-four thousand of commission this month against thirty-one percent direct share.' },
    { id: 'work', title: 'Arrivals, cleaning and breakfast', line: 'Arrival coordination, turnover cleaning and breakfast preparation are work with owners and times.', why: 'Without a front desk, arrivals must be arranged rather than attended.', example: 'Three arrivals with no key handover arranged, visible the day before.' },
    { id: 'relationships', title: 'Guests and repeat guests', line: 'Guests carry their stays, preferences, requirements, contact history and booking source.', why: 'Repeat guests are the property’s best economics and its cheapest marketing.', example: 'Returning guests offered direct rates rather than rebooking through a channel.' },
    { id: 'suppliers', title: 'Channels, suppliers and cleaners', line: 'Channels carry commission terms and settlements; suppliers and cleaners carry their arrangements and reliability.', why: 'A channel is a supplier of demand with a price, and it should be priced.', example: 'Commission by channel against the bookings it produced.' },
    { id: 'workflows', title: 'Deposits, cancellations and house rules', line: 'Deposits, cancellations and house-rule matters move through simple defined steps with recorded outcomes.', why: 'A small property needs consistency more than process, particularly when the owner is away.', example: 'A cancellation handled per recorded terms rather than negotiated.' },
    { id: 'intelligence', title: 'Occupancy, commission and repeat reporting', line: 'Occupancy, direct against channel share, commission cost, repeat guest rate and supply against occupancy come from the records.', why: 'The two levers a small property has are direct share and repeat rate, and both are measurable.', example: 'Direct share by month against commission paid.' },
    { id: 'ai', title: 'Ask the property a question', line: 'Verity AI answers from your own booking, guest and supply records, respects permissions, and can create assigned follow-ups.', why: 'The owner is doing everything and needs an answer rather than a report.', example: '"Which arrivals have no key handover arranged?" returns three before they arrive.' },
    { id: 'communication', title: 'Guest contact and arrival instructions', line: 'Messages, instructions and preferences attach to the booking or guest they concern.', why: 'Arrival instructions are the single most important message a guest house sends.', example: 'Arrival instructions recorded on the booking rather than in one chat thread.' },
    { id: 'locations', title: 'Rooms and common areas', line: 'Rooms carry condition, maintenance and preference history.', why: 'Six rooms are individually memorable to returning guests.', example: 'A guest’s preferred room recorded and offered on rebooking.' },
    { id: 'people', title: 'Owner and helpers', line: 'Whoever is involved is modelled once, with tasks and handovers attributed.', why: 'Cover when the owner is away depends entirely on records.', example: 'Arrival and cleaning tasks assigned to a helper with the instructions attached.' },
    { id: 'control', title: 'Who can discount and waive', line: 'One permission model and one audit trail across every record.', why: 'Even a two-person property benefits from consistent handling when one is away.', example: 'Cancellation waivers recorded with the reason.' },
  ],

  workflowsHeading: 'Running a property without a desk.',
  workflowsLede: 'These already happen. Recorded, they survive the owner being away.',
  workflows: [
    { name: 'Booking to arrival', steps: ['Booking received with source and commission recorded', 'Availability updated across channels', 'Arrival details and expected time collected', 'Key handover arranged with an owner', 'Arrival instructions sent and recorded'], note: 'A guest arriving without instructions is the format’s most common and most avoidable failure.' },
    { name: 'Direct conversion', steps: ['Guest stay recorded with source', 'Contact and preferences captured during the stay', 'Direct rebooking offered before departure', 'Repeat bookings taken directly where possible', 'Commission saved recorded against the guest'], note: 'Paying commission on a guest you already know is the easiest cost to remove.' },
    { name: 'Turnover and supply', steps: ['Departures and arrivals listed for the day', 'Cleaning assigned with linen checked', 'Breakfast and consumable requirement derived from occupancy', 'Shop run scheduled where required', 'Rooms released as ready'], note: 'Buying against confirmed occupancy rather than a rough sense is a small change with a daily effect.' },
    { name: 'Cancellation and no-show', steps: ['Cancellation or no-show recorded', 'Terms applied from the booking', 'Availability released across channels', 'Refund or charge processed', 'Outcome recorded on the guest record'], note: 'Releasing availability immediately is what allows a cancelled night to be re-sold.' },
  ],

  ai: {
    heading: 'Ask what the property needs today.',
    lede: 'Verity AI reads the same booking, guest and supply records the property creates as it operates. It answers from your own rooms, respects permissions, and can turn an answer into arrangements.',
    panelMeta: 'Grounded in your property records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which arrivals have no key handover arranged?',
      'What commission did we pay this month and to which channels?',
      'What is direct share against channel share?',
      'Which supplies are short against tomorrow’s occupancy?',
      'Which repeat guests booked through a channel again?',
      'What is occupancy for the next two weeks?',
      'Which rooms need cleaning before this afternoon?',
      'Which guests have preferences we should honour on return?',
      'Summarise occupancy, commission and arrivals.',
    ],
  },

  automationHeading: 'The small things that ruin an arrival.',
  automationLede: 'Each runs from the property’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A booking is confirmed', steps: ['Availability updated across channels', 'Arrival details requested', 'Key handover task created'] },
    { trigger: 'An arrival approaches without handover arranged', steps: ['Flagged the day before', 'Owner or helper assigned', 'Instructions sent and recorded'] },
    { trigger: 'Occupancy is confirmed for the next day', steps: ['Breakfast and supply requirement calculated', 'Shortfall flagged', 'Shop run scheduled'] },
    { trigger: 'A repeat guest books through a channel', steps: ['Flagged with the commission cost', 'Direct offer prepared for next time', 'Outcome recorded'] },
    { trigger: 'A cancellation is received', steps: ['Terms applied and refund handled', 'Availability released across channels', 'Night offered for re-sale'] },
  ],

  intelligenceHeading: 'What the owner can see.',
  intelligenceLede: 'Occupancy, commission and repeat rate from the property’s own bookings.',
  intelligence: [
    { area: 'Occupancy', points: ['Occupancy by room and month', 'Lead time by booking source', 'Cancellations and no-shows', 'Nights re-sold after cancellation'] },
    { area: 'Commission', points: ['Commission by channel and month', 'Direct against channel share', 'Commission on repeat guests', 'Effective rate after commission'] },
    { area: 'Guests', points: ['Repeat guest rate', 'Preferences and requirements recorded', 'Reviews and issues by room', 'Direct rebooking conversion'] },
    { area: 'Operations', points: ['Arrivals coordinated in advance', 'Turnover completion', 'Supply against occupancy', 'Cleaning and linen availability'] },
  ],
  intelligenceNote: 'Verity records operations. Booking channels and payment processing continue as they are.',

  rolesHeading: 'One or two people, one set of records.',
  rolesLede: 'Everything is on the record so cover is possible.',
  roles: [
    { role: 'Owner', question: 'What am I paying and what is coming?', focus: 'Commission by channel, direct share, occupancy ahead, repeat guest rate.' },
    { role: 'Helper or caretaker', question: 'What has to happen today?', focus: 'Arrivals and handovers, rooms to clean, supplies needed, guest instructions.' },
  ],

  useCasesHeading: 'What guest houses use Verity for',
  useCases: [
    { name: 'Commission visibility', body: 'Commission recorded per booking and channel, turning an accepted cost into a number with a direct-share target.' },
    { name: 'Arrival coordination', body: 'Key handover as work with an owner for every booking, since there is no front desk to attend arrivals.' },
    { name: 'Direct rebooking', body: 'Repeat guests as records with contact history, so a returning guest is offered a direct rate rather than rebooking through a channel.' },
    { name: 'Supply against occupancy', body: 'Breakfast and consumable requirements derived from confirmed arrivals rather than a rough sense of the week.' },
    { name: 'Single availability position', body: 'One availability record with channel state, so a direct booking does not become a double booking.' },
    { name: 'Guest preferences', body: 'Room and requirement preferences recorded once and available before the next arrival.' },
    { name: 'Cover when the owner is away', body: 'Tasks, instructions and guest details as records a helper can work from.' },
  ],

  migration: 'Your booking channels and payment processing continue and are mapped during implementation. Rooms, current bookings, guests with preferences and supplier arrangements are brought across, and Verity is kept deliberately light.',

  faqHeading: 'Questions guest house owners ask',
  faqs: [
    ['Is this not too much for six rooms?', 'It is deliberately light. The things it records are the ones a small property already does and cannot afford to get wrong: arrivals without a desk, commission, supplies against occupancy and what a returning guest prefers.'],
    ['What can AI software do for a guest house?', 'Verity AI answers questions from your own booking, guest and supply records: which arrivals have no handover arranged, what commission you paid and to whom, which supplies are short for tomorrow, which repeat guests booked through a channel again. Each answer can become an arrangement.'],
    ['Why measure commission?', 'Because it is real money treated as unavoidable. Recording it per booking and channel shows what direct share is worth, and repeat guests booking through channels are the easiest part of it to remove.'],
    ['How does it help with arrivals?', 'Every booking carries an arrival coordination task with an owner, so a guest arriving late to a property with nobody on site has instructions and a key arrangement rather than a phone call from the street.'],
    ['Can it help with supplies?', 'Breakfast and consumable requirements are derived from confirmed occupancy, so the shop run happens when it is needed rather than being remembered or not.'],
    ['Does it prevent double bookings?', 'Availability is one position with channel state per room-night, so a direct booking is reflected rather than racing a channel update.'],
    ['Does Verity replace our booking channels?', 'No. Channels and payment processing continue and are mapped during implementation. Verity holds availability, arrivals, guests, supplies and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks and deliberately lighter than for a larger property: discovery of what actually needs recording, minimal configuration, migration of bookings and guests, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with commission and arrivals.',
  ctaLede: 'One is money you can keep and the other is the thing guests remember. Tell us how the property runs today.',

  related: ['hostels', 'hotels', 'resorts', 'travel-agencies', 'restaurants', 'property-management'],
};
