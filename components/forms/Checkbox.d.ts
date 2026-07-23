import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text shown beside the box. */
  label?: React.ReactNode;
}

/** Checkbox — labelled checkbox on a native input. */
export declare function Checkbox(props: CheckboxProps): JSX.Element;
