'use client';

import format from 'date-fns/format';
import { Link } from './Link';
import { useCountry, useWttr } from '@lib/hooks';
import { Menu } from '@components/Menu';
import { Title } from '@components/Title';
import type { StockData } from '@lib/server';
import Typewriter from 'typewriter-effect';
import { FeedType } from '@lib/sources';
import { useRouter } from 'next/navigation';

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
          sign: '',
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

const HeaderTitle = () => {
  return (
    <Title>
      <Title.TitleBody>
        Hi! I’m Shaked Lokits,<br />Technically&nbsp;
        <br className="sm:hidden inline" />
        <span className="highlight inline whitespace-nowrap after:content-['']">
          <Typewriter
            options={{
              strings: [
                'a Developer',
                'an Artist',
                'a Teacher',
                'a Designer',
                'a Sailor',
                'an Engineer',
                'a Researcher',
              ],
              autoStart: true,
              loop: true,
              cursorClassName: 'highlight',
            }}
          />
        </span>
      </Title.TitleBody>
      <Title.TitleByline byline="*Well, it’s complicated" />
    </Title>
  );
};

const HeaderMenu = ({ stock }: { stock: StockData }) => {
  const weather = useWttr();
  const country = useCountry();
  const router = useRouter();

  const day = `${country}, ${format(new Date(), 'eeee')}, `;
  const date = format(new Date(), 'MMMM d, yyyy');
  const { ticker, tickerColor } = formatTicker(stock);

  const feedTypes = Object.values(FeedType);

  return (
    <Menu>
      <Menu.PrimaryRow>
        <p className="sm:inline hidden">
          S&P 500&nbsp;<span className={tickerColor}>{ticker}</span>
        </p>
        <div>
          <p className="sm:inline hidden">{day}</p>
          <p className="inline">{date}</p>
        </div>
        <p className="inline text-[1rem]">{weather}</p>
      </Menu.PrimaryRow>
      <Menu.SecondaryRow>
        <Link href={'/about'} >About Me</Link>
        <Link href="https://www.linkedin.com/in/shaked-lokits/" redirect className="sm:inline hidden">
          Contact Me
        </Link>
        <Link href={'/mentoring'} redirect className="highlight">
          Free Mentoring
        </Link>
        <Link href="https://spaceflightnow.com/launch-schedule/" redirect className="sm:inline hidden">
          Upcoming Space Launch
        </Link>
      </Menu.SecondaryRow>
    </Menu>
  );
};

export const Header = ({ stock, menu }: { stock?: StockData, menu?: boolean }) => {
  return (
    <>
      <HeaderTitle />
      {menu && stock && <HeaderMenu stock={stock} />}
    </>
  );
};
