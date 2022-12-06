import format from 'date-fns/format';
import { Link } from './Link';
import { useState } from 'react';
import { useWttr } from '../lib/use-wttr';

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 inline"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const weather = useWttr();
  const day = `Tel Aviv, ${format(new Date(), 'eeee')}, `;
  const date = format(new Date(), 'MMMM d, yyyy');

  return (
    <header className={`transition ease-in-out delay-200 ${isMenuOpen ? 'bg-[#FDFF9B]' : ''} flex flex-row justify-between border-black border-b-4 border-t-2 py-1 mb-8`}>
      <button className="text-[1rem] font-bold pr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuIcon />
        <p className="inline align-bottom ml-1">{isMenuOpen ? 'Close' : 'Menu'}</p>
      </button>
      {isMenuOpen ? (
        <>
          <span className="text-[1rem] uppercase inline font-bold">
            <Link href="/about">Editor&apos;s Note</Link>
          </span>
          <span className="text-[1rem] uppercase sm:inline hidden font-bold">
            <Link href="https://www.linkedin.com/in/shaked-lokits/" redirect>Contact Me</Link>
          </span>
          <span className="text-[1rem] uppercase sm:inline hidden font-bold">
            <Link href="https://spaceflightnow.com/launch-schedule/" redirect>Upcoming Space Launch</Link>
          </span>
        </>
      ) : (
        <>
          <div className="text-[1rem] uppercase">
            <p className="sm:inline hidden">{day}</p>
            <p className="inline">{date}</p>
          </div>
          <p className="sm:inline hidden text-[1rem] uppercase">{weather}</p>
        </>
      )}
    </header>
  );
};
