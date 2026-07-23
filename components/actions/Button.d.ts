import * as React from 'react';

/**
 * Button props.
 * @startingPoint section="Actions" subtitle="Primary, secondary, outline, ghost — pill buttons" viewport="520x120"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary" (teal). */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Size. Default "md" (44px, touch-friendly). */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node shown before the label, e.g. <Icon name="sparkles" size={18} />. */
  leadingIcon?: React.ReactNode;
  /** Icon node shown after the label. */
  trailingIcon?: React.ReactNode;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Show a spinner and disable interaction. */
  loading?: boolean;
  /** Render as an <a> with this href instead of a <button>. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * Button — primary call-to-action element for Kaleyla's surfaces.
 */
export declare function Button(props: ButtonProps): JSX.Element;
