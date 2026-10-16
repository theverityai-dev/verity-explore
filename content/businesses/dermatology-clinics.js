export default {
  schema: 2,
  slug: 'dermatology-clinics',
  status: 'published',
  plural: 'dermatology clinics',
  subject: 'dermatology clinic',
  checked: '15 October 2026',

  seo: {
    title: 'Dermatology clinic management software for India | Verity',
    description:
      'The 14 problems that quietly drain a skin clinic: lost follow-ups, unfinished laser courses, injectable batches, photo consent and more, and the Verity screens that fix them.',
    keywords: [
      'dermatology clinic software India',
      'skin clinic package and session tracking',
      'laser and aesthetic procedure records',
      'injectable batch and expiry tracking',
      'dermatology patient follow-up management',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'schedule', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for dermatology clinics',
    headline: 'She paid for six laser sessions, came for two, and nobody has called since.',
    lede:
      'A skin clinic earns from patients who return: for acne and pigmentation reviews, for six-session laser courses, for peels spaced three weeks apart. Those return visits slip because the course, the photos, the consent and the batch number all sit in different places. Verity keeps them together and shows you who has stopped coming.',
    oneLine:
      'One system that knows every patient’s course, every session left, every injectable batch and every device that needs service, and tells you what needs attention today.',
    note: 'Verity records and organises. Your dermatologists decide every diagnosis and treatment, and Verity gives no medical advice.',
    screen: 'owner',
    screenNote: 'doctors, rooms, procedures and devices',
  },

  today: {
    heading: 'A skin clinic is a long relationship told in short visits.',
    paragraphs: [
      'Most dermatology patients are not one-visit patients. Acne is reviewed every month or two. Pigmentation, hair loss and psoriasis can take months of follow-up. Aesthetic work such as laser hair reduction, peels and microneedling is sold as a course. The income is in the second, third and sixth visit, not the first.',
      'The detail needed for each visit is scattered. The prescription is in the doctor’s system or on a pad. Photographs are on a clinic phone or the assistant’s own. The consent for a procedure is on paper. The session count is on a card the patient carries. Injectable vials have batch numbers on a box that was thrown away. Staff who run the laser know what happened better than anyone, and they may leave.',
      'The result is not a single crisis. It is patients who disappear half-way through a course, photographs nobody can find when a patient asks, stock that expires in the fridge, and a clinic owner who cannot see which room or provider is earning.',
    ],
    stack: ['Prescription software or pad', 'Photos on a phone', 'Paper consent forms', 'Session cards and a register', 'WhatsApp with patients'],
    stackNote: 'Each one holds a piece of the patient. Nothing tells you which course is unfinished or which vial belongs to whom.',
  },

  painsHeading: 'Where a skin clinic loses patients, money and records.',
  painsLede:
    'These are situations dermatologists and clinic managers describe. For each: what it looks like, what it costs, and what Verity does about it. Verity records what your team decides and never advises on treatment.',
  pains: [
    {
      area: 'Patients',
      title: 'Follow-up patients stop coming after the first improvement',
      scene:
        'A teenager’s acne improves in six weeks and the parent decides they are done. A woman with pigmentation stops after the first review. Nobody calls, because nobody has a list of who was meant to return.',
      cost:
        'Chronic skin conditions need repeat visits, and patients often stop once things look better. The clinic loses the revenue of the visits that were planned, and the patient may relapse. Example arithmetic: 57 overdue reviews at ₹800 a consult is about ₹45,000 of visits that should have happened.',
      fix:
        'The doctor records a review date with each consult. Verity lists patients past their review date by condition and doctor, and assigns a call task to the front desk. The outcome, whether booked, declined or unreachable, is recorded.',
      screen: 'followups',
    },
    {
      area: 'Patients',
      title: 'Enquiries from Instagram and ads are never followed up properly',
      scene:
        'A reel brings forty enquiries about hair removal packages. They go to a phone that three people check. Some get a reply the same hour, some never. Nobody knows which enquiry became a patient.',
      cost:
        'Money spent on advertising, and the cost of a lead that was never called. Without a record you cannot tell which source is worth paying for.',
      fix:
        'Each enquiry is a record with its source and an owner. Verity shows enquiries with no reply, how long they have waited and which turned into a first visit, by source.',
      screen: 'followups',
    },
    {
      area: 'Courses and sessions',
      title: 'Laser and peel courses end with sessions unused',
      scene:
        'A patient buys six hair-reduction sessions, comes for three, and then travels for work. The card is lost. Six months later she is back, argues about how many remain, and the register has a different number.',
      cost:
        'Example arithmetic: 40 unfinished courses with two sessions left at ₹3,500 a session is ₹2.8 lakh of work owed to patients, and a liability and a dispute waiting to happen.',
      fix:
        'A course is a record with sessions bought, sessions done, spacing and an end date. Verity reduces the count at every visit, shows balances that are about to lapse and tasks the desk to rebook while the patient is still interested.',
      screen: 'packages',
    },
    {
      area: 'Courses and sessions',
      title: 'Discounts, free add-ons and extensions are granted verbally',
      scene:
        'A regular is promised a free peel. A manager adds two extra laser sessions to settle a complaint. A staff member gives 20 percent off to a friend. Each one was a small decision made at the desk.',
      cost:
        'Thin margins on aesthetic work disappear in small concessions, and the owner finds out at month end.',
      fix:
        'Anything above a limit you set waits for one-tap approval with a reason. The decision is recorded against the patient’s course so it can be reviewed later.',
      screen: 'packages',
    },
    {
      area: 'Records',
      title: 'Before and after photos live on personal phones',
      scene:
        'The assistant photographs a scar before a procedure and keeps the picture in her gallery. She changes her phone, resigns or shares one in a group. A patient later asks for her photographs.',
      cost:
        'Clinical images are sensitive health data. Loose copies create a privacy risk and a gap in the record when a result is questioned.',
      fix:
        'Photographs are attached to the patient record and the procedure, with who added them and when. Viewing and sharing follow role permissions, and every access is logged.',
      screen: 'patient',
    },
    {
      area: 'Records',
      title: 'Consent, patch tests and allergies are on paper or in memory',
      scene:
        'A patient with a past reaction to a peeling agent sees a different assistant this time. The earlier reaction is in a folder. The consent for the new laser course was signed, but where?',
      cost:
        'A repeat reaction is a patient-safety problem, and a missing consent is a record problem if anything is later disputed.',
      fix:
        'Allergies, patch-test results, reactions and signed consents sit on the patient record and show on the screen whoever opens it. Staff cannot close a procedure without the consent marked as on file.',
      screen: 'patient',
    },
    {
      area: 'Stock',
      title: 'Injectables and creams are tracked by memory',
      scene:
        'Botulinum toxin, fillers and vitamin vials are kept in a small fridge. The count is in an assistant’s head, expiry dates are on boxes, and the batch used on a particular patient is not written anywhere.',
      cost:
        'Expired vials are thrown away at the clinic’s cost. If a batch is ever flagged, you cannot say which patients received it.',
      fix:
        'Each vial or pack is received with batch, expiry and cost. Every procedure records the product and batch used, so one search shows where a batch went and what remains in the fridge.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Injectable treatments now face tighter rules and checks',
      scene:
        'In 2026 the drug regulator said cosmetic products are not permitted to be administered by injection. Clinics offering glutathione drips, skin boosters and similar are unsure what they can still stock and promote.',
      cost:
        'Selling or advertising a product the wrong way can bring inspections, seizure of stock and action against the doctor. The details are still being worked through by clinics and advisers.',
      fix:
        'Each product carries a type, source and approval note that your doctor sets. Verity lists products in stock by that note so questions can be answered quickly, and keeps the batch trail for any item that must be traced. It does not judge what is lawful.',
      screen: 'stock',
      source: {
        name: 'Medical Dialogues on the CDSCO notice, May 2026',
        url: 'https://medicaldialogues.in/news/industry/pharma/cdsco/beauty-through-syringes-no-longer-cosmetic-glutathione-drips-injectable-aesthetic-procedures-under-cdsco-lens-171408',
      },
    },
    {
      area: 'Stock',
      title: 'Lasers and devices break down, or run past their service date',
      scene:
        'The laser’s handpiece reaches the end of its shot count without anyone noticing. The cooling unit fails on a Saturday with six patients booked.',
      cost:
        'A day of cancelled procedures, and expensive emergency repair. Heavy daily use makes a missed service more likely.',
      fix:
        'Each device is a record with service dates, vendor and usage per procedure. Verity warns before service is due and shows which devices earn their cost and which sit unused.',
      screen: 'stock',
    },
    {
      area: 'Stock',
      title: 'Skincare and prescription products sold at the desk do not tally',
      scene:
        'Sunscreens, moisturisers and doctor-recommended products sell from a shelf. Some are billed, some are gifted to a patient. The monthly count never matches.',
      cost:
        'Retail is a useful margin line for a skin clinic and the least tracked. Shrinkage hides in it.',
      fix:
        'Product sales are recorded against the patient and deducted from stock as they happen. A monthly count shows exactly which items do not match.',
      screen: 'stock',
    },
    {
      area: 'Chairs and time',
      title: 'Procedure rooms and doctor time are not matched',
      scene:
        'The laser room has a gap on Tuesday and a wait on Saturday. The doctor is stuck in review consults while a procedure patient waits. Nobody can see which slot type is overbooked.',
      cost:
        'Idle devices and idle hours cost the same as busy ones. Long waits cost patients.',
      fix:
        'Visits are recorded by type, room, device and doctor. Verity shows use by room and hour, the average length of each visit type against the slot booked, and the no-shows by patient.',
      screen: 'owner',
    },
    {
      area: 'People',
      title: 'Therapists and assistants carry the patient relationship, and can take it away',
      scene:
        'The senior laser therapist knows every patient’s skin and history. She is also paid on procedures she performs. When she leaves, many patients follow her to the new clinic.',
      cost:
        'A therapist’s exit can take months of recurring revenue with it. Incentives worked out by hand also go wrong.',
      fix:
        'Every procedure is recorded against the provider, and the patient’s history belongs to the clinic. Verity builds an incentive statement from your slabs and prepares a handover list the day someone resigns.',
      screen: 'staff',
    },
    {
      area: 'Money',
      title: 'Cash, card and UPI do not match the procedures done',
      scene:
        'At closing the desk counts cash, card slips and UPI against the procedure list. The total is off by ₹1,800. Was a session billed, discounted or forgotten?',
      cost:
        'Small daily gaps add up, and the owner stops trusting the numbers on the page.',
      fix:
        'Every procedure is a record with an amount and a payment mode. Verity compares the day’s procedures with the day’s payments and shows the exact visit that does not tie.',
      screen: 'owner',
    },
    {
      area: 'Owner',
      title: 'A second clinic runs on nightly messages',
      scene:
        'The second clinic’s manager sends a figure each night. Patients who visit both appear in two registers. A product runs out at one site while it sits unused at the other.',
      cost:
        'No fair comparison of clinics, weeks of delay before a problem surfaces, and stock that cannot be moved with a record.',
      fix:
        'Clinics are locations in one system, with a patient shown once. Revenue, utilisation, follow-up rates and stock compare side by side, and a stock transfer is recorded when it moves.',
      screen: 'owner',
    },
  ],

  factsHeading: 'The numbers behind these problems.',
  factsLede: 'From published sources, with the source named under each figure. Your clinic’s own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '13.3%',
      text: 'a year is the projected growth for India’s medical aesthetics market, from about $607 million in 2025 to about $1.32 billion by 2031, one market research estimate. More aesthetic clinics means more places a patient can go.',
      source: { name: 'MarketsandMarkets, India medical aesthetics market (market research vendor)', year: '2025', url: 'https://www.marketsandmarkets.com/Market-Reports/geography/medical-aesthetics-market/india' },
    },
    {
      figure: '5 to 10%',
      text: 'of patients seen by Indian dermatologists have atopic dermatitis, according to a 2025 survey of 150 dermatologists, with more than 60% of cases starting in childhood. These are patients who need repeated review.',
      source: { name: 'Survey on atopic dermatitis among Indian dermatologists (PMC, industry-linked authors)', year: '2025', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12495118/' },
    },
    {
      figure: '2026',
      text: 'is the year the drug regulator said cosmetic products are not permitted to be administered through injections and cannot be promoted or used for treatment purposes. Injectable offers now draw more scrutiny.',
      source: { name: 'Medical Dialogues on the CDSCO notice', year: '2026', url: 'https://medicaldialogues.in/news/industry/pharma/cdsco/beauty-through-syringes-no-longer-cosmetic-glutathione-drips-injectable-aesthetic-procedures-under-cdsco-lens-171408' },
    },
    {
      figure: '13 May 2027',
      text: 'is when the main duties of India’s data protection rules, including consent and notice for personal data, are expected to start. Patient photographs and records are personal data.',
      source: { name: 'AZB Partners on the DPDP framework', year: '2025', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
    },
  ],
  factsNote:
    'The market figure is from a research vendor and different firms give very different totals. The atopic dermatitis survey has authors from a pharma company. The regulator notice is reported by press and the original text should be read by your adviser. These show the size of the issue, not what your clinic will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each built for one job. Names and terms are set in your clinic’s own words.',
  screens: [
    {
      id: 'owner',
      title: 'Clinic / Today',
      meta: 'Clinic: Jubilee Hills',
      heading: 'The owner’s morning view',
      caption:
        'Takings, room use, patients overdue for review and stock that needs attention, with the items needing a decision listed under them. This replaces the nightly message and the mental checklist.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Takings today', value: '₹92,400', note: '31 visits' },
            { label: 'Room use', value: '63%', note: 'laser and procedure rooms' },
            { label: 'Overdue reviews', value: '57', note: 'past review date' },
            { label: 'Expiring in 60 days', value: '₹38,000', note: 'products and vials' },
          ],
        },
        { type: 'title', text: 'Room use this week' },
        {
          type: 'bars',
          items: [
            { label: 'Laser room 1', value: 82, display: '82%' },
            { label: 'Laser room 2', value: 44, display: '44%', tone: 'muted' },
            { label: 'Procedure room', value: 71, display: '71%' },
            { label: 'Consult rooms', value: 90, display: '90%' },
          ],
        },
        { type: 'alert', text: 'Cash, card and UPI differ from procedures by ₹1,800. 2 visits unmatched.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Laser handpiece near shot limit', meta: 'Vendor quote requested', tag: ['Open', 'flag', 'Ordered', 'ok'] },
            { name: 'Reviews overdue, acne clinic', meta: '19 patients assigned to the desk', tag: ['Open', 'flag', 'Assigned', 'ok'] },
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
        'Diagnosis note, course, photographs, consents, allergies and payments, all in one place for the person treating them. Photographs and notes show only to roles you allow.',
      blocks: [
        {
          type: 'record',
          title: 'Sneha Pillai',
          sub: 'Patient since January 2025. Treating doctor: Dr Rao',
          fields: [
            ['Current course', 'Laser hair reduction, 3 of 6 done'],
            ['Next session due', ['Overdue', 'late', 'Booked 24 Oct', 'ok']],
            ['Allergy note', ['Reaction to glycolic peel', 'flag']],
            ['Consent', ['On file, laser course', 'ok']],
            ['Photos', '9 images, 3 sets'],
            ['Paid / agreed', '₹12,000 of ₹21,000'],
          ],
          timeline: [
            ['2 Sep', 'Session 3, underarms, settings noted, no reaction'],
            ['12 Aug', 'Session 2, photographs taken'],
            ['14 Jul', 'Session 1, patch test clear, consent signed'],
            ['Note', 'Prefers a female therapist. Avoid scented products.'],
          ],
        },
      ],
    },
    {
      id: 'followups',
      title: 'Follow-ups and enquiries',
      meta: 'Who to call',
      heading: 'The list that brings patients back',
      caption:
        'Patients past their review date and enquiries with no reply, in one list for the front desk. A call is a task, and the result is recorded against the patient.',
      blocks: [
        {
          type: 'table',
          cols: ['Patient', 'Reason', 'Due', 'Doctor', 'Status'],
          rows: [
            ['Aarav Menon, 16', 'Acne review', '3 weeks late', 'Dr Rao', ['Call today', 'late', 'Booked', 'ok']],
            ['Lakshmi Reddy', 'Melasma review', '5 weeks late', 'Dr Rao', ['Call today', 'flag', 'Declined', 'muted']],
            ['Imran Sheikh', 'Psoriasis follow-up', '2 weeks late', 'Dr Kapoor', ['Call', 'flag', 'Booked', 'ok']],
            ['Enquiry, Instagram', 'Laser hair reduction', '2 days old', 'Unassigned', ['No reply', 'late', 'Replied', 'ok']],
            ['Enquiry, website form', 'Hair PRP', '1 day old', 'Unassigned', ['No reply', 'flag']],
          ],
        },
        { type: 'alert', text: '57 patients are past their review date. 14 enquiries have not had a reply for more than a day.', action: 'Assign all' },
      ],
    },
    {
      id: 'packages',
      title: 'Courses and approvals',
      meta: 'Sessions and discounts',
      heading: 'Sessions owed and discounts approved',
      caption:
        'Every course with sessions left, and every discount or add-on waiting for a decision. Balances about to lapse are listed so the desk can rebook them.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Waiting for approval',
              cards: [
                { title: '20% off, bridal skin package', meta: 'Asked by desk. Reason: referral', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
                { title: 'Two extra laser sessions', meta: 'Asked by Dr Rao. Reason: complaint', tag: ['Approve?', 'flag', 'Approved', 'ok'] },
              ],
            },
            {
              name: 'Courses ending soon',
              cards: [
                { title: 'Sneha Pillai, laser x6', meta: '3 left, ends 31 Dec', tag: ['Rebook', 'late'] },
                { title: 'Meera Joshi, peel x4', meta: '2 left, ends 15 Nov', tag: ['Rebook', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'stock',
      title: 'Products and devices',
      meta: 'Injectables, retail, devices',
      heading: 'Every vial, product and device on one list',
      caption:
        'What is in stock with batch and expiry, which batch went to which patient, what the retail shelf should hold, and which device is due for service.',
      blocks: [
        {
          type: 'table',
          cols: ['Item', 'Batch', 'In stock', 'Expires', 'Status'],
          rows: [
            ['Botulinum toxin 100 U', 'B-2209', '3', 'Feb 2027', ['OK', 'ok']],
            ['Filler 1 ml', 'F-7714', '5', 'Dec 2026', ['Use first', 'flag']],
            ['Sunscreen SPF 50, retail', 'S-0432', '14', 'Aug 2027', ['OK', 'ok']],
            ['Chemical peel solution', 'P-118', '2', 'Nov 2026', ['Short', 'late', 'Ordered', 'ok']],
          ],
        },
        {
          type: 'checks',
          items: [
            { text: 'Laser 1, annual service', meta: 'Due 30 Nov', done: false },
            { text: 'Laser 2, handpiece check', meta: '92% of rated shots used', done: false },
            { text: 'Fridge temperature log', meta: 'Done this morning', done: true },
          ],
        },
        { type: 'alert', text: 'Retail count mismatch: 6 items sold but not deducted, ₹4,100 at cost.', action: 'Check count' },
      ],
    },
    {
      id: 'staff',
      title: 'Providers',
      meta: 'This month',
      heading: 'A scorecard everyone sees the same way',
      caption:
        'Procedures, rebooking and product sales by doctor and therapist, with the incentive worked out from your slabs. The person sees their own, so month end stops being an argument.',
      blocks: [
        {
          type: 'table',
          cols: ['Provider', 'Procedures', 'Rebook', 'Retail', 'Incentive'],
          rows: [
            ['Dr Rao', '86', '71%', '₹18,400', 'Fee share'],
            ['Dr Kapoor', '52', '64%', '₹9,200', 'Fee share'],
            ['Therapist Divya', '121', '58%', '₹6,100', '₹14,800'],
            ['Therapist Pooja', '74', '33%', '₹1,900', '₹9,300'],
          ],
        },
        { type: 'title', text: 'Rebooking rate' },
        {
          type: 'bars',
          items: [
            { label: 'Dr Rao', value: 71, display: '71%' },
            { label: 'Dr Kapoor', value: 64, display: '64%' },
            { label: 'Divya', value: 58, display: '58%' },
            { label: 'Pooja', value: 33, display: '33%', tone: 'muted' },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Wednesday, before and after.',
  dayLede: 'The treatments are the same. What changes is that each one leaves a record and the record does the chasing.',
  day: [
    {
      time: '9:00',
      before: 'You open the clinic and check a diary and a WhatsApp group. A filler vial expired last week; you find out when you open the fridge.',
      after: 'The Today screen shows two items expiring in 60 days, one device near service and the day’s list.',
    },
    {
      time: '11:30',
      before: 'A patient returns after three months asking how many sessions remain. The card says four, the register says two.',
      after: 'The course record says three left and shows each session with the date and provider.',
    },
    {
      time: '2:00',
      before: 'A patient with a past peel reaction sees a different assistant. The reaction is in a folder.',
      after: 'The allergy note shows at the top of the record as soon as it is opened.',
    },
    {
      time: '4:30',
      before: 'A friend of the manager gets a free session. You hear about it at month end.',
      after: 'It arrives as a one-tap approval with the reason, and you decline it.',
    },
    {
      time: '7:30',
      before: 'You match cash and UPI to the visit list. It is off by ₹1,800.',
      after: 'Verity shows the two visits that do not tie. You fix them in a minute.',
    },
    {
      time: 'Month end',
      before: 'The therapist’s incentive is added up by hand and one of them disputes it.',
      after: 'The statement is ready on the 1st and each provider sees the same breakdown.',
    },
  ],

  approach: {
    heading: 'We set it up with you, over four weeks.',
    lede:
      'No login and a manual left on your desk. We learn how your clinic runs, build Verity around it, bring your patients and stock in, and stay on afterwards.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit with you and your clinic manager for a day. Follow a patient from the enquiry to the consult room, the laser room and the desk, and see how courses, photos, stock and fees are recorded today.',
        you: 'A few hours from you and your manager. Access to the patient register, the course cards, the product list and the cash book.',
        get: 'A written map of your clinic: doctors, rooms, devices, procedures and price list, plus the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up your procedures, course types and spacing, review intervals, product list with batch and expiry fields, devices and service dates, approval limits, provider incentive slabs and your clinics.',
        you: 'Review the setup with your manager and senior therapist. Correct any rule that does not match how you work.',
        get: 'A working Verity with your real procedures, rooms and rules, ready for your data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in patient lists, running courses with sessions left, product stock with batches and dues from your registers and sheets. Train doctors, therapists and the desk at their own stations.',
        you: 'Your patient list and any history you have, in whatever form it exists. One hour per role.',
        get: 'Your patients, courses and stock inside Verity, and a team that has used it on real visits.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Stay on after launch. Review the first weeks with you, tune follow-up lists and alerts, and handle changes when you add a doctor, a device or another clinic.',
        you: 'A short monthly review of the numbers.',
        get: 'A system that keeps matching how the clinic runs, with someone accountable for it.',
      },
    ],
    bring: [
      'Your procedure list and prices, including course packages',
      'Your patient list, even if it is a register or phone contacts',
      'Running courses with the sessions already used',
      'Your product and vial list with suppliers and costs',
      'Therapist and doctor incentive or fee-share rules',
    ],
    time: 'About 9 to 11 hours of your own time across the four weeks, mostly in week 1. Your manager needs a few more.',
    after: 'You do not need to hire someone to run Verity. Sessions, batches and photos are recorded as part of the visit already happening.',
  },

  ai: {
    heading: 'Ask your clinic a question. Get an answer from your own records.',
    lede:
      'Verity AI reads your patient, course, stock and payment records and answers in plain words. It respects who may see what and can turn an answer into tasks. It does not give medical advice.',
    examples: [
      {
        q: 'Which laser patients have sessions left but have not visited in 60 days?',
        a: '38 patients have sessions left and no visit in 60 days. 12 have courses ending within a month.',
        rows: [['Therapist Divya', '19'], ['Therapist Pooja', '14'], ['Dr Rao', '5']],
        action: 'Create rebooking tasks for the desk',
      },
      {
        q: 'Which batch of filler went to which patients?',
        a: 'Batch F-7714 was used on 7 patients between 2 and 19 September. 5 vials remain in stock.',
        rows: [['Patients treated', '7'], ['Vials in stock', '5']],
      },
      {
        q: 'Which room is least used this month?',
        a: 'Laser room 2, at 44 percent of staffed hours, against 82 percent for laser room 1.',
        action: 'Flag for the monthly review',
      },
    ],
  },

  automationHeading: 'The follow-ups that fall between visits.',
  automationLede: 'Set once, run from your records. Staff still call and message. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A patient passes their review date',
      then: ['Added to the follow-up list with the last note', 'Call task for the desk', 'Outcome recorded: booked, declined or unreachable'],
    },
    {
      when: 'A new enquiry has no reply for 4 hours',
      then: ['Flagged on the front desk screen', 'Reminder to the manager', 'Source recorded, and first visit linked if it converts'],
    },
    {
      when: 'A session in a course is completed',
      then: ['Sessions left reduced', 'Next session date set by the spacing rule', 'Provider credited for the procedure'],
    },
    {
      when: 'A vial or product is used',
      then: ['Batch recorded against the patient', 'Stock reduced', 'Reorder checked against upcoming bookings'],
    },
    {
      when: 'A discount or add-on is above your limit',
      then: ['Held for approval', 'Routed to you with the reason', 'Decision recorded against the course'],
    },
    {
      when: 'A device is 30 days from service',
      then: ['Task to the manager', 'Vendor and last service shown', 'Next date set when the visit is logged'],
    },
  ],

  rules: {
    heading: 'The rules a skin clinic works under.',
    lede: 'Verity does not give legal or medical advice, and it files nothing for you. It keeps the records these rules depend on in order, so you are not rebuilding them from phones and folders.',
    items: [
      {
        name: 'Medical records and requests for copies',
        what: 'Doctors in India are generally expected to keep patient records and supply them on request. The exact period and timeline come from the medical council regulations in force. These were revised and then paused in 2023, so confirm which text applies to you.',
        how: 'Notes, consents, photographs and payments sit on one record with access logging, so a complete set can be produced quickly.',
      },
      {
        name: 'Injectables and the Drugs and Cosmetics Act',
        what: 'In 2026 the drug regulator’s office said cosmetic products are not permitted to be administered by injection or promoted for treatment. Which products and practices are affected is still being worked through.',
        how: 'Products are recorded with a type and approval note set by your doctor, and every use is traced by batch to the patient.',
        source: { name: 'Medical Dialogues on the CDSCO notice', url: 'https://medicaldialogues.in/news/industry/pharma/cdsco/beauty-through-syringes-no-longer-cosmetic-glutathione-drips-injectable-aesthetic-procedures-under-cdsco-lens-171408' },
      },
      {
        name: 'Bio-medical waste, including sharps',
        what: 'Under the Bio-Medical Waste Management Rules, 2016, healthcare facilities generally need authorisation from the State Pollution Control Board and must handle sharps and waste in the prescribed way. Conditions often include a daily register.',
        how: 'A daily waste checklist with a named person and a searchable history.',
        source: { name: 'Central Pollution Control Board, bio-medical waste', url: 'https://cpcb.nic.in/bio-medical/' },
      },
      {
        name: 'Patient data and photographs',
        what: 'India’s Digital Personal Data Protection Rules were notified on 13 November 2025. The main duties on notice and consent are expected to start on 13 May 2027. Clinical photographs are personal data.',
        how: 'Photos and notes stay in a permissioned place with a log of who saw or changed them, instead of in galleries and chat groups.',
        source: { name: 'AZB Partners on the DPDP framework', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your medical council, state authorities or adviser.',
  },

  rolesHeading: 'Each person opens the clinic through their own view.',
  rolesLede: 'A therapist does not need to see doctor fee shares. The desk does not need to open clinical photographs. Access follows the job.',
  roles: [
    { role: 'Owner doctor', question: 'Are patients returning and are rooms earning?', sees: 'Follow-up rates, course balances, room use, provider scorecards, stock value and every clinic side by side.' },
    { role: 'Treating doctor', question: 'What should I know before this patient sits down?', sees: 'The patient’s history, allergies, photographs, consents, current course and past notes.' },
    { role: 'Therapist', question: 'Which session is next and what is booked?', sees: 'Their list, course balances, settings of past sessions and their own incentive statement.' },
    { role: 'Front desk', question: 'Who do I call today?', sees: 'Overdue reviews, enquiries awaiting reply, courses ending, discounts waiting and dues.' },
    { role: 'Accountant', question: 'What came in and what is owed?', sees: 'Takings by payment mode, course liabilities, supplier payables, discounts and fee shares.' },
  ],

  alongside: {
    heading: 'What changes and what stays.',
    keep: [
      'Your prescription or clinical notes software, if you use one. We agree how its data reaches Verity during setup.',
      'How patients take slots today, whether by phone, a booking page or the desk. Verity records the visit.',
      'WhatsApp for patient chat. Staff send; Verity says who and when.',
      'Your accountant, who still prepares returns and pays staff.',
    ],
    not: [
      'Take patient bookings online.',
      'Send messages to patients on its own.',
      'Diagnose, prescribe or suggest treatment.',
      'Run payroll or file returns.',
    ],
    migration:
      'We bring patient lists, running courses, product stock and dues across from registers, sheets and cards in stages, so the clinic sees patients through the change.',
  },

  faqHeading: 'Questions dermatologists ask.',
  faqs: [
    [
      'Does Verity give clinical or treatment advice?',
      'No. Your doctors decide diagnosis, prescriptions and procedures. Verity records what they decide, tracks courses and reviews, and tells your team what is waiting.',
    ],
    [
      'We already use clinical software for prescriptions. Do we replace it?',
      'You do not have to. If your doctors prefer it, keep it. We agree during setup how the information Verity needs, such as the review date and procedures done, reaches it.',
    ],
    [
      'Where do patient photographs go?',
      'They attach to the patient record and the procedure, visible only to the roles you allow. We agree during setup whether images are held in Verity or stay in another tool with a link on the record.',
    ],
    [
      'Can it send reminders to patients for reviews and sessions?',
      'Not by itself. It builds the list and assigns the call or message to a named person. They send it, and the outcome is recorded.',
    ],
    [
      'Can it track courses where sessions are spaced weeks apart?',
      'Yes. Each course type has its own number of sessions and spacing. Verity shows when the next one is due and who is overdue.',
    ],
    [
      'Is it suitable for a single-doctor clinic?',
      'A one-doctor clinic has the same lost follow-ups and unused sessions, with less time to notice them. We set up only what you need, in the same four weeks.',
    ],
    [
      'Can I see two clinics in one view?',
      'Yes. Each clinic is a location in one system and a patient seen at both is one person. Revenue, room use and stock compare side by side.',
    ],
    [
      'Who can see patient data?',
      'Only the people you allow. Access is set by role, so the desk, doctors, therapists and your accountant each see what they need. Every view and change is logged with person and time.',
    ],
    [
      'What does it cost?',
      'It depends on the number of clinics, providers and what you want set up. Message us and after a short conversation about how your clinic runs, we will give you a clear number.',
    ],
  ],

  related: ['clinics', 'dental-clinics', 'spas', 'salons', 'pharmacies', 'physiotherapy-clinics'],

  ctaHeading: 'Start with the patients who stopped coming.',
  ctaLede:
    'Tell us how your clinic runs and we will show you the overdue reviews, unfinished courses and expiring stock it would find, using your own numbers.',
};
