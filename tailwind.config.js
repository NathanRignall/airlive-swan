module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
        extend: {
            colors: {
                logo: {
                    light: { DEFAULT: "#30CFD0", light: "#82e3e3", dark: "#1c7d7d" },
                    main: { DEFAULT: "#4A729D", light: "#97b2ce", dark: "#314c68" },
                    dark: { DEFAULT: "#330867", light: "#c8a0f8", dark: "#6910d5" },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
