import type { PropsWithChildren } from 'react';

export const Link = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  return (
    <a className="decoration-yellow-200 decoration-double decoration-2 hover:underline" href={href} target="_blank"  rel="noreferrer">
      {children}
    </a>
  );
};
