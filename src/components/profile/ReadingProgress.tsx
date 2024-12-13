import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { ReadingStats } from '../../types/profile';

interface ReadingProgressProps {
  stats: ReadingStats;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({ stats }) => {
  const milestones = [10, 25, 50, 100];
  const currentMilestone = milestones.find(m => stats.totalEssaysRead < m) || milestones[milestones.length - 1];
  const progress = (stats.totalEssaysRead / currentMilestone) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Reading Progress</h3>
        <BookOpen className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{stats.totalEssaysRead} essays read</span>
            <span>Next milestone: {currentMilestone}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-600">
            {stats.completionRate}% completion rate
          </span>
        </div>
      </div>
    </div>
  );
};