export default {
  schema: 2,
  slug: 'property-management',
  status: 'published',
  plural: 'property management companies',
  subject: 'property management company',
  checked: '15 October 2026',

  seo: {
    title: 'Property management software for Indian firms | Verity',
    description:
      'See the 14 problems that eat a property manager: late rent, repair tickets, owner statements, lease renewals, deposits. And the Verity screens that fix each one.',
    keywords: [
      'property management software India',
      'rent collection and dues tracking',
      'tenant and lease management',
      'maintenance ticket tracking for properties',
      'owner statements for rental properties',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'suppliers', 'locations', 'schedule', 'ai'],

  hero: {
    eyebrow: 'Verity for property management',
    headline: 'Rent is due on the 5th. Who is chasing it on the 6th?',
    lede:
      'You hold other people’s property, and with it their money, their tenants and their patience. Every flat has a rent date, a lease end, a leaking tap and an owner who wants to know. Verity keeps each property, each tenant and each owner on one record, so nothing waits for someone to remember.',
    oneLine:
      'One system that knows every property, every tenant’s dues, every repair in progress and every owner’s statement, and tells you what needs attention today.',
    note: 'No new team needed. Your coordinators and field staff keep their work and gain one shared record.',
    screen: 'owner',
    screenNote: 'properties, owners, tenants and rent dates',
  },

  today: {
    heading: 'A property manager runs fifty small businesses and tracks them in one phone.',
    paragraphs: [
      'Each property is a small business with its own tenant, its own rent date and its own list of things going wrong. A coordinator holds twenty or thirty of them in their head. Rent arrives by transfer, cash or cheque, and is matched to flats by hand. A repair request comes in by phone call at 9 pm and is lost by morning.',
      'The owner pays you to take the worry away, so the worry lands on you. The NRI owner wants to know why the rent was late. The local owner wants a statement. The tenant wants the geyser fixed. All three call the same person.',
      'You hold the money in between: rent not yet passed on, deposits held, vendor bills not yet paid. Without one record, it is hard to prove at any moment that every rupee is where it should be.',
    ],
    stack: ['Rent sheet in Excel', 'WhatsApp groups with tenants', 'Vendor numbers in phones', 'Bank statements', 'Lease copies in a folder'],
    stackNote: 'Each of these works for its own job. None of them tells you the whole story of a flat.',
  },

  painsHeading: 'Where a property manager actually loses money and trust.',
  painsLede:
    'These are the situations property managers describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Rent',
      title: 'Rent arrives late and is chased by whoever remembers',
      scene:
        'Fifteen tenants were due on the 5th. Nine have paid. A coordinator scrolls the bank statement to match names to flats. Six are reminded, three are not, and one has been late for four months in a row.',
      cost:
        'Example arithmetic: 100 flats at ₹30,000 rent is ₹30 lakh a month. A week of delay on 20 percent of it is ₹6 lakh sitting outside your owners’ accounts every month.',
      fix:
        'Every flat has a rent schedule. Payments received are matched to the flat and the month, and anything unpaid after the due date appears on a dues list with days late, last contact and promised date. The follow-up is a task with an owner.',
      screen: 'rent',
    },
    {
      area: 'Rent',
      title: 'Payments cannot be matched to the right flat or month',
      scene:
        'A transfer of ₹32,000 arrives from “R Singh”. Is that the third floor flat for October, or part of the arrears on the second? Someone has to ask the tenant, who does not reply.',
      cost:
        'Hours of reconciliation every month, and wrong dues shown to tenants who then argue. An error here becomes an argument with the owner later.',
      fix:
        'Each payment is recorded against a tenant, a flat and a period. Unmatched receipts sit in a short list for a person to assign, and the matching rule is remembered for next time.',
      screen: 'rent',
    },
    {
      area: 'Tenants',
      title: 'Vacancy runs longer than it should',
      scene:
        'A tenant gives notice. Nobody tells the leasing team for two weeks. The flat is empty for forty days while photographs are retaken and the owner is asked about a price change.',
      cost:
        'Example arithmetic: one flat at ₹28,000 a month that stays empty for 40 days loses about ₹37,000. Across 100 flats, a few extra days of vacancy each can pass ₹5 lakh a year.',
      fix:
        'A notice from a tenant starts a vacancy workflow: inspection, repairs, photographs, rent review, viewings and a target date. Verity shows flats vacant, days vacant and what each is waiting for.',
      screen: 'leases',
    },
    {
      area: 'Tenants',
      title: 'Tenant onboarding is thin, and the agreement is not on file',
      scene:
        'The new tenant has moved in. The agreement is being finalised, the identity papers are on WhatsApp and the move-in condition was never recorded. Three months later, the tenant disputes the deposit deduction.',
      cost:
        'Disputes you cannot prove. Under the Model Tenancy Act, which some states have adopted in their own form, a written agreement is expected and is reported to a Rent Authority within two months.',
      fix:
        'Every tenancy has a checklist: agreement signed, identity papers, deposit received, move-in condition recorded with photographs, and the reporting step where it applies. Missing items are listed against the tenancy.',
      screen: 'leases',
      source: {
        name: 'PRS Legislative Research, The Model Tenancy Act 2021',
        url: 'https://prsindia.org/billtrack/the-model-tenancy-act-2021',
      },
    },
    {
      area: 'Tenants',
      title: 'Lease renewals and rent increases are missed',
      scene:
        'A lease ended in August. Nobody raised the annual increase because nobody saw the date. The tenant is still in the flat at the old rent, and the owner asks why.',
      cost:
        'A year of rent at the old level on a flat that could have gone up, or a surprise renewal that sours the tenant.',
      fix:
        'Each lease carries its end date and the escalation terms. Verity creates a task 90 days before the date to talk to the owner and the tenant, and records the decision and the new rent.',
      screen: 'leases',
    },
    {
      area: 'Maintenance',
      title: 'Repair requests arrive by phone and are lost by morning',
      scene:
        'A tenant calls at 9 pm: the bathroom tap is leaking. The coordinator notes it on a piece of paper. Two days later the tenant calls the owner, who calls you.',
      cost:
        'Small repairs become big ones, and tenants who feel ignored do not renew. The owner starts to doubt what you do for your fee.',
      fix:
        'Every request becomes a ticket with the flat, the issue, a priority and an owner. A ticket that has no response within your set time is flagged to the coordinator’s head, and the tenant’s history shows every earlier request.',
      screen: 'tickets',
    },
    {
      area: 'Maintenance',
      title: 'Vendor quality and cost are not compared',
      scene:
        'The plumber charges ₹1,200 for a job that another charged ₹700 for. A repair is booked with whoever picked up the phone. Nobody checks if it was done properly.',
      cost:
        'Overpaid repairs that are charged to the owner, and repeat call-outs for the same fault. Owners notice and ask for the vendor bills.',
      fix:
        'Vendors are records with trade, area, rates and a history of jobs. Each ticket holds the quote, the approval, the completion photo and the bill, and a repeat fault in the same flat is flagged.',
      screen: 'tickets',
    },
    {
      area: 'Maintenance',
      title: 'Approval for larger repairs sits in a chat',
      scene:
        'The owner is in another country. A ₹40,000 repair needs a yes. The message is somewhere in a long chat thread, and the vendor starts work on the basis of “I think he said okay”.',
      cost:
        'A repair the owner says he never approved, and a payment you have to carry yourself.',
      fix:
        'Repairs above a limit set per owner need an approval with the quote attached. The owner’s decision is recorded with the time, and work orders cannot be issued until it is there.',
      screen: 'tickets',
    },
    {
      area: 'Owners',
      title: 'Owner statements are assembled by hand and arrive late',
      scene:
        'At month end, a coordinator adds rent received, subtracts your fee, repairs and society charges, and builds a statement in a spreadsheet for each owner. The NRI owner has been waiting a week.',
      cost:
        'A day or two of staff time every month for every few dozen owners, and a trust problem when a statement has an error.',
      fix:
        'Rent, fees, repairs, deposits and other charges are recorded against the property as they happen. Verity builds each owner’s statement from those records, with the supporting bills, ready for review.',
      screen: 'owners',
    },
    {
      area: 'Money',
      title: 'Deposits and owner money held in between are hard to prove',
      scene:
        'You hold security deposits for 80 tenancies and rent that has not yet been passed on to owners. A bank balance is not the same as a list of whose money is whose.',
      cost:
        'If an owner asks for his deposit and you cannot show it, the problem is both money and reputation. Under the Model Tenancy Act, a residential deposit is generally capped at two months’ rent.',
      fix:
        'Each deposit is a record against the tenancy: amount, date received, holder and deductions. Rent received but not yet passed on is listed by owner and due date, so you can show who is owed what on any date.',
      screen: 'owners',
      source: {
        name: 'PRS Legislative Research, The Model Tenancy Act 2021',
        url: 'https://prsindia.org/billtrack/the-model-tenancy-act-2021',
      },
    },
    {
      area: 'Tenants',
      title: 'Move-out disputes over damage and deductions',
      scene:
        'The tenant leaves. The flat has marks on the walls and a broken cupboard door. There are no move-in photographs. The deposit deduction is argued over for a month.',
      cost:
        'Delayed re-letting while a dispute runs, and refunds or deductions that cannot be defended.',
      fix:
        'Move-in and move-out inspections are checklists with photographs, compared item by item. The deduction is worked out from the difference and the vendor quotes, and your team can show the tenant the same record.',
      screen: 'inspections',
    },
    {
      area: 'Buildings',
      title: 'Common-area upkeep, utility dues and society charges are tracked separately',
      scene:
        'Society maintenance, water and electricity bills and sinking funds for each flat are paid from different places. A flat is charged twice for a month and unpaid for another.',
      cost:
        'Owners asking why they were charged, and late fees on society dues that should never have been late.',
      fix:
        'Recurring charges are scheduled against each flat with the payer, due date and proof of payment. Bills missing a payment appear on the dues list for the right coordinator.',
      screen: 'rent',
    },
    {
      area: 'Team',
      title: 'Coordinators carry the whole picture, and leave with it',
      scene:
        'A coordinator who looks after thirty flats resigns. The new one does not know which tenant is difficult, which owner is quick to complain and which vendor can be trusted.',
      cost:
        'Weeks of poorer service on thirty properties, and owners who ask whether they should move to another manager.',
      fix:
        'Notes, calls, tickets and history for every property live in the firm’s system. Reassigning a coordinator’s properties is one step, and the new person opens a complete record on day one.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede:
    'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '2 months',
      text: 'of rent is the cap on a security deposit for residential premises under the Model Tenancy Act 2021, and 6 months for non-residential premises. States adopt their own versions.',
      source: { name: 'PRS Legislative Research, The Model Tenancy Act 2021', year: '2021', url: 'https://prsindia.org/billtrack/the-model-tenancy-act-2021' },
    },
    {
      figure: '2 months',
      text: 'is the time within which landlord and tenant must inform the Rent Authority of a written agreement under the model law, after which a unique identification number is issued.',
      source: { name: 'PRS Legislative Research, The Model Tenancy Act 2021', year: '2021', url: 'https://prsindia.org/billtrack/the-model-tenancy-act-2021' },
    },
    {
      figure: '2x then 4x',
      text: 'monthly rent is payable under the model law by a tenant who stays on after the tenancy ends: twice for the first two months, then four times until the flat is handed back.',
      source: { name: 'PRS Legislative Research, The Model Tenancy Act 2021', year: '2021', url: 'https://prsindia.org/billtrack/the-model-tenancy-act-2021' },
    },
    {
      figure: '60 days',
      text: 'is the period within which the Rent Court or Rent Tribunal should endeavour to dispose of a case, under the model law. Written terms and records matter if a dispute reaches that stage.',
      source: { name: 'Mondaq, Model Tenancy Act 2021', year: '2021', url: 'https://www.mondaq.com/india/landlord-tenant-leases/1080104/model-tenancy-act-2021' },
    },
  ],
  factsNote:
    'All four figures describe the central model law, which is only a template. A state applies it only if it adopts its own version, and existing tenancies may be outside it. Check your state’s law before relying on any of these.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Names, columns and stages are set up in your own firm’s language.',
  screens: [
    {
      id: 'owner',
      title: 'Portfolio / Today',
      meta: '212 properties',
      heading: 'The manager’s morning view',
      caption:
        'Rent due and unpaid, tickets open, vacancies and leases ending, with the items that need a decision listed below. It replaces the morning round of calls to each coordinator.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Rent due this month', value: '₹58.4 lakh', note: '212 properties' },
            { label: 'Unpaid', value: '₹6.1 lakh', note: '24 tenants late' },
            { label: 'Open tickets', value: '37', note: '6 past response time' },
            { label: 'Vacant', value: '11', note: 'avg 23 days' },
          ],
        },
        { type: 'title', text: 'Rent collected by coordinator, this month' },
        {
          type: 'bars',
          items: [
            { label: 'Pooja (62 flats)', value: 96, display: '96%' },
            { label: 'Amit (70 flats)', value: 88, display: '88%' },
            { label: 'Sana (80 flats)', value: 71, display: '71%', tone: 'muted' },
          ],
        },
        { type: 'alert', text: '14 leases end in the next 90 days with no renewal task started.', action: 'Assign' },
      ],
    },
    {
      id: 'rent',
      title: 'Rent and dues',
      meta: 'October',
      heading: 'Every tenant’s rent, matched and chased',
      caption:
        'Rent due, received, unmatched receipts and recurring charges, with the days late and the last contact. Chasing is a task with an owner, and the outcome is recorded.',
      blocks: [
        {
          type: 'table',
          cols: ['Tenant', 'Flat', 'Due', 'Days late', 'Status'],
          rows: [
            ['Rahul Singh', 'Greenview 302', '₹32,000', '6', ['Call today', 'late', 'Promised 12 Oct', 'info']],
            ['Fatima Khan', 'Sunrise 105', '₹24,500', '3', ['Message', 'flag', 'Paid', 'ok']],
            ['Deepak Nair', 'Lakeside 7B', '₹48,000', '12', ['Third reminder', 'late']],
            ['Sneha Rao', 'Greenview 401', '₹29,000', '0', ['Paid', 'ok']],
          ],
        },
        { type: 'alert', text: '3 receipts totalling ₹71,500 do not match a flat. Assign them to a tenant.', action: 'Match' },
      ],
    },
    {
      id: 'tickets',
      title: 'Maintenance tickets',
      meta: 'All properties',
      heading: 'Every repair from request to bill',
      caption:
        'Requests become tickets with an owner, a vendor, a quote and an approval where needed. Ones past their response time are lifted to the top.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'New',
              cards: [
                { title: 'Leaking tap, Sunrise 105', meta: 'Tenant call, 9:10 pm', tag: ['Assign', 'flag', 'Assigned', 'ok'] },
                { title: 'AC not cooling, Greenview 401', meta: 'Message, 11 am', tag: ['Assign', 'flag'] },
              ],
            },
            {
              name: 'Waiting for owner',
              cards: [
                { title: 'Kitchen cabinet, Lakeside 7B', meta: 'Quote ₹42,000, over limit', tag: ['Approval due', 'late', 'Approved', 'ok'] },
              ],
            },
            {
              name: 'In progress',
              cards: [
                { title: 'Painting, Greenview 302', meta: 'Vendor: Mahesh, due 20 Oct', tag: ['On track', 'ok'] },
                { title: 'Geyser repair, Sunrise 201', meta: 'Same fault twice in 60 days', tag: ['Repeat', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'leases',
      title: 'Tenancy and leases',
      meta: 'Record',
      heading: 'One record for every tenancy',
      caption:
        'Agreement, deposit, rent terms, move-in condition, history and the dates that matter. Renewals and vacancies start automatically from here.',
      blocks: [
        {
          type: 'record',
          title: 'Deepak Nair, Lakeside 7B',
          sub: 'Owner: Mr. Ashok Menon (NRI, Dubai). Coordinator: Sana',
          fields: [
            ['Rent', '₹48,000 a month'],
            ['Deposit held', '₹96,000, two months'],
            ['Lease ends', ['31 Dec 2026', 'flag', 'Renewal started', 'ok']],
            ['Agreement', ['On file', 'ok']],
            ['Move-in photos', ['On file', 'ok']],
            ['Dues', ['12 days late', 'late', 'Paid', 'ok']],
          ],
          timeline: [
            ['10 Oct', 'Call: tenant says salary delayed, will pay on 12th'],
            ['3 Sep', 'Paid late by 4 days'],
            ['Jan 2026', 'Agreement renewed with 5 percent increase'],
            ['Note', 'Prefers calls after 7 pm.'],
          ],
        },
      ],
    },
    {
      id: 'owners',
      title: 'Owner statements',
      meta: 'October',
      heading: 'Money in, money out, money held, by owner',
      caption:
        'Rent received, your fee, repairs, society charges and deposits for each owner, built from the records of the month. The supporting bills sit behind each line.',
      blocks: [
        {
          type: 'table',
          cols: ['Owner', 'Rent received', 'Fees and repairs', 'To pay out', 'Status'],
          rows: [
            ['Ashok Menon', '₹48,000', '₹7,900', '₹40,100', ['Ready', 'info', 'Sent', 'ok']],
            ['Geeta Iyer', '₹1,02,000', '₹14,200', '₹87,800', ['Check', 'flag', 'Ready', 'ok']],
            ['Vinod Shah', '₹29,000', '₹3,300', '₹25,700', ['Sent', 'ok']],
            ['Ritu Jain', '₹0', '₹0', '₹0', ['Rent unpaid', 'late']],
          ],
        },
        { type: 'alert', text: 'Deposits held for 80 tenancies total ₹1.18 crore. 4 are for tenancies that ended in September.', action: 'Review' },
      ],
    },
    {
      id: 'inspections',
      title: 'Inspections',
      meta: 'Move-in, routine, move-out',
      heading: 'Condition checks with photographs',
      caption:
        'A checklist for each type of visit, with photographs for each item. A move-out check is compared with the move-in one, and any deduction links to it.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Walls, ceiling and paint', meta: 'Greenview 302 move-out, marks on east wall', done: true },
            { text: 'Kitchen cabinets and counter', meta: 'Door hinge broken, quote requested', done: true },
            { text: 'Bathroom fittings and leaks', meta: 'Awaiting vendor check', done: false },
            { text: 'Electrical points and fan', meta: 'Not yet checked', done: false },
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Deduction proposed', meta: '₹6,400 against deposit of ₹60,000, with photos', tag: ['For review', 'flag', 'Agreed', 'ok'] },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same 6th of the month, before and after.',
  dayLede: 'What changes is not the property. It is that each rent date, repair and renewal leaves a record that tells the right person it is their turn.',
  day: [
    {
      time: '9:30',
      before: 'You ask each coordinator how rent collection is going and write the answers on a sheet.',
      after: 'You open the Today screen. Twenty-four tenants are late, split by coordinator, with promised dates.',
    },
    {
      time: '11:00',
      before: 'A receipt of ₹32,000 arrives from a name nobody knows.',
      after: 'It appears in the unmatched list. A coordinator assigns it to the third floor flat in one tap.',
    },
    {
      time: '1:00',
      before: 'A tenant says the geyser has not been fixed for a week. You find the note on a diary page.',
      after: 'The ticket shows the vendor was called twice. It is flagged as a repeat fault, with the owner’s approval pending.',
    },
    {
      time: '3:30',
      before: 'An NRI owner asks about the deposit he is owed on a flat that was vacated last month.',
      after: 'The deposit record shows the amount, the deductions agreed and the date it is due to him.',
    },
    {
      time: '5:30',
      before: 'A lease expired in August and the rent was never revised.',
      after: 'The renewal task appeared 90 days ahead. The new rent was agreed and recorded in July.',
    },
    {
      time: 'Month end',
      before: 'Two coordinators spend two days assembling owner statements.',
      after: 'Statements are ready on the 1st for review, with each bill behind its line.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your firm collects rent, handles repairs and reports to owners, set Verity up around that, bring your data in, then stay on so it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and two coordinators. Follow one flat through a month, from rent date to owner statement, and see where tenant details, receipts, tickets and owner money are kept today.',
        you: 'Two to three hours of your time, and an hour each from a coordinator and the accounts person. Access to your rent sheet and a recent owner statement.',
        get: 'A written map of your firm: properties and owners, fee rules, rent dates, ticket types, vendors and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up properties, owners and tenancies, rent schedules and escalation terms, fee and charge rules, ticket types and response times, approval limits per owner and the roles of each person.',
        you: 'Check the setup with a coordinator and accounts. Tell us where a rule is not how you work.',
        get: 'A working Verity with your properties, rent dates and fee rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your owners, properties, tenants, leases, deposits, receipts and open tickets from the sheets and folders you use. Train each coordinator on their own properties, with real rent dates.',
        you: 'Your sheets and lease copies as they stand. An hour with each coordinator.',
        get: 'Your properties, tenants and dues inside Verity, and a team that has used it on a real rent cycle.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through the first full rent cycle and the first owner statements. Tune the reminders, response times and statements, and add properties and owners as you win them.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps matching how your firm works, with someone responsible for it.',
      },
    ],
    bring: [
      'Your list of properties, owners and tenants',
      'The rent sheet for the last three months',
      'Copies of leases and the deposit register',
      'Your fee rules for owners and any other charges',
      'Your vendor list with trades and rates',
    ],
    time: 'About 8 to 12 hours of your own time across the four weeks, mostly in week 1. Coordinators and your accounts person need a few more.',
    after: 'Nobody is hired to run Verity. Receipts, tickets and inspections are recorded as the work happens, and statements and reports come from those records.',
  },

  ai: {
    heading: 'Ask your portfolio a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own property, tenant, rent and ticket records. Ask in plain language, then turn the answer into tasks for the right people. It respects who is allowed to see what.',
    examples: [
      {
        q: 'Which tenants are more than 10 days late, and how often?',
        a: '9 tenants are over 10 days late. 4 of them were late in at least three of the last six months.',
        rows: [['Sana’s flats', '5 tenants'], ['Amit’s flats', '3 tenants'], ['Pooja’s flats', '1 tenant']],
        action: 'Create follow-up tasks for each coordinator',
      },
      {
        q: 'Which flats have had the same repair twice in 90 days?',
        a: 'Five flats have repeat faults. Three are geyser repairs by the same vendor.',
        action: 'Review the vendor and raise a rework ticket',
      },
      {
        q: 'Which leases end before December and have no renewal started?',
        a: '14 leases end by 31 December. For 6 of them, the owner has not been asked about a rent increase yet.',
        rows: [['Ending in November', '7'], ['Ending in December', '7']],
        action: 'Start renewal tasks',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Your team still calls and sends the messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'Rent is not received by the due date',
      then: ['Added to the dues list with days late', 'Reminder task to the coordinator', 'Promised date and outcome recorded'],
    },
    {
      when: 'A repair request comes in',
      then: ['Ticket created with priority', 'Assigned to a coordinator', 'Flagged if no response in your set time'],
    },
    {
      when: 'A repair quote is above the owner’s limit',
      then: ['Held for the owner’s approval', 'Quote attached to the request', 'Work order released once approved'],
    },
    {
      when: 'A lease is 90 days from ending',
      then: ['Renewal task to the coordinator', 'Owner asked about the rent', 'New terms recorded on the tenancy'],
    },
    {
      when: 'A tenant gives notice',
      then: ['Vacancy workflow started', 'Move-out inspection scheduled', 'Deposit review prepared from the inspection'],
    },
    {
      when: 'The month closes',
      then: ['Statement built for each owner', 'Bills attached to each line', 'Reviewed before it is sent'],
    },
  ],

  rules: {
    heading: 'The rules a property manager has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so your accountant is not rebuilding them from a rent sheet.',
    items: [
      {
        name: 'Tenancy law in your state',
        what: 'The central Model Tenancy Act 2021 is a template. A state applies it only after adopting its own version. Where it applies, a written agreement is expected, and it is reported to a Rent Authority within two months.',
        how: 'Each tenancy carries its agreement, dates and a reporting step, so what has been done, and what has not, can be shown.',
        source: { name: 'PRS Legislative Research, The Model Tenancy Act 2021', url: 'https://prsindia.org/billtrack/the-model-tenancy-act-2021' },
      },
      {
        name: 'Security deposits',
        what: 'Under the model law, the deposit is capped at two months’ rent for residential premises and six months’ for non-residential ones, and refunded at handover after lawful deductions.',
        how: 'Each deposit is a record with the amount, date, holder and any deductions linked to the inspections.',
        source: { name: 'PRS Legislative Research, The Model Tenancy Act 2021', url: 'https://prsindia.org/billtrack/the-model-tenancy-act-2021' },
      },
      {
        name: 'Tax on rent and your fees',
        what: 'Tax on rent, tax deducted at source and GST on rent or on management fees can apply, depending on who pays whom and the amounts. The rules change.',
        how: 'Rent, fees and charges are recorded on separate lines with parties and dates, so your accountant can work out the tax from clean records.',
      },
      {
        name: 'Society and building rules',
        what: 'Societies and buildings have their own bylaws on maintenance, subletting, move-in charges and common areas, and tenants must follow them.',
        how: 'Society charges and notices are attached to the property record, with the dues and proofs of payment.',
      },
      {
        name: 'Tenant and owner personal data',
        what: 'Identity papers, income details and contact numbers are personal data. India’s Digital Personal Data Protection law and its rules apply in stages.',
        how: 'Papers sit in one permissioned place, with a log of who opened or changed them, rather than in staff phones and chats.',
      },
    ],
    note: 'Rules differ by state and change often. Confirm current requirements with your lawyer and your chartered accountant.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A field supervisor should not see rent statements. An owner should see only their own property. Each role opens on what it needs.',
  roles: [
    { role: 'Owner or director', question: 'Is the portfolio healthy and the money where it should be?', sees: 'Rent due and unpaid, vacancy, tickets, deposits held and owner money waiting to be paid out.' },
    { role: 'Coordinator', question: 'What do my properties need today?', sees: 'Dues to chase, tickets to assign, leases ending, inspections due, and their own notes and history.' },
    { role: 'Field supervisor', question: 'Which visits and repairs am I doing?', sees: 'Assigned tickets, inspections with checklists and photographs, vendor details. Not rent or fees.' },
    { role: 'Accounts', question: 'What came in, what is owed and what do we pay out?', sees: 'Receipts to match, owner statements, deposits, vendor bills and the schedule of recurring charges.' },
    { role: 'Property owner', question: 'What happened to my flat this month?', sees: 'Their own property: rent, tickets, bills, statements and renewal decisions waiting for them.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your bank and the way tenants pay today. We agree how receipts reach Verity during setup.',
      'Your accounting software for the books. We map how data reaches it.',
      'WhatsApp for talking to tenants and owners. Staff send the messages; Verity tells them who and when.',
      'Your lawyer, for agreements and notices, and your accountant, who still prepares returns.',
    ],
    not: [
      'Collect rent from tenants online or move money between accounts.',
      'Send messages to tenants or owners on its own.',
      'File tax returns or give legal advice.',
      'Replace your vendors or your coordinators.',
    ],
    migration:
      'We bring your properties, owners, tenants, leases, deposits and open tickets across from the sheets and folders you use now, in stages, so rent keeps being collected while it happens.',
  },

  faqHeading: 'Questions property managers ask.',
  faqs: [
    [
      'Will my coordinators actually use it?',
      'It only works if receipts and tickets are recorded, so we set it up to take seconds, on the phones they already carry. Each coordinator gets something back: a daily list of whom to chase and what to fix, ready each morning.',
    ],
    [
      'Does Verity collect rent from tenants?',
      'No. Tenants keep paying the way they do now. Verity records the payment against the tenant and the month, shows what is unpaid and assigns the follow-up to your team.',
    ],
    [
      'Can owners see their own property?',
      'Yes, if you allow it. An owner can be given a view of just their own property, with rent, tickets, bills and statements, and nothing about anyone else’s.',
    ],
    [
      'I manage 60 flats for 40 owners. Is that too small?',
      'No. A smaller portfolio has the same late rent and repeat repairs, with fewer people to catch them. We set up only what you need, and the four-week process is the same.',
    ],
    [
      'Can it handle both residential and commercial properties?',
      'Yes. Each property has its own type, rent terms, deposit rules and recurring charges, and the dues and tickets work in the same way.',
    ],
    [
      'Can it produce statements for NRI owners?',
      'Yes. Statements are built per owner from the rent, fees, repairs and deposits recorded, with the bills attached. Your team reviews and sends them. Verity does not move money or advise on remittance rules.',
    ],
    [
      'Who can see tenant and owner data?',
      'Only the people you allow. Access is set by role, so field staff see tickets but not rent, and every change is recorded with who made it and when.',
    ],
    [
      'Does it work with the Model Tenancy Act?',
      'It keeps the agreement, deposit and reporting step on every tenancy, which is what the law expects where your state applies it. It does not file anything. Your lawyer confirms what applies in your state.',
    ],
    [
      'What does it cost?',
      'It depends on the number of properties, users and what you want set up. Message us and we will give you a clear number after a short conversation about how your firm runs.',
    ],
  ],

  related: ['real-estate-agencies', 'property-dealers', 'facility-management', 'real-estate-developers', 'cleaning-services', 'repair-services'],

  ctaHeading: 'Start with the rent that is already late.',
  ctaLede:
    'Tell us how your firm runs and we will show you the late rent, the repeat repairs and the leases about to end, using your own numbers.',
};
