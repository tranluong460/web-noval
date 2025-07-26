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
  'Luyện Khí': 'text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-800',
  'Trúc Cơ': 'text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-800',
  'Kim Đan': 'text-amber-700 bg-amber-100 dark:text-amber-300 dark:bg-amber-800',
  'Nguyên Anh': 'text-cyan-700 bg-cyan-100 dark:text-cyan-300 dark:bg-cyan-800',
  'Hóa Thần': 'text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-800',
  'Đại Thừa': 'text-orange-700 bg-orange-100 dark:text-orange-300 dark:bg-orange-800'
} as const;