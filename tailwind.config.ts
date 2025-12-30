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
        border: 'var(--color-white-10)',
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
    },
  },
  plugins: [],
} satisfies Config;
