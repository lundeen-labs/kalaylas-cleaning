import * as React from 'react';

export interface RatingProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Rating value, 0–max. Rounded to whole stars. Default 5. */
  value?: number;
  /** Maximum number of stars. Default 5. */
  max?: number;
  /** Optional review count shown after the stars. */
  count?: number | string;
  /** Star pixel size. Default 16. */
  size?: number;
}

/** Rating — honey ★ star rating with optional review count. */
export declare function Rating(props: RatingProps): JSX.Element;
