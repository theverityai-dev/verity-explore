import React from 'react';
import {Audio, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {getLength, getPointAtLength} from '@remotion/paths';
import {inOut, lerp, quad, seg} from '../../shared/timeline';
import {
  CARD, ChatTool, Chip, Head, LABEL, Lockup, METRICS, MetricFace, PanelHeader, ReportTool, SheetTool, Sky, TILE, TileFace,
  chipW, glide, lerp2, type GlyphKind, type Theme,
} from './parts';

/** R12 "Scattered" (16:9). A motion graphic on the presenter's own recording (verity-scattered.mp4, audio only).
 *  The site's own theme, light or dark from one prop. Story: growth makes the business complicated; customer details,
 *  operations and reports live apart; every answer is somewhere else; Verity pulls all of it into one connected system
 *  and one clear picture; your business, on one record. On-screen text is English only, no subtitles.
 *  One set of objects carries every seam: chips become column headers, the tools become scattered fragments, the
 *  fragments fly into module tiles, the tiles open into the command centre's metric cards, and the lockup that drew
 *  itself at "Verity" rides the hub, the panel header and lands on the end card. */

export const R12_FPS = 60;
export const R12_DURATION = 26 * R12_FPS;

/** Word anchors in seconds, read off the CapCut caption highlights of the source (20 fps OCR). Retime here only. */
const V = {
  grows: 1.8, manage: 3.35, complicated: 4.85, customers: 6.4, ops: 7.65, reports: 9.0, everything: 9.85, places: 11.85,
  found: 13.2, verity: 14.25, together: 14.65, all: 15.35, connected: 16.55, picture: 17.9, verity2: 20.45, record: 21.45,
  onRecord: 22.4, voEnd: 23.3,
} as const;

type P = [number, number];

/* ---------- beats 1-2: the growth line, then everything that has to be managed ---------- */

const G = 'M -20 1010 C 380 1000 560 900 820 830 C 1080 760 1220 680 1440 600';
const GLEN = getLength(G);
const HEAD: P = [1440, 600];

const MANAGE: {label: string; glyph: GlyphKind; pos: P; jostle: P; a: number; col?: number}[] = [
  {label: 'Customers', glyph: 'team', pos: [1280, 330], jostle: [40, 36], a: 3.45, col: 0},
  {label: 'Orders', glyph: 'receipt', pos: [1660, 300], jostle: [-30, 60], a: 3.65},
  {label: 'Stock', glyph: 'sheet', pos: [1740, 560], jostle: [-60, -20], a: 3.85},
  {label: 'Operations', glyph: 'flow', pos: [1660, 830], jostle: [-50, -40], a: 4.05, col: 1},
  {label: 'Payments', glyph: 'notes', pos: [1380, 890], jostle: [50, -30], a: 4.25},
  {label: 'Reports', glyph: 'loop', pos: [1270, 660], jostle: [60, 20], a: 4.45, col: 2},
];
const MESH: [number, number][] = [[0, 3], [1, 5], [2, 4], [0, 2], [1, 4], [3, 5], [5, 2], [0, 4], [1, 3]];

const COLX = [120, 720, 1320];
const COL_AT = [V.customers, V.ops, V.reports];
const HEADER_Y = 110;

const Growth: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 6.0, 6.45, inOut);
  if (out >= 1) return null;
  const g = 0.68 * seg(t, 0.1, 1.5, inOut) + 0.32 * seg(t, 2.4, 3.3, inOut);
  const pt = getPointAtLength(G, Math.max(0.01, GLEN * g)) ?? {x: -20, y: 1010};
  const jost = seg(t, V.complicated, V.complicated + 0.7, inOut);
  const cen = (i: number): P => {
    const c = MANAGE[i];
    return [c.pos[0] + c.jostle[0] * jost, c.pos[1] + c.jostle[1] * jost];
  };
  return (
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: 1 - out}}>
      <defs>
        <clipPath id="r12grow"><rect x={-20} y={0} width={pt.x + 20} height={1080} /></clipPath>
        <linearGradient id="r12area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity={0.16} />
          <stop offset="1" stopColor="var(--accent)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={`${G} L 1440 1080 L -20 1080 Z`} fill="url(#r12area)" clipPath="url(#r12grow)" />
      {MANAGE.map((c, i) => {
        const d = seg(t, c.a - 0.2, c.a + 0.25, inOut);
        const [x, y] = cen(i);
        return <path key={c.label} d={`M${HEAD[0]} ${HEAD[1]} L${x} ${y}`} stroke="var(--ink-muted)" strokeOpacity={0.45} strokeWidth={2.5} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - d} fill="none" />;
      })}
      {MESH.map(([a, b], i) => {
        const d = seg(t, V.complicated + 0.05 + i * 0.06, V.complicated + 0.55 + i * 0.06, inOut);
        const [ax, ay] = cen(a);
        const [bx, by] = cen(b);
        const k = i % 2 ? 140 : -140;
        const nx = -(by - ay), ny = bx - ax, nl = Math.hypot(nx, ny) || 1;
        return <path key={i} d={`M${ax} ${ay} Q${(ax + bx) / 2 + (nx / nl) * k} ${(ay + by) / 2 + (ny / nl) * k} ${bx} ${by}`} stroke="var(--ink-muted)" strokeOpacity={0.4} strokeWidth={2.5} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - d} fill="none" />;
      })}
      <path d={G} stroke="var(--accent)" strokeWidth={6} strokeLinecap="round" fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - g} />
      <g opacity={seg(t, 0.1, 0.3)}>
        <circle cx={pt.x} cy={pt.y} r={26} fill="var(--accent)" fillOpacity={0.16} />
        <circle cx={pt.x} cy={pt.y} r={12} fill="var(--surface)" stroke="var(--accent)" strokeWidth={5} />
      </g>
    </svg>
  );
};

/** The six things to manage. Three of them travel to become the column headers of beat 3. */
const ManageChips: React.FC<{t: number}> = ({t}) => {
  const jost = seg(t, V.complicated, V.complicated + 0.7, inOut);
  return (
    <>
      {MANAGE.map((c) => {
        const p = seg(t, c.a, c.a + 0.55, glide);
        const w = chipW(c.label);
        let [x, y] = [c.pos[0] + c.jostle[0] * jost - w / 2, c.pos[1] + c.jostle[1] * jost];
        let op = p;
        if (c.col === undefined) {
          op *= 1 - seg(t, 6.0, 6.35, inOut);
        } else {
          const k = seg(t, 6.05 + c.col * 0.06, 6.7 + c.col * 0.06, inOut);
          const end: P = [COLX[c.col], HEADER_Y + 52];
          [x, y] = quad([x, y], [lerp(x, end[0], 0.5), Math.min(y, end[1]) - 60], end, k);
          op *= 1 - seg(t, COL_AT[c.col] + 0.02, COL_AT[c.col] + 0.3, inOut);
        }
        if (op <= 0) return null;
        return (
          <div key={c.label} style={{position: 'absolute', left: Math.round(x), top: Math.round(y), transform: `translateY(-50%) scale(${0.85 + 0.15 * p})`, transformOrigin: '0 50%', opacity: op}}>
            <Chip label={c.label} glyph={c.glyph} />
          </div>
        );
      })}
    </>
  );
};

/* ---------- beats 3-6: the tools, scattered, then pulled together ---------- */

/** Hub grid (beat 6): 3 x 3, the centre is Verity. Slots in reading order skipping the centre. */
const SLOT_RC: P[] = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]];
const HUB: P = [960, 600];
const slot = (i: number): P => [HUB[0] + (SLOT_RC[i][1] - 1) * 328, HUB[1] + (SLOT_RC[i][0] - 1) * 160];
const MODS: {label: string; glyph: GlyphKind; metric: number}[] = [
  {label: 'Customers', glyph: 'team', metric: 5},
  {label: 'Orders', glyph: 'receipt', metric: 1},
  {label: 'Inventory', glyph: 'sheet', metric: 7},
  {label: 'Approvals', glyph: 'list', metric: 3},
  {label: 'Payments', glyph: 'notes', metric: 0},
  {label: 'Workflows', glyph: 'flow', metric: 2},
  {label: 'People', glyph: 'chat', metric: 4},
  {label: 'Reports', glyph: 'loop', metric: 6},
];

type Frag = {key: string; s4: P; rot: number; drift: P; to: number; merge?: boolean; card?: 0 | 1 | 2; chip?: {label: string; glyph: GlyphKind; a: number}};
const FRAGS: Frag[] = [
  {key: 'sheet', card: 0, s4: [300, 280], rot: -5, drift: [-14, -10], to: 0},
  {key: 'chat', card: 1, s4: [1640, 270], rot: 4, drift: [14, -10], to: 5},
  {key: 'report', card: 2, s4: [1600, 840], rot: -3, drift: [14, 12], to: 7},
  {key: 'wa', chip: {label: 'WhatsApp', glyph: 'chat', a: 10.0}, s4: [760, 140], rot: -3, drift: [-6, -14], to: 1},
  {key: 'xl', chip: {label: 'Excel', glyph: 'sheet', a: 10.15}, s4: [1180, 150], rot: 2, drift: [6, -14], to: 2},
  {key: 'mail', chip: {label: 'Email', glyph: 'list', a: 10.3}, s4: [300, 640], rot: 2, drift: [-16, 4], to: 1, merge: true},
  {key: 'note', chip: {label: 'Notebook', glyph: 'notes', a: 10.45}, s4: [430, 900], rot: -2, drift: [-10, 12], to: 4},
  {key: 'call', chip: {label: 'Phone calls', glyph: 'voice', a: 10.6}, s4: [860, 950], rot: 3, drift: [-4, 14], to: 6},
  {key: 'erp', chip: {label: 'Legacy ERP', glyph: 'loop', a: 10.75}, s4: [1240, 930], rot: -2, drift: [6, 14], to: 2, merge: true},
  {key: 'appr', chip: {label: 'Manual approvals', glyph: 'team', a: 10.9}, s4: [1660, 560], rot: 2, drift: [16, 0], to: 3},
];
const FLY = (i: number) => 14.7 + i * 0.035;
const FLY_D = 0.85;

const Fragment: React.FC<{t: number; f: Frag; i: number}> = ({t, f, i}) => {
  const fa = FLY(i);
  const kf = seg(t, fa, fa + FLY_D, inOut);
  if (kf >= 1) return null;
  const isCard = f.card !== undefined;
  const ca = isCard ? COL_AT[f.card!] + 0.1 : f.chip!.a;
  if (t < ca) return null;

  const enter = seg(t, ca, ca + (isCard ? 0.75 : 0.55), glide);
  const k4 = isCard ? seg(t, V.everything, V.everything + 0.7, inOut) : 1;
  const home: P = isCard ? [COLX[f.card!] + CARD.w / 2, 290 + CARD.h / 2] : f.s4;
  const drift = seg(t, 10.8, 13.1, inOut);
  const push = seg(t, V.found, V.found + 0.7, inOut);
  let pos = lerp2(home, f.s4, k4);
  pos = [pos[0] + f.drift[0] * drift, pos[1] + f.drift[1] * drift + (isCard ? Math.round((1 - enter) * 80) : 0)];
  pos = [960 + (pos[0] - 960) * (1 + 0.07 * push), 540 + (pos[1] - 540) * (1 + 0.07 * push)];
  const target = slot(f.to);
  const ctrl: P = [lerp(pos[0], target[0], 0.5) + (pos[1] - target[1]) * 0.18, lerp(pos[1], target[1], 0.5) - (pos[0] - target[0]) * 0.18];
  pos = quad(pos, ctrl, target, kf);

  const scale = isCard ? lerp(lerp(1, 0.42, k4), 0.3, kf) : lerp(0.88 + 0.12 * enter, 0.8, kf);
  const rot = lerp(f.rot * k4, 0, kf);
  const faceOut = seg(kf, 0.25, 0.7, (n) => n);
  const tileIn = seg(kf, 0.35, 0.8, (n) => n) * (f.merge ? 1 - seg(kf, 0.8, 1, (n) => n) : 1);
  const opacity = enter * (1 - 0.45 * push * (1 - kf));
  const content = seg(t, ca + 0.2, ca + 1.5, (n) => n);
  return (
    <div style={{position: 'absolute', left: 0, top: 0, transform: `translate(${pos[0]}px, ${pos[1]}px)`, opacity}}>
      <div style={{position: 'absolute', left: 0, top: 0, transform: `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`, opacity: 1 - faceOut}}>
        {f.card === 0 && <SheetTool p={content} />}
        {f.card === 1 && <ChatTool p={content} />}
        {f.card === 2 && <ReportTool p={content} />}
        {f.chip && <Chip label={f.chip.label} glyph={f.chip.glyph} />}
      </div>
      {tileIn > 0 ? (
        <div style={{position: 'absolute', left: -TILE.w / 2, top: -TILE.h / 2, width: TILE.w, height: TILE.h, borderRadius: 18, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)', opacity: tileIn, transform: `scale(${0.7 + 0.3 * tileIn})`}}>
          <TileFace label={MODS[f.to].label} glyph={MODS[f.to].glyph} live={0} />
        </div>
      ) : null}
    </div>
  );
};

/** Column dividers: the three tools, literally apart. */
const Dividers: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, V.everything, V.everything + 0.4, inOut);
  if (out >= 1) return null;
  return (
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: 1 - out}}>
      {[660, 1260].map((x, i) => {
        const d = seg(t, COL_AT[i + 1] + 0.05, COL_AT[i + 1] + 0.6, inOut);
        return <path key={x} d={`M${x} 110 V930`} stroke="var(--line)" strokeWidth={2} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - d} />;
      })}
    </svg>
  );
};

/* ---------- beats 7-8: one connected system, then the command centre ---------- */

const MW = (1680 - 56 - 60) / 4;
const MH = 200;
const PANEL = {x: 120, y: 390, w: 1680, h: 820};
const metricC = (m: number): P => [PANEL.x + 28 + (m % 4) * (MW + 20) + MW / 2, PANEL.y + 76 + 24 + Math.floor(m / 4) * (MH + 20) + MH / 2];

/** The beat-7 group move: the hub grid slides right and settles 10 % smaller beside the headline. */
const group = (t: number) => {
  const k = seg(t, V.connected - 0.1, V.connected + 0.65, inOut);
  const sc = 1 - 0.1 * k;
  return {sc, at: (p: P): P => [HUB[0] + (p[0] - HUB[0]) * sc + 290 * k, HUB[1] + (p[1] - HUB[1]) * sc]};
};
const EXIT = (t: number, i = 0) => seg(t, 20.2 + i * 0.02, 20.8 + i * 0.02, inOut);

const Spokes: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, V.picture, V.picture + 0.3, inOut);
  if (t < V.connected || out >= 1) return null;
  const {at} = group(t);
  const [hx, hy] = at(HUB);
  return (
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: 1 - out}}>
      {MODS.map((_, i) => {
        const d = seg(t, 16.75 + i * 0.07, 17.1 + i * 0.07, inOut);
        const [x, y] = at(slot(i));
        return <path key={i} d={`M${hx} ${hy} L${x} ${y}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - d} />;
      })}
    </svg>
  );
};

const Tiles: React.FC<{t: number}> = ({t}) => {
  const {sc, at} = group(t);
  const count = seg(t, 18.45, 19.7);
  return (
    <>
      {MODS.map((mod, i) => {
        const primary = FRAGS.findIndex((f) => f.to === i && !f.merge);
        if (t < FLY(primary) + FLY_D) return null;
        const e = EXIT(t, i);
        if (e >= 1) return null;
        const m = seg(t, V.picture + i * 0.035, V.picture + 0.75 + i * 0.035, inOut);
        const pos = lerp2(at(slot(i)), metricC(mod.metric), m);
        const live = seg(t, 17.1 + i * 0.07, 17.35 + i * 0.07);
        const w = lerp(TILE.w, MW, m), h = lerp(TILE.h, MH, m);
        const s = lerp(sc, 1, m);
        return (
          <div key={mod.label} style={{position: 'absolute', left: 0, top: 0, transform: `translate(${pos[0]}px, ${pos[1] + Math.round(e * 140)}px) scale(${s})`, opacity: 1 - e}}>
            <div style={{position: 'absolute', left: -w / 2, top: -h / 2, width: w, height: h, borderRadius: lerp(18, 14, m), boxShadow: 'var(--shadow)', opacity: 1 - m}} />
            <div style={{position: 'absolute', left: -w / 2, top: -h / 2, width: w, height: h, borderRadius: lerp(18, 14, m), background: 'var(--surface)', border: `1px solid ${m > 0.5 ? 'var(--line-hair)' : 'var(--line)'}`, overflow: 'hidden'}}>
              <div style={{position: 'absolute', inset: 0, opacity: 1 - seg(m, 0, 0.45, (n) => n)}}>
                <TileFace label={mod.label} glyph={mod.glyph} live={live} />
              </div>
              <div style={{position: 'absolute', inset: 0, opacity: seg(m, 0.45, 1, (n) => n)}}>
                <MetricFace m={METRICS[mod.metric]} count={count} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const HubTile: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, 15.2, 15.6);
  const out = seg(t, V.picture, V.picture + 0.35, inOut);
  if (p <= 0 || out >= 1) return null;
  const {sc, at} = group(t);
  const [x, y] = at(HUB);
  return (
    <div style={{position: 'absolute', left: x - TILE.w / 2, top: y - TILE.h / 2, width: TILE.w, height: TILE.h, borderRadius: 18, background: 'var(--surface)', border: '2px solid var(--accent)', boxShadow: 'var(--shadow)', opacity: p * (1 - out), transform: `scale(${sc * (0.9 + 0.1 * p)})`}} />
  );
};

const Panel: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, 17.95, 18.55, glide);
  const e = EXIT(t);
  if (p <= 0 || e >= 1) return null;
  const chart = seg(t, 18.8, 19.9, inOut);
  const cw = PANEL.w - 56;
  const pts = [0.3, 0.42, 0.36, 0.58, 0.46, 0.66, 0.6, 0.78, 0.7, 0.86, 0.96];
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${(i * cw) / (pts.length - 1)} ${130 - v * 120}`).join(' ');
  return (
    <div style={{position: 'absolute', left: PANEL.x, top: PANEL.y + Math.round((1 - p) * 40 + e * 140), width: PANEL.w, height: PANEL.h, borderRadius: 24, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)', opacity: p * (1 - e)}}>
      <PanelHeader p={seg(t, 18.3, 18.8)} />
      <div style={{position: 'absolute', left: 28, top: 548, ...LABEL, fontSize: 20, color: 'var(--ink-muted)', opacity: chart > 0 ? 1 : 0}}>Throughput · this quarter</div>
      <svg width={cw} height={130} style={{position: 'absolute', left: 28, top: 590, overflow: 'visible'}}>
        <defs>
          <clipPath id="r12chart"><rect x={0} y={-10} width={cw * chart} height={150} /></clipPath>
        </defs>
        <path d={`${line} L${cw} 140 L0 140 Z`} fill="var(--accent-a08)" clipPath="url(#r12chart)" />
        <path d={line} fill="none" stroke="var(--accent)" strokeWidth={3} clipPath="url(#r12chart)" />
      </svg>
    </div>
  );
};

/* ---------- the lockup: draws at "Verity", becomes the hub, the panel's logo, then the end card ---------- */

const LockupCarrier: React.FC<{t: number}> = ({t}) => {
  if (t < V.verity) return null;
  const {sc, at} = group(t);
  const k1 = seg(t, 14.95, 15.55, inOut);
  let pos = lerp2([960, 470], HUB, k1);
  let s = lerp(1, 0.34, k1);
  if (t > V.connected - 0.1) {
    pos = at(HUB);
    s = 0.34 * sc;
  }
  const k8 = seg(t, V.picture, V.picture + 0.7, inOut);
  pos = lerp2(pos, [216, PANEL.y + 38], k8);
  s = lerp(s, 0.19, k8);
  const k9 = seg(t, 20.25, 21.05, inOut);
  pos = lerp2(pos, [960, 300], k9);
  s = lerp(s, 0.93, k9);
  return (
    <div style={{position: 'absolute', left: 0, top: 0, transform: `translate(${pos[0]}px, ${pos[1]}px)`}}>
      <div style={{position: 'absolute', left: 0, top: 0, transform: `translate(-50%, -50%) scale(${s})`}}>
        <Lockup draw={seg(t, V.verity, V.verity + 0.7, inOut)} word={seg(t, V.verity + 0.3, V.verity + 0.75)} size={150} />
      </div>
    </div>
  );
};

export const AdR12: React.FC<{theme: Theme}> = ({theme}) => {
  const frame = useCurrentFrame();
  const t = frame / R12_FPS;
  return (
    <Sky theme={theme}>
      <Growth t={t} />
      <Dividers t={t} />
      <Spokes t={t} />
      <Panel t={t} />
      <HubTile t={t} />
      {FRAGS.map((f, i) => <Fragment key={f.key} t={t} f={f} i={i} />)}
      <Tiles t={t} />
      <ManageChips t={t} />
      <LockupCarrier t={t} />

      {/* Headlines: one at a time, each gone before the next lands in its place. */}
      <Head t={t} a={0.1} b={1.55} top={250} size={132} lines={[[['Growing a business', 0]], [['is a good thing.', 1]]]} />
      <Head t={t} a={V.grows} b={6.0} top={230} size={112} at={[V.grows, V.manage, V.complicated]} lines={[[['But as it grows,', 0]], [['managing it gets', 1]], [['complicated.', 0]]]} />
      {['Customers', 'Operations', 'Reports'].map((w, i) => (
        <Head key={w} t={t} a={COL_AT[i]} b={V.everything - 0.05} x={COLX[i]} top={HEADER_Y} size={96} lines={[[[w, 0]]]} />
      ))}
      <Head t={t} a={10.3} b={13.05} top={400} size={116} align="center" at={[10.3, 11.0]} lines={[[['Every answer lives', 0]], [['somewhere else.', 1]]]} />
      <Head t={t} a={V.found + 0.05} b={14.0} top={455} size={150} align="center" lines={[[['Then I found', 0]]]} />
      <Head t={t} a={V.all} b={16.35} top={150} size={116} align="center" lines={[[['All of it, ', 0], ['together.', 1]]]} />
      <Head t={t} a={V.connected} b={17.85} top={394} size={124} lines={[[['One', 0]], [['connected', 0]], [['system.', 1]]]} />
      <Head t={t} a={V.picture + 0.05} b={20.2} top={110} size={104} lines={[[['One clear picture of', 0]], [['your whole business.', 1]]]} />
      <Head t={t} a={V.record} b={99} top={430} size={140} align="center" at={[V.record, V.onRecord]} lines={[[['Your business.', 0]], [['On one record.', 1]]]} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 830, textAlign: 'center', fontSize: 40, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink-muted)', opacity: seg(t, 23.4, 24.0), transform: `translateY(${Math.round((1 - seg(t, 23.4, 24.1, glide)) * 20)}px)`}}>
        verity.plotarmour.in
      </div>

      <Sequence durationInFrames={Math.round(23.65 * R12_FPS)}>
        <Audio src={staticFile('ads/R12/vo.mp3')} volume={(f) => interpolate(f, [V.voEnd * R12_FPS, 23.65 * R12_FPS], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      </Sequence>
    </Sky>
  );
};
