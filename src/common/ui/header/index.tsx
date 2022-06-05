import React from 'react';

import Logo from '@assets/logo';
import { DarkModeToggle, HamburgerMenu } from '@common/ui';

const Header = () => {
    return (
        <div className="navbar bg-base-100 px-4 sm:px-16">
            <div className="navbar-start">
                <HamburgerMenu />
            </div>
            <div className="navbar-center">
                <Logo />
            </div>
            <div className="navbar-end">
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Header;
