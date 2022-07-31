import type { NextPage } from 'next';
import Head from 'next/head';

import { getPost } from '@common/markdown-utils';
import { About } from '@components/about';
import { Explore } from '@components/explore';
import { LandingHeroBanner } from '@components/landing-hero-banner';

interface Props {
    content: string;
}

const Home: NextPage<Props> = ({ content }) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <LandingHeroBanner />
            <About content={content} />
            <Explore />
        </>
    );
};

export const getStaticProps = async () => {
    const { content } = getPost('about');
    return {
        props: { content },
    };
};

export default Home;
