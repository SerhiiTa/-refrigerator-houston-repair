/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1D6FF2',
          dark: '#0A1628',
          navy: '#0D2045',
          light: '#F0F6FF',
          gray: '#F7F9FC',
        },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
