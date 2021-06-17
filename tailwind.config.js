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
                    light: { DEFAULT: "#30CFD0", light: "#acecec" },
                    main: { DEFAULT: "#4A729D", light: "#dce5ef" },
                    dark: { DEFAULT: "#330867", light: "#c8a0f8" },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
