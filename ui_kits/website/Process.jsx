const nsProc = window.KaleylaSCleaningDesignSystem_b83ec6;

function Process({ lang }) {
  const { Icon } = nsProc;
  const steps = [
    ['clipboard-list', L(lang, 'Get a free quote', 'Pide tu cotización'), L(lang, 'Tell us about your space in two minutes. We reply with a fair, flat price — usually within the hour.', 'Cuéntanos sobre tu espacio en dos minutos. Respondemos con un precio justo — casi siempre en menos de una hora.')],
    ['calendar-check', L(lang, 'Pick a time', 'Elige un horario'), L(lang, 'Choose a day that works for you and meet your dedicated, background-checked team.', 'Elige el día que te convenga y conoce a tu equipo dedicado y verificado.')],
    ['sparkles', L(lang, 'Relax', 'Relájate'), L(lang, 'Come home to clean. The same friendly team returns every visit — satisfaction guaranteed.', 'Llega a una casa limpia. El mismo equipo regresa cada visita — satisfacción garantizada.')],
  ];
  const promises = [
    L(lang, 'Licensed & insured', 'Con licencia y seguro'),
    L(lang, 'Background-checked team', 'Equipo verificado'),
    L(lang, '24-hour re-clean guarantee', 'Re-limpieza en 24 horas'),
    L(lang, 'Eco-friendly products on request', 'Productos ecológicos a pedido'),
  ];
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

      <Section tight>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="guarantee-grid">
            <div>
              <span className="eyebrow">{L(lang, 'Our promise', 'Nuestra promesa')}</span>
              <h2 className="sh__title" style={{ marginTop: 14 }}>{L(lang, "Love it, or we'll make it right.", 'Te encanta, o lo corregimos.')}</h2>
              <p className="sh__sub">{L(lang, "If something isn't perfect, tell us within 24 hours and we'll re-clean it free. That's the Kaleyla's guarantee.", 'Si algo no quedó perfecto, dinos en 24 horas y lo limpiamos de nuevo gratis. Esa es la garantía de Kaleyla\u2019s.')}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {promises.map((p) => (
                <div className="incl__item" key={p} style={{ background: 'var(--surface-card)' }}>
                  <Icon name="shield-check" size={20} /> {p}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
window.Process = Process;
