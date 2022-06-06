const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '450px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                display: ['Comfortaa', ...defaultTheme.fontFamily.sans],
                accent: ['Monoton', ...defaultTheme.fontFamily.sans],
                header: ['Poppins', ...defaultTheme.fontFamily.sans],
                sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
                code: ["'IBM Plex Mono'", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    // extending default themes
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=light]'
                    ],
                    primary: '#B877DB',
                    secondary: '#59E3E3',
                    accent: '#FAB795',
                },
                dark: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=dark]'
                    ],
                    primary: '#B877DB',
                    secondary: '#59E3E3',
                    accent: '#FAB795',
                    'base-100': '#1C1E26',
                    'base-content': '#d4d4d4',
                },
            },
        ],
    },
};
