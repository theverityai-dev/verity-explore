export default {
  slug: 'auto-parts-stores',
  status: 'published',
  plural: 'auto parts stores',
  subject: 'auto parts business',

  seo: {
    title: 'AI business management software for auto parts stores | Verity',
    description:
      'Verity connects fitment accuracy, wrong-part returns, cross-reference lookups, garage credit accounts and supplier terms into one operational system.',
    keywords: [
      'AI software for auto parts stores',
      'auto parts retail management software',
      'fitment and cross reference tracking',
      'garage trade credit and returns software',
    ],
  },

  hero: {
    eyebrow: 'Verity for auto parts',
    headline: 'The part either fits the vehicle or it comes back.',
    lede:
      'Everything in auto parts turns on fitment: the right part for the right vehicle, first time. Verity records fitment, the returns that prove it wrong, and the garage accounts that depend on it.',
    note: 'Runs alongside your existing billing setup.',
    panel: {
      title: 'Counter',
      meta: 'This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Lines carried', value: '18,600', note: 'across 2 locations' },
        { label: 'Wrong-part returns', value: '6.4%', note: 'of counter sales' },
        { label: 'Garage credit', value: '₹31 L', note: '74 accounts' },
        { label: 'Slow stock', value: '₹19 L', note: 'no sale in 12 months' },
      ],
      rows: [
        { name: 'Wrong-part returns concentrated on three model ranges', meta: 'Cross-reference gaps at the counter', active: true },
        { name: '₹31 L on garage credit, ₹9 L beyond 60 days', meta: 'Garages still ordering daily', active: true },
        { name: 'Superseded parts still stocked as current', meta: '210 lines · replacement exists', active: true },
        { name: 'Urgent orders sourced at higher cost', meta: 'Availability failure on common lines', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own counter in this shape.',
    },
  },

  overview: {
    heading: 'A part is only a part if it fits the vehicle in front of the customer.',
    paragraphs: [
      'Auto parts retail is a fitment problem before it is a stock problem. The same component exists in dozens of variants across model years, engine codes and trim levels, and supplying the wrong one costs the sale, the return handling and often the garage relationship. A six percent wrong-part return rate is not a customer behaviour; it is a lookup failure at the counter.',
      'That failure concentrates. Particular model ranges, particular components and particular staff produce most of it, and it is only visible if the return records why the part came back.',
      'The second fact is supersession. Manufacturers replace parts, and a store carrying superseded numbers as current sells something the vehicle no longer takes. Two hundred and ten lines carrying a superseded number is stock that will be returned or written off.',
      'The third is that garages are the customer base and they buy on credit, daily, in small amounts. Thirty-one lakh of exposure across seventy-four accounts still ordering is the store’s working capital in someone else’s workshop.',
      'The fourth is availability. A garage with a vehicle on a lift needs the part now, and a store that cannot supply it loses that job and often the next several.',
      'Verity records fitment and cross-references, returns with reasons, supersession and the garage accounts that fund it.',
    ],
  },

  terminology: [
    ['Parts, part numbers, cross-references', 'Records'],
    ['Vehicles, models, applications', 'Records'],
    ['Counter sales, returns, urgent orders', 'Orders'],
    ['Garages, workshops, retail customers', 'Relationships'],
    ['Distributors, manufacturers, agents', 'Suppliers'],
    ['Credit limits, returns approval', 'Workflows'],
    ['Counter, godown, branches', 'Locations'],
  ],

  challengesHeading: 'Fitment, supersession and credit.',
  challengesLede:
    'Auto parts difficulties come from a lookup that has to be right and a customer base that buys on credit every day.',
  challenges: [
    { problem: 'Wrong parts are supplied and returned', detail: 'A variant is missed at the counter, the garage returns it, and the store absorbs the handling and the reputation cost.', outcome: 'Fitment and cross-references sit on the part, and returns record the reason so the gaps are identifiable.' },
    { problem: 'Superseded parts are stocked as current', detail: 'A manufacturer replaces a number and the store keeps selling the old one until it comes back.', outcome: 'Supersession is recorded on the part, so superseded stock is flagged rather than sold.' },
    { problem: 'Garage credit grows daily', detail: 'Small frequent purchases on account accumulate faster than anyone reviews them.', outcome: 'Exposure and ageing sit on the account and are checked when the next order is taken.' },
    { problem: 'Availability failures cost the whole job', detail: 'A vehicle on a lift needs the part now; a store that cannot supply loses the job and the next ones.', outcome: 'Availability is tracked on the most frequently requested applications, and urgent sourcing is recorded with its cost.' },
    { problem: 'Return reasons are not recorded', detail: 'Wrong part, wrong order, no longer needed and defective are all recorded as returns.', outcome: 'Reasons are captured, so counter error is separable from customer change and from supplier defect.' },
    { problem: 'Slow stock accumulates across model generations', detail: 'Parts for vehicles no longer on the road stay in the racks for years.', outcome: 'Movement by application and model age is recorded, so obsolescence is visible.' },
  ],

  modulesLede: 'One system across fitment, stock, returns and garage accounts.',
  modules: [
    { id: 'records', title: 'Parts, applications and cross-references', line: 'Each part carries its number, applications by vehicle and variant, cross-references, equivalents and supersession status.', why: 'The lookup is the product, and it is currently in a catalogue and a counterman’s memory.', example: 'Superseded numbers flagged before the part is sold.' },
    { id: 'inventory', title: 'Stock by part and location', line: 'Stock is held per part with cost, movement, location and application demand.', why: 'Stocking decisions in auto parts are decisions about which vehicles you serve.', example: 'Slow stock concentrated in applications for vehicles no longer common locally.' },
    { id: 'orders', title: 'Counter sales, returns and urgent orders', line: 'Transactions record the part, the vehicle it was for, the customer, the staff member and any return with its reason.', why: 'Recording the vehicle is what makes fitment error measurable.', example: 'Wrong-part returns concentrated on three model ranges.' },
    { id: 'relationships', title: 'Garages and trade accounts', line: 'Accounts carry credit limits, balances, ageing, order history and return behaviour.', why: 'Garages are the customer base and the credit exposure at the same time.', example: 'Nine lakh beyond sixty days across accounts ordering daily.' },
    { id: 'suppliers', title: 'Distributors and manufacturers', line: 'Suppliers carry the parts they supply, prices, availability, supersession notices and balances.', why: 'Urgent sourcing at higher cost is a supplier decision made under pressure.', example: 'Urgent orders and their cost premium, recorded against the availability failure that caused them.' },
    { id: 'workflows', title: 'Credit, returns and write-offs', line: 'Credit beyond limit, returns beyond policy and obsolescence write-offs move through approval steps.', why: 'Returns and credit are both decided at a counter under time pressure.', example: 'A return outside policy recorded as an approval with the reason.' },
    { id: 'people', title: 'Counter staff and storekeepers', line: 'Staff are modelled once, and every sale, lookup, return and credit entry carries who handled it.', why: 'Fitment accuracy is a skill and it varies by person.', example: 'Wrong-part return rate by counter staff member.' },
    { id: 'intelligence', title: 'Fitment, credit and obsolescence reporting', line: 'Return rate by reason and model range, supersession exposure, credit ageing, availability on top applications and urgent-order cost come from the records.', why: 'Every one of these is a counter-level fact that only appears when the vehicle is recorded with the sale.', example: 'Return rate by staff member and model range, which is a training decision.' },
    { id: 'ai', title: 'Ask the counter a question', line: 'Verity AI answers from your own part, sale, return and account records, respects permissions, and can create assigned follow-ups.', why: 'Eighteen thousand parts and seventy-four accounts exceed what anyone can hold.', example: '"Where are wrong-part returns concentrated?" returns three model ranges with the gaps named.' },
    { id: 'locations', title: 'Counter, godown and branches', line: 'Locations roll into the business with stock and reporting following the same structure.', why: 'A part at another branch is available if anyone can see it.', example: 'Availability across branches at part level for urgent requests.' },
    { id: 'control', title: 'Who can extend credit and accept returns', line: 'One permission model and one audit trail across every record.', why: 'Both decisions are made at the counter with a garage waiting.', example: 'Credit beyond limit and returns beyond policy carrying their approver.' },
    { id: 'communication', title: 'What was agreed with a garage', line: 'Notes, commitments and contact attach to the account they concern.', why: 'Trade relationships run on informal price and availability commitments.', example: 'A price agreed for a garage’s regular lines, on their account.' },
  ],

  workflowsHeading: 'Lookup, supply, return, collect.',
  workflowsLede: 'These already happen at the counter. Recorded, the fitment error becomes measurable.',
  workflows: [
    { name: 'Fitment lookup and sale', steps: ['Vehicle identified with model, year and variant', 'Applicable parts and cross-references surfaced', 'Supersession checked before supply', 'Sale recorded with the vehicle it was for', 'Account credit checked where applicable'], note: 'Recording the vehicle at sale is what makes every fitment measure possible afterwards.' },
    { name: 'Return with reason', steps: ['Return received against the original sale and vehicle', 'Reason recorded — wrong part, wrong order, defective, not needed', 'Stock restored or claimed against the supplier', 'Reason aggregated by model range and staff member', 'Training or catalogue action assigned'], note: 'Separating counter error from customer change is the whole value of the reason field.' },
    { name: 'Supersession handling', steps: ['Supplier supersession notice recorded against the part', 'Existing stock flagged as superseded', 'Replacement part linked as the current number', 'Return or write-off decision taken on remaining stock', 'Counter lookup updated to the current number'], note: 'Selling a superseded part is a guaranteed return and a lost garage relationship.' },
    { name: 'Garage credit', steps: ['Account identified when the order is taken', 'Balance, ageing and limit checked', 'Order released or held for approval', 'Balance aged from the invoice', 'Collection follow-up assigned while ordering continues'], note: 'Checking when the order is taken is the only point the decision can prevent anything.' },
    { name: 'Urgent sourcing', steps: ['Requested part unavailable in stock', 'Availability checked at other branches', 'Urgent supplier order raised where necessary', 'Cost premium recorded against the failure', 'Frequently urgent lines flagged for stocking review'], note: 'Repeated urgent sourcing on the same line is a stocking decision, not a supplier problem.' },
    { name: 'Obsolescence review', steps: ['Movement pulled by part and application', 'Parts for vehicles no longer common identified', 'Supplier return eligibility checked', 'Return or write-off decided', 'Racking space released'], note: 'Auto parts stock does not spoil; it becomes irrelevant, which is slower and easier to ignore.' },
  ],

  ai: {
    heading: 'Ask why parts come back.',
    lede: 'Verity AI reads the same part, sale, return and account records the counter creates as it trades. It answers from your own store, respects permissions, and can turn an answer into ordering and collection.',
    panelMeta: 'Grounded in your counter records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Where are wrong-part returns concentrated, by model range and staff member?',
      'Which stocked parts have been superseded?',
      'Which garage accounts are past terms and still ordering?',
      'Which parts are we sourcing urgently and repeatedly?',
      'Which stock serves vehicles no longer common locally?',
      'What is credit exposure by account against limits?',
      'What is return rate by reason?',
      'Which parts are available at the other branch?',
      'Summarise fitment accuracy and credit exposure.',
    ],
  },

  automationHeading: 'The checks with a garage waiting.',
  automationLede: 'Each runs from the counter’s own records at the point the condition is met.',
  automations: [
    { trigger: 'A supersession notice is recorded', steps: ['Existing stock flagged as superseded', 'Replacement linked as current', 'Return or write-off decision raised'] },
    { trigger: 'A wrong-part return is recorded', steps: ['Reason attached to part, vehicle and staff member', 'Rate recalculated by model range', 'Catalogue or training action assigned'] },
    { trigger: 'An account would exceed its credit limit', steps: ['Order held at the approval step', 'Balance and ageing attached', 'Decision recorded'] },
    { trigger: 'A part is sourced urgently more than once', steps: ['Line flagged with frequency and cost premium', 'Stocking review assigned', 'Decision recorded'] },
    { trigger: 'A part passes its no-movement threshold', steps: ['Application demand checked', 'Supplier return eligibility checked', 'Return or write-off decision raised'] },
  ],

  intelligenceHeading: 'What the owner can see behind the counter.',
  intelligenceLede: 'Fitment, credit and obsolescence from the sales themselves.',
  intelligence: [
    { area: 'Fitment', points: ['Return rate by reason', 'Wrong-part returns by model range and staff', 'Supersession exposure in stock', 'Cross-reference gaps identified'] },
    { area: 'Availability', points: ['Stockouts on frequently requested applications', 'Urgent orders and their cost premium', 'Branch availability at part level', 'Cover by application'] },
    { area: 'Credit', points: ['Exposure by garage account', 'Ageing bands', 'Accounts ordering while overdue', 'Collection outcomes'] },
    { area: 'Stock', points: ['Movement by part and application', 'Obsolescence by vehicle generation', 'Supplier return eligibility', 'Capital in non-moving parts'] },
    { area: 'Supply', points: ['Price and availability by supplier', 'Supersession notices received', 'Delivery reliability', 'Outstanding payable'] },
  ],
  intelligenceNote: 'All of it follows from recording the vehicle with the sale, which the counter already establishes verbally.',

  rolesHeading: 'A busy counter, three views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Why do parts come back and who owes me?', focus: 'Return rate by reason and staff, supersession exposure, credit ageing, obsolescence.' },
    { role: 'Counter staff', question: 'Which part fits this vehicle?', focus: 'Applications and cross-references, supersession status, availability across branches, account limits.' },
    { role: 'Storekeeper', question: 'What needs ordering and what is dead?', focus: 'Fast applications below cover, urgent-order patterns, non-moving stock, supplier returns.' },
  ],

  useCasesHeading: 'What auto parts stores use Verity for',
  useCases: [
    { name: 'Fitment accuracy', body: 'Applications and cross-references on the part with the vehicle recorded at sale, making wrong-part supply measurable rather than absorbed.' },
    { name: 'Supersession control', body: 'Superseded numbers flagged before supply, avoiding a guaranteed return and a damaged garage relationship.' },
    { name: 'Return reasons', body: 'Counter error separated from customer change and supplier defect, which is what makes any of them fixable.' },
    { name: 'Garage credit at order', body: 'Balance, ageing and limit checked when the order is taken rather than at month end.' },
    { name: 'Urgent-order patterns', body: 'Repeated urgent sourcing on the same line surfaced as a stocking decision with its cost premium.' },
    { name: 'Obsolescence by vehicle generation', body: 'Movement by application, so parts for vehicles no longer on the road are identified while returns are still possible.' },
    { name: 'Asking about fitment', body: 'Plain-language questions across parts, returns, accounts and suppliers, with actions raised in the same step.' },
  ],

  migration: 'Your billing setup and catalogue arrangements continue and are mapped during implementation. Parts, applications, cross-references, garage accounts and supplier terms are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions auto parts retailers ask',
  faqs: [
    ['What can AI software do for an auto parts store?', 'Verity AI answers questions from your own part, sale, return and account records: where wrong-part returns concentrate by model range and staff member, which stocked parts have been superseded, which garages are past terms and still ordering, which parts you source urgently and repeatedly. Each answer can become an ordering, training or collection action.'],
    ['Why record the vehicle with the sale?', 'Because fitment is the product. Recording the vehicle is what turns a return rate into a measurable lookup problem concentrated in specific model ranges and specific staff, rather than an accepted cost of the trade.'],
    ['How does it handle supersession?', 'Supersession status sits on the part with the replacement linked as the current number, so stock carrying a superseded number is flagged before it is supplied rather than after it comes back.'],
    ['Can it control garage credit?', 'Balance, ageing and limit are checked when the order is taken, so an order that would take an account past its limit is held for approval. Garages buy small amounts daily, which is exactly how exposure grows unnoticed.'],
    ['What about parts we keep having to source urgently?', 'Repeated urgent sourcing on the same line is recorded with its cost premium and surfaced as a stocking decision, since it is an availability failure rather than a supplier problem.'],
    ['Does it help with obsolete stock?', 'Movement is recorded by application, so parts serving vehicles no longer common locally are identified while supplier return eligibility may still exist — auto parts do not spoil, they become irrelevant slowly.'],
    ['Does Verity replace our billing or catalogue?', 'No. Both continue and are mapped during implementation. Verity holds the fitment records, the stock, the returns, the accounts and the reporting across them.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of the catalogue and credit practice, configuration, migration of parts, applications and account balances, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with why parts come back.',
  ctaLede: 'It is almost always a lookup gap you can name. Tell us how returns are recorded today.',

  related: ['hardware-stores', 'auto-repair-shops', 'retail-stores', 'industrial-suppliers', 'distributors', 'car-rentals'],
};
