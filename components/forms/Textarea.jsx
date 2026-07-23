import React from 'react';

/**
 * Textarea — multiline labelled field. Forwards native <textarea> props.
 */
export function Textarea({
  label,
  hint,
  error,
  id,
  required,
  rows = 4,
  className = '',
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
      <textarea
        id={fieldId}
        rows={rows}
        className="ksl-input ksl-textarea"
        aria-invalid={error ? true : undefined}
        required={required}
        {...rest}
      />
      {message && <span className="ksl-field__hint">{message}</span>}
    </div>
  );
}
