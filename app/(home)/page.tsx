'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Mock data
    const featuredStories = [
        {
            id: 1,
            title: "Thiên Long Bát Bộ",
            author: "Kim Dung",
            image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Câu chuyện về những anh hùng hào hiệp trong thời đại loạn lạc, với tình yêu và thù hận đan xen.",
            views: "2.5M",
            chapters: 50,
            status: "Hoàn thành",
            rating: 4.8
        },
        {
            id: 2,
            title: "Thần Điêu Đại Hiệp",
            author: "Kim Dung",
            image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Tình yêu bi thương của Dương Quá và Tiểu Long Nữ, cùng những cuộc phiêu lưu trong giang hồ.",
            views: "1.8M",
            chapters: 40,
            status: "Hoàn thành",
            rating: 4.9
        },
        {
            id: 3,
            title: "Anh Hùng Xạ Điêu",
            author: "Kim Dung",
            image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Cuộc đời của Quách Tĩnh từ một cậu bé ngây thơ trở thành đại hiệp một thời.",
            views: "2.1M",
            chapters: 45,
            status: "Hoàn thành",
            rating: 4.7
        }
    ];

    const newStories = [
        {
            id: 4,
            title: "Kiếm Thần Truyền Kỳ",
            author: "Huyền Thoại",
            image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
            chapters: 120,
            views: "850K",
            status: "Đang ra",
            updatedAt: "2 giờ trước",
            rating: 4.6
        },
        {
            id: 5,
            title: "Phong Thần Diễn Nghĩa",
            author: "Cổ Điển",
            image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
            chapters: 95,
            views: "720K",
            status: "Đang ra",
            updatedAt: "5 giờ trước",
            rating: 4.5
        },
        {
            id: 6,
            title: "Tây Du Ký",
            author: "Ngô Thừa Ân",
            image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
            chapters: 100,
            views: "1.2M",
            status: "Hoàn thành",
            updatedAt: "1 ngày trước",
            rating: 4.8
        }
    ];

    const topStories = [
        { id: 1, title: "Thiên Long Bát Bộ", author: "Kim Dung", views: "2.5M", rating: 4.8 },
        { id: 2, title: "Thần Điêu Đại Hiệp", author: "Kim Dung", views: "1.8M", rating: 4.9 },
        { id: 3, title: "Anh Hùng Xạ Điêu", author: "Kim Dung", views: "2.1M", rating: 4.7 },
        { id: 4, title: "Kiếm Thần Truyền Kỳ", author: "Huyền Thoại", views: "850K", rating: 4.6 },
        { id: 5, title: "Phong Thần Diễn Nghĩa", author: "Cổ Điển", views: "720K", rating: 4.5 }
    ];

    const categories = [
        { name: "Tiên Hiệp", icon: "⚔️", count: 1250, color: "from-purple-500 to-pink-500" },
        { name: "Kiếm Hiệp", icon: "🗡️", count: 980, color: "from-blue-500 to-cyan-500" },
        { name: "Ngôn Tình", icon: "💕", count: 750, color: "from-pink-500 to-rose-500" },
        { name: "Đô Thị", icon: "🏙️", count: 650, color: "from-green-500 to-emerald-500" },
        { name: "Huyền Huyễn", icon: "🌟", count: 890, color: "from-yellow-500 to-orange-500" },
        { name: "Lịch Sử", icon: "📜", count: 420, color: "from-amber-500 to-yellow-500" }
    ];

    // Auto slide for featured stories
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [featuredStories.length]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {/* Hero Section - Featured Stories Slider */}
            <section className="relative h-[500px] md:h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
                
                {featuredStories.map((story, index) => (
                    <div
                        key={story.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            backgroundImage: `url(${story.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                    </div>
                ))}

                <div className="relative z-20 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <div className="mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    Truyện nổi bật
                                </span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                {featuredStories[currentSlide].title}
                            </h1>
                            
                            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                                {featuredStories[currentSlide].description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-300">
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {featuredStories[currentSlide].author}
                                </span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    {featuredStories[currentSlide].views} lượt đọc
                                </span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {featuredStories[currentSlide].chapters} chương
                                </span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    {featuredStories[currentSlide].rating}
                                </span>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/truyen/${featuredStories[currentSlide].id}`}
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
                                    </svg>
                                    Đọc ngay
                                </Link>
                                <button className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Yêu thích
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex space-x-2">
                        {featuredStories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white/50 hover:bg-white/75'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                            Thể loại truyện
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Khám phá thế giới truyện đa dạng với nhiều thể loại hấp dẫn
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/truyen/the-loai/${category.name.toLowerCase()}`}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-sky-200/60"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-slate-700 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {category.count} truyện
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Stories Section */}
            <section className="py-12 md:py-16 bg-white/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                                Truyện mới cập nhật
                            </h2>
                            <p className="text-slate-600">
                                Những truyện vừa được cập nhật chương mới
                            </p>
                        </div>
                        <Link
                            href="/truyen?sort=new"
                            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-300"
                        >
                            Xem tất cả
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newStories.map((story) => (
                            <div key={story.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-sky-200/40">
                                <div className="relative">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            story.status === 'Đang ra' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {story.status}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <div className="flex items-center bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                                            <svg className="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {story.rating}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-1">
                                        {story.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-3">
                                        Tác giả: {story.author}
                                    </p>
                                    
                                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {story.chapters} chương
                                        </span>
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                            {story.views}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-500">
                                            Cập nhật: {story.updatedAt}
                                        </span>
                                        <Link
                                            href={`/truyen/${story.id}`}
                                            className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                                        >
                                            Đọc
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Stories Section */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Top Stories List */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                                        Bảng xếp hạng
                                    </h2>
                                    <p className="text-slate-600">
                                        Những truyện được yêu thích nhất
                                    </p>
                                </div>
                                <Link
                                    href="/top"
                                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-300"
                                >
                                    Xem tất cả
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-sky-200/60 overflow-hidden">
                                {topStories.map((story, index) => (
                                    <div key={story.id} className="flex items-center p-4 hover:bg-sky-50/60 transition-colors duration-300 border-b border-sky-100/60 last:border-b-0">
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mr-4 ${
                                            index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                                            index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
                                            index === 2 ? 'bg-gradient-to-r from-amber-600 to-yellow-600' :
                                            'bg-gradient-to-r from-slate-400 to-slate-500'
                                        }`}>
                                            {index + 1}
                                        </div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-slate-800 truncate">
                                                {story.title}
                                            </h3>
                                            <p className="text-sm text-slate-600">
                                                {story.author}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                </svg>
                                                {story.views}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {story.rating}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-sky-200/60 p-6">
                                <h3 className="font-bold text-lg text-slate-800 mb-4">
                                    Thống kê
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Tổng truyện</span>
                                        <span className="font-semibold text-slate-800">4,940</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Tác giả</span>
                                        <span className="font-semibold text-slate-800">1,250</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Người đọc</span>
                                        <span className="font-semibold text-slate-800">125,000</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Chương mới hôm nay</span>
                                        <span className="font-semibold text-cyan-600">342</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-sky-200/60 p-6">
                                <h3 className="font-bold text-lg text-slate-800 mb-4">
                                    Liên kết nhanh
                                </h3>
                                <div className="space-y-3">
                                    <Link href="/truyen?sort=hot" className="flex items-center text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                                        <svg className="w-4 h-4 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                        </svg>
                                        Truyện hot
                                    </Link>
                                    <Link href="/truyen?status=completed" className="flex items-center text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                                        <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Truyện hoàn thành
                                    </Link>
                                    <Link href="/tac-gia" className="flex items-center text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                                        <svg className="w-4 h-4 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Tác giả nổi tiếng
                                    </Link>
                                    <Link href="/tim-kiem" className="flex items-center text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                                        <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                        Tìm kiếm nâng cao
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Tham gia cộng đồng Hào Hiệp Lâu
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Khám phá thế giới truyện hào hiệp đầy màu sắc, kết nối với hàng ngàn độc giả và tác giả tài năng
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/auth/dang-ky"
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            Đăng ký miễn phí
                        </Link>
                        <Link
                            href="/truyen"
                            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
                            </svg>
                            Khám phá truyện
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}