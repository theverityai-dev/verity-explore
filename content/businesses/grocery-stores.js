export default {
  schema: 2,
  slug: 'grocery-stores',
  status: 'published',
  plural: 'grocery stores',
  subject: 'grocery store',
  checked: '15 October 2026',

  seo: {
    title: 'Grocery store software: credit khata, stock, deliveries | Verity',
    description:
      'The 14 problems that squeeze a neighbourhood grocery store, what each costs, and the Verity screens that fix them: udhaar balances, expiry, distributor schemes, home delivery.',
    keywords: [
      'grocery store management software India',
      'kirana store credit khata tracking',
      'grocery stock and expiry management',
      'kirana home delivery tracking',
      'grocery distributor scheme tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'logistics', 'workforce', 'ai'],

  hero: {
    eyebrow: 'Verity for grocery stores',
    headline: 'You know every customer by name. You do not know who owes you what.',
    lede:
      'A neighbourhood grocery runs on trust, credit and memory. That works until the credit balance is bigger than you thought, the shelf is full of items nobody is buying, and a delivery boy has the wrong address. Verity writes down what you already carry in your head, so it stays accurate when you are not there.',
    oneLine:
      'One system for your credit customers, your shelves, your distributors and your home deliveries, kept up to date as you work.',
    note: 'Built for a shop where the owner is also at the counter. Records come from the sale, the delivery and the stock check you already do.',
    screen: 'owner',
    screenNote: 'customers, distributors, delivery boys and shelves',
  },

  today: {
    heading: 'Most grocers are good with people and guess at everything else.',
    paragraphs: [
      'Your regulars are your business. You know which family buys which atta, who pays on the first of the month and who needs a reminder. That is real knowledge, and it lives in your head and in a notebook. If you are ill for a week, or a new boy joins, it is gone.',
      'The same goes for stock. The distributor’s salesman visits, you order by feel, and half of it moves while the rest sits. Expiry dates are checked when someone has a spare moment. Credit given on the notebook is added up when you have time.',
      'There are about 13 million kirana stores in India, and the pressure is rising. Quick-commerce apps now deliver groceries in minutes in many cities. The shops that keep their regulars are the ones who know them best, and that needs a record.',
    ],
    stack: ['Credit notebook or khata app', 'Billing app or manual slips', 'Distributor salesman’s order slip', 'WhatsApp for home orders', 'The owner’s memory'],
    stackNote: 'Each piece works for its own job. None of them know about each other, and you are the glue.',
  },

  painsHeading: 'Where a grocery store actually loses money.',
  painsLede:
    'These are the situations grocers describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Credit',
      title: 'Udhaar grows quietly and nobody sees the total',
      scene:
        'Twenty-five families buy on credit. Each balance is in the notebook, on a different page, in a different hand. Nobody has ever added them all up, and two old balances have not moved in a year.',
      cost:
        'Example arithmetic: 25 families with an average ₹4,000 balance is ₹1 lakh of your cash sitting in other people’s kitchens, with no interest and some risk.',
      fix:
        'Credit sales and payments are recorded against each customer. Verity shows every balance, how old it is and who has crossed the limit you set, with a total at the top.',
      screen: 'udhaar',
    },
    {
      area: 'Credit',
      title: 'Reminders are awkward, so they are put off',
      scene:
        'You know a customer is behind. Asking face to face is uncomfortable, and the shop is busy. The balance rises another month.',
      cost:
        'Cash that could pay your distributor ends up on someone else’s credit. Old balances are the hardest to recover.',
      fix:
        'Balances past the age you choose appear as a collection list with the customer, the amount and the last payment. The task goes to the person you pick, and what the customer said is written next to it.',
      screen: 'udhaar',
    },
    {
      area: 'Stock',
      title: 'Ordering by feel leaves some shelves full and others empty',
      scene:
        'The distributor’s salesman arrives on Tuesday. You order what you remember is low. By Saturday the biscuit rack is empty and the pulse shelf has a month of stock.',
      cost:
        'A missed sale is a customer who buys the item at the next shop, and may buy the rest of the basket there too.',
      fix:
        'Every sale reduces stock. Before the salesman comes, Verity lists what has sold fast, what is nearly out, and what is already overstocked, so the order matches use.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Packs near expiry are found too late',
      scene:
        'A tin of ghee, a carton of biscuits or a pack of noodles reaches its best-before date at the back of the shelf. It is found when a customer notices, and now it is a complaint.',
      cost:
        'Expired packs are a loss and a risk to your name. FSSAI rules apply to your shop even if it is small.',
      fix:
        'Expiry dates are recorded for items with a short life. Verity lists the ones within 30 days, so you can move them to the front, give them a small offer or return them to the distributor in time.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Loose items lose weight and money before they are sold',
      scene:
        'Sugar, dal, rice and spices are sold by weight from sacks. Spillage, moisture, weighing a little extra and repacking all eat into it. You only see the loss when a sack is finished early.',
      cost:
        'Loose staples carry some of your best margin. One source for kirana owners notes that loose grains, pulses and spices are where a grocer earns most, so leakage here hurts most.',
      fix:
        'Each sack is a stock lot with its weight. Sales by weight reduce it, and Verity shows what should be left against what is, with the gap per item per week.',
      screen: 'stock',
      source: {
        name: 'OkCredit, kirana store guide (a vendor of khata software)',
        url: 'https://okcredit.in/blog/how-to-open-a-kirana-store/',
      },
    },
    {
      area: 'Distributors',
      title: 'Distributor schemes and free goods are agreed by word of mouth',
      scene:
        'A company salesman says, “Buy 20 cartons and get 2 free.” The goods come, but the free two do not. A month later nobody remembers the promise.',
      cost:
        'Example arithmetic: two free cartons worth ₹900 each, missed once a month, is about ₹21,600 a year.',
      fix:
        'Each scheme is recorded with the distributor, the item, the quantity and the benefit. When the delivery is received, Verity checks the free goods or credit and flags anything missing.',
      screen: 'distributors',
    },
    {
      area: 'Distributors',
      title: 'Delivery quantities and prices differ from the bill',
      scene:
        'The bill says 12 cartons and the van unloaded 11. The price of a popular oil is ₹6 higher than last time. The driver is in a hurry.',
      cost:
        'You pay for goods that did not arrive, or at a price that changed without notice.',
      fix:
        'Goods are received against the order and the counted quantity. Verity compares order, receipt and bill, and flags any quantity or rate difference before you pay.',
      screen: 'distributors',
    },
    {
      area: 'Distributors',
      title: 'Prices move and your shelf prices do not',
      scene:
        'Oil and flour rates go up in the market. You are still selling at last month’s price. Margins on staples are thin to begin with, and a rise of a few rupees on a fast mover changes the month.',
      cost:
        'You keep selling at a loss, or at a margin much thinner than you think, for days before anyone notices.',
      fix:
        'Each purchase records the cost. Verity shows the margin per item based on the latest cost and flags lines where the margin has fallen below the floor you set.',
      screen: 'distributors',
    },
    {
      area: 'Orders and delivery',
      title: 'Home orders on phone and WhatsApp get lost or delayed',
      scene:
        'A customer messages a list at 7 pm. The staff member is busy, the message scrolls up, and the order is packed at 9. The customer has already ordered from an app.',
      cost:
        'A survey of nearly 50 kirana owners by a software vendor found that about 80 percent felt they needed to adopt online operations to win back lost business. Slow home service is one reason.',
      fix:
        'Each home order your team receives is entered as an order with the customer, items, address and delivery person. Verity lists open orders by time, so none is forgotten, and records when each is delivered.',
      screen: 'deliveries',
      source: {
        name: 'Indian Retailer, on a Kiko Live survey of nearly 50 kirana owners, December 2024',
        url: 'https://www.indianretailer.com/news/kirana-stores-india-turn-digitalisation-amid-rising-quick-commerce-competition',
      },
    },
    {
      area: 'Orders and delivery',
      title: 'Delivery boys carry cash and no record',
      scene:
        'A boy delivers six orders on a scooter and collects cash on some. At the end of the day the money is a little short, and nobody can say which order.',
      cost:
        'Cash gaps and arguments, and no way to know which deliveries were late or went wrong.',
      fix:
        'Each delivery is assigned to a person with the amount due and the payment mode. When the order is closed, Verity compares the cash handed in with the cash due for that person that day.',
      screen: 'deliveries',
    },
    {
      area: 'Customers',
      title: 'Regulars slip away to quick commerce and nobody notices',
      scene:
        'The family on the second floor used to order every week. They have not for six weeks. You assume they are travelling. They have found an app that delivers in ten minutes.',
      cost:
        'A regular household can be worth a lakh or more a year. Losing a few changes the shop’s year.',
      fix:
        'Each customer’s usual order gap and basket are recorded. Verity lists those who are overdue, what they used to buy and the last bill, and assigns a call or a visit to someone on staff.',
      screen: 'customers',
    },
    {
      area: 'Staff',
      title: 'Only the owner knows prices, credit limits and who is trustworthy',
      scene:
        'A helper gives a discount the owner would not. Another extends credit to someone who owes a lot already. When the owner is away, the rules are guesses.',
      cost:
        'Discounts and credit given without the owner’s say, and a shop that cannot function well without the owner at the counter.',
      fix:
        'Credit limits and discount limits are set per customer and role. A sale above the limit waits for the owner’s approval on the phone, with the reason shown.',
      screen: 'owner',
    },
    {
      area: 'Money',
      title: 'UPI, cash and card at the end of the day do not match the sales',
      scene:
        'The drawer, the UPI app and the card machine all show different figures. A missed bill, a wrong amount or a free item could each explain the gap, and you have no way to tell.',
      cost:
        'A few hundred rupees a day unexplained is lakhs in a year, and you cannot trust your own books.',
      fix:
        'Sales and collections are compared by payment mode at close. Verity names the bills that do not tie, and the close is recorded with who counted.',
      screen: 'owner',
    },
    {
      area: 'Compliance',
      title: 'Registrations, scale stamping and tax thresholds are easy to miss',
      scene:
        'The FSSAI registration, the weighing scale’s Legal Metrology stamp and the GST turnover threshold are each on a different calendar in a different drawer.',
      cost:
        'An inspector can fine a shop for an unstamped scale, and crossing a GST threshold without registering has its own penalties. Check the current amounts with your adviser.',
      fix:
        'Each licence, registration and stamp is recorded with its due date. Verity shows what is due and assigns the task to a named person, and turnover to date is shown against thresholds so you are not surprised.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede:
    'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '13 million',
      text: 'kirana stores operate in India, generating more than $800 billion in annual revenue, according to the press coverage of a 2024 kirana digitalisation survey.',
      source: {
        name: 'Indian Retailer',
        year: '2024',
        url: 'https://www.indianretailer.com/news/kirana-stores-india-turn-digitalisation-amid-rising-quick-commerce-competition',
      },
    },
    {
      figure: '80%',
      text: 'of nearly 50 kirana owners surveyed said they needed to move online to win back lost business, and 84% already used some digital tools. A small sample from a software vendor.',
      source: {
        name: 'Indian Retailer, on a Kiko Live survey',
        year: '2024',
        url: 'https://www.indianretailer.com/news/kirana-stores-india-turn-digitalisation-amid-rising-quick-commerce-competition',
      },
    },
    {
      figure: '₹40 lakh',
      text: 'is the usual GST registration threshold for shops selling only goods, and ₹20 lakh in some special-category states. Inter-state sales need registration whatever the turnover.',
      source: {
        name: 'OkCredit, kirana store guide',
        year: '2026',
        url: 'https://okcredit.in/blog/how-to-open-a-kirana-store/',
      },
    },
    {
      figure: '₹1.5 crore',
      text: 'is the new ceiling for FSSAI basic registration from 1 April 2026, replacing the earlier ₹12 lakh. State licences cover ₹1.5 to ₹50 crore.',
      source: {
        name: 'Mondaq, on the FSSAI Amendment Regulations 2026',
        year: '2026',
        url: 'https://www.mondaq.com/india/food-and-drugs-law/1801924/fssai-raises-turnover-limits-for-food-business-registration-and-licensing',
      },
    },
  ],
  factsNote:
    'The survey is from a vendor of software for kirana stores and covers a small group of owners. The GST figure comes from a vendor guide and should be checked with your accountant. They show the scale of the problem, not what your shop will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names and terms are set up in your shop’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Shop / Today',
      meta: 'Shop: Sharma General Store',
      heading: 'The owner’s morning view',
      caption:
        'Yesterday’s sales, credit outstanding, stock about to run out, open home orders and anything waiting for your say, on one screen. It replaces the notebook and the end-of-day count.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales yesterday', value: '₹48,600', note: '112 bills' },
            { label: 'Udhaar outstanding', value: '₹1,12,400', note: '27 customers' },
            { label: 'Open home orders', value: '6', note: '2 past 1 hour' },
            { label: 'Expiring in 30 days', value: '19', note: 'lines to move' },
          ],
        },
        { type: 'title', text: 'Udhaar by age' },
        {
          type: 'bars',
          items: [
            { label: 'Under 30 days', value: 52, display: '₹58,000' },
            { label: '30 to 60 days', value: 31, display: '₹35,400' },
            { label: 'Over 60 days', value: 19, display: '₹19,000', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'UPI, cash and card are ₹320 below bills. 2 bills unmatched.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Discount of ₹150 on an order', meta: 'Asked by Ravi for a regular. Over his limit.', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
            { name: 'Weighing scale stamp due', meta: 'Due 28 November', tag: ['Book', 'flag', 'Booked', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'udhaar',
      title: 'Udhaar',
      meta: 'Credit customers',
      heading: 'Who owes what, and for how long',
      caption:
        'Every credit customer with their balance, limit, age of the oldest dues and last payment. Reminders are tasks for a named person, with the customer’s reply written next to them.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Balance', 'Limit', 'Oldest', 'Status'],
          rows: [
            ['Gupta family', '₹7,800', '₹6,000', '74 days', ['Over limit', 'late', 'Promised Friday', 'info']],
            ['Mrs Kulkarni', '₹3,200', '₹5,000', '12 days', ['OK', 'ok']],
            ['Jain flat 304', '₹5,400', '₹5,000', '48 days', ['Remind', 'flag', 'Paid ₹2,000', 'ok']],
            ['Raju, chai stall', '₹9,600', '₹8,000', '61 days', ['Remind', 'late']],
          ],
        },
        { type: 'alert', text: '4 customers are over their limit. Together they owe ₹26,000.', action: 'Assign reminders' },
      ],
    },
    {
      id: 'stock',
      title: 'Stock',
      meta: 'Shelves, sacks and expiry',
      heading: 'What to order, what to move and what is going bad',
      caption:
        'Fast sellers about to run out, slow lines tying up cash, loose sacks against what should be left, and packs close to their date.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'In stock', 'Sells / week', 'Expiry', 'Status'],
          rows: [
            ['Atta 5 kg', '6', '22', 'n/a', ['Order today', 'late', 'Ordered', 'ok']],
            ['Biscuit family pack', '40', '11', '18 days', ['Move to front', 'flag', 'Moved', 'ok']],
            ['Toor dal, loose (sack)', '31 kg', '52 kg', 'n/a', ['3.5 kg short', 'flag']],
            ['Ghee 1 L', '9', '3', '24 days', ['Offer', 'flag', 'Offered', 'info']],
            ['Detergent 1 kg', '28', '2', '9 months', ['Slow', 'muted']],
          ],
        },
        { type: 'alert', text: 'Sugar sack was 50 kg a week ago. Sales account for 41 kg, 6 kg is left. 3 kg unexplained.', action: 'Check' },
      ],
    },
    {
      id: 'distributors',
      title: 'Distributors',
      meta: 'Orders, schemes and prices',
      heading: 'What was ordered, what came, and what you were promised',
      caption:
        'Each order with its receipt and bill, any free goods or credit you were promised, and the cost of each item against last time.',
      blocks: [
        {
          type: 'table',
          cols: ['Distributor', 'Ordered', 'Received', 'Scheme', 'Status'],
          rows: [
            ['Shree Agencies', '20', '20', '2 free', ['Free goods missing', 'late', 'Received', 'ok']],
            ['Ram Traders', '12', '11', 'None', ['Short 1', 'flag', 'Credit note', 'ok']],
            ['Hindustan Oils', '30', '30', 'None', ['Rate +₹6', 'flag']],
            ['Metro Cash and Carry', '8', '8', 'None', ['Matched', 'ok']],
          ],
        },
        { type: 'alert', text: 'Cooking oil cost rose ₹6 a litre. Your margin on the 1 L pack is now 3%.', action: 'Reprice' },
      ],
    },
    {
      id: 'deliveries',
      title: 'Home orders',
      meta: 'Today',
      heading: 'Every home order, from message to doorstep',
      caption:
        'Each order is written down as it arrives, assigned to a packer and a delivery person, and closed when it is delivered. Cash collected is matched to the person.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'To pack',
              cards: [
                { title: 'Mrs Kulkarni, flat 402', meta: '18 items, ₹1,240. Ordered 7:05 pm', tag: ['Late', 'late', 'Packing', 'info'] },
                { title: 'Jain flat 304', meta: '9 items, ₹610. Ordered 7:20 pm', tag: ['New', 'flag', 'Packing', 'info'] },
              ],
            },
            {
              name: 'Out for delivery',
              cards: [
                { title: 'Gupta family', meta: 'Sunil, scooter. Cash on delivery ₹980', tag: ['On the way', 'info', 'Delivered', 'ok'] },
              ],
            },
          ],
        },
        { type: 'alert', text: 'Sunil handed in ₹4,200 against ₹4,620 due today. One order, ₹420, not accounted for.', action: 'Check' },
      ],
    },
    {
      id: 'customers',
      title: 'Customers',
      meta: 'Regulars and overdue',
      heading: 'Your regulars, and who has gone quiet',
      caption:
        'Customers ordered by their yearly spend and how overdue they are against their own pattern, with what they used to buy so the call is a useful one.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Last order', 'Usual gap', 'Spend, 12 mo', 'Status'],
          rows: [
            ['Dr Menon, flat 201', '2 Sep', '1 wk', '₹84,000', ['Call today', 'late', 'Ordered', 'ok']],
            ['Iyer family', '10 Sep', '10 days', '₹61,500', ['Call today', 'flag']],
            ['Parekh family', '28 Aug', '2 wks', '₹47,200', ['Message', 'flag', 'Ordered', 'ok']],
            ['Mrs Thomas', '5 Sep', '2 wks', '₹32,800', ['Message', 'flag']],
          ],
        },
        { type: 'alert', text: '12 regular households are past their usual gap. 5 spent over ₹40,000 last year.', action: 'Assign all' },
      ],
    },
  ],

  dayHeading: 'The same Wednesday, before and after.',
  dayLede: 'Your shop does not change. What changes is that the knowledge in your head is written down and does some of the chasing.',
  day: [
    {
      time: '8:00',
      before: 'You open the shop and try to remember what is low, and who has not paid.',
      after: 'The Today screen lists five items to order, four customers over their limit and six home orders for the morning.',
    },
    {
      time: '10:30',
      before: 'The distributor’s salesman visits and you order from memory.',
      after: 'You order from a list of fast sellers, slow lines and expiring packs, and note the free-goods scheme he offers.',
    },
    {
      time: '1:00',
      before: 'A van unloads. The bill says 12 cartons and 11 are carried in.',
      after: 'The count against the order is entered at the door. The short carton is flagged for a credit note.',
    },
    {
      time: '5:00',
      before: 'A regular has not been in for two months and you only just realised.',
      after: 'She appeared on the overdue list at three weeks and your helper phoned her.',
    },
    {
      time: '7:30',
      before: 'A WhatsApp order is packed late and the customer has already ordered from an app.',
      after: 'The order is on the home orders board, assigned and timed. It leaves within the half hour.',
    },
    {
      time: '9:30',
      before: 'You count cash and UPI against the slips. It is off by ₹320 and you are tired.',
      after: 'Verity shows the two bills that do not tie, and you fix them in a minute.',
    },
  ],

  approach: {
    heading: 'We set it up with you in four weeks, around the shop’s hours.',
    lede:
      'There is no login and a manual. We learn how your shop runs, build Verity around it, bring your credit and stock lists across, and stay on while it settles in.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a morning and an evening at the shop. Watch a distributor delivery, a few credit sales, a home order and the end-of-day count, and note where each number lives.',
        you: 'Two hours of your time, in the quiet hours. Your credit notebook, your distributor list and your billing slips.',
        get: 'A written map of your shop: items, distributors and schemes, credit customers, delivery people and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your item list, loose-item lots, credit limits, discount limits, delivery roles and reorder points, and build the screens above in your terms.',
        you: 'Check the setup with your senior helper. Tell us where a rule or a name is wrong.',
        get: 'A working Verity with your real items, customers and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your credit balances, customer phone numbers, item list and opening stock. Train you and your helpers at the counter and the stockroom, in short sessions.',
        you: 'Your notebook pages, photographed or copied into any sheet. Half an hour with each helper.',
        get: 'Your customers, balances and stock inside Verity, and a team that has run a home order and an end-of-day close.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first month with you, tune the limits and alerts, and handle changes when you add a second counter or a delivery person.',
        you: 'A short monthly look at the numbers.',
        get: 'A system that keeps matching the shop, with someone responsible for it.',
      },
    ],
    bring: [
      'Your credit notebook or khata app export',
      'Your item list with buying and selling prices, even if rough',
      'Distributor names, phone numbers and the schemes you know about',
      'Your regular customers’ names and numbers',
      'Your helpers’ and delivery boys’ names, hours and pay arrangement',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in the first week and in short blocks. Your senior helper needs a few more.',
    after: 'Nobody is hired to run Verity. Sales, receipts, credit entries and orders are recorded as part of the work already done, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your shop a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own sales, credit, stock and order records. Ask in plain language, then turn the answer into tasks for your people.',
    examples: [
      {
        q: 'Who owes me more than 60 days of udhaar?',
        a: '5 customers owe ₹19,000 between them for more than 60 days. The largest is ₹9,600.',
        rows: [['Raju, chai stall', '₹9,600'], ['Gupta family', '₹4,800'], ['Flat 112', '₹2,400'], ['Others (2)', '₹2,200']],
        action: 'Create reminder tasks for each',
      },
      {
        q: 'Which items are selling slower than before?',
        a: 'Detergent 1 kg and two brands of tea are down by more than half over the last two months, and together hold ₹14,000 of stock.',
        rows: [['Detergent 1 kg', '-62%'], ['Tea 250 g, brand A', '-55%'], ['Tea 250 g, brand B', '-51%']],
      },
      {
        q: 'Which regulars have not ordered in three weeks?',
        a: '12 households are past three weeks. Together they spent ₹4.8 lakh with you in the last year.',
        action: 'Assign a call to each household',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede:
    'Set once, then they run from your records. Your people still make the calls and messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A credit customer goes over their limit',
      then: ['Held for your approval on further credit', 'Listed with the customer’s history', 'Reminder task to the person you choose'],
    },
    {
      when: 'A credit balance is 45 days old',
      then: ['Added to the collection list', 'Task to call or visit', 'Reply recorded: paid, promised or disputed'],
    },
    {
      when: 'An item falls below its reorder level',
      then: ['Added to the next distributor order', 'Order drafted for your approval', 'Stock updated when goods are received'],
    },
    {
      when: 'A pack is 30 days from expiry',
      then: ['Listed on the move-first shelf list', 'Task to bring forward or offer', 'Returned or written off if unsold'],
    },
    {
      when: 'A home order is received',
      then: ['Entered with items and address', 'Assigned to a packer and a delivery person', 'Cash due matched when it is closed'],
    },
    {
      when: 'A distributor delivery differs from the order',
      then: ['Flagged by item and quantity', 'Credit note task opened', 'Bill held back from payment'],
    },
  ],

  rules: {
    heading: 'The rules a grocery store has to keep up with.',
    lede:
      'Verity does not give legal or tax advice and does not file anything for you. It keeps the dates and records these rules depend on in one place, so nothing is missed.',
    items: [
      {
        name: 'FSSAI registration or licence',
        what: 'A shop selling packaged and loose food needs an FSSAI registration or licence, based on turnover. From 1 April 2026 basic registration generally covers turnover up to ₹1.5 crore, a state licence ₹1.5 to ₹50 crore.',
        how: 'The registration number, category and any reminders are recorded, and expiry checks on packs are tasks with a name and a tick.',
        source: {
          name: 'Mondaq, FSSAI raises turnover limits',
          url: 'https://www.mondaq.com/india/food-and-drugs-law/1801924/fssai-raises-turnover-limits-for-food-business-registration-and-licensing',
        },
      },
      {
        name: 'Weighing scales and the Legal Metrology rules',
        what: 'Scales used in trade generally need Legal Metrology verification and stamping, with periodic re-verification set by your state. Packaged goods must not be sold above the printed MRP.',
        how: 'Each scale and its next verification date are recorded with a reminder. A new lot with a changed MRP is flagged so the shelf price is corrected.',
        source: {
          name: 'OkCredit, kirana store guide',
          url: 'https://okcredit.in/blog/how-to-open-a-kirana-store/',
        },
      },
      {
        name: 'GST thresholds and rates',
        what: 'A shop selling only goods generally has to register once turnover crosses ₹40 lakh, or ₹20 lakh in some states. Inter-state supply needs registration whatever the turnover. Rates depend on the product. Your accountant prepares the returns.',
        how: 'Turnover to date is shown against your threshold, and purchases and sales show the split by tax rate.',
      },
      {
        name: 'Customer and staff data',
        what: 'Customer phone numbers and addresses are personal data. The DPDP Rules, 2025 were notified in November 2025, and most business duties start on 13 May 2027.',
        how: 'Customer details sit in one place with a record of who viewed or changed them, instead of in a notebook or a delivery boy’s phone.',
        source: {
          name: 'S.S. Rana & Co. on the DPDP Rules',
          url: 'https://ssrana.in/articles/meity-notifies-final-digital-personal-data-protection-rules-2025/',
        },
      },
    ],
    note: 'Rules, thresholds and rates change and differ by state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede:
    'A delivery boy does not need to see anyone’s credit balance. A helper does not need your buying prices. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the shop earning, and who owes me?', sees: 'Sales, margin by item, udhaar by age, distributor schemes, stock and cash match.' },
    { role: 'Senior helper', question: 'What needs doing today?', sees: 'Orders to place, packs to move, home orders open and credit reminders assigned.' },
    { role: 'Counter helper', question: 'Can this customer take more credit?', sees: 'Customer limit and balance, stock at hand and today’s sales.' },
    { role: 'Delivery person', question: 'What is on my route?', sees: 'Their assigned orders, addresses, amounts due and the cash they hold.' },
    { role: 'Accountant', question: 'What do I need for month end?', sees: 'Sales and purchases by tax rate, collections by mode, distributor bills and credit outstanding.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing app or slips at the counter. We agree during setup how sales reach Verity.',
      'Your khata app or notebook, until we have moved the balances across.',
      'WhatsApp for home orders. Your staff read the message and enter the order.',
      'Your accountant, who still prepares your GST returns.',
    ],
    not: [
      'Take home orders from customers online.',
      'Send reminders to customers on its own.',
      'Collect payments or manage UPI for you.',
      'File tax returns or run your payroll.',
    ],
    migration:
      'We bring your credit balances, customer list, item list and opening stock across from the notebook, sheets or apps you use now, in stages, so the shop keeps trading while it happens.',
  },

  faqHeading: 'Questions grocery store owners ask.',
  faqs: [
    [
      'My shop is small and I do not have time at the computer. Will this work?',
      'It is built for that. Most entries are a few taps at the moment the thing happens: a sale on credit, a delivery received, an order taken. We train you at the counter in short sessions, not in a classroom.',
    ],
    [
      'Does Verity replace my billing app or khata app?',
      'It can take over the khata from a notebook or an app, because balances and payments are records on the customer. Your billing app keeps ringing up sales, and we agree during setup how its sales reach Verity.',
    ],
    [
      'Can Verity send reminders to my credit customers?',
      'Not by itself. It builds the collection list and assigns the reminder to a person, who calls or messages. What the customer says is recorded next to the balance.',
    ],
    [
      'How do loose items like dal and sugar work?',
      'Each sack is a stock lot with its weight. Sales by weight reduce it. Verity shows what should be left against what you have, and the gap per item per week.',
    ],
    [
      'Do I need barcodes or new machines?',
      'Verity does not run a billing counter or scan barcodes. We work with the way you record sales today, and agree during setup how that data reaches Verity.',
    ],
    [
      'Can I see what my helpers and delivery boys are doing?',
      'Yes. Tasks, home orders and cash handed in are recorded against each person. Access is set by role, so a delivery person sees their own route and not your credit book.',
    ],
    [
      'Who can see my customers’ balances?',
      'Only the people you allow. Credit balances are visible to the owner and the people you name. Every view and change is recorded with who and when.',
    ],
    [
      'I have a second shop. Can I see both?',
      'You can. Each shop is a location, and a customer who buys at both is one person. Stock, credit and sales are compared, and transfers between shops are recorded.',
    ],
    [
      'What does it cost?',
      'It depends on the number of shops, users and what you want set up. Message us and we will give you a clear number after a short conversation about how your shop runs.',
    ],
  ],

  related: ['convenience-stores', 'supermarkets', 'retail-stores', 'bakeries', 'distributors', 'wholesalers'],

  ctaHeading: 'Start with the udhaar nobody has added up.',
  ctaLede:
    'Tell us how your shop runs and we will show you the credit total, the packs near expiry and the regulars who went quiet, using your own numbers.',
};
