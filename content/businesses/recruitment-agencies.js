export default {
  schema: 2,
  slug: 'recruitment-agencies',
  status: 'published',
  plural: 'recruitment agencies',
  subject: 'recruitment agency',
  checked: '15 October 2026',

  seo: {
    title: 'Recruitment agency software: requisitions, pipeline, fees | Verity',
    description:
      '14 problems that cost a staffing firm placements and fees: vague requisitions, duplicate submissions, offer drops, unbilled joinings and late client payments. What fixes each.',
    keywords: [
      'recruitment agency software India',
      'staffing firm candidate pipeline tracking',
      'placement fee and replacement guarantee tracking',
      'recruiter requisition tracking',
      'candidate offer drop tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'schedule', 'workforce', 'ai'],

  hero: {
    eyebrow: 'Verity for recruitment agencies',
    headline: 'The candidate accepted. Then went silent. Verity shows which offers are at risk while you can still save them.',
    lede:
      'A recruitment agency earns its fee on one day, the day a candidate joins, and loses it on many days before that: a requisition nobody understood, a candidate sent to the wrong client, an offer that was never followed up. Verity keeps every requisition, candidate and fee on one record so the pipeline is visible from first call to the last day of the guarantee.',
    oneLine:
      'One system that shows each client’s open roles, each candidate’s stage, each offer’s risk and each fee owed.',
    note: 'Recruiters keep using the job boards and phones they use today. Verity records what happened and shows what is stuck.',
    screen: 'desk',
    screenNote: 'requisitions, candidates, offers and fees',
  },

  today: {
    heading: 'Every recruiter has a system. The agency has five.',
    paragraphs: [
      'A good recruiter carries a deep, personal database: who is open to a move, who just got promoted, who declined last time and why. It lives in a personal spreadsheet, a phone, a job-board login and an email folder. When the recruiter is on leave, resigns or simply forgets, the memory goes with them.',
      'The agency owner sees open roles in a shared sheet, but the real status of each role sits with whoever is working it. Which candidates were sent, which interviews are scheduled, which offers are out, which of them have a notice period that ends next month. Clients ask for updates by phone, and the answers come from memory.',
      'The money follows the same pattern. A fee is earned when someone joins, and billed when someone remembers. Replacement guarantees run for weeks, and an early exit is learned of when the client complains.',
    ],
    stack: ['Job boards and portals', 'Recruiters’ personal sheets', 'Email folders per client', 'WhatsApp with candidates', 'A shared requisition sheet', 'Recruiters’ memory'],
    stackNote: 'Each is useful for one recruiter. Nothing tells the agency which candidate belongs to whom or which fee is waiting to be billed.',
  },

  painsHeading: 'Where a recruitment agency loses placements and fees.',
  painsLede:
    'These are the situations agency owners and team leads describe. For each one: what it looks like, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Requisitions',
      title: 'A role is taken without being understood',
      scene:
        'The client says "we need a finance manager, around 15 years". Three recruiters begin searching. A week later the client says it should be someone with SAP experience and a CA qualification, and the budget is lower than the recruiters assumed.',
      cost:
        'A week of three recruiters’ time spent on the wrong profile, and a client who thinks the agency does not listen.',
      fix:
        'Each requisition is a record with the role, must-have and good-to-have skills, budget range, location, notice period tolerance, fee terms and the person at the client who decides. Changes to the brief are logged with the date, so everyone works from the current version.',
      screen: 'requisitions',
    },
    {
      area: 'Requisitions',
      title: 'Too many open roles, and no sense of which can close',
      scene:
        'The agency has 60 open requisitions. Fifteen have candidates in interview. Twenty have had nothing for a month. The team spends equal energy on both.',
      cost:
        'Recruiter time drains into roles that will not fill while closable roles slow down. The fee for a closable role is delayed.',
      fix:
        'Requisitions are ranked by stage and age. A role with no submission in 14 days, or a client who has not given feedback in 10, appears on a list with a decision to keep, pause or return the role.',
      screen: 'requisitions',
    },
    {
      area: 'Candidates',
      title: 'The same candidate is submitted by two recruiters',
      scene:
        'A recruiter sends a profile to the client. The next day another recruiter in the same agency sends the same person for a different role. The client sees the duplicate and the candidate is confused about who represents them.',
      cost:
        'An embarrassing call to the client, a candidate who dislikes being chased twice, and a dispute in the team about who gets the credit.',
      fix:
        'Candidates are one record across the agency. Before a submission, Verity shows whether the person has been submitted to that client in the last period and by whom. Credit rules sit on the record.',
      screen: 'candidate',
    },
    {
      area: 'Candidates',
      title: 'The candidate database is full of stale, unconsented data',
      scene:
        'There are 40,000 profiles collected over eight years. Half the phone numbers are wrong. Nobody remembers whether the candidates agreed to be contacted or shared. Some are in the sheet because a recruiter copied them from a job board.',
      cost:
        'Time wasted on dead profiles, candidates annoyed by calls they did not expect, and growing exposure under India’s data protection rules, whose main duties start from 13 May 2027.',
      fix:
        'Each candidate record carries its source, consent note, last contact date and status. Profiles not contacted for a set period are flagged for review, and someone can be marked do not contact.',
      screen: 'candidate',
      source: {
        name: 'AZB & Partners, on the DPDP Rules, 2025',
        url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/',
      },
    },
    {
      area: 'Pipeline',
      title: 'Pipeline stages are updated when someone remembers',
      scene:
        'The client says the candidate was rejected last week. The recruiter has him as "interview scheduled". The candidate calls the recruiter asking about the result.',
      cost:
        'Credibility with both sides, and no honest number for how many candidates are really in play.',
      fix:
        'Each candidate has one stage per requisition: sourced, screened, submitted, interviewing, offered, joined or dropped, each with a date and the reason for any drop. The pipeline view is the only place the team looks.',
      screen: 'pipeline',
    },
    {
      area: 'Pipeline',
      title: 'Interviews are fixed over calls and clash or lapse',
      scene:
        'The client panel is available only on Thursday. Two candidates are told 3 pm. One has an exam, another is travelling. The interview is cancelled and the client’s interest cools.',
      cost:
        'A slow process loses good candidates, who accept other offers. Each slipped interview adds days to the placement.',
      fix:
        'Interviews are scheduled on both sides. The recruiter sees the candidate’s and the panel’s availability, and a reminder task goes out before the slot. Feedback from the client is due within an agreed number of days and chased if late.',
      screen: 'pipeline',
    },
    {
      area: 'Offers',
      title: 'Candidates accept offers and then do not join',
      scene:
        'The candidate accepted an offer with a 60-day notice period. At day 40 the current employer matches the salary and he withdraws. The recruiter finds out when the joining date passes.',
      cost:
        'Weeks of work and a fee that goes to nothing, plus a client who asks why the agency does not manage this.',
      fix:
        'Each offer records the notice period end, joining date and the check-in tasks in between. Offers with no contact for a set number of days, or a competing offer mentioned, are flagged as at risk so the recruiter can act.',
      screen: 'offers',
    },
    {
      area: 'Fees',
      title: 'A joining happens and the invoice goes out weeks later',
      scene:
        'A candidate joined on the 3rd. The recruiter tells accounts on the 22nd. The client’s payment cycle is 45 days from invoice, so the agency is paid in December for a September joining.',
      cost:
        'Cash arrives about two months later than it needed to. In a business with salaries to pay each month, that is real money.',
      fix:
        'The joining date is recorded on the offer. The same day, Verity creates an invoice task for accounts with the fee terms from the requisition, so the invoice goes out on time and the payment due date is known.',
      screen: 'fees',
    },
    {
      area: 'Fees',
      title: 'Replacement guarantees are not tracked, so exits surprise you',
      scene:
        'The agency promised a free replacement if the hire leaves within 90 days. A candidate resigned on day 62. The client mentioned it only when the next invoice arrived.',
      cost:
        'A replacement search the agency did not plan for, or a credit note it could have avoided by acting sooner.',
      fix:
        'Each placement has its guarantee end date. Check-in tasks at 30, 60 and 80 days go to the recruiter. An exit is recorded with a reason and opens a replacement requisition with the same terms.',
      screen: 'offers',
    },
    {
      area: 'Money',
      title: 'Large clients pay late, and you cannot afford to say so',
      scene:
        'A client owes ₹4.2 lakh in fees across three invoices, the oldest from 80 days ago. The client is also the biggest source of roles. The recruiter is reluctant to chase.',
      cost:
        'The agency funds a large client’s delays. A micro or small agency can expect payment within a written term of up to 45 days under the MSMED Act, but only if invoices and terms are in order.',
      fix:
        'Invoices carry the agreed terms. Overdue invoices list by client and age with a follow-up task for accounts, and each conversation and promise date is recorded. The owner sees which clients pay late before agreeing to more roles.',
      screen: 'fees',
      source: {
        name: 'Taxmann, on MSMED Act section 15 and section 43B(h)',
        url: 'https://www.taxmann.com/post/blog/analysis-practical-insights-into-section-43bh-regarding-disallowance-of-delayed-payments-to-mses/',
      },
    },
    {
      area: 'Clients',
      title: 'Fee terms differ by client and nobody remembers them',
      scene:
        'One client pays 8.33 percent of annual CTC, another 12 percent for senior roles and a flat ₹60,000 for juniors. One has a 60-day guarantee, another 90. Recruiters quote from memory.',
      cost:
        'An invoice with the wrong percentage, an argument with the client, and underbilled fees that nobody notices.',
      fix:
        'Each client holds its fee schedule, guarantee period, payment terms and exclusivity on the client record. A requisition inherits those terms, and the invoice is calculated from the offer’s final CTC.',
      screen: 'fees',
    },
    {
      area: 'People',
      title: 'Recruiter productivity is invisible until someone resigns',
      scene:
        'Two recruiters each produced three placements in a quarter. One made 120 calls a day and the other made 40 quality submissions. The owner cannot tell which is the better recruiter, or who needs help.',
      cost:
        'The wrong people get incentives, and the right people are not coached. Attrition among recruiters is high, and each exit takes candidates and client relationships with them.',
      fix:
        'Submissions, interviews, offers, joinings and fees are credited to the recruiter on each record. A scorecard shows ratios at each stage, and candidates, clients and requisitions stay with the agency when a recruiter leaves.',
      screen: 'desk',
    },
    {
      area: 'Contract staffing',
      title: 'Temporary and contract staff need attendance and payout records',
      scene:
        'The agency places 80 contract staff at three client sites. Attendance comes as a photo of a register. The client queries ten days, the agency cannot confirm them, and the invoice is held.',
      cost:
        'A held invoice delays the cash needed to pay the staff. A dispute with a client over attendance can end the contract.',
      fix:
        'Contract staff are recorded with their client, site, shift and attendance. The month’s attendance is compared with the client’s count before the invoice is raised, and differences are listed by person.',
      screen: 'fees',
    },
    {
      area: 'Owner',
      title: 'The owner cannot forecast fees for next month',
      scene:
        'Salaries and rent are due on the 1st. The owner asks for a list of expected joinings and gets a mix of optimism and rumour.',
      cost:
        'Cash planning by guess, and no early warning that a quarter is going to be thin while there is time to push.',
      fix:
        'Offers in the pipeline carry their expected joining date, fee and a risk rating. The desk screen shows expected fees by month and how much sits in at-risk offers.',
      screen: 'desk',
    },
  ],

  factsHeading: 'The numbers behind these problems.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '13 May 2027',
      text: 'is when the main duties of India’s Digital Personal Data Protection Rules, 2025 take effect, 18 months after they were notified on 13 November 2025. They cover notice and consent, and apply to anyone who holds candidate data.',
      source: { name: 'AZB & Partners', year: '2025', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
    },
    {
      figure: '2.6%',
      text: 'was the rise in flexi staffing employment in the first quarter of FY27, with manufacturing leading hiring, according to a report item dated 8 October 2026 listed by the Indian Staffing Federation.',
      source: { name: 'Indian Staffing Federation, listing a Business World item', year: '2026', url: 'https://www.indianstaffingfederation.org/' },
    },
    {
      figure: '45 days',
      text: 'is the longest written credit period a buyer can agree with a micro or small supplier under the MSMED Act, and 15 days applies if nothing is agreed in writing. A small agency billing a large client may qualify as a micro or small supplier.',
      source: { name: 'Taxmann, on MSMED Act section 15', url: 'https://www.taxmann.com/post/blog/analysis-practical-insights-into-section-43bh-regarding-disallowance-of-delayed-payments-to-mses/' },
    },
    {
      figure: '21 Nov 2025',
      text: 'is the date the Industrial Relations Code, 2020 was notified as in force, one of the new labour codes that affect fixed-term and contract staffing arrangements. The details of each code matter for staffing firms.',
      source: { name: 'Wikipedia, Industrial Relations Code 2020', url: 'https://en.wikipedia.org/wiki/Industrial_Relations_Code,_2020' },
    },
  ],
  factsNote:
    'The staffing growth figure is one quarter reported by a trade body and is not a full-year industry total. The labour code date comes from a general reference page. Neither figure measures recruiter or offer drop rates, which differ by agency, so Verity measures yours.',

  screensHeading: 'The screens an agency would use every day.',
  screensLede: 'Six views, each built for one job. Stages, role types and fee terms use your agency’s own words.',
  screens: [
    {
      id: 'desk',
      title: 'Agency / Today',
      meta: 'All recruiters',
      heading: 'The owner’s view of roles, offers and fees',
      caption:
        'Open roles, interviews today, offers at risk, expected joinings and the fees they bring. It replaces the Monday status round with each team lead.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Open roles', value: '58', note: '14 ageing' },
            { label: 'Interviews today', value: '11', note: '3 unconfirmed' },
            { label: 'Offers at risk', value: '5', note: '₹6.8 L in fees' },
            { label: 'Fees overdue', value: '₹9.4 L', note: '4 clients' },
          ],
        },
        { type: 'title', text: 'Expected fees by joining month' },
        {
          type: 'bars',
          items: [
            { label: 'October', value: 80, display: '₹8.2 L' },
            { label: 'November', value: 62, display: '₹6.4 L' },
            { label: 'December', value: 35, display: '₹3.6 L', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Neha Verma accepted the Brightline role but has not replied for 6 days. Joining planned 3 Nov.', action: 'Check in' },
      ],
    },
    {
      id: 'requisitions',
      title: 'Requisitions',
      meta: 'By client',
      heading: 'Every open role, how old it is, and whether it can close',
      caption:
        'Roles by client with the brief, budget, age and submissions so far. Roles that are not moving come up for a decision.',
      blocks: [
        {
          type: 'table',
          cols: ['Role', 'Client', 'Budget', 'Age', 'Status'],
          rows: [
            ['Finance manager', 'Brightline Foods', '₹24 to 30 L', '12 days', ['2 submitted', 'info']],
            ['Senior backend engineer', 'Quantix Software', '₹38 to 45 L', '34 days', ['No submissions', 'late', 'Brief clarified', 'ok']],
            ['Plant manager', 'Orbit Auto', '₹18 to 22 L', '21 days', ['Client silent 9 days', 'flag']],
            ['Sales lead, west', 'Nova Pharma', '₹20 to 26 L', '5 days', ['Sourcing', 'info']],
          ],
        },
        { type: 'alert', text: '14 roles have had no submission in 14 days. Pause or return them to the client.', action: 'Review' },
      ],
    },
    {
      id: 'candidate',
      title: 'Candidate',
      meta: 'Record',
      heading: 'One record for every candidate, shared across the agency',
      caption:
        'Profile, source, consent, every submission and every conversation. Before anyone sends a profile, they see where the person has already been sent.',
      blocks: [
        {
          type: 'record',
          title: 'Neha Verma',
          sub: 'Finance manager, 14 years. Current: Hexa Retail. Notice: 60 days',
          fields: [
            ['Source', 'Referral from past placement'],
            ['Consent', 'Agreed to sharing, 3 Sep 2026'],
            ['Last contact', ['6 days ago', 'late', 'Today', 'ok']],
            ['Submitted to', 'Brightline Foods (Sunita)'],
            ['Expected CTC', '₹28 to 30 L'],
            ['Stage', ['Offer accepted', 'info']],
          ],
          timeline: [
            ['9 Oct', 'Offer accepted at ₹29.5 L. Notice ends 3 Nov.'],
            ['2 Oct', 'Final interview with Brightline CFO, positive'],
            ['24 Sep', 'Submitted to Brightline by Sunita'],
            ['Note', 'Mentioned a counter-offer might come from her current firm.'],
          ],
        },
      ],
    },
    {
      id: 'pipeline',
      title: 'Pipeline',
      meta: 'Candidates by stage',
      heading: 'Where every candidate stands, in one view',
      caption:
        'Candidates moving through each stage for a requisition or for a recruiter, with interviews scheduled and client feedback owed.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Screened',
              cards: [
                { title: 'Arjun Das, backend engineer', meta: 'Quantix, 9 years', tag: ['Submit', 'flag', 'Submitted', 'ok'] },
                { title: 'Meera Pillai, sales lead', meta: 'Nova Pharma, 10 years', tag: ['Screened', 'info'] },
              ],
            },
            {
              name: 'Interviewing',
              cards: [
                { title: 'Ravi Menon, plant manager', meta: 'Orbit Auto, round 2 on Thu', tag: ['Unconfirmed', 'flag', 'Confirmed', 'ok'] },
                { title: 'Kiran Shah, finance manager', meta: 'Brightline, feedback pending 4 days', tag: ['Chase', 'late'] },
              ],
            },
            {
              name: 'Offered',
              cards: [
                { title: 'Neha Verma, finance manager', meta: 'Brightline, ₹29.5 L, joins 3 Nov', tag: ['At risk', 'late', 'Confirmed', 'ok'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'offers',
      title: 'Offers and guarantees',
      meta: 'Joining and replacement',
      heading: 'From accepted offer to the last day of the guarantee',
      caption:
        'Each offer with the notice period, joining date and risk, and each placement with its replacement guarantee and check-in dates.',
      blocks: [
        {
          type: 'table',
          cols: ['Candidate', 'Client', 'Joining', 'Risk', 'Next step'],
          rows: [
            ['Neha Verma', 'Brightline Foods', '3 Nov', ['Counter-offer', 'late'], 'Call today'],
            ['Sandeep Joshi', 'Quantix Software', '20 Oct', ['Low', 'ok'], 'Welcome note'],
            ['Pooja Nair', 'Orbit Auto', '28 Oct', ['No reply 5 days', 'flag', 'Confirmed', 'ok'], 'Call'],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Anil Rao, joined Quantix 12 Aug', meta: 'Guarantee ends 10 Nov. 60-day check-in due', tag: ['Check in', 'flag', 'Done', 'ok'] },
            { name: 'Priya Iyer, joined Orbit 20 Jul', meta: 'Resigned day 62. Replacement requisition opened', tag: ['Replace', 'late'] },
          ],
        },
      ],
    },
    {
      id: 'fees',
      title: 'Fees and clients',
      meta: 'Invoices and terms',
      heading: 'Fees ready to bill, and money still to collect',
      caption:
        'Joinings not yet invoiced, invoices by age, each client’s fee terms, and attendance checks for contract staff before the monthly invoice.',
      blocks: [
        {
          type: 'table',
          cols: ['Client', 'Item', 'Fee', 'Due', 'Status'],
          rows: [
            ['Quantix Software', 'Sandeep Joshi, joined 20 Oct', '₹3.2 L', 'Not invoiced', ['Invoice now', 'late', 'Invoiced', 'ok']],
            ['Orbit Auto', 'Anil Rao, joined 12 Aug', '₹1.9 L', '40 days overdue', ['Chase', 'flag']],
            ['Brightline Foods', 'Q3 contract staff, 62 people', '₹14.6 L', 'Attendance check', ['3 differences', 'flag', 'Resolved', 'ok']],
            ['Nova Pharma', 'Priya Singh, joined 1 Sep', '₹2.1 L', 'Paid', ['Received', 'ok']],
          ],
        },
        { type: 'alert', text: 'Orbit Auto owes ₹4.2 lakh across three invoices, the oldest 80 days. Their fee terms are 45 days.', action: 'Open client' },
      ],
    },
  ],

  dayHeading: 'The same Wednesday in a recruitment agency, before and after.',
  dayLede: 'The calls and interviews are the same. What changes is that each submission, offer and fee leaves a record, and the record tells the recruiter what to do next.',
  day: [
    {
      time: 'Morning',
      before: 'The team lead asks every recruiter for a status on their roles. Answers come as a long list of "in process".',
      after: 'The requisition screen shows which roles have a stuck client, no submissions or interviews waiting. The huddle takes ten minutes.',
    },
    {
      time: 'Late morning',
      before: 'A recruiter sends a profile that another recruiter sent to the same client last month.',
      after: 'Verity warns that the profile was submitted to this client last month, so the recruiter checks before sending.',
    },
    {
      time: 'Midday',
      before: 'A candidate with an accepted offer stops answering. The recruiter finds out on the joining date.',
      after: 'The offer was flagged as at risk after four quiet days. A call that afternoon surfaces a counter-offer.',
    },
    {
      time: 'Afternoon',
      before: 'A client panel member cancels an interview over a message. The candidate finds out an hour before.',
      after: 'The slot is recorded for both sides, and a new time is proposed to the candidate and client the same afternoon.',
    },
    {
      time: 'Evening',
      before: 'A candidate joined on the 3rd. Accounts hear about it on the 20th.',
      after: 'The joining is recorded, and an invoice task with the client’s fee terms reaches accounts that day.',
    },
    {
      time: 'Month end',
      before: 'The owner asks for expected joinings and gets guesses.',
      after: 'The desk screen shows expected fees by month, with the share sitting in at-risk offers.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how roles, candidates and fees move through your agency, then build Verity around it and stay on to make it work.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and a team lead. Follow one requisition from the client call to the fee invoice, and see how candidates, submissions, offers and guarantees are tracked today.',
        you: 'Two to three hours of your time and an hour from a senior recruiter. Access to your requisition sheet, candidate database export and a fee invoice or two.',
        get: 'A written map of how the agency works: client types, fee terms, stages, credit rules and the five problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your clients and fee terms, requisition fields, candidate stages, duplicate check, offer risk flags, guarantee periods and recruiter scorecards, with screens in your own words.',
        you: 'Check the stages, fee terms and credit rules with a team lead. Tell us where a rule is wrong.',
        get: 'A working Verity with your clients, roles and rules, ready for your live pipeline.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in your clients, open roles, candidate lists, offers and placements still under guarantee from your sheets and tools. Train recruiters in short sessions on their own roles.',
        you: 'Your requisition and placement sheets and a candidate export. Thirty minutes with each recruiter.',
        get: 'Every open role, live candidate and placement under guarantee inside Verity, and a team that has logged a real submission.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first month with you, tune flags and fee rules, and handle changes as your client mix changes.',
        you: 'A short monthly review of pipeline, offers and fees.',
        get: 'A system that follows how the agency recruits and bills, with someone responsible for it.',
      },
    ],
    bring: [
      'Your open requisitions with client, role and budget',
      'A candidate database export, even if it is messy',
      'Your client agreements with fee terms and guarantee periods',
      'A list of placements still within their guarantee period',
      'Your recruiter incentive and credit rules',
    ],
    time: 'About 8 to 10 hours of your own time across the four weeks, mostly in week 1. Each recruiter needs about half an hour.',
    after: 'Nobody is hired to run Verity. Submissions, offers and joinings are recorded as recruiters work, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask the agency a question and get an answer.',
    lede:
      'Verity AI reads your own requisition, candidate, offer and fee records. Ask in plain words, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which accepted offers are at risk of not joining?',
        a: 'Five offers worth ₹6.8 lakh in fees. Neha Verma, joining Brightline on 3 November, mentioned a counter-offer and has not replied for six days.',
        rows: [['Neha Verma', 'Brightline'], ['Pooja Nair', 'Orbit Auto'], ['Rohit Das', 'Nova Pharma'], ['Isha Kapoor', 'Quantix']],
        action: 'Create check-in tasks for the recruiters',
      },
      {
        q: 'Which clients pay slower than their agreed terms?',
        a: 'Orbit Auto is 40 days past terms, Quantix 12 days and Nova Pharma on time. Orbit owes ₹4.2 lakh.',
        rows: [['Orbit Auto', '40 days late'], ['Quantix Software', '12 days late'], ['Nova Pharma', 'On time']],
        action: 'Create a follow-up task for accounts',
      },
      {
        q: 'What is our submission-to-offer ratio by recruiter this quarter?',
        a: 'Sunita converts 1 in 5 submissions to an offer, Rahul 1 in 9 and Imran 1 in 14. Imran submits the most profiles.',
        rows: [['Sunita', '1 in 5'], ['Rahul', '1 in 9'], ['Imran', '1 in 14']],
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Recruiters still call and message; Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A new requisition is created',
      then: ['Client fee terms and guarantee attached', 'Assigned to a recruiter with a first-submission target', 'Added to the open roles list'],
    },
    {
      when: 'A profile is about to be submitted',
      then: ['Checked for earlier submissions to this client', 'Consent note confirmed', 'Submission recorded with the recruiter’s name'],
    },
    {
      when: 'An offer is accepted',
      then: ['Joining date and notice end recorded', 'Check-in tasks set through the notice period', 'Flag if there is no contact for several days'],
    },
    {
      when: 'A candidate joins',
      then: ['Invoice task to accounts with the fee terms', 'Guarantee end date set', 'Check-ins at 30, 60 and 80 days'],
    },
    {
      when: 'A placement leaves within the guarantee',
      then: ['Exit and reason recorded', 'Replacement requisition opened with same terms', 'Credit note decision requested from the owner'],
    },
    {
      when: 'An invoice passes its due date',
      then: ['Listed by client with age', 'Follow-up task to accounts', 'Promise date recorded after each call'],
    },
  ],

  rules: {
    heading: 'The rules a recruitment agency has to keep up with.',
    lede: 'Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so you can show consent, terms and dates when asked.',
    items: [
      {
        name: 'Candidate data under the DPDP Rules, 2025',
        what: 'The Digital Personal Data Protection Rules were notified on 13 November 2025, with the main duties on notice and consent starting 18 months later, on 13 May 2027. A CV, a phone number and a salary history are personal data.',
        how: 'Each candidate record carries its source, consent note and last contact, and who viewed or changed it. Do-not-contact status and review of old profiles are built in.',
        source: { name: 'AZB & Partners', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Labour codes for fixed-term and contract staff',
        what: 'The Industrial Relations Code, 2020 is listed as in force from 21 November 2025, alongside other labour codes. Rules on contract and fixed-term staff, registration of contractors and benefits are changing, so staffing firms should check their position carefully.',
        how: 'Contract staff are recorded with client, site, shift and attendance, so the records your adviser needs for contract labour are in one place.',
        source: { name: 'Wikipedia, Industrial Relations Code 2020', url: 'https://en.wikipedia.org/wiki/Industrial_Relations_Code,_2020' },
      },
      {
        name: 'Overseas recruitment',
        what: 'Under the Emigration Act, 1983, a person could act as a recruiting agent for emigrants only if registered, and employers must hire through a registered agent or hold a recruitment permit. Agencies placing people abroad should check current rules on fees and registration.',
        how: 'Overseas roles, candidates and documents are recorded as separate project types, with registration numbers and approvals stored on the client and requisition.',
        source: { name: 'Wikipedia, Emigration Act 1983', url: 'https://en.wikipedia.org/wiki/Emigration_Act,_1983' },
      },
      {
        name: 'Timely payment of micro and small suppliers',
        what: 'The MSMED Act sets payment within the agreed written term, not more than 45 days, or 15 days with no written agreement, for micro and small suppliers. Whether an agency qualifies depends on its registration and size.',
        how: 'Invoice dates, agreed terms and payment dates are recorded, so ageing and promised dates are visible by client.',
        source: { name: 'Taxmann', url: 'https://www.taxmann.com/post/blog/analysis-practical-insights-into-section-43bh-regarding-disallowance-of-delayed-payments-to-mses/' },
      },
    ],
    note: 'Rules change and differ by state and case. Confirm current requirements with your lawyer or accountant. Verity does not file anything.',
  },

  rolesHeading: 'Everyone sees the same pipeline, through their own window.',
  rolesLede: 'A recruiter does not need to see what the agency earns on other recruiters’ placements. Accounts do not need candidates’ details. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Which clients and roles earn, and what will we bill this month?', sees: 'Expected fees by month, offers at risk, client payment behaviour, recruiter ratios.' },
    { role: 'Team lead', question: 'Which roles are stuck and who needs help?', sees: 'Requisitions by age, submissions without feedback, interviews today, recruiters’ pipelines.' },
    { role: 'Recruiter', question: 'Who do I call now?', sees: 'Their roles, candidates and offers, check-in tasks, and their own scorecard and incentive.' },
    { role: 'Account manager', question: 'What does my client need from us?', sees: 'The client’s open roles, status of each, fee terms, invoices and guarantees.' },
    { role: 'Accounts', question: 'What can I invoice and what is late?', sees: 'Joinings awaiting invoice, ageing by client, contract staff attendance checks, credit notes.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'The job boards and portals you source from. Recruiters keep their logins; Verity holds the record of what was found.',
      'Email and WhatsApp for talking to candidates and clients. Recruiters log what was said on the record.',
      'Your accounting software and your accountant, who still prepares returns.',
      'Your client agreements and offer letter templates.',
    ],
    not: [
      'Source candidates from job boards or post jobs for you.',
      'Send messages to candidates or clients on its own.',
      'File your GST returns or run payroll for your contract staff.',
      'Give legal advice on contracts or labour law.',
    ],
    migration:
      'We bring your clients, open roles, candidate lists and placements still under guarantee across from your sheets and tools in stages, so recruiters keep working while it happens.',
  },

  faqHeading: 'Questions agency owners ask.',
  faqs: [
    [
      'Will my recruiters actually use it?',
      'Recruiters use what saves them effort: a duplicate check before submission, a list of whom to call, and their own scorecard. We keep logging to a few taps and train on their own roles. A recruiter who can show their numbers tends to like that.',
    ],
    [
      'Can Verity pull candidates from Naukri or LinkedIn?',
      'We agree during setup how profiles you export or collect reach Verity. We do not promise a direct link to any named job board in advance. Once a profile is in Verity, it is one record across the agency.',
    ],
    [
      'Does it send emails or messages to candidates?',
      'No. Verity tells the recruiter who to contact and when, and records what happened. The recruiter sends the message or makes the call.',
    ],
    [
      'We are a small team of six recruiters. Is this too much?',
      'The leaks are the same at six recruiters: duplicate submissions, offers that drop and fees billed late. We set up only what you need, and the four weeks run the same way.',
    ],
    [
      'Can it handle both permanent hiring and contract staffing?',
      'Yes. Permanent hiring runs through requisitions, candidates, offers and fees. Contract staffing adds client sites, shifts and attendance, with a check before each monthly invoice.',
    ],
    [
      'What happens to candidates and clients when a recruiter leaves?',
      'They belong to the agency’s records. A leaver’s roles and candidates can be reassigned in one step, and their access ends on their last day.',
    ],
    [
      'Who can see candidate data?',
      'Only the people you allow. Access is set by role, so recruiters, account managers and accounts each see what they need, and every change is recorded with who made it and when. Candidates marked do not contact are hidden from search.',
    ],
    [
      'How long before I see something useful?',
      'The stuck-role list, offers at risk and joinings to invoice need only your existing sheets, so they come first. Ratios by recruiter become reliable after a few weeks of recorded stages.',
    ],
    [
      'What does it cost?',
      'It depends on the number of recruiters and what you want set up. Message us and we will give you a clear number after a short conversation about how your agency runs.',
    ],
  ],

  related: ['hotels', 'consulting-firms', 'it-services-companies', 'real-estate-agencies', 'marketing-agencies', 'insurance-agencies'],

  ctaHeading: 'Start with the offers that might not join.',
  ctaLede:
    'Tell us how your agency runs and we will show you the stuck roles, the at-risk offers and the unbilled joinings it would find, using your own numbers.',
};
