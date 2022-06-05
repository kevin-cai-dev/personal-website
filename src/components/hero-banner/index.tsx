import Avatar from '@assets/peep-standing';

import { messages } from './messages';

const HeroBanner = () => {
    return (
        <div className="flex h-full items-center">
            <div className="basis-1/2 pb-24">
                <h1 className="font-display text-2xl uppercase xs:text-5xl sm:text-4xl md:text-5xl lg:text-7xl">
                    {messages.start}{' '}
                    <span className="underline decoration-primary">
                        {messages.title}
                    </span>{' '}
                    {messages.end}{' '}
                    <span className="underline decoration-secondary">
                        {messages.specialty}
                    </span>
                </h1>
                <div className="h-2">fsadfasd</div>
            </div>
            <div className="hidden basis-1/2 sm:block">
                <Avatar />
            </div>
        </div>
    );
};

export default HeroBanner;
