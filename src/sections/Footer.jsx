/**
 * Converted from ui_kits/website/Footer.jsx for the production build.
 *
 * Two mechanical changes from the prototype: the design system arrives by import
 * instead of off a `window` global, and the component is exported instead of
 * being assigned back onto `window`. Component bodies are otherwise unchanged,
 * except where a fabricated claim had to come out - those edits are commented
 * where they occur.
 */
import React from 'react'
import * as ns from '../lib/ds.js'
import { Container, Section } from '../lib/parts.jsx'
import { site, L, quoteHref } from '../config/site.js'

export function CTABand({ lang }) {
  const { Button, Icon } = ns;
  return (
    <Section tight>
      <Container>
        <div className="ctaband">
          <div className="ctaband__glow"></div>
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>
              {L(lang, 'Ready for a spotless home?', '¿Listo para una casa impecable?')}
            </h2>
            <p style={{ color: 'var(--text-on-deep)', fontSize: 18, margin: '14px auto 0', maxWidth: 540 }}>
              {L(lang, 'Get a free, no-obligation quote today — most replies within the hour.', 'Pide tu cotización gratis hoy — casi siempre respondemos en menos de una hora.')}
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
              {quoteHref() && (
                <Button size="lg" href={quoteHref()} leadingIcon={<Icon name="sparkles" size={20} />}>
                  {L(lang, 'Get a free quote', 'Cotización gratis')}
                </Button>
              )}
              {site.phone && (
                <Button size="lg" variant="secondary" leadingIcon={<Icon name="phone" size={18} />} href={`tel:${site.phone.href}`}>
                  {site.phone.display}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Footer({ lang }) {
  const { Logo, Icon, IconButton } = ns;
  const col = (title, links) => (
    <div>
      <h4>{title}</h4>
      {links.map((l) => <a key={l} href="#top">{l}</a>)}
    </div>
  );
  return (
    <footer className="ftr">
      <Container>
        <div className="ftr__top">
          <div>
            <Logo tone="reversed" size={34} />
            <p style={{ color: 'var(--text-on-deep)', fontSize: 14.5, lineHeight: 1.6, marginTop: 16, maxWidth: 280 }}>
              {L(lang, 'Family-owned home & office cleaning, proudly serving Mount Vernon and the Skagit Valley in English & Español.', 'Limpieza familiar de casas y oficinas, con orgullo en Mount Vernon y el Valle de Skagit, en inglés y español.')}
            </p>
            {/* Were buttons that linked nowhere. Each appears only once there is
                a real profile to point at. */}
            {(site.social.instagram || site.social.facebook) && (
              <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
                {site.social.instagram && (
                  <IconButton variant="outline" label="Instagram" href={site.social.instagram} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}><Icon name="instagram" size={18} /></IconButton>
                )}
                {site.social.facebook && (
                  <IconButton variant="outline" label="Facebook" href={site.social.facebook} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}><Icon name="facebook" size={18} /></IconButton>
                )}
              </div>
            )}
          </div>
          {col(L(lang, 'Services', 'Servicios'), [L(lang, 'Home cleaning', 'Limpieza de casa'), L(lang, 'Office cleaning', 'Limpieza de oficina'), L(lang, 'Deep cleans', 'Limpieza profunda'), L(lang, 'Move-in / move-out', 'Mudanzas')])}
          {col(L(lang, 'Company', 'Empresa'), [L(lang, 'About us', 'Nosotros'), L(lang, 'Reviews', 'Reseñas'), L(lang, 'Service area', 'Zona'), L(lang, 'Careers', 'Empleo')])}
          <div>
            <h4>{L(lang, 'Contact', 'Contacto')}</h4>
            {/* The prototype printed (360) 555-0142 and hola@kalaylas.com. The
                first is the reserved fictional prefix; the second sits on a
                domain that does not resolve. Both now come from site.js and are
                simply absent until they are real, because a contact detail that
                does not work is worse than none. */}
            {site.phone && (
              <a href={`tel:${site.phone.href}`}>
                <Icon name="phone" size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />
                {site.phone.display}
              </a>
            )}
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            <span className="ftr__plain">{site.city}, {site.region}</span>
            <span className="ftr__plain">{L(lang, site.hours.display.en, site.hours.display.es)}</span>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
            {site.claims.licensedAndInsured && ` · ${L(lang, 'Licensed & insured', 'Con licencia y seguro')}`}
          </span>
          <span>{L(lang, 'Made with care in the Skagit Valley', 'Hecho con cariño en el Valle de Skagit')}</span>
        </div>
      </Container>
    </footer>
  );
}
