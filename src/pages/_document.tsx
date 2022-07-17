import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="author" content="Kevin Cai" />
                    <meta
                        name="description"
                        content="This website is designed to be a personal hub, containing both professional and personal content."
                    />
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
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
