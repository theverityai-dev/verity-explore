import React from 'react';
import {Audio, staticFile, useCurrentFrame} from 'remotion';
import {inOut, lerp, outX, seg, track} from '../../shared/timeline';
import {Check, Mark} from '../../trailer/ui';
import {capOffset} from '../../social/kit';
import {CTAPill, Lockup, OfferChip} from '../kit';
import {BlueprintObject, CAMPAIGN, CHIP, FloorPlan, Note} from './boards';
import {type Cam, type PlaneSpec, Studio3D} from './studio3d';
import {Branch, Caption, CastShadow, Plate, Sheet, Support, Title, Workspace} from './world';
import {WORDS} from './words';

/** R07 "Built around your business". One persistent 3D studio for the whole film (so the room never changes tone) with
 *  the HTML information layers on top. Every beat is keyed to the founder's word timings (words.ts). The frozen
 *  keyframes are in BOARDS.md; this file moves between them. */

export const R07_FPS = 30;
export const R07_DURATION = Math.round(43.5 * R07_FPS);

/** VO anchors in seconds, read off words.ts. Retime here if the VO is re-recorded. */
const V = {
  fixed: 2.44, but: 4.84, verity: 7.22, pehle: 11.16, map: [13.62, 14.46, 15.4, 16.36, 17.26], system: 18.96,
  steps: [23.12, 24.64, 26.28, 27.48], approval: 26.56, offer: 28.14, diwali: 31.26, agar: 32.42,
  verbs: [32.96, 33.72, 34.58], learn: 36.28, tell: 38.76, get: 39.96,
} as const;

const tk = (t: number, keys: [number, number][]) => track(t, keys, inOut);

/** One information layer: rises in at `a`, rises out at `b`. `depth` adds the depth reveal (scale and focus). */
const Layer: React.FC<{t: number; a: number; b?: number; dy?: number; depth?: boolean; children: React.ReactNode}> = ({t, a, b = 1e9, dy = 36, depth, children}) => {
  const i = seg(t, a, a + (depth ? 0.9 : 0.7), outX);
  const o = seg(t, b, b + 0.45, inOut);
  const op = i * (1 - o);
  if (op <= 0) return null;
  const s = depth ? 0.95 + 0.05 * i + 0.03 * o : 1;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: op, transform: `translateY(${(1 - i) * dy - o * dy}px) scale(${s})`, filter: depth && i < 1 ? `blur(${(1 - i) * 8}px)` : undefined}}>
      {children}
    </div>
  );
};

/* ---------- the 3D world over time ---------- */

const camAt = (t: number): Cam => {
  const x = tk(t, [[0, 0], [4.9, 0], [7.2, 0.06], [8.6, 0.12], [13.4, 0.12], [14.4, 0]]);
  return {
    pos: [x, tk(t, [[0, 1.25], [38.6, 1.25], [39.8, 1.2]]), tk(t, [[0, 8.6], [7.2, 8.25], [8.6, 7.7], [13.4, 7.55], [14.4, 8.3], [38.6, 7.95], [39.8, 8.5], [43.5, 8.35]])],
    look: [x, tk(t, [[0, 0.79], [38.6, 0.79], [39.8, 0.95]]), 0],
    fov: 24,
  };
};

const planesAt = (t: number): PlaneSpec[] => {
  // A: the business. Blank etched template (hook), forced into the lattice (fixed system), becomes its own branch.
  const A: PlaneSpec = {
    x: tk(t, [[0, 0.5], [2.6, 0.5], [3.4, 0.12], [4.9, 0.12], [5.9, 0.1], [7.3, 0.1], [8.4, 0.45]]),
    z: tk(t, [[0, 0], [4.9, 0], [5.9, -0.9], [7.3, -0.9], [8.4, -0.6]]),
    w: tk(t, [[0, 1.35], [2.6, 1.35], [3.4, 1.3], [4.9, 1.3], [5.9, 0.78], [7.3, 0.78], [8.4, 1.0]]),
    h: tk(t, [[0, 1.42], [2.6, 1.42], [3.4, 1.48], [4.9, 1.48], [5.9, 1.1], [7.3, 1.1], [8.4, 1.25]]),
    ry: tk(t, [[0, -0.34], [2.6, -0.34], [3.4, -0.16], [4.9, -0.16], [5.9, -0.24], [7.3, -0.24], [8.4, -0.12]]),
    rise: tk(t, [[0, 0], [0.9, 1], [13.3, 1], [14.1, 0]]),
    figs: {
      etched: seg(t, 0.5, 1.5, outX) * (1 - seg(t, 2.6, 3.3)),
      lattice: seg(t, 2.8, 4.0, outX) * (1 - seg(t, V.but, V.but + 0.7)),
      branch: seg(t, 5.3, 6.3, outX),
    },
  };
  // B and C: two more businesses, each its own shape.
  const B: PlaneSpec = {x: 0.72, z: -2.1, w: 0.72, h: 1.05, ry: -0.38, rise: tk(t, [[4.95, 0], [5.85, 1], [7.2, 1], [7.9, 0]]), figs: {loop: seg(t, 5.5, 6.4, outX)}};
  const C: PlaneSpec = {x: -0.5, z: 0.05, w: 0.66, h: 0.86, ry: -0.1, rise: tk(t, [[5.15, 0], [6.05, 1], [7.25, 1], [7.95, 0]]), figs: {chain: seg(t, 5.7, 6.6, outX)}};
  // D and E: the layers' glass standing behind the workspace while it is built.
  const D: PlaneSpec = {x: -1.0, z: -1.7, w: 0.72, h: 1.55, ry: 0.32, rise: tk(t, [[18.9, 0], [19.8, 1], [22.9, 1], [23.6, 0]]), figure: 'etched'};
  const E: PlaneSpec = {x: 1.02, z: -2.0, w: 0.72, h: 1.65, ry: -0.4, rise: tk(t, [[19.05, 0], [19.95, 1], [22.95, 1], [23.65, 0]]), figure: 'etched'};
  // F: the business's traced system, in soft focus behind the process (S5), then beside the Blueprint (S7).
  const second = t > 30;
  const F: PlaneSpec = {
    ...(second ? {x: 0.7, z: -1.4, w: 0.85, h: 1.45, ry: -0.28} : {x: 0.72, z: -0.9, w: 1.2, h: 1.0, ry: -0.3}),
    rise: tk(t, [[23.1, 0], [23.9, 1], [28.0, 1], [28.7, 0], [32.5, 0], [33.3, 1], [38.6, 1], [39.3, 0]]),
    figs: {trace: second ? seg(t, 32.9, 34.0, outX) : seg(t, 23.5, 24.6, outX)},
  };
  // G and H: the end-card portal.
  const G: PlaneSpec = {x: -0.86, z: -0.6, w: 0.7, h: 2.3, ry: 0.42, rise: tk(t, [[38.9, 0], [39.8, 1]]), figure: 'etched'};
  const H: PlaneSpec = {x: 0.86, z: -0.6, w: 0.7, h: 2.3, ry: -0.42, rise: tk(t, [[39.05, 0], [39.95, 1]]), figure: 'etched'};
  return [A, B, C, D, E, F, G, H];
};

/** One continuous dolly-in for the whole film (the current: Z, toward the subject). Linear, so it never stalls at a
 *  seam; faster where the frame is otherwise still (the study, the process). Applied to the world and the objects,
 *  never to the type, which lands and holds. */
const pushAt = (t: number) =>
  track(t, [[0, 1], [7.2, 1.018], [13.4, 1.045], [18.9, 1.06], [23.1, 1.07], [28.1, 1.085], [32.4, 1.095], [38.6, 1.11], [43.5, 1.115]], (n) => n);

const blurAt = (t: number) => tk(t, [[0, 0], [7.5, 0], [8.7, 6], [13.3, 6], [14.0, 0], [23.0, 0], [23.8, 6], [27.9, 6], [28.6, 0]]);

/* ---------- captions from the word timings ---------- */

type Chunk = {a: number; b: number; text: string};
const CHUNKS: Chunk[] = (() => {
  const out: {a: number; end: number; words: string[]}[] = [];
  let cur: {a: number; end: number; words: string[]} | null = null;
  WORDS.forEach(([s, e, w], i) => {
    const prevEnd = i > 0 ? WORDS[i - 1][1] : 0;
    const len = cur ? cur.words.join(' ').length : 0;
    const prevWord = cur ? cur.words[cur.words.length - 1] : '';
    // Never run past a sentence end (text would appear before it is spoken); commas break only once a chunk has body.
    const breakHere = !cur || len + w.length + 1 > 34 || s - prevEnd > 0.45 || /[.?]$/.test(prevWord) || (/,$/.test(prevWord) && len >= 14);
    if (breakHere) {
      if (cur) out.push(cur);
      cur = {a: s, end: e, words: [w]};
    } else if (cur) {
      cur.words.push(w);
      cur.end = e;
    }
  });
  if (cur) out.push(cur);
  return out.map((c, i) => ({a: c.a, b: Math.min(c.end + 0.6, i + 1 < out.length ? out[i + 1].a - 0.04 : c.end + 0.6), text: c.words.join(' ')}));
})();

const Captions: React.FC<{t: number}> = ({t}) => {
  if (t > V.tell - 0.1) return null; // the end card carries its own words
  const c = CHUNKS.find((k) => t >= k.a - 0.06 && t < k.b);
  if (!c) return null;
  const o = seg(t, c.a - 0.06, c.a + 0.08) * (1 - seg(t, c.b - 0.1, c.b));
  return (
    <div style={{position: 'absolute', inset: 0, opacity: o}}>
      <Caption text={c.text} />
    </div>
  );
};

/* ---------- shot layers ---------- */

const LAYER_Y = [640, 760, 880, 1000, 1120];
const LAYERS = ['Workflows', 'Teams', 'Approvals', 'Reporting', 'Requirements'];

/** S4a: the study becomes the exploded map; each layer arrives as the founder names it. */
const MapStack: React.FC<{t: number}> = ({t}) => {
  const collapse = seg(t, V.system - 0.4, V.system + 0.3, inOut);
  if (t < V.map[0] - 0.1 || collapse >= 1) return null;
  const reach = LAYER_Y[0] + (LAYER_Y[4] - LAYER_Y[0]) * seg(t, V.map[0] + 0.3, V.map[4] + 0.4, inOut);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - collapse, transform: `translateY(${collapse * 70}px)`}}>
      <div style={{opacity: seg(t, V.map[0], V.map[0] + 0.6)}}>
        <CastShadow x={420} y={1296} w={480} len={170} o={0.1} />
      </div>
      {[4, 3, 2, 1, 0].map((i) => {
        const p = seg(t, V.map[i], V.map[i] + 0.6, outX);
        return p > 0 ? (
          <div key={i} style={{position: 'absolute', inset: 0, opacity: p, transform: `translateY(${(1 - p) * 40}px)`}}>
            <Plate cx={660} cy={LAYER_Y[i]} size={480} />
          </div>
        ) : null;
      })}
      <svg width={1080} height={1920} style={{position: 'absolute', inset: 0}}>
        {reach > LAYER_Y[0] ? <path d={`M660 ${LAYER_Y[0]} V${reach}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" /> : null}
        {LAYER_Y.map((y, i) => (
          <g key={y} opacity={seg(t, V.map[i] + 0.2, V.map[i] + 0.6)}>
            <circle cx={660} cy={y} r={8} fill="#fff" stroke="var(--accent)" strokeWidth={3} />
            <path d={`M300 ${y - 16} H318`} stroke="rgba(15,17,21,0.4)" strokeWidth={1.2} />
          </g>
        ))}
      </svg>
      {LAYERS.map((l, i) => {
        const p = seg(t, V.map[i], V.map[i] + 0.5, outX);
        return (
          <div key={l} style={{position: 'absolute', left: 80, top: LAYER_Y[i] - 29, width: 212, fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', opacity: p, transform: `translateX(${(1 - p) * -16}px)`}}>
            {l}
          </div>
        );
      })}
    </div>
  );
};

/** S5: four lines land on the founder's words; each earlier line steps back as the next arrives. */
const Process: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 27.95, 28.4, inOut);
  if (t < V.steps[0] - 0.1 || out >= 1) return null;
  const lines = ['Requirement.', 'Proposed system.', 'Your approval.', 'Then implementation.'];
  const size = 84;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateY(${-out * 36}px)`}}>
      {lines.map((l, k) => {
        // A long settle and a slow step-back: the gaps between the founder's phrases never read as a freeze.
        const p = seg(t, V.steps[k], V.steps[k] + 1.1, outX);
        const dim = k < 3 ? 1 - 0.74 * seg(t, V.steps[k + 1], V.steps[k + 1] + 1.0) : 1;
        return (
          <div key={l} style={{position: 'absolute', left: 80, top: 520 + k * 120 - capOffset(size, 1.06), fontSize: size, lineHeight: 1.06, fontWeight: 300, letterSpacing: '-0.038em', whiteSpace: 'nowrap', opacity: p * dim, transform: `translateY(${(1 - p) * 30}px)`}}>
            {l}
          </div>
        );
      })}
      <div style={{position: 'absolute', left: 650, top: 752, opacity: seg(t, V.approval, V.approval + 0.15) * (1 - 0.74 * seg(t, V.steps[3], V.steps[3] + 0.5))}}>
        <Check p={seg(t, V.approval, V.approval + 0.45, outX)} size={56} />
      </div>
    </div>
  );
};

/** The Blueprint sheet from S6 to S8: offer hero, then steps aside for the qualifier, then becomes the end-card object. */
const OfferSheetAnim: React.FC<{t: number}> = ({t}) => {
  const i = seg(t, V.offer + 0.05, V.offer + 0.95, outX);
  const gone = seg(t, 38.9, 39.5, inOut);
  if (i <= 0 || gone >= 1) return null;
  const s = tk(t, [[V.agar, 1], [V.agar + 0.9, 0.66], [38.6, 0.66], [39.5, 0.3]]) * (0.94 + 0.06 * i);
  const x = tk(t, [[V.agar, 110], [V.agar + 0.9, 80], [38.6, 80], [39.5, (1080 - 860 * 0.3) / 2]]);
  const y = tk(t, [[V.agar, 500], [V.agar + 0.9, 480], [38.6, 480], [39.5, 1180]]) + (1 - i) * 40;
  const rise = (a: number) => {
    const p = seg(t, a, a + 0.6, outX);
    return {opacity: p, transform: `translateY(${(1 - p) * 24}px)`} as React.CSSProperties;
  };
  const block = 1 - seg(t, V.agar, V.agar + 0.6);
  return (
    <div style={{position: 'absolute', left: x, top: y, width: 860, height: 800, transform: `scale(${s})`, transformOrigin: '0 0', opacity: i * (1 - gone), filter: i < 1 ? `blur(${(1 - i) * 8}px)` : undefined}}>
      <Sheet x={0} y={0} w={860} h={800}>
        <div style={{position: 'absolute', right: 24, bottom: 24, width: 390, border: '1px solid rgba(15,17,21,0.32)', background: 'rgba(251,252,253,0.9)', fontSize: 17, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', opacity: block}}>
          <div style={{padding: '10px 14px', borderBottom: '1px solid rgba(15,17,21,0.2)', color: 'var(--ink)'}}>Business analysis · Sheet 01</div>
          <div style={{padding: '10px 14px'}}>Prepared by Verity product team</div>
        </div>
        <div style={{position: 'absolute', left: 72, top: 92, right: 72}}>
          <div style={{fontSize: 26, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', ...rise(V.offer + 0.3)}}>{CAMPAIGN.name}</div>
          <div style={{display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 34, ...rise(V.offer + 0.5)}}>
            <span style={{fontSize: 168, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1}}>₹5,000</span>
            <span style={{fontSize: 56, fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink-muted)'}}>value</span>
          </div>
          <div style={{marginTop: 30, fontSize: 80, fontWeight: 300, letterSpacing: '-0.038em', lineHeight: 1.04, color: 'var(--accent)', ...rise(V.diwali - 0.15)}}>{CAMPAIGN.until}.</div>
          <div style={{marginTop: 40, height: 1, width: 420 * seg(t, V.offer + 1.2, V.offer + 2.0, outX), background: 'rgba(15,17,21,0.14)'}} />
          <div style={{marginTop: 22, fontSize: 28, lineHeight: 1.35, color: 'var(--ink-muted)', ...rise(V.offer + 1.5)}}>
            Structured business analysis →<br />
            proposed system blueprint
          </div>
        </div>
      </Sheet>
    </div>
  );
};

const Verbs: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 38.5, 38.95, inOut);
  if (t < V.verbs[0] - 0.1 || out >= 1) return null;
  const size = 64;
  return (
    <div style={{position: 'absolute', left: 80, top: 1160 - capOffset(size, 1.06), display: 'flex', gap: 18, fontSize: size, lineHeight: 1.06, fontWeight: 300, letterSpacing: '-0.038em', whiteSpace: 'nowrap', opacity: 1 - out}}>
      {['Upgrade.', 'Replace.', 'Implement.'].map((w, k) => {
        const p = seg(t, V.verbs[k], V.verbs[k] + 0.5, outX);
        return (
          <span key={w} style={{opacity: p, transform: `translateY(${(1 - p) * 24}px)`, display: 'inline-block'}}>
            {w}
          </span>
        );
      })}
    </div>
  );
};

export const AdR07: React.FC = () => {
  const t = useCurrentFrame() / R07_FPS;
  const built = tk(t, [[19.2, 0], [19.65, 1], [19.95, 1], [20.4, 2], [20.7, 2], [21.15, 3], [21.5, 3], [21.95, 4]]);
  return (
    <Studio3D cam={camAt(t)} planes={planesAt(t)} blur={blurAt(t)} push={pushAt(t)}>
      <div style={{position: 'absolute', inset: 0, transform: `scale(${pushAt(t)})`}}>
      {/* S3: the study, drawn on drafting film in front of the business. */}
      <Layer t={t} a={V.verity + 0.4} b={13.35} dy={40} depth>
        <Sheet x={110} y={680} w={860} h={700} rx={4} title={['Business study · Sheet 01', 'Prepared by Verity product team']}>
          <div style={{position: 'absolute', left: 96, top: 120, transform: 'scale(1.18)', transformOrigin: '0 0'}}>
            <Branch trace draw={seg(t, 8.6, 10.6, inOut)} />
          </div>
          {[
            {a: 10.0, x: 450, y: 168, text: 'Approval owner', lx: 560, ly: 120},
            {a: 10.8, x: 450, y: 368, text: 'Exception path', lx: 560, ly: 430},
            {a: 11.6, x: 297, y: 268, text: 'Handoff', lx: 190, ly: 430},
          ].map((n) => (
            <div key={n.text} style={{position: 'absolute', inset: 0, opacity: seg(t, n.a, n.a + 0.5)}}>
              <Note x={n.x} y={n.y} text={n.text} lx={n.lx} ly={n.ly} />
            </div>
          ))}
          <div style={{position: 'absolute', inset: 0, opacity: seg(t, 12.2, 12.7)}}>
            <svg width={860} height={700} style={{position: 'absolute', left: 0, top: 0}}>
              <path d="M138 500 H630 M138 488 V512 M630 488 V512" stroke="rgba(15,17,21,0.5)" strokeWidth={1.2} fill="none" />
            </svg>
            <div style={{position: 'absolute', left: 138, width: 492, top: 514, textAlign: 'center', fontSize: 19, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>Order to dispatch</div>
          </div>
        </Sheet>
      </Layer>

      <MapStack t={t} />

      {/* S4b: the workspace is built on its own blueprint, module by module. */}
      <Layer t={t} a={V.system - 0.1} b={22.9} dy={0}>
        <FloorPlan />
      </Layer>
      <Layer t={t} a={V.system} b={22.95} dy={80} depth>
        <Workspace x={60} y={590} w={1120} h={760} ry={lerp(-8, -5, seg(t, V.system, 22.9, inOut))} built={built} />
      </Layer>

      <OfferSheetAnim t={t} />
      {/* S8 object rides the same push. */}
      <Layer t={t} a={39.0} dy={40}>
        <BlueprintObject x={330} y={1100} draw={seg(t, 39.3, 40.6, inOut)} />
      </Layer>
      </div>

      {/* Type and furniture: outside the push. */}
      <Process t={t} />
      <Verbs t={t} />
      <Layer t={t} a={V.learn} b={38.5}>
        <Support text="Tap Learn More. We'll call you." top={1236} size={38} />
      </Layer>

      {/* S8: the end card. */}
      <Layer t={t} a={38.95}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 470, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20}}>
          <Mark height={56} color="var(--ink)" />
          <div style={{fontSize: 66, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1}}>verity</div>
        </div>
      </Layer>
      <Layer t={t} a={V.tell + 0.1}>
        <Title lines={['Tell us about', 'your business.']} size={80} cap={650} align="center" />
      </Layer>
      <CTAPill text="Get your Business Blueprint" p={seg(t, V.get, V.get + 0.7, outX)} y={860} />
      <Layer t={t} a={40.5}>
        <Support text={`${CAMPAIGN.value} · ${CAMPAIGN.until}`} top={1000} size={30} align="center" />
      </Layer>

      {/* Headlines. Each lands once and holds still while the world moves. */}
      {/* Headlines share one position, so each is fully gone (0.45 s exit) before the next lands: never two at once. */}
      <Layer t={t} a={0.1} b={2.1}>
        <Title lines={['Looking for', 'an ERP?']} size={104} />
      </Layer>
      <Layer t={t} a={2.58} b={4.55}>
        <Title lines={['Most ERPs run on', 'one fixed system.']} size={84} />
      </Layer>
      <Layer t={t} a={5.02} b={6.92}>
        <Title lines={['Every business', 'works differently.']} size={84} />
      </Layer>
      <Layer t={t} a={7.4} b={13.3}>
        <Title lines={['Product managers', 'from IIMs and IITs']} size={80} />
      </Layer>
      <Layer t={t} a={V.pehle} b={13.3}>
        <Support text="study your business first." top={552} />
      </Layer>
      <Layer t={t} a={V.system + 0.04} b={22.6}>
        <Title lines={['Built module by module,', 'from scratch.']} size={80} />
      </Layer>

      {/* Furniture. */}
      <Layer t={t} a={-1} b={38.5} dy={0}>
        <Lockup />
      </Layer>
      <OfferChip text={CHIP} p={seg(t, 7.6, 8.2, outX) * (1 - seg(t, 27.9, 28.3))} />
      <Captions t={t} />
      <Audio src={staticFile('ads/R07/vo.wav')} />
    </Studio3D>
  );
};
