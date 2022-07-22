import React from 'react';

import { PageSection, SectionHeader } from '@common/ui';

import { messages } from './messages';

interface CardProps {
    location: string;
    title: string;
    startYear: string;
    endYear?: string;
}

const Card = ({ location, title, startYear, endYear }: CardProps) => {
    return (
        <div className="flex h-full items-center justify-between rounded-3xl bg-primary p-4">
            <div className="min-w-0 max-w-full grow">
                <div className="text-md font-header font-bold uppercase tracking-wide md:text-2xl">
                    {location}
                </div>
                <div className="text-sm md:text-base">{title}</div>
            </div>
            <div className="min-w-0 max-w-full font-code font-semibold">
                {endYear ? `${startYear} - ${endYear}` : `${startYear} ~`}
            </div>
        </div>
    );
};

export const Experience = () => {
    const { atlassian, university } = messages;
    return (
        <PageSection>
            <SectionHeader header={messages.title} />
            <div className="grid grid-cols-12 grid-rows-2 gap-2">
                <div className="col-start-1 col-end-13 row-start-1 lg:col-start-9 lg:col-end-13">
                    <Card
                        location={atlassian.location}
                        title={atlassian.title}
                        startYear={atlassian.startYear}
                    />
                </div>
                <div className="col-start-1 col-end-13 row-start-2 lg:col-start-1 lg:col-end-9">
                    <Card
                        location={university.location}
                        title={university.title}
                        startYear={university.startYear}
                        endYear={university.endYear}
                    />
                </div>
            </div>
        </PageSection>
    );
};
