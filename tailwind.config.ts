import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        'base-50': 'var(--color-base-50)',
        'base-100': 'var(--color-base-100)',
        'base-200': 'var(--color-base-200)',
        'base-300': 'var(--color-base-300)',
        'base-400': 'var(--color-base-400)',
        'base-500': 'var(--color-base-500)',
        'base-600': 'var(--color-base-600)',
        'base-700': 'var(--color-base-700)',
        'base-800': 'var(--color-base-800)',
        'base-900': 'var(--color-base-900)',
        'base-950': 'var(--color-base-950)',
      },

      fontFamily: {
        courier_prime: ["var(--font-courier-prime)"]
      },

      boxShadow: {
        card: '0.75vmin 0.75vmin var(--color-base-950);'
      },

      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(calc(-100% - 20px))' },
        },

        'reverse-infinite-scroll': {
          '0%': { transform: 'translateX(calc(-100% - 20px))' },
          '100%': { transform: 'translateX(20px)' },
        }
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
        'reverse-infinite-scroll': 'reverse-infinite-scroll 20s linear infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;
