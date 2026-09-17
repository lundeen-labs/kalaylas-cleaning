#!/usr/bin/env node
/**
 * Post-build gate. Two jobs, both catching failures that are otherwise silent.
 *
 * 1. NOTHING FABRICATED SHIPS. The prototype carried a fake phone number, an
 *    email on a domain that does not exist, three invented testimonials and five
 *    invented statistics. This fails the build if any of them reappear in the
 *    emitted HTML — including via a copy-paste from the old prototype files,
 *    which are still in the repo as a design reference.
 *
 * 2. THE ICONS ARE ACTUALLY THERE. components/brand/Icon.jsx used to read
 *    `window.lucide`, which does not exist during a static build, so every icon
 *    became an empty span with no error at all: 67 inline <svg> with the global
 *    present, 4 without it, and a build that "succeeded" either way. The count
 *    check below is the only thing standing between a regression there and a
 *    live site with no icons.
 *
 * Exits non-zero on failure so `npm run build` stops.
 */
import { readFileSync, readdirSync, statSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site, outstanding } from '../src/config/site.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

/** Strings that must never appear in shipped HTML, and why. */
const FORBIDDEN = [
  ['555-0142', 'the prototype phone number — 555 is the reserved fictional prefix'],
  ['+13605550142', 'the prototype phone number in tel: form'],
  ['hola@kaleylas.com', 'an address on a domain that does not resolve'],
  ['214 five-star', 'an invented review count'],
  ['214 reseñas', 'an invented review count (es)'],
  ['María G.', 'an invented testimonial'],
  ['Daniel R.', 'an invented testimonial'],
  ['S. Patel', 'an invented testimonial'],
  ['Kaleyla + Ana', 'named a staff member who may not exist'],
]

/** Claims that may only appear once the owner has confirmed them. */
const GATED = [
  ['Licensed &amp; insured', site.claims.licensedAndInsured, 'site.claims.licensedAndInsured'],
  ['Con licencia y seguro', site.claims.licensedAndInsured, 'site.claims.licensedAndInsured'],
  ['Satisfaction guaranteed', site.claims.satisfactionGuarantee, 'site.claims.satisfactionGuarantee'],
  ['Satisfacción garantizada', site.claims.satisfactionGuarantee, 'site.claims.satisfactionGuarantee'],
]

const MIN_ICONS = 40

function htmlFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p))
    else if (entry.endsWith('.html')) out.push(p)
  }
  return out
}

const pages = htmlFiles(DIST)
if (!pages.length) {
  console.error('[honest] no HTML in dist/ — the build produced nothing')
  process.exit(1)
}

const failures = []

for (const page of pages) {
  const html = readFileSync(page, 'utf8')
  const rel = page.slice(DIST.length + 1)

  for (const [needle, why] of FORBIDDEN) {
    if (html.includes(needle)) failures.push(`${rel}: contains "${needle}" — ${why}`)
  }
  for (const [needle, allowed, flag] of GATED) {
    if (!allowed && html.includes(needle)) {
      failures.push(`${rel}: claims "${needle}" while ${flag} is false`)
    }
  }

  const icons = (html.match(/<svg/g) || []).length
  if (icons < MIN_ICONS) {
    failures.push(
      `${rel}: only ${icons} <svg> elements, expected at least ${MIN_ICONS}. ` +
        'Icon.jsx has probably gone back to reading window.lucide, which resolves ' +
        'to nothing during a static build and turns every icon into an empty span.',
    )
  }

  // Zero JavaScript is the point of this build, so it is asserted rather than
  // assumed. Adding a client:* directive to any component would reintroduce the
  // React runtime and fail here, which is the moment to decide whether that
  // island is worth 45 KiB gzipped to every visitor.
  const scripts = [...html.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1])
  if (scripts.length) {
    failures.push(`${rel}: loads ${scripts.length} script(s) — ${scripts.join(', ')}`)
  }

  const lang = html.match(/<html lang="([^"]+)"/)?.[1]
  const expected = rel.startsWith('es') ? 'es' : 'en'
  if (lang !== expected) failures.push(`${rel}: <html lang="${lang}">, expected "${expected}"`)
}

if (failures.length) {
  console.error('\n[honest] BUILD REJECTED\n')
  for (const f of failures) console.error('  - ' + f)
  console.error('')
  process.exit(1)
}

// Astro emits the React client runtime because the integration is registered,
// even though no component hydrates, so nothing ever links to it. Uploading
// 220 KB of unreachable JavaScript on every deploy is just untidy; it goes.
// Match the FILENAME, not a path anchored at the root: on a project Pages site
// every href is prefixed with the base (/kaleylas-cleaning/_astro/...), so an
// anchored pattern matched nothing, the referenced set came out empty, and this
// prune deleted the stylesheet the page depends on. The live site went up
// unstyled. Keyed on basename, the base prefix is irrelevant.
const referenced = new Set()
for (const page of pages) {
  const html = readFileSync(page, 'utf8')
  for (const m of html.matchAll(/(?:src|href)="[^"]*\/_astro\/([^"/]+)"/g)) referenced.add(m[1])
}

let pruned = 0
const astroDir = join(DIST, '_astro')
if (existsSync(astroDir)) {
  for (const f of readdirSync(astroDir)) {
    if (!referenced.has(f)) {
      rmSync(join(astroDir, f))
      pruned += 1
    }
  }
}

// Whatever survives, every asset the pages ask for must actually be on disk.
// This is the assertion that would have caught the prune bug above before it
// shipped, rather than a visitor finding an unstyled page.
const missingAssets = [...referenced].filter((f) => !existsSync(join(astroDir, f)))
if (missingAssets.length) {
  console.error('\n[honest] BUILD REJECTED\n')
  for (const f of missingAssets) {
    console.error(`  - pages reference /_astro/${f}, which is not in dist/_astro`)
  }
  console.error('')
  process.exit(1)
}
if (!referenced.size) {
  console.error('\n[honest] BUILD REJECTED: no page references any asset — the stylesheet link is missing\n')
  process.exit(1)
}

console.log(`[honest] ${pages.length} page(s) clean — no fabricated claims, icons present, lang correct, zero JavaScript`)
if (pruned) console.log(`[honest] pruned ${pruned} unreferenced asset(s) from dist/_astro`)

const todo = outstanding()
if (todo.length) {
  console.log('\n[honest] Still needed from the owner before this goes live:')
  for (const t of todo) console.log('  · ' + t)
  console.log('\n  The site builds and is safe to publish without these — it simply')
  console.log('  omits what it cannot yet state truthfully.\n')
}
