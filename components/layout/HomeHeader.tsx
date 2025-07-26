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

    const cultivationRealms = [
        { name: '练气', slug: 'luyen-khi', desc: 'Luyện Khí', icon: '🌬️', color: 'from-cyan-400 to-blue-500' },
        { name: '筑基', slug: 'truc-co', desc: 'Trúc Cơ', icon: '🏔️', color: 'from-green-400 to-emerald-500' },
        { name: '金丹', slug: 'kim-dan', desc: 'Kim Đan', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
        { name: '元婴', slug: 'nguyen-anh', desc: 'Nguyên Anh', icon: '👶', color: 'from-purple-400 to-pink-500' },
        { name: '化神', slug: 'hoa-than', desc: 'Hóa Thần', icon: '🔥', color: 'from-red-400 to-rose-500' },
        { name: '合体', slug: 'hop-the', desc: 'Hợp Thể', icon: '⭐', color: 'from-indigo-400 to-purple-500' },
        { name: '大乘', slug: 'dai-thua', desc: 'Đại Thừa', icon: '🌟', color: 'from-amber-400 to-yellow-500' },
        { name: '渡劫', slug: 'do-kiep', desc: 'Độ Kiếp', icon: '⚡', color: 'from-violet-400 to-purple-600' }
    ];

    const heavenlyRankings = [
        { name: '天榜', slug: 'thien-bang', desc: 'Thiên Bảng', icon: '☀️', color: 'text-yellow-400' },
        { name: '地榜', slug: 'dia-bang', desc: 'Địa Bảng', icon: '🌍', color: 'text-green-400' },
        { name: '人榜', slug: 'nhan-bang', desc: 'Nhân Bảng', icon: '👥', color: 'text-blue-400' },
        { name: '仙榜', slug: 'tien-bang', desc: 'Tiên Bảng', icon: '✨', color: 'text-purple-400' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
            isScrolled 
                ? 'bg-gradient-to-r from-slate-900/98 via-indigo-950/98 to-slate-900/98 backdrop-blur-xl shadow-2xl border-b-2 border-gradient-to-r from-cyan-400/30 via-purple-400/30 to-cyan-400/30' 
                : 'bg-gradient-to-r from-transparent via-black/40 to-transparent'
        }`}>
            {/* Spiritual Energy Flow */}
            <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-transparent via-cyan-400 via-purple-400 via-pink-400 to-transparent animate-pulse"></div>
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-cyan-400 to-purple-400 animate-flow"></div>
            </div>
            
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    {/* Cultivation Logo */}
                    <Link href="/" className="group flex items-center space-x-4">
                        <div className="relative">
                            {/* Main cultivation symbol */}
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-cyan-400/50 transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                                <span className="text-white font-bold text-2xl drop-shadow-lg z-10">修</span>
                                {/* Rotating energy rings */}
                                <div className="absolute inset-1 border-2 border-cyan-400/50 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-2 border border-purple-400/50 rounded-full animate-spin-reverse"></div>
                            </div>
                            {/* Floating spiritual orbs */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float shadow-lg"></div>
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float-delayed shadow-lg"></div>
                            {/* Energy aura */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse scale-150"></div>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
                                修仙问道
                            </h1>
                            <p className="text-sm text-cyan-200/80 tracking-[0.3em] font-light">逆天改命 · 长生不老</p>
                        </div>
                    </Link>

                    {/* Cultivation Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {/* Cultivation Realms Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('realms')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="cultivation-nav-item group">
                                <span className="chinese-text flex items-center">
                                    <span className="mr-2 text-xl">🌟</span>境界
                                </span>
                                <span className="english-text">Realms</span>
                                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'realms' && (
                                <div className="absolute top-full left-0 mt-3 w-80 bg-gradient-to-br from-slate-900/98 via-indigo-950/98 to-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-400/30 overflow-hidden">
                                    <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
                                    <div className="p-3">
                                        <div className="grid grid-cols-2 gap-2">
                                            {cultivationRealms.map((realm) => (
                                                <Link
                                                    key={realm.slug}
                                                    href={`/truyen/the-loai/${realm.slug}`}
                                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 group border border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/20"
                                                >
                                                    <span className="text-xl">{realm.icon}</span>
                                                    <div>
                                                        <span className={`bg-gradient-to-r ${realm.color} bg-clip-text text-transparent font-semibold block`}>{realm.name}</span>
                                                        <p className="text-slate-300 text-xs">{realm.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Heavenly Rankings Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('rankings')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="cultivation-nav-item group">
                                <span className="chinese-text flex items-center">
                                    <span className="mr-2 text-xl">🏆</span>天榜
                                </span>
                                <span className="english-text">Rankings</span>
                                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'rankings' && (
                                <div className="absolute top-full left-0 mt-3 w-64 bg-gradient-to-br from-slate-900/98 via-indigo-950/98 to-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-400/30 overflow-hidden">
                                    <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
                                    <div className="p-3">
                                        {heavenlyRankings.map((ranking) => (
                                            <Link
                                                key={ranking.slug}
                                                href={`/top/${ranking.slug}`}
                                                className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 group border border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/20"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-2xl">{ranking.icon}</span>
                                                    <div>
                                                        <span className={`${ranking.color} font-bold text-lg block`}>{ranking.name}</span>
                                                        <p className="text-slate-300 text-sm">{ranking.desc}</p>
                                                    </div>
                                                </div>
                                                <svg className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Immortal Masters */}
                        <Link href="/tac-gia" className="cultivation-nav-item group">
                            <span className="chinese-text flex items-center">
                                <span className="mr-2 text-xl">🧙‍♂️</span>仙师
                            </span>
                            <span className="english-text">Masters</span>
                        </Link>

                        {/* Spiritual Search */}
                        <Link href="/tim-kiem" className="cultivation-nav-item group">
                            <span className="chinese-text flex items-center">
                                <span className="mr-2 text-xl">🔮</span>寻道
                            </span>
                            <span className="english-text">Seek</span>
                        </Link>
                    </nav>

                    {/* Spiritual Search Bar */}
                    <div className="hidden md:flex items-center">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="寻找修仙之路..."
                                className="w-80 px-6 py-4 pl-14 bg-gradient-to-r from-slate-800/80 via-indigo-900/80 to-slate-800/80 border-2 border-cyan-400/30 rounded-full text-white placeholder-cyan-200/60 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:shadow-2xl focus:shadow-cyan-400/30 transition-all duration-500 backdrop-blur-md group-hover:border-purple-400/50"
                            />
                            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400/70 text-lg">⚡</div>
                            {/* Search aura effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Cultivation Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/auth/dang-nhap"
                            className="px-6 py-3 text-cyan-200/80 hover:text-cyan-400 transition-all duration-300 font-medium border-2 border-transparent hover:border-cyan-400/50 rounded-xl hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
                        >
                            入门
                        </Link>
                        <Link
                            href="/auth/dang-ky"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 shadow-2xl hover:shadow-cyan-400/40 hover:scale-105 border-2 border-cyan-400/30 relative overflow-hidden group"
                        >
                            <span className="relative z-10">拜师修仙</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>

                    {/* Mobile Cultivation Menu */}
                    <button className="lg:hidden p-3 text-cyan-200 hover:text-cyan-400 transition-colors border-2 border-cyan-500/30 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400/50">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Floating Spiritual Energy Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="spiritual-particle particle-1 bg-cyan-400"></div>
                <div className="spiritual-particle particle-2 bg-purple-400"></div>
                <div className="spiritual-particle particle-3 bg-pink-400"></div>
                <div className="spiritual-particle particle-4 bg-blue-400"></div>
                <div className="spiritual-particle particle-5 bg-indigo-400"></div>
                <div className="spiritual-particle particle-6 bg-violet-400"></div>
                <div className="spiritual-particle particle-7 bg-rose-400"></div>
                <div className="spiritual-particle particle-8 bg-emerald-400"></div>
            </div>

            <style jsx>{`
                .cultivation-nav-item {
                    @apply flex flex-col items-center px-5 py-4 rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-cyan-500/15 hover:to-purple-500/15 cursor-pointer border-2 border-transparent hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/20 hover:scale-105;
                }
                
                .chinese-text {
                    @apply text-cyan-100 font-bold text-lg group-hover:text-cyan-300 transition-all duration-300 drop-shadow-lg;
                }
                
                .english-text {
                    @apply text-cyan-300/60 text-xs uppercase tracking-[0.2em] group-hover:text-cyan-200 transition-colors font-light;
                }
                
                .spiritual-particle {
                    @apply absolute w-3 h-3 rounded-full opacity-60 shadow-lg;
                    animation: spiritual-float 25s infinite ease-in-out;
                }
                
                .particle-1 {
                    top: 15%;
                    left: 8%;
                    animation-delay: 0s;
                }
                
                .particle-2 {
                    top: 70%;
                    right: 15%;
                    animation-delay: -3s;
                }
                
                .particle-3 {
                    top: 35%;
                    left: 75%;
                    animation-delay: -6s;
                }
                
                .particle-4 {
                    top: 85%;
                    left: 25%;
                    animation-delay: -9s;
                }
                
                .particle-5 {
                    top: 25%;
                    right: 35%;
                    animation-delay: -12s;
                }
                
                .particle-6 {
                    top: 60%;
                    left: 50%;
                    animation-delay: -15s;
                }
                
                .particle-7 {
                    top: 45%;
                    right: 60%;
                    animation-delay: -18s;
                }
                
                .particle-8 {
                    top: 80%;
                    right: 80%;
                    animation-delay: -21s;
                }
                
                @keyframes spiritual-float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0) scale(1); 
                        opacity: 0.6; 
                    }
                    25% { 
                        transform: translateY(-40px) translateX(20px) scale(1.2); 
                        opacity: 1; 
                    }
                    50% { 
                        transform: translateY(-20px) translateX(-25px) scale(0.8); 
                        opacity: 0.3; 
                    }
                    75% { 
                        transform: translateY(-60px) translateX(15px) scale(1.1); 
                        opacity: 0.8; 
                    }
                }
                
                @keyframes animate-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(calc(100vw + 100%)); }
                }
                
                @keyframes animate-float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }
                
                @keyframes animate-float-delayed {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(-180deg); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                .animate-flow {
                    animation: animate-flow 3s linear infinite;
                }
                
                .animate-float {
                    animation: animate-float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: animate-float-delayed 3s ease-in-out infinite 1.5s;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 6s linear infinite;
                }
            `}</style>
        </header>
    );
}