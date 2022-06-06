import React from 'react';

import Avatar from '@assets/peep-standing';
import { landingIconInfo } from '@common/constants';
import { HeroBanner } from '@common/ui';

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

const LandingHeroBanner = () => {
    return (
        <HeroBanner
            messages={message}
            iconInfo={landingIconInfo}
            avatar={<Avatar />}
        />
    );
};

export default LandingHeroBanner;
