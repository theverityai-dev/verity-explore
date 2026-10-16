export default {
  schema: 2,
  slug: 'tour-operators',
  status: 'published',
  plural: 'tour operators',
  subject: 'tour operator',
  checked: '15 October 2026',

  seo: {
    title: 'Tour operator software: departures, suppliers, guests | Verity',
    description:
      'The 14 problems that sink a tour operator’s margin: unconfirmed suppliers, rooming lists, payment gaps, clashing guides and permits, and the Verity screens that fix each one.',
    keywords: [
      'tour operator software India',
      'departure manifest and rooming list',
      'tour supplier confirmation tracking',
      'tour costing and departure margin',
      'tour guide and vehicle allocation',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'suppliers', 'logistics', 'schedule', 'workforce', 'ai'],

  hero: {
    eyebrow: 'Verity for tour operators',
    headline: 'Forty guests land on Saturday. Is every hotel, coach and guide actually confirmed? Verity can tell you.',
    lede:
      'A tour operator sells a promise made of other people’s services: hotels, coaches, guides, permits, entry tickets and local agents. The promise only holds if every one of them is confirmed, paid and in the right place on the right day. Verity gives each departure one file that shows exactly that.',
    oneLine:
      'One system where every departure shows its guests, its suppliers, its payments and its cost, so a gap is a red line on a screen and not a surprise at the hotel desk.',
    note: 'Your team keeps calling suppliers and sending vouchers the way it does now. Verity holds the record and the deadline.',
    screen: 'owner',
    screenNote: 'departures, suppliers, guests and cash',
  },

  today: {
    heading: 'The brochure is simple. The operations behind it are not.',
    paragraphs: [
      'A 9-night group departure needs four hotels, two internal flights, a coach with two drivers, a guide in each city, entry tickets, one wildlife permit and a list of 38 guests with rooming preferences and diets. Every one of those has a supplier, a confirmation, a cost and a payment date.',
      'Most of it is held in an Excel sheet per departure, a WhatsApp group with the ground team, and the memory of the operations manager. When two departures overlap in the same week, the same guide and the same coach get promised twice, and nobody sees it until a supplier calls.',
      'Money moves the wrong way too. Guests pay in instalments over months, but hotels and transport want advances early, so the operator carries the gap. A change on one departure, a closed road or a cancelled flight, ripples through the sheet by hand.',
    ],
    stack: ['Excel sheet per departure', 'WhatsApp group with ground team', 'Email threads with hotels', 'Paper vouchers and permits', 'The operations manager’s memory'],
    stackNote: 'Each is fine alone. The departure as a whole, with its dates and costs, is not written anywhere.',
  },

  painsHeading: 'Where a tour operator actually loses money and sleep.',
  painsLede:
    'These are the situations operators describe most often. For each one: what happens on a normal week, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Suppliers',
      title: 'A hotel or coach is “confirmed” on a call and not in writing',
      scene:
        'The reservations executive spoke to the Jaipur hotel and was told the block is fine. The email never came. Three days before arrival the hotel says it has only 14 of the 20 rooms.',
      cost:
        'Guests split across two hotels, an upset group leader, and a rate you re-buy at peak price. One missed confirmation can cost more than the tour made.',
      fix:
        'Every service on a departure has a status: requested, confirmed in writing, paid. Verity lists services still unconfirmed with days to arrival, and the executive records the confirmation number against each.',
      screen: 'confirmations',
    },
    {
      area: 'Suppliers',
      title: 'Hotel allotments are held and never released',
      scene:
        'You blocked 30 rooms for a festival departure. Only 22 sold. The release date passed last week, and the hotel now charges you for the 8 unused rooms.',
      cost:
        'Example arithmetic: 8 rooms for 3 nights at ₹6,500 is ₹1.56 lakh paid for rooms nobody used.',
      fix:
        'Each block records rooms held, rooms sold and the release date. Verity lists blocks with unsold rooms approaching release, so you either sell them or give them back in time.',
      screen: 'confirmations',
    },
    {
      area: 'Guests',
      title: 'The rooming list and manifest are different in three places',
      scene:
        'The hotel has one rooming list, the airline has another name spelling, and the guide has a printed list from last week. Two guests have swapped rooms, one has dropped out and nobody told the coach company.',
      cost:
        'Wrong room types, a guest at the wrong hotel, and an hour at reception that the group leader remembers more than the itinerary.',
      fix:
        'Guests are records on the departure with room type, sharing, diet, passport and medical note. One manifest is generated from those records, and a change updates the rooming list everyone reads.',
      screen: 'departure',
    },
    {
      area: 'Guests',
      title: 'Passports, dietary needs and medical notes live in WhatsApp',
      scene:
        'A guest with a severe nut allergy told the sales team on a call. It never reached the ground manager. A restaurant serves a set meal.',
      cost:
        'A genuine safety risk, and the kind of incident that ends repeat business and reputation at once.',
      fix:
        'Allergies, diets, mobility needs and emergency contacts are fields on the guest record, shown on the manifest the guide and ground manager carry, with access limited to the people who need it.',
      screen: 'departure',
    },
    {
      area: 'Money',
      title: 'Guests pay late and the supplier advance is due anyway',
      scene:
        'The hotel needs a 50 percent advance 45 days before arrival. Eleven guests have paid only their booking amount. The operator pays from its own account and waits for the instalment.',
      cost:
        'Working capital tied up across every departure at once. In a good season the gap grows with every new booking, not shrinks.',
      fix:
        'Each guest has a payment schedule against the departure, and each supplier advance has its due date. The payments screen puts the two side by side, so you see the gap by week and know whom to chase.',
      screen: 'payments',
    },
    {
      area: 'Money',
      title: 'Nobody knows what a departure really made',
      scene:
        'The tour was priced on a cost sheet in January. Since then the hotel raised its rate, a second guide was needed, and the coach did extra kilometres. The final cost is known months later, if at all.',
      cost:
        'You repeat the same underpriced departure next year. Margins thin without a number to warn you.',
      fix:
        'Quoted cost and actual cost sit side by side for each departure and each line. Verity shows margin per departure while it is still running and flags lines that are over the costed amount.',
      screen: 'costing',
    },
    {
      area: 'Money',
      title: 'Overseas agents pay late and in the wrong currency',
      scene:
        'An agent in the UK booked 12 guests for a heritage tour. The balance was due a month before arrival and has not come. The guests are arriving next week and the hotels have been paid.',
      cost:
        'An unsecured receivable in foreign currency, with exchange movement on top of the delay.',
      fix:
        'Each agent’s bookings carry their due dates and amounts in the contract currency. Verity lists receivables by agent and age, so a late balance is chased before arrival, not after the guests have gone home.',
      screen: 'payments',
    },
    {
      area: 'Resources',
      title: 'The same guide or vehicle is promised to two departures',
      scene:
        'Your best Rajasthan guide is on a group in Jodhpur until the 14th. A second group needs him in Udaipur on the 13th. The clash is found when he confirms with both.',
      cost:
        'A last-minute replacement who is not as good, or a cancelled commitment to a supplier you depend on every season.',
      fix:
        'Guides, drivers and vehicles are bookable resources with a calendar. Assigning one to a departure checks their other dates, and an overlap shows before it is confirmed.',
      screen: 'resources',
    },
    {
      area: 'Resources',
      title: 'Permits and entry tickets are booked late or in the wrong name',
      scene:
        'Safari permits release at a fixed time and sell out. The ticket for a monument is booked under the old guest list. The guide discovers at the gate that two names do not match.',
      cost:
        'A missed safari that was the highlight of the tour, or a refund paid from your pocket. Permit portals set their own cancellation and name-change rules.',
      fix:
        'Permits and tickets are services with a release date, names and a status. Verity warns when a release window is near and when a guest list changed after the permit was booked.',
      screen: 'resources',
    },
    {
      area: 'On tour',
      title: 'Something changes on the road and the office learns late',
      scene:
        'A highway is closed by a landslide. The guide rebooks lunch and tells the driver, but the office only finds out when an agent calls to ask where the group is. Tomorrow’s hotel is not told.',
      cost:
        'Cascading changes, unhappy guests and extra costs that are never recorded against the departure.',
      fix:
        'The guide or ground manager logs the issue against the departure. Verity shows the office the change at once, lists the services affected tomorrow, and records the extra cost on the same file.',
      screen: 'onground',
    },
    {
      area: 'On tour',
      title: 'Cash advances to tour managers are settled from memory',
      scene:
        'A tour manager leaves with ₹80,000 for tips, entry fees and small purchases. He returns with a bundle of slips and a figure that is a few thousand off.',
      cost:
        'Money that cannot be traced, and an argument that damages a good relationship.',
      fix:
        'The advance is recorded against the manager and the departure. Expenses are entered as they happen, and Verity shows the balance to settle when the tour ends, with the slips attached.',
      screen: 'onground',
    },
    {
      area: 'Sales',
      title: 'Seasons are hit and miss because nobody sees the pace of bookings',
      scene:
        'Your October fixed departures are 40 percent full with five weeks left, and last year the same date was 70 percent full. Nobody noticed until the owner counted.',
      cost:
        'No time to adjust price, promote or cancel before supplier commitments harden. Off-season staff sit idle while peak season is overstretched.',
      fix:
        'Seats sold against capacity are tracked per departure and compared with the same date last year. The owner’s screen lists departures behind pace, with the supplier commitments that apply.',
      screen: 'owner',
    },
    {
      area: 'Guests',
      title: 'Post-tour feedback and complaints vanish',
      scene:
        'A guest complained to the guide about the hotel in Agra and nobody wrote it down. The hotel is used again next season. The complaint surfaces on a travel review site.',
      cost:
        'Repeated service failures at the same supplier, and repeat guests who quietly stop coming.',
      fix:
        'Complaints and feedback are recorded on the guest and the supplier concerned. Verity shows supplier ratings built from your own departures, and lists guests with unresolved complaints before the next sale.',
      screen: 'onground',
    },
    {
      area: 'Compliance',
      title: 'Licences, insurance and tax records sit in separate folders',
      scene:
        'A guide’s licence expires next month. The insurance for the coach has lapsed. The accountant needs the split between package value and agent commission for tax collected at source and for GST.',
      cost:
        'A guide who cannot legally work a group, a vehicle without cover, and a month-end scramble for documents.',
      fix:
        'Guides, vehicles and vendors carry their licence, insurance and permit expiry as dates. Verity lists what expires in the next 60 days, and sales are stored in parts so your accountant gets a clean split. Verity files nothing.',
      screen: 'resources',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '2,948 million',
      text: 'domestic tourist visits in India in 2024, up 17.5 percent on 2023. Domestic groups are now the biggest part of the market most operators serve.',
      source: { name: 'The Policy Edge, summarising the India Tourism Data Compendium 2025', year: '2025', url: 'https://www.policyedge.in/p/india-tourism-data-compendium-2025' },
    },
    {
      figure: '9.95 million',
      text: 'foreign tourist arrivals in 2024, inside a total of 20.57 million international arrivals that also counts 10.62 million non-resident Indians.',
      source: { name: 'The Policy Edge, summarising the India Tourism Data Compendium 2025', year: '2025', url: 'https://www.policyedge.in/p/india-tourism-data-compendium-2025' },
    },
    {
      figure: '30 to 60 days',
      text: 'before travel is when final payments are typically due from guests, while suppliers often want advance or immediate payment. That gap is what an operator finances.',
      source: { name: 'Softrip, tour operator cash flow (a software vendor)', year: '2025', url: 'https://www.softrip.com/resources/blog/tour-operator-cash-flow-challenges/' },
    },
    {
      figure: '5% or 18%',
      text: 'GST on tour operator services: 5 percent without input tax credit, or 18 percent if the operator claims credit on its costs.',
      source: { name: 'Razorpay, GST on tours and travels', year: '2025', url: 'https://razorpay.com/learn/gst-on-tours-and-travels/' },
    },
  ],
  factsNote:
    'The cash flow figure comes from a software vendor writing about tour operators in general, not about India. The GST figure comes from a payments company’s guide, not a notification. They show the scale of the problem, not what your operation will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Departures, services and guests are named in your operation’s own words.',
  screens: [
    {
      id: 'owner',
      title: 'Operations / Today',
      meta: 'All departures',
      heading: 'The owner’s morning view',
      caption:
        'What leaves this week, what is unconfirmed, what is behind pace on seats, and where cash is short, on one screen. It replaces the Monday call where each manager reads out their sheet.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Departures this week', value: '4', note: '112 guests' },
            { label: 'Unconfirmed services', value: '9', note: '3 within 7 days' },
            { label: 'Seats sold, Oct fixed', value: '58%', note: 'last year 74%' },
            { label: 'Cash gap, next 30 days', value: '₹11.4 lakh', note: 'supplier advances ahead of guest payments' },
          ],
        },
        { type: 'title', text: 'Fixed departures, seats sold' },
        {
          type: 'bars',
          items: [
            { label: 'Golden Triangle, 18 Oct', value: 92, display: '34 of 37' },
            { label: 'Kerala Backwaters, 25 Oct', value: 63, display: '19 of 30' },
            { label: 'Ladakh, 2 Nov', value: 41, display: '12 of 29', tone: 'muted' },
            { label: 'Rajasthan Heritage, 9 Nov', value: 35, display: '10 of 28', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Ladakh 2 Nov is 41% sold with 18 days left. Hotel advance of ₹2.2 lakh is due in 4 days.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Golden Triangle, Agra hotel', meta: 'Written confirmation not received, arrival in 3 days', tag: ['Chase', 'late', 'Confirmed', 'ok'] },
            { name: 'Kerala coach, driver names', meta: 'Needed by the hotel for gate passes', tag: ['Send', 'flag', 'Sent', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'departure',
      title: 'Departure file',
      meta: 'Golden Triangle, 18 Oct',
      heading: 'One file for the whole departure',
      caption:
        'Guests, rooming, diets and medical notes with the services booked for the days of the tour. The manifest the guide carries and the list the hotel gets are produced from this file.',
      blocks: [
        {
          type: 'record',
          title: 'Golden Triangle, 18 to 24 Oct',
          sub: '34 guests, 17 rooms. Tour manager: Arvind',
          fields: [
            ['Guests', '34 of 37 seats'],
            ['Rooming list', ['2 changes pending', 'flag', 'Sent to hotels', 'ok']],
            ['Dietary notes', ['3 guests, 1 severe allergy', 'late']],
            ['Documents', ['All received', 'ok']],
            ['Cost sheet', '₹14.9 lakh quoted'],
            ['Guest payments', ['₹3.1 lakh pending', 'flag', 'Paid', 'ok']],
          ],
          timeline: [
            ['Today', 'Rooming list v4 to Agra and Jaipur hotels'],
            ['16 Oct', 'Final coach and driver details to the hotels'],
            ['15 Oct', 'Two guests swapped rooms, list updated'],
            ['Note', 'Mrs Pillai: severe nut allergy, brief every restaurant.'],
          ],
        },
      ],
    },
    {
      id: 'confirmations',
      title: 'Supplier confirmations',
      meta: 'Next 14 days of arrivals',
      heading: 'Every service, confirmed or not',
      caption:
        'Hotels, coaches, guides, tickets and permits for every departure, with status and days to use. Services without a written confirmation sit at the top, and room blocks show unsold rooms against release dates.',
      blocks: [
        {
          type: 'table',
          cols: ['Departure', 'Service', 'Supplier', 'Days left', 'Status'],
          rows: [
            ['Golden Triangle', '17 rooms, 3 nights', 'Agra hotel', '3', ['Verbal only', 'late', 'Confirmed', 'ok']],
            ['Kerala Backwaters', 'Houseboat, 15 pax', 'Alleppey operator', '10', ['Requested', 'flag', 'Confirmed', 'ok']],
            ['Ladakh', 'Block of 20 rooms', 'Leh hotel', '18', ['Release in 6 days', 'flag']],
            ['Rajasthan Heritage', 'Coach, 40 seats', 'Transport co.', '25', ['Confirmed', 'ok']],
          ],
        },
        { type: 'alert', text: 'Leh hotel block: 20 rooms held, 12 sold, release date in 6 days.', action: 'Decide' },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      meta: 'Guests in, suppliers out',
      heading: 'Guest instalments against supplier advances, by week',
      caption:
        'What guests and overseas agents still owe, what suppliers want and when, and the gap in between. The accountant and owner read the same figures.',
      blocks: [
        {
          type: 'table',
          cols: ['Week of', 'Guests pay in', 'Suppliers want', 'Gap', 'Note'],
          rows: [
            ['13 Oct', '₹4.2 lakh', '₹6.0 lakh', '-₹1.8 lakh', ['Short', 'late', 'Covered', 'ok']],
            ['20 Oct', '₹3.5 lakh', '₹5.1 lakh', '-₹1.6 lakh', ['Short', 'flag']],
            ['27 Oct', '₹5.9 lakh', '₹4.4 lakh', '+₹1.5 lakh', ['Ahead', 'ok']],
            ['3 Nov', '₹2.8 lakh', '₹7.2 lakh', '-₹4.4 lakh', ['Short', 'late']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'UK agent, Heritage group of 12', meta: 'GBP balance 21 days overdue', tag: ['Chase', 'late', 'Received', 'ok']},
            { name: 'Ladakh hotel advance', meta: '₹2.2 lakh, due in 4 days', tag: ['Schedule', 'flag', 'Paid', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'costing',
      title: 'Departure costing',
      meta: 'Quoted against actual',
      heading: 'What each departure is really making',
      caption:
        'Each cost line shows the quoted figure and the actual so far. Margin is visible while the departure is still running, and the quote for next season starts from real numbers.',
      blocks: [
        {
          type: 'table',
          cols: ['Cost line', 'Quoted', 'Actual so far', 'Difference', 'Note'],
          rows: [
            ['Hotels', '₹6.2 lakh', '₹6.5 lakh', '+₹30,000', ['Over', 'late']],
            ['Coach and fuel', '₹2.4 lakh', '₹2.4 lakh', '₹0', ['On cost', 'ok']],
            ['Guides', '₹90,000', '₹1.2 lakh', '+₹30,000', ['Over', 'flag']],
            ['Entry tickets', '₹1.1 lakh', '₹95,000', '-₹15,000', ['Under', 'ok']],
          ],
        },
        { type: 'title', text: 'Margin by departure' },
        {
          type: 'bars',
          items: [
            { label: 'Golden Triangle 18 Oct', value: 74, display: '17%' },
            { label: 'Kerala Backwaters 25 Oct', value: 58, display: '13%' },
            { label: 'Ladakh 2 Nov', value: 29, display: '6%', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'resources',
      title: 'Guides, vehicles and permits',
      meta: 'Calendar and expiry',
      heading: 'Who and what is where, and what is about to expire',
      caption:
        'A calendar of guides, drivers and vehicles by departure, with clashes flagged. Licences, insurance and permit release dates are listed with the days remaining.',
      blocks: [
        {
          type: 'table',
          cols: ['Resource', 'Departure A', 'Departure B', 'Clash', 'Expiry'],
          rows: [
            ['Guide Hemant', 'Jodhpur to 14 Oct', 'Udaipur from 13 Oct', ['1 day', 'late', 'Replaced', 'ok'], 'Licence Mar'],
            ['Coach RJ14', 'Kerala 25 Oct', '', ['None', 'ok'], ['Insurance 20 Oct', 'flag']],
            ['Driver Salim', 'Golden Triangle', '', ['None', 'ok'], 'Licence 2028'],
            ['Ranthambore permit', 'Heritage 12 Nov', '', ['Names changed', 'flag', 'Updated', 'ok'], ['Booking opens 5 Oct', 'info']],
          ],
        },
        { type: 'alert', text: 'Coach RJ14 insurance expires 20 Oct, before the Kerala departure.', action: 'Renew' },
      ],
    },
    {
      id: 'onground',
      title: 'On the road',
      meta: 'Golden Triangle, day 3',
      heading: 'The tour in progress, as the office sees it',
      caption:
        'The guide logs a change, a complaint or an expense once and the office sees it, with tomorrow’s services listed. Advances and settlements are tracked for each tour manager.',
      blocks: [
        {
          type: 'list',
          items: [
            { name: 'Highway closed near Jaipur', meta: 'Lunch moved to Dausa, arrival 2 hours late. Jaipur hotel to be told.', tag: ['Inform', 'late', 'Informed', 'ok'] },
            { name: 'Guest complaint: Agra hotel AC', meta: 'Logged against hotel and Mr Verma', tag: ['Open', 'flag', 'Resolved', 'ok'] },
            { name: 'Extra coach km today', meta: '₹4,800 added to departure cost', tag: ['Logged', 'info'] },
          ],
        },
        {
          type: 'kpis',
          items: [
            { label: 'Advance to Arvind', value: '₹80,000', note: 'given 17 Oct' },
            { label: 'Spent so far', value: '₹46,200', note: '31 slips attached' },
            { label: 'Balance to settle', value: '₹33,800', note: 'due at tour end' },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Thursday, before and after.',
  dayLede: 'The tours and suppliers are the same. What changes is that the departure leaves a record that anyone on the team can read.',
  day: [
    {
      time: '9:00',
      before: 'You read the Excel sheets of four departures and call the operations manager to confirm what is open.',
      after: 'The Today screen lists nine unconfirmed services and three due within a week, each with a name.',
    },
    {
      time: '11:30',
      before: 'A hotel says it is giving back rooms from the Ladakh block because the release date passed.',
      after: 'The block was flagged six days earlier, and the unsold rooms were either sold or returned in time.',
    },
    {
      time: '2:00',
      before: 'Two guests swap rooms and one drops out. The guide’s printed list is now wrong.',
      after: 'The change is made on the guest record and the manifest and rooming list update for everyone.',
    },
    {
      time: '4:30',
      before: 'A guide is promised to two departures. You learn of it when he calls both offices.',
      after: 'The clash appears when the second assignment is made, and a replacement is booked that afternoon.',
    },
    {
      time: '7:00',
      before: 'The guide calls from the road with a closure. The office decides by phone and nobody notes the cost.',
      after: 'The guide logs the change, tomorrow’s hotel is warned, and the extra coach cost lands on the departure.',
    },
    {
      time: 'Tour end',
      before: 'The tour manager returns with slips and the margin on the departure is known in two months.',
      after: 'Slips are settled against the advance, and the departure’s margin is on the screen the same week.',
    },
  ],

  approach: {
    heading: 'Four weeks from today’s spreadsheets to a working system.',
    lede:
      'We start with a real departure on your calendar, not a demo. We learn how your team runs it, build Verity around that, move your live departures across, and stay on through your next busy stretch.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and your operations manager for a day. Follow one live departure from booking to return and list every supplier, document, payment and handover.',
        you: 'Two to three hours from you and your operations manager. One or two departure sheets, supplier contracts and a cost sheet.',
        get: 'A written map of how a departure runs in your company, the tour types you sell, the milestones that matter for each, and the problems we will tackle first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your tour types, service types, supplier terms, payment schedules, cost-sheet lines, guest fields, guide and vehicle calendars and the roles for sales, operations and accounts.',
        you: 'Check the setup with your operations manager. Tell us where a milestone or cost line is wrong for a tour you really run.',
        get: 'A working Verity with your tours, suppliers and cost lines in your own words, ready for your live departures.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your upcoming departures, guest lists, supplier details, open advances and receivables from your sheets and mail. Train the team on one real departure each.',
        you: 'Your upcoming departure sheets and the dues list, in whatever shape they exist. An hour with the sales, operations and accounts people.',
        get: 'Your live departures, services and dues inside Verity, and a team that has worked one departure end to end in it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through the first two or three departures to tune lists and rules, and adapt the system when you add a destination or a new type of tour.',
        you: 'A short monthly review of departure margins and open supplier items.',
        get: 'A system that keeps pace with the tours you add, with someone responsible for it.',
      },
    ],
    bring: [
      'Your next three months of departures, in any form',
      'Supplier list with contracts, rates and advance terms',
      'Your cost-sheet template or the last few cost sheets',
      'Guide, driver and vehicle lists with licence and insurance dates',
      'Guest and overseas agent records, with balances still due',
    ],
    time: 'About 8 to 12 hours of your own time across the four weeks, mostly in week 1. Your operations manager and accounts person need a few more.',
    after: 'Nobody is hired to run Verity. Services are added to the departure as they are booked, and the lists, dues and margins come from those entries.',
  },

  ai: {
    heading: 'Ask your operation a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own departure, guest, supplier and payment records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which services are unconfirmed for departures in the next 10 days?',
        a: '9 services across 4 departures. Three are within a week, and one is the Agra hotel for Golden Triangle.',
        rows: [['Golden Triangle', '3'], ['Kerala Backwaters', '4'], ['Ladakh', '2']],
        action: 'Assign each to the reservations team',
      },
      {
        q: 'Which departures are making less than 10 percent margin?',
        a: 'Ladakh on 2 Nov is at 6 percent. Hotel and guide lines are both over the costed amount.',
        rows: [['Ladakh 2 Nov', '6%'], ['Kerala 25 Oct', '13%'], ['Golden Triangle 18 Oct', '17%']],
      },
      {
        q: 'Which guides are free between 10 and 20 November?',
        a: '6 guides are free for the whole period, 3 in Rajasthan and 3 in Kerala. Hemant is free from the 15th.',
        rows: [['Rajasthan', '3'], ['Kerala', '3'], ['Ladakh', '0']],
        action: 'Hold two guides for the Ladakh departure',
      },
    ],
  },

  automationHeading: 'The chasing nobody has time to do.',
  automationLede: 'Set once, then they run from your records. Your team still calls and sends. Verity tells the right person when and records what came back.',
  automations: [
    {
      when: 'A service is added to a departure',
      then: ['Confirmation task created with a due date', 'Cancellation and advance dates stored', 'Shown as unconfirmed until a reference is entered'],
    },
    {
      when: 'A room block is 10 days from release',
      then: ['Rooms sold and unsold are counted', 'Task to sales to fill or release', 'Release decision recorded'],
    },
    {
      when: 'A guest is added or their room changes',
      then: ['Rooming list and manifest regenerate', 'Task to send the new list to hotels', 'Change history kept on the departure'],
    },
    {
      when: 'A guide or vehicle is assigned',
      then: ['Other dates are checked for a clash', 'Licence and insurance expiry compared with the trip', 'Assignment confirmed with the supplier'],
    },
    {
      when: 'A supplier advance is due in a week',
      then: ['Compared with guest payments expected', 'Task to accounts to schedule the payment', 'Marked paid when entered'],
    },
    {
      when: 'A tour ends',
      then: ['Advance settled against slips', 'Quoted and actual cost compared', 'Complaints sent to the suppliers concerned'],
    },
  ],

  rules: {
    heading: 'The rules a tour operator has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules lean on in order, so your accountant is not rebuilding them from vouchers.',
    items: [
      {
        name: 'GST on tour packages',
        what: 'Tour operator services are generally taxed at 5 percent without input tax credit, or 18 percent if the operator chooses to claim credit on its own costs. Rates and options change, so check current notifications.',
        how: 'Each departure is costed in parts, so the value of the package, the supplier costs and the margin are separate lines for your accountant.',
        source: { name: 'Razorpay, GST on tours and travels', url: 'https://razorpay.com/learn/gst-on-tours-and-travels/' },
      },
      {
        name: 'Tax collected at source on overseas packages',
        what: 'Operators selling overseas tour packages generally have to collect tax at source from the buyer. The 2025 Budget changed the threshold and the rules were renumbered in the new Income-tax Act, so confirm the current position with your accountant.',
        how: 'The amount collected and the traveller’s PAN sit on the same record as the package.',
      },
      {
        name: 'Ministry of Tourism recognition',
        what: 'Operators handling foreign tourists can apply for recognition as an approved inbound tour operator. It is voluntary and based on an inspection, with its own renewal cycle. Check the Ministry’s current guidelines and forms.',
        how: 'Documents the application asks for, such as financial records and staff details, are kept in one place with dates for renewal.',
        source: { name: 'India.gov.in, inbound tour operator guidelines', url: 'https://www.india.gov.in/guidelines-approved-inbound-tour-operators' },
      },
      {
        name: 'Guide, vehicle and permit rules',
        what: 'Guides, drivers, vehicles and park permits each have licences, insurance or booking rules that differ by state and by site, including name and cancellation rules on permit portals.',
        how: 'Licence and insurance dates are held on each guide and vehicle, and permit services carry their release date and names.',
      },
    ],
    note: 'Rules change and differ by state and by destination. Confirm current requirements with your accountant or the authority concerned.',
  },

  rolesHeading: 'Everyone sees the same departure, through their own window.',
  rolesLede: 'A guide should not see the departure’s margin. Accounts should not edit a rooming list. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which departures are at risk and what is the cash gap?', sees: 'Seats sold against last year, unconfirmed services, margin per departure, supplier advances against guest payments.' },
    { role: 'Operations manager', question: 'Is every departure ready?', sees: 'Confirmation status, resource calendar, rooming lists, permit dates and incidents on tours running now.' },
    { role: 'Reservations executive', question: 'What do I still need to confirm?', sees: 'Services awaiting confirmation, room blocks near release, supplier contacts and cancellation terms.' },
    { role: 'Tour manager or guide', question: 'Who is in my group and what is tomorrow?', sees: 'The manifest with diets and medical notes, tomorrow’s services, and his own advance and expenses.' },
    { role: 'Accounts', question: 'What is owed in and out?', sees: 'Guest and agent receivables by currency and age, supplier payables by date, and the departure cost sheets.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'The websites, booking engines and portals your team books hotels, trains and permits on today.',
      'Your accounting software and your accountant, who prepares your returns.',
      'WhatsApp with guides, drivers and guests. The team sends; Verity tells them whom and when.',
      'Your ground agents and your own relationships with suppliers.',
    ],
    not: [
      'Sell tours to the public on its own website.',
      'Message guests or suppliers on its own.',
      'Run payroll or file tax returns.',
      'Replace the judgement of your operations manager.',
    ],
    migration:
      'We bring your upcoming departures, guest lists, supplier terms and open dues across from the sheets and mailboxes you use now, in stages, so departures keep running while it happens.',
  },

  faqHeading: 'Questions tour operators ask.',
  faqs: [
    [
      'Will my ground team and guides use it from the road?',
      'Guides and tour managers need only a few things: the manifest, tomorrow’s services and a place to log changes and expenses. We set those up with them and test on a live departure. Where signal is poor, the office can enter what the guide reports by phone.',
    ],
    [
      'We run both fixed departures and custom tours. Can it handle both?',
      'Yes. A fixed departure has seats sold against capacity and many guests. A custom tour is one party with its own services. Both are departures with guests, services, suppliers and payments, and setup covers each type you run.',
    ],
    [
      'Does Verity sell tours or take guest bookings online?',
      'No. Your sales team and website keep doing that. Verity holds the booking once it exists and runs the departure behind it.',
    ],
    [
      'Can it manage inbound tours with overseas agents?',
      'Yes. Agents are clients with their own bookings, due dates and balances in the contract currency, so receivables by agent and age are visible. Your team still handles the conversations.',
    ],
    [
      'How does it deal with changes on the road?',
      'The guide or ground manager logs the change once. The office sees it at once, tomorrow’s affected services are listed, and the extra cost lands on the departure for later review.',
    ],
    [
      'Who can see guest passports and medical notes?',
      'Only the people you allow. Access is set by role, so the guide sees the manifest for his own group, accounts see payments and not medical notes, and every change is recorded with who made it and when.',
    ],
    [
      'Will it work out departure costs the way I do?',
      'It uses your own cost-sheet lines and shows quoted against actual for each. We set these up in week 2 and test them against a past departure before go-live.',
    ],
    [
      'Can I see several offices or destinations together?',
      'Yes. Each office or destination is a location in one system, and departures, dues and margins can be compared side by side.',
    ],
    [
      'How long before I see results?',
      'The unconfirmed-services list and the room-block release warnings only need your upcoming departures, so we aim to have them working first. Margin trends become reliable after a few departures are fully recorded.',
    ],
    [
      'What does it cost?',
      'It depends on the number of offices, staff and tour types you want set up. Message us and we will give you a clear number after a short conversation about how your operation runs.',
    ],
  ],

  related: ['travel-agencies', 'hotels', 'resorts', 'car-rentals', 'event-venues', 'hostels'],

  ctaHeading: 'Start with next month’s departures.',
  ctaLede:
    'Send us your next departure sheet and we will show you the unconfirmed services, room blocks near release and cash gaps it hides, using your own bookings.',
};
