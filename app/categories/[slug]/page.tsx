import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { StoryCard } from '@/components/molecules/StoryCard';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Badge } from '@/components/atoms/Badge';
import mockData from '@/data/mock.json';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  Star,
  Grid3X3,
  List,
  SlidersHorizontal
} from 'lucide-react';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { stories, categories, tags } = mockData;
  const category = categories.find(cat => cat.slug === params.slug);
  const categoryStories = stories.filter(story => 
    story.category.toLowerCase() === category?.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-blue-600">Trang chủ</a>
          <span>/</span>
          <a href="/categories" className="hover:text-blue-600">Thể loại</a>
          <span>/</span>
          <span className="text-gray-900 font-medium">{category?.name}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{category?.name}</h1>
          <p className="text-gray-600">{category?.count} truyện</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button className="border-b-2 border-blue-600 text-blue-600 py-2 px-1 font-medium">
              Tất cả
            </button>
            <button className="text-gray-500 hover:text-gray-700 py-2 px-1">
              Mới nhất
            </button>
            <button className="text-gray-500 hover:text-gray-700 py-2 px-1">
              Đang hot
            </button>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Bộ lọc</h3>
                <SlidersHorizontal className="w-5 h-5 text-gray-400" />
              </div>

              {/* Status Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Trạng thái</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700">Đang tiến hành</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700">Hoàn thành</span>
                  </label>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Đánh giá</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <div className="ml-2 flex items-center">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-1 text-sm text-gray-700">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 8).map(tag => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full">Áp dụng</Button>
                <Button variant="outline" className="w-full">Xóa tất cả</Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Tìm kiếm trong danh mục..."
                  icon={<Search className="w-4 h-4" />}
                  className="w-64"
                />
                <Button variant="outline" className="lg:hidden">
                  <Filter className="w-4 h-4 mr-2" />
                  Bộ lọc
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Sắp xếp theo độ phổ biến</option>
                  <option>Mới nhất</option>
                  <option>Đánh giá cao nhất</option>
                  <option>Nhiều lượt xem nhất</option>
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

            {/* Results Count */}
            <p className="text-sm text-gray-600 mb-6">
              Hiển thị 1–{Math.min(20, categoryStories.length)} của {categoryStories.length} kết quả
            </p>

            {/* Stories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {categoryStories.map(story => (
                <StoryCard key={story.id} story={story} size="md" />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>Trước</Button>
                <Button variant="primary" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="px-2 text-gray-500">...</span>
                <Button variant="outline" size="sm">10</Button>
                <Button variant="outline" size="sm">Sau</Button>
              </nav>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}