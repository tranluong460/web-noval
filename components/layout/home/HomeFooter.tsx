'use client';

import Link from 'next/link';

export default function HomeFooter() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Truyện',
            links: [
                { title: 'Truyện mới', href: '/truyen?sort=new' },
                { title: 'Truyện hot', href: '/truyen?sort=hot' },
                { title: 'Truyện hoàn thành', href: '/truyen?status=completed' },
                { title: 'Truyện đang ra', href: '/truyen?status=ongoing' },
                { title: 'Tìm kiếm', href: '/tim-kiem' }
            ]
        },
        {
            title: 'Thể loại',
            links: [
                { title: 'Tiên Hiệp', href: '/truyen/the-loai/tien-hiep' },
                { title: 'Ngôn Tình', href: '/truyen/the-loai/ngon-tinh' },
                { title: 'Đô Thị', href: '/truyen/the-loai/do-thi' },
                { title: 'Kiếm Hiệp', href: '/truyen/the-loai/kiem-hiep' },
                { title: 'Xem tất cả', href: '/truyen/the-loai' }
            ]
        },
        {
            title: 'Bảng xếp hạng',
            links: [
                { title: 'Top tuần', href: '/top/tuan' },
                { title: 'Top tháng', href: '/top/thang' },
                { title: 'Top năm', href: '/top/nam' },
                { title: 'Yêu thích nhất', href: '/top/yeu-thich' },
                { title: 'Đọc nhiều nhất', href: '/top/doc-nhieu' }
            ]
        },
        {
            title: 'Hỗ trợ',
            links: [
                { title: 'Liên hệ', href: '/lien-he' },
                { title: 'Báo lỗi', href: '/bao-loi' },
                { title: 'Góp ý', href: '/gop-y' },
                { title: 'Hướng dẫn', href: '/huong-dan' },
                { title: 'FAQ', href: '/faq' }
            ]
        }
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            )
        },
        {
            name: 'Discord',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 border-t border-sky-200/60" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                    {/* Logo & Description */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 group mb-4">
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
                        
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                            Nơi hội tụ những câu chuyện võ hiệp hay nhất, 
                            mang đến cho bạn thế giới giang hồ đầy màu sắc 
                            với những anh hùng hào hiệp.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="p-2 text-slate-500 hover:text-cyan-600 bg-white/60 hover:bg-sky-100/80 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-sky-200/40 hover:border-sky-300/60 transform hover:scale-110"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index} className="space-y-3 sm:space-y-4">
                            <h3 className="text-sm sm:text-base font-semibold text-slate-700 mb-3 sm:mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-xs sm:text-sm text-slate-600 hover:text-cyan-600 transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-sky-200/40">
                    <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-2 sm:mb-3">
                            Nhận thông báo truyện mới
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                            Đăng ký để nhận thông báo khi có truyện mới và chương mới cập nhật
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn..."
                                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 text-sm text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400"
                            />
                            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 border border-yellow-300/50 whitespace-nowrap">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-sky-200/40 bg-gradient-to-r from-sky-100/60 via-cyan-100/60 to-blue-100/60">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                        <div className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
                            © {currentYear} Hào Hiệp Lâu. Tất cả quyền được bảo lưu.
                        </div>
                        
                        <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                            <Link href="/chinh-sach-bao-mat" className="text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                                Chính sách bảo mật
                            </Link>
                            <Link href="/dieu-khoan-su-dung" className="text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                                Điều khoản sử dụng
                            </Link>
                            <Link href="/lien-he" className="text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                                Liên hệ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}