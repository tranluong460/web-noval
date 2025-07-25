'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownLoading, setIsDropdownLoading] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Thay đổi thành true để test
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

    // Mock user data - thay thế bằng data thật từ context/store
    const userData = {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@email.com',
        avatar: null, // URL ảnh hoặc null
        role: 'user', // 'user', 'author', 'admin'
        notifications: 3
    };

    // Mock notifications data
    const notifications = [
        {
            id: 1,
            type: 'new_chapter',
            title: 'Chương mới',
            message: 'Truyện "Thiên Long Bát Bộ" có chương mới: Chương 125 - Quyết chiến Thiên Sơn',
            time: '5 phút trước',
            read: false,
            avatar: null,
            link: '/truyen/thien-long-bat-bo/chuong/125'
        },
        {
            id: 2,
            type: 'comment_reply',
            title: 'Phản hồi bình luận',
            message: 'Tác giả Kim Dung đã phản hồi bình luận của bạn trong truyện "Thần Điêu Đại Hiệp"',
            time: '1 giờ trước',
            read: false,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2',
            link: '/truyen/than-dieu-dai-hiep#comment-123'
        },
        {
            id: 3,
            type: 'follow',
            title: 'Người theo dõi mới',
            message: 'Nguyễn Văn B đã bắt đầu theo dõi bạn',
            time: '2 giờ trước',
            read: true,
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2',
            link: '/user/nguyen-van-b'
        },
        {
            id: 4,
            type: 'like',
            title: 'Lượt thích',
            message: '15 người đã thích bình luận của bạn trong "Anh Hùng Xạ Điêu"',
            time: '3 giờ trước',
            read: true,
            avatar: null,
            link: '/truyen/anh-hung-xa-dieu#comment-456'
        },
        {
            id: 5,
            type: 'system',
            title: 'Thông báo hệ thống',
            message: 'Hệ thống sẽ bảo trì từ 2:00 - 4:00 sáng ngày mai',
            time: '1 ngày trước',
            read: true,
            avatar: null,
            link: '/thong-bao/bao-tri'
        }
    ];

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case 'new_chapter':
                return (
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                );
            case 'comment_reply':
                return (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                );
            case 'follow':
                return (
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                );
            case 'like':
                return (
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                );
            case 'system':
                return (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-slate-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                        </svg>
                    </div>
                );
        }
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const navLinks = [
        {
            title: 'Truyện',
            href: '/truyen',
            type: 'link'
        },
        {
            title: 'Thể loại',
            href: '/truyen/the-loai',
            type: 'dropdown',
            items: [
                { title: 'Tiên Hiệp', href: '/truyen/the-loai/tien-hiep' },
                { title: 'Ngôn Tình', href: '/truyen/the-loai/ngon-tinh' },
                { title: 'Đô Thị', href: '/truyen/the-loai/do-thi' },
                { title: 'Kiếm Hiệp', href: '/truyen/the-loai/kiem-hiep' },
                { title: 'Quan Trường', href: '/truyen/the-loai/quan-truong' },
                { title: 'Linh Dị', href: '/truyen/the-loai/linh-di' },
                { title: 'Huyền Huyễn', href: '/truyen/the-loai/huyen-huyen' },
                { title: 'Khoa Huyễn', href: '/truyen/the-loai/khoa-huyen' },
                { title: 'Hệ Thống', href: '/truyen/the-loai/he-thong' },
                { title: 'Trọng Sinh', href: '/truyen/the-loai/trong-sinh' },
                { title: 'Xuyên Không', href: '/truyen/the-loai/xuyen-khong' },
                { title: 'Trinh Thám', href: '/truyen/the-loai/trinh-tham' },
                { title: 'Quân Sự', href: '/truyen/the-loai/quan-su' },
                { title: 'Lịch Sử', href: '/truyen/the-loai/lich-su' },
                { title: 'Hài Hước', href: '/truyen/the-loai/hai-huoc' },
                { title: 'Đam Mỹ', href: '/truyen/the-loai/dam-my' },
                { title: 'Bách Hợp', href: '/truyen/the-loai/bach-hop' },
                { title: 'Cổ Đại', href: '/truyen/the-loai/co-dai' },
                { title: 'Hiện Đại', href: '/truyen/the-loai/hien-dai' },
                { title: 'Mạt Thế', href: '/truyen/the-loai/mat-the' },
                { title: 'Ma Pháp', href: '/truyen/the-loai/ma-phap' },
                { title: 'Thể Thao', href: '/truyen/the-loai/the-thao' },
                { title: 'Game', href: '/truyen/the-loai/game' },
                { title: 'Light Novel', href: '/truyen/the-loai/light-novel' },
            ]
        },
        {
            title: 'Bảng xếp hạng',
            href: '/top',
            type: 'dropdown',
            items: [
                { title: 'Tuần', href: '/top/tuan' },
                { title: 'Tháng', href: '/top/thang' },
                { title: 'Năm', href: '/top/nam' }
            ]
        },
        {
            title: 'Tác giả',
            href: '/tac-gia',
            type: 'link'
        }
    ];

    return (
        <header className="bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 shadow-xl sticky top-0 z-50 border-b border-sky-200/60 backdrop-blur-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {/* Phần trên: Logo + Tìm kiếm + Auth */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden border-2 border-yellow-300/60">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"></div>
                                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white relative z-10 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/>
                                        <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z"/>
                                        <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent tracking-wide">
                                    Hào Hiệp Lâu
                                </span>
                                <span className="text-xs text-slate-500/90 font-medium" style={{ fontSize: '0.75rem' }}>
                                    Giang hồ tự do, hiệp nghĩa vô song
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Tìm kiếm - Desktop */}
                    <div className="hidden lg:flex flex-1 max-w-lg mx-4 xl:mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Tìm kiếm võ công, hiệp sĩ..."
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400 backdrop-blur-sm shadow-sm hover:shadow-md"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* User Info / Auth + Mobile Menu */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* Search Button - Mobile */}
                        <button className="lg:hidden p-1.5 sm:p-2 text-sky-500 hover:text-sky-600 transition-all duration-200 hover:bg-sky-100/60 rounded-md">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {isLoggedIn ? (
                            /* User Info - Desktop */
                            <div className="hidden md:flex items-center space-x-3">
                                {/* Notifications */}
                                <div className="relative">
                                    <button 
                                        onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                                        className="relative p-2 text-slate-600 hover:text-slate-700 hover:bg-sky-100/60 rounded-lg transition-all duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.73 21a2 2 0 01-3.46 0" />
                                        </svg>
                                        {unreadCount > 0 && (
                                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium animate-pulse">
                                                {unreadCount}
                                            </span>
                                        )}
                                    </button>

                                    {/* Notifications Dropdown */}
                                    {notificationDropdownOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-sky-200/60 z-50 overflow-hidden">
                                            {/* Header */}
                                            <div className="p-4 bg-gradient-to-r from-sky-50 to-cyan-50 border-b border-sky-200/40">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-semibold text-slate-700 flex items-center">
                                                        <svg className="w-5 h-5 mr-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
                                                        </svg>
                                                        Thông báo
                                                    </h3>
                                                    <div className="flex items-center space-x-2">
                                                        {unreadCount > 0 && (
                                                            <button className="text-xs text-cyan-600 hover:text-cyan-700 font-medium">
                                                                Đánh dấu đã đọc
                                                            </button>
                                                        )}
                                                        <button 
                                                            onClick={() => setNotificationDropdownOpen(false)}
                                                            className="p-1 hover:bg-sky-100/60 rounded-md transition-colors duration-200"
                                                        >
                                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Notifications List */}
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.length > 0 ? (
                                                    notifications.map((notification) => (
                                                        <div 
                                                            key={notification.id}
                                                            className={`p-4 border-b border-sky-100/60 hover:bg-sky-50/60 transition-all duration-200 cursor-pointer ${
                                                                !notification.read ? 'bg-cyan-50/40' : ''
                                                            }`}
                                                        >
                                                            <div className="flex items-start space-x-3">
                                                                {/* Icon or Avatar */}
                                                                <div className="flex-shrink-0">
                                                                    {notification.avatar ? (
                                                                        <img 
                                                                            src={notification.avatar} 
                                                                            alt="" 
                                                                            className="w-8 h-8 rounded-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        getNotificationIcon(notification.type)
                                                                    )}
                                                                </div>

                                                                {/* Content */}
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center justify-between mb-1">
                                                                        <h4 className="text-sm font-medium text-slate-700">
                                                                            {notification.title}
                                                                        </h4>
                                                                        {!notification.read && (
                                                                            <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                                                                        )}
                                                                    </div>
                                                                    <p className="text-sm text-slate-600 mb-2 line-clamp-2">
                                                                        {notification.message}
                                                                    </p>
                                                                    <div className="flex items-center justify-between">
                                                                        <span className="text-xs text-slate-400">
                                                                            {notification.time}
                                                                        </span>
                                                                        <button className="text-xs text-cyan-600 hover:text-cyan-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                            Xem
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="p-8 text-center">
                                                        <svg className="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
                                                        </svg>
                                                        <p className="text-slate-500 text-sm">Không có thông báo nào</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Footer */}
                                            {notifications.length > 0 && (
                                                <div className="p-3 bg-gradient-to-r from-sky-50/60 to-cyan-50/60 border-t border-sky-200/40">
                                                    <button className="w-full text-center text-sm text-cyan-600 hover:text-cyan-700 font-medium py-1 hover:bg-sky-100/60 rounded-md transition-all duration-200">
                                                        Xem tất cả thông báo
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* User Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                        className="flex items-center space-x-2 p-1 hover:bg-sky-100/60 rounded-lg transition-all duration-200"
                                    >
                                        {/* Avatar */}
                                        <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-medium text-sm shadow-md">
                                            {userData.avatar ? (
                                                <img src={userData.avatar} alt={userData.name} className="w-full h-full rounded-full object-cover" />
                                            ) : (
                                                getInitials(userData.name)
                                            )}
                                        </div>
                                        
                                        {/* User Info */}
                                        <div className="hidden lg:block text-left">
                                            <div className="text-sm font-medium text-slate-700">{userData.name}</div>
                                            <div className="text-xs text-slate-500 capitalize">{userData.role}</div>
                                        </div>

                                        {/* Dropdown Arrow */}
                                        <svg className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {userDropdownOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-sky-200/60 z-50 overflow-hidden">
                                            {/* User Info Header */}
                                            <div className="p-4 bg-gradient-to-r from-sky-50 to-cyan-50 border-b border-sky-200/40">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-medium shadow-md">
                                                        {userData.avatar ? (
                                                            <img src={userData.avatar} alt={userData.name} className="w-full h-full rounded-full object-cover" />
                                                        ) : (
                                                            getInitials(userData.name)
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-slate-700">{userData.name}</div>
                                                        <div className="text-sm text-slate-500">{userData.email}</div>
                                                        <div className="text-xs text-cyan-600 capitalize font-medium">{userData.role}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="py-2">
                                                {userData.role === 'admin' && (
                                                    <Link href="/admin" className="flex items-center px-4 py-2.5 text-sm text-slate-600 hover:text-slate-700 hover:bg-sky-50 transition-all duration-200">
                                                        <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>
                                                        Quản trị
                                                    </Link>
                                                )}
                                                
                                                {userData.role === 'author' && (
                                                    <Link href="/author" className="flex items-center px-4 py-2.5 text-sm text-slate-600 hover:text-slate-700 hover:bg-sky-50 transition-all duration-200">
                                                        <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                        Tác giả
                                                    </Link>
                                                )}

                                                <Link href="/user" className="flex items-center px-4 py-2.5 text-sm text-slate-600 hover:text-slate-700 hover:bg-sky-50 transition-all duration-200">
                                                    <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    Trang cá nhân
                                                </Link>

                                                <Link href="/user/profile" className="flex items-center px-4 py-2.5 text-sm text-slate-600 hover:text-slate-700 hover:bg-sky-50 transition-all duration-200">
                                                    <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    Cài đặt
                                                </Link>

                                                <div className="border-t border-sky-200/40 my-2"></div>

                                                <button 
                                                    onClick={() => setIsLoggedIn(false)}
                                                    className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
                                                >
                                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    Đăng xuất
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            /* Auth Buttons - Desktop */
                            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                                <Link
                                    href="/auth"
                                    className="px-3 py-2 lg:px-5 lg:py-2.5 text-xs lg:text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 border border-yellow-300/50"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    href="/auth/dang-ky"
                                    className="px-3 py-2 lg:px-5 lg:py-2.5 text-xs lg:text-sm font-medium text-slate-600 bg-white/90 hover:bg-sky-100/70 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-sky-200/60 hover:border-sky-300/70 backdrop-blur-sm"
                                >
                                    Đăng ký
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-1.5 sm:p-2 text-sky-500 hover:text-sky-600 transition-all duration-200 hover:bg-sky-100/60 rounded-md"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Phần dưới: Navigation */}
            <div className="border-t border-sky-200/40 bg-gradient-to-r from-sky-100/60 via-cyan-100/60 to-blue-100/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 h-10 sm:h-12">
                        {navLinks.map((navItem, index) => (
                            navItem.type === 'link' ? (
                                <Link 
                                    key={index}
                                    href={navItem.href} 
                                    className="relative text-slate-600 hover:text-slate-700 font-medium transition-all duration-300 text-xs lg:text-sm group whitespace-nowrap"
                                >
                                    {navItem.title}
                                    <span className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-400 group-hover:w-full transition-all duration-300 shadow-sm"></span>
                                </Link>
                            ) : (
                                <div key={index} className="relative group">
                                    <button 
                                        className="relative text-slate-600 hover:text-slate-700 font-medium transition-all duration-300 flex items-center text-xs lg:text-sm group whitespace-nowrap"
                                        onMouseEnter={() => {
                                            if (navItem.title === 'Thể loại') {
                                                setIsDropdownLoading('the-loai');
                                                setTimeout(() => setIsDropdownLoading(null), 500);
                                            }
                                        }}
                                    >
                                        {navItem.title}
                                        <svg className="w-3 h-3 lg:w-4 lg:h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-400 group-hover:w-full transition-all duration-300 shadow-sm"></span>
                                    </button>
                                    <div className={`absolute top-full left-0 mt-2.5 sm:mt-4.5 ${
                                        navItem.title === 'Thể loại' 
                                            ? 'w-[98vw] max-w-7xl sm:w-[28rem] md:w-[36rem] lg:w-[48rem] xl:w-[56rem] 2xl:w-[64rem] -translate-x-1/2 left-1/2 md:left-0 md:translate-x-0' 
                                            : 'w-36 sm:w-40 md:w-48'
                                    } bg-gradient-to-br from-white via-sky-50 to-white rounded-lg md:rounded-xl shadow-xl border border-sky-200/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] transform translate-y-2 group-hover:translate-y-0 backdrop-blur-lg`}>
                                        
                                        {navItem.title === 'Thể loại' && isDropdownLoading === 'the-loai' ? (
                                            <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                                                <div className="flex items-center justify-center mb-3 sm:mb-4">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2 sm:gap-3 lg:gap-4">
                                                    {[...Array(16)].map((_, skeletonIndex) => (
                                                        <div key={skeletonIndex} className="animate-pulse">
                                                            <div className="h-8 sm:h-9 md:h-10 bg-sky-100 rounded-md"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`${
                                                navItem.title === 'Thể loại' 
                                                    ? 'grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 md:p-5 lg:p-6' 
                                                    : 'py-1 sm:py-2'
                                            }`}>
                                                {navItem.items?.map((item, itemIndex) => (
                                                    <Link 
                                                        key={itemIndex}
                                                        href={item.href} 
                                                        className={`${
                                                            navItem.title === 'Thể loại' 
                                                                ? 'text-xs sm:text-sm md:text-sm text-slate-600 hover:text-slate-700 py-2 px-2 sm:py-2.5 sm:px-3 md:py-3 md:px-3 lg:px-4 rounded-md sm:rounded-lg hover:bg-sky-100/80 transition-all duration-300 block font-medium text-center hover:shadow-sm border border-transparent hover:border-sky-200/60 whitespace-nowrap min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center' 
                                                                : 'block px-2 py-1.5 sm:px-3 sm:py-2 md:py-2.5 text-xs sm:text-sm text-slate-600 hover:text-slate-700 hover:bg-sky-100/80 transition-all duration-300 font-medium whitespace-nowrap rounded-md'
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-sky-200/40 bg-gradient-to-br from-sky-50/90 to-cyan-50/90 backdrop-blur-sm max-h-[80vh] overflow-y-auto">
                    {/* Mobile Search */}
                    <div className="px-3 sm:px-4 py-3 border-b border-sky-200/40">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm võ công, hiệp sĩ..."
                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pl-10 sm:pl-12 pr-4 text-sm text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400 backdrop-blur-sm"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="px-3 sm:px-4 pt-3 pb-2 space-y-1 sm:space-y-2">
                        {navLinks.map((navItem, index) => 
                            navItem.type === 'link' ? (
                                <Link
                                    key={index}
                                    href={navItem.href}
                                    className="block px-3 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-600 hover:text-slate-700 hover:bg-sky-100/80 rounded-lg transition-all duration-300 border border-transparent hover:border-sky-200/60"
                                >
                                    {navItem.title}
                                </Link>
                            ) : (
                                <div key={index} className="space-y-2">
                                    <div className="px-3 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-700 bg-sky-50/80 rounded-lg border border-sky-200/40">
                                        {navItem.title}
                                    </div>
                                    <div className={`${
                                        navItem.title === 'Thể loại' 
                                            ? 'grid grid-cols-2 xs:grid-cols-3 gap-2 px-2' 
                                            : 'space-y-1 px-2'
                                    }`}>
                                        {navItem.items?.map((item, itemIndex) => (
                                            <Link 
                                                key={itemIndex}
                                                href={item.href} 
                                                className={`${
                                                    navItem.title === 'Thể loại' 
                                                        ? 'block px-2 py-2 text-xs text-slate-600 hover:text-slate-700 hover:bg-sky-100/60 rounded-md transition-all duration-300 font-medium text-center border border-transparent hover:border-sky-200/40 min-h-[2rem] flex items-center justify-center' 
                                                        : 'block px-3 py-1.5 text-sm text-slate-600 hover:text-slate-700 hover:bg-sky-100/60 rounded-md transition-all duration-300 font-medium'
                                                }`}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* Mobile User Info / Auth */}
                    {isLoggedIn ? (
                        <div className="pt-3 pb-4 sm:pb-6 border-t border-sky-200/40">
                            {/* User Info Card */}
                            <div className="px-3 sm:px-4 mb-4">
                                <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-lg p-4 border border-sky-200/40">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-medium shadow-md">
                                            {userData.avatar ? (
                                                <img src={userData.avatar} alt={userData.name} className="w-full h-full rounded-full object-cover" />
                                            ) : (
                                                getInitials(userData.name)
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-slate-700">{userData.name}</div>
                                            <div className="text-sm text-slate-500">{userData.email}</div>
                                            <div className="text-xs text-cyan-600 capitalize font-medium">{userData.role}</div>
                                        </div>
                                        {userData.notifications > 0 && (
                                            <div className="relative">
                                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.73 21a2 2 0 01-3.46 0" />
                                                </svg>
                                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium animate-pulse">
                                                    {unreadCount}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* User Menu Items */}
                            <div className="px-3 sm:px-4 space-y-1">
                                {userData.role === 'admin' && (
                                    <Link href="/admin" className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-700 hover:bg-sky-100/80 rounded-lg transition-all duration-300">
                                        <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        Quản trị
                                    </Link>
                                )}
                                
                                {userData.role === 'author' && (
                                    <Link href="/author" className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-700 hover:bg-sky-100/80 rounded-lg transition-all duration-300">
                                        <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        Tác giả
                                    </Link>
                                )}

                                <Link href="/user" className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-700 hover:bg-sky-100/80 rounded-lg transition-all duration-300">
                                    <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Trang cá nhân
                                </Link>

                                <Link href="/user/profile" className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-700 hover:bg-sky-100/80 rounded-lg transition-all duration-300">
                                    <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Cài đặt
                                </Link>

                                <button 
                                    onClick={() => setIsLoggedIn(false)}
                                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="pt-3 pb-4 sm:pb-6 border-t border-sky-200/40">
                            <div className="flex items-center px-3 sm:px-4 space-x-2 sm:space-x-3">
                                <Link
                                    href="/auth"
                                    className="flex-1 text-center px-3 py-2.5 sm:px-4 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all duration-300 shadow-md"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    href="/auth/dang-ky"
                                    className="flex-1 text-center px-3 py-2.5 sm:px-4 sm:py-3 text-sm font-medium text-slate-600 bg-white/90 hover:bg-sky-100/80 rounded-lg transition-all duration-300 shadow-md border border-sky-200/60"
                                >
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}