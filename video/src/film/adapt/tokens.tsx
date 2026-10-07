import React from 'react';
import {Easing} from 'remotion';
import {seg} from '../../shared/timeline';

/** "The business comes first": a 9:8 (1080x960) dark cinematic brand film. Palette, type and motion tokens. */
export const AW = 1080;
export const AH = 960;
export const AFPS = 60;
export const ASECONDS = 73;

/** Safe margin on every edge. Chapter markers sit on the top-left corner, statements on the bottom-left baseline. */
export const M = 90;
export const BASE = AH - M; // 870, the statement baseline

export const C = {
  bg: '#0B0C0E',
  surf: '#111316',
  txt: '#F4F4F1',
  txt2: '#A5A8AD',
  ui: '#EDEDEA',
  uiw: '#FAFAF7',
  uiInk: '#16181B',
  uiMuted: '#6C7076',
  uiLine: '#E2E2DE',
  acc: '#6E8FFF',
  cold: '#DADDE2',
  coldLine: '#B9BEC5',
  coldInk: '#5E636A',
};

export const glide = Easing.bezier(0.22, 1, 0.36, 1);
export const smooth = Easing.bezier(0.45, 0, 0.15, 1);
export const lin = (n: number) => n;

const hex = (h: string) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
export const rgba = (h: string, a: number) => {
  const [r, g, b] = hex(h);
  return `rgba(${r},${g},${b},${a})`;
};
/** Weighted mix of hex colours, returned as rgba with the given alpha. */
export const mixc = (stops: [string, number][], a = 1) => {
  let sw = 0;
  const acc = [0, 0, 0];
  for (const [c, w] of stops) {
    if (w <= 0) continue;
    const v = hex(c);
    acc[0] += v[0] * w;
    acc[1] += v[1] * w;
    acc[2] += v[2] * w;
    sw += w;
  }
  if (sw <= 0) return `rgba(0,0,0,${a})`;
  return `rgba(${Math.round(acc[0] / sw)},${Math.round(acc[1] / sw)},${Math.round(acc[2] / sw)},${a})`;
};

/** Uppercase micro label: 15px, medium, wide tracking. */
export const Micro: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div style={{fontSize: 15, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.txt2, whiteSpace: 'nowrap', lineHeight: 1.35, ...style}}>
    {children}
  </div>
);

/** Fade with a short rise; `at`/`out` are seconds. */
export const appear = (t: number, at: number, out: number, rise = 8, dur = 0.8) => {
  const p = seg(t, at, at + dur, glide);
  const q = seg(t, out, out + 0.5, smooth);
  return {o: Math.min(1, p * 1.3) * (1 - q), y: (1 - p) * rise - q * 4};
};

/** Chapter marker. Anchor: top-left safe corner (x 90, y 90). */
export const Chapter: React.FC<{t: number; at: number; out: number; label: string}> = ({t, at, out, label}) => {
  const a = appear(t, at, out, 0);
  if (a.o <= 0.002) return null;
  const p = seg(t, at, at + 1.1, glide);
  return (
    <div style={{position: 'absolute', left: M, top: M - 10, display: 'flex', alignItems: 'center', gap: 14, opacity: a.o}}>
      <div style={{width: 28 * p, height: 1.5, background: rgba(C.txt2, 0.7)}} />
      <Micro>{label}</Micro>
    </div>
  );
};

/** Editorial statement in uppercase. Anchored either by its last baseline (default: the bottom safe line) or its cap line. */
export const Statement: React.FC<{
  t: number;
  at: number;
  out: number;
  lines: string[];
  size?: number;
  baseline?: number;
  capTop?: number;
  left?: number;
  dur?: number;
  color?: string;
}> = ({t, at, out, lines, size = 48, baseline = BASE, capTop, left = M, dur = 1.2, color = C.txt}) => {
  const a = appear(t, at, out, 10, dur);
  if (a.o <= 0.002) return null;
  const lh = 1.08;
  const half = (lh * size - 1.21 * size) / 2;
  const top = capTop !== undefined ? capTop - half - 0.24 * size : baseline - (lines.length - 1) * lh * size - half - 0.97 * size;
  return (
    <div style={{position: 'absolute', left, top, fontSize: size, lineHeight: lh, fontWeight: 500, letterSpacing: '0.01em', textTransform: 'uppercase', color, whiteSpace: 'pre', opacity: a.o, transform: `translateY(${a.y}px)`}}>
      {lines.join('\n')}
    </div>
  );
};
