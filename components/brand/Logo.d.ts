import * as React from 'react';

/**
 * Logo props.
 * @startingPoint section="Brand" subtitle="Wordmark lockup with reversed & mark variants" viewport="520x160"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "full" = sparkle + wordmark + tagline; "mark" = sparkle only. Default "full". */
  variant?: 'full' | 'mark';
  /** Color treatment. "reversed" for deep-teal backgrounds; "mono" inherits currentColor. */
  tone?: 'default' | 'reversed' | 'mono';
  /** Height of the sparkle mark in px; the wordmark scales from this. Default 40. */
  size?: number;
  /** Show the "Cleaning Service" tagline under the name. Default true. */
  tagline?: boolean;
}

/**
 * Logo — Kaleyla's Cleaning Service brand lockup (sparkle mark + wordmark).
 */
export declare function Logo(props: LogoProps): JSX.Element;
