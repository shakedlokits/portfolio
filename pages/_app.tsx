import '../styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { FontProvider } from '../fonts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FontProvider>
        <Component {...pageProps} />
      </FontProvider>
      <Analytics />
    </>
  );
};

export default App;
