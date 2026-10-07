import {Easing} from 'remotion';
import {seg as segBase, track, lerp} from '../../shared/timeline';

export {track, lerp};

/** Implementation-philosophy film: 4:3 editorial canvas, 60 fps, dark world. */
export const W = 1440;
export const H = 1080;
export const FPS = 60;

export const C = {
  bg: '#080b11',
  bg2: '#0e131c',
  ink: '#f4f7fb',
  mute: '#8e9aae',
  line: 'rgba(244,247,251,0.62)',
  hair: 'rgba(244,247,251,0.18)',
  faint: 'rgba(244,247,251,0.08)',
  acc: '#0A84FF',
  accSoft: 'rgba(10,132,255,0.16)',
  // Real Verity UI (light) sitting on the dark stage.
  ui: '#FFFFFF',
  uiBase: '#F7F8FA',
  uiInk: '#0F1115',
  uiMute: '#6B7078',
  uiLine: '#E6EAEE',
  uiAcc: '#0A84FF',
  // Rigid generic software: cool, flat, square.
  rig: '#1a2029',
  rigLine: '#46505f',
  rigBar: '#2d3644',
  // Drawn paper props (flat, not photoreal).
  paper: '#E7E1D3',
  paperInk: '#1B1814',
  paperLine: 'rgba(27,24,20,0.28)',
};

export const glide = Easing.bezier(0.22, 1, 0.36, 1);
export const smooth = Easing.bezier(0.45, 0, 0.15, 1);
export const lin = (n: number) => n;

/** 0 to 1 progress between two times in seconds, clamped. Default glide. */
export const seg = (t: number, a: number, b: number, ease: (n: number) => number = glide) => segBase(t, a, b, ease);
/** Presence window: eases in over `i`, holds, eases out over `o`. */
export const win = (t: number, a: number, b: number, i = 0.5, o = 0.5) =>
  seg(t, a, a + i, glide) * (1 - seg(t, b - o, b, smooth));

/** Beat boundaries in seconds. Estimated from the script; retime here when the VO file arrives. */
export const T = {
  b1: [0, 6.5],
  b2: [6.5, 13.5],
  b3: [13.5, 23],
  b4: [23, 33.5],
  b5: [33.7, 42],
  b6: [42, 49.5],
  b7: [49.5, 55.5],
  b8: [55.5, 65],
  b9: [65, 76.5],
  b10: [76.5, 81.8],
  b11: [81.8, 89],
  b12: [89, 93],
  b13: [93, 98],
  b14: [98, 104],
  b15: [104, 109.5],
  b16: [109.5, 116.5],
} as const;

export const TOTAL_SECONDS = 116.5;
export const DURATION = Math.round(TOTAL_SECONDS * FPS);
