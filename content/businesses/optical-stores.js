export default {
  slug: 'optical-stores',
  status: 'published',
  plural: 'optical stores',
  subject: 'optical business',

  seo: {
    title: 'AI business management software for optical stores | Verity',
    description:
      'Verity connects prescription records, lens lab lead times, frame stock, remakes and eye-test recalls into one operational system for opticians.',
    keywords: [
      'AI software for optical stores',
      'optical retail management software',
      'lens lab order and remake tracking',
      'eye test recall and prescription records',
    ],
  },

  hero: {
    eyebrow: 'Verity for optical retail',
    headline: 'The frame was in stock. The lenses take nine days and the patient was told four.',
    lede:
      'Optical fulfilment depends on a lab you do not control, and remakes double the wait. Verity tracks the lab order, the remake and the recall that brings people back.',
    note: 'Verity runs the practice. Clinical testing equipment stays where it is.',
    panel: {
      title: 'Store',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Dispenses', value: '284', note: '₹18 L' },
        { label: 'Lab orders open', value: '96', note: '14 past promised date' },
        { label: 'Remake rate', value: '6.8%', note: 'against 3% target' },
        { label: 'Recalls due', value: '340', note: '112 not contacted' },
      ],
      rows: [
        { name: '14 lab orders past the date the patient was given', meta: 'Patients calling to ask', active: true },
        { name: 'Remake rate at 6.8%, concentrated on one lens type', meta: 'Cost and a doubled wait each time', active: true },
        { name: '112 patients past their recall date with no contact', meta: 'The most predictable revenue in the practice', active: true },
        { name: 'Frame stock ageing in two ranges', meta: '₹6.4 L held over 12 months', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'Two businesses share a counter: a clinical one and a retail one.',
    paragraphs: [
      'An optical practice tests eyes and sells eyewear. The clinical side produces a prescription; the retail side turns it into a product manufactured by a laboratory the practice does not control. Almost every patient complaint concerns the gap between those two.',
      'Lab lead time is the constraint. A patient is given a collection date at dispensing, the lab takes longer than assumed, and the practice absorbs the disappointment. Fourteen orders past their promised date is fourteen patients already calling.',
      'The second is remakes. A lens that is wrong — prescription, fitting, coating — doubles the wait and costs the lens twice. A remake rate of nearly seven percent concentrated on one lens type is a specific, fixable problem rather than a general cost of the trade.',
      'The third is recall. Eye tests recur on a clinical interval, which makes recall the most predictable revenue in the practice and the one most dependent on someone working a list.',
      'The fourth is frame stock, which ages in ranges nobody reviews while occupying the display that sells everything else.',
      'Verity tracks lab orders against promised dates, records remakes with causes, works the recall list and ages frame stock.',
    ],
  },

  terminology: [
    ['Frames, lenses, contact lenses', 'Inventory'],
    ['Prescriptions, dispenses, remakes', 'Records'],
    ['Lab orders, collections, warranties', 'Orders'],
    ['Patients, recalls, households', 'Relationships'],
    ['Optometrists, dispensing staff', 'People'],
    ['Laboratories, frame suppliers', 'Suppliers'],
    ['Store, dispensing area, testing room', 'Locations'],
  ],

  challengesHeading: 'A promise you keep with someone else’s lead time.',
  challengesLede:
    'Optical difficulties come from a product made elsewhere and a clinical interval nobody works.',
  challenges: [
    { problem: 'Collection dates are promised optimistically', detail: 'A date is given at dispensing from an assumed lab turnaround rather than the lab’s actual performance.', outcome: 'Promised dates are set from measured lab turnaround by lens type.' },
    { problem: 'Remakes are absorbed rather than attributed', detail: 'A remake costs the lens again and doubles the patient’s wait, and its cause is rarely recorded.', outcome: 'Remakes carry a cause and attach to the lens type, lab and dispenser.' },
    { problem: 'Recall lists are not worked', detail: 'Eye tests recur clinically, and the recall depends on someone maintaining and calling a list.', outcome: 'Recall dates sit on the patient record with contact history and an owner.' },
    { problem: 'Frame stock ages in the best displays', detail: 'Ranges that stopped selling occupy the display space that sells everything else.', outcome: 'Ageing by range and display position is recorded, so space follows performance.' },
    { problem: 'Prescription history is not used', detail: 'A patient’s prescription changes over years and the practice does not use the pattern in the conversation.', outcome: 'Prescription history sits on the patient record and informs recall timing and recommendations.' },
    { problem: 'Warranty and remake terms are inconsistent', detail: 'What is covered is decided at the counter under a complaint.', outcome: 'Terms are recorded per product and applied consistently with approvals for exceptions.' },
  ],

  modulesLede: 'One system across prescriptions, lab orders, stock and recalls.',
  modules: [
    { id: 'records', title: 'Prescriptions and dispense records', line: 'Each prescription and dispense is a record with the patient, lens specification, frame, dispenser and date.', why: 'Every remake, warranty claim and recall resolves to a prescription and a dispense.', example: 'A remake resolved against the original prescription and dispense.' },
    { id: 'orders', title: 'Lab orders, collections and remakes', line: 'Lab orders carry the laboratory, lens type, promised date, state and any remake with its cause.', why: 'The lab order is the fulfilment the patient is waiting for.', example: 'Fourteen lab orders past the date the patient was given.' },
    { id: 'inventory', title: 'Frames, lenses and contact lenses', line: 'Stock is held per frame and range with cost, ageing, display position and movement; contact lenses carry expiry.', why: 'Frame display space is what sells the practice’s retail side.', example: 'Six point four lakh of frame stock held over twelve months.' },
    { id: 'relationships', title: 'Patients, recalls and households', line: 'Patients carry prescriptions, dispenses, recall dates, contact history and household links.', why: 'Recall is the most predictable revenue an optical practice has.', example: 'A hundred and twelve patients past recall with no contact recorded.' },
    { id: 'suppliers', title: 'Laboratories and frame suppliers', line: 'Labs carry measured turnaround by lens type, remake rates and balances; frame suppliers carry ranges, terms and returns.', why: 'A promised date is only as good as the lab’s measured performance.', example: 'Turnaround by lab and lens type, informing the date given.' },
    { id: 'people', title: 'Optometrists and dispensing staff', line: 'Staff are modelled once, with tests, dispenses and remakes attributed.', why: 'Remake rate varies by dispenser and is a training question.', example: 'Remake rate by dispenser and lens type.' },
    { id: 'workflows', title: 'Warranty, remakes and approvals', line: 'Remake authorisation, warranty claims and goodwill move through defined steps with recorded reasons.', why: 'Counter decisions under complaint need consistency.', example: 'A goodwill remake recorded with its cost and reason.' },
    { id: 'intelligence', title: 'Turnaround, remake and recall reporting', line: 'Lab turnaround against promise, remake rate by cause and lens type, recall adherence, frame ageing and dispense value come from the records.', why: 'The practice’s three levers are promise accuracy, remake rate and recall.', example: 'Remake rate concentrated on one lens type, quantified in cost and wait.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own prescription, order, stock and recall records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about waits, remakes and recalls.', example: '"Which patients are past recall?" returns a hundred and twelve with calls assigned.' },
    { id: 'communication', title: 'Patient contact recorded', line: 'Reminders, collection notifications and complaints attach to the patient or order they concern.', why: 'A patient calling about a late order should reach someone who can see why.', example: 'The lab delay recorded on the order, visible at the counter.' },
    { id: 'control', title: 'Who can authorise remakes and discounts', line: 'One permission model and one audit trail across every record.', why: 'Remake and goodwill decisions are made at a counter with an unhappy patient.', example: 'Goodwill above threshold requiring approval.' },
    { id: 'locations', title: 'Store, dispensing and testing areas', line: 'Locations roll into the practice with stock, display positions and reporting.', why: 'Display position is what makes frame ranges sell.', example: 'Frame performance by display position.' },
  ],

  workflowsHeading: 'Test, dispense, order, collect, recall.',
  workflowsLede: 'These already happen. Recorded, the promises get more accurate.',
  workflows: [
    { name: 'Test to dispense', steps: ['Prescription recorded against the patient', 'Frame and lens selected with specification', 'Lab turnaround for that lens type applied', 'Collection date promised from measured turnaround', 'Order placed with the laboratory'], note: 'Promising from measured turnaround rather than assumed is the simplest fix available.' },
    { name: 'Lab order to collection', steps: ['Order tracked against the promised date', 'Delay flagged before the date passes', 'Patient informed proactively where it will slip', 'Goods received and checked against prescription', 'Collection completed and recorded'], note: 'Informing before the date is the difference between a delay and a complaint.' },
    { name: 'Remake', steps: ['Issue identified at collection or afterwards', 'Cause recorded — prescription, fitting, coating, lab error', 'Remake authorised with the responsible party identified', 'New order placed and tracked', 'Rate aggregated by cause, lens type, dispenser and lab'], note: 'The cause is what turns a remake rate into something fixable.' },
    { name: 'Recall cycle', steps: ['Recall date set from the clinical interval', 'Patients past date identified', 'Contact history checked before reminding', 'Reminder issued and recorded', 'Appointment booked or outcome recorded'], note: 'Recall is the practice’s most predictable revenue and depends entirely on the list being worked.' },
    { name: 'Frame range review', steps: ['Movement and ageing pulled by range and position', 'Ranges failing their display position identified', 'Return or clearance decision taken with supplier terms', 'Space reallocated to performing ranges', 'Decision recorded against the supplier'], note: 'Display position is the practice’s scarcest retail asset.' },
  ],

  ai: {
    heading: 'Ask about waits and recalls.',
    lede: 'Verity AI reads the same prescription, order, stock and recall records the practice creates as it works. It answers from your own store, respects permissions, and can turn an answer into calls and orders.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice.',
    questions: [
      'Which lab orders are past the date the patient was given?',
      'What is remake rate by cause, lens type and dispenser?',
      'Which patients are past their recall date with no contact?',
      'What is actual lab turnaround by lens type?',
      'Which frame ranges are ageing in prime display positions?',
      'Which labs have the highest remake rates?',
      'Which patients have prescriptions changing significantly over time?',
      'What is dispense value by optometrist and dispenser?',
      'Summarise turnaround, remakes and recall position.',
    ],
  },

  automationHeading: 'Promises and recalls.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A lab order approaches its promised date', steps: ['Progress checked against the lab', 'Patient informed proactively if it will slip', 'Delay recorded against the lab'] },
    { trigger: 'A remake is authorised', steps: ['Cause recorded with responsible party', 'New order placed and tracked', 'Rate updated by lens type and dispenser'] },
    { trigger: 'A patient passes their recall date', steps: ['Contact history checked', 'Reminder issued and recorded', 'Outcome recorded on the patient record'] },
    { trigger: 'A frame range passes its ageing threshold', steps: ['Flagged with display position and value', 'Return or clearance decision assigned', 'Space reallocation recorded'] },
    { trigger: 'A lab exceeds its remake threshold', steps: ['Pattern flagged by lens type', 'Sourcing review assigned', 'Decision recorded'] },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Promise accuracy, remakes and recall from the practice’s own records.',
  intelligence: [
    { area: 'Fulfilment', points: ['Lab turnaround by lens type and laboratory', 'Orders past promised date', 'Proactive notifications made', 'Collection lead time end to end'] },
    { area: 'Quality', points: ['Remake rate by cause, lens type and dispenser', 'Remake cost and doubled wait', 'Lab error against practice error', 'Warranty claims by product'] },
    { area: 'Recall', points: ['Recall adherence and overdue patients', 'Contact history and outcomes', 'Test volume by period', 'Conversion from recall to dispense'] },
    { area: 'Stock', points: ['Frame ageing by range and display position', 'Movement by range and price band', 'Supplier return eligibility', 'Contact lens expiry'] },
  ],
  intelligenceNote: 'Verity records the practice and its retail. Clinical testing equipment and records continue as they are.',

  rolesHeading: 'One practice, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Where are we losing patients and margin?', focus: 'Remake rate and cost, orders past promise, recall adherence, frame ageing by position.' },
    { role: 'Dispensing staff', question: 'When can I promise this?', focus: 'Measured lab turnaround by lens type, order status, patient prescription history, stock available.' },
    { role: 'Reception', question: 'Who needs calling?', focus: 'Recalls due, collections ready, orders delayed, patients to inform.' },
  ],

  useCasesHeading: 'What optical practices use Verity for',
  useCases: [
    { name: 'Promises from measured turnaround', body: 'Collection dates set from the lab’s actual performance by lens type rather than from an assumption.' },
    { name: 'Remake cause attribution', body: 'Remakes recorded with cause and responsible party, turning a general rate into a specific and fixable concentration.' },
    { name: 'Recall as a worked list', body: 'Clinical recall dates on the patient record with contact history, since it is the practice’s most predictable revenue.' },
    { name: 'Proactive delay notification', body: 'Lab delays flagged before the promised date, which is the difference between a delay and a complaint.' },
    { name: 'Frame ageing by display position', body: 'Ranges assessed against the display space they occupy, which is the practice’s scarcest retail asset.' },
    { name: 'Lab performance', body: 'Turnaround and remake rate by laboratory, informing sourcing rather than habit.' },
    { name: 'Asking about waits', body: 'Plain-language questions across orders, remakes, recalls and stock, with calls raised in the same step.' },
  ],

  migration: 'Clinical testing equipment and records continue and are mapped during implementation. Patients with prescriptions and recall dates, frame stock, laboratories and open orders are brought across.',

  faqHeading: 'Questions opticians ask',
  faqs: [
    ['What can AI software do for an optical practice?', 'Verity AI answers questions from your own prescription, order, stock and recall records: which lab orders are past the promised date, what remake rate looks like by cause and dispenser, which patients are past recall, what actual lab turnaround is by lens type. Each answer can become a call or an order.'],
    ['Does Verity hold clinical records?', 'Clinical testing and its records remain in your existing systems and are mapped during implementation. Verity holds the dispensing, fulfilment, stock, recall and commercial side around them.'],
    ['How does it improve collection promises?', 'Promised dates are set from each laboratory’s measured turnaround for that lens type rather than from a standard assumption, which removes most of the disappointment at collection.'],
    ['Why record remake causes?', 'Because a remake costs the lens twice and doubles the patient’s wait. Recording whether it was prescription, fitting, coating or lab error turns an accepted rate into a concentration you can address.'],
    ['Can it manage recall?', 'Recall dates sit on the patient record with contact history, so the practice’s most predictable revenue depends on a worked list rather than on someone remembering to maintain one.'],
    ['Does it help with frame stock?', 'Frame ageing is reported by range and display position, so the space that sells the retail side is not occupied by ranges that stopped selling a year ago.'],
    ['Can we compare laboratories?', 'Turnaround and remake rate are measured per lab and lens type, so sourcing decisions rest on performance rather than on established habit.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of dispensing and lab arrangements, configuration, migration of patients, recall dates and stock, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with remakes or recalls.',
  ctaLede: 'One costs you twice and the other is revenue already earned. Tell us which is larger for you.',

  related: ['dental-clinics', 'clinics', 'pharmacies', 'retail-stores', 'diagnostic-labs', 'cosmetics-stores'],
};
