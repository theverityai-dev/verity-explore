/* The nine industry hubs. Each is a real page with its own context, not a
   directory listing. `businesses` is derived at build time from the business
   registry, so this file never lists slugs by hand. */

export const INDUSTRIES = {
  'retail-commerce': {
    name: 'Retail & Commerce',
    short: 'Retail',
    metaTitle: 'AI software for retail and commerce businesses | Verity',
    metaDescription:
      'Verity connects stock, orders, suppliers, customers and store performance into one operational system for retail and commerce businesses.',
    headline: 'Retail runs on stock, and stock runs on records.',
    lede:
      'A retail business is a stock position, a customer list and a day’s takings, and in most shops those three live in three different places. Verity puts them on one record model so the stock you hold, the orders you have placed and the customers who keep coming back are the same system.',
    context: [
      'Retail is unusual among industries in that the thing being managed is physically present and constantly moving. Stock arrives from suppliers, sits, sells, gets returned, gets written off, and has to be reordered before it runs out — usually while the person who understands the pattern is serving a customer.',
      'The information problem is not that retailers lack data. It is that the sale, the stock movement, the purchase order and the customer’s history are recorded in four systems that do not know about each other, so answering "which lines are tying up money without moving" takes an evening with a spreadsheet.',
    ],
    capabilities: ['inventory', 'orders', 'suppliers', 'relationships', 'intelligence', 'ai', 'workflows', 'locations'],
    challenges: [
      ['Stock truth lives in two places', 'The shelf says one thing and the sheet says another, and nobody trusts either at the point where a reorder decision has to be made.'],
      ['Reordering is a memory exercise', 'Purchase decisions depend on whoever has been there longest noticing that something is running low.'],
      ['Customer history stops at the till', 'A repeat customer is recognised by face, not by record, so nothing follows up when they stop coming in.'],
      ['Performance is monthly, not daily', 'What sold, what did not and what it cost only becomes clear well after the week that produced it.'],
    ],
  },

  'food-hospitality': {
    name: 'Food & Hospitality',
    short: 'Hospitality',
    metaTitle: 'AI software for restaurants and hospitality | Verity',
    metaDescription:
      'Verity connects orders, ingredients, staff rosters, suppliers and daily revenue into one operational system for restaurants, cafés, hotels and catering businesses.',
    headline: 'The day is the unit of work, and it does not wait.',
    lede:
      'Hospitality operations are settled and re-settled every service. Verity keeps the orders, the stock they consume, the people on shift and the money they produce on one record, so the day can be understood while it is still running.',
    context: [
      'A hospitality business converts perishable stock into revenue on a clock. Everything that matters — covers, order volume, ingredient consumption, staff on shift, waste — happens inside a few hours and then is gone, which is why so much of the sector’s reporting is reconstructed from memory the next morning.',
      'The operational questions are not complicated, but they are time-sensitive: what is selling tonight, what are we about to run out of, who is short-staffed, and did today make money. Those answers exist in the orders, the stock movements and the roster — provided those three are the same system.',
    ],
    capabilities: ['orders', 'inventory', 'workforce', 'suppliers', 'schedule', 'intelligence', 'ai', 'locations'],
    challenges: [
      ['Consumption is invisible until it is a shortage', 'Ingredients leave stock without leaving a record, so the first sign of a problem is an item coming off the menu.'],
      ['Rosters and revenue are unrelated data', 'Staffing decisions are made on habit rather than on what the equivalent day actually produced.'],
      ['Suppliers are managed by phone', 'Orders, prices and shortfalls live in call history and WhatsApp threads rather than in a record.'],
      ['Multi-outlet means multi-spreadsheet', 'Each site reports in its own format, and the group view is assembled by hand.'],
    ],
  },

  'professional-services': {
    name: 'Professional Services',
    short: 'Professional',
    metaTitle: 'AI software for professional services firms | Verity',
    metaDescription:
      'Verity connects client work, matters, projects, documents, approvals and billing into one operational system for law firms, accountants, consultancies and agencies.',
    headline: 'The product is work, and the work is people’s time.',
    lede:
      'A professional services firm sells the attention of the people it employs. Verity connects the client, the engagement, the work inside it, the documents it produces and the approvals it needs, so utilisation and delivery stop being separate conversations.',
    context: [
      'Every professional firm runs the same shape of operation regardless of discipline: a relationship, an engagement under it, a set of deliverables and deadlines, documents that must be findable years later, and time that either was or was not recoverable.',
      'The failure mode is equally consistent. The client relationship sits in one system, the matter or project in another, the documents in a shared drive and the billing in a third, so the question "is this engagement actually profitable and on schedule" requires a person to reconcile them.',
    ],
    capabilities: ['work', 'relationships', 'records', 'people', 'workflows', 'communication', 'intelligence', 'ai'],
    challenges: [
      ['Engagement health is discovered late', 'A matter that has quietly consumed twice its budget looks identical to a healthy one until someone reviews it.'],
      ['Documents outlive the systems holding them', 'The version that matters is in a folder whose naming convention only one person understands.'],
      ['Deadlines are tracked personally', 'Statutory and client deadlines sit in individual calendars rather than in the record they belong to.'],
      ['Capacity is a feeling', 'Who is overloaded and who has room is known anecdotally, and staffing decisions follow the anecdote.'],
    ],
  },

  healthcare: {
    name: 'Healthcare',
    short: 'Healthcare',
    metaTitle: 'AI software for clinics and healthcare practices | Verity',
    metaDescription:
      'Verity connects patient records, clinical work, staff rosters, consumables and reporting into one operational system for clinics, hospitals, labs and pharmacies.',
    headline: 'Care is delivered by an operation, and the operation is usually invisible.',
    lede:
      'Behind every consultation is a roster, a consumable, a record and a follow-up. Verity manages that operational layer — the scheduling, stock, staffing, documentation and reporting around care — on one system.',
    context: [
      'Healthcare businesses carry an operational load that has nothing to do with clinical skill: staff must be rostered across shifts, consumables and reagents must be in stock, records must be retained and retrievable, follow-ups must actually happen, and every one of those has a compliance dimension.',
      'Verity is not a clinical system and does not attempt to be. It manages the practice around the clinic: the people, the stock, the work, the documents and the reporting that determine whether the clinical side can function.',
    ],
    capabilities: ['people', 'work', 'records', 'inventory', 'workflows', 'control', 'intelligence', 'locations'],
    challenges: [
      ['Rosters and demand are set separately', 'Staffing is planned on a template rather than against the volume the equivalent period actually saw.'],
      ['Consumables run out mid-week', 'Stock of reagents, disposables and supplies is checked manually and reordered reactively.'],
      ['Follow-ups depend on someone remembering', 'The patient who should return in six weeks is tracked in a diary, not in the record.'],
      ['Multi-site reporting is reassembled monthly', 'Each branch counts differently and the group picture is built by hand.'],
    ],
  },

  education: {
    name: 'Education',
    short: 'Education',
    metaTitle: 'Business management software for schools and institutes | Verity',
    metaDescription:
      'Verity connects admissions, student records, staff, timetabling, fees and reporting into one operational system for schools, colleges and training institutes.',
    headline: 'An institution is an operation with a very long memory.',
    lede:
      'Education organisations manage more people, over more years, with more record-keeping obligations than almost any other sector of comparable size. Verity holds the admissions, the students, the staff, the work and the documentation on one model.',
    context: [
      'A school or institute runs several parallel operations at once: admissions and enrolment, timetabling and staffing, fee collection and follow-up, academic and administrative records, parent communication, and reporting to boards or regulators. Each tends to acquire its own system, and none of them share a person record.',
      'The result is that the same student exists five times, the same parent is contacted from three systems, and any question spanning two of those systems is answered by a member of staff with a spreadsheet.',
    ],
    capabilities: ['people', 'records', 'work', 'workflows', 'communication', 'control', 'intelligence', 'ai'],
    challenges: [
      ['The same person exists in several systems', 'A student in admissions, in the fee ledger and in the academic record is three records that never reconcile.'],
      ['Fee follow-up is manual and awkward', 'Chasing outstanding payments depends on someone maintaining a list and working through it.'],
      ['Staff workload is uneven and unmeasured', 'Teaching and administrative load is distributed by habit rather than by what the records show.'],
      ['Compliance reporting is an annual scramble', 'Data that should be a query becomes a project because it was never held in one place.'],
    ],
  },

  'real-estate-construction': {
    name: 'Real Estate & Construction',
    short: 'Real estate',
    metaTitle: 'AI software for real estate and construction | Verity',
    metaDescription:
      'Verity connects leads, properties, site work, contractors, materials and approvals into one operational system for agencies, developers and construction firms.',
    headline: 'The work is distributed, and so is everyone who knows about it.',
    lede:
      'Real estate and construction operations run across sites, agents, contractors and stages that rarely share a system. Verity holds the pipeline, the properties, the site work and the approvals on one record with one permission model.',
    context: [
      'This sector has two distinct operations that share a record set. On one side there is a pipeline: enquiries, viewings, negotiations, agents, commissions. On the other there is execution: sites, crews, materials, inspections, milestones and payments against them.',
      'Both suffer the same structural problem — the people who hold the information are not at a desk. Updates arrive as phone calls and photographs, and the system of record is whoever answered.',
    ],
    capabilities: ['relationships', 'work', 'records', 'locations', 'workflows', 'people', 'suppliers', 'intelligence'],
    challenges: [
      ['Pipeline lives in agents’ phones', 'Enquiries, viewings and follow-ups are tracked personally, and leave when the agent does.'],
      ['Site status arrives as narrative', 'Progress is reported in messages and photos rather than as a state on a record.'],
      ['Approvals stall invisibly', 'A payment or change order waits on someone who does not know it is waiting.'],
      ['Material and contractor costs are reconciled after the fact', 'Overruns are discovered at billing rather than at the point of commitment.'],
    ],
  },

  'manufacturing-b2b': {
    name: 'Manufacturing & B2B',
    short: 'Manufacturing',
    metaTitle: 'AI software for manufacturers and B2B businesses | Verity',
    metaDescription:
      'Verity connects production work, raw materials, suppliers, orders, quality checks and dispatch into one operational system for manufacturers, wholesalers and distributors.',
    headline: 'Everything that stops a shipment starts somewhere upstream.',
    lede:
      'Manufacturing and distribution are chains of dependent steps, and a delay at any one of them surfaces at the end as a late order. Verity connects materials, production, quality, stock and dispatch so the cause is visible where it happens.',
    context: [
      'This is the operation Verity’s record model was shaped around. Raw materials arrive against purchase orders, are consumed by production work, become finished goods in stock, are committed to customer orders and leave through dispatch — with quality checks, approvals and exceptions at every transition.',
      'When those transitions are recorded in different systems, the business can see that an order is late but not why. When they share a record, the QC backlog that is holding eleven items is visible in the same view as the dispatch it is blocking.',
    ],
    capabilities: ['inventory', 'orders', 'suppliers', 'logistics', 'work', 'workflows', 'locations', 'intelligence'],
    challenges: [
      ['Late orders have untraceable causes', 'The delay is visible at the end of the chain, and the reason is somewhere in the middle.'],
      ['Raw material and finished stock are counted separately', 'Two stock systems means no view of what can actually be committed to a customer.'],
      ['Quality holds are communicated informally', 'A batch on hold blocks dispatch, and dispatch finds out when the truck is loading.'],
      ['Supplier reliability is anecdotal', 'Which vendors deliver late is known by reputation rather than from the order history.'],
    ],
  },

  'personal-local-services': {
    name: 'Personal & Local Services',
    short: 'Local services',
    metaTitle: 'Business software for salons, gyms and local services | Verity',
    metaDescription:
      'Verity connects customers, staff, jobs, stock and daily takings into one operational system for salons, spas, gyms, studios and local service businesses.',
    headline: 'Small operations still have an operation.',
    lede:
      'A salon, a studio or a repair shop is a business where the owner is also the operator, which is exactly why the record-keeping loses. Verity keeps customers, staff, jobs and stock on one system that does not require an administrator to maintain.',
    context: [
      'Local service businesses run on repeat custom and staff availability. The economics are simple and unforgiving: a customer who does not come back is not replaced cheaply, and an hour of unfilled staff time is gone.',
      'What these businesses rarely have is anyone whose job is to maintain a system. So the customer history is in a book, the staff schedule is on a wall, and the stock check happens when something runs out — and none of that produces the pattern that would tell the owner which customers have quietly stopped coming.',
    ],
    capabilities: ['relationships', 'people', 'work', 'workforce', 'inventory', 'intelligence', 'ai', 'communication'],
    challenges: [
      ['Repeat custom is not measured', 'The business knows its regulars by face, and does not know when one stops returning.'],
      ['Staff time is booked, not analysed', 'Utilisation and no-shows are absorbed rather than recorded.'],
      ['Retail stock is a side business nobody runs', 'Products sold alongside services are counted rarely and reordered late.'],
      ['The owner is the system', 'Everything operational depends on one person’s memory and attention.'],
    ],
  },

  'digital-technology': {
    name: 'Digital & Technology',
    short: 'Technology',
    metaTitle: 'Business management software for technology companies | Verity',
    metaDescription:
      'Verity connects clients, projects, delivery work, orders and team capacity into one operational system for SaaS companies, agencies, developers and e-commerce businesses.',
    headline: 'The product is engineered. The business around it usually is not.',
    lede:
      'Technology businesses instrument their product carefully and run their operations on a stack of disconnected tools. Verity connects the clients, the delivery work, the team capacity and the commercial record into one operational system.',
    context: [
      'A digital business has excellent visibility into its product and poor visibility into itself. Delivery work sits in an issue tracker, clients in a CRM, contracts in a drive, invoices in an accounting tool and capacity in nobody’s system at all.',
      'The questions that go unanswered are commercial rather than technical: which accounts are consuming more delivery than they pay for, which projects are late and why, and how much capacity is actually committed next month.',
    ],
    capabilities: ['work', 'relationships', 'people', 'records', 'workflows', 'intelligence', 'ai', 'communication'],
    challenges: [
      ['Delivery and commercial data never meet', 'Effort is tracked in one system and revenue in another, so account profitability is a guess.'],
      ['Capacity is committed before it is checked', 'Work is sold against a team’s availability that nobody has actually calculated.'],
      ['Client context is scattered', 'The history of an account lives across a CRM, a chat tool, an inbox and a drive.'],
      ['Operational reporting is built ad hoc', 'Every leadership question becomes an export and a spreadsheet.'],
    ],
  },
};

export function industry(slug) {
  const ind = INDUSTRIES[slug];
  if (!ind) throw new Error(`Unknown industry: ${slug}`);
  return { slug, ...ind };
}
