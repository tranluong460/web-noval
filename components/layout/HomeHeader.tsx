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
        <header className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-2xl sticky top-0 z-50 border-b-4 border-gradient-to-r from-teal-400 to-blue-500">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                                    <span className="text-white font-bold text-lg font-serif">T</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-gray-900 font-serif tracking-wide">
                                    Truyện Hay
                                </span>
                                <span className="text-xs text-gray-700 font-medium tracking-widest">
                                    TRUYEN HAY
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
                                    className="relative text-gray-900 hover:text-blue-600 font-medium transition-all duration-300 font-serif text-lg group"
                                >
                                    {navItem.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ) : (
                                <div key={index} className="relative group">
                                    <button 
                                        className="relative text-gray-900 hover:text-blue-600 font-medium transition-all duration-300 flex items-center font-serif text-lg group"
                                        onMouseEnter={() => {
                                            if (navItem.title === 'Thể loại') {
                                                setIsDropdownLoading('the-loai');
                                                setTimeout(() => setIsDropdownLoading(null), 800);
                                            }
                                        }}
                                    >
                                        {navItem.title}
                                        <svg className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                                    </button>
                                    <div className={`absolute top-full left-0 mt-4 ${navItem.title === '門派分類' ? 'w-80' : 'w-56'} bg-white rounded-xl shadow-2xl border-2 border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[60] transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm`}>
                                        {/* Decorative top */}
                                        <div className="h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-t-xl"></div>
                                        
                                        {navItem.title === 'Thể loại' && isDropdownLoading === 'the-loai' ? (
                                            <div className="p-6">
                                                <div className="flex items-center justify-center mb-4">
                                                    <div className="w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {[...Array(6)].map((_, skeletonIndex) => (
                                                        <div key={skeletonIndex} className="animate-pulse">
                                                            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`${navItem.title === 'Thể loại' ? 'grid grid-cols-2 gap-2 p-6' : 'p-4'}`}>
                                                {navItem.items?.map((item, itemIndex) => (
                                                    <Link 
                                                        key={itemIndex}
                                                        href={item.href} 
                                                        className={`${navItem.title === 'Thể loại' ? 'text-sm text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 block font-medium border border-transparent hover:border-gray-200' : 'block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium'}`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {/* Decorative bottom */}
                                        <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-b-xl"></div>
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
                            className="p-3 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/20 rounded-full"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="px-6 py-2 text-sm font-medium text-white hover:text-gray-100 transition-all duration-300 border-2 border-white hover:border-gray-200 rounded-full font-serif bg-blue-500 hover:bg-blue-600"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="px-6 py-2 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-serif"
                            >
                                Đăng ký
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-3 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/20 rounded-full"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="py-6 border-t-2 border-white/20">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm truyện, tác giả..."
                                className="w-full px-6 py-4 pl-14 pr-6 text-gray-900 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 font-serif placeholder-gray-500"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t-2 border-white/20 bg-white/10 backdrop-blur-sm">
                        <div className="px-4 pt-4 pb-3 space-y-2">
                            {navLinks.map((navItem, index) => (
                                <Link
                                    key={index}
                                    href={navItem.href}
                                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-white/20 rounded-lg transition-all duration-300 font-serif"
                                >
                                    {navItem.title}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 pb-6 border-t-2 border-white/20">
                            <div className="flex items-center px-6 space-x-4">
                                <Link
                                    href="/auth/dang-nhap"
                                    className="flex-1 text-center px-4 py-3 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 font-serif"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    href="/auth/dang-ky"
                                    className="flex-1 text-center px-4 py-3 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-full transition-all duration-300 shadow-lg font-serif"
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