/**
 * Converted from ui_kits/website/Reviews.jsx for the production build.
 *
 * Two mechanical changes from the prototype: the design system arrives by import
 * instead of off a `window` global, and the component is exported instead of
 * being assigned back onto `window`. Component bodies are otherwise unchanged,
 * except where a fabricated claim had to come out - those edits are commented
 * where they occur.
 */
import React from 'react'
import * as ns from '../lib/ds.js'
import { Container, Photo, Section, SectionHeading } from '../lib/parts.jsx'
import { site, L } from '../config/site.js'

export function Reviews({ lang }) {
  const { Card, Avatar, Rating, Icon } = ns;
  const reviews = [
    // These were three invented testimonials with invented names and towns.
    // Fabricated reviews are deceptive advertising, so real ones - with the
    // customer's permission - go in site.reviews and render here instead.
    ...site.reviews.map((r) => ({ q: L(lang, r.quote.en, r.quote.es), name: r.name, loc: r.location })),
  ];
  const towns = ['Mount Vernon', 'Burlington', 'Sedro-Woolley', 'Anacortes', 'La Conner', 'Conway', 'Bow', 'Clear Lake', 'Bayview'];
  const faqs = [
    // The answer previously asserted both "background-checked" and "insured".
    [L(lang, 'Do I need to be home during the cleaning?', '¿Tengo que estar en casa durante la limpieza?'), site.claims.backgroundChecked && site.claims.licensedAndInsured
      ? L(lang, 'Not at all. Most clients give us a key or entry code. Your team is background-checked and insured, and we lock up when we leave.', 'Para nada. La mayoría nos da una llave o código. Tu equipo está verificado y asegurado, y cerramos al salir.')
      : L(lang, 'Not at all. Most clients give us a key or entry code, and we lock up when we leave.', 'Para nada. La mayoría nos da una llave o código, y cerramos al salir.')],
    [L(lang, 'Do you bring your own supplies?', '¿Traen sus propios productos?'), L(lang, 'Yes — we bring everything, including eco-friendly products on request. Just let us know if you prefer we use yours.', 'Sí — traemos todo, incluyendo productos ecológicos a pedido. Avísanos si prefieres que usemos los tuyos.')],
    // The whole question only belongs on the page once the answer is confirmed;
    // an unanswered "are you insured?" is worse than not raising it.
    ...(site.claims.licensedAndInsured
      ? [[L(lang, 'Are you licensed and insured?', '¿Tienen licencia y seguro?'), L(lang,
          `Always. ${site.shortName} is fully licensed${site.claims.bonded ? ', bonded' : ''}, and insured${site.claims.backgroundChecked ? ', and every cleaner is background-checked' : ''}.`,
          `Siempre. ${site.shortName} tiene licencia${site.claims.bonded ? ', fianza' : ''} y seguro${site.claims.backgroundChecked ? ', y cada persona está verificada' : ''}.`)]]
      : []),
    [L(lang, 'Can I get service in Spanish?', '¿Puedo recibir atención en español?'), L(lang, 'Of course. Our owners and team are fully bilingual — quotes, scheduling, and support in English or Español.', 'Claro. Nuestros dueños y equipo son totalmente bilingües — cotizaciones, horarios y soporte en inglés o español.')],
  ];


  return (
    <>
      <Section id="reviews">
        <Container>
          <SectionHeading center eyebrow={L(lang, 'Reviews', 'Reseñas')} title={L(lang, 'Loved by Skagit families & businesses', 'Querido por familias y negocios de Skagit')} />
          <div className="grid-3" style={{ marginTop: 44 }}>
            {reviews.map((r) => (
              <Card key={r.name} style={{ padding: 26 }}>
                <div className="review">
                  <Rating value={5} size={16} />
                  <p className="review__quote">{`\u201C${r.q}\u201D`}</p>
                  <div className="review__who">
                    <Avatar name={r.name} size="md" />
                    <div>
                      <div className="review__name">{r.name}</div>
                      <div className="review__loc">{r.loc}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="areas" variant="soft">
        <Container>
          <div className="grid-2" style={{ alignItems: 'center', gap: 48 }}>
            <div>
              <SectionHeading eyebrow={L(lang, 'Service area', 'Zona de servicio')} title={L(lang, 'Proudly serving the Skagit Valley', 'Con orgullo en el Valle de Skagit')} sub={L(lang, 'Based in Mount Vernon, we clean homes and offices across the valley. Not sure if we reach you? Just ask.', 'Con base en Mount Vernon, limpiamos casas y oficinas en todo el valle. ¿No sabes si llegamos? Pregúntanos.')} />
              <div className="areas" style={{ marginTop: 24 }}>
                {towns.map((t) => (
                  <span className="area-pill" key={t}><Icon name="map-pin" size={15} /> {t}</span>
                ))}
              </div>
            </div>
            <Photo ratio="wide" caption={L(lang, 'Skagit Valley map', 'Mapa del valle')} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <SectionHeading center eyebrow={L(lang, 'Questions', 'Preguntas')} title={L(lang, 'Good to know', 'Bueno saber')} />
          <div className="faq" style={{ marginTop: 36 }}>
            {/* Was a button toggling React state. Nothing hydrates, so every
                answer would have been sealed shut for every visitor. <details>
                opens with no JavaScript at all, and brings its own accessible
                expand/collapse semantics. */}
            {faqs.map(([q, a], i) => (
              <details className="faq__item" key={q} open={i === 0}>
                <summary className="faq__q">
                  {q}<Icon name="plus" size={22} />
                </summary>
                <div className="faq__a"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
