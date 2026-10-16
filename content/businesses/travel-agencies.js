export default {
  schema: 2,
  slug: 'travel-agencies',
  status: 'published',
  plural: 'travel agencies',
  subject: 'travel agency',
  checked: '15 October 2026',

  seo: {
    title: 'Travel agency software: deadlines, trip files, dues | Verity',
    description:
      '14 problems that cost a travel agency money: lapsed fare holds, missed deposits, visa paperwork, instalments, unclaimed commission, and the Verity screens that fix them.',
    keywords: [
      'travel agency management software India',
      'travel agent supplier deadline tracking',
      'travel booking file management',
      'traveller document and visa tracking',
      'travel agency commission tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'suppliers', 'schedule', 'workforce', 'ai'],

  hero: {
    eyebrow: 'Verity for travel agencies',
    headline: 'A fare hold lapses at 6 pm and nobody knew. Verity keeps every deadline in front of the right person.',
    lede:
      'A trip is not one booking. It is a flight, two hotels, a visa, a transfer and an insurance policy, each with its own supplier, its own deadline and its own money. Most agencies hold that together with a chat group, a mailbox and one very good memory. Verity gives every trip one file that knows what is booked, what is due and who is chasing it.',
    oneLine:
      'One system where every enquiry becomes a trip file, every supplier deadline is a dated task, and every rupee owed in or out is visible before the traveller leaves.',
    note: 'Your team keeps using the airline, hotel and visa portals they use now. Verity holds the file around them.',
    screen: 'owner',
    screenNote: 'trips, deadlines, client dues and commission',
  },

  today: {
    heading: 'The booking is the easy part. Everything around it is what goes wrong.',
    paragraphs: [
      'A family of five wants ten days in Europe. By the time it is confirmed there are flight tickets, hotel vouchers in four cities, a rail pass, five visa files, travel insurance, a forex card and a deposit schedule. Each piece was bought from a different supplier, on a different day, with a different cancellation rule.',
      'None of that is written in one place. The quote is in a PDF, the fare hold is a note on a phone, the hotel deposit date is in an email, and the passport copies are in someone’s WhatsApp. The agent who built the trip is the only person who can say what is done and what is pending, and she is also handling nine other trips.',
      'So the common failures are small and expensive: a hold that expires, a deposit paid a day late, a visa file missing one page, a client balance nobody chased before departure, and commission the supplier owes but nobody claimed.',
    ],
    stack: ['WhatsApp groups per trip', 'Email threads with suppliers', 'Excel sheet of departures', 'Airline, hotel and visa portals', 'Paper or PDF passports and vouchers'],
    stackNote: 'Each tool does its job. The trip itself, its dates and its money, lives only in people’s heads.',
  },

  painsHeading: 'Where a travel agency actually loses money and sleep.',
  painsLede:
    'These are the situations agency owners describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Enquiries',
      title: 'Enquiries are quoted once and never followed up',
      scene:
        'Someone asks about Bali for six people in March. The agent sends a quote on WhatsApp on a busy Friday. The family says they will think about it. Nobody calls them back, and two weeks later they book with an online site.',
      cost:
        'Example arithmetic: 40 quotes a month, a 20 percent close rate, and an average trip margin of ₹18,000. If following up properly lifts the close rate to 25 percent, that is two more trips a month, about ₹4.3 lakh a year.',
      fix:
        'Every enquiry is a record with the traveller, dates, budget and quote versions. Verity sets a follow-up task on the day you choose and lists quotes that have gone quiet, with the agent who owns each.',
      screen: 'pipeline',
    },
    {
      area: 'Enquiries',
      title: 'The quote goes stale because supplier rates move',
      scene:
        'The quote was built on a fare that was available on Monday. By Thursday, when the client says yes, the fare is higher and the hotel has changed its rate. The agent either eats the difference or goes back to an annoyed client.',
      cost:
        'Either a trip sold at a loss, or a client lost at the moment they were ready. Neither shows up as a line in the books.',
      fix:
        'Each quote line records the supplier, the rate and the date it was quoted, and how long it is valid. Verity flags quotes that are older than their validity so they are re-priced before they are confirmed.',
      screen: 'pipeline',
    },
    {
      area: 'Suppliers',
      title: 'Fare holds and ticketing deadlines lapse',
      scene:
        'A group’s flight seats are on hold with a ticketing time limit of 6 pm today. The client’s deposit arrived but the agent who handles the group is out. At 6:05 the seats are released and the fare doubles.',
      cost:
        'A lost block of seats, a client who has to pay more or go elsewhere, and a hard conversation about who was meant to ticket.',
      fix:
        'Every hold carries its deadline as a dated task with a named owner and a backup. The deadlines screen sorts by time left, and anything due today is at the top of the owner’s Today view.',
      screen: 'deadlines',
    },
    {
      area: 'Suppliers',
      title: 'Hotel deposits and cancellation dates are missed',
      scene:
        'A hotel in Udaipur needs a 30 percent deposit by the 10th and allows free cancellation until the 20th. Both dates are in the confirmation email. Nobody puts them anywhere else, so the deposit goes late and a free cancellation window passes unnoticed.',
      cost:
        'Example arithmetic: a ₹2.4 lakh room block cancelled a week too late at a 50 percent penalty is ₹1.2 lakh, for a mistake that took one calendar entry to avoid.',
      fix:
        'Each booking component stores its deposit date, balance date and last free cancellation date. Verity creates those as tasks, and lists them across all trips so you see everything falling due in the next seven days.',
      screen: 'deadlines',
    },
    {
      area: 'Trips',
      title: 'One trip lives in six places',
      scene:
        'The itinerary is a Word file, the flight tickets are in an email, the hotel vouchers are on a portal, the transfer is in a WhatsApp message, and the visa status is in the executive’s notebook. A colleague covering for her cannot answer a simple call.',
      cost:
        'A client who calls with a problem gets “let me check” and a callback an hour later. Agents lose time every day finding things, and trips slip when the one person who knows is away.',
      fix:
        'A trip file holds every component with its supplier, confirmation number, cost, sale price, status and deadline, plus the documents, messages and notes. Anyone covering the trip sees the same page.',
      screen: 'trip',
    },
    {
      area: 'Trips',
      title: 'Clients change dates and cancellation charges get worked out on a napkin',
      scene:
        'A client cancels eleven days before departure. The airline has one rule, the hotel another, the transfer company a third, and your own service fee a fourth. The agent adds it up by hand and quotes a number that turns out wrong.',
      cost:
        'Under-recovering charges means paying suppliers from your own pocket. Over-charging means a dispute and a bad review.',
      fix:
        'Because each component records its own cancellation terms, the trip file shows what each supplier will charge today and what you charge on top. The agent quotes from the file rather than from memory, and the decision is recorded.',
      screen: 'trip',
    },
    {
      area: 'Documents',
      title: 'Visa files go in with a page missing or a passport about to expire',
      scene:
        'Five travellers, five checklists. One passport has under six months left, one bank statement is a month too old, and a minor’s consent letter is missing. It is found when the visa centre rejects the appointment, two weeks before departure.',
      cost:
        'A rebooked appointment, a rushed courier, sometimes a trip that cannot go. The agency usually absorbs the change fees it cannot recover.',
      fix:
        'Each traveller has a document checklist for the destination, with passport expiry date, photo, forms and supporting papers ticked off. Verity flags passports close to expiry and any file with a missing item before it is submitted.',
      screen: 'documents',
    },
    {
      area: 'Documents',
      title: 'Traveller details are typed again for every supplier',
      scene:
        'The same passport number is typed into the airline form, the hotel list, the insurance proposal and the visa application. A single spelling difference between passport and ticket means a denied boarding or a costly name correction.',
      cost:
        'Hours of re-typing per trip and a steady trickle of name errors, each of which can mean a fee or a lost ticket.',
      fix:
        'Traveller details are entered once on the person’s record and copied into each component. When a name or passport detail changes, it changes in one place and the file shows which bookings need correcting.',
      screen: 'documents',
    },
    {
      area: 'Money',
      title: 'Client instalments are chased by hand',
      scene:
        'A package is paid in three parts: booking, 45 days before, and 15 days before. The second instalment is two weeks late. The agent is shy of asking, and the balance is still open the day the suppliers need to be paid.',
      cost:
        'Money tied up in your own pocket while you pay suppliers on time, and in the worst case a traveller who departs with a balance outstanding.',
      fix:
        'Each trip has a payment schedule against the traveller. Verity lists balances due this week and past due, with the trip and the agent, and creates a reminder task for the owner of the file.',
      screen: 'money',
    },
    {
      area: 'Money',
      title: 'Commission and incentives the supplier owes are never claimed',
      scene:
        'A hotel chain owes a commission on a stay, an insurer owes a payout, and an airline has a volume incentive. Nobody tracks which have been paid. A year later the claim window has closed.',
      cost:
        'Example arithmetic: ₹1,500 in unclaimed commission on each of 30 trips a month is about ₹5.4 lakh a year, income already earned and never collected.',
      fix:
        'Each component records the commission expected and its status. The money screen lists commission due per supplier by age, so claims go in while the supplier still accepts them.',
      screen: 'money',
    },
    {
      area: 'Money',
      title: 'The agency becomes the bank for refunds',
      scene:
        'A flight is cancelled by the airline. The client expects money back now, the airline takes weeks to pay, and the agent has already paid the airline in full. The agency lends the client the money in the meantime.',
      cost:
        'Cash locked up for weeks, multiplied across every cancellation in a bad month. Trade bodies have described agents as acting as financiers in earlier refund disputes.',
      fix:
        'Refunds owed by suppliers are recorded against the trip and the booking, with the date claimed and the age. Verity lists what each supplier owes the agency, so follow-up is a short list rather than a memory.',
      screen: 'money',
    },
    {
      area: 'Staff',
      title: 'When an agent leaves or goes on leave, her trips stall',
      scene:
        'Your best agent resigns on the 20th. Eleven live trips sit in her inbox and phone, three of them leaving next week. The clients ask for her by name.',
      cost:
        'Rushed handovers, mistakes on departing trips, and clients who follow the agent to her next employer.',
      fix:
        'Trips and clients belong to the agency’s system, not to an individual inbox. Reassigning a trip moves the file, deadlines and open tasks to the new owner in one step, and the handover list is ready the day someone resigns.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'You cannot see what is leaving this week and what is at risk',
      scene:
        'It is Wednesday. You want to know which trips depart in the next ten days, which have a payment open, a visa pending or a deadline due. The answer takes an hour of asking four people.',
      cost:
        'Problems are found at the airport, not at the desk. The owner spends the week reacting.',
      fix:
        'The Today screen lists trips departing soon with open items against each, supplier deadlines due, balances overdue and commission outstanding, so you spend time on exceptions rather than on collecting updates.',
      screen: 'owner',
    },
    {
      area: 'Compliance',
      title: 'Tax and records for each sale are rebuilt at year end',
      scene:
        'Overseas packages and ticket sales are taxed differently, and some need tax collected at source. The accountant asks for a split of package value, agent fee and commission for the year. The team rebuilds it from invoices.',
      cost:
        'Days of accountant time and a real risk of mistakes in what was collected from the client.',
      fix:
        'Each sale is stored with its parts: package, ticket, service fee, commission and the traveller’s PAN where relevant. The accountant gets the split by month without anyone rebuilding it. Verity does not file anything.',
      screen: 'money',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '~30 million',
      text: 'Indians travelled abroad in 2024, up about 10 percent from 27.3 million in 2023. Every one of those trips is a set of bookings someone has to keep straight.',
      source: { name: 'FactoData, citing the Ministry of Tourism', year: '2025', url: 'https://factodata.com/top-foreign-destinations-for-indian-tourists-2024/' },
    },
    {
      figure: '21 working days',
      text: 'proposed outer limit for refunds on tickets bought through agents or portals, with the airline responsible. This was a draft rule reported in November 2025.',
      source: { name: 'Business Today on the DGCA draft', year: '2025', url: 'https://www.businesstoday.in/latest/economy/story/dgca-proposes-passenger-friendly-refund-norms-for-airlines-500760-2025-11-04' },
    },
    {
      figure: '48 hours',
      text: 'proposed free look-in window after booking an air ticket, with changes or cancellation at no extra charge beyond fare difference. Draft rule, with exceptions for flights soon after booking.',
      source: { name: 'Business Today on the DGCA draft', year: '2025', url: 'https://www.businesstoday.in/latest/economy/story/dgca-proposes-passenger-friendly-refund-norms-for-airlines-500760-2025-11-04' },
    },
    {
      figure: '5% or 18%',
      text: 'GST on tour operator services: 5 percent if the operator does not claim input tax credit, 18 percent if it does. Air ticket agents charge 18 percent on their fee or commission.',
      source: { name: 'Razorpay, GST on tours and travels', year: '2025', url: 'https://razorpay.com/learn/gst-on-tours-and-travels/' },
    },
  ],
  factsNote:
    'The outbound travel figure is a secondary report that cites the Ministry of Tourism. The refund and look-in rules were draft proposals when reported and later revised, so check the final DGCA text. The GST figure comes from a payments company’s guide, not a government notification. They show the scale of the problem, not what your agency will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your agency’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Agency / Today',
      meta: 'Head office, Pune',
      heading: 'The owner’s morning view',
      caption:
        'Departures, supplier deadlines, client dues and commission outstanding on one screen, with the items that need a decision listed below. This replaces the morning round of asking each agent for updates.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Departing in 10 days', value: '9', note: '3 have open items' },
            { label: 'Supplier deadlines', value: '14', note: 'due this week' },
            { label: 'Client balances due', value: '₹6.8 lakh', note: '₹2.1 lakh overdue' },
            { label: 'Commission to claim', value: '₹94,000', note: '22 bookings' },
          ],
        },
        { type: 'title', text: 'Open trips by agent' },
        {
          type: 'bars',
          items: [
            { label: 'Kavita', value: 85, display: '17 trips' },
            { label: 'Sameer', value: 60, display: '12 trips' },
            { label: 'Neelam', value: 45, display: '9 trips' },
            { label: 'Imran', value: 25, display: '5 trips', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Rao family, Europe, leaves in 8 days. Two visa files incomplete and second instalment overdue.', action: 'Open trip' },
        {
          type: 'list',
          items: [
            { name: 'Bali group hold, 6 seats', meta: 'Ticketing time limit 6 pm today, owner Kavita', tag: ['Ticket', 'late', 'Ticketed', 'ok'] },
            { name: 'Kavita’s trips during leave', meta: '4 trips reassigned to Sameer', tag: ['Assign', 'flag', 'Assigned', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'pipeline',
      title: 'Enquiries',
      meta: 'Quotes and follow-ups',
      heading: 'Every enquiry, every quote, every follow-up',
      caption:
        'Enquiries move from new to quoted to confirmed. Quotes that have gone quiet or whose rates have expired are flagged, and the follow-up is a task on the agent’s screen with the outcome recorded.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'New',
              cards: [
                { title: 'Menon, Dubai, 4 pax', meta: 'Dec 20 to 27, budget ₹3.5 lakh', tag: ['Quote', 'flag'] },
                { title: 'Iyer, Kerala honeymoon', meta: 'Nov, 5 nights', tag: ['Quote', 'flag'] },
              ],
            },
            {
              name: 'Quoted',
              cards: [
                { title: 'Shah, Bali, 6 pax', meta: 'Quoted 4 Oct, rates valid to 12 Oct', tag: ['Re-price', 'late', 'Re-priced', 'ok'] },
                { title: 'Kulkarni, Japan, 2 pax', meta: 'Quiet for 9 days, owner Neelam', tag: ['Call', 'flag', 'Called', 'ok'] },
              ],
            },
            {
              name: 'Confirmed',
              cards: [
                { title: 'Rao, Europe, 5 pax', meta: 'Deposit received', tag: ['Booked', 'ok'] },
              ],
            },
          ],
        },
        { type: 'alert', text: '7 quotes are older than their rate validity. 4 have gone quiet for over a week.', action: 'Assign all' },
      ],
    },
    {
      id: 'trip',
      title: 'Trip file',
      meta: 'Rao family, Europe',
      heading: 'One file for the whole trip',
      caption:
        'Every flight, hotel, rail pass and transfer with its supplier, confirmation, cost, sale price and deadline. Whoever covers for the agent opens the same page and can answer the client.',
      blocks: [
        {
          type: 'record',
          title: 'Rao family, Europe, 5 travellers',
          sub: 'Departs 23 Oct, returns 3 Nov. Owner: Kavita',
          fields: [
            ['Sale price', '₹9.6 lakh'],
            ['Cost booked', '₹8.1 lakh'],
            ['Received', '₹5.8 lakh'],
            ['Balance', ['₹3.8 lakh due 15 Oct', 'late', 'Paid', 'ok']],
            ['Visas', ['3 of 5 ready', 'flag', '5 of 5 ready', 'ok']],
            ['Insurance', ['Not issued', 'flag', 'Issued', 'ok']],
          ],
          timeline: [
            ['Today', 'Paris hotel balance due, owner Kavita'],
            ['18 Oct', 'Last free cancellation, Rome hotel'],
            ['12 Oct', 'Flights ticketed'],
            ['Note', 'Mrs Rao needs a ground floor room. Child under 12 on seat 2.'],
          ],
        },
      ],
    },
    {
      id: 'deadlines',
      title: 'Supplier deadlines',
      meta: 'All trips, next 7 days',
      heading: 'Everything that falls due, in time order',
      caption:
        'Fare holds, deposits, balance payments and last free cancellation dates from every trip, sorted by time left and assigned to a named person. The agency stops depending on calendar entries.',
      blocks: [
        {
          type: 'table',
          cols: ['Due', 'Trip', 'Supplier', 'Item', 'Status'],
          rows: [
            ['Today 6 pm', 'Shah, Bali', 'Airline', 'Ticket 6 held seats', ['Due', 'late', 'Ticketed', 'ok']],
            ['Today', 'Rao, Europe', 'Paris hotel', 'Balance ₹1.1 lakh', ['Unpaid', 'late', 'Paid', 'ok']],
            ['Tomorrow', 'Iyer, Kerala', 'Resort', '30% deposit', ['Pending', 'flag', 'Paid', 'ok']],
            ['18 Oct', 'Rao, Europe', 'Rome hotel', 'Free cancel ends', ['Decide', 'flag', 'Kept', 'ok']],
            ['20 Oct', 'Menon, Dubai', 'DMC', 'Quote validity ends', ['Open', 'muted']],
          ],
        },
        { type: 'alert', text: '3 deadlines have no backup owner and the main owner is on leave next week.', action: 'Add backup' },
      ],
    },
    {
      id: 'documents',
      title: 'Traveller documents',
      meta: 'Visa and passport checks',
      heading: 'Documents ticked off per traveller, per destination',
      caption:
        'A checklist for each traveller based on the destination’s requirements, with passport expiry flagged. A file with a missing item is caught before it goes to the visa centre.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Passport copy, Rao Suresh', meta: 'Valid to 2031', done: true },
            { text: 'Passport copy, Rao Meena', meta: 'Valid to 14 Mar, under six months after return', done: false },
            { text: 'Bank statement, last three months', meta: 'Dated 6 Jul, needs a fresh one', done: false },
            { text: 'Consent letter, minor traveller', meta: 'Received 9 Oct', done: true },
            { text: 'Travel insurance policy', meta: 'Not yet issued', done: false },
          ],
        },
        { type: 'alert', text: '2 travellers have passports that expire within six months of return.', action: 'Notify clients' },
      ],
    },
    {
      id: 'money',
      title: 'Money',
      meta: 'Dues in and out',
      heading: 'Client balances, supplier payments, commission and refunds owed',
      caption:
        'What clients still owe, what you owe suppliers, what suppliers owe you in commission and refunds, side by side per trip. The accountant gets the split without rebuilding it.',
      blocks: [
        {
          type: 'table',
          cols: ['Trip', 'Client owes', 'Due', 'Supplier owes you', 'Status'],
          rows: [
            ['Rao, Europe', '₹3.8 lakh', '15 Oct', '₹42,000 commission', ['Overdue', 'late', 'Paid', 'ok']],
            ['Shah, Bali', '₹1.6 lakh', '20 Oct', '₹18,500 commission', ['Due soon', 'flag']],
            ['Gupta, Singapore', '₹0', 'Paid', '₹26,000 airline refund', ['Claimed 29 Sep', 'info', 'Received', 'ok']],
            ['Iyer, Kerala', '₹55,000', '22 Oct', '₹7,400 commission', ['Upcoming', 'muted']],
          ],
        },
        { type: 'title', text: 'Commission outstanding by supplier' },
        {
          type: 'bars',
          items: [
            { label: 'Hotel chain A', value: 78, display: '₹34,000' },
            { label: 'Insurer', value: 52, display: '₹22,500' },
            { label: 'Airline incentive', value: 38, display: '₹16,800' },
            { label: 'DMC Dubai', value: 20, display: '₹8,700', tone: 'muted' },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Wednesday, before and after.',
  dayLede: 'What changes is not the selling. It is that the trip leaves a record, and the record does the chasing.',
  day: [
    {
      time: '9:30',
      before: 'You ask four agents which trips are leaving this week and what is still open. It takes an hour.',
      after: 'You open the Today screen. Nine trips depart in ten days and three have open items, each with a name.',
    },
    {
      time: '11:00',
      before: 'A client calls about her hotel voucher. The agent is on another call, so the colleague promises to call back.',
      after: 'The colleague opens the trip file, reads the voucher and confirmation number, and answers on the call.',
    },
    {
      time: '1:00',
      before: 'A group fare hold is due at 6 pm and the owner is in a meeting. It is remembered at 5:50.',
      after: 'The hold appears at the top of the deadlines list from morning, with a backup owner, and is ticketed at lunch.',
    },
    {
      time: '3:30',
      before: 'A client wants to cancel. The agent checks four emails and guesses the charges.',
      after: 'The trip file shows each supplier’s charge today. The agent quotes a figure and records the decision.',
    },
    {
      time: '5:30',
      before: 'You wonder which clients still owe money before departure. You ask the accounts person to check.',
      after: 'The money screen lists balances due this week and overdue, and each already has a reminder task.',
    },
    {
      time: 'Month end',
      before: 'Commission claims are chased from memory and the accountant rebuilds sales by type from invoices.',
      after: 'Unclaimed commission is a list by supplier and age, and the accountant gets the monthly split ready made.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your agency actually sells and fulfils a trip, build Verity around it, move your live trips in, then stay on to make sure it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and your senior agent for a day. Follow one live trip from enquiry to return, and note every supplier, deadline, document and payment on the way.',
        you: 'Two to three hours of your time and a senior agent’s. Two or three live trip files, however messy, and the supplier list you work with.',
        get: 'A written map of how a trip moves through your agency, the trip types you sell, the deadlines that matter for each, and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your trip types, component types, supplier terms, document checklists per destination, payment schedules, service fees and the roles of your agents and accounts person.',
        you: 'Check the setup with your senior agent. Tell us where a deadline rule or checklist is wrong for a destination you sell.',
        get: 'A working Verity with your trip types, suppliers and checklists in your own words, ready for live trips.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your current trips, client list, supplier contacts and open balances from the sheets and mailboxes you use. Train agents on a real trip each, not in a classroom.',
        you: 'Your client list, live trips and the dues sheet, in whatever form they exist. One hour with each agent and the accounts person.',
        get: 'Your live trips, deadlines and dues inside Verity, and a team that has built a file on a real booking.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through your first peak season. Review which deadlines and checklists are catching things, tune the lists, and handle changes as your destinations change.',
        you: 'A short monthly review of open dues, commission claims and what was caught.',
        get: 'A system that keeps matching how the agency sells, with someone responsible for it.',
      },
    ],
    bring: [
      'Your live and upcoming trips, in any form',
      'Your supplier list with payment and cancellation terms where you have them',
      'Your client list and past traveller records',
      'Your service fee and markup rules, as you apply them today',
      'Your visa and document checklists for your top destinations',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. A senior agent and your accounts person need a few more.',
    after: 'Nobody is hired to run Verity. Agents add a component to the file as they book it, and the deadlines, dues and lists come from those entries.',
  },

  ai: {
    heading: 'Ask your agency a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own trip, client, supplier and money records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'What supplier deadlines fall due in the next three days?',
        a: '6 deadlines across 5 trips. Two are today: the Bali seat hold at 6 pm and the Paris hotel balance.',
        rows: [['Today', '2'], ['Tomorrow', '3'], ['In two days', '1']],
        action: 'Create tasks for each owner',
      },
      {
        q: 'Which clients have a balance due before they travel?',
        a: '8 trips depart within 21 days with ₹6.8 lakh still unpaid. The Rao family is the largest at ₹3.8 lakh.',
        rows: [['Rao, Europe', '₹3.8 lakh'], ['Shah, Bali', '₹1.6 lakh'], ['Iyer, Kerala', '₹55,000'], ['Others', '₹85,000']],
        action: 'Remind the file owners',
      },
      {
        q: 'How much commission have we not yet claimed?',
        a: '₹94,000 across 22 bookings. The oldest is from March, from a hotel chain.',
        rows: [['Hotel chain A', '₹34,000'], ['Insurer', '₹22,500'], ['Airline incentive', '₹16,800'], ['DMC Dubai', '₹8,700']],
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still send the messages and make the calls. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A quote has not been answered in five days',
      then: ['Quote moves to the follow-up list', 'Task to the agent who sent it', 'Outcome recorded: booked, dropped or revised'],
    },
    {
      when: 'A booking is added to a trip',
      then: ['Deposit, balance and free cancellation dates become tasks', 'Owner and backup owner are named', 'Cancellation terms stored on the component'],
    },
    {
      when: 'A traveller’s passport expires within six months of return',
      then: ['Flag on the trip and the traveller', 'Task to the agent to inform the client', 'Cleared when a new passport is recorded'],
    },
    {
      when: 'A client instalment is due in a week',
      then: ['Added to the dues list', 'Reminder task to the file owner', 'Marked paid when the receipt is recorded'],
    },
    {
      when: 'A trip is 10 days from departure with open items',
      then: ['Appears in the owner’s Today list', 'Open visa, payment and insurance items listed', 'Reviewed at the weekly departures meeting'],
    },
    {
      when: 'A trip is completed',
      then: ['Commission and refunds owed are listed per supplier', 'Task to claim what is outstanding', 'Traveller added to the repeat-trip follow-up list'],
    },
  ],

  rules: {
    heading: 'The rules a travel agency has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant is not rebuilding them from a pile of invoices.',
    items: [
      {
        name: 'GST on tour and ticket services',
        what: 'Tour operator services are generally taxed at 5 percent without input tax credit, or 18 percent if the operator chooses to claim it. Air ticket agents generally charge 18 percent on their fee or commission. Rates and options change, so check the current notifications.',
        how: 'Each sale is stored with its package, ticket, fee and commission parts, so the split your accountant needs is already clean at month end.',
        source: { name: 'Razorpay, GST on tours and travels', url: 'https://razorpay.com/learn/gst-on-tours-and-travels/' },
      },
      {
        name: 'Tax collected at source on overseas tour packages',
        what: 'Sellers of overseas tour packages generally have to collect tax at source from the buyer. The rate and the threshold changed in the 2025 Budget, and the rules were renumbered in the new Income-tax Act, so confirm the current position with your accountant.',
        how: 'Overseas packages are flagged on the sale with the traveller’s PAN, and the amount collected sits on the same record as the package value.',
      },
      {
        name: 'Airline refund rules',
        what: 'The aviation regulator proposed in November 2025 that refunds on tickets bought through agents be completed within 21 working days, with the airline responsible, plus a 48 hour free look-in. The final text may differ, so check the current rule.',
        how: 'Each ticket refund is recorded with the date it was claimed, so you can see which are inside the limit and which need a follow-up.',
        source: { name: 'Business Today on the DGCA draft', url: 'https://www.businesstoday.in/latest/economy/story/dgca-proposes-passenger-friendly-refund-norms-for-airlines-500760-2025-11-04' },
      },
      {
        name: 'Passport and visa requirements',
        what: 'Many countries expect a passport to be valid for several months after the date of return, and each embassy sets its own document list. These change without notice.',
        how: 'Document checklists are kept per destination and per traveller, and passport expiry is compared with the return date automatically.',
      },
    ],
    note: 'Rules change and differ by destination. Confirm current requirements with your accountant, the airline or the embassy concerned.',
  },

  rolesHeading: 'Everyone sees the same trip, through their own window.',
  rolesLede: 'A new agent should not see every trip’s margin. Accounts should not edit an itinerary. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which trips and dues need me today?', sees: 'Departures with open items, supplier deadlines, balances overdue, margin per trip, commission outstanding.' },
    { role: 'Senior agent', question: 'What is leaving, and is everything in place?', sees: 'Her trips, the deadline list, document checklists, quotes gone quiet, and files of colleagues on leave.' },
    { role: 'Agent', question: 'What is pending on my trips?', sees: 'Own enquiries, quotes, open tasks and each trip file she owns.' },
    { role: 'Visa and documents executive', question: 'Which files are ready to submit?', sees: 'Traveller checklists, passport expiry flags and submission status.' },
    { role: 'Accounts', question: 'What is owed in and out?', sees: 'Client instalments, supplier payables, commission and refunds owed, and the monthly sale split.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'The airline, hotel and visa portals your team books on today. We agree during setup how bookings reach the trip file.',
      'Your accounting software, which your accountant keeps using.',
      'WhatsApp and phone calls with travellers. Agents send the messages; Verity says who and when.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Sell tickets or tour packages to the public online.',
      'Send itineraries or reminders to travellers on its own.',
      'File your returns or run your payroll.',
      'Give visa or legal advice.',
    ],
    migration:
      'We bring your live trips, client list and open balances across from the sheets, mailboxes and notebooks you use now, in stages, so the agency keeps selling while it happens.',
  },

  faqHeading: 'Questions travel agency owners ask.',
  faqs: [
    [
      'Will my agents actually keep trip files up to date?',
      'It only works if each booking is added to the file, so we set it up so adding a component takes seconds and sits where the agent already works. The agents get something back: deadlines they no longer have to remember, and a file a colleague can cover when they are away.',
    ],
    [
      'Does Verity book flights and hotels?',
      'No. Your team keeps booking on the airline, hotel and visa portals. Verity records what was booked, its deadlines and its money, in one trip file.',
    ],
    [
      'Can it send itineraries and reminders to my travellers?',
      'Not by itself. Verity creates the task and tells the right agent what to send and when. Your team sends the message and the outcome is recorded.',
    ],
    [
      'We are a small agency with three agents. Is this too much for us?',
      'A three-agent agency has the same lapsing holds and missed deposits, with fewer people to catch them. We set up only what you need, and the four-week process is the same.',
    ],
    [
      'Can we handle groups and corporate travel too?',
      'Yes. A group or a corporate booking is a trip with many travellers or many legs, each with its own deadlines and payments. Setup covers the trip types you actually sell.',
    ],
    [
      'Who can see my client and passport data?',
      'Only the people you allow. Access is set by role, so agents, the documents executive and accounts each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'Will it work out cancellation charges?',
      'It stores each supplier’s cancellation terms on the booking and shows what each would charge today, so the agent starts from the right numbers. The decision on what to charge the client stays with you.',
    ],
    [
      'Can I see several branches together?',
      'Yes. Each branch is a location in one system. A client is the same person across branches, and trips, dues and commission can be compared side by side.',
    ],
    [
      'How long before I see results?',
      'The supplier deadline list and the client dues list only need your live trips, so they are the first things we aim to have working. Commission recovery becomes reliable after a few weeks of recorded trips.',
    ],
    [
      'What does it cost?',
      'It depends on the number of agents, branches and what you want set up. Message us and we will give you a clear number after a short conversation about how your agency runs.',
    ],
  ],

  related: ['tour-operators', 'hotels', 'resorts', 'event-venues', 'wedding-planners', 'insurance-agencies'],

  ctaHeading: 'Start with the deadlines that slip through.',
  ctaLede:
    'Tell us how your agency runs and we will show you the supplier deadlines, client dues and unclaimed commission it would find, using your own live trips.',
};
