/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {},
    colors: {
      'primary': ' #20404a',
      'white': '	#FFFFFF',
      'blue': '	 #04a8e8',
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}