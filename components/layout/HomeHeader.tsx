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
        <header className="relative bg-gradient-to-br from-slate-900 via-indigo-900 via-purple-900 to-slate-800 shadow-2xl sticky top-0 z-50 overflow-hidden min-h-[64px] sm:min-h-[72px] lg:min-h-[80px]">
            {/* Mystical background effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-0 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
            
            {/* Flowing energy border */}
            <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-cyan-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-bounce"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
                    {/* Logo - Immortal Cultivator Style */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 group">
                            <div className="relative">
                                {/* Mystical aura */}
                                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-spin-slow blur-md"></div>
                                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
                                
                                {/* Main logo container */}
                                <div className="relative bg-gradient-to-br from-slate-800 via-indigo-800 to-purple-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 border border-cyan-400/30 sm:border-2 group-hover:border-cyan-300/60">
                                    <Sword className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-cyan-300 group-hover:text-white transition-colors duration-300 transform group-hover:rotate-12" />
                                </div>
                                
                                {/* Floating elements */}
                                <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-bounce" />
                                <Wind className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 h-2 w-2 sm:h-3 sm:w-3 text-cyan-400 animate-pulse" />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wider truncate">
                                    逍遥仙境
                                </span>
                                <span className="text-[8px] sm:text-[10px] md:text-xs text-cyan-200/80 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-medium truncate">
                                    TIÊU DAO TỰ TẠI
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Immortal Theme */}
                    <nav className="hidden xl:flex space-x-1">
                        <Link 
                            href="/" 
                            className="group relative px-3 py-2 xl:px-4 xl:py-2.5 2xl:px-5 2xl:py-3 text-sm xl:text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Cloud className="h-3 w-3 xl:h-4 xl:w-4 mr-1.5 xl:mr-2 text-cyan-400 group-hover:text-cyan-300" />
                                Tiên Giới Trang Chủ
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                        </Link>
                        
                        <Link 
                            href="/truyen" 
                            className="group relative px-3 py-2 xl:px-4 xl:py-2.5 2xl:px-5 2xl:py-3 text-sm xl:text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Sword className="h-3 w-3 xl:h-4 xl:w-4 mr-1.5 xl:mr-2 text-purple-400 group-hover:text-cyan-300" />
                                Tu Tiên Truyện Thuyết
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                        </Link>

                        <div className="relative group">
                            <button className="group relative px-3 py-2 xl:px-4 xl:py-2.5 2xl:px-5 2xl:py-3 text-sm xl:text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg flex items-center">
                                <Crown className="h-3 w-3 xl:h-4 xl:w-4 mr-1.5 xl:mr-2 text-yellow-400 group-hover:text-cyan-300" />
                                <span className="relative z-10">Tiên Bảng Danh Vọng</span>
                                <Sparkles className="h-2 w-2 xl:h-3 xl:w-3 ml-1 text-yellow-400 animate-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                                <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                            </button>
                            <div className="absolute left-0 mt-2 w-64 xl:w-72 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-cyan-400/30 backdrop-blur-sm">
                                <div className="py-2">
                                    <div className="px-3 xl:px-4 py-2 xl:py-3 text-xs font-bold text-cyan-300 border-b border-cyan-400/20 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
                                        ✨ TIÊN GIỚI DANH BẢNG ✨
                                    </div>
                                    <Link href="/top/tuan" className="flex items-center px-3 xl:px-4 py-2 xl:py-3 text-xs xl:text-sm font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400">
                                        <Zap className="h-3 w-3 xl:h-4 xl:w-4 mr-2 xl:mr-3 text-yellow-400" />
                                        🌟 Thiên Kiêu Chi Tử (Tuần)
                                    </Link>
                                    <Link href="/top/thang" className="flex items-center px-3 xl:px-4 py-2 xl:py-3 text-xs xl:text-sm font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400">
                                        <Crown className="h-3 w-3 xl:h-4 xl:w-4 mr-2 xl:mr-3 text-purple-400" />
                                        👑 Tiêu Dao Chí Tôn (Tháng)
                                    </Link>
                                    <Link href="/top/nam" className="flex items-center px-3 xl:px-4 py-2 xl:py-3 text-xs xl:text-sm font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-800/30 hover:to-blue-800/30 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400">
                                        <Star className="h-3 w-3 xl:h-4 xl:w-4 mr-2 xl:mr-3 text-cyan-400" />
                                        ⭐ Vạn Cổ Tiên Đế (Năm)
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="/truyen/the-loai" 
                            className="group relative px-3 py-2 xl:px-4 xl:py-2.5 2xl:px-5 2xl:py-3 text-sm xl:text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Mountain className="h-3 w-3 xl:h-4 xl:w-4 mr-1.5 xl:mr-2 text-green-400 group-hover:text-cyan-300" />
                                Tu Luyện Môn Phái
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                        </Link>

                        <Link 
                            href="/tac-gia" 
                            className="group relative px-3 py-2 xl:px-4 xl:py-2.5 2xl:px-5 2xl:py-3 text-sm xl:text-base text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                <Users className="h-3 w-3 xl:h-4 xl:w-4 mr-1.5 xl:mr-2 text-pink-400 group-hover:text-cyan-300" />
                                Tiên Gia Danh Sư
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
                                Trang Chủ
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </Link>
                        
                        <Link href="/truyen" className="group relative px-3 py-2 text-sm text-slate-200 hover:text-cyan-200 font-semibold transition-all duration-300 rounded-lg">
                            <span className="relative z-10 flex items-center">
                                <Sword className="h-4 w-4 mr-1.5 text-purple-400 group-hover:text-cyan-300" />
                                Truyện
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
                            <div className="absolute left-0 mt-2 w-56 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-cyan-400/30">
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
                                Thể Loại
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </Link>
                    </nav>

                    {/* Search and Auth */}
                    <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                        {/* Search Button */}
                        <button
                            onClick={toggleSearch}
                            className="relative p-2 sm:p-2.5 lg:p-3 text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 group border border-transparent hover:border-cyan-400/30"
                        >
                            <Search className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
                            <Link
                                href="/auth/dang-nhap"
                                className="relative flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-semibold text-slate-200 border border-cyan-400/50 rounded-lg hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <LogIn className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                <span className="relative z-10 hidden sm:inline">Đăng Nhập</span>
                                <span className="relative z-10 sm:hidden">Nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="relative flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 group overflow-hidden border border-cyan-300/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <UserPlus className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                <span className="relative z-10 hidden md:inline">Bước Vào Tu Tiên</span>
                                <span className="relative z-10 md:hidden">Tu Tiên</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden relative p-2 sm:p-2.5 text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                        >
                            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="py-3 sm:py-4 lg:py-6 border-t border-cyan-400/20">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm truyện tu tiên, tiêu dao, hào hiệp..."
                                className="w-full px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 pl-10 sm:pl-12 lg:pl-14 pr-20 sm:pr-24 lg:pr-32 text-sm sm:text-base text-slate-200 bg-gradient-to-r from-slate-800/80 to-indigo-800/80 border border-cyan-400/30 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-300 placeholder-slate-400 backdrop-blur-md shadow-xl font-medium"
                                autoFocus
                            />
                            <Search className="absolute left-3 sm:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                            <button className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-slate-900 text-xs sm:text-sm font-semibold rounded-md sm:rounded-lg hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 border border-cyan-300/50">
                                <span className="hidden sm:inline">Tìm Kiếm</span>
                                <span className="sm:hidden">Tìm</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-cyan-400/20 absolute left-0 right-0 top-full bg-gradient-to-b from-slate-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-md shadow-2xl">
                        <div className="px-2 sm:px-3 pt-3 sm:pt-4 pb-3 sm:pb-4 space-y-1 sm:space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                            <Link
                                href="/"
                                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Cloud className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-cyan-400" />
                                Tiên Giới Trang Chủ
                            </Link>
                            <Link
                                href="/truyen"
                                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Sword className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-purple-400" />
                                Tu Tiên Truyện Thuyết
                            </Link>
                            
                            {/* Mobile Top Menu */}
                            <div className="space-y-1 sm:space-y-2">
                                <button 
                                    onClick={toggleTopMenu}
                                    className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-cyan-300 bg-gradient-to-r from-slate-800/50 to-indigo-800/50 rounded-lg border border-cyan-400/20"
                                >
                                    <div className="flex items-center">
                                        <Crown className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-yellow-400" />
                                        Tiên Bảng Danh Vọng
                                    </div>
                                    <ChevronDown className={`h-4 w-4 text-yellow-400 transition-transform duration-200 ${isTopMenuOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {isTopMenuOpen && (
                                    <div className="ml-4 sm:ml-6 space-y-1">
                                        <Link
                                            href="/top/tuan"
                                            className="flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-700/20 hover:to-blue-700/20 rounded-lg transition-all duration-300 border-l-2 border-yellow-400/50"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-yellow-400" />
                                            🌟 Thiên Kiêu Chi Tử
                                        </Link>
                                        <Link
                                            href="/top/thang"
                                            className="flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-700/20 hover:to-blue-700/20 rounded-lg transition-all duration-300 border-l-2 border-purple-400/50"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Crown className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-purple-400" />
                                            👑 Tiêu Dao Chí Tôn
                                        </Link>
                                        <Link
                                            href="/top/nam"
                                            className="flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-700/20 hover:to-blue-700/20 rounded-lg transition-all duration-300 border-l-2 border-cyan-400/50"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-cyan-400" />
                                            ⭐ Vạn Cổ Tiên Đế
                                        </Link>
                                    </div>
                                )}
                            </div>
                            
                            <Link
                                href="/truyen/the-loai"
                                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Mountain className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-green-400" />
                                Tu Luyện Môn Phái
                            </Link>
                            <Link
                                href="/tac-gia"
                                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-pink-400" />
                                Tiên Gia Danh Sư
                            </Link>
                        </div>
                        
                        {/* Mobile Auth Buttons */}
                        <div className="px-2 sm:px-3 py-3 sm:py-4 border-t border-cyan-400/20 space-y-2 sm:space-y-3 bg-gradient-to-b from-indigo-900/90 to-slate-900/90 backdrop-blur-md">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex items-center justify-center space-x-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-200 border border-cyan-400/50 rounded-lg hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LogIn className="h-4 w-4 sm:h-5 sm:w-5" />
                                <span>Đăng Nhập</span>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex items-center justify-center space-x-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-900 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-lg hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300 shadow-lg border border-cyan-300/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <UserPlus className="h-4 w-4 sm:h-5 sm:w-5" />
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