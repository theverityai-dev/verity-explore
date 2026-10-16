export default {
  schema: 2,
  slug: 'law-firms',
  status: 'published',
  plural: 'law firms',
  subject: 'law firm',
  checked: '15 October 2026',

  seo: {
    title: 'Law firm software for India: matters, hearings, billing | Verity',
    description:
      'The 14 problems that put a law firm at risk: missed dates, conflicts, unbilled time, loose client money and lost orders, and the Verity matter screens that fix each one.',
    keywords: [
      'law firm practice management software India',
      'advocate case diary and hearing dates',
      'law firm time and billing tracking',
      'conflict of interest check law firm',
      'client money ledger advocate',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for law firms',
    headline: 'The next hearing date is in one junior’s diary. The limitation date is in another’s head. Verity puts both on one screen.',
    lede:
      'A law firm sells judgement, but it runs on dates, documents, money held for clients and hours that were worked and never billed. Most firms keep these in a court diary, an email folder, a cash book and memory. Verity gives each matter one record that knows the next date, the last order, the people on it and what is owed.',
    oneLine:
      'One system where every matter shows its stage, its next hearing and its limitation dates, its documents, its time and its client money, and where the partner sees all of it without asking.',
    note: 'Your lawyers keep drafting in Word and filing on the court portals. Verity holds the matter around that work.',
    screen: 'owner',
    screenNote: 'matters, hearings, billing and client money',
  },

  today: {
    heading: 'A firm can be excellent in court and blind at the desk.',
    paragraphs: [
      'The legal work is visible: a good argument, a clean draft, a settlement reached. What is not visible is the rest of the system around it. Which of the 140 live matters has a hearing tomorrow in a court two cities away. Which notice has 12 days left to reply. Which client paid a deposit for court fees that has not been accounted for. Which hours were worked and never put on a bill.',
      'That information exists, but in pieces: a diary kept by each junior, the court portals and cause lists, an email folder per client, a cash book and a billing spreadsheet. The partner is usually in court, so the system that connects the pieces is a clerk or a very good associate.',
      'The cost of a gap is high. A missed date can mean an ex parte order. A missed limitation date can end a claim. A conflict found after the engagement is signed can force the firm to leave a client. And a courts system carrying crores of pending cases means each hearing that does happen counts.',
    ],
    stack: ['Court diary per lawyer', 'Court portals and cause lists', 'Email folder per client', 'Cash book and billing spreadsheet', 'Clerk’s memory of every file'],
    stackNote: 'Each is fine for one job. None of them tells the firm the full state of a matter.',
  },

  painsHeading: 'Where a law firm actually loses money and takes risk.',
  painsLede:
    'These are the situations partners and associates describe again and again. For each one: what it looks like on an ordinary week, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Dates',
      title: 'A hearing date is missed or sits in only one person’s diary',
      scene:
        'The junior who keeps the diary for a bank’s recovery matters is on leave. The matter is listed tomorrow in a tribunal, and the senior only finds out at 7 pm when the clerk calls.',
      cost:
        'An adjournment at best. At worst an ex parte order, a dismissal for default, or a client who loses faith. The cost is impossible to put a number on until it happens.',
      fix:
        'Every hearing is a dated entry on the matter with court, bench, stage, counsel and a backup. Verity shows a daily and weekly diary for each lawyer and the whole firm, and tells the backup when the main person is away.',
      screen: 'diary',
    },
    {
      area: 'Dates',
      title: 'Limitation and reply deadlines are tracked in notebooks',
      scene:
        'A notice under a statute must be answered in 30 days. An appeal must be filed within a fixed time from the order. The dates are in a notebook and on a few sticky notes. One order was received by the client weeks before it reached the firm.',
      cost:
        'A missed statutory date can end a client’s case. Limitation rules are strict and delay can only be excused in limited cases, so the cost of one miss is the matter itself.',
      fix:
        'The matter records the order or event date, the type of deadline and the calculated last date, with an earlier warning date. Verity lists deadlines by days left across the firm, with the responsible lawyer and checker named.',
      screen: 'deadlines',
    },
    {
      area: 'Matters',
      title: 'What happened at the last hearing lives in a junior’s notes',
      scene:
        'The senior asks what the court said on the last date. The junior finds a note in her phone. The certified order has not been uploaded, and the next date is not on the file.',
      cost:
        'Repeated work, wrong preparation, and a hearing in which the lawyer is less ready than the other side.',
      fix:
        'After each hearing a short note is added to the matter: what was argued, the order, the next date and directions. The order is attached when it is received, and the next hearing is created from the note.',
      screen: 'matter',
    },
    {
      area: 'Matters',
      title: 'Documents live in email chains and personal drives',
      scene:
        'The latest draft of an agreement is somewhere in a thread of nine mails. Two associates edited different versions. A client sends a signed copy on WhatsApp that is never added to the file.',
      cost:
        'Hours lost every week finding things, and a risk of filing or sending the wrong version.',
      fix:
        'Pleadings, drafts, orders and correspondence are attached to the matter with a name, date and author. Anyone with access sees the same current file and the history of changes.',
      screen: 'matter',
    },
    {
      area: 'Intake',
      title: 'Conflicts are discovered after the engagement letter is signed',
      scene:
        'A new client asks the firm to act against a company. A junior partner recalls that another partner acted for a group company three years ago. Nobody searched before accepting the brief.',
      cost:
        'The firm may have to withdraw, return fees and lose both clients. The professional rules on conflicts apply to every advocate.',
      fix:
        'New enquiries are checked against every client, opposite party, related company and past matter on file before the matter opens. Matches are shown to the partner for a decision, and the decision is recorded.',
      screen: 'intake',
    },
    {
      area: 'Billing',
      title: 'Time is worked and never billed',
      scene:
        'A senior associate spends two days on a due diligence review. The hours are in her head and a calendar. By month end the invoice is built from what she remembers, and a day is quietly lost.',
      cost:
        'Example arithmetic: 20 lawyers losing one billable hour a week at an average ₹3,000 an hour is about ₹31 lakh a year in work done and not charged.',
      fix:
        'Time is entered against the matter as it is worked, with the task. Verity shows unbilled time per matter and per lawyer, and builds a draft fee note for the partner to review. Verity does not issue tax invoices.',
      screen: 'billing',
    },
    {
      area: 'Billing',
      title: 'Fees are late, disputed or never chased',
      scene:
        'A corporate client has outstanding fee notes worth ₹6 lakh across four matters. The partner dislikes asking. Reports on Indian firms describe late payment and renegotiation as a routine problem, especially with larger clients.',
      cost:
        'Cash flow squeezed for a firm that pays salaries and rent on time, and, in the worst case, work done for a client who then disappears.',
      fix:
        'Fee notes and retainers are tracked per client and per matter with age and dates. Verity lists overdue amounts by client and partner and creates a follow-up task with the history of what was agreed.',
      screen: 'billing',
    },
    {
      area: 'Money',
      title: 'Client money and court expenses are mixed with the firm’s',
      scene:
        'A client sends ₹2 lakh for court fees and stamp duty. It goes into the same account as fees. A month later nobody can say how much was spent on whose matter, or what remains.',
      cost:
        'Professional-conduct risk, client disputes about expenses, and an accountant who cannot separate money held from money earned.',
      fix:
        'Money received for expenses is recorded as held for the client and the matter. Each payment out is tied to it, and the balance is visible to the partner. Verity does not hold funds or file accounts; it keeps the ledger.',
      screen: 'clientmoney',
    },
    {
      area: 'Clients',
      title: 'Clients keep calling to ask what happened',
      scene:
        'A promoter calls the partner three times in a week for an update. The associate who knows is in court. The partner asks someone else, who has to find the file.',
      cost:
        'Interrupted work, an anxious client, and calls that should have been a one-line update.',
      fix:
        'The matter record always shows the latest hearing note, next date and open tasks, so any lawyer can answer in a minute. Verity creates a follow-up task for client updates after each hearing, and your team sends the message.',
      screen: 'matter',
    },
    {
      area: 'Team',
      title: 'Work is handed out by who is nearby, not who has capacity',
      scene:
        'The same two associates get every urgent brief. One is on 24 live matters and four drafts due Friday. Another has capacity and is never asked.',
      cost:
        'Missed deadlines, burnout, and juniors who learn nothing new before they leave.',
      fix:
        'Each lawyer’s matters, deadlines and tasks are shown against their capacity. The partner assigns work by looking at the load, and reassigning a matter moves its dates and tasks with it.',
      screen: 'team',
    },
    {
      area: 'Courts',
      title: 'Two hearings at once, in two courts',
      scene:
        'A partner is listed at 10:30 in the High Court and at 11 in a consumer forum across town. The junior who could have covered is also in court. The clash is found when the clerk reads both cause lists.',
      cost:
        'A mentioning counsel who is unprepared, or a request for time that annoys the bench.',
      fix:
        'The diary checks each lawyer’s hearings by time and place, flags clashes before the day, and shows who else on the team knows the matter.',
      screen: 'diary',
    },
    {
      area: 'Team',
      title: 'When an associate leaves, the knowledge leaves with her',
      scene:
        'An associate who handled twelve arbitration files resigns with a month’s notice. Her notes and drafts are on her laptop and in her mailbox. Two clients ask for her by name.',
      cost:
        'Rework, errors at handover, and clients who follow her to the next firm.',
      fix:
        'Matters, notes, drafts and tasks sit in the firm’s system. A resignation produces a handover list of live matters with next dates and open tasks, and reassigning moves them in one step.',
      screen: 'team',
    },
    {
      area: 'Compliance',
      title: 'Confidential files are open to everyone, or locked away from those who need them',
      scene:
        'A sensitive matter for a listed company is in a shared folder visible to the whole firm. Another matter is restricted so tightly that the covering lawyer cannot open it on the day of the hearing.',
      cost:
        'A breach of client confidentiality, or a hearing without the papers. Client personal data is also covered by India’s data protection rules.',
      fix:
        'Each matter has a team list. Only those people, and partners you name, can open it. Every view and change is recorded, and sensitive matters can be walled off from named lawyers.',
      screen: 'intake',
    },
    {
      area: 'Owner',
      title: 'The partners cannot see the firm in one view',
      scene:
        'At the quarterly meeting, nobody can say which practice area makes money, how many matters are older than three years, or how much work is in progress and not billed.',
      cost:
        'Decisions on hires, rates and which clients to keep are made on feel rather than facts.',
      fix:
        'The practice view shows matters by stage and age, billing against time, collections by client and capacity by lawyer, built from the records the team already enters.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '4.77 crore',
      text: 'cases pending in district and subordinate courts as on 31 December 2025, according to the National Judicial Data Grid figures given to Parliament.',
      source: { name: 'IANS, quoting a Lok Sabha reply of 13 February 2026', year: '2026', url: 'https://ianslive.in/over-476-crore-cases-pending-across-indian-courts-govt-tells-parliament--20260213184542' },
    },
    {
      figure: '63.66 lakh',
      text: 'cases pending in the 25 High Courts at the same date.',
      source: { name: 'IANS, quoting a Lok Sabha reply of 13 February 2026', year: '2026', url: 'https://ianslive.in/over-476-crore-cases-pending-across-indian-courts-govt-tells-parliament--20260213184542' },
    },
    {
      figure: '95,718',
      text: 'cases pending in the Supreme Court on 1 August 2026, up 1,404 from the end of June, according to the National Judicial Data Grid.',
      source: { name: 'Supreme Court Observer', year: '2026', url: 'https://www.scobserver.in/journal/july-2026-pendency-increases-after-partial-break/' },
    },
    {
      figure: '1 July 2024',
      text: 'is when the Bharatiya Nagarik Suraksha Sanhita replaced the Code of Criminal Procedure, so every criminal practice had to relearn its procedure and timelines.',
      source: { name: 'Wikipedia, Bharatiya Nagarik Suraksha Sanhita', year: '2024', url: 'https://en.wikipedia.org/wiki/Bharatiya_Nagarik_Suraksha_Sanhita' },
    },
  ],
  factsNote:
    'Court pendency figures change daily and the government replies cited here use different cut-off dates, so treat them as the scale of the problem. The pendency numbers are reported by the press and the Supreme Court Observer from the National Judicial Data Grid. Wikipedia is used for the date of the criminal procedure change. None of these show what your firm will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Matters, hearings and fee notes are named as your firm names them.',
  screens: [
    {
      id: 'owner',
      title: 'Practice / Today',
      meta: 'Whole firm',
      heading: 'The partner’s morning view',
      caption:
        'Hearings this week, deadlines about to pass, unbilled time and overdue fees on one screen, with the items that need a decision listed below. It replaces the morning round of asking each associate.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Hearings this week', value: '23', note: '4 need a decision' },
            { label: 'Deadlines in 10 days', value: '9', note: '2 within 3 days' },
            { label: 'Unbilled time', value: '₹14.2 lakh', note: '312 hours' },
            { label: 'Fees overdue', value: '₹9.6 lakh', note: '7 clients' },
          ],
        },
        { type: 'title', text: 'Live matters by lawyer' },
        {
          type: 'bars',
          items: [
            { label: 'Associate Mehta', value: 90, display: '24 matters' },
            { label: 'Associate Iyer', value: 65, display: '17 matters' },
            { label: 'Associate Nair', value: 40, display: '11 matters', tone: 'muted' },
            { label: 'Associate Khan', value: 30, display: '8 matters', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Reply to the notice for Sunrise Infra is due in 3 days. Draft not yet reviewed.', action: 'Open matter' },
        {
          type: 'list',
          items: [
            { name: 'Tomorrow’s hearing, Tribunal Bench 2', meta: 'Counsel on leave, backup not named', tag: ['Assign', 'late', 'Assigned', 'ok'] },
            { name: 'Conflict check: Rao Textiles', meta: 'One possible match with a past client', tag: ['Decide', 'flag', 'Cleared', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'diary',
      title: 'Hearing diary',
      meta: 'This week, all courts',
      heading: 'Every hearing, every court, one diary',
      caption:
        'Court, bench, matter, stage and counsel for each date, with a backup named. Clashes between a lawyer’s hearings are flagged before the day.',
      blocks: [
        {
          type: 'table',
          cols: ['Date', 'Court', 'Matter', 'Counsel', 'Status'],
          rows: [
            ['Tue 10:30', 'High Court, Court 12', 'Patel v. State Bank', 'Mehta', ['Clash with 11:00', 'late', 'Covered', 'ok']],
            ['Tue 11:00', 'Consumer forum', 'Gupta v. Builder', 'Mehta', ['Clash', 'late', 'Iyer covers', 'ok']],
            ['Wed 2:00', 'Tribunal, Bench 2', 'Sunrise Infra, recovery', 'Nair', ['No backup', 'flag', 'Backup named', 'ok']],
            ['Thu 10:30', 'District court', 'Rao v. Rao, family', 'Khan', ['Ready', 'ok']],
            ['Fri 3:00', 'Arbitration', 'Delta v. Orbit', 'Iyer', ['Brief due', 'flag']],
          ],
        },
        { type: 'alert', text: '1 clash and 1 hearing without a backup this week.', action: 'Resolve' },
      ],
    },
    {
      id: 'deadlines',
      title: 'Deadlines and limitation',
      meta: 'Across the firm',
      heading: 'Last dates, counted from the event',
      caption:
        'Each deadline stores the triggering order or notice, the rule that sets the period, the calculated last date and a warning date. The lawyer who prepares it and the lawyer who checks it are both named.',
      blocks: [
        {
          type: 'table',
          cols: ['Matter', 'Deadline', 'Trigger date', 'Last date', 'Status'],
          rows: [
            ['Sunrise Infra', 'Reply to statutory notice', '19 Sep', '19 Oct, 3 days', ['Draft pending', 'late', 'Filed', 'ok']],
            ['Gupta v. Builder', 'Written statement', '2 Oct', '1 Nov, 16 days', ['Drafting', 'flag']],
            ['Patel v. State Bank', 'Appeal against order', '28 Sep', '28 Oct, 12 days', ['Check period', 'flag', 'Confirmed', 'ok']],
            ['Delta v. Orbit', 'Counter-claim', '10 Oct', '9 Nov, 24 days', ['On track', 'ok']],
          ],
        },
        { type: 'alert', text: '2 deadlines have no second checker named.', action: 'Assign checker' },
      ],
    },
    {
      id: 'matter',
      title: 'Matter',
      meta: 'Patel v. State Bank',
      heading: 'One page for the whole matter',
      caption:
        'Parties, court, stage, the team, the last hearing note, the next date, documents and open tasks. Anyone covering can answer a client’s call from this page.',
      blocks: [
        {
          type: 'record',
          title: 'Patel v. State Bank',
          sub: 'High Court, writ petition. Partner: Rao. Associate: Mehta',
          fields: [
            ['Client', 'Patel Industries'],
            ['Stage', 'Arguments'],
            ['Next hearing', ['Tue 10:30, Court 12', 'flag', 'Covered', 'ok']],
            ['Open deadline', ['Appeal in 12 days', 'late']],
            ['Unbilled time', '41 hours'],
            ['Client money held', '₹1.2 lakh'],
          ],
          timeline: [
            ['12 Oct', 'Hearing: respondent sought two weeks, listed 21 Oct'],
            ['3 Oct', 'Rejoinder filed, receipt attached'],
            ['21 Sep', 'Interim order continued'],
            ['Note', 'Client prefers a call after each date, not email.'],
          ],
        },
      ],
    },
    {
      id: 'intake',
      title: 'New matter and conflicts',
      meta: 'Intake',
      heading: 'Checked before it is accepted',
      caption:
        'A new brief is checked against clients, opposite parties, related entities and past matters before the engagement is signed. A match goes to a partner for a decision, with the reason recorded and any walls set up.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Client and group companies searched', meta: 'Rao Textiles and 3 related entities', done: true },
            { text: 'Opposite party searched', meta: 'Possible match: Zenith Exports, past client 2022', done: false },
            { text: 'Partner decision recorded', meta: 'Awaiting Partner Rao', done: false },
            { text: 'Engagement letter and fee terms', meta: 'Draft ready', done: true },
            { text: 'Matter team and access set', meta: 'Mehta, Iyer, Partner Rao only', done: true },
          ],
        },
        { type: 'alert', text: 'One possible conflict needs a partner’s decision before the matter opens.', action: 'Review' },
      ],
    },
    {
      id: 'billing',
      title: 'Time and fees',
      meta: 'Unbilled and overdue',
      heading: 'Hours worked, fee notes sent, money collected',
      caption:
        'Time entered against each matter, draft fee notes for the partner’s review, and overdue amounts by client with age. Invoices are issued through your usual accounts process.',
      blocks: [
        {
          type: 'table',
          cols: ['Client', 'Unbilled hours', 'Unbilled value', 'Overdue', 'Status'],
          rows: [
            ['Patel Industries', '41', '₹1.6 lakh', '₹0', ['Draft fee note', 'flag', 'Sent', 'ok']],
            ['Sunrise Infra', '28', '₹1.1 lakh', '₹2.4 lakh', ['Overdue 62 days', 'late']],
            ['Gupta Builders', '12', '₹48,000', '₹1.2 lakh', ['Overdue 31 days', 'flag', 'Paid', 'ok']],
            ['Delta Corp', '60', '₹2.4 lakh', '₹0', ['Retainer covers', 'ok']],
          ],
        },
        { type: 'title', text: 'Overdue fees by age' },
        {
          type: 'bars',
          items: [
            { label: 'Under 30 days', value: 30, display: '₹2.0 lakh', tone: 'muted' },
            { label: '30 to 60 days', value: 55, display: '₹3.6 lakh' },
            { label: 'Over 60 days', value: 60, display: '₹4.0 lakh' },
          ],
        },
      ],
    },
    {
      id: 'clientmoney',
      title: 'Client money',
      meta: 'Held for expenses',
      heading: 'Money held for clients, matter by matter',
      caption:
        'What each client sent for court fees, stamp duty and expenses, what was spent and on what, and what remains. It is kept separate from fees earned.',
      blocks: [
        {
          type: 'table',
          cols: ['Matter', 'Received', 'Spent', 'Held', 'Note'],
          rows: [
            ['Patel v. State Bank', '₹2.0 lakh', '₹80,000', '₹1.2 lakh', ['Receipts matched', 'ok']],
            ['Gupta v. Builder', '₹60,000', '₹58,000', '₹2,000', ['Ask for top-up', 'flag', 'Requested', 'ok']],
            ['Rao v. Rao', '₹25,000', '₹31,000', '-₹6,000', ['Overspent', 'late']],
            ['Delta v. Orbit', '₹1.5 lakh', '₹40,000', '₹1.1 lakh', ['Matched', 'ok']],
          ],
        },
        { type: 'alert', text: 'Rao v. Rao has spent ₹6,000 more than was received. Write to the client.', action: 'Create task' },
      ],
    },
  ],

  dayHeading: 'The same Tuesday, before and after.',
  dayLede: 'The cases and the courts are the same. What changes is that the firm’s state is written down in one place and the dates do the reminding.',
  day: [
    {
      time: '8:30',
      before: 'You ask the clerk what is listed today and check three lawyers’ diaries for clashes.',
      after: 'The diary shows today’s hearings by lawyer. One clash is already covered and one hearing has a backup.',
    },
    {
      time: '11:00',
      before: 'A client calls for an update. The associate is in court. The partner asks the clerk to look for the file.',
      after: 'Anyone opens the matter page and reads the last hearing note and the next date to the client.',
    },
    {
      time: '1:30',
      before: 'A new bank asks the firm to act. You say yes and a partner recalls a conflict a week later.',
      after: 'The intake check flags a possible conflict before the engagement letter goes out.',
    },
    {
      time: '4:00',
      before: 'Notice reply is due in three days, and you learn it from a sticky note.',
      after: 'The deadlines list shows it at the top with the lawyer and the checker, since morning.',
    },
    {
      time: '6:30',
      before: 'The day’s hours exist in a calendar and a few memories. Billing will be done at month end.',
      after: 'The day’s time is on the matters. The partner sees the unbilled value per client as it builds.',
    },
    {
      time: 'Month end',
      before: 'Fee notes are built from memory, client money is reconciled by hand and the accountant waits.',
      after: 'Draft fee notes are ready for review. The client money ledger shows balance by matter.',
    },
  ],

  approach: {
    heading: 'Four weeks, built around your live matters.',
    lede:
      'We start from matters you are already running, not a sample firm. We learn how your partners, associates and clerks actually work a file, build Verity around that, move your live matters across, and stay on as the practice changes.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day with the managing partner and a senior associate. Follow three live matters from intake to the latest hearing and note the diaries, folders and ledgers each one touches.',
        you: 'Two to three hours from a partner and an hour from a senior associate. Your diaries, a list of live matters and a recent fee note.',
        get: 'A written map of how a matter runs in your firm, your practice areas and courts, the deadlines you track and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your matter types by practice area, courts and benches, deadline rules, roles and access, rate cards, retainer and fee-note formats, the client money ledger, and conflict-check rules.',
        you: 'Check the setup with a senior partner. Tell us where a deadline rule or access rule is wrong for the work you do.',
        get: 'A working Verity with your matter types, courts and rules in your own words, ready for your live files.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in live matters, clients, parties, next dates, key documents, open fee notes and client money balances from your diaries, spreadsheets and folders. Train lawyers and clerks on their own matters.',
        you: 'Your matter list, diaries and cash book, in whatever shape they exist. An hour with each practice group and the clerks.',
        get: 'Your live matters, dates and balances inside Verity, and a team that has used it on its own files.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through the first month of hearings to tune the diary, deadline lists and access rules, and adapt the setup as you add a practice area or office.',
        you: 'A short monthly review of unbilled time, overdue fees and deadlines caught.',
        get: 'A system that keeps matching how the firm works, with someone responsible for it.',
      },
    ],
    bring: [
      'A list of live matters with court, stage and next date',
      'Your diaries and any deadline registers',
      'Client and opposite-party lists for conflict checks',
      'Recent fee notes, retainer terms and the client money cash book',
      'Your lawyers’ rate card and how you bill each practice area',
    ],
    time: 'About 8 to 12 hours of a partner’s time across the four weeks, mostly in week 1. A senior associate and your accounts person need a few more.',
    after: 'Nobody is hired to run Verity. Lawyers add a hearing note and their time as part of the work, and the diaries, lists and ledgers come from those entries.',
  },

  ai: {
    heading: 'Ask your firm a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own matter, hearing, time and money records, and respects who may see which matter. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which matters have a deadline in the next 10 days with no checker named?',
        a: '2 of 9 deadlines have no second checker: the Sunrise Infra reply and the Gupta written statement.',
        rows: [['Sunrise Infra', 'Reply, 3 days'], ['Gupta v. Builder', 'Written statement, 16 days']],
        action: 'Assign a checker for each',
      },
      {
        q: 'Which clients have overdue fees above ₹1 lakh?',
        a: '3 clients owe ₹7.6 lakh in total. Sunrise Infra is the oldest at 62 days.',
        rows: [['Sunrise Infra', '₹2.4 lakh'], ['Gupta Builders', '₹1.2 lakh'], ['Others', '₹4.0 lakh']],
        action: 'Create a follow-up task for each partner',
      },
      {
        q: 'How much unbilled time do we have on arbitration matters?',
        a: '162 hours worth ₹6.5 lakh. Delta v. Orbit accounts for 60 hours.',
        rows: [['Delta v. Orbit', '60 hrs'], ['Orion v. Vasu', '54 hrs'], ['Others', '48 hrs']],
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Lawyers still draft and file, and staff still call and write. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'An order or notice is recorded on a matter',
      then: ['Deadline created with last date and warning date', 'Preparer and checker named', 'Escalates to the partner at the warning date'],
    },
    {
      when: 'A hearing is added to the diary',
      then: ['Counsel and backup recorded', 'Clashes with the lawyer’s other hearings checked', 'Hearing-note task created for after the date'],
    },
    {
      when: 'A hearing note is saved',
      then: ['Next date created on the matter', 'Client-update task assigned', 'Order task raised until the certified copy is attached'],
    },
    {
      when: 'A new brief is entered',
      then: ['Parties searched against past matters', 'Possible conflicts sent to a partner', 'Matter stays closed until a decision is recorded'],
    },
    {
      when: 'A fee note is overdue by 30 days',
      then: ['Added to the client’s overdue list', 'Follow-up task to the responsible partner', 'Outcome and promised date recorded'],
    },
    {
      when: 'Money for expenses is received',
      then: ['Recorded as held for the client and matter', 'Each payment out is matched to it', 'Top-up task when the balance falls below a limit'],
    },
  ],

  rules: {
    heading: 'The rules a law firm has to keep up with.',
    lede: 'Verity does not give legal advice and does not file anything for you or the court. It keeps the records these rules depend on in order, so the firm is not rebuilding them when a question is raised.',
    items: [
      {
        name: 'Limitation and statutory time limits',
        what: 'Suits, appeals, replies to notices and filings each run on fixed periods counted from a set event, and a delay can be excused only in limited cases. Periods differ by law and forum, so the responsible lawyer must confirm each one.',
        how: 'Every deadline stores its trigger, rule, last date and warning date, with the preparer and checker named. Verity does not calculate the law for you; the lawyer confirms the period.',
      },
      {
        name: 'Professional conduct and conflicts',
        what: 'Advocates are bound by the Bar Council of India’s professional standards, including duties on conflicts of interest, handling client money and fees. Check the current rules and your State Bar Council’s requirements.',
        how: 'Conflict checks, partner decisions, client money ledgers and fee terms are kept as records with dates and names.',
      },
      {
        name: 'New criminal procedure laws',
        what: 'The Bharatiya Nagarik Suraksha Sanhita replaced the Code of Criminal Procedure from 1 July 2024, along with the other new criminal codes. Time limits and procedures differ in places, so criminal teams need to check the new provisions.',
        how: 'Matter types carry the correct law for each case, and old and new references are recorded on the matter.',
        source: { name: 'Wikipedia, Bharatiya Nagarik Suraksha Sanhita', url: 'https://en.wikipedia.org/wiki/Bharatiya_Nagarik_Suraksha_Sanhita' },
      },
      {
        name: 'Client confidentiality and data protection',
        what: 'Client files carry personal and commercial secrets. India’s data protection rules apply to personal data, with duties that start in phases. Check current requirements with your own adviser.',
        how: 'Matter access lists, views and changes are recorded, and sensitive matters can be walled off from named lawyers.',
      },
    ],
    note: 'Rules change and differ by court and state. Confirm current requirements with the Bar Council and your own senior counsel.',
  },

  rolesHeading: 'Everyone sees the same matter, through their own window.',
  rolesLede: 'An associate should not see every partner’s fee arrangements. Accounts should not read privileged notes. Each role opens on what it needs.',
  roles: [
    { role: 'Managing partner', question: 'Where is the firm exposed and where is it earning?', sees: 'Deadlines across the firm, unbilled and overdue fees, capacity by lawyer, matters by stage and age.' },
    { role: 'Partner', question: 'What do I need to decide on my matters?', sees: 'Her matters, next dates, conflict decisions, draft fee notes and client money balances.' },
    { role: 'Associate', question: 'What is on my plate this week?', sees: 'Her hearings, deadlines, drafts due, time entries and the matters she is on.' },
    { role: 'Clerk or paralegal', question: 'Is the file ready and filed?', sees: 'Cause lists, filing tasks, document checklists, order copies pending and court receipts.' },
    { role: 'Accounts', question: 'What has been billed and received?', sees: 'Fee notes, receipts, retainers and the client money ledger, without privileged notes.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'The court portals, e-filing systems and cause lists your lawyers use today.',
      'Word and your legal research subscriptions for drafting.',
      'Your accounting software and your accountant, who prepares your returns.',
      'Your relationships with clients, counsel and clerks.',
    ],
    not: [
      'File documents in court or check the court portal for you.',
      'Hold or move client money. It keeps the ledger.',
      'Give legal advice or calculate the law for you.',
      'Run payroll or file tax returns.',
    ],
    migration:
      'We bring your matters, dates, clients and balances across from your diaries, folders and sheets in stages, starting with the matters that are listed soonest, so hearings continue as normal.',
  },

  faqHeading: 'Questions law firms ask.',
  faqs: [
    [
      'Will my lawyers really enter hearing notes and time?',
      'Only if it takes a minute. We set up short forms for each practice group and test them on live matters. Lawyers get something back: a diary that covers them when they are in court and fees that are not forgotten.',
    ],
    [
      'Does Verity fetch hearing dates from the court portals?',
      'No. Your team keeps using the portals and cause lists, and enters the date and order on the matter. During setup we agree how this is done so it is quick and consistent.',
    ],
    [
      'How does it handle privileged and confidential matters?',
      'Each matter has a team list. Only those people and the partners you name can open it, and every view and change is recorded. Sensitive matters can be walled off from named lawyers.',
    ],
    [
      'Can it issue invoices or hold client funds?',
      'No. It keeps the time, fee notes and client money ledger, and you issue invoices through your own accounts process. Funds stay in your bank accounts.',
    ],
    [
      'We are a small chamber with three advocates. Is this too much for us?',
      'A small chamber has the same dates and the same unbilled time, with fewer people to catch a slip. We set up only what you need, and the four-week process is the same.',
    ],
    [
      'Can we run several offices and courts?',
      'Yes. Each office is a location in one system, matters can sit in different courts and cities, and a client is one record across offices.',
    ],
    [
      'Will it calculate limitation for me?',
      'It stores the trigger date, the rule you name and the last date, and warns before it passes. The lawyer confirms the period, since it depends on the law and the facts.',
    ],
    [
      'Who can see client data?',
      'Only the people you allow. Access is set by role and by matter, and every view and change is recorded with who made it and when.',
    ],
    [
      'How long before we see results?',
      'The shared diary and the deadline list only need your live matters and dates, so they are the first things we aim to have working. Billing and collection trends become reliable after a month or two of recorded time.',
    ],
    [
      'What does it cost?',
      'It depends on the number of lawyers, offices and what you want set up. Message us and we will give you a clear number after a short conversation about how your firm runs.',
    ],
  ],

  related: ['accounting-firms', 'ca-firms', 'consulting-firms', 'financial-advisors', 'insurance-agencies', 'real-estate-agencies'],

  ctaHeading: 'Start with the dates that cannot slip.',
  ctaLede:
    'Send us a week of your diary and we will show you the clashes, the deadlines without a checker and the unbilled time it would find, using your own matters.',
};
