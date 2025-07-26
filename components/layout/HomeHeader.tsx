'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomeHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const genres = [
        { name: 'Tu Tiên', slug: 'tu-tien', icon: '⚡', color: 'from-purple-600 to-indigo-700', desc: 'Nghịch thiên cải mệnh' },
        { name: 'Ma Đạo', slug: 'ma-dao', icon: '🔥', color: 'from-red-600 to-black', desc: 'Tà ma ngoại đạo' },
        { name: 'Kiếm Tu', slug: 'kiem-tu', icon: '⚔️', color: 'from-blue-600 to-cyan-700', desc: 'Nhất kiếm phá vạn pháp' },
        { name: 'Thần Thoại', slug: 'than-thoai', icon: '🌟', color: 'from-yellow-500 to-orange-600', desc: 'Cổ thần tái sinh' },
        { name: 'Huyền Huyễn', slug: 'huyen-huyen', icon: '🌀', color: 'from-emerald-600 to-teal-700', desc: 'Huyền chi huyền' },
        { name: 'Dị Giới', slug: 'di-gioi', icon: '🌍', color: 'from-violet-600 to-purple-700', desc: 'Vạn giới tranh hùng' },
        { name: 'Đô Thị', slug: 'do-thi', icon: '🏙️', color: 'from-gray-600 to-slate-700', desc: 'Đô thị tu tiên' },
        { name: 'Linh Dị', slug: 'linh-di', icon: '👻', color: 'from-indigo-600 to-purple-800', desc: 'Quỷ thần khó lường' }
    ];

    const rankings = [
        { name: 'Thiên Bảng', slug: 'thien-bang', icon: '🏆', desc: 'Thiên tài tranh hùng', color: 'text-yellow-400' },
        { name: 'Địa Bảng', slug: 'dia-bang', icon: '⚡', desc: 'Địa liệt đấu pháp', color: 'text-orange-400' },
        { name: 'Nhân Bảng', slug: 'nhan-bang', icon: '🔥', desc: 'Nhân kiệt phong vân', color: 'text-red-400' },
        { name: 'Ma Bảng', slug: 'ma-bang', icon: '💀', desc: 'Ma đầu bá chủ', color: 'text-purple-400' }
    ];

    return (
        <>
            {/* Mystical Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Floating Runes */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-20 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    >
                        <div className="text-2xl text-purple-500 animate-spin" style={{ animationDuration: '20s' }}>
                            {['⚡', '🔮', '✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 6)]}
                        </div>
                    </div>
                ))}
                
                {/* Energy Streams */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 via-blue-500 via-cyan-500 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 via-orange-500 via-yellow-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Mouse Trail Effect */}
                <div 
                    className="absolute w-32 h-32 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-xl transition-all duration-300 ease-out pointer-events-none"
                    style={{
                        left: mousePosition.x - 64,
                        top: mousePosition.y - 64,
                    }}
                ></div>
            </div>

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
                isScrolled 
                    ? 'bg-black/90 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 border-b border-purple-500/30' 
                    : 'bg-gradient-to-b from-black/80 via-gray-900/70 to-transparent backdrop-blur-xl'
            }`}>
                {/* Mystical Border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-500 via-cyan-400 via-green-400 via-yellow-400 via-orange-400 to-red-500 animate-pulse"></div>

                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-24">
                        {/* Mystical Logo */}
                        <Link href="/" className="flex items-center space-x-6 group">
                            <div className="relative">
                                {/* Outer Glow Ring */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full blur-md opacity-60 group-hover:opacity-100 animate-pulse"></div>
                                
                                {/* Main Logo Container */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-full flex items-center justify-center shadow-2xl border border-purple-500/50 group-hover:border-purple-400 transition-all duration-500">
                                    {/* Inner Energy */}
                                    <div className="absolute inset-1 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full animate-pulse"></div>
                                    
                                    {/* Chinese Character */}
                                    <span className="relative text-white font-bold text-2xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        仙
                                    </span>
                                    
                                    {/* Rotating Rings */}
                                    <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                                    <div className="absolute inset-1 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                                </div>
                                
                                {/* Corner Decorations */}
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-3 h-3 border-l-2 border-t-2 border-purple-400/60"
                                        style={{
                                            top: i < 2 ? '-4px' : 'auto',
                                            bottom: i >= 2 ? '-4px' : 'auto',
                                            left: i % 2 === 0 ? '-4px' : 'auto',
                                            right: i % 2 === 1 ? '-4px' : 'auto',
                                            transform: `rotate(${i * 90}deg)`,
                                            borderRadius: i < 2 ? '4px 0 0 0' : '0 0 0 4px'
                                        }}
                                    ></div>
                                ))}
                            </div>
                            
                            <div className="group-hover:translate-x-2 transition-transform duration-300">
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 via-cyan-400 to-white bg-clip-text text-transparent group-hover:from-white group-hover:to-purple-400 transition-all duration-500">
                                    Tiên Hiệp Phong Vân
                                </h1>
                                <p className="text-sm text-purple-300/80 font-medium tracking-widest animate-pulse">
                                    逍遥自在 · 豪侠仗义
                                </p>
                            </div>
                        </Link>

                        {/* Mystical Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {/* Home */}
                            <Link href="/" className="mystical-nav-item group">
                                <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">🏠</span>
                                <span className="font-semibold">Trang Chủ</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            </Link>

                            {/* Genres Dropdown */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('genres')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="mystical-nav-item group flex items-center">
                                    <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">📚</span>
                                    <span className="font-semibold">Thể Loại</span>
                                    <svg className="w-5 h-5 ml-2 transition-transform duration-300" 
                                         style={{ transform: activeDropdown === 'genres' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                </button>
                                
                                {activeDropdown === 'genres' && (
                                    <div className="absolute top-full left-0 mt-6 w-[500px] bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden animate-fade-in">
                                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400"></div>
                                        <div className="p-8">
                                            <div className="grid grid-cols-2 gap-4">
                                                {genres.map((genre) => (
                                                    <Link
                                                        key={genre.slug}
                                                        href={`/truyen/the-loai/${genre.slug}`}
                                                        className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-300 border border-transparent hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
                                                    >
                                                        <div className={`w-12 h-12 bg-gradient-to-r ${genre.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                            {genre.icon}
                                                        </div>
                                                        <div>
                                                            <span className="text-white font-semibold group-hover:text-purple-300 transition-colors">{genre.name}</span>
                                                            <p className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">{genre.desc}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
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
                                <button className="mystical-nav-item group flex items-center">
                                    <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">🏆</span>
                                    <span className="font-semibold">Xếp Hạng</span>
                                    <svg className="w-5 h-5 ml-2 transition-transform duration-300"
                                         style={{ transform: activeDropdown === 'rankings' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                </button>
                                
                                {activeDropdown === 'rankings' && (
                                    <div className="absolute top-full left-0 mt-6 w-80 bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden animate-fade-in">
                                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500"></div>
                                        <div className="p-6">
                                            {rankings.map((ranking) => (
                                                <Link
                                                    key={ranking.slug}
                                                    href={`/top/${ranking.slug}`}
                                                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-300 border border-transparent hover:border-purple-500/50"
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{ranking.icon}</span>
                                                        <div>
                                                            <span className="text-white font-semibold group-hover:text-purple-300 transition-colors">{ranking.name}</span>
                                                            <p className={`text-sm ${ranking.color} font-medium`}>{ranking.desc}</p>
                                                        </div>
                                                    </div>
                                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Authors */}
                            <Link href="/tac-gia" className="mystical-nav-item group">
                                <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">✍️</span>
                                <span className="font-semibold">Tác Giả</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            </Link>
                        </nav>

                        {/* Mystical Search */}
                        <div className="hidden md:flex items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm giang hồ huyền bí..."
                                    className="relative w-96 px-6 py-4 pl-14 bg-black/80 border-2 border-purple-500/50 rounded-full text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 backdrop-blur-xl group-hover:bg-black/90 group-hover:border-purple-400/70"
                                />
                                <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                                    <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                                    <kbd className="px-3 py-1 text-xs text-purple-300 bg-purple-900/50 rounded border border-purple-500/30 font-medium">⌘K</kbd>
                                </div>
                            </div>
                        </div>

                        {/* Mystical Auth Buttons */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/auth/dang-nhap"
                                className="relative px-8 py-3 text-purple-300 hover:text-white transition-colors font-semibold border-2 border-purple-500/50 rounded-full hover:border-purple-400 hover:bg-purple-900/30 backdrop-blur-sm group overflow-hidden"
                            >
                                <span className="relative z-10">Đăng Nhập</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="relative px-8 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 group overflow-hidden"
                            >
                                <span className="relative z-10">Nhập Môn Tu Tiên</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>

                        {/* Mobile Menu */}
                        <button className="lg:hidden p-3 text-purple-300 hover:text-white hover:bg-purple-900/30 rounded-full transition-colors">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <style jsx>{`
                .mystical-nav-item {
                    @apply relative text-purple-200 hover:text-white font-semibold transition-all duration-300 cursor-pointer flex items-center px-6 py-4 rounded-lg hover:bg-purple-900/20 overflow-hidden;
                }
                
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                
                .animate-fade-in { 
                    animation: fadeIn 0.4s ease-out; 
                }
            `}</style>
        </>
    );
}