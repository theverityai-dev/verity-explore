export default {
  schema: 2,
  slug: 'pharmacies',
  status: 'published',
  plural: 'pharmacies',
  subject: 'pharmacy',
  checked: '15 October 2026',

  seo: {
    title: 'Pharmacy management software: expiry, H1 register, stock | Verity',
    description:
      'The 14 problems that cost a pharmacy money and compliance risk, and the Verity screens that fix them: expiry losses, H1 register, refills, distributor prices, store stock.',
    keywords: [
      'pharmacy management software India',
      'medical store expiry tracking',
      'schedule H1 register software',
      'chemist stock and batch tracking',
      'multi-store pharmacy inventory',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'inventory', 'suppliers', 'orders', 'workforce', 'locations', 'ai'],

  hero: {
    eyebrow: 'Verity for pharmacies',
    headline: 'Expired stock, missing registers, lost refills. Verity catches them before they cost you.',
    lede:
      'A pharmacy carries thousands of products with batch numbers and expiry dates, sells under strict record-keeping rules, and competes with online prices. Almost all of that is tracked by memory and paper. Verity puts stock, batches, registers, patients and distributors in one place.',
    oneLine:
      'One system that knows every batch, every expiry date, every regulated sale and every regular patient, and tells you what to act on today.',
    note: 'It works alongside your billing software. It does not replace the counter.',
    screen: 'owner',
    screenNote: 'stores, distributors and product list',
  },

  today: {
    heading: 'A pharmacy is a stock business with a legal register attached.',
    paragraphs: [
      'The margin is in buying well and selling before the date on the strip. Every product has a batch and an expiry. A medicine that expires on the shelf is a direct loss, and one that runs out sends a regular patient to the next shop.',
      'Alongside that sits the paperwork: prescriptions for certain schedules, a separate register for Schedule H1 drugs, a registered pharmacist on the premises, and an inspector who can ask for any of it. Most shops keep this in notebooks beside the counter.',
      'On top of both, online pharmacies are competing on price, so the owner has less margin to waste and less time to notice leaks.',
    ],
    stack: ['Billing software', 'Handwritten H1 register', 'Distributor bills in files', 'WhatsApp with distributors', 'Owner’s memory of expiries'],
    stackNote: 'Each tracks one piece. Nothing tells you which batches expire next month or whether the register is complete.',
  },

  painsHeading: 'Where a pharmacy loses money and takes risk.',
  painsLede:
    'These are situations chemists describe. For each: what it looks like, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Stock',
      title: 'Medicines expire on the shelf',
      scene:
        'A slow-moving injection from a distributor scheme is bought in bulk. Nobody notices it is six weeks from expiry until a sweep of the shelf, or until it is too late to return.',
      cost:
        'A direct write-off of stock bought and paid for. One vendor puts expiry at 8 to 12 percent of inventory value for multi-store chains, which is a marketing figure, but the direction is real.',
      fix:
        'Every purchase records batch and expiry. Verity lists what expires in 30, 60 and 90 days by value, sorted by what can still be returned, discounted or moved to a busier store.',
      screen: 'expiry',
      source: { name: 'Commmerce, expiry loss in multi-store pharma (vendor)', url: 'https://commmerce.com/blog/multi-store-pharma-inventory-sync-cut-medicine-expiry-loss-60-percent-india/' },
    },
    {
      area: 'Stock',
      title: 'Fast movers run out while slow movers pile up',
      scene:
        'The best-selling paracetamol and the patient’s regular thyroid tablet are out on a Monday. A shelf of rarely asked products sits untouched.',
      cost:
        'A lost sale today, a patient who may switch shops, and cash locked in stock that does not sell.',
      fix:
        'Reorder points are set per product from actual sales. Verity flags items below their level and items with no movement in 90 days, so buying follows demand.',
      screen: 'owner',
    },
    {
      area: 'Stock',
      title: 'Near-expiry returns and credit notes get forgotten',
      scene:
        'A distributor accepts returns within a window. The bundle is packed late, the credit note is promised and never chased, and the claim is quietly dropped.',
      cost:
        'Returns that should have been refunded become write-offs, and credit notes you are owed sit unclaimed.',
      fix:
        'A return is a record with the batch, the distributor, the date and the expected credit. Verity tracks it to the credit note and lists the ones overdue.',
      screen: 'expiry',
    },
    {
      area: 'Stock',
      title: 'A recalled or flagged batch cannot be traced quickly',
      scene:
        'A batch is flagged as substandard. You have to work out whether you stocked it, how much remains, and who bought it.',
      cost:
        'Selling a flagged batch is a patient-safety risk and a regulatory one, and manual tracing is slow.',
      fix:
        'Because stock and sales are recorded by batch, one search shows whether the batch was bought, what is left on shelves and which sales it went into.',
      screen: 'expiry',
    },
    {
      area: 'Compliance',
      title: 'The Schedule H1 register has gaps',
      scene:
        'The H1 register is a notebook. Entries are written at the end of the day from memory, with a missing prescriber name or an illegible patient name.',
      cost:
        'The rules require the supply to be recorded at the time of supply, with prescriber, patient, drug and quantity, kept for three years and open to inspection. An incomplete register is a compliance failure.',
      fix:
        'H1 drugs are flagged in stock. At sale, the entry cannot close without prescriber, patient and quantity, and the register is searchable and printable for an inspector.',
      screen: 'register',
      source: { name: 'Parliament of India document on Schedule H1', url: 'https://eparlib.nic.in/bitstream/123456789/647575/1/146840.pdf' },
    },
    {
      area: 'Compliance',
      title: 'Prescriptions are not captured for Schedule H and X sales',
      scene:
        'A regular asks for a Schedule H tablet without a prescription and the counter staff sell it to avoid an argument. Nobody can later show what was sold to whom.',
      cost:
        'Sales of prescription drugs without prescription are the very thing inspectors and complaints look for. Licence action is the worst case.',
      fix:
        'Regulated products need a prescription reference at sale. Verity records it, flags exceptions to the pharmacist-in-charge, and shows a monthly exceptions report.',
      screen: 'register',
    },
    {
      area: 'Compliance',
      title: 'Licences, pharmacist registration and inspections live in a drawer',
      scene:
        'The drug licence, the pharmacist’s registration and the premises papers are in a folder. A renewal date is remembered, or not.',
      cost:
        'A lapse can mean penalty or closure, and an inspection with missing paperwork is a bad day.',
      fix:
        'Licences and registrations are records with expiry dates and owners. Verity reminds well in advance and keeps copies where inspectors can be shown them.',
      screen: 'owner',
    },
    {
      area: 'Patients',
      title: 'Regular patients on monthly medicines stop coming and nobody notices',
      scene:
        'A patient who has bought blood pressure tablets every month since 2022 has not come for two months. The shop does not know.',
      cost:
        'A repeat patient is worth far more than a single sale. And a missed refill may be a health risk for them.',
      fix:
        'Chronic patient purchases are recorded against the patient. Verity predicts the next refill date and lists those overdue, with a follow-up task for the counter team.',
      screen: 'refills',
    },
    {
      area: 'Patients',
      title: 'Credit accounts and home deliveries are tracked on paper',
      scene:
        'Regular customers buy on credit and the ledger is a notebook. Home deliveries are noted on a slip, and a delivery boy forgets one.',
      cost:
        'Unrecovered dues, disputes about what was delivered, and unhappy elderly customers.',
      fix:
        'Each credit customer has a balance and ageing. Each delivery is a task with a person, a time and a confirmation, and the balance updates as payments are recorded.',
      screen: 'refills',
    },
    {
      area: 'Suppliers',
      title: 'Distributor prices and schemes are impossible to compare',
      scene:
        'Three distributors quote different rates and schemes for the same molecule. The owner buys from whoever called last.',
      cost:
        'Margin is lost on every purchase made at the wrong rate, and no one can see which distributor is really cheapest after schemes.',
      fix:
        'Purchase rates and schemes are recorded per product and distributor. Verity shows the effective cost after scheme and ranks distributors for what you actually buy.',
      screen: 'suppliers',
    },
    {
      area: 'Suppliers',
      title: 'Distributor payables and scheme claims are tracked by memory',
      scene:
        'Bills pile up, dues are paid when a distributor calls, and promised scheme benefits are never claimed.',
      cost:
        'Missed early-payment discounts, strained supply relationships, and scheme benefits that vanish.',
      fix:
        'Each bill is a payable with a due date and any scheme attached. Verity lists what is due this week and what scheme benefits are still unclaimed.',
      screen: 'suppliers',
    },
    {
      area: 'Money',
      title: 'Margin erodes through discounts and online price pressure',
      scene:
        'Customers show an app price and ask for a discount. Counter staff agree to retain the sale. Nobody sees the effect on margin by product.',
      cost:
        'Online pharmacies are competing on price, and some industry groups say they sell at a loss. Matching that without seeing margin gives away profit.',
      fix:
        'Discounts above a limit need approval, and Verity shows margin by product and by discount, so you decide where to match and where to hold.',
      screen: 'owner',
      source: { name: 'Free Press Journal, Mumbai chemists and e-pharmacies', url: 'https://www.freepressjournal.in/amp/mumbai/mumbai-chemists-on-brink-as-e-pharmacies-trigger-business-crisis-nationwide-protest-planned' },
    },
    {
      area: 'Stock',
      title: 'Stock counts never match the book',
      scene:
        'The system says 12 strips, the shelf holds 9. Some items are gifted, some mis-billed, some simply misplaced.',
      cost:
        'Unexplained shrinkage and a stock value nobody trusts when it is time to reorder or value inventory.',
      fix:
        'Cycle counts are tasks by shelf or category. Verity shows variance per item and per counter staff member, and you correct the cause rather than the number.',
      screen: 'expiry',
    },
    {
      area: 'Owner',
      title: 'Several stores, stock stuck in the wrong one',
      scene:
        'Store A has twelve strips of a medicine that will expire. Store B is out of it. Nobody knows, and the transfer never happens.',
      cost:
        'Both an expiry write-off in one store and a lost sale in the other, from the same product.',
      fix:
        'Stores are locations in one system. Verity matches near-expiry stock in one with demand in another and records the transfer between stores.',
      screen: 'transfers',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede: 'From published sources, named under each figure. Your own numbers will differ, and showing you yours is Verity’s first job.',
  facts: [
    {
      figure: '3 years',
      text: 'is how long the Schedule H1 register must be kept, recording prescriber, patient, drug and quantity at the time of supply.',
      source: { name: 'Parliament of India document', url: 'https://eparlib.nic.in/bitstream/123456789/647575/1/146840.pdf' },
    },
    {
      figure: '~10%',
      text: 'of the market is claimed by online players, according to a Mumbai chemists’ association, which accuses them of selling at a loss.',
      source: { name: 'Free Press Journal', url: 'https://www.freepressjournal.in/amp/mumbai/mumbai-chemists-on-brink-as-e-pharmacies-trigger-business-crisis-nationwide-protest-planned' },
    },
    {
      figure: '30% to under 10%',
      text: 'is the fall in e-pharmacy operating losses forecast from FY2023 to the next fiscal, showing how heavily online competition has been funded.',
      source: { name: 'CRISIL Ratings', year: '2024', url: 'https://integraliq.crisil.com/content/crisilratings/en/home/newsroom/press-releases/2024/12/operating-losses-of-e-pharmacies-seen-falling-below-10percent-next-fiscal.html' },
    },
    {
      figure: '8 to 12%',
      text: 'of inventory value is lost to expiry in multi-store pharma chains, by one vendor’s estimate.',
      source: { name: 'Commmerce (vendor)', url: 'https://commmerce.com/blog/multi-store-pharma-inventory-sync-cut-medicine-expiry-loss-60-percent-india/' },
    },
  ],
  factsNote:
    'One figure is a vendor estimate and one is a trade association claim. They show the direction and scale of the pressure, not what your pharmacy will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Six views, each for one job. Products, stores and distributors are set up in your own terms.',
  screens: [
    {
      id: 'owner',
      title: 'Pharmacy / Today',
      meta: 'All stores',
      heading: 'The owner’s morning view',
      caption:
        'Sales, expiring stock, refills due and low stock in one place, with the exceptions that need a decision listed beneath.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sales yesterday', value: '₹2.4 L', note: '3 stores' },
            { label: 'Expiring in 60 days', value: '₹48,600', note: 'at cost' },
            { label: 'Refills due', value: '63', note: 'patients' },
            { label: 'Below reorder', value: '41', note: 'products' },
          ],
        },
        { type: 'title', text: 'Margin by category, this month' },
        {
          type: 'bars',
          items: [
            { label: 'Generics', value: 34, display: '34%' },
            { label: 'Branded Rx', value: 21, display: '21%' },
            { label: 'OTC and wellness', value: 29, display: '29%' },
            { label: 'Surgical', value: 18, display: '18%', tone: 'muted' },
          ],
        },
        { type: 'alert', text: '2 H1 entries yesterday are missing a prescriber name.', action: 'Complete' },
        {
          type: 'list',
          items: [
            { name: 'Pharmacist licence renewal', meta: 'Due in 26 days, Anil Verma', tag: ['Assign', 'flag', 'Assigned', 'ok'] },
            { name: 'Discount above limit', meta: '2 approvals pending', tag: ['Review', 'flag'] },
          ],
        },
      ],
    },
    {
      id: 'expiry',
      title: 'Expiry and returns',
      meta: 'Next 90 days',
      heading: 'Expiry and returns, with a deadline on each',
      caption:
        'Batches nearing expiry, sorted by value and by how long you can still return, discount or transfer them.',
      blocks: [
        {
          type: 'table',
          cols: ['Medicine', 'Batch', 'Expires', 'Qty', 'Value', 'Action'],
          rows: [
            ['Inj. Pantoprazole', 'PT2407', '12 Nov', '40', '₹6,400', ['Return', 'late', 'Returned', 'ok']],
            ['Metformin 500', 'MF8812', '30 Nov', '220', '₹2,860', ['Move to Store B', 'flag']],
            ['Cough syrup 100 ml', 'CS3320', '18 Dec', '65', '₹3,900', ['Discount', 'flag']],
            ['Amoxicillin 500', 'AX1190', '9 Jan', '120', '₹4,320', ['Watch', 'muted']],
          ],
        },
        { type: 'alert', text: 'Credit note for 14 Sept return from Medico Distributors is 12 days overdue.', action: 'Chase' },
      ],
    },
    {
      id: 'register',
      title: 'Registers',
      meta: 'Schedule H1 and H',
      heading: 'A register that cannot be left incomplete',
      caption:
        'Regulated products need a prescriber, a patient and a quantity before the sale closes. The register is searchable and can be shown to an inspector at any time.',
      blocks: [
        {
          type: 'table',
          cols: ['Date', 'Drug', 'Patient', 'Prescriber', 'Qty', 'Entry'],
          rows: [
            ['14 Oct', 'Alprazolam 0.25', 'R. Iyer', 'Dr. Sharma', '10', ['Complete', 'ok']],
            ['14 Oct', 'Tramadol 50', 'S. Banerjee', 'Dr. Rao', '10', ['Complete', 'ok']],
            ['14 Oct', 'Clonazepam 0.5', 'A. Khan', '', '10', ['No prescriber', 'late', 'Fixed', 'ok']],
            ['13 Oct', 'Levofloxacin 750', 'M. Das', 'Dr. Nair', '5', ['Complete', 'ok']],
          ],
        },
        { type: 'alert', text: 'Prescription-only sales without a prescription reference this month: 3, each assigned to the pharmacist-in-charge.', action: 'Review' },
      ],
    },
    {
      id: 'refills',
      title: 'Patients',
      meta: 'Refills and credit',
      heading: 'Regular patients, refills and credit in one list',
      caption:
        'Patients on monthly medicines with their next refill date, and credit balances with their ageing. A follow-up is a task for a named person.',
      blocks: [
        {
          type: 'list',
          items: [
            { name: 'Kamla Devi', meta: 'Amlodipine 5, last bought 8 Sep, due 8 Oct', tag: ['Call', 'late', 'Refilled', 'ok'] },
            { name: 'R. Subramanian', meta: 'Thyroxine 75, last bought 15 Sep, due 15 Oct', tag: ['Due today', 'flag'] },
            { name: 'Meena Joshi', meta: 'Metformin 500, last bought 20 Sep, due 20 Oct', tag: ['Due soon', 'muted'] },
          ],
        },
        {
          type: 'table',
          cols: ['Credit customer', 'Balance', 'Oldest bill', 'Status'],
          rows: [
            ['Gupta family', '₹4,820', '34 days', ['Remind', 'flag', 'Paid ₹2,000', 'ok']],
            ['Suresh Nursing Home', '₹21,400', '52 days', ['Escalate', 'late']],
          ],
        },
      ],
    },
    {
      id: 'suppliers',
      title: 'Distributors',
      meta: 'Prices and dues',
      heading: 'The real cost of what you buy',
      caption:
        'Price and scheme from each distributor for the same product, with what you owe and when.',
      blocks: [
        {
          type: 'table',
          cols: ['Product', 'Medico', 'Apex', 'Sri Ram', 'Best'],
          rows: [
            ['Atorvastatin 10', '₹54.0', '₹52.5', '₹53.2', ['Apex', 'ok']],
            ['Pantoprazole 40', '₹88.0', '₹86.0', '₹84.5', ['Sri Ram', 'ok']],
            ['Telmisartan 40', '₹71.0', '₹74.0', '₹72.0', ['Medico', 'ok']],
          ],
        },
        {
          type: 'list',
          items: [
            { name: 'Medico Distributors', meta: '₹1.4 L due 20 Oct. 2% early-payment discount if paid by 17 Oct', tag: ['Pay early', 'flag'] },
            { name: 'Apex Pharma', meta: 'Scheme on 12 products still unclaimed', tag: ['Claim', 'flag'] },
          ],
        },
      ],
    },
    {
      id: 'transfers',
      title: 'Stores',
      meta: 'Transfers',
      heading: 'Stock in the right store',
      caption:
        'Near-expiry stock in one store matched with demand in another, as a recorded transfer instead of a phone call.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Suggested',
              cards: [
                { title: 'Metformin 500, 220 tabs', meta: 'Store A to Store B', tag: ['Approve', 'flag', 'Approved', 'ok'] },
              ],
            },
            {
              name: 'In transit',
              cards: [{ title: 'Insulin glargine, 6 pens', meta: 'Store C to Store A', tag: ['On the way', 'muted'] }],
            },
            {
              name: 'Received',
              cards: [{ title: 'ORS, 80 sachets', meta: 'Store B to Store C', tag: ['Done', 'ok'] }],
            },
          ],
        },
      ],
    },
  ],

  dayHeading: 'The same Monday, before and after.',
  dayLede: 'The counter works the same way. What changes is that it leaves records that chase for you.',
  day: [
    {
      time: '9:00',
      before: 'You open the shop and hope nothing has expired over the weekend.',
      after: 'The Today screen shows what expires this month, what is below reorder and which refills are due.',
    },
    {
      time: '11:00',
      before: 'A distributor calls with a scheme. You buy without knowing what you already hold.',
      after: 'You see stock on hand, expiry and the effective cost against other distributors before you decide.',
    },
    {
      time: '2:00',
      before: 'A regulated sale is written in the notebook later, with details missing.',
      after: 'The sale cannot close without prescriber, patient and quantity.',
    },
    {
      time: '5:00',
      before: 'A regular patient is overdue for her medicine. Nobody notices.',
      after: 'She is on the refill list and a staff member calls her.',
    },
    {
      time: '8:30',
      before: 'You count cash and match it with the billing report by hand.',
      after: 'The day’s sales by payment mode are compared with collections and the gap is named.',
    },
    {
      time: 'Month end',
      before: 'You write off expired stock you did not know about.',
      after: 'Most of it was returned, discounted or transferred earlier, and the rest is recorded.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'Nobody hands you a login. We learn how your counter, store room and registers actually work, build Verity around that, bring your data in, then stay to keep it working.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Spend time at your counter and in your store room. Follow a medicine from distributor bill to patient, and map your billing software, registers and how returns and credit notes are handled.',
        you: 'A few hours from you and your pharmacist-in-charge. Your product list with batches, recent distributor bills and the current registers.',
        get: 'A written map of how the pharmacy runs and the problems we will fix first.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up products with batch and expiry fields, reorder levels, regulated-product flags and register rules, distributors, stores, approval limits and refill rules.',
        you: 'Your pharmacist checks the register fields and regulated product list. Your manager checks the reorder levels.',
        get: 'A working Verity with your products, rules and registers.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in stock with batch and expiry, distributors, patients and credit balances. Train counter staff and the pharmacist on real days.',
        you: 'An opening stock count by batch where possible, and one hour per role.',
        get: 'Your stock and patients inside Verity and a team that has used it on real sales.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Review the first weeks with you, tune reorder levels and alerts, and handle new stores and changes in rules.',
        you: 'A short monthly review of what the numbers say.',
        get: 'A system that keeps matching how the pharmacy runs, with someone responsible for it.',
      },
    ],
    bring: [
      'Your product list with strengths and pack sizes',
      'Stock on hand with batch and expiry, as far as you have it',
      'Recent distributor bills and scheme details',
      'Your H1 and other registers as they are kept today',
      'Patient and credit customer lists',
    ],
    time: 'About 8 to 10 hours of owner time over four weeks, plus your pharmacist’s and counter staff’s time, mostly in weeks 1 and 2.',
    after: 'Nobody is hired to run Verity. Batch, expiry and register details are captured at the counter and at receipt, and the reports come from those records.',
  },

  ai: {
    heading: 'Ask the pharmacy a question.',
    lede:
      'Verity AI reads your stock, batches, registers, patients and distributor records. Ask in plain language, then turn the answer into a task.',
    examples: [
      {
        q: 'What expires in the next 60 days and can still be returned?',
        a: '₹48,600 at cost expires in 60 days. ₹21,200 is still within distributor return windows.',
        rows: [['Returnable', '₹21,200'], ['Move to another store', '₹9,800'], ['Discount', '₹17,600']],
        action: 'Create return tasks for each distributor',
      },
      {
        q: 'Which patients have not refilled their regular medicine?',
        a: '63 patients are past their usual refill date. 14 are over two weeks late.',
        rows: [['Over 2 weeks late', '14'], ['1 to 2 weeks late', '22'], ['Under a week late', '27']],
        action: 'Assign calls to the counter team',
      },
      {
        q: 'Was batch MF8812 of Metformin sold from any of our stores?',
        a: '220 tablets remain in Store A. 340 were sold from Stores A and B between 2 and 14 October.',
      },
    ],
  },

  automationHeading: 'The checks nobody has time to make.',
  automationLede: 'Set once, then they run from your records. People still do the work. Verity makes sure the right person knows to.',
  automations: [
    {
      when: 'A batch is 90 days from expiry',
      then: ['Listed with value and return window', 'Task to return, discount or transfer', 'Outcome recorded'],
    },
    {
      when: 'A regulated product is sold without a prescription reference',
      then: ['Sale flagged to the pharmacist-in-charge', 'Reason recorded', 'Included in the monthly exceptions report'],
    },
    {
      when: 'A patient passes their usual refill date',
      then: ['Added to the refill list', 'Task to a named staff member', 'Outcome recorded: refilled, switched or unreachable'],
    },
    {
      when: 'A product falls below its reorder level',
      then: ['Checked against recent sales', 'Order drafted to the best-priced distributor', 'Receipt compared with the order'],
    },
    {
      when: 'A distributor return has no credit note after 15 days',
      then: ['Flagged against the distributor', 'Task to chase', 'Credit recorded when received'],
    },
    {
      when: 'A licence or registration is 60 days from expiry',
      then: ['Task created for the owner of the document', 'Reminder repeated weekly', 'New copy attached when received'],
    },
  ],

  rules: {
    heading: 'The rules a pharmacy has to keep up with.',
    lede: 'Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order.',
    items: [
      {
        name: 'Schedule H1 register',
        what: 'Supply of an H1 drug is recorded in a separate register at the time of supply, with the prescriber’s name and address, the patient’s name, the drug and the quantity, kept for three years and open to inspection.',
        how: 'H1 products are flagged. A sale cannot close without these fields, and the register can be searched and printed.',
        source: { name: 'Parliament of India document on Schedule H1', url: 'https://eparlib.nic.in/bitstream/123456789/647575/1/146840.pdf' },
      },
      {
        name: 'Schedule H and X prescriptions',
        what: 'Schedule H drugs are sold on a registered medical practitioner’s prescription. Schedule X generally needs a prescription in duplicate, with one copy kept.',
        how: 'A prescription reference is required at sale, and exceptions go to the pharmacist-in-charge.',
        source: { name: 'Journal of Global Health, 2020', url: 'https://www.jogha.org/documents/issue202001/jogh-10-010302.htm' },
      },
      {
        name: 'Registered pharmacist and licences',
        what: 'A registered pharmacist must be on the premises, and the drug licence must be valid and displayed.',
        how: 'Pharmacist registration and licence details are records with expiry dates and owners, with reminders.',
      },
      {
        name: 'Proposed CCTV at medical stores',
        what: 'A September 2026 draft amendment proposes mandatory CCTV to monitor Schedule H, H1 and X sales. It is reported as proposed, not in force.',
        how: 'If it becomes law, Verity’s regulated-sale records give you a matching trail to compare against footage. We will confirm what applies when it is notified.',
        source: { name: 'The South First, draft GSR 791(E)', url: 'https://thesouthfirst.com/health/cctv-cameras-proposed-at-medical-stores-to-monitor-sale-of-prescription-drugs/' },
      },
    ],
    note: 'Rules change and differ by state. Confirm current requirements with your drug control authority or advisor.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'Counter staff should not see margins. The distributor should not see your patients. Each role opens on what it needs.',
  roles: [
    { role: 'Owner', question: 'Where is stock and margin going?', sees: 'Expiry exposure, margin by category, distributor prices, approvals and all stores side by side.' },
    { role: 'Pharmacist-in-charge', question: 'Are we compliant today?', sees: 'Registers, regulated-sale exceptions, licence expiries and batch traceability.' },
    { role: 'Counter staff', question: 'What do I need for this patient?', sees: 'Stock and batch, prescription prompts, the patient’s refills and credit balance.' },
    { role: 'Purchase manager', question: 'What do we order and from whom?', sees: 'Reorder list, price comparison across distributors, scheme and payable dates.' },
    { role: 'Accountant', question: 'What did we buy and owe?', sees: 'Purchases by distributor, payables, credit notes, discounts and sales by mode.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your billing software. We agree how its sales reach Verity during setup.',
      'Your distributors and how you order from them.',
      'Your pharmacist, who stays accountable for registers and prescriptions.',
      'Your accountant, who still prepares your returns.',
    ],
    not: [
      'Run the billing counter or take payments.',
      'Sell medicines online or take orders from patients.',
      'Send messages to patients on its own.',
      'File your returns or run your payroll.',
    ],
    migration:
      'We bring your product list, stock with batches, distributors and patient lists across from the sheets and registers you use now, in stages, so the counter never stops.',
  },

  faqHeading: 'Questions pharmacy owners ask.',
  faqs: [
    [
      'Does Verity replace my billing software?',
      'No. Your billing software stays at the counter. Verity records the stock, batch and register behind it, and we agree during setup how sales reach Verity.',
    ],
    [
      'How does it know batches and expiry?',
      'Batch and expiry are captured when stock is received against a distributor bill, and carried through to sale. We help you start from your current stock by batch as far as it is known.',
    ],
    [
      'Will it make my H1 register legally complete?',
      'It makes sure each entry has the fields the rules ask for before the sale closes, and keeps the register searchable. Your pharmacist remains responsible for compliance, and we do not give legal advice.',
    ],
    [
      'Can it send refill reminders to patients?',
      'Not by itself. Verity lists patients overdue for a refill and assigns the call or message to a staff member, and records the outcome.',
    ],
    [
      'I run three stores. Can I see all of them?',
      'Yes. Each store is a location in one system, and stock, expiry and sales can be compared and transferred between them.',
    ],
    [
      'Can it help me compete with online prices?',
      'It shows your margin by product and discount, so you decide where to match a price and where to hold. It does not set your prices for you.',
    ],
    [
      'Who can see patient information?',
      'Only the people you allow. Access is set by role, and every change is recorded with who made it and when.',
    ],
    [
      'How long before I see results?',
      'The expiry list and below-reorder list need only your stock data, so they are among the first things we aim to have working. Refill and margin trends become reliable after some weeks of recorded sales.',
    ],
    [
      'What does it cost?',
      'It depends on the number of stores and what you want set up. Message us and we will give you a clear number after a short conversation about how your pharmacy runs.',
    ],
  ],

  related: ['clinics', 'medical-distributors', 'pharmaceutical-manufacturers', 'dental-clinics', 'diagnostic-labs', 'optical-stores'],

  ctaHeading: 'Find out what is expiring on your shelves.',
  ctaLede:
    'Tell us how your pharmacy runs and we will show you the expiry exposure, register gaps and overdue refills it would find, using your own numbers.',
};
