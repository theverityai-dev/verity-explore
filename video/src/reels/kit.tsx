import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';

export const {fontFamily} = loadFont('normal', {weights: ['300', '400', '500', '600'], subsets: ['latin']});

export const RW = 1080;
export const RH = 1920;
export const RFPS = 60;

/** Brand glass: the same recipe as the site nav (css/verity.css: --surface-floating, blur 20-24px,
 *  saturate 150-180%, specular top rim), with a soft diagonal sheen. Needs content behind it to read as glass. */
export const Glass: React.FC<{
  style?: React.CSSProperties;
  radius?: number;
  blur?: number;
  children?: React.ReactNode;
}> = ({style, radius = 24, blur = 26, children}) => (
  <div
    style={{
      position: 'relative',
      boxSizing: 'border-box',
      borderRadius: radius,
      background: 'var(--surface-floating)',
      backdropFilter: `blur(${blur}px) saturate(180%)`,
      WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
      border: '1px solid var(--nav-border)',
      boxShadow: 'inset 0 1px 0 var(--nav-specular), var(--elev-high)',
      ...style,
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: radius,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 38%)',
      }}
    />
    <div style={{position: 'relative'}}>{children}</div>
  </div>
);

/** Stage: base colour, faint masked grid, Inter, site feature settings. `t` drives the grid drift. */
export const ReelStage: React.FC<{t: number; children: React.ReactNode}> = ({t, children}) => {
  const mask = 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 100%)';
  return (
    <AbsoluteFill style={{background: 'var(--base)', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          backgroundPosition: `${-t * 5}px ${-t * 3}px`,
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

/** A barcode, drawn left to right. Used as the match-cut object between reels. */
export const Barcode: React.FC<{width: number; height: number; p: number}> = ({width, height, p}) => {
  const widths = [3, 1, 2, 1, 4, 1, 2, 3, 1, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 2, 4, 1, 1, 3, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 3, 2];
  const total = widths.reduce((a, b) => a + b * 2, 0);
  let x = 0;
  const unit = width / total;
  return (
    <svg width={width} height={height} style={{overflow: 'visible'}}>
      {widths.map((w, i) => {
        const bx = x;
        x += w * 2 * unit;
        const show = Math.max(0, Math.min(1, p * 1.3 - (bx / width) * 0.3));
        return <rect key={i} x={bx} y={0} width={w * unit} height={height * show} rx={0.5} style={{fill: 'var(--ink)'}} />;
      })}
    </svg>
  );
};

export type Sfx = {file: string; at: number; vol: number};

/** Brag-bundled music bed (120 BPM, beat every 0.5s from 3.02s) plus sparse SFX. All paths are in public/brag. */
export const ReelAudio: React.FC<{seconds: number; sfx: Sfx[]; musicVol?: number}> = ({seconds, sfx, musicVol = 0.36}) => (
  <>
    <Audio src={staticFile('brag/music.mp3')} volume={(f) => musicVol * Math.min(1, f / RFPS) * Math.min(1, (seconds - f / RFPS) / 2)} />
    {sfx.map((s, i) => (
      <Sequence key={i} from={Math.round(s.at * RFPS)}>
        <Audio src={staticFile(`brag/${s.file}`)} volume={s.vol} />
      </Sequence>
    ))}
  </>
);
