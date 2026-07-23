import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. When omitted, initials from `name` are shown. */
  src?: string;
  /** Full name — drives initials and the accessible label. */
  name?: string;
  /** Size. Default "md". */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Add a brand ring around the avatar. */
  ring?: boolean;
}

/** Avatar — circular profile image or initials. */
export declare function Avatar(props: AvatarProps): JSX.Element;
