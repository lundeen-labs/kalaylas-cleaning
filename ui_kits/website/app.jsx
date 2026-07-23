function App() {
  const [lang, setLang] = React.useState('en');
  return (
    <div className="site">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <StatsStrip lang={lang} />
      <Services lang={lang} />
      <Process lang={lang} />
      <Pricing lang={lang} />
      <Reviews lang={lang} />
      <CTABand lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
