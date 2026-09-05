/* ---------------------------------------------------------------------------
   Canonical Verity capability registry.

   This is the single source of truth for what Verity does. Nothing on an
   Explore page may claim a capability that is not listed here, and nothing
   listed here may be described beyond what its `evidence` field supports.

   evidence:
     'product'  seen in the shipping product reference (verity-overview.html)
     'site'     claimed on the live Verity site (index.html)
     'both'     evidenced in both

   Adding a capability requires evidence. If a business genuinely needs
   something Verity does not do, the answer is to leave it out of the page,
   not to add it here.
--------------------------------------------------------------------------- */

export const CAPABILITIES = {
  records: {
    name: 'Records',
    label: 'One record for everything the business knows',
    evidence: 'both',
    summary:
      'Documents, products, assets and transactions live as records rather than files. Every record carries the same identity, permissions and history as everything else in Verity.',
    derive: 'What the business knows, in one place, with the history of how it got there.',
  },

  inventory: {
    name: 'Inventory',
    label: 'Stock, movement and reorder',
    evidence: 'product',
    summary:
      'Stock levels, movement between locations and reorder points, tracked against the same records the rest of the business uses.',
    derive: 'What you hold, what is moving, and what is about to run out.',
  },

  orders: {
    name: 'Orders',
    label: 'Orders from placement to fulfilment',
    evidence: 'product',
    summary:
      'Orders as first-class records with a state, an owner and a history — not a row in a sheet that someone updates when they remember.',
    derive: 'What was ordered, where it is, and what is holding it up.',
  },

  suppliers: {
    name: 'Suppliers',
    label: 'Vendors, purchase and supply',
    evidence: 'product',
    summary:
      'Suppliers and vendors as relationships with their own records, orders and history, connected to the stock and work they feed.',
    derive: 'Who you buy from, what you owe them, and how reliably they deliver.',
  },

  logistics: {
    name: 'Logistics',
    label: 'Dispatch, movement and delivery',
    evidence: 'product',
    summary:
      'Dispatch, routing and delivery tracked against the orders they fulfil, so a delay upstream is visible downstream.',
    derive: 'What has left, what is in transit, and what arrived late.',
  },

  work: {
    name: 'Work',
    label: 'Tasks, projects, jobs and activities',
    evidence: 'site',
    summary:
      'Tasks, projects, jobs, orders and activities share one execution model. Every piece of work has an owner, a state and a record of what happened.',
    derive: 'What needs to happen, who has it, and what is blocked.',
  },

  people: {
    name: 'People',
    label: 'Teams, roles and responsibilities',
    evidence: 'site',
    summary:
      'Teams, roles, responsibilities and the workforce itself, modelled once and referenced by every other part of the system.',
    derive: 'Who is responsible for what, and where the load actually sits.',
  },

  relationships: {
    name: 'Relationships',
    label: 'Customers, vendors, partners',
    evidence: 'site',
    summary:
      'Customers, vendors, partners and stakeholders as records with full interaction history, connected to the work and transactions that involve them.',
    derive: 'Who you deal with, what you have done together, and what is outstanding.',
  },

  workflows: {
    name: 'Workflows',
    label: 'Approvals, processes and states',
    evidence: 'both',
    summary:
      'Approvals, processes, states and automations that move work from one owner to the next without anyone chasing it.',
    derive: 'How work moves, where it stalls, and which step owns the delay.',
  },

  communication: {
    name: 'Communication',
    label: 'Comments, notifications and activity',
    evidence: 'site',
    summary:
      'Comments, notifications, activity and conversations attached to the record they concern, so context does not live in someone’s inbox.',
    derive: 'What was said about this, by whom, and when.',
  },

  intelligence: {
    name: 'Reports and analytics',
    label: 'Reports, dashboards and insight',
    evidence: 'both',
    summary:
      'Reports and dashboards drawn from live operational records rather than from an export someone assembled last week.',
    derive: 'How the business is performing, without waiting for a report cycle.',
  },

  ai: {
    name: 'Verity AI',
    label: 'Ask, understand, act',
    evidence: 'site',
    summary:
      'Ask a question in plain language and get an answer grounded in your own records and workflows. Verity AI is permission-aware, so it only sees what the person asking is allowed to see, and every action it takes stays part of the operational record.',
    derive: 'An answer with its reasoning shown, and the follow-up already created.',
  },

  control: {
    name: 'Control',
    label: 'Permissions, policy and audit',
    evidence: 'site',
    summary:
      'One permission model and one audit trail across every object, rather than a different access model per tool.',
    derive: 'Who can see what, who changed what, and when.',
  },

  commandCentre: {
    name: 'Command centre',
    label: 'The live operational picture',
    evidence: 'site',
    summary:
      'One live view of what is moving, what is blocked, who owns it and what needs attention today — assembled continuously instead of on request.',
    derive: 'The state of the business right now, not at the last close.',
  },

  schedule: {
    name: 'Schedule',
    label: 'Work in motion, start to finish',
    evidence: 'site',
    summary:
      'A timeline of the day’s work with each step’s state and owner, from assignment through to completion.',
    derive: 'What is done, what is running, and what is still ahead today.',
  },

  workforce: {
    name: 'Workforce',
    label: 'Assignment, attendance and availability',
    evidence: 'site',
    summary:
      'Assignment, attendance, availability and execution stay connected to the work they support. Every state is a record rather than a status someone typed into a sheet.',
    derive: 'Who is on, who is assigned, and what they finished.',
  },

  locations: {
    name: 'Locations',
    label: 'Sites, regions and rollup',
    evidence: 'site',
    summary:
      'Locations roll into organisations and organisations roll into the business. Permissions, reporting, work and exceptions all follow that same structure.',
    derive: 'One site, one region or the whole operation, from the same records.',
  },

  migration: {
    name: 'Migration',
    label: 'Bring your existing systems with you',
    evidence: 'site',
    summary:
      'Existing systems are mapped into Verity and the records that matter are migrated, so the new layer is introduced alongside what already works rather than replacing everything on day one.',
    derive: 'A move you can make in stages instead of over a weekend.',
  },

  implementation: {
    name: 'Implementation',
    label: 'Configured with you, in four weeks',
    evidence: 'site',
    summary:
      'Discovery and mapping, configuration, migration and an ongoing operations partnership. Verity combines the platform with the operational work required to make it useful.',
    derive: 'A system shaped to how the business actually runs.',
  },
};

/* The systems Verity is known to migrate from. There are no named third-party
   product integrations on record, so no page may claim one. */
export const MIGRATION_SOURCES = ['Excel', 'Google Sheets', 'Legacy ERP', 'CRM'];

/* Claims that are not evidenced anywhere and must never appear on a page.
   scripts/qa.mjs fails the build if a page mentions one of these as a Verity
   capability. */
export const FORBIDDEN_CLAIMS = [
  'point of sale',
  'payroll processing',
  'GST filing',
  'tax filing',
  'appointment booking',
  'email campaign',
  'free trial',
  'sign up free',
  'storefront',
];

export function capability(id) {
  const cap = CAPABILITIES[id];
  if (!cap) throw new Error(`Unknown capability: ${id}`);
  return { id, ...cap };
}
