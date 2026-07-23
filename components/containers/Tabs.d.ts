import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tabs as strings or { value, label } objects. */
  tabs: Array<string | TabItem>;
  /** Currently selected value. */
  value: string;
  /** Called with the new value when a tab is clicked. */
  onChange?: (value: string) => void;
}

/** Tabs — pill-style segmented control. */
export declare function Tabs(props: TabsProps): JSX.Element;
