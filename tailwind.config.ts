import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        titleClamp: 'clamp(2.25rem, 2.0357rem + 1.0714vw, 3rem)',
        spanClamp: 'clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)'
      }
    },
  },
  plugins: [],
}
export default config
