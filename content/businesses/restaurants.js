export default {
  slug: 'restaurants',
  status: 'published',
  plural: 'restaurants',
  subject: 'restaurant',

  seo: {
    title: 'AI business management software for restaurants | Verity',
    description:
      'Verity connects orders, menu performance, ingredient stock, suppliers, shift rosters and daily revenue into one system you can ask questions of in plain language.',
    keywords: [
      'AI software for restaurants',
      'restaurant management software',
      'restaurant inventory management software',
      'restaurant analytics software',
      'business software for restaurants',
      'multi-outlet restaurant management system',
    ],
  },

  hero: {
    eyebrow: 'Verity for restaurants',
    headline: 'Service ends at eleven. The numbers should not arrive next month.',
    lede:
      'A restaurant settles and re-settles itself every night. Verity keeps the orders, the stock they consume, the people on shift and the money they produce on one record, so the day can be understood while it is still running.',
    note: 'Works alongside your existing billing setup. Nothing has to be switched off.',
    panel: {
      title: 'Service',
      meta: 'Kitchen · Today, 21:40',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Revenue today', value: '₹2.14 L', note: '186 covers' },
        { label: 'Average order', value: '₹1,150', note: 'up 6% on last Friday' },
        { label: 'Prep stock', value: '4 low', note: 'against tomorrow’s forecast' },
        { label: 'On shift', value: '17', note: 'of 19 rostered' },
      ],
      rows: [
        { name: 'Prawns below par for tomorrow’s covers', meta: 'Supplier cut-off in 40 minutes', active: true },
        { name: 'Two starters ran out before 20:00', meta: 'Third time this week', active: true },
        { name: 'Section 3 running two servers short', meta: 'Since 19:30 · one no-show', active: true },
        { name: 'Wastage not logged for lunch service', meta: 'Kitchen · yesterday and today', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own service in this shape.',
    },
  },

  overview: {
    heading: 'The restaurant already produces the data. It just does not keep it.',
    paragraphs: [
      'A restaurant runs on a very short cycle. Stock arrives in the morning, gets prepped, gets sold across two services, and whatever is left either carries to tomorrow or goes in the bin. Every commercially important thing that happens — what sold, what it consumed, who was on the floor, what was wasted, what the night made — happens inside about twelve hours, and almost none of it is written down in a form that can be compared with last Tuesday.',
      'The billing system knows what was ordered. It does not know that the order consumed four hundred grams of a protein bought at a price that went up eleven percent this month. The roster on the wall knows who was meant to be in. It does not know that Section 3 ran two people short from half past seven and that the average table time went up by nine minutes as a result. Each of those facts exists; none of them are connected.',
      'That disconnection is why restaurant decisions are made on instinct. Menus are changed because a chef believes a dish is not pulling its weight. Staffing is set because Fridays feel busy. Suppliers are kept because switching is a hassle. All of those may be correct, and none of them can be checked.',
      'Verity connects the order, the item it contains, the stock that item consumes, the supplier that stock came from, the person who served it and the revenue it produced. They are records in one system with one history, so the question "which dishes made money last month, and what did they cost to run" is a query rather than an evening with a spreadsheet.',
    ],
  },

  terminology: [
    ['Orders, covers, tickets', 'Orders'],
    ['Menu items, recipes, prep', 'Records'],
    ['Ingredients, consumables, packaging', 'Inventory'],
    ['Chefs, servers, shifts', 'People'],
    ['Vendors, mandi suppliers, distributors', 'Suppliers'],
    ['Guests, regulars, corporate accounts', 'Relationships'],
    ['Outlets, kitchens, delivery zones', 'Locations'],
  ],

  challengesHeading: 'The problems are all the same problem.',
  challengesLede:
    'Everything a restaurant struggles with comes back to the gap between what was sold and what it consumed.',
  challenges: [
    {
      problem: 'Consumption is invisible until it is a shortage',
      detail:
        'Ingredients leave stock without leaving a record. The first sign that something is wrong is a server telling a table the dish is finished.',
      outcome:
        'Stock movement is recorded against the orders that consume it, so a line running low shows up before service rather than during it.',
    },
    {
      problem: 'Nobody knows what a dish actually costs',
      detail:
        'Menu prices are set once and then left alone while ingredient prices move every month. The dish that was your best margin two years ago may be your worst now.',
      outcome:
        'Ingredient cost is recorded against purchases, so the movement in what a dish consumes is visible against what it sells for.',
    },
    {
      problem: 'Wastage is absorbed, not measured',
      detail:
        'Prep that did not sell, returns and spoilage are dealt with quietly at the end of service and never appear in any number anyone looks at.',
      outcome:
        'Wastage is a recorded movement like any other, so it can be compared across days, sections and items instead of being felt as a general sense that too much is going out.',
    },
    {
      problem: 'Rosters are set on habit',
      detail:
        'Staffing is planned from a template and adjusted by memory, without reference to what the equivalent day actually produced in covers or revenue.',
      outcome:
        'Attendance and shifts are records connected to the service they covered, so staffing decisions can be made against what the same day did last month.',
    },
    {
      problem: 'Regulars are recognised, not recorded',
      detail:
        'The staff know the couple who come every second Friday. The business does not, so nothing happens when they stop coming.',
      outcome:
        'Guests and corporate accounts are records with their history, so the drop-off in a regular or an account is something you can see.',
    },
    {
      problem: 'Multiple outlets report in multiple formats',
      detail:
        'Each kitchen counts differently, sends its numbers in its own shape, and the group picture is assembled by someone every Monday.',
      outcome:
        'Outlets are locations that roll into the business, so the group view is the same records rather than a reconciliation of five reports.',
    },
  ],

  modulesLede:
    'Verity is one system. These are the parts of it a restaurant works with, described in service terms rather than software terms.',
  modules: [
    {
      id: 'orders',
      title: 'Every ticket, and what it consumed',
      line:
        'Orders are records with their items, their timing, the section and server that handled them and the stock they drew down.',
      why:
        'The order is the only event in a restaurant that touches everything else — revenue, stock, labour and the guest. Recording it properly is what makes the rest answerable.',
      example:
        'A Friday service is 186 covers made of 640 items. Those items are what tell you the prawns will not last through Saturday.',
    },
    {
      id: 'inventory',
      title: 'Ingredients, prep and consumables',
      line:
        'Stock is held with its supplier, cost and location, and moves as it is received, prepped, consumed by orders or written off as waste.',
      why:
        'Restaurant stock is perishable and mostly unbranded. What matters is not a count on a shelf but the relationship between what came in, what sold and what was thrown away.',
      example:
        'Receiving twelve kilos, selling the equivalent of nine and logging one as waste leaves a two-kilo gap. That gap is the number worth looking at.',
    },
    {
      id: 'records',
      title: 'Menu items and what goes into them',
      line:
        'Menu items are records with their components, so a dish is connected to the ingredients it consumes and the price it sells at.',
      why:
        'Menu engineering only works if the cost side is current. A recipe held as a document is out of date the first time a supplier raises a price.',
      example:
        'A biryani sells 340 times a month. The record shows what those 340 plates consumed and what that stock cost across the same period.',
    },
    {
      id: 'suppliers',
      title: 'Vendors, deliveries and prices',
      line:
        'Suppliers are relationships with their orders, deliveries, prices and outstanding balances, connected to the stock they provide.',
      why:
        'Most restaurant purchasing happens by phone and is never compared. Which vendor is late, which one has crept up on price, and what is owed are all knowable from the order history.',
      example:
        'The vegetable supplier’s prices are up nine percent over four months while the fish supplier missed two deliveries. Both are visible from the same records.',
    },
    {
      id: 'workforce',
      title: 'Shifts, attendance and who was actually in',
      line:
        'Assignment, attendance and availability stay connected to the service they covered. Every state is a record rather than a mark on a printed roster.',
      why:
        'Labour is the second-largest cost in a restaurant and the one most often planned without evidence. Knowing who was actually on the floor is the beginning of knowing why a service went badly.',
      example:
        'Two no-shows in Section 3 on a Friday appear against the same service whose average table time went up. The connection is visible rather than suspected.',
    },
    {
      id: 'schedule',
      title: 'The day, as it runs',
      line:
        'A timeline of the day’s work with each step’s state and owner, from opening checks through to close.',
      why:
        'A restaurant day has a fixed shape — delivery, prep, lunch, changeover, dinner, close — and the failures are almost always a step that did not happen on time.',
      example:
        'Prep for dinner service is marked complete at 16:40 or it is not. If it is not, the person who owns it knows before the first table sits.',
    },
    {
      id: 'relationships',
      title: 'Guests, regulars and corporate accounts',
      line:
        'Guests and accounts are records with their visit history, preferences and outstanding balances.',
      why:
        'Repeat business is the cheapest revenue a restaurant has, and it is almost never tracked. A corporate account that has stopped booking is a loss nobody notices for a quarter.',
      example:
        'The company that used to book a private dining room twice a month has not booked since June. That is a list, not a hunch.',
    },
    {
      id: 'workflows',
      title: 'Purchase approvals, comps and write-offs',
      line:
        'Purchases above a threshold, comped meals and stock write-offs move through defined approval steps with a requester and a reason.',
      why:
        'The transactions restaurants lose money on are the discretionary ones done at speed during service.',
      example:
        'A comped table above the manager’s threshold becomes an approval with a reason attached, not a note in the till.',
    },
    {
      id: 'intelligence',
      title: 'Reports from the service itself',
      line:
        'Item performance, revenue by day and section, wastage, labour against covers and supplier price movement come from the operational records.',
      why:
        'Restaurant reporting is usually monthly and backwards-looking, which is exactly the wrong shape for a business that resets daily.',
      example:
        'Comparing this Friday with the last six Fridays takes a moment, because every Friday is the same records.',
    },
    {
      id: 'ai',
      title: 'Ask the service a question',
      line:
        'Verity AI answers from your own orders, stock and roster records, only shows what the person asking can see, and can turn an answer into assigned follow-ups.',
      why:
        'The questions worth asking in a restaurant are asked at eleven at night by someone who is tired, and they need an answer rather than a report to build.',
      example:
        '"Which items ran out before nine this week?" returns four, and one instruction raises tomorrow’s purchase against the right supplier.',
    },
    {
      id: 'locations',
      title: 'Outlets, kitchens and delivery',
      line:
        'Each outlet is a location that rolls into the business, with permissions, reporting and exceptions following the same structure.',
      why:
        'A second outlet does not double the complexity of a restaurant group — it multiplies it, because nothing is comparable unless it is recorded the same way.',
      example:
        'Three outlets and a cloud kitchen report into one view without anyone reformatting a spreadsheet.',
    },
    {
      id: 'communication',
      title: 'Handover that survives the shift',
      line:
        'Comments, notifications and activity attach to the record they concern rather than living in a group chat.',
      why:
        'Restaurant context is passed verbally between shifts and lost the moment someone is off for two days.',
      example:
        'The note that a supplier substituted an ingredient sits on the delivery record, where the evening chef will actually find it.',
    },
  ],

  workflowsHeading: 'The day has a shape. Verity records it.',
  workflowsLede:
    'These sequences already happen in your restaurant. The difference is that each step becomes a state on a record instead of something someone remembers to mention.',
  workflows: [
    {
      name: 'Delivery to service',
      steps: [
        'Purchase order raised against the supplier',
        'Delivery received and checked against the order',
        'Stock recorded with quantity, cost and location',
        'Prep consumes stock and produces service-ready items',
        'Orders during service draw down against those items',
        'Close of service records sales, wastage and remaining stock',
      ],
      note:
        'The gap between what was received, what was sold and what was written off is calculated rather than estimated.',
    },
    {
      name: 'A shortage before it happens',
      steps: [
        'Stock level falls below the par set for the item',
        'Shortfall flagged against tomorrow’s expected covers',
        'Purchase raised against the supplier who last delivered it',
        'Approval applied if it exceeds the purchasing threshold',
        'Delivery checked in and stock restored',
      ],
      note:
        'The point of the sequence is that it starts from a record rather than from someone opening a fridge.',
    },
    {
      name: 'Shift and roster',
      steps: [
        'Shifts assigned against expected covers for the day',
        'Attendance recorded at the start of service',
        'Gaps flagged to the manager on duty',
        'Service completed and closed against the roster that actually worked',
        'Labour compared with covers and revenue for the same period',
      ],
      note:
        'Staffing stops being a template and becomes a decision informed by the same day last month.',
    },
    {
      name: 'Menu performance review',
      steps: [
        'Item sales pulled for the period',
        'Ingredient cost movement pulled from purchase records',
        'Items ranked by contribution rather than by popularity',
        'Underperformers flagged for change or removal',
        'Decisions recorded against the menu items themselves',
      ],
      note:
        'A menu change becomes a documented decision with the numbers that produced it, not an argument between the chef and the owner.',
    },
    {
      name: 'Wastage and write-off',
      steps: [
        'Waste recorded at close of service by item and reason',
        'Write-off approved where it exceeds the threshold',
        'Stock adjusted and the movement recorded',
        'Patterns by item, section and day surfaced in reporting',
      ],
      note:
        'Wastage becomes a number with a trend rather than a bag nobody counted.',
    },
    {
      name: 'Corporate account or private booking',
      steps: [
        'Enquiry recorded against a customer or account record',
        'Requirement, date and covers confirmed',
        'Prep and staffing assigned against the booking',
        'Service delivered and billed to the account',
        'Balance and history updated on the account record',
      ],
      note:
        'The account has a history, so a drop in booking frequency is visible instead of gradual and unnoticed.',
    },
  ],

  ai: {
    heading: 'Ask about tonight, not about last month.',
    lede:
      'Verity AI reads the same orders, stock, roster and supplier records the rest of the system runs on. It answers from your restaurant rather than from general knowledge, and it can turn the answer into work assigned to the person who owns it.',
    panelMeta: 'Grounded in your service records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'What were the best-selling items this week, and what did they consume?',
      'Which items ran out before nine on any night this week?',
      'How did this Friday compare with the last six Fridays?',
      'Which ingredients have gone up in price this quarter?',
      'What was wasted this week, and where?',
      'Which corporate accounts have not booked in the last two months?',
      'How did labour hours compare with covers on Saturday?',
      'Which supplier has missed the most delivery dates?',
      'Summarise this week’s service performance.',
    ],
  },

  automationHeading: 'The parts that only fail when someone forgets.',
  automationLede:
    'Each of these runs from the records themselves, at the point the condition is actually met.',
  automations: [
    {
      trigger: 'Stock of an item falls below par',
      steps: [
        'Shortfall flagged against expected covers',
        'Purchase raised for the supplier who last delivered it',
        'Approval routed if it exceeds the threshold',
        'Delivery checked against the order on arrival',
      ],
    },
    {
      trigger: 'An item is marked unavailable during service',
      steps: [
        'Unavailability recorded against the item and the service',
        'Purchase or prep task raised for the next day',
        'Repeat occurrences surfaced in the weekly view',
      ],
    },
    {
      trigger: 'A rostered staff member does not check in',
      steps: [
        'Gap flagged to the manager on duty',
        'Shift record updated to what actually worked',
        'Labour reporting reflects the real roster, not the planned one',
      ],
    },
    {
      trigger: 'A service closes',
      steps: [
        'Revenue, covers and average order value recorded',
        'Stock consumed and wasted reconciled against sales',
        'Exceptions raised where the gap exceeds tolerance',
      ],
    },
    {
      trigger: 'A comp or discount exceeds the threshold',
      steps: [
        'Transaction held at the approval step',
        'Request routed to the manager with the reason attached',
        'Decision recorded against the order',
      ],
    },
    {
      trigger: 'A corporate account goes quiet',
      steps: [
        'Account flagged after a defined period without a booking',
        'Follow-up assigned to whoever owns the relationship',
        'Outcome recorded on the account record',
      ],
    },
  ],

  intelligenceHeading: 'What the owner can see on a Tuesday.',
  intelligenceLede:
    'Every one of these comes from records the restaurant creates in the ordinary course of service.',
  intelligence: [
    {
      area: 'Revenue',
      points: [
        'Revenue by day, by service and by outlet',
        'Average order value and covers',
        'Comparison against the same weekday historically',
        'Revenue by section and by server',
        'Discounts and comps against thresholds',
      ],
    },
    {
      area: 'Menu',
      points: [
        'Items ranked by volume and by contribution',
        'Items that ran out during service',
        'Ingredient cost movement against selling price',
        'Items that consume disproportionate prep time',
      ],
    },
    {
      area: 'Stock',
      points: [
        'Consumption against sales, and the gap between them',
        'Wastage by item, reason and day',
        'Stock on hand against tomorrow’s expected covers',
        'Purchase cost movement by supplier',
      ],
    },
    {
      area: 'People',
      points: [
        'Hours worked against covers and revenue',
        'Attendance, no-shows and shift gaps',
        'Service performance by section',
      ],
    },
    {
      area: 'Guests',
      points: [
        'Repeat guests and corporate accounts',
        'Accounts that have gone quiet',
        'Booking frequency and party size',
        'Outstanding balances on accounts',
      ],
    },
    {
      area: 'Operations',
      points: [
        'Opening and prep steps completed on time',
        'Deliveries received against orders placed',
        'Exceptions raised during service and how they closed',
        'Outlet comparison across the group',
      ],
    },
  ],
  intelligenceNote:
    'None of this requires a separate reporting exercise. It is the same records the restaurant already produces during service.',

  rolesHeading: 'The service is shared. The view is not.',
  rolesLede:
    'Everyone works from the same records, and each role opens on the question they actually need answered.',
  roles: [
    {
      role: 'Owner',
      question: 'Did the week make money, and where did it leak?',
      focus: 'Revenue against the same period, contribution by item, wastage, labour against covers, outlet comparison.',
    },
    {
      role: 'Restaurant manager',
      question: 'What do I need to fix before service?',
      focus: 'Stock against tonight’s covers, roster gaps, prep steps outstanding, items unavailable.',
    },
    {
      role: 'Head chef',
      question: 'What is the kitchen short of, and what is it wasting?',
      focus: 'Stock levels, wastage by item, deliveries due, item volumes across recent services.',
    },
    {
      role: 'Purchasing',
      question: 'What has to be ordered and what does it now cost?',
      focus: 'Reorder flags, supplier prices and delivery reliability, outstanding payables.',
    },
    {
      role: 'Accounts',
      question: 'What came in and what is owed?',
      focus: 'Daily revenue, corporate account balances, supplier payables, approvals awaiting a decision.',
    },
  ],

  useCasesHeading: 'What restaurants use Verity for',
  useCases: [
    {
      name: 'Ingredient and prep stock',
      body: 'Stock recorded with supplier and cost, moving as it is received, prepped, consumed by orders and written off — so the gap between sales and consumption is a number.',
    },
    {
      name: 'Menu contribution analysis',
      body: 'Item volume set against current ingredient cost, so menu decisions are made on contribution rather than on which dishes the kitchen enjoys making.',
    },
    {
      name: 'Wastage tracking',
      body: 'Waste as a recorded movement by item, reason and service, comparable across days and outlets instead of absorbed at close.',
    },
    {
      name: 'Roster and attendance',
      body: 'Who was actually on the floor, connected to the service they worked and the covers it produced.',
    },
    {
      name: 'Supplier and purchase management',
      body: 'Orders, deliveries, price movement, missed dates and outstanding balances against each vendor.',
    },
    {
      name: 'Multi-outlet reporting',
      body: 'Outlets and cloud kitchens as locations rolling into one view, without anyone reformatting a weekly spreadsheet.',
    },
    {
      name: 'Corporate and private bookings',
      body: 'Enquiries, confirmations, staffing and billing against an account with a visible booking history.',
    },
    {
      name: 'Daily operational checklist',
      body: 'The fixed shape of the day — delivery, prep, service, close — as work with owners and states rather than as a laminated sheet.',
    },
    {
      name: 'Asking the business questions',
      body: 'Plain-language questions answered from the restaurant’s own records, with the follow-up created and assigned in the same step.',
    },
  ],

  migration:
    'Your billing or point-of-sale setup does not have to change on day one. Verity maps what you already run — the order records, the stock sheet, the roster, the supplier list — brings across what matters, and introduces the operational layer around it while service continues as normal.',

  faqHeading: 'Questions restaurateurs ask',
  faqs: [
    [
      'What can AI software actually do for a restaurant?',
      'Verity AI answers questions from your restaurant’s own order, stock, roster and supplier records. You can ask what sold best this week and what it consumed, which items ran out before nine, how this Friday compared with the last six, or which corporate accounts have gone quiet — and turn the answer into work assigned to the person who owns it.',
    ],
    [
      'Can Verity track ingredients and prep stock?',
      'Yes. Stock is held with its supplier, cost and location, and moves as it is received, prepped, consumed by orders and written off as waste. That makes the gap between what was bought, what was sold and what was wasted a calculated number rather than an estimate.',
    ],
    [
      'Does Verity replace our billing or point-of-sale system?',
      'No. Verity is introduced as an operational layer over what you already run. Your existing order and billing setup is mapped during implementation and continues to work while Verity takes over the operational side — stock, suppliers, rosters, reporting and the questions across all of them.',
    ],
    [
      'Can it show which menu items are actually profitable?',
      'It shows item volume against the ingredient cost recorded on your purchases, so contribution can be compared across the menu and tracked as supplier prices move. It reports from the records you keep; it does not estimate costs you have not recorded.',
    ],
    [
      'Does Verity work for a group with several outlets?',
      'Yes. Each outlet or cloud kitchen is a location that rolls into the business, so the group view is the same records rather than a reconciliation of separately formatted reports. Permissions follow the same structure, so an outlet manager sees their site and the owner sees all of them.',
    ],
    [
      'Can it help with staffing decisions?',
      'Shifts, attendance and availability are records connected to the service they covered, so hours worked can be compared with covers and revenue for the same period. Staffing decisions can then be made against what the equivalent day actually produced.',
    ],
    [
      'Is Verity suitable for a single restaurant, or only for chains?',
      'A single restaurant already runs a kitchen, a floor, a stock room and a supplier list that do not talk to each other. That is the problem Verity solves. Additional outlets use the same structure without additional setup.',
    ],
    [
      'How long does it take to set up?',
      'Implementation is about four weeks: discovery and mapping of how your service actually runs, configuration to match it, migration of your existing records, and then an ongoing operations partnership rather than a handover and a manual.',
    ],
    [
      'Can we control who sees cost and margin information?',
      'Yes. Verity has one permission model across every record, so cost, margin and revenue can be visible to the owner and accounts while kitchen and floor staff see stock levels, prep status and service information.',
    ],
  ],

  ctaHeading: 'Start with the part of service that hurts most.',
  ctaLede:
    'For most restaurants that is either stock consumption or the gap between rostered and actual labour. Tell us which one and we will show you what it looks like in Verity.',

  related: ['cafes', 'bakeries', 'cloud-kitchens', 'catering-businesses', 'fast-food-businesses', 'hotels'],
};
