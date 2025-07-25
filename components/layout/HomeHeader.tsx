'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
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
                { title: 'Light Novel', href: '/truyen/the-loai/light-novel' }  
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
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                    <svg className="w-6 h-6 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-slate-800 tracking-tight">
                                    Truyện Hay
                                </span>
                                <span className="text-xs text-slate-500 font-medium opacity-70" style={{ fontSize: '0.75rem' }}>
                                    Đọc truyện online
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((navItem, index) => (
                            navItem.type === 'link' ? (
                                <Link 
                                    key={index}
                                    href={navItem.href} 
                                    className="relative text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 text-base group"
                                >
                                    {navItem.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                                </Link>
                            ) : (
                                <div key={index} className="relative group">
                                    <button 
                                        className="relative text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 flex items-center text-base group"
                                        onMouseEnter={() => {
                                            if (navItem.title === 'Thể loại') {
                                                setIsDropdownLoading('the-loai');
                                                setTimeout(() => setIsDropdownLoading(null), 500);
                                            }
                                        }}
                                    >
                                        {navItem.title}
                                        <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                                    </button>
                                    <div className={`absolute top-full left-0 mt-2 ${
                                        navItem.title === 'Thể loại' 
                                            ? 'w-[90vw] max-w-sm sm:w-[28rem] md:w-[36rem] lg:w-[42rem]' 
                                            : 'w-40 sm:w-48'
                                    } bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] transform translate-y-2 group-hover:translate-y-0`}>
                                        
                                        {navItem.title === 'Thể loại' && isDropdownLoading === 'the-loai' ? (
                                            <div className="p-3 sm:p-6">
                                                <div className="flex items-center justify-center mb-4">
                                                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                                                    {[...Array(12)].map((_, skeletonIndex) => (
                                                        <div key={skeletonIndex} className="animate-pulse">
                                                            <div className="h-4 bg-gray-200 rounded"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`${
                                                navItem.title === 'Thể loại' 
                                                    ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-3 sm:p-6' 
                                                    : 'py-2'
                                            }`}>
                                                {navItem.items?.map((item, itemIndex) => (
                                                    <Link 
                                                        key={itemIndex}
                                                        href={item.href} 
                                                        className={`${
                                                            navItem.title === 'Thể loại' 
                                                                ? 'text-xs sm:text-sm text-slate-700 hover:text-blue-600 py-2 px-2 sm:py-3 sm:px-4 rounded-md hover:bg-slate-100 transition-all duration-200 block font-medium text-center hover:shadow-sm' 
                                                                : 'block px-3 sm:px-4 py-2.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all duration-200 font-medium whitespace-nowrap'
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

                    {/* Search and Auth */}
                    <div className="flex items-center space-x-4">
                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-slate-600 hover:text-blue-600 transition-all duration-200 hover:bg-gray-100 rounded-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 hover:border-blue-700 rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Đăng ký
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-all duration-200 hover:bg-gray-100 rounded-md"
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

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="py-4 border-t border-gray-200">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm truyện, tác giả..."
                                className="w-full px-4 py-3 pl-12 pr-4 text-slate-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-500"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="px-4 pt-4 pb-3 space-y-2">
                            {navLinks.map((navItem, index) => (
                                <Link
                                    key={index}
                                    href={navItem.href}
                                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-all duration-200"
                                >
                                    {navItem.title}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 pb-6 border-t border-gray-200">
                            <div className="flex items-center px-4 space-x-3">
                                <Link
                                    href="/auth/dang-nhap"
                                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    href="/auth/dang-ky"
                                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-md transition-all duration-200"
                                >
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}