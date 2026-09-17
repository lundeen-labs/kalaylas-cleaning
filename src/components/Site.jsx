/**
 * The page body, assembled from the sections.
 *
 * Replaces ui_kits/website/app.jsx, which held the active language in React
 * state and mounted with ReactDOM.createRoot. Language is now a prop supplied by
 * whichever page is being built, so each locale is rendered to its own static
 * HTML file and no React reaches the browser.
 */
import React from 'react'
import { Header } from '../sections/Header.jsx'
import { Hero } from '../sections/Hero.jsx'
import { Services, StatsStrip } from '../sections/Services.jsx'
import { Process } from '../sections/Process.jsx'
import { Pricing } from '../sections/Pricing.jsx'
import { Reviews } from '../sections/Reviews.jsx'
import { CTABand, Footer } from '../sections/Footer.jsx'

export function Site({ lang }) {
  return (
    <div className="site">
      <Header lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <StatsStrip lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <Pricing lang={lang} />
        <Reviews lang={lang} />
        <CTABand lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
