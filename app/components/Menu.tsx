import { ReactNode } from 'react';
import { classy } from '@lib/utilities';

const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <header className="mb-8 text-[1rem] uppercase">
      {children}
    </header>
  );
};

Menu.PrimaryRow = function TopRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row justify-between border-black border-b-4 border-t-2 py-1">
      {children}
    </div>
  );
};

Menu.SecondaryRow = function BottomRow({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div
      className={classy('flex flex-row justify-between border-black border-double border-b-6 py-1 pt-2 font-bold', className)}>
      {children}
    </div>
  );
};

export { Menu };