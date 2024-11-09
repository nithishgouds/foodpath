/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        helvetica: ['Helvetica W01 Light', 'Helvetica', 'Arial', 'sans-serif'],
        worksans:['Work Sans', 'sans-serif'],
        marcellus: ['Marcellus', 'sans-serif'],
      },
      colors: {'custom-blue' : '#1C2E3B',
        'customHoverColor' : '#CA8263',
        "customtextcolor" : '#1C2E3B',
      }

    },
  },
  plugins: [],
}