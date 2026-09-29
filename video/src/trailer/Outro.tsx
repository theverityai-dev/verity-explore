import React from 'react';
import {lerp, outX, popT, seg} from '../shared/timeline';
import {Mark, Words} from './ui';

/** Beat 6: the end card. Mark draws, wordmark and line land, then the call to action. */
export const Outro: React.FC<{t: number}> = ({t}) => {
  if (t < 38.0) return null;
  const draw = seg(t, 38.4, 39.3);
  const fill = seg(t, 39.1, 39.7);
  const word = seg(t, 39.2, 40.0, outX);
  const drift = 1 + 0.012 * seg(t, 38, 44);
  const url = popT(t, 41.5);
  const cta = popT(t, 41.8);
  return (
    <div style={{position: 'absolute', inset: 0, transform: `scale(${drift})`, opacity: seg(t, 38.0, 38.5)}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 250, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 34}}>
        <Mark height={150} draw={draw} fill={fill} />
        <div style={{overflow: 'hidden', paddingBottom: 24, marginBottom: -24}}>
          <div style={{fontSize: 150, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, transform: `translateX(${(1 - word) * -60}px)`, opacity: word}}>verity</div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 500, display: 'flex', justifyContent: 'center'}}>
        <Words text="Your business, on one record." t={t} at={40.2} size={88} align="center" />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24}}>
        <div
          style={{
            height: 76,
            padding: '0 34px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 999,
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            boxShadow: 'var(--elev-mid)',
            fontSize: 30,
            fontWeight: 500,
            opacity: url,
            transform: `translateY(${(1 - url) * 24}px) scale(${lerp(0.9, 1, url)})`,
          }}
        >
          theverityai.xyz
        </div>
        <div
          style={{
            height: 76,
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 999,
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            fontSize: 30,
            fontWeight: 600,
            opacity: cta,
            transform: `translateY(${(1 - cta) * 24}px) scale(${lerp(0.9, 1, cta)})`,
          }}
        >
          Book a demo
        </div>
      </div>
    </div>
  );
};
