export default {
  slug: 'pet-stores',
  status: 'published',
  plural: 'pet stores',
  subject: 'pet store',

  seo: {
    title: 'AI business management software for pet stores | Verity',
    description:
      'Verity connects repeat food demand, batch and expiry on perishable stock, live animal care records, grooming services and customer pet profiles into one system.',
    keywords: [
      'AI software for pet stores',
      'pet store management software',
      'pet food repeat purchase and expiry tracking',
      'grooming service and live animal record software',
    ],
  },

  hero: {
    eyebrow: 'Verity for pet retail',
    headline: 'A dog eats the same food every month. That is the most predictable demand in retail.',
    lede:
      'Pet stores run on repeat food purchases, perishable stock with dates, live animals that need daily care and services attached to both. Verity holds all four.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Store',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Sales', value: '₹9.4 L', note: '62% food and consumables' },
        { label: 'Repeat customers', value: '486', note: '94 past expected refill' },
        { label: 'Expiring 60 days', value: '₹1.4 L', note: 'food and treats' },
        { label: 'Grooming bookings', value: '148', note: '31% of them rebooked' },
      ],
      rows: [
        { name: '94 customers past their expected food refill', meta: 'Predictable monthly demand, unfollowed', active: true },
        { name: '₹1.4 L of food expiring within 60 days', meta: 'Two brands · supplier return window open', active: true },
        { name: 'Livestock care log incomplete for three days', meta: 'Feeding and cleaning records', active: true },
        { name: 'Grooming rebooking rate at 31%', meta: 'Against 60% for the best groomer', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own store in this shape.',
    },
  },

  overview: {
    heading: 'Most of the revenue is a subscription nobody has set up.',
    paragraphs: [
      'A pet store’s largest revenue line is food and consumables, bought repeatedly on a cycle determined by the animal’s size and the pack. That is the most predictable demand in retail: the same customer, the same product, roughly the same interval. Almost no pet store treats it as such, so a customer who quietly switched to an online supplier is discovered months later, if at all.',
      'The second fact is that food is perishable with batch dates and a supplier return window, exactly like pharmacy or grocery stock. One point four lakh expiring within sixty days is recoverable if the window is still open and a total loss if it is not.',
      'The third is live animals, where the store carries a genuine daily care obligation. Feeding, cleaning, health observation and quarantine are tasks that either happened or did not, and a gap in that record is both a welfare failure and a commercial risk.',
      'The fourth is services. Grooming and similar services attach to a specific animal, are repeat by nature, and are the most retention-positive thing the store does — and rebooking rate varies enormously by groomer.',
      'Verity records the refill cycle, the batch dates, the daily care and the service history against the pet and the customer.',
    ],
  },

  terminology: [
    ['Food, treats, accessories, livestock', 'Inventory'],
    ['Sales, repeat purchases, returns', 'Orders'],
    ['Customers and their pets', 'Relationships'],
    ['Feeding, cleaning, health checks', 'Work'],
    ['Grooming, boarding, services', 'Work'],
    ['Brands, distributors, breeders', 'Suppliers'],
    ['Store, holding area, grooming room', 'Locations'],
  ],

  challengesHeading: 'Predictable demand, perishable stock and a daily obligation.',
  challengesLede:
    'Pet store difficulties come from treating repeat demand as walk-in trade and perishable stock as general stock.',
  challenges: [
    { problem: 'Refill demand is not followed up', detail: 'A customer buys the same food every five weeks and then stops, and nobody notices because nothing tracks the interval.', outcome: 'Refill cycles are derived from purchase history per customer and pet, so a lapse becomes a list.' },
    { problem: 'Food expires inside the return window', detail: 'Perishable stock is found short-dated at a shelf check, after the supplier return window has closed.', outcome: 'Batch dates and return eligibility sit on the stock, so exposure surfaces while recovery is possible.' },
    { problem: 'Live animal care is logged inconsistently', detail: 'Feeding, cleaning and observation depend on whoever is on shift and are recorded on paper if at all.', outcome: 'Daily care is work with owners and times, so a missed task is visible the same day.' },
    { problem: 'Service rebooking is left to chance', detail: 'Grooming is naturally repeat, and rebooking depends on whether the groomer remembers to offer it.', outcome: 'Service history and expected intervals sit on the pet record, so rebooking is prompted rather than remembered.' },
    { problem: 'Pet details are re-established every visit', detail: 'Breed, weight, allergies, food and grooming preferences are asked again each time.', outcome: 'The pet is a record under the customer, so every visit starts from what is known.' },
    { problem: 'Accessory stock ties up capital slowly', detail: 'Non-consumable accessories turn far more slowly than food and are ordered on the same instinct.', outcome: 'Turn is measured separately by category, so ordering matches the actual movement of each.' },
  ],

  modulesLede: 'One system across food, livestock, services and customers.',
  modules: [
    { id: 'relationships', title: 'Customers and their pets', line: 'Each customer carries their pets with breed, age, weight, dietary needs, food purchased, service history and refill intervals.', why: 'The pet is the actual subject of the relationship and the thing every purchase relates to.', example: 'Ninety-four customers past the refill interval for their pet’s food.' },
    { id: 'inventory', title: 'Food, treats and accessories', line: 'Stock is held by batch with expiry, supplier, return eligibility and category-specific turn thresholds.', why: 'Perishable food and slow accessories cannot share one ordering discipline.', example: 'One point four lakh expiring in sixty days with the return window still open.' },
    { id: 'work', title: 'Daily care and services', line: 'Feeding, cleaning, health observation, grooming and boarding are work with owners, times and states.', why: 'Live animal care is an obligation that has to be demonstrably done, not remembered.', example: 'A care log gap of three days, visible on the day rather than at an inspection.' },
    { id: 'orders', title: 'Sales and repeat purchases', line: 'Transactions record items, the pet they were for, the customer and the staff member.', why: 'Linking the purchase to the pet is what produces the refill interval.', example: 'A food purchase recorded against the animal, so the next one is predictable.' },
    { id: 'suppliers', title: 'Brands, distributors and breeders', line: 'Suppliers carry their terms, return windows, delivery reliability, prices and balances.', why: 'Return windows on perishable stock are where recoverable value lives.', example: 'Return eligibility by brand against the expiry profile held.' },
    { id: 'people', title: 'Store staff and groomers', line: 'Staff are modelled once, and every sale, care task, service and adjustment carries who performed it.', why: 'Rebooking rate and care completion both vary sharply by individual.', example: 'Rebooking at thirty-one percent overall against sixty for the best groomer.' },
    { id: 'workflows', title: 'Returns, write-offs and health escalation', line: 'Supplier returns, expiry write-offs and health concerns move through defined steps with recorded decisions.', why: 'A health concern about a live animal needs an owner and an escalation path.', example: 'An observation raised on an animal, escalated with a recorded outcome.' },
    { id: 'intelligence', title: 'Refill, expiry and service reporting', line: 'Refill adherence, expiry and return recovery, care completion, service rebooking and category turn come from the records.', why: 'The store’s largest revenue line is predictable and its largest loss is dated.', example: 'Refill adherence by customer, which is the closest thing pet retail has to a subscription number.' },
    { id: 'ai', title: 'Ask the store a question', line: 'Verity AI answers from your own customer, pet, stock and service records, respects permissions, and can create assigned follow-ups.', why: 'The valuable questions are about specific animals and specific dates.', example: '"Which customers are past their food refill?" returns ninety-four with calls assigned.' },
    { id: 'records', title: 'Pet profiles and care notes', line: 'Breed, weight, allergies, medication and behaviour notes attach to the pet.', why: 'Grooming and dietary advice depend on details nobody should have to re-establish.', example: 'An allergy recorded once, visible to whoever serves the customer next.' },
    { id: 'locations', title: 'Store, holding area and grooming room', line: 'Locations roll into the business with stock, animals and reporting following the same structure.', why: 'Live animals are held in a location with its own care obligations.', example: 'Care tasks by holding area with completion recorded.' },
    { id: 'control', title: 'Who can discount and write off', line: 'One permission model and one audit trail across every record.', why: 'Expiry write-offs and livestock decisions both need attribution.', example: 'Every write-off carrying the batch, reason and person.' },
  ],

  workflowsHeading: 'A predictable cycle and a daily obligation.',
  workflowsLede: 'These already happen. Recorded, the repeat revenue and the care obligation both become manageable.',
  workflows: [
    { name: 'Refill follow-up', steps: ['Purchase recorded against the customer and pet', 'Refill interval derived from pack size and history', 'Customers past interval identified', 'Contact assigned with the pet’s details attached', 'Outcome recorded on the customer record'], note: 'This is the closest thing pet retail has to a subscription, and almost nobody runs it.' },
    { name: 'Expiry and supplier return', steps: ['Batches inside the return window identified by brand', 'Movement reviewed to decide return or markdown', 'Return raised against the supplier terms', 'Stock dispatched and credit tracked', 'Remaining short-dated stock marked down'], note: 'The return window closes before the expiry date, which is why late discovery costs full value.' },
    { name: 'Daily livestock care', steps: ['Care tasks generated per holding area and species', 'Feeding, cleaning and observation assigned by shift', 'Completion recorded with time and person', 'Health observations raised as exceptions', 'Escalation and outcome recorded'], note: 'A demonstrable care record protects the animals and the business at the same time.' },
    { name: 'Grooming and rebooking', steps: ['Service recorded against the pet with notes', 'Expected interval set from breed and coat', 'Rebooking offered before the customer leaves', 'Reminder issued as the interval approaches', 'Outcome recorded and rate reported by groomer'], note: 'Offering the rebooking at the counter is the single strongest driver of service revenue.' },
    { name: 'Category-appropriate ordering', steps: ['Turn measured separately for food, treats and accessories', 'Thresholds set per category', 'Reorder raised against those thresholds', 'Delivery checked with batch and expiry recorded', 'Slow accessory stock reviewed against capital held'], note: 'Ordering accessories on food instincts is how a small store ties up its capital.' },
  ],

  ai: {
    heading: 'Ask about pets and dates.',
    lede: 'Verity AI reads the same customer, pet, stock and service records the store creates as it trades. It answers from your own store, respects permissions, and can turn an answer into calls and returns.',
    panelMeta: 'Grounded in your store records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which customers are past their expected food refill?',
      'What is expiring within sixty days and still returnable?',
      'Which care tasks were missed in the holding area?',
      'What is grooming rebooking rate by groomer?',
      'Which accessory lines have not moved in six months?',
      'Which pets are due for a grooming appointment?',
      'What is turn by category — food, treats, accessories?',
      'Which brands have the best return terms on short-dated stock?',
      'Summarise repeat revenue and expiry exposure.',
    ],
  },

  automationHeading: 'The cycle and the calendar.',
  automationLede: 'Each runs from the store’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A customer passes their refill interval', steps: ['Flagged with pet and product details', 'Contact assigned', 'Outcome recorded on the record'] },
    { trigger: 'A batch approaches its return window', steps: ['Flagged with value and brand', 'Return or markdown decision assigned', 'Credit tracked on return'] },
    { trigger: 'A daily care task is not completed', steps: ['Exception raised for the holding area', 'Escalated to the shift owner', 'Completion recorded'] },
    { trigger: 'A grooming interval approaches', steps: ['Pet flagged with service history', 'Reminder assigned to the usual groomer', 'Booking or outcome recorded'] },
    { trigger: 'A health observation is raised', steps: ['Exception recorded against the animal', 'Owner assigned with an escalation path', 'Outcome recorded'] },
  ],

  intelligenceHeading: 'What the owner can see.',
  intelligenceLede: 'Repeat revenue, dated stock and care completion from the day’s records.',
  intelligence: [
    { area: 'Repeat revenue', points: ['Refill adherence by customer and pet', 'Customers past interval', 'Food revenue against total', 'Lapsed customers and their last purchase'] },
    { area: 'Stock', points: ['Expiry exposure by brand and value', 'Return eligibility remaining', 'Turn by category', 'Capital held in slow accessories'] },
    { area: 'Care', points: ['Task completion by holding area and shift', 'Missed tasks and their causes', 'Health observations and outcomes', 'Livestock held and duration'] },
    { area: 'Services', points: ['Bookings and delivery by groomer', 'Rebooking rate per groomer', 'Service revenue per pet', 'Intervals against breed expectations'] },
    { area: 'Customers', points: ['Pets per customer', 'Spend across food, accessories and services', 'Service attachment to retail customers', 'Referral and repeat patterns'] },
  ],
  intelligenceNote: 'All of it comes from recording the sale against the pet and the care task against the day.',

  rolesHeading: 'A small store, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Is the repeat revenue holding?', focus: 'Refill adherence, lapsed customers, expiry exposure, service rebooking, category turn.' },
    { role: 'Store staff', question: 'What does this pet need?', focus: 'Pet profile and history, food and interval, service due, allergies and notes.' },
    { role: 'Groomer', question: 'Who am I seeing and when are they due back?', focus: 'Bookings, pet notes and coat history, rebooking prompts, service records.' },
  ],

  useCasesHeading: 'What pet stores use Verity for',
  useCases: [
    { name: 'Refill cycle management', body: 'Purchase intervals derived per customer and pet, turning the most predictable demand in retail into a worked list.' },
    { name: 'Batch and expiry control', body: 'Perishable food tracked with return eligibility, so short-dated stock is recovered rather than written off.' },
    { name: 'Daily care records', body: 'Feeding, cleaning and observation as assigned work with completion recorded, protecting both the animals and the business.' },
    { name: 'Service rebooking', body: 'Expected intervals on the pet record with prompts, since grooming rebooking varies enormously by whether it is offered.' },
    { name: 'Pet profiles', body: 'Breed, weight, allergies and preferences recorded once rather than re-established every visit.' },
    { name: 'Category-specific ordering', body: 'Food, treats and accessories ordered against their own turn rates rather than one instinct.' },
    { name: 'Asking about pets and dates', body: 'Plain-language questions across customers, stock, care and services, with follow-ups assigned in the same step.' },
  ],

  migration: 'Your billing setup continues and is mapped during implementation. Customers, pets, stock with batches, suppliers and service history are brought across, and Verity is configured around how the store already works.',

  faqHeading: 'Questions pet retailers ask',
  faqs: [
    ['What can AI software do for a pet store?', 'Verity AI answers questions from your own customer, pet, stock and service records: which customers are past their expected food refill, what is expiring and still returnable, which care tasks were missed, what rebooking rate looks like by groomer. Each answer can become a call or a return.'],
    ['Why treat food sales as a cycle?', 'Because they are one. The same animal eats the same food at a rate determined by size and pack, which makes the interval predictable per customer. A customer who has quietly gone elsewhere is identifiable within weeks rather than months.'],
    ['Does it handle expiry on pet food?', 'Batch dates and supplier return eligibility sit on the stock, so short-dated food surfaces by value and brand while a return is still possible — the return window generally closes well before the expiry date.'],
    ['Can it record live animal care?', 'Feeding, cleaning and health observation are work with owners, times and completion recorded, so a gap is visible on the day. That record protects the animals and demonstrates the store’s care obligation.'],
    ['Does it help with grooming?', 'Services attach to the pet with an expected interval from breed and coat, so rebooking is prompted rather than left to whether the groomer remembers — and rebooking rate becomes measurable per groomer.'],
    ['Why separate accessories from food?', 'Because they turn at completely different rates. Ordering accessories on food instincts is how a small store ties up capital in stock that will sit for a year.'],
    ['Does Verity replace our billing software?', 'No. Billing continues and is mapped during implementation. Verity holds customers and pets, stock with batches, care records, services and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of how the store trades and cares for animals, configuration, migration of customers, pets and stock, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the customers who stopped buying food.',
  ctaLede: 'It is predictable revenue and it leaves quietly. Tell us how repeat purchases are tracked today.',

  related: ['veterinary-clinics', 'grocery-stores', 'retail-stores', 'convenience-stores', 'salons', 'gift-shops'],
};
