import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { findClaimViolations } from '../scripts/honest-rules.mjs'
import { site } from '../src/config/site.js'

const none = { licensedAndInsured: false, bonded: false, backgroundChecked: false, satisfactionGuarantee: false, ecoFriendlyProducts: false }
const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

test('the shipped claim flags are all unconfirmed', () => {
  for (const [flag, value] of Object.entries(site.claims)) {
    assert.equal(value, false, `site.claims.${flag} must stay false until the owner confirms it`)
  }
})

test('each unconfirmed claim is caught regardless of letter case', () => {
  const samples = [
    'Come home to clean. The same friendly team returns every visit — satisfaction guaranteed.',
    '<li>Background-checked team</li>',
    '<li>24-hour RE-CLEAN guarantee</li>',
    '<h2>Love it, or we\'ll make it right.</h2>',
    '<li>Eco-friendly products on request</li>',
    '<li>Equipo verificado</li>',
    '<li>Satisfacción garantizada</li>',
    '<li>Licensed &amp; insured</li>',
  ]
  for (const html of samples) {
    assert.ok(findClaimViolations(html, none).length > 0, `not caught: ${html}`)
  }
})

test('a claim passes once its own flag is true', () => {
  assert.deepEqual(findClaimViolations('<li>Background-checked team</li>', { ...none, backgroundChecked: true }), [])
  assert.deepEqual(findClaimViolations('satisfaction guaranteed', { ...none, satisfactionGuarantee: true }), [])
})

test('the unmeasured response-time promise is rejected even when claims are true', () => {
  const all = Object.fromEntries(Object.keys(none).map((k) => [k, true]))
  assert.ok(findClaimViolations('most replies within the hour', all).length > 0)
  assert.ok(findClaimViolations('casi siempre respondemos en menos de una hora', all).length > 0)
})

// Runs against the real build output when `npm run build` has produced it.
for (const page of ['index.html', 'es/index.html']) {
  test(`built ${page} carries no unconfirmed claim`, { skip: !existsSync(join(DIST, page)) && 'run npm run build first' }, () => {
    const html = readFileSync(join(DIST, page), 'utf8')
    assert.deepEqual(findClaimViolations(html, site.claims), [])
  })
}
