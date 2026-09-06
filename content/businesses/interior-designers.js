export default {
  slug: 'interior-designers',
  status: 'published',
  plural: 'interior designers',
  subject: 'interior design business',

  seo: {
    title: 'AI business management software for interior designers | Verity',
    description:
      'Verity connects specification and procurement margin, long lead times, client-supplied items, site coordination and snagging into one operational system.',
    keywords: [
      'AI software for interior designers',
      'interior design business management software',
      'specification and procurement tracking',
      'lead time and site coordination software',
    ],
  },

  hero: {
    eyebrow: 'Verity for interior designers',
    headline: 'The design was approved in April. The sofa arrives in September.',
    lede:
      'Interior projects are decided by procurement lead times and site coordination, not by drawings. Verity tracks the specification, the order, the lead time and the site.',
    note: 'Runs alongside your existing design and accounting tools.',
    panel: {
      title: 'Projects',
      meta: 'All live projects',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Live projects', value: '11', note: '₹4.6 Cr including procurement' },
        { label: 'Items on order', value: '284', note: '31 past expected delivery' },
        { label: 'Unconfirmed specs', value: '46', note: 'blocking orders' },
        { label: 'Snags open', value: '78', note: '19 past handover' },
      ],
      rows: [
        { name: '31 items past their expected delivery date', meta: 'Two projects cannot complete', active: true },
        { name: '46 specifications unconfirmed by clients', meta: 'Lead times running while decisions wait', active: true },
        { name: '19 snags open past handover', meta: 'Final payments held', active: true },
        { name: 'Client-supplied items not tracked to site', meta: '9 items · installation blocked', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own projects in this shape.',
    },
  },

  overview: {
    heading: 'The design is the easy part. Procurement and site are the project.',
    paragraphs: [
      'An interior project is a set of specified items ordered from many suppliers with wildly different lead times, delivered to a site that has to be ready for them, and installed in an order that cannot be varied much. The design is agreed early; everything that decides whether the project completes on time happens afterwards.',
      'Lead time is the governing constraint. A specification confirmed late does not delay the project by the delay in confirming — it delays it by the item’s full lead time, which may be months. Forty-six unconfirmed specifications is not a decision backlog; it is a programme already slipping.',
      'The second is that a large share of the designer’s income is procurement margin, which depends on ordering through the practice rather than around it. Client-supplied items reduce margin and are frequently untracked until they fail to arrive.',
      'The third is site coordination. Items arrive at a site that must be ready, in an order that respects trades, and a delivery to an unready site costs storage, damage or a return visit.',
      'The fourth is snagging, which holds final payments and closes projects. Nineteen snags past handover is money held and a relationship cooling.',
      'Verity tracks specification confirmation against lead time, procurement margin, deliveries against site readiness and snags to closure.',
    ],
  },

  terminology: [
    ['Projects, rooms, packages', 'Work'],
    ['Specifications, selections, revisions', 'Records'],
    ['Items on order, deliveries, installations', 'Orders'],
    ['Clients, contractors, trades', 'Relationships'],
    ['Suppliers, makers, importers', 'Suppliers'],
    ['Approvals, variations, snags', 'Workflows'],
    ['Sites, rooms, storage', 'Locations'],
  ],

  challengesHeading: 'Lead times, margin and a site that must be ready.',
  challengesLede:
    'Interior design difficulties come from decisions taken late against items that take months to arrive.',
  challenges: [
    { problem: 'Late confirmations cost a full lead time', detail: 'A specification confirmed two weeks late delays the project by the item’s lead time, not by two weeks.', outcome: 'Specifications carry the item’s lead time and the date by which confirmation is required.' },
    { problem: 'Procurement margin leaks to client-supplied items', detail: 'Clients buy items directly, reducing the designer’s margin and creating untracked deliveries.', outcome: 'Every item is recorded as specified with a supply route, so margin and tracking are both visible.' },
    { problem: 'Deliveries arrive at unready sites', detail: 'An item arrives before the site can receive it and is stored, damaged or returned.', outcome: 'Deliveries are scheduled against recorded site readiness and trade sequence.' },
    { problem: 'Snags hold final payments', detail: 'A project is substantially complete and the final payment waits on a snag list nobody owns.', outcome: 'Snags are work with owners and dates, tracked to closure against the payment they hold.' },
    { problem: 'Long orders lose visibility', detail: 'An item ordered in April is remembered in September when it has not arrived.', outcome: 'Every order carries an expected date and an age, so a slipping order is visible months ahead.' },
    { problem: 'Variations are agreed on site', detail: 'A change is agreed with the client during a site visit and the cost is assembled afterwards.', outcome: 'Variations are raised with cost and lead-time impact at the moment they are agreed.' },
  ],

  modulesLede: 'One system across specification, procurement, site and snagging.',
  modules: [
    { id: 'records', title: 'Specifications, selections and revisions', line: 'Each item carries its specification, supplier, lead time, confirmation state, cost, margin and the room it belongs to.', why: 'The specification is where lead time and margin both originate.', example: 'Forty-six specifications unconfirmed with lead times already running against the programme.' },
    { id: 'orders', title: 'Items on order and deliveries', line: 'Orders record supplier, expected date, deposit, delivery state and site readiness requirement.', why: 'The order is the project’s critical path and is usually tracked in a spreadsheet.', example: 'Thirty-one items past expected delivery, blocking two projects.' },
    { id: 'work', title: 'Projects, rooms and installation', line: 'Work is organised by project and room with installation sequence, trades and dependencies.', why: 'Items install in an order that trades and access dictate.', example: 'Installation sequence recorded so deliveries are scheduled to match it.' },
    { id: 'suppliers', title: 'Suppliers, makers and importers', line: 'Suppliers carry lead times, reliability against them, deposits, damage rates and balances.', why: 'A supplier’s actual lead time is the only useful basis for a programme date.', example: 'Actual against quoted lead time by supplier, informing the programme.' },
    { id: 'relationships', title: 'Clients, contractors and trades', line: 'Clients carry their projects, decisions, budgets and payment schedule; contractors and trades carry their scope and coordination.', why: 'Client decision speed is the practice’s biggest programme variable.', example: 'Decision turnaround by client, informing realistic dates.' },
    { id: 'workflows', title: 'Approvals, variations and snags', line: 'Specification approvals, variations, budget changes and snags move through defined steps with recorded decisions.', why: 'A variation agreed on site without cost and lead-time impact is unrecoverable.', example: 'A variation carrying its cost and lead-time consequence at agreement.' },
    { id: 'locations', title: 'Sites, rooms and storage', line: 'Sites and storage are locations with readiness state, deliveries received and items held.', why: 'A delivery to an unready site costs storage, damage or a return visit.', example: 'Site readiness recorded and deliveries scheduled against it.' },
    { id: 'intelligence', title: 'Lead time, margin and snag reporting', line: 'Confirmation against required dates, supplier lead time performance, procurement margin, client-supplied share and snag closure come from the records.', why: 'The project’s outcome is decided by dates and margin, both of which are recordable.', example: 'Procurement margin by project and the share lost to client-supplied items.' },
    { id: 'ai', title: 'Ask the project a question', line: 'Verity AI answers from your own specification, order, site and snag records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about confirmations outstanding and orders slipping.', example: '"Which specifications are unconfirmed against their required date?" returns forty-six.' },
    { id: 'communication', title: 'Client decisions on the record', line: 'Selections, approvals and site agreements attach to the item or project they concern.', why: 'A selection agreed verbally on site is the basis for an order and a cost.', example: 'A client selection recorded at the moment it is agreed.' },
    { id: 'control', title: 'Budget, margin and approvals', line: 'One permission model and one audit trail, with budget changes and margin decisions recorded.', why: 'Procurement margin is the practice’s income and is negotiated per item.', example: 'Margin recorded per item and per project.' },
    { id: 'people', title: 'Designers and project coordinators', line: 'Staff are modelled once, and every specification, order and site visit carries who owns it.', why: 'Coordination failures are ownership failures.', example: 'Orders and snags by owner with escalation.' },
  ],

  workflowsHeading: 'Specify, confirm, order, install, close.',
  workflowsLede: 'These already happen. Recorded against lead times, the programme becomes real.',
  workflows: [
    { name: 'Specification to order', steps: ['Item specified with supplier and lead time', 'Required confirmation date derived from the programme', 'Client confirmation tracked against that date', 'Order placed with deposit and expected delivery', 'Order tracked with an age against expectation'], note: 'The required confirmation date, derived from lead time, is what makes the client decision urgent at the right moment.' },
    { name: 'Delivery and site readiness', steps: ['Expected delivery compared with site readiness', 'Delivery scheduled or storage arranged', 'Goods received and condition recorded', 'Damage claimed against supplier or transporter', 'Item recorded as on site and ready to install'], note: 'A delivery to an unready site is a cost the practice usually absorbs.' },
    { name: 'Installation sequence', steps: ['Installation order set by trade and access', 'Items matched to the sequence', 'Trades coordinated with dates', 'Installation completed and recorded', 'Issues raised as snags'], note: 'Sequence is a constraint rather than a preference, and delivery scheduling must respect it.' },
    { name: 'Variation on site', steps: ['Change agreed with the client on site', 'Cost and lead-time impact assessed immediately', 'Variation raised with both attached', 'Client approval recorded', 'Programme and budget updated'], note: 'A variation agreed without its lead-time consequence is a date nobody can now meet.' },
    { name: 'Snagging and closure', steps: ['Snags recorded at handover with owners', 'Rectification assigned and tracked', 'Re-inspection completed', 'Final payment released on closure', 'Outstanding snags aged against payment held'], note: 'Snags hold final payments, which makes closing them a cash task as much as a quality one.' },
  ],

  ai: {
    heading: 'Ask what is late and why.',
    lede: 'Verity AI reads the same specification, order, site and snag records the practice creates as it works. It answers across projects, respects permissions, and can turn an answer into chases and variations.',
    panelMeta: 'Grounded in your project records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which specifications are unconfirmed against their required date?',
      'Which orders are past their expected delivery?',
      'Which suppliers run longest against their quoted lead times?',
      'What is procurement margin by project?',
      'How much margin is lost to client-supplied items?',
      'Which snags are open past handover and holding payment?',
      'Which deliveries are scheduled against unready sites?',
      'Which clients take longest to confirm selections?',
      'Summarise programme risk across live projects.',
    ],
  },

  automationHeading: 'Lead times and confirmations.',
  automationLede: 'Each runs from the project records at the point the condition is met.',
  automations: [
    { trigger: 'A specification approaches its required confirmation date', steps: ['Flagged with the lead time it governs', 'Client chase assigned', 'Programme impact calculated if it slips'] },
    { trigger: 'An order passes its expected delivery', steps: ['Flagged with the installation it blocks', 'Supplier chased and response recorded', 'Programme revised where needed'] },
    { trigger: 'A delivery is due to an unready site', steps: ['Readiness checked against the date', 'Storage or reschedule decision raised', 'Outcome recorded'] },
    { trigger: 'A variation is agreed on site', steps: ['Cost and lead-time impact assessed', 'Approval routed with both attached', 'Programme and budget updated'] },
    { trigger: 'Snags remain open past handover', steps: ['Aged against the payment held', 'Rectification assigned', 'Escalated to the project lead'] },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Lead times, margin and site progress from the project records.',
  intelligence: [
    { area: 'Programme', points: ['Specifications unconfirmed against required dates', 'Orders past expected delivery', 'Installation sequence progress', 'Programme slippage by cause'] },
    { area: 'Procurement', points: ['Margin by item and project', 'Client-supplied share and margin forgone', 'Supplier lead time actual against quoted', 'Damage and claims by supplier'] },
    { area: 'Site', points: ['Readiness against scheduled deliveries', 'Storage used and its cost', 'Trade coordination and delays', 'Deliveries refused or returned'] },
    { area: 'Closure', points: ['Snags by project and age', 'Payments held against snags', 'Rectification turnaround', 'Handover completion'] },
    { area: 'Clients', points: ['Decision turnaround by client', 'Variations agreed and their impact', 'Budget against actual', 'Payment schedule adherence'] },
  ],
  intelligenceNote: 'Verity records the practice and its procurement. Design and drawing tools continue as they are.',

  rolesHeading: 'One practice, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Principal', question: 'Are projects on programme and on margin?', focus: 'Confirmations against required dates, orders late, procurement margin, snags holding payment.' },
    { role: 'Project coordinator', question: 'What is blocking each project?', focus: 'Unconfirmed specifications, orders past date, site readiness, trade coordination.' },
    { role: 'Designer', question: 'What needs a decision?', focus: 'Specifications awaiting client confirmation, variations to raise, selections to record.' },
  ],

  useCasesHeading: 'What interior designers use Verity for',
  useCases: [
    { name: 'Confirmation against lead time', body: 'Required confirmation dates derived from item lead times, so a client decision becomes urgent at the right moment rather than at the deadline.' },
    { name: 'Procurement margin', body: 'Margin recorded per item and project, including what is forgone to client-supplied items.' },
    { name: 'Order tracking with age', body: 'Every order carrying an expected date and an age, so a slipping order is visible months before installation.' },
    { name: 'Delivery against site readiness', body: 'Deliveries scheduled against recorded readiness and trade sequence, avoiding storage, damage and return visits.' },
    { name: 'Variation with lead-time impact', body: 'Site variations raised with both cost and lead-time consequence at the moment they are agreed.' },
    { name: 'Snag closure against payment', body: 'Snags aged against the final payment they hold, making closure a cash task as well as a quality one.' },
    { name: 'Supplier lead-time reality', body: 'Actual against quoted lead times per supplier, which is the only honest basis for a programme date.' },
  ],

  migration: 'Your design tools and accounting continue and are mapped during implementation. Projects, specifications, live orders, suppliers with lead times and open snags are brought across.',

  faqHeading: 'Questions designers ask',
  faqs: [
    ['What can AI software do for an interior design business?', 'Verity AI answers questions from your own specification, order, site and snag records: which specifications are unconfirmed against their required date, which orders are late, what procurement margin looks like by project, which snags are holding final payments. Each answer can become a chase or a variation.'],
    ['Why does a late confirmation matter so much?', 'Because it costs the item’s full lead time rather than the length of the delay. A specification confirmed two weeks late on an item with a four-month lead time moves the project by four months, not two weeks.'],
    ['Can it show procurement margin?', 'Margin is recorded per item and per project, including the share forgone when clients supply items directly — which is usually a larger number than practices expect.'],
    ['How does it help with deliveries?', 'Deliveries are scheduled against recorded site readiness and the installation sequence, so an item does not arrive at a site that cannot receive it and incur storage, damage or a return visit.'],
    ['Does it handle variations agreed on site?', 'A variation is raised with its cost and lead-time impact at the moment it is agreed, rather than assembled afterwards when the programme consequence has already occurred.'],
    ['Can it help close projects?', 'Snags are work with owners and ages, tracked against the final payment they hold — which makes closing them a cash task rather than a quality afterthought.'],
    ['Does Verity replace our design software?', 'No. Design and drawing tools continue and are mapped during implementation. Verity holds specifications, procurement, site coordination, snagging and the commercial record.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the specification and procurement process, configuration, migration of live projects and suppliers, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the specifications nobody has confirmed.',
  ctaLede: 'Each one is a lead time already running against your programme. Tell us how selections are tracked today.',

  related: ['architecture-firms', 'interior-design-firms', 'furniture-stores', 'home-decor-stores', 'contractors', 'construction-companies'],
};
