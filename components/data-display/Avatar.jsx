import React from 'react';

/**
 * Avatar — circular profile image, or initials derived from `name` when no
 * `src` is provided.
 */
export function Avatar({ src, name = '', size = 'md', ring = false, className = '', ...rest }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join('');
  const cls = ['ksl-avatar', `ksl-avatar--${size}`, ring ? 'ksl-avatar--ring' : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} role="img" aria-label={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : initials || null}
    </span>
  );
}
