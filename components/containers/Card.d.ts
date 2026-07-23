import * as React from 'react';

/**
 * Card props.
 * @startingPoint section="Containers" subtitle="Surface card with optional hover lift" viewport="420x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Element/tag to render. Default "div". */
  as?: any;
  /** Apply the standard 24px padding. Default true. */
  padded?: boolean;
  /** Remove the shadow (hairline border only). */
  flat?: boolean;
  /** Add a hover lift for clickable cards. */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * Card — the surface container (white, soft shadow, hairline border, 24px radius).
 */
export declare function Card(props: CardProps): JSX.Element;
