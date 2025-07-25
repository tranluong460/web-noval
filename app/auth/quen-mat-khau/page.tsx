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
                                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10V11.5C15.4 11.5 16 12.4 16 13V16C16 17.4 15.4 18 14.8 18H9.2C8.6 18 8 17.4 8 16V13C8 12.4 8.6 11.5 9.2 11.5V10C9.2 8.6 10.6 7 12 7M12 8.2C11.2 8.2 10.5 8.7 10.5 10V11.5H13.5V10C13.5 8.7 12.8 8.2 12 8.2Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        Khôi phục mật khẩu
                    </h2>
                    <p className="text-slate-600 text-sm">
                        Nhập email để nhận link đặt lại mật khẩu
                    </p>
                </div>

                {/* Main Form */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-sky-200/60 p-8">
                    <form className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Địa chỉ email
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full px-4 py-3 pl-12 text-slate-600 bg-white/95 border border-sky-200/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-slate-400"
                                    placeholder="Nhập email đã đăng ký"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                                Chúng tôi sẽ gửi link khôi phục đến email này
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </span>
                                Gửi link khôi phục
                            </button>
                        </div>

                        {/* Back to Login */}
                        <div className="text-center">
                            <a href="/auth" className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Quay lại đăng nhập
                            </a>
                        </div>
                    </form>
                </div>

                {/* Instructions */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-sky-200/40 p-6">
                    <h3 className="text-sm font-medium text-slate-700 mb-4 text-center flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Hướng dẫn khôi phục
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                1
                            </div>
                            <p className="text-sm text-slate-600">
                                Nhập email đã đăng ký tài khoản
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                2
                            </div>
                            <p className="text-sm text-slate-600">
                                Kiểm tra hộp thư và spam folder
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                3
                            </div>
                            <p className="text-sm text-slate-600">
                                Click vào link trong email (có hiệu lực 24h)
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                4
                            </div>
                            <p className="text-sm text-slate-600">
                                Tạo mật khẩu mới và đăng nhập
                            </p>
                        </div>
                    </div>
                </div>

                {/* Security Notice */}
                <div className="bg-gradient-to-r from-amber-50/80 to-yellow-50/80 border border-amber-200/60 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-amber-800 mb-1">
                                Lưu ý bảo mật
                            </h4>
                            <p className="text-xs text-amber-700">
                                Link khôi phục chỉ có hiệu lực trong 24 giờ và chỉ sử dụng được một lần. 
                                Không chia sẻ link này với bất kỳ ai.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Help Section */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-sky-200/40 p-4">
                    <h3 className="text-sm font-medium text-slate-700 mb-3 text-center">Cần hỗ trợ?</h3>
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

                {/* Alternative Options */}
                <div className="text-center space-y-3">
                    <p className="text-sm text-slate-600">
                        Vẫn không nhận được email?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <button className="text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200 underline">
                            Gửi lại email
                        </button>
                        <span className="hidden sm:inline text-slate-400">•</span>
                        <a href="/auth/dang-ky" className="text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200 underline">
                            Tạo tài khoản mới
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}