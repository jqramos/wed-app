/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["pf-marlet-display", ...defaultTheme.fontFamily.sans],
        serif: ["canto-pen", ...defaultTheme.fontFamily.serif],
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: "#fdf3d6",
        secondary: "#9a916f",
        tertiary: "#75997f",
        neutral: "#949088",

        //primary color
        "primary-50": "#f6edeb",
        "primary-100": "#e4c6c1",
        "primary-200": "#d7aaa3",
        "primary-300": "#c58478",
        "primary-400": "#ba6c5e",
        "primary-500": "#a94736",
        "primary-600": "#9a4131",
        "primary-700": "#783226",
        "primary-800": "#5d271e",
        "primary-900": "#471e17",

        // secondary colors
        "secondary-50": "#f2f3ef",
        "secondary-100": "#d7dace",
        "secondary-200": "#c4c8b6",
        "secondary-300": "#a9af94",
        "secondary-400": "#989f80",
        "secondary-500": "#7e8760",
        "secondary-600": "#737b57",
        "secondary-700": "#596044",
        "secondary-800": "#454a35",
        "secondary-900": "#353928",

        // neutral colors
        "neutral-50": "#fffcfa",
        "neutral-100": "#fef7f0",
        "neutral-200": "#fef3e9",
        "neutral-300": "#fdeddf",
        "neutral-400": "#fde9d9",
        "neutral-500": "#fce4cf",
        "neutral-600": "#e5cfbc",
        "neutral-700": "#b3a293",
        "neutral-800": "#8b7d72",
        "neutral-900": "#6a6057",

        // grey colors
        "grey-50": "#ebebeb",
        "grey-100": "#c1c0c0",
        "grey-200": "#a3a2a2",
        "grey-300": "#797777",
        "grey-400": "#5f5d5d",
        "grey-500": "#373434",
        "grey-600": "#322f2f",
        "grey-700": "#272525",
        "grey-800": "#1e1d1d",
        "grey-900": "#171616",
      },
      fontSize: {
        eyebrow: ["12px", "16.8px"],
        base: ["16px", "22.4px"],
        p1: ["21px", "29.4px"],
        p2: ["27px", "37.8px"],
        h1: ["80px", "112px"],
        h2: ["61px", "85.4px"],
        h3: ["47px", "65.8px"],
        h4: ["36px", "50.4px"],
      },
      spacing: {
        s1: "8px",
        s2: "16px",
        s3: "24px",
        s4: "32px",
        s5: "40px",
        s6: "48px",
        s7: "56px",
        s8: "64px",
        s9: "72px",
        s10: "80px",
        s11: "88px",
        s12: "96px",
      },
      maxWidth: {
        logo: "246px",
        nav: "390px",
        maximum: "1100px",
      },
      backgroundImage: {
        gradient1:
          "linear-gradient(180deg, rgba(23, 22, 22, 0.21) 0%, rgba(23, 22, 22, 0.67) 56.77%, #171616 100%)",
      },
      zIndex: {
        ground: "0",
        "below-ground": "-1",
        "below-ground2": "-10",
        "above-ground": "10",
        "above-ground2": "100",
        navigation: "999",
        "above-all": "9999",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".wrapper": {
          "@apply mx-auto grid max-w-maximum grid-cols-4 gap-x-s2 px-s3 md:grid-cols-6 lg:grid-cols-12 lg:gap-x-s3 lg:px-s2":
            {},
        },
      });
    }),
  ],
};
