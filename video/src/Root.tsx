import {Composition} from 'remotion';
import {Trailer} from './Trailer';
import {DURATION, FPS} from './timeline';

export const Root = () => (
  <Composition
    id="VerityTrailer"
    component={Trailer}
    durationInFrames={DURATION}
    fps={FPS}
    width={1080}
    height={1920}
  />
);
