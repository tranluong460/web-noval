'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Sword, Sparkles, Wind, Mountain, Users, LogIn, UserPlus, Crown, Star, Zap, Cloud, Moon, ChevronDown } from 'lucide-react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const toggleTopMenu = () => setIsTopMenuOpen(!isTopMenuOpen);

    return (
        <header className="relative bg-gradient-to-br from-slate-900 via-indigo-900 via-purple-900 to-slate-800 shadow-2xl sticky top-0 z-50 overflow-hidden">
            {/* Mystical background effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-0 right-1/4 w-40 h-40 md:w-60 md:h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-1/2 w-36 h-36 md:w-54 md:h-54 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
            
            {/* Flowing energy border */}
            <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-cyan-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-bounce"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                {/* Mystical aura */}
                                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-spin-slow blur-md"></div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
                                
                                {/* Main logo container */}
                                <div className="relative bg-gradient-to-br from-slate-800 via-indigo-800 to-purple-800 p-3 rounded-full shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 border border-cyan-400/30 group-hover:border-cyan-300/60">
                                    <Sword className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-300 group-hover:text-white transition-colors duration-300 transform group-hover:rotate-12" />
                                </div>
                                
                                {/* Floating elements */}
                                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400 animate-bounce" />
                                <Wind className="absolute -bottom-1 -left-1 h-2 w-2 text-cyan-400 animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl lg:text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wider">
                                    逍遥仙境
                                </span>
                                <span className="text-xs text-cyan-200/80 tracking-widest font-medium">
                                    TIÊU DAO TỰ TẠI
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex space-x-1">
                        <Link 
                            href="/" 
                            className="group relative px-4 py-2.5 text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Cloud className="h-4 w-4 mr-2 text-cyan-400 group-hover:text-cyan-300" />
                                Trang Chủ
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                        </Link>
                        
                        <Link 
                            href="/truyen" 
                            className="group relative px-4 py-2.5 text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Sword className="h-4 w-4 mr-2 text-purple-400 group-hover:text-cyan-300" />
                                Tu Tiên
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                        </Link>

                        <div className="relative group">
                            <button className="group relative px-4 py-2.5 text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg flex items-center">
                                <Crown className="h-4 w-4 mr-2 text-yellow-400 group-hover:text-cyan-300" />
                                <span className="relative z-10">Danh Vọng</span>
                                <ChevronDown className="h-3 w-3 ml-1 text-yellow-400" />
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                                <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                            </button>
                            <div className="absolute left-0 mt-2 w-56 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-cyan-400/30 backdrop-blur-sm z-50">
                                <div className="py-2">
                                    <Link href="/top/tuan" className="flex items-center px-4 py-3 text-sm font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400">
                                        <Zap className="h-4 w-4 mr-3 text-yellow-400" />
                                        🌟 Thiên Kiêu (Tuần)
                                    </Link>
                                    <Link href="/top/thang" className="flex items-center px-4 py-3 text-sm font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400">
                                        <Crown className="h-4 w-4 mr-3 text-purple-400" />
                                        👑 Chí Tôn (Tháng)
                                    </Link>
                                    <Link href="/top/nam" className="flex items-center px-4 py-3 text-sm font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400">
                                        <Star className="h-4 w-4 mr-3 text-cyan-400" />
                                        ⭐ Tiên Đế (Năm)
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="/truyen/the-loai" 
                            className="group relative px-4 py-2.5 text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Mountain className="h-4 w-4 mr-2 text-green-400 group-hover:text-cyan-300" />
                                Môn Phái
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                        </Link>

                        <Link 
                            href="/tac-gia" 
                            className="group relative px-4 py-2.5 text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Users className="h-4 w-4 mr-2 text-pink-400 group-hover:text-cyan-300" />
                                Danh Sư
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                        </Link>
                    </nav>

                    {/* Tablet Navigation */}
                    <nav className="hidden lg:flex xl:hidden space-x-1">
                        <Link href="/" className="group relative px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg">
                            <span className="relative z-10 flex items-center">
                                <Cloud className="h-4 w-4 mr-1.5 text-cyan-400 group-hover:text-cyan-300" />
                                Chủ
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </Link>
                        
                        <Link href="/truyen" className="group relative px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg">
                            <span className="relative z-10 flex items-center">
                                <Sword className="h-4 w-4 mr-1.5 text-purple-400 group-hover:text-cyan-300" />
                                Tiên
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </Link>

                        <div className="relative group">
                            <button className="group relative px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg flex items-center">
                                <Crown className="h-4 w-4 mr-1.5 text-yellow-400 group-hover:text-cyan-300" />
                                <span className="relative z-10">Top</span>
                                <ChevronDown className="h-3 w-3 ml-1 text-yellow-400" />
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </button>
                            <div className="absolute left-0 mt-2 w-44 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-cyan-400/30 z-50">
                                <div className="py-2">
                                    <Link href="/top/tuan" className="flex items-center px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200">
                                        <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                                        🌟 Tuần
                                    </Link>
                                    <Link href="/top/thang" className="flex items-center px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200">
                                        <Crown className="h-4 w-4 mr-2 text-purple-400" />
                                        👑 Tháng
                                    </Link>
                                    <Link href="/top/nam" className="flex items-center px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200">
                                        <Star className="h-4 w-4 mr-2 text-cyan-400" />
                                        ⭐ Năm
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/truyen/the-loai" className="group relative px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg">
                            <span className="relative z-10 flex items-center">
                                <Mountain className="h-4 w-4 mr-1.5 text-green-400 group-hover:text-cyan-300" />
                                Phái
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </Link>
                    </nav>

                    {/* Search and Auth */}
                    <div className="flex items-center space-x-2">
                        {/* Search Button */}
                        <button
                            onClick={toggleSearch}
                            className="relative p-2.5 text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 group border border-transparent hover:border-cyan-400/30"
                        >
                            <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden sm:flex items-center space-x-2">
                            <Link
                                href="/auth/dang-nhap"
                                className="relative flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-slate-200 border border-cyan-400/50 rounded-lg hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <LogIn className="h-4 w-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                <span className="relative z-10">Nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="relative flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 group overflow-hidden border border-cyan-300/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <UserPlus className="h-4 w-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                <span className="relative z-10">Tu Tiên</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden relative p-2.5 text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="py-4 border-t border-cyan-400/20">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm truyện tu tiên..."
                                className="w-full px-4 py-3 pl-12 pr-24 text-base text-slate-200 bg-gradient-to-r from-slate-800/80 to-indigo-800/80 border border-cyan-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 placeholder-slate-400 backdrop-blur-md shadow-xl font-medium"
                                autoFocus
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-400" />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-slate-900 text-sm font-semibold rounded-lg hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 border border-cyan-300/50">
                                Tìm
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-cyan-400/20 absolute left-0 right-0 top-full bg-gradient-to-b from-slate-900/98 via-indigo-900/98 to-purple-900/98 backdrop-blur-md shadow-2xl z-40">
                        <div className="px-4 pt-4 pb-4 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
                            <Link
                                href="/"
                                className="flex items-center px-4 py-3 text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Cloud className="h-5 w-5 mr-3 text-cyan-400" />
                                Trang Chủ
                            </Link>
                            <Link
                                href="/truyen"
                                className="flex items-center px-4 py-3 text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Sword className="h-5 w-5 mr-3 text-purple-400" />
                                Tu Tiên
                            </Link>
                            
                            {/* Mobile Top Menu */}
                            <div className="space-y-2">
                                <button 
                                    onClick={toggleTopMenu}
                                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                >
                                    <div className="flex items-center">
                                        <Crown className="h-5 w-5 mr-3 text-yellow-400" />
                                        Danh Vọng
                                    </div>
                                    <ChevronDown className={`h-4 w-4 text-yellow-400 transition-transform duration-200 ${isTopMenuOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {isTopMenuOpen && (
                                    <div className="ml-4 space-y-1 bg-gradient-to-r from-slate-800/30 to-indigo-800/30 rounded-lg p-2">
                                        <Link
                                            href="/top/tuan"
                                            className="flex items-center px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-700/20 hover:to-blue-700/20 rounded-lg transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Zap className="h-4 w-4 mr-3 text-yellow-400" />
                                            🌟 Thiên Kiêu
                                        </Link>
                                        <Link
                                            href="/top/thang"
                                            className="flex items-center px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-700/20 hover:to-blue-700/20 rounded-lg transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Crown className="h-4 w-4 mr-3 text-purple-400" />
                                            👑 Chí Tôn
                                        </Link>
                                        <Link
                                            href="/top/nam"
                                            className="flex items-center px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-700/20 hover:to-blue-700/20 rounded-lg transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Star className="h-4 w-4 mr-3 text-cyan-400" />
                                            ⭐ Tiên Đế
                                        </Link>
                                    </div>
                                )}
                            </div>
                            
                            <Link
                                href="/truyen/the-loai"
                                className="flex items-center px-4 py-3 text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Mountain className="h-5 w-5 mr-3 text-green-400" />
                                Môn Phái
                            </Link>
                            <Link
                                href="/tac-gia"
                                className="flex items-center px-4 py-3 text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Users className="h-5 w-5 mr-3 text-pink-400" />
                                Danh Sư
                            </Link>
                        </div>
                        
                        {/* Mobile Auth Buttons */}
                        <div className="px-4 py-4 border-t border-cyan-400/20 space-y-3 bg-gradient-to-b from-indigo-900/90 to-slate-900/90">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-medium text-slate-200 border border-cyan-400/50 rounded-lg hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LogIn className="h-5 w-5" />
                                <span>Đăng Nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-medium text-slate-900 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-lg hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300 shadow-lg border border-cyan-300/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <UserPlus className="h-5 w-5" />
                                <span>Bước Vào Tu Tiên</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom mystical glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-cyan-500 opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse"></div>
        </header>
    );
}