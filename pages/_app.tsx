import '../styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Junicode.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="preload" href="/fonts/Junicode-Bold.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="preload" href="/fonts/YoungSerif-Regular.otf" as="font" type="font/otf" crossOrigin="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
