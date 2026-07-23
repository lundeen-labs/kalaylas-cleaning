import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tone, sets color and default icon. Default "info". */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Bold title line. */
  title?: React.ReactNode;
  /** Override the tone's default Lucide icon name. */
  icon?: string;
  children?: React.ReactNode;
}

/** Alert — inline callout for status messages and reassurances. */
export declare function Alert(props: AlertProps): JSX.Element;
