import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        primary: '#000000', 
        lightDark: '#3D3D3D',
        secondary: '#FAFAFA',
        ternary: '#ffffff',
      },
      headingFontSize: {
        'heading-xl': '2.5rem',
        'heading-lg': '2rem',
        'heading-md': '1.75rem',
        'heading-sm': '1.5rem',
      },
      fontFamily: {
        'helvetica': ['helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
