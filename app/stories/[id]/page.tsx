import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { StoryCard } from '@/components/molecules/StoryCard';
import { Rating } from '@/components/molecules/Rating';
import { TagList } from '@/components/molecules/TagList';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import mockData from '@/data/mock.json';
import { 
  Heart, 
  Share2, 
  BookOpen, 
  Eye, 
  Users, 
  Calendar,
  MessageCircle,
  ThumbsUp,
  ChevronRight,
  Play
} from 'lucide-react';

interface StoryPageProps {
  params: {
    id: string;
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  const { stories, chapters, comments } = mockData;
  const story = stories.find(s => s.id === parseInt(params.id));
  const storyChapters = chapters.filter(c => c.storyId === parseInt(params.id));
  const storyComments = comments.filter(c => c.storyId === parseInt(params.id));
  const recommendations = stories.filter(s => s.id !== parseInt(params.id)).slice(0, 6);

  if (!story) {
    return <div>Story not found</div>;
  }

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
          <a href={`/categories/${story.category.toLowerCase()}`} className="hover:text-blue-600">
            {story.category}
          </a>
          <span>/</span>
          <span className="text-gray-900 font-medium line-clamp-1">{story.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cover Image */}
            <div className="flex-shrink-0">
              <Image
                src={story.cover}
                alt={story.title}
                width={300}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Story Info */}
            <div className="flex-1">
              <div className="mb-4">
                <Badge variant="primary" className="mb-2">{story.category}</Badge>
                {story.completed && <Badge variant="success" className="ml-2">Hoàn thành</Badge>}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{story.title}</h1>
              
              <p className="text-xl text-gray-600 mb-4">
                bởi <a href="#" className="text-blue-600 hover:underline">{story.author}</a>
              </p>

              <div className="mb-6">
                <Rating rating={story.rating} totalRatings={story.totalRatings} size="lg" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Eye className="w-5 h-5 text-gray-400 mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {(story.views / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-600">Lượt xem</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Heart className="w-5 h-5 text-gray-400 mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {(story.follows / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-gray-600">Theo dõi</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <BookOpen className="w-5 h-5 text-gray-400 mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{story.chapters}</div>
                  <div className="text-sm text-gray-600">Chương</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Calendar className="w-5 h-5 text-gray-400 mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {new Date(story.lastUpdated).toLocaleDateString('vi-VN')}
                  </div>
                  <div className="text-sm text-gray-600">Cập nhật</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button size="lg" className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Đọc ngay
                </Button>
                <Button variant="outline" size="lg" className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Theo dõi
                </Button>
                <Button variant="outline" size="lg" className="flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Chia sẻ
                </Button>
              </div>

              <div className="mb-4">
                <TagList tags={story.tags} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              <button className="border-b-2 border-blue-600 text-blue-600 py-4 px-1 font-medium">
                Về truyện
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-1">
                Mục lục ({storyChapters.length})
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-1">
                Đánh giá ({story.totalRatings})
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-1">
                Bình luận ({storyComments.length})
              </button>
            </nav>
          </div>

          <div className="p-8">
            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Tóm tắt</h3>
              <p className="text-gray-700 leading-relaxed">{story.summary}</p>
            </div>

            {/* Chapter List Preview */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Chương mới nhất</h3>
              <div className="space-y-3">
                {storyChapters.slice(0, 5).map(chapter => (
                  <div key={chapter.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        Chương {chapter.chapterNumber}: {chapter.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {new Date(chapter.publishedAt).toLocaleDateString('vi-VN')} • {chapter.views.toLocaleString()} lượt xem
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline">Xem tất cả chương</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-6">Bình luận ({storyComments.length})</h3>
            
            <div className="space-y-6">
              {storyComments.map(comment => (
                <div key={comment.id} className="flex space-x-4">
                  <Image
                    src={comment.avatar}
                    alt={comment.username}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-900">{comment.username}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.content}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="text-gray-500 hover:text-blue-600">
                        Trả lời ({comment.replies})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button variant="outline">Xem thêm bình luận</Button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-6">Truyện tương tự</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {recommendations.map(story => (
                <StoryCard key={story.id} story={story} size="sm" />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden">
        <div className="flex space-x-3">
          <Button className="flex-1">Đọc ngay</Button>
          <Button variant="outline" className="flex items-center">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="flex items-center">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}