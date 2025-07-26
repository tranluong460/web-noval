'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Swords, Shield, Zap, Mountain, Users, LogIn, UserPlus, Crown, Star, Flame } from 'lucide-react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <header className="relative bg-gradient-to-br from-red-950 via-orange-900 to-amber-900 shadow-2xl sticky top-0 z-50 border-b-4 border-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fbbf24" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            {/* Top decorative border with martial arts pattern */}
            <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-orange-500 to-red-500 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo - Heroic Style */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-4 group">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                                <div className="relative bg-gradient-to-br from-red-600 to-orange-600 p-3 rounded-full shadow-2xl group-hover:shadow-red-500/50 transition-all duration-500">
                                    <Swords className="h-8 w-8 text-yellow-200 group-hover:text-white transition-colors duration-300 transform group-hover:rotate-12" />
                                </div>
                                <Shield className="absolute -top-1 -right-1 h-5 w-5 text-yellow-400 animate-bounce" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent tracking-wider">
                                    武侠天下
                                </span>
                                <span className="text-sm text-orange-200 tracking-[0.3em] font-semibold">
                                    HÀO HIỆP TRƯỠNG NGHĨA
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Heroic Theme */}
                    <nav className="hidden lg:flex space-x-2">
                        <Link 
                            href="/" 
                            className="group relative px-6 py-3 text-orange-100 hover:text-yellow-200 font-bold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Flame className="h-4 w-4 mr-2 text-orange-400 group-hover:text-yellow-400" />
                                Võ Lâm Trang Chủ
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-300"></div>
                        </Link>
                        
                        <Link 
                            href="/truyen" 
                            className="group relative px-6 py-3 text-orange-100 hover:text-yellow-200 font-bold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Swords className="h-4 w-4 mr-2 text-red-400 group-hover:text-yellow-400" />
                                Giang Hồ Truyện
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-300"></div>
                        </Link>

                        <div className="relative group">
                            <button className="group relative px-6 py-3 text-orange-100 hover:text-yellow-200 font-bold transition-all duration-300 rounded-lg flex items-center">
                                <Crown className="h-4 w-4 mr-2 text-yellow-500 group-hover:text-yellow-300" />
                                <span className="relative z-10">Anh Hùng Bảng</span>
                                <Zap className="h-3 w-3 ml-1 text-yellow-400 animate-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-300"></div>
                            </button>
                            <div className="absolute left-0 mt-3 w-64 bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-2 border-orange-400/30 backdrop-blur-sm">
                                <div className="py-3">
                                    <div className="px-4 py-2 text-xs font-bold text-yellow-300 border-b border-orange-400/30 bg-gradient-to-r from-red-800/50 to-orange-800/50">
                                        ⚔️ BẢNG DANH VỌNG ⚔️
                                    </div>
                                    <Link href="/top/tuan" className="flex items-center px-4 py-3 text-sm font-semibold text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-700/50 hover:to-orange-700/50 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400">
                                        <Shield className="h-4 w-4 mr-3 text-blue-400" />
                                        🏆 Thiên Hạ Đệ Nhất (Tuần)
                                    </Link>
                                    <Link href="/top/thang" className="flex items-center px-4 py-3 text-sm font-semibold text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-700/50 hover:to-orange-700/50 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400">
                                        <Crown className="h-4 w-4 mr-3 text-purple-400" />
                                        👑 Võ Lâm Minh Chủ (Tháng)
                                    </Link>
                                    <Link href="/top/nam" className="flex items-center px-4 py-3 text-sm font-semibold text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-700/50 hover:to-orange-700/50 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400">
                                        <Star className="h-4 w-4 mr-3 text-yellow-400" />
                                        ⭐ Vạn Cổ Chí Tôn (Năm)
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="/truyen/the-loai" 
                            className="group relative px-6 py-3 text-orange-100 hover:text-yellow-200 font-bold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Mountain className="h-4 w-4 mr-2 text-green-400 group-hover:text-yellow-400" />
                                Môn Phái
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-300"></div>
                        </Link>

                        <Link 
                            href="/tac-gia" 
                            className="group relative px-6 py-3 text-orange-100 hover:text-yellow-200 font-bold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Users className="h-4 w-4 mr-2 text-purple-400 group-hover:text-yellow-400" />
                                Danh Gia Cao Thủ
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-300"></div>
                        </Link>
                    </nav>

                    {/* Search and Auth */}
                    <div className="flex items-center space-x-4">
                        {/* Search Button */}
                        <button
                            onClick={toggleSearch}
                            className="relative p-3 text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-600/30 hover:to-orange-600/30 rounded-lg transition-all duration-300 group border-2 border-transparent hover:border-orange-400/50"
                        >
                            <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="relative flex items-center space-x-2 px-6 py-3 text-sm font-bold text-orange-100 border-2 border-orange-400/60 rounded-lg hover:border-yellow-400 hover:bg-gradient-to-r hover:from-red-600/30 hover:to-orange-600/30 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <LogIn className="h-4 w-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                <span className="relative z-10">Nhập Môn</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="relative flex items-center space-x-2 px-6 py-3 text-sm font-bold text-red-900 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-300 hover:via-orange-300 hover:to-red-300 rounded-lg transition-all duration-300 shadow-xl hover:shadow-orange-500/30 group overflow-hidden border-2 border-yellow-500/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <UserPlus className="h-4 w-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                <span className="relative z-10">Gia Nhập Võ Lâm</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden relative p-3 text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-600/30 hover:to-orange-600/30 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-orange-400/50"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="py-6 border-t-2 border-orange-400/30">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm truyện võ hiệp, tiên hiệp, danh gia cao thủ..."
                                className="w-full px-6 py-5 pl-14 pr-36 text-orange-100 bg-gradient-to-r from-red-900/60 to-orange-900/60 border-3 border-orange-400/40 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 placeholder-orange-300/60 backdrop-blur-md shadow-2xl text-lg font-medium"
                                autoFocus
                            />
                            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-400" />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-red-900 text-sm font-bold rounded-xl hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 transition-all duration-300 shadow-xl hover:shadow-orange-500/30 border-2 border-yellow-400/50">
                                Tìm Kiếm
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t-2 border-orange-400/30">
                        <div className="px-2 pt-6 pb-4 space-y-3 bg-gradient-to-b from-red-900/80 via-orange-900/80 to-amber-900/80 backdrop-blur-md rounded-b-2xl">
                            <Link
                                href="/"
                                className="flex items-center px-4 py-4 text-base font-bold text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-600/40 hover:to-orange-600/40 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Flame className="h-5 w-5 mr-3 text-orange-400" />
                                Võ Lâm Trang Chủ
                            </Link>
                            <Link
                                href="/truyen"
                                className="flex items-center px-4 py-4 text-base font-bold text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-600/40 hover:to-orange-600/40 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Swords className="h-5 w-5 mr-3 text-red-400" />
                                Giang Hồ Truyện
                            </Link>
                            <div className="space-y-2">
                                <div className="flex items-center px-4 py-3 text-base font-bold text-yellow-300 bg-gradient-to-r from-red-800/50 to-orange-800/50 rounded-xl border-2 border-yellow-400/30">
                                    <Crown className="h-5 w-5 mr-3 text-yellow-400" />
                                    Anh Hùng Bảng
                                </div>
                                <Link
                                    href="/top/tuan"
                                    className="flex items-center px-8 py-3 text-sm font-semibold text-orange-200 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-700/40 hover:to-orange-700/40 rounded-lg transition-all duration-300 border-l-4 border-blue-400/50"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Shield className="h-4 w-4 mr-3 text-blue-400" />
                                    🏆 Thiên Hạ Đệ Nhất
                                </Link>
                                <Link
                                    href="/top/thang"
                                    className="flex items-center px-8 py-3 text-sm font-semibold text-orange-200 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-700/40 hover:to-orange-700/40 rounded-lg transition-all duration-300 border-l-4 border-purple-400/50"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Crown className="h-4 w-4 mr-3 text-purple-400" />
                                    👑 Võ Lâm Minh Chủ
                                </Link>
                                <Link
                                    href="/top/nam"
                                    className="flex items-center px-8 py-3 text-sm font-semibold text-orange-200 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-700/40 hover:to-orange-700/40 rounded-lg transition-all duration-300 border-l-4 border-yellow-400/50"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Star className="h-4 w-4 mr-3 text-yellow-400" />
                                    ⭐ Vạn Cổ Chí Tôn
                                </Link>
                            </div>
                            <Link
                                href="/truyen/the-loai"
                                className="flex items-center px-4 py-4 text-base font-bold text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-600/40 hover:to-orange-600/40 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Mountain className="h-5 w-5 mr-3 text-green-400" />
                                Môn Phái
                            </Link>
                            <Link
                                href="/tac-gia"
                                className="flex items-center px-4 py-4 text-base font-bold text-orange-100 hover:text-yellow-200 hover:bg-gradient-to-r hover:from-red-600/40 hover:to-orange-600/40 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Users className="h-5 w-5 mr-3 text-purple-400" />
                                Danh Gia Cao Thủ
                            </Link>
                        </div>
                        
                        {/* Mobile Auth Buttons */}
                        <div className="px-2 py-6 border-t-2 border-orange-400/30 space-y-4 bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-md">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-4 text-base font-bold text-orange-100 border-2 border-orange-400/60 rounded-xl hover:border-yellow-400 hover:bg-gradient-to-r hover:from-red-600/30 hover:to-orange-600/30 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LogIn className="h-5 w-5" />
                                <span>Nhập Môn</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-4 text-base font-bold text-red-900 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-xl hover:from-yellow-300 hover:via-orange-300 hover:to-red-300 transition-all duration-300 shadow-xl border-2 border-yellow-500/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <UserPlus className="h-5 w-5" />
                                <span>Gia Nhập Võ Lâm</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom decorative glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-orange-500 to-red-500 opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent animate-pulse"></div>
        </header>
    );
}