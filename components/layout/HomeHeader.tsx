'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  User as UserIcon, 
  Menu, 
  X, 
  ChevronDown,
  Sword,
  Cloud,
  Mountain,
  Sparkles,
  BookOpen,
  TrendingUp,
  Clock,
  Filter,
  Settings,
  LogOut,
  Crown,
  Star
} from 'lucide-react';
import clsx from 'clsx';
import { HeaderProps, MenuItem, DropdownItem, CULTIVATION_COLORS } from './types';

/**
 * Header Component cho website đọc truyện tiên hiệp
 * Thiết kế 2 tầng: Logo/Search/Account (trên) + Navigation (dưới)
 * Theme: Tu tiên với màu sắc tươi mới (emerald, jade, cyan, gold)
 */
export default function HomeHeader({ 
  user, 
  onLogin, 
  onLogout, 
  onSearch, 
  className,
  isLoading = false 
}: HeaderProps) {
  // State management cho các tương tác
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  // Menu items chính với icons phù hợp theme tiên hiệp
  const mainMenuItems: MenuItem[] = [
    {
      label: 'Thể Loại',
      href: '/truyen/the-loai',
      icon: <BookOpen className="w-4 h-4" />,
      children: [
        { label: 'Tu Tiên', href: '/truyen/the-loai/tu-tien' },
        { label: 'Huyền Huyễn', href: '/truyen/the-loai/huyen-huyen' },
        { label: 'Kiếm Hiệp', href: '/truyen/the-loai/kiem-hiep' },
        { label: 'Đô Thị', href: '/truyen/the-loai/do-thi' }
      ]
    },
    {
      label: 'Truyện Hot',
      href: '/top',
      icon: <TrendingUp className="w-4 h-4" />,
      isHot: true
    },
    {
      label: 'Truyện Mới',
      href: '/truyen',
      icon: <Clock className="w-4 h-4" />,
      isNew: true
    },
    {
      label: 'Tìm Kiếm Nâng Cao',
      href: '/tim-kiem',
      icon: <Filter className="w-4 h-4" />
    }
  ];

  // Dropdown menu cho user đã đăng nhập
  const userDropdownItems: DropdownItem[] = [
    {
      label: 'Tủ Truyện',
      href: '/user/tu-truyen',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      label: 'Hồ Sơ',
      href: '/user/profile',
      icon: <UserIcon className="w-4 h-4" />
    },
    {
      label: 'Cài Đặt',
      href: '/user/profile/thong-bao',
      icon: <Settings className="w-4 h-4" />
    },
    { divider: true, label: '' },
    {
      label: 'Đăng Xuất',
      onClick: onLogout,
      icon: <LogOut className="w-4 h-4" />,
      danger: true
    }
  ];

  // Xử lý scroll effect cho sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Đóng dropdown khi click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Xử lý tìm kiếm
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim());
      router.push(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }, [searchQuery, onSearch, router]);

  // Xử lý keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K để focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      // Escape để đóng mobile menu
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header 
      className={clsx(
        // Base styles với gradient background tiên hiệp
        'sticky top-0 z-50 w-full transition-all duration-300',
        'bg-gradient-to-r from-slate-50 via-emerald-50 to-cyan-50',
        'dark:from-slate-900 dark:via-slate-800 dark:to-slate-900',
        'border-b border-emerald-200/50 dark:border-slate-700/50',
        // Scroll effects
        isScrolled && [
          'backdrop-blur-md bg-white/80 dark:bg-slate-900/80',
          'shadow-lg shadow-emerald-500/10 dark:shadow-cyan-500/10'
        ],
        className
      )}
    >
      {/* Phần trên: Logo + Search + Account */}
      <div className="border-b border-emerald-100/50 dark:border-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section - Phong cách tu tiên cổ điển */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              aria-label="Về trang chủ"
            >
              <div className="relative">
                {/* Icon tu tiên với hiệu ứng glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-600 p-2 rounded-full">
                  <Sword className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Tên website với font serif tu tiên */}
              <div className="hidden sm:block">
                <h1 className="text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300">
                  Tu Tiên Các
                </h1>
                <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70 font-medium tracking-wider">
                  修仙阁 • Thiên Hạ Đệ Nhất
                </p>
              </div>
            </Link>

            {/* Search Bar - Responsive với gradient border */}
            <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
              <form onSubmit={handleSearch} className="relative group">
                <div className={clsx(
                  'relative overflow-hidden rounded-full transition-all duration-300',
                  'bg-slate-100/70 dark:bg-slate-800/70 backdrop-blur-sm',
                  'border-2 transition-colors duration-300',
                  isSearchFocused 
                    ? 'border-emerald-400 dark:border-cyan-400 shadow-lg shadow-emerald-500/20 dark:shadow-cyan-500/20' 
                    : 'border-emerald-200/50 dark:border-slate-600/50 hover:border-emerald-300 dark:hover:border-slate-500'
                )}>
                  {/* Gradient glow effect khi focus */}
                  <div className={clsx(
                    'absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-purple-400/20 transition-opacity duration-300',
                    isSearchFocused ? 'opacity-100' : 'opacity-0'
                  )} />
                  
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-emerald-500 dark:text-cyan-400" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      placeholder="Tìm truyện tu tiên, tác giả... (Ctrl+K)"
                      className="w-full pl-12 pr-4 py-3 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none text-sm lg:text-base"
                      aria-label="Tìm kiếm truyện"
                    />
                    
                    {/* Keyboard shortcut hint */}
                    <div className="hidden lg:flex absolute right-3 items-center space-x-1 text-xs text-slate-400 dark:text-slate-500">
                      <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">⌘K</kbd>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* User Account Section */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-emerald-100 dark:bg-slate-700 text-emerald-600 dark:text-cyan-400 hover:bg-emerald-200 dark:hover:bg-slate-600 transition-colors duration-200"
                aria-label="Mở menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* User Authentication Area */}
              {user ? (
                // Đã đăng nhập: Avatar + Dropdown
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-3 p-2 rounded-full bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-700/80 transition-all duration-200 group"
                    aria-label="Menu tài khoản"
                  >
                    {/* Avatar với cultivation level indicator */}
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border-2 border-emerald-300 dark:border-cyan-400 group-hover:border-emerald-400 dark:group-hover:border-cyan-300 transition-colors duration-200"
                      />
                      {/* VIP Crown */}
                      {user.vipLevel > 0 && (
                        <Crown className="absolute -top-1 -right-1 w-4 h-4 text-amber-500" />
                      )}
                    </div>
                    
                    {/* User info - ẩn trên mobile */}
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {user.name}
                      </p>
                      <p className={clsx(
                        'text-xs px-2 py-0.5 rounded-full font-medium',
                        CULTIVATION_COLORS[user.cultivationLevel]
                      )}>
                        {user.cultivationLevel}
                      </p>
                    </div>
                    
                    <ChevronDown className={clsx(
                      'w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-200',
                      isUserDropdownOpen && 'rotate-180'
                    )} />
                  </button>

                  {/* Dropdown Menu với animation "từ trên trời rơi xuống" */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-xl border border-emerald-200/50 dark:border-slate-600/50 py-2 animate-slide-down z-50">
                      {/* User info header */}
                      <div className="px-4 py-3 border-b border-emerald-100 dark:border-slate-700">
                        <p className="font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{user.email}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className={clsx(
                            'text-xs px-2 py-1 rounded-full font-medium',
                            CULTIVATION_COLORS[user.cultivationLevel]
                          )}>
                            {user.cultivationLevel}
                          </span>
                          <div className="flex items-center space-x-1 text-amber-500">
                            <Star className="w-3 h-3" />
                            <span className="text-xs font-medium">{user.points}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Menu items */}
                      {userDropdownItems.map((item, index) => (
                        item.divider ? (
                          <div key={index} className="my-1 border-t border-emerald-100 dark:border-slate-700" />
                        ) : (
                          <Link
                            key={index}
                            href={item.href || '#'}
                            onClick={item.onClick}
                            className={clsx(
                              'flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200',
                              item.danger 
                                ? 'text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700'
                            )}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Chưa đăng nhập: Nút "Tài khoản" duy nhất
                <button
                  onClick={onLogin}
                  disabled={isLoading}
                  className={clsx(
                    'flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200',
                    'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600',
                    'text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40',
                    'transform hover:scale-105 active:scale-95',
                    isLoading && 'opacity-50 cursor-not-allowed'
                  )}
                  aria-label="Đăng nhập tài khoản"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <UserIcon className="w-5 h-5" />
                  )}
                  <span className="hidden sm:inline">Tài Khoản</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Phần dưới: Navigation Menu */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 h-14">
            {mainMenuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className={clsx(
                    'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200',
                    'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-400',
                    'hover:bg-emerald-50 dark:hover:bg-slate-800/50',
                    'group-hover:scale-105 transform'
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  
                  {/* Hot/New badges */}
                  {item.isHot && (
                    <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full animate-pulse">
                      HOT
                    </span>
                  )}
                  {item.isNew && (
                    <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">
                      NEW
                    </span>
                  )}
                </Link>

                {/* Submenu cho Thể Loại */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-xl border border-emerald-200/50 dark:border-slate-600/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-400 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-slate-100 dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b border-emerald-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu items */}
            <nav className="p-4 space-y-2">
              {mainMenuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.isHot && (
                      <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">HOT</span>
                    )}
                    {item.isNew && (
                      <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full">NEW</span>
                    )}
                  </Link>
                  
                  {/* Mobile submenu */}
                  {item.children && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}