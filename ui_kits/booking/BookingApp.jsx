const NS = window.KaleylaSCleaningDesignSystem_b83ec6;
const { useState } = React;
const L = (lang, en, es) => (lang === 'es' ? es : en);

function Counter({ icon, label, value, onChange, min = 0, max = 8 }) {
  const { Icon } = NS;
  return (
    <div className="counter">
      <span className="counter__label"><Icon name={icon} size={18} /> {label}</span>
      <span className="counter__ctrl">
        <button className="counter__btn" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label="Decrease"><Icon name="minus" size={16} /></button>
        <span className="counter__val">{value}</span>
        <button className="counter__btn" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label="Increase"><Icon name="plus" size={16} /></button>
      </span>
    </div>
  );
}

function OptionCard({ icon, title, desc, on, onClick }) {
  const { Icon } = NS;
  return (
    <button className={`optcard ${on ? 'optcard--on' : ''}`} onClick={onClick} aria-pressed={on}>
      <span className="optcard__tile"><Icon name={icon} size={24} /></span>
      <span className="optcard__t">{title}</span>
      <span className="optcard__d">{desc}</span>
    </button>
  );
}

function BookingApp() {
  const { Logo, Button, Chip, Input, Textarea, Select, Switch, Icon, Alert, Badge } = NS;
  const [lang, setLang] = useState('en');
  const [step, setStep] = useState(0);
  const [s, setS] = useState({
    service: 'home', beds: 2, baths: 1, sqft: '2500', freq: 'biweekly',
    addons: [], date: '', time: '', name: '', email: '', phone: '', address: '', notes: '',
    eco: true, spanish: false,
  });
  const upd = (k, v) => setS((p) => ({ ...p, [k]: v }));
  const toggleAddon = (a) => setS((p) => ({ ...p, addons: p.addons.includes(a) ? p.addons.filter((x) => x !== a) : [...p.addons, a] }));

  const isOffice = s.service === 'office';
  const base = s.service === 'home' ? 99 : isOffice ? 149 : 189;
  const sizeAdd = isOffice ? ({ '1500': 0, '2500': 40, '5000': 110, '8000': 190 }[s.sqft] || 0) : s.beds * 12 + s.baths * 10;
  const freqMult = { once: 1.3, monthly: 1.12, biweekly: 1.0, weekly: 0.9 }[s.freq] || 1;
  const est = Math.round((base + sizeAdd + s.addons.length * 18) * freqMult);

  const freqLabel = { once: L(lang, 'One-time', 'Una vez'), monthly: L(lang, 'Monthly', 'Mensual'), biweekly: L(lang, 'Every 2 weeks', 'Cada 2 semanas'), weekly: L(lang, 'Weekly', 'Semanal') }[s.freq];
  const serviceLabel = { home: L(lang, 'Home cleaning', 'Casa'), office: L(lang, 'Office cleaning', 'Oficina'), move: L(lang, 'Move-out clean', 'Mudanza') }[s.service];

  const addonsList = isOffice
    ? [L(lang, 'Carpet shampoo', 'Lavado de alfombra'), L(lang, 'Interior windows', 'Ventanas'), L(lang, 'Supply restock', 'Reabasto')]
    : [L(lang, 'Inside fridge', 'Refrigerador'), L(lang, 'Inside oven', 'Horno'), L(lang, 'Interior windows', 'Ventanas'), L(lang, 'Laundry', 'Lavandería')];
  const times = ['8:00', '10:00', '12:00', '2:00', '4:00'];

  const stepNames = [L(lang, 'Service', 'Servicio'), L(lang, 'Details', 'Detalles'), L(lang, 'Schedule', 'Horario'), L(lang, 'Contact', 'Contacto')];
  const canNext = step === 0 ? !!s.service : step === 2 ? !!s.date && !!s.time : step === 3 ? s.name && s.email : true;
  const done = step >= 4;

  return (
    <div className="bk">
      <div className="bk__top">
        <div className="bk__topbar">
          <Logo size={32} />
          <div className="langtoggle" role="group" aria-label="Language">
            <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            <button aria-pressed={lang === 'es'} onClick={() => setLang('es')}>ES</button>
          </div>
        </div>
      </div>

      <div className="bk__wrap">
        {!done && (
          <div className="stepper">
            {stepNames.map((name, i) => (
              <React.Fragment key={name}>
                <div className={`stepper__node ${i === step ? 'stepper__node--active' : ''} ${i < step ? 'stepper__node--done' : ''}`}>
                  <span className="stepper__dot">{i < step ? <Icon name="check" size={15} strokeWidth={3} /> : i + 1}</span>
                  <span className="stepper__label">{name}</span>
                </div>
                {i < stepNames.length - 1 && <span className={`stepper__line ${i < step ? 'stepper__line--done' : ''}`} />}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="bk__grid">
          <div className="panel">
            {step === 0 && (
              <>
                <h1 className="panel__title">{L(lang, 'What can we clean for you?', '¿Qué podemos limpiar?')}</h1>
                <p className="panel__sub">{L(lang, 'Pick a service to get a free, instant estimate.', 'Elige un servicio para una cotización gratis al instante.')}</p>
                <div className="optgrid">
                  <OptionCard icon="home" title={L(lang, 'Home', 'Casa')} desc={L(lang, 'Recurring or one-time house cleaning.', 'Limpieza recurrente o una vez.')} on={s.service === 'home'} onClick={() => upd('service', 'home')} />
                  <OptionCard icon="building-2" title={L(lang, 'Office', 'Oficina')} desc={L(lang, 'After-hours workplace cleaning.', 'Limpieza fuera de horario.')} on={s.service === 'office'} onClick={() => upd('service', 'office')} />
                  <OptionCard icon="truck" title={L(lang, 'Move-out', 'Mudanza')} desc={L(lang, 'Deep clean for moving day.', 'Limpieza profunda de mudanza.')} on={s.service === 'move'} onClick={() => upd('service', 'move')} />
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h1 className="panel__title">{L(lang, 'Tell us about the space', 'Cuéntanos del espacio')}</h1>
                <p className="panel__sub">{L(lang, 'This helps us match the right team and time.', 'Esto nos ayuda a asignar el equipo y el tiempo correctos.')}</p>
                {isOffice ? (
                  <div className="field-row">
                    <Select label={L(lang, 'Office size', 'Tamaño')} value={s.sqft} onChange={(e) => upd('sqft', e.target.value)}>
                      <option value="1500">{L(lang, 'Up to 1,500 sq ft', 'Hasta 140 m²')}</option>
                      <option value="2500">{L(lang, 'Up to 2,500 sq ft', 'Hasta 230 m²')}</option>
                      <option value="5000">{L(lang, 'Up to 5,000 sq ft', 'Hasta 460 m²')}</option>
                      <option value="8000">{L(lang, 'Up to 8,000 sq ft', 'Hasta 740 m²')}</option>
                    </Select>
                    <Select label={L(lang, 'How often?', '¿Cada cuándo?')} value={s.freq} onChange={(e) => upd('freq', e.target.value)}>
                      <option value="once">{L(lang, 'One-time', 'Una vez')}</option>
                      <option value="weekly">{L(lang, 'Weekly', 'Semanal')}</option>
                      <option value="biweekly">{L(lang, 'Every 2 weeks', 'Cada 2 semanas')}</option>
                      <option value="monthly">{L(lang, 'Monthly', 'Mensual')}</option>
                    </Select>
                  </div>
                ) : (
                  <>
                    <div className="counter-row">
                      <Counter icon="bed" label={L(lang, 'Bedrooms', 'Recámaras')} value={s.beds} onChange={(v) => upd('beds', v)} min={0} max={6} />
                      <Counter icon="shower-head" label={L(lang, 'Bathrooms', 'Baños')} value={s.baths} onChange={(v) => upd('baths', v)} min={1} max={5} />
                    </div>
                    <div className="field-row">
                      <Select label={L(lang, 'How often?', '¿Cada cuándo?')} value={s.freq} onChange={(e) => upd('freq', e.target.value)}>
                        <option value="once">{L(lang, 'One-time', 'Una vez')}</option>
                        <option value="weekly">{L(lang, 'Weekly', 'Semanal')}</option>
                        <option value="biweekly">{L(lang, 'Every 2 weeks', 'Cada 2 semanas')}</option>
                        <option value="monthly">{L(lang, 'Monthly', 'Mensual')}</option>
                      </Select>
                    </div>
                  </>
                )}
                <div style={{ marginTop: 24 }}>
                  <span className="ksl-field__label" style={{ display: 'block', marginBottom: 10 }}>{L(lang, 'Add-ons (optional)', 'Extras (opcional)')}</span>
                  <div className="addons" style={{ marginTop: 0 }}>
                    {addonsList.map((a) => (
                      <Chip key={a} selected={s.addons.includes(a)} onClick={() => toggleAddon(a)} leadingIcon={<Icon name={s.addons.includes(a) ? 'check' : 'plus'} size={15} />}>{a}</Chip>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="panel__title">{L(lang, 'Pick a day & time', 'Elige día y hora')}</h1>
                <p className="panel__sub">{L(lang, "We'll confirm your dedicated team by text.", 'Confirmaremos tu equipo por mensaje.')}</p>
                <div className="field-row" style={{ gridTemplateColumns: '1fr' }}>
                  <Input label={L(lang, 'Preferred date', 'Fecha preferida')} type="date" value={s.date} onChange={(e) => upd('date', e.target.value)} leadingIcon={<Icon name="calendar" size={18} />} />
                </div>
                <div style={{ marginTop: 18 }}>
                  <span className="ksl-field__label">{L(lang, 'Preferred start time', 'Hora de inicio')}</span>
                  <div className="timegrid">
                    {times.map((t) => (
                      <button key={t} className={`timeslot ${s.time === t ? 'timeslot--on' : ''}`} onClick={() => upd('time', t)}>{t}</button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="panel__title">{L(lang, 'Where should we go?', '¿A dónde vamos?')}</h1>
                <p className="panel__sub">{L(lang, 'Your details stay private. No payment due now.', 'Tus datos son privados. No se cobra ahora.')}</p>
                <div className="field-row">
                  <Input label={L(lang, 'Full name', 'Nombre completo')} required value={s.name} onChange={(e) => upd('name', e.target.value)} placeholder="Jane Garcia" />
                  <Input label={L(lang, 'Email', 'Correo')} type="email" required value={s.email} onChange={(e) => upd('email', e.target.value)} leadingIcon={<Icon name="mail" size={18} />} placeholder="jane@email.com" />
                  <Input label={L(lang, 'Phone', 'Teléfono')} value={s.phone} onChange={(e) => upd('phone', e.target.value)} leadingIcon={<Icon name="phone" size={18} />} placeholder="(360) 555-0142" />
                  <Input label={L(lang, 'Address', 'Dirección')} value={s.address} onChange={(e) => upd('address', e.target.value)} leadingIcon={<Icon name="map-pin" size={18} />} placeholder="Mount Vernon, WA" />
                </div>
                <div style={{ marginTop: 16 }}>
                  <Textarea label={L(lang, 'Anything we should know?', '¿Algo que debamos saber?')} rows={3} value={s.notes} onChange={(e) => upd('notes', e.target.value)} placeholder={L(lang, 'Pets, parking, where to find the key…', 'Mascotas, estacionamiento, dónde está la llave…')} />
                </div>
                <div style={{ display: 'flex', gap: 24, marginTop: 18, flexWrap: 'wrap' }}>
                  <Switch label={L(lang, 'Use eco-friendly products', 'Productos ecológicos')} checked={s.eco} onChange={(e) => upd('eco', e.target.checked)} />
                  <Switch label={L(lang, 'I prefer service in Spanish', 'Prefiero atención en español')} checked={s.spanish} onChange={(e) => upd('spanish', e.target.checked)} />
                </div>
              </>
            )}

            {done && (
              <div className="confirm">
                <div className="confirm__icon"><Icon name="check" size={36} strokeWidth={3} /></div>
                <h1 className="panel__title">{L(lang, "You're all set, ", '¡Listo, ')}{s.name ? s.name.split(' ')[0] : L(lang, 'friend', 'amig@')}!</h1>
                <p className="panel__sub" style={{ maxWidth: 420, margin: '8px auto 0' }}>{L(lang, "We've received your request and will text a confirmation shortly — usually within the hour.", 'Recibimos tu solicitud y te confirmaremos por mensaje — casi siempre en menos de una hora.')}</p>
                <div style={{ maxWidth: 440, margin: '24px auto 0' }}>
                  <Alert tone="success" title={`${serviceLabel} · ${freqLabel}`}>
                    {s.date ? `${s.date} · ${s.time}` : ''} — {L(lang, 'Estimated from', 'Desde')} ${est}{!isOffice && s.freq !== 'once' ? L(lang, ' / visit', ' / visita') : ''}
                  </Alert>
                </div>
              </div>
            )}

            {!done && (
              <div className="actions">
                <Button variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} style={{ visibility: step === 0 ? 'hidden' : 'visible' }} leadingIcon={<Icon name="arrow-left" size={18} />}>{L(lang, 'Back', 'Atrás')}</Button>
                <Button onClick={() => setStep(step + 1)} disabled={!canNext} trailingIcon={<Icon name={step === 3 ? 'sparkles' : 'arrow-right'} size={18} />}>
                  {step === 3 ? L(lang, 'Request my quote', 'Pedir cotización') : L(lang, 'Continue', 'Continuar')}
                </Button>
              </div>
            )}
            {done && (
              <div className="actions" style={{ justifyContent: 'center' }}>
                <Button variant="secondary" href="../website/index.html" leadingIcon={<Icon name="arrow-left" size={18} />}>{L(lang, 'Back to site', 'Volver al sitio')}</Button>
              </div>
            )}
          </div>

          <aside className="summary">
            <div className="summary__head">
              <div className="summary__estlabel">{L(lang, 'Estimated price', 'Precio estimado')}</div>
              <div className="summary__est">${est}<span style={{ fontSize: 15, fontFamily: 'var(--font-mono)', fontWeight: 500, color: 'var(--teal-300)' }}>{!isOffice && s.freq !== 'once' ? L(lang, ' / visit', ' / visita') : ''}</span></div>
            </div>
            <div className="summary__body">
              <div className="summary__row"><span>{L(lang, 'Service', 'Servicio')}</span><span>{serviceLabel}</span></div>
              {!isOffice && <div className="summary__row"><span>{L(lang, 'Size', 'Tamaño')}</span><span>{s.beds} {L(lang, 'bd', 'rec')} · {s.baths} {L(lang, 'ba', 'baño')}</span></div>}
              {isOffice && <div className="summary__row"><span>{L(lang, 'Size', 'Tamaño')}</span><span>{s.sqft} sq ft</span></div>}
              <div className="summary__row"><span>{L(lang, 'Frequency', 'Frecuencia')}</span><span>{freqLabel}</span></div>
              {s.addons.length > 0 && <div className="summary__row"><span>{L(lang, 'Add-ons', 'Extras')}</span><span>{s.addons.length}</span></div>}
              {s.date && <div className="summary__row"><span>{L(lang, 'When', 'Cuándo')}</span><span>{s.date}{s.time ? ` · ${s.time}` : ''}</span></div>}
            </div>
            <div className="summary__trust">
              <div><Icon name="shield-check" size={16} /> {L(lang, 'Licensed & insured', 'Con licencia y seguro')}</div>
              <div><Icon name="badge-check" size={16} /> {L(lang, 'Satisfaction guaranteed', 'Satisfacción garantizada')}</div>
              <div><Icon name="messages-square" size={16} /> {L(lang, 'Bilingual EN / ES', 'Bilingüe EN / ES')}</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BookingApp />);
