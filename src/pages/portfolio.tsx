import type { NextPage } from 'next';
import Head from 'next/head';

import { Experience } from '@components/experience';
import { PortfolioHeroBanner } from '@components/portfolio-hero-banner';

const Portfolio: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <PortfolioHeroBanner />
            <Experience />
        </>
    );
};

export default Portfolio;
