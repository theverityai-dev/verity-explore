export default {
  schema: 2,
  slug: 'property-dealers',
  status: 'published',
  plural: 'property dealers',
  subject: 'property dealer',
  checked: '15 October 2026',

  seo: {
    title: 'Software for property dealers and brokers in India | Verity',
    description:
      'See the 13 problems that cost a property dealer deals and brokerage: stale listings, lost enquiries, split commission, paperwork. And the Verity screens that fix each.',
    keywords: [
      'property dealer software India',
      'real estate broker listing management',
      'buyer requirement matching',
      'brokerage commission tracking',
      'property deal file and documents',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'workforce', 'schedule', 'ai'],

  hero: {
    eyebrow: 'Verity for property dealers',
    headline: 'Your best listings are in your head. Your best buyers are in your phone.',
    lede:
      'A dealer’s business is a list of properties, a list of people looking for them and the memory to connect the two. That memory lives in diaries, WhatsApp groups and one or two senior people. Verity puts both lists in one place and keeps the deal moving until the brokerage is in your account.',
    oneLine:
      'One system that knows every property you can sell, every buyer or tenant looking, every visit made and every rupee of brokerage you are owed.',
    note: 'Your team keeps using the phone. Calls and visits are noted against the person and the property in a few taps.',
    screen: 'owner',
    screenNote: 'listings, buyers, deals and brokerage owed',
  },

  today: {
    heading: 'A dealer knows the market and loses the paperwork.',
    paragraphs: [
      'The skill in this trade is knowing which flat will suit which family, which owner will drop the price and which buyer is serious. That knowledge is real, and it sits with a few people. A listing taken in March has already been sold by another dealer by June, and the sheet still shows it available.',
      'Enquiries come from portals, hoardings, referrals and walk-ins. Some are logged in a notebook, some stay on one agent’s phone. When that agent leaves or is on leave, the buyer who was about to decide is called by nobody.',
      'And the money is the last thing tracked. Brokerage is agreed on a call, split with another dealer, due on registration, and chased on memory. A deal can be done and a good part of the fee can still go missing.',
    ],
    stack: ['Listings in an Excel sheet', 'WhatsApp groups with other dealers', 'Portal leads in email', 'Agents’ phones and diaries', 'Paper copies of documents'],
    stackNote: 'Each of these is how the trade really works. The cost is that nothing connects a listing, a buyer and a fee.',
  },

  painsHeading: 'Where a property dealer actually loses deals and fees.',
  painsLede:
    'These are the situations dealers and brokerage owners describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Listings',
      title: 'Listings go stale and you show properties that are already sold',
      scene:
        'A 2 BHK taken three months ago is still on your sheet. You take a family to see it. The owner sold it through another dealer and did not tell you. The family loses an afternoon and some trust in you.',
      cost:
        'A wasted visit, a stretched agent and a buyer who may not call again. Reported fake or stale listings are one of the common complaints about property search in India.',
      fix:
        'Every listing has a status, an owner contact and a “last confirmed” date. Verity flags those not reconfirmed in a set number of days and assigns a quick confirmation call to the agent who took it.',
      screen: 'listings',
    },
    {
      area: 'Listings',
      title: 'Owners list with three dealers and nobody holds a mandate',
      scene:
        'The owner says he has given it only to you. A week later you see the same board outside. You spend effort marketing a flat you might not be paid to sell.',
      cost:
        'Work done without a fee. The dealer who brings the buyer first collects the brokerage and the rest lose their time.',
      fix:
        'Each listing records whether you hold an exclusive or a general mandate, with the date and the agreed fee. Exclusive ones are shown first on your own marketing list, and general ones are marked as shared.',
      screen: 'listings',
    },
    {
      area: 'Buyers',
      title: 'Enquiries are lost between the portal, the phone and the notebook',
      scene:
        'Twelve enquiries arrive from a portal overnight. By noon some are called, some are forwarded to the wrong agent and a few are not answered at all. A buyer who wanted to see a flat on Sunday books through someone else.',
      cost:
        'Example arithmetic: 200 enquiries a month and a 2 percent conversion is 4 deals. At ₹1.2 lakh average brokerage, one more deal from faster response is ₹1.2 lakh a month.',
      fix:
        'Every enquiry becomes a buyer record, assigned to an agent when it arrives, with a time by which the first call is expected. Verity shows enquiries not yet contacted and how long each has waited.',
      screen: 'buyers',
    },
    {
      area: 'Buyers',
      title: 'A buyer’s requirements are never matched to new listings',
      scene:
        'A client said last month he wants a 3 BHK under ₹1.4 crore near the metro. Yesterday you listed exactly that. Nobody connects the two, because the requirement is in a notebook and the listing is in a sheet.',
      cost:
        'The best deals are the ones where the buyer and flat already exist and nobody introduces them. That is brokerage lost for no reason.',
      fix:
        'A requirement is stored as budget, area, type and must-haves on the buyer record. When a listing is added or its price drops, Verity shows the buyers it fits, and the agent gets a task to call them.',
      screen: 'buyers',
    },
    {
      area: 'Buyers',
      title: 'Buyers go quiet after the first site visit',
      scene:
        'A couple sees three flats on Saturday. They say they will think about it. The agent has six other visits that week. Ten days later they have bought something else.',
      cost:
        'The visit was the expensive part. The follow-up that would have turned it into a deal costs a two-minute call and does not get made.',
      fix:
        'Each visit is recorded with the buyer’s reaction and the next step. A follow-up task falls due after two days, and buyers who have visited and not been called in a week appear on the owner’s list.',
      screen: 'visits',
    },
    {
      area: 'Team',
      title: 'Clients leave when an agent leaves, and so do the listings',
      scene:
        'A senior agent resigns. His owner contacts, buyers and half-negotiated deals are in his phone. Within a month he is working for a rival and the same owners are listing with him.',
      cost:
        'Lost deals in progress, and the loss of relationships that took years to build. Property dealing leans on personal trust, so a person’s exit can move business.',
      fix:
        'Owners, buyers, listings and the history of every call and visit are recorded in the business’s system, not in a personal phone. When someone resigns, their list is reassigned in one step and the handover is ready.',
      screen: 'owner',
    },
    {
      area: 'Deals',
      title: 'Deals stall between token and registration and nobody sees where',
      scene:
        'The buyer paid a token. The loan is being processed. The owner’s papers are incomplete. The agreement is drafted. Everyone is waiting for someone, and a good deal drifts for six weeks.',
      cost:
        'A deal that falls through after months of work, and the token money argument that follows. The brokerage is paid on registration, so every week of delay is a week of delay in the fee.',
      fix:
        'Each deal has stages from token to registration, with the next step, who owns it and the date it is due. Verity shows deals that have not moved in ten days and which side is holding them up.',
      screen: 'deals',
    },
    {
      area: 'Deals',
      title: 'Documents are collected on WhatsApp and checked at the last minute',
      scene:
        'The sale deed draft needs the previous title papers, the society no-objection letter, the tax receipts and the buyer’s identity papers. Half are on someone’s phone. The registrar slot is next Tuesday.',
      cost:
        'A missed slot, a re-booked registration and a nervous buyer. The dealer usually carries the blame.',
      fix:
        'Each deal has a document checklist for the buyer side, the seller side and the loan. Papers are stored on the deal record, and the checklist shows what is received, what is missing and who must supply it.',
      screen: 'deals',
    },
    {
      area: 'Money',
      title: 'Brokerage is agreed on a call and chased on memory',
      scene:
        'You agreed one percent from the buyer and one from the seller. The buyer says he agreed on half. Nobody wrote it down. The seller pays on registration, but only after three reminders.',
      cost:
        'Example arithmetic: on a ₹1.2 crore sale, 1 percent from each side is ₹2.4 lakh. Losing half of it on a verbal arrangement is ₹1.2 lakh gone from one deal.',
      fix:
        'The fee terms are recorded on the deal with the date and who agreed them. When the deal reaches registration, an invoice task is raised for each party, and unpaid brokerage shows on the owner’s list with the days outstanding.',
      screen: 'brokerage',
    },
    {
      area: 'Money',
      title: 'Splits with other dealers and agents are worked out afterwards',
      scene:
        'A co-broker brought the buyer, your agent had the listing and a sub-agent introduced the owner. At the end, three people want a share and each remembers a different percentage.',
      cost:
        'Fights that damage the network you depend on for the next deal, and fees paid out wrongly.',
      fix:
        'Split terms are stored on the deal at the time it starts, naming who gets what. When the brokerage is received, Verity shows the share due to each, and records that it has been paid.',
      screen: 'brokerage',
      source: {
        name: 'Mondaq, HRERA approves brokerage of 1%',
        url: 'https://webiis10.mondaq.com/india/real-estate/1633316/hrera-approves-brokerage-of-1-for-real-estate',
      },
    },
    {
      area: 'Compliance',
      title: 'RERA registration of the dealer and of the projects you sell',
      scene:
        'An agent in your office is selling a plot in a project that is under construction. You think it has a RERA number. It has expired. The authority can penalise the agent, not only the builder.',
      cost:
        'Under the law as reproduced, the penalty on an agent who breaks the registration or conduct rules can be ten thousand rupees for each day the default continues, up to five percent of the cost of the property.',
      fix:
        'The firm’s own registration and each agent’s details are kept as records with their validity dates, and a RERA project record carries its number and expiry. Verity flags an expired project before it is offered to a buyer.',
      screen: 'listings',
      source: {
        name: 'RERA Act 2016, Section 62, as reproduced on Courtbook',
        url: 'https://courtbook.in/real-estate-regulation-and-development-act-2016/section-62',
      },
    },
    {
      area: 'Rental',
      title: 'Rental deals and renewals are not tracked, so repeat business disappears',
      scene:
        'You placed a tenant in a flat two years ago. The agreement ended last month and the owner has found someone else on a portal. You were never told the date.',
      cost:
        'Renewal and re-letting income, which is repeat business that costs nothing to find, goes to whoever called first.',
      fix:
        'Each rental closed is stored with its start and end dates and the owner. Verity creates a task 60 days before expiry to speak to the owner and the tenant, and the outcome is recorded.',
      screen: 'deals',
    },
    {
      area: 'Owner',
      title: 'The owner cannot see which agent is really producing',
      scene:
        'One agent brags about volume and another quietly closes. At month end the owner has visits, deals and commissions in three places and no fair comparison.',
      cost:
        'Rewards go to the loudest, not the best, and the agent who needs coaching is not identified.',
      fix:
        'Each agent’s enquiries, visits, deals closed and brokerage earned are drawn from the same records, shown side by side for any month, with conversion at each step.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede:
    'From published sources, with the source named under each figure. Some are a few years old and are shown with their dates. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '88,461',
      text: 'real estate agents had registered under RERA across India as of 1 July 2024, according to the Economic Survey 2023-24. Agents who sell without registering face penalties.',
      source: { name: 'The Realty Today, citing the Economic Survey 2023-24', year: '2024', url: 'https://www.therealtytoday.com/news/regulatory/major-advances-in-indias-real-estate-sector-through-rera-insights-from-the-economic-survey-2023-24/' },
    },
    {
      figure: '1,30,186',
      text: 'real estate projects were registered under RERA on the same date. Each one has its own number and validity, which an agent should check before offering it.',
      source: { name: 'The Realty Today, citing the Economic Survey 2023-24', year: '2024', url: 'https://www.therealtytoday.com/news/regulatory/major-advances-in-indias-real-estate-sector-through-rera-insights-from-the-economic-survey-2023-24/' },
    },
    {
      figure: '1%',
      text: 'was the maximum brokerage Haryana’s RERA authority approved on sale and purchase in the state, split equally between buyer and seller. It shows how closely fees can be questioned.',
      source: { name: 'Mondaq, HRERA approves brokerage of 1%', year: '2020 decision, page shown 2025', url: 'https://webiis10.mondaq.com/india/real-estate/1633316/hrera-approves-brokerage-of-1-for-real-estate' },
    },
    {
      figure: '₹10,000 a day',
      text: 'is the penalty for an agent who breaks the registration or conduct rules, continuing for each day of default, up to 5 percent of the cost of the property involved.',
      source: { name: 'RERA Act 2016, Section 62, as reproduced on Courtbook', url: 'https://courtbook.in/real-estate-regulation-and-development-act-2016/section-62' },
    },
  ],
  factsNote:
    'The agent and project counts are from July 2024. The brokerage decision applies only to Haryana. The Act text is shown as reproduced on a reference site, which notes that the official gazette is the authority.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names, stages and columns are set up in your own firm’s language.',
  screens: [
    {
      id: 'owner',
      title: 'Brokerage / Today',
      meta: 'All agents',
      heading: 'The owner’s morning view',
      caption:
        'Enquiries waiting, visits booked, deals in progress and brokerage owed, with each agent’s numbers beside it. It replaces the evening phone call to find out how the day went.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'New enquiries', value: '18', note: '5 not yet called' },
            { label: 'Visits today', value: '7', note: 'across 4 agents' },
            { label: 'Deals in progress', value: '23', note: '₹41 lakh brokerage' },
            { label: 'Brokerage owed', value: '₹6.8 lakh', note: '4 invoices late' },
          ],
        },
        { type: 'title', text: 'Deals closed this month, by agent' },
        {
          type: 'bars',
          items: [
            { label: 'Rakesh', value: 80, display: '4 deals' },
            { label: 'Shabana', value: 60, display: '3 deals' },
            { label: 'Vivek', value: 40, display: '2 deals' },
            { label: 'Neeraj', value: 20, display: '1 deal', tone: 'muted' },
          ],
        },
        { type: 'alert', text: '5 enquiries have waited more than 4 hours for a first call.', action: 'Assign' },
      ],
    },
    {
      id: 'listings',
      title: 'Listings',
      meta: 'Properties you can offer',
      heading: 'Every property, its mandate and when it was last confirmed',
      caption:
        'Price, owner, mandate type, last confirmed date and RERA number where it applies. Properties not reconfirmed in your set number of days are flagged and assigned.',
      blocks: [
        {
          type: 'table',
          cols: ['Property', 'Price', 'Mandate', 'Last confirmed', 'Status'],
          rows: [
            ['3 BHK, Sector 62', '₹1.35 cr', 'Exclusive', '4 days ago', ['Live', 'ok']],
            ['2 BHK, Palm Heights', '₹78 lakh', 'General', '41 days ago', ['Reconfirm', 'late', 'Sold', 'muted']],
            ['Plot, Greenfield', '₹55 lakh', 'Exclusive', '9 days ago', ['Live', 'ok']],
            ['1 BHK rent, Metro Plaza', '₹18,500 a month', 'General', '22 days ago', ['Reconfirm', 'flag', 'Confirmed', 'ok']],
          ],
        },
        { type: 'alert', text: 'Project “Greenfield Plots” has a RERA registration that expires on 31 October.', action: 'Check' },
      ],
    },
    {
      id: 'buyers',
      title: 'Buyer and tenant',
      meta: 'Record',
      heading: 'What each person wants, and what fits',
      caption:
        'Budget, area, type and must-haves on one record, with every call and visit. When a new listing fits, it appears on the record and the agent gets a task to call.',
      blocks: [
        {
          type: 'record',
          title: 'Arjun and Meera Kapoor',
          sub: 'Buyer. Agent: Rakesh. Source: portal enquiry, 2 weeks ago',
          fields: [
            ['Wants', '3 BHK, ready to move'],
            ['Budget', 'Up to ₹1.4 crore'],
            ['Area', 'Near the metro, Sector 62 or 63'],
            ['Home loan', ['Pre-approved ₹90 lakh', 'ok']],
            ['New match', ['3 BHK, Sector 62, ₹1.35 cr', 'info', 'Visit booked', 'ok']],
            ['Status', ['Not called for 6 days', 'late', 'Called', 'ok']],
          ],
          timeline: [
            ['4 Oct', 'Visited two flats. Liked the second, wants a bigger kitchen'],
            ['28 Sep', 'First call, shared requirement'],
            ['Note', 'Prefers a lower floor. Wife works nearby.'],
          ],
        },
      ],
    },
    {
      id: 'visits',
      title: 'Visits and follow-up',
      meta: 'This week',
      heading: 'Who is seeing what, and who is waiting for a call',
      caption:
        'A simple board from enquiry to deal. Site visits are scheduled against the agent and property, and a follow-up falls due after each one.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'New enquiry',
              cards: [
                { title: 'Sunita Rao, 2 BHK rental', meta: 'Portal, 30 min ago', tag: ['Call now', 'flag', 'Called', 'ok'] },
                { title: 'Prakash Jain, shop', meta: 'Walk-in, today', tag: ['Assigned', 'info'] },
              ],
            },
            {
              name: 'Visit done, follow up',
              cards: [
                { title: 'Kapoor family, 3 BHK', meta: 'Visited Saturday, call due', tag: ['Due today', 'late', 'Called', 'ok'] },
                { title: 'Anil Mehta, plot', meta: 'Visited 6 days ago', tag: ['Overdue', 'late'] },
              ],
            },
            {
              name: 'Negotiating',
              cards: [
                { title: 'Rahul Sinha, 2 BHK', meta: 'Offer ₹76 lakh, owner at ₹78', tag: ['Open', 'info'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'deals',
      title: 'Deal file',
      meta: 'Token to registration',
      heading: 'Each deal, its next step and its papers',
      caption:
        'Stage, owner of the next step, due date and the document checklist for buyer, seller and bank. A deal that has not moved in ten days is highlighted.',
      blocks: [
        {
          type: 'table',
          cols: ['Deal', 'Stage', 'Next step', 'Due', 'Status'],
          rows: [
            ['Kapoor, Sector 62', 'Token paid', 'Seller’s papers', '20 Oct', ['Waiting seller', 'flag', 'Received', 'ok']],
            ['Sinha, Palm Heights', 'Agreement draft', 'Loan sanction', '24 Oct', ['11 days idle', 'late']],
            ['Bhatia, Metro Plaza rent', 'Ending', 'Renewal talk', '3 Nov', ['Task assigned', 'info']],
            ['Verma, plot', 'Registration', 'Slot on 28 Oct', '28 Oct', ['On track', 'ok']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Seller: previous title papers and tax receipts', meta: 'Kapoor deal', done: false },
            { text: 'Seller: society letter', meta: 'Received 9 Oct', done: true },
            { text: 'Buyer: identity papers and loan sanction', meta: 'Received', done: true },
          ],
        },
      ],
    },
    {
      id: 'brokerage',
      title: 'Brokerage',
      meta: 'Fees and splits',
      heading: 'What each deal earns, who is owed and what is unpaid',
      caption:
        'Agreed terms, the invoice raised, the date it is due and the split with co-brokers and agents. Unpaid brokerage shows days outstanding and the person responsible for the chase.',
      blocks: [
        {
          type: 'table',
          cols: ['Deal', 'Fee agreed', 'Received', 'Split', 'Status'],
          rows: [
            ['Verma, plot', '₹1.1 lakh', '₹1.1 lakh', 'Rakesh 70, co-broker 30', ['Share paid', 'ok']],
            ['Sinha, flat', '₹1.5 lakh', '₹0', 'Shabana 100', ['Due on registration', 'info']],
            ['Gupta, shop', '₹2.0 lakh', '₹1.0 lakh', 'Vivek 60, firm 40', ['Balance late', 'late', 'Received', 'ok']],
          ],
        },
        { type: 'alert', text: '₹3.4 lakh of brokerage is overdue by more than 30 days across 3 deals.', action: 'Chase' },
      ],
    },
  ],

  dayHeading: 'The same Saturday, before and after.',
  dayLede: 'What changes is not the selling. It is that every call, visit and promise leaves a record, so no buyer is waiting for someone who forgot.',
  day: [
    {
      time: '9:30',
      before: 'You ask agents who has which enquiry, and sort out who forgot to call back.',
      after: 'You open the Today screen. Five enquiries are uncalled and already on the right agents’ lists.',
    },
    {
      time: '11:00',
      before: 'A new 3 BHK listing comes in. You think of a buyer, but cannot remember who.',
      after: 'The listing shows three buyers it fits. Rakesh gets a task to call the Kapoors.',
    },
    {
      time: '1:00',
      before: 'You take a family to see a flat that was sold last week.',
      after: 'The flat was flagged for reconfirmation on Monday. The call found it sold and it came off the list.',
    },
    {
      time: '3:30',
      before: 'Two dealers dispute who brought the buyer for the Gupta shop.',
      after: 'The first recorded visit and the agreed split are on the deal. It is settled in two minutes.',
    },
    {
      time: '5:30',
      before: 'A deal has not moved for two weeks. You find out when the buyer complains.',
      after: 'It showed as idle on day ten, with the missing paper named and the owner of the step.',
    },
    {
      time: 'Month end',
      before: 'You add up the brokerage in a notebook and wonder who still owes you.',
      after: 'Fees agreed, received and owed are on the Brokerage screen, with each agent’s share.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your office finds a property, finds a buyer and gets paid, set Verity up around that, bring your lists in, then stay on so it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and your senior agents. Follow one listing and one buyer from first call to brokerage received, and see where you keep your lists, your deal papers and your fee records.',
        you: 'Two to three hours of your time, and an hour from each senior agent. Access to your listing sheet, enquiry sources and fee records.',
        get: 'A written map of your firm: property types, stages from enquiry to registration, fee and split rules, and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your listings and buyer fields, mandate types, deal stages, document checklists, fee and split rules, follow-up timings and who sees what.',
        you: 'Check the setup with one or two agents. Tell us where a rule is not how you work.',
        get: 'A working Verity with your own property types, stages and fee rules, ready for your lists.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your listings, buyer and owner contacts, open deals and fees owed from the sheets, notebooks and phones you use. Train each agent on their own screen, with their own enquiries.',
        you: 'Your lists as they stand, even if messy. An hour with each agent.',
        get: 'Your properties, people and deals inside Verity, and agents who have used it on live enquiries.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on through the first month of deals and the first brokerage cycle. Tune the reconfirmation, follow-up and matching rules, and handle changes as you add agents or areas.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps matching how your office works, with someone responsible for it.',
      },
    ],
    bring: [
      'Your listing sheet or notebook, with owners and prices',
      'Your buyer and tenant contacts and what each one wants',
      'Open deals, with the stage and the fee agreed',
      'Your fee and split rules for agents and co-brokers',
      'Your RERA registration details and those of your agents',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Your senior agents need a few more.',
    after: 'Nobody is hired to run Verity. Calls, visits and deals are noted as the work happens, and the lists and reports come from those notes.',
  },

  ai: {
    heading: 'Ask your firm a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own listing, buyer, deal and brokerage records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which buyers fit the new 3 BHK in Sector 62?',
        a: 'Four buyers have a budget of at least ₹1.35 crore and have asked for that sector. Two have visited a similar flat.',
        rows: [['Kapoor family', 'Rakesh'], ['Anil Mehta', 'Shabana'], ['R. Sharma', 'Vivek'], ['Joshi family', 'Rakesh']],
        action: 'Create a call task for each agent',
      },
      {
        q: 'Which deals have not moved in 10 days?',
        a: 'Five deals are idle. Two wait on the seller’s papers, two on loan sanction and one on the buyer’s token.',
        action: 'Assign a chase to each owner',
      },
      {
        q: 'How much brokerage is overdue, and from whom?',
        a: '₹3.4 lakh is overdue on three deals. The largest is the Gupta shop at ₹1.0 lakh, outstanding for 38 days.',
        rows: [['Gupta shop', '₹1.0 lakh'], ['Sinha flat', '₹1.5 lakh'], ['Jain plot', '₹0.9 lakh']],
        action: 'Raise invoice reminders',
      },
    ],
  },

  automationHeading: 'The follow-ups that fall through the cracks.',
  automationLede: 'Set once, then they run from your records. Your agents still make the calls and send the messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A new enquiry arrives',
      then: ['Buyer record created', 'Assigned to an agent', 'Task to call within your set time'],
    },
    {
      when: 'A listing is added or its price drops',
      then: ['Checked against buyer requirements', 'Fitting buyers shown to the agent', 'Call tasks created for the best matches'],
    },
    {
      when: 'A site visit is completed',
      then: ['Buyer’s reaction recorded', 'Follow-up task set for two days later', 'Added to the idle list if not called'],
    },
    {
      when: 'A listing has not been confirmed in 30 days',
      then: ['Flagged for reconfirmation', 'Task to the agent who took it', 'Marked sold or live on the outcome'],
    },
    {
      when: 'A deal reaches registration',
      then: ['Fee invoices raised for each party', 'Split shares worked out', 'Unpaid fees tracked by days outstanding'],
    },
    {
      when: 'A rental is 60 days from ending',
      then: ['Owner and tenant flagged', 'Task to speak to both', 'Renewal or new letting recorded'],
    },
  ],

  rules: {
    heading: 'The rules a property dealer has to keep up with.',
    lede: 'Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not rebuilding them when someone asks.',
    items: [
      {
        name: 'RERA registration for real estate agents',
        what: 'Under the RERA Act, an agent generally needs to register with the state authority before facilitating the sale of a plot, apartment or building in a registered project. Each state has its own rules and fees.',
        how: 'Your firm’s and your agents’ registration details sit as records with validity dates, so a lapse is flagged before it is a problem.',
        source: { name: 'RERA Act 2016, Section 62, as reproduced on Courtbook', url: 'https://courtbook.in/real-estate-regulation-and-development-act-2016/section-62' },
      },
      {
        name: 'Penalties on agents who break the rules',
        what: 'An agent who fails to comply with the registration and conduct provisions can be penalised ten thousand rupees for each day the default continues, up to five percent of the cost of the property.',
        how: 'Each project you offer carries its RERA number and expiry, so an expired project is flagged before it reaches a buyer.',
        source: { name: 'RERA Act 2016, Section 62, as reproduced on Courtbook', url: 'https://courtbook.in/real-estate-regulation-and-development-act-2016/section-62' },
      },
      {
        name: 'Brokerage limits set by some states',
        what: 'Some states or authorities set limits on brokerage. Haryana’s authority approved a maximum of one percent on sale and purchase, split between buyer and seller, in 2020. Other states differ.',
        how: 'The agreed fee and who agreed it are recorded on each deal, so you can show what was charged and on what terms.',
        source: { name: 'Mondaq, HRERA approves brokerage of 1%', url: 'https://webiis10.mondaq.com/india/real-estate/1633316/hrera-approves-brokerage-of-1-for-real-estate' },
      },
      {
        name: 'Documents for sale deeds and agreements',
        what: 'A sale or lease generally depends on title papers, tax receipts, society or authority letters and identity documents, and an agreement stamped and registered as your state requires.',
        how: 'The document checklist on each deal shows what is received and what is missing for the buyer, seller and bank.',
      },
    ],
    note: 'Rules differ by state and change often. Confirm current requirements with your lawyer, your chartered accountant and the state RERA authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A junior agent should not see everyone’s fees. The front desk should not edit a deal’s terms. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which deals and which agents are paying the office?', sees: 'Enquiries, visits, deals and brokerage by agent and by month, plus brokerage owed.' },
    { role: 'Senior agent', question: 'Who should I call today?', sees: 'Their own buyers, fitting new listings, follow-ups due and the deals they own.' },
    { role: 'Junior agent', question: 'What is my list for the day?', sees: 'Enquiries assigned, visits booked and the calls that are due. Not other agents’ fees.' },
    { role: 'Front desk', question: 'Who is coming in and what is pending?', sees: 'Today’s visits and appointments, incoming enquiries to assign, and missing documents to chase.' },
    { role: 'Accountant', question: 'What have we earned and who owes us?', sees: 'Fee invoices, splits due, received amounts and tax-ready lines for each deal.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Property portals and your website for enquiries. We agree how leads reach Verity during setup.',
      'WhatsApp for talking to buyers and other dealers. Agents send the messages, Verity tells them who and when.',
      'Your lawyer and the registrar’s office for the legal work.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'List your properties on portals or run your website.',
      'Send messages to buyers or owners on its own.',
      'File your returns or give legal advice.',
      'Replace your accountant or your lawyer.',
    ],
    migration:
      'We bring your listings, contacts, open deals and fees owed across from the sheets, notebooks and phones you use now, in stages, so the office keeps selling while it happens.',
  },

  faqHeading: 'Questions property dealers ask.',
  faqs: [
    [
      'Will my agents actually use it?',
      'It works only if calls and visits are noted, so we make that take seconds, on the phone they already carry. We train with their own enquiries, and each agent gets something back: a daily list of who to call and a clear view of their own fees.',
    ],
    [
      'Does Verity list my properties on portals?',
      'No. Portals and your website keep doing that. Verity records your listings and the enquiries that arrive, and we agree how leads reach Verity during setup.',
    ],
    [
      'Can it send messages to buyers by itself?',
      'Not by itself. Verity shows which buyer fits which listing and assigns the call to the right agent. Your team makes the call or sends the message, and the outcome is recorded.',
    ],
    [
      'I run a small office with three agents. Is this too much?',
      'A three-agent office has the same leaks, with fewer people to notice them. We set up only what you need, and the four-week process is the same.',
    ],
    [
      'What happens when an agent leaves?',
      'Their buyers, owners, listings and call history are in your system, not on their phone. You reassign their list in one step, and the handover is ready on the day they resign.',
    ],
    [
      'Can it handle splits with co-brokers and sub-agents?',
      'Yes. Split terms are stored on the deal when it starts, and when the brokerage is received Verity shows each person’s share and whether it has been paid.',
    ],
    [
      'Who can see my owner and buyer data?',
      'Only the people you allow. Access is set by role, so agents see their own contacts and fees, and every change is recorded with who made it and when.',
    ],
    [
      'Will it check whether a project is RERA registered?',
      'It keeps the RERA number and validity date on each project record and flags one that is close to expiry or has lapsed. Your team still confirms the status with the authority.',
    ],
    [
      'What does it cost?',
      'It depends on the number of agents and what you want set up. Message us and we will give you a clear number after a short conversation about how your office works.',
    ],
  ],

  related: ['real-estate-agencies', 'real-estate-developers', 'property-management', 'home-builders', 'interior-design-firms', 'financial-advisors'],

  ctaHeading: 'Start with the buyers who have never been matched.',
  ctaLede:
    'Tell us how your office works and we will show you the stale listings, the uncalled enquiries and the brokerage still owed, using your own numbers.',
};
