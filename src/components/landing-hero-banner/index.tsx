import React from 'react';

import { LandingAvatar } from '@assets/peep-standing';
import { landingIconInfo } from '@common/constants';
import { HeroBanner, TitleSection } from '@common/ui';

import { messages } from './messages';

const message = (
    <>
        {messages.start}{' '}
        <span className="underline decoration-primary">{messages.title}</span>{' '}
        {messages.end}{' '}
        <span className="underline decoration-secondary">
            {messages.specialty}
        </span>
    </>
);

export const LandingHeroBanner = () => {
    return (
        <TitleSection>
            <HeroBanner
                messages={message}
                iconInfo={landingIconInfo}
                avatar={<LandingAvatar />}
            />
        </TitleSection>
    );
};
