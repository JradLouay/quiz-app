/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
      },
    },
  },
  plugins: [],
};
