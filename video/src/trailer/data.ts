/** Content for the main trailer. Capability copy mirrors content/capabilities.js;
 *  attention rows are real strings from the business pages (content/businesses/*). */
export const FPS = 60;
export const SECONDS = 44;
export const DURATION = SECONDS * FPS;
export const W = 1920;
export const H = 1080;

export const CHIPS: {name: string; sub: string; x: number; y: number; a: number; f: number; p: number}[] = [
  {name: 'Spreadsheet', sub: 'stock_final_v3', x: 1460, y: 150, a: 18, f: 0.31, p: 0.4},
  {name: 'Group chat', sub: '42 unread', x: 1730, y: 270, a: 22, f: 0.42, p: 2.1},
  {name: 'Notebook', sub: 'Credit page 12', x: 1190, y: 290, a: 16, f: 0.27, p: 1.2},
  {name: 'Invoice PDF', sub: 'Unpaid', x: 300, y: 520, a: 24, f: 0.36, p: 3.3},
  {name: 'Calendar', sub: 'Missed', x: 770, y: 470, a: 18, f: 0.5, p: 0.9},
  {name: 'Email thread', sub: '18 replies', x: 1250, y: 520, a: 20, f: 0.33, p: 4.4},
  {name: 'Payroll sheet', sub: 'Row 61', x: 1640, y: 560, a: 22, f: 0.29, p: 5.1},
  {name: 'Stock register', sub: 'Out of date', x: 250, y: 720, a: 20, f: 0.45, p: 2.7},
  {name: 'Order slip', sub: 'Handwritten', x: 650, y: 770, a: 16, f: 0.38, p: 1.7},
  {name: 'Supplier call', sub: 'Voice note', x: 1030, y: 720, a: 24, f: 0.26, p: 3.9},
  {name: 'Customer list', sub: 'Old copy', x: 1430, y: 810, a: 18, f: 0.41, p: 0.2},
  {name: 'Bank export', sub: 'CSV', x: 1760, y: 830, a: 20, f: 0.34, p: 4.8},
  {name: 'Task list', sub: 'Sticky note', x: 390, y: 940, a: 22, f: 0.47, p: 2.4},
  {name: 'Contract', sub: 'Unsigned', x: 880, y: 975, a: 18, f: 0.32, p: 5.5},
];

export const CAPS: {name: string; label: string}[] = [
  {name: 'People', label: 'Teams, roles and responsibilities'},
  {name: 'Work', label: 'Tasks, projects, jobs and activities'},
  {name: 'Relationships', label: 'Customers, vendors, partners'},
  {name: 'Records', label: 'One record for everything the business knows'},
  {name: 'Workflows', label: 'Approvals, processes and states'},
  {name: 'Communication', label: 'Comments, notifications and activity'},
  {name: 'Analytics', label: 'Reports, dashboards and insight'},
  {name: 'Control', label: 'Permissions, policy and audit'},
];

export const JOB = ['Order received', 'Stock reserved', 'Task assigned', 'Invoice raised'];

export const METRICS: {label: string; to: number; fmt: (v: number) => string; note: string}[] = [
  {label: 'Orders today', to: 312, fmt: (v) => Math.round(v).toLocaleString('en-IN'), note: 'across 3 locations'},
  {label: 'Revenue', to: 4.86, fmt: (v) => `₹${v.toFixed(2)} L`, note: 'vs ₹4.31 L yesterday'},
  {label: 'On-time', to: 98.4, fmt: (v) => `${v.toFixed(1)}%`, note: 'of committed dates'},
  {label: 'Open tasks', to: 37, fmt: (v) => Math.round(v).toString(), note: '12 due today'},
];

export const ATTENTION: {name: string; meta: string}[] = [
  {name: '12 fast-moving lines below reorder point', meta: 'Two suppliers · both deliver Thursday'},
  {name: '58 families past the second fee reminder', meta: '₹18.4 L · no follow-up recorded'},
  {name: '17 orders awaiting QC since 09:20', meta: 'Plant 2 · blocking three dispatches'},
  {name: '4 statutory deadlines with no owner', meta: 'Next 14 days'},
];

export const RESOLVE = ['Assigned to Priya S.', 'Due today, 17:00', 'Logged to the order record'];

export const INDUSTRIES = [
  'Retail & Commerce',
  'Food & Hospitality',
  'Professional Services',
  'Healthcare',
  'Education',
  'Real Estate & Construction',
  'Manufacturing & B2B',
  'Personal & Local Services',
  'Digital & Technology',
];
export const TYPE_COUNT = 123;

export const MARK_PATHS = [
  'M2.6 1.6h18.8a1.6 1.6 0 011.2 2.7L13.2 14a1.6 1.6 0 01-2.4 0L1.4 4.3A1.6 1.6 0 012.6 1.6z',
  'M10.8 16a1.6 1.6 0 012.4 0l9.4 9.7a1.6 1.6 0 01-1.2 2.7H2.6a1.6 1.6 0 01-1.2-2.7z',
];
