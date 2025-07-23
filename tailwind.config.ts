// tailwind.config.ts
export default {
  darkMode: "class", // <-- important!
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme config here
    },
  },
  plugins: [],
};
