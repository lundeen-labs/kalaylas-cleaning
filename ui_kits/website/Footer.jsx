const nsFoot = window.KalaylaSCleaningDesignSystem_b83ec6;

function CTABand({ lang }) {
  const { Button, Icon } = nsFoot;
  return (
    <Section tight>
      <Container>
        <div className="ctaband">
          <div className="ctaband__glow"></div>
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>
              {L(lang, 'Ready for a spotless home?', '¿Listo para una casa impecable?')}
            </h2>
            <p style={{ color: 'var(--text-on-deep)', fontSize: 18, margin: '14px auto 0', maxWidth: 540 }}>
              {L(lang, 'Get a free, no-obligation quote today — most replies within the hour.', 'Pide tu cotización gratis hoy — casi siempre respondemos en menos de una hora.')}
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
              <Button size="lg" leadingIcon={<Icon name="sparkles" size={20} />}>{L(lang, 'Get a free quote', 'Cotización gratis')}</Button>
              <Button size="lg" variant="secondary" leadingIcon={<Icon name="phone" size={18} />} href="tel:+13605550142">(360) 555-0142</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Footer({ lang }) {
  const { Logo, Icon, IconButton } = nsFoot;
  const col = (title, links) => (
    <div>
      <h4>{title}</h4>
      {links.map((l) => <a key={l} href="#top">{l}</a>)}
    </div>
  );
  return (
    <footer className="ftr">
      <Container>
        <div className="ftr__top">
          <div>
            <Logo tone="reversed" size={34} />
            <p style={{ color: 'var(--text-on-deep)', fontSize: 14.5, lineHeight: 1.6, marginTop: 16, maxWidth: 280 }}>
              {L(lang, 'Family-owned home & office cleaning, proudly serving Mount Vernon and the Skagit Valley in English & Español.', 'Limpieza familiar de casas y oficinas, con orgullo en Mount Vernon y el Valle de Skagit, en inglés y español.')}
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              <IconButton variant="outline" label="Instagram" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}><Icon name="instagram" size={18} /></IconButton>
              <IconButton variant="outline" label="Facebook" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}><Icon name="facebook" size={18} /></IconButton>
            </div>
          </div>
          {col(L(lang, 'Services', 'Servicios'), [L(lang, 'Home cleaning', 'Limpieza de casa'), L(lang, 'Office cleaning', 'Limpieza de oficina'), L(lang, 'Deep cleans', 'Limpieza profunda'), L(lang, 'Move-in / move-out', 'Mudanzas')])}
          {col(L(lang, 'Company', 'Empresa'), [L(lang, 'About us', 'Nosotros'), L(lang, 'Reviews', 'Reseñas'), L(lang, 'Service area', 'Zona'), L(lang, 'Careers', 'Empleo')])}
          <div>
            <h4>{L(lang, 'Contact', 'Contacto')}</h4>
            <a href="tel:+13605550142"><Icon name="phone" size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />(360) 555-0142</a>
            <a href="mailto:hola@kalaylas.com">hola@kalaylas.com</a>
            <a href="#top">Mount Vernon, WA</a>
            <a href="#top">{L(lang, 'Mon–Sat · 8am–6pm', 'Lun–Sáb · 8am–6pm')}</a>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>© 2026 Kalayla's Cleaning Service · {L(lang, 'Licensed & insured', 'Con licencia y seguro')}</span>
          <span>{L(lang, 'Made with care in the Skagit Valley', 'Hecho con cariño en el Valle de Skagit')}</span>
        </div>
      </Container>
    </footer>
  );
}
window.CTABand = CTABand;
window.Footer = Footer;
