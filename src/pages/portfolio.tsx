import type { NextPage } from 'next';
import Head from 'next/head';

import { ProjectPost } from '@common/types';
import { getPosts } from '@common/utils';
import { Experience } from '@components/experience';
import { PortfolioHeroBanner } from '@components/portfolio-hero-banner';
import { Projects } from '@components/projects';

interface Props {
    posts: ProjectPost[];
}

const Portfolio: NextPage<Props> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <PortfolioHeroBanner />
            <Experience />
            <Projects projects={posts} />
        </>
    );
};

export const getStaticProps = async () => {
    const posts = getPosts('projects');
    return {
        props: { posts },
    };
};

export default Portfolio;
