import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

/**
 * Static output. Every page is rendered to HTML at build time and served as a
 * file; nothing runs on a server, which is what the host provides.
 *
 * React is present as a BUILD-TIME renderer only. The design-system components
 * under components/ are React, and Astro renders them to HTML during the build;
 * because no component carries a `client:*` directive, none of React reaches the
 * browser. The prototype did the opposite — it shipped React's development
 * build plus Babel from a CDN and compiled JSX in the visitor's browser.
 */
/**
 * `site` + `base` describe where the built files will actually be served.
 *
 * GitHub Pages serves a project site from a subpath - /kaleylas-cleaning/ - not
 * from the domain root. Astro prefixes the asset URLs it generates with `base`,
 * but a hand-written href does not go through Astro, so every internal link is
 * built from BASE_URL in src/lib/href.js instead of being hardcoded. Getting
 * this wrong is what made an earlier Pages deploy on a sibling project 404 on
 * every URL.
 *
 * Moving to a custom domain later: set `site` to that domain and `base` to '/'.
 */
export default defineConfig({
  site: 'https://lundeen-labs.github.io',
  base: '/kaleylas-cleaning',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    react(),
    /**
     * The sitemap is how Google learns the Spanish page exists.
     *
     * Passing `i18n` makes it emit xhtml:link alternates inside the sitemap, so
     * each URL declares its language and points at its counterpart. Google's
     * localised-versions guidance lists the sitemap as one of the three valid
     * ways to signal alternates, alongside the hreflang tags already in the
     * page head — doing both is belt and braces, and costs nothing.
     *
     * Without this, a crawler has to discover /es/ by following the language
     * link, which it may or may not do promptly on a brand-new site with no
     * inbound links.
     */
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-US' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'never' },
  devToolbar: { enabled: false },
})
