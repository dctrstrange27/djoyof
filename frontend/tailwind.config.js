module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',

  ],
  darkMode: 'class',
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
    colors:{
        P_bg:"#f7f9fb",
        Light_normal:'#383838',
        Light_shadow:'#2626262c',
        Dark_nav_bg:"#141518d3",
        Light_nav_bg:"#e9e7e7",
        Tabs_bg:"#d4d2d2",
        Aside_icon:"#8a340b",
        product_bg:"#f2f0eee6",
        product_lbl_bg:"#fffafad3",
        dark_del_btn:"#C90915",
        light_del_btn:"#de5a63",
        
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
