import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {FPS} from './data';
import {Industries} from './Industries';
import {Outro} from './Outro';
import {Product} from './Product';
import {HubMark, Record} from './Record';
import {Scatter} from './Scatter';

const {fontFamily} = loadFont('normal', {weights: ['300', '400', '500', '600'], subsets: ['latin']});

const GRID = 72;
const MASK = 'radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%)';

/** Main Verity trailer, 1920x1080 @ 60fps, 44s. Everything is a pure function of time. */
export const MainTrailer: React.FC = () => {
  const t = useCurrentFrame() / FPS;
  return (
    <AbsoluteFill style={{background: 'var(--base)', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: `${GRID}px ${GRID}px`,
          backgroundPosition: `${-t * 5}px ${-t * 3}px`,
          WebkitMaskImage: MASK,
          maskImage: MASK,
        }}
      />
      <Scatter t={t} />
      <HubMark t={t} />
      <Record t={t} />
      <Product t={t} />
      <Industries t={t} />
      <Outro t={t} />
    </AbsoluteFill>
  );
};
