export default {
  schema: 2,
  slug: 'salons',
  status: 'published',
  plural: 'salons',
  subject: 'salon',
  checked: '15 October 2026',

  seo: {
    title: 'Salon management software for Indian salons | Verity',
    description:
      'See the 14 problems that quietly drain a salon, what each costs, and the exact Verity screens that fix them: lapsed regulars, empty chairs, colour waste, commissions and more.',
    keywords: [
      'salon management software India',
      'salon client retention software',
      'salon inventory and colour stock tracking',
      'salon staff commission tracking',
      'multi-branch salon software',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for salons',
    headline: 'Your regulars stop coming and nobody notices. Verity makes sure you do.',
    lede:
      'A salon earns from two things: full chairs and clients who come back. Both leak every week, quietly, because the information sits in a diary, a billing machine and your stylists’ heads. Verity puts it in one place that tells you what to do today.',
    oneLine:
      'One system that knows every client, every chair, every tube of colour and every rupee, and tells you what needs your attention before it costs you.',
    note: 'No new staff needed to run it. The records come from the bill you already make for every visit.',
    screen: 'owner',
    screenNote: 'stylists, services, prices and branches',
  },

  today: {
    heading: 'Most salons run well on the floor and blind in the office.',
    paragraphs: [
      'The work itself is visible: chairs are full on Saturday, the bridal booking goes well, the colour comes out right. What is not visible is everything around it. Which regular last visited in April. Which stylist sat idle for three hours on Tuesday. How many tubes of a shade were used, and how many were sold or wasted. What a stylist is really owed this month.',
      'That information exists, but in pieces: an appointment diary or app, a billing machine or notebook, a stock register that is updated when someone remembers, and a lot of memory. The owner is usually also working the floor, so the system that connects the pieces is you, between clients.',
      'The result is not a crisis. It is a slow leak across lapsed clients, unused hours, wasted product and small discounts, and it only shows up when the month’s takings feel lower than they should.',
    ],
    stack: ['Appointment diary or app', 'Billing machine or notebook', 'WhatsApp groups', 'Excel stock sheet', 'Stylists’ memory'],
    stackNote: 'Each of these works for its own job. None of them talk to each other, which is the problem.',
  },

  painsHeading: 'Where a salon actually loses money.',
  painsLede:
    'These are the situations salon owners describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Clients',
      title: 'Regulars drift away and nobody notices',
      scene:
        'A client who came every five weeks for two years has not been in since June. The stylist assumes she is travelling. The front desk does not know she exists as a pattern. She is now going to a salon near her office.',
      cost:
        'Example arithmetic: 100 regulars who spend ₹2,400 a visit and come 8 times a year are worth about ₹19 lakh a year. Losing even a quarter quietly is ₹4.8 lakh, and you never see the line item.',
      fix:
        'Every visit is recorded against the client, so Verity learns each person’s usual gap. When someone passes it, they appear on a list with their stylist, last service and spend, and a follow-up task goes to the stylist who knows them.',
      screen: 'lapsed',
    },
    {
      area: 'Clients',
      title: 'New clients come once and never return',
      scene:
        'Walk-ins and offer-led first visits fill the diary. After the discount visit, most never book again, and the salon never finds out why or who they were.',
      cost:
        'You paid to acquire them (offer, ad or discount) and earned nothing from the second visit onward. Published benchmarks suggest only about half of new clients return for a second visit.',
      fix:
        'First-time clients are tagged as new. Verity lists those who have not returned within your window, shows what they had done, and assigns a follow-up to the stylist who served them, so a second visit is chased while it is still likely.',
      screen: 'lapsed',
    },
    {
      area: 'Clients',
      title: 'What a stylist knows about a client lives only in that stylist’s head',
      scene:
        'The colour formula, the sensitivity to a product, the way she likes her fringe cut. When the usual stylist is on leave, the next one starts from zero and the client notices.',
      cost:
        'Redo work, an unhappy client, and a real safety risk when an allergy or past reaction is not known to the person holding the brush.',
      fix:
        'Formulas, patch-test results, allergies, preferences and photos sit on the client record, visible to whoever takes the appointment, with permission rules on who can edit.',
      screen: 'client',
    },
    {
      area: 'Staff',
      title: 'When a stylist leaves, the clients leave with them',
      scene:
        'The client list is in her phone, the formulas are in her notebook, and the relationship was hers. She joins the salon down the road and half her regulars follow within a month.',
      cost:
        'Staff turnover in Indian salons is commonly reported as very high, and each exit can take a chunk of revenue with it.',
      fix:
        'The client relationship is recorded in the salon’s system, not on a personal phone: full history, formulas and spend belong to the business. Clients can be reassigned in one step and the handover list is ready the day someone resigns.',
      screen: 'client',
    },
    {
      area: 'Chairs and time',
      title: 'Empty hours that nobody can see',
      scene:
        'Two stylists are fully booked on Saturday while two others sit at 40 percent. Tuesday afternoons are quiet every week and you are paying full wages for them anyway.',
      cost:
        'An unfilled staffed hour is gone for good. Because it is never written down as a number, it is never managed.',
      fix:
        'Services are recorded against each stylist and shift, so utilisation per stylist, day and hour is a live number. The pattern shows which slots to fill with offers, and which shifts to trim or move.',
      screen: 'owner',
    },
    {
      area: 'Chairs and time',
      title: 'No-shows and last-minute cancellations',
      scene:
        'The 4 pm bridal trial does not turn up. The 6 pm client cancels at 5:45. The same few people do it again and again, but each time it is treated as a one-off.',
      cost:
        'A blocked chair, a stylist on the clock and no revenue. Vendor surveys put the no-show rate for salons without reminders near one in five appointments.',
      fix:
        'No-shows and late cancellations are recorded on the client, so repeat offenders are visible. Verity creates a reminder task for the front desk the day before, and you can set a rule such as a confirmation call for anyone with two earlier no-shows.',
      screen: 'owner',
    },
    {
      area: 'Stock',
      title: 'Colour used by guesswork, wasted by habit',
      scene:
        'Stylists mix extra “just in case”, the bowl is thrown away, and nobody weighs what a service really used. Tubes vanish faster than services delivered would explain.',
      cost:
        'Colour and treatment products are one of the biggest costs after wages. Industry waste reports show large amounts of unused colour being discarded; overuse quietly raises the cost of every service.',
      fix:
        'Each service records the products used. Verity compares usage per stylist and per service type with what was sold, so overuse shows up as a number and you can set a standard quantity per service.',
      screen: 'stock',
      source: {
        name: 'Green Circle Salons, Circle of Impact report, 2023 (via Circular Online)',
        url: 'https://www.circularonline.co.uk/news/impact-report-salons-generate-397kg-of-waste-per-minute/',
      },
    },
    {
      area: 'Stock',
      title: 'The shade you need on Saturday is out of stock on Friday',
      scene:
        'The stock register is checked when something runs out. The supplier delivers Thursday, but the order went in Wednesday night because nobody noticed earlier.',
      cost:
        'A client turned away or a service done with a substitute. Lost revenue and a lost relationship in one afternoon.',
      fix:
        'Stock has a reorder point per item. Verity checks the next week’s bookings against what is on the shelf and flags shortages while there is still time for the supplier to deliver.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Retail sells, but nobody knows the margin',
      scene:
        'Shampoo, serums and styling products leave the shelf at the till. Some are billed, some are gifted, some are “borrowed”. The count never matches.',
      cost:
        'Retail is one of the highest-margin lines in a salon, and it is the one with the least tracking. Shrinkage hides inside it.',
      fix:
        'Retail sales are recorded against the client and the stylist, and deducted from stock as they happen. A monthly count shows exactly which items do not match and by how much.',
      screen: 'stock',
    },
    {
      area: 'Staff',
      title: 'Commission is calculated by hand, and argued about',
      scene:
        'At month end, someone adds up each stylist’s services and retail from the book, applies different slabs, and gets it wrong for at least one person. Trust takes a knock.',
      cost:
        'Hours of owner or accountant time every month, plus the cost of a good stylist who feels short-changed and starts looking elsewhere.',
      fix:
        'Because every service and sale is recorded against the stylist who delivered it, Verity builds a monthly commission statement from your own slabs. The stylist can see the same breakdown, so there is nothing to dispute.',
      screen: 'staff',
    },
    {
      area: 'Money',
      title: 'Discounts and packages leak margin at the counter',
      scene:
        'A regular gets “a little off”. A manager approves a free service verbally. Prepaid packages are redeemed from a paper card, and nobody knows how many sessions are still owed.',
      cost:
        'Small discretionary decisions are where a thin-margin business loses its margin. Unused package balances are also a liability sitting on your books.',
      fix:
        'Discounts above a limit need a one-tap approval with a reason. Package sessions are deducted on every redemption, and Verity lists balances about to expire so they can be used rather than lost or argued about.',
      screen: 'packages',
    },
    {
      area: 'Money',
      title: 'Takings do not reconcile with services delivered',
      scene:
        'At closing, cash, card and UPI are counted against the bill book, and the numbers are off by a few hundred rupees. Nobody can say whether it is a missed bill, a free service or an error.',
      cost:
        'Small daily gaps compound. More importantly, the owner cannot trust the numbers they are looking at.',
      fix:
        'Every service is a record with a value and a payment mode. Verity compares the day’s services with the day’s payments by mode, and flags a mismatch with the exact visit that does not tie.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'You are the system',
      scene:
        'You remember which stock is low, which stylist is struggling, which client is overdue. You are also on the floor. When you are on leave, things slide.',
      cost:
        'The business cannot grow past what one person can hold in their head, and the owner can never fully step away.',
      fix:
        'Each morning Verity shows a short list of what needs a decision, each item with an owner. The routine moves from your memory to the system, and the manager can run it on days you are not there.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'A second branch doubles the confusion',
      scene:
        'Two diaries, two stock cupboards, two sets of takings sheets sent over WhatsApp each night. A client who visits both is two different people in your records.',
      cost:
        'No fair comparison between branches, stock sitting idle in one while the other runs out, and weeks of delay before a problem is visible.',
      fix:
        'Branches are locations in one system. A client is one person across both. Takings, utilisation and retention are comparable side by side, and stock can be moved between branches against a recorded transfer.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '52%',
      text: 'of hair salon clients in Australia rebook within 24 hours of a visit. For beauty salons it is 43%. The rest depend on the client remembering to book.',
      source: { name: 'Kitomba benchmark', year: 'Q4 2020 data', url: 'https://www.kitomba.com/blog/industry-insights-rebooking-rates-for-the-hair-and-beauty-industry-and-how-to-improve-yours/' },
    },
    {
      figure: '~1 in 2',
      text: 'new spa and salon clients come back for a second visit, according to one retention benchmark.',
      source: { name: 'JeriCommerce retention statistics', url: 'https://blog.jericommerce.com/resources/spas-salons-medspas-retention-statistics' },
    },
    {
      figure: '50 to 100%',
      text: 'yearly staff turnover reported for the Indian salon industry, with clients often following a stylist who leaves.',
      source: { name: 'Entrepreneur India', url: 'https://india.entrepreneur.com/lifestyle/meet-these-two-makeover-masters-of-beauty-and-wellness/294262' },
    },
    {
      figure: '5%',
      text: 'GST on salon and beauty services from 22 September 2025, without input tax credit. It was 18% with credit before, so cost tracking now matters more.',
      source: { name: 'Business Today, citing CBIC', year: '2025', url: 'https://www.businesstoday.in/amp/india/story/gst-rate-cut-salon-visits-gyms-yoga-classes-to-get-cheaper-from-sept-22-says-cbic-494193-2025-09-16' },
    },
  ],
  factsNote:
    'Several benchmark figures come from software vendors and from other countries, and one is undated. They show the scale of the problem, not what your salon will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, columns and terms are set up in your salon’s own language.',
  screens: [
    {
      id: 'owner',
      title: 'Salon / Today',
      meta: 'Branch: Indiranagar',
      heading: 'The owner’s morning view',
      caption:
        'Takings, chair use, lapsed regulars and low stock on one screen, with the items that need a decision listed below. This replaces the daily WhatsApp summary and the mental checklist.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Takings today', value: '₹64,200', note: '38 services' },
            { label: 'Chair use', value: '71%', note: 'of staffed hours' },
            { label: 'Lapsed regulars', value: '112', note: 'past usual gap' },
            { label: 'Stock low', value: '6', note: 'lines below reorder' },
          ],
        },
        { type: 'title', text: 'Chair use by stylist, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Meera', value: 92, display: '92%' },
            { label: 'Rohit', value: 88, display: '88%' },
            { label: 'Anita', value: 41, display: '41%' },
            { label: 'Kabir', value: 38, display: '38%' },
          ],
        },
        { type: 'alert', text: 'Cash and UPI do not tie to services by ₹420. 2 visits unmatched.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Lapsed regulars assigned', meta: 'Follow-ups sent to the usual stylists', tag: ['Open', 'flag', 'Assigned', 'ok'] },
            { name: 'Weekend colour shortage', meta: 'Two shades short, supplier delivers Thursday', tag: ['Order', 'flag', 'Ordered', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'client',
      title: 'Client',
      meta: 'Record',
      heading: 'One record for every client',
      caption:
        'Everything a stylist needs before the client sits down: last formula, sensitivities, preferred stylist, package balance and every visit. Owned by the salon, not by one stylist.',
      blocks: [
        {
          type: 'record',
          title: 'Priya Nair',
          sub: 'Regular since March 2023. Usual stylist: Meera',
          fields: [
            ['Usual gap', 'Every 5 weeks'],
            ['Last visit', '14 June'],
            ['Spend, 12 months', '₹31,400'],
            ['Allergy', ['Ammonia sensitive', 'flag']],
            ['Package', '3 of 6 sessions left'],
            ['Status', ['Overdue', 'late', 'Booked 22 Oct', 'ok']],
          ],
          timeline: [
            ['14 Jun', 'Root touch-up, 6.3 + 7.1 at 1:1, 35 min'],
            ['10 May', 'Haircut and blow dry'],
            ['2 Apr', 'Global colour, patch test clear'],
            ['Note', 'Prefers a short fringe. Dislikes strong fragrance.'],
          ],
        },
      ],
    },
    {
      id: 'lapsed',
      title: 'Win-back list',
      meta: 'Clients past their usual gap',
      heading: 'The list that brings clients back',
      caption:
        'Clients ordered by how much they were worth and how overdue they are, grouped by the stylist who knows them. A follow-up call or message is a task on the stylist’s own screen, and the outcome is recorded.',
      blocks: [
        {
          type: 'table',
          cols: ['Client', 'Last visit', 'Usual gap', 'Stylist', 'Status'],
          rows: [
            ['Priya Nair', '14 Jun', '5 wks', 'Meera', ['Call today', 'late', 'Booked', 'ok']],
            ['Sana Khan', '2 Jul', '6 wks', 'Meera', ['Call today', 'flag', 'Booked', 'ok']],
            ['Ritu Menon', '20 Jun', '4 wks', 'Rohit', ['Call today', 'flag', 'Declined', 'muted']],
            ['Neha Rao', '9 Jul', '7 wks', 'Anita', ['Message', 'flag']],
            ['Divya Shah', '27 Jun', '5 wks', 'Kabir', ['Message', 'flag']],
          ],
        },
        { type: 'alert', text: '112 clients are past their usual gap. 31 have spent over ₹20,000 in the last year.', action: 'Assign all' },
      ],
    },
    {
      id: 'stock',
      title: 'Stock',
      meta: 'Colour, treatments and retail',
      heading: 'Colour and retail stock, against next week’s bookings',
      caption:
        'What is on the shelf, how fast it is used, what the coming bookings need, and what to order. Usage comes from the services recorded, so nobody counts tubes by eye.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'In stock', 'Used / week', 'Needed Sat', 'Status'],
          rows: [
            ['Colour 6.3 (60 ml)', '2', '9', '4', ['Short', 'late', 'Ordered', 'ok']],
            ['Developer 20 vol', '5', '11', '4', ['Reorder', 'flag']],
            ['Keratin mask 500 ml', '6', '3', '1', ['OK', 'ok']],
            ['Serum, retail', '9', '6', '2', ['Reorder soon', 'flag']],
            ['Shampoo 250 ml, retail', '14', '8', '3', ['OK', 'ok']],
          ],
        },
        { type: 'alert', text: 'Retail count mismatch: 9 items sold but not deducted this month, ₹6,300 at cost.', action: 'Check count' },
      ],
    },
    {
      id: 'staff',
      title: 'Stylists',
      meta: 'This month',
      heading: 'A scorecard everyone can see the same way',
      caption:
        'Services, rebooking, retail sold and commission for each stylist, calculated from the records of the month. The stylist sees their own, so month end stops being an argument.',
      blocks: [
        {
          type: 'table',
          cols: ['Stylist', 'Chair use', 'Rebook', 'Retail', 'Commission'],
          rows: [
            ['Meera', '92%', '68%', '₹14,200', '₹38,400'],
            ['Rohit', '88%', '61%', '₹9,800', '₹33,100'],
            ['Anita', '41%', '35%', '₹2,100', '₹14,900'],
            ['Kabir', '38%', '29%', '₹1,600', '₹12,300'],
          ],
        },
        { type: 'title', text: 'Rebooking rate' },
        {
          type: 'bars',
          items: [
            { label: 'Meera', value: 68, display: '68%' },
            { label: 'Rohit', value: 61, display: '61%' },
            { label: 'Anita', value: 35, display: '35%', tone: 'muted' },
            { label: 'Kabir', value: 29, display: '29%', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'packages',
      title: 'Packages and approvals',
      meta: 'Needs a decision',
      heading: 'Discounts and packages with a paper trail',
      caption:
        'Anything above the limit you set waits for a one-tap approval with a reason attached. Package balances show what is owed to clients and what is about to expire.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Waiting for approval',
              cards: [
                { title: '25% off bridal package', meta: 'Asked by front desk. Reason: referral', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
                { title: 'Free keratin add-on', meta: 'Asked by Anita. Reason: service redo', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
              ],
            },
            {
              name: 'Packages ending soon',
              cards: [
                { title: 'Sana Khan, facial x6', meta: '2 sessions left, ends 30 Oct', tag: ['Call', 'late'] },
                { title: 'Ritu Menon, hair spa x4', meta: '1 session left, ends 12 Nov', tag: ['Call', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Tuesday, before and after.',
  dayLede: 'What changes is not the work. It is that the work leaves a record, and the record does the chasing.',
  day: [
    {
      time: '9:30',
      before: 'You open the shop and check the diary. You remember a shade is low but not which one.',
      after: 'You open the Today screen. Six items need a decision. The low shade is already on an order.',
    },
    {
      time: '11:00',
      before: 'A regular books after four months. You find out she was going elsewhere.',
      after: 'She was flagged at week six, Meera called, and she rebooked before she drifted.',
    },
    {
      time: '1:00',
      before: 'A stylist uses an unusual amount of colour. Nobody knows until the stock is counted.',
      after: 'Colour used per service is recorded. The overuse shows against that stylist that afternoon.',
    },
    {
      time: '4:30',
      before: 'A client wants a discount. The front desk calls you on the floor.',
      after: 'It lands as a one-tap approval on your phone with the reason attached.',
    },
    {
      time: '8:30',
      before: 'You count cash and UPI against the bill book. It is off by ₹400.',
      after: 'Verity shows the two visits that do not tie. You fix it in a minute.',
    },
    {
      time: 'Month end',
      before: 'Commission is added up by hand and one stylist disputes it.',
      after: 'The statement is ready on the 1st, and every stylist sees the same breakdown.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your salon actually runs, build Verity around it, move your data in, then stay on to make sure it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and your manager for a day. Walk the floor, see how a client moves from arrival to payment, and map how stock, staff and bills are tracked today.',
        you: 'Two to three hours of your time and your manager’s. Access to your current diary, bill book and stock sheet.',
        get: 'A written map of your salon: services and price list, stylists and shifts, the stock list and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your services, stylists, commission slabs, stock items, reorder points, approval limits and branches, and build the screens above around your terms.',
        you: 'Check the setup with your manager. Tell us where we got a rule wrong.',
        get: 'A working Verity with your salon’s real services, staff and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your client list, visit history, formulas, packages and stock from the sheets and apps you use. Train reception and stylists on the floor, not in a classroom.',
        you: 'Your client list and any history you have, in whatever form it exists. One hour with each role.',
        get: 'Your clients, history and stock inside Verity, and a team that has used it on real bills.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks with you, tune the lists and rules, and handle changes as the salon changes.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps matching how the salon runs, with someone responsible for it.',
      },
    ],
    bring: [
      'Your services and price list',
      'Your client list, even if it is a phone book or diary',
      'Your stock list with supplier names and costs',
      'Your commission and incentive rules, as you apply them today',
      'Your stylists’ shifts and weekly offs',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your manager needs a few more.',
    after: 'Nobody is hired to run Verity. Visits are recorded as part of the bill you already make, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask your salon a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own client, service, staff and stock records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which regulars have not visited in 90 days?',
        a: '112 clients are past 90 days. 31 of them spent over ₹20,000 last year.',
        rows: [['Meera’s clients', '41'], ['Rohit’s clients', '33'], ['Anita’s clients', '22'], ['Kabir’s clients', '16']],
        action: 'Create follow-up tasks for each stylist',
      },
      {
        q: 'Which stylist has the best rebooking rate this month?',
        a: 'Meera, at 68%, followed by Rohit at 61%. Anita and Kabir are below 40%.',
        rows: [['Meera', '68%'], ['Rohit', '61%'], ['Anita', '35%'], ['Kabir', '29%']],
      },
      {
        q: 'Will we have enough colour for this weekend’s bookings?',
        a: 'Two shades fall short: 6.3 by 2 tubes and 7.1 by 1. The supplier delivers Thursday, which covers Saturday.',
        action: 'Raise the order today',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Staff still make the calls and messages, Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A client passes their usual gap',
      then: ['Added to the win-back list with history', 'Task assigned to their usual stylist', 'Outcome recorded: booked, declined or unreachable'],
    },
    {
      when: 'A new client has not returned in 30 days',
      then: ['Flagged with what they had done', 'Task to the stylist who served them', 'Interval starts once they return'],
    },
    {
      when: 'A service is completed',
      then: ['Products used deducted from stock', 'Visit added to the client’s history', 'Commission credited to the stylist'],
    },
    {
      when: 'Stock falls below its reorder point',
      then: ['Checked against next week’s bookings', 'Order drafted to the supplier', 'Stock updated when delivery is received'],
    },
    {
      when: 'A discount is above your limit',
      then: ['Held for approval', 'Routed to you with the reason', 'Decision recorded against the bill'],
    },
    {
      when: 'A package has 30 days left',
      then: ['Balance flagged on the client', 'Task to rebook the remaining sessions', 'Expiry recorded if unused'],
    },
  ],

  rules: {
    heading: 'The rules a salon has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant is not rebuilding them from a bill book.',
    items: [
      {
        name: 'GST on salon services and products',
        what: 'Salon and beauty services moved to 5% without input tax credit from 22 September 2025. Products sold over the counter are taxed at their own goods rates.',
        how: 'Services and product sales are separate lines on each visit, so the split your accountant needs is already clean at month end.',
        source: { name: 'Business Today, citing CBIC', url: 'https://www.businesstoday.in/amp/india/story/gst-rate-cut-salon-visits-gyms-yoga-classes-to-get-cheaper-from-sept-22-says-cbic-494193-2025-09-16' },
      },
      {
        name: 'Client data and consent',
        what: 'Phone numbers, photos and health details about clients are personal data. India’s data protection rules were notified in November 2025, and most duties start to apply over the following 12 to 18 months.',
        how: 'Client data sits in one permissioned place, with who viewed or changed it recorded, instead of in personal phones and photo galleries.',
        source: { name: 'AZB Partners on the DPDP framework', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Patch tests and allergy records',
        what: 'Chemical services should be preceded by a patch test and a record of any reaction. If a reaction happens, you need to show what was done and what was used.',
        how: 'Patch-test results, product batches used and any reaction are kept on the client record and visible to whoever treats them next.',
      },
      {
        name: 'Staff records under state shop rules',
        what: 'Most states require records of working hours, weekly offs and leave under their Shops and Establishments rules. Details differ by state, so check your own.',
        how: 'Shifts, attendance and leave are recorded against each person, so the register exists without a separate notebook.',
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A stylist should not see everyone’s pay. Reception should not edit stock costs. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the salon growing or drifting?', sees: 'Takings against last year, retention, chair use, retail attachment, and every branch side by side.' },
    { role: 'Manager', question: 'What needs sorting this week?', sees: 'Roster gaps, stock short for the weekend, win-back list, approvals waiting.' },
    { role: 'Stylist', question: 'What should I know about this client?', sees: 'History, formulas, allergies, package balance, and their own scorecard and commission.' },
    { role: 'Reception', question: 'Who is coming and what is pending?', sees: 'Today’s schedule, clients due to rebook, package balances, payments pending.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Daily takings by mode, supplier payables, discounts and write-offs, GST split.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your online booking app or diary, if you use one. We map it during setup.',
      'Your billing machine or app. We record the visit and payment from it.',
      'WhatsApp for talking to clients. Staff send the messages; Verity tells them who and when.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Take bookings from clients online.',
      'Send messages to clients on its own.',
      'File your returns or run your payroll.',
      'Replace your accountant.',
    ],
    migration:
      'We bring your client list, history and stock across from the spreadsheets, apps or notebooks you use now, in stages, so the salon keeps running while it happens.',
  },

  faqHeading: 'Questions salon owners ask.',
  faqs: [
    [
      'Will my stylists actually use it?',
      'It only works if the visit is recorded, so we set it up so that recording takes seconds and sits where they already work. We train on the floor with real bills, not in a classroom, and stylists get something back: their own scorecard and commission, visible and unarguable.',
    ],
    [
      'Does Verity take client bookings?',
      'No. If you use an online booking app or a diary, it keeps doing that job and we map it during setup. Verity records the visit and gives you the picture around it.',
    ],
    [
      'Can it send WhatsApp messages to my clients?',
      'Not by itself. Verity builds the win-back list and assigns the follow-up to the right person, and your team sends the message or makes the call. The outcome is then recorded.',
    ],
    [
      'I only have 4 chairs. Is this too much for me?',
      'A four-chair salon has the same leaks, with less spare time to notice them. We set up only what you need, and the 4-week process is the same.',
    ],
    [
      'Can I see all my branches together?',
      'Yes. Each branch is a location in one system. A client is the same person across branches, and takings, chair use, retention and stock can be compared side by side.',
    ],
    [
      'Who can see my client data?',
      'Only the people you allow. Access is set by role, so reception, stylists, managers and your accountant each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'Will it calculate commission the way I do?',
      'It uses the slabs you give us, including retail incentives and different rates per stylist or service. We set these up in week 2 and check them against a past month before go-live.',
    ],
    [
      'How long before I see results?',
      'The win-back list and stock shortage warnings need only your existing client and stock data, so they are the first things we aim to have working. Utilisation and rebooking trends become reliable after a few weeks of recorded visits.',
    ],
    [
      'What does it cost?',
      'It depends on the number of branches, staff and what you want set up. Message us and we will give you a clear number after a short conversation about how your salon runs.',
    ],
  ],

  related: ['spas', 'gyms', 'fitness-studios', 'yoga-studios', 'beauty-stores', 'cosmetics-stores'],

  ctaHeading: 'Start with the regulars who stopped coming.',
  ctaLede:
    'Tell us how your salon runs and we will show you the lapsed-client list, the stock shortages and the empty hours it would find, using your own numbers.',
};
