import type { NextPage } from 'next';
import Head from 'next/head';

import { getPosts } from '@common/markdown-utils';
import { ProjectPost } from '@common/types';
import { ContactForm } from '@components/contact-form';
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
            <ContactForm />
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
