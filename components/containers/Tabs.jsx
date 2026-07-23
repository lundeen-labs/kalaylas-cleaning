import React from 'react';

/**
 * Tabs — a pill-style segmented control. Controlled via `value` + `onChange`.
 * `tabs` is an array of strings or { value, label } objects.
 */
export function Tabs({ tabs = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={['ksl-tabs', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {tabs.map((t) => {
        const v = typeof t === 'string' ? t : t.value;
        const label = typeof t === 'string' ? t : t.label;
        const active = value === v;
        return (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={active}
            className={['ksl-tab', active ? 'ksl-tab--active' : ''].filter(Boolean).join(' ')}
            onClick={() => onChange && onChange(v)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
