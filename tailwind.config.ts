import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#ffffff',
        ink: '#1a1a1a',
        muted: '#6b7280',
        accent: '#ea580c',
        green: '#22c55e',
        line: 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
