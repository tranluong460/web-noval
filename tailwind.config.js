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
      // Sử dụng màu chuẩn Tailwind với tên đơn giản
      colors: {
        // Tu tiên color palette với tên đơn giản
        'xianxia': {
          50: '#f0fdf4',   // Vân Bạch nhạt
          100: '#dcfce7',  // Vân Bạch
          200: '#bbf7d0',  // Ngọc Thúy nhạt
          300: '#86efac',  // Ngọc Thúy
          400: '#4ade80',  // Ngọc Thúy đậm
          500: '#10b981',  // Ngọc Thúy chính
          600: '#059669',  // Thiên Thanh
          700: '#047857',  // Thiên Thanh đậm
          800: '#065f46',  // Tối
          900: '#064e3b',  // Rất tối
        },
        'celestial': {
          50: '#f0f9ff',   // Thiên Thanh nhạt
          100: '#e0f2fe',  // Thiên Thanh
          200: '#bae6fd',  // Thiên Thanh vừa
          300: '#7dd3fc',  // Thiên Thanh đậm
          400: '#38bdf8',  // Sky
          500: '#06b6d4',  // Sky chính
          600: '#0891b2',  // Sky đậm
          700: '#0e7490',  // Tối
          800: '#155e75',  // Rất tối
          900: '#164e63',  // Cực tối
        },
        'golden': {
          50: '#fffbeb',   // Kim Huy nhạt
          100: '#fef3c7',  // Kim Huy
          200: '#fde68a',  // Kim Huy vừa
          300: '#fcd34d',  // Kim Huy đậm
          400: '#fbbf24',  // Vàng
          500: '#f59e0b',  // Vàng chính
          600: '#d97706',  // Vàng đậm
          700: '#b45309',  // Tối
          800: '#92400e',  // Rất tối
          900: '#78350f',  // Cực tối
        },
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.8)' },
        },
      },
      
      // Custom gradients
      backgroundImage: {
        'xianxia-gradient': 'linear-gradient(135deg, #f0fdf4 0%, #10b981 50%, #06b6d4 100%)',
        'celestial-gradient': 'linear-gradient(135deg, #06b6d4 0%, #a78bfa 100%)',
        'golden-gradient': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      },
      
      // Custom shadows
      boxShadow: {
        'glow-sm': '0 0 10px rgba(16, 185, 129, 0.3)',
        'glow': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-lg': '0 0 30px rgba(16, 185, 129, 0.5)',
      },
    },
  },
  plugins: [],
}