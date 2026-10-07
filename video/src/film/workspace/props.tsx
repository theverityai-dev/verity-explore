import React from 'react';
import {HAND, SANS} from './kit';

/* The business world: paper, chat and spreadsheet props lit like physical objects. Cream paper is the analogue material
   (not brand UI). Every prop is a pure function of its own progress values, so the film can animate them deterministically. */

const PAPER = 'linear-gradient(135deg, #f4eddf 0%, #ece5d6 55%, #d9d1bf 100%)';
const INK = '#1b1814';
const BLUE_INK = '#1c2b4a';

const paper = (w: number, h: number): React.CSSProperties => ({
  position: 'relative',
  boxSizing: 'border-box',
  width: w,
  height: h,
  background: PAPER,
  color: INK,
  borderRadius: 6,
  boxShadow: '0 36px 80px rgba(0,0,0,0.6), 0 2px 5px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.35)',
});

const Sheen: React.FC<{r?: number}> = ({r = 6}) => (
  <div style={{position: 'absolute', inset: 0, borderRadius: r, pointerEvents: 'none', background: 'linear-gradient(115deg, rgba(255,255,255,0.30), transparent 36%, rgba(0,0,0,0.20) 100%)'}} />
);

const reveal = (p: number): React.CSSProperties => ({clipPath: `inset(-4px ${(1 - Math.max(0, Math.min(1, p))) * 100}% -4px 0)`});

export const SIZE = {
  sticky: [220, 220], ledger: [340, 430], po: [300, 410], chat: [300, 300], sheet: [400, 270], clip: [240, 330],
  receipt: [170, 330], calendar: [230, 260], book: [300, 200], slip: [200, 140],
} as const;

export const Sticky: React.FC<{lines: string[]; p: number; tone?: 'y' | 'p'}> = ({lines, p, tone = 'y'}) => (
  <div
    style={{
      position: 'relative',
      width: 220,
      height: 220,
      background: tone === 'y' ? 'linear-gradient(160deg, #f7e07a, #efc94e)' : 'linear-gradient(160deg, #f6c9d4, #eeaebf)',
      boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 2px 5px rgba(0,0,0,0.35)',
      borderRadius: 3,
    }}
  >
    <div style={{position: 'absolute', left: 24, top: 30, fontFamily: HAND, fontSize: 40, fontWeight: 600, lineHeight: 1.05, color: '#3a2d10', whiteSpace: 'pre', ...reveal(p)}}>{lines.join('\n')}</div>
    <Sheen r={3} />
  </div>
);

export const Ledger: React.FC<{pTotal: number}> = ({pTotal}) => {
  const rows = ['Maal aaya — 14/03', 'Sharma Traders   4,200', 'Gupta & Sons   1,800', 'Mehra ji (baaki)  6,500', 'Cash jama   2,000', 'Kata hua  ✗'];
  return (
    <div style={{...paper(340, 430), padding: '28px 26px'}}>
      <div style={{position: 'absolute', left: 52, top: 0, bottom: 0, width: 2, background: 'rgba(190,60,60,0.35)'}} />
      {Array.from({length: 11}).map((_, i) => (
        <div key={i} style={{position: 'absolute', left: 0, right: 0, top: 62 + i * 33, height: 1.5, background: 'rgba(60,80,160,0.16)'}} />
      ))}
      <div style={{position: 'absolute', left: 66, top: 22, fontFamily: HAND, fontSize: 30, fontWeight: 600, color: BLUE_INK, lineHeight: '33px', whiteSpace: 'pre'}}>
        {rows.map((r, i) => (
          <div key={i} style={{textDecoration: i === 5 ? 'line-through' : undefined, opacity: i === 5 ? 0.7 : 1}}>{r}</div>
        ))}
        <div style={{...reveal(pTotal), marginTop: 2}}>Total ???   14,550</div>
      </div>
      <Sheen />
    </div>
  );
};

export const PurchaseOrder: React.FC<{stamp: number}> = ({stamp}) => (
  <div style={{...paper(300, 410), padding: '26px 26px'}}>
    <div style={{fontFamily: SANS, fontSize: 13, letterSpacing: '0.22em', fontWeight: 600, color: 'rgba(27,24,20,0.6)'}}>PURCHASE ORDER · #4281</div>
    <div style={{height: 2, background: 'rgba(27,24,20,0.25)', margin: '14px 0 18px'}} />
    <div style={{fontFamily: HAND, fontSize: 32, fontWeight: 600, color: BLUE_INK, lineHeight: 1.15}}>
      Cement — 200 bags
      <br />
      Rate ₹ 390 / bag
      <br />
      <span style={{opacity: 0.75}}>Approved by ______</span>
    </div>
    <div
      style={{
        position: 'absolute',
        left: 38,
        top: 236,
        transform: `rotate(-11deg) scale(${1.7 - 0.7 * stamp})`,
        opacity: stamp,
        border: '4px double #c0392b',
        color: '#c0392b',
        fontFamily: SANS,
        fontWeight: 800,
        letterSpacing: '0.12em',
        fontSize: 34,
        padding: '8px 16px',
        borderRadius: 6,
      }}
    >
      APPROVED
    </div>
    <Sheen />
  </div>
);

export const Chat: React.FC<{p1: number; p2: number; p3: number}> = ({p1, p2, p3}) => {
  const bubble = (txt: string, mine: boolean, p: number) => (
    <div style={{display: 'flex', justifyContent: mine ? 'flex-end' : 'flex-start', opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
      <div style={{fontFamily: SANS, fontSize: 16, lineHeight: 1.3, padding: '9px 13px', borderRadius: 12, maxWidth: 210, background: mine ? '#d9fdd3' : '#ffffff', color: '#111', boxShadow: '0 1px 2px rgba(0,0,0,0.15)'}}>{txt}</div>
    </div>
  );
  return (
    <div style={{position: 'relative', width: 300, height: 300, borderRadius: 18, background: '#e9e3d8', overflow: 'hidden', boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 2px 5px rgba(0,0,0,0.35)'}}>
      <div style={{height: 46, background: '#d9d3c8', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10}}>
        <div style={{width: 26, height: 26, borderRadius: 13, background: '#9aa39b'}} />
        <div style={{width: 90, height: 8, borderRadius: 4, background: 'rgba(0,0,0,0.25)'}} />
      </div>
      <div style={{padding: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
        {bubble('Sir PO approve kar do', false, p1)}
        {bubble('Kal subah dekhta hu', true, p2)}
        {bubble('Supplier ka phone aa raha hai', false, p3)}
      </div>
      <Sheen r={18} />
    </div>
  );
};

export const OrderSheet: React.FC<{swap: number}> = ({swap}) => {
  const rows: [string, string, string, string][] = [
    ['Sharma Trdr', '120', '26.5', 'Pending'],
    ['Gupta & Sons', '40', '36.0', 'Dispatch?'],
    ['Mehra ji', '300', '34.0', 'Hold'],
    ['Verma Agency', '75', '26.5', 'OK'],
  ];
  const cw = [150, 70, 70, 110];
  return (
    <div style={{position: 'relative', width: 400, height: 270, background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 2px 5px rgba(0,0,0,0.35)', fontFamily: SANS}}>
      <div style={{height: 34, background: '#1e7b4b', color: '#fff', fontSize: 14, fontWeight: 500, padding: '8px 14px'}}>order_book_final_v3 (2).xlsx</div>
      <div style={{display: 'flex', background: '#f0f2f0', borderBottom: '1px solid #d6dbd6', fontSize: 14, fontWeight: 600, color: '#444'}}>
        {['Party', 'Qty', 'Rate', 'Status'].map((h, i) => (
          <div key={h} style={{width: cw[i], padding: '8px 12px'}}>{h}</div>
        ))}
      </div>
      {rows.map((r, ri) => (
        <div key={ri} style={{display: 'flex', borderBottom: '1px solid #e4e8e4', fontSize: 15, color: '#222'}}>
          {r.map((c, ci) => {
            const status = ci === 3;
            const swapped = ri === 1 && status;
            const txt = swapped && swap > 0.5 ? 'OK' : c;
            const hold = c === 'Hold';
            return (
              <div key={ci} style={{width: cw[ci], padding: '8px 12px', background: hold ? '#fff0a8' : undefined, outline: swapped && swap < 0.5 ? '2px solid #1e7b4b' : undefined, outlineOffset: -2}}>
                {txt}
              </div>
            );
          })}
        </div>
      ))}
      <Sheen r={8} />
    </div>
  );
};

export const Clipboard: React.FC<{tick: number}> = ({tick}) => (
  <div style={{position: 'relative', width: 240, height: 330, borderRadius: 12, background: 'linear-gradient(160deg, #6f7b72, #55615a)', boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 2px 5px rgba(0,0,0,0.35)'}}>
    <div style={{position: 'absolute', left: 80, top: -10, width: 80, height: 34, borderRadius: 8, background: '#b9bfba', boxShadow: '0 2px 4px rgba(0,0,0,0.4)'}} />
    <div style={{position: 'absolute', left: 16, right: 16, top: 34, bottom: 16, background: PAPER, borderRadius: 4, padding: '18px 16px'}}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20}}>
          <div style={{width: 20, height: 20, border: '2px solid rgba(27,24,20,0.55)', borderRadius: 3, position: 'relative'}}>
            {i < 2 || (i === 2 && tick > 0.5) ? <div style={{position: 'absolute', left: 3, top: -6, fontFamily: HAND, fontSize: 28, color: BLUE_INK, fontWeight: 600}}>✓</div> : null}
          </div>
          <div style={{height: 7, borderRadius: 4, width: [110, 90, 120, 80, 100][i], background: 'rgba(27,24,20,0.28)'}} />
        </div>
      ))}
    </div>
    <Sheen r={12} />
  </div>
);

export const Receipt: React.FC = () => (
  <div style={{...paper(170, 330), padding: '20px 18px', clipPath: 'polygon(0 0,100% 0,100% 97%,92% 100%,84% 97%,76% 100%,68% 97%,60% 100%,52% 97%,44% 100%,36% 97%,28% 100%,20% 97%,12% 100%,4% 97%,0 100%)', borderRadius: 0}}>
    <div style={{fontFamily: SANS, fontSize: 12, letterSpacing: '0.2em', fontWeight: 600}}>BILL 2214</div>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <div key={i} style={{display: 'flex', justifyContent: 'space-between', marginTop: 14}}>
        <div style={{height: 6, width: [70, 56, 80, 60, 74, 50][i], borderRadius: 3, background: 'rgba(27,24,20,0.3)'}} />
        <div style={{height: 6, width: 24, borderRadius: 3, background: 'rgba(27,24,20,0.4)'}} />
      </div>
    ))}
    <Sheen r={0} />
  </div>
);

export const CalendarPage: React.FC = () => (
  <div style={{position: 'relative', width: 230, height: 260, background: '#faf8f3', borderRadius: 6, boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 2px 5px rgba(0,0,0,0.35)', overflow: 'hidden', fontFamily: SANS}}>
    <div style={{height: 54, background: '#b6402f', color: '#fff', fontWeight: 700, letterSpacing: '0.2em', fontSize: 20, display: 'grid', placeItems: 'center'}}>MARCH</div>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4, padding: 12, fontSize: 14, color: '#444'}}>
      {Array.from({length: 28}).map((_, i) => (
        <div key={i} style={{textAlign: 'center', padding: '4px 0', background: i === 13 ? 'rgba(182,64,47,0.18)' : undefined, borderRadius: 4}}>{i + 1}</div>
      ))}
    </div>
    <Sheen r={6} />
  </div>
);

export const BillBook: React.FC = () => (
  <div style={{position: 'relative', width: 300, height: 200, borderRadius: 8, background: 'linear-gradient(160deg, #3a5b9a, #2c4778)', boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 2px 5px rgba(0,0,0,0.35)'}}>
    <div style={{position: 'absolute', left: 20, top: 24, right: 20, height: 58, background: '#efe8d8', borderRadius: 4}}>
      <div style={{fontFamily: HAND, fontSize: 30, color: BLUE_INK, fontWeight: 600, padding: '10px 14px'}}>Bill book — No. 318</div>
    </div>
    <Sheen r={8} />
  </div>
);

export const Slip: React.FC = () => (
  <div style={{...paper(200, 140), padding: '18px 18px'}}>
    <div style={{fontFamily: HAND, fontSize: 28, fontWeight: 600, color: BLUE_INK, lineHeight: 1.1}}>Udhaar<br />wapas lena</div>
    <Sheen />
  </div>
);

/** Generic small prop for the other two businesses: same material, different structure. */
export const Mini: React.FC<{kind: 'paper' | 'sticky' | 'chat' | 'sheet' | 'book'}> = ({kind}) => {
  if (kind === 'sticky') return <div style={{width: 150, height: 150, background: 'linear-gradient(160deg,#f6c9d4,#eeaebf)', boxShadow: '0 20px 50px rgba(0,0,0,0.55)'}} />;
  if (kind === 'chat')
    return (
      <div style={{width: 200, height: 170, borderRadius: 14, background: '#e9e3d8', boxShadow: '0 20px 50px rgba(0,0,0,0.55)', padding: 12}}>
        <div style={{width: 120, height: 26, borderRadius: 10, background: '#fff', marginBottom: 10}} />
        <div style={{width: 110, height: 26, borderRadius: 10, background: '#d9fdd3', marginLeft: 70}} />
      </div>
    );
  if (kind === 'sheet')
    return (
      <div style={{width: 240, height: 170, background: '#fff', borderRadius: 6, boxShadow: '0 20px 50px rgba(0,0,0,0.55)', overflow: 'hidden'}}>
        <div style={{height: 22, background: '#1e7b4b'}} />
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{height: 1.5, background: '#dfe5df', marginTop: 24}} />
        ))}
      </div>
    );
  if (kind === 'book') return <div style={{width: 200, height: 140, borderRadius: 8, background: 'linear-gradient(160deg,#3a5b9a,#2c4778)', boxShadow: '0 20px 50px rgba(0,0,0,0.55)'}} />;
  return (
    <div style={{...paper(170, 220), padding: 18}}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{height: 7, borderRadius: 4, width: [110, 80, 120, 90, 100][i], background: 'rgba(27,24,20,0.28)', marginTop: 18}} />
      ))}
      <Sheen />
    </div>
  );
};
