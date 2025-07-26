'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomeFooter() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribe:', email);
        setEmail('');
    };

    const quickLinks = [
        { name: 'Trang Chủ', href: '/' },
        { name: 'Thể Loại', href: '/truyen/the-loai' },
        { name: 'Xếp Hạng', href: '/top' },
        { name: 'Tác Giả', href: '/tac-gia' },
        { name: 'Tìm Kiếm', href: '/tim-kiem' }
    ];

    const genres = [
        { name: 'Tu Tiên', href: '/truyen/the-loai/tu-tien' },
        { name: 'Ma Đạo', href: '/truyen/the-loai/ma-dao' },
        { name: 'Kiếm Tu', href: '/truyen/the-loai/kiem-tu' },
        { name: 'Thần Thoại', href: '/truyen/the-loai/than-thoai' },
        { name: 'Huyền Huyễn', href: '/truyen/the-loai/huyen-huyen' }
    ];

    const support = [
        { name: 'Liên Hệ', href: '/lien-he' },
        { name: 'Hỗ Trợ', href: '/ho-tro' },
        { name: 'Điều Khoản', href: '/dieu-khoan' },
        { name: 'Bảo Mật', href: '/bao-mat' },
        { name: 'FAQ', href: '/faq' }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-20 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 3}s`
                        }}
                    >
                        <div className="text-lg text-purple-400">
                            {['✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 4)]}
                        </div>
                    </div>
                ))}
                
                {/* Gradient Lines */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 via-blue-500 via-cyan-500 to-transparent animate-pulse"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-xl">仙</span>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Tiên Hiệp Phong Vân
                                    </h3>
                                    <p className="text-sm text-purple-300/80 font-medium tracking-widest">
                                        逍遥自在 · 豪侠仗义
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Khám phá thế giới tu tiên huyền bí với hàng nghìn tác phẩm đỉnh cao. 
                                Nơi hội tụ những câu chuyện nghịch thiên cải mệnh, hào hiệp trượng nghĩa 
                                và tiêu dao tự tại nhất.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-purple-500/30 hover:border-purple-400">
                                    <span className="text-purple-400">📘</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-500/30 hover:border-blue-400">
                                    <span className="text-blue-400">🐦</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-green-600/20 hover:bg-green-600/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-green-500/30 hover:border-green-400">
                                    <span className="text-green-400">💬</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-red-600/20 hover:bg-red-600/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-red-500/30 hover:border-red-400">
                                    <span className="text-red-400">📺</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
                                <span className="mr-2">🔗</span>
                                Liên Kết Nhanh
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Genres */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
                                <span className="mr-2">📚</span>
                                Thể Loại Hot
                            </h4>
                            <ul className="space-y-3">
                                {genres.map((genre) => (
                                    <li key={genre.name}>
                                        <Link
                                            href={genre.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                        >
                                            {genre.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
                                <span className="mr-2">🛠️</span>
                                Hỗ Trợ
                            </h4>
                            <ul className="space-y-3">
                                {support.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-16 pt-8 border-t border-purple-500/20">
                        <div className="max-w-2xl mx-auto text-center">
                            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                🔔 Nhận Thông Báo Truyện Mới
                            </h4>
                            <p className="text-gray-400 mb-6">
                                Đăng ký để nhận thông báo về những tác phẩm tu tiên mới nhất và hot nhất
                            </p>
                            
                            <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email của bạn..."
                                    className="flex-1 px-4 py-3 bg-black/50 border-2 border-purple-500/50 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-r-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50"
                                >
                                    Đăng Ký
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 pt-8 border-t border-purple-500/20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="group">
                                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    50,000+
                                </div>
                                <div className="text-gray-400 text-sm">Truyện Tu Tiên</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    1M+
                                </div>
                                <div className="text-gray-400 text-sm">Độc Giả</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    5,000+
                                </div>
                                <div className="text-gray-400 text-sm">Tác Giả</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    24/7
                                </div>
                                <div className="text-gray-400 text-sm">Cập Nhật</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-purple-500/20 bg-black/50 backdrop-blur-sm">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                                © 2024 Tiên Hiệp Phong Vân. Tất cả quyền được bảo lưu. 
                                <span className="text-purple-400 ml-2">Made with ❤️ for Tu Tiên lovers</span>
                            </div>
                            
                            <div className="flex items-center space-x-6 text-sm">
                                <Link href="/dieu-khoan" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Điều Khoản
                                </Link>
                                <Link href="/bao-mat" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Bảo Mật
                                </Link>
                                <Link href="/lien-he" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Liên Hệ
                                </Link>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <span>🌐</span>
                                    <select className="bg-transparent text-gray-400 text-sm focus:outline-none">
                                        <option value="vi">Tiếng Việt</option>
                                        <option value="en">English</option>
                                        <option value="zh">中文</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>
        </footer>
    );
}