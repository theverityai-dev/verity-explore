import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {lerp, seg, track} from '../../shared/timeline';
import {Mark} from '../../trailer/ui';
import {fontFamily} from '../engine';
import {DESK_SFX, DeskScene, NodeId, deskScreen} from './Desk';
import {AFPS, AH, ASECONDS, AW, C, Chapter, M, Micro, Statement, appear, glide, mixc, rgba, smooth} from './tokens';

/**
 * VERITY: "The business comes first. The software adapts around it." 73s, 9:8, dark cinematic.
 *
 * One object carries the film: the business's own workflow graph. It is born from the desk (props collapse into its
 * nodes), grows over years, is crushed by a rigid generic suite, is understood and mapped, and finally Verity's
 * modules wrap around it without moving a single node. Its layout (L0) is identical at 0:09 and at 1:00, which is the
 * callback the brief asks for. Timings follow the voiceover's timestamps.
 *
 * Grid: safe margin 90. Chapter markers top-left; statements on the bottom-left baseline (y 870); the workflow
 * occupies the right of frame (x 440-920), leaving the left column for words and callouts.
 */
export const BRAND_DURATION = ASECONDS * AFPS;

type P = [number, number];
const IDS: NodeId[] = ['request', 'review', 'approve', 'more', 'quote', 'order', 'exec'];
/** The business's workflow, as it really is. Never moved by Verity. */
const L0: Record<NodeId, P> = {request: [650, 226], review: [650, 348], approve: [440, 452], more: [800, 452], quote: [520, 588], order: [650, 690], exec: [650, 792]};
const LABEL: Record<NodeId, string> = {request: 'REQUEST', review: 'REVIEW', approve: 'APPROVE', more: 'MORE INFO', quote: 'QUOTATION', order: 'ORDER', exec: 'EXECUTION'};
const SHORT: Record<NodeId, string> = {request: 'REQUES…', review: 'REVIEW', approve: 'APPR…', more: 'MORE INFO', quote: 'QUOTAT…', order: 'ORDER', exec: 'EXECUT…'};
type Edge = {a: NodeId; b: NodeId; loop?: boolean};
const EDGES: Edge[] = [
  {a: 'request', b: 'review'},
  {a: 'review', b: 'approve'},
  {a: 'review', b: 'more'},
  {a: 'more', b: 'review', loop: true},
  {a: 'approve', b: 'quote'},
  {a: 'quote', b: 'order'},
  {a: 'order', b: 'exec'},
];
/** request > review > approve > quote > order > exec */
const MAIN = [0, 1, 4, 5, 6];

const curve = (a: P, b: P, loop?: boolean) =>
  loop
    ? `M${a[0]} ${a[1]} C${a[0] + 80} ${a[1] - 30} ${b[0] + 120} ${b[1] + 20} ${b[0] + 12} ${b[1] + 4}`
    : `M${a[0]} ${a[1]} C${a[0]} ${a[1] + (b[1] - a[1]) * 0.55} ${b[0]} ${b[1] - (b[1] - a[1]) * 0.55} ${b[0]} ${b[1]}`;
const soft = (a: P, b: P) => {
  const mx = a[0] + (b[0] - a[0]) * 0.5;
  return `M${a[0]} ${a[1]} C${mx} ${a[1]} ${mx} ${b[1]} ${b[0]} ${b[1]}`;
};

/** A stroke that draws from 0 to 1. */
const Stroke: React.FC<{d: string; p: number; color: string; w?: number}> = ({d, p, color, w = 1.5}) =>
  p <= 0.001 ? null : <path d={d} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - p} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" />;

/* ---------------------------------------------------------------------------------------------------------------
   Graph state over time
   ------------------------------------------------------------------------------------------------------------- */
/** Forced positions inside the generic suite (S12). More info has no box: it is pushed out of frame. */
const F: Record<NodeId, P> = {request: [200, 300], review: [330, 300], quote: [460, 300], approve: [470, 556], order: [700, 300], exec: [830, 300], more: [1060, 452]};

const nodePos = (t: number, id: NodeId): P => {
  if (t < 9.4) {
    const e = seg(t, 8.15, 9.3, smooth);
    const d = deskScreen(id);
    return [lerp(d[0], L0[id][0], e), lerp(d[1], L0[id][1], e)];
  }
  if (t < 25.3) {
    const e = seg(t, 19.4, 21.0, smooth);
    return [lerp(L0[id][0], F[id][0], e), lerp(L0[id][1], F[id][1], e)];
  }
  return L0[id];
};
const graphO = (t: number) =>
  track(t, [[7.8, 0], [8.3, 1], [24.9, 1], [25.4, 0], [29.0, 0], [29.9, 1], [41.3, 1], [41.9, 0.14], [44.6, 0.14], [45.4, 1], [49.0, 1], [49.6, 0], [52.9, 0], [53.6, 1], [73, 1]]);

/** Accent pulse along the main path. */
const pulseP = (t: number): number | null => {
  for (const [a, b] of [[10.0, 11.4], [47.2, 48.8], [62.4, 63.9]] as P[]) if (t >= a && t <= b) return seg(t, a, b, smooth);
  if (t >= 70.2) return ((t - 70.2) % 2.6) / 2.2 <= 1 ? ((t - 70.2) % 2.6) / 2.2 : null;
  return null;
};

/* Years: the system that grows around the core. */
type Sec = {label: string; p: P; links: [string | NodeId, string | NodeId][]; wave: number; left?: boolean};
const SEC: Record<string, Sec> = {
  site: {label: 'SITE VISIT', p: [880, 300], links: [['review', 'site']], wave: 0},
  vendor: {label: 'VENDOR RATES', p: [380, 650], links: [['vendor', 'quote']], wave: 0, left: true},
  partner: {label: 'PARTNER SIGN-OFF', p: [330, 520], links: [['approve', 'partner'], ['partner', 'quote']], wave: 1, left: true},
  accounts: {label: 'ACCOUNTS', p: [310, 400], links: [['approve', 'accounts']], wave: 1, left: true},
  revision: {label: 'REVISION', p: [860, 570], links: [['more', 'revision'], ['revision', 'quote']], wave: 1},
  advance: {label: 'ADVANCE', p: [860, 660], links: [['order', 'advance']], wave: 2},
  dispatch: {label: 'DISPATCH', p: [840, 800], links: [['exec', 'dispatch']], wave: 2},
  invoice: {label: 'INVOICE', p: [470, 850], links: [['exec', 'invoice']], wave: 2, left: true},
};
const WAVE = [12.6, 14.2, 15.8];
const ptOf = (k: string): P => (k in L0 ? L0[k as NodeId] : SEC[k].p);

/* S15 lenses. */
type Lens = {label: string[]; data: string; nodes: NodeId[]; ring: {c?: P; r?: number; x?: number; y?: number; w?: number; h?: number}; call: {x: number; y: number; top?: boolean}; leader: [P, P]};
const LENS: Lens[] = [
  {label: ['How you work'], data: '7 steps · 3 hand-offs', nodes: IDS, ring: {c: [650, 226], r: 24}, call: {x: M, y: 226}, leader: [[340, 226], [626, 226]]},
  {label: ['Where decisions', 'happen'], data: 'Review · Approval', nodes: ['review', 'approve'], ring: {c: [650, 348], r: 24}, call: {x: M, y: 348}, leader: [[340, 348], [626, 348]]},
  {label: ['What can', 'improve'], data: 'More-info loop · 2 rounds', nodes: ['more', 'review'], ring: {x: 684, y: 362, w: 256, h: 122}, call: {x: 700, y: 524, top: true}, leader: [[760, 516], [760, 484]]},
  {label: ['What you', 'actually need'], data: 'Requests · Approval · Orders', nodes: ['quote', 'order', 'exec'], ring: {x: 622, y: 662, w: 178, h: 158}, call: {x: M, y: 741}, leader: [[340, 741], [622, 741]]},
];
const L_AT = [31.3, 32.9, 34.5, 36.1];
const activeLens = (t: number) => {
  if (t < L_AT[0] || t > 37.4) return -1;
  let a = 0;
  for (let i = 0; i < 4; i++) if (t >= L_AT[i]) a = i;
  return a;
};

/* ---------------------------------------------------------------------------------------------------------------
   The graph
   ------------------------------------------------------------------------------------------------------------- */
const Graph: React.FC<{t: number}> = ({t}) => {
  const o = graphO(t);
  if (o < 0.003) return null;
  const cold = t < 25.3 ? track(t, [[19.4, 0], [20.4, 1]]) : 0;
  const ui = track(t, [[60.8, 0], [61.6, 1]]);
  const dk = Math.max(0, 1 - cold - ui);
  const desat = t > 52.5 && t < 56 ? track(t, [[52.8, 1], [54.4, 1], [55.4, 0]]) : 0;
  const lit = track(t, [[54.5, 0], [55.5, 1], [56.4, 1], [57.0, 0]]);
  const lineCol = mixc([[C.txt, dk], [C.coldInk, cold], [C.uiInk, ui]], (0.3 * dk + 0.6 * cold + 0.3 * ui) * (1 - 0.55 * desat));
  const ringCol = mixc([[C.txt, dk], [C.coldInk, cold], [C.uiInk, ui]], 0.92 * (1 - 0.5 * desat));
  const fillCol = mixc([[C.bg, dk], [C.cold, cold], ['#FFFFFF', ui]]);
  const labCol = mixc([[C.txt2, dk], [C.coldInk, cold], [C.uiMuted, ui]], 1 - 0.45 * desat);
  const pos = Object.fromEntries(IDS.map((id) => [id, nodePos(t, id)])) as Record<NodeId, P>;
  const curveO = t < 25.3 ? 1 - seg(t, 19.6, 20.4, smooth) : 1;
  const labO = t < 9.8 ? seg(t, 9.0, 9.8, glide) : 1;
  const zoom = t < 19.5 ? track(t, [[11.2, 1], [16.2, 0.9], [18.3, 0.9], [19.3, 1]]) : 1;
  const lens = activeLens(t);
  const pp = pulseP(t);
  const secO = t > 11 && t < 19.6 ? 1 - seg(t, 18.6, 19.4, smooth) : 0;
  const docs = 1 + (seg(t, WAVE[0], WAVE[0] + 0.6) > 0.5 ? 1 : 0) + (seg(t, WAVE[1], WAVE[1] + 0.6) > 0.5 ? 1 : 0);

  return (
    <g opacity={o} transform={`translate(650 509) scale(${zoom}) translate(-650 -509)`}>
      {secO > 0.01
        ? Object.entries(SEC).map(([k, s]) => {
            const p = seg(t, WAVE[s.wave], WAVE[s.wave] + 0.9, glide);
            if (p < 0.01) return null;
            return (
              <g key={k} opacity={secO}>
                {s.links.map(([a, b], j) => (
                  <Stroke key={j} d={soft(ptOf(a), ptOf(b))} p={p} color={rgba(C.txt, 0.16)} w={1} />
                ))}
                <circle cx={s.p[0]} cy={s.p[1]} r={5.5} fill={C.bg} stroke={rgba(C.txt2, 0.75)} strokeWidth={1.3} opacity={p} />
                <text x={s.left ? s.p[0] - 14 : s.p[0] + 14} y={s.p[1] + 4.5} textAnchor={s.left ? 'end' : 'start'} fontSize={13} fontWeight={500} letterSpacing="0.14em" fill={rgba(C.txt2, 0.7)} opacity={p}>
                  {s.label}
                </text>
              </g>
            );
          })
        : null}
      {secO > 0.01
        ? Array.from({length: docs}).map((_, i) => (
            <rect key={i} x={L0.quote[0] - 40 - i * 4} y={L0.quote[1] - 13 - i * 4} width={14} height={18} rx={1.5} fill={C.bg} stroke={rgba(C.txt2, 0.6)} strokeWidth={1} opacity={secO} />
          ))
        : null}
      {EDGES.map((e, i) => {
        const p = t < 25.3 ? seg(t, 9.0 + 0.28 * i, 9.6 + 0.28 * i, smooth) : 1;
        const d = curve(pos[e.a], pos[e.b], e.loop);
        const dim = lens >= 0 && !(LENS[lens].nodes.includes(e.a) && LENS[lens].nodes.includes(e.b)) ? 0.45 : 1;
        return (
          <g key={i} opacity={curveO * dim}>
            <Stroke d={d} p={p} color={lineCol} />
            {lit > 0.01 ? <Stroke d={d} p={1} color={rgba(C.acc, 0.85 * lit)} w={1.8} /> : null}
          </g>
        );
      })}
      {pp !== null
        ? MAIN.map((ei, k) => {
            const u = pp * MAIN.length - k;
            if (u <= 0 || u >= 1) return null;
            const e = EDGES[ei];
            const d = curve(pos[e.a], pos[e.b]);
            return (
              <g key={ei}>
                <path d={d} pathLength={1} strokeDasharray="0.18 2" strokeDashoffset={0.18 - u * 1.18} fill="none" stroke={rgba(C.acc, 0.22)} strokeWidth={6} strokeLinecap="round" />
                <path d={d} pathLength={1} strokeDasharray="0.18 2" strokeDashoffset={0.18 - u * 1.18} fill="none" stroke={C.acc} strokeWidth={2} strokeLinecap="round" />
              </g>
            );
          })
        : null}
      {IDS.map((id) => {
        const [x, y] = pos[id];
        let em = 1;
        if (lens >= 0 && !LENS[lens].nodes.includes(id)) em = 0.4;
        if (id === 'more' && t < 25.3) em *= 1 - seg(t, 20.0, 20.8, smooth);
        const on = lit > 0.5 || (t > 70 && id === 'request');
        return (
          <g key={id} transform={`translate(${x} ${y})`} opacity={em}>
            <circle r={8} fill={fillCol} stroke={on ? C.acc : ringCol} strokeWidth={1.6} />
            {on ? <circle r={3} fill={C.acc} /> : null}
            <text x={18} y={5} fontSize={15} fontWeight={500} letterSpacing="0.14em" fill={labCol} opacity={labO}>
              {cold > 0.5 ? SHORT[id] : LABEL[id]}
            </text>
          </g>
        );
      })}
    </g>
  );
};

/* S12: what the generic suite does to the workflow. Lines rerouted along its grid; some stop dead. */
const along = (pts: P[], f: number) => {
  const segs = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  const total = segs.reduce((a, b) => a + b, 0);
  let left = f * total;
  const out: P[] = [pts[0]];
  for (let i = 0; i < segs.length; i++) {
    if (left >= segs[i]) {
      out.push(pts[i + 1]);
      left -= segs[i];
    } else {
      const k = left / segs[i];
      out.push([lerp(pts[i][0], pts[i + 1][0], k), lerp(pts[i][1], pts[i + 1][1], k)]);
      const dir: P = [(pts[i + 1][0] - pts[i][0]) / segs[i], (pts[i + 1][1] - pts[i][1]) / segs[i]];
      return {out, end: out[out.length - 1], dir};
    }
  }
  const n = pts.length;
  return {out, end: pts[n - 1], dir: [0, 0] as P};
};
const ROUTES: {pts: P[]; cap: number; at: number}[] = [
  {pts: [[200, 300], [330, 300]], cap: 1, at: 20.3},
  {pts: [[330, 300], [330, 252], [1000, 252]], cap: 0.28, at: 20.5},
  {pts: [[330, 300], [330, 470], [470, 470], [470, 540]], cap: 0.62, at: 20.6},
  {pts: [[460, 300], [700, 300]], cap: 1, at: 20.9},
  {pts: [[470, 556], [470, 500], [600, 500], [600, 330]], cap: 0.35, at: 21.0},
  {pts: [[700, 300], [830, 300]], cap: 1, at: 21.2},
];
const Forced: React.FC<{t: number}> = ({t}) => {
  if (t < 20.2 || t > 25.5) return null;
  const o = seg(t, 20.2, 20.8) * (1 - seg(t, 24.95, 25.35));
  return (
    <g opacity={o}>
      {ROUTES.map((r, i) => {
        const f = Math.min(r.cap, seg(t, r.at, r.at + 0.8, smooth) * r.cap);
        if (f <= 0.001) return null;
        const a = along(r.pts, f);
        const d = a.out.map((p, k) => `${k ? 'L' : 'M'}${p[0]} ${p[1]}`).join(' ');
        const stopped = r.cap < 1 && f >= r.cap - 0.001;
        const n: P = [-a.dir[1], a.dir[0]];
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={rgba(C.coldInk, 0.6)} strokeWidth={1.5} strokeLinejoin="miter" />
            {stopped ? <line x1={a.end[0] - n[0] * 7} y1={a.end[1] - n[1] * 7} x2={a.end[0] + n[0] * 7} y2={a.end[1] + n[1] * 7} stroke={rgba(C.coldInk, 0.9)} strokeWidth={2} /> : null}
          </g>
        );
      })}
    </g>
  );
};

/* ---------------------------------------------------------------------------------------------------------------
   Windows and modules
   ------------------------------------------------------------------------------------------------------------- */
const Bars: React.FC<{c: string; ws?: string[]}> = ({c, ws = ['100%', '72%']}) => (
  <div style={{display: 'grid', gap: 8}}>
    {ws.map((w) => (
      <div key={w} style={{height: 7, width: w, borderRadius: 4, background: c}} />
    ))}
  </div>
);

/** S12: a rigid, generic, colder suite. */
const GenericSuite: React.FC<{t: number}> = ({t}) => {
  if (t < 18.2 || t > 25.5) return null;
  const p = seg(t, 18.3, 19.3, glide);
  const o = p * (1 - seg(t, 24.95, 25.35));
  const wrong = seg(t, 21.6, 22.4, smooth);
  const tiles: {name: string; x: number; y: number; w: number; h: number; empty?: boolean}[] = [
    {name: 'SALES', x: 140, y: 230, w: 472, h: lerp(290, 236, wrong)},
    {name: 'INVENTORY', x: 628, y: 230, w: lerp(312, 250, wrong), h: 290},
    {name: 'CRM', x: 140, y: 536, w: 256, h: 294, empty: true},
    {name: 'FINANCE', x: 412, y: 536, w: 256, h: 294},
    {name: 'REPORTS', x: 684, y: 536, w: 256, h: 294, empty: true},
  ];
  return (
    <div style={{position: 'absolute', left: 120, top: 170, width: 840, height: 680, opacity: o, transform: `scale(${lerp(1.03, 1, p)})`, borderRadius: 6, background: '#C9CDD2', boxShadow: '0 40px 100px rgba(0,0,0,0.6)', overflow: 'hidden'}}>
      <div style={{height: 40, display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px', background: '#B9BEC5'}}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{width: 10, height: 10, background: '#8E949C'}} />
        ))}
        <div style={{marginLeft: 10, fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', color: C.coldInk}}>MODULES</div>
      </div>
      {tiles.map((tl) => (
        <div key={tl.name} style={{position: 'absolute', left: tl.x - 120, top: tl.y - 170, width: tl.w, height: tl.h, background: C.cold, border: `1.5px solid ${C.coldLine}`, boxSizing: 'border-box', overflow: 'hidden'}}>
          <div style={{height: 40, background: '#CDD1D6', borderBottom: `1.5px solid ${C.coldLine}`, display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: 14, fontWeight: 600, letterSpacing: '0.16em', color: C.coldInk}}>{tl.name}</div>
          {tl.empty ? <div style={{position: 'absolute', left: 14, bottom: 14, fontSize: 12, letterSpacing: '0.12em', color: rgba(C.coldInk, 0.55)}}>NO DATA</div> : null}
        </div>
      ))}
    </div>
  );
};
/** The FINANCE header, drawn over the graph: the approval step is buried under the suite's template. */
const FinanceLid: React.FC<{t: number}> = ({t}) => {
  if (t < 20.5 || t > 25.5) return null;
  const o = seg(t, 20.6, 21.2) * (1 - seg(t, 24.95, 25.35));
  return <div style={{position: 'absolute', left: 413.5, top: 537.5, width: 253, height: 40, background: '#CDD1D6', borderBottom: `1.5px solid ${C.coldLine}`, display: 'flex', alignItems: 'center', padding: '0 14px', boxSizing: 'border-box', fontSize: 14, fontWeight: 600, letterSpacing: '0.16em', color: C.coldInk, opacity: o}}>FINANCE</div>;
};

/** S14: an empty software interface, then closed on purpose. */
const EmptyApp: React.FC<{t: number}> = ({t}) => {
  if (t < 27.7 || t > 29.4) return null;
  const p = seg(t, 27.8, 28.4, glide);
  const q = seg(t, 28.75, 29.2, smooth);
  return (
    <div style={{position: 'absolute', left: 260, top: 290, width: 560, height: 380, borderRadius: 16, background: C.uiw, boxShadow: '0 40px 90px rgba(0,0,0,0.6)', overflow: 'hidden', opacity: Math.min(1, p * 1.3) * (1 - q), transform: `scale(${lerp(0.97, 1, p) * lerp(1, 0.92, q)})`, filter: q > 0.02 ? `blur(${3 * q}px)` : undefined}}>
      <div style={{height: 40, display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', borderBottom: `1px solid ${C.uiLine}`}}>
        <Mark height={14} color={C.uiInk} />
        <Micro style={{color: C.uiInk, fontSize: 12}}>Verity</Micro>
      </div>
      <div style={{position: 'absolute', left: 0, top: 40, bottom: 0, width: 130, borderRight: `1px solid ${C.uiLine}`, padding: 16, boxSizing: 'border-box'}}>
        <Bars c={rgba(C.uiInk, 0.08)} ws={['80%', '60%', '70%', '50%']} />
      </div>
      <div style={{position: 'absolute', left: 150, top: 60, right: 20, bottom: 20, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12}}>
        {Array.from({length: 6}).map((_, i) => (
          <div key={i} style={{borderRadius: 10, border: `1.5px dashed ${rgba(C.uiInk, 0.12)}`}} />
        ))}
      </div>
    </div>
  );
};

/* Verity modules: one identity each, travelling card > grid slot > 2x2 > wrapped around the workflow. */
type R = [number, number, number, number];
type Mod = {title: string; sub: string; count: string; cy: number; slot: [number, number]; two: [number, number]; wrap: R};
const MODS: Mod[] = [
  {title: 'Requests', sub: '12 open', count: '12', cy: 226, slot: [1, 0], two: [0, 0], wrap: [400, 172, 570, 104]},
  {title: 'Review Queue', sub: '4 in review', count: '4', cy: 348, slot: [3, 1], two: [1, 0], wrap: [610, 292, 360, 208]},
  {title: 'Approval', sub: '2 awaiting sign-off', count: '2', cy: 452, slot: [0, 2], two: [0, 1], wrap: [400, 392, 194, 108]},
  {title: 'Orders', sub: '9 this week', count: '9', cy: 690, slot: [2, 3], two: [1, 1], wrap: [400, 516, 570, 330]},
];
const slotR = (c: number, r: number): R => [174 + 186 * c, 204 + 136 * r, 174, 124];
const twoR = (c: number, r: number): R => [174 + 372 * c, 204 + 272 * r, 360, 260];
const lr = (a: R, b: R, e: number): R => [lerp(a[0], b[0], e), lerp(a[1], b[1], e), lerp(a[2], b[2], e), lerp(a[3], b[3], e)];
const modRect = (m: Mod, t: number): R => {
  const card: R = [M, m.cy - 37, 280, 74];
  const slot = slotR(...m.slot);
  const two = twoR(...m.two);
  if (t < 41.3) return card;
  if (t < 42.1) return lr(card, slot, seg(t, 41.3, 42.1, smooth));
  if (t < 43.3) return slot;
  if (t < 44.1) return lr(slot, two, seg(t, 43.3, 44.1, smooth));
  if (t < 45.0) return two;
  return lr(two, m.wrap, seg(t, 45.0, 46.8, smooth));
};

const Module: React.FC<{m: Mod; i: number; t: number}> = ({m, i, t}) => {
  const o = track(t, [[38.5 + 0.35 * i, 0], [39.2 + 0.35 * i, 1], [49.0, 1], [49.6, 0], [52.9, 0], [53.6, 1], [56.2, 1], [56.8, 0], [65.1 + 0.2 * i, 0], [65.9 + 0.2 * i, 1], [73, 1]]);
  if (o < 0.003) return null;
  const [x, y, w, h] = modRect(m, t);
  const mat = seg(t, 45.0, 46.8, smooth);
  const u = seg(t, 64.9, 65.6, smooth);
  const s = 1 - mat;
  const g = mat * (1 - u);
  const dash = t > 52.8 && t < 55.2 ? 1 - seg(t, 54.4, 55.0) : 0;
  const live = t > 64 ? seg(t, 65.9 + 0.2 * i, 66.4 + 0.2 * i) : t > 54 && t < 57 ? seg(t, 54.5 + 0.15 * i, 55.0 + 0.15 * i) : 0;
  const bg = s > 0.98 ? C.uiw : mixc([[C.uiw, s], [C.txt, g], [C.uiInk, u]], s + 0.035 * g + 0.02 * u);
  const bd = mixc([[C.uiLine, s], [C.txt, g], [C.uiLine, u]], s + 0.2 * g * (1 - 0.3 * dash) + u);
  const title = mixc([[C.uiInk, s], [C.txt2, g], [C.uiMuted, u]]);
  // S16 cards: a short connector from the card to its node (the workflow line becomes a UI connection).
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h, boxSizing: 'border-box', borderRadius: lerp(14, 16, mat), background: bg, border: `1px ${dash > 0.5 ? 'dashed' : 'solid'} ${bd}`, boxShadow: s > 0.05 ? `0 18px 40px rgba(0,0,0,${0.45 * s})` : undefined, opacity: o, padding: `${lerp(14, 12, mat)}px 16px`}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
        {live > 0.01 ? <span style={{width: 6, height: 6, borderRadius: 3, background: C.acc, opacity: live}} /> : null}
        <div style={{fontSize: lerp(18, 14, mat), fontWeight: 500, letterSpacing: lerp(-0.01, 0.02, mat) + 'em', color: title, whiteSpace: 'nowrap'}}>{m.title}</div>
        <div style={{flex: 1}} />
        {u > 0.01 ? <div style={{fontSize: 14, color: C.uiInk, opacity: u, fontVariantNumeric: 'tabular-nums'}}>{m.count}</div> : null}
      </div>
      {s > 0.02 ? <div style={{fontSize: 14, color: C.uiMuted, marginTop: 4, opacity: s, whiteSpace: 'nowrap'}}>{m.sub}</div> : null}
    </div>
  );
};

/** S16 connectors, node to card. */
const Connectors: React.FC<{t: number}> = ({t}) => {
  if (t < 38.6 || t > 41.6) return null;
  const out = 1 - seg(t, 41.2, 41.6);
  const nodeOf: NodeId[] = ['request', 'review', 'approve', 'order'];
  return (
    <g opacity={out}>
      {MODS.map((m, i) => {
        const p = seg(t, 38.9 + 0.35 * i, 39.5 + 0.35 * i, smooth);
        const [nx, ny] = L0[nodeOf[i]];
        return <Stroke key={i} d={`M${nx - 12} ${ny} L${M + 280} ${m.cy}`} p={p} color={rgba(C.acc, 0.8)} w={1.2} />;
      })}
    </g>
  );
};

/** S17: the dense interface. Twelve modules this business does not need. */
const OTHERS = ['CRM', 'Campaigns', 'Leads', 'Payroll', 'Assets', 'Helpdesk', 'Timesheets', 'Projects', 'Expenses', 'Sales reports', 'Marketing', 'Budgets'];
const DenseApp: React.FC<{t: number}> = ({t}) => {
  if (t < 41.2 || t > 45.1) return null;
  const o = seg(t, 41.4, 42.0) * (1 - seg(t, 44.3, 45.0, smooth));
  const taken = new Set(MODS.map((m) => `${m.slot[0]}-${m.slot[1]}`));
  const free: [number, number][] = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (!taken.has(`${c}-${r}`)) free.push([c, r]);
  return (
    <>
      <div style={{position: 'absolute', left: 150, top: 150, width: 780, height: 610, borderRadius: 18, background: C.ui, boxShadow: '0 40px 100px rgba(0,0,0,0.6)', opacity: o}}>
        <div style={{height: 44, display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', borderBottom: `1px solid ${C.uiLine}`}}>
          <Mark height={15} color={C.uiInk} />
          <Micro style={{color: C.uiInk, fontSize: 12}}>All modules</Micro>
        </div>
      </div>
      {OTHERS.map((n, k) => {
        const [c, r] = free[k];
        const [x, y, w, h] = slotR(c, r);
        const a = seg(t, 41.5 + 0.03 * k, 42.1 + 0.03 * k, glide);
        const wt = [42.4, 42.75, 43.1][k % 3];
        const gone = seg(t, wt, wt + 0.45, smooth);
        const oo = a * (1 - gone) * (1 - seg(t, 44.3, 45.0));
        if (oo <= 0.003) return null;
        return (
          <div key={n} style={{position: 'absolute', left: x, top: y, width: w, height: h, boxSizing: 'border-box', borderRadius: 12, background: C.uiw, border: `1px solid ${C.uiLine}`, padding: '14px 16px', opacity: oo, transform: `scale(${lerp(1, 0.94, gone)})`, filter: gone > 0.02 ? `blur(${6 * gone}px)` : undefined}}>
            <div style={{fontSize: 16, fontWeight: 500, color: C.uiInk, marginBottom: 14}}>{n}</div>
            <Bars c={rgba(C.uiInk, 0.07)} />
          </div>
        );
      })}
    </>
  );
};

/** S22-24: the Verity application frame, holding the business's workflow as it always was. */
const VerityApp: React.FC<{t: number}> = ({t}) => {
  if (t < 60.4) return null;
  const p = seg(t, 60.5, 61.5, glide);
  const ex = seg(t, 64.4, 65.4, smooth);
  const x = lerp(380, M, ex);
  const w = lerp(610, 900, ex);
  const side = seg(t, 65.0, 65.8, glide);
  const nav: [string, string][] = [
    ['Requests', '12'],
    ['Review Queue', '4'],
    ['Approval', '2'],
    ['Orders', '9'],
  ];
  return (
    <div style={{position: 'absolute', left: x, top: 150, width: w, height: 710, borderRadius: 20, background: C.uiw, border: `1px solid ${C.uiLine}`, boxShadow: '0 40px 100px rgba(0,0,0,0.6)', opacity: Math.min(1, p * 1.3), transform: `translateY(${(1 - p) * 20}px) scale(${lerp(0.97, 1, p)})`, overflow: 'hidden'}}>
      <div style={{height: 44, display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', borderBottom: `1px solid ${C.uiLine}`}}>
        <Mark height={16} color={C.uiInk} />
        <Micro style={{color: C.uiInk, fontSize: 12}}>Verity / Workflow</Micro>
        <div style={{flex: 1}} />
        <span style={{width: 6, height: 6, borderRadius: 3, background: C.acc, opacity: side}} />
        <Micro style={{color: C.uiMuted, fontSize: 12, opacity: side}}>Live</Micro>
      </div>
      {side > 0.01 ? (
        <div style={{position: 'absolute', left: 0, top: 44, bottom: 0, width: 240, borderRight: `1px solid ${C.uiLine}`, padding: '28px 18px', boxSizing: 'border-box', opacity: side}}>
          {nav.map(([n, c], i) => (
            <div key={n} style={{display: 'flex', alignItems: 'center', height: 44, padding: '0 12px', borderRadius: 10, marginBottom: 6, background: i === 1 ? rgba(C.acc, 0.1) : undefined, position: 'relative', opacity: seg(t, 65.2 + 0.12 * i, 65.8 + 0.12 * i)}}>
              {i === 1 ? <div style={{position: 'absolute', left: 0, top: 12, bottom: 12, width: 2.5, borderRadius: 2, background: C.acc}} /> : null}
              <div style={{fontSize: 16, fontWeight: 500, color: C.uiInk}}>{n}</div>
              <div style={{flex: 1}} />
              <div style={{fontSize: 14, color: C.uiMuted, fontVariantNumeric: 'tabular-nums'}}>{c}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

/* ---------------------------------------------------------------------------------------------------------------
   Overlays
   ------------------------------------------------------------------------------------------------------------- */
const LensLayer: React.FC<{t: number}> = ({t}) => {
  if (t < 31.2 || t > 38.5) return null;
  const out = 1 - seg(t, 37.9, 38.4, smooth);
  const act = activeLens(t);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: out}}>
      <svg width={AW} height={AH} style={{position: 'absolute', inset: 0}}>
        {LENS.map((l, i) => {
          const at = L_AT[i];
          const rp = seg(t, at, at + 0.7, smooth);
          if (rp <= 0) return null;
          const cur = i === act;
          const ringC = cur ? rgba(C.acc, 0.85) : rgba(C.txt2, 0.32);
          const d = l.ring.c
            ? `M${l.ring.c[0] - l.ring.r!} ${l.ring.c[1]} a${l.ring.r} ${l.ring.r} 0 1 0 ${2 * l.ring.r!} 0 a${l.ring.r} ${l.ring.r} 0 1 0 ${-2 * l.ring.r!} 0`
            : `M${l.ring.x! + 18} ${l.ring.y} H${l.ring.x! + l.ring.w! - 18} Q${l.ring.x! + l.ring.w!} ${l.ring.y} ${l.ring.x! + l.ring.w!} ${l.ring.y! + 18} V${l.ring.y! + l.ring.h! - 18} Q${l.ring.x! + l.ring.w!} ${l.ring.y! + l.ring.h!} ${l.ring.x! + l.ring.w! - 18} ${l.ring.y! + l.ring.h!} H${l.ring.x! + 18} Q${l.ring.x} ${l.ring.y! + l.ring.h!} ${l.ring.x} ${l.ring.y! + l.ring.h! - 18} V${l.ring.y! + 18} Q${l.ring.x} ${l.ring.y} ${l.ring.x! + 18} ${l.ring.y} Z`;
          const lp = seg(t, at + 0.3, at + 0.8, smooth);
          return (
            <g key={i}>
              <Stroke d={d} p={rp} color={ringC} w={1.3} />
              <Stroke d={`M${l.leader[0][0]} ${l.leader[0][1]} L${l.leader[1][0]} ${l.leader[1][1]}`} p={lp} color={cur ? rgba(C.acc, 0.8) : rgba(C.txt2, 0.3)} w={1.2} />
            </g>
          );
        })}
      </svg>
      {LENS.map((l, i) => {
        const at = L_AT[i];
        const a = appear(t, at + 0.4, 99, 6, 0.7);
        if (a.o <= 0.003) return null;
        const cur = i === act;
        const top = l.call.top ? l.call.y : l.call.y - (l.label.length * 20) / 2;
        const dp = seg(t, at + 0.9, at + 1.6, glide);
        return (
          <div key={i} style={{position: 'absolute', left: l.call.x, top, opacity: a.o * (cur ? 1 : 0.62), transform: `translateY(${a.y}px)`}}>
            {l.label.map((s) => (
              <Micro key={s} style={{color: cur ? C.txt : C.txt2, lineHeight: '20px'}}>
                {s}
              </Micro>
            ))}
            <div style={{marginTop: 8, fontSize: 14, color: C.txt2, fontVariantNumeric: 'tabular-nums', opacity: dp, letterSpacing: '0.02em'}}>{l.data}</div>
          </div>
        );
      })}
    </div>
  );
};

/** S19: the order of an engagement. Four architectural cards on a descending line. */
const STAGES = ['Requirement', 'Proposed solution', 'Approval', 'Implementation'];
const S_AT = [49.5, 50.2, 50.9, 51.6];
const Stages: React.FC<{t: number}> = ({t}) => {
  if (t < 49.3 || t > 53.2) return null;
  const out = 1 - seg(t, 52.6, 53.1, smooth);
  const act = S_AT.filter((a) => t >= a).length - 1;
  const cx = (i: number) => 260 + 70 * i;
  const cy = (i: number) => 200 + 150 * i;
  // Architectural elbows: down from each card's bottom edge, then across into the next card's left edge.
  const line = [0, 1, 2].map((i) => `M${cx(i) + 24} ${cy(i) + 116} L${cx(i) + 24} ${cy(i + 1) + 58} L${cx(i + 1)} ${cy(i + 1) + 58}`).join(' ');
  return (
    <div style={{position: 'absolute', inset: 0, opacity: out}}>
      <svg width={AW} height={AH} style={{position: 'absolute', inset: 0}}>
        <Stroke d={line} p={seg(t, 49.7, 51.9, smooth)} color={rgba(C.acc, 0.75)} w={1.3} />
      </svg>
      {STAGES.map((s, i) => {
        const a = appear(t, S_AT[i], 99, 10, 0.8);
        if (a.o <= 0.003) return null;
        const cur = i === act;
        const tick = (pos: React.CSSProperties) => <div style={{position: 'absolute', width: 10, height: 10, ...pos}} />;
        const tc = rgba(C.txt, 0.55);
        return (
          <div key={s} style={{position: 'absolute', left: cx(i), top: cy(i), width: 440, height: 116, boxSizing: 'border-box', border: `1px solid ${cur ? rgba(C.acc, 0.7) : rgba(C.txt, 0.14)}`, background: 'rgba(255,255,255,0.022)', opacity: a.o, transform: `translateY(${a.y}px)`, display: 'flex', alignItems: 'center', gap: 28, padding: '0 32px'}}>
            {tick({left: -1, top: -1, borderLeft: `1.5px solid ${tc}`, borderTop: `1.5px solid ${tc}`})}
            {tick({right: -1, bottom: -1, borderRight: `1.5px solid ${tc}`, borderBottom: `1.5px solid ${tc}`})}
            <div style={{fontSize: 30, fontWeight: 300, color: cur ? C.acc : C.txt2, fontVariantNumeric: 'tabular-nums', width: 44}}>{`0${i + 1}`}</div>
            <Micro style={{fontSize: 16, color: C.txt}}>{s}</Micro>
          </div>
        );
      })}
    </div>
  );
};

/** S20 status: proposed, then approved. Anchor: top-right safe corner, on the chapter marker's line. */
const Status: React.FC<{t: number}> = ({t}) => {
  if (t < 52.9 || t > 56.4) return null;
  const a = appear(t, 53.2, 55.9, 0, 0.6);
  const ok = seg(t, 54.15, 54.45, smooth);
  return (
    <div style={{position: 'absolute', right: M, top: M - 18, height: 34, padding: '0 16px', borderRadius: 17, display: 'flex', alignItems: 'center', gap: 8, opacity: a.o, border: `1px solid ${ok > 0.5 ? C.acc : rgba(C.txt2, 0.5)}`, background: rgba(C.acc, 0.9 * ok)}}>
      {ok > 0.5 ? (
        <svg width={14} height={14} viewBox="0 0 14 14">
          <path d="M2.5 7.5 L5.8 10.5 L11.5 3.8" fill="none" stroke={C.bg} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
      <Micro style={{fontSize: 13, color: ok > 0.5 ? C.bg : C.txt2}}>{ok > 0.5 ? 'Approved' : 'Proposed'}</Micro>
    </div>
  );
};

/** S21: a rigid framework closes in around the workflow, and dissolves. */
const Framework: React.FC<{t: number}> = ({t}) => {
  if (t < 56.4 || t > 59.1) return null;
  const d = seg(t, 58.1, 58.9, smooth);
  return (
    <svg width={AW} height={AH} style={{position: 'absolute', inset: 0, opacity: 1 - d, filter: d > 0.02 ? `blur(${6 * d}px)` : undefined, transform: `scale(${1 + 0.03 * d})`, transformOrigin: '680px 506px'}}>
      {[0, 1, 2].map((k) => {
        const e = seg(t, 56.6 + 0.12 * k, 57.9 + 0.12 * k, smooth);
        const s: R = [-80 + 30 * k, -80 + 30 * k, 1240 - 60 * k, 1120 - 60 * k];
        const g: R = [410 - 22 * k, 186 - 22 * k, 540 + 44 * k, 640 + 44 * k];
        const [x, y, w, h] = lr(s, g, e);
        return (
          <g key={k} stroke={rgba(C.txt2, 0.45 - 0.1 * k)} strokeWidth={1.4} fill="none">
            <rect x={x} y={y} width={w} height={h} />
            {k === 0 ? (
              <>
                <line x1={x} y1={y + h / 3} x2={x + w} y2={y + h / 3} />
                <line x1={x} y1={y + (2 * h) / 3} x2={x + w} y2={y + (2 * h) / 3} />
                <line x1={x + w / 2} y1={y} x2={x + w / 2} y2={y + h} />
              </>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
};

/** S13 and S24: the Verity lockup. A single blue point becomes the mark; the wordmark is revealed beside it. */
const Lockup: React.FC<{t: number; at: number; out: number; y: number; dot?: boolean; size?: number}> = ({t, at, out, y, dot = false, size = 64}) => {
  const q = seg(t, out, out + 0.5, smooth);
  const dotP = dot ? seg(t, at - 0.35, at, glide) : 1;
  const m = seg(t, at, at + 0.7, glide);
  const word = seg(t, at + 0.35, at + 1.1, smooth);
  if (dotP <= 0.002 || q >= 0.999) return null;
  const markW = (size * 24) / 30;
  const wordW = size * 3.2;
  const gap = size * 0.36;
  const total = markW + gap + wordW;
  return (
    <div style={{position: 'absolute', left: 540 - total / 2, top: y - size / 2, height: size, display: 'flex', alignItems: 'center', gap, opacity: 1 - q}}>
      <div style={{position: 'relative', width: markW, height: size}}>
        {dot ? <div style={{position: 'absolute', left: markW / 2 - 4, top: size / 2 - 4, width: 8, height: 8, borderRadius: 4, background: C.acc, boxShadow: `0 0 18px ${rgba(C.acc, 0.45)}`, opacity: dotP * (1 - m), transform: `scale(${dotP})`}} /> : null}
        <div style={{position: 'absolute', inset: 0, opacity: m, transform: `scale(${lerp(0.4, 1, m)})`}}>
          <Mark height={size} color={C.acc} />
        </div>
      </div>
      <div style={{width: wordW, overflow: 'hidden'}}>
        <div style={{fontSize: size * 1.08, fontWeight: 600, letterSpacing: '-0.045em', lineHeight: 1, color: C.txt, clipPath: `inset(0 ${(1 - word) * 100}% 0 0)`, transform: `translateX(${(1 - word) * -10}px)`}}>verity</div>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------------------------------------------------
   Atmosphere, sound, assembly
   ------------------------------------------------------------------------------------------------------------- */
const Atmos: React.FC<{t: number}> = ({t}) => (
  <AbsoluteFill style={{pointerEvents: 'none'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)'}} />
    <svg width={AW} height={AH} style={{position: 'absolute', inset: 0, opacity: 0.05, mixBlendMode: 'overlay'}}>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} seed={Math.floor(t * 24) % 97} />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  </AbsoluteFill>
);

type Sfx = {f: string; at: number; v: number};
const SFX: Sfx[] = [
  ...DESK_SFX,
  ...[9.1, 9.7, 10.3].map((at) => ({f: 'select_008.ogg', at, v: 0.07})),
  ...WAVE.map((at) => ({f: 'impactGlass_light_001.ogg', at, v: 0.06})),
  {f: 'beep.wav', at: 19.6, v: 0.04},
  ...[20.4, 20.9, 21.6].map((at) => ({f: 'click_003.ogg', at, v: 0.12})),
  {f: 'subhit.wav', at: 24.95, v: 0.12},
  {f: 'impactGlass_light_001.ogg', at: 25.75, v: 0.16},
  {f: 'impactGlass_medium_000.ogg', at: 26.05, v: 0.08},
  {f: 'click_003.ogg', at: 28.75, v: 0.14},
  ...L_AT.map((at) => ({f: 'select_008.ogg', at, v: 0.09})),
  ...[38.9, 39.25, 39.6, 39.95].map((at) => ({f: 'select_008.ogg', at, v: 0.08})),
  ...[42.4, 42.75, 43.1].map((at) => ({f: 'click_003.ogg', at, v: 0.08})),
  {f: 'impactGlass_light_001.ogg', at: 46.8, v: 0.12},
  ...S_AT.map((at) => ({f: 'select_008.ogg', at, v: 0.08})),
  {f: 'click_003.ogg', at: 54.15, v: 0.18},
  {f: 'impactGlass_light_001.ogg', at: 54.3, v: 0.16},
  {f: 'subhit.wav', at: 58.1, v: 0.1},
  {f: 'impactGlass_light_001.ogg', at: 60.6, v: 0.12},
  {f: 'outro-tone.wav', at: 70.0, v: 0.4},
];

export const BrandFilm: React.FC = () => {
  const t = useCurrentFrame() / AFPS;

  // One camera for the system layer: lens focus in S15, the final pull-back into a floating product in S24.
  let sys = '';
  if (t > 30.8 && t < 37.8) {
    const fx = track(t, [[30.8, 540], [31.6, 650], [33.2, 650], [34.8, 812], [36.4, 711], [37.6, 540]]);
    const fy = track(t, [[30.8, 480], [31.6, 226], [33.2, 348], [34.8, 422], [36.4, 741], [37.6, 480]]);
    const s = track(t, [[30.8, 1], [31.6, 1.035], [36.8, 1.035], [37.6, 1]]);
    sys = `translate(${(540 - fx) * 0.08}px, ${(480 - fy) * 0.08}px) scale(${s})`;
  } else if (t > 68.6) {
    const e = seg(t, 68.8, 70.3, smooth);
    sys = `translateY(${(372 - 505) * e}px) scale(${lerp(1, 0.56, e)})`;
  }
  const sysOrigin = t > 68.6 ? '540px 505px' : '540px 480px';

  return (
    <AbsoluteFill style={{overflow: 'hidden', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: C.txt, background: `radial-gradient(ellipse 70% 62% at 60% 50%, ${C.surf}, ${C.bg} 72%)`}}>
      <DeskScene t={t} />

      <div style={{position: 'absolute', inset: 0, transform: sys || undefined, transformOrigin: sysOrigin}}>
        <GenericSuite t={t} />
        <VerityApp t={t} />
        <DenseApp t={t} />
        {MODS.map((m, i) => (
          <Module key={m.title} m={m} i={i} t={t} />
        ))}
        <svg width={AW} height={AH} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
          <Connectors t={t} />
          <Graph t={t} />
          <Forced t={t} />
        </svg>
        <FinanceLid t={t} />
        <LensLayer t={t} />
      </div>

      <EmptyApp t={t} />
      <Stages t={t} />
      <Framework t={t} />
      <Status t={t} />

      {/* Chapter markers: top-left corner. */}
      <Chapter t={t} at={9.2} out={17.6} label="The way you work" />
      <Chapter t={t} at={31.0} out={37.8} label="Understand" />
      <Chapter t={t} at={38.3} out={41.0} label="Map" />
      <Chapter t={t} at={41.4} out={48.7} label="Configure" />
      <Chapter t={t} at={53.0} out={55.9} label="Approve" />

      {/* Years: bottom-left, on the statement baseline. */}
      {(() => {
        if (t < 11 || t > 18.8) return null;
        const a = appear(t, 11.2, 18.2, 0);
        const steps: [number, string][] = [
          [11.2, 'Year 01'],
          [12.6, 'Year 03'],
          [14.2, 'Year 07'],
          [15.8, 'Today'],
        ];
        const k = steps.filter(([at]) => t >= at).length - 1;
        const prog = seg(t, 11.2, 16.2, smooth);
        return (
          <div style={{position: 'absolute', left: M, top: 830, opacity: a.o}}>
            <div style={{width: 160, height: 1, background: rgba(C.txt2, 0.25)}}>
              <div style={{width: 160 * prog, height: 1, background: C.txt}} />
            </div>
            <Micro style={{marginTop: 14, color: k === 3 ? C.txt : C.txt2}}>{steps[Math.max(0, k)][1]}</Micro>
          </div>
        );
      })()}

      {/* S13: Verity. */}
      <Lockup t={t} at={25.95} out={27.45} y={440} dot />
      {(() => {
        const a = appear(t, 26.7, 27.4, 6, 0.7);
        return a.o > 0.003 ? <Micro style={{position: 'absolute', left: 0, right: 0, top: 506, textAlign: 'center', color: C.txt2, opacity: a.o, transform: `translateY(${a.y}px)`}}>Understand first.</Micro> : null;
      })()}

      <Statement t={t} at={29.3} out={31.0} lines={['Start with', 'the business.']} size={48} dur={1.3} />
      <Statement t={t} at={43.4} out={45.0} lines={['Only what you need.']} size={30} />
      <Statement t={t} at={57.2} out={59.9} lines={['Software should', 'not define', 'the business.']} size={46} dur={1.4} />
      <Statement t={t} at={66.4} out={68.5} lines={['Built around your way of working.']} size={34} capTop={92} />

      {/* S24: the brand. */}
      <Lockup t={t} at={70.0} out={99} y={690} size={52} />
      {(() => {
        const a = appear(t, 70.7, 99, 6, 0.9);
        return a.o > 0.003 ? <div style={{position: 'absolute', left: 0, right: 0, top: 752, textAlign: 'center', fontSize: 24, fontWeight: 400, color: C.txt2, letterSpacing: '0.01em', opacity: a.o, transform: `translateY(${a.y}px)`}}>Run business your way.</div> : null;
      })()}

      <Atmos t={t} />

      <Audio src={staticFile('film/drone.wav')} loop volume={(f) => 0.14 * Math.min(1, f / (2.5 * AFPS)) * Math.min(1, (BRAND_DURATION - f) / (2 * AFPS))} />
      {SFX.map((s, i) => (
        <Sequence key={i} from={Math.round(s.at * AFPS)}>
          <Audio src={staticFile(`film/${s.f}`)} volume={s.v} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
