import React from 'react';
import { Badge } from '@/components/atoms/Badge';

interface TagListProps {
  tags: string[];
  variant?: 'primary' | 'secondary';
  clickable?: boolean;
  onTagClick?: (tag: string) => void;
}

export const TagList: React.FC<TagListProps> = ({
  tags,
  variant = 'primary',
  clickable = false,
  onTagClick
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={clickable ? 'cursor-pointer hover:scale-105 transition-transform' : ''}
          onClick={() => clickable && onTagClick?.(tag)}
        >
          <Badge variant={variant}>
            {tag}
          </Badge>
        </div>
      ))}
    </div>
  );
};