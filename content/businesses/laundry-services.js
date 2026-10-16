export default {
  schema: 2,
  slug: 'laundry-services',
  status: 'published',
  plural: 'laundry services',
  subject: 'laundry',
  checked: '15 October 2026',

  seo: {
    title: 'Laundry and dry cleaning software for Indian laundries | Verity',
    description:
      'The 15 problems that drain a laundry or dry cleaner, what each costs, and the Verity screens that fix them: lost garments, late delivery, linen counts, solvent stock and dues.',
    keywords: [
      'laundry management software India',
      'dry cleaning shop order tracking',
      'garment tagging and lost clothes tracking',
      'hotel linen laundry contract software',
      'laundry pickup and delivery tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'logistics', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for laundry services',
    headline: 'A shirt goes missing, a delivery slips a day, and the customer never comes back.',
    lede:
      'A laundry earns from garments returned right and on time, and from customers who bring the next bag. Both leak, because the order is a paper slip, the stages are in the presser’s head and the hotel linen count is argued by phone. Verity puts every garment, every stage, every customer and every rupee in one place that tells you what to do today.',
    oneLine:
      'One system that knows every order, every garment and where it is in the plant, every bag of linen and every rupee owed, and tells you what needs your attention before the customer calls.',
    note: 'No new staff needed. The record starts when the bag is received at the counter.',
    screen: 'owner',
    screenNote: 'orders, stages, customers and dues',
  },

  today: {
    heading: 'The cloth is handled with care. The records are handled by hand.',
    paragraphs: [
      'The craft is visible: a suit comes back crisp, a saree is spotted and pressed, a hotel’s towels are folded in stacks. What is not visible is everything around it. Which orders are late, which garments were checked in with a stain already there, which customer has not come in since Diwali, and how many sheets the hotel actually sent against what it says it sent.',
      'That information exists in pieces. A carbon-copy slip book, a shelf of bags, a delivery rider’s phone, an Excel sheet for corporate accounts, a register of solvent bought, and a lot of memory. The owner is often at the counter as well, so the system that joins the pieces is you, between customers.',
      'The result is not a single disaster. It is a steady leak: a garment replaced because there was no proof, a bag collected three weeks late, a monthly account that nobody chased, a boiler fuel bill that rises with no matching rise in kilos washed.',
    ],
    stack: ['Carbon-copy order slips', 'WhatsApp groups with riders', 'Excel sheet for hotel and PG accounts', 'Stock register for detergent and solvent', 'The presser’s memory'],
    stackNote: 'Each of these works for its own job. None of them talk to each other, which is the problem.',
  },

  painsHeading: 'Where a laundry actually loses money.',
  painsLede:
    'These are the situations laundry and dry cleaning owners describe again and again, whether they run a neighbourhood shop with pickup, a self-service laundromat, or a plant that serves hotels, hospitals and hostels. For each one: what it looks like on a normal day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Garments',
      title: 'Garments go missing or get mixed up',
      scene:
        'A customer comes for two shirts and a jacket. The jacket is not on the shelf. It was bagged with another order and delivered to the wrong flat. The slip says "1 jacket" and nothing else.',
      cost:
        'Example arithmetic: a jacket claim of ₹6,000 once a month is ₹72,000 a year, plus the customer you lose.',
      fix:
        'Each order lists every garment as a line with its tag number. Pieces are scanned or ticked at each stage, so a missing item shows up as the stage where it was last seen, not as a surprise at the counter.',
      screen: 'order',
    },
    {
      area: 'Garments',
      title: 'Damage claims you cannot answer',
      scene:
        'A silk saree comes back with a stain at the border. The customer says it was clean. Your spotter says it was already marked. There is a note on the slip that says only "silk, handle with care".',
      cost:
        'A compensation of the saree’s value, or a long argument that costs goodwill. Even a few cases a year are worth more than a month’s profit on an ordinary shop.',
      fix:
        'At intake, the condition of each piece is noted on the order line with a photo for anything delicate or stained. The customer’s acknowledgement is recorded, so a complaint is a comparison of two photos, not an argument.',
      screen: 'order',
    },
    {
      area: 'Turnaround',
      title: 'Promised dates slip, and the customer finds out at the counter',
      scene:
        'Ready by Thursday, the slip says. On Thursday it is still at the ironing table because two pressers were absent. The customer comes and leaves empty-handed.',
      cost:
        'A wasted trip, a promise broken, and the sense that the shop cannot be relied on. These customers move to the next one on the road.',
      fix:
        'Each order has a due time and Verity shows the orders that will miss it, based on the stage and the staff on shift. The counter calls the customer before they come, and the new time is recorded.',
      screen: 'floor',
    },
    {
      area: 'Turnaround',
      title: 'Nobody knows where an order is in the plant',
      scene:
        'A customer asks about her curtains. They could be at the washing machine, in the dryer, on the rack or at the supplier for repair. Staff look at each place.',
      cost:
        'Time spent searching, customers told "it will be ready soon", and no way to see which stage holds orders longest.',
      fix:
        'Every order moves through stages on a simple board: received, wash, dry, press, pack, ready, out for delivery. Anyone can see where it is, and the stage that holds orders longest shows as a number.',
      screen: 'floor',
    },
    {
      area: 'Customers',
      title: 'Ready orders sit on the shelf for weeks',
      scene:
        'The back shelf has forty bags that customers have not collected. Some are three weeks old. Nobody calls, because nobody has the list.',
      cost:
        'Shelf space, working capital tied up in money not yet collected, and the risk that clothes get unclaimed and disputed later.',
      fix:
        'Ready orders are listed by age with the amount due. A call task goes to the counter after a set number of days, and the outcome is recorded: collecting, wants delivery or unreachable.',
      screen: 'customers',
    },
    {
      area: 'Customers',
      title: 'Regulars stop coming and nobody notices',
      scene:
        'A family that brought two bags every week stopped in August. No complaint was made. They found a pickup service that came to the door.',
      cost:
        'Example arithmetic: 150 regular households spending ₹900 a month is ₹16 lakh a year. Losing a fifth quietly is ₹3.2 lakh a year, and the line item never appears.',
      fix:
        'Each order is recorded against the customer, so Verity learns their usual gap. When someone passes it, they appear on a list with their usual items and spend, and the counter gets a call task.',
      screen: 'customers',
    },
    {
      area: 'Customers',
      title: 'Monthly packages and prepaid balances are tracked on slips',
      scene:
        'A customer buys a ₹2,000 prepaid card. Each visit someone deducts from a paper ledger. After three months nobody agrees how much is left.',
      cost:
        'Disputed balances, unused value that the customer forgets, and money you owe in service but cannot count.',
      fix:
        'Each package or prepaid balance is a record with every deduction. Verity lists balances about to expire and the customers who have not used a package, so the value is used instead of lost or argued about.',
      screen: 'customers',
    },
    {
      area: 'Pickup and delivery',
      title: 'Riders run half-empty routes and miss time slots',
      scene:
        'Four riders go out at 5 pm. Two cover the same lane, and one customer waits two hours past the slot. A bag is dropped at the wrong gate and the rider is blamed.',
      cost:
        'Fuel, time and missed slots. Two-way pickup and delivery is widely described as the hardest and most expensive part of a laundry business.',
      fix:
        'Pickups and deliveries are tasks grouped by area and slot, assigned to a rider, with a proof entry at hand-over. Missed slots and long routes show up by rider and by day.',
      screen: 'floor',
      source: {
        name: 'Inc42, Indian on-demand laundry sector',
        url: 'https://inc42.com/buzz/indian-on-demand-laundry-sector/',
      },
    },
    {
      area: 'Business customers',
      title: 'Hotel and hostel linen counts are argued, not recorded',
      scene:
        'A guest house sends 240 sheets on Monday and says it got back 220. You counted 232 at the plant. The invoice is held until someone signs off the count.',
      cost:
        'Example arithmetic: a disputed 20 sheets a week at ₹18 each is ₹360 a week, and the real cost is the payment delayed a month while the argument continues.',
      fix:
        'Each pickup is counted by item type and signed at both ends. The return is counted against it. A shortage appears as a line with the pickup, the count at the plant and the count at delivery, so the argument has a record.',
      screen: 'b2b',
    },
    {
      area: 'Money',
      title: 'Business accounts pay late and nobody chases',
      scene:
        'A hotel, two PG hostels and a clinic send linen on monthly credit. Invoices go out on the 5th. Payments arrive from the 40th to the 70th day. The chase depends on who remembers.',
      cost:
        'Example arithmetic: ₹4 lakh a month of credit billing held back by 30 extra days is ₹4 lakh of working capital that you borrow elsewhere.',
      fix:
        'Each account is a record with its weekly pickups, monthly invoice and due date. Verity lists overdue accounts by days late and assigns a payment call with the last conversation noted.',
      screen: 'b2b',
    },
    {
      area: 'Stock',
      title: 'Detergent, solvent and packing material are bought by guess',
      scene:
        'Detergent, fabric softener, dry-cleaning solvent, hangers and poly covers are ordered when someone sees an empty can. Last month solvent ran out on a Saturday, and a rush batch waited.',
      cost:
        'Rush purchases at higher prices and orders held up. When the solvent is used faster than the garments explain, the stock is leaving some other way.',
      fix:
        'Consumables have a usage rate per kilo or per piece. Verity compares what was used with what was processed, shows overuse by shift and flags items below their reorder level before a busy weekend.',
      screen: 'stock',
    },
    {
      area: 'Machines',
      title: 'Machines and the boiler break down at the worst time',
      scene:
        'The tumble dryer fails the week before a wedding season. The presser’s steam iron leaks. The boiler service is "due soon" on a calendar nobody looks at.',
      cost:
        'A plant running on half capacity in the busiest week, and repair bills that are larger than a planned service.',
      fix:
        'Every washer, dryer, press and boiler is an asset record with its service date and history. Verity schedules the service ahead of the due date and shows which machines break most often.',
      screen: 'stock',
    },
    {
      area: 'Staff',
      title: 'Pressers and spotters are paid by piece, and counts are disputed',
      scene:
        'Pressers earn per piece. At month end the counts from the slips and the counts they remember differ. A skilled spotter who feels short-changed leaves for a competitor.',
      cost:
        'Hours spent reconciling counts, a settlement based on trust, and the cost of losing the one person who can remove a stain from silk.',
      fix:
        'Each stage records who handled which pieces, so the piece count per person is a record, not a memory. Verity builds the month sheet with attendance, advances and piece counts for each worker.',
      screen: 'floor',
    },
    {
      area: 'Peaks',
      title: 'Festival and wedding rush overloads the plant',
      scene:
        'Diwali week brings three times the normal volume. Orders are accepted until the shelves are full, deliveries slip and nobody can say when the last bag will be done.',
      cost:
        'A week of broken promises that costs the goodwill of regular customers for the next quarter.',
      fix:
        'Verity shows the plant’s load against capacity by day. When the booked hours reach your limit, the counter is told to quote a later date, and extra shifts can be arranged ahead.',
      screen: 'owner',
    },
    {
      area: 'Compliance',
      title: 'Consents, boiler papers and cash tie-out are all loose ends',
      scene:
        'The pollution board consent, the boiler registration and the trade licence each renew on a different date. At closing, cash, UPI and the slip book are ₹500 apart and nobody knows why.',
      cost:
        'Notices for lapsed papers, and a daily gap that hides small leaks. Wastewater and boiler rules apply to larger plants and increasingly to small ones.',
      fix:
        'Licences and consents are records with renewal dates and attached documents. Each delivered order has a value and payment mode, and Verity points to the order that does not tie at the day’s close.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '7,67,000',
      text: 'establishments in the Indian laundry sector, 98% of them micro laundries with fewer than 10 workers, according to figures quoted in 2016.',
      source: { name: 'Inc42, Indian on-demand laundry sector', year: '2016', url: 'https://inc42.com/buzz/indian-on-demand-laundry-sector/' },
    },
    {
      figure: '2 to 3%',
      text: 'the share of the Indian laundry market held by the organised segment, as reported in 2016. The rest is neighbourhood shops, dhobis and home help.',
      source: { name: 'Inc42, Indian on-demand laundry sector', year: '2016', url: 'https://inc42.com/buzz/indian-on-demand-laundry-sector/' },
    },
    {
      figure: '18%',
      text: 'GST on laundry and dry cleaning services, with input credit. A July 2026 guide notes the September 2025 cut to 5% applied to beauty and wellness services, not laundry.',
      source: { name: 'CalcGuru, laundry business guide', year: 'updated July 2026', url: 'https://calcguru.in/?p=2629' },
    },
    {
      figure: '1 May 2025',
      text: 'the date the Boilers Act 2025 is said to have come into force, covering steam boilers above a small size. Steam-press and tunnel-finishing setups may need to register.',
      source: { name: 'CalcGuru, laundry business guide', year: 'updated July 2026', url: 'https://calcguru.in/?p=2629' },
    },
  ],
  factsNote:
    'The sector figures are from 2016 press coverage and are old. The tax and boiler points come from a secondary guide, not the notification itself. They show the scale of the problem, not what your laundry will see. Confirm rates and dates with your accountant.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your laundry’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Laundry / Today',
      meta: 'Plant and 3 counters',
      heading: 'The owner’s morning view',
      caption:
        'Orders in, orders late, plant load, unclaimed bags and dues on one screen, with the items that need a decision listed below. This replaces the morning walk around the plant.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Orders in plant', value: '186', note: '14 due today' },
            { label: 'Plant load', value: '87%', note: 'of today’s capacity' },
            { label: 'Late orders', value: '9', note: 'will miss due time' },
            { label: 'Unclaimed bags', value: '38', note: '11 over two weeks' },
          ],
        },
        { type: 'title', text: 'Plant load by day, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Monday', value: 62, display: '62%' },
            { label: 'Wednesday', value: 87, display: '87%' },
            { label: 'Friday', value: 100, display: '104%', tone: 'muted' },
            { label: 'Saturday', value: 96, display: '96%' },
          ],
        },
        { type: 'alert', text: 'Friday is booked beyond capacity. Quote Saturday for new orders from tomorrow.', action: 'Set limit' },
        {
          type: 'list',
          items: [
            { name: 'Boiler service due in 9 days', meta: 'Last service 11 months ago', tag: ['Schedule', 'flag', 'Booked', 'ok'] },
            { name: 'Cash and UPI differ by ₹500', meta: '2 orders unmatched at closing', tag: ['Review', 'flag', 'Matched', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'order',
      title: 'Order and garments',
      meta: 'Record',
      heading: 'Every garment listed, with its condition at intake',
      caption:
        'The customer, each piece with its tag, the condition noted at the counter, the service and the due time. A missing piece or a claim starts from a record, not from memory.',
      blocks: [
        {
          type: 'record',
          title: 'Order LD-4821, Priya Menon',
          sub: 'Pickup from flat 5B. Due Thursday 6 pm',
          fields: [
            ['Customer since', 'March 2023'],
            ['Pieces', '9 (tags 4821-1 to 4821-9)'],
            ['Service', 'Dry clean 4, wash and press 5'],
            ['Condition', ['Silk saree, mark at border', 'flag']],
            ['Amount', '₹2,140'],
            ['Stage', ['Pressing', 'info', 'Ready', 'ok']],
          ],
          timeline: [
            ['Tue 11:20', 'Picked up by Raju, 9 pieces counted with customer'],
            ['Tue 2:10', 'Received at plant, 2 photos for saree and wool jacket'],
            ['Wed 10:30', 'Dry clean cycle done, spotter notes: border mark reduced'],
            ['Note', 'Prefers hangers for shirts. Do not starch cotton kurtas.'],
          ],
        },
      ],
    },
    {
      id: 'floor',
      title: 'Plant board',
      meta: 'Stages and riders',
      heading: 'Where every order is, and which ones will miss their time',
      caption:
        'Orders by stage, the staff on each stage, and the pickup and delivery slots by rider. A stage that holds orders too long and a slipping slot are flagged first.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Wash and dry',
              cards: [
                { title: 'LD-4830, 6 kg wash', meta: 'Due 4 pm', tag: ['On track', 'ok'] },
                { title: 'Hotel Sunrise, 120 sheets', meta: 'Due Thursday', tag: ['On track', 'ok'] },
              ],
            },
            {
              name: 'Pressing',
              cards: [
                { title: 'LD-4821, 9 pieces', meta: 'Due Thursday 6 pm', tag: ['On track', 'ok'] },
                { title: 'LD-4797, 4 suits', meta: 'Due today 1 pm', tag: ['At risk', 'late', 'Told', 'ok'] },
              ],
            },
            {
              name: 'Ready and out',
              cards: [
                { title: 'LD-4802, 14 pieces', meta: 'Slot 5 to 7 pm, Raju', tag: ['Out', 'info', 'Delivered', 'ok'] },
                { title: 'LD-4788, 5 pieces', meta: 'Ready since Monday', tag: ['Call', 'flag'] },
              ],
            },
          ],
        },
        { type: 'alert', text: '9 orders will miss their due time. 2 pressers are absent today.', action: 'Call customers' },
      ],
    },
    {
      id: 'customers',
      title: 'Customers',
      meta: 'Lapsed, unclaimed, balances',
      heading: 'The list that brings bags and customers back',
      caption:
        'Customers who passed their usual gap, ready orders that have not been collected and prepaid balances close to expiry. Each is a call task for the counter, and the outcome is recorded.',
      blocks: [
        {
          type: 'table',
          cols: ['Customer', 'Last order', 'Usual gap', 'Spend, 12 months', 'Status'],
          rows: [
            ['Sunita Verma', '18 Aug', '1 week', '₹14,800', ['Call today', 'late', 'Booked', 'ok']],
            ['Anand Rao', '2 Sep', '2 weeks', '₹9,200', ['Call today', 'flag', 'Declined', 'muted']],
            ['Fatima Khan', '27 Aug', '1 week', '₹11,600', ['Message', 'flag']],
          ],
        },
        {
          type: 'table',
          cols: ['Unclaimed order', 'Ready since', 'Amount', 'Days', 'Status'],
          rows: [
            ['LD-4788, Deepak Joshi', 'Mon', '₹760', '3', ['Call', 'flag', 'Collecting', 'ok']],
            ['LD-4602, Rekha Pillai', '22 Sep', '₹1,450', '23', ['Call', 'late']],
            ['LD-4590, Sam D’Souza', '20 Sep', '₹520', '25', ['Unreachable', 'muted']],
          ],
        },
      ],
    },
    {
      id: 'b2b',
      title: 'Business accounts',
      meta: 'Hotels, hostels, clinics',
      heading: 'Linen counted at both ends, invoices tracked to payment',
      caption:
        'Each pickup is counted by item type and signed, and the return is checked against it. Monthly invoices show the stage and days late, and an overdue account has a call task.',
      blocks: [
        {
          type: 'table',
          cols: ['Account', 'Sent', 'Counted at plant', 'Returned', 'Status'],
          rows: [
            ['Hotel Sunrise, sheets', '240', '240', '240', ['Matched', 'ok']],
            ['Green Nest PG, sheets', '180', '176', '176', ['4 short at pickup', 'flag', 'Agreed', 'ok']],
            ['Care Clinic, scrubs', '60', '60', '58', ['2 short at return', 'late', 'Found', 'ok']],
          ],
        },
        {
          type: 'table',
          cols: ['Account', 'Month', 'Invoice', 'Days', 'Status'],
          rows: [
            ['Hotel Sunrise', 'Sep', '₹1.84 lakh', '41', ['Call', 'late', 'Promised 24 Oct', 'info']],
            ['Green Nest PG', 'Sep', '₹62,000', '12', ['Sent', 'info']],
            ['Care Clinic', 'Aug', '₹28,500', '58', ['Overdue', 'late']],
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Consumables and machines',
      meta: 'Stock and service',
      heading: 'What the plant used, against what it processed',
      caption:
        'Detergent, solvent and packing against the kilos and pieces done, with a service date for every machine and the boiler. Usage comes from the orders recorded, so nobody dips a stick to guess.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'In stock', 'Used / week', 'Per kg or piece', 'Status'],
          rows: [
            ['Detergent, 20 L', '4', '6', '₹3.80 / kg', ['Reorder', 'flag', 'Ordered', 'ok']],
            ['Dry-clean solvent, 200 L', '1', '1', '₹11 / piece', ['Check', 'late']],
            ['Poly covers', '800', '260', '₹1.20 / piece', ['OK', 'ok']],
            ['Hangers', '1,100', '90 lost', '₹0.60 / piece', ['Check', 'flag']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Tumble dryer 2', meta: 'Serviced 10 months ago', tag: ['Overdue', 'late', 'Booked', 'ok'] },
            { name: 'Boiler registration and service', meta: 'Renews in 9 days', tag: ['Soon', 'flag', 'Done', 'ok'] },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Friday, before and after.',
  dayLede: 'What changes is not the washing. It is that each bag leaves a record, and the record does the chasing.',
  day: [
    {
      time: '8:30',
      before: 'You walk the plant to see what is pending. Two orders are already late.',
      after: 'The Today screen lists nine orders that will miss their time. The counter has already started calling.',
    },
    {
      time: '11:00',
      before: 'A customer says her saree came back with a stain. There is nothing on the slip.',
      after: 'The intake photo shows the border mark. The note and her acknowledgement settle it.',
    },
    {
      time: '1:00',
      before: 'A hotel says it sent 240 sheets. You counted 232. Both sides remember differently.',
      after: 'The signed pickup count and the plant count are on the record. The difference is clear.',
    },
    {
      time: '4:00',
      before: 'Forty bags sit on the back shelf. Nobody knows who to call.',
      after: 'The unclaimed list is sorted by age with amounts. The counter calls the oldest first.',
    },
    {
      time: '7:00',
      before: 'Riders return and you cannot tell which slots were missed.',
      after: 'Each slot is closed on the rider’s phone with the time. The two late ones are listed.',
    },
    {
      time: 'Month end',
      before: 'You argue over pressers’ piece counts and chase three business accounts.',
      after: 'The counts come from the stage records, and overdue accounts already have a call task.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your laundry actually runs on a busy Friday, build Verity around it, move your data in, then stay on so it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day at your counter and plant. Follow a bag from the customer to the hanger, see how tags, stages, pickups and credit accounts work, and note where garments get lost.',
        you: 'Two to three hours of your time and your plant supervisor’s. A week of slips, your price list and your credit account sheet.',
        get: 'A written map of your laundry: services and prices, stages, counters and riders, business accounts, and the first leaks to close.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your services and rates, garment types, stages, due-time rules, rider slots, consumable standards, machine service dates and approval limits, and build the screens in your terms.',
        you: 'Check the setup with your supervisor. Tell us where a stage or a rate is wrong.',
        get: 'A working Verity with your real services, stages and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in customers, packages, business accounts, open orders and stock from your slips and sheets. Train counter staff, pressers and riders at their stations with real bags.',
        you: 'Your customer list, package balances and open invoices in any form. Half an hour with each role.',
        get: 'Your customers and open orders inside Verity, and a team that has run real bags through it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks with you, tune the late-order alerts and consumable standards, and handle changes when you add a counter, a service or a client.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps pace with the laundry, with someone responsible for it.',
      },
    ],
    bring: [
      'Your price list by garment and service',
      'A week of order slips or the order register',
      'Your customer list, package balances and credit account sheet',
      'Your last two months of detergent, solvent and packing bills',
      'Machine, boiler and licence details with renewal dates',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your plant supervisor needs a few more.',
    after: 'Nobody is hired to run Verity. The order is recorded when the bag is received, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your laundry a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own order, customer, stage and stock records. Ask in plain language, then turn the answer into tasks for the right person.',
    examples: [
      {
        q: 'Which orders will miss their due time today?',
        a: 'Nine orders will miss. Four are waiting at pressing, where two pressers are absent. Two are for customers who usually collect in the evening.',
        rows: [['Pressing', '4'], ['Dry clean', '3'], ['Packing', '2']],
        action: 'Create call tasks for the counter',
      },
      {
        q: 'Which regular customers have not sent a bag in four weeks?',
        a: '31 regulars are past their usual gap. 9 of them spent over ₹10,000 in the last year.',
        rows: [['Counter 1', '14'], ['Counter 2', '11'], ['Counter 3', '6']],
      },
      {
        q: 'Is the dry-clean solvent being used faster than the garments explain?',
        a: 'Yes. This month it was used at ₹14 a piece, against ₹11 last month. The rise started on 12 October.',
        action: 'Check the machine and the shift roster',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still make the calls and send the messages, Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An order will miss its due time',
      then: ['Flagged on the plant board', 'Task to the counter to call the customer', 'New time recorded'],
    },
    {
      when: 'A ready order is not collected in 5 days',
      then: ['Added to the unclaimed list', 'Call task to the counter', 'Outcome recorded: collecting, delivery or unreachable'],
    },
    {
      when: 'A piece is not scanned at the next stage',
      then: ['Marked as missing at the last stage seen', 'Task to the supervisor to check', 'Found or claim opened, recorded'],
    },
    {
      when: 'A regular passes their usual gap',
      then: ['Added to the win-back list with their usual items', 'Task to the counter', 'Outcome recorded'],
    },
    {
      when: 'A business account invoice reaches 30 days',
      then: ['Appears on the owner’s list', 'Call task with the contact', 'Promise date recorded'],
    },
    {
      when: 'A machine or the boiler reaches its service date',
      then: ['Service task created ahead of time', 'Plant load adjusted for the downtime', 'Service cost recorded on the machine'],
    },
  ],

  rules: {
    heading: 'The rules a laundry has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records and dates these rules depend on in order, so you are not looking for papers when an inspector arrives.',
    items: [
      {
        name: 'Trade licence and pollution board consent',
        what: 'A laundry generally needs a trade licence from the municipal body. A business guide says laundries with high water use need consent to establish and operate from the State Pollution Control Board. A mechanised laundry with an oil-fired boiler is described as Orange category in CPCB lists, while small manual laundries often fall outside. State lists vary.',
        how: 'Each licence and consent is a record with renewal dates and attached documents, with a reminder task ahead of the date.',
        source: { name: 'Flexiloans, how to start a laundry business', url: 'https://flexiloans.com/blog/start-laundry-business-in-india' },
      },
      {
        name: 'Boiler registration',
        what: 'A guide updated in July 2026 says the Boilers Act 2025 came into force on 1 May 2025 and that steam boilers above a small size, as used in steam-press and tunnel-finishing setups, must be registered before use. Check the details with the boiler authority in your state.',
        how: 'Boiler registration, inspection and service dates are on the machine record, with tasks ahead of each date.',
        source: { name: 'CalcGuru, laundry business guide', url: 'https://calcguru.in/?p=2629' },
      },
      {
        name: 'GST on laundry services',
        what: 'The same guide says laundry and dry cleaning stay at 18% with input credit, and that the 5% cut of September 2025 applied to beauty and wellness services only. Registration depends on your turnover and state. Confirm with your accountant.',
        how: 'Service type and customer are recorded on every order, so your accountant has the split needed for returns. Verity does not file returns.',
        source: { name: 'CalcGuru, laundry business guide', url: 'https://calcguru.in/?p=2629' },
      },
      {
        name: 'Solvent handling and disposal',
        what: 'Dry-cleaning solvents such as PERC are hazardous chemicals. Environmental groups have found residue in dry-cleaned garments and informal disposal in India. Check what your pollution board and your solvent supplier require for storage and disposal.',
        how: 'Solvent bought, used and removed as waste is recorded with date and quantity, so you can show where it went.',
        source: { name: 'Toxics Link, study on PERC in dry cleaning', url: 'https://toxicslink.org/?p=2113' },
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A rider should not see customer spend. The accountant should not edit stage records. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the plant earning what it should?', sees: 'Orders, plant load, late orders, claims, account dues and consumable cost per kilo or piece, for every counter.' },
    { role: 'Counter staff', question: 'Who is collecting and who needs a call?', sees: 'Today’s collections, ready orders, unclaimed bags, customer notes and package balances.' },
    { role: 'Plant supervisor', question: 'What is stuck, and who is absent?', sees: 'Plant board by stage, orders at risk, staff on shift, machine and boiler dates.' },
    { role: 'Rider', question: 'Where do I go next?', sees: 'Pickup and delivery slots in order, addresses, counts to confirm and the proof entry.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Collection by mode, business account invoices, supplier bills, and the tax split.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing machine or counter app. We agree how orders and payments reach Verity during setup.',
      'Your tag printer or tagging method, whatever you use today.',
      'WhatsApp for talking to customers and riders. Staff send the messages; Verity says who and when.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Take pickup requests or payments from customers online.',
      'Send messages to customers on its own.',
      'Run your counter billing or card payments.',
      'File your returns or run your payroll.',
    ],
    migration:
      'We bring customers, packages, business accounts, open orders and stock across from your slips, sheets and apps, in stages, so the laundry keeps running while it happens.',
  },

  faqHeading: 'Questions laundry owners ask.',
  faqs: [
    [
      'Will my counter staff and pressers actually use it?',
      'It only works if the order and each stage are recorded, so we keep every step to a few seconds on a phone or a counter screen. We train at each station with real bags. Staff get something back: their own piece counts and attendance, visible and unarguable.',
    ],
    [
      'I only have one counter and no plant. Is it still useful?',
      'Yes. The order, the garment lines, the due time, the unclaimed shelf and the regular customers list all apply to a single counter that sends work to a plant nearby.',
    ],
    [
      'Does Verity take pickup requests from customers?',
      'No. If you take pickups by phone, an app or a form, that keeps working and we map it during setup. Verity records the pickup as a task and gives you the picture around it.',
    ],
    [
      'Can it handle tagging and scanning?',
      'It records each garment against an order and a tag number. We agree how tags are printed and how pieces are ticked or scanned at each stage during setup. We do not supply tag printers or scanners.',
    ],
    [
      'Can it message my customers about late or ready orders?',
      'Not on its own. Verity creates the task for the counter to call or message, and your team sends it. The outcome is recorded against the order.',
    ],
    [
      'Can it handle hotel and hospital linen contracts?',
      'Yes. Each account has its item types, rates, weekly pickups and counts at both ends, and monthly invoices tracked to payment. It does not replace your contract with them.',
    ],
    [
      'Who can see customer data and prices?',
      'Only the people you allow. Access is set by role, so riders, counter staff, the supervisor and the accountant each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'How long before I see a difference?',
      'The unclaimed list, late-order alerts and overdue accounts need only your existing data, so they come first. Consumable cost per kilo and plant load patterns become reliable after a few weeks of recorded orders.',
    ],
    [
      'What does it cost?',
      'It depends on the number of counters, plants and what you want set up. Message us and we will give you a clear number after a short conversation about how your laundry runs.',
    ],
  ],

  related: ['cleaning-services', 'car-washes', 'tailors', 'repair-services', 'hotels', 'hostels'],

  ctaHeading: 'Start with the bags waiting on your back shelf.',
  ctaLede:
    'Tell us how your laundry runs and we will show you the late orders, the unclaimed bags and the accounts that owe you, using your own numbers.',
};
