const nsRev = window.KalaylaSCleaningDesignSystem_b83ec6;

function Reviews({ lang }) {
  const { Card, Avatar, Rating, Icon } = nsRev;
  const reviews = [
    { q: L(lang, 'Our home has never felt so calm. The same team comes every visit and treats it like their own.', 'Nuestra casa nunca se sintió tan tranquila. El mismo equipo viene cada visita y la cuida como suya.'), name: 'María G.', loc: 'Mount Vernon' },
    { q: L(lang, 'Booking took two minutes and they replied in Spanish, which my parents loved.', 'Reservar tomó dos minutos y respondieron en español, lo que encantó a mis papás.'), name: 'Daniel R.', loc: 'Burlington' },
    { q: L(lang, 'Our clinic is spotless every morning. Reliable, insured, and genuinely kind people.', 'Nuestra clínica está impecable cada mañana. Confiables, asegurados y muy amables.'), name: 'S. Patel', loc: 'Sedro-Woolley' },
  ];
  const towns = ['Mount Vernon', 'Burlington', 'Sedro-Woolley', 'Anacortes', 'La Conner', 'Conway', 'Bow', 'Clear Lake', 'Bayview'];
  const faqs = [
    [L(lang, 'Do I need to be home during the cleaning?', '¿Tengo que estar en casa durante la limpieza?'), L(lang, 'Not at all. Most clients give us a key or entry code. Your team is background-checked and insured, and we lock up when we leave.', 'Para nada. La mayoría nos da una llave o código. Tu equipo está verificado y asegurado, y cerramos al salir.')],
    [L(lang, 'Do you bring your own supplies?', '¿Traen sus propios productos?'), L(lang, 'Yes — we bring everything, including eco-friendly products on request. Just let us know if you prefer we use yours.', 'Sí — traemos todo, incluyendo productos ecológicos a pedido. Avísanos si prefieres que usemos los tuyos.')],
    [L(lang, 'Are you licensed and insured?', '¿Tienen licencia y seguro?'), L(lang, 'Always. Kalayla\u2019s is fully licensed, bonded, and insured, and every cleaner is background-checked.', 'Siempre. Kalayla\u2019s tiene licencia, fianza y seguro completos, y cada persona está verificada.')],
    [L(lang, 'Can I get service in Spanish?', '¿Puedo recibir atención en español?'), L(lang, 'Of course. Our owners and team are fully bilingual — quotes, scheduling, and support in English or Español.', 'Claro. Nuestros dueños y equipo son totalmente bilingües — cotizaciones, horarios y soporte en inglés o español.')],
  ];
  const [open, setOpen] = React.useState(0);

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
            {faqs.map(([q, a], i) => (
              <div className={`faq__item ${open === i ? 'faq__item--open' : ''}`} key={q}>
                <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {q}<Icon name="plus" size={22} />
                </button>
                <div className="faq__a"><p>{a}</p></div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
window.Reviews = Reviews;
