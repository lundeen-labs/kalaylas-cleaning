import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; turns the field red and overrides hint. */
  error?: string;
  /** Icon node shown inside the field's left edge. */
  leadingIcon?: React.ReactNode;
  /** Control height. Default "md". */
  size?: 'sm' | 'md' | 'lg';
}

/** Input — labelled text field with optional icon, hint, and error states. */
export declare function Input(props: InputProps): JSX.Element;
