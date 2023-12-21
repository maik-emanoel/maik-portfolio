import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        titleClamp: "clamp(2.25rem, 2.0357rem + 1.0714vw, 3rem)",
        spanClamp: "clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)",
      },
      animation: {
        rubberband: "rubberband 1s alternate ease-out",
        "spin-slow": "spin 12s linear infinite",
        slide: 'slide 20s linear infinite'
      },
      keyframes: {
        rubberband: {
          "0%": {
            transform: "scaleX(1)",
          },
          "40%": {
            transform: "scaleX(1.12) scaleY(0.75)",
          },
          "55%": {
            transform: "scaleX(0.85) scaleY(1)",
          },
          "65%": {
            transform: "scaleX(1.09) scaleY(0.85)",
          },
          "75%": {
            transform: "scaleX(0.9)  scaleY(1)",
          },
          "90%": {
            transform: "scaleX(1.05) scaleY(0.95)",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
          },
        },

        slide: {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)'}
        }
      },
    },
  },
  plugins: [],
};
export default config;
