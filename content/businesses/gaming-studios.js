export default {
  slug: 'gaming-studios',
  status: 'published',
  plural: 'gaming studios',
  subject: 'gaming studio',

  seo: {
    title: 'AI business management software for gaming studios | Verity',
    description:
      'Verity gives gaming studios one system for the content pipeline against milestones, platform certification, outsourcing and live operations.',
    keywords: [
      'AI software for gaming studios',
      'game studio production management software',
      'content pipeline and milestone tracking',
      'platform certification and live operations management',
    ],
  },

  hero: {
    eyebrow: 'Verity for gaming studios',
    headline: 'The date is fixed. The art pipeline is not, and certification is after both.',
    lede:
      'A studio delivers a content pipeline into an immovable date, then operates the game for years. Verity holds production, certification and live operations in one place.',
    note: 'Verity runs the studio. Engines, asset tools and build systems stay where they are.',
    panel: {
      title: 'Studio',
      meta: 'Current milestone',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Assets in pipeline', value: '3,180', note: '41% past first review' },
        { label: 'Milestone at risk', value: '2 of 5', note: 'content not final' },
        { label: 'Certification issues open', value: '14', note: 'submission in 18 days' },
        { label: 'External contributor hours', value: '1,240', note: 'across 9 vendors' },
      ],
      rows: [
        { name: '14 certification issues open with 18 days to submission', meta: 'Each requires a build', active: true },
        { name: '2 milestones at risk on content, not code', meta: 'Art review backlog', active: true },
        { name: '9 outsourcing vendors with unreconciled deliveries', meta: 'Paid against unverified assets', active: true },
        { name: 'Live event calendar has a gap in week 6', meta: 'Player engagement decay expected', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own studio in this shape.',
    },
  },

  overview: {
    heading: 'Content production against a fixed date, then years of live operation.',
    paragraphs: [
      'A game studio has two businesses stacked on each other. The first is content production against a date that usually cannot move: thousands of assets moving through creation, review, integration and polish, and two milestones at risk on content rather than code is the normal shape of that risk.',
      'The second is certification. Platforms review submissions and reject them, and fourteen open certification issues eighteen days before submission is a queue where each item needs a fix, a build and a retest — a schedule inside a schedule.',
      'The third is external contribution. Much art and audio comes from outsourcing vendors, and nine vendors with unreconciled deliveries is payment made against assets nobody verified against the brief.',
      'The fourth is that launch is the beginning of the larger business. Live operations run for years on an event calendar, and a gap in that calendar is engagement decay that shows up in revenue two months later.',
      'The fifth is player support, which is both a cost and the studio’s earliest signal about what is wrong with a build.',
      'Verity holds the asset pipeline against milestones, tracks certification issues to submission, reconciles vendor deliveries, and runs the live calendar with support signals attached.',
    ],
  },

  terminology: [
    ['Projects, milestones, builds', 'Work'],
    ['Assets, reviews, integration', 'Workflows'],
    ['Certification, submissions, platform requirements', 'Control'],
    ['Outsourcing vendors and deliveries', 'Suppliers'],
    ['Live events, seasons, content drops', 'Schedule'],
    ['Players, support, feedback', 'Relationships'],
    ['Artists, engineers, producers', 'People'],
  ],

  challengesHeading: 'A pipeline of thousands of assets into a date that will not move.',
  challengesLede:
    'Studio difficulties come from content volume, platform gates and a long live tail.',
  challenges: [
    { problem: 'Milestone risk is in content, not code', detail: 'Asset review and integration backlogs are less visible than engineering tasks.', outcome: 'Assets carry stage, reviewer and age, so pipeline backlogs are as visible as code.' },
    { problem: 'Certification issues arrive as a queue', detail: 'Each issue needs a fix, a build and a retest inside a submission window.', outcome: 'Certification issues carry owner, build and retest state against the submission date.' },
    { problem: 'Vendor deliveries are paid unverified', detail: 'Outsourced assets are invoiced before they are checked against the brief.', outcome: 'Deliveries are reconciled against briefs with acceptance recorded before payment.' },
    { problem: 'The live calendar develops gaps', detail: 'Post-launch content planning slips and engagement falls before anyone notices.', outcome: 'The live calendar is planned ahead with production capacity attached.' },
    { problem: 'Support signals do not reach production', detail: 'Player reports contain the earliest evidence of a problem and stay in support.', outcome: 'Support themes aggregate and link to builds and features.' },
    { problem: 'Review capacity is the hidden constraint', detail: 'Approval bottlenecks on a few senior people stall thousands of assets.', outcome: 'Review load per person is visible against pipeline throughput.' },
  ],

  modulesLede: 'One system across pipeline, certification, vendors and live operations.',
  modules: [
    { id: 'workflows', title: 'Assets, reviews and integration', line: 'Each asset carries its type, owner, stage, review state, reviewer, age and the milestone it belongs to.', why: 'Content volume, not code, is where most milestone risk sits.', example: 'Forty-one per cent of assets past first review.' },
    { id: 'work', title: 'Projects, milestones and builds', line: 'Milestones carry their content requirements, code work, build state and risk position.', why: 'A milestone is content and code together, and both must be visible against it.', example: 'Two milestones at risk on content.' },
    { id: 'control', title: 'Certification and platform requirements', line: 'One permission model and one audit trail, with platform requirements, certification issues, builds and submission dates tracked.', why: 'Certification is a gate outside the studio with a schedule inside the studio.', example: 'Fourteen open issues eighteen days from submission.' },
    { id: 'suppliers', title: 'Outsourcing vendors and deliveries', line: 'Vendors carry briefs, deliveries, acceptance state, revision rounds, hours and payment.', why: 'Paying for unverified deliveries is how outsourcing budgets overrun.', example: 'Nine vendors with unreconciled deliveries.' },
    { id: 'schedule', title: 'Live events, seasons and content drops', line: 'The live calendar carries planned events, the content each needs and the production capacity behind it.', why: 'A calendar gap is engagement decay with a two-month delay.', example: 'A gap in the live calendar at week six.' },
    { id: 'relationships', title: 'Players, support and feedback', line: 'Support contacts aggregate into themes linked to builds, features and platforms.', why: 'Players find problems before internal testing does.', example: 'Support themes linked to the build that introduced them.' },
    { id: 'people', title: 'Artists, engineers and producers', line: 'Staff carry assignments, review load, throughput and availability.', why: 'Review capacity concentrated in a few people is the pipeline’s real constraint.', example: 'Review load per approver against asset throughput.' },
    { id: 'intelligence', title: 'Pipeline, certification and live reporting', line: 'Pipeline throughput and backlog, milestone risk, certification issue burndown, vendor performance and live engagement come from the records.', why: 'Production risk and live health are both measurable.', example: 'Asset throughput against the milestone requirement.' },
    { id: 'ai', title: 'Ask the studio a question', line: 'Verity AI answers from your own asset, milestone, certification and vendor records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about what is blocking the date.', example: '"What is blocking this milestone?" returns the asset and certification backlog.' },
    { id: 'records', title: 'Briefs, specifications and approvals', line: 'Briefs, style guides and acceptance criteria attach to assets and vendor deliveries.', why: 'Acceptance against a brief is what makes a revision round chargeable to the vendor.', example: 'Delivery assessed against the brief it was commissioned from.' },
    { id: 'orders', title: 'Budgets, vendor spend and milestones', line: 'Budgets, vendor commitments and milestone payments carry their current position.', why: 'Outsourcing spend is committed ahead of delivery and needs tracking.', example: 'Vendor commitment against accepted deliveries.' },
    { id: 'communication', title: 'Vendor and platform correspondence', line: 'Vendor briefs, revision requests and platform correspondence attach to the work they concern.', why: 'A revision request is the record that supports a rejection.', example: 'Revision request recorded against the delivery.' },
  ],

  workflowsHeading: 'Brief, produce, review, certify, operate.',
  workflowsLede: 'These already happen. Recorded, content risk becomes as visible as code risk.',
  workflows: [
    { name: 'Asset pipeline', steps: ['Asset requirement created against a milestone', 'Assigned internally or to a vendor with a brief', 'Produced and submitted for review', 'Reviewed with revisions recorded', 'Integrated and marked complete'], note: 'Recording review age is what exposes the approval bottleneck.' },
    { name: 'Vendor delivery', steps: ['Brief issued with acceptance criteria', 'Delivery received and logged', 'Assessed against the brief', 'Accepted or revision requested', 'Payment released against accepted work'], note: 'Acceptance before payment is the whole control in outsourcing.' },
    { name: 'Certification', steps: ['Platform requirements mapped', 'Submission prepared and sent', 'Issues received and assigned', 'Fixes built and retested', 'Resubmission tracked to approval'], note: 'Each issue needs a build, so the queue is a schedule.' },
    { name: 'Live operations', steps: ['Event calendar planned ahead', 'Content requirements derived per event', 'Production capacity assigned', 'Event delivered and engagement recorded', 'Calendar adjusted from results'], note: 'Planning ahead of capacity is what prevents calendar gaps.' },
    { name: 'Support to production', steps: ['Player contacts categorised', 'Themes aggregated by build, feature and platform', 'Issues raised to production with evidence', 'Fix scheduled and shipped', 'Theme volume monitored after the fix'], note: 'Support volume after a fix is the honest measure of whether it worked.' },
  ],

  ai: {
    heading: 'Ask about the pipeline and the date.',
    lede: 'Verity AI reads the same asset, milestone, certification and vendor records the studio creates as it produces. It answers from your own studio, respects permissions, and can turn an answer into a reassignment or a calendar change.',
    panelMeta: 'Grounded in your studio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What is blocking this milestone?',
      'Which assets have been waiting longest for review?',
      'Which certification issues are open and who owns them?',
      'Which vendor deliveries are unreconciled against their briefs?',
      'Where are the gaps in the live event calendar?',
      'Which support themes appeared after the last build?',
      'Who is the review bottleneck by asset type?',
      'What vendor spend is committed against accepted work?',
      'Summarise milestone risk and certification position.',
    ],
  },

  automationHeading: 'Reviews, certification and calendar.',
  automationLede: 'Each runs from the studio’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An asset waits in review beyond a threshold', steps: ['Flagged with reviewer and milestone', 'Reassignment or escalation raised', 'Review completion recorded'] },
    { trigger: 'A certification issue is received', steps: ['Owner assigned with build requirement', 'Retest tracked against the submission date', 'Resubmission recorded'] },
    { trigger: 'A vendor delivery is received', steps: ['Assessment against the brief assigned', 'Acceptance or revision recorded', 'Payment released only on acceptance'] },
    { trigger: 'The live calendar has an unfilled window', steps: ['Gap flagged with lead time', 'Content requirement and capacity surfaced', 'Plan recorded'] },
    { trigger: 'Support volume rises after a build', steps: ['Theme aggregated with the build', 'Production issue raised', 'Volume monitored after the fix'] },
  ],

  intelligenceHeading: 'What the studio can see.',
  intelligenceLede: 'Pipeline, certification and live health from production records.',
  intelligence: [
    { area: 'Pipeline', points: ['Asset throughput by stage and type', 'Review backlog and age', 'Milestone content completion', 'Review load per approver'] },
    { area: 'Certification', points: ['Issues open and burndown', 'Builds required per issue', 'Submission and resubmission history', 'Platform requirement coverage'] },
    { area: 'Vendors', points: ['Deliveries accepted and revised', 'Revision rounds by vendor', 'Committed spend against accepted work', 'Vendor throughput and quality'] },
    { area: 'Live', points: ['Event calendar coverage and gaps', 'Engagement after each event', 'Support themes by build and platform', 'Content lead times'] },
  ],
  intelligenceNote: 'Verity records the studio’s operations. Engines, asset tools and build systems continue as they are.',

  rolesHeading: 'One studio, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Studio head', question: 'Will we make the date?', focus: 'Milestone risk, pipeline throughput, certification burndown, vendor spend.' },
    { role: 'Producer', question: 'What is blocked?', focus: 'Asset stages and review age, assignments, vendor deliveries, capacity.' },
    { role: 'Art lead', question: 'What needs my review?', focus: 'Review queue by age, brief compliance, revision rounds, throughput.' },
    { role: 'Live operations lead', question: 'What ships next?', focus: 'Event calendar, content requirements, production capacity, engagement and support signals.' },
  ],

  useCasesHeading: 'What gaming studios use Verity for',
  useCases: [
    { name: 'Making content risk visible', body: 'Assets carrying stage, reviewer and age against milestones, so a content backlog is as visible as an engineering one.' },
    { name: 'Running certification as a schedule', body: 'Platform issues with owners, builds and retests tracked against the submission date, because each issue is a small project inside a fixed window.' },
    { name: 'Controlling outsourcing', body: 'Vendor deliveries assessed against their briefs with acceptance recorded before payment, and revision rounds counted.' },
    { name: 'Keeping the live calendar full', body: 'Events planned ahead with content requirements and production capacity attached, so a gap is prevented rather than observed in the engagement data.' },
    { name: 'Connecting support to production', body: 'Player contact themes aggregated and linked to builds and features, with volume after a fix as the measure of whether it worked.' },
    { name: 'Finding the review bottleneck', body: 'Review load per approver against pipeline throughput, which is usually where thousands of assets are actually waiting.' },
    { name: 'Asking about the studio', body: 'Plain-language questions across pipeline, certification, vendors and live operations, with reassignments raised in the same step.' },
  ],

  migration: 'Engines, asset tools and build systems continue and are mapped during implementation. Projects and milestones, asset registers with stages, vendor contracts and delivery history, certification records and live calendars are brought across.',

  faqHeading: 'Questions gaming studios ask',
  faqs: [
    ['What can AI software do for a gaming studio?', 'Verity AI answers questions from your own asset, milestone, certification and vendor records: what is blocking a milestone, which assets have waited longest for review, which certification issues are open and who owns them, where the live calendar has gaps. Each answer can become a reassignment or a calendar change.'],
    ['Why focus on the content pipeline?', 'Because most milestone risk in a game is content rather than code. Thousands of assets moving through creation, review and integration create backlogs that are less visible than engineering tasks and just as capable of missing a fixed date.'],
    ['How does it help with certification?', 'Platform issues are tracked with owners, the builds each requires and their retest state against the submission date, which turns a queue of rejections into a schedule that can be managed inside the window.'],
    ['Can it control outsourcing spend?', 'Vendor deliveries are assessed against the brief that commissioned them with acceptance recorded before payment, and revision rounds are counted, so budgets are not spent on unverified assets.'],
    ['Does it support live operations?', 'The event calendar is planned ahead with the content each event needs and the production capacity to deliver it, so gaps are visible with enough lead time to fill them.'],
    ['How does player support fit in?', 'Support contacts are categorised into themes linked to builds, features and platforms, so the earliest evidence of a problem reaches production rather than staying inside support.'],
    ['Does it replace our engine and asset tools?', 'No. Engines, digital content creation tools and build systems continue as they are. Verity holds the studio around them — milestones, asset pipeline, certification, vendors, live calendar and support.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of pipeline stages, milestone structures, certification processes and vendor arrangements, configuration, migration of projects and vendors, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the review backlog.',
  ctaLede: 'That is usually where the milestone is going. Tell us how assets move through review today.',

  related: ['app-developers', 'software-agencies', 'creator-businesses', 'design-agencies', 'content-agencies', 'ai-companies'],
};
