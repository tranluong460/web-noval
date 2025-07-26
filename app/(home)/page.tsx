'use client';

import { useState } from 'react';

export default function Home() {
    // Mock user data để test header
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Mock login function
    const handleLogin = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setUser({
                id: '1',
                name: 'Tiêu Viêm',
                avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
                cultivationLevel: 'Kim Đan',
                email: 'tieu.viem@tutien.com',
                points: 12580,
                vipLevel: 3
            });
            setIsLoading(false);
        }, 1500);
    };

    // Mock logout function
    const handleLogout = () => {
        setUser(null);
    };

    // Mock search function
    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Implement search logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-van-bach-50 via-ngoc-thuy-50 to-thien-thanh-50 dark:from-ngan-hoa-900 dark:via-ngan-hoa-800 dark:to-ngan-hoa-900">
            {/* Hero Section để demo header */}
            <section className="pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        <span className="bg-gradient-to-r from-ngoc-thuy-600 via-thien-thanh-600 to-tu-vi-600 bg-clip-text text-transparent">
                            Tu Tiên Các
                        </span>
                    </h1>
                    <p className="text-xl text-ngan-hoa-600 dark:text-ngan-hoa-300 mb-8 max-w-3xl mx-auto">
                        Khám phá thế giới tu tiên bao la với hàng ngàn truyện hay, 
                        từ những câu chuyện kinh điển đến những tác phẩm mới nhất.
                    </p>
                    
                    {/* Demo buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {!user ? (
                            <button
                                onClick={handleLogin}
                                disabled={isLoading}
                                className="px-8 py-3 bg-gradient-to-r from-ngoc-thuy-500 to-thien-thanh-500 hover:from-ngoc-thuy-600 hover:to-thien-thanh-600 text-white font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
                            >
                                {isLoading ? 'Đang đăng nhập...' : 'Demo Đăng Nhập'}
                            </button>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <span className="text-ngoc-thuy-600 dark:text-thien-thanh-400 font-medium">
                                    Chào mừng, {user.name}!
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="px-6 py-2 bg-phuong-hoa-500 hover:bg-phuong-hoa-600 text-white font-medium rounded-full transition-colors duration-200"
                                >
                                    Đăng Xuất
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content sections để test scroll behavior */}
            <section className="py-20 bg-van-bach-100/50 dark:bg-ngan-hoa-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-ngan-hoa-900 dark:text-van-bach-100">
                        Truyện Nổi Bật
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-van-bach-100 dark:bg-ngan-hoa-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 bg-gradient-to-br from-ngoc-thuy-400 to-thien-thanh-500 rounded-lg mb-4"></div>
                                <h3 className="text-xl font-semibold mb-2 text-ngan-hoa-900 dark:text-van-bach-100">
                                    Đấu Phá Thương Khung {item}
                                </h3>
                                <p className="text-ngan-hoa-600 dark:text-ngan-hoa-300 mb-4">
                                    Câu chuyện về hành trình tu luyện của một thiếu niên...
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-ngoc-thuy-600 dark:text-thien-thanh-400 font-medium">
                                        Thiên Tằm Thổ Đậu
                                    </span>
                                    <span className="text-sm text-ngan-hoa-500 dark:text-ngan-hoa-400">
                                        1.2M lượt đọc
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More content để test sticky header */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-ngan-hoa-900 dark:text-van-bach-100">
                        Thể Loại Phổ Biến
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Tu Tiên', 'Huyền Huyễn', 'Kiếm Hiệp', 'Đô Thị', 'Khoa Huyễn', 'Lịch Sử', 'Quân Sự', 'Đồng Nhân'].map((category) => (
                            <div key={category} className="bg-gradient-to-br from-ngoc-thuy-500 to-thien-thanh-600 text-white p-6 rounded-xl text-center hover:from-ngoc-thuy-600 hover:to-thien-thanh-700 transition-all duration-300 cursor-pointer transform hover:scale-105">
                                <h3 className="font-semibold text-lg">{category}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}