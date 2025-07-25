export default function DangKy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden border-2 border-yellow-300/60">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"></div>
                                <svg className="w-8 h-8 text-white relative z-10 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/>
                                    <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z"/>
                                    <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        Đăng ký
                    </h2>
                    <p className="text-slate-600 text-sm">
                        Tham gia cộng đồng Hào Hiệp Lâu
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-sky-200/60 p-8">
                    <form className="space-y-6">
                        {/* Username */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                                Tên đăng nhập
                            </label>
                            <div className="relative">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="w-full px-4 py-3 pl-12 text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400"
                                    placeholder="Nhập tên đăng nhập"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full px-4 py-3 pl-12 text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400"
                                    placeholder="Nhập địa chỉ email"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                                Mật khẩu
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="w-full px-4 py-3 pl-12 pr-12 text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400"
                                    placeholder="Nhập mật khẩu"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-sky-400 hover:text-sky-600 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                                Xác nhận mật khẩu
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="w-full px-4 py-3 pl-12 pr-12 text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400"
                                    placeholder="Nhập lại mật khẩu"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-sky-400 hover:text-sky-600 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Terms & Privacy */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-sky-300 rounded transition-colors duration-200"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="text-slate-600">
                                    Tôi đồng ý với{' '}
                                    <a href="/dieu-khoan-su-dung" className="font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200">
                                        Điều khoản sử dụng
                                    </a>
                                    {' '}và{' '}
                                    <a href="/chinh-sach-bao-mat" className="font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200">
                                        Chính sách bảo mật
                                    </a>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </span>
                                Tạo tài khoản
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-sky-200/60" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">Hoặc</span>
                            </div>
                        </div>

                        {/* Social Register */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2.5 px-4 border border-sky-200/60 rounded-lg shadow-sm bg-white/90 text-sm font-medium text-slate-600 hover:bg-sky-50/80 hover:border-sky-300/60 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="ml-2">Facebook</span>
                            </button>

                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2.5 px-4 border border-sky-200/60 rounded-lg shadow-sm bg-white/90 text-sm font-medium text-slate-600 hover:bg-sky-50/80 hover:border-sky-300/60 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span className="ml-2">Google</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Sign in link */}
                <div className="text-center">
                    <p className="text-sm text-slate-600">
                        Đã có tài khoản?{' '}
                        <a href="/auth" className="font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200">
                            Đăng nhập ngay
                        </a>
                    </p>
                </div>

                {/* Benefits */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-sky-200/40 p-4">
                    <h3 className="text-sm font-medium text-slate-700 mb-3 text-center">Lợi ích khi đăng ký</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="text-center py-2 px-3 text-slate-600 bg-sky-50/60 rounded-md">
                            📚 Lưu truyện yêu thích
                        </div>
                        <div className="text-center py-2 px-3 text-slate-600 bg-sky-50/60 rounded-md">
                            💬 Bình luận truyện
                        </div>
                        <div className="text-center py-2 px-3 text-slate-600 bg-sky-50/60 rounded-md">
                            🔔 Nhận thông báo
                        </div>
                        <div className="text-center py-2 px-3 text-slate-600 bg-sky-50/60 rounded-md">
                            ⭐ Đánh giá truyện
                        </div>
                    </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-gradient-to-r from-cyan-50/60 to-blue-50/60 rounded-lg border border-sky-200/40 p-4">
                    <h4 className="text-xs font-medium text-slate-700 mb-2">Yêu cầu mật khẩu:</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                        <li className="flex items-center">
                            <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Ít nhất 8 ký tự
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Có chữ hoa và chữ thường
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Có ít nhất 1 số
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}