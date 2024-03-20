/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
      playfair: ['Playfair Display', 'serif'],
    },
    colors: {
      colorGrey0: '#ffffff',
      colorGrey50: '#f3f4f6',
      colorGrey100: '#e5e7eb',
      colorGrey200: '#d1d5db',
      colorGrey300: '#9ca3af',
      colorGrey400: '#6b7280',
      colorGrey500: '#4b5563',
      colorGrey600: '#374151',
      colorGrey700: '#1f2937',
      colorGrey800: '#111827',
      colorGrey900: '#18212f',

      colorRed: '#ff0000',

      colorBrand1: '#1992D2',
      colorBrand2: '#2c6cbc',
      colorBrand3: '#3C4494',
    },
    filter: {
      // Add grayscale filter
      grayscale: 'grayscale(100%)',
    },
    extend: {},
  },
  plugins: [],
};
