import React from 'react';

/**
 * Stat — a single headline metric with a small mono label. Used in trust strips
 * and proof points (e.g. "500+ homes cleaned").
 */
export function Stat({ value, label, className = '', ...rest }) {
  return (
    <div className={['ksl-stat', className].filter(Boolean).join(' ')} {...rest}>
      <span className="ksl-stat__value">{value}</span>
      {label && <span className="ksl-stat__label">{label}</span>}
    </div>
  );
}
