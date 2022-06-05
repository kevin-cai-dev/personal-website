import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html className="overflow-visible">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=IBM+Plex+Mono:wght@300&family=Monoton&family=Open+Sans:wght@300;400&family=Poppins:wght@300&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="overflow-visible">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
