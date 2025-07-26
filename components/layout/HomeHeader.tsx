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

    const genres = [
        { name: 'Tu Tiên', slug: 'tu-tien', icon: '⚡', color: 'from-cyan-500 to-blue-600' },
        { name: 'Huyền Huyễn', slug: 'huyen-huyen', icon: '🌟', color: 'from-purple-500 to-pink-600' },
        { name: 'Đô Thị', slug: 'do-thi', icon: '🏙️', color: 'from-gray-500 to-slate-600' },
        { name: 'Kiếm Hiệp', slug: 'kiem-hiep', icon: '⚔️', color: 'from-red-500 to-orange-600' },
        { name: 'Khoa Huyễn', slug: 'khoa-huyen', icon: '🚀', color: 'from-indigo-500 to-purple-600' },
        { name: 'Dị Giới', slug: 'di-gioi', icon: '🌍', color: 'from-green-500 to-emerald-600' },
        { name: 'Ngôn Tình', slug: 'ngon-tinh', icon: '💕', color: 'from-pink-500 to-rose-600' },
        { name: 'Linh Dị', slug: 'linh-di', icon: '👻', color: 'from-violet-500 to-purple-600' }
    ];

    const rankings = [
        { name: 'Hôm Nay', slug: 'hom-nay', icon: '☀️', desc: 'Hot nhất' },
        { name: 'Tuần', slug: 'tuan', icon: '📅', desc: '7 ngày' },
        { name: 'Tháng', slug: 'thang', icon: '📆', desc: '30 ngày' },
        { name: 'Năm', slug: 'nam', icon: '🏆', desc: 'All time' }
    ];

    return (
        <>
            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-float-${i % 4 + 1}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20' 
                    : 'bg-slate-900/80 backdrop-blur-lg'
            }`}>
                {/* Energy Flow Animation */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60">
                    <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 animate-pulse-slow">
                                    <span className="text-white font-bold text-xl">修</span>
                                </div>
                                {/* Energy Rings */}
                                <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/30 animate-spin-slow"></div>
                                <div className="absolute inset-1 rounded-lg border border-blue-400/20 animate-spin-reverse"></div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                                    Tu Tiên Online
                                </h1>
                                <p className="text-xs text-cyan-300/70 font-medium">Nghịch Thiên · Đắc Đạo</p>
                            </div>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {/* Trang chủ */}
                            <Link href="/" className="nav-item">
                                <span className="text-lg mr-1">🏠</span>
                                Trang Chủ
                            </Link>

                            {/* Thể loại */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('genres')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="nav-item flex items-center">
                                    <span className="text-lg mr-1">📚</span>
                                    Thể Loại
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-200" 
                                         style={{ transform: activeDropdown === 'genres' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                
                                {activeDropdown === 'genres' && (
                                    <div className="absolute top-full left-0 mt-3 w-80 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden animate-fade-in">
                                        <div className="p-4">
                                            <div className="grid grid-cols-2 gap-2">
                                                {genres.map((genre) => (
                                                    <Link
                                                        key={genre.slug}
                                                        href={`/truyen/the-loai/${genre.slug}`}
                                                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                                                    >
                                                        <div className={`w-8 h-8 bg-gradient-to-r ${genre.color} rounded-lg flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform duration-300`}>
                                                            {genre.icon}
                                                        </div>
                                                        <span className="text-gray-200 font-medium group-hover:text-cyan-300 transition-colors">{genre.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Xếp hạng */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('rankings')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="nav-item flex items-center">
                                    <span className="text-lg mr-1">🏆</span>
                                    Xếp Hạng
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-200"
                                         style={{ transform: activeDropdown === 'rankings' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                
                                {activeDropdown === 'rankings' && (
                                    <div className="absolute top-full left-0 mt-3 w-64 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden animate-fade-in">
                                        <div className="p-3">
                                            {rankings.map((ranking) => (
                                                <Link
                                                    key={ranking.slug}
                                                    href={`/top/${ranking.slug}`}
                                                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                                                >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">{ranking.icon}</span>
                                                        <div>
                                                            <span className="text-gray-200 font-medium group-hover:text-cyan-300 transition-colors">Top {ranking.name}</span>
                                                            <p className="text-xs text-gray-400">{ranking.desc}</p>
                                                        </div>
                                                    </div>
                                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Tác giả */}
                            <Link href="/tac-gia" className="nav-item">
                                <span className="text-lg mr-1">✍️</span>
                                Tác Giả
                            </Link>
                        </nav>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Tìm truyện tu tiên..."
                                    className="w-72 px-4 py-2.5 pl-12 bg-slate-800/50 border border-slate-600/50 rounded-full text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group-hover:bg-slate-700/50"
                                />
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <kbd className="px-2 py-1 text-xs text-gray-400 bg-slate-700/50 rounded border border-slate-600/50">⌘K</kbd>
                                </div>
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium border border-slate-600/50 rounded-lg hover:border-cyan-500/50 backdrop-blur-sm"
                            >
                                Đăng Nhập
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
                            >
                                Bắt Đầu Tu Luyện
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <style jsx>{`
                .nav-item {
                    @apply text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 cursor-pointer flex items-center px-3 py-2 rounded-lg hover:bg-slate-800/30;
                }
                
                @keyframes float-1 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    25% { transform: translateY(-20px) translateX(10px); }
                    50% { transform: translateY(-10px) translateX(-5px); }
                    75% { transform: translateY(-15px) translateX(8px); }
                }
                
                @keyframes float-2 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-15px) translateX(-8px); }
                    66% { transform: translateY(-25px) translateX(12px); }
                }
                
                @keyframes float-3 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-30px) translateX(-10px); }
                }
                
                @keyframes float-4 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    25% { transform: translateY(-10px) translateX(15px); }
                    75% { transform: translateY(-20px) translateX(-12px); }
                }
                
                .animate-float-1 { animation: float-1 15s ease-in-out infinite; }
                .animate-float-2 { animation: float-2 18s ease-in-out infinite; }
                .animate-float-3 { animation: float-3 20s ease-in-out infinite; }
                .animate-float-4 { animation: float-4 16s ease-in-out infinite; }
                
                .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
                .animate-spin-slow { animation: spin 8s linear infinite; }
                .animate-spin-reverse { animation: spin 6s linear infinite reverse; }
                .animate-fade-in { animation: fadeIn 0.3s ease-out; }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}