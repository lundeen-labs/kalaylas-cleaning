import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

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
export default defineConfig({
  site: 'https://kaleylascleaning.com',
  output: 'static',
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'never' },
  devToolbar: { enabled: false },
})
