/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5acef4",
        
"secondary": "#d5a9f2",
        
"accent": "#b1f7a3",
        
"neutral": "#1C1B22",
        
"base-100": "#E7EEF4",
        
"info": "#86A4E4",
        
"success": "#4BD8C7",
        
"warning": "#EFB225",
        
"error": "#F85464",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
