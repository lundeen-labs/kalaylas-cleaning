/**
 * Accessibility gate: axe-core against every built page, in both languages.
 *
 * This is a real gate rather than a one-off audit because the site's colours
 * live in CSS custom properties, and a token nudged for aesthetic reasons can
 * quietly drop text below the WCAG AA contrast floor of 4.5:1. That failure is
 * invisible to the person making the change and very visible to a customer
 * reading the page in daylight on a phone.
 *
 * It runs against `dist/`, not a dev server, so what is tested is exactly what
 * gets deployed - the same files the Pages workflow uploads.
 *
 * Usage: npm run check:a11y   (after npm run build)
 */
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { AxePuppeteer } from '@axe-core/puppeteer'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = join(ROOT, 'dist')

/**
 * axe's own source, read here rather than left to @axe-core/puppeteer to find.
 *
 * That package resolves axe-core from its own module URL without decoding
 * percent-escapes, so the space in this project's directory name reaches
 * `require.resolve` as a literal "%20" and the lookup fails with a misleading
 * "Cannot find module 'axe-core'" even though it is installed. `AxePuppeteer`
 * takes the source as its second argument, which sidesteps the whole thing -
 * and `fileURLToPath` above decodes the path correctly.
 */
const axeSource = await readFile(join(ROOT, 'node_modules', 'axe-core', 'axe.min.js'), 'utf8')

/** The Pages site is served from a subpath, so the local server mirrors it. */
const BASE = '/kalaylas-cleaning'

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
}

async function resolveFile(urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0])
  if (p.startsWith(BASE)) p = p.slice(BASE.length)
  if (!p || p === '/') p = '/index.html'
  let file = join(DIST, p)
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html')
  } catch {
    // A path with no extension is a directory-style route: /es/ -> /es/index.html
    if (!extname(file)) file = join(file, 'index.html')
  }
  return file
}

const server = createServer(async (req, res) => {
  try {
    const file = await resolveFile(req.url)
    const body = await readFile(file)
    res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' })
    res.end(body)
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end('not found')
  }
})

await new Promise((r) => server.listen(0, '127.0.0.1', r))
const port = server.address().port
const origin = `http://127.0.0.1:${port}`

const PAGES = [
  { label: 'English', url: `${origin}${BASE}/` },
  { label: 'Espanol', url: `${origin}${BASE}/es/` },
]

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

let total = 0
const report = []

for (const { label, url } of PAGES) {
  const page = await browser.newPage()
  // A phone-width viewport, because that is how most people arriving from a
  // Google search on a local service will see it, and because the pricing
  // grids reflow at 900px.
  await page.setViewport({ width: 390, height: 844 })
  await page.goto(url, { waitUntil: 'networkidle0' })

  const results = await new AxePuppeteer(page, axeSource)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  total += results.violations.length
  report.push({ label, url, results })
  await page.close()
}

await browser.close()
server.close()

for (const { label, results } of report) {
  const { violations, passes, incomplete } = results
  console.log(
    `[a11y] ${label.padEnd(8)} ${violations.length} violation(s), ` +
      `${passes.length} checks passed, ${incomplete.length} needing review`,
  )
  for (const v of violations) {
    console.log(`\n  ${v.id} (${v.impact}) - ${v.help}`)
    console.log(`  ${v.helpUrl}`)
    for (const node of v.nodes.slice(0, 5)) {
      console.log(`    ${node.target.join(' ')}`)
      for (const line of (node.failureSummary ?? '').split('\n')) {
        if (line.trim()) console.log(`      ${line.trim()}`)
      }
    }
    if (v.nodes.length > 5) console.log(`    ... and ${v.nodes.length - 5} more`)
  }
}

if (total) {
  console.error(`\n[a11y] FAILED - ${total} violation(s) across ${PAGES.length} page(s)`)
  process.exit(1)
}
console.log(`\n[a11y] clean - WCAG 2.1 AA, ${PAGES.length} pages, both languages`)
