/** Per-video content. The choreography in Trailer.tsx is fixed; only this data changes. */
export type Kpi = {label: string; from: number; to: number; fmt: (v: number) => string; delta?: string};

export type VideoConfig = {
  /** 8 scattered objects. Index 2 is the anchor record that gets selected. */
  chips: {name: string; sub: string}[];
  crm: {
    title: string;
    pill: string;
    rows: [string, string][];
    sel: number;
    anchor: {name: string; sub: string; pill: string};
    money: {eyebrow: string; title: string; amount: string; stages: [string, string, string]};
    order: {eyebrow: string; title: string; pill: string};
  };
  ops: {
    title: string;
    cols: [string, string, string];
    cards: {col: number; slot: number; title: string; sub: string}[];
    task: {title: string; sub: string; done: string};
    metric: string;
  };
  dash: {title: string; pill: string; kpis: [Kpi, Kpi, Kpi]};
  ana: {title: string; legend: string; badge: string; bars: number[]};
  captions: {a: number; b: number; k: string; text: string}[];
  tabs: string[];
  token: string;
  outroSub: string;
};

const money = (d: number, s = '') => (v: number) => `$${v.toFixed(d)}${s}`;
const int = (v: number) => Math.round(v).toLocaleString('en-US');
const pct = (v: number) => `${v.toFixed(1)}%`;

const WINDOWS = [
  [0.5, 3.9],
  [4.3, 6.9],
  [8.3, 10.9],
  [12.4, 15.8],
  [16.6, 19.4],
  [19.9, 22.8],
] as const;

/** Six [kicker, text] pairs, one per beat. */
const caps = (pairs: [string, string][]) => WINDOWS.map(([a, b], i) => ({a, b, k: pairs[i][0], text: pairs[i][1]}));

export const general: VideoConfig = {
  chips: [
    {name: 'Lead', sub: 'Inbound · New'},
    {name: 'Invoice', sub: 'INV-2291 · Due'},
    {name: 'Customer', sub: 'Northwind Traders'},
    {name: 'Order', sub: '#1042 · Draft'},
    {name: 'Task', sub: 'Follow up · Today'},
    {name: 'Employee', sub: 'A. Rao · Sales'},
    {name: 'Project', sub: 'Rollout · 62%'},
    {name: 'Payment', sub: '$48,200 · Pending'},
  ],
  crm: {
    title: 'CRM',
    pill: 'Customers',
    rows: [['Halden & Co', '$12.4k'], ['Northwind Traders', '$1.2M'], ['Apex Freight', '$86k'], ['Lumen Studio', '$22k'], ['Orbit Foods', '$310k']],
    sel: 1,
    anchor: {name: 'Northwind Traders', sub: 'Customer since 2022 · $1.2M lifetime', pill: 'Active'},
    money: {eyebrow: 'Opportunity', title: 'Annual supply contract', amount: '$48,200', stages: ['Proposal', 'Negotiation', 'Won']},
    order: {eyebrow: 'Order', title: '#1042 · 240 units', pill: 'Confirmed'},
  },
  ops: {
    title: 'Operations',
    cols: ['Queued', 'In progress', 'Done'],
    cards: [
      {col: 0, slot: 1, title: 'Pack #1038', sub: 'Warehouse A'},
      {col: 0, slot: 2, title: 'Invoice #1039', sub: 'Finance'},
      {col: 1, slot: 1, title: 'Ship #1036', sub: 'Route 4'},
      {col: 2, slot: 1, title: 'Deliver #1033', sub: 'Signed'},
      {col: 2, slot: 2, title: 'Deliver #1034', sub: 'Signed'},
    ],
    task: {title: 'Fulfil #1042', sub: 'Northwind · 240', done: '✓ Complete'},
    metric: 'On-time delivery',
  },
  dash: {
    title: 'Dashboard',
    pill: 'Live',
    kpis: [
      {label: 'Revenue', from: 1.28, to: 1.3282, fmt: money(2, 'M')},
      {label: 'Orders', from: 1041, to: 1042, fmt: int},
      {label: 'On-time fulfilment', from: 96, to: 98.4, fmt: pct, delta: '+2.4'},
    ],
  },
  ana: {title: 'Analytics', legend: 'Revenue / week', badge: '+12.4% wk', bars: [38, 52, 44, 61, 55, 68, 59, 72, 64]},
  captions: caps([
    ['Right now', 'Your business is scattered.'],
    ['Select one', 'One record connects it all.'],
    ['CRM', 'Customer. Opportunity. Order.'],
    ['Operations', 'The order becomes work.'],
    ['Live', 'Every number updates itself.'],
    ['Together', 'One environment.'],
  ]),
  tabs: ['CRM', 'Operations', 'Dashboard', 'Analytics'],
  token: 'Order #1042',
  outroSub: 'Your business, operating as one. · theverityai.xyz',
};

export const retail: VideoConfig = {
  chips: [
    {name: 'SKU', sub: 'Oat Milk 1L · 24 left'},
    {name: 'Invoice', sub: 'INV-2291 · Due'},
    {name: 'Customer', sub: 'Aarav Mehta · Gold'},
    {name: 'Order', sub: '#1042 · Draft'},
    {name: 'Stock', sub: 'Aisle 4 · Low'},
    {name: 'Supplier', sub: 'FreshCo · PO due'},
    {name: 'Loyalty', sub: '1,240 pts'},
    {name: 'Return', sub: 'Size M · Pending'},
  ],
  crm: {
    title: 'Customers',
    pill: 'Loyalty',
    rows: [['Maya Iyer', '$920'], ['Aarav Mehta', '$2,480'], ['Sana Khan', '$1,150'], ['Rohan Das', '$640'], ['Neha Verma', '$3,210']],
    sel: 1,
    anchor: {name: 'Aarav Mehta', sub: 'Loyalty Gold · 38 orders', pill: 'Active'},
    money: {eyebrow: 'Basket', title: 'Weekend groceries · 6 items', amount: '$186.40', stages: ['Cart', 'Checkout', 'Paid']},
    order: {eyebrow: 'Order', title: '#1042 · 6 items', pill: 'Paid'},
  },
  ops: {
    title: 'Fulfilment',
    cols: ['Picking', 'Packed', 'Dispatched'],
    cards: [
      {col: 0, slot: 1, title: 'Pick #1038', sub: 'Aisle 4'},
      {col: 0, slot: 2, title: 'Pick #1039', sub: 'Aisle 2'},
      {col: 1, slot: 1, title: 'Pack #1036', sub: 'Bay 3'},
      {col: 2, slot: 1, title: 'Ship #1033', sub: 'Courier'},
      {col: 2, slot: 2, title: 'Ship #1034', sub: 'Courier'},
    ],
    task: {title: 'Order #1042', sub: 'Aarav · 6 items', done: '✓ Dispatched'},
    metric: 'On-time dispatch',
  },
  dash: {
    title: 'Sales',
    pill: 'Live',
    kpis: [
      {label: 'Sales today', from: 12.4, to: 12.59, fmt: money(2, 'k')},
      {label: 'Orders', from: 1041, to: 1042, fmt: int},
      {label: 'In-stock rate', from: 96, to: 98.4, fmt: pct, delta: '+2.4'},
    ],
  },
  ana: {title: 'Analytics', legend: 'Sales / week', badge: '+12.4% wk', bars: [38, 52, 44, 61, 55, 68, 59, 72, 64]},
  captions: caps([
    ['Right now', 'Your store is scattered.'],
    ['Select one', 'One customer connects it all.'],
    ['Retail', 'Customer. Basket. Order.'],
    ['Fulfilment', 'The order becomes work.'],
    ['Live', 'Stock and sales update live.'],
    ['Together', 'One store environment.'],
  ]),
  tabs: ['Customers', 'Fulfilment', 'Sales', 'Analytics'],
  token: 'Order #1042',
  outroSub: 'Retail & Commerce · theverityai.xyz',
};

export const CONFIGS = {general, retail};
export type VideoId = keyof typeof CONFIGS;
