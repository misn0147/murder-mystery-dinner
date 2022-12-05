/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "576px",
            md: "960px",
            lg: "1440px",
        },
        fontFamily: {
            garamond: ["Garamond"],
        },
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#fff",
            blue: "#0000FF",
            gray: {
                100: "#f7fafc",
                // ...
                900: "#1a202c",
            },
        },
    },
    plugins: [],
};
