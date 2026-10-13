import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#061225',
        cyanvolt: '#17c7ff',
        electric: '#5d75ff',
      },
      boxShadow: {
        glow: '0 0 32px rgba(23, 199, 255, .25)',
      },
    },
  },
  plugins: [],
};

export default config;
