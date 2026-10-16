export default {
  schema: 2,
  slug: 'app-developers',
  status: 'published',
  plural: 'app development companies',
  subject: 'app development company',
  checked: '15 October 2026',

  seo: {
    title: 'Business software for Indian mobile app development companies | Verity',
    description:
      'See 14 problems that drain an app studio: store rejections, platform deadlines, scope creep, unbilled support, late invoices, and the Verity screens that fix each.',
    keywords: [
      'app development company management software India',
      'app release and store review tracking',
      'change request and scope tracking for software studios',
      'maintenance retainer hours tracking',
      'client app credentials and renewal tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'workforce', 'schedule', 'ai'],

  hero: {
    eyebrow: 'Verity for app development companies',
    headline: 'The build is done. The store has it in review, and your client thinks it is live.',
    lede:
      'An app studio delivers through gates it does not control, and gets judged after release. Store review, platform deadlines, client sign-off and post-release bugs decide whether a project makes money. Verity keeps all of them against the app and the client.',
    oneLine:
      'One system that knows every app you built, which version is live, who owns the store account, what the client asked for and what you have not yet billed.',
    note: 'Your code, build tools and store consoles stay where they are. Verity runs the company around them.',
    screen: 'owner',
    screenNote: 'apps, clients, developers and retainers',
  },

  today: {
    heading: 'The code is well managed. The company around it is not.',
    paragraphs: [
      'Developers live in the repository, the task board and the chat. That part is organised. What sits outside is not: which client approved which change, which app is waiting in store review, who holds the signing key for a client’s Android app, and how many support hours were spent on a project that was sold as fixed price.',
      'That information is spread over email threads, WhatsApp groups with clients, a task board per project, an accounts sheet and the founder’s memory. Nobody can open one client and see the apps, versions, open bugs, hours, invoices and agreements together.',
      'So the studio finds out late. A store rejection that costs a week. A platform deadline noticed after the notice period. A maintenance client who used 40 hours against 20 paid. A developer who leaves with the only copy of a certificate.',
    ],
    stack: ['Task board per project', 'Git hosting and build tools', 'Client WhatsApp groups', 'Time and invoice sheets', 'Founder’s memory'],
    stackNote: 'Each of these does its job well. Nothing joins the app, the client, the time and the money.',
  },

  painsHeading: 'Where an app studio actually loses money.',
  painsLede:
    'These are the situations studio owners describe again and again. For each one: how it looks, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Release',
      title: 'Store review takes a week and nobody told the client',
      scene:
        'The build was done on Friday. Apple rejected it Monday for a missing privacy detail. The client was told the app would be live by Tuesday and has already announced a launch date.',
      cost:
        'Apple rejected over 1.9 million of 7.7 million submissions in 2024. Each rejection typically costs you days of rework and a difficult call, and the launch date is already public.',
      fix:
        'Every release is a record with a state: built, submitted, in review, rejected with reason, approved, live. Rejections create a fix task with the reason, and the client’s account manager sees the status so the message is sent before the client asks.',
      screen: 'releases',
      source: {
        name: 'Apple Newsroom, May 2025',
        url: 'https://www.apple.com/ca/newsroom/2025/05/the-app-store-prevented-more-than-9-billion-usd-in-fraudulent-transactions/',
      },
    },
    {
      area: 'Release',
      title: 'Platform deadlines arrive as emails nobody reads',
      scene:
        'From 31 August 2026, new apps and updates on Google Play must target Android 16 (API 36). A client’s app is built for an older level and nobody knew until an update was blocked.',
      cost:
        'An update held up by a rule you could have planned for, and apps that become unavailable to new users on newer devices. Extensions can be requested, but only if someone asks in time.',
      fix:
        'Each app record holds its target platform version and the dates platforms have announced. A list shows apps that will fall out of compliance within 90 days, with an upgrade task and a quote for the client.',
      screen: 'app',
      source: {
        name: 'Android Developers, target API level requirements, updated 1 October 2026',
        url: 'https://developer.android.com/google/play/requirements/target-sdk',
      },
    },
    {
      area: 'Scope',
      title: 'Small changes agreed on calls add up to a lost project',
      scene:
        'In week five the client asks on a call for "a quick filter and a second payment option". It is agreed to keep the relationship warm. By week nine there are eleven such changes and none were priced.',
      cost:
        'Example arithmetic: eleven changes at 12 hours each is 132 hours. At ₹1,500 an hour, that is ₹1.98 lakh of work given away on a ₹9 lakh project.',
      fix:
        'Every request is logged as a change request on the project with hours, price and a status: asked, estimated, approved, declined, delivered. Approved changes add to the project value, and unpriced work is visible as a count.',
      screen: 'scope',
    },
    {
      area: 'Scope',
      title: 'The client takes two weeks to answer and the delay is still your problem',
      scene:
        'Designs wait for sign-off for ten days. The sprint stalls. When the launch date slips, the client says development was late.',
      cost:
        'Developers idle or switched to other work, and a fight over whose delay it was. Without dates you cannot show the client’s part.',
      fix:
        'Each approval is a task assigned to a named person at the client, with a due date and a reminder for your team to chase. When the project slips, the record shows days spent waiting on the client.',
      screen: 'scope',
    },
    {
      area: 'Quality',
      title: 'Bugs after release arrive through every channel except the one you track',
      scene:
        'The client sends a screenshot on WhatsApp on Sunday. The developer hears about it Monday afternoon. Twenty-three bugs in the first 48 hours appear as scattered messages.',
      cost:
        'You cannot tell whether the release was weak or the client was just thorough. A fix goes out without the client knowing which bugs it covered.',
      fix:
        'Every report becomes a defect on the release, with severity, owner, and the build it was found in and fixed in. You see defects per release and per client, and whether the first 48 hours are getting better.',
      screen: 'defects',
    },
    {
      area: 'Quality',
      title: 'A new iOS or Android version breaks an app you shipped a year ago',
      scene:
        'The new operating system arrives in September. Four apps you built crash on the new version. Clients without a maintenance contract write to you angrily.',
      cost:
        'Unplanned work for clients who never agreed to pay for it, or reputation damage if you refuse.',
      fix:
        'Every app records its client’s support terms. When a platform release lands, you see which apps are affected, which are under a retainer and which are not, and a quote task goes out for those that are not.',
      screen: 'defects',
    },
    {
      area: 'Support',
      title: 'Maintenance retainers use more hours than clients pay for',
      scene:
        'A client pays for 20 hours a month. Last month the team spent 41 on small requests. Nobody counted because each one was only a message.',
      cost:
        'Example arithmetic: 21 extra hours at ₹1,500 across 10 retainer clients is ₹3.15 lakh a month of free work.',
      fix:
        'Each retainer has its monthly hours. Time is logged against it, and the screen shows hours used and the pace for the month. At 80 percent a task goes to the account manager to talk to the client.',
      screen: 'retainers',
    },
    {
      area: 'Money',
      title: 'Milestone invoices go out late and are paid later',
      scene:
        'The beta milestone was reached on the 10th. The invoice went out on the 26th because the founder was busy. The client pays 45 days after that.',
      cost:
        'Working capital funds the client’s project. Salaries are paid on the 1st whether or not the milestone cash has arrived.',
      fix:
        'Each milestone is a record tied to the project. When it is marked done, an invoice task goes to finance with the amount. Invoices not yet paid are listed by client and age, with a follow-up task for each.',
      screen: 'retainers',
    },
    {
      area: 'Estimating',
      title: 'Quotes are based on memory, not on what similar apps took',
      scene:
        'A new prospect wants a food-ordering app. Someone says "about three months". Last time it took five, but the hours were never added up.',
      cost:
        'Quotes that lose money when they win and lose the deal when they are padded.',
      fix:
        'Every finished project keeps estimated against actual hours by feature type. The owner view compares them, so the next quote is built on what the studio really takes.',
      screen: 'owner',
    },
    {
      area: 'People',
      title: 'Developers are double booked, or sitting between projects',
      scene:
        'Two projects both need your best Flutter developer in the same fortnight. A third developer has been idle for ten days because nobody saw a project end.',
      cost:
        'A delayed launch on one side and unbilled salary on the other. Bench cost in a studio is easy to hide inside the month’s total.',
      fix:
        'Assignments by person and week are in one schedule, with leave. Over-booking and idle weeks are flagged early, and utilisation per developer is a live number.',
      screen: 'team',
    },
    {
      area: 'People',
      title: 'When a developer leaves, the knowledge leaves too',
      scene:
        'Only one engineer knew how the release for a fintech client is signed and uploaded. She resigns with a two-week notice.',
      cost:
        'Release delays, a rushed handover and a risk that the client’s app cannot be updated.',
      fix:
        'Each app record lists who knows it, how releases are made, and what has been handed over. A handover checklist starts the day a resignation is recorded.',
      screen: 'team',
    },
    {
      area: 'Accounts',
      title: 'Nobody is sure who owns the store account, the keys or the renewals',
      scene:
        'Some apps are published from the client’s developer account, others from yours. Signing keys sit on a laptop. The yearly developer fee lapses and the app disappears.',
      cost:
        'An app removed from the store over a missed renewal, or a dispute about who owns the account when the contract ends.',
      fix:
        'Each app lists its store accounts, owner, key location, third-party services and renewal dates. Renewals appear on a list 60 days ahead with a task to the account manager.',
      screen: 'app',
    },
    {
      area: 'Clients',
      title: 'Every client message lives in a separate chat',
      scene:
        'The client’s product manager, founder and designer all message different developers. A decision made in one chat is unknown in another.',
      cost:
        'Rework from contradicting instructions and no written trail when a dispute arrives.',
      fix:
        'Decisions, approvals and requests are recorded on the project with who gave them and when. The chat stays for talking, but the decision is written against the project.',
      screen: 'scope',
    },
    {
      area: 'Compliance',
      title: 'Apps collect personal data and the contract does not say who is responsible',
      scene:
        'A health app stores names, phone numbers and reports. The client assumes you handle compliance. Your contract is silent on data handling, breach and deletion.',
      cost:
        'A dispute the day a breach happens, and extra work when the data protection duties begin to apply.',
      fix:
        'Each app record lists the personal data it collects, where it is stored, who can access it and the agreement that covers it. Gaps appear as tasks before the new duties start.',
      screen: 'app',
      source: {
        name: 'AZB Partners on the DPDP Rules, 2025',
        url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/',
      },
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede:
    'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '1.9 million',
      text: 'of over 7.7 million app submissions to the App Store were rejected in 2024 for not meeting its standards.',
      source: { name: 'Apple Newsroom', year: '2025', url: 'https://www.apple.com/ca/newsroom/2025/05/the-app-store-prevented-more-than-9-billion-usd-in-fraudulent-transactions/' },
    },
    {
      figure: '31 Aug 2026',
      text: 'date from which new apps and updates on Google Play must target Android 16 (API level 36). Extensions could be requested until 1 November 2026.',
      source: { name: 'Android Developers', year: '2026', url: 'https://developer.android.com/google/play/requirements/target-sdk' },
    },
    {
      figure: '13 May 2027',
      text: 'date from which the main duties of India’s data protection rules, including notice, consent and safeguards, are due to apply, after the rules were notified on 13 November 2025.',
      source: { name: 'AZB Partners', year: '2025', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
    },
    {
      figure: '45 days',
      text: 'is the longest time a buyer should generally take to pay a micro or small supplier under the MSMED Act, or the buyer loses the tax deduction until it pays. It matters if your studio is registered as a micro or small enterprise.',
      source: { name: 'TaxGuru on Section 43B(h)', year: '2024', url: 'https://www.taxguru.in/income-tax/section-43bh-msme-payment.html' },
    },
  ],
  factsNote:
    'Platform dates change often and are set by Apple and Google, so check each console. The 45-day rule applies only to micro and small suppliers with Udyam registration and has some exceptions, so ask your accountant. None of these show what your studio will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Apps, releases and retainers are set up in your studio’s own words.',
  screens: [
    {
      id: 'owner',
      title: 'Studio / Today',
      meta: 'All clients, this month',
      heading: 'The founder’s overview',
      caption:
        'Releases in flight, defects, retainer hours, unpaid invoices and how your estimates compare to what projects really took.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Apps maintained', value: '31', note: '18 clients' },
            { label: 'Releases in review', value: '4', note: '1 rejected' },
            { label: 'Retainer hours over', value: '58', note: 'across 6 clients' },
            { label: 'Invoices unpaid', value: '₹14.2 L', note: '₹6.1 L past 45 days' },
          ],
        },
        { type: 'title', text: 'Estimated against actual hours, finished projects' },
        {
          type: 'bars',
          items: [
            { label: 'Food ordering app', value: 100, display: '+66%', tone: 'muted' },
            { label: 'Fitness tracker', value: 62, display: '+24%' },
            { label: 'Booking app', value: 40, display: '+8%' },
            { label: 'Internal sales app', value: 20, display: '-4%' },
          ],
        },
        { type: 'alert', text: 'Two apps will fall below the Google Play target level within 90 days.', action: 'Quote upgrade' },
        {
          type: 'list',
          items: [
            { name: 'Wellbeing app rejected by Apple', meta: 'Missing privacy detail', tag: ['Tell client', 'late', 'Told', 'ok'] },
            { name: 'Aarav Logistics retainer at 92%', meta: '19 of 20 hours, 11 days left', tag: ['Call', 'flag'] },
          ],
        },
      ],
    },
    {
      id: 'releases',
      title: 'Releases',
      meta: 'Store review status',
      heading: 'Where every build is, and what the client has been told',
      caption:
        'Each release with its platform, state, review outcome and the date promised to the client, so rejections are handled before they become a call.',
      blocks: [
        {
          type: 'table',
          cols: ['App, version', 'Platform', 'State', 'Promised', 'Client told'],
          rows: [
            ['Wellbeing 2.4', 'iOS', ['Rejected', 'late', 'Resubmitted', 'info'], '14 Oct', ['No', 'flag', 'Yes', 'ok']],
            ['Wellbeing 2.4', 'Android', ['Approved', 'ok'], '14 Oct', ['Yes', 'ok']],
            ['Aarav Logistics 5.1', 'Android', ['In review', 'info'], '16 Oct', ['Yes', 'ok']],
            ['FoodKart 3.0', 'iOS', ['Built', 'muted'], '20 Oct', ['Not yet', 'muted']],
          ],
        },
        { type: 'alert', text: 'Wellbeing 2.4 for iOS was rejected: privacy detail missing. The fix is assigned to Rohan.', action: 'Open' },
      ],
    },
    {
      id: 'defects',
      title: 'Defects and support',
      meta: 'After release',
      heading: 'Every bug report on the release it came from',
      caption:
        'Bug reports from clients, however they arrive, tied to the version, the severity and who is fixing it, and platform changes listed against the apps they affect.',
      blocks: [
        {
          type: 'table',
          cols: ['Report', 'App, version', 'Severity', 'Owner', 'State'],
          rows: [
            ['Payment screen crash', 'FoodKart 3.0', 'High', 'Ishan', ['Fix in build', 'late', 'Fixed', 'ok']],
            ['Filter not saving', 'Wellbeing 2.4', 'Medium', 'Rohan', ['Open', 'flag']],
            ['Push not arriving', 'Aarav 5.1', 'High', 'Ishan', ['Open', 'late']],
            ['Wrong logo on splash', 'Booking 1.7', 'Low', 'Meera', ['Fixed', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'New iOS version released', meta: '4 apps affected, 1 under retainer', tag: ['Quote 3', 'flag', 'Quoted', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'scope',
      title: 'Projects and changes',
      meta: 'Change requests',
      heading: 'Every ask priced, approved and written down',
      caption:
        'Change requests with hours and price, and approvals waiting on the client with a date. Decisions are recorded against the project, not left in a chat.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Asked, not priced',
              cards: [
                { title: 'Second payment option', meta: 'FoodKart, asked on call 3 Oct', tag: ['Estimate', 'late', 'Estimated', 'info'] },
                { title: 'Filter by cuisine', meta: 'FoodKart, 8 hours', tag: ['Estimate', 'flag'] },
              ],
            },
            {
              name: 'Waiting on client',
              cards: [
                { title: 'Sign off on checkout design', meta: 'Priya at FoodKart, 9 days', tag: ['Chase', 'late', 'Signed', 'ok'] },
              ],
            },
            {
              name: 'Approved',
              cards: [
                { title: 'Order history export', meta: '₹42,000, 28 hours', tag: ['Approved', 'ok'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'retainers',
      title: 'Retainers and invoices',
      meta: 'Hours and money',
      heading: 'Hours used against hours paid, and invoices against age',
      caption:
        'Each maintenance client’s hours for the month, milestone invoices raised and still unpaid, and the follow-up for each.',
      blocks: [
        {
          type: 'table',
          cols: ['Client', 'Hours paid', 'Used', 'Invoice due', 'Status'],
          rows: [
            ['Aarav Logistics', '20', '19', '₹0.9 L', ['92%', 'flag', 'Talked', 'ok']],
            ['FoodKart', '30', '41', '₹2.1 L', ['137%', 'late']],
            ['Wellbeing Co', '15', '9', '₹0.7 L', ['60%', 'ok']],
            ['Booking Hub', '10', '12', '₹0.4 L', ['120%', 'late']],
          ],
        },
        { type: 'alert', text: 'Beta milestone for FoodKart was met 12 days ago. Invoice not raised.', action: 'Raise invoice' },
      ],
    },
    {
      id: 'team',
      title: 'Team',
      meta: 'Next 4 weeks',
      heading: 'Who is on what, and who knows what',
      caption:
        'Assignments by week, leave, bench time and a record of who can do releases for each app.',
      blocks: [
        {
          type: 'table',
          cols: ['Developer', 'Skill', 'This week', 'Next week', 'Note'],
          rows: [
            ['Ishan', 'Flutter', ['120%', 'late'], '100%', 'Double booked'],
            ['Rohan', 'iOS', '90%', '80%', 'OK'],
            ['Meera', 'Android', ['20%', 'flag'], ['0%', 'late'], 'Free from 22 Oct'],
            ['Tanvi', 'QA', '85%', '90%', 'OK'],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Release keys handed over for Aarav Logistics', meta: 'Ishan leaves 30 Oct', done: false },
            { text: 'Store accounts listed', meta: 'Ishan', done: true },
            { text: 'Build steps written down', meta: 'Ishan', done: false },
          ],
        },
      ],
    },
    {
      id: 'app',
      title: 'App',
      meta: 'Record',
      heading: 'One record for every app you built',
      caption:
        'Platforms and versions, who owns the store account and keys, renewals, the data the app collects, and the contract that covers it.',
      blocks: [
        {
          type: 'record',
          title: 'Aarav Logistics driver app',
          sub: 'Android and iOS. Client since 2024. Account manager: Pooja',
          fields: [
            ['Live version', '5.0 (Android), 4.9 (iOS)'],
            ['Target Android level', ['API 35', 'flag', 'Upgraded to 36', 'ok']],
            ['Store accounts', 'Client owned'],
            ['Signing keys', ['On Ishan’s laptop', 'late', 'Vaulted', 'ok']],
            ['Developer fee renews', '12 Dec'],
            ['Personal data', 'Names, phone, live location'],
          ],
          timeline: [
            ['1 Oct', 'Upgrade to API 36 quoted, 18 hours'],
            ['12 Sep', 'Release 5.0 approved on Android'],
            ['14 Aug', 'Maintenance retainer renewed, 20 hours'],
            ['Note', 'Data protection clause missing from the 2024 contract.'],
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Tuesday, before and after.',
  dayLede: 'The code is written the same way. What changes is that the studio around it stops running on memory.',
  day: [
    {
      time: '9:30',
      before: 'You open the store consoles one by one to see which builds are still in review.',
      after: 'The Releases screen shows four in review and one rejected, with the client already told.',
    },
    {
      time: '11:00',
      before: 'A client asks for another feature on a call and you say yes to keep them happy.',
      after: 'You say yes and log it. It appears as an unpriced change with an estimate task for the lead.',
    },
    {
      time: '1:00',
      before: 'A WhatsApp screenshot of a crash reaches a developer after lunch.',
      after: 'It is a defect on the release with a severity and an owner. The client is told it is being fixed.',
    },
    {
      time: '3:30',
      before: 'A client asks why the launch slipped. You cannot show that sign-off took ten days.',
      after: 'The record shows the approval waited 10 days on their side, with the reminder dates.',
    },
    {
      time: '6:00',
      before: 'You do not know which developer is free next week.',
      after: 'The schedule shows Meera free from the 22nd and Ishan double booked.',
    },
    {
      time: 'Month end',
      before: 'Invoices are raised from memory and retainer overruns are noticed in the next meeting.',
      after: 'Milestones and retainer hours produce the invoice list, and overruns were flagged at 80 percent.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your studio takes a project from proposal to maintenance, build Verity around that, bring your records in and stay on to keep them current.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you, your delivery lead and whoever invoices. Follow two live projects and one maintenance client from first message to last invoice, noting every chat, sheet and board involved.',
        you: 'Two to three hours of your time, plus access to your task boards, the time sheet and recent invoices.',
        get: 'A written map of how work and money move through your studio, and a ranked list of leaks to close first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up clients, apps, platforms, release states, change request rules, retainer hours, milestone invoices and the approval limits. We agree how time and task data reaches Verity from your existing tools.',
        you: 'Review the states and rules with your delivery lead. Correct where we misread your process.',
        get: 'A working Verity with your clients and apps, ready for your history.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in clients, apps, open projects, open change requests, retainers and unpaid invoices. Train developers, account managers and finance on one real project each.',
        you: 'Your sheets and exports in any shape. One hour with each role.',
        get: 'Every app, client and open invoice inside Verity, and a team that has logged real work in it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Review the first month of releases, change requests and retainers with you, tune the rules, and add new apps, clients and platform changes as they arrive.',
        you: 'A short monthly review.',
        get: 'A company system that keeps up with how the studio changes, with someone responsible for it.',
      },
    ],
    bring: [
      'A list of clients, apps and platforms',
      'Your current project contracts and retainer terms',
      'Recent time sheets and invoice lists',
      'A list of store accounts, keys and renewal dates as far as known',
      'Your usual estimate for common app types',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your delivery lead and finance person need a few more.',
    after: 'No one has to be hired to run Verity. Releases, defects and hours are recorded as part of the work your team already does.',
  },

  ai: {
    heading: 'Ask your studio a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own project, release, defect and invoice records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which retainer clients are over their hours this month?',
        a: 'Six clients are over or close to their hours. FoodKart is at 137% and Booking Hub at 120%.',
        rows: [['FoodKart', '137%'], ['Booking Hub', '120%'], ['Aarav Logistics', '92%'], ['Wellbeing Co', '60%']],
        action: 'Create tasks for the account managers to talk to the clients',
      },
      {
        q: 'Which apps need an upgrade for the new Android level?',
        a: 'Two apps still target API 35 and neither has an upgrade quote. Both are under a retainer.',
        rows: [['Aarav Logistics', 'API 35'], ['Booking Hub', 'API 35']],
        action: 'Raise upgrade quotes for both clients',
      },
      {
        q: 'How far off are our estimates on food ordering apps?',
        a: 'Three finished food ordering apps took 66% more hours than quoted on average, mostly on payments and order tracking.',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Your people still talk to clients. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A release is rejected in review',
      then: ['Fix task created with the review reason', 'Account manager told to update the client', 'New promised date recorded'],
    },
    {
      when: 'A client asks for work outside the agreed scope',
      then: ['Logged as a change request', 'Estimate task to the lead', 'Approval requested before work starts'],
    },
    {
      when: 'Retainer hours reach 80 percent',
      then: ['Alert to the account manager', 'Remaining hours and days shown', 'Option to quote extra hours'],
    },
    {
      when: 'A milestone is marked complete',
      then: ['Invoice task to finance with the amount', 'Invoice added to the unpaid list when raised', 'Follow-up task if unpaid at 30 days'],
    },
    {
      when: 'A platform announces a new required version',
      then: ['Affected apps listed', 'Upgrade quote task for apps outside a retainer', 'Dates added to the app record'],
    },
    {
      when: 'A developer’s resignation is recorded',
      then: ['Handover checklist for each of their apps', 'Keys and accounts reviewed', 'Replacement assigned on the schedule'],
    },
  ],

  rules: {
    heading: 'The rules an app studio has to keep up with.',
    lede:
      'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your lawyer or accountant is not rebuilding them from chats.',
    items: [
      {
        name: 'Platform rules of Apple and Google',
        what: 'Both stores set the platform version, privacy and content rules your apps must meet. Google Play required new apps and updates to target Android 16 from 31 August 2026, with an extension to 1 November 2026 available on request.',
        how: 'Platform version, privacy declarations and store review history are recorded on each app, with upcoming dates listed against the apps they affect.',
        source: { name: 'Android Developers', url: 'https://developer.android.com/google/play/requirements/target-sdk' },
      },
      {
        name: 'Personal data protection',
        what: 'India’s data protection rules were notified on 13 November 2025. The main duties on notice, consent and safeguards are due to apply from 13 May 2027. Your clients are generally responsible for personal data, and you may handle it for them.',
        how: 'Each app lists the personal data it collects, where it sits, who can access it and the contract that covers it.',
        source: { name: 'AZB Partners', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Payment terms for micro and small suppliers',
        what: 'If your studio is a registered micro or small enterprise, buyers who pay later than the time allowed by the MSMED Act generally lose the tax deduction until they pay. The limit is generally 45 days with a written agreement.',
        how: 'Invoices show the acceptance date and age, so you can see which clients are past the limit and bring it up in a follow-up.',
        source: { name: 'TaxGuru', url: 'https://www.taxguru.in/income-tax/section-43bh-msme-payment.html' },
      },
      {
        name: 'Ownership of code and accounts',
        what: 'Your contract sets who owns the source code, the store accounts and the keys, and what happens at the end of the engagement.',
        how: 'Each app records the owner of its accounts, where keys live and which contract clause applies.',
      },
    ],
    note: 'Rules change and differ by situation. Confirm current requirements with your lawyer, accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A developer does not need to see invoice amounts. An account manager does not need to see salaries. Each role opens on what it needs.',
  roles: [
    { role: 'Founder', question: 'Which clients and projects make money?', sees: 'Estimates against actuals, retainer overruns, unpaid invoices, utilisation and risks to releases.' },
    { role: 'Delivery lead', question: 'What is blocked, and who is free?', sees: 'Releases in review, defects by release, the schedule, change requests awaiting estimates.' },
    { role: 'Developer', question: 'What should I work on and what changed?', sees: 'Their tasks, the defect details, approved changes and the app notes.' },
    { role: 'Account manager', question: 'What does my client need to hear today?', sees: 'Client status, promised dates, approvals waiting, hours used and open invoices.' },
    { role: 'Finance', question: 'What can we bill and what is outstanding?', sees: 'Milestones reached, retainer hours, invoices by age and renewals due.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your task boards, code hosting and build tools. We agree how time and status reach Verity.',
      'The store consoles, where releases are still submitted by your team.',
      'WhatsApp and email with clients. Your staff talk, and the decision is written on the project.',
      'Your accounting software and your accountant.',
    ],
    not: [
      'Write, build or test your code.',
      'Submit apps to the stores for you.',
      'Send messages to clients on its own.',
      'Run payroll or file your returns.',
    ],
    migration:
      'We bring your client list, apps, open projects and unpaid invoices across from the boards and sheets you use now, in stages, so deliveries continue while we do it.',
  },

  faqHeading: 'Questions app studio owners ask.',
  faqs: [
    [
      'Do I have to give up my project board?',
      'No. Your developers can stay on the tools they like. Verity holds the company side: clients, apps, releases, change requests, hours and invoices. We agree how task and time data reaches it during setup.',
    ],
    [
      'Can Verity submit my app to the stores?',
      'No. Your team submits builds. Verity records the release, the state and the review result, and creates the fix task when a build is rejected.',
    ],
    [
      'How does it know about a new platform rule?',
      'Someone on your team enters the rule and the date once, and Verity lists the apps affected and creates the tasks. It does not read store emails on its own.',
    ],
    [
      'We are a team of eight. Is this too much?',
      'A small studio loses the most to a single missed renewal or unpriced change. We set up only what you need, and the process is the same four weeks.',
    ],
    [
      'Can it track hours for fixed-price projects?',
      'Yes. Hours are logged against the project so you can see actual against estimate, even when the client is billed a fixed price.',
    ],
    [
      'Can I see which clients are not worth keeping?',
      'It shows hours, defects and payment delays per client against what they pay. The decision stays with you, but the numbers are in front of you.',
    ],
    [
      'Who can see client information and keys?',
      'Only the people you allow. Access is set by role, and every view and change is recorded with who and when. We suggest keeping the keys themselves in a proper vault. Verity records where they are.',
    ],
    [
      'Does it work for a studio that builds websites too?',
      'Yes. Apps, sites and retainers use the same records. You name the project types in your own words.',
    ],
    [
      'What does it cost?',
      'It depends on the number of people, clients and what you want set up. Message us and we will give you a clear number after a short conversation about how your studio runs.',
    ],
  ],

  related: ['software-agencies', 'web-development-agencies', 'it-services-companies', 'saas-companies', 'startups', 'design-agencies'],

  ctaHeading: 'Start with the work you have already done and not billed.',
  ctaLede:
    'Tell us how your studio runs and we will show you the unpriced changes, retainer overruns and unpaid milestones it would find, using your own numbers.',
};
