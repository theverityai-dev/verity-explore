import React from 'react';
import {AbsoluteFill} from 'remotion';
import {fontFamily} from '../film/engine';
import {CARD_LIGHT, GLASS_LIGHT} from '../film/layout';
import type {Panel as PanelData} from '../reels/content';
import {Mark} from '../trailer/ui';

/** Verity social system (see .claude/skills/verity-social-design). 4:5 canvas, 80 margins, 8px baseline. */
export const SW = 1080;
export const SH = 1350;
export const M = 80;
/** Hero cap line. Every hero's cap top sits here unless its archetype anchors it to an object. */
export const CAP = 200;

/** Dark world (site dark tokens) and light product UI (site light tokens). */
export const C = {
  base: '#0b0f17',
  baseAlt: '#0f141d',
  ink: '#f4f7fb',
  muted: '#8e9aae',
  faint: 'rgba(244,247,251,0.22)',
  uiInk: '#0f1115',
  uiMuted: '#6b7078',
  uiLine: '#e6eaee',
  accent: '#0a84ff',
  accentText: '#0050a8',
};

export const TYPE = {hero: 96, support: 40, micro: 26};

/** Offset from a line box's top to its cap line for Inter (ascent 0.97, cap 0.73) at a given size and line-height. */
export const capOffset = (size: number, lh: number) => (lh * size - 1.21 * size) / 2 + 0.24 * size;

export const Canvas: React.FC<{w?: number; h?: number; lift?: {x: number; y: number}; children: React.ReactNode}> = ({w = SW, h = SH, lift = {x: 0.7, y: 0.62}, children}) => (
  <AbsoluteFill
    style={{
      width: w,
      height: h,
      overflow: 'hidden',
      fontFamily,
      fontFeatureSettings: '"cv02","cv03","cv04","ss03"',
      color: C.ink,
      background: `radial-gradient(ellipse ${0.9 * SW}px ${0.6 * SH}px at ${lift.x * 100}% ${lift.y * 100}%, ${C.baseAlt}, ${C.base} 78%)`,
    }}
  >
    {children}
    {/* Grain: the only texture in the system. */}
    <svg width={w} height={h} style={{position: 'absolute', inset: 0, opacity: 0.05, mixBlendMode: 'overlay', pointerEvents: 'none'}}>
      <filter id="g">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={7} />
      </filter>
      <rect width="100%" height="100%" filter="url(#g)" />
    </svg>
  </AbsoluteFill>
);

/** Fixed furniture: the lockup at the top-left margin corner. */
export const Lockup: React.FC<{x?: number; y?: number; h?: number}> = ({x = M, y = M, h = 30}) => (
  <div style={{position: 'absolute', left: x, top: y, height: h, display: 'flex', alignItems: 'center', gap: h * 0.36}}>
    <Mark height={h} color={C.accent} />
    <div style={{fontSize: h * 1.12, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, color: C.ink}}>verity</div>
  </div>
);

/** Fixed furniture: micro text on the bottom margin line. */
export const Micro: React.FC<{children: React.ReactNode; align?: 'left' | 'right'; style?: React.CSSProperties}> = ({children, align = 'left', style}) => (
  <div style={{position: 'absolute', [align]: M, bottom: M, fontSize: TYPE.micro, lineHeight: 1, fontWeight: 400, color: C.muted, ...style}}>{children}</div>
);

/** The two-tone statement: ink statement, muted completion. Breaks are written with \n. `top` is the cap line. */
export const Statement: React.FC<{ink: string; muted?: string; top?: number; left?: number; size?: number; width?: number}> = ({ink, muted, top = CAP, left = M, size = TYPE.hero, width = SW - 2 * M}) => {
  const lh = 1.04;
  return (
    <div style={{position: 'absolute', left, top: top - capOffset(size, lh), width, fontSize: size, lineHeight: lh, fontWeight: 300, letterSpacing: '-0.035em', whiteSpace: 'pre-line'}}>
      <span style={{color: C.ink}}>{ink}</span>
      {muted ? <span style={{color: C.muted}}>{'\n' + muted}</span> : null}
    </div>
  );
};

/** Last baseline of a Statement block of `lines` lines, for anchoring things below it. */
export const statementBottom = (lines: number, top = CAP, size = TYPE.hero) => top + (lines - 1) * size * 1.04 + 0.73 * size;

const Label: React.FC<{children: React.ReactNode; s: number; style?: React.CSSProperties}> = ({children, s, style}) => (
  <div style={{fontSize: 15 * s, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.uiMuted, whiteSpace: 'nowrap', ...style}}>{children}</div>
);

/** The real Verity panel (light theme, light glass) from a content Panel. Drawn at scale `s`; `pad` is the inner left
 *  inset, so a panel can start off-canvas and still put its text on the margin. `focus` tints one attention row. */
export const UIPanel: React.FC<{
  data: PanelData;
  x: number;
  y: number;
  w: number;
  h: number;
  s?: number;
  pad?: number;
  metrics?: number[];
  rows?: number;
  focus?: number;
}> = ({data, x, y, w, h, s = 1.5, pad = 32 * 1.5, metrics = [0, 1, 2, 3], rows = 4, focus}) => (
  <div style={{...GLASS_LIGHT, position: 'absolute', left: x, top: y, width: w, height: h, borderRadius: 24 * s, overflow: 'hidden', color: C.uiInk, boxSizing: 'border-box'}}>
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0) 30%)'}} />
    {/* Chrome bar */}
    <div style={{position: 'relative', height: 44 * s, display: 'flex', alignItems: 'center', gap: 10 * s, paddingLeft: pad, paddingRight: 28 * s, borderBottom: `1px solid ${C.uiLine}`}}>
      <Mark height={16 * s} color={C.accent} />
      <Label s={s} style={{color: C.uiInk}}>
        Verity / {data.title}
      </Label>
      <Label s={s}>· {data.meta}</Label>
      <div style={{flex: 1}} />
      <span style={{width: 6 * s, height: 6 * s, borderRadius: 3 * s, background: C.accent}} />
      <Label s={s}>Live</Label>
    </div>
    {/* Metrics */}
    <div style={{position: 'relative', display: 'flex', gap: 12 * s, padding: `${18 * s}px ${20 * s}px 0 ${pad}px`}}>
      {metrics.map((i) => {
        const m = data.metrics[i];
        return (
          <div key={m.label} style={{...CARD_LIGHT, width: 220 * s, flex: 'none', boxSizing: 'border-box', padding: `${14 * s}px ${18 * s}px`, borderRadius: 14 * s}}>
            <div style={{fontSize: 15 * s, fontWeight: 500, color: C.uiMuted}}>{m.label}</div>
            <div style={{fontSize: 34 * s, fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15, fontVariantNumeric: 'tabular-nums'}}>{m.value}</div>
            <div style={{fontSize: 14 * s, color: C.accentText}}>{m.note}</div>
          </div>
        );
      })}
    </div>
    {/* Attention rows */}
    <div style={{position: 'relative', padding: `${22 * s}px ${20 * s}px 0 ${pad}px`}}>
      <Label s={s} style={{marginBottom: 10 * s}}>{data.rowsLabel}</Label>
      {data.rows.slice(0, rows).map((r, i) => (
        <div
          key={r.name}
          style={{
            ...CARD_LIGHT,
            marginBottom: 10 * s,
            width: 640 * s,
            boxSizing: 'border-box',
            padding: `${13 * s}px ${20 * s}px`,
            borderRadius: 14 * s,
            background: i === focus ? 'linear-gradient(rgba(10,132,255,0.08), rgba(10,132,255,0.08)), #fff' : CARD_LIGHT.background,
            borderColor: i === focus ? 'rgba(10,132,255,0.5)' : undefined,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12 * s}}>
            <span style={{width: 7 * s, height: 7 * s, borderRadius: 4 * s, flex: 'none', background: r.active ? C.accent : C.uiLine}} />
            <div style={{fontSize: 19 * s, fontWeight: 500, letterSpacing: '-0.01em', whiteSpace: 'nowrap'}}>{r.name}</div>
          </div>
          <div style={{fontSize: 15 * s, color: C.uiMuted, marginTop: 4 * s, marginLeft: 19 * s, whiteSpace: 'nowrap'}}>{r.meta}</div>
        </div>
      ))}
    </div>
  </div>
);

/** Paid CTA: one accent pill. */
export const Pill: React.FC<{children: React.ReactNode; x: number; y: number}> = ({children, x, y}) => (
  <div style={{position: 'absolute', left: x, top: y, height: 64, padding: '0 32px', borderRadius: 32, background: C.accent, color: '#fff', fontSize: 28, fontWeight: 500, letterSpacing: '-0.01em', display: 'flex', alignItems: 'center'}}>
    {children}
  </div>
);
