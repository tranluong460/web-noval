# Alone

## Header Component Tiên Hiệp

### Tính năng chính:

#### Cấu trúc 2 tầng:
- **Tầng trên**: Logo + Search Bar + Account Area
- **Tầng dưới**: Navigation Menu với các link chính

#### Phong cách thiết kế:
- **Theme tiên hiệp**: Màu sắc emerald, jade, cyan, teal với gold accents
- **Typography**: Font serif cho logo, sans-serif cho nội dung
- **Responsive**: Mobile-first approach với breakpoints tối ưu
- **Dark mode**: Theme "đêm tu luyện" với màu tối và accent sáng

#### Tính năng tương tác:
- **Sticky header**: Hiệu ứng fade/blur khi scroll
- **Search**: Thanh tìm kiếm với placeholder và keyboard shortcuts (Ctrl+K)
- **User authentication**: 
  - Chưa login: Nút "Tài khoản" duy nhất
  - Đã login: Avatar + dropdown menu với cultivation level
- **Mobile menu**: Hamburger menu với slide-out navigation
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

#### Cultivation System:
- **Levels**: Luyện Khí → Trúc Cơ → Kim Đan → Nguyên Anh → Hóa Thần → Đại Thừa
- **Colors**: Mỗi level có màu sắc riêng biệt
- **VIP System**: Crown icon cho user VIP với glow effect

### Cách sử dụng:

```tsx
import { HomeHeader } from '@/components/layout';

// Trong component
<HomeHeader 
  user={user}
  onLogin={handleLogin}
  onLogout={handleLogout}
  onSearch={handleSearch}
  isLoading={isLoading}
/>
```

### Custom Tailwind Classes:

```css
/* Cultivation levels */
.cultivation-qi, .cultivation-foundation, etc.

/* Glow effects */
.glow-emerald, .glow-cyan, .glow-gold

/* Text gradients */
.text-gradient-immortal, .text-gradient-celestial
```

### Animations:
- **Dropdown**: "Từ trên trời rơi xuống" effect
- **Logo**: Float animation
- **Search**: Glow pulse khi focus
- **Mobile menu**: Smooth slide transition
- **Hover effects**: Scale, glow, color transitions

### Performance:
- **Memoization**: React.memo cho các component con
- **Lazy loading**: Icons được load theo nhu cầu
- **Optimized animations**: Sử dụng transform thay vì layout properties
- **Reduced motion**: Hỗ trợ prefers-reduced-motion