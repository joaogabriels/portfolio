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

        'orange-50': 'var(--color-orange-50)',
        'orange-100': 'var(--color-orange-100)',
        'orange-200': 'var(--color-orange-200)',
        'orange-300': 'var(--color-orange-300)',
        'orange-400': 'var(--color-orange-400)',
        'orange-500': 'var(--color-orange-500)',
        'orange-600': 'var(--color-orange-600)',
        'orange-700': 'var(--color-orange-700)',
        'orange-800': 'var(--color-orange-800)',
        'orange-900': 'var(--color-orange-900)',
        'orange-950': 'var(--color-orange-950)',

        'yellow-50': 'var(--color-yellow-50)',
        'yellow-100': 'var(--color-yellow-100)',
        'yellow-200': 'var(--color-yellow-200)',
        'yellow-300': 'var(--color-yellow-300)',
        'yellow-400': 'var(--color-yellow-400)',
        'yellow-500': 'var(--color-yellow-500)',
        'yellow-600': 'var(--color-yellow-600)',
        'yellow-700': 'var(--color-yellow-700)',
        'yellow-800': 'var(--color-yellow-800)',
        'yellow-900': 'var(--color-yellow-900)',
        'yellow-950': 'var(--color-yellow-950)',

        'red-50': 'var(--color-red-50)',
        'red-100': 'var(--color-red-100)',
        'red-200': 'var(--color-red-200)',
        'red-300': 'var(--color-red-300)',
        'red-400': 'var(--color-red-400)',
        'red-500': 'var(--color-red-500)',
        'red-600': 'var(--color-red-600)',
        'red-700': 'var(--color-red-700)',
        'red-800': 'var(--color-red-800)',
        'red-900': 'var(--color-red-900)',
        'red-950': 'var(--color-red-950)',

        'purple-50': 'var(--color-purple-50)',
        'purple-100': 'var(--color-purple-100)',
        'purple-200': 'var(--color-purple-200)',
        'purple-300': 'var(--color-purple-300)',
        'purple-400': 'var(--color-purple-400)',
        'purple-500': 'var(--color-purple-500)',
        'purple-600': 'var(--color-purple-600)',
        'purple-700': 'var(--color-purple-700)',
        'purple-800': 'var(--color-purple-800)',
        'purple-900': 'var(--color-purple-900)',
        'purple-950': 'var(--color-purple-950)',
      },

      fontFamily: {
        sans: ['var(--font-inter)'],
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
        },

        'gradient-text': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
        'reverse-infinite-scroll': 'reverse-infinite-scroll 20s linear infinite',
        'gradient-text': 'gradient-text 6s ease infinite',
      },
    },

    container: {
      center: true,

      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px",
      },

      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    }
  },
  plugins: [],
} satisfies Config;
