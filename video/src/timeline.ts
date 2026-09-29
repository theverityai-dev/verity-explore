import {Easing, interpolate, spring} from 'remotion';

export const FPS = 30;
export const SECONDS = 26;
export const DURATION = SECONDS * FPS;

export const inOut = Easing.bezier(0.65, 0, 0.35, 1);
export const outX = Easing.bezier(0.16, 1, 0.3, 1);

/** 0→1 progress between two times (seconds), clamped. */
export const seg = (t: number, a: number, b: number, ease: (n: number) => number = outX) =>
  interpolate(t, [a, b], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ease,
  });

export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

/** Eased piecewise track through [time, value] keys. */
export const track = (t: number, keys: [number, number][], ease = inOut) => {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    const [tb, vb] = keys[i];
    if (t <= tb) {
      const [ta, va] = keys[i - 1];
      return lerp(va, vb, ease((t - ta) / (tb - ta)));
    }
  }
  return keys[keys.length - 1][1];
};

/** Spring pop that starts at `startSec`. */
export const pop = (frame: number, startSec: number) =>
  frame < startSec * FPS
    ? 0
    : spring({frame: frame - startSec * FPS, fps: FPS, config: {damping: 17, stiffness: 120, mass: 0.8}});

/** Point on a quadratic bezier. */
export const quad = (p0: [number, number], c: [number, number], p1: [number, number], k: number) => {
  const u = 1 - k;
  return [
    u * u * p0[0] + 2 * u * k * c[0] + k * k * p1[0],
    u * u * p0[1] + 2 * u * k * c[1] + k * k * p1[1],
  ] as [number, number];
};
