import React from 'react';
import {inOut, lerp, popT, seg} from '../shared/timeline';
import {CHIPS} from './data';
import {Avatar, Words} from './ui';

const CX = 960;
const CY = 450;
const CW = 300;
const CH = 84;

const drift = (i: number, t: number): [number, number] => {
  const c = CHIPS[i];
  return [c.x + c.a * Math.sin(2 * Math.PI * c.f * t + c.p), c.y + c.a * 0.8 * Math.cos(2 * Math.PI * c.f * 1.3 * t + c.p * 1.7)];
};

/** Beat 1 + 2: a business scattered across a dozen tools, then spiralling into a single point. */
export const Scatter: React.FC<{t: number}> = ({t}) => {
  if (t > 11.2) return null;
  const ringP = seg(t, 8.0, 9.1);
  const one = t > 9.8 && t < 11.2;
  return (
    <>
      <div style={{position: 'absolute', left: 120, top: 104, width: 980}}>
        <Words text="Your business runs on everything." t={t} at={0.3} size={92} out={5.5} />
      </div>
      <div style={{position: 'absolute', left: 124, top: 350, width: 900}}>
        <Words text="Nothing agrees. Nothing connects." t={t} at={3.5} size={36} weight={400} color="var(--ink-muted)" out={5.5} />
      </div>

      {CHIPS.map((c, i) => {
        const [x0, y0] = drift(i, t);
        const e = seg(t, 5.9 + i * 0.045, 7.75 + i * 0.045, inOut);
        const dx = x0 - CX;
        const dy = y0 - CY;
        const th = 1.5 * e;
        const rx = (dx * Math.cos(th) - dy * Math.sin(th)) * (1 - e);
        const ry = (dx * Math.sin(th) + dy * Math.cos(th)) * (1 - e);
        const x = CX + rx;
        const y = CY + ry;
        const pop = popT(t, 0.35 + i * 0.11);
        const flick = Math.sin(t * 3.2 + c.p * 5) > 0.55;
        const op = Math.min(1, pop * 1.6) * (1 - seg(t, 7.35 + i * 0.045, 7.85 + i * 0.045, inOut));
        if (op <= 0.002) return null;
        return (
          <div
            key={c.name}
            style={{
              position: 'absolute',
              left: x - CW / 2,
              top: y - CH / 2,
              width: CW,
              height: CH,
              boxSizing: 'border-box',
              padding: '0 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              borderRadius: 16,
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--elev-mid)',
              opacity: op,
              transform: `scale(${lerp(0.82, 1, pop) * lerp(1, 0.3, e)}) rotate(${(i % 2 ? 1 : -1) * (2 + (i % 3)) * (1 - e)}deg)`,
            }}
          >
            <Avatar letter={c.name[0]} size={44} />
            <div style={{minWidth: 0}}>
              <div style={{fontSize: 26, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em'}}>{c.name}</div>
              <div style={{fontSize: 17, color: 'var(--ink-muted)', whiteSpace: 'nowrap'}}>{c.sub}</div>
            </div>
            <div style={{marginLeft: 'auto', width: 10, height: 10, borderRadius: 5, background: flick ? 'var(--accent)' : 'var(--line)'}} />
          </div>
        );
      })}

      {ringP > 0 && ringP < 1 ? (
        <div
          style={{
            position: 'absolute',
            left: CX - 300 * ringP,
            top: CY - 300 * ringP,
            width: 600 * ringP,
            height: 600 * ringP,
            borderRadius: '50%',
            border: '2px solid var(--accent)',
            opacity: 0.55 * (1 - ringP),
          }}
        />
      ) : null}

      {one ? (
        <div style={{position: 'absolute', left: 0, right: 0, top: 640, display: 'flex', justifyContent: 'center'}}>
          <Words text="One record." t={t} at={9.8} size={150} align="center" out={10.6} />
        </div>
      ) : null}
    </>
  );
};
