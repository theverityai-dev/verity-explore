import React, {useLayoutEffect} from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';

export const {fontFamily} = loadFont('normal', {weights: ['200', '300', '400', '500', '600'], subsets: ['latin']});

export const FW = 1920;
export const FH = 1080;
export const FFPS = 60;
export const PERSP = 1600;

export type Cam = {x: number; y: number; z: number; rx: number; ry: number; rz: number};

/** The film runs on the site's dark theme tokens. verity.css scopes them to :root, so flip the attribute for the
 *  lifetime of the composition and restore it afterwards. */
export const useDarkTheme = () => {
  useLayoutEffect(() => {
    const el = document.documentElement;
    const prev = el.getAttribute('data-theme');
    el.setAttribute('data-theme', 'dark');
    return () => {
      if (prev) el.setAttribute('data-theme', prev);
      else el.removeAttribute('data-theme');
    };
  }, []);
};

/** A CSS-3D camera. cam.z is a forward dolly (objects at z=0 scale by PERSP / (PERSP - cam.z)). */
export const Stage: React.FC<{cam: Cam; children: React.ReactNode}> = ({cam, children}) => (
  <div style={{position: 'absolute', inset: 0, perspective: PERSP, perspectiveOrigin: '50% 50%'}}>
    <div
      style={{
        position: 'absolute',
        left: FW / 2,
        top: FH / 2,
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${cam.rx}deg) rotateY(${cam.ry}deg) rotateZ(${cam.rz}deg) translate3d(${-cam.x}px, ${-cam.y}px, ${cam.z}px)`,
      }}
    >
      {children}
    </div>
  </div>
);

export const Obj: React.FC<{
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  s?: number;
  w?: number;
  h?: number;
  blur?: number;
  opacity?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}> = ({x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1, w, h, blur = 0, opacity = 1, style, children}) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: w,
      height: h,
      transformStyle: 'preserve-3d',
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s}) translate(-50%, -50%)`,
      opacity,
      filter: blur > 0.25 ? `blur(${blur}px)` : undefined,
      ...style,
    }}
  >
    {children}
  </div>
);

/** Depth-of-field: blur grows with distance from the focus plane (camera-relative depth). */
export const dof = (objZ: number, camZ: number, focus = 0, k = 0.012, max = 14) =>
  Math.min(max, Math.abs(objZ + camZ - focus) * k);

/** Cheap deterministic hash in 0..1. */
export const rnd = (n: number) => {
  const v = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
};

/** A lit floor plane that follows the camera in x so it reads as endless. Grid + soft light pool, faded by distance. */
export const Floor: React.FC<{y: number; camX: number; opacity: number}> = ({y, camX, opacity}) =>
  opacity <= 0.003 ? null : (
    <Obj x={camX} y={y} z={-1200} rx={90} w={7000} h={7000} opacity={opacity}>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255,244,226,0.14), transparent 30%), linear-gradient(var(--grid-line) 2px, transparent 2px), linear-gradient(90deg, var(--grid-line) 2px, transparent 2px)',
          backgroundSize: '100% 100%, 140px 140px, 140px 140px',
          backgroundPosition: `0 0, ${-camX}px 0, ${-camX}px 0`,
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 12%, transparent 56%)',
          maskImage: 'radial-gradient(circle at 50% 50%, #000 12%, transparent 56%)',
        }}
      />
    </Obj>
  );

/** Floating motes. Deterministic, drifting, depth-blurred. */
export const Dust: React.FC<{t: number; cam: Cam; opacity: number; n?: number; speed?: number}> = ({t, cam, opacity, n = 64, speed = 1}) => {
  if (opacity <= 0.003) return null;
  return (
    <>
      {Array.from({length: n}).map((_, i) => {
        const bx = (rnd(i) - 0.5) * 3600 + cam.x;
        const bz = (rnd(i + 7) - 0.5) * 2400 - 200;
        const rise = (t * (6 + rnd(i + 3) * 14) * speed + rnd(i + 5) * 1600) % 1600;
        const by = 800 - rise;
        const size = 2 + rnd(i + 11) * 5;
        const b = dof(bz, cam.z, 0, 0.011, 12);
        const o = (0.16 + rnd(i + 13) * 0.5) * opacity;
        return (
          <Obj
            key={i}
            x={bx + Math.sin(t * 0.25 + i) * 26}
            y={by - 400}
            z={bz}
            blur={b}
            opacity={o}
            w={size}
            h={size}
            style={{borderRadius: '50%', background: 'rgb(255,247,232)', boxShadow: '0 0 8px rgba(255,247,232,0.6)'}}
          />
        );
      })}
    </>
  );
};

/** Colour grade: vignette, warm key light, film grain. Sits above everything. */
export const Grade: React.FC<{t: number; vignette?: number}> = ({t, vignette = 0.62}) => (
  <AbsoluteFill style={{pointerEvents: 'none'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse 60% 48% at 22% -6%, rgba(255,238,212,0.13), transparent 70%)'}} />
    <AbsoluteFill style={{background: `radial-gradient(ellipse 82% 78% at 50% 48%, transparent 42%, rgba(0,0,0,${vignette}) 100%)`}} />
    <svg width={FW} height={FH} style={{position: 'absolute', inset: 0, opacity: 0.07, mixBlendMode: 'overlay'}}>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} seed={Math.floor(t * 24) % 97} />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  </AbsoluteFill>
);

/** The film base: deep environment colour with a soft lit centre. */
export const FilmBase: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{background: 'radial-gradient(ellipse 70% 60% at 50% 56%, var(--base-alt), var(--base) 78%)', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', overflow: 'hidden'}}>
    {children}
  </AbsoluteFill>
);

export type FilmSfx = {file: string; at: number; vol: number};

/** Sound design: a continuous drone plus placed hits. Files live in public/film. */
export const FilmAudio: React.FC<{sfx: FilmSfx[]; droneVol?: number}> = ({sfx, droneVol = 0.5}) => (
  <>
    <Audio src={staticFile('film/drone.wav')} volume={droneVol} />
    {sfx.map((s, i) => (
      <Sequence key={i} from={Math.max(0, Math.round(s.at * FFPS))}>
        <Audio src={staticFile(`film/${s.file}`)} volume={s.vol} />
      </Sequence>
    ))}
  </>
);
