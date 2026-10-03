import {Composition, registerRoot} from 'remotion';
import '../../css/verity.css';
import {ADAPT_H, ADAPT_W, Adapt, DURATION, FPS} from './reels/adapt/Adapt';

/** Standalone entry for the "Software ko adapt karna chahiye" reel. Bundles only this composition, so it renders
 *  without the other films' Google Font loads (works offline). Same composition id as in Root.tsx. */
document.documentElement.setAttribute('data-theme', 'light');
registerRoot(() => <Composition id="Reel-Adapt-9x16" component={Adapt} durationInFrames={DURATION} fps={FPS} width={ADAPT_W} height={ADAPT_H} />);
