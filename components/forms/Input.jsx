import React from 'react';

/**
 * Input — labelled text field with optional leading icon, hint, and error.
 * Forwards all native <input> props (type, value, placeholder, onChange…).
 */
export function Input({
  label,
  hint,
  error,
  leadingIcon,
  size = 'md',
  id,
  required,
  className = '',
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const sizeCls = size === 'sm' ? 'ksl-input--sm' : size === 'lg' ? 'ksl-input--lg' : '';
  const message = error || hint;

  return (
    <div className={['ksl-field', error ? 'ksl-field--error' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="ksl-field__label" htmlFor={fieldId}>
          {label}{required && <span className="ksl-field__req">*</span>}
        </label>
      )}
      <div className={['ksl-inputwrap', leadingIcon ? 'ksl-inputwrap--icon' : ''].filter(Boolean).join(' ')}>
        {leadingIcon && <span className="ksl-inputwrap__icon">{leadingIcon}</span>}
        <input
          id={fieldId}
          className={['ksl-input', sizeCls].filter(Boolean).join(' ')}
          aria-invalid={error ? true : undefined}
          required={required}
          {...rest}
        />
      </div>
      {message && <span className="ksl-field__hint">{message}</span>}
    </div>
  );
}
