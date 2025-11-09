import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        violet: "hsl(235, 69%, 61%)",
        "light-violet": "hsl(235, 82%, 77%)",
        "very-dark-blue": "hsl(219, 29%, 14%)",
        midnight: "hsl(220, 29%, 10%)",
        white: "hsl(0, 0%, 100%)",
        "light-grey": "hsl(210, 22%, 96%)",
        grey: "hsl(212, 23%, 69%)",
        "dark-grey": "hsl(214, 17%, 51%)",
      },
      backgroundImage: {
        "header-mobile": "url('/assets/mobile/bg-pattern-header.svg')",
        "header-tablet": "url('/assets/tablet/bg-pattern-header.svg')",
        "header-desktop": "url('/assets/desktop/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
