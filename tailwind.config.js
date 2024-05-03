/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-color))',
        container: 'rgb(var(--container-color))',
        stroke: 'var(--stroke-color)',
        primary: 'var(--primary-color)',
        title: 'var(--title-color)',
        text: 'var(--text-color)',
        subtext: 'var(--text-secondary)',
      },
      backgroundImage: {
        'dots': 'var(--dots)',
        'endless-clouds': "url('../assets/endless-clouds.svg')"
      },
    }
  },
  plugins: [require('tailwind-scrollbar-hide'), require("flowbite/plugin"),],
};
