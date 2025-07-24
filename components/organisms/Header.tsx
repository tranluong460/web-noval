import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Badge } from '@/components/atoms/Badge';
import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  X, 
  BookOpen, 
  TrendingUp, 
  PlusCircle,
  Trophy,
  Sun,
  Moon,
  Globe
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('VN');

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">WebNovel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <TrendingUp className="w-4 h-4" />
                <span>Xếp hạng</span>
              </button>
              {/* Dropdown menu would go here */}
            </div>

            <Link href="/create" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <PlusCircle className="w-4 h-4" />
              <span>Tạo mới</span>
            </Link>

            <Link href="/challenges" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Trophy className="w-4 h-4" />
              <span>Thử thách</span>
              <Badge variant="warning" size="sm">$50000</Badge>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <Input
              placeholder="Tìm kiếm truyện, tác giả..."
              icon={<Search className="w-4 h-4 text-gray-400" />}
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'VN' ? 'EN' : 'VN')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Search Icon (Mobile) */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
              <Badge variant="danger" size="sm" className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center">
                3
              </Badge>
            </button>

            {/* User Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
                <span className="hidden sm:block">Profile</span>
              </button>
              {/* User dropdown would go here */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/rankings" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <TrendingUp className="w-4 h-4" />
                <span>Xếp hạng</span>
              </Link>
              <Link href="/create" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <PlusCircle className="w-4 h-4" />
                <span>Tạo mới</span>
              </Link>
              <Link href="/challenges" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Trophy className="w-4 h-4" />
                <span>Thử thách</span>
                <Badge variant="warning" size="sm">$50000</Badge>
              </Link>
            </nav>
          </div>
        )}

        {/* Mobile Search Modal */}
        {isSearchOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-4">
            <div className="flex items-center space-x-4 mb-4">
              <Input
                placeholder="Tìm kiếm truyện, tác giả..."
                icon={<Search className="w-4 h-4 text-gray-400" />}
                autoFocus
              />
              <Button variant="ghost" onClick={() => setIsSearchOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};