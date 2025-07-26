'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomeHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: '玄幻', slug: 'xuanhuan', desc: 'Huyền Huyễn' },
        { name: '仙侠', slug: 'xianxia', desc: 'Tiên Hiệp' },
        { name: '武侠', slug: 'wuxia', desc: 'Võ Hiệp' },
        { name: '修真', slug: 'xiuzhen', desc: 'Tu Chân' },
        { name: '都市', slug: 'dushi', desc: 'Đô Thị' },
        { name: '历史', slug: 'lishi', desc: 'Lịch Sử' }
    ];

    const rankings = [
        { name: '日榜', slug: 'ngay', desc: 'Bảng Ngày' },
        { name: '周榜', slug: 'tuan', desc: 'Bảng Tuần' },
        { name: '月榜', slug: 'thang', desc: 'Bảng Tháng' },
        { name: '年榜', slug: 'nam', desc: 'Bảng Năm' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-md shadow-2xl' 
                : 'bg-gradient-to-r from-transparent via-black/20 to-transparent'
        }`}>
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300">
                                <span className="text-slate-900 font-bold text-xl">仙</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                                仙侠风云
                            </h1>
                            <p className="text-xs text-slate-300 tracking-wider">逍遥自在 · 豪侠仗义</p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {/* Home */}
                        <Link href="/" className="nav-item group">
                            <span className="chinese-text">江湖</span>
                            <span className="english-text">Home</span>
                        </Link>

                        {/* Categories Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('categories')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="nav-item group">
                                <span className="chinese-text">分类</span>
                                <span className="english-text">Categories</span>
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'categories' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-slate-700/50 overflow-hidden">
                                    <div className="p-2">
                                        {categories.map((category) => (
                                            <Link
                                                key={category.slug}
                                                href={`/truyen/the-loai/${category.slug}`}
                                                className="flex items-center justify-between p-3 rounded-md hover:bg-slate-700/50 transition-colors group"
                                            >
                                                <div>
                                                    <span className="text-amber-400 font-medium text-lg">{category.name}</span>
                                                    <p className="text-slate-300 text-sm">{category.desc}</p>
                                                </div>
                                                <svg className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Rankings Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('rankings')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="nav-item group">
                                <span className="chinese-text">排行</span>
                                <span className="english-text">Rankings</span>
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'rankings' && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-slate-700/50 overflow-hidden">
                                    <div className="p-2">
                                        {rankings.map((ranking) => (
                                            <Link
                                                key={ranking.slug}
                                                href={`/top/${ranking.slug}`}
                                                className="flex items-center justify-between p-3 rounded-md hover:bg-slate-700/50 transition-colors group"
                                            >
                                                <div>
                                                    <span className="text-amber-400 font-medium">{ranking.name}</span>
                                                    <p className="text-slate-300 text-sm">{ranking.desc}</p>
                                                </div>
                                                <svg className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Authors */}
                        <Link href="/tac-gia" className="nav-item group">
                            <span className="chinese-text">作者</span>
                            <span className="english-text">Authors</span>
                        </Link>

                        {/* Search */}
                        <Link href="/tim-kiem" className="nav-item group">
                            <span className="chinese-text">搜索</span>
                            <span className="english-text">Search</span>
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="寻找你的武侠世界..."
                                className="w-64 px-4 py-2 pl-10 bg-slate-800/50 border border-slate-600/50 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                            />
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/auth/dang-nhap"
                            className="px-4 py-2 text-slate-300 hover:text-amber-400 transition-colors"
                        >
                            登录
                        </Link>
                        <Link
                            href="/auth/dang-ky"
                            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-medium rounded-full hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
                        >
                            注册
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-particle particle-1"></div>
                <div className="floating-particle particle-2"></div>
                <div className="floating-particle particle-3"></div>
            </div>

            <style jsx>{`
                .nav-item {
                    @apply flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-700/30 cursor-pointer;
                }
                
                .chinese-text {
                    @apply text-white font-medium text-lg group-hover:text-amber-400 transition-colors;
                }
                
                .english-text {
                    @apply text-slate-400 text-xs uppercase tracking-wider group-hover:text-amber-300 transition-colors;
                }
                
                .floating-particle {
                    @apply absolute w-1 h-1 bg-amber-400 rounded-full opacity-30;
                    animation: float 15s infinite ease-in-out;
                }
                
                .particle-1 {
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                }
                
                .particle-2 {
                    top: 60%;
                    right: 20%;
                    animation-delay: -5s;
                }
                
                .particle-3 {
                    top: 40%;
                    left: 70%;
                    animation-delay: -10s;
                }
                
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0); 
                        opacity: 0.3; 
                    }
                    25% { 
                        transform: translateY(-20px) translateX(10px); 
                        opacity: 0.6; 
                    }
                    50% { 
                        transform: translateY(-10px) translateX(-10px); 
                        opacity: 0.2; 
                    }
                    75% { 
                        transform: translateY(-30px) translateX(5px); 
                        opacity: 0.5; 
                    }
                }
            `}</style>
        </header>
    );
}