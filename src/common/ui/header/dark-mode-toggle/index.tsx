import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { LIGHT, DARK } from '@common/constants';

const DarkModeToggle = () => {
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
        <>
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
        </>
    );
};

export default DarkModeToggle;
