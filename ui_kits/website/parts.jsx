/* Shared kit helpers + bilingual switch. Loaded first; attaches to window so the
   other section scripts (separate Babel scopes) can use them. */

const L = (lang, en, es) => (lang === 'es' ? es : en);

function Container({ narrow, className = '', children, style }) {
  return <div className={`container ${narrow ? 'container--narrow' : ''} ${className}`} style={style}>{children}</div>;
}

function Section({ id, variant, tight, className = '', children, style }) {
  const v = variant ? `section--${variant}` : '';
  return (
    <section id={id} className={`section ${tight ? 'section--tight' : ''} ${v} ${className}`} style={style}>
      {children}
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub, center, children }) {
  return (
    <div className={`sh ${center ? 'sh--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="sh__title">{title}</h2>}
      {sub && <p className="sh__sub">{sub}</p>}
      {children}
    </div>
  );
}

function Sparkle({ size = 44, c1 = '#2FC1B2', c2 = '#10B5A6' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21 8 Q24.5 23.5 40 27 Q24.5 30.5 21 46 Q17.5 30.5 2 27 Q17.5 23.5 21 8 Z" fill={c1} />
      <path d="M39 4 Q40.5 10.5 47 12 Q40.5 13.5 39 20 Q37.5 13.5 31 12 Q37.5 10.5 39 4 Z" fill={c2} />
    </svg>
  );
}

/* On-brand placeholder where real photography goes. */
function Photo({ ratio = 'wide', caption = 'Add photo', className = '', style }) {
  return (
    <div className={`photo photo--${ratio} ${className}`} style={style}>
      <div className="photo__mark">
        <Sparkle size={40} />
        <span className="photo__cap">{caption}</span>
      </div>
    </div>
  );
}

Object.assign(window, { L, Container, Section, SectionHeading, Photo, Sparkle });
