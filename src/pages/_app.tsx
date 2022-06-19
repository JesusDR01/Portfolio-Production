import "./index.css";
import "animate.css";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
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
