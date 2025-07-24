import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Carousel } from '@/components/organisms/Carousel';
import { StoryCard } from '@/components/molecules/StoryCard';
import { TagList } from '@/components/molecules/TagList';
import { Rating } from '@/components/molecules/Rating';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import mockData from '@/data/mock.json';
import { 
  TrendingUp, 
  Star, 
  Award, 
  Users, 
  BookOpen, 
  Crown,
  Zap,
  Heart,
  Eye
} from 'lucide-react';

export default function Home() {
  const { stories, tags, rankings, promos } = mockData;
  const featuredStories = stories.filter(story => story.featured);
  const trendingStories = stories.filter(story => story.trending);
  const completedStories = stories.filter(story => story.completed);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Weekly Book Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={featuredStories[0]?.cover}
                      alt={featuredStories[0]?.title}
                      className="w-48 h-72 object-cover rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">
                      {featuredStories[0]?.title}
                    </h1>
                    <p className="text-xl mb-2">by {featuredStories[0]?.author}</p>
                    <p className="text-lg opacity-90 mb-6 line-clamp-3">
                      {featuredStories[0]?.summary}
                    </p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Đọc ngay
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Meet Webnovel</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                        <Award className="w-5 h-5" />
                        <span>Spirity Awards 2024</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                        <Users className="w-5 h-5" />
                        <span>Author Benefits</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                        <BookOpen className="w-5 h-5" />
                        <span>Download App</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Featured Carousel */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Carousel
              stories={featuredStories}
              title="Nổi bật tuần này"
              autoPlay={true}
              autoPlayInterval={5000}
            />
          </div>
        </section>

        {/* Top Fanfic Books */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Fanfic Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Power Ranking */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Crown className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-semibold">Power</h3>
                </div>
                <div className="space-y-4">
                  {rankings.power.slice(0, 3).map((storyId, index) => {
                    const story = stories.find(s => s.id === storyId);
                    return story ? (
                      <div key={story.id} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                        }`}>
                          {index + 1}
                        </div>
                        <img src={story.cover} alt={story.title} className="w-12 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm line-clamp-1">{story.title}</h4>
                          <p className="text-xs text-gray-600">{story.author}</p>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Xem thêm
                </Button>
              </div>

              {/* Collection Ranking */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold">Collection</h3>
                </div>
                <div className="space-y-4">
                  {rankings.collection.slice(0, 3).map((storyId, index) => {
                    const story = stories.find(s => s.id === storyId);
                    return story ? (
                      <div key={story.id} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                        }`}>
                          {index + 1}
                        </div>
                        <img src={story.cover} alt={story.title} className="w-12 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm line-clamp-1">{story.title}</h4>
                          <p className="text-xs text-gray-600">{story.author}</p>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Xem thêm
                </Button>
              </div>

              {/* Active Ranking */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold">Active</h3>
                </div>
                <div className="space-y-4">
                  {rankings.active.slice(0, 3).map((storyId, index) => {
                    const story = stories.find(s => s.id === storyId);
                    return story ? (
                      <div key={story.id} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                        }`}>
                          {index + 1}
                        </div>
                        <img src={story.cover} alt={story.title} className="w-12 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm line-clamp-1">{story.title}</h4>
                          <p className="text-xs text-gray-600">{story.author}</p>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Xem thêm
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="py-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Spirity Awards 2024</h2>
              <p className="text-xl mb-6">Tham gia cuộc thi viết truyện lớn nhất với giải thưởng $50,000!</p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Tham gia ngay
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Thẻ phổ biến</h2>
            <TagList tags={tags} clickable={true} />
          </div>
        </section>

        {/* General Ranking */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Xếp hạng chung</h2>
              <div className="flex space-x-2">
                <Button variant="primary" size="sm">Power</Button>
                <Button variant="outline" size="sm">New</Button>
                <Button variant="outline" size="sm">Collection</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stories.slice(0, 5).map((story) => (
                <StoryCard key={story.id} story={story} size="md" />
              ))}
            </div>
          </div>
        </section>

        {/* Completed Novels */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Truyện hoàn thành</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[...completedStories, ...stories.slice(0, 4)].slice(0, 7).map((story) => (
                <StoryCard key={story.id} story={story} size="sm" />
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl">
                <BookOpen className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Bắt đầu đọc</h3>
                <p className="mb-6">Khám phá hàng nghìn truyện chất lượng cao</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Khám phá ngay
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Tham gia cộng đồng</h3>
                <p className="mb-6">Kết nối với độc giả và tác giả khác</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Tham gia
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Trở thành tác giả</h3>
                <p className="mb-6">Chia sẻ câu chuyện của bạn với thế giới</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Bắt đầu viết
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
