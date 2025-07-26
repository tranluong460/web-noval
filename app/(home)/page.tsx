'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const featuredStories = [
        {
            id: 1,
            title: "Nghịch Thiên Kiếm Đế",
            author: "Thiên Tằm Thổ Đậu",
            cover: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Một thanh niên bình thường bước vào con đường tu tiên, nghịch thiên cải mệnh...",
            genre: "Tu Tiên",
            status: "Đang cập nhật",
            chapters: 2847,
            rating: 9.2
        },
        {
            id: 2,
            title: "Ma Đế Trọng Sinh",
            author: "Vô Tận Huyễn Tưởng",
            cover: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Ma đế một đời trọng sinh về quá khứ, quyết tâm thay đổi vận mệnh...",
            genre: "Ma Đạo",
            status: "Hoàn thành",
            chapters: 1523,
            rating: 8.9
        },
        {
            id: 3,
            title: "Thần Thoại Tái Khởi",
            author: "Cửu Tinh Độc Vũ",
            cover: "https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Khi các vị thần cổ đại tỉnh giấc, thế giới sẽ ra sao...",
            genre: "Thần Thoại",
            status: "Đang cập nhật",
            chapters: 956,
            rating: 9.5
        }
    ];

    const topStories = [
        { rank: 1, title: "Đấu Phá Thương Khung", author: "Thiên Tằm Thổ Đậu", views: "125M", icon: "🥇" },
        { rank: 2, title: "Vũ Động Càn Khôn", author: "Thiên Tằm Thổ Đậu", views: "98M", icon: "🥈" },
        { rank: 3, title: "Đại Chúa Tể", author: "Thiên Tằm Thổ Đậu", views: "87M", icon: "🥉" },
        { rank: 4, title: "Nguyên Tôn", author: "Thiên Tằm Thổ Đậu", views: "76M", icon: "🏆" },
        { rank: 5, title: "Thần Mộ", author: "Thần Cơ", views: "65M", icon: "⭐" }
    ];

    const genres = [
        { name: 'Tu Tiên', icon: '⚡', count: '12,847', color: 'from-purple-600 to-indigo-700' },
        { name: 'Ma Đạo', icon: '🔥', count: '8,234', color: 'from-red-600 to-black' },
        { name: 'Kiếm Tu', icon: '⚔️', count: '9,567', color: 'from-blue-600 to-cyan-700' },
        { name: 'Thần Thoại', icon: '🌟', count: '5,432', color: 'from-yellow-500 to-orange-600' },
        { name: 'Huyền Huyễn', icon: '🌀', count: '15,678', color: 'from-emerald-600 to-teal-700' },
        { name: 'Dị Giới', icon: '🌍', count: '7,890', color: 'from-violet-600 to-purple-700' },
        { name: 'Đô Thị', icon: '🏙️', count: '11,234', color: 'from-gray-600 to-slate-700' },
        { name: 'Linh Dị', icon: '👻', count: '4,567', color: 'from-indigo-600 to-purple-800' }
    ];

    const newUpdates = [
        { title: "Nghịch Thiên Kiếm Đế", chapter: "Chương 2847: Đại Chiến Bắt Đầu", time: "2 phút trước", author: "Thiên Tằm Thổ Đậu" },
        { title: "Ma Đế Trọng Sinh", chapter: "Chương 1524: Hồi Quy", time: "15 phút trước", author: "Vô Tận Huyễn Tưởng" },
        { title: "Thần Thoại Tái Khởi", chapter: "Chương 957: Thần Lực Giác Tỉnh", time: "1 giờ trước", author: "Cửu Tinh Độc Vũ" },
        { title: "Kiếm Đạo Độc Tôn", chapter: "Chương 3456: Phá Vỡ Giới Hạn", time: "2 giờ trước", author: "Kiếm Du Thái Hư" },
        { title: "Vạn Cổ Thần Đế", chapter: "Chương 2134: Cổ Thần Truyền Thừa", time: "3 giờ trước", author: "Phi Thiên Ngư" }
    ];

    const newReleases = [
        { id: 1, title: "Thiên Đạo Vô Thường", author: "Mộng Nhập Thần Cơ", genre: "Tu Tiên", genreColor: "bg-purple-600/20 text-purple-400 border-purple-500/30", chapters: 1, rating: 9.8, views: "1.2K", releaseDate: "Hôm nay", cover: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "thien-dao-vo-thuong" },
        { id: 2, title: "Ma Tôn Lâm Thế", author: "Hắc Dạ Bạch Châu", genre: "Ma Đạo", genreColor: "bg-red-600/20 text-red-400 border-red-500/30", chapters: 3, rating: 9.5, views: "2.8K", releaseDate: "Hôm nay", cover: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "ma-ton-lam-the" },
        { id: 3, title: "Kiếm Phá Hư Không", author: "Phong Lưu Thư Ngốc", genre: "Kiếm Tu", genreColor: "bg-blue-600/20 text-blue-400 border-blue-500/30", chapters: 2, rating: 9.3, views: "1.9K", releaseDate: "Hôm nay", cover: "https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "kiem-pha-hu-khong" },
        { id: 4, title: "Thần Hoàng Bất Diệt", author: "Thiên Tằm Thổ Đậu", genre: "Thần Thoại", genreColor: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30", chapters: 5, rating: 9.7, views: "5.2K", releaseDate: "Hôm qua", cover: "https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "than-hoang-bat-diet" },
        { id: 5, title: "Huyền Thiên Đế Tôn", author: "Vô Tận Huyễn Tưởng", genre: "Huyền Huyễn", genreColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30", chapters: 4, rating: 9.1, views: "3.7K", releaseDate: "Hôm qua", cover: "https://images.pexels.com/photos/1366946/pexels-photo-1366946.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "huyen-thien-de-ton" },
        { id: 6, title: "Dị Giới Phong Thần", author: "Cửu Tinh Độc Vũ", genre: "Dị Giới", genreColor: "bg-violet-600/20 text-violet-400 border-violet-500/30", chapters: 6, rating: 8.9, views: "4.1K", releaseDate: "2 ngày trước", cover: "https://images.pexels.com/photos/1366948/pexels-photo-1366948.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "di-gioi-phong-than" },
        { id: 7, title: "Đô Thị Tu Tiên Giả", author: "Kiếm Du Thái Hư", genre: "Đô Thị", genreColor: "bg-gray-600/20 text-gray-400 border-gray-500/30", chapters: 8, rating: 8.7, views: "6.3K", releaseDate: "2 ngày trước", cover: "https://images.pexels.com/photos/1366950/pexels-photo-1366950.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "do-thi-tu-tien-gia" },
        { id: 8, title: "Linh Dị Thế Giới", author: "Phi Thiên Ngư", genre: "Linh Dị", genreColor: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30", chapters: 3, rating: 9.0, views: "2.5K", releaseDate: "3 ngày trước", cover: "https://images.pexels.com/photos/1366952/pexels-photo-1366952.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "linh-di-the-gioi" },
        { id: 9, title: "Vô Cực Kiếm Tôn", author: "Thần Cơ", genre: "Kiếm Tu", genreColor: "bg-blue-600/20 text-blue-400 border-blue-500/30", chapters: 7, rating: 8.8, views: "5.8K", releaseDate: "3 ngày trước", cover: "https://images.pexels.com/photos/1366954/pexels-photo-1366954.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "vo-cuc-kiem-ton" },
        { id: 10, title: "Thiên Ma Thần Đàm", author: "Mộng Nhập Thần Cơ", genre: "Ma Đạo", genreColor: "bg-red-600/20 text-red-400 border-red-500/30", chapters: 9, rating: 9.2, views: "7.1K", releaseDate: "4 ngày trước", cover: "https://images.pexels.com/photos/1366956/pexels-photo-1366956.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "thien-ma-than-dam" },
        { id: 11, title: "Bất Tử Thần Hoàng", author: "Hắc Dạ Bạch Châu", genre: "Thần Thoại", genreColor: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30", chapters: 5, rating: 9.4, views: "4.6K", releaseDate: "4 ngày trước", cover: "https://images.pexels.com/photos/1366958/pexels-photo-1366958.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "bat-tu-than-hoang" },
        { id: 12, title: "Huyền Môn Đại Sư", author: "Phong Lưu Thư Ngốc", genre: "Huyền Huyễn", genreColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30", chapters: 11, rating: 8.6, views: "8.9K", releaseDate: "5 ngày trước", cover: "https://images.pexels.com/photos/1366960/pexels-photo-1366960.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "huyen-mon-dai-su" },
        { id: 13, title: "Dị Năng Đô Thị", author: "Thiên Tằm Thổ Đậu", genre: "Đô Thị", genreColor: "bg-gray-600/20 text-gray-400 border-gray-500/30", chapters: 13, rating: 8.5, views: "9.7K", releaseDate: "5 ngày trước", cover: "https://images.pexels.com/photos/1366962/pexels-photo-1366962.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "di-nang-do-thi" },
        { id: 14, title: "Vạn Giới Chí Tôn", author: "Vô Tận Huyễn Tưởng", genre: "Dị Giới", genreColor: "bg-violet-600/20 text-violet-400 border-violet-500/30", chapters: 10, rating: 8.9, views: "7.8K", releaseDate: "6 ngày trước", cover: "https://images.pexels.com/photos/1366964/pexels-photo-1366964.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "van-gioi-chi-ton" },
        { id: 15, title: "Quỷ Vương Truyền Thuyết", author: "Cửu Tinh Độc Vũ", genre: "Linh Dị", genreColor: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30", chapters: 8, rating: 9.1, views: "6.4K", releaseDate: "6 ngày trước", cover: "https://images.pexels.com/photos/1366966/pexels-photo-1366966.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "quy-vuong-truyen-thuyet" },
        { id: 16, title: "Tu Tiên Nông Dân", author: "Kiếm Du Thái Hư", genre: "Tu Tiên", genreColor: "bg-purple-600/20 text-purple-400 border-purple-500/30", chapters: 15, rating: 8.4, views: "11.2K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366968/pexels-photo-1366968.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "tu-tien-nong-dan" },
        { id: 17, title: "Thần Cấp Anh Hùng", author: "Phi Thiên Ngư", genre: "Thần Thoại", genreColor: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30", chapters: 12, rating: 8.7, views: "9.3K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366970/pexels-photo-1366970.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "than-cap-anh-hung" },
        { id: 18, title: "Ma Kiếm Sinh Tử", author: "Thần Cơ", genre: "Ma Đạo", genreColor: "bg-red-600/20 text-red-400 border-red-500/30", chapters: 14, rating: 8.8, views: "10.5K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366972/pexels-photo-1366972.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "ma-kiem-sinh-tu" },
        { id: 19, title: "Huyền Thiên Bí Thuật", author: "Mộng Nhập Thần Cơ", genre: "Huyền Huyễn", genreColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30", chapters: 16, rating: 8.3, views: "12.1K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366974/pexels-photo-1366974.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "huyen-thien-bi-thuat" },
        { id: 20, title: "Kiếm Đạo Thần Hoàng", author: "Hắc Dạ Bạch Châu", genre: "Kiếm Tu", genreColor: "bg-blue-600/20 text-blue-400 border-blue-500/30", chapters: 18, rating: 8.6, views: "13.7K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366976/pexels-photo-1366976.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "kiem-dao-than-hoang" }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-30 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    >
                        <div className="text-lg text-purple-400 animate-bounce" style={{ animationDuration: '3s' }}>
                            {['✨', '🌟', '💫', '⭐', '🔮', '⚡'][Math.floor(Math.random() * 6)]}
                        </div>
                    </div>
                ))}
                
                {/* Mouse Trail */}
                <div 
                    className="absolute w-40 h-40 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-2xl transition-all duration-500 ease-out"
                    style={{
                        left: mousePosition.x - 80,
                        top: mousePosition.y - 80,
                    }}
                ></div>
            </div>

            <div className="relative z-10 pt-24">
                {/* Hero Section */}
                <section className="relative py-20 px-6">
                    <div className="container mx-auto text-center">
                        <div className="mb-12">
                            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 via-cyan-400 to-white bg-clip-text text-transparent animate-pulse">
                                Tiên Hiệp Phong Vân
                            </h1>
                            <p className="text-2xl text-purple-300 mb-8 font-medium tracking-wide">
                                逍遥自在 · 豪侠仗义 · 问鼎苍穹
                            </p>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Khám phá thế giới tu tiên huyền bí với hàng nghìn tác phẩm đỉnh cao. 
                                Từ nghịch thiên cải mệnh đến hào hiệp trượng nghĩa, mọi câu chuyện đều có tại đây.
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-6">
                            <Link
                                href="/truyen"
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 text-lg"
                            >
                                🚀 Bắt Đầu Đọc Truyện
                            </Link>
                            <Link
                                href="/top"
                                className="px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 font-semibold text-lg"
                            >
                                🏆 Xem Bảng Xếp Hạng
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Stories */}
                <section className="py-16 px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                ✨ Truyện Nổi Bật
                            </h2>
                            <p className="text-gray-400 text-lg">Những tác phẩm đỉnh cao được yêu thích nhất</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {featuredStories.map((story) => (
                                <div key={story.id} className="group relative bg-black/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={story.cover} 
                                            alt={story.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                                                {story.genre}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center justify-between text-sm text-gray-300">
                                                <span className="flex items-center">
                                                    ⭐ {story.rating}
                                                </span>
                                                <span className="flex items-center">
                                                    📚 {story.chapters} chương
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                                            {story.title}
                                        </h3>
                                        <p className="text-purple-400 text-sm mb-3 font-medium">
                                            ✍️ {story.author}
                                        </p>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {story.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                                                story.status === 'Đang cập nhật' 
                                                    ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                                                    : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                            }`}>
                                                {story.status}
                                            </span>
                                            <Link
                                                href={`/truyen/${story.id}`}
                                                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium"
                                            >
                                                Đọc Ngay
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Genres Grid */}
                <section className="py-16 px-6 bg-black/20 backdrop-blur-sm">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                📚 Thể Loại Truyện
                            </h2>
                            <p className="text-gray-400 text-lg">Khám phá thế giới tu tiên đa dạng</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {genres.map((genre) => (
                                <Link
                                    key={genre.name}
                                    href={`/truyen/the-loai/${genre.name.toLowerCase()}`}
                                    className="group relative p-6 bg-black/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 text-center"
                                >
                                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${genre.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        {genre.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        {genre.name}
                                    </h3>
                                    <p className="text-purple-400 text-sm font-medium">
                                        {genre.count} truyện
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Top Stories & New Updates */}
                <section className="py-16 px-6">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Top Stories */}
                            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
                                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent flex items-center">
                                    🏆 Top Truyện Hot
                                </h3>
                                <div className="space-y-4">
                                    {topStories.map((story) => (
                                        <div key={story.rank} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-900/20 transition-all duration-300 group cursor-pointer">
                                            <div className="text-2xl">{story.icon}</div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                                    {story.title}
                                                </h4>
                                                <p className="text-sm text-gray-400">
                                                    {story.author} • {story.views} lượt đọc
                                                </p>
                                            </div>
                                            <div className="text-lg font-bold text-purple-400">
                                                #{story.rank}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* New Updates */}
                            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
                                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent flex items-center">
                                    🔥 Cập Nhật Mới
                                </h3>
                                <div className="space-y-4">
                                    {newUpdates.map((update, index) => (
                                        <div key={index} className="p-4 rounded-xl hover:bg-purple-900/20 transition-all duration-300 group cursor-pointer">
                                            <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                                                {update.title}
                                            </h4>
                                            <p className="text-sm text-purple-400 mb-2">
                                                {update.chapter}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{update.author}</span>
                                                <span>{update.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Releases */}
                <section className="py-16 px-6 bg-black/10 backdrop-blur-sm">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                                🆕 Truyện Mới Ra Mắt
                            </h2>
                            <p className="text-gray-400 text-lg">Những tác phẩm tiên hiệp mới nhất vừa được phát hành</p>
                        </div>
                        
                        <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden">
                            <div className="p-6">
                                <div className="space-y-3">
                                    {newReleases.map((story, index) => (
                                        <Link
                                            key={story.id}
                                            href={`/truyen/${story.slug}`}
                                            className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-900/20 transition-all duration-300 border border-transparent hover:border-purple-500/30"
                                        >
                                            {/* Rank Number */}
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                                {index + 1}
                                            </div>
                                            
                                            {/* Story Cover */}
                                            <div className="flex-shrink-0 w-12 h-16 rounded-lg overflow-hidden border border-purple-500/30">
                                                <img 
                                                    src={story.cover} 
                                                    alt={story.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            
                                            {/* Story Info */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                                                    {story.title}
                                                </h4>
                                                <p className="text-sm text-purple-400 truncate">
                                                    ✍️ {story.author}
                                                </p>
                                            </div>
                                            
                                            {/* Genre */}
                                            <div className="flex-shrink-0">
                                                <span className={`px-3 py-1 text-xs rounded-full font-medium ${story.genreColor} border`}>
                                                    {story.genre}
                                                </span>
                                            </div>
                                            
                                            {/* Stats */}
                                            <div className="flex-shrink-0 text-right">
                                                <div className="text-sm text-gray-300 font-medium">
                                                    📚 {story.chapters} chương
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {story.releaseDate}
                                                </div>
                                            </div>
                                            
                                            {/* Rating */}
                                            <div className="flex-shrink-0 text-right">
                                                <div className="flex items-center text-yellow-400 text-sm">
                                                    ⭐ {story.rating}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {story.views} lượt đọc
                                                </div>
                                            </div>
                                            
                                            {/* Arrow */}
                                            <div className="flex-shrink-0 text-purple-400 group-hover:text-purple-300 transition-colors">
                                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            {/* View More Button */}
                            <div className="border-t border-purple-500/20 p-6 text-center">
                                <Link
                                    href="/truyen/moi-ra-mat"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/30 transform hover:scale-105"
                                >
                                    <span className="mr-2">👀</span>
                                    Xem Tất Cả Truyện Mới
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Call to Action */}
                <section className="py-20 px-6 text-center">
                    <div className="container mx-auto">
                        <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Gia Nhập Giang Hồ Tu Tiên
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Hàng nghìn tác phẩm tu tiên đỉnh cao đang chờ bạn khám phá. 
                                Bắt đầu hành trình nghịch thiên cải mệnh ngay hôm nay!
                            </p>
                            <div className="flex justify-center space-x-6">
                                <Link
                                    href="/auth/dang-ky"
                                    className="px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 text-lg"
                                >
                                    🚀 Đăng Ký Miễn Phí
                                </Link>
                                <Link
                                    href="/truyen"
                                    className="px-10 py-4 border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 font-semibold text-lg"
                                >
                                    📖 Khám Phá Ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}