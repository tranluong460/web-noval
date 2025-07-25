'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropdownLoading, setIsDropdownLoading] = useState<string | null>(null);

    const navLinks = [
        {
            title: '藏書閣',
            href: '/truyen',
            type: 'link'
        },
        {
            title: '門派分類',
            href: '/truyen/the-loai',
            type: 'dropdown',
            items: [
                { title: '仙俠奇緣', href: '/truyen/the-loai/tien-hiep' },
                { title: '情緣紅塵', href: '/truyen/the-loai/ngon-tinh' },
                { title: '都市修仙', href: '/truyen/the-loai/do-thi' },
                { title: '劍道無雙', href: '/truyen/the-loai/kiem-hiep' },
                { title: '朝堂風雲', href: '/truyen/the-loai/quan-truong' },
                { title: '靈異鬼怪', href: '/truyen/the-loai/linh-di' },
                { title: '玄幻世界', href: '/truyen/the-loai/huyen-huyen' },
                { title: '科幻未來', href: '/truyen/the-loai/khoa-huyen' },
                { title: '系統流派', href: '/truyen/the-loai/he-thong' },
                { title: '重生歸來', href: '/truyen/the-loai/trong-sinh' },
                { title: '穿越時空', href: '/truyen/the-loai/xuyen-khong' },
                { title: '推理懸疑', href: '/truyen/the-loai/trinh-tham' },
                { title: '軍事戰爭', href: '/truyen/the-loai/quan-su' },
                { title: '歷史傳奇', href: '/truyen/the-loai/lich-su' },
                { title: '輕鬆幽默', href: '/truyen/the-loai/hai-huoc' },
                { title: '耽美情深', href: '/truyen/the-loai/dam-my' },
                { title: '百合花開', href: '/truyen/the-loai/bach-hop' },
                { title: '古代傳說', href: '/truyen/the-loai/co-dai' },
                { title: '現代都市', href: '/truyen/the-loai/hien-dai' },
                { title: '末世求生', href: '/truyen/the-loai/mat-the' },
                { title: '魔法奇幻', href: '/truyen/the-loai/ma-phap' },
                { title: '競技體育', href: '/truyen/the-loai/the-thao' },
                { title: '遊戲世界', href: '/truyen/the-loai/game' },
                { title: '輕小說', href: '/truyen/the-loai/light-novel' }  
            ]
        },
        {
            title: '天榜排名',
            href: '/top',
            type: 'dropdown',
            items: [
                { title: '週榜', href: '/top/tuan' },
                { title: '月榜', href: '/top/thang' },
                { title: '年榜', href: '/top/nam' }
            ]
        },
        {
            title: '文人墨客',
            href: '/tac-gia',
            type: 'link'
        }
    ];

    return (
        <header className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 shadow-2xl sticky top-0 z-50 border-b-4 border-gradient-to-r from-amber-600 via-orange-600 to-red-600">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                                    <span className="text-white font-bold text-lg font-serif">書</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 bg-clip-text text-transparent font-serif tracking-wide">
                                    仙書閣
                                </span>
                                <span className="text-xs text-amber-600 font-medium tracking-widest">
                                    XIAN SHU GE
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
                                    className="relative text-amber-800 hover:text-red-700 font-medium transition-all duration-300 font-serif text-lg group"
                                >
                                    {navItem.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-red-600 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ) : (
                                <div key={index} className="relative group">
                                    <button 
                                        className="relative text-amber-800 hover:text-red-700 font-medium transition-all duration-300 flex items-center font-serif text-lg group"
                                        onMouseEnter={() => {
                                            if (navItem.title === '門派分類') {
                                                setIsDropdownLoading('the-loai');
                                                setTimeout(() => setIsDropdownLoading(null), 800);
                                            }
                                        }}
                                    >
                                        {navItem.title}
                                        <svg className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-red-600 group-hover:w-full transition-all duration-300"></span>
                                    </button>
                                    <div className={`absolute top-full left-0 mt-4 ${navItem.title === '門派分類' ? 'w-80' : 'w-56'} bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-xl shadow-2xl border-2 border-amber-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[60] transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm`}>
                                        {/* Decorative top */}
                                        <div className="h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-t-xl"></div>
                                        
                                        {navItem.title === '門派分類' && isDropdownLoading === 'the-loai' ? (
                                            <div className="p-6">
                                                <div className="flex items-center justify-center mb-4">
                                                    <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {[...Array(6)].map((_, skeletonIndex) => (
                                                        <div key={skeletonIndex} className="animate-pulse">
                                                            <div className="h-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-md"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`${navItem.title === '門派分類' ? 'grid grid-cols-2 gap-2 p-6' : 'p-4'}`}>
                                                {navItem.items?.map((item, itemIndex) => (
                                                    <Link 
                                                        key={itemIndex}
                                                        href={item.href} 
                                                        className={`${navItem.title === '門派分類' ? 'text-sm text-amber-700 hover:text-red-700 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 transition-all duration-300 block font-medium border border-transparent hover:border-amber-300' : 'block px-4 py-3 text-sm text-amber-700 hover:text-red-700 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 rounded-lg transition-all duration-300 font-medium'}`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {/* Decorative bottom */}
                                        <div className="h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-b-xl"></div>
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
                            className="p-3 text-amber-700 hover:text-red-700 transition-all duration-300 hover:bg-amber-100 rounded-full"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="px-6 py-2 text-sm font-medium text-amber-800 hover:text-red-700 transition-all duration-300 border-2 border-amber-600 hover:border-red-600 rounded-full font-serif"
                            >
                                登入
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-serif"
                            >
                                註冊
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-3 text-amber-700 hover:text-red-700 transition-all duration-300 hover:bg-amber-100 rounded-full"
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
                    <div className="py-6 border-t-2 border-amber-200">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="尋找仙緣奇書、文人墨客..."
                                className="w-full px-6 py-4 pl-14 pr-6 text-amber-900 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-full focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-red-400 transition-all duration-300 font-serif placeholder-amber-500"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
                        <div className="px-4 pt-4 pb-3 space-y-2">
                            {navLinks.map((navItem, index) => (
                                <Link
                                    key={index}
                                    href={navItem.href}
                                    className="block px-4 py-3 text-base font-medium text-amber-800 hover:text-red-700 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 rounded-lg transition-all duration-300 font-serif"
                                >
                                    {navItem.title}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 pb-6 border-t-2 border-amber-200">
                            <div className="flex items-center px-6 space-x-4">
                                <Link
                                    href="/auth/dang-nhap"
                                    className="flex-1 text-center px-4 py-3 text-sm font-medium text-amber-800 bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 rounded-full transition-all duration-300 border-2 border-amber-300 font-serif"
                                >
                                    登入
                                </Link>
                                <Link
                                    href="/auth/dang-ky"
                                    className="flex-1 text-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 rounded-full transition-all duration-300 shadow-lg font-serif"
                                >
                                    註冊
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}