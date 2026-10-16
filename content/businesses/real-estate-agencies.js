export default {
  schema: 2,
  slug: 'real-estate-agencies',
  status: 'published',
  plural: 'real estate agencies',
  subject: 'real estate agency',
  checked: '15 October 2026',

  seo: {
    title: 'Real estate agency software: leads, listings, commissions | Verity',
    description:
      '14 problems that cost a brokerage deals: slow lead follow-up, stale listings, double-worked clients, late commissions and RERA gaps. What each costs and what fixes it.',
    keywords: [
      'real estate agency software India',
      'property broker lead follow-up tracking',
      'real estate brokerage commission tracking',
      'listing and buyer requirement matching',
      'RERA agent compliance records',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for real estate agencies',
    headline: 'The buyer was ready. The lead was called three days late. Verity makes sure the right agent calls first.',
    lede:
      'A brokerage earns from speed, memory and trust: calling a lead while it is warm, remembering which flat suits which buyer, and keeping owners and buyers on the same page until the deal registers. Most of that lives in agents’ phones. Verity moves it onto one record per client and per property.',
    oneLine:
      'One system that shows every lead, every listing, every site visit and every deal stage, and what each of them is worth to the agency.',
    note: 'Your agents keep calling and meeting clients the way they do today. Verity records what happened and tells them who to call next.',
    screen: 'desk',
    screenNote: 'leads, listings, deals and commissions',
  },

  today: {
    heading: 'The agency runs on phones. The business lives in none of them.',
    paragraphs: [
      'A good agent knows their buyers by name and their listings by floor. That knowledge sits in a personal phone, a WhatsApp group of owners, a notebook of requirements and a portal login. The agency owner sees the outcome at month end, and little of what led to it.',
      'Leads arrive from portals, social media, hoardings, referrals and walk-ins. Some are called in minutes, some in days, some twice by two different agents. A buyer who wanted a 3 BHK under ₹1.5 crore in March is matched by memory, not by a record, to a flat that came on the market in September.',
      'The deals that close hide the leaks: the leads that died quietly, the owners who listed with three brokers, the commission a developer owes for a booking from August, and the agent who left with fifteen hundred contacts.',
    ],
    stack: ['Portal lead inboxes', 'WhatsApp groups with owners and buyers', 'Agents’ phone contacts', 'Excel listing and requirement sheets', 'Notebook of site visits', 'The owner’s memory'],
    stackNote: 'Each is a fine tool for one agent. None of them tells the agency who owns a client, what has been shown, or what is owed.',
  },

  painsHeading: 'Where a real estate agency loses deals and money.',
  painsLede:
    'These are the situations brokerage owners describe. For each one: what it looks like, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Leads',
      title: 'Portal and social leads wait too long for a first call',
      scene:
        'A buyer fills a form at 9 pm. The agent sees it the next afternoon. By then the buyer has spoken to two other brokers and has a site visit booked.',
      cost:
        'In one audit of 2,241 US companies, only 37 percent replied to a test web lead within an hour and 23 percent never replied. A broker who calls first usually gets the visit.',
      fix:
        'Every new lead becomes a record with an owner and a due time for the first call. A lead not called within your target time moves to a list the team lead sees and can reassign.',
      screen: 'leads',
      source: {
        name: 'SmartCompany, on the HBR audit of lead response times',
        url: 'https://www.smartcompany.com.au/marketing/20110704-are-you-letting-online-leads-go-cold/',
      },
    },
    {
      area: 'Leads',
      title: 'Nobody knows which lead source pays',
      scene:
        'The agency spends ₹60,000 a month on portal listings and ₹40,000 on social ads. Leads come in, but nobody can say how many became site visits, bookings or commission.',
      cost:
        'Example arithmetic: ₹1 lakh a month on lead sources for 180 leads that produce two closed deals is a very different story from the same spend producing six. Without the count, money keeps going to the wrong place.',
      fix:
        'Every lead carries its source. Verity shows, by source, how many leads were called, visited, negotiated and closed, and the commission earned against what was spent.',
      screen: 'desk',
    },
    {
      area: 'Leads',
      title: 'The same buyer is worked by two agents',
      scene:
        'A buyer enquires on a portal and also walks in. Two agents each call her. She gets confused, and later the two agents argue about who gets the credit.',
      cost:
        'A buyer who feels hassled walks away, and the agency loses an agent’s goodwill when commission is split by argument.',
      fix:
        'A client is one record across the agency. A second enquiry from the same phone number links to the existing record and the original owner, so ownership is clear before the second call is made.',
      screen: 'leads',
    },
    {
      area: 'Buyers',
      title: 'Buyer requirements are remembered, not matched',
      scene:
        'A family asked for a 3 BHK in Whitefield near a good school, under ₹1.6 crore. A listing matching that came in on Tuesday. The agent who spoke to the family is on leave, and no one else knows.',
      cost:
        'A matching listing and a waiting buyer, and the deal goes to whoever happens to remember first.',
      fix:
        'Each buyer record holds a structured requirement: area, type, budget, timing, must-haves. A new listing shows the buyers who match, and the agent who owns each buyer gets a task to share it.',
      screen: 'matching',
    },
    {
      area: 'Listings',
      title: 'Listings are stale, sold or at the wrong price',
      scene:
        'A flat was rented out last month but is still on the portal and in the WhatsApp groups. Buyers call about it. Another owner has dropped the price by ₹8 lakh and told no one at the agency.',
      cost:
        'Wasted site visits, annoyed buyers and a reputation for stale information, which is the one thing buyers use to choose a broker.',
      fix:
        'Every listing has a status, a price, a last checked date and an owner contact. Listings not confirmed with the owner within your set number of days are flagged, and price changes are logged with the date.',
      screen: 'matching',
    },
    {
      area: 'Owners',
      title: 'Owners list with three brokers and the mandate is vague',
      scene:
        'An owner told two agents "go ahead". The flat is also on the portal from another broker. When a buyer is found, there is a discussion on who introduced whom.',
      cost:
        'Commission disputes, owners who lose trust, and agent time spent on a flat the agency may not be allowed to sell.',
      fix:
        'Each listing records the mandate type, exclusive or open, the start and end dates and the agreed brokerage. Mandates ending soon appear as a renewal task with the owner’s contact.',
      screen: 'matching',
    },
    {
      area: 'Visits',
      title: 'Site visits are not confirmed, and feedback is lost',
      scene:
        'Four visits are fixed for Saturday. Two buyers do not show up. Of the two who do, one liked the flat but wanted a lower floor. That detail stays in the agent’s head.',
      cost:
        'A wasted morning for the agent, a missed second flat shown, and no memory of what the buyer actually wanted when they come back.',
      fix:
        'Each visit is a scheduled record with the buyer, the property and the agent, and a confirmation task the day before. After the visit the agent records feedback in a few taps, and the buyer’s requirement is updated.',
      screen: 'leads',
    },
    {
      area: 'Deals',
      title: 'A deal stalls between token and registration',
      scene:
        'The buyer paid a token. The loan sanction is awaited. The owner’s documents are incomplete. The agreement date slips twice. The agent has no list of what is missing.',
      cost:
        'Deals fall through between booking and registration more often than at the start, and the agent’s commission is only earned if the deal completes.',
      fix:
        'Each deal has a stage, a checklist of documents for buyer and owner, and an owner for each pending item. Deals sitting at a stage longer than usual appear on the pipeline with the missing item named.',
      screen: 'deals',
    },
    {
      area: 'Commission',
      title: 'Developers pay brokerage late, and the agency has to chase',
      scene:
        'A builder promised brokerage within 30 days of agreement. It has been 75. The agency’s account person calls every week, and the developer’s team says it is "with accounts".',
      cost:
        'Cash tied up in commission invoices, and agents who are paid only after the agency is paid, so they get restless.',
      fix:
        'Each booking has an expected brokerage, the invoice raised and its due date. Overdue developer payments list by developer with age, and every follow-up call is recorded with a promise date.',
      screen: 'commission',
    },
    {
      area: 'Commission',
      title: 'Agent commissions are calculated by hand and argued over',
      scene:
        'At month end the owner works out each agent’s share across deals, referral splits, slabs and a deduction for the lead cost. One agent says the split on a joint deal was different.',
      cost:
        'Hours of owner time every month, and the risk of an agent leaving to a rival who pays on time.',
      fix:
        'Each deal records the agents involved and their split. Verity builds a monthly commission statement from your own slabs. The agent sees the same breakdown, and a deal is not paid out until the brokerage is received, if that is your rule.',
      screen: 'commission',
    },
    {
      area: 'Rentals',
      title: 'Rental renewals and lock-in dates go unnoticed',
      scene:
        'The agency placed 120 tenants over three years. Eleven agreements end this quarter. The tenants will renew or move, and the owners will relist, but nobody called them.',
      cost:
        'A second brokerage, from the tenant or the owner, goes to whoever called first.',
      fix:
        'Each rental has its start, end and lock-in dates. The renewal list shows agreements ending in the next 90 days with the owner and tenant, and a task for the agent who placed it.',
      screen: 'deals',
    },
    {
      area: 'Compliance',
      title: 'RERA registration, ads and agreements are tracked by memory',
      scene:
        'The agency’s RERA registration comes up for renewal. A new ad goes out without the registration number or QR code. A buyer agreement is signed on an old template.',
      cost:
        'RERA provides for a penalty of up to ₹10,000 for every day a registration default continues, up to 5 percent of the property cost. In Maharashtra, a notification reported in April 2025 set penalties of up to ₹50,000 for advertisements without the registration number and QR code.',
      fix:
        'Registration numbers, certificate dates and renewals sit on the agency and agent records. Ad checklists and agreement templates are attached to the listing, and a reminder task goes out before each renewal.',
      screen: 'rera',
      source: {
        name: 'The Realty Today, on MahaRERA advertisement rules',
        url: 'https://therealtytoday.com/news/regulatory/maharera-makes-qr-code-registration-number-mandatory-in-ads-50000-penalty-for-violations/',
      },
    },
    {
      area: 'People',
      title: 'When an agent leaves, their clients and listings leave with them',
      scene:
        'A senior agent resigns on Friday. He has 600 contacts on his phone, 40 owner relationships and 12 live deals. He starts at a rival on Monday.',
      cost:
        'Buyers, owners and the deals in progress follow the person, not the agency.',
      fix:
        'Clients, owners, listings and deals belong to the agency’s records, with their full history and an agent assigned. A leaver’s list can be reassigned in one step, and access is removed on their last day.',
      screen: 'desk',
    },
    {
      area: 'Owner',
      title: 'The owner cannot see the pipeline or forecast the month',
      scene:
        'The owner asks each team lead how many deals will close this month. The answers are a mix of hope and memory. Rent and salaries are due on the 1st.',
      cost:
        'Cash planning by guess, and no early sign that a month will be weak while there is still time to push.',
      fix:
        'The pipeline shows deals by stage with expected brokerage and probability set by you. The desk screen compares the expected brokerage this month with commitments, and agents’ pipelines side by side.',
      screen: 'desk',
    },
  ],

  factsHeading: 'The numbers behind these problems.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '37%',
      text: 'of 2,241 US companies replied to a test web lead within an hour, and 23 percent never replied. A companion analysis of about 1.25 million leads found that contacting a lead within an hour made it far more likely to be qualified. These are US firms across industries, not property brokers.',
      source: { name: 'SmartCompany, on a Harvard Business Review study', year: '2011', url: 'https://www.smartcompany.com.au/marketing/20110704-are-you-letting-online-leads-go-cold/' },
    },
    {
      figure: '₹10,000 a day',
      text: 'is the penalty RERA provides for each day an agent’s default continues for not registering or not following the agent’s duties, up to 5 percent of the cost of the plot or apartment.',
      source: { name: 'Mondaq, RERA Act 2016 summary', url: 'https://www.mondaq.com/india/real-estate/1235906/rera-act-2016-part-3' },
    },
    {
      figure: '₹50,000',
      text: 'is the penalty reported for advertisements without the project registration number and QR code under a MahaRERA notification of April 2025. It applies to developers and registered agents in Maharashtra.',
      source: { name: 'The Realty Today', year: '2025', url: 'https://therealtytoday.com/news/regulatory/maharera-makes-qr-code-registration-number-mandatory-in-ads-50000-penalty-for-violations/' },
    },
    {
      figure: '18%',
      text: 'is the GST rate commonly charged on a real estate broker’s commission or brokerage, and it applies to rental brokerage as well. Registration thresholds and conditions vary, so confirm with your accountant.',
      source: { name: 'TaxBuddy, GST guide for real estate brokers (vendor)', url: 'https://www.taxbuddy.com/blog/gst-filing-real-estate-brokers-taxbuddy' },
    },
  ],
  factsNote:
    'The lead response figure is from a US study of many industries, and is a decade and a half old. The penalty figures are legal summaries and a news report. The tax rate comes from a vendor guide. Check each against the official source or with your adviser.',

  screensHeading: 'The screens an agency would use every day.',
  screensLede: 'Six views, each built for one job. Names and stages use your agency’s own terms.',
  screens: [
    {
      id: 'desk',
      title: 'Agency / Today',
      meta: 'All agents',
      heading: 'The owner’s view of leads, listings and money',
      caption:
        'Leads waiting for a first call, site visits today, deals by stage, and brokerage expected and overdue. It replaces the Monday call round with each team lead.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Leads uncalled', value: '14', note: 'past target time' },
            { label: 'Visits today', value: '9', note: '3 unconfirmed' },
            { label: 'Deals live', value: '27', note: '₹68 L expected' },
            { label: 'Brokerage overdue', value: '₹7.2 L', note: '3 developers' },
          ],
        },
        { type: 'title', text: 'Closed deals and leads by source, this quarter' },
        {
          type: 'bars',
          items: [
            { label: 'Referrals', value: 82, display: '9 deals' },
            { label: 'Portal listings', value: 45, display: '5 deals' },
            { label: 'Social ads', value: 18, display: '2 deals', tone: 'muted' },
            { label: 'Walk-ins', value: 36, display: '4 deals' },
          ],
        },
        { type: 'alert', text: '14 portal leads have waited over 30 minutes for a first call. 6 belong to Rahul, who is on site.', action: 'Reassign' },
      ],
    },
    {
      id: 'leads',
      title: 'Leads and visits',
      meta: 'Today',
      heading: 'Who to call, and who is visiting what',
      caption:
        'New leads with their first-call deadline, and today’s site visits with confirmation status. Feedback after each visit goes onto the buyer’s record.',
      blocks: [
        {
          type: 'table',
          cols: ['Lead', 'Source', 'Looking for', 'Agent', 'Status'],
          rows: [
            ['Neha Kulkarni', 'Portal', '2 BHK, Baner, up to 1.1 Cr', 'Rahul', ['Call due', 'late', 'Called', 'ok']],
            ['Sandeep Rao', 'Referral', '3 BHK, Hinjewadi, 1.6 Cr', 'Priya', ['Visit Sat', 'info']],
            ['Fatima Sheikh', 'Social ad', '1 BHK rental, Kothrud', 'Imran', ['Call due', 'flag', 'Called', 'ok']],
            ['Ravi Joshi', 'Walk-in', 'Plot, Wagholi', 'Priya', ['Matches 2', 'info']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: '11:00 Visit: Skyline Apt 904 with Kulkarni family', meta: 'Agent Priya, owner has the keys', tag: ['Unconfirmed', 'flag', 'Confirmed', 'ok'] },
            { name: '4:30 Visit: Palm Heights 12B with S. Rao', meta: 'Agent Priya', tag: ['Confirmed', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'matching',
      title: 'Listings and buyers',
      meta: 'Matches',
      heading: 'A new listing, and the buyers who should hear about it',
      caption:
        'Each listing with its mandate, price history and last checked date, and the waiting buyers who match it. Stale listings are flagged before a buyer wastes a visit.',
      blocks: [
        {
          type: 'record',
          title: 'Skyline Apt 904, Baner',
          sub: '3 BHK, 1,420 sq ft. Owner: Mr Deshmukh. Agent: Priya',
          fields: [
            ['Price', '₹1.52 Cr (was ₹1.60 Cr)'],
            ['Mandate', 'Exclusive until 30 Nov'],
            ['Last confirmed', ['41 days ago', 'late', 'Confirmed today', 'ok']],
            ['Brokerage', '1% from owner'],
            ['Matching buyers', '4 on the waiting list'],
          ],
          timeline: [
            ['12 Oct', 'Price reduced by ₹8 lakh at owner’s request'],
            ['2 Oct', 'Shown to Kulkarni family, liked layout, wanted lower floor'],
            ['20 Sep', 'Listing exclusive until 30 Nov, signed'],
            ['Note', 'Owner prefers calls before 6 pm. Keys with security.'],
          ],
        },
      ],
    },
    {
      id: 'deals',
      title: 'Deals',
      meta: 'Pipeline',
      heading: 'Every deal by stage, with what is missing',
      caption:
        'Deals from first visit to registration, with the document checklist for buyer and owner. Rental renewals sit beside them so nothing is forgotten after the first brokerage.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Negotiating',
              cards: [
                { title: 'Palm Heights 12B, S. Rao', meta: 'Offer 1.55 Cr, owner asking 1.6', tag: ['Follow up', 'flag'] },
                { title: 'Green Acres plot, R. Joshi', meta: 'Visit Saturday', tag: ['Visit', 'info'] },
              ],
            },
            {
              name: 'Token paid',
              cards: [
                { title: 'Skyline 904, Kulkarni', meta: 'Loan sanction awaited, 3 docs pending', tag: ['Stuck 12 days', 'late', 'Cleared', 'ok'] },
              ],
            },
            {
              name: 'Agreement, registration',
              cards: [
                { title: 'Lake View 5A, Mehra', meta: 'Registration on 25 Oct', tag: ['On track', 'ok'] },
                { title: 'Rental renewals', meta: '11 agreements end in 90 days', tag: ['Call owners', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'commission',
      title: 'Commissions',
      meta: 'Brokerage and payouts',
      heading: 'What is owed to the agency and what is owed to agents',
      caption:
        'Brokerage expected, invoiced and received by deal and developer, and each agent’s share built from your slabs. Both sides see the same numbers.',
      blocks: [
        {
          type: 'table',
          cols: ['Deal', 'Developer or owner', 'Brokerage', 'Due', 'Status'],
          rows: [
            ['Green Acres unit 304', 'Green Acres Developers', '₹2.4 L', '30 days ago', ['Overdue', 'late', 'Promised 20 Oct', 'info']],
            ['Lake View 5A resale', 'Owner', '₹1.5 L', 'On registration', ['Pending', 'info']],
            ['Palm Heights rental', 'Owner and tenant', '₹36,000', 'Paid', ['Received', 'ok']],
            ['Skyline 1202', 'Skyline Group', '₹3.1 L', '15 days ago', ['Invoice sent', 'flag']],
          ],
        },
        { type: 'title', text: 'Agent share this month' },
        {
          type: 'bars',
          items: [
            { label: 'Priya', value: 90, display: '₹1.8 L' },
            { label: 'Rahul', value: 60, display: '₹1.2 L' },
            { label: 'Imran', value: 40, display: '₹0.8 L', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'rera',
      title: 'RERA and records',
      meta: 'Registration and ads',
      heading: 'Registration numbers, renewals and ad checks in one place',
      caption:
        'The agency’s and each agent’s registration, renewal dates, the checklist an advertisement should meet, and the agreement template attached to each deal.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Agency RERA registration, Maharashtra', meta: 'Valid until 14 Mar 2027', done: true },
            { text: 'Priya Nair, agent certificate', meta: 'Valid until 2 Feb 2027', done: true },
            { text: 'Imran Qureshi, agent certificate', meta: 'Renewal due in 21 days', done: false },
            { text: 'Ad: Skyline 904 social post', meta: 'Registration number and QR code missing', done: false },
          ],
        },
        { type: 'alert', text: 'One ad in the last week has no registration number. Rahul is the owner of the post.', action: 'Fix ad' },
      ],
    },
  ],

  dayHeading: 'The same Saturday in a brokerage, before and after.',
  dayLede: 'The calls and meetings are the same. What changes is that each lead, visit and promise leaves a record, and the record tells the agent what to do next.',
  day: [
    {
      time: 'Morning',
      before: 'Two agents each call the same portal lead without knowing the other has.',
      after: 'The lead belongs to one agent. A second enquiry from the same number links to her record.',
    },
    {
      time: 'Late morning',
      before: 'A new listing comes in on a phone call. The agent posts it in four WhatsApp groups and hopes.',
      after: 'The listing is saved with its mandate. Four waiting buyers appear as matches, each with a task for their agent.',
    },
    {
      time: 'Midday',
      before: 'A buyer does not show up for a visit. The owner waited two hours for nothing.',
      after: 'The visit was unconfirmed the evening before, so a reminder task went to the agent and the visit was moved.',
    },
    {
      time: 'Afternoon',
      before: 'A token was paid last week. The agent has no list of what documents are missing.',
      after: 'The deal shows three missing items, each with a name. The agent chases the right people.',
    },
    {
      time: 'Evening',
      before: 'A developer owes brokerage from 75 days ago. Nobody remembers who last called.',
      after: 'The overdue list shows each call and the date the developer promised. The account person calls with the history in hand.',
    },
    {
      time: 'Month end',
      before: 'The owner spends an evening working out commission splits, and one agent disagrees.',
      after: 'The statements are ready on the 1st, and every agent sees the same breakdown.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how leads, listings and deals move through your agency, then build Verity around it and stay on to make it work.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and a team lead. Follow a lead from the portal to a registered deal and a listing from the owner call to a sale, and see where each step is tracked today.',
        you: 'Two to three hours of your time and an hour from a senior agent. Access to your lead inbox, listing sheet and commission calculation.',
        get: 'A written map of how your agency works: lead sources, deal stages, mandates, commission rules and the five problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your lead sources, first-call target, deal stages and document checklists, listing fields, mandate types, commission slabs and RERA records, with screens in your own words.',
        you: 'Check the stages and commission rules with a team lead. Tell us where a rule is wrong.',
        get: 'A working Verity with your agents, areas and rules, ready for your live leads and listings.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your clients, owners, listings and live deals from your sheets and the leads inbox. Train agents in short sessions on their own clients.',
        you: 'Your client and listing sheets and a list of live deals. Thirty minutes with each agent.',
        get: 'Every live lead, listing and deal inside Verity, and agents who have logged a real visit.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first month of leads and deals with you, tune the targets and lists, and handle changes as the agency grows.',
        you: 'A short monthly review of lead sources, pipeline and commission.',
        get: 'A system that follows how the agency sells, with someone responsible for it.',
      },
    ],
    bring: [
      'Your client and owner contact sheets, even if they are exports from phones',
      'Your live listing sheet with owner contacts and mandates',
      'The list of live deals with their stage',
      'Your commission slabs and referral rules',
      'Your RERA registration and agent certificate numbers',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Each agent needs about half an hour.',
    after: 'Nobody is hired to run Verity. Calls, visits and deal steps are recorded as agents work, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask the agency a question and get an answer.',
    lede:
      'Verity AI reads your own lead, listing, deal and commission records. Ask in plain words, then turn the answer into tasks for the right agents.',
    examples: [
      {
        q: 'Which buyers match the new Skyline 904 listing?',
        a: 'Four buyers on the waiting list match on area, size and budget. Two of them have already seen a similar flat in the last month.',
        rows: [['Kulkarni family', 'Priya'], ['Sandeep Rao', 'Priya'], ['Anjali Menon', 'Rahul'], ['Vikas Patel', 'Imran']],
        action: 'Create a share-listing task for each agent',
      },
      {
        q: 'Which lead source has given us the most closed deals this quarter?',
        a: 'Referrals, with 9 closed deals, ahead of portal listings with 5 and walk-ins with 4. Social ads produced 2.',
        rows: [['Referrals', '9'], ['Portal listings', '5'], ['Walk-ins', '4'], ['Social ads', '2']],
      },
      {
        q: 'Which developers owe us brokerage for more than 30 days?',
        a: 'Three developers, ₹7.2 lakh in total. Green Acres owes ₹2.4 lakh, 30 days past due, with a promise to pay on 20 October.',
        action: 'Create a follow-up task for accounts',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Agents still make the calls and send the messages; Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A new lead arrives',
      then: ['Linked to an existing client if the number matches', 'Assigned to an agent with a call deadline', 'Moved to the team lead if not called in time'],
    },
    {
      when: 'A new listing is saved',
      then: ['Matched against waiting buyers', 'Task to each buyer’s agent to share it', 'Last confirmed date set for the owner check'],
    },
    {
      when: 'A site visit is within 24 hours',
      then: ['Confirmation task to the agent', 'Owner and keys checked', 'Feedback form opens after the visit'],
    },
    {
      when: 'A deal stays at one stage too long',
      then: ['Flag on the pipeline', 'Missing documents listed with owners', 'Escalation to the team lead after a week'],
    },
    {
      when: 'Brokerage is past its due date',
      then: ['Listed by developer with age', 'Follow-up task to accounts', 'Promise date recorded after each call'],
    },
    {
      when: 'A registration or mandate is near its end',
      then: ['Renewal task 30 days before', 'Listed on the compliance screen', 'Outcome recorded: renewed or lapsed'],
    },
  ],

  rules: {
    heading: 'The rules a real estate agency has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so you can show your registration, ads and agreements when asked.',
    items: [
      {
        name: 'RERA registration of agents',
        what: 'Under the Real Estate (Regulation and Development) Act, 2016, an agent who facilitates the sale of a plot, apartment or building in a registered project generally has to be registered with the state authority and quote that number. Failure to comply with Sections 9 or 10 can attract a penalty of up to ₹10,000 per day, up to 5 percent of the cost.',
        how: 'The agency’s and each agent’s registration number, state and renewal date are stored, and renewal reminders are tasks with an owner.',
        source: { name: 'Mondaq', url: 'https://www.mondaq.com/india/real-estate/1235906/rera-act-2016-part-3' },
      },
      {
        name: 'State RERA advertising and training rules',
        what: 'Some state authorities add their own rules. In Maharashtra, a notification reported in April 2025 requires the registration number and QR code in project advertisements by developers and agents. State rules also cover agent training and certification, and the details change.',
        how: 'Each listing holds the registration number and the ad checklist, and each agent’s certificate dates sit on their record.',
        source: { name: 'The Realty Today', url: 'https://therealtytoday.com/news/regulatory/maharera-makes-qr-code-registration-number-mandatory-in-ads-50000-penalty-for-violations/' },
      },
      {
        name: 'GST on brokerage',
        what: 'Brokerage is generally taxed at 18 percent, including rental brokerage. Registration thresholds and conditions depend on your turnover and whether you work across states.',
        how: 'Each deal records the brokerage, the party billed and the invoice, so your accountant gets a clean list for the month.',
        source: { name: 'TaxBuddy guide (vendor)', url: 'https://www.taxbuddy.com/blog/gst-filing-real-estate-brokers-taxbuddy' },
      },
      {
        name: 'Client and personal data',
        what: 'Buyer and owner details, ID documents and financial information are personal data. India’s data protection rules are being phased in, so keep access narrow and know where documents are stored.',
        how: 'Client records and documents sit in one permissioned place, with a log of who viewed or changed them, instead of personal phones.',
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your state RERA, your lawyer or your accountant. Verity does not file anything.',
  },

  rolesHeading: 'Everyone sees the same client, through their own window.',
  rolesLede: 'An agent does not need to see what the agency earns on other agents’ deals. Accounts do not need the buyer’s requirements. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'What will we earn this month, and where are deals stuck?', sees: 'Pipeline by stage, brokerage expected and overdue, lead sources by outcome, agent performance side by side.' },
    { role: 'Team lead', question: 'Who needs help, and which leads are cold?', sees: 'Uncalled leads, agents’ pipelines, visits today, deals stuck at a stage.' },
    { role: 'Agent', question: 'Who do I call now?', sees: 'Their leads with call deadlines, today’s visits, matches for their buyers and their own commission.' },
    { role: 'Accounts', question: 'What brokerage can I invoice, and what is late?', sees: 'Deals ready to invoice, developer ageing, agent payouts and GST split.' },
    { role: 'Compliance or admin', question: 'Are our registrations and ads in order?', sees: 'Registration and certificate dates, ad checklists and agreement templates.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'The property portals you list on. Leads from them are recorded; agents still reply from the portal or phone.',
      'WhatsApp groups with owners and buyers. Agents log what was agreed on the record.',
      'Your accounting software and your accountant, who still prepares returns.',
      'Your own agreement, mandate and brokerage templates.',
    ],
    not: [
      'List properties on the portals or run your advertisements.',
      'Send messages to buyers or owners on its own.',
      'File your GST returns or run your payroll.',
      'Give legal advice on agreements or register your agency with RERA.',
    ],
    migration:
      'We bring your clients, owners, listings and live deals across from your sheets, phone exports and chat threads in stages, so the agency keeps selling while it happens.',
  },

  faqHeading: 'Questions agency owners ask.',
  faqs: [
    [
      'Will my agents actually use it?',
      'Agents use it if it saves them work: it tells them who to call, shows matching listings and calculates their commission. We keep logging to a few taps from the phone browser and train on their own clients, not in a classroom.',
    ],
    [
      'Can it pull leads from the property portals?',
      'We agree during setup how leads from your portals and ad forms reach Verity, for example by forwarding or export. Each lead then becomes a record with an owner and a call deadline. We do not promise a direct link to any named portal in advance.',
    ],
    [
      'Does Verity message buyers on WhatsApp?',
      'No. Verity tells the agent who to message and when, and records the outcome. The agent sends the message.',
    ],
    [
      'We are a team of five agents. Is this too much?',
      'The same leaks exist at five agents: slow calls, double-worked buyers and late commission. We set up only what you need, and the four weeks run the same way.',
    ],
    [
      'What happens to client data when an agent leaves?',
      'Clients, owners and listings belong to the agency’s records, not the agent’s phone. A leaver’s list is reassigned in one step and their access is removed on their last day.',
    ],
    [
      'Does it handle rentals as well as sales?',
      'Yes. A rental is a deal with a start, end and lock-in date, so renewals and the next brokerage show up automatically.',
    ],
    [
      'Who can see my client and commission data?',
      'Only the people you allow. Access is set by role, so agents, team leads, accounts and compliance each see what they need, and every change is recorded with who made it and when.',
    ],
    [
      'How long before I see something useful?',
      'The uncalled leads list, matching buyers and overdue brokerage need only your existing lead, listing and deal sheets, so they come first. Source-by-source results become reliable after a few weeks of recorded leads.',
    ],
    [
      'What does it cost?',
      'It depends on the number of agents and branches and what you want set up. Message us and we will give you a clear number after a short conversation about how your agency runs.',
    ],
  ],

  related: ['property-dealers', 'real-estate-developers', 'property-management', 'home-builders', 'recruitment-agencies', 'insurance-agencies'],

  ctaHeading: 'Start with the leads nobody called.',
  ctaLede:
    'Tell us how your agency runs and we will show you the uncalled leads, the stuck deals and the overdue brokerage it would find, using your own numbers.',
};
