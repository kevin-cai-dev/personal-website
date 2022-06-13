import Link from 'next/link';

import { landingIconInfo } from '@common/constants';
import { pageLinksInfo } from '@common/constants';
import { DisplayIcons } from '@common/ui';

import { messages } from './messages';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer footer-center bg-base-200 p-10">
            <div className="grid grid-flow-col gap-4">
                {pageLinksInfo.map((info, index) => {
                    return (
                        <Link href={info.href} key={`${info.name} ${index}`}>
                            <span className="link link-hover uppercase">
                                {info.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
            <DisplayIcons iconInfo={landingIconInfo} />
            <div>
                <p className="uppercase">{`${messages.copyright} ${year}`}</p>
            </div>
        </footer>
    );
};
