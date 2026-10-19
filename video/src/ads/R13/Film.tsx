import React from 'react';
import {Audio, Easing, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {inOut, lerp, seg} from '../../shared/timeline';
import {Head, Lockup, Sky, glide, type GlyphKind, type Theme} from '../R12/parts';
import {
  ContactsApp, FRAG_SIZE, Fragment, GrowthObj, HERO_SIZE, MiniRecord, ModulePill, NumbersSheet, OpsBoard, REC, RecordObj,
  ToolCard, WorldObj, project, type FragKind, type V3,
} from './world';

/** R13 "Scattered" (English, 16:9). A cinematic motion graphic on the presenter's English recording
 *  (verity-scat-eng.mp4, audio only). One camera flies through one world: the growth line close up, the pull-back that
 *  reveals everything everywhere, the three places, the strained threads, the dimming at "Verity", every fragment
 *  converging into one record, the system around it, the pile of tools that topples, and the calm record again.
 *  Headlines live in screen space and hold still; only the world moves. English on screen, no subtitles. */

export const R13_FPS = 60;
export const R13_DURATION = 29 * R13_FPS;

/** Word anchors (seconds) from a Parakeet-TDT transcription of the recording. Retime here only. */
const V = {
  isnt: 1.04, because: 2.0, complicated2: 3.12, everything: 4.16, customer: 5.84, place: 6.72, operations: 7.44, another: 8.0,
  numbers: 8.64, spreadsheet: 9.2, and: 9.92, expected: 10.8, connected: 12.0, thats: 12.96, verity: 13.84, oneRecord: 15.04,
  oneSystem: 15.76, entire: 16.96, together: 18.08, because2: 19.12, dont: 20.0, tools: 20.64, business: 21.92, need: 22.8,
  sense: 23.76, verity2: 24.72, your: 25.6, onRecord: 26.4, voEnd: 27.3,
} as const;

/* ---------- the world ---------- */

const rng = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let x = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
  return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
};

const GROWTH: V3 = [500, 120, 2400];
const HEROES: {p: V3; el: React.FC}[] = [
  {p: [-1700, -200, 4200], el: ContactsApp},
  {p: [1800, 500, 6200], el: OpsBoard},
  {p: [-300, -600, 8400], el: NumbersSheet},
];
const HUB: V3 = [380, 0, 2800];

/** Camera stops: [t, x, y, z]. Eased between consecutive stops; a pair of near-equal stops is a drift. */
const CAM: [number, number, number, number][] = [
  [0, 0, 0, 1300], [3.05, 50, -15, 1460], [5.3, 0, 0, -900], [5.84, -80, 0, -760],
  [6.75, -2030, -200, 3200], [7.44, -1990, -200, 3330], [8.25, 1470, 500, 5200], [8.64, 1500, 500, 5300],
  [9.45, -630, -600, 7400], [9.95, -600, -600, 7480], [11.4, 0, 0, 1200], [12.96, 0, 0, 1450], [14.9, 0, 0, 1700],
  [15.7, 0, 0, 1800], [16.55, -200, 0, 600], [17.0, -200, 0, 520], [18.9, 0, 0, -2400], [22.7, 0, 0, -2900],
  [24.4, -200, 0, 1300], [29, -200, 0, 1420],
];
/** The subject in focus (its world z), so depth of field follows the story. */
const FOCUS: [number, number][] = [
  [0, 2400], [3.05, 2400], [5.3, 4200], [6.75, 4200], [7.44, 4200], [8.25, 6200], [8.64, 6200], [9.45, 8400], [9.95, 8400],
  [11.4, 5200], [14.9, 2800], [29, 2800],
];

const camAt = (t: number): V3 => {
  let i = 1;
  while (i < CAM.length - 1 && t > CAM[i][0]) i++;
  const a = CAM[i - 1], b = CAM[i];
  const k = inOut(Math.min(1, Math.max(0, (t - a[0]) / (b[0] - a[0]))));
  return [lerp(a[1], b[1], k), lerp(a[2], b[2], k), lerp(a[3], b[3], k)];
};
const focusZ = (t: number) => {
  let i = 1;
  while (i < FOCUS.length - 1 && t > FOCUS[i][0]) i++;
  const a = FOCUS[i - 1], b = FOCUS[i];
  return lerp(a[1], b[1], inOut(Math.min(1, Math.max(0, (t - a[0]) / (b[0] - a[0])))));
};

/** Scattered fragments, seeded, kept out of the camera's line of sight at every stop. */
const KINDS: FragKind[] = ['chat', 'invoice', 'contact', 'cells', 'note', 'mail', 'cal', 'pay', 'task'];
const SIGHTS: [V3, V3][] = [[[0, 0, 1300], GROWTH], [[-2030, -200, 3200], HEROES[0].p], [[1470, 500, 5200], HEROES[1].p], [[-630, -600, 7400], HEROES[2].p], [[0, 0, 1800], HUB]];
const FRAGS: {p: V3; kind: FragKind; n: number; rot: number; at: number}[] = (() => {
  const rand = rng(13);
  const out: {p: V3; kind: FragKind; n: number; rot: number; at: number}[] = [];
  let guard = 0;
  while (out.length < 46 && guard++ < 4000) {
    const p: V3 = [(rand() * 2 - 1) * 2900, (rand() * 2 - 1) * 1650, -700 + rand() * 10200];
    const blocked = SIGHTS.some(([c, o]) => {
      if (p[2] < c[2] + 40 || p[2] > o[2] + 250) return false;
      const k = (p[2] - c[2]) / (o[2] - c[2]);
      return Math.abs(p[0] - lerp(c[0] + 330, o[0], k)) < 900 && Math.abs(p[1] - lerp(c[1], o[1], k)) < 560;
    });
    const crowded = HEROES.some((h) => Math.hypot(p[0] - h.p[0], p[1] - h.p[1], p[2] - h.p[2]) < 900);
    if (blocked || crowded) continue;
    const kind = KINDS[out.length % KINDS.length];
    out.push({p, kind, n: Math.floor(rand() * 4), rot: (rand() * 2 - 1) * 7, at: 3.1 + rand() * 1.3});
  }
  return out;
})();

/** Every fragment flies into the record at "One record." */
const converge = (t: number, i: number) => seg(t, 14.95 + (i % 9) * 0.035, 15.75 + (i % 9) * 0.035, inOut);

/* ---------- the system around the record ---------- */

const MODULES: {label: string; glyph: GlyphKind; a: number; dz: number}[] = [
  {label: 'Customers', glyph: 'team', a: -90, dz: 0}, {label: 'Orders', glyph: 'receipt', a: -45, dz: 200}, {label: 'Inventory', glyph: 'sheet', a: 0, dz: -150},
  {label: 'Payments', glyph: 'notes', a: 45, dz: 120}, {label: 'Approvals', glyph: 'list', a: 90, dz: -100}, {label: 'Reports', glyph: 'loop', a: 135, dz: 180},
  {label: 'Team', glyph: 'chat', a: 180, dz: -60}, {label: 'Workflows', glyph: 'flow', a: 225, dz: 140},
];
const modP = (i: number): V3 => {
  const a = (MODULES[i].a * Math.PI) / 180;
  return [HUB[0] + Math.cos(a) * 1300, HUB[1] + Math.sin(a) * 820, HUB[2] + MODULES[i].dz];
};
const OUTER: {p: V3; to: number; at: number}[] = (() => {
  const rand = rng(7);
  return Array.from({length: 30}, (_, i) => {
    const a = rand() * Math.PI * 2;
    const rad = 2300 + rand() * 2200;
    const p: V3 = [HUB[0] + Math.cos(a) * rad * 1.35, HUB[1] + Math.sin(a) * rad * 0.8, HUB[2] - 600 + rand() * 3200];
    let best = 0, bd = 1e12;
    MODULES.forEach((_, m) => {
      const q = modP(m);
      const dd = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (dd < bd) { bd = dd; best = m; }
    });
    return {p, to: best, at: 17.0 + i * 0.03};
  });
})();

const System: React.FC<{t: number; cam: V3; focus: number; fog: number}> = ({t, cam, focus, fog}) => {
  if (t < 15.7) return null;
  const links: {a: V3; b: V3; d: number; at: number}[] = [
    ...MODULES.map((_, i) => ({a: HUB, b: modP(i), d: seg(t, 15.85 + i * 0.06, 16.3 + i * 0.06, inOut), at: 15.85 + i * 0.06})),
    ...OUTER.map((o) => ({a: modP(o.to), b: o.p, d: seg(t, o.at, o.at + 0.5, inOut), at: o.at})),
  ];
  return (
    <>
      <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, zIndex: 1, opacity: fog}}>
        {links.map((l, i) => {
          const A = project(l.a, cam), B = project(l.b, cam);
          if (A.d < 60 || B.d < 60 || l.d <= 0) return null;
          const x2 = lerp(A.x, B.x, l.d), y2 = lerp(A.y, B.y, l.d);
          const pulses = [17.25 + ((i * 0.37) % 1.4), 18.0 + ((i * 0.53) % 0.8)];
          return (
            <g key={i}>
              <line x1={A.x} y1={A.y} x2={x2} y2={y2} stroke="var(--accent)" strokeOpacity={i < MODULES.length ? 0.85 : 0.4} strokeWidth={i < MODULES.length ? 3 : 2} />
              {pulses.map((ps, j) => {
                const k = seg(t, ps, ps + 0.75, (n) => n);
                if (k <= 0 || k >= 1 || t > 19.0) return null;
                return <circle key={j} cx={lerp(B.x, A.x, k)} cy={lerp(B.y, A.y, k)} r={Math.max(3, 9 * Math.min(A.s, 1.4))} fill="var(--accent)" />;
              })}
            </g>
          );
        })}
      </svg>
      {MODULES.map((m, i) => {
        const a = 15.8 + i * 0.06;
        const p = seg(t, a, a + 0.5, glide);
        if (p <= 0) return null;
        return (
          <WorldObj key={m.label} p={modP(i)} cam={cam} focus={focus} fog={fog * p} w={360} h={110}>
            <ModulePill label={m.label} glyph={m.glyph} live={seg(t, a + 0.45, a + 0.6)} />
          </WorldObj>
        );
      })}
      {OUTER.map((o, i) => {
        const p = seg(t, o.at + 0.3, o.at + 0.7);
        if (p <= 0) return null;
        return (
          <WorldObj key={i} p={o.p} cam={cam} focus={focus} fog={fog * p} w={220} h={80}>
            <MiniRecord />
          </WorldObj>
        );
      })}
    </>
  );
};

/* ---------- screen-space pieces ---------- */

const TOOLS: {name: string; glyph: GlyphKind; at: number; dx: number; rot: number}[] = [
  {name: 'CRM', glyph: 'team', at: 19.45, dx: -10, rot: -1.5},
  {name: 'Spreadsheets', glyph: 'sheet', at: 19.8, dx: 22, rot: 1.8},
  {name: 'Team chat', glyph: 'chat', at: 20.15, dx: -26, rot: -2.4},
  {name: 'Task tracker', glyph: 'list', at: 20.5, dx: 14, rot: 2.2},
  {name: 'Invoicing app', glyph: 'receipt', at: 20.85, dx: -18, rot: -1.2},
  {name: 'Another dashboard', glyph: 'loop', at: 21.2, dx: 30, rot: 3.2},
];
const fall = Easing.bezier(0.55, 0, 0.9, 0.45);

const ToolStack: React.FC<{t: number}> = ({t}) => (
  <>
    {TOOLS.map((tool, i) => {
      if (t < tool.at) return null;
      const land = seg(t, tool.at, tool.at + 0.42, fall);
      const ts = 21.95 + (TOOLS.length - 1 - i) * 0.06;
      const top = seg(t, ts, ts + 0.8, fall);
      if (top >= 1) return null;
      const y = 960 - 116 - i * 132;
      const ty = Math.round(-1100 * (1 - land) + top * 1300);
      const tx = tool.dx + (i % 2 ? 1 : -1) * 120 * top;
      return (
        <div key={tool.name} style={{position: 'absolute', left: 1400 - 320, top: y, transform: `translate(${tx}px, ${ty}px) rotate(${tool.rot + (i % 2 ? 1 : -1) * (16 + i * 3) * top}deg)`, opacity: 1 - seg(top, 0.6, 1, (n) => n)}}>
          <ToolCard name={tool.name} glyph={tool.glyph} />
        </div>
      );
    })}
  </>
);

/** The mark: draws at "Verity", docks into the record's header, and comes back out for the end card. */
const LockupCarrier: React.FC<{t: number; cam: V3}> = ({t, cam}) => {
  if (t < V.verity) return null;
  const docked = t > 15.6 && t < V.verity2;
  if (docked) return null;
  const hub = project(HUB, cam);
  const header: [number, number] = [hub.x - (REC[0] / 2) * hub.s + 87 * hub.s, hub.y - (REC[1] / 2) * hub.s + 36 * hub.s];
  const headerS = hub.s * (28 / 150);
  let x = 960, y = 540, s = 1;
  const k1 = seg(t, 14.95, 15.6, inOut);
  x = lerp(x, header[0], k1);
  y = lerp(y, header[1], k1);
  s = lerp(s, headerS, k1);
  if (t >= V.verity2) {
    const k9 = seg(t, V.verity2, V.verity2 + 0.75, inOut);
    x = lerp(header[0], 960, k9);
    y = lerp(header[1], 300, k9);
    s = lerp(headerS, 0.93, k9);
  }
  return (
    <div style={{position: 'absolute', left: 0, top: 0, zIndex: 200000, transform: `translate(${x}px, ${y}px)`, opacity: t < V.verity2 ? 1 - seg(t, 15.42, 15.58) : 1}}>
      <div style={{position: 'absolute', left: 0, top: 0, transform: `translate(-50%, -50%) scale(${s})`}}>
        <Lockup draw={seg(t, V.verity, V.verity + 0.7, inOut)} word={seg(t, V.verity + 0.3, V.verity + 0.75)} size={150} />
      </div>
    </div>
  );
};

/** Constant grade: left-side shade for the headline column and a soft vignette. It never moves. */
const Grade: React.FC<{t: number}> = ({t}) => (
  <>
    <div style={{position: 'absolute', inset: 0, zIndex: 150000, background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 55%, rgba(5,8,13,0.55) 100%)'}} />
    <div style={{position: 'absolute', inset: 0, zIndex: 150001, background: 'linear-gradient(90deg, rgba(8,11,17,0.82) 0%, rgba(8,11,17,0.55) 32%, rgba(8,11,17,0) 58%)', opacity: 1 - seg(t, V.thats - 0.2, V.thats + 0.3) + seg(t, V.oneRecord, V.oneRecord + 0.4) - seg(t, V.verity2, V.verity2 + 0.5)}} />
    <div style={{position: 'absolute', inset: 0, zIndex: 150002, background: 'radial-gradient(ellipse 48% 34% at 50% 48%, rgba(8,11,17,0.78) 0%, rgba(8,11,17,0) 100%)', opacity: seg(t, V.complicated2 - 0.1, V.complicated2 + 0.4) * (1 - seg(t, 5.7, 6.1))}} />
  </>
);

export const AdR13: React.FC<{theme: Theme}> = ({theme}) => {
  const t = useCurrentFrame() / R13_FPS;
  const cam = camAt(t);
  const fz = focusZ(t);
  const focus = Math.max(300, fz - cam[2]);
  const fog = (1 - 0.72 * seg(t, V.thats, V.thats + 0.7, inOut) + 0.72 * seg(t, 14.95, 15.4, inOut))
    * (1 - 0.75 * seg(t, V.because2, V.because2 + 0.6, inOut) + 0.75 * seg(t, V.need, V.need + 0.5, inOut))
    * (1 - seg(t, V.verity2 - 0.1, V.verity2 + 0.5, inOut));
  const recP = seg(t, 15.1, 15.75, glide);

  return (
    <Sky theme={theme}>
      <div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>
        {/* The opening subject. */}
        <WorldObj p={GROWTH} cam={cam} focus={focus} fog={fog * (1 - seg(t, 9.9, 10.7, inOut))} w={1000} h={560}>
          <GrowthObj draw={0.62 * seg(t, 0.15, 1.6, inOut) + 0.38 * seg(t, 1.9, 2.9, inOut)} />
        </WorldObj>

        {FRAGS.map((f, i) => {
          const k = converge(t, i);
          const appear = seg(t, f.at, f.at + 0.6, glide);
          if (appear <= 0 || k >= 1) return null;
          const [w, h] = FRAG_SIZE[f.kind];
          return (
            <WorldObj key={i} p={lerpV(f.p, HUB, k)} cam={cam} focus={focus} fog={fog * appear * (1 - seg(k, 0.45, 0.82, (n) => n))} w={w} h={h} rot={f.rot * (1 - k)} near={k > 0 ? [700, 1400] : undefined}>
              <Fragment kind={f.kind} n={f.n} />
            </WorldObj>
          );
        })}

        {HEROES.map((hero, i) => {
          const k = converge(t, i * 2);
          if (k >= 1) return null;
          const El = hero.el;
          return (
            <WorldObj key={i} p={lerpV(hero.p, HUB, k)} cam={cam} focus={focus} fog={fog * seg(t, 3.4 + i * 0.3, 4.2 + i * 0.3) * (1 - seg(k, 0.45, 0.82, (n) => n))} w={HERO_SIZE[0]} h={HERO_SIZE[1]} near={k > 0 ? [700, 1400] : undefined}>
              <El />
            </WorldObj>
          );
        })}

        <Threads t={t} cam={cam} />
        <System t={t} cam={cam} focus={focus} fog={fog} />

        {recP > 0 ? (
          <WorldObj p={HUB} cam={cam} focus={focus} fog={fog * recP} w={REC[0]} h={REC[1]} sharp zBoost={20000}>
            <div style={{position: 'absolute', inset: 0, transform: `scale(${0.9 + 0.1 * recP})`}}>
              <RecordObj t={t} a={15.2} mark={seg(t, 15.42, 15.58) * (1 - seg(t, V.verity2, V.verity2 + 0.02))} />
            </div>
          </WorldObj>
        ) : null}
      </div>

      <Grade t={t} />
      <div style={{position: 'absolute', inset: 0, zIndex: 160000}}>
        <ToolStack t={t} />

        <Head t={t} a={0.24} b={3.0} top={250} size={112} at={[0.24, V.isnt, V.because]} lines={[[['Your business', 0]], [["isn't complicated", 0]], [["because it's growing.", 1]]]} />
        <Head t={t} a={V.complicated2} b={5.75} top={410} size={104} align="center" at={[V.complicated2, V.everything]} lines={[[["It's complicated because", 1]], [['everything is everywhere.', 0]]]} />
        <Head t={t} a={V.customer} b={7.3} top={400} size={100} at={[V.customer, V.place]} lines={[[['Customer details', 0]], [['in one place.', 1]]]} />
        <Head t={t} a={V.operations} b={8.5} top={400} size={100} at={[V.operations, V.another]} lines={[[['Operations,', 0]], [['in another.', 1]]]} />
        <Head t={t} a={V.numbers} b={9.85} top={400} size={100} at={[V.numbers, V.spreadsheet]} lines={[[['Numbers,', 0]], [['on a spreadsheet.', 1]]]} />
        <Head t={t} a={10.1} b={12.85} top={110} size={100} at={[10.1, 11.2]} lines={[[["And you're expected", 1]], [['to keep it all connected.', 0]]]} />
        <Head t={t} a={V.thats} b={13.7} top={470} size={120} align="center" lines={[[["That's exactly where", 0]]]} />
        <Head t={t} a={V.oneRecord} b={15.38} top={470} size={140} lines={[[['One record.', 0]]]} />
        <Head t={t} a={V.oneSystem} b={16.9} top={350} size={120} at={[15.82, 16.0, 16.48]} lines={[[['One', 0]], [['connected', 0]], [['system.', 1]]]} />
        <Head t={t} a={V.entire} b={18.95} top={400} size={104} at={[V.entire, V.together]} lines={[[['Your entire business,', 0]], [['working together.', 1]]]} />
        <Head t={t} a={V.dont} b={22.6} top={380} size={120} at={[V.dont, V.tools]} lines={[[["You don't need", 0]], [['more tools.', 1]]]} />
        <Head t={t} a={V.need} b={V.verity2 - 0.15} top={330} size={112} at={[V.need, 23.2, V.sense]} lines={[[['You need', 1]], [['your business', 1]], [['to make sense.', 0]]]} />
        <Head t={t} a={V.your} b={99} top={430} size={140} align="center" at={[V.your, V.onRecord]} lines={[[['Your business.', 0]], [['On one record.', 1]]]} />
        <UrlPill t={t} />
        <LockupCarrier t={t} cam={cam} />
      </div>

      <Sequence durationInFrames={Math.round(27.6 * R13_FPS)}>
        <Audio src={staticFile('ads/R13/vo.mp3')} />
      </Sequence>
    </Sky>
  );
};

const lerpV = (a: V3, b: V3, k: number): V3 => [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)];

/** "Keep it all connected": strained threads between the places and the fragments near them. */
const THREADS: [number, number][] = (() => {
  const rand = rng(29);
  const pairs: [number, number][] = [[-1, -2], [-2, -3], [-1, -3]];
  for (let i = 0; i < 22; i++) pairs.push([Math.floor(rand() * FRAGS.length), i % 3 === 0 ? -1 - (i % 3) : Math.floor(rand() * FRAGS.length)]);
  return pairs;
})();
const nodeP = (n: number): V3 => (n < 0 ? HEROES[-n - 1].p : FRAGS[n].p);

const Threads: React.FC<{t: number; cam: V3}> = ({t, cam}) => {
  const out = seg(t, V.thats - 0.1, V.thats + 0.5, inOut);
  if (t < 10.1 || out >= 1) return null;
  return (
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, zIndex: 1, opacity: 1 - out}}>
      {THREADS.map(([a, b], i) => {
        const A = project(nodeP(a), cam), B = project(nodeP(b), cam);
        if (A.d < 80 || B.d < 80) return null;
        const d = seg(t, 10.2 + i * 0.075, 10.75 + i * 0.075, inOut);
        const sag = 60 + (i % 4) * 30;
        const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2 + sag;
        const hero = a < 0 && b < 0;
        return <path key={i} d={`M${A.x} ${A.y} Q${mx} ${my} ${B.x} ${B.y}`} fill="none" stroke={hero ? 'var(--ink)' : 'var(--ink-muted)'} strokeOpacity={hero ? 0.75 : 0.45} strokeWidth={hero ? 3 : 2} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - d} />;
      })}
    </svg>
  );
};

const UrlPill: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, 27.1, 27.7, glide);
  if (p <= 0) return null;
  return (
    <div style={{position: 'absolute', left: 0, right: 0, top: 790, display: 'flex', justifyContent: 'center', opacity: Math.min(1, p * 1.4), transform: `translateY(${Math.round((1 - p) * 24)}px)`}}>
      <div style={{height: 96, padding: '0 50px', borderRadius: 999, background: 'var(--accent)', color: 'var(--accent-ink)', display: 'flex', alignItems: 'center', gap: 20, fontSize: 42, fontWeight: 500, letterSpacing: '-0.015em'}}>
        verity.plotarmour.in
        <svg width={36} height={24} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h34M26 3l10 9-10 9" />
        </svg>
      </div>
    </div>
  );
};
