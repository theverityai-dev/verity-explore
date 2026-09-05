export default {
  slug: 'real-estate-agencies',
  status: 'published',
  plural: 'real estate agencies',
  subject: 'real estate agency',

  seo: {
    title: 'AI business management software for real estate agencies | Verity',
    description:
      'Verity connects leads, property inventory, site visits, agent activity, deal stages and commissions into one operational system you can ask questions of.',
    keywords: [
      'AI software for real estate agencies',
      'CRM for real estate agencies',
      'real estate lead management software',
      'property management software for brokers',
      'real estate agency management system',
    ],
  },

  hero: {
    eyebrow: 'Verity for real estate agencies',
    headline: 'Your pipeline is real. It is just distributed across six phones.',
    lede:
      'Enquiries, site visits, negotiations and follow-ups are recorded personally by whoever handled them, and they leave when that person does. Verity puts the leads, the properties, the agents and the deals on one record with one history.',
    note: 'Nothing has to be replaced on day one. We map what you already run.',
    panel: {
      title: 'Pipeline',
      meta: 'All agents · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active leads', value: '184', note: 'across 6 agents' },
        { label: 'Site visits', value: '37', note: 'scheduled this week' },
        { label: 'In negotiation', value: '11', note: '₹14.2 Cr combined' },
        { label: 'No contact 14d', value: '46', note: 'leads gone quiet' },
      ],
      rows: [
        { name: '46 leads with no contact in 14 days', meta: 'Oldest 38 days · 3 agents', active: true },
        { name: 'Sector 62 unit shown 9 times, no offer', meta: 'Priced above comparable listings', active: true },
        { name: 'Two site visits confirmed with no agent assigned', meta: 'Saturday · 11:00 and 15:30', active: true },
        { name: 'Commission unreconciled on closed deal', meta: 'Closed 22 days ago', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own pipeline in this shape.',
    },
  },

  overview: {
    heading: 'An agency is a pipeline that nobody owns centrally.',
    paragraphs: [
      'A real estate agency has two inventories. One is properties: listings with owners, prices, availability, photographs and a history of who has seen them. The other is people: enquiries at every stage from a first phone call to a signed agreement. The business is the matching of the two, and the matching happens in the heads of individual agents.',
      'That is the structural problem. An agent knows their leads, knows which property suits which buyer, knows who is close to deciding and who is stalling. None of it is in a system, so the agency principal cannot see the pipeline without asking six people, and when an agent leaves, their pipeline leaves with them.',
      'The second problem is follow-up. Real estate deals are decided over weeks and months, and most are lost not to a competitor but to silence. A lead that goes fourteen days without contact is usually gone, and nobody notices because there is nothing counting the days.',
      'Verity holds the lead, the property, the site visit, the agent and the deal stage as connected records with one permission model. The pipeline becomes something the agency owns rather than something six agents each hold a piece of, and the leads that have gone quiet become a list rather than an omission.',
    ],
  },

  terminology: [
    ['Leads, enquiries, prospects', 'Relationships'],
    ['Listings, units, projects', 'Records'],
    ['Site visits, follow-ups, negotiations', 'Work'],
    ['Agents, teams, channel partners', 'People'],
    ['Builders, owners, developers', 'Suppliers'],
    ['Stages, approvals, commissions', 'Workflows'],
    ['Localities, projects, territories', 'Locations'],
  ],

  challengesHeading: 'The deals are lost quietly.',
  challengesLede:
    'Almost nothing goes wrong loudly in an agency. Leads go cold, listings go stale and pipelines go with departing agents, and none of it announces itself.',
  challenges: [
    {
      problem: 'The pipeline lives in agents’ phones',
      detail:
        'Enquiries, conversations and next steps are held personally. The principal’s view of the business is a weekly meeting where six people report what they remember.',
      outcome:
        'Leads are records owned by the agency and assigned to an agent, so the pipeline is visible without a meeting and survives a departure.',
    },
    {
      problem: 'Follow-up depends on memory',
      detail:
        'A lead that needed a call on Thursday gets one the following Tuesday, if at all. The loss is invisible because nothing was tracking the gap.',
      outcome:
        'Days since last contact is a property of the lead record, so the leads going quiet surface before they are gone.',
    },
    {
      problem: 'Nobody knows why a listing is not moving',
      detail:
        'A unit has been shown nine times without an offer. Whether that is price, condition or presentation is a matter of opinion because the viewings were never recorded against it.',
      outcome:
        'Site visits are recorded against both the lead and the property, so viewing volume without conversion becomes evidence rather than an impression.',
    },
    {
      problem: 'Agent performance is judged on closings alone',
      detail:
        'The only visible number is deals closed, which says nothing about whether an agent is working a thin pipeline well or a rich one badly.',
      outcome:
        'Enquiries handled, visits conducted, conversion at each stage and response time are all recorded, so performance can be read at the stage where it actually differs.',
    },
    {
      problem: 'Site visits are coordinated by phone',
      detail:
        'Confirmations, keys, owner permissions and agent availability are arranged in calls and messages, and a missed handover means a buyer standing outside a locked door.',
      outcome:
        'A visit is work with a date, an owner and a state, visible to everyone who needs to see it.',
    },
    {
      problem: 'Commissions are reconciled late and argued about',
      detail:
        'Splits between agents, channel partners and the agency are agreed verbally and settled from memory weeks after closing.',
      outcome:
        'The deal record carries its stages, participants and agreed splits, so settlement follows the record rather than the recollection.',
    },
  ],

  modulesLede:
    'One system, described in the terms an agency already uses. Nothing here is a separate product to buy.',
  modules: [
    {
      id: 'relationships',
      title: 'Leads, buyers, sellers and owners',
      line:
        'Every enquiry is a record with its source, requirement, budget, stage, assigned agent and full interaction history.',
      why:
        'The lead is the agency’s asset. Held personally it is a liability; held as a record it is something the business can manage, measure and hand over.',
      example:
        'A buyer who enquired in March about a three-bedroom in one locality is still on record in September, with every call, visit and objection attached.',
    },
    {
      id: 'records',
      title: 'Property and project inventory',
      line:
        'Listings are records with their owner, configuration, price, availability, documents and the history of who has viewed them.',
      why:
        'A listing without a viewing history is just an advertisement. With one, it tells you whether the problem is demand or price.',
      example:
        'A unit shown nine times in six weeks with no offer, against a comparable one that sold after three viewings, is a pricing conversation with the owner.',
    },
    {
      id: 'work',
      title: 'Site visits, follow-ups and negotiations',
      line:
        'Each is work with an owner, a date and a state, connected to the lead and the property it concerns.',
      why:
        'The activity between enquiry and closing is where deals are won and where they quietly stop. Recording it is what makes the pipeline real.',
      example:
        'Saturday’s eleven o’clock viewing has an agent, a property, a buyer and a state, and shows as unassigned until someone owns it.',
    },
    {
      id: 'workflows',
      title: 'Deal stages and approvals',
      line:
        'Deals move through defined stages, and price reductions, exclusive agreements and commission splits pass through approval steps with a record.',
      why:
        'Stages are what turn a list of leads into a forecast. Approvals are what stop a discount being agreed on a phone call and disputed later.',
      example:
        'A price reduction below the owner’s floor becomes an approval with a requester and a reason rather than an agent’s judgement call.',
    },
    {
      id: 'people',
      title: 'Agents, teams and channel partners',
      line:
        'Agents and partners are modelled once, and every lead, visit and deal shows who owns it and who last acted on it.',
      why:
        'An agency is a distributed team whose work is invisible unless it is recorded. Ownership on every record is what makes accountability possible without supervision.',
      example:
        'Response time from enquiry to first contact, by agent, is a number rather than a complaint.',
    },
    {
      id: 'communication',
      title: 'The conversation stays with the lead',
      line:
        'Calls, notes, notifications and activity attach to the lead or property they concern.',
      why:
        'Most agency context lives in individual WhatsApp threads. When the agent is unavailable, so is the context.',
      example:
        'A buyer’s objection about the floor level is a note on their record, so any agent picking up the conversation knows it.',
    },
    {
      id: 'locations',
      title: 'Localities, projects and territories',
      line:
        'Properties and teams roll up by locality, project and region, with permissions and reporting following the same structure.',
      why:
        'Agencies think in areas. Demand, pricing and agent performance all vary by locality, and comparing them requires the structure to exist.',
      example:
        'Enquiry volume and conversion by locality shows where marketing spend is producing pipeline and where it is producing noise.',
    },
    {
      id: 'suppliers',
      title: 'Builders, developers and property owners',
      line:
        'The supply side is a set of relationships with their inventory, agreements, commission terms and history.',
      why:
        'An agency’s inventory comes from someone. Which developer’s projects actually convert, and which owner is unrealistic on price, are commercial facts worth holding.',
      example:
        'Two projects from the same developer have absorbed thirty viewings between them and produced one booking. That is a conversation with a record behind it.',
    },
    {
      id: 'intelligence',
      title: 'Pipeline reporting from live records',
      line:
        'Pipeline value by stage, conversion rates, agent performance, source effectiveness and listing velocity come from the operational records themselves.',
      why:
        'Agency forecasting is usually a number an owner feels. Stage-based records make it a calculation.',
      example:
        'Weighted pipeline by stage this month, against the same month last year, from the same records the agents work in daily.',
    },
    {
      id: 'ai',
      title: 'Ask the pipeline a question',
      line:
        'Verity AI answers from your own lead, property and activity records, respects each user’s permissions, and can create assigned follow-ups from what it finds.',
      why:
        'The most valuable questions in an agency are about absence — which leads have not been contacted, which properties are not moving — and absence is exactly what nobody notices.',
      example:
        '"Which leads in negotiation have had no contact in the last ten days?" returns eleven, and one instruction assigns follow-ups to the agents who own them.',
    },
    {
      id: 'control',
      title: 'Who can see which leads',
      line:
        'One permission model across every record, with a single audit trail.',
      why:
        'Agencies are competitive internally. Agents need their own pipeline; the principal needs all of it; neither should be an argument.',
      example:
        'An agent sees their own leads and the shared listing inventory. The principal sees every pipeline, and every reassignment is on the record.',
    },
    {
      id: 'commandCentre',
      title: 'The agency as it is running',
      line:
        'One live view of what is moving, what is blocked, who owns it and what needs attention today.',
      why:
        'A weekly pipeline meeting is a reconstruction. A live picture removes the need for most of it.',
      example:
        'Visits today, leads gone quiet, deals awaiting approval and unassigned enquiries, in one view rather than six conversations.',
    },
  ],

  workflowsHeading: 'From enquiry to closing, recorded at every stage.',
  workflowsLede:
    'These sequences already run in your agency. In Verity each step is a state change, so the next action is visible rather than remembered.',
  workflows: [
    {
      name: 'New enquiry to first contact',
      steps: [
        'Enquiry recorded with its source and requirement',
        'Lead assigned to an agent by locality or rotation',
        'First contact task created with a due time',
        'Requirement captured — budget, configuration, timeline',
        'Matching properties identified from inventory',
        'Site visit proposed and scheduled',
      ],
      note:
        'Response time from enquiry to first contact becomes a measured number rather than a matter of who was free.',
    },
    {
      name: 'Site visit',
      steps: [
        'Visit created against the lead and the property',
        'Agent assigned and owner permission confirmed',
        'Visit conducted and outcome recorded',
        'Objections and feedback captured on both records',
        'Next step created — second visit, offer or alternative properties',
      ],
      note:
        'Viewing history accumulates on the property, which is what turns nine unconverted viewings into a pricing conversation.',
    },
    {
      name: 'Negotiation to closing',
      steps: [
        'Offer recorded against the lead and property',
        'Counter-offers logged as the negotiation moves',
        'Price below the owner’s floor routed for approval',
        'Agreement stage reached and documents attached',
        'Deal closed, stage updated, property marked unavailable',
        'Commission split recorded against the participants',
      ],
      note:
        'The record of what was agreed exists before the settlement conversation rather than after it.',
    },
    {
      name: 'Lead reactivation',
      steps: [
        'Leads without contact for a defined period identified',
        'Reason for going quiet reviewed against the history',
        'Follow-up assigned with a specific next action',
        'Outcome recorded — revived, disqualified or deferred',
        'Disqualified leads retained with their reason for future matching',
      ],
      note:
        'A disqualified lead is not deleted. A buyer whose budget was wrong in March may be the right buyer in December.',
    },
    {
      name: 'New listing intake',
      steps: [
        'Property recorded with owner, configuration and asking price',
        'Documents and photographs attached to the record',
        'Agreement terms and commission recorded',
        'Listing made available to the agent team',
        'Matching leads identified from existing requirements',
      ],
      note:
        'A new listing is matched against the leads already on record rather than only against new enquiries.',
    },
    {
      name: 'Agent handover',
      steps: [
        'Departing agent’s leads and deals identified',
        'Each reassigned with its full history intact',
        'Receiving agents notified with context attached',
        'Active negotiations flagged for principal review',
      ],
      note:
        'A handover becomes a reassignment rather than a loss, because the pipeline was never personal property.',
    },
  ],

  ai: {
    heading: 'Ask what the pipeline is actually doing.',
    lede:
      'Verity AI reads the same lead, property, visit and deal records your agents work in. It answers from your pipeline rather than from generic knowledge, and it can turn an answer into follow-ups assigned to the agents who own the leads.',
    panelMeta: 'Grounded in your pipeline records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which leads are closest to conversion this month?',
      'Which leads have had no contact in the last fourteen days?',
      'Which properties have the most viewings and no offers?',
      'Which agent has the highest conversion from visit to offer?',
      'Which enquiry sources produced the most closings this quarter?',
      'What is the weighted pipeline by stage right now?',
      'Which site visits this week have no agent assigned?',
      'Which localities are producing enquiries but not conversions?',
      'Summarise this month’s pipeline movement.',
    ],
  },

  automationHeading: 'The follow-ups that decide the deals.',
  automationLede:
    'These run from the lead and property records themselves, at the moment the condition is met.',
  automations: [
    {
      trigger: 'A new enquiry arrives',
      steps: [
        'Lead record created with source and requirement',
        'Assigned to an agent by locality or rotation',
        'First-contact task created with a due time',
        'Escalated to the principal if contact does not happen',
      ],
    },
    {
      trigger: 'A lead has no contact for the defined period',
      steps: [
        'Lead flagged as going quiet',
        'Follow-up assigned to the owning agent',
        'Escalated if the follow-up is not actioned',
      ],
    },
    {
      trigger: 'A site visit is completed',
      steps: [
        'Outcome and feedback recorded against lead and property',
        'Next step created based on the outcome',
        'Property viewing count updated',
      ],
    },
    {
      trigger: 'A price is offered below the owner’s floor',
      steps: [
        'Offer held at the approval step',
        'Request routed with the negotiation history attached',
        'Decision recorded against the deal',
      ],
    },
    {
      trigger: 'A deal reaches agreement stage',
      steps: [
        'Property marked unavailable across the inventory',
        'Document checklist created against the deal',
        'Commission split recorded against participants',
      ],
    },
    {
      trigger: 'A listing passes a defined age without an offer',
      steps: [
        'Listing flagged for review with its viewing history',
        'Task created to discuss pricing with the owner',
        'Outcome recorded against the property',
      ],
    },
  ],

  intelligenceHeading: 'What the principal can actually see.',
  intelligenceLede:
    'Pipeline, activity and performance drawn from the records agents create as they work.',
  intelligence: [
    {
      area: 'Pipeline',
      points: [
        'Weighted pipeline value by stage',
        'Deals expected to close this month and next',
        'Movement between stages over time',
        'Deals stalled at a stage beyond the usual duration',
      ],
    },
    {
      area: 'Leads',
      points: [
        'Enquiry volume by source and by locality',
        'Leads without contact beyond the threshold',
        'Conversion from enquiry to visit, and visit to offer',
        'Reasons recorded for disqualified leads',
      ],
    },
    {
      area: 'Properties',
      points: [
        'Viewings per listing and time on market',
        'Listings with high viewing volume and no offers',
        'Inventory by locality, configuration and price band',
        'Absorption by project and by developer',
      ],
    },
    {
      area: 'Agents',
      points: [
        'Response time from enquiry to first contact',
        'Visits conducted and offers generated',
        'Conversion rate at each stage',
        'Active pipeline held per agent',
      ],
    },
    {
      area: 'Commercial',
      points: [
        'Closings by period, locality and agent',
        'Commission earned and outstanding',
        'Average deal value and time to close',
        'Source cost against closings produced',
      ],
    },
    {
      area: 'Operations',
      points: [
        'Site visits scheduled and unassigned',
        'Approvals awaiting a decision',
        'Documents outstanding against agreed deals',
        'Exceptions raised and how quickly they closed',
      ],
    },
  ],
  intelligenceNote:
    'These come from the records agents already create in the course of working their leads. Nothing here requires separate reporting.',

  rolesHeading: 'The pipeline is shared. The view is not.',
  rolesLede:
    'Everyone works from the same records, and each role opens on the question they need answered.',
  roles: [
    {
      role: 'Principal',
      question: 'What is the business going to close?',
      focus: 'Weighted pipeline by stage, closings against target, agent performance, listings not moving.',
    },
    {
      role: 'Sales manager',
      question: 'What needs attention this week?',
      focus: 'Leads gone quiet, unassigned visits, deals stalled at a stage, response times by agent.',
    },
    {
      role: 'Agent',
      question: 'Who do I need to contact today?',
      focus: 'Own leads by stage, visits scheduled, follow-ups due, matching properties for open requirements.',
    },
    {
      role: 'Listings coordinator',
      question: 'What is in inventory and what is stale?',
      focus: 'Available listings, viewing counts, time on market, owner agreements and documents.',
    },
    {
      role: 'Accounts',
      question: 'What has closed and what is owed?',
      focus: 'Closed deals, commission splits, receipts against agreements, outstanding settlements.',
    },
  ],

  useCasesHeading: 'What agencies use Verity for',
  useCases: [
    {
      name: 'Lead and enquiry management',
      body: 'Every enquiry as an agency-owned record with source, requirement, stage, assigned agent and full interaction history.',
    },
    {
      name: 'Property inventory',
      body: 'Listings with owner, configuration, price, documents and the accumulated viewing history that explains whether a unit is priced right.',
    },
    {
      name: 'Site visit coordination',
      body: 'Visits as work with a date, an agent, a property and a state, so nothing is confirmed to a buyer without someone owning it.',
    },
    {
      name: 'Follow-up discipline',
      body: 'Days since last contact as a property of the lead, so the leads going quiet surface as a list rather than as a lost quarter.',
    },
    {
      name: 'Deal stage and pipeline forecasting',
      body: 'Stages that produce a weighted pipeline, so forecasting is a calculation from records rather than a number the principal feels.',
    },
    {
      name: 'Agent performance',
      body: 'Response time, visits conducted, stage conversion and pipeline held, so performance can be read where it actually differs.',
    },
    {
      name: 'Commission and settlement',
      body: 'Splits between agents, partners and the agency recorded against the deal at the point they are agreed.',
    },
    {
      name: 'Pipeline continuity',
      body: 'Reassignment with full history when an agent leaves, because the pipeline was the agency’s record rather than the agent’s phone.',
    },
    {
      name: 'Asking the pipeline questions',
      body: 'Plain-language questions answered from your own records, with follow-ups created and assigned in the same step.',
    },
  ],

  migration:
    'Your existing spreadsheets, contact lists and whatever CRM the agency has half-adopted are mapped during implementation. Leads, listings and history are brought across, and Verity is introduced alongside the way agents already work rather than as a system they have to be forced into.',

  faqHeading: 'Questions agencies ask',
  faqs: [
    [
      'What can AI software do for a real estate agency?',
      'Verity AI answers questions from your own lead, property, visit and deal records. You can ask which leads are closest to conversion, which have had no contact in two weeks, which properties are being viewed without generating offers, or which agent converts best at each stage — and turn the answer into follow-ups assigned to the right agents.',
    ],
    [
      'Is Verity a CRM for real estate?',
      'It includes what an agency needs from a CRM — leads, requirements, stages, activity history and assignment — but it holds the property inventory, the site visits, the agent team and the deal approvals in the same system, so the pipeline and the inventory are connected rather than sitting in separate tools.',
    ],
    [
      'What happens to a pipeline when an agent leaves?',
      'It stays. Leads and deals are agency records assigned to an agent rather than personal contact lists, so a departure becomes a reassignment with the full history intact rather than a loss.',
    ],
    [
      'Can Verity track site visits and follow-ups?',
      'Yes. A visit is work with a date, an assigned agent, a property, a lead and a state, and its outcome is recorded against both the lead and the property. Follow-ups are created from those outcomes with owners and due dates.',
    ],
    [
      'Can it show why a property is not selling?',
      'It shows the viewing history: how many times a listing has been shown, over what period, by which agents, and what feedback was recorded. That turns "it is not moving" into evidence you can take to the owner.',
    ],
    [
      'Can agents see each other’s leads?',
      'That is set by the permission model. Verity has one permission layer across every record, so agents can be given their own pipeline plus shared listing inventory, while the principal sees everything and every reassignment is on the record.',
    ],
    [
      'Does Verity handle commissions?',
      'Commission splits between agents, channel partners and the agency are recorded against the deal at the point they are agreed, so settlement follows the record. It is not an accounting or payroll system, and it does not replace your existing financial software.',
    ],
    [
      'Is it suitable for a small agency with a few agents?',
      'A six-agent agency already has six separate pipelines and no shared view, which is the problem Verity solves. Larger teams and multiple offices use the same structure without additional setup.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of how the agency actually works, configuration, migration of your existing leads and listings, then an ongoing operations partnership rather than a handover.',
    ],
  ],

  ctaHeading: 'Start with the leads you are already losing.',
  ctaLede:
    'For most agencies the fastest thing to fix is contact discipline on leads already in the pipeline. Tell us how yours runs and we will show you what it looks like in Verity.',

  related: ['property-dealers', 'property-management', 'real-estate-developers', 'construction-companies', 'contractors', 'interior-designers'],
};
