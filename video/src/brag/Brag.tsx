import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {inOut, lerp, outX, popT, seg, track} from '../shared/timeline';
import {Card, Check, Label, Mark, Words} from '../trailer/ui';

const {fontFamily} = loadFont('normal', {weights: ['300', '400', '500', '600'], subsets: ['latin']});

export const BRAG_FPS = 60;
export const BRAG_SECONDS = 25;
export const BRAG_DURATION = BRAG_FPS * BRAG_SECONDS;

/* Source: content/businesses/retail-stores.js (illustrative figures, as on the site). */
const METRICS = [
  {label: 'Sales today', value: '₹4.86 L', note: '312 transactions'},
  {label: 'Stock value', value: '₹1.4 Cr', note: 'across 3 stores'},
  {label: 'Not moved 90d', value: '₹22 L', note: '410 lines'},
  {label: 'Below reorder', value: '', note: 'lines, 12 fast-moving'},
];
const ROWS = [
  {name: '12 fast-moving lines below reorder point', meta: 'Two suppliers · both deliver Thursday'},
  {name: '₹22 L in stock that has not moved in 90 days', meta: 'Concentrated in two categories'},
  {name: 'Store 2 count differs from system by 34 units', meta: 'Since last cycle count'},
  {name: 'Supplier price increase not reflected in retail', meta: '9 lines · margin down'},
];
const STEPS = ['Draft PO · 12 lines', 'Approved', 'Sent · delivers Thursday'];

const APP = {x: 160, y: 150, w: 1600, h: 800};
const LIST = {x: 28, y: 228, w: 940, h: 520};
const SIDE = {x: 988, y: 228, w: 584, h: 520};

/* ---- Scene 1: the disagreement ---- */
const Hook: React.FC<{t: number}> = ({t}) => {
  if (t > 6.2) return null;
  const merge = seg(t, 4.7, 5.8, inOut);
  const opacity = 1 - seg(t, 4.75, 5.3);
  const cards = [
    {k: 'Shelf', n: 378, sub: 'Store 2 · counted', x: 600, at: 1.5},
    {k: 'Sheet', n: 412, sub: 'System · recorded', x: 1320, at: 2.0},
  ];
  const jitter = t > 2.6 ? Math.sin(t * 52) * 1.6 * (1 - seg(t, 4.2, 4.7)) : 0;
  return (
    <>
      <div style={{position: 'absolute', left: 120, top: 104, width: 1180}}>
        <Words text="The shelf says one thing. The sheet says another." t={t} at={0.4} size={84} out={4.5} />
      </div>
      {cards.map((c, i) => {
        const pop = popT(t, c.at);
        const x = lerp(c.x, 960, merge);
        return (
          <Card
            key={c.k}
            style={{
              position: 'absolute',
              left: x - 230,
              top: 440,
              width: 460,
              height: 290,
              padding: '30px 36px',
              boxShadow: 'var(--elev-mid)',
              opacity: pop * opacity,
              transform: `translateY(${(1 - pop) * -90 + (i ? -jitter : jitter)}px) scale(${lerp(1, 0.6, merge)})`,
            }}
          >
            <Label>{c.k}</Label>
            <div style={{fontSize: 130, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.05, marginTop: 10, fontVariantNumeric: 'tabular-nums'}}>{c.n}</div>
            <div style={{fontSize: 22, color: 'var(--ink-muted)', marginTop: 4}}>{c.sub}</div>
          </Card>
        );
      })}
      <div style={{position: 'absolute', left: 0, right: 0, top: 540, textAlign: 'center', fontSize: 90, fontWeight: 300, color: 'var(--ink-muted)', opacity: seg(t, 2.6, 3.1) * opacity}}>≠</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 790, display: 'flex', justifyContent: 'center', opacity: seg(t, 3.0, 3.5) * opacity}}>
        <span style={{fontSize: 26, fontWeight: 600, color: 'var(--accent-text)', background: 'var(--accent-a14)', border: '1px solid var(--accent-a40)', padding: '8px 22px', borderRadius: 999}}>34 units apart</span>
      </div>
    </>
  );
};

/* ---- Scene 2: one record ---- */
const Reveal: React.FC<{t: number}> = ({t}) => {
  if (t < 5.4 || t > 10.4) return null;
  const draw = seg(t, 5.9, 7.2, inOut);
  const fill = seg(t, 6.9, 7.5);
  const out = seg(t, 9.5, 10.2, inOut);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateY(${-out * 40}px)`}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 230, display: 'flex', justifyContent: 'center'}}>
        <Mark height={230} draw={draw} fill={fill} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 560, display: 'flex', justifyContent: 'center'}}>
        <Words text="One record." t={t} at={7.52} size={150} align="center" />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 790, textAlign: 'center', fontSize: 44, fontWeight: 600, letterSpacing: '-0.03em', opacity: seg(t, 8.6, 9.3)}}>verity</div>
    </div>
  );
};

/* ---- Scene 3: the working flow ---- */
const Flow: React.FC<{t: number}> = ({t}) => {
  if (t < 9.9 || t > 20.4) return null;
  const inP = seg(t, 10.02, 11.1, outX);
  const outP = seg(t, 19.5, 20.3, inOut);
  const scale = track(t, [[10, 0.97], [11.2, 1], [20, 1.045]]);
  const below = Math.round(37 - 12 * seg(t, 14.0, 17.0, inOut));
  const flash = seg(t, 14.0, 14.3) * (1 - 0.7 * seg(t, 14.3, 17.2));
  const cur = seg(t, 12.0, 13.0, inOut);
  const cursor: [number, number] = [lerp(1500, 690, cur), lerp(330, 500, cur)];
  const click = seg(t, 13.02, 13.7);
  const sel = seg(t, 13.05, 13.4);
  const sidePanel = seg(t, 13.3, 13.9);
  const toast = popT(t, 17.52) * (1 - seg(t, 19.2, 19.6));
  return (
    <div style={{position: 'absolute', inset: 0, opacity: inP * (1 - outP), transform: `translateY(${(1 - inP) * 120 - outP * 40}px) scale(${scale})`}}>
      <div style={{position: 'absolute', left: APP.x, top: APP.y, width: APP.w, height: APP.h, borderRadius: 16, background: 'var(--base)', border: '1px solid var(--line)', boxShadow: 'var(--elev-high)', overflow: 'hidden'}}>
        <div style={{height: 52, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid var(--line)', background: 'var(--surface)'}}>
          <Mark height={22} />
          <Label style={{color: 'var(--ink)', fontSize: 17}}>Verity / Store · All stores · Today</Label>
          <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
            <span style={{width: 8, height: 8, borderRadius: 4, background: 'var(--accent)', opacity: 0.55 + 0.45 * Math.sin(t * 2.2)}} />
            <Label style={{fontSize: 16}}>Live</Label>
          </div>
        </div>
        <div style={{position: 'absolute', left: 0, top: 0}}>
          {METRICS.map((m, i) => {
            const pop = popT(t, 10.5 + i * 0.12);
            const isBelow = i === 3;
            return (
              <Card
                key={m.label}
                style={{
                  position: 'absolute',
                  left: 28 + i * 391,
                  top: 80,
                  width: 371,
                  height: 128,
                  padding: '14px 24px',
                  opacity: pop,
                  transform: `translateY(${(1 - pop) * 24}px)`,
                  borderColor: isBelow && flash > 0.02 ? 'var(--accent)' : undefined,
                  boxShadow: isBelow && flash > 0.02 ? `0 0 0 ${flash * 8}px var(--accent-a14)` : undefined,
                }}
              >
                <div style={{fontSize: 19, color: 'var(--ink-muted)', fontWeight: 500}}>{m.label}</div>
                <div style={{fontSize: 42, fontWeight: 500, letterSpacing: '-0.03em', marginTop: 2, lineHeight: 1.15, fontVariantNumeric: 'tabular-nums'}}>{isBelow ? below : m.value}</div>
                <div style={{fontSize: 16, color: 'var(--accent-text)'}}>{m.note}</div>
              </Card>
            );
          })}

          <Card style={{position: 'absolute', left: LIST.x, top: LIST.y, width: LIST.w, height: LIST.h, overflow: 'hidden', opacity: popT(t, 11.0)}}>
            <div style={{height: 60, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--line-hair)'}}>
              <Label style={{color: 'var(--ink)'}}>Needs attention</Label>
              <span style={{fontSize: 17, fontWeight: 600, color: 'var(--accent-text)', background: 'var(--accent-a14)', padding: '4px 12px', borderRadius: 999}}>4</span>
            </div>
            {ROWS.map((r, i) => {
              const inR = seg(t, 11.5 + i * 0.25, 12.1 + i * 0.25);
              const hot = i === 0 && sel > 0.02;
              return (
                <div
                  key={r.name}
                  style={{
                    position: 'absolute',
                    left: 16,
                    right: 16,
                    top: 70 + i * 110,
                    height: 98,
                    boxSizing: 'border-box',
                    padding: '18px 22px',
                    borderRadius: 12,
                    background: hot ? 'var(--accent-a14)' : 'transparent',
                    border: `1px solid ${hot ? 'var(--accent)' : 'var(--line-hair)'}`,
                    opacity: inR,
                    transform: `translateX(${(1 - inR) * 40}px)`,
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                    <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)', flex: 'none'}} />
                    <div style={{fontSize: 26, fontWeight: 500, letterSpacing: '-0.01em', whiteSpace: 'nowrap'}}>{r.name}</div>
                  </div>
                  <div style={{fontSize: 19, color: 'var(--ink-muted)', marginTop: 6, marginLeft: 24}}>{r.meta}</div>
                </div>
              );
            })}
          </Card>

          <Card style={{position: 'absolute', left: SIDE.x, top: SIDE.y, width: SIDE.w, height: SIDE.h, padding: 28, opacity: popT(t, 11.2)}}>
            <Label style={{color: 'var(--ink)'}}>Reorder</Label>
            <div style={{position: 'relative', marginTop: 24}}>
              <div style={{fontSize: 24, color: 'var(--ink-muted)', opacity: 1 - sidePanel}}>Select an item to act on it.</div>
              <div style={{position: 'absolute', left: 0, right: 0, top: 0, opacity: sidePanel, transform: `translateY(${(1 - sidePanel) * 16}px)`}}>
                <div style={{fontSize: 34, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1}}>12 fast-moving lines</div>
                <div style={{fontSize: 19, color: 'var(--ink-muted)', marginTop: 6, marginBottom: 26}}>Two suppliers</div>
                {STEPS.map((s, k) => {
                  const cp = seg(t, 14.02 + k, 14.5 + k);
                  return (
                    <div
                      key={s}
                      style={{
                        height: 76,
                        marginBottom: 12,
                        padding: '0 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                        borderRadius: 12,
                        background: 'var(--surface-elevated)',
                        border: `1px solid ${cp > 0.3 ? 'var(--accent-a40)' : 'var(--line)'}`,
                        opacity: 0.4 + 0.6 * seg(t, 13.6 + k * 0.2, 14.0 + k * 0.2),
                      }}
                    >
                      <Check p={cp} />
                      <div style={{fontSize: 24, fontWeight: 500}}>{s}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        <div
          style={{
            position: 'absolute',
            left: APP.w / 2 - 270,
            top: APP.h - 100,
            width: 540,
            height: 64,
            boxSizing: 'border-box',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            borderRadius: 12,
            background: 'var(--ink)',
            color: 'var(--base)',
            opacity: toast,
            transform: `translateY(${(1 - toast) * 18}px)`,
          }}
        >
          <Check p={toast} size={26} />
          <div style={{fontSize: 22, fontWeight: 500}}>Reorder sent. Recorded once.</div>
        </div>
      </div>

      {click > 0 && click < 1 ? (
        <div style={{position: 'absolute', left: cursor[0] - 44 * click, top: cursor[1] - 44 * click, width: 88 * click, height: 88 * click, borderRadius: '50%', border: '3px solid var(--accent)', opacity: 1 - click}} />
      ) : null}
      <svg width={42} height={42} viewBox="0 0 24 24" style={{position: 'absolute', left: cursor[0], top: cursor[1], opacity: seg(t, 11.8, 12.2) * (1 - seg(t, 15.2, 15.8)), filter: 'drop-shadow(0 4px 8px rgba(15,17,21,.35))'}}>
        <path d="M4 2l15 9-6.5 1.5L9 19z" fill="#fff" stroke="#0f1115" strokeWidth={1.3} strokeLinejoin="round" />
      </svg>
    </div>
  );
};

/* ---- Scene 4: payoff and end card ---- */
const Outro: React.FC<{t: number}> = ({t}) => {
  if (t < 19.9) return null;
  const draw = seg(t, 22.5, 23.2, inOut);
  const fill = seg(t, 23.0, 23.5);
  const word = seg(t, 23.0, 23.7, outX);
  const url = popT(t, 24.0);
  return (
    <>
      <div style={{position: 'absolute', left: 0, right: 0, top: 410, display: 'flex', justifyContent: 'center'}}>
        <Words text="The reorder was due today. Now it's done." t={t} at={20.1} size={84} align="center" out={22.0} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 290, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30}}>
        {t >= 22.4 ? <Mark height={130} draw={draw} fill={fill} /> : <div style={{width: 104, height: 130}} />}
        <div style={{overflow: 'hidden', paddingBottom: 20, marginBottom: -20}}>
          <div style={{fontSize: 130, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, opacity: word, transform: `translateX(${(1 - word) * -50}px)`}}>verity</div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 490, display: 'flex', justifyContent: 'center'}}>
        <Words text="Your business, on one record." t={t} at={23.4} size={64} align="center" />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 650, display: 'flex', justifyContent: 'center', opacity: url, transform: `translateY(${(1 - url) * 20}px)`}}>
        <div style={{height: 68, padding: '0 32px', display: 'flex', alignItems: 'center', borderRadius: 999, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--elev-mid)', fontSize: 28, fontWeight: 500}}>theverityai.xyz</div>
      </div>
    </>
  );
};

const SFX: {file: string; at: number; vol: number}[] = [
  {file: 'drop_001.ogg', at: 1.5, vol: 0.5},
  {file: 'drop_001.ogg', at: 2.0, vol: 0.5},
  {file: 'impactSoft_medium_000.ogg', at: 7.02, vol: 0.6},
  {file: 'click_003.ogg', at: 13.02, vol: 0.9},
  {file: 'select_008.ogg', at: 14.02, vol: 0.5},
  {file: 'select_008.ogg', at: 15.02, vol: 0.5},
  {file: 'select_008.ogg', at: 16.02, vol: 0.5},
  {file: 'drop_001.ogg', at: 17.52, vol: 0.45},
  {file: 'impactBell_heavy_000.ogg', at: 23.02, vol: 0.42},
];

/** Brag cut: 25s landscape, polished tone, brag plan in video/brag/brag-plan.md. */
export const Brag: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / BRAG_FPS;
  const MASK = 'radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%)';
  return (
    <AbsoluteFill style={{background: 'var(--base)', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          backgroundPosition: `${-t * 5}px ${-t * 3}px`,
          WebkitMaskImage: MASK,
          maskImage: MASK,
        }}
      />
      <Hook t={t} />
      <Reveal t={t} />
      <Flow t={t} />
      <Outro t={t} />

      <Audio src={staticFile('brag/music.mp3')} volume={(f) => 0.38 * Math.min(1, f / BRAG_FPS / 1) * Math.min(1, (BRAG_SECONDS - f / BRAG_FPS) / 2)} />
      {SFX.map((s, i) => (
        <Sequence key={i} from={Math.round(s.at * BRAG_FPS)}>
          <Audio src={staticFile(`brag/${s.file}`)} volume={s.vol} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
