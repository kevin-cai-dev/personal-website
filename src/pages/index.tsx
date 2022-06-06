import type { NextPage } from 'next';

import { TitleSection, PageSection } from '@common/ui';
import LandingHeroBanner from '@components/landing-hero-banner';

const Home: NextPage = () => {
    return (
        <>
            <TitleSection>
                <LandingHeroBanner />
            </TitleSection>
            <PageSection>hi there</PageSection>
        </>
    );
};

export default Home;
