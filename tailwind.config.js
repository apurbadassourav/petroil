/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif', ],
        'Rob': [ 'Roboto', 'sans-serif', ],
        'open': [ 'Roboto', 'sans-serif', ]
       
    },
    colors:{
     'primary' : '#F40404',
     'overlay' :'rgba(0, 0, 0, 0.60);',
     'gray' :'rgba(255, 255, 255, 0.50);'
        
    },

    maxWidth: {
      'container': '1144px',
    },
    backgroundImage: {
      'Banner': "url('./src/assets/banner.png')",
      'Blogimg': "url('./src/assets/Blogimg.png')",
      'services1': "url('./src/assets/Services1.png')",
      'services2': "url('./src/assets/Services2.png')",
      'services3': "url('./src/assets/Services3.png')",
      'more1': "url('./src/assets/more1.png')",
      'more2': "url('./src/assets/more2.png')",
      'more3': "url('./src/assets/more3.png')",
      'Maps': "url('./src/assets/Maps.png')",
     
     },
  },
},
  plugins: [],
};



