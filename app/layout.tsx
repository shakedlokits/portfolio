import './global.css';
import { Analytics } from '@vercel/analytics/react';
import { FontProvider } from '@assets/fonts';
import { Footer } from '@components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next";
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
          <div className="container mx-auto max-w-3xl px-9 pt-20 font-body print:max-w-max print:p-0">
            {children}
            <Footer />
          </div>
        </FontProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
