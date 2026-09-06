export default {
  slug: 'home-builders',
  status: 'published',
  plural: 'home builders',
  subject: 'home builder',

  seo: {
    title: 'AI business management software for home builders | Verity',
    description:
      'Verity gives home builders one system for per-home costing, buyer selections and change orders, trade scheduling, snagging and defects liability across every home under construction.',
    keywords: [
      'AI software for home builders',
      'home builder management software',
      'per-home cost and change order tracking',
      'residential construction scheduling software',
    ],
  },

  hero: {
    eyebrow: 'Verity for home builders',
    headline: 'The buyer changed the kitchen, and nobody told the electrician.',
    lede:
      'A home is built while its owner is still deciding. Verity connects buyer selections and changes to the cost, the schedule and the trades who need to know.',
    note: 'Verity runs the build business. Design and drafting tools stay where they are.',
    panel: {
      title: 'Builds',
      meta: 'In progress',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Homes under construction', value: '18', note: '6 stages' },
        { label: 'Change orders open', value: '31', note: '12 unpriced' },
        { label: 'Homes over budget', value: '5', note: 'against contract' },
        { label: 'Snags open past handover', value: '46', note: 'across 9 homes' },
      ],
      rows: [
        { name: '12 change orders unpriced and in progress', meta: 'Work started, cost unagreed', active: true },
        { name: '3 selections not passed to trades', meta: 'Kitchen and electrical', active: true },
        { name: '5 homes over contract cost', meta: 'Variations absorbed', active: true },
        { name: '46 snags open past handover on 9 homes', meta: 'Defects liability running', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own builds in this shape.',
    },
  },

  overview: {
    heading: 'Every home is bespoke, and the buyer keeps deciding after work starts.',
    paragraphs: [
      'A home builder constructs for a named owner who is present throughout. Unlike a commercial contract where the scope is settled before work begins, a home is specified while it is being built: the buyer chooses finishes, changes their mind, and each decision arrives after some of the work that depends on it has already been planned or done.',
      'This produces the defining problem. Twelve change orders unpriced with work in progress is a builder doing work whose cost has not been agreed, and three selections that never reached the trades is work about to be done wrongly. The gap between a buyer decision and the people who act on it is where residential margin is lost.',
      'The second characteristic is per-home costing. Homes are similar but not identical, and a builder running eighteen homes needs cost per home rather than cost per site, because the variations are what make one profitable and another not.',
      'The third is trade scheduling across many small sites. The same electrician, plumber and tiler move between homes, and a delay on one home displaces work on three others.',
      'The fourth is handover and defects liability. Forty-six snags open past handover is an obligation with a clock on it and a direct effect on referrals.',
      'Verity connects buyer selections and changes to cost, schedule and trades, and tracks every home separately from handover through defects liability.',
    ],
  },

  terminology: [
    ['Homes, plots, stages', 'Work'],
    ['Buyers, owners, referrals', 'Relationships'],
    ['Selections, change orders, variations', 'Workflows'],
    ['Trades, subcontractors, suppliers', 'Relationships'],
    ['Materials, allowances, wastage', 'Inventory'],
    ['Snags, defects, warranty', 'Records'],
    ['Contract, approvals, sign-off', 'Control'],
  ],

  challengesHeading: 'A moving specification against a fixed contract price.',
  challengesLede:
    'Home building difficulties come from building for a person who is still choosing.',
  challenges: [
    { problem: 'Work starts on unpriced changes', detail: 'The buyer asks, the site agrees, and the cost conversation happens afterwards or not at all.', outcome: 'A change order carries a price and an approval state before it reaches the schedule.' },
    { problem: 'Selections do not reach the trades', detail: 'A finish chosen by the buyer sits in an email while the trade works to the original specification.', outcome: 'Selections are recorded against the home and issued to the trades whose work depends on them.' },
    { problem: 'Cost is tracked by site rather than by home', detail: 'Materials and labour are pooled and no individual home’s margin is knowable.', outcome: 'Cost is attributed per home, so variation-driven losses are visible individually.' },
    { problem: 'One home’s delay displaces several others', detail: 'Shared trades mean a slip in one build cascades into the schedule of the rest.', outcome: 'Trade allocation is held across all homes, so a slip shows its downstream effect.' },
    { problem: 'Allowances are exceeded quietly', detail: 'Buyers select above the contract allowance and the difference is absorbed.', outcome: 'Selections are priced against their allowance with the difference raised for approval.' },
    { problem: 'Snags outlive handover', detail: 'Defects reported after handover have owners, deadlines and a liability period nobody is tracking.', outcome: 'Snags carry an owner, an age and a defects liability deadline per home.' },
  ],

  modulesLede: 'One system across homes, buyers, trades and cost.',
  modules: [
    { id: 'work', title: 'Homes, plots and build stages', line: 'Each home is a work record with its plot, specification, stage, programme, cost position and buyer.', why: 'Eighteen homes are eighteen projects, not one site with eighteen parts.', example: 'Five homes over contract cost.' },
    { id: 'workflows', title: 'Selections, change orders and approvals', line: 'A buyer selection or change carries the affected trades, the cost against allowance, an approval state and an issue to site.', why: 'The gap between a buyer decision and the trades acting on it is where residential margin goes.', example: 'Twelve change orders unpriced with work in progress.' },
    { id: 'relationships', title: 'Buyers, trades and suppliers', line: 'Buyers carry their home, selections, changes, payments and snags; trades carry their allocation across every home.', why: 'The buyer is present throughout the build and the trades are shared across builds.', example: 'Three selections not passed to the trades who need them.' },
    { id: 'orders', title: 'Contract value, variations and payments', line: 'Contract value, allowances, priced variations and stage payments sit against each home.', why: 'A fixed contract with a moving specification only holds if variations are priced and agreed.', example: 'Selection cost against allowance per home.' },
    { id: 'inventory', title: 'Materials, allowances and site stock', line: 'Materials ordered and consumed are recorded against the home rather than the site as a whole.', why: 'Per-home cost requires per-home material attribution.', example: 'Material cost per home against budget.' },
    { id: 'people', title: 'Site supervisors, trades and scheduling', line: 'Trade availability and allocation are held across all homes, with dependency between stages.', why: 'Shared trades mean scheduling is a portfolio problem, not a per-home one.', example: 'A slip on one home displacing three others.' },
    { id: 'records', title: 'Snags, defects and warranty', line: 'Snags carry the home, room, trade responsible, owner, age and defects liability deadline.', why: 'Post-handover obligations run on a clock and directly affect referral.', example: 'Forty-six snags open past handover across nine homes.' },
    { id: 'intelligence', title: 'Cost, variation and schedule reporting', line: 'Per-home margin, variation recovery, allowance overruns, trade utilisation and snag ageing come from the records.', why: 'The business is profitable home by home, so it has to be measured home by home.', example: 'Margin per home against contract.' },
    { id: 'ai', title: 'Ask the builds a question', line: 'Verity AI answers from your own home, buyer, trade and cost records, respects permissions, and can create assigned follow-ups.', why: 'The questions that matter are about unpriced work and undelivered selections.', example: '"Which change orders are unpriced?" returns twelve with the trades affected.' },
    { id: 'communication', title: 'Buyer contact and site instructions', line: 'Buyer conversations, approvals and site instructions attach to the home and the change they concern.', why: 'A change agreed verbally becomes a written record from the same place.', example: 'A buyer approval recorded against the priced variation.' },
    { id: 'control', title: 'Contract, approvals and sign-off', line: 'One permission model and one audit trail covering variation approval, payment release and handover sign-off.', why: 'Committing work above allowance needs a defined authority.', example: 'Variations above a threshold routed for approval before site issue.' },
    { id: 'locations', title: 'Plots, sites and stores', line: 'Homes sit within sites and phases, with shared facilities and stores tracked.', why: 'Several homes on one site share access, storage and services.', example: 'Site stores allocated across homes in progress.' },
  ],

  workflowsHeading: 'Sell, specify, build, change, hand over.',
  workflowsLede: 'These already happen. Recorded, per-home margin and buyer changes stay under control.',
  workflows: [
    { name: 'Selection and allowance', steps: ['Buyer selection recorded against the home and room', 'Priced against the contract allowance', 'Difference raised for buyer approval', 'Approval recorded', 'Issued to affected trades and suppliers'], note: 'A selection that is not issued to the trades is a selection that will be built wrongly.' },
    { name: 'Change order', steps: ['Change requested by the buyer or arising on site', 'Affected trades and stages identified', 'Priced with schedule impact', 'Approved by buyer within authority', 'Released to site and cost updated'], note: 'Pricing before release is what stops unpriced work in progress.' },
    { name: 'Trade scheduling', steps: ['Stage dependencies mapped per home', 'Trade availability allocated across homes', 'Slips recorded with downstream effect', 'Reallocation decided', 'Programme updated per home'], note: 'The downstream effect on other homes is the part that is usually missed.' },
    { name: 'Handover', steps: ['Pre-handover inspection with snags recorded', 'Snags assigned to trades with deadlines', 'Buyer walkthrough and acceptance', 'Handover documented with warranties', 'Defects liability period opened'], note: 'Handover starts an obligation rather than ending one.' },
    { name: 'Defects liability', steps: ['Defect reported by the owner', 'Assigned to the responsible trade', 'Rectification scheduled and completed', 'Owner confirmation recorded', 'Cost attributed to the home'], note: 'Rectification cost attributed to the home is what makes the true margin visible.' },
  ],

  ai: {
    heading: 'Ask about changes and cost per home.',
    lede: 'Verity AI reads the same home, buyer, trade and cost records the business creates as it builds. It answers from your own builds, respects permissions, and can turn an answer into a pricing task or a trade instruction.',
    panelMeta: 'Grounded in your build records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which change orders are unpriced with work in progress?',
      'Which selections have not reached the trades?',
      'Which homes are over contract cost and by how much?',
      'Which selections exceeded their allowance without approval?',
      'What is the downstream effect of the delay on this home?',
      'Which snags are open past handover and how old are they?',
      'What is rectification cost by trade this year?',
      'Which homes are in defects liability and until when?',
      'Summarise margin per home in progress.',
    ],
  },

  automationHeading: 'Changes, allowances and snags.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A change order remains unpriced', steps: ['Flagged with the home and affected trades', 'Pricing assigned', 'Release to site held until priced and approved'] },
    { trigger: 'A selection is approved', steps: ['Affected trades and suppliers identified', 'Issue recorded to each', 'Acknowledgement tracked'] },
    { trigger: 'A selection exceeds its allowance', steps: ['Difference calculated', 'Buyer approval raised', 'Contract position updated on approval'] },
    { trigger: 'A stage slips on one home', steps: ['Downstream trade allocation recalculated', 'Affected homes flagged', 'Reallocation decision recorded'] },
    { trigger: 'A snag passes its rectification deadline', steps: ['Escalated with trade and home', 'Owner notified of the position', 'Closure recorded with cost attributed'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Per-home margin, change recovery and schedule from build records.',
  intelligence: [
    { area: 'Cost', points: ['Margin per home against contract', 'Material and labour cost by home', 'Allowance overruns absorbed or recovered', 'Rectification cost after handover'] },
    { area: 'Changes', points: ['Change orders by state and age', 'Unpriced work in progress', 'Variation recovery rate', 'Schedule impact of changes'] },
    { area: 'Schedule', points: ['Stage progress per home', 'Trade utilisation across homes', 'Slip and downstream displacement', 'Programme against handover dates'] },
    { area: 'Quality', points: ['Snags by trade and home', 'Snags open past handover', 'Defects liability positions', 'Repeat defect types'] },
  ],
  intelligenceNote: 'Verity records the build business. Design and drafting tools continue as they are.',

  rolesHeading: 'One business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Which homes are making money?', focus: 'Margin per home, variation recovery, allowance overruns, rectification cost.' },
    { role: 'Site supervisor', question: 'What is happening on my homes this week?', focus: 'Stage progress, trades allocated, changes released, snags outstanding.' },
    { role: 'Buyer liaison', question: 'What is the buyer waiting on?', focus: 'Selections outstanding, changes awaiting approval, allowance positions, handover dates.' },
    { role: 'Commercial', question: 'What is unpriced or unrecovered?', focus: 'Unpriced change orders, allowance differences, stage payments, contract positions.' },
  ],

  useCasesHeading: 'What home builders use Verity for',
  useCases: [
    { name: 'Pricing changes before work starts', body: 'Change orders carrying a price, a schedule impact and an approval before they reach the site, so unpriced work in progress stops being routine.' },
    { name: 'Getting selections to the trades', body: 'Buyer selections issued to the specific trades whose work depends on them, with acknowledgement recorded.' },
    { name: 'Cost per home', body: 'Materials, labour and variations attributed to individual homes, so margin is knowable home by home rather than pooled across a site.' },
    { name: 'Allowance control', body: 'Selections priced against their contract allowance with the difference raised for approval instead of absorbed.' },
    { name: 'Scheduling shared trades', body: 'Trade allocation held across all homes, so a slip on one build shows its effect on the others immediately.' },
    { name: 'Snagging and defects liability', body: 'Snags with owner, deadline and liability period per home, and rectification cost attributed back to the build.' },
    { name: 'Asking about the builds', body: 'Plain-language questions across changes, cost, schedule and snags, with pricing and instructions raised in the same step.' },
  ],

  migration: 'Design and drafting tools continue and are mapped during implementation. Homes in progress, contracts and allowances, buyer selections and change history, trade records, material costs and open snags are brought across.',

  faqHeading: 'Questions home builders ask',
  faqs: [
    ['What can AI software do for a home builder?', 'Verity AI answers questions from your own home, buyer, trade and cost records: which change orders are unpriced with work in progress, which selections have not reached the trades, which homes are over contract cost, which snags are open past handover. Each answer can become a pricing task or a trade instruction.'],
    ['Why is unpriced change work such a problem?', 'Because the leverage disappears once the work is done. A change priced and approved before release is a commercial transaction; the same change discovered afterwards is a negotiation the builder usually loses.'],
    ['How does it stop selections being missed?', 'A selection is recorded against the home and room, and the trades and suppliers whose work depends on it are issued with it and their acknowledgement is tracked. The gap between the buyer deciding and the trade knowing is closed on the record.'],
    ['Why cost per home rather than per site?', 'Because homes differ by their variations. Pooling cost across a site hides which individual homes lost money and why, which is exactly the information that should set the next contract price.'],
    ['Can it handle trades shared across builds?', 'Trade allocation is held across every home, with stage dependencies, so a slip on one build shows its displacement effect on the others rather than surfacing separately weeks later.'],
    ['What about defects after handover?', 'Handover opens a defects liability period per home. Reported defects carry the responsible trade, an owner and a deadline, and rectification cost is attributed back to the home.'],
    ['Does it replace our drawing software?', 'No. Design and drafting tools continue as they are. Verity holds the build business around them — homes, buyers, selections, changes, trades, cost and snags.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of build stages, allowance structures, trade arrangements and handover process, configuration, migration of homes in progress, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the unpriced changes.',
  ctaLede: 'They are work already happening at a cost nobody agreed. Tell us how buyer changes reach the site today.',

  related: ['construction-companies', 'contractors', 'architects', 'interior-design-firms', 'real-estate-developers', 'building-material-suppliers'],
};
