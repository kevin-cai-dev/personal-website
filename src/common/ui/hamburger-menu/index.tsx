import { MenuIcon } from '@heroicons/react/solid';

const HamburgerMenu = () => {
    return (
        <label
            htmlFor="my-drawer"
            className="btn btn-ghost btn-square drawer-button"
        >
            <MenuIcon className="h-6 xs:h-8" />
        </label>
    );
};

export default HamburgerMenu;
