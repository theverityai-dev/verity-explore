export default {
  slug: 'interior-design-firms',
  status: 'published',
  plural: 'interior design firms',
  subject: 'interior design firm',

  seo: {
    title: 'AI business management software for interior design firms | Verity',
    description:
      'Verity gives interior design firms one system for studio utilisation across concurrent projects, billable and unbilled hours, vendor performance and project profitability.',
    keywords: [
      'AI software for interior design firms',
      'interior design studio management software',
      'design studio utilisation and profitability',
      'interior design project resourcing software',
    ],
  },

  hero: {
    eyebrow: 'Verity for interior design firms',
    headline: 'The design hours are billed. The hours spent finding the tile are not.',
    lede:
      'A design firm sells design and spends its time on sourcing, coordination and site. Verity shows where studio hours actually go, project by project.',
    note: 'Verity runs the firm. Design and visualisation tools stay where they are.',
    panel: {
      title: 'Studio',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Live projects', value: '11', note: '7 designers' },
        { label: 'Studio hours logged', value: '1,120', note: 'across all projects' },
        { label: 'Hours against fee', value: '58%', note: 'remainder unbilled' },
        { label: 'Projects over hour budget', value: '4', note: 'fee already fixed' },
      ],
      rows: [
        { name: '4 projects past their hour budget', meta: 'Fee fixed, work continuing', active: true },
        { name: '42% of studio hours not against a fee line', meta: 'Sourcing and coordination', active: true },
        { name: '2 designers on 5 projects each', meta: 'Concurrency above sustainable', active: true },
        { name: 'Vendor delays affecting 3 projects', meta: 'Same two vendors', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own studio in this shape.',
    },
  },

  overview: {
    heading: 'A design firm sells a fee and spends hours, and the two are measured separately.',
    paragraphs: [
      'An interior design firm with several designers and many concurrent projects has an economics problem that a solo designer does not. The fee is agreed per project, usually fixed or percentage-based, while the cost is studio hours — and forty-two per cent of those hours going to sourcing, vendor coordination and site attendance means the firm is selling design and spending its time on procurement.',
      'The second characteristic is concurrency. Designers carry several projects at once, and two designers on five projects each is not a workload number but a quality and timeline risk, because every project competes for the same attention at the same milestones.',
      'The third is that vendor performance is a firm-level pattern, not a project-level accident. Delays affecting three projects traced to the same two vendors is a sourcing decision the firm can make once rather than a recurring project surprise.',
      'The fourth is that project profitability is only knowable if hours are attributed. Four projects past their hour budget on a fixed fee is money already lost, and it is only visible when hours sit against the project rather than in a timesheet nobody reads.',
      'Verity attributes studio hours to projects and activities, holds concurrency per designer, and records vendor performance across the whole firm.',
    ],
  },

  terminology: [
    ['Projects, phases, deliverables', 'Work'],
    ['Designers, coordinators, principals', 'People'],
    ['Studio hours and utilisation', 'Workflows'],
    ['Clients, vendors, contractors', 'Relationships'],
    ['Specifications and selections', 'Records'],
    ['Fees, budgets, profitability', 'Orders'],
    ['Approvals and spend authority', 'Control'],
  ],

  challengesHeading: 'Fixed fees, variable hours, shared people.',
  challengesLede:
    'Firm-scale design difficulties come from many projects competing for one studio.',
  challenges: [
    { problem: 'Sourcing hours are invisible in the fee', detail: 'Time spent finding, comparing and chasing materials is real cost against a design fee.', outcome: 'Hours are attributed to activity as well as project, so sourcing cost is measurable.' },
    { problem: 'Fixed-fee projects run past their hour budget', detail: 'Work continues, the fee does not move, and the loss is found at project close.', outcome: 'Hours run against a project budget with overrun visible while the project is live.' },
    { problem: 'Designers carry too many concurrent projects', detail: 'Concurrency rises quietly and shows up as slipped milestones across several projects at once.', outcome: 'Project load per designer is visible, so allocation is a decision rather than an accumulation.' },
    { problem: 'Vendor problems repeat across projects', detail: 'Each delay is handled as a project issue and the pattern across the firm is never seen.', outcome: 'Vendor performance is recorded at firm level across every project they touch.' },
    { problem: 'Client revisions are absorbed', detail: 'Additional rounds beyond the agreed scope consume studio hours without a fee conversation.', outcome: 'Revision rounds are counted against the agreed number with additional rounds flagged.' },
    { problem: 'Project profitability is only known afterwards', detail: 'Fee, hours, vendor margin and site time are reconciled long after the decisions that set them.', outcome: 'Fee against attributed cost is current, so a project can be corrected while it runs.' },
  ],

  modulesLede: 'One system across studio time, projects, vendors and fees.',
  modules: [
    { id: 'people', title: 'Designers, coordinators and studio load', line: 'Each person carries their projects, concurrency, hours logged and allocation across the coming weeks.', why: 'The firm’s cost is people and its risk is how many projects each one carries.', example: 'Two designers on five projects each.' },
    { id: 'workflows', title: 'Studio hours, activities and utilisation', line: 'Hours are attributed to project, phase and activity, distinguishing design, sourcing, coordination and site.', why: 'A design fee that funds procurement time is priced wrongly, and only attribution shows it.', example: 'Forty-two per cent of hours not against a fee line.' },
    { id: 'work', title: 'Projects, phases and deliverables', line: 'Each project carries its phases, deliverables, hour budget, revision allowance and current position.', why: 'A fixed fee needs an hour budget to be a commercial position rather than a hope.', example: 'Four projects past their hour budget.' },
    { id: 'relationships', title: 'Clients, vendors and contractors', line: 'Vendors carry performance across every project they touch: lead times quoted against delivered, quality issues, and pricing.', why: 'Vendor patterns are firm-level facts hidden inside project-level incidents.', example: 'Delays on three projects traced to two vendors.' },
    { id: 'orders', title: 'Fees, budgets and project margin', line: 'Fee stages, procurement margin, additional rounds and attributed cost sit against the project.', why: 'Profitability is fee minus attributed hours and procurement position, and both must be current.', example: 'Fee against attributed cost, live per project.' },
    { id: 'records', title: 'Specifications, selections and approvals', line: 'Specifications, selections, revisions and client approvals attach to the project and room.', why: 'What was approved and when is what governs a later dispute about a change.', example: 'Client approval recorded against the selection it covers.' },
    { id: 'intelligence', title: 'Utilisation, margin and vendor reporting', line: 'Studio utilisation, hours by activity, project margin, revision counts and vendor performance come from the records.', why: 'The firm is a capacity business selling fixed fees and needs both sides measured.', example: 'Hours by activity across all live projects.' },
    { id: 'ai', title: 'Ask the studio a question', line: 'Verity AI answers from your own project, hours, vendor and fee records, respects permissions, and can create assigned follow-ups.', why: 'The useful questions are about where hours went and which projects are losing.', example: '"Which projects are past their hour budget?" returns four with fee position attached.' },
    { id: 'communication', title: 'Client and vendor correspondence', line: 'Approvals, revision requests and vendor chases attach to the project and selection they concern.', why: 'A revision request is the start of a fee conversation and needs to be on the record.', example: 'An additional revision round recorded against the allowance.' },
    { id: 'control', title: 'Spend authority and approvals', line: 'One permission model and one audit trail covering procurement commitments and client-facing approvals.', why: 'Committing client money needs a defined authority in a firm with several designers.', example: 'Procurement commitments above a threshold routed for approval.' },
    { id: 'locations', title: 'Sites, studio and storage', line: 'Site visits, installations and material holding are recorded against projects.', why: 'Site time is a cost that rarely appears in a design fee.', example: 'Site hours per project against fee.' },
  ],

  workflowsHeading: 'Win, resource, design, source, install.',
  workflowsLede: 'These already happen. Recorded, the firm can see which projects pay.',
  workflows: [
    { name: 'Project setup and resourcing', steps: ['Fee and scope agreed with revision allowance', 'Hour budget set by phase', 'Designer allocated against current concurrency', 'Milestones scheduled', 'Vendors identified from performance history'], note: 'Setting an hour budget at the start is what makes overrun detectable later.' },
    { name: 'Design and revision cycles', steps: ['Deliverables produced and issued', 'Client feedback recorded', 'Revision counted against allowance', 'Additional rounds flagged for fee discussion', 'Approval recorded per selection'], note: 'Counting rounds is the difference between an allowance and an open commitment.' },
    { name: 'Sourcing and procurement', steps: ['Selections specified', 'Vendors quoted with lead times', 'Orders committed within authority', 'Delivery tracked against the site programme', 'Vendor performance recorded on receipt'], note: 'Recording performance on receipt is what builds the firm-level vendor picture.' },
    { name: 'Studio load review', steps: ['Concurrency per designer reviewed', 'Upcoming milestones mapped against capacity', 'Clashes identified', 'Reallocation or timeline decisions made', 'Allocation updated'], note: 'Milestone clashes across projects are the usual cause of firm-wide slippage.' },
    { name: 'Project close and margin', steps: ['Final hours attributed', 'Procurement position closed', 'Fee and additional rounds invoiced', 'Margin calculated against the budget', 'Learning recorded for the next fee'], note: 'The closed project is where the next fee proposal comes from.' },
  ],

  ai: {
    heading: 'Ask where the hours went.',
    lede: 'Verity AI reads the same project, hours, vendor and fee records the firm creates as it works. It answers from your own studio, respects permissions, and can turn an answer into a reallocation or a fee conversation.',
    panelMeta: 'Grounded in your studio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which projects are past their hour budget?',
      'How many studio hours went to sourcing this month?',
      'Which designers are carrying the most concurrent projects?',
      'Which vendors have missed quoted lead times across projects?',
      'Which projects have exceeded their revision allowance?',
      'What is margin by project against attributed hours?',
      'Which milestones clash across designers next month?',
      'What is site time per project against fee?',
      'Summarise studio utilisation and project margin.',
    ],
  },

  automationHeading: 'Budget, load and vendors.',
  automationLede: 'Each runs from the firm’s own records at the point the condition is met.',
  automations: [
    { trigger: 'Project hours reach a share of the budget', steps: ['Flagged with phase and fee position', 'Principal notified', 'Scope or fee decision recorded'] },
    { trigger: 'A revision round exceeds the allowance', steps: ['Flagged against the project', 'Fee implication raised', 'Client conversation recorded'] },
    { trigger: 'Designer concurrency passes a threshold', steps: ['Load flagged with upcoming milestones', 'Reallocation options surfaced', 'Allocation updated'] },
    { trigger: 'A vendor misses a quoted lead time', steps: ['Recorded against the vendor and project', 'Affected milestones flagged', 'Vendor performance updated'] },
    { trigger: 'A procurement commitment exceeds authority', steps: ['Routed for approval', 'Decision recorded', 'Order released or revised'] },
  ],

  intelligenceHeading: 'What the firm can see.',
  intelligenceLede: 'Utilisation, margin and vendor performance from working records.',
  intelligence: [
    { area: 'Studio', points: ['Hours by project, phase and activity', 'Utilisation per designer', 'Concurrency and milestone clashes', 'Sourcing and site time against fee'] },
    { area: 'Projects', points: ['Hours against budget', 'Revision rounds against allowance', 'Milestone adherence', 'Live margin per project'] },
    { area: 'Vendors', points: ['Quoted against delivered lead times', 'Quality issues by vendor', 'Pricing comparison across projects', 'Delay impact on milestones'] },
    { area: 'Commercial', points: ['Fee against attributed cost', 'Procurement margin', 'Additional rounds invoiced', 'Margin by project type and fee basis'] },
  ],
  intelligenceNote: 'Verity records the firm’s operations. Design and visualisation tools continue as they are.',

  rolesHeading: 'One firm, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Principal', question: 'Which projects are paying?', focus: 'Fee against attributed cost, hour budgets, studio utilisation, vendor performance.' },
    { role: 'Design lead', question: 'Can the studio carry this month?', focus: 'Concurrency per designer, milestone clashes, allocation, deliverables outstanding.' },
    { role: 'Designer', question: 'What is on my projects this week?', focus: 'Deliverables, revision rounds, selections awaiting approval, site visits.' },
    { role: 'Procurement coordinator', question: 'What is ordered and when does it land?', focus: 'Orders committed, vendor lead times, deliveries against programme, performance issues.' },
  ],

  useCasesHeading: 'What interior design firms use Verity for',
  useCases: [
    { name: 'Seeing where studio hours go', body: 'Hours attributed to design, sourcing, coordination and site, so a fee that quietly funds procurement time becomes visible and priceable.' },
    { name: 'Protecting fixed-fee margin', body: 'Hour budgets per project with overrun visible while the project is live rather than reconciled at close.' },
    { name: 'Managing concurrency', body: 'Project load per designer with upcoming milestone clashes, so allocation is decided rather than accumulated.' },
    { name: 'Firm-level vendor performance', body: 'Lead times, quality and pricing recorded across every project a vendor touches, turning repeated project incidents into one sourcing decision.' },
    { name: 'Counting revision rounds', body: 'Rounds tracked against the agreed allowance with additional rounds flagged for a fee conversation.' },
    { name: 'Live project margin', body: 'Fee, attributed hours and procurement position current, so a losing project can be corrected while it runs.' },
    { name: 'Asking about the studio', body: 'Plain-language questions across hours, projects, vendors and margin, with reallocation and follow-ups raised in the same step.' },
  ],

  migration: 'Design and visualisation tools continue and are mapped during implementation. Projects, phases, fee structures, hour histories, designer allocations, vendor records and specifications are brought across.',

  faqHeading: 'Questions interior design firms ask',
  faqs: [
    ['What can AI software do for an interior design firm?', 'Verity AI answers questions from your own project, hours, vendor and fee records: which projects are past their hour budget, how many hours went to sourcing, which designers are carrying the most concurrent projects, which vendors have missed quoted lead times. Each answer can become a reallocation or a fee conversation.'],
    ['How is this different from tracking time in a spreadsheet?', 'Hours sit against the project, phase and activity in the same system that holds the fee, the vendor orders and the deliverables. That is what makes live margin possible instead of a reconciliation after the project closes.'],
    ['Why separate sourcing hours from design hours?', 'Because a design fee is priced as design. When forty per cent of studio time is sourcing and coordination, the firm is selling one thing and spending its capacity on another, and the fee basis needs to change.'],
    ['How does it help with designer workload?', 'Project load per designer is visible alongside upcoming milestones, so concurrency is a decision made in advance rather than a condition discovered when several projects slip at once.'],
    ['Can it show vendor patterns?', 'Vendor performance is recorded across every project they supply, so lead-time misses and quality issues aggregate into a firm-level view rather than staying inside individual project histories.'],
    ['Does it handle revision limits?', 'Revision rounds are counted against the allowance agreed in the fee, and additional rounds are flagged so the commercial conversation happens rather than the hours being absorbed.'],
    ['Does it replace our design software?', 'No. Design and visualisation tools continue as they are. Verity holds the firm around them — projects, hours, resourcing, vendors, fees and margin.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of fee structures, phases, activity categories and vendor records, configuration, migration, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the hours that are not in the fee.',
  ctaLede: 'They are usually sourcing and site. Tell us how studio time is recorded today.',

  related: ['interior-designers', 'architects', 'architecture-firms', 'home-builders', 'design-agencies', 'furniture-manufacturers'],
};
