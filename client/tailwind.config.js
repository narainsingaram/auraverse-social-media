/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add your custom theme styles here
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      // ... other theme customizations
    },
  },
  plugins: []
};