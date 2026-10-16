export default {
  schema: 2,
  slug: 'gyms',
  status: 'published',
  plural: 'gyms',
  subject: 'gym',
  checked: '15 October 2026',

  seo: {
    title: 'Gym management software for Indian gyms | Verity',
    description:
      'Fourteen leaks in a gym: lapsing renewals, early quitters, freezes, unpaid dues, idle trainers, full classes and broken machines, with the Verity screens that fix each.',
    keywords: [
      'gym management software India',
      'gym membership renewal and freeze tracking',
      'personal trainer utilisation and session tracking',
      'gym class capacity and attendance',
      'multi-branch gym membership software',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'workforce', 'schedule', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for gyms',
    headline: 'A gym is paid for members who stay, and loses the ones who quietly stop coming. Verity sees them leave first.',
    lede:
      'A gym sells time on a floor that is full at 7 a.m. and empty at 2 p.m. The money is in renewals, in members who keep turning up, in trainers whose day is full and in machines that work. Verity ties together membership, attendance, trainers, classes and equipment, so you can act before a member is gone.',
    oneLine:
      'One system that knows every member’s plan and attendance, every renewal coming up, every trainer’s day, every class’s fill rate and every machine’s service date.',
    note: 'Your entry system and your payment tool stay. Verity records the members, visits and dues around them.',
    screen: 'owner',
    screenNote: 'members, trainers, classes and branches',
  },

  today: {
    heading: 'The gym looks busy. The real picture is in who stopped coming.',
    paragraphs: [
      'Gym owners run the floor and the front desk. The business shows in the 7 a.m. crowd, the trainers’ chatter and the membership forms on the counter. What does not show is the member who came twice in January and not once since, the renewal that lapsed on the 14th, and the treadmill that has been off for nine days.',
      'The information is in pieces. Membership plans sit in one register or app, payments in a notebook or UPI history, attendance on a turnstile or a sign-in sheet, personal training sessions on a trainer’s phone and equipment faults in the head of the floor manager.',
      'Because a gym has a large base paying small amounts, no single leak looks big. A hundred members who do not renew, a dozen freezes done on a handshake and a trainer with three empty hours a day together make a very large number by year end.',
    ],
    stack: ['Membership register or app', 'Entry log or sign-in sheet', 'UPI and cash notebook', 'Trainers’ session notes', 'Class WhatsApp groups', 'Floor manager’s memory'],
    stackNote: 'Each is useful on its own. None of them tell you that a member is about to quit.',
  },

  painsHeading: 'Where a gym actually loses money.',
  painsLede:
    'These are the situations gym owners describe most. For each: what it looks like on a normal day, what it costs, and what Verity does.',
  pains: [
    {
      area: 'Members',
      title: 'Renewals lapse and nobody calls in time',
      scene:
        'Forty memberships end this month. The front desk calls those it remembers. A member whose plan ended on the 14th walks in on the 22nd and is told to pay again from scratch. Some do not come back.',
      cost:
        'Example arithmetic: 600 members on a ₹15,000 annual plan is ₹90 lakh. If 10 points of renewal slip because nobody called in time, that is ₹9 lakh a year.',
      fix:
        'Every plan has an end date. A renewal list shows who is due in the next 30 days, with attendance, plan, preferred trainer and amount due, and gives each call to a named person. The outcome, renewed, declined or unreachable, is recorded.',
      screen: 'renewals',
    },
    {
      area: 'Members',
      title: 'New members vanish within three months',
      scene:
        'January is a flood of joiners. By April a large share come once a week, then not at all. They are still on the books and no one notices until renewal, when they will not come back.',
      cost:
        'One CrossFit software company reported that 45% of new clients cancel within 90 days. Each one is a joining fee and months of fees you do not get.',
      fix:
        'Attendance is recorded for every visit. Verity flags a member whose visits drop below your threshold, such as no visit for 10 days, and gives a check-in task to their trainer, so the call comes before the cancellation.',
      screen: 'member',
      source: {
        name: 'Wodify data, via Morning Chalk Up, 2021 (a vendor)',
        url: 'https://morningchalkup.com/2021/06/17/wodify-blog-series-reveals-45-of-members-quit-after-90-days/',
      },
    },
    {
      area: 'Members',
      title: 'Freezes, transfers and extensions agreed on a handshake',
      scene:
        'A member travels for two months and asks for a freeze. The manager says yes. A different member is given three free weeks for a bad experience. A third transfers a plan to his brother. None of these is written down.',
      cost:
        'Plans get extended by memory, which means disputes. Free days given without a record are revenue you did not know you gave away.',
      fix:
        'Freeze, transfer and extension are requests with a reason, a start and end date, and an approver. The plan end date moves only when the request is approved, and the history is visible on the member.',
      screen: 'renewals',
    },
    {
      area: 'Members',
      title: 'Plan terms are not clear, and branches disagree',
      scene:
        'A member pays for one branch. Another branch refuses entry because the plan does not include it. The invoice does not say which tier it is.',
      cost:
        'A Mumbai consumer commission ordered a chain to refund half of an annual fee and pay ₹5,000 compensation when a member was refused at another branch and the plan tier was never explained.',
      fix:
        'Each plan is a record with its tier, branches covered, freeze rules and validity. The member sees the same terms the desk sees, and entry across branches checks the plan before the member arrives.',
      screen: 'member',
      source: {
        name: 'The Week, on a South Mumbai consumer commission order, 2024',
        url: 'https://www.theweek.in/wire-updates/national/2024/11/13/lgb2-mh-consumer-gym.html',
      },
    },
    {
      area: 'Money',
      title: 'Part payments, instalments and dues drift',
      scene:
        'A member paid ₹6,000 of ₹15,000 and promised the rest next week. Another is on a quarterly plan and the second instalment is 20 days overdue. The notebook has both, and no one has added it up.',
      cost:
        'Dues that are not chased become a quiet write-off. The member keeps using the floor while the plan runs.',
      fix:
        'A plan with instalments shows what is paid, what is due and when. Overdue dues appear on the renewals screen with the member’s attendance, and a task goes to the desk to collect.',
      screen: 'renewals',
    },
    {
      area: 'Sales',
      title: 'Walk-in enquiries and trial passes never followed up',
      scene:
        'Twenty people walk in on a Saturday. Six take a day pass to try the gym. The sales person speaks to those who seem keen, and the rest are written in a notebook that nobody reads.',
      cost:
        'Example arithmetic: if you convert 20% of 120 enquiries a month and a follow-up lifts it to 25%, that is 6 more members a month, worth about ₹90,000 on a ₹15,000 plan.',
      fix:
        'Every enquiry and trial pass is a lead with a source and a next step. Verity lists those due a follow-up with the plan they asked about, and records the outcome and the reason for no.',
      screen: 'enquiries',
    },
    {
      area: 'Trainers',
      title: 'Personal training sessions bought but not delivered, or delivered but not recorded',
      scene:
        'A member bought 24 PT sessions. The trainer says 20 are done. The member says 17. The sessions are in the trainer’s own notebook.',
      cost:
        'PT is the gym’s best-margin line, and a dispute over sessions is a refund request. Unused sessions that expire are liabilities.',
      fix:
        'Each PT package has a session balance. A session counts when both the trainer and the member confirm it, and the member can see the balance. Balances near expiry go on a list.',
      screen: 'trainers',
    },
    {
      area: 'Trainers',
      title: 'Some trainers are fully booked and others sit idle',
      scene:
        'Two trainers have no free slot between 6 and 9 a.m. while two others have eight idle hours a day. Members assigned to a busy trainer wait for weeks.',
      cost:
        'Idle trainer hours are paid for and earn nothing. Overbooked ones lose members to waiting.',
      fix:
        'Trainer shifts, PT sessions and floor duty are scheduled together. Utilisation per trainer per hour is shown, and the next PT enquiry is offered to the trainer with the most free time who fits the goal.',
      screen: 'trainers',
    },
    {
      area: 'Trainers',
      title: 'A trainer leaves and takes the members',
      scene:
        'A popular trainer resigns on the 30th. His PT clients, their programmes and their phone numbers were in his phone. Within a month, a dozen are at the gym down the road.',
      cost:
        'The loss of PT revenue plus the loss of floor members who trained with him.',
      fix:
        'The programme, history and balance for each member belong to the gym, not the trainer. When a trainer leaves, the handover list shows each client, their goal, sessions left and the next session, ready for reassignment.',
      screen: 'trainers',
    },
    {
      area: 'Floor',
      title: 'Classes are packed at 7 a.m. and half empty at 11',
      scene:
        'The 7 a.m. spin class turns people away. The 11 a.m. class has four people. Members complain about the first and the instructor is bored in the second.',
      cost:
        'A full class that turns people away loses members. An empty class costs an instructor’s fee and a studio you could use.',
      fix:
        'Each class has a capacity, bookings and attendance. Fill rate by class and time is shown, a waitlist is kept for full ones, and the weak slots become a number you can move or merge.',
      screen: 'classes',
    },
    {
      area: 'Floor',
      title: 'Machines break and stay broken',
      scene:
        'A treadmill has had an “out of order” note for nine days. A cable machine has a frayed wire that was flagged on a Tuesday. The AMC vendor was last called in June.',
      cost:
        'Members cannot use what they paid for, a broken machine is a safety risk, and a complaint turns into a cancelled plan.',
      fix:
        'Each machine has a service schedule, a fault log and the vendor’s contact. A fault becomes a task with an owner, and a machine marked out of order is listed until it is fixed.',
      screen: 'floor',
    },
    {
      area: 'Floor',
      title: 'Cleanliness, lockers and complaints handled by whoever is there',
      scene:
        'The changing room is not cleaned at 5 p.m. A member’s lost locker key is a two-day argument. A complaint on WhatsApp is seen by one person and never answered.',
      cost:
        'A quiet reason many members do not renew. Complaints that go unanswered are heard by other members.',
      fix:
        'Cleaning rounds are recurring checklists with timestamps. Complaints are records with an owner and a due date, and the owner screen shows complaints open for over 48 hours.',
      screen: 'floor',
    },
    {
      area: 'Safety',
      title: 'Health declarations and injuries are not on record',
      scene:
        'A member with a heart condition signs up at the desk. The form is in a drawer. Three months later, he feels dizzy during a session and nobody on the floor knows what he declared.',
      cost:
        'A safety risk to the member and a serious risk to the gym if an injury is disputed.',
      fix:
        'Each member has a health declaration, emergency contact and waiver on record. Trainers see a flag where it matters, and any injury or incident is logged with the time, the staff present and what was done.',
      screen: 'member',
    },
    {
      area: 'Owner',
      title: 'Several branches, one confused picture',
      scene:
        'Three branches keep their own registers. A member who moves between two is a new member each time. Collections arrive in different formats each week.',
      cost:
        'You cannot compare branches fairly, and a branch that is quietly losing members is visible only at year end.',
      fix:
        'Branches are locations in one system. A member is one person across branches, and renewals, attendance, trainer use, class fill and collections are side by side.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers behind the problem.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '45%',
      text: 'of new clients cancel within their first 90 days, according to one software firm’s data from CrossFit gyms, collected before the pandemic.',
      source: { name: 'Wodify data, via Morning Chalk Up (a vendor)', year: '2021', url: 'https://morningchalkup.com/2021/06/17/wodify-blog-series-reveals-45-of-members-quit-after-90-days/' },
    },
    {
      figure: '₹8,000 + ₹5,000',
      text: 'was the refund and compensation a South Mumbai consumer commission ordered a gym chain to pay after a member on a ₹16,000 standard plan was refused entry at another branch.',
      source: { name: 'The Week, on a consumer commission order', year: '2024', url: 'https://www.theweek.in/wire-updates/national/2024/11/13/lgb2-mh-consumer-gym.html' },
    },
    {
      figure: '₹25,000',
      text: 'was the membership fee in a Gurugram case where the commission held a gym liable for deficiency in service when facilities did not match its promises and a refund was not made.',
      source: { name: 'LiveLaw, Gurgaon District Commission order', year: '2024', url: 'https://www.livelaw.in/amp/consumer-cases/gurgaon-district-commission-refund-unsatisfactory-gym-facilities-sparta-gym-liable-260955' },
    },
    {
      figure: '5%',
      text: 'GST on gym and physical well-being services from 22 September 2025, without input tax credit. It was commonly 18% with credit before.',
      source: { name: 'Business Today, citing CBIC', year: '2025', url: 'https://www.businesstoday.in/amp/india/story/gst-rate-cut-salon-visits-gyms-yoga-classes-to-get-cheaper-from-sept-22-says-cbic-494193-2025-09-16' },
    },
  ],
  factsNote:
    'The churn figure comes from a software vendor and from CrossFit-style gyms, not an Indian survey. The two court items are single cases, not a trend. They show where the risk lies, not what your gym will see.',

  screensHeading: 'The screens a gym would use every day.',
  screensLede: 'Seven views, each for one job, set up in your own terms: members, plans, trainers, classes and machines.',
  screens: [
    {
      id: 'owner',
      title: 'Gym / Today',
      meta: 'All branches',
      heading: 'The owner’s morning view',
      caption:
        'Members due to renew, members slipping, trainer use, class fill and equipment out of order on one screen, with the items needing a decision below.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Active members', value: '1,842', note: '3 branches' },
            { label: 'Due to renew, 30 days', value: '146', note: '₹21.9 L' },
            { label: 'Slipping', value: '63', note: 'no visit in 10 days' },
            { label: 'Machines out', value: '4', note: '2 over a week' },
          ],
        },
        { type: 'title', text: 'Renewal rate by branch, last 3 months' },
        {
          type: 'bars',
          items: [
            { label: 'Indiranagar', value: 74, display: '74%' },
            { label: 'Koramangala', value: 68, display: '68%' },
            { label: 'Whitefield', value: 51, display: '51%', tone: 'muted' },
          ],
        },
        {
          type: 'list',
          items: [
            { name: '7 freeze requests waiting', meta: 'Reasons attached, oldest 3 days', tag: ['Approve', 'flag', 'Done', 'ok'] },
            { name: 'Whitefield renewals below 55%', meta: 'Two trainers left in September', tag: ['Review', 'late'] },
          ],
        },
      ],
    },
    {
      id: 'renewals',
      title: 'Renewals and dues',
      meta: 'Next 30 days',
      heading: 'Who is due, who has dues, and who is calling',
      caption:
        'Members whose plan ends soon, with their attendance, plan value, dues and the person making the call. Freeze, transfer and extension requests sit alongside.',
      blocks: [
        {
          type: 'table',
          cols: ['Member', 'Plan ends', 'Visits / month', 'Due', 'Next step'],
          rows: [
            ['Rohan Mehta', '24 Oct', '14', '₹15,000', ['Call Kavya', 'flag', 'Renewed', 'ok']],
            ['Neha Kapoor', '27 Oct', '3', '₹15,000', ['Check-in first', 'late']],
            ['Imran Sheikh', '30 Oct', '11', '₹4,500 dues', ['Collect', 'flag', 'Paid ₹2,500', 'info']],
            ['Divya Rao', '2 Nov', '0', '₹12,000', ['Frozen', 'muted']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Freeze request: Aman Gupta, 6 weeks, travel', meta: 'Plan end would move from 12 Dec to 23 Jan', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
            { name: 'Transfer: Sneha to her sister', meta: 'Plan value ₹9,000 · 5 months left', tag: ['Approve?', 'flag', 'Declined', 'muted'] },
          ],
        },
      ],
    },
    {
      id: 'member',
      title: 'Member',
      meta: 'Record',
      heading: 'Plan, attendance, health and notes on one record',
      caption:
        'Everything a trainer or the desk needs: plan terms and branches, the visit pattern, the health declaration and any incident.',
      blocks: [
        {
          type: 'record',
          title: 'Neha Kapoor',
          sub: 'Member since 28 Jan · Annual plan, all branches · Trainer: Kavya',
          fields: [
            ['Plan', 'Gold, 3 branches, 2 freezes allowed'],
            ['Visits, last 4 weeks', ['3', 'late', 'Check-in done', 'ok']],
            ['Last visit', '2 Oct'],
            ['Health declaration', ['Complete', 'ok']],
            ['Note', ['Knee injury, avoid heavy squats', 'flag']],
          ],
          timeline: [
            ['2 Oct', 'Entry, Indiranagar, 52 min'],
            ['18 Sep', 'PT session 4 of 12 with Kavya'],
            ['12 Aug', 'Minor strain, treated on site. Logged by Vikram.'],
            ['Note', 'Prefers early mornings. Asked about a yoga class.'],
          ],
        },
      ],
    },
    {
      id: 'enquiries',
      title: 'Enquiries and trials',
      meta: 'Sales board',
      heading: 'Every walk-in and trial followed to a yes or a no',
      caption:
        'Each enquiry with the plan they asked about, source, trial date and the next step, and the reason when they do not join.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Trial booked',
              cards: [
                { title: 'Arjun Nair, weight loss', meta: 'Trial Fri 6 pm · Walk-in', tag: ['Call before', 'flag', 'Attended', 'ok'] },
                { title: 'Ritika Das, PT enquiry', meta: 'Trial Sat 8 am · Instagram', tag: ['Booked', 'info'] },
              ],
            },
            {
              name: 'Follow-up due',
              cards: [
                { title: 'Sameer Khan, 3-month plan', meta: 'Trial 4 days ago · Referral', tag: ['Call today', 'late', 'Joined', 'ok'] },
                { title: 'Priyanka Iyer, couple plan', meta: 'Asked for a discount', tag: ['Call today', 'flag', 'Lost on price', 'muted'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'trainers',
      title: 'Trainers and PT',
      meta: 'This month',
      heading: 'Who is full, who is idle, and what PT is owed',
      caption:
        'Each trainer’s hours used, PT sessions delivered and confirmed, balances near expiry and the month’s earnings. A leaver’s clients are listed for reassignment.',
      blocks: [
        {
          type: 'table',
          cols: ['Trainer', 'Hours used', 'PT sessions', 'Members rebooked', 'Earned'],
          rows: [
            ['Kavya', '94%', '118', '81%', '₹46,200'],
            ['Vikram', '88%', '104', '73%', '₹41,800'],
            ['Anil', '46%', '39', '52%', '₹22,100'],
            ['Pooja', '39%', '31', '47%', '₹19,400'],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Rohan Mehta, PT 24 sessions', meta: 'Trainer says 20 done, member confirmed 17', tag: ['Reconcile', 'late', 'Agreed 18', 'ok'] },
            { name: '9 PT packages expire within 30 days', meta: '41 sessions unused', tag: ['Call', 'flag'] },
          ],
        },
      ],
    },
    {
      id: 'classes',
      title: 'Classes',
      meta: 'This week',
      heading: 'Fill rate by class and time',
      caption:
        'Each class with capacity, bookings, attendance and waitlist, so full slots can grow and weak ones can be moved or merged.',
      blocks: [
        {
          type: 'table',
          cols: ['Class', 'Time', 'Capacity', 'Attended', 'Waitlist'],
          rows: [
            ['Spin', 'Mon 7:00', '24', '24', ['9', 'late']],
            ['HIIT', 'Tue 6:30', '20', '17', ['0', 'ok']],
            ['Zumba', 'Wed 11:00', '25', ['4', 'muted'], '0'],
            ['Yoga', 'Thu 7:30', '18', '16', ['2', 'flag']],
          ],
        },
        { type: 'alert', text: 'Spin Monday 7:00 turned away 9 people. A second spin at 7:30 would fit the studio.', action: 'Plan class' },
      ],
    },
    {
      id: 'floor',
      title: 'Machines, cleaning and shop',
      meta: 'Daily checks',
      heading: 'Equipment, cleaning rounds, complaints and supplement stock',
      caption:
        'Each machine with its status and service date, the cleaning rounds, open complaints and the protein and supplement stock at the front desk.',
      blocks: [
        {
          type: 'table',
          cols: ['Machine', 'Status', 'Last service', 'Vendor', 'Next step'],
          rows: [
            ['Treadmill 3', 'Out of order, 9 days', 'June', 'FitCare', ['Visit today', 'late', 'Fixed', 'ok']],
            ['Cable machine 2', 'Frayed cable', 'August', 'FitCare', ['Replace', 'flag']],
            ['Leg press', 'Working', 'September', 'Local', ['OK', 'ok']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Changing room clean, 5 pm', meta: 'Overdue by 40 minutes', done: false },
            { text: 'Locker keys count, morning', meta: 'Signed by Ramesh', done: true },
            { text: 'Complaint: shower cold on level 2', meta: 'Open 52 hours', done: false },
          ],
        },
        { type: 'alert', text: 'Whey protein 2 kg: 6 left, 3 months of sales at this rate, expiry March.', action: 'Review stock' },
      ],
    },
  ],

  dayHeading: 'The same Monday at the gym, before and after.',
  dayLede: 'The floor stays the same. What changes is that every visit, plan and fault leaves a record, and the record does the chasing.',
  day: [
    {
      time: '6:00',
      before: 'The morning crowd arrives. Nobody knows which members have stopped coming.',
      after: 'The desk has a list of 63 members who have not visited in 10 days, each with a trainer to check in.',
    },
    {
      time: '10:30',
      before: 'A member asks for a freeze. The manager agrees, and nobody writes it down.',
      after: 'The request is logged with the dates and reason. You approve it, and the plan end date moves.',
    },
    {
      time: '1:00',
      before: 'A treadmill has been out of order for nine days. You find out from a complaint.',
      after: 'It was on the open faults list from day one, with the vendor’s visit booked.',
    },
    {
      time: '5:00',
      before: 'A member says 17 PT sessions are done. The trainer says 20.',
      after: 'Both confirmations are on the package. The balance is clear and the argument does not start.',
    },
    {
      time: '8:30',
      before: 'The 7 a.m. spin class turned people away again. You hear about it later.',
      after: 'The waitlist shows 9 turned away. The class is marked for a second slot.',
    },
    {
      time: 'Month end',
      before: 'You find out in the next month that renewals at one branch fell by 15 points.',
      after: 'The branch showed below target on the Today screen in week two, with the cause beside it.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks, around your floor and your members.',
    lede:
      'You do not get a login and a manual. We learn how your gym runs from the front desk to the weights area, build Verity around it, move your members and plans in, then stay on until it holds.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day on the floor and at the desk. Follow a joiner from enquiry to first session, watch a renewal call, and see how PT sessions, classes and faults are recorded today.',
        you: 'Two to three hours of your time and your manager’s. Plan list, member sheet, PT terms, class timetable and equipment list.',
        get: 'A written map of your gym: plans and tiers, branches, trainers and PT rules, classes, and the leaks we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up plans with freeze and transfer rules, renewal windows, PT packages and session rules, trainer shifts and pay slabs, class capacity, machine service dates and cleaning rounds.',
        you: 'Check each rule with your manager and head trainer. Tell us what is wrong.',
        get: 'A working Verity with your plans, rules and schedules in place, ready for your members.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in members with plan dates, dues, PT balances and health declarations, plus classes and machines. Train the desk, trainers and housekeeping on real shifts.',
        you: 'Your member sheet or app export, in whatever shape. One hour with each role.',
        get: 'Your members, plans and balances inside Verity, and a team that has used it on a real week.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review renewals, slipping members and trainer use with you, and tune thresholds as the gym changes.',
        you: 'A short monthly review of renewal rate, class fill and trainer use.',
        get: 'A setup that keeps up with new plans, new branches and new classes, with someone responsible for it.',
      },
    ],
    bring: [
      'Your plans, prices and freeze or transfer rules',
      'Your member list with plan dates, even a spreadsheet',
      'PT packages and sessions owed',
      'Trainer shifts and pay or incentive rules',
      'Class timetable with capacity',
      'Machine list with vendor contacts and AMC dates',
    ],
    time: 'About 8 to 11 hours of your own time across the four weeks, mostly in week 1. Your manager and head trainer need a few more.',
    after: 'Nobody extra is hired. Visits, sessions and faults are recorded as part of the work already done, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask the gym a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own member, attendance, PT, class and equipment records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which members are due to renew and have not visited in two weeks?',
        a: '38 members due in the next 30 days have not visited in 14 days. Their plans are worth ₹5.7 lakh.',
        rows: [['Indiranagar', '14 members, ₹2.1 L'], ['Koramangala', '13 members, ₹1.9 L'], ['Whitefield', '11 members, ₹1.7 L']],
        action: 'Create check-in tasks for their trainers',
      },
      {
        q: 'Which trainers have free hours between 6 and 9 a.m.?',
        a: 'Anil and Pooja have 11 free hours between them in that window this week. Both are cleared for weight-loss programmes.',
        rows: [['Anil', '6 hours'], ['Pooja', '5 hours'], ['Kavya', '0 hours'], ['Vikram', '1 hour']],
      },
      {
        q: 'Which class slots should I merge or move?',
        a: 'Zumba Wednesday 11:00 averages 4 on 25 places. Spin Monday 7:00 is turning away 9. Moving Zumba to 6 p.m. is the likeliest fix.',
        action: 'Add a timetable review task for the manager',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Trainers and the desk still make the calls and messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A plan is 30 days from its end',
      then: ['Added to the renewals list with attendance', 'Task to the assigned person', 'Outcome recorded: renewed, declined or unreachable'],
    },
    {
      when: 'A member has not visited in your set number of days',
      then: ['Flagged on the slipping list', 'Check-in task to their trainer', 'Reason recorded: travel, injury or lost interest'],
    },
    {
      when: 'A freeze or transfer is requested',
      then: ['Held for approval with reason', 'Approver sees plan value and history', 'Plan end date moves only once approved'],
    },
    {
      when: 'A PT session is confirmed by both sides',
      then: ['Balance on the package reduced', 'Trainer’s earnings updated', 'Alert raised when 3 sessions remain'],
    },
    {
      when: 'A machine is marked out of order',
      then: ['Fault task to the floor manager', 'Vendor visit logged', 'Back in use only when marked fixed'],
    },
    {
      when: 'A class has a waitlist over your limit',
      then: ['Added to the timetable review list', 'Fill rate shown for the last 4 weeks', 'Decision to add, move or merge recorded'],
    },
  ],

  rules: {
    heading: 'The rules a gym has to keep up with.',
    lede:
      'Verity does not give legal, medical or tax advice and files nothing for you. It keeps the records these rules lean on in order, so you are not rebuilding them when a dispute or an inspection comes.',
    items: [
      {
        name: 'GST on gym services',
        what: 'Physical well-being services, which include gyms, moved to 5% without input tax credit from 22 September 2025. Supplements and goods sold at the desk are taxed at their own rates.',
        how: 'Membership, PT and shop sales are separate lines, so the split your accountant needs is clean at month end.',
        source: { name: 'Business Today, citing CBIC', url: 'https://www.businesstoday.in/amp/india/story/gst-rate-cut-salon-visits-gyms-yoga-classes-to-get-cheaper-from-sept-22-says-cbic-494193-2025-09-16' },
      },
      {
        name: 'Consumer protection and clear membership terms',
        what: 'District consumer commissions have held gyms liable where plan terms were not explained, a member was refused entry at another branch, or facilities did not match what was promised. Outcomes depend on each case.',
        how: 'Each plan keeps its tier, branches, freeze rules and refund terms as a record, shown to the member at joining and kept with their history.',
        source: { name: 'The Week, on a South Mumbai commission order', url: 'https://www.theweek.in/wire-updates/national/2024/11/13/lgb2-mh-consumer-gym.html' },
      },
      {
        name: 'Member health and personal data',
        what: 'Health declarations, phone numbers and photographs are personal data. India’s data protection rules were notified in November 2025, with duties starting in phases over the following 18 months.',
        how: 'Member data sits in one permissioned place, and who viewed or changed it is recorded, rather than in registers and phones.',
        source: { name: 'AZB Partners on the DPDP Rules', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Premises, safety and staff records',
        what: 'Gyms commonly need local trade or business permissions and fire and electrical safety compliance, and states require records of staff hours and leave under their Shops and Establishments rules. Details differ by city and state.',
        how: 'Licence dates, safety checks, machine service and staff shifts are kept on one record, with a task raised before anything falls due.',
      },
    ],
    note: 'Rules differ by state and change often. Confirm current requirements with your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A trainer should not see everyone’s fees. The desk should not see another trainer’s pay. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Are members staying, and is every branch healthy?', sees: 'Renewal rate by branch, slipping members, trainer use, class fill, dues, and approvals waiting.' },
    { role: 'Gym manager', question: 'What needs sorting this week?', sees: 'Renewals due, faults open, complaints, trainer rota gaps, freeze requests and class changes.' },
    { role: 'Trainer', question: 'Who needs my attention today?', sees: 'His clients, their goals and health flags, PT balances, slipping members and his own earnings.' },
    { role: 'Front desk', question: 'Who is due and who owes?', sees: 'Plans ending, dues, enquiries to follow up, today’s classes and visitor entries.' },
    { role: 'Accountant', question: 'What was collected and what is due?', sees: 'Collections by mode, instalments due, PT liability, shop sales and the GST split.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your entry system or turnstile. We agree how visits reach Verity during setup.',
      'Your payment tool or UPI. Collections are recorded against the plan.',
      'WhatsApp for talking to members. Staff send the messages; Verity tells them who and when.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Sell memberships or classes online.',
      'Send messages to members on its own.',
      'Take card or UPI payments itself.',
      'Run payroll, file returns or give medical advice.',
    ],
    migration:
      'We bring members, plans, PT balances, health declarations and equipment across from your register, sheets and apps, in stages, so the gym stays open while it happens.',
  },

  faqHeading: 'Questions gym owners ask.',
  faqs: [
    [
      'Will members need to download anything?',
      'No. Verity is for your staff. Members keep using your entry system and talk to the desk and trainers as they do now. If you want members to confirm PT sessions, we agree how during setup.',
    ],
    [
      'Does Verity handle entry and turnstiles?',
      'No. Your entry system keeps doing that. During setup we agree how visits reach Verity, and where that is not possible, the desk can record visits by hand.',
    ],
    [
      'Can it send renewal reminders to members?',
      'Not by itself. Verity builds the renewal list and gives each call to a named person, and your team sends the message or makes the call. The outcome is then recorded.',
    ],
    [
      'We have a membership that works across all branches. Can it handle that?',
      'Yes. Each plan states the branches it covers. A member is one person across branches, so a visit at any branch counts and the plan terms are checked at entry.',
    ],
    [
      'How does it deal with freezes?',
      'A freeze is a request with a reason, dates and an approver. The plan end date moves only once it is approved, and the member’s history shows what was agreed.',
    ],
    [
      'Can it track personal training sessions properly?',
      'Yes. Each PT package has a balance, sessions count when both trainer and member confirm, and balances near expiry are listed. The trainer’s earnings follow from confirmed sessions.',
    ],
    [
      'Who can see member health information?',
      'Only the people you allow. Trainers see the flags that matter for their clients, the desk sees less, and every view or change is recorded with who made it and when.',
    ],
    [
      'How soon will I see anything useful?',
      'The renewals list and the slipping-members list need only your member sheet and visit data, so they come first. Class and trainer trends become reliable after a few weeks of recorded sessions.',
    ],
    [
      'What does it cost?',
      'It depends on the number of branches, members and staff, and what you want set up. Message us and we will give you a clear number after a short conversation about how your gym runs.',
    ],
  ],

  related: ['fitness-studios', 'yoga-studios', 'salons', 'spas', 'sports-stores', 'physiotherapy-clinics'],

  ctaHeading: 'Start with the members who are about to leave.',
  ctaLede:
    'Tell us how your gym runs and we will show you the lapsing renewals, the slipping members and the idle trainer hours, using your own numbers.',
};
