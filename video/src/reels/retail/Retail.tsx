import React from 'react';
import {inOut, lerp, outX, popT, seg} from '../../shared/timeline';
import {Check, Label, Mark, Words} from '../../trailer/ui';
import {RETAIL, typesFor} from '../content';
import {Barcode, Glass, RFPS, ReelAudio, ReelStage, Sfx} from '../kit';
import {useCurrentFrame} from 'remotion';

export const RETAIL_SECONDS = 30;
export const RETAIL_DURATION = RETAIL_SECONDS * RFPS;

const TYPES = typesFor('retail-commerce');
const P = RETAIL.panel;
const FLOW = RETAIL.workflows[0];
const STEPS = FLOW.steps.slice(0, 4);

const PX = 60; // panel origin on screen
const PY = 210;
const ROW_Y = (i: number) => 510 + i * 150;

const PAPER: React.CSSProperties = {background: '#fff', border: '1px solid var(--line)', boxShadow: 'var(--elev-mid)', boxSizing: 'border-box'};

/* ---------------------------------------------------------------------------
   The business's own world: a POS receipt, a chat, a sheet, a shelf tag.
   -------------------------------------------------------------------------- */
const Receipt: React.FC<{t: number}> = ({t}) => {
  const p = seg(t, 0.15, 1.7, outX);
  const lines: [string, string][] = [['Oat Milk 1L ×2', '₹118'], ['Atta 5kg', '₹285'], ['Detergent 1kg', '₹192'], ['Basket · 38 items', '']];
  return (
    <div style={{...PAPER, width: 430, height: 480, borderRadius: 10, padding: '28px 30px', clipPath: `inset(0 0 ${(1 - p) * 100}% 0)`}}>
      <Label style={{fontSize: 17}}>Store 2 · 21:40</Label>
      <div style={{marginTop: 18}}>
        {lines.map(([a, b]) => (
          <div key={a} style={{display: 'flex', justifyContent: 'space-between', fontSize: 24, padding: '7px 0', fontVariantNumeric: 'tabular-nums', color: b ? 'var(--ink)' : 'var(--ink-muted)'}}>
            <span>{a}</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
      <div style={{borderTop: '2px dashed var(--line)', marginTop: 20, paddingTop: 20}}>
        <Label style={{fontSize: 17}}>Total</Label>
        <div style={{fontSize: 84, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.05, fontVariantNumeric: 'tabular-nums'}}>₹4,850</div>
      </div>
    </div>
  );
};

const Chat: React.FC = () => (
  <div style={{...PAPER, width: 440, height: 130, borderRadius: '30px 30px 30px 8px', padding: '22px 30px'}}>
    <div style={{fontSize: 36, fontWeight: 500, letterSpacing: '-0.01em'}}>Sir stock aa gaya?</div>
    <div style={{fontSize: 18, color: 'var(--ink-muted)', marginTop: 8}}>21:42 · Read</div>
  </div>
);

const Sheet: React.FC = () => {
  const rows: [string, string, string][] = [['Oat Milk 1L', '412', '60'], ['Atta 5kg', '96', '40'], ['Rice 10kg', '58', '30'], ['Dal 1kg', '144', '50'], ['Salt 1kg', '210', '40']];
  return (
    <div style={{...PAPER, width: 520, height: 340, borderRadius: 12, overflow: 'hidden'}}>
      <div style={{height: 44, display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px', borderBottom: '1px solid var(--line)', background: 'var(--base-alt)'}}>
        {[0, 1, 2].map((d) => (
          <i key={d} style={{width: 10, height: 10, borderRadius: 5, background: 'var(--line)', display: 'inline-block'}} />
        ))}
        <span style={{marginLeft: 10, fontSize: 18, color: 'var(--ink-muted)'}}>stock_final_v3</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', fontSize: 22, fontVariantNumeric: 'tabular-nums'}}>
        {['Item', 'Qty', 'Min'].map((h) => (
          <div key={h} style={{padding: '12px 18px', color: 'var(--ink-muted)', fontWeight: 500, borderBottom: '1px solid var(--line)'}}>{h}</div>
        ))}
        {rows.map((r, i) =>
          r.map((c, j) => (
            <div key={`${i}-${j}`} style={{padding: '12px 18px', borderBottom: '1px solid var(--line-hair)', background: i === 0 && j === 1 ? 'var(--accent-a14)' : undefined, fontWeight: i === 0 && j === 1 ? 600 : 400}}>{c}</div>
          )),
        )}
      </div>
    </div>
  );
};

const Tag: React.FC = () => (
  <div style={{...PAPER, width: 470, height: 250, borderRadius: 12, padding: '24px 30px'}}>
    <Label style={{fontSize: 17}}>Shelf · Aisle 4</Label>
    <div style={{fontSize: 30, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 6}}>Oat Milk 1L</div>
    <div style={{display: 'flex', alignItems: 'baseline', gap: 16}}>
      <div style={{fontSize: 110, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums'}}>378</div>
      <div style={{fontSize: 22, color: 'var(--ink-muted)'}}>counted 21:35</div>
    </div>
  </div>
);

const OBJECTS: {key: string; cx: number; cy: number; w: number; h: number; rot: number; at: number; node: (t: number) => React.ReactNode}[] = [
  {key: 'receipt', cx: 330, cy: 800, w: 430, h: 480, rot: -3, at: 0.15, node: (t) => <Receipt t={t} />},
  {key: 'chat', cx: 735, cy: 640, w: 440, h: 130, rot: 2, at: 1.2, node: () => <Chat />},
  {key: 'sheet', cx: 730, cy: 1010, w: 520, h: 340, rot: -1.5, at: 2.2, node: () => <Sheet />},
  {key: 'tag', cx: 300, cy: 1330, w: 470, h: 250, rot: 2.5, at: 3.4, node: () => <Tag />},
];
const TARGET = [540, 880];

const World: React.FC<{t: number}> = ({t}) => {
  if (t > 7.8) return null;
  const amp = (0.5 + 1.5 * seg(t, 1.5, 5, outX)) * (1 - seg(t, 5.4, 6.0));
  return (
    <>
      {OBJECTS.map((o, i) => {
        const e = seg(t, 6.02 + i * 0.07, 7.45 + i * 0.07, inOut);
        const pop = popT(t, o.at);
        const arc = Math.sin(Math.PI * e) * (i % 2 ? 90 : -90);
        const dx = (TARGET[0] - o.cx) * e + arc;
        const dy = (TARGET[1] - o.cy) * e;
        const jx = Math.sin(t * 47 + i * 2) * amp;
        const jy = Math.cos(t * 53 + i) * amp;
        return (
          <div
            key={o.key}
            style={{
              position: 'absolute',
              left: o.cx - o.w / 2,
              top: o.cy - o.h / 2,
              width: o.w,
              height: o.h,
              opacity: Math.min(1, pop * 1.6) * (1 - seg(e, 0.78, 1)),
              transform: `translate(${dx + jx}px, ${dy + jy}px) rotate(${o.rot * (1 - e)}deg) scale(${lerp(0.85, 1, pop) * lerp(1, 0.25, e)})`,
            }}
          >
            {o.node(t)}
          </div>
        );
      })}
      <div style={{position: 'absolute', left: 0, right: 0, top: 1175, display: 'flex', justifyContent: 'center', opacity: seg(t, 4.4, 4.9) * (1 - seg(t, 5.7, 6.1))}}>
        <span style={{fontSize: 30, fontWeight: 600, color: 'var(--accent-text)', background: 'var(--accent-a14)', border: '1px solid var(--accent-a40)', padding: '10px 26px', borderRadius: 999}}>≠ 34 units apart</span>
      </div>
    </>
  );
};

/* ---------------------------------------------------------------------------
   Reveal: the mark, "One record.", the domain chip.
   -------------------------------------------------------------------------- */
const Reveal: React.FC<{t: number}> = ({t}) => {
  if (t < 7.2 || t > 10.5) return null;
  const draw = seg(t, 7.6, 8.8, inOut);
  const fill = seg(t, 8.5, 9.0);
  const ring = seg(t, 7.4, 8.5);
  const out = seg(t, 9.7, 10.3, inOut);
  const chip = popT(t, 9.0);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateY(${-out * 50}px)`}}>
      {ring > 0 && ring < 1 ? (
        <div style={{position: 'absolute', left: 540 - 380 * ring, top: 780 - 380 * ring, width: 760 * ring, height: 760 * ring, borderRadius: '50%', border: '2px solid var(--accent)', opacity: 0.5 * (1 - ring)}} />
      ) : null}
      <div style={{position: 'absolute', left: 0, right: 0, top: 640, display: 'flex', justifyContent: 'center'}}>
        <Mark height={260} draw={draw} fill={fill} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 960, display: 'flex', justifyContent: 'center'}}>
        <Words text="One record." t={t} at={8.52} size={132} align="center" />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 1190, display: 'flex', justifyContent: 'center', opacity: chip, transform: `translateY(${(1 - chip) * 20}px)`}}>
        <Glass radius={999} style={{padding: '16px 34px'}}>
          <Label style={{color: 'var(--ink)', fontSize: 22}}>One platform · For Retail &amp; Commerce</Label>
        </Glass>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------------
   Product: the real retail-stores panel, two real flows.
   -------------------------------------------------------------------------- */
const Cursor: React.FC<{x: number; y: number; o: number}> = ({x, y, o}) => (
  <svg width={46} height={46} viewBox="0 0 24 24" style={{position: 'absolute', left: x, top: y, opacity: o, filter: 'drop-shadow(0 4px 8px rgba(15,17,21,.35))'}}>
    <path d="M4 2l15 9-6.5 1.5L9 19z" fill="#fff" stroke="#0f1115" strokeWidth={1.3} strokeLinejoin="round" />
  </svg>
);

const Ripple: React.FC<{x: number; y: number; p: number}> = ({x, y, p}) =>
  p > 0 && p < 1 ? (
    <div style={{position: 'absolute', left: x - 50 * p, top: y - 50 * p, width: 100 * p, height: 100 * p, borderRadius: '50%', border: '3px solid var(--accent)', opacity: 1 - p}} />
  ) : null;

const INNER: React.CSSProperties = {background: 'rgba(255,255,255,0.74)', border: '1px solid var(--line)', borderRadius: 16, boxSizing: 'border-box'};

const Product: React.FC<{t: number}> = ({t}) => {
  if (t < 9.9 || t > 23.6) return null;
  const inP = seg(t, 10.02, 11.1, outX);
  const outP = seg(t, 22.7, 23.4, inOut);
  const below = Math.round(37 - 12 * seg(t, 16.52, 17.52, inOut));
  const flash = seg(t, 16.52, 16.8) * (1 - 0.7 * seg(t, 16.8, 18));
  const selA = seg(t, 12.52, 12.9);
  const selB = seg(t, 18.52, 18.9);
  const sheetA = seg(t, 12.7, 13.4, outX) * (1 - seg(t, 17.7, 18.3, inOut));
  const sheetB = seg(t, 18.8, 19.5, outX) * (1 - seg(t, 22.0, 22.6, inOut));
  const m = seg(t, 20.02, 20.9, inOut);
  const toastA = popT(t, 17.52) * (1 - seg(t, 19.0, 19.5));
  const toastB = popT(t, 21.0) * (1 - seg(t, 22.5, 22.9));

  const curA = seg(t, 11.5, 12.5, inOut);
  const curB = seg(t, 18.0, 18.5, inOut);
  const cA: [number, number] = [lerp(900, 420, curA), lerp(420, PY + ROW_Y(0) + 69, curA)];
  const cB: [number, number] = [lerp(700, 430, curB), lerp(PY + ROW_Y(0) + 69, PY + ROW_Y(2) + 69, curB)];
  const cursor = t < 18.0 ? cA : cB;
  const curO = t < 18.0 ? seg(t, 11.3, 11.6) * (1 - seg(t, 13.4, 13.8)) : seg(t, 17.9, 18.1) * (1 - seg(t, 19.4, 19.8));

  return (
    <>
      <div style={{position: 'absolute', left: PX, top: PY, width: 960, height: 1240, opacity: inP * (1 - outP), transform: `translateY(${(1 - inP) * 170 - outP * 40}px) scale(${lerp(1, 1.02, seg(t, 10, 22)) * lerp(1, 0.95, outP)})`, filter: outP > 0 ? `blur(${outP * 8}px)` : undefined}}>
        <Glass radius={32} blur={30} style={{width: 960, height: 1240, background: 'rgba(255,255,255,0.58)'}}>
          <div style={{position: 'absolute', left: 32, top: 24, display: 'flex', alignItems: 'center', gap: 16}}>
            <Mark height={30} />
            <Label style={{color: 'var(--ink)', fontSize: 20}}>Verity / {P.title} · {P.meta}</Label>
          </div>
          <div style={{position: 'absolute', right: 32, top: 30, display: 'flex', alignItems: 'center', gap: 10}}>
            <span style={{width: 9, height: 9, borderRadius: 5, background: 'var(--accent)', opacity: 0.55 + 0.45 * Math.sin(t * 2.2)}} />
            <Label style={{fontSize: 18}}>Live</Label>
          </div>

          {P.metrics.map((mt, i) => {
            const pop = popT(t, 10.5 + i * 0.12);
            const isBelow = i === 3;
            return (
              <div
                key={mt.label}
                style={{
                  ...INNER,
                  position: 'absolute',
                  left: 32 + (i % 2) * 458,
                  top: 96 + Math.floor(i / 2) * 170,
                  width: 438,
                  height: 150,
                  padding: '18px 26px',
                  opacity: pop,
                  transform: `translateY(${(1 - pop) * 24}px)`,
                  borderColor: isBelow && flash > 0.02 ? 'var(--accent)' : 'var(--line)',
                  boxShadow: isBelow && flash > 0.02 ? `0 0 0 ${flash * 8}px var(--accent-a14)` : undefined,
                }}
              >
                <div style={{fontSize: 22, color: 'var(--ink-muted)', fontWeight: 500}}>{mt.label}</div>
                <div style={{fontSize: 56, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: 2, fontVariantNumeric: 'tabular-nums'}}>{isBelow ? below : mt.value}</div>
                <div style={{fontSize: 18, color: 'var(--accent-text)'}}>{mt.note}</div>
              </div>
            );
          })}

          <div style={{position: 'absolute', left: 32, right: 32, top: 442, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: seg(t, 11.3, 11.8)}}>
            <Label style={{color: 'var(--ink)', fontSize: 20}}>{P.rowsLabel}</Label>
            <span style={{fontSize: 20, fontWeight: 600, color: 'var(--accent-text)', background: 'var(--accent-a14)', padding: '4px 14px', borderRadius: 999}}>4</span>
          </div>

          {P.rows.slice(0, 4).map((r, i) => {
            const inR = seg(t, 11.5 + i * 0.22, 12.1 + i * 0.22);
            const hot = (i === 0 && selA > 0.02 && t < 18.3) || (i === 2 && selB > 0.02);
            return (
              <div
                key={r.name}
                style={{
                  ...INNER,
                  position: 'absolute',
                  left: 32,
                  top: ROW_Y(i),
                  width: 896,
                  height: 138,
                  padding: '24px 28px',
                  background: hot ? 'var(--accent-a14)' : INNER.background,
                  borderColor: hot ? 'var(--accent)' : 'var(--line)',
                  opacity: inR * (1 - 0.8 * Math.max(i >= 1 ? sheetA : 0, i === 3 ? sheetB : 0)),
                  transform: `translateX(${(1 - inR) * 50}px)`,
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                  <span style={{width: 12, height: 12, borderRadius: 6, background: 'var(--accent)', flex: 'none'}} />
                  <div style={{fontSize: 30, fontWeight: 500, letterSpacing: '-0.015em', whiteSpace: 'nowrap'}}>{r.name}</div>
                </div>
                <div style={{fontSize: 22, color: 'var(--ink-muted)', marginTop: 10, marginLeft: 28}}>{r.meta}</div>
              </div>
            );
          })}

          {sheetA > 0.01 ? (
            <div style={{position: 'absolute', left: 0, top: 0, width: 960, height: 1240, overflow: 'hidden', borderRadius: 32, pointerEvents: 'none'}}>
            <div style={{position: 'absolute', left: 24, top: 660, width: 912, height: 556, transform: `translateY(${(1 - sheetA) * 620}px)`}}>
              <Glass radius={26} blur={34} style={{width: 912, height: 556, background: 'rgba(255,255,255,0.93)'}}>
                <div style={{position: 'absolute', left: 32, top: 28}}>
                  <div style={{fontSize: 38, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1}}>{FLOW.name}</div>
                  <div style={{fontSize: 22, color: 'var(--ink-muted)', marginTop: 6}}>12 fast-moving lines · two suppliers</div>
                </div>
                {STEPS.map((s, k) => {
                  const cp = seg(t, 13.52 + k, 14.0 + k);
                  return (
                    <div
                      key={s}
                      style={{
                        ...INNER,
                        position: 'absolute',
                        left: 28,
                        top: 128 + k * 104,
                        width: 856,
                        height: 92,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 18,
                        padding: '0 26px',
                        borderColor: cp > 0.3 ? 'var(--accent-a40)' : 'var(--line)',
                        opacity: 0.45 + 0.55 * seg(t, 13.3 + k * 0.2, 13.7 + k * 0.2),
                      }}
                    >
                      <Check p={cp} size={32} />
                      <div style={{fontSize: 26, fontWeight: 500, letterSpacing: '-0.01em'}}>{s}</div>
                    </div>
                  );
                })}
              </Glass>
            </div>
            </div>
          ) : null}

          {sheetB > 0.01 ? (
            <div style={{position: 'absolute', left: 0, top: 0, width: 960, height: 1240, overflow: 'hidden', borderRadius: 32, pointerEvents: 'none'}}>
            <div style={{position: 'absolute', left: 24, top: 960, width: 912, height: 256, transform: `translateY(${(1 - sheetB) * 330}px)`}}>
              <Glass radius={26} blur={34} style={{width: 912, height: 256, background: 'rgba(255,255,255,0.93)'}}>
                <div style={{position: 'absolute', left: 32, top: 22}}>
                  <Label style={{color: 'var(--ink)', fontSize: 19}}>Cycle count · Store 2</Label>
                </div>
                {[
                  {k: 'Shelf', n: '378', s: 'Counted', x: 28},
                  {k: 'System', n: '412', s: 'Recorded', x: 464},
                ].map((c, i) => {
                  const merged = i === 1 && m > 0.5;
                  const left = i === 0 ? c.x : lerp(c.x, 251, m);
                  return (
                    <div
                      key={c.k}
                      style={{
                        ...INNER,
                        position: 'absolute',
                        left,
                        top: 68,
                        width: 420,
                        height: 160,
                        padding: '18px 28px',
                        opacity: i === 0 ? 1 - m : 1,
                        borderColor: merged ? 'var(--accent)' : 'var(--line)',
                        background: merged ? 'var(--accent-a14)' : INNER.background,
                      }}
                    >
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{fontSize: 22, color: 'var(--ink-muted)', fontWeight: 500}}>{merged ? 'One number' : c.k}</div>
                        {merged ? <Check p={seg(t, 20.5, 21.0)} size={30} /> : null}
                      </div>
                      <div style={{fontSize: 84, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.05, fontVariantNumeric: 'tabular-nums'}}>{i === 0 ? c.n : '412'}</div>
                      <div style={{fontSize: 20, color: 'var(--ink-muted)'}}>{merged ? 'Counted, adjusted, recorded' : c.s}</div>
                    </div>
                  );
                })}
                <div style={{position: 'absolute', left: 0, right: 0, top: 112, textAlign: 'center', fontSize: 52, fontWeight: 300, color: 'var(--ink-muted)', opacity: 1 - seg(t, 19.9, 20.4)}}>≠</div>
              </Glass>
            </div>
            </div>
          ) : null}
        </Glass>
      </div>

      {[
        {o: toastA, text: 'Reorder raised · delivers Thursday'},
        {o: toastB, text: 'Count reconciled · recorded once'},
      ].map((to, i) =>
        to.o > 0.01 ? (
          <div key={i} style={{position: 'absolute', left: 150, top: 1480, width: 780, opacity: to.o, transform: `translateY(${(1 - to.o) * 22}px)`}}>
            <Glass radius={999} blur={26} style={{padding: '0 36px', height: 84}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 18, height: 84}}>
                <Check p={to.o} size={34} />
                <div style={{fontSize: 28, fontWeight: 500, letterSpacing: '-0.01em'}}>{to.text}</div>
              </div>
            </Glass>
          </div>
        ) : null,
      )}

      <Ripple x={cursor[0]} y={cursor[1]} p={t < 18.0 ? seg(t, 12.52, 13.2) : seg(t, 18.52, 19.2)} />
      <Cursor x={cursor[0]} y={cursor[1]} o={curO} />
    </>
  );
};

/* ---------------------------------------------------------------------------
   Breadth and end card.
   -------------------------------------------------------------------------- */
const Breadth: React.FC<{t: number}> = ({t}) => {
  if (t < 23.0 || t > 27.8) return null;
  const out = seg(t, 27.0, 27.6, inOut);
  const k = seg(t, 24.6, 25.8, outX);
  const num = Math.round(TYPES.length * k);
  const label = seg(t, 25.0, 25.7, outX);
  const one = seg(t, 26.0, 26.7, outX);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 250, display: 'flex', justifyContent: 'center', opacity: seg(t, 23.1, 23.6)}}>
        <Label style={{color: 'var(--ink)', fontSize: 26}}>Retail &amp; Commerce</Label>
      </div>
      <div style={{position: 'absolute', left: 90, right: 90, top: 340, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16}}>
        {TYPES.map((n, i) => {
          const p = popT(t, 23.3 + i * 0.075);
          return (
            <div key={n} style={{opacity: p, transform: `translateY(${(1 - p) * 26}px) scale(${lerp(0.92, 1, p)})`}}>
              <Glass radius={999} blur={22} style={{padding: '0 30px', height: 74}}>
                <div style={{height: 74, display: 'flex', alignItems: 'center', fontSize: 32, fontWeight: 400, letterSpacing: '-0.01em', whiteSpace: 'nowrap'}}>{n}</div>
              </Glass>
            </div>
          );
        })}
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 1090, textAlign: 'center'}}>
        <div style={{fontSize: 230, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--accent)', fontVariantNumeric: 'tabular-nums', opacity: seg(t, 24.5, 24.9)}}>{num}</div>
        <div style={{fontSize: 58, fontWeight: 300, letterSpacing: '-0.03em', opacity: label, transform: `translateY(${(1 - label) * 20}px)`}}>business types.</div>
        <div style={{fontSize: 58, fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--accent-text)', opacity: one, transform: `translateY(${(1 - one) * 20}px)`}}>One Verity.</div>
      </div>
    </div>
  );
};

const End: React.FC<{t: number}> = ({t}) => {
  if (t < 27.0) return null;
  const draw = seg(t, 27.2, 28.0, inOut);
  const fill = seg(t, 27.8, 28.3);
  const word = seg(t, 28.0, 28.7, outX);
  const url = popT(t, 28.8);
  const bar = seg(t, 28.6, 29.5, inOut);
  const scan = seg(t, 29.2, 29.8, inOut);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 420, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30}}>
        {t >= 27.15 ? <Mark height={150} draw={draw} fill={fill} /> : <div style={{width: 120, height: 150}} />}
        <div style={{overflow: 'hidden', paddingBottom: 20, marginBottom: -20}}>
          <div style={{fontSize: 140, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, opacity: word, transform: `translateX(${(1 - word) * -50}px)`}}>verity</div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 72, right: 72, top: 650, display: 'flex', justifyContent: 'center'}}>
        <Words text="Retail on one record." t={t} at={28.4} size={88} align="center" />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 900, display: 'flex', justifyContent: 'center', opacity: url, transform: `translateY(${(1 - url) * 20}px)`}}>
        <Glass radius={999} style={{padding: '0 40px', height: 80}}>
          <div style={{height: 80, display: 'flex', alignItems: 'center', fontSize: 32, fontWeight: 500}}>theverityai.xyz</div>
        </Glass>
      </div>
      <div style={{position: 'absolute', left: 260, top: 1190}}>
        <Barcode width={560} height={150} p={bar} />
        <div style={{position: 'absolute', left: scan * 560, top: -14, width: 3, height: 178, background: 'var(--accent)', opacity: scan > 0 && scan < 1 ? 0.9 : 0}} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 1390, display: 'flex', justifyContent: 'center', opacity: seg(t, 29.0, 29.5)}}>
        <Label style={{fontSize: 20}}>01 / 09 · Retail &amp; Commerce</Label>
      </div>
    </div>
  );
};

const SFX: Sfx[] = [
  {file: 'select_008.ogg', at: 0.4, vol: 0.4},
  {file: 'select_008.ogg', at: 0.8, vol: 0.4},
  {file: 'select_008.ogg', at: 1.2, vol: 0.4},
  {file: 'drop_001.ogg', at: 1.2, vol: 0.45},
  {file: 'drop_001.ogg', at: 2.2, vol: 0.45},
  {file: 'drop_001.ogg', at: 3.4, vol: 0.45},
  {file: 'impactSoft_medium_000.ogg', at: 8.52, vol: 0.6},
  {file: 'impactSoft_medium_000.ogg', at: 10.02, vol: 0.4},
  {file: 'click_003.ogg', at: 12.52, vol: 0.9},
  {file: 'select_008.ogg', at: 13.52, vol: 0.5},
  {file: 'select_008.ogg', at: 14.52, vol: 0.5},
  {file: 'select_008.ogg', at: 15.52, vol: 0.5},
  {file: 'select_008.ogg', at: 16.52, vol: 0.5},
  {file: 'drop_001.ogg', at: 17.52, vol: 0.45},
  {file: 'click_003.ogg', at: 18.52, vol: 0.9},
  {file: 'select_008.ogg', at: 20.02, vol: 0.55},
  {file: 'drop_001.ogg', at: 21.02, vol: 0.45},
  {file: 'impactBell_heavy_000.ogg', at: 28.02, vol: 0.42},
];

/** Reel 01 of 9. Screenplay: docs/series-scripts.md (Retail & Commerce). Content: content/businesses/retail-stores.js. */
export const Retail: React.FC = () => {
  const t = useCurrentFrame() / RFPS;
  return (
    <ReelStage t={t}>
      <div style={{position: 'absolute', left: 90, top: 220, width: 900, opacity: 1 - seg(t, 5.3, 5.9)}}>
        <Words text="The shelf says one thing. The sheet says another." t={t} at={0.15} size={76} />
      </div>
      {t >= 9.2 && t <= 23.6 ? (
        <>
          <div style={{position: 'absolute', left: -140, top: 330, width: 640, height: 640, borderRadius: '50%', background: 'var(--accent-a14)', filter: 'blur(90px)', opacity: seg(t, 9.2, 10.4) * (1 - seg(t, 22.7, 23.4))}} />
          <div style={{position: 'absolute', left: 600, top: 1000, width: 640, height: 640, borderRadius: '50%', background: 'var(--accent-a14)', filter: 'blur(90px)', opacity: seg(t, 9.2, 10.4) * (1 - seg(t, 22.7, 23.4))}} />
          <div style={{position: 'absolute', left: 560, top: 280, opacity: seg(t, 9.4, 10.4) * (1 - seg(t, 22.7, 23.4)), transform: 'scale(1.1) rotate(4deg)'}}>
            <Sheet />
          </div>
          <div style={{position: 'absolute', left: 30, top: 1020, opacity: seg(t, 9.4, 10.4) * (1 - seg(t, 22.7, 23.4)), transform: 'scale(1.1) rotate(-4deg)'}}>
            <Tag />
          </div>
        </>
      ) : null}
      <World t={t} />
      <Reveal t={t} />
      <Product t={t} />
      <Breadth t={t} />
      <End t={t} />
      <ReelAudio seconds={RETAIL_SECONDS} sfx={SFX} />
    </ReelStage>
  );
};
