export default {
  schema: 2,
  slug: 'convenience-stores',
  status: 'published',
  plural: 'convenience stores',
  subject: 'convenience store',
  checked: '15 October 2026',

  seo: {
    title: 'Convenience store software: night shifts, fresh stock | Verity',
    description:
      'The 14 problems that squeeze a convenience store open late, what each costs, and the Verity screens that fix them: night cash, fresh wastage, vans, chillers and shift gaps.',
    keywords: [
      'convenience store management software India',
      '24x7 store shift and cash control',
      'convenience store fresh food wastage',
      'cigarette and high value item stock count',
      'convenience store chiller maintenance tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'workforce', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for convenience stores',
    headline: 'The store is open at 2 am. Who is watching the stock, the cash and the chiller?',
    lede:
      'A convenience store sells small baskets, all day and often all night, from a small space with a few staff. The costs do not sleep: light, cooling, a night shift, a bread van at dawn. Verity records what comes in, what goes out and who was on duty, so the owner is not the only one who knows.',
    oneLine:
      'One system for your shifts, your fresh stock, your vans, your high-value items and your equipment, store by store.',
    note: 'Built for a store with one or two people on shift. Entries are a few taps at the moment the thing happens.',
    screen: 'owner',
    screenNote: 'shifts, suppliers, chillers and stores',
  },

  today: {
    heading: 'A convenience store makes money in small sums and loses it the same way.',
    paragraphs: [
      'A basket is small: a cold drink, a packet of biscuits, a bread. The margin on each is a few rupees, so the loss of a single carton, a spoiled tray of sandwiches or a chiller that stopped overnight can wipe out a day’s profit. And because the store is open for long hours, the owner cannot be there.',
      'The people who know are on shift: the night attendant who saw the chiller warm up, the morning person who counted cigarettes and found a gap, the van driver who left one crate short. That knowledge has to reach the owner in a form that can be acted on.',
      'The format is hard to run. An industry account from 2008 said that convenience formats then spent about 30 percent more on rent, energy and overheads than the kirana next door, and wastage in the chain was high. The shops that do well keep a close watch on every small number.',
    ],
    stack: ['Billing machine at the counter', 'Supplier bills and van slips', 'Shift register or WhatsApp group', 'Excel stock sheet', 'Calls to the owner at night'],
    stackNote: 'Each is fine for its job. The owner is the only thing that connects them, and the owner cannot be there at 2 am.',
  },

  painsHeading: 'Where a convenience store actually loses money.',
  painsLede:
    'These are the situations owners and store managers describe. For each one: what it looks like, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Fresh',
      title: 'Sandwiches, milk and bread expire before they sell',
      scene:
        'The morning bread van leaves 40 loaves. By evening 14 are left. The evening shift does not know whether to mark them down or bin them, and nobody told the supplier the order was too big.',
      cost:
        'Example arithmetic: ₹1,200 of fresh stock binned a day is about ₹4.4 lakh a year. It is a cost that the day’s sales number never shows.',
      fix:
        'Fresh lines have a shelf life recorded at receiving. Verity lists what is close to expiry by time of day, and records the outcome: marked down, sold, binned or returned, with a reason. The pattern shows what to order less of.',
      screen: 'fresh',
    },
    {
      area: 'Fresh',
      title: 'Hot food, coffee and ready-to-eat counters waste ingredients',
      scene:
        'A coffee machine, a hot snack counter and a sandwich fridge. Ingredients are used and thrown away without being counted. A new person pours generously.',
      cost:
        'These lines look high-margin but quietly lose it to waste and over-portioning.',
      fix:
        'Ingredients are recorded as stock, and each product has a standard quantity. Verity compares what sales say should have been used with what stock says was used, by shift.',
      screen: 'fresh',
    },
    {
      area: 'Stock',
      title: 'Cigarettes, phone cards and other small high-value items go missing',
      scene:
        'A pack of cigarettes is worth more than a bag of rice. They sit behind the counter, are counted rarely, and leave in twos and threes. By the end of the week, 40 packs are unexplained.',
      cost:
        'Shrinkage in Indian retail is reported at 0.4 percent of sales for Trent in FY24, and the Retailers Association of India calls up to 0.5 percent manageable. In a small-basket store, a few high-value lines can push the figure well above that.',
      fix:
        'High-value items are counted at every shift change by the outgoing and incoming person. Verity compares the count with the book and lists the gap with the name of the shift.',
      screen: 'counts',
      source: {
        name: 'Economic Times piece reprinted by Third Eyesight, June 2024',
        url: 'https://www.thirdeyesight.in/?p=6499',
      },
    },
    {
      area: 'Stock',
      title: 'Age-restricted products need a record you can show',
      scene:
        'A school student asks for a pack of cigarettes. A new staff member does not know the rule. The warning sign at the counter was removed when the shelf was rearranged.',
      cost:
        'Selling tobacco to anyone under 18, or within 100 yards of an educational institution, is prohibited under COTPA 2003. Fines and notices follow. In some districts, shop registrations have been put at risk.',
      fix:
        'The required signs and the staff briefing are tasks with a due date and a tick. A new staff member’s briefing is recorded against their name before they take a shift alone.',
      screen: 'shifts',
      source: {
        name: 'COTPA 2003, Section 6, Bombay Chamber of Commerce copy of the Act',
        url: 'https://bombaychamber.com/wp-content/uploads/2022/06/Indian-Tobacco-Control-Act-Cotpa-2003.pdf',
      },
    },
    {
      area: 'Stock',
      title: 'Chillers and freezers fail at night and nobody knows until morning',
      scene:
        'The cold drinks chiller stopped at midnight. By 6 am the milk has warmed and the ice cream has melted. The service engineer has no history of the last three faults.',
      cost:
        'A night’s dairy, ice cream and drinks lost, plus lost sales while the chiller is down, plus a costly emergency call-out.',
      fix:
        'Each chiller is an asset with a service history and a daily temperature check. A reading out of range alerts the owner or manager with the items affected and opens a service task with the engineer.',
      screen: 'equipment',
    },
    {
      area: 'Suppliers',
      title: 'Vans deliver bread, dairy and drinks and nobody counts at the door',
      scene:
        'The van driver unloads five crates and says six on the slip. The night attendant is alone, serving a customer. By morning the crates are mixed and the shortage is lost.',
      cost:
        'You pay for what you did not receive, and the credit for returned crates is never claimed.',
      fix:
        'Each delivery is received against the supplier’s slip with the counted quantity and the crates returned. Verity compares them and opens a credit task for any shortage, with the date and shift recorded.',
      screen: 'suppliers',
    },
    {
      area: 'Suppliers',
      title: 'Stock-outs on fast movers, and a back room full of slow ones',
      scene:
        'Energy drinks sell out on Friday nights. The reorder was based on last week’s feel. Meanwhile a box of imported snacks is still unopened after six months.',
      cost:
        'Missed sales on the items that bring people in, and cash tied up in the ones that do not.',
      fix:
        'Each item has a reorder level based on how fast it sells, by day of the week. Verity lists what is likely to run out before the next delivery, and what has not moved in 90 days.',
      screen: 'suppliers',
    },
    {
      area: 'People',
      title: 'Night and weekend shifts are hard to staff and easy to miss',
      scene:
        'The night attendant calls in sick at 9 pm. The manager has to decide between closing, covering himself or calling someone in. There is no list of who can cover.',
      cost:
        'Lost sales for hours, overtime at short notice, or an unsafe lone-working situation for the person on shift.',
      fix:
        'The roster, availability and attendance sit in one place. When someone cannot make a shift, Verity shows who is free and who has the hours to cover, and records the change.',
      screen: 'shifts',
    },
    {
      area: 'People',
      title: 'Rules for night work and women on shift are different in each state',
      scene:
        'Your store is open at night. You have a woman on the evening shift. You are not sure what the state permits, what transport you owe her, or whether you need her written consent.',
      cost:
        'A notice or a penalty, and more seriously, a safety gap for someone on your team. Maharashtra, for example, allows shops to open 24x7 but sets conditions for women after about 9:30 pm, such as consent and transport.',
      fix:
        'Each person’s consent, shift pattern and transport arrangement are recorded. Verity flags a rostered shift that does not meet the rule you have set for your state.',
      screen: 'shifts',
      source: {
        name: 'People Matters, on the Maharashtra notification for 24x7 shops, 2017',
        url: 'https://www.peoplematters.in/news/diversity-equity-inclusion/maharashtra-government-open-to-women-working-night-shifts-17118',
      },
    },
    {
      area: 'Money',
      title: 'Cash builds up in the drawer overnight and does not tie to sales',
      scene:
        'Cash comes in through the night. The drawer holds ₹40,000 at 4 am. Nobody has done a cash drop, and the morning count is ₹600 off.',
      cost:
        'Risk of theft, and an unexplained gap you cannot assign to a shift.',
      fix:
        'Cash drops and handovers are recorded at each shift change, with both people named. Sales and collections are compared by mode at each handover, so a gap points to a shift.',
      screen: 'counts',
    },
    {
      area: 'Money',
      title: 'Utility bills and rent eat the margin and are only seen monthly',
      scene:
        'A 24-hour store runs lights, air conditioning, chillers and a generator. The electricity bill arrives monthly, and nobody notices when it rises.',
      cost:
        'Energy and rent are the fixed costs that decide whether a long-hours store makes money. A rise of ₹15,000 a month is ₹1.8 lakh a year.',
      fix:
        'Bills and meter readings are recorded each month against the store. Verity shows cost per day against sales per day and flags a rise beyond what sales explain.',
      screen: 'owner',
    },
    {
      area: 'Customers',
      title: 'Quick commerce takes the late-night basket',
      scene:
        'The late-night snack run and the midnight milk are exactly what a dark-store app delivers in ten minutes. You see fewer regulars in the evening, and no list of who they were.',
      cost:
        'Savills India counted about 2,525 dark stores as of October 2025, and expects about 7,500 by 2030. Each is aimed at the same quick, small basket.',
      fix:
        'Regular customers are recorded by phone number against their usual basket and hour. Verity shows who has stopped coming and what they used to buy, so staff can follow up or adjust the range.',
      screen: 'owner',
      source: {
        name: 'Savills India, via Storyboard18, December 2025',
        url: 'https://www.storyboard18.com/amp/how-it-works/7500-dark-stores-100-cities-quick-commerce-fuels-a-new-urban-asset-class-86404.htm',
      },
    },
    {
      area: 'Compliance',
      title: 'Food licences, weights and prices must be right on every shelf',
      scene:
        'Your FSSAI registration, the MRP on new lots, and any scale you use for loose items each have their own rules and dates, and none is on a calendar.',
      cost:
        'Packaged goods must not be sold above the printed MRP. FSSAI registration bands changed from 1 April 2026, so your category may be different. Penalties differ by state.',
      fix:
        'Each registration and stamp is recorded with its due date. A new lot with a different MRP is flagged so the shelf tag and the billing price are corrected.',
      screen: 'fresh',
      source: {
        name: 'Mondaq, FSSAI raises turnover limits, 2026',
        url: 'https://www.mondaq.com/india/food-and-drugs-law/1801924/fssai-raises-turnover-limits-for-food-business-registration-and-licensing',
      },
    },
    {
      area: 'Owner',
      title: 'Several stores, a few people each, no one watching all of them',
      scene:
        'Five stores, each with two or three people. One is losing stock. Another has the highest energy cost. You hear about it when the month’s numbers come in.',
      cost:
        'Problems that cost a little each day compound for weeks before they are seen.',
      fix:
        'Each store is a location. Sales, wastage, high-value item gaps, energy cost and shift coverage are compared side by side, and the stores that stand out are listed first.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede:
    'From published sources, with the source named under each figure. Some are old, and the year is shown. Showing you your own numbers is the first thing Verity does.',
  facts: [
    {
      figure: '30%',
      text: 'more spent on rent, energy and overheads by Indian convenience formats than by kirana stores, according to an industry official quoted in 2008, with high wastage in the supply chain.',
      source: {
        name: 'Fruitnet, citing The Economic Times',
        year: '2008',
        url: 'https://fruitnet.com/asiafruit/traditional-retailers-rebuff-big-chains/1418.article',
      },
    },
    {
      figure: '2,525',
      text: 'dark stores were running across more than 100 Indian cities as of October 2025, with about 7,500 expected by 2030.',
      source: {
        name: 'Savills India, via Storyboard18',
        year: '2025',
        url: 'https://www.storyboard18.com/amp/how-it-works/7500-dark-stores-100-cities-quick-commerce-fuels-a-new-urban-asset-class-86404.htm',
      },
    },
    {
      figure: '0.41%',
      text: 'of sales lost to shrinkage at Trent in FY24, up from 0.22%. The Retailers Association of India has said up to 0.5% is manageable.',
      source: {
        name: 'Economic Times piece reprinted by Third Eyesight',
        year: '2024',
        url: 'https://www.thirdeyesight.in/?p=6499',
      },
    },
    {
      figure: '10 or more',
      text: 'workers is the size at which an establishment could operate year-round with flexible hours, under the Model Shops and Establishments Bill, once a state adopts it.',
      source: {
        name: 'Images Retail, on the Union cabinet approval',
        year: '2016',
        url: 'https://www.imagesretailme.com/commercial-establishments-may-remain-open-24x7-in-india/',
      },
    },
  ],
  factsNote:
    'The cost figure is from 2008 and is an official’s remark, not a survey. The shrinkage figure is for a large clothing retailer, not a convenience store. The model bill is a template that each state adopts differently. They show the scale, not what your store will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your store’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Stores / Today',
      meta: 'All stores',
      heading: 'The owner’s morning view, for every store',
      caption:
        'Sales, wastage, energy cost, high-value gaps and shift cover for each store, with the ones that need you listed first. It replaces the night-time phone calls.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales yesterday', value: '₹3.1 lakh', note: '5 stores' },
            { label: 'Fresh binned', value: '₹7,400', note: '2.4% of sales' },
            { label: 'High-value gaps', value: '3', note: 'items, 2 stores' },
            { label: 'Open shift gaps', value: '2', note: 'tonight' },
          ],
        },
        {
          type: 'table',
          cols: ['Store', 'Sales', 'Fresh binned', 'Energy / day', 'Status'],
          rows: [
            ['Andheri East', '₹82,400', '1.6%', '₹1,150', ['OK', 'ok']],
            ['Powai', '₹71,900', '3.8%', '₹1,320', ['Check fresh', 'flag', 'Order cut', 'ok']],
            ['Thane', '₹58,200', '2.1%', '₹1,880', ['Energy high', 'late']],
            ['Vashi', '₹54,100', '2.0%', '₹1,210', ['OK', 'ok']],
          ],
        },
        { type: 'alert', text: 'Thane energy cost is 40% above the other stores. Chiller 2 has been running warm since Monday.', action: 'Open service task' },
      ],
    },
    {
      id: 'fresh',
      title: 'Fresh and expiry',
      meta: 'Powai',
      heading: 'What is going off, and what the counter is using',
      caption:
        'Short-life items by hour of expiry, the action taken on each, and a comparison of ingredients used against ingredients sold for the coffee and snack counters.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Qty', 'Expires', 'Action', 'Result'],
          rows: [
            ['Sandwich, veg club', '8', 'Today 9 pm', 'Mark down 30%', ['Open', 'flag', 'Sold 6', 'ok']],
            ['Bread loaf', '14', 'Tomorrow', 'Keep', ['OK', 'ok']],
            ['Milk 500 ml', '22', 'In 2 days', 'Front shelf', ['Open', 'flag', 'Moved', 'ok']],
            ['Samosa tray', '12', 'Today 6 pm', 'Bin at 6 pm', ['Binned', 'late']],
            ['Curd cup', '30', 'In 4 days', 'Keep', ['OK', 'ok']],
          ],
        },
        { type: 'alert', text: 'Coffee beans used are 12% above what cups sold would use this week. Powai, evening shift.', action: 'See detail' },
      ],
    },
    {
      id: 'suppliers',
      title: 'Vans and suppliers',
      meta: 'Deliveries this week',
      heading: 'What each van brought and what you need',
      caption:
        'Deliveries counted at the door against the supplier slip, crates returned, and items likely to run out before the next van.',
      blocks: [
        {
          type: 'table',
          cols: ['Supplier', 'Slip', 'Counted', 'Crates back', 'Status'],
          rows: [
            ['Modern Bakery', '6', '5', '4 of 4', ['Short 1', 'late', 'Credit note', 'ok']],
            ['Gokul Dairy', '40', '40', 'n/a', ['Matched', 'ok']],
            ['Cold Drinks Agency', '24', '24', '24 of 24', ['Matched', 'ok']],
            ['Snack Distributor', '18', '16', 'n/a', ['Short 2', 'late']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Energy drink 250 ml, Friday night', meta: 'Stock 24, sells about 70 by Saturday morning', tag: ['Order', 'flag', 'Ordered', 'ok'] },
            { name: 'Imported snack box, no sale in 190 days', meta: '₹6,800 at cost', tag: ['Decide', 'muted', 'Return', 'info'] },
          ],
        },
      ],
    },
    {
      id: 'shifts',
      title: 'Shifts and cover',
      meta: 'This week, all stores',
      heading: 'Who is on, who can cover, and what has been signed off',
      caption:
        'The roster by store and hour, free staff who can cover a gap, and the briefings and consents that must be on file before a shift.',
      blocks: [
        {
          type: 'table',
          cols: ['Store', 'Shift', 'Person', 'Briefing', 'Status'],
          rows: [
            ['Andheri East', 'Night 10 pm to 6 am', 'Karan', 'Done', ['Covered', 'ok']],
            ['Powai', 'Night 10 pm to 6 am', 'Open', 'n/a', ['Gap', 'late', 'Rahul covers', 'ok']],
            ['Thane', 'Evening 2 pm to 10 pm', 'Sneha', 'Age rule due', ['Briefing due', 'flag', 'Done', 'ok']],
            ['Vashi', 'Night 10 pm to 6 am', 'Imran', 'Done', ['Covered', 'ok']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'No-tobacco-to-minors sign at counter, Thane', meta: 'Checked 9 Oct, Vikram', done: true },
            { text: 'Written consent for night work on file, new hire', meta: 'Due before first night shift', done: false },
            { text: 'Transport arranged after 9:30 pm', meta: 'Evening staff, all stores', done: true },
          ],
        },
      ],
    },
    {
      id: 'counts',
      title: 'Counts and cash',
      meta: 'Shift handover',
      heading: 'Every handover counted, with both names on it',
      caption:
        'High-value items and cash counted at each shift change by the outgoing and incoming person, and compared with the book. A gap points to a shift, not to a month.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Book', 'Counted', 'Gap', 'Shift'],
          rows: [
            ['Cigarette packs', '212', '204', '-8', ['Night, Karan', 'late', 'Explained', 'ok']],
            ['Recharge vouchers', '60', '60', '0', 'Evening'],
            ['Cash in drawer', '₹18,400', '₹17,800', '-₹600', ['Night, Karan', 'flag']],
            ['Phone chargers', '14', '14', '0', 'Evening'],
          ],
        },
        { type: 'alert', text: 'Cigarettes short on 3 of the last 5 night shifts at Andheri East. Same two names on the count.', action: 'Review' },
      ],
    },
    {
      id: 'equipment',
      title: 'Chillers and equipment',
      meta: 'All stores',
      heading: 'Each chiller, its temperature and its history',
      caption:
        'Daily readings, service history and open faults for chillers, freezers and the coffee machine. A bad reading tells you what is at risk and who is fixing it.',
      blocks: [
        {
          type: 'table',
          cols: ['Asset', 'Store', 'Reading', 'Last service', 'Status'],
          rows: [
            ['Drinks chiller 2', 'Thane', '9°C', 'Jan', ['Warm', 'late', 'Engineer booked', 'info']],
            ['Dairy chiller 1', 'Powai', '4°C', 'Aug', ['OK', 'ok']],
            ['Ice cream freezer', 'Andheri East', '-16°C', 'Jun', ['OK', 'ok']],
            ['Coffee machine', 'Vashi', 'n/a', 'Sep', ['Descale due', 'flag', 'Done', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Thane drinks chiller 2: items at risk', meta: '36 cans, 12 milk packs. Move to chiller 1.', tag: ['Move', 'flag', 'Moved', 'ok']},
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same night shift, before and after.',
  dayLede: 'The job in the store does not change. What changes is that the owner finds out at the time, not the next day.',
  day: [
    {
      time: '6 am',
      before: 'The bread van drops six crates. The slip says six, five are in the store. Nobody counts.',
      after: 'The count is entered at the door. The short crate is flagged and a credit note is queued.',
    },
    {
      time: '1 pm',
      before: 'The manager is guessing how much fresh stock to put out.',
      after: 'The screen shows what sold at this hour last week and what is close to expiry. Marks down are set.',
    },
    {
      time: '6 pm',
      before: 'A new hire starts a night shift and has not been told about the age rule for cigarettes.',
      after: 'The briefing task shows as undone, and the manager completes it before the shift starts.',
    },
    {
      time: '10 pm',
      before: 'The outgoing person says all is fine. Eight packs of cigarettes are gone by morning.',
      after: 'Both names are on the handover count. The eight-pack gap is on record at 10 pm.',
    },
    {
      time: '2 am',
      before: 'The drinks chiller is warm. The attendant notices at 6 am.',
      after: 'The 2 am reading is out of range. The owner and the engineer are alerted, and stock is moved.',
    },
    {
      time: 'Month end',
      before: 'The electricity bill arrives higher. No one knows why.',
      after: 'The rise is already visible against sales, with one chiller as the cause and a service on the history.',
    },
  ],

  approach: {
    heading: 'We set it up with you in four weeks, across your shifts.',
    lede:
      'We watch how your store runs by day and by night, set Verity up around your shifts, bring your item and supplier lists across, and stay on while it settles.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Visit a store on a morning shift and a night shift. Follow a van delivery, a handover and a chiller check, and map where every number is kept today.',
        you: 'Two to three hours of your time and your manager’s. Access to billing reports, supplier slips and the shift register.',
        get: 'A written map of your stores: shifts, suppliers and vans, fresh lines, equipment, high-value items and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your stores, shifts, item shelf lives, reorder levels, high-value item lists, assets and alert limits, and build the screens above in your terms.',
        you: 'Check the setup with one manager from each shift pattern. Tell us where a rule is wrong.',
        get: 'A working Verity with your real shifts, items and equipment, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your item lists, supplier details, opening stock, asset lists and staff roster. Train each shift at the counter, including the night shift, in short sessions.',
        you: 'Your lists in any form. About 45 minutes with each shift.',
        get: 'Your stores, shifts and assets inside Verity, and every shift trained on a real handover.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first month of wastage and handover counts with you, tune the alert limits and add stores as you grow.',
        you: 'A short monthly review of the numbers with the owner.',
        get: 'A system that keeps matching the stores, with someone responsible for it.',
      },
    ],
    bring: [
      'Your item list with buying and selling prices',
      'Supplier and van schedule for each store',
      'Your shift pattern, staff list and their contact numbers',
      'A list of chillers, freezers and machines with service contacts',
      'Your list of high-value items you want counted at handover',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks. Each store manager needs a few more, and each shift about an hour.',
    after: 'Nobody is hired to run Verity. Receipts, counts and handovers are recorded as part of the shift work, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your stores a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own stock, shift, supplier and equipment records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which store is binning the most fresh food this week?',
        a: 'Powai, at 3.8% of sales, nearly twice the average. Most of it is sandwiches and samosas after 6 pm.',
        rows: [['Powai', '3.8%'], ['Thane', '2.1%'], ['Vashi', '2.0%'], ['Andheri East', '1.6%']],
        action: 'Create a task to cut the Powai evening order',
      },
      {
        q: 'On which shifts do cigarette counts not match?',
        a: 'Andheri East night shifts, 3 of the last 5, with a total gap of 19 packs. The same two names are on the counts.',
        action: 'Create a review task for the area manager',
      },
      {
        q: 'Which chillers have been warm more than twice this month?',
        a: 'Drinks chiller 2 at Thane, three times, and the Vashi dairy chiller, twice. Both are overdue for service.',
        rows: [['Thane, drinks chiller 2', '3 times'], ['Vashi, dairy chiller', '2 times']],
      },
    ],
  },

  automationHeading: 'The checks nobody has time to remember at 2 am.',
  automationLede:
    'Set once, then they run from your records. Staff still do the work. Verity makes sure the right person knows, and that the result is written down.',
  automations: [
    {
      when: 'A shift ends',
      then: ['Handover count of high-value items and cash requested', 'Both people named on the record', 'Gaps flagged to the manager'],
    },
    {
      when: 'A chiller reading is outside its range',
      then: ['Alert to the manager and the owner', 'Items at risk listed', 'Service task opened with the engineer'],
    },
    {
      when: 'A fresh item is within 6 hours of expiry',
      then: ['Listed on the shift screen', 'Mark down or move task', 'Outcome recorded: sold, binned or returned'],
    },
    {
      when: 'A van delivery is counted',
      then: ['Compared with the supplier slip', 'Difference flagged', 'Credit note task opened for shortages'],
    },
    {
      when: 'A new person joins a store',
      then: ['Briefing and age-rule tasks created', 'Night-work consent requested if needed', 'First solo shift allowed once done'],
    },
    {
      when: 'A shift is left without cover',
      then: ['Free staff who can cover listed', 'Manager asked to confirm one', 'Roster updated and recorded'],
    },
  ],

  rules: {
    heading: 'The rules a convenience store has to keep up with.',
    lede:
      'Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order, so you can show them when asked.',
    items: [
      {
        name: 'Tobacco sales rules (COTPA 2003)',
        what: 'The Act generally prohibits selling tobacco products to anyone under 18, and within 100 yards of an educational institution, and requires a warning notice at the counter. Check current penalties and any state rules.',
        how: 'The signs and the staff briefing are tasks with dates and ticks, recorded against each person before they take a shift.',
        source: {
          name: 'COTPA 2003, copy of the Act held by Bombay Chamber of Commerce',
          url: 'https://bombaychamber.com/wp-content/uploads/2022/06/Indian-Tobacco-Control-Act-Cotpa-2003.pdf',
        },
      },
      {
        name: 'Shops and Establishments rules on hours and night work',
        what: 'Opening hours and women’s night work are set by each state. Maharashtra, for example, notified that most shops may open 24x7, with conditions for women after about 9:30 pm such as consent and transport. Check your own state.',
        how: 'Shift patterns, consents and transport arrangements are recorded per person, and a rostered shift that breaks your rule is flagged.',
        source: {
          name: 'People Matters, on the Maharashtra notification',
          url: 'https://www.peoplematters.in/news/diversity-equity-inclusion/maharashtra-government-open-to-women-working-night-shifts-17118',
        },
      },
      {
        name: 'FSSAI registration and food safety',
        what: 'Food retailers need FSSAI registration or a licence by turnover. From 1 April 2026 basic registration generally covers turnover up to ₹1.5 crore. Hot food and ready-to-eat counters carry added hygiene duties.',
        how: 'The registration, temperature readings and cleaning rounds are recorded with a person and a time.',
        source: {
          name: 'Mondaq, FSSAI raises turnover limits',
          url: 'https://www.mondaq.com/india/food-and-drugs-law/1801924/fssai-raises-turnover-limits-for-food-business-registration-and-licensing',
        },
      },
      {
        name: 'MRP and the Legal Metrology rules',
        what: 'Packaged goods generally must not be sold above the printed MRP, which includes all taxes. State Legal Metrology departments inspect.',
        how: 'A new lot with a different MRP is flagged against the product so the shelf and billing price are corrected.',
        source: {
          name: 'Lok Sabha reply on Legal Metrology (Packaged Commodities) Rules, 2025',
          url: 'https://fcainfoweb.nic.in/PMS/writereaddata/2025_LS_B_4362.pdf',
        },
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your adviser or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede:
    'A night attendant should not see supplier costs or other stores’ numbers. The area manager needs the opposite. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which stores are making money, and which are leaking?', sees: 'Sales, wastage, high-value gaps, energy cost and shift cover for each store, side by side.' },
    { role: 'Area manager', question: 'Which store needs a visit?', sees: 'Stores ranked by wastage and count gaps, open faults and shift gaps across their stores.' },
    { role: 'Store manager', question: 'What do I deal with this shift?', sees: 'Expiring items, deliveries due, handover counts, briefings due and cover for the next shifts.' },
    { role: 'Shift attendant', question: 'What do I check before I leave?', sees: 'The handover list, chiller readings to take and items to mark down.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Collections by mode, supplier bills against receipts, credit notes due and the energy and rent record.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing machine at the counter. We agree during setup how sales reach Verity.',
      'Your supplier and van routines. Verity records what each van brings.',
      'Your CCTV and any security you use. Verity does not replace them.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Ring up sales or run the billing counter.',
      'Take orders or deliveries from customers.',
      'Run your payroll or file your tax returns.',
      'Act as a security or alarm system.',
    ],
    migration:
      'We bring your item lists, supplier details, opening stock, asset lists and staff roster across from the sheets and registers you use now, one store at a time, so no store stops trading.',
  },

  faqHeading: 'Questions convenience store owners ask.',
  faqs: [
    [
      'My night staff work alone. Can they really record all this?',
      'The night routine is short on purpose: a handover count, a few chiller readings and a few items to mark down. Each is a few taps. We train each shift on its own, including the night shift.',
    ],
    [
      'Does Verity replace my billing machine?',
      'No. Your billing machine keeps ringing up sales. We agree during setup how its sales reach Verity, and Verity gives you the picture around them: fresh stock, vans, counts, shifts and equipment.',
    ],
    [
      'Can it connect to my chillers to read the temperature?',
      'We do not claim hardware connections. Readings are entered by staff at the times you set, and Verity alerts you when one is out of range. If you have sensors, we agree during setup how their data could reach Verity.',
    ],
    [
      'Will it catch theft?',
      'It shows where stock or cash does not match the book, and which handover it fell in. It gives you facts and names the shift. It does not accuse anyone, and it is not a security system.',
    ],
    [
      'I have five stores. Can I compare them?',
      'Yes. Each store is a location in one system with the same measures, so wastage, count gaps, energy cost and shift cover can be compared, and the stores that stand out come first.',
    ],
    [
      'Can Verity help with the rules for night shifts and women on shift?',
      'It records each person’s consent, shift and transport, and flags a shift that does not meet the rule you have set. It does not give legal advice. Check the rule for your state with an adviser.',
    ],
    [
      'Who can see supplier costs and sales?',
      'Only the people you allow. Access is set by role, so a night attendant sees their shift tasks and not costs, and every change is recorded with who made it and when.',
    ],
    [
      'Will it tell me when stock will run out?',
      'It shows items likely to run out before the next delivery, based on how fast they sell by day of the week. It then drafts the order for you to approve.',
    ],
    [
      'What does it cost?',
      'It depends on the number of stores, users and what you want set up. Message us and we will give you a clear number after a short conversation about how your stores run.',
    ],
  ],

  related: ['grocery-stores', 'supermarkets', 'retail-stores', 'cafes', 'bakeries', 'fast-food-businesses'],

  ctaHeading: 'Start with what happens at 2 am.',
  ctaLede:
    'Tell us how your stores run and we will show you the wastage, count gaps and warm chillers it would find, using your own numbers.',
};
