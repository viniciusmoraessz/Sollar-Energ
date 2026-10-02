import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { solar: '#FECC05', graphite: '#111111', ink: '#050505', mist: '#F5F4F0' },
      fontFamily: { display: ['var(--font-sora)', 'sans-serif'], body: ['var(--font-dm-sans)', 'sans-serif'] },
      boxShadow: { solar: '0 0 24px rgba(254, 204, 5, .35)' }
    }
  },
  plugins: []
};
export default config;
