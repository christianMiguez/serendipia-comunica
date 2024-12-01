/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      IBMPlexSerif: ['IBM Plex Serif', 'serif'],
      SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
      Manrope: ['Manrope', 'sans-serif'],
      Unicons: ['Unicons'],
      Monospace: ['SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'],
      Custom: ['Custom'],
      DMSerif: ['DM Serif Display'],
      SansSerif: ['sans-serif'],
      THICCCBOI: ['THICCCBOI', 'sans-serif'],
      Urbanist: ['Urbanist', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    screens: {
      xxl: {
        min: '1400px',
      },
      xl: {
        min: '1200px',
      },
      lg: {
        min: '992px',
        max: '1199.98px',
      },
      md: {
        min: '768px',
        max: '991.98px',
      },
      sm: {
        min: '576px',
        max: '767.98px',
      },
      xsm: {
        max: '575.98px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen xxl': {
            maxWidth: '1320px',
          },
        },
      })
    },
  ],
  // plugins: [require('tailwindcss-animate')],
}
