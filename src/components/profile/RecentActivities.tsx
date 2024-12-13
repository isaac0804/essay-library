import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { RecentActivity } from '../../types/profile';

interface RecentActivitiesProps {
  activities: RecentActivity[];
}

export const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              {activity.completed ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <div>
                <h4 className="font-medium text-gray-900">{activity.essayTitle}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(activity.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {Math.floor(activity.timeSpent / 60)}m {activity.timeSpent % 60}s
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};