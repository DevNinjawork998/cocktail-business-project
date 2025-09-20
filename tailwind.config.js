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
        // Cocktail Business Theme Colors
        'chocolate-kisses': {
          DEFAULT: '#451515',
          light: '#6B2D2D',
          dark: '#2A0F0F',
        },
        'mauvelous': {
          DEFAULT: '#EA9DAE',
          light: '#F1B4C5',
          dark: '#D67A95',
        },
        'caramel': {
          DEFAULT: '#FBE89E',
          light: '#FCF0B8',
          dark: '#F7DC7A',
        },
        'royal-orange': {
          DEFAULT: '#F89256',
          light: '#FAA670',
          dark: '#F67E3C',
        },
        'bittersweet-shimmer': {
          DEFAULT: '#C74C3D',
          light: '#D66B5E',
          dark: '#A73E32',
        },
        // Semantic colors
        primary: '#451515',
        'primary-light': '#EA9DAE',
        secondary: '#F89256',
        accent: '#FBE89E',
        danger: '#C74C3D',
        // Background colors
        background: '#ffffff',
        'background-secondary': '#fafafa',
        surface: '#ffffff',
        'surface-hover': '#f5f5f5',
        // Text colors
        foreground: '#451515',
        'foreground-muted': 'rgba(69, 21, 21, 0.7)',
        'foreground-light': 'rgba(69, 21, 21, 0.5)',
        // Border colors
        border: 'rgba(69, 21, 21, 0.2)',
        'border-light': 'rgba(69, 21, 21, 0.1)',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      boxShadow: {
        'theme': '0 1px 3px 0 rgba(69, 21, 21, 0.1), 0 1px 2px 0 rgba(69, 21, 21, 0.06)',
        'theme-lg': '0 10px 15px -3px rgba(69, 21, 21, 0.1), 0 4px 6px -2px rgba(69, 21, 21, 0.05)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
