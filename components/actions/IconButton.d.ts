import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "ghost". */
  variant?: 'ghost' | 'soft' | 'solid' | 'outline';
  /** Size. Default "md" (44px touch target). */
  size?: 'sm' | 'md' | 'lg';
  /** Required accessible label (also the tooltip). */
  label: string;
  /** The icon node, e.g. <Icon name="phone" size={20} />. */
  children: React.ReactNode;
}

/** IconButton — icon-only action button. */
export declare function IconButton(props: IconButtonProps): JSX.Element;
