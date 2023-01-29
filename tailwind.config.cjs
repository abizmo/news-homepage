/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "soft-orange": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",
      "off-white": "hsl(36, 100%, 99%)",
      "grayish-blue": "hsl(233, 8%, 79%)",
      "dark-grayish-blue": "hsl(236, 13%, 42%)",
      "very-dark-blue": "hsl(240, 100%, 5%)",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: [".6875rem", "1.5"],
      sm: [".875rem", { lineHeight: "1.1", letterSpacing: "0.3em" }],
      base: [".9375rem", "1.7"],
      lg: ["1rem", "1.1"],
      xl: ["1.125rem", { lineHeight: "1.1", letterSpacing: "0.01em" }],
      "2xl": ["1.25rem", { lineHeight: "1.1", letterSpacing: "0.01em" }],
      "3xl": ["2rem", "1.1"],
      "4xl": ["2.5rem", "1.1"],
      "5xl": ["3.5rem", "1.1"],
    },
    screens: {
      sm: "640px",
      lg: "1110px",
    },
    extend: {
      letterSpacing: {
        wide: "0.01em",
      },
    },
  },
  plugins: [],
};
