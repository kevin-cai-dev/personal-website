import type { NextPage } from 'next';

import { Header, TitleSection, PageSection } from '@common/ui';
import HeroBanner from '@components/hero-banner';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <TitleSection>
                <HeroBanner />
            </TitleSection>
            <PageSection>hi there</PageSection>
        </>
    );
};

export default Home;
