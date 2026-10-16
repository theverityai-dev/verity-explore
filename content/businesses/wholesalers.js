export default {
  schema: 2,
  slug: 'wholesalers',
  status: 'published',
  plural: 'wholesalers',
  subject: 'wholesale business',
  checked: '15 October 2026',

  seo: {
    title: 'Wholesale business software for Indian traders | Verity',
    description:
      'The 14 leaks in a wholesale business: udhaar to retailers, rate slabs, aging stock, supplier dues and godown errors, and the Verity screens that put each one in front of you.',
    keywords: [
      'wholesale business software India',
      'wholesaler udhaar and credit tracking',
      'rate slab and price list management for traders',
      'godown stock ageing software',
      'wholesale order and dispatch tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'orders', 'suppliers', 'logistics', 'ai'],

  hero: {
    eyebrow: 'Verity for wholesalers',
    headline: 'Your profit is made on the buying rate and lost in the ledger. Verity watches both.',
    lede:
      'A wholesaler lives between two rates: what you paid and what the market pays today. Between them sit a godown, a hundred retailers who pay when they can, and a dozen suppliers who want their money on time. Verity keeps those four things in one place, so the owner stops carrying them in his head.',
    oneLine:
      'One system that knows every retailer’s dues, every line in the godown and how old it is, every rate you quoted and every supplier payment coming up.',
    note: 'Your munim or accountant keeps doing the books. Verity records the orders, dues and stock that the books are built from.',
    screen: 'owner',
    screenNote: 'retailers, godowns, rates and suppliers',
  },

  today: {
    heading: 'The business runs on trust and memory. The numbers sit in four places.',
    paragraphs: [
      'Most wholesalers know their top ten retailers by face and their credit by instinct. Orders come on the phone, on WhatsApp or through a salesman. The ledger sits with the munim, the rate list is whatever was said this morning, and the godown count lives with the godown boy.',
      'That works until the business has more than a few hundred retailers and a few thousand lines. Then nobody can say, without an hour of digging, how much is outstanding past 45 days, which items have sat for four months, or whether Tuesday’s rate to a new retailer was below your floor.',
      'The loss is slow and spread out. A bit of udhaar that stretches. A bag of stock bought high that the market has since walked away from. A rate quoted too low by a new salesman. None of it looks like a problem on the day, and all of it shows up in the cash you do not have at month end.',
    ],
    stack: ['Ledger or Tally with the munim', 'Rate list on WhatsApp or paper', 'Salesman order slips', 'Godown register', 'Post-dated cheque diary', 'Owner’s memory'],
    stackNote: 'Each one is useful. None of them can tell you that a buyer who owes ₹2.4 lakh has just placed a ₹1.5 lakh order.',
  },

  painsHeading: 'Where a wholesale business actually loses money.',
  painsLede:
    'These are the situations wholesalers describe again and again. For each one: what it looks like on a normal day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Credit',
      title: 'Udhaar grows and nobody checks the limit',
      scene:
        'A retailer who owes ₹2.4 lakh calls for another ₹1.5 lakh of goods. The salesman says yes because the retailer is old. The ledger is with the munim, who is at the bank. By the time anyone looks, the limit was crossed two orders ago.',
      cost:
        'Example arithmetic: a wholesaler with 150 retailers and an average ₹1.2 lakh outstanding is carrying ₹1.8 crore of other people’s money. At a 12% cost of funds, every extra 15 days of delay across the book costs about ₹90,000.',
      fix:
        'Each retailer has a credit limit and a credit period. When an order would take them over either, it waits for one tap from you, with the dues and age of the oldest bill shown beside it.',
      screen: 'credit',
    },
    {
      area: 'Credit',
      title: 'Collections depend on who remembers to ask',
      scene:
        'The collection salesman has a list in his pocket. The retailer who always says “next week” is chased every week. The quiet one who is 70 days late is not chased at all, because he never complains.',
      cost:
        'Delayed payment is a national habit. A 2025 report put delayed payments to small businesses at ₹7.34 lakh crore in March 2024. Your share of that sits in your own outstanding list.',
      fix:
        'Outstanding is aged into 0 to 30, 31 to 60 and over 60 days per retailer. Each late buyer gets a follow-up task for a named person, and the promise date and the result are written back to the retailer’s record.',
      screen: 'credit',
      source: {
        name: 'GAME, FISME and C2FO report, via Storyboard18, 2025',
        url: 'https://storyboard18.com/how-it-works/delayed-payments-to-msmes-fall-to-rs-7-34-lakh-crore-report-84822.htm',
      },
    },
    {
      area: 'Credit',
      title: 'Post-dated cheques that bounce, discovered late',
      scene:
        'Seven cheques from different retailers are in the drawer, dated across the month. One is deposited late, one bounces, and a second bounce from the same buyer is found only when the bank statement is read.',
      cost:
        'A bounced cheque means a bill that was counted as received but is not, plus a week or more before you chase it. Repeat bouncers keep buying because nobody joined the dots.',
      fix:
        'Every cheque is a record against the retailer with its date, bank and the bills it settles. A cheque due this week appears in a deposit list, and a bounce reopens the bills and marks the buyer for approval on the next order.',
      screen: 'credit',
    },
    {
      area: 'Rates',
      title: 'Rates quoted from memory, floors broken quietly',
      scene:
        'A new salesman gives a big retailer the same rate as the wholesale slab for 50 bags, but the retailer took 8. A regular gets last month’s lower rate because it was still on the order slip.',
      cost:
        'Example arithmetic: on a line sold at ₹1,000 a unit with a 4% margin, a ₹20 slip is half the profit. Across 200 invoices a month, one quiet rate error a day adds up quickly.',
      fix:
        'Rate slabs by quantity and buyer type are kept on each line. A quote below the floor for that quantity needs an approval, and Verity shows each week which invoices went under their slab and who raised them.',
      screen: 'rates',
    },
    {
      area: 'Rates',
      title: 'The market moves daily and your stock does not',
      scene:
        'You bought a lot of a commodity at the old rate. A week later the mandi rate has dropped. Your stock list shows what you paid, not what you could sell it for today.',
      cost:
        'Price exposure is the whole risk of the trade. Without a daily comparison, you find out the stock is under water when you try to sell it.',
      fix:
        'You enter the day’s market rate per line, or a small team member does. Verity sets it against your holding cost, flags lines now below cost, and shows the rupee value of the gap before you decide to hold or sell.',
      screen: 'rates',
    },
    {
      area: 'Stock',
      title: 'Slow stock that ties up cash in the godown',
      scene:
        'A carton of an item bought in the festival rush is still on the third rack in July. Nobody sells it because nobody has seen it in a list.',
      cost:
        'Example arithmetic: ₹10 lakh sitting for four months at a 12% cost of funds is about ₹40,000 of interest, before damage, shrinkage or expiry.',
      fix:
        'Every stock lot carries its receive date. Verity lists lines by age, how many days of sales they represent at the current pace, and which retailers last bought them, so a clearance push goes to the right buyers.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Buying by gut leaves fast lines empty and slow lines full',
      scene:
        'The best-selling pack is out on a Friday and the retailers go to the other wholesaler. Meanwhile, the big order of a seasonal line has arrived early and fills a bay.',
      cost:
        'A missed sale goes to a competitor, who may keep the retailer. An over-buy ties up money and space. Both come from the same missing view.',
      fix:
        'Verity shows sales per week, stock in hand, goods on order and the supplier’s lead time for each line, and drafts a purchase list of what is likely to run out before the next delivery. You approve or change it.',
      screen: 'stock',
    },
    {
      area: 'Orders',
      title: 'Orders on phone, WhatsApp and slips, all in different formats',
      scene:
        'A retailer sends a voice note. A salesman writes six lines on a slip. The counter clerk types it in later. At picking time the godown has a version that is not what the retailer asked for.',
      cost:
        'Wrong quantities mean returns, a second trip and a retailer who trusts you a little less each time.',
      fix:
        'Every order becomes one record with lines, rates, the salesman, the retailer and a state: received, checked for credit, picked, loaded, delivered. Whoever takes it sees the same thing as the godown does.',
      screen: 'orders',
    },
    {
      area: 'Orders',
      title: 'Picking mistakes and short deliveries found at the retailer’s shop',
      scene:
        'The van goes out with 18 cartons where the order said 20. The retailer notices after the van has left and calls the owner, not the godown.',
      cost:
        'Credit notes, a free top-up trip, and arguments over who is right. Each one eats the margin on a whole order.',
      fix:
        'The picklist is generated from the order and ticked off by the loader. The delivery record carries the count, and a shortage or damage on arrival is noted against the order the same day.',
      screen: 'orders',
    },
    {
      area: 'Transport',
      title: 'Trucks, e-way bills and freight as paper at the weighbridge',
      scene:
        'A consignment goes out above the e-way bill value and the document is generated at the last minute. A transporter’s freight bill for the month does not match the lorry receipts.',
      cost:
        'A vehicle held at a check post, a penalty, or a freight bill paid twice. All avoidable with the right record at the right moment.',
      fix:
        'Each dispatch records the vehicle, driver, transporter, lorry receipt number and your e-way bill number. A dispatch without one gets flagged before the van leaves, and monthly freight is checked against the dispatches.',
      screen: 'orders',
    },
    {
      area: 'Suppliers',
      title: 'Supplier dues paid late, or early and then short of cash',
      scene:
        'A small manufacturer who supplies you is owed money for 70 days. Another gets paid early because he rang more often. Nobody lined payments up against the 45-day rule.',
      cost:
        'Under the MSME payment rule, amounts owed to micro and small suppliers beyond the allowed days generally become deductible only when paid. Late supplier payments can mean a higher tax bill, as well as upset suppliers.',
      fix:
        'Each supplier bill shows its due date and a flag for whether the supplier is a micro or small enterprise. A payables list sorts by due date, so payments go out in the right order, with the cash they need.',
      screen: 'suppliers',
      source: {
        name: 'ClearTax, Section 43B(h)',
        url: 'https://cleartax.in/s/section-43bh-of-income-tax-act',
      },
    },
    {
      area: 'Suppliers',
      title: 'No memory of which supplier gave the better rate',
      scene:
        'Three suppliers sell the same grade. The one you buy from is the one who calls first. Last quarter’s better rate lives in someone’s WhatsApp chat.',
      cost:
        'A 1% better buying rate on a ₹5 crore annual purchase is ₹5 lakh. You only get it if you can see the comparison.',
      fix:
        'Each purchase records the supplier, rate, quantity, delay in delivery and quality complaints. A comparison per line shows who was cheapest, who was late, and who sent returns.',
      screen: 'suppliers',
    },
    {
      area: 'People',
      title: 'Salesmen, loaders and the munim each know a part',
      scene:
        'The salesman who handles 40 retailers leaves. His order history, his promises on rates and the dues he was chasing leave with him. The godown helper who knows where things are is on leave.',
      cost:
        'Retailers drift to a competitor’s salesman. The new person starts from nothing, and the owner is back to answering every call.',
      fix:
        'Retailers belong to the business, not to a salesman. Each salesman’s route, orders, collections and targets are visible, and reassigning a route moves the history and the open dues in one step.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'You cannot say which retailers and lines make the money',
      scene:
        'Sales are up, but cash is tight. You do not know whether the cause is slow collection, a low-margin line that is growing, or stock that is heavy.',
      cost:
        'Decisions are made on turnover, which tells you how busy you are, not how well you are doing.',
      fix:
        'Margin per line and per retailer is calculated from the buying rate, the selling rate and the credit days. The morning screen shows dues, stock under water, orders waiting and approvals, so you start from facts.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers behind the problem.',
  factsLede:
    'From published sources, with the source named under each figure. Your own numbers will differ, and the first thing Verity does is show you yours.',
  facts: [
    {
      figure: '₹7.34 lakh crore',
      text: 'was the inflation-adjusted value of delayed payments to micro, small and medium enterprises in India as of March 2024, down from ₹8.27 lakh crore in 2023.',
      source: { name: 'GAME, FISME and C2FO report, via Storyboard18', year: '2025', url: 'https://storyboard18.com/how-it-works/delayed-payments-to-msmes-fall-to-rs-7-34-lakh-crore-report-84822.htm' },
    },
    {
      figure: '15 or 45 days',
      text: 'is the generally allowed payment period to a micro or small supplier: 15 days with no written agreement, and not more than 45 days with one. Beyond it, a buyer’s tax deduction for the bill is generally deferred until it is paid.',
      source: { name: 'ClearTax on Section 43B(h)', url: 'https://cleartax.in/s/section-43bh-of-income-tax-act' },
    },
    {
      figure: '~12 million',
      text: 'kirana stores in India, most of them buying from a wholesaler on short credit, according to a distribution guide from a trade community.',
      source: { name: 'Kirana Club, FMCG distribution guide', year: '2026', url: 'https://kirana.club/resources/fmcg-distribution-india-guide' },
    },
    {
      figure: '₹50,000',
      text: 'is the general value above which goods moving in a consignment need an e-way bill, and the limit for movement inside a state differs by state.',
      source: { name: 'Tally Solutions, e-way bill guide', url: 'https://tallysolutions.com/gst/e-way-bill-under-gst' },
    },
  ],
  factsNote:
    'The kirana count comes from a trade community guide and the e-way bill note from a software vendor. The payment-period and delayed-payment figures are about small suppliers and may not match your own trade. They show the scale, not what your book will show.',

  screensHeading: 'The screens a wholesaler would open every day.',
  screensLede: 'Six views, each for one job, set up in your own terms: retailers, lines, godowns, salesmen and routes.',
  screens: [
    {
      id: 'owner',
      title: 'Wholesale / Today',
      meta: 'All godowns',
      heading: 'The owner’s morning view',
      caption:
        'Dues, stock under water, orders waiting and approvals on one screen. This replaces the call to the munim and the walk around the godown.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Outstanding', value: '₹2.2 Cr', note: '186 retailers' },
            { label: 'Past 60 days', value: '₹38 L', note: '24 retailers' },
            { label: 'Stock under water', value: '₹46 L', note: '38 lines below cost' },
            { label: 'Orders waiting', value: '14', note: '3 held for credit' },
          ],
        },
        { type: 'title', text: 'Salesman collections this week, against target' },
        {
          type: 'bars',
          items: [
            { label: 'Imran', value: 88, display: '88%' },
            { label: 'Sunil', value: 71, display: '71%' },
            { label: 'Deepak', value: 46, display: '46%', tone: 'muted' },
            { label: 'Rafiq', value: 39, display: '39%', tone: 'muted' },
          ],
        },
        {
          type: 'list',
          items: [
            { name: '3 orders held: over credit limit', meta: 'Total ₹4.1 lakh waiting for your tap', tag: ['Decide', 'flag', 'Cleared', 'ok'] },
            { name: 'Rate below floor on 9 invoices', meta: 'Raised by two salesmen this week', tag: ['Review', 'late', 'Reviewed', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'credit',
      title: 'Retailer dues',
      meta: 'Outstanding by age',
      heading: 'Who owes what, how old, and who is chasing it',
      caption:
        'Every retailer with limit, dues by age, pending cheques and the next follow-up. A chase is a task for a named person, and the promise and result are recorded.',
      blocks: [
        {
          type: 'table',
          cols: ['Retailer', 'Limit', 'Owed', 'Oldest bill', 'Next step'],
          rows: [
            ['Sharma General, Karol Bagh', '₹3 L', '₹2.4 L', '41 days', ['Call Imran', 'flag', 'Promised Fri', 'ok']],
            ['Khan Provision, Okhla', '₹2 L', '₹2.3 L', '68 days', ['Hold orders', 'late', 'Paid ₹1 L', 'ok']],
            ['Jain Stores, Sadar', '₹5 L', '₹3.1 L', '22 days', ['Cheque due Mon', 'info']],
            ['Gupta Traders, Shahdara', '₹1.5 L', '₹1.6 L', '75 days', ['Owner call', 'late']],
          ],
        },
        {
          type: 'alert',
          text: 'Cheque from Khan Provision for ₹82,000 bounced on 11 Oct. Two bills reopened. Next order needs approval.',
          action: 'See bills',
        },
      ],
    },
    {
      id: 'rates',
      title: 'Rates and price check',
      meta: 'Slabs and today’s market',
      heading: 'Rate slabs, floors and holding cost against the market',
      caption:
        'Each line with your cost, today’s market rate, the floor for each quantity slab and the lines that are now below cost. Quotes under the floor need an approval.',
      blocks: [
        {
          type: 'table',
          cols: ['Line', 'Our cost', 'Market today', 'Floor (50+)', 'Status'],
          rows: [
            ['Sunflower oil 15 kg tin', '₹2,140', '₹2,090', '₹2,175', ['Below cost', 'late', 'Hold or sell', 'info']],
            ['Basmati rice 25 kg bag', '₹1,820', '₹1,930', '₹1,870', ['Above cost', 'ok']],
            ['Toor dal 30 kg bag', '₹3,050', '₹3,040', '₹3,090', ['Watch', 'flag']],
            ['Sugar 50 kg bag', '₹2,180', '₹2,260', '₹2,215', ['Above cost', 'ok']],
          ],
        },
        { type: 'alert', text: 'Quote of ₹2,140 on sunflower oil for 60 tins is under the floor. Raised by Sunil.', action: 'Approve or revise' },
      ],
    },
    {
      id: 'stock',
      title: 'Godown stock',
      meta: 'Age and cover',
      heading: 'What is in the godown, how old it is, and what to buy',
      caption:
        'Stock by line and bay with the age of each lot, days of cover at the current pace and a suggested purchase list. Slow lines show who last bought them.',
      blocks: [
        {
          type: 'table',
          cols: ['Line', 'In stock', 'Age', 'Cover', 'Action'],
          rows: [
            ['Basmati 25 kg', '420 bags', '12 days', '9 days', ['Order now', 'flag', 'Ordered', 'ok']],
            ['Toor dal 30 kg', '260 bags', '34 days', '21 days', ['OK', 'ok']],
            ['Mustard oil 15 kg', '180 tins', '96 days', '70 days', ['Clearance', 'late', 'Listed', 'info']],
            ['Gram flour 25 kg', '95 bags', '58 days', '45 days', ['Push to 12 buyers', 'flag']],
          ],
        },
        { type: 'alert', text: '₹14 lakh of stock is older than 90 days. 5 lines account for most of it.', action: 'See lines' },
      ],
    },
    {
      id: 'orders',
      title: 'Orders and dispatch',
      meta: 'Today’s board',
      heading: 'Every order from slip to delivery',
      caption:
        'Orders move across the board: received, credit checked, picked, loaded and delivered. The vehicle, driver, lorry receipt and e-way bill sit on the dispatch.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'To pick',
              cards: [
                { title: 'Sharma General, 22 lines', meta: 'Imran · ₹1.1 L', tag: ['Credit hold', 'flag', 'Cleared', 'ok'] },
                { title: 'Jain Stores, 14 lines', meta: 'Sunil · ₹68,400', tag: ['Ready', 'ok'] },
              ],
            },
            {
              name: 'Loaded',
              cards: [
                { title: 'Verma Mart, 9 lines', meta: 'Van 2 · LR 4471', tag: ['No e-way bill', 'late', 'Added', 'ok'] },
                { title: 'Ali Bros, 31 lines', meta: 'Transporter truck · LR 4472', tag: ['On the way', 'info'] },
              ],
            },
            {
              name: 'Delivered',
              cards: [
                { title: 'Rao Kirana, 12 lines', meta: 'Short by 2 cartons', tag: ['Shortage', 'flag', 'Credit note', 'ok'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'suppliers',
      title: 'Suppliers and payments',
      meta: 'Payables by due date',
      heading: 'What you owe, in the order it falls due',
      caption:
        'Supplier bills sorted by due date with a flag for small suppliers who must be paid within the allowed days, and a rate comparison across suppliers for each line.',
      blocks: [
        {
          type: 'table',
          cols: ['Supplier', 'Bill', 'Due', 'Amount', 'Status'],
          rows: [
            ['Shree Agro Mills', '#5521', '20 Oct', '₹4.2 L', ['Small supplier, 38 days', 'late', 'Paid', 'ok']],
            ['Balaji Oil Refinery', '#7710', '26 Oct', '₹8.6 L', ['Due in 11 days', 'flag']],
            ['Kisan Rice Co', '#3098', '2 Nov', '₹5.9 L', ['Due in 18 days', 'info']],
          ],
        },
        { type: 'title', text: 'Basmati 25 kg, supplier comparison, last 3 buys' },
        {
          type: 'bars',
          items: [
            { label: 'Kisan Rice Co, ₹1,810', value: 100, display: 'Best rate' },
            { label: 'Shree Agro, ₹1,835', value: 72, display: '+₹25' },
            { label: 'Balaji, ₹1,860, 3 days late', value: 40, display: '+₹50', tone: 'muted' },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Monday at the godown, before and after.',
  dayLede: 'The work is the same. What changes is that every order, rate and payment leaves a record, and the record does the chasing.',
  day: [
    {
      time: '8:30',
      before: 'You open the shop and ask the munim for yesterday’s dues. He needs an hour to total them.',
      after: 'Outstanding by retailer and age is on the Today screen. The three oldest are already assigned.',
    },
    {
      time: '10:30',
      before: 'A retailer 70 days behind places a big order. The salesman agrees on the phone.',
      after: 'The order is held for credit. You see the dues and the oldest bill, and approve half.',
    },
    {
      time: '12:00',
      before: 'Mustard oil has been in the godown since June. You only see it on the stock count.',
      after: 'It shows as aged 96 days. The list of retailers who bought it last is ready for a clearance push.',
    },
    {
      time: '3:00',
      before: 'The van returns. A retailer says two cartons were short and the clerk argues.',
      after: 'The picklist, the loaded count and the delivery note are on the order. The shortage is settled in a minute.',
    },
    {
      time: '5:30',
      before: 'A post-dated cheque you deposited last week turns out to have bounced.',
      after: 'The bounce is already on the retailer’s record and his next order is waiting for your approval.',
    },
    {
      time: 'Month end',
      before: 'The supplier list is checked against the ledger and one small supplier is found 70 days overdue.',
      after: 'Payables were sorted by due date all month. Small suppliers were paid inside the limit.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks, around your godown and your retailers.',
    lede:
      'You do not get a login and a thick manual. We learn how your trade runs, build Verity around it, move your retailers, lines and dues in, then stay on until it holds.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend time at the counter, the godown and the collection desk. Follow one order from phone call to payment, and note where rates, credit and stock are decided today.',
        you: 'Two to three hours of your time, and the munim’s. Your ledger, price list, stock register and a sample of order slips.',
        get: 'A written map of your trade: retailer groups and routes, rate slabs, godowns, suppliers, and the leaks we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your lines, units, rate slabs and floors, credit limits and periods, approval rules, godowns and salesman routes. Build the screens above in your words.',
        you: 'Check the rules with your senior people. Tell us where a slab or a limit is wrong.',
        get: 'A working Verity holding your rate card, limits, routes and approvals, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in retailer and supplier lists, opening dues by bill, stock by lot, and open orders from your ledger and sheets. Train the counter, salesmen and godown on live orders.',
        you: 'Your ledger export or sheets, in whatever shape they exist. One hour with each role.',
        get: 'Your retailers, dues and stock inside Verity, and a team that has taken real orders on it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first month’s dues and stock ageing with you, tune slabs and limits, and add lines and routes as you grow.',
        you: 'A short monthly review of dues, ageing and margin by line.',
        get: 'A system that keeps matching how you trade, with someone responsible for keeping it right.',
      },
    ],
    bring: [
      'Your ledger of retailers with opening dues by bill',
      'Your rate list and any quantity slabs',
      'Your stock register by godown, with buying rates',
      'Supplier list with terms and open bills',
      'Salesman routes and the retailers on each',
      'Your current credit rules, even if only spoken',
    ],
    time: 'About 9 to 12 hours of your own time across the four weeks, mostly in week 1. The munim and the godown in-charge need a few more.',
    after: 'Nobody extra is hired. Orders and receipts are recorded as part of the work already done, and the reports are built from them.',
  },

  ai: {
    heading: 'Ask the business a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own retailer, order, stock and supplier records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which retailers are over 60 days and still buying?',
        a: '24 retailers owe ₹38 lakh past 60 days. 9 of them placed orders in the last 10 days.',
        rows: [['Imran’s routes', '9 retailers, ₹14 L'], ['Sunil’s routes', '8 retailers, ₹12 L'], ['Deepak’s routes', '5 retailers, ₹8 L'], ['Rafiq’s routes', '2 retailers, ₹4 L']],
        action: 'Create hold-and-collect tasks for each salesman',
      },
      {
        q: 'Which lines are now below what we paid for them?',
        a: '38 lines have a market rate under holding cost, a gap of ₹46 lakh. Sunflower oil and mustard oil are the largest.',
        rows: [['Sunflower oil tins', '₹11.4 L'], ['Mustard oil tins', '₹9.8 L'], ['Gram flour bags', '₹3.2 L']],
      },
      {
        q: 'What should I buy this week so Friday is not empty?',
        a: 'Basmati 25 kg runs out in 9 days and the supplier needs 7. Order 300 bags today. Toor dal and sugar are fine for the month.',
        action: 'Draft purchase orders for approval',
      },
    ],
  },

  automationHeading: 'The follow-ups that fall through between the counter and the godown.',
  automationLede: 'Set once, then they run from your records. People still make the calls and move the goods. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An order would push a retailer over limit or period',
      then: ['Held before picking starts', 'Routed to you with dues and oldest bill', 'Decision recorded on the order'],
    },
    {
      when: 'A bill reaches 7 days past due',
      then: ['Added to the collection list for that route', 'Task to the salesman with last promise date', 'Result recorded: paid, promised or disputed'],
    },
    {
      when: 'A cheque is dated within 3 days',
      then: ['Listed for deposit', 'Bills it settles shown beside it', 'On a bounce, bills reopen and the buyer is marked'],
    },
    {
      when: 'A quote goes below the slab floor',
      then: ['Quote waits for approval', 'Approver sees cost, floor and buyer history', 'Approved rate stays on the invoice record'],
    },
    {
      when: 'Stock in a line ages past your limit',
      then: ['Line added to the clearance list', 'Last buyers listed for a call', 'Written down or sold, with the result recorded'],
    },
    {
      when: 'A supplier bill is within 5 days of its due date',
      then: ['Appears at the top of payables', 'Small-supplier flag shown', 'Payment task to accounts with the amount'],
    },
  ],

  rules: {
    heading: 'The rules a wholesale business has to keep up with.',
    lede:
      'Verity does not give tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant works from clean data.',
    items: [
      {
        name: 'E-way bill for movement of goods',
        what: 'Goods moved in a consignment above ₹50,000 generally need an e-way bill generated before the move, and the intra-state limit differs by state. Validity runs by distance.',
        how: 'The dispatch record holds the vehicle, transporter, lorry receipt and e-way bill number, and a loaded order without one is flagged before it leaves.',
        source: { name: 'Tally Solutions, e-way bill guide', url: 'https://tallysolutions.com/gst/e-way-bill-under-gst' },
      },
      {
        name: 'Payment to micro and small suppliers',
        what: 'Under the MSMED Act, payment generally must be made within 15 days with no written agreement, or the agreed term, not above 45 days. Section 43B(h) of the Income-tax Act ties the tax deduction to actual payment when a bill is paid late.',
        how: 'Supplier bills carry a due date and a flag for small suppliers, and payables are sorted so the right bills are paid first.',
        source: { name: 'ClearTax on Section 43B(h)', url: 'https://cleartax.in/s/section-43bh-of-income-tax-act' },
      },
      {
        name: 'GST invoice and e-invoice reporting',
        what: 'Businesses above a turnover threshold, generally ₹5 crore, must create e-invoices, and larger taxpayers must report them within a set number of days. The thresholds have changed more than once.',
        how: 'Orders and invoices are recorded against the retailer with GSTIN, HSN and tax split, so your accountant or billing software can work from complete data.',
      },
      {
        name: 'Food licence for food wholesalers',
        what: 'If you trade in food items, a registration or a state or central licence under the food safety rules generally applies, depending on turnover and whether you sell across states.',
        how: 'Your licence number and renewal date are kept on the business record, and a reminder task is raised before it falls due.',
      },
    ],
    note: 'Rules and thresholds change and differ by state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A salesman should not see another route’s margins. A godown helper should not see supplier rates. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Where is my money and what is it earning?', sees: 'Dues by age, stock under water, margin by line and retailer, supplier payments due, and approvals waiting.' },
    { role: 'Salesman', question: 'Whom do I visit and what do they owe?', sees: 'His own retailers, their dues and limits, rate slabs he can quote, and his orders and collections.' },
    { role: 'Counter and accounts', question: 'What is pending today?', sees: 'Orders to enter, bills to raise, cheques to deposit, and supplier bills falling due.' },
    { role: 'Godown in-charge', question: 'What do I pick and what is short?', sees: 'Picklists, stock by bay and age, incoming goods to check, and returns to receive.' },
    { role: 'Accountant', question: 'What has been sold, received and owed?', sees: 'Invoices with tax split, receipts by mode, supplier bills, and cheque status.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your accounting software or Tally. We agree how data reaches Verity during setup.',
      'Your transporters and your e-way bill portal login. The numbers are recorded in Verity.',
      'WhatsApp for talking to retailers. Staff send the messages; Verity tells them who and when.',
      'Your accountant and CA, who still prepare your returns.',
    ],
    not: [
      'Run your billing counter or print your invoices.',
      'Take orders from retailers online.',
      'Send reminders to retailers on its own.',
      'File your GST returns or give tax advice.',
    ],
    migration:
      'We bring retailers, suppliers, opening dues by bill, stock by lot and open orders across from your ledger and sheets, in stages, so the shop keeps trading while it happens.',
  },

  faqHeading: 'Questions wholesalers ask.',
  faqs: [
    [
      'My salesmen and munim are not used to computers. Will it work?',
      'The screens use your words: retailer, line, bill, godown. Entry is built to be short, and we train at the counter and the godown with real orders. Salesmen also get something back, which is their own dues and collections list, so they have a reason to use it.',
    ],
    [
      'Does Verity replace Tally or my billing software?',
      'No. Your accounting software keeps doing the books and the bills. Verity holds the orders, dues, stock ageing and rates around it, and we agree during setup how the data reaches Verity.',
    ],
    [
      'Can it chase retailers for money?',
      'It does not message them by itself. It builds the collection list, gives each late bill to a named person, and records the promise and the result. Your people make the call or send the message.',
    ],
    [
      'I have three godowns and a shop. Can I see them together?',
      'Yes. Each godown is a location in one system. Stock, ageing and dispatches roll up for you, and a transfer between godowns is recorded so stock does not appear or vanish.',
    ],
    [
      'Can I set different rates for different retailers?',
      'Yes. Slabs can differ by quantity, retailer group or an agreed special rate, each with a floor. Anything under the floor waits for approval, and the approved rate is kept on the record.',
    ],
    [
      'Does it track daily market rates for me?',
      'No. Someone on your team enters the day’s market rate for the lines you care about, which takes a few minutes. Verity then compares it with your holding cost and flags the lines that are under water.',
    ],
    [
      'Who can see my dues and my margins?',
      'Only the people you allow. Salesmen see their own routes, the godown sees picks and stock but not buying rates, and you see everything. Each change is recorded with who made it and when.',
    ],
    [
      'How long before I see anything useful?',
      'The dues-by-age list and stock ageing need only your ledger and stock register, so we aim to have them working first. Margin by retailer and line becomes reliable after a month or two of recorded orders.',
    ],
    [
      'What does it cost?',
      'It depends on the number of godowns, users and what you want set up. Message us and after a short conversation about how you trade, we will give you a clear number.',
    ],
  ],

  related: ['distributors', 'industrial-suppliers', 'importers', 'exporters', 'supermarkets', 'hardware-stores'],

  ctaHeading: 'Start with the retailers who owe you the most.',
  ctaLede:
    'Tell us how you trade and we will show you the aged dues, the stock under water and the supplier bills coming up, using your own numbers.',
};
