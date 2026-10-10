import React from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {inOut, outX, seg} from '../shared/timeline';
import {Mark} from '../trailer/ui';
import {capOffset} from '../social/kit';
import type {CaptionCopy, HeadlineCopy} from './copy';
import {CAP, SAFE} from './tokens';

/** latin-ext carries the rupee sign; without it the ₹ falls back to a system font. */
export const {fontFamily} = loadFont('normal', {weights: ['300', '400', '500', '600'], subsets: ['latin', 'latin-ext']});

/** Light Verity world: site tokens through CSS variables, one soft radial lift, nothing else. */
export const AdStage: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{
      fontFamily,
      fontFeatureSettings: '"cv02","cv03","cv04","ss03"',
      color: 'var(--ink)',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 90% 55% at 50% 44%, #ffffff, var(--base) 78%)',
    }}
  >
    {children}
  </AbsoluteFill>
);

/** Fixed furniture: the mark and lowercase wordmark on the left margin, inside the safe band. */
export const Lockup: React.FC<{y?: number; h?: number}> = ({y = 272, h = 34}) => (
  <div style={{position: 'absolute', left: SAFE.side, top: y, height: h, display: 'flex', alignItems: 'center', gap: h * 0.36}}>
    <Mark height={h} color="var(--ink)" />
    <div style={{fontSize: h * 1.12, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1}}>verity</div>
  </div>
);

/** Headline stack. Each line cross-stacks with the next: it rises out as the following one rises in, never an instant swap. */
export const Headlines: React.FC<{items: HeadlineCopy[]; t: number}> = ({items, t}) => (
  <>
    {items.map((h, i) => {
      const start = h.t0 + (i === 0 ? 0 : 0.05);
      const outP = seg(t, h.t1 - 0.05, h.t1 + 0.4, inOut);
      if (t < start || outP >= 1) return null;
      const lh = 1.04;
      /** One line at a time, so a 3 s hook is never a still frame: ink lines first, the accent completion last. */
      const lines = [
        ...h.ink.split('\n').map((text) => ({text, accent: false})),
        ...(h.accent ? h.accent.split('\n').map((text) => ({text, accent: true})) : []),
      ];
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: SAFE.side,
            top: CAP - capOffset(h.size, lh),
            width: 1080 - 2 * SAFE.side,
            fontSize: h.size,
            lineHeight: lh,
            fontWeight: 300,
            letterSpacing: '-0.035em',
            opacity: 1 - outP,
            transform: `translateY(${-outP * 40}px)`,
          }}
        >
          {lines.map((l, k) => {
            const p = seg(t, start + k * 0.6, start + k * 0.6 + 0.8, outX);
            return (
              <div key={k} style={{height: h.size * lh, whiteSpace: 'nowrap', color: l.accent ? 'var(--accent)' : undefined, opacity: p, transform: `translateY(${(1 - p) * 40}px)`}}>
                {l.text}
              </div>
            );
          })}
        </div>
      );
    })}
  </>
);

const bare = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();

/** Burned-in captions, 44 px, two lines, bottom of the safe band. Words reveal evenly across the line until real word timings exist. */
export const Captions: React.FC<{items: CaptionCopy[]; t: number}> = ({items, t}) => (
  <>
    {items.map((c, i) => {
      const o = seg(t, c.t0, c.t0 + 0.2) * (1 - seg(t, c.t1 - 0.25, c.t1));
      if (o <= 0) return null;
      const words = c.text.split(' ');
      const span = (c.t1 - c.t0) * 0.62;
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: SAFE.side,
            width: 1080 - 2 * SAFE.side,
            top: 1384,
            height: 108,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
            columnGap: 12,
            fontSize: 44,
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            opacity: o,
          }}
        >
          {words.map((w, k) => {
            const p = seg(t, c.t0 + 0.12 + (k * span) / words.length, c.t0 + 0.42 + (k * span) / words.length, outX);
            const hit = c.hi !== undefined && bare(w) === bare(c.hi);
            return (
              <span key={k} style={{opacity: 0.24 + 0.76 * p, color: hit ? 'var(--accent)' : 'var(--ink)'}}>
                {w}
              </span>
            );
          })}
        </div>
      );
    })}
  </>
);

/** Early offer tag in the top band beside the lockup, so a cold viewer sees what is on offer long before the offer frame. */
export const OfferChip: React.FC<{text: string; p: number}> = ({text, p}) => (
  <div
    style={{
      position: 'absolute',
      right: SAFE.side,
      top: 263,
      height: 52,
      padding: '0 24px',
      borderRadius: 26,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--elev-low)',
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      opacity: p,
      transform: `translateY(${(1 - p) * 20}px)`,
    }}
  >
    <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)'}} />
    {text}
  </div>
);

/** The one call to action: an accent pill above the Meta bottom band. */
export const CTAPill: React.FC<{text: string; p: number; y?: number}> = ({text, p, y = 1316}) => (
  <div
    style={{
      position: 'absolute',
      left: SAFE.side,
      width: 1080 - 2 * SAFE.side,
      top: y,
      height: 112,
      borderRadius: 56,
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      fontSize: 38,
      fontWeight: 500,
      letterSpacing: '-0.015em',
      opacity: p,
      transform: `translateY(${(1 - p) * 60}px)`,
    }}
  >
    {text}
    <svg width={40} height={24} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h34M26 3l10 9-10 9" />
    </svg>
  </div>
);
