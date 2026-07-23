import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. Default "brand". */
  tone?: 'brand' | 'neutral' | 'success' | 'warning' | 'danger';
  /** Filled treatment instead of soft. */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  /** Optional leading icon node. */
  leadingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Badge — small status/category pill. */
export declare function Badge(props: BadgeProps): JSX.Element;
