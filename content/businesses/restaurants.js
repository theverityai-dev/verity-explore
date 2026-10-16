export default {
  schema: 2,
  slug: 'restaurants',
  status: 'published',
  plural: 'restaurants',
  subject: 'restaurant',
  checked: '15 October 2026',

  seo: {
    title: 'Restaurant management software: food cost, waste, stock | Verity',
    description:
      'The 14 problems that eat a restaurant’s margin, what each costs, and the Verity screens that fix them: food cost, waste, delivery commission, supplier prices, hygiene records.',
    keywords: [
      'restaurant management software India',
      'restaurant food cost control',
      'restaurant inventory and wastage tracking',
      'multi-outlet restaurant software',
      'restaurant supplier price tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for restaurants',
    headline: 'Sales look healthy. The profit does not. Verity shows you where it went.',
    lede:
      'A restaurant can be full every night and still earn almost nothing, because the money leaks in places nobody measures: ingredients that cost more than the menu assumes, food that is binned, and delivery commission. Verity connects stock, recipes, suppliers and sales so you can see each leak.',
    oneLine:
      'One system that shows what every dish should cost, what it actually cost, and where the difference went, outlet by outlet and day by day.',
    note: 'Built for a kitchen that has no time for data entry. Stock moves are recorded at the points where they already happen.',
    screen: 'owner',
    screenNote: 'menu, outlets, suppliers and channels',
  },

  today: {
    heading: 'Most restaurants know their sales and guess everything else.',
    paragraphs: [
      'Sales are easy to see: the billing screen tells you by evening. Costs are not. What the kitchen used, what was thrown away, what a supplier charged this week compared with last, and what a Zomato order really leaves you. Those numbers arrive at month end from an accountant, long after they could have changed a decision.',
      'The people who know the truth are in the kitchen and the store room: the head chef who remembers the paneer price jumped, the store keeper who knows the tomatoes were over-ordered. That knowledge is not written anywhere the owner can see it.',
      'Margins in this business are thin. Published estimates put typical net margin in single or low double digits, so a few percentage points of waste or price drift is the difference between a good month and a loss.',
    ],
    stack: ['Billing software', 'Supplier invoices on paper', 'Stock register or Excel', 'WhatsApp with the chef and store', 'Aggregator dashboards'],
    stackNote: 'Each shows one piece. Nobody joins them, so the real cost of a dish is never calculated.',
  },

  painsHeading: 'Where a restaurant actually loses money.',
  painsLede:
    'These are the situations owners and kitchen heads describe. For each: what it looks like, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Kitchen',
      title: 'Food cost creeps up and nobody can say why',
      scene:
        'Your menu was priced assuming a 32 percent food cost. Three months on, the accountant says it is 38. Nobody knows which dishes, which outlet or which week.',
      cost:
        'Example arithmetic: on ₹20 lakh monthly sales, six extra points of food cost is ₹1.2 lakh a month, ₹14 lakh a year, straight off profit.',
      fix:
        'Each dish has a recipe: ingredients and quantities. Verity compares what sales say should have been used with what stock says was used, dish by dish, and shows the gap as a number every day.',
      screen: 'variance',
    },
    {
      area: 'Kitchen',
      title: 'Waste from prep, spoilage and plates',
      scene:
        'Over-prepped gravy is dumped at close. Greens spoil in the walk-in. Half-eaten portions come back. Waste goes in the bin and in nobody’s notebook.',
      cost:
        'One published estimate puts waste at 8 to 15 percent of food purchases in Indian restaurants. On ₹6 lakh of monthly purchases, that is ₹48,000 to ₹90,000 a month.',
      fix:
        'Waste is logged in seconds with a reason (prep, spoilage, returned, staff meal). Verity totals it by reason, outlet and item, so you fix prep quantities and ordering where the waste actually comes from.',
      screen: 'variance',
      source: { name: 'Petpooja, food waste cost calculator', url: 'https://blog.petpooja.com/free-tools/food-waste-cost-calculator-free/' },
    },
    {
      area: 'Kitchen',
      title: 'Over-ordering one day, running out mid-service the next',
      scene:
        'The store keeper orders by eye. Friday’s paneer runs out at 9 pm, while a crate of capsicum wilts in the cold room.',
      cost:
        'A dish taken off the menu on your busiest night, guests who do not come back, and cash locked up in stock that spoils.',
      fix:
        'Each item has a par level and a reorder point based on how fast it is actually used. Verity checks what is needed for the days ahead and drafts the order, so ordering follows use rather than instinct.',
      screen: 'stock',
    },
    {
      area: 'Suppliers',
      title: 'Supplier prices move and you find out at month end',
      scene:
        'Onion, oil and paneer prices swing from week to week. The vendor’s rate quietly rose twice. The menu price did not.',
      cost:
        'Every unnoticed price rise is margin lost on every plate until someone checks the invoices, usually weeks later.',
      fix:
        'Every purchase records the rate. Verity shows price movement per item and per supplier, flags rises beyond a limit you set, and shows which dishes are hit so you can reprice or switch.',
      screen: 'suppliers',
    },
    {
      area: 'Suppliers',
      title: 'Invoices do not match what was delivered',
      scene:
        'The delivery had 20 kg of chicken, the invoice says 24. The vendor’s statement at month end has three bills nobody remembers receiving.',
      cost:
        'Paying for goods never delivered, disputes with suppliers, and hours of reconciliation by your accountant.',
      fix:
        'Deliveries are received against the order with the actual quantity. Verity compares order, receipt and invoice and flags any mismatch before it is paid.',
      screen: 'suppliers',
    },
    {
      area: 'Kitchen',
      title: 'Stock disappears and nobody is accountable',
      scene:
        'Oil, dry fruits and packaged items go faster than sales explain. Stock is counted rarely, and by then nobody can say when it went.',
      cost:
        'Pilferage and unrecorded “staff use” are a quiet cost, and an owner cannot prove or disprove anything without records.',
      fix:
        'Every stock issue from the store to the kitchen is recorded with who took it. Regular counts compare against the book, and a mismatch is a flagged line with a name and a date range.',
      screen: 'variance',
    },
    {
      area: 'Money',
      title: 'Delivery apps take a quarter of each order and you cannot see what is left',
      scene:
        'A ₹500 order on an aggregator app leaves far less after commission, GST on the commission and the discount you funded. The dashboard shows revenue, not profit.',
      cost:
        'One published example puts the commission around 25 percent of order value. If your delivery share keeps growing, you may be growing sales and shrinking profit.',
      fix:
        'Sales are tagged by channel: dine-in, takeaway, each delivery app. Verity applies commission and discount to show contribution per channel, so you can see where an order is worth taking.',
      screen: 'channels',
      source: { name: 'Restaurant India, on Zomato commission', url: 'https://www.restaurantindia.in/article/how-zomato-commission-impacts-restaurant-profit-margin-the-hidden-costs-every-restaurant-owner-must.16307' },
    },
    {
      area: 'Money',
      title: 'Menu prices are set from old costs',
      scene:
        'A signature dish sells well but its ingredients have gone up 20 percent since you priced it. The best seller may be your lowest-margin dish.',
      cost:
        'Popular dishes that lose money, and no basis for deciding what to push, reprice or remove.',
      fix:
        'Because recipes and live purchase rates are linked, each dish shows its current cost and margin. You see which dishes earn and which only look busy.',
      screen: 'channels',
    },
    {
      area: 'Money',
      title: 'Discounts, complimentary items and voids are invisible',
      scene:
        'Staff void a bill, comp a dessert or give “manager discounts”. Each one is small. Together they are a line on your P&L nobody owns.',
      cost:
        'Margin loss and an open door to misuse, with no way to see patterns by person or shift.',
      fix:
        'Discounts and comps above a limit need an approval with a reason. Verity totals them by person, shift and outlet so patterns show up.',
      screen: 'owner',
    },
    {
      area: 'Money',
      title: 'Day-end cash does not tie to sales',
      scene:
        'Closing cash, card and UPI are counted against the billing report and are off by a few hundred. Nobody can say if it is an error, a missing bill or something else.',
      cost:
        'Small daily gaps add up, and the owner stops trusting the numbers.',
      fix:
        'The day’s sales by payment mode are compared with what was collected. A mismatch is flagged with the shift and the amount, and the closing manager records the explanation.',
      screen: 'owner',
    },
    {
      area: 'People',
      title: 'Shifts, attendance and training live on WhatsApp',
      scene:
        'The roster is a photo in a group. A cook calls in sick at 5 pm. Nobody knows who has been trained on the new fryer or whose food handler certificate has lapsed.',
      cost:
        'Understaffed services, overtime to cover gaps, and compliance exposure when an inspector asks for training records.',
      fix:
        'Shifts and attendance are recorded per person and outlet. Training and certificates are kept on each staff record with expiry dates, and Verity flags a lapse before it matters.',
      screen: 'checks',
    },
    {
      area: 'Compliance',
      title: 'Hygiene logs and licences are chased only before an inspection',
      scene:
        'Temperature logs, pest-control visits and water tests are done on paper, if at all. The licence renewal date is in someone’s phone calendar.',
      cost:
        'Fines, a suspended licence in the worst case, and a scramble whenever an inspector walks in.',
      fix:
        'Daily and weekly checks are tasks with an owner and a due time, signed off in the kitchen. Licence and certificate expiries are tracked, and the record is ready when asked for.',
      screen: 'checks',
    },
    {
      area: 'Sales',
      title: 'Party and event enquiries get lost',
      scene:
        'A 40-person birthday enquiry arrives on WhatsApp at 11 pm. By the time someone replies, the guest has booked elsewhere. Nobody knows which enquiries are still open.',
      cost:
        'Large-ticket bookings are some of the most profitable orders a restaurant gets, and they are the ones lost to slow follow-up.',
      fix:
        'Each enquiry is a record with an owner, a date, a quote and a next step. Verity lists the ones with no reply and nudges the person responsible.',
      screen: 'enquiries',
    },
    {
      area: 'Owner',
      title: 'Several outlets, no fair comparison',
      scene:
        'Each outlet reports differently. One sends a photo of the day’s sheet, another sends a message. A central kitchen supplies two outlets and nobody can see what it transfers.',
      cost:
        'You cannot tell which outlet is actually performing, or where costs are running out of control, until it is late.',
      fix:
        'Outlets and the central kitchen are locations in one system with the same measures: sales, food cost, waste, stock and staff. Transfers between them are recorded.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these leaks worth fixing.',
  factsLede: 'From published sources, named under each figure. Your own numbers will differ, and Verity’s first job is to show you yours.',
  facts: [
    {
      figure: '5 to 12%',
      text: 'typical net margin for a restaurant, with food cost above 35%, rent above 15% or labour above 25% of revenue named as the main profit killers.',
      source: { name: 'DineOpen, restaurant profit margin guide', url: 'https://dineopen.com/blog/restaurant-profit-margin-increase-guide.html' },
    },
    {
      figure: '8 to 15%',
      text: 'of food purchases are typically wasted in Indian restaurants, by one estimate.',
      source: { name: 'Petpooja, food waste cost calculator', url: 'https://blog.petpooja.com/free-tools/food-waste-cost-calculator-free/' },
    },
    {
      figure: '~25%',
      text: 'commission on an aggregator order, used as the worked example in an article on how it affects restaurant profit. The rate varies by restaurant.',
      source: { name: 'Restaurant India', year: '2026', url: 'https://www.restaurantindia.in/article/how-zomato-commission-impacts-restaurant-profit-margin-the-hidden-costs-every-restaurant-owner-must.16307' },
    },
    {
      figure: '30 to 35%',
      text: 'of revenue goes to raw food across food service formats, a long-quoted industry figure.',
      source: { name: 'Restaurant India', year: '2013', url: 'https://www.restaurantindia.in/article/issues-and-challenges-by-restaurant-industry.6121' },
    },
  ],
  factsNote:
    'Several figures come from software vendors, one is from 2013, and none is a guarantee of what your restaurant will see. They show the size of the leaks.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each for one job. Dishes, outlets, suppliers and channels are set up in your own terms.',
  screens: [
    {
      id: 'owner',
      title: 'Restaurant / Today',
      meta: 'All outlets',
      heading: 'The owner’s view of yesterday',
      caption:
        'Sales, food cost, waste and delivery share for each outlet, with the exceptions that need you listed beneath. It replaces the evening WhatsApp reports and the month-end surprise.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales yesterday', value: '₹1.82 L', note: '3 outlets' },
            { label: 'Food cost', value: '36.4%', note: 'target 32%' },
            { label: 'Waste', value: '₹9,400', note: '5.1% of purchases' },
            { label: 'Delivery share', value: '41%', note: 'of orders' },
          ],
        },
        { type: 'title', text: 'Food cost by outlet, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Koramangala', value: 31, display: '31.8%', tone: 'muted' },
            { label: 'Indiranagar', value: 36, display: '36.2%' },
            { label: 'HSR Layout', value: 41, display: '40.9%' },
          ],
        },
        { type: 'alert', text: 'Cash and card do not tie at HSR by ₹610. Closing manager has not explained.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Discounts above limit', meta: '3 approvals pending, ₹2,800 in total', tag: ['Review', 'flag', 'Cleared', 'ok'] },
            { name: 'Paneer price up 11%', meta: 'Affects 9 dishes. Reprice or switch supplier?', tag: ['Decide', 'flag'] },
          ],
        },
      ],
    },
    {
      id: 'variance',
      title: 'Recipe vs reality',
      meta: 'Yesterday, Indiranagar',
      heading: 'What should have been used, and what was',
      caption:
        'Sales say how much of each ingredient the dishes should have consumed. Stock says how much actually went. The difference is the waste, over-portioning or missing stock you are paying for.',
      blocks: [
        {
          type: 'table',
          cols: ['Ingredient', 'Should use', 'Actually used', 'Gap', 'Status'],
          rows: [
            ['Paneer', '14.0 kg', '17.5 kg', '+25%', ['Investigate', 'late', 'Logged', 'ok']],
            ['Chicken', '22.0 kg', '23.1 kg', '+5%', ['Watch', 'flag']],
            ['Basmati rice', '30.0 kg', '30.4 kg', '+1%', ['OK', 'ok']],
            ['Refined oil', '18 L', '24 L', '+33%', ['Investigate', 'late']],
            ['Cream', '6.0 L', '6.1 L', '+2%', ['OK', 'ok']],
          ],
        },
        { type: 'alert', text: 'Waste logged yesterday: ₹3,100. Prep over-production 54%, spoilage 31%, returned plates 15%.', action: 'See reasons' },
      ],
    },
    {
      id: 'stock',
      title: 'Kitchen stock',
      meta: 'Central store',
      heading: 'Stock and orders that follow real use',
      caption:
        'What is in the store, how fast it is used, what the next three days need and what to order. The store keeper gets a drafted order to confirm instead of counting by eye.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'In stock', 'Use / day', 'Days left', 'Status'],
          rows: [
            ['Paneer', '8 kg', '14 kg', '0.6', ['Order now', 'late', 'Ordered', 'ok']],
            ['Tomato', '40 kg', '18 kg', '2.2', ['Reorder', 'flag']],
            ['Basmati rice', '120 kg', '30 kg', '4.0', ['OK', 'ok']],
            ['Refined oil', '34 L', '18 L', '1.9', ['Reorder', 'flag']],
            ['Takeaway boxes', '900', '240', '3.8', ['OK', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'channels',
      title: 'Profit by channel',
      meta: 'Last 30 days',
      heading: 'What each channel and each dish really earns',
      caption:
        'Sales by channel after commission and discounts, and the margin on the dishes you sell most. You see where growth is helping and where it is only adding volume.',
      blocks: [
        { type: 'title', text: 'Contribution margin by channel' },
        {
          type: 'bars',
          items: [
            { label: 'Dine-in', value: 62, display: '62%' },
            { label: 'Takeaway', value: 58, display: '58%' },
            { label: 'Zomato', value: 31, display: '31%', tone: 'muted' },
            { label: 'Swiggy', value: 28, display: '28%', tone: 'muted' },
          ],
        },
        {
          type: 'table',
          cols: ['Dish', 'Sold', 'Cost now', 'Margin', 'Status'],
          rows: [
            ['Butter chicken', '812', '₹118', '57%', ['OK', 'ok']],
            ['Paneer tikka', '640', '₹96', '41%', ['Price up', 'flag']],
            ['Veg biryani', '590', '₹54', '64%', ['OK', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'suppliers',
      title: 'Suppliers',
      meta: 'Prices and invoices',
      heading: 'Price movement and invoice checks',
      caption:
        'How each supplier’s rates have moved, which dishes that touches, and which invoices do not match what was ordered and received.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Supplier', 'Last month', 'Now', 'Change'],
          rows: [
            ['Paneer (kg)', 'Fresh Dairy Co.', '₹318', '₹353', ['+11%', 'flag']],
            ['Onion (kg)', 'City Mandi', '₹26', '₹33', ['+27%', 'late']],
            ['Refined oil (L)', 'Agro Traders', '₹128', '₹131', ['+2%', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Invoice 4471, City Mandi', meta: 'Ordered 40 kg, received 36 kg, billed 40 kg', tag: ['Mismatch', 'late', 'Credit asked', 'ok'] },
            { name: 'Invoice 0932, Fresh Dairy Co.', meta: 'Matches order and receipt', tag: ['Matched', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'checks',
      title: 'Kitchen checks and people',
      meta: 'Today, Koramangala',
      heading: 'Hygiene records and training that sign themselves off',
      caption:
        'Daily checks with an owner and a due time, plus licences and staff certificates with their expiry dates. When an inspector asks, the record exists.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Walk-in and freezer temperature logged', meta: '8:05 Ravi', done: true },
            { text: 'Pest-control visit recorded', meta: 'Done 3 Oct', done: true },
            { text: 'Water test report uploaded', meta: 'Due today' },
            { text: 'Food handler certificates current', meta: '2 expiring in 30 days' },
          ],
        },
        { type: 'alert', text: 'Fire safety certificate for HSR expires in 21 days.', action: 'Assign' },
      ],
    },
    {
      id: 'enquiries',
      title: 'Party enquiries',
      meta: 'This week',
      heading: 'No big booking left unanswered',
      caption:
        'Every party or corporate enquiry has an owner, a quote and a next step. Ones with no reply are listed first.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'New',
              cards: [
                { title: '40 guests, birthday, Sat', meta: 'Asked 11:04 pm', tag: ['Reply', 'late', 'Replied', 'ok'] },
              ],
            },
            {
              name: 'Quoted',
              cards: [
                { title: 'Corporate lunch, 25 pax', meta: 'Quote sent Mon', tag: ['Follow up', 'flag'] },
                { title: 'Anniversary, 18 pax', meta: 'Quote sent Tue', tag: ['Waiting', 'muted'] },
              ],
            },
            {
              name: 'Confirmed',
              cards: [{ title: 'Farewell, 35 pax', meta: 'Advance received', tag: ['Booked', 'ok'] }],
            },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Friday, before and after.',
  dayLede: 'The kitchen works the same way. What changes is that its decisions leave a record.',
  day: [
    {
      time: '9:00',
      before: 'You check last night’s sales on the billing report and wonder how the cost looked.',
      after: 'The Today screen shows yesterday’s sales, food cost and waste per outlet, and the dishes that ran over.',
    },
    {
      time: '11:00',
      before: 'The store keeper orders vegetables from memory.',
      after: 'A drafted order based on use and bookings is waiting for him to confirm.',
    },
    {
      time: '1:00',
      before: 'A supplier’s delivery is short. Nobody notices until the bill arrives.',
      after: 'The shortfall is recorded at the gate and a credit is raised on the spot.',
    },
    {
      time: '4:00',
      before: 'Unprepped stock at close is binned and forgotten.',
      after: 'The waste is logged with a reason, and tomorrow’s prep quantity is adjusted.',
    },
    {
      time: '11:30 pm',
      before: 'You count the cash and the numbers are a little off.',
      after: 'Verity names the shift and amount that do not tie, and the manager records why.',
    },
    {
      time: 'Month end',
      before: 'The accountant tells you food cost was 38 percent and you cannot explain it.',
      after: 'You already know which dishes, outlets and suppliers moved it, and what you did about each.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'Nobody hands you a login. We learn how your kitchen, store and counter actually work, build Verity around that, bring your data in, then stay to keep it working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day in your kitchen, store room and counter. Trace an ingredient from supplier to plate, and map how stock, sales and waste are recorded today, including your billing software.',
        you: 'A few hours from you, your head chef and your store keeper. Last three months of sales, purchase invoices and your stock register.',
        get: 'A written map of how your restaurant runs and the leaks we will go after first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your menu with recipes, stock items with par and reorder levels, suppliers, outlets, approval limits and checklists. Agree how sales reach Verity from your billing system.',
        you: 'Chef checks recipes and quantities. Manager checks approval limits and checklists.',
        get: 'A working Verity with your real menu, stock list and rules.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in stock, suppliers, price history and staff records. Train the store, kitchen and counter on the floor, during real service.',
        you: 'An opening stock count and one hour with each role.',
        get: 'Your data inside Verity, a team that has used it on real days, and the first recipe-vs-reality report.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Review the first weeks with you, tune par levels, recipes and alerts, and handle new outlets and menu changes.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps matching how the restaurant runs, with someone responsible for it.',
      },
    ],
    bring: [
      'Your menu with prices',
      'Recipes or, if you have none, we build them with your chef',
      'Your supplier list and last few invoices',
      'Your current stock list and last count',
      'A sample of your billing software’s daily sales report',
    ],
    time: 'About 10 to 12 hours of owner time over four weeks, plus the chef’s and store keeper’s time, mostly in weeks 1 and 2.',
    after: 'Nobody is hired to run Verity. Stock moves, waste and receipts are recorded where they already happen, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask the restaurant a question.',
    lede:
      'Verity AI reads your recipes, stock, purchases, sales and checklists. Ask in plain language, and turn the answer into a task for a named person.',
    examples: [
      {
        q: 'Which dishes lost margin this month and why?',
        a: 'Paneer tikka fell from 47% to 41% because paneer rose 11%. Dal makhani fell 3 points on cream and oil.',
        rows: [['Paneer tikka', '-6 pts'], ['Dal makhani', '-3 pts'], ['Butter chicken', '-1 pt']],
        action: 'Create a repricing task for the owner',
      },
      {
        q: 'Which outlet wasted the most last week, and on what?',
        a: 'HSR Layout, ₹21,800. Prep over-production was the largest cause, mostly gravies and rice.',
        rows: [['HSR Layout', '₹21,800'], ['Indiranagar', '₹14,200'], ['Koramangala', '₹9,900']],
      },
      {
        q: 'Which supplier’s prices rose the most in 60 days?',
        a: 'City Mandi on onion, up 27%, then Fresh Dairy Co. on paneer, up 11%.',
        action: 'Request quotes from two other suppliers',
      },
    ],
  },

  automationHeading: 'Routine checks that chase themselves.',
  automationLede: 'Set once, then they run from your records. People still do the work. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An item falls below its reorder point',
      then: ['Checked against the next three days of demand', 'Order drafted to the usual supplier', 'Receipt compared with the order on delivery'],
    },
    {
      when: 'A supplier’s price rises beyond your limit',
      then: ['Flagged against the item and supplier', 'Dishes affected are listed with new margin', 'Task to the owner to reprice or switch'],
    },
    {
      when: 'An invoice does not match order and receipt',
      then: ['Held from payment', 'Mismatch sent to the store keeper', 'Credit or correction recorded'],
    },
    {
      when: 'A discount or comp is above the limit',
      then: ['Held for approval', 'Routed to the manager with the reason', 'Decision recorded against the bill'],
    },
    {
      when: 'A daily check is not signed off by its due time',
      then: ['Flagged to the outlet manager', 'Escalated to the owner if still open', 'Completion time recorded'],
    },
    {
      when: 'A licence or certificate is 30 days from expiry',
      then: ['Task created for the owner of the document', 'Reminder repeated weekly', 'New certificate attached when received'],
    },
  ],

  rules: {
    heading: 'The rules a restaurant has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order.',
    items: [
      {
        name: 'FSSAI licence and food safety supervision',
        what: 'A valid licence or registration, displayed, and a trained food safety supervisor for each premises. Bands and fees changed recently, so confirm what applies to you.',
        how: 'Licence numbers, expiry dates and each supervisor’s training certificate are kept on record, with reminders ahead of expiry.',
        source: { name: 'CalcGuru, how to start a restaurant in India', url: 'https://calcguru.in/how-to-start-a-restaurant-business/' },
      },
      {
        name: 'Hygiene and temperature records',
        what: 'Inspectors ask for temperature logs, pest-control records, staff medical checks and water test reports.',
        how: 'Each is a recurring task signed off in the kitchen, so the history exists without a separate folder.',
        source: { name: 'Petpooja, restaurant compliance checklist', url: 'https://blog.petpooja.com/templates-checklist/restaurant-legal-compliance-checklist/' },
      },
      {
        name: 'GST on restaurant sales',
        what: 'A standalone restaurant is generally taxed at 5% without input tax credit. Your accountant confirms the position for your setup.',
        how: 'Sales, purchases and the split between dine-in, takeaway and delivery are recorded cleanly so your accountant starts from tidy data.',
      },
      {
        name: 'Shop and establishment, fire and local permits',
        what: 'Shop registration, fire safety and trade licences vary by city and state, and each has its own renewal date.',
        how: 'Each permit is a record with an expiry and an owner, so renewals are tasks rather than memories.',
      },
    ],
    note: 'Rules, fees and thresholds change and differ by state. Confirm current requirements with your accountant or the authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'The store keeper should not see profit. The chef should not edit supplier rates. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Where is margin going?', sees: 'Food cost, waste and channel profit by outlet, supplier price movement, discounts and approvals.' },
    { role: 'Outlet manager', question: 'What needs sorting today?', sees: 'Shifts, cash tie-out, checks due, discounts to approve, and the day’s sales.' },
    { role: 'Head chef', question: 'How are my dishes costing?', sees: 'Recipes, recipe-vs-reality gaps, waste by reason, and what to prep.' },
    { role: 'Store keeper', question: 'What do I order and receive?', sees: 'Par levels, drafted orders, deliveries to check and invoice mismatches.' },
    { role: 'Accountant', question: 'What did we buy and owe?', sees: 'Purchases by supplier, payables, invoice matches, discounts and the GST split.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing software. We agree how its daily sales reach Verity during setup.',
      'Zomato, Swiggy and your other channels. Verity compares what they earn you.',
      'Your suppliers and the way you order from them.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Take orders from guests or run the billing counter.',
      'Take table reservations.',
      'Send messages to guests or suppliers on its own.',
      'File your returns or run your payroll.',
    ],
    migration:
      'We bring your stock list, supplier history and staff records across from the sheets and registers you use now, in stages, so service never stops.',
  },

  faqHeading: 'Questions restaurant owners ask.',
  faqs: [
    [
      'Will my chef and store keeper really use it?',
      'It works only if recording takes seconds, so we set it up at the points where stock already moves: the store issue, the delivery gate and the close of service. We train during real service and give each role something back, such as a drafted order or a recipe gap they can act on.',
    ],
    [
      'Do I have to replace my billing software?',
      'No. Verity records the money and stock behind the bill. We agree during setup how your billing system’s daily sales reach Verity.',
    ],
    [
      'How does it know what each dish should cost?',
      'Every dish has a recipe: ingredients and quantities. Verity combines that with current purchase rates and sales volumes. If you do not have recipes, we build them with your chef in the first two weeks.',
    ],
    [
      'Can it handle my central kitchen and three outlets?',
      'Yes. Outlets and the central kitchen are locations in one system. Transfers between them are recorded, and you can compare food cost, waste and sales side by side.',
    ],
    [
      'Can I see what delivery apps really earn me?',
      'Yes. Sales are tagged by channel. You enter the commission and discount terms for each, and Verity shows contribution per channel and per dish.',
    ],
    [
      'Does it replace my accountant?',
      'No. It gives your accountant cleaner records and an earlier view of costs. Returns and filings stay with them.',
    ],
    [
      'Who can see my numbers?',
      'Only the people you allow. Access is set by role and every change is recorded with who made it and when.',
    ],
    [
      'How long before it pays for itself?',
      'That depends on your starting point, so we do not promise a figure. The recipe-vs-reality gaps and supplier price movements start to show as soon as a few weeks of data are recorded.',
    ],
    [
      'What does it cost?',
      'It depends on the number of outlets and what you want set up. Message us and we will give you a clear number after a short conversation about how your restaurant runs.',
    ],
  ],

  related: ['cafes', 'cloud-kitchens', 'fast-food-businesses', 'bakeries', 'bars-and-lounges', 'catering-businesses'],

  ctaHeading: 'Find out what a plate really costs you.',
  ctaLede:
    'Tell us how your restaurant runs and we will show you the cost gaps, waste and supplier price rises it would find, using your own numbers.',
};
