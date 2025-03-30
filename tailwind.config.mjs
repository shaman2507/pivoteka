/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '960px',
      xl: '1280px',
      xlr: '1440px',
    },
    extend: {
      colors: {
        black: {
          300: 'rgba(0, 0, 0, 0.55)',
          400: 'rgba(0, 0, 0, 0.3)',
          500: 'rgba(29,29,29,0.85)',
          600: '#1A1A1A',
        },
        orange: {
          600: '#fca500',
        },
        white: {
          500: '#ebebeb',
          600: 'rgba(255, 255, 255, 0.09)',
        },
        yellow: {
          500: '#fca500',
        },
      },
    },
  },
  plugins: [],
};
