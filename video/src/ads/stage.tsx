import React from 'react';
import {Easing} from 'remotion';
import {inOut, seg, track} from '../shared/timeline';
import {HORIZON} from './R07/world';
import {fontFamily} from './kit';

/** Shared film stage for the dark-world ads (R08, R09): the room, the light/dark token scopes and the information Layer.
 *  Dark world, light objects: the room carries the dark tokens and every physical object re-scopes the light ones. */

/** Dark world, light objects: the film room carries the dark tokens, every physical object re-scopes the light ones. */
export const DARK = {'--ink': '#f4f7fb', '--ink-muted': '#8e9aae', '--line': 'rgba(244,247,251,0.14)', '--line-hair': 'rgba(244,247,251,0.08)', '--base': '#0b0f17', '--base-alt': '#0f141d', '--surface': '#141a25', '--accent-text': '#80bbff', '--elev-low': '0 1px 2px rgba(0,0,0,0.5)'} as React.CSSProperties;
export const LIGHT = {'--ink': '#0f1115', '--ink-muted': '#6b7078', '--line': '#e6eaee', '--line-hair': '#edeff3', '--base': '#f7f8fa', '--base-alt': '#f1f3f7', '--surface': '#ffffff', '--accent-text': '#0050a8', '--elev-low': '0 1px 2px rgba(15,17,21,0.05), 0 1px 1px rgba(15,17,21,0.03)'} as React.CSSProperties;

export const Light: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{position: 'absolute', inset: 0, color: 'var(--ink)', ...LIGHT}}>{children}</div>;

/** The room at night: deep wall, darker floor, one faint key light from the upper right. */
export const DarkStudio: React.FC<{shaft: number; children: React.ReactNode}> = ({shaft, children}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', background: '#080b11', ...DARK}}>
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: HORIZON, background: 'radial-gradient(ellipse 120% 85% at 88% 6%, #1a2230 0%, #0f141d 52%, #0a0d14 100%)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: HORIZON, bottom: 0, background: 'linear-gradient(180deg, #0a0d14 0%, #0d1119 40%, #10151e 100%)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: HORIZON - 1, height: 2, background: 'rgba(244,247,251,0.07)', filter: 'blur(1px)'}} />
    <div style={{position: 'absolute', left: 430 + shaft, top: -420, width: 560, height: 2800, transform: 'rotate(24deg)', transformOrigin: '50% 0', background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 46%, rgba(255,255,255,0) 100%)', filter: 'blur(26px)'}} />
    {children}
  </div>
);

export const tk = (t: number, keys: [number, number][]) => track(t, keys, inOut);
export const lin = (t: number, keys: [number, number][]) => track(t, keys, (n) => n);

/** One information layer: rises in at `a`, rises out at `b` over `ex` seconds (a hard cut uses a tiny `ex`). */
export const Layer: React.FC<{t: number; a: number; b?: number; dy?: number; ex?: number; depth?: boolean; light?: boolean; children: React.ReactNode}> = ({t, a, b = 1e9, dy = 36, ex = 0.45, depth, light, children}) => {
  const i = seg(t, a, a + (depth ? 0.9 : 0.7), glide);
  const o = seg(t, b, b + ex, inOut);
  const op = i * (1 - o);
  if (op <= 0) return null;
  const s = depth ? 0.95 + 0.05 * i + 0.03 * o : 1;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: op, transform: `translateY(${Math.round((1 - i) * dy - o * dy)}px) scale(${s})`, filter: depth && i < 1 ? `blur(${(1 - i) * 8}px)` : undefined}}>
      {light ? <Light>{children}</Light> : children}
    </div>
  );
};

/** Shorter tail than outX: type settles in under a second, so it never creeps at sub-pixel speed (reads as vibration). */
export const glide = Easing.bezier(0.22, 1, 0.36, 1);

export const LABEL: React.CSSProperties = {fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase'};
