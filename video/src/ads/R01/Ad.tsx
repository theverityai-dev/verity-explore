import React from 'react';
import {Audio, staticFile, useCurrentFrame} from 'remotion';
import {seg} from '../../shared/timeline';
import {AdStage, Captions, CTAPill, Headlines, Lockup, OfferChip} from '../kit';
import {R01_H1, type AdCopy} from '../copy';
import {AFPS, T} from '../tokens';
import {Chip, Connector, Template} from './Chips';
import {Frame} from './Frame';

/** R01 "Stop changing your business to fit your software". The master performance-ad template: R02-R06 reuse the
 *  kit and swap copy, mechanism visuals and voiceover. The visual group takes one slow camera push for the whole
 *  film so no beat is static. The current (dominant seam direction) is UP. */
export const AdR01: React.FC<{copy?: AdCopy; voSrc?: string}> = ({copy = R01_H1, voSrc}) => {
  const t = useCurrentFrame() / AFPS;
  const cam = 1 + 0.06 * seg(t, 0, T.end, (n) => n);
  const chip = seg(t, T.chip, T.chip + 0.6) * (1 - seg(t, T.offer - 0.3, T.offer + 0.2));
  const cta = seg(t, T.cta, T.cta + 0.7);

  return (
    <AdStage>
      <Lockup />
      <OfferChip text={copy.chip} p={chip} />
      <div style={{position: 'absolute', inset: 0, transform: `scale(${cam})`, transformOrigin: '50% 1030px'}}>
        <Template t={t} />
        <Frame t={t} offer={copy.offer} />
        <Connector t={t} />
        {[0, 1, 2, 3].map((i) => (
          <Chip key={i} i={i} t={t} />
        ))}
      </div>
      <Headlines items={copy.headlines} t={t} />
      <Captions items={copy.captions} t={t} />
      <CTAPill text={copy.cta} p={cta} />
      {voSrc ? <Audio src={staticFile(voSrc)} /> : null}
    </AdStage>
  );
};
