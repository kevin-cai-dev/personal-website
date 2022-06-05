const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
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
                    primary: '#8931B9',
                    secondary: '#1D8991',
                    accent: '#F6661E',
                },
                dark: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=dark]'
                    ],
                    primary: '#B877DB',
                    secondary: '#25B2BC',
                    accent: '#FAB795',
                    'base-100': '#1C1E26',
                },
            },
        ],
    },
};
