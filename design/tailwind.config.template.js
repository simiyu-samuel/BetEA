/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // BetEA Brand Colors
        brand: {
          green: {
            DEFAULT: '#00A651',
            light: '#00C95F',
            dark: '#008A43',
            50: '#E6F7EF',
            100: '#CCEFDF',
            200: '#99DFBF',
            300: '#66CF9F',
            400: '#33BF7F',
            500: '#00A651', // Primary
            600: '#008A43',
            700: '#006732',
            800: '#004522',
            900: '#002211',
          },
          gold: {
            DEFAULT: '#FFB81C',
            light: '#FFC84D',
            dark: '#E6A500',
            50: '#FFF9E6',
            100: '#FFF3CC',
            200: '#FFE799',
            300: '#FFDB66',
            400: '#FFCF33',
            500: '#FFB81C', // Accent
            600: '#E6A500',
            700: '#B38000',
            800: '#805C00',
            900: '#4D3700',
          },
          navy: {
            DEFAULT: '#1A1F2E',
            light: '#2A3142',
            dark: '#0F1319',
            50: '#E8E9EC',
            100: '#D1D3D9',
            200: '#A3A7B3',
            300: '#757B8D',
            400: '#474F67',
            500: '#1A1F2E', // Professional
            600: '#151925',
            700: '#10131C',
            800: '#0B0D13',
            900: '#05060A',
          },
        },
        
        // Functional Colors
        success: {
          DEFAULT: '#06D6A0',
          light: '#37DFB3',
          dark: '#05B88A',
        },
        warning: {
          DEFAULT: '#FFB81C',
          light: '#FFC84D',
          dark: '#E6A500',
        },
        error: {
          DEFAULT: '#E63946',
          light: '#EB5F6A',
          dark: '#D32F3C',
        },
        info: {
          DEFAULT: '#00B4D8',
          light: '#33C4E0',
          dark: '#009BBF',
        },
        
        // Neutral Colors
        gray: {
          50: '#F9FAFB',
          100: '#F5F5F5',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        
        // Semantic Colors (for shadcn/ui compatibility)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#00A651',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFB81C',
          foreground: '#1A1F2E',
        },
        destructive: {
          DEFAULT: '#E63946',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F5F5F5',
          foreground: '#6B7280',
        },
        accent: {
          DEFAULT: '#FFB81C',
          foreground: '#1A1F2E',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1F2E',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1F2E',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
      },
      
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'betslip': '0 -4px 12px rgba(0, 0, 0, 0.15)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'pulse-green': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      minHeight: {
        'screen-safe': 'calc(100vh - 4rem)', // Account for header
      },
      
      zIndex: {
        'betslip': '40',
        'header': '50',
        'modal': '60',
        'toast': '70',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
