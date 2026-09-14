import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        surface: '#0B0B0C',
        elevated: '#121214',
        line: 'rgba(255,255,255,0.10)',
        text: '#F5F5F5',
        muted: '#929292',
        blue: '#2563EB',
        orange: '#F59E0B',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1440px',
      },
      screens: {
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
