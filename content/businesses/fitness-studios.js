export default {
  slug: 'fitness-studios',
  status: 'published',
  plural: 'fitness studios',
  subject: 'fitness studio',

  seo: {
    title: 'AI business management software for fitness studios | Verity',
    description:
      'Verity gives fitness studios one system for class capacity and no-shows, waitlists, instructor-driven attendance, pass usage and schedule profitability.',
    keywords: [
      'AI software for fitness studios',
      'fitness studio management software',
      'class capacity and no-show tracking',
      'studio schedule profitability software',
    ],
  },

  hero: {
    eyebrow: 'Verity for fitness studios',
    headline: 'The class was full. Six people did not come, and four were turned away.',
    lede:
      'A studio sells a fixed number of places in a fixed hour. Verity shows which classes fill, which no-show, and which instructor the members are actually coming for.',
    note: 'Verity runs the studio. Access hardware and streaming platforms stay where they are.',
    panel: {
      title: 'Studio',
      meta: 'This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Classes run', value: '84', note: '7 formats' },
        { label: 'Average fill', value: '71%', note: 'capacity 18 per class' },
        { label: 'No-show rate', value: '14%', note: 'booked and not attended' },
        { label: 'Waitlist turned away', value: '96', note: 'places that existed' },
      ],
      rows: [
        { name: '96 waitlisted while 14% no-showed', meta: 'Places existed and went unused', active: true },
        { name: '11 classes below break-even attendance', meta: 'Instructor paid, room heated', active: true },
        { name: 'One instructor’s classes fill 40 points higher', meta: 'Members following the person', active: true },
        { name: '38 passes expiring within 30 days', meta: 'Unused value, renewal risk', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own studio in this shape.',
    },
  },

  overview: {
    heading: 'A place in a class is the most perishable thing you sell.',
    paragraphs: [
      'A fitness studio sells a fixed number of places in a class that happens at a fixed time. A place unsold is gone, and a place booked and not attended is worse: it kept someone else out. Ninety-six people waitlisted in a week where fourteen per cent of bookings did not show is capacity that existed, was allocated, and was wasted.',
      'The second characteristic is class-level economics. An instructor is paid, a room is prepared and equipment is set up whether four people or eighteen attend, so eleven classes below break-even attendance is a schedule problem rather than a marketing one. The schedule is the product, and some of it is loss-making.',
      'The third is that attendance follows people. When one instructor’s classes fill forty points higher than the average, members are attached to the instructor rather than to the studio, and that concentration is both a strength and a risk that only shows in attendance by instructor.',
      'The fourth is pass usage. Members buy blocks of classes, and unused passes approaching expiry are both a refund conversation and the strongest available signal that someone is about to stop coming.',
      'Verity holds bookings, attendance and waitlists per class, measures class-level economics, and attributes attendance to instructors and formats.',
    ],
  },

  terminology: [
    ['Classes, formats, schedule', 'Work'],
    ['Bookings, attendance, waitlists', 'Workflows'],
    ['Members, drop-ins, trials', 'Relationships'],
    ['Passes, memberships, credits', 'Orders'],
    ['Instructors, cover, front desk', 'People'],
    ['Studios, rooms, equipment', 'Locations'],
    ['Cancellation policy and approvals', 'Control'],
  ],

  challengesHeading: 'Perishable capacity, fixed cost per class, and loyalty to a person.',
  challengesLede:
    'Studio difficulties come from selling a place in a room at a particular hour.',
  challenges: [
    { problem: 'No-shows waste places others wanted', detail: 'A booking that is not attended holds a place while people are waitlisted.', outcome: 'Bookings, attendance and waitlists sit together, so release and no-show policy have data behind them.' },
    { problem: 'Loss-making classes stay on the schedule', detail: 'Class cost is fixed and attendance is not, and nobody measures the class as a unit.', outcome: 'Every class carries attendance against its break-even, so the schedule is reviewable.' },
    { problem: 'Attendance concentration on instructors is invisible', detail: 'Members follow a person and the studio does not know how exposed it is.', outcome: 'Attendance is attributed to instructor as well as format and time.' },
    { problem: 'Unused passes signal departure and nobody acts', detail: 'Credits sit unused, expire, and the member does not return.', outcome: 'Pass usage and expiry are tracked with contact raised before the credits lapse.' },
    { problem: 'Cover changes attendance without being noticed', detail: 'A substituted instructor changes who attends and the effect is never measured.', outcome: 'Cover is recorded on the class so the attendance effect is visible.' },
    { problem: 'New formats are judged on feel', detail: 'A format is kept or dropped without comparing fill and retention against others.', outcome: 'Fill, retention and repeat attendance are measured per format.' },
  ],

  modulesLede: 'One system across schedule, bookings, members and instructors.',
  modules: [
    { id: 'work', title: 'Classes, formats and the schedule', line: 'Each class carries its format, time, room, capacity, instructor, cost basis and break-even attendance.', why: 'The schedule is the product and each class on it is a small profit-and-loss.', example: 'Eleven classes below break-even attendance.' },
    { id: 'workflows', title: 'Bookings, attendance and waitlists', line: 'Bookings, arrivals, no-shows, cancellations and waitlist positions are recorded per class.', why: 'A place is perishable, and the gap between booked and attended is the recoverable part.', example: 'Ninety-six waitlisted against a fourteen per cent no-show rate.' },
    { id: 'relationships', title: 'Members, drop-ins and trials', line: 'Each member carries their attendance pattern, formats, instructors, passes and lapse risk.', why: 'A member’s pattern breaking is the earliest signal of departure.', example: 'Members whose attendance frequency has halved.' },
    { id: 'orders', title: 'Passes, memberships and credits', line: 'Passes carry credits purchased, used, remaining and expiry, with liability visible.', why: 'Unused credits are both a liability and a departure signal.', example: 'Thirty-eight passes expiring within thirty days.' },
    { id: 'people', title: 'Instructors, cover and availability', line: 'Instructors carry classes taught, fill rates, retention of their attendees, availability and cover history.', why: 'Attendance concentrates on people, and the studio should know by how much.', example: 'One instructor filling forty points above average.' },
    { id: 'locations', title: 'Studios, rooms and equipment', line: 'Rooms carry capacity, equipment, setup requirements and utilisation across the timetable.', why: 'Capacity is physical and it caps what the schedule can sell.', example: 'Room utilisation by hour across the week.' },
    { id: 'intelligence', title: 'Fill, retention and schedule reporting', line: 'Fill rate by class, time and instructor, no-show rates, class-level contribution, pass usage and member retention come from the records.', why: 'Every schedule decision is a revenue decision and can be measured.', example: 'Contribution per class by time slot.' },
    { id: 'ai', title: 'Ask the studio a question', line: 'Verity AI answers from your own class, booking, member and pass records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about which classes pay and who is drifting away.', example: '"Which classes are below break-even?" returns eleven with times and instructors.' },
    { id: 'communication', title: 'Member contact and waitlist offers', line: 'Waitlist offers, absence follow-up and pass reminders attach to the member and class.', why: 'A released place has to reach a waitlisted member quickly to be worth anything.', example: 'A cancellation offered to the waitlist automatically.' },
    { id: 'control', title: 'Cancellation policy, discounts and approvals', line: 'One permission model and one audit trail covering cancellation windows, no-show charges, freezes and discounts.', why: 'Policy applied inconsistently is policy that does not exist.', example: 'No-show charges applied consistently against the policy.' },
    { id: 'schedule', title: 'Timetable planning', line: 'The timetable is planned against room capacity, instructor availability and demand by hour.', why: 'The right class at the wrong hour looks like a bad format.', example: 'Demand by hour against the classes scheduled in it.' },
  ],

  workflowsHeading: 'Schedule, book, attend, follow up, review.',
  workflowsLede: 'These already happen. Recorded, the schedule stops being guesswork.',
  workflows: [
    { name: 'Class booking and waitlist', steps: ['Class published with capacity', 'Bookings taken against places', 'Waitlist formed when full', 'Cancellations released to the waitlist', 'Attendance recorded at the class'], note: 'Releasing cancellations quickly is what converts a no-show into an attendance.' },
    { name: 'No-show handling', steps: ['Attendance compared with bookings', 'No-shows recorded against members', 'Policy applied consistently', 'Repeat pattern surfaced', 'Contact made where the pattern suggests drift'], note: 'Repeated no-shows are usually disengagement rather than carelessness.' },
    { name: 'Schedule review', steps: ['Attendance and fill compiled by class, time and instructor', 'Contribution compared with break-even', 'Underperforming slots identified', 'Format, time or instructor changed', 'Effect measured after the change'], note: 'Changing one variable at a time is what makes the effect readable.' },
    { name: 'Pass and membership lifecycle', steps: ['Pass sold with credits and expiry', 'Usage tracked per class', 'Approaching expiry surfaced', 'Contact made with remaining credits', 'Renewal or lapse recorded'], note: 'Unused credits approaching expiry are the last useful moment to act.' },
    { name: 'Instructor cover', steps: ['Absence recorded', 'Cover assigned from availability', 'Members notified', 'Attendance recorded against the covering instructor', 'Effect on attendance reviewed'], note: 'Recording who actually taught is what makes the attendance data honest.' },
  ],

  ai: {
    heading: 'Ask about fill and members.',
    lede: 'Verity AI reads the same class, booking, member and pass records the studio creates as it runs. It answers from your own studio, respects permissions, and can turn an answer into contact or a schedule change.',
    panelMeta: 'Grounded in your studio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which classes are below break-even attendance?',
      'What is the no-show rate by class and time?',
      'Which instructors have the highest fill and retention?',
      'Which members have stopped attending in the last month?',
      'How many waitlisted places went unused through no-shows?',
      'Which passes expire soon with credits remaining?',
      'Which formats retain attendees best?',
      'What is room utilisation by hour?',
      'Summarise fill and retention for the week.',
    ],
  },

  automationHeading: 'Places, passes and patterns.',
  automationLede: 'Each runs from the studio’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A booking is cancelled', steps: ['Place released', 'Waitlist offered in order', 'Booking confirmed on acceptance'] },
    { trigger: 'A member misses several booked classes', steps: ['Pattern flagged with their history', 'Contact assigned', 'Outcome recorded'] },
    { trigger: 'A class falls below break-even attendance repeatedly', steps: ['Flagged with time, format and instructor', 'Schedule review raised', 'Change and effect recorded'] },
    { trigger: 'A pass approaches expiry with credits remaining', steps: ['Member flagged with remaining value', 'Contact assigned', 'Renewal or extension recorded'] },
    { trigger: 'A member’s attendance frequency drops', steps: ['Lapse risk raised', 'Preferred format and instructor surfaced', 'Contact recorded'] },
  ],

  intelligenceHeading: 'What the studio can see.',
  intelligenceLede: 'Fill, contribution and retention from class records.',
  intelligence: [
    { area: 'Capacity', points: ['Fill rate by class, time and format', 'No-show rate and released places', 'Waitlist demand by slot', 'Room utilisation across the timetable'] },
    { area: 'Economics', points: ['Contribution per class against break-even', 'Cost per attendance by format', 'Revenue by time slot', 'Effect of schedule changes'] },
    { area: 'People', points: ['Fill and retention by instructor', 'Cover effect on attendance', 'Instructor concentration risk', 'Availability against demand'] },
    { area: 'Members', points: ['Attendance frequency and drift', 'Pass usage and expiry', 'Format and instructor preference', 'Retention by joining cohort'] },
  ],
  intelligenceNote: 'Verity records the studio’s operations. Access hardware and streaming platforms continue as they are.',

  rolesHeading: 'One studio, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Is the schedule paying?', focus: 'Contribution per class, fill by slot, instructor concentration, pass liability.' },
    { role: 'Studio manager', question: 'What is happening this week?', focus: 'Bookings and waitlists, no-shows, cover needed, room utilisation.' },
    { role: 'Instructor', question: 'Who is in my class and who stopped coming?', focus: 'Bookings and attendance, regulars absent, format feedback, cover assignments.' },
    { role: 'Front desk', question: 'Who needs contact?', focus: 'Waitlist offers, expiring passes, absent members, booking changes.' },
  ],

  useCasesHeading: 'What fitness studios use Verity for',
  useCases: [
    { name: 'Turning no-shows into attendances', body: 'Bookings, attendance and waitlists held together with cancellations released quickly, so a place that was allocated and unused reaches someone who wanted it.' },
    { name: 'Class-level economics', body: 'Each class carrying its cost basis and break-even attendance, which makes the schedule reviewable as a set of small profit-and-loss decisions.' },
    { name: 'Measuring instructor concentration', body: 'Fill and retention attributed to instructors, so the studio knows how much of its attendance is attached to specific people.' },
    { name: 'Acting on unused passes', body: 'Credits and expiry tracked with contact raised while there is still something to save, because unused passes precede departure.' },
    { name: 'Reading attendance drift', body: 'Member attendance frequency tracked so a pattern breaking is a signal rather than a discovery at renewal.' },
    { name: 'Judging formats fairly', body: 'Fill, retention and repeat attendance measured per format and per time slot, separating a weak format from a badly timed one.' },
    { name: 'Asking about the studio', body: 'Plain-language questions across classes, bookings, members and passes, with contact and schedule changes raised in the same step.' },
  ],

  migration: 'Access hardware and streaming platforms continue and are mapped during implementation. Members, passes and remaining credits, class schedules, booking and attendance history, and instructor records are brought across.',

  faqHeading: 'Questions fitness studios ask',
  faqs: [
    ['What can AI software do for a fitness studio?', 'Verity AI answers questions from your own class, booking, member and pass records: which classes are below break-even attendance, what the no-show rate is by class and time, which instructors have the highest fill and retention, which members have stopped attending. Each answer can become contact or a schedule change.'],
    ['Why does the no-show rate matter so much?', 'Because a place is perishable and a no-show is worse than an empty place. The booking held capacity that someone on the waitlist wanted, so the same class simultaneously turned people away and ran under capacity.'],
    ['How does class-level economics work?', 'Each class carries its cost basis — instructor, room, setup — and a break-even attendance. That turns the timetable into a set of measurable decisions instead of a schedule judged by overall studio revenue.'],
    ['Can it show how dependent we are on one instructor?', 'Fill and retention are attributed to instructors as well as formats and times, so concentration is a visible number rather than a feeling, including the effect when someone covers a class.'],
    ['How does it help with retention?', 'Attendance frequency is tracked per member, so a pattern breaking is surfaced while the member is still reachable, and unused pass credits approaching expiry are raised as contact rather than left to lapse.'],
    ['Does it handle waitlists?', 'Waitlists sit alongside bookings, and a cancellation releases the place to the waitlist in order, which is what makes a released place worth something.'],
    ['Does it replace our access hardware?', 'No. Access systems and streaming platforms continue as they are. Verity holds the studio around them — schedule, bookings, attendance, members, passes and instructors.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of formats, class costs, pass structures and policies, configuration, migration of members and history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with no-shows against your waitlist.',
  ctaLede: 'Those are places you sold twice and delivered once. Tell us how bookings are handled today.',

  related: ['gyms', 'yoga-studios', 'spas', 'salons', 'coaching-institutes', 'dance-academies'],
};
