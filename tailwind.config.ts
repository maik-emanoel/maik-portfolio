import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        titleClamp: "clamp(2.25rem, 2.0357rem + 1.0714vw, 3rem)",
        spanClamp: "clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)",
      },
      animation: {
        rubberband: "rubberband 1s alternate ease-out",
        "spin-slow": "spin 12s linear infinite",
        slide: "slide 20s linear infinite",
        fromLeft: "fromLeft .3s forwards",
        toastProgress: "toastProgress 5s .3s forwards linear",
        scrollBounce: "scrollBounce .8s linear infinite alternate",
        fadeIn: "fadeIn .2s forwards",
        fadeOut: "fadeOut .2s forwards"
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
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },

        fromLeft: {
          "0%": { left: "50%", opacity: ".3" },
        },

        toastProgress: {
          "100%": { right: "100%" },
        },

        scrollBounce: {
          "100%": { bottom: "14.5%" },
        },

        fadeIn: {
          "0%": { scale: ".4", opacity: ".6" },
        },
        
        fadeOut: {
          "100%": {scale: ".4", opacity: "0", display: 'none'}
        },

        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        sm: { max: "475px" },
        // => @media (max-width: 475px) { ... }

        xs: { max: "375px" },
        // => @media (max-width: 375px) { ... }
      },
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)", // slate-100
        secondary: "rgb(var(--secondary) / <alpha-value>)", // slate-200
        terciary: "rgb(var(--terciary) / <alpha-value>)", // slate-300
        muted: "rgb(var(--muted) / <alpha-value>)", // slate-400
        background: "rgb(var(--background) / <alpha-value>)", // slate-900

        blue: {
          primary: "rgb(var(--blue-primary) / <alpha-value>)",
          secondary: "rgb(var(--blue-secondary) / <alpha-value>)", // blue-400
          topic: "rgb(var(--blue-topic) / <alpha-value>)", // blue-900
        },
      },
    },
  },
  plugins: [],
};
export default config;
