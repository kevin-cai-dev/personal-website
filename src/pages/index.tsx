import type { NextPage } from 'next';

import { getPost } from '@common/utils';
import { About } from '@components/about';
import { Explore } from '@components/explore';
import { LandingHeroBanner } from '@components/landing-hero-banner';

interface Props {
    content: string;
}

const Home: NextPage<Props> = ({ content }) => {
    return (
        <>
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
