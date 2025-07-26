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
        { name: 'Tu Tiên', slug: 'tu-tien', icon: '⚡', color: 'from-amber-400 to-yellow-500' },
        { name: 'Huyền Huyễn', slug: 'huyen-huyen', icon: '🌟', color: 'from-yellow-400 to-orange-400' },
        { name: 'Đô Thị', slug: 'do-thi', icon: '🏙️', color: 'from-blue-400 to-indigo-500' },
        { name: 'Kiếm Hiệp', slug: 'kiem-hiep', icon: '⚔️', color: 'from-red-400 to-pink-500' },
        { name: 'Khoa Huyễn', slug: 'khoa-huyen', icon: '🚀', color: 'from-purple-400 to-violet-500' },
        { name: 'Dị Giới', slug: 'di-gioi', icon: '🌍', color: 'from-green-400 to-emerald-500' },
        { name: 'Ngôn Tình', slug: 'ngon-tinh', icon: '💕', color: 'from-pink-400 to-rose-500' },
        { name: 'Linh Dị', slug: 'linh-di', icon: '👻', color: 'from-indigo-400 to-purple-500' }
    ];

    const rankings = [
        { name: 'Hôm Nay', slug: 'hom-nay', icon: '☀️', desc: 'Hot nhất', color: 'text-orange-600' },
        { name: 'Tuần', slug: 'tuan', icon: '📅', desc: '7 ngày', color: 'text-blue-600' },
        { name: 'Tháng', slug: 'thang', icon: '📆', desc: '30 ngày', color: 'text-green-600' },
        { name: 'Năm', slug: 'nam', icon: '🏆', desc: 'All time', color: 'text-purple-600' }
    ];

    return (
        <>
            {/* Floating Clouds */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute opacity-20 animate-float-${i % 4 + 1}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${20 + Math.random() * 15}s`
                        }}
                    >
                        <div className="w-16 h-8 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-sm"></div>
                    </div>
                ))}
            </div>

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-amber-200' 
                    : 'bg-white/90 backdrop-blur-md'
            }`}>
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-yellow-400 via-orange-400 to-red-400"></div>

                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-4 group">
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-amber-300/50 transition-all duration-300 transform group-hover:scale-105">
                                    <span className="text-white font-bold text-2xl drop-shadow-lg">仙</span>
                                </div>
                                {/* Decorative Corners */}
                                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-amber-400 rounded-tl-lg"></div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-amber-400 rounded-tr-lg"></div>
                                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-amber-400 rounded-bl-lg"></div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-amber-400 rounded-br-lg"></div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-red-500 transition-all duration-300">
                                    Tiên Hiệp Phong Vân
                                </h1>
                                <p className="text-sm text-amber-700/80 font-medium tracking-wide">逍遥自在 · 豪侠仗义</p>
                            </div>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {/* Trang chủ */}
                            <Link href="/" className="nav-item group">
                                <span className="text-xl mr-2 group-hover:scale-110 transition-transform">🏠</span>
                                <span className="font-medium">Trang Chủ</span>
                            </Link>

                            {/* Thể loại */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('genres')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="nav-item group flex items-center">
                                    <span className="text-xl mr-2 group-hover:scale-110 transition-transform">📚</span>
                                    <span className="font-medium">Thể Loại</span>
                                    <svg className="w-4 h-4 ml-2 transition-transform duration-200" 
                                         style={{ transform: activeDropdown === 'genres' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                
                                {activeDropdown === 'genres' && (
                                    <div className="absolute top-full left-0 mt-4 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200 overflow-hidden animate-fade-in">
                                        <div className="p-6">
                                            <div className="grid grid-cols-2 gap-3">
                                                {genres.map((genre) => (
                                                    <Link
                                                        key={genre.slug}
                                                        href={`/truyen/the-loai/${genre.slug}`}
                                                        className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-amber-50 transition-all duration-300 border border-transparent hover:border-amber-200 hover:shadow-md"
                                                    >
                                                        <div className={`w-10 h-10 bg-gradient-to-r ${genre.color} rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                                            {genre.icon}
                                                        </div>
                                                        <span className="text-gray-700 font-medium group-hover:text-amber-700 transition-colors">{genre.name}</span>
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
                                <button className="nav-item group flex items-center">
                                    <span className="text-xl mr-2 group-hover:scale-110 transition-transform">🏆</span>
                                    <span className="font-medium">Xếp Hạng</span>
                                    <svg className="w-4 h-4 ml-2 transition-transform duration-200"
                                         style={{ transform: activeDropdown === 'rankings' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                
                                {activeDropdown === 'rankings' && (
                                    <div className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200 overflow-hidden animate-fade-in">
                                        <div className="p-4">
                                            {rankings.map((ranking) => (
                                                <Link
                                                    key={ranking.slug}
                                                    href={`/top/${ranking.slug}`}
                                                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-amber-50 transition-all duration-300 border border-transparent hover:border-amber-200"
                                                >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{ranking.icon}</span>
                                                        <div>
                                                            <span className="text-gray-700 font-medium group-hover:text-amber-700 transition-colors">Top {ranking.name}</span>
                                                            <p className={`text-sm ${ranking.color} font-medium`}>{ranking.desc}</p>
                                                        </div>
                                                    </div>
                                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Tác giả */}
                            <Link href="/tac-gia" className="nav-item group">
                                <span className="text-xl mr-2 group-hover:scale-110 transition-transform">✍️</span>
                                <span className="font-medium">Tác Giả</span>
                            </Link>
                        </nav>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm giang hồ..."
                                    className="w-80 px-5 py-3 pl-12 bg-amber-50/80 border-2 border-amber-200 rounded-full text-gray-700 placeholder-amber-600/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300 backdrop-blur-sm group-hover:bg-white/90 group-hover:border-amber-300"
                                />
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                    <svg className="w-5 h-5 text-amber-500 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                    <kbd className="px-2 py-1 text-xs text-amber-600 bg-amber-100 rounded border border-amber-200 font-medium">⌘K</kbd>
                                </div>
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/auth/dang-nhap"
                                className="px-6 py-2.5 text-amber-700 hover:text-amber-800 transition-colors font-medium border-2 border-amber-300 rounded-full hover:border-amber-400 hover:bg-amber-50 backdrop-blur-sm"
                            >
                                Đăng Nhập
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 font-medium shadow-lg hover:shadow-amber-300/50 transform hover:scale-105"
                            >
                                Gia Nhập Giang Hồ
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden p-3 text-amber-700 hover:text-amber-800 hover:bg-amber-50 rounded-full transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <style jsx>{`
                .nav-item {
                    @apply text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 cursor-pointer flex items-center px-4 py-3 rounded-full hover:bg-amber-50;
                }
                
                @keyframes float-1 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    25% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
                    50% { transform: translateY(-15px) translateX(-10px) rotate(180deg); }
                    75% { transform: translateY(-25px) translateX(15px) rotate(270deg); }
                }
                
                @keyframes float-2 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    33% { transform: translateY(-20px) translateX(-15px) rotate(120deg); }
                    66% { transform: translateY(-35px) translateX(25px) rotate(240deg); }
                }
                
                @keyframes float-3 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    50% { transform: translateY(-40px) translateX(-20px) rotate(180deg); }
                }
                
                @keyframes float-4 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    25% { transform: translateY(-15px) translateX(30px) rotate(90deg); }
                    75% { transform: translateY(-30px) translateX(-25px) rotate(270deg); }
                }
                
                .animate-float-1 { animation: float-1 25s ease-in-out infinite; }
                .animate-float-2 { animation: float-2 30s ease-in-out infinite; }
                .animate-float-3 { animation: float-3 35s ease-in-out infinite; }
                .animate-float-4 { animation: float-4 28s ease-in-out infinite; }
                
                .animate-fade-in { animation: fadeIn 0.3s ease-out; }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}