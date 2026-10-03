// Copies the bundled reel fonts (Inter, Caveat) from @fontsource into public/fonts. Runs after `npm install`.
import {copyFileSync, existsSync, mkdirSync} from 'node:fs';

const FILES = [
  ...[200, 300, 400, 500, 600].map((w) => ['inter', `inter-latin-${w}-normal.woff2`]),
  ...[500, 600].map((w) => ['caveat', `caveat-latin-${w}-normal.woff2`]),
];
mkdirSync('public/fonts', {recursive: true});
for (const [pkg, file] of FILES) {
  const src = `node_modules/@fontsource/${pkg}/files/${file}`;
  if (existsSync(src)) copyFileSync(src, `public/fonts/${file}`);
  else console.warn(`copy-fonts: missing ${src} (run npm install)`);
}
