import React from 'react';
import {Check, Mark} from '../../trailer/ui';
import {capOffset} from '../../social/kit';
import {fontFamily} from '../kit';

/** R07 world: a pale architectural studio lit from the upper right. Objects are drawn as what they are (acrylic, drafting
 *  film, the real Verity UI) and never imitate photography. See video/ads/reels/R07-erp-built-module-by-module/TREATMENT.md. */

export const HORIZON = 1180;
const LENS = 'perspective(2400px)'; // about 85 mm: planes turn without distortion
const HAIR = 'rgba(15,17,21,0.08)';
const DRAFT = 'rgba(70,90,120,'; // neutral slate for the drafting grid; Verity blue is kept for paths and state

export const Studio: React.FC<{children?: React.ReactNode; shaft?: number}> = ({children, shaft = 0}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', background: '#F2F4F7'}}>
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: HORIZON, background: 'radial-gradient(ellipse 120% 85% at 88% 6%, #FBFCFD 0%, #F3F5F8 52%, #EBEEF2 100%)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: HORIZON, bottom: 0, background: 'linear-gradient(180deg, #E4E7EC 0%, #EBEEF2 30%, #F1F3F6 100%)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: HORIZON - 1, height: 3, background: 'rgba(15,17,21,0.06)', filter: 'blur(1.5px)'}} />
    {/* The key light falling across the wall and floor. */}
    <div style={{position: 'absolute', left: 430 + shaft, top: -420, width: 560, height: 2800, transform: 'rotate(24deg)', transformOrigin: '50% 0', background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 46%, rgba(255,255,255,0) 100%)', filter: 'blur(26px)'}} />
    {children}
  </div>
);

/** Contact shadow plus a long soft cast shadow falling down and to the left, away from the key. */
export const CastShadow: React.FC<{x: number; y: number; w: number; len?: number; o?: number}> = ({x, y, w, len = 200, o = 0.11}) => (
  <>
    <div style={{position: 'absolute', left: x - len * 0.85, top: y, width: w, height: len, transform: 'skewX(-48deg)', transformOrigin: '0 0', background: `linear-gradient(180deg, rgba(15,17,21,${o}), rgba(15,17,21,0))`, filter: 'blur(20px)'}} />
    <div style={{position: 'absolute', left: x + 12, top: y - 7, width: w - 24, height: 14, borderRadius: '50%', background: `rgba(15,17,21,${o * 1.6})`, filter: 'blur(7px)'}} />
  </>
);

type Placed = {x: number; y: number; w: number; h: number; ry?: number; rx?: number; blur?: number; opacity?: number; children?: React.ReactNode};

/** A frosted acrylic plane with visible edge thickness. It turns about its base, so it stands on the floor. */
export const Acrylic: React.FC<Placed & {shadow?: boolean; radius?: number}> = ({x, y, w, h, ry = 0, rx = 0, blur, opacity = 1, shadow = true, radius = 20, children}) => (
  <>
    {shadow ? <CastShadow x={x} y={y + h} w={w} /> : null}
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h, transform: `${LENS} rotateY(${ry}deg) rotateX(${rx}deg)`, transformOrigin: '50% 100%', filter: blur ? `blur(${blur}px)` : undefined, opacity}}>
      <div style={{position: 'absolute', left: 9, right: -9, top: 7, bottom: -7, borderRadius: radius, background: 'linear-gradient(135deg, rgba(206,214,226,0.95), rgba(232,237,244,0.8))'}} />
      <div style={{position: 'absolute', inset: 0, borderRadius: radius, overflow: 'hidden', background: 'linear-gradient(155deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.66) 46%, rgba(243,246,250,0.8) 100%)', border: '1px solid rgba(255,255,255,0.98)', boxShadow: `inset 0 1px 0 #fff, inset 0 0 0 1px rgba(15,17,21,0.05), 0 2px 4px rgba(15,17,21,0.05)`}}>
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(122deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 30%)'}} />
        {children}
      </div>
    </div>
  </>
);

/** Matte drafting film: neutral drafting grid, registration marks, a title block. */
export const Sheet: React.FC<Placed & {title?: [string, string]}> = ({x, y, w, h, ry = 0, rx = 0, blur, opacity = 1, title, children}) => {
  const reg = (style: React.CSSProperties) => (
    <svg width={28} height={28} viewBox="0 0 28 28" style={{position: 'absolute', ...style}}>
      <path d="M14 2v24M2 14h24" stroke="rgba(15,17,21,0.35)" strokeWidth={1.2} />
      <circle cx={14} cy={14} r={6} fill="none" stroke="rgba(15,17,21,0.35)" strokeWidth={1.2} />
    </svg>
  );
  return (
    <>
      <CastShadow x={x + 20} y={y + h} w={w - 40} len={120} o={0.08} />
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: w,
          height: h,
          transform: `${LENS} rotateY(${ry}deg) rotateX(${rx}deg)`,
          transformOrigin: '50% 100%',
          filter: blur ? `blur(${blur}px)` : undefined,
          opacity,
          borderRadius: 6,
          background: '#FBFCFD',
          backgroundImage: `linear-gradient(${DRAFT}0.12) 1px, transparent 1px), linear-gradient(90deg, ${DRAFT}0.12) 1px, transparent 1px), linear-gradient(${DRAFT}0.05) 1px, transparent 1px), linear-gradient(90deg, ${DRAFT}0.05) 1px, transparent 1px)`,
          backgroundSize: '120px 120px, 120px 120px, 24px 24px, 24px 24px',
          backgroundPosition: '-1px -1px',
          border: `1px solid ${HAIR}`,
          boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 34px 70px -24px rgba(15,17,21,0.2)',
        }}
      >
        {reg({left: 14, top: 14})}
        {reg({right: 14, top: 14})}
        {reg({left: 14, bottom: 14})}
        {title ? (
          <div style={{position: 'absolute', right: 24, bottom: 24, width: 390, border: '1px solid rgba(15,17,21,0.32)', background: 'rgba(251,252,253,0.9)', fontSize: 17, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>
            <div style={{padding: '10px 14px', borderBottom: '1px solid rgba(15,17,21,0.2)', color: 'var(--ink)'}}>{title[0]}</div>
            <div style={{padding: '10px 14px'}}>{title[1]}</div>
          </div>
        ) : null}
        {children}
      </div>
    </>
  );
};

/** Hero statement. Lines are written, not wrapped. `dim` sets the opacity of lines already read. */
export const Title: React.FC<{lines: string[]; size: number; cap?: number; x?: number; accent?: number[]; dim?: number[]; align?: 'left' | 'center'; lh?: number}> = ({lines, size, cap = 380, x = 80, accent = [], dim = [], align = 'left', lh = 1.06}) => {
  return (
    <div style={{position: 'absolute', left: x, right: align === 'center' ? x : undefined, top: cap - capOffset(size, lh), fontSize: size, lineHeight: lh, fontWeight: 300, letterSpacing: '-0.038em', textAlign: align}}>
      {lines.map((l, i) => (
        <div key={i} style={{whiteSpace: 'nowrap', color: accent.includes(i) ? 'var(--accent)' : 'var(--ink)', opacity: dim[i] ?? 1}}>
          {l}
        </div>
      ))}
    </div>
  );
};

export const Support: React.FC<{text: string; top: number; x?: number; size?: number; align?: 'left' | 'center'}> = ({text, top, x = 80, size = 34, align = 'left'}) => (
  <div style={{position: 'absolute', left: x, right: align === 'center' ? x : undefined, top, fontSize: size, lineHeight: 1.3, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink-muted)', textAlign: align}}>{text}</div>
);

/** One caption chunk, burned in at the bottom of the safe band. */
export const Caption: React.FC<{text: string}> = ({text}) => (
  <div style={{position: 'absolute', left: 80, right: 80, top: 1430, textAlign: 'center', fontSize: 42, fontWeight: 500, lineHeight: 1.22, letterSpacing: '-0.02em', color: 'rgba(15,17,21,0.88)'}}>{text}</div>
);

/** Workflow figures drawn as line and node. Each business has its own shape. */
type Pt = [number, number];
const NODE = {w: 72, h: 44};
/** `draw` 0..1 draws the figure on: links stroke out from their first node in order, nodes appear as the path reaches them. */
const Figure: React.FC<{nodes: Pt[]; links: [number, number][]; w: number; h: number; trace?: boolean; draw?: number}> = ({nodes, links, w, h, trace, draw = 1}) => {
  const step = (i: number, n: number) => Math.min(1, Math.max(0, (draw - (i / n) * 0.6) / 0.4));
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{overflow: 'visible'}}>
      {links.map(([a, b], i) => {
        const len = Math.hypot(nodes[b][0] - nodes[a][0], nodes[b][1] - nodes[a][1]);
        return (
          <path key={i} d={`M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}`} stroke={trace ? 'var(--accent)' : 'rgba(15,17,21,0.3)'} strokeWidth={trace ? 3 : 2.5} strokeLinecap="round" fill="none" strokeDasharray={len} strokeDashoffset={len * (1 - step(i, links.length))} />
        );
      })}
      {nodes.map(([cx, cy], i) => (
        <rect key={i} x={cx - NODE.w / 2} y={cy - NODE.h / 2} width={NODE.w} height={NODE.h} rx={12} fill="#fff" stroke={trace ? 'var(--accent)' : 'rgba(15,17,21,0.2)'} strokeWidth={2} opacity={step(i, nodes.length)} />
      ))}
    </svg>
  );
};
export const Chain: React.FC<{w?: number}> = ({w = 380}) => <Figure w={w} h={60} nodes={[[36, 30], [36 + (w - 72) / 3, 30], [36 + (2 * (w - 72)) / 3, 30], [w - 36, 30]]} links={[[0, 1], [1, 2], [2, 3]]} />;
export const Branch: React.FC<{trace?: boolean; draw?: number}> = ({trace, draw}) => <Figure w={460} h={250} trace={trace} draw={draw} nodes={[[36, 125], [170, 125], [300, 40], [300, 210], [424, 125]]} links={[[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]]} />;
export const Loop: React.FC = () => <Figure w={300} h={240} nodes={[[150, 30], [264, 200], [36, 200]]} links={[[0, 1], [1, 2], [2, 0]]} />;

/** The rigid lattice of a fixed system: identical blocks, closed. */
export const Lattice: React.FC<{cols: number; rows: number; size?: number; gap?: number}> = ({cols, rows, size = 56, gap = 14}) => (
  <div style={{display: 'grid', gridTemplateColumns: `repeat(${cols}, ${size}px)`, gap}}>
    {Array.from({length: cols * rows}).map((_, i) => (
      <div key={i} style={{width: size, height: size, borderRadius: 10, background: 'rgba(15,17,21,0.07)', boxShadow: 'inset 0 0 0 1px rgba(15,17,21,0.06)'}} />
    ))}
  </div>
);

/** Real capability names (content/capabilities.js). Shown as structure only: no invented metrics. */
export const MODULES = ['Workflows', 'Orders', 'People', 'Inventory', 'Reports and analytics'];

/** The Verity workspace being built module by module. `built` modules are solid, the next is still a blueprint. */
export const Workspace: React.FC<Placed & {built: number}> = ({x, y, w, h, ry = 0, rx = 0, blur, opacity = 1, built}) => {
  /** `built` may be fractional: module i is solid as built passes i + 1, and crossfades from its blueprint on the way. */
  const Tile: React.FC<{i: number; style?: React.CSSProperties}> = ({i, style}) => {
    const k = Math.min(1, Math.max(0, built - i));
    const drafting = built > i - 1 && k < 1;
    return (
      <div
        style={{
          position: 'relative',
          borderRadius: 16,
          boxSizing: 'border-box',
          border: drafting ? '2px dashed rgba(10,132,255,0.55)' : '2px dashed rgba(15,17,21,0.12)',
          backgroundImage: `linear-gradient(${DRAFT}0.07) 1px, transparent 1px), linear-gradient(90deg, ${DRAFT}0.07) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          ...style,
        }}
      >
        <div style={{padding: '20px 22px', fontSize: 26, fontWeight: 500, letterSpacing: '-0.015em', color: drafting ? 'var(--accent-text)' : 'rgba(15,17,21,0.35)'}}>{MODULES[i]}</div>
        {k > 0 ? (
          <div style={{position: 'absolute', inset: -2, borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', background: '#fff', border: `1px solid ${HAIR}`, boxShadow: '0 1px 2px rgba(15,17,21,0.05)', opacity: k, transform: `scale(${0.97 + 0.03 * k})`}}>
            <div style={{fontSize: 26, fontWeight: 500, letterSpacing: '-0.015em', color: 'var(--ink)'}}>{MODULES[i]}</div>
            <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10}}>
              {[0.82, 0.6, 0.7].map((f, j) => (
                <div key={j} style={{height: 10, width: `${f * 100 * k}%`, borderRadius: 5, background: 'var(--line)'}} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  return (
    <>
      <CastShadow x={x + 30} y={y + h} w={w - 60} len={160} o={0.1} />
      <div style={{position: 'absolute', left: x, top: y, width: w, height: h, transform: `${LENS} rotateY(${ry}deg) rotateX(${rx}deg)`, transformOrigin: '50% 100%', filter: blur ? `blur(${blur}px)` : undefined, opacity, borderRadius: 24, overflow: 'hidden', background: 'rgba(250,251,253,0.97)', border: '1px solid rgba(255,255,255,0.95)', boxShadow: 'inset 0 1px 0 #fff, 0 0 0 1px rgba(15,17,21,0.06), 0 40px 90px -30px rgba(15,17,21,0.28)'}}>
        <div style={{height: 64, display: 'flex', alignItems: 'center', gap: 12, padding: '0 28px', borderBottom: '1px solid var(--line)'}}>
          <Mark height={22} color="var(--ink)" />
          <div style={{fontSize: 24, fontWeight: 500}}>Verity</div>
          <div style={{fontSize: 24, color: 'var(--ink-muted)'}}>/ Your business</div>
        </div>
        <div style={{display: 'flex', height: h - 64}}>
          <div style={{width: 284, flex: 'none', borderRight: '1px solid var(--line)', padding: '24px 22px', boxSizing: 'border-box'}}>
            <div style={{fontSize: 18, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 18}}>Modules</div>
            {MODULES.map((m, i) => {
              const k = Math.min(1, Math.max(0, built - i));
              return (
                <div key={m} style={{display: 'flex', alignItems: 'center', gap: 12, height: 46, fontSize: 20, color: `rgba(15,17,21,${0.38 + 0.62 * k})`, whiteSpace: 'nowrap'}}>
                  <span style={{position: 'relative', width: 9, height: 9, flex: 'none'}}>
                    <span style={{position: 'absolute', inset: 0, borderRadius: 5, boxSizing: 'border-box', border: `2px solid ${built > i - 1 && k < 1 ? 'var(--accent)' : 'rgba(15,17,21,0.2)'}`}} />
                    <span style={{position: 'absolute', inset: 0, borderRadius: 5, background: 'var(--ink)', opacity: k}} />
                  </span>
                  {m}
                </div>
              );
            })}
          </div>
          <div style={{flex: 1, padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr', gap: 18}}>
            <Tile i={0} />
            <Tile i={1} />
            <Tile i={2} />
            <Tile i={3} />
            <Tile i={4} style={{gridColumn: '1 / span 2'}} />
          </div>
        </div>
      </div>
    </>
  );
};

/** One layer of the exploded map, seen in axonometric. */
export const Plate: React.FC<{cx: number; cy: number; size: number; opacity?: number}> = ({cx, cy, size, opacity = 1}) => (
  <div
    style={{
      position: 'absolute',
      left: cx - size / 2,
      top: cy - size / 2,
      width: size,
      height: size,
      transform: `${LENS} rotateX(58deg) rotateZ(-40deg)`,
      borderRadius: 22,
      opacity,
      backgroundColor: 'rgba(249,251,253,0.86)',
      backgroundImage: `linear-gradient(155deg, rgba(255,255,255,0.7), rgba(255,255,255,0) 60%), linear-gradient(${DRAFT}0.08) 1px, transparent 1px), linear-gradient(90deg, ${DRAFT}0.08) 1px, transparent 1px)`,
      backgroundSize: '100% 100%, 48px 48px, 48px 48px',
      border: '1px solid rgba(255,255,255,0.98)',
      boxShadow: 'inset 0 0 0 1px rgba(15,17,21,0.06), 0 18px 40px -18px rgba(15,17,21,0.22)',
    }}
  />
);

export const Tick: React.FC<{size?: number}> = ({size = 52}) => <Check p={1} size={size} />;
