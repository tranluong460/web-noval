// Types và interfaces cho Header component
export interface User {
  id: string;
  name: string;
  avatar: string;
  cultivationLevel: 'Luyện Khí' | 'Trúc Cơ' | 'Kim Đan' | 'Nguyên Anh' | 'Hóa Thần';
  email: string;
}

export interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export interface HeaderProps {
  user?: User | null;
  onLogin?: () => void;
  onLogout?: () => void;
  className?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  author: string;
  type: 'story' | 'author';
}