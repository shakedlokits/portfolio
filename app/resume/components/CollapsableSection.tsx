import { ReactNode } from 'react';
import { classy } from '@lib/utilities';

// TODO: Add collapsing button to sections
export const CollapsableSection = ({ title, children, className }: {
  title: string,
  children: ReactNode,
  className?: string
}) => {
  return (
    <div className={classy('flex flex-col gap-1 w-full mb-3 break-before-avoid-page', className)}
         id={title.toLowerCase().replaceAll(' ', '-')}>
      <h1
        className="highlight text-3xl italic font-bold leading-tight uppercase text-stroke pb-3 underline">{title}</h1>
      {children}
    </div>
  );
};