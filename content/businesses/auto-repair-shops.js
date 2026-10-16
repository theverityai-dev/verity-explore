export default {
  schema: 2,
  slug: 'auto-repair-shops',
  status: 'published',
  plural: 'auto repair shops',
  subject: 'garage',
  checked: '15 October 2026',

  seo: {
    title: 'Garage management software for Indian auto repair shops | Verity',
    description:
      'The 15 problems that drain a garage, what each costs, and the Verity screens that fix them: job cards, estimate approvals, parts stock, supplier credit and service reminders.',
    keywords: [
      'garage management software India',
      'job card software for car workshop',
      'auto repair shop parts stock tracking',
      'vehicle service reminder system',
      'multi brand car workshop software',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'workforce', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for auto repair shops',
    headline: 'Cars wait for parts, customers call for updates, and the next service is never booked.',
    lede:
      'A garage earns from jobs finished on time and from customers who return at the next service. Both leak, because the information sits on paper job cards, in the mechanic’s head and in a parts shop’s credit book. Verity puts every vehicle, every estimate, every part and every due date in one place that tells you what to do today.',
    oneLine:
      'One system that knows every vehicle in the garage, every estimate waiting for a yes, every part on the shelf and every rupee owed, and tells you what needs attention before it costs you.',
    note: 'No new staff needed. The record starts when the job card is opened at the gate.',
    screen: 'owner',
    screenNote: 'jobs, parts, credit and reminders',
  },

  today: {
    heading: 'The work is skilled and the paperwork is by memory.',
    paragraphs: [
      'Your mechanics know cars. What nobody holds in one place is the rest: which vehicle is waiting for which part, which estimate the customer has not yet approved, how much you owe the parts dealer this month, and which customer is now four months past the next service.',
      'That information exists in pieces. A paper job card, a parts bill from a shop down the road, a credit page in a dealer’s register, a phone full of customer numbers, and a lot of memory. The owner often works on a car as well, so the system that joins the pieces is you, with oil on your hands.',
      'The result is rarely one big loss. It is a steady leak: a part fitted and never billed, a car sitting a week for a bolt, a regular who drifted to the garage near his office, a supplier price that crept up. It only shows when the month’s money is less than the work you remember doing.',
    ],
    stack: ['Paper job cards', 'Parts dealers’ credit books', 'Customer numbers on a phone', 'WhatsApp for photos and approvals', 'The mechanic’s memory'],
    stackNote: 'Each of these works for its own job. None of them talk to each other, which is the problem.',
  },

  painsHeading: 'Where a garage actually loses money.',
  painsLede:
    'These are the situations garage owners describe again and again, whether they run a multi-brand car workshop, a quick-service bay or a two-wheeler garage. For each one: what it looks like on a normal day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Customers',
      title: 'The estimate is agreed on a call, and disputed at the bill',
      scene:
        'You call a customer to say the brake pads and a rotor need replacing, ₹7,400. He says "do it". At delivery he says he only agreed to the pads. There is no written trace of what he said yes to.',
      cost:
        'Example arithmetic: if one bill a week is reduced by ₹2,000 to settle an argument, that is ₹1 lakh a year. Worse is the customer who does not come back.',
      fix:
        'Each estimate is a record with line items, the price, and the customer’s answer, recorded with the time and who took the call. Work beyond the approved items waits for a fresh approval before it is billed.',
      screen: 'board',
    },
    {
      area: 'Jobs',
      title: 'Nobody knows which car is waiting for what',
      scene:
        'Fourteen vehicles are in the yard. One is waiting for a part, one for the customer’s approval, one for the insurer, one is ready since Tuesday. The customer calls and the supervisor walks the floor to find the car.',
      cost:
        'Hours of calls and walking every day, late deliveries that nobody saw coming, and vehicles taking space that a new job could use.',
      fix:
        'Every vehicle sits on a board by state: waiting for approval, waiting for parts, in the bay, ready, delivered. The reason for any wait is on the card, and the person who owns the next step is named.',
      screen: 'board',
    },
    {
      area: 'Jobs',
      title: 'Promised delivery dates slip, and customers find out by calling',
      scene:
        'You said Thursday. The part came Friday and the mechanic was on another car. The customer learns of it when he arrives to collect, annoyed.',
      cost:
        'A customer who feels let down tells others and rarely gives a second chance. Calls asking for updates also eat the supervisor’s day.',
      fix:
        'Every job has a promised date, and Verity flags the ones that will miss it, based on the parts and bay state. The supervisor gets a task to call the customer first, and the new date is recorded.',
      screen: 'board',
    },
    {
      area: 'Customers',
      title: 'Regulars forget the next service, and nobody reminds them',
      scene:
        'A customer’s car was last serviced in March at 14,000 km. It is October. He has not been reminded, and the nearest workshop that sent him a message got him instead.',
      cost:
        'Example arithmetic: 300 repeat customers each spending ₹6,500 twice a year is ₹39 lakh. If a quarter drift, that is almost ₹10 lakh a year, and the garage never sees it leave.',
      fix:
        'Every job records the kilometre reading and the next service date. Verity lists customers coming due or overdue, grouped by what they need, and gives the front desk a call task. The outcome is recorded.',
      screen: 'reminders',
    },
    {
      area: 'Customers',
      title: 'Vehicle history is in the mechanic’s head',
      scene:
        'The senior mechanic knows that the Swift has a recurring AC problem and the Innova needs special oil. When he is on leave, a junior opens the bonnet with no history at all.',
      cost:
        'Repeated diagnosis time, wrong parts ordered, and a customer who has to explain the same fault again. If the mechanic leaves, the history leaves with him.',
      fix:
        'Every vehicle has a record with each job, the parts fitted, photos and notes from the mechanic. Whoever opens the next job card sees it all, and the garage owns it.',
      screen: 'job',
    },
    {
      area: 'Parts',
      title: 'Parts are bought from the shop next door, and nobody tracks the cost',
      scene:
        'A mechanic runs to the spare parts shop for a filter, brings it back with a hand-written slip, and the job card does not show it. The price you charge may be below what you paid.',
      cost:
        'Parts that go into a car and out of the bill. Over a month the number of un-billed small parts is large, and the margin on parts is where a garage makes much of its profit.',
      fix:
        'Each part issued is recorded against the job card with cost and selling price. Verity compares parts bought with parts billed, and shows jobs where the margin is thin or a part has no line on the bill.',
      screen: 'parts',
    },
    {
      area: 'Parts',
      title: 'Fast movers run out and slow movers pile up',
      scene:
        'Oil filters and brake pads for the top five models run out on a Saturday. Meanwhile a shelf of rare parts bought for one job sits there for two years.',
      cost:
        'A car waits a day for a part that should have been in stock, and cash is stuck in dead stock. Both come from not seeing usage.',
      fix:
        'Parts have a reorder level based on actual use. Verity shows fast movers near their level and parts not used in six months, so you reorder before the Saturday and stop buying slow movers.',
      screen: 'parts',
    },
    {
      area: 'Suppliers',
      title: 'Credit with parts dealers is a page in their register',
      scene:
        'You buy on credit from four dealers. At month end each shows a total that does not match yours. A bill you already paid is shown as open, and a price quoted on the phone is not what is on the invoice.',
      cost:
        'Money paid twice, early payments that waste cash, and late ones that cost you the dealer’s goodwill when you most need a part.',
      fix:
        'Every purchase is recorded with the dealer, the bill, the price and the due date. Verity shows what is due per dealer and when, flags price changes on the same part, and keeps a payment record you can match to their statement.',
      screen: 'parts',
    },
    {
      area: 'Jobs',
      title: 'Bay time is lost to waiting',
      scene:
        'A car stands on the lift for two days waiting for a gasket. The mechanic who should be on it has been moved. Next morning a new customer is turned away for want of a free bay.',
      cost:
        'A bay is the most expensive thing in the garage per hour. Every idle hour with a car on it is lost revenue.',
      fix:
        'Bay and lift use are shown against job state. A car that is only waiting for parts is moved out of the bay, and Verity shows hours per bay on real work against waiting, week by week.',
      screen: 'owner',
    },
    {
      area: 'Staff',
      title: 'Mechanic output, advances and incentives are guesswork',
      scene:
        'Pay is a mix of salary and a share per job. At month end nobody can say how many jobs each mechanic finished, which were redone, or how much advance was already taken.',
      cost:
        'Disputes, a good mechanic who feels underpaid and moves to the garage across the road, taking customers who ask for him.',
      fix:
        'Each job card records who worked on it and the labour value. Verity builds a monthly sheet per mechanic with jobs, redo count, attendance and advances, using your own incentive rules.',
      screen: 'money',
    },
    {
      area: 'Quality',
      title: 'Comebacks and redo jobs are not counted',
      scene:
        'The car returns three days later with the same noise. The mechanic fixes it free, but nobody records it, so you do not know which job type or which person has the most comebacks.',
      cost:
        'Free labour that never appears as a cost, and a quality problem that stays hidden until a customer posts a bad review.',
      fix:
        'A return within your warranty window is linked to the original job. Verity shows comebacks by job type and mechanic, and records the work warranty you gave so there is no argument about what is covered.',
      screen: 'job',
    },
    {
      area: 'Money',
      title: 'Insurance claim jobs and fleet accounts are paid late',
      scene:
        'A claim job is finished, but the insurer’s approval and payment take weeks. A fleet customer pays on a monthly cycle that you chase when you remember.',
      cost:
        'Example arithmetic: ₹4 lakh of claim and fleet bills outstanding for 45 days holds up cash that buys parts and pays wages.',
      fix:
        'Claim jobs carry their stage: surveyor visit, approval, payment. Fleet and company dues are listed by days late with the last conversation noted, and each overdue account has a call task.',
      screen: 'money',
    },
    {
      area: 'Money',
      title: 'Cash taken at delivery does not match the job cards',
      scene:
        'Cash, UPI and the bill book do not agree at closing. A discount was given verbally. A small repair was done as "cash, no bill" and the money was never recorded.',
      cost:
        'Leakage in both money and records, and owners who cannot trust the numbers they are looking at.',
      fix:
        'Every delivered job has a value and a payment mode. Verity compares the day’s deliveries with the day’s collection and points to the job that does not tie. Discounts above your limit need a one-tap approval.',
      screen: 'money',
    },
    {
      area: 'Compliance',
      title: 'Used oil, batteries and licences are an afterthought',
      scene:
        'Used engine oil is sold to whoever collects it, with no record. A pollution consent renewal date passes. An inspector asks for the register and you find a loose page.',
      cost:
        'Penalties and notices. Used oil rules now include producer responsibility chapters, and a garage that cannot show where its oil went is exposed.',
      fix:
        'Used oil, filters and batteries are recorded as they leave, with the collector and quantity. Licences and consents are records with renewal dates and attached documents, with a reminder task.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'A second garage means two of every problem',
      scene:
        'Two workshops, two sets of job cards, two parts rooms. One has a part the other needs, and you only find out when a car has waited two days.',
      cost:
        'No fair comparison between workshops, idle stock in one while the other waits, and delay before any problem is visible.',
      fix:
        'Each workshop is a location in one system. A customer is one person across both, stock can be transferred against a record, and jobs, delivery times and money can be compared side by side.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '64%',
      text: 'of car servicing market share in India was held by unorganised garages, with OEM-authorised repairers at about 32%, in a 2016 industry study quoted by a service company.',
      source: { name: 'S&P Global Aftermarket Insight, quoting an ACMA study', year: '2021 article, 2016 study', url: 'https://aftermarketinsight.spglobal.com/news/46/players-shaping-indias-car-repair-market-' },
    },
    {
      figure: '95%',
      text: 'of personal vehicles in India are out of warranty and serviced at non-manufacturer workshops, according to a consulting firm.',
      source: { name: 'Redseer', year: '2022', url: 'https://redseer.com/articles/why-automotive-aftermarket-consumers-are-embracing-digitisation/' },
    },
    {
      figure: '1%',
      text: 'of workshops in India are organised online-to-offline workshops, expected to reach 5 to 6% by 2030. The rest are independent garages like yours.',
      source: { name: 'Redseer', year: '2022', url: 'https://redseer.com/articles/why-automotive-aftermarket-consumers-are-embracing-digitisation/' },
    },
    {
      figure: '1 April 2024',
      text: 'the date an amendment adding producer responsibility for used oil came into effect. It applies to producers, importers, bulk generators, collection agents and recyclers of used oil.',
      source: { name: 'Lakshmikumaran and Sridharan', year: '2023', url: 'https://www.lkslaw.com/insights/news/extended-producer-responsibility-epr-for-used-oils' },
    },
  ],
  factsNote:
    'The market share figures are several years old and come from industry bodies and consulting firms, not from a government census. The shares differ widely between sources. They show the scale of the problem, not what your garage will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your garage’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Garage / Today',
      meta: 'Workshop: Wakad',
      heading: 'The owner’s morning view',
      caption:
        'Vehicles in, deliveries due, bay use, parts short and dues on one screen, with the items that need a decision listed below. This replaces walking the yard and the evening call.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Vehicles in', value: '14', note: '6 bays' },
            { label: 'Due today', value: '5', note: '2 may slip' },
            { label: 'Waiting for parts', value: '4', note: 'avg 2.5 days' },
            { label: 'Owed to dealers', value: '₹1.8 lakh', note: 'this month' },
          ],
        },
        { type: 'title', text: 'Bay hours on real work, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Bay 1', value: 86, display: '86%' },
            { label: 'Bay 2', value: 78, display: '78%' },
            { label: 'Bay 3', value: 49, display: '49%', tone: 'muted' },
            { label: 'Bay 4', value: 44, display: '44%', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Pollution board consent renews in 34 days. Used oil collector record is missing for September.', action: 'Open' },
        {
          type: 'list',
          items: [
            { name: 'Delivery at risk: Innova, due 5 pm', meta: 'Part arrives at 3 pm, customer not told', tag: ['Call', 'flag', 'Told', 'ok'] },
            { name: 'Brake pads for Swift and i20', meta: 'Below reorder level before Saturday', tag: ['Order', 'flag', 'Ordered', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'job',
      title: 'Vehicle and job card',
      meta: 'Record',
      heading: 'One record for every vehicle, kept by the garage',
      caption:
        'Every visit, part, photo and note, with the mechanic who did the work. The next job card opens with the whole history in view, and a comeback is linked to the original job.',
      blocks: [
        {
          type: 'record',
          title: 'MH 14 FG 7620, Maruti Swift',
          sub: 'Owner: Anil Deshmukh. Customer since 2023',
          fields: [
            ['Last service', '18 March, 14,200 km'],
            ['Next due', '15,000 km or 18 Sept'],
            ['Known issue', ['AC cooling, recurring', 'flag']],
            ['Open job', 'JC-2284, brake pads, front'],
            ['Work warranty', '30 days on labour'],
            ['Status', ['Overdue for service', 'late', 'Booked 21 Oct', 'ok']],
          ],
          timeline: [
            ['18 Mar', 'Regular service, oil and filters, AC gas topped up'],
            ['2 Dec', 'Wiper blades and battery terminal cleaned'],
            ['Comeback', 'AC noise returned 4 days after March job, linked to JC-2051'],
            ['Note', 'Customer prefers a call before any work above ₹3,000.'],
          ],
        },
      ],
    },
    {
      id: 'board',
      title: 'Jobs and approvals',
      meta: 'Vehicles in the garage',
      heading: 'Every vehicle by state, with the reason it is waiting',
      caption:
        'Estimates waiting for a yes, cars waiting for parts, vehicles in the bay and those ready for delivery. Each card has an owner and a promised date, and a slipping date is flagged first.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Waiting for approval',
              cards: [
                { title: 'Swift, brake pads + rotor, ₹7,400', meta: 'Called 10:40. No answer', tag: ['Call again', 'flag', 'Approved', 'ok'] },
                { title: 'Innova, clutch plate, ₹14,200', meta: 'Estimate sent on WhatsApp', tag: ['Waiting', 'late', 'Approved', 'ok'] },
              ],
            },
            {
              name: 'Waiting for parts',
              cards: [
                { title: 'i20, front shocks', meta: 'Ordered, due 3 pm. Promised: today', tag: ['At risk', 'late', 'Told customer', 'ok'] },
                { title: 'Creta, wiper motor', meta: 'Dealer out of stock', tag: ['Source', 'flag'] },
              ],
            },
            {
              name: 'Ready',
              cards: [
                { title: 'Baleno, regular service', meta: 'Ready since Tuesday, ₹4,850', tag: ['Collect', 'flag', 'Delivered', 'ok'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'parts',
      title: 'Parts and dealers',
      meta: 'Stock and credit',
      heading: 'What is on the shelf, what is used, and what you owe',
      caption:
        'Parts against the vehicles that used them, reorder levels from real use, and each dealer’s dues by date. A part with no line on a bill, or a price that moved, is flagged.',
      blocks: [
        {
          type: 'table',
          cols: ['Part', 'In stock', 'Used / month', 'Reorder at', 'Status'],
          rows: [
            ['Oil filter, Swift/Baleno', '3', '22', '10', ['Short', 'late', 'Ordered', 'ok']],
            ['Brake pads, i20', '2', '9', '6', ['Reorder', 'flag']],
            ['Engine oil 5W30, 4 L', '14', '30', '12', ['OK', 'ok']],
            ['Clutch plate, Innova', '1', '0', '0', ['Not used in 8 months', 'muted']],
          ],
        },
        {
          type: 'table',
          cols: ['Dealer', 'This month', 'Due date', 'Paid', 'Status'],
          rows: [
            ['Shree Auto Spares', '₹86,400', '25 Oct', '₹40,000', ['₹46,400 due', 'flag', 'Paid', 'ok']],
            ['Pune Brake House', '₹31,200', '20 Oct', '₹0', ['Due soon', 'late']],
            ['Lubes and More', '₹22,900', '10 Nov', '₹22,900', ['Cleared', 'ok']],
          ],
        },
        { type: 'alert', text: '11 parts fitted this month have no line on the bill, ₹6,800 at cost.', action: 'Check jobs' },
      ],
    },
    {
      id: 'reminders',
      title: 'Service due',
      meta: 'Customers coming due or overdue',
      heading: 'The list that brings regulars back',
      caption:
        'Customers ordered by how overdue they are and what they usually spend. A call or message is a task for the front desk, and the outcome is recorded against the vehicle.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Vehicle', 'Last service', 'Due', 'Status'],
          rows: [
            ['Anil Deshmukh', 'Swift', '18 Mar', 'Overdue', ['Call today', 'late', 'Booked', 'ok']],
            ['Sunita Kale', 'Creta', '2 Apr', 'Overdue', ['Call today', 'flag', 'Declined', 'muted']],
            ['Rohit Bhosale', 'Innova', '28 Apr', 'In 10 days', ['Message', 'flag']],
            ['Vikram Nair', 'Baleno', '15 May', 'In 3 weeks', ['Later', 'info']],
          ],
        },
        { type: 'alert', text: '63 vehicles are past their service date. 18 spent over ₹10,000 with you last year.', action: 'Assign all' },
      ],
    },
    {
      id: 'money',
      title: 'Team and money',
      meta: 'This month',
      heading: 'Mechanic sheets, dues and the closing check',
      caption:
        'Jobs, comebacks and advances for each mechanic, claim and fleet dues by days late, and the closing check that compares deliveries with collection by mode.',
      blocks: [
        {
          type: 'table',
          cols: ['Mechanic', 'Jobs', 'Comebacks', 'Advance', 'Incentive'],
          rows: [
            ['Ramesh', '48', '1', '₹3,000', '₹9,600'],
            ['Salim', '41', '2', '₹0', '₹8,200'],
            ['Dinesh', '37', '5', '₹5,000', '₹5,900'],
            ['Pappu (helper)', '53 assisted', '0', '₹1,000', '₹2,400'],
          ],
        },
        {
          type: 'table',
          cols: ['Account', 'Type', 'Due', 'Days late', 'Status'],
          rows: [
            ['Shree Cabs', 'Fleet', '₹62,400', '38', ['Call', 'late', 'Promised 24 Oct', 'info']],
            ['Claim JC-2210, Nexon', 'Insurer', '₹48,000', '22', ['Chase', 'flag']],
            ['Apex Systems cars', 'Company', '₹18,900', '0', ['Current', 'ok']],
          ],
        },
        { type: 'alert', text: 'Collection is ₹720 short of deliveries today. 3 jobs unmatched.', action: 'Review' },
      ],
    },
  ],

  dayHeading: 'The same Thursday, before and after.',
  dayLede: 'What changes is not the repair work. It is that each job leaves a record, and the record does the chasing.',
  day: [
    {
      time: '9:00',
      before: 'You walk the yard counting cars and ask each mechanic what he is waiting for.',
      after: 'You open the Today screen. Fourteen cars, four waiting for parts, two deliveries at risk. One call to the dealer.',
    },
    {
      time: '11:00',
      before: 'A customer says he never agreed to the rotor. You discount the bill.',
      after: 'The estimate shows his yes at 10:40 with the line items. The bill stands.',
    },
    {
      time: '1:00',
      before: 'A mechanic brings a part from the shop next door. It never reaches the job card.',
      after: 'The part is issued to the job when it is fitted, with its cost, so it reaches the bill.',
    },
    {
      time: '4:00',
      before: 'A customer calls for an update. The supervisor walks around to find the car.',
      after: 'The card says "waiting for part, due 5 pm". The supervisor calls him first.',
    },
    {
      time: '7:30',
      before: 'Cash, UPI and the bill book are ₹700 apart at closing.',
      after: 'Verity points to the three jobs that do not tie. One was a free recheck that was never recorded.',
    },
    {
      time: 'Month end',
      before: 'You argue over mechanic incentives and match the dealer’s statement by hand.',
      after: 'The incentive sheet is ready on the 1st and the dealer’s dues are matched bill by bill.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your garage actually runs on a busy Saturday, build Verity around it, move your data in, then stay on so it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a busy day in your workshop. Follow a car from the gate to delivery, see how estimates, parts and bills are handled, and note how each dealer’s credit is tracked.',
        you: 'Two to three hours of your time and your service advisor’s. A few recent job cards, bills and the dealer statements.',
        get: 'A written map of your garage: job types and prices, bays, the team, your parts and dealers, and the first leaks to close.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your job types, estimate templates, job states, parts list with reorder levels, dealers and credit terms, incentive rules, service intervals and approval limits.',
        you: 'Check the setup with your service advisor. Tell us where an approval step or an incentive rule is wrong.',
        get: 'A working Verity with your garage’s real jobs, parts and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in customers and vehicles with their history, the parts list, dealer balances and open jobs from your job cards and sheets. Train the advisor and mechanics on the floor.',
        you: 'Your customer list and any service history in whatever form it exists. Half an hour with each mechanic.',
        get: 'Your customers, vehicles and parts inside Verity, and a team that has run real jobs on it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks with you, tune the reminder lists and reorder levels, and handle changes as you add a bay, a brand or a second workshop.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps pace with the garage, with someone responsible for it.',
      },
    ],
    bring: [
      'Your labour rates and common job prices',
      'Your customer list, even if it is a phone book',
      'Your parts list with costs, or last quarter’s dealer bills',
      'Dealer names, credit terms and current balances',
      'Your mechanic pay and incentive rules, as you apply them today',
    ],
    time: 'About 9 to 11 hours of your own time across the four weeks, mostly in week 1. Your service advisor needs a few more.',
    after: 'Nobody is hired to run Verity. The record starts with the job card you already open, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your garage a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own job, vehicle, parts and dealer records. Ask in plain language, then turn the answer into tasks for the right person.',
    examples: [
      {
        q: 'Which cars are waiting for parts and promised for today?',
        a: 'Four cars wait for parts. Two are promised today and at risk: the i20 and the Innova. The customers have not yet been told.',
        rows: [['i20, front shocks', 'Part due 3 pm'], ['Innova, clutch cable', 'Part due 4:30 pm'], ['Creta, wiper motor', 'No stock'], ['Nexon, sensor', 'Due tomorrow']],
        action: 'Create call tasks for the advisor',
      },
      {
        q: 'Which mechanic has the most comebacks this quarter?',
        a: 'Dinesh, with 5 comebacks on 37 jobs. Four were AC repairs. The other two mechanics are at one or two each.',
        rows: [['Dinesh', '5'], ['Salim', '2'], ['Ramesh', '1']],
      },
      {
        q: 'How much do I owe each parts dealer by the 25th?',
        a: 'Shree Auto Spares ₹46,400 on the 25th and Pune Brake House ₹31,200 on the 20th. Lubes and More is cleared.',
        action: 'Add both payments to the owner’s list',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still make the calls and send the messages, Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An estimate is not answered in 4 hours',
      then: ['Moved to the advisor’s call list', 'Customer history shown with it', 'Answer recorded with time and caller'],
    },
    {
      when: 'A job’s promised date is at risk',
      then: ['Flag raised on the job card', 'Task to call the customer first', 'New date recorded'],
    },
    {
      when: 'A part is fitted to a job',
      then: ['Deducted from stock', 'Added to the bill with cost and price', 'Flagged if no line appears on the bill'],
    },
    {
      when: 'A car is delivered',
      then: ['Next service date set from the odometer', 'Reminder scheduled', 'Mechanic credited with the job'],
    },
    {
      when: 'A vehicle returns within the warranty window',
      then: ['Linked to the original job', 'Counted as a comeback', 'Cost of the redo recorded'],
    },
    {
      when: 'A dealer bill is 5 days from due',
      then: ['Appears on the owner’s payment list', 'Matched to your recorded purchases', 'Payment recorded and balance updated'],
    },
  ],

  rules: {
    heading: 'The rules a garage has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant is not rebuilding them from job cards.',
    items: [
      {
        name: 'Used oil and producer responsibility',
        what: 'The Hazardous and Other Waste (Management and Transboundary Movement) Rules were amended to add producer responsibility for used oil from 1 April 2024, applying to producers, importers, bulk generators, collection agents and recyclers. A garage should check which category it falls in.',
        how: 'Used oil, oil filters and batteries are recorded as they leave, with quantity, date and collector, so the register exists without a separate notebook.',
        source: { name: 'Lakshmikumaran and Sridharan', url: 'https://www.lkslaw.com/insights/news/extended-producer-responsibility-epr-for-used-oils' },
      },
      {
        name: 'Pollution board consent for service stations',
        what: 'Vehicle service stations generally need consent from the State Pollution Control Board. A 2026 guide notes that the CPCB list of January 2026 puts automobile service stations in the Orange category. Confirm what applies to you.',
        how: 'Consent number, renewal date and conditions are on one record with the document attached, and the owner gets a task ahead of the date.',
        source: { name: 'OkCredit, car wash business guide', url: 'https://okcredit.in/blog/how-to-start-car-wash-business-in-india/' },
      },
      {
        name: 'Right to repair and workshop practices',
        what: 'The Department of Consumer Affairs runs a voluntary Right to Repair portal, and in 2024 the government urged car makers to join it. The same meeting discussed deceptive practices in repair workshops in the name of motor insurance. Right to repair is not yet a statutory right.',
        how: 'Estimates, approvals and parts fitted are kept on each job, so you can show a customer or an insurer exactly what was approved and done.',
        source: { name: 'Storyboard18', url: 'https://www.storyboard18.com/how-it-works/govt-urges-auto-firms-to-onboard-on-right-to-repair-portal-36416.htm' },
      },
      {
        name: 'GST on labour and parts',
        what: 'Repair labour is generally taxed as a service and parts as goods, and the rates can differ. Your accountant sets the treatment and the rates, which change from time to time.',
        how: 'Labour and parts are separate lines on each job, so the split your accountant needs is already clean at month end.',
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A mechanic should not see the dealer costs. The accountant should not change a job card. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the garage earning what it should?', sees: 'Jobs, bay use, comebacks, parts margin, dues in and out, and every workshop side by side.' },
    { role: 'Service advisor', question: 'Which customer needs a call?', sees: 'Estimates waiting, deliveries at risk, service due list and the history of any vehicle.' },
    { role: 'Mechanic', question: 'What am I fitting and what does the car need?', sees: 'The job card, parts issued to it, the vehicle’s history and their own jobs and advances.' },
    { role: 'Store keeper', question: 'What must I order today?', sees: 'Parts short, parts used by job, dealer bills to match and returns.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Collection by mode, dealer payables, claim and fleet receivables, and the labour and parts split.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing software or bill book. We agree how the bill and payment reach Verity during setup.',
      'Your diagnostic scanners and workshop equipment.',
      'WhatsApp for talking to customers and sending photos. Staff send the messages; Verity says who and when.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Take bookings or payments from customers online.',
      'Send messages to customers on its own.',
      'Diagnose faults or tell mechanics how to repair.',
      'File your returns or run your payroll.',
    ],
    migration:
      'We bring customers, vehicles, history, parts and dealer balances across from your job cards, sheets and bill book, in stages, so the garage keeps working while it happens.',
  },

  faqHeading: 'Questions garage owners ask.',
  faqs: [
    [
      'Will my mechanics actually use it?',
      'It only works if the job card is opened and parts are issued, so we keep each step to seconds on a phone or a counter screen. We train in the workshop on real jobs. Mechanics also get something back: their own job count, incentive and advance, visible and unarguable.',
    ],
    [
      'I have a billing software already. Do I switch?',
      'No. Keep it. During setup we agree how the bill and the payment reach Verity. Verity holds the job, the vehicle history, the parts and the reminders around it.',
    ],
    [
      'Can it message my customers about service due?',
      'Not on its own. Verity builds the due list and assigns the call or message to your advisor. The outcome is recorded against the vehicle.',
    ],
    [
      'I run a two-wheeler garage. Is it still useful?',
      'Yes. The shape is the same: a vehicle in, parts used, a promised date, a next service. We set up your job types, parts and prices in your own terms.',
    ],
    [
      'Can it track insurance claim jobs?',
      'Yes. A claim job carries its stages, such as surveyor visit, approval and payment, and shows how long it has been waiting. Verity does not talk to the insurer for you.',
    ],
    [
      'Can I see two workshops together?',
      'Yes. Each workshop is a location in one system. A customer is one person across both, stock can move between them against a record, and jobs and money can be compared side by side.',
    ],
    [
      'Who can see my parts costs and customer data?',
      'Only the people you allow. Access is set by role, so a mechanic does not see dealer costs and the accountant cannot change a job card. Every change is recorded with who made it and when.',
    ],
    [
      'How long before I see a difference?',
      'The service due list, estimate follow-ups and dealer dues need only your existing customer and bill data, so they come first. Parts margin and comeback patterns become reliable after a few weeks of recorded jobs.',
    ],
    [
      'What does it cost?',
      'It depends on the number of workshops, staff and what you want set up. Message us and we will give you a clear number after a short conversation about how your garage runs.',
    ],
  ],

  related: ['car-washes', 'auto-parts-stores', 'car-rentals', 'repair-services', 'hardware-stores', 'industrial-suppliers'],

  ctaHeading: 'Start with the customers who are overdue for service.',
  ctaLede:
    'Tell us how your garage runs and we will show you the overdue customers, the cars waiting on parts and the dealer dues it would find, using your own numbers.',
};
