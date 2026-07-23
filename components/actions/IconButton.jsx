import React from 'react';

/**
 * IconButton — a square, icon-only action (close, menu, call, etc.).
 * Always pass an accessible `label`; the icon node goes in `children`.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'ksl-iconbtn',
    `ksl-iconbtn--${variant}`,
    `ksl-iconbtn--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} type="button" aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
