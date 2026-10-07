import React from 'react';
import {AbsoluteFill, Audio, Easing, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {lerp, seg} from '../../shared/timeline';
import {Mark} from '../../trailer/ui';
import {fontFamily} from '../engine';

/**
 * The master Verity outro: a locked brand asset closing every industry film and reel. Light theme.
 * Copy, type, material, timing and sound are fixed here. Films only choose the aspect and how the outro enters.
 *
 * Usage, as the last Sequence of a film. With transition "dissolve", start it so its first 0.7s overlaps the film's
 * final image, which then resolves into the light field:
 *   <Sequence from={FILM_FRAMES - OUTRO_FRAMES}><VerityOutro aspect="16:9" /></Sequence>
 */

export const OUTRO_SECONDS = 3.5;

/** Locked copy. Never vary it per industry. The wordmark is drawn as the brand mark (lowercase). */
export const OUTRO_COPY = {
  taglineLead: 'Run your business.',
  taglineTail: 'Clearly.',
  support: 'Enterprise operations, simplified.',
  url: 'theverityai.xyz',
} as const;

/** Light theme, from the site's light tokens (css/verity.css). */
const LT = {base: '#f1f3f7', baseAlt: '#fbfcfd', ink: '#0f1115', muted: '#6b7078', faint: 'rgba(15,17,21,0.45)'};

const glide = Easing.bezier(0.22, 1, 0.36, 1);
const smooth = Easing.bezier(0.45, 0, 0.15, 1);

export type OutroAspect = '16:9' | '9:16';

/** Layout per aspect, recomposed rather than scaled. Sizes are px at native size (1920x1080 or 1080x1920). */
const LAYOUT: Record<OutroAspect, {tile: number; word: number; gapLogo: number; tagline: number; taglineBreak: boolean; gapTag: number; support: number; gapUrl: number; url: number}> = {
  '16:9': {tile: 92, word: 84, gapLogo: 72, tagline: 64, taglineBreak: false, gapTag: 24, support: 30, gapUrl: 56, url: 20},
  // Portrait: a central vertical column inside the centre 1080x1350 safe area (Reels, Stories, paid placements).
  // The tagline breaks after its first sentence so it reads as a column, not a thin strip.
  '9:16': {tile: 112, word: 100, gapLogo: 104, tagline: 84, taglineBreak: true, gapTag: 40, support: 36, gapUrl: 88, url: 24},
};

/** The logomark on a small piece of light glass: the outro's only glass, and it barely announces itself. */
export const GlassTile: React.FC<{size: number}> = ({size}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size * 0.26,
      display: 'grid',
      placeItems: 'center',
      background: 'linear-gradient(160deg, rgba(255,255,255,0.98), rgba(255,255,255,0.8) 60%, rgba(243,245,249,0.92))',
      backdropFilter: 'blur(24px) saturate(160%)',
      WebkitBackdropFilter: 'blur(24px) saturate(160%)',
      border: '1px solid rgba(15,17,21,0.07)',
      boxShadow: 'inset 0 1px 0 #fff, 0 1px 2px rgba(15,17,21,0.06), 0 14px 34px rgba(15,17,21,0.08)',
    }}
  >
    <Mark height={size * 0.5} color="var(--accent)" />
  </div>
);

/** Fade, slight rise, slight scale, and depth (blur clearing as it arrives). */
export const reveal = (t: number, a: number, b: number, rise: number, blur: number): React.CSSProperties => {
  const p = seg(t, a, b, glide);
  return {
    opacity: Math.min(1, p * 1.4),
    transform: `translateY(${(1 - p) * rise}px) scale(${lerp(0.97, 1, p)})`,
    filter: p < 0.98 ? `blur(${(1 - p) * blur}px)` : undefined,
  };
};

export const VerityOutro: React.FC<{
  aspect?: OutroAspect;
  /** "dissolve": the light field resolves over the film's last frame. "cut": the outro starts on its own field. */
  transition?: 'dissolve' | 'cut';
  /** The brand sound signature. Turn off only when a film mixes it itself. */
  sound?: boolean;
}> = ({aspect = '16:9', transition = 'dissolve', sound = true}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const L = LAYOUT[aspect];

  // 0.0-0.7 resolution: the film's last image recedes into the light field.
  const field = transition === 'dissolve' ? seg(t, 0, 0.7, smooth) : 1;
  // A gentle camera push across the whole outro.
  const push = lerp(0.975, 1, seg(t, 0.5, OUTRO_SECONDS, smooth));

  return (
    <AbsoluteFill style={{fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: LT.ink}}>
      {/* The light field, with one very soft lift behind the lockup for depth. */}
      <AbsoluteFill style={{opacity: field, background: `radial-gradient(ellipse 60% 55% at 50% 46%, ${LT.baseAlt}, ${LT.base} 82%)`}} />

      {/* Everything centred on the frame centre: the outro is a single-object frame. */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', transform: `scale(${push})`}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          {/* 0.7-1.5 logo */}
          <div style={{display: 'flex', alignItems: 'center', gap: L.tile * 0.3, ...reveal(t, 0.7, 1.5, 10, 8)}}>
            <GlassTile size={L.tile} />
            <div style={{fontSize: L.word, fontWeight: 600, letterSpacing: '-0.045em', lineHeight: 1, marginTop: -L.word * 0.08}}>verity</div>
          </div>

          {/* 1.5-2.4 tagline, the primary brand statement. Two-tone, as on the site hero. */}
          <div style={{marginTop: L.gapLogo, fontSize: L.tagline, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1.08, whiteSpace: 'pre-line', ...reveal(t, 1.5, 2.4, 14, 5)}}>
            {OUTRO_COPY.taglineLead}
            {L.taglineBreak ? '\n' : ' '}
            <span style={{color: LT.muted}}>{OUTRO_COPY.taglineTail}</span>
          </div>

          {/* 2.4-3.5 support, then the URL, both subordinate to the tagline. */}
          <div style={{marginTop: L.gapTag, fontSize: L.support, fontWeight: 300, letterSpacing: '-0.01em', color: LT.muted, ...reveal(t, 2.4, 3.1, 10, 3)}}>{OUTRO_COPY.support}</div>
          <div style={{marginTop: L.gapUrl, fontSize: L.url, fontWeight: 400, letterSpacing: '0.04em', color: LT.faint, ...reveal(t, 2.6, 3.3, 6, 2)}}>{OUTRO_COPY.url}</div>
        </div>
      </AbsoluteFill>

      {sound ? (
        <>
          {/* Quiet glass movement, one soft tonal impact on the logo, and a tonal tail. Same every time. */}
          <Sequence from={Math.round(0.35 * fps)}>
            <Audio src={staticFile('film/impactGlass_light_001.ogg')} volume={0.16} />
          </Sequence>
          <Sequence from={Math.round(0.75 * fps)}>
            <Audio src={staticFile('film/outro-tone.wav')} volume={0.55} />
          </Sequence>
          <Sequence from={Math.round(0.78 * fps)}>
            <Audio src={staticFile('film/subhit.wav')} volume={0.18} />
          </Sequence>
        </>
      ) : null}
    </AbsoluteFill>
  );
};
