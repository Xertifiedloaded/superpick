/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        redBg: "linear-gradient(90.15deg, #981664 35.4%, #f1275a 83.54%)",
        blueBg:
          "linear-gradient(96.18deg, rgba(103, 136, 255, .69) 9.89%, rgba(85, 74, 179, .69) 91.83%)",
        bgClipText: "linear-gradient(89.59deg,#6788ff 22.6%,#c5ffe5 78.98%)",
        redBgText: " linear-gradient(90.15deg, #981664 35.4%, #f1275a 83.54%)",
        "text-gradient":
          "linear-gradient(89.59deg, #6788ff 22.6%, #c5ffe5 78.98%)",
        "btn-gradient": "linear-gradient(to bottom right,#f1f5f9)",
        "btn-gradient": "linear-gradient(to bottom right,#f1f5f9)",
      },
      backgroundColor: {
        bodyBg: "rgba(14, 7, 67, 1)",
      },
      fontWeight: {
        900: 900,
        800: 800,
        700: 700,
        600: 600,
        500: 500,
        400: 400,
        300: 300,
      },

   
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "font-sora": ["Sora", "sans-serif"],
        'poppin': ["Poppins", "sans-serif"],
        "Kumbh-Sans": ["Kumbh Sans", "sans-serif"],
        "font-dancing": ["Dancing Script", "cursive"],
        "font-jost": ["Jost", "sans-serif"],
        "noto": ["Noto Sans", "sans-serif"],
      },
      screens: {
        "xs": "200px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};