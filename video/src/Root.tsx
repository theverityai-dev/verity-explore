import {Composition} from 'remotion';
import {Trailer} from './Trailer';
import {DURATION, FPS} from './timeline';

const common = {durationInFrames: DURATION, fps: FPS, width: 1080, height: 1920, component: Trailer} as const;

export const Root = () => (
  <>
    <Composition id="VerityTrailer" {...common} defaultProps={{video: 'general' as const}} />
    <Composition id="RetailCommerce" {...common} defaultProps={{video: 'retail' as const}} />
  </>
);
