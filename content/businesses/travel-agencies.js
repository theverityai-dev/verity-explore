export default {
  slug: 'travel-agencies',
  status: 'published',
  plural: 'travel agencies',
  subject: 'travel agency',

  seo: {
    title: 'AI business management software for travel agencies | Verity',
    description:
      'Verity connects supplier deposits and cancellation deadlines, documentation, multi-component bookings, commission recovery and client balances into one system.',
    keywords: [
      'AI software for travel agencies',
      'travel agency management software',
      'supplier deadline and deposit tracking',
      'booking documentation and commission recovery',
    ],
  },

  hero: {
    eyebrow: 'Verity for travel agencies',
    headline: 'Every booking is four suppliers with four cancellation deadlines you do not control.',
    lede:
      'A trip is assembled from components, each with its own deposit, deadline and penalty. Verity tracks the deadlines, the documents and the commission across all of them.',
    note: 'Runs alongside your existing booking systems.',
    panel: {
      title: 'Bookings',
      meta: 'Next 60 days',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Live bookings', value: '128', note: '₹3.4 Cr value' },
        { label: 'Deadlines in 14 days', value: '46', note: 'deposits and cancellations' },
        { label: 'Documents outstanding', value: '31', note: 'visas and passports' },
        { label: 'Commission unclaimed', value: '₹9.4 L', note: '18 suppliers' },
      ],
      rows: [
        { name: '46 supplier deadlines within 14 days', meta: 'Deposits due and free-cancellation windows closing', active: true },
        { name: '31 bookings with documents outstanding', meta: 'Departures inside 30 days', active: true },
        { name: '₹9.4 L of commission unclaimed', meta: 'Across 18 suppliers · some windows closing', active: true },
        { name: 'Client balances due before supplier payments', meta: '₹22 L timing gap', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own bookings in this shape.',
    },
  },

  overview: {
    heading: 'A trip is a set of deadlines you did not set.',
    paragraphs: [
      'A travel booking is assembled from components — flights, accommodation, transfers, activities, insurance — each supplied by a different party on different terms. Each component has its own deposit date, its own free-cancellation window and its own penalty schedule, and none of them are aligned with each other or with when the client pays.',
      'That makes deadline management the agency’s actual product. Forty-six supplier deadlines within a fortnight, spread across a hundred and twenty-eight bookings, is more than anyone can hold, and missing one means either a lost deposit or a penalty the agency absorbs.',
      'The second characteristic is documentation. Visas, passport validity and entry requirements are the agency’s responsibility in practice regardless of the contract, and a document outstanding thirty days before departure is a trip at risk.',
      'The third is commission. Agencies earn from supplier commissions claimed after travel, within windows, against bookings the agency already recorded. Nine point four lakh unclaimed across eighteen suppliers is earned money not collected.',
      'The fourth is the cash gap: supplier deposits fall due on their schedule and clients pay on theirs, and the agency bridges the difference.',
      'Verity tracks every component deadline, the documents, the commission and the cash position across bookings.',
    ],
  },

  terminology: [
    ['Bookings, components, itineraries', 'Work'],
    ['Clients, travellers, groups', 'Relationships'],
    ['Airlines, hotels, operators, insurers', 'Suppliers'],
    ['Deposits, deadlines, cancellations', 'Workflows'],
    ['Passports, visas, documents', 'Records'],
    ['Consultants, operations staff', 'People'],
    ['Branches, destinations', 'Locations'],
  ],

  challengesHeading: 'Deadlines you did not set and money you did not claim.',
  challengesLede:
    'Travel agency difficulties come from assembling trips out of components with independent terms.',
  challenges: [
    { problem: 'Component deadlines are held in several places', detail: 'Each supplier has its own deposit and cancellation schedule, and they live in confirmation emails.', outcome: 'Every component carries its deadlines on the booking, so the next fortnight is one list.' },
    { problem: 'Documents are outstanding close to departure', detail: 'Visas and passport validity are chased by whoever remembers, and a gap surfaces near the date.', outcome: 'Documents are checklist items on the booking with an age and an owner.' },
    { problem: 'Commission is claimed partially', detail: 'Post-travel commission is claimed within windows from bookings already recorded, and some is always missed.', outcome: 'Commission terms sit on the supplier and claims are assembled from booking records before windows close.' },
    { problem: 'Client and supplier payment schedules do not align', detail: 'Deposits fall due before client payments arrive, and the agency bridges the gap without sizing it.', outcome: 'Both schedules sit on the booking, so the funding gap is projected rather than discovered.' },
    { problem: 'Changes cascade across components', detail: 'A date change affects flights, hotels and transfers with different penalties, and the cost is assembled by hand.', outcome: 'Components are linked to the booking, so a change surfaces the affected items and their penalties together.' },
    { problem: 'Consultant knowledge is personal', detail: 'Supplier quirks, client preferences and destination detail live with individual consultants.', outcome: 'Supplier terms and client preferences are agency records, so a departure is a handover.' },
  ],

  modulesLede: 'One system across components, deadlines, documents and commission.',
  modules: [
    { id: 'work', title: 'Bookings, components and itineraries', line: 'Each booking is work with its client, components, suppliers, deadlines, documents, payment schedule and state.', why: 'The booking is the only place components with independent terms come together.', example: 'A hundred and twenty-eight live bookings with forty-six deadlines inside a fortnight.' },
    { id: 'workflows', title: 'Deposits, deadlines and cancellations', line: 'Deposit dates, free-cancellation windows, penalty schedules and change requests are defined steps with owners.', why: 'These are deadlines the agency did not set and cannot move.', example: 'A free-cancellation window closing, flagged before the penalty applies.' },
    { id: 'records', title: 'Passports, visas and documents', line: 'Required documents per traveller and destination are checklist items with state, expiry and an owner.', why: 'Documentation is the agency’s responsibility in practice whatever the contract says.', example: 'Thirty-one bookings with documents outstanding inside thirty days of departure.' },
    { id: 'suppliers', title: 'Airlines, hotels and operators', line: 'Suppliers carry their terms, deadlines, commission basis, claim windows, reliability and balances.', why: 'Commission is earned from suppliers and claimed within their windows.', example: 'Nine point four lakh of commission unclaimed across eighteen suppliers.' },
    { id: 'relationships', title: 'Clients, travellers and groups', line: 'Clients carry their bookings, travellers, preferences, documents, payment history and balances.', why: 'Travel is repeat and referral business built on getting details right.', example: 'A client’s passport expiry recorded once and checked at every booking.' },
    { id: 'people', title: 'Consultants and operations staff', line: 'Staff are modelled once, and every booking, deadline and document check carries who owns it.', why: 'Bookings pass between sales and operations, and deadlines fall between them.', example: 'Deadlines by owner with escalation when unowned.' },
    { id: 'intelligence', title: 'Deadline, commission and cash reporting', line: 'Deadlines by date, document completeness, commission earned against claimed, funding gaps and booking margin come from the records.', why: 'The agency’s two silent losses are missed deadlines and unclaimed commission.', example: 'Commission earned against commission collected by supplier.' },
    { id: 'ai', title: 'Ask the booking book a question', line: 'Verity AI answers from your own booking, supplier, document and payment records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about dates in the next fortnight across many bookings.', example: '"Which deadlines fall in the next fourteen days?" returns forty-six with owners assigned.' },
    { id: 'communication', title: 'Client and supplier correspondence', line: 'Confirmations, changes and correspondence attach to the booking or component they concern.', why: 'A dispute about what was booked is settled by the confirmation.', example: 'The supplier confirmation on the component, referenced when terms are questioned.' },
    { id: 'control', title: 'Who can commit and waive', line: 'One permission model and one audit trail, with penalty waivers and goodwill recorded.', why: 'Absorbing a supplier penalty is a commercial decision made under client pressure.', example: 'A waived penalty recorded with the reason and its cost.' },
    { id: 'locations', title: 'Branches and destinations', line: 'Branches and destinations roll into the business with bookings and reporting following the same structure.', why: 'Destination-specific requirements repeat across bookings.', example: 'Visa requirements from the last booking to the same destination.' },
    { id: 'orders', title: 'Payments and refunds', line: 'Client payments, supplier payments and refunds are recorded against the booking and its components.', why: 'The cash gap between two schedules is the agency’s working capital.', example: 'Twenty-two lakh of timing gap between supplier deposits and client receipts.' },
  ],

  workflowsHeading: 'Assembling a trip out of other people’s terms.',
  workflowsLede: 'These already happen. Recorded on the booking, the deadlines stop being scattered.',
  workflows: [
    { name: 'Booking assembly', steps: ['Client requirement recorded with travellers and dates', 'Components sourced and confirmed with suppliers', 'Each component’s deposit and cancellation terms recorded', 'Client payment schedule agreed', 'Document requirements listed per traveller and destination'], note: 'Recording each component’s terms at confirmation is what makes the deadline list possible.' },
    { name: 'Deadline management', steps: ['Deadlines aggregated across all live bookings', 'Owners assigned per deadline', 'Reminders raised ahead of each date', 'Deposit paid or cancellation decision taken', 'Outcome recorded against the component'], note: 'Forty-six deadlines a fortnight is beyond memory and trivial as a list.' },
    { name: 'Document collection', steps: ['Requirements determined per traveller and destination', 'Documents requested with a due date', 'Receipt and validity recorded', 'Gaps escalated against the departure date', 'Completeness confirmed before travel'], note: 'A visa gap thirty days out is manageable; ten days out it is a cancelled trip.' },
    { name: 'Change or cancellation', steps: ['Change request recorded against the booking', 'Affected components identified with their penalties', 'Total cost assembled and quoted to the client', 'Client decision recorded', 'Supplier changes executed and recorded'], note: 'A date change touches every component with a different penalty, which is why it must be assembled rather than estimated.' },
    { name: 'Commission claim', steps: ['Commission basis recorded against the supplier at booking', 'Travel completion recorded', 'Claim assembled from booking records', 'Filed inside the supplier window', 'Settlement recorded against the supplier'], note: 'Commission is earned at booking and lost at the claim window.' },
    { name: 'Cash position', steps: ['Supplier deposit dates aggregated forward', 'Client receipt schedule aggregated against them', 'Funding gaps projected by week', 'Client reminders issued ahead of supplier deadlines', 'Position recorded and reviewed'], note: 'The agency bridges two payment schedules, and only a projection shows when that becomes expensive.' },
  ],

  ai: {
    heading: 'Ask what is due in the next fortnight.',
    lede: 'Verity AI reads the same booking, supplier, document and payment records the agency creates as it works. It answers across your bookings, respects permissions, and can turn an answer into chases and claims.',
    panelMeta: 'Grounded in your booking records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which supplier deadlines fall in the next fourteen days?',
      'Which bookings have documents outstanding inside thirty days of departure?',
      'How much commission is unclaimed and which windows are closing?',
      'Where do supplier deposits fall due before client payments arrive?',
      'Which bookings would be affected by a date change and at what penalty?',
      'Which suppliers pay commission least reliably?',
      'Which clients have balances due before departure?',
      'Which travellers have passports expiring within six months of travel?',
      'Summarise deadline and document risk.',
    ],
  },

  automationHeading: 'Deadlines nobody set.',
  automationLede: 'Each runs from the booking records at the point the condition is met.',
  automations: [
    { trigger: 'A supplier deadline approaches', steps: ['Flagged with component, booking and penalty', 'Owner notified', 'Escalated as the date nears'] },
    { trigger: 'A document remains outstanding', steps: ['Aged against the departure date', 'Traveller chased and recorded', 'Escalated inside the risk window'] },
    { trigger: 'Travel completes', steps: ['Commission claim assembled from the booking', 'Filed within the supplier window', 'Settlement tracked'] },
    { trigger: 'A supplier deposit falls due before client funds', steps: ['Funding gap flagged on the booking', 'Client reminder issued ahead of the deadline', 'Escalated if unresolved'] },
    { trigger: 'A change is requested', steps: ['Affected components and penalties assembled', 'Cost quoted to the client', 'Decision recorded before execution'] },
  ],

  intelligenceHeading: 'What the agency can see.',
  intelligenceLede: 'Deadlines, documents and commission across every live booking.',
  intelligence: [
    { area: 'Deadlines', points: ['Deadlines by date across bookings', 'Deposits due and cancellation windows', 'Deadlines missed and their cost', 'Owners and escalations'] },
    { area: 'Documents', points: ['Requirements by destination and traveller', 'Outstanding documents against departure dates', 'Passport validity exceptions', 'Completeness at departure'] },
    { area: 'Commission', points: ['Earned against claimed by supplier', 'Claim windows approaching', 'Settlement reliability by supplier', 'Commission per booking and consultant'] },
    { area: 'Cash', points: ['Supplier payments due by week', 'Client receipts scheduled against them', 'Funding gaps projected', 'Balances outstanding at departure'] },
    { area: 'Commercial', points: ['Margin by booking and destination', 'Penalties absorbed and their causes', 'Repeat and referral clients', 'Consultant performance by booking value'] },
  ],
  intelligenceNote: 'Verity records the agency’s bookings and terms. Supplier reservation systems continue as they are.',

  rolesHeading: 'One booking book, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'What are we missing and what have we not claimed?', focus: 'Deadlines by date, commission earned against claimed, penalties absorbed, funding gaps.' },
    { role: 'Consultant', question: 'What is due on my bookings?', focus: 'Component deadlines, documents outstanding, client balances, change requests.' },
    { role: 'Operations', question: 'What departs soon and is incomplete?', focus: 'Documents against departure dates, supplier confirmations, deadlines unowned.' },
  ],

  useCasesHeading: 'What travel agencies use Verity for',
  useCases: [
    { name: 'Component deadline tracking', body: 'Every supplier deposit and cancellation window recorded on the booking, so the next fortnight is one list rather than a hundred confirmation emails.' },
    { name: 'Document completeness', body: 'Visas and passport validity as checklist items with an age against the departure date.' },
    { name: 'Commission recovery', body: 'Terms on the supplier with claims assembled from booking records before the window closes.' },
    { name: 'Cash gap projection', body: 'Supplier payment dates against client receipts, so bridging is planned rather than discovered.' },
    { name: 'Change cost assembly', body: 'Affected components and their individual penalties assembled together, so a change is quoted accurately.' },
    { name: 'Booking continuity', body: 'Supplier terms and client preferences held as agency records, so a consultant leaving is a handover.' },
    { name: 'Asking across bookings', body: 'Plain-language questions across deadlines, documents, commission and cash, with chases assigned in the same step.' },
  ],

  migration: 'Your supplier reservation systems and accounting continue and are mapped during implementation. Clients, live bookings with their components and terms, supplier commission bases and outstanding documents are brought across.',

  faqHeading: 'Questions agencies ask',
  faqs: [
    ['What can AI software do for a travel agency?', 'Verity AI answers questions from your own booking, supplier, document and payment records: which deadlines fall in the next fortnight, which bookings have documents outstanding close to departure, how much commission is unclaimed, where deposits fall due before client funds arrive. Each answer can become a chase or a claim.'],
    ['Does Verity replace supplier booking systems?', 'No. Reservation systems continue and are mapped during implementation. Verity holds the booking as an assembly of components with their terms, deadlines, documents, commission and cash position.'],
    ['Why track deadlines centrally?', 'Because each component carries deadlines the agency did not set and cannot move, and they live in separate confirmations. Forty-six deadlines across a fortnight is beyond anyone’s memory and trivial as a single dated list.'],
    ['How does it help with documents?', 'Required documents per traveller and destination are checklist items with an age measured against the departure date, so a visa gap surfaces while it is still solvable rather than in the final week.'],
    ['Can it recover more commission?', 'Commission basis is recorded against the supplier at booking and the claim is assembled from records after travel, inside the supplier’s window — which is the difference between claiming fully and claiming what someone remembered.'],
    ['Does it show the cash gap?', 'Supplier payment dates and client receipt schedules both sit on the booking, so the gap the agency bridges is projected forward by week rather than discovered when a deposit falls due.'],
    ['What happens when a consultant leaves?', 'Supplier terms, client preferences and booking history are agency records rather than personal knowledge, so a departure is a handover with continuity.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of supplier terms and the booking process, configuration, migration of live bookings and clients, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the next fortnight of deadlines.',
  ctaLede: 'They are scattered across confirmations and none of them move. Tell us how they are tracked today.',

  related: ['tour-operators', 'hotels', 'resorts', 'event-venues', 'guest-houses', 'hostels'],
};
