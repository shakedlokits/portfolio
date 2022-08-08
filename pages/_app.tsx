import '../styles/global.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_TITLE}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
