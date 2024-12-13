import React from 'react';
import { Tag } from 'lucide-react';
import { ReadingStats } from '../../types/profile';

interface TopicDistributionProps {
  stats: ReadingStats;
}

export const TopicDistribution: React.FC<TopicDistributionProps> = ({ stats }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Top Topics</h3>
        <Tag className="w-5 h-5 text-blue-600" />
      </div>

      <div className="space-y-4">
        {stats.topTopics.map((topic, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">{topic.tag}</span>
              <span className="text-gray-500">{topic.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${topic.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};