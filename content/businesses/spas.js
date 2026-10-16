export default {
  schema: 2,
  slug: 'spas',
  status: 'published',
  plural: 'spas',
  subject: 'spa',
  checked: '15 October 2026',

  seo: {
    title: 'Spa management software for Indian spas | Verity',
    description:
      'Fourteen quiet losses in a spa: idle rooms, unredeemed packages, oil and linen waste, therapist gaps, hygiene lapses and hotel splits, and the Verity screens that fix them.',
    keywords: [
      'spa management software India',
      'spa package and membership liability tracking',
      'therapist and treatment room scheduling',
      'spa consumables and linen tracking',
      'hotel spa revenue share tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'workforce', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for spas',
    headline: 'A spa sells one thing: a quiet hour. Verity makes sure every hour is used, paid for and accounted for.',
    lede:
      'A spa has three things that can only be sold once: a room, a therapist and an hour. When any of the three sits idle, the money is gone. On top of that come prepaid packages, oils and linen that disappear into treatments, and guests whose health details must be right every time. Verity keeps all of it in one place.',
    oneLine:
      'One system that knows every room and therapist by the hour, every package still owed, every bottle of oil used per treatment and every guest’s health notes.',
    note: 'Your reception billing and any reservation tool stay. Verity records the treatment delivered and what stands behind it.',
    screen: 'owner',
    screenNote: 'rooms, therapists, packages and supplies',
  },

  today: {
    heading: 'The spa feels calm. The numbers behind it rarely are.',
    paragraphs: [
      'A good spa hides its working. Guests see soft light and a smooth hand-over from reception to the room. Behind it, the manager is juggling a therapist who has called in sick, a couple’s suite that has to be reset in fifteen minutes, a package guest who wants to use her last two sessions, and a hotel partner who expects a revenue share.',
      'The information lives in a reservation diary, a billing screen, a stock register, a laundry book and the manager’s head. Each is accurate on its own. Together they cannot answer simple questions: how many packages are still unredeemed, which therapist uses the most oil, how long a room really stays empty between guests.',
      'Because the work is personal and unhurried, small leaks go unseen. An hour that was never filled, a treatment given free as a gesture, a towel count that does not match the laundry. They all look small, and they are a large part of what the spa could have kept.',
    ],
    stack: ['Reservation diary or app', 'Billing screen', 'Package cards or register', 'Stock and oil register', 'Laundry book', 'Therapist rota on WhatsApp'],
    stackNote: 'Each does its own job well. The leaks are between them.',
  },

  painsHeading: 'Where a spa actually loses money.',
  painsLede:
    'These are the situations spa owners and managers describe most. For each: what it looks like on a normal day, what it costs, and what Verity does.',
  pains: [
    {
      area: 'Rooms and time',
      title: 'Treatment rooms stand empty between guests',
      scene:
        'The Swedish massage room is booked at 11 and 2, with nothing in between. A walk-in at 12:30 is told there is no space because the diary shows no gaps of 90 minutes. The room is empty for 3 hours.',
      cost:
        'Example arithmetic: one room that earns ₹2,500 an hour and sits empty for two hours a day loses ₹5,000 a day, about ₹1.5 lakh a month. Across five rooms the figure is large.',
      fix:
        'Rooms are held as a schedule with each treatment’s length and reset time. Verity shows the gaps by room and day, so a short treatment can fit a short gap and the slow hours become a number you can price or fill.',
      screen: 'rooms',
    },
    {
      area: 'Rooms and time',
      title: 'Therapist, room and treatment do not line up',
      scene:
        'A deep tissue session is booked with a therapist who is not trained in it. A couples massage is booked into a single room. The front desk finds out an hour before.',
      cost:
        'A guest moved at the last minute, a therapist under stress and a refund or a free add-on to settle the matter.',
      fix:
        'Each therapist record lists the treatments they are trained in, their shift and their day off. The schedule only offers a therapist, a room and a time that fit together, and a clash shows before the guest arrives.',
      screen: 'rooms',
    },
    {
      area: 'Packages',
      title: 'Prepaid packages are a liability nobody is counting',
      scene:
        'Over the year the spa sold 220 packages of 6 or 10 sessions. Many are only half used. The register is a notebook, and a guest claims two sessions that nobody can confirm.',
      cost:
        'Example arithmetic: 220 packages at an average ₹12,000 with 40% unredeemed is ₹10.5 lakh of services owed. If they expire unused, it can turn into a dispute. If they are claimed late, it is a delivery cost with no new cash.',
      fix:
        'Each package is a record with sessions, value, expiry and who used it. Every treatment deducts a session. Verity shows the total owed, packages near expiry, and guests who have not come back for their last sessions.',
      screen: 'packages',
    },
    {
      area: 'Packages',
      title: 'Complimentary treatments and voucher redemptions slip through',
      scene:
        'A manager gives a free foot massage as an apology. A gift voucher bought from a deal site is redeemed by someone who is not the buyer. Neither is recorded the same way twice.',
      cost:
        'Free treatments and unverified vouchers use therapist time and room hours that could have been sold. Without a record, you cannot tell kindness from leakage.',
      fix:
        'Complimentary treatments need a reason and an approver. Vouchers and gift cards are records with a code, value and expiry, so redemption is checked and logged once.',
      screen: 'packages',
    },
    {
      area: 'Supplies',
      title: 'Oils, creams and disposables used without a standard',
      scene:
        'One therapist uses 15 ml of oil for a 60 minute massage, another uses 35. Disposable slippers and eye masks go into guests’ bags. No one knows the product cost of a treatment.',
      cost:
        'Consumables are a real share of a treatment’s cost. Without a standard per treatment, the price may not cover it, and you cannot see who overuses.',
      fix:
        'Each treatment has a standard recipe: oil, towels, disposables. The treatment record deducts the standard quantity from stock, and an overuse or shortfall shows against the therapist and the month.',
      screen: 'supplies',
    },
    {
      area: 'Supplies',
      title: 'Towels and linen go missing between the spa and the laundry',
      scene:
        'Fifty towels are sent out Monday and 46 come back. The laundry says 50. Over a month the count of white towels slowly drops, and nobody can say where.',
      cost:
        'Replacing linen is a steady cost. Worse, a lack of clean towels in a busy hour means a delayed treatment.',
      fix:
        'Linen is counted out and in against each laundry batch, and a gap is logged on the batch. Clean stock per day is compared with the day’s treatments, so a shortage is seen the day before.',
      screen: 'supplies',
    },
    {
      area: 'Hygiene',
      title: 'Room reset and sanitation depend on who is on shift',
      scene:
        'A room is turned over in 10 minutes on a rush day and 25 on a calm one. Steam room and jacuzzi cleaning is signed on a sheet that is filled in at the end of the day.',
      cost:
        'A guest who finds a room not ready, or an inspection that finds a missed sheet, can hurt a reputation that took years to build.',
      fix:
        'Each room reset is a checklist with a timestamp and the person who did it. Water, steam and heater checks are recurring tasks, and anything missed is flagged to the duty manager.',
      screen: 'care',
    },
    {
      area: 'Guests',
      title: 'Health notes and consent are incomplete or on paper',
      scene:
        'A pregnant guest is booked for a hot stone treatment. The intake form was filled in on paper, in a drawer, and the therapist never saw it.',
      cost:
        'A safety risk to the guest and a serious risk to the spa’s name. Guests also expect their health details to be private.',
      fix:
        'Health form, allergies, injuries and consent sit on the guest record before the first treatment. The therapist sees the notes and any contraindication flag on their own screen, and access to them is limited to the staff who need it.',
      screen: 'care',
    },
    {
      area: 'Guests',
      title: 'Guests who loved the first visit are never invited back',
      scene:
        'A guest came for a signature massage in March and has not returned. The front desk has no list of first-timers, or of anyone who has gone quiet.',
      cost:
        'Example arithmetic: 150 guests who would each spend ₹6,000 across three visits a year is ₹9 lakh. Losing a third quietly is ₹3 lakh a year.',
      fix:
        'Visits are recorded per guest, so lapsed and first-time guests are listed with their last treatment and therapist. A follow-up task goes to the person who knows them, and the result is recorded.',
      screen: 'packages',
    },
    {
      area: 'People',
      title: 'Therapists are hard to find, train and keep',
      scene:
        'A trained therapist leaves for another spa. The replacement has no formal training and takes two months to reach the same standard. Guests ask for the one who left.',
      cost:
        'An industry voice has long noted that Indian spas often have to poach good therapists or hire people without formal training in anatomy and hygiene, and the account of the guest goes with them.',
      fix:
        'Training, certificates and treatments cleared for each therapist are on their record. Guests belong to the spa, with history and preferences. When a therapist leaves, the handover list shows regular guests and their usual treatment.',
      screen: 'team',
      source: {
        name: 'Spa Business, 2010, interview with an industry consultant',
        url: 'https://www.spabusiness.com/wellness-news/India-to-require-20000-new-therapists-by-2012/231333',
      },
    },
    {
      area: 'People',
      title: 'Incentives, tips and attendance argued each month',
      scene:
        'A therapist is paid a base plus a per treatment incentive plus a share of tips. At month end, the numbers are counted from the diary and the billing screen, and they rarely match.',
      cost:
        'Hours of the manager’s time, and a therapist who feels short-changed in a market where good ones are scarce.',
      fix:
        'Each treatment is recorded against the therapist who gave it. Verity builds the month’s statement from your slabs, includes attendance and late arrivals, and shows the same breakdown to the therapist.',
      screen: 'team',
    },
    {
      area: 'Equipment',
      title: 'Steam rooms, heaters and pools fail at the worst time',
      scene:
        'The steam generator stops on a Saturday. The service engineer was last called six months ago. Three treatments are cancelled and the package guests are upset.',
      cost:
        'A lost day’s treatments, refunds and an emergency repair that costs more than planned servicing.',
      fix:
        'Each piece of equipment has a service schedule, a log of faults and the vendor’s contact. Recurring checks create tasks, and a downtime period blocks the room in the schedule so nobody books into it.',
      screen: 'upkeep',
    },
    {
      area: 'Hotel and partners',
      title: 'The host hotel’s revenue share and deal-site payouts do not reconcile',
      scene:
        'A hotel spa pays the property a share on in-house guests, a different share on outside guests. A deal site sends a monthly statement that does not match the vouchers redeemed.',
      cost:
        'Overpayment to the host, or a lengthy dispute with a partner about what is due. Each month brings the same argument.',
      fix:
        'Each treatment records the guest source: in-house, walk-in, voucher or partner. Verity totals them by source and month, so the host’s share and the partner’s statement can be checked against your own records.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'Margin per treatment, room and therapist is a guess',
      scene:
        'You know the spa is busy. You do not know whether the aroma massage earns more than the facial, or whether the new couples suite pays for its space.',
      cost:
        'Time and floor space go to treatments that look popular and earn little.',
      fix:
        'For each treatment, Verity shows price, product cost, therapist cost and room hours used, and ranks them. The owner’s screen shows the week’s idle hours, packages near expiry and supplies running out.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers behind the problem.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '5%',
      text: 'GST on beauty and physical well-being services, including spas, from 22 September 2025, without input tax credit. Before that the usual rate was 18% with credit.',
      source: { name: 'Business Today, citing CBIC', year: '2025', url: 'https://www.businesstoday.in/amp/india/story/gst-rate-cut-salon-visits-gyms-yoga-classes-to-get-cheaper-from-sept-22-says-cbic-494193-2025-09-16' },
    },
    {
      figure: 'USD 2.02 billion',
      text: 'was one research firm’s estimate of India’s spa market in 2024, with forecast growth of about 9.7% a year to 2033.',
      source: { name: 'IMARC Group, India spa market report', year: '2025', url: 'https://www.imarcgroup.com/india-spa-market' },
    },
    {
      figure: '20,000',
      text: 'extra therapists was one consultant’s 2010 estimate of what India would need by 2012. She warned of spas having to poach good therapists or hire people without formal training in anatomy, physiology and hygiene.',
      source: { name: 'Spa Business, interview with HCB Associates', year: '2010', url: 'https://www.spabusiness.com/wellness-news/India-to-require-20000-new-therapists-by-2012/231333' },
    },
    {
      figure: '13 Nov 2026',
      text: 'is the date the second phase of India’s data protection rules is set to start, twelve months after they were notified in November 2025. Guest health and contact details are personal data.',
      source: { name: 'AZB Partners on the DPDP Rules', year: '2025', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
    },
  ],
  factsNote:
    'The market size is a research firm’s estimate and such estimates differ widely. The therapist figure is from 2010 and is old, though the training gap it describes is still often cited. They show the scale and the pressure points, not what your spa will see.',

  screensHeading: 'The screens a spa would use every day.',
  screensLede: 'Seven views, each for one job, set up in your own terms: rooms, therapists, treatments and packages.',
  screens: [
    {
      id: 'owner',
      title: 'Spa / Today',
      meta: 'Property: Lotus Spa, Goa',
      heading: 'The manager’s morning view',
      caption:
        'Room use, packages owed, supplies low and what needs a decision, with the host hotel’s share for the month so far.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Room hours used', value: '64%', note: 'of open hours' },
            { label: 'Packages owed', value: '₹10.5 L', note: '412 sessions' },
            { label: 'Expiring in 30 days', value: '38', note: 'packages' },
            { label: 'Supplies low', value: '5', note: 'lines' },
          ],
        },
        { type: 'title', text: 'Revenue by guest source, this month' },
        {
          type: 'bars',
          items: [
            { label: 'In-house hotel guests', value: 58, display: '₹6.4 L' },
            { label: 'Walk-ins', value: 27, display: '₹3.0 L' },
            { label: 'Deal-site vouchers', value: 11, display: '₹1.2 L' },
            { label: 'Corporate', value: 4, display: '₹0.4 L' },
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Steam room service due', meta: 'Last done 5 months ago, next slot Tuesday', tag: ['Book', 'late', 'Done', 'ok'] },
            { name: '3 complimentary treatments need a reason', meta: 'Given this week, no approver', tag: ['Review', 'flag', 'Approved', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'rooms',
      title: 'Rooms and therapists',
      meta: 'Today’s schedule',
      heading: 'Every room and therapist by the hour',
      caption:
        'The day’s treatments laid out by room and therapist, with reset time, empty gaps and a clash shown before the guest arrives.',
      blocks: [
        {
          type: 'table',
          cols: ['Room', '11:00', '12:30', '2:00', 'Idle'],
          rows: [
            ['Room 1, massage', 'Priya N.', 'Reset', 'Aarti', '30 min'],
            ['Room 2, massage', 'Empty', 'Empty', 'Neha', ['3 hours', 'late', 'Filled', 'ok']],
            ['Couples suite', 'Booked', 'Reset', ['No couple therapist', 'flag', 'Added', 'ok'], '1 hour'],
            ['Wet room, scrub', 'Rahul', 'Rahul', 'Empty', '90 min'],
          ],
        },
        { type: 'alert', text: 'Neha is booked for deep tissue at 2:00 and is not cleared for it. Aarti is free.', action: 'Swap therapist' },
      ],
    },
    {
      id: 'packages',
      title: 'Packages and vouchers',
      meta: 'Sessions owed',
      heading: 'What is still owed to guests, and what is about to lapse',
      caption:
        'Every package with sessions left and expiry, vouchers by code and value, and complimentary treatments with a reason and approver.',
      blocks: [
        {
          type: 'table',
          cols: ['Guest', 'Package', 'Left', 'Expires', 'Status'],
          rows: [
            ['Ritu Menon', 'Ayurvedic x 10', '4 of 10', '12 Nov', ['Call', 'flag', 'Booked 28 Oct', 'ok']],
            ['Anita Rao', 'Deep tissue x 6', '2 of 6', '30 Oct', ['Call', 'late']],
            ['Sana Khan', 'Facial x 6', '5 of 6', '15 Feb', ['OK', 'ok']],
            ['Voucher KB2291', 'Deal site, ₹3,500', 'Unused', '30 Nov', ['Not redeemed', 'muted']],
          ],
        },
        {
          type: 'board',
          columns: [
            {
              name: 'Complimentary this week',
              cards: [
                { title: 'Foot massage, Room 2', meta: 'Reason missing · Manager shift', tag: ['Add reason', 'flag', 'Approved', 'ok'] },
              ],
            },
            {
              name: 'First-time guests not back',
              cards: [
                { title: 'Tara M., signature massage, 3 Sep', meta: 'Therapist Aarti · 6 weeks', tag: ['Call', 'flag', 'Booked', 'ok'] },
                { title: 'Kabir S., hot stone, 9 Sep', meta: 'Therapist Rahul · 5 weeks', tag: ['Call', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'supplies',
      title: 'Oils, disposables and linen',
      meta: 'Use against standard',
      heading: 'What each treatment should use, and what it did',
      caption:
        'Oil, disposables and towels used per treatment against the standard, by therapist, with the laundry count in and out.',
      blocks: [
        {
          type: 'table',
          cols: ['Therapist', 'Treatments', 'Oil used', 'Standard', 'Variance'],
          rows: [
            ['Aarti', '42', '630 ml', '630 ml', ['0%', 'ok']],
            ['Neha', '38', '1,140 ml', '570 ml', ['+100%', 'late']],
            ['Rahul', '45', '720 ml', '675 ml', ['+7%', 'flag']],
            ['Priya N.', '36', '540 ml', '540 ml', ['0%', 'ok']],
          ],
        },
        { type: 'alert', text: 'Laundry batch L-218: 50 towels sent, 46 received.', action: 'Log gap' },
      ],
    },
    {
      id: 'care',
      title: 'Guest and hygiene records',
      meta: 'Health notes and room checks',
      heading: 'The right details before the treatment, a clean room after it',
      caption:
        'A guest’s health form, consent and notes visible to the therapist, with each room’s reset and the day’s recurring hygiene checks.',
      blocks: [
        {
          type: 'record',
          title: 'Meera Joshi',
          sub: 'Guest since January · Signature massage, 60 min',
          fields: [
            ['Health form', ['Complete', 'ok']],
            ['Alert', ['Pregnant, 5 months', 'flag']],
            ['Avoid', 'Hot stones, deep abdominal work'],
            ['Therapist cleared', 'Aarti'],
            ['Consent', ['Signed 3 Jan', 'ok']],
          ],
          timeline: [
            ['Today', 'Prenatal massage, Room 1, Aarti'],
            ['12 Aug', 'Aroma massage, Room 2'],
            ['Note', 'Prefers low light. Allergic to nut oils.'],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Room 1 reset, towels and floor', meta: 'Done 10:45 by Sunita', done: true },
            { text: 'Steam room cleaning, afternoon', meta: 'Due 3:00', done: false },
            { text: 'Jacuzzi water test', meta: 'Due 4:00', done: false },
          ],
        },
      ],
    },
    {
      id: 'team',
      title: 'Therapists',
      meta: 'This month',
      heading: 'One statement every therapist can read',
      caption:
        'Treatments given, attendance, guests rebooked, tips and the month’s incentive for each therapist, with the treatments they are cleared for.',
      blocks: [
        {
          type: 'table',
          cols: ['Therapist', 'Treatments', 'Rebooked', 'Tips', 'Incentive'],
          rows: [
            ['Aarti', '42', '71%', '₹6,200', '₹9,400'],
            ['Neha', '38', '52%', '₹3,100', '₹6,800'],
            ['Rahul', '45', '64%', '₹5,400', '₹8,900'],
            ['Priya N.', '36', '58%', '₹4,800', '₹7,300'],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Aarti: Ayurvedic therapy certificate', meta: 'Renewal in 5 weeks', tag: ['Renew', 'flag', 'Renewed', 'ok'] },
            { name: 'Neha: deep tissue training', meta: 'Not yet cleared', tag: ['Train', 'late', 'Cleared', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'upkeep',
      title: 'Equipment',
      meta: 'Service and downtime',
      heading: 'Every machine with its next service, so nothing fails on a Saturday',
      caption:
        'Steam generators, heaters, pools and air conditioning with the last service, the next due date and the vendor, and a downtime block in the room schedule.',
      blocks: [
        {
          type: 'table',
          cols: ['Equipment', 'Last service', 'Next due', 'Vendor', 'Status'],
          rows: [
            ['Steam generator', '5 months ago', 'Overdue', 'Aqua Steam', ['Overdue', 'late', 'Booked Tue', 'ok']],
            ['Hot stone heater', '2 months ago', 'In 4 months', 'Local', ['OK', 'ok']],
            ['Jacuzzi pump', '4 months ago', 'In 2 weeks', 'Splash Care', ['Soon', 'flag']],
            ['Air conditioning, wet room', '6 months ago', 'Overdue', 'CoolServe', ['Overdue', 'late']],
          ],
        },
        { type: 'alert', text: 'Steam room blocked in the schedule on Tuesday 10:00 to 1:00 for service. 2 bookings moved.', action: 'See moves' },
      ],
    },
  ],

  dayHeading: 'The same Saturday at the spa, before and after.',
  dayLede: 'The guest experience should feel the same. What changes is that the spa remembers everything the guest and the staff do not have time to.',
  day: [
    {
      time: '9:30',
      before: 'The manager checks the rota on WhatsApp. One therapist is not yet confirmed.',
      after: 'The Today screen shows rooms, therapists and who is cleared for what. A gap is already flagged.',
    },
    {
      time: '11:00',
      before: 'A guest asks to use her last two package sessions. The notebook is in the back office.',
      after: 'Her record shows 2 of 10 left, expiring 30 Oct. The sessions are deducted at the end of the treatment.',
    },
    {
      time: '12:30',
      before: 'A walk-in asks for 60 minutes. The diary shows no gap of 90 minutes.',
      after: 'Room 2 shows a 3 hour gap with reset time included. The walk-in is seated.',
    },
    {
      time: '2:00',
      before: 'A prenatal guest’s paper form is in a drawer. The therapist begins without it.',
      after: 'The guest’s flag and the contraindications appear on the therapist’s screen before she enters.',
    },
    {
      time: '5:00',
      before: 'The steam generator stops, and only now do you check when it was last serviced.',
      after: 'It was marked overdue three weeks ago, and the service was booked for Tuesday.',
    },
    {
      time: 'Month end',
      before: 'You dispute the deal-site statement and the hotel share from memory.',
      after: 'Revenue by guest source is already totalled. You send two numbers instead of a story.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks, around your rooms and your team.',
    lede:
      'You do not get a login and a manual. We learn how a day runs in your spa, build Verity around it, move your guests and packages in, then stay on until it holds.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day at the spa, from opening to closing. Follow one guest from arrival to checkout, watch a room reset and the laundry run, and note how packages and vouchers are tracked.',
        you: 'Two to three hours of your time and your manager’s. The treatment menu, package terms, hotel agreement and a sample of the register.',
        get: 'A written map of your spa: rooms, treatments and timings, therapist skills, package rules and the leaks to fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up rooms and reset times, treatments with standard products and linen, therapists with skills and shifts, package and voucher rules, hygiene checklists, equipment schedules and guest sources.',
        you: 'Check the treatment standards with your head therapist. Tell us where a time or a quantity is wrong.',
        get: 'A working Verity with your treatments, standards and checklists loaded, ready for guest data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in guests, open packages with sessions left, vouchers, therapist records and stock. Train reception, therapists and housekeeping on a real day, not in a classroom.',
        you: 'Your package register and guest list, in whatever form. One hour with each role.',
        get: 'Your guests, packages and stock inside Verity, and a team that has run a real day on it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review idle hours, package liability and supply use with you, and tune checklists and standards as the menu changes.',
        you: 'A short monthly review of room use, packages and supply cost.',
        get: 'A setup that keeps pace with new treatments, new rooms and new partners, with someone responsible for it.',
      },
    ],
    bring: [
      'Your treatment menu with timings and prices',
      'Package and voucher terms, and the open register',
      'Therapist list with skills, certificates and shifts',
      'Product and linen list, with how much each treatment uses',
      'Hotel or partner agreements on revenue share',
      'Equipment list with vendor contacts',
    ],
    time: 'About 8 to 11 hours of your own time across the four weeks, mostly in week 1. Your manager and head therapist need a few more.',
    after: 'Nobody extra is hired. Treatments are recorded as part of the work already done, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask the spa a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own room, package, supply and guest records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'How many package sessions are we still owed, and which expire this month?',
        a: '412 sessions worth ₹10.5 lakh are owed. 38 packages worth ₹3.1 lakh expire within 30 days, and 14 of those guests have not visited in 6 weeks.',
        rows: [['Ayurvedic packages', '14, ₹1.4 L'], ['Deep tissue packages', '11, ₹0.9 L'], ['Facial packages', '9, ₹0.5 L'], ['Other', '4, ₹0.3 L']],
        action: 'Create call tasks for reception',
      },
      {
        q: 'Which therapist uses more oil than the standard?',
        a: 'Neha uses twice the standard, 1,140 ml for 38 treatments against 570 ml. Rahul is 7% over. The rest are on standard.',
        rows: [['Neha', '+570 ml'], ['Rahul', '+45 ml'], ['Aarti', '0 ml'], ['Priya N.', '0 ml']],
        action: 'Send a note to the head therapist',
      },
      {
        q: 'Which room has the most idle hours this week?',
        a: 'Room 2 had 19 idle hours, mostly 11 to 2 on weekdays. A 60 minute treatment would fit 11 of those gaps.',
        action: 'Add weekday-lunch offer task for the manager',
      },
    ],
  },

  automationHeading: 'The reminders nobody has time to give.',
  automationLede: 'Set once, then they run from your records. Staff still make the calls and the checks. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A treatment is marked complete',
      then: ['Package session deducted', 'Standard oil and linen taken from stock', 'Incentive credited to the therapist'],
    },
    {
      when: 'A package has 30 days left',
      then: ['Flagged on the guest record', 'Task to reception to rebook', 'Expiry or extension decision recorded'],
    },
    {
      when: 'A guest with a health alert is scheduled',
      then: ['Alert shown on the therapist’s screen', 'Treatment checked against contraindications', 'Therapist confirms before entry'],
    },
    {
      when: 'A room is vacated',
      then: ['Reset checklist opens with a timer', 'Housekeeping signs each step', 'Room returns to the schedule only when done'],
    },
    {
      when: 'A service date for equipment approaches',
      then: ['Task to the maintenance owner', 'Room blocked in the schedule for the visit', 'Service result logged on the equipment'],
    },
    {
      when: 'A laundry batch comes back',
      then: ['Count compared with the count sent', 'Gap logged on the batch', 'Clean stock updated for the day’s treatments'],
    },
  ],

  rules: {
    heading: 'The rules a spa has to keep up with.',
    lede:
      'Verity does not give legal, medical or tax advice and files nothing for you. It keeps the records these rules lean on in order, so you are not rebuilding them when an inspector or your accountant asks.',
    items: [
      {
        name: 'GST on spa services',
        what: 'Beauty and physical well-being services, which include spas, moved to 5% without input tax credit from 22 September 2025. This changes how purchase costs should be treated.',
        how: 'Services and product sales are separate lines, so the split your accountant needs is clean at month end.',
        source: { name: 'Business Today, citing CBIC', url: 'https://www.businesstoday.in/amp/india/story/gst-rate-cut-salon-visits-gyms-yoga-classes-to-get-cheaper-from-sept-22-says-cbic-494193-2025-09-16' },
      },
      {
        name: 'Guest health and contact data',
        what: 'Health forms, phone numbers and identity details are personal data. India’s data protection rules were notified in November 2025, with duties starting in phases over the next 18 months.',
        how: 'Guest details sit in one permissioned place, with who viewed or changed them recorded, instead of in paper files and personal phones.',
        source: { name: 'AZB Partners on the DPDP Rules', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Local licence, hygiene and premises rules',
        what: 'Local bodies and states commonly require a trade or health licence and may inspect hygiene, water and fire safety. Rules for spas and massage centres differ widely between cities and states.',
        how: 'Licence numbers, renewal dates and recurring hygiene and safety checks are on the property record, with tasks before they fall due.',
      },
      {
        name: 'Staff identity and working-hour records',
        what: 'Many places expect identity and address records for therapists, and states require records of hours, weekly offs and leave under their Shops and Establishments rules.',
        how: 'Each therapist’s documents, shifts and leave sit on their record, so the register is a by-product of the daily rota.',
      },
    ],
    note: 'Rules differ by city and state and change often. Confirm current requirements with your accountant or the local authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A therapist should not see another’s pay. Reception should not see health notes beyond what is needed. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the spa earning what its rooms could?', sees: 'Room hours used, packages owed, margin per treatment, revenue by guest source and the hotel share.' },
    { role: 'Spa manager', question: 'What needs sorting today?', sees: 'The day’s schedule, clashes, approvals waiting, equipment due, supplies running low and the rota.' },
    { role: 'Therapist', question: 'Who is my next guest and what should I know?', sees: 'Her schedule, the guest’s health notes and preferences, and her own statement and incentive.' },
    { role: 'Reception', question: 'Who is coming and what is owed?', sees: 'Today’s guests, package balances, vouchers to check, and follow-ups to make.' },
    { role: 'Housekeeping', question: 'Which rooms are next and what is short?', sees: 'Room reset list, linen counts, laundry batches and hygiene checks due.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your reservation tool or diary. We agree how bookings reach Verity during setup.',
      'Your billing screen at reception. The treatment and payment are recorded against the guest.',
      'WhatsApp for talking to guests. Staff send the messages; Verity tells them who and when.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Take reservations from guests online.',
      'Send messages or offers to guests on its own.',
      'Run your billing or print bills.',
      'File returns, run payroll or give medical advice.',
    ],
    migration:
      'We bring guests, open packages, vouchers, therapist records and stock across from your register, sheets and apps, in stages, so the spa keeps taking guests while it happens.',
  },

  faqHeading: 'Questions spa owners ask.',
  faqs: [
    [
      'Our therapists are not comfortable with screens. Will they use it?',
      'Recording a treatment takes a few taps on a single screen, and we train in the treatment rooms, not a classroom. Therapists also get something back: a clear statement of their treatments, tips and incentive each month.',
    ],
    [
      'Can Verity take reservations from guests?',
      'No. If you use a reservation app or a diary, it carries on. Verity records the treatment delivered and builds the schedule, packages and supplies around it.',
    ],
    [
      'Can it handle a spa inside a hotel with a revenue share?',
      'Yes. Each treatment records its guest source, so in-house, walk-in, voucher and corporate revenue are totalled by month. You can check the host’s share and any partner statements against your own records.',
    ],
    [
      'How are health forms kept private?',
      'Health details sit on the guest record with access limited by role. A therapist sees what she needs for the guest in front of her, reception sees fewer details, and every view or change is logged.',
    ],
    [
      'We have two properties. Can I see them together?',
      'Yes. Each property is a location in one system. A guest is one person across both, and room use, packages, supplies and revenue can be compared side by side.',
    ],
    [
      'Can it track how much oil each therapist uses?',
      'Yes, against a standard you set for each treatment. Because the recipe deducts the standard amount, the variance shows when a bottle runs out faster than the treatments given would explain.',
    ],
    [
      'Will it help with package expiry disputes?',
      'It keeps every package, session used and expiry on one record, shown to reception and the guest on request. A rule such as an extension for a missed month is recorded when approved.',
    ],
    [
      'How soon will I see anything useful?',
      'The package liability list and idle room hours need only your register and schedule, so they come first. Margin per treatment and therapist trends become reliable after a few weeks of recorded treatments.',
    ],
    [
      'What does it cost?',
      'It depends on the number of properties, rooms and staff, and what you want set up. Message us and we will give you a clear number after a short conversation about how your spa runs.',
    ],
  ],

  related: ['salons', 'gyms', 'yoga-studios', 'hotels', 'resorts', 'beauty-stores'],

  ctaHeading: 'Start with the packages you still owe.',
  ctaLede:
    'Tell us how your spa runs and we will show you the sessions owed, the idle room hours and the oil use per therapist, using your own numbers.',
};
