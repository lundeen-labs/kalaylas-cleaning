/* @ds-bundle: {"format":3,"namespace":"KalaylaSCleaningDesignSystem_b83ec6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Card","sourcePath":"components/containers/Card.jsx"},{"name":"Tabs","sourcePath":"components/containers/Tabs.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Rating","sourcePath":"components/data-display/Rating.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"3ee5d4c4ffc4","components/actions/IconButton.jsx":"cd1ac5d7637a","components/brand/Icon.jsx":"265a62c00c41","components/brand/Logo.jsx":"55cd60b15c2c","components/containers/Card.jsx":"2e71462ac465","components/containers/Tabs.jsx":"4c7e2b96c267","components/data-display/Avatar.jsx":"d90b5b56062d","components/data-display/Rating.jsx":"2e032266dfef","components/data-display/Stat.jsx":"2e50c3dda73a","components/feedback/Alert.jsx":"8ee2f9cbd505","components/feedback/Badge.jsx":"19bbd8a044d5","components/forms/Checkbox.jsx":"eacbb765f6e9","components/forms/Chip.jsx":"6bc10337b822","components/forms/Input.jsx":"c118f773a18a","components/forms/Select.jsx":"fc8b9cff7f5f","components/forms/Switch.jsx":"4cf3db5e81d3","components/forms/Textarea.jsx":"a84f16c1781f","ui_kits/booking/BookingApp.jsx":"a3a09e619928","ui_kits/website/Footer.jsx":"b84688eb7b3d","ui_kits/website/Header.jsx":"834cb1531b02","ui_kits/website/Hero.jsx":"4c1d70765494","ui_kits/website/Pricing.jsx":"569a1c7d039e","ui_kits/website/Process.jsx":"3eb4188c9837","ui_kits/website/Reviews.jsx":"b32241ce6bc7","ui_kits/website/Services.jsx":"b1c9c3555a72","ui_kits/website/app.jsx":"0c04a0b6448a","ui_kits/website/parts.jsx":"ef80402e8ace"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KalaylaSCleaningDesignSystem_b83ec6 = window.KalaylaSCleaningDesignSystem_b83ec6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action element. Renders a <button>, or an <a> when `href`
 * is given. Pass icons as nodes via `leadingIcon` / `trailingIcon`
 * (e.g. <Icon name="sparkles" size={18} />).
 */
function Button({
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
  const cls = ['ksl-btn', `ksl-btn--${variant}`, `ksl-btn--${size}`, fullWidth ? 'ksl-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("span", {
    className: "ksl-btn__spin",
    "aria-hidden": "true"
  }), !loading && leadingIcon, children && /*#__PURE__*/React.createElement("span", null, children), !loading && trailingIcon);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled || loading
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, icon-only action (close, menu, call, etc.).
 * Always pass an accessible `label`; the icon node goes in `children`.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ksl-iconbtn', `ksl-iconbtn--${variant}`, `ksl-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
/* Convert a kebab / snake icon name to Lucide's PascalCase key.
   "building-2" -> "Building2", "shield-check" -> "ShieldCheck" */
const toPascal = name => String(name).split(/[-_\s]+/).filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');

/* SVG attrs that React wants camelCased. */
const ATTR_MAP = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule'
};
const conv = (attrs = {}) => {
  const out = {};
  for (const k in attrs) out[ATTR_MAP[k] || k] = attrs[k];
  return out;
};

/**
 * Icon — renders a Lucide line icon by name.
 * Reads icon data from the global `window.lucide` (load the Lucide CDN script on
 * the page). Falls back to an empty, space-reserving box if the name/library is
 * unavailable, so layout never jumps.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  className,
  style,
  title,
  ...rest
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons || null;
  const node = lib ? lib[toPascal(name)] || lib[name] : null;
  if (!node) {
    return React.createElement('span', {
      className,
      'aria-hidden': true,
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        flex: 'none',
        ...style
      },
      ...rest
    });
  }
  const children = node.map((child, i) => {
    const [tag, attrs] = child;
    return React.createElement(tag, {
      key: i,
      ...conv(attrs)
    });
  });
  return React.createElement('svg', {
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
    style: {
      flex: 'none',
      ...style
    },
    role: title ? 'img' : undefined,
    'aria-label': title || undefined,
    'aria-hidden': title ? undefined : true,
    ...rest
  }, title ? [React.createElement('title', {
    key: 't'
  }, title), ...children] : children);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARK_TONES = {
  default: {
    m1: '#10B5A6',
    m2: '#0A3B3A',
    word: 'var(--text-heading)',
    eye: 'var(--brand-strong)'
  },
  reversed: {
    m1: '#34C2B3',
    m2: '#CFF3EE',
    word: '#FFFFFF',
    eye: 'var(--teal-300)'
  },
  mono: {
    m1: 'currentColor',
    m2: 'currentColor',
    word: 'currentColor',
    eye: 'currentColor'
  }
};
function Sparkle({
  size,
  c
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 8 Q24.5 23.5 40 27 Q24.5 30.5 21 46 Q17.5 30.5 2 27 Q17.5 23.5 21 8 Z",
    fill: c.m1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39 4 Q40.5 10.5 47 12 Q40.5 13.5 39 20 Q37.5 13.5 31 12 Q37.5 10.5 39 4 Z",
    fill: c.m2,
    opacity: c.m2 === 'currentColor' ? 0.55 : 1
  }));
}

/**
 * Logo — the Kalayla's Cleaning Service brand lockup.
 * `variant="mark"` renders just the sparkle; `variant="full"` adds the wordmark
 * and tagline. Use `tone="reversed"` on deep-teal backgrounds.
 */
function Logo({
  variant = 'full',
  tone = 'default',
  size = 40,
  tagline = true,
  style,
  ...rest
}) {
  const c = MARK_TONES[tone] || MARK_TONES.default;
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(Sparkle, {
      size: size,
      c: c
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.32,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Sparkle, {
    size: size,
    c: c
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: size * 0.06,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size * 0.66,
      letterSpacing: '-0.02em',
      color: c.word
    }
  }, "Kalayla's"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: Math.max(8, size * 0.235),
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: c.eye
    }
  }, "Cleaning Service")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/containers/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the surface container. Padded white card with a soft teal-tinted
 * shadow and hairline border. `interactive` adds a hover lift.
 */
function Card({
  as = 'div',
  padded = true,
  flat = false,
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  const Comp = as;
  const cls = ['ksl-card', padded ? 'ksl-card--pad' : '', flat ? 'ksl-card--flat' : '', interactive ? 'ksl-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/Card.jsx", error: String((e && e.message) || e) }); }

// components/containers/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — a pill-style segmented control. Controlled via `value` + `onChange`.
 * `tabs` is an array of strings or { value, label } objects.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ksl-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(t => {
    const v = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const active = value === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: ['ksl-tab', active ? 'ksl-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(v)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular profile image, or initials derived from `name` when no
 * `src` is provided.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  className = '',
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(s => s[0].toUpperCase()).join('');
  const cls = ['ksl-avatar', `ksl-avatar--${size}`, ring ? 'ksl-avatar--ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    role: "img",
    "aria-label": name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials || null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rating — star rating using the brand's honey ★ glyph (the only Unicode glyph
 * the brand uses). Rounds to whole stars; pass `count` to show a review count.
 */
function Rating({
  value = 5,
  max = 5,
  count,
  size = 16,
  className = '',
  ...rest
}) {
  const filled = Math.round(value);
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      className: ['ksl-rating__star', i <= filled ? '' : 'ksl-rating__star--empty'].filter(Boolean).join(' '),
      style: {
        fontSize: size
      },
      "aria-hidden": "true"
    }, "\u2605"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ksl-rating', className].filter(Boolean).join(' '),
    role: "img",
    "aria-label": `${value} out of ${max} stars`
  }, rest), stars, count != null && /*#__PURE__*/React.createElement("span", {
    className: "ksl-rating__count"
  }, count));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Rating.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a single headline metric with a small mono label. Used in trust strips
 * and proof points (e.g. "500+ homes cleaned").
 */
function Stat({
  value,
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ksl-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ksl-stat__value"
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "ksl-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE_ICON = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'octagon-alert'
};

/**
 * Alert — an inline callout for status messages and reassurances.
 * Icon is chosen from the tone but can be overridden with `icon`.
 */
function Alert({
  tone = 'info',
  title,
  icon,
  className = '',
  children,
  ...rest
}) {
  const name = icon || TONE_ICON[tone] || 'info';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ksl-alert', `ksl-alert--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ksl-alert__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "ksl-alert__content"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "ksl-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "ksl-alert__body"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status/category pill. Soft tones by default; pass `solid`
 * for a filled treatment. `dot` adds a leading status dot.
 */
function Badge({
  tone = 'brand',
  solid = false,
  dot = false,
  leadingIcon,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ksl-badge', `ksl-badge--${tone}`, solid ? 'ksl-badge--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ksl-badge__dot"
  }), leadingIcon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — labelled checkbox built on a native input. Forwards native props
 * (checked, defaultChecked, onChange, disabled…).
 */
function Checkbox({
  label,
  id,
  className = '',
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: ['ksl-check', className].filter(Boolean).join(' '),
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fieldId
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ksl-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3.25
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a selectable pill, used for filters and multi-select choices
 * (service types, frequencies). Controlled via `selected` + `onClick`.
 */
function Chip({
  selected = false,
  leadingIcon,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['ksl-chip', selected ? 'ksl-chip--selected' : '', className].filter(Boolean).join(' '),
    "aria-pressed": selected
  }, rest), leadingIcon, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field with optional leading icon, hint, and error.
 * Forwards all native <input> props (type, value, placeholder, onChange…).
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: ['ksl-field', error ? 'ksl-field--error' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ksl-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: ['ksl-inputwrap', leadingIcon ? 'ksl-inputwrap--icon' : ''].filter(Boolean).join(' ')
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "ksl-inputwrap__icon"
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ['ksl-input', sizeCls].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined,
    required: required
  }, rest))), message && /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__hint"
  }, message));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — labelled native select with a brand chevron. Pass <option>s as children.
 */
function Select({
  label,
  hint,
  error,
  id,
  required,
  className = '',
  children,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const message = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ksl-field', error ? 'ksl-field--error' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ksl-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "ksl-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "ksl-select",
    required: required
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    className: "ksl-selectwrap__chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), message && /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__hint"
  }, message));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle. Forwards native checkbox props (checked, onChange…)
 * and exposes role="switch".
 */
function Switch({
  label,
  id,
  className = '',
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: ['ksl-switch', className].filter(Boolean).join(' '),
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: fieldId
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ksl-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ksl-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multiline labelled field. Forwards native <textarea> props.
 */
function Textarea({
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
  return /*#__PURE__*/React.createElement("div", {
    className: ['ksl-field', error ? 'ksl-field--error' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ksl-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    className: "ksl-input ksl-textarea",
    "aria-invalid": error ? true : undefined,
    required: required
  }, rest)), message && /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__hint"
  }, message));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/BookingApp.jsx
try { (() => {
const NS = window.KalaylaSCleaningDesignSystem_b83ec6;
const {
  useState
} = React;
const L = (lang, en, es) => lang === 'es' ? es : en;
function Counter({
  icon,
  label,
  value,
  onChange,
  min = 0,
  max = 8
}) {
  const {
    Icon
  } = NS;
  return /*#__PURE__*/React.createElement("div", {
    className: "counter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "counter__label"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), " ", label), /*#__PURE__*/React.createElement("span", {
    className: "counter__ctrl"
  }, /*#__PURE__*/React.createElement("button", {
    className: "counter__btn",
    onClick: () => onChange(Math.max(min, value - 1)),
    disabled: value <= min,
    "aria-label": "Decrease"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "counter__val"
  }, value), /*#__PURE__*/React.createElement("button", {
    className: "counter__btn",
    onClick: () => onChange(Math.min(max, value + 1)),
    disabled: value >= max,
    "aria-label": "Increase"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }))));
}
function OptionCard({
  icon,
  title,
  desc,
  on,
  onClick
}) {
  const {
    Icon
  } = NS;
  return /*#__PURE__*/React.createElement("button", {
    className: `optcard ${on ? 'optcard--on' : ''}`,
    onClick: onClick,
    "aria-pressed": on
  }, /*#__PURE__*/React.createElement("span", {
    className: "optcard__tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "optcard__t"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "optcard__d"
  }, desc));
}
function BookingApp() {
  const {
    Logo,
    Button,
    Chip,
    Input,
    Textarea,
    Select,
    Switch,
    Icon,
    Alert,
    Badge
  } = NS;
  const [lang, setLang] = useState('en');
  const [step, setStep] = useState(0);
  const [s, setS] = useState({
    service: 'home',
    beds: 2,
    baths: 1,
    sqft: '2500',
    freq: 'biweekly',
    addons: [],
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    eco: true,
    spanish: false
  });
  const upd = (k, v) => setS(p => ({
    ...p,
    [k]: v
  }));
  const toggleAddon = a => setS(p => ({
    ...p,
    addons: p.addons.includes(a) ? p.addons.filter(x => x !== a) : [...p.addons, a]
  }));
  const isOffice = s.service === 'office';
  const base = s.service === 'home' ? 99 : isOffice ? 149 : 189;
  const sizeAdd = isOffice ? {
    '1500': 0,
    '2500': 40,
    '5000': 110,
    '8000': 190
  }[s.sqft] || 0 : s.beds * 12 + s.baths * 10;
  const freqMult = {
    once: 1.3,
    monthly: 1.12,
    biweekly: 1.0,
    weekly: 0.9
  }[s.freq] || 1;
  const est = Math.round((base + sizeAdd + s.addons.length * 18) * freqMult);
  const freqLabel = {
    once: L(lang, 'One-time', 'Una vez'),
    monthly: L(lang, 'Monthly', 'Mensual'),
    biweekly: L(lang, 'Every 2 weeks', 'Cada 2 semanas'),
    weekly: L(lang, 'Weekly', 'Semanal')
  }[s.freq];
  const serviceLabel = {
    home: L(lang, 'Home cleaning', 'Casa'),
    office: L(lang, 'Office cleaning', 'Oficina'),
    move: L(lang, 'Move-out clean', 'Mudanza')
  }[s.service];
  const addonsList = isOffice ? [L(lang, 'Carpet shampoo', 'Lavado de alfombra'), L(lang, 'Interior windows', 'Ventanas'), L(lang, 'Supply restock', 'Reabasto')] : [L(lang, 'Inside fridge', 'Refrigerador'), L(lang, 'Inside oven', 'Horno'), L(lang, 'Interior windows', 'Ventanas'), L(lang, 'Laundry', 'Lavandería')];
  const times = ['8:00', '10:00', '12:00', '2:00', '4:00'];
  const stepNames = [L(lang, 'Service', 'Servicio'), L(lang, 'Details', 'Detalles'), L(lang, 'Schedule', 'Horario'), L(lang, 'Contact', 'Contacto')];
  const canNext = step === 0 ? !!s.service : step === 2 ? !!s.date && !!s.time : step === 3 ? s.name && s.email : true;
  const done = step >= 4;
  return /*#__PURE__*/React.createElement("div", {
    className: "bk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk__topbar"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "langtoggle",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    "aria-pressed": lang === 'en',
    onClick: () => setLang('en')
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    "aria-pressed": lang === 'es',
    onClick: () => setLang('es')
  }, "ES")))), /*#__PURE__*/React.createElement("div", {
    className: "bk__wrap"
  }, !done && /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, stepNames.map((name, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: name
  }, /*#__PURE__*/React.createElement("div", {
    className: `stepper__node ${i === step ? 'stepper__node--active' : ''} ${i < step ? 'stepper__node--done' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "stepper__dot"
  }, i < step ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    className: "stepper__label"
  }, name)), i < stepNames.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: `stepper__line ${i < step ? 'stepper__line--done' : ''}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bk__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "panel__title"
  }, L(lang, 'What can we clean for you?', '¿Qué podemos limpiar?')), /*#__PURE__*/React.createElement("p", {
    className: "panel__sub"
  }, L(lang, 'Pick a service to get a free, instant estimate.', 'Elige un servicio para una cotización gratis al instante.')), /*#__PURE__*/React.createElement("div", {
    className: "optgrid"
  }, /*#__PURE__*/React.createElement(OptionCard, {
    icon: "home",
    title: L(lang, 'Home', 'Casa'),
    desc: L(lang, 'Recurring or one-time house cleaning.', 'Limpieza recurrente o una vez.'),
    on: s.service === 'home',
    onClick: () => upd('service', 'home')
  }), /*#__PURE__*/React.createElement(OptionCard, {
    icon: "building-2",
    title: L(lang, 'Office', 'Oficina'),
    desc: L(lang, 'After-hours workplace cleaning.', 'Limpieza fuera de horario.'),
    on: s.service === 'office',
    onClick: () => upd('service', 'office')
  }), /*#__PURE__*/React.createElement(OptionCard, {
    icon: "truck",
    title: L(lang, 'Move-out', 'Mudanza'),
    desc: L(lang, 'Deep clean for moving day.', 'Limpieza profunda de mudanza.'),
    on: s.service === 'move',
    onClick: () => upd('service', 'move')
  }))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "panel__title"
  }, L(lang, 'Tell us about the space', 'Cuéntanos del espacio')), /*#__PURE__*/React.createElement("p", {
    className: "panel__sub"
  }, L(lang, 'This helps us match the right team and time.', 'Esto nos ayuda a asignar el equipo y el tiempo correctos.')), isOffice ? /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement(Select, {
    label: L(lang, 'Office size', 'Tamaño'),
    value: s.sqft,
    onChange: e => upd('sqft', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "1500"
  }, L(lang, 'Up to 1,500 sq ft', 'Hasta 140 m²')), /*#__PURE__*/React.createElement("option", {
    value: "2500"
  }, L(lang, 'Up to 2,500 sq ft', 'Hasta 230 m²')), /*#__PURE__*/React.createElement("option", {
    value: "5000"
  }, L(lang, 'Up to 5,000 sq ft', 'Hasta 460 m²')), /*#__PURE__*/React.createElement("option", {
    value: "8000"
  }, L(lang, 'Up to 8,000 sq ft', 'Hasta 740 m²'))), /*#__PURE__*/React.createElement(Select, {
    label: L(lang, 'How often?', '¿Cada cuándo?'),
    value: s.freq,
    onChange: e => upd('freq', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "once"
  }, L(lang, 'One-time', 'Una vez')), /*#__PURE__*/React.createElement("option", {
    value: "weekly"
  }, L(lang, 'Weekly', 'Semanal')), /*#__PURE__*/React.createElement("option", {
    value: "biweekly"
  }, L(lang, 'Every 2 weeks', 'Cada 2 semanas')), /*#__PURE__*/React.createElement("option", {
    value: "monthly"
  }, L(lang, 'Monthly', 'Mensual')))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "counter-row"
  }, /*#__PURE__*/React.createElement(Counter, {
    icon: "bed",
    label: L(lang, 'Bedrooms', 'Recámaras'),
    value: s.beds,
    onChange: v => upd('beds', v),
    min: 0,
    max: 6
  }), /*#__PURE__*/React.createElement(Counter, {
    icon: "shower-head",
    label: L(lang, 'Bathrooms', 'Baños'),
    value: s.baths,
    onChange: v => upd('baths', v),
    min: 1,
    max: 5
  })), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement(Select, {
    label: L(lang, 'How often?', '¿Cada cuándo?'),
    value: s.freq,
    onChange: e => upd('freq', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "once"
  }, L(lang, 'One-time', 'Una vez')), /*#__PURE__*/React.createElement("option", {
    value: "weekly"
  }, L(lang, 'Weekly', 'Semanal')), /*#__PURE__*/React.createElement("option", {
    value: "biweekly"
  }, L(lang, 'Every 2 weeks', 'Cada 2 semanas')), /*#__PURE__*/React.createElement("option", {
    value: "monthly"
  }, L(lang, 'Monthly', 'Mensual'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__label",
    style: {
      display: 'block',
      marginBottom: 10
    }
  }, L(lang, 'Add-ons (optional)', 'Extras (opcional)')), /*#__PURE__*/React.createElement("div", {
    className: "addons",
    style: {
      marginTop: 0
    }
  }, addonsList.map(a => /*#__PURE__*/React.createElement(Chip, {
    key: a,
    selected: s.addons.includes(a),
    onClick: () => toggleAddon(a),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: s.addons.includes(a) ? 'check' : 'plus',
      size: 15
    })
  }, a))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "panel__title"
  }, L(lang, 'Pick a day & time', 'Elige día y hora')), /*#__PURE__*/React.createElement("p", {
    className: "panel__sub"
  }, L(lang, "We'll confirm your dedicated team by text.", 'Confirmaremos tu equipo por mensaje.')), /*#__PURE__*/React.createElement("div", {
    className: "field-row",
    style: {
      gridTemplateColumns: '1fr'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: L(lang, 'Preferred date', 'Fecha preferida'),
    type: "date",
    value: s.date,
    onChange: e => upd('date', e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ksl-field__label"
  }, L(lang, 'Preferred start time', 'Hora de inicio')), /*#__PURE__*/React.createElement("div", {
    className: "timegrid"
  }, times.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: `timeslot ${s.time === t ? 'timeslot--on' : ''}`,
    onClick: () => upd('time', t)
  }, t))))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "panel__title"
  }, L(lang, 'Where should we go?', '¿A dónde vamos?')), /*#__PURE__*/React.createElement("p", {
    className: "panel__sub"
  }, L(lang, 'Your details stay private. No payment due now.', 'Tus datos son privados. No se cobra ahora.')), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: L(lang, 'Full name', 'Nombre completo'),
    required: true,
    value: s.name,
    onChange: e => upd('name', e.target.value),
    placeholder: "Jane Garcia"
  }), /*#__PURE__*/React.createElement(Input, {
    label: L(lang, 'Email', 'Correo'),
    type: "email",
    required: true,
    value: s.email,
    onChange: e => upd('email', e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    }),
    placeholder: "jane@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: L(lang, 'Phone', 'Teléfono'),
    value: s.phone,
    onChange: e => upd('phone', e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    }),
    placeholder: "(360) 555-0142"
  }), /*#__PURE__*/React.createElement(Input, {
    label: L(lang, 'Address', 'Dirección'),
    value: s.address,
    onChange: e => upd('address', e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    }),
    placeholder: "Mount Vernon, WA"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: L(lang, 'Anything we should know?', '¿Algo que debamos saber?'),
    rows: 3,
    value: s.notes,
    onChange: e => upd('notes', e.target.value),
    placeholder: L(lang, 'Pets, parking, where to find the key…', 'Mascotas, estacionamiento, dónde está la llave…')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: L(lang, 'Use eco-friendly products', 'Productos ecológicos'),
    checked: s.eco,
    onChange: e => upd('eco', e.target.checked)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: L(lang, 'I prefer service in Spanish', 'Prefiero atención en español'),
    checked: s.spanish,
    onChange: e => upd('spanish', e.target.checked)
  }))), done && /*#__PURE__*/React.createElement("div", {
    className: "confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("h1", {
    className: "panel__title"
  }, L(lang, "You're all set, ", '¡Listo, '), s.name ? s.name.split(' ')[0] : L(lang, 'friend', 'amig@'), "!"), /*#__PURE__*/React.createElement("p", {
    className: "panel__sub",
    style: {
      maxWidth: 420,
      margin: '8px auto 0'
    }
  }, L(lang, "We've received your request and will text a confirmation shortly — usually within the hour.", 'Recibimos tu solicitud y te confirmaremos por mensaje — casi siempre en menos de una hora.')), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      margin: '24px auto 0'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: `${serviceLabel} · ${freqLabel}`
  }, s.date ? `${s.date} · ${s.time}` : '', " \u2014 ", L(lang, 'Estimated from', 'Desde'), " $", est, !isOffice && s.freq !== 'once' ? L(lang, ' / visit', ' / visita') : ''))), !done && /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(Math.max(0, step - 1)),
    style: {
      visibility: step === 0 ? 'hidden' : 'visible'
    },
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })
  }, L(lang, 'Back', 'Atrás')), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(step + 1),
    disabled: !canNext,
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: step === 3 ? 'sparkles' : 'arrow-right',
      size: 18
    })
  }, step === 3 ? L(lang, 'Request my quote', 'Pedir cotización') : L(lang, 'Continue', 'Continuar'))), done && /*#__PURE__*/React.createElement("div", {
    className: "actions",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "../website/index.html",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })
  }, L(lang, 'Back to site', 'Volver al sitio')))), /*#__PURE__*/React.createElement("aside", {
    className: "summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summary__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summary__estlabel"
  }, L(lang, 'Estimated price', 'Precio estimado')), /*#__PURE__*/React.createElement("div", {
    className: "summary__est"
  }, "$", est, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      color: 'var(--teal-300)'
    }
  }, !isOffice && s.freq !== 'once' ? L(lang, ' / visit', ' / visita') : ''))), /*#__PURE__*/React.createElement("div", {
    className: "summary__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summary__row"
  }, /*#__PURE__*/React.createElement("span", null, L(lang, 'Service', 'Servicio')), /*#__PURE__*/React.createElement("span", null, serviceLabel)), !isOffice && /*#__PURE__*/React.createElement("div", {
    className: "summary__row"
  }, /*#__PURE__*/React.createElement("span", null, L(lang, 'Size', 'Tamaño')), /*#__PURE__*/React.createElement("span", null, s.beds, " ", L(lang, 'bd', 'rec'), " \xB7 ", s.baths, " ", L(lang, 'ba', 'baño'))), isOffice && /*#__PURE__*/React.createElement("div", {
    className: "summary__row"
  }, /*#__PURE__*/React.createElement("span", null, L(lang, 'Size', 'Tamaño')), /*#__PURE__*/React.createElement("span", null, s.sqft, " sq ft")), /*#__PURE__*/React.createElement("div", {
    className: "summary__row"
  }, /*#__PURE__*/React.createElement("span", null, L(lang, 'Frequency', 'Frecuencia')), /*#__PURE__*/React.createElement("span", null, freqLabel)), s.addons.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "summary__row"
  }, /*#__PURE__*/React.createElement("span", null, L(lang, 'Add-ons', 'Extras')), /*#__PURE__*/React.createElement("span", null, s.addons.length)), s.date && /*#__PURE__*/React.createElement("div", {
    className: "summary__row"
  }, /*#__PURE__*/React.createElement("span", null, L(lang, 'When', 'Cuándo')), /*#__PURE__*/React.createElement("span", null, s.date, s.time ? ` · ${s.time}` : ''))), /*#__PURE__*/React.createElement("div", {
    className: "summary__trust"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 16
  }), " ", L(lang, 'Licensed & insured', 'Con licencia y seguro')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 16
  }), " ", L(lang, 'Satisfaction guaranteed', 'Satisfacción garantizada')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "messages-square",
    size: 16
  }), " ", L(lang, 'Bilingual EN / ES', 'Bilingüe EN / ES')))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(BookingApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/BookingApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const nsFoot = window.KalaylaSCleaningDesignSystem_b83ec6;
function CTABand({
  lang
}) {
  const {
    Button,
    Icon
  } = nsFoot;
  return /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ctaband"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctaband__glow"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(28px,4vw,42px)',
      letterSpacing: '-0.025em',
      color: '#fff',
      margin: 0
    }
  }, L(lang, 'Ready for a spotless home?', '¿Listo para una casa impecable?')), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-deep)',
      fontSize: 18,
      margin: '14px auto 0',
      maxWidth: 540
    }
  }, L(lang, 'Get a free, no-obligation quote today — most replies within the hour.', 'Pide tu cotización gratis hoy — casi siempre respondemos en menos de una hora.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 20
    })
  }, L(lang, 'Get a free quote', 'Cotización gratis')), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    }),
    href: "tel:+13605550142"
  }, "(360) 555-0142"))))));
}
function Footer({
  lang
}) {
  const {
    Logo,
    Icon,
    IconButton
  } = nsFoot;
  const col = (title, links) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#top"
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ftr__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    tone: "reversed",
    size: 34
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-deep)',
      fontSize: 14.5,
      lineHeight: 1.6,
      marginTop: 16,
      maxWidth: 280
    }
  }, L(lang, 'Family-owned home & office cleaning, proudly serving Mount Vernon and the Skagit Valley in English & Español.', 'Limpieza familiar de casas y oficinas, con orgullo en Mount Vernon y el Valle de Skagit, en inglés y español.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    label: "Instagram",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    label: "Facebook",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 18
  })))), col(L(lang, 'Services', 'Servicios'), [L(lang, 'Home cleaning', 'Limpieza de casa'), L(lang, 'Office cleaning', 'Limpieza de oficina'), L(lang, 'Deep cleans', 'Limpieza profunda'), L(lang, 'Move-in / move-out', 'Mudanzas')]), col(L(lang, 'Company', 'Empresa'), [L(lang, 'About us', 'Nosotros'), L(lang, 'Reviews', 'Reseñas'), L(lang, 'Service area', 'Zona'), L(lang, 'Careers', 'Empleo')]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, L(lang, 'Contact', 'Contacto')), /*#__PURE__*/React.createElement("a", {
    href: "tel:+13605550142"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14,
    style: {
      display: 'inline',
      verticalAlign: '-2px',
      marginRight: 6
    }
  }), "(360) 555-0142"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hola@kalaylas.com"
  }, "hola@kalaylas.com"), /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, "Mount Vernon, WA"), /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, L(lang, 'Mon–Sat · 8am–6pm', 'Lun–Sáb · 8am–6pm')))), /*#__PURE__*/React.createElement("div", {
    className: "ftr__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Kalayla's Cleaning Service \xB7 ", L(lang, 'Licensed & insured', 'Con licencia y seguro')), /*#__PURE__*/React.createElement("span", null, L(lang, 'Made with care in the Skagit Valley', 'Hecho con cariño en el Valle de Skagit')))));
}
window.CTABand = CTABand;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const ns = window.KalaylaSCleaningDesignSystem_b83ec6;
function Header({
  lang,
  setLang
}) {
  const {
    Logo,
    Button,
    IconButton,
    Icon
  } = ns;
  const links = [[L(lang, 'Services', 'Servicios'), '#services'], [L(lang, 'Pricing', 'Precios'), '#pricing'], [L(lang, 'Reviews', 'Reseñas'), '#reviews'], [L(lang, 'Service area', 'Zona'), '#areas']];
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "hdr__bar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Kalayla's home",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hdr__nav"
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    className: "hdr__link",
    href: href
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "langtoggle",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    "aria-pressed": lang === 'en',
    onClick: () => setLang('en')
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    "aria-pressed": lang === 'es',
    onClick: () => setLang('es')
  }, "ES")), /*#__PURE__*/React.createElement("a", {
    className: "hdr__phone",
    href: "tel:+13605550142"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), " (360) 555-0142"), /*#__PURE__*/React.createElement(Button, {
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 18
    })
  }, L(lang, 'Get a free quote', 'Cotización gratis')), /*#__PURE__*/React.createElement(IconButton, {
    className: "hdr__menu",
    variant: "outline",
    label: "Menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 20
  }))))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const nsHero = window.KalaylaSCleaningDesignSystem_b83ec6;
function Hero({
  lang
}) {
  const {
    Button,
    Icon,
    Avatar,
    Rating
  } = nsHero;
  return /*#__PURE__*/React.createElement(Section, {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, L(lang, 'Serving Mount Vernon & Skagit Valley', 'Mount Vernon y el Valle de Skagit')), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, L(lang, 'A spotless home, without lifting a finger.', 'Una casa impecable, sin mover un dedo.')), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, L(lang, 'Trusted, insured cleaners for homes and offices — the same friendly, bilingual team, every visit.', 'Limpieza de confianza y con seguro para casas y oficinas — el mismo equipo bilingüe y amable, en cada visita.')), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 20
    })
  }, L(lang, 'Get a free quote', 'Pide tu cotización')), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, L(lang, "See what's included", 'Qué incluye'))), /*#__PURE__*/React.createElement("div", {
    className: "hero__trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "trustitem"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18
  }), " ", L(lang, 'Licensed & insured', 'Con licencia y seguro')), /*#__PURE__*/React.createElement("span", {
    className: "trustitem"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "messages-square",
    size: 18
  }), " ", L(lang, 'English & Español', 'Inglés y Español')), /*#__PURE__*/React.createElement("span", {
    className: "trustitem"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 18
  }), " ", L(lang, 'Satisfaction guaranteed', 'Satisfacción garantizada')))), /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__glow"
  }), /*#__PURE__*/React.createElement(Photo, {
    ratio: "ratio",
    caption: L(lang, 'Bright, tidy home', 'Hogar limpio'),
    style: {
      position: 'relative',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "floatcard floatcard--tl"
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 5
    }
  }, L(lang, '214 five-star reviews', '214 reseñas de 5★'))), /*#__PURE__*/React.createElement("div", {
    className: "floatcard floatcard--br"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Kalayla Ramirez",
    size: "md",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-heading)'
    }
  }, L(lang, 'Your team is booked', 'Equipo reservado')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, L(lang, 'Tue 9:00 AM · Kalayla + Ana', 'Mar 9:00 · Kalayla + Ana'))))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
const nsPrice = window.KalaylaSCleaningDesignSystem_b83ec6;
function PlanCard({
  plan,
  lang
}) {
  const {
    Card,
    Button,
    Badge,
    Icon
  } = nsPrice;
  return /*#__PURE__*/React.createElement(Card, {
    className: `plan ${plan.featured ? 'plan--featured' : ''}`,
    style: {
      padding: 28
    }
  }, plan.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    solid: true
  }, L(lang, 'Most popular', 'Más popular'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-heading)'
    }
  }, plan.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, plan.tag)), /*#__PURE__*/React.createElement("div", {
    className: "plan__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "plan__amt"
  }, plan.price), /*#__PURE__*/React.createElement("span", {
    className: "plan__per"
  }, plan.per)), /*#__PURE__*/React.createElement("ul", {
    className: "plan__feat"
  }, plan.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    strokeWidth: 2.5
  }), " ", f))), /*#__PURE__*/React.createElement(Button, {
    variant: plan.featured ? 'primary' : 'secondary',
    fullWidth: true
  }, plan.cta));
}
function Pricing({
  lang
}) {
  const {
    Tabs
  } = nsPrice;
  const [seg, setSeg] = React.useState('home');
  const home = [{
    name: L(lang, 'One-time deep clean', 'Limpieza profunda'),
    tag: L(lang, 'No commitment', 'Sin compromiso'),
    price: '$149',
    per: L(lang, 'from', 'desde'),
    cta: L(lang, 'Book once', 'Reservar'),
    feats: [L(lang, 'Whole-home deep clean', 'Limpieza profunda total'), L(lang, 'Inside appliances', 'Interior de electrodomésticos'), L(lang, 'Baseboards & detail work', 'Zócalos y detalles'), L(lang, 'Flexible scheduling', 'Horario flexible')]
  }, {
    name: L(lang, 'Every 2 weeks', 'Cada 2 semanas'),
    tag: L(lang, 'Our favorite', 'La favorita'),
    price: '$119',
    per: L(lang, '/ visit', '/ visita'),
    cta: L(lang, 'Get started', 'Empezar'),
    featured: true,
    feats: [L(lang, 'Same trusted team', 'El mismo equipo'), L(lang, 'Priority scheduling', 'Horario prioritario'), L(lang, '10% off add-ons', '10% en extras'), L(lang, 'Pause anytime', 'Pausa cuando quieras')]
  }, {
    name: L(lang, 'Weekly', 'Semanal'),
    tag: L(lang, 'Best value', 'Mejor precio'),
    price: '$99',
    per: L(lang, '/ visit', '/ visita'),
    cta: L(lang, 'Get started', 'Empezar'),
    feats: [L(lang, 'Lowest price per visit', 'Menor precio por visita'), L(lang, 'Same team weekly', 'Mismo equipo cada semana'), L(lang, 'Top-priority slots', 'Horarios preferentes'), L(lang, 'Pause anytime', 'Pausa cuando quieras')]
  }];
  const office = [{
    name: L(lang, 'Small office', 'Oficina pequeña'),
    tag: L(lang, 'Up to 2,500 sq ft', 'Hasta 230 m²'),
    price: L(lang, 'Custom', 'A medida'),
    per: '',
    cta: L(lang, 'Request a quote', 'Pedir cotización'),
    feats: [L(lang, 'After-hours service', 'Fuera de horario'), L(lang, 'Restrooms & break rooms', 'Baños y cocinas'), L(lang, 'Weekly or biweekly', 'Semanal o quincenal'), L(lang, 'Supplies managed', 'Insumos incluidos')]
  }, {
    name: L(lang, 'Standard', 'Estándar'),
    tag: L(lang, 'Up to 8,000 sq ft', 'Hasta 740 m²'),
    price: L(lang, 'Custom', 'A medida'),
    per: '',
    cta: L(lang, 'Request a quote', 'Pedir cotización'),
    featured: true,
    feats: [L(lang, 'Nightly or weekly', 'Nocturno o semanal'), L(lang, 'Floors & carpets', 'Pisos y alfombras'), L(lang, 'Dedicated team', 'Equipo dedicado'), L(lang, 'Monthly walkthroughs', 'Revisiones mensuales')]
  }, {
    name: L(lang, 'Multi-site', 'Multi-sitio'),
    tag: L(lang, 'Tailored program', 'Programa a medida'),
    price: L(lang, 'Custom', 'A medida'),
    per: '',
    cta: L(lang, 'Request a quote', 'Pedir cotización'),
    feats: [L(lang, 'Multiple locations', 'Varias ubicaciones'), L(lang, 'Day porter option', 'Conserje de día'), L(lang, 'Account manager', 'Gerente de cuenta'), L(lang, 'Custom reporting', 'Reportes a medida')]
  }];
  const plans = seg === 'home' ? home : office;
  return /*#__PURE__*/React.createElement(Section, {
    id: "pricing"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: L(lang, 'Simple pricing', 'Precios claros'),
    title: L(lang, 'Fair, flat prices — no surprises', 'Precios justos y fijos — sin sorpresas'),
    sub: L(lang, 'Recurring plans lower your per-visit price. Cancel or pause anytime.', 'Los planes recurrentes bajan el precio por visita. Cancela o pausa cuando quieras.')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: seg,
    onChange: setSeg,
    tabs: [{
      value: 'home',
      label: L(lang, 'Homes', 'Casas')
    }, {
      value: 'office',
      label: L(lang, 'Offices', 'Oficinas')
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "plans",
    style: {
      marginTop: 32
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.name,
    plan: p,
    lang: lang
  })))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
const nsProc = window.KalaylaSCleaningDesignSystem_b83ec6;
function Process({
  lang
}) {
  const {
    Icon
  } = nsProc;
  const steps = [['clipboard-list', L(lang, 'Get a free quote', 'Pide tu cotización'), L(lang, 'Tell us about your space in two minutes. We reply with a fair, flat price — usually within the hour.', 'Cuéntanos sobre tu espacio en dos minutos. Respondemos con un precio justo — casi siempre en menos de una hora.')], ['calendar-check', L(lang, 'Pick a time', 'Elige un horario'), L(lang, 'Choose a day that works for you and meet your dedicated, background-checked team.', 'Elige el día que te convenga y conoce a tu equipo dedicado y verificado.')], ['sparkles', L(lang, 'Relax', 'Relájate'), L(lang, 'Come home to clean. The same friendly team returns every visit — satisfaction guaranteed.', 'Llega a una casa limpia. El mismo equipo regresa cada visita — satisfacción garantizada.')]];
  const promises = [L(lang, 'Licensed & insured', 'Con licencia y seguro'), L(lang, 'Background-checked team', 'Equipo verificado'), L(lang, '24-hour re-clean guarantee', 'Re-limpieza en 24 horas'), L(lang, 'Eco-friendly products on request', 'Productos ecológicos a pedido')];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    id: "how",
    variant: "soft"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: L(lang, 'How it works', 'Cómo funciona'),
    title: L(lang, 'Booked in minutes, clean for good', 'Reserva en minutos, limpio para siempre')
  }), /*#__PURE__*/React.createElement("div", {
    className: "steps",
    style: {
      marginTop: 48
    }
  }, steps.map(([icon, title, body], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "step__num"
  }, L(lang, 'STEP', 'PASO'), " 0", i + 1), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, body)))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    },
    className: "guarantee-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, L(lang, 'Our promise', 'Nuestra promesa')), /*#__PURE__*/React.createElement("h2", {
    className: "sh__title",
    style: {
      marginTop: 14
    }
  }, L(lang, "Love it, or we'll make it right.", 'Te encanta, o lo corregimos.')), /*#__PURE__*/React.createElement("p", {
    className: "sh__sub"
  }, L(lang, "If something isn't perfect, tell us within 24 hours and we'll re-clean it free. That's the Kalayla's guarantee.", 'Si algo no quedó perfecto, dinos en 24 horas y lo limpiamos de nuevo gratis. Esa es la garantía de Kalayla\u2019s.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, promises.map(p => /*#__PURE__*/React.createElement("div", {
    className: "incl__item",
    key: p,
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20
  }), " ", p)))))));
}
window.Process = Process;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reviews.jsx
try { (() => {
const nsRev = window.KalaylaSCleaningDesignSystem_b83ec6;
function Reviews({
  lang
}) {
  const {
    Card,
    Avatar,
    Rating,
    Icon
  } = nsRev;
  const reviews = [{
    q: L(lang, 'Our home has never felt so calm. The same team comes every visit and treats it like their own.', 'Nuestra casa nunca se sintió tan tranquila. El mismo equipo viene cada visita y la cuida como suya.'),
    name: 'María G.',
    loc: 'Mount Vernon'
  }, {
    q: L(lang, 'Booking took two minutes and they replied in Spanish, which my parents loved.', 'Reservar tomó dos minutos y respondieron en español, lo que encantó a mis papás.'),
    name: 'Daniel R.',
    loc: 'Burlington'
  }, {
    q: L(lang, 'Our clinic is spotless every morning. Reliable, insured, and genuinely kind people.', 'Nuestra clínica está impecable cada mañana. Confiables, asegurados y muy amables.'),
    name: 'S. Patel',
    loc: 'Sedro-Woolley'
  }];
  const towns = ['Mount Vernon', 'Burlington', 'Sedro-Woolley', 'Anacortes', 'La Conner', 'Conway', 'Bow', 'Clear Lake', 'Bayview'];
  const faqs = [[L(lang, 'Do I need to be home during the cleaning?', '¿Tengo que estar en casa durante la limpieza?'), L(lang, 'Not at all. Most clients give us a key or entry code. Your team is background-checked and insured, and we lock up when we leave.', 'Para nada. La mayoría nos da una llave o código. Tu equipo está verificado y asegurado, y cerramos al salir.')], [L(lang, 'Do you bring your own supplies?', '¿Traen sus propios productos?'), L(lang, 'Yes — we bring everything, including eco-friendly products on request. Just let us know if you prefer we use yours.', 'Sí — traemos todo, incluyendo productos ecológicos a pedido. Avísanos si prefieres que usemos los tuyos.')], [L(lang, 'Are you licensed and insured?', '¿Tienen licencia y seguro?'), L(lang, 'Always. Kalayla\u2019s is fully licensed, bonded, and insured, and every cleaner is background-checked.', 'Siempre. Kalayla\u2019s tiene licencia, fianza y seguro completos, y cada persona está verificada.')], [L(lang, 'Can I get service in Spanish?', '¿Puedo recibir atención en español?'), L(lang, 'Of course. Our owners and team are fully bilingual — quotes, scheduling, and support in English or Español.', 'Claro. Nuestros dueños y equipo son totalmente bilingües — cotizaciones, horarios y soporte en inglés o español.')]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    id: "reviews"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: L(lang, 'Reviews', 'Reseñas'),
    title: L(lang, 'Loved by Skagit families & businesses', 'Querido por familias y negocios de Skagit')
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      marginTop: 44
    }
  }, reviews.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "review"
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    size: 16
  }), /*#__PURE__*/React.createElement("p", {
    className: "review__quote"
  }, `\u201C${r.q}\u201D`), /*#__PURE__*/React.createElement("div", {
    className: "review__who"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "review__name"
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "review__loc"
  }, r.loc))))))))), /*#__PURE__*/React.createElement(Section, {
    id: "areas",
    variant: "soft"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: L(lang, 'Service area', 'Zona de servicio'),
    title: L(lang, 'Proudly serving the Skagit Valley', 'Con orgullo en el Valle de Skagit'),
    sub: L(lang, 'Based in Mount Vernon, we clean homes and offices across the valley. Not sure if we reach you? Just ask.', 'Con base en Mount Vernon, limpiamos casas y oficinas en todo el valle. ¿No sabes si llegamos? Pregúntanos.')
  }), /*#__PURE__*/React.createElement("div", {
    className: "areas",
    style: {
      marginTop: 24
    }
  }, towns.map(t => /*#__PURE__*/React.createElement("span", {
    className: "area-pill",
    key: t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), " ", t)))), /*#__PURE__*/React.createElement(Photo, {
    ratio: "wide",
    caption: L(lang, 'Skagit Valley map', 'Mapa del valle')
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: L(lang, 'Questions', 'Preguntas'),
    title: L(lang, 'Good to know', 'Bueno saber')
  }), /*#__PURE__*/React.createElement("div", {
    className: "faq",
    style: {
      marginTop: 36
    }
  }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    className: `faq__item ${open === i ? 'faq__item--open' : ''}`,
    key: q
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq__q",
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i
  }, q, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "faq__a"
  }, /*#__PURE__*/React.createElement("p", null, a))))))));
}
window.Reviews = Reviews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const nsSvc = window.KalaylaSCleaningDesignSystem_b83ec6;
function StatsStrip({
  lang
}) {
  const {
    Stat
  } = nsSvc;
  return /*#__PURE__*/React.createElement(Section, {
    variant: "soft",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "500+",
    label: L(lang, 'Homes cleaned', 'Casas limpiadas')
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4.9\u2605",
    label: L(lang, 'Average rating', 'Calificación')
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12 yrs",
    label: L(lang, 'Serving Skagit', 'Sirviendo Skagit')
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "100%",
    label: L(lang, 'Satisfaction', 'Satisfacción')
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "EN \xB7 ES",
    label: L(lang, 'Bilingual team', 'Equipo bilingüe')
  }))));
}
function ServiceCard({
  icon,
  title,
  desc,
  items
}) {
  const {
    Card,
    Icon,
    Button
  } = nsSvc;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc__tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28
  })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 15.5,
      lineHeight: 1.55
    }
  }, desc), /*#__PURE__*/React.createElement("ul", {
    className: "svc__list"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    strokeWidth: 2.5
  }), " ", it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, title))));
}
function Services({
  lang
}) {
  const {
    Icon
  } = nsSvc;
  const included = [[L(lang, 'Kitchens', 'Cocinas'), 'utensils-crossed'], [L(lang, 'Bathrooms', 'Baños'), 'shower-head'], [L(lang, 'Bedrooms', 'Recámaras'), 'bed'], [L(lang, 'Living areas', 'Salas'), 'sofa'], [L(lang, 'Floors', 'Pisos'), 'grid-2x2'], [L(lang, 'Dusting', 'Sacudido'), 'wind'], [L(lang, 'Interior windows', 'Ventanas'), 'panel-top'], [L(lang, 'Trash & recycling', 'Basura y reciclaje'), 'trash-2']];
  return /*#__PURE__*/React.createElement(Section, {
    id: "services"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: L(lang, 'Residential & Commercial', 'Residencial y Comercial'),
    title: L(lang, 'One trusted team for homes and offices', 'Un equipo de confianza para casas y oficinas'),
    sub: L(lang, 'Recurring or one-time — we tailor every clean to your space and schedule.', 'Recurrente o una vez — adaptamos cada limpieza a tu espacio y horario.')
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "home",
    title: L(lang, 'Home cleaning', 'Limpieza de casa'),
    desc: L(lang, 'Weekly, biweekly, or monthly visits that keep your home calm and spotless — so you get your weekend back.', 'Visitas semanales, quincenales o mensuales que mantienen tu hogar impecable — para que recuperes tu fin de semana.'),
    items: [L(lang, 'Kitchen, appliances & counters', 'Cocina, electrodomésticos y mesones'), L(lang, 'Bathrooms & fixtures sanitized', 'Baños desinfectados'), L(lang, 'Floors vacuumed & mopped', 'Pisos aspirados y trapeados'), L(lang, 'Dusting, beds made, trash out', 'Sacudido, camas y basura')]
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "building-2",
    title: L(lang, 'Office cleaning', 'Limpieza de oficina'),
    desc: L(lang, 'Reliable after-hours service that keeps your workplace fresh, healthy, and ready for the day.', 'Servicio confiable fuera de horario que mantiene tu lugar de trabajo fresco y listo.'),
    items: [L(lang, 'Desks, common areas & break rooms', 'Escritorios, áreas comunes y cocinas'), L(lang, 'Restrooms cleaned & restocked', 'Baños limpios y surtidos'), L(lang, 'Floors, carpets & entryways', 'Pisos, alfombras y entradas'), L(lang, 'Flexible nightly or weekly plans', 'Planes nocturnos o semanales')]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: L(lang, "What's included, every visit", 'Qué incluye, en cada visita')
  }), /*#__PURE__*/React.createElement("div", {
    className: "incl",
    style: {
      marginTop: 24
    }
  }, included.map(([label, icon]) => /*#__PURE__*/React.createElement("div", {
    className: "incl__item",
    key: label
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  }), " ", label))))));
}
window.Services = Services;
window.StatsStrip = StatsStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function App() {
  const [lang, setLang] = React.useState('en');
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement(Hero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(StatsStrip, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Services, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Process, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Pricing, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Reviews, {
    lang: lang
  }), /*#__PURE__*/React.createElement(CTABand, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* Shared kit helpers + bilingual switch. Loaded first; attaches to window so the
   other section scripts (separate Babel scopes) can use them. */

const L = (lang, en, es) => lang === 'es' ? es : en;
function Container({
  narrow,
  className = '',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `container ${narrow ? 'container--narrow' : ''} ${className}`,
    style: style
  }, children);
}
function Section({
  id,
  variant,
  tight,
  className = '',
  children,
  style
}) {
  const v = variant ? `section--${variant}` : '';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: `section ${tight ? 'section--tight' : ''} ${v} ${className}`,
    style: style
  }, children);
}
function SectionHeading({
  eyebrow,
  title,
  sub,
  center,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `sh ${center ? 'sh--center' : ''}`
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "sh__title"
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "sh__sub"
  }, sub), children);
}
function Sparkle({
  size = 44,
  c1 = '#2FC1B2',
  c2 = '#10B5A6'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 8 Q24.5 23.5 40 27 Q24.5 30.5 21 46 Q17.5 30.5 2 27 Q17.5 23.5 21 8 Z",
    fill: c1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39 4 Q40.5 10.5 47 12 Q40.5 13.5 39 20 Q37.5 13.5 31 12 Q37.5 10.5 39 4 Z",
    fill: c2
  }));
}

/* On-brand placeholder where real photography goes. */
function Photo({
  ratio = 'wide',
  caption = 'Add photo',
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `photo photo--${ratio} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo__mark"
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    className: "photo__cap"
  }, caption)));
}
Object.assign(window, {
  L,
  Container,
  Section,
  SectionHeading,
  Photo,
  Sparkle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
