/**
 * Converted from ui_kits/website/Header.jsx for the production build.
 *
 * Two mechanical changes from the prototype: the design system arrives by import
 * instead of off a `window` global, and the component is exported instead of
 * being assigned back onto `window`. Component bodies are otherwise unchanged,
 * except where a fabricated claim had to come out - those edits are commented
 * where they occur.
 */
import React from 'react'
import * as ns from '../lib/ds.js'
import { Container } from '../lib/parts.jsx'
import { site, L } from '../config/site.js'

export function Header({ lang }) {
  const { Logo, Button, IconButton, Icon } = ns;
  const links = [
    [L(lang, 'Services', 'Servicios'), '#services'],
    [L(lang, 'Pricing', 'Precios'), '#pricing'],
    [L(lang, 'Reviews', 'Reseñas'), '#reviews'],
    [L(lang, 'Service area', 'Zona'), '#areas'],
  ];
  return (
    <header className="hdr">
      <Container>
        <div className="hdr__bar">
          <a href="#top" aria-label="Kaleyla's home" style={{ textDecoration: 'none' }}><Logo size={34} /></a>
          <nav className="hdr__nav">
            {links.map(([label, href]) => (
              <a key={href} className="hdr__link" href={href}>{label}</a>
            ))}
          </nav>
          <div className="hdr__right">
            {/* Was two buttons flipping React state, which gave the Spanish
                content no URL at all - nothing to link, bookmark, share or index.
                Each locale is now its own page, so this is plain navigation and
                needs no JavaScript. */}
            <div className="langtoggle" role="group" aria-label={L(lang, 'Language', 'Idioma')}>
              <a href="/" aria-current={lang === 'en' ? 'page' : undefined} hrefLang="en">EN</a>
              <a href="/es/" aria-current={lang === 'es' ? 'page' : undefined} hrefLang="es">ES</a>
            </div>
            {/* The prototype hard-coded (360) 555-0142. 555 is the reserved
                fictional prefix, so the link went nowhere. */}
            {site.phone && (
              <a className="hdr__phone" href={`tel:${site.phone.href}`}>
                <Icon name="phone" size={15} /> {site.phone.display}
              </a>
            )}
            <Button leadingIcon={<Icon name="sparkles" size={18} />}>{L(lang, 'Get a free quote', 'Cotización gratis')}</Button>
            <IconButton className="hdr__menu" variant="outline" label="Menu"><Icon name="menu" size={20} /></IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
