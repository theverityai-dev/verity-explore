export default {
  slug: 'online-marketplaces',
  status: 'published',
  plural: 'online marketplaces',
  subject: 'online marketplace',

  seo: {
    title: 'AI business management software for online marketplaces | Verity',
    description:
      'Verity gives online marketplaces one system for liquidity by category, seller onboarding and quality, unfilled demand, dispute cost and take rate against subsidy.',
    keywords: [
      'AI software for online marketplaces',
      'marketplace operations management software',
      'seller onboarding and quality software',
      'marketplace liquidity and dispute tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for online marketplaces',
    headline: 'Demand arrived in a category where you had nothing to sell it.',
    lede:
      'A marketplace fails in specific categories, not overall. Verity holds unfilled demand, seller supply and dispute cost against each one.',
    note: 'Verity runs the operation behind the marketplace. The platform itself stays where it is.',
    panel: {
      title: 'Marketplace',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active sellers', value: '2,140', note: '38% listed once' },
        { label: 'Searches unfilled', value: '19%', note: 'no matching supply' },
        { label: 'Disputes opened', value: '460', note: '11% of orders' },
        { label: 'Take rate after subsidy', value: '6.1%', note: 'headline rate 11%' },
      ],
      rows: [
        { name: '19% of demand has no matching supply', meta: 'Concentrated in 4 categories', active: true },
        { name: '38% of sellers listed once and stopped', meta: 'Onboarding completing, activity not', active: true },
        { name: 'Disputes concentrated on 140 sellers', meta: '6% of sellers, 41% of disputes', active: true },
        { name: 'Subsidy consuming 4.9 points of take rate', meta: 'Not attributed by category', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own marketplace in this shape.',
    },
  },

  overview: {
    heading: 'Liquidity is a category-level fact, and so is every problem behind it.',
    paragraphs: [
      'A marketplace does not have a supply problem or a demand problem in general. It has both, in different categories, at the same time. Nineteen per cent of searches finding no matching supply, concentrated in four categories, is a specific acquisition target rather than a platform-wide concern.',
      'The second characteristic is that seller onboarding and seller activity are different things. Thirty-eight per cent of sellers having listed once and stopped means the onboarding funnel is working and the activation one is not, and the two are usually measured together and therefore neither is understood.',
      'The third is that quality problems concentrate. Six per cent of sellers producing forty-one per cent of disputes is an enforcement decision the marketplace can make deliberately, and disputes are expensive in support time, refunds and buyer retention.',
      'The fourth is the real take rate. A headline rate of eleven per cent that becomes six after discounts, incentives and dispute cost is the actual economics, and it differs by category.',
      'The fifth is that supply and demand have to be matched operationally, not just algorithmically — sellers need onboarding, categories need coverage, and gaps need someone accountable for closing them.',
      'Verity holds unfilled demand, seller activation, dispute concentration and net take rate at the level where each is fixable.',
    ],
  },

  terminology: [
    ['Categories, listings, supply', 'Inventory'],
    ['Sellers, merchants, partners', 'Relationships'],
    ['Buyers, orders, demand', 'Orders'],
    ['Onboarding, verification, activation', 'Workflows'],
    ['Disputes, refunds, enforcement', 'Records'],
    ['Take rate, incentives, subsidy', 'Control'],
    ['Category managers, support, operations', 'People'],
  ],

  challengesHeading: 'Category-level gaps hidden by platform-level numbers.',
  challengesLede:
    'Marketplace difficulties come from averaging two sides of a market that fail separately.',
  challenges: [
    { problem: 'Unfilled demand is not measured by category', detail: 'Searches that find nothing are aggregated and the specific gaps are invisible.', outcome: 'Unfilled demand is held by category and location, making supply acquisition targeted.' },
    { problem: 'Onboarded sellers never become active', detail: 'The funnel ends at registration and activity after it is not tracked.', outcome: 'Activation is a separate tracked stage with owners and follow-up.' },
    { problem: 'Dispute cost is not attributed to sellers', detail: 'Support handles disputes individually and the concentration is never seen.', outcome: 'Disputes carry seller, category and cause, so concentration is actionable.' },
    { problem: 'Net take rate is unknown by category', detail: 'Incentives and dispute costs are pooled centrally.', outcome: 'Subsidy and dispute cost are attributed, giving net take rate per category.' },
    { problem: 'Seller quality signals are not acted on', detail: 'Late fulfilment, cancellations and complaints exist as separate reports.', outcome: 'Quality signals aggregate to a seller record with enforcement states.' },
    { problem: 'Category ownership is unclear', detail: 'Nobody is accountable for the liquidity of a specific category.', outcome: 'Categories carry owners with supply, demand and quality targets.' },
  ],

  modulesLede: 'One system across supply, demand, quality and economics.',
  modules: [
    { id: 'inventory', title: 'Categories, listings and supply coverage', line: 'Categories carry their listings, active sellers, coverage by location and unfilled demand.', why: 'Liquidity is category-level and so is the fix.', example: 'Unfilled demand concentrated in four categories.' },
    { id: 'relationships', title: 'Sellers, verification and activation', line: 'Sellers carry onboarding stage, verification, first listing, activity level, quality signals and enforcement state.', why: 'Registration and activation are different problems with different owners.', example: 'Thirty-eight per cent of sellers listed once and stopped.' },
    { id: 'orders', title: 'Buyers, orders and fulfilment', line: 'Orders carry the seller, category, fulfilment performance, cancellation and outcome.', why: 'Buyer experience is produced by sellers the marketplace does not control.', example: 'Fulfilment performance by seller and category.' },
    { id: 'records', title: 'Disputes, refunds and enforcement', line: 'Disputes carry seller, buyer, category, cause, resolution, cost and enforcement action.', why: 'Dispute concentration is the most actionable quality signal a marketplace has.', example: 'Six per cent of sellers producing forty-one per cent of disputes.' },
    { id: 'control', title: 'Take rate, incentives and subsidy', line: 'One permission model and one audit trail, with commissions, discounts, incentives and dispute cost attributed per category and seller.', why: 'Headline take rate is not the economics the business runs on.', example: 'Subsidy consuming almost five points of take rate.' },
    { id: 'workflows', title: 'Onboarding and category expansion', line: 'Seller acquisition, verification, first listing and activation run as tracked sequences with owners.', why: 'Closing a category gap is an operational project, not an algorithmic one.', example: 'Sellers acquired against a category coverage target.' },
    { id: 'people', title: 'Category managers, support and operations', line: 'Staff carry category ownership, seller portfolios, dispute handling and targets.', why: 'A category without an owner has nobody closing its gap.', example: 'Categories with coverage targets and named owners.' },
    { id: 'intelligence', title: 'Liquidity, quality and economics reporting', line: 'Unfilled demand, activation rates, dispute concentration, net take rate and category contribution come from the records.', why: 'Every marketplace decision is a category decision and needs category data.', example: 'Net take rate by category after subsidy and disputes.' },
    { id: 'ai', title: 'Ask the marketplace a question', line: 'Verity AI answers from your own seller, listing, order and dispute records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about where supply is missing and which sellers cost most.', example: '"Where is demand going unfilled?" returns the categories with volumes.' },
    { id: 'communication', title: 'Seller contact and enforcement notices', line: 'Activation follow-up, quality warnings and enforcement notices attach to the seller.', why: 'Enforcement is a sequence of recorded steps, not a single action.', example: 'Warning and enforcement history per seller.' },
    { id: 'locations', title: 'Geographies and coverage', line: 'Supply and demand are held by location as well as category.', why: 'A category can be liquid in one city and empty in another.', example: 'Category coverage by city against demand.' },
    { id: 'suppliers', title: 'Logistics and service partners', line: 'Fulfilment and service partners carry performance against the orders they touch.', why: 'Partner failures reach the buyer as marketplace failures.', example: 'Delivery performance by partner and region.' },
  ],

  workflowsHeading: 'Acquire, verify, activate, monitor, enforce.',
  workflowsLede: 'These already happen. Recorded, liquidity becomes a managed number.',
  workflows: [
    { name: 'Category gap closure', steps: ['Unfilled demand identified by category and location', 'Target supply defined', 'Seller acquisition assigned to a category owner', 'Onboarding and first listing tracked', 'Coverage measured against the gap'], note: 'A gap without a named owner and a target does not close.' },
    { name: 'Seller activation', steps: ['Seller onboarded and verified', 'First listing tracked as a stage', 'Inactivity after first listing surfaced', 'Support or incentive assigned', 'Activity level recorded'], note: 'Activation is where most marketplace supply is actually lost.' },
    { name: 'Dispute handling', steps: ['Dispute raised with order and seller', 'Cause categorised', 'Resolution and cost recorded', 'Seller quality signal updated', 'Enforcement considered at threshold'], note: 'Recording cause is what turns dispute volume into a seller decision.' },
    { name: 'Enforcement', steps: ['Quality signals aggregated per seller', 'Warning issued and recorded', 'Improvement period tracked', 'Restriction or removal decided within authority', 'Outcome recorded'], note: 'Enforcement needs a documented sequence to be defensible.' },
    { name: 'Category economics review', steps: ['Gross volume and commission compiled', 'Incentives and subsidy attributed', 'Dispute and support cost applied', 'Net take rate calculated', 'Category strategy adjusted'], note: 'Net take rate per category is what should drive investment.' },
  ],

  ai: {
    heading: 'Ask about liquidity and quality.',
    lede: 'Verity AI reads the same seller, listing, order and dispute records the marketplace creates as it operates. It answers from your own marketplace, respects permissions, and can turn an answer into acquisition or enforcement.',
    panelMeta: 'Grounded in your marketplace records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Where is demand going unfilled by category and city?',
      'Which sellers onboarded but never became active?',
      'Which sellers account for the most disputes?',
      'What is net take rate by category after subsidy and disputes?',
      'Which categories have coverage below their target?',
      'What is fulfilment performance by seller?',
      'Which enforcement cases are open and at what stage?',
      'Which logistics partners underperform by region?',
      'Summarise liquidity and quality by category.',
    ],
  },

  automationHeading: 'Gaps, activation and quality.',
  automationLede: 'Each runs from the marketplace’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Unfilled demand rises in a category', steps: ['Flagged with volume and location', 'Acquisition target raised with the category owner', 'Coverage tracked against the gap'] },
    { trigger: 'A seller does not list after onboarding', steps: ['Activation follow-up assigned', 'Support or incentive applied', 'Activity recorded'] },
    { trigger: 'A seller passes a dispute threshold', steps: ['Quality signals aggregated', 'Warning issued and recorded', 'Enforcement decision raised at the next threshold'] },
    { trigger: 'Category net take rate falls below target', steps: ['Subsidy and dispute cost attributed', 'Review raised with the category owner', 'Adjustment recorded'] },
    { trigger: 'A logistics partner misses performance in a region', steps: ['Affected orders identified', 'Partner performance updated', 'Routing decision raised'] },
  ],

  intelligenceHeading: 'What the marketplace can see.',
  intelligenceLede: 'Liquidity, quality and economics from operating records.',
  intelligence: [
    { area: 'Liquidity', points: ['Unfilled demand by category and location', 'Supply coverage against targets', 'Listing depth by category', 'Match rates'] },
    { area: 'Supply', points: ['Onboarding against activation', 'Seller activity levels and lapse', 'Seller concentration by category', 'Acquisition performance by owner'] },
    { area: 'Quality', points: ['Disputes by seller, category and cause', 'Fulfilment and cancellation rates', 'Enforcement cases and outcomes', 'Buyer repeat behaviour after disputes'] },
    { area: 'Economics', points: ['Gross volume and commission by category', 'Subsidy and incentive attribution', 'Dispute and support cost', 'Net take rate by category'] },
  ],
  intelligenceNote: 'Verity records the operation behind the marketplace. The platform itself continues as it is.',

  rolesHeading: 'One marketplace, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'Where is the market working?', focus: 'Liquidity by category, net take rate, seller activation, dispute concentration.' },
    { role: 'Category manager', question: 'What is my category short of?', focus: 'Unfilled demand, supply coverage, seller activity, category economics.' },
    { role: 'Seller operations', question: 'Which sellers need attention?', focus: 'Activation follow-up, quality signals, enforcement stages, portfolio performance.' },
    { role: 'Support lead', question: 'What is causing disputes?', focus: 'Dispute causes, resolution times, cost, seller and partner patterns.' },
  ],

  useCasesHeading: 'What online marketplaces use Verity for',
  useCases: [
    { name: 'Finding liquidity gaps', body: 'Unfilled demand held by category and location, so supply acquisition targets a specific gap rather than a general shortage.' },
    { name: 'Separating onboarding from activation', body: 'First listing and subsequent activity tracked as their own stages, which is where most acquired supply is actually lost.' },
    { name: 'Acting on dispute concentration', body: 'Disputes carrying seller, category and cause, so the small share of sellers producing most of the cost becomes an enforcement decision.' },
    { name: 'Knowing the real take rate', body: 'Incentives, discounts and dispute cost attributed by category, giving net economics rather than a headline commission rate.' },
    { name: 'Giving categories owners', body: 'Coverage, quality and economic targets held per category with a named owner, so gaps have someone accountable for closing them.' },
    { name: 'Defensible enforcement', body: 'Warnings, improvement periods and restrictions recorded as a sequence, so enforcement is documented rather than abrupt.' },
    { name: 'Asking about the marketplace', body: 'Plain-language questions across supply, demand, quality and economics, with acquisition and enforcement raised in the same step.' },
  ],

  migration: 'The marketplace platform continues and is mapped during implementation. Sellers with onboarding and quality history, category structures, order and dispute history, incentive records and partner performance are brought across.',

  faqHeading: 'Questions online marketplaces ask',
  faqs: [
    ['What can AI software do for an online marketplace?', 'Verity AI answers questions from your own seller, listing, order and dispute records: where demand is going unfilled by category and city, which sellers onboarded but never listed, which sellers account for the most disputes, what net take rate is by category. Each answer can become an acquisition target or an enforcement step.'],
    ['Why measure liquidity by category?', 'Because a marketplace rarely has a single supply or demand problem. It has different failures in different categories at once, and platform-level averages hide the specific gap that a category owner could close.'],
    ['What is the difference between onboarding and activation?', 'Onboarding ends at registration and verification. Activation is the first listing and continued activity after it, and a large share of acquired sellers stop there — which is only visible when the two are tracked separately.'],
    ['How does dispute tracking help?', 'Disputes carry the seller, category and cause, so the concentration — typically a small share of sellers producing a large share of cost — becomes an enforcement and quality decision rather than a support workload.'],
    ['Can it show real take rate?', 'Commissions, discounts, incentives and dispute cost are attributed per category and seller, which produces net take rate rather than the headline commission the marketplace advertises.'],
    ['Does it help with enforcement?', 'Quality signals aggregate to the seller record, and warnings, improvement periods and restrictions are recorded as a documented sequence with authority, which is what makes enforcement defensible.'],
    ['Does it replace our platform?', 'No. The marketplace platform continues as it is. Verity holds the operation around it — sellers, categories, quality, disputes, enforcement and economics.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of category structures, seller lifecycle stages, dispute causes and incentive types, configuration, migration of sellers and history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with unfilled demand.',
  ctaLede: 'It names the categories that need supply. Tell us how liquidity is measured today.',

  related: ['ecommerce-businesses', 'distributors', 'wholesalers', 'saas-companies', 'data-companies', 'startups'],
};
