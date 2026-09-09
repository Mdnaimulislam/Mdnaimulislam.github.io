import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = new URL('../dist/', import.meta.url).pathname;
const MIME = { '.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png','.pdf':'application/pdf','.woff2':'font/woff2' };
const server = createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(req.url.split('?')[0]));
  if (p.endsWith('/')) p += 'index.html';
  const f = join(ROOT, p);
  const st = await stat(f).catch(() => null);
  if (!st?.isFile()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': MIME[extname(f)] ?? 'application/octet-stream' });
  res.end(await readFile(f));
});
await new Promise((r) => server.listen(4399, r));
const BASE = process.argv[2] ?? 'http://localhost:4399/';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const problems = [];
for (const vp of [
  { name: 'desktop', width: 1440, height: 960 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'small', width: 320, height: 640 },
]) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const errs = [];
  page.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => errs.push('failed: ' + r.url()));
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const de = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
  if (de.sw > de.cw + 1) problems.push(`[${vp.name}] overflow ${de.sw}>${de.cw}`);
  if (errs.length) problems.push(`[${vp.name}] ${errs.join(' || ')}`);
  if (vp.name === 'mobile') {
    // exercise the mobile menu and the publication filters
    await page.click('#nav-toggle');
    await page.waitForTimeout(400);
    const open = await page.evaluate(() => document.getElementById('nav-links')?.getAttribute('data-open'));
    if (open !== 'true') problems.push('[mobile] menu did not open');
    await page.click('#nav-links a[href="#publications"]');
    await page.waitForTimeout(700);
    const closed = await page.evaluate(() => document.getElementById('nav-links')?.getAttribute('data-open'));
    if (closed !== 'false') problems.push('[mobile] menu did not close after selection');
    await page.screenshot({ path: 'qa/live-mobile.png' });
  }
  if (vp.name === 'desktop') {
    const counts = {};
    for (const f of ['selected', 'all', 'journal', 'conference', 'preprint']) {
      await page.click(`[data-filter-btn="${f}"]`);
      await page.waitForTimeout(250);
      counts[f] = await page.evaluate(() => [...document.querySelectorAll('.pub')].filter((p) => !p.hidden).length);
    }
    if (counts.all !== 17) problems.push(`filter "all" showed ${counts.all}, expected 17`);
    if (counts.selected !== 6) problems.push(`filter "selected" showed ${counts.selected}, expected 6`);
    console.log('filter counts:', JSON.stringify(counts));
    // theme deep link should reveal a hidden entry
    await page.click('[data-filter-btn="selected"]');
    await page.waitForTimeout(200);
    await page.click('a[href="#pub-medslip"]');
    await page.waitForTimeout(900);
    const visible = await page.evaluate(() => !document.getElementById('pub-bibm-2022-pah-mortality')?.hidden);
    if (!visible) problems.push('theme deep link did not reveal the hidden publication');
    await page.screenshot({ path: 'qa/live-desktop.png' });
  }
  await ctx.close();
}
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'NO PROBLEMS');
await browser.close();
server.close();
