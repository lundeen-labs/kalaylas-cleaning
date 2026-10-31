/**
 * Converted from ui_kits/website/Process.jsx for the production build.
 *
 * Two mechanical changes from the prototype: the design system arrives by import
 * instead of off a `window` global, and the component is exported instead of
 * being assigned back onto `window`. Component bodies are otherwise unchanged,
 * except where a fabricated claim had to come out - those edits are commented
 * where they occur.
 */
import React from 'react'
import * as ns from '../lib/ds.js'
import { Container, Section, SectionHeading } from '../lib/parts.jsx'
import { site, L } from '../config/site.js'

export function Process({ lang }) {
  const { Icon } = ns;
  const { claims } = site;
  const steps = [
    // "Usually within the hour" was a response-time promise nobody has measured,
    // and the booking page is staffed Mon-Fri 9am-5pm. The sentence now names the
    // hours she is actually reachable, straight from site.hours.
    ['clipboard-list', L(lang, 'Get a free quote', 'Pide tu cotización'), L(lang,
      `Tell us about your space in two minutes. We reply with a fair, flat price during business hours (${site.hours.display.en}).`,
      `Cuéntanos sobre tu espacio en dos minutos. Respondemos con un precio justo y fijo en horario de atención (${site.hours.display.es}).`)],
    // "background-checked" is a claim about hiring practice; the sentence drops
    // it until site.claims.backgroundChecked is true.
    ['calendar-check', L(lang, 'Pick a time', 'Elige un horario'), claims.backgroundChecked
      ? L(lang, 'Choose a day that works for you and meet your background-checked cleaner.', 'Elige el día que te convenga y conoce a quien limpiará tu espacio, con antecedentes verificados.')
      : L(lang, 'Choose a day that works for you, Monday to Friday, and meet the person who will clean your space.', 'Elige el día que te convenga, de lunes a viernes, y conoce a quien limpiará tu espacio.')],
    // "satisfaction guaranteed" is a legal promise; it waits for
    // site.claims.satisfactionGuarantee.
    ['sparkles', L(lang, 'Relax', 'Relájate'), claims.satisfactionGuarantee
      ? L(lang, 'Come home to clean. The same friendly cleaner returns every visit — satisfaction guaranteed.', 'Llega a una casa limpia. La misma persona regresa cada visita — satisfacción garantizada.')
      : L(lang, 'Come home to clean. The same friendly cleaner returns every visit.', 'Llega a una casa limpia. La misma persona regresa cada visita.')],
  ];
  // Every item in the "what you get" list is a claim a customer can rely on, so
  // each one waits for the owner to confirm it in site.claims.
  const promises = [
    ...(claims.licensedAndInsured ? [L(lang, 'Licensed & insured', 'Con licencia y seguro')] : []),
    ...(claims.backgroundChecked ? [L(lang, 'Background-checked cleaner', 'Antecedentes verificados')] : []),
    ...(claims.satisfactionGuarantee ? [L(lang, '24-hour re-clean guarantee', 'Re-limpieza en 24 horas')] : []),
    ...(claims.ecoFriendlyProducts ? [L(lang, 'Eco-friendly products on request', 'Productos ecológicos a pedido')] : []),
  ];
  // The whole promise band is omitted while nothing in it is confirmed; an
  // empty band under a "Love it, or we'll make it right" headline is the claim
  // itself, so the headline is gated on the guarantee flag too.
  const showPromise = claims.satisfactionGuarantee || promises.length > 0;
  return (
    <>
      <Section id="how" variant="soft">
        <Container>
          <SectionHeading center eyebrow={L(lang, 'How it works', 'Cómo funciona')} title={L(lang, 'Booked in minutes, clean for good', 'Reserva en minutos, limpio para siempre')} />
          <div className="steps" style={{ marginTop: 48 }}>
            {steps.map(([icon, title, body], i) => (
              <div className="step" key={title}>
                <div className="step__tile"><Icon name={icon} size={26} /></div>
                <div className="step__num">{L(lang, 'STEP', 'PASO')} 0{i + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {showPromise && (
        <Section tight>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: claims.satisfactionGuarantee ? '1fr 1fr' : '1fr', gap: 48, alignItems: 'center' }} className="guarantee-grid">
              {claims.satisfactionGuarantee ? (
                <div>
                  <span className="eyebrow">{L(lang, 'Our promise', 'Nuestra promesa')}</span>
                  <h2 className="sh__title" style={{ marginTop: 14 }}>{L(lang, "Love it, or we'll make it right.", 'Te encanta, o lo corregimos.')}</h2>
                  <p className="sh__sub">{L(lang, "If something isn't perfect, tell us within 24 hours and we'll re-clean it free. That's the Kalayla's guarantee.", 'Si algo no quedó perfecto, dinos en 24 horas y lo limpiamos de nuevo gratis. Esa es la garantía de Kalayla’s.')}</p>
                </div>
              ) : (
                <div>
                  <span className="eyebrow">{L(lang, 'What you get', 'Lo que recibes')}</span>
                </div>
              )}
              {promises.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {promises.map((p) => (
                    <div className="incl__item" key={p} style={{ background: 'var(--surface-card)' }}>
                      <Icon name="shield-check" size={20} /> {p}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
