import React from 'react';
import {C, glide, lerp, seg, smooth} from './tokens';
import type {Cat, GEdge, GNode} from './graph';
import {fontFamily} from '../engine';

/** Renders a workflow graph in world coordinates (the parent Layer applies the camera). Nodes are light Verity-style
 *  cards on the dark world, so the business reads in the same material as the product UI. Blue marks state only.
 *  Every visual state is a pure function of time plus the optional controls in WfCtx. */
export type WfCtx = {
  t: number;
  labels?: number;
  rigid?: number;
  sep?: number;
  alpha?: number;
  hl?: (id: string) => number;
  act?: (id: string) => number;
  slot?: (id: string) => {x: number; y: number} | undefined;
  vis?: (id: string) => number;
  off?: (n: GNode) => {x: number; y: number};
  gap?: number;
  dots?: {edge: string; p: number}[];
  planeLab?: (i: number) => number;
};

const CATS: Cat[] = ['step', 'role', 'decision', 'rule'];
const PLANES = ['PROCESS', 'PEOPLE', 'DECISIONS', 'RULES'];
const YM = 20;
export const mapY = (cat: Cat, y: number, sep: number) => lerp(y, (CATS.indexOf(cat) - 1.5) * 235 + (y - YM) * 0.3, sep);

const mix = (hl: number, base: string) => (hl > 0.01 ? `color-mix(in srgb, ${C.acc} ${Math.round(hl * 100)}%, ${base})` : base);

const nodeVis = (n: GNode, t: number) => seg(t, n.born, n.born + 0.6, glide) * (n.die !== undefined ? 1 - seg(t, n.die, n.die + 0.6, smooth) : 1);
const edgeDraw = (e: GEdge, t: number) => seg(t, e.born, e.born + 0.8, smooth);
const edgeAlive = (e: GEdge, t: number) => (e.die !== undefined ? 1 - seg(t, e.die, e.die + 0.5, smooth) : 1);

type P = {x: number; y: number};
const bez = (a: P, c1: P, c2: P, b: P, k: number): P => {
  const u = 1 - k;
  return {
    x: u * u * u * a.x + 3 * u * u * k * c1.x + 3 * u * k * k * c2.x + k * k * k * b.x,
    y: u * u * u * a.y + 3 * u * u * k * c1.y + 3 * u * k * k * c2.y + k * k * k * b.y,
  };
};
const geom = (a: P, b: P, mode: GEdge['mode'], rigid: number) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  let c1: P;
  let c2: P;
  if (mode === 'loop') {
    c1 = {x: a.x, y: a.y - 250};
    c2 = {x: b.x, y: b.y - 250};
  } else if (Math.abs(dx) >= Math.abs(dy) * 0.6) {
    c1 = {x: a.x + dx * 0.5, y: a.y};
    c2 = {x: b.x - dx * 0.5, y: b.y};
  } else {
    c1 = {x: a.x, y: a.y + dy * 0.5};
    c2 = {x: b.x, y: b.y - dy * 0.5};
  }
  if (rigid > 0) {
    c1 = {x: lerp(c1.x, a.x + dx / 3, rigid), y: lerp(c1.y, a.y + dy / 3, rigid)};
    c2 = {x: lerp(c2.x, a.x + (dx * 2) / 3, rigid), y: lerp(c2.y, a.y + (dy * 2) / 3, rigid)};
  }
  return {a, c1, c2, b};
};

const FACE = '#f7f8fa';
const FACE_LINE = 'rgba(15,17,21,0.10)';
const SOFT = '#c9ced8';
const MUTED = '#6b7078';

const NodeShape: React.FC<{n: GNode; hl: number; act: number; rigid: number; gap: number; labels: number; v: number; sc: number; x: number; y: number}> = ({
  n, hl, act, rigid, gap, labels, v, sc, x, y,
}) => {
  const h = Math.max(hl, act);
  const face = h > 0.01 ? mix(h * 0.1, FACE) : FACE;
  const stroke = h > 0.01 ? mix(h, FACE_LINE) : FACE_LINE;
  const sw = 1.5 + h * 3;
  const detail = 1 - rigid * 0.8;
  const k = sc * (0.86 + 0.14 * v);
  const w = n.w;
  const hh = n.h;
  let body: React.ReactNode = null;
  let labelY = hh / 2 + 40;
  switch (n.kind) {
    case 'circle':
      body = (
        <>
          <rect x={-w / 2} y={-hh / 2} width={w} height={hh} rx={lerp(w / 2, 8, rigid)} fill={face} stroke={stroke} strokeWidth={sw} />
          <circle r={w * 0.32} fill="none" stroke={SOFT} strokeWidth={1.8} strokeDasharray="3 7" opacity={detail} />
          <circle r={5} fill={mix(h, '#0f1115')} />
        </>
      );
      break;
    case 'block':
      body = (
        <>
          <rect x={-w / 2} y={-hh / 2} width={w} height={hh} rx={lerp(20, 5, rigid)} fill={face} stroke={stroke} strokeWidth={sw} />
          <g opacity={detail} stroke={SOFT} strokeWidth={4} strokeLinecap="round">
            <line x1={-w * 0.28} x2={w * 0.28} y1={-hh * 0.16} y2={-hh * 0.16} />
            <line x1={-w * 0.28} x2={w * 0.1} y1={0} y2={0} />
            <line x1={-w * 0.28} x2={w * 0.2} y1={hh * 0.16} y2={hh * 0.16} />
          </g>
        </>
      );
      break;
    case 'diamond': {
      const rot = lerp(45, 0, rigid);
      labelY = hh * 0.707 + 38;
      body = (
        <>
          <rect x={-w / 2} y={-hh / 2} width={w} height={hh} rx={lerp(10, 5, rigid)} transform={`rotate(${rot})`} fill={face} stroke={stroke} strokeWidth={sw} />
          <rect x={-w * 0.2} y={-hh * 0.2} width={w * 0.4} height={hh * 0.4} rx={3} transform={`rotate(${rot})`} fill="none" stroke={SOFT} strokeWidth={2} opacity={detail} />
        </>
      );
      break;
    }
    case 'ring':
      body = (
        <>
          <rect x={-w / 2} y={-hh / 2} width={w} height={hh} rx={lerp(w / 2, 8, rigid)} fill={face} stroke={stroke} strokeWidth={sw} />
          <circle r={w * 0.34} fill="none" stroke={SOFT} strokeWidth={1.8} strokeDasharray="2 6" opacity={detail} />
          <path d={`M ${-w * 0.12} ${w * 0.01} L ${-w * 0.02} ${w * 0.11} L ${w * 0.14} ${-w * 0.1}`} fill="none" stroke={mix(h, MUTED)} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={0.5 + h * 0.5} />
        </>
      );
      break;
    case 'wide':
      body = (
        <>
          <rect x={-w / 2} y={-hh / 2} width={w} height={hh} rx={lerp(26, 6, rigid)} fill={face} stroke={stroke} strokeWidth={sw} />
          <line x1={-w * 0.3} x2={w * 0.3} y1={hh * 0.16} y2={hh * 0.16} stroke="#e4e7ec" strokeWidth={6} strokeLinecap="round" />
          <line x1={-w * 0.3} x2={-w * 0.3 + w * 0.6 * act} y1={hh * 0.16} y2={hh * 0.16} stroke={C.acc} strokeWidth={6} strokeLinecap="round" />
          <circle cx={-w * 0.3} cy={-hh * 0.18} r={5} fill={SOFT} opacity={detail} />
          <line x1={-w * 0.22} x2={w * 0.1} y1={-hh * 0.18} y2={-hh * 0.18} stroke={SOFT} strokeWidth={4} strokeLinecap="round" opacity={detail} />
        </>
      );
      break;
    case 'role':
      labelY = hh / 2 + 34;
      body = (
        <>
          <circle r={w / 2} fill={face} stroke={stroke} strokeWidth={sw} />
          <circle cy={-w * 0.08} r={w * 0.14} fill="none" stroke={mix(h, MUTED)} strokeWidth={2.6} />
          <path d={`M ${-w * 0.23} ${w * 0.21} Q 0 ${-w * 0.02} ${w * 0.23} ${w * 0.21}`} fill="none" stroke={mix(h, MUTED)} strokeWidth={2.6} strokeLinecap="round" />
        </>
      );
      break;
    case 'rec':
      body = (
        <>
          <rect x={-w / 2} y={-hh / 2} width={w} height={hh} rx={9} fill={face} stroke={stroke} strokeWidth={sw} />
          <line x1={-w * 0.28} x2={w * 0.28} y1={-hh * 0.14} y2={-hh * 0.14} stroke={SOFT} strokeWidth={3.4} strokeLinecap="round" />
          <line x1={-w * 0.28} x2={w * 0.1} y1={hh * 0.14} y2={hh * 0.14} stroke={SOFT} strokeWidth={3.4} strokeLinecap="round" />
        </>
      );
      break;
    case 'rule':
      body = (
        <g fill="none" stroke={mix(h, C.mute)} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M -9 -17 H -21 V 17 H -9" />
          <path d="M 9 -17 H 21 V 17 H 9" />
          <circle r={3.6} fill={mix(h, C.mute)} stroke="none" />
        </g>
      );
      break;
    case 'gate': {
      const g = gap / 2;
      body = (
        <g stroke={mix(h, 'rgba(244,247,251,0.8)')} strokeWidth={4} strokeLinecap="round">
          <line x1={-g} x2={-g} y1={-hh / 2} y2={hh / 2} />
          <line x1={g} x2={g} y1={-hh / 2} y2={hh / 2} />
        </g>
      );
      break;
    }
  }
  const solid = n.kind !== 'rule' && n.kind !== 'gate';
  const showLabel = n.label && labels > 0.01;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`} opacity={v} style={solid ? {filter: 'drop-shadow(0 14px 26px rgba(0,0,0,0.55))'} : undefined}>
      {body}
      {showLabel && (
        <text y={labelY} textAnchor="middle" fill={C.mute} fontFamily={fontFamily} fontSize={20} fontWeight={500} letterSpacing={3.6} opacity={labels}>
          {n.label}
        </text>
      )}
    </g>
  );
};

export const Workflow: React.FC<{nodes: GNode[]; edges: GEdge[]; ctx: WfCtx}> = ({nodes, edges, ctx}) => {
  const {t, labels = 0, rigid = 0, sep = 0, alpha = 1, hl = () => 0, act = () => 0, slot, vis, off, gap = 12, dots = [], planeLab} = ctx;
  const base = new Map<string, P>();
  const byId = new Map<string, GNode>();
  nodes.forEach((n) => {
    byId.set(n.id, n);
    let x = n.x;
    let y = n.y;
    if (off) {
      const o = off(n);
      x += o.x;
      y += o.y;
    }
    const s = slot?.(n.id);
    if (s && rigid > 0) {
      x = lerp(x, s.x, rigid);
      y = lerp(y, s.y, rigid);
    }
    base.set(n.id, {x, y});
  });
  const shown = (id: string) => {
    const n = byId.get(id);
    return n ? nodeVis(n, t) * (vis ? vis(id) : 1) : 0;
  };
  const stepPos = (id: string): P => {
    const p = base.get(id)!;
    return {x: p.x, y: mapY('step', p.y, sep)};
  };

  return (
    <svg width={1} height={1} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
      {sep > 0.01 &&
        PLANES.map((label, i) => (
          <g key={label} opacity={sep * alpha}>
            <rect
              x={-790}
              y={(i - 1.5) * 235 - 100}
              width={1580}
              height={200}
              rx={26}
              fill="rgba(244,247,251,0.04)"
              stroke={mix(planeLab ? planeLab(i) * 0.9 : 0, C.hair)}
              strokeWidth={1.6 + (planeLab ? planeLab(i) : 0) * 1.6}
            />
            <text x={-760} y={(i - 1.5) * 235 - 62} fill={C.mute} fontFamily={fontFamily} fontSize={22} fontWeight={500} letterSpacing={4} opacity={planeLab ? planeLab(i) : 1}>
              {label}
            </text>
          </g>
        ))}
      <g opacity={alpha}>
        {edges.map((e) => {
          const a = base.get(e.a);
          const b = base.get(e.b);
          if (!a || !b) return null;
          const draw = edgeDraw(e, t);
          const alive = edgeAlive(e, t) * Math.min(shown(e.a) > 0 ? 1 : 0, shown(e.b) > 0 ? 1 : 0) * (vis ? Math.min(vis(e.a), vis(e.b)) : 1);
          if (draw <= 0.001 || alive <= 0.001) return null;
          const h = hl(e.id);
          if (e.mode === 'link') {
            const pa = {x: a.x, y: mapY(byId.get(e.a)!.cat, a.y, sep)};
            const pb = {x: b.x, y: mapY(byId.get(e.b)!.cat, b.y, sep)};
            return (
              <line
                key={e.id}
                x1={pa.x}
                y1={pa.y}
                x2={lerp(pa.x, pb.x, draw)}
                y2={lerp(pa.y, pb.y, draw)}
                stroke={mix(h, 'rgba(244,247,251,0.42)')}
                strokeWidth={2.4 + h}
                strokeDasharray="2 10"
                strokeLinecap="round"
                opacity={alive * (1 - sep)}
              />
            );
          }
          const g = geom(stepPos(e.a), stepPos(e.b), e.mode, rigid);
          const d = `M ${g.a.x} ${g.a.y} C ${g.c1.x} ${g.c1.y} ${g.c2.x} ${g.c2.y} ${g.b.x} ${g.b.y}`;
          const loop = e.mode === 'loop';
          return (
            <path
              key={e.id}
              d={d}
              pathLength={1}
              strokeDasharray="1 1"
              strokeDashoffset={1 - draw}
              fill="none"
              stroke={mix(h, loop ? 'rgba(244,247,251,0.3)' : 'rgba(244,247,251,0.62)')}
              strokeWidth={(loop ? 2.2 : 3) + h * 1.6}
              strokeLinecap="round"
              opacity={alive * (loop ? 1 - sep : 1)}
            />
          );
        })}
        {dots.map((d) => {
          const e = edges.find((x) => x.id === d.edge);
          if (!e) return null;
          const a = base.get(e.a);
          const b = base.get(e.b);
          if (!a || !b) return null;
          const g = geom(stepPos(e.a), stepPos(e.b), e.mode, rigid);
          const p = bez(g.a, g.c1, g.c2, g.b, Math.min(1, Math.max(0, d.p)));
          const o = Math.sin(Math.min(1, Math.max(0, d.p)) * Math.PI);
          return <circle key={d.edge} cx={p.x} cy={p.y} r={9} fill={C.acc} opacity={Math.min(1, o * 3)} />;
        })}
        {nodes.map((n) => {
          const v = shown(n.id);
          if (v <= 0.001) return null;
          const p = base.get(n.id)!;
          return (
            <NodeShape
              key={n.id}
              n={n}
              hl={hl(n.id)}
              act={act(n.id)}
              rigid={rigid}
              gap={gap}
              labels={labels}
              v={v}
              sc={lerp(1, 0.82, sep)}
              x={p.x}
              y={mapY(n.cat, p.y, sep)}
            />
          );
        })}
      </g>
    </svg>
  );
};
