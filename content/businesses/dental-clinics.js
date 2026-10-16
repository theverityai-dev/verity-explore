export default {
  schema: 2,
  slug: 'dental-clinics',
  status: 'published',
  plural: 'dental clinics',
  subject: 'dental clinic',
  checked: '15 October 2026',

  seo: {
    title: 'Dental clinic management software for Indian clinics | Verity',
    description:
      'The 14 problems that drain a dental clinic: dropped plans, late lab cases, missed recalls, idle chairs, consumables and records, and the Verity screens that fix them.',
    keywords: [
      'dental clinic management software India',
      'dental treatment plan follow-up tracking',
      'dental lab case tracking',
      'dental recall and no-show management',
      'dental consumables inventory tracking',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for dental clinics',
    headline: 'The patient accepted a ₹48,000 plan in March. After visit two, nobody heard from them again.',
    lede:
      'A dental clinic earns from plans that run over several visits, and from lab work that has to come back on time. Both slip through the gaps between the chairside chart, the front desk register and the lab’s WhatsApp. Verity keeps them in one place and shows you what is stuck today.',
    oneLine:
      'One system that knows every open treatment plan, every lab case in transit, every chair hour and every box of consumables, and tells you what needs attention.',
    note: 'Verity records and organises the practice. Your dentists decide every diagnosis and treatment. It gives no clinical advice.',
    screen: 'owner',
    screenNote: 'doctors, chairs, treatments and lab partners',
  },

  today: {
    heading: 'A dental clinic is a chain of small steps that nobody sees end to end.',
    paragraphs: [
      'The first visit goes well. The plan is explained, the patient agrees, a root canal is started, an impression is taken, and a crown is ordered from the lab. Then comes the waiting: for the patient to return, for the lab to deliver, for the next slot to open. Each wait is a place where the plan can stall.',
      'The facts sit in different places. The chart is on paper or in a basic software screen. Fees paid and fees due are in the accounts register. Lab cases are in a notebook and on WhatsApp with the technician. Consumables are counted when the assistant says something has run out. The clinic owner, who is usually also the main dentist, holds the whole picture in their head between patients.',
      'Nothing here is a crisis. The cost is slower: patients who half finish treatment, crowns that arrive after the patient has stopped caring, chairs that sit idle after a late cancellation, and material that expires in the cupboard.',
    ],
    stack: ['Paper charts or basic dental software', 'Fee register or accounts sheet', 'Lab cases in a notebook', 'WhatsApp with the lab and patients', 'Consumables counted by eye'],
    stackNote: 'Each one does its own small job. None of them can tell you which patient needs a call today.',
  },

  painsHeading: 'Where a dental clinic loses money and patients.',
  painsLede:
    'These are the situations dentists and clinic managers describe. For each one: what it looks like, what it costs, and what Verity does about it. Verity records what your team decides; it never decides treatment.',
  pains: [
    {
      area: 'Treatment plans',
      title: 'Accepted plans stall after the first visits',
      scene:
        'A patient agrees to a root canal, a crown and a scaling. The canal is opened, a temporary filling is placed, and the patient says they will call for the next slot. Three weeks later the temporary is still there and nobody has called.',
      cost:
        'Example arithmetic: ten stalled plans a month with ₹12,000 of work still pending each is ₹1.2 lakh of accepted treatment that never completes. There is also a clinical risk to the patient when a temporary stays too long.',
      fix:
        'Each plan is a list of steps with a state and a patient. Verity shows plans with a step started but not finished, how long they have waited, and assigns a follow-up task to the front desk. The outcome of each call is recorded.',
      screen: 'plans',
    },
    {
      area: 'Treatment plans',
      title: 'Recall visits for scaling and check-ups are never made',
      scene:
        'Patients are told to come back in six months. The date is written on a card or not at all. Most come only when something hurts, and the regulars who did come last year are not reminded.',
      cost:
        'A recall base is the steadiest income a clinic has. Without a list, it depends on patients remembering and on the assistant noticing a card.',
      fix:
        'The recall interval is recorded with the visit. Verity lists patients due this month, grouped by type of recall, and creates a call task per patient. Staff make the call; the result is recorded as booked, declined or unreachable.',
      screen: 'plans',
    },
    {
      area: 'Chairs and time',
      title: 'Empty chairs after last-minute cancellations',
      scene:
        'The 11 am patient cancels at 10:40. The 4 pm patient does not turn up. The same few patients do it again and again, but each time it looks like a one-off.',
      cost:
        'A chair, an assistant and the dentist all stand idle. Studies of missed dental appointments put the rate anywhere from under one in ten to well over a third, depending on the clinic and how it is measured.',
      fix:
        'Cancellations and no-shows are recorded against the patient, so repeat cases are visible. Verity lists the cancelled slots with the patients waiting for an earlier date, so the desk can fill them. A rule can flag anyone with two earlier no-shows for a confirmation call.',
      screen: 'owner',
      source: {
        name: 'Missed appointments in a pediatric dental clinic, Navi Mumbai (PMC, 2018)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6102432',
      },
    },
    {
      area: 'Chairs and time',
      title: 'Doctors and chairs are unevenly used, and nobody has the numbers',
      scene:
        'The orthodontist is booked a fortnight ahead on Saturdays. The visiting endodontist has two patients on Tuesday. Chair 3 is used half the day while chair 1 has a queue.',
      cost:
        'A staffed hour that goes unused is gone. Without numbers, the clinic cannot tell whether to add a visiting day, move a shift, or add a chair.',
      fix:
        'Procedures are recorded against the doctor, chair and time. Utilisation by chair, doctor and day is a live view, with the average length of each procedure type compared to the slot booked for it.',
      screen: 'owner',
    },
    {
      area: 'Lab work',
      title: 'Crowns and dentures come back late, wrong or not at all',
      scene:
        'A crown was due on Thursday. On Thursday the patient arrives and the box is not there. The technician says it will go out tomorrow. Last month a shade came back a tone off and the case had to be redone.',
      cost:
        'A wasted chair slot, an annoyed patient, and a remake that the clinic usually pays for. Late cases also push every following visit back.',
      fix:
        'Every lab order is a record: patient, tooth, shade, lab, date sent, date due, date received. Verity shows what is overdue, flags cases due within two days with no dispatch, and keeps a count of remakes per lab.',
      screen: 'lab',
    },
    {
      area: 'Lab work',
      title: 'Which lab is actually good is a matter of opinion',
      scene:
        'Three labs send work to the clinic. One is cheaper but slow, one is fast but has more remakes. The owner has a feeling about each but no record.',
      cost:
        'You may be sending your most demanding cases to the wrong lab, or paying a premium for a speed you do not actually receive.',
      fix:
        'Because each case records the lab, the due date, the date received and whether it was remade, Verity gives each lab a simple scorecard of average turnaround, late cases and remakes. Pricing sits beside it.',
      screen: 'lab',
    },
    {
      area: 'Materials',
      title: 'Consumables run out in the middle of a procedure',
      scene:
        'The assistant opens the cupboard for the composite shade the patient needs, and it is empty. The anaesthetic cartridge box has one left. A rushed order goes out by phone.',
      cost:
        'A procedure postponed or done with a second-best material. Rush orders often cost more than a planned one.',
      fix:
        'Each material has a reorder level and a usual supplier. Usage is recorded with procedures, so Verity warns before the cupboard is empty and drafts an order to the supplier for you to approve.',
      screen: 'stock',
    },
    {
      area: 'Materials',
      title: 'Materials expire unused, and prices creep up unnoticed',
      scene:
        'A box of impression material bought on a scheme sits at the back for a year. A supplier raises the price of bonding agent twice and the invoice is simply paid.',
      cost:
        'Stock that expires is paid for and thrown away. Small price rises, unwatched, add to every procedure’s cost.',
      fix:
        'Batches and expiry dates are recorded at receipt. Verity lists what expires in 90 days, and shows the last prices paid per item and supplier, so a creeping rise is visible when the invoice is entered.',
      screen: 'stock',
    },
    {
      area: 'Compliance',
      title: 'Sterilisation, waste and X-ray records live in separate notebooks',
      scene:
        'The autoclave cycle log, the bio-medical waste register and the X-ray exposure log are three different books, filled in at different times by different people. When an inspector or an auditor asks, someone goes looking.',
      cost:
        'A gap in these records is a compliance finding, and in the worst case a safety question that you cannot answer from paper.',
      fix:
        'Each register is a daily checklist assigned to a named person. Verity shows what has been completed and what is missing, and keeps the history searchable and printable.',
      screen: 'compliance',
    },
    {
      area: 'Records',
      title: 'Consent, images and notes are scattered, and a patient asks for a copy',
      scene:
        'Written consent for an extraction is in a paper folder. The OPG is on the X-ray machine’s computer. The treatment notes are in the chart. A patient’s lawyer asks for a complete copy.',
      cost:
        'Finding and assembling the record takes staff time, and an incomplete set can be a problem in a dispute. Dentists are generally expected to keep records for a minimum period and produce them on a valid request.',
      fix:
        'The consent, notes, images and payment history sit on one patient record with permissions. A complete set can be assembled from one place, and every view and change is logged.',
      screen: 'patient',
      source: {
        name: 'Dentists Code of Ethics Regulations, 2014 (state dental council copy)',
        url: 'https://tndentalcouncil.com/source/dentists_code_of_ethics_regulations_2014.pdf',
      },
    },
    {
      area: 'Money',
      title: 'Part payments on long treatments get lost',
      scene:
        'A ₹36,000 implant plan is paid in three parts. The patient paid the first, the second was paid in cash on a day the receipt book was with the owner, and the third is not recorded. The fee register says one thing, the chair side says another.',
      cost:
        'Unrecorded payments become disputes. Unrecorded dues become write-offs, and patients with a balance can be hard to chase months later.',
      fix:
        'Each plan has an agreed amount and every payment against it. Verity shows balance by patient, flags plans where treatment has gone ahead of payment, and lists dues ageing past 30 days.',
      screen: 'dues',
    },
    {
      area: 'Money',
      title: 'Insurance and corporate tie-up claims wait in a file',
      scene:
        'A company’s employee dental scheme and a handful of insured patients are billed separately. Claim forms are sent, the clinic waits, and nobody has a list of what is pending with whom.',
      cost:
        'Money that is owed but not chased. Claims not filed in time may not be paid at all.',
      fix:
        'A claim is a record with the patient, insurer or company, amount, date sent and state. Verity lists those unpaid past their usual period and tasks the person who sends them.',
      screen: 'dues',
    },
    {
      area: 'People',
      title: 'Visiting specialists and associates are paid by hand-worked shares',
      scene:
        'An orthodontist takes 40 percent of fees on their patients, an associate dentist takes a slab, and an assistant has a monthly bonus tied to procedures. Month end means someone with a calculator and a stack of receipts.',
      cost:
        'Hours of owner time, errors that cost either side, and arguments that sour a relationship you want to keep.',
      fix:
        'Because procedures and payments are recorded against the treating doctor, Verity builds a payout statement from your own agreed shares. The doctor sees the same breakdown. Your accountant handles the actual payment.',
      screen: 'dues',
    },
    {
      area: 'Owner',
      title: 'The equipment fails when it is needed, and the second clinic runs blind',
      scene:
        'The compressor stops during a morning list. The autoclave’s annual service was due in July. The second branch is run from a WhatsApp group and a nightly figure from the manager.',
      cost:
        'A morning of cancelled patients, or an expensive emergency call. For two branches, no fair comparison and a slow warning when something is off.',
      fix:
        'Equipment is a record with a service schedule, a vendor and a history. Verity tasks the service before it is due. Branches are locations in one system, with a patient seen at both shown as one person.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers behind the pressure.',
  factsLede: 'From published sources, with the source named under each figure. Your own clinic’s numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '1 in 3,846',
      text: 'is the reported ratio of dentists to people in India, against a WHO guide of 1 in 7,500 for developing countries. More dentists nearby means patients have more choices, and keeping the ones you treat matters more.',
      source: { name: 'Observer Research Foundation, Dentistry in India', year: '2025', url: 'https://www.orfonline.org/research/dentistry-in-india-oversupply-and-gender-bias-shaping-oral-health-workforce' },
    },
    {
      figure: '376,721',
      text: 'dentists are registered with the Dental Council of India, with 329 dental colleges producing 27,926 BDS seats a year. The pool of competing clinics keeps growing.',
      source: { name: 'Observer Research Foundation, Dentistry in India', year: '2025', url: 'https://www.orfonline.org/research/dentistry-in-india-oversupply-and-gender-bias-shaping-oral-health-workforce' },
    },
    {
      figure: '3 years',
      text: 'is the minimum a dentist should keep outpatient records from the start of treatment, and a valid request for records should be answered within 72 hours, under the Dentists Code of Ethics Regulations, 2014.',
      source: { name: 'Dentists Code of Ethics Regulations, 2014 (state dental council copy)', year: '2014', url: 'https://tndentalcouncil.com/source/dentists_code_of_ethics_regulations_2014.pdf' },
    },
    {
      figure: '52%',
      text: 'of parents surveyed at one paediatric dental clinic in Navi Mumbai said they had missed an appointment. This is self-reported and from one clinic, so it shows the pattern and not a national rate.',
      source: { name: 'Pediatric Dental Appointments No-show: Rates and Reasons (PMC)', year: '2018', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6102432' },
    },
  ],
  factsNote:
    'The first two figures come from one policy think tank’s review and its own sums do not match exactly. The records rule is from the 2014 regulations and a newer council framework may follow. The no-show figure is from a single paediatric clinic. They show the scale of the issue, not what your clinic will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each for one job. Names, columns and terms are set in your clinic’s own words.',
  screens: [
    {
      id: 'owner',
      title: 'Clinic / Today',
      meta: 'Branch: Koramangala',
      heading: 'The owner’s morning view',
      caption:
        'Chair use, cancelled slots, stalled plans and lab cases that are late, on one screen. This replaces the nightly figure on WhatsApp and the mental checklist between patients.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Chair use today', value: '68%', note: 'of clinical hours' },
            { label: 'Stalled plans', value: '23', note: 'step started, not finished' },
            { label: 'Lab cases late', value: '4', note: 'past due date' },
            { label: 'Dues past 30 days', value: '₹1.4 lakh', note: '17 patients' },
          ],
        },
        { type: 'title', text: 'Chair use by doctor, this week' },
        {
          type: 'bars',
          items: [
            { label: 'Dr Menon', value: 91, display: '91%' },
            { label: 'Dr Iyer', value: 84, display: '84%' },
            { label: 'Dr Bose (visiting)', value: 38, display: '38%', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Compressor service was due 30 September and is not booked.', action: 'Book service' },
        {
          type: 'list',
          items: [
            { name: '11 am slot cancelled', meta: '3 patients waiting for an earlier date', tag: ['Open', 'flag', 'Filled', 'ok'] },
            { name: 'Autoclave service', meta: 'Vendor visit Friday 10 am', tag: ['Due', 'late', 'Booked', 'ok'] },
          ],
        },
      ],
    },
    {
      id: 'patient',
      title: 'Patient',
      meta: 'Record',
      heading: 'One record for every patient',
      caption:
        'Plan, visits, consent, images, notes and payments for one person, visible to the people who need them. Staff see their part only, and every view is logged.',
      blocks: [
        {
          type: 'record',
          title: 'Arjun Kulkarni',
          sub: 'Patient since August 2024. Treating doctor: Dr Menon',
          fields: [
            ['Open plan', 'Root canal and crown, tooth 36'],
            ['Plan amount', '₹18,500'],
            ['Paid so far', '₹9,000'],
            ['Consent', ['On file, 4 Oct', 'ok']],
            ['Medical note', ['Allergy recorded', 'flag']],
            ['Next step', ['Overdue', 'late', 'Booked 21 Oct', 'ok']],
          ],
          timeline: [
            ['4 Oct', 'Canal cleaned, temporary filling placed, consent signed'],
            ['4 Oct', 'Impression and shade noted, crown ordered from the lab'],
            ['18 Sep', 'Scaling and X-ray taken, plan explained and accepted'],
            ['Note', 'Prefers morning slots. Anxious about injections.'],
          ],
        },
      ],
    },
    {
      id: 'plans',
      title: 'Plans and recalls',
      meta: 'Follow-ups due',
      heading: 'The list that brings patients back',
      caption:
        'Patients with a plan step waiting and patients due for a recall, grouped by what is needed. A call is a task on the front desk’s own screen and the outcome is recorded.',
      blocks: [
        {
          type: 'table',
          cols: ['Patient', 'Waiting for', 'Since', 'Doctor', 'Status'],
          rows: [
            ['Arjun Kulkarni', 'Crown fitting', '12 days', 'Dr Menon', ['Call today', 'late', 'Booked', 'ok']],
            ['Fatima Sheikh', 'Second sitting, RCT', '19 days', 'Dr Iyer', ['Call today', 'flag', 'Declined', 'muted']],
            ['Ramesh Nair', 'Six-month scaling', 'Due 1 Oct', 'Dr Iyer', ['Call', 'flag', 'Booked', 'ok']],
            ['Kavya Reddy', 'Braces adjustment', '5 weeks', 'Dr Bose', ['Call today', 'late']],
            ['Imran Qureshi', 'Denture trial', '9 days', 'Dr Menon', ['Message', 'flag']],
          ],
        },
        { type: 'alert', text: '23 plans have a step waiting for more than 10 days. 9 are worth over ₹10,000.', action: 'Assign all' },
      ],
    },
    {
      id: 'lab',
      title: 'Lab cases',
      meta: 'In transit',
      heading: 'Every lab case, from impression to fitting',
      caption:
        'What was sent, to which lab, when it is due, what has come back and what is late. Each lab gets a simple scorecard on turnaround and remakes.',
      blocks: [
        {
          type: 'table',
          cols: ['Case', 'Lab', 'Sent', 'Due', 'Status'],
          rows: [
            ['Crown 36, A. Kulkarni', 'Shree Dental Lab', '4 Oct', '14 Oct', ['Late', 'late', 'Received', 'ok']],
            ['Bridge 14 to 16, S. Rao', 'Precision Ceramics', '8 Oct', '17 Oct', ['In transit', 'info']],
            ['Upper denture, I. Qureshi', 'Shree Dental Lab', '9 Oct', '19 Oct', ['In transit', 'info']],
            ['Retainer, K. Reddy', 'Smile Works', '10 Oct', '15 Oct', ['Due today', 'flag', 'Received', 'ok']],
          ],
        },
        { type: 'title', text: 'Lab scorecard, last 90 days' },
        {
          type: 'bars',
          items: [
            { label: 'Precision Ceramics, on time', value: 94, display: '94%' },
            { label: 'Shree Dental Lab, on time', value: 71, display: '71%', tone: 'muted' },
            { label: 'Smile Works, on time', value: 86, display: '86%' },
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Materials and equipment',
      meta: 'Consumables and service dates',
      heading: 'What is in the cupboard and what needs servicing',
      caption:
        'Consumables against what upcoming procedures need, with expiry dates, and equipment against its service schedule. Usage comes from the procedures recorded, so nobody counts by eye.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'In stock', 'Used / week', 'Expires', 'Status'],
          rows: [
            ['Composite A2', '1', '3', 'Mar 2027', ['Short', 'late', 'Ordered', 'ok']],
            ['Lignocaine cartridges', '22', '14', 'Jan 2027', ['OK', 'ok']],
            ['Impression material', '3', '1', 'Nov 2026', ['Use first', 'flag']],
            ['Bonding agent', '2', '2', 'Aug 2027', ['Reorder', 'flag', 'Ordered', 'ok']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Compressor annual service', meta: 'Due 30 Sep', done: false },
            { text: 'Autoclave validation', meta: 'Done 12 Aug', done: true },
            { text: 'OPG machine service', meta: 'Due Dec', done: false },
          ],
        },
      ],
    },
    {
      id: 'compliance',
      title: 'Daily registers',
      meta: 'Today',
      heading: 'The registers an inspector may ask for',
      caption:
        'Sterilisation cycles, bio-medical waste and X-ray use as a daily checklist, each assigned to a named person. Missing entries show up the same day, not at the inspection.',
      blocks: [
        {
          type: 'checks',
          items: [
            { text: 'Autoclave cycle log, morning', meta: 'Assistant: Meena', done: true },
            { text: 'Autoclave cycle log, afternoon', meta: 'Assistant: Meena', done: false },
            { text: 'Bio-medical waste handover entry', meta: 'Collected 8:40 am', done: true },
            { text: 'X-ray exposure entries', meta: '6 of 7 patients logged', done: false },
          ],
        },
        { type: 'alert', text: 'Waste register has no entry for 9 October.', action: 'Add entry' },
      ],
    },
    {
      id: 'dues',
      title: 'Dues and payouts',
      meta: 'Money',
      heading: 'Part payments, claims and doctor shares',
      caption:
        'What each patient has paid against the agreed plan, claims waiting with insurers or companies, and the share due to each visiting doctor. Your accountant does the payments and filings.',
      blocks: [
        {
          type: 'table',
          cols: ['Patient or claim', 'Agreed', 'Paid', 'Balance', 'Status'],
          rows: [
            ['Arjun Kulkarni, RCT and crown', '₹18,500', '₹9,000', '₹9,500', ['Due at fitting', 'flag']],
            ['Fatima Sheikh, implant', '₹36,000', '₹24,000', '₹12,000', ['Overdue 34 days', 'late', 'Paid', 'ok']],
            ['TechCorp staff scheme, Sept', '₹41,200', '₹0', '₹41,200', ['Claim sent', 'info']],
            ['Kavya Reddy, braces', '₹52,000', '₹40,000', '₹12,000', ['Instalment 5 of 6', 'ok']],
          ],
        },
        {
          type: 'board',
          columns: [
            {
              name: 'Doctor payouts, September',
              cards: [
                { title: 'Dr Bose, orthodontics', meta: '40% of ₹1.9 lakh billed', tag: ['Review', 'flag', 'Approved', 'ok'] },
                { title: 'Dr Iyer, associate', meta: 'Slab on ₹3.1 lakh billed', tag: ['Review', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Thursday, before and after.',
  dayLede: 'The treatment does not change. What changes is that each step leaves a record, and the record does the reminding.',
  day: [
    {
      time: '8:45',
      before: 'You walk in and ask the assistant what the day looks like. Two things come back from memory.',
      after: 'The Today screen shows the list, a lab case that is late, and a cupboard line that is short.',
    },
    {
      time: '10:40',
      before: 'A patient cancels the 11 am. The chair sits idle for the hour.',
      after: 'The desk sees three patients waiting for an earlier date and fills the slot.',
    },
    {
      time: '1:15',
      before: 'The patient with the temporary filling from three weeks ago has not been rung.',
      after: 'She was on the stalled-plans list on day ten and the desk has already called her.',
    },
    {
      time: '4:00',
      before: 'The crown is not in the box. You call the lab. They say tomorrow.',
      after: 'The lab case was flagged two days earlier. The lab was chased, and the patient was moved.',
    },
    {
      time: '7:30',
      before: 'You write the autoclave log and the waste entry from memory before leaving.',
      after: 'The daily registers show one entry missing. The assistant fills it in before closing.',
    },
    {
      time: 'Month end',
      before: 'You work out the visiting specialist’s share with a calculator and a stack of receipts.',
      after: 'The payout statement is ready on the 1st, and the doctor sees the same figures.',
    },
  ],

  approach: {
    heading: 'We set it up with you, over four weeks.',
    lede:
      'You will not get a login and a manual. We learn how your clinic runs, build Verity around it, bring your records in, then stay to make sure it keeps working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend a day in the clinic. Follow a patient from the front desk through the chair to the payment, see how a lab case travels, and look at how plans, fees and materials are recorded today.',
        you: 'A few hours of yours and your front desk lead’s. Access to the chart system or paper folders, the fee register and the lab notebook.',
        get: 'A written map of your clinic: doctors, chairs, treatments and price list, labs and suppliers, plus the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your treatments, plan stages, recall intervals, lab list, materials with reorder levels, doctor shares, daily registers and branches, then build the screens in your clinic’s words.',
        you: 'Check the setup with your senior assistant. Correct any rule we got wrong, such as how you split a visiting doctor’s fee.',
        get: 'A working Verity with your real treatments, doctors and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in patient lists, open plans, lab cases in progress, dues and the stock sheet from whatever you use now. Train the front desk, assistants and doctors at their own stations, in short sessions.',
        you: 'Your patient list and whatever history exists, even from paper. One hour per role.',
        get: 'Your open plans, dues and stock inside Verity, and a team that has used it on real patients.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay with you after launch. Look at the first month together, tune recall lists and alerts, and handle changes when you add a doctor, a chair or a second clinic.',
        you: 'A short monthly review of the numbers.',
        get: 'A system that keeps pace with the clinic, and a named person responsible for it.',
      },
    ],
    bring: [
      'Your treatment list with usual fees',
      'Patient list from your chart software or paper register',
      'Open treatment plans and any dues outstanding',
      'Lab names, rates and the cases currently out',
      'Material list with suppliers, and doctor fee-share arrangements',
    ],
    time: 'About 9 to 11 hours of your own time across the four weeks, mostly in the first. Your front desk lead and senior assistant need a few more.',
    after: 'You do not need to hire anyone. Plan steps, lab dispatches and material use are recorded as part of the work already being done.',
  },

  ai: {
    heading: 'Ask your clinic a question. Get an answer from your own records.',
    lede:
      'Verity AI reads your patient, plan, lab, stock and payment records and answers in plain language. It respects who is allowed to see what, and it can turn an answer into tasks. It does not offer clinical advice.',
    examples: [
      {
        q: 'Which accepted plans have had no visit in 30 days?',
        a: '23 plans are waiting. 9 are worth over ₹10,000, and 6 have a temporary restoration in place.',
        rows: [['Dr Menon', '11'], ['Dr Iyer', '8'], ['Dr Bose', '4']],
        action: 'Create follow-up tasks for the front desk',
      },
      {
        q: 'Which lab is slowest on crowns this quarter?',
        a: 'Shree Dental Lab, with 71 percent of cases on time and an average of 3 days late on the rest.',
        rows: [['Shree Dental Lab', '71%'], ['Smile Works', '86%'], ['Precision Ceramics', '94%']],
      },
      {
        q: 'Will we run short of composite before Saturday?',
        a: 'Shade A2 will run out on Friday at the current rate. The supplier usually delivers within two days.',
        action: 'Raise the order today',
      },
    ],
  },

  automationHeading: 'The follow-ups that fall between appointments.',
  automationLede: 'Set once, run from your records. Your team still makes the calls and sends the messages. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A plan step is waiting for 10 days',
      then: ['Plan added to the stalled list with the last note', 'Task to the front desk to call the patient', 'Outcome recorded: booked, declined or unreachable'],
    },
    {
      when: 'A recall date comes within 30 days',
      then: ['Patient added to the month’s recall list', 'Call task created for the desk', 'Next recall date set once the visit is done'],
    },
    {
      when: 'A lab case is two days from due with no dispatch',
      then: ['Flagged to the dentist and the desk', 'Chase task for the lab', 'Patient’s fitting visit marked at risk'],
    },
    {
      when: 'A procedure is completed',
      then: ['Materials used deducted from stock', 'Fee entered against the plan balance', 'Doctor’s share credited'],
    },
    {
      when: 'A material reaches its reorder level',
      then: ['Checked against the next week’s procedures', 'Order drafted to the usual supplier', 'Stock updated when the delivery is recorded'],
    },
    {
      when: 'A daily register entry is missing at closing time',
      then: ['Flagged to the named person', 'Reminder to the clinic lead', 'Missing entry recorded if not completed'],
    },
  ],

  rules: {
    heading: 'The rules a dental clinic works under.',
    lede: 'Verity does not give legal advice, files nothing for you and does not decide clinical matters. It keeps the records these rules depend on in order, so you are not rebuilding them from several books.',
    items: [
      {
        name: 'Patient records and requests for copies',
        what: 'The Dentists Code of Ethics Regulations, 2014 say a dentist should keep records of outpatients for at least three years from the start of treatment and answer a valid request for records within 72 hours, after getting a receipt.',
        how: 'Consent, notes, images and payments sit on one record, so a complete set can be put together quickly, and each access is logged.',
        source: { name: 'Dentists Code of Ethics Regulations, 2014', url: 'https://tndentalcouncil.com/source/dentists_code_of_ethics_regulations_2014.pdf' },
      },
      {
        name: 'Bio-medical waste',
        what: 'Under the Bio-Medical Waste Management Rules, 2016, the State Pollution Control Board generally authorises every healthcare facility that handles such waste, whatever the quantity. Authorisation conditions often include a daily waste register.',
        how: 'A daily checklist for waste handover with a named person and a searchable history, ready for an inspection.',
        source: { name: 'Central Pollution Control Board, bio-medical waste', url: 'https://cpcb.nic.in/bio-medical/' },
      },
      {
        name: 'X-ray units and radiation safety',
        what: 'Dental X-ray, OPG and cone beam units generally need registration and a licence through the Atomic Energy Regulatory Board’s eLORA system. Steps and fees change, so check the current process.',
        how: 'Each machine is an equipment record with its licence date and renewal task, and exposures are logged against patients.',
        source: { name: 'Atomic Energy Regulatory Board, dental radiology guidelines', url: 'https://aerb.gov.in/images/PDF/dentalguidelines05082019.pdf' },
      },
      {
        name: 'Patient data protection',
        what: 'India’s Digital Personal Data Protection Rules were notified on 13 November 2025. The main duties on notice, consent and children’s data are expected to start on 13 May 2027. Health and education providers have some exemptions for children’s data.',
        how: 'Patient data stays in one permissioned place with a log of who saw or changed it, rather than in phones, chat groups and loose files.',
        source: { name: 'AZB Partners on the DPDP framework', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your dental council, state authorities or adviser. Verity does not file anything.',
  },

  rolesHeading: 'Each person opens the clinic through their own view.',
  rolesLede: 'An assistant does not need to see doctor payouts. A visiting doctor does not need your whole patient list. Access follows the job.',
  roles: [
    { role: 'Owner dentist', question: 'Is the clinic filling its chairs and finishing its plans?', sees: 'Chair use, stalled plans, dues ageing, lab scorecards, doctor payouts and every branch side by side.' },
    { role: 'Associate or visiting doctor', question: 'What is on my list and what am I owed?', sees: 'Their own patients and plans, their lab cases, and their share statement.' },
    { role: 'Front desk', question: 'Who do I call today?', sees: 'Stalled plans, recalls due, cancelled slots, dues to chase and claims pending.' },
    { role: 'Dental assistant', question: 'What do I need ready for the next patient?', sees: 'Today’s procedures, materials needed, sterilisation and waste checklists.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Fees by payment mode, balances by plan, claim status, supplier payables and doctor shares.' },
  ],

  alongside: {
    heading: 'What changes and what stays.',
    keep: [
      'Your chairside charting and imaging software, if you use one. We agree how its data reaches Verity during setup.',
      'The way patients book today, whether by phone, a booking page or a receptionist. Verity records the visit.',
      'WhatsApp with patients and labs. Staff send the messages; Verity says who and when.',
      'Your accountant, who still prepares returns and pays doctors.',
    ],
    not: [
      'Take patient bookings online.',
      'Send messages to patients on its own.',
      'Give clinical advice or choose treatment.',
      'Run your payroll or file your returns.',
    ],
    migration:
      'We bring patient lists, open plans, dues, lab cases in progress and stock across from your files and notebooks in stages, so the clinic keeps seeing patients through the change.',
  },

  faqHeading: 'Questions dentists ask.',
  faqs: [
    [
      'Does Verity make clinical decisions or suggest treatment?',
      'No. Your dentists decide diagnosis and treatment. Verity records the plan your dentist writes, tracks the steps and tells your team what is waiting.',
    ],
    [
      'We already use dental charting software. Do we replace it?',
      'Not necessarily. If you chart and store images in a dedicated tool, you can keep it. During setup we agree how the information Verity needs reaches it, such as plan steps and procedures done.',
    ],
    [
      'Can Verity send reminders to patients?',
      'Not by itself. It builds the recall and follow-up lists and assigns the call or message to a named person on your team. They send it, and the result is recorded.',
    ],
    [
      'How does it deal with part payments on a long treatment?',
      'Each plan has an agreed amount, and each payment is recorded against it. You see the balance by patient and which plans have moved ahead of payment.',
    ],
    [
      'Is it too much for a one-chair clinic?',
      'A one-chair clinic has the same stalled plans and late crowns, with less time to notice them. We set up only what you need. The four-week process is the same.',
    ],
    [
      'Can I run two or three branches in one view?',
      'Yes. Each branch is a location in one system. A patient who visits both is one person, and chair use, dues and stock compare side by side.',
    ],
    [
      'Who can see patient data?',
      'Only the people you allow. Access is by role, so the front desk, doctors, assistants and your accountant each see only what they need. Every view and change is logged with the person and time.',
    ],
    [
      'How do we handle consent forms and images?',
      'Consent and notes are attached to the patient record. For images, we agree during setup whether they stay in your imaging software with a link on the record, or are stored with the patient.',
    ],
    [
      'What does it cost?',
      'It depends on the number of clinics, doctors and what you want set up. Message us, and after a short conversation about how your clinic runs we will give you a clear number.',
    ],
  ],

  related: ['dermatology-clinics', 'clinics', 'physiotherapy-clinics', 'hospitals', 'diagnostic-labs', 'optical-stores'],

  ctaHeading: 'Start with the plans that stopped.',
  ctaLede:
    'Tell us how your clinic runs and we will show you the stalled plans, late lab cases and idle chair hours it would find, using your own numbers.',
};
