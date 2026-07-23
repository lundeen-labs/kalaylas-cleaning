import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline value, e.g. "500+". */
  value: React.ReactNode;
  /** Small uppercase mono label, e.g. "Homes cleaned". */
  label?: React.ReactNode;
}

/** Stat — a single headline metric with a mono label. */
export declare function Stat(props: StatProps): JSX.Element;
