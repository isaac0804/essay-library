import React from 'react';
import { BookOpen } from 'lucide-react';
import { Essay } from '../types/essay';
import { Link } from 'react-router-dom';

interface EssayCardProps {
  essay: Essay;
}

export const EssayCard: React.FC<EssayCardProps> = ({ essay }) => {
  return (
    <Link
      to={`/essay/${essay.uuid}`}
      className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {essay.essay_title}
        </h3>
        <BookOpen className="text-blue-600 w-5 h-5 flex-shrink-0 ml-4" />
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {essay.essay.substring(0, 150)}...
      </p>
      <div className="flex flex-wrap gap-2">
        {essay.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            onClick={(e) => e.preventDefault()}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};
