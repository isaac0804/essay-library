import React from 'react';
import { Clock } from 'lucide-react';
import { StudyTimeBreakdown } from '../../types/profile';

interface StudyTimeChartProps {
  breakdown: StudyTimeBreakdown;
  view: 'daily' | 'weekly' | 'monthly';
}

export const StudyTimeChart: React.FC<StudyTimeChartProps> = ({ breakdown, view }) => {
  const data = breakdown[view];
  const maxMinutes = Math.max(...data.map(d => d.minutes));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Study Time</h3>
        <Clock className="w-5 h-5 text-blue-600" />
      </div>

      <div className="h-40 flex items-end gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center gap-2"
          >
            <div
              className="w-full bg-blue-100 rounded-t transition-all duration-300"
              style={{
                height: `${(item.minutes / maxMinutes) * 100}%`,
              }}
            />
            <span className="text-xs text-gray-600 rotate-45 origin-top-left">
              {item[view === 'daily' ? 'date' : view === 'weekly' ? 'week' : 'month']}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};