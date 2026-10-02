import {Composition} from 'remotion';
import {Reel} from './reels/general-9x16/Reel';
import {DURATION as REEL_DURATION, FPS as REEL_FPS} from './shared/timeline';
import {BRAG_DURATION, BRAG_FPS, Brag} from './brag/Brag';
import {MainTrailer} from './trailer/MainTrailer';
import {DURATION, FPS, H, W} from './trailer/data';

const reel = {durationInFrames: REEL_DURATION, fps: REEL_FPS, width: 1080, height: 1920, component: Reel} as const;

export const Root = () => (
  <>
    <Composition id="MainTrailer" component={MainTrailer} durationInFrames={DURATION} fps={FPS} width={W} height={H} />
    <Composition id="Brag-Verity-16x9" component={Brag} durationInFrames={BRAG_DURATION} fps={BRAG_FPS} width={W} height={H} />
    <Composition id="Reel-General-9x16" {...reel} defaultProps={{video: 'general' as const}} />
    <Composition id="Reel-Retail-9x16" {...reel} defaultProps={{video: 'retail' as const}} />
  </>
);
