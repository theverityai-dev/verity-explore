import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {DK, DURATION, FPS, H, SANS, UI, W, glide, lerp, lin, seg, smooth, track, win} from './kit';
import {BillBook, CalendarPage, Chat, Clipboard, Ledger, Mini, OrderSheet, PurchaseOrder, Receipt, SIZE, Slip, Sticky} from './props';
import {Blank, Discovery, ErpPanel, KEEP, MODULE_GRID, Modules, PANEL, Proposal, ROW_TOP, TAB_W, TAB_X, VerityFrame, Words, tileCenter} from './panel';
import {Cursor} from '../implementation/Ui';
import {Grade} from '../engine';
import {GlassTile} from '../components/VerityOutro';

export {DURATION};
export const FILM = {w: W, h: H, fps: FPS};

/* ------------------------------------------------------------------ props: poses through the film */

type Pose = {x: number; y: number; s: number; r: number; b: number; o: number};
const P = (x: number, y: number, s: number, r: number, b = 0, o = 1): Pose => ({x, y, s, r, b, o});
type Id = 'sticky' | 'ledger' | 'chat' | 'po' | 'sheet' | 'clip';
const IDS: Id[] = ['sticky', 'ledger', 'chat', 'po', 'sheet', 'clip'];
const DELAY: Record<Id, number> = {sticky: 0, ledger: 0.1, chat: 0.2, po: 0.3, sheet: 0.4, clip: 0.5};
const SZ: Record<Id, readonly [number, number]> = {sticky: SIZE.sticky, ledger: SIZE.ledger, chat: SIZE.chat, po: SIZE.po, sheet: SIZE.sheet, clip: SIZE.clip};

const PANEL_C = {x: 720, y: 640};
const PS = PANEL.scale;
const pLeft = PANEL_C.x - (PANEL.w * PS) / 2;
const pTop = PANEL_C.y - (PANEL.h * PS) / 2;
const tileScreen = (row: number, col: number) => {
  const c = tileCenter(row, col);
  return {x: pLeft + PS * c.x - W / 2, y: pTop + PS * c.y - H / 2};
};
const TILE_AT: Record<string, [number, number, number]> = {ledger: [0, 0, 0.27], po: [0, 2, 0.29], sticky: [1, 0, 0.52], sheet: [1, 1, 0.46], chat: [1, 2, 0.42]};

const A: Record<Id, Pose> = {
  sticky: P(-300, -190, 1, -6), ledger: P(-70, -10, 1, -2), chat: P(-320, 190, 1, 2), po: P(300, -120, 1, 4), sheet: P(110, 230, 1, -1.5), clip: P(-520, 20, 1, -4),
};
const CHAIN: Record<Id, Pose> = {
  sticky: P(-540, 70, 0.62, -4), ledger: P(-270, -60, 0.62, -2), chat: P(0, 60, 0.62, 2), po: P(270, -60, 0.62, 3), sheet: P(540, 70, 0.62, -1.5), clip: P(-640, -270, 0.5, -4, 9, 0.3),
};
const EVO: Record<Id, Pose> = {
  sticky: P(-520, 95, 0.66, -4), ledger: P(-260, -60, 0.66, -2), chat: P(0, 85, 0.66, 2), po: P(260, -60, 0.66, 3), sheet: P(520, 95, 0.66, -1.5), clip: P(-700, -310, 0.5, -4, 9, 0.3),
};
const BG: Record<Id, Pose> = {
  sticky: P(-570, -220, 1.15, -9, 9, 0.62), ledger: P(-540, 320, 1.1, -5, 10, 0.55), chat: P(560, 340, 1.0, 3, 10, 0.55), po: P(580, -200, 1.12, 6, 9, 0.62), sheet: P(600, 90, 1.05, -3, 9, 0.55), clip: P(-600, 70, 1.0, -5, 11, 0.5),
};
const UP: Record<Id, Pose> = {
  sticky: P(-500, -300, 0.5, -4), ledger: P(-250, -340, 0.5, -2), chat: P(0, -300, 0.5, 2), po: P(250, -340, 0.5, 3), sheet: P(500, -300, 0.5, -1.5), clip: P(-640, -330, 0.4, -4, 9, 0),
};
const poseOf = (id: Id, ph: string): Pose => {
  switch (ph) {
    case 'A0': return {...A[id], s: A[id].s * 1.12, b: 18, o: 0};
    case 'A': return A[id];
    case 'chain': return CHAIN[id];
    case 'evo': return EVO[id];
    case 'bg': return BG[id];
    case 'tile': {
      const t = TILE_AT[id];
      if (!t) return BG[id];
      const c = tileScreen(t[0], t[1]);
      return P(c.x, c.y, t[2], 0, 0, 1);
    }
    case 'hero': return {...A[id], x: A[id].x * 1.08, y: A[id].y * 1.08 - 30, s: A[id].s * 1.08};
    case 'link': return {...BG[id], b: 3, o: 0.95};
    case 'up': return UP[id];
    default: return {...UP[id], o: 0};
  }
};
const PH: [number, string][] = [
  [0, 'A0'], [2.2, 'A'], [6.8, 'A'], [9.2, 'chain'], [12.6, 'chain'], [14.8, 'evo'], [22.2, 'evo'], [24.2, 'bg'], [25.4, 'bg'], [28.2, 'tile'],
  [32.0, 'tile'], [34.2, 'bg'], [36.8, 'bg'], [38.8, 'hero'], [40.0, 'hero'], [41.8, 'bg'], [67.0, 'bg'], [68.6, 'link'], [71.2, 'link'], [72.8, 'bg'],
  [83.6, 'bg'], [86.0, 'A'], [90.0, 'A'], [92.4, 'evo'], [98.6, 'evo'], [100.6, 'up'], [106.0, 'up'], [107.0, 'gone'],
];
const blend = (a: Pose, b: Pose, k: number): Pose => ({x: lerp(a.x, b.x, k), y: lerp(a.y, b.y, k), s: lerp(a.s, b.s, k), r: lerp(a.r, b.r, k), b: lerp(a.b, b.b, k), o: lerp(a.o, b.o, k)});
const propPose = (id: Id, t: number): Pose => {
  const tt = t - DELAY[id];
  if (tt <= PH[0][0]) return poseOf(id, PH[0][1]);
  for (let i = 1; i < PH.length; i++) {
    if (tt <= PH[i][0]) return blend(poseOf(id, PH[i - 1][1]), poseOf(id, PH[i][1]), smooth((tt - PH[i - 1][0]) / (PH[i][0] - PH[i - 1][0])));
  }
  return poseOf(id, PH[PH.length - 1][1]);
};

/** Group transform: the whole business world drifts, and pulls back for the three-businesses beat. */
const groupAt = (t: number) => {
  const g = seg(t, 10.5, 11.9, smooth) * (1 - seg(t, 12.4, 13.6, smooth));
  return {gs: lerp(1, 0.6, g), dx: -50 * seg(t, 0.5, 7, lin) * (1 - seg(t, 7, 9.2, smooth))};
};

/* ------------------------------------------------------------------ the one surface: pose over time */

const panelPose = (t: number) => {
  const enter = seg(t, 22.2, 24.2, glide);
  const small = seg(t, 37.0, 38.6, smooth) * (1 - seg(t, 40.2, 41.6, smooth));
  const exit = seg(t, 84.0, 85.6, smooth);
  const dim = 1 - 0.78 * (seg(t, 72.0, 72.8, smooth) * (1 - seg(t, 76.6, 77.4, smooth)));
  return {
    x: lerp(PANEL_C.x, 1010, small),
    y: lerp(PANEL_C.y + 760 * (1 - enter), 800, small) + 900 * exit,
    s: lerp(1, 0.62, small),
    rx: 8 * (1 - enter),
    a: seg(t, 22.4, 23.2) * (1 - seg(t, 85.0, 85.6)) * dim,
  };
};

/* ------------------------------------------------------------------ small drawing helpers */

type Pt = {x: number; y: number};
const Line: React.FC<{a: Pt; b: Pt; p: number; color: string; w?: number; alpha?: number; dash?: string}> = ({a, b, p, color, w = 2, alpha = 1, dash}) =>
  p > 0.001 ? <line x1={a.x} y1={a.y} x2={lerp(a.x, b.x, p)} y2={lerp(a.y, b.y, p)} stroke={color} strokeWidth={w} strokeLinecap="round" opacity={alpha} strokeDasharray={dash} /> : null;

const TopStatement: React.FC<{lines: [string, string?]; x: number; y: number; inP: number; outP: number}> = ({lines, x, y, inP, outP}) => (
  <div style={{position: 'absolute', left: x, top: y, fontFamily: SANS, fontSize: 64, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1.08, opacity: inP * (1 - outP), transform: `translateY(${(1 - inP) * 24 - outP * 10}px)`}}>
    <div style={{color: DK.ink}}>{lines[0]}</div>
    {lines[1] && <div style={{color: DK.mute}}>{lines[1]}</div>}
  </div>
);

const Tag: React.FC<{x: number; y: number; a: number; children: string}> = ({x, y, a, children}) => (
  <div style={{position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)', fontFamily: SANS, fontSize: 17, fontWeight: 600, letterSpacing: '0.22em', color: DK.mute, opacity: a, whiteSpace: 'nowrap'}}>{children}</div>
);

const Pill: React.FC<{x: number; y: number; a: number; children: string; dark?: boolean}> = ({x, y, a, children, dark}) => (
  <div style={{position: 'absolute', left: x, top: y, transform: 'translate(0,-50%)', opacity: a, fontFamily: SANS, fontSize: 16, fontWeight: 600, color: '#fff', background: dark ? '#0f1115' : UI.acc, borderRadius: 999, padding: '5px 13px', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(0,0,0,0.35)'}}>{children}</div>
);

const PricePill: React.FC<{y: number; a: number; text: string; plus?: boolean; mark?: boolean; n?: string}> = ({y, a, text, plus, mark, n}) => (
  <div style={{position: 'absolute', left: pLeft, top: y, width: 600, height: 58, transform: `translateY(${(1 - a) * 18 - 29}px)`, opacity: a, borderRadius: 12, background: 'rgba(214,219,228,0.94)', boxShadow: '0 12px 34px rgba(0,0,0,0.4)', fontFamily: SANS, color: '#2a3140', fontSize: 23, fontWeight: 500, display: 'flex', alignItems: 'center', padding: '0 22px', gap: 14}}>
    {n && <span style={{fontSize: 14, fontWeight: 600, letterSpacing: '0.14em', color: '#7b8394'}}>{n}</span>}
    {plus && <span style={{color: '#7b8394'}}>+</span>}
    {text}
    {mark && (
      <svg width={22} height={27} viewBox="0 0 24 30" style={{marginLeft: 'auto'}}>
        <path d="M2.6 1.6h18.8a1.6 1.6 0 011.2 2.7L13.2 14a1.6 1.6 0 01-2.4 0L1.4 4.3A1.6 1.6 0 012.6 1.6z" fill={UI.acc} />
        <path d="M10.8 16a1.6 1.6 0 012.4 0l9.4 9.7a1.6 1.6 0 01-1.2 2.7H2.6a1.6 1.6 0 01-1.2-2.7z" fill={UI.acc} />
      </svg>
    )}
  </div>
);

const LiveCard: React.FC<{n: string; title: string; sub: string; p: number; active: number}> = ({n, title, sub, p, active}) => (
  <div
    style={{
      width: 230,
      height: 196,
      borderRadius: 20,
      background: 'linear-gradient(180deg, #f7f8fb, #eceff4)',
      border: '1px solid rgba(255,255,255,0.7)',
      boxShadow: 'inset 0 1px 0 #fff, 0 2px 4px rgba(0,0,0,0.3), 0 36px 80px rgba(0,0,0,0.55)',
      position: 'relative',
      fontFamily: SANS,
      color: UI.ink,
      opacity: p,
      transform: `perspective(900px) rotateX(${(1 - p) * 22}deg) translateY(${(1 - p) * 40}px)`,
    }}
  >
    <div style={{position: 'absolute', left: 20, top: 20, width: 36, height: 36, borderRadius: 9, display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 600, background: `color-mix(in srgb, ${UI.acc} ${Math.round(active * 100)}%, #eef0f4)`, color: active > 0.5 ? '#fff' : '#9aa0ab'}}>{n}</div>
    <div style={{position: 'absolute', left: 20, top: 74, fontSize: 25, fontWeight: 500, letterSpacing: '-0.015em'}}>{title}</div>
    <div style={{position: 'absolute', left: 20, top: 110, right: 16, fontSize: 17, color: '#6b7078', lineHeight: 1.25}}>{sub}</div>
    <div style={{position: 'absolute', right: 18, top: 24, width: 28, height: 28, borderRadius: 14, border: `2px solid ${active > 0.5 ? UI.acc : '#c9ced8'}`, background: active > 0.5 ? UI.acc : 'transparent', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 15, fontWeight: 700}}>{active > 0.5 ? '✓' : ''}</div>
  </div>
);

const STEP_CARDS: [string, string][] = [
  ['Order recorded', 'against the retailer'],
  ['Stock checked', 'across godowns'],
  ['Credit checked', 'against the limit'],
  ['Held for approval', 'if it exceeds the limit'],
  ['Released', 'to the godown for picking'],
];

/* ------------------------------------------------------------------ the years (beat 3) and the other businesses (beat 2) */

type Extra = {id: string; x: number; y: number; s: number; r: number; at: number; near: Id; node: React.ReactNode};
const EXTRAS: Extra[] = [
  {id: 'ex1', x: -470, y: -250, s: 0.62, r: -8, at: 15.0, near: 'ledger', node: <Sticky lines={['Rate badla', 'PO dobara']} p={1} tone="p" />},
  {id: 'ex2', x: -370, y: 300, s: 0.55, r: 5, at: 16.0, near: 'sticky', node: <Receipt />},
  {id: 'ex3', x: -40, y: -300, s: 0.55, r: -4, at: 17.0, near: 'ledger', node: <CalendarPage />},
  {id: 'ex4', x: 140, y: 300, s: 0.55, r: 3, at: 17.8, near: 'chat', node: <BillBook />},
  {id: 'ex5', x: 430, y: -300, s: 0.5, r: 6, at: 18.6, near: 'po', node: <PurchaseOrder stamp={1} />},
  {id: 'ex6', x: 640, y: -250, s: 0.6, r: -6, at: 19.4, near: 'po', node: <Slip />},
  {id: 'ex7', x: 640, y: 300, s: 0.5, r: 3, at: 20.2, near: 'sheet', node: <Chat p1={1} p2={1} p3={1} />},
];

type MiniNode = {id: string; kind: 'paper' | 'sticky' | 'chat' | 'sheet' | 'book'; x: number; y: number; at: number};
const MB: MiniNode[] = [
  {id: 'b1', kind: 'sticky', x: -540, y: -400, at: 10.8}, {id: 'b2', kind: 'paper', x: -270, y: -480, at: 11.0}, {id: 'b3', kind: 'paper', x: -270, y: -320, at: 11.1},
  {id: 'b4', kind: 'chat', x: 20, y: -400, at: 11.3}, {id: 'b5', kind: 'sheet', x: 310, y: -400, at: 11.5}, {id: 'b6', kind: 'book', x: 570, y: -400, at: 11.7},
];
const MBL: [string, string][] = [['b1', 'b2'], ['b1', 'b3'], ['b2', 'b4'], ['b3', 'b4'], ['b4', 'b5'], ['b5', 'b6']];
const MC: MiniNode[] = [
  {id: 'c1', kind: 'paper', x: -540, y: 400, at: 11.0}, {id: 'c2', kind: 'chat', x: -270, y: 400, at: 11.2}, {id: 'c3', kind: 'sticky', x: 20, y: 400, at: 11.4},
  {id: 'c4', kind: 'book', x: 300, y: 400, at: 11.6}, {id: 'c5', kind: 'sheet', x: -150, y: 590, at: 11.8},
];
const MCL: [string, string][] = [['c1', 'c2'], ['c2', 'c3'], ['c3', 'c4'], ['c2', 'c5'], ['c5', 'c3']];

/* ------------------------------------------------------------------ the film */

export const WorkspaceFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const {gs, dx} = groupAt(t);
  const toScreen = (x: number, y: number): Pt => ({x: W / 2 + gs * (x + dx), y: H / 2 + gs * y});

  const poses = Object.fromEntries(IDS.map((id) => [id, propPose(id, t)])) as Record<Id, Pose>;
  const sp = Object.fromEntries(IDS.map((id) => [id, toScreen(poses[id].x, poses[id].y)])) as Record<Id, Pt>;
  const spine: Id[] = ['sticky', 'ledger', 'chat', 'po', 'sheet'];
  const TAGS = ['REQUEST', 'REVIEW', 'DECISION', 'APPROVAL', 'EXECUTION'];

  /* chain lines, tags, travelling dot */
  const chainOn = (t >= 9.2 && t < 23.8 ? (t < 22.2 ? 1 : 1 - seg(t, 22.2, 23.6, smooth)) : 0) + (t >= 92.4 ? 1 - seg(t, 105.6, 106.8, smooth) : 0);
  const lineP = (k: number) => (t < 92 ? seg(t, 9.4 + k * 0.4, 10.2 + k * 0.4, smooth) : seg(t, 92.6 + k * 0.35, 93.4 + k * 0.35, smooth));
  const tagA = Math.min(1, win(t, 9.4, 12.2, 0.5, 0.5) + win(t, 93.0, 99.6, 0.6, 0.6));
  const dotAlong = (t0: number, t1: number) => {
    const k = seg(t, t0, t1, smooth) * 4;
    const i = Math.min(3, Math.floor(k));
    const f = k - i;
    const a = sp[spine[i]];
    const b = sp[spine[i + 1]];
    return {x: lerp(a.x, b.x, f), y: lerp(a.y, b.y, f), v: t >= t0 && t <= t1 + 0.2};
  };
  const d1 = dotAlong(9.8, 11.8);
  const d2 = dotAlong(94.0, 98.4);
  const d3 = dotAlong(102.4, 104.8);

  /* beat 1 events: the business is already operating */
  const stickyP = seg(t, 0.5, 1.8, smooth);
  const pTotal = seg(t, 2.2, 3.3, smooth);
  const stamp = seg(t, 3.5, 3.8, smooth);
  const c1 = seg(t, 0.8, 1.4);
  const c2 = seg(t, 2.0, 2.6);
  const c3 = t > 6 ? 1 : seg(t, 4.6, 5.2);
  const swap = seg(t, 5.3, 5.8);
  const tick = seg(t, 4.0, 4.2);

  const nodeFor = (id: Id): React.ReactNode => {
    switch (id) {
      case 'sticky': return <Sticky lines={['Kal tak', 'stock check', 'karna!!']} p={stickyP} />;
      case 'ledger': return <Ledger pTotal={pTotal} />;
      case 'chat': return <Chat p1={c1} p2={c2} p3={c3} />;
      case 'po': return <PurchaseOrder stamp={stamp} />;
      case 'sheet': return <OrderSheet swap={swap} />;
      default: return <Clipboard tick={tick} />;
    }
  };

  /* the surface */
  const pp = panelPose(t);
  const erpA = seg(t, 22.4, 23.4) * (1 - seg(t, 32.0, 33.6));
  const verA = seg(t, 32.2, 33.8);
  const erpStep = t < 28 ? -1 : Math.min(2, Math.floor((t - 28) / 1.3));
  const live = seg(t, 82.2, 82.6);
  const status = t >= 82.3 ? 'LIVE' : t >= 41 ? 'DRAFT' : 'NEW';

  const blankA = seg(t, 32.8, 33.8) * (1 - seg(t, 41.0, 41.8));
  const rows = [0, 1, 2, 3, 4].map((i) => seg(t, 41.6 + i * 0.25, 42.2 + i * 0.25, glide));
  const selWin: number[][] = [[42.2, 44.2], [44.2, 46.4], [46.4, 49.0], [50.3, 51.6], [51.6, 53.0]];
  const sel = [0, 1, 2, 3, 4].map((i) => Math.max(win(t, selWin[i][0], selWin[i][1], 0.35, 0.35), i === 1 ? win(t, 49.0, 50.2, 0.35, 0.35) : 0));
  const discA = 1 - seg(t, 52.8, 53.6);
  const wordsA = seg(t, 53.4, 53.8) * (1 - seg(t, 58.8, 59.3));
  const modsA = seg(t, 59.2, 59.8) * (1 - seg(t, 77.0, 77.6));
  const propA = seg(t, 77.0, 77.6);

  const rowY = (i: number) => pTop + PS * (ROW_TOP(i) + 40);
  const curKeys: [number, number, number][] = [
    [41.5, 1260, 1110], [42.2, 900, rowY(0)], [44.2, 900, rowY(1)], [46.4, 900, rowY(2)], [49.0, 900, rowY(1)], [50.3, 900, rowY(3)], [51.6, 900, rowY(4)], [52.8, 1300, 1150],
  ];
  const curH = {x: track(t, curKeys.map(([a, x]) => [a, x] as [number, number]), smooth), y: track(t, curKeys.map(([a, , y]) => [a, y] as [number, number]), smooth), a: seg(t, 41.5, 42.0) * (1 - seg(t, 52.6, 53.0))};
  const itemY = pTop + PS * (62 + 170 + 20);
  const btnY = pTop + PS * (PANEL.h - 22 - 28 - 29);
  const mKeys: [number, number, number][] = [[78.9, 1260, 1090], [79.7, pLeft + PS * 130, itemY], [80.9, 720, btnY], [82.6, 720, btnY], [83.4, 1180, 1120]];
  const curM = {x: track(t, mKeys.map(([a, x]) => [a, x] as [number, number]), smooth), y: track(t, mKeys.map(([a, , y]) => [a, y] as [number, number]), smooth), a: seg(t, 78.9, 79.4) * (1 - seg(t, 83.0, 83.5))};
  const press = seg(t, 81.9, 81.98) * (1 - seg(t, 82.0, 82.3));
  const approved = seg(t, 82.0, 82.3);

  const gone = MODULE_GRID.map((m, i) => {
    if (KEEP.includes(m)) return 0;
    const j = MODULE_GRID.filter((x, k) => !KEEP.includes(x) && k < i).length;
    return seg(t, 61.0 + j * 0.28, 61.4 + j * 0.28, smooth);
  });
  const toTab = seg(t, 64.8, 66.4, smooth);

  /* business and software linked one to one */
  const tabC = (i: number): Pt => ({x: pLeft + PS * (TAB_X[i] + TAB_W[i] / 2), y: pTop + PS * (70 + 17)});
  const links: [number, Id][] = [[0, 'ledger'], [1, 'sheet'], [2, 'sticky'], [3, 'po']];
  const linkP = (i: number) => seg(t, 67.2 + i * 0.7, 68.0 + i * 0.7, smooth) * (1 - seg(t, 71.4, 72.4, smooth));

  /* pricing pills */
  const pr1 = [72.2, 72.5, 72.8].map((a) => seg(t, a, a + 0.5, glide) * (1 - seg(t, 74.4, 75.0, smooth)));
  const pr2 = [74.8, 75.2, 75.6].map((a) => seg(t, a, a + 0.5, glide) * (1 - seg(t, 76.6, 77.2, smooth)));

  /* rigid software comes for the business, fails, disappears */
  const ergA = seg(t, 85.0, 86.0) * (1 - seg(t, 88.6, 89.8, smooth));
  const ergS = lerp(1.9, 1.12, seg(t, 85.0, 88.2, smooth));

  /* software built around the same workflow */
  const cardP = (i: number) => seg(t, 100.8 + i * 0.35, 101.6 + i * 0.35, glide);
  const cardAct = (i: number) => seg(t, 102.6 + i * 0.45, 103.1 + i * 0.45);
  const cardsOut = 1 - seg(t, 105.6, 106.6, smooth);

  /* bloom and end card */
  const bloom = seg(t, 106.0, 107.2, smooth);
  const endP = seg(t, 107.0, 108.6, glide);
  const endT = seg(t, 108.0, 109.4, glide);
  const showExtra = (e: Extra) => seg(t, e.at, e.at + 0.9, glide) * (1 - seg(t, 22.0, 23.4, smooth));

  return (
    <AbsoluteFill style={{background: `radial-gradient(ellipse 70% 60% at 50% 56%, ${DK.alt}, ${DK.base} 78%)`, overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none'}}>
        <TopStatement lines={['Your way', 'of working.']} x={96} y={84} inP={seg(t, 8.2, 9.0, glide)} outP={seg(t, 9.8, 10.4, smooth)} />
        <TopStatement lines={['Pre-built software.', 'Pre-built workflow.']} x={pLeft} y={78} inP={seg(t, 23.4, 24.2, glide)} outP={seg(t, 31.4, 32.2, smooth)} />
      </div>

      <div style={{position: "absolute", inset: 0, transform: `scale(${1 + 0.09 * seg(t, 0, 106, lin)}) translate(${-24 * seg(t, 0, 106, lin)}px, 0px)`}}>

      {/* connectors sit under the props */}
      <svg width={W} height={H} style={{position: 'absolute', inset: 0, zIndex: 1}}>
        {chainOn > 0.01 && spine.slice(0, 4).map((id, k) => <Line key={id} a={sp[id]} b={sp[spine[k + 1]]} p={lineP(k)} color="rgba(244,247,251,0.55)" w={2.5} alpha={Math.min(1, chainOn)} />)}
        {t >= 14 && t < 23.8 &&
          EXTRAS.map((e) => <Line key={e.id} a={sp[e.near]} b={toScreen(e.x, e.y)} p={seg(t, e.at + 0.3, e.at + 1.1, smooth)} color="rgba(244,247,251,0.32)" w={2} alpha={1 - seg(t, 22.0, 23.4, smooth)} dash="2 8" />)}
        {t >= 10.6 && t < 13.8 &&
          [...MBL.map((l) => [MB, l] as const), ...MCL.map((l) => [MC, l] as const)].map(([set, l], i) => {
            const a = set.find((n) => n.id === l[0])!;
            const b = set.find((n) => n.id === l[1])!;
            const at = Math.max(a.at, b.at);
            return <Line key={i} a={toScreen(a.x, a.y)} b={toScreen(b.x, b.y)} p={seg(t, at, at + 0.6, smooth)} color="rgba(244,247,251,0.5)" w={2.5} alpha={1 - seg(t, 12.6, 13.6, smooth)} />;
          })}
        {t >= 67 && t < 72.6 && links.map(([ti, id]) => <Line key={id} a={tabC(ti)} b={sp[id]} p={linkP(ti)} color={UI.acc} w={3} />)}
        {t >= 100.6 && t < 106.8 &&
          spine.map((id, i) => (
            <Line key={id} a={{x: sp[id].x, y: sp[id].y + (SZ[id][1] * poses[id].s * gs) / 2}} b={{x: sp[id].x, y: 668}} p={seg(t, 101.4 + i * 0.35, 102.2 + i * 0.35, smooth)} color={UI.acc} w={3} alpha={cardsOut} />
          ))}
      </svg>

      {/* extras: the years */}
      {t >= 14.9 && t < 23.8 &&
        EXTRAS.map((e) => {
          const a = showExtra(e);
          if (a < 0.01) return null;
          const p = toScreen(e.x, e.y);
          return (
            <div key={e.id} style={{position: 'absolute', left: p.x, top: p.y, transform: `translate(-50%,-50%) rotate(${e.r}deg) scale(${e.s * gs * lerp(1.06, 1, a)})`, opacity: a, filter: `blur(${(1 - a) * 12}px)`, zIndex: 2}}>{e.node}</div>
          );
        })}

      {/* the other two businesses */}
      {t >= 10.7 && t < 13.8 &&
        [...MB, ...MC].map((n) => {
          const a = seg(t, n.at, n.at + 0.7, glide) * (1 - seg(t, 12.6, 13.6, smooth));
          const p = toScreen(n.x, n.y);
          return (
            <div key={n.id} style={{position: 'absolute', left: p.x, top: p.y, transform: `translate(-50%,-50%) scale(${0.8 * gs})`, opacity: a, zIndex: 2}}>
              <Mini kind={n.kind} />
            </div>
          );
        })}

      {/* the business props */}
      {IDS.map((id) => {
        const q = poses[id];
        const p = sp[id];
        const inTile = TILE_AT[id] !== undefined && t >= 24.8 && t < 33.0;
        return (
          <div
            key={id}
            style={{
              position: 'absolute',
              left: p.x,
              top: p.y,
              transform: `translate(-50%,-50%) rotate(${q.r}deg) scale(${q.s * gs})`,
              opacity: q.o,
              filter: q.b > 0.3 ? `blur(${q.b}px) brightness(${1 - q.b * 0.012})` : undefined,
              zIndex: inTile ? 8 : 2,
            }}
          >
            {nodeFor(id)}
          </div>
        );
      })}

      {/* linked props get an accent outline, one at a time */}
      {t >= 67 && t < 72.6 &&
        links.map(([ti, id]) => {
          const a = linkP(ti);
          if (a < 0.02) return null;
          const q = poses[id];
          return <div key={id} style={{position: 'absolute', left: sp[id].x, top: sp[id].y, width: SZ[id][0] * q.s * 1.08, height: SZ[id][1] * q.s * 1.08, transform: `translate(-50%,-50%) rotate(${q.r}deg)`, border: `3px solid ${UI.acc}`, borderRadius: 14, opacity: a, zIndex: 3}} />;
        })}

      {/* tags and the travelling dot (state: the workflow is moving) */}
      <div style={{position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none'}}>
        {tagA > 0.01 && spine.map((id, i) => <Tag key={id} x={sp[id].x} y={sp[id].y + (SZ[id][1] * poses[id].s * gs) / 2 + 30} a={tagA}>{TAGS[i]}</Tag>)}
      </div>
      <svg width={W} height={H} style={{position: 'absolute', inset: 0, zIndex: 4}}>
        {[d1, d2, d3].map((d, i) => (d.v ? <circle key={i} cx={d.x} cy={d.y} r={9} fill={UI.acc} /> : null))}
      </svg>

      {/* the one surface */}
      {pp.a > 0.01 && (
        <div style={{position: 'absolute', left: pp.x, top: pp.y, width: PANEL.w, height: PANEL.h, transform: `translate(-50%,-50%) perspective(1800px) rotateX(${pp.rx}deg) scale(${PS * pp.s})`, opacity: pp.a, zIndex: 5}}>
          {erpA > 0.01 && (
            <div style={{position: 'absolute', inset: 0, opacity: erpA}}>
              <ErpPanel step={erpStep} />
            </div>
          )}
          {verA > 0.01 && (
            <div style={{position: 'absolute', inset: 0, opacity: verA}}>
              <VerityFrame status={status} live={live}>
                {blankA > 0.01 && (
                  <div style={{position: 'absolute', inset: 0, opacity: blankA}}>
                    <Blank t={t} />
                  </div>
                )}
                {t >= 41.5 && t < 53.8 && (
                  <div style={{position: 'absolute', inset: 0, opacity: discA}}>
                    <Discovery rows={rows} sel={sel} flow={seg(t, 44.6, 46.2)} merge={seg(t, 49.4, 50.2)} bottleneck={seg(t, 47.0, 47.6)} done={seg(t, 49.2, 49.8)} />
                  </div>
                )}
                {wordsA > 0.01 && (
                  <div style={{position: 'absolute', inset: 0, opacity: wordsA}}>
                    <Words tabs={seg(t, 53.6, 54.4)} list={[0, 1, 2, 3, 4].map((i) => seg(t, 54.2 + i * 0.4, 54.8 + i * 0.4))} card={seg(t, 56.4, 57.2, glide)} steps={[0, 1, 2, 3].map((i) => seg(t, 57.2 + i * 0.45, 57.6 + i * 0.45))} />
                  </div>
                )}
                {modsA > 0.01 && (
                  <div style={{position: 'absolute', inset: 0, opacity: modsA}}>
                    <Modules lab={seg(t, 59.2, 59.8)} chips={seg(t, 59.2, 60.0)} gone={gone} toTab={toTab} />
                  </div>
                )}
                {propA > 0.01 && (
                  <div style={{position: 'absolute', inset: 0, opacity: propA}}>
                    <Proposal items={[0, 1, 2].map((i) => seg(t, 77.8 + i * 0.35, 78.4 + i * 0.35))} approved={approved} press={press} />
                  </div>
                )}
              </VerityFrame>
            </div>
          )}
        </div>
      )}

      {/* rigid software returns around the business, fails, disappears */}
      {ergA > 0.01 && (
        <div style={{position: 'absolute', left: 640, top: 540, width: PANEL.w, height: PANEL.h, transform: `translate(-50%,-50%) scale(${ergS})`, opacity: ergA * 0.42, zIndex: 9}}>
          <ErpPanel step={-1} />
        </div>
      )}

      {/* pricing */}
      <div style={{position: 'absolute', inset: 0, zIndex: 7, pointerEvents: 'none'}}>
        <PricePill y={430} a={pr1[0]} text="Software fee" />
        <PricePill y={504} a={pr1[1]} text="Implementation" plus />
        <PricePill y={578} a={pr1[2]} text="Features you don't need" plus />
        <PricePill y={430} a={pr2[0]} text="Your business analysis" n="01" />
        <PricePill y={504} a={pr2[1]} text="Your requirements" n="02" />
        <PricePill y={578} a={pr2[2]} text="Your Verity" n="03" mark />
      </div>

      {/* software built around the workflow: one card per step */}
      {t >= 100.6 && t < 106.9 && (
        <div style={{position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none'}}>
          <div style={{position: 'absolute', left: sp.sticky.x - 115, top: 566, fontFamily: SANS, fontSize: 16, fontWeight: 600, letterSpacing: '0.22em', color: DK.mute, opacity: cardP(0) * cardsOut}}>VERITY / WORKSPACE</div>
          <div style={{position: 'absolute', left: sp.sheet.x + 115 - 80, top: 566, width: 80, textAlign: 'right', fontFamily: SANS, fontSize: 16, fontWeight: 600, letterSpacing: '0.22em', color: UI.acc, opacity: seg(t, 102.4, 103, smooth) * cardsOut}}>• LIVE</div>
          {spine.map((id, i) => (
            <div key={id} style={{position: 'absolute', left: sp[id].x, top: 770, transform: 'translate(-50%,-50%)', opacity: cardsOut}}>
              <LiveCard n={`0${i + 1}`} title={STEP_CARDS[i][0]} sub={STEP_CARDS[i][1]} p={cardP(i)} active={cardAct(i)} />
            </div>
          ))}
        </div>
      )}

      {/* cursor and tooltips */}
      <div style={{position: 'absolute', inset: 0, zIndex: 12, pointerEvents: 'none'}}>
        {curH.a > 0.01 && (
          <>
            <Cursor x={curH.x} y={curH.y} press={0} alpha={curH.a} />
            <Pill x={curH.x + 34} y={curH.y + 40} a={curH.a}>Verity PM</Pill>
            <Pill x={curH.x + 54} y={curH.y - 26} a={curH.a * win(t, 44.4, 49.2, 0.4, 0.5)} dark>Domain expert</Pill>
          </>
        )}
        {curM.a > 0.01 && (
          <>
            <Cursor x={curM.x} y={curM.y} press={press} alpha={curM.a} />
            <Pill x={curM.x + 40} y={curM.y + 44} a={curM.a} dark>Business owner</Pill>
          </>
        )}
      </div>

      </div>
      {t < 107.4 && <Grade t={t} vignette={0.5} />}

      {/* bloom to the light end card */}
      <AbsoluteFill style={{background: 'radial-gradient(ellipse 80% 70% at 50% 50%, #ffffff 0%, #f4f6fa 60%, #eef1f6 100%)', opacity: bloom, zIndex: 20}} />
      {bloom > 0.5 && (
        <AbsoluteFill style={{zIndex: 21, display: 'grid', placeItems: 'center'}}>
          <div style={{textAlign: 'center', fontFamily: SANS, color: UI.ink}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26, opacity: endP, filter: `blur(${(1 - endP) * 14}px)`, transform: `translateY(${(1 - endP) * 14}px)`}}>
              <GlassTile size={104} />
              <div style={{fontSize: 98, fontWeight: 600, letterSpacing: '-0.04em', color: '#4b4f57'}}>verity</div>
            </div>
            <div style={{marginTop: 54, fontSize: 56, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.12, opacity: endT, transform: `translateY(${(1 - endT) * 16}px)`}}>
              <div style={{color: UI.ink}}>Run your business</div>
              <div style={{color: '#8a909b'}}>in your way.</div>
            </div>
            <div style={{marginTop: 30, fontSize: 21, color: '#8a909b', opacity: endT}}>Enterprise operations, built around how you work.</div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
