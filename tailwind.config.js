/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        variable:['var(--font-font)'],
        marriware:['--font-font-marriware'],
        sweet:['--font-font-sweet'],
        ananda:['--font-font-ananda']
      },
      colors: {
        'golden': '#D0B256',
        'blue1': '#2e3a51',
        'lead-color':'#2B292A',
        'grean':'#1A3728'
      },
    },
    screens: {
      'xs' : '510px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'md2' :"796px",
       'md3' : '835px', 
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  
  plugins: [
    require('tailwindcss-animated'),
  ],
  
}
