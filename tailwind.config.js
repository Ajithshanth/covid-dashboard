/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d222c",
        secondary: "#28293e",
        lightskyblue: "#8ca2ff",
        royalblue: "#4166ff",
        mediumturquoise: "#41cbe2",
        khaki: "#ffe974",
        tomato: "#ff3b3b",
        lightgreen: "#62fc84",
      },
      fontFamily: {},
      fontSize: {
        xss: ".55rem",
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".275rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      screens: {
        xss: "300px",
        xs: "400px",
        // => @media (min-width: 640px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
