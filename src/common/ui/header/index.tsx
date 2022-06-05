import { MenuIcon } from '@heroicons/react/solid';
import React from 'react';

import Logo from '@assets/logo';

import DarkModeToggle from './dark-mode-toggle';

const Header = () => {
    return (
        <div className="navbar bg-base-100 px-4 sm:px-16">
            <div className="navbar-start">
                <label
                    htmlFor="my-drawer"
                    className="btn btn-square drawer-button btn-ghost"
                >
                    <MenuIcon className="h-6 xs:h-8" />
                </label>
            </div>
            <div className="navbar-center">
                <Logo />
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <DarkModeToggle />
                </button>
            </div>
        </div>
    );
};

export default Header;
