/**
 * Every real-world fact about the business, in one place.
 *
 * The prototype hard-coded a fake phone number ((360) 555-0142 — 555 is the
 * reserved fictional prefix), an email on a domain that does not exist, three
 * invented customer reviews and five invented statistics. None of that can go
 * on the site of a real business, so those claims now live here as explicit
 * `null`s, and every section that needs one is written to render nothing rather
 * than render a placeholder that looks like a fact.
 *
 * FILL THESE IN AND THE SITE IS READY TO LAUNCH. Nothing else needs changing:
 * `npm run build` will start emitting the phone link, the pricing table and the
 * trust line as soon as the values below stop being null. `npm run check:honest`
 * fails the build while any of them are still missing, so a half-filled config
 * cannot ship by accident.
 */

/** @typedef {{ en: string, es: string }} Bilingual */

export const site = {
  name: "Kaleyla's Cleaning Service",
  shortName: "Kaleyla's",
  city: 'Mount Vernon',
  region: 'WA',
  regionName: 'Washington',
  country: 'US',

  /**
   * The canonical origin. Update when the domain is registered and pointed at
   * the host; canonical tags, hreflang and the sitemap all derive from it.
   */
  origin: 'https://kaleylascleaning.com',

  // ---------------------------------------------------------------- contact
  // A phone number the owner actually answers. E.164 for the href, human string
  // for display. Supplied 2026-09-16.
  phone: { href: '+13603332732', display: '(360) 333-2732' },

  // A mailbox that receives mail. The prototype used hola@kaleylas.com, and
  // kaleylas.com does not resolve.
  email: null,

  /**
   * Online booking page, if the business has one — a Setmore/Calendly-style
   * link. This is what every "Get a free quote" button points at.
   *
   * Until it is set the buttons fall back to the phone number, and if there is
   * no phone either they are not rendered at all. They must never render as a
   * dead <button>: with no JavaScript on the site nothing would happen, and for
   * a while every call to action on the live site did exactly that.
   */
  booking: null,

  // Street address. Optional: many cleaning businesses are service-area only
  // and deliberately do not publish one. If the business has a Google Business
  // Profile with a hidden address, leave this null and keep `serviceArea`.
  address: null,

  // Hours the phone is answered, as a plain bilingual string.
  hours: { en: 'Mon–Sat · 8am–6pm', es: 'Lun–Sáb · 8am–6pm' },

  // Profile URLs. Anything null is simply not rendered.
  social: {
    instagram: null,
    facebook: null,
    googleBusiness: null,
  },

  // ---------------------------------------------------------- claims & proof
  /**
   * Trust claims are legal statements, not copy. Each stays false until the
   * owner confirms it, and the badge is omitted entirely while false — an
   * unconfirmed "licensed & insured" on a cleaning company's site is a claim
   * a customer can rely on.
   */
  claims: {
    licensedAndInsured: false,
    bonded: false,
    backgroundChecked: false,
    satisfactionGuarantee: false,
  },

  /**
   * Real reviews only, and only with the reviewer's permission. Shape:
   *   { quote: { en, es }, name: 'First L.', location: 'Mount Vernon' }
   * An empty array removes the reviews section from both locales. Google's
   * structured-data rules and the FTC both treat invented testimonials as
   * deceptive, so this array stays empty until there is something real in it.
   */
  reviews: [],

  /**
   * Aggregate rating, only if it comes from a real review platform.
   * Shape: { value: 4.9, count: 214, source: 'Google' }. Null omits both the
   * rating UI and the aggregateRating field in the structured data.
   */
  rating: null,

  /**
   * Headline statistics. The prototype showed "500+", "4.9★", "12 yrs" and
   * "100%", none of which came from anywhere. Each entry needs to be a fact
   * the owner can stand behind.
   */
  stats: [],

  // ------------------------------------------------------------------ pricing
  /**
   * Per-visit pricing. Null hides the entire pricing section rather than
   * showing numbers the owner has not set. Shape when filled:
   *   { recurring: { weekly: 99, biweekly: 119, monthly: 149 }, currency: 'USD',
   *     note: { en: '...', es: '...' } }
   */
  pricing: null,

  // -------------------------------------------------------------- service area
  /**
   * Towns actually served. These are real Skagit County communities; confirm
   * the owner travels to each before launch.
   */
  serviceArea: [
    'Mount Vernon',
    'Burlington',
    'Sedro-Woolley',
    'Anacortes',
    'La Conner',
    'Conway',
    'Bow',
    'Clear Lake',
    'Bayview',
  ],
}

/** Locales the site is built in. The first is the default and lives at `/`. */
export const locales = /** @type {const} */ (['en', 'es'])

/** Path prefix for a locale: '' for the default, '/es' for Spanish. */
export function localePath(lang) {
  return lang === 'en' ? '' : `/${lang}`
}

/** Pick the string for the active language. Unchanged from the prototype. */
export const L = (lang, en, es) => (lang === 'es' ? es : en)

/**
 * Everything still missing before the site can go live. Used by the honesty
 * check in scripts/check-honest.mjs and printed at the end of every build.
 */
/**
 * Where a "get a quote" click should go, best option first. Returns null when
 * there is nowhere real to send someone, and the button is then omitted.
 */
export function quoteHref() {
  if (site.booking) return site.booking
  if (site.phone) return `tel:${site.phone.href}`
  if (site.email) return `mailto:${site.email}`
  return null
}

export function outstanding() {
  const missing = []
  if (!site.phone) missing.push('phone — a number the owner answers')
  if (!site.email) missing.push('email — a mailbox that receives mail')
  if (!site.pricing) missing.push('pricing — per-visit rates, or decide to omit the section')
  if (!site.claims.licensedAndInsured) missing.push('confirm: licensed & insured (legal claim)')
  if (!site.social.googleBusiness) missing.push('Google Business Profile URL (drives local search)')
  if (!site.booking) missing.push('online booking link, if she has one (the quote buttons use it)')
  return missing
}
