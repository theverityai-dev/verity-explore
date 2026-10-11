import React from 'react';
import {ChatCardX, type FragSpec, type ReelCfg, SeriesFilm, TableCard} from './engine';
import {World02, World06, World09} from './worlds';

/** The three industry reels built on the series engine. Every anchor is a word start read off the recording's faster-whisper
 *  pass (video/ads/series/IND-industry-reels/IND0N/vo/words.json). All content is invented sample data. */

const FPS = 30;

/** Scatter positions for the fragments of the reframe. */
const FROM: FragSpec['from'][] = [
  {x: 80, y: 1090, r: 3},
  {x: 110, y: 720, r: -5},
  {x: 600, y: 770, r: 4},
  {x: 330, y: 920, r: -3},
];

/* ---------- IND02 Food & Hospitality (restaurants.mp3, 47.9 s) ---------- */

const CFG02: ReelCfg = {
  vo: 'ads/IND02/vo.mp3',
  duration: Math.round(51.5 * FPS),
  a: {phoneIn: 8.75, d: [9.52, 11.22, 12.6], cuts: [15.28, 16.7, 18.2], pA: 19.66, pB: 21.94, tail: 24.98, t3: 28.02, offer: 31.06, five: 31.54, lbl: 32.7, freeA: 34.2, freeB: 34.84, t5: 34.84, t6: 39.16, f: 47.08},
  World: World02,
  hook: {lines: ['Kitchen. Staff.', 'Billing. In sync?'], size: 76, cap: 360, accent: [1]},
  thread: {
    title: 'Restaurant team', sub: '16 members', initials: 'RT',
    msgs: [
      {who: 'Kitchen', text: 'Sir, has the order been made?', chip: 'Ticket 41', h: 160},
      {who: 'Waiter', text: "Where is the table's bill?", chip: 'Table 7', h: 160},
      {who: 'Manager', text: 'How did we waste this much today?', chip: 'Wastage log', h: 160},
      {who: 'Kitchen', text: 'Sir?', h: 84},
      {who: 'Stores', text: 'Urgent', h: 84},
      {who: 'Accounts', text: 'Please reply', h: 84},
    ],
  },
  cards: [
    <TableCard key="a" label="Kitchen orders" head={['Ticket', 'Item', 'Status']} rows={[['41', 'Paneer tikka', 'Cooking'], ['42', 'Dal fry', 'Ready'], ['43', 'Naan x 4', 'Late?'], ['44', 'Biryani', '—'], ['45', 'Salad', 'Served']]} markRow={2} rot={-1.1} />,
    <TableCard key="b" label="Ingredient stock" head={['Item', 'In stock', 'Par']} rows={[['Paneer', '2 kg', '5 kg'], ['Rice', '18 kg', '10 kg'], ['Cooking oil', '4 L', '6 L'], ['Onions', '—', '8 kg']]} markRow={3} rot={1.0} />,
    <TableCard key="c" label="Day-end accounts" head={['Table', 'Bill', 'Matched']} rows={[['T3', 'closed', 'yes'], ['T7', 'open', '?'], ['T9', 'closed', 'yes'], ['T12', 'closed', '?']]} markRow={1} rot={-0.9} />,
  ],
  cutsHead: ['Orders, stock,', 'accounts: apart.'],
  reframe: {a: ["It isn't your staff."], b: ['Nothing proper', 'manages operations.'], accentB: [1]},
  frags: [
    {kind: 'receipt', label: 'Tickets', role: 'Orders', from: FROM[0]},
    {kind: 'list', label: 'Stock sheet', role: 'Inventory', from: FROM[1]},
    {kind: 'notes', label: 'Bill book', role: 'Accounts', from: FROM[2]},
  ],
  map: [{kind: 'flow', label: 'Your orders'}, {kind: 'list', label: 'Your inventory'}, {kind: 'receipt', label: 'Your accounts'}, {kind: 'team', label: 'Your staff'}],
  modules: ['Orders', 'Inventory', 'Suppliers', 'Workforce', 'Reports and analytics'],
  flowLabel: 'Order to table',
  callouts: ['Kitchen owner', 'Wastage check', 'Billing handoff'],
};

/* ---------- IND06 Manufacturing (Manufactuing.mp3, 52.5 s) ---------- */

const CFG06: ReelCfg = {
  vo: 'ads/IND06/vo.mp3',
  duration: Math.round(56.0 * FPS),
  a: {phoneIn: 13.2, d: [13.92, 15.64, 17.02], cuts: [19.32, 20.95, 21.7], pA: 24.6, pB: 26.6, tail: 29.52, t3: 32.58, offer: 35.44, five: 36.36, lbl: 37.22, freeA: 38.8, freeB: 39.36, t5: 39.74, t6: 43.36, f: 51.62},
  World: World06,
  hook: {lines: ['Every order.', 'Every stage.', 'Clear?'], size: 72, cap: 330, accent: [2]},
  thread: {
    title: 'Plant team', sub: '22 members', initials: 'PT',
    msgs: [
      {who: 'Production', text: 'Sir, did the material arrive?', chip: 'Material slip', h: 160},
      {who: 'Supervisor', text: 'Is production complete?', chip: 'Batch 214', h: 160},
      {who: 'Dispatch', text: "Why wasn't the order dispatched?", chip: 'Order 3302', h: 160},
      {who: 'Production', text: 'Sir?', h: 84},
      {who: 'Stores', text: 'Urgent', h: 84},
      {who: 'Dispatch', text: 'Please reply', h: 84},
    ],
  },
  cards: [
    <TableCard key="a" label="Sales orders" head={['Order', 'Qty', 'Due']} rows={[['3301', '500', '12 Oct'], ['3302', '1,200', '14 Oct'], ['3303', '300', '15 Oct'], ['3304', '800', '18 Oct']]} markRow={1} rot={-1.1} />,
    <TableCard key="b" label="Production tracker" head={['Batch', 'Stage', 'Worker']} rows={[['212', 'Pack', '—'], ['213', 'QC', 'R. Singh'], ['214', 'QC hold', '?'], ['215', 'Cut', 'M. Das']]} markRow={2} rot={1.0} />,
    <TableCard key="c" label="Inventory register" head={['Material', 'Stock', 'Need']} rows={[['Steel sheet', '40', '120'], ['Fasteners', '900', '600'], ['Packaging', '—', '200']]} markRow={2} rot={-0.9} />,
  ],
  cutsHead: ['Sales, production,', 'inventory: apart.'],
  reframe: {a: ["It isn't production."], b: ['Departments need', 'one proper system.'], accentB: [1]},
  frags: [
    {kind: 'sheet', label: 'Orders', role: 'Sales', from: FROM[0]},
    {kind: 'flow', label: 'Tracker', role: 'Production', from: FROM[1]},
    {kind: 'list', label: 'Register', role: 'Inventory', from: FROM[2]},
    {kind: 'receipt', label: 'Gate slip', role: 'Dispatch', from: FROM[3]},
  ],
  map: [{kind: 'flow', label: 'Your orders'}, {kind: 'loop', label: 'Your production'}, {kind: 'list', label: 'Your inventory'}, {kind: 'receipt', label: 'Your dispatch'}],
  modules: ['Orders', 'Work', 'Inventory', 'Logistics', 'Reports and analytics'],
  flowLabel: 'Order to dispatch',
  callouts: ['Production owner', 'QC hold', 'Dispatch handoff'],
};

/* ---------- IND09 Wholesale & Distribution (Wholesale & Distribution.mp3, 52.3 s) ---------- */

const CFG09: ReelCfg = {
  vo: 'ads/IND09/vo.mp3',
  duration: Math.round(56.0 * FPS),
  a: {phoneIn: 10.8, d: [11.54, 13.4, 14.7], cuts: [17.44, 18.7, 19.75], pA: 22.2, pB: 24.8, tail: 29.48, t3: 32.4, offer: 35.22, five: 35.76, lbl: 36.9, freeA: 38.3, freeB: 38.88, t5: 39.5, t6: 44.02, f: 51.62},
  World: World09,
  hook: {lines: ['Every dealer.', 'Every order.', 'Every balance.'], size: 72, cap: 330, accent: [2]},
  thread: {
    title: 'Dealer desk', sub: '18 members', initials: 'DD',
    msgs: [
      {who: 'Accounts', text: "Sir, has the party's payment come?", chip: 'Ledger page', h: 160},
      {who: 'Godown', text: 'Has that stock been dispatched?', chip: 'Manifest', h: 160},
      {who: 'Sales', text: "What is the dealer's old balance?", chip: 'Statement', h: 160},
      {who: 'Accounts', text: 'Sir?', h: 84},
      {who: 'Godown', text: 'Urgent', h: 84},
      {who: 'Sales', text: 'Please reply', h: 84},
    ],
  },
  cards: [
    <ChatCardX key="a" label="Dealer orders" msgs={[['Dealer A', 'Send 40 cartons tomorrow'], ['Dealer C', 'Same rate as last time?'], ['Dealer B', 'Where is my order?']]} rot={-1.1} />,
    <TableCard key="b" label="Godown stock" head={['Item', 'Cartons', 'Out']} rows={[['Item 101', '120', '40'], ['Item 102', '18', '—'], ['Item 103', '0', '60'], ['Item 104', '75', '—']]} markRow={2} rot={1.0} />,
    <TableCard key="c" label="Payment register" head={['Dealer', 'Billed', 'Received']} rows={[['Dealer A', 'yes', 'yes'], ['Dealer B', 'yes', '?'], ['Dealer C', 'yes', 'part'], ['Dealer D', 'yes', '?']]} markRow={1} rot={-0.9} />,
  ],
  cutsHead: ['Orders, stock,', 'payments: apart.'],
  reframe: {a: ["It isn't your volume."], b: ['Connect sales,', 'stock and accounts.'], accentB: [1]},
  frags: [
    {kind: 'chat', label: 'Chat', role: 'Sales', from: FROM[0]},
    {kind: 'sheet', label: 'Godown sheet', role: 'Inventory', from: FROM[1]},
    {kind: 'notes', label: 'Register', role: 'Accounts', from: FROM[2]},
  ],
  map: [{kind: 'team', label: 'Your dealers'}, {kind: 'list', label: 'Your stock'}, {kind: 'receipt', label: 'Your accounts'}, {kind: 'flow', label: 'Your dispatch'}],
  modules: ['Orders', 'Inventory', 'Suppliers', 'Logistics', 'Reports and analytics'],
  flowLabel: 'Order to payment',
  callouts: ['Credit owner', 'Stock check', 'Dispatch handoff'],
};

export const IND02_DURATION = CFG02.duration;
export const IND06_DURATION = CFG06.duration;
export const IND09_DURATION = CFG09.duration;
export const IND_FPS = FPS;

export const AdIND02: React.FC = () => <SeriesFilm cfg={CFG02} />;
export const AdIND06: React.FC = () => <SeriesFilm cfg={CFG06} />;
export const AdIND09: React.FC = () => <SeriesFilm cfg={CFG09} />;
