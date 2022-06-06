import { SunIcon, MoonIcon } from '@heroicons/react/solid';
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
        <button className="btn btn-ghost btn-circle">
            {theme === DARK ? (
                <MoonIcon
                    className="h-6 fill-base-content xs:h-8"
                    onClick={onClick}
                />
            ) : (
                <SunIcon
                    className="h-6 fill-base-content xs:h-8"
                    onClick={onClick}
                />
            )}
        </button>
    );
};
