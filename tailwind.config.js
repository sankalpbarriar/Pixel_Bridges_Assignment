/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        11: '11px', 
      },
      borderColor: {
        customBlue: '#0F1B29', 
      },
      fontFamily: {
        cheesburga: ['CHEESEBURGA', 'sans-serif'],
      },
      backgroundImage: {
        "home-bg": "url('../../public/bg1.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alabayGradient: 'linear-gradient(180deg, #FFF280 0%, #7EFF5E 100%)',
        customBlue: '#0F1B29',
      },
    },
  },
  plugins: [],
};
