/**
 * Converted from ui_kits/website/Hero.jsx for the production build.
 *
 * Two mechanical changes from the prototype: the design system arrives by import
 * instead of off a `window` global, and the component is exported instead of
 * being assigned back onto `window`. Component bodies are otherwise unchanged,
 * except where a fabricated claim had to come out - those edits are commented
 * where they occur.
 */
import React from 'react'
import * as ns from '../lib/ds.js'
import { Container, Photo, Section } from '../lib/parts.jsx'
import { site, L, quoteHref } from '../config/site.js'

export function Hero({ lang }) {
  const { Button, Icon, Avatar, Rating } = ns;
  return (
    <Section className="hero" id="top">
      <Container>
        <div className="hero__grid">
          <div>
            <span className="eyebrow">{L(lang, 'Serving Mount Vernon & Skagit Valley', 'Mount Vernon y el Valle de Skagit')}</span>
            <h1 className="hero__title">{L(lang, 'A spotless home, without lifting a finger.', 'Una casa impecable, sin mover un dedo.')}</h1>
            <p className="hero__sub">{L(lang,
              // "insured" is a claim even in running copy, so the sentence is
              // written two ways and the stronger one waits for confirmation.
              site.claims.licensedAndInsured
                ? 'Trusted, insured cleaners for homes and offices — the same friendly, bilingual team, every visit.'
                : 'Careful, reliable cleaning for homes and offices — the same friendly, bilingual team, every visit.',
              site.claims.licensedAndInsured
                ? 'Limpieza de confianza y con seguro para casas y oficinas — el mismo equipo bilingüe y amable, en cada visita.'
                : 'Limpieza cuidadosa y confiable para casas y oficinas — el mismo equipo bilingüe y amable, en cada visita.')}
            </p>
            <div className="hero__cta">
              {quoteHref() && (
                <Button size="lg" href={quoteHref()} leadingIcon={<Icon name="sparkles" size={20} />}>
                  {L(lang, 'Get a free quote', 'Pide tu cotización')}
                </Button>
              )}
              {/* The secondary action scrolls to the services section, which is
                  on the page already - no JavaScript needed. */}
              <Button size="lg" variant="secondary" href="#services" trailingIcon={<Icon name="arrow-right" size={18} />}>
                {L(lang, "See what's included", 'Qué incluye')}
              </Button>
            </div>
            {/* "Licensed & insured" and "Satisfaction guaranteed" are claims a
                customer can act on, so each is gated on site.claims and simply
                absent until the owner confirms it. Bilingual service is the one
                claim that is self-evidently true - the site is in both languages. */}
            <div className="hero__trust">
              {site.claims.licensedAndInsured && (
                <span className="trustitem"><Icon name="shield-check" size={18} /> {L(lang, 'Licensed & insured', 'Con licencia y seguro')}</span>
              )}
              <span className="trustitem"><Icon name="messages-square" size={18} /> {L(lang, 'English & Español', 'Inglés y Español')}</span>
              {site.claims.satisfactionGuarantee && (
                <span className="trustitem"><Icon name="badge-check" size={18} /> {L(lang, 'Satisfaction guaranteed', 'Satisfacción garantizada')}</span>
              )}
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__glow"></div>
            <Photo ratio="ratio" caption={L(lang, 'Bright, tidy home', 'Hogar limpio')} style={{ position: 'relative', zIndex: 1 }} />
            {/* Was a hard-coded "214 five-star reviews". There is no review
                platform behind this site yet, so the card appears only when
                site.rating holds a real aggregate from a real source. */}
            {site.rating && (
              <div className="floatcard floatcard--tl">
                <Rating value={Math.round(site.rating.value)} size={15} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 5 }}>
                  {L(lang,
                    `${site.rating.count} reviews on ${site.rating.source}`,
                    `${site.rating.count} reseñas en ${site.rating.source}`)}
                </div>
              </div>
            )}
            {/* Was "Tue 9:00 AM · Kalayla + Ana", which named a staff member who
                may not exist and implied a booking system the business does not
                run. Reworded to describe the promise rather than invent a booking. */}
            <div className="floatcard floatcard--br">
              <span className="floatcard__mark" aria-hidden="true"><Icon name="calendar-check" size={20} /></span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-heading)' }}>{L(lang, 'The same team, every visit', 'El mismo equipo, cada visita')}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{L(lang, 'On a schedule that suits you', 'En el horario que te acomode')}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
