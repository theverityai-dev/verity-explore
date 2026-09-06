export default {
  slug: 'design-agencies',
  status: 'published',
  plural: 'design agencies',
  subject: 'design agency',

  seo: {
    title: 'AI business management software for design agencies | Verity',
    description:
      'Verity connects revision rounds against allowance, asset handover and licensing, speculative pitch cost, designer capacity and project margin into one system.',
    keywords: [
      'AI software for design agencies',
      'design studio management software',
      'revision round and asset licensing tracking',
      'designer capacity and project margin software',
    ],
  },

  hero: {
    eyebrow: 'Verity for design agencies',
    headline: 'The third round was free. So were the fourth and the fifth.',
    lede:
      'Design work is priced in rounds and delivered in as many as it takes. Verity counts the rounds, records what was licensed and costs the pitch.',
    note: 'Verity runs the studio. Design tools and asset storage stay where they are.',
    panel: {
      title: 'Studio',
      meta: 'This quarter',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active projects', value: '24', note: '₹1.9 Cr contracted' },
        { label: 'Rounds over allowance', value: '31 deliverables', note: 'unbilled revision effort' },
        { label: 'Assets unlicensed', value: '18', note: 'used beyond agreed scope' },
        { label: 'Pitch effort', value: '460 hours', note: 'this quarter' },
      ],
      rows: [
        { name: '31 deliverables past their agreed revision allowance', meta: 'Roughly 210 unbilled hours', active: true },
        { name: '18 assets in use beyond the licensed scope', meta: 'Stock and font licences', active: true },
        { name: '460 hours of pitch effort this quarter', meta: 'Against two wins', active: true },
        { name: 'Handover files not delivered on closed projects', meta: '6 projects · final payment held', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own studio in this shape.',
    },
  },

  overview: {
    heading: 'The work is priced in rounds and delivered in as many as the client needs.',
    paragraphs: [
      'A design agency quotes a project with an assumed number of revision rounds and then delivers as many as it takes to get an approval. Every round beyond the allowance is unbilled creative effort, and it is given because the alternative is an argument about something subjective. Thirty-one deliverables past allowance is roughly two hundred and ten hours of a studio’s capacity.',
      'The second characteristic is licensing. Design work incorporates fonts, stock and third-party assets under licences with defined scope, and work regularly ends up used beyond that scope. Eighteen assets in use beyond their licence is a liability the agency created on the client’s behalf.',
      'The third is speculative pitching. Studios produce real creative work to win projects, and four hundred and sixty hours of pitch effort against two wins is a cost that never appears against the projects it produced.',
      'The fourth is handover. A project is not finished until working files, assets and licences reach the client, and unhanded-over projects hold final payments.',
      'The fifth is that capacity is people and creative work is not interchangeable across them.',
      'Verity counts rounds, records licences and their scope, costs the pitch and tracks handover to closure.',
    ],
  },

  terminology: [
    ['Projects, deliverables, rounds', 'Work'],
    ['Clients, stakeholders, approvers', 'Relationships'],
    ['Assets, fonts, stock, licences', 'Records'],
    ['Designers, art directors, producers', 'People'],
    ['Scope, approvals, handover', 'Workflows'],
    ['Suppliers, illustrators, photographers', 'Suppliers'],
    ['Studios, teams', 'Locations'],
  ],

  challengesHeading: 'Subjective approval, defined allowance.',
  challengesLede:
    'Design agency difficulties come from an approval process with no natural end and a fee that assumed one.',
  challenges: [
    { problem: 'Revision rounds exceed the allowance uncounted', detail: 'The fourth round happens because arguing about it is worse than doing it, and the effort disappears.', outcome: 'Rounds are counted per deliverable against the agreed allowance, so exceeding it raises a decision.' },
    { problem: 'Licences are exceeded on the client’s behalf', detail: 'Fonts, stock and third-party assets are used beyond the scope their licence covers.', outcome: 'Licences and their scope are recorded against the asset and the project, so exceedance is visible.' },
    { problem: 'Pitch effort is never costed', detail: 'Real creative work is produced speculatively and does not appear against the projects it wins.', outcome: 'Pitches are work with recorded effort, compared against the projects they produced.' },
    { problem: 'Handover holds final payment', detail: 'Working files, assets and licences are delivered when someone remembers, and the final invoice waits.', outcome: 'Handover is a checklist with an owner, tracked against the payment it releases.' },
    { problem: 'Approvers multiply', detail: 'A deliverable is approved by one stakeholder and reopened by another, producing rounds nobody agreed.', outcome: 'Approvers are recorded per deliverable, so an unagreed approver becomes a scope conversation.' },
    { problem: 'Capacity is not interchangeable', detail: 'Creative work is allocated to whoever is free rather than to whoever suits it, and rework follows.', outcome: 'Designers carry skills and current load, so allocation matches capability as well as availability.' },
  ],

  modulesLede: 'One system across rounds, licences, pitching and handover.',
  modules: [
    { id: 'work', title: 'Projects, deliverables and rounds', line: 'Each deliverable is work with a client, an agreed round allowance, recorded rounds, effort and an approval state.', why: 'The round is the unit of pricing and the unit of overrun.', example: 'Thirty-one deliverables past allowance, quantified in hours.' },
    { id: 'records', title: 'Assets, fonts and licences', line: 'Assets carry their licence, scope, expiry and the projects they are used in.', why: 'A licence exceeded on a client project is a liability the agency created.', example: 'Eighteen assets in use beyond their licensed scope.' },
    { id: 'workflows', title: 'Scope, approvals and handover', line: 'Scope changes, approvals, additional rounds and handover move through defined steps with recorded decisions.', why: 'Approval is subjective and needs a recorded approver to have any boundary.', example: 'A deliverable approved by a stakeholder and reopened by another, raised as scope.' },
    { id: 'people', title: 'Designers, art directors and producers', line: 'Staff carry skills, availability and current load, with effort recorded against deliverables and pitches.', why: 'Creative capacity is not interchangeable and mismatched allocation produces rework.', example: 'Allocation matched to capability rather than to whoever is free.' },
    { id: 'relationships', title: 'Clients, stakeholders and approvers', line: 'Clients carry their projects, agreed allowances, approvers, revision behaviour and balances.', why: 'Revision behaviour is a client attribute and belongs in the next quote.', example: 'A client averaging five rounds against a three-round allowance.' },
    { id: 'suppliers', title: 'Illustrators, photographers and specialists', line: 'External contributors carry their engagements, costs, licences granted and reliability.', why: 'Commissioned work carries its own licensing scope that must reach the client.', example: 'Commissioned illustration licence scope recorded and handed over.' },
    { id: 'intelligence', title: 'Rounds, licensing and pitch reporting', line: 'Rounds against allowance, unbilled revision effort, licence exposure, pitch cost against wins, capacity and project margin come from the records.', why: 'A studio’s margin is decided by rounds and pitching, and neither is usually counted.', example: 'Unbilled revision effort by client and by quarter.' },
    { id: 'ai', title: 'Ask the studio a question', line: 'Verity AI answers from your own project, round, asset and pitch records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about rounds consumed and licences exceeded.', example: '"Which deliverables are past their round allowance?" returns thirty-one with the effort quantified.' },
    { id: 'communication', title: 'Feedback on the deliverable', line: 'Feedback, approvals and change requests attach to the deliverable and round they concern.', why: 'Feedback scattered across email is why the next round misses something and becomes another round.', example: 'All feedback for a round in one place before the revision starts.' },
    { id: 'control', title: 'Allowance, licensing and approvals', line: 'One permission model and one audit trail, with additional rounds and licence purchases recorded.', why: 'Both decisions are made by producers under deadline.', example: 'An additional round approved with its cost recorded against the client.' },
    { id: 'orders', title: 'Fees, additional rounds and licence costs', line: 'Project fees, additional round charges and licence purchases are recorded against the project.', why: 'Licence cost and additional rounds are the two recoverable items most often absorbed.', example: 'Licence cost recovered against the project that required it.' },
    { id: 'locations', title: 'Studios and teams', line: 'Teams roll into the agency with projects, capacity and reporting following the same structure.', why: 'Round consumption and margin vary by team and discipline.', example: 'Rounds per deliverable by team and project type.' },
  ],

  workflowsHeading: 'Brief, round, approve, hand over.',
  workflowsLede: 'These already happen. Counted, the studio stops giving away its capacity.',
  workflows: [
    { name: 'Project setup', steps: ['Scope agreed with deliverables and round allowance', 'Approvers named per deliverable', 'Licensing requirements identified', 'Team allocated by skill and availability', 'Fee and additional-round basis recorded'], note: 'Naming the approvers at the start is what gives a subjective process a boundary.' },
    { name: 'Round cycle', steps: ['Deliverable produced and submitted with the round counted', 'Feedback collected in one place', 'Revision produced addressing consolidated feedback', 'Round count compared against allowance', 'Additional rounds raised as a decision — charged or absorbed'], note: 'Consolidating feedback before revising is what keeps the round count from doubling.' },
    { name: 'Licensing', steps: ['Assets identified with licence and scope', 'Licence purchased or confirmed for the intended use', 'Scope recorded against the project', 'Usage beyond scope flagged', 'Licence documentation included at handover'], note: 'A licence exceeded is a liability created on the client’s behalf and rarely noticed until it matters.' },
    { name: 'Pitch', steps: ['Pitch recorded with team, effort and any third-party cost', 'Work produced and submitted', 'Outcome recorded — won, lost, no decision', 'Cost compared against the project won', 'Participation decisions informed by the pattern'], note: 'Speculative creative work is real cost and is almost never set against what it produced.' },
    { name: 'Handover and closure', steps: ['Handover checklist created — files, assets, licences, guidelines', 'Items delivered and recorded', 'Client confirmation received', 'Final invoice released', 'Project closed with learnings recorded'], note: 'Unhanded-over projects hold final payments and stay open in everyone’s head.' },
  ],

  ai: {
    heading: 'Ask what the rounds cost.',
    lede: 'Verity AI reads the same project, round, asset and pitch records the studio creates as it works. It answers across projects, respects permissions, and can turn an answer into scope decisions.',
    panelMeta: 'Grounded in your studio records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which deliverables are past their agreed round allowance?',
      'Which assets are in use beyond their licensed scope?',
      'What did pitching cost this quarter against what it won?',
      'Which clients consume the most rounds?',
      'Which projects have handover outstanding and payment held?',
      'What is margin by project and project type?',
      'Where is capacity mismatched to the work assigned?',
      'Which deliverables were reopened by an unagreed approver?',
      'Summarise round consumption and licence exposure.',
    ],
  },

  automationHeading: 'Rounds and licences.',
  automationLede: 'Each runs from the studio’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A round is submitted', steps: ['Counted against the deliverable allowance', 'Overage flagged with effort quantified', 'Charge or absorb decision raised'] },
    { trigger: 'An asset is used beyond its licence scope', steps: ['Exposure flagged against the project', 'Licence extension or replacement assigned', 'Cost recovered where recoverable'] },
    { trigger: 'A pitch concludes', steps: ['Effort and cost totalled', 'Outcome recorded', 'Cost compared with the project won'] },
    { trigger: 'A project completes', steps: ['Handover checklist created with an owner', 'Items tracked to delivery', 'Final invoice released on confirmation'] },
    { trigger: 'A deliverable is reopened by a new approver', steps: ['Flagged as an unagreed approver', 'Scope conversation assigned', 'Decision recorded'] },
  ],

  intelligenceHeading: 'What the studio can see.',
  intelligenceLede: 'Rounds, licences and pitch cost from the work itself.',
  intelligence: [
    { area: 'Rounds', points: ['Rounds per deliverable against allowance', 'Unbilled revision effort by client', 'Rounds charged against absorbed', 'Round count by project type and team'] },
    { area: 'Licensing', points: ['Assets and licence scope by project', 'Usage beyond scope', 'Licence cost recovered against absorbed', 'Documentation handed over'] },
    { area: 'New business', points: ['Pitch effort and cost by pitch', 'Win rate and value won', 'Cost against income won', 'Senior and creative time consumed'] },
    { area: 'Capacity', points: ['Load by designer and discipline', 'Allocation against capability', 'Rework attributable to mismatch', 'Utilisation by team'] },
    { area: 'Commercial', points: ['Margin by project and type', 'Client revision behaviour', 'Handover outstanding and payment held', 'Additional rounds recovered'] },
  ],
  intelligenceNote: 'Verity records the studio. Design tools and asset storage continue as they are.',

  rolesHeading: 'One studio, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Founder', question: 'Where is the studio giving work away?', focus: 'Rounds against allowance, unbilled revision effort, pitch cost against wins, project margin.' },
    { role: 'Producer', question: 'What is over and what is outstanding?', focus: 'Round counts, feedback consolidation, licences, handover checklists, capacity.' },
    { role: 'Designer', question: 'What am I working on and against what feedback?', focus: 'Assigned deliverables, consolidated feedback, round position, assets and licences.' },
  ],

  useCasesHeading: 'What design agencies use Verity for',
  useCases: [
    { name: 'Round counting', body: 'Rounds counted per deliverable against the agreed allowance, so a fourth round is a decision rather than a habit.' },
    { name: 'Licence scope tracking', body: 'Fonts, stock and commissioned assets recorded with their licence scope, so usage beyond it is visible before it matters.' },
    { name: 'Feedback consolidation', body: 'All feedback on a round in one place before revision starts, which is what keeps a round from becoming two.' },
    { name: 'Pitch costing', body: 'Speculative creative effort recorded and compared against the projects it won.' },
    { name: 'Handover to closure', body: 'Files, assets, licences and guidelines as a checklist tracked against the final payment it releases.' },
    { name: 'Approver boundaries', body: 'Approvers named per deliverable, so a deliverable reopened by someone new is a scope conversation.' },
    { name: 'Capability-based allocation', body: 'Designers carrying skills and load, so work is matched rather than assigned to whoever is free.' },
  ],

  migration: 'Design tools, asset storage and accounting continue and are mapped during implementation. Clients, active projects with allowances, asset licences and pitches in progress are brought across.',

  faqHeading: 'Questions studios ask',
  faqs: [
    ['What can AI software do for a design agency?', 'Verity AI answers questions from your own project, round, asset and pitch records: which deliverables are past their round allowance, which assets are used beyond licence, what pitching cost against what it won, which clients consume the most rounds. Each answer can become a scope decision.'],
    ['Why count revision rounds?', 'Because approval is subjective and rounds have no natural end, while the fee assumed a number. Counting them per deliverable is what turns a fourth round from an absorbed cost into a decision that can be charged or deliberately given.'],
    ['How does licence tracking help?', 'Fonts, stock and commissioned assets carry licences with a defined scope. Work regularly ends up used beyond it, which is a liability created on the client’s behalf — visible only if the scope is recorded against the project.'],
    ['Does it cost pitching?', 'Pitches are work with recorded effort and third-party cost, compared against the projects they won. Speculative creative work is real studio capacity and is almost never set against what it produced.'],
    ['Why does handover matter?', 'A project is not finished until working files, assets and licences reach the client, and unhanded-over projects hold final payments while staying open in everyone’s head.'],
    ['Can it stop unagreed approvers?', 'Approvers are named per deliverable at setup, so a deliverable reopened by a stakeholder nobody agreed becomes a scope conversation rather than another free round.'],
    ['Does Verity replace our design tools?', 'No. Design software and asset storage continue and are mapped during implementation. Verity holds projects, rounds, licences, pitches, handover and the commercial record.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of project types, round allowances and licensing practice, configuration, migration of clients and live projects, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start by counting the rounds.',
  ctaLede: 'It is where studio capacity goes and almost nobody has the number. Tell us how projects are scoped today.',

  related: ['marketing-agencies', 'content-agencies', 'advertising-agencies', 'pr-agencies', 'software-agencies', 'interior-designers'],
};
