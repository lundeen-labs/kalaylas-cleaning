const nsHero = window.KaleylaSCleaningDesignSystem_b83ec6;

function Hero({ lang }) {
  const { Button, Icon, Avatar, Rating } = nsHero;
  return (
    <Section className="hero" id="top">
      <Container>
        <div className="hero__grid">
          <div>
            <span className="eyebrow">{L(lang, 'Serving Mount Vernon & Skagit Valley', 'Mount Vernon y el Valle de Skagit')}</span>
            <h1 className="hero__title">{L(lang, 'A spotless home, without lifting a finger.', 'Una casa impecable, sin mover un dedo.')}</h1>
            <p className="hero__sub">{L(lang,
              'Trusted, insured cleaners for homes and offices — the same friendly, bilingual team, every visit.',
              'Limpieza de confianza y con seguro para casas y oficinas — el mismo equipo bilingüe y amable, en cada visita.')}
            </p>
            <div className="hero__cta">
              <Button size="lg" leadingIcon={<Icon name="sparkles" size={20} />}>{L(lang, 'Get a free quote', 'Pide tu cotización')}</Button>
              <Button size="lg" variant="secondary" trailingIcon={<Icon name="arrow-right" size={18} />}>{L(lang, "See what's included", 'Qué incluye')}</Button>
            </div>
            <div className="hero__trust">
              <span className="trustitem"><Icon name="shield-check" size={18} /> {L(lang, 'Licensed & insured', 'Con licencia y seguro')}</span>
              <span className="trustitem"><Icon name="messages-square" size={18} /> {L(lang, 'English & Español', 'Inglés y Español')}</span>
              <span className="trustitem"><Icon name="badge-check" size={18} /> {L(lang, 'Satisfaction guaranteed', 'Satisfacción garantizada')}</span>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__glow"></div>
            <Photo ratio="ratio" caption={L(lang, 'Bright, tidy home', 'Hogar limpio')} style={{ position: 'relative', zIndex: 1 }} />
            <div className="floatcard floatcard--tl">
              <Rating value={5} size={15} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 5 }}>
                {L(lang, '214 five-star reviews', '214 reseñas de 5★')}
              </div>
            </div>
            <div className="floatcard floatcard--br">
              <Avatar name="Kaleyla Ramirez" size="md" ring />
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-heading)' }}>{L(lang, 'Your team is booked', 'Equipo reservado')}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{L(lang, 'Tue 9:00 AM · Kaleyla + Ana', 'Mar 9:00 · Kaleyla + Ana')}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
window.Hero = Hero;
