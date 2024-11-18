/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx ts,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#f0f2f5',
        secondary: '#ff813f',
        tertiary: '#222222',
        slate:{
          10: '#f1f3f4',
        },
        green:{
          50: '#30Af58',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#585858',
          50: '#141414',
          90: '#000000',
        },

        
      },
      backgroundImage:{
        here: "url('/src/assets/hero.png')",  
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '1200px',
    },
    maxWidth:{
      '10xl': '1512px',
    },
    borderRadius:{
      '5xl': '40px',
    },
  },
},
  plugins: [],
}

