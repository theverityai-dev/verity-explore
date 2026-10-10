import React from 'react';
import {Mark} from '../../trailer/ui';
import {CastShadow} from '../R07/world';
import {fontFamily} from '../kit';

/** R08 props: the phone, the three operational artifacts that queue up for the owner, and the calm staff silhouettes.
 *  Same grammar as the R07 studio (pale room, frosted/matte materials, long soft shadows to the lower left). All names,
 *  amounts and quantities are invented props, never product data. */

const LENS = 'perspective(2400px)';
const HAIR = 'rgba(15,17,21,0.08)';

export const PHONE = {w: 420, h: 840, x: 610, y: 520};

/** A phone standing on the desk, turned toward the light. `children` is the screen (340 x 700). */
export const Phone: React.FC<{ry?: number; shadow?: boolean; children?: React.ReactNode}> = ({ry = -14, shadow = true, children}) => (
  <>
    {shadow ? <CastShadow x={PHONE.x} y={PHONE.y + PHONE.h} w={PHONE.w} len={170} o={0.12} /> : null}
    <div style={{position: 'absolute', left: PHONE.x, top: PHONE.y, width: PHONE.w, height: PHONE.h, transform: `${LENS} rotateY(${ry}deg)`, transformOrigin: '50% 100%'}}>
      <div style={{position: 'absolute', left: 10, right: -10, top: 7, bottom: -7, borderRadius: 58, background: 'linear-gradient(135deg, rgba(196,204,216,0.98), rgba(226,231,239,0.9))'}} />
      <div style={{position: 'absolute', inset: 0, borderRadius: 58, background: 'linear-gradient(150deg, #ffffff 0%, #eceff4 55%, #dfe4ec 100%)', border: '1px solid rgba(255,255,255,0.98)', boxShadow: 'inset 0 1px 0 #fff, inset 0 0 0 1px rgba(15,17,21,0.08), 0 2px 4px rgba(15,17,21,0.06)'}} />
      <div style={{position: 'absolute', left: 10, top: 10, right: 10, bottom: 10, borderRadius: 48, overflow: 'hidden', background: 'linear-gradient(180deg, #f9fafc 0%, #eef1f6 100%)', boxShadow: 'inset 0 0 0 1px rgba(15,17,21,0.1)'}}>
        {children}
        <div style={{position: 'absolute', left: '50%', top: 16, width: 92, height: 26, marginLeft: -46, borderRadius: 13, background: '#0f1115'}} />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(122deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%)', pointerEvents: 'none'}} />
      </div>
    </div>
  </>
);

const CALLS = ['CALL 01', 'CALL 02', 'CALL 03', 'CALL 04', 'ACCOUNTS', 'DISPATCH', 'CLIENT', 'SALES', 'VENDOR', 'STORE', 'ORDERS', 'FACTORY', 'BILLING', 'HR DESK'];
const SUBS = ['Missed · now', 'Missed · now', 'Missed · 1 min', 'Missed · 1 min', '3 messages', 'Urgent', '2 missed calls', 'Who is handling this?', 'Payment pending', '5 messages', 'Please check', 'Call back', '2 messages', 'Waiting on you'];

/** The phone's screen: lock-screen time and a stack of missed calls that grows into a flood. `n` is the (fractional) row count. */
export const LockScreen: React.FC<{n: number}> = ({n}) => {
  const rows = Math.floor(n);
  const scroll = Math.max(0, n - 6) * 76;
  return (
    <div style={{position: 'absolute', left: 0, top: 0, width: 340, height: 700, transform: `scale(${(PHONE.w - 20) / 340})`, transformOrigin: '0 0', fontFamily}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 70, textAlign: 'center', fontSize: 92, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1}}>11:42</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 172, textAlign: 'center', fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>Tuesday</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 220, bottom: 0, overflow: 'hidden'}}>
        {CALLS.slice(0, rows + 1).map((c, i) => {
          const p = Math.min(1, Math.max(0, n - i));
          return (
            <div key={c + i} style={{position: 'absolute', left: 14, right: 14, top: i * 76 - scroll, height: 66, borderRadius: 20, background: '#fff', border: `1px solid ${HAIR}`, boxShadow: 'var(--elev-low)', display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', opacity: p, transform: `translateY(${(1 - p) * -18}px)`}}>
              <div style={{width: 38, height: 38, borderRadius: 19, background: 'var(--base-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: 19, fontWeight: 500, letterSpacing: '0.12em'}}>{c}</div>
                <div style={{fontSize: 17, color: 'var(--ink-muted)', whiteSpace: 'nowrap'}}>{SUBS[i]}</div>
              </div>
              <div style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)', flex: 'none'}} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ---------- the three artifacts that wait on the owner ---------- */

const Tag: React.FC<{text: string; style?: React.CSSProperties}> = ({text, style}) => (
  <div style={{display: 'inline-flex', alignItems: 'center', gap: 12, height: 52, padding: '0 22px', borderRadius: 26, border: `1px solid ${HAIR}`, background: 'rgba(255,255,255,0.9)', fontSize: 22, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', ...style}}>
    <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)'}} />
    {text}
  </div>
);

const Label: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div style={{fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', ...style}}>{children}</div>
);

/** One paper-like card of the stack: 920 wide, soft lift, hairline rim. */
export const Artifact: React.FC<{h: number; rot: number; children: React.ReactNode}> = ({h, rot, children}) => (
  <div style={{position: 'absolute', left: 80, top: 0, width: 920, height: h, transform: `rotate(${rot}deg)`, borderRadius: 14, background: '#FCFDFE', border: `1px solid ${HAIR}`, boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 44px 80px -28px rgba(15,17,21,0.28)', overflow: 'hidden', fontFamily}}>
    {children}
  </div>
);

const ORDER_ROWS: [string, string, string, string][] = [
  ['Cotton twill, 240 gsm', '480 m', '14 Oct', 'Revised'],
  ['Piping, navy', '1,200 pc', '14 Oct', 'Pending'],
  ['Zip, 18 in', '600 pc', '16 Oct', 'Revised'],
  ['Label, woven', '2,000 pc', '18 Oct', 'On hold'],
  ['Packing, standard', '40 ctn', '18 Oct', 'Pending'],
];

export const OrderDoc: React.FC<{circle: number}> = ({circle}) => (
  <Artifact h={700} rot={-1.4}>
    <div style={{position: 'absolute', left: 48, right: 48, top: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
      <Label>Purchase order</Label>
      <div style={{fontSize: 28, fontWeight: 500, letterSpacing: '-0.01em'}}>PO-2417 · Rev 3</div>
    </div>
    <div style={{position: 'absolute', left: 48, right: 48, top: 112, height: 1, background: 'rgba(15,17,21,0.14)'}} />
    <div style={{position: 'absolute', left: 48, right: 48, top: 136}}>
      {ORDER_ROWS.map(([a, b, c, d]) => (
        <div key={a} style={{display: 'grid', gridTemplateColumns: '1fr 150px 130px 150px', alignItems: 'center', height: 78, borderBottom: `1px solid ${HAIR}`, fontSize: 28, letterSpacing: '-0.01em'}}>
          <span>{a}</span>
          <span style={{color: 'var(--ink-muted)'}}>{b}</span>
          <span style={{color: 'var(--ink-muted)'}}>{c}</span>
          <span style={{fontWeight: 500}}>{d}</span>
        </div>
      ))}
    </div>
    <svg width={920} height={700} style={{position: 'absolute', left: 0, top: 0}}>
      <ellipse cx={776} cy={175} rx={86} ry={36} fill="none" stroke="var(--accent)" strokeWidth={3.5} strokeLinecap="round" strokeDasharray={520} strokeDashoffset={520 * (1 - circle)} transform="rotate(-3 776 175)" />
    </svg>
    <div style={{position: 'absolute', left: 48, bottom: 44}}>
      <Tag text="Waiting on: Owner" />
    </div>
  </Artifact>
);

export const PaymentCard: React.FC = () => (
  <Artifact h={640} rot={1.1}>
    <div style={{position: 'absolute', left: 48, right: 48, top: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
      <Label>Payment approval</Label>
      <div style={{fontSize: 26, color: 'var(--ink-muted)'}}>INV-0931 · Due today</div>
    </div>
    <div style={{position: 'absolute', left: 48, top: 130, fontSize: 44, fontWeight: 400, letterSpacing: '-0.025em'}}>Shree Textiles</div>
    <div style={{position: 'absolute', left: 48, top: 200, fontSize: 168, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1.05}}>₹2,84,000</div>
    <div style={{position: 'absolute', left: 48, top: 424, display: 'flex', gap: 20}}>
      <div style={{width: 300, height: 92, borderRadius: 46, background: 'var(--accent)', color: 'var(--accent-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 500}}>Approve</div>
      <div style={{width: 220, height: 92, borderRadius: 46, border: '2px solid rgba(15,17,21,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 500}}>Hold</div>
    </div>
    <div style={{position: 'absolute', left: 48, bottom: 44}}>
      <Tag text="Waiting on: Owner · 2 days" />
    </div>
  </Artifact>
);

const Bubble: React.FC<{text: string; top: number; w?: number}> = ({text, top, w = 700}) => (
  <div style={{position: 'absolute', left: 48, top, maxWidth: w, padding: '20px 28px', borderRadius: '8px 28px 28px 28px', background: '#fff', border: `1px solid ${HAIR}`, boxShadow: 'var(--elev-low)', fontSize: 34, letterSpacing: '-0.015em', lineHeight: 1.25}}>
    {text}
    <span style={{marginLeft: 18, fontSize: 19, color: 'var(--ink-muted)'}}>11:42</span>
  </div>
);

export const ClientThread: React.FC = () => (
  <Artifact h={640} rot={-0.8}>
    <div style={{position: 'absolute', left: 48, right: 48, top: 40, height: 92, display: 'flex', alignItems: 'center', gap: 20, borderBottom: `1px solid ${HAIR}`}}>
      <div style={{width: 64, height: 64, borderRadius: 32, background: 'var(--base-alt)', border: `1px solid ${HAIR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 500}}>MT</div>
      <div>
        <div style={{fontSize: 32, fontWeight: 500, letterSpacing: '-0.015em'}}>Mehta Traders</div>
        <div style={{fontSize: 22, color: 'var(--ink-muted)'}}>Client · 3 unread</div>
      </div>
    </div>
    <Bubble text="When will the delivery arrive?" top={170} w={760} />
    <Bubble text="Will the rate stay the same?" top={298} w={760} />
    <Bubble text="Please reply, sir." top={426} w={560} />
    <div style={{position: 'absolute', left: 48, bottom: 44}}>
      <Tag text="Waiting on: Owner" />
    </div>
  </Artifact>
);

/* ---------- staff silhouettes ---------- */

/** A calm figure: head and shoulders standing on the floor, drawn as a soft shape with a long shadow. */
export const Person: React.FC<{x: number; base: number; h: number; opacity?: number; tone?: number}> = ({x, base, h, opacity = 1, tone = 0.1}) => {
  const w = h * 0.36;
  return (
    <>
      <CastShadow x={x} y={base} w={w} len={130} o={0.09 * opacity} />
      <svg width={w} height={h} viewBox="0 0 150 420" style={{position: 'absolute', left: x, top: base - h, opacity, overflow: 'visible'}}>
        <defs>
          <linearGradient id={`pg${x}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={`rgba(244,247,251,${tone + 0.04})`} />
            <stop offset="1" stopColor={`rgba(244,247,251,${tone * 0.6})`} />
          </linearGradient>
        </defs>
        <circle cx={75} cy={46} r={34} fill={`url(#pg${x})`} />
        <path d="M6 420 V214 Q6 146 54 130 L64 108 H86 L96 130 Q144 146 144 214 V420 Z" fill={`url(#pg${x})`} />
      </svg>
    </>
  );
};

/** End-card lockup: the hourglass mark and lowercase wordmark. */
export const BigLockup: React.FC<{draw: number; word: number; size?: number}> = ({draw, word, size = 150}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: size * 0.3, justifyContent: 'center'}}>
    <Mark height={size} draw={draw} color="var(--ink)" />
    <div style={{fontSize: size * 0.84, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, opacity: word, transform: `translateX(${(1 - word) * -24}px)`}}>verity</div>
  </div>
);
