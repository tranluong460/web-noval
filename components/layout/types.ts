// Types và interfaces cho Header component tiên hiệp
export interface User {
  id: string;
  name: string;
  avatar: string;
  cultivationLevel: 'Luyện Khí' | 'Trúc Cơ' | 'Kim Đan' | 'Nguyên Anh' | 'Hóa Thần' | 'Đại Thừa';
  email: string;
  points: number;
  vipLevel: number;
}

export interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  isNew?: boolean;
  isHot?: boolean;
}

export interface HeaderProps {
  user?: User | null;
  onLogin?: () => void;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  className?: string;
  isLoading?: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  author: string;
  type: 'story' | 'author';
  coverImage?: string;
  rating?: number;
}

export interface DropdownItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
  danger?: boolean;
}

// Màu sắc tu tiên cho cultivation levels
export const CULTIVATION_COLORS = {
  'Luyện Khí': 'text-ngan-hoa-700 bg-ngan-hoa-100',
  'Trúc Cơ': 'text-ngoc-thuy-700 bg-ngoc-thuy-100',
  'Kim Đan': 'text-kim-huy-700 bg-kim-huy-100',
  'Nguyên Anh': 'text-thien-thanh-700 bg-thien-thanh-100',
  'Hóa Thần': 'text-tu-vi-700 bg-tu-vi-100',
  'Đại Thừa': 'text-phuong-hoa-700 bg-phuong-hoa-100'
} as const;