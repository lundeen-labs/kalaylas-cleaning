/**
 * Converted from ui_kits/website/Pricing.jsx for the production build.
 *
 * Rewritten 2026-09-16 against her actual service list. The prototype priced by
 * FREQUENCY - weekly, every two weeks, monthly - and hung invented perks off
 * each tier ("Priority scheduling", "10% off add-ons", "Supplies managed").
 * She does not price that way and nobody confirmed those policies. Residential
 * work is priced by depth, commercial work by square footage, and both are
 * booked as fixed-length slots on her Setmore page. Those are the prices a
 * customer is actually charged, so those are the prices shown here - anything
 * else means quoting one figure and billing another.
 *
 * The prototype also had its two group headings in the wrong order, so the
 * heading reading "Homes" sat directly above the office cards.
 */
import React from 'react'
import * as ns from '../lib/ds.js'
import { Container, Section, SectionHeading } from '../lib/parts.jsx'
import { site, L, quoteHref } from '../config/site.js'

const money = (n) => `$${n.toLocaleString('en-US')}`

function PlanCard({ plan, lang }) {
  const { Card, Button, Badge, Icon } = ns
  const copy = plan[lang] ?? plan.en
  const href = quoteHref()

  return (
    <Card className={`plan ${plan.featured ? 'plan--featured' : ''}`} style={{ padding: 26 }}>
      {/* The only badge on the page repeats what she calls the service on her
          own booking page. It is not a "most popular" claim - nobody has the
          numbers to make one. */}
      {plan.featured && (
        <div style={{ position: 'absolute', top: 18, right: 18 }}>
          <Badge tone="brand" solid>{L(lang, 'Standard', 'Estándar')}</Badge>
        </div>
      )}

      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text-heading)' }}>
          {copy.name}
        </div>
        <div className="plan__dur">
          <Icon name="clock" size={14} strokeWidth={2.2} />
          {L(lang, `${plan.hours}-hour visit`, `Visita de ${plan.hours} horas`)}
        </div>
      </div>

      <div className="plan__price">
        {plan.from && <span className="plan__per">{L(lang, 'from', 'desde')}</span>}
        <span className="plan__amt">{money(plan.price)}</span>
        <span className="plan__per">{L(lang, 'per visit', 'por visita')}</span>
      </div>

      {copy.blurb && <p className="plan__blurb">{copy.blurb}</p>}

      {href && (
        <Button href={href} variant={plan.featured ? 'primary' : 'secondary'} fullWidth>
          {L(lang, 'Book this', 'Reservar')}
        </Button>
      )}
    </Card>
  )
}

export function Pricing({ lang }) {
  // The prototype switched Homes/Offices with React state. Nothing on this page
  // hydrates, so that control would render once and never respond - a visitor
  // could never reach the office plans. Both groups render, each under its own
  // heading, which also gives the office plans a real anchor to link to.
  if (!site.pricing) return null

  const { residential, commercial, consultation } = site.pricing
  const { Icon } = ns
  const href = quoteHref()
  const consult = consultation && (consultation[lang] ?? consultation.en)

  return (
    <Section id="pricing">
      <Container>
        <SectionHeading
          center
          eyebrow={L(lang, 'Simple pricing', 'Precios claros')}
          title={L(lang, 'Flat prices, published up front', 'Precios fijos, publicados desde el principio')}
          sub={L(
            lang,
            'These are the same prices you see when you book. No estimate visit, no surprise line items.',
            'Son los mismos precios que verás al reservar. Sin visita de presupuesto ni cargos sorpresa.',
          )}
        />

        <h3 className="pricing__group" id="home-pricing">{L(lang, 'Homes', 'Casas')}</h3>
        <div className="plans">
          {residential.map((p) => <PlanCard key={p.key} plan={p} lang={lang} />)}
        </div>

        <h3 className="pricing__group" id="office-pricing">{L(lang, 'Offices & commercial', 'Oficinas y comercios')}</h3>
        <div className="plans plans--four">
          {commercial.map((p) => <PlanCard key={p.key} plan={p} lang={lang} />)}
        </div>

        {consult && (
          <p className="pricing__consult">
            <Icon name="phone" size={16} strokeWidth={2.2} />
            <span>
              <strong>{consult.name}</strong>
              {' — '}
              {consult.blurb}
            </span>
            {href && (
              <a className="pricing__consult-link" href={href}>
                {L(lang, 'Book a consultation', 'Reservar una consulta')}
              </a>
            )}
          </p>
        )}
      </Container>
    </Section>
  )
}
