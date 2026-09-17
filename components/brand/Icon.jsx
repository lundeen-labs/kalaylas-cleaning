import React from 'react';
import { icons } from 'lucide';

/* Convert a kebab / snake icon name to Lucide's PascalCase key.
   "building-2" -> "Building2", "shield-check" -> "ShieldCheck" */
const toPascal = (name) =>
  String(name)
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');

/* SVG attrs that React wants camelCased. */
const ATTR_MAP = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
};
const conv = (attrs = {}) => {
  const out = {};
  for (const k in attrs) out[ATTR_MAP[k] || k] = attrs[k];
  return out;
};

/**
 * Icon — renders a Lucide line icon by name.
 *
 * Icon geometry is imported from the `lucide` package rather than read off a
 * `window.lucide` global. That global only exists when the CDN script has run in
 * a browser, so during a static build `window` is undefined, every lookup misses,
 * and each icon silently becomes the empty fallback span below — a build that
 * succeeds and ships a site with no icons. Measured on this site: 67 inline
 * <svg> elements with the global present, 4 without it, and no error either way.
 *
 * The import is build-time only: this component never hydrates, so the lucide
 * package contributes nothing to what a visitor downloads.
 *
 * Falls back to an empty, space-reserving box for an unknown name, so layout
 * never jumps.
 */
export function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  className,
  style,
  title,
  ...rest
}) {
  const node = icons[toPascal(name)] || icons[name] || null;

  if (!node) {
    return React.createElement('span', {
      className,
      'aria-hidden': true,
      style: { display: 'inline-block', width: size, height: size, flex: 'none', ...style },
      ...rest,
    });
  }

  const children = node.map((child, i) => {
    const [tag, attrs] = child;
    return React.createElement(tag, { key: i, ...conv(attrs) });
  });

  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className,
      style: { flex: 'none', ...style },
      role: title ? 'img' : undefined,
      'aria-label': title || undefined,
      'aria-hidden': title ? undefined : true,
      ...rest,
    },
    title ? [React.createElement('title', { key: 't' }, title), ...children] : children
  );
}
