import type { PropsWithChildren } from 'react';

export const buttonStyle = 'decoration-yellow-200 decoration-double decoration-2 hover:underline';

export const Link = ({ href, redirect, children }: PropsWithChildren<{ href: string, redirect?: boolean }>) => {
  return (
    <a className={buttonStyle} href={href} target={redirect ? "_blank" : undefined}  rel="noreferrer">
      {children}
    </a>
  );
};
