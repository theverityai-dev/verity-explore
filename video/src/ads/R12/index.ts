import {registerRoot} from 'remotion';
import {R12Root} from './Root';

/** Standalone entry for R12, so it renders even when another film in the shared Root fails to load. */
registerRoot(R12Root);
