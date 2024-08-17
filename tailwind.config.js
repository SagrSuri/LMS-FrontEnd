/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // This adds DaisyUI to your Tailwind CSS configuration
    require("@tailwindcss/line-clamp"), // This adds the Tailwind CSS Line Clamp plugin
  ],
};


