export default {
  slug: 'universities',
  status: 'published',
  plural: 'universities',
  subject: 'university',

  seo: {
    title: 'AI business management software for universities | Verity',
    description:
      'Verity connects research grant administration, faculty workload and supervision, departmental reporting, accreditation evidence and student services into one system.',
    keywords: [
      'AI software for universities',
      'university administration software',
      'research grant administration and compliance',
      'faculty workload and accreditation reporting',
    ],
  },

  hero: {
    eyebrow: 'Verity for universities',
    headline: 'The grant has conditions, a spending profile and a report date, and it lives in a folder.',
    lede:
      'Research funding carries obligations most administration never sees until an audit. Verity holds the grant conditions, the spend against them and the evidence they require.',
    note: 'Verity handles administration. Teaching, assessment and research itself stay where they are.',
    panel: {
      title: 'Institution',
      meta: 'Current year',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active grants', value: '184', note: '₹96 Cr awarded' },
        { label: 'Underspent grants', value: '31', note: 'against profile' },
        { label: 'Reports due 60 days', value: '46', note: '11 not started' },
        { label: 'Faculty above norm', value: '38', note: 'workload and supervision' },
      ],
      rows: [
        { name: '31 grants materially underspent against their profile', meta: 'Funds may be reclaimed at close', active: true },
        { name: '11 funder reports due within 60 days not started', meta: 'Conditions of continued funding', active: true },
        { name: '38 faculty above workload norm including supervision', meta: 'While 14 are below it', active: true },
        { name: 'Accreditation evidence held in six departmental formats', meta: 'Submission due next year', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own institution in this shape.',
    },
  },

  overview: {
    heading: 'A university is several institutions sharing a name and a compliance burden.',
    paragraphs: [
      'Universities run teaching, research, student services, facilities and commercial activity simultaneously, across faculties that operate with real autonomy. Each generates its own records, and the institution is nonetheless accountable as a single entity to funders, regulators and accreditors.',
      'Research funding is the sharpest case. A grant carries a spending profile, permitted cost categories, reporting dates and conditions of continuation, and it is administered by a principal investigator whose primary work is not administration. Thirty-one grants materially underspent is money that may be reclaimed at close, and eleven unstarted reports are conditions of continued funding.',
      'The second is faculty workload, which includes teaching, supervision, administration and research and is governed by norms. Thirty-eight above the norm while fourteen are below it is an equity issue and a compliance one.',
      'The third is accreditation and regulatory reporting, where the institution must produce evidence about itself that exists in six departmental formats.',
      'The fourth is that a student interacts with admissions, academics, hostel, fees, library and services as one institution and is recorded separately by each.',
      'Verity holds grants and their conditions, faculty allocation against norms, and the evidence the institution has to produce.',
    ],
  },

  terminology: [
    ['Faculties, departments, programmes', 'Locations'],
    ['Grants, projects, funders', 'Work'],
    ['Students, researchers, staff', 'People'],
    ['Conditions, reports, approvals', 'Workflows'],
    ['Evidence, documentation, submissions', 'Records'],
    ['Supervision, teaching, administration', 'Workforce'],
    ['Alumni, industry, funders', 'Relationships'],
  ],

  challengesHeading: 'Autonomy at faculty level, accountability at institution level.',
  challengesLede:
    'University difficulties come from independent units generating records that the institution must answer for as one.',
  challenges: [
    { problem: 'Grant conditions live with the investigator', detail: 'Spending profiles, permitted categories and reporting dates sit in an award letter held by the person least able to administer them.', outcome: 'Conditions, profile and report dates are records on the grant with owners and reminders.' },
    { problem: 'Grants underspend and funds are reclaimed', detail: 'Spend lags the profile and the shortfall becomes visible near the close, when it cannot be corrected.', outcome: 'Spend against profile is tracked continuously, so underspend surfaces while it can still be used.' },
    { problem: 'Faculty workload is uneven against norms', detail: 'Teaching, supervision and administration accumulate unevenly and are reviewed when someone complains.', outcome: 'All allocation types are recorded against faculty and measured against norms before terms begin.' },
    { problem: 'Accreditation evidence exists in departmental formats', detail: 'The institution must describe itself using data every faculty holds differently.', outcome: 'One record model across faculties, so a submission is an extract rather than a reconciliation.' },
    { problem: 'Students exist separately in every service', detail: 'Academics, hostel, fees, library and services each hold their own version of the same person.', outcome: 'One person record referenced by every service.' },
    { problem: 'Reporting deadlines are met individually and missed collectively', detail: 'Each funder report is somebody’s responsibility and nobody has the institutional view.', outcome: 'Report dates across all grants form one pipeline with owners.' },
  ],

  modulesLede: 'One record model across faculties, grants and services.',
  modules: [
    { id: 'work', title: 'Grants, projects and reporting', line: 'Each grant is work with a funder, award, spending profile, permitted categories, conditions, report dates and an investigator.', why: 'A grant is a set of obligations, and it is usually administered from an award letter.', example: 'Forty-six reports due within sixty days, eleven not started.' },
    { id: 'workflows', title: 'Conditions, approvals and submissions', line: 'Grant conditions, spend approvals, ethics and regulatory approvals and submissions move through defined steps.', why: 'Conditions of continuation are the reason grant administration matters.', example: 'A condition deadline raised with an owner ahead of the date.' },
    { id: 'workforce', title: 'Teaching, supervision and administration load', line: 'All allocation types are recorded against faculty and measured against workload norms.', why: 'Supervision is invisible in most workload systems and material in practice.', example: 'Thirty-eight faculty above norm including supervision, while fourteen are below.' },
    { id: 'people', title: 'Students, researchers and staff', line: 'Every person is one record referenced by academics, services, hostel, fees and research.', why: 'The duplicate person record is the root of most university administrative cost.', example: 'A research student existing once across supervision, fees and services.' },
    { id: 'records', title: 'Evidence, documentation and submissions', line: 'Accreditation and regulatory evidence is held once with completeness as a reportable state.', why: 'The institution must produce evidence about itself on demand.', example: 'Accreditation data assembled as an extract rather than across six formats.' },
    { id: 'locations', title: 'Faculties, departments and campuses', line: 'Units roll into the institution with people, grants, work and reporting following the same structure.', why: 'Faculty autonomy is real and institutional accountability is also real.', example: 'Grant performance and workload comparable across faculties.' },
    { id: 'relationships', title: 'Funders, industry and alumni', line: 'Funders, industry partners and alumni carry their history, agreements, commitments and engagement.', why: 'Funding relationships extend beyond a single grant.', example: 'A funder’s history across grants and departments, in one place.' },
    { id: 'control', title: 'Approvals, authority and audit', line: 'One permission model and one audit trail, with spend authority and access set by role and unit.', why: 'Public and grant funds require attribution on every commitment.', example: 'Grant spend above threshold routed for approval with the category checked.' },
    { id: 'intelligence', title: 'Grant, workload and evidence reporting', line: 'Spend against profile, report compliance, workload against norms, evidence completeness and student service load come from the records.', why: 'The institution’s obligations are all measurable and usually assembled by hand.', example: 'Spend against profile across the grant portfolio.' },
    { id: 'ai', title: 'Ask the institution a question', line: 'Verity AI answers from the university’s own administrative records, respects permissions and unit boundaries, and can create assigned follow-ups.', why: 'Cross-faculty questions are what departmental systems cannot answer.', example: '"Which grants are underspent against profile?" returns thirty-one with owners.' },
    { id: 'communication', title: 'Correspondence on the record', line: 'Funder correspondence, approvals and institutional notices attach to the grant, person or unit they concern.', why: 'Grant correspondence is evidence and is needed at audit.', example: 'A funder’s approval of a variation, on the grant record.' },
    { id: 'orders', title: 'Grant spend and procurement', line: 'Commitments and spend are recorded against grants and categories with approvals.', why: 'Spend outside permitted categories is the most common grant finding.', example: 'A commitment checked against permitted categories before approval.' },
  ],

  workflowsHeading: 'Grants, workload and evidence.',
  workflowsLede: 'These already happen across faculties. On one model they become institutional.',
  workflows: [
    { name: 'Grant setup and conditions', steps: ['Award recorded with funder, value and period', 'Spending profile and permitted categories captured', 'Conditions and report dates recorded with owners', 'Investigator and administrative support assigned', 'Approvals and ethics requirements listed'], note: 'Capturing conditions from the award letter is the step that makes the rest possible.' },
    { name: 'Spend against profile', steps: ['Commitments raised against the grant and category', 'Category permission checked before approval', 'Spend recorded and compared with the profile', 'Underspend or overspend flagged with time remaining', 'Variation requested from the funder where needed'], note: 'Underspend discovered near close is money reclaimed; discovered early it is money used.' },
    { name: 'Funder reporting', steps: ['Report dates aggregated across the portfolio', 'Owner assigned per report ahead of the date', 'Data assembled from grant records', 'Report submitted and acknowledgement recorded', 'Conditions of continuation confirmed'], note: 'The institutional view of report dates is the one nobody currently has.' },
    { name: 'Workload allocation', steps: ['Teaching, supervision and administrative requirements listed', 'Allocations proposed against availability and qualification', 'Load measured against norms including supervision', 'Imbalances flagged before the term', 'Allocations recorded and published'], note: 'Supervision load is real and usually invisible in allocation.' },
    { name: 'Accreditation submission', steps: ['Requirements mapped to existing record types', 'Data extracted across faculties on one model', 'Gaps raised as exceptions with owners', 'Evidence completeness confirmed', 'Submission assembled and recorded'], note: 'This is the test of whether institutional administration is data or paper.' },
  ],

  ai: {
    heading: 'Ask across faculties.',
    lede: 'Verity AI reads the same grant, workload, student and evidence records the institution creates as it operates. It answers within permissions and unit boundaries, and can turn an answer into assigned work.',
    panelMeta: 'Grounded in your institutional records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which grants are materially underspent against their profile?',
      'Which funder reports are due within sixty days and not started?',
      'Which faculty are above workload norms including supervision?',
      'Which grant commitments fall outside permitted categories?',
      'What accreditation evidence is missing and from which units?',
      'Which grants have conditions with approaching deadlines?',
      'How does grant performance compare across faculties?',
      'Which students appear differently across services?',
      'Summarise grant and compliance position.',
    ],
  },

  automationHeading: 'Conditions and deadlines.',
  automationLede: 'Each runs from the institution’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Grant spend diverges from profile', steps: ['Flagged with time remaining in the period', 'Investigator and administrator notified', 'Variation or reallocation decision raised'] },
    { trigger: 'A funder report date approaches', steps: ['Owner assigned with data requirements', 'Assembly task raised ahead of the date', 'Submission and acknowledgement recorded'] },
    { trigger: 'A commitment falls outside permitted categories', steps: ['Held at the approval step', 'Category checked against the award', 'Decision recorded or variation requested'] },
    { trigger: 'Faculty load exceeds the norm', steps: ['Allocation flagged including supervision', 'Rebalancing assigned to the head of department', 'Decision recorded'] },
    { trigger: 'Accreditation evidence is missing', steps: ['Exception raised against the unit', 'Owner assigned', 'Completeness updated on receipt'] },
  ],

  intelligenceHeading: 'What the administration can see.',
  intelligenceLede: 'Institutional obligations from records faculties create as they work.',
  intelligence: [
    { area: 'Research', points: ['Spend against profile by grant and faculty', 'Report compliance and acknowledgements', 'Conditions met and outstanding', 'Grant portfolio by funder and value'] },
    { area: 'Workload', points: ['Load against norms including supervision', 'Distribution across faculty and department', 'Unallocated requirements', 'Qualification coverage'] },
    { area: 'Compliance', points: ['Accreditation evidence completeness', 'Exceptions by unit and age', 'Access and change history', 'Submission history and outcomes'] },
    { area: 'Students', points: ['One person across services', 'Service load by department', 'Fee and hostel positions', 'Progression and outcomes'] },
    { area: 'Finance', points: ['Grant commitments and spend by category', 'Approvals above threshold', 'Recovery and reclaim exposure', 'Faculty-level financial position'] },
  ],
  intelligenceNote: 'Verity holds administrative records. Teaching, assessment, research data and library systems continue as they are.',

  rolesHeading: 'One institution, five views.',
  rolesLede: 'Everyone works from the same records within their unit and permissions.',
  roles: [
    { role: 'Vice-chancellor or registrar', question: 'Are our obligations being met?', focus: 'Grant spend and reporting, workload compliance, accreditation readiness, faculty comparison.' },
    { role: 'Dean or head of department', question: 'Is my faculty allocated and compliant?', focus: 'Workload against norms, grant performance in unit, evidence gaps, staffing.' },
    { role: 'Principal investigator', question: 'Where is my grant?', focus: 'Spend against profile, conditions and reports due, permitted categories, approvals.' },
    { role: 'Research office', question: 'What is at risk across the portfolio?', focus: 'Underspend, reports not started, conditions approaching, variations required.' },
    { role: 'Administration', question: 'What is stalled?', focus: 'Evidence exceptions, approvals pending, student service duplication, allocations outstanding.' },
  ],

  useCasesHeading: 'What universities use Verity for',
  useCases: [
    { name: 'Grant condition tracking', body: 'Spending profiles, permitted categories, conditions and report dates as records with owners rather than an award letter in a folder.' },
    { name: 'Underspend prevention', body: 'Spend against profile tracked continuously, so a shortfall surfaces while the funds can still be used rather than reclaimed at close.' },
    { name: 'Institutional report pipeline', body: 'All funder report dates as one pipeline with owners, which is the view no individual investigator has.' },
    { name: 'Workload including supervision', body: 'All allocation types measured against norms before terms begin, making supervision load visible.' },
    { name: 'Accreditation as an extract', body: 'One record model across faculties, so producing evidence about the institution is a query rather than a reconciliation.' },
    { name: 'One person record', body: 'Students and staff existing once across academics, services, fees and research.' },
    { name: 'Category-checked spend', body: 'Grant commitments checked against permitted categories before approval, addressing the most common audit finding.' },
  ],

  migration: 'Teaching, assessment, research data and library systems continue and are mapped during implementation. Grants with conditions and profiles, faculty allocations, students and evidence requirements are brought across.',

  faqHeading: 'Questions universities ask',
  faqs: [
    ['Does Verity handle teaching or research itself?', 'No. Teaching, assessment, research data and library systems remain where they are and are mapped during implementation. Verity handles administration — grants and their conditions, workload, evidence, services and the reporting across them.'],
    ['What can AI software do for a university?', 'Verity AI answers administrative questions from the institution’s own records: which grants are underspent against profile, which funder reports are due and unstarted, which faculty are above workload norms, what accreditation evidence is missing. Each answer can become assigned administrative work.'],
    ['Why is grant underspend a problem?', 'Because funds unspent against the profile may be reclaimed at close. Discovered early it is money that can still be used; discovered near the end it is money returned, and the research it would have funded does not happen.'],
    ['Can it track grant conditions?', 'Conditions, permitted categories, spending profiles and report dates are recorded on the grant with owners and reminders, rather than living in an award letter held by an investigator whose primary work is not administration.'],
    ['How does it handle faculty workload?', 'Teaching, supervision and administrative allocations are all recorded against faculty and measured against norms before terms begin — supervision in particular is material in practice and invisible in most allocation systems.'],
    ['Does it help with accreditation?', 'The institution runs on one record model across faculties, so producing evidence about itself becomes an extract with completeness reportable, rather than a reconciliation across departmental formats.'],
    ['Can it respect faculty autonomy?', 'Faculties and departments are units with their own people, grants and reporting, and permissions follow that structure — while the institution retains the consolidated view it is accountable for.'],
    ['How long does implementation take?', 'About four weeks for a defined scope: discovery and mapping of grant administration and workload norms, configuration, migration of grants, allocations and people, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the grant portfolio.',
  ctaLede: 'Underspend and unstarted reports are both visible now and expensive later. Tell us how grants are administered today.',

  related: ['colleges', 'schools', 'edtech-companies', 'skill-training-institutes', 'vocational-training-centres', 'consulting-firms'],
};
