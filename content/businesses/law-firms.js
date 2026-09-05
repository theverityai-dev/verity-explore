export default {
  slug: 'law-firms',
  status: 'published',
  plural: 'law firms',
  subject: 'law firm',

  seo: {
    title: 'AI business management software for law firms | Verity',
    description:
      'Verity connects matters, clients, deadlines, documents, approvals and fee recovery into one system, so engagement health is visible before it becomes a write-off.',
    keywords: [
      'AI software for law firms',
      'legal practice management software',
      'matter management software',
      'law firm document and deadline management',
      'business software for lawyers',
    ],
  },

  hero: {
    eyebrow: 'Verity for law firms',
    headline: 'A matter that has quietly consumed twice its budget looks exactly like a healthy one.',
    lede:
      'Until someone reviews it. Verity holds the client, the matter, the work inside it, the deadlines, the documents and the fee position on one record, so engagement health is visible while it can still be acted on.',
    note: 'Verity manages the practice. It does not provide legal advice or draft documents.',
    panel: {
      title: 'Practice',
      meta: 'All matters · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active matters', value: '148', note: 'across 6 practice areas' },
        { label: 'Deadlines in 14 days', value: '31', note: '4 without an owner' },
        { label: 'Unbilled work', value: '₹62 L', note: 'older than 60 days' },
        { label: 'Fees outstanding', value: '₹1.1 Cr', note: '₹34 L beyond 90 days' },
      ],
      rows: [
        { name: '4 statutory deadlines in 14 days with no owner', meta: 'Two filings · two responses', active: true },
        { name: 'Matter consumed 210% of estimated effort', meta: 'Corporate · no scope variation recorded', active: true },
        { name: '₹62 L of work unbilled beyond 60 days', meta: '11 matters · 4 partners', active: true },
        { name: 'Engagement letter unsigned on active matter', meta: 'Work started 18 days ago', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'The firm sells attention, and attention is the least measured thing in it.',
    paragraphs: [
      'A law firm has a simple commercial shape and a difficult operational one. A client engages the firm, a matter is opened, work is done against it by people whose time is the product, deadlines must be met, documents must be produced and retained, and eventually a bill is raised and — with any luck — paid. Every part of that is well understood by the people doing it and almost none of it is visible to the firm as a whole.',
      'The characteristic failure is silent. A matter drifts past its estimate because nobody was watching effort against scope. A junior does work that was never within the engagement and nobody recorded a variation. Work sits unbilled for two months because the partner meant to review it. None of these announce themselves; they surface at a quarterly review, by which point the money is gone.',
      'The second characteristic failure is a deadline. Statutory and court deadlines sit in individual calendars rather than against the matter they belong to, which means their coverage depends on whoever entered them still being available and still remembering.',
      'The third is documents. The version that matters is in a folder whose naming convention one person understands, and it will be needed on the day that person is in court.',
      'Verity holds the client, the matter, the work, the deadlines, the documents and the fee position as connected records with one permission model and one history. The firm gets a view of its own engagements without a partner having to assemble one.',
    ],
  },

  terminology: [
    ['Clients, opposing parties, referrers', 'Relationships'],
    ['Matters, engagements, mandates', 'Work'],
    ['Filings, hearings, statutory deadlines', 'Workflows'],
    ['Drafts, contracts, evidence, opinions', 'Records'],
    ['Partners, associates, paralegals', 'People'],
    ['Conflict checks, approvals, sign-offs', 'Control'],
    ['Offices, practice areas, teams', 'Locations'],
  ],

  challengesHeading: 'Everything expensive happens quietly.',
  challengesLede:
    'A law firm rarely fails loudly. It leaks — through unbilled work, unrecorded scope, missed reviews and deadlines held in one person’s head.',
  challenges: [
    {
      problem: 'Engagement health is discovered late',
      detail:
        'A matter that has consumed twice its estimated effort is indistinguishable from a healthy one until somebody reviews it, usually at quarter end.',
      outcome:
        'Effort recorded against the matter’s scope makes overrun a visible state rather than a quarterly discovery.',
    },
    {
      problem: 'Deadlines live in individual calendars',
      detail:
        'A statutory date is in the associate’s calendar. If they are on leave, in court or have left the firm, the date is unowned and nobody knows.',
      outcome:
        'Deadlines are workflow steps against the matter with an owner and an escalation path, independent of any individual’s calendar.',
    },
    {
      problem: 'Work sits unbilled',
      detail:
        'Effort accumulates, the partner intends to review it, and two months later it is harder to bill and harder to justify.',
      outcome:
        'Unbilled work is aged against the matter, so it surfaces as an exception at thirty days rather than at ninety.',
    },
    {
      problem: 'Scope creeps without a variation',
      detail:
        'Additional work is done because the client asked and it seemed reasonable. It was never agreed in writing, and it is not recoverable.',
      outcome:
        'Scope changes are approvals against the matter, so out-of-scope work is either agreed or is a recorded decision not to charge.',
    },
    {
      problem: 'Documents are findable by one person',
      detail:
        'The current version, the executed copy and the counterpart live in a structure only the person who created it understands.',
      outcome:
        'Documents attach to the matter with the same permissions and history as everything else, so retrieval does not depend on availability.',
    },
    {
      problem: 'Capacity is a feeling',
      detail:
        'Which associates are overloaded and which have room is known anecdotally, so work is allocated to whoever answers first.',
      outcome:
        'Assigned work per person is a record, so allocation is a decision made against what people are already carrying.',
    },
  ],

  modulesLede:
    'Verity runs the practice around the law. These are the parts a firm works with.',
  modules: [
    {
      id: 'work',
      title: 'Matters and the work inside them',
      line:
        'A matter is work with a client, a scope, an owner, a state and a history, containing the tasks, deadlines and effort recorded against it.',
      why:
        'The matter is the firm’s unit of commerce and its unit of delivery. When it is not a record, neither profitability nor progress can be seen.',
      example:
        'A corporate matter shows the estimate, the effort recorded, the scope variations approved and the unbilled position, on one record.',
    },
    {
      id: 'relationships',
      title: 'Clients, referrers and counterparties',
      line:
        'Clients are records with their matters, engagement terms, contacts, fee position and full interaction history.',
      why:
        'A firm’s most valuable asset is its client relationships, and they are usually held personally by the partner who brought them in.',
      example:
        'A client with four matters across three practice areas is one record, so their total exposure and total fee position are visible.',
    },
    {
      id: 'workflows',
      title: 'Deadlines, filings and sign-offs',
      line:
        'Statutory dates, hearings, filings, approvals and sign-offs are defined steps against the matter with an owner and an escalation path.',
      why:
        'A missed deadline is the one operational failure a firm cannot absorb, and it is currently protected by individual memory.',
      example:
        'A filing due in fourteen days with no owner assigned is an exception on the firm’s view, not a calendar entry nobody can see.',
    },
    {
      id: 'records',
      title: 'Documents, drafts and executed copies',
      line:
        'Documents attach to the matter they belong to with version history, permissions and retention following the same model as every other record.',
      why:
        'Legal documents are needed years later, urgently, by someone other than the person who filed them.',
      example:
        'The executed counterpart of an agreement from three years ago is on the matter record rather than in a folder structure.',
    },
    {
      id: 'people',
      title: 'Partners, associates and paralegals',
      line:
        'The team is modelled once, and every matter, task and document shows who owns it and who last acted on it.',
      why:
        'Allocation, supervision and succession all depend on knowing who is carrying what, which is currently a matter of impression.',
      example:
        'Assigned matters and open tasks per associate, so a new instruction goes to someone with capacity rather than to whoever replied.',
    },
    {
      id: 'control',
      title: 'Conflicts, access and audit',
      line:
        'One permission model and one audit trail across every record, with access to a matter set deliberately rather than by default.',
      why:
        'Confidentiality obligations are absolute, and information barriers are only real if they are enforced by the system.',
      example:
        'A matter can be restricted to its team, and every access to it is on the trail.',
    },
    {
      id: 'communication',
      title: 'Correspondence attached to the matter',
      line:
        'Comments, notes, notifications and activity attach to the matter or client they concern.',
      why:
        'Matter context that lives in individual inboxes is unavailable exactly when the person is unavailable.',
      example:
        'The client’s instruction to hold a filing sits on the matter, visible to the supervising partner rather than only to the associate who took the call.',
    },
    {
      id: 'intelligence',
      title: 'Practice reporting from live records',
      line:
        'Matter health, effort against estimate, unbilled ageing, realisation, deadline compliance and workload distribution come from the operational records.',
      why:
        'Firms typically know their billings and almost nothing about what produced them, because everything else would require assembling.',
      example:
        'Unbilled work aged by matter and by partner, current rather than compiled for a quarterly meeting.',
    },
    {
      id: 'ai',
      title: 'Ask the practice a question',
      line:
        'Verity AI answers from the firm’s own matter, deadline, document and fee records, respects each user’s permissions and confidentiality boundaries, and can create assigned follow-ups.',
      why:
        'The questions worth asking cross matters, people and money at once, which is why they are usually asked at a partners’ meeting rather than answered.',
      example:
        '"Which matters have consumed more than their estimate without a recorded variation?" returns seven, and one instruction assigns reviews to the responsible partners.',
    },
    {
      id: 'locations',
      title: 'Offices, practice areas and teams',
      line:
        'Organisational units roll into the firm, with permissions, reporting and exceptions following the same structure.',
      why:
        'A multi-office or multi-practice firm cannot compare performance unless every unit records work identically.',
      example:
        'Matter volume, realisation and deadline compliance by practice area, from one set of records.',
    },
    {
      id: 'commandCentre',
      title: 'The firm as it is running',
      line:
        'One live view of what is moving, what is blocked, who owns it and what needs attention.',
      why:
        'Partner visibility of the firm is currently a monthly meeting, which is a reconstruction rather than a view.',
      example:
        'Deadlines approaching, matters over estimate, unbilled ageing and unowned tasks in one picture.',
    },
  ],

  workflowsHeading: 'From instruction to recovery, recorded at each step.',
  workflowsLede:
    'These sequences already run in your firm. In Verity each step is a state on a record, so the ones that stall are visible before they cost money.',
  workflows: [
    {
      name: 'New instruction to open matter',
      steps: [
        'Enquiry recorded against a client or prospective client record',
        'Conflict check performed and its outcome recorded',
        'Scope and fee basis agreed and documented',
        'Engagement letter issued and its signature tracked',
        'Matter opened with owner, team and access set',
        'Initial tasks and deadlines created against the matter',
      ],
      note:
        'Work starting before the engagement letter is signed becomes a visible exception rather than a discovered risk.',
    },
    {
      name: 'Deadline management',
      steps: [
        'Statutory or court date recorded against the matter',
        'Owner assigned and preparatory tasks created',
        'Reminders raised at defined intervals',
        'Escalation to the supervising partner if unowned or unactioned',
        'Completion recorded against the deadline',
      ],
      note:
        'Coverage stops depending on an individual calendar and becomes a firm-level obligation with an escalation path.',
    },
    {
      name: 'Scope variation',
      steps: [
        'Additional work identified as outside the agreed scope',
        'Variation raised with the effort and basis attached',
        'Approval routed to the responsible partner',
        'Client agreement recorded against the matter',
        'Scope and estimate updated, or a decision not to charge recorded',
      ],
      note:
        'Out-of-scope work becomes either recoverable or a documented decision, rather than an unnoticed cost.',
    },
    {
      name: 'Billing and recovery',
      steps: [
        'Unbilled effort aged against the matter',
        'Draft bill prepared and routed for partner review',
        'Write-offs above the threshold routed for approval',
        'Bill issued and recorded against the client',
        'Payment applied and the ageing updated',
        'Collection follow-up assigned where terms are exceeded',
      ],
      note:
        'Ageing starts when the work is done rather than when the bill is finally raised.',
    },
    {
      name: 'Matter review',
      steps: [
        'Effort compared against estimate and scope',
        'Deadlines and their completion reviewed',
        'Unbilled and outstanding positions checked',
        'Risks and exceptions raised with owners',
        'Outcome recorded on the matter',
      ],
      note:
        'The review is a check against records rather than a reconstruction of what happened.',
    },
    {
      name: 'Matter closure and retention',
      steps: [
        'Final bill issued and settled',
        'Documents finalised and attached to the matter',
        'Retention period applied to the record',
        'Access adjusted to closed-matter permissions',
        'Client record updated with the outcome',
      ],
      note:
        'Closure produces a retrievable record rather than a folder that has to be searched years later.',
    },
  ],

  ai: {
    heading: 'Ask what the firm cannot currently see.',
    lede:
      'Verity AI reads the same matter, deadline, document and fee records the firm runs on. It answers from your own practice, respects each user’s permissions and matter access, and can turn an answer into work assigned to the responsible person.',
    panelMeta: 'Grounded in your matter records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide legal advice.',
    questions: [
      'Which matters have exceeded their estimate without a recorded variation?',
      'Which deadlines fall in the next fourteen days, and which have no owner?',
      'How much work is unbilled beyond sixty days, and on which matters?',
      'Which clients are outstanding beyond ninety days?',
      'Which active matters have no signed engagement letter?',
      'How is work distributed across associates right now?',
      'Which practice areas have the highest realisation this quarter?',
      'Which matters have had no activity recorded in thirty days?',
      'Summarise the position across active matters.',
    ],
  },

  automationHeading: 'The reviews that never happen on time.',
  automationLede:
    'These run from the matter records at the moment the condition occurs.',
  automations: [
    {
      trigger: 'A deadline approaches without an owner',
      steps: [
        'Exception raised against the matter',
        'Assignment task created for the supervising partner',
        'Escalated at defined intervals as the date approaches',
      ],
    },
    {
      trigger: 'Effort on a matter passes its estimate',
      steps: [
        'Matter flagged as over estimate',
        'Review task assigned to the responsible partner',
        'Scope variation raised or a write-off decision recorded',
      ],
    },
    {
      trigger: 'Work remains unbilled beyond the threshold',
      steps: [
        'Unbilled position aged on the matter',
        'Billing task assigned to the responsible partner',
        'Escalated to the practice head past the second threshold',
      ],
    },
    {
      trigger: 'A matter is opened',
      steps: [
        'Conflict check task created and recorded',
        'Engagement letter tracked to signature',
        'Access restricted to the matter team',
        'Initial tasks and deadlines created',
      ],
    },
    {
      trigger: 'A client balance passes its payment terms',
      steps: [
        'Balance aged on the client record',
        'Collection follow-up assigned to the relationship partner',
        'Escalated with the matter history attached',
      ],
    },
    {
      trigger: 'A matter has no recorded activity for a defined period',
      steps: [
        'Dormancy flagged against the matter',
        'Review task assigned to the owner',
        'Closure or reactivation recorded',
      ],
    },
  ],

  intelligenceHeading: 'What the partners can actually see.',
  intelligenceLede:
    'Practice performance drawn from the records the firm creates as it works.',
  intelligence: [
    {
      area: 'Matters',
      points: [
        'Active matters by practice area, partner and state',
        'Effort recorded against estimate',
        'Matters over estimate without a recorded variation',
        'Dormant matters with no recent activity',
      ],
    },
    {
      area: 'Deadlines',
      points: [
        'Deadlines approaching, by matter and owner',
        'Deadlines without an assigned owner',
        'Completion against due date historically',
        'Escalations raised and how they resolved',
      ],
    },
    {
      area: 'Fees',
      points: [
        'Unbilled work aged by matter and partner',
        'Bills issued against work recorded',
        'Write-offs and their approval trail',
        'Realisation by practice area and client',
      ],
    },
    {
      area: 'Clients',
      points: [
        'Total exposure and fee position per client',
        'Outstanding by client with ageing bands',
        'Matter volume by client over time',
        'Referral sources and their contribution',
      ],
    },
    {
      area: 'People',
      points: [
        'Matters and tasks assigned per person',
        'Effort recorded by individual and practice area',
        'Supervision coverage across matters',
        'Distribution of load across the team',
      ],
    },
    {
      area: 'Compliance',
      points: [
        'Conflict checks recorded on opened matters',
        'Engagement letters outstanding on active matters',
        'Document completeness and retention states',
        'Access history on restricted matters',
      ],
    },
  ],
  intelligenceNote:
    'These are practice-management records. Verity holds no legal reasoning and takes no view on the substance of a matter.',

  rolesHeading: 'One firm, five different questions.',
  rolesLede:
    'Everyone works from the same records, with matter access set deliberately.',
  roles: [
    {
      role: 'Managing partner',
      question: 'Is the firm healthy?',
      focus: 'Matters over estimate, unbilled ageing, realisation by practice area, outstanding fees, workload distribution.',
    },
    {
      role: 'Practice head',
      question: 'What is at risk in my area?',
      focus: 'Deadlines approaching, matters over estimate, dormant matters, capacity across the team.',
    },
    {
      role: 'Responsible partner',
      question: 'What needs my decision?',
      focus: 'Scope variations, draft bills for review, write-off approvals, client balances, matters requiring supervision.',
    },
    {
      role: 'Associate',
      question: 'What do I owe, and by when?',
      focus: 'Assigned matters and tasks, deadlines owned, documents outstanding, effort recorded.',
    },
    {
      role: 'Practice manager',
      question: 'What is stalled or unowned?',
      focus: 'Unowned deadlines, unsigned engagement letters, unbilled ageing, exceptions awaiting resolution.',
    },
  ],

  useCasesHeading: 'What firms use Verity for',
  useCases: [
    {
      name: 'Matter management',
      body: 'A matter as a record carrying its client, scope, team, effort, deadlines, documents and fee position, so engagement health is visible rather than inferred.',
    },
    {
      name: 'Deadline coverage',
      body: 'Statutory and court dates as workflow steps against the matter with owners and escalation, independent of any individual’s calendar.',
    },
    {
      name: 'Scope and variation control',
      body: 'Out-of-scope work raised as a variation with an approval, so additional effort is either agreed or is a recorded decision.',
    },
    {
      name: 'Unbilled and recovery management',
      body: 'Work aged from the moment it is recorded, so unbilled effort surfaces at thirty days rather than at a quarterly review.',
    },
    {
      name: 'Document and version control',
      body: 'Drafts, executed copies and counterparts attached to the matter with version history, permissions and retention.',
    },
    {
      name: 'Conflicts and information barriers',
      body: 'Conflict checks recorded at matter opening and matter access set deliberately, with every access on the audit trail.',
    },
    {
      name: 'Workload and allocation',
      body: 'Assigned matters and open tasks per person, so new instructions go to available capacity rather than to whoever answered.',
    },
    {
      name: 'Client relationship view',
      body: 'Total matters, exposure, fee position and history per client, held by the firm rather than by the partner who brought them in.',
    },
    {
      name: 'Asking the practice questions',
      body: 'Plain-language questions across matters, deadlines, effort and fees, with follow-ups assigned in the same step.',
    },
  ],

  migration:
    'The matter list, the document store, the deadline calendar and whatever billing arrangement the firm runs are mapped during implementation. Active matters, clients and documents are brought across, and Verity is introduced alongside the accounting system rather than replacing it.',

  faqHeading: 'Questions firms ask',
  faqs: [
    [
      'Does Verity provide legal advice or draft documents?',
      'No. Verity manages the practice around the law: matters, deadlines, documents, approvals, workload and fee recovery. It holds no legal reasoning and takes no view on the substance of a matter.',
    ],
    [
      'What can AI software do for a law firm?',
      'Verity AI answers practice questions from your own records: which matters have exceeded their estimate without a recorded variation, which deadlines in the next fortnight have no owner, how much work is unbilled beyond sixty days, which active matters have no signed engagement letter. Each answer can become work assigned to the responsible person.',
    ],
    [
      'How does Verity handle deadlines?',
      'A statutory or court date is a workflow step against the matter with an assigned owner, preparatory tasks, reminders and an escalation path. Coverage stops depending on an individual’s calendar and becomes an obligation the firm can see.',
    ],
    [
      'Can it show which matters are unprofitable?',
      'It shows effort recorded against the agreed estimate and scope, variations approved or not, and the unbilled and outstanding positions. That is what makes an overrun visible while it can still be discussed with the client.',
    ],
    [
      'How is confidentiality handled?',
      'Verity has one permission model and one audit trail. Matter access is set deliberately rather than by default, so a matter can be restricted to its team, and every access is recorded.',
    ],
    [
      'Does Verity replace our accounting or billing software?',
      'No. Verity holds the operational side — matters, work, deadlines, documents, unbilled ageing and collection follow-up — and is introduced alongside your existing accounting arrangements rather than in place of them.',
    ],
    [
      'Can it help with workload allocation?',
      'Assigned matters and open tasks per person are records, so a new instruction can be allocated against what people are already carrying rather than to whoever responded first.',
    ],
    [
      'Is it suitable for a small firm?',
      'A four-partner firm has the same silent failures as a large one — unbilled work, unrecorded scope, deadlines in personal calendars — and less administrative capacity to catch them. Larger firms use the same structure across offices and practice areas.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the firm actually works, configuration, migration of matters, clients and documents, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with unbilled work or with deadline ownership.',
  ctaLede:
    'Those two carry most of a firm’s avoidable loss and most of its avoidable risk. Tell us which concerns you more and we will show you what it looks like in Verity.',

  related: ['accounting-firms', 'ca-firms', 'consulting-firms', 'architecture-firms', 'recruitment-agencies', 'it-services-companies'],
};
