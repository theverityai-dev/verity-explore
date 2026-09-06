export default {
  slug: 'veterinary-clinics',
  status: 'published',
  plural: 'veterinary clinics',
  subject: 'veterinary practice',

  seo: {
    title: 'AI business management software for veterinary clinics | Verity',
    description:
      'Verity connects vaccination and preventive recall schedules, in-house pharmacy stock, emergency against routine capacity, and payment at the counter into one system.',
    keywords: [
      'AI software for veterinary clinics',
      'veterinary practice management software',
      'vaccination recall and preventive care tracking',
      'in-house pharmacy stock and capacity software',
    ],
  },

  hero: {
    eyebrow: 'Verity for veterinary practices',
    headline: 'Preventive care runs on a calendar. Emergencies do not, and they use the same vets.',
    lede:
      'A practice earns predictably from recalls and unpredictably from emergencies that consume the same capacity. Verity holds both, plus the pharmacy stock they draw on.',
    note: 'Verity runs the practice. Clinical records stay in your existing system.',
    panel: {
      title: 'Practice',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Consultations', value: '640', note: 'across 3 vets' },
        { label: 'Recalls overdue', value: '218', note: 'vaccination and preventive' },
        { label: 'Pharmacy expiring', value: '₹86,000', note: 'within 90 days' },
        { label: 'Emergency load', value: '18%', note: 'of clinical hours' },
      ],
      rows: [
        { name: '218 animals past their vaccination or preventive recall', meta: 'Predictable revenue and clinical outcome both lost', active: true },
        { name: 'Emergency work consuming 18% of clinical hours', meta: 'Routine appointments displaced', active: true },
        { name: '₹86,000 of pharmacy stock expiring within 90 days', meta: 'Supplier return window open on some', active: true },
        { name: 'Payments outstanding after treatment', meta: '₹2.4 L · 64 clients', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own practice in this shape.',
    },
  },

  overview: {
    heading: 'Two demands on one set of vets: a calendar and an emergency.',
    paragraphs: [
      'A veterinary practice has two revenue streams with completely different shapes. Preventive care — vaccinations, boosters, parasite treatment, health checks — runs on a clinical calendar and is entirely predictable. Emergency and acute work arrives unannounced and consumes the same vets. Managing both against one capacity is the practice’s central operational problem.',
      'Preventive recall is the more valuable and the more neglected. Two hundred and eighteen animals past their recall is both lost revenue and a clinical outcome that will not happen, and the list exists in the practice’s own records.',
      'The second characteristic is in-house pharmacy. Practices dispense from their own stock, which carries batch dates, expiry and supplier return windows exactly like a pharmacy — and eighty-six thousand expiring within ninety days is recoverable if the window is open.',
      'The third is that emergencies displace routine appointments, and the displacement is rarely measured. Eighteen percent of clinical hours going to unscheduled work changes what the practice can promise.',
      'The fourth is payment. Treatment is often given before payment is settled, and outstanding balances accumulate against clients who will return with a distressed animal.',
      'Verity works the recall calendar, manages pharmacy stock and measures emergency displacement.',
    ],
  },

  terminology: [
    ['Animals, owners, households', 'Relationships'],
    ['Consultations, procedures, recalls', 'Work'],
    ['Vaccines, medicines, consumables', 'Inventory'],
    ['Vets, nurses, reception', 'People'],
    ['Suppliers, laboratories, referral centres', 'Suppliers'],
    ['Consent, estimates, payment terms', 'Workflows'],
    ['Consulting rooms, theatre, kennels', 'Locations'],
  ],

  challengesHeading: 'A calendar competing with an emergency.',
  challengesLede:
    'Veterinary difficulties come from predictable preventive demand sharing capacity with unpredictable acute demand.',
  challenges: [
    { problem: 'Preventive recalls go unworked', detail: 'Vaccination and preventive intervals are clinical facts sitting in the practice’s records, and the recall depends on someone calling.', outcome: 'Recall dates sit on the animal record with contact history and an owner.' },
    { problem: 'Emergency work displaces routine invisibly', detail: 'Unscheduled cases consume clinical hours and routine appointments slip, without the displacement being measured.', outcome: 'Emergency and routine work are recorded separately against capacity, so displacement is a number.' },
    { problem: 'Pharmacy stock expires', detail: 'In-house dispensing stock carries batch dates and supplier return windows that close before expiry.', outcome: 'Batch and expiry sit on the stock with return eligibility, so recovery is possible.' },
    { problem: 'Estimates and consent are given verbally', detail: 'Cost estimates for procedures are discussed and the bill surprises the owner afterwards.', outcome: 'Estimates and consent are recorded against the case before the procedure.' },
    { problem: 'Payment is taken after treatment or not at all', detail: 'Balances accumulate with owners who will return in distress, making the conversation harder each time.', outcome: 'Balances age on the owner record with policy applied consistently.' },
    { problem: 'The animal and the owner are recorded separately', detail: 'A household with three animals is three records and one relationship.', outcome: 'Animals group under owners and households, so the whole relationship is visible.' },
  ],

  modulesLede: 'One system across recalls, capacity, pharmacy and owners.',
  modules: [
    { id: 'relationships', title: 'Animals, owners and households', line: 'Each animal is a record under an owner and household, with species, age, history, recall dates and balances.', why: 'The practice treats animals and bills households, and both need to be visible together.', example: 'A household with three animals and one balance rather than three records.' },
    { id: 'work', title: 'Consultations, procedures and recalls', line: 'Each is work with an animal, a vet, a room, a duration and a type — routine, preventive or emergency.', why: 'Separating emergency from routine is what makes displacement measurable.', example: 'Emergency work at eighteen percent of clinical hours.' },
    { id: 'inventory', title: 'Vaccines, medicines and consumables', line: 'Stock is held with batch, expiry, supplier return eligibility, storage requirement and dispensing records.', why: 'In-house dispensing carries the same expiry economics as a pharmacy.', example: 'Eighty-six thousand expiring within ninety days with return windows open on part of it.' },
    { id: 'workforce', title: 'Vet capacity and rostering', line: 'Vet and nurse availability is recorded against consultations, procedures and emergency cover.', why: 'One capacity serves two very different demand patterns.', example: 'Routine appointments displaced by emergency load, quantified by day.' },
    { id: 'workflows', title: 'Estimates, consent and payment terms', line: 'Estimates, consent, treatment approval and payment terms move through defined steps with recorded decisions.', why: 'A cost conversation before a procedure prevents the one afterwards.', example: 'An estimate recorded and accepted before the procedure begins.' },
    { id: 'people', title: 'Vets, nurses and reception', line: 'Staff are modelled once, with consultations, procedures, dispensing and recalls attributed.', why: 'Recall conversion and dispensing both vary by individual.', example: 'Recall conversion by the person who made the call.' },
    { id: 'suppliers', title: 'Suppliers, labs and referral centres', line: 'Suppliers carry terms, return windows and reliability; labs and referral centres carry turnaround.', why: 'Lab turnaround affects when an owner can be given an answer.', example: 'Lab turnaround by test type against what owners are told.' },
    { id: 'intelligence', title: 'Recall, capacity and stock reporting', line: 'Recall adherence, emergency displacement, pharmacy expiry, estimate accuracy and outstanding balances come from the records.', why: 'The practice’s predictable revenue and its capacity risk are both measurable.', example: 'Recall adherence by species and preventive type.' },
    { id: 'ai', title: 'Ask the practice a question', line: 'Verity AI answers from your own animal, appointment, stock and owner records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about recalls due and capacity consumed.', example: '"Which animals are past their preventive recall?" returns two hundred and eighteen.' },
    { id: 'communication', title: 'Owner contact recorded', line: 'Reminders, updates and estimates attach to the animal or owner they concern.', why: 'Owners of unwell animals need updates, and the practice needs a record of what was said.', example: 'The estimate discussed with an owner, recorded before the procedure.' },
    { id: 'control', title: 'Who can discount and write off', line: 'One permission model and one audit trail across every record.', why: 'Fee decisions in emotionally difficult situations need consistency.', example: 'A write-off recorded with its reason and approver.' },
    { id: 'locations', title: 'Rooms, theatre and kennels', line: 'Locations carry their own capacity, occupancy and cleaning requirements.', why: 'Theatre and kennel capacity constrain what can be scheduled.', example: 'Theatre utilisation against scheduled procedures.' },
  ],

  workflowsHeading: 'A calendar, an emergency and a pharmacy.',
  workflowsLede: 'These already happen. Recorded, the predictable part stops being lost.',
  workflows: [
    { name: 'Preventive recall', steps: ['Recall interval set from the treatment given', 'Animals past date identified by species and type', 'Contact history checked before reminding', 'Reminder issued and outcome recorded', 'Appointment booked and next interval set'], note: 'This list is entirely in the practice’s own records and is the most predictable revenue it has.' },
    { name: 'Emergency and displacement', steps: ['Emergency case recorded with time and vet', 'Routine appointments displaced identified', 'Owners informed and rebooked', 'Emergency hours aggregated against capacity', 'Scheduling adjusted for recurring patterns'], note: 'Measuring displacement is what makes realistic scheduling possible.' },
    { name: 'Estimate to procedure', steps: ['Estimate prepared and discussed with the owner', 'Consent recorded against the animal and procedure', 'Procedure performed with consumables recorded', 'Actual against estimate compared', 'Bill raised with the estimate referenced'], note: 'The cost conversation before is much easier than the one afterwards.' },
    { name: 'Pharmacy management', steps: ['Stock received with batch, expiry and storage recorded', 'Dispensing recorded against animals', 'Expiry and return windows monitored', 'Return or write-off decided in time', 'Reorder driven by dispensing history'], note: 'The return window closes before the expiry date, as it does in any pharmacy.' },
    { name: 'Payment and balances', steps: ['Payment policy applied at treatment', 'Balances aged on the owner record', 'Follow-up assigned with history attached', 'Policy applied consistently at thresholds', 'Outcome recorded'], note: 'Consistency is kinder than case-by-case decisions made under emotional pressure.' },
  ],

  ai: {
    heading: 'Ask what is due and what is displaced.',
    lede: 'Verity AI reads the same animal, appointment, stock and owner records the practice creates as it works. It answers from your own practice, respects permissions, and can turn an answer into calls and orders.',
    panelMeta: 'Grounded in your practice records',
    note: 'Verity AI only returns what the person asking has permission to see. It does not provide clinical advice.',
    questions: [
      'Which animals are past their vaccination or preventive recall?',
      'How much clinical time is going to emergency work?',
      'What pharmacy stock expires within ninety days and is still returnable?',
      'Which routine appointments were displaced this month?',
      'Which owners have balances outstanding?',
      'What is recall conversion by species and by caller?',
      'Which procedures ran materially over their estimate?',
      'Which laboratories take longest for which tests?',
      'Summarise recall adherence and capacity use.',
    ],
  },

  automationHeading: 'The calendar and the stock.',
  automationLede: 'Each runs from the practice’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A recall date passes', steps: ['Animal flagged with owner and history', 'Contact assigned with prior conversation attached', 'Outcome recorded and next interval set'] },
    { trigger: 'An emergency displaces appointments', steps: ['Displaced appointments identified', 'Owners informed and rebooking assigned', 'Displacement recorded against capacity'] },
    { trigger: 'Pharmacy stock approaches a return window', steps: ['Flagged with value and supplier terms', 'Return or use-first decision assigned', 'Credit tracked on return'] },
    { trigger: 'A procedure exceeds its estimate', steps: ['Flagged against the case', 'Owner conversation raised', 'Variance recorded for future estimating'] },
    { trigger: 'An owner balance passes its terms', steps: ['Aged with history attached', 'Follow-up assigned', 'Policy applied consistently'] },
  ],

  intelligenceHeading: 'What the practice can see.',
  intelligenceLede: 'Predictable demand, unpredictable load and dispensing stock.',
  intelligence: [
    { area: 'Preventive', points: ['Recall adherence by species and type', 'Animals overdue and by how long', 'Conversion from reminder to appointment', 'Preventive revenue against total'] },
    { area: 'Capacity', points: ['Emergency against routine clinical hours', 'Appointments displaced and rebooked', 'Vet and nurse utilisation', 'Theatre and kennel occupancy'] },
    { area: 'Pharmacy', points: ['Expiry exposure and return eligibility', 'Dispensing by animal and vet', 'Stock cover against dispensing history', 'Write-offs by value and reason'] },
    { area: 'Commercial', points: ['Estimate against actual by procedure', 'Balances outstanding and ageing', 'Write-offs and discounts', 'Revenue per animal and per household'] },
  ],
  intelligenceNote: 'Verity records the practice around the clinical work. Clinical records and diagnostic systems continue as they are.',

  rolesHeading: 'One practice, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Practice owner', question: 'Are we capturing the predictable revenue?', focus: 'Recall adherence, emergency displacement, pharmacy expiry, balances outstanding.' },
    { role: 'Vet', question: 'What is this animal’s history?', focus: 'Animal record and history, recalls due, dispensing, estimates and consent.' },
    { role: 'Practice manager', question: 'What needs chasing?', focus: 'Overdue recalls, appointments displaced, expiring stock, balances due.' },
    { role: 'Reception', question: 'Who am I calling and about what?', focus: 'Recalls due with history, rebookings, collections, balances outstanding.' },
  ],

  useCasesHeading: 'What veterinary practices use Verity for',
  useCases: [
    { name: 'Preventive recall', body: 'Vaccination and preventive intervals on the animal record with contact history, working the practice’s most predictable revenue.' },
    { name: 'Emergency displacement', body: 'Emergency and routine work recorded separately against capacity, so displacement becomes a number rather than a feeling.' },
    { name: 'In-house pharmacy', body: 'Batch, expiry and supplier return eligibility on dispensing stock, so short-dated medicines are recovered.' },
    { name: 'Estimates before procedures', body: 'Cost estimates and consent recorded before treatment, avoiding the harder conversation afterwards.' },
    { name: 'Household view', body: 'Animals grouped under owners and households, so the relationship and the balance are visible together.' },
    { name: 'Consistent payment policy', body: 'Balances aged with policy applied consistently rather than decided case by case under emotional pressure.' },
    { name: 'Asking about the calendar', body: 'Plain-language questions across recalls, capacity, stock and balances, with calls raised in the same step.' },
  ],

  migration: 'Clinical records and diagnostic systems continue and are mapped during implementation. Animals and owners with recall dates, pharmacy stock with batches, suppliers and outstanding balances are brought across.',

  faqHeading: 'Questions veterinary practices ask',
  faqs: [
    ['Does Verity hold clinical records?', 'No. Clinical records, diagnostics and imaging remain in your existing systems and are mapped during implementation. Verity runs the practice around them — recalls, capacity, pharmacy stock, estimates and balances.'],
    ['What can AI software do for a veterinary practice?', 'Verity AI answers questions from your own animal, appointment, stock and owner records: which animals are past preventive recall, how much clinical time goes to emergencies, what pharmacy stock is expiring and still returnable, which owners have balances outstanding. Each answer can become a call or an order.'],
    ['Why focus on preventive recall?', 'Because it is the practice’s most predictable revenue and its most neglected list. The recall dates are clinical facts already sitting in your records, and the only thing standing between them and an appointment is someone working the list.'],
    ['How does it help with emergencies?', 'Emergency and routine work are recorded separately against the same capacity, so the proportion of clinical hours consumed by unscheduled work and the routine appointments it displaced become measurable rather than felt.'],
    ['Can it manage in-house pharmacy?', 'Stock carries batch, expiry, storage requirement and supplier return eligibility, so short-dated medicine is returned or used first rather than written off — the return window closes before the expiry date.'],
    ['Does it record estimates?', 'Estimates and consent are recorded against the case before the procedure, and actual cost is compared afterwards, which makes both the owner conversation and future estimating better.'],
    ['Can it group animals by household?', 'Animals are records under owners and households, so a family with three animals is one relationship with one balance rather than three separate records.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of recall intervals, dispensing and payment practice, configuration, migration of animals, owners and stock, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the recalls nobody has called.',
  ctaLede: 'The list is already in your records. Tell us how recalls are worked today.',

  related: ['clinics', 'pet-stores', 'pharmacies', 'dental-clinics', 'diagnostic-labs', 'physiotherapy-clinics'],
};
