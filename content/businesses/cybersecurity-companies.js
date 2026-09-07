export default {
  slug: 'cybersecurity-companies',
  status: 'published',
  plural: 'cybersecurity companies',
  subject: 'cybersecurity company',

  seo: {
    title: 'AI business management software for cybersecurity companies | Verity',
    description:
      'Verity gives cybersecurity companies one system for the findings pipeline, remediation commitments, analyst time and evidence for client audits.',
    keywords: [
      'AI software for cybersecurity companies',
      'security services company management software',
      'findings and remediation tracking software',
      'security engagement and evidence management',
    ],
  },

  hero: {
    eyebrow: 'Verity for cybersecurity companies',
    headline: 'You found it in March. It is October and nobody can say whether it was fixed.',
    lede:
      'A security business is judged on what happened to its findings. Verity tracks every one from discovery to verified remediation, per client.',
    note: 'Verity runs the company. Scanners, monitoring and analysis tooling stay where they are.',
    panel: {
      title: 'Practice',
      meta: 'Current position',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Open findings', value: '1,340', note: '46 clients' },
        { label: 'Past remediation commitment', value: '218', note: 'critical and high' },
        { label: 'Analyst time on triage', value: '61%', note: 'rest on assessment' },
        { label: 'Evidence requests this quarter', value: '19', note: 'client audits' },
      ],
      rows: [
        { name: '218 findings past their agreed remediation date', meta: 'Client-owned, unescalated', active: true },
        { name: '61% of analyst hours spent on triage', meta: 'False positive load unmeasured', active: true },
        { name: '4 clients cannot be given evidence for an audit', meta: 'Records across several tools', active: true },
        { name: '9 engagements delivered above scoped hours', meta: 'Fixed fee, extra testing', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'The finding is the product, and its fate is what the client pays for.',
    paragraphs: [
      'A cybersecurity company produces findings. Whether the business is testing, monitoring or advisory, the deliverable is a set of identified issues with severities and agreed remediation expectations. Two hundred and eighteen findings past their agreed date, unescalated, is the company failing at the part of the job that happens after the report.',
      'The second characteristic is that remediation usually belongs to the client. The security company found it and cannot fix it, which makes tracking, escalation and evidence the actual service rather than an administrative extra.',
      'The third is analyst economics. Sixty-one per cent of analyst hours spent on triage rather than assessment is the cost structure of the business, and the false positive load driving it is measurable and reducible per client and per source.',
      'The fourth is evidence. Clients undergo their own audits and ask their security provider to produce the record — what was found, when, what was recommended, what was done. Four clients whose evidence sits across several tools is four difficult conversations.',
      'The fifth is engagement scope. Fixed-fee testing that expands during delivery is margin lost quietly, and nine engagements above scoped hours is a pattern rather than an accident.',
      'Verity holds findings through their full life, ages remediation commitments against owners, and keeps the evidence a client audit will ask for.',
    ],
  },

  terminology: [
    ['Engagements, assessments, monitoring', 'Work'],
    ['Findings, severities, remediation', 'Records'],
    ['Clients, environments, assets', 'Relationships'],
    ['Triage, assessment, verification', 'Workflows'],
    ['Analysts, testers, consultants', 'People'],
    ['Evidence, reports, attestations', 'Control'],
    ['Scope, hours, commercial terms', 'Orders'],
  ],

  challengesHeading: 'Findings that outlive the report that contained them.',
  challengesLede:
    'Security company difficulties come from owning the discovery and not the fix.',
  challenges: [
    { problem: 'Findings are delivered and then untracked', detail: 'The report is issued and what happened next lives in client email.', outcome: 'Every finding carries state, owner, commitment date and verification.' },
    { problem: 'Remediation commitments pass without escalation', detail: 'Agreed dates expire and nobody raises it until a review.', outcome: 'Commitments age with escalation at threshold to a named client contact.' },
    { problem: 'Triage load is unmeasured', detail: 'Analyst hours disappear into noise without attribution by source or client.', outcome: 'Time is attributed to triage against assessment by source and client.' },
    { problem: 'Audit evidence has to be assembled', detail: 'A client audit request requires collecting history from several systems.', outcome: 'Finding history, reports and verification are retained as one record per client.' },
    { problem: 'Fixed-fee engagements expand', detail: 'Additional testing is performed within an agreed fee.', outcome: 'Scope and delivered hours are compared per engagement with variance visible.' },
    { problem: 'Repeat findings are not recognised', detail: 'The same issue is found again in the next assessment without reference to the last.', outcome: 'Findings link across assessments, so recurrence is visible and reportable.' },
  ],

  modulesLede: 'One system across findings, engagements, clients and evidence.',
  modules: [
    { id: 'records', title: 'Findings, severities and remediation', line: 'Each finding carries client, asset, severity, discovery date, recommendation, owner, commitment date, state and verification.', why: 'The finding is the product and its state is what the client is paying to have managed.', example: 'Two hundred and eighteen findings past their commitment date.' },
    { id: 'workflows', title: 'Triage, assessment and verification', line: 'Alerts and candidate issues move through triage, assessment, reporting and verification with time recorded at each stage.', why: 'The ratio between triage and assessment is the practice’s cost structure.', example: 'Sixty-one per cent of analyst hours on triage.' },
    { id: 'work', title: 'Engagements, assessments and monitoring', line: 'Each engagement carries scope, hours, deliverables, schedule and the findings it produced.', why: 'Scope and delivery have to be compared to protect fixed-fee margin.', example: 'Nine engagements delivered above scoped hours.' },
    { id: 'relationships', title: 'Clients, environments and assets', line: 'Clients carry their environments, assets, findings history, commitments and contacts.', why: 'Escalation needs a named person on the client side, not an address.', example: 'Open findings by client with named owners.' },
    { id: 'control', title: 'Evidence, reports and attestations', line: 'One permission model and one audit trail, with reports, evidence and verification retained per client and finding.', why: 'Clients pass their own audits using what their security provider can produce.', example: 'Evidence assembled for a client audit from one record.' },
    { id: 'people', title: 'Analysts, testers and consultants', line: 'Staff carry skills, certifications, engagement assignments, hours by activity and findings produced.', why: 'Certification currency and utilisation are both operational facts.', example: 'Analyst hours by activity and engagement.' },
    { id: 'intelligence', title: 'Findings, remediation and utilisation reporting', line: 'Finding volumes by severity, remediation ageing and closure, triage ratios, recurrence and engagement margin come from the records.', why: 'The practice is measured on what happens to findings and on analyst utilisation.', example: 'Remediation closure rate by client and severity.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own finding, engagement, client and time records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about what is overdue and what keeps recurring.', example: '"Which findings are past commitment?" returns them by client and severity.' },
    { id: 'communication', title: 'Client escalation and reporting', line: 'Escalations, status updates and report delivery attach to the finding and client.', why: 'An escalation that is not recorded did not happen as far as an audit is concerned.', example: 'Escalation history against an overdue finding.' },
    { id: 'orders', title: 'Scope, hours and commercial terms', line: 'Engagements carry scoped hours, delivered hours, retainers and out-of-scope work with a billing state.', why: 'Additional testing performed inside a fixed fee is unpriced work.', example: 'Delivered against scoped hours by engagement.' },
    { id: 'schedule', title: 'Engagement scheduling and capacity', line: 'Engagements are planned against analyst availability, certifications and client windows.', why: 'Testing windows are client-constrained and capacity is skill-specific.', example: 'Engagements scheduled against certified analyst availability.' },
    { id: 'locations', title: 'Environments and in-scope systems', line: 'Client environments and in-scope systems are recorded with their boundaries.', why: 'Scope boundaries are what separate authorised work from unauthorised work.', example: 'In-scope systems recorded per engagement.' },
  ],

  workflowsHeading: 'Scope, assess, report, track, verify.',
  workflowsLede: 'These already happen. Recorded, the findings pipeline stops ending at the report.',
  workflows: [
    { name: 'Engagement setup', steps: ['Scope and in-scope systems agreed and recorded', 'Hours and deliverables defined', 'Analysts assigned by skill and certification', 'Client windows and authorisations confirmed', 'Engagement opened'], note: 'Recording scope boundaries is what keeps the work authorised.' },
    { name: 'Triage and assessment', steps: ['Candidate issues received or discovered', 'Triaged with time recorded', 'Assessed for validity and severity', 'False positives recorded against their source', 'Confirmed findings created'], note: 'Recording false positives against their source is what reduces future triage load.' },
    { name: 'Reporting and commitment', steps: ['Findings compiled into the deliverable', 'Severities and recommendations confirmed', 'Report issued to the client', 'Remediation owners and dates agreed', 'Commitments recorded per finding'], note: 'A commitment without a named owner and a date is not a commitment.' },
    { name: 'Remediation tracking', steps: ['Commitment dates monitored', 'Approaching and overdue findings escalated', 'Client response recorded', 'Remediation evidence received', 'Verification performed and state closed'], note: 'Verification, not the client’s word, is what closes a finding.' },
    { name: 'Audit evidence', steps: ['Client audit request received', 'Findings, reports and verification retrieved for the period', 'Evidence assembled', 'Provided with an audit trail', 'Request recorded against the client'], note: 'Assembling from one record is the difference between hours and days.' },
  ],

  ai: {
    heading: 'Ask about findings and remediation.',
    lede: 'Verity AI reads the same finding, engagement, client and time records the practice creates as it works. It answers from your own practice, respects permissions, and can turn an answer into an escalation or a scope conversation.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which findings are past their remediation commitment?',
      'Which clients have the most overdue critical findings?',
      'How much analyst time went to triage against assessment?',
      'Which sources produce the most false positives?',
      'Which findings have recurred across assessments?',
      'Which engagements were delivered above scoped hours?',
      'What is remediation closure rate by client and severity?',
      'Which analyst certifications expire this quarter?',
      'Summarise findings and remediation position by client.',
    ],
  },

  automationHeading: 'Commitments, triage and scope.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A remediation commitment approaches its date', steps: ['Client owner notified with the finding', 'Escalation raised if unanswered', 'Response recorded'] },
    { trigger: 'A finding passes its commitment date', steps: ['Escalated by severity to the named client contact', 'Ageing recorded', 'Extension or closure captured'] },
    { trigger: 'A finding recurs across assessments', steps: ['Linked to the previous occurrence', 'Recurrence flagged in reporting', 'Root cause conversation raised'] },
    { trigger: 'Delivered hours exceed scoped hours', steps: ['Variance flagged on the engagement', 'Scope or billing conversation raised', 'Outcome recorded'] },
    { trigger: 'An analyst certification approaches expiry', steps: ['Affected engagements flagged', 'Renewal assigned', 'Availability updated'] },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Findings, remediation and utilisation from working records.',
  intelligence: [
    { area: 'Findings', points: ['Volume by severity and client', 'Discovery sources', 'Recurrence across assessments', 'Verification completion'] },
    { area: 'Remediation', points: ['Commitments met and missed', 'Ageing by severity and client', 'Escalation history', 'Closure rates over time'] },
    { area: 'Practice', points: ['Analyst hours by activity', 'Triage against assessment ratio', 'False positives by source', 'Utilisation and certification currency'] },
    { area: 'Commercial', points: ['Scoped against delivered hours', 'Engagement margin', 'Retainer consumption', 'Out-of-scope work billed'] },
  ],
  intelligenceNote: 'Verity records the practice’s operations. Scanners, monitoring and analysis tooling continue as they are.',

  rolesHeading: 'One practice, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'Is the practice delivering and earning?', focus: 'Remediation closure by client, engagement margin, analyst utilisation, triage load.' },
    { role: 'Practice lead', question: 'What is overdue and unescalated?', focus: 'Commitment ageing by severity, escalations outstanding, engagement schedule, analyst capacity.' },
    { role: 'Analyst', question: 'What am I assessing?', focus: 'Triage queue, assigned assessments, finding history for the client, verification tasks.' },
    { role: 'Client manager', question: 'What does this client need to see?', focus: 'Open findings, commitments, escalation history, audit evidence, scope position.' },
  ],

  useCasesHeading: 'What cybersecurity companies use Verity for',
  useCases: [
    { name: 'Tracking findings past the report', body: 'Every finding carrying state, client owner, commitment date and verification, so the service continues after the deliverable is issued.' },
    { name: 'Escalating overdue remediation', body: 'Commitments ageing with escalation to a named client contact, which is the part of the job most often left to a quarterly review.' },
    { name: 'Measuring triage load', body: 'Analyst time attributed to triage against assessment with false positives recorded by source, making the practice’s cost structure visible and reducible.' },
    { name: 'Producing audit evidence', body: 'Findings, reports, escalations and verification retained per client, so an audit request is answered from one record.' },
    { name: 'Protecting fixed-fee margin', body: 'Scoped against delivered hours per engagement, so expanding testing becomes a scope conversation rather than absorbed work.' },
    { name: 'Recognising recurrence', body: 'Findings linked across assessments, so an issue found again is reported as recurrence rather than as a new discovery.' },
    { name: 'Asking about the practice', body: 'Plain-language questions across findings, remediation, analyst time and engagements, with escalations raised in the same step.' },
  ],

  migration: 'Scanners, monitoring and analysis tooling continue and are mapped during implementation. Clients and environments, open findings with severities and commitments, engagement history, report archives and analyst records are brought across.',

  faqHeading: 'Questions cybersecurity companies ask',
  faqs: [
    ['What can AI software do for a cybersecurity company?', 'Verity AI answers questions from your own finding, engagement, client and time records: which findings are past their remediation commitment, which clients have the most overdue critical issues, how much analyst time went to triage, which findings have recurred. Each answer can become an escalation or a scope conversation.'],
    ['Why track findings after the report?', 'Because the client is paying for issues to be resolved, not for a document. The security company usually cannot perform the fix, which makes tracking, escalation and verification the actual service rather than an administrative extra.'],
    ['How does it help with analyst economics?', 'Time is attributed to triage against assessment, and false positives are recorded against the source that produced them. That turns a general sense of noise into a measurable load that can be reduced per client and per source.'],
    ['Can it produce audit evidence?', 'Findings, reports, escalation history and verification are retained per client and finding, so when a client’s own audit asks what was found and what was done, the answer is assembled from one record rather than several tools.'],
    ['Does it protect engagement margin?', 'Scoped hours and delivered hours are compared per engagement, so testing that expands during delivery surfaces as a scope or billing conversation instead of being absorbed inside a fixed fee.'],
    ['Does it replace our scanners and tooling?', 'No. Scanners, monitoring platforms and analysis tooling continue as they are. Verity holds the practice around them — findings, engagements, clients, commitments, evidence and analyst time.'],
    ['How does it handle recurrence?', 'Findings link across assessments for the same client and asset, so an issue that reappears is visible as recurrence, which changes both the report and the conversation about root cause.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of engagement types, finding severities, commitment practice and evidence requirements, configuration, migration of clients and open findings, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with findings past their date.',
  ctaLede: 'That is the part of the service that continues after the report. Tell us how remediation is tracked today.',

  related: ['it-services-companies', 'data-companies', 'saas-companies', 'software-agencies', 'consulting-firms', 'ai-companies'],
};
