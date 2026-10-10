import React from 'react';
import {fontFamily} from '../kit';
import {Artifact, PHONE} from '../R08/props';

/** R09 props: the chat screens inside the phone, the four tools a business ends up on (messages, spreadsheet, call log,
 *  notebook), and the glyphs for the fragments and the mapped cards. Names, numbers and messages are invented props. */

const HAIR = 'rgba(15,17,21,0.08)';
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const KS = (PHONE.w - 20) / 340;

/** The phone screen is designed at 340 x 700 and scaled to fit. */
const Screen: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{position: 'absolute', left: 0, top: 0, width: 340, height: 700, transform: `scale(${KS})`, transformOrigin: '0 0', fontFamily}}>{children}</div>
);

const Avatar: React.FC<{text: string; size?: number}> = ({text, size = 48}) => (
  <div style={{width: size, height: size, borderRadius: size / 2, background: 'var(--base-alt)', border: `1px solid ${HAIR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.36, fontWeight: 500, flex: 'none'}}>{text}</div>
);

const CHATS: [string, string, string, string, string][] = [
  ['AC', 'Accounts', 'Where is the payment?', '12', '11:42'],
  ['DP', 'Dispatch', 'Order not picked up', '8', '11:40'],
  ['MT', 'Mehta Traders', 'Need the delivery date', '5', '11:36'],
  ['ST', 'Sales team', 'Rate list please', '23', '11:31'],
  ['FF', 'Factory floor', 'Stock is running low', '9', '11:20'],
  ['VN', 'Vendors', 'Invoice sent again', '4', '11:05'],
];

/** The chat list: every conversation unread. `n` is the (fractional) row count. */
export const ChatListScreen: React.FC<{n: number}> = ({n}) => (
  <Screen>
    <div style={{position: 'absolute', left: 22, top: 66, fontSize: 30, fontWeight: 600, letterSpacing: '-0.03em'}}>Chats</div>
    {CHATS.map(([ini, name, prev, count, time], i) => {
      const p = clamp01(n - i);
      return p > 0 ? (
        <div key={name} style={{position: 'absolute', left: 14, right: 14, top: 120 + i * 92, height: 84, borderRadius: 20, background: '#fff', border: `1px solid ${HAIR}`, boxShadow: 'var(--elev-low)', display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', opacity: p, transform: `translateY(${Math.round((1 - p) * 14)}px)`}}>
          <Avatar text={ini} />
          <div style={{flex: 1, minWidth: 0}}>
            <div style={{fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em'}}>{name}</div>
            <div style={{fontSize: 16, color: 'var(--ink-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{prev}</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6}}>
            <div style={{fontSize: 14, color: 'var(--ink-muted)'}}>{time}</div>
            <div style={{minWidth: 26, height: 26, borderRadius: 13, padding: '0 8px', background: 'var(--accent)', color: '#fff', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{count}</div>
          </div>
        </div>
      ) : null;
    })}
  </Screen>
);

const MSGS: {who: string; text: string; chip?: string; h: number}[] = [
  {who: 'Rahul · Accounts', text: 'Sir, what was that order?', chip: 'PO-2417.pdf', h: 132},
  {who: 'Priya · Sales', text: 'Sir, has the payment come in?', chip: 'Screenshot.png', h: 132},
  {who: 'Dispatch', text: 'Sir, what do we tell the client?', chip: 'Voice note 0:42', h: 132},
  {who: 'Rahul · Accounts', text: 'Sir?', h: 84},
  {who: 'Factory', text: 'Sir, urgent', h: 84},
  {who: 'Priya · Sales', text: 'Please reply', h: 84},
];
export const MSG_COUNT = MSGS.length;

const VIEW_TOP = 104;
const VIEW_H = 580;

/** One thread, messages stacking until it is overloaded. `n` is the (fractional) message count. */
export const ThreadScreen: React.FC<{n: number}> = ({n}) => {
  const revealed = MSGS.reduce((acc, m, i) => acc + (m.h + 10) * clamp01(n - i), 0);
  const scroll = Math.max(0, revealed - VIEW_H);
  let y = VIEW_TOP;
  return (
    <Screen>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: VIEW_TOP, background: 'rgba(255,255,255,0.94)', borderBottom: `1px solid ${HAIR}`, zIndex: 2}}>
        <div style={{position: 'absolute', left: 20, top: 58, display: 'flex', alignItems: 'center', gap: 12}}>
          <Avatar text="TM" size={40} />
          <div>
            <div style={{fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em'}}>Team</div>
            <div style={{fontSize: 14, color: 'var(--ink-muted)'}}>11 members</div>
          </div>
        </div>
        <div style={{position: 'absolute', right: 20, top: 62, minWidth: 54, height: 32, borderRadius: 16, padding: '0 12px', background: 'var(--accent)', color: '#fff', fontSize: 17, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: clamp01(n - 2.2)}}>99+</div>
      </div>
      {MSGS.map((m, i) => {
        const top = y - scroll;
        y += m.h + 10;
        const p = clamp01(n - i);
        if (p <= 0) return null;
        return (
          <div key={i} style={{position: 'absolute', left: 18, top: Math.round(top + (1 - p) * 20), width: 280, minHeight: m.h - 10, padding: '12px 16px', borderRadius: '6px 22px 22px 22px', background: '#fff', border: `1px solid ${HAIR}`, boxShadow: 'var(--elev-low)', opacity: p}}>
            <div style={{fontSize: 14, fontWeight: 600, color: 'var(--accent-text)', marginBottom: 4}}>{m.who}</div>
            <div style={{fontSize: 21, lineHeight: 1.22, letterSpacing: '-0.01em'}}>{m.text}</div>
            {m.chip ? (
              <div style={{marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 8, height: 30, padding: '0 12px', borderRadius: 15, background: 'var(--base-alt)', fontSize: 14, fontWeight: 500}}>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.5l-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l9-9a3.7 3.7 0 0 1 5.2 5.2l-9 9a1.8 1.8 0 0 1-2.6-2.6l8.4-8.4" /></svg>
                {m.chip}
              </div>
            ) : null}
          </div>
        );
      })}
    </Screen>
  );
};

/* ---------- the four tools: full cards in front of the phone ---------- */

const CardLabel: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{position: 'absolute', left: 48, top: 40, fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>{children}</div>
);

const Bub: React.FC<{text: string; top: number; w: number; who: string}> = ({text, top, w, who}) => (
  <div style={{position: 'absolute', left: 48, top, maxWidth: w, padding: '16px 26px', borderRadius: '8px 26px 26px 26px', background: '#fff', border: `1px solid ${HAIR}`, boxShadow: 'var(--elev-low)', letterSpacing: '-0.015em'}}>
    <div style={{fontSize: 20, fontWeight: 600, color: 'var(--accent-text)', marginBottom: 4}}>{who}</div>
    <div style={{fontSize: 34, lineHeight: 1.2}}>{text}</div>
  </div>
);

export const ChatCard: React.FC = () => (
  <Artifact h={640} rot={-1.2}>
    <CardLabel>Messages</CardLabel>
    <Bub who="Rahul · Accounts" text="Sir, what was that order?" top={110} w={760} />
    <Bub who="Priya · Sales" text="Sir, has the payment come in?" top={252} w={800} />
    <Bub who="Dispatch" text="Sir, what do we tell the client?" top={394} w={820} />
  </Artifact>
);

const SHEET: string[][] = [
  ['PO-2417', 'Cotton twill', '480 m', '14 Oct', 'Revised'],
  ['PO-2418', 'Piping, navy', '1,200', '14 Oct', 'Pending'],
  ['PO-2419', 'Zip, 18 in', '600', '16 Oct', 'Revised'],
  ['PO-2420', 'Label, woven', '2,000', '18 Oct', 'On hold'],
  ['PO-2421', 'Packing', '40', '18 Oct', 'Pending'],
  ['PO-2422', 'Thread, white', '900', '19 Oct', 'Pending'],
  ['PO-2423', 'Buttons', '5,000', '20 Oct', '??'],
];

export const SheetCard: React.FC = () => (
  <Artifact h={640} rot={1}>
    <CardLabel>Spreadsheet</CardLabel>
    <div style={{position: 'absolute', left: 48, right: 48, top: 92, height: 52, borderRadius: 10, border: `1px solid ${HAIR}`, background: 'var(--base-alt)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 18px', fontSize: 24, color: 'var(--ink-muted)'}}>
      <span style={{fontStyle: 'italic', fontWeight: 500}}>fx</span>
      <span>=IF(E4=&quot;Revised&quot;, ?, ?)</span>
    </div>
    <div style={{position: 'absolute', left: 48, right: 48, top: 168, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: `1px solid ${HAIR}`, borderRadius: 10, overflow: 'hidden'}}>
      {['A', 'B', 'C', 'D', 'E'].map((c) => (
        <div key={c} style={{height: 46, background: 'var(--base-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 600, color: 'var(--ink-muted)', borderRight: `1px solid ${HAIR}`}}>{c}</div>
      ))}
      {SHEET.map((row, r) =>
        row.map((cell, c) => (
          <div key={`${r}-${c}`} style={{height: 56, display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 25, letterSpacing: '-0.01em', borderTop: `1px solid ${HAIR}`, borderRight: `1px solid ${HAIR}`, outline: r === 2 && c === 4 ? '3px solid var(--accent)' : undefined, outlineOffset: -3, fontWeight: c === 4 ? 500 : 400}}>{cell}</div>
        )),
      )}
    </div>
  </Artifact>
);

const CALLS: [string, string, string][] = [
  ['Rahul · Accounts', 'Missed call', '11:42'],
  ['Mehta Traders', 'Missed call', '11:40'],
  ['Dispatch', 'Outgoing · 2 min', '11:31'],
  ['Priya · Sales', 'Missed call', '11:20'],
  ['Vendor', 'Missed call', '11:05'],
];

export const CallsCard: React.FC = () => (
  <Artifact h={640} rot={-0.9}>
    <CardLabel>Call log</CardLabel>
    {CALLS.map(([name, sub, time], i) => (
      <div key={name} style={{position: 'absolute', left: 48, right: 48, top: 100 + i * 104, height: 96, display: 'flex', alignItems: 'center', gap: 24, borderBottom: i < 4 ? `1px solid ${HAIR}` : undefined}}>
        <div style={{width: 60, height: 60, borderRadius: 30, background: 'var(--base-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
        </div>
        <div style={{flex: 1}}>
          <div style={{fontSize: 34, fontWeight: 500, letterSpacing: '-0.02em'}}>{name}</div>
          <div style={{fontSize: 24, color: 'var(--ink-muted)'}}>{sub}</div>
        </div>
        <div style={{fontSize: 26, color: 'var(--ink-muted)'}}>{time}</div>
      </div>
    ))}
  </Artifact>
);

const NOTES = ['Call Mehta back', 'PO-2417 revised?', 'Payment: check bank', 'Rate list to Priya', 'Dispatch Friday??'];

export const NotesCard: React.FC = () => (
  <Artifact h={640} rot={1.3}>
    <CardLabel>Notebook</CardLabel>
    <div style={{position: 'absolute', left: 0, right: 0, top: 96, bottom: 0, backgroundImage: 'repeating-linear-gradient(180deg, transparent 0, transparent 99px, rgba(70,90,120,0.18) 99px, rgba(70,90,120,0.18) 100px)'}} />
    {NOTES.map((n, i) => (
      <div key={n} style={{position: 'absolute', left: 48, right: 48, top: 98 + i * 100, height: 100, display: 'flex', alignItems: 'center', gap: 24, fontSize: 38, fontStyle: 'italic', letterSpacing: '-0.02em'}}>
        <div style={{width: 32, height: 32, borderRadius: 8, border: '2.5px solid rgba(15,17,21,0.5)', flex: 'none'}} />
        {n}
      </div>
    ))}
    <svg width={920} height={640} style={{position: 'absolute', left: 0, top: 0}}>
      <path d="M92 176 C 260 166, 420 188, 560 172" stroke="var(--accent)" strokeWidth={3.5} fill="none" strokeLinecap="round" />
      <path d="M92 376 C 280 366, 460 386, 640 372" stroke="rgba(15,17,21,0.55)" strokeWidth={3} fill="none" strokeLinecap="round" />
    </svg>
  </Artifact>
);

/* ---------- glyphs ---------- */

export type GlyphKind = 'chat' | 'receipt' | 'voice' | 'sheet' | 'notes' | 'flow' | 'team' | 'list' | 'loop';

/** One outline glyph per fragment or mapped card. */
export const Glyph: React.FC<{kind: GlyphKind; size?: number}> = ({kind, size = 56}) => {
  const p = {fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'} as const;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...p} style={{flex: 'none'}}>
      {kind === 'chat' && <path d="M8 12h32v20H20l-8 7v-7H8z" />}
      {kind === 'receipt' && <><path d="M12 6h24v36l-4-3-4 3-4-3-4 3-4-3-4 3z" /><path d="M18 16h12M18 24h12M18 32h7" /></>}
      {kind === 'voice' && <><rect x="18" y="6" width="12" height="22" rx="6" /><path d="M10 24a14 14 0 0 0 28 0M24 38v6" /></>}
      {kind === 'sheet' && <><rect x="6" y="8" width="36" height="32" rx="3" /><path d="M6 18h36M6 28h36M20 8v32" /></>}
      {kind === 'notes' && <><rect x="10" y="6" width="28" height="36" rx="3" /><path d="M16 16h16M16 24h16M16 32h9" /></>}
      {kind === 'flow' && <><circle cx="10" cy="24" r="4" /><circle cx="38" cy="10" r="4" /><circle cx="38" cy="38" r="4" /><path d="M14 24h8l12-12M22 24l12 12" /></>}
      {kind === 'team' && <><circle cx="24" cy="14" r="6" /><circle cx="10" cy="34" r="5" /><circle cx="38" cy="34" r="5" /><path d="M24 20v6M24 26l-11 5M24 26l11 5" /></>}
      {kind === 'list' && <path d="M10 14l4 4 7-8M10 32l4 4 7-8M28 16h12M28 34h12" />}
      {kind === 'loop' && <><path d="M36 20a14 14 0 0 0-24-6M12 28a14 14 0 0 0 24 6" /><path d="M12 6v8h8M36 42v-8h-8" /></>}
    </svg>
  );
};
