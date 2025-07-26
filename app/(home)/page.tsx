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

    // Auto slide for hero carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const featuredStories = [
        {
            id: 1,
            title: "Nghịch Thiên Kiếm Đế",
            author: "Thiên Tằm Thổ Đậu",
            cover: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Một thanh niên bình thường bước vào con đường tu tiên, nghịch thiên cải mệnh, từ phàm nhân trở thành kiếm đế thống lĩnh thiên hạ...",
            genre: "Tu Tiên",
            status: "Đang cập nhật",
            chapters: 2847,
            rating: 9.2,
            views: "125M",
            tags: ["Hot", "Nghịch Thiên", "Kiếm Đạo"]
        },
        {
            id: 2,
            title: "Ma Đế Trọng Sinh",
            author: "Vô Tận Huyễn Tưởng",
            cover: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Ma đế một đời trọng sinh về quá khứ, quyết tâm thay đổi vận mệnh, lần này sẽ không để bi kịch lặp lại...",
            genre: "Ma Đạo",
            status: "Hoàn thành",
            chapters: 1523,
            rating: 8.9,
            views: "98M",
            tags: ["Trọng Sinh", "Ma Đạo", "Báo Thù"]
        },
        {
            id: 3,
            title: "Thần Thoại Tái Khởi",
            author: "Cửu Tinh Độc Vũ",
            cover: "https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Khi các vị thần cổ đại tỉnh giấc, thế giới sẽ ra sao? Liệu nhân loại có thể đối mặt với sức mạnh thần thoại...",
            genre: "Thần Thoại",
            status: "Đang cập nhật",
            chapters: 956,
            rating: 9.5,
            views: "87M",
            tags: ["Thần Thoại", "Cổ Đại", "Huyền Bí"]
        }
    ];

    const topStories = [
        { rank: 1, title: "Đấu Phá Thương Khung", author: "Thiên Tằm Thổ Đậu", views: "125M", icon: "🥇", trend: "+12%" },
        { rank: 2, title: "Vũ Động Càn Khôn", author: "Thiên Tằm Thổ Đậu", views: "98M", icon: "🥈", trend: "+8%" },
        { rank: 3, title: "Đại Chúa Tể", author: "Thiên Tằm Thổ Đậu", views: "87M", icon: "🥉", trend: "+15%" },
        { rank: 4, title: "Nguyên Tôn", author: "Thiên Tằm Thổ Đậu", views: "76M", icon: "🏆", trend: "+5%" },
        { rank: 5, title: "Thần Mộ", author: "Thần Cơ", views: "65M", icon: "⭐", trend: "+20%" }
    ];

    const genres = [
        { name: 'Tu Tiên', icon: '⚡', count: '12,847', color: 'from-purple-600 to-indigo-700', desc: 'Nghịch thiên cải mệnh' },
        { name: 'Ma Đạo', icon: '🔥', count: '8,234', color: 'from-red-600 to-black', desc: 'Tà ma ngoại đạo' },
        { name: 'Kiếm Tu', icon: '⚔️', count: '9,567', color: 'from-blue-600 to-cyan-700', desc: 'Nhất kiếm phá vạn pháp' },
        { name: 'Thần Thoại', icon: '🌟', count: '5,432', color: 'from-yellow-500 to-orange-600', desc: 'Cổ thần tái sinh' },
        { name: 'Huyền Huyễn', icon: '🌀', count: '15,678', color: 'from-emerald-600 to-teal-700', desc: 'Huyền chi huyền' },
        { name: 'Dị Giới', icon: '🌍', count: '7,890', color: 'from-violet-600 to-purple-700', desc: 'Vạn giới tranh hùng' },
        { name: 'Đô Thị', icon: '🏙️', count: '11,234', color: 'from-gray-600 to-slate-700', desc: 'Đô thị tu tiên' },
        { name: 'Linh Dị', icon: '👻', count: '4,567', color: 'from-indigo-600 to-purple-800', desc: 'Quỷ thần khó lường' }
    ];

    const newUpdates = [
        { title: "Nghịch Thiên Kiếm Đế", chapter: "Chương 2847: Đại Chiến Bắt Đầu", time: "2 phút trước", author: "Thiên Tằm Thổ Đậu", isNew: true },
        { title: "Ma Đế Trọng Sinh", chapter: "Chương 1524: Hồi Quy", time: "15 phút trước", author: "Vô Tận Huyễn Tưởng", isNew: true },
        { title: "Thần Thoại Tái Khởi", chapter: "Chương 957: Thần Lực Giác Tỉnh", time: "1 giờ trước", author: "Cửu Tinh Độc Vũ", isNew: false },
        { title: "Kiếm Đạo Độc Tôn", chapter: "Chương 3456: Phá Vỡ Giới Hạn", time: "2 giờ trước", author: "Kiếm Du Thái Hư", isNew: false },
        { title: "Vạn Cổ Thần Đế", chapter: "Chương 2134: Cổ Thần Truyền Thừa", time: "3 giờ trước", author: "Phi Thiên Ngư", isNew: false }
    ];

    const newReleases = [
        { id: 1, title: "Thiên Đạo Vô Thường", author: "Mộng Nhập Thần Cơ", genre: "Tu Tiên", genreColor: "bg-purple-600/20 text-purple-400 border-purple-500/30", chapters: 1, rating: 9.8, views: "1.2K", releaseDate: "Hôm nay", cover: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "thien-dao-vo-thuong", isHot: true },
        { id: 2, title: "Ma Tôn Lâm Thế", author: "Hắc Dạ Bạch Châu", genre: "Ma Đạo", genreColor: "bg-red-600/20 text-red-400 border-red-500/30", chapters: 3, rating: 9.5, views: "2.8K", releaseDate: "Hôm nay", cover: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "ma-ton-lam-the", isHot: true },
        { id: 3, title: "Kiếm Phá Hư Không", author: "Phong Lưu Thư Ngốc", genre: "Kiếm Tu", genreColor: "bg-blue-600/20 text-blue-400 border-blue-500/30", chapters: 2, rating: 9.3, views: "1.9K", releaseDate: "Hôm nay", cover: "https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "kiem-pha-hu-khong", isHot: false },
        { id: 4, title: "Thần Hoàng Bất Diệt", author: "Thiên Tằm Thổ Đậu", genre: "Thần Thoại", genreColor: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30", chapters: 5, rating: 9.7, views: "5.2K", releaseDate: "Hôm qua", cover: "https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "than-hoang-bat-diet", isHot: true },
        { id: 5, title: "Huyền Thiên Đế Tôn", author: "Vô Tận Huyễn Tưởng", genre: "Huyền Huyễn", genreColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30", chapters: 4, rating: 9.1, views: "3.7K", releaseDate: "Hôm qua", cover: "https://images.pexels.com/photos/1366946/pexels-photo-1366946.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "huyen-thien-de-ton", isHot: false },
        { id: 6, title: "Dị Giới Phong Thần", author: "Cửu Tinh Độc Vũ", genre: "Dị Giới", genreColor: "bg-violet-600/20 text-violet-400 border-violet-500/30", chapters: 6, rating: 8.9, views: "4.1K", releaseDate: "2 ngày trước", cover: "https://images.pexels.com/photos/1366948/pexels-photo-1366948.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "di-gioi-phong-than", isHot: false },
        { id: 7, title: "Đô Thị Tu Tiên Giả", author: "Kiếm Du Thái Hư", genre: "Đô Thị", genreColor: "bg-gray-600/20 text-gray-400 border-gray-500/30", chapters: 8, rating: 8.7, views: "6.3K", releaseDate: "2 ngày trước", cover: "https://images.pexels.com/photos/1366950/pexels-photo-1366950.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "do-thi-tu-tien-gia", isHot: false },
        { id: 8, title: "Linh Dị Thế Giới", author: "Phi Thiên Ngư", genre: "Linh Dị", genreColor: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30", chapters: 3, rating: 9.0, views: "2.5K", releaseDate: "3 ngày trước", cover: "https://images.pexels.com/photos/1366952/pexels-photo-1366952.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "linh-di-the-gioi", isHot: false },
        { id: 9, title: "Vô Cực Kiếm Tôn", author: "Thần Cơ", genre: "Kiếm Tu", genreColor: "bg-blue-600/20 text-blue-400 border-blue-500/30", chapters: 7, rating: 8.8, views: "5.8K", releaseDate: "3 ngày trước", cover: "https://images.pexels.com/photos/1366954/pexels-photo-1366954.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "vo-cuc-kiem-ton", isHot: false },
        { id: 10, title: "Thiên Ma Thần Đàm", author: "Mộng Nhập Thần Cơ", genre: "Ma Đạo", genreColor: "bg-red-600/20 text-red-400 border-red-500/30", chapters: 9, rating: 9.2, views: "7.1K", releaseDate: "4 ngày trước", cover: "https://images.pexels.com/photos/1366956/pexels-photo-1366956.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "thien-ma-than-dam", isHot: false },
        { id: 11, title: "Bất Tử Thần Hoàng", author: "Hắc Dạ Bạch Châu", genre: "Thần Thoại", genreColor: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30", chapters: 5, rating: 9.4, views: "4.6K", releaseDate: "4 ngày trước", cover: "https://images.pexels.com/photos/1366958/pexels-photo-1366958.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "bat-tu-than-hoang", isHot: false },
        { id: 12, title: "Huyền Môn Đại Sư", author: "Phong Lưu Thư Ngốc", genre: "Huyền Huyễn", genreColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30", chapters: 11, rating: 8.6, views: "8.9K", releaseDate: "5 ngày trước", cover: "https://images.pexels.com/photos/1366960/pexels-photo-1366960.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "huyen-mon-dai-su", isHot: false },
        { id: 13, title: "Dị Năng Đô Thị", author: "Thiên Tằm Thổ Đậu", genre: "Đô Thị", genreColor: "bg-gray-600/20 text-gray-400 border-gray-500/30", chapters: 13, rating: 8.5, views: "9.7K", releaseDate: "5 ngày trước", cover: "https://images.pexels.com/photos/1366962/pexels-photo-1366962.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "di-nang-do-thi", isHot: false },
        { id: 14, title: "Vạn Giới Chí Tôn", author: "Vô Tận Huyễn Tưởng", genre: "Dị Giới", genreColor: "bg-violet-600/20 text-violet-400 border-violet-500/30", chapters: 10, rating: 8.9, views: "7.8K", releaseDate: "6 ngày trước", cover: "https://images.pexels.com/photos/1366964/pexels-photo-1366964.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "van-gioi-chi-ton", isHot: false },
        { id: 15, title: "Quỷ Vương Truyền Thuyết", author: "Cửu Tinh Độc Vũ", genre: "Linh Dị", genreColor: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30", chapters: 8, rating: 9.1, views: "6.4K", releaseDate: "6 ngày trước", cover: "https://images.pexels.com/photos/1366966/pexels-photo-1366966.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "quy-vuong-truyen-thuyet", isHot: false },
        { id: 16, title: "Tu Tiên Nông Dân", author: "Kiếm Du Thái Hư", genre: "Tu Tiên", genreColor: "bg-purple-600/20 text-purple-400 border-purple-500/30", chapters: 15, rating: 8.4, views: "11.2K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366968/pexels-photo-1366968.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "tu-tien-nong-dan", isHot: false },
        { id: 17, title: "Thần Cấp Anh Hùng", author: "Phi Thiên Ngư", genre: "Thần Thoại", genreColor: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30", chapters: 12, rating: 8.7, views: "9.3K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366970/pexels-photo-1366970.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "than-cap-anh-hung", isHot: false },
        { id: 18, title: "Ma Kiếm Sinh Tử", author: "Thần Cơ", genre: "Ma Đạo", genreColor: "bg-red-600/20 text-red-400 border-red-500/30", chapters: 14, rating: 8.8, views: "10.5K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366972/pexels-photo-1366972.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "ma-kiem-sinh-tu", isHot: false },
        { id: 19, title: "Huyền Thiên Bí Thuật", author: "Mộng Nhập Thần Cơ", genre: "Huyền Huyễn", genreColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30", chapters: 16, rating: 8.3, views: "12.1K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366974/pexels-photo-1366974.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "huyen-thien-bi-thuat", isHot: false },
        { id: 20, title: "Kiếm Đạo Thần Hoàng", author: "Hắc Dạ Bạch Châu", genre: "Kiếm Tu", genreColor: "bg-blue-600/20 text-blue-400 border-blue-500/30", chapters: 18, rating: 8.6, views: "13.7K", releaseDate: "1 tuần trước", cover: "https://images.pexels.com/photos/1366976/pexels-photo-1366976.jpeg?auto=compress&cs=tinysrgb&w=100", slug: "kiem-dao-than-hoang", isHot: false }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Animated Gradient Mesh */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                {/* Floating Particles */}
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-40 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    >
                        <div className="text-lg text-purple-400 animate-bounce" style={{ animationDuration: '3s' }}>
                            {['✨', '🌟', '💫', '⭐', '🔮', '⚡', '🌙', '💎'][Math.floor(Math.random() * 8)]}
                        </div>
                    </div>
                ))}
                
                {/* Enhanced Mouse Trail */}
                <div 
                    className="absolute w-96 h-96 bg-gradient-radial from-purple-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                ></div>
            </div>

            <div className="relative z-10 pt-24">
                {/* Hero Carousel Section */}
                <section className="relative py-16 px-6 overflow-hidden">
                    <div className="container mx-auto">
                        <div className="relative h-[600px] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-xl border border-purple-500/30">
                            {/* Carousel Container */}
                            <div className="relative h-full">
                                {featuredStories.map((story, index) => (
                                    <div
                                        key={story.id}
                                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                        }`}
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <img 
                                                src={story.cover} 
                                                alt={story.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative h-full flex items-center">
                                            <div className="container mx-auto px-8">
                                                <div className="max-w-2xl">
                                                    {/* Tags */}
                                                    <div className="flex items-center space-x-3 mb-4">
                                                        {story.tags.map((tag) => (
                                                            <span key={tag} className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Title */}
                                                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                                                        {story.title}
                                                    </h1>

                                                    {/* Author & Genre */}
                                                    <div className="flex items-center space-x-6 mb-6 text-lg">
                                                        <span className="text-purple-300">✍️ {story.author}</span>
                                                        <span className="text-cyan-300">📚 {story.genre}</span>
                                                        <span className="text-yellow-300">⭐ {story.rating}</span>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                                                        {story.description}
                                                    </p>

                                                    {/* Stats */}
                                                    <div className="flex items-center space-x-8 mb-8">
                                                        <div className="text-center">
                                                            <div className="text-2xl font-bold text-white">{story.chapters}</div>
                                                            <div className="text-sm text-gray-400">Chương</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-2xl font-bold text-white">{story.views}</div>
                                                            <div className="text-sm text-gray-400">Lượt đọc</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-2xl font-bold text-white">{story.status}</div>
                                                            <div className="text-sm text-gray-400">Trạng thái</div>
                                                        </div>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="flex space-x-4">
                                                        <Link
                                                            href={`/truyen/${story.id}`}
                                                            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 text-lg"
                                                        >
                                                            🚀 Đọc Ngay
                                                        </Link>
                                                        <button className="px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 font-semibold text-lg">
                                                            💖 Yêu Thích
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Controls */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                                {featuredStories.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentSlide 
                                                ? 'bg-purple-500 w-8' 
                                                : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredStories.length) % featuredStories.length)}
                                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredStories.length)}
                                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quick Stats Bar */}
                <section className="py-8 px-6 bg-black/20 backdrop-blur-sm border-y border-purple-500/20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="group cursor-pointer">
                                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    50,000+
                                </div>
                                <div className="text-gray-400">Truyện Tu Tiên</div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    1M+
                                </div>
                                <div className="text-gray-400">Độc Giả</div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    5,000+
                                </div>
                                <div className="text-gray-400">Tác Giả</div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    24/7
                                </div>
                                <div className="text-gray-400">Cập Nhật</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Genres Grid - Enhanced */}
                <section className="py-20 px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                📚 Thể Loại Tu Tiên
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Khám phá thế giới tu tiên đa dạng với 8 thể loại chính, từ nghịch thiên cải mệnh đến huyền bí linh dị
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {genres.map((genre, index) => (
                                <Link
                                    key={genre.name}
                                    href={`/truyen/the-loai/${genre.name.toLowerCase()}`}
                                    className="group relative p-8 bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-center overflow-hidden"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Background Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                                    
                                    {/* Icon */}
                                    <div className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${genre.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                                        {genre.icon}
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                        {genre.name}
                                    </h3>
                                    <p className="text-purple-400 text-sm font-medium mb-2">
                                        {genre.count} truyện
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        {genre.desc}
                                    </p>

                                    {/* Hover Arrow */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="py-16 px-6">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Top Stories - Enhanced */}
                            <div className="lg:col-span-1">
                                <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 h-fit sticky top-24">
                                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent flex items-center">
                                        🏆 Top Truyện Hot
                                    </h3>
                                    <div className="space-y-4">
                                        {topStories.map((story, index) => (
                                            <div key={story.rank} className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-purple-900/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-500/30">
                                                <div className="text-3xl flex-shrink-0">{story.icon}</div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                                                        {story.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-400 truncate">
                                                        {story.author}
                                                    </p>
                                                    <div className="flex items-center justify-between mt-1">
                                                        <span className="text-xs text-purple-400">{story.views} lượt đọc</span>
                                                        <span className="text-xs text-green-400">{story.trend}</span>
                                                    </div>
                                                </div>
                                                <div className="text-2xl font-bold text-purple-400 flex-shrink-0">
                                                    #{story.rank}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <Link
                                        href="/top"
                                        className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 font-semibold"
                                    >
                                        Xem Tất Cả Bảng Xếp Hạng
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* New Updates - Enhanced */}
                            <div className="lg:col-span-2">
                                <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent flex items-center">
                                            🔥 Cập Nhật Mới Nhất
                                        </h3>
                                        <Link
                                            href="/cap-nhat-moi"
                                            className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                                        >
                                            Xem tất cả →
                                        </Link>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {newUpdates.map((update, index) => (
                                            <div key={index} className="group p-6 rounded-2xl hover:bg-purple-900/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-500/30">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-3 mb-2">
                                                            <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                                                {update.title}
                                                            </h4>
                                                            {update.isNew && (
                                                                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-medium animate-pulse">
                                                                    NEW
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-purple-400 mb-3 font-medium">
                                                            {update.chapter}
                                                        </p>
                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="text-gray-400">✍️ {update.author}</span>
                                                            <span className="text-gray-500">{update.time}</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Releases - Enhanced */}
                <section className="py-20 px-6 bg-black/10 backdrop-blur-sm">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                🆕 Truyện Mới Ra Mắt
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Những tác phẩm tiên hiệp mới nhất vừa được phát hành, đón đọc ngay để không bỏ lỡ những câu chuyện hấp dẫn
                            </p>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden">
                            <div className="p-8">
                                <div className="grid gap-4">
                                    {newReleases.map((story, index) => (
                                        <Link
                                            key={story.id}
                                            href={`/truyen/${story.slug}`}
                                            className="group flex items-center space-x-6 p-6 rounded-2xl hover:bg-purple-900/20 transition-all duration-300 border border-transparent hover:border-purple-500/30"
                                        >
                                            {/* Rank */}
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                                                {index + 1}
                                            </div>
                                            
                                            {/* Cover */}
                                            <div className="flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden border-2 border-purple-500/30 shadow-lg">
                                                <img 
                                                    src={story.cover} 
                                                    alt={story.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            
                                            {/* Story Info */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors text-lg truncate">
                                                        {story.title}
                                                    </h4>
                                                    {story.isHot && (
                                                        <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full font-medium animate-pulse">
                                                            🔥 HOT
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-purple-400 text-sm mb-1">
                                                    ✍️ {story.author}
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    {story.releaseDate}
                                                </p>
                                            </div>
                                            
                                            {/* Genre */}
                                            <div className="flex-shrink-0">
                                                <span className={`px-4 py-2 text-sm rounded-xl font-medium ${story.genreColor} border`}>
                                                    {story.genre}
                                                </span>
                                            </div>
                                            
                                            {/* Stats */}
                                            <div className="flex-shrink-0 text-right min-w-[120px]">
                                                <div className="flex items-center justify-end space-x-4 text-sm mb-1">
                                                    <span className="text-yellow-400">⭐ {story.rating}</span>
                                                    <span className="text-gray-300">📚 {story.chapters}</span>
                                                </div>
                                                <div className="text-gray-500 text-xs">
                                                    {story.views} lượt đọc
                                                </div>
                                            </div>
                                            
                                            {/* Arrow */}
                                            <div className="flex-shrink-0 text-purple-400 group-hover:text-purple-300 transition-colors">
                                                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            {/* View More Button */}
                            <div className="border-t border-purple-500/20 p-8 text-center bg-black/20">
                                <Link
                                    href="/truyen/moi-ra-mat"
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-2xl hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/30 transform hover:scale-105 text-lg"
                                >
                                    <span className="mr-3">👀</span>
                                    Khám Phá Thêm Truyện Mới
                                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action - Enhanced */}
                <section className="py-24 px-6 text-center">
                    <div className="container mx-auto">
                        <div className="relative bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl p-16 border border-purple-500/30 overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20"></div>
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-32 h-32 border border-purple-400/20 rounded-full"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            animationDelay: `${i * 0.5}s`
                                        }}
                                    ></div>
                                ))}
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Gia Nhập Giang Hồ Tu Tiên
                                </h2>
                                <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                                    Hàng nghìn tác phẩm tu tiên đỉnh cao đang chờ bạn khám phá. 
                                    Bắt đầu hành trình nghịch thiên cải mệnh, tiêu dao tự tại ngay hôm nay!
                                </p>
                                
                                {/* Feature Highlights */}
                                <div className="grid md:grid-cols-3 gap-8 mb-12">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                                            📚
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">50,000+ Truyện</h3>
                                        <p className="text-gray-400">Kho tàng truyện tu tiên khổng lồ</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                                            🔄
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Cập Nhật 24/7</h3>
                                        <p className="text-gray-400">Luôn có chương mới mỗi ngày</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                                            👥
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Cộng Đồng 1M+</h3>
                                        <p className="text-gray-400">Kết nối với đồng đạo tu tiên</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                    <Link
                                        href="/auth/dang-ky"
                                        className="px-12 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 font-bold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 text-xl"
                                    >
                                        🚀 Đăng Ký Miễn Phí
                                    </Link>
                                    <Link
                                        href="/truyen"
                                        className="px-12 py-5 border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 font-bold text-xl"
                                    >
                                        📖 Khám Phá Ngay
                                    </Link>
                                </div>
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

                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}