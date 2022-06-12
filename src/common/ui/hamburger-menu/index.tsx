import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HamburgerMenu = () => {
    return (
        <label
            htmlFor="my-drawer"
            className="btn btn-ghost btn-square drawer-button h-6 xs:h-8"
        >
            <FontAwesomeIcon icon={faBars} className="h-4 w-4 xs:h-6 xs:w-6" />
        </label>
    );
};
