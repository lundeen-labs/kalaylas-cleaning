import React from 'react';

/**
 * Button — the primary action element. Renders a <button>, or an <a> when `href`
 * is given. Pass icons as nodes via `leadingIcon` / `trailingIcon`
 * (e.g. <Icon name="sparkles" size={18} />).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  loading = false,
  disabled = false,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'ksl-btn',
    `ksl-btn--${variant}`,
    `ksl-btn--${size}`,
    fullWidth ? 'ksl-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {loading && <span className="ksl-btn__spin" aria-hidden="true" />}
      {!loading && leadingIcon}
      {children && <span>{children}</span>}
      {!loading && trailingIcon}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={cls} href={href} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled || loading} {...rest}>
      {inner}
    </button>
  );
}
