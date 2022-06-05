import type { NextPage } from 'next';

import { TitleSection, PageSection, Footer } from '@common/ui';

const Home: NextPage = () => {
    return (
        <>
            <TitleSection>
                <h1 className="font-code text-8xl">WOW</h1>
            </TitleSection>
            <PageSection>hi there</PageSection>
            <Footer />
        </>
    );
};

export default Home;
