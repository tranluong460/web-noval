'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Sword, Crown, Flame, Mountain, Star, LogIn, UserPlus } from 'lucide-react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl sticky top-0 z-50 border-b-2 border-amber-400">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <Sword className="h-10 w-10 text-amber-400 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:rotate-12" />
                                <div className="absolute -top-1 -right-1">
                                    <Star className="h-4 w-4 text-yellow-300 animate-pulse" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                                    仙侠阁
                                </span>
                                <span className="text-xs text-amber-200 tracking-widest">TIÊN HIỆP CÁC</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1">
                        <Link 
                            href="/" 
                            className="group relative px-4 py-2 text-amber-100 hover:text-amber-300 font-medium transition-all duration-300"
                        >
                            <span className="relative z-10">Trang Chủ</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        
                        <Link 
                            href="/truyen" 
                            className="group relative px-4 py-2 text-amber-100 hover:text-amber-300 font-medium transition-all duration-300 flex items-center"
                        >
                            <Flame className="h-4 w-4 mr-2 text-orange-400" />
                            <span className="relative z-10">Truyện Tiên Hiệp</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <div className="relative group">
                            <button className="group relative px-4 py-2 text-amber-100 hover:text-amber-300 font-medium transition-all duration-300 flex items-center">
                                <Crown className="h-4 w-4 mr-2 text-yellow-400" />
                                <span className="relative z-10">Bảng Xếp Hạng</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <div className="absolute left-0 mt-2 w-56 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-amber-400/30">
                                <div className="py-2">
                                    <Link href="/top/tuan" className="block px-4 py-3 text-sm text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 transition-colors duration-200 border-l-2 border-transparent hover:border-amber-400">
                                        🏆 Cao Thủ Tuần
                                    </Link>
                                    <Link href="/top/thang" className="block px-4 py-3 text-sm text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 transition-colors duration-200 border-l-2 border-transparent hover:border-amber-400">
                                        👑 Đế Vương Tháng
                                    </Link>
                                    <Link href="/top/nam" className="block px-4 py-3 text-sm text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 transition-colors duration-200 border-l-2 border-transparent hover:border-amber-400">
                                        ⭐ Chí Tôn Năm
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="/truyen/the-loai" 
                            className="group relative px-4 py-2 text-amber-100 hover:text-amber-300 font-medium transition-all duration-300 flex items-center"
                        >
                            <Mountain className="h-4 w-4 mr-2 text-emerald-400" />
                            <span className="relative z-10">Thể Loại</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <Link 
                            href="/tac-gia" 
                            className="group relative px-4 py-2 text-amber-100 hover:text-amber-300 font-medium transition-all duration-300 flex items-center"
                        >
                            <Star className="h-4 w-4 mr-2 text-purple-400" />
                            <span className="relative z-10">Danh Gia</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </nav>

                    {/* Search and Auth */}
                    <div className="flex items-center space-x-3">
                        {/* Search Button */}
                        <button
                            onClick={toggleSearch}
                            className="p-3 text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300 group"
                        >
                            <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium text-amber-100 border-2 border-amber-400/50 rounded-lg hover:border-amber-400 hover:bg-amber-600/20 transition-all duration-300 group"
                            >
                                <LogIn className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                                <span>Đăng Nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-400/25 group"
                            >
                                <UserPlus className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                                <span>Gia Nhập</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-3 text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="py-6 border-t border-amber-400/30">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm truyện tiên hiệp, danh gia..."
                                className="w-full px-6 py-4 pl-12 pr-32 text-amber-100 bg-slate-800/50 border-2 border-amber-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder-amber-300/50 backdrop-blur-sm"
                                autoFocus
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400" />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 text-sm font-medium rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg">
                                Tìm Kiếm
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-amber-400/30">
                        <div className="px-2 pt-4 pb-3 space-y-2 bg-gradient-to-b from-slate-900/50 to-purple-900/50 backdrop-blur-sm">
                            <Link
                                href="/"
                                className="block px-4 py-3 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Trang Chủ
                            </Link>
                            <Link
                                href="/truyen"
                                className="flex items-center px-4 py-3 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Flame className="h-4 w-4 mr-3 text-orange-400" />
                                Truyện Tiên Hiệp
                            </Link>
                            <div className="space-y-1">
                                <div className="flex items-center px-4 py-3 text-base font-medium text-amber-100">
                                    <Crown className="h-4 w-4 mr-3 text-yellow-400" />
                                    Bảng Xếp Hạng
                                </div>
                                <Link
                                    href="/top/tuan"
                                    className="block px-8 py-2 text-sm text-amber-200 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    🏆 Cao Thủ Tuần
                                </Link>
                                <Link
                                    href="/top/thang"
                                    className="block px-8 py-2 text-sm text-amber-200 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    👑 Đế Vương Tháng
                                </Link>
                                <Link
                                    href="/top/nam"
                                    className="block px-8 py-2 text-sm text-amber-200 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    ⭐ Chí Tôn Năm
                                </Link>
                            </div>
                            <Link
                                href="/truyen/the-loai"
                                className="flex items-center px-4 py-3 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Mountain className="h-4 w-4 mr-3 text-emerald-400" />
                                Thể Loại
                            </Link>
                            <Link
                                href="/tac-gia"
                                className="flex items-center px-4 py-3 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-amber-600/20 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Star className="h-4 w-4 mr-3 text-purple-400" />
                                Danh Gia
                            </Link>
                        </div>
                        
                        {/* Mobile Auth Buttons */}
                        <div className="px-2 py-4 border-t border-amber-400/30 space-y-3 bg-gradient-to-b from-purple-900/50 to-slate-900/50">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-medium text-amber-100 border-2 border-amber-400/50 rounded-lg hover:border-amber-400 hover:bg-amber-600/20 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LogIn className="h-4 w-4" />
                                <span>Đăng Nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg hover:from-amber-300 hover:to-yellow-300 transition-all duration-300 shadow-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <UserPlus className="h-4 w-4" />
                                <span>Gia Nhập</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Decorative bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        </header>
    );
}