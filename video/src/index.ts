import {registerRoot} from 'remotion';
// Design tokens come straight from the live site stylesheet, never hardcoded.
import '../../css/verity.css';
import {Root} from './Root';

document.documentElement.setAttribute('data-theme', 'light');
registerRoot(Root);
