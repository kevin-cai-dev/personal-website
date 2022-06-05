import Avatar from '@assets/peep-standing';

import { messages } from './messages';

const HeroBanner = () => {
    return (
        <div className="flex h-full items-center">
            <div className="basis-1/2 pb-24 landscape:pb-0">
                <h1 className="font-display text-2xl uppercase xs:text-4xl md:text-5xl lg:text-6xl landscape:text-lg landscape:sm:text-2xl landscape:lg:text-6xl">
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
            <div className="hidden basis-1/2 sm:block landscape:block">
                <Avatar />
            </div>
        </div>
    );
};

export default HeroBanner;
