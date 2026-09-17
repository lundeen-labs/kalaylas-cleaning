/**
 * Converted from ui_kits/website/Services.jsx for the production build.
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

export function StatsStrip({ lang }) {
  const { Stat } = ns;
  // A strip holding only the bilingual badge reads as an empty shelf, so the
  // whole band waits until there is at least one real figure to put in it.
  if (!site.stats.length) return null;
  return (
    <Section variant="soft" tight>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          {/* Was "500+", "4.9★", "12 yrs" and "100%" - none of which came from
              anywhere. Real figures go in site.stats and appear here; the
              bilingual one stays because the page itself demonstrates it. */}
          {site.stats.map((s) => (
            <Stat key={s.label.en} value={s.value} label={L(lang, s.label.en, s.label.es)} />
          ))}
          <Stat value="EN · ES" label={L(lang, 'Bilingual team', 'Equipo bilingüe')} />
        </div>
      </Container>
    </Section>
  );
}

function ServiceCard({ icon, title, desc, items }) {
  const { Card, Icon, Button } = ns;
  return (
    <Card style={{ padding: 32 }}>
      <div className="svc">
        <div className="svc__tile"><Icon name={icon} size={28} /></div>
        <h3>{title}</h3>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.55 }}>{desc}</p>
        <ul className="svc__list">
          {items.map((it) => (
            <li key={it}><Icon name="check" size={18} strokeWidth={2.5} /> {it}</li>
          ))}
        </ul>
        <div style={{ marginTop: 6 }}>
          {/* Sends the reader to the pricing table rather than nowhere. */}
          <Button variant="outline" href="#pricing" trailingIcon={<Icon name="arrow-right" size={18} />}>{title}</Button>
        </div>
      </div>
    </Card>
  );
}

export function Services({ lang }) {
  const { Icon } = ns;
  const included = [
    [L(lang, 'Kitchens', 'Cocinas'), 'utensils-crossed'],
    [L(lang, 'Bathrooms', 'Baños'), 'shower-head'],
    [L(lang, 'Bedrooms', 'Recámaras'), 'bed'],
    [L(lang, 'Living areas', 'Salas'), 'sofa'],
    [L(lang, 'Floors', 'Pisos'), 'grid-2x2'],
    [L(lang, 'Dusting', 'Sacudido'), 'wind'],
    [L(lang, 'Interior windows', 'Ventanas'), 'panel-top'],
    [L(lang, 'Trash & recycling', 'Basura y reciclaje'), 'trash-2'],
  ];
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          center
          eyebrow={L(lang, 'Residential & Commercial', 'Residencial y Comercial')}
          title={L(lang, 'One trusted team for homes and offices', 'Un equipo de confianza para casas y oficinas')}
          sub={L(lang, 'Recurring or one-time — we tailor every clean to your space and schedule.', 'Recurrente o una vez — adaptamos cada limpieza a tu espacio y horario.')}
        />
        <div className="grid-2" style={{ marginTop: 44 }}>
          <ServiceCard
            icon="home"
            title={L(lang, 'Home cleaning', 'Limpieza de casa')}
            desc={L(lang, 'Weekly, biweekly, or monthly visits that keep your home calm and spotless — so you get your weekend back.', 'Visitas semanales, quincenales o mensuales que mantienen tu hogar impecable — para que recuperes tu fin de semana.')}
            items={[
              L(lang, 'Kitchen, appliances & counters', 'Cocina, electrodomésticos y mesones'),
              L(lang, 'Bathrooms & fixtures sanitized', 'Baños desinfectados'),
              L(lang, 'Floors vacuumed & mopped', 'Pisos aspirados y trapeados'),
              L(lang, 'Dusting, beds made, trash out', 'Sacudido, camas y basura'),
            ]}
          />
          <ServiceCard
            icon="building-2"
            title={L(lang, 'Office cleaning', 'Limpieza de oficina')}
            desc={L(lang, 'Reliable after-hours service that keeps your workplace fresh, healthy, and ready for the day.', 'Servicio confiable fuera de horario que mantiene tu lugar de trabajo fresco y listo.')}
            items={[
              L(lang, 'Desks, common areas & break rooms', 'Escritorios, áreas comunes y cocinas'),
              L(lang, 'Restrooms cleaned & restocked', 'Baños limpios y surtidos'),
              L(lang, 'Floors, carpets & entryways', 'Pisos, alfombras y entradas'),
              L(lang, 'Flexible nightly or weekly plans', 'Planes nocturnos o semanales'),
            ]}
          />
        </div>

        <div style={{ marginTop: 64 }}>
          <SectionHeading title={L(lang, "What's included, every visit", 'Qué incluye, en cada visita')} />
          <div className="incl" style={{ marginTop: 24 }}>
            {included.map(([label, icon]) => (
              <div className="incl__item" key={label}>
                <Icon name={icon} size={20} /> {label}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
