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
  'Luyện Khí': 'text-gray-700 bg-gray-100',
  'Trúc Cơ': 'text-jade-700 bg-jade-100',
  'Kim Đan': 'text-gold-700 bg-gold-100',
  'Nguyên Anh': 'text-sky-700 bg-sky-100',
  'Hóa Thần': 'text-purple-700 bg-purple-100',
  'Đại Thừa': 'text-orange-700 bg-orange-100'
} as const;