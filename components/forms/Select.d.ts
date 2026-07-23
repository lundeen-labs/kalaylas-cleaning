import * as React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; turns the field red and overrides hint. */
  error?: string;
  /** <option> elements. */
  children?: React.ReactNode;
}

/** Select — labelled native select with a brand chevron. */
export declare function Select(props: SelectProps): JSX.Element;
