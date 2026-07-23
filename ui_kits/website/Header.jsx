const ns = window.KaleylaSCleaningDesignSystem_b83ec6;

function Header({ lang, setLang }) {
  const { Logo, Button, IconButton, Icon } = ns;
  const links = [
    [L(lang, 'Services', 'Servicios'), '#services'],
    [L(lang, 'Pricing', 'Precios'), '#pricing'],
    [L(lang, 'Reviews', 'Reseñas'), '#reviews'],
    [L(lang, 'Service area', 'Zona'), '#areas'],
  ];
  return (
    <header className="hdr">
      <Container>
        <div className="hdr__bar">
          <a href="#top" aria-label="Kaleyla's home" style={{ textDecoration: 'none' }}><Logo size={34} /></a>
          <nav className="hdr__nav">
            {links.map(([label, href]) => (
              <a key={href} className="hdr__link" href={href}>{label}</a>
            ))}
          </nav>
          <div className="hdr__right">
            <div className="langtoggle" role="group" aria-label="Language">
              <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
              <button aria-pressed={lang === 'es'} onClick={() => setLang('es')}>ES</button>
            </div>
            <a className="hdr__phone" href="tel:+13605550142"><Icon name="phone" size={15} /> (360) 555-0142</a>
            <Button leadingIcon={<Icon name="sparkles" size={18} />}>{L(lang, 'Get a free quote', 'Cotización gratis')}</Button>
            <IconButton className="hdr__menu" variant="outline" label="Menu"><Icon name="menu" size={20} /></IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
window.Header = Header;
