import React from 'react';
import {inOut, outX, seg} from '../shared/timeline';
import {INDUSTRIES, TYPE_COUNT} from './data';

const MASK = 'linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%)';

const Row: React.FC<{t: number; y: number; dir: 1 | -1; color: string; dy: number}> = ({t, y, dir, color, dy}) => {
  const list = dir === 1 ? INDUSTRIES : [...INDUSTRIES].reverse();
  const items = [...list, ...list, ...list];
  const shift = (t - 31.6) * 230 * dir;
  const inP = seg(t, 31.7, 32.7, outX);
  const outP = seg(t, 37.3, 38.1, inOut);
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: y,
        height: 130,
        overflow: 'hidden',
        WebkitMaskImage: MASK,
        maskImage: MASK,
        opacity: inP * (1 - outP),
        transform: `translateY(${(1 - inP) * dy}px)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: dir === 1 ? 80 - shift : -2600 + shift,
          whiteSpace: 'nowrap',
          fontSize: 112,
          fontWeight: 300,
          letterSpacing: '-0.03em',
          color,
          lineHeight: 1.15,
        }}
      >
        {items.map((n, i) => (
          <span key={i}>
            {n}
            <span style={{margin: '0 0.5em', color: 'var(--accent)'}}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/** Beat 5: breadth. Nine industries scroll past a live count of business types. */
export const Industries: React.FC<{t: number}> = ({t}) => {
  if (t < 31.6 || t > 38.2) return null;
  const k = seg(t, 32.6, 35.0, outX);
  const num = Math.round(TYPE_COUNT * k);
  const outP = seg(t, 37.3, 38.1, inOut);
  const label = seg(t, 33.0, 33.9, outX);
  const one = seg(t, 35.6, 36.5, outX);
  return (
    <>
      <Row t={t} y={150} dir={1} color="var(--ink)" dy={-70} />
      <Row t={t} y={800} dir={-1} color="var(--ink-faint)" dy={70} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 330, textAlign: 'center', opacity: 1 - outP}}>
        <div style={{fontSize: 290, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--accent)', fontVariantNumeric: 'tabular-nums', opacity: seg(t, 32.4, 33.0)}}>
          {num}
        </div>
        <div style={{fontSize: 60, fontWeight: 300, letterSpacing: '-0.03em', marginTop: 6, opacity: label, transform: `translateY(${(1 - label) * 24}px)`}}>
          business types.{' '}
          <span style={{color: 'var(--accent-text)', fontWeight: 400, opacity: one, display: 'inline-block', transform: `translateY(${(1 - one) * 24}px)`}}>One Verity.</span>
        </div>
      </div>
    </>
  );
};
