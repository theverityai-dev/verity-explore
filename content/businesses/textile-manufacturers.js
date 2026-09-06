export default {
  slug: 'textile-manufacturers',
  status: 'published',
  plural: 'textile manufacturers',
  subject: 'textile manufacturing business',

  seo: {
    title: 'AI business management software for textile manufacturers | Verity',
    description:
      'Verity connects yarn and greige stock, dye lots and shade consistency, outside processing, loom allocation and order commitments into one operational system.',
    keywords: [
      'AI software for textile manufacturers',
      'textile mill management software',
      'dye lot and shade matching tracking',
      'job work and greige inventory software',
    ],
  },

  hero: {
    eyebrow: 'Verity for textile manufacturing',
    headline: 'The shade matched in the lab and did not match across the lot.',
    lede:
      'Textile production is a chain of lots that must stay consistent through processing that often happens outside your walls. Verity tracks the lot, wherever it is and whoever holds it.',
    note: 'Runs alongside your existing accounting and machine systems.',
    panel: {
      title: 'Production',
      meta: 'All units · This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders in production', value: '84', note: '₹6.2 Cr committed' },
        { label: 'Material at processors', value: '₹1.8 Cr', note: '9 job workers' },
        { label: 'Shade rejections', value: '11 lots', note: 'this month' },
        { label: 'Loom utilisation', value: '78%', note: 'against plan' },
      ],
      rows: [
        { name: '11 lots rejected on shade this month', meta: 'Two processors account for eight', active: true },
        { name: '₹1.8 Cr of material with job workers, ₹42 L overdue', meta: 'Oldest out 71 days', active: true },
        { name: 'Two orders at risk on greige availability', meta: 'Committed dates in 9 days', active: true },
        { name: 'Yarn lot substituted mid-order without record', meta: 'Consistency risk across the run', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own production in this shape.',
    },
  },

  overview: {
    heading: 'A textile order is a lot, and a lot only works if it stays one lot.',
    paragraphs: [
      'Textile manufacturing converts yarn into greige into finished fabric through a sequence that includes weaving or knitting, dyeing, processing and finishing. The commercially critical property of that sequence is consistency: a customer ordering fabric expects the whole quantity to match, and a shade or hand-feel variation across a lot makes the entire delivery unacceptable.',
      'That consistency is threatened at every transition, and most transitions happen outside the mill. Dyeing and processing are frequently job work sent to specialist processors, which means the material leaves the premises, is worked on by someone else, and returns — sometimes matching, sometimes not, sometimes late, sometimes short.',
      'Material at job workers is therefore both the largest operational exposure and the least tracked. It is stock the business owns, outside its control, ageing, and recorded in a challan book. One point eight crore with nine processors, some of it out for seventy-one days, is a working capital problem disguised as a production one.',
      'The second consistency risk is internal. A yarn lot substituted mid-order because the original ran short produces a variation nobody records at the time and everybody discovers at inspection.',
      'The third is that commitments to customers are made against greige and finished stock that is partly at processors and partly not yet made.',
      'Verity tracks the lot through every transition, inside and outside the mill.',
    ],
  },

  terminology: [
    ['Yarn, greige, finished fabric, lots', 'Inventory'],
    ['Weaving, dyeing, processing, finishing', 'Work'],
    ['Customer orders, deliveries, commitments', 'Orders'],
    ['Job workers, processors, yarn suppliers', 'Suppliers'],
    ['Shade approval, quality checks, rejections', 'Workflows'],
    ['Operators, supervisors, shifts', 'People'],
    ['Units, looms, godowns, processor sites', 'Locations'],
  ],

  challengesHeading: 'Consistency fails where the material leaves your control.',
  challengesLede:
    'Textile problems are lot problems, and most of them happen at a transition somebody else performs.',
  challenges: [
    {
      problem: 'Material at job workers is untracked',
      detail:
        'Greige goes out for dyeing and exists only in a challan book. What is out, how long it has been out and what came back short is reconstructed monthly.',
      outcome:
        'Material issued to a processor is recorded movement with an expected return, so exposure and ageing are current.',
    },
    {
      problem: 'Shade variation is discovered at inspection',
      detail:
        'A lot returns and does not match across its length or against the approved sample, and the order is already committed to a date.',
      outcome:
        'Shade approval and lot identity are recorded through every transition, so variation is attributable to a processor and a lot.',
    },
    {
      problem: 'Yarn lots are substituted mid-order',
      detail:
        'The original lot runs short, another is used, and the substitution is not recorded — producing variation nobody can explain later.',
      outcome:
        'Lot consumption is recorded against the order, so substitution is a recorded decision with a consistency check.',
    },
    {
      problem: 'Commitments are made against material that does not exist yet',
      detail:
        'Delivery dates are promised against greige partly at processors and partly unmade, and the shortfall appears near the date.',
      outcome:
        'Availability distinguishes stock in hand, in process and at processors, so commitments are made against what is genuinely coverable.',
    },
    {
      problem: 'Processor performance is anecdotal',
      detail:
        'Everyone knows which processors are slow or inconsistent, and nobody can say by how much or what it has cost.',
      outcome:
        'Turnaround, shortfall and rejection rates are recorded per processor from the jobs themselves.',
    },
    {
      problem: 'Loom and machine allocation is planned separately from orders',
      detail:
        'Machine planning happens on the shop floor and order commitments happen in the office, and the two are reconciled verbally.',
      outcome:
        'Allocation is recorded against the order it serves, so capacity and commitment are one view.',
    },
  ],

  modulesLede:
    'One system across lots, processing, orders and processors.',
  modules: [
    {
      id: 'inventory',
      title: 'Yarn, greige and finished fabric by lot',
      line:
        'Stock is held by lot with quality, count, shade reference, location and state, including material at processors.',
      why:
        'The lot is the unit of consistency, and consistency is what the customer is buying.',
      example:
        'Greige in hand, in process and at processors distinguished, so commitments are made against what is coverable.',
    },
    {
      id: 'work',
      title: 'Weaving, dyeing, processing and finishing',
      line:
        'Each stage is work with a lot, a machine or processor, an owner, timestamps and a state.',
      why:
        'The chain is where consistency and time are both lost, and only stage records show where.',
      example:
        'A lot’s full path from yarn issue to finished fabric, with every transition and holder recorded.',
    },
    {
      id: 'suppliers',
      title: 'Job workers, processors and yarn suppliers',
      line:
        'Suppliers are relationships with their jobs, material held, turnaround, shortfall, rejection rates and balances.',
      why:
        'Processors hold your material and determine your quality, which makes their performance a first-order commercial fact.',
      example:
        'Two processors accounting for eight of eleven shade rejections this month.',
    },
    {
      id: 'workflows',
      title: 'Shade approval, quality and rejection',
      line:
        'Sample approval, in-process checks, shade matching and rejection move through defined steps with recorded outcomes.',
      why:
        'Shade approval is the contract with the customer, and a rejection has to be attributable to be preventable.',
      example:
        'A rejection recorded against the lot and the processor rather than absorbed as a production loss.',
    },
    {
      id: 'orders',
      title: 'Customer orders and commitments',
      line:
        'Orders carry their quantities, quality, shade references, committed dates, allocated lots and delivery state.',
      why:
        'The commitment is what the business is judged on, and it depends on material that is partly elsewhere.',
      example:
        'Two orders at risk on greige availability nine days before their committed dates.',
    },
    {
      id: 'locations',
      title: 'Units, looms, godowns and processor sites',
      line:
        'Locations include processor premises, so material outside the mill is still in a recorded location.',
      why:
        'Treating a processor as a location is what makes outside material visible rather than a challan.',
      example:
        'One point eight crore of material at nine processor locations with ageing.',
    },
    {
      id: 'people',
      title: 'Operators, supervisors and shifts',
      line:
        'Staff are modelled once, and every issue, stage completion and quality check carries who performed it.',
      why:
        'Machine allocation and quality outcomes both vary by shift and supervisor.',
      example:
        'Production and rejection by shift and machine.',
    },
    {
      id: 'workforce',
      title: 'Shift deployment against the plan',
      line:
        'Assignment and attendance stay connected to the machines and lots they covered.',
      why:
        'Loom utilisation depends on staffing as much as on orders.',
      example:
        'Utilisation against plan by shift, alongside the staffing that covered it.',
    },
    {
      id: 'intelligence',
      title: 'Lot, processor and commitment reporting',
      line:
        'Material at processors and ageing, turnaround and rejection by processor, loom utilisation, order coverage and delivery performance come from the operational records.',
      why:
        'The mill’s largest exposures — outside material and consistency — are both invisible without lot-level records.',
      example:
        'Rejection rate by processor, which changes where work is sent.',
    },
    {
      id: 'ai',
      title: 'Ask production a question',
      line:
        'Verity AI answers from your own lot, processing, order and processor records, respects permissions, and can create assigned follow-ups.',
      why:
        'The valuable questions are about material you cannot see and lots that will not match.',
      example:
        '"What material is at processors and overdue?" returns the list with follow-ups assigned.',
    },
    {
      id: 'records',
      title: 'Specifications, shade cards and approvals',
      line:
        'Specifications, approved samples and shade references attach to the order and lot they govern.',
      why:
        'A shade dispute is settled by the approved sample, which must be findable months later.',
      example:
        'The approved shade reference on the order, referenced at every processing stage.',
    },
    {
      id: 'control',
      title: 'Who can issue, substitute and accept',
      line:
        'One permission model and one audit trail, with lot substitution and quality acceptance recorded.',
      why:
        'Substituting a yarn lot mid-order is a consistency decision that should never be silent.',
      example:
        'A substitution recorded with the approver and a consistency check against the order.',
    },
  ],

  workflowsHeading: 'A lot, through every hand that touches it.',
  workflowsLede:
    'These already happen. Recorded as lot transitions, the chain becomes traceable.',
  workflows: [
    {
      name: 'Yarn to greige',
      steps: [
        'Yarn received and recorded by lot with count and quality',
        'Lot allocated to an order and issued to production',
        'Machine allocation recorded against the lot and order',
        'Production completed and greige recorded by lot',
        'Substitution recorded if a lot runs short mid-run',
      ],
      note:
        'Recording substitution at the moment is what makes a later variation explicable.',
    },
    {
      name: 'Outside processing',
      steps: [
        'Greige issued to a processor as recorded movement',
        'Expected return date and processing specification set',
        'Ageing tracked while the material is outside',
        'Return received and reconciled against what was issued',
        'Shortfall or damage recorded against the processor',
      ],
      note:
        'Material at a processor is stock you own and cannot see, which makes it the largest untracked exposure in most mills.',
    },
    {
      name: 'Shade approval and matching',
      steps: [
        'Sample approved against the customer specification',
        'Approved reference attached to the order and lot',
        'In-process checks recorded against the reference',
        'Final matching checked across the lot',
        'Rejection recorded with lot, stage and processor attributed',
      ],
      note:
        'Attribution is what turns a recurring shade problem into a processor decision.',
    },
    {
      name: 'Order commitment',
      steps: [
        'Order recorded with quantity, quality and committed date',
        'Availability checked across stock, in-process and at processors',
        'Lots allocated against the order',
        'Production and processing scheduled to the date',
        'Shortfall flagged against the commitment while it can be managed',
      ],
      note:
        'Committing against material partly at processors is how dates slip without warning.',
    },
    {
      name: 'Processor review',
      steps: [
        'Turnaround measured against agreed return dates',
        'Shortfall and damage aggregated by processor',
        'Rejection rate compared across processors',
        'Rate and allocation decisions raised',
        'Decisions recorded against the processor',
      ],
      note:
        'Everyone knows which processors are difficult; this makes it a number.',
    },
    {
      name: 'Dispatch and delivery',
      steps: [
        'Finished lots checked against order and shade reference',
        'Packing and documentation completed',
        'Dispatch recorded against the order',
        'Delivery confirmed and any claim recorded',
        'Delivery performance updated against the commitment',
      ],
      note:
        'Checking against the approved reference before dispatch prevents the most expensive kind of return.',
    },
  ],

  ai: {
    heading: 'Ask where the material is and whether it will match.',
    lede:
      'Verity AI reads the same lot, processing, order and processor records the mill creates as it produces. It answers from your own units, respects permissions, and can turn an answer into follow-ups.',
    panelMeta: 'Grounded in your production records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What material is with job workers, and how long has it been out?',
      'Which processors account for the most shade rejections?',
      'Which orders are at risk on greige availability?',
      'Where were yarn lots substituted mid-order?',
      'What is turnaround by processor against agreed dates?',
      'What is loom utilisation against plan by unit and shift?',
      'Which lots returned short from processing this quarter?',
      'What is delivery performance against committed dates?',
      'Summarise material exposure and consistency risk.',
    ],
  },

  automationHeading: 'The material you cannot see.',
  automationLede:
    'Each runs from the lot and processing records at the point the condition is met.',
  automations: [
    {
      trigger: 'Material is issued to a processor',
      steps: [
        'Movement recorded with expected return date',
        'Ageing tracked against the processor',
        'Follow-up raised as the return date passes',
      ],
    },
    {
      trigger: 'A lot returns from processing',
      steps: [
        'Quantity reconciled against what was issued',
        'Shade checked against the approved reference',
        'Shortfall or rejection recorded against the processor',
      ],
    },
    {
      trigger: 'A yarn lot runs short mid-order',
      steps: [
        'Substitution held for approval',
        'Consistency risk flagged against the order',
        'Decision and lot change recorded',
      ],
    },
    {
      trigger: 'Order coverage falls short of the commitment',
      steps: [
        'Shortfall flagged with the committed date',
        'Availability checked across stock and processors',
        'Escalation or date revision raised',
      ],
    },
    {
      trigger: 'A processor exceeds its rejection threshold',
      steps: [
        'Pattern flagged with the lots affected',
        'Allocation review assigned',
        'Decision recorded against the processor',
      ],
    },
    {
      trigger: 'Material with a processor passes its ageing threshold',
      steps: [
        'Exposure flagged with value and days out',
        'Recovery follow-up assigned',
        'Escalated past the second threshold',
      ],
    },
  ],

  intelligenceHeading: 'What the mill can actually see.',
  intelligenceLede:
    'Lot traceability and outside exposure from production records.',
  intelligence: [
    {
      area: 'Material',
      points: [
        'Stock by lot, state and location',
        'Material at processors with value and ageing',
        'Shortfall on return by processor',
        'Yarn consumption against production',
      ],
    },
    {
      area: 'Quality',
      points: [
        'Shade rejections by lot, stage and processor',
        'In-process check outcomes',
        'Rework and its cost',
        'Substitutions and their consistency outcomes',
      ],
    },
    {
      area: 'Processors',
      points: [
        'Turnaround against agreed dates',
        'Rejection and shortfall rates',
        'Rate comparison across processors',
        'Outstanding balances and material held',
      ],
    },
    {
      area: 'Production',
      points: [
        'Loom and machine utilisation against plan',
        'Output by unit, machine and shift',
        'Downtime and its recorded causes',
        'Staffing against the production plan',
      ],
    },
    {
      area: 'Orders',
      points: [
        'Coverage against committed quantities',
        'Delivery performance against committed dates',
        'Orders at risk and the stage blocking them',
        'Claims and returns by customer',
      ],
    },
  ],
  intelligenceNote:
    'Verity records the operational chain. Machine controls, accounting and design systems continue as they are.',

  rolesHeading: 'One mill, five different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'How much material is outside and is it coming back?',
      focus: 'Material at processors and ageing, rejection rates, delivery performance, utilisation.',
    },
    {
      role: 'Production head',
      question: 'What is running and what is short?',
      focus: 'Machine allocation against orders, lot availability, stages in progress, substitutions.',
    },
    {
      role: 'Quality',
      question: 'Which lots will not match?',
      focus: 'Shade references and check outcomes, rejections by processor and stage, rework required.',
    },
    {
      role: 'Purchase and processing',
      question: 'Who is holding our material?',
      focus: 'Material at each processor, ageing, turnaround, shortfall history, rates.',
    },
    {
      role: 'Sales',
      question: 'What can I commit to?',
      focus: 'Coverage across stock, in-process and processors, orders at risk, delivery history.',
    },
  ],

  useCasesHeading: 'What textile manufacturers use Verity for',
  useCases: [
    {
      name: 'Material at processors',
      body: 'Processor premises as recorded locations with expected returns and ageing, turning a challan book into visible working capital exposure.',
    },
    {
      name: 'Lot traceability',
      body: 'A lot tracked through every transition inside and outside the mill, so a consistency failure is attributable to a stage and a holder.',
    },
    {
      name: 'Shade approval and rejection attribution',
      body: 'Approved references attached to orders and lots, with rejections recorded against processor and stage rather than absorbed.',
    },
    {
      name: 'Substitution control',
      body: 'Yarn lot substitution as a recorded decision with a consistency check, so later variation is explicable.',
    },
    {
      name: 'Coverage-based commitments',
      body: 'Availability distinguishing stock in hand, in process and at processors, so committed dates rest on material that is genuinely coverable.',
    },
    {
      name: 'Processor performance',
      body: 'Turnaround, shortfall and rejection measured per processor, so allocation is evidence-based rather than habitual.',
    },
    {
      name: 'Machine allocation against orders',
      body: 'Allocation recorded against the order it serves, putting capacity and commitment in one view.',
    },
    {
      name: 'Asking about material and quality',
      body: 'Plain-language questions across lots, processors, orders and rejections, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Machine systems and accounting continue to run and are mapped during implementation. Yarn and greige stock by lot, processors, open orders and material currently outside are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions mills ask',
  faqs: [
    [
      'What can AI software do for a textile manufacturer?',
      'Verity AI answers questions from your own lot, processing, order and processor records: what material is with job workers and how long it has been out, which processors account for the most shade rejections, which orders are at risk on greige availability, where lots were substituted mid-order. Each answer can become a follow-up.',
    ],
    [
      'How does it track material sent for job work?',
      'Processor premises are treated as locations, so material issued for dyeing or processing is recorded movement with an expected return date and visible ageing rather than an entry in a challan book. That material is stock you own and cannot see, which makes it the largest untracked exposure in most mills.',
    ],
    [
      'Can it help with shade consistency?',
      'The approved sample reference is attached to the order and the lot, in-process checks record against it, and rejections are attributed to a lot, a stage and a processor — so a recurring consistency problem becomes a processor decision rather than a production loss.',
    ],
    [
      'Does it record lot substitutions?',
      'Substituting a yarn lot mid-order is held for approval with the consistency risk flagged against the order, so a variation discovered at inspection has an explanation rather than being a mystery.',
    ],
    [
      'Can it improve delivery commitments?',
      'Availability distinguishes stock in hand, work in process and material at processors, so a committed date is made against material that is genuinely coverable rather than against a total that includes fabric someone else is holding.',
    ],
    [
      'Does it measure processor performance?',
      'Turnaround against agreed return dates, shortfall on return and rejection rates are recorded per processor from the jobs themselves, which turns a shared impression into an allocation decision.',
    ],
    [
      'Does Verity replace our accounting or machine systems?',
      'No. Those continue and are mapped during implementation. Verity holds the lots, the processing chain, the orders, the processors and the reporting across them.',
    ],
    [
      'Does it work across multiple units?',
      'Units, looms, godowns and processor sites are all locations rolling into the business, so material, utilisation and quality are comparable across them.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of the production chain and job work arrangements, configuration, migration of stock by lot and open orders, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the material you cannot see.',
  ctaLede:
    'Most mills are surprised by how much is sitting with processors and how long it has been there. Tell us how job work is tracked today.',

  related: ['garment-manufacturers', 'manufacturers', 'wholesalers', 'distributors', 'fashion-stores', 'packaging-companies'],
};
