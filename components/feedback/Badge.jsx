import React from 'react';

/**
 * Badge — a small status/category pill. Soft tones by default; pass `solid`
 * for a filled treatment. `dot` adds a leading status dot.
 */
export function Badge({ tone = 'brand', solid = false, dot = false, leadingIcon, className = '', children, ...rest }) {
  const cls = ['ksl-badge', `ksl-badge--${tone}`, solid ? 'ksl-badge--solid' : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="ksl-badge__dot" />}
      {leadingIcon}
      {children}
    </span>
  );
}
