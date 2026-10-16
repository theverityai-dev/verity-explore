export default {
  schema: 2,
  slug: 'garment-manufacturers',
  status: 'published',
  plural: 'garment manufacturers',
  subject: 'garment factory',
  checked: '15 October 2026',

  seo: {
    title: 'Garment factory software for buyer orders and lines | Verity',
    description:
      'The 14 problems behind late garment shipments: style changes, fabric and trim gaps, line efficiency, rejects, job work and slow buyers, and the Verity screens that fix them.',
    keywords: [
      'garment factory software India',
      'apparel order and style tracking',
      'garment production line efficiency tracking',
      'fabric and trim inventory for garment makers',
      'garment export shipment tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'orders', 'suppliers', 'logistics', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for garment manufacturers',
    headline: 'Your buyer changed the order twice. The factory found out when the cutting was done.',
    lede:
      'A garment order is hundreds of small facts: styles, colours, size splits, fabric lots, trims, sample approvals, line targets and a ship date that does not move. They live in buyer emails, a planning board and the heads of merchandisers. Verity keeps each order and style as one record that everyone from the merchandiser to the packing hall works from.',
    oneLine:
      'One system that knows every buyer order and style, every metre of fabric and carton of trims, every line’s output, every reject and every shipment date.',
    note: 'No new department is needed. Records come from the cutting slips, line sheets and inspection reports your factory already writes.',
    screen: 'owner',
    screenNote: 'orders, lines, materials and shipments',
  },

  today: {
    heading: 'The sewing floor is busy. The order file is where things go wrong.',
    paragraphs: [
      'Machines run, lines are full, and the supervisors know their lines. The harder part is everything around the floor: which orders are waiting on trims, which style has a revised quantity, what the buyer said on a call yesterday, and whether the container date is still safe.',
      'Information sits in many places. Buyer purchase orders and revisions in email. A time and action calendar on a wall or in a spreadsheet. Fabric and trim registers in stores. Line production sheets. A cutting register. Quality reports on paper or in PDFs. Shipping documents with a forwarder. The merchandiser is the human link between all of them.',
      'So the factory does not stop. It runs late and pays for it: air freight to save a ship date, a discount on a rejected lot, overtime to catch up, and a buyer who gives the next order to someone else.',
    ],
    stack: ['Buyer emails and WhatsApp', 'Time and action calendar in Excel', 'Fabric and trim registers', 'Line production sheets', 'Inspection reports', 'Forwarder and shipping documents'],
    stackNote: 'Each of these is kept up by someone careful. None of them knows what the others say.',
  },

  painsHeading: 'Where a garment factory actually loses money and dates.',
  painsLede:
    'These are the situations garment makers describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Orders',
      title: 'Buyer revisions reach the floor late or not at all',
      scene:
        'The buyer revises the size ratio on a style and cuts the quantity of one colour. The email goes to the merchandiser. The cutting master is already working from the older sheet and 800 extra pieces are cut.',
      cost:
        'Example arithmetic: 800 surplus pieces at a fabric and making cost of ₹300 are ₹2.4 lakh in goods nobody ordered, plus the lost sales value if they cannot be sold.',
      fix:
        'Each order is a record with styles, colours and size splits. A revision creates a new version with the change highlighted and notifies the cutting, stores and planning owners, who confirm that they have seen it.',
      screen: 'styles',
    },
    {
      area: 'Orders',
      title: 'Sample approvals drag and nobody owns the delay',
      scene:
        'The fit sample has been with the buyer for two weeks. The pre-production sample is waiting on a lab test. The bulk fabric cannot be cut before approval, but the ship date has not moved.',
      cost:
        'Every week lost at the sample stage comes out of cutting and sewing time later, and is usually recovered with overtime or air freight.',
      fix:
        'Each style shows its sample stages with owner, sent date and buyer comments. Verity lists approvals that are overdue, with the shipments they will squeeze, and tasks the merchandiser to follow up.',
      screen: 'styles',
    },
    {
      area: 'Materials',
      title: 'The line waits for trims, buttons or labels',
      scene:
        'The shell fabric is in and cutting is done. The care labels are held at the supplier for a printing correction. The line sews 60 percent and parks the rest, with a chargeable delay on the shipping date.',
      cost:
        'A parked line wastes operator hours already paid for. Missing trims are one of the most common reasons for late garment shipments.',
      fix:
        'Each style has a bill of materials of fabric, trims and packing. Verity compares what each order needs with stock and purchase orders, and lists shortfalls with the date by which each must reach the line.',
      screen: 'materials',
    },
    {
      area: 'Materials',
      title: 'Fabric received is short, shaded or shrinks more than the test',
      scene:
        'A roll lot arrives 3 percent short against the invoice. The shade band is slightly different from the approved one. After washing, shrinkage is higher than the buyer’s limit. Each is found at a different stage.',
      cost:
        'Fabric is typically the largest cost of a garment. A shortfall means fewer pieces or a re-order, and a shade mismatch can fail a whole lot.',
      fix:
        'Fabric is received by lot, with metres, shade band and test results recorded. Cutting draws from a named lot, and the consumption per style is compared with the booked quantity so shortfalls are seen at receipt, not at the cutting table.',
      screen: 'materials',
    },
    {
      area: 'Cutting',
      title: 'Cut quantities and fabric consumption drift from the plan',
      scene:
        'The marker is made on the planned consumption, but the cutting room uses a little more per piece, spreads more plies than needed and cuts a few extra pieces for safety. Nobody adds it up.',
      cost:
        'Example arithmetic: 3 percent over on a ₹6 crore monthly fabric spend is ₹18 lakh a year. Excess cut pieces are stock that is only sometimes sold.',
      fix:
        'Cutting records fabric used, pieces cut and end bits per marker. Verity shows consumption against the plan by style and cutting table, and flags orders cut beyond the ordered quantity.',
      screen: 'materials',
    },
    {
      area: 'Lines',
      title: 'Line efficiency is a number said at the end of the day',
      scene:
        'The target was 700 pieces. The line made 540. The reason is given as machine trouble, but nobody wrote down how many minutes were lost, to which machine, or for how long the line waited for cut parts.',
      cost:
        'A line that is 10 points below plan on a 50-operator line wastes the pay of five operators every shift, and the shortfall appears as late pieces later.',
      fix:
        'Hourly or shift output is entered per line, with reasons for lost time. Verity shows efficiency against the standard minutes per piece, by line and style, and ranks causes of lost time over the week.',
      screen: 'lines',
    },
    {
      area: 'Lines',
      title: 'Style changes keep restarting the learning curve',
      scene:
        'A new style goes on a line mid-week. It needs different attachments and operator skills. The first two days run at half the rate, and the planning board still counts the full target.',
      cost:
        'Frequent changeovers on small orders consume days of production that are not in the quote.',
      fix:
        'Each style carries its operations, standard minutes and skill needs. Planning sees how many days a change costs and groups similar styles onto the same line, with the ramp-up recorded after each style.',
      screen: 'lines',
    },
    {
      area: 'Quality',
      title: 'Defects are found at final inspection, when it is too late to fix cheaply',
      scene:
        'Inline checkers see problems at their station but record nothing. At final, the buyer’s inspector finds a crooked label on 4 percent of a lot. The line has already made 3,000 more.',
      cost:
        'Rework at the end costs many times more than at the operation. A failed inspection holds the shipment and can bring a buyer discount.',
      fix:
        'Defects are recorded by operation, line and operator at inline, endline and final stages. Verity shows the defect that is rising, so a supervisor can fix the cause within the hour, and a failed lot shows which operations caused it.',
      screen: 'quality',
    },
    {
      area: 'Job work',
      title: 'Pieces go out for embroidery, printing or wash and come back different',
      scene:
        'Ten thousand panels go to an embroidery unit and a wash unit. The returns come in lots, some short, some rejected, and the factory does not know what is where. One challan is missing.',
      cost:
        'Missing pieces cannot be replaced from the cut fabric left, and an unrecorded shortage is absorbed by the factory.',
      fix:
        'Each outward challan records style, pieces, process and the expected return. Returns are matched, shortages and rejects are recorded against the unit, and work in hand with each is a number.',
      screen: 'lines',
    },
    {
      area: 'Costing',
      title: 'The costing sheet is not the cost of the order',
      scene:
        'The quote assumed 1.1 metres per piece, an efficiency of 65 percent and a wash rate. In the bulk, fabric consumption is 1.14, the line makes 58 percent and the buyer asks for a cut in price on top.',
      cost:
        'A style that appears to give 8 percent margin can give nothing, and the factory only finds out after shipping.',
      fix:
        'The quote is built from the style’s bill of materials, operations and rates. After the order, the actual consumption, efficiency and rejects are compared with the quote, so the real margin per style is known and usable for the next quote.',
      screen: 'styles',
    },
    {
      area: 'Shipments',
      title: 'The ex-factory date slips and the only remedy is air freight',
      scene:
        'The vessel closes on the 28th. The goods are packed on the 27th, the inspection is pending and the invoice is in draft. The forwarder is asking for the packing list. The buyer’s agent has called three times.',
      cost:
        'Example arithmetic: air freight on 5,000 pieces that should have gone by sea can run into several lakh rupees, borne by the factory.',
      fix:
        'Every order has a shipment date with a countdown of the steps behind it: cutting, sewing, finishing, inspection, packing, documents, booking. Verity shows which step is behind and by how many days, and tasks its owner.',
      screen: 'shipments',
    },
    {
      area: 'Money',
      title: 'Export documents, incentives and payment realisation are tracked loosely',
      scene:
        'The shipping bill is filed and the goods sail. After that, the buyer’s payment, the bank realisation and the incentive claim are each followed in a different register by a different person.',
      cost:
        'Delayed realisation holds working capital, and unclaimed duty and tax rebate amounts are lost if not followed up in time. The RoSCTL scheme for apparel has been extended to 31 December 2026, so it is worth claiming with care.',
      fix:
        'Each shipment carries its invoice, shipping bill, payment due date and incentive claim status. Verity lists payments due, overdue realisations and claims not yet lodged.',
      screen: 'shipments',
      source: {
        name: 'Manorama Yearbook, RoSCTL extension',
        url: 'https://www.manoramayearbook.in/current-affairs/india/2026/10/01/rosctl-scheme-extended-explained.html',
      },
    },
    {
      area: 'People',
      title: 'Operators leave, attendance swings and compliance audits arrive',
      scene:
        'Absentees after a festival, attrition of skilled operators, overtime beyond the legal limit to catch up. A buyer’s social compliance audit asks for wage and hours records for six months, and the factory searches for them.',
      cost:
        'A short line, a failed audit, and a buyer who holds orders until the finding is closed.',
      fix:
        'Attendance, overtime, skills, wages by piece or time, and contract workers are recorded per person. The records an auditor asks for are produced from the same source, and absentees are seen the evening before.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'Several buyers, several units, no single picture',
      scene:
        'You supply four brands from two units. Each buyer has its own demands and each unit its own sheets. You know the situation only by calling the unit heads.',
      cost:
        'Capacity goes to the loudest buyer and not the most profitable, and a problem in one unit is found when the shipment is late.',
      fix:
        'A morning view lists orders at risk, lines behind, shortfalls and dues, each item with an owner. Units are locations in one system, so lines and orders compare side by side.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '82.6%',
      text: 'of surveyed Indian textile and garment businesses reported more order reductions, and 73.9 percent reported more demands for discounts, in a December 2025 survey by the Confederation of Indian Textile Industry after the US duty rise.',
      source: { name: 'CITI survey, via Business and Human Rights Resource Centre', year: '2026', url: 'https://www.business-humanrights.org/en/latest-news/india-garment-textile-suppliers-report-sharp-increase-in-order-reductions-discount-demands-order-cancellations-amid-us-tariffs/' },
    },
    {
      figure: '₹45,000 crore',
      text: 'is Tiruppur’s annual export value, of which about ₹12,000 crore, around 30 percent, goes to the US, according to reporting in September 2025 on exporters being asked to bear tariff costs.',
      source: { name: 'Business and Human Rights Resource Centre', year: '2025', url: 'https://www.bhrrc.org/en/latest-news/india-tiruppur-garment-exporters-told-to-bear-us-tariff-costs-or-face-cancelled-orders-wpftc/' },
    },
    {
      figure: '31 Dec 2026',
      text: 'is the date to which the RoSCTL rebate scheme for apparel and made-ups has been extended. It benefited over 15,400 exporters in 2025-26, mostly MSMEs.',
      source: { name: 'Manorama Yearbook', year: '2026', url: 'https://www.manoramayearbook.in/current-affairs/india/2026/10/01/rosctl-scheme-extended-explained.html' },
    },
    {
      figure: '₹2,500',
      text: 'per piece is the line in the GST reforms of September 2025: garments up to that price are taxed at 5 percent and those above at 18 percent.',
      source: { name: 'Pine Labs, GST on garments guide', year: '2026', url: 'https://www.pinelabs.com/blog/gst-on-garments-and-fabrics-in-2026-everything-you-need-to-know' },
    },
  ],
  factsNote:
    'These come from news reports, an industry-survey summary and a payment company’s guide, not the original government texts, and tariffs and schemes keep changing. Check the current position before relying on them.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your factory’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Factory / Today',
      meta: 'Unit 2, Tiruppur',
      heading: 'The owner’s morning view',
      caption:
        'Orders at risk, line output, materials short, absentees and payments due on one screen, with the items that need a decision listed under them. This replaces the morning round of calls to unit heads.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Orders at risk', value: '4', note: 'ship date threatened' },
            { label: 'Line efficiency', value: '61%', note: 'plan 66%' },
            { label: 'Trims short', value: '7', note: 'items for 3 styles' },
            { label: 'Payments overdue', value: '₹52 L', note: '2 buyers' },
          ],
        },
        { type: 'title', text: 'Line efficiency against plan, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Line 1', value: 71, display: '71%' },
            { label: 'Line 2', value: 64, display: '64%' },
            { label: 'Line 3', value: 52, display: '52%', tone: 'muted' },
            { label: 'Line 4', value: 66, display: '66%' },
          ],
        },
        { type: 'alert', text: 'Order PO-4432 for Nordic Basics ships 28 Oct. Care labels are 6 days late from the supplier.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Line 3 behind plan', meta: '9 operators absent, 3 contract workers expected', tag: ['Short', 'flag', 'Covered', 'ok'] },
            { name: 'Revision on PO-4417', meta: 'Size split changed, cutting to confirm', tag: ['Confirm', 'flag', 'Confirmed', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'styles',
      title: 'Orders and styles',
      meta: 'Buyer: Nordic Basics',
      heading: 'Every order as styles, colours and sizes, with its calendar',
      caption:
        'The buyer’s order, its revisions, size splits and sample approvals in one place, with the time and action calendar and the quoted margin against actual so far.',
      blocks: [
        {
          type: 'record',
          title: 'PO-4432, Nordic Basics',
          sub: '3 styles, 24,000 pieces, ex-factory 28 Oct',
          fields: [
            ['Style 2210 Polo', '9,000 pcs, 3 colours'],
            ['Revision', ['Rev 2, sizes changed', 'flag', 'Cutting confirmed', 'ok']],
            ['Samples', 'Fit approved, PP sample sent'],
            ['Quoted margin', '9.5%'],
            ['Actual so far', '7.8%'],
            ['Status', ['At risk', 'late']],
          ],
          timeline: [
            ['4 Oct', 'Fabric received, lot F-312'],
            ['9 Oct', 'Cutting started'],
            ['15 Oct', 'Care labels delayed by supplier'],
          ],
        },
        {
          type: 'table',
          cols: ['Style', 'Sample stage', 'Sent', 'Buyer reply', 'Status'],
          rows: [
            ['2210 Polo', 'PP sample', '8 Oct', 'Awaited', ['Overdue', 'late', 'Chased', 'ok']],
            ['2214 Tee', 'Fit sample', '1 Oct', 'Approved', ['OK', 'ok']],
            ['2219 Hoodie', 'Proto', '12 Oct', 'Awaited', ['Watch', 'flag']],
          ],
        },
      ],
    },
    {
      id: 'materials',
      title: 'Fabric and trims',
      meta: 'Stock against orders',
      heading: 'What each style needs, what has arrived, what is late',
      caption:
        'Fabric by lot and shade band, trims and packing by item, matched against what the next orders will use. Cutting consumption is compared with the plan.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Needed', 'Received', 'Due', 'Status'],
          rows: [
            ['Fabric F-312, pique', '18,400 m', '18,100 m', '', ['Short 1.6%', 'flag']],
            ['Care label 2210', '9,300', '0', '21 Oct', ['Late', 'late', 'Chased', 'ok']],
            ['Buttons 4 hole', '36,000', '36,000', '', ['OK', 'ok']],
            ['Poly bag 2210', '9,300', '4,000', '19 Oct', ['Short', 'flag']],
          ],
        },
        { type: 'alert', text: 'Style 2214 cutting used 3.4% more fabric than planned across 6 markers.', action: 'Check' },
      ],
    },
    {
      id: 'lines',
      title: 'Lines and job work',
      meta: 'Today, by line',
      heading: 'Output against target, lost time by cause, work out at job units',
      caption:
        'Each line’s output and efficiency for the day with reasons for lost minutes. Pieces at embroidery, print and wash units, with returns matched against what went out.',
      blocks: [
        {
          type: 'table',
          cols: ['Line', 'Style', 'Target', 'Made', 'Efficiency', 'Main cause'],
          rows: [
            ['Line 1', '2210 Polo', '700', '664', '71%', 'None'],
            ['Line 2', '2214 Tee', '800', '602', '64%', 'Waiting for cut parts'],
            ['Line 3', '2219 Hoodie', '450', '298', '52%', ['Style change, absentees', 'late']],
          ],
        },
        {
          type: 'table',
          cols: ['Challan', 'Unit', 'Process', 'Out', 'Back', 'Status'],
          rows: [
            ['JW-612', 'Surya Embroidery', 'Embroidery', '4,000', '3,850', ['150 pending', 'flag', 'Received', 'ok']],
            ['JW-618', 'Clean Wash Unit', 'Garment wash', '6,000', '2,000', ['Due 19 Oct', 'late']],
          ],
        },
      ],
    },
    {
      id: 'quality',
      title: 'Quality',
      meta: 'Inline, endline and final',
      heading: 'Defects by operation, and what the buyer’s inspector will find',
      caption:
        'Defects recorded by operation and line at every stage. A rising defect is visible within the hour, and each lot shows its final inspection result against the buyer’s acceptable level.',
      blocks: [
        { type: 'title', text: 'Top defects today, all lines' },
        {
          type: 'bars',
          items: [
            { label: 'Label attach, crooked', value: 74, display: '112' },
            { label: 'Open seam', value: 48, display: '73', tone: 'muted' },
            { label: 'Stains', value: 31, display: '47', tone: 'muted' },
            { label: 'Measurement out', value: 18, display: '27', tone: 'muted' },
          ],
        },
        {
          type: 'table',
          cols: ['Lot', 'Style', 'Inspected', 'Defects', 'Result'],
          rows: [
            ['L-2210-A', '2210 Polo', '200 pcs', '5', ['Pass', 'ok']],
            ['L-2214-B', '2214 Tee', '200 pcs', '11', ['Fail', 'late', 'Reworked, passed', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'shipments',
      title: 'Shipments and payments',
      meta: 'Next 3 weeks',
      heading: 'Every shipment, every step behind it, and when the money arrives',
      caption:
        'Each shipment with its countdown of steps, the documents ready and the forwarder’s cut-off. After sailing, the payment due, bank realisation and incentive claim status.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'PO-4432: packing complete', meta: '28 Oct vessel cut-off', done: false },
            { text: 'PO-4432: final inspection booked', meta: 'Buyer agent, 25 Oct', done: true },
            { text: 'PO-4432: packing list and invoice drafted', meta: 'Accounts', done: false },
            { text: 'PO-4419: shipping bill filed', meta: 'Sailed 9 Oct', done: true },
          ],
        },
        {
          type: 'table',
          cols: ['Shipment', 'Buyer', 'Invoice', 'Payment due', 'Incentive claim', 'Status'],
          rows: [
            ['PO-4419', 'Nordic Basics', '$118,400', '8 Nov', 'Not lodged', ['Lodge', 'flag', 'Lodged', 'ok']],
            ['PO-4402', 'Coast Casual', '$96,200', '2 Oct', 'Lodged', ['Overdue', 'late', 'Promised', 'info']],
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Monday, before and after.',
  dayLede: 'The sewing is the same. What changes is that every change, every shortage and every step toward the ship date is on a record that raises its hand.',
  day: [
    {
      time: '8:30',
      before: 'The merchandiser reads overnight buyer emails and passes changes to the floor by phone.',
      after: 'Revisions arrive as a new order version, and cutting, stores and planning each confirm they have seen it.',
    },
    {
      time: '10:30',
      before: 'You learn from the line supervisor that labels are missing, two days after they were due.',
      after: 'The shortfall was listed on Thursday, the supplier was chased, and the style waits on the board with a date.',
    },
    {
      time: '12:30',
      before: 'Line 3 makes half the target. The reason is machine trouble.',
      after: 'The lost minutes are split: 70 for the style change, 40 waiting for cut parts, 20 for a needle break.',
    },
    {
      time: '3:00',
      before: 'A final inspector finds crooked labels on a finished lot.',
      after: 'Endline flagged label attachment at 11, the supervisor fixed the cause and the lot passes.',
    },
    {
      time: '5:30',
      before: 'The packing list and invoice start the evening before the vessel cut-off.',
      after: 'Documents were drafted when the lot cleared inspection, and the shipping checklist shows one item left.',
    },
    {
      time: 'Month end',
      before: 'Payment realisations and incentive claims are reconciled from three registers.',
      after: 'Payments due, overdue realisations and claims not lodged are one list with an owner for each.',
    },
  ],

  approach: {
    heading: 'We set it up in four weeks, around your merchandising desk and your floor.',
    lede:
      'We start with the orders and the floor, because that is where dates are lost. We map how a buyer order really travels through your factory, build Verity around it, and train the people who touch it.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with your merchandisers, planning and store heads, walk the cutting room, lines and finishing hall, and trace one live order from purchase order to payment, noting every sheet and email it passes through.',
        you: 'Two to three hours of your time, and an hour each from merchandising, planning and stores. One live order file and your time and action calendar.',
        get: 'A written map of how orders, styles, materials, lines and shipments move today, with the problems we will fix first, in order of cost.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your buyers and styles, bills of materials, lines and standard minutes, inspection stages and defect lists, job work units, shipment steps and approval limits. Build the screens above in your own terms.',
        you: 'Review the setup with merchandising and planning. Correct the calendar steps and the quality stages where we have them wrong.',
        get: 'A working Verity with your buyers, styles, lines and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in open orders, styles, fabric and trim stock, job work balances, shipments in progress and buyer dues from your sheets or ERP. Train each department at its own desk with live orders.',
        you: 'Your files as they are. One hour per department and a line supervisor who will enter output for a week.',
        get: 'Your open orders, stock and shipments inside Verity, and a team that has used it on live orders.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first shipments with you, adjust which delays are flagged, and add a unit, a buyer’s requirements or a new process as the factory changes.',
        you: 'A short monthly review of orders, efficiency and realisation.',
        get: 'A system that keeps matching how the factory runs, with someone accountable for it.',
      },
    ],
    bring: [
      'One or two live buyer order files with revisions',
      'Your time and action calendar format',
      'Fabric and trim registers, even if partial',
      'Line production sheets for a recent week',
      'Shipping and payment records for last quarter’s exports',
    ],
    time: 'About 9 to 12 hours of your own time across the four weeks, mostly in week 1. Merchandising, planning, stores and accounts need a few hours each.',
    after: 'Nobody is hired to run Verity. Orders, cutting, line output and inspection are recorded on the sheets your factory already fills in, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your factory a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own order, material, line, quality and shipment records. Ask in plain language, then turn the answer into tasks for the right person.',
    examples: [
      {
        q: 'Which orders are at risk of missing their ship date, and what is holding each?',
        a: 'Four orders are at risk. PO-4432 waits for care labels, PO-4417 for a size revision to be confirmed, PO-4426 for a pending approval and PO-4440 for a late fabric lot.',
        rows: [['PO-4432', 'Care labels'], ['PO-4417', 'Revision'], ['PO-4426', 'Sample approval'], ['PO-4440', 'Fabric lot']],
        action: 'Create a task for each owner',
      },
      {
        q: 'Which line lost the most time last week and why?',
        a: 'Line 3 lost about 14 hours: style changes 6, waiting for cut parts 5, absentees 3.',
        rows: [['Line 3', '14 h'], ['Line 2', '9 h'], ['Line 1', '4 h']],
      },
      {
        q: 'Which shipments have payment overdue or an incentive claim not lodged?',
        a: 'PO-4402 payment of $96,200 is overdue by 13 days. PO-4419 has no incentive claim lodged.',
        action: 'Assign follow-ups',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. People still make the calls and write to buyers. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A buyer order is revised',
      then: ['New version stored with the change shown', 'Cutting, stores and planning each notified', 'Orders already cut checked against the new split'],
    },
    {
      when: 'A sample approval passes its expected date',
      then: ['Task to the merchandiser to chase', 'Shipments it will squeeze are listed', 'Reply recorded on the style'],
    },
    {
      when: 'A trim or fabric shortfall is found for a style',
      then: ['Needed-by date calculated from the line start', 'Task to purchase with the supplier', 'Planning told which line is affected'],
    },
    {
      when: 'A lot fails final inspection',
      then: ['Lot held from packing', 'Defects by operation attached', 'Task to the line supervisor to rework and reinspect'],
    },
    {
      when: 'An order passes final inspection',
      then: ['Packing and documents tasks created', 'Forwarder cut-off checked against the date', 'Shipping checklist opened for accounts'],
    },
    {
      when: 'A buyer payment passes its due date',
      then: ['Added to the overdue list with the buyer and amount', 'Follow-up assigned to a named person', 'Promise or outcome recorded on the shipment'],
    },
  ],

  rules: {
    heading: 'The rules and audits a garment maker has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules and audits depend on in order, so your shipping team and accountant are not rebuilding them from files.',
    items: [
      {
        name: 'RoSCTL rebate for apparel exports',
        what: 'The scheme rebates embedded state and central taxes on exports of apparel and made-ups, and has been extended to 31 December 2026 under existing guidelines, according to a news report. Rates and claim procedures come from the Ministry notifications.',
        how: 'Each shipment carries its shipping bill and claim status, so claims not yet lodged are visible.',
        source: { name: 'Manorama Yearbook', url: 'https://www.manoramayearbook.in/current-affairs/india/2026/10/01/rosctl-scheme-extended-explained.html' },
      },
      {
        name: 'GST on garments and fabric',
        what: 'From the September 2025 reforms, garments up to ₹2,500 per piece are generally taxed at 5 percent and those above at 18 percent, while man-made fibre and yarn moved to 5 percent. Exporters generally ship under a letter of undertaking or claim a refund, which your accountant manages.',
        how: 'Styles carry the item category and price, so the split your accountant needs is clear for each invoice.',
        source: { name: 'Pine Labs, GST on garments guide', url: 'https://www.pinelabs.com/blog/gst-on-garments-and-fabrics-in-2026-everything-you-need-to-know' },
      },
      {
        name: 'Labour Codes, wages and working hours',
        what: 'The four Labour Codes took effect from 21 November 2025. Registers, working hours and overtime rules are being set by central and state rules, and many buyers audit them separately.',
        how: 'Attendance, hours, overtime and wages are recorded per person and line, so registers and audit data are produced from one source.',
        source: { name: 'TaxGuru, summarising the Ministry of Labour release', url: 'https://taxguru.in/?p=1002943' },
      },
      {
        name: 'Buyer compliance audits and product tests',
        what: 'Overseas buyers generally require social compliance audits and product tests for chemicals, labelling and fabric. The exact requirements are set by each buyer’s code and by the markets they sell in.',
        how: 'Audit findings, corrective actions and test reports are records with owners and dates, linked to the style or lot they concern.',
      },
    ],
    note: 'Rules change and differ by state, product and buyer. Confirm current requirements with your accountant, shipping adviser or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'The line supervisor does not need to see the buyer’s price. The merchandiser should not change stock. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which orders and buyers are worth the capacity?', sees: 'Orders at risk, margin by style, line efficiency, realisation due, and every unit side by side.' },
    { role: 'Merchandiser', question: 'What did the buyer ask for and where is it?', sees: 'Orders and revisions, sample stages, calendar steps, material status, shipment readiness.' },
    { role: 'Planning and production', question: 'Which line runs what, and who is behind?', sees: 'Line loading, output against standard, lost time, cutting status, absentees.' },
    { role: 'Stores and quality', question: 'What has arrived, what is short, what has failed?', sees: 'Fabric and trim lots, shortfalls, inline and final inspection, rework, job work balances.' },
    { role: 'Accounts and shipping', question: 'What ships, what is due and what is claimable?', sees: 'Shipment checklist, documents, payments due, incentive claims, supplier bills with days left.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your accounting package and export billing, which keep doing the books. We agree how data reaches Verity during setup.',
      'Your buyers’ own portals and quality systems, which you will keep using for their uploads.',
      'WhatsApp and email with buyers, agents and forwarders. Staff write; Verity tells them what is waiting.',
      'Your chartered accountant and customs adviser, who still handle returns and filings.',
    ],
    not: [
      'Read from your sewing machines or cutting systems.',
      'Send messages to buyers or forwarders on its own.',
      'File shipping bills, returns or incentive claims.',
      'Replace your merchandisers or your accountant.',
    ],
    migration:
      'We bring in your buyers, styles, bills of materials, stock, open orders, job work balances and dues from the sheets, ERP or registers you use now, in stages, so shipments continue while it happens.',
  },

  faqHeading: 'Questions garment makers ask.',
  faqs: [
    [
      'Our merchandisers live in email. Will they change?',
      'They keep emailing buyers. What changes is that the order and its revisions are stored once, in a record the cutting room, stores and planning also see, so nothing depends on forwarding.',
    ],
    [
      'Can Verity take purchase orders directly from our buyers?',
      'No. Orders are entered or imported from the buyer’s file by your team. We agree how data reaches Verity during setup, and the record then runs the factory.',
    ],
    [
      'Will line supervisors really enter output?',
      'Only if it is a few fields. We set up one short entry per hour or shift with a list of reasons to pick from. The supervisor sees the line’s efficiency back at once, which is more useful to them than a sheet that disappears into an office.',
    ],
    [
      'Do you handle a mix of knits and wovens, or several buyers with different rules?',
      'Yes. Styles, bills of materials, inspection rules and calendars are set per buyer and per style, so one buyer’s standard does not affect another’s.',
    ],
    [
      'We use job workers for embroidery, print and wash. Is that covered?',
      'Yes. Every piece sent out and received is on a challan, with shortages and rejects recorded against the unit, so work in hand at each is a number.',
    ],
    [
      'Does it do our export invoices and shipping bills?',
      'No. Your accounting package and shipping team keep doing that. Verity tracks the order, the checklist, the payment and the claim status, and tells accounts what is waiting.',
    ],
    [
      'Can I see two units together?',
      'Yes. Each unit is a location in one system. Orders, line efficiency, stock and dues compare side by side, and stock can be moved between units against a recorded transfer.',
    ],
    [
      'Who can see buyer prices and wages?',
      'Only the people you allow. Access is set by role, so a line supervisor sees output and quality, merchandising sees orders, and accounts sees prices. Every change is recorded with who made it and when.',
    ],
    [
      'What does it cost?',
      'It depends on the number of units, users and how much you want set up. Message us and we will give you a clear number after a short conversation about how your factory runs.',
    ],
  ],

  related: ['textile-manufacturers', 'exporters', 'manufacturers', 'tailors', 'fashion-stores', 'packaging-companies'],

  ctaHeading: 'Start with the orders that are about to miss their ship date.',
  ctaLede:
    'Tell us how your factory runs and we will show you the at-risk orders, the trim shortfalls and the overdue realisations it would find, using your own numbers.',
};
