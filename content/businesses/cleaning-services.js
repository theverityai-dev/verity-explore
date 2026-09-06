export default {
  slug: 'cleaning-services',
  status: 'published',
  plural: 'cleaning services',
  subject: 'cleaning service',

  seo: {
    title: 'AI business management software for cleaning services | Verity',
    description:
      'Verity gives cleaning services one system for shift attendance at client sites, replacement cover, supplies consumed per site, contract profitability and complaint patterns.',
    keywords: [
      'AI software for cleaning services',
      'cleaning company management software',
      'staff attendance and cover at client sites',
      'cleaning contract profitability software',
    ],
  },

  hero: {
    eyebrow: 'Verity for cleaning services',
    headline: 'The contract says four people. This morning three turned up and nobody told the client.',
    lede:
      'A cleaning business sells attendance at places it does not control. Verity records who was where, what was used, and which contracts still pay.',
    note: 'Verity runs the business. Attendance hardware stays where it is.',
    panel: {
      title: 'Operations',
      meta: 'Today',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sites serviced', value: '112', note: '38 clients' },
        { label: 'Shifts uncovered', value: '7', note: 'absence without replacement' },
        { label: 'Supplies cost variance', value: '+18%', note: 'against contract allowance' },
        { label: 'Contracts below margin', value: '9', note: 'staff cost above quote' },
      ],
      rows: [
        { name: '7 shifts short this morning', meta: 'Client not informed on 5', active: true },
        { name: '9 contracts below their quoted margin', meta: 'Hours delivered above quote', active: true },
        { name: 'Supplies 18% above allowance at 6 sites', meta: 'Consumption unmeasured', active: true },
        { name: '4 complaints from one client this month', meta: 'Same site, same shift', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own operation in this shape.',
    },
  },

  overview: {
    heading: 'The deliverable is attendance, and it happens where you cannot see it.',
    paragraphs: [
      'A cleaning business is contracted to put a certain number of people in a certain place for a certain number of hours. That is the product. Seven shifts short in a morning is seven partial deliveries, and the damage is greatest where the client discovers it first — five sites where nobody informed them is five relationships weakened by silence rather than by absence.',
      'The second characteristic is that the work happens at sites the business does not control. Supervision is thin, verification is difficult, and staff turnover is high, which makes a reliable attendance record the operational foundation for everything else.',
      'The third is contract profitability. A contract is quoted on hours and delivered in hours, and nine contracts below margin usually means more hours are being delivered than were priced, either through overstaffing, overruns or unbilled additional work.',
      'The fourth is supplies. Consumables are dropped at sites and consumed without measurement, and eighteen per cent above allowance at six sites is a cost that a per-site record would make visible.',
      'The fifth is complaints, which cluster. Four complaints from one client in a month at the same site and shift is a specific staffing problem rather than general quality drift.',
      'Verity records attendance and cover, attributes supplies and hours to contracts, and holds complaints against the site and shift they came from.',
    ],
  },

  terminology: [
    ['Contracts, sites, schedules', 'Work'],
    ['Shifts, attendance, cover', 'Workflows'],
    ['Cleaners, supervisors, area managers', 'People'],
    ['Clients, site contacts, tenants', 'Relationships'],
    ['Supplies, equipment, consumables', 'Inventory'],
    ['Complaints, inspections, quality', 'Records'],
    ['Billing, additional work, approvals', 'Control'],
  ],

  challengesHeading: 'Attendance you cannot see and hours you did not price.',
  challengesLede:
    'Cleaning difficulties come from delivering labour at other people’s premises.',
  challenges: [
    { problem: 'Absence is discovered by the client', detail: 'Someone does not turn up and nobody arranges cover or informs anyone.', outcome: 'Attendance is recorded per shift with cover and client notification raised on a gap.' },
    { problem: 'Delivered hours exceed quoted hours', detail: 'Contracts are priced on a staffing model that is not what actually attends.', outcome: 'Hours delivered are attributed to the contract and compared with the quote.' },
    { problem: 'Supplies are consumed without attribution', detail: 'Consumables are distributed to sites and never measured per site.', outcome: 'Supplies are issued against sites with consumption compared to allowance.' },
    { problem: 'Complaints are handled individually', detail: 'Each complaint is resolved and the cluster is never seen.', outcome: 'Complaints carry site, shift and staff, making patterns visible.' },
    { problem: 'Additional work is done unbilled', detail: 'Extra tasks requested on site are performed without reaching invoicing.', outcome: 'Additional work is recorded at the site with a billing state.' },
    { problem: 'Staff turnover erases site knowledge', detail: 'A new cleaner arrives without the site’s specific requirements.', outcome: 'Site instructions and requirements live on the site record, not with a person.' },
  ],

  modulesLede: 'One system across contracts, shifts, staff and supplies.',
  modules: [
    { id: 'workflows', title: 'Shifts, attendance and cover', line: 'Every shift carries its site, required staffing, actual attendance, cover arranged and client notification.', why: 'Attendance is the deliverable, so it has to be the primary record.', example: 'Seven shifts short with five clients uninformed.' },
    { id: 'work', title: 'Contracts, sites and schedules', line: 'Each contract carries its sites, scope, staffing model, quoted hours, supplies allowance and commercial terms.', why: 'The quote is a staffing model, and delivery has to be compared with it.', example: 'Nine contracts delivering above quoted hours.' },
    { id: 'people', title: 'Cleaners, supervisors and area managers', line: 'Staff carry site assignments, attendance history, reliability, skills and area responsibility.', why: 'Reliability is the operational risk and it is person-level.', example: 'Absence and cover rates by staff member.' },
    { id: 'inventory', title: 'Supplies, equipment and consumables', line: 'Supplies are issued to sites with consumption compared against contract allowance.', why: 'Unmeasured consumption at scattered sites is a persistent unattributed cost.', example: 'Supplies eighteen per cent above allowance at six sites.' },
    { id: 'relationships', title: 'Clients, site contacts and tenants', line: 'Clients carry their contracts, sites, contacts, complaints and commercial position.', why: 'The person on site and the person holding the contract are rarely the same.', example: 'Complaints by client and site contact.' },
    { id: 'records', title: 'Complaints, inspections and quality', line: 'Complaints and inspections carry site, shift, staff, cause and resolution.', why: 'Quality problems cluster, and the cluster is the fixable unit.', example: 'Four complaints from one client at one site and shift.' },
    { id: 'control', title: 'Billing, additional work and approvals', line: 'One permission model and one audit trail, with additional work and variations carrying a billing state.', why: 'Extra work performed and never billed is the most common revenue leak.', example: 'Additional work recorded at site with billing state.' },
    { id: 'intelligence', title: 'Attendance, margin and quality reporting', line: 'Attendance and cover rates, hours delivered against quoted, supplies variance, complaint clusters and contract margin come from the records.', why: 'The business is labour delivered against a quote, and both sides are measurable.', example: 'Contract margin from hours actually delivered.' },
    { id: 'ai', title: 'Ask operations a question', line: 'Verity AI answers from your own shift, contract, staff and supply records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about gaps this morning and contracts losing money.', example: '"Which shifts are short today?" returns seven with cover options.' },
    { id: 'locations', title: 'Sites, buildings and areas', line: 'Sites carry access requirements, specific instructions, equipment held and staffing pattern.', why: 'Site knowledge must survive staff turnover.', example: 'Site instructions available to any assigned cleaner.' },
    { id: 'communication', title: 'Client and site contact', line: 'Shortfall notifications, complaint responses and additional work requests attach to the site and contract.', why: 'Telling the client before they notice preserves the relationship.', example: 'A shortfall notification recorded against the shift.' },
    { id: 'schedule', title: 'Rostering and cover pools', line: 'Rosters are built across sites with cover pools and availability.', why: 'Cover only works if availability is known before the gap appears.', example: 'Available cover matched to a shortfall by area.' },
  ],

  workflowsHeading: 'Roster, attend, cover, inspect, bill.',
  workflowsLede: 'These already happen. Recorded, the deliverable becomes verifiable.',
  workflows: [
    { name: 'Shift delivery', steps: ['Roster published per site and shift', 'Attendance recorded at the site', 'Shortfall identified immediately', 'Cover arranged from availability', 'Client notified where a gap remains'], note: 'Notifying the client before they notice is what protects the contract.' },
    { name: 'Cover management', steps: ['Absence reported or detected', 'Cover pool checked by area and skill', 'Replacement assigned and briefed with site instructions', 'Attendance confirmed', 'Cost attributed to the contract'], note: 'Cover cost belongs to the contract it protected, not to a general overhead.' },
    { name: 'Supplies control', steps: ['Allowance set per site from the contract', 'Supplies issued against the site', 'Consumption compared with allowance', 'Variance investigated', 'Order or process corrected'], note: 'Comparing consumption with allowance is what turns supplies into a managed cost.' },
    { name: 'Quality and complaints', steps: ['Complaint or inspection recorded against site and shift', 'Cause identified with staff attached', 'Resolution performed and recorded', 'Client response confirmed', 'Pattern reviewed by site and shift'], note: 'Clusters by site and shift point to a staffing fix rather than a training campaign.' },
    { name: 'Contract review', steps: ['Hours delivered compared with quoted', 'Supplies and cover cost attributed', 'Additional work identified for billing', 'Margin calculated per contract', 'Renewal or repricing position prepared'], note: 'Repricing needs the delivered hours, not the quoted model.' },
  ],

  ai: {
    heading: 'Ask about attendance and margin.',
    lede: 'Verity AI reads the same shift, contract, staff and supply records the business creates as it operates. It answers from your own operation, respects permissions, and can turn an answer into cover or a client notification.',
    panelMeta: 'Grounded in your operations records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which shifts are short today and where is cover available?',
      'Which contracts are delivering more hours than quoted?',
      'Which sites are consuming supplies above allowance?',
      'Which clients have repeat complaints at the same site and shift?',
      'Which staff have the highest absence rate?',
      'What additional work has been done and not billed?',
      'What is margin by contract from delivered hours?',
      'Which sites were not notified of a shortfall?',
      'Summarise attendance and contract margin.',
    ],
  },

  automationHeading: 'Gaps, cost and complaints.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A shift is short against its required staffing', steps: ['Cover options surfaced by area and skill', 'Replacement assigned and briefed', 'Client notified where a gap remains'] },
    { trigger: 'Delivered hours exceed the contract quote', steps: ['Flagged with the contract and sites', 'Cause identified as staffing or additional work', 'Repricing or correction recorded'] },
    { trigger: 'Site supplies exceed allowance', steps: ['Variance flagged with the site', 'Investigation assigned', 'Order or process adjusted'] },
    { trigger: 'A site accumulates complaints', steps: ['Cluster surfaced by shift and staff', 'Intervention assigned', 'Client response recorded'] },
    { trigger: 'Additional work is recorded at a site', steps: ['Billing state assigned', 'Client approval raised', 'Invoice position updated'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Attendance, margin and quality from delivery records.',
  intelligence: [
    { area: 'Attendance', points: ['Shifts delivered against required', 'Absence and cover rates by staff and area', 'Shortfalls and client notification', 'Punctuality and hours on site'] },
    { area: 'Contracts', points: ['Hours delivered against quoted', 'Cover and supplies cost by contract', 'Additional work billed and unbilled', 'Margin by contract and client'] },
    { area: 'Supplies', points: ['Consumption against allowance by site', 'Cost per site and per hour', 'Equipment held and condition', 'Ordering patterns'] },
    { area: 'Quality', points: ['Complaints by site, shift and staff', 'Inspection results', 'Resolution times', 'Repeat issue patterns'] },
  ],
  intelligenceNote: 'Verity records the business’s operations. Attendance hardware continues as it is.',

  rolesHeading: 'One business, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Which contracts pay?', focus: 'Hours delivered against quoted, cover and supplies cost, margin by contract, complaint clusters.' },
    { role: 'Operations manager', question: 'Is today covered?', focus: 'Shift attendance, shortfalls, cover availability, client notifications.' },
    { role: 'Area supervisor', question: 'How are my sites running?', focus: 'Attendance by site, inspections, complaints, supplies at site.' },
    { role: 'Account manager', question: 'What does the client see?', focus: 'Delivery record, complaint history, additional work, contract position at renewal.' },
  ],

  useCasesHeading: 'What cleaning services use Verity for',
  useCases: [
    { name: 'Recording attendance as the deliverable', body: 'Every shift carrying required staffing against actual attendance, so a shortfall is known to the business before it is known to the client.' },
    { name: 'Managing cover properly', body: 'Cover pools by area and skill with replacements briefed from the site record, and the cost attributed to the contract it protected.' },
    { name: 'Comparing delivered with quoted hours', body: 'Contract profitability calculated from hours actually delivered, which is where a quote based on a staffing model diverges from reality.' },
    { name: 'Attributing supplies per site', body: 'Consumables issued against sites and compared with the contract allowance, turning scattered consumption into a managed cost.' },
    { name: 'Seeing complaint clusters', body: 'Complaints carrying site, shift and staff, so a client’s dissatisfaction resolves to a specific staffing problem rather than general quality.' },
    { name: 'Billing additional work', body: 'Extra tasks recorded at the site with a billing state, so work performed reaches an invoice.' },
    { name: 'Asking about operations', body: 'Plain-language questions across shifts, contracts, supplies and complaints, with cover and notifications raised in the same step.' },
  ],

  migration: 'Attendance hardware continues and is mapped during implementation. Contracts with staffing models and allowances, sites with instructions and access, staff records and rosters, supplies and complaint history are brought across.',

  faqHeading: 'Questions cleaning services ask',
  faqs: [
    ['What can AI software do for a cleaning service?', 'Verity AI answers questions from your own shift, contract, staff and supply records: which shifts are short today and where cover is available, which contracts deliver more hours than quoted, which sites consume supplies above allowance, which clients have repeat complaints at the same shift. Each answer can become cover or a client notification.'],
    ['Why is attendance the central record?', 'Because attendance is the product. The contract commits a number of people at a place for a number of hours, so a shortfall is a partial delivery, and recording it is what allows cover to be arranged and the client to be told before they discover it.'],
    ['How does it show contract profitability?', 'Hours actually delivered, plus cover and supplies cost, are attributed to the contract and compared with the quoted staffing model. That is what reveals contracts that are being over-serviced relative to their price.'],
    ['Can it control supplies?', 'Supplies are issued against sites with an allowance from the contract, and consumption is compared with that allowance, which turns an unattributed bulk cost into a site-level variance that can be investigated.'],
    ['What does it do about complaints?', 'Complaints carry site, shift, staff and cause, so clusters are visible. Most quality problems resolve to a particular site and shift rather than to general standards, and that is a staffing fix.'],
    ['How does it survive staff turnover?', 'Site instructions, access requirements and specific client expectations live on the site record rather than in an individual cleaner’s knowledge, so a replacement arrives briefed.'],
    ['Does it replace attendance hardware?', 'No. Attendance devices continue as they are and are mapped during implementation. Verity holds the operation around them — contracts, rosters, shifts, cover, supplies and quality.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of contracts, staffing models, site requirements and supply allowances, configuration, migration of contracts, sites and staff, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with this morning’s gaps.',
  ctaLede: 'The cost is the client finding out first. Tell us how attendance is confirmed today.',

  related: ['facility-management', 'laundry-services', 'repair-services', 'car-washes', 'property-management', 'hotels'],
};
