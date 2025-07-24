'use client';

import React, { useState } from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { StoryCard } from '@/components/molecules/StoryCard';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Badge } from '@/components/atoms/Badge';
import mockData from '@/data/mock.json';
import { 
  BookOpen, 
  Clock, 
  Settings, 
  Trash2, 
  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('library');
  const { stories } = mockData;
  
  // Mock user library data
  const libraryStories = stories.slice(0, 6).map(story => ({
    ...story,
    progress: Math.floor(Math.random() * 100),
    lastRead: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  }));

  const historyStories = stories.slice(2, 8).map(story => ({
    ...story,
    progress: Math.floor(Math.random() * 100),
    lastRead: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Quản lý thư viện và lịch sử đọc của bạn</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Đang theo dõi</p>
                <p className="text-2xl font-bold text-gray-900">{libraryStories.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Đã đọc</p>
                <p className="text-2xl font-bold text-gray-900">{historyStories.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Đánh giá</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Thành tích</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('library')}
                className={`py-4 px-1 font-medium ${
                  activeTab === 'library'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Thư viện ({libraryStories.length})
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-4 px-1 font-medium ${
                  activeTab === 'history'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Lịch sử ({historyStories.length})
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 font-medium ${
                  activeTab === 'settings'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Cài đặt
              </button>
            </nav>
          </div>

          <div className="p-8">
            {/* Library Tab */}
            {activeTab === 'library' && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <Input
                      placeholder="Tìm kiếm trong thư viện..."
                      icon={<Search className="w-4 h-4" />}
                      className="w-64"
                    />
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Bộ lọc
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option>Mới cập nhật</option>
                      <option>Tên A-Z</option>
                      <option>Tiến độ đọc</option>
                      <option>Ngày thêm</option>
                    </select>
                    
                    <div className="flex border border-gray-300 rounded-lg">
                      <button className="p-2 bg-blue-50 text-blue-600">
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {libraryStories.map(story => (
                    <div key={story.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <StoryCard story={story} size="sm" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                            {story.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">by {story.author}</p>
                          
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Tiến độ</span>
                              <span>{story.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${story.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <p className="text-xs text-gray-500 mb-3">
                            Đọc lần cuối: {new Date(story.lastRead).toLocaleDateString('vi-VN')}
                          </p>

                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1">Tiếp tục đọc</Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-4">
                    <Input
                      placeholder="Tìm kiếm lịch sử..."
                      icon={<Search className="w-4 h-4" />}
                      className="w-64"
                    />
                  </div>
                  <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Xóa toàn bộ
                  </Button>
                </div>

                <div className="space-y-4">
                  {historyStories.map(story => (
                    <div key={story.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <img
                          src={story.cover}
                          alt={story.title}
                          className="w-16 h-24 object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 line-clamp-1 mb-1">
                          {story.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">by {story.author}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <Badge variant="secondary">{story.category}</Badge>
                          <span>Đọc: {new Date(story.lastRead).toLocaleDateString('vi-VN')}</span>
                          <span>{story.progress}% hoàn thành</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button size="sm">Tiếp tục đọc</Button>
                        <Button variant="outline" size="sm">Thêm vào thư viện</Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="max-w-2xl">
                <div className="space-y-8">
                  {/* Profile Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Thông tin cá nhân</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-600">U</span>
                        </div>
                        <Button variant="outline">Thay đổi avatar</Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Tên hiển thị" defaultValue="User123" />
                        <Input label="Email" defaultValue="user@example.com" />
                      </div>
                    </div>
                  </div>

                  {/* Reading Preferences */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tùy chọn đọc</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Chế độ tối</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tự động cuộn</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Thông báo chương mới</span>
                        <input type="checkbox" className="rounded" defaultChecked />
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Thành tích</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'Độc giả mới', icon: '📚', unlocked: true },
                        { name: 'Người đánh giá', icon: '⭐', unlocked: true },
                        { name: 'Bình luận viên', icon: '💬', unlocked: true },
                        { name: 'Người theo dõi', icon: '❤️', unlocked: false },
                      ].map((achievement, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg text-center ${
                            achievement.unlocked ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <div className="text-2xl mb-2">{achievement.icon}</div>
                          <p className={`text-sm font-medium ${
                            achievement.unlocked ? 'text-yellow-800' : 'text-gray-500'
                          }`}>
                            {achievement.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Button>Lưu thay đổi</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}