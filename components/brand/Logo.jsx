import React from 'react';

const MARK_TONES = {
  default:  { m1: '#10B5A6', m2: '#0A3B3A', word: 'var(--text-heading)', eye: 'var(--brand-strong)' },
  reversed: { m1: '#34C2B3', m2: '#CFF3EE', word: '#FFFFFF',             eye: 'var(--teal-300)' },
  mono:     { m1: 'currentColor', m2: 'currentColor', word: 'currentColor', eye: 'currentColor' },
};

function Sparkle({ size, c }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flex: 'none' }}>
      <path d="M21 8 Q24.5 23.5 40 27 Q24.5 30.5 21 46 Q17.5 30.5 2 27 Q17.5 23.5 21 8 Z" fill={c.m1} />
      <path d="M39 4 Q40.5 10.5 47 12 Q40.5 13.5 39 20 Q37.5 13.5 31 12 Q37.5 10.5 39 4 Z" fill={c.m2} opacity={c.m2 === 'currentColor' ? 0.55 : 1} />
    </svg>
  );
}

/**
 * Logo — the Kalayla's Cleaning Service brand lockup.
 * `variant="mark"` renders just the sparkle; `variant="full"` adds the wordmark
 * and tagline. Use `tone="reversed"` on deep-teal backgrounds.
 */
export function Logo({
  variant = 'full',
  tone = 'default',
  size = 40,
  tagline = true,
  style,
  ...rest
}) {
  const c = MARK_TONES[tone] || MARK_TONES.default;

  if (variant === 'mark') {
    return (
      <span style={{ display: 'inline-flex', ...style }} {...rest}>
        <Sparkle size={size} c={c} />
      </span>
    );
  }

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32, ...style }}
      {...rest}
    >
      <Sparkle size={size} c={c} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: size * 0.06, lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: size * 0.66,
            letterSpacing: '-0.02em',
            color: c.word,
          }}
        >
          Kalayla's
        </span>
        {tagline && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              fontSize: Math.max(8, size * 0.235),
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: c.eye,
            }}
          >
            Cleaning Service
          </span>
        )}
      </span>
    </span>
  );
}
