/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line scans all your React components
  ],
  theme: {
    extend: {
      colors: {
        // Adding the orange-accented theme
        'cn-orange': '#F78F1E', 
        'cn-dark-blue': '#1F3042',
      }
    },
  },
  plugins: [],
}