const nsPrice = window.KaleylaSCleaningDesignSystem_b83ec6;

function PlanCard({ plan, lang }) {
  const { Card, Button, Badge, Icon } = nsPrice;
  return (
    <Card className={`plan ${plan.featured ? 'plan--featured' : ''}`} style={{ padding: 28 }}>
      {plan.featured && (
        <div style={{ position: 'absolute', top: 18, right: 18 }}>
          <Badge tone="brand" solid>{L(lang, 'Most popular', 'Más popular')}</Badge>
        </div>
      )}
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text-heading)' }}>{plan.name}</div>
        <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>{plan.tag}</div>
      </div>
      <div className="plan__price">
        <span className="plan__amt">{plan.price}</span>
        <span className="plan__per">{plan.per}</span>
      </div>
      <ul className="plan__feat">
        {plan.feats.map((f) => (
          <li key={f}><Icon name="check" size={18} strokeWidth={2.5} /> {f}</li>
        ))}
      </ul>
      <Button variant={plan.featured ? 'primary' : 'secondary'} fullWidth>{plan.cta}</Button>
    </Card>
  );
}

function Pricing({ lang }) {
  const { Tabs } = nsPrice;
  const [seg, setSeg] = React.useState('home');

  const home = [
    { name: L(lang, 'One-time deep clean', 'Limpieza profunda'), tag: L(lang, 'No commitment', 'Sin compromiso'), price: '$149', per: L(lang, 'from', 'desde'), cta: L(lang, 'Book once', 'Reservar'), feats: [L(lang, 'Whole-home deep clean', 'Limpieza profunda total'), L(lang, 'Inside appliances', 'Interior de electrodomésticos'), L(lang, 'Baseboards & detail work', 'Zócalos y detalles'), L(lang, 'Flexible scheduling', 'Horario flexible')] },
    { name: L(lang, 'Every 2 weeks', 'Cada 2 semanas'), tag: L(lang, 'Our favorite', 'La favorita'), price: '$119', per: L(lang, '/ visit', '/ visita'), cta: L(lang, 'Get started', 'Empezar'), featured: true, feats: [L(lang, 'Same trusted team', 'El mismo equipo'), L(lang, 'Priority scheduling', 'Horario prioritario'), L(lang, '10% off add-ons', '10% en extras'), L(lang, 'Pause anytime', 'Pausa cuando quieras')] },
    { name: L(lang, 'Weekly', 'Semanal'), tag: L(lang, 'Best value', 'Mejor precio'), price: '$99', per: L(lang, '/ visit', '/ visita'), cta: L(lang, 'Get started', 'Empezar'), feats: [L(lang, 'Lowest price per visit', 'Menor precio por visita'), L(lang, 'Same team weekly', 'Mismo equipo cada semana'), L(lang, 'Top-priority slots', 'Horarios preferentes'), L(lang, 'Pause anytime', 'Pausa cuando quieras')] },
  ];
  const office = [
    { name: L(lang, 'Small office', 'Oficina pequeña'), tag: L(lang, 'Up to 2,500 sq ft', 'Hasta 230 m²'), price: L(lang, 'Custom', 'A medida'), per: '', cta: L(lang, 'Request a quote', 'Pedir cotización'), feats: [L(lang, 'After-hours service', 'Fuera de horario'), L(lang, 'Restrooms & break rooms', 'Baños y cocinas'), L(lang, 'Weekly or biweekly', 'Semanal o quincenal'), L(lang, 'Supplies managed', 'Insumos incluidos')] },
    { name: L(lang, 'Standard', 'Estándar'), tag: L(lang, 'Up to 8,000 sq ft', 'Hasta 740 m²'), price: L(lang, 'Custom', 'A medida'), per: '', cta: L(lang, 'Request a quote', 'Pedir cotización'), featured: true, feats: [L(lang, 'Nightly or weekly', 'Nocturno o semanal'), L(lang, 'Floors & carpets', 'Pisos y alfombras'), L(lang, 'Dedicated team', 'Equipo dedicado'), L(lang, 'Monthly walkthroughs', 'Revisiones mensuales')] },
    { name: L(lang, 'Multi-site', 'Multi-sitio'), tag: L(lang, 'Tailored program', 'Programa a medida'), price: L(lang, 'Custom', 'A medida'), per: '', cta: L(lang, 'Request a quote', 'Pedir cotización'), feats: [L(lang, 'Multiple locations', 'Varias ubicaciones'), L(lang, 'Day porter option', 'Conserje de día'), L(lang, 'Account manager', 'Gerente de cuenta'), L(lang, 'Custom reporting', 'Reportes a medida')] },
  ];
  const plans = seg === 'home' ? home : office;

  return (
    <Section id="pricing">
      <Container>
        <SectionHeading center eyebrow={L(lang, 'Simple pricing', 'Precios claros')} title={L(lang, 'Fair, flat prices — no surprises', 'Precios justos y fijos — sin sorpresas')} sub={L(lang, 'Recurring plans lower your per-visit price. Cancel or pause anytime.', 'Los planes recurrentes bajan el precio por visita. Cancela o pausa cuando quieras.')} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 26 }}>
          <Tabs value={seg} onChange={setSeg} tabs={[{ value: 'home', label: L(lang, 'Homes', 'Casas') }, { value: 'office', label: L(lang, 'Offices', 'Oficinas') }]} />
        </div>
        <div className="plans" style={{ marginTop: 32 }}>
          {plans.map((p) => <PlanCard key={p.name} plan={p} lang={lang} />)}
        </div>
      </Container>
    </Section>
  );
}
window.Pricing = Pricing;
