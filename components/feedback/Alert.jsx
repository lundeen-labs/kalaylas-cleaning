import React from 'react';
import { Icon } from '../brand/Icon.jsx';

const TONE_ICON = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'octagon-alert',
};

/**
 * Alert — an inline callout for status messages and reassurances.
 * Icon is chosen from the tone but can be overridden with `icon`.
 */
export function Alert({ tone = 'info', title, icon, className = '', children, ...rest }) {
  const name = icon || TONE_ICON[tone] || 'info';
  return (
    <div className={['ksl-alert', `ksl-alert--${tone}`, className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="ksl-alert__icon"><Icon name={name} size={20} /></span>
      <div className="ksl-alert__content">
        {title && <div className="ksl-alert__title">{title}</div>}
        {children && <div className="ksl-alert__body">{children}</div>}
      </div>
    </div>
  );
}
