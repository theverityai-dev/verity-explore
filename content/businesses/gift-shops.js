export default {
  slug: 'gift-shops',
  status: 'published',
  plural: 'gift shops',
  subject: 'gift shop',

  seo: {
    title: 'AI business management software for gift shops | Verity',
    description:
      'Verity connects occasion-driven demand, post-season dead stock, personalisation and wrapping services, and corporate gifting orders into one operational system.',
    keywords: [
      'AI software for gift shops',
      'gift shop management software',
      'seasonal stock and occasion demand planning',
      'corporate gifting order management',
    ],
  },

  hero: {
    eyebrow: 'Verity for gift retail',
    headline: 'Everything sells in three weeks. What is left has no second chance.',
    lede:
      'Gift retail is a series of short, dated peaks, and stock bought for one occasion rarely sells after it. Verity plans against the calendar and clears against it.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Shop',
      meta: 'This season',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Season sales', value: '₹18.4 L', note: '64% in three weeks' },
        { label: 'Occasion stock left', value: '₹4.2 L', note: 'from prior occasions' },
        { label: 'Personalisation orders', value: '86', note: '11 past promised date' },
        { label: 'Corporate orders', value: '9', note: '₹6.4 L · 3 unconfirmed' },
      ],
      rows: [
        { name: '11 personalisation orders past their promised date', meta: 'Gifts for fixed occasions', active: true },
        { name: '₹4.2 L of occasion-specific stock unsold', meta: 'No natural demand until next year', active: true },
        { name: '3 corporate orders unconfirmed inside lead time', meta: 'Personalisation cannot start', active: true },
        { name: 'Fast lines out of stock during the peak week', meta: 'Reordered after the peak passed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own shop in this shape.',
    },
  },

  overview: {
    heading: 'The calendar is the business.',
    paragraphs: [
      'A gift shop’s year is not smooth. It is a handful of dated occasions, each producing a short and intense peak, separated by long ordinary periods. A large share of annual revenue arrives in a few weeks, which means buying, staffing and cash are all decided by how well the shop reads a calendar it already knows.',
      'The distinguishing problem is what happens afterwards. Occasion-specific stock has no natural demand once the date passes; it is not slow-moving, it is out of season for a year. Four point two lakh left from prior occasions is capital held with no realistic route to sale.',
      'The second is that peaks are unforgiving. A fast line out of stock during the peak week is a lost sale that cannot be recovered by reordering afterwards, because the demand was tied to a date.',
      'The third is personalisation. Engraving, wrapping and made-to-order gifts carry promise dates tied to occasions that cannot move, and a late order is a ruined gift rather than a late delivery.',
      'The fourth is corporate gifting, which is high value, deadline-bound and dependent on the client confirming quantities and artwork in time for production.',
      'Verity plans against the occasion calendar, tracks personalisation promises and holds corporate orders to their lead times.',
    ],
  },

  terminology: [
    ['Occasions, seasons, ranges', 'Records'],
    ['Sales, personalisation orders, corporate orders', 'Orders'],
    ['Customers, corporate accounts', 'Relationships'],
    ['Engraving, wrapping, assembly', 'Work'],
    ['Suppliers, importers, artisans', 'Suppliers'],
    ['Shop staff, seasonal staff', 'People'],
    ['Shop, storeroom, workroom', 'Locations'],
  ],

  challengesHeading: 'Short peaks and stock with an expiry that is a date.',
  challengesLede:
    'Gift retail difficulties come from concentrated demand and stock whose value ends when the occasion does.',
  challenges: [
    { problem: 'Occasion stock has no second chance', detail: 'What does not sell before the date has no natural demand for a year, and it is bought again next season anyway.', outcome: 'Stock is tagged to its occasion, so residual value and clearance timing are planned rather than discovered.' },
    { problem: 'Peak stockouts cannot be recovered', detail: 'Reordering a fast line after the peak week is pointless, because the demand belonged to the date.', outcome: 'Peak availability is planned from last year’s daily pattern rather than from a general reorder point.' },
    { problem: 'Personalisation promises tie to fixed dates', detail: 'An engraved gift promised for an anniversary is worthless the day after, and the promise lives on a slip.', outcome: 'Personalisation is work with a promised date, an owner and a state, visible as at-risk before the date.' },
    { problem: 'Corporate orders stall on client confirmation', detail: 'Quantities and artwork are agreed late, compressing production against a fixed delivery date.', outcome: 'Confirmation is a tracked step against the required lead time rather than the delivery date.' },
    { problem: 'Staffing is planned as though the year were smooth', detail: 'Peak weeks need several times normal cover and are rostered from a standard pattern.', outcome: 'Staffing is planned against last year’s hourly pattern for the same occasion.' },
    { problem: 'Buying repeats last year without last year’s numbers', detail: 'Occasion buying is done on memory, so the same lines are over-bought and the same ones sell out.', outcome: 'Sell-through by occasion and line is recorded, so next year’s buy starts from evidence.' },
  ],

  modulesLede: 'One system across the occasion calendar, personalisation and corporate orders.',
  modules: [
    { id: 'records', title: 'Occasions, ranges and calendars', line: 'Occasions are records with their dates, ranges, historical demand pattern and lead times.', why: 'The calendar is known a year ahead and is the only useful planning basis in the format.', example: 'Last year’s daily sales pattern for the same occasion, driving this year’s buy and roster.' },
    { id: 'inventory', title: 'Stock tagged to occasions', line: 'Stock carries its occasion, season, cost, movement and residual value after the date.', why: 'Occasion stock is a different asset from year-round stock and cannot share a threshold.', example: 'Four point two lakh of prior-occasion stock, identified with a clearance plan rather than left on a shelf.' },
    { id: 'work', title: 'Personalisation, wrapping and assembly', line: 'Each is work with a customer, a specification, a promised date, an owner and a state.', why: 'A gift promised for a date is worthless afterwards, which makes these promises unusually strict.', example: 'Eleven personalisation orders past their promised date, visible before the customer arrives.' },
    { id: 'orders', title: 'Retail, personalisation and corporate orders', line: 'Orders record their items, personalisation, promised dates, deposits and state.', why: 'Corporate gifting is a different order type with lead times and artwork approvals.', example: 'Three corporate orders unconfirmed inside the production lead time.' },
    { id: 'relationships', title: 'Customers and corporate accounts', line: 'Customers and corporate accounts carry their purchase history, occasions bought for and preferences.', why: 'Gift customers return for the same occasion each year, which is a predictable prompt.', example: 'Customers who bought for the same occasion last year, contacted before it.' },
    { id: 'suppliers', title: 'Suppliers, importers and artisans', line: 'Suppliers carry lead times, minimum orders, delivery reliability against occasion dates and balances.', why: 'A supplier delivering to its own lead time rather than your occasion date misses the peak entirely.', example: 'Delivery measured against the occasion rather than against a general lead time.' },
    { id: 'workforce', title: 'Peak staffing', line: 'Rostering and attendance connect to the hours and occasions they covered.', why: 'Gift retail staffing is extremely uneven and is usually rostered as if it were not.', example: 'Peak-week staffing built from last year’s hourly pattern.' },
    { id: 'intelligence', title: 'Occasion, residual and promise reporting', line: 'Sell-through by occasion and line, residual stock value, personalisation delivery, corporate lead time adherence and peak staffing come from the records.', why: 'The whole year is decided in a few weeks, so post-occasion analysis is the only way next year improves.', example: 'Sell-through by line for the occasion, informing next year’s buy.' },
    { id: 'ai', title: 'Ask the calendar a question', line: 'Verity AI answers from your own occasion, stock, order and customer records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about dates approaching and promises outstanding.', example: '"Which personalisation orders are at risk?" returns eleven with production assigned.' },
    { id: 'workflows', title: 'Deposits, approvals and clearance', line: 'Deposits, artwork approvals, discounts and clearance move through defined steps with recorded decisions.', why: 'Corporate artwork approval is the gate that decides whether production makes the date.', example: 'Artwork approval tracked as a step with the lead time it consumes.' },
    { id: 'people', title: 'Shop and seasonal staff', line: 'Staff including seasonal cover are modelled once, with every sale and personalisation order attributed.', why: 'Peak weeks run on temporary staff who need the same records as permanent ones.', example: 'Personalisation orders by the person who took them.' },
    { id: 'locations', title: 'Shop, storeroom and workroom', line: 'Locations roll into the business with stock, work and reporting following the same structure.', why: 'Personalisation happens in a workroom whose queue is a real constraint at peak.', example: 'Workroom queue against promised dates during the peak.' },
  ],

  workflowsHeading: 'Planning against a calendar you already know.',
  workflowsLede: 'These already happen. Recorded against the occasion, next year starts from evidence.',
  workflows: [
    { name: 'Occasion planning', steps: ['Last year’s sell-through by line pulled for the occasion', 'Daily demand pattern reviewed', 'Buy planned against evidence rather than memory', 'Supplier orders placed against the occasion date', 'Staffing planned from the historical hourly pattern'], note: 'The calendar is known twelve months ahead, which makes this the most plannable retail there is.' },
    { name: 'Peak trading', steps: ['Availability tracked daily on the top lines', 'Stock moved from storeroom as needed', 'Out-of-stock recorded with the day', 'Staffing adjusted against actual footfall', 'Daily sell-through compared with the plan'], note: 'A stockout during the peak week cannot be recovered afterwards.' },
    { name: 'Personalisation order', steps: ['Order taken with specification and promised date', 'Deposit recorded', 'Workroom queue position and owner assigned', 'Progress tracked against the date', 'Completion recorded and customer notified'], note: 'A gift late for its occasion is a failure rather than a delay.' },
    { name: 'Corporate gifting order', steps: ['Enquiry recorded with quantity, budget and delivery date', 'Production lead time calculated backwards from it', 'Quantities and artwork confirmation tracked against that date', 'Production scheduled and progress recorded', 'Delivery completed and balance collected'], note: 'Confirming against the lead time rather than the delivery date is what makes the date achievable.' },
    { name: 'Post-occasion clearance', steps: ['Residual stock identified by occasion', 'Realistic residual value assessed', 'Clearance or hold-for-next-year decision taken', 'Markdown applied and recorded', 'Result fed into next year’s buying'], note: 'Holding occasion stock for a year has a cost that is rarely compared with clearing it now.' },
  ],

  ai: {
    heading: 'Ask against the calendar.',
    lede: 'Verity AI reads the same occasion, stock, order and customer records the shop creates as it trades. It answers from your own shop, respects permissions, and can turn an answer into production and buying decisions.',
    panelMeta: 'Grounded in your shop records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which personalisation orders are at risk against their promised date?',
      'Which corporate orders are unconfirmed inside the production lead time?',
      'What sold out during the peak week last year?',
      'What residual stock remains from prior occasions?',
      'Which customers bought for this occasion last year?',
      'What was sell-through by line for the last occasion?',
      'How does staffing need to change for the peak week?',
      'Which suppliers deliver late against occasion dates?',
      'Summarise readiness for the coming occasion.',
    ],
  },

  automationHeading: 'The dates that do not move.',
  automationLede: 'Each runs from the shop’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A personalisation order approaches its promised date', steps: ['Flagged with workroom queue position', 'Escalated to the owner', 'Customer update raised if it will be late'] },
    { trigger: 'A corporate order is unconfirmed inside lead time', steps: ['Flagged with the production time remaining', 'Confirmation chase assigned', 'Date risk communicated'] },
    { trigger: 'An occasion approaches', steps: ['Last year’s pattern surfaced for buying and staffing', 'Supplier orders checked against the date', 'Peak roster prepared'] },
    { trigger: 'A top line falls below cover during peak', steps: ['Flagged with days of peak remaining', 'Storeroom stock or urgent order raised', 'Out-of-stock recorded if it occurs'] },
    { trigger: 'An occasion passes', steps: ['Residual stock identified and valued', 'Clearance or hold decision raised', 'Sell-through recorded for next year'] },
  ],

  intelligenceHeading: 'What the owner can see.',
  intelligenceLede: 'A year decided in a few weeks, measured against the calendar.',
  intelligence: [
    { area: 'Occasions', points: ['Sell-through by line and occasion', 'Daily demand pattern within the peak', 'Stockouts during peak weeks', 'Year-on-year comparison by occasion'] },
    { area: 'Residual stock', points: ['Value remaining by occasion', 'Realistic residual demand', 'Clearance recovery against cost', 'Stock held over to next year'] },
    { area: 'Promises', points: ['Personalisation orders against promised dates', 'Workroom queue and capacity', 'Late deliveries and their causes', 'Corporate lead time adherence'] },
    { area: 'Customers', points: ['Repeat buying by occasion', 'Corporate account value and frequency', 'Customers to prompt before each occasion', 'Average spend by occasion'] },
    { area: 'Operations', points: ['Peak staffing against footfall', 'Supplier delivery against occasion dates', 'Deposits held on undelivered orders', 'Discounting during clearance'] },
  ],
  intelligenceNote: 'All of it comes from recording sales and orders against the occasion they belong to.',

  rolesHeading: 'A seasonal business, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Am I buying and staffing for the right peak?', focus: 'Sell-through by occasion, residual stock, peak staffing, supplier reliability against dates.' },
    { role: 'Shop staff', question: 'What is promised and what is in stock?', focus: 'Personalisation orders due, availability on top lines, customer history by occasion.' },
    { role: 'Workroom', question: 'What is in the queue and by when?', focus: 'Personalisation and corporate orders by promised date, specifications, capacity against the peak.' },
  ],

  useCasesHeading: 'What gift shops use Verity for',
  useCases: [
    { name: 'Occasion-based planning', body: 'Buying and staffing planned from last year’s sell-through and daily pattern rather than from memory.' },
    { name: 'Peak availability', body: 'Daily availability on top lines during the peak, since a stockout there cannot be recovered afterwards.' },
    { name: 'Personalisation promises', body: 'Orders as work with promised dates and workroom queue position, visible as at-risk before the occasion.' },
    { name: 'Corporate lead times', body: 'Confirmation and artwork tracked against production lead time rather than delivery date.' },
    { name: 'Residual stock decisions', body: 'Occasion-tagged stock valued realistically after the date, so holding for a year is compared with clearing now.' },
    { name: 'Occasion customer prompts', body: 'Customers who bought for an occasion last year contacted before it comes round.' },
    { name: 'Asking against the calendar', body: 'Plain-language questions across occasions, stock, promises and customers, with actions raised in the same step.' },
  ],

  migration: 'Your billing setup continues and is mapped during implementation. Stock with occasion tags, suppliers, corporate accounts and open personalisation orders are brought across, and Verity is configured around the shop’s calendar.',

  faqHeading: 'Questions gift retailers ask',
  faqs: [
    ['What can AI software do for a gift shop?', 'Verity AI answers questions from your own occasion, stock, order and customer records: which personalisation orders are at risk, which corporate orders are unconfirmed inside lead time, what sold out during last year’s peak, what residual stock remains. Each answer can become a production or buying decision.'],
    ['Why plan by occasion?', 'Because the year is a handful of dated peaks with long ordinary periods between them, and most annual revenue arrives in a few weeks. The calendar is known twelve months ahead, which makes this among the most plannable retail formats — and it is usually planned from memory.'],
    ['What makes occasion stock different?', 'It is not slow-moving; it is out of season for a year the day after the date. That changes the clearance decision entirely, because holding it has a cost that is rarely compared against clearing it now.'],
    ['How does it help with personalisation?', 'Personalisation is work with a specification, a promised date, a workroom queue position and an owner. A gift late for its occasion is a failure rather than a delay, so being able to see it at risk beforehand matters more than in most retail.'],
    ['Can it handle corporate gifting?', 'Corporate orders carry quantities, artwork approvals and delivery dates, and confirmation is tracked against the production lead time calculated backwards from delivery — which is what makes the date achievable.'],
    ['Does it help with peak staffing?', 'Last year’s hourly pattern for the same occasion drives this year’s roster, rather than staffing a peak week from a standard pattern.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds the occasion calendar, stock, personalisation, corporate orders and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the occasion calendar and production process, configuration, migration of stock and open orders, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the next occasion.',
  ctaLede: 'You already know the date. Tell us what you know about last year and we will show you the plan.',

  related: ['home-decor-stores', 'bookstores', 'retail-stores', 'jewellery-stores', 'printing-businesses', 'cosmetics-stores'],
};
