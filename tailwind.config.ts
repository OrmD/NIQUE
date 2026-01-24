import type { Config } from "tailwindcss";

export default {
    darkMode: ['class'],
    content: [ './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
          primary:{
              DEFAULT: 'var(--color-primary)',
          },
          secondary:{
              DEFAULT: 'var(--color-secondary)',
          },
          dark:{
              DEFAULT: 'var(--color-dark)',
          },
          white:{
              DEFAULT: 'var(--color-white)',
              '80': 'var(--color-white-80)',
              '10': 'var(--color-white-10)',
          },
          background: {
              DEFAULT: 'var(--color-background)',
          },
        gray:{
          DEFAULT: 'var(--color-gray-hover)',
        },
        border: 'var(--color-white-10)',
      },
      maxWidth:{
        vw: '[100vw]',
        '50vw': '[50vw]',
      },
      maxHeight:{
        vh: '[100vh]',
        '50vh': '[50vh]',
      },

      fontSize: {
          sm: '14px',
          base: '16px',
          lg: '18px',
          xl: '20px',
          '24s': '24px',
          '32s': '32px',
          '40s': '40px',
          '64s': '64px',
          '80s': '80px',
          '112s': '112px',
          '160s': '160px',
      },
        borderRadius: {
            '6': 'var(--border-radius-6)',
            '10': 'var(--border-radius-10)',
            '16': 'var(--border-radius-16)',
            '100': 'var(--border-radius-100)',
            '500': 'var(--border-radius-500)',

        },
        screens: {
            mini: '375px',
            mobile: '576px',
            tablet: '768px',
            laptop: '1024px',
            medium: '1280px',
            desktop: '1440px',
            large: '1600px',
        },
      keyframes:{
        slideBottomToTop: {
          '0%': { transform: 'translateY(10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideTopToBottom: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(10%)', opacity: '0' },
        },
      },
      animation: {
        slideBottomToTop: 'slideBottomToTop 0.5s ease-in-out forwards',
        slideTopToBottom: 'slideTopToBottom 0.4s ease-out forwards',
      }
    },
  },
  plugins: [],
} satisfies Config;
