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
        { name: 'Tiên Hiệp', slug: 'tien-hiep', icon: '⚔️' },
        { name: 'Huyền Huyễn', slug: 'huyen-huyen', icon: '🌟' },
        { name: 'Đô Thị', slug: 'do-thi', icon: '🏙️' },
        { name: 'Lịch Sử', slug: 'lich-su', icon: '📜' },
        { name: 'Khoa Huyễn', slug: 'khoa-huyen', icon: '🚀' },
        { name: 'Kinh Dị', slug: 'kinh-di', icon: '👻' },
        { name: 'Ngôn Tình', slug: 'ngon-tinh', icon: '💕' },
        { name: 'Trinh Thám', slug: 'trinh-tham', icon: '🔍' }
    ];

    const rankings = [
        { name: 'Tuần', slug: 'tuan', icon: '📅' },
        { name: 'Tháng', slug: 'thang', icon: '📆' },
        { name: 'Năm', slug: 'nam', icon: '🏆' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
                : 'bg-white/90 backdrop-blur-sm'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                            <span className="text-white font-bold text-lg">📚</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                Đọc Truyện
                            </h1>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {/* Trang chủ */}
                        <Link href="/" className="nav-item">
                            Trang Chủ
                        </Link>

                        {/* Thể loại */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('categories')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="nav-item flex items-center">
                                Thể Loại
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'categories' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                                    <div className="p-2">
                                        <div className="grid grid-cols-2 gap-1">
                                            {categories.map((category) => (
                                                <Link
                                                    key={category.slug}
                                                    href={`/truyen/the-loai/${category.slug}`}
                                                    className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 transition-colors"
                                                >
                                                    <span className="text-lg">{category.icon}</span>
                                                    <span className="text-gray-700 font-medium">{category.name}</span>
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
                                Xếp Hạng
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {activeDropdown === 'rankings' && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                                    <div className="p-2">
                                        {rankings.map((ranking) => (
                                            <Link
                                                key={ranking.slug}
                                                href={`/top/${ranking.slug}`}
                                                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-lg">{ranking.icon}</span>
                                                <span className="text-gray-700 font-medium">Top {ranking.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tác giả */}
                        <Link href="/tac-gia" className="nav-item">
                            Tác Giả
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm truyện..."
                                className="w-64 px-4 py-2 pl-10 bg-gray-50 border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-3">
                        <Link
                            href="/auth/dang-nhap"
                            className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                        >
                            Đăng Nhập
                        </Link>
                        <Link
                            href="/auth/dang-ky"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
                        >
                            Đăng Ký
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .nav-item {
                    @apply text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer;
                }
            `}</style>
        </header>
    );
}