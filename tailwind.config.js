/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom colors cho theme tiên hiệp
      colors: {
        // Jade/Emerald palette - chủ đạo
        jade: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Cyan palette - phụ trợ
        immortal: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Gold accents cho VIP/Premium
        celestial: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Cultivation levels colors
        cultivation: {
          qi: '#6b7280',      // Gray - Luyện Khí
          foundation: '#059669', // Emerald - Trúc Cơ  
          golden: '#d97706',   // Amber - Kim Đan
          nascent: '#2563eb',  // Blue - Nguyên Anh
          spirit: '#7c3aed',   // Violet - Hóa Thần
          great: '#dc2626',    // Red - Đại Thừa
        }
      },
      
      // Custom fonts
      fontFamily: {
        'serif': ['Noto Serif SC', 'serif'],
        'sans': ['Inter', 'Noto Sans SC', 'sans-serif'],
      },
      
      // Custom animations
      animation: {
        'dropdown-fade-in': 'dropdownFadeIn 0.2s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      keyframes: {
        dropdownFadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-10px) scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        glowPulse: {
          '0%': { 
            boxShadow: '0 0 5px rgba(34, 197, 94, 0.5)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.4)' 
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px)' 
          },
          '50%': { 
            transform: 'translateY(-5px)' 
          },
        },
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0' 
          },
          '100%': { 
            backgroundPosition: '200% 0' 
          },
        },
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-tu-tien': 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #a78bfa 100%)',
        'gradient-thien-dia': 'linear-gradient(135deg, #f8fafc 0%, #10b981 50%, #06b6d4 100%)',
        'gradient-cultivation': 'linear-gradient(135deg, #64748b 0%, #059669 20%, #d97706 40%, #0891b2 60%, #7c3aed 80%, #ea580c 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      
      // Custom shadows
      boxShadow: {
        'glow-sm': '0 0 10px rgba(34, 197, 94, 0.3)',
        'glow': '0 0 20px rgba(34, 197, 94, 0.4)',
        'glow-lg': '0 0 30px rgba(34, 197, 94, 0.5)',
        'immortal': '0 10px 25px rgba(6, 182, 212, 0.3)',
        'celestial': '0 10px 25px rgba(245, 158, 11, 0.3)',
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      
      // Custom z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // Plugin cho custom utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Cultivation level indicators
        '.cultivation-luyen-khi': {
          background: theme('colors.cultivation.luyen-khi'),
          color: 'white',
        },
        '.cultivation-truc-co': {
          background: theme('colors.cultivation.truc-co'),
          color: 'white',
        },
        '.cultivation-kim-dan': {
          background: theme('colors.cultivation.kim-dan'),
          color: 'white',
        },
        '.cultivation-nguyen-anh': {
          background: theme('colors.cultivation.nguyen-anh'),
          color: 'white',
        },
        '.cultivation-hoa-than': {
          background: theme('colors.cultivation.hoa-than'),
          color: 'white',
        },
        '.cultivation-dai-thua': {
          background: theme('colors.cultivation.dai-thua'),
          color: 'white',
        },
        
        // Glow effects
        '.glow-ngoc-thuy': {
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
        },
        '.glow-thien-thanh': {
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
        },
        '.glow-kim-huy': {
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
        },
        
        // Text gradients
        '.text-gradient-tu-tien': {
          background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #a78bfa 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-thien-dia': {
          background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #a78bfa 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}