import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../store';
import "../styles/index.scss";
import "../styles/bootstrap.min.css";
import "../styles/custom-bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense, useEffect, useState } from 'react';
import Pageloader from '../components/Global/Pageloader/Pageloader';
import Intercepter from "../helpers/Interceptor";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [pageLoading, setPageLoading] = useState<boolean>(false);
    useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    }, [router]);

    return (
        <Provider store={store}>
            <Suspense fallback={<Pageloader />}>
                <Intercepter store={store}>
                    <Head>
                        <link rel="icon" href="/favicon.png" />
                    </Head>
                    {pageLoading && <Pageloader />}
                    <Component {...pageProps} />
                </Intercepter>
            </Suspense>
        </Provider>
    )
}
