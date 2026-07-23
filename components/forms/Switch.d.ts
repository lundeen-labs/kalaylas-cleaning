import * as React from 'react';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text shown beside the toggle. */
  label?: React.ReactNode;
}

/** Switch — on/off toggle (role="switch"). */
export declare function Switch(props: SwitchProps): JSX.Element;
