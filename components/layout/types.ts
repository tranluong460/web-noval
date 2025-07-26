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

// Theme colors cho cultivation levels
export const CULTIVATION_COLORS = {
  'Luyện Khí': 'text-gray-600 bg-gray-100',
  'Trúc Cơ': 'text-green-600 bg-green-100',
  'Kim Đan': 'text-yellow-600 bg-yellow-100',
  'Nguyên Anh': 'text-blue-600 bg-blue-100',
  'Hóa Thần': 'text-purple-600 bg-purple-100',
  'Đại Thừa': 'text-red-600 bg-red-100'
} as const;