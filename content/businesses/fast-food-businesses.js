export default {
  schema: 2,
  slug: 'fast-food-businesses',
  status: 'published',
  plural: 'fast food businesses',
  subject: 'fast food business',
  checked: '15 October 2026',

  seo: {
    title: 'Fast food and QSR outlet software for India | Verity',
    description:
      'Fifteen ways a fast food outlet loses money in the rush, from slow service and portion drift to fryer oil and franchise audits, with the Verity screens that fix them.',
    keywords: [
      'fast food outlet management software India',
      'QSR outlet speed of service tracking',
      'fast food franchise audit checklist',
      'fast food crew roster by hour',
      'multi-outlet QSR stock variance',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'workforce', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for fast food',
    headline: 'Your outlet wins or loses in ninety seconds at the counter. Verity shows you which.',
    lede:
      'Fast food is a business of speed, repeatable portions and tight cost control, multiplied by every outlet and every shift. A slow lunch hour, a heavy hand with the cheese, a fryer oil change that is skipped, or an audit that comes up short can each cost more than the day’s margin. Verity records what happens at each outlet and brings it to one screen.',
    oneLine:
      'One system that shows speed, stock, crew, audits and cash for every outlet, so a regional manager or owner sees the problem before the customer does.',
    note: 'Built for a crew that has no time to type. Records come from orders, prep and deliveries, with one-tap logs where a person must act.',
    screen: 'owner',
    screenNote: 'outlets, shifts, combos and audits',
  },

  today: {
    heading: 'Fast food runs on routine, and routines drift when nobody is watching.',
    paragraphs: [
      'A good outlet is a machine. Orders are taken, fries drop, burgers are assembled in a set order, and the tray goes out in a minute and a half. The recipe is fixed, the portion is fixed, the oil is changed on a schedule. On a good day every one of those is true.',
      'On an ordinary day they drift. A new crew member over-portions the sauce. The fryer oil goes one more day. The lunch queue is long and the order-to-handover time creeps up. A freezer door is left ajar. Each is small and happens out of the owner’s sight, in a place where the owner is not.',
      'Most of what an owner gets is a sales total at close of day. By the time food cost, wage cost or an audit shortfall reaches the owner, it is last month’s news. Industry commentary has long put rent as the second-largest cost after raw materials, and attrition among crew at twenty to twenty-five percent, so the margin for drift is narrow.',
    ],
    stack: ['Billing and kitchen display system', 'Distributor invoices and delivery slips', 'Excel or paper stock sheets', 'WhatsApp groups for each outlet', 'Franchisor portal and audit reports'],
    stackNote: 'Each sees one slice. A regional manager still pieces the picture together by phone.',
  },

  painsHeading: 'Where a fast food business actually loses money.',
  painsLede:
    'These are the situations owners, franchisees and regional managers describe. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Service',
      title: 'Speed of service slips at peak and no one sees it until customers complain',
      scene:
        'At 1:15 pm the queue reaches the door. Orders that should leave in ninety seconds take four minutes. One station is overwhelmed while another waits. The manager is on the counter and does not see the pattern.',
      cost:
        'Walk-aways at the queue, lower ratings and a trickle of lost regulars. Example arithmetic: ten customers a day walking away at ₹260 a ticket is ₹78,000 a month.',
      fix:
        'Each order carries the time it was taken, made and handed over. Verity shows the average and the slowest by hour and station, and flags the hours where the standard was missed, so the crew can be moved before the queue builds.',
      screen: 'service',
    },
    {
      area: 'Service',
      title: 'Wrong orders and missing items at the counter and in delivery bags',
      scene:
        'A customer opens the bag and finds no fries. A drive-in order has the wrong sauce. The refund is quick, and nobody asks which station or which person packed it.',
      cost:
        'Remakes, refunds and a customer who does not return, and without a pattern the same mistake repeats every Saturday.',
      fix:
        'Remakes and refunds are logged against the order, the station and the person with a one-tap reason. Verity shows errors by cause and hour, so a packing check or a layout change can target the real source.',
      screen: 'service',
    },
    {
      area: 'Menu',
      title: 'Combos and limited-time offers move volume and quietly cut margin',
      scene:
        'A festive combo sells hard. The burger is discounted, the drink is free, and the fries are a ₹20 add-on. Sales rise, but the real cost per combo was never worked out, and the offer stays on for a month.',
      cost:
        'Promotions that increase volume while shrinking contribution are common in fast food, and a crew rushing to hit them makes more mistakes.',
      fix:
        'Each combo is a recipe made of items with costs. Verity shows sales, cost and contribution per combo and per outlet, and the share of orders that were discounted, so you know if an offer earned or only sold.',
      screen: 'menu',
    },
    {
      area: 'Menu',
      title: 'Menu prices are set once and costs keep moving',
      scene:
        'Chicken, cheese, cooking oil and packaging all changed price in the last two quarters. The menu price was last revised a year ago. The best-selling item is now the one with the thinnest margin.',
      cost:
        'A drifting cost on a high-volume item moves quickly into the month’s profit and loss, long before anyone reprices.',
      fix:
        'Purchase rates update each item’s cost. Verity shows the current margin of every menu item and combo, flags those under your floor, and shows which outlets sell the most of them.',
      screen: 'menu',
    },
    {
      area: 'Kitchen',
      title: 'Portion drift: extra cheese, extra sauce, extra fries',
      scene:
        'A trainee fills the fries scoop to the top. The sauce gun gets two pumps instead of one. A grill cook adds an extra slice on busy nights. Each portion looks fine to the customer and is costly to you.',
      cost:
        'Example arithmetic: ₹3 of extra cheese and sauce on 200 burgers a day is ₹600 a day, about ₹18,000 a month, per outlet.',
      fix:
        'Each item has a standard recipe and weights. Verity compares what orders should have used with what stock says was used, per ingredient and per shift, so over-portioning shows as a number and a name.',
      screen: 'stock',
    },
    {
      area: 'Kitchen',
      title: 'Cooked food held too long, then thrown away',
      scene:
        'Patties and fried chicken are cooked ahead of demand. When the rush does not come, the hold timer runs out and a tray is thrown. When it comes early, the grill is behind. The prep quantity is a guess.',
      cost:
        'Wasted, cooked product is the most expensive waste in the building, and under-preparing at peak costs sales instead.',
      fix:
        'Cooked quantities, hold times and discards are logged by item and hour. Verity shows the hours where waste is highest and the hours where you ran short, so prep follows demand rather than habit.',
      screen: 'stock',
    },
    {
      area: 'Kitchen',
      title: 'Fryer oil is changed by habit, not by test',
      scene:
        'The oil gets topped up and stretched another day. The team is busy and the test strip is missing. A food safety officer asks to see the log, and there is none.',
      cost:
        'Bad oil gives poor-tasting food and a risk of failing an inspection. FSSAI has fixed a limit of 25 percent total polar compounds, beyond which the oil must not be used.',
      fix:
        'Each fryer has an oil log: the test reading, the change date and the person who did it. Verity prompts a test at set intervals, flags a reading near the limit, and records where the used oil went.',
      screen: 'upkeep',
      source: { name: 'Eat Right India, FSSAI, Repurpose Used Cooking Oil', url: 'https://eatrightindia.gov.in/ruco' },
    },
    {
      area: 'Supply',
      title: 'Deliveries from the distributor arrive short, warm or late',
      scene:
        'The weekly truck brings 40 boxes of frozen patties. The slip says 40, the count is 37. A case of chicken arrived at the wrong temperature. The late truck means the outlet borrows stock from the next outlet.',
      cost:
        'You pay for what was not delivered, product is thrown for temperature, and borrowing between outlets is never recorded.',
      fix:
        'Deliveries are received against the order with quantity and temperature recorded. Verity flags short or warm items before payment, and an outlet borrow is a recorded transfer between the two locations.',
      screen: 'stock',
    },
    {
      area: 'Supply',
      title: 'The signature item runs out at the peak hour',
      scene:
        'The best-selling burger bun finishes at 8 pm on Friday. The outlet sells chicken burgers with a different bun, which nobody asked for, or turns the order away.',
      cost:
        'A stock-out at peak is a lost sale on the busiest hour of the week, and a customer who learns your menu is unreliable.',
      fix:
        'Each item has a reorder point based on use by day of the week. Verity checks the coming weekend’s usual demand against stock and the next delivery slot, and drafts an order in time.',
      screen: 'stock',
    },
    {
      area: 'Crew',
      title: 'High crew turnover and a long ramp-up for each new hire',
      scene:
        'A trainee joins on Monday and is at the counter by Wednesday. Half the crew are part-timers or students. By the end of the month two have left, and the manager is training again.',
      cost:
        'Restaurant industry commentary cites crew attrition of 20 to 25 percent. Every exit costs recruitment, training time and slower service during the learning curve.',
      fix:
        'Each person’s station skills and training are recorded with a sign-off. Verity shows who is cleared for which station and who is overdue for training, so a new crew member is not placed at the fryer on day two.',
      screen: 'crew',
      source: { name: 'Restaurant India, Issues and Challenges by Restaurant Industry, 2013', url: 'https://www.restaurantindia.in/article/issues-and-challenges-by-restaurant-industry.6121' },
    },
    {
      area: 'Crew',
      title: 'The roster does not match demand by the hour',
      scene:
        'The same six people are on from 11 to 9. Lunch and dinner peaks are heavy and the middle of the afternoon is empty. Overtime appears on weekends because nobody planned for them.',
      cost:
        'Labour is one of the biggest controllable costs, and paying for the quiet hours while being short at the peak hurts both cost and speed.',
      fix:
        'Orders per hour by weekday are laid against the roster. Verity shows over- and under-staffed hours, so the manager moves shifts before the week begins and checks the wage hours against sales.',
      screen: 'crew',
    },
    {
      area: 'Franchise',
      title: 'Audit scores, royalty and brand standards arrive as separate reports',
      scene:
        'The franchisor’s inspection finds the sauce station out of standard and the signage dirty. The royalty statement lands in another inbox. The corrective action is a message in a group chat.',
      cost:
        'A failed audit can mean a penalty or a warning, and royalty and marketing fees are paid on sales that you must be able to match to your own records.',
      fix:
        'Audit findings become tasks with an owner and a due date, and the checklist for the next visit is run weekly. Sales for the royalty period come from the same orders, so the statement can be checked against them.',
      screen: 'audits',
    },
    {
      area: 'Equipment',
      title: 'A fryer, freezer or shake machine fails at the busiest hour',
      scene:
        'The soft-serve machine misses its cleaning cycle. The walk-in freezer door seal is torn. One of two fryers fails on a Saturday evening, and the second cannot carry the rush.',
      cost:
        'Menu items go off, product is lost in a failed freezer and the weekend call-out costs more.',
      fix:
        'Each machine is a record with its service and cleaning schedule and vendor. Verity raises a task before each is due, logs temperatures for the freezers and keeps the history of repairs.',
      screen: 'upkeep',
    },
    {
      area: 'Cash',
      title: 'Voids, refunds and day-end cash across shifts',
      scene:
        'A void after payment, a refund for a missing item, a staff meal rung up as zero. Two shift leads share one drawer. The day-end count is off by ₹600 and the explanation is “the rush”.',
      cost:
        'Voids and refunds are the most common place for loss and misuse in counter service, and a shortage with no name attached cannot be fixed.',
      fix:
        'Voids and refunds above a limit need a manager approval with a reason. Verity totals them by person and shift, and the day-end cash and card totals are compared with orders, with mismatches flagged.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'Many outlets, and the weakest one is not obvious',
      scene:
        'A regional manager visits two outlets a day. Each reports its own way, by message or by photo. The weakest outlet this month is found on the visit, not before.',
      cost:
        'A poor outlet can carry on losing money for months, while a good one gives no lesson because nobody can say why it works.',
      fix:
        'Each outlet is a location in one system. Verity ranks them on speed, food cost, waste, audit score, labour and cash accuracy, so the manager visits where the numbers say.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The figures behind fast food’s thin margin.',
  factsLede: 'From published sources, with the source named under each. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '25%',
      text: 'is the Total Polar Compounds limit FSSAI has fixed for frying oil, beyond which it shall not be used. Operators have had to monitor frying oil quality since 1 July 2018.',
      source: { name: 'Eat Right India, FSSAI', year: '2018 rule', url: 'https://eatrightindia.gov.in/ruco' },
    },
    {
      figure: '20 to 25%',
      text: 'is the industry attrition rate cited for restaurant staff in a trade article, with availability of trained staff described as low. The article is dated, so treat it as an indication.',
      source: { name: 'Restaurant India, Issues and Challenges by Restaurant Industry', year: '2013', url: 'https://www.restaurantindia.in/article/issues-and-challenges-by-restaurant-industry.6121' },
    },
    {
      figure: 'Second-largest cost',
      text: 'is how the same article describes rent in food service outlets, after raw materials.',
      source: { name: 'Restaurant India, Issues and Challenges by Restaurant Industry', year: '2013', url: 'https://www.restaurantindia.in/article/issues-and-challenges-by-restaurant-industry.6121' },
    },
    {
      figure: 'Normalisation',
      text: 'is how rating agency ICRA described India’s QSR industry at the end of 2025, after two challenging years, with rising fixed costs and continued store additions pressing on franchise economics.',
      source: { name: 'ICRA, QSR industry research summary', year: '2025', url: 'https://www.icra.in/Rating/DownloadResearchSummaryReport?id=6719' },
    },
  ],
  factsNote:
    'The attrition and rent statements come from a 2013 trade article and are indications, not current measures. The ICRA wording is taken from search results of its December 2025 summary, whose slides we could not open in full. The oil rule is from a government site.',

  screensHeading: 'The screens an outlet and its owner would use every day.',
  screensLede: 'Seven views, each built for one job, set up in your own menu, stations and outlet names.',
  screens: [
    {
      id: 'owner',
      title: 'Outlets / Today',
      meta: 'Region: South, 6 outlets',
      heading: 'The owner’s or regional manager’s morning view',
      caption:
        'All outlets ranked on speed, food cost, waste, audit score, cash and labour, with the items that need a decision under them. It replaces the morning round of calls.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales yesterday', value: '₹3,86,500', note: '6 outlets' },
            { label: 'Average handover', value: '2 min 41 s', note: 'standard 2 min' },
            { label: 'Food cost', value: '32.4%', note: 'target 31%' },
            { label: 'Open audit actions', value: '9', note: '3 overdue' },
          ],
        },
        {
          type: 'table',
          cols: ['Outlet', 'Handover', 'Food cost', 'Waste', 'Cash'],
          rows: [
            ['MG Road', '2:05', '30.8%', '2.1%', ['Tied', 'ok']],
            ['Koramangala', '2:32', '31.9%', '3.0%', ['Tied', 'ok']],
            ['Whitefield', '3:18', '34.6%', '4.8%', ['Off ₹640', 'late', 'Explained', 'ok']],
            ['Indiranagar', '2:48', '32.2%', '2.9%', ['Tied', 'ok']],
          ],
        },
        { type: 'alert', text: 'Whitefield has missed the handover standard for 5 days running at the 1 to 2 pm slot.', action: 'Review' },
      ],
    },
    {
      id: 'service',
      title: 'Speed and accuracy',
      meta: 'Outlet: Whitefield, last 7 days',
      heading: 'Where the lunch queue is building',
      caption:
        'Order-to-handover time by hour and station, with errors grouped by cause. The manager can see which hour and which station slips before customers say so.',
      blocks: [
        { type: 'title', text: 'Average handover time by hour, minutes' },
        {
          type: 'bars',
          items: [
            { label: '12 to 1 pm', value: 70, display: '2:50' },
            { label: '1 to 2 pm', value: 100, display: '3:55', tone: 'muted' },
            { label: '2 to 4 pm', value: 48, display: '1:50' },
            { label: '7 to 9 pm', value: 75, display: '3:00' },
          ],
        },
        {
          type: 'table',
          cols: ['Error cause', 'Orders', 'Station', 'Hour', 'Action'],
          rows: [
            ['Missing item', '17', 'Packing', '8 to 9 pm', ['Checklist', 'flag', 'Added', 'ok']],
            ['Wrong sauce', '9', 'Assembly', '1 to 2 pm', ['Retrain', 'flag']],
            ['Cold fries', '7', 'Fryer', '1 to 2 pm', ['Hold time', 'late', 'Set', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'menu',
      title: 'Menu and combos',
      meta: 'Cost at latest purchase rates',
      heading: 'What each combo earns at today’s costs',
      caption:
        'Every item and combo with price, cost, margin and the share sold on discount. A change in cheese or chicken shows in the margin the same week.',
      blocks: [
        {
          type: 'table',
          cols: ['Combo', 'Sold, week', 'Price', 'Cost', 'Margin'],
          rows: [
            ['Classic burger meal', '1,420', '₹199', '₹71', ['64%', 'ok']],
            ['Festive family box', '380', '₹649', '₹318', ['51%', 'late', 'Repriced', 'ok']],
            ['Chicken wings x6', '910', '₹179', '₹68', ['62%', 'ok']],
            ['Cheese burger meal', '1,060', '₹229', '₹94', ['59%', 'flag']],
          ],
        },
        { type: 'alert', text: 'Cheese rose 11% since July. Cheese burger meal margin fell by 4 points.', action: 'Review price' },
      ],
    },
    {
      id: 'stock',
      title: 'Stock, portions and deliveries',
      meta: 'Outlet: Whitefield',
      heading: 'What was used against what should have been',
      caption:
        'Use against the standard for each key ingredient, cooked-food waste by hour, and the checks done on today’s delivery.',
      blocks: [
        {
          type: 'table',
          cols: ['Ingredient', 'Should use', 'Used', 'Gap', 'Status'],
          rows: [
            ['Cheese slices', '1,420', '1,586', '+11.7%', ['High', 'late', 'Retrained', 'ok']],
            ['Burger patties', '2,310', '2,330', '+0.9%', ['OK', 'ok']],
            ['Sauce, litres', '38', '45', '+18%', ['High', 'flag']],
            ['Frying oil, litres', '120', '124', '+3.3%', ['OK', 'ok']],
          ],
        },
        {
          type: 'table',
          cols: ['Delivery today', 'Ordered', 'Received', 'Temperature', 'Status'],
          rows: [
            ['Frozen patties', '40', '37', '-18°C', ['Short 3', 'late', 'Credit asked', 'info']],
            ['Chicken pieces', '24', '24', '6°C', ['Too warm', 'flag', 'Returned', 'ok']],
            ['Buns', '60', '60', 'Ambient', ['OK', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'crew',
      title: 'Crew and roster',
      meta: 'Next week',
      heading: 'Shifts that match the day, and who is cleared where',
      caption:
        'Orders by hour against crew on shift, and each person’s station sign-offs. Gaps are marked while there is time to move a shift.',
      blocks: [
        { type: 'title', text: 'Orders per hour against crew on shift, Friday' },
        {
          type: 'bars',
          items: [
            { label: '11 am to 1 pm', value: 60, display: '58 orders, 5 crew' },
            { label: '1 to 3 pm', value: 100, display: '96 orders, 4 crew', tone: 'muted' },
            { label: '3 to 7 pm', value: 38, display: '37 orders, 5 crew', tone: 'muted' },
            { label: '7 to 10 pm', value: 92, display: '88 orders, 5 crew' },
          ],
        },
        {
          type: 'table',
          cols: ['Crew', 'Role', 'Fryer', 'Assembly', 'Training'],
          rows: [
            ['Anil', 'Shift lead', ['Cleared', 'ok'], ['Cleared', 'ok'], ['Complete', 'ok']],
            ['Pooja', 'Counter', ['No', 'muted'], ['Cleared', 'ok'], ['Food safety due', 'late', 'Booked', 'info']],
            ['Rohan', 'New hire', ['No', 'muted'], ['In training', 'info'], ['Week 1', 'info']],
          ],
        },
      ],
    },
    {
      id: 'upkeep',
      title: 'Oil, machines and licences',
      meta: 'Due this month',
      heading: 'Daily logs and service dates in one place',
      caption:
        'Fryer oil readings, freezer temperatures, machine cleaning and service, and licence dates, each with a person and a date.',
      blocks: [
        {
          type: 'table',
          cols: ['Fryer', 'Last test', 'Reading', 'Last change', 'Status'],
          rows: [
            ['Fryer 1', 'Today 11:30', '19%', '14 Oct', ['OK', 'ok']],
            ['Fryer 2', 'Today 11:35', '23%', '12 Oct', ['Near limit', 'late', 'Changed', 'ok']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Freezer temperature, morning', meta: '-19°C, Anil, 8:05', done: true },
            { text: 'Shake machine cleaning cycle', meta: 'Due 10 pm', done: false },
            { text: 'Used oil handover recorded', meta: 'Collected Mon, receipt filed', done: true },
          ],
        },
      ],
    },
    {
      id: 'audits',
      title: 'Audits and actions',
      meta: 'Brand standards',
      heading: 'Findings that turn into jobs with names',
      caption:
        'Every audit finding is an action with an owner and a date. The weekly self-check uses the same list, so the next visit does not come as a surprise.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Open',
              cards: [
                { title: 'Sauce station out of standard', meta: 'Whitefield, due 18 Oct, owner Anil', tag: ['Open', 'flag', 'Fixed', 'ok'] },
                { title: 'Signage lit but dirty', meta: 'MG Road, due 17 Oct', tag: ['Overdue', 'late', 'Cleaned', 'ok'] },
              ],
            },
            {
              name: 'Waiting for check',
              cards: [
                { title: 'Hand-wash log gaps', meta: 'Koramangala, fixed 12 Oct', tag: ['Re-check', 'info'] },
                { title: 'Uniform standard', meta: 'Indiranagar, fixed 10 Oct', tag: ['Re-check', 'info'] },
              ],
            },
          ],
        },
        { type: 'alert', text: 'September royalty is due on sales of ₹1.14 crore. Your recorded sales are ₹1.13 crore, a ₹0.7 lakh gap to explain.', action: 'Reconcile' },
      ],
    },
  ],

  dayHeading: 'The same Friday, before and after.',
  dayLede: 'The crew does the same job. The outlet just starts to leave a record that someone can read in time.',
  day: [
    {
      time: '10:30 am',
      before: 'The shift lead eyeballs the walk-in and estimates the day’s prep from memory.',
      after: 'The prep sheet shows Friday’s usual quantities by hour, and the bun shortage was ordered on Wednesday.',
    },
    {
      time: '1:15 pm',
      before: 'The queue builds. The manager is on the counter and the owner learns about it from a review.',
      after: 'The handover time crossed 3 minutes at 1:10. A flag went to the manager, who moved one person from packing to assembly.',
    },
    {
      time: '3:30 pm',
      before: 'The delivery truck arrives short. The slip is signed and nobody checks the frozen count.',
      after: 'The received count is entered against the order. The 3-box shortage is flagged and a credit request is raised.',
    },
    {
      time: '6:00 pm',
      before: 'Fryer oil is “probably fine”. The test strips are in a drawer somewhere.',
      after: 'Verity prompts the test. Fryer 2 reads 23 percent and is changed before the dinner peak.',
    },
    {
      time: '10:30 pm',
      before: 'The closing lead counts the drawer. It is ₹600 off and the explanation is the rush.',
      after: 'Two voids and one refund explain ₹540. The remaining ₹60 is noted for the next shift.',
    },
    {
      time: 'Monthly',
      before: 'The franchisor’s audit and your own numbers are reconciled by hand over a weekend.',
      after: 'Audit actions, sales for the royalty and the outlet scorecard are ready from records kept all month.',
    },
  ],

  approach: {
    heading: 'Four weeks from the first visit to a working outlet.',
    lede:
      'You do not receive a login and a manual. We spend a lunch peak and a close at one of your outlets, build Verity around your menu and your standards, then roll out outlet by outlet.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a lunch peak and a closing at one outlet. Follow an order from counter to handover, see how stock and cash are handled, and read your latest audit report and royalty statement.',
        you: 'Two to three hours of yours and one outlet manager’s. A month of sales reports, recent invoices and your standard operating checklist.',
        get: 'A written map of your outlet: menu and recipes, stations, stock list, shifts, standards and the first problems we will close.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up the menu with recipes and weights, combos, handover standards, reorder points, shifts, approval limits, oil and machine schedules, and audit checklists, then build the seven screens in your language.',
        you: 'Check recipes and standards with one outlet manager. Tell us where a rule does not match how you run.',
        get: 'A working Verity with your real menu, stations and standards, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in the menu, suppliers, stock and crew details from your sheets. Train the shift leads and crew at their stations during real shifts, then extend to the remaining outlets.',
        you: 'An opening stock count and the crew list. One hour with each role at the pilot outlet.',
        get: 'The pilot outlet running on Verity and a plan to bring the others in.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks of numbers with you, tune the standards and thresholds, and help with each new outlet and each new offer.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps pace with new outlets and offers, with a named person responsible for it.',
      },
    ],
    bring: [
      'Your menu with prices, combos and any recipe or portion cards',
      'A month of sales reports and distributor invoices',
      'Your latest audit report and royalty statement, if you are a franchisee',
      'Crew list with roles and the current roster pattern',
      'Licence details and the service dates of fryers, freezers and other machines',
    ],
    time: 'About 8 to 12 hours of your own time across the four weeks, mostly in week 1. Your outlet manager or regional manager needs a few more.',
    after: 'Nobody is hired to run Verity. Orders, prep and deliveries are recorded in the course of the shift, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your outlets a question.',
    lede:
      'Verity AI reads your own orders, stock, crew and audit records. Ask in plain words, then turn the answer into a task for the right person.',
    examples: [
      {
        q: 'Which outlet is slowest at lunch, and why?',
        a: 'Whitefield, at 3:55 between 1 and 2 pm. The queue builds at assembly, and four crew are on against five at the other outlets.',
        rows: [['Whitefield', '3:55'], ['Indiranagar', '2:48'], ['Koramangala', '2:32'], ['MG Road', '2:05']],
        action: 'Create a roster task for Whitefield’s manager',
      },
      {
        q: 'Where is cheese use above standard this week?',
        a: 'Whitefield is 11.7 percent over, mostly on the 1 to 3 pm shift. Other outlets are within 3 percent.',
        rows: [['Whitefield', '+11.7%'], ['Indiranagar', '+2.8%'], ['Koramangala', '+1.9%'], ['MG Road', '+0.6%']],
      },
      {
        q: 'What audit actions are overdue?',
        a: 'Three. Sauce station at Whitefield, signage at MG Road and a hand-wash log at Koramangala that is waiting for a re-check.',
        action: 'Assign each to its outlet manager',
      },
    ],
  },

  automationHeading: 'The routine checks nobody should have to remember.',
  automationLede: 'Set once, then they run from your records. The crew still does the job on the floor; Verity makes sure the right person is told at the right time.',
  automations: [
    {
      when: 'Handover time passes the standard for three orders running',
      then: ['Flagged on the manager’s screen', 'Station and hour recorded', 'Fix and reason noted after the rush'],
    },
    {
      when: 'A delivery is received short or at the wrong temperature',
      then: ['Marked against the distributor', 'Credit or return task to the manager', 'Held from payment until settled'],
    },
    {
      when: 'A fryer test is due',
      then: ['Task to the shift lead', 'Reading recorded with the time', 'Oil change task if the reading is near the limit'],
    },
    {
      when: 'A void or refund is above your limit',
      then: ['Held for manager approval', 'Reason attached to the order', 'Totals updated by person and shift'],
    },
    {
      when: 'An ingredient falls below its reorder point',
      then: ['Checked against the weekend’s usual demand', 'Order drafted for the next truck', 'Stock updated on receipt'],
    },
    {
      when: 'An audit action passes its due date',
      then: ['Escalated to the outlet manager', 'Shown to the regional manager', 'Closed with a photo or note'],
    },
  ],

  rules: {
    heading: 'The rules a fast food business has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules lean on in order, so they can be shown when someone asks.',
    items: [
      {
        name: 'FSSAI registration or licence for each outlet',
        what: 'Each outlet is a food business and needs registration or a licence for its category. From 1 April 2026 basic registration generally applies up to ₹1.5 crore of turnover, and licences generally no longer need renewal. Check the band for each outlet.',
        how: 'Each outlet’s registration is stored with its number, category and dates, and a change in address or menu category is a task.',
        source: { name: 'SetIndiaBiz summary of FSSAI 2026 changes', url: 'https://www.setindiabiz.com/blog/fssai-2026-reforms' },
      },
      {
        name: 'Frying oil quality',
        what: 'FSSAI has fixed 25 percent Total Polar Compounds as the limit beyond which frying oil must not be used, and food businesses have had to monitor oil quality since 1 July 2018. Larger operators are also expected to hand used oil only to authorised collectors.',
        how: 'Each fryer carries test readings, change dates and used-oil handover records, ready if an officer asks.',
        source: { name: 'Eat Right India, FSSAI', url: 'https://eatrightindia.gov.in/ruco' },
      },
      {
        name: 'Hygiene, temperature and staff health records',
        what: 'Licensed outlets are generally expected to keep records of cleaning, cold-storage temperatures, pest control and staff health, and trained food safety supervision depends on the licence category.',
        how: 'Daily checks are signed off at the outlet, and training and health certificates sit on each person’s record with expiry dates.',
      },
      {
        name: 'Franchise agreement standards',
        what: 'A franchise agreement sets brand standards, audit rules, royalty and marketing fees. The terms differ by brand, so the agreement is the rule that applies to you.',
        how: 'Audit checklists, findings and actions are recorded per outlet, and sales for each royalty period come from the same orders.',
      },
    ],
    note: 'Rules change and differ by city, state and brand. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone reads the same records, through their own window.',
  rolesLede: 'A crew member should not see margins. A regional manager should not have to ask for the numbers. Each role opens on what it uses.',
  roles: [
    { role: 'Owner or franchisee', question: 'Which outlet needs me, and why?', sees: 'Outlet ranking on speed, food cost, waste, audits and cash, plus sales against royalty and each outlet’s open actions.' },
    { role: 'Regional manager', question: 'Where should I go this week?', sees: 'Outlets side by side, overdue audit actions, stock-outs, errors and roster gaps.' },
    { role: 'Outlet manager', question: 'What will slip today?', sees: 'Live handover times, stock for today, the roster, deliveries to check and approvals waiting.' },
    { role: 'Shift lead', question: 'What must I log and sign off?', sees: 'Oil tests, temperature checks, voids and refunds to approve, and the cash count at close.' },
    { role: 'Accountant', question: 'What was sold, bought and paid?', sees: 'Sales by payment mode and channel, distributor invoices matched to deliveries, and royalty period totals.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing and kitchen display system. We agree during setup how orders and payments reach Verity.',
      'The delivery apps you sell on. We record their orders by channel.',
      'Your franchisor’s portal and audits. Verity tracks the actions that come out of them.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Run your billing counter or the kitchen display.',
      'Take customer orders or run an ordering app.',
      'Send messages to customers or distributors on its own.',
      'File your returns or run your payroll.',
    ],
    migration:
      'We bring in the menu, suppliers, stock, crew and past audit actions from the sheets and portals you use now, starting with one pilot outlet, so the others keep serving while it happens.',
  },

  faqHeading: 'Questions fast food owners ask.',
  faqs: [
    [
      'My crew is busy and young. Will they really log things?',
      'Only where it takes a tap. Orders and stock come from the order itself, and the crew log just remakes, wastes, oil tests and temperatures. We train during live shifts at their station.',
    ],
    [
      'Does Verity replace my billing or kitchen display system?',
      'No. Those keep running the counter. We agree with you how orders and payments reach Verity, which then handles stock, crew, audits, cash and the comparison between outlets.',
    ],
    [
      'I am a franchisee. Does this clash with my franchisor’s systems?',
      'No. Their systems and audits stay as they are. Verity holds your own records and turns audit findings into actions with an owner, and it helps you check sales against royalty statements.',
    ],
    [
      'Can it measure speed of service?',
      'Where order times are available from your billing or kitchen display, yes. We agree during setup how those times reach Verity. If they are not available, we start with what can be recorded and add more later.',
    ],
    [
      'I have two outlets. Is this too much?',
      'Two outlets are where side-by-side comparison first helps. We set up only what you need, in the same four weeks, and the second outlet shows the first one what is possible.',
    ],
    [
      'Can I see all my outlets together?',
      'Yes. Each outlet is a location in one system. You can compare speed, food cost, waste, audit score, labour and cash side by side, and transfers between outlets are recorded.',
    ],
    [
      'Who can see my data?',
      'Only the people you allow. Access is set by role, so crew, managers, regional managers and your accountant each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'How soon will it be useful?',
      'Stock-outs, delivery checks and audit actions need only existing data, so we aim to have them first. Speed and portion patterns become reliable after a few weeks of recorded service.',
    ],
    [
      'What does it cost?',
      'It depends on the number of outlets, people and what you want set up. Message us and we will give you a clear number after a short conversation about how your outlets run.',
    ],
  ],

  related: ['restaurants', 'cloud-kitchens', 'cafes', 'bakeries', 'catering-businesses', 'convenience-stores'],

  ctaHeading: 'Start with your slowest hour.',
  ctaLede:
    'Tell us how your outlets run and we will show you the slow hours, the portion gaps and the open audit actions it would find, using your own numbers.',
};
