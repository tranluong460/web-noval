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
        { name: '仙侠', slug: 'tien-hiep', desc: 'Tiên Hiệp', icon: '⚔️' },
        { name: '玄幻', slug: 'huyen-huyen', desc: 'Huyền Huyễn', icon: '🌟' },
        { name: '武侠', slug: 'vo-hiep', desc: 'Võ Hiệp', icon: '🗡️' },
        { name: '修真', slug: 'tu-chan', desc: 'Tu Chân', icon: '⛰️' },
        { name: '奇幻', slug: 'ky-huyen', desc: 'Kỳ Huyễn', icon: '🔮' },
        { name: '古典', slug: 'co-dien', desc: 'Cổ Điển', icon: '📜' }
    ];

    const rankings = [
        { name: '日榜', slug: 'ngay', desc: 'Bảng Ngày', icon: '☀️' },
        { name: '周榜', slug: 'tuan', desc: 'Bảng Tuần', icon: '🌙' },
        { name: '月榜', slug: 'thang', desc: 'Bảng Tháng', icon: '🌕' },
        { name: '年榜', slug: 'nam', desc: 'Bảng Năm', icon: '⭐' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-gradient-to-r from-indigo-950/95 via-purple-900/95 to-indigo-950/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20' 
                : 'bg-gradient-to-r from-transparent via-black/30 to-transparent'
        }`}>
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 via-red-400 to-transparent animate-pulse"></div>
            
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300 group-hover:scale-110">
                                <span className="text-white font-bold text-xl drop-shadow-lg">仙</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-purple-600/20 animate-spin-slow"></div>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-red-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                                仙侠风云录
                            </h1>
                            <p className="text-sm text-amber-200/80 tracking-widest font-light">逍遥自在 · 豪侠仗义</p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {/* Categories Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('categories')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="nav-item group">
                                <span className="chinese-text flex items-center">
                                    <span className="mr-2">📚</span>门派
                                </span>
                                <span className="english-text">Categories</span>
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'categories' && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-indigo-950/95 to-purple-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/30 overflow-hidden">
                                    <div className="h-1 bg-gradient-to-r from-amber-400 to-red-400"></div>
                                    <div className="p-2">
                                        {categories.map((category) => (
                                            <Link
                                                key={category.slug}
                                                href={`/truyen/the-loai/${category.slug}`}
                                                className="flex items-center justify-between p-4 rounded-lg hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-red-500/10 transition-all duration-300 group border border-transparent hover:border-amber-500/20"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-2xl">{category.icon}</span>
                                                    <div>
                                                        <span className="text-amber-400 font-medium text-lg block">{category.name}</span>
                                                        <p className="text-slate-300 text-sm">{category.desc}</p>
                                                    </div>
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
                                <span className="chinese-text flex items-center">
                                    <span className="mr-2">🏆</span>榜单
                                </span>
                                <span className="english-text">Rankings</span>
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'rankings' && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-br from-indigo-950/95 to-purple-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/30 overflow-hidden">
                                    <div className="h-1 bg-gradient-to-r from-amber-400 to-red-400"></div>
                                    <div className="p-2">
                                        {rankings.map((ranking) => (
                                            <Link
                                                key={ranking.slug}
                                                href={`/top/${ranking.slug}`}
                                                className="flex items-center justify-between p-4 rounded-lg hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-red-500/10 transition-all duration-300 group border border-transparent hover:border-amber-500/20"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-xl">{ranking.icon}</span>
                                                    <div>
                                                        <span className="text-amber-400 font-medium block">{ranking.name}</span>
                                                        <p className="text-slate-300 text-sm">{ranking.desc}</p>
                                                    </div>
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
                            <span className="chinese-text flex items-center">
                                <span className="mr-2">✍️</span>名家
                            </span>
                            <span className="english-text">Authors</span>
                        </Link>

                        {/* Search */}
                        <Link href="/tim-kiem" className="nav-item group">
                            <span className="chinese-text flex items-center">
                                <span className="mr-2">🔍</span>寻觅
                            </span>
                            <span className="english-text">Search</span>
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="寻觅仙侠传奇..."
                                className="w-72 px-5 py-3 pl-12 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-amber-500/30 rounded-full text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:shadow-lg focus:shadow-amber-400/20 transition-all duration-300 backdrop-blur-sm"
                            />
                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400/50 text-sm">⚡</div>
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/auth/dang-nhap"
                            className="px-5 py-2 text-amber-200/80 hover:text-amber-400 transition-colors font-medium border border-transparent hover:border-amber-400/30 rounded-lg"
                        >
                            入门
                        </Link>
                        <Link
                            href="/auth/dang-ky"
                            className="px-6 py-3 bg-gradient-to-r from-amber-500 via-red-500 to-purple-500 text-white font-medium rounded-full hover:from-amber-400 hover:via-red-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-amber-400/30 hover:scale-105 border border-amber-400/20"
                        >
                            拜师
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 text-amber-200 hover:text-amber-400 transition-colors border border-amber-500/30 rounded-lg hover:bg-amber-500/10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-particle particle-1 bg-amber-400"></div>
                <div className="floating-particle particle-2 bg-red-400"></div>
                <div className="floating-particle particle-3 bg-purple-400"></div>
                <div className="floating-particle particle-4 bg-pink-400"></div>
                <div className="floating-particle particle-5 bg-orange-400"></div>
            </div>

            <style jsx>{`
                .nav-item {
                    @apply flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-red-500/10 cursor-pointer border border-transparent hover:border-amber-500/20 hover:shadow-lg hover:shadow-amber-400/10;
                }
                
                .chinese-text {
                    @apply text-amber-100 font-semibold text-lg group-hover:text-amber-300 transition-colors drop-shadow-sm;
                }
                
                .english-text {
                    @apply text-amber-300/60 text-xs uppercase tracking-widest group-hover:text-amber-200 transition-colors font-light;
                }
                
                .floating-particle {
                    @apply absolute w-2 h-2 rounded-full opacity-40;
                    animation: float 20s infinite ease-in-out;
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
                
                .particle-4 {
                    top: 80%;
                    left: 30%;
                    animation-delay: -15s;
                }
                
                .particle-5 {
                    top: 30%;
                    right: 40%;
                    animation-delay: -7s;
                }
                
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0); 
                        opacity: 0.4; 
                    }
                    25% { 
                        transform: translateY(-30px) translateX(15px); 
                        opacity: 0.8; 
                    }
                    50% { 
                        transform: translateY(-15px) translateX(-15px); 
                        opacity: 0.2; 
                    }
                    75% { 
                        transform: translateY(-40px) translateX(8px); 
                        opacity: 0.6; 
                    }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </header>
    );
}