module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',

  ],
  theme: {
    screens: {
      "sss": '360px',
      "ss": '578px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
        fontFamily:{
          dm_mono:  "'DM Mono', monospace",
          pop:"'Poppins', sans-serif",
          nuni: "'Nunito', sans-serif",
          nsans:"'Nunito Sans', sans-serif"
        },
        
      },
  },
  plugins: [
    require('tailwind-scrollbar'),
    
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
