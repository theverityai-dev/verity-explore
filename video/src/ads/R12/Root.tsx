import React from 'react';
import {Composition} from 'remotion';
import {AdR12, R12_DURATION, R12_FPS} from './Film';
import {OUTRO_DURATION, OUTRO_FPS, R12Outro} from './Outro';

export const R12Root: React.FC = () => (
  <>
    <Composition id="Ad-R12-Scattered-16x9" component={AdR12} durationInFrames={R12_DURATION} fps={R12_FPS} width={1920} height={1080} defaultProps={{theme: 'light' as const}} />
    <Composition id="Ad-R12-Scattered-Dark-16x9" component={AdR12} durationInFrames={R12_DURATION} fps={R12_FPS} width={1920} height={1080} defaultProps={{theme: 'dark' as const}} />
    <Composition id="Ad-R12-Outro-9x16" component={R12Outro} durationInFrames={OUTRO_DURATION} fps={OUTRO_FPS} width={1080} height={1920} defaultProps={{theme: 'dark' as const}} />
  </>
);
