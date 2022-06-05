import type { NextPage } from 'next';

import { TitleSection, PageSection } from '@common/ui';

const Home: NextPage = () => {
    return (
        <>
            <TitleSection>
                <h1 className="font-code text-8xl">WOW</h1>
            </TitleSection>
            <PageSection>hi there</PageSection>
        </>
    );
};

export default Home;
