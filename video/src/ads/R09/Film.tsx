import React from 'react';
import {Audio, staticFile, useCurrentFrame} from 'remotion';
import {inOut, lerp, outX, seg} from '../../shared/timeline';
import {Check} from '../../trailer/ui';
import {capOffset} from '../../social/kit';
import {CTAPill, Lockup} from '../kit';
import {Branch, Sheet, Title, Workspace} from '../R07/world';
import {BigLockup, PHONE, Phone} from '../R08/props';
import {DarkStudio, LABEL, Layer, Light, lin, tk} from '../stage';
import {CallsCard, ChatCard, ChatListScreen, Glyph, type GlyphKind, NotesCard, SheetCard, ThreadScreen} from './props';

/** R09 "WhatsApp is not the problem". Hook and pain play on a phone, a quick montage of the tools a business lives on,
 *  a freeze on "Business system?", then the reframe: scattered fragments become an ordered system, Verity understands the
 *  business first and builds around it, and the Blueprint offer lands. Every beat is keyed to the VO (whatsapp.mp3):
 *  the word timings are read off a faster-whisper pass. All on-screen text is English and there are no subtitles. */

export const R09_FPS = 30;
export const R09_DURATION = Math.round(51 * R09_FPS);

/** VO anchors in seconds. Retime here if the VO is re-recorded. */
const V = {
  zoom: 4.9, har: 11.44, notWA: 15.64, verity: 20.9, offer: 30.76, five: 31.62, final: 47.3,
} as const;

/* ---------- hook and pain: the phone ---------- */

const PCX = PHONE.x + PHONE.w / 2;
const PCY = PHONE.y + PHONE.h / 2;

/** Each message nudges the phone once: a soft damped sway at about 3 Hz (never a per-frame shake, which aliases at 30 fps). */
const NUDGES: [number, number][] = [[0.9, 1], [1.6, 1], [2.4, 1], [3.2, 1.1], [4.0, 1.1], [5.86, 1.4], [7.76, 1.4], [9.08, 1.6], [9.9, 1.6], [10.1, 1.8], [10.3, 1.8]];
const buzz = (t: number) => NUDGES.reduce((acc, [e, amp]) => (t > e && t < e + 1.2 ? acc + amp * Math.exp(-(t - e) * 4.5) * Math.sin((t - e) * 19) : acc), 0);

const PhoneWorld: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 13.65, 14.15, inOut);
  if (out >= 1) return null;
  const z = tk(t, [[V.zoom, 0], [5.8, 1]]);
  const vx = buzz(t);
  const blur = tk(t, [[11.0, 0], [11.7, 10]]);
  const list = lin(t, [[0.5, 0], [2.4, 6]]);
  const thread = lin(t, [[5.86, 0], [6.25, 1], [7.76, 1], [8.15, 2], [9.08, 2], [9.47, 3], [9.9, 3], [10.15, 4], [10.3, 5], [10.45, 6]]);
  const swap = seg(t, 5.2, 5.7, inOut);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transformOrigin: `${PCX}px ${PCY}px`, transform: `translate(${(540 - PCX) * z + vx}px, ${(960 - PCY) * z + vx * 0.35}px) scale(${1 + 1.2 * z}) rotate(${vx * 0.05}deg)`, filter: blur > 0.05 ? `blur(${blur}px)` : undefined}}>
      <Phone ry={-14 * (1 - z)}>
        <div style={{position: 'absolute', inset: 0, opacity: 1 - swap}}>
          <ChatListScreen n={list} />
        </div>
        <div style={{position: 'absolute', inset: 0, opacity: swap}}>
          <ThreadScreen n={thread} />
        </div>
      </Phone>
    </div>
  );
};

/* ---------- the four tools, in quick cuts, then the freeze ---------- */

const TOOLS: {a: number; node: React.ReactNode}[] = [
  {a: V.har, node: <ChatCard />},
  {a: 11.92, node: <SheetCard />},
  {a: 12.38, node: <CallsCard />},
  {a: 12.84, node: <NotesCard />},
  {a: 13.28, node: <ChatCard />},
];

const ToolCuts: React.FC<{t: number}> = ({t}) => {
  if (t < V.har - 0.1 || t > 15.9) return null;
  const hold = tk(t, [[13.65, 1], [14.1, 0.2]]);
  const out = seg(t, 15.2, 15.7, inOut);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: hold * (1 - out)}}>
      {TOOLS.map((c, i) => {
        const nextA = i + 1 < TOOLS.length ? TOOLS[i + 1].a : 1e9;
        const inP = seg(t, c.a, c.a + 0.14, inOut);
        const op = inP * (1 - seg(t, nextA, nextA + 0.14, inOut));
        return op > 0 ? (
          <div key={i} style={{position: 'absolute', left: 0, top: 620, width: 1080, height: 640, opacity: op, transform: `translateY(${Math.round((1 - inP) * 16)}px)`}}>
            {c.node}
          </div>
        ) : null;
      })}
    </div>
  );
};

/** The freeze: a drawn cross, held still. */
const Cross: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, 13.95, 14.55, inOut);
  return (
    <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
      <circle cx={540} cy={1000} r={150} fill="none" stroke="var(--ink-muted)" strokeWidth={3} strokeDasharray={942} strokeDashoffset={942 * (1 - p)} opacity={0.7} />
      <path d="M480 940 L600 1060 M600 940 L480 1060" stroke="var(--ink)" strokeWidth={14} strokeLinecap="round" strokeDasharray={170} strokeDashoffset={170 * (1 - seg(t, 14.2, 14.7, inOut))} />
    </svg>
  );
};

/* ---------- the reframe: fragments become a system ---------- */

const FRAGS: {kind: GlyphKind; label: string; role: string; from: {x: number; y: number; r: number}}[] = [
  {kind: 'sheet', label: 'Spreadsheet', role: 'Orders', from: {x: 80, y: 1090, r: 3}},
  {kind: 'chat', label: 'Chat', role: 'Customers', from: {x: 110, y: 720, r: -5}},
  {kind: 'receipt', label: 'Receipt', role: 'Payments', from: {x: 600, y: 770, r: 4}},
  {kind: 'voice', label: 'Voice note', role: 'Approvals', from: {x: 330, y: 920, r: -3}},
  {kind: 'notes', label: 'Notebook', role: 'Reporting', from: {x: 570, y: 1140, r: -4}},
];

const Fragments: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 20.7, 20.85, inOut);
  if (t < V.notWA || out >= 1) return null;
  return (
    <>
      {FRAGS.map((f, i) => {
        const p = seg(t, 15.7 + i * 0.1, 16.4 + i * 0.1, outX);
        const m = seg(t, 18.0 + i * 0.16, 19.1 + i * 0.16, inOut);
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
    </>
  );
};

/* ---------- Verity understands the business ---------- */

const CARDS: {x: number; y: number; kind: GlyphKind; label: string; a: number}[] = [
  {x: 380, y: 720, kind: 'flow', label: 'Your workflows', a: 23.9},
  {x: 680, y: 945, kind: 'team', label: 'Your team', a: 24.8},
  {x: 380, y: 1180, kind: 'list', label: 'Your requirements', a: 25.7},
  {x: 80, y: 945, kind: 'loop', label: 'Your way of working', a: 26.5},
];
const LINKS: [number, number, number, number][] = [[540, 840, 540, 918], [680, 1010, 632, 1010], [540, 1180, 540, 1102], [400, 1010, 448, 1010]];

const BusinessMap: React.FC<{t: number}> = ({t}) => {
  const c = seg(t, 23.4, 24.0, outX);
  return (
    <>
      <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
        {LINKS.map(([x1, y1, x2, y2], i) => {
          const p = seg(t, CARDS[i].a + 0.25, CARDS[i].a + 0.7, inOut);
          const len = Math.hypot(x2 - x1, y2 - y1);
          return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} />;
        })}
        <circle cx={540} cy={1010} r={92 * (0.8 + 0.2 * c)} fill="var(--surface)" stroke="var(--accent)" strokeWidth={3} opacity={c} />
        <text x={540} y={1002} textAnchor="middle" fontSize={27} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>Your</text>
        <text x={540} y={1034} textAnchor="middle" fontSize={27} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>business</text>
      </svg>
      <Light>
        {CARDS.map((k) => {
          const p = seg(t, k.a, k.a + 0.6, outX);
          return (
            <div key={k.label} style={{position: 'absolute', left: k.x, top: k.y + Math.round((1 - p) * 20), width: 320, height: 130, borderRadius: 18, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', padding: '20px 24px', color: '#0f1115', opacity: p}}>
              <Glyph kind={k.kind} size={40} />
              <div style={{marginTop: 12, fontSize: 27, fontWeight: 500, letterSpacing: '-0.02em', whiteSpace: 'nowrap'}}>{k.label}</div>
            </div>
          );
        })}
      </Light>
    </>
  );
};

const CHIPS = [{label: 'Business', a: 27.3}, {label: 'Understanding', a: 28.2}, {label: 'System', a: 29.1}];

const ChipRow: React.FC<{t: number}> = ({t}) => (
  <div style={{position: 'absolute', left: 80, top: 606, width: 920, display: 'flex', alignItems: 'center', gap: 16}}>
    {CHIPS.map((c, i) => {
      const p = seg(t, c.a, c.a + 0.5, outX);
      const active = t >= c.a && (i === 2 || t < CHIPS[i + 1].a);
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

/* ---------- the offer ---------- */

const Offer: React.FC<{t: number}> = ({t}) => {
  const tag = seg(t, V.offer, V.offer + 0.6, outX);
  const num = seg(t, V.five, V.five + 0.8, outX);
  const lbl = seg(t, 32.7, 33.4, outX);
  const sweep = seg(t, 33.6, 34.3, inOut);
  const reveal = seg(t, 34.35, 35.0, inOut);
  const out = seg(t, 36.3, 36.75, inOut);
  if (t < V.offer - 0.1 || out >= 1) return null;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateY(${Math.round(-out * 40)}px)`}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 330, display: 'flex', justifyContent: 'center', opacity: tag, transform: `translateY(${Math.round((1 - tag) * 20)}px)`}}>
        <div style={{height: 56, padding: '0 28px', borderRadius: 28, display: 'flex', alignItems: 'center', gap: 14, ...LABEL, fontSize: 24, letterSpacing: '0.16em', border: '1.5px solid var(--accent)', background: 'var(--surface)'}}>
          <span style={{width: 11, height: 11, borderRadius: 6, background: 'var(--accent)'}} />
          Limited time offer
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 520, textAlign: 'center', ...LABEL, fontSize: 30, letterSpacing: '0.16em', color: 'var(--ink-muted)', opacity: lbl, transform: `translateY(${Math.round((1 - lbl) * 20)}px)`}}>Business analysis blueprint</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 590, height: 260, textAlign: 'center', fontSize: 260, lineHeight: '260px', fontWeight: 300, letterSpacing: '-0.05em', opacity: num * (1 - 0.62 * sweep), transform: `translateY(${Math.round((1 - num) * 40)}px)`}}>₹5,000</div>
      <div style={{position: 'absolute', left: 80, width: 920 * sweep, top: 712, height: 16, borderRadius: 8, background: 'var(--accent)', transform: 'rotate(-2.2deg)', transformOrigin: '0 50%', opacity: num}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 880, height: 340, textAlign: 'center', fontSize: 340, lineHeight: '340px', fontWeight: 500, letterSpacing: '-0.05em', color: 'var(--accent)', clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)`, opacity: reveal > 0 ? 1 : 0}}>FREE</div>
    </div>
  );
};

/* ---------- credibility: the analysis, drawn ---------- */

/** A leader label on the analysis sheet: a short line, then the text. */
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

const Analysis: React.FC<{t: number}> = ({t}) => (
  <Sheet x={80} y={720} w={920} h={640} rx={4}>
    <div style={{position: 'absolute', left: 150, top: 150, transform: 'scale(1.55)', transformOrigin: '0 0'}}>
      <Branch trace draw={seg(t, 37.3, 39.5, inOut)} />
    </div>
    <Callout x={615} y={212} text="Approval owner" up a={38.1} t={t} />
    <Callout x={615} y={476} text="Exception path" a={39.0} t={t} />
    <Callout x={413} y={344} text="Handoff" a={39.9} t={t} />
    <div style={{opacity: seg(t, 40.9, 41.5)}}>
      <svg width={920} height={640} style={{position: 'absolute', left: 0, top: 0}}>
        <path d="M206 584 H807 M206 572 V596 M807 572 V596" stroke="rgba(15,17,21,0.5)" strokeWidth={1.2} fill="none" />
      </svg>
      <div style={{position: 'absolute', left: 206, width: 601, top: 598, textAlign: 'center', fontSize: 19, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7078'}}>Order to dispatch</div>
    </div>
  </Sheet>
);

/* ---------- the Blueprint assembles ---------- */

const STEPS: {kind: GlyphKind; num: string; label: string; a: number}[] = [
  {kind: 'flow', num: '01', label: 'Current workflow', a: 43.1},
  {kind: 'list', num: '02', label: 'Requirements', a: 44.0},
  {kind: 'team', num: '03', label: 'Proposed system', a: 45.0},
];

const BlueprintSteps: React.FC<{t: number}> = ({t}) => (
  <>
    {STEPS.map((s, i) => {
      const p = seg(t, s.a, s.a + 0.6, outX);
      return (
        <div key={s.label} style={{position: 'absolute', left: 80, top: 680 + i * 190 + Math.round((1 - p) * 24), width: 920, height: 160, borderRadius: 20, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 32, padding: '0 44px', color: '#0f1115', opacity: p}}>
          <div style={{...LABEL, fontSize: 26, color: '#6b7078', width: 54}}>{s.num}</div>
          <Glyph kind={s.kind} size={60} />
          <div style={{flex: 1, fontSize: 54, fontWeight: 300, letterSpacing: '-0.035em'}}>{s.label}</div>
          <div style={{opacity: seg(t, 45.9 + i * 0.2, 46.3 + i * 0.2)}}>
            <Check p={seg(t, 45.9 + i * 0.2, 46.4 + i * 0.2, outX)} size={44} />
          </div>
        </div>
      );
    })}
  </>
);

/* ---------- the end card ---------- */

const EndCard: React.FC<{t: number}> = ({t}) => {
  const f = V.final;
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
      <div style={{position: 'absolute', left: 0, right: 0, top: 950, textAlign: 'center', ...LABEL, fontSize: 25, letterSpacing: '0.14em', color: 'var(--ink-muted)', ...r(f + 0.9)}}>Business analysis blueprint · Limited time offer</div>
      <CTAPill text="Tell us about your business" p={seg(t, f + 1.3, f + 2.0, outX)} y={1070} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 1230, textAlign: 'center', fontSize: 34, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink-muted)', ...r(f + 1.7)}}>verity.plotarmour.in</div>
    </div>
  );
};

/* ---------- the film ---------- */

export const AdR09: React.FC = () => {
  const t = useCurrentFrame() / R09_FPS;
  const built = tk(t, [[27.6, 0], [28.0, 1], [28.6, 2], [29.2, 3], [29.7, 4], [30.1, 5]]);
  return (
    <DarkStudio shaft={t * 4}>
      {/* Hook and pain. */}
      <Light><PhoneWorld t={t} /></Light>
      <div style={{position: 'absolute', inset: 0, background: 'rgba(8,11,17,0.72)', opacity: tk(t, [[11.0, 0], [11.7, 1]]) * (1 - seg(t, 13.65, 14.15, inOut)), pointerEvents: 'none'}} />
      <Light><ToolCuts t={t} /></Light>
      <Layer t={t} a={13.95} b={15.1} dy={0}><Cross t={t} /></Layer>

      {/* The reframe. */}
      <Light><Fragments t={t} /></Light>

      {/* Verity understands the business, then builds around it. */}
      <Layer t={t} a={23.4} b={27.0} dy={30}><BusinessMap t={t} /></Layer>
      <Layer t={t} a={27.3} b={V.offer - 0.3} ex={0.5} dy={20}><ChipRow t={t} /></Layer>
      <Layer t={t} a={27.6} b={V.offer - 0.3} ex={0.5} dy={80} light>
        <Workspace x={80} y={720} w={920} h={640} built={built} />
      </Layer>

      {/* The offer. */}
      <Offer t={t} />

      {/* Credibility, then the Blueprint. */}
      <Layer t={t} a={36.9} b={42.7} dy={50} light>
        <Analysis t={t} />
      </Layer>
      <Layer t={t} a={42.95} b={46.95} dy={30}><BlueprintSteps t={t} /></Layer>

      {/* Type: lands once, holds still, exits upward. Each headline is gone before the next lands at the same spot. */}
      <Layer t={t} a={0.1} b={1.75}><Title lines={['Quick', 'question?']} size={104} /></Layer>
      <Layer t={t} a={2.3} b={4.95}><Title lines={['Still running', 'your business', 'on WhatsApp?']} size={76} accent={[2]} /></Layer>
      <Layer t={t} a={11.5} b={13.55} ex={0.3}><Title lines={['Everything', 'on WhatsApp, right?']} size={76} /></Layer>
      <Layer t={t} a={13.75} b={15.1}><Title lines={['Business system?']} size={104} /></Layer>
      <Layer t={t} a={V.notWA + 0.02} b={17.2}><Title lines={["WhatsApp isn't", 'the problem.']} size={88} accent={[1]} /></Layer>
      <Layer t={t} a={17.75} b={20.35}><Title lines={['No proper system', 'was ever built.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={21.9} b={26.95}><Title lines={['We understand', 'your business first.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={27.2} b={V.offer - 0.3} ex={0.4}><Title lines={['Then we build', 'around your business.']} size={80} accent={[1]} /></Layer>
      <Layer t={t} a={36.85} b={39.2}><Title lines={['Ready to put', 'a system in place?']} size={80} /></Layer>
      <Layer t={t} a={39.7} b={42.45}><Title lines={['IIT & IIM selected', 'professionals']} size={80} accent={[1]} /></Layer>
      <Layer t={t} a={42.9} b={45.85}><Title lines={['We prepare', 'your Blueprint.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={46.2} b={46.9} ex={0.3}><Title lines={['Your business.', 'Understood first.']} size={84} accent={[1]} /></Layer>

      {/* Verity enters on a hard cut to a clear room: the mark draws itself. */}
      <Layer t={t} a={V.verity} b={22.3} ex={0.3} dy={0}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 760}}>
          <BigLockup draw={seg(t, V.verity, 22.0, inOut)} word={seg(t, 21.4, 22.0, outX)} />
        </div>
      </Layer>
      <Layer t={t} a={22.5} b={V.offer - 0.4} ex={0.4} dy={0}><Lockup /></Layer>
      <Layer t={t} a={36.9} b={V.final - 0.1} ex={0.3} dy={0}><Lockup /></Layer>

      <EndCard t={t} />
      <Audio src={staticFile('ads/R09/vo.mp3')} />
    </DarkStudio>
  );
};
