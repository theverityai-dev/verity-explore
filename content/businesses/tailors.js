export default {
  slug: 'tailors',
  status: 'published',
  plural: 'tailors',
  subject: 'tailoring business',

  seo: {
    title: 'AI business management software for tailors | Verity',
    description:
      'Verity gives tailoring businesses one system for measurement records, customer-supplied fabric, fitting stages, delivery dates tied to occasions and alteration history.',
    keywords: [
      'AI software for tailors',
      'tailoring business management software',
      'measurement and fitting record software',
      'customer fabric and order tracking for tailors',
    ],
  },

  hero: {
    eyebrow: 'Verity for tailors',
    headline: 'The wedding is on the fourteenth. The blouse is not the thing that can be late.',
    lede:
      'Tailoring is measured work delivered against an occasion, often in fabric the customer brought. Verity holds measurements, fabric and dates in one record.',
    note: 'Verity runs the business. Nothing about the craft changes.',
    panel: {
      title: 'Workroom',
      meta: 'This week',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Orders in progress', value: '146', note: '9 tailors' },
        { label: 'Due within 7 days', value: '38', note: '11 not cut' },
        { label: 'Fittings outstanding', value: '22', note: 'customer not contacted' },
        { label: 'Customer fabric held', value: '73 pieces', note: '9 unmatched to an order' },
      ],
      rows: [
        { name: '11 orders due within 7 days not yet cut', meta: 'Occasion dates, not preferences', active: true },
        { name: '9 pieces of customer fabric unmatched', meta: 'Belongs to someone, order unknown', active: true },
        { name: '22 fittings not scheduled', meta: 'Delivery date at risk', active: true },
        { name: '4 alterations returned twice', meta: 'Measurement or fit issue', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own workroom in this shape.',
    },
  },

  overview: {
    heading: 'A date that cannot move, a body that must be measured, and fabric that is not yours.',
    paragraphs: [
      'Tailoring delivers against occasions. A garment for a wedding on the fourteenth cannot be late in the way a repair or a delivery can be late, and eleven orders due within a week that are not yet cut is a set of promises about to fail on dates that will not move.',
      'The second characteristic is measurement. Every garment is made to a specific body, and the measurement record is the most valuable thing the business holds about a customer — it makes a repeat order possible without a visit, and it is what a fit dispute is settled against.',
      'The third is customer-supplied fabric. Much tailoring work is done in material the customer brought, which means the business is holding property it did not sell. Nine pieces unmatched to an order is someone’s fabric with no owner recorded, and cutting the wrong piece is unrecoverable.',
      'The fourth is the fitting stage, which sits between cutting and delivery and requires the customer to return. Twenty-two fittings unscheduled is twenty-two delivery dates quietly at risk.',
      'The fifth is alterations, which are the visible measure of whether the fit was right and whether the work is profitable.',
      'Verity holds measurements per customer, tracks customer fabric against orders, and schedules fittings against delivery dates.',
    ],
  },

  terminology: [
    ['Orders, garments, styles', 'Work'],
    ['Measurements, fittings, alterations', 'Records'],
    ['Customers, families, occasions', 'Relationships'],
    ['Customer fabric, house fabric, trims', 'Inventory'],
    ['Cutting, stitching, finishing', 'Workflows'],
    ['Master cutters, tailors, finishers', 'People'],
    ['Delivery dates, advances, balances', 'Orders'],
  ],

  challengesHeading: 'Fixed occasions, personal fit, and someone else’s cloth.',
  challengesLede:
    'Tailoring difficulties come from bespoke work delivered against dates that cannot move.',
  challenges: [
    { problem: 'Occasion dates are treated like ordinary due dates', detail: 'Work is scheduled by order of arrival rather than by the date it is needed for.', outcome: 'Delivery dates drive scheduling, with orders at risk surfaced early.' },
    { problem: 'Measurements live in a notebook', detail: 'A repeat customer is measured again or a garment is cut from a stale record.', outcome: 'Measurements are held per customer with dates and revisions.' },
    { problem: 'Customer fabric is not tied to an order', detail: 'Material brought by a customer is stored without a clear link to the work it is for.', outcome: 'Every piece of customer fabric is recorded against its owner and order.' },
    { problem: 'Fittings are not scheduled', detail: 'A garment reaches fitting stage and the customer is never called in.', outcome: 'Fittings are raised as a stage with contact assigned against the delivery date.' },
    { problem: 'Alterations are absorbed unmeasured', detail: 'Repeated adjustments consume tailor time nobody counts.', outcome: 'Alterations carry cause, time and the original order.' },
    { problem: 'Advances and balances are tracked loosely', detail: 'Money taken at order is not reconciled against delivery.', outcome: 'Advances, balances and delivery are held together per order.' },
  ],

  modulesLede: 'One system across orders, measurements, fabric and dates.',
  modules: [
    { id: 'work', title: 'Orders, garments and styles', line: 'Each order carries its garments, style details, fabric source, measurements used, stage, delivery date and occasion.', why: 'The occasion, not the order date, is what the work is judged against.', example: 'Eleven orders due within seven days not yet cut.' },
    { id: 'records', title: 'Measurements, fittings and alterations', line: 'Measurements are held per customer with revision history, and fittings and alterations attach to the garment.', why: 'The measurement record is the most valuable thing the business holds about a customer.', example: 'Measurements available for a repeat order without a visit.' },
    { id: 'inventory', title: 'Customer fabric, house fabric and trims', line: 'Customer-supplied material is recorded against its owner and order, alongside house stock and trims.', why: 'Holding someone else’s property requires a record, not a shelf.', example: 'Nine pieces of customer fabric unmatched to an order.' },
    { id: 'workflows', title: 'Cutting, stitching and finishing', line: 'Each stage is recorded with the tailor assigned, time taken and progress against the delivery date.', why: 'The stage a garment is at determines whether the date is still achievable.', example: 'Orders by stage against days remaining.' },
    { id: 'relationships', title: 'Customers, families and occasions', line: 'Customers carry measurements, order history, preferences, family members and upcoming occasions.', why: 'Tailoring is family and occasion business, and both are repeatable.', example: 'Upcoming occasions across a family’s orders.' },
    { id: 'people', title: 'Master cutters, tailors and finishers', line: 'Staff carry skills, assigned garments, output and alteration rates.', why: 'Fit quality and speed are both person-level facts.', example: 'Alteration rate by tailor and garment type.' },
    { id: 'orders', title: 'Advances, balances and delivery', line: 'Advances taken, balances due and delivery are recorded per order.', why: 'Money taken at order needs reconciling at delivery.', example: 'Balances outstanding on delivered orders.' },
    { id: 'intelligence', title: 'Delivery, alteration and capacity reporting', line: 'Delivery date adherence, orders at risk by stage, alteration rates, fabric held and workroom capacity come from the records.', why: 'Occasion work is judged on dates and fit, and both are recordable.', example: 'Delivery adherence by garment type and season.' },
    { id: 'ai', title: 'Ask the workroom a question', line: 'Verity AI answers from your own order, measurement, fabric and stage records, respects permissions, and can create assigned follow-ups.', why: 'The urgent questions are about dates at risk and fabric ownership.', example: '"Which orders due this week are not cut?" returns eleven with occasions.' },
    { id: 'communication', title: 'Customer contact and fitting calls', line: 'Fitting invitations, delivery confirmations and alteration conversations attach to the order and customer.', why: 'A fitting only happens if the customer is asked to come.', example: 'Fitting contact recorded against the order.' },
    { id: 'schedule', title: 'Workroom load against dates', line: 'Capacity is planned against delivery dates rather than order sequence.', why: 'Occasion clustering, especially in season, is what causes failures.', example: 'Workroom load against delivery dates for the coming fortnight.' },
    { id: 'control', title: 'Pricing, discounts and approvals', line: 'One permission model and one audit trail covering pricing, free alterations and refunds.', why: 'Free alterations given informally are unmeasured tailor time.', example: 'Free alterations recorded with reason and time.' },
  ],

  workflowsHeading: 'Measure, cut, fit, finish, deliver.',
  workflowsLede: 'These already happen. Recorded, occasion dates stop failing.',
  workflows: [
    { name: 'Order taking', steps: ['Garment and style recorded with the occasion date', 'Measurements taken or retrieved and confirmed', 'Fabric source recorded, customer material tagged to the order', 'Advance taken and balance set', 'Delivery date confirmed against workroom load'], note: 'Confirming the date against load rather than accepting it is what makes it keepable.' },
    { name: 'Cutting and fabric control', steps: ['Fabric retrieved against the order', 'Ownership and quantity confirmed', 'Cutting performed and recorded', 'Remnant returned to the customer or stored against them', 'Stage updated'], note: 'Cutting the wrong customer’s fabric is the one mistake with no remedy.' },
    { name: 'Fitting', steps: ['Garment reaches fitting stage', 'Customer contacted with dates', 'Fitting conducted and adjustments recorded', 'Measurements updated where needed', 'Work resumed with the revised detail'], note: 'An unscheduled fitting is a delivery date already at risk.' },
    { name: 'Delivery', steps: ['Garment finished and checked', 'Customer notified', 'Balance collected', 'Delivery recorded', 'Any immediate alteration captured'], note: 'Recording alterations at delivery is what keeps the fit record honest.' },
    { name: 'Alteration handling', steps: ['Alteration request linked to the original order', 'Cause recorded as fit, measurement or preference', 'Time taken captured', 'Chargeable or free decided within authority', 'Measurement record updated'], note: 'Alterations traced to measurement errors are the ones that improve the record.' },
  ],

  ai: {
    heading: 'Ask about dates and fabric.',
    lede: 'Verity AI reads the same order, measurement, fabric and stage records the workroom creates as it works. It answers from your own business, respects permissions, and can turn an answer into a fitting call or a schedule change.',
    panelMeta: 'Grounded in your workroom records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which orders due this week are not yet cut?',
      'Which customer fabric is unmatched to an order?',
      'Which garments need a fitting that has not been scheduled?',
      'What is delivery adherence by garment type?',
      'Which tailors have the highest alteration rate?',
      'Which customers have measurements older than a year?',
      'What balances are outstanding on delivered orders?',
      'What is workroom load against delivery dates next fortnight?',
      'Summarise orders at risk and fabric held.',
    ],
  },

  automationHeading: 'Dates, fittings and fabric.',
  automationLede: 'Each runs from the business’s own records at the point the condition is met.',
  automations: [
    { trigger: 'An order approaches its delivery date at an early stage', steps: ['Flagged with occasion and stage', 'Priority or reallocation raised', 'Customer informed if the date will move'] },
    { trigger: 'A garment reaches fitting stage', steps: ['Fitting contact assigned', 'Customer offered dates', 'Fitting recorded and work resumed'] },
    { trigger: 'Customer fabric is received', steps: ['Recorded against owner and order', 'Storage location captured', 'Unmatched pieces flagged for follow-up'] },
    { trigger: 'An alteration is requested', steps: ['Linked to the original order', 'Cause and time recorded', 'Measurement record updated where relevant'] },
    { trigger: 'A delivered order has an outstanding balance', steps: ['Flagged against the customer', 'Collection contact assigned', 'Payment recorded'] },
  ],

  intelligenceHeading: 'What the business can see.',
  intelligenceLede: 'Dates, fit and capacity from workroom records.',
  intelligence: [
    { area: 'Delivery', points: ['Adherence to occasion dates', 'Orders at risk by stage', 'Stage cycle times by garment type', 'Seasonal load patterns'] },
    { area: 'Fit', points: ['Alteration rate by tailor and garment', 'Alteration causes', 'Measurement revision history', 'Repeat alterations by customer'] },
    { area: 'Fabric', points: ['Customer fabric held and matched', 'Remnants returned or stored', 'House stock consumption', 'Trim usage by garment'] },
    { area: 'Commercial', points: ['Advances and balances', 'Free alteration time', 'Repeat customers and occasions', 'Margin by garment type'] },
  ],
  intelligenceNote: 'Verity records the business’s operations. Nothing about the craft changes.',

  rolesHeading: 'One workroom, four views.',
  rolesLede: 'Everyone works from the same records.',
  roles: [
    { role: 'Owner', question: 'Will we make the dates?', focus: 'Orders at risk by stage, workroom load, alteration rates, balances outstanding.' },
    { role: 'Master cutter', question: 'What is cut next and from whose fabric?', focus: 'Orders by delivery date, fabric matched to orders, measurements, stage progress.' },
    { role: 'Tailor', question: 'What am I making?', focus: 'Assigned garments, measurements and fitting notes, stage deadlines, alterations.' },
    { role: 'Counter staff', question: 'Who needs to come in?', focus: 'Fittings due, delivery notifications, balances, upcoming occasions.' },
  ],

  useCasesHeading: 'What tailoring businesses use Verity for',
  useCases: [
    { name: 'Scheduling to occasion dates', body: 'Delivery dates driving the workroom rather than order sequence, so garments needed for fixed occasions are surfaced while there is still time.' },
    { name: 'Keeping measurements', body: 'Measurement records per customer with revision history, making repeat orders possible without a visit and settling fit questions with a record.' },
    { name: 'Controlling customer fabric', body: 'Every piece of customer-supplied material recorded against its owner and order, because cutting the wrong cloth is the one mistake with no remedy.' },
    { name: 'Scheduling fittings', body: 'Fitting raised as a stage with customer contact assigned, so a garment does not sit waiting for a visit nobody requested.' },
    { name: 'Measuring alterations', body: 'Adjustments carrying cause, time and the original order, which shows whether the issue is fit, measurement or preference.' },
    { name: 'Reconciling advances', body: 'Advances taken and balances due held with the order and its delivery, so money is reconciled rather than remembered.' },
    { name: 'Asking about the workroom', body: 'Plain-language questions across orders, fabric, fittings and dates, with contact and scheduling raised in the same step.' },
  ],

  migration: 'Nothing about the craft changes. Customers with measurements and order history, live orders with delivery dates, customer fabric held, pricing and staff records are brought across during implementation.',

  faqHeading: 'Questions tailoring businesses ask',
  faqs: [
    ['What can AI software do for a tailoring business?', 'Verity AI answers questions from your own order, measurement, fabric and stage records: which orders due this week are not yet cut, which customer fabric is unmatched to an order, which garments need a fitting that has not been scheduled, which tailors have the highest alteration rate. Each answer can become a fitting call or a schedule change.'],
    ['Why schedule by occasion date?', 'Because an occasion date cannot move. Scheduling by order sequence works until several garments for the same week arrive in a different order from the dates they are needed, which is when promises fail.'],
    ['How are measurements handled?', 'Measurements are held per customer with dates and revision history, so a repeat order can be made without a fresh visit and a fit question is answered from a record rather than a memory.'],
    ['What about fabric the customer brings?', 'Customer-supplied material is recorded against its owner and the order it belongs to, with its storage location. Unmatched pieces are flagged, because cutting the wrong customer’s cloth is unrecoverable.'],
    ['Does it manage fittings?', 'Fitting is a stage rather than an assumption. When a garment reaches it, contact is assigned so the customer is invited, which is what protects the delivery date.'],
    ['Can it show whether alterations are a problem?', 'Alterations carry cause, time taken and their original order, so repeated adjustments can be traced to measurement, fit or customer preference and attributed by tailor and garment type.'],
    ['Does it change how we work?', 'No. Nothing about the craft changes. Verity holds the records around it — orders, measurements, fabric, stages, fittings and money.'],
    ['How long does implementation take?', 'About four weeks: discovery and mapping of garment types, stages, measurement fields and fabric handling, configuration, migration of customers, measurements and live orders, then an ongoing operations partnership.'],
  ],

  ctaHeading: 'Start with the orders due this week.',
  ctaLede: 'Occasion dates do not move. Tell us how delivery dates are scheduled today.',

  related: ['clothing-boutiques', 'fashion-stores', 'garment-manufacturers', 'laundry-services', 'textile-manufacturers', 'wedding-planners'],
};
