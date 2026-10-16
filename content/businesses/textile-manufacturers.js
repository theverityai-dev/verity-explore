export default {
  schema: 2,
  slug: 'textile-manufacturers',
  status: 'published',
  plural: 'textile manufacturers',
  subject: 'mill',
  checked: '15 October 2026',

  seo: {
    title: 'Software for textile mills, weavers and processors | Verity',
    description:
      'The 14 problems that eat a textile unit’s margin: cotton lots, loom efficiency, fabric grades, dye batches, job work and slow buyers, and the Verity screens that fix them.',
    keywords: [
      'textile mill management software India',
      'yarn and fabric lot tracking',
      'weaving unit production software',
      'dyeing and processing batch tracking',
      'textile job work challan tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'orders', 'suppliers', 'logistics', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for textile manufacturers',
    headline: 'The yarn left the mill as one count and came back as one complaint.',
    lede:
      'A textile unit turns fibre into yarn, yarn into cloth and cloth into colour, over many machines, many lots and many hands. Where the loss began is rarely written down. Verity keeps every lot, count, loom and dye batch on one record so a complaint, a shortfall or a late payment can be followed back to its cause.',
    oneLine:
      'One system that knows every lot of fibre, every count of yarn, every metre of cloth, every job sent out for processing and every cheque still to come.',
    note: 'No new staff are needed. The records come from the lot slips, production sheets and challans your unit already writes.',
    screen: 'owner',
    screenNote: 'lots, looms, processing and dues',
  },

  today: {
    heading: 'Most mills measure the product well and the money badly.',
    paragraphs: [
      'The technical side is well understood. Counts are tested, cloth is inspected, shades are matched. What is harder to see is the commercial side: how much cotton came out as saleable yarn, which loom has lost four points of efficiency, how much cloth is sitting at three different processors, and which buyer is now ninety days late.',
      'That information is spread over many places. Lot slips in the mixing room. Shift production sheets. A grey stock register. Challan books for goods sent out for dyeing, folding or printing. Broker messages. The accounts package, which sees only invoices. The one person who knows how they fit together is usually the owner or a trusted production manager.',
      'The result is not a crash. It is a thin, steady loss through waste that is not measured, cloth that returns short from the processor, orders that change over too often, and receipts that arrive later each quarter.',
    ],
    stack: ['Lot and mixing slips', 'Shift production sheets', 'Grey and finished stock register', 'Job work challan books', 'Broker and buyer WhatsApp groups', 'Accounting package'],
    stackNote: 'Each is useful on its own. A complaint about one metre of cloth needs three of them.',
  },

  painsHeading: 'Where a textile unit actually loses money.',
  painsLede:
    'These are the situations spinners, weavers, knitters and processors describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Fibre and yarn',
      title: 'Cotton is bought on price, then the yarn varies',
      scene:
        'A good parcel of cotton is bought at a low rate. It is blended with older stock in the mixing room, the staple length and trash content differ from the last lot, and the 30s count starts showing thin places. The buyer complains a month later.',
      cost:
        'Example arithmetic: a 20-tonne yarn lot returned at ₹20 a kg below price is ₹4 lakh. The bigger cost is the repeat buyer who moves to another mill.',
      fix:
        'Each cotton lot is recorded with its source, staple, trash and rate, and each mixing is recorded against the lots used. Yarn lots link back to the mixing, so a complaint shows which bales went into it.',
      screen: 'lots',
    },
    {
      area: 'Fibre and yarn',
      title: 'Nobody knows how much cotton became saleable yarn',
      scene:
        'The mill consumes 100 tonnes of cotton and dispatches yarn. Waste is sold as it accumulates, but the waste percentage at each stage is nobody’s number. A rise of one point passes unnoticed for months.',
      cost:
        'Example arithmetic: one extra point of waste on 300 tonnes a month of cotton at ₹150 a kg is about ₹4.5 lakh a month, partly recovered as waste sales at a much lower rate.',
      fix:
        'Cotton issued, yarn produced and waste sold are recorded by lot and by stage. Verity shows yield for each mixing, so a drift in waste is seen within the week and compared across shifts.',
      screen: 'lots',
    },
    {
      area: 'Production',
      title: 'Loom and spindle efficiency is a guess',
      scene:
        'The weaving shed claims 85 percent efficiency. Some looms stop often for warp breaks and wait for a fitter. The shift register shows total metres, but not which looms lose time or why.',
      cost:
        'A loom running at 78 instead of 85 percent loses about 8 percent of its output every day, which no one sees on the bill.',
      fix:
        'Shift output is entered per loom or frame with stoppage reasons. Verity ranks looms by efficiency and lists the three biggest causes of lost time, so the fitter and shift in charge work from facts.',
      screen: 'production',
    },
    {
      area: 'Production',
      title: 'Too many small orders, too many changeovers',
      scene:
        'Sales accepts a 4,000-metre order of a new design on a shed that was warping for a larger order. The warp is changed, the larger order is delayed, and the shed loses a day.',
      cost:
        'Each changeover loses hours of machine time, and small orders accepted without a loading check push the orders already promised.',
      fix:
        'Orders carry quantity, count or construction and promised date. Before sales confirms, Verity shows the loading on each shed or frame, so small orders are grouped or priced to cover the change.',
      screen: 'orders',
    },
    {
      area: 'Quality',
      title: 'Cloth is graded late and defects are not traced',
      scene:
        'Fabric is inspected after it has been rolled. A run of missing ends is found on fifty rolls, from one loom, over three days. By then the whole run has been made.',
      cost:
        'Cloth downgraded to B or C grade sells at a heavy discount. Example arithmetic: 3,000 metres downgraded at ₹25 a metre is ₹75,000 lost in one run.',
      fix:
        'Inspection points per roll are entered with the loom, warp beam and shift. Verity shows defect rates by loom and by beam, so a faulty one is stopped after a few rolls and not a few days.',
      screen: 'production',
    },
    {
      area: 'Processing',
      title: 'The shade does not match and the lot is re-dyed',
      scene:
        'The lot goes into the dye house against a swatch. The first sample is slightly off, a second dyeing is done, and the dyer’s recipe is on a slip that is not seen again. The next order for the same shade starts from nothing.',
      cost:
        'A redye costs dyes, chemicals, power, water and effluent handling again, and it delays the dispatch.',
      fix:
        'Each dye batch records its recipe, machine, fabric lot and result. A repeat order for the same shade pulls the recipe that worked, and redye rates are visible by shade and by machine.',
      screen: 'processing',
    },
    {
      area: 'Processing',
      title: 'Cloth goes out for processing and comes back short',
      scene:
        'Grey cloth is sent to three processors on paper challans. When it returns, the metres are fewer than expected. Everyone claims shrinkage, and the challan from last month cannot be found.',
      cost:
        'Example arithmetic: a shortage of 2 percent on 1 lakh metres a month at ₹90 is ₹1.8 lakh, and it is rarely recovered because the original numbers were not kept.',
      fix:
        'Every job work challan records metres out, with the processor, process and expected return. Returns are matched against it, and shrinkage per processor is compared, so one with consistently higher loss is visible.',
      screen: 'processing',
    },
    {
      area: 'Stock',
      title: 'Grey, in-process and finished cloth are counted separately',
      scene:
        'At the end of the quarter, a physical count finds cloth that the register does not show, and the register shows cloth that cannot be found. Some of it is at a processor, some in godown 2.',
      cost:
        'Orders are accepted against stock that does not exist, and old stock sits unseen until it is sold at a loss.',
      fix:
        'Stock is held by stage and place: grey in the shed, at each processor, folded and ready, and in each godown. The total available to promise to a buyer comes from the records.',
      screen: 'processing',
    },
    {
      area: 'Costs',
      title: 'Fixed price orders, moving fibre prices',
      scene:
        'A yarn contract was agreed at a price when cotton was ₹55,000 a candy. By delivery, cotton is up and the margin has gone. The mill still sells the order because the buyer is important.',
      cost:
        'A volatile input with fixed output prices is the main swing in a mill’s annual profit, and it is easiest to miss at order time.',
      fix:
        'Each order shows the cost of the mixing on record and the margin at the rate agreed. If the cotton replacement rate moves beyond a limit, the order is flagged so the owner decides before further cover is bought.',
      screen: 'orders',
    },
    {
      area: 'Power',
      title: 'Power is the second biggest cost and is read once a month',
      scene:
        'The electricity bill arrives with a demand penalty. A part of the shed ran on diesel during a cut. Nobody knows which shift or machine used how much, so there is nothing to change.',
      cost:
        'Power and fuel are one of the largest running costs of a spinning or processing unit, and idle running of a few machines is spread over the whole month.',
      fix:
        'Meter readings and diesel use are entered per shift and compared with output. Verity shows units per kilogram of yarn or per metre of cloth by day, so an unusual day is seen and asked about.',
      screen: 'production',
    },
    {
      area: 'Money',
      title: 'Buyers take 60 to 120 days and the chasing is through brokers',
      scene:
        'A trader or garment maker pays after ninety days and sometimes asks for a discount on top. The broker passes on messages, and the account person is unsure who promised what.',
      cost:
        'Example arithmetic: ₹1 crore held for an extra 60 days at 11 percent a year is about ₹1.8 lakh in interest. Cheques that bounce or goods returned for quality add to it.',
      fix:
        'Each invoice has a due date, broker, buyer and a follow-up owner. Overdue amounts are listed by buyer and age with every promise recorded, so credit limits can be decided on history.',
      screen: 'money',
    },
    {
      area: 'Money',
      title: 'Small suppliers must be paid on time, and many mills are small suppliers too',
      scene:
        'A mill buying from micro and small vendors pays them when cash allows. At year end the accountant finds invoices beyond the legal limit that now affect the tax deduction.',
      cost:
        'A deduction lost or deferred, and a supplier who stops giving you priority when yarn is short.',
      fix:
        'Supplier bills carry their acceptance date. Verity lists bills approaching the 45-day limit for micro and small suppliers, so payment is scheduled before the limit.',
      screen: 'money',
      source: {
        name: 'Busy Infotech, Section 43B(h) and the MSMED Act',
        url: 'https://busy.in/tds/section-43bh-msme-payment-rule-and-45-day-limit-explained/',
      },
    },
    {
      area: 'People',
      title: 'Shifts, contract labour and migrant workers are hard to keep steady',
      scene:
        'After a festival, a third of the workers from another state have not returned. The contractor sends replacements who need to be trained. Attendance is on paper, and piece-rate wages are calculated by hand.',
      cost:
        'Machines stop for want of operators, and untrained hands raise defects and waste in the first weeks.',
      fix:
        'Attendance, shifts, machine allocation, skills and contractor labour are recorded per person. The shift in charge sees shortages the evening before and who is trained for which machine.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'Several units, one owner and a stack of reports',
      scene:
        'A spinning unit, a weaving shed and a processing house each send daily reports in a different format. Comparing them means someone re-types the numbers.',
      cost:
        'Decisions are made on stale data, and a problem in one unit is found only when the monthly numbers arrive.',
      fix:
        'Units are locations in one system. Daily output, yield, stock, dues and rejections are comparable side by side, and the owner’s morning view lists the items that need a decision.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '28.97%',
      text: 'of India’s textile and apparel exports go to the United States. Overall textile and apparel exports fell 2.2 percent year on year to $35.79 billion in FY26.',
      source: { name: 'Kotak Neo', year: '2026', url: 'https://www.kotakneo.com/investing-guide/insights/india-textile-exports-cotton-tariffs-market-access/' },
    },
    {
      figure: '5%',
      text: 'is the GST rate on man-made yarn from 22 September 2025, down from 12 percent, and on man-made fibre, down from 18 percent, correcting an inverted duty structure.',
      source: { name: 'The Tribune, reporting on MATEXIL', year: '2025', url: 'https://www.tribuneindia.com/news/business/chairman-matexil-welcomes-rectification-of-inverted-duty-structure-for-mmf-textiles/amp' },
    },
    {
      figure: '11%',
      text: 'import duty on cotton, which the Confederation of Indian Textile Industry asked the government to remove in December 2025, saying domestic prices running above world levels were stressing mills on thin margins.',
      source: { name: 'Texspace Today, reporting CITI', year: '2025', url: 'https://www.texspacetoday.com/indias-textile-industry-calls-for-duty-free-cotton-imports-to-stay-export-competitive/' },
    },
    {
      figure: '20 products',
      text: 'lost mandatory BIS quality control orders on 13 November 2025, including polyester fibre inputs PTA and MEG and polymers, as the government aimed to ease raw material supply.',
      source: { name: 'The Tribune', year: '2025', url: 'https://www.tribuneindia.com/news/business/india-scraps-qcos-across-textiles-plastics-metals-gtri-urges-vigil-on-import-surges/amp' },
    },
  ],
  factsNote:
    'These come from news reports, not from the original government notifications, and some are about policy that has since moved. Duties and tariffs change often, so check the current position before relying on them.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your unit’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Mill / Today',
      meta: 'Units: Spinning, Weaving, Processing',
      heading: 'The owner’s morning view',
      caption:
        'Yield, loom efficiency, cloth at processors, dues and workers present on one screen, with the items that need a decision listed under them. This replaces the three daily unit reports.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Yarn yield', value: '84.6%', note: 'target 85.5%' },
            { label: 'Loom efficiency', value: '81%', note: 'shed average' },
            { label: 'Cloth at processors', value: '62,400 m', note: '3 processors' },
            { label: 'Overdue dues', value: '₹47 L', note: '5 buyers' },
          ],
        },
        { type: 'title', text: 'Operators present against need, today' },
        {
          type: 'bars',
          items: [
            { label: 'Spinning', value: 96, display: '96%' },
            { label: 'Weaving', value: 88, display: '88%' },
            { label: 'Processing', value: 64, display: '64%', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Processing is 7 operators short for the night shift. Contractor confirmation pending.', action: 'Call' },
        {
          type: 'list',
          items: [
            { name: 'Mixing 32 yield below target', meta: '0.9 points lower than last three mixings', tag: ['Review', 'flag', 'Checked', 'ok'] },
            { name: 'Shree Dye House, short return 1.9%', meta: 'Above the 1% agreed shrinkage', tag: ['Raise', 'late', 'Raised', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'lots',
      title: 'Cotton and yarn lots',
      meta: 'Mixing and yield',
      heading: 'From cotton lot to yarn lot, and back again',
      caption:
        'Each mixing shows the cotton lots in it, staple and trash, and the yield and waste at each stage. A yarn complaint opens on its lot and shows exactly which cotton went into it.',
      blocks: [
        {
          type: 'table',
          cols: ['Mixing', 'Cotton lots', 'Staple, trash', 'Yield', 'Status'],
          rows: [
            ['M-31 (30s carded)', 'C-118, C-121', '29 mm, 3.4%', '85.9%', ['OK', 'ok']],
            ['M-32 (30s carded)', 'C-121, C-124', '28 mm, 4.1%', '84.2%', ['Review', 'late', 'Checked', 'ok']],
            ['M-33 (40s combed)', 'C-119', '31 mm, 2.2%', '78.3%', ['OK', 'ok']],
          ],
        },
        {
          type: 'record',
          title: 'Complaint Y-77, yarn lot Y-2204',
          sub: '30s carded, 6.4 tonnes, buyer reports thin places',
          fields: [
            ['Mixing', 'M-32'],
            ['Cotton lots', 'C-121, C-124'],
            ['Same mixing sold to', ['3 other buyers', 'flag']],
            ['Status', ['Open', 'late', 'Buyer informed', 'ok']],
          ],
          timeline: [
            ['10 Oct', 'Complaint received from buyer in Erode'],
            ['11 Oct', 'Lot traced, test records pulled'],
          ],
        },
      ],
    },
    {
      id: 'production',
      title: 'Production and quality',
      meta: 'Shed A, last 7 days',
      heading: 'Which looms lose time, and which beams make defects',
      caption:
        'Efficiency per loom or frame with the reasons it stopped. Inspection points per roll linked to the loom and warp beam. Power per unit of output beside both.',
      blocks: [
        { type: 'title', text: 'Loom efficiency, lowest first' },
        {
          type: 'bars',
          items: [
            { label: 'Loom 41', value: 66, display: '66%', tone: 'muted' },
            { label: 'Loom 27', value: 72, display: '72%', tone: 'muted' },
            { label: 'Loom 12', value: 84, display: '84%' },
            { label: 'Shed average', value: 81, display: '81%' },
          ],
        },
        {
          type: 'table',
          cols: ['Warp beam', 'Loom', 'Rolls', 'Points / 100 m', 'Status'],
          rows: [
            ['B-512', 'Loom 41', '14', '38', ['Stop beam', 'late', 'Stopped', 'ok']],
            ['B-515', 'Loom 27', '16', '22', ['Watch', 'flag']],
            ['B-509', 'Loom 12', '18', '9', ['OK', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'orders',
      title: 'Order book',
      meta: 'Next 4 weeks',
      heading: 'Every order against the load on each shed',
      caption:
        'Orders by construction, quantity and promised date. Sales sees the loading before confirming a date, and the margin at the cotton rate on record.',
      blocks: [
        {
          type: 'table',
          cols: ['Order', 'Buyer', 'Qty', 'Due', 'Margin at current cotton', 'Status'],
          rows: [
            ['SO-1182', 'Surat Textile Traders', '24,000 m', '28 Oct', '9%', ['On plan', 'ok']],
            ['SO-1187', 'Anand Fabrics', '4,000 m', '30 Oct', '3%', ['Small lot', 'flag']],
            ['SO-1191', 'Ludhiana Hosiery', '12 t yarn', '2 Nov', '-1%', ['Review', 'late', 'Repriced', 'ok']],
          ],
        },
        { type: 'alert', text: 'Shed A is loaded to 108% for the week of 27 Oct. SO-1187 needs a new warp.', action: 'Group orders' },
      ],
    },
    {
      id: 'processing',
      title: 'Processing and job work',
      meta: 'Out, in and in process',
      heading: 'Cloth at the processor, and cloth that came back short',
      caption:
        'Every challan out and in, with metres, process and shrinkage by processor. Dye batches carry recipe, machine and result. Stock is shown by stage and by place.',
      blocks: [
        {
          type: 'table',
          cols: ['Challan', 'Processor', 'Out', 'In', 'Short', 'Status'],
          rows: [
            ['JW-3318', 'Shree Dye House', '12,000 m', '11,770 m', '1.9%', ['Raise', 'late', 'Raised', 'ok']],
            ['JW-3322', 'Krishna Processors', '9,500 m', '9,440 m', '0.6%', ['OK', 'ok']],
            ['JW-3325', 'Shree Dye House', '8,000 m', 'Pending', '', ['Due 18 Oct', 'flag']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Batch D-901, navy, redye', meta: 'First dyeing off by 1.8 delta E, recipe adjusted', tag: ['Redye', 'late', 'Passed', 'ok'] },
            { name: 'Batch D-905, maroon, repeat order', meta: 'Recipe from D-640 loaded, no sample needed', tag: ['Ready', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'money',
      title: 'Dues and payables',
      meta: 'Money in and out',
      heading: 'Who owes you, through which broker, and who you owe on time',
      caption:
        'Buyer dues by age with the broker, the last promise and the credit history. Supplier bills with the days remaining to the 45-day limit for micro and small vendors.',
      blocks: [
        {
          type: 'table',
          cols: ['Buyer', 'Amount', 'Age', 'Broker', 'Status'],
          rows: [
            ['Surat Textile Traders', '₹16.4 L', '92 days', 'R. Mehta', ['Call', 'late', 'Promised', 'info']],
            ['Anand Fabrics', '₹11.2 L', '71 days', 'Direct', ['Call', 'flag']],
            ['Ludhiana Hosiery', '₹8.9 L', '64 days', 'S. Gill', ['Watch', 'flag']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Kaveri Spares, bill 77', meta: 'Micro supplier, goods accepted 6 Sep, 39 days gone', tag: ['Pay by 20 Oct', 'late', 'Scheduled', 'ok'] },
            { name: 'Patel Packing, bill 204', meta: 'Small supplier, accepted 25 Sep, 20 days gone', tag: ['OK', 'ok'] },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Thursday, before and after.',
  dayLede: 'The machines run as they did. The difference is that every lot, challan and shift leaves a record that answers the next question.',
  day: [
    {
      time: '8:00',
      before: 'Three unit managers send reports on WhatsApp, each in a different layout.',
      after: 'The Today screen shows yield, efficiency, cloth at processors and dues in one view, and what needs a decision.',
    },
    {
      time: '10:30',
      before: 'A buyer says the yarn is uneven. You are not sure which cotton was used.',
      after: 'The yarn lot opens with its mixing and cotton lots, and the other buyers who got the same mixing are listed.',
    },
    {
      time: '1:00',
      before: 'A loom runs poorly for days and is noticed only at month end.',
      after: 'Loom 41 shows at the bottom of the efficiency list with warp breaks as the cause, and a task is with the fitter.',
    },
    {
      time: '3:30',
      before: 'Sales accepts a small order that needs a warp change.',
      after: 'The loading shows Shed A over 100 percent, so it is grouped with another order or priced to cover the change.',
    },
    {
      time: '5:30',
      before: 'Cloth returns short from a processor and the old challan cannot be found.',
      after: 'The challan, expected return and shrinkage are on one record, and the short return is already raised.',
    },
    {
      time: 'Month end',
      before: 'Dues, stock at processors and power cost are reconciled from five sheets over several days.',
      after: 'Dues by broker and age, stock by stage and units per metre are ready, each with an owner.',
    },
  ],

  approach: {
    heading: 'We set it up in four weeks, one shed at a time.',
    lede:
      'We start where the loss is largest, whether that is the mixing room, the weaving shed or the dye house, learn how your lots really move, and build Verity around that. Other units follow once the first is steady.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Walk through the mixing room, the sheds, the folding hall and the godowns, then follow one lot of yarn and one lot of cloth from raw material to the buyer’s payment. Note every slip and sheet that records any part of it.',
        you: 'Two to three hours with you and your production manager. Last month’s production sheets, one set of job work challans and a recent buyer ledger.',
        get: 'A written map of your lots, counts, looms, processors and dues, with the three problems to fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your counts and constructions, machines and sheds, stages and waste points, processors, shrinkage limits, shift pattern, and approval limits. Build the screens above with your own words.',
        you: 'Check the setup with your production manager and merchant. Tell us where a stage or limit is wrong.',
        get: 'A working Verity with your counts, machines, processors and rules, ready for data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in open orders, stock by stage, processor balances, buyers with open dues and recent lot history from your registers and sheets. Train supervisors at the machines and the office in their own time.',
        you: 'Your registers as they are. One hour with each role and a shift supervisor who will try it on live lots.',
        get: 'Your open orders, stock and dues inside Verity, and supervisors who have used it on real shifts.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on. Review the first weeks of yield and efficiency with you, tune the flags, and extend to the next shed or processor once the first is steady.',
        you: 'A short monthly review of the numbers.',
        get: 'A system that keeps pace with your counts and customers, with someone accountable for it.',
      },
    ],
    bring: [
      'Production sheets for a recent week from one shed',
      'A set of job work challans out and in',
      'Your stock register by stage, even if rough',
      'Buyer and broker list with open dues',
      'Your power and diesel records for a recent month',
    ],
    time: 'About 9 to 12 hours of your own time across the four weeks, mostly in week 1. Your production manager and accounts lead need a few more each.',
    after: 'Nobody is hired to run Verity. Lots, shifts and challans are recorded on the slips your unit already writes, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your mill a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own lot, production, processing and dues records. Ask in plain language, then turn the answer into tasks for the right person.',
    examples: [
      {
        q: 'Which mixing had the lowest yarn yield this month, and why?',
        a: 'M-32 at 84.2 percent, against 85.9 and 85.6 for the last two. It used cotton lots C-121 and C-124 with higher trash at 4.1 percent.',
        rows: [['M-32', '84.2%'], ['M-31', '85.9%'], ['M-30', '85.6%']],
        action: 'Flag the lots to purchase',
      },
      {
        q: 'Which processor returns the most short cloth?',
        a: 'Shree Dye House at 1.9 percent over the last four challans, against Krishna Processors at 0.6 percent.',
        rows: [['Shree Dye House', '1.9%'], ['Krishna Processors', '0.6%'], ['Laxmi Finishers', '0.8%']],
      },
      {
        q: 'Which buyers owe more than 60 days and have no promise recorded?',
        a: 'Anand Fabrics, ₹11.2 lakh at 71 days, and Ludhiana Hosiery, ₹8.9 lakh at 64 days, have no follow-up recorded this week.',
        action: 'Assign follow-up calls',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. People still make the calls. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A mixing is closed',
      then: ['Yield and waste calculated for the lots used', 'Compared with the last three mixings', 'Production manager told if yield is below your limit'],
    },
    {
      when: 'A warp beam shows high defect points',
      then: ['Beam and loom flagged to the shift in charge', 'Task to the fitter with the defect type', 'Outcome recorded on the beam'],
    },
    {
      when: 'A job work challan passes its return date',
      then: ['Added to the overdue list by processor', 'Task to the merchant to call', 'New date recorded when promised'],
    },
    {
      when: 'Cloth returns from a processor',
      then: ['Metres matched with the challan', 'Shrinkage compared with the agreed limit', 'Shortfall raised with the processor'],
    },
    {
      when: 'A new order is entered',
      then: ['Loading checked on the shed', 'Margin shown at the current cotton rate', 'Owner alerted if the order is small or below margin'],
    },
    {
      when: 'A buyer invoice passes its due date',
      then: ['Listed by age and broker', 'Follow-up assigned to a named person', 'Promise or outcome recorded on the invoice'],
    },
  ],

  rules: {
    heading: 'The rules a textile unit has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant and compliance consultant are not rebuilding them from loose papers.',
    items: [
      {
        name: 'GST on yarn, fabric and fibre',
        what: 'From 22 September 2025, man-made fibre and man-made yarn are taxed at 5 percent, down from 18 and 12 percent. Rates differ by product and have been revised before, so confirm for each item you sell.',
        how: 'Fibre, yarn and fabric are separate items with their own tax lines, so what your accountant needs to review is already split.',
        source: { name: 'The Tribune, reporting on MATEXIL', url: 'https://www.tribuneindia.com/news/business/chairman-matexil-welcomes-rectification-of-inverted-duty-structure-for-mmf-textiles/amp' },
      },
      {
        name: 'Payment to micro and small suppliers',
        what: 'Under the MSMED Act, a buyer generally has to pay a micro or small supplier within the agreed period, which cannot exceed 45 days. From 1 April 2024, late payments generally affect the buyer’s tax deduction.',
        how: 'Supplier bills carry acceptance dates and a days-left count, and bills near the limit are listed for payment.',
        source: { name: 'Busy Infotech', url: 'https://busy.in/tds/section-43bh-msme-payment-rule-and-45-day-limit-explained/' },
      },
      {
        name: 'Labour Codes, wages and contract labour',
        what: 'The four Labour Codes took effect from 21 November 2025. Rules for registers and returns are still being notified state by state, and contract labour carries its own duties for the principal employer.',
        how: 'Attendance, shifts, wages by piece or time and contractor workers are recorded per person, so the registers can be produced in your state’s format.',
        source: { name: 'TaxGuru, summarising the Ministry of Labour release', url: 'https://taxguru.in/?p=1002943' },
      },
      {
        name: 'Consent and effluent records for processing',
        what: 'Dyeing and bleaching units generally need consent from the State Pollution Control Board and must treat effluent to the standard set for them. In Tirupur, a 2011 Madras High Court order pushed units towards zero liquid discharge.',
        how: 'Dye batches, chemicals used and water and effluent readings are recorded by batch, so the records an inspector asks for exist.',
        source: { name: 'Down To Earth, Dyeing cities, 2014', url: 'https://www.downtoearth.org.in/coverage/waste/dyeing-cities-47605' },
      },
    ],
    note: 'Rules change and differ by state and by product. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A shed supervisor does not need to see your margins. A merchant should not edit stock. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which unit, order and buyer is making money?', sees: 'Yield, efficiency, margin by order, cloth at processors, dues, and every unit side by side.' },
    { role: 'Production manager', question: 'Where are we losing time and quality?', sees: 'Efficiency by machine, defect points by beam, stoppage reasons, shift attendance, loading by shed.' },
    { role: 'Merchant', question: 'What can I promise, and to whom?', sees: 'Order book, loading, stock by stage, buyer history and open dues, broker notes.' },
    { role: 'Stores and processing', question: 'Where is every lot, and what is due back?', sees: 'Lots by place, challans out and in, shrinkage by processor, dye recipes and batches.' },
    { role: 'Accounts', question: 'What is owed to us and by us?', sees: 'Buyer dues by age and broker, supplier bills with days left, costs per order.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your accounting package, which keeps the books. We agree how data reaches Verity during setup.',
      'The testing lab and quality instruments you use, with results entered or attached as records.',
      'WhatsApp for brokers, buyers and processors. Staff send; Verity tells them who and when.',
      'Your chartered accountant, who still prepares returns and audits.',
    ],
    not: [
      'Read from your looms, frames or dyeing machines directly.',
      'Send messages to buyers or brokers on its own.',
      'File your returns or run your salary processing.',
      'Replace your textile technologist or your accountant.',
    ],
    migration:
      'We bring in your counts, constructions, stock, open orders, processors, buyers and dues from the registers, sheets or ERP you use now, in stages, so the mill keeps running while it happens.',
  },

  faqHeading: 'Questions textile owners ask.',
  faqs: [
    [
      'We have spinning, weaving and processing. Where do we start?',
      'With the unit where the loss is largest. In most mills that is the mixing room, the shed efficiency or the processor returns. We start there in four weeks and add the other units once the first is steady.',
    ],
    [
      'Will my supervisors enter all this?',
      'It only works if the shift is recorded, so we keep entries to a few fields and put them where people already write: the shift sheet, the lot slip, the challan. We train at the machine on real shifts.',
    ],
    [
      'Can it read production directly from looms or frames?',
      'No. Production, stoppages and defects are entered by the operator or shift in charge. If your sheds have electronic counters, we agree how the totals reach Verity during setup.',
    ],
    [
      'We do a lot of job work for other mills. Is that a problem?',
      'No. Customer material is held as separate stock with its own challans, so it is never mixed with your own, and shrinkage and return dates are tracked for each party.',
    ],
    [
      'Does it work for knitting and garment fabric units?',
      'Yes. We set up knitting, circular or flat, the same way: yarn issue, machine output, fabric grading and processing. A garment maker has its own page for orders and styles.',
    ],
    [
      'Does it do my GST invoices and accounts?',
      'No. Your accounting package keeps doing that. Verity records the lot, the dispatch and the dues, and tells accounts which invoice is waiting.',
    ],
    [
      'Who can see my yield and my buyer rates?',
      'Only the people you allow. Access is set by role, so a supervisor sees output and an accountant sees dues. Every change is recorded with who made it and when.',
    ],
    [
      'How long before we see something useful?',
      'Dues by age and cloth at processors need only your existing challans and invoices, so they come first. Yield and loom efficiency become reliable after a few weeks of recorded shifts.',
    ],
    [
      'What does it cost?',
      'It depends on the number of units, users and how much you want set up. Message us and we will give you a clear number after a short conversation about how your mill runs.',
    ],
  ],

  related: ['garment-manufacturers', 'manufacturers', 'exporters', 'wholesalers', 'distributors', 'chemical-manufacturers'],

  ctaHeading: 'Start with the lot that came back as a complaint.',
  ctaLede:
    'Tell us how your mill runs and we will show you yield by mixing, loom efficiency, cloth at processors and overdue buyers, using your own numbers.',
};
