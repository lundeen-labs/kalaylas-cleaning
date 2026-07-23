import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Field label. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; turns the field red and overrides hint. */
  error?: string;
}

/** Textarea — multiline labelled field. */
export declare function Textarea(props: TextareaProps): JSX.Element;
