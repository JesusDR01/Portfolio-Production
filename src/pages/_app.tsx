import "./index.css";
import "animate.css";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import TagManager from 'react-gtm-module';
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-K83N7ST' });
    }, []);
  
    return (
        <>
        <Head>
          <title>Jesús Díaz Rivas Portfolio</title>
        </Head>
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
