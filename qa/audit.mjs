import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = new URL('../dist/', import.meta.url).pathname;
const MIME = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml',
  '.jpg':'image/jpeg', '.webp':'image/webp', '.png':'image/png', '.pdf':'application/pdf', '.json':'application/json' };

const server = createServer(async (req, res) => {
  try {
    let p = normalize(decodeURIComponent(req.url.split('?')[0]));
    if (p.endsWith('/')) p += 'index.html';
    const file = join(ROOT, p);
    const s = await stat(file).catch(() => null);
    if (!s?.isFile()) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(500); res.end('err'); }
});
await new Promise((r) => server.listen(4321, r));

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const problems = [];
const viewports = [
  { name: 'desktop', width: 1440, height: 960 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'mobile', width: 390, height: 844 },
];

for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => errors.push('requestfailed: ' + r.url() + ' ' + r.failure()?.errorText));

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    const offenders = [];
    if (de.scrollWidth > de.clientWidth + 1) {
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > de.clientWidth + 1 || r.left < -1) {
          offenders.push(`${el.tagName.toLowerCase()}.${(el.className || '').toString().split(' ')[0]} right=${Math.round(r.right)}`);
        }
      });
    }
    return { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth, offenders: offenders.slice(0, 8) };
  });

  if (overflow.scrollWidth > overflow.clientWidth + 1) {
    problems.push(`[${vp.name}] horizontal overflow ${overflow.scrollWidth} > ${overflow.clientWidth}: ${overflow.offenders.join(' | ')}`);
  }
  if (errors.length) problems.push(`[${vp.name}] console: ${errors.join(' || ')}`);

  await page.screenshot({ path: `qa/${vp.name}-full.png`, fullPage: true });
  await page.screenshot({ path: `qa/${vp.name}-hero.png` });
  await ctx.close();
}

// Structural + link audit on desktop
const ctx = await browser.newContext({ viewport: { width: 1440, height: 960 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

const audit = await page.evaluate(() => {
  const headings = [...document.querySelectorAll('h1,h2,h3,h4')].map((h) => ({ level: +h.tagName[1], text: h.textContent.trim().slice(0, 60) }));
  let last = 0; const jumps = [];
  for (const h of headings) { if (last && h.level > last + 1) jumps.push(`${h.level} after ${last}: ${h.text}`); last = h.level; }
  const anchors = [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href'));
  const missing = anchors.filter((h) => h !== '#' && !document.getElementById(decodeURIComponent(h.slice(1))));
  const external = [...new Set([...document.querySelectorAll('a[href^="http"]')].map((a) => a.href))];
  const imgsNoAlt = [...document.querySelectorAll('img:not([alt])')].length;
  const h1s = document.querySelectorAll('h1').length;
  return { headingJumps: jumps, missingAnchors: [...new Set(missing)], external, imgsNoAlt, h1s, headingCount: headings.length };
});

console.log(JSON.stringify({ problems, audit }, null, 2));
await browser.close();
server.close();
