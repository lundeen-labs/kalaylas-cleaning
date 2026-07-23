import * as React from 'react';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected (active) state. */
  selected?: boolean;
  /** Optional leading icon node. */
  leadingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Chip — selectable pill for filters and multi-select choices. */
export declare function Chip(props: ChipProps): JSX.Element;
