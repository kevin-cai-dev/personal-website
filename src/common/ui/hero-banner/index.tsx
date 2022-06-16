import { ReactNode } from 'react';

import { IconInfo } from '@common/constants';
import { DisplayIcons } from '@common/ui';

interface Props {
    message: ReactNode;
    iconInfo: IconInfo[];
    avatar: ReactNode;
}

export const HeroBanner = ({ message, iconInfo, avatar }: Props) => {
    return (
        <>
            <div className="pb-24 sm:basis-1/2 landscape:pb-0">
                <h1 className="pb-4 font-display text-2xl uppercase xs:text-4xl md:pb-8 md:text-5xl lg:text-6xl landscape:pb-4 landscape:text-lg landscape:sm:text-2xl landscape:lg:text-6xl">
                    {message}
                </h1>
                <DisplayIcons iconInfo={iconInfo} />
            </div>
            {avatar}
        </>
    );
};
