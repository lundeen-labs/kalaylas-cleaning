import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from '../src/config/site.js'

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

// Checks the real build output; `npm run build` must have run first.
for (const page of ['index.html', 'es/index.html']) {
  const skip = !existsSync(join(DIST, page)) && 'run npm run build first'

  test(`${page}: reviews section and every link to it follow site.reviews`, { skip }, () => {
    const html = readFileSync(join(DIST, page), 'utf8')
    const hasReviews = site.reviews.length > 0
    assert.equal(html.includes('id="reviews"'), hasReviews, 'the #reviews section must exist exactly when reviews exist')
    assert.equal(html.includes('href="#reviews"'), hasReviews, 'no nav or footer link may point at a missing #reviews')
  })

  test(`${page}: the FAQ and service area are kept`, { skip }, () => {
    const html = readFileSync(join(DIST, page), 'utf8')
    assert.ok(html.includes('faq__item'), 'FAQ must stay')
    assert.ok(html.includes('id="areas"'), 'service-area section must stay')
  })

  test(`${page}: every town comes from site.serviceArea`, { skip }, () => {
    const html = readFileSync(join(DIST, page), 'utf8')
    const pills = [...html.matchAll(/class="area-pill">(?:<svg[\s\S]*?<\/svg>)\s*(?:<!-- -->)?([^<]+)</g)].map((m) => m[1].trim())
    assert.deepEqual(pills, site.serviceArea)
  })
}
