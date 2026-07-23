import React from 'react';
import { Icon } from '../brand/Icon.jsx';

/**
 * Checkbox — labelled checkbox built on a native input. Forwards native props
 * (checked, defaultChecked, onChange, disabled…).
 */
export function Checkbox({ label, id, className = '', ...rest }) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <label className={['ksl-check', className].filter(Boolean).join(' ')} htmlFor={fieldId}>
      <input type="checkbox" id={fieldId} {...rest} />
      <span className="ksl-check__box">
        <Icon name="check" size={14} strokeWidth={3.25} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
