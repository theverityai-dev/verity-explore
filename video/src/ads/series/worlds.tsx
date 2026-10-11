import React from 'react';
import {inOut, lerp, outX, seg} from '../../shared/timeline';
import {Sheet} from '../R07/world';
import {LABEL, tk} from '../stage';

/** Opening worlds for the series: each reel draws its own business's objects and its own signature motion. Light objects
 *  on the dark room, sample data only. Everything here finishes before the phone arrives (about 0.65 s after this layer exits). */

const Lbl: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{position: 'absolute', left: 38, top: 26, ...LABEL, fontSize: 22, color: '#6b7078'}}>{children}</div>
);

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/* ---------- IND02 restaurant: the ticket rail and the bill slips ---------- */

export const World02: React.FC<{t: number}> = ({t}) => (
  <>
    <Sheet x={80} y={610} w={920} h={390}>
      <Lbl>Kitchen · ticket rail</Lbl>
      <svg width={920} height={390} style={{position: 'absolute', left: 0, top: 0}}>
        <path d="M30 92 H890" stroke="rgba(15,17,21,0.4)" strokeWidth={3} strokeLinecap="round" />
      </svg>
      {Array.from({length: 7}).map((_, i) => {
        const s = 0.5 + i * 0.45;
        const p = seg(t, s, s + 0.5, outX);
        const prog = clamp01((t - s) / (5 + i * 0.9));
        return (
          <div key={i} style={{position: 'absolute', left: 38 + i * 122, top: 96 + Math.round((1 - p) * -30), width: 106, height: 220, borderRadius: 10, background: '#fff', border: '1.5px solid rgba(15,17,21,0.2)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 14px 26px -14px rgba(15,17,21,0.35)', opacity: p}}>
            <div style={{position: 'absolute', left: 12, top: 10, fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em'}}>#{41 + i}</div>
            <div style={{position: 'absolute', left: 12, top: 52, width: 70, height: 10, borderRadius: 5, background: 'rgba(15,17,21,0.16)'}} />
            <div style={{position: 'absolute', left: 12, top: 74, width: 52, height: 10, borderRadius: 5, background: 'rgba(15,17,21,0.12)'}} />
            <svg width={106} height={90} viewBox="0 0 106 90" style={{position: 'absolute', left: 0, top: 118}}>
              <circle cx={53} cy={45} r={24} fill="none" stroke="rgba(15,17,21,0.14)" strokeWidth={5} />
              <circle cx={53} cy={45} r={24} fill="none" stroke="#0f1115" strokeWidth={5} strokeLinecap="round" strokeDasharray={151} strokeDashoffset={151 * (1 - prog)} transform="rotate(-90 53 45)" />
            </svg>
          </div>
        );
      })}
    </Sheet>
    <Sheet x={80} y={1030} w={920} h={300}>
      <Lbl>Billing · bill slips</Lbl>
      {Array.from({length: 4}).map((_, i) => {
        const p = seg(t, 3.6 + i * 0.45, 4.1 + i * 0.45, outX);
        const open = i === 3;
        return (
          <div key={i} style={{position: 'absolute', left: 38 + i * 212, top: 84 + Math.round((1 - p) * 24), width: 190, height: 190, borderRadius: 10, background: '#fff', border: open ? '2px dashed var(--accent)' : '1.5px solid rgba(15,17,21,0.2)', opacity: p}}>
            <div style={{position: 'absolute', left: 16, top: 14, fontSize: 28, fontWeight: 500, letterSpacing: '-0.01em'}}>{open ? 'Table —' : `Table ${[4, 7, 9][i]}`}</div>
            <div style={{position: 'absolute', left: 16, top: 66, width: 120, height: 10, borderRadius: 5, background: 'rgba(15,17,21,0.16)'}} />
            <div style={{position: 'absolute', left: 16, top: 90, width: 88, height: 10, borderRadius: 5, background: 'rgba(15,17,21,0.12)'}} />
            <div style={{position: 'absolute', left: 16, bottom: 14, ...LABEL, fontSize: 17, color: open ? 'var(--accent-text)' : '#6b7078'}}>{open ? 'No table' : 'Closed'}</div>
          </div>
        );
      })}
    </Sheet>
  </>
);

/* ---------- IND06 manufacturing: the line, the stalled job card, the falling gauge ---------- */

const STATIONS = ['Cut', 'Make', 'QC', 'Pack'];
const QC_X = 38 + 2 * 214 + 88;

export const World06: React.FC<{t: number}> = ({t}) => {
  const hold = seg(t, 5.5, 6.2, outX);
  const level = tk(t, [[1.5, 0.82], [12.0, 0.14]]);
  return (
    <>
      <Sheet x={80} y={610} w={920} h={470}>
        <Lbl>Production line</Lbl>
        {STATIONS.map((s, i) => {
          const qc = i === 2;
          return (
            <div key={s} style={{position: 'absolute', left: 38 + i * 214, top: 100, width: 176, height: 96, borderRadius: 14, background: '#fff', border: qc && hold > 0 ? '2px dashed var(--accent)' : '1.5px solid rgba(15,17,21,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...LABEL, fontSize: 28, letterSpacing: '0.16em'}}>
              {s}
              {qc ? <div style={{position: 'absolute', left: 0, right: 0, bottom: -34, textAlign: 'center', ...LABEL, fontSize: 18, color: 'var(--accent-text)', opacity: hold}}>On hold</div> : null}
            </div>
          );
        })}
        <div style={{position: 'absolute', left: 30, top: 300, width: 860, height: 3, borderRadius: 2, background: 'rgba(15,17,21,0.35)'}} />
        {Array.from({length: 5}).map((_, k) => {
          const s = 0.8 + k * 1.7;
          const travel = 38 + Math.max(0, t - s) * 150;
          const stop = k < 2 ? 844 : k === 2 ? QC_X : QC_X - (k - 2) * 76;
          const x = Math.min(travel, stop);
          const p = seg(t, s, s + 0.4, outX);
          return (
            <div key={k} style={{position: 'absolute', left: Math.round(x - 32), top: 252, width: 64, height: 44, borderRadius: 8, background: '#fff', border: k === 2 && hold > 0 ? '2px solid var(--accent)' : '1.5px solid rgba(15,17,21,0.28)', boxShadow: '0 8px 16px -10px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 500, opacity: p}}>
              {211 + k}
            </div>
          );
        })}
        <svg width={920} height={170} style={{position: 'absolute', left: 0, top: 300, opacity: seg(t, 2.2, 3.0, outX)}}>
          <g fill="none" stroke="rgba(15,17,21,0.4)" strokeWidth={3} strokeLinejoin="round">
            <rect x={600} y={52} width={170} height={70} rx={6} />
            <path d="M770 72 H820 L850 98 V122 H770 Z" />
            <circle cx={650} cy={132} r={13} fill="#fff" />
            <circle cx={800} cy={132} r={13} fill="#fff" />
          </g>
        </svg>
        <div style={{position: 'absolute', left: 600, top: 322, ...LABEL, fontSize: 19, color: '#6b7078', opacity: seg(t, 2.4, 3.0)}}>Dispatch · waiting</div>
      </Sheet>
      <Sheet x={80} y={1110} w={920} h={250}>
        <Lbl>Raw material</Lbl>
        <div style={{position: 'absolute', left: 38, top: 100, width: 844, height: 40, borderRadius: 20, background: 'rgba(15,17,21,0.08)', overflow: 'hidden'}}>
          <div style={{width: 844 * level, height: 40, borderRadius: 20, background: 'rgba(15,17,21,0.5)'}} />
        </div>
        <div style={{position: 'absolute', left: 38, top: 160, ...LABEL, fontSize: 19, color: '#6b7078'}}>Stock cover</div>
        <div style={{position: 'absolute', right: 38, top: 156, padding: '4px 16px', borderRadius: 16, border: '1.5px solid var(--accent)', fontSize: 20, fontWeight: 500, color: 'var(--accent-text)', opacity: seg(t, 9.5, 10.1, outX)}}>Low</div>
      </Sheet>
    </>
  );
};

/* ---------- IND09 wholesale: the godown, the loading bay, the dealer ledger ---------- */

const LEDGER = [380, 560, 310, 620, 450, 520];

export const World09: React.FC<{t: number}> = ({t}) => {
  const total = seg(t, 2.0, 9.0, inOut);
  return (
    <>
      <Sheet x={80} y={610} w={920} h={400}>
        <Lbl>Godown</Lbl>
        {Array.from({length: 9}).map((_, i) => {
          const c = i % 3;
          const r = Math.floor(i / 3);
          const mover = c === 2;
          const k = r;
          const s = 2.0 + k * 1.3;
          const m = mover ? seg(t, s, s + 1.6, inOut) : 0;
          const p = seg(t, 0.4 + i * 0.12, 0.8 + i * 0.12, outX);
          return (
            <div key={i} style={{position: 'absolute', left: 38 + c * 140 + Math.round(lerp(0, 262, m)), top: 96 + r * 96, width: 124, height: 78, borderRadius: 8, background: '#fff', border: '1.5px solid rgba(15,17,21,0.24)', boxShadow: '0 8px 16px -10px rgba(15,17,21,0.35)', opacity: p * (1 - 0.55 * m)}}>
              <div style={{position: 'absolute', left: 12, top: 12, width: 60, height: 9, borderRadius: 5, background: 'rgba(15,17,21,0.16)'}} />
              <div style={{position: 'absolute', left: 12, top: 32, width: 42, height: 9, borderRadius: 5, background: 'rgba(15,17,21,0.12)'}} />
            </div>
          );
        })}
        <svg width={920} height={400} style={{position: 'absolute', left: 0, top: 0, opacity: seg(t, 1.2, 2.0, outX)}}>
          <g fill="none" stroke="rgba(15,17,21,0.4)" strokeWidth={3} strokeLinejoin="round">
            <rect x={640} y={150} width={170} height={100} rx={6} />
            <path d="M810 176 H850 L880 208 V250 H810 Z" />
            <circle cx={690} cy={262} r={14} fill="#fff" />
            <circle cx={840} cy={262} r={14} fill="#fff" />
          </g>
        </svg>
        <div style={{position: 'absolute', left: 640, top: 104, ...LABEL, fontSize: 19, color: '#6b7078', opacity: seg(t, 1.2, 2.0)}}>Dispatch bay</div>
      </Sheet>
      <Sheet x={80} y={1040} w={920} h={340}>
        <Lbl>Ledger · outstanding</Lbl>
        {LEDGER.map((w, i) => {
          const p = seg(t, 1.5 + i * 0.9, 2.5 + i * 0.9, outX);
          return (
            <div key={i}>
              <div style={{position: 'absolute', left: 38, top: 78 + i * 36, fontSize: 22, color: '#0f1115'}}>Dealer {String.fromCharCode(65 + i)}</div>
              <div style={{position: 'absolute', left: 190, top: 88 + i * 36, width: w * p, height: 14, borderRadius: 7, background: 'rgba(15,17,21,0.22)'}} />
            </div>
          );
        })}
        <div style={{position: 'absolute', left: 38, top: 296, ...LABEL, fontSize: 19, color: '#6b7078', opacity: seg(t, 2.0, 2.6)}}>Outstanding</div>
        <div style={{position: 'absolute', left: 230, top: 298, width: 650 * total, height: 14, borderRadius: 7, background: 'var(--accent)', opacity: seg(t, 2.0, 2.6)}} />
      </Sheet>
    </>
  );
};
