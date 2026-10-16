export default {
  schema: 2,
  slug: 'retail-stores',
  status: 'published',
  plural: 'retail stores',
  subject: 'store',
  checked: '15 October 2026',

  seo: {
    title: 'Retail store management software for Indian shops | Verity',
    description:
      'The 14 problems that quietly drain a retail store, what each costs, and the Verity screens that fix them: dead stock, shrinkage, supplier dues, staff targets and more.',
    keywords: [
      'retail store management software India',
      'retail inventory and dead stock tracking',
      'retail shrinkage control',
      'multi-store retail operations software',
      'retail supplier payment tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for retail stores',
    headline: 'The shelf looks full. The money is somewhere else. Verity shows you where.',
    lede:
      'A store can be busy all day and still end the month short, because cash is stuck in stock that does not move, goods go missing between the back room and the till, and supplier bills pile up unseen. Verity ties stock, purchases, customers and staff together so you can see each leak.',
    oneLine:
      'One system that knows what is on every shelf, what it cost, who bought it, and what is owed to whom, store by store.',
    note: 'Built for a shop that has no time for extra data entry. Records come from the sale, the delivery and the stock count you already do.',
    screen: 'owner',
    screenNote: 'products, suppliers, staff and stores',
  },

  today: {
    heading: 'Most stores know what they sold. Few know what it left them.',
    paragraphs: [
      'The till total is easy: it is on the screen by evening. Everything behind it is harder. Which products have sat on the shelf for six months. How much was lost between delivery and sale. What the supplier will ask you to pay next week. Which customers used to come every month and have stopped.',
      'The answers exist, but scattered: a billing app, a purchase register, supplier bills in a drawer, a stock sheet updated when someone has time, and the memory of the person who has run the shop for years. The owner is usually also serving customers, so the system that joins it all is you, between sales.',
      'The damage is rarely one big event. It is a slow drag from slow stock, small losses, early payments, missed supplier credit and discounts given without a note, and it shows up only when the bank balance is lower than the sales suggested.',
    ],
    stack: ['Billing app or machine', 'Purchase bills in a file', 'Excel or notebook stock list', 'WhatsApp with suppliers and staff', 'The owner’s memory'],
    stackNote: 'Each does its own small job well enough. None of them see each other, and that gap is where the money goes.',
  },

  painsHeading: 'Where a retail store actually loses money.',
  painsLede:
    'These are the situations store owners describe over and over. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Stock',
      title: 'Cash is locked in products that do not move',
      scene:
        'Half the back room is last season’s buys and one-off bulk deals. The fast sellers run out while these gather dust. Nobody has a list of what has not sold in six months.',
      cost:
        'Example arithmetic: if ₹4 lakh of a ₹20 lakh stock has not sold in six months, that is ₹4 lakh you cannot use to buy what customers want, plus the discount you will eventually take to clear it.',
      fix:
        'Every sale and delivery is recorded against the product, so Verity shows days since last sale and stock cover for each line. Slow movers are listed with their cost, ready for a markdown, a bundle or a return to the supplier.',
      screen: 'stock',
      source: {
        name: 'Vector Consulting Group, The Ticking Shelf, reported by Indian Retailer, 2026',
        url: 'https://indianretailer.com/article/retail-business/retail/91-pc-organised-retail-stores-india-are-losing-revenue-shelf',
      },
    },
    {
      area: 'Stock',
      title: 'The best sellers run out, and nobody knows until a customer asks',
      scene:
        'A customer asks for the item that sold fast all month. The shelf is empty. The supplier takes four days to deliver, and the customer buys it from the shop next door today.',
      cost:
        'Each missed sale is gone for good, and some of those customers do not come back. Example arithmetic: ten missed sales a week at ₹600 is ₹3 lakh a year.',
      fix:
        'Each product has a reorder point set from how fast it actually sells. Verity flags lines about to run out, sorted by how fast they sell, and drafts the purchase order for you to approve.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Stock goes missing and no one can say when',
      scene:
        'The count in the sheet says 40. The shelf has 31. Some went to customers without a bill, some were taken by staff, some were damaged and thrown out. It is a guess which.',
      cost:
        'Shrinkage is a real line in Indian retail. Trent reported 0.41 percent of sales for FY24, and the Retailers Association of India has said up to 0.5 percent is manageable. For a small store without counts the figure is usually unknown, which is worse.',
      fix:
        'Deliveries, sales, damages and transfers are all recorded movements. A regular count is compared with the book and Verity lists each gap with the item, the quantity, the value and the date range it fell in.',
      screen: 'stock',
      source: {
        name: 'Economic Times piece reprinted by Third Eyesight, June 2024',
        url: 'https://www.thirdeyesight.in/?p=6499',
      },
    },
    {
      area: 'Suppliers',
      title: 'You pay suppliers late, or early, and miss the credit you earned',
      scene:
        'Bills sit in a file. One supplier offers a discount for payment in ten days, and you find the bill on day thirty. Another is paid twice because two people thought it was pending.',
      cost:
        'Lost early-payment discounts, double payments you have to chase back, and strained supplier relations when a payment is forgotten.',
      fix:
        'Each purchase bill is a record with its due date and terms. Verity lists what is due this week, what has a discount window closing, and what has already been paid, and sends a task to whoever pays.',
      screen: 'suppliers',
    },
    {
      area: 'Suppliers',
      title: 'Delivered quantity does not match the bill',
      scene:
        'The bill says 48 pieces and the carton had 44. The delivery boy has left. The short pieces are noticed a week later, when it is too late to argue.',
      cost:
        'You pay for goods that never arrived. Example arithmetic: four short pieces a week at ₹250 is about ₹52,000 a year.',
      fix:
        'Goods are received against the purchase order with the counted quantity. Verity compares order, receipt and bill and flags any mismatch before the bill is passed for payment.',
      screen: 'suppliers',
    },
    {
      area: 'Suppliers',
      title: 'Margin changes when supplier prices change, and you find out late',
      scene:
        'The supplier raises the cost of a popular item by 8 percent. The shelf price stays the same for three months. Every sale since has earned less.',
      cost:
        'A few rupees lost on every unit of your best sellers is a large number by the quarter end.',
      fix:
        'Each purchase records the cost, so Verity tracks cost per product over time and shows the margin on each line. A rise beyond a limit you set is flagged with the products it affects.',
      screen: 'suppliers',
    },
    {
      area: 'Customers',
      title: 'Regular customers drift away without anyone noticing',
      scene:
        'A family that bought household items every month has not been in since July. Nobody on the staff knows they used to be regulars, because nobody ever wrote it down.',
      cost:
        'Example arithmetic: 200 regular households spending ₹1,800 a month are worth about ₹43 lakh a year. Losing a fifth without noticing is ₹8.6 lakh.',
      fix:
        'Sales are linked to the customer by phone number. Verity learns each customer’s usual gap, lists those who have passed it with what they bought, and assigns a follow-up task to a staff member.',
      screen: 'customers',
    },
    {
      area: 'Customers',
      title: 'Returns and exchanges are handled by memory and goodwill',
      scene:
        'A customer comes back with a bag and no bill. A staff member says yes to be polite. The item goes back on the shelf, or into the corner, with no entry and no reason.',
      cost:
        'Refunds with no record, damaged returns put back on sale, and no view of which products or suppliers cause the returns.',
      fix:
        'Every return is a recorded entry against the original sale with a reason and a decision on where the item goes: shelf, damaged or back to the supplier. Refunds above your limit wait for approval.',
      screen: 'customers',
    },
    {
      area: 'Staff',
      title: 'Sales staff leave often and take their know-how with them',
      scene:
        'A good floor person who knows which brands each regular likes resigns. A new hire starts from zero. Retail attrition figures cited in Indian press run from about 30 percent to well over half a year.',
      cost:
        'Hiring, training and the weeks of weak selling while a new person learns the stock and the customers.',
      fix:
        'Customer preferences and past purchases sit on the customer record, not in one person’s head. Verity shows a handover list for any customer or product area when someone leaves.',
      screen: 'staff',
    },
    {
      area: 'Staff',
      title: 'Targets, incentives and shifts are worked out on paper',
      scene:
        'The manager has a notebook of who was in on which day, who sold how much, and who gets the monthly incentive. At month end two people disagree with the figures.',
      cost:
        'Hours of the manager’s time every month and a good salesperson who feels cheated and starts to look elsewhere.',
      fix:
        'Attendance and sales are recorded against each person. Verity builds the monthly sheet from the rule you gave, and the staff member sees the same figures.',
      screen: 'staff',
    },
    {
      area: 'Money',
      title: 'Discounts given at the counter are never added up',
      scene:
        'A regular asks for “a little less”. The cashier rounds down. A manager says yes to a bigger one with a nod. By month end nobody can say how much was given away.',
      cost:
        'Small rounds of discretion are where thin margins disappear. Example arithmetic: ₹40 off on 60 bills a day is ₹7 lakh a year.',
      fix:
        'Each bill records the discount and who allowed it. Anything above your limit needs a one-tap approval with a reason, and the owner sees discounts by person, product and week.',
      screen: 'owner',
    },
    {
      area: 'Money',
      title: 'The cash, card and UPI at close do not match the day’s bills',
      scene:
        'At 9 pm the drawer is ₹850 short. Was it a missed bill, a wrong change or a free item? Nobody knows, so the difference is written off and the same gap appears next week.',
      cost:
        'Small daily gaps add up, and the owner cannot trust the number in front of them.',
      fix:
        'The day’s sales and the day’s collections are compared by mode. Verity flags the mismatch with the exact bills that do not tie, and the close is recorded with who counted.',
      screen: 'owner',
    },
    {
      area: 'Compliance',
      title: 'Price, pack and tax details have to be right on every item',
      scene:
        'Packaged goods must be sold at or below the printed MRP. A new stock lot arrives with a revised MRP, the shelf tag still shows the old one, and the billing app has the old price too.',
      cost:
        'Selling above MRP is an offence under the Legal Metrology rules and an unfair trade practice under consumer law. Penalties are set by the state and the Act, so check the current amounts with your adviser.',
      fix:
        'Each product record holds its MRP and tax rate, with a history of changes. Verity flags a new lot whose MRP differs from the record so the shelf tag and the billing price are corrected the same day.',
      screen: 'stock',
      source: {
        name: 'Legal Metrology (Packaged Commodities) Rules, 2011, Rule 18(2); see the 2025 Lok Sabha reply',
        url: 'https://fcainfoweb.nic.in/PMS/writereaddata/2025_LS_B_4362.pdf',
      },
    },
    {
      area: 'Owner',
      title: 'A second store doubles the blind spots',
      scene:
        'Store two has a different billing app and its own stock list. Stock sits idle in one while the other runs out. The owner learns how each is doing from a phone call at night.',
      cost:
        'Stock bought twice, no fair comparison between stores, and problems that grow for weeks before anyone sees them.',
      fix:
        'Stores are locations in one system. Stock, sales and margin compare side by side, and a transfer between stores is a recorded movement with a sender and a receiver.',
      screen: 'locations',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede:
    'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '91%',
      text: 'of large organised retail chains in India report revenue leaking at the shelf, in a survey of 100 chains with revenue over ₹500 crore.',
      source: {
        name: 'Vector Consulting Group, via Indian Retailer',
        year: '2026',
        url: 'https://indianretailer.com/article/retail-business/retail/91-pc-organised-retail-stores-india-are-losing-revenue-shelf',
      },
    },
    {
      figure: '66%',
      text: 'of those retailers see markdowns as margin erosion, and about 65% say they lack strong processes to keep inventory fresh.',
      source: {
        name: 'Vector Consulting Group, via Indian Retailer',
        year: '2026',
        url: 'https://indianretailer.com/article/retail-business/retail/91-pc-organised-retail-stores-india-are-losing-revenue-shelf',
      },
    },
    {
      figure: '0.41%',
      text: 'of sales lost to shrinkage at Trent in FY24, up from 0.22% the year before. Retailers Association of India has said up to 0.5% is manageable.',
      source: {
        name: 'Economic Times piece reprinted by Third Eyesight',
        year: '2024',
        url: 'https://www.thirdeyesight.in/?p=6499',
      },
    },
    {
      figure: '13 May 2027',
      text: 'is when most duties in India’s DPDP Rules, 2025 begin for businesses that hold customer data, including notice and consent. The Rules were notified in November 2025.',
      source: {
        name: 'S.S. Rana & Co. on the DPDP Rules',
        year: '2025',
        url: 'https://ssrana.in/articles/meity-notifies-final-digital-personal-data-protection-rules-2025/',
      },
    },
  ],
  factsNote:
    'The survey and shrinkage figures come from large chains, not a single shop, and one source is a reprint of a news article. They show the scale of the problem, not what your store will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your store’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Store / Today',
      meta: 'Store: Pune Camp',
      heading: 'The owner’s morning view',
      caption:
        'Sales, margin, stock health, cash match and the things waiting for a decision, on one screen. This replaces the evening phone call and the mental list.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales yesterday', value: '₹2,18,400', note: '164 bills' },
            { label: 'Gross margin', value: '27%', note: 'after discounts' },
            { label: 'Slow stock', value: '₹3.9 lakh', note: 'no sale in 180 days' },
            { label: 'Supplier dues', value: '₹1.2 lakh', note: 'due this week' },
          ],
        },
        { type: 'title', text: 'Discounts given, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Counter 1', value: 34, display: '₹6,100' },
            { label: 'Counter 2', value: 58, display: '₹10,400', tone: 'muted' },
            { label: 'Manager', value: 22, display: '₹3,900' },
          ],
        },
        { type: 'alert', text: 'Collections do not tie to bills by ₹850. 3 bills unmatched.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Reorder: steel bottles 1 L', meta: 'Sells 14 a week, 6 left', tag: ['Order', 'flag', 'Ordered', 'ok'] },
            { name: 'MRP changed on a new lot of chocolates', meta: 'Shelf and billing show the old price', tag: ['Update', 'late', 'Updated', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Stock',
      meta: 'Cover, slow movers and counts',
      heading: 'Every product, how fast it moves and what it ties up',
      caption:
        'Days of cover, days since last sale and value locked up, per product. A count compared with the book shows exactly what does not match and by how much.',
      blocks: [
        {
          type: 'table',
          cols: ['Product', 'In stock', 'Sells / week', 'Cover', 'Status'],
          rows: [
            ['Steel bottle 1 L', '6', '14', '3 days', ['Reorder', 'late', 'Ordered', 'ok']],
            ['Cotton towel set', '38', '2', '19 weeks', ['Slow', 'flag', 'Marked down', 'info']],
            ['Lunch box, 3 piece', '22', '9', '2.4 weeks', ['OK', 'ok']],
            ['Desk lamp, LED', '41', '0', 'No sale 210 days', ['Dead stock', 'late', 'Return to supplier', 'info']],
            ['Chocolate box 250 g', '60', '25', '2.4 weeks', ['New MRP', 'flag', 'Updated', 'ok']],
          ],
        },
        { type: 'alert', text: 'Last count: 11 lines short, ₹7,400 at cost. Largest gap: earphones, 9 units.', action: 'See gaps' },
      ],
    },
    {
      id: 'suppliers',
      title: 'Suppliers',
      meta: 'Bills, receipts and prices',
      heading: 'What you ordered, what arrived and what you owe',
      caption:
        'Each purchase order, the quantity counted at the door, the bill, the cost rate and the due date. Mismatches and rising costs are flagged before payment.',
      blocks: [
        {
          type: 'table',
          cols: ['Supplier', 'Ordered', 'Received', 'Bill', 'Status'],
          rows: [
            ['Gupta Traders', '48', '44', '₹21,600', ['Short 4', 'late', 'Credit note', 'ok']],
            ['Sharma Home Goods', '120', '120', '₹38,400', ['Discount ends in 3 days', 'flag', 'Paid', 'ok']],
            ['Kapoor Stationers', '200', '200', '₹14,200', ['Matched', 'ok']],
            ['Metro Distributors', '60', '60', '₹52,000', ['Cost +8%', 'flag']],
          ],
        },
        { type: 'alert', text: 'Cost of steel bottles rose 8% since June. Margin on the line fell from 31% to 24%.', action: 'Reprice' },
      ],
    },
    {
      id: 'customers',
      title: 'Customers',
      meta: 'Repeat buyers and returns',
      heading: 'Regulars, lapsed customers and returns on one list',
      caption:
        'Customers ordered by what they were worth and how overdue they are. Returns appear against the sale they came from, with a reason and a decision.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Last visit', 'Usual gap', 'Spend, 12 mo', 'Status'],
          rows: [
            ['Anjali Deshmukh', '9 Jul', '4 wks', '₹24,600', ['Call today', 'late', 'Visited', 'ok']],
            ['Rahul Joshi', '21 Jul', '5 wks', '₹18,900', ['Message', 'flag']],
            ['Fatima Sheikh', '30 Jun', '6 wks', '₹31,200', ['Call today', 'late', 'Declined', 'muted']],
            ['Suresh Kulkarni', '14 Aug', '4 wks', '₹12,400', ['Message', 'flag', 'Visited', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Return: desk lamp, no bill', meta: 'Reason: stopped working. Over limit.', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
            { name: 'Return: cotton towel, wrong colour', meta: 'Back to shelf, same lot', tag: ['Restock', 'info', 'Restocked', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'staff',
      title: 'Team',
      meta: 'This month',
      heading: 'Attendance, sales and incentive for every person',
      caption:
        'Days worked, sales per person, returns and the incentive that follows from your rule. Each person sees the same breakdown, so month end stops being an argument.',
      blocks: [
        {
          type: 'table',
          cols: ['Name', 'Days', 'Sales', 'Returns', 'Incentive'],
          rows: [
            ['Pooja', '26', '₹6.4 lakh', '2%', '₹6,400'],
            ['Imran', '25', '₹5.8 lakh', '3%', '₹5,800'],
            ['Deepak', '22', '₹3.1 lakh', '7%', '₹1,550'],
            ['Neha', '26', '₹4.9 lakh', '2%', '₹4,900'],
          ],
        },
        { type: 'title', text: 'Sales against monthly target' },
        {
          type: 'bars',
          items: [
            { label: 'Pooja', value: 100, display: '107%' },
            { label: 'Imran', value: 97, display: '97%' },
            { label: 'Neha', value: 82, display: '82%' },
            { label: 'Deepak', value: 52, display: '52%', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'locations',
      title: 'Stores',
      meta: 'All stores side by side',
      heading: 'Two or more stores, one view',
      caption:
        'Sales, margin, slow stock and shrinkage for every store, with transfers between stores recorded as movements so stock is not bought twice.',
      blocks: [
        {
          type: 'table',
          cols: ['Store', 'Sales, 30 days', 'Margin', 'Slow stock', 'Shrinkage'],
          rows: [
            ['Pune Camp', '₹58.2 lakh', '27%', '₹3.9 lakh', '0.4%'],
            ['Baner', '₹41.7 lakh', '29%', '₹1.8 lakh', '0.2%'],
            ['Kothrud', '₹33.5 lakh', '24%', '₹5.2 lakh', '1.1%'],
          ],
        },
        {
          type: 'board',
          columns: [
            {
              name: 'Transfers in progress',
              cards: [
                { title: '24 lunch boxes, Pune Camp to Kothrud', meta: 'Sent today', tag: ['In transit', 'info', 'Received', 'ok'] },
                { title: '12 desk lamps, Kothrud to Baner', meta: 'Dead at Kothrud, selling at Baner', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
              ],
            },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Thursday, before and after.',
  dayLede: 'The work in the shop does not change. What changes is that each task leaves a record, and the record does the chasing.',
  day: [
    {
      time: 'Opening',
      before: 'You walk the floor and try to remember what was low. A best seller turns out to be empty.',
      after: 'The Today screen lists what is about to run out. The order for it went to the supplier last night.',
    },
    {
      time: '11:30',
      before: 'A delivery arrives. The bill says 48, the carton has 44, and the driver has left.',
      after: 'The count is entered at the door against the order. The short four are flagged and a credit note is queued.',
    },
    {
      time: '2:00',
      before: 'A customer returns an item with no bill. The staff member agrees to avoid an argument.',
      after: 'The return is logged against the sale, with a reason. It is over your limit, so you approve it on your phone.',
    },
    {
      time: '5:00',
      before: 'A lapsed regular walks in after five months. Nobody knew she had stopped coming.',
      after: 'She was on the list at week six. Pooja called her, and the visit is recorded as a win-back.',
    },
    {
      time: '9:00',
      before: 'The drawer is ₹850 short. You write it off and hope it does not happen again.',
      after: 'Verity shows the three bills that do not tie. You find the wrong change in two minutes.',
    },
    {
      time: 'Month end',
      before: 'The manager works out staff incentives from a notebook. One person disputes it.',
      after: 'The sheet is ready on the 1st from recorded sales, and each person sees the same figures.',
    },
  ],

  approach: {
    heading: 'We set it up with you over four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your store actually runs, set Verity up around it, bring your data across, and then stay on while it settles in.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day in the store. Follow one delivery from the door to the shelf and one sale from the shelf to the drawer, and write down every place where a number is kept today.',
        you: 'Two to three hours of your time and your manager’s. Access to your billing app’s reports, your purchase bills and your stock list.',
        get: 'A written map of your store: product groups, suppliers and terms, staff roles, and the three or four problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your products, reorder points, supplier terms, discount limits, incentive rules and stores, and build the screens above around your terms.',
        you: 'Check the setup with your manager and tell us where a rule is wrong.',
        get: 'A working Verity with your real product groups, suppliers and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your product list, opening stock, supplier balances and customer list from the sheets and apps you use. Train the counter, the stockroom and the manager on real bills and deliveries.',
        you: 'Your product and customer lists in whatever form they exist. One hour with each role.',
        get: 'Your products, stock, suppliers and customers inside Verity, and a team that has used it on a real delivery and a real close.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first month with you, tune the reorder points and flags, and handle changes as the store grows.',
        you: 'A short monthly review of the numbers.',
        get: 'A system that keeps matching how the store runs, with someone responsible for it.',
      },
    ],
    bring: [
      'Your product list with cost and selling prices',
      'Your current stock count, even if rough',
      'Supplier names, payment terms and open bills',
      'Your discount and incentive rules as you apply them today',
      'Your staff list and shift pattern',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your store manager needs a few more, and the person who receives goods needs about an hour.',
    after: 'Nobody is hired to run Verity. Sales, receipts and counts are recorded as part of the work already done, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your store a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own stock, supplier, customer and staff records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which products have not sold in six months, and what are they worth?',
        a: '41 lines have had no sale in 180 days. Together they tie up ₹3.9 lakh at cost.',
        rows: [['Home and kitchen', '₹1.6 lakh'], ['Gifts', '₹1.1 lakh'], ['Electrical', '₹0.7 lakh'], ['Stationery', '₹0.5 lakh']],
        action: 'Create a markdown task for the manager',
      },
      {
        q: 'Which supplier has raised prices the most this quarter?',
        a: 'Metro Distributors, up 8% on steel bottles and 5% on lunch boxes. Two other suppliers are unchanged.',
        rows: [['Metro Distributors', '+6.4% avg'], ['Gupta Traders', '+1.2%'], ['Sharma Home Goods', '0%']],
      },
      {
        q: 'Who are my 20 best customers who have not come in for 60 days?',
        a: '14 of your top 20 by spend are past 60 days. Together they spent ₹2.6 lakh in the last year.',
        action: 'Assign follow-ups to the floor staff',
      },
    ],
  },

  automationHeading: 'The jobs nobody has time to remember.',
  automationLede:
    'Set once, then they run from your records. Staff still make the call or send the message. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A product falls below its reorder point',
      then: ['Checked against recent sales speed', 'Purchase order drafted for approval', 'Stock updated when goods are received'],
    },
    {
      when: 'A product has no sale for 90 days',
      then: ['Added to the slow stock list with its cost', 'Task to the manager to mark down or return', 'Outcome recorded against the product'],
    },
    {
      when: 'Goods are received that differ from the order',
      then: ['Mismatch flagged with supplier and bill', 'Credit note task opened', 'Bill held back from payment'],
    },
    {
      when: 'A supplier bill is within 5 days of its due date',
      then: ['Listed on the payment screen', 'Task to the person who pays', 'Payment recorded against the bill'],
    },
    {
      when: 'A regular customer passes their usual gap',
      then: ['Added to the win-back list', 'Task to a floor staff member', 'Outcome recorded: visited, declined or unreachable'],
    },
    {
      when: 'A discount or refund is above your limit',
      then: ['Held for approval', 'Routed to you with the reason', 'Decision recorded against the bill'],
    },
  ],

  rules: {
    heading: 'The rules a retail store has to keep up with.',
    lede:
      'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant is not rebuilding them from a bill file.',
    items: [
      {
        name: 'MRP and the Legal Metrology rules',
        what: 'Packaged goods generally must not be sold above the printed maximum retail price, and the MRP includes all taxes. State Legal Metrology departments inspect and penalise. Check the current penalties with your adviser.',
        how: 'Each product holds its MRP with the date it changed, so a new lot with a different MRP is flagged before it reaches the shelf.',
        source: {
          name: 'Lok Sabha reply on Legal Metrology (Packaged Commodities) Rules, 2025',
          url: 'https://fcainfoweb.nic.in/PMS/writereaddata/2025_LS_B_4362.pdf',
        },
      },
      {
        name: 'GST invoices and rates by product',
        what: 'Goods are taxed at rates that depend on the product, and the rate for a product can change when the GST Council revises it. Your accountant prepares and files the returns.',
        how: 'Each product record carries its tax rate with a history. Sales and purchases show the split by rate, so month end starts from clean figures.',
      },
      {
        name: 'Customer data and consent',
        what: 'Phone numbers and purchase histories are personal data. The DPDP Rules, 2025 were notified in November 2025, and most duties for businesses start on 13 May 2027.',
        how: 'Customer data sits in one permissioned place with a record of who viewed or changed it, instead of in staff phones and loose bill books.',
        source: {
          name: 'S.S. Rana & Co. on the DPDP Rules',
          url: 'https://ssrana.in/articles/meity-notifies-final-digital-personal-data-protection-rules-2025/',
        },
      },
      {
        name: 'Staff records under state shop rules',
        what: 'Most states require records of working hours, weekly offs and leave under their Shops and Establishments law. Details differ by state, so check your own.',
        how: 'Shifts, attendance and leave are recorded against each person, so the register exists without a separate notebook.',
      },
    ],
    note: 'Rules and rates change and differ by state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede:
    'A salesperson should not see supplier costs. The stock keeper does not need customer spend. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the store making money, and where is it leaking?', sees: 'Sales, margin, slow stock, shrinkage, supplier dues and every store side by side.' },
    { role: 'Store manager', question: 'What needs sorting today?', sees: 'Reorders, deliveries due, approvals waiting, staff attendance and the win-back list.' },
    { role: 'Sales staff', question: 'What does this customer usually buy?', sees: 'Customer history, what is in stock, and their own sales and incentive.' },
    { role: 'Stock keeper', question: 'What arrived and what is short?', sees: 'Purchase orders, receipts, counts, transfers and damaged goods.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Collections by mode, supplier bills and due dates, discounts, returns and the tax split by rate.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing app or machine at the counter. We agree during setup how its sales reach Verity.',
      'Your accounting software and your accountant, who still prepares your returns.',
      'WhatsApp with suppliers and customers. Your staff send the messages.',
      'Your supplier relationships. Verity records the orders, receipts and bills.',
    ],
    not: [
      'Run your billing counter or ring up sales.',
      'Take orders from customers online.',
      'Send messages to customers on its own.',
      'File tax returns or run your payroll.',
    ],
    migration:
      'We bring your product list, opening stock, supplier balances and customer list across from the sheets and apps you use now, in stages, so the store keeps trading while it happens.',
  },

  faqHeading: 'Questions retail store owners ask.',
  faqs: [
    [
      'My staff are busy at the counter. Will they have time to use it?',
      'The aim is that recording takes seconds and sits where the work already happens: the sale, the delivery and the count. We train at the counter and in the stockroom on real work, not in a classroom.',
    ],
    [
      'Does Verity replace my billing app?',
      'No. Your billing app keeps ringing up sales. During setup we agree how those sales reach Verity, and Verity gives you the picture around them: stock, suppliers, customers and staff.',
    ],
    [
      'I have 4,000 products. How do you load them?',
      'From the list you already have, usually a spreadsheet or an export from your billing app. We clean it in week 3, load it in stages and check a sample against the shelf before go-live.',
    ],
    [
      'Can it tell me about theft by staff or customers?',
      'It shows where stock does not match the book: which item, how many, what value and over what period. It does not accuse anyone. It gives you the facts so you can act on them.',
    ],
    [
      'I run two stores. Can I see them together?',
      'Yes. Each store is a location in one system. A customer is one person across stores, and stock, sales, margin and shrinkage can be compared, with transfers recorded between them.',
    ],
    [
      'Will it send messages to customers?',
      'Not by itself. Verity builds the list of customers to contact and assigns the task to a staff member, who makes the call or sends the message. The outcome is recorded.',
    ],
    [
      'Who can see my costs and margins?',
      'Only the people you allow. Access is set by role, so floor staff can see selling prices and stock but not supplier costs, and every change is recorded with who made it and when.',
    ],
    [
      'How long before I see something useful?',
      'The slow stock list and the reorder warnings need only your existing product and sales data, so they are the first things we aim to have working. Margin and shrinkage trends become reliable after a few weeks of recorded deliveries and counts.',
    ],
    [
      'What does it cost?',
      'It depends on the number of stores, users and what you want set up. Message us and we will give you a clear number after a short conversation about how your store runs.',
    ],
  ],

  related: ['supermarkets', 'grocery-stores', 'convenience-stores', 'department-stores', 'fashion-stores', 'gift-shops'],

  ctaHeading: 'Start with the stock that is not selling.',
  ctaLede:
    'Tell us how your store runs and we will show you the slow stock, the supplier gaps and the lapsed customers it would find, using your own numbers.',
};
