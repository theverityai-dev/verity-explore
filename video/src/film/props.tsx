import React from 'react';
import {rnd} from './engine';

/* Physical retail objects, drawn as lit paper and screen. Cream paper is a prop material (not brand UI),
   so it is defined here; everything on the Verity interface uses the site tokens. */
const PAPER = '#ece5d6';
const INK = '#1b1814';
const INK_SOFT = 'rgba(27,24,20,0.55)';

const sheen = (angle = 115): React.CSSProperties => ({
  position: 'absolute',
  inset: 0,
  borderRadius: 6,
  pointerEvents: 'none',
  background: `linear-gradient(${angle}deg, rgba(255,255,255,0.30), transparent 36%, rgba(0,0,0,0.20) 100%)`,
});

const paper: React.CSSProperties = {
  position: 'relative',
  boxSizing: 'border-box',
  background: `linear-gradient(135deg, #f4eddf 0%, ${PAPER} 55%, #d9d1bf 100%)`,
  color: INK,
  borderRadius: 6,
  boxShadow: '0 40px 90px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.35)',
};

/** Barcode bars, deterministic. */
export const Bars: React.FC<{w: number; h: number; color: string; seed?: number; p?: number}> = ({w, h, color, seed = 0, p = 1}) => {
  const n = 46;
  const ws = Array.from({length: n}).map((_, i) => 1 + Math.floor(rnd(i + seed) * 4));
  const total = ws.reduce((a, b) => a + b * 2, 0);
  const unit = w / total;
  let x = 0;
  return (
    <svg width={w} height={h}>
      {ws.map((b, i) => {
        const bx = x;
        x += b * 2 * unit;
        const show = Math.max(0, Math.min(1, p * 1.4 - (bx / w) * 0.4));
        return <rect key={i} x={bx} y={0} width={b * unit} height={h * show} style={{fill: color}} />;
      })}
    </svg>
  );
};

const zigzag = (() => {
  const pts = ['0% 0%', '100% 0%'];
  const n = 24;
  for (let i = n; i >= 0; i--) pts.push(`${(i / n) * 100}% ${i % 2 ? 98.4 : 100}%`);
  return `polygon(${pts.join(',')})`;
})();

export const Receipt: React.FC<{h?: number}> = ({h = 640}) => (
  <div style={{...paper, width: 440, height: h, padding: '34px 36px', clipPath: zigzag, borderRadius: 0}}>
    <div style={{fontSize: 20, letterSpacing: '0.2em', fontWeight: 600}}>STORE 2</div>
    <div style={{fontSize: 17, color: INK_SOFT, marginTop: 4, letterSpacing: '0.06em'}}>21:40 · POS 03</div>
    <div style={{marginTop: 26}}>
      {[['Oat Milk 1L ×2', '₹118'], ['Atta 5kg', '₹285'], ['Detergent 1kg', '₹192'], ['Dal 1kg', '₹144'], ['Basket · 38 items', '']].map(([a, b]) => (
        <div key={a} style={{display: 'flex', justifyContent: 'space-between', fontSize: 23, padding: '8px 0', fontVariantNumeric: 'tabular-nums', color: b ? INK : INK_SOFT}}>
          <span>{a}</span>
          <span>{b}</span>
        </div>
      ))}
    </div>
    <div style={{borderTop: `2px dashed rgba(27,24,20,0.3)`, marginTop: 22, paddingTop: 20}}>
      <div style={{fontSize: 17, letterSpacing: '0.2em', color: INK_SOFT}}>TOTAL</div>
      <div style={{fontSize: 84, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.05, fontVariantNumeric: 'tabular-nums'}}>₹4,850</div>
    </div>
    <div style={{position: 'absolute', left: 36, bottom: 46, opacity: 0.8}}>
      <Bars w={368} h={52} color={INK} seed={3} />
    </div>
    <div style={sheen(100)} />
  </div>
);

/** A message pane that emits its own light. */
export const Message: React.FC = () => (
  <div
    style={{
      position: 'relative',
      width: 560,
      height: 150,
      boxSizing: 'border-box',
      padding: '26px 34px',
      borderRadius: '34px 34px 34px 8px',
      background: 'linear-gradient(160deg, #26324a, #19222f)',
      boxShadow: '0 0 110px rgba(120,170,255,0.20), 0 30px 70px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.14)',
      color: '#f1ece1',
    }}
  >
    <div style={{fontSize: 40, fontWeight: 500, letterSpacing: '-0.01em'}}>Sir stock aa gaya?</div>
    <div style={{fontSize: 19, color: 'rgba(241,236,225,0.55)', marginTop: 10}}>21:42 · Read</div>
  </div>
);

export const SheetPaper: React.FC<{lit?: number}> = ({lit = 1}) => {
  const rows: [string, string, string][] = [['Oat Milk 1L', '412', '60'], ['Atta 5kg', '96', '40'], ['Rice 10kg', '58', '30'], ['Dal 1kg', '144', '50'], ['Salt 1kg', '210', '40'], ['Sugar 1kg', '88', '30']];
  return (
    <div style={{...paper, width: 720, height: 500, overflow: 'hidden'}}>
      <div style={{height: 54, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(27,24,20,0.18)', background: 'rgba(27,24,20,0.05)'}}>
        {[0, 1, 2].map((d) => (
          <i key={d} style={{width: 11, height: 11, borderRadius: 6, background: 'rgba(27,24,20,0.22)', display: 'inline-block'}} />
        ))}
        <span style={{marginLeft: 12, fontSize: 21, color: INK_SOFT}}>stock_final_v3</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', fontSize: 26, fontVariantNumeric: 'tabular-nums'}}>
        {['Item', 'Qty', 'Min'].map((h) => (
          <div key={h} style={{padding: '14px 24px', color: INK_SOFT, fontWeight: 500, borderBottom: '1px solid rgba(27,24,20,0.2)'}}>{h}</div>
        ))}
        {rows.map((r, i) =>
          r.map((c, j) => (
            <div
              key={`${i}-${j}`}
              style={{padding: '14px 24px', borderBottom: '1px solid rgba(27,24,20,0.1)', background: i === 0 && j === 1 ? `rgba(10,132,255,${0.28 * lit})` : undefined, fontWeight: i === 0 && j === 1 ? 600 : 400}}
            >
              {c}
            </div>
          )),
        )}
      </div>
      <div style={sheen(120)} />
    </div>
  );
};

export const ShelfTag: React.FC = () => (
  <div style={{...paper, width: 560, height: 330, padding: '30px 38px', background: 'linear-gradient(135deg, #f7f3ea, #e9e3d3)'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 19, letterSpacing: '0.18em', color: INK_SOFT, fontWeight: 600}}>
      <span>SHELF 4B · AISLE 4</span>
      <span>STORE 2</span>
    </div>
    <div style={{fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 10}}>Oat Milk 1L</div>
    <div style={{display: 'flex', alignItems: 'baseline', gap: 18}}>
      <div style={{fontSize: 156, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1.05, fontVariantNumeric: 'tabular-nums'}}>378</div>
      <div style={{fontSize: 23, color: INK_SOFT}}>counted 21:35</div>
    </div>
    <div style={{position: 'absolute', right: 38, bottom: 26, opacity: 0.8}}>
      <Bars w={200} h={34} color={INK} seed={11} />
    </div>
    <div style={sheen(110)} />
  </div>
);
