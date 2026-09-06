export default {
  slug: 'architecture-firms',
  status: 'published',
  plural: 'architecture firms',
  subject: 'architecture practice',

  seo: {
    title: 'AI business management software for architecture firms | Verity',
    description:
      'Verity connects work stages against fee stages, statutory approvals, drawing revisions, consultant coordination and site visits into one operational system.',
    keywords: [
      'AI software for architecture firms',
      'architecture practice management software',
      'work stage and fee stage tracking',
      'drawing revision and approval management',
    ],
  },

  hero: {
    eyebrow: 'Verity for architecture practices',
    headline: 'The fee is staged. The work is not, and the gap is where practices lose money.',
    lede:
      'Fees are billed at stages while effort spreads unevenly across them, and approvals stall in offices you do not control. Verity records effort against stage and tracks approvals as work.',
    note: 'Verity runs the practice. Your drawing and modelling software stays where it is.',
    panel: {
      title: 'Projects',
      meta: 'All live projects',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Live projects', value: '22', note: '₹5.8 Cr fees' },
        { label: 'Stages over effort', value: '7', note: 'no variation raised' },
        { label: 'Approvals pending', value: '14', note: '6 beyond expected time' },
        { label: 'Unbilled stages', value: '₹42 L', note: 'work complete, not invoiced' },
      ],
      rows: [
        { name: '7 stages consuming more effort than their fee assumes', meta: 'Combined overrun 780 hours', active: true },
        { name: '6 statutory approvals beyond expected turnaround', meta: 'Downstream stages blocked', active: true },
        { name: '₹42 L of completed stages not invoiced', meta: 'Oldest 38 days', active: true },
        { name: 'Drawing revisions issued without recorded instruction', meta: '4 projects', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own projects in this shape.',
    },
  },

  overview: {
    heading: 'Fees are staged and effort is not.',
    paragraphs: [
      'An architecture practice bills against stages — concept, design development, statutory submission, tender, construction — each carrying a share of the fee that assumes a share of the effort. The effort rarely distributes the way the fee does, and the practice absorbs the difference silently. Seven stages over their effort assumption with no variation raised is a firm-level habit rather than seven mistakes.',
      'The second characteristic is statutory approval. Submissions go to authorities whose turnaround the practice does not control, and downstream stages are blocked while they wait. Six approvals beyond expected turnaround is six projects whose fee stages cannot progress.',
      'The third is revisions. Drawings are revised on client instruction, on consultant input and on site queries, and a revision issued without a recorded instruction becomes unpaid work discovered at the fee review.',
      'The fourth is consultant coordination. Structural, services and specialist consultants produce inputs the architect depends on, and a late input is the architect’s delay in the client’s view.',
      'The fifth is that completed stages sit unbilled because invoicing follows completion by whoever remembers.',
      'Verity records effort against stage, tracks approvals and consultant inputs as work, and links revisions to instructions.',
    ],
  },

  terminology: [
    ['Projects, stages, work packages', 'Work'],
    ['Drawings, revisions, models, specifications', 'Records'],
    ['Clients, authorities, consultants', 'Relationships'],
    ['Approvals, submissions, site visits', 'Workflows'],
    ['Architects, technicians, project leads', 'People'],
    ['Studios, sites, offices', 'Locations'],
    ['Fee stages, variations, invoicing', 'Control'],
  ],

  challengesHeading: 'Staged fees, unstaged effort, uncontrolled approvals.',
  challengesLede:
    'Architecture difficulties come from a fee structure that assumes an effort distribution the work does not follow.',
  challenges: [
    { problem: 'Effort is not measured against the stage fee', detail: 'A stage consumes far more than its fee assumes and the practice absorbs it without raising anything.', outcome: 'Effort is recorded against the stage, so overrun raises a variation decision rather than a silent absorption.' },
    { problem: 'Approvals block downstream stages', detail: 'A submission sits with an authority and the next fee stage cannot begin, with nobody tracking the elapsed time.', outcome: 'Approvals are work with expected turnaround and an age, so delays are visible and chaseable.' },
    { problem: 'Revisions are issued without instruction', detail: 'A drawing is revised on a verbal request and the effort has no commercial basis.', outcome: 'Revisions link to a recorded instruction, so unpaid revision work is visible as it happens.' },
    { problem: 'Consultant delays become the architect’s delay', detail: 'A late structural or services input holds the architect’s work and the client sees only the architect.', outcome: 'Consultant inputs are tracked as dependencies with owners and dates.' },
    { problem: 'Completed stages go unbilled', detail: 'Invoicing follows stage completion by whoever remembers, so cash lags work by weeks.', outcome: 'Stage completion raises the invoicing task with the fee attached.' },
    { problem: 'Drawing versions proliferate', detail: 'Several revisions circulate and site works from the wrong one.', outcome: 'Revisions are versioned records with issue history, so what was issued to whom is answerable.' },
  ],

  modulesLede: 'One system across stages, approvals, revisions and fees.',
  modules: [
    { id: 'work', title: 'Projects, stages and packages', line: 'Each project is work with stages, fee allocation per stage, effort recorded, dependencies and state.', why: 'The stage is both the fee unit and the delivery unit, and they diverge without a record.', example: 'Seven stages over their effort assumption by seven hundred and eighty hours.' },
    { id: 'workflows', title: 'Approvals, submissions and site visits', line: 'Statutory submissions, approvals, site visits and inspections are steps with expected turnaround, owners and ages.', why: 'Approvals are outside the practice’s control and inside its programme.', example: 'Six approvals beyond expected turnaround, blocking downstream stages.' },
    { id: 'records', title: 'Drawings, revisions and specifications', line: 'Drawings and specifications are versioned records with revision history, issue records and the instruction that prompted each change.', why: 'A revision without an instruction is unpaid work; a wrong version on site is a defect.', example: 'Revisions issued without a recorded instruction across four projects.' },
    { id: 'relationships', title: 'Clients, authorities and consultants', line: 'Clients, authorities and consultants carry their projects, correspondence, turnaround history and dependencies.', why: 'The practice depends on parties it does not control and is judged on their timing.', example: 'Authority turnaround history informing realistic programme dates.' },
    { id: 'people', title: 'Architects, technicians and leads', line: 'The team is modelled once, and every stage, revision and site visit carries who owns it.', why: 'Effort against stage is only meaningful with attribution.', example: 'Effort by person against stage fee allocation.' },
    { id: 'control', title: 'Fee stages, variations and invoicing', line: 'Fee stages, variations, additional services and invoicing move through defined steps with recorded decisions.', why: 'Additional services are the practice’s recoverable margin and are usually absorbed.', example: 'A variation raised when effort passes the stage assumption.' },
    { id: 'intelligence', title: 'Stage, approval and fee reporting', line: 'Effort against stage fee, approval turnaround, revision volume by cause, consultant dependency delays and unbilled stages come from the records.', why: 'The practice’s profitability is decided stage by stage and is usually assessed project by project at the end.', example: 'Effort against fee by stage type across projects, which shows where the fee scale is wrong.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own project, stage, approval and fee records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about stages overrunning and approvals sitting.', example: '"Which stages are over their effort assumption?" returns seven with variation reviews assigned.' },
    { id: 'communication', title: 'Instructions and correspondence', line: 'Client instructions, consultant correspondence and authority queries attach to the project and stage.', why: 'A verbal instruction that prompted a revision is the basis for charging for it.', example: 'The instruction behind a revision, recorded when it was given.' },
    { id: 'locations', title: 'Studios, sites and offices', line: 'Sites and studios are locations with visits, observations and issues recorded against them.', why: 'Site observations are records the practice needs later.', example: 'Site visit observations recorded against the project and date.' },
    { id: 'orders', title: 'Invoices and fee recovery', line: 'Stage invoices, variations and collections are recorded against the project.', why: 'Completed and unbilled stages are the practice funding the client.', example: 'Forty-two lakh of completed stages not invoiced.' },
    { id: 'suppliers', title: 'Consultants and specialists', line: 'Consultants carry their appointments, deliverable dates, turnaround and fees.', why: 'Consultant dependency is the most common cause of an architect’s programme slipping.', example: 'Consultant deliverables tracked as dependencies with dates.' },
  ],

  workflowsHeading: 'Stage by stage, with the fee attached.',
  workflowsLede: 'These already happen. Recorded against stages, the fee scale finally gets tested.',
  workflows: [
    { name: 'Appointment and stage setup', steps: ['Appointment recorded with scope and fee', 'Fee allocated across stages', 'Effort assumption per stage recorded', 'Programme dates set including approval turnarounds', 'Team assigned per stage'], note: 'Recording the effort assumption is what makes the later comparison possible.' },
    { name: 'Stage delivery', steps: ['Work performed with effort recorded against the stage', 'Consultant inputs tracked as dependencies', 'Effort compared against the stage assumption', 'Overrun raises a variation or absorption decision', 'Stage completed and invoicing raised'], note: 'The invoicing task at completion is what stops cash lagging work by weeks.' },
    { name: 'Statutory approval', steps: ['Submission prepared and issued', 'Expected turnaround recorded from history', 'Elapsed time tracked against it', 'Queries answered and recorded', 'Approval received and downstream stages released'], note: 'Tracking elapsed time is what turns an uncontrollable delay into a chaseable one.' },
    { name: 'Revision control', steps: ['Instruction received and recorded with its source', 'Revision produced and versioned', 'Issue record created for recipients', 'Commercial basis assessed — within scope or additional', 'Additional service raised where applicable'], note: 'A revision without a recorded instruction is unpaid work nobody decided to do.' },
    { name: 'Fee review', steps: ['Effort against fee pulled by stage and project', 'Stage types systematically over-consumed identified', 'Variations raised and absorbed compared', 'Fee scale reviewed for future appointments', 'Decisions recorded'], note: 'Practices usually discover a bad fee scale one project at a time; this shows the pattern.' },
  ],

  ai: {
    heading: 'Ask which stages lose money.',
    lede: 'Verity AI reads the same project, stage, approval and fee records the practice creates as it works. It answers across projects, respects permissions, and can turn an answer into variations and chases.',
    panelMeta: 'Grounded in your project records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which stages are over their effort assumption without a variation?',
      'Which approvals are beyond expected turnaround?',
      'How much completed work is unbilled?',
      'Which revisions were issued without a recorded instruction?',
      'Which consultants deliver latest against agreed dates?',
      'Which stage types do we systematically under-price?',
      'Which projects have downstream stages blocked by approvals?',
      'What is effort by person against stage fee?',
      'Summarise stage performance and unbilled fees.',
    ],
  },

  automationHeading: 'The absorptions and the waiting.',
  automationLede: 'Each runs from the project records at the point the condition is met.',
  automations: [
    { trigger: 'Effort passes the stage assumption', steps: ['Stage flagged with effort against fee', 'Variation review assigned to the project lead', 'Decision recorded — raised or absorbed'] },
    { trigger: 'An approval exceeds expected turnaround', steps: ['Flagged with elapsed time and blocked stages', 'Chase assigned', 'Programme impact recorded'] },
    { trigger: 'A stage completes', steps: ['Invoicing task raised with the stage fee', 'Downstream stage released', 'Effort against fee recorded for the fee review'] },
    { trigger: 'A revision is issued without an instruction', steps: ['Flagged against the project', 'Commercial basis review assigned', 'Additional service raised or absorption recorded'] },
    { trigger: 'A consultant deliverable passes its date', steps: ['Dependency flagged with the work it blocks', 'Chase assigned', 'Programme impact assessed'] },
  ],

  intelligenceHeading: 'What the partners can see.',
  intelligenceLede: 'Stage economics and programme dependency from the practice’s records.',
  intelligence: [
    { area: 'Stages', points: ['Effort against fee by stage and project', 'Stage types systematically over-consumed', 'Variations raised against absorbed', 'Stage completion against programme'] },
    { area: 'Approvals', points: ['Turnaround by authority and submission type', 'Approvals beyond expected time', 'Downstream stages blocked', 'Query volume and resolution'] },
    { area: 'Revisions', points: ['Revision volume by project and cause', 'Revisions without recorded instructions', 'Versions issued and to whom', 'Additional services recovered'] },
    { area: 'Fees', points: ['Unbilled completed stages by age', 'Fee recovery against effort', 'Variations agreed and billed', 'Balances outstanding'] },
    { area: 'Dependencies', points: ['Consultant deliverables against dates', 'Delays attributable to consultants', 'Client decision turnaround', 'Programme impact by cause'] },
  ],
  intelligenceNote: 'Verity records the practice. Drawing, modelling and document management software continues as it is.',

  rolesHeading: 'One practice, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Partner', question: 'Which stages lose money?', focus: 'Effort against fee by stage type, variations absorbed, unbilled stages, fee scale evidence.' },
    { role: 'Project lead', question: 'What is blocking this project?', focus: 'Approvals pending, consultant dependencies, stage effort against fee, revisions outstanding.' },
    { role: 'Architect or technician', question: 'What am I working on and against what?', focus: 'Assigned stages and packages, effort to record, revisions and their instructions, site visits.' },
    { role: 'Practice administrator', question: 'What is unbilled and unowned?', focus: 'Completed stages not invoiced, approvals unchased, consultant deliverables late.' },
  ],

  useCasesHeading: 'What architecture practices use Verity for',
  useCases: [
    { name: 'Effort against stage fee', body: 'Effort recorded against the stage that carries the fee, so a systematically under-priced stage type becomes visible across projects.' },
    { name: 'Approval tracking', body: 'Statutory submissions as work with expected turnaround and elapsed time, so an uncontrollable delay becomes chaseable.' },
    { name: 'Revision to instruction', body: 'Revisions linked to the instruction that prompted them, so unpaid revision work is visible as it happens.' },
    { name: 'Consultant dependency', body: 'Consultant deliverables tracked as dependencies with dates, since their delay becomes the architect’s in the client’s view.' },
    { name: 'Stage invoicing', body: 'Completion raising the invoicing task, so cash follows work rather than memory.' },
    { name: 'Version control on issue', body: 'Drawings versioned with issue records, so what was issued to whom is answerable.' },
    { name: 'Fee scale evidence', body: 'Effort against fee across stage types, which is how a practice learns its fee scale is wrong before another project proves it.' },
  ],

  migration: 'Drawing, modelling and document systems continue and are mapped during implementation. Projects with stages and fees, consultants, authorities and live approvals are brought across.',

  faqHeading: 'Questions practices ask',
  faqs: [
    ['Does Verity replace our drawing software?', 'No. Drawing, modelling and document management continue and are mapped during implementation. Verity holds the practice record — stages, fees, effort, approvals, revisions, consultants and invoicing.'],
    ['What can AI software do for an architecture practice?', 'Verity AI answers questions from your own project, stage, approval and fee records: which stages are over their effort assumption, which approvals are beyond expected turnaround, how much completed work is unbilled, which revisions lack a recorded instruction. Each answer can become a variation or a chase.'],
    ['Why measure effort against stage rather than project?', 'Because the fee is staged and effort is not. A project can end broadly on fee while two stages inside it consumed far more than they were paid for — and those stage types will be under-priced on every future appointment.'],
    ['How does it help with statutory approvals?', 'Submissions are work with an expected turnaround drawn from your own history and an elapsed time against it, so a delay you do not control becomes visible, chaseable and reflected in the programme.'],
    ['What about revisions?', 'Revisions link to the instruction that prompted them. A revision without a recorded instruction is unpaid work, and seeing it as it happens is the only way to raise it as an additional service rather than absorb it.'],
    ['Can it help with consultants?', 'Consultant deliverables are tracked as dependencies with agreed dates, so a late structural or services input is visible as the cause of the architect’s delay rather than absorbed into it.'],
    ['Does it improve cash?', 'Stage completion raises the invoicing task with the fee attached, so completed work does not sit unbilled while the practice funds the client.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of stage structures and fee scales, configuration, migration of live projects and consultants, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the stages that overrun.',
  ctaLede: 'They are the same stage types on every project. Tell us how effort is recorded today.',

  related: ['interior-designers', 'construction-companies', 'real-estate-developers', 'interior-design-firms', 'consulting-firms', 'contractors'],
};
