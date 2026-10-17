import React from 'react';
import {Composition} from 'remotion';
import {AdR12, R12_DURATION, R12_FPS} from './Film';

export const R12Root: React.FC = () => (
  <>
    <Composition id="Ad-R12-Scattered-16x9" component={AdR12} durationInFrames={R12_DURATION} fps={R12_FPS} width={1920} height={1080} defaultProps={{theme: 'light' as const}} />
    <Composition id="Ad-R12-Scattered-Dark-16x9" component={AdR12} durationInFrames={R12_DURATION} fps={R12_FPS} width={1920} height={1080} defaultProps={{theme: 'dark' as const}} />
  </>
);
