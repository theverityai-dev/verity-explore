import React from 'react';
import {AbsoluteFill, Easing, useCurrentFrame} from 'remotion';
import {C, DURATION, FPS, H, W, glide, lerp, lin, seg, smooth, track, win} from './tokens';
import {EDGES, NODES, SPINE_EDGES, SPINE_IDS, WF_B, WF_C} from './graph';
import type {GNode} from './graph';
import {Workflow} from './Workflow';
import {DeskBack, DeskFront, DeskMid} from './Desk';
import {ConfigPanel, Cursor, Piece, Statement, Word} from './Ui';
import type {PieceKind} from './Ui';
import {Grade, fontFamily} from '../engine';

export {DURATION};
export const FILM = {w: W, h: H, fps: FPS};

/* ------------------------------------------------------------------ camera */

type Cam = {x: number; y: number; s: number};
const PITCH = 1500; // world distance between the four stages of beat 10
const D3 = PITCH * 3; // stage 4 (proposed system) is the home of beats 11 to 16
const sl = Easing.bezier(0.25, 0.1, 0.3, 1);
const soft = Easing.bezier(0.45, 0, 0.2, 1);

const camAt = (t: number): Cam => {
  if (t < 13.2) {
    const k = seg(t, 0, 10.8, sl);
    const pull = seg(t, 10.2, 12.2, smooth);
    return {
      x: lerp(lerp(-560, 0, k), 0, pull),
      y: lerp(lerp(40, 90, k), 0, pull),
      s: lerp(lerp(1.4, 0.9, k), 0.7, pull),
    };
  }
  if (t < 23) {
    const k = seg(t, 13.2, 15.6, smooth);
    const d = seg(t, 15.6, 23, lin);
    return {x: 14 * d, y: lerp(0, 15, k), s: lerp(0.7, 0.88, k) + 0.02 * d};
  }
  if (t < 33.7) {
    return {
      x: lerp(14, 40, seg(t, 23, 33.2, lin)),
      y: lerp(15, 40, seg(t, 23, 28, smooth)),
      s: lerp(0.9, 0.78, seg(t, 23, 28, smooth)),
    };
  }
  if (t < 42) return {x: -50 * (1 - seg(t, 33.7, 42, lin)), y: 15, s: lerp(0.95, 0.88, seg(t, 38.4, 41.8, smooth))};
  if (t < 49.5) {
    const lay = seg(t, 45.6, 46.8, smooth) - seg(t, 48.8, 49.6, smooth);
    return {x: 0, y: lerp(15, 0, lay), s: lerp(0.88 - 0.02 * seg(t, 42, 45.6, lin), 0.76, lay) + 0.03 * seg(t, 46.8, 48.8, lin) * (1 - seg(t, 48.8, 49.6, smooth))};
  }
  if (t < 65) {
    return {x: 0, y: lerp(15, 55, seg(t, 51, 56, smooth)), s: lerp(0.86, 0.84, seg(t, 49.5, 56, smooth))};
  }
  if (t < 76.5) {
    const push = seg(t, 66.4, 67.6, smooth) * (1 - seg(t, 67.6, 72, smooth));
    return {x: 0, y: 55, s: 0.84 + 0.06 * push + 0.02 * seg(t, 72, 76.5, lin)};
  }
  if (t < 81.8) {
    return {x: lerp(0, PITCH * 2, seg(t, 77.2, 81.6, soft)), y: lerp(55, 60, seg(t, 76.5, 78.3, smooth)), s: lerp(0.86, 0.5, seg(t, 76.5, 78.3, smooth))};
  }
  if (t < 89) {
    const a = seg(t, 81.8, 84, smooth);
    const b = seg(t, 84, 85.9, smooth);
    const c = seg(t, 85.9, 89, lin);
    return {x: lerp(PITCH * 2, D3, b), y: lerp(60, 110, b), s: lerp(0.5, 0.56, a) + (0.84 - 0.56) * b + 0.05 * c};
  }
  if (t < 93) return {x: D3, y: lerp(110, 100, seg(t, 89, 93, lin)), s: lerp(0.89, 0.93, seg(t, 89, 93, lin))};
  if (t < 98) return {x: D3, y: lerp(100, 20, seg(t, 93, 94.2, smooth)), s: lerp(0.93, 0.9, seg(t, 93, 94.2, smooth))};
  if (t < 104) return {x: D3, y: 20, s: lerp(0.9, 0.94, seg(t, 98, 104, lin))};
  if (t < 109.5) {
    return {x: D3, y: lerp(20, 110, seg(t, 104, 106, smooth)), s: lerp(0.94, 0.84, seg(t, 104, 105.6, smooth)) + 0.06 * seg(t, 105.6, 109.5, lin)};
  }
  return {x: D3, y: 110, s: lerp(0.9, 0.78, seg(t, 109.5, 113.5, smooth))};
};

const Layer: React.FC<{cam: Cam; p?: number; blur?: number; alpha?: number; children: React.ReactNode}> = ({cam, p = 1, blur = 0, alpha = 1, children}) => {
  const s = 1 + (cam.s - 1) * p;
  return (
    <div
      style={{
        position: 'absolute',
        left: W / 2,
        top: H / 2,
        width: 0,
        height: 0,
        transform: `scale(${s}) translate(${-cam.x * p}px, ${-cam.y * p}px)`,
        filter: blur > 0.3 ? `blur(${blur}px)` : undefined,
        opacity: alpha,
      }}
    >
      {children}
    </div>
  );
};

/* -------------------------------------------------------------- shared data */

const NODE = (id: string): GNode => NODES.find((n) => n.id === id)!;

type PieceDef = {id: string; kind: PieceKind; src: string; x: number; y: number; fillAt: number};
const PIECES: PieceDef[] = [
  {id: 'quote', kind: 'quote', src: 'req', x: -470, y: -390, fillAt: 63.2},
  {id: 'approval', kind: 'approval', src: 'app', x: 470, y: -390, fillAt: 63.8},
  {id: 'perm', kind: 'perm', src: 'r3', x: 470, y: 500, fillAt: 64.1},
  {id: 'record', kind: 'record', src: 'doc', x: 80, y: 500, fillAt: 64.4},
];

/** Analysis highlights of beat 6 (replayed in stage 2 of beat 10 with a shifted clock). */
const HL: [string, number, number][] = [
  ['req', 42.5, 43.5], ['e1', 42.9, 43.9], ['rev', 43.1, 44.1], ['e2', 43.8, 44.8], ['dec', 44.0, 45.0], ['e3', 44.8, 45.7],
  ['app', 44.9, 45.8], ['l1', 44.5, 45.4], ['r1', 44.6, 45.5], ['bn', 45.0, 45.7], ['x2', 45.1, 45.8], ['ex4', 45.1, 45.8], ['ex5', 45.1, 45.8],
];
const hlAt = (tt: number) => (id: string) => {
  let v = 0;
  for (const [i, a, b] of HL) if (i === id) v = Math.max(v, win(tt, a, b, 0.3, 0.3));
  return v;
};

const RET_X: [number, number][] = [[42.3, -480], [43.1, -240], [44.0, 0], [44.9, 250], [45.3, 125]];
const RET_Y: [number, number][] = [[42.3, 60], [43.1, -110], [44.0, 40], [44.9, -100], [45.3, -30]];
const RET_S: [number, number][] = [[42.3, 170], [43.1, 170], [44.0, 140], [44.9, 170], [45.3, 110]];

/** Merge of beat 7: two duplicated steps slide together. */
const mergeOff = (t: number) => (n: GNode) => {
  const k = seg(t, 50.0, 50.8, smooth);
  if (n.id === 'm1') return {x: 0, y: 45 * k};
  if (n.id === 'm2') return {x: 0, y: -45 * k};
  return {x: 0, y: 0};
};

const improveHl = (t: number, id: string) => {
  const w = (a: number, b: number) => win(t, a, b, 0.25, 0.25);
  if (id === 'x2' || id === 'ex4' || id === 'ex5') return w(49.6, 50.9);
  if (id === 'm1' || id === 'm2') return w(49.9, 50.8);
  if (id === 'bn') return w(50.5, 51.5);
  if (id === 'x4' || id === 'ex6' || id === 'ex7') return w(51.3, 51.9);
  return 0;
};

const configHl = (t: number, id: string) => {
  const order: [string, number][] = [['req', 63.2], ['app', 63.8], ['r3', 64.1], ['doc', 64.4]];
  const f = order.find(([i]) => i === id);
  return f ? win(t, f[1] - 0.3, f[1] + 0.8, 0.25, 0.4) : 0;
};

const Reticle: React.FC<{x: number; y: number; size: number; alpha: number}> = ({x, y, size, alpha}) => {
  const h = size / 2;
  const c = 26;
  return (
    <svg width={1} height={1} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}} opacity={alpha}>
      <g transform={`translate(${x} ${y})`} fill="none" stroke={C.acc} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round">
        <path d={`M ${-h} ${-h + c} V ${-h} H ${-h + c}`} />
        <path d={`M ${h - c} ${-h} H ${h} V ${-h + c}`} />
        <path d={`M ${h} ${h - c} V ${h} H ${h - c}`} />
        <path d={`M ${-h + c} ${h} H ${-h} V ${h - c}`} />
      </g>
    </svg>
  );
};

/** Straight connector between two world points, drawn from a toward b. */
const Link: React.FC<{a: {x: number; y: number}; b: {x: number; y: number}; p: number; color: string; w?: number; dash?: string; alpha?: number}> = ({a, b, p, color, w = 2, dash, alpha = 1}) =>
  p > 0.001 ? (
    <line x1={a.x} y1={a.y} x2={lerp(a.x, b.x, p)} y2={lerp(a.y, b.y, p)} stroke={color} strokeWidth={w} strokeLinecap="round" strokeDasharray={dash} opacity={alpha} />
  ) : null;

const Svg: React.FC<{children: React.ReactNode}> = ({children}) => (
  <svg width={1} height={1} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
    {children}
  </svg>
);

const hash = (i: number) => (((Math.sin(i * 12.9898 + 4.1) * 43758.5453) % 1) + 1) % 1;

/* ------------------------------------------------------------ rigid software */

const SLOT: Record<string, {x: number; y: number}> = {
  req: {x: -540, y: 50}, rev: {x: -180, y: 50}, dec: {x: 115, y: 50}, app: {x: 255, y: 50}, exe: {x: 540, y: 50},
  r1: {x: -180, y: 128}, r2: {x: 180, y: 128}, r3: {x: 540, y: 128}, doc: {x: -540, y: 128},
};
const slotOf = (id: string) => SLOT[id] ?? {x: -180, y: 90};
const COLS = [-540, -180, 180, 540];

const Box: React.FC<{cx: number; cy: number; i: number; a: number; filled: number; lab: number}> = ({cx, cy, i, a, filled, lab}) => (
  <div
    style={{
      position: 'absolute',
      left: cx,
      top: cy,
      width: 290,
      height: 250,
      transform: `translate(-50%,-50%) scale(${lerp(0.96, 1, a)})`,
      opacity: a,
      background: C.rig,
      border: `1.5px solid ${C.rigLine}`,
      borderRadius: 4,
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 38, background: C.rigBar, opacity: 0.8}} />
    <div style={{position: 'absolute', left: 14, top: 8, fontFamily, fontSize: 18, fontWeight: 500, letterSpacing: 3, color: C.mute, opacity: 0.4 + lab * 0.6}}>SCREEN {i + 1}</div>
    {[0, 1, 2].map((r) => (
      <div key={r} style={{position: 'absolute', left: 16, top: 170 + r * 24, width: [210, 160, 190][r] * filled, height: 10, borderRadius: 3, background: C.rigBar}} />
    ))}
  </div>
);

const Rigid: React.FC<{t: number}> = ({t}) => {
  const row2 = seg(t, 29.0, 30.4, lin);
  const clutter = seg(t, 29.4, 32.8, lin);
  const lab = seg(t, 27.6, 28.6, smooth);
  return (
    <>
      <Svg>
        {[0, 1, 2].map((i) => (
          <Link key={i} a={{x: COLS[i] + 145, y: 35}} b={{x: COLS[i + 1] - 145, y: 35}} p={seg(t, 24.8 + i * 0.3, 25.8 + i * 0.3, smooth)} color={C.rigLine} w={3} />
        ))}
      </Svg>
      {COLS.map((cx, i) => (
        <Box key={`a${i}`} cx={cx} cy={35} i={i} a={seg(t, 23.5 + i * 0.25, 24.6 + i * 0.25, smooth)} filled={clutter} lab={lab} />
      ))}
      {COLS.map((cx, i) => (
        <Box key={`b${i}`} cx={cx} cy={330} i={i + 4} a={row2 * seg(t, 29.0 + i * 0.2, 30.0 + i * 0.2)} filled={clutter} lab={lab} />
      ))}
      <div style={{position: 'absolute', left: -700, top: -200, width: 1400, height: 46, background: C.rig, border: `1.5px solid ${C.rigLine}`, borderRadius: 4, opacity: clutter}}>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} style={{position: 'absolute', left: 16 + i * 120, top: 14, width: 90, height: 14, borderRadius: 3, background: C.rigBar}} />
        ))}
      </div>
      <div style={{position: 'absolute', left: -700, top: 480, width: 1400, height: 90, background: C.rig, border: `1.5px solid ${C.rigLine}`, borderRadius: 4, opacity: clutter}}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} style={{position: 'absolute', left: 16 + i * 136, top: 24, width: 110, height: 42, borderRadius: 4, background: C.rigBar, opacity: 0.7}} />
        ))}
      </div>
    </>
  );
};

/* --------------------------------------------------------------- Verity mark */

const MARK_A = 'M2.6 1.6h18.8a1.6 1.6 0 011.2 2.7L13.2 14a1.6 1.6 0 01-2.4 0L1.4 4.3A1.6 1.6 0 012.6 1.6z';
const MARK_B = 'M10.8 16a1.6 1.6 0 012.4 0l9.4 9.7a1.6 1.6 0 01-1.2 2.7H2.6a1.6 1.6 0 01-1.2-2.7z';

const Mark: React.FC<{x: number; y: number; h: number; draw: number; fill: number; alpha: number; sc?: number}> = ({x, y, h, draw, fill, alpha, sc = 1}) => (
  <svg width={(h * 24) / 30} height={h} viewBox="0 0 24 30" style={{position: 'absolute', left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, overflow: 'visible', opacity: alpha}}>
    {[MARK_A, MARK_B].map((d, i) => (
      <path key={i} d={d} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - draw} fill={`rgba(111,143,255,${0.16 * fill})`} stroke={C.acc} strokeWidth={0.28} strokeLinejoin="round" strokeLinecap="round" />
    ))}
  </svg>
);

/* ---------------------------------------------------------------- small views */

const Backdrop: React.FC<{cam: Cam; t: number}> = ({cam, t}) => {
  const p = 0.4;
  const s = 1 + (cam.s - 1) * p;
  const g = 96 * s;
  return (
    <>
      <div style={{position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 46%, ${C.bg2} 0%, ${C.bg} 70%)`}} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(244,244,241,0.1) 1.6px, transparent 1.8px)',
          backgroundSize: `${g}px ${g}px`,
          backgroundPosition: `${W / 2 - cam.x * p * s}px ${H / 2 - cam.y * p * s}px`,
          opacity: 0.5,
        }}
      />
      {t < 7 && (
        <div style={{position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 55% at ${lerp(30, 55, seg(t, 0, 6.5, lin))}% 40%, rgba(238,226,200,0.10), transparent 70%)`}} />
      )}
    </>
  );
};

const Vignette: React.FC = () => (
  <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)', opacity: 0.9}} />
);

const Tile: React.FC<{x: number; y: number; a: number; s: number; k: number}> = ({x, y, a, s, k}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 232,
      height: 150,
      transform: `translate(-50%,-50%) scale(${s})`,
      opacity: a,
      background: C.rig,
      border: `1.5px solid ${C.rigLine}`,
      borderRadius: 4,
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 28, background: C.rigBar, opacity: 0.8}} />
    <div style={{position: 'absolute', left: 12, top: 9, width: 70 + (k % 4) * 14, height: 9, borderRadius: 3, background: 'rgba(244,244,241,0.18)'}} />
    {k % 3 === 0
      ? [0, 1, 2, 3, 4].map((i) => <div key={i} style={{position: 'absolute', left: 16 + i * 38, bottom: 14, width: 24, height: 20 + ((k * 7 + i * 13) % 56), background: C.rigBar}} />)
      : [0, 1, 2, 3].map((i) => <div key={i} style={{position: 'absolute', left: 14, top: 46 + i * 24, width: 90 + ((k * 11 + i * 29) % 100), height: 8, borderRadius: 3, background: C.rigBar}} />)}
  </div>
);

const StageLabels: React.FC<{t: number; stageA: (k: number) => number}> = ({t, stageA}) => {
  const names = ['BUSINESS', 'UNDERSTANDING', 'REQUIREMENTS', 'PROPOSED SYSTEM'];
  return (
    <>
      <Svg>
        {[0, 1, 2].map((k) => {
          const x0 = k * PITCH + 700;
          const x1 = (k + 1) * PITCH - 700;
          const p = seg(t, 77.9 + k * 1.15, 78.7 + k * 1.15, smooth);
          return (
            <g key={k} opacity={p}>
              <Link a={{x: x0, y: 40}} b={{x: x1, y: 40}} p={1} color="rgba(244,244,241,0.3)" w={5} />
              <path d={`M ${x1 - 34} ${40 - 28} L ${x1} 40 L ${x1 - 34} ${40 + 28}`} fill="none" stroke="rgba(244,244,241,0.45)" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
            </g>
          );
        })}
      </Svg>
      {names.map((n, k) => (
        <div
          key={n}
          style={{
            position: 'absolute',
            left: k * PITCH,
            top: 740,
            transform: 'translate(-50%,-50%)',
            fontFamily,
            fontSize: 54,
            fontWeight: 400,
            letterSpacing: '0.16em',
            color: C.mute,
            opacity: k === 0 ? seg(t, 77.0, 78.0) : stageA(k),
            whiteSpace: 'nowrap',
          }}
        >
          {n}
        </div>
      ))}
    </>
  );
};

/** Stage 4: the proposed system. Workflow as the skeleton, real UI around it, inactive until approval. */
const Stage4: React.FC<{
  t: number;
  lit: (i: number) => number;
  spawn: (i: number) => number;
  st: Record<string, number>;
  dots: {edge: string; p: number}[];
  act: (id: string) => number;
  cur: {x: number; y: number; press: number; a: number};
}> = ({t, lit, spawn, st, dots, act, cur}) => {
  const energy = (i: number) => seg(t, 87.8 + i * 0.25, 88.6 + i * 0.25, smooth);
  const out = 1 - seg(t, 93.0, 93.6, smooth);
  return (
    <>
      <div style={{opacity: seg(t, 80.4, 81.4, smooth) * out}}>
        <Workflow nodes={NODES} edges={EDGES} ctx={{t, dots, act, alpha: 1}} />
      </div>
      <Svg>
        {PIECES.map((d, i) => {
          const src = NODE(d.src);
          return (
            <React.Fragment key={d.id}>
              <Link a={src} b={{x: d.x, y: d.y}} p={spawn(i)} color="rgba(244,244,241,0.24)" w={1.8} dash="2 9" />
              <Link a={src} b={{x: d.x, y: d.y}} p={energy(i) * spawn(i)} color={C.acc} w={2.6} alpha={0.9} />
            </React.Fragment>
          );
        })}
        {/* the proposed system has a defined boundary */}
        <g opacity={seg(t, 80.9, 82.2, smooth) * out}>
          {([[-640, -520, 1, 1], [640, -520, -1, 1], [640, 640, -1, -1], [-640, 640, 1, -1]] as number[][]).map(([x, y, sx, sy], i) => (
            <path key={i} d={`M ${x} ${y + sy * 60} V ${y} H ${x + sx * 60}`} fill="none" stroke={C.acc} strokeWidth={4} strokeLinecap="round" opacity={0.7} />
          ))}
        </g>
      </Svg>
      {PIECES.map((d, i) => (
        <div key={d.id} style={{filter: `saturate(${lerp(0.15, 1, lit(i))}) brightness(${lerp(0.8, 1, lit(i))})`}}>
          <Piece kind={d.kind} x={d.x} y={d.y} fill={1} st={st[d.id]} alpha={spawn(i) * lerp(0.5, 1, lit(i))} s={lerp(0.9, 1, spawn(i))} />
        </div>
      ))}
      <Cursor x={cur.x} y={cur.y} press={cur.press} alpha={cur.a} />
    </>
  );
};

/** Beats 13 to 16: the scene-02 workflow replayed, then Verity forms around it. */
const StageSpine: React.FC<{t: number; spineT: number; labels: number; spawn: (i: number) => number; st: Record<string, number>}> = ({t, spineT, labels, spawn, st}) => {
  const nodes = NODES.filter((n) => SPINE_IDS.includes(n.id));
  const edges = EDGES.filter((e) => SPINE_EDGES.includes(e.id));
  const wfA = seg(t, 93.8, 94.3, smooth) * (1 - seg(t, 112.6, 113.4, smooth));
  // beat 13: a rigid rectangle approaches, tries to contain the workflow, then disappears
  const approach = seg(t, 95.6, 97.0, glide);
  const squeeze = seg(t, 97.0, 97.6, smooth);
  const gone = seg(t, 97.6, 98.4, smooth);
  const rs = lerp(1.7, 1, approach);
  const rw = lerp(1500, 1180, squeeze);
  // beat 14: ghost wireframes of Verity wait at the edges while the workflow stays unchanged
  const ghost = seg(t, 99, 100.6, smooth) * (1 - seg(t, 104.3, 105, smooth));
  // beat 15: connectors become application logic
  const logic = (i: number) => seg(t, 105.0 + i * 0.38, 105.9 + i * 0.38, smooth) * (1 - seg(t, 110.2, 111.6, smooth));
  const dots =
    t >= 98 && t < 104
      ? [
          {edge: 'e1', p: ((t - 98.4) % 2.4) / 0.9},
          {edge: 'e2', p: ((t - 99.1) % 2.4) / 0.9},
          {edge: 'e3', p: ((t - 99.8) % 2.4) / 0.9},
          {edge: 'e4', p: ((t - 100.5) % 2.4) / 0.9},
        ]
      : [];
  return (
    <>
      <div style={{opacity: wfA}}>
        <Workflow nodes={nodes} edges={edges} ctx={{t: spineT, labels, dots, alpha: 1, hl: () => 0}} />
      </div>
      {t >= 95.5 && t < 98.5 && (
        <div
          style={{
            position: 'absolute',
            left: 20,
            top: 40,
            width: rw,
            height: 620,
            transform: `translate(-50%,-50%) scale(${rs})`,
            border: '3px solid rgba(167,170,176,0.6)',
            background: 'rgba(20,22,27,0.35)',
            borderRadius: 4,
            opacity: seg(t, 95.6, 96.2) * (1 - gone),
          }}
        />
      )}
      {ghost > 0.01 && PIECES.map((d) => <Piece key={d.id} kind={d.kind} x={d.x} y={d.y} fill={0} alpha={ghost * 0.22} />)}
      <Svg>
        {PIECES.map((d, i) => {
          if (!SPINE_IDS.includes(d.src)) return null;
          return <Link key={d.id} a={NODE(d.src)} b={{x: d.x, y: d.y}} p={logic(i)} color={C.acc} w={2.4} alpha={0.85} />;
        })}
      </Svg>
      {t >= 104 &&
        PIECES.map((d, i) => {
          const pos = SPINE_IDS.includes(d.src) ? NODE(d.src) : NODE('dec');
          const p = spawn(i);
          if (p < 0.01) return null;
          return <Piece key={d.id} kind={d.kind} x={lerp(pos.x, d.x, p)} y={lerp(pos.y, d.y, p)} fill={1} st={st[d.id]} s={lerp(0.12, 1, p)} alpha={p} />;
        })}
    </>
  );
};

/** Beat 5: a thin line traces the mark, which becomes a Verity fragment that zooms out to a small layer. */
const Beat5: React.FC<{t: number}> = ({t}) => {
  const draw = seg(t, 34.0, 36.3, smooth);
  const fill = seg(t, 36.0, 36.9, smooth);
  const markA = seg(t, 33.9, 34.3) * (1 - seg(t, 37.3, 38.0, smooth));
  const markS = lerp(1, 0.4, seg(t, 37.3, 38.0, smooth));
  const cardIn = seg(t, 37.3, 38.1, glide);
  const zoomOut = seg(t, 38.4, 41.6, smooth);
  const cs = lerp(2.5, 0.62, zoomOut);
  const cx = lerp(W / 2, 1130, zoomOut);
  const cy = lerp(H / 2, 870, zoomOut);
  return (
    <>
      <Mark x={W / 2} y={H / 2 - 10} h={260} draw={draw} fill={fill} alpha={markA} sc={markS} />
      {cardIn > 0.01 && (
        <div style={{position: 'absolute', left: 0, top: 0, width: W, height: H, opacity: cardIn}}>
          <Piece kind="flow" x={cx} y={cy} fill={1} st={seg(t, 38.6, 41, smooth)} s={cs * lerp(0.9, 1, cardIn)} alpha={1} />
        </div>
      )}
    </>
  );
};

const labelsAt = (t: number) =>
  seg(t, 8.2, 8.9, smooth) * (1 - seg(t, 10.1, 10.7, smooth)) + (t > 94 ? seg(t, 94.8, 95.6, smooth) * (1 - seg(t, 104.2, 104.9, smooth)) : 0);

const worldAlphaA = (t: number) => (t >= 38.4 && t < 40 ? seg(t, 38.4, 40, smooth) : 1);

/* ---------------------------------------------------------------- the film */

export const ImplFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const cam = camAt(t);
  const cut = t >= 33.2 && t < 33.7; // the one declared hard cut: everything off, black
  const worldOn = !cut && (t < 33.2 || t >= 38.4);

  const spineT = 6.6 + Math.max(0, t - 94.0); // beats 13 and 14 replay the scene-02 formation, then hold
  const rigidP = t < 34 ? seg(t, 26.0, 28.8, smooth) : 0;
  const sep = seg(t, 45.7, 47.0, smooth) - seg(t, 48.7, 49.6, smooth);
  const wfFade = seg(t, 12.7, 13.8, smooth);
  const worldDim = 1 - 0.8 * (seg(t, 56.6, 57.4, smooth) * (1 - seg(t, 62.4, 63.4, smooth)));

  // beat 3: a faint temporal sweep crosses the growing system
  const sweepX = lerp(-760, 760, seg(t, 14.0, 22.0, lin));
  const sweepA = win(t, 14.0, 22.0, 0.6, 1.4) * 0.5;

  // beat 6: analysis reticle
  const ret = {x: track(t, RET_X, smooth), y: track(t, RET_Y, smooth), size: track(t, RET_S, smooth), a: win(t, 42.3, 45.8, 0.3, 0.4)};

  // pieces around the workflow at the origin (beats 7 to 10)
  const collapse = seg(t, 76.5, 77.7, smooth);
  const pieceA = (i: number) => {
    const d = PIECES[i];
    const b = 52.4 + i * 0.3;
    const p = seg(t, b, b + 0.9, glide) * (1 - collapse);
    const src = NODE(d.src);
    return {d, p, x: lerp(src.x, d.x, p), y: lerp(src.y, d.y, p), s: lerp(0.12, 1, p), alpha: seg(t, b, b + 0.35) * (1 - collapse), fill: seg(t, d.fillAt, d.fillAt + 0.7, smooth)};
  };
  const stA: Record<string, number> = {
    quote: 0,
    approval: 0,
    perm: seg(t, 64.1, 65.1),
    record: seg(t, 64.4, 65.6),
  };

  // stage 4 composition (beats 11 to 16)
  const litAt = (i: number) => (t < 87.4 ? 0.36 : lerp(0.36, 1, seg(t, 87.4 + i * 0.25, 88.2 + i * 0.25, smooth)));
  const spawnD = (i: number) =>
    t < 100 ? seg(t, 80.6 + i * 0.15, 81.6 + i * 0.15, glide) * (1 - seg(t, 93.0, 93.6, smooth)) : seg(t, 104.4 + i * 0.38, 105.3 + i * 0.38, glide) * (1 - seg(t, 112.2, 113.2, smooth));
  const stD: Record<string, number> =
    t < 100
      ? {approval: seg(t, 87.0, 87.3), quote: seg(t, 88.6, 89.6), record: seg(t, 89.3, 90.6), perm: seg(t, 90.0, 91.0)}
      : {approval: 1, quote: 1, record: 1, perm: 1};

  // approval click in stage 4 (beat 11), in world coordinates
  const appr = PIECES.find((p) => p.id === 'approval')!;
  const btn = {x: D3 + appr.x - 70, y: appr.y + 57};
  const curX = track(t, [[85.2, D3 + 900], [86.9, btn.x]], smooth) - D3;
  const curY = track(t, [[85.2, 480], [86.9, btn.y]], smooth);
  const curA = seg(t, 85.2, 85.7) * (1 - seg(t, 88.0, 88.5));
  const curPress = seg(t, 86.95, 87.03) * (1 - seg(t, 87.05, 87.3));

  // beat 8 configuration panel and its cursor, in screen space
  const lt = t - 57.0;
  const panelS = 1.1;
  const dock = seg(t, 62.6, 63.6, smooth);
  const quoteSlot = PIECES[0];
  const panelScreenX = lerp(W / 2, W / 2 + cam.s * (quoteSlot.x - cam.x), dock);
  const panelScreenY = lerp(H / 2, H / 2 + cam.s * (quoteSlot.y - cam.y), dock);
  const panelAlpha = seg(t, 57.0, 57.6) * (1 - seg(t, 63.2, 63.7));
  const pcx = (px: number) => W / 2 - 300 * panelS + px * panelS;
  const pcy = (py: number) => H / 2 - 260 * panelS + py * panelS;
  const cKeysX: [number, number][] = [[0.9, 790], [1.7, 555], [2.45, 555], [2.95, 555], [4.5, 520], [5.5, 700]];
  const cKeysY: [number, number][] = [[0.9, 700], [1.7, 130], [2.45, 200], [2.95, 340], [4.5, 345], [5.5, 560]];
  const cxB8 = track(lt, cKeysX, smooth);
  const cyB8 = track(lt, cKeysY, smooth);
  const pulse = (c: number) => seg(lt, c, c + 0.08) * (1 - seg(lt, c + 0.1, c + 0.35));
  const curPressB8 = Math.max(pulse(1.72), pulse(2.47), pulse(2.97), pulse(4.57));
  const curAlphaB8 = seg(lt, 0.9, 1.3) * (1 - seg(lt, 5.4, 5.8));

  // beat 9: a generic dense interface, then it is removed piece by piece
  const tiles: {x: number; y: number; k: number; rm: number}[] = [];
  {
    let i = 0;
    for (const ty of [-440, -260, -80, 100, 280, 460, 640]) {
      for (const tx of [-640, -384, -128, 128, 384, 640]) {
        tiles.push({x: tx, y: ty, k: i, rm: hash(i)});
        i++;
      }
    }
  }
  const tileOn = (k: number) => seg(t, 65.0 + (k % 6) * 0.07 + Math.floor(k / 6) * 0.07, 65.7 + (k % 6) * 0.07 + Math.floor(k / 6) * 0.07, glide);
  const tileOut = (rm: number) => seg(t, 67.6 + rm * 3.9, 68.1 + rm * 3.9, smooth);

  // beat 10 stages
  const stageA = (k: number) => seg(t, 77.6 + k * 1.15, 78.5 + k * 1.15, glide);
  const stageHl = hlAt(42.3 + (t - 78.2));

  // approval energy (beat 11) and operation (beat 12)
  const dotsD: {edge: string; p: number}[] =
    t < 89
      ? ([['e1', 87.4], ['e2', 87.8], ['e3', 88.2], ['e4', 88.6]] as [string, number][]).map(([e, s]) => ({edge: e, p: (t - s) / 0.7}))
      : t < 93
        ? ([['e1', 89.2], ['e2', 89.7], ['e3', 90.2], ['e4', 90.7]] as [string, number][]).map(([e, s]) => ({edge: e, p: (t - s) / 0.8}))
        : [];
  const actD = (id: string) => {
    if (t < 87.4) return 0;
    const i = ['req', 'rev', 'dec', 'app', 'exe'].indexOf(id);
    if (t < 89) return i < 0 ? seg(t, 88.4, 88.9) * 0.6 : seg(t, 87.6 + i * 0.35, 88.1 + i * 0.35) * 0.7;
    if (t < 93) return id === 'exe' ? seg(t, 91.2, 92.6) : i < 0 ? 0.6 : seg(t, 89.2 + i * 0.4, 89.6 + i * 0.4);
    return 0;
  };

  const finalIn = seg(t, 112.6, 114.4, glide);
  const endFade = seg(t, 116.0, 116.5, lin);

  const pairHl = (src: string) => {
    const i = PIECES.findIndex((p) => p.src === src);
    return i < 0 ? 0 : win(t, 72.2 + i * 0.6, 74.4 + i * 0.6, 0.4, 0.5);
  };
  const hlA = (id: string) => {
    const a = t < 49.5 ? hlAt(t)(id) : 0;
    const b = t >= 49.5 && t < 53 ? improveHl(t, id) : 0;
    const c = t >= 62 && t < 65 ? configHl(t, id) : 0;
    const d = t >= 72 && t < 77 ? pairHl(id) : 0;
    return Math.max(a, b, c, d);
  };

  return (
    <AbsoluteFill style={{background: C.bg, fontFamily, overflow: 'hidden'}}>
      <Backdrop cam={cam} t={t} />

      {/* beat 1: background layer of the desk, held out of focus */}
      {t < 8.8 && (
        <Layer cam={cam} p={0.55} blur={5}>
          <DeskBack t={t} />
        </Layer>
      )}

      {!cut && (
        <Layer cam={cam} alpha={worldDim}>
          {t < 8.8 && <DeskMid t={t} />}

          {/* beat 2, scene 3: two other businesses, visibly different structures */}
          {t >= 10.4 && t < 14 && (
            <div style={{opacity: 1 - wfFade}}>
              <Workflow nodes={WF_B.nodes} edges={WF_B.edges} ctx={{t, alpha: 1}} />
              <Workflow nodes={WF_C.nodes} edges={WF_C.edges} ctx={{t, alpha: 1}} />
            </div>
          )}

          {/* beat 4: rigid containers under the forced workflow */}
          {t >= 23.4 && t < 33.2 && <Rigid t={t} />}

          {/* the business workflow (origin copy), from the first morph to the pull-back of beat 10 */}
          {worldOn && t >= 6.5 && t < 93 && (
            <>
              {t >= 14 && t < 22.8 && (
                <Svg>
                  <rect x={sweepX - 2} y={-520} width={4} height={1100} fill={C.acc} opacity={sweepA * 0.5} />
                  <rect x={sweepX - 90} y={-520} width={88} height={1100} fill={C.acc} opacity={sweepA * 0.06} />
                </Svg>
              )}
              <div style={{opacity: worldAlphaA(t)}}>
                <Workflow
                  nodes={NODES}
                  edges={EDGES}
                  ctx={{
                    t,
                    labels: labelsAt(t),
                    rigid: rigidP,
                    sep,
                    slot: slotOf,
                    vis: (id) => (t >= 23 && t < 33.5 && !SPINE_IDS.includes(id) ? 1 - seg(rigidP, 0.15, 0.6) : 1),
                    hl: hlA,
                    off: t >= 49.5 ? mergeOff(t) : undefined,
                    gap: lerp(10, 44, seg(t, 50.6, 51.4, smooth)),
                    planeLab: (i) => win(t, 46.2 + i * 0.4, 47.3 + i * 0.4, 0.25, 0.35),
                  }}
                />
                {t >= 42 && t < 46 && <Reticle x={ret.x} y={ret.y} size={ret.size} alpha={ret.a} />}
              </div>

              {/* beats 7 to 9: pieces spawn from the nodes they come from; generic modules come and go */}
              {t >= 52.3 && t < 78 && (
                <>
                  <Svg>
                    {PIECES.map((d, i) => {
                      const pa = pieceA(i);
                      const src = NODE(d.src);
                      return (
                        <React.Fragment key={d.id}>
                          <Link a={src} b={{x: pa.x, y: pa.y}} p={1} color="rgba(244,244,241,0.24)" w={1.8} dash="2 9" alpha={pa.alpha} />
                          <Link a={src} b={{x: d.x, y: d.y}} p={seg(t, 72.2 + i * 0.6, 72.9 + i * 0.6, smooth) * (1 - collapse)} color={C.acc} w={2.6} />
                        </React.Fragment>
                      );
                    })}
                  </Svg>
                  {t >= 65 && t < 72.9 && tiles.map((tl) => <Tile key={tl.k} x={tl.x} y={tl.y} a={tileOn(tl.k) * (1 - tileOut(tl.rm))} s={lerp(1, 0.85, tileOut(tl.rm))} k={tl.k} />)}
                  {PIECES.map((d, i) => {
                    const pa = pieceA(i);
                    if (pa.alpha < 0.01) return null;
                    const ring = win(t, 72.2 + i * 0.6, 74.4 + i * 0.6, 0.4, 0.5) * (1 - collapse);
                    return (
                      <React.Fragment key={d.id}>
                        <Piece kind={d.kind} x={pa.x} y={pa.y} fill={pa.fill} st={stA[d.id]} s={pa.s} alpha={pa.alpha} />
                        {ring > 0.02 && <div style={{position: 'absolute', left: pa.x, top: pa.y, width: 336, height: 236, transform: 'translate(-50%,-50%)', borderRadius: 26, border: `2.5px solid ${C.acc}`, opacity: ring}} />}
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            </>
          )}

          {/* beat 10: stages 2 to 4 laid out along the world to the right of the business */}
          {t >= 77.2 && t < 93.8 && (
            <>
              <StageLabels t={t} stageA={stageA} />
              <div style={{position: 'absolute', left: PITCH, top: 0, opacity: stageA(1)}}>
                <Workflow nodes={NODES} edges={EDGES} ctx={{t, hl: stageHl, alpha: 1}} />
                <Reticle x={track(t - 78.2 + 42.3, RET_X, smooth)} y={track(t - 78.2 + 42.3, RET_Y, smooth)} size={150} alpha={win(t, 78.2, 81.6, 0.3, 0.5) * stageA(1)} />
              </div>
              <div style={{position: 'absolute', left: PITCH * 2, top: 0, opacity: stageA(2)}}>
                <div style={{opacity: 0.25}}>
                  <Workflow nodes={NODES} edges={EDGES} ctx={{t, alpha: 1}} />
                </div>
                {PIECES.map((d, i) => (
                  <Piece key={d.id} kind={d.kind} x={d.x} y={d.y} fill={0} alpha={seg(t, 79.4 + i * 0.12, 80.1 + i * 0.12)} />
                ))}
              </div>
              <div style={{position: 'absolute', left: D3, top: 0}}>
                <Stage4 t={t} lit={litAt} spawn={spawnD} st={stD} dots={dotsD} act={actD} cur={{x: curX, y: curY, press: curPress, a: curA}} />
              </div>
            </>
          )}

          {/* beats 13 to 16: scene-02 replay, ghost, rebuild, final */}
          {t >= 93.8 && t < 114.5 && (
            <div style={{position: 'absolute', left: D3, top: 0}}>
              <StageSpine t={t} spineT={spineT} labels={labelsAt(t)} spawn={spawnD} st={stD} />
            </div>
          )}
        </Layer>
      )}

      {/* beat 1: foreground layer, strongly defocused */}
      {t < 8 && (
        <Layer cam={cam} p={1.35} blur={9}>
          <DeskFront t={t} />
        </Layer>
      )}

      {!cut && <Grade t={t} vignette={0.5} />}

      {/* punctuation words: dissolve back into the workflow they describe */}
      <Statement lines={["Your way", "of working."]} inP={seg(t, 8.6, 9.4, glide)} outP={seg(t, 10.0, 10.7, smooth)} />
      <Statement lines={["Understand."]} inP={seg(t, 43.1, 43.9, glide)} outP={seg(t, 44.8, 45.4, smooth)} />
      <Statement lines={["Configure."]} inP={seg(t, 56.0, 56.8, glide)} outP={seg(t, 57.6, 58.3, smooth)} />
      <Statement lines={["Propose."]} inP={seg(t, 82.0, 82.8, glide)} outP={seg(t, 83.6, 84.3, smooth)} />
      <Statement lines={["Approve."]} inP={seg(t, 85.9, 86.7, glide)} outP={seg(t, 87.8, 88.5, smooth)} />
      <Statement lines={["Implement."]} inP={seg(t, 89.4, 90.2, glide)} outP={seg(t, 91.6, 92.4, smooth)} />

      {/* beat 8: configuration panel assembled field by field, then docked into the quotation slot */}
      {t >= 56.9 && t < 63.8 && (
        <>
          <ConfigPanel lt={lt} x={panelScreenX} y={panelScreenY} s={lerp(panelS, 0.55, dock)} alpha={panelAlpha} />
          <Cursor x={pcx(cxB8)} y={pcy(cyB8)} press={curPressB8} alpha={curAlphaB8} />
        </>
      )}

      {/* beat 5: the mark is traced, becomes a Verity fragment, which zooms out into a small layer */}
      {t >= 33.7 && t < 42 && <Beat5 t={t} />}

      {/* final frame */}
      {t >= 112.4 && (
        <>
          <Word x={W / 2} y={H / 2 - 40} size={150} alpha={finalIn} weight={200} spacing={lerp(0.52, 0.36, finalIn) - 0.025 * seg(t, 114.2, 116.2, lin)}>
            VERITY
          </Word>
          <Word x={W / 2} y={H / 2 + 92} size={30} alpha={seg(t, 113.4, 114.6)} weight={400} spacing={0.3} color={C.mute}>
            RUN BUSINESS YOUR WAY.
          </Word>
        </>
      )}

      <AbsoluteFill style={{background: '#000', opacity: endFade, pointerEvents: 'none'}} />
    </AbsoluteFill>
  );
};
