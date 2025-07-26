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
      // Custom colors cho theme tiên hiệp với tên đơn giản hơn
      colors: {
        // Vân Bạch - Trắng mây (Primary)
        cloud: {
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
        },
        
        // Ngọc Thúy - Xanh ngọc bích (Primary)
        jade: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        
        // Thiên Thanh - Xanh trời (Secondary)
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        
        // Kim Huy - Vàng kim (Accent)
        gold: {
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
        
        // Tử Vi - Tím huyền (Accent)
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a78bfa',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        
        // Phượng Hỏa - Cam rực (Warning/Hot)
        orange: {
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
        },
        
        // Cultivation levels colors
        cultivation: {
          'luyen-khi': '#6b7280',    // Gray - Luyện Khí
          'truc-co': '#10b981',     // Jade - Trúc Cơ  
          'kim-dan': '#f59e0b',     // Gold - Kim Đan
          'nguyen-anh': '#06b6d4',  // Sky - Nguyên Anh
          'hoa-than': '#a78bfa',    // Purple - Hóa Thần
          'dai-thua': '#f97316',    // Orange - Đại Thừa
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
            boxShadow: '0 0 5px rgba(16, 185, 129, 0.5)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.4)' 
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
        'gradient-xianxia': 'linear-gradient(135deg, #f8fafc 0%, #10b981 50%, #06b6d4 100%)',
        'gradient-cultivation': 'linear-gradient(135deg, #6b7280 0%, #10b981 20%, #f59e0b 40%, #06b6d4 60%, #a78bfa 80%, #f97316 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      
      // Custom shadows
      boxShadow: {
        'glow-sm': '0 0 10px rgba(16, 185, 129, 0.3)',
        'glow': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-lg': '0 0 30px rgba(16, 185, 129, 0.5)',
        'sky': '0 10px 25px rgba(6, 182, 212, 0.3)',
        'gold': '0 10px 25px rgba(245, 158, 11, 0.3)',
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
        '.glow-jade': {
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
        },
        '.glow-sky': {
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
        },
        '.glow-gold': {
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
        },
        
        // Text gradients
        '.text-gradient-xianxia': {
          background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #a78bfa 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-gold': {
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