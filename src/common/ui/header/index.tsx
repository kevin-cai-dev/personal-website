import Link from 'next/link';
import React from 'react';

import { Logo } from '@assets/logo';
import { DarkModeToggle, HamburgerMenu } from '@common/ui';

export const Header = () => {
    return (
        <div className="navbar absolute top-0 left-0 w-full px-4 sm:px-16">
            <div className="navbar-start">
                <HamburgerMenu />
            </div>
            <div className="navbar-center">
                {/* hacky workaround to use functional components with next/link */}
                <Link href="/" passHref>
                    <a className="link">
                        <Logo />
                    </a>
                </Link>
            </div>
            <div className="navbar-end">
                <DarkModeToggle />
            </div>
        </div>
    );
};
