import React from 'react';

/**
 * Card — the surface container. Padded white card with a soft teal-tinted
 * shadow and hairline border. `interactive` adds a hover lift.
 */
export function Card({ as = 'div', padded = true, flat = false, interactive = false, className = '', children, ...rest }) {
  const Comp = as;
  const cls = [
    'ksl-card',
    padded ? 'ksl-card--pad' : '',
    flat ? 'ksl-card--flat' : '',
    interactive ? 'ksl-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Comp className={cls} {...rest}>
      {children}
    </Comp>
  );
}
