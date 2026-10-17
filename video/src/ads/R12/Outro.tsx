import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark} from '../../trailer/ui';
import {inOut, lerp, seg} from '../../shared/timeline';
import {Sky, glide, type Theme} from './parts';

/** R12 outro (9:16, 3 s). The film's signature move in miniature: eight scattered pieces converge on one point, the
 *  mark draws itself there, the wordmark, the closing line and the address follow, then everything holds still.
 *  Everything sits inside the Meta safe band (y 250 to 1500). */

export const OUTRO_FPS = 60;
export const OUTRO_DURATION = 3 * OUTRO_FPS;

const CX = 540;
const CY = 830;
const PIECES: [number, number, number][] = [
  [-430, -520, 0], [60, -640, 0.03], [440, -430, 0.06], [500, 90, 0.02], [380, 560, 0.05], [-40, 640, 0.01], [-470, 470, 0.04], [-520, -40, 0.07],
];

export const R12Outro: React.FC<{theme: Theme}> = ({theme}) => {
  const t = useCurrentFrame() / OUTRO_FPS;
  const draw = seg(t, 0.5, 1.05, inOut);
  const fill = seg(t, 0.95, 1.25, inOut);
  const word = seg(t, 0.85, 1.4, glide);
  const line1 = seg(t, 1.15, 1.8, glide);
  const line2 = seg(t, 1.3, 1.95, glide);
  const pill = seg(t, 1.6, 2.2, glide);
  const rise = (p: number, d = 30): React.CSSProperties => ({opacity: Math.min(1, p * 1.4), transform: `translateY(${Math.round((1 - p) * d)}px)`});
  return (
    <Sky theme={theme}>
      {PIECES.map(([dx, dy, delay], i) => {
        const k = seg(t, 0.05 + delay, 0.62 + delay, inOut);
        const gone = seg(t, 0.55 + delay, 0.7 + delay, inOut);
        if (gone >= 1) return null;
        const s = lerp(1, 0.25, k * k);
        return (
          <div
            key={i}
            style={{position: 'absolute', left: CX + dx * (1 - k) - 70, top: CY + dy * (1 - k) - 44, width: 140, height: 88, borderRadius: 18, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)', opacity: seg(t, 0, 0.15) * (1 - gone), transform: `scale(${s}) rotate(${lerp(i % 2 ? 8 : -8, 0, k)}deg)`}}
          >
            <div style={{position: 'absolute', left: 20, top: 26, width: 60, height: 10, borderRadius: 5, background: 'var(--line)'}} />
            <div style={{position: 'absolute', left: 20, top: 48, width: 38, height: 10, borderRadius: 5, background: 'var(--line)'}} />
            <div style={{position: 'absolute', right: 18, top: 35, width: 18, height: 18, borderRadius: 9, background: 'var(--accent)'}} />
          </div>
        );
      })}

      {/* The lockup: mark draws where the pieces met, wordmark follows. */}
      <div style={{position: 'absolute', left: 0, right: 0, top: CY - 110, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 56}}>
        <div style={{width: 176, display: 'flex', justifyContent: 'center'}}>
          <Mark height={220} draw={draw} fill={fill} color="var(--ink)" />
        </div>
        <div style={{fontSize: 184, fontWeight: 500, letterSpacing: '-0.045em', lineHeight: 1, opacity: word, transform: `translateX(${Math.round((1 - word) * -40)}px)`, marginTop: -8}}>verity</div>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 1060, textAlign: 'center', fontSize: 84, lineHeight: '96px', fontWeight: 300, letterSpacing: '-0.04em'}}>
        <div style={rise(line1)}>Your business.</div>
        <div style={{...rise(line2), color: 'var(--ink-muted)'}}>On one record.</div>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 1340, display: 'flex', justifyContent: 'center', ...rise(pill, 24)}}>
        <div style={{height: 100, padding: '0 52px', borderRadius: 999, background: 'var(--accent)', color: 'var(--accent-ink)', display: 'flex', alignItems: 'center', gap: 20, fontSize: 44, fontWeight: 500, letterSpacing: '-0.015em'}}>
          verity.plotarmour.in
          <svg width={36} height={24} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h34M26 3l10 9-10 9" />
          </svg>
        </div>
      </div>
    </Sky>
  );
};
