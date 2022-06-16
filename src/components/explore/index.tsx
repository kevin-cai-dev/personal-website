import Link from 'next/link';

import { exploreLinksInfo } from '@common/constants';
import { PageSection, SectionHeader } from '@common/ui';

import { messages } from './messages';

export const Explore = () => {
    return (
        <PageSection>
            <SectionHeader header={messages.title} />
            <div className="flex flex-wrap justify-center gap-4">
                {exploreLinksInfo.map((info, index) => {
                    return (
                        <Link href={info.href} key={`${info.name} ${index}`}>
                            <div
                                className="h-24 grow basis-full bg-base-100 bg-cover bg-no-repeat xs:h-36 xs:basis-5/12 md:h-48 lg:h-64"
                                style={{
                                    backgroundImage: `url(${info.imgPath})`,
                                }}
                            >
                                <div className="flex h-full w-full cursor-pointer justify-center backdrop-blur-sm backdrop-brightness-50 hover:underline hover:decoration-primary">
                                    <h2 className="font-heading self-center text-2xl uppercase text-white sm:text-4xl">
                                        {info.name}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </PageSection>
    );
};
