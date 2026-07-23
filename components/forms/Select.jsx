import React from 'react';
import { Icon } from '../brand/Icon.jsx';

/**
 * Select — labelled native select with a brand chevron. Pass <option>s as children.
 */
export function Select({
  label,
  hint,
  error,
  id,
  required,
  className = '',
  children,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const message = error || hint;

  return (
    <div className={['ksl-field', error ? 'ksl-field--error' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="ksl-field__label" htmlFor={fieldId}>
          {label}{required && <span className="ksl-field__req">*</span>}
        </label>
      )}
      <div className="ksl-selectwrap">
        <select id={fieldId} className="ksl-select" required={required} {...rest}>
          {children}
        </select>
        <span className="ksl-selectwrap__chevron"><Icon name="chevron-down" size={18} /></span>
      </div>
      {message && <span className="ksl-field__hint">{message}</span>}
    </div>
  );
}
