import React from 'react';
import {evolvePath} from '@remotion/paths';
import {outX, seg} from '../shared/timeline';
import {MARK_PATHS} from './data';

export const Label: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div
    style={{
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)',
      ...style,
    }}
  >
    {children}
  </div>
);

/** Word-by-word masked rise. `t` is global seconds, `at` the start, `out` the fade-out start. */
export const Words: React.FC<{
  text: string;
  t: number;
  at: number;
  size: number;
  weight?: number;
  color?: string;
  gap?: number;
  out?: number;
  align?: 'left' | 'center';
}> = ({text, t, at, size, weight = 300, color = 'var(--ink)', gap = 0.07, out, align = 'left'}) => {
  const words = text.split(' ');
  const o = out === undefined ? 1 : 1 - seg(t, out, out + 0.45);
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: weight,
        color,
        lineHeight: 1.04,
        letterSpacing: '-0.03em',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        columnGap: size * 0.26,
        opacity: o,
      }}
    >
      {words.map((w, i) => {
        const p = seg(t, at + i * gap, at + i * gap + 0.85, outX);
        return (
          <span key={i} style={{display: 'inline-block', overflow: 'hidden', paddingBottom: size * 0.14, marginBottom: -size * 0.14}}>
            <span style={{display: 'inline-block', transform: `translateY(${(1 - p) * 112}%)`, opacity: Math.min(1, p * 3)}}>{w}</span>
          </span>
        );
      })}
    </div>
  );
};

export const Card: React.FC<{style?: React.CSSProperties; children: React.ReactNode}> = ({style, children}) => (
  <div
    style={{
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 16,
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Avatar: React.FC<{letter: string; active?: boolean; size?: number}> = ({letter, active, size = 48}) => (
  <div
    style={{
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 12,
      display: 'grid',
      placeItems: 'center',
      fontWeight: 600,
      fontSize: size * 0.4,
      background: active ? 'var(--accent)' : 'var(--line-hair)',
      color: active ? 'var(--accent-ink)' : 'var(--ink-muted)',
    }}
  >
    {letter}
  </div>
);

/** The hourglass mark. `draw` 0..1 strokes it, `fill` 0..1 fills it. */
export const Mark: React.FC<{height: number; draw?: number; fill?: number; color?: string}> = ({
  height,
  draw = 1,
  fill = 1,
  color = 'var(--accent)',
}) => (
  <svg width={(height * 24) / 30} height={height} viewBox="0 0 24 30" style={{overflow: 'visible', display: 'block'}}>
    {MARK_PATHS.map((d, i) => {
      const e = evolvePath(Math.min(1, Math.max(0, draw)), d);
      return (
        <path
          key={i}
          d={d}
          fill={color}
          fillOpacity={fill}
          stroke={color}
          strokeWidth={0.55}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray={e.strokeDasharray}
          strokeDashoffset={e.strokeDashoffset}
          strokeOpacity={fill >= 1 ? 0 : 1}
        />
      );
    })}
  </svg>
);

export const Check: React.FC<{p: number; size?: number}> = ({p, size = 26}) => {
  const c = Math.min(1, p * 2);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{flex: 'none'}}>
      <circle cx={12} cy={12} r={11 * (0.6 + 0.4 * c)} fill="var(--accent)" opacity={c} />
      <path
        d="M6.8 12.4l3.6 3.6 6.8-7.4"
        fill="none"
        stroke="var(--accent-ink)"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={20}
        strokeDashoffset={20 * (1 - Math.max(0, Math.min(1, (p - 0.3) / 0.7)))}
      />
    </svg>
  );
};
