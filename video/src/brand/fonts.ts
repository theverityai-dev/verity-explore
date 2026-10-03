import {continueRender, delayRender, staticFile} from 'remotion';

/** Inter (200-600) from public/fonts, copied from @fontsource by copy-fonts.mjs. Idempotent; safe to import anywhere. */
export const FONT = 'Inter';
const FILES: [string, string][] = [
  ['200', 'inter-latin-200-normal.woff2'],
  ['300', 'inter-latin-300-normal.woff2'],
  ['400', 'inter-latin-400-normal.woff2'],
  ['500', 'inter-latin-500-normal.woff2'],
  ['600', 'inter-latin-600-normal.woff2'],
];
const w = typeof window === 'undefined' ? undefined : (window as unknown as {__verityBrandFonts?: boolean});
if (w && !w.__verityBrandFonts) {
  w.__verityBrandFonts = true;
  const handle = delayRender('verity brand fonts');
  Promise.all(
    FILES.map(async ([weight, file]) => {
      const face = new FontFace(FONT, `url(${staticFile(`fonts/${file}`)}) format('woff2')`, {weight});
      await face.load();
      document.fonts.add(face);
    }),
  )
    .catch((e) => console.error('brand font load failed', e))
    .finally(() => continueRender(handle));
}
