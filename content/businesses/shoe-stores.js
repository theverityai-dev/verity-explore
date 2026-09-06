export default {
  slug: 'shoe-stores',
  status: 'published',
  plural: 'shoe stores',
  subject: 'footwear retail business',

  seo: {
    title: 'AI business management software for shoe stores | Verity',
    description:
      'Verity tracks size-run completeness, try-on and retrieval labour, returns by fit, and supplier size curves in one operational system for footwear retail.',
    keywords: [
      'AI software for shoe stores',
      'footwear retail management software',
      'size run and stock depth tracking',
      'shoe store returns and fit analysis',
    ],
  },

  hero: {
    eyebrow: 'Verity for footwear retail',
    headline: 'A style without its middle sizes is not stock. It is display.',
    lede:
      'Footwear dies from the middle of the size run outwards, and a style at half sell-through can be unsellable to almost everyone who walks in. Verity tracks the run, not the style.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Store',
      meta: 'Current season',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Styles carried', value: '284', note: 'across 3 stores' },
        { label: 'Broken runs', value: '96 styles', note: 'missing core sizes' },
        { label: 'Return rate', value: '9.8%', note: 'fit is the leading reason' },
        { label: 'Ageing stock', value: '₹28 L', note: 'prior season' },
      ],
      rows: [
        { name: '96 styles missing their core sizes', meta: 'Selling well; unsellable to most customers', active: true },
        { name: 'Fit returns concentrated on one supplier', meta: 'Runs half a size small', active: true },
        { name: 'Sizes available at another store, not transferred', meta: '41 style-size combinations', active: true },
        { name: 'Prior-season stock at ₹28 L with no markdown', meta: 'Size profile now very thin', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own stock in this shape.',
    },
  },

  overview: {
    heading: 'Footwear is retail where one missing size makes the style useless.',
    paragraphs: [
      'A shoe style is a run of sizes, and demand across that run is sharply peaked in the middle. When the middle sizes go, the style stops being sellable to the majority of customers who ask for it, even though the aggregate sell-through figure looks healthy. What remains is not slow stock; it is stock that no longer has a customer.',
      'That makes size-run completeness the single most important stock measure in footwear, and it is invisible at style level. A style at fifty percent sold with sizes seven, eight and nine gone is worse than a style at seventy percent sold with the run intact.',
      'The second characteristic is fit returns. Footwear carries a high return rate and most of it is fit — a supplier whose lasts run small, a style that is narrow, a size that is inconsistent across a run. Recorded as a general return rate it is a cost. Recorded with a reason and attached to the supplier and style, it is a buying decision.',
      'The third is labour. Selling shoes involves retrieving boxes for a customer who tries several, and a large share of that work produces no sale. Nobody measures it, but it determines how many customers a shop can serve at peak.',
      'The fourth is that sizes sit at the wrong store: forty-one style-size combinations available at one branch and asked for at another.',
      'Verity holds stock at style and size, records return reasons, and makes the run visible.',
    ],
  },

  terminology: [
    ['Styles, sizes, widths, runs', 'Inventory'],
    ['Sales, returns, exchanges', 'Orders'],
    ['Customers, size profiles', 'Relationships'],
    ['Brands, suppliers, agents', 'Suppliers'],
    ['Floor staff, stockroom', 'People'],
    ['Markdown, transfer, return authorisation', 'Workflows'],
    ['Stores, stockrooms', 'Locations'],
  ],

  challengesHeading: 'The style sells and the run breaks.',
  challengesLede:
    'Footwear difficulties come from measuring stock at a level above the size the customer actually needs.',
  challenges: [
    {
      problem: 'Broken size runs are invisible at style level',
      detail: 'Aggregate sell-through looks healthy while the sizes most customers ask for are gone.',
      outcome: 'Stock is held per style and size with run completeness measured, so a broken run surfaces while a repeat is still possible.',
    },
    {
      problem: 'Fit returns are counted, not attributed',
      detail: 'A supplier whose lasts run small produces returns indistinguishable from customer indecision.',
      outcome: 'Return reasons attach to the style and supplier, so a fit problem becomes a buying decision.',
    },
    {
      problem: 'Sizes sit at the wrong branch',
      detail: 'One store turns a customer away for a size another store is holding and will eventually mark down.',
      outcome: 'Availability across stores is one view at size level, with transfers as recorded movement.',
    },
    {
      problem: 'Retrieval labour is unmeasured',
      detail: 'Staff spend most of a busy hour fetching boxes for try-ons that do not convert, and nobody knows the rate.',
      outcome: 'Try-on and conversion are recorded, so peak staffing reflects the work the format actually requires.',
    },
    {
      problem: 'Buying repeats the wrong size curve',
      detail: 'Next season is bought to the supplier’s standard curve rather than to the curve the store actually sells.',
      outcome: 'Sales by size across styles produce the store’s own curve, which is what the next order should use.',
    },
    {
      problem: 'Carryover has a thin size profile',
      detail: 'Prior-season stock is not merely old; what remains is the sizes nobody wanted in the first place.',
      outcome: 'Ageing is reported with the remaining size profile, so clearance pricing reflects what is actually left.',
    },
  ],

  modulesLede: 'One system across the size run, returns and stores.',
  modules: [
    { id: 'inventory', title: 'Styles, sizes and run completeness', line: 'Stock is held per style, size and width with cost, season, location and run completeness measured against the core sizes.', why: 'The size run is the unit of sellability, and style-level totals conceal its collapse.', example: 'Ninety-six styles selling well and missing their core sizes.' },
    { id: 'orders', title: 'Sales, returns and exchanges', line: 'Transactions record their style, size, customer, staff member and any return with its reason.', why: 'The return reason is the most valuable and least recorded fact in footwear.', example: 'Fit returns concentrated on one supplier whose lasts run half a size small.' },
    { id: 'suppliers', title: 'Brands, suppliers and size curves', line: 'Suppliers carry their orders, delivery, sell-through, return rate by reason and the size curves they ship.', why: 'A supplier’s fit consistency is a commercial property worth measuring.', example: 'Return rate by supplier alongside sell-through, which changes the next buy.' },
    { id: 'locations', title: 'Stores and stockrooms', line: 'Locations roll into the business with size-level stock and recorded transfers.', why: 'A size at the wrong branch is a lost sale and a future markdown at the same time.', example: 'Forty-one style-size combinations available elsewhere, surfaced as transfers.' },
    { id: 'relationships', title: 'Customers and size profiles', line: 'Customers are records with their purchases, sizes, widths and preferences.', why: 'Footwear repeat business runs on fit, and a known size makes a call worth making.', example: 'A new arrival in a customer’s size and preferred style type.' },
    { id: 'people', title: 'Floor staff and stockroom', line: 'Staff are modelled once, and every sale, try-on and return carries who handled it.', why: 'Conversion from try-on to sale is the core skill of the format.', example: 'Conversion and units per transaction by staff member.' },
    { id: 'workflows', title: 'Markdown, transfer and returns', line: 'Markdowns, transfers and returns beyond policy move through approval steps with reasons.', why: 'Markdown on a broken run is a different decision from markdown on a complete one.', example: 'A markdown carrying the remaining size profile that justified it.' },
    { id: 'intelligence', title: 'Run, return and curve reporting', line: 'Run completeness, sell-through by size, return rate by reason and supplier, the store’s own size curve and ageing come from the records.', why: 'Buying to your own size curve rather than the supplier’s is the largest available improvement.', example: 'The store’s actual size curve, from its own sales rather than from a standard.' },
    { id: 'ai', title: 'Ask the run a question', line: 'Verity AI answers from your own size-level stock, sales and return records, respects permissions, and can create assigned follow-ups.', why: 'The questions worth asking are about sizes, and sizes are laborious to query manually.', example: '"Which selling styles are missing core sizes?" returns ninety-six with transfer and repeat options.' },
    { id: 'records', title: 'Style information and supplier terms', line: 'Style details, fit notes and supplier agreements attach to the record they belong to.', why: 'A fit note from the shop floor is the earliest signal about a supplier.', example: 'Recorded fit feedback visible at the next buying decision.' },
    { id: 'control', title: 'Who can discount and transfer', line: 'One permission model and one audit trail across every record.', why: 'Markdown authority decides footwear margin at branch level.', example: 'Cost visible to buyers; floor staff see availability and customer sizes.' },
    { id: 'communication', title: 'Fit feedback on the style', line: 'Comments and activity attach to the style, supplier or customer they concern.', why: 'The knowledge that a range runs small exists on the floor and never reaches the buyer.', example: 'Fit complaints recorded against a style rather than mentioned in passing.' },
  ],

  workflowsHeading: 'The run, from intake to clearance.',
  workflowsLede: 'These already happen. Recorded at size level they become the next buy.',
  workflows: [
    { name: 'Intake and allocation', steps: ['Order received by style, size and width', 'Delivery checked at size level', 'Stock allocated across stores by their own size curves', 'Run completeness recorded at start of season', 'Sell-through tracking begins'], note: 'Allocating to each store’s own curve rather than evenly is where most of the improvement is.' },
    { name: 'Broken run response', steps: ['Style identified as selling with core sizes exhausted', 'Availability checked across stores at size level', 'Transfer raised where sizes exist elsewhere', 'Repeat order raised where they do not', 'Outcome recorded against the style'], note: 'The repeat window closes long before the season does.' },
    { name: 'Return with reason', steps: ['Return recorded against the original sale and size', 'Reason captured — fit, comfort, quality, changed mind', 'Stock restored or written off', 'Reason aggregated by style and supplier', 'Buying flagged where a supplier exceeds threshold'], note: 'Without the reason a return is a cost. With it, it is a supplier signal.' },
    { name: 'Size curve review', steps: ['Sales by size pulled across styles and stores', 'Store-specific curves derived', 'Supplier standard curves compared against them', 'Next order built to the store curve', 'Decision recorded against the supplier'], note: 'Most stores buy the curve they are shipped rather than the curve they sell.' },
    { name: 'Clearance', steps: ['Ageing pulled by style with remaining size profile', 'Broken runs separated from complete stock', 'Markdown set against what is actually left', 'Approval applied above threshold', 'Recovery compared with original cost'], note: 'Pricing a broken run like a complete one is why clearance underperforms.' },
  ],

  ai: {
    heading: 'Ask about sizes, not styles.',
    lede: 'Verity AI reads the same size-level stock, sales and return records the store creates as it trades. It answers from your own stores, respects permissions, and can turn an answer into transfers and repeat orders.',
    panelMeta: 'Grounded in your stock records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which selling styles are missing their core sizes?',
      'Which suppliers have the highest fit-related return rates?',
      'Which sizes are available at another store and short here?',
      'What is our actual size curve by store?',
      'What is the remaining size profile on prior-season stock?',
      'Which styles have high try-on volume and low conversion?',
      'Which customers bought in a size we have just received?',
      'What is sell-through by size across the season?',
      'Summarise run completeness across the range.',
    ],
  },

  automationHeading: 'The signals that arrive too late.',
  automationLede: 'Each runs from the size-level records at the point the condition is met.',
  automations: [
    { trigger: 'A style sells out of core sizes', steps: ['Broken run flagged with sizes affected', 'Transfer or repeat raised', 'Outcome recorded against the style'] },
    { trigger: 'A fit return is recorded', steps: ['Reason attached to style and supplier', 'Rate recalculated against the average', 'Buying flagged above threshold'] },
    { trigger: 'A size is short here and held elsewhere', steps: ['Transfer candidate surfaced', 'Transfer raised for approval', 'Movement recorded on completion'] },
    { trigger: 'Stock passes into carryover', steps: ['Style flagged with remaining size profile', 'Clearance review assigned', 'Markdown set against what remains'] },
    { trigger: 'A supplier ships against a standard curve', steps: ['Store curve compared at receipt', 'Variance recorded', 'Next order adjusted'] },
  ],

  intelligenceHeading: 'What the buyer can actually see.',
  intelligenceLede: 'Run completeness and fit, from size-level records.',
  intelligence: [
    { area: 'Run', points: ['Completeness against core sizes by style', 'Sell-through by size', 'Broken runs on selling styles', 'Transfers raised and completed'] },
    { area: 'Returns', points: ['Return rate by reason', 'Fit returns by supplier and style', 'Returns restorable to stock', 'Return behaviour by store'] },
    { area: 'Buying', points: ['Store size curves from actual sales', 'Supplier curves against store curves', 'Sell-through and markdown by supplier', 'Repeat order windows met'] },
    { area: 'Stock', points: ['Ageing with remaining size profile', 'Carryover value by season', 'Availability across stores at size level', 'Cover by size'] },
    { area: 'Store', points: ['Conversion from try-on to sale', 'Units per transaction by staff member', 'Discounting against thresholds', 'Store comparison on run completeness'] },
  ],
  intelligenceNote: 'All of it follows from recording sales and receipts at size, which is the level the format trades at.',

  rolesHeading: 'One range, four questions.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Is the range still sellable?', focus: 'Run completeness, return rates by supplier, carryover with size profile, store comparison.' },
    { role: 'Buyer', question: 'What curve should I buy?', focus: 'Store size curves, supplier fit and return performance, repeat windows, ageing.' },
    { role: 'Store manager', question: 'What is missing on the floor?', focus: 'Broken runs, transfer candidates, returns to process, approvals pending.' },
    { role: 'Floor staff', question: 'Do we have this in her size?', focus: 'Availability across stores at size level, customer size profile, alternatives.' },
  ],

  useCasesHeading: 'What footwear retailers use Verity for',
  useCases: [
    { name: 'Size-run completeness', body: 'Stock measured against the core sizes rather than as a style total, since a run missing its middle is no longer sellable.' },
    { name: 'Fit return attribution', body: 'Return reasons attached to style and supplier, turning a general return rate into a buying decision.' },
    { name: 'Cross-store size transfers', body: 'One size-level view across stores, so a size at the wrong branch becomes a sale rather than a markdown.' },
    { name: 'Buying to your own curve', body: 'The store’s actual size curve derived from sales, rather than accepting the supplier’s standard.' },
    { name: 'Clearance on broken runs', body: 'Ageing reported with remaining size profile, so markdown reflects what is actually left.' },
    { name: 'Try-on conversion', body: 'Retrieval and conversion recorded, so peak staffing reflects the labour the format requires.' },
    { name: 'Customer size profiles', body: 'Sizes and preferences on the customer record, so a new arrival is a specific call.' },
    { name: 'Asking about sizes', body: 'Plain-language questions at size level, with transfers and repeats raised in the same step.' },
  ],

  migration: 'Your billing setup continues to run and is mapped during implementation. Stock is brought across at style and size, along with suppliers and customers, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions footwear retailers ask',
  faqs: [
    ['What can AI software do for a shoe store?', 'Verity AI answers questions from your own size-level stock, sales and return records: which selling styles are missing core sizes, which suppliers have the highest fit return rates, which sizes are held at another store, what your actual size curve is. Each answer can become a transfer or a repeat order.'],
    ['Why track at size rather than style?', 'Because demand across a size run is sharply peaked and a style loses its middle sizes first. A style at fifty percent sold with sizes seven to nine gone is unsellable to most customers who ask for it, while the style-level number still looks healthy.'],
    ['How does it help with returns?', 'Returns carry a reason — fit, comfort, quality, changed mind — attached to the style and the supplier, so a range whose lasts run small is identifiable rather than indistinguishable from customer indecision.'],
    ['Can it help with buying?', 'Sales by size produce your own size curve per store, which is usually different from the standard curve suppliers ship to. Buying to your curve rather than theirs is the largest single improvement available in the category.'],
    ['Does it handle transfers between stores?', 'Availability across every store is one view at size level, and transfers are raised, approved and recorded as movement, so a size short at one branch and held at another becomes a sale.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds size-level stock, returns, transfers, buying and the reporting across them.'],
    ['Why does clearance underperform on old stock?', 'Because carryover is usually priced as though the run were complete. Ageing reported with the remaining size profile lets markdown reflect what is actually left.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of how the store buys and trades, configuration, migration of stock at size level, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the styles selling and unbuyable.',
  ctaLede: 'Broken runs on good sellers are the fastest money in footwear. Tell us how stock is tracked today.',

  related: ['fashion-stores', 'clothing-boutiques', 'sports-stores', 'retail-stores', 'department-stores', 'garment-manufacturers'],
};
