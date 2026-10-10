import React from 'react';
import {Mark} from '../../trailer/ui';
import {inOut, lerp, outX, seg} from '../../shared/timeline';
import type {AdCopy} from '../copy';
import {T} from '../tokens';

/** One glass frame, two jobs. It builds around the chain as the Verity panel (configure), then the same frame
 *  moves up and takes the offer (offer). The carrier across that seam is the frame, not a new card. */

const X = 90;
const W = 900;
const PAD = 50; // aligns chrome, footer and offer text to the left edge of the chain rows (x 140)

const rise = (t: number, a: number, d = 0.6) => {
  const p = seg(t, a, a + d, outX);
  return {opacity: p, transform: `translateY(${(1 - p) * 28}px)`} as React.CSSProperties;
};

export const Frame: React.FC<{t: number; offer: AdCopy['offer']}> = ({t, offer}) => {
  const build = seg(t, T.configure, T.configure + 0.9, outX);
  if (build <= 0) return null;
  const m = seg(t, T.offer, T.offer + 0.9, inOut);
  const top = lerp(690, 560, m);
  const h = lerp(640, 700, m);
  const chrome = 1 - seg(t, T.offer, T.offer + 0.4);
  const live = seg(t, T.configure + 0.5, T.configure + 1.0);
  const footer = seg(t, T.blueprint + 1.9, T.blueprint + 2.5) * (1 - seg(t, T.offer - 0.3, T.offer + 0.1));
  const o0 = T.offer + 0.7;

  return (
    <div
      style={{
        position: 'absolute',
        left: X,
        top,
        width: W,
        height: h,
        borderRadius: 32,
        background: 'var(--surface-floating)',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        border: '1px solid var(--nav-border)',
        boxShadow: 'var(--elev-high)',
        opacity: build,
        transform: `translateY(${(1 - build) * 24}px) scale(${lerp(0.97, 1, build)})`,
      }}
    >
      {/* Chrome bar */}
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 64, display: 'flex', alignItems: 'center', padding: `0 ${PAD}px`, borderBottom: '1px solid var(--line)', opacity: chrome}}>
        <Mark height={22} color="var(--ink)" />
        <div style={{marginLeft: 14, fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em'}}>Verity</div>
        <div style={{marginLeft: 10, fontSize: 24, color: 'var(--ink-muted)'}}>/ Your business</div>
        <div style={{flex: 1}} />
        <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, color: 'var(--ink-muted)', opacity: live}}>
          <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)'}} />
          Live
        </div>
      </div>

      {/* Footer: the output of the mapping */}
      <div style={{position: 'absolute', left: PAD, bottom: 26, display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, fontWeight: 500, letterSpacing: '-0.01em', opacity: footer, transform: `translateY(${(1 - footer) * 12}px)`}}>
        <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)'}} />
        Proposed system blueprint
      </div>

      {/* Offer */}
      <div style={{position: 'absolute', left: PAD, right: PAD, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28}}>
        <div style={{fontSize: 28, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', ...rise(t, o0)}}>{offer.label}</div>
        <div style={{display: 'flex', alignItems: 'baseline', gap: 22, ...rise(t, o0 + 0.2)}}>
          <span style={{fontSize: 156, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1, fontVariantNumeric: 'tabular-nums'}}>{offer.value}</span>
          <span style={{fontSize: 56, fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink-muted)'}}>{offer.valueNote}</span>
        </div>
        <div style={{fontSize: 76, fontWeight: 300, lineHeight: 1.04, letterSpacing: '-0.035em', ...rise(t, o0 + 0.5)}}>
          {offer.line[0]}
          <br />
          <span style={{color: 'var(--accent)'}}>{offer.line[1]}</span>
        </div>
        <div style={{height: 1, background: 'var(--line)', opacity: seg(t, o0 + 0.9, o0 + 1.3)}} />
        <div style={rise(t, o0 + 1.2)}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 28, fontWeight: 500, letterSpacing: '-0.01em'}}>
            <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)'}} />
            {offer.limited}
          </div>
          <div style={{marginTop: 10, fontSize: 28, lineHeight: 1.3, color: 'var(--ink-muted)', whiteSpace: 'pre-line'}}>{offer.scope}</div>
        </div>
      </div>
    </div>
  );
};
