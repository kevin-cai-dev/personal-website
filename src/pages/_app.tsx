import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { Footer, Drawer } from '@common/ui';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={false}>
            <Drawer>
                <Component {...pageProps} />
                <Footer />
            </Drawer>
        </ThemeProvider>
    );
}

export default MyApp;
