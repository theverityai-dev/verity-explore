export default {
  slug: 'web-development-agencies',
  status: 'published',
  plural: 'web development agencies',
  subject: 'web development agency',

  seo: {
    title: 'AI business management software for web development agencies | Verity',
    description:
      'Verity gives web development agencies one system for the sites they still look after: dependencies, renewals, unbilled requests and retainer coverage.',
    keywords: [
      'AI software for web development agencies',
      'web agency management software',
      'website maintenance and hosting management software',
      'agency retainer and support request tracking',
    ],
  },

  hero: {
    eyebrow: 'Verity for web development agencies',
    headline: 'You launched it two years ago and you are still responsible for it.',
    lede:
      'The build ends and the obligation does not. Verity holds every site you look after — its hosting, its dependencies, its renewals and the requests nobody billed.',
    note: 'Verity runs the agency. Hosting panels and code repositories stay where they are.',
    panel: {
      title: 'Agency',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sites under care', value: '74', note: '41 clients' },
        { label: 'Sites without a retainer', value: '29', note: 'still receiving requests' },
        { label: 'Small requests this month', value: '138', note: '92 unbilled' },
        { label: 'Dependencies overdue', value: '23 sites', note: 'security updates pending' },
      ],
      rows: [
        { name: '92 small requests done and unbilled', meta: 'Sites without an active retainer', active: true },
        { name: '23 sites with overdue dependency updates', meta: 'Agency named as responsible', active: true },
        { name: '6 domains and certificates expiring in 30 days', meta: 'Client-owned, agency-managed', active: true },
        { name: '3 sites on unsupported platform versions', meta: 'Upgrade unquoted', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own agency in this shape.',
    },
  },

  overview: {
    heading: 'The project ends, the responsibility does not, and most of it is unpriced.',
    paragraphs: [
      'A web agency’s risk is not the build. It is the accumulating population of sites it launched and is still expected to look after. Seventy-four sites under care, twenty-nine of them without an active retainer but still sending requests, is a support business the agency did not intend to start.',
      'The second characteristic is that the small requests are the leak. Ninety-two unbilled requests in a month, each individually too small to invoice, is a substantial amount of agency time given away — and it is given away most often to the clients who have no retainer.',
      'The third is technical obligation. Sites need dependency and security updates, and twenty-three sites overdue is exposure that will be attributed to the agency regardless of what the contract says, because the agency is who the client will call.',
      'The fourth is renewals. Domains, certificates and hosting all expire, and an expiry the agency manages but the client owns is a failure that lands entirely on the agency.',
      'The fifth is platform currency. Sites on unsupported versions need upgrades that nobody has quoted, and the conversation gets harder the longer it waits.',
      'Verity holds every site with its hosting, dependencies, renewals, retainer state and request history in one place.',
    ],
  },

  terminology: [
    ['Sites, builds, launches', 'Work'],
    ['Hosting, domains, certificates', 'Inventory'],
    ['Dependencies, updates, platform versions', 'Control'],
    ['Clients, retainers, support requests', 'Relationships'],
    ['Requests, changes, incidents', 'Workflows'],
    ['Developers, designers, account staff', 'People'],
    ['Projects, quotations, invoicing', 'Orders'],
  ],

  challengesHeading: 'A growing estate of sites you are responsible for.',
  challengesLede:
    'Web agency difficulties come from obligations that outlive the project that created them.',
  challenges: [
    { problem: 'Small requests are done and never billed', detail: 'Each one is too small to invoice and together they are substantial.', outcome: 'Every request is recorded with time and a billing state, so the total is visible.' },
    { problem: 'Sites without retainers still receive support', detail: 'A client whose contract ended still calls and is still helped.', outcome: 'Retainer state sits on the site, so support without cover is a visible decision.' },
    { problem: 'Dependency and security updates fall behind', detail: 'Updates are done when someone remembers, across dozens of sites.', outcome: 'Update status is held per site with overdue exposure surfaced.' },
    { problem: 'Renewals expire on the agency’s watch', detail: 'Domains and certificates the client owns and the agency manages lapse.', outcome: 'Renewals carry ownership, expiry and an owner ahead of the date.' },
    { problem: 'Upgrades are needed and never quoted', detail: 'A site on an unsupported version needs work nobody has proposed.', outcome: 'Platform currency is tracked per site with upgrade quotes raised.' },
    { problem: 'Site knowledge lives with one developer', detail: 'Whoever built it is the only person who can safely change it.', outcome: 'Sites carry their stack, access, quirks and history independently of who built them.' },
  ],

  modulesLede: 'One system across sites, obligations, requests and clients.',
  modules: [
    { id: 'work', title: 'Sites, builds and launches', line: 'Each site carries its stack, hosting, launch date, current platform versions, retainer state and history.', why: 'The site, not the project, is the unit the agency remains responsible for.', example: 'Seventy-four sites under care across forty-one clients.' },
    { id: 'workflows', title: 'Requests, changes and incidents', line: 'Every request carries the site, requester, time taken, billing state and outcome.', why: 'Unbilled small requests are the agency’s largest quiet cost.', example: 'Ninety-two requests done and unbilled this month.' },
    { id: 'control', title: 'Dependencies, updates and platform currency', line: 'One permission model and one audit trail, with update status, security patches and supported version state held per site.', why: 'Exposure attaches to the agency whether or not the contract says so.', example: 'Twenty-three sites with overdue dependency updates.' },
    { id: 'inventory', title: 'Hosting, domains and certificates', line: 'Hosting accounts, domains and certificates carry ownership, cost, renewal date and the site they serve.', why: 'A renewal the agency manages and the client owns is the agency’s failure if it lapses.', example: 'Six renewals within thirty days.' },
    { id: 'relationships', title: 'Clients, retainers and coverage', line: 'Clients carry their sites, retainer scope and state, request volume and commercial position.', why: 'Support given without cover is a decision that should be made deliberately.', example: 'Twenty-nine sites without a retainer still receiving requests.' },
    { id: 'people', title: 'Developers, designers and account staff', line: 'Staff carry site knowledge, assignments, request handling and availability.', why: 'Single-person site knowledge is an operational risk across an estate.', example: 'Sites where only one developer has working knowledge.' },
    { id: 'orders', title: 'Projects, quotations and invoicing', line: 'Build projects, upgrade quotes, retainers and out-of-scope work carry a billing state.', why: 'Upgrades and out-of-scope work only get paid if they are proposed.', example: 'Upgrade quotes outstanding for unsupported sites.' },
    { id: 'intelligence', title: 'Estate, request and margin reporting', line: 'Site estate health, update currency, request volume and billing, renewal exposure and client profitability come from the records.', why: 'The estate is the business, and its health is measurable.', example: 'Unbilled hours by client and site.' },
    { id: 'ai', title: 'Ask the agency a question', line: 'Verity AI answers from your own site, request, renewal and client records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about unbilled work and technical exposure.', example: '"Which sites are overdue for updates?" returns twenty-three with their clients.' },
    { id: 'communication', title: 'Client contact and reporting', line: 'Request conversations, renewal notices and upgrade proposals attach to the site and client.', why: 'Most agency disputes are about what was agreed and when.', example: 'Renewal notice recorded against the domain and client.' },
    { id: 'records', title: 'Access, credentials and documentation', line: 'Site access requirements, environment documentation and quirks attach to the site.', why: 'Site knowledge must survive the developer who built it.', example: 'Environment documentation available for any assigned developer.' },
    { id: 'schedule', title: 'Maintenance windows and capacity', line: 'Update work and upgrades are planned against developer availability and client windows.', why: 'Maintenance across an estate has to be scheduled, not improvised.', example: 'Update work planned across sites by month.' },
  ],

  workflowsHeading: 'Build, launch, maintain, renew, upgrade.',
  workflowsLede: 'These already happen. Recorded, the estate stops being an unpriced obligation.',
  workflows: [
    { name: 'Handover to care', steps: ['Site launched and recorded with its stack and hosting', 'Access and documentation captured', 'Retainer scope agreed or absence recorded', 'Update and renewal responsibilities defined', 'Site added to the maintained estate'], note: 'Recording the absence of a retainer is as important as recording its presence.' },
    { name: 'Request handling', steps: ['Request received against a site', 'Retainer coverage checked', 'Time estimated and recorded', 'Work performed', 'Billing state applied and reported'], note: 'Checking coverage before doing the work is the only moment the conversation is easy.' },
    { name: 'Update and security cycle', steps: ['Update status reviewed across the estate', 'Overdue sites prioritised by exposure', 'Maintenance window agreed with the client', 'Updates applied and recorded', 'Currency position refreshed'], note: 'Prioritising by exposure rather than by client noise is what reduces real risk.' },
    { name: 'Renewal management', steps: ['Domains, certificates and hosting recorded with ownership and expiry', 'Renewals raised in advance with an owner', 'Client instruction obtained where they own the asset', 'Renewal completed and recorded', 'Cost recharged where applicable'], note: 'Client-owned assets still need the agency to raise the renewal.' },
    { name: 'Upgrade proposal', steps: ['Sites on unsupported versions identified', 'Work scoped and risk explained', 'Quotation issued', 'Client decision recorded', 'Upgrade scheduled or risk accepted in writing'], note: 'A recorded client decision to defer is what protects the agency later.' },
  ],

  ai: {
    heading: 'Ask about the estate.',
    lede: 'Verity AI reads the same site, request, renewal and client records the agency creates as it works. It answers from your own agency, respects permissions, and can turn an answer into a quote or a maintenance plan.',
    panelMeta: 'Grounded in your agency records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which sites are overdue for dependency updates?',
      'How much unbilled work did we do this month and for whom?',
      'Which sites receive support without a retainer?',
      'Which domains and certificates expire in the next month?',
      'Which sites are on unsupported platform versions?',
      'Which clients generate the most requests relative to their retainer?',
      'Which sites depend on a single developer’s knowledge?',
      'What is profitability by client across build and maintenance?',
      'Summarise estate health and unbilled work.',
    ],
  },

  automationHeading: 'Requests, updates and renewals.',
  automationLede: 'Each runs from the agency’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A request arrives for a site without retainer cover', steps: ['Coverage gap flagged before work starts', 'Quote or scope conversation raised', 'Decision recorded'] },
    { trigger: 'A site falls behind on updates', steps: ['Exposure assessed', 'Maintenance window proposed to the client', 'Update recorded on completion'] },
    { trigger: 'A domain or certificate approaches expiry', steps: ['Owner and client responsibility surfaced', 'Renewal assigned', 'Completion and recharge recorded'] },
    { trigger: 'A site reaches an unsupported platform version', steps: ['Upgrade scoped', 'Quotation raised', 'Client decision recorded including deferral'] },
    { trigger: 'Unbilled hours pass a threshold for a client', steps: ['Total surfaced with the requests behind it', 'Retainer or billing conversation raised', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the agency can see.',
  intelligenceLede: 'Estate health, request volume and margin from working records.',
  intelligence: [
    { area: 'Estate', points: ['Sites under care by client and stack', 'Update and security currency', 'Platform version support state', 'Renewal calendar and ownership'] },
    { area: 'Requests', points: ['Volume by site and client', 'Time consumed and billing state', 'Coverage against retainer scope', 'Response and resolution times'] },
    { area: 'Commercial', points: ['Unbilled hours by client', 'Retainer consumption', 'Upgrade quotes outstanding', 'Profitability across build and maintenance'] },
    { area: 'Risk', points: ['Overdue update exposure', 'Renewals at risk', 'Single-developer site knowledge', 'Clients supported without cover'] },
  ],
  intelligenceNote: 'Verity records the agency’s operations. Hosting panels and code repositories continue as they are.',

  rolesHeading: 'One agency, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'What are we giving away?', focus: 'Unbilled hours by client, sites without cover, profitability, upgrade opportunities.' },
    { role: 'Technical lead', question: 'Where is the exposure?', focus: 'Update currency, unsupported versions, renewals, single-person site knowledge.' },
    { role: 'Developer', question: 'What am I working on and how does this site work?', focus: 'Assigned requests, site stack and documentation, access, maintenance windows.' },
    { role: 'Account manager', question: 'What does the client need?', focus: 'Request volume against retainer, renewals, upgrade proposals, reporting.' },
  ],

  useCasesHeading: 'What web development agencies use Verity for',
  useCases: [
    { name: 'Seeing the unbilled work', body: 'Every small request recorded with time and billing state, so the monthly total the agency gives away becomes visible and negotiable.' },
    { name: 'Managing an estate of sites', body: 'Each launched site held with its stack, hosting, dependencies and retainer state, because responsibility outlives the project that created it.' },
    { name: 'Keeping updates current', body: 'Update and security status per site with overdue exposure prioritised, since risk attaches to the agency regardless of contract wording.' },
    { name: 'Never missing a renewal', body: 'Domains, certificates and hosting with ownership, expiry and an assigned owner, including assets the client owns and the agency manages.' },
    { name: 'Turning upgrades into quotes', body: 'Sites on unsupported versions identified with scoped work and a recorded client decision, including a decision to defer.' },
    { name: 'Making site knowledge portable', body: 'Stack, access, documentation and quirks held against the site rather than in the head of whoever built it.' },
    { name: 'Asking about the agency', body: 'Plain-language questions across sites, requests, renewals and clients, with quotes and maintenance plans raised in the same step.' },
  ],

  migration: 'Hosting panels and code repositories continue and are mapped during implementation. Sites with stacks and hosting details, clients and retainer scopes, request history, renewal calendars and documentation are brought across.',

  faqHeading: 'Questions web development agencies ask',
  faqs: [
    ['What can AI software do for a web development agency?', 'Verity AI answers questions from your own site, request, renewal and client records: which sites are overdue for updates, how much unbilled work was done and for whom, which sites receive support without a retainer, which domains expire next month. Each answer can become a quote or a maintenance plan.'],
    ['Why treat the site rather than the project as the unit?', 'Because the project ends and the responsibility does not. A site launched two years ago still needs updates, still has renewals, and still generates requests, and that population of sites is the agency’s real operational picture.'],
    ['How does it stop unbilled work?', 'Every request is recorded against a site with time taken and a billing state, and coverage is checked before the work is done. Individually the requests are too small to invoice; recorded together they become a retainer conversation.'],
    ['Does it handle security updates?', 'Update and dependency status is held per site with overdue exposure prioritised, so maintenance is scheduled across the estate rather than done when someone remembers or when something breaks.'],
    ['What about domains and certificates the client owns?', 'They are recorded with ownership, expiry and an assigned owner. A lapse on an asset the client owns but the agency manages lands on the agency, so the renewal has to be raised regardless of who pays.'],
    ['Can it help with platform upgrades?', 'Sites on unsupported versions are identified with the work scoped and a quotation raised, and the client’s decision — including a decision to defer — is recorded, which protects the agency later.'],
    ['Does it replace our hosting panels?', 'No. Hosting panels and repositories continue as they are. Verity holds the agency around them — sites, obligations, requests, renewals, clients and margin.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the site estate, retainer scopes, update practice and renewal responsibilities, configuration, migration of sites and clients, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the unbilled requests.',
  ctaLede: 'They cluster on the clients without retainers. Tell us how requests are recorded today.',

  related: ['software-agencies', 'app-developers', 'design-agencies', 'it-services-companies', 'marketing-agencies', 'saas-companies'],
};
