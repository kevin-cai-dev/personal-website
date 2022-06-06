import { landingIconInfo } from '@common/constants';
import { DisplayIcons } from '@common/ui';

import { messages } from './messages';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer footer-center bg-base-200 p-10">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">{messages.home}</a>
                <a className="link link-hover">{messages.portfolio}</a>
                <a className="link link-hover">{messages.keyboards}</a>
            </div>
            <DisplayIcons iconInfo={landingIconInfo} />
            <div>
                <p className="uppercase">{`${messages.copyright} ${year}`}</p>
            </div>
        </footer>
    );
};
