import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { LIGHT, DARK } from '@common/constants';

export const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    const onClick = () => {
        setTheme(theme === LIGHT ? DARK : LIGHT);
    };

    if (!loaded) {
        return null;
    }

    return (
        <button
            className="btn btn-ghost btn-circle h-6 fill-base-content xs:h-8"
            onClick={onClick}
        >
            {theme === DARK ? (
                <FontAwesomeIcon
                    icon={faMoon}
                    className="h-4 w-4 xs:h-6 xs:w-6"
                />
            ) : (
                <FontAwesomeIcon
                    icon={faSun}
                    className="h-4 w-4 xs:h-6 xs:w-6"
                />
            )}
        </button>
    );
};
