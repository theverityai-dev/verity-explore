export default {
  schema: 2,
  slug: 'event-venues',
  status: 'published',
  plural: 'event venues',
  subject: 'event venue',
  checked: '15 October 2026',

  seo: {
    title: 'Banquet and event venue software: dates, advances, events | Verity',
    description:
      '14 problems that cost a banquet hall or lawn money: double-booked dates, loose advances, event-day gaps, damage disputes, idle weekdays, and the Verity screens that fix them.',
    keywords: [
      'banquet hall management software India',
      'wedding venue booking calendar and advances',
      'event venue double booking',
      'banquet event order and checklist',
      'event venue damage deposit tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for event venues',
    headline: 'Two families, one Saturday, one hall. Verity makes sure that never happens, and that every rupee of the advance is on record.',
    lede:
      'A venue earns on dates. An empty weekday is gone for good, a double-booked Saturday is a disaster, and an event that runs on verbal promises ends in an argument over the bill. Verity gives every date, enquiry, advance and event one place, so the hall is sold once, collected properly and run from a clear plan.',
    oneLine:
      'One system where every date shows its status, every booking shows what was promised and paid, and every event carries a plan the whole staff can read.',
    note: 'Your sales desk keeps taking calls and showing the hall as it does now. Verity holds the record behind each date.',
    screen: 'owner',
    screenNote: 'halls, lawns, dates and advances',
  },

  today: {
    heading: 'A venue runs on a diary, a cash box and the owner’s memory.',
    paragraphs: [
      'A family visits on a Sunday, likes the lawn, and pays a token to “hold the date”. A second family calls a week later for the same date and is told it is free, because the hold was never written on the main diary. The error is found when both turn up with their wedding cards printed.',
      'On the day itself, the caterer, decorator, DJ and your own staff all work from different information. The final guest count was agreed on a call, the menu changed twice by message, and the extra hour that the DJ played was never charged. At the end, the damage to a door and a dozen missing steel plates is argued over with nothing written down.',
      'Most of the year the hall is full for about 45 days of peak wedding season and much emptier outside it. A venue cannot make up for an unsold date, so the owner’s main questions are always about dates: which are open, which are held, which are at risk, and what has been collected against each.',
    ],
    stack: ['Paper diary or wall calendar', 'Cash and UPI advances in several hands', 'WhatsApp with clients and vendors', 'Excel sheet of bookings', 'Owner’s memory of who was promised what'],
    stackNote: 'Each of these works for one job. None of them tells you the true state of a date.',
  },

  painsHeading: 'Where an event venue actually loses money.',
  painsLede:
    'These are the situations venue owners describe again and again. For each one: what it looks like on a normal week, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Dates',
      title: 'The same date is sold twice',
      scene:
        'The sales manager noted a hold for 12 December in her own diary. The owner confirmed the date to another family from the front desk. Nobody saw the clash until the second family paid an advance.',
      cost:
        'A refund, an angry family and the word that goes round a close-knit community. Trade writers on Indian banquets point to the lack of simple booking software as the cause of double booking.',
      fix:
        'Every hall, lawn and slot is one calendar. A date is open, held or confirmed, and a booking cannot be confirmed on a date that is already taken. Everyone on the team looks at the same calendar.',
      screen: 'calendar',
    },
    {
      area: 'Dates',
      title: 'Pencil holds that never expire',
      scene:
        'A hold for a good Saturday has been sitting for five weeks on a promise to “confirm after the muhurat”. Three other families were told the date was gone.',
      cost:
        'Example arithmetic: a Saturday hall rental of ₹3 lakh turned away three times for a hold that was never paid is a ₹3 lakh date lost, and the other families booked elsewhere.',
      fix:
        'A hold carries an expiry date and an amount if one is paid. Verity lists holds about to expire, with the family and the person handling them, and releases the date back to the calendar when the hold lapses.',
      screen: 'calendar',
    },
    {
      area: 'Enquiries',
      title: 'Site visits that never get a second call',
      scene:
        'A couple walks through on a Sunday, takes the brochure and says they will think about it. The sales team is busy with the next family, and nobody calls them back the following week.',
      cost:
        'Example arithmetic: 30 visits a month and a 25 percent close rate at ₹2.5 lakh per event. Lifting the close rate to 30 percent adds 1.5 events a month, about ₹45 lakh a year.',
      fix:
        'Each visit becomes an enquiry with the date they want, guest count, budget and what they liked. Verity sets the follow-up task and lists enquiries that have gone quiet, with the salesperson who owns each.',
      screen: 'enquiries',
    },
    {
      area: 'Money',
      title: 'Advances and instalments are collected in several hands',
      scene:
        'A token was taken in cash by the manager, a second part by UPI to the owner’s phone, and a cheque is waiting at the front desk. The family says they have paid ₹2 lakh. The books show ₹1.5 lakh.',
      cost:
        'Money that cannot be traced to a booking, disputes about what was paid and an advance that gets spent before the event happens.',
      fix:
        'Every payment, cash, cheque or UPI, is recorded against the booking with date, mode and who took it. The balance is always visible, and the payment schedule shows what is still due before the event.',
      screen: 'payments',
    },
    {
      area: 'Money',
      title: 'Cancellation and refund terms are not written at the time of booking',
      scene:
        'A wedding is called off. The family expects a full refund because the owner said it was “flexible”. The owner remembers a different arrangement. A consumer group takes up the matter.',
      cost:
        'Refund disputes, goodwill lost and sometimes a legal notice. Consumer reports on halls often describe cancellation terms that were never explained at booking.',
      fix:
        'The booking records its cancellation and refund terms, and the date from which each applies. A cancellation then shows exactly what is retained and what is returned, with the decision recorded.',
      screen: 'event',
    },
    {
      area: 'Events',
      title: 'What sales promised does not reach the people running the event',
      scene:
        'The family was promised the stage on the north side, an extra generator and a separate green room. The event manager on the day knows none of this, and the family’s father finds out at 6 pm.',
      cost:
        'Free fixes made on the spot, bad reviews and staff who are blamed for a promise they never heard.',
      fix:
        'The event has one order sheet with the hall layout, menu, timings, extras and special requests, agreed with the family and shared with the event manager, the caterer and the decorator. Changes go on the same page.',
      screen: 'event',
    },
    {
      area: 'Events',
      title: 'Guest count agreed on a call, billed from memory',
      scene:
        'The family said 500 guests. The caterer was told 550. On the evening, 620 plates are served. Nobody has a written number to bill against.',
      cost:
        'Under-recovered catering cost, or an argument on the last day that sours an otherwise good event.',
      fix:
        'The expected guest count is recorded with dates, along with the final guarantee given before the event. The actual count served is entered on the day, and the difference is billed from the record.',
      screen: 'event',
    },
    {
      area: 'Events',
      title: 'Extra hours, extra tables and extras that are never charged',
      scene:
        'The DJ plays for an extra hour after the agreed cut-off. A second generator is run. Extra chairs are added for 80 more guests. The manager mentions it at closing but the bill goes out unchanged.',
      cost:
        'Example arithmetic: ₹15,000 of uncharged extras on each of 5 events a month is ₹9 lakh a year in income lost.',
      fix:
        'Extras are logged against the event on the day, with time and quantity, and added to the final bill. Overtime is flagged against the agreed end time.',
      screen: 'dayof',
    },
    {
      area: 'Events',
      title: 'Outside vendors turn up without a plan',
      scene:
        'The decorator needs access from 6 am, the caterer’s trucks need the loading bay at the same time, and the sound company brings equipment you did not know about. The gate has no list.',
      cost:
        'Delays that push the event start, access disputes and damage to the hall by people you have no record of.',
      fix:
        'Each outside vendor is a record on the event with their arrival time, access need and a contact. The day-of checklist lists who is due when, and vendor deposits and rules are attached.',
      screen: 'dayof',
    },
    {
      area: 'Assets',
      title: 'Damage and missing items are argued over after the event',
      scene:
        'A glass panel is cracked and 40 steel plates are missing. The family says it was already damaged. You hold a security deposit but have no before-and-after record.',
      cost:
        'Either an unreimbursed repair or an argument that ends the relationship with the family and their circle.',
      fix:
        'A handover checklist is done before and after the event with photos and counts of key items, signed off by both sides. The deposit is settled from the record, and damage is tied to the event.',
      screen: 'assets',
    },
    {
      area: 'Assets',
      title: 'Crockery, linen and furniture go missing between events',
      scene:
        'The store keeper counted 800 plates in March. In October, after a busy season, a count shows 690. Nobody knows which event lost them.',
      cost:
        'Replacement cost that repeats every season and a store that is never trusted to be accurate.',
      fix:
        'Counts of key items are taken in and out for each event, so losses are tied to an event and a handover. The stock list shows what is short before the next big booking.',
      screen: 'assets',
    },
    {
      area: 'Staff',
      title: 'Extra staff for an event are arranged and paid by guess',
      scene:
        'A 600-guest wedding needs 25 casual workers. The manager calls contacts, a few do not show, and wages are paid in cash from the evening’s advance without a record of who worked.',
      cost:
        'Understaffed events, wage disputes, and a cost per event that nobody can state afterwards.',
      fix:
        'Each event has a staffing plan by role and shift. Attendance is marked on the day, and the wage cost per event is calculated from it. Verity does not run payroll.',
      screen: 'dayof',
    },
    {
      area: 'Compliance',
      title: 'Licences and clearances expire unnoticed',
      scene:
        'The fire clearance lapsed last month. The food licence is due next week. A local notice about loudspeaker timings sits on the owner’s desk. Reports from several towns show halls run without valid trade licences.',
      cost:
        'Fines, a closure order on a peak weekend, and loss of insurance cover if there is an incident.',
      fix:
        'Each licence, clearance and insurance policy is a record with its expiry date, and Verity lists what runs out in the next 60 days with a task for the person responsible.',
      screen: 'assets',
    },
    {
      area: 'Owner',
      title: 'Idle weekdays and the off-season are never planned',
      scene:
        'December is full. March to May is half empty. Nobody tracks which dates went unsold, what discount was tried or which kind of event would fill them.',
      cost:
        'Fixed costs that do not go away: staff, power, maintenance and loan payments, all carried by the dates that did sell.',
      fix:
        'The owner’s view shows the year by date: sold, held and open. It compares revenue by month with last year, and lists open dates by how close they are, so offers or smaller events can be tried in time.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '46 lakh',
      text: 'weddings expected in the 1 November to 14 December 2025 season across 75 cities, worth about ₹6.5 lakh crore, according to a trade body estimate.',
      source: { name: 'CAIT, as reported by Angel One', year: '2025', url: 'https://oga-prod.angelone.in/news/market-updates/indias-wedding-season-to-driveover-rs-6-lakh-crore-trade-says-cait' },
    },
    {
      figure: '48 lakh',
      text: 'weddings in the same season in 2024, worth ₹5.9 lakh crore. Fewer weddings in 2025 but higher spend per wedding, which raises the stakes on every date.',
      source: { name: 'CAIT, as reported by Angel One', year: '2025', url: 'https://oga-prod.angelone.in/news/market-updates/indias-wedding-season-to-driveover-rs-6-lakh-crore-trade-says-cait' },
    },
    {
      figure: '~70%',
      text: 'of existing banquets in India are standalone, an undated figure in a 2019 article, which also names double booking and cash-based pencil holds as industry problems.',
      source: { name: 'Entrepreneur India', year: '2019', url: 'https://india.entrepreneur.com/starting-a-business/standalone-banquets-changing-the-way-banquet-industry/334987' },
    },
    {
      figure: '~45 days',
      text: 'is the length of the peak wedding window that carries much of the year’s demand, from early November to mid December in 2025.',
      source: { name: 'CAIT, as reported by Angel One', year: '2025', url: 'https://oga-prod.angelone.in/news/market-updates/indias-wedding-season-to-driveover-rs-6-lakh-crore-trade-says-cait' },
    },
  ],
  factsNote:
    'The wedding counts and values are estimates from a traders’ body, not audited data. The banquet industry article is from 2019 and the share it gives is undated. They show the scale of the problem, not what your venue will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Halls, lawns and event types are named the way your own team says them.',
  screens: [
    {
      id: 'owner',
      title: 'Venue / Today',
      meta: 'All halls and lawns',
      heading: 'The owner’s morning view',
      caption:
        'Which dates are sold, which are held and expiring, how much is still to be collected, and what needs a decision. This replaces the wall calendar and the nightly call with the manager.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Dates sold, next 60 days', value: '24', note: 'of 38 open dates' },
            { label: 'Holds expiring', value: '5', note: 'within 3 days' },
            { label: 'Balance to collect', value: '₹18.6 lakh', note: '9 events' },
            { label: 'Licences expiring', value: '2', note: 'within 30 days' },
          ],
        },
        { type: 'title', text: 'Dates sold by month' },
        {
          type: 'bars',
          items: [
            { label: 'November', value: 88, display: '22 of 25' },
            { label: 'December', value: 82, display: '25 of 31' },
            { label: 'February', value: 55, display: '14 of 25', tone: 'muted' },
            { label: 'April', value: 20, display: '5 of 25', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Sharma hold for 28 Nov expires tomorrow. Advance ₹50,000 received, balance not agreed.', action: 'Call family' },
        {
          type: 'list',
          items: [
            { name: 'Fire clearance renewal', meta: 'Expires in 21 days, owner Manager', tag: ['Renew', 'late', 'Renewed', 'ok'] },
            { name: 'Gupta wedding, 14 Dec', meta: 'Balance ₹3.2 lakh due 30 Nov', tag: ['Chase', 'flag', 'Paid', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'calendar',
      title: 'Calendar',
      meta: 'Main hall and lawn, November',
      heading: 'Every date, one status',
      caption:
        'Each hall and lawn, each day, open, held or confirmed. A held date shows its expiry and who is handling it, and a clash cannot be confirmed.',
      blocks: [
        {
          type: 'table',
          cols: ['Date', 'Main hall', 'Lawn', 'Event', 'Status'],
          rows: [
            ['Sat 22 Nov', 'Rao wedding', 'Rao reception', 'Wedding', ['Confirmed', 'ok']],
            ['Sun 23 Nov', 'Open', 'Open', '', ['Open', 'muted']],
            ['Fri 28 Nov', 'Sharma', 'Open', 'Engagement', ['Held, expires 15 Oct', 'late', 'Confirmed', 'ok']],
            ['Sat 29 Nov', 'Verma', 'Verma', 'Wedding', ['Confirmed', 'ok']],
            ['Sun 30 Nov', 'Open', 'Held for Nair', 'Reception', ['Held, 6 days', 'flag']],
          ],
        },
        { type: 'alert', text: '5 holds expire this week. 3 have no advance recorded.', action: 'Review holds' },
      ],
    },
    {
      id: 'enquiries',
      title: 'Enquiries',
      meta: 'Site visits and calls',
      heading: 'Every family who visited, and what happens next',
      caption:
        'Each visit or call becomes an enquiry with the date they want and what they liked. The follow-up is a task for the salesperson, and the outcome is recorded.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Visited',
              cards: [
                { title: 'Kulkarni, 400 guests', meta: 'Wants 14 Feb, liked the lawn', tag: ['Call', 'flag', 'Called', 'ok'] },
                { title: 'Iyer, engagement', meta: 'Wants a Sunday in Jan', tag: ['Call', 'flag'] },
              ],
            },
            {
              name: 'Quoted',
              cards: [
                { title: 'Banerjee, 650 guests', meta: 'Quoted ₹4.2 lakh, 9 days quiet', tag: ['Follow up', 'late', 'Replied', 'ok'] },
                { title: 'Shah, anniversary', meta: 'Weekday, 120 guests', tag: ['Waiting', 'muted'] },
              ],
            },
            {
              name: 'Hold paid',
              cards: [
                { title: 'Nair reception, 30 Nov', meta: '₹40,000 token, hold 6 days', tag: ['Convert', 'info'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'event',
      title: 'Event file',
      meta: 'Gupta wedding, 14 Dec',
      heading: 'What was promised, agreed and paid',
      caption:
        'The order sheet for the event: layout, menu, timings, extras, guest count and every term, alongside the payment schedule. The event manager and the family look at the same page.',
      blocks: [
        {
          type: 'record',
          title: 'Gupta wedding, main hall and lawn',
          sub: '14 Dec, 4 pm to 12 am. Sales: Ritu',
          fields: [
            ['Guests', 'Expected 500, final guarantee 550'],
            ['Total agreed', '₹6.4 lakh'],
            ['Received', '₹3.2 lakh'],
            ['Balance', ['₹3.2 lakh due 30 Nov', 'flag', 'Paid', 'ok']],
            ['Cancellation terms', 'Half the advance kept if cancelled within 30 days'],
            ['Special requests', ['Stage on north side, separate green room', 'info']],
          ],
          timeline: [
            ['14 Dec', 'Decorator access from 7 am, caterer loading 10 am'],
            ['30 Nov', 'Final guest count and menu locked'],
            ['2 Nov', 'Layout agreed with family, v3'],
            ['Note', 'Bride’s family vegetarian. Jain menu for 80 guests.'],
          ],
        },
      ],
    },
    {
      id: 'dayof',
      title: 'Event day',
      meta: 'Verma wedding, Saturday',
      heading: 'The checklist the whole staff reads',
      caption:
        'Who arrives when, what is set up, and what extras were used. Overtime, extra chairs and extra generator hours are logged on the spot and added to the bill.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Decorator access and loading', meta: 'Due 6 am, Rajan Decor', done: true },
            { text: 'Caterer trucks and kitchen setup', meta: 'Due 9 am, 620 plates guarantee', done: true },
            { text: 'Casual staff present', meta: '22 of 25 marked in', done: false },
            { text: 'Generator and fuel check', meta: 'Standby generator, 40 litres', done: false },
            { text: 'Music stops at 11 pm', meta: 'Local rule, overtime charged after', done: false },
          ],
        },
        {
          type: 'table',
          cols: ['Extra', 'Time', 'Quantity', 'Charge', 'Status'],
          rows: [
            ['Extra hour, sound', '11 pm', '1 hr', '₹8,000', ['Logged', 'info', 'Billed', 'ok']],
            ['Extra chairs', '7 pm', '80', '₹6,400', ['Logged', 'info', 'Billed', 'ok']],
            ['Second generator', '8 pm', '4 hrs', '₹5,200', ['Not logged', 'late', 'Logged', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      meta: 'Advances and balances',
      heading: 'Every rupee against a booking',
      caption:
        'Cash, cheque and UPI received for each event, who took it and what is still due. The accountant sees the same figures, and the owner no longer holds the total in memory.',
      blocks: [
        {
          type: 'table',
          cols: ['Event', 'Agreed', 'Received', 'Balance due', 'Status'],
          rows: [
            ['Gupta, 14 Dec', '₹6.4 lakh', '₹3.2 lakh', '30 Nov', ['Due soon', 'flag', 'Paid', 'ok']],
            ['Verma, 29 Nov', '₹5.8 lakh', '₹5.0 lakh', '22 Nov', ['₹80,000 due', 'late', 'Paid', 'ok']],
            ['Sharma, 28 Nov', '₹3.1 lakh', '₹50,000', '15 Nov', ['Hold, balance open', 'flag']],
            ['Rao, 22 Nov', '₹7.2 lakh', '₹7.2 lakh', 'Paid', ['Settled', 'ok']],
          ],
        },
        { type: 'alert', text: '₹70,000 in cash this week was recorded without a booking attached.', action: 'Match' },
      ],
    },
    {
      id: 'assets',
      title: 'Assets and licences',
      meta: 'Stock, handover and expiry',
      heading: 'What the hall owns, what came back, what runs out',
      caption:
        'Counts of plates, linen and furniture in and out of each event, handover notes with photos, and the licences and clearances with their expiry dates.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Start of season', 'Now', 'Short', 'Last event'],
          rows: [
            ['Steel plates', '800', '690', '110', 'Rao, 22 Nov'],
            ['Chair covers', '600', '575', '25', 'Verma, 29 Nov'],
            ['Round tables', '70', '70', '0', 'Verma, 29 Nov'],
            ['Glass panel, hall 2', '1', 'Cracked', '1', ['Verma', 'late', 'Charged', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Fire clearance', meta: 'Expires in 21 days', tag: ['Renew', 'late', 'Renewed', 'ok'] },
            { name: 'Food licence', meta: 'Expires in 74 days', tag: ['Planned', 'muted'] },
            { name: 'Building insurance', meta: 'Expires in 11 days', tag: ['Renew', 'flag', 'Renewed', 'ok'] },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Saturday, before and after.',
  dayLede: 'The weddings are the same. What changes is that the plan, the money and the extras are written down once, where everyone can read them.',
  day: [
    {
      time: '8:00',
      before: 'The manager checks the diary, the WhatsApp group and his memory to see what the day needs.',
      after: 'He opens the event file and the day checklist. Vendors due, staff and layout are all on the page.',
    },
    {
      time: '10:30',
      before: 'A family asks about the 28th. The manager says it is free and later finds out a hold exists.',
      after: 'The calendar shows the 28th as held, with who holds it and when the hold ends.',
    },
    {
      time: '3:00',
      before: 'The decorator and caterer both claim the loading bay. The manager sorts it out by phone.',
      after: 'The arrival times were fixed on the event file two days earlier, so the bay is clear in turn.',
    },
    {
      time: '7:30',
      before: 'The family wants 80 more chairs. The manager agrees and nobody writes it down.',
      after: 'He logs the chairs with the time and quantity, and they are added to the bill.',
    },
    {
      time: '11:45',
      before: 'The DJ plays an extra hour. The manager mentions it to the owner next day if he remembers.',
      after: 'Overtime shows against the agreed end time and is billed from the record.',
    },
    {
      time: 'Next day',
      before: 'Plates are short, a panel is cracked and the deposit is argued over from memory.',
      after: 'The before and after checklist shows what changed, and the deposit is settled from it.',
    },
  ],

  approach: {
    heading: 'Four weeks, started with the dates already in your diary.',
    lede:
      'We begin with the bookings you already have. We learn how your venue sells a date and runs an event, build Verity around that, move your calendar across, and stay on through your first busy season.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day at the venue with you and your manager. Walk the halls and lawn, follow one real booking from site visit to settlement, and note every hand that touches the money.',
        you: 'Two to three hours from you and your manager. Your diary, the booking sheet and a few past event bills.',
        get: 'A written map of how a date is sold and an event is run, your hall and event types, price rules and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your halls, lawns and slots, rate cards by season and day, payment schedules, cancellation terms, extras, order-sheet fields, checklists, staff roles and licence list.',
        you: 'Check the setup with your manager. Tell us where a rate rule or checklist does not match how you really work.',
        get: 'A working Verity with your halls, rates and checklists in your own words, ready for your calendar.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in every confirmed and held date, the advances taken, the enquiry list and the stock counts from your diary and sheets. Train the sales desk and event staff on a live booking each.',
        you: 'Your diary, booking sheet and receipts book, in whatever shape they exist. An hour with sales, the manager and accounts.',
        get: 'Your calendar, advances and enquiries inside Verity, and a team that has run one event from the new file.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through the first peak weekends, tune holds, checklists and extras, and adapt the setup when you add a hall or a new type of event.',
        you: 'A short monthly review of dates sold, balances open and licences coming up.',
        get: 'A system that follows the venue as it changes, with someone responsible for it.',
      },
    ],
    bring: [
      'Your booking diary or sheet for the next twelve months',
      'Your rate card by hall, day and season',
      'A record of advances taken, with dates and mode',
      'Your cancellation terms and security deposit rules',
      'Licence, clearance and insurance papers with expiry dates',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your manager and sales head need a few more.',
    after: 'Nobody is hired to run Verity. Bookings, payments and extras are recorded as they happen, and the calendar and balances come from those entries.',
  },

  ai: {
    heading: 'Ask your venue a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own calendar, booking, payment and stock records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which Saturdays in the next three months are still open?',
        a: '7 Saturdays are open. Five are in February and March, and two fall in the week of a long weekend.',
        rows: [['November', '0'], ['December', '1'], ['February', '3'], ['March', '3']],
        action: 'Make a task to offer the open Saturdays',
      },
      {
        q: 'Which events have a balance due in the next 10 days?',
        a: '4 events owe ₹6.1 lakh together. The Verma wedding is the largest at ₹80,000, due 22 Nov.',
        rows: [['Verma, 29 Nov', '₹80,000'], ['Gupta, 14 Dec', '₹3.2 lakh'], ['Sharma, 28 Nov', '₹2.6 lakh']],
        action: 'Create reminder tasks for each owner',
      },
      {
        q: 'Where did we lose the most steel plates this season?',
        a: '110 plates are short since March. 62 are tied to two large weddings in the first week of November.',
        rows: [['Rao, 22 Nov', '34'], ['Verma, 29 Nov', '28'], ['Earlier events', '48']],
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still make the calls and send the messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A date is placed on hold',
      then: ['Expiry date set from your rule', 'Task to the salesperson before it lapses', 'Date released to open if not converted'],
    },
    {
      when: 'A family visits and no booking follows in a week',
      then: ['Listed on the follow-up board', 'Task to the salesperson with the visit notes', 'Outcome recorded: booked, declined or silent'],
    },
    {
      when: 'A booking is confirmed',
      then: ['Payment schedule created', 'Cancellation terms attached', 'Event file opened with the order sheet'],
    },
    {
      when: 'A balance falls due in seven days',
      then: ['Added to the dues list', 'Reminder task to the file owner', 'Marked settled when the payment is recorded'],
    },
    {
      when: 'An event ends',
      then: ['After-event handover checklist opened', 'Item counts compared with the start', 'Security deposit settled from the record'],
    },
    {
      when: 'A licence is 60 days from expiry',
      then: ['Flagged on the owner’s screen', 'Task to the manager with the paperwork needed', 'Cleared when the renewal is recorded'],
    },
  ],

  rules: {
    heading: 'The rules an event venue has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant and your inspectors are not left with a diary and a cash box.',
    items: [
      {
        name: 'Fire safety and local licences',
        what: 'Banquet halls and lawns generally need a fire clearance and a municipal trade licence, and many places add loudspeaker, traffic and electrical clearances. Requirements differ by town. A 2020 report found 26 halls in one town running without trade licences.',
        how: 'Each clearance is held with its expiry date and the person responsible, and the list of what runs out soon is on the owner’s screen.',
        source: { name: 'The Tribune, on banquet halls in Rewari, 2020', url: 'https://www.tribuneindia.com/news/haryana/all-26-banquet-halls-in-rewari-without-licence-50112/amp' },
      },
      {
        name: 'Food licence for catering',
        what: 'A venue that prepares or serves food generally needs a food business licence, and the caterer may need its own. Who holds it depends on how you run catering.',
        how: 'The licence and the in-house or outside caterer are recorded on each event, so you can show who was responsible for the food.',
      },
      {
        name: 'Music licences for events',
        what: 'Whether venues need licences from music rights bodies for weddings has been disputed. A 2024 notice and later reports have pointed different ways, and a law firm article argued weddings are exempt. The position may have changed, so check before relying on it.',
        how: 'Any licence you take is held with its dates, and the event file notes when music was played, so charges can be checked against use.',
        source: { name: 'Mondaq, J.P. Associates, 27 November 2024', url: 'https://www.mondaq.com/india/copyright/1550460/do-you-really-need-ppl-novex-and-iprs-licenses-for-weddings' },
      },
      {
        name: 'GST on hall rent and catering',
        what: 'Tax on hall rent and on catering sold with it depends on how the package is structured, and published guides disagree on the rate for a combined package. Take your accountant’s advice on how to invoice.',
        how: 'Hall rent, food, extras and deposits are separate lines on each event, so your accountant has the split already clean.',
      },
    ],
    note: 'Rules change and differ by town and state. Confirm current requirements with your accountant, the municipal office or the fire department.',
  },

  rolesHeading: 'Everyone sees the same dates, through their own window.',
  rolesLede: 'A casual supervisor should not see what a family paid. Sales should not edit stock counts. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which dates are selling and which need help?', sees: 'Dates sold against last year, holds expiring, balances open, licences due and profit per event.' },
    { role: 'Manager', question: 'Is every event ready?', sees: 'Event files, vendor arrival times, staffing plans, stock counts and the handover checklists.' },
    { role: 'Sales executive', question: 'Which families do I call today?', sees: 'Her enquiries, quotes gone quiet, holds about to expire and the calendar of open dates.' },
    { role: 'Event supervisor', question: 'What does today need?', sees: 'The day checklist, layout and timings, vendor list and the extras log, without the pricing.' },
    { role: 'Accounts', question: 'What was received and what is due?', sees: 'Advances by mode, balances, refunds, security deposits and the invoice split.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your phone calls, site visits and relationship with families and their planners.',
      'The accounting software your accountant already uses.',
      'WhatsApp with families and vendors. Staff send the messages; Verity says to whom and when.',
      'Your regular caterers, decorators and sound companies.',
    ],
    not: [
      'Show your hall to the public or take bookings online.',
      'Message families and vendors on its own.',
      'Issue the tax invoice or file returns.',
      'Run payroll for your staff.',
    ],
    migration:
      'We bring your diary, holds, advances and enquiries across from the paper and sheets you use now, in stages, so the venue keeps taking bookings while it happens.',
  },

  faqHeading: 'Questions venue owners ask.',
  faqs: [
    [
      'Will my sales team and manager really use it?',
      'It works if each call, visit and payment is recorded, so we set it up so that entry takes seconds and sits where they already work. They get something back: no more double-booked dates and no more arguments about what was paid.',
    ],
    [
      'Does Verity let families book a date online?',
      'No. Your team keeps taking bookings by call and visit. Verity records each booking, holds the date on the calendar and tracks everything that follows.',
    ],
    [
      'We have a hall, a lawn and a terrace. Can they be sold together or apart?',
      'Yes. Each space is its own calendar and an event can use several. A date used by a large wedding shows as taken across the spaces it needs.',
    ],
    [
      'How do you handle cash advances taken by different people?',
      'Each payment is recorded against the booking with the person who took it, the date and the mode. The balance is always visible, and cash taken without a booking attached is flagged for matching.',
    ],
    [
      'Can it work out the bill with extras and overtime?',
      'It adds the extras and overtime logged on the day to the agreed amount, using the rates you set. You review and issue the final invoice through your usual accounts process.',
    ],
    [
      'Who can see what a family paid?',
      'Only the people you allow. Access is set by role, so sales, the event supervisor and accounts each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'Do you handle several branches or venues?',
      'Yes. Each venue is a location in one system. Calendars, dates sold, balances and licences can be compared side by side, and a family that books at two venues is one person.',
    ],
    [
      'Can Verity help in the slow months?',
      'It shows which dates went unsold and how close they are, and keeps a list of past enquirers and families to offer them to. Your team makes the calls and decides on the offers.',
    ],
    [
      'How long before I see results?',
      'The calendar with holds and the dues list only need your diary and receipts, so we aim to have them working first. Extras, stock losses and utilisation trends become reliable after a few events are recorded.',
    ],
    [
      'What does it cost?',
      'It depends on the number of venues, spaces and staff. Message us and we will give you a clear number after a short conversation about how your venue runs.',
    ],
  ],

  related: ['wedding-planners', 'catering-businesses', 'hotels', 'resorts', 'photographers', 'travel-agencies'],

  ctaHeading: 'Start with the dates already in your diary.',
  ctaLede:
    'Send us a month of your diary and we will show you the holds about to expire, the balances outstanding and the open dates it finds, using your own bookings.',
};
