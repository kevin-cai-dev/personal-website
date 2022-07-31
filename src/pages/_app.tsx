import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { Header, Footer, Drawer } from '@common/ui';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    // cheeky hack to get scrollToTop working with DaisyUI drawer
    useEffect(() => {
        document.querySelector('.drawer-content')?.scrollTo(0, 0);
    }, [router]);

    return (
        <ThemeProvider enableSystem={false}>
            <Toaster position="bottom-left" reverseOrder={false} />
            <Drawer>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Drawer>
        </ThemeProvider>
    );
}

export default MyApp;
