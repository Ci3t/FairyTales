/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        "mainKidColor": '#F86052'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
