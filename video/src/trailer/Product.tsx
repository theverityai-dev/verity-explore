import React from 'react';
import {evolvePath} from '@remotion/paths';
import {inOut, lerp, outX, popT, seg, track} from '../shared/timeline';
import {ATTENTION, METRICS, RESOLVE} from './data';
import {Avatar, Card, Check, Label, Mark, Words} from './ui';

const APP = {x: 210, y: 190, w: 1500, h: 760};
const LIST = {x: 928, y: 220, w: 544, h: 500};

const THIS_WEEK = [38, 44, 41, 56, 52, 63, 71];
const LAST_WEEK = [34, 36, 40, 42, 45, 47, 49];
const CH = {w: 832, h: 340};

/** Smooth path through points (cubic with horizontal tangents). */
const curve = (vals: number[]) => {
  const step = CH.w / (vals.length - 1);
  const pts = vals.map((v, i) => [i * step, CH.h - (v / 80) * CH.h] as [number, number]);
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const mx = (x0 + x1) / 2;
    d += ` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  return {d, end: pts[pts.length - 1]};
};

const Metric: React.FC<{i: number; t: number}> = ({i, t}) => {
  const m = METRICS[i];
  const pop = popT(t, 21.9 + i * 0.1);
  const k = seg(t, 22.5 + i * 0.1, 24.3 + i * 0.1, outX);
  return (
    <Card
      style={{
        position: 'absolute',
        left: 28 + i * 371,
        top: 80,
        width: 351,
        height: 128,
        padding: '14px 24px',
        opacity: pop,
        transform: `translateY(${(1 - pop) * 24}px)`,
      }}
    >
      <div style={{fontSize: 19, color: 'var(--ink-muted)', fontWeight: 500}}>{m.label}</div>
      <div style={{fontSize: 42, fontWeight: 500, letterSpacing: '-0.03em', marginTop: 2, lineHeight: 1.15, fontVariantNumeric: 'tabular-nums'}}>{m.fmt(m.to * k)}</div>
      <div style={{fontSize: 16, color: 'var(--accent-text)', marginTop: 0}}>{m.note}</div>
    </Card>
  );
};

const ChartCard: React.FC<{t: number}> = ({t}) => {
  const now = curve(THIS_WEEK);
  const prev = curve(LAST_WEEK);
  const p = seg(t, 22.7, 25.0, inOut);
  const e = evolvePath(p, now.d);
  const pop = popT(t, 22.2);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <Card style={{position: 'absolute', left: 28, top: 220, width: 880, height: 500, padding: 24, opacity: pop, transform: `translateY(${(1 - pop) * 30}px)`}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Label style={{color: 'var(--ink)'}}>Sales · This week</Label>
        <div style={{display: 'flex', gap: 22, fontSize: 17, color: 'var(--ink-muted)'}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <i style={{width: 18, height: 3, background: 'var(--accent)', display: 'inline-block', borderRadius: 2}} />This week
          </span>
          <span style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <i style={{width: 18, height: 3, background: 'var(--line)', display: 'inline-block', borderRadius: 2}} />Last week
          </span>
        </div>
      </div>
      <svg width={CH.w} height={CH.h + 8} style={{marginTop: 30, overflow: 'visible'}}>
        {[0, 1, 2, 3].map((g) => (
          <line key={g} x1={0} x2={CH.w} y1={(g * CH.h) / 3} y2={(g * CH.h) / 3} strokeWidth={1} style={{stroke: 'var(--grid-line)'}} />
        ))}
        <path d={prev.d} fill="none" strokeWidth={3} strokeDasharray="6 8" strokeLinecap="round" style={{stroke: 'var(--line)'}} />
        <path d={`${now.d} L${CH.w},${CH.h} L0,${CH.h} Z`} style={{fill: 'var(--accent-a08)'}} opacity={seg(t, 24.0, 25.2)} />
        <path
          d={now.d}
          fill="none"
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={e.strokeDasharray}
          strokeDashoffset={e.strokeDashoffset}
          style={{stroke: 'var(--accent)'}}
        />
        {p > 0.98 ? (
          <>
            <circle cx={now.end[0]} cy={now.end[1]} r={9 + 10 * ((t * 0.8) % 1)} opacity={0.35 * (1 - ((t * 0.8) % 1))} style={{fill: 'var(--accent)'}} />
            <circle cx={now.end[0]} cy={now.end[1]} r={8} style={{fill: 'var(--accent)'}} />
          </>
        ) : null}
      </svg>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 14, fontSize: 17, color: 'var(--ink-muted)', width: CH.w}}>
        {days.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </Card>
  );
};

const AttentionCard: React.FC<{t: number}> = ({t}) => {
  const pop = popT(t, 22.4);
  const sel = seg(t, 27.3, 27.7);
  const swap = seg(t, 27.6, 28.2);
  return (
    <Card style={{position: 'absolute', left: LIST.x, top: LIST.y, width: LIST.w, height: LIST.h, opacity: pop, transform: `translateY(${(1 - pop) * 30}px)`, overflow: 'hidden'}}>
      <div style={{height: 60, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--line-hair)'}}>
        <Label style={{color: 'var(--ink)'}}>Needs attention</Label>
        <span style={{fontSize: 17, fontWeight: 600, color: 'var(--accent-text)', background: 'var(--accent-a14)', padding: '4px 12px', borderRadius: 999}}>4</span>
      </div>

      <div style={{opacity: 1 - swap}}>
        {ATTENTION.map((a, r) => {
          const inP = seg(t, 23.7 + r * 0.28, 24.4 + r * 0.28);
          const hot = r === 2;
          return (
            <div
              key={a.name}
              style={{
                position: 'absolute',
                left: 16,
                right: 16,
                top: 68 + r * 92 - 60 + 60,
                height: 84,
                boxSizing: 'border-box',
                padding: '14px 18px',
                borderRadius: 12,
                background: hot && sel > 0.02 ? 'var(--accent-a14)' : 'transparent',
                border: `1px solid ${hot && sel > 0.02 ? 'var(--accent)' : 'var(--line-hair)'}`,
                opacity: inP,
                transform: `translateX(${(1 - inP) * 36}px)`,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{width: 10, height: 10, borderRadius: 5, flex: 'none', background: 'var(--accent)'}} />
                <div style={{fontSize: 21, fontWeight: 500, letterSpacing: '-0.01em', whiteSpace: 'nowrap'}}>{a.name}</div>
              </div>
              <div style={{fontSize: 16, color: 'var(--ink-muted)', marginTop: 6, marginLeft: 22}}>{a.meta}</div>
            </div>
          );
        })}
      </div>

      <div style={{position: 'absolute', left: 16, right: 16, top: 68, opacity: swap, transform: `translateX(${(1 - swap) * 40}px)`}}>
        <div style={{fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em'}}>17 orders awaiting QC</div>
        <div style={{fontSize: 16, color: 'var(--ink-muted)', marginTop: 4}}>Plant 2 · blocking three dispatches</div>
        <div style={{marginTop: 20}}>
          {RESOLVE.map((s, k) => {
            const cp = seg(t, 28.3 + k * 0.7, 28.9 + k * 0.7);
            return (
              <div
                key={s}
                style={{
                  height: 70,
                  marginBottom: 10,
                  padding: '0 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  borderRadius: 12,
                  background: 'var(--surface-elevated)',
                  border: `1px solid ${cp > 0.3 ? 'var(--accent-a40)' : 'var(--line)'}`,
                  opacity: 0.35 + 0.65 * seg(t, 28.2 + k * 0.7, 28.6 + k * 0.7),
                }}
              >
                {k === 0 ? <Avatar letter="P" active size={38} /> : null}
                <div style={{flex: 1, fontSize: 22, fontWeight: 500}}>{s}</div>
                <Check p={cp} />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

/** Beat 4: the real product, a camera push to the attention list and one resolved action. */
export const Product: React.FC<{t: number}> = ({t}) => {
  if (t < 20.8 || t > 32.3) return null;
  const inP = seg(t, 20.9, 22.1, outX);
  const outP = seg(t, 31.4, 32.2, inOut);
  const s = track(t, [[25.0, 1], [26.6, 1.42], [30.6, 1.42], [31.7, 1]]);
  const fx = track(t, [[25.0, 960], [26.6, 1410], [30.6, 1410], [31.7, 960]]);
  const fy = track(t, [[25.0, 540], [26.6, 660], [30.6, 660], [31.7, 540]]);
  const cur = seg(t, 26.2, 27.3, inOut);
  const click = seg(t, 27.3, 27.95);
  const cursor: [number, number] = [lerp(1600, 1420, cur), lerp(400, 712, cur)];
  const toast = popT(t, 30.1) * (1 - seg(t, 31.2, 31.6));
  const capO = seg(t, 21.4, 21.9) * (1 - seg(t, 24.6, 25.1));

  return (
    <>
      <div style={{position: 'absolute', left: 120, top: 74, opacity: capO}}>
        <Words text="See the day while it is still running." t={t} at={21.5} size={54} out={24.5} />
      </div>

      <div style={{position: 'absolute', left: 0, top: 0, width: 0, height: 0, transformOrigin: '0 0', transform: `translate(${960 - fx * s}px, ${540 - fy * s}px) scale(${s})`}}>
        <div
          style={{
            position: 'absolute',
            left: APP.x,
            top: APP.y,
            width: APP.w,
            height: APP.h,
            borderRadius: 16,
            background: 'var(--base)',
            border: '1px solid var(--line)',
            boxShadow: 'var(--elev-high)',
            overflow: 'hidden',
            opacity: inP * (1 - outP),
            transform: `translateY(${(1 - inP) * 140 - outP * 50}px) scale(${lerp(0.95, 1, inP) * lerp(1, 0.97, outP)})`,
          }}
        >
          <div style={{height: 52, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid var(--line)', background: 'var(--surface)'}}>
            <Mark height={22} />
            <Label style={{color: 'var(--ink)', fontSize: 17}}>Verity / Command centre</Label>
            <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{width: 8, height: 8, borderRadius: 4, background: 'var(--accent)', opacity: 0.55 + 0.45 * Math.sin(t * 2.2)}} />
              <Label style={{fontSize: 16}}>Live</Label>
            </div>
          </div>
          <div style={{position: 'absolute', left: 0, top: 52, right: 0, bottom: 0}}>
            <div style={{position: 'absolute', left: 0, top: -52}}>
              {METRICS.map((_, i) => (
                <Metric key={i} i={i} t={t} />
              ))}
              <ChartCard t={t} />
              <AttentionCard t={t} />
            </div>
          </div>
        </div>

        {click > 0 && click < 1 ? (
          <div style={{position: 'absolute', left: cursor[0] - 44 * click, top: cursor[1] - 44 * click, width: 88 * click, height: 88 * click, borderRadius: '50%', border: '3px solid var(--accent)', opacity: 1 - click}} />
        ) : null}
        <svg
          width={40}
          height={40}
          viewBox="0 0 24 24"
          style={{position: 'absolute', left: cursor[0], top: cursor[1], opacity: seg(t, 25.9, 26.3) * (1 - seg(t, 29.4, 29.9)), filter: 'drop-shadow(0 4px 8px rgba(15,17,21,.35))'}}
        >
          <path d="M4 2l15 9-6.5 1.5L9 19z" fill="#fff" stroke="#0f1115" strokeWidth={1.3} strokeLinejoin="round" />
        </svg>

        <div
          style={{
            position: 'absolute',
            left: APP.x + LIST.x + 20,
            top: APP.y + LIST.y + 430,
            width: 504,
            height: 56,
            boxSizing: 'border-box',
            padding: '0 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            borderRadius: 12,
            background: 'var(--ink)',
            color: 'var(--base)',
            opacity: toast,
            transform: `translateY(${(1 - toast) * 16}px)`,
          }}
        >
          <Check p={toast} size={24} />
          <div style={{fontSize: 19, fontWeight: 500}}>Recorded once. Visible everywhere.</div>
        </div>
      </div>
    </>
  );
};
