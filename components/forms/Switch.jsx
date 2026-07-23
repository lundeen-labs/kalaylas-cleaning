import React from 'react';

/**
 * Switch — on/off toggle. Forwards native checkbox props (checked, onChange…)
 * and exposes role="switch".
 */
export function Switch({ label, id, className = '', ...rest }) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <label className={['ksl-switch', className].filter(Boolean).join(' ')} htmlFor={fieldId}>
      <input type="checkbox" role="switch" id={fieldId} {...rest} />
      <span className="ksl-switch__track">
        <span className="ksl-switch__thumb" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
