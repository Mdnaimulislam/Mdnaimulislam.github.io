import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const ROOT = new URL('../dist/', import.meta.url).pathname;
const MIME = { '.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png','.pdf':'application/pdf','.woff2':'font/woff2' };
const server = createServer(async (req,res)=>{ let p=normalize(decodeURIComponent(req.url.split('?')[0])); if(p.endsWith('/'))p+='index.html'; const f=join(ROOT,p); const s=await stat(f).catch(()=>null); if(!s?.isFile()){res.writeHead(404);return res.end();} res.writeHead(200,{'Content-Type':MIME[extname(f)]??'application/octet-stream'}); res.end(await readFile(f)); });
await new Promise(r=>server.listen(4321,r));
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const width = Number(process.argv[2] ?? 1440);
const theme = process.argv[3];
const ctx = await browser.newContext({ viewport:{width,height:1000}, deviceScaleFactor:1.5, colorScheme: theme==='dark'?'dark':'light' });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/',{waitUntil:'networkidle'});
await page.waitForTimeout(500);
const ids = process.argv[5] ? process.argv[5].split(',') : ['about','research','projects','publications','experience','recognition','service','software','contact'];
const suffix = process.argv[4] ?? '';
for (const id of ids) {
  const el = await page.$('#'+id);
  if (!el) { console.log('missing', id); continue; }
  await el.screenshot({ path: `qa/sec-${id}${suffix}.png` });
}
console.log('done', ids.join(','));
await browser.close(); server.close();
