/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
        custom_dark:
          "0px 16px 40px 0px rgba(49, 62, 81, 0.14);0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
      },
    },
  },
  plugins: [],
};
