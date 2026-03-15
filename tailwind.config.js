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
        // Extended with lighter tones for dark mode accessibility
        brand: {
          50: 'rgb(241 244 249)',   // #f1f4f9 - very light tint for backgrounds
          100: 'rgb(224 231 242)',  // #e0e7f2 - light tint
          150: 'rgb(198 212 233)',  // #c6d4e9 - between 100-200 (dark mode accents)
          200: 'rgb(166 185 214)',  // #a6b9d6 - lighter
          250: 'rgb(138 163 204)',  // #8aa3cc - between 200-300 (dark mode links)
          300: 'rgb(118 147 191)',  // #7693bf - light interactive
          350: 'rgb(97 131 184)',   // #6183b8 - between 300-400
          400: 'rgb(76 117 193)',   // #4c75c1 - your light navy
          450: 'rgb(69 106 174)',   // #456aae - between 400-500
          500: 'rgb(61 94 155)',    // #3d5e9b - your medium navy
          550: 'rgb(55 85 140)',    // #37558c - between 500-600
          600: 'rgb(49 75 124)',    // #314b7c - mid-dark
          650: 'rgb(43 66 109)',    // #2b426d - between 600-700
          700: 'rgb(37 57 93)',     // #25395d - dark
          750: 'rgb(34 52 86)',     // #223456 - between 700-800
          800: 'rgb(31 48 79)',     // #1f304f - your main dark navy
          850: 'rgb(28 43 70)',     // #1c2b46 - darker
          900: 'rgb(24 37 61)',     // #18253d - very dark
          950: 'rgb(16 25 41)',     // #101929 - darkest
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
