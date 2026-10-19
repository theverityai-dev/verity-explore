import React from 'react';
import {Mark} from '../../trailer/ui';
import {seg} from '../../shared/timeline';
import {Glyph, LABEL, type GlyphKind} from '../R12/parts';

/** R13 world: a pinhole camera over a 3D field, and every object that lives in it. Objects are ordinary DOM laid out
 *  at their own size; the camera projects their world position, scales them by distance, fogs the far ones, and blurs
 *  them by distance from the focal plane. Headlines never live in the world: they sit in screen space and hold still. */

export type V3 = [number, number, number];
export const F = 1000;
const r = Math.round;

export const project = (p: V3, c: V3) => {
  const d = p[2] - c[2];
  const s = F / Math.max(1, d);
  return {x: 960 + (p[0] - c[0]) * s, y: 540 + (p[1] - c[1]) * s, s, d};
};

/** One object in the world. `w`/`h` are its own pixel size; `rot` is a fixed roll in degrees. */
export const WorldObj: React.FC<{p: V3; cam: V3; focus: number; fog?: number; w: number; h: number; rot?: number; sharp?: boolean; near?: [number, number]; zBoost?: number; children: React.ReactNode}> = ({p, cam, focus, fog = 1, w, h, rot = 0, sharp, near: nr = [40, 320], zBoost = 0, children}) => {
  const {x, y, s, d} = project(p, cam);
  if (d < 40) return null;
  const near = seg(d, nr[0], nr[1], (n) => n);
  const far = 1 - seg(d, 9000, 15000, (n) => n);
  const op = fog * near * far;
  if (op <= 0.01) return null;
  const hw = (w * s) / 2, hh = (h * s) / 2;
  if (x + hw < -200 || x - hw > 2120 || y + hh < -200 || y - hh > 1280) return null;
  const blur = sharp ? 0 : Math.min(9, (6 * Math.abs(d - focus)) / Math.max(400, focus));
  return (
    <div style={{position: 'absolute', left: 0, top: 0, width: w, height: h, zIndex: r(100000 - d) + zBoost, opacity: op, transformOrigin: '0 0', transform: `translate(${x - hw}px, ${y - hh}px) scale(${s}) rotate(${rot}deg)`, filter: blur > 0.4 ? `blur(${(blur / Math.max(0.35, s)).toFixed(2)}px)` : undefined}}>
      {children}
    </div>
  );
};

/* ---------- fragments: the small pieces of a business, scattered through the field ---------- */

const card: React.CSSProperties = {position: 'absolute', inset: 0, borderRadius: 20, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)', color: 'var(--ink)', overflow: 'hidden'};
const row: React.CSSProperties = {display: 'flex', alignItems: 'center', gap: 14};

export type FragKind = 'chat' | 'invoice' | 'contact' | 'cells' | 'note' | 'mail' | 'cal' | 'pay' | 'task';
export const FRAG_SIZE: Record<FragKind, [number, number]> = {
  chat: [360, 110], invoice: [360, 150], contact: [360, 120], cells: [340, 170], note: [260, 160], mail: [380, 110], cal: [340, 110], pay: [340, 110], task: [360, 110],
};

const Line: React.FC<{text: string; sub?: string; glyph: GlyphKind; accent?: boolean}> = ({text, sub, glyph, accent}) => (
  <div style={{...row, padding: '0 26px', height: '100%'}}>
    <span style={{color: accent ? 'var(--accent)' : 'var(--ink-muted)', display: 'flex'}}><Glyph kind={glyph} size={40} /></span>
    <div>
      <div style={{fontSize: 28, fontWeight: 500, letterSpacing: '-0.015em', whiteSpace: 'nowrap'}}>{text}</div>
      {sub ? <div style={{fontSize: 21, color: 'var(--ink-muted)', marginTop: 4, whiteSpace: 'nowrap'}}>{sub}</div> : null}
    </div>
  </div>
);

export const Fragment: React.FC<{kind: FragKind; n: number}> = ({kind, n}) => {
  const v = n % 4;
  return (
    <div style={card}>
      {kind === 'chat' && <Line glyph="chat" text={['Sir, order status?', 'Payment kab aayega?', 'Call me back', 'Stock low again'][v]} sub="WhatsApp · 2 min" />}
      {kind === 'invoice' && <Line glyph="receipt" text={['INV-2231', 'INV-2240', 'INV-2219', 'INV-2252'][v]} sub={['₹48,200 · due', '₹9,750 · overdue', '₹1,12,000 · sent', '₹22,400 · draft'][v]} />}
      {kind === 'contact' && (
        <div style={{...row, padding: '0 24px', height: '100%'}}>
          <div style={{width: 58, height: 58, borderRadius: 29, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 600, color: 'var(--ink-muted)'}}>{['AS', 'RM', 'KT', 'PN'][v]}</div>
          <div>
            <div style={{fontSize: 28, fontWeight: 500}}>{['Anita Shah', 'Rahul Mehta', 'K. Traders', 'Priya Nair'][v]}</div>
            <div style={{fontSize: 21, color: 'var(--ink-muted)', marginTop: 4}}>{['98201 4••••', 'no email', '99876 1••••', 'Pune'][v]}</div>
          </div>
        </div>
      )}
      {kind === 'cells' && (
        <div style={{position: 'absolute', inset: 14, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'repeat(4, 1fr)'}}>
          {['Month', 'Sales', 'Cost', 'Jul', '4.1L', '3.2L', 'Aug', '3.8L', '#REF!', 'Sep', '4.6L', '3.9L'].map((c, i) => (
            <div key={i} style={{borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', fontSize: 20, padding: '4px 10px', color: i < 3 ? 'var(--ink-muted)' : c === '#REF!' ? 'var(--accent-text)' : 'var(--ink)', fontVariantNumeric: 'tabular-nums'}}>{c}</div>
          ))}
        </div>
      )}
      {kind === 'note' && (
        <div style={{padding: '22px 24px', fontSize: 28, lineHeight: 1.25, fontWeight: 500}}>
          {['Call supplier!!', 'Ask Rohan re: PO', 'Who has the file?', 'Check stock Mon'][v]}
          <div style={{marginTop: 14, height: 8, width: '60%', borderRadius: 4, background: 'var(--line)'}} />
        </div>
      )}
      {kind === 'mail' && <Line glyph="list" text={['Re: Re: Fwd: PO', 'Updated sheet v7', 'Pending approval', 'Quote attached'][v]} sub="Inbox · unread" />}
      {kind === 'cal' && <Line glyph="notes" text={['Delivery · Thu 11:00', 'Site visit · Fri', 'Audit · Mon 9:30', 'Dispatch · today'][v]} sub="Calendar" />}
      {kind === 'pay' && <Line glyph="receipt" text={['₹12,500 received?', '₹4,800 pending', 'Refund: ₹950', 'UPI · ₹2,300'][v]} sub="Payments" />}
      {kind === 'task' && <Line glyph="list" text={['Approve PO #77', 'Update stock count', 'Send quotation', 'Follow up client'][v]} sub="To do · overdue" />}
    </div>
  );
};

/* ---------- the three places: customer details, operations, numbers ---------- */

const Bar: React.FC<{glyph: GlyphKind; name: string; meta?: string}> = ({glyph, name, meta}) => (
  <div style={{...row, height: 76, padding: '0 30px', borderBottom: '1px solid var(--line)', fontSize: 25, fontWeight: 500}}>
    <span style={{color: 'var(--ink-muted)', display: 'flex'}}><Glyph kind={glyph} size={34} /></span>
    <span style={{flex: 1}}>{name}</span>
    {meta ? <span style={{fontSize: 21, color: 'var(--ink-muted)', fontWeight: 400}}>{meta}</span> : null}
  </div>
);

export const HERO_SIZE: [number, number] = [740, 470];

export const ContactsApp: React.FC = () => (
  <div style={card}>
    <Bar glyph="team" name="Contacts" meta="phone" />
    {[['Anita Shah', 'Pune', '98201 4••••'], ['K. Traders', 'Surat', '—'], ['Meena & Co', 'Pune', '97022 8••••'], ['Vikram Rao', 'Nashik', '98190 2••••']].map(([n, c, p]) => (
      <div key={n} style={{...row, height: 92, padding: '0 30px', borderBottom: '1px solid var(--line-hair)'}}>
        <div style={{width: 52, height: 52, borderRadius: 26, background: 'var(--surface-2)'}} />
        <div style={{flex: 1}}>
          <div style={{fontSize: 28, fontWeight: 500}}>{n}</div>
          <div style={{fontSize: 21, color: 'var(--ink-muted)'}}>{c}</div>
        </div>
        <div style={{fontSize: 24, color: p === '—' ? 'var(--ink-muted)' : 'var(--ink)', fontVariantNumeric: 'tabular-nums'}}>{p}</div>
      </div>
    ))}
  </div>
);

export const OpsBoard: React.FC = () => (
  <div style={card}>
    <Bar glyph="flow" name="Operations board" meta="37 open" />
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, padding: 22}}>
      {[['To do', ['Order 482', 'PO #77', 'Quote: Meena']], ['In progress', ['Dispatch 479', 'Stock count']], ['Done', ['Order 471', 'Invoice 2231']]].map(([h, items]) => (
        <div key={h as string}>
          <div style={{...LABEL, fontSize: 19, color: 'var(--ink-muted)', marginBottom: 12}}>{h as string}</div>
          {(items as string[]).map((it) => (
            <div key={it} style={{height: 74, marginBottom: 12, borderRadius: 14, background: 'var(--surface-2)', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: 23, fontWeight: 500}}>{it}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const NumbersSheet: React.FC = () => (
  <div style={card}>
    <Bar glyph="sheet" name="numbers_Q3_final(2).xlsx" />
    <div style={{display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 1fr', padding: '6px 0'}}>
      {['Month', 'Sales', 'Expenses', 'Margin', 'July', '4,12,000', '3,18,500', '22.7%', 'August', '3,86,400', '3,02,900', '21.6%', 'September', '4,64,800', '#REF!', '—', 'October', '?', '?', '?'].map((c, i) => (
        <div key={i} style={{height: 74, display: 'flex', alignItems: 'center', padding: '0 24px', borderBottom: '1px solid var(--line-hair)', borderRight: i % 4 < 3 ? '1px solid var(--line-hair)' : undefined, fontSize: i < 4 ? 20 : 25, ...(i < 4 ? {...LABEL, fontSize: 19} : {}), color: i < 4 ? 'var(--ink-muted)' : c === '#REF!' ? 'var(--accent-text)' : c === '?' ? 'var(--ink-muted)' : 'var(--ink)', fontVariantNumeric: 'tabular-nums'}}>{c}</div>
      ))}
    </div>
  </div>
);

/** The opening subject: one clean growth line. Growing is not the problem. */
export const GrowthObj: React.FC<{draw: number}> = ({draw}) => (
  <svg width={1000} height={560} viewBox="0 0 1000 560" style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
    <defs>
      <linearGradient id="r13g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--accent)" stopOpacity={0.22} />
        <stop offset="1" stopColor="var(--accent)" stopOpacity={0} />
      </linearGradient>
      <clipPath id="r13c"><rect x={0} y={0} width={1000 * draw} height={600} /></clipPath>
    </defs>
    <path d="M0 540 C 220 530 330 440 500 380 C 680 316 800 190 1000 40 L 1000 560 L 0 560 Z" fill="url(#r13g)" clipPath="url(#r13c)" />
    <path d="M0 540 C 220 530 330 440 500 380 C 680 316 800 190 1000 40" fill="none" stroke="var(--accent)" strokeWidth={7} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />
  </svg>
);

/* ---------- the record and its system ---------- */

export const REC: [number, number] = [860, 580];

export const RecordObj: React.FC<{t: number; a: number; mark: number}> = ({t, a, mark}) => {
  const rows: [GlyphKind, string, string, string][] = [
    ['receipt', 'Order #482 dispatched', 'Operations', '10:42'],
    ['notes', 'Invoice INV-2231 paid · ₹48,200', 'Accounts', '09:15'],
    ['list', '15% discount approved', 'Rohan', 'Yesterday'],
    ['chat', 'Needs 20 more sheets by Friday', 'Message', 'Yesterday'],
  ];
  return (
    <div style={{...card, borderRadius: 26}}>
      <div style={{...row, height: 72, padding: '0 30px', borderBottom: '1px solid var(--line)', fontSize: 22, color: 'var(--ink-muted)'}}>
        <div style={{...row, gap: 10, opacity: mark}}>
          <Mark height={28} color="var(--ink)" />
          <span style={{fontSize: 25, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.03em'}}>verity</span>
        </div>
        <span>/ Customers / Meena &amp; Co</span>
        <span style={{flex: 1}} />
        <span style={{...row, gap: 10, ...LABEL, fontSize: 18, color: 'var(--accent-text)'}}><span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)'}} />Live</span>
      </div>
      <div style={{padding: '26px 34px 0'}}>
        <div style={{fontSize: 48, fontWeight: 400, letterSpacing: '-0.035em'}}>Meena &amp; Co</div>
        <div style={{fontSize: 22, color: 'var(--ink-muted)', marginTop: 4}}>Customer since 2021 · Pune</div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 22}}>
          {[['Orders', '12'], ['Invoices', '4'], ['Messages', '18'], ['Approvals', '2']].map(([l, n], i) => (
            <div key={l} style={{borderRadius: 14, background: 'var(--surface-2)', padding: '14px 18px', opacity: seg(t, a + 0.15 + i * 0.06, a + 0.5 + i * 0.06)}}>
              <div style={{...LABEL, fontSize: 17, color: 'var(--ink-muted)'}}>{l}</div>
              <div style={{fontSize: 36, fontWeight: 400, marginTop: 4, fontVariantNumeric: 'tabular-nums'}}>{n}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop: 16}}>
          {rows.map(([g, txt, who, when], i) => (
            <div key={txt} style={{...row, height: 50, borderTop: '1px solid var(--line-hair)', fontSize: 22, opacity: seg(t, a + 0.35 + i * 0.07, a + 0.75 + i * 0.07)}}>
              <span style={{color: 'var(--accent)', display: 'flex'}}><Glyph kind={g} size={28} /></span>
              <span style={{flex: 1, whiteSpace: 'nowrap'}}>{txt}</span>
              <span style={{color: 'var(--ink-muted)', width: 130}}>{who}</span>
              <span style={{color: 'var(--ink-muted)', width: 110, textAlign: 'right'}}>{when}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ModulePill: React.FC<{label: string; glyph: GlyphKind; live: number}> = ({label, glyph, live}) => (
  <div style={{...card, borderRadius: 999, border: `2px solid ${live > 0.5 ? 'var(--accent)' : 'var(--line)'}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 34px 0 26px'}}>
    <span style={{color: 'var(--ink)', display: 'flex'}}><Glyph kind={glyph} size={44} /></span>
    <span style={{fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', whiteSpace: 'nowrap'}}>{label}</span>
  </div>
);

export const MiniRecord: React.FC = () => (
  <div style={{...card, borderRadius: 16}}>
    <div style={{position: 'absolute', left: 18, top: 20, width: 38, height: 38, borderRadius: 19, background: 'var(--surface-2)'}} />
    <div style={{position: 'absolute', left: 70, top: 22, width: 120, height: 12, borderRadius: 6, background: 'var(--line)'}} />
    <div style={{position: 'absolute', left: 70, top: 44, width: 80, height: 10, borderRadius: 5, background: 'var(--line-hair)'}} />
  </div>
);

/* ---------- the pile of tools ---------- */

export const ToolCard: React.FC<{name: string; glyph: GlyphKind}> = ({name, glyph}) => (
  <div style={{width: 640, height: 116, borderRadius: 22, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'center', gap: 22, padding: '0 34px', color: 'var(--ink)'}}>
    <div style={{width: 64, height: 64, borderRadius: 16, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-muted)'}}><Glyph kind={glyph} size={40} /></div>
    <div style={{flex: 1, fontSize: 38, fontWeight: 500, letterSpacing: '-0.02em'}}>{name}</div>
    <div style={{fontSize: 24, color: 'var(--ink-muted)'}}>+₹ / month</div>
  </div>
);
