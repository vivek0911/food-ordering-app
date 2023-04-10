/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        light: 'var(--color-primary-light)',
        lighter: 'var(--color-primary-lighter)',
        dark: 'var(--color-primary-dark)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        light: 'var(--color-secondary-light)',
        lighter: 'var(--color-secondary-lighter)',
        lightest: 'var(--color-secondary-lightest)',
        dark: 'var(--color-secondary-dark)',
      },
      cyan: {
        DEFAULT: 'var(--color-cyan)',
        light: 'var(--color-cyan-light)',
        dark: 'var(--color-cyan-light)',
      },
      gray: {
        DEFAULT: 'var(--color-gray)',
        light: 'var(--color-gray-light)',
        lighter: 'var(--color-gray-lighter)',
        lightest: 'var(--color-gray-lightest)',
        dark: 'var(--color-gray-dark)',
        darker: 'var(--color-gray-darker)',
        silver: 'var(--color-gray-silver)',
        mercury: 'var(--color-gray-mercury)',
        scorpion: 'var(--color-gray-scorpion)',
      },
      black: {
        DEFAULT: 'var(--color-black)',
        light: 'var(--color-black-light)',
        dark: 'var(--color-black-dark)',
      },
      white: 'var(--color-white)',
    },
  },
  plugins: [],
}
