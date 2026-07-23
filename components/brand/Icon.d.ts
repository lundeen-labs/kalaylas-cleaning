import * as React from 'react';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Lucide icon name, kebab-case (e.g. "shield-check", "building-2", "sparkles"). */
  name: string;
  /** Pixel size (width & height). Default 20. */
  size?: number;
  /** Stroke width. Default 2 (the brand's icon weight). */
  strokeWidth?: number;
  /** Stroke color. Defaults to currentColor so it inherits text color. */
  color?: string;
  /** Accessible label. When set, the icon is exposed to AT; otherwise aria-hidden. */
  title?: string;
}

/**
 * Icon — Lucide line icon by name. Requires the Lucide CDN script on the page.
 */
export declare function Icon(props: IconProps): JSX.Element;
