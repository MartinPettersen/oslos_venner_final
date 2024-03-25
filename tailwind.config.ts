import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'dark-grey': '#4F4F51',
      'grey' : '#D6D6D6',
      'pink': '#F2C4CE',
      'orange': '#F58F7C',
      'black': '#2C2B30',
      'soft-pink': '#E8DFE0',
      'brown': '#8F5B34',
      'light-brown': '#DAB692',
      'blue': '#8A9EA7',
      'green': '#8D9B6A'
    },
  },
  plugins: [],
};
export default config;
