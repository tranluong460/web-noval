import Link from 'next/link';
import { useState } from 'react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">T</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">TruyenChu</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            Trang chủ
                        </Link>
                        <Link href="/truyen" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            Truyện
                        </Link>
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                                Thể loại
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="grid grid-cols-2 gap-2 p-4">
                                    <Link href="/truyen/the-loai/tien-hiep" className="text-sm text-gray-600 hover:text-blue-600 py-1">
                                        Tiên hiệp
                                    </Link>
                                    <Link href="/truyen/the-loai/ngon-tinh" className="text-sm text-gray-600 hover:text-blue-600 py-1">
                                        Ngôn tình
                                    </Link>
                                    <Link href="/truyen/the-loai/do-thi" className="text-sm text-gray-600 hover:text-blue-600 py-1">
                                        Đô thị
                                    </Link>
                                    <Link href="/truyen/the-loai/kiem-hiep" className="text-sm text-gray-600 hover:text-blue-600 py-1">
                                        Kiếm hiệp
                                    </Link>
                                    <Link href="/truyen/the-loai/quan-truong" className="text-sm text-gray-600 hover:text-blue-600 py-1">
                                        Quan trường
                                    </Link>
                                    <Link href="/truyen/the-loai/linh-di" className="text-sm text-gray-600 hover:text-blue-600 py-1">
                                        Linh dị
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                                Bảng xếp hạng
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="p-2">
                                    <Link href="/top/tuan" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
                                        Top tuần
                                    </Link>
                                    <Link href="/top/thang" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
                                        Top tháng
                                    </Link>
                                    <Link href="/top/nam" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
                                        Top năm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/tac-gia" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            Tác giả
                        </Link>
                    </nav>

                    {/* Search and Auth */}
                    <div className="flex items-center space-x-4">
                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/auth/dang-nhap"
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/auth/dang-ky"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                Đăng ký
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-500 hover:text-blue-600 transition-colors"
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
                    <div className="py-4 border-t border-gray-200">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm truyện, tác giả..."
                                className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            >
                                Trang chủ
                            </Link>
                            <Link
                                href="/truyen"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            >
                                Truyện
                            </Link>
                            <Link
                                href="/truyen/the-loai"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            >
                                Thể loại
                            </Link>
                            <Link
                                href="/top"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            >
                                Bảng xếp hạng
                            </Link>
                            <Link
                                href="/tac-gia"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            >
                                Tác giả
                            </Link>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-5 space-x-3">
                                <Link
                                    href="/auth/dang-nhap"
                                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    href="/auth/dang-ky"
                                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
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