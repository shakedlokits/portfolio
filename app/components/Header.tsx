'use client';

import format from 'date-fns/format';
import { Link } from './Link';
import { useState } from 'react';
import { useWttr } from '../lib/hooks/use-wttr';
import type { StockData } from '../lib/server/get-stock-data';

const formatTicker = ({ uplift }: StockData) => {
  const { sign, arrow, color } = (() => {
    if (uplift > 0) {
      return {
        sign: '+',
        arrow: '↑',
        color: 'text-green-600',
      } as const;
    } else {
      if (uplift < 0) {
        return {
          sign: '-',
          arrow: '↓',
          color: 'text-red-500',
        } as const;
      }

      return { sign: '', arrow: '', color: '' } as const;
    }
  })();

  const ticker = `${sign}${uplift.toFixed(2)}% ${arrow}`;

  return { ticker, tickerColor: color };
};

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

export const Header = ({ stock }: { stock: StockData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const weather = useWttr();

  const day = `Tel Aviv, ${format(new Date(), 'eeee')}, `;
  const date = format(new Date(), 'MMMM d, yyyy');
  const { ticker, tickerColor } = formatTicker(stock);

  return (
    <header>
      <div className="flex flex-row justify-between border-black border-b-4 border-t-2 py-1">
        <p className="sm:inline hidden text-[1rem] uppercase">
          S&P 500&nbsp;<span className={tickerColor}>{ticker}</span>
        </p>
        <div className="text-[1rem] uppercase">
          <p className="sm:inline hidden">{day}</p>
          <p className="inline">{date}</p>
        </div>

        <p className="inline text-[1rem] uppercase">{weather}</p>
      </div>
      <div className="flex flex-row justify-between border-black border-double border-b-6 py-1 mb-8 pt-2">
        <span className="text-[1rem] uppercase inline font-bold">
          <Link href="/about">Editor&apos;s Note</Link>
        </span>
        <span className="text-[1rem] uppercase sm:inline hidden font-bold">
          <Link href="https://www.linkedin.com/in/shaked-lokits/" redirect>
            Contact Me
          </Link>
        </span>
        <span className="text-[1rem] uppercase inline font-bold hightlight">
          <Link href="/mentoring" redirect>
            Free Mentoring
          </Link>
        </span>
        <span className="text-[1rem] uppercase sm:inline hidden font-bold">
          <Link href="https://spaceflightnow.com/launch-schedule/" redirect>
            Upcoming Space Launch
          </Link>
        </span>
      </div>
    </header>
  );
};
