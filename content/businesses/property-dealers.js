export default {
  slug: 'property-dealers',
  status: 'published',
  plural: 'property dealers',
  subject: 'property dealing business',

  seo: {
    title: 'AI business management software for property dealers | Verity',
    description:
      'Verity connects owner listings, buyer requirements, token and agreement stages, document verification and dual-side commission into one operational system.',
    keywords: [
      'AI software for property dealers',
      'property dealer management software',
      'resale listing and buyer matching software',
      'token agreement and commission tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for property dealers',
    headline: 'Between the token and the registry, a deal has ten ways to die.',
    lede:
      'Resale transactions fail on documents, on a seller who changes their mind, on a chain that will not close. Verity tracks the stages between token and registration where deals are actually lost.',
    note: 'Runs alongside however you currently list and advertise.',
    panel: {
      title: 'Deals',
      meta: 'All deals · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Live listings', value: '148', note: '62 exclusive' },
        { label: 'Deals in progress', value: '23', note: 'token taken' },
        { label: 'Document issues', value: '9', note: 'blocking registration' },
        { label: 'Commission due', value: '₹42 L', note: '11 completed deals' },
      ],
      rows: [
        { name: '9 deals blocked on document verification', meta: 'Oldest 34 days · token money held', active: true },
        { name: '4 listings advertised at a price the owner has since raised', meta: 'Buyers viewing on old terms', active: true },
        { name: 'Commission unpaid on 11 registered deals', meta: '₹42 L · one party each side', active: true },
        { name: '38 buyer requirements unmatched against live stock', meta: 'No contact in 3 weeks', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own deals in this shape.',
    },
  },

  overview: {
    heading: 'Resale is not a pipeline. It is a chain of conditions that all have to hold.',
    paragraphs: [
      'A dealer in the secondary market does not simply match a buyer to a property. They hold a relationship with an owner who may or may not be serious about selling, a buyer whose funding may or may not come through, and a transaction that only completes when documents, dues, approvals and often a chain of other transactions all align. The deal is not done at the token; it is done at registration, and everything between is where dealers lose their fee.',
      'The characteristic failure is document verification. Title chain, dues, approvals, no-objection certificates and society clearances all have to be right, and the problems surface after the token has been taken and everyone has committed emotionally. A deal blocked for thirty-four days on a document is a deal that will probably die and take the fee with it.',
      'The second is that owners change their terms. A price agreed verbally is raised, a possession date moves, an inclusion is withdrawn — and buyers continue viewing on terms that no longer exist, which is the fastest way to lose both parties.',
      'The third is commission. A dealer is often paid by both sides, at different rates, at different points, and settlement depends on what was agreed verbally at the start of a relationship months earlier.',
      'The fourth is that unmatched buyer requirements are the dealer’s real inventory — a specific requirement with a budget is worth more than a listing — and they go cold in weeks.',
      'Verity holds the listing, the owner, the buyer requirement, the deal stages, the documents and the commission as one set of records.',
    ],
  },

  terminology: [
    ['Listings, properties, chains', 'Records'],
    ['Owners, buyers, tenants', 'Relationships'],
    ['Viewings, negotiations, tokens, registration', 'Work'],
    ['Title documents, dues, clearances', 'Workflows'],
    ['Dealers, associates, referrers', 'People'],
    ['Localities, societies, projects', 'Locations'],
    ['Commission terms, both-side fees', 'Control'],
  ],

  challengesHeading: 'The deal dies after everyone has committed.',
  challengesLede:
    'Property dealing failures happen between token and registration, where nobody is tracking conditions.',
  challenges: [
    {
      problem: 'Document problems surface after the token',
      detail:
        'Title chain, dues and clearances are checked when the transaction is already emotionally committed, and a problem then kills the deal.',
      outcome:
        'Document verification is a checklist against the listing at intake, so problems surface before a token is taken.',
    },
    {
      problem: 'Owner terms change and buyers are not told',
      detail:
        'A price or a condition changes verbally, the listing is not updated, and buyers view on terms that no longer exist.',
      outcome:
        'Terms are on the listing record with a change history, so what is being sold is unambiguous.',
    },
    {
      problem: 'Commission is agreed verbally on both sides',
      detail:
        'Rates differ by party and by deal and are recalled differently at settlement, months after they were agreed.',
      outcome:
        'Commission terms are recorded per party at the point of engagement, so settlement follows the record.',
    },
    {
      problem: 'Buyer requirements go cold',
      detail:
        'A specific requirement with a budget is the most valuable thing a dealer holds, and it decays in weeks without contact.',
      outcome:
        'Requirements are records with an age and an owner, matched against new listings automatically.',
    },
    {
      problem: 'Chained transactions fail invisibly',
      detail:
        'A sale depends on the seller’s onward purchase, and a break anywhere in the chain stops everything without warning.',
      outcome:
        'Dependencies between deals are recorded, so a break upstream is visible in every deal it affects.',
    },
    {
      problem: 'Owners are not managed as relationships',
      detail:
        'An owner who did not sell this time is the source of the next listing and is forgotten within a month.',
      outcome:
        'Owners are records with their properties, expectations and history, so the next opportunity is a list rather than a memory.',
    },
  ],

  modulesLede:
    'One system across listings, requirements, deal stages and documents.',
  modules: [
    {
      id: 'records',
      title: 'Listings, properties and document status',
      line:
        'Each listing is a record with its owner, terms, price history, document verification status, viewing history and current state.',
      why:
        'A listing whose documents have not been verified is not really stock, and treating it as stock is how deals die late.',
      example:
        'Nine deals blocked on document verification, the oldest thirty-four days with token money held.',
    },
    {
      id: 'relationships',
      title: 'Owners, buyers and requirements',
      line:
        'Owners and buyers are records with their properties, requirements, budgets, viewing history and communications.',
      why:
        'A buyer requirement with a budget is the dealer’s real inventory and the thing most likely to be lost to inattention.',
      example:
        'Thirty-eight buyer requirements unmatched with no contact in three weeks.',
    },
    {
      id: 'work',
      title: 'Viewings, negotiation, token and registration',
      line:
        'Each stage is work with a date, an owner and a state, from first viewing to registration and handover.',
      why:
        'The deal lives between the token and the registry, and that period is where dealers stop tracking.',
      example:
        'Twenty-three deals with tokens taken, each showing the stage and condition it waits on.',
    },
    {
      id: 'workflows',
      title: 'Document verification, dues and clearances',
      line:
        'Title chain, dues, approvals and clearances are checklist steps with owners and states against the listing and the deal.',
      why:
        'These are the conditions the transaction depends on, and checking them early is the highest-value thing a dealer can do.',
      example:
        'A verification checklist completed at listing intake rather than after a token is taken.',
    },
    {
      id: 'people',
      title: 'Dealers, associates and referrers',
      line:
        'The team and referral sources are modelled once, and every listing, requirement and deal shows who owns it.',
      why:
        'Dealing is relationship-driven and the relationships are usually personal, which makes them fragile.',
      example:
        'Listings and requirements by dealer, so a departure is a reassignment.',
    },
    {
      id: 'control',
      title: 'Commission terms on both sides',
      line:
        'Commission terms per party are recorded at engagement, with one permission model and one audit trail across records.',
      why:
        'Dual-side commission agreed verbally is the most common source of dispute at completion.',
      example:
        'Forty-two lakh of commission due across eleven registered deals, calculable from recorded terms.',
    },
    {
      id: 'communication',
      title: 'What was agreed and when',
      line:
        'Conversations, offers and term changes attach to the listing, requirement or deal they concern.',
      why:
        'Almost every dispute in resale is about what was said, and none of it is currently written down.',
      example:
        'An owner’s agreement to include fittings, recorded on the listing rather than remembered.',
    },
    {
      id: 'locations',
      title: 'Localities, societies and projects',
      line:
        'Areas, societies and projects are locations with their own listings, transaction history and clearance requirements.',
      why:
        'Dealers work areas, and society-level requirements repeat across every transaction in them.',
      example:
        'Society clearance requirements known from the last transaction in the same building.',
    },
    {
      id: 'intelligence',
      title: 'Pipeline, conversion and commission reporting',
      line:
        'Deals by stage, time to registration, failure reasons, listing age, requirement matching and commission earned come from the operational records.',
      why:
        'A dealer usually knows how many deals closed and nothing about why the others did not.',
      example:
        'Deal failure reasons by stage, which is the only way to reduce them.',
    },
    {
      id: 'ai',
      title: 'Ask the deal book a question',
      line:
        'Verity AI answers from your own listing, requirement, deal and commission records, respects permissions, and can create assigned follow-ups.',
      why:
        'The questions worth asking are about conditions outstanding and requirements going cold.',
      example:
        '"Which deals are blocked on documents?" returns nine with the outstanding item and its age.',
    },
  ],

  workflowsHeading: 'Token to registration, condition by condition.',
  workflowsLede:
    'These already happen. As records they make the conditions visible before they become fatal.',
  workflows: [
    {
      name: 'Listing intake and verification',
      steps: [
        'Property recorded against the owner with terms and price',
        'Document verification checklist opened',
        'Title chain, dues and clearances checked and recorded',
        'Exclusivity or open terms agreed and recorded',
        'Listing released for matching once verification is satisfactory',
      ],
      note:
        'Verifying at intake rather than after a token is the single highest-value change a dealer can make.',
    },
    {
      name: 'Requirement matching',
      steps: [
        'Buyer requirement recorded with budget, configuration and locality',
        'Matched against live verified listings',
        'Viewings scheduled and outcomes recorded',
        'Objections and feedback captured on both records',
        'Requirement kept live with scheduled contact',
      ],
      note:
        'A requirement is inventory, and it decays faster than a listing does.',
    },
    {
      name: 'Negotiation to token',
      steps: [
        'Offer recorded against the listing and requirement',
        'Terms agreed and any change to owner terms recorded',
        'Token amount and conditions agreed',
        'Token received and held with its conditions recorded',
        'Deal opened with target registration date',
      ],
      note:
        'Recording the conditions attached to a token is what makes its return or forfeiture defensible.',
    },
    {
      name: 'Token to registration',
      steps: [
        'Outstanding conditions listed with owners and dates',
        'Buyer funding progress tracked',
        'Dues, clearances and approvals obtained and recorded',
        'Chain dependencies tracked where the deal is linked',
        'Agreement executed and registration completed',
        'Possession and handover recorded',
      ],
      note:
        'This period is where deals die, and it is where most dealers stop tracking anything.',
    },
    {
      name: 'Commission settlement',
      steps: [
        'Terms per party confirmed from the engagement record',
        'Commission accrued at the agreed trigger',
        'Invoice raised against each party',
        'Payment received and applied',
        'Outstanding aged with follow-up assigned',
      ],
      note:
        'Settlement follows the record rather than two recollections of a conversation months earlier.',
    },
    {
      name: 'Owner relationship maintenance',
      steps: [
        'Owners whose properties did not sell identified',
        'Expectations and objections reviewed from the history',
        'Follow-up assigned at an appropriate interval',
        'Re-listing terms discussed and recorded',
        'Outcome recorded against the owner',
      ],
      note:
        'The owner who did not sell this year is next year’s listing, and only a record remembers them.',
    },
  ],

  ai: {
    heading: 'Ask what a deal is waiting on.',
    lede:
      'Verity AI reads the same listing, requirement, deal and commission records the business creates as it works. It answers from your own deal book, respects permissions, and can turn an answer into follow-ups.',
    panelMeta: 'Grounded in your deal records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which deals are blocked on documents, and for how long?',
      'Which listings are advertised on terms the owner has since changed?',
      'Which buyer requirements have had no contact in three weeks?',
      'Which deals depend on a chain that has broken upstream?',
      'What commission is due and unpaid across registered deals?',
      'Which listings have been viewed repeatedly without an offer?',
      'What are the most common reasons deals failed this quarter?',
      'Which owners did not sell and are worth re-approaching?',
      'Summarise deals in progress and their outstanding conditions.',
    ],
  },

  automationHeading: 'The conditions nobody is watching.',
  automationLede:
    'Each runs from the listing and deal records at the point the condition is met.',
  automations: [
    {
      trigger: 'A listing is taken on',
      steps: [
        'Document verification checklist opened with an owner',
        'Title chain, dues and clearances tracked',
        'Listing held from matching until verification is satisfactory',
      ],
    },
    {
      trigger: 'A document condition ages past threshold',
      steps: [
        'Deal flagged with the outstanding item and token held',
        'Follow-up assigned to the deal owner',
        'Escalated with the buyer and owner history attached',
      ],
    },
    {
      trigger: 'Owner terms change',
      steps: [
        'Listing updated with the change recorded',
        'Buyers who viewed on prior terms identified',
        'Communication task raised for each',
      ],
    },
    {
      trigger: 'A buyer requirement ages without contact',
      steps: [
        'Requirement flagged with its budget and history',
        'New matching listings surfaced',
        'Follow-up assigned to the owning dealer',
      ],
    },
    {
      trigger: 'A deal in a chain is delayed',
      steps: [
        'Dependent deals identified and flagged',
        'Owners of each notified with the cause',
        'Revised expectations recorded',
      ],
    },
    {
      trigger: 'A deal is registered',
      steps: [
        'Commission accrued per party from recorded terms',
        'Invoices raised against both sides',
        'Outstanding aged with follow-up assigned',
      ],
    },
  ],

  intelligenceHeading: 'What the dealer can actually see.',
  intelligenceLede:
    'Conditions, conversion and commission from the deal records themselves.',
  intelligence: [
    {
      area: 'Deals',
      points: [
        'Deals by stage and outstanding condition',
        'Time from token to registration',
        'Failure reasons by stage',
        'Chain dependencies and their status',
      ],
    },
    {
      area: 'Listings',
      points: [
        'Listings by verification status and age',
        'Viewings without offers',
        'Term changes and price history',
        'Exclusive against open listings',
      ],
    },
    {
      area: 'Requirements',
      points: [
        'Live buyer requirements by budget and locality',
        'Requirements without recent contact',
        'Match rate against available listings',
        'Conversion from viewing to offer',
      ],
    },
    {
      area: 'Commission',
      points: [
        'Commission earned by deal and party',
        'Outstanding with ageing',
        'Realised rate against agreed terms',
        'Contribution by dealer and referrer',
      ],
    },
    {
      area: 'Areas',
      points: [
        'Transaction volume by locality and society',
        'Price movement from recorded deals',
        'Clearance requirements by society',
        'Owner relationships by area',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from the records a dealer creates while working a deal — listings, requirements, viewings, conditions and settlements.',

  rolesHeading: 'A small firm, three different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Principal',
      question: 'What will actually register?',
      focus: 'Deals by stage and condition, failure reasons, commission due, listing and requirement inventory.',
    },
    {
      role: 'Dealer',
      question: 'What do I need to move today?',
      focus: 'Own deals and their outstanding conditions, requirements to contact, viewings scheduled, owners to follow up.',
    },
    {
      role: 'Documentation',
      question: 'What is blocking registration?',
      focus: 'Verification checklists by listing, outstanding clearances and dues, chain dependencies, token conditions.',
    },
  ],

  useCasesHeading: 'What property dealers use Verity for',
  useCases: [
    {
      name: 'Verification at intake',
      body: 'Document checklists completed when a listing is taken on, so title and clearance problems surface before a token is taken rather than after.',
    },
    {
      name: 'Condition tracking after token',
      body: 'Outstanding conditions with owners and ages across the period between token and registration, where most deals die.',
    },
    {
      name: 'Term change communication',
      body: 'Owner term changes recorded on the listing with viewers identified, so nobody continues on terms that no longer exist.',
    },
    {
      name: 'Buyer requirement inventory',
      body: 'Requirements as records with budgets, matched against new listings and kept alive with scheduled contact.',
    },
    {
      name: 'Chain dependency visibility',
      body: 'Linked deals recorded as dependencies, so a break upstream is visible in every deal it affects.',
    },
    {
      name: 'Dual-side commission',
      body: 'Terms recorded per party at engagement, so settlement is a calculation rather than two recollections.',
    },
    {
      name: 'Owner relationship continuity',
      body: 'Owners who did not sell held as records with their expectations, since they are the source of the next listing.',
    },
    {
      name: 'Asking about conditions',
      body: 'Plain-language questions across listings, deals, documents and commission, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'Whatever you use to advertise and communicate continues to run and is mapped during implementation. Owners, listings, buyer requirements, deals in progress and commission terms are brought across, and Verity is configured around how the firm already works.',

  faqHeading: 'Questions dealers ask',
  faqs: [
    [
      'What can AI software do for a property dealing business?',
      'Verity AI answers questions from your own listing, requirement, deal and commission records: which deals are blocked on documents and for how long, which listings are advertised on terms the owner has changed, which buyer requirements have gone cold, what commission is due across registered deals. Each answer can become a follow-up.',
    ],
    [
      'How is this different from a CRM?',
      'A CRM tracks a pipeline. Resale is a chain of conditions — title, dues, clearances, funding, sometimes a linked transaction — that all have to hold between the token and the registry. Verity tracks those conditions with owners and ages, which is where deals actually fail.',
    ],
    [
      'Can it prevent deals dying on documents?',
      'Verification is a checklist opened when a listing is taken on rather than after a token has been taken, so title chain, dues and clearance problems surface while the transaction is not yet committed.',
    ],
    [
      'Does it handle commission on both sides?',
      'Commission terms are recorded per party at the point of engagement, so settlement at registration follows the record rather than two different memories of a conversation months earlier.',
    ],
    [
      'Can it track buyer requirements?',
      'Requirements are records with budget, configuration and locality, matched automatically against newly verified listings and kept alive with scheduled contact — which matters because a requirement decays faster than a listing.',
    ],
    [
      'What about linked or chained transactions?',
      'Dependencies between deals are recorded, so a delay in one is visible in every deal that depends on it rather than surfacing when a registration date is missed.',
    ],
    [
      'What happens if a dealer leaves?',
      'Listings, requirements, owners and deals are firm records assigned to a dealer, so a departure is a reassignment with the history intact rather than the loss of the relationships they held.',
    ],
    [
      'Is it suitable for a two-person firm?',
      'A two-person firm carries the same conditions per deal and has less capacity to track them, which is why deals in small firms more often die late.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how deals are worked, configuration of verification checklists and commission terms, migration of listings, requirements and live deals, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the deals waiting on a document.',
  ctaLede:
    'Those are transactions with money committed and a fee at risk. Tell us how conditions are tracked today.',

  related: ['real-estate-agencies', 'property-management', 'real-estate-developers', 'construction-companies', 'financial-advisors', 'interior-designers'],
};
