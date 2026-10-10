import React from 'react';
import {Audio, Easing, staticFile, useCurrentFrame} from 'remotion';
import {inOut, outX, seg, track} from '../../shared/timeline';
import {Check} from '../../trailer/ui';
import {capOffset} from '../../social/kit';
import {CTAPill, Lockup} from '../kit';
import {Acrylic, Branch, HORIZON, Sheet, Support, Title, Workspace} from '../R07/world';
import {fontFamily} from '../kit';
import {Layer, Light, DarkStudio, LABEL, tk, lin} from '../stage';
import {BigLockup, ClientThread, LockScreen, OrderDoc, PHONE, PaymentCard, Person, Phone} from './props';

/** R08 "The owner is the system". A pain-point film about the owner, then Verity as the answer, then the Blueprint offer.
 *  One pale studio for the whole film (the R07 room); every beat is keyed to the founder's word timings (words.ts).
 *  Hook and pain play in the world (phone, artifacts, staff); Verity enters on a hard cut to white space. */

export const R08_FPS = 30;
export const R08_DURATION = Math.round(51 * R08_FPS);

/** VO anchors in seconds, read off words.ts. Retime here if the VO is re-recorded. */
const V = {
  ring: 6.55, flood: 9.0, twist: 16.2, ye: 17.48, problem: 19.82, system: 21.24, grow: 23.48,
  verity: 24.78, pehle: 25.76, phir: 27.8, aur: 30.3, limited: 31.56, five: 33.22,
  sirf: 38.66, ek: 40.5, toh: 42.56, iit: 44.24, analyze: 46.8, final: 48.55,
} as const;


/* ---------- hook and pain: the phone ---------- */

const PCX = PHONE.x + PHONE.w / 2;
const PCY = PHONE.y + PHONE.h / 2;

/** The phone. Between 9.0 and 10.4 the camera pushes in until the phone fills the frame. */
const PhoneWorld: React.FC<{t: number; frame: number}> = ({t, frame}) => {
  const out = seg(t, 15.95, 16.45, inOut);
  if (out >= 1) return null;
  const z = tk(t, [[V.flood, 0], [10.4, 1]]);
  const s = 1 + 1.2 * z;
  const vx = buzz(t);
  const vy = vx * 0.35;
  const n = lin(t, [[0.4, 0], [1.9, 4], [V.ring, 4], [V.flood, 8], [10.3, 14]]);
  const blur = tk(t, [[10.3, 0], [11.0, 10]]);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transformOrigin: `${PCX}px ${PCY}px`, transform: `translate(${(540 - PCX) * z + vx}px, ${(960 - PCY) * z + vy}px) scale(${s}) rotate(${vx * 0.05}deg)`, filter: blur > 0.05 ? `blur(${blur}px)` : undefined}}>
      <Phone ry={-14 * (1 - z)}>
        <LockScreen n={n} />
      </Phone>
    </div>
  );
};

/** The placard that says the owner is away, on the desk beside the phone. */
const Placard: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, 0.35, 1.1, outX) * (1 - seg(t, 8.8, 9.6, inOut));
  if (p <= 0) return null;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: p, transform: `translateY(${(1 - p) * 24}px)`}}>
      <Acrylic x={100} y={1130} w={360} h={160} ry={12} radius={14}>
        <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, ...LABEL, fontSize: 30, letterSpacing: '0.16em'}}>
          <span style={{width: 12, height: 12, borderRadius: 6, background: 'var(--accent)'}} />
          Owner away
        </div>
      </Acrylic>
    </div>
  );
};

/** Each call nudges the phone once: a soft damped sway at about 3 Hz (never a per-frame shake, which aliases at 30 fps). */
const NUDGES: [number, number][] = [[0.5, 1.6], [0.9, 1.6], [1.3, 1.6], [1.7, 1.6], [6.6, 2.4], [7.2, 2.4], [7.8, 2.6], [8.3, 2.6], [8.7, 3], [9.0, 3.4], [9.25, 3.4], [9.5, 3.6], [9.75, 3.6], [10.0, 3.6], [10.25, 3.6], [10.6, 3], [11.0, 3], [11.5, 2.8], [12.0, 2.8], [12.6, 2.6], [13.2, 2.6], [13.85, 2.6], [14.5, 2.4], [15.1, 2.4]];
const buzz = (t: number) => NUDGES.reduce((acc, [e, amp]) => (t > e && t < e + 1.2 ? acc + amp * Math.exp(-(t - e) * 4.5) * Math.sin((t - e) * 19) : acc), 0);

const SLOTS = [10.3, 12.0, 13.85];

/** The three operational artifacts stack up in front of the zoomed phone, each earlier one stepping back as the next arrives. */
const ArtifactStack: React.FC<{t: number}> = ({t}) => {
  const out = seg(t, 15.9, 16.35, inOut);
  if (t < SLOTS[0] || out >= 1) return null;
  const nodes = [<OrderDoc key="o" circle={seg(t, 11.0, 11.7, inOut)} />, <PaymentCard key="p" />, <ClientThread key="c" />];
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateY(${-out * 40}px)`}}>
      {nodes.map((node, i) => {
        const p = seg(t, SLOTS[i], SLOTS[i] + 0.5, outX);
        if (p <= 0) return null;
        const behind = SLOTS.slice(i + 1).reduce((acc, a) => acc + seg(t, a, a + 0.5, inOut), 0);
        return (
          <div key={i} style={{position: 'absolute', left: 0, top: 560, width: 1080, height: 700, opacity: p * (1 - behind * 0.3), transform: `translateY(${(1 - p) * 360 - behind * 44}px) scale(${1 - behind * 0.03})`, transformOrigin: '50% 100%', filter: behind > 0.05 ? `blur(${behind * 2.2}px)` : undefined}}>
            {node}
          </div>
        );
      })}
    </div>
  );
};

/* ---------- the twist: the people are calm, the system is the subject ---------- */

const Staff: React.FC<{t: number}> = ({t}) => {
  const dim = 1 - 0.45 * seg(t, 18.3, 19.0, inOut);
  const out = seg(t, 19.5, 20.1, inOut);
  const figs = [
    {x: 90, h: 500, a: 16.55},
    {x: 270, h: 530, a: 16.8},
    {x: 450, h: 480, a: 17.05},
  ];
  const plate = seg(t, 18.3, 19.1, outX);
  return (
    <>
      {figs.map((f) => {
        const p = seg(t, f.a, f.a + 0.8, outX);
        return p > 0 && out < 1 ? <Person key={f.x} x={f.x} base={1290} h={f.h} opacity={p * dim * (1 - out)} tone={0.12} /> : null;
      })}
      {plate > 0 && out < 1 ? (
        <div style={{position: 'absolute', inset: 0, opacity: plate * (1 - out), transform: `translateY(${(1 - plate) * 30}px)`}}>
          <Acrylic x={690} y={700} w={300} h={590} ry={-16}>
            <div style={{position: 'absolute', left: 0, right: 0, top: 36, textAlign: 'center', ...LABEL, fontSize: 20, color: 'var(--ink-muted)'}}>System</div>
            <svg width={300} height={590} style={{position: 'absolute', left: 0, top: 0}}>
              {[0, 1, 2, 3].map((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={46 + c * 112} y={110 + r * 92} width={96} height={64} rx={10} fill="none" stroke="rgba(15,17,21,0.18)" strokeWidth={2} />))}
            </svg>
          </Acrylic>
        </div>
      ) : null}
    </>
  );
};

/* ---------- the real problem: everything converges on the owner ---------- */

const RING: [string, number, number][] = [['Orders', 460, 80], ['Inventory', 774, 267], ['Payments', 654, 568], ['Clients', 266, 568], ['Accounts', 146, 267]];
const YOU: [number, number] = [460, 350];

const Diagram: React.FC<{t: number}> = ({t}) => {
  const grow = tk(t, [[23.4, 1], [24.3, 1.55]]);
  const youP = seg(t, 22.46, 23.0, outX);
  return (
    <svg width={920} height={660} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
      {RING.map(([, x, y], i) => {
        const nx = RING[(i + 1) % 5][1];
        const ny = RING[(i + 1) % 5][2];
        const gx = (a: number) => x + (nx - x) * a;
        const gy = (a: number) => y + (ny - y) * a;
        const p = seg(t, 21.2 + i * 0.15, 21.7 + i * 0.15, outX);
        return (
          <g key={i} opacity={p}>
            <path d={`M${gx(0.2)} ${gy(0.2)} L${gx(0.42)} ${gy(0.42)}`} stroke="rgba(15,17,21,0.3)" strokeWidth={2.5} strokeLinecap="round" />
            <path d={`M${gx(0.58)} ${gy(0.58)} L${gx(0.8)} ${gy(0.8)}`} stroke="rgba(15,17,21,0.3)" strokeWidth={2.5} strokeLinecap="round" />
            <path d={`M${gx(0.5) - 8} ${gy(0.5) - 8} l16 16 M${gx(0.5) + 8} ${gy(0.5) - 8} l-16 16`} stroke="rgba(15,17,21,0.5)" strokeWidth={2.5} strokeLinecap="round" />
          </g>
        );
      })}
      {RING.map(([, x, y], i) => {
        const p = seg(t, V.grow - 0.6 + i * 0.22, V.grow + 0.2 + i * 0.22, inOut);
        const len = Math.hypot(YOU[0] - x, YOU[1] - y);
        return <path key={i} d={`M${x} ${y} L${YOU[0]} ${YOU[1]}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} />;
      })}
      {RING.map(([label, x, y], i) => {
        const p = seg(t, 20.0 + i * 0.2, 20.6 + i * 0.2, outX);
        return (
          <g key={label} opacity={p}>
            <rect x={x - 95} y={y - 36} width={190} height={72} rx={14} fill="#fff" stroke="rgba(15,17,21,0.2)" strokeWidth={2} />
            <text x={x} y={y + 9} textAnchor="middle" fontSize={26} fontWeight={500} fill="#0f1115" style={{letterSpacing: '-0.01em'}}>{label}</text>
          </g>
        );
      })}
      {youP > 0 ? (
        <g opacity={youP} transform={`translate(${YOU[0]} ${YOU[1]}) scale(${grow * (0.7 + 0.3 * youP)})`}>
          <circle r={86} fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0.18} />
          <circle r={62} fill="var(--accent)" />
          <text x={0} y={14} textAnchor="middle" fontSize={40} fontWeight={500} fill="#fff" style={{letterSpacing: '-0.02em'}}>YOU</text>
          <g opacity={seg(t, 23.9, 24.3, outX)} transform="translate(58 -64)">
            <rect x={-34} y={-20} width={68} height={40} rx={20} fill="#0f1115" />
            <text x={0} y={9} textAnchor="middle" fontSize={22} fontWeight={500} fill="#fff">99+</text>
          </g>
        </g>
      ) : null}
    </svg>
  );
};

/* ---------- Verity: the study, then the system built around it ---------- */

const STUDY = ['Orders', 'Approvals', 'Inventory', 'Customers', 'Payments', 'Reporting'];

const Study: React.FC<{t: number}> = ({t}) => {
  const collapse = seg(t, 28.3, 28.85, inOut);
  const reach = 130 + 84 * 5 * seg(t, 26.6, 27.55, inOut);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - collapse}}>
      <div style={{position: 'absolute', left: 72, top: 52, ...LABEL, fontSize: 24, color: 'var(--ink-muted)', opacity: seg(t, 26.45, 26.9)}}>How you work</div>
      <svg width={920} height={660} style={{position: 'absolute', left: 0, top: 0}}>
        <path d={`M96 130 V${reach}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" />
        {STUDY.map((_, k) => (
          <circle key={k} cx={96} cy={130 + 84 * k} r={8} fill="#fff" stroke="var(--accent)" strokeWidth={3} opacity={seg(t, 26.6 + k * 0.17, 26.9 + k * 0.17)} />
        ))}
      </svg>
      {STUDY.map((s, k) => {
        const p = seg(t, 26.6 + k * 0.17, 27.1 + k * 0.17, outX);
        const y = 130 + 84 * k;
        return (
          <div key={s} style={{position: 'absolute', left: 0, top: 0, opacity: p, transform: `translateY(${(1 - p) * 18}px)`}}>
            <div style={{position: 'absolute', left: 140, top: y - 26, fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '52px', whiteSpace: 'nowrap'}}>{s}</div>
            <svg width={920} height={660} style={{position: 'absolute', left: 0, top: 0}}>
              <path d={`M520 ${y} H760 M520 ${y - 8} V${y + 8} M760 ${y - 8} V${y + 8}`} stroke="rgba(15,17,21,0.35)" strokeWidth={1.2} fill="none" />
            </svg>
            <div style={{position: 'absolute', left: 780, top: y - 12, ...LABEL, fontSize: 17, color: 'var(--ink-muted)'}}>0{k + 1}</div>
          </div>
        );
      })}
    </div>
  );
};

const CHIPS = [{label: 'Your business', a: 27.8}, {label: 'Your workflow', a: 28.5}, {label: 'Your Verity', a: 29.25}];

const ChipRow: React.FC<{t: number}> = ({t}) => (
  <div style={{position: 'absolute', left: 80, top: 606, width: 920, display: 'flex', alignItems: 'center', gap: 16}}>
    {CHIPS.map((c, i) => {
      const p = seg(t, c.a, c.a + 0.5, outX);
      const active = t >= c.a && (i === 2 || t < CHIPS[i + 1].a);
      return (
        <React.Fragment key={c.label}>
          <div style={{height: 56, padding: '0 24px', borderRadius: 28, display: 'flex', alignItems: 'center', gap: 12, ...LABEL, fontSize: 21, letterSpacing: '0.12em', whiteSpace: 'nowrap', background: active ? 'var(--surface)' : 'transparent', border: `1.5px solid ${active ? 'var(--accent)' : 'rgba(15,17,21,0.14)'}`, color: active ? 'var(--ink)' : 'var(--ink-muted)', opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
            <span style={{width: 10, height: 10, borderRadius: 5, background: active ? 'var(--accent)' : 'rgba(15,17,21,0.2)'}} />
            {c.label}
          </div>
          {i < 2 ? (
            <svg width={36} height={20} viewBox="0 0 36 20" fill="none" stroke="rgba(15,17,21,0.4)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" opacity={p}>
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
  const lbl = seg(t, 33.85, 34.55, outX);
  const num = seg(t, V.five, V.five + 0.8, outX);
  const sweep = seg(t, 35.0, 35.65, inOut);
  const reveal = seg(t, 35.55, 36.25, inOut);
  const tag = seg(t, V.limited - 0.1, V.limited + 0.6, outX);
  const out = seg(t, 36.7, 37.15, inOut);
  if (t < V.limited - 0.2 || out >= 1) return null;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateY(${-out * 40}px) scale(${1 + 0.02 * seg(t, V.limited, 37, (n) => n)})`, transformOrigin: '50% 45%'}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 330, display: 'flex', justifyContent: 'center', opacity: tag, transform: `translateY(${(1 - tag) * 20}px)`}}>
        <div style={{height: 56, padding: '0 28px', borderRadius: 28, display: 'flex', alignItems: 'center', gap: 14, ...LABEL, fontSize: 24, letterSpacing: '0.16em', border: '1.5px solid var(--accent)', background: 'var(--surface)'}}>
          <span style={{width: 11, height: 11, borderRadius: 6, background: 'var(--accent)'}} />
          Limited time
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 520, textAlign: 'center', ...LABEL, fontSize: 30, letterSpacing: '0.16em', color: 'var(--ink-muted)', opacity: lbl, transform: `translateY(${(1 - lbl) * 20}px)`}}>Business analysis blueprint</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 590, height: 260, textAlign: 'center', fontSize: 260, lineHeight: '260px', fontWeight: 300, letterSpacing: '-0.05em', opacity: num * (1 - 0.62 * sweep), transform: `translateY(${(1 - num) * 40}px)`}}>₹5,000</div>
      <div style={{position: 'absolute', left: 80, width: 920 * sweep, top: 712, height: 16, borderRadius: 8, background: 'var(--accent)', transform: 'rotate(-2.2deg)', transformOrigin: '0 50%', opacity: num}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 880, height: 340, textAlign: 'center', fontSize: 340, lineHeight: '340px', fontWeight: 500, letterSpacing: '-0.05em', color: 'var(--accent)', clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)`, opacity: reveal > 0 ? 1 : 0}}>FREE</div>
    </div>
  );
};

/* ---------- credibility and the call to action ---------- */

const Credential: React.FC<{t: number}> = ({t}) => {
  const a = V.iit;
  const rule = seg(t, a - 0.1, a + 0.9, inOut);
  const cell = (label: string, at: number) => {
    const p = seg(t, at, at + 0.8, outX);
    return (
      <div style={{flex: 1, textAlign: 'center', fontSize: 176, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1, opacity: p, transform: `translateY(${Math.round((1 - p) * 30)}px)`}}>{label}</div>
    );
  };
  const lab = seg(t, a + 1.7, a + 2.4, outX);
  return (
    <>
      <div style={{position: 'absolute', left: 80, width: 920 * rule, top: 770, height: 1, background: 'var(--line)'}} />
      <div style={{position: 'absolute', left: 80, right: 80, top: 800, height: 176, display: 'flex', alignItems: 'center'}}>
        {cell('IIT', a)}
        <div style={{width: 1, height: 130, background: 'var(--line)', opacity: seg(t, a + 0.5, a + 1.1)}} />
        {cell('IIM', a + 0.9)}
      </div>
      <div style={{position: 'absolute', left: 80, width: 920 * rule, top: 1006, height: 1, background: 'var(--line)'}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 1040, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, ...LABEL, fontSize: 28, letterSpacing: '0.18em', opacity: lab, transform: `translateY(${Math.round((1 - lab) * 16)}px)`}}>
        <span style={{width: 11, height: 11, borderRadius: 6, background: 'var(--accent)'}} />
        Selected professionals
      </div>
    </>
  );
};

const Process: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, V.analyze + 0.05, V.analyze + 0.8, outX);
  return (
    <div style={{position: 'absolute', left: 80, right: 80, top: 1130, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 22, fontSize: 32, fontWeight: 400, letterSpacing: '-0.015em', opacity: p, transform: `translateY(${(1 - p) * 24}px)`}}>
      <span>Analyse your business</span>
      <svg width={62} height={24} viewBox="0 0 62 24" fill="none" stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h54M46 3l10 9-10 9" />
      </svg>
      <span>Build around how you work</span>
    </div>
  );
};

/** Final frame: nothing but the brand, the line, the offer and the action. */
const EndCard: React.FC<{t: number}> = ({t}) => {
  const r = (a: number) => {
    const p = seg(t, a, a + 0.7, outX);
    return {opacity: p, transform: `translateY(${(1 - p) * 24}px)`} as React.CSSProperties;
  };
  const f = V.final;
  return (
    <>
      <div style={{position: 'absolute', left: 0, right: 0, top: 440, ...r(f)}}>
        <BigLockup draw={seg(t, f, f + 1.0, inOut)} word={seg(t, f + 0.5, f + 1.1, outX)} size={110} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 640 - capOffset(54, 1.12), textAlign: 'center', fontSize: 54, lineHeight: 1.12, fontWeight: 300, letterSpacing: '-0.035em', ...r(f + 0.35)}}>
        Business software configured<br />around how you work.
      </div>
      <div style={{position: 'absolute', left: 80, right: 80, top: 880, height: 76, borderRadius: 38, border: '1px solid var(--line)', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, whiteSpace: 'nowrap', ...LABEL, fontSize: 25, letterSpacing: '0.1em', ...r(f + 0.7)}}>
        <span style={{position: 'relative', color: 'var(--ink-muted)'}}>
          ₹5,000
          <span style={{position: 'absolute', left: -4, right: -4, top: '50%', height: 3, borderRadius: 2, background: 'var(--accent)'}} />
        </span>
        <span>Business analysis blueprint — </span>
        <span style={{color: 'var(--accent)', fontWeight: 600}}>Free</span>
      </div>
      <CTAPill text="Book your analysis" p={seg(t, f + 1.0, f + 1.7, outX)} y={1050} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 1210, textAlign: 'center', fontSize: 34, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink-muted)', ...r(f + 1.4)}}>verity.plotarmour.in</div>
    </>
  );
};

/* ---------- the film ---------- */

/** Owner-steps-away tick positions: top-right of the visible Workspace tiles at (330, 720, 920 x 640) (the right column bleeds off the frame); the Reports tick sits right of its label. */
const TICKS: [number, number, number][] = [[871, 826, 37.9], [871, 1008, 38.7], [1010, 1190, 39.5]];

export const AdR08: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / R08_FPS;
  const built = tk(t, [[29.1, 0], [29.5, 1], [29.8, 2], [30.05, 3], [30.4, 4]]);
  const walk = tk(t, [[36.95, 0], [39.7, 1]]);

  return (
    <DarkStudio shaft={t * 4}>
      <div style={{position: 'absolute', inset: 0}}>
        {/* S1-S3: the hook and the pain. */}
        <Light><Placard t={t} /></Light>
        <Light><PhoneWorld t={t} frame={frame} /></Light>
        <div style={{position: 'absolute', inset: 0, background: 'rgba(8,11,17,0.72)', opacity: tk(t, [[10.3, 0], [11.0, 1]]) * (1 - seg(t, 15.95, 16.45, inOut)), pointerEvents: 'none'}} />
        <Light><ArtifactStack t={t} /></Light>

        {/* S4: calm people, the system at the centre. */}
        <Light><Staff t={t} /></Light>

        {/* S5: the owner as the node everything converges on. */}
        <Layer t={t} a={V.problem + 0.05} b={24.55} ex={0.05} dy={50} light>
          <Sheet x={80} y={700} w={920} h={660} rx={4}>
            <Diagram t={t} />
          </Sheet>
        </Layer>

        {/* S6-S7: Verity studies the business, then builds around it. */}
        <Layer t={t} a={26.4} b={29.2} ex={0.6} dy={50} light>
          <Sheet x={80} y={700} w={920} h={660} rx={4}>
            <Study t={t} />
            <div style={{position: 'absolute', left: 115, top: 140, transform: 'scale(1.5)', transformOrigin: '0 0', opacity: seg(t, 28.35, 28.8)}}>
              <Branch trace draw={seg(t, 28.4, 29.15, inOut)} />
            </div>
          </Sheet>
        </Layer>
        <Layer t={t} a={29.05} b={V.aur + 0.2} ex={0.6} dy={80} light>
          <Workspace x={80} y={720} w={920} h={640} built={built} />
        </Layer>
        <Layer t={t} a={V.phir} b={V.aur + 0.2} ex={0.5} dy={20}><ChipRow t={t} /></Layer>

        {/* S9: the owner steps away while the workflow keeps running. */}
        <Layer t={t} a={36.9} b={42.4} dy={50} light>
          <Workspace x={330} y={720} w={920} h={640} built={5} />
          {TICKS.map(([x, y, a]) => (
            <div key={a} style={{position: 'absolute', left: x, top: y, opacity: seg(t, a, a + 0.3), transform: `scale(${0.8 + 0.2 * seg(t, a, a + 0.4, outX)})`}}>
              <Check p={seg(t, a, a + 0.5, outX)} size={36} />
            </div>
          ))}
        </Layer>
        <div style={{position: 'absolute', inset: 0, opacity: seg(t, 36.95, 37.6, outX) * (1 - seg(t, 39.0, 39.8, inOut))}}>
          <Person x={60 - 330 * walk} base={1360} h={640} tone={0.2} opacity={1} />
        </div>

        {/* S11: credibility. */}
        <Layer t={t} a={V.iit - 0.1} b={48.4} dy={30}>
          <Credential t={t} />
        </Layer>
      </div>

      <Offer t={t} />

      {/* Type: lands once, holds still, exits upward. */}
      <Layer t={t} a={0.1} b={1.8}><Title lines={['Quick', 'question?']} size={104} /></Layer>
      <Layer t={t} a={2.4} b={6.3}><Title lines={['One day', 'away from', 'the office…']} size={84} /></Layer>
      {[
        {a: 10.45, b: 11.9, l: 'Order?'},
        {a: 12.25, b: 13.75, l: 'Payment?'},
        {a: 14.2, b: 15.85, l: 'Client?'},
      ].map((x) => (
        <Layer key={x.l} t={t} a={x.a} b={x.b} ex={0.3}><Title lines={[x.l]} size={104} /></Layer>
      ))}
      <Layer t={t} a={V.twist + 0.05} b={17.35}><Title lines={['And honestly…']} size={96} /></Layer>
      <Layer t={t} a={V.ye + 0.02} b={19.55}><Title lines={["This isn't a", 'people problem.']} size={88} accent={[1]} /></Layer>
      <Layer t={t} a={V.problem + 0.08} b={22.35}><Title lines={['The real problem…']} size={84} /></Layer>
      <Layer t={t} a={V.system + 1.2} b={24.55} ex={0.05}><Title lines={['Your business grew.', "Your system didn't."]} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={V.pehle} b={27.7}><Title lines={['We understand', 'your business first.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={V.phir} b={V.aur}><Title lines={['Then we build the system', 'around how you work.']} size={72} accent={[1]} /></Layer>
      <Layer t={t} a={V.sirf - 0.1} b={40.4}><Title lines={['Not just another', 'software,']} size={84} /></Layer>
      <Layer t={t} a={V.ek} b={42.4}><Title lines={['…you need a', 'proper system.']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={V.toh + 0.1} b={48.4}><Title lines={['Get your', 'Business Analysis']} size={84} accent={[1]} /></Layer>
      <Layer t={t} a={V.toh + 0.8} b={48.4} dy={20}><Support text="Your business. Understood first." top={620} size={34} /></Layer>
      <Layer t={t} a={V.analyze} b={48.4} dy={20} ex={0.4}><Process t={t} /></Layer>

      {/* Verity enters on a hard cut to white space: the mark draws itself. */}
      <Layer t={t} a={V.verity - 0.1} b={25.8} ex={0.35} dy={0}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 740}}>
          <BigLockup draw={seg(t, V.verity - 0.1, 25.9, inOut)} word={seg(t, 25.3, 25.9, outX)} />
        </div>
      </Layer>
      <Layer t={t} a={26.0} b={V.final - 0.1} dy={0}><Lockup /></Layer>

      <div style={{position: 'absolute', inset: 0, opacity: seg(t, V.final - 0.1, V.final + 0.35, inOut), transform: `scale(${1 + 0.015 * seg(t, V.final, 51, (n) => n)})`, transformOrigin: '50% 40%'}}>
        <EndCard t={t} />
      </div>
      <Audio src={staticFile('ads/R08/vo.mp3')} />
    </DarkStudio>
  );
};
