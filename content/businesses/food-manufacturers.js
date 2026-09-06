export default {
  slug: 'food-manufacturers',
  status: 'published',
  plural: 'food manufacturers',
  subject: 'food manufacturer',

  seo: {
    title: 'AI business management software for food manufacturers | Verity',
    description:
      'Verity gives food manufacturers one system for perishable raw material yield, allergen changeover and line cleaning, date coding and shelf life, hygiene audit evidence and retailer commitments.',
    keywords: [
      'AI software for food manufacturers',
      'food manufacturing management software',
      'allergen changeover and line cleaning software',
      'food shelf life and traceability software',
    ],
  },

  hero: {
    eyebrow: 'Verity for food manufacturers',
    headline: 'Your raw material is losing value while you decide what to do with it.',
    lede:
      'Food manufacturing starts with a perishable, variable input and ends with a date printed on a pack. Verity connects yield, changeover and shelf life to the orders they serve.',
    note: 'Verity runs the plant and the order book. Weighing and process equipment stays where it is.',
    panel: {
      title: 'Plant',
      meta: 'This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Production runs', value: '46', note: '18 products' },
        { label: 'Raw material yield', value: '78%', note: 'standard 84%' },
        { label: 'Changeover hours', value: '31', note: '9 allergen cleans' },
        { label: 'Short-dated stock', value: '2,140 units', note: 'under 30% life' },
      ],
      rows: [
        { name: 'Yield 6 points below standard on two lines', meta: 'Intake quality not correlated', active: true },
        { name: '9 allergen cleans this week', meta: 'Sequence not optimised', active: true },
        { name: '2,140 units under 30% remaining life', meta: 'Retailer acceptance at risk', active: true },
        { name: 'Hygiene checks incomplete on 3 shifts', meta: 'Audit evidence gap', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own plant in this shape.',
    },
  },

  overview: {
    heading: 'A perishable input, a dated output, and a line that has to be cleaned between them.',
    paragraphs: [
      'Food manufacturing begins with material that is variable and deteriorating. Intake quality changes by supplier, season and consignment, and six points of yield below standard is usually intake variation rather than process failure — but only a record connecting intake to output can tell the two apart.',
      'The second characteristic is changeover. Running different products on the same line requires cleaning, and running an allergen-containing product before a free-from one requires a validated clean that costs hours. Nine allergen cleans in a week is production sequencing done without reference to its own cost.',
      'The third is the date on the pack. Shelf life starts at production and retailers reject stock below a minimum remaining life, which means two thousand short-dated units is stock that may not be sellable to the customer it was made for.',
      'The fourth is hygiene evidence. Cleaning, temperature and check records are the proof at audit, and incomplete checks on three shifts is a gap that appears in an audit report rather than in production.',
      'The fifth is traceability, which in food is measured in the hours it takes to identify affected product.',
      'Verity connects intake to yield, sequences production against changeover cost, tracks remaining life against retailer requirements, and keeps hygiene evidence current.',
    ],
  },

  terminology: [
    ['Products, recipes, batches', 'Work'],
    ['Intake, ingredients, packaging', 'Inventory'],
    ['Runs, changeover, line cleaning', 'Workflows'],
    ['Date coding, shelf life, remaining life', 'Records'],
    ['Retailers, distributors, food service', 'Relationships'],
    ['Hygiene checks, audits, certification', 'Control'],
    ['Operators, hygiene staff, quality', 'People'],
  ],

  challengesHeading: 'Variable input, costly changeover, and a clock on the output.',
  challengesLede:
    'Food manufacturing difficulties come from perishability at both ends of the process.',
  challenges: [
    { problem: 'Yield loss is not connected to intake', detail: 'Output falls short and the cause sits in a consignment nobody linked to the run.', outcome: 'Intake quality and supplier lot are recorded against the runs that consumed them.' },
    { problem: 'Production sequence ignores changeover cost', detail: 'Products are scheduled by order urgency and allergen cleans multiply.', outcome: 'Changeover requirements are attached to the schedule, so sequence is a costed decision.' },
    { problem: 'Short-dated stock reaches its rejection point', detail: 'Retailers refuse stock below minimum remaining life and it becomes secondary-market or waste.', outcome: 'Remaining life is tracked against each customer’s requirement with action raised early.' },
    { problem: 'Hygiene evidence has gaps', detail: 'Checks are performed and not recorded, or recorded inconsistently across shifts.', outcome: 'Checks are scheduled per shift with completion and evidence visible.' },
    { problem: 'Traceability takes too long', detail: 'Identifying affected product across ingredients, runs and dispatches is a manual exercise.', outcome: 'Ingredient lots connect forward to runs, packs and customers as a query.' },
    { problem: 'Giveaway and overfill are invisible', detail: 'Filling above the declared weight is a continuous margin loss that no report shows.', outcome: 'Fill weights are recorded against runs, making giveaway measurable by line and product.' },
  ],

  modulesLede: 'One system across intake, production, dating and dispatch.',
  modules: [
    { id: 'inventory', title: 'Intake, ingredients and packaging', line: 'Materials are held by lot with supplier, intake quality, condition, shelf life and consumption per run.', why: 'The variability of the input is the main driver of yield in food.', example: 'Yield by intake consignment and supplier.' },
    { id: 'workflows', title: 'Runs, changeover and line cleaning', line: 'Each run carries its line, sequence position, changeover requirement, cleaning record and output.', why: 'Changeover is real production time and it is set by the order of the schedule.', example: 'Nine allergen cleans in a week from sequencing.' },
    { id: 'records', title: 'Date coding, shelf life and remaining life', line: 'Every pack run carries its production date, shelf life, date code and remaining life against customer minimums.', why: 'Retailers buy remaining life, not product.', example: 'Two thousand units below thirty per cent remaining life.' },
    { id: 'control', title: 'Hygiene checks, audits and certification', line: 'One permission model and one audit trail, with hygiene, temperature and cleaning checks scheduled per shift and evidenced.', why: 'The audit is passed on records made at the time, by shift.', example: 'Hygiene checks incomplete on three shifts.' },
    { id: 'work', title: 'Products, recipes and specifications', line: 'Each product carries its recipe, allergen profile, standard yield, fill target and customer specification.', why: 'Allergen profile drives changeover and standard yield drives the variance measure.', example: 'Allergen profile by product driving clean requirements.' },
    { id: 'relationships', title: 'Retailers, distributors and food service', line: 'Customers carry their specifications, minimum life requirements, order patterns and rejections.', why: 'Minimum life requirements differ by customer and decide where stock can go.', example: 'Short-dated stock matched to customers whose minimums it still meets.' },
    { id: 'people', title: 'Operators, hygiene and quality staff', line: 'Staff carry training, shift assignment, checks performed and runs operated.', why: 'Hygiene evidence and yield both vary by shift.', example: 'Yield and check completion by shift.' },
    { id: 'intelligence', title: 'Yield, changeover and life reporting', line: 'Yield against standard, giveaway, changeover hours, remaining life exposure, hygiene completion and traceability come from the records.', why: 'Food margin is lost in yield, giveaway and short-dated stock, and all three are recordable.', example: 'Giveaway by line and product against fill target.' },
    { id: 'ai', title: 'Ask the plant a question', line: 'Verity AI answers from your own intake, run, dating and dispatch records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about yield causes and stock about to age out.', example: '"Which stock falls below customer minimum life this week?" returns the packs and the customers.' },
    { id: 'suppliers', title: 'Growers, processors and packaging suppliers', line: 'Suppliers carry intake quality history, yield achieved, rejection rates and lead times.', why: 'Supplier comparison in food is a yield comparison, not a price comparison.', example: 'Yield achieved by supplier across consignments.' },
    { id: 'logistics', title: 'Dispatch, temperature and delivery', line: 'Dispatch records carry the packs, date codes, temperature requirements, vehicle and customer.', why: 'Forward traceability and temperature integrity both live in dispatch.', example: 'Packs by date code dispatched to each customer.' },
    { id: 'orders', title: 'Retailer orders and commitments', line: 'Orders carry volumes, specifications, life requirements and delivery windows.', why: 'A committed retailer volume decides what must be produced and when.', example: 'Committed volumes against production plan and available life.' },
  ],

  workflowsHeading: 'Intake, sequence, run, code, dispatch.',
  workflowsLede: 'These already happen. Recorded, yield and life stop being discovered too late.',
  workflows: [
    { name: 'Intake and assessment', steps: ['Consignment received against supplier and specification', 'Quality assessed and recorded', 'Shelf life and storage condition set', 'Accepted, downgraded or rejected', 'Lot made available with its assessment attached'], note: 'The intake assessment is what later explains the run’s yield.' },
    { name: 'Production sequencing', steps: ['Orders and committed volumes reviewed', 'Allergen profiles and changeover requirements applied', 'Sequence built to minimise validated cleans', 'Runs scheduled with line and shift', 'Changeover time recorded against the plan'], note: 'Sequencing by allergen before urgency is where changeover hours are recovered.' },
    { name: 'Production run', steps: ['Line clearance and hygiene checks recorded', 'Ingredients issued from assessed lots', 'Fill weights and output recorded', 'Yield reconciled against standard', 'Date codes applied and recorded'], note: 'Recording fill weights is what makes giveaway visible.' },
    { name: 'Stock life management', steps: ['Remaining life calculated per pack run', 'Customer minimum life requirements applied', 'Stock matched to customers it still satisfies', 'Secondary channel or promotion decided for the rest', 'Write-off recorded where unavoidable'], note: 'Matching short-dated stock to customers with lower minimums is where recovery happens.' },
    { name: 'Traceability exercise', steps: ['Ingredient lot or date code identified', 'Runs that consumed it listed', 'Packs and date codes produced identified', 'Customers and dispatches reached', 'Quantity and action recorded'], note: 'Time to identify affected product is the measure that matters.' },
  ],

  ai: {
    heading: 'Ask about yield and remaining life.',
    lede: 'Verity AI reads the same intake, run, dating and dispatch records the plant creates as it produces. It answers from your own plant, respects permissions, and can turn an answer into a sequencing or allocation decision.',
    panelMeta: 'Grounded in your plant records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which suppliers gave the lowest yield this month?',
      'Which stock falls below customer minimum life this week?',
      'How many changeover hours came from allergen cleans?',
      'What is giveaway by line and product?',
      'Which runs fell short of standard yield and what did they consume?',
      'Which hygiene checks are incomplete by shift?',
      'Which customers received packs from this ingredient lot?',
      'What committed volumes are unproduced against their delivery window?',
      'Summarise yield, changeover and life position.',
    ],
  },

  automationHeading: 'Life, yield and hygiene.',
  automationLede: 'Each runs from the plant’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Stock falls below a customer minimum life', steps: ['Flagged with quantity and eligible customers', 'Allocation or promotion decision raised', 'Outcome recorded'] },
    { trigger: 'Run yield falls below standard', steps: ['Flagged with intake lots and shift', 'Investigation assigned', 'Cause recorded against supplier or process'] },
    { trigger: 'A hygiene check is missed on a shift', steps: ['Gap raised against the shift and line', 'Owner assigned', 'Evidence recorded on completion'] },
    { trigger: 'The schedule creates avoidable allergen cleans', steps: ['Alternative sequence surfaced with hours saved', 'Decision recorded', 'Plan updated'] },
    { trigger: 'Fill weight drifts above target', steps: ['Giveaway calculated for the run', 'Line adjustment assigned', 'Position monitored across subsequent runs'] },
  ],

  intelligenceHeading: 'What the plant can see.',
  intelligenceLede: 'Yield, changeover and shelf life from production records.',
  intelligence: [
    { area: 'Yield', points: ['Yield against standard by product and line', 'Yield by supplier and consignment', 'Waste and downgrade by cause', 'Giveaway against fill target'] },
    { area: 'Changeover', points: ['Changeover hours by type', 'Allergen cleans and their cause in sequence', 'Line utilisation against available hours', 'Schedule adherence'] },
    { area: 'Shelf life', points: ['Remaining life profile of stock', 'Exposure against customer minimums', 'Short-dated recovery and write-off', 'Days of cover by product'] },
    { area: 'Compliance', points: ['Hygiene check completion by shift', 'Temperature records', 'Traceability response time', 'Audit evidence completeness'] },
  ],
  intelligenceNote: 'Verity records the plant’s operations. Weighing and process equipment continues as it is.',

  rolesHeading: 'One plant, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Managing director', question: 'Where is margin going?', focus: 'Yield against standard, giveaway, changeover hours, short-dated write-off.' },
    { role: 'Production planner', question: 'What order should we run in?', focus: 'Committed volumes, allergen sequencing, line availability, changeover cost.' },
    { role: 'Quality and hygiene', question: 'Is the evidence complete?', focus: 'Check completion by shift, temperature records, traceability readiness, audit gaps.' },
    { role: 'Sales', question: 'What can I sell and to whom?', focus: 'Stock by remaining life, customer minimum requirements, committed orders, delivery windows.' },
  ],

  useCasesHeading: 'What food manufacturers use Verity for',
  useCases: [
    { name: 'Connecting intake to yield', body: 'Consignment quality and supplier lot recorded against the runs that consumed them, so yield shortfalls separate intake variation from process problems.' },
    { name: 'Sequencing against changeover cost', body: 'Allergen profiles and cleaning requirements attached to the schedule, so the production order is a costed decision rather than a queue of urgent orders.' },
    { name: 'Managing remaining life', body: 'Life tracked per pack run against each customer’s minimum requirement, so short-dated stock is placed where it is still acceptable.' },
    { name: 'Measuring giveaway', body: 'Fill weights recorded against runs, turning continuous overfill into a number by line and product.' },
    { name: 'Hygiene evidence by shift', body: 'Checks scheduled and evidenced per shift, so audit gaps are visible in production rather than in an audit report.' },
    { name: 'Fast traceability', body: 'Ingredient lots connected forward to runs, date codes, dispatches and customers, making affected product identifiable as a query.' },
    { name: 'Asking about the plant', body: 'Plain-language questions across yield, changeover, stock life and hygiene, with sequencing and allocation decisions raised in the same step.' },
  ],

  migration: 'Weighing and process equipment continues and is mapped during implementation. Products and recipes with allergen profiles, ingredient lots, supplier intake history, production and date code records, customer specifications and dispatch history are brought across.',

  faqHeading: 'Questions food manufacturers ask',
  faqs: [
    ['What can AI software do for a food manufacturer?', 'Verity AI answers questions from your own intake, run, dating and dispatch records: which suppliers gave the lowest yield, which stock falls below a customer minimum life this week, how many changeover hours came from allergen cleans, what giveaway is by line. Each answer can become a sequencing or allocation decision.'],
    ['How does it help with yield?', 'Intake quality and supplier lot are recorded and connected to the runs that consumed them, so a yield shortfall can be attributed to the consignment, the shift or the process rather than averaged across a month.'],
    ['Can it reduce changeover time?', 'Allergen profiles and cleaning requirements sit on the products and are applied to the schedule, so sequencing minimises validated cleans instead of ordering runs purely by urgency.'],
    ['How is shelf life handled?', 'Remaining life is calculated per pack run and compared with each customer’s minimum acceptance requirement, so stock is placed with customers it still satisfies before it becomes waste.'],
    ['Does it measure giveaway?', 'Fill weights are recorded against runs and compared with the declared target, which turns continuous overfill into a measurable loss by line and product.'],
    ['How fast is traceability?', 'Ingredient lots connect forward through runs, date codes and dispatches to customers, so identifying affected product is a query against the records rather than a manual exercise across several systems.'],
    ['Does it hold hygiene records?', 'Hygiene, temperature and cleaning checks are scheduled per shift with completion and evidence visible, which is what an audit actually examines.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of products, allergen profiles, intake assessment and hygiene schedules, configuration, migration of lots and production history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with yield against intake.',
  ctaLede: 'Most of the loss is upstream of the line. Tell us what an intake record captures today.',

  related: ['manufacturers', 'chemical-manufacturers', 'packaging-companies', 'supermarkets', 'distributors', 'cloud-kitchens'],
};
