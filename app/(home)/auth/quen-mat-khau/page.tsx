export default function QuenMatKhau() {
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
                        Quên mật khẩu
                    </h2>
                    <p className="text-slate-600 text-sm">
                        Nhập email để nhận link khôi phục mật khẩu
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-sky-200/60 p-8">
                    <form className="space-y-6">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Email đã đăng ký
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full px-4 py-3 pl-12 text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400"
                                    placeholder="Nhập email của bạn"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                                Chúng tôi sẽ gửi link khôi phục mật khẩu đến email này
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                Gửi link khôi phục
                            </button>
                        </div>

                        {/* Back to login */}
                        <div className="text-center">
                            <a href="/auth/dang-nhap" className="text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200 inline-flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Quay lại đăng nhập
                            </a>
                        </div>
                    </form>
                </div>

                {/* Instructions */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-sky-200/40 p-4">
                    <h3 className="text-sm font-medium text-slate-700 mb-3 text-center">Hướng dẫn khôi phục</h3>
                    <div className="space-y-2 text-xs text-slate-600">
                        <div className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                            <p>Nhập email đã đăng ký tài khoản</p>
                        </div>
                        <div className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                            <p>Kiểm tra email (kể cả thư mục spam)</p>
                        </div>
                        <div className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                            <p>Nhấn vào link trong email để đặt lại mật khẩu</p>
                        </div>
                        <div className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                            <p>Tạo mật khẩu mới và đăng nhập</p>
                        </div>
                    </div>
                </div>

                {/* Help section */}
                <div className="bg-gradient-to-r from-cyan-50/60 to-blue-50/60 rounded-lg border border-sky-200/40 p-4">
                    <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">Cần hỗ trợ?</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <a href="/lien-he" className="text-center py-2 px-3 text-slate-600 hover:text-cyan-600 hover:bg-sky-100/60 rounded-md transition-all duration-200">
                            📞 Liên hệ
                        </a>
                        <a href="/huong-dan" className="text-center py-2 px-3 text-slate-600 hover:text-cyan-600 hover:bg-sky-100/60 rounded-md transition-all duration-200">
                            📖 Hướng dẫn
                        </a>
                        <a href="/faq" className="text-center py-2 px-3 text-slate-600 hover:text-cyan-600 hover:bg-sky-100/60 rounded-md transition-all duration-200">
                            ❓ FAQ
                        </a>
                        <a href="/bao-loi" className="text-center py-2 px-3 text-slate-600 hover:text-cyan-600 hover:bg-sky-100/60 rounded-md transition-all duration-200">
                            🐛 Báo lỗi
                        </a>
                    </div>
                </div>

                {/* Security note */}
                <div className="text-center">
                    <p className="text-xs text-slate-500">
                        🔒 Link khôi phục sẽ hết hạn sau 24 giờ vì lý do bảo mật
                    </p>
                </div>
            </div>
        </div>
    );
}