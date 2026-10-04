import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D1B',
          900: '#0A1628',
          800: '#0F2038',
          700: '#16304F',
          600: '#1F4066',
        },
        gold: {
          300: '#FFD65C',
          400: '#FFC72E',
          500: '#F7B500',
          600: '#DDA200',
          700: '#B98700',
        },
        mist: '#F5F7FA',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(6, 13, 27, 0.06), 0 10px 28px rgba(6, 13, 27, 0.10)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
