module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            'light', // built-in theme
            'dark', // built-in theme
            {
                mytheme: {                          // custom theme
                    "primary": "#570df8",
                    "primary-focus": "#4506cb",
                    "primary-content": "#ffffff",
                    // other color settings...
                },
            },
        ],
    },
    plugins: [
        require('daisyui'),
    ],
}
