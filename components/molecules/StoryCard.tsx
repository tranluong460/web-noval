import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/atoms/Badge';
import { Star, Eye, Heart } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  author: string;
  cover: string;
  category: string;
  rating: number;
  views: number;
  follows: number;
  status: string;
  completed: boolean;
}

interface StoryCardProps {
  story: Story;
  size?: 'sm' | 'md' | 'lg';
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, size = 'md' }) => {
  const cardSizes = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64'
  };

  const imageSizes = {
    sm: { width: 128, height: 192 },
    md: { width: 192, height: 288 },
    lg: { width: 256, height: 384 }
  };

  return (
    <div className={`${cardSizes[size]} group cursor-pointer`}>
      <Link href={`/stories/${story.id}`}>
        <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <Image
            src={story.cover}
            alt={story.title}
            width={imageSizes[size].width}
            height={imageSizes[size].height}
            className="w-full h-auto object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Xem chi tiết
              </button>
            </div>
          </div>

          {/* Status Badge */}
          {story.completed && (
            <div className="absolute top-2 right-2">
              <Badge variant="success">Hoàn thành</Badge>
            </div>
          )}
        </div>

        <div className="mt-3 space-y-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {story.title}
          </h3>
          
          <p className="text-sm text-gray-600">
            by {story.author}
          </p>

          <div className="flex items-center justify-between">
            <Badge variant="primary" size="sm">
              {story.category}
            </Badge>
            
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{story.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{(story.views / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-3 h-3" />
              <span>{(story.follows / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};