import React from 'react';

/**
 * Chip — a selectable pill, used for filters and multi-select choices
 * (service types, frequencies). Controlled via `selected` + `onClick`.
 */
export function Chip({ selected = false, leadingIcon, className = '', children, ...rest }) {
  return (
    <button
      type="button"
      className={['ksl-chip', selected ? 'ksl-chip--selected' : '', className].filter(Boolean).join(' ')}
      aria-pressed={selected}
      {...rest}
    >
      {leadingIcon}
      {children}
    </button>
  );
}
