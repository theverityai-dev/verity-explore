import React from 'react';
import {inOut, lerp, popT, seg, track} from '../shared/timeline';
import {CAPS, JOB} from './data';
import {Check, Label, Mark, Words} from './ui';

const HUB_X = 960;
const HUB_Y = 612;
const RX = 690;
const RY = 268;
const NW = 340;
const NH = 104;

const nodePos = (i: number): [number, number] => {
  const a = ((i * 45 - 90) * Math.PI) / 180;
  return [HUB_X + RX * Math.cos(a), HUB_Y + RY * Math.sin(a)];
};

/** The mark: draws itself, then settles into the hub of the record model. Persists 8.2 - 21.5. */
export const HubMark: React.FC<{t: number}> = ({t}) => {
  if (t < 8.2 || t > 21.6) return null;
  const draw = seg(t, 8.2, 9.4, inOut);
  const fill = seg(t, 9.2, 9.9);
  const h = track(t, [[9.9, 230], [10.9, 230], [12.2, 80]]);
  const cy = track(t, [[10.9, 450], [12.2, HUB_Y]]);
  const disc = seg(t, 11.6, 12.5);
  const out = 1 - seg(t, 20.7, 21.5, inOut);
  const rings = [0, 1, 2].map((j) => {
    const f = (((t - 12.4) * 0.55 + j / 3) % 1 + 1) % 1;
    return {r: 100 + f * 190, o: (1 - f) * 0.38 * seg(t, 12.4, 13, inOut)};
  });
  return (
    <div style={{position: 'absolute', inset: 0, opacity: out}}>
      {t > 12.4
        ? rings.map((r, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: HUB_X - r.r,
                top: HUB_Y - r.r,
                width: r.r * 2,
                height: r.r * 2,
                borderRadius: '50%',
                border: '2px solid var(--accent)',
                opacity: r.o,
              }}
            />
          ))
        : null}
      <div
        style={{
          position: 'absolute',
          left: HUB_X - 100,
          top: HUB_Y - 100,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'var(--surface)',
          border: '1px solid var(--accent-a40)',
          boxShadow: 'var(--elev-high)',
          opacity: disc,
          transform: `scale(${lerp(0.6, 1, disc)})`,
        }}
      />
      <div style={{position: 'absolute', left: HUB_X, top: cy, transform: 'translate(-50%, -50%)'}}>
        <Mark height={h} draw={draw} fill={fill} />
      </div>
    </div>
  );
};

const Spoke: React.FC<{i: number; t: number; c: number}> = ({i, t, c}) => {
  const [nx, ny] = nodePos(i);
  const x2 = lerp(nx, HUB_X, c);
  const y2 = lerp(ny, HUB_Y, c);
  const len = Math.hypot(x2 - HUB_X, y2 - HUB_Y);
  const p = seg(t, 12.3 + i * 0.12, 13.1 + i * 0.12);
  const shown = len * p;
  return (
    <line
      x1={HUB_X}
      y1={HUB_Y}
      x2={HUB_X + ((x2 - HUB_X) * shown) / Math.max(len, 1)}
      y2={HUB_Y + ((y2 - HUB_Y) * shown) / Math.max(len, 1)}
      strokeWidth={2}
      style={{stroke: 'var(--line)'}}
    />
  );
};

/** Beat 3: the record model, capabilities orbiting one hub, then one job recorded once. */
export const Record: React.FC<{t: number}> = ({t}) => {
  if (t < 11.0 || t > 21.6) return null;
  const c = seg(t, 20.5, 21.4, inOut);
  const chainP = (k: number) => seg(t, 17.9 + k * 0.6, 18.5 + k * 0.6);
  return (
    <>
      <div style={{position: 'absolute', left: 120, top: 78, width: 1000}}>
        <div style={{opacity: seg(t, 11.6, 12.1) * (1 - seg(t, 20.2, 20.7))}}>
          <Label style={{marginBottom: 18}}>The record model</Label>
        </div>
        <div style={{height: 0, position: 'relative'}}>
          <Words text="Everything a business is made of." t={t} at={11.7} size={64} out={16.6} />
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <Words text="One job. Touched by everyone. Recorded once." t={t} at={17.0} size={64} out={20.2} />
          </div>
        </div>
      </div>

      <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: 1 - c}}>
        {CAPS.map((_, i) => (
          <Spoke key={i} i={i} t={t} c={c} />
        ))}
        {CAPS.map((_, i) => {
          const [nx, ny] = nodePos(i);
          const s = 13.6 + i * 0.42;
          const k = seg(t, s, s + 0.55, inOut);
          if (k <= 0 || k >= 1) return null;
          return <circle key={i} cx={lerp(HUB_X, nx, k)} cy={lerp(HUB_Y, ny, k)} r={9} style={{fill: 'var(--accent)'}} />;
        })}
      </svg>

      {CAPS.map((cap, i) => {
        const [nx0, ny0] = nodePos(i);
        const nx = lerp(nx0, HUB_X, c);
        const ny = lerp(ny0, HUB_Y, c);
        const pop = popT(t, 12.5 + i * 0.12);
        const bob = Math.sin(t * 1.3 + i * 1.7) * 5;
        const hit = seg(t, 13.6 + i * 0.42 + 0.5, 13.6 + i * 0.42 + 0.62) * (1 - seg(t, 13.6 + i * 0.42 + 0.9, 13.6 + i * 0.42 + 1.6));
        return (
          <div
            key={cap.name}
            style={{
              position: 'absolute',
              left: nx - NW / 2,
              top: ny - NH / 2 + bob * (1 - c),
              width: NW,
              height: NH,
              boxSizing: 'border-box',
              padding: '16px 22px',
              borderRadius: 16,
              background: hit > 0.02 ? 'var(--accent-a08)' : 'var(--surface)',
              border: `1px solid ${hit > 0.02 ? 'var(--accent)' : 'var(--line)'}`,
              boxShadow: 'var(--elev-mid)',
              opacity: pop * (1 - c),
              transform: `scale(${lerp(0.7, 1, pop) * lerp(1, 0.5, c)})`,
            }}
          >
            <div style={{fontSize: 30, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1}}>{cap.name}</div>
            <div style={{fontSize: 18, color: 'var(--ink-muted)', marginTop: 6, lineHeight: 1.25}}>{cap.label}</div>
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 962,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          opacity: seg(t, 17.7, 18.1) * (1 - seg(t, 20.3, 20.8)),
        }}
      >
        {JOB.map((step, k) => (
          <React.Fragment key={step}>
            {k > 0 ? (
              <div style={{width: 64, height: 3, background: 'var(--line)', position: 'relative', overflow: 'hidden'}}>
                <div style={{position: 'absolute', inset: 0, background: 'var(--accent)', transform: `scaleX(${chainP(k)})`, transformOrigin: 'left'}} />
              </div>
            ) : null}
            <div
              style={{
                height: 68,
                padding: '0 26px 0 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                borderRadius: 999,
                background: 'var(--surface)',
                border: `1px solid ${chainP(k) > 0.4 ? 'var(--accent-a40)' : 'var(--line)'}`,
                boxShadow: 'var(--elev-low)',
                opacity: 0.3 + 0.7 * seg(t, 17.8 + k * 0.6, 18.2 + k * 0.6),
              }}
            >
              <Check p={chainP(k)} />
              <div style={{fontSize: 26, fontWeight: 500, letterSpacing: '-0.01em', whiteSpace: 'nowrap'}}>{step}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
