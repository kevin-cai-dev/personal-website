import Image from 'next/image';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import { ProjectPost } from '@common/types';
import { PageSection, SectionHeader, Subheading } from '@common/ui';

import { messages } from './messages';
import { ProjectLinks } from './project-links';
import { ProjectTech } from './project-tech';

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
                    const {
                        github,
                        link,
                        position,
                        imageurl,
                        title,
                        technologies,
                    } = frontmatter;

                    return (
                        <div
                            key={position}
                            className="mockup-window mb-8 bg-base-300"
                        >
                            <div className="columns-2 bg-base-200 px-4 py-8">
                                <Image
                                    src={imageurl}
                                    alt=""
                                    width={2667}
                                    height={4000}
                                    layout="responsive"
                                />
                                <>
                                    <Subheading heading={title} />
                                    <ProjectLinks github={github} link={link} />
                                    <ReactMarkdown className="prose prose-sm max-w-none basis-1/2 justify-self-center xs:prose-base lg:prose-lg">
                                        {content}
                                    </ReactMarkdown>
                                    <ProjectTech technologies={technologies} />
                                </>
                            </div>
                        </div>
                    );
                })}
            </>
        </PageSection>
    );
};
