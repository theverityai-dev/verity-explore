export default {
  schema: 2,
  slug: 'manufacturers',
  status: 'published',
  plural: 'manufacturers',
  subject: 'factory',
  checked: '15 October 2026',

  seo: {
    title: 'Manufacturing management software for Indian factories | Verity',
    description:
      'The 14 problems that make factory orders late and margins thin, what each costs, and the Verity screens that fix them: jobs, materials, rejects, machines and dues.',
    keywords: [
      'manufacturing management software India',
      'production planning software for small factories',
      'factory order and material tracking',
      'MSME manufacturer software',
      'job costing and rejection tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'orders', 'suppliers', 'logistics', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for manufacturers',
    headline: 'The order is late, and nobody can say which step made it late.',
    lede:
      'A factory runs on a chain: enquiry, quote, material, machine, inspection, packing, dispatch, payment. Each link lives in a different place, so when one slips the owner learns about it from an angry customer. Verity puts the whole chain on one screen and tells you where it is stuck.',
    oneLine:
      'One system that knows every order, every job on the floor, every bag of material, every reject and every rupee still to come in.',
    note: 'No new department is needed. The records come from the job cards, challans and stock slips you already write.',
    screen: 'owner',
    screenNote: 'jobs, materials, rejects and dues',
  },

  today: {
    heading: 'Most factories run well on the floor and slowly in the office.',
    paragraphs: [
      'The machines are running and the supervisor knows what is on each one. What is harder to see is the rest: which order will miss its date, which raw material will run out on Thursday, how much a job really cost after scrap, and which customer has not paid for ninety days.',
      'That information exists, but in pieces. A planning whiteboard or an Excel sheet. Job cards on paper. A stock register, a purchase file, a quality book, an accounting package that only sees the bills. The person who joins all of this together is the owner or one trusted manager, usually while also handling a breakdown.',
      'So the factory does not fail. It leaks. A quote priced on last quarter’s steel rate, a lot of rework nobody logged, a dispatch held back for a missing invoice, a payment chased only when cash gets tight.',
    ],
    stack: ['Planning whiteboard or Excel', 'Paper job cards', 'Stock and purchase registers', 'Accounting package', 'WhatsApp groups with the shop floor', 'The supervisor’s memory'],
    stackNote: 'Each of these does its own job well enough. The trouble is the gaps between them.',
  },

  painsHeading: 'Where a factory actually loses money and time.',
  painsLede:
    'These are the situations manufacturers describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Orders',
      title: 'Delivery dates are promised without looking at the floor',
      scene:
        'A big customer calls and asks for 2,000 pieces in three weeks. The sales head says yes because the last order went fine. Nobody checks that two machines are already booked and a die is at the tool room.',
      cost:
        'Example arithmetic: if one order in eight ships late and each late order costs a ₹15,000 penalty or discount, a factory shipping 40 orders a month gives away about ₹75,000 a month, plus the customer who quietly moves part of the volume elsewhere.',
      fix:
        'Every order becomes jobs with a date, a machine or line, and a material need. Before a date is confirmed, Verity shows the load on each machine for those weeks, so the promise comes from the schedule and not from hope.',
      screen: 'jobs',
    },
    {
      area: 'Planning',
      title: 'The plan lives on a whiteboard that is wrong by lunchtime',
      scene:
        'The morning plan says job 4471 runs on machine 3. By eleven, a breakdown and a rush order have changed it. The whiteboard is not updated, so the next shift starts the wrong job.',
      cost:
        'Machine hours spent on the less urgent job, changeovers that did not need to happen, and a supervisor who spends the day reshuffling instead of supervising.',
      fix:
        'Jobs sit on one board by machine and day. When the supervisor moves a job, the new order is visible to planning, stores and dispatch at once, with the reason recorded.',
      screen: 'jobs',
    },
    {
      area: 'Materials',
      title: 'The line stops for a material that was never ordered',
      scene:
        'The job is ready to start but the 2 mm sheet is not in stores. The purchase manager says it was on the list. The list was in last week’s file. The line waits two days.',
      cost:
        'A stopped line still pays wages, power and rent. Example arithmetic: ten workers and two machines idle for two days can be ₹40,000 or more of cost with nothing produced.',
      fix:
        'Each job carries its bill of materials. Verity compares what the next fortnight’s jobs need with stock and open purchase orders, and lists the shortfalls with the date by which each must be ordered.',
      screen: 'materials',
    },
    {
      area: 'Materials',
      title: 'Cash is stuck in stock that is not needed',
      scene:
        'The store holds six months of a fastener bought at a discount, and none of a bearing that is needed tomorrow. Nobody can say what is slow moving without a physical count.',
      cost:
        'Working capital sits on shelves while a short-term loan carries interest. Old stock also gets damaged, rusts, or becomes obsolete when a design changes.',
      fix:
        'Stock is valued item by item with its usage rate. Verity lists items with many months of cover and no recent issue, so purchase and the owner can decide to stop buying, return or use them up.',
      screen: 'materials',
    },
    {
      area: 'Costing',
      title: 'The quote was priced on old material rates',
      scene:
        'The quote went out on the steel price from the last purchase. Since then the rate rose. The job is won, produced, and only then does anyone notice the margin has gone.',
      cost:
        'Orders that look profitable on the invoice but are not. Without the real cost per job, the factory cannot tell which customers and products to push.',
      fix:
        'Quotes are built from the item’s bill of materials and the latest purchase rate on record. After the job, actual material, scrap and hours are compared with the quote so the margin of each job is a number.',
      screen: 'jobs',
    },
    {
      area: 'Quality',
      title: 'Scrap and rework are known to everyone and written down by no one',
      scene:
        'The operator knows the die was worn and 60 pieces were rejected. The supervisor knows 40 were reworked. The register shows only what finally passed, so the month’s yield looks fine.',
      cost:
        'Example arithmetic: 3 percent scrap on a ₹1 crore monthly material spend is ₹3 lakh a month. If the causes are never recorded, the same causes repeat.',
      fix:
        'Rejects and rework are entered against the job with a cause: material, machine, tool, operator, process. Verity totals them by cause and by machine, so the repeated cause is the first thing on the list.',
      screen: 'quality',
    },
    {
      area: 'Quality',
      title: 'A customer complaint cannot be traced to its batch',
      scene:
        'A customer returns 300 pieces with a crack. Which lot was it? Which material heat? Which shift? The inspection book has a date and a tick, nothing else.',
      cost:
        'Whole lots get blamed or credited, a good customer loses trust, and the same fault is hard to stop because nobody knows where it began.',
      fix:
        'Each lot carries its material source, machine, shift and inspection results as a record. A complaint opens against that lot, and the linked records show what else may be affected.',
      screen: 'quality',
    },
    {
      area: 'Machines',
      title: 'Machines are repaired after they break',
      scene:
        'The press has made an odd noise for a week. It stops on the day the biggest order is running. The maintenance man had no list of what was due, and the spare is not in stores.',
      cost:
        'Breakdown days stop output and push every promised date. A spare ordered in a hurry costs more and takes longer than one planned.',
      fix:
        'Each machine has a service schedule, a history of faults and spares used. Verity tasks the maintenance team when a service is due and flags spares to buy before the service date.',
      screen: 'machines',
    },
    {
      area: 'Suppliers',
      title: 'Suppliers promise a date and nobody follows up',
      scene:
        'A casting vendor said Friday. Today is Tuesday and nobody has called. The follow-up depends on the purchase executive remembering, and he is also handling three new quotes.',
      cost:
        'Late inbound material is the most common reason for late outbound orders, and a late arrival is only discovered when the line needs it.',
      fix:
        'Each purchase order carries a promised date and a follow-up task for the buyer. Overdue deliveries list at the top of the purchase view, with the job each one will hold up.',
      screen: 'materials',
    },
    {
      area: 'Dispatch',
      title: 'Finished goods sit waiting for paperwork',
      scene:
        'The goods are packed and on the dispatch bay. The invoice is waiting for a rate confirmation, the transport slip for a signature. The truck leaves tomorrow instead of today.',
      cost:
        'A day’s delay on every dispatch pushes the payment date by a day as well. Packed stock also takes space and risks damage.',
      fix:
        'A job that clears inspection becomes a dispatch task with its checklist: quantity, packing, invoice, transport details. Anything missing shows against the dispatch so it can be fixed before the truck arrives.',
      screen: 'jobs',
    },
    {
      area: 'Money',
      title: 'Customers pay late and the chasing is by memory',
      scene:
        'Three customers owe ₹40 lakh in total, each more than sixty days old. The accounts person calls when she has time, and sales will not push a good customer.',
      cost:
        'Late receipts mean more borrowing. Example arithmetic: ₹40 lakh held back for two extra months at 12 percent a year is about ₹80,000 of interest.',
      fix:
        'Every invoice has a due date and an owner. Overdue amounts list by customer and age, a follow-up task is assigned, and each call or promise is recorded so the next person does not start from zero.',
      screen: 'money',
    },
    {
      area: 'Money',
      title: 'Micro and small suppliers must be paid within a legal limit',
      scene:
        'A small vendor delivered in August. The invoice was passed in September and paid in November. The accounts team did not know the date started at acceptance of the goods.',
      cost:
        'For micro and small suppliers, payments beyond the legal limit can lose the buyer the tax deduction for that expense until it is actually paid, and suppliers who are paid late become reluctant suppliers.',
      fix:
        'Supplier bills are recorded with the acceptance date and the supplier’s type if you tell us it. Verity lists bills approaching the 45-day limit so they are scheduled for payment on time.',
      screen: 'money',
      source: {
        name: 'Busy Infotech, Section 43B(h) and the MSMED Act',
        url: 'https://busy.in/tds/section-43bh-msme-payment-rule-and-45-day-limit-explained/',
      },
    },
    {
      area: 'People',
      title: 'Absenteeism, overtime and contract labour are tracked on paper',
      scene:
        'Monday has the most absentees, so the first shift is short and the supervisor moves people around. Overtime is approved verbally. Contract workers come through a contractor and nobody has their records in one place.',
      cost:
        'Output falls on short shifts, overtime is paid without a check, and a labour inspection means days of gathering registers.',
      fix:
        'Attendance, shifts, overtime approvals and contract workers are recorded against each person and line. Short shifts are visible the evening before, and the registers an inspector asks for come from the same records.',
      screen: 'machines',
    },
    {
      area: 'Owner',
      title: 'You are the control room, and a second plant doubles it',
      scene:
        'You know which order is risky, which supplier is slow, which customer is late. You carry it all. With a second unit, each has its own sheets, and comparing them takes a week.',
      cost:
        'The factory cannot grow beyond what one head can hold, and the owner cannot take a week off without a call from the floor.',
      fix:
        'A morning view lists what needs a decision, each item with a named owner. Units are locations in one system, so output, rejects, stock and dues compare side by side.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '35.4%',
      text: 'of India’s manufacturing is accounted for by micro, small and medium enterprises, with about 48.6 percent of exports, according to the Economic Survey 2025 to 26 as reported by IANS.',
      source: { name: 'IANS, citing the Economic Survey 2025-26', year: '2026', url: 'https://ianslive.in/msmes-account-for-nearly-half-of-indias-exports-economic-survey--20260129153253' },
    },
    {
      figure: '45 days',
      text: 'is the longest a buyer can agree to take to pay a micro or small supplier under the MSMED Act, and from 1 April 2024 late payment affects the buyer’s tax deduction. Without a written agreement the limit is 15 days.',
      source: { name: 'Busy Infotech', year: '2026', url: 'https://busy.in/tds/section-43bh-msme-payment-rule-and-45-day-limit-explained/' },
    },
    {
      figure: '29 laws',
      text: 'central labour laws were rationalised into four Labour Codes that the Ministry of Labour made effective from 21 November 2025, including the safety and working conditions code that covers factories.',
      source: { name: 'TaxGuru, summarising the Ministry of Labour release', year: '2025', url: 'https://taxguru.in/?p=1002943' },
    },
    {
      figure: '55.1',
      text: 'was the HSBC India Manufacturing PMI for September 2026, up from 52.8 in August. Input costs rose faster, and manufacturers bought more material and built stocks ahead of expected sales.',
      source: { name: 'Angel One, reporting the HSBC PMI compiled by S&P Global', year: '2026', url: 'https://www.angelone.in/news/economy/india-s-manufacturing-pmi-rises-to-55-1-in-september-2026-as-new-orders-recover' },
    },
  ],
  factsNote:
    'Some figures come from news reports and a software vendor’s explainer rather than the original government text, and the share of manufacturing may be output or value added. Check the original before quoting them in a filing.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your factory’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Plant / Today',
      meta: 'Unit 1, Pune',
      heading: 'The owner’s morning view',
      caption:
        'Orders at risk, output, rejects, material shortages and dues on one screen, with the items needing a decision listed below. This replaces the morning phone calls to the floor.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Orders at risk', value: '5', note: 'likely to miss date' },
            { label: 'Output vs plan', value: '92%', note: 'this week' },
            { label: 'Reject rate', value: '3.4%', note: 'target 2%' },
            { label: 'Overdue dues', value: '₹38.6 L', note: '3 customers' },
          ],
        },
        { type: 'title', text: 'Output against plan, by line this week' },
        {
          type: 'bars',
          items: [
            { label: 'Press line', value: 96, display: '96%' },
            { label: 'CNC cell', value: 89, display: '89%' },
            { label: 'Welding bay', value: 74, display: '74%', tone: 'muted' },
            { label: 'Assembly', value: 91, display: '91%' },
          ],
        },
        { type: 'alert', text: '2 orders will miss their date unless 2 mm sheet arrives by Thursday.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Sheet metal shortfall', meta: 'Purchase order promised Friday, needed Thursday', tag: ['Chase', 'flag', 'Chased', 'ok'] },
            { name: 'Welding bay behind plan', meta: 'Two absentees, overtime approval pending', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'jobs',
      title: 'Orders and jobs',
      meta: 'Next 3 weeks',
      heading: 'Every order as jobs, by machine and by date',
      caption:
        'Orders break into jobs with a machine, a start, a due date and a status. Moving a job is visible to planning, stores and dispatch together, and each order shows its quoted margin against actual.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Waiting for material',
              cards: [
                { title: 'J-4471 Bracket, 2,000 pcs', meta: 'Customer: Kirloskar Components. Due 29 Oct', tag: ['Short', 'late', 'Material in', 'ok'] },
              ],
            },
            {
              name: 'On machine',
              cards: [
                { title: 'J-4468 Flange, 800 pcs', meta: 'CNC 2. Due 24 Oct', tag: ['On time', 'ok'] },
                { title: 'J-4466 Housing, 500 pcs', meta: 'Press 3. Due 22 Oct', tag: ['Behind', 'flag'] },
              ],
            },
            {
              name: 'Ready to dispatch',
              cards: [
                { title: 'J-4459 Cover plate, 1,200 pcs', meta: 'Invoice pending, truck at 4 pm', tag: ['Invoice', 'flag', 'Done', 'ok'] },
              ],
            },
          ],
        },
        {
          type: 'table',
          cols: ['Job', 'Quoted margin', 'Actual so far', 'Scrap', 'Status'],
          rows: [
            ['J-4459', '18%', '17%', '1.2%', ['OK', 'ok']],
            ['J-4466', '16%', '11%', '5.8%', ['Review', 'late']],
            ['J-4468', '20%', '19%', '1.9%', ['OK', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'materials',
      title: 'Materials',
      meta: 'Stock and purchase orders',
      heading: 'Stock against what the next jobs need',
      caption:
        'What is in stores, what the next fortnight’s jobs will use, what is already ordered, and what is promised late. Slow-moving items are listed too, so cash tied up is visible.',
      blocks: [
        {
          type: 'table',
          cols: ['Material', 'In stock', 'Needed 14 days', 'On order', 'Status'],
          rows: [
            ['MS sheet 2 mm', '1.2 t', '3.5 t', '2 t, due Fri', ['Short', 'late', 'Chased', 'ok']],
            ['EN8 rod 40 mm', '4.8 t', '2.1 t', 'None', ['OK', 'ok']],
            ['Bearing 6205', '40', '120', '100, due Mon', ['Reorder', 'flag']],
            ['M8 fasteners', '38,000', '4,000', 'None', ['Slow moving', 'muted']],
          ],
        },
        { type: 'alert', text: 'M8 fasteners: about 9 months of cover, ₹1.8 lakh in stock. Stop buying.', action: 'Mark' },
      ],
    },
    {
      id: 'quality',
      title: 'Quality',
      meta: 'Inspection and rejects',
      heading: 'Rejects by cause, and every lot traceable',
      caption:
        'Inspection results sit on the lot. Rejects and rework carry a cause, so the repeated one rises to the top. A customer complaint opens against the lot and shows what else may be affected.',
      blocks: [
        { type: 'title', text: 'Rejects by cause, this month' },
        {
          type: 'bars',
          items: [
            { label: 'Worn tool or die', value: 78, display: '412 pcs' },
            { label: 'Material defect', value: 41, display: '218 pcs', tone: 'muted' },
            { label: 'Setting error', value: 24, display: '126 pcs', tone: 'muted' },
            { label: 'Handling damage', value: 12, display: '64 pcs', tone: 'muted' },
          ],
        },
        {
          type: 'record',
          title: 'Complaint C-212, Lot L-9084',
          sub: 'Housing, 300 pcs returned, crack at weld',
          fields: [
            ['Material', 'Heat 5521, vendor Shree Steels'],
            ['Machine, shift', 'Press 3, night'],
            ['Same lot dispatched', ['1,100 pcs to 2 customers', 'flag']],
            ['Status', ['Open', 'late', 'Customer informed', 'ok']],
          ],
          timeline: [
            ['12 Oct', 'Complaint raised by customer'],
            ['13 Oct', 'Lot traced, inspection record checked'],
          ],
        },
      ],
    },
    {
      id: 'machines',
      title: 'Machines and shifts',
      meta: 'Service and attendance',
      heading: 'Service due dates and who is on shift',
      caption:
        'Each machine has its service schedule, fault history and spares. Beside it, the shift roster with absentees and overtime waiting for approval, so Monday’s shortage is seen on Sunday.',
      blocks: [
        {
          type: 'table',
          cols: ['Machine', 'Last service', 'Next due', 'Faults, 90 days', 'Status'],
          rows: [
            ['Press 3 (200 t)', '2 Aug', '2 Nov', '4', ['Check', 'late', 'Booked', 'ok']],
            ['CNC 2', '10 Sep', '10 Dec', '1', ['OK', 'ok']],
            ['Welding robot', '28 Jun', '28 Oct', '2', ['Due soon', 'flag']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Welding bay, Monday first shift', meta: '2 of 8 absent, contract workers not yet confirmed', tag: ['Short', 'flag', 'Covered', 'ok'] },
            { name: 'Overtime request, Press line', meta: '6 workers, 3 hours, for J-4466', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'money',
      title: 'Dues and payables',
      meta: 'Money in and out',
      heading: 'Who owes you, and who you must pay on time',
      caption:
        'Customer dues by age with a named follow-up and the last promise made. Supplier bills with the days left to the legal limit for small suppliers, so none slips by accident.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Amount', 'Age', 'Last promise', 'Status'],
          rows: [
            ['Kirloskar Components', '₹14.2 L', '74 days', 'Pay by 20 Oct', ['Call', 'late', 'Promised', 'info']],
            ['Apex Auto Parts', '₹16.8 L', '63 days', 'None', ['Call', 'flag']],
            ['Sundaram Fabricators', '₹7.6 L', '52 days', 'Part pay Fri', ['Watch', 'flag']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Shree Steels, bill 2291', meta: 'Micro supplier, goods accepted 3 Sep, 38 days gone', tag: ['Pay by 18 Oct', 'late', 'Scheduled', 'ok'] },
            { name: 'Mahesh Packaging, bill 118', meta: 'Small supplier, accepted 20 Sep, 21 days gone', tag: ['OK', 'ok'] },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Wednesday, before and after.',
  dayLede: 'The work on the floor is the same. What changes is that each step leaves a record and the record raises the flag.',
  day: [
    {
      time: '8:30',
      before: 'You phone the plant head for the day’s plan and learn about a breakdown that happened last night.',
      after: 'The Today screen lists five orders at risk and the fault already logged against Press 3, with the job it affects.',
    },
    {
      time: '10:30',
      before: 'A customer asks for a rush order. You say yes and hope.',
      after: 'You see the load by machine for the next three weeks and give a date from the schedule.',
    },
    {
      time: '12:30',
      before: 'Stores finds the sheet metal is short after the job has been issued.',
      after: 'The shortfall was listed on Monday, the supplier was chased, and the job waits on the board with a date.',
    },
    {
      time: '3:00',
      before: 'Reject counts are written on a slip and forgotten.',
      after: 'The rejects are entered with a cause, and worn tools show at the top of the quality screen.',
    },
    {
      time: '5:00',
      before: 'The truck leaves late because the invoice was not ready.',
      after: 'The dispatch checklist showed the missing invoice at noon, so it was sorted before the truck arrived.',
    },
    {
      time: 'Month end',
      before: 'Dues and supplier bills are reconciled in a week of phone calls and sheets.',
      after: 'Dues by age and supplier bills near their limit are one list, each with an owner.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks, around your plant.',
    lede:
      'You do not get a login and a manual. We walk your floor, learn how an order really moves, build Verity around it, move your data in, and stay on while your people get used to it.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day on your floor and in stores, planning and dispatch. Follow one real order from enquiry to payment, and note every sheet, register and WhatsApp group it touches.',
        you: 'Two to three hours from you and your plant head. Access to a recent order file, your planning sheet and the stock register.',
        get: 'A written map of how your orders, jobs, materials and dues move today, with the first problems we will fix, in order.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your products and bills of materials, machines and lines, shifts, inspection checks, reorder points and approval limits, and build the screens above in your own terms.',
        you: 'Review the setup with your plant head and purchase lead. Correct us where a rule is wrong.',
        get: 'A working Verity holding your actual machines, items and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in open orders, item list, stock balances, supplier and customer lists and open dues from your sheets or ERP. Train planning, stores, quality and accounts at their own desks.',
        you: 'Your sheets as they are, messy or not. One hour per role, and a supervisor who will try it on live jobs.',
        get: 'Your open orders, stock and dues inside Verity, and a team that has used it on real jobs.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks of recorded jobs, adjust the flags that are too loud or too quiet, and change the setup when you add a product or a line.',
        you: 'A short monthly look at what the numbers say.',
        get: 'A system that keeps matching how the plant runs, with someone accountable for it.',
      },
    ],
    bring: [
      'A recent order or two with their quotes and job cards',
      'Your item list with bills of materials, if you have them',
      'Your latest stock register and purchase order file',
      'Customer and supplier lists with open amounts',
      'Machine list, shift pattern and your inspection formats',
    ],
    time: 'About 9 to 12 hours of your own time across the four weeks, most of it in week 1. Your plant head, purchase lead and accounts lead need a few more each.',
    after: 'Nobody is hired to run Verity. Jobs, material issues and inspections are recorded as part of the slips you already write, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your factory a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own order, stock, quality and dues records. Ask in plain language, then turn the answer into tasks for the right person.',
    examples: [
      {
        q: 'Which open orders may miss their date this month, and why?',
        a: 'Five orders are at risk. Two wait for 2 mm sheet, two are behind on Press 3 after a breakdown, and one is waiting for customer drawing approval.',
        rows: [['Material short', '2 orders'], ['Machine behind', '2 orders'], ['Drawing approval', '1 order']],
        action: 'Create a task for each owner',
      },
      {
        q: 'Which machine causes the most rejects, and from what cause?',
        a: 'Press 3 has 412 rejects this month, mostly from a worn die. Replacing the die is the single largest saving available.',
        rows: [['Press 3', '412 pcs'], ['CNC 2', '96 pcs'], ['Welding bay', '84 pcs']],
      },
      {
        q: 'Which customers are more than 60 days overdue?',
        a: 'Three customers owe ₹38.6 lakh in total, and Apex Auto Parts has no follow-up recorded.',
        action: 'Assign follow-up calls',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. People still make the calls and send the messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An order is confirmed',
      then: ['Jobs created with due dates', 'Material need checked against stock and orders', 'Shortfalls sent to purchase with a needed-by date'],
    },
    {
      when: 'A purchase order passes its promised date',
      then: ['Task to the buyer to call the supplier', 'The jobs it will hold up are listed', 'New date recorded when promised'],
    },
    {
      when: 'A lot fails inspection',
      then: ['Lot held from dispatch', 'Cause and quantity recorded', 'Quality head notified for a decision'],
    },
    {
      when: 'A machine reaches its service date',
      then: ['Task to the maintenance lead', 'Spares needed checked against stores', 'Service recorded in the machine history'],
    },
    {
      when: 'A job clears inspection',
      then: ['Dispatch checklist created', 'Invoice task sent to accounts', 'Due date set from the customer’s terms'],
    },
    {
      when: 'A customer invoice crosses its due date',
      then: ['Added to the overdue list by age', 'Follow-up assigned to a named person', 'Promise or outcome recorded on the invoice'],
    },
  ],

  rules: {
    heading: 'The rules a factory has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant and your safety officer are not rebuilding them from loose papers.',
    items: [
      {
        name: 'Payment to micro and small suppliers',
        what: 'Under the MSMED Act, a buyer generally has to pay a micro or small supplier within the agreed period, which cannot be more than 45 days, or 15 days with no written agreement. From 1 April 2024, payments after that limit generally affect the tax deduction for the expense.',
        how: 'Each supplier bill carries its acceptance date and a days-left count, and bills near the limit are listed for payment.',
        source: { name: 'Busy Infotech', url: 'https://busy.in/tds/section-43bh-msme-payment-rule-and-45-day-limit-explained/' },
      },
      {
        name: 'Labour Codes and factory safety records',
        what: 'The four Labour Codes took effect from 21 November 2025 and replace 29 earlier laws. Registers, licences and returns for factories are being reset by central and state rules, which are still being notified in many states.',
        how: 'Attendance, shifts, overtime, contract workers and safety incidents are recorded per person and per line, so the registers can be produced in whatever format your state requires.',
        source: { name: 'TaxGuru, summarising the Ministry of Labour release', url: 'https://taxguru.in/?p=1002943' },
      },
      {
        name: 'BIS certification and raw material orders',
        what: 'On 13 November 2025 the government withdrew mandatory BIS quality control orders for 14 chemical and polymer inputs and six non-ferrous metals. Other products and inputs may still need BIS marks.',
        how: 'Each item and lot can carry its certificate or test report as a record, and supplier and lot are linked, so you can show what a part was made from.',
        source: { name: 'Tribune, reporting the QCO withdrawal', url: 'https://www.tribuneindia.com/news/business/india-scraps-qcos-across-textiles-plastics-metals-gtri-urges-vigil-on-import-surges/amp' },
      },
      {
        name: 'Stock, input and output records for GST',
        what: 'A registered manufacturer generally has to keep records of inputs, stock, production and outputs that support the tax it claims and pays. Details vary with your scheme and turnover.',
        how: 'Material receipts, issues to jobs, scrap and finished goods are one trail, so the figures your accountant needs are traceable to a job and a lot.',
      },
    ],
    note: 'Rules change and differ by state and by product. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A storekeeper should not see customer margins. A buyer should not edit dues. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which orders, units and customers are making or losing money?', sees: 'Orders at risk, margin by job, rejects, stock cover, dues, and every unit side by side.' },
    { role: 'Plant head', question: 'What is going to be late, and why?', sees: 'Jobs by machine, output against plan, shortages, absentees, breakdowns and overtime waiting.' },
    { role: 'Stores and purchase', question: 'What do I need to order or chase today?', sees: 'Shortfalls by needed-by date, purchase orders due and overdue, slow-moving stock.' },
    { role: 'Quality', question: 'What failed, and where did it come from?', sees: 'Inspection results by lot, rejects by cause, open complaints with traced lots.' },
    { role: 'Accounts', question: 'What is due in and what is due out?', sees: 'Customer dues by age, supplier bills with days left, costs per job.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your accounting package, which keeps doing the books. We agree how data reaches Verity during setup.',
      'Your machine controllers and shop floor equipment, which run as they do now.',
      'WhatsApp for talking to the floor and to customers. Staff send; Verity tells them who and when.',
      'Your chartered accountant, who still prepares returns and audits.',
    ],
    not: [
      'Run your machines or read from them directly.',
      'Send messages to customers or suppliers on its own.',
      'File your returns or run your salary processing.',
      'Replace your accountant or your safety officer.',
    ],
    migration:
      'We bring in your items, bills of materials, stock, open orders, customers, suppliers and dues from the sheets, ERP or registers you use now, in stages, so production keeps running while it happens.',
  },

  faqHeading: 'Questions factory owners ask.',
  faqs: [
    [
      'Will my supervisors and operators actually use it?',
      'It only works if the job is recorded, so we keep entries short and put them where people already write: the job card, the issue slip, the inspection sheet. We train at the machine with real jobs, and the supervisor gets something back: a plan that does not change under him without a reason.',
    ],
    [
      'We already have an ERP. Why add this?',
      'Many factories have an ERP that nobody enjoys using, or one that only handles accounts. We can take data from it during setup and see what is still missing. If your current system already does the job, we will say so.',
    ],
    [
      'Can it connect to my machines?',
      'No. Output, downtime and rejects are entered by the operator or supervisor in a few fields. We keep the entries short so they are done at the machine or at the end of the shift.',
    ],
    [
      'Does it do my accounts and invoices?',
      'No. Your accounting package keeps doing that. Verity records the job, the dispatch and the dues, and tells accounts which invoice is waiting.',
    ],
    [
      'We run job work for others as well as our own products. Is that a problem?',
      'No. A job can be our own product or a customer’s material kept separately, with its own stock and challans, so the two are never mixed.',
    ],
    [
      'Can I see two plants together?',
      'Yes. Each plant is a location in one system. Output, rejects, stock and dues compare side by side, and stock can be moved between plants against a recorded transfer.',
    ],
    [
      'Who can see my costs and margins?',
      'Only the people you allow. Access is set by role, so the floor, stores, accounts and you each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'How long before we see something useful?',
      'The material shortage list and overdue dues need only your existing stock and invoice data, so they are the first things we aim to have working. Margin by job and reject trends become reliable after a few weeks of recorded jobs.',
    ],
    [
      'What does it cost?',
      'It depends on the number of plants, users and how much you want set up. Message us and we will give you a clear number after a short conversation about how your factory runs.',
    ],
  ],

  related: ['industrial-suppliers', 'distributors', 'wholesalers', 'exporters', 'packaging-companies', 'chemical-manufacturers'],

  ctaHeading: 'Start with the orders that are about to be late.',
  ctaLede:
    'Tell us how your factory runs and we will show you the at-risk orders, the material shortfalls and the overdue dues it would find, using your own numbers.',
};
