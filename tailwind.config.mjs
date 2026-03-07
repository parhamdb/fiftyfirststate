/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#2A3F6A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4BC72',
        },
        'gray-bg': '#F5F5F5',
        'gray-text': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        farsi: ['Vazirmatn Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
