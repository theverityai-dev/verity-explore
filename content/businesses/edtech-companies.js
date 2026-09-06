export default {
  slug: 'edtech-companies',
  status: 'published',
  plural: 'EdTech companies',
  subject: 'EdTech business',

  seo: {
    title: 'AI business management software for EdTech companies | Verity',
    description:
      'Verity connects content production cost, learner completion, cohort economics, support load and institutional contracts into one operational system.',
    keywords: [
      'AI software for edtech companies',
      'edtech operations management software',
      'content production and learner completion tracking',
      'cohort economics and institutional contract software',
    ],
  },

  hero: {
    eyebrow: 'Verity for EdTech',
    headline: 'Enrolment is the number you report. Completion is the number that renews.',
    lede:
      'EdTech spends heavily to produce content and is judged on whether learners finish it. Verity records the production cost and the completion it produced.',
    note: 'Verity runs the company. Your learning platform stays where it is.',
    panel: {
      title: 'Company',
      meta: 'This quarter',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active learners', value: '18,400', note: 'across 42 courses' },
        { label: 'Completion rate', value: '31%', note: 'range 8% to 74% by course' },
        { label: 'Content in production', value: '14 courses', note: '5 past their release date' },
        { label: 'Institutional contracts', value: '22', note: '6 up for renewal' },
      ],
      rows: [
        { name: '5 courses past their production release date', meta: 'Marketing and enrolment commitments already made', active: true },
        { name: 'Completion at 8% on three courses', meta: 'Against 74% on the best · same platform', active: true },
        { name: 'Support load concentrated on four courses', meta: 'Content likely the cause', active: true },
        { name: '6 institutional contracts up for renewal', meta: 'Completion evidence needed', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own company in this shape.',
    },
  },

  overview: {
    heading: 'Content is the cost and completion is the product.',
    paragraphs: [
      'An EdTech business spends heavily up front to produce a course and then earns from learners who enrol in it. Enrolment is the number that gets reported and completion is the number that determines renewal, referral and institutional confidence — and the gap between them is enormous. A completion rate spanning eight to seventy-four percent across courses on the same platform is a content problem, not a platform one.',
      'That makes course-level economics the central question: what a course cost to produce, how many learners it attracted, how many finished, and what support burden it generated. Most EdTech companies measure the first two.',
      'The second characteristic is content production, which behaves like any other project business — briefs, subject experts, production, review and release dates that slip against marketing commitments already made.',
      'The third is support load, which concentrates on specific courses and is almost always a symptom of the content rather than of the learners.',
      'The fourth is institutional contracts, where the buyer is an organisation with completion expectations and renewal dates, and evidence is required.',
      'Verity records production cost and progress, completion by course and cohort, support load by course and institutional delivery.',
    ],
  },

  terminology: [
    ['Courses, modules, cohorts', 'Records'],
    ['Learners, cohorts, institutions', 'Relationships'],
    ['Content production, review, release', 'Work'],
    ['Support tickets, escalations', 'Workflows'],
    ['Subject experts, producers, reviewers', 'People'],
    ['Contracts, licences, renewals', 'Control'],
    ['Enrolment, progress, completion', 'Intelligence'],
  ],

  challengesHeading: 'Enrolment is easy to count and completion is what matters.',
  challengesLede:
    'EdTech difficulties come from production cost committed ahead of demand and completion nobody attributes.',
  challenges: [
    { problem: 'Completion varies enormously and is not attributed', detail: 'One course completes at eight percent and another at seventy-four on the same platform, and the difference is treated as learner behaviour.', outcome: 'Completion is measured per course and cohort against production cost and content structure.' },
    { problem: 'Production slips against marketing commitments', detail: 'A course release date is committed publicly and the production runs late.', outcome: 'Production is work with stages, owners and a release date, so slippage is visible before the commitment is broken.' },
    { problem: 'Support load reveals content problems', detail: 'Tickets concentrate on specific courses and are handled as support rather than as content feedback.', outcome: 'Support is recorded against the course and module, so concentration becomes a content decision.' },
    { problem: 'Course economics are never assembled', detail: 'Production cost, enrolment, completion and support burden exist in four places.', outcome: 'All four attach to the course, so contribution per course is calculable.' },
    { problem: 'Institutional renewals need evidence', detail: 'An organisation renews on completion and outcome evidence that is assembled by hand each time.', outcome: 'Cohort completion and progress are records, so renewal evidence is an extract.' },
    { problem: 'Content ages without review', detail: 'Courses remain live long after their material has dated, and nobody owns the review.', outcome: 'Courses carry review dates and performance, so refresh decisions are prompted.' },
  ],

  modulesLede: 'One system across production, completion, support and contracts.',
  modules: [
    { id: 'records', title: 'Courses, modules and versions', line: 'Each course carries its modules, production cost, release date, version, review date and performance.', why: 'The course is the unit of investment and of completion.', example: 'Completion from eight to seventy-four percent across courses on the same platform.' },
    { id: 'work', title: 'Content production and release', line: 'Production is work with stages, subject experts, producers, reviewers, cost and a release date.', why: 'Content production is a project business inside the company.', example: 'Five courses past their release date with enrolment commitments made.' },
    { id: 'relationships', title: 'Learners, cohorts and institutions', line: 'Learners and institutional accounts carry enrolment, progress, completion, support history and contract terms.', why: 'Institutional buyers renew on completion evidence rather than on enrolment.', example: 'Cohort completion evidence assembled for a renewal.' },
    { id: 'workflows', title: 'Support, escalation and content feedback', line: 'Support tickets carry the course and module, and concentration raises content review.', why: 'Support load is content feedback arriving through the wrong channel.', example: 'Support concentrated on four courses, raised as content review.' },
    { id: 'people', title: 'Subject experts, producers and reviewers', line: 'Contributors are modelled once with effort recorded against production.', why: 'Production cost is mostly people, including external subject experts.', example: 'Production cost per course including external contributor effort.' },
    { id: 'control', title: 'Contracts, licences and renewals', line: 'One permission model and one audit trail, with institutional contracts, licence terms and renewals recorded.', why: 'Institutional terms differ and renewals need evidence.', example: 'Six contracts up for renewal with completion evidence attached.' },
    { id: 'intelligence', title: 'Completion, cost and support reporting', line: 'Completion by course and cohort, production cost against enrolment and completion, support load by course, and contract renewal evidence come from the records.', why: 'Course contribution requires all four together and is usually assembled from none of them.', example: 'Contribution per course after production and support cost.' },
    { id: 'ai', title: 'Ask the company a question', line: 'Verity AI answers from your own course, production, learner and support records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions cross content, learners and support.', example: '"Which courses have the worst completion and the highest support load?" returns the overlap.' },
    { id: 'communication', title: 'Institutional reporting and feedback', line: 'Reporting, feedback and escalations attach to the institution or course they concern.', why: 'Institutional relationships run on periodic evidence.', example: 'Cohort progress reporting issued and recorded against the contract.' },
    { id: 'orders', title: 'Enrolments, licences and invoicing', line: 'Enrolments, licence allocations and invoices are recorded against learners and institutions.', why: 'Institutional licensing and individual enrolment behave differently.', example: 'Licences allocated against a contract with utilisation tracked.' },
    { id: 'locations', title: 'Teams and content units', line: 'Production teams and content units roll into the company with reporting following the same structure.', why: 'Production quality and completion vary by team.', example: 'Completion by producing team and subject area.' },
    { id: 'suppliers', title: 'External experts and production partners', line: 'External contributors carry engagements, cost, delivery reliability and rights granted.', why: 'Much EdTech content is produced with external subject experts under licence.', example: 'Content rights and their scope recorded against the course.' },
  ],

  workflowsHeading: 'Produce, release, complete, renew.',
  workflowsLede: 'These already happen. Recorded against the course, contribution becomes calculable.',
  workflows: [
    { name: 'Content production', steps: ['Course scoped with modules and learning outcomes', 'Subject experts and producers assigned with effort estimated', 'Production stages tracked with a release date', 'Review completed and content approved', 'Release recorded with total production cost'], note: 'Recording production cost against the course is what makes contribution calculable later.' },
    { name: 'Cohort delivery', steps: ['Cohort enrolled with start date', 'Progress recorded through modules', 'Drop points identified within the course', 'Intervention assigned where cohorts stall', 'Completion recorded against the cohort'], note: 'Drop points within a course are content feedback of the most direct kind.' },
    { name: 'Support as content feedback', steps: ['Tickets recorded against course and module', 'Concentration identified by module', 'Content review raised where support clusters', 'Content revised and version recorded', 'Support volume compared after the revision'], note: 'A module generating support is usually a module that needs rewriting.' },
    { name: 'Institutional contract', steps: ['Contract recorded with cohort, licences and expectations', 'Delivery and progress tracked against it', 'Periodic reporting issued from records', 'Renewal raised ahead of the date with evidence', 'Outcome recorded'], note: 'Renewal evidence should be an extract rather than a construction.' },
    { name: 'Content refresh', steps: ['Course review dates and performance monitored', 'Courses with declining completion identified', 'Refresh scoped with cost and effort', 'Production scheduled and released', 'Performance compared after refresh'], note: 'Courses age and nobody owns the review unless it has a date.' },
  ],

  ai: {
    heading: 'Ask what completion is costing.',
    lede: 'Verity AI reads the same course, production, learner and support records the company creates as it operates. It answers from your own catalogue, respects permissions, and can turn an answer into content reviews.',
    panelMeta: 'Grounded in your company records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which courses have the worst completion and the highest support load?',
      'Which courses are past their production release date?',
      'What is contribution per course after production and support cost?',
      'Where within courses do learners drop out?',
      'Which institutional contracts need completion evidence for renewal?',
      'Which courses are past their content review date?',
      'What did external contributor effort cost by course?',
      'How does completion compare by producing team?',
      'Summarise completion and production position.',
    ],
  },

  automationHeading: 'Release dates and completion signals.',
  automationLede: 'Each runs from the company’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A production stage passes its date', steps: ['Release date risk flagged', 'Marketing and enrolment commitments identified', 'Escalation or date revision raised'] },
    { trigger: 'Support concentrates on a module', steps: ['Concentration flagged with ticket reasons', 'Content review assigned', 'Support volume compared after revision'] },
    { trigger: 'A cohort stalls at a module', steps: ['Drop point identified with cohort size', 'Content or intervention review raised', 'Completion tracked afterwards'] },
    { trigger: 'An institutional contract approaches renewal', steps: ['Completion and progress evidence assembled', 'Renewal conversation assigned', 'Outcome recorded'] },
    { trigger: 'A course passes its review date', steps: ['Performance and completion attached', 'Refresh decision assigned', 'Outcome recorded against the course'] },
  ],

  intelligenceHeading: 'What the leadership can see.',
  intelligenceLede: 'Course-level economics rather than platform-level totals.',
  intelligence: [
    { area: 'Completion', points: ['Completion by course, cohort and institution', 'Drop points within courses', 'Completion against production investment', 'Trend after content revision'] },
    { area: 'Production', points: ['Cost per course including external contributors', 'Stage progress against release dates', 'Slippage and its causes', 'Review dates and refresh decisions'] },
    { area: 'Support', points: ['Load by course and module', 'Reasons and their concentration', 'Effect of content revision on volume', 'Cost to serve by course'] },
    { area: 'Commercial', points: ['Contribution per course after production and support', 'Institutional contracts and licence utilisation', 'Renewal outcomes against completion evidence', 'Enrolment against completion by channel'] },
  ],
  intelligenceNote: 'Verity records the company around the product. Your learning platform and content delivery continue as they are.',

  rolesHeading: 'One catalogue, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'Which courses actually work?', focus: 'Contribution per course after production and support, completion by course, institutional renewals.' },
    { role: 'Content lead', question: 'What needs producing or fixing?', focus: 'Production stages against release dates, support concentration by module, courses past review date.' },
    { role: 'Learning or success lead', question: 'Where are cohorts stalling?', focus: 'Drop points within courses, cohort completion, intervention outcomes, institutional progress.' },
    { role: 'Support lead', question: 'Where is the load coming from?', focus: 'Tickets by course and module, reasons, effect of revisions, cost to serve.' },
  ],

  useCasesHeading: 'What EdTech companies use Verity for',
  useCases: [
    { name: 'Course-level contribution', body: 'Production cost, enrolment, completion and support load assembled per course, which is the only honest measure of whether a course works.' },
    { name: 'Production against release dates', body: 'Content production as staged work, so slippage is visible before a public commitment is broken.' },
    { name: 'Support as content feedback', body: 'Tickets recorded against course and module, so concentration becomes a content decision rather than a support burden.' },
    { name: 'Drop point analysis', body: 'Progress recorded through modules, so where learners stop is a specific module rather than a general completion rate.' },
    { name: 'Institutional renewal evidence', body: 'Cohort completion and progress as records, so renewal evidence is an extract rather than a construction.' },
    { name: 'Content refresh discipline', body: 'Review dates and performance on the course, so ageing content is refreshed rather than left live.' },
    { name: 'Asking across content and learners', body: 'Plain-language questions spanning production, completion and support, with reviews raised in the same step.' },
  ],

  migration: 'Your learning platform and content delivery continue and are mapped during implementation. Courses with production cost, cohorts and completion history, institutional contracts and support history are brought across.',

  faqHeading: 'Questions EdTech teams ask',
  faqs: [
    ['Does Verity replace our learning platform?', 'No. The platform, content delivery and learner experience continue and are mapped during implementation. Verity records the company around them — production cost, course economics, completion, support load and institutional contracts.'],
    ['What can AI software do for an EdTech company?', 'Verity AI answers questions from your own course, production, learner and support records: which courses have the worst completion and the highest support load, which are past their release date, what contribution looks like per course, where learners drop out. Each answer can become a content review.'],
    ['Why focus on completion rather than enrolment?', 'Because enrolment is the number that gets reported and completion is the number that renews, refers and satisfies institutional buyers. A completion range from eight to seventy-four percent across courses on one platform is a content signal, not a learner one.'],
    ['How does it handle content production?', 'Production is work with stages, subject experts, producers, cost and a release date, so slippage is visible before a marketing commitment is broken and cost is recorded against the course it produced.'],
    ['Why treat support as content feedback?', 'Because it concentrates on specific modules. A module generating disproportionate support is usually a module that needs rewriting, and treating the tickets as a support burden fixes nothing.'],
    ['Can it help with institutional renewals?', 'Cohort completion and progress are records, so the evidence an institutional buyer wants at renewal is an extract rather than something assembled by hand each time.'],
    ['Does it track content ageing?', 'Courses carry review dates and performance, so declining completion on ageing content prompts a refresh decision rather than remaining live indefinitely.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of course structures, production process and contract terms, configuration, migration of courses, cohorts and contracts, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with contribution per course.',
  ctaLede: 'It usually reorders which courses look successful. Tell us how production cost is tracked today.',

  related: ['saas-companies', 'skill-training-institutes', 'universities', 'content-agencies', 'coaching-institutes', 'language-institutes'],
};
