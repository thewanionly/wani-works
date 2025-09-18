/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        buttonFocusRing: '0px 0px 0px 4px rgb(68 76 231 / 0.12)',
        destructiveBtnFocusRing: '0px 0px 0px 4px rgb(217 45 32 / 0.12)',
      },
    },
  },
  plugins: [],
  presets: [],
};
