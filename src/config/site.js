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
  name: "Kalayla's Cleaning Service",
  shortName: "Kalayla's",
  city: 'Mount Vernon',
  region: 'WA',
  regionName: 'Washington',
  country: 'US',

  // ---------------------------------------------------------------- contact
  // A phone number the owner actually answers. E.164 for the href, human string
  // for display. Supplied 2026-09-16.
  phone: { href: '+13603332732', display: '(360) 333-2732' },

  // A mailbox that receives mail. The prototype used hola@kalaylas.com, and
  // that domain does not resolve. This one is published on her own booking
  // page, so it is the address she actually reads.
  email: 'kalaylascleaning@gmail.com',

  /**
   * Online booking page, if the business has one — a Setmore/Calendly-style
   * link. This is what every "Get a free quote" button points at.
   *
   * Until it is set the buttons fall back to the phone number, and if there is
   * no phone either they are not rendered at all. They must never render as a
   * dead <button>: with no JavaScript on the site nothing would happen, and for
   * a while every call to action on the live site did exactly that.
   */
  booking: 'https://kalaylascleaning.setmore.com/',

  // Street address. Optional: many cleaning businesses are service-area only
  // and deliberately do not publish one. If the business has a Google Business
  // Profile with a hidden address, leave this null and keep `serviceArea`.
  address: null,

  /**
   * When she is actually bookable. The prototype guessed Mon-Sat 8am-6pm; her
   * Setmore page - the thing that controls whether a booking can be made at
   * all - is Mon-Fri 9am-5pm, closed weekends.
   *
   * Structured rather than a display string so the footer and the
   * openingHoursSpecification in the structured data cannot drift apart.
   */
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
    display: { en: 'Mon–Fri · 9am–5pm', es: 'Lun–Vie · 9am–5pm' },
  },

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
   * Her published rates, copied from the service list on her Setmore booking
   * page. These are the prices a customer is actually charged, so the site
   * must not paraphrase or "round" them.
   *
   * `hours` is the booking slot length, which is also how the job is scoped -
   * a deep clean is eight hours of work, not a vaguer promise of depth.
   * `from` marks a price that is a floor rather than a fixed figure.
   */
  pricing: {
    currency: 'USD',

    residential: [
      {
        key: 'tidy',
        price: 100,
        hours: 3,
        en: { name: 'Basic tidy-up', blurb: 'A reset of the rooms you use every day.' },
        es: { name: 'Limpieza b\u00e1sica', blurb: 'Un repaso de los espacios de uso diario.' },
      },
      {
        key: 'standard',
        price: 160,
        hours: 5,
        featured: true,
        en: { name: 'Spotless clean', blurb: 'The whole home, room by room, start to finish.' },
        es: { name: 'Limpieza completa', blurb: 'Toda la casa, cuarto por cuarto, de principio a fin.' },
      },
      {
        key: 'deep',
        price: 400,
        hours: 8,
        en: { name: 'Deep clean', blurb: 'A full day of detail work, including what usually gets skipped.' },
        es: { name: 'Limpieza profunda', blurb: 'Un d\u00eda entero de detalle, incluido lo que casi siempre se omite.' },
      },
    ],

    commercial: [
      {
        key: 'sqft-1k',
        price: 350,
        hours: 8,
        en: { name: 'Under 1,000 sq ft' },
        es: { name: 'Menos de 1,000 pies\u00b2' },
      },
      {
        key: 'sqft-5k',
        price: 800,
        hours: 8,
        en: { name: '1,000\u20135,000 sq ft' },
        es: { name: '1,000\u20135,000 pies\u00b2' },
      },
      {
        key: 'sqft-10k',
        price: 1300,
        hours: 8,
        en: { name: '5,000\u201310,000 sq ft' },
        es: { name: '5,000\u201310,000 pies\u00b2' },
      },
      {
        key: 'sqft-10k-plus',
        price: 1400,
        hours: 8,
        from: true,
        en: { name: 'Over 10,000 sq ft' },
        es: { name: 'M\u00e1s de 10,000 pies\u00b2' },
      },
    ],

    /** She offers a free 15-minute consultation. It is a real booking slot. */
    consultation: {
      minutes: 15,
      en: { name: 'Consultation', blurb: 'Fifteen minutes, free, to talk through what you need.' },
      es: { name: 'Consulta', blurb: 'Quince minutos, gratis, para hablar de lo que necesitas.' },
    },
  },

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
  if (!site.booking) missing.push('online booking link (every quote button uses it)')
  if (!site.pricing) missing.push('pricing — per-visit rates, or decide to omit the section')
  if (!site.claims.licensedAndInsured) missing.push('confirm: licensed & insured (legal claim)')
  if (!site.social.googleBusiness) missing.push('Google Business Profile URL (drives local search)')
  if (!site.reviews.length) missing.push('reviews — real ones, with permission; the strongest local-search signal there is')
  return missing
}
