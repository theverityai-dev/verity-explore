export default {
  slug: 'furniture-manufacturers',
  status: 'published',
  plural: 'furniture manufacturers',
  subject: 'furniture manufacturer',

  seo: {
    title: 'AI business management software for furniture manufacturers | Verity',
    description:
      'Verity gives furniture manufacturers one system for configured orders, blocked components, finished goods space, finish batching and transit damage.',
    keywords: [
      'AI software for furniture manufacturers',
      'furniture manufacturing management software',
      'made to order furniture production software',
      'furniture finished goods and dispatch software',
    ],
  },

  hero: {
    eyebrow: 'Verity for furniture manufacturers',
    headline: 'Same sofa, eleven fabrics, three timbers, two arm styles. It is not the same sofa.',
    lede:
      'Furniture is configured when it is ordered and manufactured as if it were standard. Verity carries the configuration from order through cutting, finish, dispatch and installation.',
    note: 'Verity runs the factory and the order book. Design tools stay where they are.',
    panel: {
      title: 'Works',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders in production', value: '312', note: '96 configurations' },
        { label: 'Finished goods held', value: '41 days', note: 'space at 88%' },
        { label: 'Damage after dispatch', value: '3.1%', note: 'transit and installation' },
        { label: 'Orders waiting on one item', value: '27', note: 'fabric or fitting' },
      ],
      rows: [
        { name: '27 complete orders held for one missing component', meta: 'Cannot dispatch, occupying space', active: true },
        { name: 'Finished goods space at 88%', meta: 'Bulky items, slow collection', active: true },
        { name: '3.1% damaged after dispatch', meta: 'Cost carried by the factory', active: true },
        { name: 'Two finishes running below batch size', meta: 'Setup cost per unit high', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own works in this shape.',
    },
  },

  overview: {
    heading: 'A configured product, a bulky output, and a long tail of options.',
    paragraphs: [
      'Furniture manufacturing looks like standard production and behaves like made-to-order. A catalogue of forty models becomes hundreds of real variants once fabric, timber, finish, dimension and fitting choices are applied, and each of those variants has a different bill of materials, a different cutting plan and a different lead time. Ninety-six live configurations across three hundred orders is the actual production problem, not forty models.',
      'The second characteristic is that a single missing component blocks a whole piece. Twenty-seven complete orders held for one fabric or one fitting is finished value sitting still, and because furniture is bulky it is also occupying the space the factory needs for the next batch.',
      'The third is that finished goods are expensive to hold. Forty-one days of stock in a business where a single item can occupy a cubic metre is a space constraint before it is a working capital one, and space at eighty-eight per cent is a production stoppage waiting to happen.',
      'The fourth is damage. Furniture is damaged in transit, in handling and during installation, and three per cent damaged after dispatch is a cost the factory carries with no revenue attached to it.',
      'The fifth is finish batching. Running a finish below its economic batch size loads setup cost onto a small number of units.',
      'Verity carries the configuration through the whole chain and holds space, component blocking and damage against it.',
    ],
  },

  terminology: [
    ['Models, variants, configurations', 'Work'],
    ['Timber, boards, fabric, fittings', 'Inventory'],
    ['Cutting, assembly, finishing, upholstery', 'Workflows'],
    ['Dealers, retailers, project clients', 'Relationships'],
    ['Finished goods, warehouses, floor space', 'Locations'],
    ['Dispatch, installation, damage', 'Logistics'],
    ['Carpenters, polishers, upholsterers', 'People'],
  ],

  challengesHeading: 'Configuration multiplies everything downstream.',
  challengesLede:
    'Furniture difficulties come from selling choice and manufacturing in batches.',
  challenges: [
    { problem: 'The configuration is lost between order and shop floor', detail: 'A variant is ordered and produced to the standard specification.', outcome: 'The configuration travels with the order into cutting, finishing and upholstery.' },
    { problem: 'One missing component holds a complete piece', detail: 'A fitting or a fabric roll blocks dispatch of an otherwise finished item.', outcome: 'Blocked orders are visible by the component blocking them, so shortages are prioritised by value held.' },
    { problem: 'Finished goods consume the space production needs', detail: 'Bulky completed items accumulate and the factory runs out of floor before it runs out of capacity.', outcome: 'Space is tracked as a constraint with ageing of finished stock by order.' },
    { problem: 'Damage after dispatch has no owner', detail: 'Items are damaged in transit or installation and the cost is absorbed centrally.', outcome: 'Damage is recorded with stage, cause and carrier, so the pattern is addressable.' },
    { problem: 'Finish batches run below economic size', detail: 'Small runs of a colour or polish carry the full setup cost.', outcome: 'Orders needing the same finish are visible together, so batching is a decision.' },
    { problem: 'Material yield varies by board and timber lot', detail: 'Natural variation changes how much usable material a lot yields.', outcome: 'Consumption is recorded against lots, so yield by supplier and lot is measurable.' },
  ],

  modulesLede: 'One system from configured order to installed piece.',
  modules: [
    { id: 'work', title: 'Models, variants and production orders', line: 'Each order carries its configuration — model, dimension, timber, finish, fabric, fittings — and generates its own bill of materials and route.', why: 'The variant, not the model, is what the factory actually makes.', example: 'Ninety-six live configurations across three hundred orders.' },
    { id: 'inventory', title: 'Timber, boards, fabric and fittings', line: 'Materials are held by lot with reservation against configured orders and consumption recorded at issue.', why: 'A configured order reserves specific materials, and a shortage blocks a specific piece.', example: 'Twenty-seven orders blocked by a single component each.' },
    { id: 'workflows', title: 'Cutting, assembly, finishing and upholstery', line: 'Each stage carries the configuration, the material issued, the operator and the output, with rework recorded.', why: 'Finish and upholstery are where a wrong configuration becomes an expensive mistake.', example: 'Orders at finishing grouped by finish for batching.' },
    { id: 'locations', title: 'Finished goods and floor space', line: 'Finished items are located with their order, holding age and space occupied.', why: 'Bulky output makes space the constraint before working capital is.', example: 'Finished goods space at eighty-eight per cent with forty-one days held.' },
    { id: 'logistics', title: 'Dispatch, delivery and installation', line: 'Dispatch carries the vehicle, route, items, installation requirement and condition on receipt.', why: 'The product is not delivered until it is assembled in a room without damage.', example: 'Damage rate by carrier and installation team.' },
    { id: 'records', title: 'Damage, rework and quality', line: 'Damage and rework are recorded with stage, cause, cost and responsibility.', why: 'Three per cent damaged after dispatch is only fixable once the stage is known.', example: 'Damage by stage: transit, handling, installation.' },
    { id: 'relationships', title: 'Dealers, retailers and project clients', line: 'Customers carry their orders, configurations, delivery requirements and claims history.', why: 'A dealer order and a project order have different tolerance for lead time and variance.', example: 'Lead time performance by customer type.' },
    { id: 'people', title: 'Carpenters, polishers and upholsterers', line: 'Skills, allocation and output are held per person and stage.', why: 'Finishing and upholstery quality is person-specific and shows in the rework record.', example: 'Rework rate by stage and operator group.' },
    { id: 'intelligence', title: 'Configuration, space and damage reporting', line: 'Configuration mix, blocked orders, space utilisation, damage rate, yield by lot and finish batching come from the records.', why: 'The factory’s costs are set by variety, space and damage, and all three are recordable.', example: 'Value of orders blocked by component.' },
    { id: 'ai', title: 'Ask the works a question', line: 'Verity AI answers from your own order, material, stage and dispatch records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about what is blocked and what can be batched.', example: '"Which orders are blocked by a single component?" returns twenty-seven with value held.' },
    { id: 'suppliers', title: 'Timber, fabric and fitting suppliers', line: 'Suppliers carry lead times, lot yield, quality issues and pricing.', why: 'Yield varies by supplier lot and it changes the real cost of the material.', example: 'Usable yield by timber supplier and lot.' },
    { id: 'orders', title: 'Customer orders, lead times and margin', line: 'Orders carry promised dates, configuration cost, actual consumption and margin.', why: 'A configured order’s margin depends on what it actually consumed.', example: 'Margin by configuration against standard cost.' },
    { id: 'control', title: 'Approvals, substitution and authority', line: 'One permission model and one audit trail covering material substitution, configuration change and dispatch release.', why: 'Substituting a fabric or finish without authority is a claim waiting to happen.', example: 'Substitutions recorded with approver and customer acceptance.' },
  ],

  workflowsHeading: 'Configure, reserve, make, finish, deliver.',
  workflowsLede: 'These already happen. Recorded, variety stops being chaos.',
  workflows: [
    { name: 'Order configuration', steps: ['Configuration captured at order with every option', 'Bill of materials generated for the variant', 'Materials reserved and shortages identified', 'Lead time confirmed against availability', 'Order released to production'], note: 'Confirming lead time against actual reservation is what makes a promised date real.' },
    { name: 'Cutting and material issue', steps: ['Lot allocated to the order', 'Cutting plan applied', 'Consumption and offcuts recorded', 'Yield captured against the lot', 'Balance returned to stock'], note: 'Yield recorded at the lot is what makes supplier comparison possible.' },
    { name: 'Finishing and batching', steps: ['Orders awaiting the same finish grouped', 'Batch size checked against economic run', 'Batch scheduled and setup recorded', 'Output and rework captured', 'Orders released to assembly'], note: 'Grouping by finish before scheduling is where setup cost is recovered.' },
    { name: 'Dispatch and installation', steps: ['Order checked complete against configuration', 'Loaded with handling instructions', 'Delivered and installed', 'Condition recorded on receipt', 'Damage or snag raised with cause'], note: 'Recording condition at receipt is what separates transit damage from installation damage.' },
    { name: 'Blocked order review', steps: ['Orders held for missing components listed', 'Value and space occupied calculated', 'Purchase or substitution decided', 'Authority recorded for substitution', 'Order released and dispatched'], note: 'Prioritising by value and space held changes which shortage gets bought first.' },
  ],

  ai: {
    heading: 'Ask about blocked value and batching.',
    lede: 'Verity AI reads the same order, material, stage and dispatch records the works creates as it produces. It answers from your own factory, respects permissions, and can turn an answer into a purchase or a batch decision.',
    panelMeta: 'Grounded in your works records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which orders are blocked by a single component and what value is held?',
      'Which orders awaiting the same finish could be batched?',
      'How much finished goods space is occupied and by which orders?',
      'What is damage rate by stage and carrier?',
      'What usable yield are we getting by timber supplier and lot?',
      'Which configurations consume more than their standard cost?',
      'Which orders are past their promised date and why?',
      'What is rework rate by stage?',
      'Summarise production position by configuration.',
    ],
  },

  automationHeading: 'Blocking, batching and damage.',
  automationLede: 'Each runs from the factory’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An order is complete except for one component', steps: ['Flagged with value and space held', 'Purchase or substitution raised', 'Release recorded on receipt'] },
    { trigger: 'Orders needing the same finish reach batch size', steps: ['Batch proposed with setup saving', 'Schedule updated', 'Output recorded against the batch'] },
    { trigger: 'Finished goods space passes a threshold', steps: ['Oldest held orders listed with customers', 'Collection or dispatch chased', 'Space position updated'] },
    { trigger: 'Damage is reported after dispatch', steps: ['Stage and cause recorded', 'Cost attributed to carrier or team', 'Replacement or repair order raised'] },
    { trigger: 'Lot yield falls below expectation', steps: ['Supplier and lot flagged', 'Cost impact calculated', 'Purchasing decision recorded'] },
  ],

  intelligenceHeading: 'What the works can see.',
  intelligenceLede: 'Variety, space and damage from production records.',
  intelligence: [
    { area: 'Production', points: ['Live configurations against models', 'Stage progress by order', 'Rework by stage and operator group', 'Finish batching and setup cost'] },
    { area: 'Material', points: ['Usable yield by lot and supplier', 'Consumption against configured bill of materials', 'Shortages blocking orders', 'Offcut and wastage rates'] },
    { area: 'Space', points: ['Finished goods occupancy', 'Holding age by order and customer', 'Blocked value in the yard', 'Dispatch throughput against production'] },
    { area: 'Delivery', points: ['Damage by stage, carrier and team', 'Installation completion', 'Lead time against promise', 'Claims by customer'] },
  ],
  intelligenceNote: 'Verity records the manufacturing operation. Design and drafting tools continue as they are.',

  rolesHeading: 'One works, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where is value stuck?', focus: 'Blocked orders and value held, space occupancy, damage cost, margin by configuration.' },
    { role: 'Production manager', question: 'What can I run this week?', focus: 'Released orders, material availability, finish batching, stage capacity.' },
    { role: 'Stores', question: 'What is reserved and what is short?', focus: 'Lot allocation, reservations against orders, shortages by component, receipts due.' },
    { role: 'Dispatch', question: 'What is complete and where does it go?', focus: 'Completed orders, loading and handling, installation requirements, damage on receipt.' },
  ],

  useCasesHeading: 'What furniture manufacturers use Verity for',
  useCases: [
    { name: 'Carrying the configuration through production', body: 'Every option chosen at order travelling with the job into cutting, finishing and upholstery, so a variant is not produced to the standard specification.' },
    { name: 'Unblocking held orders', body: 'Complete pieces held for one component listed by value and space occupied, so purchasing prioritises what releases the most.' },
    { name: 'Managing finished goods space', body: 'Occupancy and holding age tracked per order, because in bulky manufacturing space runs out before capacity does.' },
    { name: 'Batching finishes economically', body: 'Orders awaiting the same finish visible together, so setup cost is spread rather than loaded onto small runs.' },
    { name: 'Attributing damage', body: 'Damage recorded with stage, cause and responsibility across transit, handling and installation, which is what makes the rate reducible.' },
    { name: 'Yield by lot and supplier', body: 'Consumption recorded against timber and board lots, giving usable yield per supplier rather than a purchase price alone.' },
    { name: 'Asking about the works', body: 'Plain-language questions across orders, materials, space and damage, with purchase and batching decisions raised in the same step.' },
  ],

  migration: 'Design and drafting tools continue and are mapped during implementation. Models and option structures, live orders with configurations, material lots, supplier records, finished goods and damage history are brought across.',

  faqHeading: 'Questions furniture manufacturers ask',
  faqs: [
    ['What can AI software do for a furniture manufacturer?', 'Verity AI answers questions from your own order, material, stage and dispatch records: which orders are blocked by a single component and what value they hold, which orders awaiting the same finish could be batched, what damage rate is by stage and carrier, what yield each timber lot gave. Each answer can become a purchase or a batching decision.'],
    ['How does it handle product configuration?', 'The configuration is captured at order — model, dimension, timber, finish, fabric, fittings — and generates the bill of materials and route for that variant. It then travels with the job through cutting, finishing and upholstery rather than being reconciled against a catalogue specification.'],
    ['Why does one missing component matter so much?', 'Because it holds a complete piece. The value is already spent, the item cannot be invoiced, and in furniture it is also occupying the floor space the next batch needs. Prioritising shortages by value and space held changes what gets bought first.'],
    ['Can it treat space as a constraint?', 'Finished goods are located with their order, holding age and space occupied, so occupancy is a managed number rather than something noticed when the factory runs out of floor.'],
    ['How does it help with damage?', 'Damage is recorded with the stage it occurred at, its cause, its cost and who was responsible, across transit, handling and installation. That is what turns an absorbed percentage into a specific carrier or team problem.'],
    ['Does it measure material yield?', 'Consumption and offcuts are recorded against the specific lot issued, which gives usable yield by supplier and lot rather than comparing suppliers on purchase price alone.'],
    ['Does it replace our design software?', 'No. Design and drafting tools continue as they are. Verity holds the order book and the factory around them — configurations, materials, stages, space, dispatch and damage.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of models, option structures, production stages and dispatch process, configuration, migration of live orders and material lots, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the orders blocked by one part.',
  ctaLede: 'They are finished value standing in your floor space. Tell us how shortages are prioritised today.',

  related: ['manufacturers', 'furniture-stores', 'interior-design-firms', 'industrial-suppliers', 'wholesalers', 'packaging-companies'],
};
