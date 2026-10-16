export default {
  schema: 2,
  slug: 'cloud-kitchens',
  status: 'published',
  plural: 'cloud kitchens',
  subject: 'cloud kitchen',
  checked: '15 October 2026',

  seo: {
    title: 'Cloud kitchen management software for India | Verity',
    description:
      'Fifteen ways a cloud kitchen loses money on every order, from aggregator commission to refunds and packaging, with the Verity screens that show and fix each one.',
    keywords: [
      'cloud kitchen management software India',
      'cloud kitchen profit per order',
      'multi-brand cloud kitchen costing',
      'aggregator payout reconciliation',
      'cloud kitchen inventory and packaging',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'workforce', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for cloud kitchens',
    headline: 'Orders are pouring in. What is each one actually earning you?',
    lede:
      'A cloud kitchen has no dining room, so every rupee comes through a screen: orders from one or two delivery apps, each taking its share, each owning your customer. When the kitchen is busy, it feels like business is good. Verity shows what is left after commission, discounts, packaging and food, brand by brand and order by order.',
    oneLine:
      'One system that shows profit per order, per brand and per channel, along with the stock, staff, refunds and payouts behind them.',
    note: 'Built for a kitchen where every second counts. Records come from orders, prep and dispatch, with no extra forms for the cooks.',
    screen: 'owner',
    screenNote: 'brands, channels, kitchens and payouts',
  },

  today: {
    heading: 'A cloud kitchen sees its orders clearly and everything behind them dimly.',
    paragraphs: [
      'The app dashboard shows the orders, the rating and the sales. It does not show what the order cost to make and pack, what the platform deducted, or what the discount you opted into really took. The settlement that arrives each week is a single figure that rarely matches your own count.',
      'Behind it, the kitchen is a tight machine: a few cooks, a few brands, shared ingredients, a packing counter and a rider who arrives when he arrives. When one ingredient runs out or one brand surges, the others feel it. Nobody holds the whole picture except the owner, and the owner is often also the cook.',
      'Because almost all orders come through platforms, the platform sets the commission, owns the customer’s contact and decides your visibility. The margins that remain are thin, and one bad week of refunds, a price rise or a packaging shortage can erase a month’s profit.',
    ],
    stack: ['Delivery app tablets and dashboards', 'Billing or order printing software', 'Excel for stock and purchases', 'WhatsApp with cooks and suppliers', 'Weekly payout statements'],
    stackNote: 'Each is accurate for what it shows. None connects an order to its cost, its deduction, and its payout.',
  },

  painsHeading: 'Where a cloud kitchen actually loses money.',
  painsLede:
    'These are the situations cloud kitchen owners and kitchen heads describe. For each one: what it looks like, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Channels',
      title: 'Almost every order comes through one or two apps, and you cannot see what is left',
      scene:
        'A ₹400 order brings in a lot of revenue on the dashboard. After commission, the tax on it, packaging, the discount you funded and the food itself, what stays with you is a fraction. The dashboard never shows that.',
      cost:
        'Delivery platform commissions often range between 20 and 30 percent. Example arithmetic: on ₹400, a 25 percent commission is ₹100, food and packaging ₹150 and a ₹40 discount you funded leaves ₹110 before rent, staff and gas.',
      fix:
        'Every order is recorded with its channel, its discount and its commission rule. Verity shows contribution per order and per channel after food and packaging, so you can see which orders are worth taking and which promotions cost you money.',
      screen: 'channels',
      source: { name: 'Restaurant India, Why Most Cloud Kitchens Fail in India, 2026', url: 'https://www.restaurantindia.in/article/why-most-cloud-kitchens-fail-in-india.16335' },
    },
    {
      area: 'Channels',
      title: 'The weekly payout never matches your count',
      scene:
        'The settlement says ₹1,84,300. Your own order total says ₹1,96,000. The difference is cancelled orders, penalty lines, ad charges and refunds, and nobody has the time to match them to the orders.',
      cost:
        'Money you were owed may be quietly deducted. Without an order-by-order match, you cannot dispute anything, so you accept whatever arrives.',
      fix:
        'Platform statements are matched line by line to the orders in Verity. Differences are listed by reason, with the orders involved, so disputes go to the platform with evidence.',
      screen: 'channels',
    },
    {
      area: 'Customers',
      title: 'The app owns your customer, so every order is bought again',
      scene:
        'The same family orders from you six times a month. On the platform you see an anonymised order. If your rating dips or the platform shows a competitor first, they are gone, and you do not even know their name.',
      cost:
        'Industry estimates suggest a cloud kitchen can spend ₹150 to ₹500 to win one new customer, and winning one can cost up to five times more than keeping one.',
      fix:
        'Where a customer reaches you directly, Verity keeps their record with their orders and complaints, and lists repeat customers who stopped ordering. Staff reach out; the outcome is recorded. For app orders, we agree during setup what the platform shares.',
      screen: 'issues',
      source: { name: 'Restaurant India, Why Most Cloud Kitchens Fail in India, 2026', url: 'https://www.restaurantindia.in/article/why-most-cloud-kitchens-fail-in-india.16335' },
    },
    {
      area: 'Brands',
      title: 'Five brands from one kitchen, and no idea which one earns',
      scene:
        'A biryani brand, a pizza brand, a rolls brand, a dessert brand and a healthy bowl brand all share one kitchen. The pizza brand sells most but uses expensive cheese. The dessert brand has the best margin but few orders. The books show only one total.',
      cost:
        'You may be pushing the brand that grows sales while shrinking profit, and carrying a brand that costs more in effort than it earns.',
      fix:
        'Every order and recipe is tagged to a brand. Verity shows sales, food cost, packaging and contribution per brand, plus which brands use the same ingredients, so you can see what to push, price up or drop.',
      screen: 'brands',
    },
    {
      area: 'Brands',
      title: 'Recipes live in the cook’s head and costs drift',
      scene:
        'The paneer in the rolls is “about 80 grams”. The new cook uses 110. Cheese portions for the pizza are a handful. Each brand’s food cost was set once, at launch.',
      cost:
        'Portion drift is invisible on a single order and obvious in a month’s cheese bill. At delivery-app prices, there is no room for it.',
      fix:
        'Each dish has a recipe with ingredients and weights. Verity compares what orders should have used with what stock says was used, by brand and ingredient, so over-portioning shows up as a number.',
      screen: 'brands',
    },
    {
      area: 'Kitchen',
      title: 'Prep time slips and riders wait',
      scene:
        'Two brands surge at the same time on Saturday night. The tickets pile up, orders are marked ready late, riders wait outside, and the app shows “delayed” beside your name.',
      cost:
        'Late orders mean cancellations, bad ratings and lower visibility on the app, and rating is the main way a cloud kitchen is found.',
      fix:
        'Each order carries a promised prep time and the times it was accepted, prepared and handed over. Verity shows the delay by brand, hour and station, so you can add a hand at the right hour or limit orders in peak slots.',
      screen: 'kitchen',
    },
    {
      area: 'Kitchen',
      title: 'An ingredient runs out and the app keeps selling it',
      scene:
        'Paneer is finished at 8:10 pm. The rolls brand is still live, and eleven orders come in. Four are cancelled and the platform notes a cancellation against your kitchen.',
      cost:
        'Cancellations hurt ranking, refunds cost money, and a customer who sees “unavailable” orders from someone else instead.',
      fix:
        'Stock is deducted as dishes are made, so Verity warns when an ingredient is about to run out, lists the dishes it affects and tells the manager to switch them off in the app. Staff do that step; Verity makes sure it is not missed.',
      screen: 'stock',
    },
    {
      area: 'Orders',
      title: 'Wrong items, missing sauces and spilled gravy',
      scene:
        'A customer receives chicken instead of paneer. Another finds no raita. A third receives a leaking container. Each gets a refund request, and the complaint is a line in an app, not a pattern anyone studies.',
      cost:
        'Refunds are often charged to the kitchen. A low rating pushes you down the search list for everyone. Repeated errors from the same station or the same pack-out are fixable once they are visible.',
      fix:
        'Complaints and refunds are logged against the order, the brand, the station and the person who packed it. Verity shows them by cause so you can fix packing checks, container choice or a specific item.',
      screen: 'issues',
    },
    {
      area: 'Stock',
      title: 'Packaging runs out, or is bought by feel',
      scene:
        'Containers, bags, cutlery, stickers and tissue are bought in a rush when the last box is opened. A new sauce container nobody ordered holds up a whole shift. Packaging goes missing between the store and the packing counter.',
      cost:
        'Packaging is a real cost on every order, often more than owners expect, and a shortage can stop sales altogether.',
      fix:
        'Each dish has a pack list. Packaging is deducted as orders are packed and has its own reorder point. Verity lists what the coming days of orders will use and drafts the purchase in time.',
      screen: 'stock',
    },
    {
      area: 'Suppliers',
      title: 'Vegetable, chicken and dairy prices swing and no one re-costs',
      scene:
        'Onion prices double for a fortnight. The chicken rate changes weekly. The dairy vendor adds a delivery charge. Menu prices on the apps were set months ago and are changed only when someone remembers.',
      cost:
        'On thin margins, a week of higher costs on your best sellers can turn them into losses, and nobody sees it until the month’s numbers arrive.',
      fix:
        'Each purchase records the rate. Verity updates every dish’s cost, shows margin per dish and brand, and highlights the ones that fell below your floor so you can reprice on the apps.',
      screen: 'brands',
    },
    {
      area: 'People',
      title: 'Cooks leave, shifts clash and the late-night crew is hard to cover',
      scene:
        'Dinner peak runs until midnight. A cook quits without notice. The helper who knows the tandoor is on leave. The roster is a message in a group, and the late shift pays overtime on the fly.',
      cost:
        'A short-staffed peak means late orders and cancellations, and replacing people mid-month costs training time.',
      fix:
        'Shifts, attendance and station skills sit on each person’s record. Verity shows who can cover which station and which hours are short, and a leave request is visible before it hurts.',
      screen: 'upkeep',
    },
    {
      area: 'Fixed costs',
      title: 'Rent, gas and power are fixed, and orders per day are not',
      scene:
        'The kitchen needs about 120 orders a day to cover its costs. Weekdays run at 85, weekends at 170. The owner sees the average and feels fine. In the slow hours the kitchen is paid for and idle.',
      cost:
        'Fixed rent, staff and utilities need a steady volume. Without the day-by-day shape, you cannot tell whether a quiet week is a seasonal dip or a ranking problem.',
      fix:
        'Orders per hour, per day and per brand are laid next to fixed costs. Verity shows the break-even number and the days and hours below it, so you can test a lunch-only brand or a slot offer on facts.',
      screen: 'owner',
    },
    {
      area: 'Expansion',
      title: 'A second kitchen, and everything is counted twice',
      scene:
        'A new hub opens in another part of the city to reach new pin codes. Its stock, staff and orders are tracked in a copy of the first kitchen’s sheet. One brand does well in one area and flops in the other.',
      cost:
        'Hubs that are not compared fairly stay open long after they should have been fixed or closed, and money sinks into them quietly.',
      fix:
        'Each kitchen is a location in one system. Orders, food cost, refunds, delay and contribution are side by side, and a stock transfer between kitchens is recorded as one movement.',
      screen: 'owner',
    },
    {
      area: 'Compliance',
      title: 'Licence number, hygiene records and listing rules',
      scene:
        'Your FSSAI details must be correct on every platform listing. The renewal or modification is a task you remember when the platform sends a notice. Fridge temperatures, pest control visits and staff health checks are on loose sheets.',
      cost:
        'Platforms are prohibited from listing sellers without a valid licence or registration. A lapse can take your brands offline, and with them all of your orders.',
      fix:
        'Licences, certificates and pest-control visits are records with dates and owners. Daily hygiene checks are tasks signed off in the kitchen. Verity raises each item before it lapses and keeps the record ready.',
      screen: 'upkeep',
      source: { name: 'Lexplosion, FSSAI advisory for e-commerce food businesses, 2024', url: 'https://lexplosion.in/fssai-issues-advisory-for-e-commerce-fbos-to-strengthen-food-safety-ecosystem-prohibits-unregistered-sellers-on-e-commerce-food-platforms/' },
    },
    {
      area: 'Owner',
      title: 'The owner is also the head cook, the buyer and the accountant',
      scene:
        'You taste the gravy, check the app, place the vegetable order and read the payout. When you step away, ratings, stock and numbers all slide.',
      cost:
        'The business cannot grow past what you can personally carry, and an owner who is tired makes costly decisions.',
      fix:
        'Each morning Verity lists what needs a decision: an ingredient to order, a brand below its margin floor, a payout difference, a licence due. Each item has an owner, so a manager can run the list.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The figures behind the squeeze.',
  factsLede: 'From published sources, with the source named under each. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '20 to 30%',
      text: 'is the range in which delivery platform commissions often fall, according to a trade publication on why cloud kitchens struggle.',
      source: { name: 'Restaurant India, Why Most Cloud Kitchens Fail in India', year: '2026', url: 'https://www.restaurantindia.in/article/why-most-cloud-kitchens-fail-in-india.16335' },
    },
    {
      figure: '₹150 to ₹500',
      text: 'is the industry estimate of what a cloud kitchen can spend to win a single new customer, which can cost up to five times more than keeping one.',
      source: { name: 'Restaurant India, Why Most Cloud Kitchens Fail in India', year: '2026', url: 'https://www.restaurantindia.in/article/why-most-cloud-kitchens-fail-in-india.16335' },
    },
    {
      figure: '10 to 28%',
      text: 'is the range reported for Zomato restaurant commissions in September 2025, plus payment gateway fees and taxes, as parent Eternal talked to stakeholders about lowering commission.',
      source: { name: 'Verdict Foodservice via Yahoo Finance', year: '2025', url: 'https://finance.yahoo.com/news/eternal-explores-changes-zomato-commission-114442407.html' },
    },
    {
      figure: 'No licence, no listing',
      text: 'is the effect of an FSSAI advisory that prohibits e-commerce food platforms from listing sellers without a valid licence or registration.',
      source: { name: 'Lexplosion on the FSSAI advisory', year: '2024', url: 'https://lexplosion.in/fssai-issues-advisory-for-e-commerce-fbos-to-strengthen-food-safety-ecosystem-prohibits-unregistered-sellers-on-e-commerce-food-platforms/' },
    },
  ],
  factsNote:
    'Commission rates vary by city, brand and contract, and different sources give different ranges. The acquisition cost is an industry estimate, not a measured average. The licence point is a law-firm style summary of an advisory, so confirm it on the FSSAI site.',

  screensHeading: 'The screens a cloud kitchen would use every day.',
  screensLede: 'Seven views, each built for one job, set up in your own brands and channels.',
  screens: [
    {
      id: 'owner',
      title: 'Kitchen / Today',
      meta: 'Hub: HSR Layout, 5 brands',
      heading: 'The owner’s morning view',
      caption:
        'Orders, contribution after every deduction, delays, refunds and what needs a decision, on one screen. It replaces the platform dashboards you flip between each morning.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Orders yesterday', value: '168', note: 'break-even is 120' },
            { label: 'Revenue', value: '₹71,200', note: 'before deductions' },
            { label: 'Left after all costs', value: '₹9,840', note: '13.8% of revenue' },
            { label: 'Refunds', value: '₹2,150', note: '9 orders' },
          ],
        },
        { type: 'title', text: 'Orders per hour against break-even pace' },
        {
          type: 'bars',
          items: [
            { label: '12 to 3 pm', value: 62, display: '49 orders' },
            { label: '3 to 7 pm', value: 28, display: '22 orders', tone: 'muted' },
            { label: '7 to 10 pm', value: 100, display: '79 orders' },
            { label: '10 pm to 12', value: 22, display: '18 orders', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Pizza brand fell below its margin floor after cheese went up 11%. Price on the apps is unchanged.', action: 'Review price' },
        {
          type: 'list',
          items: [
            { name: 'Weekly payout differs by ₹11,700', meta: 'Cancelled orders and ad charges to be matched', tag: ['Match', 'flag', 'Matched', 'ok'] },
            { name: 'Paneer low for tonight', meta: 'Rolls and bowls need 14 kg, 9 kg on hand', tag: ['Order', 'late', 'Ordered', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'channels',
      title: 'Channels and payouts',
      meta: 'Last 7 days',
      heading: 'What each channel really leaves, and whether the payout is right',
      caption:
        'For each channel, revenue, deductions, food and packaging, and what is left. Below it, the platform’s weekly statement is matched to your orders, with differences explained.',
      blocks: [
        {
          type: 'table',
          cols: ['Channel', 'Orders', 'Revenue', 'Deductions', 'Left'],
          rows: [
            ['App A', '612', '₹2,48,400', '₹71,500', '₹32,100'],
            ['App B', '288', '₹1,13,900', '₹36,200', '₹12,300'],
            ['Own WhatsApp orders', '74', '₹31,800', '₹1,600', '₹10,900'],
          ],
        },
        {
          type: 'table',
          cols: ['Payout line', 'Orders', 'Amount', 'Matched', 'Status'],
          rows: [
            ['Cancelled by platform', '14', '₹5,300', 'Yes', ['Dispute', 'flag', 'Raised', 'ok']],
            ['Ad and visibility charges', '-', '₹4,200', 'Yes', ['Expected', 'ok']],
            ['Refunds charged to kitchen', '9', '₹2,150', 'Partly', ['Check', 'late', 'Matched', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'brands',
      title: 'Brands and dishes',
      meta: 'Cost at latest rates',
      heading: 'Which brands and dishes earn, at today’s costs',
      caption:
        'Each brand and dish with sales, cost, packaging and what is left. A change in the paneer, cheese or chicken rate shows up in the dishes that use it.',
      blocks: [
        {
          type: 'table',
          cols: ['Brand', 'Orders', 'Food cost', 'Packaging', 'Left per order'],
          rows: [
            ['Dum biryani', '312', '33%', '8%', ['₹118', 'ok']],
            ['Pizza', '248', '39%', '7%', ['₹64', 'late', 'Repriced', 'ok']],
            ['Rolls', '221', '31%', '9%', ['₹97', 'ok']],
            ['Dessert jars', '58', '27%', '12%', ['₹131', 'ok']],
            ['Healthy bowls', '135', '36%', '8%', ['₹72', 'flag']],
          ],
        },
        { type: 'title', text: 'Portion check: paneer in rolls, grams per roll' },
        {
          type: 'bars',
          items: [
            { label: 'Recipe', value: 53, display: '80 g' },
            { label: 'Last week', value: 63, display: '95 g', tone: 'muted' },
            { label: 'Night shift', value: 73, display: '110 g', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'kitchen',
      title: 'Live kitchen',
      meta: 'Tonight',
      heading: 'Orders in flight, prep time and the stations that are slipping',
      caption:
        'Orders by stage with the time each has been waiting, and prep delay by brand and station. It is the board the manager looks at when the app starts to show “delayed”.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Accepted',
              cards: [
                { title: '2 dum biryani, 1 raita', meta: 'App A, waiting 3 min', tag: ['On time', 'ok'] },
                { title: 'Margherita and garlic bread', meta: 'App B, waiting 9 min', tag: ['Late soon', 'flag', 'Started', 'ok'] },
              ],
            },
            {
              name: 'Being prepared',
              cards: [
                { title: '3 paneer rolls', meta: 'App A, 11 min, station 2', tag: ['Late', 'late', 'Ready', 'ok'] },
                { title: 'Bowl: grilled chicken', meta: 'Own order, 6 min', tag: ['On time', 'ok'] },
              ],
            },
            {
              name: 'Ready for rider',
              cards: [
                { title: '4 mixed, family pack', meta: 'Rider waiting 7 min', tag: ['Handover', 'flag', 'Collected', 'ok'] },
              ],
            },
          ],
        },
        { type: 'alert', text: 'Station 2 (rolls and tandoor) averaged 4 minutes over promised prep time between 8 and 9 pm.', action: 'Add a hand' },
      ],
    },
    {
      id: 'issues',
      title: 'Complaints and repeat customers',
      meta: 'This week',
      heading: 'Why orders go wrong, and who has stopped ordering',
      caption:
        'Refunds and complaints grouped by cause, station and brand. Beside them, repeat customers you can reach who have gone quiet.',
      blocks: [
        {
          type: 'bars',
          items: [
            { label: 'Wrong or missing item', value: 40, display: '14 orders' },
            { label: 'Leak or spill', value: 26, display: '9 orders' },
            { label: 'Late delivery', value: 20, display: '7 orders', tone: 'muted' },
            { label: 'Taste or portion', value: 14, display: '5 orders', tone: 'muted' },
          ],
        },
        {
          type: 'table',
          cols: ['Customer', 'Orders, last 90 d', 'Last order', 'Channel', 'Status'],
          rows: [
            ['Sharma family', '14', '2 Oct', 'Own', ['Reach out', 'late', 'Ordered', 'ok']],
            ['Rhea K.', '9', '30 Sep', 'Own', ['Reach out', 'flag']],
            ['Office, Tech Park 4', '11', '28 Sep', 'Own', ['Reach out', 'flag', 'Replied', 'info']],
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Ingredients and packaging',
      meta: 'Tonight and the next 3 days',
      heading: 'Stock against the orders you usually get',
      caption:
        'What is in the store, the usual use per day, packaging counts and which dishes are at risk of running out tonight.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'On hand', 'Needed 3 days', 'Supplier', 'Status'],
          rows: [
            ['Paneer (kg)', '9', '42', 'Daily Dairy', ['Short', 'late', 'Ordered', 'ok']],
            ['Chicken (kg)', '31', '60', 'Fresh Meats', ['Reorder', 'flag']],
            ['Biryani container 750 ml', '410', '900', 'PackRight', ['Short', 'late', 'Ordered', 'ok']],
            ['Raita cup 100 ml', '1,200', '600', 'PackRight', ['OK', 'ok']],
            ['Pizza box 9 in', '380', '480', 'PackRight', ['Reorder soon', 'flag']],
          ],
        },
        { type: 'alert', text: 'Paneer will finish around 8:15 pm. Rolls and bowls are affected. Switch them off in the apps when it runs out.', action: 'Assign' },
      ],
    },
    {
      id: 'upkeep',
      title: 'Team, licences and hygiene',
      meta: 'Next 30 days',
      heading: 'Station cover, licence dates and the daily hygiene checks',
      caption:
        'Who is cleared for which station, which hours are short, which licence or certificate is due, and the daily checks.',
      blocks: [
        {
          type: 'table',
          cols: ['Person', 'Role', 'Tandoor', 'Rolls', 'Cover tonight'],
          rows: [
            ['Ramesh', 'Head cook', ['Cleared', 'ok'], ['Cleared', 'ok'], 'Yes'],
            ['Kiran', 'Cook', ['No', 'muted'], ['Cleared', 'ok'], 'Yes'],
            ['Mohan', 'Helper', ['In training', 'info'], ['No', 'muted'], ['On leave', 'late', 'Swapped', 'ok']],
          ],
        },
        {
          type: 'table',
          cols: ['Item', 'Last done', 'Due', 'Owner', 'Status'],
          rows: [
            ['FSSAI licence details on apps', 'Checked Aug', 'Check', 'Manager', ['Review', 'flag', 'Checked', 'ok']],
            ['Pest control visit', '12 Sep', '12 Oct', 'Manager', ['Overdue', 'late', 'Booked', 'ok']],
            ['Fridge temperature, evening', '-', 'Today', 'Closing cook', ['Due', 'flag', 'Done', 'ok']],
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Saturday, before and after.',
  dayLede: 'The orders are the same. What changes is that each order is counted all the way to the payout.',
  day: [
    {
      time: '10:30 am',
      before: 'You estimate prep from last weekend and buy what seems right. Packaging is checked by eye.',
      after: 'Prep and purchase quantities follow the usual Saturday volume by brand, and the container shortfall was ordered on Thursday.',
    },
    {
      time: '1:00 pm',
      before: 'The lunch rush starts. You learn about a missing ingredient when an order is cancelled.',
      after: 'Verity warned an hour ago that paneer was low. The manager switched the affected dishes off before orders came.',
    },
    {
      time: '4:00 pm',
      before: 'You check three dashboards to see how the day is going and cannot compare them.',
      after: 'One screen shows orders and contribution against break-even, with the slow brand marked.',
    },
    {
      time: '8:30 pm',
      before: 'Rolls take too long, riders wait and the app marks you delayed. You find out afterwards.',
      after: 'The live board shows station 2 slipping at 8:05. A second cook is moved to rolls.',
    },
    {
      time: '11:30 pm',
      before: 'Closing means counting what is left and guessing what to buy.',
      after: 'The day closes with stock deducted, refunds logged by cause, and tomorrow’s purchase drafted.',
    },
    {
      time: 'Weekly payout',
      before: 'The statement arrives. The amount is lower than expected and there is no time to dig.',
      after: 'The statement is matched to orders. The 14 cancelled ones are disputed with evidence.',
    },
  ],

  approach: {
    heading: 'We set it up with you over four weeks.',
    lede:
      'You do not get a login and a manual. We watch a real dinner peak, build Verity around your brands and channels, bring your data in, and stay with you after launch.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a dinner peak in your kitchen. Follow an order from the app tablet to the rider, see how packaging and stock are handled, and read a few weeks of platform statements.',
        you: 'Two to three hours of yours and your kitchen head’s. Platform statements, recent supplier bills and your menu per brand.',
        get: 'A written map of your kitchen: brands, dishes and recipes, channels and deductions, stock and packaging, and the leaks we will close first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your brands, recipes, pack lists, commission and discount rules per channel, reorder points, stations and shifts, and agree how orders and payout statements reach Verity.',
        you: 'Review recipes and pack lists with your head cook. Confirm the deduction rules on each platform.',
        get: 'A working Verity with your real brands, channels and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in dishes, suppliers, stock and past statements from your sheets. Train the cooks, the packing counter and the manager during live service.',
        you: 'An opening stock count and a few past payout statements. One hour with each role.',
        get: 'Your brands, stock and statements inside Verity, and a crew that has used it during a peak.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Read the first payouts and margins with you, tune thresholds, and set up new brands or kitchens as you add them.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that grows with your brand list and hubs, with a named person responsible for it.',
      },
    ],
    bring: [
      'Your menu for each brand with prices as listed on the apps',
      'Platform settlement statements for the last two to three weeks',
      'Recipes or portion notes, even rough ones',
      'Supplier list with recent rates and packaging items',
      'FSSAI details and the roster pattern of your crew',
    ],
    time: 'About 8 to 12 hours of your own time across the four weeks, mostly in week 1. Your head cook and manager need a few more.',
    after: 'Nobody is hired to run Verity. Orders, prep and packing are recorded as part of work the kitchen already does, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your kitchen a question.',
    lede:
      'Verity AI reads your own orders, recipes, stock and payout records. Ask in plain words, then turn the answer into a task for the right person.',
    examples: [
      {
        q: 'Which brand earns the least per order this month?',
        a: 'Healthy bowls, at ₹72 per order after food, packaging and deductions. Pizza was lower until the repricing on 8 October.',
        rows: [['Dessert jars', '₹131'], ['Dum biryani', '₹118'], ['Rolls', '₹97'], ['Healthy bowls', '₹72']],
        action: 'Create a repricing task for the bowls menu',
      },
      {
        q: 'Why was last week’s payout lower than our order total?',
        a: '₹11,700 lower. ₹5,300 is 14 platform cancellations, ₹4,200 is ad charges and ₹2,150 is refunds charged to the kitchen. The cancellations look disputable.',
        rows: [['Cancellations', '₹5,300'], ['Ad charges', '₹4,200'], ['Refunds', '₹2,150']],
        action: 'Raise a dispute with the orders attached',
      },
      {
        q: 'Which dishes should we switch off if paneer runs out tonight?',
        a: 'Paneer rolls, paneer bowl and palak paneer. Together they were 19 percent of orders last Saturday.',
        action: 'Assign the manager to switch them off in the apps',
      },
    ],
  },

  automationHeading: 'The things a busy kitchen forgets.',
  automationLede: 'Set once, then they run from your records. Your team does the work in the apps and with suppliers; Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An order is delivered or cancelled',
      then: ['Stock and packaging deducted', 'Contribution after deductions calculated', 'Cancellation reason recorded against the brand'],
    },
    {
      when: 'An ingredient is about to run out before service ends',
      then: ['Affected dishes listed', 'Manager asked to switch them off in the apps', 'Switch-on task created when stock returns'],
    },
    {
      when: 'A weekly payout statement is added',
      then: ['Lines matched to orders', 'Differences listed by reason', 'Dispute task with the orders attached'],
    },
    {
      when: 'A supplier rate changes past your limit',
      then: ['Dishes using it are re-costed', 'Margin drop shown to the owner', 'Reprice decision recorded'],
    },
    {
      when: 'Prep time runs over for a brand for three orders in a row',
      then: ['Flagged on the live board', 'Task to the station lead', 'Delay reason recorded'],
    },
    {
      when: 'A licence, certificate or pest-control visit is within 30 days',
      then: ['Task to its owner', 'Listed on the compliance view', 'Closed with the new date'],
    },
  ],

  rules: {
    heading: 'The rules a cloud kitchen has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant and an inspector can find them.',
    items: [
      {
        name: 'FSSAI registration or licence',
        what: 'A cloud kitchen is a food business and needs an FSSAI registration or licence for its category. From 1 April 2026 basic registration generally applies up to ₹1.5 crore of turnover, and licences generally no longer need renewal, but changes in address or category must be updated. Check your band.',
        how: 'The registration is stored with its number, category and dates, and any change in address, brands or capacity becomes a task.',
        source: { name: 'SetIndiaBiz summary of FSSAI 2026 changes', url: 'https://www.setindiabiz.com/blog/fssai-2026-reforms' },
      },
      {
        name: 'Listing on delivery platforms',
        what: 'FSSAI has advised that e-commerce food platforms should not list sellers without a valid licence or registration, and encourages displaying licence numbers and hygiene ratings. A lapsed or wrong licence can therefore take a brand offline.',
        how: 'Each brand’s listing is linked to the licence record, so a date approaching or a mismatch of details is visible before the platform notices.',
        source: { name: 'Lexplosion on the FSSAI advisory', url: 'https://lexplosion.in/fssai-issues-advisory-for-e-commerce-fbos-to-strengthen-food-safety-ecosystem-prohibits-unregistered-sellers-on-e-commerce-food-platforms/' },
      },
      {
        name: 'Hygiene records and staff health',
        what: 'Licensed kitchens are generally expected to keep records of cleaning, temperatures, pest control and staff health, and to have a trained food safety supervisor depending on the licence category.',
        how: 'Daily checks are tasks with an owner, and training and health certificates sit on each person’s record with expiry dates.',
      },
      {
        name: 'Local trade, fire and gas safety',
        what: 'A commercial kitchen generally needs a trade licence, and often fire safety and gas storage compliance, with rules that differ by city, building and landlord.',
        how: 'Each approval is a record with its date and owner, and inspection visits and extinguisher checks are scheduled tasks.',
      },
    ],
    note: 'Rules change and differ by city and state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone reads the same records, through their own window.',
  rolesLede: 'A cook does not need to see platform deductions. The packer does not need to see margins. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the kitchen making money, and on which brands?', sees: 'Contribution by brand, channel and hour, refunds, payout differences and each kitchen side by side.' },
    { role: 'Kitchen manager', question: 'What will break tonight?', sees: 'Live orders, prep delays, ingredients about to run out, packaging counts and the roster.' },
    { role: 'Head cook', question: 'What do I prepare and in what quantity?', sees: 'Brand-wise prep plan, recipes and weights, today’s stock and portion variance.' },
    { role: 'Packing counter', question: 'What goes in this order?', sees: 'Order contents, the pack list for each dish and a check list before handover.' },
    { role: 'Accountant', question: 'What was earned, deducted and paid?', sees: 'Orders and deductions by channel, payout matches, supplier invoices and refunds.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'The delivery apps that bring your orders. We agree during setup how orders and statements reach Verity.',
      'Your order printer or billing screen, if you use one.',
      'WhatsApp for suppliers, riders and your own repeat customers. Staff send the messages.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Take customer orders or run a branded ordering page.',
      'Switch dishes on or off in the apps. Verity tells the manager when to.',
      'Send messages to customers or suppliers on its own.',
      'File your GST returns or run your payroll.',
    ],
    migration:
      'We bring in your dishes, suppliers, packaging list and past statements from the sheets you use now, in stages, so the kitchen keeps cooking while it happens.',
  },

  faqHeading: 'Questions cloud kitchen owners ask.',
  faqs: [
    [
      'Can Verity connect to Swiggy or Zomato directly?',
      'We agree with you during setup how orders and settlement statements reach Verity, for example by an export you already download. We do not promise a particular live link. What matters is that every order and every payout line ends up recorded.',
    ],
    [
      'Will my cooks have time to record anything?',
      'They record very little. Orders and stock deductions come from the order itself. Cooks only log a waste or a short ingredient when something happens, in a couple of taps, and we train them during live service.',
    ],
    [
      'Can it tell me which of my brands to drop?',
      'It shows what each brand leaves per order, after food, packaging and deductions, and how much kitchen time it takes. The decision stays with you, but you will make it with numbers rather than feel.',
    ],
    [
      'Does it switch items off on the app?',
      'No. It warns when an ingredient is about to run out, lists the dishes affected and assigns the manager to switch them off in the app. It then reminds them to switch them on again.',
    ],
    [
      'I have only one brand and one small kitchen. Is this too big?',
      'A single-brand kitchen has the same commission and refund problem. We set up only what you need, in the same four weeks, and add brands later.',
    ],
    [
      'Can I see two kitchens together?',
      'Yes. Each kitchen is a location in one system, so orders, food cost, delay and contribution can be compared side by side, and a stock transfer is recorded as a single movement.',
    ],
    [
      'Who can see my margins and recipes?',
      'Only the people you allow. Recipes and costs can be limited to you and your head cook, and every change is recorded with who made it and when.',
    ],
    [
      'How quickly will I see something useful?',
      'Contribution per channel and payout matching need only your statements and menu, so we aim to have them first. Brand margins and portion drift become reliable after a few weeks of recorded service.',
    ],
    [
      'What does it cost?',
      'It depends on the number of kitchens, brands and people. Message us and we will give you a clear number after a short conversation about how your kitchen runs.',
    ],
  ],

  related: ['restaurants', 'fast-food-businesses', 'catering-businesses', 'cafes', 'bakeries', 'ecommerce-businesses'],

  ctaHeading: 'Start with one week of payouts.',
  ctaLede:
    'Tell us how your kitchen runs and we will show you what each channel really leaves, which brands earn, and where the deductions go, using your own numbers.',
};
