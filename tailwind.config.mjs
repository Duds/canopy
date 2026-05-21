/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          accent:    'var(--color-accent)',
          surface:   'var(--color-surface)',
          text:      'var(--color-text)',
          'text-secondary': 'var(--color-text-secondary)',
          muted:     'var(--color-muted)',
          success:   'var(--color-success)',
          warning:   'var(--color-warning)',
          error:     'var(--color-error)',
          info:      'var(--color-info)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.6' }],
        lg: ['18px', { lineHeight: '1.6' }],
        xl: ['20px', { lineHeight: '1.4' }],
        '2xl': ['28px', { lineHeight: '1.3' }],
        '3xl': ['32px', { lineHeight: '1.2' }],
        '4xl': ['44px', { lineHeight: '1.2' }],
      },
      spacing: {
        section: 'var(--space-section)',
      },
    },
  },
  plugins: [],
};
