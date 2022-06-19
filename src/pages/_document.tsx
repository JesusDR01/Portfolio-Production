import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Fonts */}

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />

                    {/* Scripts */}
                    <script type="text/javascript" src="/static/GoogleTagManager.js" async></script>
                </Head>
                <body>
                    <noscript>
                        <iframe
                            title="test"
                            src="https://www.googletagmanager.com/ns.html?id=GTM-K83N7ST"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        ></iframe>
                    </noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
