import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          accent: '#E25822',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#080d1a',
          deep: '#0B132B',
          surface: '#1C2541',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          accent: '#D4AF37',
        },
        sand: {
          50: '#FDFCF7',
          100: '#F6F3EB',
          200: '#ECE5D8',
          300: '#DDD2BD',
          800: '#3D372F',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        gujarati: ['var(--font-gujarati)', 'Noto Sans Gujarati', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 19, 43, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(11, 19, 43, 0.16)',
        'saffron-glow': '0 0 25px -5px rgba(226, 88, 34, 0.4)',
        'dignified': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-pattern': "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.04) 1px, transparent 0)",
      }
    },
  },
  plugins: [],
};
export default config;
