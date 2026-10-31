/**
 * The claim rules behind scripts/check-honest.mjs, kept free of file I/O so the
 * test in tests/honest-rules.test.mjs can exercise them directly.
 *
 * Matching is case-insensitive on the visible text of a page: the live site once
 * carried "Satisfaction guaranteed" in a sentence ("... — satisfaction
 * guaranteed.") that the old case-sensitive needle never matched, so the claim
 * shipped past the gate.
 */

/** Strings that must never appear in shipped HTML, and why. */
export const FORBIDDEN = [
  ['555-0142', 'the prototype phone number — 555 is the reserved fictional prefix'],
  ['+13605550142', 'the prototype phone number in tel: form'],
  ['hola@kalaylas.com', 'an address on a domain that does not resolve'],
  ['214 five-star', 'an invented review count'],
  ['214 reseñas', 'an invented review count (es)'],
  ['María G.', 'an invented testimonial'],
  ['Daniel R.', 'an invented testimonial'],
  ['S. Patel', 'an invented testimonial'],
  ['Kalayla + Ana', 'named a staff member who may not exist'],
  ['within the hour', 'a response-time promise nobody measures; the booking page is staffed Mon-Fri 9am-5pm'],
  ['menos de una hora', 'a response-time promise nobody measures (es)'],
]

/**
 * Claims that may only appear once the owner has confirmed them: each entry is
 * [needle, claim flag name]. The page is rejected if the needle is present while
 * `claims[flag]` is not true.
 */
export const GATED = [
  ['licensed &amp; insured', 'licensedAndInsured'],
  ['licensed & insured', 'licensedAndInsured'],
  ['con licencia y seguro', 'licensedAndInsured'],
  ['trusted, insured', 'licensedAndInsured'],
  ['y asegurado', 'licensedAndInsured'],
  ['fully licensed', 'licensedAndInsured'],
  ['bonded', 'bonded'],
  ['background-checked', 'backgroundChecked'],
  ['background checked', 'backgroundChecked'],
  ['equipo verificado', 'backgroundChecked'],
  ['dedicado y verificado', 'backgroundChecked'],
  ['satisfaction guaranteed', 'satisfactionGuarantee'],
  ['satisfacción garantizada', 'satisfactionGuarantee'],
  ['re-clean', 'satisfactionGuarantee'],
  ['re-limpieza', 'satisfactionGuarantee'],
  ["love it, or we", 'satisfactionGuarantee'],
  ['te encanta, o lo corregimos', 'satisfactionGuarantee'],
  ['the kalayla', 'satisfactionGuarantee'], // "That's the Kalayla's guarantee."
  ['eco-friendly', 'ecoFriendlyProducts'],
  ['productos ecológicos', 'ecoFriendlyProducts'],
]

/**
 * @param {string} html  the emitted page
 * @param {Record<string, boolean>} claims  site.claims
 * @returns {string[]} one message per violation, empty when the page is clean
 */
export function findClaimViolations(html, claims) {
  const text = html.toLowerCase()
  const out = []
  for (const [needle, why] of FORBIDDEN) {
    if (text.includes(needle.toLowerCase())) out.push(`contains "${needle}" — ${why}`)
  }
  for (const [needle, flag] of GATED) {
    if (!claims[flag] && text.includes(needle.toLowerCase())) {
      out.push(`claims "${needle}" while site.claims.${flag} is false`)
    }
  }
  return out
}
