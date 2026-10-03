import React from 'react';
import {glide, hand, smooth} from './base';
import {seg} from '../../shared/timeline';

/* The analogue business world: the tools real businesses actually run on. Paper is a prop material, not brand UI. */
const PAPER = 'linear-gradient(135deg, #f5eee0 0%, #ece5d6 55%, #dcd4c1 100%)';
const INK = '#1b1814';
const SOFT = 'rgba(27,24,20,0.5)';
const PEN = '#233553';

const paper = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  position: 'relative',
  boxSizing: 'border-box',
  background: PAPER,
  color: INK,
  borderRadius: 6,
  boxShadow: '0 38px 80px rgba(60,90,130,0.25), 0 2px 4px rgba(60,90,130,0.14), inset 0 0 0 1px rgba(255,255,255,0.4)',
  ...extra,
});

/** Paper shading: a soft diagonal light falloff so every sheet reads as lit, not flat. */
const Sheen: React.FC<{r?: number}> = ({r = 6}) => (
  <div style={{position: 'absolute', inset: 0, borderRadius: r, pointerEvents: 'none', background: 'linear-gradient(118deg, rgba(255,255,255,0.32), transparent 38%, rgba(60,90,130,0.07) 100%)'}} />
);

export const Register: React.FC = () => (
  <div style={paper({width: 380, height: 500, padding: '30px 30px 30px 62px', backgroundImage: `${PAPER}`})}>
    {/* ruled lines + red margin */}
    <div style={{position: 'absolute', inset: 0, borderRadius: 6, backgroundImage: 'repeating-linear-gradient(transparent 0 47px, rgba(60,90,140,0.22) 47px 48px)', backgroundPosition: '0 78px'}} />
    <div style={{position: 'absolute', left: 50, top: 0, bottom: 0, width: 2, background: 'rgba(190,60,60,0.45)'}} />
    <div style={{position: 'absolute', left: 54, top: 0, bottom: 0, width: 1, background: 'rgba(190,60,60,0.3)'}} />
    <div style={{position: 'relative', fontFamily: hand, fontWeight: 600, color: PEN, fontSize: 34, lineHeight: '48px'}}>
      <div style={{fontSize: 38, textDecoration: 'underline', textUnderlineOffset: 6, marginBottom: 8}}>Maal aaya — 14/03</div>
      {[
        ['Sharma Traders', '4,200'],
        ['Gupta & Sons', '1,850'],
        ['Mehra ji (baaki)', '6,500'],
        ['Cash jama', '2,000'],
        ['Kata hua ✗', '—'],
        ['Total ???', '14,550'],
      ].map(([a, b]) => (
        <div key={a} style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>{a}</span>
          <span>{b}</span>
        </div>
      ))}
    </div>
    <Sheen />
  </div>
);

export const Sheet: React.FC = () => {
  const cols = ['A', 'B', 'C', 'D'];
  const rows = [
    ['Party', 'Qty', 'Rate', 'Status'],
    ['Sharma Trd', '120', '35.5', 'Pending'],
    ['Gupta & Sons', '40', '36.0', 'Dispatch?'],
    ['Mehra ji', '300', '34.0', 'Hold'],
    ['Verma Agency', '75', '35.5', 'OK'],
    ['Joshi Stores', '210', '35.0', 'Call karo'],
  ];
  return (
    <div style={{width: 520, height: 372, borderRadius: 10, overflow: 'hidden', background: '#fff', boxShadow: '0 38px 80px rgba(60,90,130,0.25), 0 2px 4px rgba(60,90,130,0.14)', fontFamily: 'Arial, Helvetica, sans-serif', position: 'relative'}}>
      <div style={{height: 40, background: '#217346', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8, color: '#fff', fontSize: 17}}>
        <span style={{opacity: 0.9}}>order_book_final_v3 (2).xlsx</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '34px 1.4fr 0.7fr 0.7fr 1fr', fontSize: 19}}>
        <div style={{background: '#f0f0f0', borderBottom: '1px solid #d4d4d4'}} />
        {cols.map((c) => (
          <div key={c} style={{background: '#f0f0f0', borderBottom: '1px solid #d4d4d4', borderLeft: '1px solid #d4d4d4', padding: '6px 0', textAlign: 'center', color: '#555'}}>
            {c}
          </div>
        ))}
        {rows.map((r, i) => (
          <React.Fragment key={i}>
            <div style={{background: '#f0f0f0', borderBottom: '1px solid #e1e1e1', textAlign: 'center', padding: '10px 0', color: '#666', fontSize: 15}}>{i + 1}</div>
            {r.map((c, j) => {
              const sel = i === 2 && j === 3;
              return (
                <div
                  key={j}
                  style={{
                    borderBottom: '1px solid #e1e1e1',
                    borderLeft: '1px solid #e1e1e1',
                    padding: '10px 10px',
                    color: i === 0 ? '#111' : '#222',
                    fontWeight: i === 0 ? 700 : 400,
                    outline: sel ? '2.5px solid #217346' : undefined,
                    outlineOffset: -2.5,
                    background: c === 'Hold' ? '#fff2cc' : c === 'Call karo' ? '#fde2e1' : undefined,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  {c}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 34, background: '#f3f3f3', borderTop: '1px solid #d4d4d4', display: 'flex', alignItems: 'center', gap: 6, padding: '0 10px', fontSize: 15, color: '#444'}}>
        {['Sheet1', 'final_v3', 'final_v3 (2)', 'Copy of final'].map((s, i) => (
          <span key={s} style={{padding: '4px 12px', background: i === 2 ? '#fff' : 'transparent', borderBottom: i === 2 ? '2px solid #217346' : undefined, fontWeight: i === 2 ? 600 : 400}}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Chat: React.FC = () => {
  const bubble = (side: 'l' | 'r', text: string, time: string, ticks?: boolean): React.ReactNode => (
    <div style={{alignSelf: side === 'l' ? 'flex-start' : 'flex-end', maxWidth: 300, padding: '12px 16px 10px', borderRadius: side === 'l' ? '4px 18px 18px 18px' : '18px 4px 18px 18px', background: side === 'l' ? '#ffffff' : '#d9fdd3', color: '#111', fontSize: 22, lineHeight: 1.25, boxShadow: '0 1px 1px rgba(60,90,130,0.06)', fontFamily: 'Arial, Helvetica, sans-serif'}}>
      {text}
      <div style={{textAlign: 'right', fontSize: 14, color: '#667781', marginTop: 4}}>
        {time} {ticks ? <span style={{color: '#53bdeb'}}>✓✓</span> : null}
      </div>
    </div>
  );
  return (
    <div style={{width: 380, height: 440, borderRadius: 26, overflow: 'hidden', background: '#e8e0d2', boxShadow: '0 38px 80px rgba(60,90,130,0.25), 0 2px 4px rgba(60,90,130,0.14)', display: 'flex', flexDirection: 'column', fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <div style={{height: 64, background: '#1f2c34', display: 'flex', alignItems: 'center', gap: 12, padding: '0 18px', color: '#fff'}}>
        <div style={{width: 38, height: 38, borderRadius: 19, background: '#5a6b75'}} />
        <div>
          <div style={{fontSize: 20, fontWeight: 600}}>Rajesh ji · Purchase</div>
          <div style={{fontSize: 13, opacity: 0.7}}>typing…</div>
        </div>
      </div>
      <div style={{flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'flex-end'}}>
        {bubble('l', 'Sir PO approve kar do', '21:12')}
        {bubble('r', 'Kal subah dekhta hu', '21:14', true)}
        {bubble('l', 'Supplier ka phone aa raha hai', '21:15')}
      </div>
    </div>
  );
};

export const Slip: React.FC = () => (
  <div style={paper({width: 350, height: 250, padding: '24px 28px'})}>
    <div style={{fontSize: 16, letterSpacing: '0.2em', fontWeight: 600, color: SOFT}}>PURCHASE ORDER · #2041</div>
    <div style={{marginTop: 14, fontFamily: hand, fontSize: 32, color: PEN, lineHeight: '40px'}}>
      <div>Cement — 200 bags</div>
      <div>Rate: ₹ 390 / bag</div>
      <div style={{fontSize: 26, color: SOFT}}>Approved by: ______</div>
    </div>
    <div style={{position: 'absolute', right: 26, bottom: 26, transform: 'rotate(-13deg)', border: '4px double rgba(176,38,45,0.82)', color: 'rgba(176,38,45,0.85)', padding: '6px 16px', fontSize: 30, fontWeight: 700, letterSpacing: '0.1em', mixBlendMode: 'multiply'}}>APPROVED</div>
    <Sheen />
  </div>
);

export const Sticky: React.FC = () => (
  <div style={{width: 250, height: 250, padding: '28px 26px', background: 'linear-gradient(160deg, #f6e08a, #f0d56a)', boxShadow: '0 30px 60px rgba(60,90,130,0.23), 0 2px 3px rgba(60,90,130,0.11)', fontFamily: hand, fontSize: 44, lineHeight: '50px', color: '#3a2f0a', fontWeight: 600, position: 'relative'}}>
    Kal tak
    <br />
    stock check
    <br />
    karna!!
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(118deg, rgba(255,255,255,0.28), transparent 40%, rgba(60,90,130,0.05))'}} />
  </div>
);

const zig = (() => {
  const pts = ['0% 0%', '100% 0%'];
  const n = 22;
  for (let i = n; i >= 0; i--) pts.push(`${(i / n) * 100}% ${i % 2 ? 98.6 : 100}%`);
  return `polygon(${pts.join(',')})`;
})();

export const Bill: React.FC = () => (
  <div style={paper({width: 270, height: 470, padding: '28px 26px', clipPath: zig, borderRadius: 0, backgroundImage: 'linear-gradient(135deg,#f7f1e4,#ebe4d4)'})}>
    <div style={{fontSize: 17, letterSpacing: '0.2em', fontWeight: 600}}>BILL #8841</div>
    <div style={{fontSize: 14, color: SOFT, marginTop: 4}}>14 Mar · 18:42</div>
    <div style={{marginTop: 22}}>
      {[['Cement 50kg', '1,950'], ['TMT 12mm', '8,400'], ['Sand', '2,200'], ['Transport', '600'], ['Round off', '0.40']].map(([a, b]) => (
        <div key={a} style={{display: 'flex', justifyContent: 'space-between', fontSize: 20, padding: '7px 0', fontVariantNumeric: 'tabular-nums'}}>
          <span>{a}</span>
          <span>{b}</span>
        </div>
      ))}
    </div>
    <div style={{borderTop: '2px dashed rgba(27,24,20,0.3)', marginTop: 14, paddingTop: 14, fontSize: 24, fontWeight: 600, display: 'flex', justifyContent: 'space-between'}}>
      <span>Total</span>
      <span>13,150</span>
    </div>
  </div>
);

export const Checklist: React.FC = () => (
  <div style={{position: 'relative', width: 340, height: 440}}>
    <div style={{position: 'absolute', inset: 0, borderRadius: 10, background: 'linear-gradient(150deg,#6b5a46,#4d3f30)', boxShadow: '0 38px 80px rgba(60,90,130,0.25)'}} />
    <div style={paper({position: 'absolute', left: 20, right: 20, top: 44, bottom: 22, padding: '26px 22px'})}>
      {[
        ['Order lena', true],
        ['Godown check', true],
        ['Credit approval', false],
        ['Dispatch', false],
        ['Payment follow-up', false],
      ].map(([a, done]) => (
        <div key={a as string} style={{display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', fontFamily: hand, fontSize: 31, color: PEN}}>
          <span style={{width: 26, height: 26, border: `2.5px solid ${PEN}`, borderRadius: 4, display: 'grid', placeItems: 'center', fontSize: 24, lineHeight: 1}}>{done ? '✓' : ''}</span>
          <span style={{textDecoration: done ? 'line-through' : undefined, opacity: done ? 0.6 : 1}}>{a as string}</span>
        </div>
      ))}
      <Sheen />
    </div>
    <div style={{position: 'absolute', left: '50%', top: 14, width: 120, height: 46, marginLeft: -60, borderRadius: 8, background: 'linear-gradient(180deg,#d8dbe0,#8d929b)', boxShadow: '0 6px 12px rgba(60,90,130,0.18)'}} />
  </div>
);

export type Artefact = {key: string; node: React.ReactNode; w: number; h: number; x: number; y: number; z: number; rx: number; ry: number; rz: number; drift: number};

/** Hand-authored coordinate table. Left to right, near to far. Hero (register) sits in focus; the rest fall to depth blur. */
export const ARTEFACTS: Artefact[] = [
  {key: 'register', node: <Register />, w: 380, h: 500, x: -16, y: -60, z: 80, rx: 6, ry: -14, rz: -5, drift: 1},
  {key: 'sheet', node: <Sheet />, w: 520, h: 372, x: 164, y: 240, z: 20, rx: -8, ry: 12, rz: 3, drift: 0.8},
  {key: 'chat', node: <Chat />, w: 380, h: 440, x: -226, y: 250, z: -180, rx: -4, ry: -16, rz: -3, drift: 1.2},
  {key: 'slip', node: <Slip />, w: 350, h: 250, x: 244, y: -200, z: -90, rx: 10, ry: 14, rz: 7, drift: 0.9},
  {key: 'sticky', node: <Sticky />, w: 250, h: 250, x: -246, y: -240, z: 190, rx: 8, ry: -10, rz: -9, drift: 1.4},
  {key: 'bill', node: <Bill />, w: 270, h: 470, x: 334, y: 40, z: -320, rx: 2, ry: 20, rz: 5, drift: 0.7},
  {key: 'checklist', node: <Checklist />, w: 340, h: 440, x: -326, y: 30, z: -420, rx: 0, ry: -22, rz: -4, drift: 0.6},
];

/* -------------------------------------------------------------------------------------------------------------------
   The generic ERP: dated chrome, identical module tiles, a locked workflow bar. Deliberately cold and rigid.
   ------------------------------------------------------------------------------------------------------------------- */
const ERP_TILES = ['Finance', 'HR', 'Procurement', 'Inventory', 'Sales', 'CRM', 'Projects', 'Payroll', 'Reports', 'Assets', 'Quality', 'Admin'];

export const Erp: React.FC<{t: number; at: number; drain?: number; w?: number; h?: number}> = ({t, at, drain = 0, w = 900, h = 1020}) => {
  const chrome = 1 - seg(drain, 0.05, 0.5, smooth);
  const font = 'Arial, Helvetica, sans-serif';
  return (
    <div style={{width: w, height: h, background: `rgba(213,219,230,${chrome})`, border: '1px solid #8d9bb3', borderColor: `rgba(141,155,179,${chrome})`, borderRadius: 6, overflow: 'hidden', fontFamily: font, color: '#26334a', boxShadow: `0 44px 110px rgba(60,90,130,${0.22 * chrome}), 0 2px 6px rgba(60,90,130,${0.12 * chrome})`, position: 'relative'}}>
      <div style={{opacity: chrome, height: 78, background: 'linear-gradient(#41506b,#2f3c55)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', fontSize: 25}}>
        <b style={{letterSpacing: '0.04em'}}>ERP SUITE ▪ v9.2</b>
        <span style={{fontSize: 19, opacity: 0.75}}>File &nbsp; Edit &nbsp; View &nbsp; Tools &nbsp; Help</span>
      </div>
      <div style={{opacity: chrome, height: 52, background: '#c2cbdb', borderBottom: '1px solid #9aa8c0', display: 'flex', alignItems: 'center', padding: '0 30px', fontSize: 19, color: '#42516c'}}>Home &gt; All Modules &gt; Standard</div>
      <div style={{padding: '28px 28px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
        {ERP_TILES.map((name, i) => {
          const p = seg(t, at + i * 0.045, at + i * 0.045 + 0.5, glide);
          // On drain, tiles let go in a ripple from the centre outwards: back in depth, softer, gone.
          const ring = Math.abs((i % 3) - 1) + Math.abs(Math.floor(i / 3) - 1.5);
          const d = seg(drain, ring * 0.07, ring * 0.07 + 0.5, smooth);
          return (
            <div key={name} style={{height: 184, background: '#e4e9f1', border: '1px solid #a7b3c8', borderTop: '5px solid #5873a0', borderRadius: 3, padding: '22px 22px', opacity: p * (1 - d), transform: `translateY(${(1 - p) * 14}px) scale(${1 - d * 0.1})`, filter: d > 0.02 ? `blur(${d * 8}px)` : undefined}}>
              <div style={{width: 54, height: 54, background: '#5873a0', borderRadius: 3, display: 'grid', placeItems: 'center'}}>
                <div style={{width: 22, height: 22, border: '3px solid #dfe6f2', borderRadius: 2}} />
              </div>
              <div style={{fontSize: 27, fontWeight: 700, marginTop: 18}}>{name}</div>
              <div style={{fontSize: 18, color: '#6b7a93', marginTop: 4}}>Standard module</div>
            </div>
          );
        })}
      </div>
      <div style={{opacity: chrome, position: 'absolute', left: 0, right: 0, bottom: 0, height: 62, background: '#c2cbdb', borderTop: '1px solid #9aa8c0', display: 'flex', alignItems: 'center', gap: 12, padding: '0 28px', fontSize: 19, color: '#42516c'}}>
        <b>Workflow:</b> Standard
        {['Step 1', 'Step 2', 'Step 3'].map((s) => (
          <span key={s} style={{padding: '3px 14px', background: '#dfe5ef', border: '1px solid #a7b3c8'}}>
            {s}
          </span>
        ))}
        <span style={{marginLeft: 'auto'}}>🔒 Locked</span>
      </div>
    </div>
  );
};

/** Position of an artefact at time t during S1, including its slow idle motion. */
export const idle = (a: Artefact, i: number, t: number) => ({
  dx: Math.sin(t * 0.5 + i * 1.7) * 14 * a.drift,
  dy: Math.cos(t * 0.42 + i * 2.3) * 11 * a.drift,
  drz: Math.sin(t * 0.3 + i) * 0.8,
});

