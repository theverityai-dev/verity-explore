export default {
  schema: 2,
  slug: 'home-decor-stores',
  status: 'published',
  plural: 'home decor stores',
  subject: 'home decor store',
  checked: '15 October 2026',

  seo: {
    title: 'Home decor store software for Indian shops and studios | Verity',
    description:
      'Festive overbuying, breakage, custom curtain jobs, artisan orders and designer quotes: the problems a home decor shop faces, and the Verity screens that fix each.',
    keywords: [
      'home decor store management software India',
      'curtain and blinds job tracking',
      'festive season stock planning decor',
      'artisan supplier order tracking',
      'home decor store breakage and dead stock',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'orders', 'suppliers', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for home decor stores',
    headline: 'Hundreds of small things, a few big seasons. Verity shows what is selling before the season is gone.',
    lede:
      'A decor shop sells lamps, vases, cushions, curtains, frames and gifts, most of them bought once a year by someone furnishing a flat or looking for a house-warming present. Stock is bought months ahead on instinct, and the custom jobs and artisan orders on the side live in notebooks. Verity brings it into one record so you can buy, price and promise with numbers.',
    oneLine:
      'One system that knows every item you hold, every curtain job in the workshop, every artisan order on the way and every customer who bought a gift from you.',
    note: 'Your team keeps selling the way they do. The items sold and orders taken become the records everything else is read from.',
    screen: 'owner',
    screenNote: 'seasons, categories, custom jobs and suppliers',
  },

  today: {
    heading: 'The shop looks full. Nobody can say what is actually earning.',
    paragraphs: [
      'A home decor shop carries a huge range of small, similar items. A hundred cushion covers in forty designs, thirty kinds of candle, a wall of frames. Prices vary by size and finish, and many pieces are one-offs from a trip to Jaipur or a fair in Delhi. The owner knows the favourites by feel but cannot say which categories made money last Diwali and which sat on the shelf until Holi.',
      'Alongside the shop is a second business: curtains, blinds and cushions made to measure, fitted at the customer\'s home, plus bulk orders for designers and hotels. Those jobs live in a notebook, with a tailor, a fitter and a customer who calls to ask where the curtains are.',
      'The seasons are sharp. A large share of the year\'s sales come in the weeks around Diwali, wedding season and the housing handovers that follow. Buying has to happen months before. A wrong guess leaves a store room full of last year\'s lanterns, or an empty shelf on Dhanteras.',
    ],
    stack: ['Billing software or bill book', 'Notebook for curtain and custom jobs', 'Instagram and WhatsApp enquiries', 'Excel stock and buying sheet', 'Owner\'s memory of what sold'],
    stackNote: 'Each of these works for its own job. None of them tells you that the brass lamps sold out in a week and the glass vases have not moved since March.',
  },

  painsHeading: 'Where a home decor store actually loses money.',
  painsLede:
    'These are the situations decor shop owners describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Buying',
      title: 'The festive buy is made months ahead on instinct',
      scene:
        'In June you order lanterns, torans, diyas and gift sets for Diwali from three suppliers. You buy a bit more of last year\'s hit and a bit less of what felt slow. After the festival, a third of the lanterns are still in boxes.',
      cost:
        'Example arithmetic: ₹10 lakh of festive stock with a quarter unsold is ₹2.5 lakh at cost sitting in the store room, and it is out of season until next year.',
      fix:
        'Every sale is recorded against the item and the date, so Verity shows last year\'s sell-through for each category week by week. When you plan the buy, you see how much of each line sold in the festive window, how much was left and what you paid.',
      screen: 'season',
      source: {
        name: 'Indian Retailer on dead stock, 15 May 2026',
        url: 'https://indianretailer.com/news/word-day-dead-stock',
      },
    },
    {
      area: 'Buying',
      title: 'A few lines sell out and the shelf stays empty while you wait for the supplier',
      scene:
        'The brass diyas are gone by the second weekend of October. The supplier\'s next lot takes ten days. Customers walk to the shop next door and buy the rest of their basket there too.',
      cost:
        'A missed sale on a fast mover also loses the other things in the basket. The lost sale never shows in a report, only as a feeling that the week should have been better.',
      fix:
        'Each item has a reorder point set by its recent sales and supplier lead time. Verity flags fast movers with the days of stock left, so reorders are raised while there is still time to receive them.',
      screen: 'season',
    },
    {
      area: 'Stock',
      title: 'Hundreds of near-identical items, and nobody knows which are slow',
      scene:
        'Eighty cushion covers, each in four sizes, a hundred frames in various finishes. A price tag peels off. A new staff member prices a vase from memory. The count in the sheet has not matched the shelf since last year.',
      cost:
        'Mispriced items either lose margin or lose the sale. Capital sits in lines that stopped selling long ago and are never cleared because they are never seen.',
      fix:
        'Every item is a record with a code, size, finish, cost and price, and a location (shelf, display wall, store room). Verity lists items by age and sell-through so slow lines surface with the money tied up in them.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Breakage in storage and handling is written off by habit, not recorded',
      scene:
        'A box of glass tealight holders is dropped during unloading. A ceramic planter cracks while being shifted. A customer returns a lamp with a broken base, found only when the box is opened. Each is thrown out and forgotten.',
      cost:
        'Example arithmetic: ₹2,000 of breakage a week is ₹1 lakh a year with no record of where it came from, who handled it or whether a supplier should have paid.',
      fix:
        'A breakage is entered as a stock adjustment with a reason, a photo and the person and stage (supplier delivery, store room, floor, customer return). Verity totals it by cause, so supplier packing problems can be taken up with the supplier.',
      screen: 'stock',
    },
    {
      area: 'Suppliers',
      title: 'Artisan and workshop orders drift with no visible date',
      scene:
        'You ordered 40 hand-painted planters from a potter in Jaipur and 25 carved wooden frames from Saharanpur. The advance is paid. The delivery date was "after the fair". Nobody has heard from them in three weeks.',
      cost:
        'An advance on an order with no stage or date is money at risk. If the item is for a festive window, a late delivery is the same as no delivery.',
      fix:
        'Each artisan or supplier order has quantities, advance paid, promised date and a status. Verity lists orders past their date and creates a task to call, and when goods arrive they are received against the order, with any shortfall visible.',
      screen: 'suppliers',
    },
    {
      area: 'Suppliers',
      title: 'Goods on sale-or-return and consignment are never reconciled',
      scene:
        'A small brand left 60 pieces on consignment in August. Some sold, some were displayed and damaged, and some went to the store room. At the quarter\'s end they ask what is owed and nobody can say.',
      cost:
        'Under-reporting leads to disputes and lost brands. Over-reporting means you pay for pieces you did not sell.',
      fix:
        'Consignment items are held as the supplier\'s stock, in your shop. Each sale credits what you owe that supplier. At any date you can print what sold, what is left and the amount due, and returns are recorded against the same list.',
      screen: 'suppliers',
    },
    {
      area: 'Custom work',
      title: 'Curtain and blind jobs are tracked in a notebook and run late',
      scene:
        'A customer wants curtains for three windows. The measurements were taken on Tuesday, the fabric was selected on Thursday, the tailor has it for a week, and the fitter is booked on the same day as another job. The customer calls on day nine.',
      cost:
        'Custom jobs carry the highest margins in a decor shop and the highest complaint rate. A job done late or measured wrongly is paid for twice: once in cloth and again in goodwill.',
      fix:
        'A job record holds measurements per window, fabric and lining, stitching instructions, the tailor, the fitting date and the advance. Verity shows each job\'s stage and flags the ones where the fitting is booked before the stitching is done.',
      screen: 'custom',
    },
    {
      area: 'Custom work',
      title: 'Measurements and fabric choices are lost between the visit and the workshop',
      scene:
        'The site visit notes say "bedroom, 2 windows, blackout". The tailor reads the notes as 9 foot instead of 7.5. The curtains arrive too long and the fabric cannot be reused.',
      cost:
        'A re-cut piece of good fabric can cost more than the fitting charge. It also means a second visit and a second customer wait.',
      fix:
        'Measurements are entered on the job at the site, with photos of each window, and the tailor works from the same record. A change after approval needs a reason and is visible to everyone on the job.',
      screen: 'custom',
    },
    {
      area: 'Customers',
      title: 'Shoppers browse, photograph and leave, and no one knows who they were',
      scene:
        'A woman spends forty minutes choosing wall art for her new flat, photographs three pieces and says she will come back after measuring. The shop has no name and no number. She orders from an online seller that week.',
      cost:
        'Decor is a considered purchase made once per room. The shopper who was close to buying is your best lead, and without a record the next conversation starts from zero.',
      fix:
        'Enquiries are recorded with the customer, the pieces they looked at, room and budget, and the date they plan to decide. Verity lists enquiries going cold and assigns a follow-up to the person who served them.',
      screen: 'customers',
    },
    {
      area: 'Customers',
      title: 'Gifting and festive repeat buyers are not recognised',
      scene:
        'A family office buys 50 Diwali gift hampers from you every year. A regular buys a house-warming gift for a different friend every spring. The shop has no memory of either and does not call before the season.',
      cost:
        'Repeat and occasion-led buyers are the cheapest sales you can win, but only if someone remembers them. Without a record you wait for them to remember you.',
      fix:
        'The customer record keeps past orders, occasions, budgets and the person who handled them. Verity lists buyers who bought last season and have not yet been in touch, so the call goes out in time for the buy.',
      screen: 'customers',
    },
    {
      area: 'Trade',
      title: 'Designer and bulk quotes take hours and are lost in WhatsApp',
      scene:
        'An interior designer sends a list of 120 pieces for a client\'s villa and asks for a trade price by evening. A hotel wants 200 cushion covers in one colour with a delivery date. The quote goes out from a spreadsheet and the revised one from a phone.',
      cost:
        'Large quotes decide the quarter. If the price, stock check and delivery promise are not worked out together, you either lose the order or win one you cannot fulfil.',
      fix:
        'A quote is a record that checks the items against stock and supplier lead times, applies the trade price list you set, and tracks versions and approvals. The accepted quote becomes an order with its own delivery plan and balance.',
      screen: 'trade',
    },
    {
      area: 'Money',
      title: 'Exchanges, returns and discounts are decided on the spot',
      scene:
        'A customer brings back a lamp because the shade does not match her wall. Another asks for a markdown because the cushion has a small stain. A manager gives both a credit note on a bill slip.',
      cost:
        'Without a policy on the record, exchange practice differs by person. Credit notes are forgotten, and discount exceptions rise at the end of the season.',
      fix:
        'Returns and exchanges are recorded against the original sale and the reason. Discounts above a limit need approval with a reason, and open credit notes are listed with their balance and expiry.',
      screen: 'owner',
    },
    {
      area: 'Staff',
      title: 'Festive temps and shop staff run on different knowledge',
      scene:
        'You add four extra people for the two weeks around Diwali. They do not know the price list, which items are reserved for customers or which fragile pieces to pack separately.',
      cost:
        'Wrong prices and unpacked glass breakage are the typical cost of the first week of a festive rush. Regular staff spend the peak teaching instead of selling.',
      fix:
        'Every item carries its price, notes (fragile, reserved) and location in one place that all staff read from. Shifts and extra hands are on the roster, and sales are recorded per person so incentives are worked out from records.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'A second shop or an Instagram page doubles the confusion',
      scene:
        'The same lamp is posted on Instagram, sold in the shop and promised to a designer. The page says available, the shop says reserved, and the second branch has two in the back.',
      cost:
        'An item sold twice means an apology and a refund. Stock sitting in one place while it is wanted in another loses sales.',
      fix:
        'Each shop and the store room is a location in one system. A promise to a customer or designer reserves the piece, and a transfer between locations is recorded. Enquiries from Instagram are logged as enquiries so staff see them in one list.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '$26.88 billion',
      text: 'is the estimated size of India\'s home decor market in 2025, per IMARC, growing at about 5% a year to 2034.',
      source: { name: 'IMARC Group, India Home Decor Market', year: '2026 edition', url: 'https://www.imarcgroup.com/india-home-decor-market' },
    },
    {
      figure: '32%',
      text: 'of the market was bought through online stores in 2025, the largest single channel, per the same report. The rest, roughly two thirds, still goes through shops and other offline outlets.',
      source: { name: 'IMARC Group, India Home Decor Market', year: '2026 edition', url: 'https://www.imarcgroup.com/india-home-decor-market' },
    },
    {
      figure: '5 causes',
      text: 'of dead stock are named by Indian Retailer: weak forecasting and overbuying, sudden changes in taste, buying without checking sell-through, little real-time visibility and seasonal goods not cleared in time. Unsold festive stock is its example.',
      source: { name: 'Indian Retailer, Word of the Day: Dead Stock', year: '2026', url: 'https://indianretailer.com/news/word-day-dead-stock' },
    },
    {
      figure: '5%',
      text: 'GST now applies to handcrafted lamps, wooden and cork articles, handmade carpets and rugs, and paintings, from 22 September 2025. Most other decor still sits under its own rate.',
      source: { name: 'TaxGuru, GST rate changes from 22 September 2025', year: '2025', url: 'https://taxguru.in/goods-and-service-tax/gst-rate-w-e-f-22nd-september-2025-topic-wise-analysis.html' },
    },
  ],
  factsNote:
    'Market sizes come from a paid research firm and differ between firms. The online share is for the whole market, not for shops like yours. The GST summary is from a tax commentary site, so check the rate for each item on the notification or with your accountant.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Names, columns and terms are set up in your shop\'s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Shop / Today',
      meta: 'All locations',
      heading: 'The owner\'s morning view',
      caption:
        'Sales, fast movers running short, custom jobs due, credit notes open and approvals waiting, all on one screen. It replaces the end of day phone calls and the stock sheet you open when you remember.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales today', value: '₹1.9 lakh', note: '64 bills' },
            { label: 'Fast movers short', value: '8', note: 'under 7 days of stock' },
            { label: 'Custom jobs due', value: '5', note: 'this week' },
            { label: 'Open credit notes', value: '₹38,400', note: '14 customers' },
          ],
        },
        { type: 'title', text: 'Sales by category, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Lighting and lanterns', value: 88, display: '₹3.9 lakh' },
            { label: 'Cushions and throws', value: 62, display: '₹2.7 lakh' },
            { label: 'Wall art and frames', value: 38, display: '₹1.7 lakh' },
            { label: 'Vases and planters', value: 21, display: '₹0.9 lakh', tone: 'muted' },
          ],
        },
        { type: 'alert', text: '2 discounts above 15% and 1 exchange without a bill wait for your decision.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Brass lamp 12 in', meta: '9 left, selling 4 a day. Supplier lead time 8 days', tag: ['Reorder', 'flag', 'Ordered', 'ok'] },
            { name: 'Consignment: Studio Kuhu', meta: 'Quarter end statement ready', tag: ['Due', 'info', 'Sent', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'season',
      title: 'Season planner',
      meta: 'Diwali, last year against this year',
      heading: 'What sold in the festive weeks, so the next buy is not a guess',
      caption:
        'Each category\'s sales by week against what you bought, with the quantity left after the season. Built from the sales you record every day.',
      blocks: [
        {
          type: 'table',
          cols: ['Category', 'Bought', 'Sold', 'Left', 'Sell-through'],
          rows: [
            ['Brass lamps', '320', '300', '20', '94%'],
            ['Lanterns, glass', '260', '175', '85', ['67%', 'flag']],
            ['Toran and door hangings', '400', '212', '188', ['53%', 'late']],
            ['Gift hampers, premium', '120', '118', '2', '98%'],
            ['Diyas and candles', '900', '610', '290', ['68%', 'flag']],
          ],
        },
        { type: 'alert', text: 'Toran and lanterns left over from last season: ₹1.6 lakh at cost. Plan markdown or hold to next year.', action: 'Decide' },
      ],
    },
    {
      id: 'stock',
      title: 'Stock and breakage',
      meta: 'Shop, display wall and store room',
      heading: 'Every item, where it is, how old it is and what broke',
      caption:
        'Items by location and age, with a separate view of breakage by cause so supplier packing, store room handling and customer returns can be told apart.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Location', 'In stock', 'Age', 'Status'],
          rows: [
            ['Ceramic vase, blue, 14 in', 'Store room', '22', '210 days', ['Slow', 'late', 'Marked down', 'ok']],
            ['Cushion cover, ikat, 16 in', 'Shop floor', '41', '35 days', ['OK', 'ok']],
            ['Glass tealight set of 6', 'Display wall', '58', '90 days', ['OK', 'ok']],
            ['Metal wall clock', 'Store room', '9', '260 days', ['Slow', 'flag']],
            ['Framed print, set of 3', 'Shop floor', '17', '140 days', ['Watch', 'flag']],
          ],
        },
        {
          type: 'bars',
          items: [
            { label: 'Supplier packing', value: 55, display: '₹12,400' },
            { label: 'Store room handling', value: 30, display: '₹6,700' },
            { label: 'Customer returns', value: 15, display: '₹3,300', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'custom',
      title: 'Curtain and custom jobs',
      meta: 'In the workshop',
      heading: 'From site measurement to fitting, nothing in a notebook',
      caption:
        'Each job moves from measured to approved, cut, stitched, ready and fitted. Measurements and photos are on the job, and clashes between stitching and fitting dates are flagged.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Measured and approved',
              cards: [
                { title: 'Mehra, 3 windows, blackout', meta: 'Fabric ordered. Advance ₹12,000', tag: ['Cut', 'info'] },
                { title: 'Fernandes, living room sheers', meta: 'Measurements with photos', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
              ],
            },
            {
              name: 'With the tailor',
              cards: [
                { title: 'Rao, 2 windows, roman blinds', meta: 'Tailor: Salim. Due 20 Oct', tag: ['Fitting 19 Oct', 'late', 'Moved to 21 Oct', 'ok'] },
                { title: 'Bose, bedroom pair', meta: 'Lining added. Due 22 Oct', tag: ['On track', 'ok'] },
              ],
            },
            {
              name: 'Ready to fit',
              cards: [
                { title: 'Khanna, study', meta: 'Fitter: Ramesh. Balance ₹9,500', tag: ['Collect balance', 'flag', 'Paid', 'ok'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'trade',
      title: 'Designer and bulk quotes',
      meta: 'Open quotes',
      heading: 'Large quotes checked against stock and lead times before they go out',
      caption:
        'Each quote shows the trade price, what is in stock, what needs ordering and the earliest delivery date. Accepted quotes become orders with advance and balance.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Items', 'Value', 'In stock', 'Status'],
          rows: [
            ['Studio Ruh (designer)', '120 pieces, villa', '₹4,86,000', '78 of 120', ['Quote v2', 'info', 'Accepted', 'ok']],
            ['Hotel Saffron Grand', '200 cushion covers', '₹1,36,000', '0 of 200', ['Needs order', 'flag', 'Ordered', 'ok']],
            ['Anand Patil Associates', '30 wall frames', '₹54,000', '30 of 30', ['Sent', 'info']],
            ['Dr. Menon, new clinic', '18 pieces', '₹41,500', '15 of 18', ['Waiting reply', 'muted']],
          ],
        },
        { type: 'alert', text: 'Hotel Saffron Grand: earliest supplier delivery is 18 days. Promise date is 14 Nov.', action: 'Confirm date' },
      ],
    },
    {
      id: 'suppliers',
      title: 'Suppliers and artisans',
      meta: 'Orders on the way and consignment',
      heading: 'What you ordered, what you paid and what is owed on consignment',
      caption:
        'Open artisan and supplier orders by date, with advance and balance, and a statement for each consignment supplier of what sold and what is left.',
      blocks: [
        {
          type: 'table',
          cols: ['Supplier', 'Order', 'Advance', 'Due', 'Status'],
          rows: [
            ['Jaipur Clay Works', '40 painted planters', '₹24,000', '12 Oct', ['3 days late', 'late', 'Called', 'ok']],
            ['Saharanpur Carvers', '25 carved frames', '₹15,000', '25 Oct', ['On track', 'ok']],
            ['Moradabad Brass House', '300 brass diyas', '₹60,000', '18 Oct', ['Dispatched', 'info', 'Received', 'ok']],
            ['Studio Kuhu (consignment)', '60 pieces, 22 sold', 'None', 'Statement', ['Owed ₹41,800', 'flag', 'Settled', 'ok']],
          ],
        },
        { type: 'alert', text: 'Jaipur Clay Works is 3 days late on festive stock. A call task is assigned to Manish.', action: 'Open' },
      ],
    },
    {
      id: 'customers',
      title: 'Customers and enquiries',
      meta: 'Record',
      heading: 'One record for every buyer, gifting client and browser',
      caption:
        'Past purchases, occasions, budgets and who served them. Cold enquiries and last season\'s repeat buyers appear as tasks, so the call goes out before the next buy.',
      blocks: [
        {
          type: 'record',
          title: 'Ritu Malhotra',
          sub: 'Buys for Diwali gifting every year. Served by: Pooja',
          fields: [
            ['Last order', '48 gift hampers, Oct last year'],
            ['Spend, 12 months', '₹1,92,000'],
            ['Budget per hamper', '₹3,500 to ₹4,200'],
            ['Occasion', 'Diwali, client gifts'],
            ['Last contact', 'Mar this year'],
            ['Status', ['Not yet called this season', 'flag', 'Call booked', 'ok']],
          ],
          timeline: [
            ['Oct last year', 'Ordered 48 premium hampers, delivered in 4 days'],
            ['Jul', 'Asked about corporate gifting for New Year'],
            ['Mar', 'Visited shop for spring cushions'],
            ['Note', 'Prefers gold and teal. Pays by cheque in 30 days.'],
          ],
        },
        { type: 'alert', text: '23 buyers from last Diwali have not been called this season. 9 spent over ₹50,000.', action: 'Assign' },
      ],
    },
  ],

  dayHeading: 'The same Saturday in October, before and after.',
  dayLede: 'The shop does not change. What changes is that the day leaves a record, and the record tells you where to look.',
  day: [
    {
      time: '10:30',
      before: 'You open the shop and walk the floor to see what is thin. Nobody knows the brass lamps were nearly gone by Friday.',
      after: 'The Today screen shows 8 fast movers short, with days of stock and supplier lead times. The lamp reorder was raised yesterday.',
    },
    {
      time: '12:00',
      before: 'A customer asks where her curtains are. Someone checks the notebook and says "tomorrow, maybe".',
      after: 'The job shows the stage: stitched, fitting booked Monday at 11. She is told while still at the counter.',
    },
    {
      time: '2:00',
      before: 'A designer wants prices for 80 pieces by evening. You start a spreadsheet.',
      after: 'The quote is built from the trade list, checked against stock and lead time, and ready for your approval in minutes.',
    },
    {
      time: '4:30',
      before: 'A glass lantern slips while being shifted. The pieces go in the bin.',
      after: 'The breakage is logged with a reason and a photo. It adds to the store room handling total for the month.',
    },
    {
      time: '7:30',
      before: 'You wait for staff to message their sales and add the numbers up.',
      after: 'The day\'s sales by category and person are already there, with the credit notes issued.',
    },
    {
      time: 'After Diwali',
      before: 'You walk the store room and wonder how much festive stock is left, and what it cost.',
      after: 'The season screen shows left-over stock by category with cost, last year\'s comparison and a decision list for markdown.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your shop buys, sells and makes custom work, set Verity up around that, bring your data across and stay on through the next season.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Walk the shop floor, the store room and the curtain workshop. Follow a festive order, a custom job and a consignment piece from start to finish, and see how stock and prices are kept now.',
        you: 'Two to three hours from you, and an hour from whoever runs the workshop and the store room. Your price lists, stock sheet and job notebook.',
        get: 'A written map of your categories, suppliers, custom work, seasons and the ranked list of problems we start with.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your item list with sizes and finishes, locations, reorder rules, trade price lists, consignment suppliers, custom job stages and approval limits, and build the screens above around them.',
        you: 'Check the item list and job stages with your senior staff. Tell us where a rule is wrong.',
        get: 'A working Verity holding your items, suppliers, jobs and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your item list with cost and stock, last year\'s sales, open supplier orders, consignment holdings, open custom jobs and your customer list. Train the floor staff and workshop on live work.',
        you: 'Your stock sheet, sales data and notebooks in whatever form they exist. One hour with each team.',
        get: 'Items, jobs and orders inside Verity, and a team that has recorded real sales and a real breakage on it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through the next festive season. Review sell-through with you before you place the buy, tune reorder points and handle changes as the shop grows.',
        you: 'A short monthly review of sales by category, slow stock and open jobs.',
        get: 'A system that keeps matching how the shop trades, with someone responsible for it.',
      },
    ],
    bring: [
      'Your item list with cost and selling price',
      'Last season\'s sales and your purchase bills',
      'Your supplier and artisan list with usual lead times',
      'Your curtain and custom job notebook, open jobs first',
      'Consignment lists and trade price rules',
    ],
    time: 'About 8 to 11 hours of your own time across the four weeks, most in week 1. Your workshop lead and store room lead need a few more.',
    after: 'Nobody is hired to run Verity. Sales, stock moves and jobs are recorded as part of work already done, and the season and supplier views come from those records.',
  },

  ai: {
    heading: 'Ask your shop a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own sales, stock, supplier and job records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'What did we have left from last Diwali, and what did it cost?',
        a: '₹2.1 lakh at cost across 6 categories. Torans and lanterns are 76% of it.',
        rows: [['Toran and door hangings', '₹0.9 lakh'], ['Glass lanterns', '₹0.7 lakh'], ['Candles', '₹0.3 lakh'], ['Others', '₹0.2 lakh']],
        action: 'Add to the buy plan as a reduction',
      },
      {
        q: 'Which curtain jobs are at risk this week?',
        a: '3 jobs have a fitting booked before stitching is due. Two are with Salim.',
        rows: [['Rao', 'Fitting 19 Oct, due 21 Oct'], ['Bose', 'Fitting 21 Oct, due 22 Oct'], ['Kapoor', 'Fitting 20 Oct, due 23 Oct']],
        action: 'Reschedule fittings',
      },
      {
        q: 'Which artisan orders are late?',
        a: '2 orders are past their date. Jaipur Clay Works is 3 days late with ₹24,000 advance paid.',
        action: 'Create call tasks for both',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still make the calls and send the messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An item falls below its reorder point',
      then: ['Days of stock left calculated from recent sales', 'Compared with supplier lead time', 'Order drafted for your approval'],
    },
    {
      when: 'A supplier or artisan order passes its due date',
      then: ['Listed with the advance paid', 'Call task to the buyer', 'Revised date recorded on the order'],
    },
    {
      when: 'A custom job moves to ready',
      then: ['Fitter and date assigned', 'Balance flagged for collection', 'Warranty and care notes added to the customer'],
    },
    {
      when: 'A breakage is recorded',
      then: ['Stock reduced with the reason and photo', 'Added to the cause totals for the month', 'Supplier claim raised if it was packing'],
    },
    {
      when: 'A season ends',
      then: ['Left-over stock listed by category and cost', 'Compared with last year\'s sell-through', 'Markdown or hold decision recorded'],
    },
    {
      when: 'A repeat or gifting buyer has not been in touch this season',
      then: ['Added to the follow-up list', 'Task to the person who served them', 'Outcome recorded: ordered, later or lost'],
    },
  ],

  rules: {
    heading: 'The rules a home decor store has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules lean on in order, so your accountant is not rebuilding them from a bill book.',
    items: [
      {
        name: 'GST on decor, textiles and handicrafts',
        what: 'From 22 September 2025, handcrafted lamps, wooden and cork articles, handmade carpets and rugs, and paintings are generally at 5%. Other decor items, made-up textiles and electrical lighting may sit under different rates, and each item needs its own check.',
        how: 'Each item carries its tax category and each sale line shows the split, so the figure your accountant needs is ready at month end.',
        source: { name: 'TaxGuru, GST rate changes from 22 September 2025', url: 'https://taxguru.in/goods-and-service-tax/gst-rate-w-e-f-22nd-september-2025-topic-wise-analysis.html' },
      },
      {
        name: 'Legal Metrology and MRP on packaged goods',
        what: 'Packaged items such as candles, diffusers or gift sets generally need declarations on the pack, including the MRP inclusive of all taxes, and may not carry two MRPs. State Legal Metrology departments enforce this.',
        how: 'Product records hold the MRP and pack declarations from the supplier, so a pack that arrives without them is noticed at receiving, not after a visit from an inspector.',
      },
      {
        name: 'Consumer protection, exchanges and credit notes',
        what: 'Consumers can complain about defective goods or deficient service, including delay on a paid custom order. Your stated exchange terms and written job approvals are your evidence.',
        how: 'Exchange terms, credit notes with expiry and signed job approvals sit on the sale or job record with who made each change.',
      },
      {
        name: 'Staff records under state shop rules',
        what: 'Most states require records of working hours, weekly offs and leave under their Shops and Establishments rules. Details differ by state, and festive extra hours need care.',
        how: 'Shifts, extra festive hours and leave are recorded against each person, including temporary staff, so the register exists without a separate notebook.',
      },
    ],
    note: 'Rules change and differ by state and by item. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A floor assistant should not see cost prices. The tailor should not see customer payments. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'What is earning, what is stuck, and what should I buy for next season?', sees: 'Sales by category, sell-through, slow stock, supplier orders, consignment dues and every shop side by side.' },
    { role: 'Shop manager', question: 'What needs doing today?', sees: 'Fast movers short, approvals, enquiries going cold, staff roster and open credit notes.' },
    { role: 'Floor staff', question: 'Do we have it, where is it, and what is it?', sees: 'Item records with price, size, location and notes, and their own sales.' },
    { role: 'Workshop lead', question: 'Which jobs are due and what are the measurements?', sees: 'Custom jobs by stage, measurements, photos, tailor and fitter schedules.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Sales by tax category, supplier and artisan payables, consignment statements, credit notes.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing software or counter system. We agree during setup how sales reach Verity.',
      'Your tailor, fitters and artisans, who work as they do now. Your team or they update the stage.',
      'Instagram and WhatsApp for talking to buyers. Staff reply, Verity logs the enquiry and who owns it.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Run your billing counter.',
      'Host an online shop or take orders from the public.',
      'Send messages or offers to customers on its own.',
      'Run payroll or prepare tax returns.',
    ],
    migration:
      'We bring your items, stock, supplier orders, custom jobs and customer list across from the sheets, notebooks and software you use now, in stages, so the shop keeps trading while it happens.',
  },

  faqHeading: 'Questions home decor store owners ask.',
  faqs: [
    [
      'I have thousands of small items. Do I have to enter all of them first?',
      'No. We start with your best-selling lines and the ones with money tied up, then add the rest in stages. Many shops begin with a category at a time, so the shop keeps trading while the list grows.',
    ],
    [
      'Can Verity handle curtain and blind jobs with measurements?',
      'Yes. A custom job holds measurements by window, fabric, lining, instructions, photos, the tailor and fitter, dates, advance and balance. Stages are set up in week 2 in your own terms.',
    ],
    [
      'Does it replace my billing software?',
      'No. Your billing keeps issuing bills. We agree during setup how sales and payments reach Verity, which then holds the item history, jobs, suppliers and the picture around them.',
    ],
    [
      'Can it help me plan the Diwali buy?',
      'It shows last year\'s sales by category and week, what you bought, what was left and what it cost. The decision is still yours, but it is made with those numbers and not from memory.',
    ],
    [
      'Can it handle consignment pieces from small brands?',
      'Yes. Consignment items are held as the brand\'s stock in your shop. Every sale credits what you owe them, and you can print the statement of sales, stock left and amount due at any date.',
    ],
    [
      'Will it post my products on Instagram or sell online?',
      'No. Verity does not run an online shop or post for you. Enquiries from Instagram or WhatsApp are logged as enquiries so staff see them in one list, and stock and promises are checked there.',
    ],
    [
      'Who can see my cost prices?',
      'Only the people you allow. Access is set by role, so floor staff see selling prices and notes while cost prices stay with you and your accountant. Every change is recorded with who made it and when.',
    ],
    [
      'I run a single small shop. Is this too much?',
      'A single shop has the same seasonal peaks and slow stock, with less spare time to notice them. We set up only what you need, and the process is the same four weeks.',
    ],
    [
      'What does it cost?',
      'It depends on the number of shops, staff and what you want set up. Message us and we will give you a clear number after a short conversation about how your shop buys and sells.',
    ],
  ],

  related: ['furniture-stores', 'gift-shops', 'interior-designers', 'interior-design-firms', 'department-stores', 'retail-stores'],

  ctaHeading: 'Start with last Diwali\'s left-over stock.',
  ctaLede:
    'Tell us how your shop buys and sells, and we will show you what sold, what stayed and what it cost last season, using your own numbers.',
};
