import type { PropsWithChildren } from 'react';
import * as NextLink from 'next/link';
import { classy } from '@lib/utilities';

export const Link = ({ href, redirect, children, className }: PropsWithChildren<{
  href: string,
  redirect?: boolean,
  className?: string
}>) => {
  return (
    <NextLink.default
      className={classy('hover:decoration-yellow-200 hover:decoration-double hover:decoration-2 hover:underline hover:underline-offset-0 hover:[text-decoration-skip-ink:none]', className)}
      href={href}
      target={redirect ? '_blank' : undefined} rel="noreferrer">
      {children}
    </NextLink.default>
  );
};

