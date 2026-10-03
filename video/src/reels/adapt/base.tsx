import React from 'react';
import {AbsoluteFill, Easing, continueRender, delayRender, staticFile, useVideoConfig} from 'remotion';
import {seg} from '../../shared/timeline';
import {DK} from '../../film/layout';
import {DAY} from '../../brand/language';

/** Fonts are bundled (public/fonts, from @fontsource) so the reel renders identically offline and in locked-down CI. */
export const fontFamily = 'Inter';
export const hand = 'Caveat';
const FONT_FILES: [string, string, string][] = [
  ['Inter', '200', 'inter-latin-200-normal.woff2'],
  ['Inter', '300', 'inter-latin-300-normal.woff2'],
  ['Inter', '400', 'inter-latin-400-normal.woff2'],
  ['Inter', '500', 'inter-latin-500-normal.woff2'],
  ['Inter', '600', 'inter-latin-600-normal.woff2'],
  ['Caveat', '500', 'caveat-latin-500-normal.woff2'],
  ['Caveat', '600', 'caveat-latin-600-normal.woff2'],
];
if (typeof document !== 'undefined' && !(window as unknown as {__adaptFonts?: boolean}).__adaptFonts) {
  (window as unknown as {__adaptFonts?: boolean}).__adaptFonts = true;
  const handle = delayRender('adapt fonts');
  Promise.all(
    FONT_FILES.map(async ([family, weight, file]) => {
      const face = new FontFace(family, `url(${staticFile(`fonts/${file}`)}) format('woff2')`, {weight});
      await face.load();
      document.fonts.add(face);
    }),
  )
    .catch((e) => console.error('font load failed', e))
    .finally(() => continueRender(handle));
}

/** 8:9 portrait reel (1080x1215), 60fps. All layout is in these coordinates; nothing is scaled from 16:9. */
export const W = 1080;
export const H = 1215;
export const FPS = 60;
export const SECONDS = 45;
export const DURATION = SECONDS * FPS;

export const glide = Easing.bezier(0.22, 1, 0.36, 1);
export const smooth = Easing.bezier(0.45, 0, 0.15, 1);
export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;
export const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

/** Dark world: the site's dark tokens (css/verity.css). The Verity surface itself is always the light theme. */
export const D = {...DK, grid: 'rgba(244,247,251,0.05)'};

/** Light theme tokens, mirrored from css/verity.css :root. The surface cannot read the vars (the page is in dark/light
 *  attribute mode), so they are pinned here. Accent is the one live token. */
export const L = {
  base: '#f7f8fa',
  baseAlt: '#f1f3f7',
  ink: '#0f1115',
  muted: '#6b7078',
  body: 'rgba(15,17,21,0.66)',
  faint: 'rgba(15,17,21,0.45)',
  line: '#e6eaee',
  hair: '#edeff3',
  grid: 'rgba(15,17,21,0.05)',
  accent: 'var(--accent)',
  accentText: 'var(--accent-text)',
  a08: 'var(--accent-a08)',
  a14: 'var(--accent-a14)',
  a24: 'var(--accent-a24)',
  a40: 'var(--accent-a40)',
};
export const ACCENT = '#0a84ff';

/** Daylight paper world: the paper field (#fefefc) with only a whisper of corner falloff so white glass can read. */
export const PaperBase: React.FC<{t: number}> = () => (
  <AbsoluteFill style={{background: `radial-gradient(ellipse 95% 80% at 50% 42%, ${DAY.paper} 0%, #f8f9fa 60%, #eff2f5 100%)`}} />
);

/** Daylight grade: a faint warm sun wash from the top-left and very fine grain. No vignette, nothing dark. */
export const DayGrade: React.FC<{t: number}> = ({t}) => {
  const {width: cw, height: ch} = useVideoConfig();
  return (
  <AbsoluteFill style={{pointerEvents: 'none'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse 80% 40% at 18% -6%, rgba(255,240,215,0.38), transparent 70%)'}} />
    <svg width={cw} height={ch} style={{position: 'absolute', inset: 0, opacity: 0.035, mixBlendMode: 'overlay'}}>
      <filter id="grain-day">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} seed={Math.floor(t * 24) % 97} />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-day)" />
    </svg>
  </AbsoluteFill>
  );
};

/* -------------------------------------------------------------------------------------------------------------------
   Depth. A 3D camera without preserve-3d, so backdrop-filter glass keeps seeing the world behind it.
   Each object is projected by hand (position, scale, depth-of-field) and carries its own local tilt.
   ------------------------------------------------------------------------------------------------------------------- */
export const PERSP = 1500;
export type Cam = {x: number; y: number; z: number};

export const Obj3: React.FC<{
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  w: number;
  h: number;
  cam: Cam;
  opacity?: number;
  /** blur per unit of distance from the focus plane */
  dof?: number;
  focus?: number;
  maxBlur?: number;
  /** fixed blur in px (overrides depth-of-field) */
  blur?: number;
  /** extra uniform scale on top of the perspective scale */
  k?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, w, h, cam, opacity = 1, dof = 0.022, focus = 60, maxBlur = 22, blur: fixedBlur, k = 1, children, style}) => {
  const {width: cw, height: ch} = useVideoConfig();
  const zz = z + cam.z;
  if (zz > PERSP - 140 || opacity <= 0.003) return null;
  const s = PERSP / (PERSP - zz);
  const px = cw / 2 + (x - cam.x) * s;
  const py = ch / 2 + (y - cam.y) * s;
  const blur = fixedBlur ?? Math.min(maxBlur, Math.max(0, Math.abs(zz - focus) * dof - 1.2));
  return (
    <div
      style={{
        position: 'absolute',
        left: px - w / 2,
        top: py - h / 2,
        width: w,
        height: h,
        opacity,
        transform: `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s * k})`,
        filter: blur > 0.3 ? `blur(${blur}px)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------------------------
   World, grade
   ------------------------------------------------------------------------------------------------------------------- */
export const WorldBase: React.FC<{cam: Cam}> = ({cam}) => {
  const mask = 'radial-gradient(ellipse 85% 62% at 50% 52%, #000 18%, transparent 78%)';
  return (
    <AbsoluteFill style={{background: `radial-gradient(ellipse 90% 60% at 50% 55%, ${D.baseAlt}, ${D.base} 80%)`}}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${D.grid} 1px, transparent 1px), linear-gradient(90deg, ${D.grid} 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
          backgroundPosition: `${-cam.x * 0.25}px ${-cam.y * 0.25 - cam.z * 0.12}px`,
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />
    </AbsoluteFill>
  );
};

/** Colour grade: one soft warm key from top-left, vignette, fine grain. Sits above everything. */
export const Grade: React.FC<{t: number; vignette?: number; light?: number}> = ({t, vignette = 0.5, light = 0}) => (
  <AbsoluteFill style={{pointerEvents: 'none'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse 80% 38% at 18% -4%, rgba(255,238,212,0.13), transparent 72%)', opacity: 1 - light}} />
    <AbsoluteFill style={{background: `radial-gradient(ellipse 88% 76% at 50% 50%, transparent 46%, rgba(0,0,0,${vignette * (1 - light)}) 100%)`}} />
    <svg width={W} height={H} style={{position: 'absolute', inset: 0, opacity: 0.06, mixBlendMode: 'overlay'}}>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} seed={Math.floor(t * 24) % 97} />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  </AbsoluteFill>
);

/* -------------------------------------------------------------------------------------------------------------------
   Type. Statements are written, masked, and cleared of blur; never per letter.
   ------------------------------------------------------------------------------------------------------------------- */
export const TEXT_X = 144;
export const TEXT_TOP = 74;
export const HERO = 54;

export const Line: React.FC<{
  t: number;
  at: number;
  out?: number;
  size?: number;
  weight?: number;
  color?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({t, at, out, size = HERO, weight = 300, color = DAY.ink, style, children}) => {
  const p = seg(t, at, at + 0.95, glide);
  const o = out === undefined ? 0 : seg(t, out, out + 0.55, smooth);
  if (p <= 0 || o >= 1) return null;
  const pad = size * 0.16;
  return (
    <div style={{overflow: 'hidden', padding: `${pad}px 0 ${pad}px`, margin: `${-pad}px 0 ${-pad}px`}}>
      <div
        style={{
          fontSize: size,
          fontWeight: weight,
          color,
          lineHeight: 1.06,
          letterSpacing: '-0.035em',
          whiteSpace: 'nowrap',
          transform: `translateY(${(1 - p) * 108 - o * 30}%)`,
          opacity: Math.min(1, p * 2.4) * (1 - o),
          filter: p < 0.97 || o > 0 ? `blur(${(1 - p) * 7 + o * 6}px)` : undefined,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};

/** Chapter marker: index + hairline + name. The one recurring editorial device, anchored to the statement's left edge. */
export const Chapter: React.FC<{t: number; at: number; out: number; n: string; name: string; light?: boolean}> = ({t, at, out, n, name, light}) => {
  const p = seg(t, at, at + 0.8, glide);
  const o = seg(t, out, out + 0.5, smooth);
  if (p <= 0 || o >= 1) return null;
  const ink = light ? L.ink : D.ink;
  const mute = light ? L.muted : D.muted;
  return (
    <div style={{position: 'absolute', left: TEXT_X, top: 168, display: 'flex', alignItems: 'center', gap: 16, opacity: p * (1 - o), transform: `translateY(${(1 - p) * 8}px)`}}>
      <span style={{fontSize: 20, fontWeight: 500, letterSpacing: '0.16em', color: ink, fontVariantNumeric: 'tabular-nums'}}>{n}</span>
      <span style={{width: 44 * p, height: 1, background: mute, opacity: 0.7}} />
      <span style={{fontSize: 20, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: mute}}>{name}</span>
    </div>
  );
};

export const Label: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div style={{fontSize: 17, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: L.muted, ...style}}>{children}</div>
);

/* -------------------------------------------------------------------------------------------------------------------
   Cursor with a name tag (the "someone is in the room" device)
   ------------------------------------------------------------------------------------------------------------------- */
export const Cursor: React.FC<{x: number; y: number; name: string; color: string; opacity?: number; press?: number}> = ({x, y, name, color, opacity = 1, press = 0}) => (
  <div style={{position: 'absolute', left: x, top: y, opacity, transform: `scale(${1 - press * 0.08})`, transformOrigin: '2px 2px', pointerEvents: 'none', zIndex: 20}}>
    <svg width="34" height="40" viewBox="0 0 34 40" style={{display: 'block', filter: 'drop-shadow(0 3px 5px rgba(15,17,21,0.28))'}}>
      <path d="M3 2 L3 31 L10.5 24.5 L16 37 L21.5 34.6 L16 22.4 L26 21.6 Z" fill={color} stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
    <div
      style={{
        position: 'absolute',
        left: 24,
        top: 32,
        padding: '7px 16px 8px',
        borderRadius: 999,
        background: color,
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: '-0.005em',
        whiteSpace: 'nowrap',
        boxShadow: '0 6px 14px rgba(15,17,21,0.2)',
      }}
    >
      {name}
    </div>
  </div>
);

/** The Verity mark (two-part chevron) from public/logo.svg. */
export const Mark: React.FC<{height: number; color?: string}> = ({height, color = ACCENT}) => (
  <svg height={height} viewBox="0 0 24 30" style={{display: 'block'}}>
    <path d="M2.6 1.6h18.8a1.6 1.6 0 011.2 2.7L13.2 14a1.6 1.6 0 01-2.4 0L1.4 4.3A1.6 1.6 0 012.6 1.6z" fill={color} />
    <path d="M10.8 16a1.6 1.6 0 012.4 0l9.4 9.7a1.6 1.6 0 01-1.2 2.7H2.6a1.6 1.6 0 01-1.2-2.7z" fill={color} />
  </svg>
);
