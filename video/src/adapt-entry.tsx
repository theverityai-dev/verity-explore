import {Composition, registerRoot} from 'remotion';
import '../../css/verity.css';
import {ADAPT_ASPECTS, Adapt, DURATION, FPS, LAYOUTS} from './reels/adapt/Adapt';

/** Standalone entry for the "Software ko adapt karna chahiye" reel, one composition per ratio:
 *  Reel-Adapt-8x9 (1080x1215), Reel-Adapt-9x16 (1080x1920), Reel-Adapt-16x9 (1920x1080).
 *  Bundles only these, so it renders without the other films' Google Font loads (works offline). */
document.documentElement.setAttribute('data-theme', 'light');
registerRoot(() => (
  <>
    {ADAPT_ASPECTS.map((a) => (
      <Composition key={a} id={`Reel-Adapt-${a.replace(':', 'x')}`} component={Adapt} durationInFrames={DURATION} fps={FPS} width={LAYOUTS[a].w} height={LAYOUTS[a].h} defaultProps={{aspect: a}} />
    ))}
  </>
));
