import {Composition, Still} from 'remotion';
import {Ad01, Carousel01, Post01, SOCIAL_SLIDES} from './social/Creatives';
import {SH, SW} from './social/kit';
import {OUTRO_SECONDS, OutroAspect, VerityOutro} from './film/components/VerityOutro';

/** Standalone outro test: a stand-in last film frame (dark world, light panel) resolving into the outro. */
const OutroTest: React.FC<{aspect: OutroAspect}> = ({aspect}) => (
  <div style={{position: 'absolute', inset: 0, background: '#0b0f17'}}>
    <div style={{position: 'absolute', left: '18%', right: '18%', top: '22%', bottom: '22%', borderRadius: 28, background: 'rgba(250,251,253,0.93)'}} />
    <VerityOutro aspect={aspect} transition="dissolve" />
  </div>
);
import {Reel} from './reels/general-9x16/Reel';
import {DURATION as REEL_DURATION, FPS as REEL_FPS} from './shared/timeline';
import {BRAG_DURATION, BRAG_FPS, Brag} from './brag/Brag';
import {FFPS, FH, FW} from './film/engine';
import {FOOD_DURATION, FoodFilm} from './film/food/FoodFilm';
import {FILM_DURATION, RetailFilm} from './film/retail/RetailFilm';
import {RETAIL_DURATION, Retail} from './reels/retail/Retail';
import {RFPS, RH, RW} from './reels/kit';
import {Adapt, ADAPT_ASPECTS, DURATION as ADAPT_DURATION, FPS as ADAPT_FPS, LAYOUTS as ADAPT_LAYOUTS} from './reels/adapt/Adapt';
import {MainTrailer} from './trailer/MainTrailer';
import {DURATION, FPS, H, W} from './trailer/data';

const reel = {durationInFrames: REEL_DURATION, fps: REEL_FPS, width: 1080, height: 1920, component: Reel} as const;

export const Root = () => (
  <>
    <Composition id="MainTrailer" component={MainTrailer} durationInFrames={DURATION} fps={FPS} width={W} height={H} />
    <Composition id="Brag-Verity-16x9" component={Brag} durationInFrames={BRAG_DURATION} fps={BRAG_FPS} width={W} height={H} />
    <Composition id="Film-02-Food-16x9" component={FoodFilm} durationInFrames={FOOD_DURATION} fps={FFPS} width={FW} height={FH} />
    <Composition id="Film-01-Retail-16x9" component={RetailFilm} durationInFrames={FILM_DURATION} fps={FFPS} width={FW} height={FH} />
    <Composition id="Reel-01-Retail-9x16" component={Retail} durationInFrames={RETAIL_DURATION} fps={RFPS} width={RW} height={RH} />
    {ADAPT_ASPECTS.map((a) => (
      <Composition key={a} id={`Reel-Adapt-${a.replace(':', 'x')}`} component={Adapt} durationInFrames={ADAPT_DURATION} fps={ADAPT_FPS} width={ADAPT_LAYOUTS[a].w} height={ADAPT_LAYOUTS[a].h} defaultProps={{aspect: a}} />
    ))}
    <Composition id="Reel-General-9x16" {...reel} defaultProps={{video: 'general' as const}} />
    <Composition id="Reel-Retail-9x16" {...reel} defaultProps={{video: 'retail' as const}} />
    <Composition id="Outro-16x9" component={OutroTest} durationInFrames={OUTRO_SECONDS * FFPS} fps={FFPS} width={FW} height={FH} defaultProps={{aspect: '16:9' as const}} />
    <Composition id="Outro-9x16" component={OutroTest} durationInFrames={OUTRO_SECONDS * FFPS} fps={FFPS} width={1080} height={1920} defaultProps={{aspect: '9:16' as const}} />
    <Still id="Social-Post01-Problem" component={Post01} width={SW} height={SH} />
    <Still id="Social-Ad01-PainLed" component={Ad01} width={SW} height={SH} />
    {Array.from({length: SOCIAL_SLIDES}).map((_, i) => (
      <Still key={i} id={`Social-Carousel01-S${i + 1}`} component={Carousel01} width={SW} height={SH} defaultProps={{slide: i}} />
    ))}
  </>
);
