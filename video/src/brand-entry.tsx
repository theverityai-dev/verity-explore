import {Still, registerRoot} from 'remotion';
import '../../css/verity.css';
import {ProofB, ProofC} from './brand/proof';

/** Standalone entry for the design-language proof frames (renders offline, no Google Fonts). */
registerRoot(() => (
  <>
    <Still id="Brand-Proof-B" component={ProofB} width={1080} height={1350} />
    <Still id="Brand-Proof-C" component={ProofC} width={1080} height={1080} />
  </>
));
