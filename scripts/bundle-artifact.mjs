/**
 * Variant of the standalone bundle for hosts that supply their own
 * <html>/<head>/<body> skeleton: emits title + styles + body content only.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const html = await readFile(join(DIST, 'standalone.html'), 'utf8');

const title = html.match(/<title>[\s\S]*?<\/title>/)?.[0] ?? '';
const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? '';
const styles = [...head.matchAll(/<style[^>]*>[\s\S]*?<\/style>/g)].map((m) => m[0]).join('\n');
const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1] ?? '';

const out = `${title}\n${styles}\n${body}`;
await writeFile(join(DIST, 'artifact.html'), out);
console.log(`artifact.html written (${(Buffer.byteLength(out) / 1024).toFixed(0)} KB)`);
