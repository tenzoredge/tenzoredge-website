/**
 * Generates the 1200×630 social share images in public/og/ (used for LinkedIn, WhatsApp, Slack, X previews).
 * Run manually when titles change:  node scripts/og/generate.mjs
 * Needs Google Chrome installed (set CHROME_PATH if it is not in the default location).
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const out = join(root, 'public', 'og');
const chrome =
  process.env.CHROME_PATH ||
  [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
  ].find(existsSync);
if (!chrome) throw new Error('Chrome not found; set CHROME_PATH');

const font = (pkg, file) => pathToFileURL(join(root, 'node_modules', '@fontsource-variable', pkg, 'files', file)).href;
const logo = readFileSync(join(root, 'public', 'tenzor-edge-logo-for-dark-bg.svg'), 'utf-8');

const images = [
  { file: 'default', eyebrow: 'Technology consulting & engineering', title: 'Precision. Performance. Progress.', sub: 'Solution architecture, cloud and infrastructure, business systems and AI-enabled engineering, led by a principal architect.' },
  { file: 'consulting', eyebrow: 'Service 01', title: 'Technology Consulting & Solution Architecture', sub: 'Make the right technology decisions before you commit budget.' },
  { file: 'infrastructure', eyebrow: 'Service 02', title: 'Infrastructure & Cloud Engineering', sub: 'Reliable cloud, on-premises and hybrid environments.' },
  { file: 'business', eyebrow: 'Service 03', title: 'Business Solutions & Digital Transformation', sub: 'Turn manual work into connected, automated operations.' },
  { file: 'ai', eyebrow: 'Service 04', title: 'AI-Enabled Software Engineering', sub: 'Project-specific AI agents and skills for your development lifecycle.' },
  { file: 'product', eyebrow: 'Service 05', title: 'Product & Technology Leadership', sub: 'Senior product and technical ownership, from idea to launch.' },
];

const html = (img) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Sora;src:url(${font('sora', 'sora-latin-wght-normal.woff2')}) format('woff2');font-weight:100 800}
@font-face{font-family:Inter;src:url(${font('inter', 'inter-latin-wght-normal.woff2')}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
html,body{width:1200px;height:630px;overflow:hidden}
body{background:#0B0D12;color:#fff;font-family:Inter,sans-serif;position:relative;padding:64px 72px}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:radial-gradient(ellipse at 80% 30%,#000 10%,transparent 75%)}
.glow{position:absolute;right:-180px;top:-200px;width:720px;height:720px;border-radius:50%;background:radial-gradient(circle,rgba(196,15,46,.42),transparent 65%)}
.bar{position:absolute;left:0;top:0;bottom:0;width:10px;background:linear-gradient(180deg,#C40F2E,#FF1F3D 50%,#FF7A2F)}
.wrap{position:relative;height:100%;display:flex;flex-direction:column}
.logo svg{height:54px;width:auto;display:block}
.eyebrow{margin-top:auto;font-family:Sora;font-size:22px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#FF2D3D}
h1{font-family:Sora;font-weight:700;font-size:${img.title.length > 40 ? 62 : 72}px;line-height:1.06;letter-spacing:-.02em;margin-top:18px;max-width:1000px}
p{font-size:28px;line-height:1.4;color:#A3A9B8;margin-top:22px;max-width:960px}
.foot{margin-top:40px;display:flex;justify-content:space-between;font-size:22px;color:#A3A9B8;border-top:1px solid rgba(255,255,255,.12);padding-top:22px}
.foot b{color:#fff;font-weight:600}
</style></head><body><div class="grid"></div><div class="glow"></div><div class="bar"></div>
<div class="wrap"><div class="logo">${logo}</div>
<div class="eyebrow">${img.eyebrow}</div><h1>${img.title}</h1><p>${img.sub}</p>
<div class="foot"><b>tenzoredge.com</b><span>Bengaluru, India</span></div></div></body></html>`;

mkdirSync(out, { recursive: true });
const tmp = join(tmpdir(), `og-${Date.now()}`);
mkdirSync(tmp, { recursive: true });
for (const img of images) {
  const page = join(tmp, `${img.file}.html`);
  writeFileSync(page, html(img));
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--user-data-dir=${join(tmp, 'profile')}`, '--window-size=1200,630', '--virtual-time-budget=3000',
    `--screenshot=${join(out, `${img.file}.png`)}`, pathToFileURL(page).href,
  ], { stdio: 'ignore' });
  console.log(`  public/og/${img.file}.png`);
}
rmSync(tmp, { recursive: true, force: true });
