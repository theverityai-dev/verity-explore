export default {
  schema: 2,
  slug: 'web-development-agencies',
  status: 'published',
  plural: 'web development agencies',
  subject: 'web agency',
  checked: '15 October 2026',

  seo: {
    title: 'Operations software for Indian web development agencies | Verity',
    description:
      'See 14 problems that drain a web agency: late client content, endless revisions, lapsed domains, unpatched plugins, unbilled changes, and the Verity screens for each.',
    keywords: [
      'web development agency management software India',
      'website project and client approval tracking',
      'domain hosting and SSL renewal tracking',
      'website maintenance plan hours tracking',
      'freelancer and project profitability tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'workforce', 'schedule', 'ai'],

  hero: {
    eyebrow: 'Verity for web development agencies',
    headline: 'The site went live in March. In October the domain lapsed, and the client called you.',
    lede:
      'A web agency makes money on the project and loses it on everything around it: content that never arrives, revisions that never end, logins lost in chats and sites nobody has updated since launch. Verity keeps each site, its owner, its renewals and its hours in one place.',
    oneLine:
      'One system that knows every client site you built, what is waiting on the client, what is due to renew and what you have done but not billed.',
    note: 'Your design tools, code hosting and staging servers stay where they are. Verity runs the agency around them.',
    screen: 'owner',
    screenNote: 'projects, sites, care plans and freelancers',
  },

  today: {
    heading: 'Every site is a project once and a responsibility forever.',
    paragraphs: [
      'A site takes six weeks to build and lives for years. During the build, the agency fights content, feedback and scope. After launch, the agency becomes the person the client calls when anything breaks, expires or looks slow, usually without a contract that says so.',
      'The details sit everywhere: design feedback in a chat, the hosting login in someone’s email, the domain renewal in the client’s inbox, plugin updates in nobody’s calendar. A freelancer built one page and has not been paid. Nobody can say which sites are on a maintenance plan and which are on goodwill.',
      'So the agency finds out from the client. The site is down on a Monday. A form has not delivered leads for three weeks. The client who was promised a quick change now has eleven.',
    ],
    stack: ['Project board', 'Design file comments', 'Client WhatsApp groups', 'Shared password notes', 'Invoice and hours sheet'],
    stackNote: 'Each tool is useful for its own job. None of them tells you the state of the client.',
  },

  painsHeading: 'Where a web agency actually loses money.',
  painsLede:
    'These are the situations agency owners describe again and again. For each one: how it looks, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Projects',
      title: 'The site is ready and the client has not sent the content',
      scene:
        'Week six. Pages are built with placeholder text. The client promised the product descriptions and photos by week three. The agency sends reminders in a group chat that no one answers.',
      cost:
        'Example arithmetic: a ₹3 lakh project that stalls for four extra weeks ties up a designer and a developer for work you cannot bill, and pushes the next project back.',
      fix:
        'Content, logos and approvals are listed as items the client owes, each with a name, a due date and a status. A delay beyond the date moves the project to "waiting on client" and the account manager gets a task to chase.',
      screen: 'projects',
    },
    {
      area: 'Projects',
      title: 'Revision rounds have no limit and no record',
      scene:
        'The quote said two rounds. The client is on the seventh, and the feedback contradicts round three. Nobody can show what was approved when.',
      cost:
        'Designer hours given away, and a client who believes the work is never finished because it is never signed off.',
      fix:
        'Each design and build stage has a round count and a sign-off. Feedback is attached to the round, and a signed-off stage is locked, so new changes become priced change requests.',
      screen: 'projects',
    },
    {
      area: 'Projects',
      title: 'Approvals take days and the launch date still holds',
      scene:
        'The homepage design waits eight days for a decision from a director who is travelling. The agency still promised a go-live date.',
      cost:
        'A deadline missed for a reason that is not yours, which you cannot prove, and a final payment that is held because the launch was late.',
      fix:
        'Every approval is a task for a named person at the client with the date asked. The project timeline shows days waiting on the client, so a slip is explained with dates.',
      screen: 'projects',
    },
    {
      area: 'Launch',
      title: 'Launch day misses the details that hurt later',
      scene:
        'The new site goes live without the redirects from old pages, the analytics code or the form notification email. Leads go to an old inbox for three weeks.',
      cost:
        'Lost enquiries for the client and lost search ranking, both of which will be blamed on the agency.',
      fix:
        'A launch checklist with named owners is part of every project: redirects, forms tested, analytics, backups, sitemap, performance check and client handover. A project cannot be marked live with open items.',
      screen: 'launch',
    },
    {
      area: 'Launch',
      title: 'The site gets slower after launch and nobody measures it',
      scene:
        'A fast site at handover picks up six plugins, a chat widget and large images. Mobile load time doubles. The client notices when sales fall.',
      cost:
        'In one Google-published case, a retailer’s 31% faster largest-content paint came with 8% more sales. Slow sites lose the same effect in reverse.',
      fix:
        'Speed and core web vitals scores are recorded at handover and at each check afterward. A drop beyond your limit creates a task on the site, and the trend is shown to the client in the monthly report.',
      screen: 'launch',
      source: {
        name: 'web.dev case studies on Core Web Vitals and business results',
        url: 'https://web.dev/case-studies/vitals-business-impact',
      },
    },
    {
      area: 'Sites',
      title: 'Domain, hosting and SSL renewals fall between two people',
      scene:
        'The domain was bought on the founder’s card, hosting on the client’s, and the certificate through the agency. When one lapses, the site disappears and nobody knows who gets the reminder.',
      cost:
        'A client’s site offline on a sales day, an emergency fee to recover a domain, and a damaged relationship that no discount repairs.',
      fix:
        'Each site lists every renewable item: domain, hosting, certificate, paid plugins, with owner, payer and date. Items due within 60 days appear on a list, and a renewal task goes to a named person.',
      screen: 'sites',
    },
    {
      area: 'Sites',
      title: 'Plugins and themes go unpatched on live sites',
      scene:
        'Twenty sites built on WordPress have never had an update run since launch. Nobody is assigned to it, and the client assumes it happens automatically.',
      cost:
        'Patchstack counted 11,334 new WordPress vulnerabilities in 2025, 91% of them in plugins. A hacked client site becomes your cleanup job and your reputation problem.',
      fix:
        'Every site has its platform, plugins and last update date on its record. Sites overdue for updates appear on a list, with a task to the maintenance developer and a note whether the client pays for care.',
      screen: 'sites',
      source: {
        name: 'Patchstack, State of WordPress Security in 2026',
        url: 'https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/',
      },
    },
    {
      area: 'Sites',
      title: 'Logins live in chats and in the heads of people who have left',
      scene:
        'A developer resigned. The hosting password for six client sites was in her notes. The client asks for a change and nobody can get in.',
      cost:
        'Hours spent recovering access, and a real security risk when credentials are pasted into groups.',
      fix:
        'Each site records where access is held and who has it, and not the passwords themselves. When someone leaves, a checklist lists the sites they could reach so access is reviewed the same day.',
      screen: 'sites',
    },
    {
      area: 'Support',
      title: 'Small changes after launch are done as favours',
      scene:
        'Change the banner. Add a team member. Fix a typo. Each takes 20 minutes, arrives by WhatsApp and is never logged. By October one client has taken 14 hours with no contract for it.',
      cost:
        'Example arithmetic: 14 unpaid hours a month across 12 clients at ₹1,200 an hour is about ₹2 lakh of free work.',
      fix:
        'Each request is logged against the site and a care plan. Hours used are visible against hours paid, and clients without a plan receive a quote task after the second request.',
      screen: 'care',
    },
    {
      area: 'Support',
      title: 'Care plans are sold once and never reviewed',
      scene:
        'The monthly plan promised updates, backups and two hours of changes. No one can show what was done in the last six months. The client cancels, saying they see nothing.',
      cost:
        'Recurring revenue is the steadiest income an agency has, and it is lost for lack of visible work.',
      fix:
        'Updates, backup checks and changes are recorded against the plan. A monthly summary shows what was done for each client, and renewals come up 45 days ahead.',
      screen: 'care',
    },
    {
      area: 'People',
      title: 'Freelancers are used heavily and managed lightly',
      scene:
        'A freelance designer and two developers work across projects. Their rates, deliveries and pending payments are in a chat. One was paid twice, another not at all.',
      cost:
        'Quality that varies by person, payment disputes, and a project that stops when a freelancer disappears.',
      fix:
        'Freelancers are on the same projects as staff, with agreed rate, deliverable, due date and payment status. You see what each has delivered and what you owe, and who to avoid.',
      screen: 'team',
    },
    {
      area: 'People',
      title: 'Designers are idle one week and double booked the next',
      scene:
        'Three launches land in the same fortnight and the next month is thin. Nobody saw the pattern because projects are tracked separately.',
      cost:
        'Overtime and rushed work in the peak, unbilled salary in the trough.',
      fix:
        'The schedule shows assignments by person and week with leave. Over-booking and idle weeks are flagged six weeks ahead, when there is time to bring in a freelancer or chase a sale.',
      screen: 'team',
    },
    {
      area: 'Money',
      title: 'Quotes are guesses and the project’s real profit is a surprise',
      scene:
        'A five-page brochure site quoted at ₹60,000 took 110 hours. Nobody added it up until the founder wondered why the month was thin.',
      cost:
        'Example arithmetic: 110 hours at an internal cost of ₹700 an hour is ₹77,000 against a ₹60,000 price, a loss that repeats on the next three similar quotes.',
      fix:
        'Hours and freelancer costs are recorded against each project, and finished projects keep estimate against actual by type. The owner view shows profit per project, and the next quote starts from real numbers.',
      screen: 'owner',
    },
    {
      area: 'Money',
      title: 'Final payments wait while the project waits on the client',
      scene:
        'The agreement says 40% on launch. The client delays launch for a month and the invoice cannot be raised. Meanwhile the team’s salaries are paid on time.',
      cost:
        'The agency lends the client money, and chasing becomes the founder’s evening task.',
      fix:
        'Payment stages are tied to milestones. If the delay is the client’s, the project record shows it and a stage can be invoiced after the date in your agreement. Unpaid invoices are listed by client and age.',
      screen: 'money',
    },
    {
      area: 'Compliance',
      title: 'Sites collect personal data and no one has listed where it goes',
      scene:
        'Contact forms, newsletter pop-ups, a cookie banner and a lead export to a spreadsheet. The client assumes the agency checked all of it.',
      cost:
        'A dispute over responsibility when a data complaint arrives, and rework when India’s data protection duties begin to apply.',
      fix:
        'Each site lists the forms and tools that collect personal data, where they send it and who can see it, together with the agreement that covers it. Gaps show up as tasks before the date for the new duties.',
      screen: 'sites',
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
      figure: '11,334',
      text: 'new WordPress vulnerabilities were found in 2025, up 42% from 2024. 91% were in plugins and 46% had no fix from the developer when they were made public.',
      source: { name: 'Patchstack, State of WordPress Security in 2026', year: '2026', url: 'https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/' },
    },
    {
      figure: '31% faster, 8% more sales',
      text: 'result at Vodafone after improving its largest contentful paint, one of the core web vitals. It is a single case study, not a rule.',
      source: { name: 'web.dev case studies', url: 'https://web.dev/case-studies/vitals-business-impact' },
    },
    {
      figure: '13 May 2027',
      text: 'date from which the main duties in India’s data protection rules, including notice, consent and security safeguards, are due to apply. The rules were notified on 13 November 2025.',
      source: { name: 'AZB Partners', year: '2025', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
    },
    {
      figure: '6 hours',
      text: 'is the time within which cyber incidents are generally required to be reported to CERT-In under separate IT rules, as noted in the same legal update.',
      source: { name: 'AZB Partners', year: '2025', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
    },
  ],
  factsNote:
    'The vulnerability count measures flaws disclosed, not sites hacked. The Vodafone result is one case. The legal items come from a law firm update and depend on who is responsible for the data, so confirm them with your lawyer. They show scale, not what your agency will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Stages, plans and sites are set up in your agency’s own words.',
  screens: [
    {
      id: 'owner',
      title: 'Agency / Today',
      meta: 'All clients, this month',
      heading: 'The founder’s overview',
      caption:
        'Projects waiting on clients, sites due to renew, care plan hours, profit by project and what is owed, on one screen.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Projects live', value: '9', note: '4 waiting on client' },
            { label: 'Renewals in 60 days', value: '17', note: 'domains, hosting, SSL' },
            { label: 'Sites overdue for updates', value: '12', note: '5 without care plan' },
            { label: 'Unpaid invoices', value: '₹7.8 L', note: '₹3.1 L past 30 days' },
          ],
        },
        { type: 'title', text: 'Profit by project type, last 6 months' },
        {
          type: 'bars',
          items: [
            { label: 'Online shop builds', value: 74, display: '41%' },
            { label: 'Company websites', value: 46, display: '26%' },
            { label: 'Brochure sites', value: 12, display: '-9%', tone: 'muted' },
            { label: 'Redesigns', value: 30, display: '17%' },
          ],
        },
        { type: 'alert', text: 'Anand Foods domain expires in 9 days. Owner and payer not recorded.', action: 'Assign' },
        {
          type: 'list',
          items: [
            { name: 'Kapoor Dental, content 3 weeks late', meta: 'Go-live promised 24 Oct', tag: ['Chase', 'late', 'Received', 'ok'] },
            { name: 'Freelancer payment due', meta: 'Neha K, 2 pages delivered', tag: ['Pay', 'flag', 'Paid', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      meta: 'By stage',
      heading: 'Every project, and what it is waiting for',
      caption:
        'Projects by stage with revision rounds, content owed by the client and approvals waiting, so delays are explained with dates.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Waiting on client',
              cards: [
                { title: 'Kapoor Dental', meta: 'Content owed since 28 Sep', tag: ['Chase', 'late', 'Received', 'ok'] },
                { title: 'Anand Foods', meta: 'Homepage approval, 8 days', tag: ['Chase', 'flag'] },
              ],
            },
            {
              name: 'Design',
              cards: [
                { title: 'Rao Interiors', meta: 'Round 3 of 2 included', tag: ['Over scope', 'flag', 'Priced', 'info'] },
              ],
            },
            {
              name: 'Build',
              cards: [
                { title: 'Verma Textiles shop', meta: 'Week 4 of 6', tag: ['On track', 'ok'] },
                { title: 'Sharma Clinic', meta: 'Staging review', tag: ['Review', 'info'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'launch',
      title: 'Launch and performance',
      meta: 'Checklist and scores',
      heading: 'Nothing goes live with an open item',
      caption:
        'The launch checklist for one site, and a record of speed scores at handover and each check afterward.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Redirects from old pages tested', meta: 'Aman', done: true },
            { text: 'Forms deliver to the right inbox', meta: 'Pooja', done: true },
            { text: 'Analytics and search console set up', meta: 'Aman', done: false },
            { text: 'Backups scheduled and tested', meta: 'Ravi', done: false },
            { text: 'Client handover note signed', meta: 'Pooja', done: false },
          ],
        },
        {
          type: 'table',
          cols: ['Site', 'At launch', 'Last check', 'Change', 'Action'],
          rows: [
            ['Verma Textiles', '88', '84', '-4', ['OK', 'ok']],
            ['Rao Interiors', '91', '62', '-29', ['Fix images', 'late', 'Fixed', 'ok']],
            ['Kapoor Dental', '79', '77', '-2', ['OK', 'ok']],
          ],
        },
      ],
    },
    {
      id: 'sites',
      title: 'Site',
      meta: 'Record',
      heading: 'One record for every site you built',
      caption:
        'Platform and plugins, last update, renewals with owner and payer, where access is held, backups and the personal data the site collects.',
      blocks: [
        {
          type: 'record',
          title: 'Anand Foods website',
          sub: 'WordPress shop. Launched March 2026. Care plan: none',
          fields: [
            ['Domain expires', ['19 Oct', 'late', 'Renewed', 'ok']],
            ['Domain payer', ['Not recorded', 'flag', 'Client', 'ok']],
            ['Hosting renews', '2 Feb 2027'],
            ['Last plugin update', ['Mar 2026', 'late']],
            ['Access held by', 'Pooja and client'],
            ['Collects data', 'Orders, contact form'],
          ],
          timeline: [
            ['8 Oct', 'Homepage banner changed, 30 minutes, unbilled'],
            ['2 Sep', 'Order form stopped sending emails, fixed'],
            ['15 Mar', 'Launched, handover signed'],
            ['Note', 'Quote the client for a care plan.'],
          ],
        },
      ],
    },
    {
      id: 'care',
      title: 'Care plans and changes',
      meta: 'Hours this month',
      heading: 'Work after launch, counted and shown',
      caption:
        'Each plan’s hours, the updates and checks done, and requests from clients without a plan that should be quoted.',
      blocks: [
        {
          type: 'table',
          cols: ['Client', 'Plan', 'Hours paid', 'Used', 'Status'],
          rows: [
            ['Verma Textiles', 'Standard', '4', '5.5', ['137%', 'late']],
            ['Kapoor Dental', 'Basic', '2', '1', ['50%', 'ok']],
            ['Sharma Clinic', 'Standard', '4', '3.5', ['88%', 'flag']],
            ['Anand Foods', 'No plan', '0', '4', ['Quote', 'late', 'Quoted', 'ok']],
          ],
        },
        { type: 'alert', text: '5 sites without a care plan asked for changes this quarter. Combined 22 hours unbilled.', action: 'Quote all' },
      ],
    },
    {
      id: 'team',
      title: 'Team and freelancers',
      meta: 'Next 4 weeks',
      heading: 'Who is on what, and who is owed',
      caption:
        'Assignments by week, leave, freelancers with their rate and pending payment, and the access each person holds.',
      blocks: [
        {
          type: 'table',
          cols: ['Person', 'Role', 'This week', 'Next week', 'Note'],
          rows: [
            ['Aman', 'Developer', '110%', '100%', ['Over', 'late']],
            ['Pooja', 'Designer', '70%', ['30%', 'flag'], 'Room for work'],
            ['Neha K', 'Freelance designer', '40%', '40%', ['₹14,000 owed', 'flag', 'Paid', 'ok']],
            ['Ravi', 'Developer', '90%', '90%', 'OK'],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Ravi gives notice', meta: 'Has access to 6 client sites', tag: ['Review access', 'late', 'Reviewed', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'money',
      title: 'Quotes and invoices',
      meta: 'Profit and cash',
      heading: 'What each project earned and what is owed',
      caption:
        'Hours and freelancer cost against the price for finished projects, and invoices by age tied to milestones.',
      blocks: [
        {
          type: 'table',
          cols: ['Project', 'Price', 'Cost', 'Profit', 'Invoice'],
          rows: [
            ['Verma Textiles shop', '₹4.2 L', '₹2.6 L', '₹1.6 L', ['40% due', 'flag', 'Raised', 'info']],
            ['Rao Interiors', '₹1.8 L', '₹1.5 L', '₹0.3 L', ['Paid', 'ok']],
            ['Brochure, Joshi Legal', '₹0.6 L', '₹0.77 L', ['-₹0.17 L', 'late'], ['Paid', 'ok']],
            ['Kapoor Dental', '₹2.4 L', '₹1.4 L', '₹1.0 L', ['Held, client delay', 'late']],
          ],
        },
        { type: 'alert', text: 'Kapoor Dental has delayed launch 31 days. Final stage can now be invoiced under your agreement.', action: 'Invoice' },
      ],
    },
  ],

  dayHeading: 'The same Wednesday, before and after.',
  dayLede: 'The websites are built the same way. What changes is that the agency stops finding things out from the client.',
  day: [
    {
      time: '9:30',
      before: 'You scroll through chats to remember which projects are stuck.',
      after: 'The Projects screen shows four waiting on clients, with what is owed and for how long.',
    },
    {
      time: '11:00',
      before: 'A client asks for a seventh round of homepage changes.',
      after: 'Round three was the last included. Further changes become a priced request with the sign-off history attached.',
    },
    {
      time: '1:30',
      before: 'A client calls that their site is down. The domain expired yesterday.',
      after: 'The renewal was on the 60-day list and handled last month.',
    },
    {
      time: '4:00',
      before: 'A developer resigns and nobody knows which sites she can still reach.',
      after: 'A checklist shows six sites, and access is reviewed before she leaves.',
    },
    {
      time: '6:00',
      before: 'You wonder if the brochure site made any money.',
      after: 'The record shows 110 hours against a ₹60,000 price, and the next quote is raised.',
    },
    {
      time: 'Month end',
      before: 'Care plan clients cancel because they cannot see what you did.',
      after: 'Each gets a summary of updates, checks and changes made for them.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how a project moves through your agency and what happens to it after launch, build Verity around that, bring your sites in and stay on to keep it current.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you, a project manager, a designer and a developer. Walk through a live project and an old site you still look after, and list every place information about them hides.',
        you: 'Two to three hours of your time, plus a list of current clients and sites and recent invoices.',
        get: 'A written map of your project stages, client dependencies and after-launch work, with the leaks ranked by cost.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up project stages, revision rules, launch checklist, site record fields, care plan types, freelancer terms and approval limits. We agree how hours and task data reach Verity.',
        you: 'Review the checklist and the plan terms with your project manager. Correct anything that does not match your practice.',
        get: 'A working Verity with your stages, checklist and plans, ready for your sites.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Enter your clients and sites, with renewals, platforms and access holders. Bring in open projects, care plans, freelancer terms and unpaid invoices. Train the team on a live project.',
        you: 'Whatever list of sites, renewals and invoices you have. One hour with each role.',
        get: 'Every site with its renewal dates, and every open project in one place.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Review the first month with you: renewals caught, changes quoted, delays explained. Adjust rules and add new site types as the agency grows.',
        you: 'A short monthly review.',
        get: 'An agency record that keeps pace with new clients and sites, with someone responsible for it.',
      },
    ],
    bring: [
      'A list of client sites with platform and hosting where known',
      'Domain, hosting and certificate renewal dates as far as you have them',
      'Your project quote template and revision terms',
      'Your care plan terms and prices',
      'A list of freelancers with agreed rates and unpaid amounts',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your project manager needs a few more.',
    after: 'No one has to be hired to run Verity. Approvals, renewals and hours are recorded as part of work your team already does.',
  },

  ai: {
    heading: 'Ask your agency a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own project, site, hours and invoice records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which domains or hosting plans expire in the next 45 days?',
        a: 'Eleven items expire in 45 days. Two have no payer recorded and one is within 9 days.',
        rows: [['Anand Foods domain', '9 days'], ['Rao Interiors hosting', '21 days'], ['Verma Textiles SSL', '30 days'], ['Others', '8 items']],
        action: 'Create renewal tasks with a named person for each',
      },
      {
        q: 'Which sites have not had plugin updates in six months?',
        a: 'Twelve sites have not been updated in six months. Seven have a care plan and five do not.',
        action: 'Assign updates for the seven and quotes for the five',
      },
      {
        q: 'Which project types make us the least money?',
        a: 'Brochure sites lose 9% on average because they run over estimate. Online shop builds earn 41%.',
        rows: [['Online shops', '41%'], ['Company websites', '26%'], ['Redesigns', '17%'], ['Brochure sites', '-9%']],
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Your people still talk to clients. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'Content or approval is overdue from a client',
      then: ['Project moves to waiting on client', 'Task to the account manager to chase', 'Days waiting added to the project timeline'],
    },
    {
      when: 'A design stage passes its included revision rounds',
      then: ['Next round flagged as a change request', 'Price task to the project manager', 'Client approval recorded before work starts'],
    },
    {
      when: 'A domain, hosting plan or certificate is 60 days from expiry',
      then: ['Added to the renewal list with owner and payer', 'Task to a named person', 'Renewal recorded and next date set'],
    },
    {
      when: 'A site has gone 90 days without updates',
      then: ['Added to the update list', 'Task to the maintenance developer', 'Quote task if the client has no care plan'],
    },
    {
      when: 'A care plan reaches 80 percent of its hours',
      then: ['Alert to the account manager', 'Remaining hours shown', 'Option to quote extra hours'],
    },
    {
      when: 'A team member or freelancer leaves',
      then: ['List of sites they could reach', 'Access review task for each', 'Handover checklist for open projects'],
    },
  ],

  rules: {
    heading: 'The rules a web agency has to keep up with.',
    lede:
      'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your lawyer is not rebuilding them from chats.',
    items: [
      {
        name: 'Personal data collected by client sites',
        what: 'India’s data protection rules were notified on 13 November 2025. The main duties on notice, consent and safeguards are due to apply from 13 May 2027. Your clients are generally responsible for the data their sites collect, and you may handle it for them.',
        how: 'Each site lists its forms, cookies and tools that collect personal data, where the data goes, who can see it and the agreement that covers it.',
        source: { name: 'AZB Partners', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Reporting a security incident',
        what: 'Separate IT rules generally require certain cyber incidents to be reported to CERT-In within six hours. If a client site you look after is compromised, who reports and how fast should already be agreed.',
        how: 'The site record shows who is responsible for security, who holds access and who to contact at the client.',
        source: { name: 'AZB Partners', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Ownership of the site, domain and content',
        what: 'Your contract decides who owns the source files, the domain, hosting accounts and images, and what happens at the end of the work. Many disputes begin because the contract is silent.',
        how: 'Each site records the owner of each account and the clause that applies, so handover at the end of an engagement is quick.',
      },
      {
        name: 'Fonts, images and plugin licences',
        what: 'Stock images, fonts and paid plugins have licences that may cover one site or one client. Reuse beyond the licence can lead to claims.',
        how: 'Licensed items are recorded against the site with the licence holder and renewal date.',
      },
    ],
    note: 'Rules change and differ by situation. Confirm current requirements with your lawyer, accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A freelancer does not need to see profit. A designer does not need renewal payers. Each role opens on what it needs.',
  roles: [
    { role: 'Founder', question: 'Which projects and clients make money?', sees: 'Profit by project type, care plan revenue, renewals at risk, unpaid invoices and capacity.' },
    { role: 'Project manager', question: 'What is stuck and why?', sees: 'Projects by stage, items owed by clients, revision rounds, approvals waiting and the schedule.' },
    { role: 'Designer or developer', question: 'What am I building and what is signed off?', sees: 'Their tasks, the approved design, change requests and the site record.' },
    { role: 'Account manager', question: 'What does this client need to hear today?', sees: 'Client status, renewals, care plan hours, quotes pending and what the client owes.' },
    { role: 'Finance', question: 'What can we invoice and what is late?', sees: 'Milestones reached, freelancer payments due, unpaid invoices by age and renewal payers.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your design tools, code hosting and staging servers.',
      'Your hosting provider and the tools that run backups and updates. Verity records what is done.',
      'WhatsApp and email with clients. Your staff talk, and the decision is written against the project.',
      'Your accounting software and your accountant.',
    ],
    not: [
      'Design, build or host websites.',
      'Run updates or backups on sites by itself.',
      'Send messages to clients on its own.',
      'Store passwords, run payroll or file your returns.',
    ],
    migration:
      'We bring your client list, sites, renewals, open projects and unpaid invoices across from the sheets and boards you use now, in stages, so live projects continue while we do it.',
  },

  faqHeading: 'Questions agency owners ask.',
  faqs: [
    [
      'Do my designers and developers have to change how they work?',
      'Not much. They keep their design and code tools. They record hours, approvals and requests in Verity, which we keep to a few seconds each, and we train on live projects.',
    ],
    [
      'Does it store client passwords?',
      'No. Verity records where access is held and who has it, and flags when someone with access leaves. We suggest a proper password manager for the credentials themselves.',
    ],
    [
      'Can Verity update my clients’ websites?',
      'No. Your team does the updates. Verity lists the sites that are overdue, assigns the task and records when it is done.',
    ],
    [
      'We build on many platforms, not only WordPress. Does it matter?',
      'No. The site record holds whatever platform you use and its renewals and updates. You name the fields in your own words.',
    ],
    [
      'Can I show clients what we did on their care plan?',
      'Yes. Updates, checks and changes are recorded against the plan, so a monthly summary of work done can be prepared from those records.',
    ],
    [
      'We have six people. Is this too much?',
      'A small agency loses the most to one missed renewal or a pile of free changes. We set up only what you need and the four weeks are the same.',
    ],
    [
      'Can it help with freelancers?',
      'Yes. Freelancers sit on projects with an agreed rate and due date. You see what they delivered, what you owe and which projects depend on them.',
    ],
    [
      'Who can see what?',
      'Only the people you allow. Access is set by role, so freelancers, designers, account managers and finance each see what they need, and every change is recorded with who and when.',
    ],
    [
      'What does it cost?',
      'It depends on the number of people, sites and what you want set up. Message us and we will give you a clear number after a short conversation about how your agency runs.',
    ],
  ],

  related: ['software-agencies', 'app-developers', 'design-agencies', 'marketing-agencies', 'it-services-companies', 'content-agencies'],

  ctaHeading: 'Start with the renewals and the free changes.',
  ctaLede:
    'Tell us how your agency runs and we will show you the renewals coming up, the sites overdue for updates and the unbilled changes it would find, using your own numbers.',
};
