import './global.css';
import { Analytics } from '@vercel/analytics/react';
import { FontProvider } from './assets/fonts';
import { Footer } from './components/Footer';
import { Title } from './components/Title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <FontProvider>
          <div className="container mx-auto max-w-3xl px-9 pt-20 font-body">
            <Title funny />
            {children}
            <Footer />
          </div>
        </FontProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
