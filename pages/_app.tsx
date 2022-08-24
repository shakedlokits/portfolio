import '../styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
