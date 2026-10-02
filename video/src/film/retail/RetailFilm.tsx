import React from 'react';
import {Easing, useCurrentFrame} from 'remotion';
import {lerp, outX, seg, track} from '../../shared/timeline';
import {Mark} from '../../trailer/ui';
import {RETAIL, typesFor} from '../../reels/content';
import {Cam, Dust, FFPS, FH, FW, FilmAudio, FilmBase, FilmSfx, Floor, Grade, Obj, Stage, dof, rnd, useDarkTheme} from '../engine';
import {Bars, Message, Receipt, SheetPaper, ShelfTag} from '../props';

export const FILM_SECONDS = 35;
export const FILM_DURATION = FILM_SECONDS * FFPS;

const PANEL = RETAIL.panel;
const FLOW = RETAIL.workflows[0];
const TYPES = typesFor('retail-commerce');

const smooth = Easing.bezier(0.45, 0, 0.15, 1);
const slow = Easing.bezier(0.6, 0, 0.3, 1);
const easeIn = Easing.in(Easing.cubic);
const ch = (t: number, keys: [number, number][]) => track(t, keys, smooth);

/* ---------------------------------------------------------------------------
   World layout (px, camera-relative origin at screen centre)
   -------------------------------------------------------------------------- */
const SLAB = {w: 1500, h: 860};
const ST_X = [1250, 2350, 3450, 4550];
const ST_Z = [0, -140, 0, -140];
const A = [14.5, 16.3, 18.1, 19.9]; // packet arrival at each station
const HUB = {x: 4550, y: -120, z: 0};

const packetX = (t: number) =>
  track(
    t,
    [[13.3, 690], [A[0], ST_X[0]], [A[0] + 0.55, ST_X[0]], [A[1], ST_X[1]], [A[1] + 0.55, ST_X[1]], [A[2], ST_X[2]], [A[2] + 0.55, ST_X[2]], [A[3], ST_X[3]]],
    slow,
  );
const packetZ = (t: number) => track(t, [[13.3, 40], [A[0], 60], [A[1], -80], [A[2], 60], [A[3], -80]], smooth);

const lerpCam = (a: Cam, b: Cam, k: number): Cam => ({x: lerp(a.x, b.x, k), y: lerp(a.y, b.y, k), z: lerp(a.z, b.z, k), rx: lerp(a.rx, b.rx, k), ry: lerp(a.ry, b.ry, k), rz: lerp(a.rz, b.rz, k)});

const cameraAt = (t: number): Cam => {
  const S: Cam = {
    x: ch(t, [[0, -70], [4, 30], [5, 300], [7, 0], [7.3, 0], [9, -200], [10, 300], [11.6, 300], [12.8, 60], [13, 60]]),
    y: ch(t, [[0, 140], [4, 120], [5, 30], [7.3, 0], [9, -80], [10, -190], [11.6, -190], [12.8, -40], [13, -40]]),
    z: ch(t, [[0, -80], [4, 200], [5, 520], [7, 780], [7.3, 0], [9, 260], [10, 560], [11.6, 560], [12.8, 480], [13, 480]]),
    rx: 0,
    ry: ch(t, [[0, 4], [4, -2], [5, -4], [7, 2], [7.3, 0], [9, 0], [10, -5], [11.6, -4], [12.8, -2], [13, -2]]),
    rz: ch(t, [[5, 0], [7, 9], [7.3, 0]]),
  };
  const F: Cam = {x: packetX(t - 0.2) - 250, y: -10, z: 380, rx: 0, ry: -7, rz: 0};
  const B: Cam = {
    x: ch(t, [[21, 4300], [22, 4550], [26, 4550], [30, 4550]]),
    y: ch(t, [[21, -10], [22, -30], [26, -30], [28, -40], [30, -60]]),
    z: ch(t, [[21, 380], [22, 380], [26, 260], [28.5, -40], [30, -100]]),
    rx: ch(t, [[21, 0], [26, 0], [30, 5]]),
    ry: ch(t, [[21, -7], [22, 0], [30, 0]]),
    rz: 0,
  };
  return lerpCam(lerpCam(S, F, seg(t, 12.8, 13.8, smooth)), B, seg(t, 20.8, 21.8, smooth));
};

/* ---------------------------------------------------------------------------
   Scene 1-2: the physical retail world, then the collapse
   -------------------------------------------------------------------------- */
type Pose = {x: number; y: number; z: number; ry: number; rz: number};
const PROPS: {key: string; base: Pose; dir: number; node: React.ReactNode; w: number; h: number}[] = [
  {key: 'receipt', base: {x: -560, y: -70, z: -160, ry: 14, rz: -4}, dir: 1, node: <Receipt />, w: 440, h: 640},
  {key: 'sheet', base: {x: 90, y: 40, z: 40, ry: -10, rz: 2}, dir: -1, node: <SheetPaper />, w: 720, h: 500},
  {key: 'tag', base: {x: 660, y: 130, z: 230, ry: -16, rz: 3}, dir: 1, node: <ShelfTag />, w: 560, h: 330},
  {key: 'message', base: {x: 390, y: -290, z: -60, ry: -8, rz: 1.5}, dir: -1, node: <Message />, w: 560, h: 150},
];

const propPose = (i: number, t: number) => {
  const p = PROPS[i];
  const e = easeIn(seg(t, 5.2 + i * 0.12, 7.0 + i * 0.03, (n) => n));
  const float = Math.sin(t * 0.6 + i * 1.3);
  const cx = 0;
  const cy = 0;
  const dx = p.base.x - cx;
  const dy = p.base.y - cy;
  const arc = Math.sin(Math.PI * e) * 220 * p.dir;
  const x = lerp(p.base.x, cx, e) + (-dy / 600) * arc;
  const y = lerp(p.base.y, cy, e) + (dx / 600) * arc + float * 9 * (1 - e);
  const z = lerp(p.base.z, -260, e);
  return {x, y, z, ry: p.base.ry + e * 540 * p.dir, rz: p.base.rz + float * 0.5 + e * 140 * p.dir, s: lerp(1, 0.16, e), e};
};

const World1: React.FC<{t: number; cam: Cam}> = ({t, cam}) => {
  if (t > 7.4) return null;
  const rise = (i: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, (t - 0.1 - i * 0.12) / 1.2)), 3);
  return (
    <>
      <Obj x={-900} y={-120} z={-1000} blur={9} opacity={0.07 * (1 - seg(t, 4.6, 5.8))} style={{fontSize: 700, fontWeight: 200, letterSpacing: '-0.05em', whiteSpace: 'nowrap'}}>412</Obj>
      <Obj x={1250} y={220} z={-1000} blur={9} opacity={0.07 * (1 - seg(t, 4.6, 5.8))} style={{fontSize: 700, fontWeight: 200, letterSpacing: '-0.05em', whiteSpace: 'nowrap'}}>378</Obj>
      <Obj x={200} y={-160} z={-900} blur={6} opacity={0.12 * (1 - seg(t, 4.6, 5.8))}>
        <Bars w={2200} h={520} color="rgba(255,244,226,0.9)" seed={7} />
      </Obj>
      {PROPS.map((p, i) => {
        const q = propPose(i, t);
        const v1 = propPose(i, t + 0.016);
        const v0 = propPose(i, t - 0.016);
        const speed = Math.hypot(v1.x - v0.x, v1.y - v0.y, v1.z - v0.z) / 0.032;
        const blur = Math.min(15, speed * 0.011) + dof(q.z, cam.z, 300, 0.002, 4);
        const o = rise(i) * (1 - seg(q.e, 0.86, 1));
        return (
          <Obj key={p.key} x={q.x} y={q.y + (1 - rise(i)) * 50} z={q.z} ry={q.ry} rz={q.rz} s={q.s} w={p.w} h={p.h} blur={blur} opacity={o}>
            {p.node}
          </Obj>
        );
      })}
    </>
  );
};

/* ---------------------------------------------------------------------------
   Scene 3: the Verity surface
   -------------------------------------------------------------------------- */
const TILE = (i: number) => ({x: 40 + i * 360, y: 100, w: 340, h: 150});
const ROWY = (i: number) => 350 + i * 120;

const Slab: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, 8.9, 9.9, outX);
  const o = p * (1 - 0.92 * seg(t, 14.0, 16.8, smooth));
  if (o < 0.004) return null;
  const sweep = seg(t, 9.0, 10.3, smooth);
  const dim = seg(t, 9.9, 10.5);
  const rowsDim = seg(t, 11.3, 11.9);
  const hot = seg(t, 11.6, 12.0);
  const sw = lerp(-20, 120, sweep);
  return (
    <>
      <Obj x={0} y={0} z={-80} w={1800} h={980} opacity={o * 0.9} blur={70} style={{background: 'radial-gradient(ellipse at 50% 50%, var(--accent-a24), transparent 65%)'}} />
      <Obj x={0} y={0} z={0} ry={lerp(-12, -2, p)} s={lerp(0.9, 1, p)} w={SLAB.w} h={SLAB.h} opacity={o}>
        <div
          style={{
            position: 'relative',
            width: SLAB.w,
            height: SLAB.h,
            borderRadius: 30,
            overflow: 'hidden',
            background: 'linear-gradient(165deg, rgba(46,60,86,0.86), rgba(15,21,32,0.94))',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 70px 160px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.20)',
          }}
        >
          <div style={{position: 'absolute', left: 40, top: 22, display: 'flex', alignItems: 'center', gap: 16}}>
            <Mark height={32} />
            <div style={{fontSize: 21, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)'}}>Verity / {PANEL.title} · {PANEL.meta}</div>
          </div>
          <div style={{position: 'absolute', right: 40, top: 28, display: 'flex', alignItems: 'center', gap: 10, fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>
            <span style={{width: 9, height: 9, borderRadius: 5, background: 'var(--accent)', opacity: 0.55 + 0.45 * Math.sin(t * 2.2)}} />
            Live
          </div>
          {PANEL.metrics.map((m, i) => {
            const r = TILE(i);
            const is = i === 3;
            return (
              <div
                key={m.label}
                style={{
                  position: 'absolute',
                  left: r.x,
                  top: r.y,
                  width: r.w,
                  height: r.h,
                  boxSizing: 'border-box',
                  padding: '20px 26px',
                  borderRadius: 18,
                  background: is && dim > 0.3 ? 'var(--accent-a14)' : 'rgba(255,255,255,0.045)',
                  border: `1px solid ${is && dim > 0.3 ? 'var(--accent)' : 'rgba(255,255,255,0.09)'}`,
                  boxShadow: is && dim > 0.3 ? '0 0 50px var(--accent-a24)' : undefined,
                  opacity: is ? 1 : 1 - 0.68 * dim,
                }}
              >
                <div style={{fontSize: 22, color: 'var(--ink-muted)', fontWeight: 500}}>{m.label}</div>
                <div style={{fontSize: 62, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1, marginTop: 4, fontVariantNumeric: 'tabular-nums'}}>{m.value}</div>
                <div style={{fontSize: 18, color: 'var(--accent-text)'}}>{m.note}</div>
              </div>
            );
          })}
          <div style={{position: 'absolute', left: 40, top: 292, fontSize: 20, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', opacity: 1 - 0.7 * rowsDim}}>{PANEL.rowsLabel}</div>
          {PANEL.rows.slice(0, 4).map((r, i) => {
            const first = i === 0;
            return (
              <div
                key={r.name}
                style={{
                  position: 'absolute',
                  left: 40,
                  top: ROWY(i),
                  width: 1420,
                  height: 108,
                  boxSizing: 'border-box',
                  padding: '22px 30px',
                  borderRadius: 16,
                  background: first && hot > 0.3 ? 'var(--accent-a14)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${first && hot > 0.3 ? 'var(--accent)' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: first && hot > 0.3 ? '0 0 60px var(--accent-a24)' : undefined,
                  opacity: first ? 1 : 1 - 0.78 * rowsDim,
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                  <span style={{width: 12, height: 12, borderRadius: 6, background: 'var(--accent)', flex: 'none'}} />
                  <div style={{fontSize: 32, fontWeight: 400, letterSpacing: '-0.015em'}}>{r.name}</div>
                </div>
                <div style={{fontSize: 22, color: 'var(--ink-muted)', marginTop: 8, marginLeft: 30}}>{r.meta}</div>
              </div>
            );
          })}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `linear-gradient(105deg, transparent ${sw - 14}%, rgba(255,255,255,0.13) ${sw}%, transparent ${sw + 14}%)`,
            }}
          />
        </div>
      </Obj>
    </>
  );
};

/* ---------------------------------------------------------------------------
   Scene 4: Purchase to shelf, one packet through four stations
   -------------------------------------------------------------------------- */
const STATIONS = [
  {n: '01', kicker: 'Low stock', text: FLOW.steps[0], meta: '12 fast-moving lines below reorder point', state: 'Flagged'},
  {n: '02', kicker: 'Purchase order', text: FLOW.steps[1], meta: 'Two suppliers · both deliver Thursday', state: 'Raised'},
  {n: '03', kicker: 'Goods received', text: FLOW.steps[2], meta: FLOW.steps[5], state: 'Received'},
  {n: '04', kicker: 'Stock recorded', text: FLOW.steps[3], meta: FLOW.steps[4], state: 'Recorded'},
];

const Plate: React.FC<{k: number; t: number; cam: Cam}> = ({k, t, cam}) => {
  const s = STATIONS[k];
  const vis = seg(t, A[k] - 2.2, A[k] - 0.9, outX) * (1 - seg(t, 21.0, 22.0));
  if (vis < 0.004) return null;
  const act = seg(t, A[k] - 0.15, A[k] + 0.35, outX);
  const b = Math.min(10, Math.abs(cam.x + 250 - ST_X[k]) * 0.0035) * (1 - act);
  return (
    <Obj x={ST_X[k]} y={-70} z={ST_Z[k]} ry={-8} s={1 + 0.05 * act} w={640} h={400} opacity={vis} blur={b}>
      <div
        style={{
          position: 'relative',
          width: 640,
          height: 400,
          boxSizing: 'border-box',
          padding: '34px 40px',
          borderRadius: 26,
          background: 'linear-gradient(165deg, rgba(46,60,86,0.86), rgba(15,21,32,0.94))',
          border: `1px solid ${act > 0.3 ? 'var(--accent)' : 'rgba(255,255,255,0.10)'}`,
          boxShadow: `0 50px 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.18)${act > 0.3 ? ', 0 0 70px var(--accent-a24)' : ''}`,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 20, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase'}}>
          <span style={{color: 'var(--accent-text)'}}>{s.n}</span>
          <span style={{color: 'var(--ink-muted)'}}>{s.kicker}</span>
        </div>
        <div style={{fontSize: 42, fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.16, marginTop: 28}}>{s.text}</div>
        <div style={{position: 'absolute', left: 40, right: 40, bottom: 34, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{fontSize: 21, color: 'var(--ink-muted)', maxWidth: 400, lineHeight: 1.25}}>{s.meta}</div>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 18, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: act > 0.3 ? 'var(--accent-text)' : 'var(--ink-muted)'}}>
            <span style={{width: 10, height: 10, borderRadius: 5, background: act > 0.3 ? 'var(--accent)' : 'rgba(255,255,255,0.2)', boxShadow: act > 0.3 ? '0 0 14px var(--accent)' : undefined}} />
            {act > 0.3 ? s.state : 'Waiting'}
          </div>
        </div>
      </div>
    </Obj>
  );
};

const Rail: React.FC<{t: number}> = ({t}) => {
  const vis = seg(t, 12.8, 14, outX) * (1 - seg(t, 26.0, 27.4));
  if (vis < 0.004) return null;
  const px = packetX(t);
  return (
    <>
      <Obj x={2800} y={250} z={0} w={4700} h={3} opacity={vis * 0.5} style={{background: 'linear-gradient(90deg, transparent, var(--accent-a40) 8%, var(--accent-a40) 92%, transparent)'}} />
      <Obj x={(690 + px) / 2} y={250} z={0} w={Math.max(2, px - 690)} h={4} opacity={vis} style={{background: 'linear-gradient(90deg, transparent, var(--accent))', boxShadow: '0 0 24px var(--accent)'}} />
      {Array.from({length: 32}).map((_, k) => (
        <Obj key={k} x={500 + k * 150} y={250} z={0} w={2} h={26} opacity={vis * 0.5} style={{background: 'var(--accent-a40)'}} />
      ))}
    </>
  );
};

const Packet: React.FC<{t: number}> = ({t}) => {
  const vis = seg(t, 13.0, 13.5) * (1 - seg(t, 20.9, 21.5));
  if (vis < 0.004) return null;
  const stage = A.filter((a) => t >= a).length;
  const words = ['Flagged', 'PO raised', 'Received', 'Recorded'];
  const label = words[Math.max(0, stage - 1)];
  return (
    <Obj x={packetX(t)} y={track(t, [[13.3, -26], [14.1, 205]], smooth)} z={packetZ(t) + 60} w={280} h={116} opacity={vis}>
      <div
        style={{
          width: 280,
          height: 116,
          boxSizing: 'border-box',
          padding: '22px 28px',
          borderRadius: 22,
          background: 'linear-gradient(160deg, rgba(10,132,255,0.30), rgba(10,132,255,0.10))',
          border: '1px solid var(--accent)',
          boxShadow: '0 0 90px rgba(10,132,255,0.55), 0 0 22px rgba(10,132,255,0.5), inset 0 1px 0 rgba(255,255,255,0.35)',
        }}
      >
        <div style={{fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em'}}>12 lines</div>
        <div style={{fontSize: 20, color: 'var(--accent-text)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginTop: 2}}>{label}</div>
      </div>
    </Obj>
  );
};

/* ---------------------------------------------------------------------------
   Scene 6: the retail ecosystem, a map of the 20 business types
   -------------------------------------------------------------------------- */
const RINGS = [
  {r: 450, n: 8, off: 0.2, dir: 1},
  {r: 830, n: 12, off: 0.55, dir: -1},
];
const NAMES = (() => {
  const out: {name: string; ring: number; idx: number}[] = [];
  let k = 0;
  RINGS.forEach((rg, ri) => {
    for (let i = 0; i < rg.n; i++) {
      if (k < TYPES.length) out.push({name: TYPES[k], ring: ri, idx: i});
      k++;
    }
  });
  return out;
})();

const Constellation: React.FC<{t: number}> = ({t}) => {
  const vis = seg(t, 25.4, 26.4, outX);
  if (vis < 0.004 || t > 31.5) return null;
  const gather = easeIn(seg(t, 30.0, 31.0, (n) => n));
  const C = 1300;
  const plane = 58;
  return (
    <Obj x={HUB.x} y={HUB.y} z={HUB.z} w={2600} h={2600} opacity={vis * (1 - seg(t, 30.9, 31.3))}>
     <div style={{width: 2600, height: 2600, perspective: 4600}}>
      <div style={{position: 'relative', width: 2600, height: 2600, transform: `rotateX(${plane}deg)`}}>
        <svg width={2600} height={2600} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
          {RINGS.map((rg, ri) => (
            <circle key={ri} cx={C} cy={C} r={rg.r * (1 - gather)} fill="none" strokeWidth={2} strokeDasharray="4 12" style={{stroke: 'var(--accent-a40)'}} opacity={seg(t, 26.2 + ri * 0.4, 27.6 + ri * 0.4)} />
          ))}
          {NAMES.map((nm, i) => {
            const rg = RINGS[nm.ring];
            const ang = (nm.idx / rg.n) * Math.PI * 2 + rg.off + rg.dir * (t - 26) * 0.045;
            const p = seg(t, 26.4 + i * 0.09, 27.4 + i * 0.09, outX);
            const rad = rg.r * lerp(0.78, 1, p) * (1 - gather);
            return <line key={nm.name} x1={C} y1={C} x2={C + Math.cos(ang) * rad} y2={C + Math.sin(ang) * rad} strokeWidth={1.5} style={{stroke: 'var(--accent-a24)'}} opacity={p * (1 - gather)} />;
          })}
        </svg>
        {NAMES.map((nm, i) => {
          const rg = RINGS[nm.ring];
          const ang = (nm.idx / rg.n) * Math.PI * 2 + rg.off + rg.dir * (t - 26) * 0.045;
          const p = seg(t, 26.4 + i * 0.09, 27.4 + i * 0.09, outX);
          const rad = rg.r * lerp(0.78, 1, p) * (1 - gather);
          return (
            <div
              key={nm.name}
              style={{
                position: 'absolute',
                left: C + Math.cos(ang) * rad,
                top: C + Math.sin(ang) * rad,
                transform: `translate(-50%, -50%) scale(${lerp(0.9, 1, p)})`,
                fontSize: 44,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                opacity: p * (1 - seg(gather, 0.3, 0.75)),
                filter: p < 0.98 ? `blur(${(1 - p) * 14}px)` : undefined,
              }}
            >
              {nm.name}
            </div>
          );
        })}
        <div
          style={{
            position: 'absolute',
            left: C,
            top: C,
            width: 190,
            height: 190,
            transform: `translate(-50%, -50%) scale(${1 + gather * 1.6})`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(10,132,255,0.30), rgba(15,21,32,0.9) 70%)',
            border: '1px solid var(--accent)',
            boxShadow: '0 0 120px rgba(10,132,255,0.5)',
            display: 'grid',
            placeItems: 'center',
            opacity: seg(t, 25.6, 26.4),
          }}
        >
          <Mark height={74} />
        </div>
      </div>
     </div>
    </Obj>
  );
};

/* ---------------------------------------------------------------------------
   2D overlays: headlines, numbers, brand. Kept flat so type stays crisp.
   -------------------------------------------------------------------------- */
const Rise: React.FC<{t: number; at: number; out?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({t, at, out, children, style}) => {
  const p = seg(t, at, at + 0.9, outX);
  const o = (out === undefined ? 1 : 1 - seg(t, out, out + 0.5)) * Math.min(1, p * 2.4);
  if (o <= 0.003) return null;
  return <div style={{opacity: o, transform: `translateY(${(1 - p) * 34}px)`, ...style}}>{children}</div>;
};

const Kicker: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div style={{fontSize: 22, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-muted)', ...style}}>{children}</div>
);

const Overlay1: React.FC<{t: number}> = ({t}) => {
  const scrim = seg(t, 2.0, 2.8) * (1 - seg(t, 4.3, 4.9)) * 0.8;
  const punch = seg(t, 4.2, 4.9, outX) * (1 - seg(t, 5.4, 5.9));
  return (
    <>
      <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 620, background: 'linear-gradient(to top, rgba(6,9,14,0.96) 30%, transparent)', opacity: scrim}} />
      <div style={{position: 'absolute', inset: 0, background: 'rgba(6,9,14,0.62)', opacity: punch}} />
      <div style={{position: 'absolute', left: 130, bottom: 110, width: 1200}}>
        <Rise t={t} at={2.2} out={4.2}>
          <div style={{fontSize: 104, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1.04}}>The shelf says one thing.</div>
          <div style={{fontSize: 104, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1.04, color: 'var(--ink-muted)'}}>The sheet says another.</div>
        </Rise>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, bottom: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: punch, transform: `scale(${lerp(0.96, 1, punch)})`}}>
        <div style={{fontSize: 250, fontWeight: 200, letterSpacing: '-0.05em', lineHeight: 0.95, color: 'var(--accent)', fontVariantNumeric: 'tabular-nums', textShadow: '0 0 80px rgba(10,132,255,0.45)'}}>34</div>
        <Kicker style={{fontSize: 30, color: 'var(--ink)', marginTop: 10}}>Units apart</Kicker>
      </div>
    </>
  );
};

const Streaks: React.FC<{t: number}> = ({t}) => {
  const e = seg(t, 5.6, 7.1, easeIn);
  if (e <= 0.002 || t > 7.4) return null;
  return (
    <svg width={FW} height={FH} style={{position: 'absolute', inset: 0, opacity: 1 - seg(t, 7.1, 7.4)}}>
      {Array.from({length: 72}).map((_, i) => {
        const ang = rnd(i) * Math.PI * 2;
        const r0 = lerp(640 + rnd(i + 3) * 520, 40, e);
        const r1 = r0 + lerp(0, 300, e) * (0.5 + rnd(i + 9));
        return <line key={i} x1={FW / 2 + Math.cos(ang) * r0} y1={FH / 2 + Math.sin(ang) * r0} x2={FW / 2 + Math.cos(ang) * r1} y2={FH / 2 + Math.sin(ang) * r1} strokeWidth={1 + rnd(i + 5) * 2} style={{stroke: 'rgba(255,244,226,0.8)'}} opacity={0.55 * e} />;
      })}
    </svg>
  );
};

const Bloom: React.FC<{t: number; at: number}> = ({t, at}) => {
  const o = seg(t, at, at + 0.14) * (1 - seg(t, at + 0.14, at + 0.9));
  if (o <= 0.003) return null;
  const s = lerp(0.4, 1.6, seg(t, at, at + 0.9, outX));
  return <div style={{position: 'absolute', left: FW / 2 - 700, top: FH / 2 - 700, width: 1400, height: 1400, borderRadius: '50%', opacity: o, transform: `scale(${s})`, background: 'radial-gradient(circle, rgba(255,255,255,0.85), rgba(10,132,255,0.38) 24%, transparent 62%)'}} />;
};

const Overlay2: React.FC<{t: number}> = ({t}) => {
  if (t < 7.4 || t > 9.6) return null;
  const draw = seg(t, 7.5, 8.4, smooth);
  const fill = seg(t, 8.2, 8.7);
  const out = seg(t, 8.95, 9.3, smooth);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `scale(${1 + out * 0.2})`}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 250, display: 'flex', justifyContent: 'center', filter: 'drop-shadow(0 0 40px rgba(10,132,255,0.55))'}}>
        <Mark height={300} draw={draw} fill={fill} />
      </div>
      <Rise t={t} at={8.3} style={{position: 'absolute', left: 0, right: 0, top: 610, textAlign: 'center', fontSize: 120, fontWeight: 300, letterSpacing: '0.12em'}}>ONE RECORD.</Rise>
      <Rise t={t} at={8.8} style={{position: 'absolute', left: 0, right: 0, top: 770, textAlign: 'center', fontSize: 30, fontWeight: 300, letterSpacing: '0.1em', color: 'var(--ink-muted)'}}>Retail operations, connected.</Rise>
    </div>
  );
};

const CounterHUD: React.FC<{t: number}> = ({t}) => {
  const vis = seg(t, 14.4, 15.0) * (1 - seg(t, 21.0, 21.6));
  if (vis < 0.004) return null;
  const v = Math.round(37 - 12 * seg(t, A[3], A[3] + 1.2, smooth));
  const flash = seg(t, A[3], A[3] + 0.3) * (1 - 0.7 * seg(t, A[3] + 0.3, A[3] + 1.4));
  return (
    <div style={{position: 'absolute', left: 120, bottom: 96, opacity: vis}}>
      <Kicker style={{fontSize: 20}}>Below reorder</Kicker>
      <div style={{fontSize: 118, fontWeight: 200, letterSpacing: '-0.05em', lineHeight: 1, fontVariantNumeric: 'tabular-nums', color: flash > 0.05 ? 'var(--accent)' : 'var(--ink)', textShadow: flash > 0.05 ? `0 0 ${flash * 50}px rgba(10,132,255,0.6)` : undefined}}>{v}</div>
    </div>
  );
};

const Reconcile: React.FC<{t: number}> = ({t}) => {
  if (t < 21.0 || t > 26.5) return null;
  const inP = seg(t, 21.2, 22.0, outX);
  const out = seg(t, 25.9, 26.4, smooth);
  const chip = seg(t, 22.6, 23.4, smooth);
  const roll = seg(t, 23.4, 24.1, smooth);
  const eq = seg(t, 24.0, 24.2);
  const merge = seg(t, 24.3, 24.9, smooth);
  const ring = seg(t, 24.6, 25.5, outX);
  const left = Math.round(lerp(378, 412, roll));
  const lx = lerp(560, 960, merge);
  const rx = lerp(1360, 960, merge);
  const numStyle: React.CSSProperties = {position: 'absolute', top: 330, transform: 'translateX(-50%)', fontSize: 340, fontWeight: 200, letterSpacing: '-0.05em', lineHeight: 1, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap'};
  const cx = lerp(rx + 60, lx + 60, smooth(chip));
  const cy = 300 - Math.sin(Math.PI * chip) * 120;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: inP * (1 - out)}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(6,9,14,0.7), rgba(6,9,14,0.35))'}} />
      <Kicker style={{position: 'absolute', left: 0, right: 0, top: 90, textAlign: 'center', fontSize: 24}}>{PANEL.rows[2].name}</Kicker>
      <Kicker style={{position: 'absolute', left: lx, top: 280, transform: 'translateX(-50%)', opacity: 1 - merge}}>Shelf · counted</Kicker>
      <Kicker style={{position: 'absolute', left: rx, top: 280, transform: 'translateX(-50%)', opacity: 1 - merge}}>Sheet · system</Kicker>
      <div style={{...numStyle, left: lx, opacity: 1}}>{left}</div>
      <div style={{...numStyle, left: rx, opacity: 1 - seg(merge, 0.7, 1)}}>412</div>
      <div style={{position: 'absolute', left: 960, top: 380, transform: 'translateX(-50%)', fontSize: 130, fontWeight: 200, color: 'var(--ink-muted)', opacity: (1 - merge) * (1 - seg(t, 24.0, 24.3))}}>≠</div>
      <div style={{position: 'absolute', left: 960, top: 380, transform: 'translateX(-50%)', fontSize: 130, fontWeight: 200, color: 'var(--accent)', opacity: eq * (1 - merge)}}>=</div>
      {chip > 0 && chip < 1 ? (
        <div style={{position: 'absolute', left: cx, top: cy, transform: 'translate(-50%, -50%)', fontSize: 120, fontWeight: 300, color: 'var(--accent)', textShadow: '0 0 60px rgba(10,132,255,0.8)', opacity: Math.min(1, chip * 4) * (1 - seg(chip, 0.9, 1))}}>+34</div>
      ) : null}
      {ring > 0 && ring < 1 ? <div style={{position: 'absolute', left: 960 - 520 * ring, top: 500 - 520 * ring, width: 1040 * ring, height: 1040 * ring, borderRadius: '50%', border: '2px solid var(--accent)', opacity: 0.6 * (1 - ring)}} /> : null}
      <Rise t={t} at={24.9} style={{position: 'absolute', left: 0, right: 0, top: 740, textAlign: 'center', fontSize: 52, fontWeight: 300, letterSpacing: '0.2em'}}>ONE NUMBER.</Rise>
      <Rise t={t} at={25.35} style={{position: 'absolute', left: 0, right: 0, top: 830, textAlign: 'center', fontSize: 52, fontWeight: 500, letterSpacing: '0.2em', color: 'var(--accent-text)'}}>ONE RECORD.</Rise>
    </div>
  );
};

const BreadthText: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 30.0, 30.6);
  return (
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 360, background: 'linear-gradient(to top, rgba(6,9,14,0.9), transparent)', opacity: (1 - out) * seg(t, 27.6, 28.3)}}>
      <Rise t={t} at={28.0} out={30.0} style={{position: 'absolute', left: 0, right: 0, bottom: 150, textAlign: 'center'}}>
        <Kicker style={{fontSize: 34, color: 'var(--ink)', letterSpacing: '0.26em'}}>20 retail business types</Kicker>
      </Rise>
      <Rise t={t} at={29.0} out={30.0} style={{position: 'absolute', left: 0, right: 0, bottom: 60, textAlign: 'center', fontSize: 64, fontWeight: 300, letterSpacing: '0.12em', color: 'var(--accent-text)'}}>ONE VERITY.</Rise>
    </div>
  );
};

const BARS = Array.from({length: 120}).map((_, i) => 1 + Math.floor(rnd(i + 41) * 4));

const Close: React.FC<{t: number}> = ({t}) => {
  if (t < 31.0) return null;
  const draw = seg(t, 31.2, 31.9, smooth);
  const fill = seg(t, 31.6, 32.1);
  const scanP = seg(t, 33.5, 34.5, smooth);
  const widen = seg(t, 34.5, 34.95, smooth);
  const total = BARS.reduce((a, b) => a + b * 2, 0);
  const unit = FW / total;
  let x = 0;
  const brandOut = seg(t, 33.4, 33.9);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 55% at 50% 48%, rgba(10,132,255,0.10), transparent 70%)', opacity: seg(t, 31.1, 32)}} />
      <div style={{position: 'absolute', inset: 0, opacity: 1 - brandOut}}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 250, display: 'flex', justifyContent: 'center', filter: 'drop-shadow(0 0 36px rgba(10,132,255,0.5))'}}>
          <Mark height={190} draw={draw} fill={fill} />
        </div>
        <Rise t={t} at={32.0} style={{position: 'absolute', left: 0, right: 0, top: 500, textAlign: 'center', fontSize: 96, fontWeight: 500, letterSpacing: '0.34em', paddingLeft: '0.34em'}}>VERITY</Rise>
        <Rise t={t} at={32.5} style={{position: 'absolute', left: 0, right: 0, top: 650, textAlign: 'center', fontSize: 42, fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)'}}>Retail on one record.</Rise>
        <Rise t={t} at={33.0} style={{position: 'absolute', left: 0, right: 0, top: 740, textAlign: 'center'}}>
          <Kicker style={{fontSize: 24, color: 'var(--accent-text)'}}>theverityai.xyz</Kicker>
        </Rise>
      </div>
      {scanP > 0 ? (
        <>
          <div style={{position: 'absolute', inset: 0, clipPath: `inset(0 ${(1 - scanP) * 100}% 0 0)`}}>
            {BARS.map((b, i) => {
              const bx = x;
              x += b * 2 * unit;
              const w = b * unit * lerp(1, 1.9, widen);
              return <div key={i} style={{position: 'absolute', left: bx, top: 0, width: w, height: '100%', background: 'rgba(236,229,214,0.92)'}} />;
            })}
          </div>
          <div style={{position: 'absolute', left: scanP * FW - 2, top: 0, width: 4, height: '100%', background: 'var(--accent)', boxShadow: '0 0 40px 8px rgba(10,132,255,0.8)', opacity: scanP < 1 ? 1 : 0}} />
        </>
      ) : null}
    </div>
  );
};

/* ---------------------------------------------------------------------------
   Sound design (public/film): generated drone, risers, whooshes and hits, plus a few bundled CC0 interface sounds.
   -------------------------------------------------------------------------- */
const SFX: FilmSfx[] = [
  {file: 'card-slide-1.ogg', at: 0.15, vol: 0.3},
  {file: 'card-slide-2.ogg', at: 0.6, vol: 0.28},
  {file: 'card-slide-3.ogg', at: 1.05, vol: 0.28},
  {file: 'riser.wav', at: 2.6, vol: 0.32},
  {file: 'subhit.wav', at: 4.2, vol: 0.5},
  {file: 'select_008.ogg', at: 4.2, vol: 0.45},
  {file: 'whoosh.wav', at: 5.0, vol: 0.55},
  {file: 'riser.wav', at: 5.0, vol: 0.5},
  {file: 'subhit.wav', at: 7.1, vol: 1.0},
  {file: 'impactGlass_medium_000.ogg', at: 7.1, vol: 0.6},
  {file: 'impactGlass_light_001.ogg', at: 8.0, vol: 0.5},
  {file: 'subhit.wav', at: 8.3, vol: 0.65},
  {file: 'revwhoosh.wav', at: 9.0, vol: 0.5},
  {file: 'impactGlass_medium_000.ogg', at: 9.2, vol: 0.5},
  {file: 'select_008.ogg', at: 10.3, vol: 0.5},
  {file: 'click_003.ogg', at: 11.7, vol: 0.8},
  {file: 'whoosh.wav', at: 13.2, vol: 0.5},
  {file: 'impactGlass_light_001.ogg', at: 14.5, vol: 0.5},
  {file: 'select_008.ogg', at: 14.55, vol: 0.4},
  {file: 'impactGlass_light_001.ogg', at: 16.3, vol: 0.5},
  {file: 'select_008.ogg', at: 16.35, vol: 0.4},
  {file: 'impactGlass_light_001.ogg', at: 18.1, vol: 0.5},
  {file: 'select_008.ogg', at: 18.15, vol: 0.4},
  {file: 'impactGlass_medium_000.ogg', at: 19.9, vol: 0.6},
  {file: 'select_008.ogg', at: 20.1, vol: 0.3},
  {file: 'select_008.ogg', at: 20.35, vol: 0.3},
  {file: 'select_008.ogg', at: 20.6, vol: 0.3},
  {file: 'revwhoosh.wav', at: 21.0, vol: 0.4},
  {file: 'whoosh.wav', at: 22.6, vol: 0.45},
  {file: 'click_003.ogg', at: 23.4, vol: 0.7},
  {file: 'select_008.ogg', at: 23.55, vol: 0.35},
  {file: 'select_008.ogg', at: 23.75, vol: 0.35},
  {file: 'select_008.ogg', at: 23.95, vol: 0.35},
  {file: 'subhit.wav', at: 24.3, vol: 0.9},
  {file: 'impactGlass_medium_000.ogg', at: 24.3, vol: 0.55},
  {file: 'select_008.ogg', at: 24.95, vol: 0.45},
  {file: 'revwhoosh.wav', at: 26.0, vol: 0.5},
  {file: 'riser.wav', at: 26.2, vol: 0.4},
  {file: 'subhit.wav', at: 29.0, vol: 0.55},
  {file: 'whoosh.wav', at: 30.0, vol: 0.6},
  {file: 'subhit.wav', at: 31.1, vol: 0.9},
  {file: 'impactBell_heavy_000.ogg', at: 31.1, vol: 0.5},
  {file: 'whoosh.wav', at: 33.5, vol: 0.4},
  {file: 'beep.wav', at: 33.7, vol: 0.35},
  {file: 'beep.wav', at: 34.0, vol: 0.35},
  {file: 'beep.wav', at: 34.3, vol: 0.35},
];

/** Reel 01, Retail & Commerce. 16:9 brand film. Screenplay: docs/film-01-retail.md. Content: content/businesses/retail-stores.js. */
export const RetailFilm: React.FC = () => {
  useDarkTheme();
  const t = useCurrentFrame() / FFPS;
  const cam = cameraAt(t);
  const envOp = (1 - seg(t, 7.0, 7.6)) + seg(t, 8.8, 9.6) * 0.6;
  const worldOp = 1 - seg(t, 30.9, 31.3);
  return (
    <FilmBase>
      <div style={{position: 'absolute', inset: 0, opacity: worldOp}}>
        <Stage cam={cam}>
          <Floor y={330} camX={cam.x} opacity={Math.min(1, envOp) * 0.9} />
          <Dust t={t} cam={cam} opacity={Math.min(1, envOp)} />
          <World1 t={t} cam={cam} />
          <Slab t={t} />
          <Rail t={t} />
          {[0, 1, 2, 3].map((k) => (
            <Plate key={k} k={k} t={t} cam={cam} />
          ))}
          <Packet t={t} />
          <Constellation t={t} />
        </Stage>
      </div>
      <Streaks t={t} />
      <Bloom t={t} at={7.05} />
      <Bloom t={t} at={31.0} />
      <Overlay1 t={t} />
      <Overlay2 t={t} />
      <CounterHUD t={t} />
      <Reconcile t={t} />
      <BreadthText t={t} />
      <Close t={t} />
      <Grade t={t} />
      <FilmAudio sfx={SFX} droneVol={0.5} />
    </FilmBase>
  );
};
