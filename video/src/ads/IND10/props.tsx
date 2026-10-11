import React from 'react';
import {fontFamily} from '../kit';
import {Artifact, PHONE} from '../R08/props';

/** IND10 props: the phone thread, the five tools a security and housekeeping contractor really lives on, and the guard
 *  marker. Every name, hour and count (20 deployed, 18 present) is an invented, labelled sample prop. */

const HAIR = 'rgba(15,17,21,0.08)';
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const KS = (PHONE.w - 20) / 340;

/** A guard marker: head and shoulders, drawn flat in ink. */
export const Guard: React.FC<{size?: number}> = ({size = 40}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{display: 'block'}}>
    <circle cx={20} cy={12} r={7} fill="#0f1115" />
    <path d="M6 36 V28 Q6 21 14 20 H26 Q34 21 34 28 V36 Z" fill="#0f1115" />
  </svg>
);

/* ---------- the phone thread ---------- */

export type Msg = {who: string; text: string; chip?: string; h: number};
export const THREAD: Msg[] = [
  {who: 'Site supervisor', text: 'Sir, 20 guards are deployed at the site.', chip: 'Roster.pdf', h: 160},
  {who: 'HR', text: 'But the attendance shows only 18.', chip: 'Attendance sheet', h: 160},
  {who: 'Payroll', text: 'Sir, overtime has been added too.', chip: 'OT sheet', h: 160},
  {who: 'Site supervisor', text: 'Sir?', h: 84},
  {who: 'Zone manager', text: 'Urgent', h: 84},
  {who: 'HR', text: 'Please reply', h: 84},
];

const VIEW_TOP = 104;
const VIEW_H = 580;

const Avatar: React.FC<{text: string; size?: number}> = ({text, size = 48}) => (
  <div style={{width: size, height: size, borderRadius: size / 2, background: 'var(--base-alt)', border: `1px solid ${HAIR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.36, fontWeight: 500, flex: 'none'}}>{text}</div>
);

/** One thread, messages stacking until it is overloaded. `n` is the (fractional) message count. */
export const ThreadScreen: React.FC<{n: number; msgs?: Msg[]; title?: string; sub?: string; initials?: string}> = ({n, msgs = THREAD, title = 'Site team', sub = '14 members', initials = 'ST'}) => {
  const revealed = msgs.reduce((acc, m, i) => acc + (m.h + 10) * clamp01(n - i), 0);
  const scroll = Math.max(0, revealed - VIEW_H);
  let y = VIEW_TOP;
  return (
    <div style={{position: 'absolute', left: 0, top: 0, width: 340, height: 700, transform: `scale(${KS})`, transformOrigin: '0 0', fontFamily}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: VIEW_TOP, background: 'rgba(255,255,255,0.94)', borderBottom: `1px solid ${HAIR}`, zIndex: 2}}>
        <div style={{position: 'absolute', left: 20, top: 58, display: 'flex', alignItems: 'center', gap: 12}}>
          <Avatar text={initials} size={40} />
          <div>
            <div style={{fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em'}}>{title}</div>
            <div style={{fontSize: 14, color: 'var(--ink-muted)'}}>{sub}</div>
          </div>
        </div>
        <div style={{position: 'absolute', right: 20, top: 62, minWidth: 54, height: 32, borderRadius: 16, padding: '0 12px', background: 'var(--accent)', color: '#fff', fontSize: 17, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: clamp01(n - 2.2)}}>99+</div>
      </div>
      {msgs.map((m, i) => {
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
    </div>
  );
};

/* ---------- the five tools (full cards in front of the phone) ---------- */

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

export const AttendanceCard: React.FC = () => (
  <Artifact h={640} rot={-1.1}>
    <CardLabel>Attendance register · Site 3</CardLabel>
    <Row head cols="1.5fr 1fr 1fr 0.8fr" top={92} cells={['Name', 'In', 'Out', 'Sign']} />
    <Row cols="1.5fr 1fr 1fr 0.8fr" top={156} cells={['A. Kumar', '06:00', '14:02', 'signed']} />
    <Row cols="1.5fr 1fr 1fr 0.8fr" top={220} cells={['R. Singh', '06:10', '14:00', 'signed']} />
    <Row cols="1.5fr 1fr 1fr 0.8fr" top={284} cells={['M. Das', '06:05', '—', '—']} />
    <Row cols="1.5fr 1fr 1fr 0.8fr" top={348} cells={['S. Yadav', '—', '—', '—']} />
    <Row cols="1.5fr 1fr 1fr 0.8fr" top={412} cells={['P. Nair', '06:00', '14:15', 'signed']} />
    <Row cols="1.5fr 1fr 1fr 0.8fr" top={476} cells={['D. Khan', '06:20', '14:00', '?']} mark />
  </Artifact>
);

export const RosterCard: React.FC = () => (
  <Artifact h={640} rot={1.0}>
    <CardLabel>Roster · Week 41</CardLabel>
    <Row head cols="1.3fr 1fr 1fr 1.2fr" top={92} cells={['Post', 'Shift', 'Posts', 'Deployed']} />
    <Row cols="1.3fr 1fr 1fr 1.2fr" top={156} cells={['Gate A', 'Day', '4', '4']} />
    <Row cols="1.3fr 1fr 1fr 1.2fr" top={220} cells={['Gate B', 'Day', '4', '4']} />
    <Row cols="1.3fr 1fr 1fr 1.2fr" top={284} cells={['Tower 1', 'Night', '6', '6']} />
    <Row cols="1.3fr 1fr 1fr 1.2fr" top={348} cells={['Tower 2', 'Night', '6', '6']} />
    <Row cols="1.3fr 1fr 1fr 1.2fr" top={412} cells={['Total', '', '20', '20']} mark />
  </Artifact>
);

const Bub: React.FC<{text: string; top: number; w: number; who: string}> = ({text, top, w, who}) => (
  <div style={{position: 'absolute', left: 48, top, maxWidth: w, padding: '16px 26px', borderRadius: '8px 26px 26px 26px', background: '#fff', border: `1px solid ${HAIR}`, boxShadow: 'var(--elev-low)', letterSpacing: '-0.015em'}}>
    <div style={{fontSize: 20, fontWeight: 600, color: 'var(--accent-text)', marginBottom: 4}}>{who}</div>
    <div style={{fontSize: 34, lineHeight: 1.2}}>{text}</div>
  </div>
);

export const SupervisorCard: React.FC = () => (
  <Artifact h={640} rot={-0.9}>
    <CardLabel>Supervisor chat</CardLabel>
    <Bub who="Site supervisor" text="20 guards on site today." top={110} w={640} />
    <Bub who="Site supervisor" text="Roster sent. Please confirm." top={252} w={720} />
    <Bub who="Zone manager" text="Who covered Tower 2 last night?" top={394} w={800} />
  </Artifact>
);

export const OvertimeCard: React.FC = () => (
  <Artifact h={640} rot={1.2}>
    <CardLabel>Overtime sheet</CardLabel>
    <Row head cols="1.5fr 1fr 1fr 1fr" top={92} cells={['Post', 'Hours', 'Added', 'Checked']} />
    <Row cols="1.5fr 1fr 1fr 1fr" top={156} cells={['Gate A', '12', 'yes', '—']} />
    <Row cols="1.5fr 1fr 1fr 1fr" top={220} cells={['Gate B', '8', 'yes', '—']} />
    <Row cols="1.5fr 1fr 1fr 1fr" top={284} cells={['Tower 1', '16', 'yes', '—']} />
    <Row cols="1.5fr 1fr 1fr 1fr" top={348} cells={['Tower 2', '14', 'yes', '—']} />
    <Row cols="1.5fr 1fr 1fr 1fr" top={412} cells={['Housekeeping', '10', 'yes', '?']} mark />
  </Artifact>
);

const NOTES = ['Salary run: 18 or 20?', 'Overtime to add', 'Cover cost, Tower 2?', 'Deduct the absent?', 'Ask the supervisor'];

export const SalaryCard: React.FC = () => (
  <Artifact h={640} rot={-1.3}>
    <CardLabel>Salary notebook</CardLabel>
    <div style={{position: 'absolute', left: 0, right: 0, top: 96, bottom: 0, backgroundImage: 'repeating-linear-gradient(180deg, transparent 0, transparent 99px, rgba(70,90,120,0.18) 99px, rgba(70,90,120,0.18) 100px)'}} />
    {NOTES.map((n, i) => (
      <div key={n} style={{position: 'absolute', left: 48, right: 48, top: 98 + i * 100, height: 100, display: 'flex', alignItems: 'center', gap: 24, fontSize: 38, fontStyle: 'italic', letterSpacing: '-0.02em'}}>
        <div style={{width: 32, height: 32, borderRadius: 8, border: '2.5px solid rgba(15,17,21,0.5)', flex: 'none'}} />
        {n}
      </div>
    ))}
    <svg width={920} height={640} style={{position: 'absolute', left: 0, top: 0}}>
      <path d="M92 176 C 260 166, 420 188, 640 172" stroke="var(--accent)" strokeWidth={3.5} fill="none" strokeLinecap="round" />
    </svg>
  </Artifact>
);
