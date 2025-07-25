'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownLoading, setIsDropdownLoading] = useState<string | null>(null);

    const navLinks = [
        {
            title: 'Truyện',
            href: '/truyen',
            type: 'link'
        },
        {
            title: 'Thể loại',
            href: '/truyen/the-loai',
            type: 'dropdown',
            items: [
                { title: 'Tiên Hiệp', href: '/truyen/the-loai/tien-hiep' },
                { title: 'Ngôn Tình', href: '/truyen/the-loai/ngon-tinh' },
                { title: 'Đô Thị', href: '/truyen/the-loai/do-thi' },
                { title: 'Kiếm Hiệp', href: '/truyen/the-loai/kiem-hiep' },
                { title: 'Quan Trường', href: '/truyen/the-loai/quan-truong' },
                { title: 'Linh Dị', href: '/truyen/the-loai/linh-di' },
                { title: 'Huyền Huyễn', href: '/truyen/the-loai/huyen-huyen' },
                { title: 'Khoa Huyễn', href: '/truyen/the-loai/khoa-huyen' },
                { title: 'Hệ Thống', href: '/truyen/the-loai/he-thong' },
                { title: 'Trọng Sinh', href: '/truyen/the-loai/trong-sinh' },
                { title: 'Xuyên Không', href: '/truyen/the-loai/xuyen-khong' },
                { title: 'Trinh Thám', href: '/truyen/the-loai/trinh-tham' },
                { title: 'Quân Sự', href: '/truyen/the-loai/quan-su' },
                { title: 'Lịch Sử', href: '/truyen/the-loai/lich-su' },
                { title: 'Hài Hước', href: '/truyen/the-loai/hai-huoc' },
                { title: 'Đam Mỹ', href: '/truyen/the-loai/dam-my' },
                { title: 'Bách Hợp', href: '/truyen/the-loai/bach-hop' },
                { title: 'Cổ Đại', href: '/truyen/the-loai/co-dai' },
                { title: 'Hiện Đại', href: '/truyen/the-loai/hien-dai' },
                { title: 'Mạt Thế', href: '/truyen/the-loai/mat-the' },
                { title: 'Ma Pháp', href: '/truyen/the-loai/ma-phap' },
                { title: 'Thể Thao', href: '/truyen/the-loai/the-thao' },
                { title: 'Game', href: '/truyen/the-loai/game' },
                { title: 'Light Novel', href: '/truyen/the-loai/light-novel' },
            ]
        },
        {
            title: 'Bảng xếp hạng',
            href: '/top',
            type: 'dropdown',
            items: [
                { title: 'Tuần', href: '/top/tuan' },
                { title: 'Tháng', href: '/top/thang' },
                { title: 'Năm', href: '/top/nam' }
            ]
        },
        {
            title: 'Tác giả',
            href: '/tac-gia',
            type: 'link'
        }
    ];

    return (
        <header className="bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 shadow-xl sticky top-0 z-50 border-b border-sky-200/60 backdrop-blur-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {/* Phần trên: Logo + Tìm kiếm + Auth */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-400 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden border-2 border-yellow-200/80">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-yellow-100/40 to-transparent"></div>
                                    <svg className="w-7 h-7 text-white relative z-10 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/>
                                        <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z"/>
                                        <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-wide">
                                    Hào Hiệp Lâu
                                </span>
                                <span className="text-xs text-slate-500/90 font-medium" style={{ fontSize: '0.75rem' }}>
                                    Giang hồ tự do, hiệp nghĩa vô song
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Tìm kiếm - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Tìm kiếm võ công, hiệp sĩ..."
                                className="w-full px-4 py-3 pl-12 pr-4 text-slate-700 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all duration-300 placeholder-slate-400 backdrop-blur-sm shadow-sm hover:shadow-md"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Auth + Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Search Button - Mobile */}
                        <button className="md:hidden p-2 text-sky-500 hover:text-sky-600 transition-all duration-200 hover:bg-sky-100/60 rounded-md">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 border border-yellow-200/50"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="px-5 py-2.5 text-sm font-medium text-slate-600 bg-white/90 hover:bg-sky-50/90 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-sky-200/60 hover:border-sky-300/70 backdrop-blur-sm"
                            >
                                Đăng ký
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-sky-500 hover:text-sky-600 transition-all duration-200 hover:bg-sky-100/60 rounded-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Phần dưới: Navigation */}
            <div className="border-t border-sky-200/40 bg-gradient-to-r from-sky-100/60 via-cyan-100/60 to-blue-100/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="hidden md:flex items-center space-x-8 h-12">
                        {navLinks.map((navItem, index) => (
                            navItem.type === 'link' ? (
                                <Link 
                                    key={index}
                                    href={navItem.href} 
                                    className="relative text-slate-600 hover:text-slate-700 font-medium transition-all duration-300 text-sm group"
                                >
                                    {navItem.title}
                                    <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-yellow-300 group-hover:w-full transition-all duration-300 shadow-sm"></span>
                                </Link>
                            ) : (
                                <div key={index} className="relative group">
                                    <button 
                                        className="relative text-slate-600 hover:text-slate-700 font-medium transition-all duration-300 flex items-center text-sm group"
                                        onMouseEnter={() => {
                                            if (navItem.title === 'Thể loại') {
                                                setIsDropdownLoading('the-loai');
                                                setTimeout(() => setIsDropdownLoading(null), 500);
                                            }
                                        }}
                                    >
                                        {navItem.title}
                                        <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-yellow-300 group-hover:w-full transition-all duration-300 shadow-sm"></span>
                                    </button>
                                    <div className={`absolute top-full left-0 mt-5 ${
                                        navItem.title === 'Thể loại' 
                                            ? 'w-[90vw] max-w-sm sm:w-[28rem] md:w-[36rem] lg:w-[42rem]' 
                                            : 'w-40'
                                    } bg-gradient-to-br from-white/95 via-sky-25 to-white/95 rounded-xl shadow-xl border border-sky-200/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] transform translate-y-2 group-hover:translate-y-0 backdrop-blur-lg`}>
                                        
                                        {navItem.title === 'Thể loại' && isDropdownLoading === 'the-loai' ? (
                                            <div className="p-3 sm:p-6">
                                                <div className="flex items-center justify-center mb-4">
                                                    <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                                                    {[...Array(12)].map((_, skeletonIndex) => (
                                                        <div key={skeletonIndex} className="animate-pulse">
                                                            <div className="h-4 bg-sky-100 rounded"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`${
                                                navItem.title === 'Thể loại' 
                                                    ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-6' 
                                                    : 'py-2'
                                            }`}>
                                                {navItem.items?.map((item, itemIndex) => (
                                                    <Link 
                                                        key={itemIndex}
                                                        href={item.href} 
                                                        className={`${
                                                            navItem.title === 'Thể loại' 
                                                                ? 'text-xs sm:text-sm text-slate-600 hover:text-slate-700 py-2 px-2 sm:py-3 sm:px-4 rounded-lg hover:bg-sky-50/80 transition-all duration-300 block font-medium text-center hover:shadow-md border border-transparent hover:border-sky-200/60' 
                                                                : 'block px-3 py-2.5 text-sm text-slate-600 hover:text-slate-700 hover:bg-sky-50/80 transition-all duration-300 font-medium whitespace-nowrap rounded-md'
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-sky-200/40 bg-gradient-to-br from-sky-50/90 to-cyan-50/90 backdrop-blur-sm">
                    {/* Mobile Search */}
                    <div className="px-4 py-3 border-b border-sky-200/40">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm võ công, hiệp sĩ..."
                                className="w-full px-4 py-3 pl-12 pr-4 text-slate-700 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all duration-300 placeholder-slate-400 backdrop-blur-sm"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="px-4 pt-4 pb-3 space-y-2">
                        {navLinks.map((navItem, index) => (
                            <Link
                                key={index}
                                href={navItem.href}
                                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-slate-700 hover:bg-sky-50/80 rounded-lg transition-all duration-300 border border-transparent hover:border-sky-200/60"
                            >
                                {navItem.title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Auth */}
                    <div className="pt-4 pb-6 border-t border-sky-200/40">
                        <div className="flex items-center px-4 space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="flex-1 text-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all duration-300 shadow-md"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="flex-1 text-center px-4 py-3 text-sm font-medium text-slate-600 bg-white/90 hover:bg-sky-50/90 rounded-lg transition-all duration-300 shadow-md border border-sky-200/60"
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}