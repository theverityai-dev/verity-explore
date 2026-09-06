export default {
  slug: 'cosmetics-stores',
  status: 'published',
  plural: 'cosmetics stores',
  subject: 'cosmetics retail business',

  seo: {
    title: 'AI business management software for cosmetics stores | Verity',
    description:
      'Verity connects batch and expiry tracking, tester stock, shade-level inventory, brand schemes, counter staff and customer history into one system.',
    keywords: [
      'AI software for cosmetics stores',
      'cosmetics retail management software',
      'beauty retail batch and expiry tracking',
      'shade level inventory software',
      'brand counter and BA performance software',
    ],
  },

  hero: {
    eyebrow: 'Verity for cosmetics retail',
    headline: 'Shade 04 sells. Shades 01 and 09 expire. The report says the range worked.',
    lede:
      'Cosmetics stock is a shade matrix with an expiry date attached, and both are invisible at product level. Verity tracks it where the sale and the loss actually happen.',
    note: 'Runs alongside your existing billing and brand arrangements.',
    panel: {
      title: 'Store',
      meta: 'All counters · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹28.6 L', note: 'across 6 brand counters' },
        { label: 'Expiring 90 days', value: '₹4.2 L', note: '218 units' },
        { label: 'Shades out of stock', value: '46', note: 'in ranges we still stock' },
        { label: 'Tester value', value: '₹3.1 L', note: 'open on counters' },
      ],
      rows: [
        { name: '218 units expiring within 90 days', meta: 'No markdown or brand return raised', active: true },
        { name: '46 core shades out of stock in stocked ranges', meta: 'Customers turned away at counter', active: true },
        { name: 'Tester stock at Counter 3 above policy', meta: '₹94,000 open · last audit 60 days ago', active: true },
        { name: 'Brand scheme claim unfiled', meta: '₹1.8 L · window closes this week', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own counters in this shape.',
    },
  },

  overview: {
    heading: 'Cosmetics retail has three stock problems at once.',
    paragraphs: [
      'The first is that the unit of sale is a shade, not a product. A foundation range is fifteen or twenty shades with completely different velocity, and a range that shows healthy sell-through at product level can be out of every shade a customer actually asks for. The remaining stock is not slow-moving; it is unsellable, and it will eventually be written off.',
      'The second is expiry. Cosmetics carry batch dates and shelf lives, and a product that passes its window is a total loss rather than a markdown candidate. Most stores discover this at a stock check, by which point the return-to-brand window has usually closed too.',
      'The third is testers. Open display units are real stock with real cost, sitting outside normal counting discipline, replenished informally and audited rarely. In a category where a single tester can cost as much as a sale, that is a material and invisible line.',
      'On top of the stock sits the brand relationship. Cosmetics retail runs on counters, brand-funded staff, scheme support and returns arrangements, all of which are claimed against specific purchases within specific windows.',
      'Verity holds stock at shade and batch level, treats testers as a state with an owner, and records brand terms against the purchases they apply to, so all four problems are visible from the same records.',
    ],
  },

  terminology: [
    ['Ranges, shades, batches, testers', 'Inventory'],
    ['Sales, returns, exchanges', 'Orders'],
    ['Customers, skin and shade profiles', 'Relationships'],
    ['Brands, distributors, counter partners', 'Suppliers'],
    ['Counter staff, beauty advisors', 'People'],
    ['Markdown, brand return, tester policy', 'Workflows'],
    ['Counters, store, stockroom', 'Locations'],
  ],

  challengesHeading: 'The losses are structural, not occasional.',
  challengesLede:
    'Every problem here comes from stock being counted at a level above where it sells and expires.',
  challenges: [
    {
      problem: 'Shade-level stockouts are invisible',
      detail:
        'The range shows stock. The four shades customers actually ask for are gone, and every one of those requests is a lost sale that leaves no record.',
      outcome:
        'Stock is held per shade, so out-of-stock is measured where the customer experiences it and repeat orders are raised in time.',
    },
    {
      problem: 'Expiry is discovered too late for a brand return',
      detail:
        'Short-dated stock is noticed at a stock check, after the window for returning it to the brand has passed.',
      outcome:
        'Batch dates sit on the stock, so expiring value surfaces by counter and brand while a return or markdown is still possible.',
    },
    {
      problem: 'Testers are unmeasured cost',
      detail:
        'Open display units are replenished on request, rarely counted and never valued, in a category where each one is expensive.',
      outcome:
        'Testers are a stock state with a location, an owner and a policy, so open tester value is a current number.',
    },
    {
      problem: 'Counter performance is judged on totals',
      detail:
        'Brand counters are compared on revenue without reference to the stock they were given, the shades they were short of or the testers they consumed.',
      outcome:
        'Sales, stockouts, tester consumption and shrinkage are all recorded per counter, so the comparison is fair.',
    },
    {
      problem: 'Brand support is left on the table',
      detail:
        'Scheme funding, return allowances and promotional support are claimed from purchases and windows that nobody assembles in time.',
      outcome:
        'Brand terms are recorded against the purchases they apply to, so claims are built from records before the window closes.',
    },
    {
      problem: 'Customer shade information is lost',
      detail:
        'A customer’s matched shade is established once at a counter and never recorded, so every subsequent visit repeats the process.',
      outcome:
        'Shade and preference sit on the customer record, so a repeat purchase or a new arrival is an easy, specific conversation.',
    },
  ],

  modulesLede:
    'One system across shade-level stock, expiry, testers, brands and counters.',
  modules: [
    {
      id: 'inventory',
      title: 'Shades, batches and expiry',
      line:
        'Stock is held per shade with batch, expiry date, brand, cost, counter and state, and moves as it is received, sold, tested, returned or written off.',
      why:
        'The shade is where the sale happens and the batch is where the loss happens. Neither is visible at product level.',
      example:
        'Two hundred and eighteen units expiring within ninety days, by counter and brand, while a return is still possible.',
    },
    {
      id: 'suppliers',
      title: 'Brands, distributors and counter partners',
      line:
        'Suppliers are relationships with their orders, scheme terms, return allowances, delivery performance, claims and balances.',
      why:
        'A significant share of cosmetics retail margin comes from the brand side and is claimed rather than earned automatically.',
      example:
        'A scheme worth one point eight lakh assembled from qualifying purchases before the window closes this week.',
    },
    {
      id: 'orders',
      title: 'Sales, returns and replenishment',
      line:
        'Transactions record their lines at shade level, the customer, the counter, the advisor and the stock moved; purchase orders record what was asked for against what arrived.',
      why:
        'Shade-level sales are the only source of the velocity data that should drive replenishment.',
      example:
        'A shade selling three times faster than the range average, reordered on that basis rather than on range totals.',
    },
    {
      id: 'workflows',
      title: 'Markdown, brand returns and tester policy',
      line:
        'Markdowns, returns to brand, tester issues beyond policy and write-offs move through defined approval steps with recorded reasons.',
      why:
        'Expiry and tester decisions are routine, time-bound and currently taken without any record of why.',
      example:
        'A tester issue beyond the counter’s policy is an approval rather than an informal request.',
    },
    {
      id: 'people',
      title: 'Counter staff and beauty advisors',
      line:
        'Staff are modelled once, and every sale, tester issue, adjustment and customer note carries who handled it.',
      why:
        'Cosmetics is assisted selling, and conversion, basket and tester consumption vary sharply by advisor.',
      example:
        'Sales and units per transaction by advisor alongside the tester value they consumed.',
    },
    {
      id: 'relationships',
      title: 'Customers and shade profiles',
      line:
        'Customers are records with their purchases, matched shades, preferences, sensitivities and interaction history.',
      why:
        'A matched shade is genuinely useful information that currently has to be re-established at every visit.',
      example:
        'A customer returning after six months is served against their recorded shade rather than matched again from scratch.',
    },
    {
      id: 'locations',
      title: 'Counters, store and stockroom',
      line:
        'Locations roll into the business, with shade-level stock, permissions and reporting following the same structure.',
      why:
        'Brand counters operate semi-independently, and stock at a counter behaves differently from stock in a stockroom.',
      example:
        'Stock, stockouts and tester value by counter, comparable across the store.',
    },
    {
      id: 'records',
      title: 'Brand agreements and product information',
      line:
        'Scheme circulars, return terms, product and ingredient information attach to the supplier or product they belong to.',
      why:
        'Claims and customer questions both depend on documents nobody can find at the moment they are needed.',
      example:
        'A disputed claim resolves to the circular it was raised under and the purchases it covers.',
    },
    {
      id: 'intelligence',
      title: 'Reporting from shade-level records',
      line:
        'Shade velocity, expiry exposure, tester consumption, counter performance, brand support recovery and customer return rate come from the operational records.',
      why:
        'Every important cosmetics number is either shade-level or time-bound, and both are lost in monthly product-level reporting.',
      example:
        'Expiry exposure by brand and counter, current rather than discovered at a stock check.',
    },
    {
      id: 'ai',
      title: 'Ask the counter a question',
      line:
        'Verity AI answers from your own shade, batch, brand and customer records, respects permissions, and can create assigned follow-ups.',
      why:
        'The useful questions cross shade, expiry, counter and brand terms at once.',
      example:
        '"What is expiring within ninety days and can still be returned to the brand?" returns the list with the claims raised.',
    },
    {
      id: 'control',
      title: 'Who can issue testers and write off',
      line:
        'One permission model and one audit trail across every record.',
      why:
        'Tester issues and write-offs are the two places cosmetics stock leaves without a sale.',
      example:
        'Every tester issue and write-off carries the advisor, the counter and the reason.',
    },
    {
      id: 'communication',
      title: 'Customer and brand notes on the record',
      line:
        'Notes, notifications and activity attach to the customer, counter or brand they concern.',
      why:
        'Sensitivities, reactions and brand instructions all get passed verbally at a counter and then lost.',
      example:
        'A recorded sensitivity is visible to whichever advisor serves the customer next.',
    },
  ],

  workflowsHeading: 'Where the stock actually goes.',
  workflowsLede:
    'These already happen at your counters. Recorded at shade and batch level, they become numbers.',
  workflows: [
    {
      name: 'Receipt to counter',
      steps: [
        'Purchase order raised against the brand or distributor',
        'Delivery received and checked at shade level',
        'Batch and expiry recorded against each shade',
        'Scheme and return terms attached to the purchase',
        'Stock allocated to counters and stockroom',
      ],
      note:
        'Capturing batch and expiry at receipt is what makes every later return or markdown possible.',
    },
    {
      name: 'Expiry management',
      steps: [
        'Batches inside the expiry window flagged by counter and value',
        'Brand return eligibility checked against the agreement',
        'Return to brand or markdown decision raised for approval',
        'Stock returned or discounted and the movement recorded',
        'Recovery compared against the write-off it avoided',
      ],
      note:
        'The return window usually closes before the expiry date, which is why late discovery costs the full value.',
    },
    {
      name: 'Shade replenishment',
      steps: [
        'Shade velocity calculated from sales',
        'Core shades below cover identified per counter',
        'Replenishment from stockroom or purchase raised',
        'Order placed against the brand',
        'Receipt checked at shade level',
      ],
      note:
        'Ordering by range and hoping the shade mix is right is how ranges become unsellable.',
    },
    {
      name: 'Tester issue and audit',
      steps: [
        'Tester issued from stock into tester state with a counter and owner',
        'Issue beyond policy routed for approval',
        'Periodic tester audit recorded against each counter',
        'Depleted testers replaced and recorded',
        'Tester value and consumption reported by counter',
      ],
      note:
        'Testers become a managed cost rather than an invisible one.',
    },
    {
      name: 'Brand scheme claim',
      steps: [
        'Scheme terms recorded against the purchase at receipt',
        'Qualifying purchases and sales matched to the terms',
        'Claim assembled with the circular attached',
        'Approval routed and claim filed before the window',
        'Settlement recorded against the brand balance',
      ],
      note:
        'The records exist; assembling them by hand is what misses the window.',
    },
    {
      name: 'Customer shade match',
      steps: [
        'Match recorded against the customer at the counter',
        'Purchase linked to the matched shade',
        'Preferences and sensitivities noted on the record',
        'New arrivals in that shade or category surfaced later',
        'Follow-up assigned to the advisor who served them',
      ],
      note:
        'A recorded match turns a one-off sale into a repeatable one.',
    },
  ],

  ai: {
    heading: 'Ask about shades and dates.',
    lede:
      'Verity AI reads the same shade, batch, brand and customer records the store runs on. It answers from your own counters, only shows what the person asking can see, and can turn the answer into work assigned to the counter that owns it.',
    panelMeta: 'Grounded in your counter records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is expiring within ninety days, and which of it can still be returned to the brand?',
      'Which core shades are out of stock in ranges we still stock?',
      'What is the open tester value by counter?',
      'Which brands have unclaimed scheme support this window?',
      'Which shades sell fastest, and are we ordering to that mix?',
      'How do counters compare on sales against stock held?',
      'Which customers have a recorded shade match in a range we have just restocked?',
      'Which advisors consume the most tester stock relative to sales?',
      'Summarise this month’s expiry exposure and brand claims.',
    ],
  },

  automationHeading: 'The windows and the shade gaps.',
  automationLede:
    'Each runs from the shade and batch records at the point the condition is met.',
  automations: [
    {
      trigger: 'A batch enters its expiry window',
      steps: [
        'Batch flagged with counter, value and remaining life',
        'Brand return eligibility checked',
        'Return or markdown task assigned with the deadline',
        'Outcome recorded against the batch',
      ],
    },
    {
      trigger: 'A core shade falls out of stock',
      steps: [
        'Shade gap flagged with its velocity',
        'Replenishment from stockroom or other counter proposed',
        'Purchase raised against the brand where none is held',
      ],
    },
    {
      trigger: 'A tester issue exceeds policy',
      steps: [
        'Issue held at the approval step',
        'Routed with the counter’s current tester value attached',
        'Decision recorded against the counter',
      ],
    },
    {
      trigger: 'A brand scheme window approaches its close',
      steps: [
        'Qualifying purchases matched against the terms',
        'Claim assembled with the circular attached',
        'Filing task assigned with the deadline',
      ],
    },
    {
      trigger: 'New stock arrives in a recorded customer shade',
      steps: [
        'Customers with that matched shade identified',
        'Follow-up assigned to their usual advisor',
        'Outcome recorded on the customer record',
      ],
    },
    {
      trigger: 'A tester audit is due',
      steps: [
        'Audit task raised per counter',
        'Variances recorded against tester stock',
        'Recurring gaps surfaced in counter reporting',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see per shade and per counter.',
  intelligenceLede:
    'Drawn from records created at the level the category actually trades.',
  intelligence: [
    {
      area: 'Stock',
      points: [
        'Availability and velocity by shade',
        'Core shades out of stock in live ranges',
        'Stock ageing by brand and counter',
        'Cover in days against recent movement',
      ],
    },
    {
      area: 'Expiry',
      points: [
        'Value expiring in thirty, sixty and ninety days',
        'Return-to-brand eligibility remaining',
        'Write-offs taken and their value',
        'Expiry concentration by brand and counter',
      ],
    },
    {
      area: 'Testers',
      points: [
        'Open tester value by counter',
        'Tester consumption against sales',
        'Issues beyond policy and their approvals',
        'Audit variances by counter',
      ],
    },
    {
      area: 'Brands',
      points: [
        'Scheme support earned, claimed and settled',
        'Return allowances used against available',
        'Delivery reliability and fill rate at shade level',
        'Margin by brand after support',
      ],
    },
    {
      area: 'Counters',
      points: [
        'Sales against stock held per counter',
        'Units per transaction by advisor',
        'Shrinkage and adjustments by counter',
        'Customer return rate by counter',
      ],
    },
    {
      area: 'Customers',
      points: [
        'Recorded shade matches and preferences',
        'Repeat purchase frequency',
        'Customers who have stopped buying',
        'Category and brand affinity',
      ],
    },
  ],
  intelligenceNote:
    'All of this follows from recording receipts and sales at shade and batch level, which is where the category trades.',

  rolesHeading: 'One store, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each role opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What am I about to write off, and what am I not claiming?',
      focus: 'Expiry exposure, brand support earned versus collected, tester value, counter comparison.',
    },
    {
      role: 'Store manager',
      question: 'What is missing on the counters?',
      focus: 'Core shades out of stock, replenishment due, tester audits, approvals pending.',
    },
    {
      role: 'Beauty advisor',
      question: 'What do I have and what did this customer buy?',
      focus: 'Shade availability, customer shade match and sensitivities, new arrivals in their range.',
    },
    {
      role: 'Buyer',
      question: 'Am I ordering the right shade mix?',
      focus: 'Shade velocity, stockouts by range, expiry by brand, scheme terms and claims.',
    },
  ],

  useCasesHeading: 'What cosmetics retailers use Verity for',
  useCases: [
    {
      name: 'Shade-level stock',
      body: 'Availability and velocity per shade rather than per range, so a range does not become unsellable while the report says it sold well.',
    },
    {
      name: 'Batch and expiry control',
      body: 'Expiry on the batch with brand return eligibility, so short-dated stock surfaces while it can still be returned rather than written off.',
    },
    {
      name: 'Tester management',
      body: 'Open display units as a stock state with a counter, an owner and a policy, turning an invisible cost into a managed one.',
    },
    {
      name: 'Brand scheme recovery',
      body: 'Scheme terms recorded against qualifying purchases so claims are assembled from records before their windows close.',
    },
    {
      name: 'Counter performance',
      body: 'Sales set against stock held, stockouts and tester consumption per counter, so comparison is fair.',
    },
    {
      name: 'Customer shade profiles',
      body: 'Matched shades, preferences and sensitivities on the customer record, so a repeat visit does not start from scratch.',
    },
    {
      name: 'Replenishment by velocity',
      body: 'Reordering driven by shade-level movement rather than by range totals and hope.',
    },
    {
      name: 'Tester and write-off control',
      body: 'Issues beyond policy and write-offs as approvals with reasons and attribution.',
    },
    {
      name: 'Asking the counters questions',
      body: 'Plain-language questions across shades, expiry, brands and customers, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Your billing software, the brand agreements and the counter stock sheets are mapped during implementation. Stock is brought across at shade and batch level where records allow, along with brands, customers and open claims.',

  faqHeading: 'Questions cosmetics retailers ask',
  faqs: [
    [
      'What can AI software do for a cosmetics store?',
      'Verity AI answers questions from your own shade, batch, brand and customer records: what is expiring within ninety days and can still be returned to the brand, which core shades are out of stock, what open tester value each counter carries, which brands have unclaimed scheme support. Each answer can become work assigned to the counter that owns it.',
    ],
    [
      'Does Verity track stock by shade?',
      'Yes. Stock is held per shade with batch and expiry, because that is where the sale happens and where the loss happens. Range-level totals hide both the stockouts customers experience and the shades that will eventually expire.',
    ],
    [
      'Can it manage expiry and returns to brand?',
      'Batch dates sit on the stock and brand return terms sit on the supplier, so expiring value surfaces by counter and brand while a return is still eligible. The return window generally closes well before the expiry date, which is why late discovery costs full value.',
    ],
    [
      'Does it handle tester stock?',
      'Testers are a stock state with a counter, an owner and a policy, so open tester value is a current number, issues beyond policy are approvals, and periodic audits record variances by counter.',
    ],
    [
      'Can Verity track brand schemes and support?',
      'Scheme terms are recorded against the purchases they apply to with the circular attached, so a claim is assembled from records before its window closes rather than reconstructed afterwards.',
    ],
    [
      'Can we record a customer’s matched shade?',
      'Yes. Matched shades, preferences and any recorded sensitivities sit on the customer record, so a returning customer is served against what was established last time rather than matched again.',
    ],
    [
      'Does it replace our billing software?',
      'No. Billing continues and is mapped during implementation. Verity holds the shade-level stock, expiry, testers, brands, counters and the reporting across them.',
    ],
    [
      'Does it work across several brand counters?',
      'Counters are locations rolling into the store, so stock, stockouts, tester value and sales are recorded per counter and are directly comparable.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the counters actually run, configuration, migration of stock at shade and batch level, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with what is about to expire.',
  ctaLede:
    'In most cosmetics stores it is a bigger number than the owner expects and still returnable. Tell us how stock is tracked today and we will show you.',

  related: ['beauty-stores', 'fashion-stores', 'pharmacies', 'salons', 'retail-stores', 'gift-shops'],
};
