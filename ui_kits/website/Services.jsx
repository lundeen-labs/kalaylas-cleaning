const nsSvc = window.KaleylaSCleaningDesignSystem_b83ec6;

function StatsStrip({ lang }) {
  const { Stat } = nsSvc;
  return (
    <Section variant="soft" tight>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <Stat value="500+" label={L(lang, 'Homes cleaned', 'Casas limpiadas')} />
          <Stat value="4.9★" label={L(lang, 'Average rating', 'Calificación')} />
          <Stat value="12 yrs" label={L(lang, 'Serving Skagit', 'Sirviendo Skagit')} />
          <Stat value="100%" label={L(lang, 'Satisfaction', 'Satisfacción')} />
          <Stat value="EN · ES" label={L(lang, 'Bilingual team', 'Equipo bilingüe')} />
        </div>
      </Container>
    </Section>
  );
}

function ServiceCard({ icon, title, desc, items }) {
  const { Card, Icon, Button } = nsSvc;
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
          <Button variant="outline" trailingIcon={<Icon name="arrow-right" size={18} />}>{title}</Button>
        </div>
      </div>
    </Card>
  );
}

function Services({ lang }) {
  const { Icon } = nsSvc;
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
window.Services = Services;
window.StatsStrip = StatsStrip;
