'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, User, BookOpen, TrendingUp, Users, LogIn, UserPlus } from 'lucide-react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <BookOpen className="h-8 w-8 text-indigo-600" />
                            <span className="text-2xl font-bold text-gray-900">TruyệnChữ</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link 
                            href="/" 
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Trang chủ
                        </Link>
                        <Link 
                            href="/truyen" 
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Truyện
                        </Link>
                        <div className="relative group">
                            <Link 
                                href="/top" 
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                            >
                                <TrendingUp className="h-4 w-4 mr-1" />
                                Top truyện
                            </Link>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-1">
                                    <Link href="/top/tuan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Top tuần
                                    </Link>
                                    <Link href="/top/thang" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Top tháng
                                    </Link>
                                    <Link href="/top/nam" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Top năm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link 
                            href="/truyen/the-loai" 
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Thể loại
                        </Link>
                        <Link 
                            href="/tac-gia" 
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                        >
                            <Users className="h-4 w-4 mr-1" />
                            Tác giả
                        </Link>
                    </nav>

                    {/* Search and Auth */}
                    <div className="flex items-center space-x-4">
                        {/* Search Button */}
                        <button
                            onClick={toggleSearch}
                            className="p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                        >
                            <Search className="h-5 w-5" />
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-2">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 border border-gray-300 rounded-md hover:border-indigo-300 transition-colors duration-200"
                            >
                                <LogIn className="h-4 w-4" />
                                <span>Đăng nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-200"
                            >
                                <UserPlus className="h-4 w-4" />
                                <span>Đăng ký</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="py-4 border-t border-gray-200">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm truyện, tác giả..."
                                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                autoFocus
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors duration-200">
                                Tìm
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Trang chủ
                            </Link>
                            <Link
                                href="/truyen"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Truyện
                            </Link>
                            <div className="space-y-1">
                                <div className="px-3 py-2 text-base font-medium text-gray-700 flex items-center">
                                    <TrendingUp className="h-4 w-4 mr-2" />
                                    Top truyện
                                </div>
                                <Link
                                    href="/top/tuan"
                                    className="block px-6 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Top tuần
                                </Link>
                                <Link
                                    href="/top/thang"
                                    className="block px-6 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Top tháng
                                </Link>
                                <Link
                                    href="/top/nam"
                                    className="block px-6 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Top năm
                                </Link>
                            </div>
                            <Link
                                href="/truyen/the-loai"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Thể loại
                            </Link>
                            <Link
                                href="/tac-gia"
                                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Users className="h-4 w-4 mr-2" />
                                Tác giả
                            </Link>
                        </div>
                        
                        {/* Mobile Auth Buttons */}
                        <div className="px-2 py-3 border-t border-gray-200 space-y-2">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-base font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LogIn className="h-4 w-4" />
                                <span>Đăng nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <UserPlus className="h-4 w-4" />
                                <span>Đăng ký</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}