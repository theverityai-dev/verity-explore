import {loadFont as loadHand} from '@remotion/google-fonts/Caveat';
export {fontFamily as SANS} from '../engine';
export {C, glide, lerp, lin, seg, smooth, track, win} from '../implementation/tokens';

export const {fontFamily: HAND} = loadHand('normal', {weights: ['500', '600'], subsets: ['latin']});

/** Implementation-philosophy film, workspace edition: 4:3, 60 fps, 110 s (the recorded VO runs 1:50). */
export const W = 1440;
export const H = 1080;
export const FPS = 60;
export const SECONDS = 110;
export const DURATION = SECONDS * FPS;

/** Dark world from the Verity dark tokens; light product UI; the single Verity blue is state only. */
export const DK = {base: '#080b11', alt: '#0e131c', ink: '#f4f7fb', mute: '#8e9aae', hair: 'rgba(244,247,251,0.16)'};
export const UI = {ink: '#0f1115', mute: '#6b7078', line: '#e6eaee', base: '#f7f8fa', acc: '#0a84ff', accTint: '#e8f2ff'};
