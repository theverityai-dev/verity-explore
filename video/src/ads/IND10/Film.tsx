import React from 'react';
import {Audio, staticFile, useCurrentFrame} from 'remotion';
import {inOut, lerp, outX, seg} from '../../shared/timeline';
import {Check} from '../../trailer/ui';
import {capOffset} from '../../social/kit';
import {CTAPill, Lockup} from '../kit';
import {Branch, Sheet, Title, Workspace} from '../R07/world';
import {BigLockup, PHONE, Phone} from '../R08/props';
import {Glyph, type GlyphKind} from '../R09/props';
import {DarkStudio, LABEL, Layer, Light, lin, tk} from '../stage';
import {AttendanceCard, Guard, OvertimeCard, RosterCard, SalaryCard, SupervisorCard, ThreadScreen} from './props';

/** IND10 "Guards and housekeeping: the gap between the ground and the records" (Meta reel, 9:16). Security and housekeeping
 *  contractors. Same dark world, light objects and shared ending as R09; the opening is its own world: a site roster of 20
 *  guards against a head-office register that ticks up to 18. Every beat is keyed to the recording (facility.mp3, word
 *  timings in video/ads/series/IND-industry-reels/IND10/vo/words.json). English on-screen text, no subtitles. */

export const IND10_FPS = 30;
export const IND10_DURATION = 62 * IND10_FPS;

/** Anchors in seconds from the recording. Retime here if the VO is re-recorded. */
const V = {
  tail: 29.26, offer: 40.96, five: 41.64, final: 57.6,
} as const;

/* ---------- the opening world: the ground against the records ---------- */

const World: React.FC<{t: number}> = ({t}) => (
  <>
    {/* Ground: the site roster, twenty posts, twenty guards. */}
    <Sheet x={80} y={610} w={920} h={290}>
      <div style={{position: 'absolute', left: 38, top: 26, ...LABEL, fontSize: 22, color: '#6b7078'}}>On site · roster</div>
      <div style={{position: 'absolute', right: 38, top: 4, fontSize: 56, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.15, opacity: seg(t, 2.9, 3.5, outX), transform: `translateY(${Math.round((1 - seg(t, 2.9, 3.5, outX)) * 12)}px)`}}>20</div>
      {Array.from({length: 20}).map((_, i) => {
        const x = 38 + (i % 10) * 86;
        const y = 96 + Math.floor(i / 10) * 92;
        const p = seg(t, 0.5 + i * 0.12, 0.9 + i * 0.12, outX);
        return (
          <div key={i} style={{position: 'absolute', left: x, top: y, width: 70, height: 70, borderRadius: 12, background: '#fff', border: '1.5px solid rgba(15,17,21,0.2)'}}>
            <div style={{position: 'absolute', left: 7, top: 3, fontSize: 16, color: '#6b7078'}}>{i + 1}</div>
            <div style={{position: 'absolute', left: 15, top: 20 + Math.round((1 - p) * 10), opacity: p}}>
              <Guard size={40} />
            </div>
          </div>
        );
      })}
    </Sheet>

    {/* Records: the head-office register, twenty lines, eighteen ticked, two left open. */}
    <Sheet x={80} y={930} w={920} h={400}>
      <div style={{position: 'absolute', left: 38, top: 26, ...LABEL, fontSize: 22, color: '#6b7078'}}>Head office · attendance register</div>
      <div style={{position: 'absolute', right: 38, top: 4, fontSize: 56, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.15, opacity: seg(t, 6.1, 6.7, outX), transform: `translateY(${Math.round((1 - seg(t, 6.1, 6.7, outX)) * 12)}px)`}}>18</div>
      {Array.from({length: 20}).map((_, k) => {
        const x = 38 + Math.floor(k / 10) * 440;
        const y = 92 + (k % 10) * 30;
        const gap = k >= 18;
        const p = gap ? seg(t, 6.3, 6.9, outX) : seg(t, 3.5 + k * 0.15, 3.9 + k * 0.15, outX);
        return (
          <div key={k}>
            <div style={{position: 'absolute', left: x, top: y + 2, fontSize: 16, color: '#6b7078', width: 34}}>{String(k + 1).padStart(2, '0')}</div>
            <div style={{position: 'absolute', left: x + 44, top: y + 8, width: 250, height: 12, borderRadius: 6, border: `1.5px dashed ${gap ? 'var(--accent)' : 'rgba(15,17,21,0.18)'}`, opacity: gap ? p : 1}} />
            {!gap ? (
              <>
                <div style={{position: 'absolute', left: x + 44, top: y + 8, width: 250 * p, height: 12, borderRadius: 6, background: 'rgba(15,17,21,0.2)'}} />
                <svg width={22} height={22} viewBox="0 0 24 24" style={{position: 'absolute', left: x + 316, top: y + 4, opacity: p}}>
                  <path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#0f1115" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            ) : null}
          </div>
        );
      })}
      <div style={{position: 'absolute', left: 560, top: 120, transform: 'rotate(-7deg)', padding: '8px 22px', border: '3px dashed rgba(15,17,21,0.5)', borderRadius: 10, background: '#FBFCFD', fontSize: 36, fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(15,17,21,0.62)', opacity: seg(t, 6.5, 7.2, outX)}}>VERIFIED?</div>
    </Sheet>
  </>
);

/* ---------- pain: the phone thread ---------- */

const PCX = PHONE.x + PHONE.w / 2;
const PCY = PHONE.y + PHONE.h / 2;

/** Each message nudges the phone once: a soft damped sway at about 3 Hz (never a per-frame shake, which aliases at 30 fps). */
const NUDGES: [number, number][] = [[9.52, 1.4], [12.52, 1.6], [15.14, 1.8], [16.0, 1.8], [16.3, 1.8], [16.6, 1.8]];
const buzz = (t: number) => NUDGES.reduce((acc, [e, amp]) => (t > e && t < e + 1.2 ? acc + amp * Math.exp(-(t - e) * 4.5) * Math.sin((t - e) * 19) : acc), 0);

const PhoneWorld: React.FC<{t: number}> = ({t}) => {
  const inP = seg(t, 8.75, 9.3, outX);
  const out = seg(t, 21.0, 21.4, inOut);
  if (inP <= 0 || out >= 1) return null;
  const vx = buzz(t);
  const blur = tk(t, [[17.3, 0], [17.9, 10]]);
  const thread = lin(t, [[9.52, 0], [9.9, 1], [12.52, 1], [12.9, 2], [15.14, 2], [15.5, 3], [16.0, 3], [16.25, 4], [16.5, 5], [16.75, 6]]);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: inP * (1 - out), transformOrigin: `${PCX}px ${PCY}px`, transform: `translate(${540 - PCX + vx}px, ${960 - PCY + Math.round((1 - inP) * 120) + vx * 0.35}px) scale(2.2) rotate(${vx * 0.05}deg)`, filter: blur > 0.05 ? `blur(${blur}px)` : undefined}}>
      <Phone ry={0}>
        <div style={{position: 'absolute', inset: 0}}>
          <ThreadScreen n={thread} />
        </div>
      </Phone>
    </div>
  );
};

/* ---------- the question: five tools, then the freeze ---------- */

const TOOLS: {a: number; node: React.ReactNode}[] = [
  {a: 17.55, node: <AttendanceCard />},
  {a: 18.1, node: <RosterCard />},
  {a: 18.65, node: <SupervisorCard />},
  {a: 19.2, node: <OvertimeCard />},
  {a: 19.75, node: <SalaryCard />},
];

const ToolCuts: React.FC<{t: number}> = ({t}) => {
  if (t < 17.45 || t > 21.5) return null;
  const hold = tk(t, [[20.2, 1], [20.7, 0.25]]);
  const out = seg(t, 21.0, 21.45, inOut);
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
  const p = seg(t, 20.25, 20.85, inOut);
  return (
    <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
      <circle cx={540} cy={1000} r={150} fill="none" stroke="var(--ink-muted)" strokeWidth={3} strokeDasharray={942} strokeDashoffset={942 * (1 - p)} opacity={0.7} />
      <path d="M480 940 L600 1060 M600 940 L480 1060" stroke="var(--ink)" strokeWidth={14} strokeLinecap="round" strokeDasharray={170} strokeDashoffset={170 * (1 - seg(t, 20.45, 20.95, inOut))} />
    </svg>
  );
};

/* ---------- the reframe: scattered fragments become one ordered list ---------- */

const FRAGS: {kind: GlyphKind; label: string; role: string; from: {x: number; y: number; r: number}}[] = [
  {kind: 'sheet', label: 'Roster', role: 'Sites', from: {x: 80, y: 1090, r: 3}},
  {kind: 'chat', label: 'Chat', role: 'Deployment', from: {x: 110, y: 720, r: -5}},
  {kind: 'notes', label: 'Register', role: 'Attendance', from: {x: 600, y: 770, r: 4}},
  {kind: 'receipt', label: 'OT sheet', role: 'Overtime', from: {x: 330, y: 920, r: -3}},
  {kind: 'list', label: 'Notebook', role: 'Salary', from: {x: 570, y: 1140, r: -4}},
];

const Fragments: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 29.0, 29.2, inOut);
  if (t < 21.5 || out >= 1) return null;
  const join = seg(t, 27.7, 28.9, inOut);
  return (
    <>
      {FRAGS.map((f, i) => {
        const p = seg(t, 21.6 + i * 0.1, 22.3 + i * 0.1, outX);
        const m = seg(t, 23.7 + i * 0.18, 24.9 + i * 0.18, inOut);
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
        <path d="M968 738 V1282" stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={544} strokeDashoffset={544 * (1 - join)} />
      </svg>
    </>
  );
};

/* ---------- Verity understands the business (the tail starts at V.tail) ---------- */

const CARDS: {x: number; y: number; kind: GlyphKind; label: string; a: number}[] = [
  {x: 380, y: 720, kind: 'flow', label: 'Your sites', a: 33.1},
  {x: 680, y: 945, kind: 'team', label: 'Your deployment', a: 33.9},
  {x: 380, y: 1180, kind: 'list', label: 'Your attendance', a: 35.0},
  {x: 80, y: 945, kind: 'receipt', label: 'Your salary', a: 35.8},
];
const LINKS: [number, number, number, number][] = [[540, 840, 540, 918], [680, 1010, 632, 1010], [540, 1180, 540, 1102], [400, 1010, 448, 1010]];

const BusinessMap: React.FC<{t: number}> = ({t}) => {
  const c = seg(t, 32.4, 33.0, outX);
  return (
    <>
      <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
        {LINKS.map(([x1, y1, x2, y2], i) => {
          const p = seg(t, CARDS[i].a + 0.25, CARDS[i].a + 0.7, inOut);
          const len = Math.hypot(x2 - x1, y2 - y1);
          return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} opacity={p > 0 ? 1 : 0} />;
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

const CHIPS = [{label: 'Business', a: 37.2}, {label: 'Understanding', a: 38.0}, {label: 'System', a: 38.9}];

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
  const lbl = seg(t, 43.2, 43.9, outX);
  const sweep = seg(t, 43.9, 44.5, inOut);
  const reveal = seg(t, 44.5, 45.15, inOut);
  const out = seg(t, 46.0, 46.45, inOut);
  if (t < V.offer - 0.1 || out >= 1) return null;
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

/* ---------- credibility: the analysis, drawn ---------- */

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
      <Branch trace draw={seg(t, 46.8, 49.0, inOut)} />
    </div>
    <Callout x={615} y={212} text="Cover owner" up a={47.6} t={t} />
    <Callout x={615} y={476} text="Overtime check" a={48.5} t={t} />
    <Callout x={413} y={344} text="Site handoff" a={49.4} t={t} />
    <div style={{opacity: seg(t, 50.4, 51.0)}}>
      <svg width={920} height={640} style={{position: 'absolute', left: 0, top: 0}}>
        <path d="M206 584 H807 M206 572 V596 M807 572 V596" stroke="rgba(15,17,21,0.5)" strokeWidth={1.2} fill="none" />
      </svg>
      <div style={{position: 'absolute', left: 206, width: 601, top: 598, textAlign: 'center', fontSize: 19, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7078'}}>Deployment to salary</div>
    </div>
  </Sheet>
);

/* ---------- the Blueprint assembles ---------- */

const STEPS: {kind: GlyphKind; num: string; label: string; a: number}[] = [
  {kind: 'flow', num: '01', label: 'Current workflow', a: 52.9},
  {kind: 'list', num: '02', label: 'Requirements', a: 53.8},
  {kind: 'team', num: '03', label: 'Proposed system', a: 54.8},
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
          <div style={{opacity: seg(t, 55.7 + i * 0.2, 56.1 + i * 0.2)}}>
            <Check p={seg(t, 55.7 + i * 0.2, 56.2 + i * 0.2, outX)} size={44} />
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
      <div style={{position: 'absolute', left: 0, right: 0, top: 950, textAlign: 'center', ...LABEL, fontSize: 22, letterSpacing: '0.1em', color: 'var(--ink-muted)', ...r(f + 0.9)}}>Verity Business Analysis &amp; Blueprint · Limited time offer</div>
      <CTAPill text="Tell us about your business" p={seg(t, f + 1.3, f + 2.0, outX)} y={1070} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 1230, textAlign: 'center', fontSize: 34, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink-muted)', ...r(f + 1.7)}}>verity.plotarmour.in</div>
    </div>
  );
};

/* ---------- the film ---------- */

export const AdIND10: React.FC = () => {
  const t = useCurrentFrame() / IND10_FPS;
  const built = tk(t, [[37.4, 0], [37.8, 1], [38.3, 2], [38.8, 3], [39.3, 4], [39.8, 5]]);
  return (
    <DarkStudio shaft={t * 4}>
      {/* Opening: the ground against the records. */}
      <Layer t={t} a={0.3} b={8.1} ex={0.35} dy={40} light>
        <World t={t} />
      </Layer>

      {/* Pain: the thread, then the five tools and the freeze. */}
      <Light><PhoneWorld t={t} /></Light>
      <div style={{position: 'absolute', inset: 0, background: 'rgba(8,11,17,0.72)', opacity: tk(t, [[17.3, 0], [17.9, 1]]) * (1 - seg(t, 21.0, 21.45, inOut)), pointerEvents: 'none'}} />
      <Light><ToolCuts t={t} /></Light>
      <Layer t={t} a={20.2} b={21.1} dy={0}><Cross t={t} /></Layer>

      {/* The reframe. */}
      <Light><Fragments t={t} /></Light>

      {/* Verity understands the business, then builds around it. */}
      <Layer t={t} a={32.3} b={36.9} dy={30}><BusinessMap t={t} /></Layer>
      <Layer t={t} a={37.2} b={V.offer - 0.3} ex={0.5} dy={20}><ChipRow t={t} /></Layer>
      <Layer t={t} a={37.3} b={V.offer - 0.3} ex={0.5} dy={80} light>
        <Workspace x={80} y={720} w={920} h={640} built={built} modules={['Workforce', 'Schedule', 'Locations', 'Records', 'Reports and analytics']} />
      </Layer>

      {/* The offer. */}
      <Offer t={t} />

      {/* Credibility, then the Blueprint. */}
      <Layer t={t} a={46.5} b={52.6} dy={50} light>
        <Analysis t={t} />
      </Layer>
      <Layer t={t} a={52.75} b={57.1} dy={30}><BlueprintSteps t={t} /></Layer>

      {/* Type: lands once, holds still, exits upward. Each headline is gone before the next lands at the same spot. */}
      <Layer t={t} a={0.1} b={1.75}><Title lines={['Quick', 'question?']} size={104} cap={330} /></Layer>
      <Layer t={t} a={2.3} b={8.0}><Title lines={['Guards. Housekeeping.', 'Verified?']} size={76} cap={360} accent={[1]} /></Layer>
      <Layer t={t} a={17.5} b={20.95}><Title lines={['Who was actually', 'on duty?']} size={76} /></Layer>
      <Layer t={t} a={21.45} b={23.0}><Title lines={["It isn't only", 'your staff.']} size={84} /></Layer>
      <Layer t={t} a={23.45} b={28.9}><Title lines={['The gap between', 'the ground and', 'the records.']} size={76} accent={[2]} /></Layer>
      <Layer t={t} a={30.5} b={36.7}><Title lines={['We understand', 'your business first.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={37.1} b={V.offer - 0.3} ex={0.4}><Title lines={['Then we build', 'around your business.']} size={80} accent={[1]} /></Layer>
      <Layer t={t} a={46.45} b={49.1}><Title lines={['Ready to put', 'a system in place?']} size={80} /></Layer>
      <Layer t={t} a={49.6} b={52.5}><Title lines={['Our specialised', 'product managers', 'from IIMs and IITs']} size={76} accent={[2]} /></Layer>
      <Layer t={t} a={52.65} b={56.1}><Title lines={['We prepare', 'your Blueprint.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={56.5} b={57.15} ex={0.3}><Title lines={['Your business.', 'Understood first.']} size={84} accent={[1]} /></Layer>

      {/* Verity enters on a hard cut to a clear room: the mark draws itself. */}
      <Layer t={t} a={V.tail} b={30.9} ex={0.3} dy={0}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 760}}>
          <BigLockup draw={seg(t, V.tail, 30.4, inOut)} word={seg(t, 29.8, 30.4, outX)} />
        </div>
      </Layer>
      <Layer t={t} a={31.0} b={V.offer - 0.4} ex={0.4} dy={0}><Lockup /></Layer>
      <Layer t={t} a={46.45} b={V.final - 0.1} ex={0.3} dy={0}><Lockup /></Layer>

      <EndCard t={t} />
      <Audio src={staticFile('ads/IND10/vo.mp3')} />
    </DarkStudio>
  );
};
