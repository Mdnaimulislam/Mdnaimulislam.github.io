/**
 * Produces dist/standalone.html: the whole site as one file, with fonts and
 * images inlined as data URIs. Used for hosts that serve a single HTML page.
 * The regular GitHub Pages build in dist/ is unaffected.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const PUBLIC_BASE = process.env.SITE_BASE_URL ?? 'https://mdnaimulislam.github.io';

const b64 = async (p) => (await readFile(join(DIST, p))).toString('base64');

let html = await readFile(join(DIST, 'index.html'), 'utf8');

// 1. Inline the woff2 faces referenced by url('/fonts/...')
for (const file of await readdir(join(DIST, 'fonts'))) {
  const data = await b64(join('fonts', file));
  html = html.replaceAll(`/fonts/${file}`, `data:font/woff2;base64,${data}`);
}

// 2. Inline the portrait
html = html.replaceAll('/img/portrait.webp', `data:image/webp;base64,${await b64('img/portrait.webp')}`);
html = html.replaceAll('/img/portrait.jpg', `data:image/jpeg;base64,${await b64('img/portrait.jpg')}`);

// 3. Inline bundled module scripts
const scriptTag = /<script type="module" src="([^"]+)"><\/script>/g;
const matches = [...html.matchAll(scriptTag)];
for (const [tag, src] of matches) {
  const code = await readFile(join(DIST, src.replace(/^\//, '')), 'utf8');
  html = html.replace(tag, `<script type="module">${code}</script>`);
}

// 4. Absolute URLs for anything that cannot be inlined (the CV PDF, OG image)
html = html.replaceAll('href="/Mohammod_Suvon_CV.pdf"', `href="${PUBLIC_BASE}/Mohammod_Suvon_CV.pdf"`);
html = html.replaceAll('"/og.png"', `"${PUBLIC_BASE}/og.png"`);
html = html.replaceAll('href="/favicon.svg"', `href="${PUBLIC_BASE}/favicon.svg"`);

await writeFile(join(DIST, 'standalone.html'), html);

const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`standalone.html written (${kb} KB)`);
