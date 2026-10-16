export default {
  schema: 2,
  slug: 'cosmetics-stores',
  status: 'published',
  plural: 'cosmetics stores',
  subject: 'cosmetics shop',
  checked: '15 October 2026',

  seo: {
    title: 'Cosmetics shop software for Indian retailers and wholesalers | Verity',
    description:
      'Expiry dates, fake stock, parlour credit, distributor schemes and bridal season orders: what a cosmetics shop loses each month and the Verity screens that fix it.',
    keywords: [
      'cosmetics shop management software India',
      'cosmetics expiry date tracking',
      'parlour credit ledger software',
      'distributor scheme tracking retail',
      'cosmetics wholesale and retail stock',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'orders', 'suppliers', 'logistics', 'workforce', 'ai'],

  hero: {
    eyebrow: 'Verity for cosmetics shops',
    headline: 'A thousand small packs, a credit register, and a salesman who says the scheme ends today. Verity keeps the count.',
    lede:
      'A cosmetics shop sells hundreds of low-priced items with thin margins, to walk-in buyers, regular families, parlours on credit and bridal artists buying in bulk. The loss is rarely one big mistake. It is a pack past its date, a parlour that has not paid, a scheme forgotten and a fast mover that ran out on Saturday.',
    oneLine:
      'One system that knows every pack and date on the shelf, every rupee a parlour owes, every distributor scheme and every order going out the door.',
    note: 'Your counter keeps working as it does. The bills you already make become the records the stock and credit views are built from.',
    screen: 'owner',
    screenNote: 'counter sales, credit, schemes and deliveries',
  },

  today: {
    heading: 'The shop runs on trust, speed and the owner\'s head.',
    paragraphs: [
      'A cosmetics shop sells kajal, lipstick, nail polish, face wash, creams, hair colour, bindis and bridal kits, usually from a small footprint with a deep range. Margins on each item are thin, volumes are high and customers want to see, smell and touch before they buy. The owner knows what moves, who pays late and which distributor salesman is pushing what, but nothing is written in one place.',
      'The ledger book holds the credit given to parlours and regulars. The distributor offers schemes on his own visiting days. Expiry dates are printed small on hundreds of packs. A shop boy delivers to the neighbourhood and collects cash. When the owner is away for a wedding, the shop trades but the knowledge does not travel.',
      'Meanwhile the risks are real. Press reports in 2025 and 2026 describe expired cosmetics being relabelled and resold, including through cheap bulk offers. A shop that buys the wrong lot from a cheap supplier can end up facing customers and inspectors without a paper trail.',
    ],
    stack: ['Billing software or bill book', 'Credit ledger notebook', 'Distributor scheme slips and WhatsApp', 'Stock list in Excel or memory', 'Shop boy\'s delivery list'],
    stackNote: 'Each of these works for its own job. None of them can tell you that 40 packs expire next month and Meena Beauty Parlour has owed you ₹38,000 since August.',
  },

  painsHeading: 'Where a cosmetics shop actually loses money.',
  painsLede:
    'These are the situations cosmetics shop owners describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Stock',
      title: 'Hundreds of small packs, and nobody knows the true count',
      scene:
        'Kajal in six brands, nail polish in forty shades, face washes in three sizes. The stock book was last updated in the summer. A customer asks for a shade and the helper says "finished" while it sits in the back drawer.',
      cost:
        'Every wrong "finished" is a lost sale, and every over-order ties up cash. On items priced between ₹50 and ₹300, the total value of lost small sales is large and invisible.',
      fix:
        'Every item has a record with brand, size, cost, price and location (counter, back room). Stock moves with each bill and each receipt, and a short rotating count each week keeps the numbers honest.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Packs near their date are found by accident',
      scene:
        'A lot of face wash from March shows a use-before date two months away. It sits in a carton below newer stock. A customer returns one with the date visible, and now you check the carton and find twenty more.',
      cost:
        'A pack past its date means a refund, a complaint and, if it happens often, a visit from an inspector. Stock marked down in time recovers cost. Stock that is found late is written off.',
      fix:
        'Each receipt records the batch and use-before month. Verity lists batches by date, shows what to push first and flags those inside your warning window. The markdown or return to the distributor that you choose is recorded.',
      screen: 'stock',
    },
    {
      area: 'Suppliers',
      title: 'A cheap lot from an unknown supplier may be fake or relabelled',
      scene:
        'A seller offers a famous brand\'s creams at 40% below the distributor\'s rate and asks for cash. The pack looks right. In Delhi NCR, an investigation reported in June 2026 describes expired cosmetics having their original details erased and new stickers with false dates applied.',
      cost:
        'Selling a fake or relabelled product hurts the customer, and the shop is the face of it. Reports of a ₹1.20 crore seizure in Bareilly in April 2025 show the same pattern with cosmetics and medicated soaps.',
      fix:
        'Every receipt is recorded with supplier, invoice number, batch and date. If a batch is questioned, Verity shows which supplier supplied it, where it is on the shelf and which customers bought it, so the rest can be pulled.',
      screen: 'stock',
      source: {
        name: 'ThePrint, PTI report on a Bareilly seizure, 12 April 2025',
        url: 'https://theprint.in/india/fake-cosmetics-worth-rs-1-20-crore-seized-in-ups-bareilly-1-held/2587116/',
      },
    },
    {
      area: 'Money',
      title: 'Parlours and salons buy on credit and pay when they remember',
      scene:
        'Six parlours take products every week, and the ledger has a line for each. One owes ₹38,000 since August. Another pays in lumps. The shop boy cannot remember who paid last week, and the owner is embarrassed to ask.',
      cost:
        'Example arithmetic: ten parlours each owing ₹25,000 is ₹2.5 lakh of your stock money in other people\'s hands, with no interest and a risk of not getting it back.',
      fix:
        'Each trade customer has a credit limit, outstanding balance and age of dues. Verity lists overdue accounts and holds new credit sales above the limit for your decision. Payments are recorded against the account, so the statement is always right.',
      screen: 'credit',
    },
    {
      area: 'Money',
      title: 'Regular families have a khata too, and it grows quietly',
      scene:
        'A family in the lane takes bindis, creams and hair oil on account, "I will pay at the end of the month". Some pay, some pay half, and a few drift. The ledger page is damaged by the time you check.',
      cost:
        'Small dues become big when added up, and chasing them costs goodwill. A page torn from the ledger is a loss with no trace.',
      fix:
        'Each regular customer has an account with every item taken and every payment received. Verity shows who is overdue and by how much, and assigns the follow-up to whoever knows the family.',
      screen: 'credit',
    },
    {
      area: 'Suppliers',
      title: 'Distributor schemes are promised across the counter and forgotten',
      scene:
        'The salesman says "buy 12, get 1 free" and "10% extra on this lot until the 20th". The scheme goes into the memory of whoever was at the counter. A month later the free pieces never arrived and nobody can prove the offer.',
      cost:
        'Example arithmetic: a free piece on every dozen of an item sold at ₹150 is about ₹12 per dozen, or ₹6,000 on 500 dozens. Across several brands, unclaimed benefits are a real sum.',
      fix:
        'Each scheme is recorded with the product, terms, dates and the salesman\'s name. Verity counts qualifying purchases, shows what is due in free stock or credit and raises a task to claim before the scheme ends.',
      screen: 'schemes',
    },
    {
      area: 'Suppliers',
      title: 'Ordering happens when the salesman visits, not when stock runs low',
      scene:
        'The distributor\'s man comes on Tuesday. You order what you remember is low and what he suggests. Thursday the kajal is out, and it will not come until next Tuesday. Meanwhile three cartons of a slow cream arrived that you did not need.',
      cost:
        'Stock-outs on daily movers cost sales, and pushed slow stock costs cash. Both come from ordering without sell-through data.',
      fix:
        'Each item has a sales rate, a reorder level and a supplier visit pattern. Verity prepares a suggested order before each visit, based on what is actually selling, with the days left on every line.',
      screen: 'schemes',
    },
    {
      area: 'Customers',
      title: 'The bridal and wedding season arrives with no plan',
      scene:
        'A makeup artist books bridal kits for four weddings in November and asks for a bulk rate. A family wants twelve bridal sets for a wedding in a fortnight. Karwa Chauth and Diwali bring their own surges. Each is handled on a phone call.',
      cost:
        'Bulk and bridal orders are the highest-value sales in the year. A missed order or a late kit is a lost customer and a lost recommendation to the next bride.',
      fix:
        'Each bulk or bridal order is a record with items, quantities, date needed, advance and balance. Verity checks it against stock and distributor lead times, and flags the lines you need to order now.',
      screen: 'season',
    },
    {
      area: 'Customers',
      title: 'Makeup artists and bridal clients are not remembered between seasons',
      scene:
        'A makeup artist who bought ₹60,000 last wedding season does not hear from you this year, and goes to a shop that called. A bride\'s family who liked your service never receives a mention of a new range.',
      cost:
        'Repeat trade buyers are the most valuable customers a small shop has. Without records, you depend on them remembering you.',
      fix:
        'Trade buyers and bulk customers have a record with past orders, preferences and best seasons. Verity lists those who bought last season and have not yet been in touch, with a follow-up task for the owner.',
      screen: 'season',
    },
    {
      area: 'Delivery',
      title: 'Home delivery runs on WhatsApp and the shop boy\'s memory',
      scene:
        'A customer messages for two creams and a kajal. The boy takes them on his bike with other orders. He collects cash, but the amount is not written down until evening. One order is forgotten altogether.',
      cost:
        'A forgotten delivery loses a regular customer. Cash held by a delivery person for a day is cash with no record.',
      fix:
        'Each delivery is an order with items, address and payment mode. Verity builds the day\'s run, tracks which are done and shows cash collected per person against what is due.',
      screen: 'delivery',
    },
    {
      area: 'Compliance',
      title: 'Different tax rates and changing MRPs lead to billing errors',
      scene:
        'Hair oil, shampoo and talc are taxed at a lower rate since September 2025, while face creams and lip balms stay higher. New stock arrives with a different MRP from the older stock on the shelf, and the helper bills the old price.',
      cost:
        'Selling above the printed MRP is an offence, and billing a wrong tax rate causes problems for the accountant at filing time.',
      fix:
        'Each item carries its tax category and each batch carries its own MRP. Verity shows the MRP of the batch being sold and the tax split on the day\'s sales, so the accountant\'s numbers are clean.',
      screen: 'stock',
      source: {
        name: 'Khaitan & Co, GST rate changes and impact',
        url: 'https://khaitanco.com/thought-leadership/GST-Rate-Changes-and-impact-under-Regulatory-laws',
      },
    },
    {
      area: 'People',
      title: 'Counter staff and shop boys: pilferage, absences and no way to see who sold what',
      scene:
        'Small items such as lipsticks, kajal and perfume testers are easy to take. The owner suspects shrinkage but cannot say when it began or who was on duty. One helper is irreplaceable because only she knows where things are.',
      cost:
        'Example arithmetic: 2% shrinkage on ₹50 lakh of sales is ₹1 lakh a year, and it grows unnoticed in a business with many small items.',
      fix:
        'Shifts and attendance are recorded for each person, sales are tied to the person at the counter, and the weekly rotating count notes differences by shelf and shift. The pattern is visible without accusing anyone.',
      screen: 'owner',
    },
    {
      area: 'Customers',
      title: 'Opened items come back and reactions are not recorded',
      scene:
        'A customer returns a hair colour that irritated her scalp. Another says the cream gave her a rash. The helper refunds both and puts the pack back on the shelf.',
      cost:
        'An opened product must not be resold, and a reaction is a safety matter. Without a record you cannot tell if the problem is one batch.',
      fix:
        'Returns are recorded against the sale, batch and reason. A reaction is flagged on the batch, so if more come in, the batch is listed for withdrawal and the distributor is told.',
      screen: 'stock',
    },
    {
      area: 'Owner',
      title: 'When you are away, the shop still sells but you cannot see anything',
      scene:
        'You are at a family wedding for three days. You call the shop at lunch and again in the evening. The sales figure is a verbal estimate, and you do not know what was sold on credit.',
      cost:
        'Owners who cannot step away work more hours than the business needs and make decisions without information.',
      fix:
        'The Today screen shows sales, credit given, cash and UPI received and items running short, from the day\'s records. Approvals above your limits reach you, and a manager can run the shop with the same view.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '₹1.20 crore',
      text: 'of counterfeit and relabelled cosmetics and other products were seized from one warehouse in Bareilly on 11 April 2025, with printing equipment and forged expiry date stamps.',
      source: { name: 'ThePrint, PTI report', year: '2025', url: 'https://theprint.in/india/fake-cosmetics-worth-rs-1-20-crore-seized-in-ups-bareilly-1-held/2587116/' },
    },
    {
      figure: '₹500 crore',
      text: 'is the headline figure in an India Today investigation of Delhi NCR networks said to erase manufacturing details, paste fake expiry stickers and sell through social media discounts to parlours and consumers.',
      source: { name: 'Business Today, India Today SIT report', year: '2026', url: 'https://www.businesstoday.in/bt-tv/whats-hot/video/india-todays-sit-sting-delhis-rs-500-cr-expired-cosmetics-racket-selling-fake-branded-products-536320-2026-06-13' },
    },
    {
      figure: '5%',
      text: 'GST now applies to hair oil, shampoo, toilet soap, face powder and talcum powder, from 22 September 2025. Face creams, sunscreen, moisturising lotions and lip balms are reported to stay at 18%.',
      source: { name: 'Khaitan & Co', year: '2025', url: 'https://khaitanco.com/thought-leadership/GST-Rate-Changes-and-impact-under-Regulatory-laws' },
    },
    {
      figure: '31 July 2025',
      text: 'is when amendments to the Cosmetics Rules, 2020 were published. They define "use before" as before the first day of the labelled month, and "expiry date" as the last day of that month.',
      source: { name: 'ChemLinked', year: '2025', url: 'https://cosmetic.chemlinked.com/news/cosmetic-news/india-publishes-2025-amendments-to-the-cosmetics-rules-2020' },
    },
  ],
  factsNote:
    'The seizure and the investigation are news reports and the ₹500 crore figure is a headline whose calculation is not explained in the report. The GST items are from a law firm summary and should be checked for each product. They show the scale of the risk, not what happens in your shop.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your shop\'s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Shop / Today',
      meta: 'Main counter and godown',
      heading: 'The owner\'s view, wherever you are',
      caption:
        'Sales, credit given, cash and UPI, items short and dues overdue on one screen. It replaces the evening phone call and the guess about what was sold on credit.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales today', value: '₹46,800', note: '212 bills' },
            { label: 'On credit', value: '₹7,300', note: '9 accounts' },
            { label: 'Items short', value: '12', note: 'under 3 days of stock' },
            { label: 'Overdue dues', value: '₹1.9 lakh', note: '7 accounts' },
          ],
        },
        { type: 'title', text: 'Sales by person, today' },
        {
          type: 'bars',
          items: [
            { label: 'Rekha (counter)', value: 80, display: '₹21,600' },
            { label: 'Imran (counter)', value: 58, display: '₹15,700' },
            { label: 'Sunil (delivery)', value: 35, display: '₹9,500' },
          ],
        },
        { type: 'alert', text: 'Credit sale above limit: Meena Beauty Parlour, ₹6,200. Waiting for you.', action: 'Decide' },
        {
          type: 'list',
          items: [
            { name: 'Weekly count: nail polish shelf', meta: 'Book 212, counted 205', tag: ['Check', 'flag', 'Explained', 'ok'] },
            { name: 'Kajal, black (3 brands)', meta: '14 left, selling 9 a day', tag: ['Reorder', 'late', 'Ordered', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Stock and dates',
      meta: 'Counter, back room, batches',
      heading: 'Every pack, its batch and when it needs to go',
      caption:
        'Items with batch, use-before month, MRP and supplier. Near-date batches are listed with what to push first, and returns and reactions are tied to the batch.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Batch', 'Use before', 'Units', 'Action'],
          rows: [
            ['Face wash 100 ml', 'FW-24', 'Dec 2026', '42', ['Push first', 'late', 'Marked down', 'ok']],
            ['Kajal, black', 'KJ-17', 'Mar 2027', '110', ['OK', 'ok']],
            ['Hair colour, brown', 'HC-09', 'Nov 2026', '18', ['Return?', 'flag', 'Credit asked', 'info']],
            ['Night cream 50 g', 'NC-31', 'Jul 2027', '64', ['OK', 'ok']],
            ['Lip balm', 'LB-12', 'Jan 2027', '75', ['Watch', 'flag']],
          ],
        },
        { type: 'alert', text: 'Hair colour HC-09: 2 reactions reported this month. 18 packs left on shelf.', action: 'Withdraw batch' },
      ],
    },
    {
      id: 'credit',
      title: 'Credit and dues',
      meta: 'Parlours and regular families',
      heading: 'Who owes what, and for how long',
      caption:
        'Each account with limit, balance and age. Overdue accounts are listed with a follow-up on the right person, and payments are recorded as they arrive.',
      blocks: [
        {
          type: 'table',
          cols: ['Account', 'Limit', 'Owes', 'Oldest due', 'Status'],
          rows: [
            ['Meena Beauty Parlour', '₹30,000', '₹38,000', '62 days', ['Over limit', 'late', 'Paid ₹15,000', 'ok']],
            ['Glow Studio', '₹25,000', '₹21,500', '35 days', ['Call', 'flag', 'Promised Fri', 'info']],
            ['Sharma family', '₹5,000', '₹3,200', '18 days', ['OK', 'ok']],
            ['Rani Makeup Academy', '₹40,000', '₹44,000', '48 days', ['Over limit', 'late']],
          ],
        },
        { type: 'alert', text: '7 accounts are past their credit terms, ₹1.9 lakh in total.', action: 'Assign calls' },
      ],
    },
    {
      id: 'schemes',
      title: 'Distributors and schemes',
      meta: 'This week',
      heading: 'What is on offer, what you have bought and what is owed to you',
      caption:
        'Each distributor\'s open schemes, your purchases against them, a suggested order before the next visit and what you owe in payments.',
      blocks: [
        {
          type: 'table',
          cols: ['Distributor', 'Scheme', 'Bought', 'Due to you', 'Status'],
          rows: [
            ['Gupta Traders', 'Buy 12 get 1, nail polish', '84 dozen', '7 free dozen', ['Claim', 'flag', 'Received', 'ok']],
            ['Aarav Distributors', '10% extra on hair colour', '₹80,000', '₹8,000 credit', ['Ends 20 Oct', 'late', 'Claimed', 'ok']],
            ['Sai Cosmetics', 'Free tester set', '₹55,000', '1 set', ['Open', 'info']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Suggested order for Tuesday visit', meta: 'Kajal, lip balm, face wash and 9 other lines', tag: ['Review', 'info', 'Sent', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'season',
      title: 'Bridal and bulk orders',
      meta: 'Season ahead',
      heading: 'Bridal kits and bulk orders, checked against stock before you promise',
      caption:
        'Each order with items, date needed, advance and balance, and the lines that must be ordered now to meet it. Trade buyers who bought last season appear as a follow-up list.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Needs ordering',
              cards: [
                { title: 'Rani Makeup Academy, 12 bridal sets', meta: 'Needed 4 Nov. 5 lines short', tag: ['Order', 'flag', 'Ordered', 'ok'] },
                { title: 'Priya Singh, 4 weddings', meta: 'Needed 9 Nov. Advance ₹10,000', tag: ['Quote', 'info', 'Confirmed', 'ok'] },
              ],
            },
            {
              name: 'Last season buyers not yet called',
              cards: [
                { title: 'Aisha Khan, makeup artist', meta: 'Spent ₹60,000 last season', tag: ['Call', 'late', 'Called', 'ok'] },
                { title: 'Glow Studio', meta: 'Spent ₹44,000', tag: ['Call', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'delivery',
      title: 'Deliveries',
      meta: 'Today\'s runs',
      heading: 'Each home delivery, its cash and who carried it',
      caption:
        'Orders for the day with items, area and payment mode, status per order, and the cash each delivery person should hand in.',
      blocks: [
        {
          type: 'table',
          cols: ['Order', 'Area', 'Items', 'Pay', 'Status'],
          rows: [
            ['D-412', 'Lal Kothi', '2 creams, kajal', 'Cash ₹640', ['Out', 'info', 'Delivered', 'ok']],
            ['D-413', 'Model Town', 'Hair colour x3', 'UPI', ['Packed', 'flag', 'Out', 'info']],
            ['D-414', 'Lal Kothi', 'Bridal kit', 'Paid advance', ['Not picked', 'late', 'Delivered', 'ok']],
            ['D-415', 'Civil Lines', 'Face wash', 'Cash ₹210', ['Delivered', 'ok']],
          ],
        },
        { type: 'alert', text: 'Sunil collected ₹1,850 cash. ₹850 has been handed in.', action: 'Check' },
      ],
    },
  ],

  dayHeading: 'The same Thursday, before and after.',
  dayLede: 'The shop does not change. What changes is that the small things leave a record and the record does the chasing.',
  day: [
    {
      time: '9:30',
      before: 'You open the shop and try to remember what ran short yesterday.',
      after: 'The Today screen lists 12 items under three days of stock. The kajal is already on a suggested order.',
    },
    {
      time: '12:00',
      before: 'A parlour owner asks for more stock. You are unsure what she owes and give it on credit.',
      after: 'The account shows ₹38,000 outstanding, 62 days old. The sale is held for your decision, and you ask her to pay first.',
    },
    {
      time: '2:30',
      before: 'A customer returns a face wash with a date a month away. You find twenty more in the back.',
      after: 'The batch was on the near-date list from last week. It is already marked down and at the front.',
    },
    {
      time: '5:00',
      before: 'The distributor\'s salesman says a scheme ends today. You cannot recall what you bought.',
      after: 'The scheme record shows your purchases against the offer. You top up the missing quantity and note the free stock due.',
    },
    {
      time: '8:00',
      before: 'The delivery boy hands over cash and says roughly what he collected.',
      after: 'The delivery list shows each order, its payment mode and the cash expected.',
    },
    {
      time: 'Month end',
      before: 'Credit dues, scheme benefits and the shrinkage figure are worked out from the book.',
      after: 'All three are ready on the 1st from the records, with the overdue list assigned.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your shop buys, sells, gives credit and delivers, set Verity up around that, bring your data across and then stay on.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day at the shop and the godown. Watch a bill, a delivery, a credit sale and a distributor visit, and see how the ledger, scheme slips and stock list are kept now.',
        you: 'Two hours from you and an hour with your senior helper. Your credit ledger, distributor list and stock sheet.',
        get: 'A written map of your range, suppliers, credit customers and delivery routes, and the ranked list of problems we start with.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your item list with batch and date fields, credit limits and terms, scheme records, reorder levels, delivery areas and the screens above in your own words.',
        you: 'Check the credit limits and reorder levels against how you really trade. Tell us where a rule is wrong.',
        get: 'A working Verity holding your items, accounts, distributors and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your ledger balances, item list with stock, open orders and supplier dues. Train counter staff and the delivery person with live bills, not slides.',
        you: 'Your ledger, stock sheet and scheme notes in whatever form they exist. Half an hour with each person.',
        get: 'Your accounts and stock inside Verity, and staff who have used it on real sales.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through the next wedding and festive season. Review near-date lists and overdue accounts with you, and adjust when you add a counter or a distributor.',
        you: 'A short monthly review of dues, dates and schemes.',
        get: 'A system that keeps matching how the shop runs, with someone responsible for it.',
      },
    ],
    bring: [
      'Your credit ledger, parlours and regular families first',
      'Your item list or the last stock count you did',
      'Distributor names, schemes in force and unpaid bills',
      'Your delivery areas and who delivers',
      'Your staff list with shifts',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, most of it in the first week. Your senior helper needs a few more.',
    after: 'Nobody is hired to run Verity. Sales, receipts and payments are recorded as part of work already done, and the stock, credit and scheme views come from those records.',
  },

  ai: {
    heading: 'Ask your shop a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own sales, stock, credit and scheme records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which packs expire in the next two months?',
        a: '6 batches, 291 packs, ₹58,000 at cost. Face wash FW-24 and hair colour HC-09 are the biggest.',
        rows: [['Face wash FW-24', '42 packs'], ['Hair colour HC-09', '18 packs'], ['Lip balm LB-12', '75 packs'], ['Others', '156 packs']],
        action: 'Create markdown and return tasks',
      },
      {
        q: 'Which parlours owe us more than 30 days?',
        a: '4 accounts, ₹1.3 lakh in total. Two are above their credit limit.',
        rows: [['Meena Beauty Parlour', '₹38,000'], ['Rani Makeup Academy', '₹44,000'], ['Glow Studio', '₹21,500'], ['Others', '₹27,500']],
        action: 'Assign follow-up calls',
      },
      {
        q: 'What schemes will I miss if I do not order this week?',
        a: 'Aarav Distributors\' 10% extra on hair colour ends 20 Oct. You are ₹20,000 short of the target to qualify.',
        action: 'Add to Tuesday\'s suggested order',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still make the calls and send the messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A pack batch is two months from its date',
      then: ['Added to the push-first list', 'Markdown or return option sent to the owner', 'Decision recorded on the batch'],
    },
    {
      when: 'A credit account passes 30 days',
      then: ['Listed with the balance and last payment', 'Task to whoever knows the account', 'Outcome recorded: paid, promised or disputed'],
    },
    {
      when: 'A credit sale would go over the limit',
      then: ['Held for the owner\'s decision', 'Shown with the account\'s history', 'Decision recorded on the bill'],
    },
    {
      when: 'An item reaches its reorder level',
      then: ['Added to the next distributor order', 'Checked against open schemes', 'Receipt matched to the order when stock arrives'],
    },
    {
      when: 'A reaction or complaint is recorded on a batch',
      then: ['Batch flagged on the shelf list', 'Owner told if a second report arrives', 'Withdrawal and distributor notice recorded'],
    },
    {
      when: 'A bridal or bulk order is confirmed',
      then: ['Items checked against stock', 'Short lines added to the order list', 'Balance reminder set before the date needed'],
    },
  ],

  rules: {
    heading: 'The rules a cosmetics shop has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules lean on in order, so your accountant is not rebuilding them from a bill book.',
    items: [
      {
        name: 'MRP and pack declarations',
        what: 'Under the Legal Metrology (Packaged Commodities) Rules, 2011, packs carry declarations including the maximum retail price inclusive of all taxes. Selling above the MRP is an offence, and state Legal Metrology departments inspect shops.',
        how: 'Each batch carries its own MRP, so the counter sees the right price for the pack in hand and the old stock is not billed at the new price.',
        source: { name: 'S.S. Rana & Co. on retail package labelling', url: 'https://ssrana.in/articles/labelling-on-retail-packages/' },
      },
      {
        name: 'Cosmetics Rules, 2020: expiry and batch',
        what: 'Amendments published on 31 July 2025 define "use before" as before the first day of the labelled month and "expiry date" as the last day of that month. Packs generally carry a batch number and a date, with exceptions for very small packs.',
        how: 'Batch and date are recorded when stock arrives, and any pack past its date is listed before it reaches a customer.',
        source: { name: 'ChemLinked on the 2025 amendments', url: 'https://cosmetic.chemlinked.com/news/cosmetic-news/india-publishes-2025-amendments-to-the-cosmetics-rules-2020' },
      },
      {
        name: 'GST rates by product',
        what: 'From 22 September 2025, hair oil, shampoo, toilet soap, face powder and talcum powder are reported at 5%, while face creams, sunscreen, moisturising lotions and lip balms stay at 18%. Other items differ.',
        how: 'Each item carries its tax category, and the day\'s sales show the split your accountant will need.',
        source: { name: 'Khaitan & Co', url: 'https://khaitanco.com/thought-leadership/GST-Rate-Changes-and-impact-under-Regulatory-laws' },
      },
      {
        name: 'Shop licence and staff records',
        what: 'Most states require a shop registration under their Shops and Establishments rules, with records of hours, weekly offs and leave. Details differ by state.',
        how: 'Shifts, attendance and leave, including for the delivery person, are recorded against each name, so the register exists without a separate notebook.',
      },
    ],
    note: 'Rules change and differ by state and by product. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A new helper should not see cost prices or credit balances. The delivery person should see only his runs. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'What sold, who owes me and what is about to expire?', sees: 'Sales, credit given and overdue, near-date batches, schemes and shrinkage.' },
    { role: 'Counter staff', question: 'Do we have it, and at what price?', sees: 'Item records with MRP, location and stock, and their own sales.' },
    { role: 'Buyer or manager', question: 'What should I order and what is the scheme?', sees: 'Sales rate, reorder levels, suggested orders and open schemes.' },
    { role: 'Delivery person', question: 'What goes out and what do I collect?', sees: 'Own runs, items, addresses and cash expected.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Sales by tax category, parlour dues, distributor payables and scheme credits.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing software or counter system. We agree during setup how sales reach Verity.',
      'Your distributors and their salesmen, who keep visiting. Verity gives you the order and the scheme before they arrive.',
      'WhatsApp for customers and parlours. Staff send the message, Verity tells them who and when.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Run your billing counter.',
      'Take orders from the public online.',
      'Send messages or offers to customers on its own.',
      'Run payroll or prepare tax returns.',
    ],
    migration:
      'We bring your credit ledger, item list and stock, distributor details and open orders across from the notebooks, sheets and software you use now, in stages, so the shop keeps trading while it happens.',
  },

  faqHeading: 'Questions cosmetics shop owners ask.',
  faqs: [
    [
      'I have thousands of small items. Where do we start?',
      'With the fast movers and the items with dates near. We bring the rest in over the weeks, a shelf at a time, while the shop keeps trading. The first aim is to stop the stock-outs and the expiry surprises.',
    ],
    [
      'Will my helpers really record batch and date?',
      'It is recorded when stock arrives, by the person who unpacks it, so it takes seconds per line. Counter staff only see the price and stock, and bills carry the batch you sell from.',
    ],
    [
      'Can it manage the credit I give to parlours?',
      'Yes. Each account has a limit, balance and age of dues. Sales above the limit wait for your decision, payments are recorded against the account, and overdue accounts become follow-up tasks.',
    ],
    [
      'Does it replace my billing software?',
      'No. Your billing keeps working. We agree during setup how bills and payments reach Verity, which then holds the item history, credit and schemes.',
    ],
    [
      'Can it track distributor schemes?',
      'Yes. A scheme is a record with its terms and dates. Verity counts qualifying purchases and shows what is due as free stock or credit, then raises a claim task before the end date.',
    ],
    [
      'Will it help spot fake or relabelled stock?',
      'It does not inspect products. It records the supplier, invoice and batch of everything you receive, so a questioned batch can be traced and the rest pulled from the shelf and the customers told.',
    ],
    [
      'Can it handle my delivery boy\'s cash?',
      'Yes. Each delivery is an order with a payment mode. Verity shows the cash each person should hand in against the deliveries completed.',
    ],
    [
      'Who can see my costs and credit balances?',
      'Only the people you allow. Access is set by role, so counter staff see selling prices while cost prices and credit balances stay with you. Every change is recorded with who made it and when.',
    ],
    [
      'What does it cost?',
      'It depends on the size of the shop, staff and what you want set up. Message us and we will give you a clear number after a short conversation about how your shop runs.',
    ],
  ],

  related: ['beauty-stores', 'salons', 'convenience-stores', 'wholesalers', 'gift-shops', 'pharmacies'],

  ctaHeading: 'Start with the parlours that owe you money.',
  ctaLede:
    'Tell us how your shop buys, sells and gives credit, and we will show you the overdue accounts, near-date packs and missed schemes it would find, using your own numbers.',
};
