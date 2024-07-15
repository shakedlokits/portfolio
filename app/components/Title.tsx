import { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pb-10">
      {children}
    </div>
  );
};

Title.TitleByline = function TitleByline({ byline }: { byline: string }) {
  return (
    <p className="sm:left-8 left-4 relative sm:pt-0 pt-2">{byline}</p>
  );
};

Title.TitleBody = function TitleBody({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl print:!text-6xl leading-[1.1]">
      {children}
    </h1>
  );
};

export { Title };