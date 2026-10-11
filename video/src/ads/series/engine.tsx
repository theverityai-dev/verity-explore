import React from 'react';
import {Audio, staticFile, useCurrentFrame} from 'remotion';
import {inOut, lerp, outX, seg} from '../../shared/timeline';
import {Check} from '../../trailer/ui';
import {capOffset} from '../../social/kit';
import {CTAPill, Lockup} from '../kit';
import {Branch, Sheet, Title, Workspace} from '../R07/world';
import {Artifact, BigLockup, PHONE, Phone} from '../R08/props';
import {Glyph, type GlyphKind} from '../R09/props';
import {DarkStudio, LABEL, Layer, Light, lin, tk} from '../stage';
import {type Msg, ThreadScreen} from '../IND10/props';

/** Series engine for the industry reels whose recordings use the SHORT ending (T1, "Phir aapke tareeke se system build
 *  karte hain", the offer, the contact line, the credentials, "Limited time offer"). The opening is each reel's own (a world
 *  scene, a phone thread, three tool cards, a reframe); the tail is shared and keyed to the anchors read off the recording.
 *  Same dark world, light objects, English on-screen text and no subtitles as R09 and IND10. */

export type Anchors = {
  /** Opening. */
  phoneIn: number;
  d: [number, number, number];
  cuts: [number, number, number];
  pA: number;
  pB: number;
  /** Tail: the word "Verity", "Phir", "abhi", "5000", "business", "free" (start, end), "Aap", "Humare", the end-card start. */
  tail: number;
  t3: number;
  offer: number;
  five: number;
  lbl: number;
  freeA: number;
  freeB: number;
  t5: number;
  t6: number;
  f: number;
};

export type FragSpec = {kind: GlyphKind; label: string; role: string; from: {x: number; y: number; r: number}};

export type ReelCfg = {
  vo: string;
  duration: number;
  a: Anchors;
  World: React.FC<{t: number}>;
  hook: {lines: string[]; size: number; cap: number; accent: number[]};
  thread: {title: string; sub: string; initials: string; msgs: Msg[]};
  cards: React.ReactNode[];
  cutsHead: string[];
  reframe: {a: string[]; b: string[]; accentB: number[]};
  frags: FragSpec[];
  map: {kind: GlyphKind; label: string}[];
  modules: string[];
  flowLabel: string;
  callouts: [string, string, string];
};

const HAIR = 'rgba(15,17,21,0.08)';

/* ---------- generic cards for the three-tool montage ---------- */

const CardLabel: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{position: 'absolute', left: 48, top: 40, fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>{children}</div>
);

const Row: React.FC<{cells: string[]; cols: string; top: number; head?: boolean; mark?: boolean}> = ({cells, cols, top, head, mark}) => (
  <div style={{position: 'absolute', left: 48, right: 48, top, height: 62, display: 'grid', gridTemplateColumns: cols, alignItems: 'center', borderBottom: `1px solid ${HAIR}`, fontSize: head ? 21 : 27, letterSpacing: head ? '0.12em' : '-0.01em', textTransform: head ? 'uppercase' : undefined, color: head ? 'var(--ink-muted)' : undefined, fontWeight: head ? 500 : 400}}>
    {cells.map((c, i) => (
      <span key={i} style={{outline: mark && i === cells.length - 1 ? '3px solid var(--accent)' : undefined, outlineOffset: 6, borderRadius: 4, justifySelf: 'start', padding: '0 2px'}}>{c}</span>
    ))}
  </div>
);

export const TableCard: React.FC<{label: string; head: string[]; rows: string[][]; markRow?: number; rot?: number}> = ({label, head, rows, markRow, rot = 1}) => {
  const cols = '1.5fr 1fr 1fr';
  return (
    <Artifact h={640} rot={rot}>
      <CardLabel>{label}</CardLabel>
      <Row head cols={cols} top={92} cells={head} />
      {rows.map((r, i) => (
        <Row key={i} cols={cols} top={156 + i * 64} cells={r} mark={i === markRow} />
      ))}
    </Artifact>
  );
};

export const ChatCardX: React.FC<{label: string; msgs: [string, string][]; rot?: number}> = ({label, msgs, rot = -1}) => (
  <Artifact h={640} rot={rot}>
    <CardLabel>{label}</CardLabel>
    {msgs.map(([who, text], i) => (
      <div key={i} style={{position: 'absolute', left: 48, top: 110 + i * 142, maxWidth: 800, padding: '16px 26px', borderRadius: '8px 26px 26px 26px', background: '#fff', border: `1px solid ${HAIR}`, boxShadow: 'var(--elev-low)', letterSpacing: '-0.015em'}}>
        <div style={{fontSize: 20, fontWeight: 600, color: 'var(--accent-text)', marginBottom: 4}}>{who}</div>
        <div style={{fontSize: 34, lineHeight: 1.2}}>{text}</div>
      </div>
    ))}
  </Artifact>
);

/* ---------- opening pieces ---------- */

const PCX = PHONE.x + PHONE.w / 2;
const PCY = PHONE.y + PHONE.h / 2;

/** Each message nudges the phone once: a soft damped sway at about 3 Hz (never a per-frame shake, which aliases at 30 fps). */
const buzz = (t: number, nudges: number[]) => nudges.reduce((acc, e) => (t > e && t < e + 1.2 ? acc + 1.6 * Math.exp(-(t - e) * 4.5) * Math.sin((t - e) * 19) : acc), 0);

const PhoneWorld: React.FC<{t: number; cfg: ReelCfg}> = ({t, cfg}) => {
  const {a} = cfg;
  const cutsEnd = a.pA - 0.35;
  const inP = seg(t, a.phoneIn, a.phoneIn + 0.55, outX);
  const out = seg(t, cutsEnd, cutsEnd + 0.4, inOut);
  if (inP <= 0 || out >= 1) return null;
  const s = [a.d[2] + 0.9, a.d[2] + 1.2, a.d[2] + 1.5];
  const vx = buzz(t, [...a.d, ...s]);
  const blur = tk(t, [[a.cuts[0] - 0.25, 0], [a.cuts[0] + 0.35, 10]]);
  const thread = lin(t, [[a.d[0], 0], [a.d[0] + 0.38, 1], [a.d[1], 1], [a.d[1] + 0.38, 2], [a.d[2], 2], [a.d[2] + 0.36, 3], [s[0], 3], [s[0] + 0.25, 4], [s[1], 4], [s[1] + 0.25, 5], [s[2], 5], [s[2] + 0.25, 6]]);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: inP * (1 - out), transformOrigin: `${PCX}px ${PCY}px`, transform: `translate(${540 - PCX + vx}px, ${960 - PCY + Math.round((1 - inP) * 120) + vx * 0.35}px) scale(2.2) rotate(${vx * 0.05}deg)`, filter: blur > 0.05 ? `blur(${blur}px)` : undefined}}>
      <Phone ry={0}>
        <div style={{position: 'absolute', inset: 0}}>
          <ThreadScreen n={thread} msgs={cfg.thread.msgs} title={cfg.thread.title} sub={cfg.thread.sub} initials={cfg.thread.initials} />
        </div>
      </Phone>
    </div>
  );
};

const ToolCuts: React.FC<{t: number; cfg: ReelCfg}> = ({t, cfg}) => {
  const {a} = cfg;
  const cutsEnd = a.pA - 0.35;
  if (t < a.cuts[0] - 0.1 || t > cutsEnd + 0.6) return null;
  const hold = tk(t, [[cutsEnd - 0.8, 1], [cutsEnd - 0.3, 0.25]]);
  const out = seg(t, cutsEnd, cutsEnd + 0.45, inOut);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: hold * (1 - out)}}>
      {cfg.cards.map((node, i) => {
        const at = a.cuts[i];
        const nextA = i + 1 < cfg.cards.length ? a.cuts[i + 1] : 1e9;
        const inP = seg(t, at, at + 0.14, inOut);
        const op = inP * (1 - seg(t, nextA, nextA + 0.14, inOut));
        return op > 0 ? (
          <div key={i} style={{position: 'absolute', left: 0, top: 620, width: 1080, height: 640, opacity: op, transform: `translateY(${Math.round((1 - inP) * 16)}px)`}}>
            {node}
          </div>
        ) : null;
      })}
    </div>
  );
};

/** The freeze: a drawn cross, held still. */
const Cross: React.FC<{t: number; at: number}> = ({t, at}) => {
  const p = seg(t, at, at + 0.6, inOut);
  return (
    <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
      <circle cx={540} cy={1000} r={150} fill="none" stroke="var(--ink-muted)" strokeWidth={3} strokeDasharray={942} strokeDashoffset={942 * (1 - p)} opacity={0.7} />
      <path d="M480 940 L600 1060 M600 940 L480 1060" stroke="var(--ink)" strokeWidth={14} strokeLinecap="round" strokeDasharray={170} strokeDashoffset={170 * (1 - seg(t, at + 0.2, at + 0.7, inOut))} />
    </svg>
  );
};

/** Scattered fragments become one ordered list; one accent line then joins the rows. */
const Fragments: React.FC<{t: number; cfg: ReelCfg}> = ({t, cfg}) => {
  const {a, frags} = cfg;
  const out = seg(t, a.tail - 0.26, a.tail - 0.06, inOut);
  if (t < a.pA || out >= 1) return null;
  const join = seg(t, a.tail - 1.55, a.tail - 0.35, inOut);
  const y0 = 738;
  const y1 = 738 + 136 * (frags.length - 1);
  return (
    <>
      {frags.map((f, i) => {
        const p = seg(t, a.pA + 0.25 + i * 0.1, a.pA + 0.95 + i * 0.1, outX);
        const m = seg(t, a.pB + 0.45 + i * 0.18, a.pB + 1.65 + i * 0.18, inOut);
        return (
          <div key={f.role} style={{position: 'absolute', left: Math.round(lerp(f.from.x, 80, m)), top: Math.round(lerp(f.from.y, 680 + i * 136, m)), width: Math.round(lerp(340, 920, m)), height: Math.round(lerp(150, 116, m)), transform: `rotate(${lerp(f.from.r, 0, m)}deg)`, opacity: p * (1 - out), borderRadius: 18, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 22, padding: '0 26px', color: '#0f1115'}}>
            <Glyph kind={f.kind} size={52} />
            <div style={{position: 'relative', flex: 1, height: 64}}>
              <div style={{position: 'absolute', left: 0, top: 4, ...LABEL, fontSize: 19, color: '#6b7078', opacity: 1 - m}}>{f.label}</div>
              <div style={{position: 'absolute', left: 0, top: 36, width: 180, height: 8, borderRadius: 4, background: '#e6eaee', opacity: 1 - m}} />
              <div style={{position: 'absolute', left: 0, top: 6, fontSize: 42, fontWeight: 400, letterSpacing: '-0.025em', opacity: m}}>{f.role}</div>
            </div>
            <div style={{width: 12, height: 12, borderRadius: 6, background: 'var(--accent)', opacity: m}} />
          </div>
        );
      })}
      <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0, opacity: 1 - out}}>
        <path d={`M968 ${y0} V${y1}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={y1 - y0} strokeDashoffset={(y1 - y0) * (1 - join)} />
      </svg>
    </>
  );
};

/* ---------- the shared tail ---------- */

const MAP_POS: {x: number; y: number}[] = [{x: 380, y: 720}, {x: 680, y: 945}, {x: 380, y: 1180}, {x: 80, y: 945}];
const MAP_LINKS: [number, number, number, number][] = [[540, 840, 540, 918], [680, 1010, 632, 1010], [540, 1180, 540, 1102], [400, 1010, 448, 1010]];

const BusinessMap: React.FC<{t: number; cfg: ReelCfg}> = ({t, cfg}) => {
  const T = cfg.a.tail;
  const c = seg(t, T + 0.95, T + 1.5, outX);
  const at = (i: number) => T + 1.35 + i * 0.3;
  return (
    <>
      <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
        {MAP_LINKS.map(([x1, y1, x2, y2], i) => {
          const p = seg(t, at(i) + 0.2, at(i) + 0.55, inOut);
          const len = Math.hypot(x2 - x1, y2 - y1);
          return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} opacity={p > 0 ? 1 : 0} />;
        })}
        <circle cx={540} cy={1010} r={92 * (0.8 + 0.2 * c)} fill="var(--surface)" stroke="var(--accent)" strokeWidth={3} opacity={c} />
        <text x={540} y={1002} textAnchor="middle" fontSize={27} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>Your</text>
        <text x={540} y={1034} textAnchor="middle" fontSize={27} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>business</text>
      </svg>
      <Light>
        {cfg.map.map((k, i) => {
          const p = seg(t, at(i), at(i) + 0.5, outX);
          return (
            <div key={k.label} style={{position: 'absolute', left: MAP_POS[i].x, top: MAP_POS[i].y + Math.round((1 - p) * 20), width: 320, height: 130, borderRadius: 18, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', padding: '20px 24px', color: '#0f1115', opacity: p}}>
              <Glyph kind={k.kind} size={40} />
              <div style={{marginTop: 12, fontSize: 27, fontWeight: 500, letterSpacing: '-0.02em', whiteSpace: 'nowrap'}}>{k.label}</div>
            </div>
          );
        })}
      </Light>
    </>
  );
};

const ChipRow: React.FC<{t: number; t3: number}> = ({t, t3}) => {
  const chips = [{label: 'Business', a: t3 + 0.1}, {label: 'Understanding', a: t3 + 0.8}, {label: 'System', a: t3 + 1.5}];
  return (
    <div style={{position: 'absolute', left: 80, top: 606, width: 920, display: 'flex', alignItems: 'center', gap: 16}}>
      {chips.map((c, i) => {
        const p = seg(t, c.a, c.a + 0.5, outX);
        const active = t >= c.a && (i === 2 || t < chips[i + 1].a);
        return (
          <React.Fragment key={c.label}>
            <div style={{height: 56, padding: '0 26px', borderRadius: 28, display: 'flex', alignItems: 'center', gap: 12, ...LABEL, fontSize: 22, letterSpacing: '0.12em', whiteSpace: 'nowrap', background: active ? 'var(--surface)' : 'transparent', border: `1.5px solid ${active ? 'var(--accent)' : 'rgba(244,247,251,0.18)'}`, color: active ? 'var(--ink)' : 'var(--ink-muted)', opacity: p}}>
              <span style={{width: 10, height: 10, borderRadius: 5, background: active ? 'var(--accent)' : 'rgba(244,247,251,0.25)'}} />
              {c.label}
            </div>
            {i < 2 ? (
              <svg width={36} height={20} viewBox="0 0 36 20" fill="none" stroke="rgba(244,247,251,0.4)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" opacity={p}>
                <path d="M2 10h30M24 3l8 7-8 7" />
              </svg>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Offer: React.FC<{t: number; a: Anchors}> = ({t, a}) => {
  const tag = seg(t, a.offer, a.offer + 0.6, outX);
  const num = seg(t, a.five, a.five + 0.8, outX);
  const lbl = seg(t, a.lbl, a.lbl + 0.7, outX);
  const sweep = seg(t, a.freeA - 0.62, a.freeA - 0.02, inOut);
  const reveal = seg(t, a.freeA, a.freeA + 0.65, inOut);
  const out = seg(t, a.freeB + 0.8, a.freeB + 1.25, inOut);
  if (t < a.offer - 0.1 || out >= 1) return null;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateY(${Math.round(-out * 40)}px)`}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 330, display: 'flex', justifyContent: 'center', opacity: tag, transform: `translateY(${Math.round((1 - tag) * 20)}px)`}}>
        <div style={{height: 56, padding: '0 28px', borderRadius: 28, display: 'flex', alignItems: 'center', gap: 14, ...LABEL, fontSize: 24, letterSpacing: '0.16em', border: '1.5px solid var(--accent)', background: 'var(--surface)'}}>
          <span style={{width: 11, height: 11, borderRadius: 6, background: 'var(--accent)'}} />
          Limited time offer
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 520, textAlign: 'center', ...LABEL, fontSize: 26, letterSpacing: '0.14em', color: 'var(--ink-muted)', opacity: lbl, transform: `translateY(${Math.round((1 - lbl) * 20)}px)`}}>Verity Business Analysis &amp; Blueprint</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 590, height: 260, textAlign: 'center', fontSize: 260, lineHeight: '260px', fontWeight: 300, letterSpacing: '-0.05em', opacity: num * (1 - 0.62 * sweep), transform: `translateY(${Math.round((1 - num) * 40)}px)`}}>₹5,000</div>
      <div style={{position: 'absolute', left: 80, width: 920 * sweep, top: 712, height: 16, borderRadius: 8, background: 'var(--accent)', transform: 'rotate(-2.2deg)', transformOrigin: '0 50%', opacity: num}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 880, height: 340, textAlign: 'center', fontSize: 340, lineHeight: '340px', fontWeight: 500, letterSpacing: '-0.05em', color: 'var(--accent)', clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)`, opacity: reveal > 0 ? 1 : 0}}>FREE</div>
    </div>
  );
};

const Callout: React.FC<{x: number; y: number; text: string; up?: boolean; a: number; t: number}> = ({x, y, text, up, a, t}) => {
  const p = seg(t, a, a + 0.5, outX);
  return (
    <div style={{position: 'absolute', left: x - 120, top: up ? y - 86 : y + 16, width: 240, textAlign: 'center', opacity: p, transform: `translateY(${Math.round((1 - p) * (up ? 10 : -10))}px)`}}>
      {!up ? <div style={{margin: '0 auto 8px', width: 1.5, height: 26, background: 'rgba(15,17,21,0.4)'}} /> : null}
      <div style={{display: 'inline-block', padding: '8px 18px', border: '1px solid rgba(15,17,21,0.3)', background: 'rgba(251,252,253,0.95)', fontSize: 19, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0f1115', whiteSpace: 'nowrap'}}>{text}</div>
      {up ? <div style={{margin: '8px auto 0', width: 1.5, height: 26, background: 'rgba(15,17,21,0.4)'}} /> : null}
    </div>
  );
};

const Analysis: React.FC<{t: number; a0: number; cfg: ReelCfg}> = ({t, a0, cfg}) => (
  <Sheet x={80} y={720} w={920} h={640} rx={4}>
    <div style={{position: 'absolute', left: 150, top: 150, transform: 'scale(1.55)', transformOrigin: '0 0'}}>
      <Branch trace draw={seg(t, a0 + 0.3, a0 + 2.5, inOut)} />
    </div>
    <Callout x={615} y={212} text={cfg.callouts[0]} up a={a0 + 1.1} t={t} />
    <Callout x={615} y={476} text={cfg.callouts[1]} a={a0 + 2.0} t={t} />
    <Callout x={413} y={344} text={cfg.callouts[2]} a={a0 + 2.9} t={t} />
    <div style={{opacity: seg(t, a0 + 3.9, a0 + 4.5)}}>
      <svg width={920} height={640} style={{position: 'absolute', left: 0, top: 0}}>
        <path d="M206 584 H807 M206 572 V596 M807 572 V596" stroke="rgba(15,17,21,0.5)" strokeWidth={1.2} fill="none" />
      </svg>
      <div style={{position: 'absolute', left: 206, width: 601, top: 598, textAlign: 'center', fontSize: 19, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7078'}}>{cfg.flowLabel}</div>
    </div>
  </Sheet>
);

const STEPS: {kind: GlyphKind; num: string; label: string}[] = [
  {kind: 'flow', num: '01', label: 'Current workflow'},
  {kind: 'list', num: '02', label: 'Requirements'},
  {kind: 'team', num: '03', label: 'Proposed system'},
];

const BlueprintSteps: React.FC<{t: number; t6: number}> = ({t, t6}) => (
  <>
    {STEPS.map((s, i) => {
      const at = t6 + 3.3 + i * 0.95;
      const p = seg(t, at, at + 0.6, outX);
      const tick = t6 + 6.1 + i * 0.2;
      return (
        <div key={s.label} style={{position: 'absolute', left: 80, top: 680 + i * 190 + Math.round((1 - p) * 24), width: 920, height: 160, borderRadius: 20, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 32, padding: '0 44px', color: '#0f1115', opacity: p}}>
          <div style={{...LABEL, fontSize: 26, color: '#6b7078', width: 54}}>{s.num}</div>
          <Glyph kind={s.kind} size={60} />
          <div style={{flex: 1, fontSize: 54, fontWeight: 300, letterSpacing: '-0.035em'}}>{s.label}</div>
          <div style={{opacity: seg(t, tick, tick + 0.4)}}>
            <Check p={seg(t, tick, tick + 0.5, outX)} size={44} />
          </div>
        </div>
      );
    })}
  </>
);

const EndCard: React.FC<{t: number; f: number}> = ({t, f}) => {
  const r = (a: number) => {
    const p = seg(t, a, a + 0.7, outX);
    return {opacity: p, transform: `translateY(${Math.round((1 - p) * 24)}px)`} as React.CSSProperties;
  };
  return (
    <div style={{position: 'absolute', inset: 0, opacity: seg(t, f - 0.1, f + 0.35, inOut)}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 380, ...r(f)}}>
        <BigLockup draw={seg(t, f, f + 1.0, inOut)} word={seg(t, f + 0.5, f + 1.1, outX)} size={110} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 580 - capOffset(52, 1.12), textAlign: 'center', fontSize: 52, lineHeight: 1.12, fontWeight: 300, letterSpacing: '-0.035em', ...r(f + 0.35)}}>
        Business software configured<br />around how you work.
      </div>
      <div style={{position: 'absolute', left: 80, right: 80, top: 740, height: 190, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 44, ...r(f + 0.7)}}>
        <span style={{position: 'relative', fontSize: 120, fontWeight: 300, letterSpacing: '-0.05em', color: 'var(--ink-muted)'}}>
          ₹5,000
          <span style={{position: 'absolute', left: -8, right: -8, top: '52%', height: 9, borderRadius: 5, background: 'var(--accent)', transform: 'rotate(-2deg)'}} />
        </span>
        <span style={{fontSize: 150, fontWeight: 500, letterSpacing: '-0.05em', color: 'var(--accent)'}}>FREE</span>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 950, textAlign: 'center', ...LABEL, fontSize: 22, letterSpacing: '0.1em', color: 'var(--ink-muted)', ...r(f + 0.9)}}>Verity Business Analysis &amp; Blueprint · Limited time offer</div>
      <CTAPill text="Tell us about your business" p={seg(t, f + 1.3, f + 2.0, outX)} y={1070} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 1230, textAlign: 'center', fontSize: 34, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink-muted)', ...r(f + 1.7)}}>verity.plotarmour.in</div>
    </div>
  );
};

/* ---------- the film ---------- */

export const SeriesFilm: React.FC<{cfg: ReelCfg}> = ({cfg}) => {
  const t = useCurrentFrame() / 30;
  const {a, World} = cfg;
  const cutsEnd = a.pA - 0.35;
  const ready = a.t5 + 1.3;
  const prepB = Math.min(a.t6 + 6.5, a.f - 0.8);
  const understood = a.f - 0.8 - (prepB + 0.45) >= 0.7;
  const built = tk(t, [[a.t3 + 0.3, 0], [a.t3 + 0.6, 1], [a.t3 + 1.0, 2], [a.t3 + 1.4, 3], [a.t3 + 1.8, 4], [a.t3 + 2.2, 5]]);
  return (
    <DarkStudio shaft={t * 4}>
      {/* Opening: the reel's own world. */}
      <Layer t={t} a={0.3} b={a.phoneIn - 0.65} ex={0.35} dy={40} light>
        <World t={t} />
      </Layer>

      {/* Pain: the thread, then three tools and the freeze. */}
      <Light><PhoneWorld t={t} cfg={cfg} /></Light>
      <div style={{position: 'absolute', inset: 0, background: 'rgba(8,11,17,0.72)', opacity: tk(t, [[a.cuts[0] - 0.25, 0], [a.cuts[0] + 0.35, 1]]) * (1 - seg(t, cutsEnd, cutsEnd + 0.45, inOut)), pointerEvents: 'none'}} />
      <Light><ToolCuts t={t} cfg={cfg} /></Light>
      <Layer t={t} a={cutsEnd - 0.8} b={cutsEnd + 0.1} dy={0}><Cross t={t} at={cutsEnd - 0.75} /></Layer>

      {/* The reframe. */}
      <Light><Fragments t={t} cfg={cfg} /></Light>

      {/* Verity understands the business, then builds around it. */}
      <Layer t={t} a={a.tail + 0.9} b={a.t3 - 0.1} ex={0.4} dy={30}><BusinessMap t={t} cfg={cfg} /></Layer>
      <Layer t={t} a={a.t3 + 0.1} b={a.offer - 0.3} ex={0.5} dy={20}><ChipRow t={t} t3={a.t3} /></Layer>
      <Layer t={t} a={a.t3 + 0.25} b={a.offer - 0.3} ex={0.5} dy={80} light>
        <Workspace x={80} y={720} w={920} h={640} built={built} modules={cfg.modules} />
      </Layer>

      {/* The offer. */}
      <Offer t={t} a={a} />

      {/* Credibility, then the Blueprint. */}
      <Layer t={t} a={ready + 0.05} b={a.t6 + 3.0} dy={50} light>
        <Analysis t={t} a0={ready + 0.05} cfg={cfg} />
      </Layer>
      <Layer t={t} a={a.t6 + 3.15} b={a.f - 0.8} dy={30}><BlueprintSteps t={t} t6={a.t6} /></Layer>

      {/* Type: lands once, holds still, exits upward; each headline is gone before the next lands at the same spot. */}
      <Layer t={t} a={0.1} b={1.75}><Title lines={['Quick', 'question?']} size={104} cap={330} /></Layer>
      <Layer t={t} a={2.3} b={a.phoneIn - 0.75}><Title lines={cfg.hook.lines} size={cfg.hook.size} cap={cfg.hook.cap} accent={cfg.hook.accent} /></Layer>
      <Layer t={t} a={a.cuts[0] - 0.05} b={cutsEnd - 0.05}><Title lines={cfg.cutsHead} size={76} /></Layer>
      <Layer t={t} a={a.pA + 0.07} b={a.pB - 0.26}><Title lines={cfg.reframe.a} size={84} /></Layer>
      <Layer t={t} a={a.pB + 0.19} b={a.tail - 0.35}><Title lines={cfg.reframe.b} size={76} accent={cfg.reframe.accentB} /></Layer>
      <Layer t={t} a={a.tail + 0.95} b={a.t3 - 0.45}><Title lines={['We understand', 'your business first.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={a.t3 + 0.05} b={a.offer - 0.3} ex={0.4}><Title lines={['Then we build', 'around your business.']} size={80} accent={[1]} /></Layer>
      <Layer t={t} a={ready} b={a.t6 - 0.5}><Title lines={['Ready to put', 'a system in place?']} size={80} /></Layer>
      <Layer t={t} a={a.t6} b={a.t6 + 2.9}><Title lines={['Our specialised', 'product managers', 'from IIMs and IITs']} size={76} accent={[2]} /></Layer>
      <Layer t={t} a={a.t6 + 3.05} b={understood ? prepB : a.f - 0.8}><Title lines={['We prepare', 'your Blueprint.']} size={84} accent={[1]} /></Layer>
      {understood ? (
        <Layer t={t} a={prepB + 0.45} b={a.f - 0.8} ex={0.3}><Title lines={['Your business.', 'Understood first.']} size={84} accent={[1]} /></Layer>
      ) : null}

      {/* Verity enters on a hard cut to a clear room: the mark draws itself. */}
      <Layer t={t} a={a.tail} b={a.tail + 1.1} ex={0.25} dy={0}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 760}}>
          <BigLockup draw={seg(t, a.tail, a.tail + 1.05, inOut)} word={seg(t, a.tail + 0.5, a.tail + 1.05, outX)} />
        </div>
      </Layer>
      <Layer t={t} a={a.tail + 1.5} b={a.offer - 0.4} ex={0.4} dy={0}><Lockup /></Layer>
      <Layer t={t} a={ready} b={a.f - 0.1} ex={0.3} dy={0}><Lockup /></Layer>

      <EndCard t={t} f={a.f} />
      <Audio src={staticFile(cfg.vo)} />
    </DarkStudio>
  );
};
