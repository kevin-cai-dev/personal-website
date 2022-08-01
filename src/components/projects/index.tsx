import Image from 'next/image';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import { ProjectPost } from '@common/types';
import { PageSection, SectionHeader } from '@common/ui';

import { messages } from './messages';
import { ProjectHeading } from './project-heading';
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
            <div className="flex flex-col gap-8">
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
                            className="mockup-window bg-base-300"
                        >
                            <div className="flex gap-4 bg-base-200 px-4 py-8">
                                <div className="relative hidden w-1/2 sm:block">
                                    <Image
                                        src={imageurl}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                <div className="pr-4 sm:w-1/2">
                                    <ProjectHeading heading={title} />
                                    <ProjectLinks github={github} link={link} />
                                    <ReactMarkdown className="prose prose-sm max-w-none basis-1/2 justify-self-center xs:prose-base lg:prose-lg">
                                        {content}
                                    </ReactMarkdown>
                                    <ProjectTech technologies={technologies} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </PageSection>
    );
};
