import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  totalRatings?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  totalRatings,
  size = 'md',
  showNumber = true
}) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizes[size]} ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {showNumber && (
        <div className={`${textSizes[size]} text-gray-600 flex items-center space-x-1`}>
          <span>{rating.toFixed(1)}</span>
          {totalRatings && (
            <span className="text-gray-400">
              ({totalRatings.toLocaleString()})
            </span>
          )}
        </div>
      )}
    </div>
  );
};