import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        heading: 'var(--aw-color-text-heading)',
        // AMA brand navy scale (derived from #1f304f, #3d5e9b, #4c75c1)
        brand: {
          50: 'rgb(236 240 247)',   // very light tint for backgrounds
          100: 'rgb(213 222 237)',  // light tint
          200: 'rgb(166 185 214)',  // lighter
          300: 'rgb(118 147 191)',  // #4c75c1 equivalent
          400: 'rgb(76 117 193)',   // #4c75c1
          500: 'rgb(61 94 155)',    // #3d5e9b
          600: 'rgb(49 75 124)',    // between mid and dark
          700: 'rgb(37 57 93)',     // slightly lighter than dark
          800: 'rgb(31 48 79)',     // #1f304f main navy
          900: 'rgb(24 37 61)',     // darker navy
          950: 'rgb(16 25 41)',     // darkest
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
