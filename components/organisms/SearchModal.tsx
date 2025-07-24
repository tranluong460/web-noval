'use client';

import React, { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { Badge } from '@/components/atoms/Badge';
import mockData from '@/data/mock.json';
import { Search, X, Clock, TrendingUp } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { stories, tags } = mockData;

  const filteredStories = query.length > 0 
    ? stories.filter(story => 
        story.title.toLowerCase().includes(query.toLowerCase()) ||
        story.author.toLowerCase().includes(query.toLowerCase()) ||
        story.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5)
    : [];

  const recentSearches = ['Tu tiên', 'Hệ thống', 'Trọng sinh', 'Ma pháp'];
  const trendingSearches = ['Cultivation', 'System', 'Reincarnation', 'Magic'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Tìm kiếm truyện, tác giả, thể loại..."
                icon={<Search className="w-4 h-4" />}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {query.length > 0 ? (
            <div className="p-4">
              {filteredStories.length > 0 ? (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Kết quả tìm kiếm</h3>
                  <div className="space-y-3">
                    {filteredStories.map(story => (
                      <div key={story.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <img
                          src={story.cover}
                          alt={story.title}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 line-clamp-1">{story.title}</h4>
                          <p className="text-sm text-gray-600">by {story.author}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary" size="sm">{story.category}</Badge>
                            <span className="text-xs text-gray-500">
                              {(story.views / 1000).toFixed(0)}K views
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Không tìm thấy kết quả nào</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 space-y-6">
              {/* Recent Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <h3 className="text-sm font-medium text-gray-900">Tìm kiếm gần đây</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map(search => (
                    <button
                      key={search}
                      onClick={() => setQuery(search)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <h3 className="text-sm font-medium text-gray-900">Xu hướng tìm kiếm</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map(search => (
                    <button
                      key={search}
                      onClick={() => setQuery(search)}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Tags phổ biến</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 10).map(tag => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};