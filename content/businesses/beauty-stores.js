export default {
  slug: 'beauty-stores',
  status: 'published',
  plural: 'beauty stores',
  subject: 'beauty retail business',

  seo: {
    title: 'AI business management software for beauty stores | Verity',
    description:
      'Verity connects multi-brand assortment, brand-funded promoter productivity, sampling cost, category space and customer repeat purchase into one system.',
    keywords: [
      'AI software for beauty stores',
      'beauty retail management software',
      'brand promoter productivity tracking',
      'multi brand assortment and sampling cost',
    ],
  },

  hero: {
    eyebrow: 'Verity for beauty retail',
    headline: 'Twenty brands, one floor, and staff paid by somebody else.',
    lede:
      'Beauty retail runs on brand relationships: assortment, promoter staff, samples and support all come from the brands. Verity measures what each brand actually contributes against the space and support it consumes.',
    note: 'Runs alongside your existing billing and brand arrangements.',
    panel: {
      title: 'Store',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹22 L', note: 'across 21 brands' },
        { label: 'Sales per promoter', value: '₹1.9 L', note: 'range ₹64 K to ₹4.2 L' },
        { label: 'Sampling cost', value: '₹1.4 L', note: 'against ₹96 K recovered' },
        { label: 'Brand support due', value: '₹3.2 L', note: '6 brands unclaimed' },
      ],
      rows: [
        { name: 'Two promoters producing under a quarter of the average', meta: 'Occupying prime counter space', active: true },
        { name: '₹1.4 L of sampling cost against ₹96 K recovered', meta: 'Support terms not claimed in full', active: true },
        { name: 'Six brands with unclaimed support this quarter', meta: '₹3.2 L · windows closing', active: true },
        { name: 'Repeat purchase rate down on two categories', meta: 'Customers not returning for refills', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'The economics are a set of brand relationships sharing a floor.',
    paragraphs: [
      'A multi-brand beauty store is not simply a retailer of beauty products. It is a floor divided among brands who supply the assortment, frequently fund the staff standing at their counter, provide samples and testers, and offer support against sales targets. What the store actually earns from each brand depends on all of those together, and almost no store measures them together.',
      'Promoter productivity is the clearest case. Brand-funded staff occupy counter space and represent one brand each, and their output varies enormously — from sixty-four thousand to four point two lakh a month in the same store. A promoter producing a quarter of the average is occupying prime space regardless of who pays their salary.',
      'The second is sampling. Samples and testers are a genuine cost, partly recoverable from brands under support terms, and usually issued informally. One point four lakh of sampling against ninety-six thousand recovered is a real gap.',
      'The third is support claims, which are time-bound and assembled from purchases and sales the store already records.',
      'The fourth is repeat purchase. Beauty consumables are refill businesses, and a category whose repeat rate is falling is losing customers before it is losing sales.',
      'Verity measures brand contribution against space, promoter output, sampling cost and repeat purchase together.',
    ],
  },

  terminology: [
    ['Brands, categories, assortment', 'Records'],
    ['Products, shades, batches, testers', 'Inventory'],
    ['Sales, returns, samples issued', 'Orders'],
    ['Customers, repeat buyers', 'Relationships'],
    ['Promoters, floor staff, beauty advisors', 'People'],
    ['Support claims, targets, approvals', 'Workflows'],
    ['Counters, floors, store', 'Locations'],
  ],

  challengesHeading: 'Brand economics measured in pieces.',
  challengesLede:
    'Beauty retail difficulties come from measuring sales by brand and cost by store, so contribution is never assembled.',
  challenges: [
    { problem: 'Promoter productivity is not compared', detail: 'Brand-funded staff vary enormously in output and occupy prime counter space regardless of who pays them.', outcome: 'Sales attributed to the promoter and the counter, so productivity per counter is comparable.' },
    { problem: 'Sampling is issued informally', detail: 'Samples and testers are real cost, partly recoverable, and given out at the counter without a record.', outcome: 'Samples are recorded issues against brand and counter, so cost and recovery are measurable.' },
    { problem: 'Brand support goes partly unclaimed', detail: 'Support is earned against purchases and sales within windows and assembled by hand, so some is always missed.', outcome: 'Support terms sit on the brand and claims are assembled from the records before windows close.' },
    { problem: 'Space is allocated by relationship', detail: 'Counter and shelf space is negotiated with brands rather than allocated on contribution.', outcome: 'Contribution per counter and per shelf metre is measurable, so negotiation has a number behind it.' },
    { problem: 'Repeat purchase is not tracked by category', detail: 'Beauty consumables are refill businesses, and a falling repeat rate precedes falling sales by months.', outcome: 'Repeat rate is measured by category and customer, so decline is visible early.' },
    { problem: 'Expiry sits across many brands', detail: 'Short-dated stock accumulates across twenty brands with different return terms.', outcome: 'Batch dates and brand return terms sit together, so recovery is possible per brand.' },
  ],

  modulesLede: 'One system across brands, promoters, sampling and customers.',
  modules: [
    { id: 'records', title: 'Brands, assortment and support terms', line: 'Each brand carries its assortment, counter space, promoter arrangement, support terms, targets and claim windows.', why: 'Brand contribution is the store’s real unit of analysis and is spread across four separate arrangements.', example: 'Six brands with support unclaimed and windows closing.' },
    { id: 'people', title: 'Promoters and floor staff', line: 'Staff including brand-funded promoters are modelled once, with sales, samples and service attributed.', why: 'Promoter output varies by a factor of six in the same store and is rarely compared.', example: 'Two promoters producing under a quarter of the store average.' },
    { id: 'inventory', title: 'Products, shades, batches and testers', line: 'Stock is held by product, shade and batch with expiry, brand return terms, counter and tester state.', why: 'Multi-brand expiry is a set of different return terms rather than a single policy.', example: 'Short-dated stock by brand against each brand’s return window.' },
    { id: 'orders', title: 'Sales, returns and samples issued', line: 'Transactions record product, shade, brand, counter, promoter and customer; sample issues are recorded the same way.', why: 'Sampling is a cost and a support claim, and both need the issue recorded.', example: 'One point four lakh of sampling cost against ninety-six thousand recovered.' },
    { id: 'relationships', title: 'Customers and repeat buyers', line: 'Customers carry purchases, shades, categories, repeat intervals and preferences.', why: 'Beauty consumables refill on a cycle, which makes repeat rate the leading indicator.', example: 'Repeat rate falling in two categories before sales follow.' },
    { id: 'workflows', title: 'Support claims, targets and approvals', line: 'Support claims, target reconciliation, returns to brand and write-offs move through defined steps.', why: 'Support is time-bound and assembled from records the store already holds.', example: 'A claim assembled from qualifying sales before the window closes.' },
    { id: 'locations', title: 'Counters, floors and store', line: 'Counters are locations with their own space, stock, promoter and sales.', why: 'Space is the shared resource and counters are how it is divided.', example: 'Contribution per counter, comparable across brands.' },
    { id: 'intelligence', title: 'Brand contribution and repeat reporting', line: 'Contribution by brand after support and sampling, promoter productivity, repeat rate by category, expiry exposure and space return come from the records.', why: 'A store negotiating with twenty brands needs a number per brand.', example: 'Contribution per counter after support earned and sampling cost.' },
    { id: 'ai', title: 'Ask the floor a question', line: 'Verity AI answers from your own brand, sales, sampling and customer records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions cross brand, counter and customer at once.', example: '"Which brands have unclaimed support?" returns six with claims raised.' },
    { id: 'suppliers', title: 'Brands as suppliers', line: 'Brands carry their orders, delivery reliability, return terms, support settlements and balances.', why: 'The brand is both a supplier and a partner, and both sides need one record.', example: 'Support earned against support settled by brand.' },
    { id: 'control', title: 'Who can issue samples and discount', line: 'One permission model and one audit trail across every record.', why: 'Sampling and discounting both happen at counters staffed by people the store does not employ.', example: 'Sample issues carrying the counter, promoter and brand.' },
    { id: 'communication', title: 'Brand and customer notes', line: 'Notes and activity attach to the brand, counter or customer they concern.', why: 'Brand instructions and customer sensitivities both arrive verbally at a counter.', example: 'A recorded customer sensitivity, visible at any counter.' },
  ],

  workflowsHeading: 'Brand by brand, counter by counter.',
  workflowsLede: 'These already happen. Recorded per brand, contribution becomes negotiable.',
  workflows: [
    { name: 'Brand contribution review', steps: ['Sales pulled by brand and counter', 'Support earned and settled applied', 'Sampling cost attributed', 'Space occupied applied', 'Contribution per counter calculated and compared'], note: 'A brand relationship is negotiated better with a contribution number than with a sales number.' },
    { name: 'Promoter productivity', steps: ['Sales attributed to promoter and counter', 'Sampling issued by promoter recorded', 'Output compared across counters', 'Brand conversation raised where output is low', 'Outcome recorded against the counter'], note: 'Who pays the promoter does not change the cost of the space they occupy.' },
    { name: 'Sampling and recovery', steps: ['Sample issued and recorded against brand and counter', 'Cost accrued against the brand', 'Support terms applied to recoverable sampling', 'Claim assembled and filed', 'Recovery compared with cost'], note: 'Sampling is a real cost that is partly recoverable and almost never fully claimed.' },
    { name: 'Support claim', steps: ['Terms recorded against the brand at agreement', 'Qualifying purchases and sales matched', 'Claim assembled with supporting records', 'Filed before the window closes', 'Settlement recorded against the brand'], note: 'The records already exist; assembling them at the deadline is what loses the claim.' },
    { name: 'Repeat purchase follow-up', steps: ['Repeat intervals derived per customer and category', 'Customers past interval identified', 'Contact assigned to their usual counter', 'Outcome recorded on the customer record', 'Category repeat rate reported'], note: 'Repeat rate falls before sales do, which makes it the useful early signal.' },
  ],

  ai: {
    heading: 'Ask what each brand is worth.',
    lede: 'Verity AI reads the same brand, sales, sampling and customer records the store creates as it trades. It answers per brand and counter, respects permissions, and can turn an answer into claims and conversations.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is contribution per brand after support and sampling?',
      'Which promoters produce least against the store average?',
      'Which brands have unclaimed support this quarter?',
      'What is sampling cost against recovery by brand?',
      'Which categories have a falling repeat purchase rate?',
      'What is short-dated stock by brand against their return terms?',
      'Which counters return least per square foot?',
      'Which customers are past their refill interval?',
      'Summarise brand contribution across the floor.',
    ],
  },

  automationHeading: 'The claims and the counters.',
  automationLede: 'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A support window approaches its close', steps: ['Qualifying records matched to terms', 'Claim assembled with supporting data', 'Filing task assigned with the deadline'] },
    { trigger: 'A promoter falls below the productivity threshold', steps: ['Output flagged against counter space', 'Brand conversation assigned', 'Outcome recorded'] },
    { trigger: 'Sampling cost exceeds recoverable support', steps: ['Gap flagged by brand', 'Sampling policy review assigned', 'Decision recorded'] },
    { trigger: 'A batch approaches a brand return window', steps: ['Flagged with value and brand terms', 'Return or markdown decision assigned', 'Credit tracked'] },
    { trigger: 'A customer passes their refill interval', steps: ['Flagged with category and shade', 'Contact assigned to their counter', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the owner can see.',
  intelligenceLede: 'Brand contribution and repeat behaviour from the floor’s own records.',
  intelligence: [
    { area: 'Brands', points: ['Contribution per brand after support and sampling', 'Support earned, claimed and settled', 'Return terms and expiry exposure', 'Space occupied against contribution'] },
    { area: 'Counters', points: ['Sales per counter and per promoter', 'Productivity range across counters', 'Sampling issued by counter', 'Return per square foot'] },
    { area: 'Customers', points: ['Repeat purchase rate by category', 'Refill intervals and lapses', 'Shade and preference records', 'Spend across brands'] },
    { area: 'Stock', points: ['Batch expiry by brand', 'Return eligibility remaining', 'Tester value on counters', 'Shade-level availability'] },
    { area: 'Commercial', points: ['Sampling cost against recovery', 'Margin by brand and category', 'Discounting by counter', 'Outstanding brand balances'] },
  ],
  intelligenceNote: 'All of it comes from recording the sale, the sample and the counter they belong to.',

  rolesHeading: 'One floor, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'What is each brand actually worth?', focus: 'Contribution per brand and counter, support claimed, sampling recovery, space return.' },
    { role: 'Store manager', question: 'Which counters are working?', focus: 'Promoter output, sampling issued, expiry by brand, repeat rate by category.' },
    { role: 'Beauty advisor', question: 'What does this customer use?', focus: 'Customer shades and preferences, refill intervals, availability, samples appropriate to them.' },
  ],

  useCasesHeading: 'What beauty retailers use Verity for',
  useCases: [
    { name: 'Brand contribution', body: 'Sales, support, sampling and space assembled per brand, so a brand relationship is negotiated with a contribution number.' },
    { name: 'Promoter productivity', body: 'Output per counter compared across brand-funded staff, since the space they occupy costs the store regardless of who pays them.' },
    { name: 'Sampling cost and recovery', body: 'Samples recorded as issues against brand and counter, so the cost is measurable and the recoverable portion is claimed.' },
    { name: 'Support claim assembly', body: 'Terms on the brand with claims built from existing records before the window closes.' },
    { name: 'Repeat purchase tracking', body: 'Refill intervals by customer and category, since repeat rate falls before sales do.' },
    { name: 'Multi-brand expiry', body: 'Batch dates against each brand’s own return terms rather than a single store policy.' },
    { name: 'Asking per brand', body: 'Plain-language questions across brands, counters, sampling and customers, with claims raised in the same step.' },
  ],

  migration: 'Your billing setup and brand agreements continue and are mapped during implementation. Brands with support terms, counters, stock by batch, promoters and customers are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions beauty retailers ask',
  faqs: [
    ['What can AI software do for a beauty store?', 'Verity AI answers questions from your own brand, sales, sampling and customer records: contribution per brand after support and sampling, which promoters produce least, which brands have unclaimed support, what sampling costs against recovery. Each answer can become a claim or a brand conversation.'],
    ['How is this different from a cosmetics store?', 'A cosmetics store’s hardest problem is the shade matrix and expiry. A multi-brand beauty store’s hardest problem is brand economics: assortment, promoter staff, sampling and support all come from brands, and what the store earns from each depends on all four together.'],
    ['Why measure promoter productivity?', 'Because the counter space a promoter occupies costs the store regardless of who pays their salary, and output varies by a factor of several across counters in the same store. That is a space allocation conversation with the brand.'],
    ['Can it track sampling?', 'Samples and testers are recorded as issues against brand, counter and promoter, so the cost is measurable and the portion recoverable under support terms can be claimed rather than absorbed.'],
    ['Does it help with brand support claims?', 'Support terms sit on the brand with claim windows, and claims are assembled from the purchases and sales the store already records — which is the difference between claiming fully and claiming what someone remembers.'],
    ['Why track repeat purchase?', 'Beauty consumables refill on a cycle, so a category’s repeat rate falls before its sales do. Measuring repeat by category and customer gives months of warning that a sales number does not.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds brands, counters, stock, sampling, customers and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of brand arrangements and counter structure, configuration of support terms, migration of stock and customers, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with contribution per brand.',
  ctaLede: 'It usually reorders which brands look important. Tell us how brands are assessed today.',

  related: ['cosmetics-stores', 'department-stores', 'salons', 'spas', 'retail-stores', 'pharmacies'],
};
