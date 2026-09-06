export default {
  slug: 'event-venues',
  status: 'published',
  plural: 'event venues',
  subject: 'event venue',

  seo: {
    title: 'AI business management software for event venues | Verity',
    description:
      'Verity connects date inventory and holds, enquiry conversion, turnaround between events, supplier coordination and deposit schedules into one operational system.',
    keywords: [
      'AI software for event venues',
      'event venue management software',
      'date inventory and hold expiry tracking',
      'venue turnaround and supplier coordination',
    ],
  },

  hero: {
    eyebrow: 'Verity for event venues',
    headline: 'The product is a date, and there are only so many good ones.',
    lede:
      'A venue sells dates that cannot be restocked, blocked by holds nobody chases and separated by turnarounds nobody times. Verity manages the date inventory.',
    note: 'Runs alongside your existing billing arrangement.',
    panel: {
      title: 'Calendar',
      meta: 'Next 6 months',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Prime dates', value: '84', note: '52 booked, 18 held' },
        { label: 'Holds past expiry', value: '11', note: 'blocking enquiries' },
        { label: 'Enquiry conversion', value: '22%', note: 'range 9% to 41% by staff' },
        { label: 'Turnaround failures', value: '4', note: 'events starting late' },
      ],
      rows: [
        { name: '11 holds past their expiry blocking prime dates', meta: 'Live enquiries turned away', active: true },
        { name: '4 events started late on turnaround', meta: 'Previous event overran clearing', active: true },
        { name: 'Enquiry conversion at 9% for one coordinator', meta: 'Against 41% for another', active: true },
        { name: 'Deposits due before supplier commitments', meta: '₹18 L across 6 events', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own calendar in this shape.',
    },
  },

  overview: {
    heading: 'You are selling a fixed number of dates, and the good ones are fewer still.',
    paragraphs: [
      'A venue’s entire inventory is dates. There is a finite number of them, a much smaller number that are actually desirable, and none of them can be restocked. Every operational question is therefore a question about the calendar: what is genuinely available, what is blocked and by whom, and how quickly a booked date can be turned around for the next one.',
      'Holds are the first problem. A prospective client is given a provisional hold, the hold has an expiry that nobody enforces, and the date is blocked against live enquiries. Eleven expired holds sitting on prime dates is inventory withdrawn from sale by inattention.',
      'The second is conversion. Enquiries arrive, are quoted, and either convert or do not, and the rate varies enormously by coordinator — nine percent against forty-one in the same venue. That difference is worth more than any pricing change.',
      'The third is turnaround. Two events on consecutive days require clearing, cleaning and resetting inside a window, and an overrun on the first delays the second in front of its guests.',
      'The fourth is that deposits to suppliers and receipts from clients follow different schedules, and the venue bridges the gap.',
      'Verity manages the date inventory, enforces hold expiry, times turnaround and tracks the money on both sides.',
    ],
  },

  terminology: [
    ['Dates, spaces, capacity', 'Inventory'],
    ['Enquiries, holds, bookings', 'Orders'],
    ['Clients, planners, corporate accounts', 'Relationships'],
    ['Setup, service, clearing, turnaround', 'Work'],
    ['Caterers, decorators, sound, staffing partners', 'Suppliers'],
    ['Deposits, cancellations, approvals', 'Workflows'],
    ['Halls, lawns, rooms', 'Locations'],
  ],

  challengesHeading: 'Finite dates, blocked by holds and separated by turnaround.',
  challengesLede:
    'Venue difficulties come from an inventory that cannot be replenished and a sales process that blocks it informally.',
  challenges: [
    { problem: 'Holds block dates indefinitely', detail: 'A provisional hold is given, never expires in practice, and live enquiries are turned away from a date nobody has committed to.', outcome: 'Holds carry an expiry and an owner, released automatically unless renewed deliberately.' },
    { problem: 'Enquiry conversion varies enormously', detail: 'The same venue converts at nine percent for one coordinator and forty-one for another, and nobody measures the difference.', outcome: 'Enquiries are records with stages and owners, so conversion is comparable by person and by enquiry source.' },
    { problem: 'Turnaround is not timed', detail: 'Consecutive events need clearing and resetting in a window, and an overrun delays the next event in front of its guests.', outcome: 'Turnaround is work with steps, owners and a target, measured against the next event’s start.' },
    { problem: 'Supplier coordination happens by phone', detail: 'Caterers, decorators and sound arrive on the day with arrangements agreed separately by several people.', outcome: 'Supplier commitments and arrival windows sit on the event with owners.' },
    { problem: 'Deposit and receipt schedules do not align', detail: 'Supplier commitments fall due before client instalments arrive, and the venue funds the gap.', outcome: 'Both schedules sit on the event, so the gap is projected rather than absorbed.' },
    { problem: 'Cancellations are settled from memory', detail: 'Cancellation terms are agreed at booking and applied months later under emotional pressure.', outcome: 'Terms sit on the booking and the applicable penalty is calculated from the record.' },
  ],

  modulesLede: 'One system across the calendar, enquiries, turnaround and suppliers.',
  modules: [
    { id: 'inventory', title: 'Dates, spaces and capacity', line: 'Availability is held per date and space with state — available, held, booked, blocked — and hold expiry.', why: 'Dates are the only inventory and cannot be replenished, so their state has to be exact.', example: 'Eleven holds past expiry blocking prime dates against live enquiries.' },
    { id: 'orders', title: 'Enquiries, holds and bookings', line: 'Enquiries carry their source, requirement, quote, stage, owner and hold; bookings carry terms, deposits and schedules.', why: 'Conversion is the venue’s main commercial lever and is invisible without stages.', example: 'Conversion from nine to forty-one percent across coordinators.' },
    { id: 'work', title: 'Setup, service, clearing and turnaround', line: 'Each is work with a window, an owner, crew requirements and a state, measured against the next event.', why: 'Turnaround between consecutive events is the operational constraint on how many dates can be sold.', example: 'Four events starting late because the previous clearing overran.' },
    { id: 'suppliers', title: 'Caterers, decorators and partners', line: 'Suppliers carry their arrival windows, commitments, reliability, terms and balances against each event.', why: 'The venue is judged on suppliers it does not employ.', example: 'Arrival windows recorded on the event rather than agreed by phone.' },
    { id: 'relationships', title: 'Clients, planners and corporate accounts', line: 'Clients and planners carry their events, preferences, payment history and repeat behaviour.', why: 'Planners bring repeat volume and are the venue’s most valuable relationship.', example: 'A planner who brought nine events this year, with their history in one place.' },
    { id: 'workflows', title: 'Deposits, cancellations and approvals', line: 'Deposit schedules, cancellation terms, discounts and date changes move through defined steps with recorded decisions.', why: 'Cancellation terms are agreed early and applied late, under pressure.', example: 'A cancellation penalty calculated from the recorded terms rather than negotiated afresh.' },
    { id: 'people', title: 'Coordinators and event staff', line: 'Staff are modelled once, and every enquiry, hold, booking and turnaround step carries who owns it.', why: 'Conversion and turnaround discipline both vary by person.', example: 'Conversion by coordinator, which is worth more than a pricing change.' },
    { id: 'locations', title: 'Halls, lawns and rooms', line: 'Spaces are locations with their own capacity, availability and turnaround requirements.', why: 'A venue with several spaces sells several overlapping date inventories.', example: 'Availability by space and date rather than by venue.' },
    { id: 'intelligence', title: 'Calendar, conversion and turnaround reporting', line: 'Date utilisation, hold behaviour, conversion by source and coordinator, turnaround performance and deposit position come from the records.', why: 'Every venue question is a calendar question and needs the calendar as data.', example: 'Prime date utilisation against total, and what blocked the rest.' },
    { id: 'ai', title: 'Ask the calendar a question', line: 'Verity AI answers from your own date, enquiry, event and supplier records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about blocked dates and lost enquiries.', example: '"Which holds are past expiry on prime dates?" returns eleven with release decisions.' },
    { id: 'communication', title: 'What was agreed with the client', line: 'Requirements, changes and confirmations attach to the event they concern.', why: 'Event disputes are about what was agreed, months earlier, verbally.', example: 'A layout change agreed on a call, recorded on the event.' },
    { id: 'control', title: 'Who can hold, discount and waive', line: 'One permission model and one audit trail across every record.', why: 'Holding a prime date and discounting it are both commercial decisions.', example: 'A hold on a prime date beyond the standard period requiring approval.' },
  ],

  workflowsHeading: 'Selling and turning over a finite calendar.',
  workflowsLede: 'These already happen. Recorded against the date, the inventory stops leaking.',
  workflows: [
    { name: 'Enquiry to booking', steps: ['Enquiry recorded with source, date, requirement and owner', 'Availability checked and a hold placed with an expiry', 'Quote issued and stage tracked', 'Hold renewed deliberately or released at expiry', 'Booking confirmed with deposit and cancellation terms recorded'], note: 'A hold with an enforced expiry is the difference between managing inventory and losing it.' },
    { name: 'Hold management', steps: ['Holds aggregated by date and expiry', 'Owners notified before expiry', 'Renewal justified or hold released', 'Released dates returned to available', 'Waiting enquiries notified'], note: 'Eleven expired holds on prime dates is inventory withdrawn from sale by nobody deciding anything.' },
    { name: 'Event delivery', steps: ['Requirements confirmed and supplier windows recorded', 'Setup scheduled with crew and owners', 'Service delivered against the run of day', 'Issues recorded against suppliers or the venue', 'Client feedback recorded'], note: 'Supplier arrival windows on the event record are what prevent a setup collision.' },
    { name: 'Turnaround', steps: ['Clearing scheduled against the next event’s start', 'Steps assigned with owners and a target window', 'Progress tracked during the turnaround', 'Overrun flagged against the next event', 'Turnaround time recorded for future scheduling'], note: 'Turnaround capability determines how many dates the venue can actually sell.' },
    { name: 'Deposit and cancellation', steps: ['Deposit schedule agreed and recorded at booking', 'Cancellation terms recorded alongside', 'Instalments tracked against supplier commitments', 'Cancellation penalty calculated from terms if it occurs', 'Date released and returned to sale'], note: 'A released date has residual value only if it is returned to sale immediately.' },
  ],

  ai: {
    heading: 'Ask what the calendar is doing.',
    lede: 'Verity AI reads the same date, enquiry, event and supplier records the venue creates as it operates. It answers across your calendar, respects permissions, and can turn an answer into releases and follow-ups.',
    panelMeta: 'Grounded in your calendar records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which holds are past expiry and on which dates?',
      'What is enquiry conversion by coordinator and by source?',
      'Which events started late on turnaround, and why?',
      'What is prime date utilisation for the next six months?',
      'Where do supplier commitments fall due before client deposits?',
      'Which enquiries were lost on dates that later went unsold?',
      'Which planners bring the most repeat business?',
      'Which suppliers arrive outside their agreed window?',
      'Summarise calendar utilisation and conversion.',
    ],
  },

  automationHeading: 'The dates and the holds.',
  automationLede: 'Each runs from the calendar records at the point the condition is met.',
  automations: [
    { trigger: 'A hold reaches its expiry', steps: ['Owner notified before expiry', 'Renewal justified or hold released', 'Date returned to available and waiting enquiries notified'] },
    { trigger: 'An enquiry is recorded', steps: ['Owner assigned with a first-response window', 'Availability checked and hold offered', 'Stage tracked to conversion or loss with a reason'] },
    { trigger: 'Consecutive events are booked', steps: ['Turnaround window calculated', 'Clearing and setup assigned with owners', 'Overrun flagged against the next start'] },
    { trigger: 'A supplier commitment falls due before client deposit', steps: ['Funding gap flagged on the event', 'Client reminder issued ahead', 'Escalated if unresolved'] },
    { trigger: 'A booking is cancelled', steps: ['Penalty calculated from recorded terms', 'Date released and returned to sale', 'Waiting enquiries notified'] },
  ],

  intelligenceHeading: 'What the venue can see.',
  intelligenceLede: 'A finite inventory, measured.',
  intelligence: [
    { area: 'Calendar', points: ['Utilisation by date, space and season', 'Prime date utilisation specifically', 'Dates blocked by holds', 'Dates released and re-sold'] },
    { area: 'Conversion', points: ['Enquiry conversion by source and coordinator', 'Time from enquiry to first response', 'Loss reasons recorded', 'Quotes issued against bookings won'] },
    { area: 'Operations', points: ['Turnaround time against target', 'Late starts and their causes', 'Supplier arrival against agreed windows', 'Issues recorded per event'] },
    { area: 'Cash', points: ['Deposit schedules against supplier commitments', 'Funding gaps by week', 'Cancellation penalties applied', 'Balances outstanding at event date'] },
    { area: 'Relationships', points: ['Repeat clients and planners', 'Corporate account activity', 'Feedback and issues by client', 'Referral sources'] },
  ],
  intelligenceNote: 'All of it comes from recording enquiries, holds, events and turnaround against the dates they occupy.',

  rolesHeading: 'One calendar, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Is the calendar selling?', focus: 'Prime date utilisation, conversion by coordinator, holds blocking dates, cancellation and penalty position.' },
    { role: 'Coordinator', question: 'What is live and what needs chasing?', focus: 'Own enquiries by stage, holds approaching expiry, deposits due, client requirements.' },
    { role: 'Operations', question: 'Can we turn this around?', focus: 'Turnaround windows and crews, supplier arrival times, setup requirements, issues to record.' },
  ],

  useCasesHeading: 'What venues use Verity for',
  useCases: [
    { name: 'Hold expiry enforcement', body: 'Holds with owners and expiry released unless renewed deliberately, returning blocked prime dates to sale.' },
    { name: 'Enquiry conversion', body: 'Enquiries as staged records with owners, making a conversion range from nine to forty-one percent visible and addressable.' },
    { name: 'Turnaround timing', body: 'Clearing and setup as timed work against the next event’s start, since turnaround determines how many dates can be sold.' },
    { name: 'Supplier coordination', body: 'Arrival windows and commitments recorded on the event rather than agreed separately by phone.' },
    { name: 'Deposit and supplier alignment', body: 'Both schedules on the event, so the venue can see when it is funding the gap.' },
    { name: 'Cancellation terms from record', body: 'Penalties calculated from the terms agreed at booking rather than renegotiated under pressure.' },
    { name: 'Asking about the calendar', body: 'Plain-language questions across dates, holds, conversion and turnaround, with releases raised in the same step.' },
  ],

  migration: 'Your billing arrangement continues and is mapped during implementation. The calendar with current bookings and holds, clients and planners, suppliers and deposit schedules are brought across.',

  faqHeading: 'Questions venues ask',
  faqs: [
    ['What can AI software do for an event venue?', 'Verity AI answers questions from your own date, enquiry, event and supplier records: which holds are past expiry and on which dates, what conversion looks like by coordinator, which events started late on turnaround, where supplier commitments fall due before client deposits. Each answer can become a release or a chase.'],
    ['Why do holds matter so much?', 'Because dates are the entire inventory and cannot be replenished. A provisional hold that nobody enforces blocks a prime date against live enquiries, which is inventory withdrawn from sale by inattention rather than by decision.'],
    ['Can it improve conversion?', 'Enquiries become staged records with owners, response times and loss reasons, so a range from nine to forty-one percent across coordinators becomes visible. That difference is usually worth more than any pricing change.'],
    ['How does it help with turnaround?', 'Clearing and setup between consecutive events are timed work with owners against the next event’s start, so an overrun is flagged before guests arrive rather than experienced by them.'],
    ['Does it coordinate suppliers?', 'Caterers, decorators and other partners carry arrival windows and commitments on the event record, so setup is sequenced rather than agreed separately by several people on the phone.'],
    ['Can it handle deposits and cancellations?', 'Deposit schedules and cancellation terms are recorded at booking, so the funding gap against supplier commitments is projected and any penalty is calculated from what was agreed rather than negotiated under pressure.'],
    ['Does Verity replace our billing arrangement?', 'No. Billing continues and is mapped during implementation. Verity holds the calendar, enquiries, events, suppliers and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of spaces, hold policy and turnaround requirements, configuration, migration of the calendar and clients, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the holds on your best dates.',
  ctaLede: 'They are inventory nobody has decided to sell or release. Tell us how holds are managed today.',

  related: ['hotels', 'catering-businesses', 'wedding-planners', 'resorts', 'bars-and-lounges', 'photographers'],
};
