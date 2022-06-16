import { PortfolioAvatar } from '@assets/peep-coding';
import { portfolioIconInfo } from '@common/constants';
import { HeroBanner, TitleSection } from '@common/ui';

import { messages } from './messages';

export const PortfolioHeroBanner = () => {
    return (
        <TitleSection>
            <HeroBanner
                message={
                    <span className="underline decoration-primary">
                        {messages.title}
                    </span>
                }
                iconInfo={portfolioIconInfo}
                avatar={<PortfolioAvatar />}
            />
        </TitleSection>
    );
};
