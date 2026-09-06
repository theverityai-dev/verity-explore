export default {
  slug: 'contractors',
  status: 'published',
  plural: 'contractors',
  subject: 'contracting business',

  seo: {
    title: 'AI business management software for contractors | Verity',
    description:
      'Verity connects quotations, simultaneous site jobs, labour gangs, material advances, running bills and retention into one operational system for contracting firms.',
    keywords: [
      'AI software for contractors',
      'contractor management software',
      'running bill and retention tracking',
      'labour gang and material advance management',
    ],
  },

  hero: {
    eyebrow: 'Verity for contractors',
    headline: 'Four sites, one set of people, and a running bill you have not raised on any of them.',
    lede:
      'A contracting business runs several jobs at once with shared labour and material advances, and bills late on all of them. Verity tracks the work, the gangs and the money per job.',
    note: 'Sized for a firm where the owner is also on site.',
    panel: {
      title: 'Jobs',
      meta: 'All sites · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active jobs', value: '11', note: '₹4.2 Cr contracted' },
        { label: 'Unbilled work', value: '₹68 L', note: 'completed, not billed' },
        { label: 'Advances outstanding', value: '₹24 L', note: 'against 6 suppliers' },
        { label: 'Retention held', value: '₹38 L', note: '₹9 L past release' },
      ],
      rows: [
        { name: '₹68 L of completed work not yet billed', meta: 'Oldest 47 days · four jobs', active: true },
        { name: '₹9 L retention past its release date', meta: 'No request raised', active: true },
        { name: 'Gang moved between sites without record', meta: 'Labour cost unattributed for two weeks', active: true },
        { name: 'Extra work done on verbal instruction', meta: '3 jobs · no rate agreed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own jobs in this shape.',
    },
  },

  overview: {
    heading: 'Contracting is several small businesses running at once with one set of resources.',
    paragraphs: [
      'A contracting firm typically runs a handful of jobs simultaneously — a fit-out here, a civil package there, a maintenance contract elsewhere — using the same labour gangs, the same equipment and the same working capital. The jobs have different clients, different rates and different billing rules, and the resources move between them daily.',
      'The consequence is that cost attribution collapses. A gang moves from one site to another on a Wednesday because it was needed, and unless somebody writes it down the labour cost lands on the wrong job or on no job at all. Multiply that across four sites and a month, and job profitability becomes an estimate.',
      'The second and most damaging problem is billing. Contractors do work and bill it late, because raising a running bill requires measuring what was done and nobody has time while the work continues. Sixty-eight lakh of completed unbilled work is the firm financing its clients out of its own working capital, which is exactly what a contracting business cannot afford.',
      'The third is extra work. A client asks for something on site, the contractor does it because refusing damages the relationship, and no rate is agreed. It is then billed at the end against a client who does not remember agreeing to it.',
      'The fourth is retention, which sits with the client past its release date because nobody asked.',
      'Verity holds the job, its measurement, its labour, its advances and its retention as records, without requiring an office.',
    ],
  },

  terminology: [
    ['Jobs, work orders, quotations', 'Work'],
    ['Clients, main contractors, architects', 'Relationships'],
    ['Labour gangs, supervisors, daily wage', 'People'],
    ['Material advances, purchases, site stock', 'Inventory'],
    ['Running bills, retention, extras', 'Workflows'],
    ['Suppliers, hire, transport', 'Suppliers'],
    ['Sites, floors, work areas', 'Locations'],
  ],

  challengesHeading: 'Shared resources, separate jobs, no attribution.',
  challengesLede:
    'Contracting difficulties come from resources that move faster than anyone records them and bills raised too late.',
  challenges: [
    {
      problem: 'Running bills are raised late',
      detail:
        'Work is completed and measurement waits, so the firm funds its clients with its own working capital for weeks at a time.',
      outcome:
        'Completed work is measured against the quotation as it happens, so unbilled value is a current number with a billing task attached.',
    },
    {
      problem: 'Labour cost lands on the wrong job',
      detail:
        'Gangs move between sites as need dictates, and unless the movement is recorded the cost is attributed by memory at month end.',
      outcome:
        'Gang deployment is recorded by site and day, so labour cost attaches to the job that consumed it.',
    },
    {
      problem: 'Extra work is done without an agreed rate',
      detail:
        'A client asks for something on site and it gets done, then billed at the end against someone who does not recall agreeing.',
      outcome:
        'Extras are raised as a variation with a rate before or as the work proceeds, recorded against the job.',
    },
    {
      problem: 'Material advances are untracked',
      detail:
        'Advances are paid to suppliers to secure material and are reconciled loosely against deliveries across several jobs.',
      outcome:
        'Advances are recorded against the supplier and job, and reconciled against deliveries received.',
    },
    {
      problem: 'Retention is forgotten',
      detail:
        'Retention passes its release date and nobody raises the request, so the money stays with the client.',
      outcome:
        'Release dates are on the job record, and the request is raised on the date.',
    },
    {
      problem: 'Quotations are prepared from scratch',
      detail:
        'Similar jobs are quoted from memory rather than from what comparable work actually cost, so margin varies without anyone deciding.',
      outcome:
        'Completed jobs with their actual costs are records, so a quotation starts from evidence.',
    },
  ],

  modulesLede:
    'One system across jobs, gangs, material and money. No office required.',
  modules: [
    {
      id: 'work',
      title: 'Jobs, quotations and measured work',
      line:
        'Each job is work with a client, a quotation with rates, measured progress, extras, an owner and a state.',
      why:
        'The job is the unit of profit, and running several at once with shared resources is what makes attribution hard.',
      example:
        'Eleven active jobs with sixty-eight lakh of completed work unbilled across four of them.',
    },
    {
      id: 'people',
      title: 'Labour gangs and supervisors',
      line:
        'Gangs and workers are records with their trade, rates and daily deployment against sites and jobs.',
      why:
        'Labour is the largest cost in most contracting work and the most mobile, which is why it is the most misattributed.',
      example:
        'A gang moved mid-week, recorded against the site it worked rather than the one it started on.',
    },
    {
      id: 'workflows',
      title: 'Running bills, extras and retention',
      line:
        'Measurement, billing, extras and retention release are defined steps with owners and dates against the job.',
      why:
        'These are the commercial events, and every one of them currently happens late or verbally.',
      example:
        'Nine lakh of retention past its release date, with the request raised on the date instead.',
    },
    {
      id: 'inventory',
      title: 'Material advances and site stock',
      line:
        'Advances, purchases and material at site are recorded against supplier and job, and reconciled against deliveries and consumption.',
      why:
        'Advances are working capital committed before any value is received, and they are usually reconciled loosely.',
      example:
        'Twenty-four lakh of advances outstanding against six suppliers, reconciled per job.',
    },
    {
      id: 'relationships',
      title: 'Clients, main contractors and architects',
      line:
        'Clients are records with their jobs, rates, billing terms, payment history, retention and communications.',
      why:
        'Contractors work repeatedly for the same clients, and payment behaviour is the most useful thing to know about them.',
      example:
        'A client whose average payment runs sixty days beyond terms, visible before the next quotation.',
    },
    {
      id: 'suppliers',
      title: 'Suppliers, hire and transport',
      line:
        'Suppliers are relationships with their orders, advances, deliveries, rates and balances.',
      why:
        'Material availability determines whether a gang has work, and advances tie up cash.',
      example:
        'A supplier holding an advance with deliveries outstanding, per job.',
    },
    {
      id: 'locations',
      title: 'Sites and work areas',
      line:
        'Sites are locations with their own material, labour deployment and progress.',
      why:
        'Running several sites at once with shared resources is the defining structure of the business.',
      example:
        'Labour and material by site, so job cost is attributable rather than estimated.',
    },
    {
      id: 'intelligence',
      title: 'Job profitability and cash reporting',
      line:
        'Cost against quotation per job, unbilled value, labour attribution, advances outstanding, retention position and client payment behaviour come from the operational records.',
      why:
        'A contractor’s two questions — is this job making money and where is my cash — are both currently estimates.',
      example:
        'Cost against quotation per job, current rather than assessed at completion.',
    },
    {
      id: 'ai',
      title: 'Ask the jobs a question',
      line:
        'Verity AI answers from your own job, labour, material and billing records, respects permissions, and can create assigned follow-ups.',
      why:
        'The owner is on site most of the day and needs an answer rather than a report to prepare.',
      example:
        '"What work is completed and unbilled?" returns sixty-eight lakh with billing tasks raised.',
    },
    {
      id: 'communication',
      title: 'Instructions and site conversation',
      line:
        'Instructions, agreements and site correspondence attach to the job or extra they concern.',
      why:
        'Extras are agreed verbally on site and disputed at billing, and the record is the whole difference.',
      example:
        'A client instruction for extra work recorded on the job at the time it was given.',
    },
    {
      id: 'control',
      title: 'Who can commit and approve',
      line:
        'One permission model and one audit trail, with rate agreements and advances as recorded decisions.',
      why:
        'Supervisors commit the firm on site, and those commitments should be within authority and recorded.',
      example:
        'An extra agreed above a supervisor’s authority routed to the owner and recorded.',
    },
  ],

  workflowsHeading: 'Work done, work measured, work billed.',
  workflowsLede:
    'These already happen. As records they stop the firm financing its clients.',
  workflows: [
    {
      name: 'Quotation to job',
      steps: [
        'Enquiry recorded against the client with scope',
        'Comparable completed jobs and their actual costs reviewed',
        'Quotation prepared with rates and terms',
        'Acceptance recorded with billing and retention terms',
        'Job opened with sites, gangs and material requirements',
      ],
      note:
        'Quoting from what comparable jobs actually cost is the largest available improvement in contracting margin.',
    },
    {
      name: 'Daily deployment',
      steps: [
        'Gangs deployed to sites and recorded by day',
        'Attendance captured against the deployment',
        'Movement between sites recorded when it happens',
        'Labour cost attributed to the job worked',
        'Progress recorded against the quotation items',
      ],
      note:
        'Recording movement on the day is what keeps labour cost on the right job.',
    },
    {
      name: 'Measurement and running bill',
      steps: [
        'Completed work measured against quotation items',
        'Extras included with their agreed rates',
        'Running bill prepared with supporting measurement',
        'Bill submitted and certification tracked',
        'Payment received and retention recorded',
      ],
      note:
        'Measuring as work completes rather than at the end is what stops the firm funding its clients.',
    },
    {
      name: 'Extra work',
      steps: [
        'Instruction recorded on site against the job',
        'Rate agreed and approval obtained within authority',
        'Work executed and measured separately',
        'Extra included in the next running bill',
        'Client acknowledgement recorded',
      ],
      note:
        'A rate agreed before the work is the difference between an extra and an argument.',
    },
    {
      name: 'Material advance and delivery',
      steps: [
        'Advance paid to supplier and recorded against supplier and job',
        'Deliveries received and reconciled against the advance',
        'Material issued to site and consumption recorded',
        'Outstanding advance tracked until fully adjusted',
        'Supplier performance recorded',
      ],
      note:
        'Advances are cash committed before value is received and deserve the same tracking as receivables.',
    },
    {
      name: 'Retention release',
      steps: [
        'Retention terms and release dates recorded at award',
        'Defect liability obligations tracked',
        'Release request raised on the date',
        'Client position tracked to settlement',
        'Release recorded against the job',
      ],
      note:
        'Retention is money already earned that sits uncollected because nobody asked for it.',
    },
  ],

  ai: {
    heading: 'Ask where the money is.',
    lede:
      'Verity AI reads the same job, labour, material and billing records the firm creates as it works. It answers from your own sites, respects permissions, and can turn an answer into billing and follow-up tasks.',
    panelMeta: 'Grounded in your job records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What work is completed and not yet billed, and on which jobs?',
      'Which retention amounts are past their release date?',
      'What is cost against quotation on each active job?',
      'Where has labour been deployed this week, and against which jobs?',
      'Which extras were done without an agreed rate?',
      'What advances are outstanding with suppliers, and against which jobs?',
      'Which clients pay furthest beyond their terms?',
      'What did comparable completed jobs actually cost?',
      'Summarise unbilled value and cash position across jobs.',
    ],
  },

  automationHeading: 'The billing and the money nobody chases.',
  automationLede:
    'Each runs from the job records at the point the condition is met.',
  automations: [
    {
      trigger: 'Measured work passes a billing threshold',
      steps: [
        'Unbilled value calculated against the quotation',
        'Billing task assigned with supporting measurement',
        'Escalated if the bill is not raised',
      ],
    },
    {
      trigger: 'Extra work is recorded without an agreed rate',
      steps: [
        'Job flagged with the instruction attached',
        'Rate agreement task assigned within authority',
        'Decision recorded before the extra is billed',
      ],
    },
    {
      trigger: 'A gang moves between sites',
      steps: [
        'Deployment updated against the new site',
        'Labour cost attributed to the job worked',
        'Attendance reconciled against deployment',
      ],
    },
    {
      trigger: 'Retention reaches its release date',
      steps: [
        'Release request raised against the client',
        'Defect liability obligations checked',
        'Settlement tracked and recorded',
      ],
    },
    {
      trigger: 'A supplier advance ages without delivery',
      steps: [
        'Advance flagged with the supplier and job',
        'Follow-up assigned',
        'Escalated past the second threshold',
      ],
    },
    {
      trigger: 'A client payment passes its terms',
      steps: [
        'Balance aged against the client and job',
        'Follow-up assigned with the bill history attached',
        'Payment behaviour updated on the client record',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see between sites.',
  intelligenceLede:
    'Job profitability and cash from records created while working.',
  intelligence: [
    {
      area: 'Jobs',
      points: [
        'Cost against quotation per job',
        'Measured progress against scope',
        'Extras agreed, executed and billed',
        'Margin by job type and client',
      ],
    },
    {
      area: 'Cash',
      points: [
        'Completed work unbilled by age',
        'Bills raised, certified and paid',
        'Retention held and past release',
        'Client payment behaviour against terms',
      ],
    },
    {
      area: 'Labour',
      points: [
        'Deployment by gang, site and day',
        'Attendance against deployment',
        'Labour cost attributed per job',
        'Output against labour deployed',
      ],
    },
    {
      area: 'Material',
      points: [
        'Advances outstanding by supplier and job',
        'Deliveries against advances',
        'Site stock and consumption',
        'Supplier reliability and rates',
      ],
    },
  ],
  intelligenceNote:
    'The firm does not gain an office. Recording deployment, measurement and delivery produces all of this.',

  rolesHeading: 'A small firm, three different views.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'Which jobs are making money and where is my cash?',
      focus: 'Cost against quotation, unbilled value, retention position, client payment behaviour, advances outstanding.',
    },
    {
      role: 'Site supervisor',
      question: 'Who is where and what was done?',
      focus: 'Gang deployment and attendance, work measured, material at site, instructions received.',
    },
    {
      role: 'Whoever bills',
      question: 'What can be billed now?',
      focus: 'Measured work unbilled, extras with agreed rates, certification outstanding, retention due for release.',
    },
  ],

  useCasesHeading: 'What contractors use Verity for',
  useCases: [
    {
      name: 'Unbilled work visibility',
      body: 'Completed work measured against the quotation as it happens, so the firm stops financing its clients out of its own working capital.',
    },
    {
      name: 'Labour attribution across sites',
      body: 'Gang deployment recorded by site and day, so labour cost lands on the job that consumed it rather than on memory at month end.',
    },
    {
      name: 'Extras with agreed rates',
      body: 'Instructions recorded on site with a rate agreed before or as work proceeds, turning an argument at billing into a line on a bill.',
    },
    {
      name: 'Advance reconciliation',
      body: 'Supplier advances recorded against job and reconciled against deliveries, tracking cash committed before value is received.',
    },
    {
      name: 'Retention recovery',
      body: 'Release dates on the job record with requests raised on the date, recovering money that otherwise stays with the client.',
    },
    {
      name: 'Quoting from actual cost',
      body: 'Completed jobs with their real costs as records, so the next quotation starts from evidence rather than from memory.',
    },
    {
      name: 'Client payment behaviour',
      body: 'Payment against terms recorded per client, so the next quotation can reflect who actually pays on time.',
    },
    {
      name: 'Asking about jobs and cash',
      body: 'Plain-language questions across jobs, labour, material and billing, with billing tasks raised in the same step.',
    },
  ],

  migration:
    'Your accounting arrangement continues to run and is mapped during implementation. Clients, active jobs, quotations, gangs, supplier advances and retention positions are brought across, and Verity is configured around how the firm already works its sites.',

  faqHeading: 'Questions contractors ask',
  faqs: [
    [
      'What can AI software do for a contracting business?',
      'Verity AI answers questions from your own job, labour, material and billing records: what work is completed and unbilled, which retention is past its release date, where labour has been deployed and against which jobs, which extras were done without an agreed rate. Each answer can become a billing or follow-up task.',
    ],
    [
      'How does it help with billing?',
      'Completed work is measured against the quotation as it happens rather than at the end, so unbilled value is a current number with a billing task attached. Contractors bill late because measurement waits, and the delay is financed from their own working capital.',
    ],
    [
      'Can it attribute labour across several sites?',
      'Gang deployment is recorded by site and by day, including movements mid-week, so labour cost attaches to the job that actually consumed it rather than being allocated from memory at month end.',
    ],
    [
      'Does it handle extras?',
      'An instruction is recorded on site against the job and a rate is agreed within authority before or as the work proceeds, so the extra appears on a running bill rather than becoming a dispute at final billing.',
    ],
    [
      'Can it track supplier advances?',
      'Advances are recorded against the supplier and the job and reconciled against deliveries received, so cash committed before any value arrives is tracked as carefully as money owed to you.',
    ],
    [
      'Does it chase retention?',
      'Retention terms and release dates are recorded at award and the release request is raised on the date, recovering money that otherwise stays with the client because nobody asked.',
    ],
    [
      'Do we need an office to run it?',
      'No. The records come from recording deployment, measurement, deliveries and instructions, which happens on site. It is sized for a firm where the owner is also on site.',
    ],
    [
      'Can it help us quote better?',
      'Completed jobs are records with their actual labour and material cost, so a quotation for comparable work starts from what that work really cost rather than from memory.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how jobs are quoted, worked and billed, configuration, migration of active jobs and open balances, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the work you have done and not billed.',
  ctaLede:
    'It is your own money funding someone else’s project. Tell us how measurement and billing work today.',

  related: ['construction-companies', 'real-estate-developers', 'interior-designers', 'building-material-suppliers', 'repair-services', 'facility-management'],
};
