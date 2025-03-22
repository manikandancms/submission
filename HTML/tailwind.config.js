 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary-color)' ,
          secondary: 'var(--secondary-color)'
          
        }
      },
    },
    plugins: [],
  }