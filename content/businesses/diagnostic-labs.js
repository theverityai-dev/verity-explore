export default {
  schema: 2,
  slug: 'diagnostic-labs',
  status: 'published',
  plural: 'diagnostic labs',
  subject: 'diagnostic lab',
  checked: '15 October 2026',

  seo: {
    title: 'Diagnostic lab management software for Indian labs | Verity',
    description:
      'The 15 problems that cost a diagnostic lab: lost samples, late reports, reagent stock-outs, QC gaps, referral drift and slow credit, and the Verity screens that fix them.',
    keywords: [
      'diagnostic lab management software India',
      'sample tracking and turnaround time',
      'lab reagent and consumables inventory',
      'home sample collection scheduling',
      'lab equipment calibration and QC records',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'logistics', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for diagnostic labs',
    headline: 'The sample reached the lab at 11. Nobody knows where it is at 4, and the report was promised for 5.',
    lede:
      'A diagnostic lab sells a promise: a correct report by a stated time. That promise depends on a chain of small steps, from collection to the analyser to the pathologist’s sign-off, and on reagents, machines and collection staff all being ready at once. Verity tracks the steps, the stock and the people, and tells you where the chain is about to break.',
    oneLine:
      'One system that knows where every sample is, which reports are running late, what reagent is about to run out and which referral source has gone quiet.',
    note: 'Verity tracks the work around the test. It does not produce or interpret results, and it does not replace your lab software.',
    screen: 'owner',
    screenNote: 'centres, tests, collection staff and referral sources',
  },

  today: {
    heading: 'A lab is a promise kept by many hands.',
    paragraphs: [
      'A patient gives a sample at a collection centre or at home. It travels, sometimes in a cold box, sometimes in a bag on a two-wheeler. It is received, checked, run on one of several analysers, reviewed, signed by a pathologist, and sent out. Each step has a person and a time. Any step can go wrong without anyone noticing until the patient rings.',
      'Behind the bench are the things that keep it running: reagent kits with lot numbers and expiry dates, controls that need to be run every day, analysers that need calibration and a service visit, an outsourced list of tests sent to a reference lab, and referring doctors who decide where their patients go. Most of this lives in registers, spreadsheets and the memory of one senior technician.',
      'The money side is no easier. Walk-in patients pay on the spot. Corporate tie-ups, hospitals and collection partners pay weeks later. Reference lab payables build up. Reagent suppliers raise prices and expect payment on time. The owner sees all this only when the month ends.',
    ],
    stack: ['Lab software for results and reports', 'Registers for samples and QC', 'Spreadsheets for stock', 'WhatsApp with collection staff', 'One senior technician’s memory'],
    stackNote: 'Your lab software handles results well. Nothing holds the chain of steps, the stock and the people around it.',
  },

  painsHeading: 'Where a diagnostic lab loses time, money and trust.',
  painsLede:
    'These are the situations lab owners and managers describe. For each: what it looks like, what it costs, and what Verity does about it. Verity tracks the status of samples and reports and never sees or interprets a result.',
  pains: [
    {
      area: 'Samples',
      title: 'Nobody can say where a sample is',
      scene:
        'A sample left a collection centre at 9:30. The runner says it was delivered. The lab says it did not arrive. The patient calls for the third time, and someone searches the fridge.',
      cost:
        'A repeat collection, an unhappy patient and sometimes a doctor who stops sending work. Each hour of searching is a technician not running samples.',
      fix:
        'Every sample is a record with a barcode or number, a collection time, who collected it, who handed it over and who received it. Verity shows samples in transit past their usual time and the last known hand.',
      screen: 'samples',
    },
    {
      area: 'Samples',
      title: 'Samples are rejected or recollected because of avoidable errors',
      scene:
        'A haemolysed tube, too little blood, a wrong label, a missing patient detail. The patient is called back, and the collection staff are blamed.',
      cost:
        'One Indian lab audit found 1.4% of 67,438 routine samples had an error, and about three quarters of the errors were before the sample reached the analyser. Each one is a recollection, a delay and a repeat cost.',
      fix:
        'Rejections are recorded with a reason and the person who collected the sample. Verity shows rejection rate by centre, by collector and by reason, so training goes to the right people.',
      screen: 'samples',
      source: {
        name: 'Goswami et al., Evaluation of errors in a clinical laboratory (CCLM, 2010), via Westgard QC',
        url: 'https://www.westgard.com/blog/error-rates-in-an-indian-clinical-laboratory.html',
      },
    },
    {
      area: 'Reports',
      title: 'Reports promised for the evening come out the next morning',
      scene:
        'A batch of tests waits for the pathologist to sign. A reagent ran out mid-run and a rerun was needed. The patient was told 6 pm. The report goes at 10 am.',
      cost:
        'Doctors and patients compare labs on how fast they get results. A habit of lateness sends the work elsewhere.',
      fix:
        'Each test has a promised time. Verity shows what is due in the next two hours, what is waiting at which step and who holds it, and what is already late with the reason noted.',
      screen: 'owner',
    },
    {
      area: 'Collection',
      title: 'Home collection runs on WhatsApp and luck',
      scene:
        'Eleven home visits are booked for the morning, many fasting samples that must be taken early. Two phlebotomists, one traffic jam. A fasting patient waits until noon.',
      cost:
        'Repeat visits, fasting samples taken late and a patient who books with another lab next time.',
      fix:
        'Each home visit is a scheduled record with an area, time window and collector. Verity shows each collector’s route in order, flags tight gaps and moves a visit to a free collector when someone falls behind.',
      screen: 'collection',
    },
    {
      area: 'Collection',
      title: 'Collection centres and franchise partners are hard to see',
      scene:
        'Six collection points feed the central lab. One sends samples at the end of the day instead of in batches. Another has the highest rejection rate. No one has a clear picture of which centre is worth keeping.',
      cost:
        'Poor sample quality, long delays before analysis and no basis for deciding which partner to support.',
      fix:
        'Every collection point is a location with its own volumes, rejection rate, time to arrive at the lab and dues. They compare side by side.',
      screen: 'collection',
    },
    {
      area: 'Stock',
      title: 'A reagent runs out in the middle of a run',
      scene:
        'The reagent for a test is finished on a busy morning. The next kit is on order. The batch of tests waits, and some are sent to another lab at a loss.',
      cost:
        'Delayed reports, outsourcing at a margin loss and emergency purchases at higher prices.',
      fix:
        'Each reagent has a usage rate drawn from tests run, a reorder level and a lead time. Verity checks the next days’ expected volume against the shelf and drafts an order before the lab runs short.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Kits expire, lots change and nobody notices until QC fails',
      scene:
        'A new lot of reagent is opened without checking that it was verified against the old one. Another kit has two weeks to expiry in the back of the fridge.',
      cost:
        'Expired kits are money in the bin. An unchecked new lot can produce a run of results that need to be repeated.',
      fix:
        'Each kit is received with lot, expiry and storage. Verity lists what expires in 60 days, and a new lot cannot be marked in use until the verification step is ticked by a named person.',
      screen: 'stock',
    },
    {
      area: 'Quality',
      title: 'Calibration, QC runs and service visits are tracked in separate books',
      scene:
        'The analyser’s calibration is due on Thursday. The daily controls are written in a register that has one missing day. The annual service is an email from a vendor three months ago.',
      cost:
        'A missed QC day can force a whole day’s results to be reviewed. An analyser that fails unannounced stops the lab.',
      fix:
        'Each analyser is a record with calibration dates, QC checks assigned to a named person and a service schedule with the vendor. Verity shows what has been done today and what is missing, and keeps the history searchable.',
      screen: 'quality',
    },
    {
      area: 'Quality',
      title: 'Critical-value calls and report corrections are not recorded',
      scene:
        'A critical result is phoned to a doctor. The call is noted on paper by whoever picked up the phone. A report is amended after a transcription fix and the patient already has the first version.',
      cost:
        'If a question arises later, the lab cannot show who was told what and when. This is both a patient-safety and a reputation risk.',
      fix:
        'Each critical call and each amended report is a logged entry with who, when and to whom. Verity shows the open ones and keeps the trail attached to the sample. It records the call and does not judge the value.',
      screen: 'quality',
    },
    {
      area: 'Referrers',
      title: 'Referring doctors drift to another lab and nobody sees it happen',
      scene:
        'A group of physicians sent 90 samples a month last year. This quarter it is 55. There was a delayed report in June and a missed critical call in August. Nobody connected the two.',
      cost:
        'Referral volume is the lab’s lifeblood. A quiet drop can mean a lakh of rupees a month going elsewhere.',
      fix:
        'Each sample carries its referrer. Verity shows volume by referring doctor and clinic over time, with their late reports and complaints beside it, and creates a visit or call task for the owner or the relationship manager.',
      screen: 'referrals',
    },
    {
      area: 'Referrers',
      title: 'Samples sent to a reference lab are lost in a shared spreadsheet',
      scene:
        'Special tests are outsourced. Each batch is listed in a sheet, sent by courier and the report returns days later. Which were sent, which are back, which are overdue, and what is owed to the reference lab?',
      cost:
        'A patient waiting on an outsourced test and a payable that is paid twice or missed.',
      fix:
        'Each outsourced test is a record with the reference lab, date sent, promised date, report received and the cost. Verity lists overdue send-outs and the payable per lab.',
      screen: 'dues',
    },
    {
      area: 'Money',
      title: 'Corporate, hospital and partner payments arrive late',
      scene:
        'A hospital group sends 400 tests a month on credit. A corporate health-check contract invoices at month end. A collection partner’s share depends on who sent what. Chasing is done by whoever remembers.',
      cost:
        'Cash tied up for 60 days or more, while reagent suppliers expect their payment in 30.',
      fix:
        'Each account has a credit period and a running balance. Verity shows ageing by account, lists the invoices past terms, and tasks the person who chases. Your accountant issues the invoices and raises any tax invoices.',
      screen: 'dues',
    },
    {
      area: 'People',
      title: 'Technicians, collectors and the pathologist are unevenly loaded',
      scene:
        'One technician is covering the afternoon alone, and the evening pathologist has 80 reports waiting. Collectors in one zone are idle while another is overbooked.',
      cost:
        'Overtime, mistakes made by tired people and delayed reports.',
      fix:
        'Shifts, leave and tasks are recorded by role. Verity shows load by bench, collector and sign-off queue and flags a pile-up before it makes reports late.',
      screen: 'samples',
    },
    {
      area: 'Records',
      title: 'Audit evidence and documents are assembled in a rush',
      scene:
        'An accreditation assessor or a hospital client wants SOPs, training records, QC logs and complaint records. Each is in a different folder, and some are out of date.',
      cost:
        'Weeks of preparation, missing evidence and findings that could have been avoided.',
      fix:
        'SOPs, training sign-offs, QC checks and complaints are records with owners and review dates. Verity lists documents due for review and shows evidence for any date on request.',
      screen: 'quality',
    },
    {
      area: 'Owner',
      title: 'Several centres, one owner and one WhatsApp group',
      scene:
        'The owner sees volumes from each centre only by message at night. Patient reports are forwarded in chat groups. Who saw what, and who has a copy, is not known.',
      cost:
        'Problems at one centre surface late, and health data sits in many phones.',
      fix:
        'Centres are locations in one system with comparable volumes, rejections, turnaround and dues. Access to patient records follows role, and each view is logged.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers behind these problems.',
  factsLede: 'From published sources, with the source named under each figure. Your lab’s numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '1.4%',
      text: 'of 67,438 routine blood samples in one Indian clinical laboratory had an error over a year, and 736 of the 954 errors, about three in four, happened before the sample was analysed. Haemolysed samples were the biggest cause.',
      source: { name: 'Goswami et al., CCLM, via Westgard QC', year: '2010', url: 'https://www.westgard.com/blog/error-rates-in-an-indian-clinical-laboratory.html' },
    },
    {
      figure: '20 to 25%',
      text: 'is the estimated share of India’s diagnostics market held by organised chains, with the rest in standalone labs, according to a credit rating agency’s November 2025 note. Independent labs compete with chains on speed and trust.',
      source: { name: 'CareEdge Ratings, Indian Diagnostics Industry opinion piece', year: '2025', url: 'https://www.careratings.com/uploads/newsfiles/1763463740_Indian%20Diagnostics%20Industry_%20Opinion%20Piece.pdf' },
    },
    {
      figure: 'Less automation',
      text: 'was reported by Indian labs than by other Asia-Pacific labs in a survey of lab quality practice. Turnaround time was monitored more often in India, but fewer labs had a laboratory information system.',
      source: { name: 'Macquarie University, Diagnostic laboratories in India: investigating quality characteristics', year: '2017', url: 'https://researchers.mq.edu.au/en/publications/diagnostic-laboratories-in-india-investigating-quality-characteri/' },
    },
    {
      figure: '11 states',
      text: 'and all union territories except Delhi had adopted the Clinical Establishments Act as of December 2018. It covers diagnostic labs, and the number may have grown since.',
      source: { name: 'Medical Dialogues, citing the Government of India', year: '2018', url: 'https://medicaldialogues.in/11-states-all-uts-except-delhi-have-adopted-clinical-establishment-act-government' },
    },
  ],
  factsNote:
    'The error audit is from 2008 to 2009 in a single lab and its authors note limits in how analytical errors were measured. The CareEdge share is quoted from a search summary of the note and not from the full text. The survey is from 2017. They show the scale of the issue, not what your lab will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each for one job. Names and terms are set in your lab’s own words.',
  screens: [
    {
      id: 'owner',
      title: 'Lab / Today',
      meta: 'All centres',
      heading: 'The owner’s morning view',
      caption:
        'Samples received, reports due and late, reagents running low and money outstanding, on one screen, with the items needing a decision listed below. This replaces the nightly volume message.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Samples today', value: '612', note: 'across 6 centres' },
            { label: 'Reports late', value: '9', note: 'past promised time' },
            { label: 'Rejection rate', value: '1.8%', note: 'this week' },
            { label: 'Credit overdue', value: '₹6.4 lakh', note: '5 accounts' },
          ],
        },
        { type: 'title', text: 'Reports on time by centre, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Central lab', value: 96, display: '96%' },
            { label: 'Kothrud', value: 91, display: '91%' },
            { label: 'Hadapsar', value: 84, display: '84%' },
            { label: 'Wakad', value: 71, display: '71%', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Thyroid reagent covers 2 days at current volume. Supplier needs 3.', action: 'Order now' },
        {
          type: 'list',
          items: [
            { name: 'Wakad reports late 4 days running', meta: 'Samples reach central lab after 3 pm', tag: ['Open', 'flag', 'Assigned', 'ok'] },
            { name: 'Analyser 2 calibration', meta: 'Due Thursday', tag: ['Due', 'late', 'Done', 'ok']  },
          ],
        },
      ],
    },
    {
      id: 'samples',
      title: 'Sample tracker',
      meta: 'Live',
      heading: 'Every sample, from collection to sign-off',
      caption:
        'Where each sample is, who holds it, how long it has been there and what is promised. Rejections and recollections are recorded with a reason. Verity shows status only, not result values.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'In transit',
              cards: [
                { title: 'S-48211, Hadapsar', meta: 'Left 9:30, collector Pramod', tag: ['2 hrs', 'late', 'Received', 'ok'] },
                { title: 'S-48230, Wakad', meta: 'Left 10:05, collector Sneha', tag: ['In transit', 'info'] },
              ],
            },
            {
              name: 'On the bench',
              cards: [
                { title: 'S-48102, Central', meta: 'Biochemistry, analyser 2', tag: ['Due 4 pm', 'info'] },
                { title: 'S-48117, Central', meta: 'Haematology, rerun', tag: ['Rerun', 'flag', 'Done', 'ok'] },
              ],
            },
            {
              name: 'Awaiting sign-off',
              cards: [
                { title: '14 reports', meta: 'Dr Kulkarni queue', tag: ['Due 5 pm', 'flag'] },
              ],
            },
          ],
        },
        { type: 'alert', text: 'Rejected today: 6 samples. 4 haemolysed, 1 insufficient, 1 mislabelled.', action: 'View by collector' },
      ],
    },
    {
      id: 'collection',
      title: 'Collection and centres',
      meta: 'Home visits and centres',
      heading: 'Home collection routes and centre performance',
      caption:
        'Each collector’s morning in order, with fasting visits first, and each collection centre’s volume, rejections and delay to reach the lab.',
      blocks: [
        {
          type: 'table',
          cols: ['Time', 'Visit', 'Area', 'Collector', 'Status'],
          rows: [
            ['6:30', 'Fasting, 3 tests', 'Kothrud', 'Sneha', ['Booked', 'info']],
            ['7:15', 'Fasting, 1 test', 'Karve Road', 'Sneha', ['Tight gap', 'flag', 'Moved 7:30', 'ok']],
            ['7:00', 'Fasting, 6 tests', 'Baner', 'Pramod', ['Booked', 'info']],
            ['9:00', 'Full body check', 'Aundh', 'Pramod', ['Running late', 'late', 'Reassigned', 'ok']],
          ],
        },
        { type: 'title', text: 'Rejection rate by centre, last 30 days' },
        {
          type: 'bars',
          items: [
            { label: 'Kothrud', value: 12, display: '1.2%' },
            { label: 'Hadapsar', value: 19, display: '1.9%' },
            { label: 'Wakad', value: 41, display: '4.1%', tone: 'muted' },
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Reagents and consumables',
      meta: 'Stock by lot',
      heading: 'What is on the shelf, by lot, against the week ahead',
      caption:
        'Reagent kits and consumables with lot, expiry and usage, checked against expected test volume. A new lot waits for the verification tick before it is marked in use.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Lot', 'Days of cover', 'Expires', 'Status'],
          rows: [
            ['TSH reagent kit', 'L-2207', '2', 'Jan 2027', ['Short', 'late', 'Ordered', 'ok']],
            ['Glucose reagent', 'L-1893', '9', 'Mar 2027', ['OK', 'ok']],
            ['CBC diluent 20 L', 'L-0451', '4', 'Dec 2026', ['Reorder', 'flag']],
            ['Vacutainers, EDTA', 'L-7720', '12', 'Aug 2027', ['OK', 'ok']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'New lot L-2311 verified against L-2207', meta: 'Assigned to Mrs Joshi', done: false },
            { text: 'Fridge 2 temperature log', meta: 'Done 8 am', done: true },
          ],
        },
      ],
    },
    {
      id: 'referrals',
      title: 'Referrers',
      meta: 'Doctors and clinics',
      heading: 'Who sends you work, and who has stopped',
      caption:
        'Samples by referring doctor and clinic over time, with late reports and complaints beside them. A drop becomes a task for the owner or the relationship manager.',
      blocks: [
        {
          type: 'table',
          cols: ['Referrer', 'Samples / month', 'Last quarter', 'Late reports', 'Status'],
          rows: [
            ['Dr Phadke, physician group', '55', '90', '6', ['Down 39%', 'late', 'Visit booked', 'ok']],
            ['Sunrise Diabetes Clinic', '120', '118', '1', ['Steady', 'ok']],
            ['Dr Naik, paediatrics', '48', '36', '2', ['Growing', 'ok']],
            ['City Hospital, OPD', '310', '340', '4', ['Down 9%', 'flag']],
          ],
        },
        { type: 'alert', text: 'Dr Phadke’s group has had 3 critical-value call delays since August.', action: 'Assign a visit' },
      ],
    },
    {
      id: 'dues',
      title: 'Credit and send-outs',
      meta: 'Money',
      heading: 'Who owes the lab, and who the lab owes',
      caption:
        'Corporate, hospital and partner balances by age, and tests sent to reference labs with the dates and amounts owed. Your accountant raises invoices and pays suppliers.',
      blocks: [
        {
          type: 'table',
          cols: ['Account', 'Terms', 'Balance', 'Oldest', 'Status'],
          rows: [
            ['City Hospital, OPD', '45 days', '₹3.2 lakh', '62 days', ['Overdue', 'late', 'Promised 20 Oct', 'info']],
            ['TechWorks health check', '30 days', '₹1.8 lakh', '41 days', ['Overdue', 'flag']],
            ['Wakad collection partner', 'Monthly', '₹0.9 lakh', '18 days', ['On time', 'ok']],
            ['Reference lab, special tests', '30 days', 'Owed ₹1.1 lakh', '27 days', ['Pay by 30 Oct', 'info']],
          ],
        },
        { type: 'alert', text: '3 outsourced tests are past their promised return date.', action: 'Chase lab' },
      ],
    },
    {
      id: 'quality',
      title: 'Quality records',
      meta: 'Today',
      heading: 'Calibration, QC, critical calls and documents',
      caption:
        'The daily checks that keep results trustworthy, each assigned to a named person, plus critical-value calls and document reviews with a trail attached.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Analyser 1, daily controls', meta: 'Mrs Joshi, done 7:40', done: true },
            { text: 'Analyser 2, daily controls', meta: 'Imran, not yet done', done: false },
            { text: 'Analyser 2, calibration', meta: 'Due Thursday', done: false },
            { text: 'SOP: sample rejection, review', meta: 'Overdue 12 days', done: false },
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Critical call, sample S-48090', meta: 'Told to Dr Phadke’s clinic 10:12, noted by Anil', tag: ['Logged', 'ok'] },
            { name: 'Amended report S-47990', meta: 'Transcription fix, patient informed', tag: ['Open', 'flag', 'Closed', 'ok'] },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Tuesday, before and after.',
  dayLede: 'The tests are the same. What changes is that each step leaves a record, and the record warns you early.',
  day: [
    {
      time: '7:30',
      before: 'Collectors confirm fasting visits in a group chat. One visit is missed.',
      after: 'Each collector’s route is on the screen with fasting visits first and gaps flagged.',
    },
    {
      time: '11:00',
      before: 'A patient calls about a sample that left a centre at 9:30. Nobody knows where it is.',
      after: 'The tracker shows it was handed to the runner at 9:40 and received at 10:50.',
    },
    {
      time: '1:00',
      before: 'A reagent runs out mid-run and a batch waits.',
      after: 'The shortage was flagged two days earlier and the kit arrived this morning.',
    },
    {
      time: '4:00',
      before: 'You find out at 5 pm that 14 reports are waiting for sign-off.',
      after: 'The queue shows 14 due by 5. The pathologist is alerted at 3:30.',
    },
    {
      time: '6:30',
      before: 'A physician’s office says they are moving some work elsewhere. This is the first you hear of it.',
      after: 'The referrer’s fall in volume appeared on the screen in September, and you visited.',
    },
    {
      time: 'Month end',
      before: 'You chase credit accounts by memory and prepare audit evidence in a scramble.',
      after: 'Ageing is a list with owners, and the QC and document records are ready to show.',
    },
  ],

  approach: {
    heading: 'We set it up with you, over four weeks.',
    lede:
      'No login and a manual left on the bench. We learn how your lab runs, build Verity around it, bring your data across and stay on afterwards.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend time at the central lab and at a collection centre. Follow a sample from collection to the signed report, see how reagent orders, QC and credit are managed today and where the registers stop agreeing.',
        you: 'A few hours of yours and the lab manager’s. Access to the sample register, stock sheet, QC logs and the credit list.',
        get: 'A written map of your lab: centres, collectors, tests with promised times, reagents, referrers and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your tests and promised turnaround times, sample steps, rejection reasons, reagents with reorder levels, analysers with calibration and QC schedules, referrers, credit accounts and your centres, then build the screens in your lab’s terms.',
        you: 'Review the setup with your lab manager and pathologist. Correct anything that does not match how the bench runs.',
        get: 'A working Verity with your real tests, steps and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in referrers, credit accounts, reagent stock with lots, analyser records and open send-outs from your sheets and registers. We agree how sample and report status reach Verity from your lab software. Train collectors, technicians and the desk at their own stations.',
        you: 'Your referrer and account lists, stock sheet and any QC history. One hour per role.',
        get: 'Your lab’s working data inside Verity and a team that has used it on a live day.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks with you, tune the turnaround alerts, reorder levels and referrer watch, and handle changes when you add a centre, an analyser or a test.',
        you: 'A short monthly review of the numbers.',
        get: 'A system that keeps pace with the lab, with someone responsible for it.',
      },
    ],
    bring: [
      'Your test list with promised turnaround times and prices',
      'Collection centres, partners and collectors',
      'Reagent list with suppliers, lead times and current stock',
      'Analyser list with service and calibration dates',
      'Corporate and hospital accounts with credit terms',
    ],
    time: 'About 10 to 12 hours of your own time across the four weeks, mostly in week 1. Your lab manager needs a few more.',
    after: 'You do not need to hire anyone to run Verity. Sample steps, QC checks and stock use are recorded as part of the work already happening.',
  },

  ai: {
    heading: 'Ask your lab a question. Get an answer from your own records.',
    lede:
      'Verity AI reads your sample status, stock, referrer and account records and answers in plain words. It respects who may see what and can create tasks. It never sees or interprets result values.',
    examples: [
      {
        q: 'Which centre has the most late reports this week and why?',
        a: 'Wakad, with 29 percent late. Samples reach the central lab after 3 pm on four days of five.',
        rows: [['Wakad', '29% late'], ['Hadapsar', '16% late'], ['Kothrud', '9% late']],
        action: 'Create a task to change the pickup time',
      },
      {
        q: 'Which reagents will run out before the next delivery?',
        a: 'TSH and CBC diluent. TSH has 2 days of cover and the supplier needs 3.',
        rows: [['TSH kit', '2 days'], ['CBC diluent', '4 days']],
        action: 'Raise the order today',
      },
      {
        q: 'Which referring doctors have sent less than last quarter?',
        a: '11 referrers are down by more than 20 percent. Dr Phadke’s group is down 39 percent and had 6 late reports.',
        action: 'Assign visits to the relationship manager',
      },
    ],
  },

  automationHeading: 'The chasing nobody has time to do.',
  automationLede: 'Set once, run from your records. Staff still call and message. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A sample is in transit longer than its usual time',
      then: ['Flagged with the last known hand', 'Task to the centre lead to trace it', 'Marked found or recollect'],
    },
    {
      when: 'A report is two hours from its promised time and not signed',
      then: ['Flagged on the sign-off queue', 'Alert to the pathologist on duty', 'Reason recorded if it goes late'],
    },
    {
      when: 'A sample is rejected',
      then: ['Reason and collector recorded', 'Recollection task for the desk', 'Added to the centre’s rejection trend'],
    },
    {
      when: 'A reagent falls below its days of cover',
      then: ['Checked against expected volume', 'Order drafted to the supplier', 'Stock updated when delivery and lot are recorded'],
    },
    {
      when: 'A daily QC check is not done by 10 am',
      then: ['Flagged to the named person', 'Reminder to the lab manager', 'Missed check recorded with the reason'],
    },
    {
      when: 'A referrer’s volume falls over a month',
      then: ['Shown with late reports and complaints', 'Task to the relationship manager', 'Visit or call outcome recorded'],
    },
  ],

  rules: {
    heading: 'The rules a diagnostic lab works under.',
    lede: 'Verity does not give legal or clinical advice and files nothing for you. It keeps the records these rules depend on in order, so you are not assembling them in a hurry before an inspection.',
    items: [
      {
        name: 'Clinical Establishments Act and state registration',
        what: 'The Clinical Establishments (Registration and Regulation) Act, 2010 covers laboratories offering pathological and other diagnostic services, but it applies only where a state has adopted it, and states have different rules. Minimum standards for diagnostic labs exist under it.',
        how: 'Registration details, staff qualifications and facility records are held in one place with renewal reminders.',
        source: { name: 'Clinical Establishments Act, 2010 (PRS India)', url: 'https://PRSINDIA.org/files/bills_acts/acts_parliament/2010/the-clinical-establishments-(registration-and-regulation)-act,-2010.pdf' },
      },
      {
        name: 'NABL accreditation under ISO 15189',
        what: 'Accreditation by NABL against ISO 15189 is generally voluntary. Labs that seek it must keep quality records, run internal audits and join proficiency testing. The standard has been moving to a 2022 version.',
        how: 'QC checks, calibration, training sign-offs, complaints and document reviews are records with owners and dates.',
      },
      {
        name: 'Bio-medical waste',
        what: 'Under the Bio-Medical Waste Management Rules, 2016, a healthcare facility that produces bio-medical waste, including a lab, generally needs authorisation from the State Pollution Control Board and must follow prescribed handling and records.',
        how: 'A daily waste checklist with a named person and a searchable history.',
        source: { name: 'Central Pollution Control Board, bio-medical waste', url: 'https://cpcb.nic.in/bio-medical/' },
      },
      {
        name: 'Patient data protection',
        what: 'India’s Digital Personal Data Protection Rules were notified on 13 November 2025. The main duties on notice and consent are expected to start on 13 May 2027. Test reports are sensitive personal data.',
        how: 'Access to patient records follows role and each view is logged, so reports are not passed around in chat groups.',
        source: { name: 'AZB Partners on the DPDP framework', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your accreditation body, state authority or adviser.',
  },

  rolesHeading: 'Each person opens the lab through their own view.',
  rolesLede: 'A collector does not need the credit list. A referring doctor’s relationship manager does not need the reagent stock. Access follows the job.',
  roles: [
    { role: 'Owner', question: 'Is the lab fast, trusted and getting paid?', sees: 'Reports on time, rejection rate, referrer trends, reagent cover, credit ageing and every centre side by side.' },
    { role: 'Pathologist', question: 'What is waiting for me and what is critical?', sees: 'Sign-off queue by promised time, critical calls open, amended reports and the QC state of the bench.' },
    { role: 'Lab manager', question: 'Is the bench ready for today?', sees: 'Reagent cover, QC and calibration due, staff load, rejections, send-outs and overdue reports.' },
    { role: 'Collector or centre lead', question: 'What is my route and what is rejected?', sees: 'Their visits in order, sample hand-offs, rejections with reasons and their centre’s numbers.' },
    { role: 'Accountant', question: 'Who owes us and whom do we owe?', sees: 'Credit ageing, partner shares, reference lab payables, supplier dues and takings by mode.' },
  ],

  alongside: {
    heading: 'What changes and what stays.',
    keep: [
      'Your lab information software for orders, results and reports. We agree how sample and report status reach Verity.',
      'How patients book home visits today, by phone, an app or a page. Verity schedules the visit once it is booked.',
      'WhatsApp with collectors. Staff send; Verity says who and when.',
      'Your accountant, who still prepares invoices and returns.',
    ],
    not: [
      'Produce, store or interpret test results.',
      'Take patient bookings online.',
      'Send messages to patients on its own.',
      'Replace your lab software or file returns.',
    ],
    migration:
      'We bring referrers, credit accounts, reagent stock, analyser records and open send-outs across from your registers and sheets in stages, so the lab keeps running through the change.',
  },

  faqHeading: 'Questions lab owners ask.',
  faqs: [
    [
      'Does Verity see patient results?',
      'No. Verity tracks the status of samples and reports, the stock, the people and the money around the test. Result values stay in your lab software.',
    ],
    [
      'We already have a lab information system. Do we replace it?',
      'No. Keep it for orders, results and reports. During setup we agree how sample status, promised times and the referrer reach Verity from it.',
    ],
    [
      'Does Verity handle home collection bookings from patients?',
      'It does not take bookings from patients. Once a visit is booked in your usual way, it becomes a scheduled record with a collector and time window that you can plan and reassign.',
    ],
    [
      'Can it help with NABL preparation?',
      'It keeps QC checks, calibration, training sign-offs, complaints and document reviews as dated records with owners, so evidence is easy to show. It does not decide whether you meet the standard.',
    ],
    [
      'Can it track reagent lots and expiry?',
      'Yes. Each kit is received with lot, expiry and storage, and usage is drawn from the tests run. A new lot waits for the verification tick before it is marked in use.',
    ],
    [
      'I run one lab and two collection points. Is this too much?',
      'A small lab has the same lost samples and stock-outs with less spare time to notice them. We set up only what you need in the same four weeks.',
    ],
    [
      'Can I see all my centres together?',
      'Yes. Each centre is a location in one system. Volumes, rejections, time to reach the lab and dues compare side by side.',
    ],
    [
      'Who can see patient data?',
      'Only the people you allow. Access is by role, so collectors, technicians, pathologists, the desk and your accountant each see what they need. Every view and change is logged with the person and time.',
    ],
    [
      'What does it cost?',
      'It depends on the number of centres, staff and what you want set up. Message us and after a short conversation about how your lab runs we will give you a clear number.',
    ],
  ],

  related: ['hospitals', 'clinics', 'pharmacies', 'medical-distributors', 'dental-clinics', 'veterinary-clinics'],

  ctaHeading: 'Start with the reports that run late.',
  ctaLede:
    'Tell us how your lab runs and we will show you the slow steps, thin reagents and quiet referrers it would find, using your own numbers.',
};
