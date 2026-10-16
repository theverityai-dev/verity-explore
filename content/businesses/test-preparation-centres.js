export default {
  schema: 2,
  slug: 'test-preparation-centres',
  status: 'published',
  plural: 'test preparation centres',
  subject: 'test preparation centre',
  checked: '15 October 2026',

  seo: {
    title: 'Test preparation centre software for mock tests and results | Verity',
    description:
      'The 13 problems that hurt a test prep centre, from exam date changes and paper errors to students who stop attempting tests, and the Verity screens that fix each one.',
    keywords: [
      'test preparation centre software India',
      'mock test series management',
      'test paper and OMR stock tracking',
      'test centre seat allocation',
      'student test performance analysis',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'schedule', 'workforce', 'inventory', 'suppliers', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for test preparation centres',
    headline: 'The paper had a wrong key, the hall was double-booked, and the rank list came out a week late.',
    lede:
      'A test prep centre sells a rhythm: a mock every week, marked quickly, explained clearly. It breaks when a paper is not reviewed, a hall runs out of seats, or results reach students after the next test is already on. Verity runs the calendar of papers, halls, students and results as one chain, so each link has an owner and a date.',
    oneLine:
      'One system for the test calendar, the paper pipeline, the hall, the marking and every student’s result trend.',
    note: 'Your tests, papers and teaching stay yours. Verity records and chases the work around them.',
    screen: 'owner',
    screenNote: 'test calendar, halls, papers, results and fees',
  },

  today: {
    heading: 'A good test series is a production line. Most are run from a WhatsApp group.',
    paragraphs: [
      'Every weekend a centre has to set papers, have them reviewed, print them, seat the students, invigilate, collect the sheets, mark them, publish ranks and explain the paper. That is eight steps with different people, and each one can quietly fail.',
      'The tools are usually a shared drive for papers, a register for seat numbers, a spreadsheet for marks and a WhatsApp group for the teachers. Everyone knows their part. No one can say, on Thursday, which of Sunday’s ten papers is still unreviewed or whether the answer keys are checked.',
      'What students feel is the result: a delayed rank list, a disputed question, a seat that was not there. What the owner feels is quieter: test-series students who stop attempting after three papers and do not renew.',
    ],
    stack: ['Shared drive for papers', 'Seat register', 'Marks spreadsheet', 'WhatsApp group of teachers', 'Enrolment forms and receipts'],
    stackNote: 'Each does its own job. None shows the whole chain from paper to result.',
  },

  painsHeading: 'Where a test preparation centre loses students and trust.',
  painsLede:
    'These are the situations centre owners and test coordinators describe. For each: what it looks like in a test week, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Calendar',
      title: 'The official exam date moves and the whole series has to be rebuilt',
      scene:
        'The national agency publishes a calendar, then shifts a date. Your mock series was planned around the old one. Teachers redo the schedule on paper, and students hear of changes through different groups.',
      cost:
        'Mocks that land too close to or too far from the real exam, and students who feel the centre is not in step with the exam. Calendars from the national agency are published as tentative and can change.',
      fix:
        'Each exam has a date record, and your tests are linked to it. If the date moves, Verity lists the papers and halls affected and creates one task per owner to reschedule.',
      screen: 'calendar',
      source: {
        name: 'Careers360 on the NTA calendar, September 2026',
        url: 'https://news.careers360.com/nta-exam-calendar-2026-27-out-jee-main-ugc-net-cmat-cuet-pg-nittt-nift-csir-net-aissee-exam-dates-schedule-nta-ac-in',
      },
    },
    {
      area: 'Papers',
      title: 'A paper goes out with a wrong key or an ambiguous question',
      scene:
        'The paper is set on Friday night by one teacher and printed on Saturday morning. During the test a student points out a question with two correct options. The results are re-run and the rank list changes.',
      cost:
        'Students lose faith in the series, challenge the ranks, and the next week’s turnout drops. Re-marking takes a day of the coordinator’s time.',
      fix:
        'Each paper moves through set, review, key check and approval, with a named person at each step and a date. A paper cannot be marked ready for print until the steps are signed, and errors found afterwards are logged against the paper.',
      screen: 'papers',
    },
    {
      area: 'Papers',
      title: 'Question banks repeat, and nobody knows which questions were used',
      scene:
        'The same question appears in a Sunday test and again in a Wednesday sectional. Two teachers pulled it from the same source. Students notice before you do.',
      cost:
        'Inflated marks, wasted test slots, and parents who ask why their child saw the same question twice.',
      fix:
        'Every question is recorded with its topic and the papers it has been used in. Setting a new paper shows what has been used recently, so repeats are caught at the review step.',
      screen: 'papers',
    },
    {
      area: 'Papers',
      title: 'Printed papers and OMR sheets run short on test morning',
      scene:
        'A hundred and sixty students are expected. Printing was for 140 because the last count was stale. Teachers photocopy during the first ten minutes.',
      cost:
        'Late starts, unequal conditions for students, and printing at emergency rates.',
      fix:
        'Expected attendance is read from the hall allotment and confirmed seat count. Paper and OMR sheets are stock with a count, a reorder point and a printer lead time, and a shortfall is flagged before the print date.',
      screen: 'papers',
    },
    {
      area: 'Hall',
      title: 'Seats are given by phone, double-booked, or left empty',
      scene:
        'Sunday’s hall has 120 seats. Walk-in students, test-series students and a visiting batch are all promised seats. Eleven turn up without one, and forty seats stay empty because the others did not come.',
      cost:
        'Students sent away or seated badly, and a hall that costs the same whether full or half empty.',
      fix:
        'Each test has a hall, capacity and seat list. Staff allot seats to students against their enrolment, and Verity shows free seats and the previous turnout rate so you can allot sensibly. It does not take bookings from students directly.',
      screen: 'hall',
    },
    {
      area: 'Hall',
      title: 'Attendance and attempt records are written on paper and typed in later',
      scene:
        'Invigilators mark presence on a sheet. The sheet is typed in on Monday. By then the marking has started on a list that does not match.',
      cost:
        'Marks entered against the wrong student, absentees who get ranked, and rank disputes that take hours to resolve.',
      fix:
        'Presence is recorded per student per test at the hall. Marking and ranks use the same list, so an absentee cannot appear in the ranking and a late arrival is noted.',
      screen: 'hall',
    },
    {
      area: 'Results',
      title: 'Results arrive after the next test is already on',
      scene:
        'Sheets are collected on Sunday. Marking is shared among five teachers. By Wednesday three have finished. The rank list comes out on Friday, the day before the next test.',
      cost:
        'A mock is only useful if the student can learn from it before the next one. Late results waste the learning and give parents a reason to ask for refunds.',
      fix:
        'Each batch of answer sheets is assigned to a marker with a due time. Verity shows how many are marked, how many remain, and who is slow, so the coordinator can reshuffle on Monday and not on Thursday.',
      screen: 'analysis',
    },
    {
      area: 'Results',
      title: 'Analysis is made for toppers and never reaches the rest',
      scene:
        'The rank list celebrates the top ten. The student at rank 340 who is losing marks in one topic every week has no one telling them.',
      cost:
        'The majority of students pay for improvement and get a number. They do not see value and do not renew.',
      fix:
        'Marks are recorded by topic. Each student sees a trend and a short list of weakest topics, and a mentor task is created when a student is down three tests in a row.',
      screen: 'analysis',
    },
    {
      area: 'Students',
      title: 'Test-series students attempt a few papers and fade',
      scene:
        'A hundred students enrol for a 24-paper series. By paper eight, only 60 are sitting it. No one noticed who stopped, or when.',
      cost:
        'The series was paid in advance, so the revenue is safe. The renewal, and the word-of-mouth that comes with it, is not.',
      fix:
        'Each student’s attempts are counted against the series. Anyone who misses two papers in a row is on the mentor’s list with their last score, and the reason for their break is noted.',
      screen: 'owner',
    },
    {
      area: 'Students',
      title: 'Repeat candidates are tracked in nobody’s notebook',
      scene:
        'A student is on her second attempt at the exam. Her first-year scores, weak areas and what she tried are in last year’s register, which is in a cupboard.',
      cost:
        'The centre starts her from zero, and the parent senses it.',
      fix:
        'A student stays one record across attempts and years. Previous scores, topic trends and notes show on the page, so the second year starts from what was learned in the first.',
      screen: 'analysis',
    },
    {
      area: 'Fees',
      title: 'Full-course, test-only and crash-course students are mixed up',
      scene:
        'Some students joined the full course and get the tests free. Some are test-only. Some joined a four-week crash course. The front desk checks a list to see who is entitled to which paper.',
      cost:
        'Free papers handed to people who did not pay, or students turned away who did. Both are expensive in a small community.',
      fix:
        'Each enrolment is a plan with its entitlements and dates. Seat allotment checks the plan, and renewals and instalments appear against it.',
      screen: 'fees',
    },
    {
      area: 'Fees',
      title: 'Instalments and renewals are chased by whoever remembers',
      scene:
        'The second instalment of a ₹30,000 course was due last week. The counsellor who took the admission has left. No one has called.',
      cost:
        'Cash flow delayed and relationships cooled. The Ministry of Education’s 2024 guidelines also expect a pro-rata refund within 10 days if a student who paid in full leaves midway, so records must be exact.',
      fix:
        'Every plan has instalment dates and a named follow-up person. Overdue ones are on a daily list with the promise given. A refund shows attended tests and classes beside the amount due.',
      screen: 'fees',
      source: {
        name: 'Careers360 on the Ministry of Education guidelines, January 2024',
        url: 'https://news.careers360.com/no-student-below-16-rank-guarantee-performance-based-batches-public-results-norms-for-coaching-centres-moe',
      },
    },
    {
      area: 'Compliance',
      title: 'Advertised ranks and selections cannot be backed with records',
      scene:
        'A banner says "58 selections from our test series". Some of those students only bought one mock paper. No one asked them for written consent to use their names.',
      cost:
        'The 2024 consumer authority guidelines bar false claims about selections and ranks and expect written consent from successful candidates. A complaint costs a penalty and a good deal of reputation.',
      fix:
        'Each result links to the student, the plan they bought and the dates, with a consent document. Before a claim is printed, you can check how many were enrolled in what.',
      screen: 'fees',
      source: {
        name: 'DT Next on the CCPA guidelines, November 2024',
        url: 'https://www.dtnext.in/news/national/centre-issues-guidelines-to-crack-down-on-misleading-ads-by-coaching-centres-811047',
      },
    },
  ],

  factsHeading: 'The numbers behind the test preparation business.',
  factsLede: 'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '22 to 24 Jan 2027',
      text: 'is the first proposed block of days for JEE Main 2027 Session 1, followed by 28 to 30 January, with 31 January as a buffer. The national agency calls its calendar tentative.',
      source: { name: 'Careers360 on the NTA exam calendar', year: '2026', url: 'https://news.careers360.com/nta-exam-calendar-2026-27-out-jee-main-ugc-net-cmat-cuet-pg-nittt-nift-csir-net-aissee-exam-dates-schedule-nta-ac-in' },
    },
    {
      figure: '14 to 19 Dec 2026',
      text: 'is the proposed window for the UGC NET December 2026 cycle, with 20 and 21 December as buffer days. Centres serving postgraduate exams plan mock series around dates like these.',
      source: { name: 'Careers360 on the NTA exam calendar', year: '2026', url: 'https://news.careers360.com/nta-exam-calendar-2026-27-out-jee-main-ugc-net-cmat-cuet-pg-nittt-nift-csir-net-aissee-exam-dates-schedule-nta-ac-in' },
    },
    {
      figure: '27%',
      text: 'of school students used private coaching in the 2025 national education survey, with higher use in urban areas, at 30.7%.',
      source: { name: 'Careers360 on the CMS: Education 2025, MoSPI', year: '2025', url: 'https://news.careers360.com/27-of-students-rely-on-private-coaching-urban-participation-higher-cms-education-survey-2025' },
    },
    {
      figure: 'Written consent',
      text: 'is needed before a coaching centre uses a successful candidate’s name, photo or testimonial in an advertisement, under 2024 consumer authority guidelines.',
      source: { name: 'DT Next', year: '2024', url: 'https://www.dtnext.in/news/national/centre-issues-guidelines-to-crack-down-on-misleading-ads-by-coaching-centres-811047' },
    },
  ],
  factsNote:
    'The exam dates are proposals reported by a news site and may have changed. The coaching figure covers school students, not all exam candidates. Check the agency’s own site for current dates.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each for one job. Test names, exams and batches use your centre’s own words.',
  screens: [
    {
      id: 'owner',
      title: 'Centre / Today',
      meta: 'Test week 41',
      heading: 'The coordinator’s test-week page',
      caption:
        'Papers still to be signed, hall seats, marking progress, students who stopped attempting and fees due, all on one page for the days before and after a test.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Papers ready', value: '6 of 9', note: 'for Sunday' },
            { label: 'Hall seats free', value: '34', note: 'of 240' },
            { label: 'Sheets marked', value: '61%', note: 'due Tuesday' },
            { label: 'Students fading', value: '27', note: 'missed 2 in a row' },
          ],
        },
        { type: 'title', text: 'Attempt rate across the 24-paper series' },
        {
          type: 'bars',
          items: [
            { label: 'Paper 1', value: 96, display: '96%' },
            { label: 'Paper 5', value: 81, display: '81%' },
            { label: 'Paper 9', value: 64, display: '64%', tone: 'muted' },
            { label: 'Paper 13', value: 58, display: '58%', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Paper 14 key not checked. Printing is booked for Friday.', action: 'Assign review' },
        {
          type: 'list',
          items: [
            { name: 'Unmatched OMR sheets from Sunday', meta: '7 sheets with no student number', tag: ['Match', 'flag', 'Matched', 'ok'] },
            { name: 'Second instalment, 14 students', meta: 'Overdue more than 7 days', tag: ['Call', 'late'] },
          ],
        },
      ],
    },
    {
      id: 'calendar',
      title: 'Test calendar',
      meta: 'JEE Main and CUET series',
      heading: 'Every test tied to the exam it prepares for',
      caption:
        'Each series is linked to its exam date. If the official date changes, the papers, halls and invigilators affected are listed and the owners get a task.',
      blocks: [
        {
          type: 'table',
          cols: ['Test', 'Date', 'Exam linked', 'Hall', 'Status'],
          rows: [
            ['Full mock 14', 'Sun 19 Oct', 'JEE Main Jan 2027', 'Hall A', ['Key unchecked', 'late', 'Signed off', 'ok']],
            ['Sectional: Physics', 'Wed 22 Oct', 'JEE Main Jan 2027', 'Room 3', ['Ready', 'ok']],
            ['Full mock 15', 'Sun 26 Oct', 'JEE Main Jan 2027', 'Hall A', ['Set, in review', 'flag']],
            ['CUET sectional 6', 'Sat 1 Nov', 'CUET UG 2027', 'Hall B', ['Not set', 'late', 'Assigned', 'info']],
          ],
        },
        { type: 'alert', text: 'Exam date shifted by 6 days. 5 mocks and 2 hall bookings need review.', action: 'Review' },
      ],
    },
    {
      id: 'papers',
      title: 'Papers and stock',
      meta: 'Set, review, print',
      heading: 'Each paper through its steps, and the sheets to print it',
      caption:
        'The steps a paper has to pass before print, the questions it uses, and the stock of paper and OMR sheets against the next print date.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'In review',
              cards: [
                { title: 'Full mock 15', meta: 'Set by Mr. Khanna. Reviewer: Dr. Nair', tag: ['Review', 'flag', 'Approved', 'ok'] },
                { title: 'CUET sectional 6', meta: 'Set by Ms. Dutta. Key check pending', tag: ['Key check', 'late'] },
              ],
            },
            {
              name: 'Stock for Sunday',
              cards: [
                { title: 'OMR sheets', meta: '140 in stock, 240 needed', tag: ['Short', 'late', 'Ordered', 'ok']},
                { title: 'A4 paper, reams', meta: '12 in stock, 10 needed', tag: ['OK', 'ok'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hall',
      title: 'Hall and attendance',
      meta: 'Sunday full mock',
      heading: 'Seats, presence and sheets for each test',
      caption:
        'Capacity, seats allotted by enrolment type, who was present and the sheets collected, so the marking list is the same list as the hall.',
      blocks: [
        {
          type: 'table',
          cols: ['Group', 'Enrolled', 'Seats allotted', 'Present', 'Sheets'],
          rows: [
            ['Full course', '120', '120', '112', '112'],
            ['Test series only', '96', '96', '71', ['69', 'flag', '71', 'ok']],
            ['Crash course', '40', '34', '31', '31'],
            ['Walk-in, paid per test', '18', '10', '9', '9'],
          ],
        },
        { type: 'alert', text: '8 crash course students have no seat for Sunday. Hall B has 34 free.', action: 'Allot' },
      ],
    },
    {
      id: 'analysis',
      title: 'Results and student trend',
      meta: 'Marking and analysis',
      heading: 'Marking progress and what each student should work on',
      caption:
        'Sheets marked, sheets remaining, and each student’s score trend with weakest topics, so the results reach the many, not just the top ten.',
      blocks: [
        {
          type: 'record',
          title: 'Meera Pillai, second attempt',
          sub: 'Test series, JEE Main. Mentor: Mr. Khanna',
          fields: [
            ['Papers attempted', ['14 of 16', 'ok']],
            ['Last 5 scores', '162, 158, 149, 141, 139 of 300'],
            ['Weakest topics', 'Rotational motion, Organic reactions'],
            ['Last year', 'Final mock average 171'],
            ['Status', ['Falling, 3 tests', 'late', 'Mentor call done', 'ok']],
          ],
          timeline: [
            ['15 Oct', 'Mock 13: 139. Mentor task created'],
            ['8 Oct', 'Mock 12: 141. Missed one sectional'],
            ['Last year', 'First attempt: 171 average, 94 percentile in the final mock'],
            ['Note', 'Slow in calculations. Try timed sectionals.'],
          ],
        },
        { type: 'alert', text: '412 of 680 sheets marked. Marker Mr. Rao has 90 left and is due Tuesday.', action: 'Reassign' },
      ],
    },
    {
      id: 'fees',
      title: 'Plans, fees and claims',
      meta: 'Enrolments',
      heading: 'What each student bought and what they owe',
      caption:
        'Each student’s plan with entitlements, instalments, refund workings and a consent document for any result you advertise.',
      blocks: [
        {
          type: 'table',
          cols: ['Student', 'Plan', 'Instalment', 'Consent', 'Status'],
          rows: [
            ['Karan Bhatia', 'Test series, 24 papers', '₹6,000 due 25 Oct', 'Not asked', ['Reminder', 'flag', 'Paid', 'ok']],
            ['Meera Pillai', 'Test series + mentor', '₹9,000 paid', 'On file', ['Paid', 'ok']],
            ['Aditya Kulkarni', 'Full course', '₹30,000 due 12 Oct', 'Not asked', ['Overdue 7 days', 'late', 'Paid', 'ok']],
            ['Pranav Sethi', 'Crash course', '₹12,000 paid', 'Not asked', ['Paid', 'ok']],
          ],
        },
        { type: 'alert', text: 'Banner draft says 58 selections. Records show 41 on the full course and 17 test-only.', action: 'Check' },
      ],
    },
  ],

  dayHeading: 'The same test Sunday, before and after.',
  dayLede: 'The tests are the same. What changes is that every step has an owner and a time, so the chain does not break at the weakest link.',
  day: [
    {
      time: 'Thursday',
      before: 'The coordinator asks the group who has finished their paper. Three say yes. Two do not reply.',
      after: 'The papers board shows two papers still in review, with names and times, and the key check is assigned.',
    },
    {
      time: 'Saturday',
      before: 'Printing is based on the last count. The hall has 22 seats too few.',
      after: 'The count comes from the allotment, and Hall B is added with a printing note.',
    },
    {
      time: 'Sunday 9 am',
      before: 'Invigilators mark presence on paper. A late student has no seat number.',
      after: 'Presence is taken on the seat list. The late student’s seat is in Hall B.',
    },
    {
      time: 'Sunday 1 pm',
      before: 'Sheets come in as a pile. No one counts them against the hall.',
      after: 'Sheets collected match presence, and 7 missing numbers are flagged before anyone leaves.',
    },
    {
      time: 'Tuesday',
      before: 'Marking is half done and no one knows who is slow.',
      after: 'The marking screen shows 61% done, and the coordinator moves 90 sheets to a free teacher.',
    },
    {
      time: 'Wednesday',
      before: 'Results go out on Friday, a day before the next test.',
      after: 'Results go out on Wednesday, with topic notes for the lowest scorers, and mentor calls are assigned.',
    },
  ],

  approach: {
    heading: 'We set it up with you in four weeks, inside a real test cycle.',
    lede:
      'We learn how your tests run, build Verity around them, move students and papers in, and stay on through the first full series.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Sit through a full test week with you. Follow one paper from setting to printing, one student from seat allotment to rank, and one fee from admission to renewal.',
        you: 'Two to three hours of your time and an hour each from the test coordinator and the head marker. A sample paper and marks sheet.',
        get: 'A written map of your test chain, halls, plans and roles, and the first few breaks we will close.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up exam calendars, series, paper steps, halls and seat rules, plans with entitlements, marker assignments, topic lists and stock items, and build the screens above using your terms.',
        you: 'Check the paper steps and entitlements. Tell us where a rule differs from how you run it.',
        get: 'A working Verity with your series, halls and plans in place, ready for students.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in the student list with plans, past scores, question bank tags and fee status from your sheets. Train coordinator, markers and the front desk during a live test.',
        you: 'Your student list, scores and question bank as they are. An hour with each role, then one live Sunday.',
        get: 'One full test cycle run on Verity, with results out on time.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Review the first series with you. Tune the reminders, set up the next exam cycle, and handle the date changes the agency announces.',
        you: 'A short monthly review.',
        get: 'A system that follows the exam calendar and your centre’s changes, with someone responsible for it.',
      },
    ],
    bring: [
      'The student list with plan, series and batch',
      'Hall details: rooms, seats and layout',
      'Past two series of marks, even in a sheet',
      'The question bank or paper folder structure',
      'Your fee plans, instalment dates and marker payment rates',
    ],
    time: 'About 9 to 12 hours of your own time across the four weeks, mostly in week 1. The test coordinator and head marker need several more.',
    after: 'Nobody is hired to run Verity. Coordinators, markers and the front desk record what they already do, and the lists come from those records.',
  },

  ai: {
    heading: 'Ask the centre a question. Get an answer, not a sheet to sort.',
    lede:
      'Verity AI reads your own papers, hall, marks and fee records. Ask in plain language, then turn the answer into tasks.',
    examples: [
      {
        q: 'Which test-series students have missed two papers in a row?',
        a: '27 students. Eleven are on the 24-paper series and four have an instalment due this week.',
        rows: [['JEE series', '14'], ['CUET series', '8'], ['NEET series', '5']],
        action: 'Create mentor calls for each group',
      },
      {
        q: 'Which topics did students lose most marks on in the last mock?',
        a: 'Rotational motion and organic reactions. Average loss was 41% of available marks on each.',
        rows: [['Rotational motion', '41%'], ['Organic reactions', '41%'], ['Probability', '33%']],
        action: 'Plan a revision session for the weakest topics',
      },
      {
        q: 'Will we have enough OMR sheets for next Sunday?',
        a: 'No. 140 are in stock and 240 are needed for next Sunday. The printer needs three days.',
        action: 'Raise the order today',
      },
    ],
  },

  automationHeading: 'The chasing nobody has time for.',
  automationLede: 'Set once, then they run from your records. Staff still decide and send, Verity makes sure the right person knows and when.',
  automations: [
    {
      when: 'An exam date changes',
      then: ['Linked tests, halls and invigilators listed', 'Task to each owner to reschedule', 'Changes recorded on the calendar'],
    },
    {
      when: 'A paper is set',
      then: ['Reviewer and key checker assigned', 'Repeat questions highlighted', 'Print ready only after both sign off'],
    },
    {
      when: 'A test is five days away',
      then: ['Seat count worked out from enrolment', 'Paper and OMR stock checked', 'Short items flagged with printer lead time'],
    },
    {
      when: 'Sheets are collected',
      then: ['Matched against presence', 'Assigned to markers with due times', 'Late markers flagged to the coordinator'],
    },
    {
      when: 'A student falls for three tests in a row',
      then: ['Weakest topics listed', 'Mentor call assigned', 'Outcome recorded before the next test'],
    },
    {
      when: 'An instalment is overdue',
      then: ['Shown on the front desk list', 'Promise date recorded', 'Moved up if the promise is missed'],
    },
  ],

  rules: {
    heading: 'The rules a test preparation centre should keep in view.',
    lede: 'Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order.',
    items: [
      {
        name: 'Ministry of Education coaching guidelines, 2024',
        what: 'The guidelines say centres should register, should not enrol students below 16, charge fair fees with receipts, and refund unused fees pro rata within 10 days when a student who paid in full leaves midway. Coaching is mainly regulated by states, so local rules may differ.',
        how: 'Dates of birth, plans, receipts and attendance are kept as records so a refund calculation or an enquiry from an authority starts from facts.',
        source: { name: 'Careers360, January 2024', url: 'https://news.careers360.com/no-student-below-16-rank-guarantee-performance-based-batches-public-results-norms-for-coaching-centres-moe' },
      },
      {
        name: 'Misleading advertisement rules for coaching',
        what: 'Consumer authority guidelines from 2024 bar claims of 100 per cent selection and false claims about ranks, courses, faculty, fees and refunds, and expect written consent from successful candidates whose names or photos are used.',
        how: 'Each result is tied to the student, the plan bought and the dates, with a consent document on the record.',
        source: { name: 'DT Next, November 2024', url: 'https://www.dtnext.in/news/national/centre-issues-guidelines-to-crack-down-on-misleading-ads-by-coaching-centres-811047' },
      },
      {
        name: 'Fairness and confidentiality of papers',
        what: 'A centre that sets papers is responsible for keeping them from leaking before the test and for correcting errors openly. Public exams have been disrupted by paper problems, so students watch closely.',
        how: 'Each paper has named handlers at each step and a record of who opened or changed it, so access is traceable.',
      },
      {
        name: 'Students’ personal data',
        what: 'Names, phone numbers, scores and school details are personal data, and many students are minors. India’s data protection rules notified in November 2025 start to apply in stages, so check dates with your adviser.',
        how: 'Data lives in one permissioned place. Markers see sheets and not fee details, and views and changes are recorded.',
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your legal adviser or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A marker should not see fees. The front desk should not edit marks. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Is the series growing and renewing?', sees: 'Attempt rates, renewals, results turnaround, hall use, fees due and papers with errors.' },
    { role: 'Test coordinator', question: 'Is the chain on time?', sees: 'Paper steps, hall seats, sheet counts, marking progress, stock for the next print.' },
    { role: 'Question setter or reviewer', question: 'Which papers are waiting for me?', sees: 'Their papers to set or review, key checks, used-question history for topics they cover.' },
    { role: 'Marker or mentor', question: 'Which sheets and students are mine?', sees: 'Sheets assigned with due time, and mentor calls with each student’s trend.' },
    { role: 'Front desk', question: 'Who has a seat and who owes?', sees: 'Enrolments, entitlements, seat allotments, instalments due and receipts.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your online test platform or OMR scanner, if you use one. We agree how marks reach Verity during setup.',
      'Your shared drive for papers. Verity records the steps and links to the files.',
      'WhatsApp groups for students and teachers. Staff send the messages, Verity tells them what and to whom.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Host or proctor online tests.',
      'Take enrolments or payments from students online.',
      'Send messages to students or parents on its own.',
      'Set papers or mark answers for you.',
    ],
    migration:
      'We bring in your students, plans, past scores and question tags from your sheets and folders, in stages, so the series continues during the move.',
  },

  faqHeading: 'Questions test centre owners ask.',
  faqs: [
    [
      'We run tests on an online platform. Does Verity replace it?',
      'No. Your platform keeps running the tests. Verity records the marks that come from it and manages the people, halls, plans and chasing around the test.',
    ],
    [
      'Can Verity set or mark the papers?',
      'No. Your teachers set and mark. Verity tracks the steps, who is responsible, how many sheets remain and where results are late.',
    ],
    [
      'Can students book seats themselves?',
      'Not through Verity. Staff allot seats against each student’s plan, and Verity shows free seats and past turnout so you can allot sensibly.',
    ],
    [
      'We run several exams, such as JEE, CUET and banking. Is that a problem?',
      'No. Each exam has its own calendar, series and plans, and a student can be in more than one. The coordinator’s page shows all of them together.',
    ],
    [
      'How does it handle the official exam date changing?',
      'Each series is linked to its exam date. When you change the date, Verity lists the papers, halls and people affected and gives each owner a task to reschedule.',
    ],
    [
      'Can I see which teachers set the weakest papers?',
      'Yes, as numbers: errors found per paper, question repeats and student feedback on each setter’s papers. They are for a conversation, not a verdict.',
    ],
    [
      'Who can see students’ scores and fees?',
      'Only the people you allow. Markers see sheets, mentors see their students, the front desk sees fees, and every view and change is recorded.',
    ],
    [
      'How quickly will we see something useful?',
      'The paper steps board, the stock check and the fading-students list work as soon as your papers and students are loaded. Trends improve over the first two series.',
    ],
    [
      'What does it cost?',
      'It depends on the number of halls, students and exams you want set up. Message us and we will give you a clear number after a short conversation about how your centre runs.',
    ],
  ],

  related: ['coaching-institutes', 'tuition-centres', 'edtech-companies', 'language-institutes', 'skill-training-institutes', 'colleges'],

  ctaHeading: 'Start with the next test week.',
  ctaLede:
    'Tell us how your tests run and we will show you the papers waiting for review, the seats short and the students fading, using your own numbers.',
};
