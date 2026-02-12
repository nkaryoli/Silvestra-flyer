/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./*{html,js}", "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#e77a55",
                "primary-foreground": "#100D0C",
                secondary: "#1a110e",
                "bg-light": "#171311",
                "bg-dark": "#100D0C",
                "background-dark": "#100D0C",
                "surface-dark": "#171311",
                border: "#4a4a4a",
                card: "#1f1a18",
                text: "#ffffff",
                "text-light": "#888686",
            },
            fontFamily: {
                headerText: ["Playfair Display", "sans-serif"],
                bodyText: ["Inter", "sans-serif"],
                display: ["DM Serif Display", "serif"],
                sans: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                sm: "0.25rem",
                md: "0.35rem",
                lg: "0.45rem",
                xl: "0.65rem",
            },
        },
    },
};
