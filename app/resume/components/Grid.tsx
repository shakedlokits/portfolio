import { ReactNode } from 'react';
import { classy } from '@lib/utilities';

const Grid = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={classy('grid grid-cols-6 gap-10', className)}>
      {children}
    </div>
  );
};

const getGridItemClassname = ({ numberOfColumns, hasBorder, hideInPrint }: {
  numberOfColumns: number,
  hasBorder: boolean,
  hideInPrint: boolean,
}) => classy({
  'col-span-6 md:col-span-6 print:!col-span-6': numberOfColumns === 6,
  'col-span-6 md:col-span-4 print:!col-span-4': numberOfColumns === 4,
  'col-span-6 md:col-span-2 print:!col-span-2': numberOfColumns === 2,
  'print:border-3 print:border-black print:p-5 md:border-3 md:border-black md:p-5': hasBorder,
  'print:!hidden': hideInPrint,
  'w-full h-fit': true,
});

Grid.GridItem = function GridItem({ children, className, itemSettings }: {
  children: ReactNode,
  className?: string,
  itemSettings: Parameters<typeof getGridItemClassname>[0]
}) {
  return (
    <div className={classy(getGridItemClassname(itemSettings), className)}>
      {children}
    </div>
  );
}

Grid.Separator = function Separator() {
  return (
    <div className="col-span-6 w-full border-black border-solid border-b-6 md:block hidden print:hidden" />
  );
};

export { Grid };