import React from 'react';

/**
 * Rating — star rating using the brand's honey ★ glyph (the only Unicode glyph
 * the brand uses). Rounds to whole stars; pass `count` to show a review count.
 */
export function Rating({ value = 5, max = 5, count, size = 16, className = '', ...rest }) {
  const filled = Math.round(value);
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(
      <span
        key={i}
        className={['ksl-rating__star', i <= filled ? '' : 'ksl-rating__star--empty'].filter(Boolean).join(' ')}
        style={{ fontSize: size }}
        aria-hidden="true"
      >
        ★
      </span>
    );
  }
  return (
    <span
      className={['ksl-rating', className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`${value} out of ${max} stars`}
      {...rest}
    >
      {stars}
      {count != null && <span className="ksl-rating__count">{count}</span>}
    </span>
  );
}
