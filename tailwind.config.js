
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    container:{
      center:true,
 screens:{
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1280px',
 }
  
    },

    extend: {
      colors:{
        'main':'#2C3E50',
        'sec':'#1ABC9C',
      'footer':'#1A252F'
      },
   

    },
  },
  plugins: [

]
}

