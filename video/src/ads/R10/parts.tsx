import React from 'react';
import {Mark} from '../../trailer/ui';
import {inOut, lerp, outX, seg} from '../../shared/timeline';
import {fontFamily} from '../kit';
import {DARK, LABEL} from '../stage';
import {Glyph, type GlyphKind} from '../R09/props';

/** R10 parts: the landscape (1920 x 1080) room, the small lockup, and the diagram objects that live on the drafting sheet
 *  and in the product zone. The grid is the film-art-direction one: text column x 120 to 840, product zone x 880 to 1800,
 *  headline cap line y 250 (the top of the product zone), 96 px top and bottom margins. */

export const W = 1920;
export const H = 1080;
export const SHEET = {x: 880, y: 190, w: 920, h: 700};
const WALL = 800;

type Pt = [number, number];

/** The room at night, landscape: deep wall, darker floor, one faint key light from the upper right. */
export const DarkRoomWide: React.FC<{shaft: number; children: React.ReactNode}> = ({shaft, children}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', background: '#080b11', ...DARK}}>
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: WALL, background: 'radial-gradient(ellipse 100% 95% at 80% 2%, #1a2230 0%, #0f141d 55%, #0a0d14 100%)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: WALL, bottom: 0, background: 'linear-gradient(180deg, #0a0d14 0%, #0d1119 45%, #10151e 100%)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: WALL - 1, height: 2, background: 'rgba(244,247,251,0.07)', filter: 'blur(1px)'}} />
    <div style={{position: 'absolute', left: 1000 + shaft, top: -300, width: 520, height: 2000, transform: 'rotate(24deg)', transformOrigin: '50% 0', background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 46%, rgba(255,255,255,0) 100%)', filter: 'blur(26px)'}} />
    {children}
  </div>
);

/** Small lockup on the top margin, the left edge of the text column. */
export const SmallLockup: React.FC = () => (
  <div style={{position: 'absolute', left: 120, top: 76, height: 40, display: 'flex', alignItems: 'center', gap: 14}}>
    <Mark height={34} color="var(--ink)" />
    <div style={{fontSize: 38, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1}}>verity</div>
  </div>
);

/* ---------- drawn workflow figures (sheet coordinates) ---------- */

/** Nodes and links drawn on. `draw` 0..1 strokes the links out in order and brings the nodes in as the path reaches them. */
export const Flow: React.FC<{nodes: Pt[]; links: [number, number][]; draw?: number; nw?: number; nh?: number; accent?: boolean; fade?: number}> = ({nodes, links, draw = 1, nw = 72, nh = 44, accent, fade = 1}) => {
  const step = (i: number, n: number) => Math.min(1, Math.max(0, (draw - (i / n) * 0.6) / 0.4));
  return (
    <svg width={SHEET.w} height={SHEET.h} viewBox={`0 0 ${SHEET.w} ${SHEET.h}`} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', opacity: fade}}>
      {links.map(([a, b], i) => {
        const len = Math.hypot(nodes[b][0] - nodes[a][0], nodes[b][1] - nodes[a][1]);
        const s = step(i, links.length);
        return <path key={i} d={`M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}`} stroke={accent ? 'var(--accent)' : 'rgba(15,17,21,0.34)'} strokeWidth={accent ? 3 : 2.5} strokeLinecap="round" fill="none" strokeDasharray={len} strokeDashoffset={len * (1 - s)} opacity={s > 0 ? 1 : 0} />;
      })}
      {nodes.map(([cx, cy], i) => (
        <rect key={i} x={cx - nw / 2} y={cy - nh / 2} width={nw} height={nh} rx={12} fill="#fff" stroke={accent ? 'var(--accent)' : 'rgba(15,17,21,0.24)'} strokeWidth={2} opacity={step(i, nodes.length)} />
      ))}
    </svg>
  );
};

const off = (nodes: Pt[], dx: number, dy: number): Pt[] => nodes.map(([x, y]) => [x + dx, y + dy]);
export const FIGS: {nodes: Pt[]; links: [number, number][]; at: number}[] = [
  {nodes: off([[40, 100], [170, 100], [300, 40], [300, 160], [430, 100]], 70, 90), links: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]], at: 0.6},
  {nodes: off([[30, 90], [150, 90], [270, 90], [390, 40], [390, 140]], 70, 400), links: [[0, 1], [1, 2], [2, 3], [2, 4]], at: 1.3},
  {nodes: off([[160, 30], [290, 190], [30, 190]], 560, 70), links: [[0, 1], [1, 2], [2, 0]], at: 2.0},
  {nodes: off([[160, 100], [40, 30], [280, 30], [40, 180], [280, 180]], 560, 420), links: [[0, 1], [0, 2], [0, 3], [0, 4]], at: 2.7},
];

/** Beat 1-2: four businesses, four different shapes. */
export const Figures: React.FC<{t: number}> = ({t}) => {
  const fade = 1 - seg(t, 6.5, 7.1, inOut);
  if (fade <= 0) return null;
  return (
    <>
      {FIGS.map((f, i) => (
        <Flow key={i} nodes={f.nodes} links={f.links} draw={seg(t, f.at, f.at + 1.0, inOut)} fade={fade} />
      ))}
    </>
  );
};

/* ---------- beat 3: the four things that make a way of working ---------- */

const ROWS: {label: string; kind: GlyphKind; a: number}[] = [
  {label: 'Processes', kind: 'flow', a: 6.88},
  {label: 'Approvals', kind: 'list', a: 7.62},
  {label: 'Teams', kind: 'team', a: 8.36},
  {label: 'Decisions', kind: 'loop', a: 8.94},
];
const ROW_Y = (i: number) => 130 + i * 118;

export const Rows: React.FC<{t: number}> = ({t}) => {
  const o = seg(t, 6.8, 7.2) * (1 - seg(t, 12.1, 12.6, inOut));
  if (o <= 0) return null;
  const reach = ROW_Y(0) + (ROW_Y(3) - ROW_Y(0)) * seg(t, 7.0, 9.4, inOut);
  const note = seg(t, 9.8, 10.6, outX);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: o}}>
      <svg width={SHEET.w} height={SHEET.h} style={{position: 'absolute', left: 0, top: 0}}>
        <path d={`M100 ${ROW_Y(0)} V${reach}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" />
        {ROWS.map((r, i) => (
          <circle key={r.label} cx={100} cy={ROW_Y(i)} r={9} fill="#fff" stroke="var(--accent)" strokeWidth={3} opacity={seg(t, r.a, r.a + 0.3)} />
        ))}
        <path d={`M90 590 H${90 + 740 * note}`} stroke="rgba(15,17,21,0.3)" strokeWidth={1.5} />
      </svg>
      {ROWS.map((r, i) => {
        const p = seg(t, r.a, r.a + 0.6, outX);
        return (
          <div key={r.label} style={{position: 'absolute', left: 150, top: ROW_Y(i) - 36 + Math.round((1 - p) * 20), height: 72, display: 'flex', alignItems: 'center', gap: 28, opacity: p}}>
            <Glyph kind={r.kind} size={56} />
            <div style={{fontSize: 64, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1}}>{r.label}</div>
          </div>
        );
      })}
      <div style={{position: 'absolute', left: 90, top: 612, ...LABEL, fontSize: 24, color: 'var(--ink-muted)', opacity: note}}>None of it is defined in a day</div>
    </div>
  );
};

/* ---------- beat 4: years of settling ---------- */

const YEAR_NODES: Pt[] = [[110, 470], [285, 420], [285, 500], [460, 390], [460, 470], [635, 340], [635, 440], [635, 520], [810, 300]];
const YEAR_LINKS: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [4, 7], [5, 8], [6, 8]];

export const Timeline: React.FC<{t: number}> = ({t}) => {
  const o = seg(t, 12.45, 12.85) * (1 - seg(t, 14.95, 15.45, inOut));
  if (o <= 0) return null;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: o}}>
      <svg width={SHEET.w} height={SHEET.h} style={{position: 'absolute', left: 0, top: 0}}>
        <path d={`M90 590 H${90 + 740 * seg(t, 12.5, 14.6, inOut)}`} stroke="rgba(15,17,21,0.4)" strokeWidth={1.5} />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${110 + i * 175} 584 V598`} stroke="rgba(15,17,21,0.5)" strokeWidth={1.5} opacity={seg(t, 12.55 + i * 0.5, 12.85 + i * 0.5)} />
        ))}
      </svg>
      <Flow nodes={YEAR_NODES} links={YEAR_LINKS} draw={seg(t, 12.55, 14.8, inOut)} />
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{position: 'absolute', left: 110 + i * 175 - 60, top: 612, width: 120, textAlign: 'center', ...LABEL, fontSize: 22, color: 'var(--ink-muted)', opacity: seg(t, 12.55 + i * 0.5, 13.05 + i * 0.5)}}>Year {i + 1}</div>
      ))}
    </div>
  );
};

/* ---------- beat 5: the rigid template, and the business forced into it ---------- */

const CELL = {w: 180, h: 110};
const cellC = (c: number, r: number): Pt => [145 + c * 210, 145 + r * 136];
const FORCED: Pt[] = [cellC(0, 1), cellC(1, 1), cellC(2, 0), cellC(2, 2), cellC(3, 1)];
const FREE: Pt[] = [[110, 590], [270, 560], [440, 540], [440, 625], [640, 585]];
const BIZ_LINKS: [number, number][] = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]];

export const Template: React.FC<{t: number}> = ({t}) => {
  const o = seg(t, 15.3, 15.7) * (1 - seg(t, 22.05, 22.2));
  if (o <= 0) return null;
  const grid = seg(t, 15.4, 16.5, outX);
  // The business first presses toward the template as she says "software, instead of understanding the system", then is forced in.
  const m = 0.28 * seg(t, 17.95, 18.85, inOut) + 0.72 * seg(t, 19.2, 21.7, inOut);
  const nodes = FREE.map(([x, y], i) => [lerp(x, FORCED[i][0], m), lerp(y, FORCED[i][1], m)] as Pt);
  const x = seg(t, 21.7, 22.0, outX);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: o}}>
      <svg width={SHEET.w} height={SHEET.h} style={{position: 'absolute', left: 0, top: 0}}>
        {[0, 1, 2, 3].map((c) =>
          [0, 1, 2].map((r) => {
            const [cx, cy] = cellC(c, r);
            return <rect key={`${c}${r}`} x={cx - CELL.w / 2} y={cy - CELL.h / 2} width={CELL.w} height={CELL.h} rx={14} fill="rgba(15,17,21,0.025)" stroke="rgba(15,17,21,0.3)" strokeWidth={2} strokeDasharray="10 8" opacity={grid} />;
          }),
        )}
        {BIZ_LINKS.map(([a, b], i) => {
          const mx = (nodes[a][0] + nodes[b][0]) / 2;
          const my = (nodes[a][1] + nodes[b][1]) / 2;
          return <path key={i} d={`M${mx - 9} ${my - 9} l18 18 M${mx + 9} ${my - 9} l-18 18`} stroke="rgba(15,17,21,0.55)" strokeWidth={2.5} strokeLinecap="round" opacity={x} />;
        })}
      </svg>
      <Flow nodes={nodes} links={BIZ_LINKS} draw={seg(t, 16.4, 17.8, inOut)} nw={lerp(86, 150, m)} nh={lerp(52, 76, m)} />
      <div style={{position: 'absolute', left: 55, top: 44, ...LABEL, fontSize: 21, color: 'var(--ink-muted)', opacity: seg(t, 15.6, 16.2)}}>The software's template</div>
      <div style={{position: 'absolute', left: 55, top: 664, ...LABEL, fontSize: 21, color: 'var(--ink-muted)', opacity: seg(t, 16.6, 17.2) * (1 - m)}}>Your business</div>
    </div>
  );
};

/* ---------- beat 11-12: the business keeps its own shape, the software forms around it ---------- */

const OWN: Pt[] = [[190, 360], [380, 360], [570, 250], [570, 470], [760, 360]];

/** The soft container: a union of fat strokes, an accent ring under a sheet-coloured fill, so it reads as one organic shape. */
const Hull: React.FC<{p: number}> = ({p}) => {
  const shapes = (width: number, fill: string) => (
    <g fill={fill} stroke={fill} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
      {BIZ_LINKS.map(([a, b], i) => (
        <line key={i} x1={OWN[a][0]} y1={OWN[a][1]} x2={OWN[b][0]} y2={OWN[b][1]} />
      ))}
      {OWN.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={width / 2} stroke="none" />
      ))}
    </g>
  );
  return (
    <svg width={SHEET.w} height={SHEET.h} style={{position: 'absolute', left: 0, top: 0, opacity: p, transformOrigin: '475px 360px', transform: `scale(${0.94 + 0.06 * p})`}}>
      <g opacity={0.55}>{shapes(190, 'var(--accent)')}</g>
      {shapes(182, '#FBFCFD')}
      <g opacity={0.07}>{shapes(182, 'var(--accent)')}</g>
    </svg>
  );
};

export const OwnShape: React.FC<{t: number}> = ({t}) => {
  const o = seg(t, 54.95, 55.4) * (1 - seg(t, 65.5, 65.8));
  if (o <= 0) return null;
  const grid = seg(t, 55.5, 56.3, outX) * (1 - seg(t, 57.7, 58.4, inOut));
  const strike = seg(t, 56.5, 57.2, inOut);
  const hull = seg(t, 62.9, 64.4, inOut);
  const trace = seg(t, 58.5, 60.4, inOut);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: o}}>
      <svg width={SHEET.w} height={SHEET.h} style={{position: 'absolute', left: 0, top: 0, opacity: grid}}>
        {[0, 1, 2, 3].map((c) =>
          [0, 1, 2].map((r) => {
            const [cx, cy] = [145 + c * 210, 190 + r * 160];
            return <rect key={`${c}${r}`} x={cx - 90} y={cy - 60} width={180} height={120} rx={14} fill="rgba(15,17,21,0.025)" stroke="rgba(15,17,21,0.3)" strokeWidth={2} strokeDasharray="10 8" />;
          }),
        )}
        <path d={`M60 90 L${60 + 800 * strike} ${90 + 520 * strike}`} stroke="rgba(15,17,21,0.6)" strokeWidth={3} strokeLinecap="round" />
        <path d={`M860 90 L${860 - 800 * strike} ${90 + 520 * strike}`} stroke="rgba(15,17,21,0.6)" strokeWidth={3} strokeLinecap="round" />
      </svg>
      <Hull p={hull} />
      <Flow nodes={OWN} links={BIZ_LINKS} draw={seg(t, 55.0, 56.4, inOut)} nw={110} nh={60} />
      {trace > 0 ? <Flow nodes={OWN} links={BIZ_LINKS} draw={trace} nw={110} nh={60} accent /> : null}
      <div style={{position: 'absolute', left: 55, top: 52, ...LABEL, fontSize: 21, color: 'var(--ink-muted)', opacity: seg(t, 63.8, 64.5, outX)}}>Your software</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 618, textAlign: 'center', ...LABEL, fontSize: 21, color: 'var(--ink-muted)', opacity: seg(t, 58.6, 59.3)}}>Your way of working</div>
    </div>
  );
};

/* ---------- beat 7: mapping the business ---------- */

const MAP_CARDS: {y: number; kind: GlyphKind; label: string; a: number}[] = [
  {y: 210, kind: 'flow', label: 'How the work happens', a: 29.0},
  {y: 390, kind: 'team', label: 'Where decisions are made', a: 30.1},
  {y: 570, kind: 'loop', label: 'What can be improved', a: 31.8},
  {y: 750, kind: 'list', label: 'What is actually required', a: 33.2},
];
const MAP_NODE = {x: 1010, y: 540, r: 92};

export const BusinessMap: React.FC<{t: number}> = ({t}) => {
  const c = seg(t, 28.2, 28.9, outX);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <svg width={W} height={H} style={{position: 'absolute', left: 0, top: 0}}>
        {MAP_CARDS.map((k, i) => {
          const p = seg(t, k.a + 0.2, k.a + 0.8, inOut);
          const ty = k.y + 64;
          const len = 480; // longer than any of the four curves, so the dash never repeats
          return <path key={i} d={`M${MAP_NODE.x + MAP_NODE.r} ${MAP_NODE.y} C${MAP_NODE.x + 190} ${MAP_NODE.y}, ${MAP_NODE.x + 190} ${ty}, 1260 ${ty}`} fill="none" stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} opacity={p > 0 ? 1 : 0} />;
        })}
        <circle cx={MAP_NODE.x} cy={MAP_NODE.y} r={MAP_NODE.r * (0.82 + 0.18 * c)} fill="var(--surface)" stroke="var(--accent)" strokeWidth={3} opacity={c} />
        <text x={MAP_NODE.x} y={MAP_NODE.y - 4} textAnchor="middle" fontSize={30} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>Your</text>
        <text x={MAP_NODE.x} y={MAP_NODE.y + 32} textAnchor="middle" fontSize={30} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>business</text>
      </svg>
      {MAP_CARDS.map((k) => {
        const p = seg(t, k.a, k.a + 0.6, outX);
        return (
          <div key={k.label} style={{position: 'absolute', left: 1260, top: k.y + Math.round((1 - p) * 20), width: 540, height: 128, borderRadius: 18, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 24, padding: '0 32px', color: '#0f1115', opacity: p}}>
            <Glyph kind={k.kind} size={52} />
            <div style={{fontSize: 32, fontWeight: 400, letterSpacing: '-0.02em', whiteSpace: 'nowrap'}}>{k.label}</div>
          </div>
        );
      })}
    </div>
  );
};

/* ---------- beat 8: configured, with nothing extra ---------- */

const EXTRAS = ['Unused module', 'Extra approval step', 'Complicated workflow'];

export const Extras: React.FC<{t: number}> = ({t}) => (
  <div style={{position: 'absolute', inset: 0}}>
    {EXTRAS.map((label, i) => {
      const a = 38.98 + i * 0.3;
      const p = seg(t, a, a + 0.6, outX);
      const gone = seg(t, 42.0 + i * 0.2, 43.2 + i * 0.2, inOut);
      const strike = seg(t, 41.6 + i * 0.15, 42.1 + i * 0.15, inOut);
      if (p <= 0 || gone >= 1) return null;
      return (
        <div key={label} style={{position: 'absolute', left: 880 + i * 300, top: 904, width: 270, height: 64, borderRadius: 14, border: '2px dashed rgba(15,17,21,0.28)', background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(15,17,21,0.62)', opacity: p * (1 - gone), transform: `translateX(${Math.round(gone * 90 + (1 - p) * 40)}px)`}}>
          {label}
          <div style={{position: 'absolute', left: 14, width: 242 * strike, top: '50%', height: 3, borderRadius: 2, background: 'rgba(15,17,21,0.62)'}} />
        </div>
      );
    })}
  </div>
);

/** Tick positions for the five Workspace tiles when it sits at x 880, y 220, 920 x 640. */
export const TICKS: [number, number, number][] = [[1421, 326, 44.6], [1724, 326, 44.9], [1421, 508, 45.2], [1724, 508, 45.5], [1724, 690, 45.8]];

/* ---------- beat 9: pricing follows understanding ---------- */

export const Pricing: React.FC<{t: number}> = ({t}) => {
  const a = seg(t, 47.5, 48.1, outX);
  const b = seg(t, 49.0, 49.6, outX);
  const link = seg(t, 48.85, 49.35, inOut);
  const card = (y: number, p: number, children: React.ReactNode) => (
    <div style={{position: 'absolute', left: 960, top: y + Math.round((1 - p) * 20), width: 760, height: 170, borderRadius: 20, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 32, padding: '0 48px', color: '#0f1115', opacity: p}}>
      {children}
    </div>
  );
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <svg width={W} height={H} style={{position: 'absolute', left: 0, top: 0}}>
        <path d="M1340 520 V620" stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={100} strokeDashoffset={100 * (1 - link)} />
      </svg>
      {card(350, a, (
        <>
          <Glyph kind="flow" size={64} />
          <div style={{flex: 1, fontSize: 56, fontWeight: 300, letterSpacing: '-0.035em'}}>Understanding</div>
        </>
      ))}
      {card(620, b, (
        <>
          <div style={{...LABEL, fontSize: 24, color: '#6b7078', width: 64}}>Then</div>
          <div style={{flex: 1, fontSize: 56, fontWeight: 300, letterSpacing: '-0.035em'}}>Pricing</div>
        </>
      ))}
    </div>
  );
};

/* ---------- beat 10: requirement to implementation ---------- */

const STEPS: {kind: GlyphKind; num: string; label: string; a: number; tick?: number}[] = [
  {kind: 'notes', num: '01', label: 'Requirement', a: 50.82, tick: 51.5},
  {kind: 'flow', num: '02', label: 'Proposed solution', a: 51.78, tick: 52.5},
  {kind: 'list', num: '03', label: 'Your approval', a: 53.22, tick: 53.9},
  {kind: 'sheet', num: '04', label: 'Implementation', a: 53.92},
];

export const Steps: React.FC<{t: number}> = ({t}) => (
  <div style={{position: 'absolute', inset: 0}}>
    {STEPS.map((s, i) => {
      const p = seg(t, s.a, s.a + 0.6, outX);
      const last = !s.tick;
      return (
        <div key={s.label} style={{position: 'absolute', left: 880, top: 210 + i * 180 + Math.round((1 - p) * 24), width: 920, height: 150, borderRadius: 20, background: '#fff', border: last ? '2px solid var(--accent)' : '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 32, padding: '0 44px', color: '#0f1115', opacity: p}}>
          <div style={{...LABEL, fontSize: 26, color: '#6b7078', width: 54}}>{s.num}</div>
          <Glyph kind={s.kind} size={60} />
          <div style={{flex: 1, fontSize: 56, fontWeight: 300, letterSpacing: '-0.035em'}}>{s.label}</div>
          {s.tick ? (
            <div style={{opacity: seg(t, s.tick, s.tick + 0.3)}}>
              <svg width={44} height={44} viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={11 * (0.6 + 0.4 * seg(t, s.tick, s.tick + 0.3, outX))} fill="var(--accent)" />
                <path d="M6.8 12.4l3.6 3.6 6.8-7.4" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={20} strokeDashoffset={20 * (1 - seg(t, s.tick + 0.1, s.tick + 0.5, inOut))} />
              </svg>
            </div>
          ) : null}
        </div>
      );
    })}
  </div>
);
