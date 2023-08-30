import { Oswald } from 'next/font/google'
import localFont from 'next/font/local';

const junicode = localFont({
    src: [
      {
        path: './Junicode.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Junicode-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
    ],
    variable: '--font-junicode',
  });
  
  const youngSerif = localFont({
    src: './YoungSerif-Regular.otf',
    variable: '--font-youngserif',
  });

  const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
  })
  
  export const FontProvider = ({ children }: { children: React.ReactNode }) => (
    <div className={[youngSerif, junicode, oswald].map((f) => f.variable).join(' ')}>{children}</div>
  );