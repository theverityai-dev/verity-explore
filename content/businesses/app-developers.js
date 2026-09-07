export default {
  slug: 'app-developers',
  status: 'published',
  plural: 'app development companies',
  subject: 'app development company',

  seo: {
    title: 'AI business management software for app developers | Verity',
    description:
      'Verity gives app developers one system for release cycles and store review, post-release defects, platform deadlines and retainer scope.',
    keywords: [
      'AI software for app developers',
      'mobile app development company software',
      'release and store review tracking software',
      'post release defect and maintenance management',
    ],
  },

  hero: {
    eyebrow: 'Verity for app developers',
    headline: 'The build is done. The store has it for review, and the client thinks it is live.',
    lede:
      'App work is delivered through gates you do not control and judged after release. Verity tracks releases, review outcomes and post-release defects per client.',
    note: 'Verity runs the company. Source control, build systems and store consoles stay where they are.',
    panel: {
      title: 'Delivery',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Apps maintained', value: '31', note: '18 clients' },
        { label: 'Releases this month', value: '46', note: '7 rejected at review' },
        { label: 'Post-release defects', value: '84', note: '23 within 48 hours' },
        { label: 'Maintenance hours unbilled', value: '210', note: 'outside retainer scope' },
      ],
      rows: [
        { name: '7 releases rejected at store review', meta: 'Same two reasons recurring', active: true },
        { name: '23 defects reported within 48 hours of release', meta: 'Reaching users before testing did', active: true },
        { name: '210 maintenance hours outside retainer', meta: 'Delivered, not billed', active: true },
        { name: '4 apps on an unsupported platform version', meta: 'Store deadline approaching', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own delivery in this shape.',
    },
  },

  overview: {
    heading: 'You ship through someone else’s gate and are judged after it opens.',
    paragraphs: [
      'App development has a delivery step no other software work has: a store review that the developer does not control and cannot schedule. Seven rejections in a month, recurring for the same two reasons, is avoidable delay that lands on client deadlines and looks like the developer being late.',
      'The second characteristic is that quality is discovered publicly. Twenty-three defects reported within forty-eight hours of a release is a testing gap found by users, and unlike server-side software an app fix requires another release and another review.',
      'The third is platform obligation. Operating systems deprecate, stores impose minimum versions and deadlines, and four apps on an unsupported version is four client conversations that need to happen before the deadline rather than after it.',
      'The fourth is that maintenance quietly exceeds its scope. Two hundred and ten hours outside retainer scope is work delivered and not billed, and it is the largest single leak in most app companies.',
      'The fifth is that each app is a long relationship rather than a project. The same codebase is released dozens of times over years, and its defect history, platform position and maintenance load are the real account picture.',
      'Verity holds releases and review outcomes, post-release defects per app, platform deadlines and maintenance scope against retainers.',
    ],
  },

  terminology: [
    ['Apps, versions, releases', 'Work'],
    ['Store review, approvals, rejections', 'Workflows'],
    ['Clients, retainers, scope', 'Relationships'],
    ['Defects, crashes, support', 'Records'],
    ['Platform versions and deadlines', 'Control'],
    ['Developers, testers, leads', 'People'],
    ['Devices, environments, test coverage', 'Inventory'],
  ],

  challengesHeading: 'A gate you do not control and defects found by users.',
  challengesLede:
    'App development difficulties come from releasing through platforms and being judged after.',
  challenges: [
    { problem: 'Store rejections repeat for the same reasons', detail: 'A rejection reason recurs across releases and clients because nobody aggregates them.', outcome: 'Rejections carry reason and app, so recurring causes become a checklist.' },
    { problem: 'Defects are found by users after release', detail: 'Testing coverage misses device or version combinations that users have.', outcome: 'Post-release defects link to device, version and release, exposing coverage gaps.' },
    { problem: 'Platform deadlines arrive without warning', detail: 'Minimum version requirements and deprecations affect several client apps at once.', outcome: 'Platform obligations are held per app with deadlines and client conversations raised.' },
    { problem: 'Maintenance exceeds retainer scope unbilled', detail: 'Small requests are absorbed and the retainer becomes unlimited support.', outcome: 'Maintenance hours are attributed to scope with out-of-scope work flagged.' },
    { problem: 'Release readiness is a conversation', detail: 'Whether a build is ready to submit depends on who is asked.', outcome: 'Release criteria are recorded as states with evidence before submission.' },
    { problem: 'App history is spread across tools', detail: 'A client asks what changed and the answer is assembled from several systems.', outcome: 'Each app carries its release, defect and scope history in one record.' },
  ],

  modulesLede: 'One system across apps, releases, defects and clients.',
  modules: [
    { id: 'work', title: 'Apps, versions and releases', line: 'Each app carries its platforms, versions, release history, current store state and supported platform versions.', why: 'The app, not the project, is the long-lived unit of the business.', example: 'Thirty-one apps maintained across eighteen clients.' },
    { id: 'workflows', title: 'Store review and release', line: 'Releases carry submission, review state, approval or rejection with reason, and live date.', why: 'The review gate is outside the company’s control and inside its deadlines.', example: 'Seven rejections recurring for the same two reasons.' },
    { id: 'records', title: 'Defects, crashes and support', line: 'Defects carry app, version, device, platform version, severity, release proximity and resolution.', why: 'Post-release defects are the visible measure of testing coverage.', example: 'Twenty-three defects within forty-eight hours of release.' },
    { id: 'relationships', title: 'Clients, retainers and scope', line: 'Clients carry apps, retainer scope, hours consumed, out-of-scope work and commercial terms.', why: 'The retainer boundary is where app companies lose money quietly.', example: 'Two hundred and ten maintenance hours outside scope.' },
    { id: 'control', title: 'Platform obligations and deadlines', line: 'One permission model and one audit trail, with platform version requirements, deprecations and store deadlines held per app.', why: 'Platform deadlines affect many clients simultaneously and are non-negotiable.', example: 'Four apps on a version losing support.' },
    { id: 'inventory', title: 'Devices, environments and coverage', line: 'Test devices, platform versions and coverage are recorded against apps and releases.', why: 'Coverage gaps are where user-found defects come from.', example: 'Defects by device and platform version against tested coverage.' },
    { id: 'people', title: 'Developers, testers and leads', line: 'Staff carry app assignments, releases delivered, defect attribution and availability.', why: 'App knowledge concentrates in individuals and that concentration is a risk.', example: 'App coverage by developer and single-person dependencies.' },
    { id: 'intelligence', title: 'Release, defect and scope reporting', line: 'Release throughput, rejection causes, defect rates by release and device, scope consumption and app profitability come from the records.', why: 'Both quality and margin are measurable at the app level.', example: 'Defect rate per release by app.' },
    { id: 'ai', title: 'Ask delivery a question', line: 'Verity AI answers from your own app, release, defect and client records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about rejection patterns and scope leakage.', example: '"Why are releases being rejected?" returns the recurring reasons by app.' },
    { id: 'orders', title: 'Projects, retainers and billing', line: 'Project work, retainer consumption and out-of-scope hours carry a billing state.', why: 'Work delivered outside scope has to reach an invoice or a scope conversation.', example: 'Out-of-scope hours by client and month.' },
    { id: 'communication', title: 'Client updates and release notes', line: 'Release status, review outcomes and defect communication attach to the app and client.', why: 'A client waiting on a store review needs to know it is not the developer.', example: 'Review status communicated against the release.' },
    { id: 'schedule', title: 'Release planning and capacity', line: 'Releases are planned against developer availability, review lead times and client deadlines.', why: 'Review time has to be built into the plan rather than discovered.', example: 'Client deadlines planned with review lead time included.' },
  ],

  workflowsHeading: 'Build, test, submit, release, support.',
  workflowsLede: 'These already happen. Recorded, rejections and scope leakage both fall.',
  workflows: [
    { name: 'Release preparation', steps: ['Release criteria checked as recorded states', 'Test coverage confirmed against devices and versions', 'Known rejection causes checked', 'Build submitted with the release recorded', 'Client informed of submission'], note: 'Checking known rejection causes before submission is what stops the pattern repeating.' },
    { name: 'Store review', steps: ['Submission recorded with date', 'Review outcome captured', 'Rejection reason categorised', 'Resubmission tracked', 'Live date recorded'], note: 'Categorising rejection reasons turns individual annoyances into a checklist.' },
    { name: 'Post-release monitoring', steps: ['Defects captured with app, version and device', 'Proximity to release recorded', 'Severity assessed and fix decided', 'Hotfix release planned where needed', 'Coverage gap recorded for future testing'], note: 'Recording the coverage gap is what stops the same class of defect recurring.' },
    { name: 'Platform obligation', steps: ['Platform deadline identified per app', 'Client impact assessed', 'Work scoped and quoted', 'Client conversation held before the deadline', 'Release scheduled and completed'], note: 'Platform deadlines affect several clients at once and need planning as a group.' },
    { name: 'Retainer scope management', steps: ['Retainer scope defined per client', 'Maintenance hours attributed to scope', 'Out-of-scope work flagged as it is requested', 'Billing or scope conversation raised', 'Consumption reported to the client'], note: 'Flagging at request time is the only point where the conversation is easy.' },
  ],

  ai: {
    heading: 'Ask about releases and scope.',
    lede: 'Verity AI reads the same app, release, defect and client records the company creates as it delivers. It answers from your own delivery, respects permissions, and can turn an answer into a checklist item or a scope conversation.',
    panelMeta: 'Grounded in your delivery records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Why are releases being rejected and how often?',
      'Which defects appeared within days of a release?',
      'Which devices and platform versions produce the most defects?',
      'How many maintenance hours were outside retainer scope?',
      'Which apps face a platform deadline this quarter?',
      'What is defect rate per release by app?',
      'Which apps depend on a single developer?',
      'Which clients consume the most support relative to their retainer?',
      'Summarise release and scope position by client.',
    ],
  },

  automationHeading: 'Rejections, defects and scope.',
  automationLede: 'Each runs from the company’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A release is rejected at review', steps: ['Reason categorised against the app', 'Recurring causes surfaced', 'Pre-submission checklist updated'] },
    { trigger: 'Defects appear soon after a release', steps: ['Linked to the release, device and version', 'Coverage gap recorded', 'Hotfix decision raised'] },
    { trigger: 'Maintenance work falls outside retainer scope', steps: ['Flagged at request with hours estimated', 'Billing or scope conversation raised', 'Consumption position updated'] },
    { trigger: 'A platform deadline approaches', steps: ['Affected apps and clients listed', 'Work scoped and quoted', 'Client conversation assigned'] },
    { trigger: 'An app has only one developer with knowledge', steps: ['Concentration flagged', 'Handover or pairing assigned', 'Coverage updated'] },
  ],

  intelligenceHeading: 'What the company can see.',
  intelligenceLede: 'Releases, quality and scope from delivery records.',
  intelligence: [
    { area: 'Release', points: ['Releases per app and month', 'Review rejection causes and rates', 'Time from submission to live', 'Deadline adherence including review time'] },
    { area: 'Quality', points: ['Defect rate per release', 'Defects by device and platform version', 'Time to resolution by severity', 'Coverage gaps identified'] },
    { area: 'Commercial', points: ['Retainer consumption by client', 'Out-of-scope hours delivered and billed', 'App profitability over time', 'Project against maintenance mix'] },
    { area: 'Risk', points: ['Platform deadlines by app', 'Apps on unsupported versions', 'Single-developer dependencies', 'Client concentration'] },
  ],
  intelligenceNote: 'Verity records the delivery operation. Source control, build systems and store consoles continue as they are.',

  rolesHeading: 'One company, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'Which accounts are profitable?', focus: 'Retainer consumption, out-of-scope hours, app profitability, client concentration.' },
    { role: 'Delivery lead', question: 'What is shipping and what is stuck?', focus: 'Releases in review, rejection causes, deadlines including review time, developer availability.' },
    { role: 'Developer', question: 'What am I building and fixing?', focus: 'Assigned work, defect queue by severity, platform requirements, release criteria.' },
    { role: 'Account manager', question: 'What does the client need to know?', focus: 'Release status, review outcomes, scope consumption, platform deadlines ahead.' },
  ],

  useCasesHeading: 'What app development companies use Verity for',
  useCases: [
    { name: 'Ending repeat store rejections', body: 'Rejection reasons categorised across apps and clients, turning recurring causes into a pre-submission checklist.' },
    { name: 'Closing test coverage gaps', body: 'Post-release defects linked to device and platform version, showing exactly which combinations testing missed.' },
    { name: 'Planning around review time', body: 'Store review lead time built into release plans, so client deadlines account for a gate the company does not control.' },
    { name: 'Protecting retainer margin', body: 'Maintenance hours attributed to scope with out-of-scope work flagged at request, which is the only moment the conversation is easy.' },
    { name: 'Managing platform deadlines', body: 'Version requirements and deprecations held per app, so the client conversation happens before the deadline rather than after it.' },
    { name: 'Reducing single-person dependency', body: 'App knowledge coverage held per developer, so concentration is visible as a risk rather than discovered during leave.' },
    { name: 'Asking about delivery', body: 'Plain-language questions across releases, defects, scope and deadlines, with checklist and scope actions raised in the same step.' },
  ],

  migration: 'Source control, build systems and store consoles continue and are mapped during implementation. Apps with release and defect history, clients with retainer scope, platform version positions and team records are brought across.',

  faqHeading: 'Questions app development companies ask',
  faqs: [
    ['What can AI software do for an app development company?', 'Verity AI answers questions from your own app, release, defect and client records: why releases are being rejected and how often, which defects appeared within days of a release, how many maintenance hours were outside retainer scope, which apps face a platform deadline. Each answer can become a checklist item or a scope conversation.'],
    ['Why track store review separately?', 'Because it is a delivery gate the company does not control and cannot schedule. Recording submissions, outcomes and rejection reasons makes review time plannable and stops the same rejection cause recurring across clients.'],
    ['How does it improve testing?', 'Post-release defects are linked to the release, device and platform version they appeared on, which identifies the specific coverage combinations that testing missed rather than a general quality concern.'],
    ['Does it replace our build pipeline?', 'No. Source control, continuous integration and store consoles continue as they are. Verity holds the delivery operation around them — apps, releases, defects, clients, scope and deadlines.'],
    ['How does it protect retainer profitability?', 'Maintenance hours are attributed to the retainer scope and out-of-scope work is flagged when it is requested, so the commercial conversation happens before the hours have been delivered.'],
    ['Can it handle platform deprecations?', 'Version requirements and store deadlines are held per app, so when a platform change affects several client apps at once the work can be scoped and the conversations planned as a group.'],
    ['Does it track team concentration?', 'App assignments and knowledge coverage are held per developer, so an app that depends on one person is visible as a risk rather than discovered when that person is unavailable.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of apps, release process, defect categories and retainer scopes, configuration, migration of apps, clients and history, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the rejections.',
  ctaLede: 'They usually repeat for two reasons. Tell us how releases are tracked today.',

  related: ['software-agencies', 'web-development-agencies', 'saas-companies', 'gaming-studios', 'it-services-companies', 'startups'],
};
