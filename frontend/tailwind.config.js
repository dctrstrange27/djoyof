module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',

  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
        fontFamily:{
          dm_mono:  "'DM Mono', monospace",
          pop:"'Poppins', sans-serif",
          nuni: "'Nunito', sans-serif"
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
