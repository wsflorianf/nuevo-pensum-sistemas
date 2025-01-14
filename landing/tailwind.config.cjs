/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(99, 102, 241)",
        secondaryColor: "rgb(246, 178, 1)",
        rojoUd: "rgb(237, 27, 35)",
        primaryText: "rgb(0, 0, 0)",
        secondaryText: "rgb(74, 85, 104)",
        bgDark1: "rgb(250, 250, 250)",
        bgDark2: "rgb(242, 243, 247)",
        bgDark3: "rgb(236, 237, 242)",
        bgDark3Hover: "rgb(228, 229, 234)",
        bgDarkTransparent: "rgb(255, 255, 255, 0.7)",
        bgDarkTransparentDarker: "rgb(0,0,0,0.1)",
        bgDarkTransparentLighter: "rgb(255, 255, 255, 0.9)",
        mainBorder: "rgb(0, 0, 0, 0.1)",
        mainBorderDarker: "rgb(0, 0, 0, 0.15)",
        quoteIconColor: "rgb(104, 115, 133)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "200px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
};
