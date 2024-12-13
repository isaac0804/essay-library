import React from 'react';
import { X } from 'lucide-react';
import { Essay } from '../types/essay';

interface EssayViewerProps {
  essay: Essay;
  onClose: () => void;
}

export const EssayViewer: React.FC<EssayViewerProps> = ({ essay, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{essay.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {essay.category}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {essay.content}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {essay.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};