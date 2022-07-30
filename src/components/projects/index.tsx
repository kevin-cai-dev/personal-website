import Image from 'next/image';
import { useMemo } from 'react';

import { ProjectPost } from '@common/types';
import { PageSection, SectionHeader, Subheading } from '@common/ui';

import { messages } from './messages';

interface Props {
    projects: ProjectPost[];
}

export const Projects = ({ projects }: Props) => {
    const sortedProjects = useMemo(
        () =>
            projects.sort(
                (a, b) => a.frontmatter.position - b.frontmatter.position
            ),
        [projects]
    );

    return (
        <PageSection>
            <SectionHeader header={messages.title} />
            <>
                {sortedProjects.map((project) => {
                    const { frontmatter, content } = project;
                    return (
                        <div
                            key={frontmatter.position}
                            className="mockup-window mb-8 bg-base-300"
                        >
                            <div className="columns-2 bg-base-200 px-4 py-8">
                                <Image
                                    src={frontmatter.imageurl}
                                    alt=""
                                    width={2667}
                                    height={4000}
                                    layout="responsive"
                                />
                                <Subheading heading={frontmatter.title} />
                                <div
                                    className="flex gap-2 py-4"
                                    id="project button links"
                                >
                                    <a
                                        href={frontmatter.github}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <button className="btn btn-outline btn-primary font-sans">
                                            {messages.github}
                                        </button>
                                    </a>
                                    {frontmatter.link && (
                                        <a
                                            href={frontmatter.link}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <button className="btn btn-outline btn-secondary font-sans">
                                                {messages.link}
                                            </button>
                                        </a>
                                    )}
                                </div>
                                {content}
                            </div>
                        </div>
                    );
                })}
            </>
        </PageSection>
    );
};
