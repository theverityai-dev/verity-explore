export default {
  slug: 'department-stores',
  status: 'published',
  plural: 'department stores',
  subject: 'department store',

  seo: {
    title: 'AI business management software for department stores | Verity',
    description:
      'Verity connects floor and concession performance, brand settlements, shared staff, space allocation and category comparison into one operational system.',
    keywords: [
      'AI software for department stores',
      'department store management software',
      'concession settlement and floor productivity',
      'multi category retail space allocation',
    ],
  },

  hero: {
    eyebrow: 'Verity for department stores',
    headline: 'Six categories under one roof, competing for the same floor and the same staff.',
    lede:
      'A department store is several retail businesses sharing overheads, and it only works if each one earns its floor. Verity measures the floor, the concession and the staff against it.',
    note: 'Runs alongside your existing billing and brand arrangements.',
    panel: {
      title: 'Store',
      meta: 'All floors · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹3.9 Cr', note: 'across 7 departments' },
        { label: 'Sales per sq ft', value: '₹1,840', note: 'range ₹640 to ₹4,100' },
        { label: 'Concession settlements', value: '₹42 L', note: '9 unreconciled' },
        { label: 'Staff coverage', value: '3 floors', note: 'short at peak hours' },
      ],
      rows: [
        { name: 'One department at ₹640 per square foot', meta: 'Occupying prime floor space', active: true },
        { name: '9 concession settlements unreconciled', meta: '₹42 L · two brands, three months', active: true },
        { name: 'Three floors short-staffed at weekend peak', meta: 'While two are over-covered', active: true },
        { name: 'Category markdown taken without floor review', meta: 'Space cost not considered', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'Every department is a tenant, whether or not it is a concession.',
    paragraphs: [
      'A department store runs several distinct retail businesses under one roof: different suppliers, different margins, different stock behaviour and different customers, all sharing the same rent, the same staff pool and the same footfall. The only honest way to compare them is by what they return against the floor they occupy, and most stores compare them on sales.',
      'A department at six hundred and forty rupees per square foot next to one at four thousand one hundred is not a weaker performer — it is a space allocation decision that has not been taken. That comparison requires sales, margin and space to sit on the same record.',
      'The second complication is concessions. Brands operating inside the store settle on their own terms, and reconciling what was sold against what was settled is a monthly exercise that is often partial. Nine settlements unreconciled across three months is money that may never be recovered.',
      'The third is shared staff. Floor coverage is a store-level resource allocated by department, and coverage is routinely uneven at peak — some floors short while others are over-covered — because staffing is planned by department rather than by footfall.',
      'Verity holds sales, margin, space, concession settlements and staffing against the departments and floors that produce them.',
    ],
  },

  terminology: [
    ['Departments, categories, concessions', 'Locations'],
    ['Lines, stock, own-buy and concession', 'Inventory'],
    ['Transactions, returns, exchanges', 'Orders'],
    ['Brands, concessionaires, suppliers', 'Suppliers'],
    ['Floor staff, department managers', 'People'],
    ['Settlements, markdowns, approvals', 'Workflows'],
    ['Customers, loyalty members', 'Relationships'],
  ],

  challengesHeading: 'Comparability under one roof.',
  challengesLede:
    'Department store difficulties come from several different businesses being compared on the wrong measure.',
  challenges: [
    { problem: 'Departments are compared on sales, not on space', detail: 'A high-revenue department occupying a third of the floor may return less per square foot than a small one.', outcome: 'Sales, margin and floor area sit together, so return per square foot is the comparison.' },
    { problem: 'Concession settlements go unreconciled', detail: 'Brands settle on their own terms and matching sales to settlement is partial, so shortfalls persist across months.', outcome: 'Concession sales are recorded and settlements reconciled against them, with variances raised as claims.' },
    { problem: 'Staff coverage is planned by department', detail: 'Each department rosters its own floor, so coverage is uneven against a footfall pattern that belongs to the store.', outcome: 'Footfall and transactions by floor and hour drive coverage across departments rather than within them.' },
    { problem: 'Markdown ignores the cost of space', detail: 'Ageing stock is marked down on its own margin without reference to the floor it occupies.', outcome: 'Ageing is reported with the space it holds, so clearance decisions include the opportunity cost.' },
    { problem: 'Category stock behaves differently and is managed identically', detail: 'Fashion, home, electronics and beauty have different turn rates and the store applies one reorder discipline.', outcome: 'Reorder and ageing thresholds are set by category rather than store-wide.' },
    { problem: 'Loyalty spans departments and reporting does not', detail: 'A customer shops several departments and each reports them separately, so cross-department value is invisible.', outcome: 'Customers are records across the store, so basket composition across departments is measurable.' },
  ],

  modulesLede: 'One system across floors, concessions, stock and staff.',
  modules: [
    { id: 'locations', title: 'Departments, floors and concessions', line: 'Each department and concession is a location with its floor area, sales, margin, stock and staff.', why: 'Space is the shared resource and the only fair basis for comparison.', example: 'Return per square foot by department, from ₹640 to ₹4,100.' },
    { id: 'inventory', title: 'Own-buy and concession stock', line: 'Stock is held per department with cost, ageing, category-specific thresholds and the space it occupies.', why: 'Categories turn at very different rates and cannot share one discipline.', example: 'Ageing by category against category-appropriate thresholds.' },
    { id: 'suppliers', title: 'Brands and concessionaires', line: 'Brands carry their terms, settlement basis, sales recorded, settlements received and variances.', why: 'Concession settlement is a reconciliation problem with a deadline.', example: 'Nine settlements unreconciled across two brands and three months.' },
    { id: 'workflows', title: 'Settlements, markdowns and approvals', line: 'Settlement reconciliation, markdown, transfer and write-off move through defined steps with recorded decisions.', why: 'Markdown across categories under one roof needs a consistent basis.', example: 'A markdown carrying the floor space and ageing that justified it.' },
    { id: 'workforce', title: 'Floor coverage against footfall', line: 'Staffing and attendance are connected to the floors and hours they covered.', why: 'Coverage is a store resource and footfall is a store pattern.', example: 'Three floors short at weekend peak while two are over-covered.' },
    { id: 'people', title: 'Floor staff and department managers', line: 'Staff are modelled once, and every sale, transfer and markdown carries who made it.', why: 'Conversion and discounting vary by floor and by individual.', example: 'Conversion and average basket by floor and staff member.' },
    { id: 'orders', title: 'Transactions, returns and exchanges', line: 'Transactions record department, items, customer, staff and any return with its reason.', why: 'A basket spanning departments is the store’s real unit of value.', example: 'Basket composition across departments, which loyalty reporting usually misses.' },
    { id: 'relationships', title: 'Customers and loyalty members', line: 'Customers are records across the whole store with purchases, returns and preferences.', why: 'Cross-department shopping is what a department store exists to produce.', example: 'Customers shopping three or more departments, and what pulls them.' },
    { id: 'intelligence', title: 'Floor, category and settlement reporting', line: 'Return per square foot, category ageing and turn, concession settlement variance, coverage against footfall and cross-department baskets come from the records.', why: 'The store-level decisions are all space decisions, and they need space in the numbers.', example: 'Return per square foot ranked by department and floor.' },
    { id: 'ai', title: 'Ask the store a question', line: 'Verity AI answers from your own sales, stock, settlement and staffing records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions cross departments, which departmental reporting prevents.', example: '"Which departments return least per square foot?" returns the ranking with space attached.' },
    { id: 'control', title: 'Who can mark down and settle', line: 'One permission model and one audit trail across every record.', why: 'Markdown and settlement approval both distribute across department managers.', example: 'Every markdown and settlement adjustment carrying its approver.' },
    { id: 'records', title: 'Brand agreements and terms', line: 'Concession agreements, settlement bases and category terms attach to the brand they concern.', why: 'A settlement dispute resolves to the agreement.', example: 'The settlement basis on the brand record, referenced at reconciliation.' },
  ],

  workflowsHeading: 'Comparing several businesses fairly.',
  workflowsLede: 'These already happen. Recorded against floor and department they become comparable.',
  workflows: [
    { name: 'Floor performance review', steps: ['Sales and margin pulled by department', 'Floor area applied', 'Return per square foot calculated and ranked', 'Space reallocation decisions raised', 'Decisions recorded against departments'], note: 'Space is the store’s scarcest asset and the least often used as a denominator.' },
    { name: 'Concession settlement', steps: ['Concession sales recorded as they occur', 'Settlement received for the period', 'Sales matched against settlement per terms', 'Variance raised as a claim with references', 'Net position recorded against the brand'], note: 'Reconciling against your own records is the only way to catch a shortfall.' },
    { name: 'Coverage against footfall', steps: ['Transactions and footfall aggregated by floor and hour', 'Coverage compared against the pattern', 'Cross-department reallocation proposed', 'Roster adjusted for the period', 'Result compared afterwards'], note: 'Rostering by department guarantees uneven coverage against a store-wide pattern.' },
    { name: 'Category-appropriate replenishment', steps: ['Turn rates measured by category', 'Reorder and ageing thresholds set per category', 'Replenishment raised against those thresholds', 'Delivery checked and recorded', 'Thresholds reviewed against actual turn'], note: 'One store-wide discipline across categories that turn at different rates produces both stockouts and dead stock.' },
    { name: 'Markdown with space cost', steps: ['Ageing pulled by category with floor space occupied', 'Opportunity cost of the space considered', 'Markdown proposed and approved', 'Space reallocated where cleared', 'Recovery compared with cost and space freed'], note: 'The cost of holding old stock in a department store is the floor, not just the capital.' },
  ],

  ai: {
    heading: 'Ask what the floor is earning.',
    lede: 'Verity AI reads the same sales, stock, settlement and staffing records the store creates as it trades. It answers across departments, respects permissions, and can turn an answer into space and staffing decisions.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which departments return least per square foot?',
      'Which concession settlements do not match our recorded sales?',
      'Which floors are short-staffed against footfall at peak?',
      'Which categories are ageing fastest against their own turn rate?',
      'Which customers shop three or more departments?',
      'What is margin by department after markdown?',
      'Which brands settle latest or shortest?',
      'Where is stock occupying prime floor space with no movement?',
      'Summarise floor productivity across the store.',
    ],
  },

  automationHeading: 'The reconciliations and the coverage.',
  automationLede: 'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A concession settlement is received', steps: ['Matched against recorded concession sales', 'Variance raised with references', 'Claim assigned before the window closes'] },
    { trigger: 'A department falls below its return-per-square-foot threshold', steps: ['Department flagged with space and margin', 'Review assigned to the store head', 'Space decision recorded'] },
    { trigger: 'Footfall exceeds coverage on a floor', steps: ['Gap flagged for the hour band', 'Cross-department reallocation proposed', 'Outcome recorded against the shift'] },
    { trigger: 'Stock ages past its category threshold', steps: ['Flagged with value and floor space held', 'Markdown review assigned', 'Decision recorded with space freed'] },
    { trigger: 'A markdown exceeds threshold', steps: ['Held at approval with ageing and space attached', 'Routed to the department head', 'Decision recorded'] },
  ],

  intelligenceHeading: 'What the store head can actually see.',
  intelligenceLede: 'Several businesses compared on the resource they share.',
  intelligence: [
    { area: 'Space', points: ['Return per square foot by department and floor', 'Space occupied by ageing stock', 'Category space against contribution', 'Effect of reallocation decisions'] },
    { area: 'Concessions', points: ['Sales recorded against settlements received', 'Variance and claims raised', 'Settlement timeliness by brand', 'Contribution by concession'] },
    { area: 'Stock', points: ['Turn and ageing by category', 'Category-appropriate threshold breaches', 'Markdown taken by category', 'Own-buy against concession mix'] },
    { area: 'Staffing', points: ['Coverage against footfall by floor and hour', 'Conversion by floor and staff member', 'Labour cost against department contribution', 'Peak coverage gaps'] },
    { area: 'Customers', points: ['Cross-department baskets', 'Loyalty value across the store', 'Return rates by department', 'Customers shopping a single department only'] },
  ],
  intelligenceNote: 'All of it comes from recording sales, stock and settlements against the department and floor they belong to.',

  rolesHeading: 'One roof, four questions.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Store head', question: 'Which departments earn their floor?', focus: 'Return per square foot, category contribution, concession performance, coverage against footfall.' },
    { role: 'Department manager', question: 'How is my floor doing?', focus: 'Sales and margin against space, ageing, staffing coverage, markdown approvals.' },
    { role: 'Buying', question: 'What is turning and what is not?', focus: 'Turn by category, ageing thresholds, supplier and brand performance, replenishment.' },
    { role: 'Accounts', question: 'Do the settlements match?', focus: 'Concession sales against settlements, variances and claims, brand balances.' },
  ],

  useCasesHeading: 'What department stores use Verity for',
  useCases: [
    { name: 'Return per square foot', body: 'Sales, margin and floor area together, so departments are compared on the resource they actually share.' },
    { name: 'Concession settlement reconciliation', body: 'Recorded concession sales matched against settlements, so a shortfall becomes a claim rather than a persistent gap.' },
    { name: 'Coverage against footfall', body: 'Staffing allocated across departments against a store-wide footfall pattern rather than rostered within each.' },
    { name: 'Category-specific thresholds', body: 'Reorder and ageing rules set by category, since fashion, home and electronics turn at different rates.' },
    { name: 'Markdown with space cost', body: 'Ageing reported with the floor it occupies, so clearance includes the opportunity cost of the space.' },
    { name: 'Cross-department customers', body: 'Customers held across the whole store, making the multi-department basket measurable.' },
    { name: 'Asking across floors', body: 'Plain-language questions spanning departments, space, staffing and settlements, with decisions raised in the same step.' },
  ],

  migration: 'Your billing setup and brand agreements continue and are mapped during implementation. Departments, floor areas, stock, brands and settlement terms are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions department stores ask',
  faqs: [
    ['What can AI software do for a department store?', 'Verity AI answers questions from your own sales, stock, settlement and staffing records: which departments return least per square foot, which concession settlements do not match recorded sales, which floors are short at peak, which categories are ageing fastest. Each answer can become a space or staffing decision.'],
    ['Why measure return per square foot?', 'Because floor space is the resource every department shares and competes for. A high-revenue department occupying a third of the floor can return less per square foot than a small one, and comparing on sales alone hides that entirely.'],
    ['Can it reconcile concession settlements?', 'Concession sales are recorded as they occur and settlements are matched against them per the brand’s terms, so variances are raised as claims with references rather than persisting across months.'],
    ['How does it help with staffing?', 'Footfall and transactions are recorded by floor and hour, so coverage is allocated across departments against a store-wide pattern rather than rostered within each department in isolation.'],
    ['Do different categories need different rules?', 'Yes, and applying one store-wide reorder and ageing discipline across categories that turn at very different rates produces stockouts in fast categories and dead stock in slow ones. Thresholds are set per category.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds the departments, floor areas, stock, concessions, staffing and reporting across them.'],
    ['Can we see cross-department customers?', 'Customers are records across the whole store rather than per department, so the multi-department basket — which is the reason a department store exists — becomes measurable.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of departments, concessions and settlement terms, configuration, migration of stock and brands, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with return per square foot.',
  ctaLede: 'It usually reorders which departments look successful. Tell us how floors are compared today.',

  related: ['retail-stores', 'fashion-stores', 'shoe-stores', 'home-decor-stores', 'beauty-stores', 'supermarkets'],
};
