import type { NextPage } from 'next';

import { TitleSection, PageSection } from '@common/ui';
import { getPost } from '@common/utils';
import About from '@components/about';
import LandingHeroBanner from '@components/landing-hero-banner';

interface Props {
    content: string;
}

const Home: NextPage<Props> = ({ content }) => {
    return (
        <>
            <TitleSection>
                <LandingHeroBanner />
            </TitleSection>
            <PageSection>
                <About content={content} />
            </PageSection>
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
