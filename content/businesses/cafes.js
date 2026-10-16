export default {
  schema: 2,
  slug: 'cafes',
  status: 'published',
  plural: 'cafés',
  subject: 'café',
  checked: '15 October 2026',

  seo: {
    title: 'Café management software for Indian cafés | Verity',
    description:
      'The 15 quiet leaks in a café, from milk loss and unsold pastries to rosters that ignore footfall, what each costs, and the Verity screens that fix them.',
    keywords: [
      'cafe management software India',
      'cafe inventory and milk wastage tracking',
      'cafe staff roster by footfall',
      'cafe regulars and loyalty tracking',
      'multi-outlet cafe software',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'workforce', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for cafés',
    headline: 'A café sells a thousand small things a day. The profit is in the cups you never count.',
    lede:
      'A café runs on small tickets and high volume. Every extra splash of milk, every remade latte, every tray of croissants that goes in the bin at 9 pm is small. Together they decide whether the month ends in profit. Verity connects the cup, the shelf, the roster and the regular, so you can see each leak while it is still cheap to fix.',
    oneLine:
      'One system that knows every regular, every litre of milk, every barista shift and every machine, and tells you what needs attention before the day is over.',
    note: 'Built for a counter that has no time for data entry. The records come from the orders and deliveries you already handle.',
    screen: 'owner',
    screenNote: 'drinks, bakes, channels, outlets and staff',
  },

  today: {
    heading: 'Most cafés are busy all day and still unsure where the money went.',
    paragraphs: [
      'The counter is easy to see. The queue at 9 am, the laptop crowd at 3 pm, the Saturday brunch rush. What is hard to see is everything behind it: how much milk went into drinks and how much into the drain, which pastries sold out by noon and which came back unsold, which barista is fastest at peak, and whether the bean price you paid in July is still what you pay.',
      'That information exists in pieces. The billing screen knows sales. The supplier’s invoices sit in a folder. The roster is a photo in a WhatsApp group. The espresso machine’s last service is written on a sticker. The owner, who is often also the manager and sometimes the barista, holds the rest in memory.',
      'Published figures for independent cafés put net margins in a narrow band, often five to fifteen percent of sales. In a business that thin, a few points lost to waste, idle hours or a price rise you missed are the difference between a good month and a bad one.',
    ],
    stack: ['Billing screen at the counter', 'Supplier invoices and delivery slips', 'Excel or notebook for stock', 'WhatsApp roster and supplier chats', 'Aggregator tablet and dashboards'],
    stackNote: 'Each one does its own job well enough. None of them talk to each other, and nobody has time to join them.',
  },

  painsHeading: 'Where a café actually loses money.',
  painsLede:
    'These are the situations café owners and managers describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Regulars',
      title: 'Regulars stop coming and nobody notices',
      scene:
        'The man who ordered a flat white at 8:40 every weekday has not been in for three weeks. The barista who knew his order moved to the evening shift. Nobody connects the two, and he has found a new place near his office.',
      cost:
        'Example arithmetic: 150 weekday regulars spending ₹220 a visit, three visits a week, is about ₹5.1 lakh a month. Losing one in five without noticing is over ₹1 lakh a month.',
      fix:
        'Orders linked to a customer record build each person’s usual visit pattern and usual order. When someone goes quiet, they appear on a list with their last visit and favourite drink, and a follow-up task goes to the barista or manager who knows them.',
      screen: 'regulars',
    },
    {
      area: 'Regulars',
      title: 'Loyalty stamps on paper, free drinks nobody counts',
      scene:
        'A card with nine stamps and a signature. Cards get lost, stamps get forged, the tenth coffee is given free by whoever is on the counter, and the café has no idea how many free drinks it gave this month or to whom.',
      cost:
        'A loyalty scheme should bring people back. Without a count it is only a discount nobody approved, and you cannot tell if it works.',
      fix:
        'Visits and free rewards are recorded on the customer. Verity shows rewards given and redeemed by week and by outlet, and who is one visit away from a reward, so the scheme is measured rather than assumed.',
      screen: 'regulars',
    },
    {
      area: 'Bar',
      title: 'Remakes, spills and milk that goes down the drain',
      scene:
        'A wrong order is remade and the first cup is poured out. A pitcher of steamed milk is left over. A new barista over-pours syrup. The milk delivery looks full on Monday and short by Thursday.',
      cost:
        'One published estimate says 3 to 8 percent of beverage ingredients can be lost to inefficient operations. Example arithmetic: ₹1.8 lakh of monthly milk, beans and syrup at 6 percent loss is ₹10,800 a month.',
      fix:
        'Remakes and wasted batches are logged in two taps with a reason. Verity compares what sales say should have been used with what stock says was used, per ingredient and per shift, so a drifting number shows within days.',
      screen: 'drinks',
      source: { name: 'Restaurant India, How Cafés Are Winning the War on Waste, 2026', url: 'https://www.restaurantindia.in/article/how-caf-s-are-winning-the-war-on-waste.16904' },
    },
    {
      area: 'Bakes',
      title: 'Pastries and sandwiches that go unsold at close',
      scene:
        'You bake or buy forty croissants for a Saturday and sell twenty-six. The rest are day-old by Sunday. Weekday mornings the display is bare by 11 am and you turn people away.',
      cost:
        'Unsold fresh items are cost with no sale, and a sold-out display at 11 am is a sale you never made. Both come from guessing the day’s quantity.',
      fix:
        'Each item’s opening count, sales and closing count are recorded. Verity shows sell-through by item, weekday and hour, so tomorrow’s order and bake quantity follow the pattern instead of a hunch.',
      screen: 'drinks',
    },
    {
      area: 'Stock',
      title: 'Oat milk finishes on Sunday morning',
      scene:
        'Beans, cups, lids, syrups and alternative milks are counted by eye. The supplier delivers Tuesday and Friday. Sunday brunch is the biggest day, and the oat milk ran out on Saturday night.',
      cost:
        'A guest who orders a plant-based latte and is told no usually orders something else, or leaves. Over-ordering the other way ties up cash in stock that expires.',
      fix:
        'Every item has a reorder point based on real use. Verity checks the stock against the coming weekend’s usual demand and drafts an order in time for the next delivery slot.',
      screen: 'stock',
    },
    {
      area: 'Suppliers',
      title: 'Bean, milk and packaging prices move and the menu does not',
      scene:
        'The roaster raises the price of the house blend. The dairy changes its rate. Takeaway cups cost more. Each is a small note on an invoice, and the menu price has not changed in a year.',
      cost:
        'Costa Coffee India reported its gross margin slipping from 76.8 to 75.4 percent in FY25, which it linked to coffee bean and raw material inflation. A single café has far less room to absorb that.',
      fix:
        'Every purchase records the rate. Verity shows the price trend per item and per supplier, flags a rise beyond your limit, and shows which drinks are affected so you can reprice or switch.',
      screen: 'stock',
      source: { name: 'Franchise India on Costa Coffee India, FY25', url: 'https://www.franchiseindia.com/index.php/insights/en/news/costa-coffee-india-reports-31-revenue-jump-in-fy25-but-faces-margin-pressure.56964' },
    },
    {
      area: 'Suppliers',
      title: 'Short deliveries and invoices nobody checks',
      scene:
        'The milk crate holds 18 litres, the slip says 24. The roaster’s statement lists a bag nobody remembers receiving. The person who signs the slip is the barista who is already in the middle of a rush.',
      cost:
        'You pay for goods that never arrived, and your accountant spends hours rebuilding what was delivered against what was billed.',
      fix:
        'Deliveries are received against the order with the quantity that actually came. Verity compares order, receipt and invoice and flags any mismatch before the bill is paid.',
      screen: 'stock',
    },
    {
      area: 'People',
      title: 'The roster does not follow the footfall',
      scene:
        'Three baristas are on from 9 to 5 because that is how the roster has always been. The rush is 8:30 to 10:30 and again at 4. Between them two people stand idle, and on Saturday morning there are too few hands.',
      cost:
        'Labour generally takes about a quarter to a third of sales in a café. Wages paid for quiet hours and overtime paid for rushes both come straight out of a thin margin.',
      fix:
        'Orders by hour show the real shape of each weekday. Verity lays that against the shift roster, shows the hours that are over or under staffed, and lets the manager move shifts before the week starts.',
      screen: 'roster',
      source: { name: 'Restaurant India, Cafe Profit Margin in India, 2026', url: 'https://www.restaurantindia.in/article/cafe-profit-margin-in-india-what-to-realistically-expect.16906' },
    },
    {
      area: 'People',
      title: 'Baristas leave and the drinks leave with them',
      scene:
        'A good barista resigns. The new hire has two days of training, makes the cortado differently, and regulars say the coffee tastes off. Nobody wrote down the standard dose, the milk temperature or the steps.',
      cost:
        'Inconsistent drinks lose regulars quietly, and every exit costs training time and the lost output of someone half-trained during a rush.',
      fix:
        'Recipes, doses and the closing checklist live as records, and each person’s training is recorded with who signed them off. A new barista works through a checklist, and the manager sees who is cleared for which station.',
      screen: 'roster',
    },
    {
      area: 'Equipment',
      title: 'The machine fails on the busiest morning',
      scene:
        'The grinder drifts and shots run too fast. The water filter was due a change in August. The espresso machine stops at 9:15 on a Saturday because the group head gasket was never replaced.',
      cost:
        'A café without its machine is a café without its main product. A call-out on a rush day costs more than the same visit booked in advance, and lost sales that morning are gone.',
      fix:
        'Each machine, grinder, fridge and filter is an asset record with its service history and next due date. Verity raises a maintenance task before it is due and keeps the vendor’s number and past visits on the record.',
      screen: 'upkeep',
    },
    {
      area: 'Compliance',
      title: 'Licences, music rights and daily hygiene logs live in different places',
      scene:
        'The food licence certificate is framed on the wall. The health trade licence renewal is in somebody’s phone. Nobody is sure the music playing in the café is covered. Fridge temperatures are written on a sheet that is only filled in before an inspection.',
      cost:
        'Fines, a notice or a closure order, and a scramble whenever an officer walks in. Music rights bodies also pursue venues that play recorded or live music without a licence.',
      fix:
        'Each licence, certificate and renewal is a record with an expiry date and an owner. Daily checks such as fridge temperature and cleaning are tasks signed off at the counter, so the record exists when asked for.',
      screen: 'upkeep',
    },
    {
      area: 'Money',
      title: 'Delivery apps take a share and the dashboard shows revenue, not profit',
      scene:
        'A ₹320 cold coffee ordered on a delivery app leaves you with far less after the platform’s commission, the discount you funded and packaging. The dashboard celebrates the sale.',
      cost:
        'Example arithmetic: if a ₹320 order leaves ₹210 after commission, discount and packaging, and the drink costs ₹90 to make and pack, the order earns ₹120 against ₹230 for the same drink at the counter.',
      fix:
        'Sales are tagged by channel: counter, table, takeaway and each delivery app. Verity applies your commission and discount rules to show what each channel actually leaves, so you can see which orders are worth taking.',
      screen: 'owner',
    },
    {
      area: 'Money',
      title: 'Comps, staff drinks and discounts add up unseen',
      scene:
        'A friend of the owner gets a free brownie. Staff make themselves coffee all day. A manager gives 20 percent off to a table of ten. Each is small and human, and together they are a line on your profit and loss that nobody owns.',
      cost:
        'Margin lost and a door open to misuse, with no way to see patterns by person, shift or outlet.',
      fix:
        'Discounts and comps above a limit need a one-tap approval with a reason. Staff drinks have an allowance and are recorded. Verity totals all of it by person and shift so patterns appear.',
      screen: 'owner',
    },
    {
      area: 'Money',
      title: 'Day-end takings do not tie to the orders',
      scene:
        'At closing, cash, card and UPI are counted against the billing report and are off by a few hundred rupees. The barista who closed cannot say if a drink was not billed, a refund was given or the float was wrong.',
      cost:
        'Small daily gaps compound, and more importantly the owner stops trusting the numbers on the screen.',
      fix:
        'The day’s orders by payment mode are compared with what was collected. A mismatch is flagged with the shift and amount, and the closing person records the reason.',
      screen: 'owner',
    },
    {
      area: 'Sales',
      title: 'Birthdays, meetups and office orders get lost on WhatsApp',
      scene:
        'A request for a table of fifteen on Sunday arrives on Instagram. An office manager asks for thirty coffees for a 10 am meeting. A book club wants a monthly slot. The replies are late, and the details are in three chats.',
      cost:
        'Group bookings and corporate orders are the largest tickets a café sees. They are lost to slow replies and mixed-up details far more often than to price.',
      fix:
        'Each enquiry is a record with an owner, a date, the headcount, a quote and a next step. Verity lists the ones with no reply and tells the person responsible. Staff still reply to the guest, and the outcome is recorded.',
      screen: 'enquiries',
    },
    {
      area: 'Owner',
      title: 'Quiet hours, more outlets and no clear picture',
      scene:
        'You pay rent for a long day, but 3 to 5 pm brings only a handful of tables. A second outlet or a kiosk reports in a different way, and a seasonal drink works in one place and not the other.',
      cost:
        'Rent that is often kept under about a fifth of sales is still paid for the quiet hours. Without hourly numbers and a fair comparison between outlets, nothing can be tested, and nothing can be fixed.',
      fix:
        'Outlets are locations in one system, with sales, orders per hour, waste and labour side by side. Each morning Verity shows a short list of what needs a decision, each with an owner.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '3 to 8%',
      text: 'of beverage ingredients can be lost to inefficient operations, according to industry estimates quoted in a café trade article.',
      source: { name: 'Restaurant India, How Cafés Are Winning the War on Waste', year: '2026', url: 'https://www.restaurantindia.in/article/how-caf-s-are-winning-the-war-on-waste.16904' },
    },
    {
      figure: '5 to 15%',
      text: 'net profit margin for most independent cafés, against 65 to 75% gross margin. Rent and labour decide where in that band you land.',
      source: { name: 'Restaurant India, Cafe Profit Margin in India', year: '2026', url: 'https://www.restaurantindia.in/article/cafe-profit-margin-in-india-what-to-realistically-expect.16906' },
    },
    {
      figure: '₹33,000 to ₹27,000',
      text: 'average daily sales per store at Costa Coffee India in FY25, while its gross margin slipped from 76.8 to 75.4% on coffee bean and raw material inflation.',
      source: { name: 'Franchise India, citing Devyani International annual report', year: 'FY25', url: 'https://www.franchiseindia.com/index.php/insights/en/news/costa-coffee-india-reports-31-revenue-jump-in-fy25-but-faces-margin-pressure.56964' },
    },
    {
      figure: '₹1.5 crore',
      text: 'is the turnover up to which a food business generally needs only basic FSSAI registration from 1 April 2026, up from ₹12 lakh. Licences generally no longer need renewal, but hygiene duties continue.',
      source: { name: 'SetIndiaBiz summary of FSSAI 2026 changes', year: '2026', url: 'https://www.setindiabiz.com/blog/fssai-2026-reforms' },
    },
  ],
  factsNote:
    'The margin and waste ranges come from trade publications, not audited accounts. The Costa figures are one listed chain’s, not a typical café’s. The FSSAI figure is from a consultancy summary of the 2026 orders, so confirm it on FoSCoS or with your licensing authority.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Names, columns and terms are set up in your café’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Café / Today',
      meta: 'Outlet: Indiranagar',
      heading: 'The owner’s morning view',
      caption:
        'Sales, drink margin, channel profit, comps and anything that does not tie, on one screen, with the items that need a decision listed under it. It replaces the evening message from the closing barista.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales yesterday', value: '₹41,800', note: '212 orders' },
            { label: 'Milk and bean use', value: '+6%', note: 'over expected' },
            { label: 'Comps and discounts', value: '₹1,950', note: '4.7% of sales' },
            { label: 'Regulars gone quiet', value: '37', note: 'past usual gap' },
          ],
        },
        { type: 'title', text: 'What a ₹320 order leaves, by channel' },
        {
          type: 'bars',
          items: [
            { label: 'Counter and table', value: 72, display: '₹230' },
            { label: 'Takeaway', value: 70, display: '₹224' },
            { label: 'Delivery app A', value: 39, display: '₹124', tone: 'muted' },
            { label: 'Delivery app B', value: 34, display: '₹108', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Cash and UPI differ from orders by ₹360. 2 orders unmatched on the evening shift.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Oat milk below reorder point', meta: 'Weekend demand needs 18 cartons, 7 on shelf', tag: ['Order', 'flag', 'Ordered', 'ok'] },
            { name: 'Grinder service due this week', meta: 'Vendor visit not yet booked', tag: ['Book', 'late', 'Booked', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'regulars',
      title: 'Regulars',
      meta: 'Customers past their usual visit pattern',
      heading: 'The list that brings regulars back',
      caption:
        'Regulars ordered by how much they are worth and how long they have been away, with their usual drink and barista. A follow-up is a task on the right person’s screen, and what happened is recorded. Loyalty rewards sit on the same record.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Last visit', 'Usual', 'Drink', 'Status'],
          rows: [
            ['Karthik R.', '23 Sep', 'Weekdays', 'Flat white', ['Reach out', 'late', 'Back', 'ok']],
            ['Ananya S.', '30 Sep', '3 a week', 'Oat latte', ['Reach out', 'flag', 'Back', 'ok']],
            ['Imran Q.', '28 Sep', '2 a week', 'Cold brew', ['Reach out', 'flag', 'Declined', 'muted']],
            ['Pooja M.', '2 Oct', 'Weekends', 'Cappuccino', ['Message', 'flag']],
            ['Dev T.', '26 Sep', '4 a week', 'Americano', ['Message', 'flag']],
          ],
        },
        { type: 'alert', text: '37 regulars are past their usual gap. 11 of them spent over ₹6,000 in the last three months.', action: 'Assign all' },
        {
          type: 'record',
          title: 'Karthik R.',
          sub: 'Regular since February 2024. Usual barista: Sneha',
          fields: [
            ['Usual order', 'Flat white, extra hot'],
            ['Last visit', '23 September'],
            ['Spend, 3 months', '₹7,420'],
            ['Loyalty', '8 of 10 visits'],
            ['Status', ['Quiet 3 weeks', 'late', 'Visited 12 Oct', 'ok']],
          ],
          timeline: [
            ['23 Sep', 'Flat white and almond croissant'],
            ['16 Sep', 'Flat white'],
            ['9 Sep', 'Flat white, oat milk trial'],
            ['Note', 'Prefers the corner table. Works nearby.'],
          ],
        },
      ],
    },
    {
      id: 'drinks',
      title: 'Drinks and bakes',
      meta: 'Use against expected, last 7 days',
      heading: 'Where milk, beans and bakes actually went',
      caption:
        'Expected use from the orders, actual use from stock, and the gap. Remakes and unsold bakes are logged with a reason, so the loss has a name and a shift beside it.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Expected', 'Used', 'Gap', 'Status'],
          rows: [
            ['Full cream milk (L)', '412', '448', '+36', ['High', 'late', 'Prep checked', 'ok']],
            ['House blend (kg)', '23.5', '24.1', '+0.6', ['Within range', 'ok']],
            ['Vanilla syrup (L)', '6.0', '8.2', '+2.2', ['High', 'flag']],
            ['Oat milk (L)', '95', '97', '+2', ['Within range', 'ok']],
            ['Croissants (pcs)', '210 sold', '58 unsold', '22%', ['Bake less', 'flag', 'Cut Mon', 'ok']],
          ],
        },
        { type: 'title', text: 'Remakes and waste logged this week, by reason' },
        {
          type: 'bars',
          items: [
            { label: 'Wrong order', value: 42, display: '31 cups' },
            { label: 'Over-steamed milk', value: 33, display: '24 pitchers' },
            { label: 'Customer returned', value: 14, display: '10 cups', tone: 'muted' },
            { label: 'Training', value: 10, display: '7 cups', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Stock and suppliers',
      meta: 'Beans, dairy, cups and bakes',
      heading: 'Stock against the week ahead, and what suppliers charge',
      caption:
        'What is on the shelf, how fast it moves, what the weekend usually needs, and what each supplier last charged. Deliveries are received here and checked against the invoice.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'On shelf', 'Weekend need', 'Next delivery', 'Status'],
          rows: [
            ['Oat milk, 1 L', '7', '18', 'Fri', ['Short', 'late', 'Ordered', 'ok']],
            ['Takeaway cups 12 oz', '420', '900', 'Fri', ['Reorder', 'flag']],
            ['House blend 1 kg', '5', '4', 'Tue', ['OK', 'ok']],
            ['Chocolate sauce', '3', '2', 'Tue', ['OK', 'ok']],
          ],
        },
        {
          type: 'table',
          cols: ['Supplier', 'Item', 'Last rate', 'Change', 'Delivery check'],
          rows: [
            ['Blue Hills Roasters', 'House blend 1 kg', '₹1,180', ['+9%', 'late'], ['Matched', 'ok']],
            ['Nandini Dairy', 'Full cream 1 L', '₹62', ['+3%', 'flag'], ['6 L short', 'late', 'Credit asked', 'info']],
            ['PackRight', 'Cups 12 oz x 50', '₹310', ['No change', 'ok'], ['Matched', 'ok']],
          ],
        },
        { type: 'alert', text: 'House blend rose 9% since June. Your flat white now costs ₹7 more to make.', action: 'Review menu price' },
      ],
    },
    {
      id: 'roster',
      title: 'Roster and training',
      meta: 'Next week',
      heading: 'Shifts that follow the footfall, and a bench that is trained',
      caption:
        'Orders per hour for each weekday, set against who is rostered, with the gaps marked. Each person’s training and station sign-offs are recorded beside it.',
      blocks: [
        { type: 'title', text: 'Orders per hour against staff on shift, Saturday' },
        {
          type: 'bars',
          items: [
            { label: '8 to 10 am', value: 55, display: '48 orders, 2 staff', tone: 'muted' },
            { label: '10 am to 1 pm', value: 100, display: '86 orders, 3 staff' },
            { label: '1 to 4 pm', value: 70, display: '61 orders, 3 staff' },
            { label: '4 to 7 pm', value: 45, display: '39 orders, 3 staff', tone: 'muted' },
          ],
        },
        {
          type: 'table',
          cols: ['Person', 'Role', 'Station cleared', 'Training', 'Shift'],
          rows: [
            ['Sneha', 'Lead barista', 'Bar, grinder, till', ['Complete', 'ok'], 'Mon to Fri'],
            ['Arjun', 'Barista', 'Bar, till', ['Milk texture', 'flag', 'Signed off', 'ok'], 'Sat, Sun'],
            ['Faisal', 'Counter', 'Till, display', ['Food safety due', 'late', 'Booked', 'info'], 'Tue to Sat'],
            ['Diya', 'New hire', 'Till', ['Week 2 of 3', 'info'], 'Mon to Fri'],
          ],
        },
      ],
    },
    {
      id: 'upkeep',
      title: 'Machines and compliance',
      meta: 'Due in the next 60 days',
      heading: 'Equipment service and licences, with an owner and a date',
      caption:
        'Every machine and every licence has a date and a person. Daily hygiene checks are signed off at the counter, so the record exists when an officer or a vendor asks.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Last done', 'Due', 'Owner', 'Status'],
          rows: [
            ['Espresso machine service', '14 Apr', '14 Oct', 'Sneha', ['Due this week', 'late', 'Booked 17 Oct', 'ok']],
            ['Water filter change', '20 Jun', '20 Dec', 'Manager', ['OK', 'ok']],
            ['Health trade licence', 'Renewed last year', 'Check date', 'Owner', ['Check', 'flag', 'Confirmed', 'ok']],
            ['Music licence cover', 'Not recorded', 'Needed', 'Owner', ['Missing', 'late', 'Recorded', 'ok']],
            ['Food safety certificate, Faisal', 'Expired', 'Now', 'Manager', ['Expired', 'late', 'Booked', 'info']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Fridge temperature, morning', meta: '4°C, Sneha, 7:40', done: true },
            { text: 'Fridge temperature, evening', meta: 'Due 8 pm', done: false },
            { text: 'Milk pitcher and steam wand deep clean', meta: 'Weekly, Sunday', done: false },
          ],
        },
      ],
    },
    {
      id: 'enquiries',
      title: 'Group bookings and orders',
      meta: 'Open enquiries',
      heading: 'No birthday, meetup or office order gets lost',
      caption:
        'Each request has an owner, a date, a headcount and a next step. Anything unanswered is flagged. Staff still reply to the guest; Verity makes sure someone does.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'New',
              cards: [
                { title: 'Birthday table, 15 guests', meta: 'Sun 19 Oct, via Instagram', tag: ['Reply', 'flag', 'Quoted', 'ok'] },
                { title: '30 coffees, office meeting', meta: 'Thu 10 am, Rao & Co', tag: ['No reply 4 h', 'late', 'Confirmed', 'ok'] },
              ],
            },
            {
              name: 'Quoted',
              cards: [
                { title: 'Book club, monthly slot', meta: '12 guests, ₹9,600 per session', tag: ['Follow up', 'flag'] },
                { title: 'Farewell, 22 guests', meta: 'Sat 25 Oct, advance asked', tag: ['Waiting', 'info'] },
              ],
            },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Saturday, before and after.',
  dayLede: 'What changes is not the coffee. It is that the day leaves a record, and the record does the chasing.',
  day: [
    {
      time: '7:30',
      before: 'You open up and eyeball the shelf. You think the oat milk is low but are not sure how low.',
      after: 'The Today screen shows oat milk at 7 against a weekend need of 18. An order is already drafted for the Friday slot.',
    },
    {
      time: '9:15',
      before: 'The rush starts with two baristas. A third is on a break that cannot be moved.',
      after: 'The roster was moved on Wednesday after the hourly numbers showed the 9 am gap, so three people are on.',
    },
    {
      time: '12:00',
      before: 'A regular you have not seen for a month walks in. Nobody knew he had gone quiet.',
      after: 'He was on the list two weeks ago, Sneha messaged him, and he is back with his usual order noted.',
    },
    {
      time: '3:30',
      before: 'The display is half full, three tables are taken, and nobody can say how many croissants to bake tomorrow.',
      after: 'Sell-through by day shows 22 percent left over, so tomorrow’s bake is cut by 10.',
    },
    {
      time: '9:30',
      before: 'The closing barista counts the till against the report. It is ₹360 off and nobody can say why.',
      after: 'Verity shows two orders that do not tie. The closer notes both, and it takes a minute.',
    },
    {
      time: 'Month end',
      before: 'The accountant asks for invoices. You find some in the folder and some on WhatsApp.',
      after: 'Every delivery and invoice was matched when it arrived, so the month’s purchases are already clean.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We spend time at the counter, build Verity around how your café really runs, bring your data in, then stay to make sure it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a morning rush and a closing at your café. Watch how an order moves from till to bar, how stock arrives and how the day is counted, and note which leaks matter most.',
        you: 'Two to three hours of yours and your manager’s. Access to your billing reports, a month of supplier invoices and the roster.',
        get: 'A written map of your café: the menu with recipes, the stock list, the suppliers, the roster pattern and the first leaks we will close.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your menu and recipes, ingredient units, reorder points, suppliers, discount limits, shifts and equipment, and build the seven screens around your own terms.',
        you: 'Check the setup with your lead barista and manager. Tell us where a recipe or rule is wrong.',
        get: 'A working Verity with your real drinks, bakes, staff and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your customer list, stock levels, supplier rates and equipment details from the sheets and notebooks you use. Train the counter and bar teams at their stations during a real shift.',
        you: 'Your regulars list in whatever form it exists, and an opening stock count. One hour with each role.',
        get: 'Your regulars, stock and suppliers inside Verity, and a team that has used it through a service.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks of numbers with you, tune the gaps and limits, and handle changes when you add a drink, a supplier or an outlet.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps matching how the café runs, with someone responsible for it.',
      },
    ],
    bring: [
      'Your menu with prices and, if you have them, drink recipes',
      'A month of supplier invoices and delivery slips',
      'Your regulars list, even if it is a phone contact list or loyalty cards',
      'The roster for the last month and each person’s role',
      'Licence certificates and the service dates of your machines',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your lead barista or manager needs a few more.',
    after: 'Nobody is hired to run Verity. Orders, deliveries and waste are recorded as part of work the team already does, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your café a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own orders, stock, staff and customer records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which regulars have not visited in three weeks?',
        a: '37 customers are past three weeks. 11 of them spent over ₹6,000 in the last three months.',
        rows: [['Sneha’s regulars', '14'], ['Arjun’s regulars', '9'], ['Weekend regulars', '8'], ['Other', '6']],
        action: 'Create follow-up tasks for each barista',
      },
      {
        q: 'Why was milk 8 percent over expected last week?',
        a: 'Most of the gap is on the 7 to 10 am shift: 24 pitchers were logged as over-steamed, and 31 cups as wrong-order remakes.',
        rows: [['Over-steamed milk', '24 pitchers'], ['Wrong order remakes', '31 cups'], ['Customer returns', '10 cups'], ['Unexplained', '12 L']],
      },
      {
        q: 'Will we run out of anything before Friday’s delivery?',
        a: 'Oat milk will, by Saturday noon, and 12 oz takeaway cups on Sunday. Everything else covers the weekend.',
        action: 'Raise the order today',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still talk to guests and suppliers; Verity makes sure the right person knows what to do.',
  automations: [
    {
      when: 'A regular goes quiet past their usual pattern',
      then: ['Added to the regulars list with usual order', 'Task to the barista who knows them', 'Outcome recorded: back, declined or unreachable'],
    },
    {
      when: 'An ingredient falls below its reorder point',
      then: ['Checked against the weekend’s usual demand', 'Order drafted for the next delivery slot', 'Stock updated when the delivery is received'],
    },
    {
      when: 'A delivery arrives short or at a different rate',
      then: ['Mismatch marked against the supplier', 'Credit or correction task to the manager', 'Held from payment until settled'],
    },
    {
      when: 'A comp or discount goes above your limit',
      then: ['Held for approval', 'Routed to the owner with the reason', 'Decision recorded against the order'],
    },
    {
      when: 'A machine or filter reaches its service date',
      then: ['Task to the person who owns it', 'Vendor and last visit shown on the task', 'Next date set when it is done'],
    },
    {
      when: 'A group booking or office order has no reply in a few hours',
      then: ['Flagged on the enquiries board', 'Reminder to the owner of that enquiry', 'Quote and outcome recorded'],
    },
  ],

  rules: {
    heading: 'The rules a café has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when someone asks.',
    items: [
      {
        name: 'FSSAI registration or licence',
        what: 'A café serving food needs FSSAI registration or a licence. From 1 April 2026 the basic registration band generally applies up to ₹1.5 crore of turnover, and licences generally no longer need renewal. Hygiene, display and inspection duties continue. Check your own band and category.',
        how: 'The registration or licence is a record with its number, category and the dates you must act on, and changes to address or menu category are tasks.',
        source: { name: 'SetIndiaBiz summary of FSSAI 2026 changes', url: 'https://www.setindiabiz.com/blog/fssai-2026-reforms' },
      },
      {
        name: 'Food safety training and daily hygiene records',
        what: 'Licensed food businesses are generally expected to have trained food safety supervisors, and to keep hygiene practices such as clean equipment and safe storage temperatures. The exact requirement depends on your licence category.',
        how: 'Training certificates sit on each person’s record with an expiry date. Fridge temperature and cleaning checks are signed off daily at the counter.',
      },
      {
        name: 'Music licences',
        what: 'Playing recorded music in a café generally needs a licence from the recorded-music rights body, and live music needs a separate one from the performing rights society. Fees change, so confirm current rates with them.',
        how: 'The licences are records with a renewal date, and live music nights are tasks with the permission checked before the event.',
        source: { name: 'iPleaders on music licences for cafés and restaurants', url: 'https://blog.ipleaders.in/take-licence-playing-music-restaurant-cafe/' },
      },
      {
        name: 'Local trade and shop registrations',
        what: 'Municipal health or trade licences and Shops and Establishments registration are generally needed, and rules differ by city and state. Some are renewed every year.',
        how: 'Each registration is stored with its renewal date and owner, so a renewal becomes a task weeks before it lapses.',
      },
    ],
    note: 'Rules change and differ by city and state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A barista should not see everyone’s pay. The counter should not edit supplier rates. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the café making money, and where is it going?', sees: 'Sales and margin by drink and channel, waste, comps, supplier price changes and every outlet side by side.' },
    { role: 'Manager', question: 'What needs sorting this week?', sees: 'The roster gaps, stock short for the weekend, deliveries to check, approvals waiting and machines due.' },
    { role: 'Lead barista', question: 'Is the bar ready and is the team cleared?', sees: 'Today’s stock for the bar, recipes, remake log, station sign-offs and machine tasks.' },
    { role: 'Counter staff', question: 'Who is coming in and what is pending?', sees: 'Regulars’ usual orders, loyalty balances, today’s bookings and the daily checks to sign off.' },
    { role: 'Accountant', question: 'What was bought, sold and owed?', sees: 'Sales by payment mode and channel, supplier invoices matched to deliveries, and discounts and write-offs.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing screen at the counter. We agree during setup how orders and payments reach Verity.',
      'The delivery apps you sell on. We record their orders by channel.',
      'WhatsApp and Instagram for guests and suppliers. Staff reply; Verity tracks who owes a reply.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Run your billing counter or take table orders.',
      'Take online orders or reservations from guests.',
      'Send messages to guests or suppliers on its own.',
      'File your returns or run your payroll.',
    ],
    migration:
      'We bring your regulars, stock levels, supplier rates and equipment details across from the sheets, phones and notebooks you use now, in stages, so the café keeps serving while it happens.',
  },

  faqHeading: 'Questions café owners ask.',
  faqs: [
    [
      'My baristas are busy at peak. Will they actually record waste and remakes?',
      'Only if it takes seconds, so we set it up as two taps with a reason, kept at the bar. We train during a real shift, not in a classroom, and we start with the three or four reasons that matter, not a long form.',
    ],
    [
      'Does Verity replace my billing system?',
      'No. Your billing screen keeps taking orders and payments. We agree during setup how those orders reach Verity, which then does the stock, supplier, staff and customer work around them.',
    ],
    [
      'Can it take table bookings or online orders?',
      'No. If guests book or order online today, that tool keeps working. Verity makes sure every group enquiry has an owner and a next step, and your team replies to the guest.',
    ],
    [
      'I run one small café with three staff. Is this too much?',
      'A three-person café has the same leaks and less time to notice them. We set up only what you need, in the same four weeks, and leave out what you do not.',
    ],
    [
      'Can it work out how much each drink really costs me?',
      'Yes, once recipes are entered. Each drink shows its current ingredient cost from your latest supplier rates, so a bean or milk price rise shows up as a changed drink margin.',
    ],
    [
      'I have a kiosk and a café. Can I see them together?',
      'Yes. Each is a location in one system, with sales, waste, labour and stock side by side. Customers are the same people across both, and stock can be moved between them against a recorded transfer.',
    ],
    [
      'Who can see my data?',
      'Only the people you allow. Access is set by role, so baristas, managers and your accountant each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'How quickly will I see something useful?',
      'The regulars list, stock warnings and delivery checks need only your existing data, so we aim to have them first. Waste and roster patterns become reliable after a few weeks of recorded service.',
    ],
    [
      'What does it cost?',
      'It depends on the number of outlets, staff and what you want set up. Message us and we will give you a clear number after a short conversation about how your café runs.',
    ],
  ],

  related: ['restaurants', 'bakeries', 'cloud-kitchens', 'fast-food-businesses', 'bars-and-lounges', 'catering-businesses'],

  ctaHeading: 'Start with the regulars who stopped coming.',
  ctaLede:
    'Tell us how your café runs and we will show you the quiet-regulars list, the stock shortages and the waste gaps it would find, using your own numbers.',
};
