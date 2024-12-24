import React from 'react';
import { BookOpen } from 'lucide-react';
import { Essay } from '../types/essay';
import { Link } from 'react-router-dom';

interface EssayCardProps {
  essay: Essay;
  className?: string;
}

export const EssayCard: React.FC<EssayCardProps> = ({ essay, className = '' }) => {
  return (
    <Link
      to={`/essay/${essay.uuid}`}
      className={`block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-gray-200 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {essay.title}
        </h3>
        <BookOpen className="text-blue-600 w-6 h-6 flex-shrink-0 ml-4" />
      </div>
      <p className="text-gray-600 mb-4 relative">
        <span className="line-clamp-3">
          {essay.content.substring(0, 150)}...
        </span>
        <span className="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white"></span>
      </p>
      <div className="flex flex-wrap gap-2">
        {essay.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors duration-200 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};