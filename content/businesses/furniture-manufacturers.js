export default {
  schema: 2,
  slug: 'furniture-manufacturers',
  status: 'published',
  plural: 'furniture manufacturers',
  subject: 'furniture workshop',
  checked: '15 October 2026',

  seo: {
    title: 'Furniture manufacturing software for workshops and factories | Verity',
    description:
      'The 14 problems that make furniture orders late and thin on margin: measurements, cut lists, boards, finishing, hardware and stage payments, solved on Verity screens.',
    keywords: [
      'furniture manufacturing software India',
      'made to order furniture job tracking',
      'wood and plywood stock tracking',
      'furniture delivery and installation scheduling',
      'furniture export order management',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'orders', 'suppliers', 'logistics', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for furniture manufacturers',
    headline: 'The wardrobe was made to the wrong drawing, and nobody saw it until the site.',
    lede:
      'A furniture order starts with a measurement and a conversation and ends with a team carrying a finished piece into someone’s home or office. Between them sit drawings, boards, hardware, carpenters, polish, packing and a delivery van. Verity keeps each order as one record that carries the drawing, the cut list, the material, the stage and the money.',
    oneLine:
      'One system that knows every order, drawing, sheet of board, fitting, stage on the shop floor, delivery and balance due.',
    note: 'No new staff are needed. Records come from the drawing sheets, cut lists and job tickets your workshop already uses.',
    screen: 'owner',
    screenNote: 'orders, stages, material and deliveries',
  },

  today: {
    heading: 'The craft is good. The order is carried in too many hands.',
    paragraphs: [
      'The workshop knows how to make a piece and the carpenters are skilled. What is harder is everything that happens around the making: a customer changes the finish after cutting begins, a drawing is printed from the wrong version, the hinges are out of stock, the finishing room has a queue of nine jobs and the van goes out with half a bed.',
      'Details live in many places. A measurement sheet or a photo on WhatsApp. A drawing file on one computer. A cut list on paper. A plywood and hardware stock register. A job ticket. A delivery list on a whiteboard. Receipts in a diary. The owner or the head carpenter is usually the person who knows how they all fit together.',
      'So the workshop gets orders out, but not quite on time or quite on margin. Boards are wasted, jobs are rebuilt, a second trip is made to fix a site, and the final payment stays unpaid because the customer is waiting for a missing panel.',
    ],
    stack: ['Measurement notes and photos', 'Drawing files', 'Paper cut lists', 'Board and hardware stock register', 'Job tickets', 'Delivery whiteboard', 'Receipts in a diary'],
    stackNote: 'Each is fine as a note. None of them tells the carpenter, the painter and the driver the same thing.',
  },

  painsHeading: 'Where a furniture maker actually loses money and trust.',
  painsLede:
    'These are the situations furniture workshop owners describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Orders',
      title: 'The drawing the customer approved is not the drawing on the shop floor',
      scene:
        'The customer approved a wardrobe with sliding doors, then asked by phone for hinged ones. The change is in the designer’s phone notes. The cutting list is made from the older version, and the carcass is cut.',
      cost:
        'Example arithmetic: a rebuilt carcass of ₹28,000 in material and labour, on two orders a month, is ₹56,000 a month in work done twice.',
      fix:
        'Each order holds the drawing versions, the changes with who asked for them and the date, and the approval. Production can see only the latest approved version, and a change after cutting begins raises a flag with the cost.',
      screen: 'orders',
    },
    {
      area: 'Orders',
      title: 'The quote is a guess that the board rate has already changed',
      scene:
        'The quote went out in the afternoon on the plywood rate from the last purchase. By the time the advance comes, the laminate price has gone up, and nobody has priced the offcuts or the hardware.',
      cost:
        'Example arithmetic: a 4 percent fall in margin on ₹60 lakh of monthly sales is ₹2.4 lakh each month, and it shows up only in the year’s profit.',
      fix:
        'Quotes are built from the cut list, board and hardware at the latest rates on record, plus labour and waste. After the order, actual material and hours are compared with the quote so the real margin of each job is known.',
      screen: 'orders',
    },
    {
      area: 'Material',
      title: 'Boards are cut with too much waste, and offcuts are lost',
      scene:
        'Sheets are cut one job at a time. The cutter takes a fresh sheet when a half sheet from yesterday would do, and the offcuts pile in a corner. At the end of the month, plywood use is higher than the orders explain.',
      cost:
        'Example arithmetic: 6 percent waste above plan on ₹15 lakh of monthly board spend is ₹90,000 a month. Offcuts that could be used on small items are sold as scrap.',
      fix:
        'Boards are issued by sheet to a job with the planned cut. Offcuts above a size are returned to stock as usable pieces. Verity compares board used with board planned per job and flags the jobs and cutters with the largest gap.',
      screen: 'material',
    },
    {
      area: 'Material',
      title: 'Timber is bought on price and used before it is seasoned',
      scene:
        'A parcel of teak or sheesham arrives at a good rate. The yard is full, so it is stacked wherever there is space. Some of it goes to the shop before it has dried, and months later the doors warp at the customer’s home.',
      cost:
        'A return and rebuild, a damaged reputation and, with an exported order, a rejected container.',
      fix:
        'Timber parcels are recorded with species, source, quantity, moisture reading and date in the yard. A parcel cannot be issued to a job until its moisture reading is recorded and within your limit.',
      screen: 'material',
    },
    {
      area: 'Material',
      title: 'The job waits for hinges, channels or a laminate colour',
      scene:
        'The carcass is done and the shutters are cut. The soft-close channels are not in stores, the supplier says Thursday, and the finishing slot is gone. The job waits and so does its payment.',
      cost:
        'A job that waits blocks space, ties up half-finished goods and pushes the delivery date for the customer.',
      fix:
        'Each order carries its bill of materials with fittings. Verity compares the next fortnight’s orders with stock and open purchase orders and lists what must be ordered by which date, with the order it affects.',
      screen: 'material',
    },
    {
      area: 'Shop floor',
      title: 'Nobody knows which stage a job is at, or what is holding the line',
      scene:
        'Twelve jobs are in the workshop. Four are at assembly, five in the finishing room and three waiting for upholstery. The owner asks where the Mehta dining table is and four people look.',
      cost:
        'Time lost searching and re-planning each day, with the finishing room or the upholstery bench as the hidden bottleneck.',
      fix:
        'Every job sits on a board by stage: cutting, edge banding, assembly, finishing, upholstery, packing. Moving it is a tap. Verity shows the queue in front of each stage, and which jobs are held and why.',
      screen: 'floor',
    },
    {
      area: 'People',
      title: 'Skilled carpenters leave, take advances and work at different quality',
      scene:
        'A master carpenter takes an advance and leaves for another workshop. Piece-rate payments are written in a diary and disputed at the month end. Two carpenters build the same cabinet with different tolerances.',
      cost:
        'Output falls when a skilled hand leaves, advances are lost and the quality varies from job to job.',
      fix:
        'Attendance, advances, piece-rate work by job and skill are recorded per person. Jobs are assigned by skill, advances are tracked against earnings, and the month-end statement is built from the work recorded.',
      screen: 'floor',
    },
    {
      area: 'Quality',
      title: 'Finish defects and damage show up at the customer’s door',
      scene:
        'A table top has a scratch under the cover, a drawer sticks, the polish is uneven under daylight. All of this is found on site, where fixing it costs a trip and sometimes a repolish.',
      cost:
        'Every site fix costs a van trip, two workers’ time and the goodwill of a customer who already has the piece in the room.',
      fix:
        'A pre-dispatch checklist with photos is a record on each order: dimensions, finish, hardware function, packing. Failures stay on the order and go back to the stage that made them, with the cause noted.',
      screen: 'floor',
    },
    {
      area: 'Delivery',
      title: 'The van goes out with half an order, or to a site that is not ready',
      scene:
        'The driver loads what is ready. The apartment has not been painted, the lift is booked for another day, and the wardrobe door is still in the workshop. Two trips become three.',
      cost:
        'Example arithmetic: each wasted trip of van, driver and two installers costs ₹3,500 to ₹5,000. Five a month is up to ₹25,000 for nothing delivered.',
      fix:
        'Delivery is scheduled only when all pieces are packed and the site is confirmed ready. Installation crews and vehicles are assigned from one schedule, with the checklist of items on the van.',
      screen: 'delivery',
    },
    {
      area: 'Delivery',
      title: 'After-sales requests are lost between phone calls',
      scene:
        'A customer calls about a drawer that is stuck three months after delivery. The call goes to whoever picked up. Nobody writes it down, and the customer calls again a week later, angrier.',
      cost:
        'An unhappy customer rarely refers anyone, and unresolved warranty claims cost far more than a quick repair.',
      fix:
        'Every complaint becomes a service request tied to the original order, with the warranty status, a visit date and an owner. The outcome is recorded on the order.',
      screen: 'delivery',
    },
    {
      area: 'Money',
      title: 'Advances, stage payments and final balances drift',
      scene:
        'The customer paid 50 percent upfront and 30 percent after cutting. The final 20 percent is due at delivery, but the delivery was in two parts. The customer holds the balance until the last panel arrives.',
      cost:
        'Cash tied in finished jobs, and a customer who is allowed to pay late because nobody ties the final amount to a delivery event.',
      fix:
        'Each order has a payment schedule tied to stages. The balance due at delivery is on the delivery checklist, and overdue stage payments are listed with an owner and the customer’s last promise.',
      screen: 'money',
    },
    {
      area: 'Money',
      title: 'Dealers and showrooms take stock on credit and pay slowly',
      scene:
        'A dealer in another city takes six sofas on a ninety-day arrangement. One is damaged in transit, two are unsold. The account sits as one unresolved figure on the ledger.',
      cost:
        'Money held at the dealer and unsold stock, with no clear sense of which dealers are worth the credit.',
      fix:
        'Dealer orders, goods sent, returns and payments sit on one dealer record with age of dues. Dealers with growing overdue amounts are visible before new stock goes out.',
      screen: 'money',
    },
    {
      area: 'Export and rules',
      title: 'Export buyers ask where the wood came from',
      scene:
        'A foreign buyer asks for proof that the timber was legally sourced. The purchase invoices are in a file, the species names are inconsistent, and the log of which parcel went into which order was never kept.',
      cost:
        'Buyers in major markets are required to avoid illegally sourced wood, so an exporter who cannot show the trail risks losing the account or a shipment.',
      fix:
        'Timber parcels link to the supplier, invoice and transport papers, and to the orders they were issued to. The trail from a finished piece back to its source is one search.',
      screen: 'material',
      source: {
        name: 'Forest Trends, India’s wooden furniture and handicrafts, 2020',
        url: 'https://www.forest-trends.org/publications/indias-wooden-furniture-and-wooden-handicrafts-risk-of-trade-in-illegally-harvested-wood/',
      },
    },
    {
      area: 'Owner',
      title: 'You and the head carpenter are the only system',
      scene:
        'You know which job is stuck, which customer is awkward and which supplier is slow. The head carpenter knows which jobs are urgent. When either is out, the day drifts.',
      cost:
        'The workshop cannot take more orders than two people can hold in their heads, and a showroom opening makes it worse.',
      fix:
        'A morning view lists jobs at risk, shortages, deliveries and dues, each with an owner. Showrooms and the factory are locations in one system, and the manager can run the list when you are away.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '25%',
      text: 'is the US tariff GTRI reported in October 2025 on kitchen cabinets, vanities and upholstered furniture, down from 50 percent. India’s FY2025 exports of these products were about $654.8 million.',
      source: { name: 'The Tribune, reporting GTRI', year: '2025', url: 'https://www.tribuneindia.com/news/business/indian-wood-and-furniture-exporters-to-gain-competitive-edge-in-us-after-trumps-10-global-tariff-gtri/amp' },
    },
    {
      figure: '$45 bn',
      text: 'is the market size by 2031 that analysts project for India’s furniture sector. Manufacturers quoted in May 2026 said this overstates the picture because furniture is an infrequent purchase and much of the demand still goes to local workshops.',
      source: { name: 'InteriorDaily', year: '2026', url: 'https://www.interiordaily.com/article/9840066/the-indian-furniture-sector-has-long-term-potential-but-the-industry-is-facing-several-real-challenges/' },
    },
    {
      figure: '138%',
      text: 'is how much India’s timber product exports rose from 2010 to the 2020 report, to over US$1 billion. The US, Europe, Australia, Japan and South Korea prohibit imports of illegally sourced wood.',
      source: { name: 'Forest Trends', year: '2020', url: 'https://www.forest-trends.org/publications/indias-wooden-furniture-and-wooden-handicrafts-risk-of-trade-in-illegally-harvested-wood/' },
    },
    {
      figure: '45 days',
      text: 'is the longest a buyer can agree to take to pay a micro or small supplier under the MSMED Act, and from 1 April 2024 late payment affects the buyer’s tax deduction. Without a written agreement it is 15 days.',
      source: { name: 'Busy Infotech', year: '2026', url: 'https://busy.in/tds/section-43bh-msme-payment-rule-and-45-day-limit-explained/' },
    },
  ],
  factsNote:
    'These come from news reports, an industry think tank and a software vendor’s explainer, not original government texts. Market-size figures are forecasts and differ by source, and tariffs change often.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your workshop’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Workshop / Today',
      meta: 'Factory, Saharanpur',
      heading: 'The owner’s morning view',
      caption:
        'Jobs at risk, board waste, deliveries due, advances outstanding and who is on the floor, all on one screen, with decisions listed below.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Jobs in workshop', value: '38', note: '6 behind date' },
            { label: 'Board waste', value: '9.1%', note: 'plan 6%' },
            { label: 'Deliveries this week', value: '11', note: '3 not ready' },
            { label: 'Balance due', value: '₹22.4 L', note: '14 orders' },
          ],
        },
        { type: 'title', text: 'Jobs waiting at each stage' },
        {
          type: 'bars',
          items: [
            { label: 'Cutting', value: 30, display: '6' },
            { label: 'Assembly', value: 45, display: '9' },
            { label: 'Finishing', value: 100, display: '19', tone: 'muted' },
            { label: 'Upholstery', value: 20, display: '4' },
          ],
        },
        { type: 'alert', text: 'Finishing room holds 19 jobs, about 6 days of work. Three deliveries this week depend on it.', action: 'Re-plan' },
        {
          type: 'list',
          items: [
            { name: 'Soft-close channels short', meta: '4 wardrobes wait, supplier promises Thursday', tag: ['Chase', 'flag', 'Chased', 'ok'] },
            { name: 'Drawing change after cutting, order 2217', meta: 'Hinged doors replaced sliding, rebuild cost ₹28,000', tag: ['Decide', 'late', 'Approved', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'orders',
      title: 'Orders and drawings',
      meta: 'Customer: Mehta, dining set',
      heading: 'Every order with its drawing, changes and quoted margin',
      caption:
        'The drawing versions and approvals, the cut list, the quote built from material at the latest rates, and the margin so far. A change after approval shows what it costs.',
      blocks: [
        {
          type: 'record',
          title: 'Order 2231, Mehta residence',
          sub: 'Dining table, 6 chairs, crockery unit. Delivery 3 Nov',
          fields: [
            ['Drawing', 'v3 approved 8 Oct'],
            ['Change request', ['Finish: walnut to teak', 'flag', 'Approved, ₹6,800 extra', 'ok']],
            ['Quoted margin', '22%'],
            ['Actual so far', '19%'],
            ['Advance', '₹1.2 L of ₹3.4 L'],
            ['Status', ['In finishing', 'info']],
          ],
          timeline: [
            ['2 Oct', 'Site measurement, photos stored'],
            ['8 Oct', 'Drawing v3 approved by customer'],
            ['12 Oct', 'Cutting started'],
          ],
        },
        {
          type: 'table',
          cols: ['Order', 'Quote', 'Board', 'Hardware', 'Labour', 'Margin'],
          rows: [
            ['2231 Mehta', '₹3.4 L', '₹1.1 L', '₹0.3 L', '₹0.9 L', ['19%', 'ok']],
            ['2217 Rao', '₹1.8 L', '₹0.6 L', '₹0.3 L', '₹0.7 L', ['4%', 'late']],
            ['2224 Kapoor', '₹2.6 L', '₹0.8 L', '₹0.4 L', '₹0.7 L', ['26%', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'material',
      title: 'Boards, timber and fittings',
      meta: 'Stock against orders',
      heading: 'Sheets, parcels and hardware against what the next jobs need',
      caption:
        'Board by sheet and usable offcut, timber by parcel with moisture and source, fittings by item. What the next fortnight’s orders will use, what is ordered and what is late.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'In stock', 'Needed 14 days', 'On order', 'Status'],
          rows: [
            ['BWP ply 18 mm', '82 sheets', '140', '100, Wed', ['Order', 'flag', 'Ordered', 'ok']],
            ['Laminate walnut matt', '24 sheets', '38', 'None', ['Short', 'late']],
            ['Soft-close channel 500 mm', '60 pairs', '210', '200, Thu', ['Short', 'late', 'Chased', 'ok']],
            ['Sheesham, 40 mm', '1.8 t', '1.1 t', 'None', ['OK', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Timber parcel T-88, sheesham, 1.2 t', meta: 'Moisture reading not recorded, held from issue', tag: ['Held', 'flag', 'Cleared at 11%', 'ok'] },
            { name: 'Offcuts above 600 mm returned to stock', meta: '34 pieces this week, ₹14,000 at board cost', tag: ['Info', 'info'] },
          ],
        },
      ],
    },
    {
      id: 'floor',
      title: 'Shop floor',
      meta: 'Jobs by stage',
      heading: 'Where each job is, who is on it, and what holds it',
      caption:
        'The board of jobs by stage with carpenter and promised date, the piece-rate work recorded by person, and the pre-dispatch checks with photos.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Assembly',
              cards: [
                { title: '2231 Dining table, Mehta', meta: 'Imran, due 28 Oct', tag: ['On time', 'ok'] },
                { title: '2227 Bed, Singh', meta: 'Waiting for channels', tag: ['Held', 'late', 'Released', 'ok'] },
              ],
            },
            {
              name: 'Finishing',
              cards: [
                { title: '2224 Wardrobe, Kapoor', meta: 'Polish coat 2, due 26 Oct', tag: ['Behind', 'flag'] },
                { title: '2219 Study unit, Das', meta: 'Drying, 1 day left', tag: ['On time', 'ok'] },
              ],
            },
            {
              name: 'Ready to pack',
              cards: [
                { title: '2210 Sofa set, Rao', meta: 'Checklist: 2 of 6 done', tag: ['Check', 'flag', 'Passed', 'ok'] },
              ],
            },
          ],
        },
        {
          type: 'table',
          cols: ['Carpenter', 'Jobs, month', 'Piece-rate earned', 'Advance', 'Rework'],
          rows: [
            ['Imran', '9', '₹38,400', '₹10,000', '1'],
            ['Suresh', '7', '₹29,100', '₹25,000', '3'],
            ['Vikas', '8', '₹31,600', '₹0', '0'],
          ],
        },
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery and service',
      meta: 'This week',
      heading: 'Deliveries scheduled only when the order is whole and the site is ready',
      caption:
        'The schedule of vans and installation teams, the site readiness check, items on each van, and the service requests for orders already delivered.',
      blocks: [
        {
          type: 'table',
          cols: ['Order', 'Site', 'Pieces packed', 'Site ready', 'Van, team', 'Status'],
          rows: [
            ['2210 Rao', 'Gurugram', '14 of 14', 'Yes', 'Van 2, Team A', ['Go', 'ok']],
            ['2214 Das', 'Noida', '9 of 11', 'Yes', 'Van 1, Team B', ['Hold', 'late', 'Packed', 'ok']],
            ['2212 Iyer', 'Delhi', '6 of 6', 'Painting pending', 'Van 2, Team A', ['Hold', 'flag']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Service: drawer sticks, order 2158', meta: 'Delivered 4 months ago, in warranty. Visit Fri', tag: ['Open', 'flag', 'Done', 'ok'] },
            { name: 'Service: polish patch, order 2177', meta: 'Delivered 6 weeks ago. Visit Tue', tag: ['Open', 'flag'] },
          ],
        },
      ],
    },
    {
      id: 'money',
      title: 'Payments and dealers',
      meta: 'Money in and out',
      heading: 'Stage payments, balances at delivery, dealer dues and supplier bills',
      caption:
        'Each order’s payment schedule tied to its stages. Dealer dues by age. Supplier bills with the days left to the legal limit for small vendors.',
      blocks: [
        {
          type: 'table',
          cols: ['Order or dealer', 'Due', 'When', 'Owner', 'Status'],
          rows: [
            ['2231 Mehta, on delivery', '₹1.05 L', '3 Nov', 'Accounts', ['Upcoming', 'info']],
            ['2210 Rao, on delivery', '₹0.8 L', '17 Oct', 'Accounts', ['Collect', 'flag', 'Paid', 'ok']],
            ['Dealer: Jaipur Interiors', '₹6.4 L', '81 days', 'Sales', ['Hold stock', 'late', 'Plan agreed', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Hafele Distributor, bill 3304', meta: 'Small supplier, accepted 1 Sep, 44 days gone', tag: ['Pay today', 'late', 'Paid', 'ok']},
            { name: 'Gupta Laminates, bill 118', meta: 'Micro supplier, accepted 20 Sep, 25 days gone', tag: ['OK', 'ok'] },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Wednesday, before and after.',
  dayLede: 'The saw and the polish are the same. What changes is that every drawing, board and stage leaves a record, and the record does the chasing.',
  day: [
    {
      time: '9:00',
      before: 'You walk the workshop to see what is where. The head carpenter says finishing is crowded.',
      after: 'The Today screen shows 19 jobs in finishing, about six days of work, and the three deliveries that depend on it.',
    },
    {
      time: '11:00',
      before: 'A customer changes the finish by phone. The designer notes it in her phone.',
      after: 'The change is on the order, priced, approved by the customer and visible to cutting before it begins.',
    },
    {
      time: '1:00',
      before: 'Stores finds soft-close channels short after the carcasses are done.',
      after: 'The shortage was listed on Monday and chased. Four wardrobes wait on the board with a date.',
    },
    {
      time: '3:30',
      before: 'Sheets are cut and offcuts piled. The waste shows up at month end.',
      after: 'Offcuts above 600 mm are returned to stock and the day’s cutting shows waste against plan.',
    },
    {
      time: '5:30',
      before: 'The van leaves with what is ready. The site is not painted.',
      after: 'The delivery was held in the morning because the site check showed painting pending. The van went to another job.',
    },
    {
      time: 'Month end',
      before: 'Piece-rate, advances, dealer dues and supplier bills are totalled in the diary.',
      after: 'The carpenter statements, dealer ageing and supplier bills near their limit are ready, each with an owner.',
    },
  ],

  approach: {
    heading: 'We set it up in four weeks, starting from your drawing desk.',
    lede:
      'We begin where the orders begin, with measurements and drawings, and follow one order through boards, shop floor, polish, packing, delivery and payment. Verity is then built around how your workshop already works.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day in the workshop, the yard and stores. Trace one live order from site measurement to final payment, note every paper and file it passes through, and see how cuts, finishing and deliveries are planned today.',
        you: 'Two to three hours of your time and the head carpenter’s. One live order file, your latest board and hardware stock list, and a delivery list.',
        get: 'A written map of your orders, stages, materials, crews and payments, with the first problems to fix, in order of cost.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your products and bills of materials, boards and fittings, stages and finishing steps, carpenters and piece rates, delivery vans and crews, payment schedules and approval limits. Build the screens above in your own words.',
        you: 'Check the stages and rates with the head carpenter and the designer. Correct us where a step is wrong.',
        get: 'A working Verity holding your products, stages, rates and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in open orders with their drawings, board and fitting stock, timber in the yard, dealers and open balances from your sheets and diaries. Train designers, carpenters, stores and drivers at their own benches.',
        you: 'Your files as they are, even photos and notebooks. One hour per role and a supervisor who will move jobs on the board.',
        get: 'Your open orders and stock inside Verity, and a team that has used it on real jobs.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on. Review the first weeks of jobs and waste with you, tune the flags, and extend to a new product line, a showroom or an export order as the business grows.',
        you: 'A short monthly review of margins and delays.',
        get: 'A system that keeps matching how your workshop makes furniture, with someone accountable for it.',
      },
    ],
    bring: [
      'One or two live orders with drawings and cut lists',
      'Your board, timber and hardware stock lists',
      'Your piece-rate and carpenter lists',
      'Delivery list and crew arrangement for a typical week',
      'Dealer and customer balances, even in a diary',
    ],
    time: 'About 8 to 11 hours of your own time across the four weeks, mostly in week 1. The head carpenter, designer and accounts person need a few more each.',
    after: 'Nobody is hired to run Verity. Drawings, cut lists, stage moves and deliveries are recorded on the sheets the workshop already uses, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your workshop a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own order, stock, floor and payment records. Ask in plain language, then turn the answer into tasks for the right person.',
    examples: [
      {
        q: 'Which orders are at risk of missing their delivery date this week?',
        a: 'Six jobs. Three wait in finishing, two wait for soft-close channels and one waits for a customer’s colour approval.',
        rows: [['Finishing queue', '3 jobs'], ['Channels short', '2 jobs'], ['Colour approval', '1 job']],
        action: 'Create a task for each owner',
      },
      {
        q: 'Which jobs used the most board above plan this month?',
        a: 'Order 2217 used 22 percent more than planned, and orders cut by Suresh average 11 percent over plan against 5 percent for the rest.',
        rows: [['2217 Rao', '+22%'], ['2227 Singh', '+15%'], ['2224 Kapoor', '+4%']],
      },
      {
        q: 'Which customers have a balance due at delivery that has not been collected?',
        a: 'Two orders, together ₹1.9 lakh, delivered more than ten days ago with the final payment pending.',
        action: 'Assign follow-up calls',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. People still call customers and suppliers. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A customer approves a drawing',
      then: ['Cut list and bill of materials created', 'Stock checked for boards and fittings', 'Shortfalls sent to purchase with a needed-by date'],
    },
    {
      when: 'A drawing change comes after cutting has begun',
      then: ['Order flagged with the rework cost', 'Owner asked to approve or refuse', 'Production told which version to follow'],
    },
    {
      when: 'A timber parcel arrives',
      then: ['Parcel recorded with species and source', 'Moisture reading requested before issue', 'Parcel linked to orders when issued'],
    },
    {
      when: 'A job passes its stage date',
      then: ['Shown as behind on the board', 'Task to the stage lead with the reason asked', 'New date recorded and the delivery re-checked'],
    },
    {
      when: 'All pieces of an order are packed',
      then: ['Site readiness check created', 'Van and crew proposed from the schedule', 'Balance due at delivery added to the checklist'],
    },
    {
      when: 'A delivered order has a service request',
      then: ['Warranty status checked', 'Visit scheduled for the service crew', 'Outcome recorded on the original order'],
    },
  ],

  rules: {
    heading: 'The rules a furniture maker has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant and compliance adviser are not rebuilding them from loose papers.',
    items: [
      {
        name: 'Legal timber for export markets',
        what: 'The US, Europe, Australia, Japan and South Korea prohibit imports of illegally sourced wood, even when the illegality happened early in the supply chain. Exporters may be asked for species, source and papers.',
        how: 'Timber parcels link to supplier, invoice and transport papers, and to the orders they were issued to.',
        source: { name: 'Forest Trends', url: 'https://www.forest-trends.org/publications/indias-wooden-furniture-and-wooden-handicrafts-risk-of-trade-in-illegally-harvested-wood/' },
      },
      {
        name: 'BIS quality control order for furniture',
        what: 'A Furniture Quality Control Order under the BIS Act covers items such as chairs, tables, storage units and beds, and was reported in May 2026 as upcoming, with a short-term compliance burden. Timing, exemptions for small units and export-only production have been reported differently, so check the current notification.',
        how: 'Each product can carry its standard, test report and licence as a record, linked to the lots and orders made under it.',
        source: { name: 'InteriorDaily, May 2026', url: 'https://www.interiordaily.com/article/9840066/the-indian-furniture-sector-has-long-term-potential-but-the-industry-is-facing-several-real-challenges/' },
      },
      {
        name: 'Payment to micro and small suppliers',
        what: 'Under the MSMED Act, a buyer generally has to pay a micro or small supplier within the agreed period, which cannot exceed 45 days. From 1 April 2024, late payment generally affects the tax deduction.',
        how: 'Supplier bills carry acceptance dates and a days-left count, and bills near the limit are listed for payment.',
        source: { name: 'Busy Infotech', url: 'https://busy.in/tds/section-43bh-msme-payment-rule-and-45-day-limit-explained/' },
      },
      {
        name: 'Labour Codes and workshop safety records',
        what: 'The four Labour Codes took effect from 21 November 2025. Workshops with sawdust, finishing chemicals and machines have safety, fire and working-hour duties, and state rules are still being notified.',
        how: 'Attendance, hours, overtime, contract workers, incidents and safety inspections are recorded per person and per area.',
        source: { name: 'TaxGuru, summarising the Ministry of Labour release', url: 'https://taxguru.in/?p=1002943' },
      },
    ],
    note: 'Rules change and differ by state, product and buyer. Confirm current requirements with your accountant, adviser or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A carpenter does not need to see the customer’s price. A driver should not edit stock. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which orders and customers make money?', sees: 'Jobs at risk, margin by order, board waste, dealer dues, deliveries and every location side by side.' },
    { role: 'Designer or sales', question: 'What did the customer ask for and where is it?', sees: 'Orders, drawing versions, approvals, quotes, stage and delivery date, payment schedule.' },
    { role: 'Head carpenter', question: 'What is on the floor and what is stuck?', sees: 'Jobs by stage, cut lists, material shortages, carpenters’ work and rework.' },
    { role: 'Stores and purchase', question: 'What must I order by when?', sees: 'Board, timber and fittings against orders, open purchase orders, supplier delays.' },
    { role: 'Accounts and dispatch', question: 'What ships and what is owed?', sees: 'Delivery schedule, balances due at delivery, dealer ageing, supplier bills with days left.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your design software and drawing files. Drawings are stored on the order and versions are tracked.',
      'Your accounting package, which keeps the books. We agree how data reaches Verity during setup.',
      'WhatsApp with customers and dealers. Staff send; Verity tells them who and when.',
      'Your accountant, who still prepares returns.',
    ],
    not: [
      'Take orders from customers online or run a showroom counter.',
      'Send messages to customers or suppliers on its own.',
      'Design furniture or optimise cutting layouts by itself.',
      'File your returns or run your salary processing.',
    ],
    migration:
      'We bring in your products, open orders with their drawings, stock, carpenters, dealers and balances from the files, diaries and sheets you use now, in stages, so the workshop keeps running while it happens.',
  },

  faqHeading: 'Questions furniture makers ask.',
  faqs: [
    [
      'Our carpenters are not used to computers. Will they use it?',
      'They do not have to type much. The head carpenter or supervisor moves a job on the board and picks a reason from a list. We train at the bench and keep each entry to a few taps.',
    ],
    [
      'We make custom pieces. Does it handle one-off designs?',
      'Yes. Each order has its own drawing, cut list and bill of materials, and standard items can be reused. Custom work is the normal case, not an exception.',
    ],
    [
      'Can it work out cutting layouts to save board?',
      'No. It records the board planned and used per job and shows where waste is high. Your cutter or design software keeps making the layout.',
    ],
    [
      'We sell through dealers and our own showroom. Is that covered?',
      'Yes. Dealers, showrooms and the factory are locations or accounts in one system, with orders, dues, returns and stock for each.',
    ],
    [
      'Do you do our invoices and GST?',
      'No. Your accounting package keeps doing that. Verity records the order, the delivery and the dues, and tells accounts what is waiting.',
    ],
    [
      'We export part of our output. Will it help?',
      'It helps with the records: timber source trails, packing, shipping documents and payment follow-up. It does not file shipping bills or customs papers.',
    ],
    [
      'Who can see my costs and margins?',
      'Only the people you allow. Access is set by role, so a carpenter sees jobs and a designer sees quotes. Every change is recorded with who made it and when.',
    ],
    [
      'How long before I see something useful?',
      'The hardware shortage list and balances due need only your existing stock and order data, so they come first. Margin by order and waste trends become reliable after a few weeks of recorded jobs.',
    ],
    [
      'What does it cost?',
      'It depends on the number of locations, users and how much you want set up. Message us and we will give you a clear number after a short conversation about how your workshop runs.',
    ],
  ],

  related: ['furniture-stores', 'interior-designers', 'home-decor-stores', 'building-material-suppliers', 'exporters', 'manufacturers'],

  ctaHeading: 'Start with the jobs that are about to miss their delivery date.',
  ctaLede:
    'Tell us how your workshop runs and we will show you the jobs at risk, the hardware shortages and the balances waiting at delivery, using your own numbers.',
};
